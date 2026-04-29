'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface SlopeDataPoint {
  category: string
  leftValue: number
  rightValue: number
  color?: string
}

interface SlopeGraphProps {
  data: SlopeDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: Record<string, string> | string[]
  lineWidth?: number
  showLabels?: boolean
  labelSize?: number
  showDots?: boolean
  dotSize?: number
  showValues?: boolean
  leftLabel?: string
  rightLabel?: string
  className?: string
}

/**
 * SlopeGraph - Before/after comparison visualization
 *
 * Shows how values change between two time points for multiple categories.
 * Line slope indicates direction and magnitude of change.
 *
 * Use cases:
 * - Platform rank changes (before/after campaign)
 * - Topic popularity shift (start/end period)
 * - Influencer position changes
 * - Metric comparison (two periods)
 */
export function SlopeGraph({
  data,
  width = 700,
  height = 500,
  marginTop = 40,
  marginRight = 80,
  marginBottom = 60,
  marginLeft = 80,
  colors,
  lineWidth = 2.5,
  showLabels = true,
  labelSize = 12,
  showDots = true,
  dotSize = 5,
  showValues = true,
  leftLabel = 'Before',
  rightLabel = 'After',
  className = '',
}: SlopeGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Calculate rank positions for left and right values
    const leftValues = data.map(d => d.leftValue).sort((a, b) => b - a)
    const rightValues = data.map(d => d.rightValue).sort((a, b) => b - a)

    const getRank = (value: number, sortedValues: number[]) => {
      return sortedValues.indexOf(value) + 1
    }

    // Y scale based on ranks
    const maxRank = data.length
    const yScale = d3.scaleLinear()
      .domain([1, maxRank + 1])
      .range([0, innerHeight])

    // X positions
    const leftX = 50
    const rightX = innerWidth - 50

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getColor = (d: SlopeDataPoint, index: number) => {
      if (d.color) return d.color
      if (Array.isArray(colors)) {
        return colors[index % colors.length]
      }
      if (colors && typeof colors === 'object' && d.category in colors) {
        return (colors as Record<string, string>)[d.category]
      }
      return colorScale(d.category) as string
    }

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw column labels
    mainGroup.append('text')
      .attr('x', leftX)
      .attr('y', -20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', '700')
      .attr('fill', '#334155')
      .text(leftLabel)

    mainGroup.append('text')
      .attr('x', rightX)
      .attr('y', -20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('font-weight', '700')
      .attr('fill', '#334155')
      .text(rightLabel)

    // Draw horizontal grid lines
    for (let i = 1; i <= maxRank; i++) {
      const y = yScale(i)
      mainGroup.append('line')
        .attr('x1', 0)
        .attr('x2', innerWidth)
        .attr('y1', y)
        .attr('y2', y)
        .attr('stroke', '#f1f5f9')
        .attr('stroke-width', 1)
    }

    // Draw lines
    data.forEach((d, i) => {
      const leftRank = getRank(d.leftValue, leftValues)
      const rightRank = getRank(d.rightValue, rightValues)
      const color = getColor(d, i)

      const leftY = yScale(leftRank)
      const rightY = yScale(rightRank)

      // Draw connecting line
      mainGroup.append('line')
        .attr('x1', leftX)
        .attr('y1', leftY)
        .attr('x2', rightX)
        .attr('y2', rightY)
        .attr('stroke', color)
        .attr('stroke-width', lineWidth)
        .attr('stroke-opacity', 0.7)
        .attr('class', 'slope-line')
        .style('transition', 'stroke-opacity 0.2s')
        .on('mouseover', function() {
          d3.select(this).attr('stroke-opacity', 1)
        })
        .on('mouseout', function() {
          d3.select(this).attr('stroke-opacity', 0.7)
        })

      // Draw dots
      if (showDots) {
        // Left dot
        mainGroup.append('circle')
          .attr('cx', leftX)
          .attr('cy', leftY)
          .attr('r', dotSize)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)

        // Right dot
        mainGroup.append('circle')
          .attr('cx', rightX)
          .attr('cy', rightY)
          .attr('r', dotSize)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
      }

      // Draw labels
      if (showLabels) {
        // Left label
        mainGroup.append('text')
          .attr('x', leftX - 15)
          .attr('y', leftY)
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', color)
          .text(d.category)
      }

      // Draw values
      if (showValues) {
        // Left value
        mainGroup.append('text')
          .attr('x', leftX)
          .attr('y', leftY - 12)
          .attr('text-anchor', 'middle')
          .attr('font-size', '11px')
          .attr('font-weight', '500')
          .attr('fill', '#64748b')
          .text(d3.format(',.0f')(d.leftValue))

        // Right value
        mainGroup.append('text')
          .attr('x', rightX)
          .attr('y', rightY - 12)
          .attr('text-anchor', 'middle')
          .attr('font-size', '11px')
          .attr('font-weight', '500')
          .attr('fill', '#64748b')
          .text(d3.format(',.0f')(d.rightValue))

        // Change indicator
        const change = d.rightValue - d.leftValue
        const changePercent = ((change / d.leftValue) * 100).toFixed(1)
        const midX = (leftX + rightX) / 2
        const midY = (leftY + rightY) / 2

        mainGroup.append('text')
          .attr('x', midX)
          .attr('y', midY - 8)
          .attr('text-anchor', 'middle')
          .attr('font-size', '10px')
          .attr('font-weight', '600')
          .attr('fill', change >= 0 ? '#22c55e' : '#ef4444')
          .text(`${change >= 0 ? '+' : ''}${changePercent}%`)
      }
    })

    // Add rank indicators on the left
    mainGroup.selectAll('.rank-label')
      .data([...Array(maxRank)].map((_, i) => i + 1))
      .join('text')
      .attr('x', 10)
      .attr('y', d => yScale(d))
      .attr('text-anchor', 'start')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#94a3b8')
      .text(d => `#${d}`)

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, lineWidth, showLabels, labelSize, showDots, dotSize, showValues, leftLabel, rightLabel])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('slope-graph', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
