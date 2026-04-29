'use client'

import * as React from 'react'
import { useMemo } from 'react'
import { cn } from '@/lib/utils'

interface BulletItem {
  title: string
  value: number
  target?: number
  ranges?: Array<{ value: number; color: string }>
  unit?: string
  subtitle?: string
}

interface BulletGraphProps {
  data: BulletItem[]
  width?: number
  height?: number
  itemHeight?: number
  itemGap?: number
  maxWidth?: number // Max width of bullet bars (px)
  orientation?: 'horizontal' | 'vertical'
  showScale?: boolean
  scaleSteps?: number
  className?: string
}

/**
 * BulletGraph - Performance vs target visualization
 *
 * Linear gauge showing actual value, target, and qualitative ranges
 * (poor, satisfactory, good, excellent). Ideal for KPI dashboards.
 *
 * Use cases:
 * - Executive Bridge KPI cards
 * - Performance target tracking
 * - Goal progress visualization
 * - Quality metric display
 */
export function BulletGraph({
  data,
  width = 600,
  height,
  itemHeight = 40,
  itemGap = 30,
  maxWidth = 400,
  orientation = 'horizontal',
  showScale = true,
  scaleSteps = 5,
  className = '',
}: BulletGraphProps) {
  const effectiveHeight = height ?? data.length * (itemHeight + itemGap)

  // Calculate max value across all items
  const globalMax = useMemo(() => {
    const allValues = data.flatMap(d => [
      d.value,
      d.target ?? 0,
      ...(d.ranges?.map(r => r.value) ?? []),
    ])
    return Math.max(...allValues, 1)
  }, [data])

  return (
    <svg
      width={width}
      height={effectiveHeight}
      className={cn('bullet-graph', className)}
      role="img"
      aria-label="Bullet graph showing performance metrics"
    >
      <g transform={`translate(${orientation === 'horizontal' ? 120 : 20}, ${orientation === 'horizontal' ? 0 : 20})`}>
        {data.map((item, index) => {
          const y = index * (itemHeight + itemGap)
          const max = item.ranges?.[item.ranges.length - 1]?.value ?? globalMax

          return (
            <g key={item.title} transform={orientation === 'horizontal' ? `translate(0, ${y})` : `translate(${index * (maxWidth / data.length + 20)}, 0)`}>
              {/* Title */}
              <text
                x={orientation === 'horizontal' ? -10 : maxWidth / 2}
                y={orientation === 'horizontal' ? itemHeight / 2 : -10}
                textAnchor={orientation === 'horizontal' ? 'end' : 'middle'}
                className="fill-slate-700 text-sm font-semibold"
                dominantBaseline="middle"
              >
                {item.title}
              </text>

              {item.subtitle && (
                <text
                  x={orientation === 'horizontal' ? -10 : maxWidth / 2}
                  y={orientation === 'horizontal' ? itemHeight / 2 + 14 : -24}
                  textAnchor={orientation === 'horizontal' ? 'end' : 'middle'}
                  className="fill-slate-500 text-xs"
                  dominantBaseline="middle"
                >
                  {item.subtitle}
                </text>
              )}

              {/* Background ranges */}
              <g>
                {item.ranges?.map((range, i) => {
                  const prevValue = i > 0 ? item.ranges![i - 1].value : 0
                  const rangeWidth = ((range.value - prevValue) / max) * maxWidth
                  const xOffset = (prevValue / max) * maxWidth

                  return (
                    <rect
                      key={i}
                      x={orientation === 'horizontal' ? xOffset : 0}
                      y={orientation === 'horizontal' ? 0 : y - (i + 1) * (itemHeight / 3)}
                      width={orientation === 'horizontal' ? rangeWidth : itemHeight}
                      height={orientation === 'horizontal' ? itemHeight : rangeWidth}
                      fill={range.color}
                      opacity={0.3}
                      className="bullet-range"
                    />
                  )
                })}
              </g>

              {/* Target marker */}
              {item.target !== undefined && (
                <line
                  x1={orientation === 'horizontal' ? (item.target / max) * maxWidth : itemHeight / 2}
                  y1={orientation === 'horizontal' ? 0 : (item.target / max) * maxWidth}
                  x2={orientation === 'horizontal' ? (item.target / max) * maxWidth : itemHeight}
                  y2={orientation === 'horizontal' ? itemHeight : (item.target / max) * maxWidth}
                  stroke="#334155"
                  strokeWidth={2}
                  className="bullet-target"
                />
              )}

              {/* Actual value bar */}
              <rect
                x={0}
                y={orientation === 'horizontal' ? itemHeight * 0.35 : 0}
                width={orientation === 'horizontal' ? (item.value / max) * maxWidth : itemHeight * 0.3}
                height={orientation === 'horizontal' ? itemHeight * 0.3 : (item.value / max) * maxWidth}
                fill="#0ea5e9"
                className="bullet-value"
                rx={2}
              />

              {/* Value label */}
              <text
                x={orientation === 'horizontal' ? (item.value / max) * maxWidth + 8 : itemHeight / 2}
                y={orientation === 'horizontal' ? itemHeight / 2 : (item.value / max) * maxWidth - 8}
                textAnchor={orientation === 'horizontal' ? 'start' : 'middle'}
                className="fill-slate-700 text-sm font-bold"
                dominantBaseline="middle"
              >
                {item.value.toLocaleString()}{item.unit}
              </text>

              {/* Scale */}
              {showScale && index === 0 && (
                <g transform={orientation === 'horizontal' ? `translate(0, ${itemHeight + 15})` : `translate(-40, 0)`}>
                  {Array.from({ length: scaleSteps + 1 }).map((_, i) => {
                    const value = (max / scaleSteps) * i
                    const x = orientation === 'horizontal' ? (value / max) * maxWidth : 0
                    const y = orientation === 'horizontal' ? 0 : (value / max) * maxWidth

                    return (
                      <g key={i}>
                        <line
                          x1={orientation === 'horizontal' ? x : -5}
                          y1={orientation === 'horizontal' ? 0 : y}
                          x2={orientation === 'horizontal' ? x : 0}
                          y2={orientation === 'horizontal' ? 5 : y}
                          stroke="#94a3b8"
                          strokeWidth={1}
                        />
                        <text
                          x={orientation === 'horizontal' ? x : -8}
                          y={orientation === 'horizontal' ? 15 : y}
                          textAnchor={orientation === 'horizontal' ? 'middle' : 'end'}
                          className="fill-slate-500 text-xs"
                          dominantBaseline="middle"
                        >
                          {d3.format('.0f')(value)}
                        </text>
                      </g>
                    )
                  })}
                </g>
              )}
            </g>
          )
        })}
      </g>
    </svg>
  )
}

// Import d3 format function
const d3 = {
  format: (specifier: string) => (value: number) => {
    if (specifier === '.0f') {
      return Math.round(value).toString()
    }
    return value.toString()
  },
}
