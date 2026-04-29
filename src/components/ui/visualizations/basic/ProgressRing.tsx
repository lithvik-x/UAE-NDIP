'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { PERFORMANCE_COLORS } from '@/lib/visualization-themes/colors'

interface ProgressRingProps {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  color?: string
  backgroundColor?: string
  showLabel?: boolean
  labelSize?: number
  showPercentage?: boolean
  animationDuration?: number
  className?: string
}

/**
 * ProgressRing - Circular progress indicator
 *
 * Ring that fills based on value/max ratio. Shows completion percentage.
 * Ideal for KPI cards, goal tracking, and progress displays.
 *
 * Use cases:
 * - KPI target completion
 * - Goal progress display
 * - Loading indicators
 * - Score circular gauges
 */
export function ProgressRing({
  value,
  max = 100,
  size = 120,
  strokeWidth = 10,
  color = PERFORMANCE_COLORS.excellent,
  backgroundColor = '#e2e8f0',
  showLabel = true,
  labelSize = 24,
  showPercentage = true,
  animationDuration = 750,
  className = '',
}: ProgressRingProps) {
  const normalizedValue = Math.max(0, Math.min(value, max))
  const percentage = (normalizedValue / max) * 100
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (normalizedValue / max) * circumference

  return (
    <div className={cn('progress-ring', className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
          style={{
            transition: `stroke-dashoffset ${animationDuration}ms ease-out`,
          }}
        />
      </svg>
      {showLabel && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ transform: 'rotate(0deg)' }}
        >
          <span
            className="font-bold"
            style={{
              fontSize: `${labelSize}px`,
              color: color,
            }}
          >
            {showPercentage ? `${Math.round(percentage)}%` : normalizedValue}
          </span>
        </div>
      )}
    </div>
  )
}
