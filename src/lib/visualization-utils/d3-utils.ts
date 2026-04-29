/**
 * D3.js Utility Library
 *
 * Centralized utilities for D3.js visualizations across the platform.
 * Provides consistent scales, formatters, and helper functions.
 */

import * as d3 from 'd3'
import {
  CHART_COLORS,
  PERFORMANCE_COLORS,
  RISK_COLORS,
  SENTIMENT_COLORS,
  PLATFORM_COLORS,
  GEOGRAPHIC_COLORS,
  NARRATIVE_COLORS,
  HEALTHCARE_COLORS,
} from '@/lib/visualization-themes/colors'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type TimeUnit = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'
export type ScaleType = 'linear' | 'log' | 'sqrt' | 'pow' | 'time' | 'band' | 'point' | 'ordinal' | 'sequential' | 'threshold'
export type ColorScheme = 'chart' | 'performance' | 'risk' | 'sentiment' | 'platform' | 'geographic' | 'narrative' | 'healthcare'

// ============================================================================
// COLOR SCALE GENERATORS
// ============================================================================

/**
 * Create a D3 color scale from a color scheme
 */
export function createColorScale(scheme: ColorScheme = 'chart'): d3.ScaleOrdinal<string, string> {
  const colorMap: Record<ColorScheme, string[]> = {
    chart: Object.values(CHART_COLORS),
    performance: Object.values(PERFORMANCE_COLORS),
    risk: Object.values(RISK_COLORS),
    sentiment: Object.values(SENTIMENT_COLORS),
    platform: Object.values(PLATFORM_COLORS),
    geographic: Object.values(GEOGRAPHIC_COLORS),
    narrative: Object.values(NARRATIVE_COLORS),
    healthcare: Object.values(HEALTHCARE_COLORS),
  }

  return d3.scaleOrdinal(colorMap[scheme])
}

/**
 * Create a sequential color scale for continuous values
 */
export function createSequentialScale(
  domain: [number, number],
  colors: string[] = ['#f0f9ff', '#0ea5e9']
): d3.ScaleSequential<string> {
  return d3.scaleSequential()
    .domain(domain)
    .interpolator(d3.interpolateRgb(colors[0], colors[colors.length - 1]))
}

/**
 * Create a diverging color scale (good to bad)
 */
export function createDivergingScale(
  domain: [number, number],
  colors: string[] = ['#ef4444', '#fef3c7', '#22c55e']
): d3.ScaleSequential<string> {
  return d3.scaleSequential()
    .domain(domain)
    .interpolator(d3.interpolateRgb(colors[0], colors[2]))
}

/**
 * Get color for performance level
 */
export function getPerformanceColor(value: number, thresholds = { excellent: 90, good: 75, satisfactory: 60, fair: 40, poor: 20 }): string {
  if (value >= thresholds.excellent) return PERFORMANCE_COLORS.excellent
  if (value >= thresholds.good) return PERFORMANCE_COLORS.good
  if (value >= thresholds.satisfactory) return PERFORMANCE_COLORS.satisfactory
  if (value >= thresholds.fair) return PERFORMANCE_COLORS.fair
  if (value >= thresholds.poor) return PERFORMANCE_COLORS.poor
  return PERFORMANCE_COLORS.critical
}

/**
 * Get color for risk level
 */
export function getRiskColor(value: number, thresholds = { extreme: 90, high: 70, 'medium-high': 50, medium: 30, 'medium-low': 10 }): string {
  if (value >= thresholds.extreme) return RISK_COLORS.extreme
  if (value >= thresholds.high) return RISK_COLORS.high
  if (value >= thresholds['medium-high']) return RISK_COLORS['medium-high']
  if (value >= thresholds.medium) return RISK_COLORS.medium
  if (value >= thresholds['medium-low']) return RISK_COLORS['medium-low']
  return RISK_COLORS.minimal
}

/**
 * Get color for sentiment
 */
export function getSentimentColor(sentiment: keyof typeof SENTIMENT_COLORS): string {
  return SENTIMENT_COLORS[sentiment] || SENTIMENT_COLORS.neutral
}

/**
 * Get platform color
 */
export function getPlatformColor(platform: keyof typeof PLATFORM_COLORS): string {
  return PLATFORM_COLORS[platform] || PLATFORM_COLORS.web
}

/**
 * Get UAE geographic color
 */
export function getGeographicColor(region: keyof typeof GEOGRAPHIC_COLORS): string {
  return GEOGRAPHIC_COLORS[region] || GEOGRAPHIC_COLORS['abu-dhabi']
}

