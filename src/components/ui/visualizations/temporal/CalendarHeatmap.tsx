'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { PERFORMANCE_COLORS } from '@/lib/visualization-themes/colors'

interface CalendarDataPoint {
  date: Date | string
  value: number
  category?: string
}

interface CalendarHeatmapProps {
  data: CalendarDataPoint[]
  width?: number
  height?: number
  year?: number
  colors?: string[]
  cellSize?: number
  cellGap?: number
  cellRadius?: number
  showMonthLabels?: boolean
  showDayLabels?: boolean
  showLegend?: boolean
  legendFormat?: 'value' | 'activity'
  className?: string
  onDayClick?: (point: CalendarDataPoint) => void
  onDayHover?: (point: CalendarDataPoint | null) => void
}

/**
 * CalendarHeatmap - GitHub-style activity calendar
 *
 * Shows daily activity patterns across an entire year. Each cell represents
 * one day, colored by intensity. Ideal for engagement tracking.
 *
 * Use cases:
 * - Daily posting activity
 * - Crisis event frequency
 * - Engagement intensity calendar
 * - Content publication schedule
 */
export function CalendarHeatmap({
  data,
  width = 800,
  height = 150,
  year,
  colors = [
    'hsl(var(--chart-grid))',         // No activity - slate-200
    'hsl(var(--chart-success))',      // Low - green-500
    'hsl(var(--chart-emerald))',      // Medium - emerald
    'hsl(var(--chart-teal))',         // High - teal
    '#14532d',                         // Very high - keep dark green (no CSS var)
  ],
  cellSize = 12,
  cellGap = 3,
  cellRadius = 2,
  showMonthLabels = true,
  showDayLabels = true,
  showLegend = true,
  legendFormat = 'activity',
  className = '',
  onDayClick,
  onDayHover,
}: CalendarHeatmapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredDay, setHoveredDay] = useState<CalendarDataPoint | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    // Parse and process data
    const parsedData = data.map(d => ({
      ...d,
      date: d.date instanceof Date ? d.date : new Date(d.date),
    }))

    // Determine year
    const targetYear = year ?? (parsedData[0]?.date.getFullYear() ?? new Date().getFullYear())

    // Create date map
    const dateMap = new Map(parsedData.map(d => [d.date.toISOString().split('T')[0], d]))

    // Set up calendar layout
    const cellSizeWithGap = cellSize + cellGap
    const weeks = 53
    const days = 7

    const chartWidth = weeks * cellSizeWithGap + 30
    const chartHeight = days * cellSizeWithGap + 30

    // Create scales
    const xScale = d3.scaleTime()
      .domain([new Date(targetYear, 0, 1), new Date(targetYear, 11, 31)])
      .range([30, 30 + (weeks - 1) * cellSizeWithGap])

    const yScale = d3.scaleBand()
      .domain(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
      .range([0, days * cellSizeWithGap])

    // Color scale
    const maxValue = d3.max(parsedData, d => d.value) || 1
    const colorScale = d3.scaleQuantize<string>()
      .domain([0, maxValue])
      .range(colors as any)

    const mainGroup = svg.append('g')
      .attr('transform', 'translate(30, 20)')

    // Create data for each day
    const dayData: Array<{ date: Date; value: number; data?: CalendarDataPoint }> = []
    const startDate = new Date(targetYear, 0, 1)
    const endDate = new Date(targetYear, 11, 31)

    let currentDate = startDate
    while (currentDate <= endDate) {
      const dateKey = currentDate.toISOString().split('T')[0]
      const dayDataPoint = dateMap.get(dateKey)
      dayData.push({
        date: new Date(currentDate),
        value: dayDataPoint?.value ?? 0,
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
      .attr('opacity', d => d.value > 0 ? 1 : 0.5)
      .attr('class', 'calendar-day')
      .style('cursor', 'pointer')
      .style('transition', 'stroke-width 0.1s')
      .on('mouseover', function(event, d) {
        d3.select(this)
          .attr('stroke', '#334155')
          .attr('stroke-width', 2)
        setHoveredDay(d.data ?? null)
        onDayHover?.(d.data ?? null)
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('stroke', '#fff')
          .attr('stroke-width', 1)
        setHoveredDay(null)
        onDayHover?.(null)
      })
      .on('click', (event, d) => {
        if (d.data) {
          onDayClick?.(d.data)
        }
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
        .attr('y', -10)
        .attr('font-size', '11px')
        .attr('fill', '#64748b')
        .text(d => d3.timeFormat('%b')(d))
    }

    // Add legend
    if (showLegend) {
      const legendGroup = svg.append('g')
        .attr('transform', `translate(${width - 150}, 20)`)

      legendGroup.append('text')
        .attr('x', -60)
        .attr('y', cellSize / 2)
        .attr('text-anchor', 'end')
        .attr('font-size', '10px')
        .attr('fill', '#64748b')
        .text(legendFormat === 'activity' ? 'Less' : d3.format(',.0f')(0))

      colors.forEach((color, i) => {
        legendGroup.append('rect')
          .attr('x', i * cellSizeWithGap)
          .attr('y', 0)
          .attr('width', cellSize)
          .attr('height', cellSize)
          .attr('fill', color)
          .attr('rx', cellRadius)
      })

      legendGroup.append('text')
        .attr('x', colors.length * cellSizeWithGap + 5)
        .attr('y', cellSize / 2)
        .attr('text-anchor', 'start')
        .attr('font-size', '10px')
        .attr('fill', '#64748b')
        .text(legendFormat === 'activity' ? 'More' : d3.format(',.0f')(maxValue))
    }

    // Tooltip (simplified - you may want to use a proper tooltip component)
    if (hoveredDay) {
      const tooltip = svg.append('g')
        .attr('class', 'tooltip')
        .attr('transform', `translate(${width / 2}, ${height / 2})`)

      const tooltipBg = tooltip.append('rect')
        .attr('fill', '#1e293b')
        .attr('rx', 4)

      const tooltipText = tooltip.append('text')
        .attr('fill', '#fff')
        .attr('font-size', '12px')
        .attr('text-anchor', 'middle')

      const text = `${d3.timeFormat('%B %d, %Y')(hoveredDay.date as Date)}: ${hoveredDay.value}`
      const textWidth = text.length * 7

      tooltipBg
        .attr('x', -textWidth / 2 - 8)
        .attr('y', -15)
        .attr('width', textWidth + 16)
        .attr('height', 24)

      tooltipText
        .attr('y', 0)
        .text(text)
    }

  }, [data, width, height, year, colors, cellSize, cellGap, cellRadius, showMonthLabels, showDayLabels, showLegend, legendFormat, onDayClick, onDayHover, hoveredDay])

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
