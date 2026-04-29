'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface PyramidDataPoint {
  ageGroup: string
  male: number
  female: number
}

interface PopulationPyramidProps {
  data: PyramidDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  maleColor?: string
  femaleColor?: string
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  showPercentages?: boolean
  className?: string
}

/**
 * PopulationPyramid - Back-to-back bar chart
 *
 * Two mirrored bar charts showing distribution across categories.
 * Classic demographic visualization, also useful for other comparisons.
 *
 * Use cases:
 * - Age/gender distribution
 * - Audience demographic breakdown
 * - Male/female metric comparison
 * - Two-sided category analysis
 */
export function PopulationPyramid({
  data,
  width = 600,
  height = 500,
  marginTop = 20,
  marginRight = 80,
  marginBottom = 60,
  marginLeft = 80,
  maleColor = '#3b82f6',
  femaleColor = '#ec4899',
  showLabels = true,
  labelSize = 11,
  showValues = false,
  showPercentages = true,
  className = '',
}: PopulationPyramidProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const maxValue = d3.max(data.flatMap(d => [d.male, d.female])) || 1
    const centerX = innerWidth / 2

    const yScale = d3.scaleBand()
      .domain(data.map(d => d.ageGroup))
      .range([0, innerHeight])
      .padding(0.1)

    const xScale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([0, centerX - 20])

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw center line
    mainGroup.append('line')
      .attr('x1', centerX)
      .attr('x2', centerX)
      .attr('y1', 0)
      .attr('y2', innerHeight)
      .attr('stroke', '#cbd5e1')
      .attr('stroke-width', 2)

    data.forEach((d) => {
      const y = yScale(d.ageGroup)!
      const barHeight = yScale.bandwidth()

      const group = mainGroup.append('g')

      // Male bar (left side)
      group.append('rect')
        .attr('x', centerX - xScale(d.male))
        .attr('y', y)
        .attr('width', xScale(d.male))
        .attr('height', barHeight)
        .attr('fill', maleColor)
        .attr('opacity', 0.85)
        .attr('class', 'pyramid-bar-male')

      // Female bar (right side)
      group.append('rect')
        .attr('x', centerX)
        .attr('y', y)
        .attr('width', xScale(d.female))
        .attr('height', barHeight)
        .attr('fill', femaleColor)
        .attr('opacity', 0.85)
        .attr('class', 'pyramid-bar-female')

      // Age group label
      if (showLabels) {
        group.append('text')
          .attr('x', centerX)
          .attr('y', y + barHeight / 2)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '500')
          .attr('fill', '#334155')
          .text(d.ageGroup)
      }

      // Male value
      if (showValues && xScale(d.male) > 30) {
        group.append('text')
          .attr('x', centerX - xScale(d.male) - 5)
          .attr('y', y + barHeight / 2)
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize - 1}px`)
          .attr('font-weight', '600')
          .attr('fill', maleColor)
          .text(d3.format(',.0f')(d.male))
      }

      // Female value
      if (showValues && xScale(d.female) > 30) {
        group.append('text')
          .attr('x', centerX + xScale(d.female) + 5)
          .attr('y', y + barHeight / 2)
          .attr('text-anchor', 'start')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize - 1}px`)
          .attr('font-weight', '600')
          .attr('fill', femaleColor)
          .text(d3.format(',.0f')(d.female))
      }

      // Percentage indicators
      if (showPercentages) {
        const total = d.male + d.female
        const malePercent = ((d.male / total) * 100).toFixed(1)
        const femalePercent = ((d.female / total) * 100).toFixed(1)

        if (xScale(d.male) > 40) {
          group.append('text')
            .attr('x', centerX - xScale(d.male) / 2)
            .attr('y', y + barHeight / 2)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', '9px')
            .attr('fill', '#fff')
            .text(`${malePercent}%`)
        }

        if (xScale(d.female) > 40) {
          group.append('text')
            .attr('x', centerX + xScale(d.female) / 2)
            .attr('y', y + barHeight / 2)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', '9px')
            .attr('fill', '#fff')
            .text(`${femalePercent}%`)
        }
      }
    })

    // Add X axis labels at bottom
    mainGroup.append('text')
      .attr('x', centerX - 60)
      .attr('y', innerHeight + 25)
      .attr('text-anchor', 'middle')
      .attr('font-size', `${labelSize + 1}px`)
      .attr('font-weight', '600')
      .attr('fill', maleColor)
      .text('Male')

    mainGroup.append('text')
      .attr('x', centerX + 60)
      .attr('y', innerHeight + 25)
      .attr('text-anchor', 'middle')
      .attr('font-size', `${labelSize + 1}px`)
      .attr('font-weight', '600')
      .attr('fill', femaleColor)
      .text('Female')

    // Add scale ticks
    const tickCount = 5

    for (let i = 0; i <= tickCount; i++) {
      const value = (maxValue / tickCount) * i
      const x = xScale(value)

      // Left side ticks
      mainGroup.append('line')
        .attr('x1', centerX - x)
        .attr('x2', centerX - x)
        .attr('y1', innerHeight)
        .attr('y2', innerHeight + 5)
        .attr('stroke', '#94a3b8')
        .attr('stroke-width', 1)

      // Right side ticks
      mainGroup.append('line')
        .attr('x1', centerX + x)
        .attr('x2', centerX + x)
        .attr('y1', innerHeight)
        .attr('y2', innerHeight + 5)
        .attr('stroke', '#94a3b8')
        .attr('stroke-width', 1)

      // Tick labels (left side)
      mainGroup.append('text')
        .attr('x', centerX - x)
        .attr('y', innerHeight + 18)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('fill', '#64748b')
        .text(d3.format('.0f')(value))
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, maleColor, femaleColor, showLabels, labelSize, showValues, showPercentages])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('population-pyramid', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
