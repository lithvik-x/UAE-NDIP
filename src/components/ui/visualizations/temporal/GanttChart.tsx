'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from '@/lib/visualization-themes/colors'

interface GanttTask {
  id: string
  name: string
  start: Date | string
  end: Date | string
  category?: string
  color?: string
  progress?: number
}

interface GanttChartProps {
  tasks: GanttTask[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  labelSize?: number
  showProgress?: boolean
  rowHeight?: number
  className?: string
}

/**
 * GanttChart - Project timeline visualization
 *
 * Horizontal bars showing task duration and timeline. Each row is a task,
 * position and width show start/end dates.
 *
 * Use cases:
 * - Campaign timeline
 * - Content production schedule
 * - Project milestones
 * - Activity planning
 */
export function GanttChart({
  tasks,
  width = 800,
  height = 400,
  marginTop = 20,
  marginRight = 30,
  marginBottom = 60,
  marginLeft = 150,
  colors,
  showLabels = true,
  labelSize = 12,
  showProgress = true,
  rowHeight = 40,
  className = '',
}: GanttChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !tasks.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Parse dates
    const parsedTasks = tasks.map(t => ({
      ...t,
      start: t.start instanceof Date ? t.start : new Date(t.start),
      end: t.end instanceof Date ? t.end : new Date(t.end),
    }))

    // Get date range
    const minDate = d3.min(parsedTasks, t => t.start)!
    const maxDate = d3.max(parsedTasks, t => t.end)!

    // Add padding to date range
    const dayPadding = 86400000 // 1 day in ms
    const startDate = new Date(minDate.getTime() - dayPadding)
    const endDate = new Date(maxDate.getTime() + dayPadding)

    // Create scales
    const xScale = d3.scaleTime()
      .domain([startDate, endDate])
      .range([0, innerWidth])

    const yScale = d3.scaleBand()
      .domain(tasks.map(t => t.id))
      .range([0, innerHeight])
      .paddingInner(0.2)

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getTaskColor = (task: GanttTask) => {
      if (task.color) return task.color
      if (Array.isArray(colors)) {
        return colors[tasks.indexOf(task) % colors.length]
      }
      if (colors && task.category && task.category in colors) {
        return (colors as Record<string, string>)[task.category]
      }
      if (task.category) {
        return colorScale(task.category) as string
      }
      return CHART_COLORS.primary
    }

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw grid lines
    const timeTicks = xScale.ticks(d3.timeDay.every(1) as any)
    mainGroup.selectAll('.grid-line')
      .data(timeTicks)
      .join('line')
      .attr('x1', d => xScale(d))
      .attr('x2', d => xScale(d))
      .attr('y1', 0)
      .attr('y2', innerHeight)
      .attr('stroke', '#f1f5f9')
      .attr('stroke-width', 1)

    // Draw tasks
    parsedTasks.forEach((task) => {
      const y = yScale(task.id)!
      const barHeight = yScale.bandwidth()
      const x = xScale(task.start)
      const barWidth = xScale(task.end) - xScale(task.start)
      const color = getTaskColor(task)

      const group = mainGroup.append('g')

      // Draw task bar
      group.append('rect')
        .attr('x', x)
        .attr('y', y)
        .attr('width', barWidth)
        .attr('height', barHeight)
        .attr('fill', color)
        .attr('rx', 4)
        .attr('opacity', 0.85)
        .attr('class', 'gantt-bar')

      // Draw progress
      if (showProgress && task.progress !== undefined) {
        group.append('rect')
          .attr('x', x)
          .attr('y', y)
          .attr('width', barWidth * (task.progress / 100))
          .attr('height', barHeight)
          .attr('fill', color)
          .attr('rx', 4)
          .attr('opacity', 1)
      }

      // Draw label
      if (showLabels) {
        group.append('text')
          .attr('x', -10)
          .attr('y', y + barHeight / 2)
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '500')
          .attr('fill', '#334155')
          .text(task.name)
      }

      // Draw progress text
      if (showProgress && task.progress !== undefined && barWidth > 40) {
        group.append('text')
          .attr('x', x + barWidth / 2)
          .attr('y', y + barHeight / 2)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize - 1}px`)
          .attr('font-weight', '600')
          .attr('fill', '#fff')
          .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
          .text(`${task.progress}%`)
      }

      // Draw dates on hover
      group.append('title')
        .text(`${task.name}\n${d3.timeFormat('%b %d, %Y')(task.start)} - ${d3.timeFormat('%b %d, %Y')(task.end)}`)
    })

    // Add X axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(d3.timeDay.every(1) as any)
      .tickFormat(d3.timeFormat('%b %d') as any)

    mainGroup.append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .attr('class', 'x-axis')
      .call(xAxis as any)
      .selectAll('text')
      .attr('transform', 'rotate(-25)')
      .style('text-anchor', 'end')

  }, [tasks, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showProgress, rowHeight])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('gantt-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