// ============================================================================
// SCALE FACTORIES
// ============================================================================

/**
 * Create a linear scale for numeric values
 */
export function createLinearScale(
  domain: [number, number],
  range: [number, number],
  nice = false
): d3.ScaleLinear<number, number> {
  const scale = d3.scaleLinear().domain(domain).range(range)
  if (nice) scale.nice()
  return scale
}

/**
 * Create a log scale for exponential values
 */
export function createLogScale(
  domain: [number, number],
  range: [number, number]
): d3.ScaleLogarithmic<number, number> {
  return d3.scaleLog().domain(domain).range(range)
}

/**
 * Create a square root scale
 */
export function createSqrtScale(
  domain: [number, number],
  range: [number, number]
): ReturnType<typeof d3.scaleSqrt> {
  return d3.scaleSqrt().domain(domain).range(range)
}

/**
 * Create a power scale with exponent
 */
export function createPowScale(
  domain: [number, number],
  range: [number, number],
  exponent = 2
): ReturnType<typeof d3.scalePow> {
  return d3.scalePow().exponent(exponent).domain(domain).range(range)
}

/**
 * Create a time scale for dates
 */
export function createTimeScale(
  domain: [Date | number, Date | number],
  range: [number, number]
): d3.ScaleTime<number, number> {
  return d3.scaleTime().domain(domain).range(range)
}

/**
 * Create a band scale for categorical data
 */
export function createBandScale(
  domain: string[],
  range: [number, number],
  padding = 0.1
): d3.ScaleBand<string> {
  return d3.scaleBand()
    .domain(domain)
    .range(range)
    .padding(padding)
}

/**
 * Create a point scale for categorical data
 */
export function createPointScale(
  domain: string[],
  range: [number, number],
  padding = 0.5
): d3.ScalePoint<string> {
  return d3.scalePoint()
    .domain(domain)
    .range(range)
    .padding(padding)
}

/**
 * Create a threshold scale for classifying values
 */
export function createThresholdScale(
  domain: number[],
  range: string[]
): d3.ScaleThreshold<number, string> {
  return d3.scaleThreshold(domain as any, range as any)
}

/**
 * Create a quantile scale for distribution-based classification
 */
export function createQuantileScale(
  domain: number[],
  range: string[]
): d3.ScaleQuantile<string> {
  return d3.scaleQuantile(range as any).domain(domain) as any
}

/**
 * Create a quantize scale for equal-sized classification
 */
export function createQuantizeScale(
  domain: [number, number],
  range: string[]
): d3.ScaleQuantize<string> {
  return d3.scaleQuantize().domain(domain).range(range as any) as any
}

// ============================================================================
// FORMATTERS
// ============================================================================

/**
 * Format numbers with commas (e.g., 1,234)
 */
export const formatNumber = d3.format(',')

/**
 * Format numbers with specified precision (e.g., 1,234.57)
 */
export function formatNumberFixed(precision = 2): (n: number) => string {
  return d3.format(`,.${precision}f`)
}

/**
 * Format numbers with abbreviations (e.g., 1.2K, 1.5M, 2.3B)
 */
export function formatNumberAbbreviated(precision = 1): (n: number) => string {
  return d3.format(`.${precision}s`)
}

/**
 * Format percentages (e.g., 45.6%)
 */
export function formatPercent(precision = 1): (n: number) => string {
  return d3.format(`.${precision}%`)
}

/**
 * Format currency in AED (e.g., AED 1,234.56)
 */
export function formatCurrency(precision = 2): (n: number) => string {
  return (n) => `AED ${d3.format(`,.${precision}f`)(n)}`
}

/**
 * Format dates in UAE standard format (DD/MM/YYYY)
 */
export const formatDateUAE = d3.timeFormat('%d/%m/%Y')

/**
 * Format dates in month/year format (Jan 2025)
 */
export const formatDateMonthYear = d3.timeFormat('%b %Y')

/**
 * Format dates in full format (January 15, 2025)
 */
export const formatDateFull = d3.timeFormat('%B %d, %Y')

/**
 * Format dates in ISO format (2025-01-15)
 */
export const formatDateISO = d3.timeFormat('%Y-%m-%d')

/**
 * Format dates in relative time (e.g., "2 days ago", "3 months ago")
 */
export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  return 'Just now'
}

/**
 * Format duration in human-readable format (e.g., "2h 30m", "45s")
 */
