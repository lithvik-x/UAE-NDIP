/**
 * Export Utilities for Visualizations
 *
 * Provides functionality to export visualizations and data
 * to various formats (PNG, SVG, PDF, CSV, Excel, JSON).
 */

import * as d3 from 'd3'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type ExportFormat = 'png' | 'svg' | 'pdf' | 'csv' | 'excel' | 'json'

export interface ExportOptions {
  format: ExportFormat
  filename?: string
  quality?: number // For PNG (0-1)
  scale?: number // For PNG (1-3, higher = better quality)
  backgroundColor?: string // For PNG/PDF
  width?: number // For PDF/PNG
  height?: number // For PDF/PNG
  title?: string // For PDF
  pageSize?: 'a4' | 'letter' | 'legal' // For PDF
  orientation?: 'portrait' | 'landscape' // For PDF
}

export interface DataExportOptions {
  format: 'csv' | 'excel' | 'json'
  filename?: string
  sheetName?: string // For Excel
  pretty?: boolean // For JSON
}

// ============================================================================
// SVG EXPORT
// ============================================================================

/**
 * Export an SVG element to raw SVG string
 */
export function exportSVGToString(svgElement: SVGElement): string {
  const serializer = new XMLSerializer()
  let source = serializer.serializeToString(svgElement)

  // Add XML declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source

  // Add namespaces if missing
  if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"')
  }
  if (!source.match(/^<svg[^>]+xmlns:xlink/)) {
    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"')
  }

  return source
}

/**
 * Export an SVG element to SVG file download
 */
export function exportSVG(svgElement: SVGElement, filename = 'visualization.svg'): void {
  const svgString = exportSVGToString(svgElement)
  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
  downloadBlob(blob, filename)
}

/**
 * Get SVG as data URL
 */
export function getSVGDataURL(svgElement: SVGElement): string {
  const svgString = exportSVGToString(svgElement)
  const base64 = btoa(unescape(encodeURIComponent(svgString)))
  return `data:image/svg+xml;base64,${base64}`
}

// ============================================================================
// PNG EXPORT
// ============================================================================

/**
 * Export an SVG element to PNG file download
 */
export async function exportPNG(
  svgElement: SVGElement,
  options: Partial<ExportOptions> = {}
): Promise<void> {
  const {
    filename = 'visualization.png',
    scale = 2,
    quality = 1,
    backgroundColor = '#ffffff',
    width,
    height,
  } = options

  // Get SVG dimensions
  const bbox = (svgElement as any).getBBox()
  const svgWidth = width || bbox.width + bbox.x
  const svgHeight = height || bbox.height + bbox.y

  // Create canvas
  const canvas = document.createElement('canvas')
  canvas.width = svgWidth * scale
  canvas.height = svgHeight * scale
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Could not get canvas context')

  // Fill background
  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Scale context
  ctx.scale(scale, scale)

  // Get SVG as image
  const svgDataURL = getSVGDataURL(svgElement)

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      ctx.drawImage(img, 0, 0, svgWidth, svgHeight)

      canvas.toBlob(
        (blob) => {
          if (blob) {
            downloadBlob(blob, filename)
            resolve()
          } else {
            reject(new Error('Failed to create PNG blob'))
          }
        },
        'image/png',
        quality
      )
    }
    img.onerror = reject
    img.src = svgDataURL
  })
}

/**
 * Export an SVG element to PNG and return data URL
 */
export async function getPNGDataURL(
  svgElement: SVGElement,
  options: Partial<ExportOptions> = {}
): Promise<string> {
  const {
    scale = 2,
    quality = 1,
    backgroundColor = '#ffffff',
    width,
    height,
  } = options

  const bbox = (svgElement as any).getBBox()
  const svgWidth = width || bbox.width + bbox.x
  const svgHeight = height || bbox.height + bbox.y

  const canvas = document.createElement('canvas')
  canvas.width = svgWidth * scale
  canvas.height = svgHeight * scale
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Could not get canvas context')

  ctx.fillStyle = backgroundColor
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.scale(scale, scale)

  const svgDataURL = getSVGDataURL(svgElement)

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      ctx.drawImage(img, 0, 0, svgWidth, svgHeight)
      const dataURL = canvas.toDataURL('image/png', quality)
      resolve(dataURL)
    }
    img.onerror = reject
    img.src = svgDataURL
  })
}

// ============================================================================
// PDF EXPORT
// ============================================================================

