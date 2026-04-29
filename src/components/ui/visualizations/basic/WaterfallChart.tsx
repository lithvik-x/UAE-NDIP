'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface WaterfallDataPoint {
  name: string
  value: number
  type?: 'absolute' | 'relative' | 'total'
  color?: string
}

interface WaterfallChartProps {
  data: WaterfallDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  barWidth?: number
  barGap?: number
  positiveColor?: string
  negativeColor?: string
  totalColor?: string
  showValues?: boolean
  showConnectors?: boolean
  connectorColor?: string
  className?: string
}

/**
 * WaterfallChart - Cumulative effect visualization
 *
 * Shows how initial value is affected by positive and negative values.
 * Ideal for showing breakdowns, bridges, and cumulative changes.
 *
 * Use cases:
 * - Audience growth/fallout analysis
 * - Budget variance breakdown
 * - Content performance attribution
 * - KPI component analysis
 */
export function WaterfallChart({
  data,
  width = 700,
  height = 400,
  marginTop = 20,
  marginRight = 30,
  marginBottom = 60,
  marginLeft = 60,
  barWidth = 50,
  barGap = 15,
  positiveColor = '#22c55e',
  negativeColor = '#ef4444',
  totalColor = '#3b82f6',
  showValues = true,
  showConnectors = true,
  connectorColor = '#94a3b8',
  className = '',
}: WaterfallChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Calculate cumulative positions
    let cumulative = 0
    const processedData = data.map((d, i) => {
      let value = d.value
      let start = cumulative
      let end = cumulative
      let isAbsolute = d.type === 'absolute'
      let isTotal = d.type === 'total' || i === data.length - 1

      if (isAbsolute) {
        cumulative = value
        start = 0
        end = value
      } else if (isTotal) {
        end = cumulative
        start = 0
      } else {
        end = cumulative + value
        cumulative = end
      }

      return {
        ...d,
        start,
        end,
        height: end - start,
        isAbsolute,
        isTotal,
        color: d.color || (isTotal ? totalColor : value >= 0 ? positiveColor : negativeColor),
      }
    })

    // Get value range
    const allValues = processedData.flatMap(d => [d.start, d.end])
    const valueExtent = d3.extent(allValues) as [number, number]

    // Create scales
    const xScale = d3.scaleBand()
      .domain(data.map((d, i) => i.toString()))
      .range([0, innerWidth])
      .paddingInner(0.2)

    const yScale = d3.scaleLinear()
      .domain([Math.min(0, valueExtent[0]), Math.max(0, valueExtent[1])])
      .range([innerHeight, 0])
      .nice()

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Zero line
    const zeroY = yScale(0)
    mainGroup.append('line')
      .attr('x1', 0)
      .attr('x2', innerWidth)
      .attr('y1', zeroY)
      .attr('y2', zeroY)
      .attr('stroke', '#cbd5e1')
      .attr('stroke-width', 1.5)
      .attr('stroke-dasharray', '4,4')

    // Draw connectors
    if (showConnectors) {
      processedData.forEach((d, i) => {
        if (i < processedData.length - 1) {
          const x = xScale(i.toString())! + xScale.bandwidth() / 2
          const nextX = xScale((i + 1).toString())! + xScale.bandwidth() / 2

          mainGroup.append('line')
            .attr('x1', x)
            .attr('x2', nextX)
            .attr('y1', yScale(d.end))
            .attr('y2', yScale(d.end))
            .attr('stroke', connectorColor)
            .attr('stroke-width', 1)
            .attr('stroke-dasharray', '3,3')
            .attr('opacity', 0.6)
        }
      })
    }

    // Draw bars
    processedData.forEach((d, i) => {
      const x = xScale(i.toString())!
      const barWidth = xScale.bandwidth()

      if (d.isAbsolute || d.isTotal) {
        // Full bar from 0
        mainGroup.append('rect')
          .attr('x', x)
          .attr('y', Math.min(yScale(d.start), yScale(d.end)))
          .attr('width', barWidth)
          .attr('height', Math.abs(yScale(d.start) - yScale(d.end)))
          .attr('fill', d.color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 1)
          .attr('opacity', 0.85)
          .attr('class', 'waterfall-bar')
      } else {
        // Floating bar
        mainGroup.append('rect')
          .attr('x', x)
          .attr('y', Math.min(yScale(d.start), yScale(d.end)))
          .attr('width', barWidth)
          .attr('height', Math.abs(yScale(d.start) - yScale(d.end)))
          .attr('fill', d.color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 1)
          .attr('opacity', 0.85)
          .attr('class', 'waterfall-bar')
      }

      // Add value labels
      if (showValues) {
        const valueText = d3.format(',.0f')(d.value)
        const labelY = yScale(d.end) + (d.height >= 0 ? -8 : 18)

        mainGroup.append('text')
          .attr('x', x + barWidth / 2)
          .attr('y', labelY)
          .attr('text-anchor', 'middle')
          .attr('font-size', '11px')
          .attr('font-weight', '600')
          .attr('fill', '#334155')
          .text(d.isAbsolute || d.isTotal ? d3.format(',.0f')(d.end) : (d.value >= 0 ? '+' : '') + valueText)
      }

      // Add category labels
      mainGroup.append('text')
        .attr('x', x + barWidth / 2)
        .attr('y', innerHeight + 15)
        .attr('text-anchor', 'middle')
        .attr('font-size', '11px')
        .attr('font-weight', '500')
        .attr('fill', '#64748b')
        .text(d.name)
    })

    // Add Y axis
    const yAxis = d3.axisLeft(yScale)
      .ticks(5)
      .tickFormat(d3.format('.0f'))

    mainGroup.append('g')
      .attr('class', 'y-axis')
      .call(yAxis as any)
      .select('.domain')
      .remove()

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, barWidth, barGap, positiveColor, negativeColor, totalColor, showValues, showConnectors, connectorColor])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('waterfall-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
