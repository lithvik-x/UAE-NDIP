'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { SENTIMENT_COLORS } from '@/lib/visualization-themes/colors'

interface LikertDataPoint {
  category: string
  stronglyDisagree: number
  disagree: number
  neutral: number
  agree: number
  stronglyAgree: number
}

interface LikertChartProps {
  data: LikertDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: string[]
  showLabels?: boolean
  labelSize?: number
  showPercentages?: boolean
  horizontal?: boolean
  className?: string
}

/**
 * LikertChart - Survey response visualization
 *
 * Stacked diverging bars showing Likert scale responses.
 * Center is neutral, sides are opposing sentiments.
 *
 * Use cases:
 * - Survey response distribution
 * - Agreement scale visualization
 * - Sentiment polarity display
 * - Opinion poll results
 */
export function LikertChart({
  data,
  width = 700,
  height = 400,
  marginTop = 20,
  marginRight = 120,
  marginBottom = 60,
  marginLeft = 120,
  colors,
  showLabels = true,
  labelSize = 12,
  showPercentages = true,
  horizontal = true,
  className = '',
}: LikertChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const defaultColors = [
      '#dc2626', // stronglyDisagree - red
      '#f97316', // disagree - orange
      '#94a3b8', // neutral - gray
      '#22c55e', // agree - green
      '#059669', // stronglyAgree - dark green
    ]

    const responseColors = colors || defaultColors

    if (horizontal) {
      // Horizontal layout
      const categoryScale = d3.scaleBand()
        .domain(data.map(d => d.category))
        .range([0, innerHeight])
        .padding(0.2)

      const maxTotal = d3.max(data, d =>
        d.stronglyDisagree + d.disagree + d.neutral + d.agree + d.stronglyAgree
      ) || 1

      const valueScale = d3.scaleLinear()
        .domain([0, maxTotal])
        .range([0, innerWidth])

      const mainGroup = svg.append('g')
        .attr('transform', `translate(${marginLeft}, ${marginTop})`)

      data.forEach((d) => {
        const y = categoryScale(d.category)!
        const barHeight = categoryScale.bandwidth() / 5 - 2

        const group = mainGroup.append('g')

        const responses = [
          { key: 'stronglyDisagree', value: d.stronglyDisagree, color: responseColors[0] },
          { key: 'disagree', value: d.disagree, color: responseColors[1] },
          { key: 'neutral', value: d.neutral, color: responseColors[2] },
          { key: 'agree', value: d.agree, color: responseColors[3] },
          { key: 'stronglyAgree', value: d.stronglyAgree, color: responseColors[4] },
        ]

        let currentX = 0

        responses.forEach((response, i) => {
          const barWidth = valueScale(response.value)

          group.append('rect')
            .attr('x', currentX)
            .attr('y', y + i * (barHeight + 2))
            .attr('width', barWidth)
            .attr('height', barHeight)
            .attr('fill', response.color)
            .attr('opacity', 0.85)

          if (showPercentages && barWidth > 25) {
            const percentage = ((response.value / maxTotal) * 100).toFixed(0)
            group.append('text')
              .attr('x', currentX + barWidth / 2)
              .attr('y', y + i * (barHeight + 2) + barHeight / 2)
              .attr('text-anchor', 'middle')
              .attr('dominant-baseline', 'middle')
              .attr('font-size', '9px')
              .attr('fill', '#fff')
              .text(`${percentage}%`)
          }

          currentX += barWidth
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
        .padding(0.2)

      const maxTotal = d3.max(data, d =>
        d.stronglyDisagree + d.disagree + d.neutral + d.agree + d.stronglyAgree
      ) || 1

      const valueScale = d3.scaleLinear()
        .domain([0, maxTotal])
        .range([0, innerHeight])

      const mainGroup = svg.append('g')
        .attr('transform', `translate(${marginLeft}, ${marginTop})`)

      data.forEach((d) => {
        const x = categoryScale(d.category)!
        const barWidth = categoryScale.bandwidth() / 5 - 2

        const group = mainGroup.append('g')

        const responses = [
          { key: 'stronglyDisagree', value: d.stronglyDisagree, color: responseColors[0] },
          { key: 'disagree', value: d.disagree, color: responseColors[1] },
          { key: 'neutral', value: d.neutral, color: responseColors[2] },
          { key: 'agree', value: d.agree, color: responseColors[3] },
          { key: 'stronglyAgree', value: d.stronglyAgree, color: responseColors[4] },
        ]

        let currentY = innerHeight

        responses.forEach((response, i) => {
          const barHeight = valueScale(response.value)

          group.append('rect')
            .attr('x', x + i * (barWidth + 2))
            .attr('y', currentY - barHeight)
            .attr('width', barWidth)
            .attr('height', barHeight)
            .attr('fill', response.color)
            .attr('opacity', 0.85)

          currentY -= barHeight
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
      })

      // Add Y axis
      const yAxis = d3.axisLeft(valueScale)
        .ticks(5)
        .tickFormat(d3.format('.0f'))

      mainGroup.append('g')
        .attr('class', 'y-axis')
        .call(yAxis as any)
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showPercentages, horizontal])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('likert-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
