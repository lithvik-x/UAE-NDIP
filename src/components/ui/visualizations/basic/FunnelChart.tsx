'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface FunnelDataPoint {
  name: string
  value: number
  color?: string
}

interface FunnelChartProps {
  data: FunnelDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: string[]
  showLabels?: boolean
  showValues?: boolean
  showPercentages?: boolean
  labelPosition?: 'left' | 'right' | 'center'
  curve?: 'straight' | 'concave'
  className?: string
}

/**
 * FunnelChart - Stage progression visualization
 *
 * Shows how values decrease through stages. Width represents magnitude.
 * Ideal for conversion funnels, filtering processes, and cascades.
 *
 * Use cases:
 * - User acquisition funnel
 * - Content amplification cascade
 * - Audience attrition analysis
 * - Campaign stage performance
 */
export function FunnelChart({
  data,
  width = 600,
  height = 400,
  marginTop = 20,
  marginRight = 150,
  marginBottom = 40,
  marginLeft = 150,
  colors,
  showLabels = true,
  showValues = true,
  showPercentages = true,
  labelPosition = 'left',
  curve = 'concave',
  className = '',
}: FunnelChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const maxValue = d3.max(data, d => d.value) || 1

    // Calculate funnel dimensions
    const stageHeight = innerHeight / data.length
    const stageGap = stageHeight * 0.1
    const barHeight = stageHeight - stageGap

    // Color scale
    const defaultColors = [
      '#0ea5e9', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444',
      '#06b6d4', '#ec4899', '#f97316', '#14b8a6', '#3b82f6',
    ]
    const colorScale = d3.scaleOrdinal(colors || defaultColors)

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    data.forEach((d, i) => {
      const normalizedWidth = (d.value / maxValue) * innerWidth
      const x = (innerWidth - normalizedWidth) / 2
      const y = i * stageHeight

      // Calculate curve points
      const nextWidth = i < data.length - 1
        ? (data[i + 1].value / maxValue) * innerWidth
        : normalizedWidth

      const nextX = (innerWidth - nextWidth) / 2

      // Draw funnel shape
      if (curve === 'concave') {
        // Curved sides (trapezoid with curved edges)
        const pathData = `
          M ${x} ${y}
          L ${x + normalizedWidth} ${y}
          L ${nextX + nextWidth} ${y + barHeight}
          L ${nextX} ${y + barHeight}
          Q ${(x + nextX) / 2} ${y + barHeight / 2} ${x} ${y}
        `

        mainGroup.append('path')
          .attr('d', pathData)
          .attr('fill', d.color || colorScale(i.toString()) as string)
          .attr('opacity', 0.85)
          .attr('class', 'funnel-stage')
      } else {
        // Straight trapezoid
        mainGroup.append('path')
          .attr('d', `
            M ${x} ${y}
            L ${x + normalizedWidth} ${y}
            L ${nextX + nextWidth} ${y + barHeight}
            L ${nextX} ${y + barHeight}
            Z
          `)
          .attr('fill', d.color || colorScale(i.toString()) as string)
          .attr('opacity', 0.85)
          .attr('class', 'funnel-stage')
      }

      // Add labels
      if (showLabels) {
        const labelX = labelPosition === 'left' ? -10 : (labelPosition === 'right' ? innerWidth + 10 : innerWidth / 2)
        const textAlign = labelPosition === 'left' ? 'end' : (labelPosition === 'right' ? 'start' : 'middle')

        mainGroup.append('text')
          .attr('x', labelX)
          .attr('y', y + barHeight / 2)
          .attr('text-anchor', textAlign)
          .attr('dominant-baseline', 'middle')
          .attr('font-size', '13px')
          .attr('font-weight', '600')
          .attr('fill', '#334155')
          .text(d.name)
      }

      // Add values
      if (showValues) {
        mainGroup.append('text')
          .attr('x', innerWidth / 2)
          .attr('y', y + barHeight / 2 - 8)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', '14px')
          .attr('font-weight', '700')
          .attr('fill', '#fff')
          .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
          .text(d3.format(',.0f')(d.value))
      }

      // Add percentages
      if (showPercentages) {
        const percentage = ((d.value / data[0].value) * 100).toFixed(1)
        mainGroup.append('text')
          .attr('x', innerWidth / 2)
          .attr('y', y + barHeight / 2 + 10)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', '11px')
          .attr('font-weight', '500')
          .attr('fill', '#fff')
          .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
          .text(`${percentage}%`)
      }

      // Add drop-off indicator (except for first stage)
      if (i > 0) {
        const dropOff = data[i - 1].value - d.value
        const dropOffPercent = ((dropOff / data[i - 1].value) * 100).toFixed(1)

        mainGroup.append('text')
          .attr('x', innerWidth + normalizedWidth / 2 + 15)
          .attr('y', y - 5)
          .attr('text-anchor', 'start')
          .attr('font-size', '10px')
          .attr('font-weight', '500')
          .attr('fill', '#ef4444')
          .text(`-${dropOffPercent}%`)
      }
    })

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, showValues, showPercentages, labelPosition, curve])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('funnel-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
