'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface MarimekkoDataPoint {
  category: string
  segments: Array<{
    name: string
    value: number
  }>
  color?: string
}

interface MarimekkoChartProps {
  data: MarimekkoDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  showValues?: boolean
  showPercentages?: boolean
  labelSize?: number
  className?: string
}

/**
 * MarimekkoChart - 100% stacked variable width chart
 *
 * Like a stacked bar chart where both width and height represent values.
 * Column width = category total, height = segment values.
 *
 * Use cases:
 * - Platform vs topic cross-analysis
 * - Region vs metric breakdown
 * - Multi-dimensional composition
 * - Market share analysis
 */
export function MarimekkoChart({
  data,
  width = 800,
  height = 500,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 60,
  marginLeft = 60,
  colors,
  showLabels = true,
  showValues = false,
  showPercentages = true,
  labelSize = 11,
  className = '',
}: MarimekkoChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredCell, setHoveredCell] = useState<{ category: string; segment: string } | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Calculate totals for each category
    const categoryTotals = data.map(d => ({
      category: d.category,
      total: d.segments.reduce((sum, s) => sum + s.value, 0),
    }))

    const grandTotal = d3.sum(categoryTotals, d => d.total)

    // Get all unique segment names
    const allSegments = Array.from(new Set(data.flatMap(d => d.segments.map(s => s.name))))

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getSegmentColor = (segmentName: string, index: number) => {
      if (Array.isArray(colors)) {
        return colors[index % colors.length]
      }
      if (colors && segmentName in colors) {
        return (colors as Record<string, string>)[segmentName]
      }
      return colorScale(segmentName) as string
    }

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Calculate column positions
    let currentX = 0
    const columnPositions = data.map((d, i) => {
      const width = (categoryTotals[i].total / grandTotal) * innerWidth
      const column = {
        data: d,
        x: currentX,
        width,
        total: categoryTotals[i].total,
      }
      currentX += width
      return column
    })

    // Draw cells
    columnPositions.forEach(column => {
      let currentY = 0

      column.data.segments.forEach((segment, segIndex) => {
        const segmentHeight = (segment.value / column.total) * innerHeight
        const color = getSegmentColor(segment.name, segIndex)

        const cellGroup = mainGroup.append('g')
          .attr('class', 'marimekko-cell')
          .style('cursor', 'pointer')

        cellGroup.append('rect')
          .attr('x', column.x)
          .attr('y', currentY)
          .attr('width', column.width - 1)
          .attr('height', segmentHeight)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 1)
          .attr('opacity', 0.85)
          .style('transition', 'opacity 0.2s')
          .on('mouseover', function() {
            d3.select(this).attr('opacity', 1)
            setHoveredCell({ category: column.data.category, segment: segment.name })
          })
          .on('mouseout', function() {
            d3.select(this).attr('opacity', 0.85)
            setHoveredCell(null)
          })

        // Add labels if cell is large enough
        if (column.width > 60 && segmentHeight > 20) {
          if (showValues || showPercentages) {
            const percentage = ((segment.value / column.total) * 100).toFixed(1)
            cellGroup.append('text')
              .attr('x', column.x + column.width / 2)
              .attr('y', currentY + segmentHeight / 2)
              .attr('text-anchor', 'middle')
              .attr('dominant-baseline', 'middle')
              .attr('font-size', `${labelSize}px`)
              .attr('font-weight', '600')
              .attr('fill', '#fff')
              .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
              .text(`${percentage}%`)
          }
        }

        currentY += segmentHeight
      })
    })

    // Add column labels (category names)
    if (showLabels) {
      columnPositions.forEach(column => {
        if (column.width > 30) {
          mainGroup.append('text')
            .attr('x', column.x + column.width / 2)
            .attr('y', innerHeight + 15)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '600')
            .attr('fill', '#334155')
            .text(column.data.category)

          // Column percentage
          const columnPercent = ((column.total / grandTotal) * 100).toFixed(1)
          mainGroup.append('text')
            .attr('x', column.x + column.width / 2)
            .attr('y', innerHeight + 30)
            .attr('text-anchor', 'middle')
            .attr('font-size', `${labelSize - 1}px`)
            .attr('fill', '#64748b')
            .text(`${columnPercent}%`)
        }
      })
    }

    // Add segment labels on left
    if (showLabels) {
      // Calculate segment positions based on first column
      let currentY = 0
      columnPositions[0].data.segments.forEach((segment, segIndex) => {
        const segmentHeight = (segment.value / columnPositions[0].total) * innerHeight

        mainGroup.append('text')
          .attr('x', -10)
          .attr('y', currentY + segmentHeight / 2)
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '500')
          .attr('fill', '#64748b')
          .text(segment.name)

        currentY += segmentHeight
      })
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, showValues, showPercentages, labelSize])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('marimekko-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
