'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

export interface HorizonChartProps {
  data: Array<{
    date: Date | string
    value: number
    category?: string
  }>
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: string[]
  bands?: number // Number of horizon bands (typically 3-5)
  normalize?: boolean // Whether to normalize values relative to baseline
  className?: string
}

/**
 * HorizonChart - Time-series density visualization
 *
 * Displays multiple time series as layered bands, where color intensity
 * represents magnitude. Ideal for comparing many time series simultaneously.
 *
 * Use cases:
 * - Daily engagement patterns across multiple platforms
 * - Hourly sentiment trends over weeks
 * - Topic velocity comparisons
 */
export function HorizonChart({
  data,
  width = 800,
  height = 200,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40,
  colors = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444'],
  bands = 4,
  normalize = true,
  className = '',
}: HorizonChartProps) {
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

    // Set up scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(parsedData, d => d.date) as [Date, Date])
      .range([0, innerWidth])

    const maxValue = d3.max(parsedData, d => d.value) || 1
    const bandHeight = innerHeight / bands

    // Create color scale for bands
    const colorScale = d3.scaleLinear()
      .domain([0, maxValue])
      .range([0, bands])

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Create horizon bands
    for (let band = 0; band < bands; band++) {
      const bandThreshold = (band + 1) * (maxValue / bands)

      const area = d3.area<any>()
        .x(d => xScale(d.date))
        .y0(innerHeight)
        .y1(d => {
          const relativeValue = d.value - band * (maxValue / bands)
          return Math.max(0, innerHeight - (relativeValue / (maxValue / bands)) * bandHeight)
        })
        .curve(d3.curveMonotoneX)

      const bandData = parsedData.filter(d => d.value > band * (maxValue / bands))

      if (bandData.length > 0) {
        mainGroup.append('path')
          .datum(bandData)
          .attr('d', area as any)
          .attr('fill', colors[band % colors.length])
          .attr('opacity', 0.7)
          .attr('class', 'horizon-band')
      }
    }

    // Add X axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(width / 80)
      .tickSizeOuter(0)

    mainGroup.append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .attr('class', 'x-axis')
      .call(xAxis)
      .select('.domain')
      .remove()

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, bands, normalize])

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
