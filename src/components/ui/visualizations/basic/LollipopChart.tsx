'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from '@/lib/visualization-themes/colors'

interface LollipopDataPoint {
  category: string
  value: number
  target?: number
  color?: string
}

interface LollipopChartProps {
  data: LollipopDataPoint[]
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
  showTarget?: boolean
  horizontal?: boolean
  dotSize?: number
  stemWidth?: number
  className?: string
}

/**
 * LollipopChart - Dot on stick visualization
 *
 * Like a bar chart but with a dot at the end of a line. Lighter visual
 * weight, ideal for comparing many categories.
 *
 * Use cases:
 * - Platform ranking display
 * - Topic score comparison
 * - Influencer metrics
 * - KPI comparison tables
 */
export function LollipopChart({
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
  showTarget = false,
  horizontal = true,
  dotSize = 8,
  stemWidth = 2,
  className = '',
}: LollipopChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const maxValue = d3.max(data, d => d.target || d.value) || d3.max(data, d => d.value) || 1

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getColor = (d: LollipopDataPoint, index: number) => {
      if (d.color) return d.color
      if (Array.isArray(colors)) {
        return colors[index % colors.length]
      }
      if (colors && typeof colors === 'object' && d.category in colors) {
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
        .padding(0.3)

      const valueScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([0, innerWidth])

      data.forEach((d, i) => {
        const y = categoryScale(d.category)!
        const valueX = valueScale(d.value)
        const color = getColor(d, i)

        const group = mainGroup.append('g')

        // Draw stem
        group.append('line')
          .attr('x1', 0)
          .attr('y1', y + categoryScale.bandwidth() / 2)
          .attr('x2', valueX)
          .attr('y2', y + categoryScale.bandwidth() / 2)
          .attr('stroke', color)
          .attr('stroke-width', stemWidth)
          .attr('opacity', 0.6)

        // Draw target line if present
        if (showTarget && d.target) {
          const targetX = valueScale(d.target)
          group.append('line')
            .attr('x1', targetX)
            .attr('y1', y + categoryScale.bandwidth() / 2 - dotSize - 3)
            .attr('x2', targetX)
            .attr('y2', y + categoryScale.bandwidth() / 2 + dotSize + 3)
            .attr('stroke', '#94a3b8')
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '3,3')
        }

        // Draw dot
        group.append('circle')
          .attr('cx', valueX)
          .attr('cy', y + categoryScale.bandwidth() / 2)
          .attr('r', dotSize)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
          .attr('opacity', 0.9)
          .attr('class', 'lollipop-dot')
          .style('cursor', 'pointer')
          .style('transition', 'all 0.2s')
          .on('mouseover', function() {
            d3.select(this)
              .attr('r', dotSize * 1.3)
              .attr('opacity', 1)
          })
          .on('mouseout', function() {
            d3.select(this)
              .attr('r', dotSize)
              .attr('opacity', 0.9)
          })

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

        // Draw value
        if (showValues) {
          group.append('text')
            .attr('x', valueX + dotSize + 5)
            .attr('y', y + categoryScale.bandwidth() / 2)
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
        .select('.domain')
        .clone()
        .attr('stroke-opacity', 0.1)

    } else {
      // Vertical layout
      const categoryScale = d3.scaleBand()
        .domain(data.map(d => d.category))
        .range([0, innerWidth])
        .padding(0.3)

      const valueScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([innerHeight, 0])

      data.forEach((d, i) => {
        const x = categoryScale(d.category)!
        const valueY = valueScale(d.value)
        const color = getColor(d, i)

        const group = mainGroup.append('g')

        // Draw stem
        group.append('line')
          .attr('x1', x + categoryScale.bandwidth() / 2)
          .attr('y1', innerHeight)
          .attr('x2', x + categoryScale.bandwidth() / 2)
          .attr('y2', valueY)
          .attr('stroke', color)
          .attr('stroke-width', stemWidth)
          .attr('opacity', 0.6)

        // Draw target line if present
        if (showTarget && d.target) {
          const targetY = valueScale(d.target)
          group.append('line')
            .attr('x1', x + categoryScale.bandwidth() / 2 - dotSize - 3)
            .attr('y1', targetY)
            .attr('x2', x + categoryScale.bandwidth() / 2 + dotSize + 3)
            .attr('y2', targetY)
            .attr('stroke', '#94a3b8')
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '3,3')
        }

        // Draw dot
        group.append('circle')
          .attr('cx', x + categoryScale.bandwidth() / 2)
          .attr('cy', valueY)
          .attr('r', dotSize)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
          .attr('opacity', 0.9)
          .attr('class', 'lollipop-dot')
          .style('cursor', 'pointer')
          .style('transition', 'all 0.2s')
          .on('mouseover', function() {
            d3.select(this)
              .attr('r', dotSize * 1.3)
              .attr('opacity', 1)
          })
          .on('mouseout', function() {
            d3.select(this)
              .attr('r', dotSize)
              .attr('opacity', 0.9)
          })

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

        // Draw value
        if (showValues) {
          group.append('text')
            .attr('x', x + categoryScale.bandwidth() / 2)
            .attr('y', valueY - 12)
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

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showValues, showTarget, horizontal, dotSize, stemWidth])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('lollipop-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
