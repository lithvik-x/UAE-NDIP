'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface MatrixDataPoint {
  row: string
  col: string
  value: number
}

interface MatrixChartProps {
  data: MatrixDataPoint[]
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
  roundCells?: boolean
  className?: string
}

/**
 * MatrixChart - Heat map with categorical axes
 *
 * Grid showing relationship between two categorical variables.
 * Cell color intensity represents the metric value.
 *
 * Use cases:
 * - Platform vs topic heat matrix
 * - Day vs hour engagement patterns
 * - Cross-tabulation visualization
 * - Correlation matrix display
 */
export function MatrixChart({
  data,
  width = 600,
  height = 500,
  marginTop = 40,
  marginRight = 100,
  marginBottom = 80,
  marginLeft = 100,
  colors,
  showLabels = true,
  labelSize = 11,
  showValues = true,
  roundCells = true,
  className = '',
}: MatrixChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    const rows = Array.from(new Set(data.map(d => d.row)))
    const cols = Array.from(new Set(data.map(d => d.col)))

    const cellWidth = innerWidth / cols.length
    const cellHeight = innerHeight / rows.length

    // Get value range
    const maxValue = d3.max(data, d => d.value) || 1
    const minValue = d3.min(data, d => d.value) || 0

    // Color scale
    const defaultColors = ['#f0f9ff', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1']
    const colorScale = d3.scaleSequential()
      .domain([minValue, maxValue])
      .interpolator(d3.interpolateRgb(defaultColors[0], defaultColors[defaultColors.length - 1]))

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw cells
    data.forEach((d) => {
      const rowIndex = rows.indexOf(d.row)
      const colIndex = cols.indexOf(d.col)

      if (rowIndex === -1 || colIndex === -1) return

      const x = colIndex * cellWidth
      const y = rowIndex * cellHeight

      const group = mainGroup.append('g')

      group.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', cellWidth - 2)
        .attr('height', cellHeight - 2)
        .attr('fill', colorScale(d.value))
        .attr('stroke', '#fff')
        .attr('stroke-width', 1)
        .attr('rx', roundCells ? 4 : 0)
        .attr('opacity', 0.9)
        .attr('class', 'matrix-cell')
        .style('cursor', 'pointer')
        .style('transition', 'opacity 0.2s')
        .on('mouseover', function() {
          d3.select(this).attr('opacity', 1)
        })
        .on('mouseout', function() {
          d3.select(this).attr('opacity', 0.9)
        })

      // Draw value
      if (showValues && cellWidth > 40 && cellHeight > 20) {
        const brightness = d3.hsl(colorScale(d.value)).l
        group.append('text')
          .attr('x', x + cellWidth / 2 - 1)
          .attr('y', y + cellHeight / 2)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${Math.min(cellWidth, cellHeight) / 5}px`)
          .attr('font-weight', '500')
          .attr('fill', brightness > 0.6 ? '#334155' : '#ffffff')
          .attr('pointer-events', 'none')
          .text(d3.format('.0f')(d.value))
      }
    })

    // Add row labels
    if (showLabels) {
      mainGroup.selectAll('.row-label')
        .data(rows)
        .join('text')
        .attr('x', -10)
        .attr('y', (d, i) => i * cellHeight + cellHeight / 2)
        .attr('text-anchor', 'end')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', `${labelSize}px`)
        .attr('font-weight', '500')
        .attr('fill', '#64748b')
        .text(d => d)
    }

    // Add column labels
    if (showLabels) {
      mainGroup.selectAll('.col-label')
        .data(cols)
        .join('text')
        .attr('x', (d, i) => i * cellWidth + cellWidth / 2)
        .attr('y', innerHeight + 15)
        .attr('text-anchor', 'middle')
        .attr('font-size', `${labelSize}px`)
        .attr('font-weight', '500')
        .attr('fill', '#64748b')
        .text(d => d)
    }

    // Add legend
    const legendGroup = svg.append('g')
      .attr('transform', `translate(${width - marginRight - 120}, ${marginTop})`)

    const legendHeight = 100
    const legendWidth = 15

    const legendGradient = svg.append('defs')
      .append('linearGradient')
      .attr('id', 'matrix-legend-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')

    defaultColors.forEach((color, i) => {
      legendGradient.append('stop')
        .attr('offset', `${(i / (defaultColors.length - 1)) * 100}%`)
        .attr('stop-color', color)
    })

    legendGroup.append('rect')
      .attr('width', legendWidth)
      .attr('height', legendHeight)
      .attr('fill', 'url(#matrix-legend-gradient)')
      .attr('rx', 3)

    legendGroup.append('text')
      .attr('x', legendWidth + 8)
      .attr('y', 0)
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#64748b')
      .text(d3.format(',.0f')(maxValue))

    legendGroup.append('text')
      .attr('x', legendWidth + 8)
      .attr('y', legendHeight)
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#64748b')
      .text(d3.format(',.0f')(minValue))

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showValues, roundCells])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('matrix-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
