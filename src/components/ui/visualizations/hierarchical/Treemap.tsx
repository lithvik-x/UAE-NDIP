'use client'

import * as React from 'react'
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface TreemapNode {
  name: string
  value: number
  children?: TreemapNode[]
  category?: string
  color?: string
}

interface TreemapProps {
  data: TreemapNode
  width?: number
  height?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  colors?: Record<string, string> | string[]
  padding?: number
  showLabels?: boolean
  showValues?: boolean
  labelFontSize?: number
  className?: string
  onNodeClick?: (node: TreemapNode) => void
}

/**
 * Treemap - Hierarchical part-to-whole visualization
 *
 * Displays hierarchical data as nested rectangles, where area represents
 * value. Ideal for showing composition and dominance.
 *
 * Use cases:
 * - Platform share of voice
 * - Topic dominance analysis
 * - Budget allocation breakdown
 * - Influencer impact mapping
 */
export function Treemap({
  data,
  width = 800,
  height = 500,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20,
  colors,
  padding = 2,
  showLabels = true,
  showValues = true,
  labelFontSize = 12,
  className = '',
  onNodeClick,
}: TreemapProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const innerWidth = width - marginLeft - marginRight
    const innerHeight = height - marginTop - marginBottom

    // Create hierarchy
    const root = d3.hierarchy(data)
      .sum(d => (d as any).value || 0)
      .sort((a, b) => ((b.value as any) || 0) - ((a.value as any) || 0))

    // Create treemap layout
    const treemap = d3.treemap()
      .size([innerWidth, innerHeight])
      .padding(padding)
      .round(true)

    treemap(root as any)

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${marginLeft}, ${marginTop})`)

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getNodeColor = (node: d3.HierarchyRectangularNode<TreemapNode>) => {
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

    // Filter to leaf nodes
    const leaves = root.leaves()

    // Draw tiles
    const tiles = mainGroup.selectAll('g')
      .data(leaves)
      .join('g')
      .attr('transform', (d: any) => `translate(${d.x0},${d.y0})`)
      .attr('class', 'treemap-tile')
      .style('cursor', 'pointer')
      .style('transition', 'opacity 0.2s')

    tiles.append('rect')
      .attr('width', (d: any) => d.x1 - d.x0)
      .attr('height', (d: any) => d.y1 - d.y0)
      .attr('fill', d => getNodeColor(d as any))
      .attr('stroke', '#fff')
      .attr('stroke-width', 1)
      .attr('opacity', 0.85)

    tiles.on('mouseover', function() {
      d3.select(this).select('rect').attr('opacity', 1)
    })
    tiles.on('mouseout', function() {
      d3.select(this).select('rect').attr('opacity', 0.85)
    })

    // Add labels
    if (showLabels) {
      tiles.each(function(d: any) {
        const node = d3.select(this)
        const width = d.x1 - d.x0
        const height = d.y1 - d.y0
        const value = d.value as number

        // Only show label if box is large enough
        if (width > 40 && height > 20) {
          const label = node.append('text')
            .attr('x', padding)
            .attr('y', padding + labelFontSize)
            .attr('fill', 'white')
            .attr('font-size', `${labelFontSize}px`)
            .attr('font-weight', '600')
            .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
            .text(d.data.name)

          // Truncate if too long
          if (width > 0) {
            label.call(wrapText, width - 2 * padding)
          }

          // Add value if requested and fits
          if (showValues && height > labelFontSize * 2.5) {
            node.append('text')
              .attr('x', padding)
              .attr('y', padding + labelFontSize * 2.2)
              .attr('fill', 'white')
              .attr('font-size', `${labelFontSize * 0.85}px`)
              .attr('font-weight', '400')
              .attr('text-shadow', '0 1px 3px rgba(0,0,0,0.5)')
              .text(d3.format(',.0f')(value))
          }
        }
      })
    }

    // Add click handler
    if (onNodeClick) {
      tiles.on('click', (event, d) => {
        onNodeClick(d.data)
      })
    }

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft, colors, padding, showLabels, showValues, labelFontSize, onNodeClick])

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

// Helper function to wrap text
function wrapText(selection: d3.Selection<any, unknown, any, any>, width: number) {
  selection.each(function() {
    const text = d3.select(this)
    const words = text.text().split(/\s+/).reverse()
    let line: string[] = []
    let lineNumber = 0
    const lineHeight = 1.1
    const y = text.attr('y')
    const dy = parseFloat(text.attr('dy'))
    let tspan = text.text(null)
      .append('tspan')
      .attr('x', 0)
      .attr('y', y)
      .attr('dy', dy + 'em')

    let word: string | undefined
    while ((word = words.pop())) {
      line.push(word)
      tspan.text(line.join(' '))
      if ((tspan.node() as any)?.getComputedTextLength()! > width) {
        line.pop()
        tspan.text(line.join(' '))
        line = [word]
        tspan = text.append('tspan')
          .attr('x', 0)
          .attr('y', y)
          .attr('dy', ++lineNumber * lineHeight + dy + 'em')
          .text(word)
      }
    }
  })
}
