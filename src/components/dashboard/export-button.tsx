'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, FileText, Image, Table } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * LITHVIK NEXUS - Dashboard Export Functionality
 * Provides multiple export formats for dashboard data
 */

export type ExportFormat = 'csv' | 'json' | 'pdf' | 'png' | 'excel'

interface ExportOption {
  id: ExportFormat
  label: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  mimeType: string
  extension: string
}

const exportOptions: ExportOption[] = [
  {
    id: 'csv',
    label: 'CSV',
    icon: Table,
    description: 'Comma-separated values for spreadsheets',
    mimeType: 'text/csv',
    extension: 'csv',
  },
  {
    id: 'json',
    label: 'JSON',
    icon: FileText,
    description: 'Structured data format for developers',
    mimeType: 'application/json',
    extension: 'json',
  },
  {
    id: 'excel',
    label: 'Excel',
    icon: Table,
    description: 'Microsoft Excel compatible format',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    extension: 'xlsx',
  },
  {
    id: 'pdf',
    label: 'PDF Report',
    icon: FileText,
    description: 'Formatted document for sharing',
    mimeType: 'application/pdf',
    extension: 'pdf',
  },
  {
    id: 'png',
    label: 'PNG Image',
    icon: Image,
    description: 'High-quality screenshot of the dashboard',
    mimeType: 'image/png',
    extension: 'png',
  },
]

interface ExportButtonProps {
  data?: any
  filename?: string
  onExport?: (format: ExportFormat, data: any) => Promise<void> | void
  isLoading?: boolean
  disabled?: boolean
  size?: 'default' | 'sm' | 'lg'
  variant?: 'ghost' | 'outline' | 'secondary' | 'premium'
  className?: string
  formats?: ExportFormat[]
}

