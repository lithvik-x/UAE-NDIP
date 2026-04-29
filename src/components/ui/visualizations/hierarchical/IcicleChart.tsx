'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { partition } from 'd3-hierarchy'
import { cn } from '@/lib/utils'

interface IcicleDataNode {
  name: string
  value: number
  children?: IcicleDataNode[]
  category?: string
  color?: string
}

interface IcicleChartProps {
  data: IcicleDataNode
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  labelSize?: number
  showValues?: boolean
  orientation?: 'horizontal' | 'vertical'
  className?: string
  onNodeClick?: (node: IcicleDataNode) => void
  onNodeHover?: (node: IcicleDataNode | null) => void
}

/**
 * IcicleChart - Rectangular hierarchy partition
 *
 * Hierarchical rectangles stacked like icicles. Each level represents
 * a depth in hierarchy, width/height represents value.
 *
 * Use cases:
 * - Website navigation paths
 * - File system hierarchy
 * - Taxonomy breakdown
 * - Budget allocation hierarchy
 */
export function IcicleChart({
  data,
  width = 800,
  height = 500,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20,
  colors,
  showLabels = true,
  labelSize = 11,
  showValues = false,
  orientation = 'horizontal',
  className = '',
  onNodeClick,
  onNodeHover,
}: IcicleChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Create hierarchy
    const root = d3.hierarchy(data)
      .sum(d => d.value || 0)
      .sort((a, b) => ((b.value as any) || 0) - ((a.value as any) || 0))

    // Create partition layout
    const partitionLayout = partition()
    if (orientation === 'horizontal') {
      partitionLayout.size([innerWidth, innerHeight])
    } else {
      partitionLayout.size([innerHeight, innerWidth])
    }

    partitionLayout(root as any)

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getNodeColor = (node: d3.HierarchyRectangularNode<IcicleDataNode>) => {
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
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Draw nodes
    const nodes = mainGroup.selectAll('g')
      .data(root.descendants())
      .join('g')
      .attr('class', 'icicle-node')
      .style('cursor', onNodeClick ? 'pointer' : 'default')

    if (orientation === 'horizontal') {
      nodes.each(function(d) {
        const rectNode = d as d3.HierarchyRectangularNode<IcicleDataNode>
        const node = d3.select(this)
        const color = getNodeColor(rectNode)

        node.append('rect')
          .attr('x', rectNode.x0)
          .attr('y', rectNode.y0)
          .attr('width', rectNode.x1 - rectNode.x0)
          .attr('height', rectNode.y1 - rectNode.y0)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 1)
          .attr('opacity', 0.85)
          .style('transition', 'opacity 0.2s')
      })
    } else {
      nodes.each(function(d) {
        const rectNode = d as d3.HierarchyRectangularNode<IcicleDataNode>
        const node = d3.select(this)
        const color = getNodeColor(rectNode)

        node.append('rect')
          .attr('x', rectNode.y0)
          .attr('y', rectNode.x0)
          .attr('width', rectNode.y1 - rectNode.y0)
          .attr('height', rectNode.x1 - rectNode.x0)
          .attr('fill', color)
          .attr('stroke', '#fff')
          .attr('stroke-width', 1)
          .attr('opacity', 0.85)
          .style('transition', 'opacity 0.2s')
      })
    }

    nodes.on('mouseover', function(event, d) {
        setHoveredNode(d.data.name)

        // Highlight path to root
        const ancestors = d.ancestors()
        nodes.selectAll('rect')
          .attr('opacity', node =>
            ancestors.includes(node as any) ? 1 : 0.2
          )

        onNodeHover?.(d.data)
      })
      .on('mouseout', function() {
        setHoveredNode(null)
        nodes.selectAll('rect').attr('opacity', 0.85)
        onNodeHover?.(null)
      })
      .on('click', (event, d) => {
        onNodeClick?.(d.data)
      })

    // Draw labels
    if (showLabels) {
      nodes.each(function(d) {
        const rectNode = d as d3.HierarchyRectangularNode<IcicleDataNode>
        const node = d3.select(this)

        if (orientation === 'horizontal') {
          const width = rectNode.x1 - rectNode.x0
          const height = rectNode.y1 - rectNode.y0

          // Only label if rectangle is large enough
          if (width > 30 && height > 15) {
            const textX = rectNode.x0 + width / 2
            const textY = rectNode.y0 + height / 2

            node.append('text')
              .attr('x', textX)
              .attr('y', textY)
              .attr('text-anchor', 'middle')
              .attr('dominant-baseline', 'middle')
              .attr('font-size', `${labelSize}px`)
              .attr('font-weight', '600')
              .attr('fill', '#fff')
              .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.7)')
              .attr('pointer-events', 'none')
              .text(d.data.name)
          }
        } else {
          const width = rectNode.y1 - rectNode.y0
          const height = rectNode.x1 - rectNode.x0

          // Only label if rectangle is large enough
          if (width > 30 && height > 15) {
            const textX = rectNode.y0 + width / 2
            const textY = rectNode.x0 + height / 2

            node.append('text')
              .attr('x', textX)
              .attr('y', textY)
              .attr('text-anchor', 'middle')
              .attr('dominant-baseline', 'middle')
              .attr('font-size', `${labelSize}px`)
              .attr('font-weight', '600')
              .attr('fill', '#fff')
              .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.7)')
              .attr('pointer-events', 'none')
              .text(d.data.name)
          }
        }
      })
    }

    // Draw values
    if (showValues) {
      nodes.each(function(d) {
        const rectNode = d as d3.HierarchyRectangularNode<IcicleDataNode>
        const node = d3.select(this)

        if (orientation === 'horizontal') {
          const width = rectNode.x1 - rectNode.x0
          const height = rectNode.y1 - rectNode.y0

          if (width > 40 && height > 25) {
            node.append('text')
              .attr('x', rectNode.x0 + width / 2)
              .attr('y', rectNode.y0 + height / 2 + 12)
              .attr('text-anchor', 'middle')
              .attr('font-size', `${labelSize - 1}px`)
              .attr('fill', '#fff')
              .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.7)')
              .attr('pointer-events', 'none')
              .text(d3.format(',.0f')(d.value ?? 0))
          }
        }
      })
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, showLabels, labelSize, showValues, orientation, onNodeClick, onNodeHover])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className={cn('icicle-chart', className)}
      style={{ overflow: 'visible' }}
    />
  )
}
