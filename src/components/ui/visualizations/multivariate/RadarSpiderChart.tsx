'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface RadarSpiderDataPoint {
  category: string
  [key: string]: string | number
}

interface RadarSpiderChartProps {
  data: RadarSpiderDataPoint[]
  axes: string[] // Dimension names
  width?: number
  height?: number
  levels?: number
  colors?: string[]
  showLabels?: boolean
  labelSize?: number
  showPoints?: boolean
  fillOpacity?: number
  className?: string
}

/**
 * RadarSpiderChart - Multi-dimensional comparison
 *
 * Like a radar chart but can show multiple series. Each axis is a dimension,
 * radiating from center. Shape shows profile.
 *
 * Use cases:
 * - Platform multi-metric comparison
 * - Campaign performance profile
 * - Persona attribute mapping
 * - Skill assessment display
 */
export function RadarSpiderChart({
  data,
  axes,
  width = 500,
  height = 500,
  levels = 5,
  colors,
  showLabels = true,
  labelSize = 11,
  showPoints = true,
  fillOpacity = 0.2,
  className = '',
}: RadarSpiderChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredSeries, setHoveredSeries] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length || !axes.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 2 - 60

    // Get all values to determine scale
    const allValues = data.flatMap(d => axes.map(axis => d[axis] as number))
    const maxValue = d3.max(allValues) || 1

    // Color scale
    const defaultColors = [
      '#0ea5e9', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444',
      '#06b6d4', '#ec4899', '#f97316', '#14b8a6', '#3b82f6',
    ]
    const colorScale = d3.scaleOrdinal(colors || defaultColors)

    const angleSlice = (Math.PI * 2) / axes.length

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`)

    // Draw level circles
    for (let i = 1; i <= levels; i++) {
      const levelRadius = (radius / levels) * i

      mainGroup.append('circle')
        .attr('r', levelRadius)
        .attr('fill', 'none')
        .attr('stroke', '#e2e8f0')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3,3')

      // Level labels
      if (i % 2 === 0) {
        mainGroup.append('text')
          .attr('x', 5)
          .attr('y', -levelRadius + 3)
          .attr('text-anchor', 'start')
          .attr('font-size', '9px')
          .attr('fill', '#94a3b8')
          .text(d3.format('.0f')((maxValue / levels) * i))
      }
    }

    // Draw axes
    axes.forEach((axis, i) => {
      const angle = i * angleSlice - Math.PI / 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius

      mainGroup.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', x)
        .attr('y2', y)
        .attr('stroke', '#e2e8f0')
        .attr('stroke-width', 1)

      // Axis labels
      const labelRadius = radius + 25
      const labelX = Math.cos(angle) * labelRadius
      const labelY = Math.sin(angle) * labelRadius

      // Calculate text rotation
      const textAngle = (angle * 180 / Math.PI)
      const isRight = textAngle > -90 && textAngle < 90

      mainGroup.append('text')
        .attr('x', labelX)
        .attr('y', labelY)
        .attr('text-anchor', isRight ? 'start' : 'end')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', `${labelSize}px`)
        .attr('font-weight', '600')
        .attr('fill', '#334155')
        .text(axis)
    })

    // Draw data series
    data.forEach((series, seriesIndex) => {
      const color = colorScale(series.category) as string

      // Calculate points and add first point at end to close the path
      const points = axes.map((axis, i) => {
        const value = series[axis] as number
        const normalizedValue = value / maxValue
        const angle = i * angleSlice - Math.PI / 2
        const x = Math.cos(angle) * (normalizedValue * radius)
        const y = Math.sin(angle) * (normalizedValue * radius)
        return [x, y]
      })
      const closedPoints = [...points, points[0]]

      // Create line generator
      const line = d3.line()
        .x((d: any) => d[0])
        .y((d: any) => d[1])
        .curve(d3.curveLinearClosed)

      // Draw area
      mainGroup.append('path')
        .datum(closedPoints)
        .attr('d', line as any)
        .attr('fill', color)
        .attr('opacity', fillOpacity)
        .attr('class', 'radar-area')
        .style('cursor', 'pointer')
        .style('transition', 'opacity 0.2s')
        .on('mouseover', function() {
          d3.select(this).attr('opacity', fillOpacity * 2)
          setHoveredSeries(series.category)
        })
        .on('mouseout', function() {
          d3.select(this).attr('opacity', fillOpacity)
          setHoveredSeries(null)
        })

      // Draw line
      mainGroup.append('path')
        .datum(closedPoints)
        .attr('d', line as any)
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 2.5)
        .attr('class', 'radar-line')

      // Draw points
      if (showPoints) {
        points.forEach((point, i) => {
          mainGroup.append('circle')
            .attr('cx', point[0])
            .attr('cy', point[1])
            .attr('r', 4)
            .attr('fill', color)
            .attr('stroke', '#fff')
            .attr('stroke-width', 2)
            .attr('class', 'radar-point')
        })
      }
    })

  }, [data, axes, width, height, levels, colors, showLabels, labelSize, showPoints, fillOpacity])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('radar-spider-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
