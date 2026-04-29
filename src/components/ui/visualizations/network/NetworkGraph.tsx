'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { drag } from 'd3-drag'

interface NetworkNode {
  id: string
  group?: string
  value?: number
  radius?: number
  color?: string
  label?: string
  [key: string]: any
}

interface NetworkLink {
  source: string | NetworkNode
  target: string | NetworkNode
  value?: number
  color?: string
  [key: string]: any
}

interface NetworkGraphProps {
  nodes: NetworkNode[]
  links: NetworkLink[]
  width?: number
  height?: number
  linkDistance?: number
  linkStrength?: number
  chargeStrength?: number
  collideRadius?: number
  nodeRadius?: number
  minNodeRadius?: number
  maxNodeRadius?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  labelSize?: number
  linkOpacity?: number
  linkWidth?: ((d: NetworkLink) => number) | number
  draggable?: boolean
  className?: string
  onNodeClick?: (node: NetworkNode) => void
  onNodeHover?: (node: NetworkNode | null) => void
  onLinkClick?: (link: NetworkLink) => void
}

/**
 * NetworkGraph - Force-directed network visualization
 *
 * Nodes and links arranged by physical simulation. Shows relationships,
 * communities, and influence patterns in complex networks.
 *
 * Use cases:
 * - Influence network mapping
 * - Content sharing patterns
 * - Community detection
 * - Entity relationship graphs
 */
export function NetworkGraph({
  nodes,
  links,
  width = 800,
  height = 600,
  linkDistance = 100,
  linkStrength = 0.1,
  chargeStrength = -300,
  collideRadius = 30,
  nodeRadius,
  minNodeRadius = 5,
  maxNodeRadius = 20,
  colors,
  showLabels = true,
  labelSize = 11,
  linkOpacity = 0.4,
  linkWidth = d => (d.value as number) || 1,
  draggable = true,
  className = '',
  onNodeClick,
  onNodeHover,
  onLinkClick,
}: NetworkGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [simulation, setSimulation] = useState<d3.Simulation<any, undefined> | null>(null)

  useEffect(() => {
    if (!svgRef.current || !nodes.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    // Create color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getNodeColor = (node: NetworkNode) => {
      if (node.color) return node.color
      const groupKey = node.group || ''
      if (Array.isArray(colors)) {
        // Use a hash of the group string for array indexing
        const hash = groupKey.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
        return colors[hash % colors.length]
      }
      if (colors && groupKey in colors) {
        return (colors as Record<string, string>)[groupKey]
      }
      return colorScale(node.group?.toString() || node.id) as string
    }

    // Create node radius scale
    const getNodeRadius = nodeRadius
      ? () => nodeRadius
      : d3.scaleSqrt()
          .domain(d3.extent(nodes, d => d.value || 1) as [number, number])
          .range([minNodeRadius, maxNodeRadius]) as any

    // Create node map for link resolution
    const nodeMap = new Map(nodes.map(n => [n.id, n]))

    // Resolve links
    const resolvedLinks = links.map(l => ({
      ...l,
      source: nodeMap.get(typeof l.source === 'string' ? l.source : l.source.id)!,
      target: nodeMap.get(typeof l.target === 'string' ? l.target : l.target.id)!,
    })).filter(l => l.source && l.target)

    // Create force simulation
    const sim = d3.forceSimulation(nodes as any)
      .force('link', d3.forceLink(resolvedLinks as any)
        .id((d: any) => d.id)
        .distance(linkDistance)
        .strength(linkStrength))
      .force('charge', d3.forceManyBody().strength(chargeStrength))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collide', d3.forceCollide().radius(collideRadius))

    setSimulation(sim)

    const mainGroup = svg.append('g')

    // Create arrow markers for directed links
    svg.append('defs')
      .selectAll('marker')
      .data(['arrow'])
      .join('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 20)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#999')

    // Draw links
    const link = mainGroup.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(resolvedLinks)
      .join('line')
      .attr('stroke', d => (d as any).color || '#999')
      .attr('stroke-opacity', linkOpacity)
      .attr('stroke-width', typeof linkWidth === 'function' ? linkWidth : linkWidth)
      .attr('class', 'network-link')
      .style('cursor', onLinkClick ? 'pointer' : 'default')
      .on('click', (event, d) => onLinkClick?.(d))

    // Draw nodes
    const node = mainGroup.append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'network-node')
      .style('cursor', onNodeClick ? 'pointer' : 'default')
      .call(draggable ?
        d3.drag<any, unknown>()
          .on('start', (event, d: any) => {
            if (!event.active) sim.alphaTarget(0.3).restart()
            d.fx = d.x
            d.fy = d.y
          })
          .on('drag', (event, d: any) => {
            d.fx = event.x
            d.fy = event.y
          })
          .on('end', (event, d: any) => {
            if (!event.active) sim.alphaTarget(0)
            d.fx = null
            d.fy = null
          }) as any :
        (() => {}) as any
      )

    node.append('circle')
      .attr('r', d => getNodeRadius(d as any))
      .attr('fill', d => getNodeColor(d))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .attr('opacity', 0.85)
      .style('transition', 'opacity 0.2s')

    node.on('mouseover', function() {
        d3.select(this).select('circle').attr('opacity', 1)
      })
      .on('mouseout', function() {
        d3.select(this).select('circle').attr('opacity', 0.85)
      })
      .on('click', (event, d) => {
        onNodeClick?.(d)
      })

    // Add labels
    if (showLabels) {
      node.append('text')
        .text(d => d.label || d.id)
        .attr('x', d => getNodeRadius(d) + 2)
        .attr('y', 3)
        .attr('font-size', `${labelSize}px`)
        .attr('font-weight', '500')
        .attr('fill', '#334155')
        .attr('pointer-events', 'none')
        .attr('text-shadow', '0 1px 3px rgba(255,255,255,0.8)')
    }

    // Update positions on tick
    sim.on('tick', () => {
      link
        .attr('x1', d => (d.source as any).x)
        .attr('y1', d => (d.source as any).y)
        .attr('x2', d => (d.target as any).x)
        .attr('y2', d => (d.target as any).y)

      node
        .attr('transform', d => `translate(${(d as any).x},${(d as any).y})`)
    })

  }, [nodes, links, width, height, linkDistance, linkStrength, chargeStrength, collideRadius, nodeRadius, minNodeRadius, maxNodeRadius, colors, showLabels, labelSize, linkOpacity, linkWidth, draggable, onNodeClick, onNodeHover, onLinkClick])

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
