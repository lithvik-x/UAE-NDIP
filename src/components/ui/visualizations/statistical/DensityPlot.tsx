'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from '@/lib/visualization-themes/colors'

interface DensityDataPoint {
  value: number
  category?: string
}

interface DensityPlotProps {
  data: DensityDataPoint[]
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
  showArea?: boolean
  areaOpacity?: number
  className?: string
}

/**
 * DensityPlot - Distribution curve visualization
 *
 * Smooth curve showing probability density. Like a histogram but
 * with continuous curve. Ideal for showing data distribution.
 *
 * Use cases:
 * - Engagement score distribution
 * - Sentiment probability curve
 * - Audience age distribution
 * - Metric frequency analysis
 */
export function DensityPlot({
  data,
  width = 600,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 40,
  marginLeft = 50,
  colors,
  bandwidth = 20,
  showLabels = true,
  labelSize = 12,
  showArea = true,
  areaOpacity = 0.3,
  className = '',
}: DensityPlotProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Check for multiple categories
    const hasCategories = data.some(d => d.category)
    const categories = hasCategories ? Array.from(new Set(data.map(d => d.category))) : ['default']

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

    // Get global extent
    const allValues = data.map(d => d.value)
    const valueExtent = d3.extent(allValues) as [number, number]

    // Create scales
    const xScale = d3.scaleLinear()
      .domain(valueExtent)
      .range([0, innerWidth])

    // Calculate density for each category
    categories.forEach((category, catIndex) => {
      const categoryData = hasCategories
        ? data.filter(d => d.category === category)
        : data

      const values = categoryData.map(d => d.value)

      // Create KDE - Manual implementation since D3 v7 doesn't include these functions
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

      // Find max density for y-scale
      const maxDensity = d3.max(density, d => d[1]) || 1

      const yScale = d3.scaleLinear()
        .domain([0, maxDensity])
        .range([innerHeight, 0])

      const color = getCategoryColor(category || 'default', catIndex)

      // Draw area
      if (showArea) {
        const area = d3.area()
          .x(d => xScale(d[0]))
          .y0(innerHeight)
          .y1(d => yScale(d[1]))
          .curve(d3.curveBasis)

        mainGroup.append('path')
          .datum(density)
          .attr('d', area as any)
          .attr('fill', color)
          .attr('opacity', areaOpacity)
          .attr('class', 'density-area')
      }

      // Draw line
      const line = d3.line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]))
        .curve(d3.curveBasis)

      mainGroup.append('path')
        .datum(density)
        .attr('d', line as any)
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 2.5)
        .attr('class', 'density-line')

      // Draw label
      if (showLabels && hasCategories) {
        const peakX = density.find(d => d[1] === maxDensity)
        if (peakX) {
          mainGroup.append('text')
            .attr('x', xScale(peakX[0]))
            .attr('y', yScale(peakX[1]) - 10)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '600')
            .attr('fill', color)
            .text(category || 'default')
        }
      }
    })

    // Add X axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(5)
      .tickFormat(d3.format('.0f'))

    mainGroup.append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .attr('class', 'x-axis')
      .call(xAxis as any)

    // Add Y axis
    const yAxis = d3.axisLeft(d3.scaleLinear().domain([0, 1]).range([innerHeight, 0]))
      .ticks(5)
      .tickFormat(d3.format('.2f'))

    mainGroup.append('g')
      .attr('class', 'y-axis')
      .call(yAxis as any)

    // Y axis label
    mainGroup.append('text')
      .attr('x', -innerHeight / 2)
      .attr('y', -35)
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .attr('font-size', '11px')
      .attr('fill', '#64748b')
      .text('Density')

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, bandwidth, showLabels, labelSize, showArea, areaOpacity])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('density-plot', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
