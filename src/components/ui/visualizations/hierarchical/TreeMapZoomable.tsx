'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'

interface TreeMapNode {
  name: string
  value: number
  children?: TreeMapNode[]
  category?: string
  color?: string
}

interface TreeMapZoomableProps {
  data: TreeMapNode
  width?: number
  height?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  enableZoom?: boolean
  maxDepth?: number
  className?: string
  onNodeClick?: (node: TreeMapNode) => void
  onNodeHover?: (node: TreeMapNode | null) => void
}

/**
 * TreeMapZoomable - Zoomable treemap with drill-down
 *
 * Interactive treemap that supports zooming into child nodes.
 * Click to zoom in, breadcrumb to navigate back.
 *
 * Use cases:
 * - Hierarchical budget exploration
 * - Multi-level content breakdown
 * - Interactive category drill-down
 * - Nested metric investigation
 */
export function TreeMapZoomable({
  data,
  width = 800,
  height = 500,
  colors,
  showLabels = true,
  labelSize = 12,
  showValues = false,
  enableZoom = true,
  maxDepth = 3,
  className = '',
  onNodeClick,
  onNodeHover,
}: TreeMapZoomableProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [currentZoom, setCurrentZoom] = useState<{ node: d3.HierarchyRectangularNode<TreeMapNode>; depth: number } | null>(null)
  const [breadcrumb, setBreadcrumb] = useState<d3.HierarchyRectangularNode<TreeMapNode>[]>([])

  useEffect(() => {
    if (!svgRef.current || !data) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    // Create hierarchy
    const root = d3.hierarchy(data)
      .sum(d => d.value || 0)
      .sort((a, b) => ((b.value as any) || 0) - ((a.value as any) || 0))

    // Create treemap layout
    const treemap = d3.treemap()
      .size([width, height])
      .padding(2)
      .round(true)

    treemap(root as any)

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getNodeColor = (node: d3.HierarchyRectangularNode<TreeMapNode>) => {
      const data = node.data
      if (data.color) return data.color
      if (Array.isArray(colors)) {
        return colors[node.depth % colors.length]
      }
      if (colors && data.name in colors) {
        return (colors as Record<string, string>)[data.name]
      }
      if (data.category && colors && data.category in colors) {
        return (colors as Record<string, string>)[data.category]
      }
      return colorScale(data.name) as string
    }

    const mainGroup = svg.append('g')

    // Current root for zooming
    let currentRoot = currentZoom ? currentZoom.node : root
    const currentDepth = currentZoom ? currentZoom.depth : 0

    // Get visible nodes
    const visibleNodes = currentRoot.leaves().filter(d => {
      // Only show leaf nodes or nodes at appropriate depth
      return (!d.children || d.depth >= maxDepth) && d.depth >= currentDepth
    })

    // Draw tiles
    const tiles = mainGroup.selectAll('.treemap-tile')
      .data(visibleNodes)
      .join('g')
      .attr('class', 'treemap-tile')
      .attr('transform', (d: any) => {
        // Transform coordinates to account for zoom
        const rootRect = currentRoot as any
        if (currentRoot !== root) {
          const scaleX = width / (rootRect.x1 - rootRect.x0)
          const scaleY = height / (rootRect.y1 - rootRect.y0)
          const x = (d.x0 - rootRect.x0) * scaleX
          const y = (d.y0 - rootRect.y0) * scaleY
          const w = (d.x1 - d.x0) * scaleX
          const h = (d.y1 - d.y0) * scaleY
          return `translate(${x}, ${y})`
        }
        return `translate(${d.x0}, ${d.y0})`
      })
      .style('cursor', enableZoom ? 'pointer' : 'default')

    tiles.each(function(d: any) {
      const node = d3.select(this)
      const data = d.data
      const color = getNodeColor(d)
      const rootRect = currentRoot as any

      // Calculate dimensions
      let tileWidth = d.x1 - d.x0
      let tileHeight = d.y1 - d.y0

      if (currentRoot !== root) {
        const scaleX = tileWidth / (rootRect.x1 - rootRect.x0)
        const scaleY = tileHeight / (rootRect.y1 - rootRect.y0)
        tileWidth = (d.x1 - d.x0) * scaleX
        tileHeight = (d.y1 - d.y0) * scaleY
      }

      // Draw rect
      node.append('rect')
        .attr('width', tileWidth)
        .attr('height', tileHeight)
        .attr('fill', color)
        .attr('stroke', '#fff')
        .attr('stroke-width', 1)
        .attr('opacity', 0.85)

      // Draw labels
      if (showLabels && width > 40 && height > 20) {
        const text = data.name
        const maxLength = Math.floor(width / 7)

        node.append('text')
          .attr('x', width / 2)
          .attr('y', height / 2 - (showValues ? 6 : 0))
          .attr('text-anchor', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '600')
          .attr('fill', '#fff')
          .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
          .attr('pointer-events', 'none')
          .text(text.length > maxLength ? text.substring(0, maxLength - 2) + '...' : text)
      }

      // Draw values
      if (showValues && width > 40 && height > 35) {
        node.append('text')
          .attr('x', width / 2)
          .attr('y', height / 2 + 10)
          .attr('text-anchor', 'middle')
          .attr('font-size', `${labelSize - 1}px`)
          .attr('fill', '#fff')
          .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
          .attr('pointer-events', 'none')
          .text(d3.format(',.0f')(d.value))
      }

      // Hover and click handlers
      node.on('mouseover', function() {
          d3.select(this).select('rect').attr('opacity', 1)
          onNodeHover?.(data)
        })
        .on('mouseout', function() {
          d3.select(this).select('rect').attr('opacity', 0.85)
          onNodeHover?.(null)
        })
        .on('click', (event, d: any) => {
          if (enableZoom && d.children) {
            setCurrentZoom({ node: d, depth: d.depth })
            setBreadcrumb([...breadcrumb, d].slice(-maxDepth))
          } else {
            onNodeClick?.(data)
          }
        })
    })

    // Draw breadcrumb
    if (breadcrumb.length > 0) {
      const breadcrumbGroup = svg.append('g')
        .attr('transform', 'translate(20, 30)')

      let currentX = 0
      breadcrumb.forEach((node, i) => {
        const text = node.data.name
        const textWidth = text.length * 8

        breadcrumbGroup.append('text')
          .attr('x', currentX)
          .attr('y', 0)
          .attr('font-size', '14px')
          .attr('font-weight', '500')
          .attr('fill', '#0ea5e9')
          .style('cursor', 'pointer')
          .text(text)
          .on('click', () => {
            setCurrentZoom({ node, depth: node.depth })
            setBreadcrumb(breadcrumb.slice(0, i))
          })

        if (i < breadcrumb.length - 1) {
          currentX += textWidth + 5
          breadcrumbGroup.append('text')
            .attr('x', currentX)
            .attr('y', 0)
            .attr('font-size', '14px')
            .attr('fill', '#94a3b8')
            .text(' > ')

          currentX += 20
        }
      })
    }

  }, [data, width, height, colors, showLabels, labelSize, showValues, enableZoom, maxDepth, currentZoom, breadcrumb, onNodeClick, onNodeHover])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={className}
      style={{ overflow: 'visible' }}
    />
  )
}
