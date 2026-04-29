'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { RISK_COLORS, PERFORMANCE_COLORS } from '@/lib/visualization-themes/colors'

interface TimelineEvent {
  id: string
  title: string
  date: Date | string
  endDate?: Date | string
  category?: string
  description?: string
  color?: string
  type?: 'milestone' | 'period' | 'crisis' | 'achievement'
}

interface TimelineProps {
  events: TimelineEvent[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: Record<string, string>
  showLabels?: boolean
  labelSize?: number
  showDescriptions?: boolean
  orientation?: 'horizontal' | 'vertical'
  className?: string
  onEventClick?: (event: TimelineEvent) => void
}

/**
 * Timeline - Event sequence visualization
 *
 * Linear display of events in chronological order. Shows milestones,
 * periods, and critical events along a time axis.
 *
 * Use cases:
 * - Crisis event timeline
 * - Campaign milestone tracking
 * - Platform launch history
 * - Content publication schedule
 */
export function Timeline({
  events,
  width = 900,
  height = 400,
  marginTop = 40,
  marginRight = 40,
  marginBottom = 60,
  marginLeft = 40,
  colors,
  showLabels = true,
  labelSize = 12,
  showDescriptions = false,
  orientation = 'horizontal',
  className = '',
  onEventClick,
}: TimelineProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current || !events.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Parse dates
    const parsedEvents = events.map(e => ({
      ...e,
      date: e.date instanceof Date ? e.date : new Date(e.date),
      endDate: e.endDate ? (e.endDate instanceof Date ? e.endDate : new Date(e.endDate)) : undefined,
    }))

    // Sort by date
    const sortedEvents = [...parsedEvents].sort((a, b) => a.date.getTime() - b.date.getTime())

    // Get date range
    const minDate = d3.min(sortedEvents, e => e.date)!
    const maxDate = d3.max(sortedEvents, e => e.endDate || e.date)!

    // Create time scale
    const timeScale = d3.scaleTime()
      .domain([minDate, maxDate])
      .range(orientation === 'horizontal' ? [0, innerWidth] : [innerHeight, 0])

    // Color function
    const getEventColor = (event: TimelineEvent) => {
      if (event.color) return event.color
      if (colors && colors[event.category || '']) return colors[event.category || '']

      switch (event.type) {
        case 'crisis':
          return RISK_COLORS.high
        case 'achievement':
          return PERFORMANCE_COLORS.excellent
        case 'milestone':
          return '#0ea5e9'
        case 'period':
          return '#8b5cf6'
        default:
          return '#64748b'
      }
    }

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw main axis line
    if (orientation === 'horizontal') {
      mainGroup.append('line')
        .attr('x1', 0)
        .attr('x2', innerWidth)
        .attr('y1', innerHeight / 2)
        .attr('y2', innerHeight / 2)
        .attr('stroke', '#cbd5e1')
        .attr('stroke-width', 3)
    } else {
      mainGroup.append('line')
        .attr('x1', innerWidth / 2)
        .attr('x2', innerWidth / 2)
        .attr('y1', 0)
        .attr('y2', innerHeight)
        .attr('stroke', '#cbd5e1')
        .attr('stroke-width', 3)
    }

    // Draw time axis
    if (orientation === 'horizontal') {
      const xAxis = d3.axisBottom(timeScale)
        .ticks(width / 150)
        .tickSize(8)

      mainGroup.append('g')
        .attr('transform', `translate(0, ${innerHeight})`)
        .attr('class', 'x-axis')
        .call(xAxis as any)
    } else {
      const yAxis = d3.axisLeft(timeScale)
        .ticks(height / 100)

      mainGroup.append('g')
        .attr('class', 'y-axis')
        .call(yAxis as any)
    }

    // Draw events
    const eventGroups = mainGroup.selectAll('.event-group')
      .data(sortedEvents)
      .join('g')
      .attr('class', 'event-group')
      .style('cursor', onEventClick ? 'pointer' : 'default')

    eventGroups.each(function(event, i) {
      const group = d3.select(this)

      const x = orientation === 'horizontal'
        ? timeScale(event.date)
        : innerWidth / 2

      const y = orientation === 'horizontal'
        ? innerHeight / 2
        : timeScale(event.date)

      const color = getEventColor(event)

      // Determine position offset (alternating above/below or left/right)
      const offset = (i % 2 === 0 ? 1 : -1) * 40

      if (event.type === 'milestone' || !event.endDate) {
        // Single point event
        group.append('circle')
          .attr('cx', x)
          .attr('cy', y)
          .attr('r', event.type === 'milestone' ? 10 : 6)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 3)
          .attr('opacity', 0.9)
          .attr('class', 'timeline-marker')
          .style('transition', 'all 0.2s')

        // Add pulse effect for milestones
        if (event.type === 'milestone') {
          group.append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 10)
            .attr('fill', 'none')
            .attr('stroke', color)
            .attr('stroke-width', 2)
            .attr('opacity', 0.5)
        }
      } else {
        // Period event (with duration)
        const x2 = orientation === 'horizontal'
          ? timeScale(event.endDate!)
          : innerWidth / 2

        const y2 = orientation === 'horizontal'
          ? innerHeight / 2
          : timeScale(event.endDate!)

        group.append('line')
          .attr('x1', x)
          .attr('y1', y)
          .attr('x2', x2)
          .attr('y2', y2)
          .attr('stroke', color)
          .attr('stroke-width', 8)
          .attr('opacity', 0.6)
          .attr('class', 'timeline-period')

        group.append('circle')
          .attr('cx', x)
          .attr('cy', y)
          .attr('r', 6)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)

        group.append('circle')
          .attr('cx', x2)
          .attr('cy', y2)
          .attr('r', 6)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
      }

      // Add label
      if (showLabels) {
        const labelX = orientation === 'horizontal'
          ? x
          : innerWidth / 2 + offset

        const labelY = orientation === 'horizontal'
          ? innerHeight / 2 + offset
          : y

        const textAnchor = orientation === 'horizontal'
          ? 'middle'
          : (offset > 0 ? 'start' : 'end')

        group.append('text')
          .attr('x', labelX)
          .attr('y', labelY - 8)
          .attr('text-anchor', textAnchor)
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', color)
          .text(event.title)

        // Add date
        group.append('text')
          .attr('x', labelX)
          .attr('y', labelY + 6)
          .attr('text-anchor', textAnchor)
          .attr('font-size', `${labelSize - 1}px`)
          .attr('fill', '#64748b')
          .text(d3.timeFormat('%b %d, %Y')(event.date))

        // Add description if space permits
        if (showDescriptions && event.description) {
          group.append('text')
            .attr('x', labelX)
            .attr('y', labelY + 20)
            .attr('text-anchor', textAnchor)
            .attr('font-size', `${labelSize - 2}px`)
            .attr('fill', '#94a3b8')
            .text(event.description)
        }
      }

      // Hover effects
      group.on('mouseover', function() {
          d3.select(this).selectAll('circle, line')
            .attr('opacity', 1)
          setHoveredEvent(event.id)
        })
        .on('mouseout', function() {
          d3.select(this).selectAll('circle')
            .attr('opacity', 0.9)
          d3.select(this).select('.timeline-period')
            .attr('opacity', 0.6)
          setHoveredEvent(null)
        })
        .on('click', () => {
          onEventClick?.(event)
        })
    })

  }, [events, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showDescriptions, orientation, onEventClick])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('timeline', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
