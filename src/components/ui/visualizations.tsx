'use client'

/**
 * LITHVIK NEXUS ADVANCED VISUALIZATIONS
 * D3.js-based advanced chart components
 */

import React from 'react'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from './chart-library'
import * as d3 from 'd3'

// ============================================================================
// HORIZON CHART
// ============================================================================

export interface HorizonChartSeries {
  label: string
  values: number[]
}

export interface HorizonChartDataPoint {
  date?: Date | string
  value: number
  category?: string
}

export interface HorizonChartProps {
  data: HorizonChartSeries[] | HorizonChartDataPoint[]
  height?: number
  width?: number
  bands?: number
  colors?: string[]
  className?: string
}

export function HorizonChart({
  data,
  height = 200,
  width = 800,
  bands = 3,
  colors = Object.values(CHART_COLORS),
  className,
}: HorizonChartProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  // Normalize data format
  const normalizedSeries = React.useMemo(() => {
    // Check if data is in the alternate format (array of objects with date/value)
    if (data.length > 0 && 'values' in data[0] === false) {
      const altData = data as HorizonChartDataPoint[]
      // Group by category
      const grouped = new Map<string, number[]>()
      altData.forEach(d => {
        const cat = d.category || 'default'
        if (!grouped.has(cat)) {
          grouped.set(cat, [])
        }
        grouped.get(cat)!.push(d.value)
      })
      return Array.from(grouped.entries()).map(([label, values]) => ({ label, values }))
    }
    return data as HorizonChartSeries[]
  }, [data])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const canvasWidth = width
    const bandHeight = height / bands

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, height)

    normalizedSeries.forEach((series, seriesIndex) => {
      const maxValue = Math.max(...series.values, 1)
      const color = colors[seriesIndex % colors.length]

      series.values.forEach((value, valueIndex) => {
        const x = (valueIndex / (series.values.length - 1 || 1)) * canvasWidth

        for (let band = 0; band < bands; band++) {
          const threshold = maxValue / bands
          const bandValue = value - band * threshold

          if (bandValue > 0) {
            const y = band * bandHeight
            const h = Math.min((bandValue / threshold) * bandHeight, bandHeight)

            ctx.fillStyle = color
            ctx.globalAlpha = 0.7
            ctx.fillRect(x, y, 2, h)
            ctx.globalAlpha = 1
          }
        }
      })
    })
  }, [normalizedSeries, height, width, colors, bands])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={cn('w-full h-auto', className)}
    />
  )
}

// ============================================================================
// BULLET GRAPH
// ============================================================================

export interface BulletGraphDataItem {
  title?: string
  value: number
  target?: number
  ranges?: Array<{ value: number; color: string }>
}

export interface BulletGraphProps {
  data?: BulletGraphDataItem[]
  value?: number
  target?: number
  max?: number
  ranges?: Array<{ value: number; color: string }>
  title?: string
  height?: number
  width?: number
  showScale?: boolean
  className?: string
}

