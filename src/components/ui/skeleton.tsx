'use client'

import React from 'react'
import { cn } from '@/lib/utils'

/**
 * LITHVIK NEXUS - Premium Skeleton Components
 * World-class loading states for a premium experience
 *
 * @module Skeleton
 * @description Ultra-premium skeleton loading components with dark mode support,
 *              ARIA accessibility, and smooth animations using the LITHVIK NEXUS design system.
 *              Features premium gold, platinum, and navy colors for VVVVIP-level experience.
 *
 * @example
 * ```tsx
 * <Skeleton variant="metric" />
 * <MetricCardSkeleton />
 * <PageLoader message="Loading your dashboard..." />
 * ```
 */

/**
 * Base skeleton element with multiple variants
 *
 * @component Skeleton
 * @description A customizable skeleton loader with multiple variants for different use cases.
 *              Supports dark mode with premium color transitions and smooth animations.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {'default' | 'metric' | 'card' | 'chart' | 'table' | 'text' | 'circle' | 'avatar'} [props.variant='default'] - Visual style variant
 * @param {number} [props.count=1] - Number of skeleton elements to render
 * @param {React.HTMLAttributes<HTMLDivElement>} props.props - Additional HTML attributes
 *
 * @example
 * ```tsx
 * <Skeleton variant="metric" count={3} />
 * <Skeleton variant="text" className="h-6 w-48" />
 * <Skeleton variant="circle" className="h-12 w-12" />
 * ```
 */
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style variant for the skeleton
   * - default: Standard line skeleton
   * - metric: Taller skeleton for metric values
   * - card: Full card height skeleton
   * - chart: Chart placeholder height
   * - table: Table row height
   * - text: Text line height
   * - circle: Circular skeleton for avatars
   * - avatar: Avatar-sized circular skeleton
   */
  variant?: 'default' | 'metric' | 'card' | 'chart' | 'table' | 'text' | 'circle' | 'avatar'
  /** Number of skeleton elements to render */
  count?: number
}

export function Skeleton({
  className,
  variant = 'default',
  count = 1,
  ...props
}: SkeletonProps) {
  const skeletons = Array.from({ length: count })

  return (
    <>
      {skeletons.map((_, i) => (
        <div
          key={i}
          className={cn(
            // Base animation using premium shimmer
            'skeleton animate-shimmer-premium rounded-md transition-colors duration-300',
            // Light mode backgrounds
            'bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-100',
            // Dark mode backgrounds
            'dark:from-navy-950 dark:via-navy-900 dark:to-navy-950',
            // Variant-specific styles
            variant === 'default' && 'h-4 w-full',
            variant === 'metric' && 'h-20 w-full rounded-lg',
            variant === 'card' && 'h-40 w-full rounded-xl',
            variant === 'chart' && 'h-64 w-full rounded-xl',
            variant === 'table' && 'h-12 w-full rounded-md',
            variant === 'text' && 'h-6 w-3/4',
            variant === 'circle' && 'h-12 w-12 rounded-full',
            variant === 'avatar' && 'h-10 w-10 rounded-full',
            className
          )}
          role="status"
          aria-label="Loading content"
          aria-busy="true"
          {...props}
        />
      ))}
    </>
  )
}

/**
 * Metric Card Skeleton - For stat cards and dashboard metrics
 *
 * @component MetricCardSkeleton
 * @description Premium skeleton loader for metric/stat cards with glassmorphism styling.
 *              Includes label, value, and trend placeholder elements.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * ```tsx
 * <MetricCardSkeleton />
 * <MetricCardSkeleton className="col-span-2" />
 * ```
 */
export interface MetricCardSkeletonProps {
  /** Additional CSS classes */
  className?: string
}

export function MetricCardSkeleton({ className }: MetricCardSkeletonProps) {
  return (
    <div
      className={cn(
        'glass-premium dark:glass-premium-dark rounded-2xl p-6 space-y-3',
        'transition-all duration-300',
        className
      )}
      role="status"
      aria-label="Loading metric card"
      aria-busy="true"
    >
      <div className="flex items-center justify-between">
        <Skeleton variant="text" className="h-5 w-24" />
        <div className="h-6 w-16 rounded bg-gold-200/50 dark:bg-gold-900/30 animate-pulse" />
      </div>
      <Skeleton variant="metric" className="h-8" />
      <Skeleton variant="text" className="h-3 w-32" />
    </div>
  )
}

/**
 * Glass Card Skeleton - For content cards with rich text
 *
 * @component GlassCardSkeleton
 * @description Premium skeleton for content cards with heading and body text placeholders.
 *              Features glassmorphism styling with premium design system colors.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * ```tsx
 * <GlassCardSkeleton />
 * ```
 */
