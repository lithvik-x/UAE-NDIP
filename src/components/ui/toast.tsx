'use client'

import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X, Check, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * @fileoverview Toast Component System - Premium notification system with glassmorphism
 * @module components/ui/toast
 * @description
 * A comprehensive toast notification system built on Radix UI with premium styling.
 * Features include:
 * - Multiple variant styles (default, success, error, warning, info, premium)
 * - Auto-dismissal with configurable duration
 * - Swipe-to-dismiss gestures
 * - Multiple toast support
 * - Dark mode support
 * - Custom icons for each variant
 * - Action buttons support
 * - Accessibility compliant (ARIA)
 * @example
 * ```tsx
 * <ToastProvider>
 *   <App />
 *   <Toaster />
 * </ToastProvider>
 *
 * // In component
 * const { toast } = useToast()
 * toast({ title: 'Success', description: 'Operation completed', variant: 'success' })
 * ```
 */

/**
 * ToastProvider - Root provider component
 * @description Wraps the application to provide toast context
 */
const ToastProvider = ToastPrimitives.Provider

/**
 * ToastViewport - Container for toast notifications
 * @description Fixed positioned container with swipe gesture support
 */
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

/**
 * Toast variant styles using CVA
 * @description Class variance authority for consistent variant styling
 */
const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-2xl p-6 shadow-premium-lg transition-all duration-300 data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'glass-premium border border-white/20 text-platinum-900 dark:text-platinum-100',
        success:
          'bg-gradient-to-br from-emerald-50/95 to-emerald-100/90 border border-emerald-200/50 text-emerald-900 dark:from-emerald-900/80 dark:to-emerald-800/80 dark:border-emerald-700/50 dark:text-emerald-100',
        error:
          'bg-gradient-to-br from-red-50/95 to-red-100/90 border border-red-200/50 text-red-900 dark:from-red-900/80 dark:to-red-800/80 dark:border-red-700/50 dark:text-red-100',
        warning:
          'bg-gradient-to-br from-gold-50/95 to-gold-100/90 border border-gold-200/50 text-gold-900 dark:from-gold-900/80 dark:to-gold-800/80 dark:border-gold-700/50 dark:text-gold-100',
        info:
          'bg-gradient-to-br from-navy-50/95 to-indigo-100/90 border border-navy-200/50 text-navy-900 dark:from-navy-900/80 dark:to-indigo-800/80 dark:border-navy-700/50 dark:text-navy-100',
        premium:
          'glass-premium-premium border border-white/20 text-platinum-900 dark:text-platinum-100 shadow-premium-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

/**
 * Toast - Individual toast notification
 * @description Main toast component with variant support
 */
const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants> & {
      /** Optional duration in milliseconds (default: 5000) */
      duration?: number
    }
>(({ className, variant, duration = 5000, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      duration={duration}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

/**
 * ToastAction - Action button component
 * @description Interactive action button within toast
 */
const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-xl border border-platinum-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-platinum-50 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-platinum-700 dark:text-platinum-300 dark:hover:bg-platinum-800 dark:focus:ring-navy-400',
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

/**
 * ToastClose - Close button component
 * @description Dismissible close button with icon
 */
const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-platinum-400 hover:text-platinum-600 dark:text-platinum-500 dark:hover:text-platinum-300 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-navy-500 group-hover:opacity-100',
      className
    )}
    toast-close=""
    aria-label="Close toast"
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

/**
 * ToastTitle - Title component
 * @description Bold heading text for toast
 */
const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold text-platinum-900 dark:text-platinum-100', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

/**
 * ToastDescription - Description component
 * @description Secondary text content for toast
 */
const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90 text-platinum-700 dark:text-platinum-300', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

/**
 * ToastIcon - Icon component for variants
 * @description Renders appropriate icon based on toast variant
 */
const ToastIcon = React.memo<{
  variant: 'success' | 'error' | 'warning' | 'info' | 'default' | 'premium'
}>(({ variant }) => {
  const icons = {
    success: <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />,
    error: <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" aria-hidden="true" />,
    warning: <AlertTriangle className="h-5 w-5 text-gold-600 dark:text-gold-400" aria-hidden="true" />,
    info: <Info className="h-5 w-5 text-navy-600 dark:text-navy-400" aria-hidden="true" />,
    default: <Info className="h-5 w-5 text-platinum-600 dark:text-platinum-400" aria-hidden="true" />,
    premium: <Check className="h-5 w-5 text-navy-600 dark:text-navy-400" aria-hidden="true" />,
  }

  return icons[variant] || icons.default
})
ToastIcon.displayName = 'ToastIcon'

/**
 * ToasterToast - Toast data structure
 */
interface ToasterToast {
  /** Unique identifier */
  id: string
  /** Title text */
  title?: React.ReactNode
  /** Description text */
  description?: React.ReactNode
  /** Action button component */
  action?: React.ReactNode
  /** Visual variant */
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default' | 'premium'
  /** Auto-dismiss duration in milliseconds */
  duration?: number
  /** Dismissible flag */
  dismissible?: boolean
}

/**
 * ToastContextValue - Context value type
 */
interface ToastContextValue {
  /** Array of active toasts */
  toasts: ToasterToast[]
  /** Add a new toast */
  addToast: (toast: Omit<ToasterToast, 'id'>) => void
  /** Remove a toast by ID */
  removeToast: (id: string) => void
  /** Clear all toasts */
  clearAll: () => void
}

/**
 * ToastContext - React context for toast management
 */
const ToastContext = React.createContext<ToastContextValue>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
  clearAll: () => {},
})

