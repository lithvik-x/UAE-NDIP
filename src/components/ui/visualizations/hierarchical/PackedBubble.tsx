'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { pack } from 'd3-hierarchy'
import { cn } from '@/lib/utils'

interface PackedBubbleDataNode {
  name: string
  value: number
  children?: PackedBubbleDataNode[]
  category?: string
  color?: string
}

interface PackedBubbleProps {
  data: PackedBubbleDataNode
  width?: number
  height?: number
  padding?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  className?: string
  onBubbleClick?: (node: PackedBubbleDataNode) => void
  onBubbleHover?: (node: PackedBubbleDataNode | null) => void
}

/**
 * PackedBubble - Circle packing hierarchy
 *
 * Nested circles where area represents value. Parent circles contain
 * children. Ideal for showing hierarchical composition.
 *
 * Use cases:
 * - Platform share breakdown (nested)
 * - Topic cluster visualization
 * - Audience segment hierarchy
 * - Content category organization
 */
export function PackedBubble({
  data,
  width = 600,
  height = 600,
  padding = 5,
  colors,
  showLabels = true,
  labelSize = 11,
  showValues = false,
  className = '',
  onBubbleClick,
  onBubbleHover,
}: PackedBubbleProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredBubble, setHoveredBubble] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    // Create hierarchy
    const root = d3.hierarchy(data)
      .sum(d => d.value || 0)
      .sort((a, b) => ((b.value as any) || 0) - ((a.value as any) || 0))

    // Create pack layout
    const packLayout = pack()
      .size([width, height])
      .padding(padding)

    packLayout(root as any)

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getNodeColor = (node: d3.HierarchyCircularNode<PackedBubbleDataNode>) => {
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

    // Draw circles
    const circles = mainGroup.selectAll('circle')
      .data(root.descendants())
      .join('circle')
      .attr('cx', (d: any) => d.x ?? 0)
      .attr('cy', (d: any) => d.y ?? 0)
      .attr('r', (d: any) => d.r ?? 0)
      .attr('fill', d => getNodeColor(d as any))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .attr('opacity', d => d.children ? 0.3 : 0.7)
      .attr('class', 'packed-bubble')
      .style('cursor', onBubbleClick ? 'pointer' : 'default')
      .style('transition', 'opacity 0.2s')
      .on('mouseover', function(event, d) {
        setHoveredBubble(d.data.name)

        // Highlight path to root
        const ancestors = d.ancestors()
        circles.attr('opacity', node =>
          ancestors.includes(node as any) ? 1 : 0.2
        )

        onBubbleHover?.(d.data)
      })
      .on('mouseout', function() {
        setHoveredBubble(null)
        circles.attr('opacity', d => d.children ? 0.3 : 0.7)
        onBubbleHover?.(null)
      })
      .on('click', (event, d) => {
        if (!d.children) {
          onBubbleClick?.(d.data)
        }
      })

    // Draw labels
    if (showLabels) {
      mainGroup.selectAll('text')
        .data(root.descendants().filter((d: any) => {
          // Only label if circle is large enough
          return (d.r > 20) && !d.children
        }))
        .join('text')
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('font-size', `${labelSize}px`)
        .attr('font-weight', '600')
        .attr('fill', '#fff')
        .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
        .attr('pointer-events', 'none')
        .text((d: any) => {
          const text = d.data.name
          const maxLength = Math.floor(d.r / 4)
          return text.length > maxLength ? text.substring(0, maxLength - 2) + '...' : text
        })
    }

    // Draw values
    if (showValues) {
      mainGroup.selectAll('.value-label')
        .data(root.descendants().filter((d: any) => {
          return (d.r > 25) && !d.children
        }))
        .join('text')
        .attr('class', 'value-label')
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y + 12)
        .attr('text-anchor', 'middle')
        .attr('font-size', `${labelSize - 1}px`)
        .attr('font-weight', '500')
        .attr('fill', '#fff')
        .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
        .attr('pointer-events', 'none')
        .text((d: any) => d3.format(',.0f')(d.value ?? 0))
    }

  }, [data, width, height, padding, colors, showLabels, labelSize, showValues, onBubbleClick, onBubbleHover])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('packed-bubble', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
