'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface SpanChartProps {
  data: Array<{
    category: string
    before: number
    after: number
  }>
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  beforeColor?: string
  afterColor?: string
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  showChange?: boolean
  className?: string
}

/**
 * SpanChart - Before/after comparison chart
 *
 * Horizontal bars showing before and after values side by side.
 * Shows magnitude and direction of change clearly.
 *
 * Use cases:
 * - Campaign before/after metrics
 * - Platform pre/post comparison
 * - Strategy impact measurement
 * - A/B test results
 */
export function SpanChart({
  data,
  width = 700,
  height = 400,
  marginTop = 20,
  marginRight = 80,
  marginBottom = 60,
  marginLeft = 120,
  beforeColor = '#94a3b8',
  afterColor = '#0ea5e9',
  showLabels = true,
  labelSize = 12,
  showValues = true,
  showChange = true,
  className = '',
}: SpanChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const maxValue = d3.max(data.flatMap(d => [d.before, d.after])) || 1

    const categoryScale = d3.scaleBand()
      .domain(data.map(d => d.category))
      .range([0, innerHeight])
      .padding(0.3)

    const valueScale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([0, innerWidth / 2 - 20])

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    const centerX = innerWidth / 2

    data.forEach((d) => {
      const y = categoryScale(d.category)!
      const barHeight = categoryScale.bandwidth() / 2 - 4

      const group = mainGroup.append('g')

      // Draw before bar (left side)
      group.append('rect')
        .attr('x', centerX - valueScale(d.before))
        .attr('y', y)
        .attr('width', valueScale(d.before))
        .attr('height', barHeight)
        .attr('fill', beforeColor)
        .attr('rx', 4)
        .attr('opacity', 0.8)

      // Draw after bar (right side)
      group.append('rect')
        .attr('x', centerX)
        .attr('y', y)
        .attr('width', valueScale(d.after))
        .attr('height', barHeight)
        .attr('fill', afterColor)
        .attr('rx', 4)
        .attr('opacity', 0.8)

      // Draw center divider
      group.append('line')
        .attr('x1', centerX)
        .attr('x2', centerX)
        .attr('y1', y - 2)
        .attr('y2', y + barHeight * 2 + 2)
        .attr('stroke', '#cbd5e1')
        .attr('stroke-width', 1)

      // Draw label
      if (showLabels) {
        group.append('text')
          .attr('x', centerX)
          .attr('y', y - 10)
          .attr('text-anchor', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', '#334155')
          .text(d.category)
      }

      // Draw values
      if (showValues) {
        group.append('text')
          .attr('x', centerX - valueScale(d.before) - 8)
          .attr('y', y + barHeight / 2)
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize - 1}px`)
          .attr('font-weight', '600')
          .attr('fill', beforeColor)
          .text(d3.format(',.0f')(d.before))

        group.append('text')
          .attr('x', centerX + valueScale(d.after) + 8)
          .attr('y', y + barHeight / 2)
          .attr('text-anchor', 'start')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize - 1}px`)
          .attr('font-weight', '600')
          .attr('fill', afterColor)
          .text(d3.format(',.0f')(d.after))
      }

      // Draw change indicator
      if (showChange) {
        const change = d.after - d.before
        const changePercent = ((change / d.before) * 100).toFixed(1)

        group.append('text')
          .attr('x', centerX)
          .attr('y', y + barHeight * 2 + 15)
          .attr('text-anchor', 'middle')
          .attr('font-size', `${labelSize - 1}px`)
          .attr('font-weight', '600')
          .attr('fill', change >= 0 ? '#22c55e' : '#ef4444')
          .text(`${change >= 0 ? '+' : ''}${changePercent}%`)
      }
    })

    // Add legend
    mainGroup.append('rect')
      .attr('x', centerX - 80)
      .attr('y', innerHeight + 30)
      .attr('width', 12)
      .attr('height', 12)
      .attr('fill', beforeColor)
      .attr('rx', 2)

    mainGroup.append('text')
      .attr('x', centerX - 62)
      .attr('y', innerHeight + 41)
      .attr('font-size', '11px')
      .attr('fill', '#64748b')
      .text('Before')

    mainGroup.append('rect')
      .attr('x', centerX + 20)
      .attr('y', innerHeight + 30)
      .attr('width', 12)
      .attr('height', 12)
      .attr('fill', afterColor)
      .attr('rx', 2)

    mainGroup.append('text')
      .attr('x', centerX + 38)
      .attr('y', innerHeight + 41)
      .attr('font-size', '11px')
      .attr('fill', '#64748b')
      .text('After')

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, beforeColor, afterColor, showLabels, labelSize, showValues, showChange])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('span-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
