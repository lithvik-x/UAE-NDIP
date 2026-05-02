import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

/**
 * @fileoverview Glass Panel Component System - Premium glassmorphism containers
 * @module components/ui/glass-panel
 * @description
 * A comprehensive glass panel component suite built on the LITHVIK NEXUS design system.
 * Features include:
 * - Multiple glass intensity levels (subtle, medium, strong, premium)
 * - Gradient overlays with configurable colors
 * - Hover effects with elevation
 * - Dark mode support
 * - Complete ARIA accessibility
 * - Header section with title, description, badge, and action
 * - Status card with trend indicators
 * @example
 * ```tsx
 * <GlassPanel
 *   title="Analytics"
 *   description="View your performance metrics"
 *   badge="New"
 *   action={<Button>Export</Button>}
 * >
 *   <YourContent />
 * </GlassPanel>
 * ```
 */

/**
 * GlassCardProps - Configuration for GlassCard
 */
export interface GlassCardProps {
  /** Child content */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Glass intensity level */
  intensity?: 'low' | 'medium' | 'high' | 'premium'
  /** Enables hover elevation effect */
  hover?: boolean
  /** Optional gradient overlay color */
  gradient?: 'red' | 'rose' | 'orange' | 'gold' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'denim' | 'indigo' | 'purple' | 'fuchsia'
  /** Optional click handler */
  onClick?: () => void
  /** Accessible label */
  ariaLabel?: string
  /** Padding variant */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Glass intensity class mapping
 */
const intensityClasses: Record<
  Required<GlassCardProps>['intensity'],
  string
> = {
  low: 'glass-subtle',
  medium: 'glass-medium',
  high: 'glass-strong',
  premium: 'glass-premium-premium',
}

/**
 * Padding class mapping
 */
const paddingClasses: Record<
  Required<GlassCardProps>['padding'],
  string
> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
}

/**
 * GlassCard - Basic glassmorphism card container
 * @description
 * A premium glass card with configurable intensity and optional hover effects.
 * Perfect for displaying content with depth and elegance.
 * @example
 * ```tsx
 * <GlassCard intensity="premium" hover padding="lg">
 *   <YourContent />
 * </GlassCard>
 * ```
 */
export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      className,
      intensity = 'medium',
      hover = false,
      gradient,
      onClick,
      ariaLabel,
      padding = 'md',
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'relative transition-all duration-300',
      intensityClasses[intensity],
      hover && 'hover:shadow-premium-lg hover:-translate-y-0.5 cursor-pointer',
      onClick && 'cursor-pointer',
      paddingClasses[padding],
      className
    )

    const gradientOverlay = gradient ? (
      <div
        className={cn(
          'absolute inset-0 opacity-10 pointer-events-none rounded-2xl',
          gradient === 'red' && 'bg-gradient-to-br from-red-400 to-red-600',
          gradient === 'rose' && 'bg-gradient-to-br from-rose-400 to-rose-600',
          gradient === 'orange' && 'bg-gradient-to-br from-orange-400 to-orange-600',
          gradient === 'gold' && 'bg-gradient-to-br from-gold-400 to-gold-600',
          gradient === 'lime' && 'bg-gradient-to-br from-lime-400 to-lime-600',
          gradient === 'emerald' && 'bg-gradient-to-br from-emerald-400 to-emerald-600',
          gradient === 'teal' && 'bg-gradient-to-br from-teal-400 to-teal-600',
          gradient === 'cyan' && 'bg-gradient-to-br from-cyan-400 to-cyan-600',
          gradient === 'denim' && 'bg-gradient-to-br from-blue-400 to-blue-600',
          gradient === 'indigo' && 'bg-gradient-to-br from-indigo-400 to-indigo-600',
          gradient === 'purple' && 'bg-gradient-to-br from-purple-400 to-purple-600',
          gradient === 'fuchsia' && 'bg-gradient-to-br from-fuchsia-400 to-fuchsia-600'
        )}
        aria-hidden="true"
      />
    ) : null

    return (
      <Card
        ref={ref}
        className={baseClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        {...props}
      >
        {gradientOverlay}
        <CardContent className={cn('p-0 relative z-10', padding !== 'none' || paddingClasses[padding])}>
          {children}
        </CardContent>
      </Card>
    )
  }
)
GlassCard.displayName = 'GlassCard'

/**
 * GlassPanelProps - Configuration for GlassPanel
 */
export interface GlassPanelProps {
  /** Child content */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Panel title */
  title?: string
  /** Panel description or subtitle */
  description?: string
  /** Optional badge text */
  badge?: string
  /** Optional badge variant */
  badgeVariant?: 'default' | 'success' | 'warning' | 'info' | 'outline' | 'destructive' | 'secondary' | 'gold' | 'red' | 'rose' | 'orange' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'denim' | 'indigo' | 'purple' | 'fuchsia' | 'glass-premium' | 'glass-navy' | 'glass-platinum' | 'premium' | 'clairvoyance' | 'perception' | 'ricochet' | 'gold-solid' | 'navy-solid' | 'platinum-solid'
  /** Action element (button, dropdown, etc.) */
  action?: React.ReactNode
  /** Glass intensity level */
  intensity?: 'low' | 'medium' | 'high' | 'premium'
  /** Enables hover elevation */
  hover?: boolean
  /** Padding variant */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  /** Accessible label */
  ariaLabel?: string
  /** Optional icon */
  icon?: React.ReactNode
}

