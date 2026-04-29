'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from '@/lib/visualization-themes/colors'

interface DotPlotDataPoint {
  category: string
  value: number
  series?: string
  color?: string
}

interface DotPlotProps {
  data: DotPlotDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  horizontal?: boolean
  dotSize?: number
  showConnectors?: boolean
  stacked?: boolean
  className?: string
  onDotClick?: (point: DotPlotDataPoint) => void
}

/**
 * DotPlot - Dot chart for categorical comparison
 *
 * Points positioned along one axis. Lightweight alternative to bar chart.
 * Ideal for showing exact values without heavy visual weight.
 *
 * Use cases:
 * - Platform ranking by metric
 * - Topic score comparison
 * - Before/after comparison
 * - Multi-series metric display
 */
export function DotPlot({
  data,
  width = 600,
  height = 400,
  marginTop = 20,
  marginRight = 80,
  marginBottom = 60,
  marginLeft = 100,
  colors,
  showLabels = true,
  labelSize = 12,
  showValues = true,
  horizontal = true,
  dotSize = 6,
  showConnectors = true,
  stacked = false,
  className = '',
  onDotClick,
}: DotPlotProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredDot, setHoveredDot] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const maxValue = d3.max(data, d => d.value) || 1

    // Check for multiple series
    const hasMultipleSeries = data.some(d => d.series)
    const series = hasMultipleSeries ? Array.from(new Set(data.map(d => d.series))) : ['default']

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getColor = (d: DotPlotDataPoint, index: number) => {
      if (d.color) return d.color
      // Check series first
      if (hasMultipleSeries && d.series) {
        if (Array.isArray(colors)) {
          return colors[index % colors.length]
        }
        if (colors && d.series in colors) {
          return (colors as Record<string, string>)[d.series]
        }
        return colorScale(d.series) as string
      }
      // Check category
      if (Array.isArray(colors)) {
        return colors[index % colors.length]
      }
      if (colors && d.category && d.category in colors) {
        return (colors as Record<string, string>)[d.category]
      }
      return colorScale(d.category) as string
    }

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    if (horizontal) {
      // Horizontal layout
      const categoryScale = d3.scaleBand()
        .domain(data.map((d, i) => hasMultipleSeries && d.series ? `${d.category}-${d.series}` : d.category))
        .range([0, innerHeight])
        .padding(stacked ? 0.1 : 0.5)

      const valueScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([0, innerWidth])

      // Draw connector lines
      if (showConnectors) {
        mainGroup.selectAll('.connector')
          .data(data)
          .join('line')
          .attr('x1', 0)
          .attr('x2', d => valueScale(d.value))
          .attr('y1', (d, i) => {
            const key = hasMultipleSeries && d.series ? `${d.category}-${d.series}` : d.category
            return categoryScale(key)! + categoryScale.bandwidth() / 2
          })
          .attr('y2', (d, i) => {
            const key = hasMultipleSeries && d.series ? `${d.category}-${d.series}` : d.category
            return categoryScale(key)! + categoryScale.bandwidth() / 2
          })
          .attr('stroke', '#e2e8f0')
          .attr('stroke-width', 1)
          .attr('stroke-dasharray', '3,3')
      }

      // Draw dots
      const dots = mainGroup.selectAll('.dot-group')
        .data(data)
        .join('g')
        .attr('class', 'dot-group')
        .style('cursor', onDotClick ? 'pointer' : 'default')

      dots.each(function(d, i) {
        const group = d3.select(this)
        const key = hasMultipleSeries && d.series ? `${d.category}-${d.series}` : d.category
        const y = categoryScale(key)! + categoryScale.bandwidth() / 2
        const x = valueScale(d.value)
        const color = getColor(d, i)

        group.append('circle')
          .attr('cx', x)
          .attr('cy', y)
          .attr('r', dotSize)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
          .attr('opacity', 0.9)
          .attr('class', 'dot-plot-dot')
          .style('transition', 'all 0.2s')
          .on('mouseover', function() {
            d3.select(this)
              .attr('r', dotSize * 1.3)
              .attr('opacity', 1)
            setHoveredDot(d.category)
          })
          .on('mouseout', function() {
            d3.select(this)
              .attr('r', dotSize)
              .attr('opacity', 0.9)
            setHoveredDot(null)
          })
          .on('click', () => {
            onDotClick?.(d)
          })

        // Draw label
        if (showLabels) {
          group.append('text')
            .attr('x', -10)
            .attr('y', y)
            .attr('text-anchor', 'end')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '500')
            .attr('fill', '#334155')
            .text(d.category)
        }

        // Draw value
        if (showValues) {
          group.append('text')
            .attr('x', x + dotSize + 5)
            .attr('y', y)
            .attr('text-anchor', 'start')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', `${labelSize - 1}px`)
            .attr('font-weight', '600')
            .attr('fill', color)
            .text(d3.format(',.0f')(d.value))
        }
      })

      // Add X axis
      const xAxis = d3.axisBottom(valueScale)
        .ticks(5)
        .tickFormat(d3.format('.0f'))

      mainGroup.append('g')
        .attr('transform', `translate(0, ${innerHeight})`)
        .attr('class', 'x-axis')
        .call(xAxis as any)

    } else {
      // Vertical layout
      const categoryScale = d3.scaleBand()
        .domain(data.map((d, i) => hasMultipleSeries && d.series ? `${d.category}-${d.series}` : d.category))
        .range([0, innerWidth])
        .padding(stacked ? 0.1 : 0.5)

      const valueScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([innerHeight, 0])

      // Draw connector lines
      if (showConnectors) {
        mainGroup.selectAll('.connector')
          .data(data)
          .join('line')
          .attr('x1', (d, i) => {
            const key = hasMultipleSeries && d.series ? `${d.category}-${d.series}` : d.category
            return categoryScale(key)! + categoryScale.bandwidth() / 2
          })
          .attr('x2', (d, i) => {
            const key = hasMultipleSeries && d.series ? `${d.category}-${d.series}` : d.category
            return categoryScale(key)! + categoryScale.bandwidth() / 2
          })
          .attr('y1', innerHeight)
          .attr('y2', d => valueScale(d.value))
          .attr('stroke', '#e2e8f0')
          .attr('stroke-width', 1)
          .attr('stroke-dasharray', '3,3')
      }

      // Draw dots
      const dots = mainGroup.selectAll('.dot-group')
        .data(data)
        .join('g')
        .attr('class', 'dot-group')
        .style('cursor', onDotClick ? 'pointer' : 'default')

      dots.each(function(d, i) {
        const group = d3.select(this)
        const key = hasMultipleSeries && d.series ? `${d.category}-${d.series}` : d.category
        const x = categoryScale(key)! + categoryScale.bandwidth() / 2
        const y = valueScale(d.value)
        const color = getColor(d, i)

        group.append('circle')
          .attr('cx', x)
          .attr('cy', y)
          .attr('r', dotSize)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
          .attr('opacity', 0.9)
          .attr('class', 'dot-plot-dot')
          .style('transition', 'all 0.2s')
          .on('mouseover', function() {
            d3.select(this)
              .attr('r', dotSize * 1.3)
              .attr('opacity', 1)
            setHoveredDot(d.category)
          })
          .on('mouseout', function() {
            d3.select(this)
              .attr('r', dotSize)
              .attr('opacity', 0.9)
            setHoveredDot(null)
          })
          .on('click', () => {
            onDotClick?.(d)
          })

        // Draw label
        if (showLabels) {
          group.append('text')
            .attr('x', x)
            .attr('y', innerHeight + 15)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '500')
            .attr('fill', '#334155')
            .text(d.category)
        }

        // Draw value
        if (showValues) {
          group.append('text')
            .attr('x', x)
            .attr('y', y - 10)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize - 1}px`)
            .attr('font-weight', '600')
            .attr('fill', color)
            .text(d3.format(',.0f')(d.value))
        }
      })

      // Add Y axis
      const yAxis = d3.axisLeft(valueScale)
        .ticks(5)
        .tickFormat(d3.format('.0f'))

      mainGroup.append('g')
        .attr('class', 'y-axis')
        .call(yAxis as any)
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showValues, horizontal, dotSize, showConnectors, stacked, onDotClick])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('dot-plot', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