export interface GlassCardSkeletonProps {
  /** Additional CSS classes */
  className?: string
}

export function GlassCardSkeleton({ className }: GlassCardSkeletonProps) {
  return (
    <div
      className={cn(
        'glass-premium dark:glass-premium-dark rounded-2xl p-6 space-y-4',
        'transition-all duration-300',
        className
      )}
      role="status"
      aria-label="Loading content card"
      aria-busy="true"
    >
      <div className="space-y-2">
        <Skeleton variant="text" className="h-5 w-3/4" />
        <Skeleton variant="text" className="h-4 w-1/2" />
      </div>
      <div className="space-y-2">
        <Skeleton variant="default" className="h-4 w-full" />
        <Skeleton variant="default" className="h-4 w-5/6" />
        <Skeleton variant="default" className="h-4 w-4/6" />
      </div>
    </div>
  )
}

/**
 * Chart Skeleton - For chart and graph placeholders
 *
 * @component ChartSkeleton
 * @description Premium skeleton for chart components with customizable height.
 *              Includes header and legend placeholders.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.height='h-64'] - Height of the chart area
 *
 * @example
 * ```tsx
 * <ChartSkeleton />
 * <ChartSkeleton height="h-96" />
 * ```
 */
export interface ChartSkeletonProps {
  /** Additional CSS classes */
  className?: string
  /** Height of the chart placeholder */
  height?: string
}

export function ChartSkeleton({ className, height = 'h-64' }: ChartSkeletonProps) {
  return (
    <div
      className={cn(
        'glass-premium dark:glass-premium-dark rounded-2xl p-6 space-y-4',
        'transition-all duration-300',
        className
      )}
      role="status"
      aria-label="Loading chart"
      aria-busy="true"
    >
      <div className="flex items-center justify-between">
        <Skeleton variant="text" className="h-5 w-32" />
        <Skeleton variant="text" className="h-4 w-20" />
      </div>
      <div className={cn(
        'w-full rounded-lg bg-gradient-to-br from-platinum-50 to-platinum-100',
        'dark:from-navy-950 dark:to-navy-900',
        'animate-pulse',
        height
      )} />
      <div className="flex items-center justify-center gap-6">
        <Skeleton variant="text" className="h-3 w-16" />
        <Skeleton variant="text" className="h-3 w-16" />
        <Skeleton variant="text" className="h-3 w-16" />
      </div>
    </div>
  )
}

/**
 * Table Skeleton - For data tables with customizable rows and columns
 *
 * @component TableSkeleton
 * @description Premium skeleton for data tables with customizable dimensions.
 *              Includes header row and data row placeholders.
 *
 * @param {Object} props - Component props
 * @param {number} [props.rows=5] - Number of data rows to display
 * @param {number} [props.columns=4] - Number of columns
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * ```tsx
 * <TableSkeleton rows={10} columns={6} />
 * ```
 */
export interface TableSkeletonProps {
  /** Number of data rows */
  rows?: number
  /** Number of columns */
  columns?: number
  /** Additional CSS classes */
  className?: string
}

export function TableSkeleton({ rows = 5, columns = 4, className }: TableSkeletonProps) {
  return (
    <div
      className={cn(
        'glass-premium dark:glass-premium-dark rounded-2xl p-6',
        'transition-all duration-300',
        className
      )}
      role="status"
      aria-label="Loading table"
      aria-busy="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Skeleton variant="text" className="h-5 w-32" />
        <Skeleton variant="text" className="h-4 w-24" />
      </div>

      {/* Header Row */}
      <div className="grid gap-4 mb-2" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={`header-${i}`} variant="text" className="h-4" />
        ))}
      </div>

      {/* Data Rows */}
      <div className="space-y-2">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Skeleton key={`cell-${rowIndex}-${colIndex}`} variant="default" className="h-10" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Dashboard Grid Skeleton - For main dashboard layout with metric cards
 *
 * @component DashboardGridSkeleton
 * @description Premium skeleton for the main dashboard grid layout.
 *              Displays 4 metric cards in a responsive grid.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * ```tsx
 * <DashboardGridSkeleton />
 * ```
 */
export interface DashboardGridSkeletonProps {
  /** Additional CSS classes */
  className?: string
}

