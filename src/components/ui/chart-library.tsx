'use client'

/**
 * LITHVIK NEXUS CHART LIBRARY
 * @fileoverview Comprehensive Recharts-based visualization components with design system integration
 * @module components/ui/chart-library
 * @author LITHVIK NEXUS
 * @version 2.0.0
 *
 * @description
 * A complete chart library built on Recharts featuring:
 * - Design system colors (navy, gold, platinum)
 * - Dark mode support
 * - Accessibility features (ARIA labels)
 * - TypeScript type safety
 * - Smooth animations
 * - Custom styled tooltips
 *
 * @example
 * ```tsx
 * import { LineChart, CHART_COLORS } from '@/components/ui/chart-library'
 *
 * <LineChart
 *   data={metrics}
 *   lines={[{ dataKey: 'value', name: 'Users', color: CHART_COLORS.navy }]}
 *   xAxisKey="date"
 *   height={300}
 * />
 * ```
 */

import React from 'react'
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  AreaChart as RechartsAreaChart,
  Area,
  RadarChart as RechartsRadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ReferenceLine,
} from 'recharts'
import { cn } from '@/lib/utils'

/**
 * Design system color palette for charts
 * @constant {Object}
 * @property {string} primary - Primary color (sky blue)
 * @property {string} navy - Navy blue (design system primary)
 * @property {string} gold - Gold (design system accent)
 * @property {string} platinum - Platinum (design system neutral)
 * @property {string} success - Success/green
 * @property {string} warning - Warning/amber
 * @property {string} danger - Danger/red
 */
export const CHART_COLORS = {
  primary: '#0ea5e9',      // sky-500
  secondary: '#8b5cf6',    // violet-500
  success: '#22c55e',      // green-500
  warning: '#f59e0b',      // amber-500
  danger: '#ef4444',       // red-500
  info: '#06b6d4',         // cyan-500
  purple: '#a855f7',       // purple-500
  pink: '#ec4899',         // pink-500
  orange: '#f97316',       // orange-500
  teal: '#14b8a6',         // teal-500
  denim: '#3b82f6',        // blue-500
  rose: '#f43f5e',         // rose-500
  gold: '#F59E0B',         // gold-500 (design system)
  lime: '#84cc16',         // lime-500
  emerald: '#10b981',      // emerald-500
  indigo: '#6366f1',       // indigo-500
  fuchsia: '#d946ef',      // fuchsia-500
  navy: '#6366F1',         // navy-500 (design system)
  platinum: '#64748B',     // platinum-500 (design system)
} as const

export type ChartColor = keyof typeof CHART_COLORS

/**
 * Custom tooltip component with glass morphism styling
 * @component
 */
interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{
    name: string
    value: number | string
    color?: string
  }>
  label?: string | number
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="bg-navy-900/95 dark:bg-navy-950/95 backdrop-blur-sm border border-platinum-700 dark:border-platinum-600 rounded-lg p-3 shadow-xl animate-in fade-in zoom-in-95"
        role="tooltip"
      >
        {label && <p className="text-platinum-300 dark:text-platinum-400 text-sm mb-2 font-medium">{label}</p>}
        {payload.map((entry, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded-full ring-2 ring-white/20"
              style={{ backgroundColor: entry.color }}
              aria-hidden="true"
            />
            <span className="text-platinum-300 dark:text-platinum-400">{entry.name}:</span>
            <span className="text-white dark:text-platinum-100 font-semibold tabular-nums">{entry.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

/**
 * Line configuration for LineChart
 */
export interface LineConfig {
  /** Data key to map to Y-axis values */
  dataKey: string
  /** Legend display name */
  name: string
  /** Line color (defaults to palette rotation) */
  color?: string
  /** Line stroke width in pixels */
  strokeWidth?: number
  /** Curve interpolation type */
  curveType?: 'monotone' | 'linear' | 'step' | 'stepBefore' | 'stepAfter'
  /** Show/hide data points */
  showDots?: boolean
  /** Dot radius */
  dotRadius?: number
  /** Active dot radius */
  activeDotRadius?: number
}

/**
 * Reference line configuration
 */
export interface ReferenceLineConfig {
  /** Y-axis value for the reference line */
  value: number
  /** Optional label for the reference line */
  label?: string
  /** Line color (defaults to warning color) */
  color?: string
  /** Line dash pattern */
  strokeDasharray?: string
}

/**
 * Props for LineChart component
 */
export interface LineChartProps {
  /** Array of data objects containing chart values */
  data: any[]
  /** Array of line configurations */
  lines: LineConfig[]
  /** Key to use for X-axis labels */
  xAxisKey?: string
  /** Chart height in pixels */
  height?: number
  /** Show/hide grid lines */
  showGrid?: boolean
  /** Show/hide legend */
  showLegend?: boolean
  /** Show/hide tooltip */
  showTooltip?: boolean
  /** Optional reference lines */
  referenceLines?: ReferenceLineConfig[]
  /** Additional CSS classes */
  className?: string
  /** Accessible label for screen readers */
  ariaLabel?: string
}

// ============================================================================
// LINE CHART
// ============================================================================

/**
 * LineChart - Multi-line chart with optional reference lines
 *
 * @description
 * Displays one or more data series as connected lines with optional reference lines
 * for thresholds, targets, or averages.
 *
 * @example
 * ```tsx
 * <LineChart
 *   data={metrics}
 *   lines={[
 *     { dataKey: 'users', name: 'Active Users', color: CHART_COLORS.navy, curveType: 'monotone' },
 *     { dataKey: 'sessions', name: 'Sessions', color: CHART_COLORS.gold }
 *   ]}
 *   xAxisKey="date"
 *   referenceLines={[{ value: 1000, label: 'Target', color: CHART_COLORS.warning }]}
 *   height={300}
 *   ariaLabel="User engagement over time"
 * />
 * ```
 */
export function LineChart({
  data,
  lines,
  xAxisKey = 'name',
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  referenceLines,
  className,
  ariaLabel,
}: LineChartProps) {
  return (
    <div
      className={cn('w-full', className)}
      role="img"
      aria-label={ariaLabel || 'Line chart'}
    >
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#334155" className="dark:stroke-platinum-700/30" />}
          <XAxis
            dataKey={xAxisKey}
            stroke="#94a3b8"
            className="dark:stroke-platinum-500"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#94a3b8"
            className="dark:stroke-platinum-500"
            style={{ fontSize: '12px' }}
          />
          {showTooltip && <Tooltip content={<CustomTooltip />} />}
          {showLegend && <Legend wrapperStyle={{ fontSize: '12px' }} />}
          {referenceLines?.map((line, i) => (
            <ReferenceLine
              key={i}
              x={undefined}
              y={line.value}
              stroke={line.color || CHART_COLORS.warning}
              label={line.label}
              strokeDasharray={line.strokeDasharray || '5 5'}
            />
          ))}
          {lines.map((lineConfig, index) => (
            <Line
              key={index}
              type={lineConfig.curveType || 'monotone'}
              dataKey={lineConfig.dataKey}
              name={lineConfig.name}
              stroke={lineConfig.color || Object.values(CHART_COLORS)[index % Object.values(CHART_COLORS).length]}
              strokeWidth={lineConfig.strokeWidth || 2}
              dot={lineConfig.showDots === false ? false : { r: lineConfig.dotRadius || 4 }}
              activeDot={{ r: lineConfig.activeDotRadius || 6 }}
              className="transition-all duration-300"
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

/**
 * Bar configuration for BarChart
 */
export interface BarConfig {
  /** Data key to map to bar values */
  dataKey: string
  /** Legend display name */
  name: string
  /** Bar fill color (defaults to palette rotation) */
  color?: string
}

/**
 * Props for BarChart component
 */
export interface BarChartProps {
  /** Array of data objects containing chart values */
  data: any[]
  /** Array of bar configurations */
  bars: BarConfig[]
  /** Key to use for X-axis labels */
  xAxisKey?: string
  /** Display as horizontal bars */
  horizontal?: boolean
  /** Chart height in pixels */
  height?: number
  /** Show/hide grid lines */
  showGrid?: boolean
  /** Show/hide legend */
  showLegend?: boolean
  /** Show/hide tooltip */
  showTooltip?: boolean
  /** Stack bars on top of each other */
  stacked?: boolean
  /** Additional CSS classes */
  className?: string
  /** Accessible label for screen readers */
  ariaLabel?: string
}

// ============================================================================
// BAR CHART
// ============================================================================

/**
 * BarChart - Vertical or horizontal bar chart with stacking support
 *
 * @description
 * Displays categorical data as bars. Supports horizontal orientation,
 * stacking multiple series, and custom colors.
 *
 * @example
 * ```tsx
 * <BarChart
 *   data={sales}
 *   bars={[
 *     { dataKey: 'q1', name: 'Q1', color: CHART_COLORS.navy },
 *     { dataKey: 'q2', name: 'Q2', color: CHART_COLORS.gold }
 *   ]}
 *   xAxisKey="region"
 *   stacked={true}
 *   ariaLabel="Sales by region"
 * />
 * ```
 */
export function BarChart({
  data,
  bars,
  xAxisKey = 'name',
  horizontal = false,
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  stacked = false,
  className,
  ariaLabel,
}: BarChartProps) {
  const ChartComponent = RechartsBarChart

  return (
    <div
      className={cn('w-full', className)}
      role="img"
      aria-label={ariaLabel || 'Bar chart'}
    >
      <ResponsiveContainer width="100%" height={height}>
        <ChartComponent
          data={data}
          layout={horizontal ? 'vertical' : 'horizontal'}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#334155" className="dark:stroke-platinum-700/30" />}
          <XAxis
            dataKey={horizontal ? undefined : xAxisKey}
            type={horizontal ? 'number' : 'category'}
            stroke="#94a3b8"
            className="dark:stroke-platinum-500"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            dataKey={horizontal ? xAxisKey : undefined}
            type={horizontal ? 'category' : 'number'}
            stroke="#94a3b8"
            className="dark:stroke-platinum-500"
            style={{ fontSize: '12px' }}
          />
          {showTooltip && <Tooltip content={<CustomTooltip />} />}
          {showLegend && <Legend wrapperStyle={{ fontSize: '12px' }} />}
          {bars.map((barConfig, index) => (
            <Bar
              key={index}
              dataKey={barConfig.dataKey}
              name={barConfig.name}
              fill={barConfig.color || Object.values(CHART_COLORS)[index % Object.values(CHART_COLORS).length]}
              stackId={stacked ? 'stack' : undefined}
              radius={[4, 4, 0, 0]}
              className="transition-all duration-300 hover:opacity-80"
            />
          ))}
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  )
}

/**
 * Area configuration for AreaChart
 */
export interface AreaConfig {
  /** Data key to map to area values */
  dataKey: string
  /** Legend display name */
  name: string
  /** Area color (defaults to palette rotation) */
  color?: string
  /** Fill opacity (0-1) */
  fillOpacity?: number
}

/**
 * Props for AreaChart component
 */
export interface AreaChartProps {
  /** Array of data objects containing chart values */
  data: any[]
  /** Array of area configurations */
  areas: AreaConfig[]
  /** Key to use for X-axis labels */
  xAxisKey?: string
  /** Chart height in pixels */
  height?: number
  /** Show/hide grid lines */
  showGrid?: boolean
  /** Show/hide legend */
  showLegend?: boolean
  /** Show/hide tooltip */
  showTooltip?: boolean
  /** Stack areas on top of each other */
  stacked?: boolean
  /** Additional CSS classes */
  className?: string
  /** Accessible label for screen readers */
  ariaLabel?: string
}

// ============================================================================
// AREA CHART
// ============================================================================

/**
 * AreaChart - Filled area chart with stacking support
 *
 * @description
 * Displays data series as filled areas with semi-transparent gradients.
 * Ideal for showing volume or cumulative quantities.
 *
 * @example
 * ```tsx
 * <AreaChart
 *   data={traffic}
 *   areas={[
 *     { dataKey: 'organic', name: 'Organic', color: CHART_COLORS.navy, fillOpacity: 0.6 },
 *     { dataKey: 'paid', name: 'Paid', color: CHART_COLORS.gold, fillOpacity: 0.6 }
 *   ]}
 *   xAxisKey="date"
 *   stacked={true}
 *   ariaLabel="Traffic sources over time"
 * />
 * ```
 */
export function AreaChart({
  data,
  areas,
  xAxisKey = 'name',
  height = 300,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  stacked = false,
  className,
  ariaLabel,
}: AreaChartProps) {
  return (
    <div
      className={cn('w-full', className)}
      role="img"
      aria-label={ariaLabel || 'Area chart'}
    >
      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#334155" className="dark:stroke-platinum-700/30" />}
          <XAxis
            dataKey={xAxisKey}
            stroke="#94a3b8"
            className="dark:stroke-platinum-500"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#94a3b8"
            className="dark:stroke-platinum-500"
            style={{ fontSize: '12px' }}
          />
          {showTooltip && <Tooltip content={<CustomTooltip />} />}
          {showLegend && <Legend wrapperStyle={{ fontSize: '12px' }} />}
          {areas.map((areaConfig, index) => (
            <Area
              key={index}
              type="monotone"
              dataKey={areaConfig.dataKey}
              name={areaConfig.name}
              stroke={areaConfig.color || Object.values(CHART_COLORS)[index % Object.values(CHART_COLORS).length]}
              fill={areaConfig.color || Object.values(CHART_COLORS)[index % Object.values(CHART_COLORS).length]}
              fillOpacity={areaConfig.fillOpacity || 0.6}
              stackId={stacked ? 'stack' : undefined}
              className="transition-all duration-300"
            />
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

/**
 * Pie chart data point
 */
export interface PieDataPoint {
  /** Category name */
  name: string
  /** Numeric value */
  value: number
  /** Custom color (overrides default palette) */
  color?: string
}

/**
 * Props for PieChart component
 */
export interface PieChartProps {
  /** Array of data points for the pie */
  data: PieDataPoint[]
  /** Display as donut chart */
  donut?: boolean
  /** Chart height in pixels */
  height?: number
  /** Show/hide legend */
  showLegend?: boolean
  /** Show/hide tooltip */
  showTooltip?: boolean
  /** Inner radius (overrides donut default) */
  innerRadius?: number
  /** Outer radius */
  outerRadius?: number
  /** Additional CSS classes */
  className?: string
  /** Accessible label for screen readers */
  ariaLabel?: string
}

// ============================================================================
// PIE / DONUT CHART
// ============================================================================

/**
 * PieChart - Pie or donut chart for proportional data
 *
 * @description
 * Displays categorical data as slices of a circle. Donut mode creates
 * a hollow center for a cleaner, modern look.
 *
 * @example
 * ```tsx
 * <PieChart
 *   data={[
 *     { name: 'Desktop', value: 400, color: CHART_COLORS.navy },
 *     { name: 'Mobile', value: 300, color: CHART_COLORS.gold },
 *     { name: 'Tablet', value: 100, color: CHART_COLORS.platinum }
 *   ]}
 *   donut={true}
 *   ariaLabel="Device distribution"
 * />
 * ```
 */
export function PieChart({
  data,
  donut = false,
  height = 300,
  showLegend = true,
  showTooltip = true,
  className,
  innerRadius = donut ? 60 : 0,
  outerRadius = 100,
  ariaLabel,
}: PieChartProps) {
  return (
    <div
      className={cn('w-full', className)}
      role="img"
      aria-label={ariaLabel || 'Pie chart'}
    >
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }: { name: string; percent: number }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
            labelLine={false}
            className="transition-all duration-300 hover:opacity-90"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color || Object.values(CHART_COLORS)[index % Object.values(CHART_COLORS).length]}
              />
            ))}
          </Pie>
          {showTooltip && <Tooltip content={<CustomTooltip />} />}
          {showLegend && <Legend wrapperStyle={{ fontSize: '12px' }} />}
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}

/**
 * Radar/metric configuration for RadarChart
 */
export interface RadarMetricConfig {
  /** Data key to map to radar values */
  dataKey: string
  /** Legend display name */
  name: string
  /** Radar line color (defaults to palette rotation) */
  color?: string
}

/**
 * Props for RadarChart component
 */
export interface RadarChartProps {
  /** Array of data objects containing chart values */
  data: any[]
  /** Array of metric configurations */
  metrics: RadarMetricConfig[]
  /** Chart height in pixels */
  height?: number
  /** Show/hide grid lines */
  showGrid?: boolean
  /** Show/hide legend */
  showLegend?: boolean
  /** Show/hide tooltip */
  showTooltip?: boolean
  /** Additional CSS classes */
  className?: string
  /** Accessible label for screen readers */
  ariaLabel?: string
}

// ============================================================================
// RADAR CHART
// ============================================================================

/**
 * RadarChart - Spider/radar chart for multi-dimensional comparison
 *
 * @description
 * Displays multiple metrics on a polar coordinate system. Ideal for comparing
 * performance across multiple dimensions or categories.
 *
 * @example
 * ```tsx
 * <RadarChart
 *   data={[
 *     { name: 'Speed', current: 80, target: 90 },
 *     { name: 'Quality', current: 85, target: 85 },
 *     { name: 'Cost', current: 70, target: 80 }
 *   ]}
 *   metrics={[
 *     { dataKey: 'current', name: 'Current', color: CHART_COLORS.navy },
 *     { dataKey: 'target', name: 'Target', color: CHART_COLORS.gold }
 *   ]}
 *   ariaLabel="Performance metrics comparison"
 * />
 * ```
 */
export function RadarChart({
  data,
  metrics,
  height = 400,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  className,
  ariaLabel,
}: RadarChartProps) {
  return (
    <div
      className={cn('w-full', className)}
      role="img"
      aria-label={ariaLabel || 'Radar chart'}
    >
      <ResponsiveContainer width="100%" height={height}>
        <RechartsRadarChart data={data} margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
          {showGrid && <PolarGrid stroke="#334155" className="dark:stroke-platinum-700/30" />}
          <PolarAngleAxis
            dataKey="name"
            stroke="#94a3b8"
            className="dark:stroke-platinum-500"
            style={{ fontSize: '11px' }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            stroke="#94a3b8"
            className="dark:stroke-platinum-500"
            style={{ fontSize: '10px' }}
          />
          {showTooltip && <Tooltip content={<CustomTooltip />} />}
          {showLegend && <Legend wrapperStyle={{ fontSize: '12px' }} />}
          {metrics.map((metric, index) => (
            <Radar
              key={index}
              name={metric.name}
              dataKey={metric.dataKey}
              stroke={metric.color || Object.values(CHART_COLORS)[index % Object.values(CHART_COLORS).length]}
              fill={metric.color || Object.values(CHART_COLORS)[index % Object.values(CHART_COLORS).length]}
              fillOpacity={0.5}
              strokeWidth={2}
              className="transition-all duration-300"
            />
          ))}
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  )
}

/**
 * Props for Sparkline component
 */
export interface SparklineProps {
  /** Array of numeric values to plot */
  data: number[]
  /** Chart width in pixels */
  width?: number
  /** Chart height in pixels */
  height?: number
  /** Line/fill color */
  color?: string
  /** Show filled area under line */
  showArea?: boolean
  /** Additional CSS classes */
  className?: string
  /** Accessible label for screen readers */
  ariaLabel?: string
}

// ============================================================================
// SPARKLINE (Mini Chart)
// ============================================================================

/**
 * Sparkline - Miniature line/area chart for inline trend display
 *
 * @description
 * A compact chart perfect for displaying trends in tables, cards, or
 * alongside metrics without taking up much space.
 *
 * @example
 * ```tsx
 * <Sparkline
 *   data={[12, 19, 15, 25, 22, 30, 28]}
 *   color={CHART_COLORS.success}
 *   showArea={true}
 *   width={100}
 *   height={40}
 *   ariaLabel="Positive trend"
 * />
 * ```
 */
export function Sparkline({
  data,
  width = 100,
  height = 40,
  color = CHART_COLORS.primary,
  showArea = true,
  className,
  ariaLabel,
}: SparklineProps) {
  const chartData = data.map((value, index) => ({ index, value }))

  return (
    <div
      className={cn('inline-block', className)}
      role="img"
      aria-label={ariaLabel || 'Sparkline chart'}
    >
      <ResponsiveContainer width={width} height={height}>
        <RechartsAreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.3} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          {showArea && (
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              fill={`url(#gradient-${color})`}
              strokeWidth={1.5}
              className="transition-all duration-300"
            />
          )}
          {!showArea && (
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={1.5}
              dot={false}
              activeDot={false}
              className="transition-all duration-300"
            />
          )}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

/**
 * Props for Gauge component
 */
export interface GaugeProps {
  /** Current value (0 to max) */
  value: number
  /** Maximum value (defaults to 100) */
  max?: number
  /** Optional label to display below value */
  label?: string
  /** Chart height in pixels */
  height?: number
  /** Gauge color */
  color?: string
  /** Show/hide numeric value */
  showValue?: boolean
  /** Additional CSS classes */
  className?: string
  /** Accessible label for screen readers */
  ariaLabel?: string
}

// ============================================================================
// PROGRESS GAUGE
// ============================================================================

/**
 * Gauge - Semi-circular progress indicator
 *
 * @description
 * Displays progress or completion as a semi-circular gauge. Perfect for
 * dashboards, KPIs, and progress tracking.
 *
 * @example
 * ```tsx
 * <Gauge
 *   value={75}
 *   max={100}
 *   label="Completion"
 *   color={CHART_COLORS.gold}
 *   showValue={true}
 *   ariaLabel="Project completion: 75 percent"
 * />
 * ```
 */
export function Gauge({
  value,
  max = 100,
  label,
  height = 200,
  color = CHART_COLORS.primary,
  showValue = true,
  className,
  ariaLabel,
}: GaugeProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  const data = [
    { name: 'Progress', value: percentage, color },
    { name: 'Remaining', value: 100 - percentage, color: '#334155' },
  ]

  return (
    <div
      className={cn('w-full flex flex-col items-center relative', className)}
      role="img"
      aria-label={ariaLabel || `Gauge showing ${value} out of ${max}`}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={0}
            dataKey="value"
            className="transition-all duration-500"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
      <div className="absolute bottom-0 text-center">
        {showValue && (
          <div className="text-3xl font-bold text-navy-900 dark:text-platinum-100 tabular-nums">
            {value}
          </div>
        )}
        {label && <div className="text-sm text-platinum-500 dark:text-platinum-500">{label}</div>}
      </div>
    </div>
  )
}

/**
 * Heatmap data point
 */
export interface HeatmapDataPoint {
  /** X-axis category */
  x: string
  /** Y-axis category */
  y: string
  /** Cell value (typically 0-100) */
  value: number
}

/**
 * Props for Heatmap component
 */
export interface HeatmapProps {
  /** Array of heatmap data points */
  data: HeatmapDataPoint[]
  /** Label for X-axis */
  xAxisLabel?: string
  /** Label for Y-axis */
  yAxisLabel?: string
  /** Chart height in pixels */
  height?: number
  /** Color scheme for heatmap cells */
  colorScheme?: 'blue' | 'green' | 'red' | 'purple' | 'gold'
  /** Additional CSS classes */
  className?: string
  /** Accessible label for screen readers */
  ariaLabel?: string
}

// ============================================================================
// HEATMAP
// ============================================================================

/**
 * Heatmap - Two-dimensional data density visualization
 *
 * @description
 * Displays data intensity using color saturation on a 2D grid. Perfect for
 * showing activity patterns, correlation matrices, or temporal data.
 *
 * @example
 * ```tsx
 * <Heatmap
 *   data={[
 *     { x: 'Mon', y: '9AM', value: 85 },
 *     { x: 'Mon', y: '10AM', value: 92 },
 *     { x: 'Tue', y: '9AM', value: 78 }
 *   ]}
 *   xAxisLabel="Day of Week"
 *   yAxisLabel="Time"
 *   colorScheme="navy"
 *   ariaLabel="Activity heatmap by day and time"
 * />
 * ```
 */
export function Heatmap({
  data,
  xAxisLabel,
  yAxisLabel,
  height = 300,
  colorScheme = 'blue',
  className,
  ariaLabel,
}: HeatmapProps) {
  const getColor = (value: number) => {
    const schemes = {
      blue: ['#1e3a8a', '#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'],
      green: ['#14532d', '#166534', '#15803d', '#22c55e', '#4ade80', '#86efac'],
      red: ['#7f1d1d', '#b91c1c', '#dc2626', '#ef4444', '#f87171', '#fca5a5'],
      purple: ['#3b0764', '#6b21a8', '#7c3aed', '#8b5cf6', '#a78bfa', '#c4b5fd'],
      gold: ['#78350f', '#92400e', '#b45309', '#d97706', '#f59e0b', '#fbbf24'],
    }
    const normalizedValue = Math.min(Math.max(value / 100, 0), 1)
    const index = Math.floor(normalizedValue * (schemes[colorScheme].length - 1))
    return schemes[colorScheme][index]
  }

  const xValues = [...new Set(data.map((d) => d.x))]
  const yValues = [...new Set(data.map((d) => d.y))]

  return (
    <div
      className={cn('w-full', className)}
      role="img"
      aria-label={ariaLabel || 'Heatmap chart'}
    >
      <div className="flex">
        <div className="w-24 flex-shrink-0" />
        <div
          className="flex-1 grid gap-1"
          style={{ gridTemplateColumns: `repeat(${xValues.length}, minmax(0, 1fr))` }}
        >
          {xValues.map((x) => (
            <div
              key={x}
              className="text-center text-xs text-platinum-500 dark:text-platinum-500 py-2 font-medium"
            >
              {x}
            </div>
          ))}
        </div>
      </div>
      {yValues.map((y) => (
        <div key={y} className="flex">
          <div className="w-24 flex-shrink-0 text-xs text-platinum-500 dark:text-platinum-500 flex items-center justify-end pr-2 font-medium">
            {y}
          </div>
          <div
            className="flex-1 grid gap-1"
            style={{ gridTemplateColumns: `repeat(${xValues.length}, minmax(0, 1fr))` }}
          >
            {xValues.map((x) => {
              const item = data.find((d) => d.x === x && d.y === y)
              return (
                <div
                  key={`${x}-${y}`}
                  className="aspect-square rounded flex items-center justify-center text-xs font-semibold transition-all duration-200 hover:scale-110 hover:shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: item ? getColor(item.value) : '#334155',
                    color: item && item.value > 50 ? 'white' : '#94a3b8',
                  }}
                  title={`${y} × ${x}: ${item?.value || 0}`}
                  tabIndex={0}
                  role="gridcell"
                  aria-label={`${y} and ${x}: ${item?.value || 0}`}
                >
                  {item?.value ?? ''}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  Sparkline,
  Gauge,
  Heatmap,
  CHART_COLORS,
}
