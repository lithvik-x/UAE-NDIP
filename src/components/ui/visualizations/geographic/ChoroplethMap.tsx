'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { PERFORMANCE_COLORS, RISK_COLORS, GEOGRAPHIC_COLORS } from '@/lib/visualization-themes/colors'

interface ChoroplethDataPoint {
  region: string
  value: number
  code?: string
}

interface ChoroplethMapProps {
  data: ChoroplethDataPoint[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colorScale?: 'performance' | 'risk' | 'sequential' | 'diverging'
  colors?: string[]
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  projection?: 'mercator' | 'natural-earth'
  className?: string
  onRegionClick?: (region: ChoroplethDataPoint) => void
  onRegionHover?: (region: ChoroplethDataPoint | null) => void
}

/**
 * ChoroplethMap - Geographic heat map
 *
 * Regions colored by value intensity. Shows spatial patterns and
 * geographic distribution of metrics.
 *
 * Use cases:
 * - UAE regional engagement map
 * - Global reach visualization
 * - City-wise sentiment distribution
 * - Geographic performance analysis
 */
export function ChoroplethMap({
  data,
  width = 800,
  height = 500,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 60,
  marginLeft = 20,
  colorScale = 'sequential',
  colors,
  showLabels = true,
  labelSize = 11,
  showValues = true,
  className = '',
  onRegionClick,
  onRegionHover,
}: ChoroplethMapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  // Simplified UAE regions geo-coordinates
  const uaeRegions = [
    { name: 'abu-dhabi', path: 'M 150 200 L 250 180 L 300 250 L 200 350 L 100 300 Z', center: { x: 200, y: 260 } },
    { name: 'dubai', path: 'M 320 280 L 420 260 L 450 320 L 350 360 Z', center: { x: 385, y: 305 } },
    { name: 'sharjah', path: 'M 350 370 L 450 340 L 480 400 L 380 430 Z', center: { x: 415, y: 385 } },
    { name: 'ajman', path: 'M 360 440 L 420 420 L 440 470 L 380 490 Z', center: { x: 400, y: 460 } },
    { name: 'umm-al-quwain', path: 'M 390 500 L 440 480 L 460 530 L 410 550 Z', center: { x: 425, y: 515 } },
    { name: 'ras-al-khaimah', path: 'M 420 560 L 520 540 L 550 620 L 450 650 Z', center: { x: 485, y: 592 } },
    { name: 'fujairah', path: 'M 490 400 L 600 380 L 650 450 L 540 480 Z', center: { x: 570, y: 427 } },
  ]

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Create data map
    const dataMap = new Map(data.map(d => [d.region, d]))

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

    // Scale map to fit
    const mapWidth = 650
    const mapHeight = 700
    const scale = Math.min(innerWidth / mapWidth, innerHeight / mapHeight) * 0.9

    // Draw regions
    const regions = mainGroup.selectAll('.region')
      .data(uaeRegions)
      .join('g')
      .attr('class', 'region')
      .attr('transform', `scale(${scale})`)
      .style('cursor', onRegionClick ? 'pointer' : 'default')

    regions.each(function(region) {
      const group = d3.select(this)
      const dataPoint = dataMap.get(region.name)
      const value = dataPoint?.value || 0

      // Draw path
      group.append('path')
        .attr('d', region.path)
        .attr('fill', dataPoint ? getColor(value) : '#f1f5f9')
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .attr('opacity', 0.85)
        .attr('class', 'region-path')
        .style('transition', 'opacity 0.2s')
        .on('mouseover', function() {
          d3.select(this).attr('opacity', 1)
          setHoveredRegion(region.name)
          onRegionHover?.(dataPoint || null)
        })
        .on('mouseout', function() {
          d3.select(this).attr('opacity', 0.85)
          setHoveredRegion(null)
          onRegionHover?.(null)
        })
        .on('click', () => {
          if (dataPoint) {
            onRegionClick?.(dataPoint)
          }
        })

      // Draw labels
      if (showLabels) {
        group.append('text')
          .attr('x', region.center.x)
          .attr('y', region.center.y)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', '#334155')
          .attr('text-shadow', '0 1px 2px rgba(255,255,255,0.8)')
          .text(region.name.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()))
      }

      // Draw values
      if (showValues && dataPoint) {
        group.append('text')
          .attr('x', region.center.x)
          .attr('y', region.center.y + 14)
          .attr('text-anchor', 'middle')
          .attr('font-size', `${labelSize - 1}px`)
          .attr('font-weight', '500')
          .attr('fill', '#334155')
          .attr('text-shadow', '0 1px 2px rgba(255,255,255,0.8)')
          .text(d3.format(',.0f')(value))
      }
    })

    // Add legend
    const legendGroup = svg.append('g')
      .attr('transform', `translate(${width - marginRight - 120}, ${marginTop + 20})`)

    const legendHeight = 150
    const legendWidth = 15

    const legendGradient = svg.append('defs')
      .append('linearGradient')
      .attr('id', 'legend-gradient')
      .attr('x1', '0%')
      .attr('y1', '100%')
      .attr('x2', '0%')
      .attr('y2', '0%')

    colorScheme.forEach((color, i) => {
      legendGradient.append('stop')
        .attr('offset', `${(i / (colorScheme.length - 1)) * 100}%`)
        .attr('stop-color', color)
    })

    legendGroup.append('rect')
      .attr('width', legendWidth)
      .attr('height', legendHeight)
      .attr('fill', 'url(#legend-gradient)')
      .attr('rx', 3)

    legendGroup.append('text')
      .attr('x', legendWidth + 8)
      .attr('y', 0)
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#64748b')
      .text(d3.format(',.0f')(maxValue))

    legendGroup.append('text')
      .attr('x', legendWidth + 8)
      .attr('y', legendHeight)
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#64748b')
      .text(d3.format(',.0f')(minValue))

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colorScale, colors, showLabels, labelSize, showValues, onRegionClick, onRegionHover])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('choropleth-map', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