/**
 * CustomToastProvider - Provider with toast management
 * @description
 * Enhanced toast provider with context API for programmatic toast control.
 * Includes auto-dismissal and cleanup.
 * @example
 * ```tsx
 * <CustomToastProvider>
 *   <YourApp />
 * </CustomToastProvider>
 * ```
 */
export function CustomToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([])
  const [toastCount, setToastCount] = React.useState(0)

  /**
   * Add a new toast notification
   */
  const addToast = React.useCallback((toast: Omit<ToasterToast, 'id'>) => {
    const id = `toast-${Date.now()}-${toastCount}`
    setToastCount(prev => prev + 1)
    const newToast: ToasterToast = { ...toast, id }
    setToasts(prev => [...prev, newToast])

    // Auto-dismiss after duration (default: 5000ms)
    const duration = toast.duration ?? 5000
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }
  }, [toastCount])

  /**
   * Remove a toast by ID
   */
  const removeToast = React.useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  /**
   * Clear all active toasts
   */
  const clearAll = React.useCallback(() => {
    setToasts([])
  }, [])

  const value = React.useMemo(
    () => ({ toasts, addToast, removeToast, clearAll }),
    [toasts, addToast, removeToast, clearAll]
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            duration={toast.duration}
            onOpenChange={(open: boolean) => {
              if (!open && toast.dismissible !== false) {
                removeToast(toast.id)
              }
            }}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="flex gap-3">
              <ToastIcon variant={toast.variant || 'default'} />
              <div className="flex-1">
                {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
                {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
              </div>
            </div>
            {toast.action}
            {toast.dismissible !== false && <ToastClose />}
          </Toast>
        ))}
      </ToastViewport>
    </ToastContext.Provider>
  )
}

/**
 * useToast - Hook for toast management
 * @description
 * Convenient hook for displaying toast notifications.
 * @example
 * ```tsx
 * const { toast, success, error, warning, info } = useToast()
 *
 * success('Operation completed', 'Details here')
 * error('Something went wrong')
 * toast({ title: 'Custom', variant: 'premium' })
 * ```
 */
export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a CustomToastProvider')
  }

  return React.useMemo(
    () => ({
      /** Array of active toasts */
      toasts: context.toasts,

      /** Display a toast with custom configuration */
      toast: (props: Omit<ToasterToast, 'id'>) => {
        context.addToast(props)
      },

      /** Display a success toast */
      success: (title: string, description?: string, options?: Partial<Omit<ToasterToast, 'id' | 'title' | 'description' | 'variant'>>) => {
        context.addToast({ title, description, variant: 'success', ...options })
      },

      /** Display an error toast */
      error: (title: string, description?: string, options?: Partial<Omit<ToasterToast, 'id' | 'title' | 'description' | 'variant'>>) => {
        context.addToast({ title, description, variant: 'error', ...options })
      },

      /** Display a warning toast */
      warning: (title: string, description?: string, options?: Partial<Omit<ToasterToast, 'id' | 'title' | 'description' | 'variant'>>) => {
        context.addToast({ title, description, variant: 'warning', ...options })
      },

      /** Display an info toast */
      info: (title: string, description?: string, options?: Partial<Omit<ToasterToast, 'id' | 'title' | 'description' | 'variant'>>) => {
        context.addToast({ title, description, variant: 'info', ...options })
      },

      /** Display a premium toast */
      premium: (title: string, description?: string, options?: Partial<Omit<ToasterToast, 'id' | 'title' | 'description' | 'variant'>>) => {
        context.addToast({ title, description, variant: 'premium', ...options })
      },

      /** Remove a toast by ID */
      removeToast: context.removeToast,

      /** Clear all toasts */
      clearAll: context.clearAll,
    }),
    [context]
  )
}

/**
 * Toaster - Standalone toast viewport
 * @description
 * Standalone component for rendering toast viewport without provider.
 * Use this if you're managing the provider separately.
 */
export function Toaster() {
  const { toasts, removeToast } = useToast()

  return (
    <ToastViewport>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          duration={toast.duration}
          onOpenChange={(open: boolean) => {
            if (!open && toast.dismissible !== false) {
              removeToast(toast.id)
            }
          }}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="flex gap-3">
            <ToastIcon variant={toast.variant || 'default'} />
            <div className="flex-1">
              {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
              {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            </div>
          </div>
          {toast.action}
          {toast.dismissible !== false && <ToastClose />}
        </Toast>
      ))}
    </ToastViewport>
  )
}

// Export all components and types
export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastIcon,
}

// Export types separately to avoid conflicts
export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
export type { ToasterToast, ToastContextValue }
