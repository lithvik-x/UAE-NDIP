'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from '@/lib/visualization-themes/colors'

interface SurveyPlotDataPoint {
  question: string
  responses: Array<{
    category: string
    value: number
  }>
}

interface SurveyPlotProps {
  data: SurveyPlotDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: string[]
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  stacked?: boolean
  horizontal?: boolean
  className?: string
}

/**
 * SurveyPlot - Stacked bar chart for survey results
 *
 * Shows survey responses as stacked bars for each question.
 * Categories are response options (agree, disagree, etc.).
 *
 * Use cases:
 * - Survey question results
 * - Poll response distribution
 * - Feedback category breakdown
 * - Multi-option question display
 */
export function SurveyPlot({
  data,
  width = 700,
  height = 400,
  marginTop = 40,
  marginRight = 120,
  marginBottom = 60,
  marginLeft = 150,
  colors,
  showLabels = true,
  labelSize = 11,
  showValues = false,
  stacked = true,
  horizontal = true,
  className = '',
}: SurveyPlotProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Get all categories from all questions
    const allCategories = Array.from(new Set(
      data.flatMap(d => d.responses.map(r => r.category))
    ))

    // Color scale
    const defaultColors = [
      '#22c55e', '#84cc16', '#eab308', '#f97316', '#ef4444'
    ]
    const colorScale = d3.scaleOrdinal(colors || defaultColors)

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    if (horizontal) {
      // Horizontal layout
      const questionScale = d3.scaleBand()
        .domain(data.map(d => d.question))
        .range([0, innerHeight])
        .padding(0.2)

      const maxValue = d3.max(
        data.flatMap(d => {
          if (stacked) {
            const total = d3.sum(d.responses, r => r.value)
            return [total]
          }
          return d.responses.map(r => r.value)
        })
      ) || 1

      const valueScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([0, innerWidth])

      data.forEach((d) => {
        const y = questionScale(d.question)!
        const barHeight = questionScale.bandwidth()

        const group = mainGroup.append('g')

        if (stacked) {
          // Stacked bars
          let currentX = 0
          const total = d3.sum(d.responses, r => r.value)

          d.responses.forEach((response) => {
            const barWidth = valueScale(response.value)
            const color = colorScale(response.category)

            group.append('rect')
              .attr('x', currentX)
              .attr('y', y)
              .attr('width', barWidth)
              .attr('height', barHeight)
              .attr('fill', color)
              .attr('opacity', 0.85)

            if (showValues && barWidth > 25) {
              const percentage = ((response.value / total) * 100).toFixed(1)
              group.append('text')
                .attr('x', currentX + barWidth / 2)
                .attr('y', y + barHeight / 2)
                .attr('text-anchor', 'middle')
                .attr('dominant-baseline', 'middle')
                .attr('font-size', '10px')
                .attr('fill', '#fff')
                .text(`${percentage}%`)
            }

            currentX += barWidth
          })
        } else {
          // Grouped bars
          const groupWidth = innerWidth / d.responses.length
          const barWidth = groupWidth * 0.7
          const maxBarHeight = questionScale.bandwidth() * 0.7

          d.responses.forEach((response, i) => {
            const barHeight = (valueScale(response.value) / maxValue) * maxBarHeight
            const color = colorScale(response.category)

            group.append('rect')
              .attr('x', i * groupWidth + (groupWidth - barWidth) / 2)
              .attr('y', y)
              .attr('width', barWidth)
              .attr('height', barHeight)
              .attr('fill', color)
              .attr('opacity', 0.85)
          })
        }

        // Question label
        if (showLabels) {
          group.append('text')
            .attr('x', -10)
            .attr('y', y + barHeight / 2)
            .attr('text-anchor', 'end')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '500')
            .attr('fill', '#334155')
            .text(d.question)
        }
      })

    } else {
      // Vertical layout
      const questionScale = d3.scaleBand()
        .domain(data.map(d => d.question))
        .range([0, innerWidth])
        .padding(0.2)

      const maxValue = d3.max(
        data.flatMap(d => {
          if (stacked) {
            const total = d3.sum(d.responses, r => r.value)
            return [total]
          }
          return d.responses.map(r => r.value)
        })
      ) || 1

      const valueScale = d3.scaleLinear()
        .domain([0, maxValue])
        .range([innerHeight, 0])

      data.forEach((d) => {
        const x = questionScale(d.question)!
        const barWidth = questionScale.bandwidth()

        const group = mainGroup.append('g')

        if (stacked) {
          // Stacked bars
          let currentY = innerHeight
          const total = d3.sum(d.responses, r => r.value)

          d.responses.forEach((response) => {
            const barHeight = valueScale(response.value)
            const y = currentY - barHeight
            const color = colorScale(response.category)

            group.append('rect')
              .attr('x', x)
              .attr('y', y)
              .attr('width', barWidth)
              .attr('height', barHeight)
              .attr('fill', color)
              .attr('opacity', 0.85)

            if (showValues && barHeight > 15) {
              const percentage = ((response.value / total) * 100).toFixed(1)
              group.append('text')
                .attr('x', x + barWidth / 2)
                .attr('y', y + barHeight / 2)
                .attr('text-anchor', 'middle')
                .attr('dominant-baseline', 'middle')
                .attr('font-size', '10px')
                .attr('fill', '#fff')
                .text(`${percentage}%`)
            }

            currentY = y
          })
        } else {
          // Grouped bars
          const groupHeight = innerHeight / d.responses.length
          const barHeight = (valueScale(maxValue) / maxValue) * groupHeight * 0.7

          d.responses.forEach((response, i) => {
            const y = innerHeight - (i + 1) * groupHeight
            const barW = (valueScale(response.value) / maxValue) * barWidth
            const color = colorScale(response.category)

            group.append('rect')
              .attr('x', x)
              .attr('y', y)
              .attr('width', barW)
              .attr('height', barHeight)
              .attr('fill', color)
              .attr('opacity', 0.85)
          })
        }

        // Question label
        if (showLabels) {
          group.append('text')
            .attr('x', x + barWidth / 2)
            .attr('y', innerHeight + 15)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '500')
            .attr('fill', '#334155')
            .text(d.question)
        }
      })
    }

    // Add legend
    if (allCategories.length > 0) {
      const legendGroup = svg.append('g')
        .attr('transform', `translate(${width - marginRight - 100}, ${marginTop})`)

      allCategories.forEach((category, i) => {
        const y = i * 20
        const color = colorScale(category)

        legendGroup.append('rect')
          .attr('x', 0)
          .attr('y', y)
          .attr('width', 12)
          .attr('height', 12)
          .attr('fill', color)
          .attr('rx', 2)
          .attr('opacity', 0.85)

        legendGroup.append('text')
          .attr('x', 18)
          .attr('y', y + 10)
          .attr('font-size', '11px')
          .attr('dominant-baseline', 'middle')
          .attr('fill', '#64748b')
          .text(category)
      })
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showValues, stacked, horizontal])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('survey-plot', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
