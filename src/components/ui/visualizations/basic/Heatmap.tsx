'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { PERFORMANCE_COLORS, RISK_COLORS } from '@/lib/visualization-themes/colors'

interface HeatmapDataPoint {
  x: string
  y: string
  value: number
  category?: string
}

interface HeatmapProps {
  data: HeatmapDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  cellWidth?: number
  cellHeight?: number
  cellGap?: number
  colorScale?: 'performance' | 'risk' | 'sequential' | 'diverging'
  colors?: string[]
  showValues?: boolean
  showLegend?: boolean
  legendPosition?: 'top' | 'right' | 'bottom' | 'left'
  roundCells?: boolean
  className?: string
  onCellClick?: (point: HeatmapDataPoint) => void
  onCellHover?: (point: HeatmapDataPoint | null) => void
}

/**
 * Heatmap - 2D density visualization
 *
 * Grid of colored cells where color intensity represents value magnitude.
 * Ideal for spotting patterns, outliers, and correlations.
 *
 * Use cases:
 * - Hour-of-day vs day-of-week engagement patterns
 * - Platform vs topic heat matrix
 * - Risk matrix display
 * - Performance correlation heatmaps
 */
export function Heatmap({
  data,
  width = 600,
  height = 400,
  marginTop = 40,
  marginRight = 100,
  marginBottom = 60,
  marginLeft = 100,
  cellWidth,
  cellHeight,
  cellGap = 2,
  colorScale = 'sequential',
  colors,
  showValues = true,
  showLegend = true,
  legendPosition = 'right',
  roundCells = true,
  className = '',
  onCellClick,
  onCellHover,
}: HeatmapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredCell, setHoveredCell] = useState<HeatmapDataPoint | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    // Get unique x and y values
    const xValues = Array.from(new Set(data.map(d => d.x)))
    const yValues = Array.from(new Set(data.map(d => d.y)))

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Calculate cell dimensions
    const effectiveCellWidth = cellWidth ?? (innerWidth - (xValues.length - 1) * cellGap) / xValues.length
    const effectiveCellHeight = cellHeight ?? (innerHeight - (yValues.length - 1) * cellGap) / yValues.length

    // Get color scheme
    const getColors = () => {
      if (colors) return colors

      switch (colorScale) {
        case 'performance':
          return [
            PERFORMANCE_COLORS.critical,
            PERFORMANCE_COLORS.poor,
            PERFORMANCE_COLORS.fair,
            PERFORMANCE_COLORS.satisfactory,
            PERFORMANCE_COLORS.good,
            PERFORMANCE_COLORS.excellent,
          ]
        case 'risk':
          return [
            RISK_COLORS.minimal,
            RISK_COLORS.low,
            RISK_COLORS['medium-low'],
            RISK_COLORS.medium,
            RISK_COLORS['medium-high'],
            RISK_COLORS.high,
            RISK_COLORS.extreme,
          ]
        case 'diverging':
          return ['#3b82f6', '#e0e7ff', '#ffffff', '#fef3c7', '#f59e0b']
        default:
          return ['#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1']
      }
    }

    const colorScheme = getColors()
    const maxValue = d3.max(data, d => d.value) || 1
    const minValue = d3.min(data, d => d.value) || 0

    // Create color scale
    const colorScaleFn = d3.scaleSequential()
      .domain([minValue, maxValue])
      .interpolator(d3.interpolateRgb(colorScheme[0], colorScheme[colorScheme.length - 1]))

    // For categorical color scales
    const ordinalColorScale = d3.scaleQuantize<string>()
      .domain([minValue, maxValue])
      .range(colorScheme as any)

    const getColor = (value: number) => {
      return colorScale === 'sequential' || colorScale === 'diverging'
        ? colorScaleFn(value)
        : ordinalColorScale(value)
    }

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw cells
    const cells = mainGroup.selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', d => {
        const xIndex = xValues.indexOf(d.x)
        const yIndex = yValues.indexOf(d.y)
        return `translate(${xIndex * (effectiveCellWidth + cellGap)}, ${yIndex * (effectiveCellHeight + cellGap)})`
      })
      .attr('class', 'heatmap-cell-group')
      .style('cursor', onCellClick ? 'pointer' : 'default')

    cells.append('rect')
      .attr('width', effectiveCellWidth)
      .attr('height', effectiveCellHeight)
      .attr('fill', d => getColor(d.value))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1)
      .attr('opacity', 0.9)
      .attr('rx', roundCells ? 4 : 0)
      .attr('class', 'heatmap-cell')
      .style('transition', 'opacity 0.2s')
      .on('mouseover', function(event, d) {
        d3.select(this).attr('opacity', 1)
        setHoveredCell(d)
        onCellHover?.(d)
      })
      .on('mouseout', function() {
        d3.select(this).attr('opacity', 0.9)
        setHoveredCell(null)
        onCellHover?.(null)
      })
      .on('click', (event, d) => {
        onCellClick?.(d)
      })

    // Add value labels
    if (showValues) {
      cells.append('text')
        .attr('x', effectiveCellWidth / 2)
        .attr('y', effectiveCellHeight / 2)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', Math.min(effectiveCellWidth, effectiveCellHeight) / 4)
        .attr('font-weight', '500')
        .attr('fill', d => {
          // Use white text for dark cells, black for light
          const brightness = d3.hsl(getColor(d.value)).l
          return brightness > 0.6 ? '#334155' : '#ffffff'
        })
        .attr('pointer-events', 'none')
        .text(d => {
          // Only show if cell is large enough
          if (effectiveCellWidth < 30 || effectiveCellHeight < 20) return ''
          return d3.format('.0f')(d.value)
        })
    }

    // Add X axis labels
    mainGroup.selectAll('.x-label')
      .data(xValues)
      .join('text')
      .attr('x', (d, i) => i * (effectiveCellWidth + cellGap) + effectiveCellWidth / 2)
      .attr('y', innerHeight + 15)
      .attr('text-anchor', 'middle')
      .attr('font-size', '11px')
      .attr('fill', '#64748b')
      .attr('transform', (d, i) => {
        // Rotate if too many labels
        if (xValues.length > 10) {
          return `rotate(45, ${i * (effectiveCellWidth + cellGap) + effectiveCellWidth / 2}, ${innerHeight + 15})`
        }
        return ''
      })
      .text(d => d)

    // Add Y axis labels
    mainGroup.selectAll('.y-label')
      .data(yValues)
      .join('text')
      .attr('x', -10)
      .attr('y', (d, i) => i * (effectiveCellHeight + cellGap) + effectiveCellHeight / 2)
      .attr('text-anchor', 'end')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '11px')
      .attr('fill', '#64748b')
      .text(d => d)

    // Add legend
    if (showLegend) {
      const legendWidth = 15
      const legendLength = 150
      const legendX = innerWidth + 20
      const legendY = innerHeight / 2 - legendLength / 2

      const legendGradient = svg.append('defs')
        .append('linearGradient')
        .attr('id', 'heatmap-legend-gradient')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%')

      colorScheme.forEach((color, i) => {
        legendGradient.append('stop')
          .attr('offset', `${(i / (colorScheme.length - 1)) * 100}%`)
          .attr('stop-color', color)
      })

      const legendGroup = svg.append('g')
        .attr('transform', `translate(${legendX}, ${legendY})`)

      legendGroup.append('rect')
        .attr('width', legendWidth)
        .attr('height', legendLength)
        .attr('fill', 'url(#heatmap-legend-gradient)')
        .attr('rx', 3)

      // Legend labels
      legendGroup.append('text')
        .attr('x', legendWidth + 8)
        .attr('y', 0)
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .attr('fill', '#64748b')
        .text(d3.format(',.0f')(maxValue))

      legendGroup.append('text')
        .attr('x', legendWidth + 8)
        .attr('y', legendLength)
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .attr('fill', '#64748b')
        .text(d3.format(',.0f')(minValue))
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, cellWidth, cellHeight, cellGap, colorScale, colors, showValues, showLegend, legendPosition, roundCells, onCellClick, onCellHover])

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
