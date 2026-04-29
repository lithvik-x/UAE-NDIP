'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { cn } from '@/lib/utils'
import { CHART_COLORS } from '@/lib/visualization-themes/colors'

interface ArcNode {
  id: string
  label?: string
  value?: number
  category?: string
}

interface ArcLink {
  source: string | ArcNode
  target: string | ArcNode
  value?: number
  color?: string
}

interface ArcDiagramProps {
  data: {
    nodes: ArcNode[]
    links: ArcLink[]
  }
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: string[]
  showLabels?: boolean
  labelSize?: number
  labelRotation?: number
  arcHeight?: number
  showNodeValues?: boolean
  curveType?: 'monotone' | 'cardinal' | 'linear'
  sortBy?: 'id' | 'value' | 'category'
  className?: string
  onNodeClick?: (node: ArcNode) => void
  onLinkHover?: (link: ArcLink) => void
}

/**
 * ArcDiagram - Linear network visualization
 *
 * Shows network connections between nodes arranged linearly.
 * Arcs represent links, with height indicating relationship strength.
 *
 * Use cases:
 * - Cross-platform content flow
 * - Influencer connection mapping
 * - Narrative relationship paths
 * - Attribution tracking
 * - Data lineage visualization
 */
export function ArcDiagram({
  data,
  width = 800,
  height = 400,
  marginTop = 40,
  marginRight = 40,
  marginBottom = 60,
  marginLeft = 40,
  colors,
  showLabels = true,
  labelSize = 12,
  labelRotation = -45,
  arcHeight = 150,
  showNodeValues = false,
  curveType = 'monotone',
  sortBy = 'id',
  className = '',
  onNodeClick,
  onLinkHover,
}: ArcDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredLink, setHoveredLink] = useState<ArcLink | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.nodes.length || !data.links.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Process links to resolve node references
    const nodeMap = new Map(data.nodes.map(n => [n.id, n]))
    const processedLinks = data.links.map(link => ({
      ...link,
      source: typeof link.source === 'string' ? link.source : link.source.id,
      target: typeof link.target === 'string' ? link.target : link.target.id,
    }))

    // Sort nodes based on sortBy prop
    let sortedNodes = [...data.nodes]
    if (sortBy === 'value') {
      sortedNodes.sort((a, b) => (b.value || 0) - (a.value || 0))
    } else if (sortBy === 'category') {
      sortedNodes.sort((a, b) => (a.category || '').localeCompare(b.category || ''))
    }

    // Create scale for node positions
    const nodeScale = d3.scalePoint()
      .domain(sortedNodes.map(n => n.id))
      .range([0, innerWidth])
      .padding(0.5)

    // Color scale
    const defaultColors = Object.values(CHART_COLORS)
    const colorScale = d3.scaleOrdinal(colors || defaultColors)

    // Group nodes by category for color assignment
    const categories = Array.from(new Set(sortedNodes.map(n => n.category).filter((c): c is string => Boolean(c))))
    const categoryColorScale = d3.scaleOrdinal(defaultColors).domain(categories)

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw baseline
    mainGroup.append('line')
      .attr('x1', 0)
      .attr('y1', innerHeight / 2)
      .attr('x2', innerWidth)
      .attr('y2', innerHeight / 2)
      .attr('stroke', '#e2e8f0')
      .attr('stroke-width', 2)

    // Calculate link opacities for hover effect
    const linkOpacity = (link: ArcLink) => {
      if (!hoveredLink) return 0.6
      return (link === hoveredLink ||
              (typeof link.source === 'string' && link.source === hoveredLink.source) ||
              (typeof link.target === 'string' && link.target === hoveredLink.target)) ? 0.9 : 0.1
    }

    // Draw arcs
    processedLinks.forEach((link) => {
      const sourceId = typeof link.source === 'string' ? link.source : (link.source as any).id
      const targetId = typeof link.target === 'string' ? link.target : (link.target as any).id

      const sourceX = nodeScale(sourceId)
      const targetX = nodeScale(targetId)

      if (sourceX === undefined || targetX === undefined) return

      const x1 = Math.min(sourceX, targetX)
      const x2 = Math.max(sourceX, targetX)

      // Determine arc height based on link value
      const maxValue = d3.max(processedLinks, l => l.value || 0) || 1
      const linkHeight = ((link.value || 1) / maxValue) * arcHeight

      // Create curve path
      let path: string
      if (curveType === 'linear') {
        path = `M ${x1} ${innerHeight / 2} L ${x2} ${innerHeight / 2}`
      } else if (curveType === 'cardinal') {
        path = `M ${x1} ${innerHeight / 2} Q ${(x1 + x2) / 2} ${innerHeight / 2 - linkHeight} ${x2} ${innerHeight / 2}`
      } else {
        // monotone (default) - smooth bezier
        path = `M ${x1} ${innerHeight / 2} C ${(x1 + x2) / 2} ${innerHeight / 2 - linkHeight}, ${(x1 + x2) / 2} ${innerHeight / 2 - linkHeight}, ${x2} ${innerHeight / 2}`
      }

      const linkColor = link.color || colorScale(sourceId + targetId) as string

      mainGroup.append('path')
        .attr('d', path)
        .attr('fill', 'none')
        .attr('stroke', linkColor)
        .attr('stroke-width', Math.max(1, (link.value || 1) / maxValue * 4))
        .attr('opacity', linkOpacity(link))
        .attr('class', 'arc-link')
        .style('cursor', 'pointer')
        .style('transition', 'opacity 0.2s, stroke-width 0.2s')
        .on('mouseover', function() {
          d3.select(this)
            .attr('opacity', 0.9)
            .attr('stroke-width', Math.max(2, (link.value || 1) / maxValue * 6))
          setHoveredLink(link)
          onLinkHover?.(link)
        })
        .on('mouseout', function() {
          d3.select(this)
            .attr('opacity', linkOpacity(link))
            .attr('stroke-width', Math.max(1, (link.value || 1) / maxValue * 4))
          setHoveredLink(null)
        })
    })

    // Draw nodes
    sortedNodes.forEach((node) => {
      const x = nodeScale(node.id)
      if (x === undefined) return

      const nodeColor = node.category ? categoryColorScale(node.category) as string : colorScale(node.id) as string
      const nodeRadius = Math.max(4, Math.min(12, 4 + ((node.value || 0) / (d3.max(sortedNodes, n => n.value || 0) || 1)) * 8))

      // Node circle
      mainGroup.append('circle')
        .attr('cx', x)
        .attr('cy', innerHeight / 2)
        .attr('r', nodeRadius)
        .attr('fill', nodeColor)
        .attr('stroke', '#fff')
        .attr('stroke-width', 2)
        .attr('class', 'arc-node')
        .style('cursor', onNodeClick ? 'pointer' : 'default')
        .style('transition', 'r 0.2s')
        .on('mouseover', function() {
          d3.select(this).attr('r', nodeRadius * 1.3)
        })
        .on('mouseout', function() {
          d3.select(this).attr('r', nodeRadius)
        })
        .on('click', () => {
          onNodeClick?.(node)
        })

      // Node label
      if (showLabels) {
        mainGroup.append('text')
          .attr('x', x)
          .attr('y', innerHeight / 2 + nodeRadius + 15)
          .attr('text-anchor', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '500')
          .attr('fill', '#334155')
          .attr('transform', `rotate(${labelRotation}, ${x}, ${innerHeight / 2 + nodeRadius + 15})`)
          .text(node.label || node.id)
      }

      // Node value
      if (showNodeValues && node.value !== undefined) {
        mainGroup.append('text')
          .attr('x', x)
          .attr('y', innerHeight / 2 - nodeRadius - 5)
          .attr('text-anchor', 'middle')
          .attr('font-size', '10px')
          .attr('font-weight', '600')
          .attr('fill', nodeColor)
          .text(d3.format(',.0f')(node.value))
      }
    })

    // Add legend for categories
    if (categories.length > 0) {
      const legendGroup = svg.append('g')
        .attr('transform', `translate(${width - marginRight - 100}, ${marginTop})`)

      categories.forEach((category, i) => {
        const y = i * 20
        const color = categoryColorScale(category) as string

        legendGroup.append('circle')
          .attr('cx', 6)
          .attr('cy', y + 6)
          .attr('r', 6)
          .attr('fill', color)
          .attr('opacity', 0.85)

        legendGroup.append('text')
          .attr('x', 18)
          .attr('y', y + 10)
          .attr('font-size', '11px')
          .attr('dominant-baseline', 'middle')
          .attr('fill', '#64748b')
          .text(category)
      })
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, labelRotation, arcHeight, showNodeValues, curveType, sortBy, onNodeClick, onLinkHover, hoveredLink])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('arc-diagram', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
