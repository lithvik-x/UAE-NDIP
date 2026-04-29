'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

interface SunburstNode {
  name: string
  value?: number
  children?: SunburstNode[]
  category?: string
  color?: string
}

interface SunburstChartProps {
  data: SunburstNode
  width?: number
  height?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  labelFontSize?: number
  className?: string
  onNodeClick?: (node: SunburstNode) => void
}

/**
 * SunburstChart - Multi-level hierarchical visualization
 *
 * Radial hierarchy showing multiple levels of categorical breakdown.
 * Inner rings = higher hierarchy, outer rings = leaf nodes.
 *
 * Use cases:
 * - Platform → Topic → Sentiment breakdown
 * - Region → Facility → Department metrics
 * - Campaign → Content → Performance
 */
export function SunburstChart({
  data,
  width = 600,
  height = 600,
  colors,
  showLabels = true,
  labelFontSize = 11,
  className = '',
  onNodeClick,
}: SunburstChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const radius = Math.min(width, height) / 2
    const centerX = width / 2
    const centerY = height / 2

    // Create hierarchy
    const root = d3.hierarchy(data)
      .sum(d => (d as any).value || 0)
      .sort((a, b) => ((b.value as any) || 0) - ((a.value as any) || 0))

    // Create partition layout
    const partition = d3.partition()
      .size([2 * Math.PI, radius])

    partition(root as any)

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getNodeColor = (node: d3.HierarchyNode<SunburstNode>) => {
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
      .attr('transform', `translate(${centerX}, ${centerY})`)

    // Draw arcs
    mainGroup.selectAll('path')
      .data(root.descendants().filter(d => d.depth))
      .join('path')
      .attr('d', d3.arc()
        .startAngle((d: any) => d.x0)
        .endAngle((d: any) => d.x1)
        .innerRadius((d: any) => d.y0)
        .outerRadius((d: any) => d.y1 - 1) as any
      )
      .attr('fill', d => getNodeColor(d))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .attr('opacity', 0.85)
      .attr('class', 'sunburst-arc')
      .style('cursor', 'pointer')
      .style('transition', 'opacity 0.2s')
      .on('mouseover', function(event, d) {
        setHoveredNode(d.data.name)
        d3.select(this).attr('opacity', 1)

        // Highlight path to root
        const sequence = d.ancestors().reverse()
        mainGroup.selectAll('path')
          .attr('opacity', 0.3)
        mainGroup.selectAll('path')
          .filter(node => sequence.includes(node as any))
          .attr('opacity', 1)
      })
      .on('mouseout', function() {
        setHoveredNode(null)
        mainGroup.selectAll('path')
          .attr('opacity', 0.85)
      })
      .on('click', (event, d) => {
        onNodeClick?.(d.data)
      })

    // Add labels
    if (showLabels) {
      mainGroup.selectAll('text')
        .data(root.descendants().filter((d: any) => {
          // Only label if arc is large enough
          const angle = d.x1 - d.x0
          const radius = d.y1 - d.y0
          return angle > 0.1 && radius > 20
        }))
        .join('text')
        .attr('transform', (d: any) => {
          const angle = (d.x0 + d.x1) / 2 * 180 / Math.PI - 90
          const radius = (d.y0 + d.y1) / 2
          return `rotate(${angle}) translate(${radius},0) ${angle > 90 ? 'rotate(180)' : ''}`
        })
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .attr('fill', 'white')
        .attr('font-size', `${labelFontSize}px`)
        .attr('font-weight', '500')
        .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.7)')
        .attr('pointer-events', 'none')
        .text((d: any) => {
          const text = d.data.name
          const availableWidth = (d.x1 - d.x0) * (d.y0 + d.y1) / 2
          if (availableWidth < 30) return ''
          return text.length > 15 ? text.substring(0, 12) + '...' : text
        })
    }

    // Add center label for hovered node
    const centerLabel = svg.append('text')
      .attr('x', centerX)
      .attr('y', centerY)
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .attr('fill', '#334155')
      .attr('font-size', '14px')
      .attr('font-weight', '600')
      .attr('opacity', 0)
      .attr('class', 'center-label')

    // Update center label on hover
    mainGroup.selectAll('path')
      .on('mouseover', function(event, d: any) {
        const percentage = ((d.value / (root.value as number)) * 100).toFixed(1)
        centerLabel
          .text(`${d.data.name}\n${percentage}%`)
          .attr('opacity', 1)
      })
      .on('mouseout', function() {
        centerLabel.attr('opacity', 0)
      })

  }, [data, width, height, colors, showLabels, labelFontSize, onNodeClick])

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
