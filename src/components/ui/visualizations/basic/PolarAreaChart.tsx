'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface PolarAreaDataPoint {
  category: string
  value: number
  color?: string
}

interface PolarAreaChartProps {
  data: PolarAreaDataPoint[]
  width?: number
  height?: number
  innerRadius?: number
  outerRadius?: number
  startAngle?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  showConnectors?: boolean
  className?: string
  onSliceClick?: (point: PolarAreaDataPoint) => void
  onSliceHover?: (point: PolarAreaDataPoint | null) => void
}

/**
 * PolarAreaChart - Pie chart with variable radius slices
 *
 * Like a pie chart but each slice has equal angle, radius varies by value.
 * Ideal for comparing cyclic categories.
 *
 * Use cases:
 * - Topic prominence comparison
 * - Platform engagement levels
 * - Sentiment category distribution
 * - Metric score comparison
 */
export function PolarAreaChart({
  data,
  width = 500,
  height = 500,
  innerRadius = 0,
  outerRadius = 180,
  startAngle = 0,
  colors,
  showLabels = true,
  labelSize = 12,
  showValues = true,
  showConnectors = true,
  className = '',
  onSliceClick,
  onSliceHover,
}: PolarAreaChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredSlice, setHoveredSlice] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const centerX = width / 2
    const centerY = height / 2

    const maxValue = d3.max(data, d => d.value) || 1

    // Color scale
    const defaultColors = [
      '#0ea5e9', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444',
      '#06b6d4', '#ec4899', '#f97316', '#14b8a6', '#3b82f6',
    ]
    const colorScale = d3.scaleOrdinal(defaultColors)
    const getColor = (d: PolarAreaDataPoint, index: number) => {
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
      .attr('transform', `translate(${centerX}, ${centerY})`)

    // Calculate slice angles
    const anglePerSlice = (2 * Math.PI) / data.length

    data.forEach((d, i) => {
      const startAngle = i * anglePerSlice
      const endAngle = startAngle + anglePerSlice
      const midAngle = (startAngle + endAngle) / 2
      const radius = innerRadius + ((d.value / maxValue) * (outerRadius - innerRadius))
      const color = getColor(d, i)

      // Create arc path
      const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius)
        .startAngle(startAngle)
        .endAngle(endAngle)
        .cornerRadius(anglePerSlice < 0.3 ? 5 : 0)

      // Draw slice
      const slice = mainGroup.append('path')
        .attr('d', arc as any)
        .attr('fill', color)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .attr('opacity', 0.85)
        .attr('class', 'polar-slice')
        .style('cursor', onSliceClick ? 'pointer' : 'default')
        .style('transition', 'opacity 0.2s')
        .on('mouseover', function() {
          d3.select(this).attr('opacity', 1)
          setHoveredSlice(d.category)
          onSliceHover?.(d)
        })
        .on('mouseout', function() {
          d3.select(this).attr('opacity', 0.85)
          setHoveredSlice(null)
          onSliceHover?.(null)
        })
        .on('click', () => {
          onSliceClick?.(d)
        })

      // Draw value label
      if (showValues) {
        const labelRadius = innerRadius + (radius - innerRadius) / 2
        const labelX = Math.cos(midAngle - Math.PI / 2) * labelRadius
        const labelY = Math.sin(midAngle - Math.PI / 2) * labelRadius

        mainGroup.append('text')
          .attr('x', labelX)
          .attr('y', labelY)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', '#fff')
          .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.7)')
          .attr('pointer-events', 'none')
          .text(d3.format(',.0f')(d.value))
      }

      // Draw category label
      if (showLabels) {
        const labelRadius = outerRadius + 20
        const labelX = Math.cos(midAngle - Math.PI / 2) * labelRadius
        const labelY = Math.sin(midAngle - Math.PI / 2) * labelRadius

        // Calculate text rotation
        const textAngle = (midAngle * 180 / Math.PI) - 90
        const isLeft = textAngle > 90 || textAngle < -90

        mainGroup.append('text')
          .attr('x', labelX)
          .attr('y', labelY)
          .attr('text-anchor', isLeft ? 'end' : 'start')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', color)
          .attr('transform', `rotate(${isLeft ? textAngle - 180 : textAngle}, ${labelX}, ${labelY})`)
          .text(d.category)

        // Draw connector line if requested
        if (showConnectors) {
          const connectorStartRadius = radius + 5
          const connectorEndRadius = labelRadius - 5
          const startX = Math.cos(midAngle - Math.PI / 2) * connectorStartRadius
          const startY = Math.sin(midAngle - Math.PI / 2) * connectorStartRadius
          const endX = Math.cos(midAngle - Math.PI / 2) * connectorEndRadius
          const endY = Math.sin(midAngle - Math.PI / 2) * connectorEndRadius

          mainGroup.append('line')
            .attr('x1', startX)
            .attr('y1', startY)
            .attr('x2', endX)
            .attr('y2', endY)
            .attr('stroke', color)
            .attr('stroke-width', 1)
            .attr('opacity', 0.5)
        }
      }
    })

    // Draw concentric circles for scale reference
    const scaleSteps = 5
    for (let i = 1; i <= scaleSteps; i++) {
      const r = innerRadius + (outerRadius - innerRadius) * (i / scaleSteps)
      mainGroup.append('circle')
        .attr('r', r)
        .attr('fill', 'none')
        .attr('stroke', '#e2e8f0')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3,3')
    }

  }, [data, width, height, innerRadius, outerRadius, startAngle, colors, showLabels, labelSize, showValues, showConnectors, onSliceClick, onSliceHover])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('polar-area-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
