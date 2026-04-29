'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from '@/lib/visualization-themes/colors'

interface SparklineDataPoint {
  date: Date | string
  value: number
  category?: string
}

interface SparklineProps {
  data: SparklineDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  color?: string
  strokeWidth?: number
  showArea?: boolean
  areaOpacity?: number
  showDots?: boolean
  dotRadius?: number
  showEndLabel?: boolean
  endLabelFormat?: (value: number) => string
  curve?: 'linear' | 'monotone' | 'step' | 'basis'
  className?: string
}

/**
 * Sparkline - Inline trend indicator
 *
 * Minimal line chart showing trend at a glance. No axes, just the shape.
 * Ideal for embedding in tables, cards, and small containers.
 *
 * Use cases:
 * - Mini trend indicators in data tables
 * - KPI card trend sparklines
 * - Quick velocity indicators
 * - Inline performance trend
 */
export function Sparkline({
  data,
  width = 100,
  height = 30,
  marginTop = 2,
  marginRight = 2,
  marginBottom = 2,
  marginLeft = 2,
  color = CHART_COLORS.primary,
  strokeWidth = 1.5,
  showArea = true,
  areaOpacity = 0.2,
  showDots = false,
  dotRadius = 2,
  showEndLabel = false,
  endLabelFormat = d3.format(',.0f'),
  curve = 'monotone',
  className = '',
}: SparklineProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Parse dates
    const parsedData = data.map(d => ({
      ...d,
      date: d.date instanceof Date ? d.date : new Date(d.date),
    }))

    // Create scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(parsedData, d => d.date) as [Date, Date])
      .range([0, innerWidth])

    const yScale = d3.scaleLinear()
      .domain(d3.extent(parsedData, d => d.value) as [number, number])
      .range([innerHeight, 0])
      .nice()

    // Curve function
    const curveFn = {
      linear: d3.curveLinear,
      monotone: d3.curveMonotoneX,
      step: d3.curveStepAfter,
      basis: d3.curveBasis,
    }[curve] || d3.curveMonotoneX

    // Line generator
    const line = d3.line<typeof parsedData[0]>()
      .x(d => xScale(d.date))
      .y(d => yScale(d.value))
      .curve(curveFn)

    // Area generator
    const area = d3.area<typeof parsedData[0]>()
      .x(d => xScale(d.date))
      .y0(innerHeight)
      .y1(d => yScale(d.value))
      .curve(curveFn)

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw area
    if (showArea) {
      mainGroup.append('path')
        .datum(parsedData)
        .attr('d', area)
        .attr('fill', color)
        .attr('opacity', areaOpacity)
        .attr('class', 'sparkline-area')
    }

    // Draw line
    mainGroup.append('path')
      .datum(parsedData)
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', color)
      .attr('stroke-width', strokeWidth)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .attr('class', 'sparkline-line')

    // Draw dots
    if (showDots) {
      mainGroup.selectAll('dot')
        .data(parsedData)
        .join('circle')
        .attr('cx', d => xScale(d.date))
        .attr('cy', d => yScale(d.value))
        .attr('r', dotRadius)
        .attr('fill', color)
        .attr('class', 'sparkline-dot')
    }

    // Draw end dot
    const lastPoint = parsedData[parsedData.length - 1]
    mainGroup.append('circle')
      .attr('cx', xScale(lastPoint.date))
      .attr('cy', yScale(lastPoint.value))
      .attr('r', dotRadius * 1.5)
      .attr('fill', color)
      .attr('class', 'sparkline-end-dot')

    // Draw end label
    if (showEndLabel) {
      const label = endLabelFormat(lastPoint.value)
      const textWidth = label.length * 6

      mainGroup.append('rect')
        .attr('x', innerWidth - textWidth - 4)
        .attr('y', 0)
        .attr('width', textWidth + 4)
        .attr('height', 14)
        .attr('fill', color)
        .attr('rx', 2)
        .attr('opacity', 0.9)

      mainGroup.append('text')
        .attr('x', innerWidth - textWidth - 2)
        .attr('y', 11)
        .attr('font-size', '10px')
        .attr('font-weight', '600')
        .attr('fill', '#fff')
        .text(label)
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, color, strokeWidth, showArea, areaOpacity, showDots, dotRadius, showEndLabel, endLabelFormat, curve])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('sparkline', className)}
      style={{ overflow: 'visible' }}
    />
  )
}

