'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { chord, ribbon } from 'd3-chord'

interface ChordData {
  source: string
  target: string
  value: number
}

interface ChordDiagramProps {
  data: ChordData[]
  width?: number
  height?: number
  innerRadius?: number
  outerRadius?: number
  padAngle?: number
  colors?: Record<string, string> | string[]
  showLabels?: boolean
  labelSize?: number
  ribbonOpacity?: number
  className?: string
  onChordClick?: (data: ChordData) => void
  onChordHover?: (data: ChordData | null) => void
}

/**
 * ChordDiagram - Circular relationship matrix
 *
 * Radial visualization showing flows and connections between entities.
 * Thickness of chords represents magnitude of relationship.
 *
 * Use cases:
 * - Cross-platform content sharing
 * - Audience overlap analysis
 * - Influence network flows
 * - Platform migration patterns
 */
export function ChordDiagram({
  data,
  width = 600,
  height = 600,
  innerRadius = 150,
  outerRadius = 180,
  padAngle = 0.05,
  colors,
  showLabels = true,
  labelSize = 12,
  ribbonOpacity = 0.6,
  className = '',
  onChordClick,
  onChordHover,
}: ChordDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredChord, setHoveredChord] = useState<string | null>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const centerX = width / 2
    const centerY = height / 2

    // Get unique entities
    const entities = Array.from(new Set([
      ...data.map(d => d.source),
      ...data.map(d => d.target)
    ]))

    // Create matrix
    const matrix: number[][] = entities.map(() =>
      entities.map(() => 0)
    )

    data.forEach(d => {
      const sourceIndex = entities.indexOf(d.source)
      const targetIndex = entities.indexOf(d.target)
      if (sourceIndex !== -1 && targetIndex !== -1) {
        matrix[sourceIndex][targetIndex] += d.value
      }
    })

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    const getEntityColor = (entity: string, index: number) => {
      if (Array.isArray(colors)) {
        return colors[index % colors.length]
      }
      if (colors && entity in colors) {
        return (colors as Record<string, string>)[entity]
      }
      return colorScale(entity) as string
    }

    // Create chord layout
    const chordLayout = chord()
      .padAngle(padAngle)
      .sortSubgroups(d3.descending)

    const chords = chordLayout(matrix)

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`)

    // Create arc generator for outer ring
    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)

    // Create ribbon generator
    const ribbonGenerator = ribbon()
      .radius(innerRadius)

    // Draw ribbons
    const ribbons = mainGroup.selectAll('.ribbon')
      .data(chords)
      .join('path')
      .attr('d', ribbonGenerator as any)
      .attr('fill', d => {
        const sourceIndex = d.source.index
        return getEntityColor(entities[sourceIndex], sourceIndex)
      })
      .attr('stroke', d => {
        const targetIndex = d.target.index
        return getEntityColor(entities[targetIndex], targetIndex)
      })
      .attr('stroke-width', 1)
      .attr('opacity', ribbonOpacity)
      .attr('class', 'chord-ribbon')
      .style('cursor', 'pointer')
      .style('transition', 'opacity 0.2s')
      .on('mouseover', function(event, d) {
        const sourceEntity = entities[d.source.index]
        const targetEntity = entities[d.target.index]
        const chordKey = `${sourceEntity}-${targetEntity}`
        setHoveredChord(chordKey)

        // Fade other ribbons
        ribbons.attr('opacity', 0.1)
        d3.select(this).attr('opacity', 1)

        onChordHover?.({
          source: sourceEntity,
          target: targetEntity,
          value: d.source.value,
        })
      })
      .on('mouseout', function() {
        setHoveredChord(null)
        ribbons.attr('opacity', ribbonOpacity)
        onChordHover?.(null)
      })
      .on('click', (event, d) => {
        onChordClick?.({
          source: entities[d.source.index],
          target: entities[d.target.index],
          value: d.source.value,
        })
      })

    // Draw outer ring (groups)
    const groups = mainGroup.selectAll('.group')
      .data(chords.groups)
      .join('g')
      .attr('class', 'chord-group')

    groups.append('path')
      .attr('d', arc as any)
      .attr('fill', (d, i) => getEntityColor(entities[i], i))
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .attr('opacity', 0.9)
      .style('cursor', 'pointer')
      .style('transition', 'opacity 0.2s')
      .on('mouseover', function(event, d) {
        // Fade all ribbons except those connected to this group
        ribbons.attr('opacity', r => {
          return (r.source.index === d.index || r.target.index === d.index) ? 1 : 0.1
        })
        d3.select(this).attr('opacity', 1)
      })
      .on('mouseout', function() {
        ribbons.attr('opacity', ribbonOpacity)
        groups.select('path').attr('opacity', 0.9)
      })

    // Add labels
    if (showLabels) {
      groups.each(function(d, i) {
        const angle = (d.startAngle + d.endAngle) / 2
        const labelRadius = outerRadius + 15
        const x = Math.cos(angle - Math.PI / 2) * labelRadius
        const y = Math.sin(angle - Math.PI / 2) * labelRadius

        d3.select(this)
          .append('text')
          .attr('x', x)
          .attr('y', y)
          .attr('text-anchor', x > 0 ? 'start' : 'end')
          .attr('dominant-baseline', 'middle')
          .attr('font-size', `${labelSize}px`)
          .attr('font-weight', '500')
          .attr('fill', '#334155')
          .text(entities[i])
      })
    }

  }, [data, width, height, innerRadius, outerRadius, padAngle, colors, showLabels, labelSize, ribbonOpacity, onChordClick, onChordHover])

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