export function DashboardGridSkeleton({ className }: DashboardGridSkeletonProps) {
  return (
    <div
      className={cn('grid gap-6 lg:grid-cols-4', className)}
      role="status"
      aria-label="Loading dashboard"
      aria-busy="true"
    >
      {/* Metric Cards */}
      {Array.from({ length: 4 }).map((_, i) => (
        <MetricCardSkeleton key={`metric-${i}`} />
      ))}
    </div>
  )
}

/**
 * Page Loader - Full page loading state with premium spinner
 *
 * @component PageLoader
 * @description Full-page loading component with animated gold spinner and message.
 *              Features premium design with gold accent colors.
 *
 * @param {Object} props - Component props
 * @param {string} [props.message='Loading...'] - Loading message to display
 *
 * @example
 * ```tsx
 * <PageLoader message="Loading your dashboard..." />
 * ```
 */
export interface PageLoaderProps {
  /** Loading message to display */
  message?: string
}

export function PageLoader({ message = 'Loading...' }: PageLoaderProps) {
  return (
    <div
      className="flex min-h-[400px] flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={message}
    >
      <div className="relative">
        {/* Main spinner */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-platinum-200 dark:border-navy-800 border-t-gold-500 dark:border-t-gold-400" />
        {/* Pulse effect ring */}
        <div className="absolute inset-0 h-16 w-16 animate-ping rounded-full border-4 border-gold-400/30 dark:border-gold-500/20" />
      </div>
      <p className="text-sm font-medium text-platinum-500-600 dark:text-platinum-500-400 animate-pulse">
        {message}
      </p>
    </div>
  )
}

/**
 * Inline Loading Spinner - Small loading indicator for inline use
 *
 * @component LoadingSpinner
 * @description Compact inline loading spinner with gold accent.
 *              Perfect for buttons, inline actions, and small spaces.
 *
 * @param {Object} props - Component props
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Size variant
 * @param {string} [props.className] - Additional CSS classes
 *
 * @example
 * ```tsx
 * <LoadingSpinner size="sm" />
 * <LoadingSpinner size="lg" className="mx-auto" />
 * ```
 */
export interface LoadingSpinnerProps {
  /** Size of the spinner */
  size?: 'sm' | 'md' | 'lg'
  /** Additional CSS classes */
  className?: string
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-3',
  }

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-platinum-200 dark:border-navy-800 border-t-gold-500 dark:border-t-gold-400',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
      aria-busy="true"
    />
  )
}

/**
 * Loading Overlay - Overlay for sections with loading state
 *
 * @component LoadingOverlay
 * @description Semi-transparent overlay that covers content while loading.
 *              Features glassmorphism effect with backdrop blur.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isLoading - Whether to show the loading overlay
 * @param {React.ReactNode} props.children - Content to be overlaid
 * @param {string} [props.message] - Optional loading message
 *
 * @example
 * ```tsx
 * <LoadingOverlay isLoading={isLoading} message="Processing...">
 *   <YourContent />
 * </LoadingOverlay>
 * ```
 */
export interface LoadingOverlayProps {
  /** Whether to show the loading overlay */
  isLoading: boolean
  /** Content to be overlaid */
  children: React.ReactNode
  /** Optional loading message */
  message?: string
}

export function LoadingOverlay({ isLoading, children, message }: LoadingOverlayProps) {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/80 dark:bg-navy-950/80 backdrop-blur-sm transition-opacity duration-300"
          role="status"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="flex flex-col items-center gap-2">
            <LoadingSpinner size="lg" />
            {message && (
              <p className="text-sm text-platinum-500-600 dark:text-platinum-500-400">
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Suspense Boundary Wrapper - For React Suspense boundaries
 *
 * @component SuspenseFallback
 * @description Pre-configured fallback components for React Suspense boundaries.
 *              Supports dashboard, page, and card layouts.
 *
 * @param {Object} props - Component props
 * @param {'dashboard' | 'page' | 'card'} [props.type='dashboard'] - Type of fallback to display
 *
 * @example
 * ```tsx
 * <Suspense fallback={<SuspenseFallback type="dashboard" />}>
 *   <YourComponent />
 * </Suspense>
 * ```
 */
export interface SuspenseFallbackProps {
  /** Type of fallback layout */
  type?: 'dashboard' | 'page' | 'card'
}

export function SuspenseFallback({ type = 'dashboard' }: SuspenseFallbackProps) {
  if (type === 'dashboard') {
    return (
      <div className="space-y-6 p-6">
        <DashboardGridSkeleton />
        <div className="grid gap-6 lg:grid-cols-2">
          <ChartSkeleton />
          <ChartSkeleton />
        </div>
      </div>
    )
  }

  if (type === 'page') {
    return <PageLoader />
  }

  return <GlassCardSkeleton />
}
