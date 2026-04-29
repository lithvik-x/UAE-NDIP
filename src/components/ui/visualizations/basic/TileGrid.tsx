'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { PERFORMANCE_COLORS, RISK_COLORS } from '@/lib/visualization-themes/colors'

interface TileGridDataPoint {
  label: string
  value: number
  unit?: string
  target?: number
  status?: 'success' | 'warning' | 'danger' | 'info'
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: number
  icon?: React.ReactNode
}

interface TileGridProps {
  data: TileGridDataPoint[]
  columns?: number
  tileSize?: 'sm' | 'md' | 'lg' | 'xl'
  showValues?: boolean
  showTargets?: boolean
  showTrends?: boolean
  colorScheme?: 'performance' | 'risk' | 'categorical'
  className?: string
}

/**
 * TileGrid - Grid of metric tiles
 *
 * Display multiple KPIs in a grid format. Each tile shows value,
 * optional target, trend indicator, and status color.
 *
 * Use cases:
 * - Executive KPI dashboard
 * - Metric card collections
 * - Score summary displays
 * - Quick status overview
 */
export function TileGrid({
  data,
  columns = 4,
  tileSize = 'md',
  showValues = true,
  showTargets = false,
  showTrends = true,
  colorScheme = 'performance',
  className = '',
}: TileGridProps) {
  const getSizeClasses = () => {
    switch (tileSize) {
      case 'sm': return 'h-24 p-3'
      case 'md': return 'h-32 p-4'
      case 'lg': return 'h-40 p-5'
      case 'xl': return 'h-48 p-6'
      default: return 'h-32 p-4'
    }
  }

  const getFontSize = () => {
    switch (tileSize) {
      case 'sm': return 'text-lg'
      case 'md': return 'text-2xl'
      case 'lg': return 'text-3xl'
      case 'xl': return 'text-4xl'
      default: return 'text-2xl'
    }
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'success': return 'bg-green-500'
      case 'warning': return 'bg-amber-500'
      case 'danger': return 'bg-red-500'
      case 'info': return 'bg-sky-500'
      default: return 'bg-slate-500'
    }
  }

  const getValueColor = (point: TileGridDataPoint) => {
    if (point.status) return getStatusColor(point.status).replace('bg-', 'text-')

    if (colorScheme === 'performance') {
      if (point.target) {
        const ratio = point.value / point.target
        if (ratio >= 1) return 'text-emerald-600'
        if (ratio >= 0.75) return 'text-green-600'
        if (ratio >= 0.5) return 'text-lime-600'
        if (ratio >= 0.25) return 'text-yellow-600'
        return 'text-orange-600'
      }
    } else if (colorScheme === 'risk') {
      const riskLevel = point.value
      if (riskLevel >= 80) return 'text-red-600'
      if (riskLevel >= 60) return 'text-orange-600'
      if (riskLevel >= 40) return 'text-yellow-600'
      if (riskLevel >= 20) return 'text-lime-600'
      return 'text-green-600'
    }

    return 'text-slate-700'
  }

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up': return '↑'
      case 'down': return '↓'
      case 'neutral': return '→'
      default: return ''
    }
  }

  const getTrendColor = (trend?: string) => {
    switch (trend) {
      case 'up': return 'text-emerald-600'
      case 'down': return 'text-red-600'
      default: return 'text-slate-400'
    }
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: '1rem',
  }

  return (
    <div className={cn('tile-grid', className)} style={gridStyle}>
      {data.map((point, index) => (
        <div
          key={index}
          className={cn(
            'relative rounded-xl border bg-white shadow-sm transition-all hover:shadow-md',
            getSizeClasses()
          )}
        >
          {/* Status indicator bar */}
          {point.status && (
            <div className={cn('absolute top-0 left-0 right-0 h-1 rounded-t-xl', getStatusColor(point.status))} />
          )}

          {/* Label */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                {point.label}
              </p>

              {/* Value */}
              {showValues && (
                <p className={cn('font-bold mt-1', getFontSize(), getValueColor(point))}>
                  {point.value.toLocaleString()}{point.unit}
                </p>
              )}

              {/* Target */}
              {showTargets && point.target && (
                <p className="text-xs text-slate-400 mt-1">
                  Target: {point.target.toLocaleString()}
                </p>
              )}
            </div>

            {/* Icon */}
            {point.icon && (
              <div className="text-slate-400">
                {point.icon}
              </div>
            )}
          </div>

          {/* Trend */}
          {showTrends && point.trend && (
            <div className="absolute bottom-0 right-0 flex items-center gap-1">
              <span className={cn('text-sm font-semibold', getTrendColor(point.trend))}>
                {getTrendIcon(point.trend)}
              </span>
              {point.trendValue !== undefined && (
                <span className={cn('text-xs font-medium', getTrendColor(point.trend))}>
                  {Math.abs(point.trendValue)}%
                </span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
