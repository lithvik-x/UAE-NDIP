'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface DonutDataPoint {
  name: string
  value: number
  color?: string
  category?: string
}

interface DonutChartProps {
  data: DonutDataPoint[]
  width?: number
  height?: number
  innerRadius?: number
  outerRadius?: number
  cornerRadius?: number
  colors?: string[]
  showLabels?: boolean
  showPercentages?: boolean
  showValues?: boolean
  labelFontSize?: number
  labelOffset?: number
  startAngle?: number
  endAngle?: number
  sort?: 'asc' | 'desc' | 'none'
  animationDuration?: number
  className?: string
  onSegmentClick?: (point: DonutDataPoint) => void
  onSegmentHover?: (point: DonutDataPoint | null) => void
}

/**
 * DonutChart - Circular part-to-whole with center hole
 *
 * Like a pie chart but with a hollow center for labels or metrics.
 * Ideal for showing share breakdown with summary in center.
 *
 * Use cases:
 * - Platform share of voice
 * - Topic category distribution
 * - Sentiment breakdown
 * - Content type analysis
 */
export function DonutChart({
  data,
  width = 400,
  height = 400,
  innerRadius = 80,
  outerRadius = 150,
  cornerRadius = 0,
  colors,
  showLabels = true,
  showPercentages = true,
  showValues = false,
  labelFontSize = 12,
  labelOffset = 10,
  startAngle = 0,
  endAngle = 2 * Math.PI,
  sort = 'desc',
  animationDuration = 750,
  className = '',
  onSegmentClick,
  onSegmentHover,
}: DonutChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const centerX = width / 2
    const centerY = height / 2

    // Sort data if requested
    let sortedData = [...data]
    if (sort === 'asc') {
      sortedData.sort((a, b) => a.value - b.value)
    } else if (sort === 'desc') {
      sortedData.sort((a, b) => b.value - a.value)
    }

    // Color scale
    const defaultColors = [
      '#0ea5e9', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444',
      '#06b6d4', '#ec4899', '#f97316', '#14b8a6', '#3b82f6',
    ]
    const colorScale = d3.scaleOrdinal(colors || defaultColors)

    // Create pie layout
    const pie = d3.pie<DonutDataPoint>()
      .value(d => d.value)
      .sort(null)
      .startAngle(startAngle)
      .endAngle(endAngle)

    const arcs = pie(sortedData)

    // Create arc generator
    const arc = d3.arc<d3.PieArcDatum<DonutDataPoint>>()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)

    // Create hover arc generator (slightly larger)
    const arcHover = d3.arc<d3.PieArcDatum<DonutDataPoint>>()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius + 10)
      .cornerRadius(cornerRadius)

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`)

    // Draw segments
    const segments = mainGroup.selectAll('.segment')
      .data(arcs)
      .join('path')
      .attr('d', arc)
      .attr('fill', d => d.data.color || colorScale(d.data.name) as string)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .attr('class', 'donut-segment')
      .style('cursor', onSegmentClick ? 'pointer' : 'default')
      .style('transition', 'opacity 0.2s')
      .on('mouseover', function(event, d) {
        setHoveredSegment(d.data.name)

        // Animate to hover state
        d3.select(this)
          .transition()
          .duration(150)
          .attr('d', arcHover as any)

        onSegmentHover?.(d.data)
      })
      .on('mouseout', function(event, d) {
        setHoveredSegment(null)

        // Animate back to normal
        d3.select(this)
          .transition()
          .duration(150)
          .attr('d', arc as any)

        onSegmentHover?.(null)
      })
      .on('click', (event, d) => {
        onSegmentClick?.(d.data)
      })

    // Animate segments on load
    segments
      .attr('opacity', 0)
      .transition()
      .duration(animationDuration)
      .ease(d3.easeCubicOut)
      .attrTween('d', function(d) {
        const interpolator = d3.interpolate({ startAngle: d.startAngle, endAngle: d.startAngle }, d)
        return (t: number) => arc(interpolator(t) as d3.PieArcDatum<DonutDataPoint>) || ''
      })
      .attr('opacity', 1)

    // Add labels
    if (showLabels) {
      const labelRadius = outerRadius + labelOffset

      mainGroup.selectAll('.label')
        .data(arcs.filter(d => (d.endAngle - d.startAngle) > 0.2)) // Only label larger segments
        .join('text')
        .attr('transform', d => {
          const angle = (d.startAngle + d.endAngle) / 2
          const x = Math.cos(angle - Math.PI / 2) * labelRadius
          const y = Math.sin(angle - Math.PI / 2) * labelRadius
          return `translate(${x}, ${y})`
        })
        .attr('text-anchor', d => {
          const angle = (d.startAngle + d.endAngle) / 2
          return (angle > Math.PI / 2 && angle < 3 * Math.PI / 2) ? 'end' : 'start'
        })
        .attr('dominant-baseline', 'middle')
        .attr('font-size', `${labelFontSize}px`)
        .attr('font-weight', '500')
        .attr('fill', '#334155')
        .text(d => d.data.name)

      // Add percentage labels
      if (showPercentages) {
        const total = d3.sum(sortedData, d => d.value)

        mainGroup.selectAll('.percentage')
          .data(arcs.filter(d => (d.endAngle - d.startAngle) > 0.3))
          .join('text')
          .attr('transform', d => {
            const angle = (d.startAngle + d.endAngle) / 2
            const midRadius = (innerRadius + outerRadius) / 2
            const x = Math.cos(angle - Math.PI / 2) * midRadius
            const y = Math.sin(angle - Math.PI / 2) * midRadius
            return `translate(${x}, ${y})`
          })
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelFontSize * 0.9}px`)
          .attr('font-weight', '600')
          .attr('fill', '#fff')
          .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
          .attr('pointer-events', 'none')
          .text(d => {
            const percentage = ((d.value / total) * 100).toFixed(1)
            return `${percentage}%`
          })
      }

      // Add value labels if requested
      if (showValues) {
        mainGroup.selectAll('.value')
          .data(arcs.filter(d => (d.endAngle - d.startAngle) > 0.3))
          .join('text')
          .attr('transform', d => {
            const angle = (d.startAngle + d.endAngle) / 2
            const midRadius = (innerRadius + outerRadius) / 2 + (showPercentages ? 15 : 0)
            const x = Math.cos(angle - Math.PI / 2) * midRadius
            const y = Math.sin(angle - Math.PI / 2) * midRadius
            return `translate(${x}, ${y})`
          })
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelFontSize * 0.8}px`)
          .attr('font-weight', '400')
          .attr('fill', '#fff')
          .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
          .attr('pointer-events', 'none')
          .text(d => d3.format(',.0f')(d.value))
      }
    }

    // Add center text
    const total = d3.sum(sortedData, d => d.value)
    const centerText = svg.append('text')
      .attr('x', centerX)
      .attr('y', centerY)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('class', 'donut-center-text')

    centerText.append('tspan')
      .attr('class', 'total-label')
      .attr('x', centerX)
      .attr('dy', '-0.5em')
      .attr('font-size', '14px')
      .attr('fill', '#64748b')
      .text('Total')

    centerText.append('tspan')
      .attr('class', 'total-value')
      .attr('x', centerX)
      .attr('dy', '1.5em')
      .attr('font-size', '28px')
      .attr('font-weight', 'bold')
      .attr('fill', '#334155')
      .text(d3.format(',.0f')(total))

  }, [data, width, height, innerRadius, outerRadius, cornerRadius, colors, showLabels, showPercentages, showValues, labelFontSize, labelOffset, startAngle, endAngle, sort, animationDuration, onSegmentClick, onSegmentHover])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('donut-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
