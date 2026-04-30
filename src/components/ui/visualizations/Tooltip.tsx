'use client'

import * as React from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

export interface TooltipPosition {
  x: number
  y: number
}

export interface TooltipData {
  title?: string
  content: React.ReactNode | string
  footer?: string
  color?: string
}

export interface VisualizationTooltipProps {
  visible: boolean
  position?: TooltipPosition
  data?: TooltipData
  className?: string
  style?: React.CSSProperties
  followMouse?: boolean
  delay?: number
  theme?: 'light' | 'dark' | 'glass'
  arrow?: boolean
  maxWidth?: number
}

/**
 * VisualizationTooltip - Floating tooltip for data visualization
 *
 * Provides context-aware tooltips for all D3.js visualization components.
 * Features:
 * - Automatic positioning to avoid viewport edges
 * - Follow mouse or fixed positioning
 * - Glassmorphism theme option
 * - Configurable delay and animation
 * - Accessibility support
 */
export function VisualizationTooltip({
  visible,
  position,
  data,
  className = '',
  style,
  followMouse = false,
  delay = 150,
  theme = 'glass',
  arrow = true,
  maxWidth = 300,
}: VisualizationTooltipProps) {
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const [adjustedPosition, setAdjustedPosition] = React.useState<TooltipPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined)

  // Handle visibility with delay
  React.useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (visible) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true)
      }, delay)
    } else {
      setIsVisible(false)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [visible, delay])

  // Adjust position to avoid viewport edges
  React.useEffect(() => {
    if (!position || !isVisible || !tooltipRef.current) return

    const tooltip = tooltipRef.current
    const rect = tooltip.getBoundingClientRect()
    const padding = 12

    let adjustedX = position.x
    let adjustedY = position.y

    // Check horizontal bounds - guard against SSR
    if (typeof window !== 'undefined') {
      if (adjustedX + rect.width + padding > window.innerWidth) {
        adjustedX = position.x - rect.width - padding
      }
      if (adjustedX < padding) {
        adjustedX = padding
      }

      // Check vertical bounds
      if (adjustedY + rect.height + padding > window.innerHeight) {
        adjustedY = position.y - rect.height - padding
      }
      if (adjustedY < padding) {
        adjustedY = padding
      }
    }

    setAdjustedPosition({ x: adjustedX, y: adjustedY })
  }, [position, isVisible])

  if (!isVisible || !data) return null

  const themeStyles: Record<string, React.CSSProperties> = {
    light: {
      background: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      color: 'hsl(var(--foreground))',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    dark: {
      background: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      color: 'hsl(var(--foreground))',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      color: 'hsl(var(--foreground))',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    },
  }

  const posStyle: React.CSSProperties = followMouse && position
    ? {
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(8px, 8px)',
      }
    : {
        position: 'fixed',
        left: `${adjustedPosition.x}px`,
        top: `${adjustedPosition.y}px`,
      }

  return (
    <div
      ref={tooltipRef}
      className={cn(
        'viz-tooltip',
        'rounded-lg',
        'pointer-events-none',
        'z-50',
        'transition-opacity',
        'duration-200',
        'ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        ...posStyle,
        ...themeStyles[theme],
        maxWidth,
        ...style,
      }}
      role="tooltip"
      aria-live="polite"
    >
      {/* Content */}
      <div className="p-3">
        {/* Title with optional color indicator */}
        {data.title && (
          <div className="flex items-center gap-2 mb-2">
            {data.color && (
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: data.color }}
              />
            )}
            <h4 className="text-sm font-semibold leading-tight">
              {data.title}
            </h4>
          </div>
        )}

        {/* Main content */}
        <div className="text-sm">
          {typeof data.content === 'string' ? (
            <p className="whitespace-pre-wrap">{data.content}</p>
          ) : (
            data.content
          )}
        </div>

        {/* Footer */}
        {data.footer && (
          <div className="mt-2 pt-2 border-t border-current/10">
            <p className="text-xs opacity-70">{data.footer}</p>
          </div>
        )}
      </div>

      {/* Arrow */}
      {arrow && !followMouse && (
        <div
          className="absolute w-2 h-2 bg-inherit rotate-45"
          style={{
            bottom: '-4px',
            left: '12px',
            borderLeft: theme === 'glass' ? '1px solid rgba(255, 255, 255, 0.3)' : 'inherit',
            borderBottom: theme === 'glass' ? '1px solid rgba(255, 255, 255, 0.3)' : 'inherit',
          }}
        />
      )}
    </div>
  )
}

// ============================================================================
// TOOLTIP HOOK
// ============================================================================

export interface UseTooltipReturn {
  tooltipData: TooltipData | null
  tooltipPosition: TooltipPosition | null
  tooltipVisible: boolean
  showTooltip: (data: TooltipData, position: TooltipPosition) => void
  hideTooltip: () => void
  updateTooltip: (data: TooltipData) => void
}

