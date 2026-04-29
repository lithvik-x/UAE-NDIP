'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from '@/lib/visualization-themes/colors'

interface StepDataPoint {
  label: string
  value: number
  description?: string
  icon?: string
}

interface StepChartProps {
  data: StepDataPoint[]
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
  showDescriptions?: boolean
  orientation?: 'horizontal' | 'vertical'
  stepSize?: number
  className?: string
}

/**
 * StepChart - Stepped comparison visualization
 *
 * Shows sequential steps with values that can go up or down.
 * Each step is labeled and shows the change from previous.
 *
 * Use cases:
 * - Customer journey stages
 * - Funnel with values
 * - Sequential process metrics
 * - Stage-by-stage analysis
 */
export function StepChart({
  data,
  width = 700,
  height = 400,
  marginTop = 30,
  marginRight = 80,
  marginBottom = 50,
  marginLeft = 120,
  colors,
  showLabels = true,
  labelSize = 12,
  showValues = true,
  showDescriptions = false,
  orientation = 'horizontal',
  stepSize = 60,
  className = '',
}: StepChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const maxValue = d3.max(data, d => d.value) || 1
    const minValue = d3.min(data, d => d.value) || 0

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getStepColor = (d: StepDataPoint, index: number) => {
      if (Array.isArray(colors)) {
        return colors[index % colors.length]
      }
      if (colors && typeof colors === 'object' && d.label in colors) {
        return (colors as Record<string, string>)[d.label]
      }
      return colorScale(d.label) as string
    }

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    if (orientation === 'horizontal') {
      // Horizontal layout
      const valueScale = d3.scaleLinear()
        .domain([minValue, maxValue])
        .range([0, innerHeight])
        .nice()

      const stepWidth = innerWidth / data.length

      data.forEach((d, i) => {
        const x = i * stepWidth
        const y = valueScale(d.value)
        const color = getStepColor(d, i)

        const group = mainGroup.append('g')

        // Draw step line
        if (i > 0) {
          const prevY = valueScale(data[i - 1].value)
          group.append('line')
            .attr('x1', x)
            .attr('x2', x)
            .attr('y1', prevY)
            .attr('y2', y)
            .attr('stroke', d.value >= data[i - 1].value ? '#22c55e' : '#ef4444')
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '4,4')
        }

        // Draw step marker
        group.append('rect')
          .attr('x', x + stepWidth / 2 - stepSize / 2)
          .attr('y', y - stepSize / 2)
          .attr('width', stepSize)
          .attr('height', stepSize)
          .attr('fill', color)
          .attr('rx', 8)
          .attr('opacity', 0.85)

        // Draw value
        if (showValues) {
          group.append('text')
            .attr('x', x + stepWidth / 2)
            .attr('y', y - stepSize / 2 - 10)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '700')
            .attr('fill', color)
            .text(d3.format(',.0f')(d.value))
        }

        // Draw label
        if (showLabels) {
          group.append('text')
            .attr('x', x + stepWidth / 2)
            .attr('y', innerHeight + 20)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '600')
            .attr('fill', '#334155')
            .text(d.label)
        }

        // Draw description
        if (showDescriptions && d.description) {
          group.append('text')
            .attr('x', x + stepWidth / 2)
            .attr('y', innerHeight + 35)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize - 2}px`)
            .attr('fill', '#64748b')
            .text(d.description)
        }

        // Draw change from previous
        if (i > 0) {
          const change = d.value - data[i - 1].value
          const changePercent = ((change / data[i - 1].value) * 100).toFixed(1)
          const midY = (y + valueScale(data[i - 1].value)) / 2

          group.append('text')
            .attr('x', x + stepWidth / 2)
            .attr('y', midY)
            .attr('text-anchor', 'middle')
            .attr('font-size', '10px')
            .attr('font-weight', '600')
            .attr('fill', change >= 0 ? '#22c55e' : '#ef4444')
            .text(`${change >= 0 ? '+' : ''}${changePercent}%`)
        }
      })

      // Add Y axis
      const yAxis = d3.axisLeft(valueScale)
        .ticks(5)
        .tickFormat(d3.format('.0f'))

      mainGroup.append('g')
        .attr('class', 'y-axis')
        .call(yAxis as any)

    } else {
      // Vertical layout
      const valueScale = d3.scaleLinear()
        .domain([minValue, maxValue])
        .range([0, innerWidth])
        .nice()

      const stepHeight = innerHeight / data.length

      data.forEach((d, i) => {
        const y = i * stepHeight
        const x = valueScale(d.value)
        const color = getStepColor(d, i)

        const group = mainGroup.append('g')

        // Draw step line
        if (i > 0) {
          const prevX = valueScale(data[i - 1].value)
          group.append('line')
            .attr('x1', prevX)
            .attr('x2', x)
            .attr('y1', y)
            .attr('y2', y)
            .attr('stroke', d.value >= data[i - 1].value ? '#22c55e' : '#ef4444')
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '4,4')
        }

        // Draw step marker
        group.append('rect')
          .attr('x', x - stepSize / 2)
          .attr('y', y + stepHeight / 2 - stepSize / 2)
          .attr('width', stepSize)
          .attr('height', stepSize)
          .attr('fill', color)
          .attr('rx', 8)
          .attr('opacity', 0.85)

        // Draw value
        if (showValues) {
          group.append('text')
            .attr('x', x + stepSize / 2 + 5)
            .attr('y', y + stepHeight / 2)
            .attr('text-anchor', 'start')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '700')
            .attr('fill', color)
            .text(d3.format(',.0f')(d.value))
        }

        // Draw label
        if (showLabels) {
          group.append('text')
            .attr('x', -10)
            .attr('y', y + stepHeight / 2)
            .attr('text-anchor', 'end')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '600')
            .attr('fill', '#334155')
            .text(d.label)
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
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showValues, showDescriptions, orientation, stepSize])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('step-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
