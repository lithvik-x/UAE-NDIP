'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { CHART_COLORS, SENTIMENT_COLORS, PLATFORM_COLORS } from '@/lib/visualization-themes/colors'

interface StreamgraphProps {
  data: Array<{
    date: Date | string
    [key: string]: number | Date | string
  }>
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: string[]
  keys?: string[] // Categories to stack
  curve?: 'basis' | 'catmull-rom' | 'linear'
  showLabels?: boolean
  className?: string
}

/**
 * Streamgraph - Theme river for multi-source trends
 *
 * Displays flowing, organic layers that represent changing proportions
 * of categories over time. Ideal for showing narrative evolution.
 *
 * Use cases:
 * - Narrative topic evolution over time
 * - Platform share changes
 * - Sentiment flow patterns
 * - Content category distribution
 */
export function Streamgraph({
  data,
  width = 800,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40,
  colors = Object.values(CHART_COLORS),
  keys,
  curve = 'basis',
  showLabels = true,
  className = '',
}: StreamgraphProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Parse dates
    const parsedData = data.map(d => ({
      ...d,
      date: d.date instanceof Date ? d.date : new Date(d.date),
    }))

    // Auto-detect keys if not provided
    const stackKeys = keys || Object.keys(parsedData[0]).filter(k => k !== 'date')

    // Set up scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(parsedData, d => d.date) as [Date, Date])
      .range([0, innerWidth])

    // Create stack
    const stack = d3.stack()
      .keys(stackKeys)
      .offset(d3.stackOffsetWiggle)

    const stackedData = stack(parsedData as any)

    // Set up area generator with curve
    const curveFn = {
      basis: d3.curveBasis,
      'catmull-rom': d3.curveCatmullRom,
      linear: d3.curveLinear,
    }[curve] || d3.curveBasis

    const area = d3.area<any>()
      .x(d => xScale((d.data as any).date))
      .y0(d => yScale(d[0]))
      .y1(d => yScale(d[1]))
      .curve(curveFn)

    const yScale = d3.scaleLinear()
      .domain([
        d3.min(stackedData, layer => d3.min(layer, d => d[0])) || 0,
        d3.max(stackedData, layer => d3.max(layer, d => d[1])) || 1
      ])
      .range([innerHeight, 0])

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw streams
    mainGroup.selectAll('path')
      .data(stackedData)
      .join('path')
      .attr('d', area)
      .attr('fill', (d, i) => colors[i % colors.length])
      .attr('opacity', 0.8)
      .attr('class', 'stream-layer')
      .style('transition', 'opacity 0.2s')
      .on('mouseover', function() {
        d3.select(this).attr('opacity', 1)
      })
      .on('mouseout', function() {
        d3.select(this).attr('opacity', 0.8)
      })

    // Add labels at the end of streams
    if (showLabels) {
      mainGroup.selectAll('text')
        .data(stackedData)
        .join('text')
        .attr('x', innerWidth - 5)
        .attr('y', d => {
          const lastPoint = d[d.length - 1]
          return yScale((lastPoint[0] + lastPoint[1]) / 2)
        })
        .attr('text-anchor', 'end')
        .attr('alignment-baseline', 'middle')
        .attr('fill', 'white')
        .attr('font-size', '11px')
        .attr('font-weight', '500')
        .attr('class', 'stream-label')
        .text(d => d.key)
    }

    // Add X axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(width / 100)
      .tickSizeOuter(0)

    mainGroup.append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .attr('class', 'x-axis')
      .call(xAxis)
      .select('.domain')
      .remove()

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, keys, curve, showLabels])

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