/**
 * Export an SVG element to PDF file download
 *
 * Note: This is a simplified implementation. For production use,
 * consider using a library like jsPDF.
 */
export async function exportPDF(
  svgElement: SVGElement,
  options: Partial<ExportOptions> = {}
): Promise<void> {
  const {
    filename = 'visualization.pdf',
    title = 'Visualization Export',
    pageSize = 'a4',
    orientation = 'landscape',
    backgroundColor = '#ffffff',
  } = options

  // Get SVG dimensions
  const bbox = (svgElement as any).getBBox()
  const svgWidth = bbox.width + bbox.x
  const svgHeight = bbox.height + bbox.y

  // Page sizes in points (1 point = 1/72 inch)
  const pageSizes: Record<string, { width: number; height: number }> = {
    a4: { width: 842, height: 595 }, // A4 landscape in points
    letter: { width: 792, height: 612 },
    legal: { width: 1008, height: 612 },
  }

  const pageSizePoints = pageSizes[pageSize]
  const pageWidth = orientation === 'landscape' ? pageSizePoints.width : pageSizePoints.height
  const pageHeight = orientation === 'landscape' ? pageSizePoints.height : pageSizePoints.width

  // Calculate scale to fit page
  const margin = 40
  const maxWidth = pageWidth - margin * 2
  const maxHeight = pageHeight - margin * 2
  const scale = Math.min(maxWidth / svgWidth, maxHeight / svgHeight, 1)

  // Get SVG as PNG
  const pngDataURL = await getPNGDataURL(svgElement, {
    scale: 2,
    width: svgWidth,
    height: svgHeight,
    backgroundColor,
  })

  // Create simple PDF (this is a basic implementation)
  // For production, use jsPDF or similar library
  const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
/MediaBox [0 0 ${pageWidth} ${pageHeight}]
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/Contents 4 0 R
/Resources <<
/XObject <<
/Img0 5 0 R
>>
>>
>>
endobj
4 0 obj
<<
/Length 0
>>
stream
endstream
endobj
5 0 obj
<<
/Type /XObject
/Subtype /Image
/Width ${svgWidth * scale}
/Height ${svgHeight * scale}
/BitsPerComponent 8
/ColorSpace /DeviceRGB
/Filter /DCTDecode
/Length ${pngDataURL.length}
>>
stream
${pngDataURL.split(',')[1]}
endstream
endobj
xref
0 6
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000123 00000 n
0000000262 00000 n
0000000357 00000 n
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
${pngDataURL.length + 500}
%%EOF`

  const blob = new Blob([pdfContent], { type: 'application/pdf' })
  downloadBlob(blob, filename)
}

// ============================================================================
// CSV EXPORT
// ============================================================================

/**
 * Convert array of objects to CSV string
 */
export function objectsToCSV(data: Record<string, any>[]): string {
  if (!data.length) return ''

  // Get headers from first object
  const headers = Object.keys(data[0])

  // Create header row
  const headerRow = headers.map(h => escapeCSVValue(h)).join(',')

  // Create data rows
  const dataRows = data.map(row =>
    headers.map(header => {
      const value = row[header]
      return escapeCSVValue(value)
    }).join(',')
  )

  return [headerRow, ...dataRows].join('\n')
}

/**
 * Escape a value for CSV
 */
function escapeCSVValue(value: any): string {
  if (value === null || value === undefined) return ''
  const stringValue = String(value)
  // If value contains comma, quote, or newline, wrap in quotes
  if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
    return `"${stringValue.replace(/"/g, '""')}"`
  }
  return stringValue
}

/**
 * Export data to CSV file
 */
export function exportCSV(data: Record<string, any>[], filename = 'data.csv'): void {
  const csv = objectsToCSV(data)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
  downloadBlob(blob, filename)
}

/**
 * Export D3 scale domain/range to CSV
 */
export function exportScaleToCSV(
  scale: d3.ScaleLinear<number, number> | d3.ScaleBand<string>,
  filename = 'scale.csv'
): void {
  const data: Array<{ key: string; value: string }> = []

  // Check if it's a linear scale by looking for range method
  if ('range' in scale && typeof (scale as any).invert === 'function') {
    // Linear/continuous scale
    const domain = (scale as d3.ScaleLinear<number, number>).domain()
    const range = (scale as d3.ScaleLinear<number, number>).range()
    data.push(
      { key: 'domain_min', value: String(domain[0]) },
      { key: 'domain_max', value: String(domain[1]) },
      { key: 'range_min', value: String(range[0]) },
      { key: 'range_max', value: String(range[1]) }
    )
  } else {
    // Band/ordinal scale
    const bandScale = scale as d3.ScaleBand<string>
    const domain = bandScale.domain()
    domain.forEach(d => {
      data.push({
        key: String(d),
        value: String(bandScale(d)!),
      })
    })
  }

  exportCSV(data, filename)
}

