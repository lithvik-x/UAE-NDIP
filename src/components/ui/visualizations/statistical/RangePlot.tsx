'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from '@/lib/visualization-themes/colors'

interface RangePlotDataPoint {
  category: string
  min: number
  max: number
  median?: number
  mean?: number
  color?: string
}

interface RangePlotProps {
  data: RangePlotDataPoint[]
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
  showMedian?: boolean
  showMean?: boolean
  horizontal?: boolean
  barHeight?: number
  className?: string
}

/**
 * RangePlot - Min-max range visualization
 *
 * Shows range with optional median/mean markers. Lighter than box plot,
 * ideal for showing spread with many categories.
 *
 * Use cases:
 * - Platform engagement range by hour
 * - Topic sentiment range
 * - Price/quantity ranges
 * - Min-max score display
 */
export function RangePlot({
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
  showValues = false,
  showMedian = true,
  showMean = false,
  horizontal = true,
  barHeight = 12,
  className = '',
}: RangePlotProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Get global value range
    const allValues = data.flatMap(d => [d.min, d.max])
    const valueRange = d3.extent(allValues) as [number, number]

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getColor = (d: RangePlotDataPoint, index: number) => {
      if (d.color) return d.color
      if (Array.isArray(colors)) {
        return colors[index % colors.length]
      }
      if (colors && d.category in colors) {
        return (colors as Record<string, string>)[d.category]
      }
      return colorScale(d.category) as string
    }

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    if (horizontal) {
      // Horizontal layout
      const categoryScale = d3.scaleBand()
        .domain(data.map(d => d.category))
        .range([0, innerHeight])
        .padding(0.4)

      const valueScale = d3.scaleLinear()
        .domain(valueRange)
        .range([0, innerWidth])
        .nice()

      data.forEach((d, i) => {
        const y = categoryScale(d.category)!
        const minX = valueScale(d.min)
        const maxX = valueScale(d.max)
        const color = getColor(d, i)

        const group = mainGroup.append('g')

        // Draw range bar
        group.append('rect')
          .attr('x', minX)
          .attr('y', y + (categoryScale.bandwidth() - barHeight) / 2)
          .attr('width', maxX - minX)
          .attr('height', barHeight)
          .attr('fill', color)
          .attr('opacity', 0.7)
          .attr('rx', barHeight / 2)
          .attr('class', 'range-bar')

        // Draw left cap
        group.append('circle')
          .attr('cx', minX)
          .attr('cy', y + categoryScale.bandwidth() / 2)
          .attr('r', barHeight / 2)
          .attr('fill', color)

        // Draw right cap
        group.append('circle')
          .attr('cx', maxX)
          .attr('cy', y + categoryScale.bandwidth() / 2)
          .attr('r', barHeight / 2)
          .attr('fill', color)

        // Draw median marker
        if (showMedian && d.median !== undefined) {
          const medianX = valueScale(d.median)
          group.append('line')
            .attr('x1', medianX)
            .attr('x2', medianX)
            .attr('y1', y + (categoryScale.bandwidth() - barHeight) / 2 - 3)
            .attr('y2', y + (categoryScale.bandwidth() + barHeight) / 2 + 3)
            .attr('stroke', '#fff')
            .attr('stroke-width', 3)
        }

        // Draw mean marker
        if (showMean && d.mean !== undefined) {
          const meanX = valueScale(d.mean)
          group.append('circle')
            .attr('cx', meanX)
            .attr('cy', y + categoryScale.bandwidth() / 2)
            .attr('r', 4)
            .attr('fill', '#fff')
            .attr('stroke', '#334155')
            .attr('stroke-width', 2)
        }

        // Draw label
        if (showLabels) {
          group.append('text')
            .attr('x', -10)
            .attr('y', y + categoryScale.bandwidth() / 2)
            .attr('text-anchor', 'end')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '500')
            .attr('fill', '#334155')
            .text(d.category)
        }

        // Draw values
        if (showValues) {
          // Min value
          group.append('text')
            .attr('x', minX)
            .attr('y', y - 5)
            .attr('text-anchor', 'middle')
            .attr('font-size', '10px')
            .attr('fill', '#64748b')
            .text(d3.format('.0f')(d.min))

          // Max value
          group.append('text')
            .attr('x', maxX)
            .attr('y', y - 5)
            .attr('text-anchor', 'middle')
            .attr('font-size', '10px')
            .attr('fill', '#64748b')
            .text(d3.format('.0f')(d.max))
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
        .domain(data.map(d => d.category))
        .range([0, innerWidth])
        .padding(0.4)

      const valueScale = d3.scaleLinear()
        .domain(valueRange)
        .range([innerHeight, 0])
        .nice()

      data.forEach((d, i) => {
        const x = categoryScale(d.category)!
        const minY = valueScale(d.max)
        const maxY = valueScale(d.min)
        const color = getColor(d, i)

        const group = mainGroup.append('g')

        // Draw range bar
        group.append('rect')
          .attr('x', x + (categoryScale.bandwidth() - barHeight) / 2)
          .attr('y', minY)
          .attr('width', barHeight)
          .attr('height', maxY - minY)
          .attr('fill', color)
          .attr('opacity', 0.7)
          .attr('rx', barHeight / 2)
          .attr('class', 'range-bar')

        // Draw top cap
        group.append('circle')
          .attr('cx', x + categoryScale.bandwidth() / 2)
          .attr('cy', minY)
          .attr('r', barHeight / 2)
          .attr('fill', color)

        // Draw bottom cap
        group.append('circle')
          .attr('cx', x + categoryScale.bandwidth() / 2)
          .attr('cy', maxY)
          .attr('r', barHeight / 2)
          .attr('fill', color)

        // Draw median marker
        if (showMedian && d.median !== undefined) {
          const medianY = valueScale(d.median)
          group.append('line')
            .attr('x1', x + (categoryScale.bandwidth() - barHeight) / 2 - 3)
            .attr('x2', x + (categoryScale.bandwidth() + barHeight) / 2 + 3)
            .attr('y1', medianY)
            .attr('y2', medianY)
            .attr('stroke', '#fff')
            .attr('stroke-width', 3)
        }

        // Draw mean marker
        if (showMean && d.mean !== undefined) {
          const meanY = valueScale(d.mean)
          group.append('circle')
            .attr('cx', x + categoryScale.bandwidth() / 2)
            .attr('cy', meanY)
            .attr('r', 4)
            .attr('fill', '#fff')
            .attr('stroke', '#334155')
            .attr('stroke-width', 2)
        }

        // Draw label
        if (showLabels) {
          group.append('text')
            .attr('x', x + categoryScale.bandwidth() / 2)
            .attr('y', innerHeight + 15)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '500')
            .attr('fill', '#334155')
            .text(d.category)
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

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showValues, showMedian, showMean, horizontal, barHeight])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('range-plot', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
