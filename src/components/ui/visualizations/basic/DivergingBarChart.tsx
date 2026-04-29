'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { SENTIMENT_COLORS, PERFORMANCE_COLORS } from '@/lib/visualization-themes/colors'

interface DivergingBarDataPoint {
  category: string
  value: number
  color?: string
}

interface DivergingBarChartProps {
  data: DivergingBarDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  positiveColor?: string
  negativeColor?: string
  neutralColor?: string
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  horizontal?: boolean
  barSize?: number
  barGap?: number
  centerLine?: boolean
  className?: string
}

/**
 * DivergingBarChart - Positive/negative comparison
 *
 * Bars extend from center in opposite directions. Positive goes right/up,
 * negative goes left/down. Ideal for sentiment, gains/losses, etc.
 *
 * Use cases:
 * - Sentiment polarity analysis
 * - Positive/negative feedback breakdown
 * - Performance above/below target
 * - Profit/loss by category
 */
export function DivergingBarChart({
  data,
  width = 700,
  height = 400,
  marginTop = 20,
  marginRight = 100,
  marginBottom = 60,
  marginLeft = 100,
  positiveColor = SENTIMENT_COLORS.trust,
  negativeColor = SENTIMENT_COLORS.anger,
  neutralColor = '#94a3b8',
  showLabels = true,
  labelSize = 12,
  showValues = true,
  horizontal = true,
  barSize = 30,
  barGap = 8,
  centerLine = true,
  className = '',
}: DivergingBarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Separate positive and negative values
    const processedData = data.map(d => ({
      ...d,
      isPositive: d.value >= 0,
      absValue: Math.abs(d.value),
      color: d.color || (d.value > 0 ? positiveColor : d.value < 0 ? negativeColor : neutralColor),
    }))

    const maxValue = d3.max(processedData, d => d.absValue) || 1

    if (horizontal) {
      // Horizontal layout
      const categoryScale = d3.scaleBand()
        .domain(data.map((d, i) => i.toString()))
        .range([0, innerHeight])
        .paddingInner(0.1)

      const valueScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([0, innerWidth / 2])

      const mainGroup = svg.append('g')
        .attr('transform', `translate(${marginLeft}, ${marginTop})`)

      // Draw center line
      if (centerLine) {
        mainGroup.append('line')
          .attr('x1', 0)
          .attr('x2', 0)
          .attr('y1', 0)
          .attr('y2', innerHeight)
          .attr('stroke', '#cbd5e1')
          .attr('stroke-width', 2)
      }

      processedData.forEach((d, i) => {
        const y = categoryScale(i.toString())!
        const barWidth = categoryScale.bandwidth()
        const barLength = valueScale(d.absValue)

        const group = mainGroup.append('g')

        // Draw bar
        group.append('rect')
          .attr('x', d.isPositive ? 0 : -barLength)
          .attr('y', y + (barWidth - barSize) / 2)
          .attr('width', barLength)
          .attr('height', barSize)
          .attr('fill', d.color)
          .attr('rx', 4)
          .attr('opacity', 0.85)
          .attr('class', 'diverging-bar')
          .style('transition', 'opacity 0.2s')
          .on('mouseover', function() {
            d3.select(this).attr('opacity', 1)
          })
          .on('mouseout', function() {
            d3.select(this).attr('opacity', 0.85)
          })

        // Draw label
        if (showLabels) {
          group.append('text')
            .attr('x', 0)
            .attr('y', y + barWidth / 2)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '500')
            .attr('fill', '#334155')
            .text(d.category)
        }

        // Draw value
        if (showValues) {
          const valueX = d.isPositive ? barLength + 10 : -barLength - 10
          group.append('text')
            .attr('x', valueX)
            .attr('y', y + barWidth / 2)
            .attr('text-anchor', d.isPositive ? 'start' : 'end')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', `${labelSize - 1}px`)
            .attr('font-weight', '600')
            .attr('fill', d.color)
            .text(d3.format(',.0f')(d.value))
        }
      })

      // Add scale at bottom
      const scaleTicks = 5
      for (let i = 0; i <= scaleTicks; i++) {
        const value = (maxValue / scaleTicks) * i
        const x = valueScale(value)

        // Positive side
        mainGroup.append('line')
          .attr('x1', x)
          .attr('x2', x)
          .attr('y1', innerHeight)
          .attr('y2', innerHeight + 5)
          .attr('stroke', '#94a3b8')
          .attr('stroke-width', 1)

        mainGroup.append('text')
          .attr('x', x)
          .attr('y', innerHeight + 18)
          .attr('text-anchor', 'middle')
          .attr('font-size', '10px')
          .attr('fill', '#64748b')
          .text(d3.format('.0f')(value))

        // Negative side
        if (i > 0) {
          mainGroup.append('line')
            .attr('x1', -x)
            .attr('x2', -x)
            .attr('y1', innerHeight)
            .attr('y2', innerHeight + 5)
            .attr('stroke', '#94a3b8')
            .attr('stroke-width', 1)

          mainGroup.append('text')
            .attr('x', -x)
            .attr('y', innerHeight + 18)
            .attr('text-anchor', 'middle')
            .attr('font-size', '10px')
            .attr('fill', '#64748b')
            .text(d3.format('.0f')(-value))
        }
      }
    } else {
      // Vertical layout
      const categoryScale = d3.scaleBand()
        .domain(data.map((d, i) => i.toString()))
        .range([0, innerWidth])
        .paddingInner(0.1)

      const valueScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([0, innerHeight / 2])

      const mainGroup = svg.append('g')
        .attr('transform', `translate(${marginLeft}, ${marginTop})`)

      // Draw center line
      if (centerLine) {
        mainGroup.append('line')
          .attr('x1', 0)
          .attr('x2', innerWidth)
          .attr('y1', 0)
          .attr('y2', 0)
          .attr('stroke', '#cbd5e1')
          .attr('stroke-width', 2)
      }

      processedData.forEach((d, i) => {
        const x = categoryScale(i.toString())!
        const barWidth = categoryScale.bandwidth()
        const barLength = valueScale(d.absValue)

        const group = mainGroup.append('g')

        // Draw bar
        group.append('rect')
          .attr('x', x + (barWidth - barSize) / 2)
          .attr('y', d.isPositive ? -barLength : 0)
          .attr('width', barSize)
          .attr('height', barLength)
          .attr('fill', d.color)
          .attr('rx', 4)
          .attr('opacity', 0.85)
          .attr('class', 'diverging-bar')
          .style('transition', 'opacity 0.2s')
          .on('mouseover', function() {
            d3.select(this).attr('opacity', 1)
          })
          .on('mouseout', function() {
            d3.select(this).attr('opacity', 0.85)
          })

        // Draw label
        if (showLabels) {
          group.append('text')
            .attr('x', x + barWidth / 2)
            .attr('y', 0)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'hanging')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '500')
            .attr('fill', '#334155')
            .text(d.category)
        }

        // Draw value
        if (showValues) {
          const valueY = d.isPositive ? -barLength - 8 : barLength + 12
          group.append('text')
            .attr('x', x + barWidth / 2)
            .attr('y', valueY)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize - 1}px`)
            .attr('font-weight', '600')
            .attr('fill', d.color)
            .text(d3.format(',.0f')(d.value))
        }
      })
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, positiveColor, negativeColor, neutralColor, showLabels, labelSize, showValues, horizontal, barSize, barGap, centerLine])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('diverging-bar-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
