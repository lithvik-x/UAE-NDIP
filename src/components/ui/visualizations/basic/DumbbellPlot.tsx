'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface DumbbellDataPoint {
  category: string
  value1: number
  value2: number
  color1?: string
  color2?: string
}

interface DumbbellPlotProps {
  data: DumbbellDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  color1?: string
  color2?: string
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  horizontal?: boolean
  dotSize?: number
  className?: string
}

/**
 * DumbbellPlot - Connected dot comparison (before/after)
 *
 * Two dots connected by a line, showing change between two values.
 * Ideal for comparing two time points or groups.
 *
 * Use cases:
 * - Platform rank changes (before/after)
 * - Metric comparison (two periods)
 * - A/B test results
 * - Group comparisons
 */
export function DumbbellPlot({
  data,
  width = 600,
  height = 400,
  marginTop = 20,
  marginRight = 80,
  marginBottom = 60,
  marginLeft = 100,
  color1 = '#0ea5e9',
  color2 = '#8b5cf6',
  showLabels = true,
  labelSize = 12,
  showValues = true,
  horizontal = true,
  dotSize = 8,
  className = '',
}: DumbbellPlotProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Get global value range
    const allValues = data.flatMap(d => [d.value1, d.value2])
    const valueRange = d3.extent(allValues) as [number, number]

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

      data.forEach((d) => {
        const y = categoryScale(d.category)!
        const x1 = valueScale(d.value1)
        const x2 = valueScale(d.value2)
        const c1 = d.color1 || color1
        const c2 = d.color2 || color2

        const group = mainGroup.append('g')

        // Draw connector line
        group.append('line')
          .attr('x1', x1)
          .attr('x2', x2)
          .attr('y1', y + categoryScale.bandwidth() / 2)
          .attr('y2', y + categoryScale.bandwidth() / 2)
          .attr('stroke', '#e2e8f0')
          .attr('stroke-width', 3)
          .attr('class', 'dumbbell-connector')

        // Draw first dot
        group.append('circle')
          .attr('cx', x1)
          .attr('cy', y + categoryScale.bandwidth() / 2)
          .attr('r', dotSize)
          .attr('fill', c1)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
          .attr('class', 'dumbbell-dot-1')

        // Draw second dot
        group.append('circle')
          .attr('cx', x2)
          .attr('cy', y + categoryScale.bandwidth() / 2)
          .attr('r', dotSize)
          .attr('fill', c2)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
          .attr('class', 'dumbbell-dot-2')

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
          // Value 1
          group.append('text')
            .attr('x', x1)
            .attr('y', y + categoryScale.bandwidth() / 2 - 15)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize - 1}px`)
            .attr('font-weight', '600')
            .attr('fill', c1)
            .text(d3.format(',.0f')(d.value1))

          // Value 2
          group.append('text')
            .attr('x', x2)
            .attr('y', y + categoryScale.bandwidth() / 2 - 15)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize - 1}px`)
            .attr('font-weight', '600')
            .attr('fill', c2)
            .text(d3.format(',.0f')(d.value2))

          // Change indicator
          const change = d.value2 - d.value1
          const changePercent = ((change / d.value1) * 100).toFixed(1)
          const midX = (x1 + x2) / 2

          group.append('text')
            .attr('x', midX)
            .attr('y', y + categoryScale.bandwidth() / 2 - 5)
            .attr('text-anchor', 'middle')
            .attr('font-size', '10px')
            .attr('font-weight', '600')
            .attr('fill', change >= 0 ? '#22c55e' : '#ef4444')
            .text(`${change >= 0 ? '+' : ''}${changePercent}%`)
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

      data.forEach((d) => {
        const x = categoryScale(d.category)!
        const y1 = valueScale(d.value1)
        const y2 = valueScale(d.value2)
        const c1 = d.color1 || color1
        const c2 = d.color2 || color2

        const group = mainGroup.append('g')

        // Draw connector line
        group.append('line')
          .attr('x1', x + categoryScale.bandwidth() / 2)
          .attr('x2', x + categoryScale.bandwidth() / 2)
          .attr('y1', y1)
          .attr('y2', y2)
          .attr('stroke', '#e2e8f0')
          .attr('stroke-width', 3)
          .attr('class', 'dumbbell-connector')

        // Draw first dot
        group.append('circle')
          .attr('cx', x + categoryScale.bandwidth() / 2)
          .attr('cy', y1)
          .attr('r', dotSize)
          .attr('fill', c1)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
          .attr('class', 'dumbbell-dot-1')

        // Draw second dot
        group.append('circle')
          .attr('cx', x + categoryScale.bandwidth() / 2)
          .attr('cy', y2)
          .attr('r', dotSize)
          .attr('fill', c2)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
          .attr('class', 'dumbbell-dot-2')

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

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, color1, color2, showLabels, labelSize, showValues, horizontal, dotSize])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('dumbbell-plot', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
