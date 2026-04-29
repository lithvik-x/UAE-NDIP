'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from '@/lib/visualization-themes/colors'

interface RidgelineDataPoint {
  value: number
  category: string
}

interface RidgelinePlotProps {
  data: RidgelineDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: Record<string, string> | string[]
  bandwidth?: number
  showLabels?: boolean
  labelSize?: number
  overlap?: number
  scale?: 'global' | 'local'
  className?: string
}

/**
 * RidgelinePlot - Stacked density plots (Joyplot)
 *
 * Multiple density plots stacked vertically with overlapping.
 * Each peak shows distribution for one category.
 *
 * Use cases:
 * - Hourly engagement distribution by day
 * - Sentiment distribution by platform
 * - Score distribution by region
 * - Metric comparison over periods
 */
export function RidgelinePlot({
  data,
  width = 700,
  height = 500,
  marginTop = 30,
  marginRight = 30,
  marginBottom = 40,
  marginLeft = 80,
  colors,
  bandwidth = 20,
  showLabels = true,
  labelSize = 11,
  overlap = 0.5,
  scale = 'global',
  className = '',
}: RidgelinePlotProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const categories = Array.from(new Set(data.map(d => d.category)))
    const categoryCount = categories.length

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getCategoryColor = (category: string, index: number) => {
      if (Array.isArray(colors)) {
        return colors[index % colors.length]
      }
      if (colors && category in colors) {
        return (colors as Record<string, string>)[category]
      }
      return colorScale(category) as string
    }

    // Get global extent and max density
    const allValues = data.map(d => d.value)
    const valueExtent = d3.extent(allValues) as [number, number]

    const xScale = d3.scaleLinear()
      .domain(valueExtent)
      .range([0, innerWidth])

    // Calculate densities and find max for scaling
    const densities = categories.map((category, catIndex) => {
      const categoryData = data.filter(d => d.category === category)
      const values = categoryData.map(d => d.value)

      // Manual KDE implementation since D3 v7 doesn't include these functions
      function kernelEpanechnikov(bw: number) {
        return (v: number) => {
          v = Math.abs(v / bw)
          return v <= 1 ? 0.75 * (1 - v * v) / bw : 0
        }
      }

      function kernelDensityEstimator(kernel: (v: number) => number, thresholds: number[]) {
        return (values: number[]) => {
          return thresholds.map(t => {
            const y = values.reduce((sum, v) => sum + kernel(t - v), 0) / values.length
            return [t, y] as [number, number]
          })
        }
      }

      const kde = kernelDensityEstimator(kernelEpanechnikov(bandwidth), xScale.ticks(100))
      const density = kde(values)

      const maxDensity = d3.max(density, d => d[1]) || 1

      return { category, density, maxDensity, color: getCategoryColor(category, catIndex) }
    })

    const globalMaxDensity = d3.max(densities, d => d.maxDensity) || 1

    // Calculate row height
    const rowHeight = innerHeight / (categoryCount * (1 - overlap) + overlap)

    // Draw each ridgeline
    densities.forEach((d, i) => {
      const yBase = (categoryCount - 1 - i) * rowHeight * (1 - overlap)
      const maxDensity = scale === 'global' ? globalMaxDensity : d.maxDensity

      const yScale = d3.scaleLinear()
        .domain([0, maxDensity])
        .range([0, rowHeight * 0.8])

      // Draw area
      const area = d3.area()
        .x(d => xScale(d[0]))
        .y0(0)
        .y1(d => -yScale(d[1]))
        .curve(d3.curveBasis)

      const group = mainGroup.append('g')
        .attr('transform', `translate(0, ${yBase + rowHeight * 0.8})`)

      group.append('path')
        .datum(d.density)
        .attr('d', area as any)
        .attr('fill', d.color)
        .attr('opacity', 0.7)
        .attr('class', 'ridgeline-area')

      // Draw line
      const line = d3.line()
        .x(d => xScale(d[0]))
        .y(d => -yScale(d[1]))
        .curve(d3.curveBasis)

      group.append('path')
        .datum(d.density)
        .attr('d', line as any)
        .attr('fill', 'none')
        .attr('stroke', d.color)
        .attr('stroke-width', 2)

      // Draw label
      if (showLabels) {
        group.append('text')
          .attr('x', -10)
          .attr('y', rowHeight * 0.4)
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', d.color)
          .text(d.category)
      }

      // Draw baseline
      group.append('line')
        .attr('x1', 0)
        .attr('x2', innerWidth)
        .attr('y1', 0)
        .attr('y2', 0)
        .attr('stroke', d.color)
        .attr('stroke-width', 1)
        .attr('opacity', 0.5)
    })

    // Add X axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(5)
      .tickFormat(d3.format('.0f'))

    mainGroup.append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .attr('class', 'x-axis')
      .call(xAxis as any)

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, bandwidth, showLabels, labelSize, overlap, scale])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('ridgeline-plot', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
