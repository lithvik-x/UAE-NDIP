'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { SENTIMENT_COLORS, PERFORMANCE_COLORS } from '@/lib/visualization-themes/colors'

interface ParallelDataPoint {
  [key: string]: number | string
}

interface ParallelCoordinatesProps {
  data: ParallelDataPoint[]
  dimensions: string[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: string[]
  lineOpacity?: number
  lineWidth?: number
  showAxes?: boolean
  showTicks?: boolean
  brushable?: boolean
  highlightOnHover?: boolean
  className?: string
  onLineClick?: (point: ParallelDataPoint) => void
  onLineHover?: (point: ParallelDataPoint | null) => void
}

/**
 * ParallelCoordinates - Multi-dimensional comparison
 *
 * Displays multiple quantitative variables parallel to each other.
 * Each line represents one observation crossing all dimensions.
 *
 * Use cases:
 * - Persona profiling across multiple attributes
 * - Multi-metric KPI comparison
 * - Platform performance across dimensions
 * - Influencer scoring matrix
 */
export function ParallelCoordinates({
  data,
  dimensions,
  width = 800,
  height = 400,
  marginTop = 20,
  marginRight = 30,
  marginBottom = 40,
  marginLeft = 60,
  colors,
  lineOpacity = 0.4,
  lineWidth = 1.5,
  showAxes = true,
  showTicks = true,
  brushable = false,
  highlightOnHover = true,
  className = '',
  onLineClick,
  onLineHover,
}: ParallelCoordinatesProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredLine, setHoveredLine] = useState<number | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length || !dimensions.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Extract values for each dimension
    const dimensionScales = dimensions.map(dim => {
      const values = data.map(d => d[dim] as number)
      return [
        dim,
        d3.scaleLinear()
          .domain(d3.extent(values) as [number, number])
          .range([innerHeight, 0])
      ] as [string, d3.ScaleLinear<number, number>]
    })

    const yScales = new Map(dimensionScales)

    // Create x scale for dimensions
    const xScale = d3.scalePoint()
      .domain(dimensions)
      .range([0, innerWidth])

    // Color scale
    const defaultColors = [
      '#0ea5e9', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444',
      '#06b6d4', '#ec4899', '#f97316', '#14b8a6', '#3b82f6',
    ]
    const colorScale = d3.scaleOrdinal(colors || defaultColors)

    // Line generator
    const line = d3.line()
      .defined((d: any) => !isNaN(d[1]))
      .x(d => d[0])
      .y(d => d[1])
      .curve(d3.curveMonotoneX)

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw axes
    if (showAxes) {
      const axes = mainGroup.selectAll('.axis')
        .data(dimensions)
        .join('g')
        .attr('class', 'axis')
        .attr('transform', d => `translate(${xScale(d)}, 0)`)

      // Axis lines
      axes.append('line')
        .attr('y1', 0)
        .attr('y2', innerHeight)
        .attr('stroke', '#e2e8f0')
        .attr('stroke-width', 1)

      // Axis labels
      axes.append('text')
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('font-weight', '600')
        .attr('fill', '#334155')
        .text(d => d)

      // Ticks
      if (showTicks) {
        const yAxis = d3.axisLeft(yScales.get(dimensions[0])!)
          .ticks(5)
          .tickSize(-innerWidth)
          .tickFormat(d3.format('.0f'))

        axes.append('g')
          .attr('transform', `translate(0, 0)`)
          .call(yAxis as any)
          .selectAll('text')
          .attr('fill', '#64748b')
          .attr('font-size', '10px')

        axes.selectAll('.tick line')
          .attr('stroke', '#f1f5f9')
      }
    }

    // Draw lines
    const lines = mainGroup.selectAll('.line')
      .data(data)
      .join('path')
      .attr('class', 'line')
      .attr('d', d => {
        const points = dimensions.map(dim => {
          const scale = yScales.get(dim)!
          return [xScale(dim), scale(d[dim] as number)]
        })
        return line(points as any) || ''
      })
      .attr('fill', 'none')
      .attr('stroke', (d, i) => colorScale(i.toString()) as string)
      .attr('stroke-width', lineWidth)
      .attr('stroke-opacity', lineOpacity)
      .attr('class', 'parallel-line')
      .style('cursor', onLineClick ? 'pointer' : 'default')
      .style('transition', 'stroke-opacity 0.2s, stroke-width 0.2s')

    // Hover effects
    if (highlightOnHover) {
      lines.on('mouseover', function(event, d) {
          const index = data.indexOf(d)
          setHoveredLine(index)

          // Dim all lines
          lines.attr('stroke-opacity', 0.1)
          lines.attr('stroke-width', lineWidth)

          // Highlight hovered line
          d3.select(this)
            .attr('stroke-opacity', 1)
            .attr('stroke-width', lineWidth * 2)

          onLineHover?.(d)
        })
        .on('mouseout', function() {
          setHoveredLine(null)
          lines
            .attr('stroke-opacity', lineOpacity)
            .attr('stroke-width', lineWidth)
          onLineHover?.(null)
        })
        .on('click', (event, d) => {
          onLineClick?.(d)
        })
    }

  }, [data, dimensions, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, lineOpacity, lineWidth, showAxes, showTicks, brushable, highlightOnHover, onLineClick, onLineHover])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={className}
      style={{ overflow: 'visible' }}
    />
  )
}
