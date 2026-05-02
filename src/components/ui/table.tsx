import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * @fileoverview Table Component System - Premium data display with glassmorphism design
 * @module components/ui/table
 * @description
 * A comprehensive table component suite built on the LITHVIK NEXUS design system.
 * Features include:
 * - Glassmorphism design with premium blur effects
 * - Full dark mode support
 * - Interactive row states
 * - Sortable columns with visual indicators
 * - Cell variants for status indication
 * - Enterprise table with pagination and selection
 * - Complete ARIA accessibility support
 * @example
 * ```tsx
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *       <TableHead>Status</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John</TableCell>
 *       <TableCell variant="success">Active</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */

/**
 * Table - Root container component
 * @description Wraps the table with premium glassmorphism styling and overflow handling
 * @see {@link https://www.w3.org/WAI/tutorials/tables/|WAI-ARIA Table Tutorial}
 */
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & {
    /** Optional variant for different glass intensity levels */
    variant?: 'default' | 'subtle' | 'medium' | 'strong' | 'premium'
    /** Optional size variant */
    size?: 'sm' | 'md' | 'lg'
  }
>(({ className, variant = 'default', size = 'md', ...props }, ref) => {
  const variantClasses = {
    default: 'glass-premium border border-white/20 shadow-premium-sm',
    subtle: 'glass-subtle border border-white/10',
    medium: 'glass-medium border border-white/15',
    strong: 'glass-strong border border-white/20',
    premium: 'glass-premium-premium border border-white/20 shadow-premium-md',
  }

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  return (
    <div className="relative w-full overflow-auto rounded-2xl">
      <table
        ref={ref}
        className={cn(
          'w-full caption-bottom',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      />
    </div>
  )
})
Table.displayName = 'Table'

/**
 * TableHeader - Header section component
 * @description Styled thead with backdrop blur and gradient background
 */
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      '[&_tr]:border-b [&_tr]:border-white/10 bg-white/40 backdrop-blur-sm dark:bg-white/5 dark:[&_tr]:border-white/5',
      className
    )}
    {...props}
  />
))
TableHeader.displayName = 'TableHeader'

/**
 * TableBody - Body section component
 * @description Main content area with row dividers
 */
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      '[&_tr:last-child]:border-0 divide-y divide-white/5 dark:divide-white/5',
      className
    )}
    {...props}
  />
))
TableBody.displayName = 'TableBody'

/**
 * TableFooter - Footer section component
 * @description Summary section with premium gradient styling
 */
const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t border-white/10 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md font-medium text-platinum-700 dark:from-white/10 dark:to-white/5 dark:text-platinum-300',
      className
    )}
    {...props}
  />
))
TableFooter.displayName = 'TableFooter'

/**
 * TableRow - Row component
 * @description Interactive rows with hover effects and selection states
 */
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & {
    /** Enables hover interaction and pointer cursor */
    interactive?: boolean
    /** Visual selection state */
    selected?: boolean
  }
>(({ className, interactive, selected, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b border-white/5 dark:border-white/5 transition-all duration-200',
      interactive && 'hover:bg-white/50 dark:hover:bg-white/5 hover:shadow-inner cursor-pointer group',
      selected && 'bg-navy-500/10 dark:bg-navy-500/20',
      !interactive && !selected && 'data-[state=selected]:bg-white/40 dark:data-[state=selected]:bg-white/5',
      className
    )}
    data-selected={selected}
    aria-selected={selected}
    {...props}
  />
))
TableRow.displayName = 'TableRow'

/**
 * TableHead - Header cell component
 * @description Column headers with optional sorting functionality
 */
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & {
    /** Enables sortable interaction */
    sortable?: boolean
    /** Current sort direction indicator */
    sortDirection?: 'asc' | 'desc' | 'none'
    /** ARIA sort attribute value */
    ariaSort?: 'ascending' | 'descending' | 'none'
  }
>(({ className, sortable, sortDirection = 'none', ariaSort, children, ...props }, ref) => {
  // Convert sortDirection to ariaSort if not provided
  const computedAriaSort = ariaSort || (sortDirection === 'asc' ? 'ascending' : sortDirection === 'desc' ? 'descending' : 'none')

  return (
    <th
      ref={ref}
      className={cn(
        'h-12 px-4 text-left align-middle font-semibold text-platinum-600 dark:text-platinum-400 text-xs uppercase tracking-wider',
        '[&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-[50px]]',
        sortable && 'hover:text-navy-600 dark:hover:text-navy-400 hover:bg-white/50 dark:hover:bg-white/5 cursor-pointer transition-colors select-none',
        className
      )}
      aria-sort={computedAriaSort}
      {...props}
    >
      <div className="flex items-center gap-2">
        {children}
        {sortable && (
          <span
            className="text-platinum-400 dark:text-platinum-500 text-lg"
            aria-hidden="true"
          >
            {sortDirection === 'asc' ? '↑' : sortDirection === 'desc' ? '↓' : '↕'}
          </span>
        )}
      </div>
    </th>
  )
})
TableHead.displayName = 'TableHead'

/**
 * TableCell - Data cell component
 * @description Content cells with optional status variants
 */
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & {
    /** Visual variant for status indication */
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  }
>(({ className, variant = 'default', ...props }, ref) => {
  const variantStyles = {
    default: '',
    success: 'bg-emerald-50/50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
    warning: 'bg-gold-50/50 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400',
    error: 'bg-red-50/50 dark:bg-red-500/10 text-red-700 dark:text-red-400',
    info: 'bg-navy-50/50 dark:bg-navy-500/10 text-navy-700 dark:text-navy-400',
  }

  return (
    <td
      ref={ref}
      className={cn(
        'p-4 align-middle text-platinum-700 dark:text-platinum-300',
        '[&:has([role=checkbox])]:pr-0 [&:has([role=checkbox])]:w-[50px]',
        variant && variantStyles[variant],
        className
      )}
      {...props}
    />
  )
})
TableCell.displayName = 'TableCell'

/**
 * TableCaption - Caption component
 * @description Table caption with proper styling and ARIA support
 */
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-platinum-500 dark:text-platinum-400', className)}
    {...props}
  />
))
TableCaption.displayName = 'TableCaption'

/**
 * EnterpriseTableProps - Configuration interface for EnterpriseTable
 */
interface EnterpriseTableProps<T extends Record<string, any>> extends React.HTMLAttributes<HTMLDivElement> {
  /** Column definitions */
  columns: {
    /** Unique identifier for the column */
    id: string
    /** Display header text */
    header: string
    /** Custom cell renderer */
    cell?: (row: T) => React.ReactNode
    /** Enables sortable functionality */
    sortable?: boolean
    /** Current sort direction */
    sortDirection?: 'asc' | 'desc' | 'none'
    /** Sort change callback */
    onSort?: () => void
    /** Additional CSS classes */
    className?: string
  }[]
  /** Table data array */
  data: T[]
  /** Field to use as unique key */
  keyField: keyof T
  /** Row click handler */
  onRowClick?: (row: T) => void
  /** Enables row selection */
  selectable?: boolean
  /** Array of selected row IDs */
  selectedRows?: T[keyof T][]
  /** Selection change callback */
  onSelectionChange?: (selectedRows: T[keyof T][]) => void
  /** Pagination configuration */
  pagination?: {
    currentPage: number
    totalPages: number
    pageSize?: number
    totalItems?: number
    onPageChange: (page: number) => void
  }
  /** Loading state overlay */
  loading?: boolean
  /** Empty state message */
  emptyMessage?: string
  /** Accessible label for the table */
  ariaLabel?: string
}

/**
 * EnterpriseTable - Advanced data table with enterprise features
 * @description
 * A fully-featured table component with:
 * - Row selection (single and multi-select)
 * - Pagination with page size control
 * - Loading states
 * - Empty states
 * - Accessible keyboard navigation
 * - Dark mode support
 * @example
 * ```tsx
 * <EnterpriseTable
 *   columns={[
 *     { id: 'name', header: 'Name', sortable: true },
 *     { id: 'email', header: 'Email' }
 *   ]}
 *   data={users}
 *   keyField="id"
 *   selectable
 *   onRowClick={(user) => console.log(user)}
 *   pagination={{
 *     currentPage: 1,
 *     totalPages: 10,
 *     onPageChange: (page) => setCurrentPage(page)
 *   }}
 * />
 * ```
 */
const EnterpriseTable = React.forwardRef(
  <T extends Record<string, any>>(
    {
      columns,
      data,
      keyField,
      onRowClick,
      selectable,
      selectedRows = [],
      onSelectionChange,
      pagination,
      loading = false,
      emptyMessage = 'No data available',
      ariaLabel = 'Data table',
      className,
      ...props
    }: EnterpriseTableProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [internalSelected, setInternalSelected] = React.useState<Set<T[keyof T]>>(
      new Set(selectedRows)
    )

    // Sync external selected rows state
    React.useEffect(() => {
      setInternalSelected(new Set(selectedRows))
    }, [selectedRows])

    const handleRowSelect = (rowId: T[keyof T]) => {
      const newSelected = new Set(internalSelected)
      if (newSelected.has(rowId)) {
        newSelected.delete(rowId)
      } else {
        newSelected.add(rowId)
      }
      setInternalSelected(newSelected)
      onSelectionChange?.(Array.from(newSelected))
    }

    const handleSelectAll = () => {
      if (internalSelected.size === data.length) {
        setInternalSelected(new Set())
        onSelectionChange?.([])
      } else {
        const allIds = data.map(row => row[keyField])
        setInternalSelected(new Set(allIds))
        onSelectionChange?.(allIds)
      }
    }

    const isAllSelected = data.length > 0 && internalSelected.size === data.length
    const isSomeSelected = internalSelected.size > 0 && !isAllSelected

    return (
      <div ref={ref} className={cn('space-y-4', className)} {...props}>
        {/* Table */}
        <div className="relative" role="region" aria-label={ariaLabel} aria-busy={loading}>
          {loading && (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-2xl"
              role="status"
              aria-live="polite"
            >
              <div className="flex items-center gap-2 text-platinum-500">
                <div
                  className="h-4 w-4 border-2 border-navy-500 border-t-transparent rounded-full animate-spin"
                  aria-hidden="true"
                />
                <span className="text-sm">Loading...</span>
              </div>
            </div>
          )}

          <Table>
            <TableHeader>
              <TableRow>
                {selectable && (
                  <TableHead className="w-12">
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      ref={input => {
                        if (input) {
                          input.indeterminate = isSomeSelected
                        }
                      }}
                      onChange={handleSelectAll}
                      aria-label={isAllSelected ? 'Deselect all rows' : 'Select all rows'}
                      className="h-4 w-4 rounded border-platinum-300 text-navy-600 focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 dark:border-platinum-600 dark:bg-platinum-800"
                    />
                  </TableHead>
                )}
                {columns.map(column => (
                  <TableHead
                    key={column.id}
                    sortable={column.sortable}
                    sortDirection={column.sortDirection}
                    onClick={column.sortable ? column.onSort : undefined}
                    className={column.className}
                  >
                    {column.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length + (selectable ? 1 : 0)}
                    className="text-center text-platinum-500 dark:text-platinum-400 py-8"
                  >
                    {emptyMessage}
                  </TableCell>
                </TableRow>
              ) : (
                data.map((row, idx) => {
                  const isSelected = internalSelected.has(row[keyField])
                  return (
                    <TableRow
                      key={row[keyField] || idx}
                      interactive={!!onRowClick}
                      selected={isSelected}
                      onClick={() => onRowClick?.(row)}
                      tabIndex={onRowClick ? 0 : undefined}
                      onKeyDown={e => {
                        if (onRowClick && (e.key === 'Enter' || e.key === ' ')) {
                          e.preventDefault()
                          onRowClick(row)
                        }
                      }}
                    >
                      {selectable && (
                        <TableCell>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleRowSelect(row[keyField])}
                            onClick={e => e.stopPropagation()}
                            aria-label={`Select row ${idx + 1}`}
                            className="h-4 w-4 rounded border-platinum-300 text-navy-600 focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 dark:border-platinum-600 dark:bg-platinum-800"
                          />
                        </TableCell>
                      )}
                      {columns.map(column => (
                        <TableCell key={column.id} variant={row.variant}>
                          {column.cell ? column.cell(row) : row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  )
                })
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {pagination && (
          <nav
            className="flex items-center justify-between px-4 py-3 glass-subtle rounded-xl border border-white/10 dark:border-white/5"
            aria-label="Table pagination"
          >
            <div className="text-sm text-platinum-500 dark:text-platinum-400">
              {pagination.totalItems ? (
                <>
                  Showing {(pagination.currentPage - 1) * (pagination.pageSize || 10) + 1} to{' '}
                  {Math.min(pagination.currentPage * (pagination.pageSize || 10), pagination.totalItems)} of{' '}
                  {pagination.totalItems} results
                </>
              ) : (
                <>Page {pagination.currentPage} of {pagination.totalPages}</>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => pagination.onPageChange(Math.max(1, pagination.currentPage - 1))}
                disabled={pagination.currentPage === 1}
                aria-label="Go to previous page"
                className="px-3 py-1.5 text-sm font-medium text-platinum-600 dark:text-platinum-400 hover:text-navy-600 dark:hover:text-navy-400 hover:bg-navy-50 dark:hover:bg-navy-900/20 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                  let pageNum: number
                  if (pagination.totalPages <= 5) {
                    pageNum = i + 1
                  } else if (pagination.currentPage <= 3) {
                    pageNum = i + 1
                  } else if (pagination.currentPage >= pagination.totalPages - 2) {
                    pageNum = pagination.totalPages - 4 + i
                  } else {
                    pageNum = pagination.currentPage - 2 + i
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => pagination.onPageChange(pageNum)}
                      aria-label={`Go to page ${pageNum}`}
                      aria-current={pagination.currentPage === pageNum ? 'page' : undefined}
                      className={cn(
                        'w-8 h-8 text-sm font-medium rounded-lg transition-colors',
                        pagination.currentPage === pageNum
                          ? 'bg-navy-600 text-white shadow-premium-sm dark:bg-navy-500'
                          : 'text-platinum-600 dark:text-platinum-400 hover:text-navy-600 dark:hover:text-navy-400 hover:bg-navy-50 dark:hover:bg-navy-900/20'
                      )}
                    >
                      {pageNum}
                    </button>
                  )
                })}
              </div>
              <button
                onClick={() => pagination.onPageChange(Math.min(pagination.totalPages, pagination.currentPage + 1))}
                disabled={pagination.currentPage === pagination.totalPages}
                aria-label="Go to next page"
                className="px-3 py-1.5 text-sm font-medium text-platinum-600 dark:text-platinum-400 hover:text-navy-600 dark:hover:text-navy-400 hover:bg-navy-50 dark:hover:bg-navy-900/20 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </nav>
        )}
      </div>
    )
  }
)
EnterpriseTable.displayName = 'EnterpriseTable'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  EnterpriseTable,
  type EnterpriseTableProps,
}
