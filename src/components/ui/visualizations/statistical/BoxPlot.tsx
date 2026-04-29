'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface BoxPlotData {
  category: string
  values: number[]
  color?: string
}

interface BoxPlotProps {
  data: BoxPlotData[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: Record<string, string> | string[]
  boxWidth?: number
  showPoints?: boolean
  pointOpacity?: number
  pointSize?: number
  showWhiskers?: boolean
  horizontal?: boolean
  className?: string
}

/**
 * BoxPlot - Statistical distribution visualization
 *
 * Shows five-number summary (min, Q1, median, Q3, max) for each category.
 * Ideal for comparing distributions across groups.
 *
 * Use cases:
 * - Platform engagement distribution comparison
 * - Hourly posting activity patterns
 * - Sentiment score distribution by topic
 * - Performance metric comparison
 */
export function BoxPlot({
  data,
  width = 600,
  height = 400,
  marginTop = 20,
  marginRight = 30,
  marginBottom = 60,
  marginLeft = 60,
  colors,
  boxWidth = 40,
  showPoints = true,
  pointOpacity = 0.3,
  pointSize = 4,
  showWhiskers = true,
  horizontal = false,
  className = '',
}: BoxPlotProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Calculate statistics for each category
    const stats = data.map(d => {
      const sorted = [...d.values].sort((a, b) => a - b)
      const q1 = d3.quantile(sorted, 0.25)!
      const median = d3.quantile(sorted, 0.5)!
      const q3 = d3.quantile(sorted, 0.75)!
      const min = sorted[0]
      const max = sorted[sorted.length - 1]
      const iqr = q3 - q1
      const lowerFence = q1 - 1.5 * iqr
      const upperFence = q3 + 1.5 * iqr

      // Filter outliers
      const outliers = sorted.filter(v => v < lowerFence || v > upperFence)
      const nonOutliers = sorted.filter(v => v >= lowerFence && v <= upperFence)

      return {
        category: d.category,
        values: nonOutliers,
        outliers,
        min: nonOutliers[0],
        max: nonOutliers[nonOutliers.length - 1],
        q1,
        median,
        q3,
        color: d.color,
      }
    })

    // Get global value range
    const allValues = stats.flatMap(s => [...s.values, ...s.outliers])
    const valueExtent = d3.extent(allValues) as [number, number]

    // Create scales
    const categories = stats.map(s => s.category)
    const categoryScale = d3.scaleBand()
      .domain(categories)
      .range([0, horizontal ? innerHeight : innerWidth])
      .padding(0.3)

    const valueScale = d3.scaleLinear()
      .domain(valueExtent)
      .range([horizontal ? innerWidth : innerHeight, 0])
      .nice()

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getCategoryColor = (stat: typeof stats[0], index: number) => {
      if (stat.color) return stat.color
      if (Array.isArray(colors)) {
        return colors[index % colors.length]
      }
      if (colors && stat.category in colors) {
        return (colors as Record<string, string>)[stat.category]
      }
      return colorScale(stat.category) as string
    }

    // Draw each box
    stats.forEach((stat, i) => {
      const category = stat.category
      const color = getCategoryColor(stat, i)

      if (horizontal) {
        const y = categoryScale(category)!
        const boxHeight = categoryScale.bandwidth()

        // Whisker line
        if (showWhiskers) {
          mainGroup.append('line')
            .attr('x1', valueScale(stat.max))
            .attr('x2', valueScale(stat.min))
            .attr('y1', y + boxHeight / 2)
            .attr('y2', y + boxHeight / 2)
            .attr('stroke', '#334155')
            .attr('stroke-width', 1.5)

          // Whisker caps
          mainGroup.append('line')
            .attr('x1', valueScale(stat.max))
            .attr('x2', valueScale(stat.max))
            .attr('y1', y + boxHeight * 0.25)
            .attr('y2', y + boxHeight * 0.75)
            .attr('stroke', '#334155')
            .attr('stroke-width', 1.5)

          mainGroup.append('line')
            .attr('x1', valueScale(stat.min))
            .attr('x2', valueScale(stat.min))
            .attr('y1', y + boxHeight * 0.25)
            .attr('y2', y + boxHeight * 0.75)
            .attr('stroke', '#334155')
            .attr('stroke-width', 1.5)
        }

        // Box (Q1 to Q3)
        const boxY = y + (boxHeight - boxWidth) / 2
        mainGroup.append('rect')
          .attr('x', valueScale(stat.q3))
          .attr('y', boxY)
          .attr('width', valueScale(stat.q1) - valueScale(stat.q3))
          .attr('height', boxWidth)
          .attr('fill', color)
          .attr('stroke', '#334155')
          .attr('stroke-width', 1.5)
          .attr('opacity', 0.7)

        // Median line
        mainGroup.append('line')
          .attr('x1', valueScale(stat.median))
          .attr('x2', valueScale(stat.median))
          .attr('y1', boxY)
          .attr('y2', boxY + boxWidth)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)

        // Outliers
        stat.outliers.forEach(v => {
          mainGroup.append('circle')
            .attr('cx', valueScale(v))
            .attr('cy', y + boxHeight / 2)
            .attr('r', pointSize)
            .attr('fill', 'none')
            .attr('stroke', color)
            .attr('stroke-width', 1.5)
            .attr('opacity', pointOpacity)
        })

        // Individual points
        if (showPoints) {
          stat.values.forEach(v => {
            const jitter = (Math.random() - 0.5) * boxWidth * 0.8
            mainGroup.append('circle')
              .attr('cx', valueScale(v))
              .attr('cy', y + boxHeight / 2 + jitter)
              .attr('r', pointSize)
              .attr('fill', color)
              .attr('opacity', pointOpacity)
          })
        }
      } else {
        const x = categoryScale(category)!
        const boxWidth = categoryScale.bandwidth()

        // Whisker line
        if (showWhiskers) {
          mainGroup.append('line')
            .attr('x1', x + boxWidth / 2)
            .attr('x2', x + boxWidth / 2)
            .attr('y1', valueScale(stat.max))
            .attr('y2', valueScale(stat.min))
            .attr('stroke', '#334155')
            .attr('stroke-width', 1.5)

          // Whisker caps
          mainGroup.append('line')
            .attr('x1', x + boxWidth * 0.25)
            .attr('x2', x + boxWidth * 0.75)
            .attr('y1', valueScale(stat.max))
            .attr('y2', valueScale(stat.max))
            .attr('stroke', '#334155')
            .attr('stroke-width', 1.5)

          mainGroup.append('line')
            .attr('x1', x + boxWidth * 0.25)
            .attr('x2', x + boxWidth * 0.75)
            .attr('y1', valueScale(stat.min))
            .attr('y2', valueScale(stat.min))
            .attr('stroke', '#334155')
            .attr('stroke-width', 1.5)
        }

        // Box (Q1 to Q3)
        const boxX = x + (boxWidth - boxWidth) / 2
        mainGroup.append('rect')
          .attr('x', boxX)
          .attr('y', valueScale(stat.q3))
          .attr('width', boxWidth)
          .attr('height', valueScale(stat.q1) - valueScale(stat.q3))
          .attr('fill', color)
          .attr('stroke', '#334155')
          .attr('stroke-width', 1.5)
          .attr('opacity', 0.7)

        // Median line
        mainGroup.append('line')
          .attr('x1', boxX)
          .attr('x2', boxX + boxWidth)
          .attr('y1', valueScale(stat.median))
          .attr('y2', valueScale(stat.median))
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)

        // Outliers
        stat.outliers.forEach(v => {
          mainGroup.append('circle')
            .attr('cx', x + boxWidth / 2)
            .attr('cy', valueScale(v))
            .attr('r', pointSize)
            .attr('fill', 'none')
            .attr('stroke', color)
            .attr('stroke-width', 1.5)
            .attr('opacity', pointOpacity)
        })

        // Individual points
        if (showPoints) {
          const jitterRange = boxWidth * 0.8
          stat.values.forEach(v => {
            const jitter = (Math.random() - 0.5) * jitterRange
            mainGroup.append('circle')
              .attr('cx', x + boxWidth / 2 + jitter)
              .attr('cy', valueScale(v))
              .attr('r', pointSize)
              .attr('fill', color)
              .attr('opacity', pointOpacity)
          })
        }
      }
    })

    // Add axes
    if (horizontal) {
      // X axis (values)
      const xAxis = d3.axisBottom(valueScale)
        .ticks(5)
        .tickFormat(d3.format('.0f'))

      mainGroup.append('g')
        .attr('transform', `translate(0, ${innerHeight})`)
        .attr('class', 'x-axis')
        .call(xAxis as any)

      // Y axis (categories)
      const yAxis = d3.axisLeft(categoryScale)

      mainGroup.append('g')
        .attr('class', 'y-axis')
        .call(yAxis as any)
    } else {
      // X axis (categories)
      const xAxis = d3.axisBottom(categoryScale)

      mainGroup.append('g')
        .attr('transform', `translate(0, ${innerHeight})`)
        .attr('class', 'x-axis')
        .call(xAxis as any)
        .selectAll('text')
        .attr('transform', 'rotate(-25)')
        .style('text-anchor', 'end')

      // Y axis (values)
      const yAxis = d3.axisLeft(valueScale)
        .ticks(5)
        .tickFormat(d3.format('.0f'))

      mainGroup.append('g')
        .attr('class', 'y-axis')
        .call(yAxis as any)
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, boxWidth, showPoints, pointOpacity, pointSize, showWhiskers, horizontal])

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