/**
 * GlassPanel - Premium glass panel with header
 * @description
 * A feature-rich glass panel with optional header section containing title,
 * description, badge, and action button. Perfect for dashboards and cards.
 * @example
 * ```tsx
 * <GlassPanel
 *   title="User Analytics"
 *   description="Track your user engagement metrics"
 *   badge="Updated"
 *   action={<Button>View All</Button>}
 *   intensity="premium"
 * >
 *   <YourContent />
 * </GlassPanel>
 * ```
 */
export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  (
    {
      children,
      className,
      title,
      description,
      badge,
      badgeVariant = 'outline',
      action,
      intensity = 'premium',
      hover = false,
      padding = 'md',
      ariaLabel,
      icon,
      ...props
    },
    ref
  ) => {
    const headerContent = (title || description || badge || action || icon) && (
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {icon && (
            <div className="flex-shrink-0 mt-0.5">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            {title && (
              <h3 className="font-rajdhani text-lg font-semibold text-platinum-900 dark:text-platinum-100">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1 text-sm text-platinum-600 dark:text-platinum-400 line-clamp-2">
                {description}
              </p>
            )}
            {badge && (
              <Badge variant={badgeVariant} className="mt-2 border-gold-300/50 text-gold-700 dark:border-gold-600/50 dark:text-gold-300">
                {badge}
              </Badge>
            )}
          </div>
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
    )

    return (
      <div
        ref={ref}
        className={cn(
          'glass-premium rounded-2xl border border-white/20 shadow-premium-md transition-all duration-300',
          hover && 'hover:shadow-premium-lg hover:-translate-y-0.5',
          padding !== 'none' && paddingClasses[padding],
          className
        )}
        aria-label={ariaLabel || title}
        role="region"
        {...props}
      >
        {headerContent}
        {children}
      </div>
    )
  }
)
GlassPanel.displayName = 'GlassPanel'

/**
 * StatusCardProps - Configuration for StatusCard
 */
export interface StatusCardProps {
  /** Status type for styling */
  status: 'success' | 'warning' | 'error' | 'info' | 'neutral'
  /** Card title */
  title: string
  /** Primary value or metric */
  value?: string | number
  /** Optional description or subtitle */
  description?: string
  /** Optional icon element */
  icon?: React.ReactNode
  /** Optional trend indicator */
  trend?: 'up' | 'down' | 'neutral'
  /** Optional trend percentage */
  trendValue?: string
  /** Additional CSS classes */
  className?: string
  /** Optional click handler */
  onClick?: () => void
  /** Loading state */
  loading?: boolean
  /** Glass intensity level */
  intensity?: 'low' | 'medium' | 'high' | 'premium'
}

/**
 * Status configuration mapping
 */
const statusConfig: Record<
  StatusCardProps['status'],
  {
    bg: string
    border: string
    text: string
    icon: string
    glow: string
  }
> = {
  success: {
    bg: 'bg-emerald-50/90 dark:bg-emerald-900/20',
    border: 'border-emerald-200/50 dark:border-emerald-700/50',
    text: 'text-emerald-700 dark:text-emerald-300',
    icon: 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-premium-sm',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]',
  },
  warning: {
    bg: 'bg-gold-50/90 dark:bg-gold-900/20',
    border: 'border-gold-200/50 dark:border-gold-700/50',
    text: 'text-gold-700 dark:text-gold-300',
    icon: 'bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-premium-sm',
    glow: 'shadow-[0_0_20px_rgba(217,119,6,0.2)]',
  },
  error: {
    bg: 'bg-red-50/90 dark:bg-red-900/20',
    border: 'border-red-200/50 dark:border-red-700/50',
    text: 'text-red-700 dark:text-red-300',
    icon: 'bg-gradient-to-br from-red-400 to-red-600 text-white shadow-premium-sm',
    glow: 'shadow-[0_0_20px_rgba(239,68,68,0.2)]',
  },
  info: {
    bg: 'bg-indigo-50/90 dark:bg-indigo-900/20',
    border: 'border-indigo-200/50 dark:border-indigo-700/50',
    text: 'text-indigo-700 dark:text-indigo-300',
    icon: 'bg-gradient-to-br from-indigo-400 to-indigo-600 text-white shadow-premium-sm',
    glow: 'shadow-[0_0_20px_rgba(99,102,241,0.2)]',
  },
  neutral: {
    bg: 'bg-platinum-50/90 dark:bg-platinum-900/20',
    border: 'border-platinum-200/50 dark:border-platinum-700/50',
    text: 'text-platinum-700 dark:text-platinum-300',
    icon: 'bg-gradient-to-br from-platinum-400 to-platinum-600 text-white shadow-premium-sm',
    glow: 'shadow-[0_0_20px_rgba(148,163,184,0.2)]',
  },
}

/**
 * StatusCard - Status indicator card with metrics
 * @description
 * A comprehensive status card displaying key metrics with visual indicators,
 * trend arrows, and optional icons. Perfect for dashboards and analytics displays.
 * @example
 * ```tsx
 * <StatusCard
 *   status="success"
 *   title="Active Users"
 *   value="12,459"
 *   description="+12% from last month"
 *   icon={<Users />}
 *   trend="up"
 *   trendValue="+12%"
 * />
 * ```
 */
export const StatusCard = React.forwardRef<HTMLDivElement, StatusCardProps>(
  (
    {
      status,
      title,
      value,
      description,
      icon,
      trend,
      trendValue,
      className,
      onClick,
      loading = false,
      intensity = 'premium',
      ...props
    },
    ref
  ) => {
    const config = statusConfig[status]

    if (loading) {
      return (
        <div
          ref={ref}
          className={cn(
            'glass-premium rounded-2xl p-6 border border-white/20 shadow-premium-sm animate-pulse',
            className
          )}
          {...props}
        >
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-platinum-200 dark:bg-platinum-700" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-24 bg-platinum-200 dark:bg-platinum-700 rounded" />
              <div className="h-8 w-32 bg-platinum-200 dark:bg-platinum-700 rounded" />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          'glass-premium rounded-2xl p-6 border-2 shadow-premium-sm transition-all duration-300',
          config.bg,
          config.border,
          config.glow,
          onClick && 'hover:shadow-premium-md hover:-translate-y-0.5 cursor-pointer',
          className
        )}
        onClick={onClick}
        role="button"
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={
          onClick
            ? e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  onClick()
                }
              }
            : undefined
        }
        aria-label={title}
        {...props}
      >
        <div className="flex items-start gap-4">
          {icon && (
            <div className={cn('flex h-10 w-10 items-center justify-center rounded-lg', config.icon)} aria-hidden="true">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className={cn('text-sm font-medium', config.text)}>{title}</p>
            {value !== undefined && (
              <p className="mt-1 font-rajdhani text-2xl font-bold text-platinum-900 dark:text-platinum-100">
                {value}
              </p>
            )}
            {(description || trendValue) && (
              <div className="mt-1 flex items-center gap-2">
                {description && (
                  <p className="text-sm text-platinum-600 dark:text-platinum-400 truncate">
                    {description}
                  </p>
                )}
                {trend && (
                  <Badge
                    variant={
                      status === 'success' || trend === 'up'
                        ? 'success'
                        : status === 'error' || trend === 'down'
                        ? 'red'
                        : 'outline'
                    }
                    className="shrink-0"
                  >
                    {trend === 'up' && '↑'}
                    {trend === 'down' && '↓'}
                    {trend === 'neutral' && '→'}
                    {trendValue}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
)
StatusCard.displayName = 'StatusCard'

/**
 * MetricCardProps - Configuration for MetricCard
 */
export interface MetricCardProps {
  /** Metric title */
  title: string
  /** Primary value */
  value: string | number
  /** Change indicator */
  change?: {
    value: string
    type: 'increase' | 'decrease' | 'neutral'
  }
  /** Optional description */
  description?: string
  /** Optional icon */
  icon?: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Glass intensity */
  intensity?: GlassCardProps['intensity']
}

/**
 * MetricCard - Simplified metric display card
 * @description
 * A clean, focused metric card for displaying KPIs with optional
 * change indicators. Designed for dashboard widgets.
 * @example
 * ```tsx
 * <MetricCard
 *   title="Revenue"
 *   value="$45,231"
 *   change={{ value: '+12.5%', type: 'increase' }}
 *   description="vs last month"
 * />
 * ```
 */
export const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ title, value, change, description, icon, className, intensity = 'premium', ...props }, ref) => {
    return (
      <GlassCard
        ref={ref}
        intensity={intensity}
        hover
        className={cn('p-6', className)}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-platinum-600 dark:text-platinum-400">{title}</p>
            <p className="mt-2 font-rajdhani text-3xl font-bold text-platinum-900 dark:text-platinum-100">
              {value}
            </p>
            {(change || description) && (
              <div className="mt-2 flex items-center gap-2">
                {change && (
                  <span
                    className={cn(
                      'text-sm font-medium',
                      change.type === 'increase' && 'text-emerald-600 dark:text-emerald-400',
                      change.type === 'decrease' && 'text-red-600 dark:text-red-400',
                      change.type === 'neutral' && 'text-platinum-600 dark:text-platinum-400'
                    )}
                  >
                    {change.type === 'increase' && '↑'}
                    {change.type === 'decrease' && '↓'}
                    {change.type === 'neutral' && '→'}
                    {change.value}
                  </span>
                )}
                {description && (
                  <span className="text-sm text-platinum-500 dark:text-platinum-500">
                    {description}
                  </span>
                )}
              </div>
            )}
          </div>
          {icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 dark:bg-navy-900/30 text-navy-600 dark:text-navy-400">
              {icon}
            </div>
          )}
        </div>
      </GlassCard>
    )
  }
)
MetricCard.displayName = 'MetricCard'