/**
 * useTooltip - Hook for managing tooltip state
 *
 * Provides a simple API for showing/hiding/updating tooltips
 * in D3.js visualizations.
 *
 * @example
 * const { showTooltip, hideTooltip } = useTooltip()
 *
 * // In D3 event handler
 * .on('mouseover', function(event, d) {
 *   showTooltip(
 *     { title: d.name, content: `Value: ${d.value}` },
 *     { x: event.pageX, y: event.pageY }
 *   )
 * })
 * .on('mouseout', hideTooltip)
 */
export function useTooltip(): UseTooltipReturn {
  const [tooltipData, setTooltipData] = React.useState<TooltipData | null>(null)
  const [tooltipPosition, setTooltipPosition] = React.useState<TooltipPosition | null>(null)
  const [tooltipVisible, setTooltipVisible] = React.useState(false)

  const showTooltip = React.useCallback((data: TooltipData, position: TooltipPosition) => {
    setTooltipData(data)
    setTooltipPosition(position)
    setTooltipVisible(true)
  }, [])

  const hideTooltip = React.useCallback(() => {
    setTooltipVisible(false)
    // Clear data after animation
    setTimeout(() => {
      setTooltipData(null)
      setTooltipPosition(null)
    }, 200)
  }, [])

  const updateTooltip = React.useCallback((data: TooltipData) => {
    setTooltipData(data)
  }, [])

  return {
    tooltipData,
    tooltipPosition,
    tooltipVisible,
    showTooltip,
    hideTooltip,
    updateTooltip,
  }
}

// ============================================================================
// D3 TOOLTIP INTEGRATION
// ============================================================================

/**
 * addTooltipToD3Selection - Add tooltip behavior to D3 selection
 *
 * Helper function to add mouseover/mouseout handlers for tooltips
 * to D3 selections.
 *
 * @param selection - D3 selection to attach tooltip to
 * @param showTooltip - useTooltip showTooltip function
 * @param dataAccessor - Function to extract tooltip data from datum
 * @param customContent - Optional custom content renderer
 *
 * @example
 * addTooltipToD3Selection(
 *   circles,
 *   showTooltip,
 *   (d) => ({
 *     title: d.name,
 *     content: `Value: ${d.value}`,
 *     color: colorScale(d.category)
 *   })
 * )
 */
export function addTooltipToD3Selection<GElement extends d3.BaseType, Datum, PElement extends d3.BaseType, PDatum>(
  selection: d3.Selection<GElement, Datum, PElement, PDatum>,
  showTooltip: (data: TooltipData, position: TooltipPosition) => void,
  dataAccessor: (datum: Datum, event: MouseEvent) => TooltipData,
  customContent?: (datum: Datum) => React.ReactNode
): void {
  selection
    .on('mouseover', function(event, datum) {
      const data = dataAccessor(datum, event)

      // Calculate position (default to mouse position)
      const position: TooltipPosition = {
        x: event.pageX,
        y: event.pageY,
      }

      showTooltip(data, position)
    })
    .on('mousemove', function(event) {
      // Update position on mouse move if followMouse is enabled
      const position: TooltipPosition = {
        x: event.pageX,
        y: event.pageY,
      }
      showTooltip(dataAccessor(event.datum, event), position)
    })
    .on('mouseout', function() {
      // Tooltip is hidden by the hideTooltip function
      // This event is handled by the component's mouseout handler
    })
}

// ============================================================================
// COMMON TOOLTIP CONTENT FORMATTERS
// ============================================================================

/**
 * Format numeric data for tooltip
 */