/**
 * GroupedSparkline - Multiple sparklines for comparison
 */
interface GroupedSparklineProps extends Omit<SparklineProps, 'color'> {
  series: Array<{
    name: string
    data: SparklineDataPoint[]
    color?: string
  }>
  showLegend?: boolean
  legendPosition?: 'top' | 'right'
}

export function GroupedSparkline({
  series,
  width = 200,
  height = 80,
  showLegend = true,
  legendPosition = 'top',
  className,
  ...commonProps
}: GroupedSparklineProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !series.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - commonProps.marginLeft! - commonProps.marginRight!
    const innerHeight = height - commonProps.marginTop! - commonProps.marginBottom!

    // Get combined data range
    const allData = series.flatMap(s => s.data)
    const parsedData = allData.map(d => ({
      ...d,
      date: d.date instanceof Date ? d.date : new Date(d.date),
    }))

    // Create scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(parsedData, d => d.date) as [Date, Date])
      .range([0, innerWidth])

    const yScale = d3.scaleLinear()
      .domain(d3.extent(parsedData, d => d.value) as [number, number])
      .range([innerHeight, 0])
      .nice()

    const curveFn = {
      linear: d3.curveLinear,
      monotone: d3.curveMonotoneX,
      step: d3.curveStepAfter,
      basis: d3.curveBasis,
    }[commonProps.curve || 'monotone'] || d3.curveMonotoneX

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${commonProps.marginLeft}, ${commonProps.marginTop})`)

    // Draw each series
    series.forEach((s, i) => {
      const colorKeys = Object.keys(CHART_COLORS)
      const color = s.color || CHART_COLORS[i % colorKeys.length === 0 ? 'primary' : colorKeys[i] as keyof typeof CHART_COLORS]

      const line = d3.line<typeof s.data[0]>()
        .x(d => xScale(d.date instanceof Date ? d.date : new Date(d.date)))
        .y(d => yScale(d.value))
        .curve(curveFn)

      const area = d3.area<typeof s.data[0]>()
        .x(d => xScale(d.date instanceof Date ? d.date : new Date(d.date)))
        .y0(innerHeight)
        .y1(d => yScale(d.value))
        .curve(curveFn)

      if (commonProps.showArea) {
        mainGroup.append('path')
          .datum(s.data)
          .attr('d', area)
          .attr('fill', color)
          .attr('opacity', commonProps.areaOpacity ?? 0.3)
      }

      mainGroup.append('path')
        .datum(s.data)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', commonProps.strokeWidth ?? 2)
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')
        .attr('opacity', 0.8)
    })

    // Draw legend
    if (showLegend) {
      const legendGroup = svg.append('g')

      if (legendPosition === 'top') {
        legendGroup.attr('transform', `translate(${commonProps.marginLeft}, 15)`)
        series.forEach((s, i) => {
          const colorKeys = Object.keys(CHART_COLORS)
          const color = s.color || CHART_COLORS[i % colorKeys.length === 0 ? 'primary' : colorKeys[i] as keyof typeof CHART_COLORS]
          const x = i * 70

          legendGroup.append('rect')
            .attr('x', x)
            .attr('y', 0)
            .attr('width', 12)
            .attr('height', 12)
            .attr('fill', color)
            .attr('rx', 2)

          legendGroup.append('text')
            .attr('x', x + 16)
            .attr('y', 10)
            .attr('font-size', '11px')
            .attr('fill', '#64748b')
            .text(s.name)
        })
      }
    }

  }, [series, width, height, showLegend, legendPosition, commonProps])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('grouped-sparkline', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