export function formatDuration(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}d ${hours % 24}h`
  if (hours > 0) return `${hours}h ${minutes % 60}m`
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`
  return `${seconds}s`
}

/**
 * Format file sizes (e.g., 1.5 MB, 500 KB)
 */
export function formatFileSize(bytes: number): string {
  const kb = bytes / 1024
  const mb = kb / 1024
  const gb = mb / 1024

  if (gb >= 1) return `${gb.toFixed(2)} GB`
  if (mb >= 1) return `${mb.toFixed(2)} MB`
  if (kb >= 1) return `${kb.toFixed(2)} KB`
  return `${bytes} B`
}

/**
 * Format score with rating (e.g., "4.5/5 - Excellent")
 */
export function formatScoreWithRating(score: number, maxScore = 5): string {
  const percentage = (score / maxScore) * 100
  let rating = 'Poor'
  if (percentage >= 90) rating = 'Excellent'
  else if (percentage >= 75) rating = 'Good'
  else if (percentage >= 60) rating = 'Satisfactory'
  else if (percentage >= 40) rating = 'Fair'

  return `${score.toFixed(1)}/${maxScore} - ${rating}`
}

// ============================================================================
// TIME UTILITIES
// ============================================================================

/**
 * Get time interval for a given unit
 */
export function getTimeInterval(unit: TimeUnit): d3.CountableTimeInterval {
  const intervals: Record<TimeUnit, d3.CountableTimeInterval> = {
    second: d3.timeSecond,
    minute: d3.timeMinute,
    hour: d3.timeHour,
    day: d3.timeDay,
    week: d3.timeWeek,
    month: d3.timeMonth,
    quarter: d3.timeMonth.every(3) as d3.CountableTimeInterval,
    year: d3.timeYear,
  }
  return intervals[unit]
}

/**
 * Get UAE-friendly date tick values
 */
export function getDateTicks(scale: d3.ScaleTime<number, number>, count = 10): Date[] {
  return scale.ticks(count)
}

/**
 * Check if a date is a UAE weekend (Friday-Saturday)
 */
export function isUAEWeekend(date: Date): boolean {
  const day = date.getDay()
  return day === 5 || day === 6 // Friday = 5, Saturday = 6
}

/**
 * Get next UAE business day
 */
export function getNextBusinessDay(date: Date): Date {
  const next = new Date(date)
  next.setDate(next.getDate() + 1)
  while (isUAEWeekend(next)) {
    next.setDate(next.getDate() + 1)
  }
  return next
}

/**
 * Get UAE public holidays for a year (simplified)
 */
export function getUAEPublicHolidays(year: number): Array<{ name: string; date: Date }> {
  // Note: These are approximate. Islamic holidays vary by lunar calendar.
  return [
    { name: 'New Year\'s Day', date: new Date(year, 0, 1) },
    { name: 'Eid al-Fitr', date: new Date(year, 4, 13) }, // Approximate
    { name: 'Eid al-Adha', date: new Date(year, 6, 19) }, // Approximate
    { name: 'National Day', date: new Date(year, 11, 2) },
    { name: 'Commemoration Day', date: new Date(year, 10, 30) },
  ]
}

// ============================================================================
// DATA AGGREGATION
// ============================================================================

/**
 * Aggregate data by time interval
 */
export function aggregateByTime<T extends { date: Date | string }>(
  data: T[],
  valueAccessor: (d: T) => number,
  interval: TimeUnit
): Array<{ date: Date; value: number }> {
  const grouped = new Map<string, { date: Date; values: number[] }>()

  data.forEach(d => {
    const date = d.date instanceof Date ? d.date : new Date(d.date)
    const key = getTimeInterval(interval).floor(date).toISOString()
    const value = valueAccessor(d)

    if (!grouped.has(key)) {
      grouped.set(key, { date: getTimeInterval(interval).floor(date), values: [] })
    }
    grouped.get(key)!.values.push(value)
  })

  return Array.from(grouped.values()).map(g => ({
    date: g.date,
    value: d3.mean(g.values) || 0,
  }))
}

/**
 * Aggregate data by category
 */
export function aggregateByCategory<T>(
  data: T[],
  categoryAccessor: (d: T) => string,
  valueAccessor: (d: T) => number
): Array<{ category: string; value: number; count: number }> {
  const grouped = new Map<string, { values: number[] }>()

  data.forEach(d => {
    const category = categoryAccessor(d)
    const value = valueAccessor(d)

    if (!grouped.has(category)) {
      grouped.set(category, { values: [] })
    }
    grouped.get(category)!.values.push(value)
  })

  return Array.from(grouped.entries()).map(([category, g]) => ({
    category,
    value: d3.sum(g.values),
    count: g.values.length,
  }))
}

