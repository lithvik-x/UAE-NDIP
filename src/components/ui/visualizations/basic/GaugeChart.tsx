'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { PERFORMANCE_COLORS } from '@/lib/visualization-themes/colors'

interface GaugeDataPoint {
  label: string
  value: number
  min?: number
  max?: number
  target?: number
  thresholds?: Array<{ value: number; color: string; label: string }>
  unit?: string
}

interface GaugeChartProps {
  data: GaugeDataPoint
  width?: number
  height?: number
  innerRadius?: number
  outerRadius?: number
  startAngle?: number
  endAngle?: number
  showValue?: boolean
  showLabel?: boolean
  showThresholds?: boolean
  animationDuration?: number
  className?: string
}

/**
 * GaugeChart - Dial and semi-circle gauges for KPI displays
 *
 * Semi-circular or circular gauge showing current value within a range.
 * Ideal for dashboard KPI cards and status indicators.
 *
 * Use cases:
 * - Overall platform health score
 * - Engagement rate display
 * - Sentiment score gauge
 * - Performance metrics
 */
export function GaugeChart({
  data,
  width = 300,
  height = 180,
  innerRadius = 60,
  outerRadius = 80,
  startAngle = -Math.PI / 2,
  endAngle = Math.PI / 2,
  showValue = true,
  showLabel = true,
  showThresholds = true,
  animationDuration = 750,
  className = '',
}: GaugeChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const centerX = width / 2
    const centerY = height - 30
    const min = data.min ?? 0
    const max = data.max ?? 100
    const range = max - min
    const normalizedValue = Math.max(min, Math.min(max, data.value))

    // Default thresholds if not provided
    const thresholds = data.thresholds ?? [
      { value: min + range * 0.25, color: PERFORMANCE_COLORS.critical, label: 'Critical' },
      { value: min + range * 0.5, color: PERFORMANCE_COLORS.poor, label: 'Poor' },
      { value: min + range * 0.75, color: PERFORMANCE_COLORS.satisfactory, label: 'Satisfactory' },
      { value: max, color: PERFORMANCE_COLORS.excellent, label: 'Excellent' },
    ]

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`)

    // Create arc generator
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(startAngle)
      .endAngle(endAngle)

    // Draw background arc
    mainGroup.append('path')
      .attr('d', arc as any)
      .attr('fill', '#e2e8f0')
      .attr('class', 'gauge-background')

    // Draw threshold arcs
    if (showThresholds) {
      let prevThreshold = min
      thresholds.forEach((threshold, i) => {
        const thresholdStartAngle = startAngle + ((prevThreshold - min) / range) * (endAngle - startAngle)
        const thresholdEndAngle = startAngle + ((threshold.value - min) / range) * (endAngle - startAngle)

        const thresholdArc = d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius)
          .startAngle(thresholdStartAngle)
          .endAngle(thresholdEndAngle)

        mainGroup.append('path')
          .attr('d', thresholdArc as any)
          .attr('fill', threshold.color)
          .attr('opacity', 0.7)
          .attr('class', `gauge-threshold-${i}`)

        prevThreshold = threshold.value
      })
    }

    // Calculate value angle
    const valueAngle = startAngle + ((normalizedValue - min) / range) * (endAngle - startAngle)

    // Draw value arc with animation
    const valueArc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(startAngle)
      .endAngle(valueAngle)

    const valuePath = mainGroup.append('path')
      .attr('d', arc as any) // Start at 0
      .attr('fill', () => {
        // Determine color based on thresholds
        const matchedThreshold = [...thresholds].reverse().find(t => normalizedValue >= t.value)
        return matchedThreshold?.color ?? '#0ea5e9'
      })
      .attr('class', 'gauge-value')

    // Animate value arc
    valuePath.transition()
      .duration(animationDuration)
      .ease(d3.easeCubicOut)
      .attrTween('d', () => (t: number) => {
        const currentAngle = startAngle + ((valueAngle - startAngle) * t)
        const interpolator = d3.interpolate(startAngle, currentAngle)
        return (d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius)
          .startAngle(startAngle)
          .endAngle(interpolator(t)) as any)(null as any)
      })

    // Add needle
    const needleLength = outerRadius + 10
    const needleX = Math.cos(valueAngle) * needleLength
    const needleY = Math.sin(valueAngle) * needleLength

    const needleGroup = mainGroup.append('g')
      .attr('class', 'gauge-needle')

    needleGroup.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', 0)
      .attr('y2', -needleLength)
      .attr('stroke', '#334155')
      .attr('stroke-width', 2)
      .attr('transform', `rotate(0)`)
      .transition()
      .duration(animationDuration)
      .ease(d3.easeCubicOut)
      .attr('transform', `rotate(${(valueAngle * 180) / Math.PI})`)

    needleGroup.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 5)
      .attr('fill', '#334155')

    // Add value text
    if (showValue) {
      const valueText = mainGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', 20)
        .attr('class', 'gauge-value-text')

      valueText.append('tspan')
        .attr('class', 'value')
        .attr('x', 0)
        .attr('dy', '0')
        .attr('font-size', '36px')
        .attr('font-weight', 'bold')
        .attr('fill', '#334155')
        .text(d3.format(',.1f')(min))

      valueText.append('tspan')
        .attr('class', 'unit')
        .attr('x', 0)
        .attr('dy', '25')
        .attr('font-size', '14px')
        .attr('fill', '#64748b')
        .text(data.unit ?? '')

      // Animate value text
      valueText.select('.value')
        .transition()
        .duration(animationDuration)
        .ease(d3.easeCubicOut)
        .tween('text', function() {
          const interpolator = d3.interpolateNumber(min, normalizedValue)
          return (t: number) => {
            d3.select(this).text(d3.format(',.1f')(interpolator(t)))
          }
        })
    }

    // Add label
    if (showLabel) {
      mainGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', showValue ? 70 : 30)
        .attr('font-size', '14px')
        .attr('font-weight', '500')
        .attr('fill', '#64748b')
        .text(data.label)
    }

  }, [data, width, height, innerRadius, outerRadius, startAngle, endAngle, showValue, showLabel, showThresholds, animationDuration])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('gauge-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