// ============================================================================
// EXCEL EXPORT
// ============================================================================

/**
 * Export data to Excel file
 *
 * Note: This is a simplified CSV-based export. For production use,
 * consider using a library like xlsx or exceljs.
 */
export function exportExcel(
  data: Record<string, any>[],
  options: DataExportOptions & { sheetName?: string } = { format: 'excel' }
): void {
  const { filename = 'data.xlsx', sheetName = 'Sheet1' } = options

  // For now, export as CSV with .xlsx extension
  // Excel can open CSV files
  // In production, use xlsx library for true Excel format
  exportCSV(data, filename.replace('.xlsx', '.csv'))
}

/**
 * Export multiple sheets to Excel file
 *
 * Note: This is a placeholder. For production use,
 * use xlsx library's book_new and book_append_sheet functions.
 */
export function exportMultiSheetExcel(
  sheets: Array<{ name: string; data: Record<string, any>[] }>,
  filename = 'data.xlsx'
): void {
  // Export first sheet as CSV for now
  if (sheets.length > 0) {
    exportExcel(sheets[0].data, { format: 'excel', filename, sheetName: sheets[0].name })
  }
}

// ============================================================================
// JSON EXPORT
// ============================================================================

/**
 * Export data to JSON file
 */
export function exportJSON(
  data: any,
  options: DataExportOptions & { pretty?: boolean } = { format: 'json' }
): void {
  const { filename = 'data.json', pretty = true } = options
  const json = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data)
  const blob = new Blob([json], { type: 'application/json;charset=utf-8' })
  downloadBlob(blob, filename)
}

/**
 * Export D3 scale to JSON
 */
export function exportScaleToJSON(
  scale: d3.ScaleLinear<number, number> | d3.ScaleBand<string>,
  filename = 'scale.json'
): void {
  const exportData: any = { type: 'scale' }

  // Check if it's a linear scale by looking for invert method
  if (typeof (scale as any).invert === 'function') {
    exportData.scaleType = 'linear'
    const linearScale = scale as d3.ScaleLinear<number, number>
    exportData.domain = linearScale.domain()
    exportData.range = linearScale.range()
  } else {
    exportData.scaleType = 'band'
    const bandScale = scale as d3.ScaleBand<string>
    exportData.domain = bandScale.domain()
    exportData.range = bandScale.range()
    exportData.bandwidth = bandScale.bandwidth()
  }

  exportJSON(exportData, { format: 'json', filename })
}

// ============================================================================
// UNIVERSAL EXPORT FUNCTION
// ============================================================================

/**
 * Universal export function for visualizations
 *
 * Automatically detects export type and calls appropriate function
 */
export async function exportVisualization(
  svgElement: SVGElement | null,
  data?: any,
  options: ExportOptions | DataExportOptions = { format: 'png' }
): Promise<void> {
  if (!svgElement && !data) {
    throw new Error('Either svgElement or data must be provided')
  }

  const format = options.format

  switch (format) {
    case 'svg':
      if (svgElement) exportSVG(svgElement, options.filename)
      break
    case 'png':
      if (svgElement) await exportPNG(svgElement, options)
      break
    case 'pdf':
      if (svgElement) await exportPDF(svgElement, options)
      break
    case 'csv':
      if (data) exportCSV(data, options.filename)
      break
    case 'excel':
      if (data) exportExcel(data, options as DataExportOptions & { sheetName?: string })
      break
    case 'json':
      if (data) exportJSON(data, options as DataExportOptions & { pretty?: boolean })
      break
    default:
      throw new Error(`Unsupported export format: ${format}`)
  }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Download a blob as a file
 */
function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/**
 * Copy SVG to clipboard
 */
export async function copySVGToClipboard(svgElement: SVGElement): Promise<void> {
  try {
    const svgString = exportSVGToString(svgElement)
    const blob = new Blob([svgString], { type: 'image/svg+xml' })
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/svg+xml': blob })
    ])
  } catch (error) {
    console.error('Failed to copy SVG to clipboard:', error)
    throw error
  }
}

/**
 * Copy PNG to clipboard
 */
