'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface MosaicDataPoint {
  x: string
  y: string
  value: number
  category?: string
}

interface MosaicPlotProps {
  data: MosaicDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  showPercentages?: boolean
  className?: string
}

/**
 * MosaicPlot - Marimekko with two categorical variables
 *
 * Shows relationship between two categorical variables. Both dimensions
 * affect cell size, creating a mosaic pattern.
 *
 * Use cases:
 * - Platform vs topic cross-analysis
 * - Audience demographic breakdown
 * - Content type vs platform
 * - Regional vs categorical metrics
 */
export function MosaicPlot({
  data,
  width = 700,
  height = 500,
  marginTop = 20,
  marginRight = 100,
  marginBottom = 80,
  marginLeft = 100,
  colors,
  showLabels = true,
  labelSize = 11,
  showValues = false,
  showPercentages = true,
  className = '',
}: MosaicPlotProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Get unique categories
    const xCategories = Array.from(new Set(data.map(d => d.x)))
    const yCategories = Array.from(new Set(data.map(d => d.y)))

    // Calculate totals
    const total = d3.sum(data, d => d.value)
    const xTotals = new Map(xCategories.map(cat => [cat, d3.sum(data.filter(d => d.x === cat), d => d.value)]))
    const yTotals = new Map(yCategories.map(cat => [cat, d3.sum(data.filter(d => d.y === cat), d => d.value)]))

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getColor = (d: MosaicDataPoint) => {
      if (Array.isArray(colors)) {
        const xIndex = xCategories.indexOf(d.x)
        const yIndex = yCategories.indexOf(d.y)
        return colors[(xIndex + yIndex) % colors.length]
      }
      if (d.category && colors && typeof colors === 'object' && d.category in colors) {
        return (colors as Record<string, string>)[d.category]
      }
      return colorScale(`${d.x}-${d.y}`) as string
    }

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    let currentX = 0
    xCategories.forEach((xCat, xIndex) => {
      const xWidth = (xTotals.get(xCat)! / total) * innerWidth
      let currentY = 0

      yCategories.forEach((yCat, yIndex) => {
        const cellData = data.find(d => d.x === xCat && d.y === yCat)
        if (cellData) {
          const cellWidth = (cellData.value / xTotals.get(xCat)!) * xWidth
          const cellHeight = (yTotals.get(yCat)! / total) * innerHeight
          const color = getColor(cellData)

          const group = mainGroup.append('g')

          // Draw cell
          group.append('rect')
            .attr('x', currentX)
            .attr('y', currentY)
            .attr('width', cellWidth)
            .attr('height', cellHeight)
            .attr('fill', color)
            .attr('stroke', '#fff')
            .attr('stroke-width', 1)
            .attr('opacity', 0.85)
            .attr('class', 'mosaic-cell')

          // Draw percentage
          if (showPercentages && cellWidth > 30 && cellHeight > 20) {
            const percentage = ((cellData.value / total) * 100).toFixed(1)
            group.append('text')
              .attr('x', currentX + cellWidth / 2)
              .attr('y', currentY + cellHeight / 2)
              .attr('text-anchor', 'middle')
              .attr('dominant-baseline', 'middle')
              .attr('font-size', `${labelSize}px`)
              .attr('font-weight', '600')
              .attr('fill', '#fff')
              .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
              .text(`${percentage}%`)
          }

          currentY += cellHeight
        }
      })

      // Draw X label
      if (showLabels) {
        mainGroup.append('text')
          .attr('x', currentX + xWidth / 2)
          .attr('y', innerHeight + 15)
          .attr('text-anchor', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', '#334155')
          .text(xCat)

        const xPercent = ((xTotals.get(xCat)! / total) * 100).toFixed(1)
        mainGroup.append('text')
          .attr('x', currentX + xWidth / 2)
          .attr('y', innerHeight + 30)
          .attr('text-anchor', 'middle')
          .attr('font-size', `${labelSize - 1}px`)
          .attr('fill', '#64748b')
          .text(`${xPercent}%`)
      }

      currentX += xWidth
    })

    // Draw Y labels
    if (showLabels) {
      let currentY = 0
      yCategories.forEach((yCat) => {
        const yHeight = (yTotals.get(yCat)! / total) * innerHeight

        mainGroup.append('text')
          .attr('x', -10)
          .attr('y', currentY + yHeight / 2)
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', '#334155')
          .text(yCat)

        const yPercent = ((yTotals.get(yCat)! / total) * 100).toFixed(1)
        mainGroup.append('text')
          .attr('x', -55)
          .attr('y', currentY + yHeight / 2)
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize - 1}px`)
          .attr('fill', '#64748b')
          .text(`${yPercent}%`)

        currentY += yHeight
      })
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showValues, showPercentages])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('mosaic-plot', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