/**
 * Calculate percentiles
 */
export function calculatePercentiles(values: number[], percentiles: number[] = [0, 25, 50, 75, 100]): number[] {
  const sorted = [...values].sort(d3.ascending)
  return percentiles.map(p => d3.quantile(sorted, p / 100) || 0)
}

/**
 * Calculate rolling average
 */
export function calculateRollingAverage(data: Array<{ date: Date; value: number }>, windowSize = 7): Array<{ date: Date; value: number }> {
  return data.map((d, i) => {
    const start = Math.max(0, i - Math.floor(windowSize / 2))
    const end = Math.min(data.length, i + Math.ceil(windowSize / 2))
    const window = data.slice(start, end)
    return {
      date: d.date,
      value: d3.mean(window, d => d.value) || 0,
    }
  })
}

/**
 * Calculate growth rate
 */
export function calculateGrowthRate(current: number, previous: number): number {
  if (previous === 0) return current > 0 ? 100 : 0
  return ((current - previous) / previous) * 100
}

/**
 * Calculate compound annual growth rate (CAGR)
 */
export function calculateCAGR(startValue: number, endValue: number, years: number): number {
  if (startValue <= 0 || years <= 0) return 0
  return (Math.pow(endValue / startValue, 1 / years) - 1) * 100
}

// ============================================================================
// STATISTICAL UTILITIES
// ============================================================================

/**
 * Calculate basic statistics for a dataset
 */
export function calculateStatistics(values: number[]): {
  count: number
  min: number
  max: number
  mean: number
  median: number
  mode: number | null
  standardDeviation: number
  variance: number
  q1: number
  q3: number
  iqr: number
} {
  const sorted = [...values].sort(d3.ascending)
  const mean = d3.mean(sorted) || 0
  const variance = d3.variance(sorted) || 0
  const q1 = d3.quantile(sorted, 0.25) || 0
  const q3 = d3.quantile(sorted, 0.75) || 0

  return {
    count: sorted.length,
    min: d3.min(sorted) || 0,
    max: d3.max(sorted) || 0,
    mean,
    median: d3.median(sorted) || 0,
    mode: null, // D3 doesn't have mode, requires custom implementation
    standardDeviation: Math.sqrt(variance),
    variance,
    q1,
    q3,
    iqr: q3 - q1,
  }
}

/**
 * Detect outliers using IQR method
 */
export function detectOutliers(values: number[]): { outliers: number[]; threshold: { lower: number; upper: number } } {
  const stats = calculateStatistics(values)
  const iqrMultiplier = 1.5
  const lowerThreshold = stats.q1 - (iqrMultiplier * stats.iqr)
  const upperThreshold = stats.q3 + (iqrMultiplier * stats.iqr)

  const outliers = values.filter(v => v < lowerThreshold || v > upperThreshold)

  return { outliers, threshold: { lower: lowerThreshold, upper: upperThreshold } }
}

/**
 * Calculate correlation coefficient (Pearson)
 */
export function calculateCorrelation(xValues: number[], yValues: number[]): number {
  if (xValues.length !== yValues.length || xValues.length === 0) return 0

  const n = xValues.length
  const meanX = d3.mean(xValues) || 0
  const meanY = d3.mean(yValues) || 0

  let numerator = 0
  let sumSqX = 0
  let sumSqY = 0

  for (let i = 0; i < n; i++) {
    const deltaX = xValues[i] - meanX
    const deltaY = yValues[i] - meanY
    numerator += deltaX * deltaY
    sumSqX += deltaX * deltaX
    sumSqY += deltaY * deltaY
  }

  const denominator = Math.sqrt(sumSqX * sumSqY)
  return denominator === 0 ? 0 : numerator / denominator
}

// ============================================================================
// GEOMETRY & PATH GENERATORS
// ============================================================================

/**
 * Create a line generator for time series
 */
export function createTimeSeriesLine(xScale: d3.ScaleTime<number, number>, yScale: d3.ScaleLinear<number, number>): d3.Line<{ date: Date; value: number }> {
  return d3.line<{ date: Date; value: number }>()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    .curve(d3.curveMonotoneX)
}

/**
 * Create an area generator for time series
 */
