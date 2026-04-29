import * as React from 'react'
import { cn, calculateTrend } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  ChevronRight,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'

/**
 * @typedef {'red' | 'rose' | 'orange' | 'gold' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'denim' | 'indigo' | 'purple' | 'fuchsia'} GradientColor
 */

/**
 * @typedef {'success' | 'warning' | 'error' | 'info' | 'neutral'} StatusType
 */

/**
 * @typedef {'up' | 'down' | 'neutral'} TrendDirection
 */

/**
 * Props for the MetricCard component
 * @interface MetricCardProps
 * @property {string} title - The title/label of the metric
 * @property {string | number} value - The primary metric value to display
 * @property {number} [previousValue] - The previous period value for trend calculation
 * @property {string} [unit] - Unit suffix to display next to the value (e.g., '%', 'ms')
 * @property {TrendDirection} [trend] - Explicit trend direction. If not provided, calculated from previousValue
 * @property {React.ReactNode} [icon] - Optional icon component to display
 * @property {GradientColor} [gradient] - Background gradient for the icon container
 * @property {StatusType} [status] - Status badge to display when no icon is provided
 * @property {() => void} [onClick] - Click handler for interactive cards
 * @property {string} [className] - Additional CSS classes
 */

export interface MetricCardProps {
  /** The title/label of the metric */
  title: string
  /** The primary metric value to display */
  value: string | number
  /** The previous period value for trend calculation */
  previousValue?: number
  /** Unit suffix to display next to the value (e.g., '%', 'ms') */
  unit?: string
  /** Explicit trend direction. If not provided, calculated from previousValue */
  trend?: 'up' | 'down' | 'neutral'
  /** Optional icon component to display */
  icon?: React.ReactNode
  /** Background gradient for the icon container */
  gradient?: 'red' | 'rose' | 'orange' | 'gold' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'denim' | 'indigo' | 'purple' | 'fuchsia'
  /** Status badge to display when no icon is provided */
  status?: 'success' | 'warning' | 'error' | 'info' | 'neutral'
  /** Click handler for interactive cards */
  onClick?: () => void
  /** Additional CSS classes */
  className?: string
}

const gradientClasses = {
  red: 'bg-gradient-red text-white',
  rose: 'bg-gradient-rose text-white',
  orange: 'bg-gradient-orange text-white',
  gold: 'bg-gradient-gold text-white',
  lime: 'bg-gradient-lime text-white',
  emerald: 'bg-gradient-emerald text-white',
  teal: 'bg-gradient-teal text-white',
  cyan: 'bg-gradient-cyan text-white',
  denim: 'bg-gradient-denim text-white',
  indigo: 'bg-gradient-indigo text-white',
  purple: 'bg-gradient-purple text-white',
  fuchsia: 'bg-gradient-fuchsia text-white',
}

/**
 * MetricCard - A premium metric display component with trend indicators and status badges
 *
 * @description
 * Displays a key metric with optional trend comparison, status indicators, and interactive capabilities.
 * Automatically calculates trend direction when previousValue is provided.
 *
 * @example
 * ```tsx
 * <MetricCard
 *   title="Total Users"
 *   value={12543}
 *   previousValue={11200}
 *   unit="users"
 *   icon={<Users />}
 *   gradient="indigo"
 *   onClick={() => navigate('/users')}
 * />
 * ```
 */
