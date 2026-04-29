'use client'

import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import cloud from 'd3-cloud'

interface WordData {
  text: string
  value: number
  category?: string
  color?: string
}

interface CloudWord {
  text: string
  size: number
  x: number
  y: number
  rotate: number
  color?: string
  originalData?: WordData
}

interface WordCloudProps {
  data: WordData[]
  width?: number
  height?: number
  minFontSize?: number
  maxFontSize?: number
  padding?: number
  spiral?: 'archimedean' | 'rectangular'
  colors?: string[]
  rotate?: ((d: WordData) => number) | number
  className?: string
  onWordClick?: (word: WordData) => void
  onWordHover?: (word: WordData | null) => void
}

/**
 * WordCloud - Tag cloud for keyword prominence
 *
 * Word-sized visualization where font size represents frequency/importance.
 * Ideal for topic discovery and keyword analysis.
 *
 * Use cases:
 * - Trending topic discovery
 * - Hashtag prominence display
 * - Keyword frequency analysis
 * - Pain point extraction
 */
export function WordCloud({
  data,
  width = 600,
  height = 400,
  minFontSize = 12,
  maxFontSize = 80,
  padding = 5,
  spiral = 'archimedean',
  colors,
  rotate = 0,
  className = '',
  onWordClick,
  onWordHover,
}: WordCloudProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [layoutData, setLayoutData] = useState<CloudWord[] | null>(null)

  useEffect(() => {
    if (!data.length) return

    // Set up color scale
    const defaultColors = [
      '#0ea5e9', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444',
      '#06b6d4', '#ec4899', '#f97316', '#14b8a6', '#3b82f6',
    ]
    const colorScale = d3.scaleOrdinal(defaultColors)

    // Set up font size scale
    const maxValue = d3.max(data, d => d.value) || 1
    const minValue = d3.min(data, d => d.value) || 0
    const fontScale = d3.scaleLinear()
      .domain([minValue, maxValue])
      .range([minFontSize, maxFontSize])

    // Create layout
    const layout = cloud()
      .size([width, height])
      .words(data.map(d => ({
        text: d.text,
        size: fontScale(d.value),
        color: d.color || (colors ? colors[Math.floor(Math.random() * colors.length)] : colorScale(d.text) as string),
        originalData: d,
      })))
      .padding(padding)
      .rotate(rotate instanceof Function ? (rotate as any) : () => rotate)
      .font('Impact, sans-serif')
      .fontSize(d => (d as any).size)
      .on('end', (words) => {
        setLayoutData(words as CloudWord[])
      })

    layout.start()

  }, [data, width, height, minFontSize, maxFontSize, padding, spiral, colors, rotate])

  useEffect(() => {
    if (!svgRef.current || !layoutData) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const mainGroup = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)

    // Draw words
    const words = mainGroup.selectAll('text')
      .data(layoutData)
      .join('text')
      .attr('text-anchor', 'middle')
      .attr('transform', d => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`)
      .attr('font-size', d => d.size)
      .attr('font-family', 'Impact, sans-serif')
      .attr('fill', d => (d as any).color)
      .attr('opacity', 0.85)
      .attr('class', 'word-cloud-text')
      .style('cursor', onWordClick ? 'pointer' : 'default')
      .style('transition', 'opacity 0.2s, transform 0.2s')
      .text(d => d.text)
      .on('mouseover', function(event, d) {
        d3.select(this)
          .attr('opacity', 1)
          .style('transform', `scale(1.1)`)
        onWordHover?.((d as any).originalData)
      })
      .on('mouseout', function(event, d) {
        d3.select(this)
          .attr('opacity', 0.85)
          .style('transform', `scale(1)`)
        onWordHover?.(null)
      })
      .on('click', (event, d) => {
        onWordClick?.((d as any).originalData)
      })

  }, [layoutData, width, height, onWordClick, onWordHover])

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
