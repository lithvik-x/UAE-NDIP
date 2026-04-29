'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

interface BumpDataPoint {
  category: string
  period: string
  value: number
  rank: number
}

interface BumpChartProps {
  data: BumpDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: Record<string, string>
  lineWidth?: number
  showLabels?: boolean
  labelSize?: number
  showDots?: boolean
  dotSize?: number
  className?: string
  onLineClick?: (category: string) => void
  onLineHover?: (category: string | null) => void
}

/**
 * BumpChart - Rank change over time visualization
 *
 * Shows how rankings change over periods. Lines cross to show overtaking.
 * Ideal for tracking position changes in leaderboards.
 *
 * Use cases:
 * - Platform ranking changes over time
 * - Topic popularity rank shifts
 * - Influencer position changes
 * - Hashtag trending position tracking
 */
export function BumpChart({
  data,
  width = 800,
  height = 500,
  marginTop = 40,
  marginRight = 120,
  marginBottom = 60,
  marginLeft = 60,
  colors,
  lineWidth = 3,
  showLabels = true,
  labelSize = 12,
  showDots = true,
  dotSize = 6,
  className = '',
  onLineClick,
  onLineHover,
}: BumpChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredLine, setHoveredLine] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Get unique categories and periods
    const categories = Array.from(new Set(data.map(d => d.category)))
    const periods = Array.from(new Set(data.map(d => d.period))).sort()

    // Determine max rank
    const maxRank = Math.max(...data.map(d => d.rank))

    // Create scales
    const xScale = d3.scalePoint()
      .domain(periods)
      .range([0, innerWidth])

    const yScale = d3.scaleLinear()
      .domain([1, maxRank + 1])
      .range([0, innerHeight])

    // Color scale
    const defaultColors: Record<string, string> = {}
    categories.forEach((cat, i) => {
      const hue = (i * 137.5) % 360
      defaultColors[cat] = `hsl(${hue}, 65%, 50%)`
    })

    const getColor = (category: string) => colors?.[category] || defaultColors[category]

    // Group data by category
    const dataByCategory = new Map<string, BumpDataPoint[]>()
    categories.forEach(cat => {
      dataByCategory.set(cat, data.filter(d => d.category === cat))
    })

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw horizontal grid lines (ranks)
    for (let i = 1; i <= maxRank; i++) {
      mainGroup.append('line')
        .attr('x1', 0)
        .attr('x2', innerWidth)
        .attr('y1', yScale(i))
        .attr('y2', yScale(i))
        .attr('stroke', i % 5 === 0 ? '#cbd5e1' : '#f1f5f9')
        .attr('stroke-width', i % 5 === 0 ? 1.5 : 1)
        .attr('stroke-dasharray', i % 5 === 0 ? '0' : '3,3')

      if (i % 5 === 0) {
        mainGroup.append('text')
          .attr('x', -10)
          .attr('y', yScale(i))
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', '11px')
          .attr('fill', '#94a3b8')
          .text(`#${i}`)
      }
    }

    // Draw lines
    const lines = mainGroup.selectAll('.bump-line')
      .data(categories)
      .join('path')
      .attr('class', 'bump-line')
      .attr('fill', 'none')
      .attr('stroke', cat => getColor(cat))
      .attr('stroke-width', lineWidth)
      .attr('stroke-opacity', 0.8)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .style('cursor', onLineClick ? 'pointer' : 'default')
      .style('transition', 'stroke-opacity 0.2s, stroke-width 0.2s')

    // Generate line path
    lines.each(function(category) {
      const catData = dataByCategory.get(category)!
      const lineGenerator = d3.line<typeof catData[0]>()
        .x(d => xScale(d.period)!)
        .y(d => yScale(d.rank))
        .curve(d3.curveMonotoneX)

      d3.select(this)
        .attr('d', lineGenerator(catData))
    })

    // Hover effects
    lines.on('mouseover', function(event, category) {
        setHoveredLine(category)

        // Fade other lines
        lines
          .attr('stroke-opacity', cat => cat === category ? 1 : 0.2)
          .attr('stroke-width', cat => cat === category ? lineWidth * 1.5 : lineWidth)

        onLineHover?.(category)
      })
      .on('mouseout', function() {
        setHoveredLine(null)
        lines
          .attr('stroke-opacity', 0.8)
          .attr('stroke-width', lineWidth)
        onLineHover?.(null)
      })
      .on('click', (event, category) => {
        onLineClick?.(category)
      })

    // Draw dots
    if (showDots) {
      categories.forEach(category => {
        const catData = dataByCategory.get(category)!

        mainGroup.selectAll(`.dot-${category}`)
          .data(catData)
          .join('circle')
          .attr('class', `bump-dot dot-${category}`)
          .attr('cx', d => xScale(d.period)!)
          .attr('cy', d => yScale(d.rank))
          .attr('r', dotSize)
          .attr('fill', getColor(category))
          .attr('stroke', '#fff')
          .attr('stroke-width', 2)
          .style('cursor', 'pointer')
      })
    }

    // Draw labels
    if (showLabels) {
      // Draw labels for first and last periods
      categories.forEach(category => {
        const catData = dataByCategory.get(category)!

        // First period label
        const first = catData[0]
        mainGroup.append('text')
          .attr('x', -10)
          .attr('y', yScale(first.rank))
          .attr('text-anchor', 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', getColor(category))
          .text(category)

        // Last period label (if there are multiple periods)
        if (periods.length > 1) {
          const last = catData[catData.length - 1]
          mainGroup.append('text')
            .attr('x', innerWidth + 10)
            .attr('y', yScale(last.rank))
            .attr('text-anchor', 'start')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', `${labelSize}px`)
            .attr('font-weight', '600')
            .attr('fill', getColor(category))
            .text(category)
        }
      })
    }

    // Add X axis (periods)
    const xAxis = d3.axisBottom(xScale)

    mainGroup.append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .attr('class', 'x-axis')
      .call(xAxis as any)
      .select('.domain')
      .remove()

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, lineWidth, showLabels, labelSize, showDots, dotSize, onLineClick, onLineHover])

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