export async function copyPNGToClipboard(
  svgElement: SVGElement,
  options: Partial<Omit<ExportOptions, 'format' | 'filename'>> = {}
): Promise<void> {
  try {
    const dataURL = await getPNGDataURL(svgElement, options)
    const response = await fetch(dataURL)
    const blob = await response.blob()
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob })
    ])
  } catch (error) {
    console.error('Failed to copy PNG to clipboard:', error)
    throw error
  }
}

/**
 * Print an SVG element
 */
export function printSVG(svgElement: SVGElement): void {
  const svgString = exportSVGToString(svgElement)
  const dataURL = getSVGDataURL(svgElement)

  const printWindow = window.open('', '_blank')
  if (!printWindow) {
    throw new Error('Failed to open print window')
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print Visualization</title>
        <style>
          @media print {
            body { margin: 0; }
            img { max-width: 100%; height: auto; }
          }
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 20px;
          }
        </style>
      </head>
      <body>
        <img src="${dataURL}" onload="window.print(); window.close();" />
      </body>
    </html>
  `)
  printWindow.document.close()
}

// ============================================================================
// BATCH EXPORT
// ============================================================================

/**
 * Export multiple visualizations at once
 */
export async function batchExport(
  exports: Array<{
    svgElement: SVGElement
    options: ExportOptions
  }>
): Promise<void> {
  for (const { svgElement, options } of exports) {
    await exportVisualization(svgElement, undefined, options)
    // Add small delay between exports to prevent browser issues
    await new Promise(resolve => setTimeout(resolve, 100))
  }
}

/**
 * Create a zip file of multiple exports
 *
 * Note: This requires a library like jszip. For now,
 * it's a placeholder that exports individual files.
 */
export async function exportAsZip(
  exports: Array<{
    svgElement: SVGElement
    filename: string
    format: ExportFormat
  }>,
  zipFilename = 'visualizations.zip'
): Promise<void> {
  // Placeholder: export files individually
  // In production, use JSZip to create a zip file
  for (const { svgElement, filename, format } of exports) {
    await exportVisualization(svgElement, undefined, { format, filename })
  }
}

// ============================================================================
// EXPORT HOOK
// ============================================================================

import { useRef, useCallback } from 'react'

export interface UseExportReturn {
  export: (format: ExportFormat, filename?: string) => Promise<void>
  copy: (format: 'svg' | 'png') => Promise<void>
  print: () => void
  isExporting: boolean
}

/**
 * useExport - React hook for exporting visualizations
 *
 * @example
 * const svgRef = useRef<SVGSVGElement>(null)
 * const { export, copy, print, isExporting } = useExport(svgRef)
 *
 * <button onClick={() => export('png', 'chart.png')}>Export PNG</button>
 * <button onClick={() => copy('png')}>Copy to Clipboard</button>
 * <button onClick={print}>Print</button>
 */
export function useExport(svgRef: React.RefObject<SVGSVGElement>): UseExportReturn {
  const isExportingRef = useRef(false)

  const exportVisualization_ = useCallback(async (format: ExportFormat, filename?: string) => {
    if (isExportingRef.current || !svgRef.current) return

    isExportingRef.current = true

    try {
      await exportVisualization(svgRef.current, undefined, {
        format,
        filename: filename || `visualization.${format}`,
      })
    } finally {
      isExportingRef.current = false
    }
  }, [svgRef])

  const copy = useCallback(async (format: 'svg' | 'png') => {
    if (!svgRef.current) return

    if (format === 'svg') {
      await copySVGToClipboard(svgRef.current)
    } else {
      await copyPNGToClipboard(svgRef.current)
    }
  }, [svgRef])

  const print = useCallback(() => {
    if (!svgRef.current) return
    printSVG(svgRef.current)
  }, [svgRef])

  return {
    export: exportVisualization_,
    copy,
    print,
    get isExporting() { return isExportingRef.current },
  }
}

// ============================================================================
// EXPORT SHORTCUTS
// ============================================================================

export const exportUtils = {
  // SVG
  exportSVG,
  exportSVGToString,
  getSVGDataURL,
  copySVGToClipboard,

  // PNG
  exportPNG,
  getPNGDataURL,
  copyPNGToClipboard,

  // PDF
  exportPDF,

  // Data
  exportCSV,
  exportExcel,
  exportJSON,
  objectsToCSV,

  // Utilities
  exportVisualization,
  batchExport,
  exportAsZip,
  printSVG,
  useExport,
} as const