export function BulletGraph({
  data,
  value,
  target = 80,
  max = 100,
  ranges,
  title,
  height = 40,
  width,
  showScale,
  className,
}: BulletGraphProps) {
  // If data array is provided, render multiple bullet graphs
  if (data && Array.isArray(data)) {
    return (
      <div className={cn('space-y-4', className)}>
        {data.map((item, index) => (
          <BulletGraph
            key={index}
            value={item.value}
            target={item.target}
            ranges={item.ranges}
            title={item.title}
            height={height}
            showScale={showScale}
          />
        ))}
      </div>
    )
  }

  const effectiveValue = value ?? 0
  const defaultRanges = [
    { value: max * 0.3, color: CHART_COLORS.danger },
    { value: max * 0.7, color: CHART_COLORS.warning },
    { value: max, color: CHART_COLORS.success },
  ]

  const effectiveRanges = ranges || defaultRanges

  return (
    <div className={cn('w-full', className)} style={{ width }}>
      {title && <div className="text-sm font-medium mb-2">{title}</div>}
      <div className="relative w-full" style={{ height: `${height}px` }}>
        {/* Background Ranges */}
        <div className="absolute inset-0 flex rounded overflow-hidden">
          {effectiveRanges.map((range, i) => (
            <div
              key={i}
              className="h-full"
              style={{
                width: `${(range.value / max) * 100}%`,
                backgroundColor: range.color,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        {/* Target Marker */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-slate-900"
          style={{ left: `${(target / max) * 100}%` }}
        />

        {/* Value Bar */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-3 rounded bg-slate-900"
          style={{ width: `${(effectiveValue / max) * 100}%` }}
        />

        {/* Scale Labels */}
        {showScale && (
          <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-xs text-slate-400">
            <span>0</span>
            <span>{Math.round(max * 0.25)}</span>
            <span>{Math.round(max * 0.5)}</span>
            <span>{Math.round(max * 0.75)}</span>
            <span>{max}</span>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================================
// WORD CLOUD
// ============================================================================

export interface WordCloudProps {
  data?: Array<{ text: string; value: number; category?: string }>
  words?: Array<{ text: string; value: number }>
  width?: number
  height?: number
  colors?: string[]
  className?: string
}

export function WordCloud({
  data,
  words,
  width = 600,
  height = 400,
  colors = Object.values(CHART_COLORS),
  className,
}: WordCloudProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Normalize input data
  const effectiveWords = React.useMemo(() => {
    if (words) return words
    if (data) return data.map(d => ({ text: d.text, value: d.value }))
    return []
  }, [words, data])

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear previous content
    container.innerHTML = ''

    const maxValue = Math.max(...effectiveWords.map(w => w.value), 1)
    const minValue = Math.min(...effectiveWords.map(w => w.value), 0)

    effectiveWords.forEach((word, index) => {
      const normalizedValue = (word.value - minValue) / (maxValue - minValue + 1)
      const fontSize = 12 + normalizedValue * 36
      const color = colors[index % colors.length]

      const span = document.createElement('span')
      span.textContent = word.text
      span.className = 'inline-block m-2 font-bold cursor-pointer transition-transform hover:scale-110'
      span.style.fontSize = `${fontSize}px`
      span.style.color = color
      span.style.position = 'absolute'
      span.style.left = `${Math.random() * 60 + 20}%`
      span.style.top = `${Math.random() * 60 + 20}%`

      container.appendChild(span)
    })
  }, [effectiveWords, width, height, colors])

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden rounded-lg bg-slate-900/30', className)}
      style={{ width, height }}
    />
  )
}

// ============================================================================
// GAUGE CHART (D3 Version)
// ============================================================================

export interface GaugeChartProps {
  value: number
  min?: number
  max?: number
  label?: string
  height?: number
  color?: string
  className?: string
}

export function GaugeChart({
  value,
  min = 0,
  max = 100,
  label,
  height = 200,
  color = CHART_COLORS.primary,
  className,
}: GaugeChartProps) {
  const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1)

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <svg width={height * 2} height={height} viewBox={`0 0 ${height * 2} ${height}`}>
        <defs>
          <linearGradient id={`gauge-gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity={0.3} />
            <stop offset="100%" stopColor={color} stopOpacity={1} />
          </linearGradient>
        </defs>

        {/* Background Arc */}
        <path
          d={`M ${height * 0.2} ${height * 0.8} A ${height * 0.6} ${height * 0.6} 0 0 1 ${height * 1.8} ${height * 0.8}`}
          fill="none"
          stroke="#334155"
          strokeWidth={height * 0.15}
          strokeLinecap="round"
        />

        {/* Value Arc */}
        <path
          d={`M ${height * 0.2} ${height * 0.8} A ${height * 0.6} ${height * 0.6} 0 0 1 ${height * 1.8} ${height * 0.8}`}
          fill="none"
          stroke={`url(#gauge-gradient-${color})`}
          strokeWidth={height * 0.15}
          strokeLinecap="round"
          strokeDasharray={`${percentage * Math.PI * height * 0.6} ${Math.PI * height * 0.6}`}
          transform={`rotate(-180 ${height} ${height * 0.8})`}
        />
      </svg>

      <div className="absolute bottom-0 text-center">
        <div className="text-4xl font-bold text-white">{value}</div>
        {label && <div className="text-sm text-slate-400">{label}</div>}
      </div>
    </div>
  )
}

// ============================================================================
// RIDGELINE PLOT
// ============================================================================

export interface RidgelinePlotProps {
  data?: Array<{ category: string; value: number }>
  series?: Array<{ name: string; values: number[] }>
  height?: number
  width?: number
  colors?: string[]
  showLabels?: boolean
  className?: string
}

export function RidgelinePlot({
  data,
  series,
  height = 400,
  width = 800,
  colors = Object.values(CHART_COLORS),
  showLabels = true,
  className,
}: RidgelinePlotProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  // Convert data format to series format if needed
  const effectiveSeries = React.useMemo(() => {
    if (series) return series
    if (data) {
      // Group data by category and create values
      const grouped = new Map<string, number[]>()
      data.forEach(d => {
        if (!grouped.has(d.category)) {
          grouped.set(d.category, [])
        }
        grouped.get(d.category)!.push(d.value)
      })
      return Array.from(grouped.entries()).map(([name, values]) => ({ name, values }))
    }
    return []
  }, [data, series])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const canvasWidth = width
    const bandHeight = height / effectiveSeries.length

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, height)

    effectiveSeries.forEach((s, seriesIndex) => {
      const color = colors[seriesIndex % colors.length]
      const y = seriesIndex * bandHeight
      const maxValue = Math.max(...s.values, 1)

      ctx.beginPath()
      ctx.fillStyle = color
      ctx.globalAlpha = 0.6

      s.values.forEach((value, i) => {
        const x = (i / (s.values.length - 1 || 1)) * canvasWidth
        const h = (value / maxValue) * bandHeight * 0.8

        if (i === 0) {
          ctx.moveTo(x, y + bandHeight)
        } else {
          ctx.lineTo(x, y + bandHeight - h)
        }
      })

      for (let i = s.values.length - 1; i >= 0; i--) {
        const x = (i / (s.values.length - 1 || 1)) * canvasWidth
        ctx.lineTo(x, y + bandHeight)
      }

      ctx.closePath()
      ctx.fill()
      ctx.globalAlpha = 1

      // Add label
      if (showLabels) {
        ctx.fillStyle = '#94a3b8'
        ctx.font = '11px sans-serif'
        ctx.fillText(s.name, 10, y + bandHeight - 10)
      }
    })
  }, [effectiveSeries, height, width, colors, showLabels])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={cn('w-full h-auto', className)}
    />
  )
}

// ============================================================================
// NETWORK GRAPH
// ============================================================================

export interface NetworkNode {
  id: string
  label?: string
  group?: number | string
  value?: number
}

export interface NetworkLink {
  source: string | NetworkNode
  target: string | NetworkNode
  value?: number
}

export interface NetworkGraphProps {
  nodes: NetworkNode[]
  links: NetworkLink[]
  width?: number
  height?: number
  colors?: string[] | Record<string, string>
  linkDistance?: number
  nodeRadius?: number
  showLabels?: boolean
  className?: string
}

export function NetworkGraph({
  nodes,
  links,
  width = 600,
  height = 400,
  colors: propColors,
  linkDistance,
  nodeRadius,
  showLabels,
  className,
}: NetworkGraphProps) {
  const svgRef = React.useRef<SVGSVGElement>(null)

  // Convert color object to array if needed
  const colorsArray = React.useMemo(() => {
    if (Array.isArray(propColors)) {
      return propColors
    }
    if (typeof propColors === 'object' && propColors !== null) {
      return Object.values(propColors)
    }
    return Object.values(CHART_COLORS)
  }, [propColors])

  // Create a map of unique group values to numeric indices
  const groupToIndex = React.useMemo(() => {
    const map = new Map<number | string, number>()
    let index = 0
    nodes.forEach(node => {
      if (node.group !== undefined && !map.has(node.group)) {
        map.set(node.group, index++)
      }
    })
    return map
  }, [nodes])

  // For color objects, also create a direct mapping from group to color
  const groupToColor = React.useMemo(() => {
    if (typeof propColors === 'object' && propColors !== null && !Array.isArray(propColors)) {
      const map = new Map<string | number, string>()
      nodes.forEach(node => {
        if (node.group !== undefined && !map.has(node.group)) {
          const colorKey = String(node.group)
          if (colorKey in propColors) {
            map.set(node.group, propColors[colorKey])
          }
        }
      })
      return map
    }
    return null
  }, [propColors, nodes])

  const colors = colorsArray

  // Normalize links to use string IDs only
  const normalizedLinks = React.useMemo(() => {
    return links.map(link => ({
      source: typeof link.source === 'string' ? link.source : link.source.id,
      target: typeof link.target === 'string' ? link.target : link.target.id,
      value: link.value,
    }))
  }, [links])

  React.useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    // Clear previous content
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild)
    }

    // Create force simulation
    const simulation = d3.forceSimulation(nodes as any)
      .force('link', d3.forceLink(normalizedLinks as any).id((d: any) => d.id).distance(linkDistance || 100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))

    // Create SVG elements
    const linkElements = d3.select(svg)
      .selectAll('line')
      .data(normalizedLinks)
      .enter()
      .append('line')
      .attr('stroke', '#475569')
      .attr('stroke-width', 2)

    const nodeElements = d3.select(svg)
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', (d: any) => nodeRadius || Math.sqrt(d.value || 10) * 3)
      .attr('fill', (d: any) => {
        // If we have a direct color mapping for this group, use it
        if (groupToColor && groupToColor.has(d.group)) {
          return groupToColor.get(d.group)!
        }
        // Otherwise use index-based color
        const groupIndex = groupToIndex.get(d.group || 0) ?? 0
        return colors[groupIndex % colors.length]
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')

    // Add labels if requested
    let labelElements: d3.Selection<SVGTextElement, any, any, any> | null = null
    if (showLabels) {
      labelElements = d3.select(svg)
        .selectAll('text')
        .data(nodes)
        .enter()
        .append('text')
        .text((d: any) => d.label || d.id)
        .attr('font-size', '10px')
        .attr('fill', '#94a3b8')
        .attr('text-anchor', 'middle')
        .attr('dy', (d: any) => (nodeRadius || Math.sqrt(d.value || 10) * 3) + 12)
    }

    // Update positions on tick
    simulation.on('tick', () => {
      linkElements
        .attr('x1', (d: any) => (d.source as any).x)
        .attr('y1', (d: any) => (d.source as any).y)
        .attr('x2', (d: any) => (d.target as any).x)
        .attr('y2', (d: any) => (d.target as any).y)

      nodeElements
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y)

      if (labelElements) {
        labelElements
          .attr('x', (d: any) => d.x)
          .attr('y', (d: any) => d.y)
      }
    })
  }, [nodes, normalizedLinks, width, height, colors, groupToIndex, linkDistance, nodeRadius, showLabels, groupToColor])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('bg-slate-900/50 rounded-lg', className)}
    />
  )
}