export function formatNumericTooltip(
  label: string,
  value: number,
  options?: {
    format?: 'number' | 'currency' | 'percent' | 'abbreviated'
    precision?: number
    color?: string
    change?: number
    changeLabel?: string
  }
): TooltipData {
  const { format = 'number', precision = 1, color, change, changeLabel } = options || {}

  let formattedValue: string
  switch (format) {
    case 'currency':
      formattedValue = `AED ${value.toFixed(precision)}`
      break
    case 'percent':
      formattedValue = `${value.toFixed(precision)}%`
      break
    case 'abbreviated':
      formattedValue = d3.format(`.${precision}s`)(value)
      break
    default:
      formattedValue = d3.format(`,.${precision}f`)(value)
  }

  let content: React.ReactNode = (
    <div className="space-y-1">
      <div className="flex justify-between gap-4">
        <span className="opacity-70">Value:</span>
        <span className="font-semibold">{formattedValue}</span>
      </div>
      {change !== undefined && (
        <div className="flex justify-between gap-4">
          <span className="opacity-70">{changeLabel || 'Change'}:</span>
          <span className={`font-semibold ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? '+' : ''}{change.toFixed(1)}%
          </span>
        </div>
      )}
    </div>
  )

  return {
    title: label,
    content,
    color,
  }
}

/**
 * Format date-based data for tooltip
 */
export function formatDateTooltip(
  label: string,
  date: Date | string,
  value: number,
  options?: {
    dateFormat?: 'short' | 'medium' | 'long' | 'full'
    valueFormat?: 'number' | 'currency' | 'percent'
    color?: string
  }
): TooltipData {
  const { dateFormat = 'medium', valueFormat = 'number', color } = options || {}

  const dateFormatters: Record<typeof dateFormat, (d: Date) => string> = {
    short: d3.timeFormat('%b %d'),
    medium: d3.timeFormat('%b %d, %Y'),
    long: d3.timeFormat('%B %d, %Y'),
    full: d3.timeFormat('%A, %B %d, %Y'),
  }

  const dateObj = typeof date === 'string' ? new Date(date) : date
  const formattedDate = dateFormatters[dateFormat](dateObj)

  let formattedValue: string
  switch (valueFormat) {
    case 'currency':
      formattedValue = `AED ${value.toFixed(2)}`
      break
    case 'percent':
      formattedValue = `${value.toFixed(1)}%`
      break
    default:
      formattedValue = d3.format(',.0f')(value)
  }

  const content: React.ReactNode = (
    <div className="space-y-1">
      <div className="flex justify-between gap-4">
        <span className="opacity-70">Date:</span>
        <span className="font-medium">{formattedDate}</span>
      </div>
      <div className="flex justify-between gap-4">
        <span className="opacity-70">Value:</span>
        <span className="font-semibold">{formattedValue}</span>
      </div>
    </div>
  )

  return {
    title: label,
    content,
    color,
  }
}

/**
 * Format category-based data for tooltip
 */
export function formatCategoryTooltip(
  category: string,
  value: number,
  total: number,
  options?: {
    color?: string
    showCount?: boolean
    count?: number
  }
): TooltipData {
  const { color, showCount = false, count } = options || {}
  const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0'

  const content: React.ReactNode = (
    <div className="space-y-1">
      <div className="flex justify-between gap-4">
        <span className="opacity-70">Value:</span>
        <span className="font-semibold">{d3.format(',.0f')(value)}</span>
      </div>
      <div className="flex justify-between gap-4">
        <span className="opacity-70">Share:</span>
        <span className="font-semibold">{percentage}%</span>
      </div>
      {showCount && count !== undefined && (
        <div className="flex justify-between gap-4">
          <span className="opacity-70">Count:</span>
          <span className="font-medium">{d3.format(',.0f')(count)}</span>
        </div>
      )}
    </div>
  )

  return {
    title: category,
    content,
    color,
  }
}

/**
 * Format multi-metric data for tooltip
 */
export function formatMultiMetricTooltip(
  title: string,
  metrics: Array<{ label: string; value: number; format?: 'number' | 'currency' | 'percent'; color?: string }>
): TooltipData {
  const content: React.ReactNode = (
    <div className="space-y-1">
      {metrics.map((metric) => {
        let formattedValue: string
        switch (metric.format) {
          case 'currency':
            formattedValue = `AED ${metric.value.toFixed(2)}`
            break
          case 'percent':
            formattedValue = `${metric.value.toFixed(1)}%`
            break
          default:
            formattedValue = d3.format(',.0f')(metric.value)
        }

        return (
          <div key={metric.label} className="flex justify-between gap-4">
            <span className="opacity-70">{metric.label}:</span>
            <span className="font-semibold" style={{ color: metric.color }}>
              {formattedValue}
            </span>
          </div>
        )
      })}
    </div>
  )

  return {
    title,
    content,
  }
}

// ============================================================================
// TOOLTIP PROVIDER
// ============================================================================

interface TooltipContextValue {
  showTooltip: (data: TooltipData, position: TooltipPosition) => void
  hideTooltip: () => void
}

const TooltipContext = React.createContext<TooltipContextValue | null>(null)

export interface VisualizationTooltipProviderProps {
  children: React.ReactNode
  theme?: 'light' | 'dark' | 'glass'
  delay?: number
  maxWidth?: number
}

/**
 * VisualizationTooltipProvider - Context provider for tooltips
 *
 * Wraps the application to provide tooltip functionality
 * to all child components.
 *
 * @example
 * <VisualizationTooltipProvider theme="glass">
 *   <App />
 * </VisualizationTooltipProvider>
 */
export function VisualizationTooltipProvider({
  children,
  theme = 'glass',
  delay = 150,
  maxWidth = 300,
}: VisualizationTooltipProviderProps) {
  const tooltip = useTooltip()

  const contextValue: TooltipContextValue = React.useMemo(
    () => ({
      showTooltip: tooltip.showTooltip,
      hideTooltip: tooltip.hideTooltip,
    }),
    [tooltip.showTooltip, tooltip.hideTooltip]
  )

  return (
    <TooltipContext.Provider value={contextValue}>
      {children}
      <VisualizationTooltip
        visible={tooltip.tooltipVisible}
        position={tooltip.tooltipPosition || undefined}
        data={tooltip.tooltipData || undefined}
        theme={theme}
        delay={delay}
        maxWidth={maxWidth}
      />
    </TooltipContext.Provider>
  )
}

/**
 * useTooltipContext - Hook to access tooltip context
 *
 * Provides access to the global tooltip context
 * for components that need to show tooltips.
 *
 * @example
 * const { showTooltip, hideTooltip } = useTooltipContext()
 */
export function useTooltipContext(): TooltipContextValue {
  const context = React.useContext(TooltipContext)
  if (!context) {
    throw new Error('useTooltipContext must be used within VisualizationTooltipProvider')
  }
  return context
}
