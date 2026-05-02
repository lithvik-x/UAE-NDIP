'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCw, AlertCircle, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * LITHVIK NEXUS - Data Refresh Button Component
 * Provides visual feedback for data refresh operations
 */

interface RefreshButtonProps {
  onRefresh: () => Promise<void> | void
  isRefreshing?: boolean
  lastRefresh?: Date
  error?: Error | null
  autoRefreshInterval?: number // in seconds
  size?: 'sm' | 'md' | 'lg'
  variant?: 'ghost' | 'outline' | 'secondary'
  className?: string
  showStatus?: boolean
}

export function RefreshButton({
  onRefresh,
  isRefreshing = false,
  lastRefresh,
  error,
  autoRefreshInterval,
  size = 'md',
  variant = 'ghost',
  className,
  showStatus = false,
}: RefreshButtonProps) {
  const [localRefreshing, setLocalRefreshing] = React.useState(false)
  const [lastRefreshTime, setLastRefreshTime] = React.useState<Date | undefined>(lastRefresh)

  const handleRefresh = async () => {
    if (localRefreshing || isRefreshing) return

    setLocalRefreshing(true)
    try {
      await onRefresh()
      setLastRefreshTime(new Date())
    } catch (err) {
      console.error('Refresh failed:', err)
    } finally {
      setLocalRefreshing(false)
    }
  }

  const actuallyRefreshing = localRefreshing || isRefreshing

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9',
    lg: 'h-10 w-10',
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={variant}
        size={size === 'lg' ? 'default' : size === 'sm' ? 'sm' : 'icon'}
        onClick={handleRefresh}
        disabled={actuallyRefreshing}
        className={cn(
          'relative transition-all duration-200',
          actuallyRefreshing && 'animate-pulse',
          error && 'border-red-300 text-red-600 hover:bg-red-50',
          className
        )}
        title={error ? `Refresh failed: ${error.message}` : 'Refresh data'}
      >
        {error ? (
          <AlertCircle className={cn('h-4 w-4', size === 'lg' && 'h-5 w-5')} />
        ) : (
          <RefreshCw
            className={cn(
              'transition-transform',
              actuallyRefreshing && 'animate-spin',
              size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
            )}
          />
        )}
        {showStatus && (
          <span className="sr-only">
            {actuallyRefreshing ? 'Refreshing...' : 'Refresh'}
          </span>
        )}
      </Button>

      {showStatus && (lastRefreshTime || autoRefreshInterval) && (
        <div className="hidden sm:flex flex-col items-start gap-1 text-xs">
          {lastRefreshTime && (
            <span className={cn(
              'text-platinum-500',
              actuallyRefreshing && 'text-gold-600'
            )}>
              {actuallyRefreshing ? 'Refreshing...' : `Updated ${formatRelativeTime(lastRefreshTime)}`}
            </span>
          )}
          {autoRefreshInterval && !actuallyRefreshing && (
            <span className="text-platinum-400">
              Auto-refresh: {autoRefreshInterval}s
            </span>
          )}
        </div>
      )}
    </div>
  )
}

/**
 * Format relative time (e.g., "2m ago", "just now")
 */
function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 30) return 'just now'
  if (seconds < 60) return `${seconds}s ago`
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

/**
 * Auto-refresh Control Component
 */
interface AutoRefreshControlProps {
  interval: number // seconds
  onIntervalChange: (interval: number) => void
  disabled?: boolean
  options?: number[]
}

export function AutoRefreshControl({
  interval,
  onIntervalChange,
  disabled = false,
  options = [0, 30, 60, 300], // Off, 30s, 1m, 5m
}: AutoRefreshControlProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="hidden sm:inline text-xs text-platinum-500">Auto-refresh:</span>
      <div className="inline-flex items-center rounded-lg bg-platinum-100/50 p-1">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onIntervalChange(opt)}
            disabled={disabled}
            className={cn(
              'px-2 py-1 text-xs font-medium rounded-md transition-all',
              interval === opt
                ? 'bg-white text-navy-700 shadow-sm'
                : 'text-platinum-500 hover:text-platinum-700 hover:bg-white/50',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {opt === 0 ? 'Off' : opt < 60 ? `${opt}s` : `${Math.floor(opt / 60)}m`}
          </button>
        ))}
      </div>
    </div>
  )
}

/**
 * Live Status Indicator
 */
interface LiveStatusProps {
  isLive: boolean
  lastUpdate?: Date
  className?: string
}

export function LiveStatus({ isLive, lastUpdate, className }: LiveStatusProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="flex items-center gap-1.5">
        <div
          className={cn(
            'h-2 w-2 rounded-full transition-all',
            isLive ? 'bg-emerald-500 animate-pulse' : 'bg-platinum-300'
          )}
        />
        <span className={cn(
          'text-xs font-medium',
          isLive ? 'text-emerald-600' : 'text-platinum-400'
        )}>
          {isLive ? 'Live' : 'Offline'}
        </span>
      </div>
      {lastUpdate && (
        <span className="text-xs text-platinum-400">
          {formatRelativeTime(lastUpdate)}
        </span>
      )}
    </div>
  )
}

/**
 * Data Freshness Indicator
 */
interface DataFreshnessProps {
  lastUpdate: Date
  staleThreshold?: number // milliseconds
  className?: string
}

export function DataFreshness({
  lastUpdate,
  staleThreshold = 60000, // 1 minute
  className,
}: DataFreshnessProps) {
  const now = new Date()
  const age = now.getTime() - lastUpdate.getTime()
  const isStale = age > staleThreshold

  const getFreshnessColor = () => {
    if (age < 30000) return 'text-emerald-500' // Fresh (< 30s)
    if (age < staleThreshold) return 'text-gold-500' // Aging (< 1m)
    return 'text-red-500' // Stale (> 1m)
  }

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <Clock className={cn('h-3.5 w-3.5', getFreshnessColor())} />
      <span className={cn('text-xs', getFreshnessColor())}>
        {formatRelativeTime(lastUpdate)}
      </span>
    </div>
  )
}
