'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { sankey, sankeyLinkHorizontal, sankeyLeft, sankeyRight, sankeyCenter } from 'd3-sankey'

interface SankeyNode {
  name: string
  category?: string
}

interface SankeyLink {
  source: string
  target: string
  value: number
}

interface SankeyDiagramProps {
  nodes: SankeyNode[]
  links: SankeyLink[]
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  nodeWidth?: number
  nodePadding?: number
  nodeAlign?: 'left' | 'right' | 'center' | 'justify'
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  showValues?: boolean
  linkOpacity?: number
  className?: string
}

/**
 * SankeyDiagram - Flow visualization
 *
 * Displays flows and relationships between entities. Width of links
 * represents magnitude of flow. Ideal for tracking influence, content
 * distribution, or customer journeys.
 *
 * Use cases:
 * - Content distribution across platforms (RICOCHET)
 * - Influence network flows
 * - User journey mapping
 * - Budget/ resource allocation
 */
export function SankeyDiagram({
  nodes,
  links,
  width = 800,
  height = 500,
  marginTop = 20,
  marginRight = 100,
  marginBottom = 20,
  marginLeft = 100,
  nodeWidth = 15,
  nodePadding = 10,
  nodeAlign = 'justify',
  colors,
  showLabels = true,
  showValues = false,
  linkOpacity = 0.3,
  className = '',
}: SankeyDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !nodes.length || !links.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Create node index map
    const nodeMap = new Map(nodes.map((n, i) => [n.name, i]))

    // Convert links to use indices
    const sankeyLinks = links
      .filter(l => nodeMap.has(l.source) && nodeMap.has(l.target))
      .map(l => ({
        source: nodeMap.get(l.source)!,
        target: nodeMap.get(l.target)!,
        value: l.value,
      }))

    // Set up align function
    const alignFn = {
      left: sankeyLeft,
      right: sankeyRight,
      center: sankeyCenter,
      justify: undefined, // Default
    }[nodeAlign]

    // Create sankey generator
    const sankeyGenerator = sankey()
      .nodeWidth(nodeWidth)
      .nodePadding(nodePadding)
      .extent([
        [0, 0],
        [innerWidth, innerHeight],
      ])
      .nodeId((d: any) => d.index)

    if (alignFn) {
      (sankeyGenerator as any).nodeAlign(alignFn)
    }

    // Generate sankey layout
    const { nodes: sankeyNodes, links: sankeyLayoutLinks } = sankeyGenerator({
      nodes: nodes.map((n, i) => ({ ...n, index: i })),
      links: sankeyLinks,
    })

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getNodeColor = (node: any, depth: number) => {
      if (Array.isArray(colors)) {
        return colors[depth % colors.length]
      }
      if (colors && typeof colors === 'object' && node.name in colors) {
        return (colors as Record<string, string>)[node.name]
      }
      return colorScale(node.name) as string
    }

    // Draw links
    mainGroup.append('g')
      .selectAll('path')
      .data(sankeyLayoutLinks)
      .join('path')
      .attr('d', sankeyLinkHorizontal() as any)
      .attr('fill', 'none')
      .attr('stroke', (d: any) => getNodeColor(d.source, d.source.depth))
      .attr('stroke-width', (d: any) => Math.max(1, d.width))
      .attr('opacity', linkOpacity)
      .attr('class', 'sankey-link')
      .style('transition', 'opacity 0.2s')
      .on('mouseover', function() {
        d3.select(this).attr('opacity', linkOpacity * 2)
      })
      .on('mouseout', function() {
        d3.select(this).attr('opacity', linkOpacity)
      })

    // Draw nodes
    const nodeGroups = mainGroup.append('g')
      .selectAll('g')
      .data(sankeyNodes)
      .join('g')
      .attr('class', 'sankey-node')

    nodeGroups.append('rect')
      .attr('x', (d: any) => d.x0)
      .attr('y', (d: any) => d.y0)
      .attr('width', (d: any) => d.x1 - d.x0)
      .attr('height', (d: any) => d.y1 - d.y0)
      .attr('fill', (d: any) => getNodeColor(d, d.depth))
      .attr('stroke', '#000')
      .attr('stroke-width', 0.5)
      .attr('opacity', 0.9)
      .style('cursor', 'pointer')
      .style('transition', 'opacity 0.2s')
      .on('mouseover', function() {
        d3.select(this).attr('opacity', 1)
      })
      .on('mouseout', function() {
        d3.select(this).attr('opacity', 0.9)
      })

    // Add labels
    if (showLabels) {
      nodeGroups.append('text')
        .attr('x', (d: any) => d.x0 < innerWidth / 2 ? d.x1 + 6 : d.x0 - 6)
        .attr('y', (d: any) => (d.y1 + d.y0) / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', (d: any) => d.x0 < innerWidth / 2 ? 'start' : 'end')
        .attr('font-size', '11px')
        .attr('font-weight', '500')
        .attr('fill', '#334155')
        .text((d: any) => d.name)

      // Add values if requested
      if (showValues) {
        nodeGroups.append('text')
          .attr('x', (d: any) => d.x0 < innerWidth / 2 ? d.x1 + 6 : d.x0 - 6)
          .attr('y', (d: any) => (d.y1 + d.y0) / 2 + 14)
          .attr('dy', '0.35em')
          .attr('text-anchor', (d: any) => d.x0 < innerWidth / 2 ? 'start' : 'end')
          .attr('font-size', '10px')
          .attr('fill', '#64748b')
          .text((d: any) => d3.format(',.0f')(d.value))
      }
    }

  }, [nodes, links, width, height, marginTop, marginRight, marginBottom, marginLeft, nodeWidth, nodePadding, nodeAlign, colors, showLabels, showValues, linkOpacity])

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