export function ExportButton({
  data,
  filename = 'lithvik-nexus-export',
  onExport,
  isLoading = false,
  disabled = false,
  size = 'default',
  variant = 'ghost',
  className,
  formats = ['csv', 'json', 'pdf', 'png'],
}: ExportButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [exportingFormat, setExportingFormat] = React.useState<ExportFormat | null>(null)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const availableFormats = exportOptions.filter(opt => formats.includes(opt.id))

  const handleExport = async (format: ExportFormat) => {
    setExportingFormat(format)
    try {
      if (onExport) {
        await onExport(format, data)
      } else {
        // Default export behavior
        await defaultExport(format, data, filename)
      }
    } catch (error) {
      console.error('Export failed:', error)
    } finally {
      setExportingFormat(null)
      setIsOpen(false)
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant={variant}
        size={size}
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled || isLoading}
        className={cn('gap-2', className)}
      >
        <Download className="h-4 w-4" />
        <span className="hidden sm:inline">Export</span>
        {isLoading && exportingFormat && (
          <span className="ml-1 text-xs opacity-70">({exportingFormat})</span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 z-50 w-56 glass-premium rounded-xl shadow-premium-xl border border-white/30 overflow-hidden">
          <div className="p-2">
            <div className="px-3 py-2 text-xs font-semibold text-platinum-500-600 uppercase tracking-wider">
              Export As
            </div>
            {availableFormats.map((format) => (
              <button
                key={format.id}
                onClick={() => handleExport(format.id)}
                disabled={exportingFormat !== null}
                className={cn(
                  'w-full flex items-start gap-3 px-3 py-2.5 rounded-lg text-left transition-all',
                  'hover:bg-white/50 hover:text-navy-500-700 text-platinum-500-700',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  exportingFormat === format.id && 'bg-navy-50 text-navy-500-700'
                )}
              >
                <format.icon className={cn(
                  'h-4 w-4 mt-0.5 flex-shrink-0',
                  exportingFormat === format.id && 'animate-spin'
                )} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{format.label}</div>
                  <div className="text-xs text-platinum-500-600 truncate">{format.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * Default export handler
 */
async function defaultExport(format: ExportFormat, data: any, filename: string) {
  const timestamp = new Date().toISOString().split('T')[0]
  const fullFilename = `${filename}-${timestamp}`

  switch (format) {
    case 'json':
      exportAsJson(data, fullFilename)
      break
    case 'csv':
      exportAsCsv(data, fullFilename)
      break
    case 'png':
      await exportAsPng(fullFilename)
      break
    default:
      console.log(`Export format ${format} not implemented yet`)
  }
}

/**
 * Export data as JSON
 */
function exportAsJson(data: any, filename: string) {
  const jsonString = JSON.stringify(data, null, 2)
  const blob = new Blob([jsonString], { type: 'application/json' })
  downloadBlob(blob, `${filename}.json`)
}

/**
 * Export data as CSV
 */
function exportAsCsv(data: any, filename: string) {
  if (Array.isArray(data) && data.length > 0) {
    const headers = Object.keys(data[0])
    const csvContent = [
      headers.join(','),
      ...data.map((row: any) =>
        headers.map((header) => {
          const value = row[header]
          // Escape values that contain commas or quotes
          if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
            return `"${value.replace(/"/g, '""')}"`
          }
          return value ?? ''
        }).join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    downloadBlob(blob, `${filename}.csv`)
  }
}

/**
 * Export dashboard as PNG image
 */
async function exportAsPng(filename: string) {
  // Guard against SSR
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return
  }

  // Use html2canvas or similar library
  // For now, we'll use a simple window.print() approach
  // In production, you would use html2canvas or dom-to-image

  // Create a temporary notification
  const notification = document.createElement('div')
  notification.textContent = 'Preparing image export...'
  notification.className = 'fixed top-4 right-4 glass-premium px-4 py-2 rounded-lg shadow-premium-lg z-[9999]'
  document.body.appendChild(notification)

  try {
    // In a real implementation, use html2canvas
    // await html2canvas(document.body).then(canvas => {
    //   canvas.toBlob(blob => downloadBlob(blob, `${filename}.png`))
    // })

    // Fallback: print dialog
    window.print()
  } finally {
    setTimeout(() => notification.remove(), 2000)
  }
}

/**
 * Download a blob as a file
 */
function downloadBlob(blob: Blob, filename: string) {
  // Guard against SSR
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return
  }

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
 * Quick Export Button - Single format export
 */
interface QuickExportButtonProps {
  format: ExportFormat
  data?: any
  filename?: string
  onExport?: () => Promise<void> | void
  isLoading?: boolean
  disabled?: boolean
  className?: string
}

export function QuickExportButton({
  format,
  data,
  filename,
  onExport,
  isLoading = false,
  disabled = false,
  className,
}: QuickExportButtonProps) {
  const formatInfo = exportOptions.find(opt => opt.id === format)

  const handleClick = async () => {
    if (onExport) {
      await onExport()
    } else if (data) {
      await defaultExport(format, data, filename || 'export')
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={cn('h-8 w-8', className)}
      title={`Export as ${formatInfo?.label}`}
    >
      <Download className={cn('h-4 w-4', isLoading && 'animate-spin')} />
    </Button>
  )
}

/**
 * Export Toolbar - Full export control panel
 */
interface ExportToolbarProps {
  title?: string
  description?: string
  data?: any
  onExport?: (format: ExportFormat, data: any) => Promise<void> | void
  isLoading?: boolean
  className?: string
}

export function ExportToolbar({
  title = 'Export Dashboard',
  description = 'Choose your preferred format',
  data,
  onExport,
  isLoading = false,
  className,
}: ExportToolbarProps) {
  return (
    <div className={cn('glass-premium rounded-xl p-4 space-y-4', className)}>
      <div>
        <h3 className="text-sm font-semibold text-platinum-500-900">{title}</h3>
        <p className="text-xs text-platinum-500-600 mt-1">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {exportOptions.map((format) => (
          <Button
            key={format.id}
            variant="outline"
            onClick={() => onExport?.(format.id, data)}
            disabled={isLoading}
            className={cn(
              'flex flex-col items-center gap-2 h-20 hover:bg-white/50 transition-all',
              isLoading && 'animate-pulse'
            )}
          >
            <format.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{format.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
