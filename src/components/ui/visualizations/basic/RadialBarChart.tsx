'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface RadialBarDataPoint {
  category: string
  value: number
  target?: number
  color?: string
}

interface RadialBarChartProps {
  data: RadialBarDataPoint[]
  width?: number
  height?: number
  innerRadius?: number
  outerRadius?: number
  startAngle?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  showTrack?: boolean
  trackColor?: string
  roundCaps?: boolean
  className?: string
}

/**
 * RadialBarChart - Circular bar chart
 *
 * Bars arranged in a circle around a center point. Each bar represents
 * a different category with length indicating value.
 *
 * Use cases:
 * - KPI gauge ring collection
 * - Platform performance comparison
 * - Goal progress tracking (circular)
 * - Metric score display
 */
export function RadialBarChart({
  data,
  width = 400,
  height = 400,
  innerRadius = 60,
  outerRadius = 150,
  startAngle = -90,
  colors,
  showLabels = true,
  labelSize = 11,
  showValues = true,
  showTrack = true,
  trackColor = '#e2e8f0',
  roundCaps = true,
  className = '',
}: RadialBarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const centerX = width / 2
    const centerY = height / 2

    // Calculate max value for normalization
    const maxValue = d3.max(data, d => d.target || d.value) || d3.max(data, d => d.value) || 1

    // Calculate bar dimensions
    const barWidth = (2 * Math.PI * (innerRadius + outerRadius) / 2 / data.length) * 0.7
    const barGap = barWidth * 0.3

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getColor = (d: RadialBarDataPoint, index: number) => {
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
      .attr('transform', `translate(${centerX}, ${centerY})`)

    // Draw bars
    data.forEach((d, i) => {
      const angle = (startAngle * Math.PI / 180) + (i * 2 * Math.PI / data.length)
      const barLength = ((d.value / maxValue) * (outerRadius - innerRadius))
      const color = getColor(d, i)

      // Calculate bar position
      const x = Math.cos(angle) * (innerRadius + barLength / 2)
      const y = Math.sin(angle) * (innerRadius + barLength / 2)

      // Track (background bar)
      if (showTrack) {
        const trackLength = outerRadius - innerRadius
        mainGroup.append('rect')
          .attr('x', Math.cos(angle) * innerRadius - barWidth / 2)
          .attr('y', Math.sin(angle) * innerRadius - trackLength / 2)
          .attr('width', barWidth)
          .attr('height', trackLength)
          .attr('fill', trackColor)
          .attr('rx', roundCaps ? barWidth / 2 : 0)
          .attr('transform', `rotate(${angle * 180 / Math.PI}, ${Math.cos(angle) * innerRadius}, ${Math.sin(angle) * innerRadius})`)
      }

      // Value bar
      const barGroup = mainGroup.append('g')

      barGroup.append('rect')
        .attr('x', Math.cos(angle) * innerRadius - barWidth / 2)
        .attr('y', Math.sin(angle) * innerRadius)
        .attr('width', barWidth)
        .attr('height', barLength)
        .attr('fill', color)
        .attr('rx', roundCaps ? barWidth / 2 : 0)
        .attr('transform', `rotate(${angle * 180 / Math.PI}, ${Math.cos(angle) * innerRadius}, ${Math.sin(angle) * innerRadius})`)
        .attr('opacity', 0.85)
        .attr('class', 'radial-bar')
        .style('transition', 'opacity 0.2s')
        .on('mouseover', function() {
          d3.select(this).attr('opacity', 1)
        })
        .on('mouseout', function() {
          d3.select(this).attr('opacity', 0.85)
        })

      // Labels
      if (showLabels) {
        const labelRadius = outerRadius + 20
        const labelX = Math.cos(angle) * labelRadius
        const labelY = Math.sin(angle) * labelRadius

        // Calculate text rotation
        const textAngle = angle * 180 / Math.PI
        const textRotation = textAngle > 90 && textAngle < 270 ? textAngle + 180 : textAngle

        barGroup.append('text')
          .attr('x', labelX)
          .attr('y', labelY)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', '#334155')
          .attr('transform', `rotate(${textRotation}, ${labelX}, ${labelY})`)
          .text(d.category)
      }

      // Values
      if (showValues) {
        const valueRadius = innerRadius - 15
        const valueX = Math.cos(angle) * valueRadius
        const valueY = Math.sin(angle) * valueRadius

        barGroup.append('text')
          .attr('x', valueX)
          .attr('y', valueY)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize - 1}px`)
          .attr('font-weight', '700')
          .attr('fill', color)
          .text(d3.format(',.0f')(d.value))
      }

      // Percentage of target
      if (d.target) {
        const percentRadius = innerRadius + (outerRadius - innerRadius) / 2
        const percentX = Math.cos(angle) * percentRadius
        const percentY = Math.sin(angle) * percentRadius

        const percentage = ((d.value / d.target) * 100).toFixed(0)

        barGroup.append('text')
          .attr('x', percentX)
          .attr('y', percentY)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize - 2}px`)
          .attr('font-weight', '600')
          .attr('fill', '#fff')
          .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
          .text(`${percentage}%`)
      }
    })

    // Center text (total)
    const total = d3.sum(data, d => d.value)
    svg.append('text')
      .attr('x', centerX)
      .attr('y', centerY - 5)
      .attr('text-anchor', 'middle')
      .attr('font-size', '28px')
      .attr('font-weight', '700')
      .attr('fill', '#334155')
      .text(d3.format(',.0f')(total))

    svg.append('text')
      .attr('x', centerX)
      .attr('y', centerY + 18)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .attr('font-weight', '500')
      .attr('fill', '#64748b')
      .text('Total')

  }, [data, width, height, innerRadius, outerRadius, startAngle, colors, showLabels, labelSize, showValues, showTrack, trackColor, roundCaps])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('radial-bar-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