// ============================================================================
// TREEMAP
// ============================================================================

export interface TreemapNode {
  name: string
  value: number
  color?: string
  children?: TreemapNode[]
}

export interface TreemapProps {
  data: TreemapNode | TreemapNode[]
  width?: number
  height?: number
  colors?: string[]
  showLabels?: boolean
  className?: string
}

export function Treemap({
  data,
  width = 600,
  height = 400,
  colors: propColors,
  showLabels = true,
  className,
}: TreemapProps) {
  const colors = propColors || Object.values(CHART_COLORS)

  // Normalize data to array
  const dataArray = React.useMemo(() => {
    if (Array.isArray(data)) return data
    return [data]
  }, [data])

  const totalValue = React.useMemo(() => {
    const sum = (node: TreemapNode): number => {
      if (node.children) {
        return node.children.reduce((acc, child) => acc + sum(child), 0)
      }
      return node.value
    }
    return dataArray.reduce((acc, node) => acc + sum(node), 0)
  }, [dataArray])

  const renderNode = (
    node: TreemapNode,
    x: number,
    y: number,
    w: number,
    h: number,
    depth = 0
  ): React.ReactNode => {
    const color = node.color || colors[depth % colors.length]
    const opacity = 1 - depth * 0.15

    if (node.children && node.children.length > 0) {
      const childTotal = node.children.reduce((acc, c) => acc + c.value, 0)
      let currentX = x
      let currentY = y

      return (
        <g key={node.name}>
          {node.children.map((child, i) => {
            const ratio = child.value / childTotal
            const isVertical = i % 2 === 0
            const childW = isVertical ? w : w * ratio
            const childH = isVertical ? h * ratio : h

            const result = renderNode(child, currentX, currentY, childW, childH, depth + 1)

            if (isVertical) {
              currentY += childH
            } else {
              currentX += childW
            }

            return result
          })}
        </g>
      )
    }

    const ratio = node.value / totalValue
    const nodeW = w * ratio
    const nodeH = h

    return (
      <g key={node.name}>
        <rect
          x={x}
          y={y}
          width={nodeW}
          height={nodeH}
          fill={color}
          fillOpacity={opacity}
          stroke="#fff"
          strokeWidth={1}
        />
        {showLabels && nodeW > 50 && nodeH > 30 && (
          <text
            x={x + nodeW / 2}
            y={y + nodeH / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xs font-semibold fill-white pointer-events-none"
          >
            {node.name}
          </text>
        )}
      </g>
    )
  }

  return (
    <svg
      width={width}
      height={height}
      className={cn('rounded-lg', className)}
      viewBox={`0 0 ${width} ${height}`}
    >
      {renderNode({ name: 'root', value: totalValue, children: dataArray }, 0, 0, width, height)}
    </svg>
  )
}

// ============================================================================
// DUMBELL PLOT
// ============================================================================

export interface DumbbellPoint {
  label?: string
  category?: string
  before?: number
  after?: number
  value1?: number
  value2?: number
}

export interface DumbbellPlotProps {
  data: DumbbellPoint[]
  height?: number
  width?: number
  color?: string
  color1?: string
  color2?: string
  showLabels?: boolean
  className?: string
}

export function DumbbellPlot({
  data,
  height = 400,
  width = 800,
  color,
  color1,
  color2,
  showLabels = true,
  className,
}: DumbbellPlotProps) {
  // Use color1/color2 if provided, otherwise use color
  const beforeColor = color1 || color || '#94a3b8'
  const afterColor = color2 || color || CHART_COLORS.primary

  // Normalize data to handle both formats
  const normalizedData = React.useMemo(() => {
    return data.map(d => ({
      label: d.label || d.category || '',
      before: d.before ?? d.value1 ?? 0,
      after: d.after ?? d.value2 ?? 0,
    }))
  }, [data])

  const maxValue = Math.max(
    ...normalizedData.map(d => Math.max(d.before, d.after)),
    1
  )
  const barHeight = 30
  const gap = 20
  const totalHeight = normalizedData.length * (barHeight + gap)

  return (
    <div className={cn('w-full', className)} style={{ height: `${height}px` }}>
      <svg width="100%" height={totalHeight} viewBox={`0 0 ${width} ${totalHeight}`}>
        {normalizedData.map((d, i) => {
          const y = i * (barHeight + gap)
          const beforeX = (d.before / maxValue) * (width - 100) + 50
          const afterX = (d.after / maxValue) * (width - 100) + 50

          return (
            <g key={i}>
              {/* Label */}
              {showLabels && (
                <text
                  x={40}
                  y={y + barHeight / 2}
                  textAnchor="end"
                  dominantBaseline="middle"
                  className="text-xs fill-slate-400"
                >
                  {d.label}
                </text>
              )}

              {/* Connector Line */}
              <line
                x1={beforeX}
                y1={y + barHeight / 2}
                x2={afterX}
                y2={y + barHeight / 2}
                stroke={afterColor}
                strokeWidth={2}
                strokeOpacity={0.5}
              />

              {/* Before Point */}
              <circle
                cx={beforeX}
                cy={y + barHeight / 2}
                r={8}
                fill={beforeColor}
              />

              {/* After Point */}
              <circle
                cx={afterX}
                cy={y + barHeight / 2}
                r={8}
                fill={afterColor}
              />

              {/* Values */}
              {showLabels && (
                <>
                  <text
                    x={beforeX}
                    y={y - 5}
                    textAnchor="middle"
                    className="text-xs fill-slate-400"
                  >
                    {d.before}
                  </text>
                  <text
                    x={afterX}
                    y={y - 5}
                    textAnchor="middle"
                    className="text-xs fill-slate-400"
                  >
                    {d.after}
                  </text>
                </>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// ============================================================================
// FUNNEL CHART
// ============================================================================

export interface FunnelStage {
  label?: string
  name?: string
  value: number
  category?: string
}

export interface FunnelChartProps {
  data: FunnelStage[]
  height?: number
  width?: number
  colors?: string[]
  showLabels?: boolean
  showValues?: boolean
  className?: string
}

export function FunnelChart({
  data,
  height = 400,
  width = 600,
  colors = Object.values(CHART_COLORS),
  showLabels = true,
  showValues = false,
  className,
}: FunnelChartProps) {
  const maxValue = Math.max(...data.map(d => d.value), 1)
  const stageHeight = height / data.length

  return (
    <div className={cn('w-full', className)} style={{ height }}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        {data.map((stage, i) => {
          const stageWidth = (stage.value / maxValue) * (width - 100)
          const x = (width - stageWidth) / 2
          const y = i * stageHeight
          const nextWidth = i < data.length - 1
            ? (data[i + 1].value / maxValue) * (width - 100)
            : stageWidth

          // Create trapezoid path
          const path = `
            M ${x + stageWidth} ${y}
            L ${x + stageWidth} ${y + stageHeight}
            L ${width - (width - nextWidth) / 2} ${y + stageHeight}
            L ${width - (width - nextWidth) / 2} ${y}
            Z
          `

          const label = stage.label || stage.name || ''

          return (
            <g key={i}>
              <path
                d={path}
                fill={colors[i % colors.length]}
                fillOpacity={0.8}
                stroke="#fff"
                strokeWidth={2}
              />
              {showLabels && (
                <text
                  x={width / 2}
                  y={y + stageHeight / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-sm font-semibold fill-white"
                >
                  {label}{showValues && `: ${stage.value}`}
                </text>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// ============================================================================
// RADIAL BAR CHART
// ============================================================================

export interface RadialBarData {
  category: string
  value: number
}

export interface RadialBarChartProps {
  data: RadialBarData[]
  height?: number
  width?: number
  colors?: string[]
  showLabels?: boolean
  labelSize?: number
  className?: string
}

export function RadialBarChart({
  data,
  height = 400,
  width = 400,
  colors = Object.values(CHART_COLORS),
  showLabels = true,
  labelSize = 12,
  className,
}: RadialBarChartProps) {
  const maxValue = Math.max(...data.map(d => d.value))
  const centerX = width / 2
  const centerY = height / 2
  const maxRadius = Math.min(width, height) / 2 - 20
  const barWidth = (maxRadius / data.length) * 0.8

  return (
    <svg width={width} height={height} className={cn(className)} viewBox={`0 0 ${width} ${height}`}>
      {data.map((d, i) => {
        const value = (d.value / maxValue) * maxRadius
        const innerRadius = i * (maxRadius / data.length) + 10
        const outerRadius = innerRadius + value
        const circumference = 2 * Math.PI * ((innerRadius + outerRadius) / 2)
        const arcLength = circumference * 0.75 // 3/4 circle

        return (
          <g key={d.category}>
            {/* Background arc */}
            <path
              d={describeArc(centerX, centerY, innerRadius, innerRadius + barWidth, 0, 270)}
              fill="none"
              stroke="#334155"
              strokeWidth={barWidth}
              strokeOpacity={0.3}
            />
            {/* Value arc */}
            <path
              d={describeArc(centerX, centerY, innerRadius, innerRadius + barWidth, 0, (270 * d.value) / maxValue)}
              fill="none"
              stroke={colors[i % colors.length]}
              strokeWidth={barWidth}
              strokeLinecap="round"
            />
            {/* Label */}
            {showLabels && (
              <text
                x={centerX}
                y={centerY - innerRadius - barWidth}
                textAnchor="middle"
                style={{ fontSize: `${labelSize}px` }}
                className="fill-slate-400"
              >
                {d.category}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

function describeArc(
  x: number,
  y: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number
): string {
  const start = polarToCartesian(x, y, outerRadius, endAngle)
  const end = polarToCartesian(x, y, outerRadius, startAngle)
  const start2 = polarToCartesian(x, y, innerRadius, endAngle)
  const end2 = polarToCartesian(x, y, innerRadius, startAngle)

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  return [
    'M',
    start.x,
    start.y,
    'A',
    outerRadius,
    outerRadius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    'L',
    end2.x,
    end2.y,
    'A',
    innerRadius,
    innerRadius,
    0,
    largeArcFlag,
    1,
    start2.x,
    start2.y,
    'Z',
  ].join(' ')
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
): { x: number; y: number } {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

// ============================================================================
// STREAMGRAPH
// ============================================================================

export interface StreamgraphSeries {
  name: string
  values: number[]
}

export interface StreamgraphDataPoint {
  date?: Date | string
  [key: string]: string | number | Date | undefined
}

export interface StreamgraphProps {
  data: StreamgraphSeries[] | StreamgraphDataPoint[]
  height?: number
  width?: number
  colors?: string[]
  showLabels?: boolean
  className?: string
}

export function Streamgraph({
  data,
  height = 400,
  width = 800,
  colors = Object.values(CHART_COLORS),
  showLabels = false,
  className,
}: StreamgraphProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  // Convert data format if needed
  const normalizedSeries = React.useMemo(() => {
    // Check if data is in the alternate format (array of objects with platform keys)
    if (data.length > 0 && 'values' in data[0] === false) {
      const altData = data as StreamgraphDataPoint[]
      // Get all keys except 'date'
      const platformKeys = Object.keys(altData[0] || {}).filter(k => k !== 'date')

      return platformKeys.map(platform => ({
        name: platform,
        values: altData.map(d => (d[platform] as number) || 0),
      }))
    }
    return data as StreamgraphSeries[]
  }, [data])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const canvasWidth = width
    const numPoints = normalizedSeries[0]?.values.length || 0

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, height)

    if (numPoints === 0) return

    // Calculate stacked values
    const stacked: Array<Array<{ top: number; bottom: number }>> = []
    for (let i = 0; i < numPoints; i++) {
      stacked[i] = []
      let cumulative = 0

      normalizedSeries.forEach((series, seriesIndex) => {
        const value = series.values[i] || 0
        stacked[i].push({
          bottom: cumulative,
          top: cumulative + value,
        })
        cumulative += value
      })
    }

    const maxValue = Math.max(...stacked.flat().map(d => d.top), 1)

    // Draw layers
    normalizedSeries.forEach((series, seriesIndex) => {
      const color = colors[seriesIndex % colors.length]

      ctx.beginPath()
      ctx.fillStyle = color
      ctx.globalAlpha = 0.7

      // Top edge (left to right)
      for (let i = 0; i < numPoints; i++) {
        const x = (i / (numPoints - 1 || 1)) * canvasWidth
        const y = height - (stacked[i][seriesIndex].top / maxValue) * height

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      // Bottom edge (right to left)
      for (let i = numPoints - 1; i >= 0; i--) {
        const x = (i / (numPoints - 1 || 1)) * canvasWidth
        const y = height - (stacked[i][seriesIndex].bottom / maxValue) * height
        ctx.lineTo(x, y)
      }

      ctx.closePath()
      ctx.fill()
      ctx.globalAlpha = 1
    })

    // Draw labels if requested
    if (showLabels) {
      ctx.globalAlpha = 1
      ctx.font = '10px sans-serif'
      ctx.fillStyle = '#ffffff'

      const legendX = 10
      let legendY = 20

      normalizedSeries.forEach((series, seriesIndex) => {
        ctx.fillStyle = colors[seriesIndex % colors.length]
        ctx.fillRect(legendX, legendY - 8, 12, 12)
        ctx.fillStyle = '#ffffff'
        ctx.fillText(series.name, legendX + 16, legendY)
        legendY += 20
      })
    }
  }, [normalizedSeries, height, width, colors, showLabels])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={cn('w-full h-auto', className)}
    />
  )
}

// ============================================================================
// SANKEY DIAGRAM
// ============================================================================

export interface SankeyNode {
  name: string
  id?: string
}

export interface SankeyLink {
  source: number | string
  target: number | string
  value: number
}

export interface SankeyDiagramProps {
  nodes: SankeyNode[]
  links: SankeyLink[]
  width?: number
  height?: number
  nodeWidth?: number
  nodePadding?: number
  showLabels?: boolean
  showValues?: boolean
  colors?: string[]
  className?: string
}

export function SankeyDiagram({
  nodes,
  links,
  width = 800,
  height = 500,
  nodeWidth = 15,
  nodePadding = 10,
  showLabels = true,
  showValues = false,
  colors: propColors,
  className,
}: SankeyDiagramProps) {
  const colors = propColors || Object.values(CHART_COLORS)

  // Create a map from node ID/name to index
  const nodeToIndex = React.useMemo(() => {
    const map = new Map<string | number, number>()
    nodes.forEach((node, i) => {
      map.set(node.id || node.name, i)
    })
    return map
  }, [nodes])

  // Normalize links to use numeric indices
  const normalizedLinks = React.useMemo(() => {
    return links.map(link => ({
      source: typeof link.source === 'string' ? (nodeToIndex.get(link.source) ?? 0) : link.source,
      target: typeof link.target === 'string' ? (nodeToIndex.get(link.target) ?? 0) : link.target,
      value: link.value,
    }))
  }, [links, nodeToIndex])

  // Calculate node positions
  const nodePositions = React.useMemo(() => {
    // Separate source and target nodes
    const sourceIndices = new Set<number>()
    const targetIndices = new Set<number>()

    normalizedLinks.forEach(link => {
      sourceIndices.add(link.source)
      targetIndices.add(link.target)
    })

    const sourceList = Array.from(sourceIndices)
    const targetList = Array.from(targetIndices)

    const positions: Array<{ x: number; y: number }> = []

    nodes.forEach((node, i) => {
      if (sourceIndices.has(i)) {
        const sourceIndex = sourceList.indexOf(i)
        return positions.push({
          x: 50,
          y: (sourceIndex / (sourceList.length - 1 || 1)) * (height - 100) + 50,
        })
      }
      if (targetIndices.has(i)) {
        const targetIndex = targetList.indexOf(i)
        return positions.push({
          x: width - 50,
          y: (targetIndex / (targetList.length - 1 || 1)) * (height - 100) + 50,
        })
      }
      positions.push({ x: width / 2, y: height / 2 })
    })

    return positions
  }, [nodes, normalizedLinks, width, height])

  const maxLinkValue = Math.max(...normalizedLinks.map(l => l.value), 1)

  return (
    <svg width={width} height={height} className={cn('bg-slate-900/30 rounded-lg', className)} viewBox={`0 0 ${width} ${height}`}>
      {/* Links */}
      {normalizedLinks.map((link, i) => {
        const source = nodePositions[link.source]
        const target = nodePositions[link.target]
        const thickness = (link.value / maxLinkValue) * 30

        return (
          <path
            key={i}
            d={`M ${source.x} ${source.y} C ${width / 2} ${source.y}, ${width / 2} ${target.y}, ${target.x} ${target.y}`}
            fill="none"
            stroke={colors[i % colors.length]}
            strokeWidth={thickness}
            strokeOpacity={0.5}
          />
        )
      })}

      {/* Nodes */}
      {nodes.map((node, i) => {
        const pos = nodePositions[i]
        // Calculate total value for this node
        const nodeValue = normalizedLinks
          .filter(l => l.source === i || l.target === i)
          .reduce((sum, l) => sum + l.value, 0)

        return (
          <g key={i}>
            <rect
              x={pos.x - nodeWidth / 2}
              y={pos.y - 20}
              width={nodeWidth}
              height={40}
              fill={colors[i % colors.length]}
              rx={4}
            />
            {showLabels && (
              <text
                x={pos.x < width / 2 ? pos.x - nodeWidth / 2 - 5 : pos.x + nodeWidth / 2 + 5}
                y={pos.y}
                textAnchor={pos.x < width / 2 ? 'end' : 'start'}
                dominantBaseline="middle"
                className="text-xs fill-white"
              >
                {node.name}{showValues && ` (${nodeValue})`}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

// Additional placeholder components for completeness
export function ChoroplethMap(props: any) {
  return <div className="flex items-center justify-center h-64 bg-slate-800 rounded-lg text-slate-400">Choropleth Map - Coming Soon</div>
}

export function MatrixChart(props: any) {
  return <div className="flex items-center justify-center h-64 bg-slate-800 rounded-lg text-slate-400">Matrix Chart - Coming Soon</div>
}

export function TileGrid(props: any) {
  return <div className="flex items-center justify-center h-64 bg-slate-800 rounded-lg text-slate-400">Tile Grid - Coming Soon</div>
}

export function ProgressRing(props: any) {
  return <div className="flex items-center justify-center h-64 bg-slate-800 rounded-lg text-slate-400">Progress Ring - Coming Soon</div>
}

export function DonutChart(props: any) {
  return <div className="flex items-center justify-center h-64 bg-slate-800 rounded-lg text-slate-400">Donut Chart - Coming Soon</div>
}

export function ParallelCoordinates(props: any) {
  return <div className="flex items-center justify-center h-64 bg-slate-800 rounded-lg text-slate-400">Parallel Coordinates - Coming Soon</div>
}

export function CalendarHeatmapFull(props: any) {
  return <div className="flex items-center justify-center h-64 bg-slate-800 rounded-lg text-slate-400">Calendar Heatmap - Coming Soon</div>
}

export function RadarSpiderChart(props: any) {
  return <div className="flex items-center justify-center h-64 bg-slate-800 rounded-lg text-slate-400">Radar Spider Chart - Coming Soon</div>
}

export function BumpChart(props: any) {
  return <div className="flex items-center justify-center h-64 bg-slate-800 rounded-lg text-slate-400">Bump Chart - Coming Soon</div>
}

export function SlopeGraph(props: any) {
  return <div className="flex items-center justify-center h-64 bg-slate-800 rounded-lg text-slate-400">Slope Graph - Coming Soon</div>
}
