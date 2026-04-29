'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface DifferenceDataPoint {
  category: string
  valueA: number
  valueB: number
}

interface DifferenceChartProps {
  data: DifferenceDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colorA?: string
  colorB?: string
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  showZeroLine?: boolean
  className?: string
}

/**
 * DifferenceChart - Two-series difference visualization
 *
 * Shows two series with the difference filled between them.
 * Highlights where one series exceeds the other.
 *
 * Use cases:
 * - This year vs last year comparison
 * - Platform A vs platform B
 * - Pre/post campaign analysis
 * - Budget vs actual tracking
 */
export function DifferenceChart({
  data,
  width = 700,
  height = 400,
  marginTop = 20,
  marginRight = 80,
  marginBottom = 50,
  marginLeft = 80,
  colorA = '#0ea5e9',
  colorB = '#8b5cf6',
  showLabels = true,
  labelSize = 11,
  showValues = true,
  showZeroLine = true,
  className = '',
}: DifferenceChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const categories = data.map(d => d.category)
    const allValues = data.flatMap(d => [d.valueA, d.valueB])
    const valueRange = d3.extent(allValues) as [number, number]

    const xScale = d3.scaleBand()
      .domain(categories)
      .range([0, innerWidth])
      .padding(0.3)

    const yScale = d3.scaleLinear()
      .domain(valueRange)
      .range([innerHeight, 0])
      .nice()

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw zero line
    if (showZeroLine && valueRange[0] <= 0 && valueRange[1] >= 0) {
      mainGroup.append('line')
        .attr('x1', 0)
        .attr('x2', innerWidth)
        .attr('y1', yScale(0))
        .attr('y2', yScale(0))
        .attr('stroke', '#cbd5e1')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '4,4')
    }

    data.forEach((d) => {
      const x = xScale(d.category)!
      const barWidth = xScale.bandwidth()

      const group = mainGroup.append('g')

      const yA = yScale(d.valueA)
      const yB = yScale(d.valueB)
      const zeroY = yScale(0)

      // Determine which value is larger
      const aLarger = d.valueA > d.valueB

      // Draw difference fill
      if (d.valueA !== d.valueB) {
        group.append('rect')
          .attr('x', x)
          .attr('y', Math.min(yA, yB))
          .attr('width', barWidth)
          .attr('height', Math.abs(yA - yB))
          .attr('fill', aLarger ? colorA : colorB)
          .attr('opacity', 0.3)
      }

      // Draw value A line
      group.append('line')
        .attr('x1', x)
        .attr('x2', x + barWidth)
        .attr('y1', yA)
        .attr('y2', yA)
        .attr('stroke', colorA)
        .attr('stroke-width', 3)
        .attr('class', 'line-a')

      // Draw value B line
      group.append('line')
        .attr('x1', x)
        .attr('x2', x + barWidth)
        .attr('y1', yB)
        .attr('y2', yB)
        .attr('stroke', colorB)
        .attr('stroke-width', 3)
        .attr('class', 'line-b')

      // Draw dot for value A
      group.append('circle')
        .attr('cx', x + barWidth / 2)
        .attr('cy', yA)
        .attr('r', 5)
        .attr('fill', colorA)

      // Draw dot for value B
      group.append('circle')
        .attr('cx', x + barWidth / 2)
        .attr('cy', yB)
        .attr('r', 5)
        .attr('fill', colorB)

      // Draw category label
      if (showLabels) {
        group.append('text')
          .attr('x', x + barWidth / 2)
          .attr('y', innerHeight + 15)
          .attr('text-anchor', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '500')
          .attr('fill', '#334155')
          .text(d.category)
      }

      // Draw values
      if (showValues) {
        // Value A
        group.append('text')
          .attr('x', x + barWidth / 2)
          .attr('y', yA - 10)
          .attr('text-anchor', 'middle')
          .attr('font-size', '10px')
          .attr('font-weight', '600')
          .attr('fill', colorA)
          .text(d3.format('.0f')(d.valueA))

        // Value B
        group.append('text')
          .attr('x', x + barWidth / 2)
          .attr('y', yB + 15)
          .attr('text-anchor', 'middle')
          .attr('font-size', '10px')
          .attr('font-weight', '600')
          .attr('fill', colorB)
          .text(d3.format('.0f')(d.valueB))
      }

      // Draw difference indicator
      const diff = d.valueB - d.valueA
      const diffPercent = d.valueA !== 0 ? ((diff / d.valueA) * 100).toFixed(1) : '0'

      group.append('text')
        .attr('x', x + barWidth / 2)
        .attr('y', (yA + yB) / 2)
        .attr('text-anchor', 'middle')
        .attr('font-size', '11px')
        .attr('font-weight', '700')
        .attr('fill', diff >= 0 ? '#22c55e' : '#ef4444')
        .text(`${diff >= 0 ? '+' : ''}${diffPercent}%`)
    })

    // Add Y axis
    const yAxis = d3.axisLeft(yScale)
      .ticks(5)
      .tickFormat(d3.format('.0f'))

    mainGroup.append('g')
      .attr('class', 'y-axis')
      .call(yAxis as any)

    // Add legend
    const legendGroup = svg.append('g')
      .attr('transform', `translate(${width - marginRight - 100}, ${marginTop})`)

    legendGroup.append('line')
      .attr('x1', 0)
      .attr('x2', 25)
      .attr('y1', 0)
      .attr('y2', 0)
      .attr('stroke', colorA)
      .attr('stroke-width', 3)

    legendGroup.append('text')
      .attr('x', 32)
      .attr('y', 0)
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '11px')
      .attr('fill', '#64748b')
      .text('Value A')

    legendGroup.append('line')
      .attr('x1', 0)
      .attr('x2', 25)
      .attr('y1', 20)
      .attr('y2', 20)
      .attr('stroke', colorB)
      .attr('stroke-width', 3)

    legendGroup.append('text')
      .attr('x', 32)
      .attr('y', 20)
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '11px')
      .attr('fill', '#64748b')
      .text('Value B')

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colorA, colorB, showLabels, labelSize, showValues, showZeroLine])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('difference-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
