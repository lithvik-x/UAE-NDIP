'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface PyramidDataPoint {
  name: string
  value: number
  color?: string
}

interface PyramidChartProps {
  data: PyramidDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: string[]
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  showPercentages?: boolean
  inverted?: boolean
  className?: string
}

/**
 * PyramidChart - Hierarchical layer visualization
 *
 * Stacked trapezoids forming a pyramid. Width at each level represents
 * value magnitude. Ideal for showing hierarchy or funnel stages.
 *
 * Use cases:
 * - Audience reach cascade
 * - Maslow-style hierarchy
 * - Platform user tiers
 * - Content depth levels
 */
export function PyramidChart({
  data,
  width = 500,
  height = 500,
  marginTop = 20,
  marginRight = 120,
  marginBottom = 40,
  marginLeft = 120,
  colors,
  showLabels = true,
  labelSize = 12,
  showValues = true,
  showPercentages = true,
  inverted = false,
  className = '',
}: PyramidChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const maxValue = d3.max(data, d => d.value) || 1
    const total = d3.sum(data, d => d.value)

    // Color scale
    const defaultColors = [
      '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7',
      '#d946ef', '#ec4899', '#f43f5e', '#ef4444', '#f97316',
    ]
    const colorScale = d3.scaleOrdinal(colors || defaultColors)

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Calculate pyramid dimensions
    const pyramidTop = inverted ? 0 : innerHeight * 0.1
    const pyramidBottom = inverted ? innerHeight * 0.9 : innerHeight
    const pyramidHeight = pyramidBottom - pyramidTop
    const centerX = innerWidth / 2

    const levelHeight = pyramidHeight / data.length

    data.forEach((d, i) => {
      const normalizedValue = d.value / maxValue
      const levelTop = pyramidTop + i * levelHeight
      const levelBottom = levelTop + levelHeight

      // Calculate widths at top and bottom of this level
      const topWidth = innerWidth * (1 - (i / data.length) * 0.8) * normalizedValue
      const bottomWidth = innerWidth * (1 - ((i + 1) / data.length) * 0.8) * normalizedValue

      const color = d.color || colorScale(i.toString()) as string

      const group = mainGroup.append('g')

      // Draw trapezoid
      const pathData = `
        M ${centerX - topWidth / 2} ${levelTop}
        L ${centerX + topWidth / 2} ${levelTop}
        L ${centerX + bottomWidth / 2} ${levelBottom}
        L ${centerX - bottomWidth / 2} ${levelBottom}
        Z
      `

      group.append('path')
        .attr('d', pathData)
        .attr('fill', color)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .attr('opacity', 0.85)
        .attr('class', 'pyramid-level')
        .style('transition', 'opacity 0.2s')
        .on('mouseover', function() {
          d3.select(this).attr('opacity', 1)
        })
        .on('mouseout', function() {
          d3.select(this).attr('opacity', 0.85)
        })

      // Draw labels
      if (showLabels) {
        const labelY = (levelTop + levelBottom) / 2

        // Left label
        group.append('text')
          .attr('x', centerX - Math.max(topWidth, bottomWidth) / 2 - 10)
          .attr('y', labelY)
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', color)
          .text(d.name)
      }

      // Draw values
      if (showValues || showPercentages) {
        const labelY = (levelTop + levelBottom) / 2

        if (showValues) {
          group.append('text')
            .attr('x', centerX)
            .attr('y', labelY - 8)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', `${labelSize + 2}px`)
            .attr('font-weight', '700')
            .attr('fill', '#fff')
            .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
            .text(d3.format(',.0f')(d.value))
        }

        if (showPercentages) {
          const percentage = ((d.value / total) * 100).toFixed(1)
          group.append('text')
            .attr('x', centerX)
            .attr('y', labelY + 10)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', `${labelSize - 1}px`)
            .attr('font-weight', '500')
            .attr('fill', '#fff')
            .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
            .text(`${percentage}%`)
        }
      }
    })

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showValues, showPercentages, inverted])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('pyramid-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
