'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { PERFORMANCE_COLORS } from '@/lib/visualization-themes/colors'

interface FullCalendarDataPoint {
  date: Date | string
  value: number
  category?: string
}

interface FullCalendarHeatmapProps {
  data: FullCalendarDataPoint[]
  width?: number
  height?: number
  year?: number
  cellSize?: number
  cellGap?: number
  cellRadius?: number
  colors?: string[]
  showMonthLabels?: boolean
  showDayLabels?: boolean
  showLegend?: boolean
  legendFormat?: 'value' | 'activity'
  className?: string
}

/**
 * CalendarHeatmapFull - Full year calendar heat map
 *
 * Year-view calendar with colored cells showing daily values.
 * Each day is a cell, color intensity represents magnitude.
 *
 * Use cases:
 * - Daily engagement for entire year
 * - Publication activity calendar
 * - Event frequency by day
 * - Score tracking over year
 */
export function CalendarHeatmapFull({
  data,
  width = 900,
  height = 200,
  year,
  cellSize = 14,
  cellGap = 3,
  cellRadius = 2,
  colors,
  showMonthLabels = true,
  showDayLabels = true,
  showLegend = true,
  legendFormat = 'activity',
  className = '',
}: FullCalendarHeatmapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredDay, setHoveredDay] = useState<FullCalendarDataPoint | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const targetYear = year || (data[0]?.date instanceof Date ? data[0].date.getFullYear() : new Date(data[0].date).getFullYear())

    // Create date map
    const dateMap = new Map(
      data.map(d => {
        const date = d.date instanceof Date ? d.date : new Date(d.date)
        return [date.toISOString().split('T')[0], { ...d, date }]
      })
    )

    const cellSizeWithGap = cellSize + cellGap

    // Calculate dimensions
    const weeks = 53
    const days = 7
    const chartWidth = weeks * cellSizeWithGap + 30
    const chartHeight = days * cellSizeWithGap + 40

    const maxValue = d3.max(data, d => d.value) || 1
    const minValue = d3.min(data, d => d.value) || 0

    // Color scale
    const defaultColors = ['#ebedf0', '#c6dbdd', '#9de6d8', '#74c6b6', '#52b2ac', '#399ea5', '#2f8fa1']
    const colorScale = d3.scaleQuantize<string>()
      .domain([minValue, maxValue])
      .range(colors || defaultColors as any)

    const mainGroup = svg.append('g')
      .attr('transform', 'translate(30, 20)')

    // Create data for each day
    const dayData: Array<{ date: Date; value: number; data?: FullCalendarDataPoint }> = []
    const startDate = new Date(targetYear, 0, 1)
    const endDate = new Date(targetYear, 11, 31)

    let currentDate = startDate
    while (currentDate <= endDate) {
      const dateKey = currentDate.toISOString().split('T')[0]
      const dayDataPoint = dateMap.get(dateKey)
      dayData.push({
        date: new Date(currentDate),
        value: dayDataPoint?.value || 0,
        data: dayDataPoint,
      })
      currentDate.setDate(currentDate.getDate() + 1)
    }

    // Draw cells
    mainGroup.selectAll('rect')
      .data(dayData)
      .join('rect')
      .attr('x', d => {
        const weekNumber = d3.timeWeek.count(d3.timeYear(d.date), d.date)
        return weekNumber * cellSizeWithGap
      })
      .attr('y', d => d.date.getDay() * cellSizeWithGap)
      .attr('width', cellSize)
      .attr('height', cellSize)
      .attr('fill', d => colorScale(d.value))
      .attr('rx', cellRadius)
      .attr('stroke', '#fff')
      .attr('stroke-width', 1)
      .attr('opacity', (d: any) => d.value > 0 ? 1 : 0.5)
      .attr('class', 'calendar-day')
      .style('cursor', 'pointer')
      .style('transition', 'stroke-width 0.1s')
      .on('mouseover', function(event, d) {
        d3.select(this)
          .attr('stroke', '#334155')
          .attr('stroke-width', 2)
        setHoveredDay(d.data || null)
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('stroke', '#fff')
          .attr('stroke-width', 1)
        setHoveredDay(null)
      })

    // Add day labels
    if (showDayLabels) {
      const dayLabels = ['Mon', '', 'Wed', '', 'Fri', '']
      mainGroup.selectAll('.day-label')
        .data(dayLabels)
        .join('text')
        .attr('x', -5)
        .attr('y', (d, i) => {
          const dayIndex = i === 0 ? 1 : i === 1 ? 3 : i === 2 ? 5 : i * 2 + 1
          return dayIndex * cellSizeWithGap + cellSize / 2
        })
        .attr('text-anchor', 'end')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .attr('fill', '#64748b')
        .text(d => d)
    }

    // Add month labels
    if (showMonthLabels) {
      const months = d3.timeMonths(new Date(targetYear, 0, 1), new Date(targetYear + 1, 0, 1))
      mainGroup.selectAll('.month-label')
        .data(months)
        .join('text')
        .attr('x', d => {
          const weekNumber = d3.timeWeek.count(d3.timeYear(d), d)
          return weekNumber * cellSizeWithGap
        })
        .attr('y', -8)
        .attr('font-size', '11px')
        .attr('fill', '#64748b')
        .attr('font-weight', '500')
        .text(d => d3.timeFormat('%b')(d))
    }

    // Add legend
    if (showLegend) {
      const legendGroup = svg.append('g')
        .attr('transform', `translate(${chartWidth - 100}, 20)`)

      const legendHeight = 80
      const legendWidth = 12

      const legendGradient = svg.append('defs')
        .append('linearGradient')
        .attr('id', 'calendar-legend-gradient')
        .attr('x1', '0%')
        .attr('y1', '100%')
        .attr('x2', '0%')
        .attr('y2', '0%')

      const colorDomain = colorScale.domain()
      const colorRange = colorScale.range()

      colorRange.forEach((color, i) => {
        legendGradient.append('stop')
          .attr('offset', `${(i / (colorRange.length - 1)) * 100}%`)
          .attr('stop-color', color)
      })

      legendGroup.append('rect')
        .attr('width', legendWidth)
        .attr('height', legendHeight)
        .attr('fill', 'url(#calendar-legend-gradient)')
        .attr('rx', 2)

      legendGroup.append('text')
        .attr('x', legendWidth + 8)
        .attr('y', 0)
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .attr('fill', '#64748b')
        .text(legendFormat === 'activity' ? 'More' : d3.format(',.0f')(colorDomain[colorDomain.length - 1]))

      legendGroup.append('text')
        .attr('x', legendWidth + 8)
        .attr('y', legendHeight)
        .attr('dominant-baseline', 'middle')
        .attr('font-size', '10px')
        .attr('fill', '#64748b')
        .text(legendFormat === 'activity' ? 'Less' : d3.format(',.0f')(colorDomain[0]))
    }

  }, [data, width, height, year, cellSize, cellGap, cellRadius, colors, showMonthLabels, showDayLabels, showLegend, legendFormat])

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
