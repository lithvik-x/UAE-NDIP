'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from '@/lib/visualization-themes/colors'

interface CycleDataPoint {
  period: string // e.g., "2023-Q1"
  category: string
  value: number
}

interface CyclePlotProps {
  data: CycleDataPoint[]
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
  showMeanLines?: boolean
  className?: string
}

/**
 * CyclePlot - Cyclical data visualization
 *
 * Shows cyclical patterns (seasonal, periodic) with each cycle on
 * separate horizontal lines. Ideal for comparing periods within cycles.
 *
 * Use cases:
 * - Quarterly performance comparison
 * - Monthly engagement patterns
 * - Day-of-week analysis
 * - Seasonal trend visualization
 */
export function CyclePlot({
  data,
  width = 800,
  height = 400,
  marginTop = 40,
  marginRight = 120,
  marginBottom = 60,
  marginLeft = 120,
  colors,
  showLabels = true,
  labelSize = 11,
  showValues = true,
  showMeanLines = true,
  className = '',
}: CyclePlotProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Group by period (cycle)
    const periods = Array.from(new Set(data.map(d => d.period)))
    const categories = Array.from(new Set(data.map(d => d.category)))

    // Calculate mean for each category
    const categoryMeans = new Map(
      categories.map(cat => [
        cat,
        d3.mean(data.filter(d => d.category === cat), d => d.value) || 0
      ])
    )

    // Get global range
    const allValues = data.map(d => d.value)
    const valueRange = d3.extent(allValues) as [number, number]

    const periodScale = d3.scaleBand()
      .domain(periods)
      .range([0, innerWidth])
      .padding(0.2)

    const categoryScale = d3.scaleBand()
      .domain(categories)
      .range([0, innerHeight])
      .padding(0.15)

    const valueScale = d3.scaleLinear()
      .domain(valueRange)
      .range([0, innerWidth / 2 - 20])

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getCategoryColor = (category: string) => {
      if (Array.isArray(colors)) {
        return colors[categories.indexOf(category) % colors.length]
      }
      if (colors && category in colors) {
        return (colors as Record<string, string>)[category]
      }
      return colorScale(category) as string
    }

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    const centerX = innerWidth / 2

    categories.forEach((category) => {
      const y = categoryScale(category)!
      const rowHeight = categoryScale.bandwidth()
      const color = getCategoryColor(category)
      const mean = categoryMeans.get(category)!

      // Draw mean line
      if (showMeanLines) {
        mainGroup.append('line')
          .attr('x1', centerX - valueScale(mean))
          .attr('x2', centerX + valueScale(mean))
          .attr('y1', y + rowHeight / 2)
          .attr('y2', y + rowHeight / 2)
          .attr('stroke', color)
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '4,4')
          .attr('opacity', 0.5)
      }

      // Draw category label
      mainGroup.append('text')
        .attr('x', -10)
        .attr('y', y + rowHeight / 2)
        .attr('text-anchor', 'end')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', `${labelSize}px`)
        .attr('font-weight', '600')
        .attr('fill', color)
        .text(category)
    })

    // Draw data points
    data.forEach((d) => {
      const y = categoryScale(d.category)!
      const rowHeight = categoryScale.bandwidth()
      const x = periodScale(d.period)!
      const barWidth = periodScale.bandwidth() / 2 - 2
      const color = getCategoryColor(d.category)

      const group = mainGroup.append('g')

      // Draw bar extending from center
      const barLength = valueScale(d.value)
      group.append('rect')
        .attr('x', centerX)
        .attr('y', y + rowHeight / 2 - barWidth / 2)
        .attr('width', barLength)
        .attr('height', barWidth)
        .attr('fill', color)
        .attr('opacity', 0.7)
        .attr('class', 'cycle-bar')

      // Draw value
      if (showValues && barWidth > 15) {
        group.append('text')
          .attr('x', centerX + barLength + 5)
          .attr('y', y + rowHeight / 2)
          .attr('text-anchor', 'start')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', '9px')
          .attr('font-weight', '600')
          .attr('fill', color)
          .text(d3.format('.0f')(d.value))
      }
    })

    // Add period labels at bottom
    periods.forEach((period) => {
      const x = periodScale(period)!
      mainGroup.append('text')
        .attr('x', x + periodScale.bandwidth() / 2)
        .attr('y', innerHeight + 15)
        .attr('text-anchor', 'middle')
        .attr('font-size', `${labelSize}px`)
        .attr('font-weight', '500')
        .attr('fill', '#64748b')
        .text(period)
    })

    // Add center line
    mainGroup.append('line')
      .attr('x1', centerX)
      .attr('x2', centerX)
      .attr('y1', 0)
      .attr('y2', innerHeight)
      .attr('stroke', '#cbd5e1')
      .attr('stroke-width', 1)

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showValues, showMeanLines])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('cycle-plot', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