export function MetricCard({
  title,
  value,
  previousValue,
  unit,
  trend,
  icon,
  gradient,
  status,
  onClick,
  className,
}: MetricCardProps) {
  // Calculate trend if previousValue is provided but trend is not
  const calculatedTrend = React.useMemo(() => {
    if (trend) return trend
    if (previousValue !== undefined) {
      const result = calculateTrend(typeof value === 'number' ? value : parseFloat(value.toString()), previousValue)
      return result.direction
    }
    return 'neutral'
  }, [trend, previousValue, value])

  const trendValue = React.useMemo(() => {
    if (previousValue === undefined) return null
    const result = calculateTrend(typeof value === 'number' ? value : parseFloat(value.toString()), previousValue)
    return Math.abs(result.value)
  }, [previousValue, value])

  return (
    <Card
      onClick={onClick}
      className={cn(
        'group relative overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-2',
        onClick && 'cursor-pointer hover:shadow-glass-lg hover:-translate-y-1 active:scale-[0.98]',
        !onClick && 'hover:shadow-glass',
        className
      )}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
      aria-label={title}
      {...(onClick && {
        onKeyDown: (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick()
          }
        },
      })}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-platinum-600 dark:text-platinum-400">{title}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-3xl font-extrabold text-navy-900 dark:text-platinum-100">
                {value}
                {unit && <span className="text-lg font-normal text-platinum-400 dark:text-platinum-500 ml-1">{unit}</span>}
              </h3>
            </div>

            {/* Trend Indicator */}
            {(trend || previousValue) && (
              <div className="mt-2 flex items-center gap-1.5">
                {calculatedTrend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-emerald-500 dark:text-emerald-400" aria-hidden="true" />
                ) : calculatedTrend === 'down' ? (
                  <TrendingDown className="h-4 w-4 text-red-500 dark:text-red-400" aria-hidden="true" />
                ) : (
                  <Activity className="h-4 w-4 text-platinum-400 dark:text-platinum-500" aria-hidden="true" />
                )}
                <span
                  className={cn(
                    'text-sm font-medium',
                    calculatedTrend === 'up' && 'text-emerald-600 dark:text-emerald-400',
                    calculatedTrend === 'down' && 'text-red-600 dark:text-red-400',
                    calculatedTrend === 'neutral' && 'text-platinum-500 dark:text-platinum-500'
                  )}
                >
                  {trendValue !== null && `${trendValue.toFixed(1)}%`}
                  {calculatedTrend === 'up' && ' from last period'}
                  {calculatedTrend === 'down' && ' from last period'}
                  {calculatedTrend === 'neutral' && ' stable'}
                </span>
              </div>
            )}
          </div>

          {/* Icon Badge */}
          {icon && (
            <div
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition-transform group-hover:scale-110',
                gradient && gradientClasses[gradient],
                !gradient && 'bg-platinum-100 dark:bg-platinum-800 text-navy-600 dark:text-platinum-300'
              )}
              aria-hidden="true"
            >
              {icon}
            </div>
          )}

          {/* Status Badge */}
          {status && !icon && (
            <Badge
              variant={status === 'success' ? 'success' : status === 'warning' ? 'warning' : status === 'error' ? 'destructive' : status === 'info' ? 'info' : 'secondary'}
              className="shrink-0"
            >
              {status === 'success' && <Activity className="mr-1 h-3 w-3" />}
              {status === 'warning' && <AlertTriangle className="mr-1 h-3 w-3" />}
              {status === 'error' && <AlertTriangle className="mr-1 h-3 w-3" />}
              {status === 'info' && <Activity className="mr-1 h-3 w-3" />}
              {status}
            </Badge>
          )}
        </div>

        {/* Click indicator */}
        {onClick && (
          <div className="absolute bottom-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 translate-x-1 translate-y-1" aria-hidden="true">
            <ChevronRight className="h-5 w-5 text-platinum-400" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

/**
 * Props for the StatCard component
 * @interface StatCardProps
 * @property {string} title - The title/label of the statistic
 * @property {string | number} value - The primary statistic value to display
 * @property {number} [change] - Percentage change value
 * @property {'increase' | 'decrease' | 'neutral'} [changeType] - Type of change (affects icon and color)
 * @property {string} [description] - Additional context or description
 * @property {React.ReactNode} [icon] - Optional icon component to display
 * @property {'red' | 'rose' | 'orange' | 'gold' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'denim' | 'indigo' | 'purple' | 'fuchsia'} [color] - Background gradient for the icon container
 * @property {string} [className] - Additional CSS classes
 */

export interface StatCardProps {
  /** The title/label of the statistic */
  title: string
  /** The primary statistic value to display */
  value: string | number
  /** Percentage change value */
  change?: number
  /** Type of change (affects icon and color) */
  changeType?: 'increase' | 'decrease' | 'neutral'
  /** Additional context or description */
  description?: string
  /** Optional icon component to display */
  icon?: React.ReactNode
  /** Background gradient for the icon container */
  color?: 'red' | 'rose' | 'orange' | 'gold' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'denim' | 'indigo' | 'purple' | 'fuchsia'
  /** Additional CSS classes */
  className?: string
}

/**
 * StatCard - A simplified metric display with glass morphism styling
 *
 * @description
 * A lightweight statistic display component featuring glass panel styling,
 * optional change indicators, and icon support.
 *
 * @example
 * ```tsx
 * <StatCard
 *   title="Active Sessions"
 *   value="1,234"
 *   change={12}
 *   changeType="increase"
 *   description="Currently online"
 *   icon={<Activity />}
 *   color="emerald"
 * />
 * ```
 */
export function StatCard({
  title,
  value,
  change,
  changeType,
  description,
  icon,
  color = 'indigo',
  className,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        'glass-panel transition-all duration-300 hover:shadow-glass hover:-translate-y-0.5 animate-in fade-in zoom-in-95',
        className
      )}
      role="article"
      aria-label={title}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-platinum-600 dark:text-platinum-400">{title}</p>
            <p className="mt-2 text-2xl font-bold text-navy-900 dark:text-platinum-100">{value}</p>
            {description && (
              <p className="mt-1 text-xs text-platinum-500 dark:text-platinum-500">{description}
              </p>
            )}
            {change !== undefined && (
              <div className="mt-2 flex items-center gap-1">
                {changeType === 'increase' && <ArrowUp className="h-3 w-3 text-emerald-500 dark:text-emerald-400" aria-hidden="true" />}
                {changeType === 'decrease' && <ArrowDown className="h-3 w-3 text-red-500 dark:text-red-400" aria-hidden="true" />}
                <span
                  className={cn(
                    'text-xs font-medium',
                    changeType === 'increase' && 'text-emerald-600 dark:text-emerald-400',
                    changeType === 'decrease' && 'text-red-600 dark:text-red-400',
                    changeType === 'neutral' && 'text-platinum-500 dark:text-platinum-500'
                  )}
                >
                  {change > 0 ? '+' : ''}{change}%
                </span>
              </div>
            )}
          </div>
          {icon && (
            <div
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-lg shadow-md transition-transform hover:scale-110',
                gradientClasses[color]
              )}
              aria-hidden="true"
            >
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