export function createTimeSeriesArea(xScale: d3.ScaleTime<number, number>, yScale: d3.ScaleLinear<number, number>): d3.Area<{ date: Date; value: number }> {
  return d3.area<{ date: Date; value: number }>()
    .x(d => xScale(d.date))
    .y0(d => yScale(0))
    .y1(d => yScale(d.value))
    .curve(d3.curveMonotoneX)
}

/**
 * Create a radial line generator
 */
export function createRadialLine(angleScale: d3.ScaleLinear<number, number>, radiusScale: d3.ScaleLinear<number, number>): ReturnType<typeof d3.lineRadial> {
  return d3.lineRadial()
    .angle((_: any, i: number) => angleScale(i))
    .radius((d: any) => radiusScale(d.value))
    .curve(d3.curveCardinalClosed) as any
}

// ============================================================================
// TRANSITION & ANIMATION UTILITIES
// ============================================================================

/**
 * Create a smooth transition with default settings
 */
export function createTransition(
  selection: d3.Selection<any, any, any, any>,
  duration = 750
): d3.Transition<any, any, any, any> {
  return selection.transition().duration(duration).ease(d3.easeCubicOut)
}

/**
 * Animate path drawing (stroke-dasharray trick)
 */
export function animatePathDrawing(
  selection: d3.Selection<SVGPathElement, any, any, any>,
  duration = 1000
): void {
  const path = selection.node()
  if (!path) return

  const length = path.getTotalLength()
  selection
    .attr('stroke-dasharray', `${length},${length}`)
    .attr('stroke-dashoffset', length)
    .transition()
    .duration(duration)
    .ease(d3.easeCubicOut)
    .attr('stroke-dashoffset', 0)
}

/**
 * Animate bar growth
 */
export function animateBarGrowth(
  selection: d3.Selection<SVGRectElement, any, any, any>,
  targetHeight: number,
  duration = 750
): void {
  selection
    .attr('height', 0)
    .transition()
    .duration(duration)
    .ease(d3.easeCubicOut)
    .attr('height', targetHeight)
}

// ============================================================================
// ACCESSIBILITY UTILITIES
// ============================================================================

/**
 * Generate accessible title for SVG elements
 */
export function generateAccessibleTitle(
  type: string,
  dataSummary: { count?: number; range?: [number, number]; categories?: string[] }
): string {
  const parts: string[] = [type]

  if (dataSummary.count !== undefined) {
    parts.push(`with ${dataSummary.count} data points`)
  }

  if (dataSummary.range) {
    parts.push(`ranging from ${formatNumber(dataSummary.range[0])} to ${formatNumber(dataSummary.range[1])}`)
  }

  if (dataSummary.categories && dataSummary.categories.length > 0) {
    parts.push(`across ${dataSummary.categories.length} categories`)
  }

  return parts.join(' ')
}

/**
 * Generate ARIA description for screen readers
 */
export function generateARIADescription(
  type: string,
  insights: string[]
): string {
  return `${type} visualization showing: ${insights.join('; ')}`
}

// ============================================================================
// EXPORT SHORTCUTS
// ============================================================================

export const d3utils = {
  // Color scales
  createColorScale,
  createSequentialScale,
  createDivergingScale,
  getPerformanceColor,
  getRiskColor,
  getSentimentColor,
  getPlatformColor,
  getGeographicColor,

  // Scale factories
  createLinearScale,
  createLogScale,
  createSqrtScale,
  createPowScale,
  createTimeScale,
  createBandScale,
  createPointScale,
  createThresholdScale,
  createQuantileScale,
  createQuantizeScale,

  // Formatters
  formatNumber,
  formatNumberFixed,
  formatNumberAbbreviated,
  formatPercent,
  formatCurrency,
  formatDateUAE,
  formatDateMonthYear,
  formatDateFull,
  formatDateISO,
  formatRelativeTime,
  formatDuration,
  formatFileSize,
  formatScoreWithRating,

  // Time utilities
  getTimeInterval,
  getDateTicks,
  isUAEWeekend,
  getNextBusinessDay,
  getUAEPublicHolidays,

  // Data aggregation
  aggregateByTime,
  aggregateByCategory,
  calculatePercentiles,
  calculateRollingAverage,
  calculateGrowthRate,
  calculateCAGR,

  // Statistics
  calculateStatistics,
  detectOutliers,
  calculateCorrelation,

  // Geometry
  createTimeSeriesLine,
  createTimeSeriesArea,
  createRadialLine,

  // Transitions
  createTransition,
  animatePathDrawing,
  animateBarGrowth,

  // Accessibility
  generateAccessibleTitle,
  generateARIADescription,
}
