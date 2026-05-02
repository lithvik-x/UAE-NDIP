import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Input component variants for different visual styles
 */
export interface InputVariants {
  variant?: 'default' | 'ghost' | 'bordered' | 'filled' | 'premium'
  inputSize?: 'sm' | 'md' | 'lg'
  state?: 'default' | 'error' | 'success' | 'warning'
}

/**
 * Extended props for the Input component
 * @extends React.InputHTMLAttributes<HTMLInputElement>
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputVariants {}

/**
 * Input Component - Premium text input field with comprehensive styling
 *
 * @description
 * A fully-featured input component with support for:
 * - Multiple variants (default, ghost, bordered, filled, premium)
 * - Size options (sm, md, lg)
 * - State styles (error, success, warning)
 * - Dark mode support
 * - Full accessibility (ARIA attributes)
 * - Smooth animations and transitions
 * - Design system colors (gold, platinum, navy)
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter your name" />
 * <Input variant="premium" state="error" />
 * <Input inputSize="lg" type="email" />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', variant = 'default', inputSize = 'md', state = 'default', ...props }, ref) => {
    // Base styles for all variants
    const baseStyles = [
      'flex w-full rounded-xl',
      'transition-all duration-200 ease-in-out',
      'placeholder:text-slate-400 dark:placeholder:text-slate-500',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'backdrop-blur-sm'
    ]

    // Size variants
    const sizeStyles: Record<NonNullable<InputVariants['inputSize']>, string> = {
      sm: 'h-8 px-2.5 py-1.5 text-xs',
      md: 'h-10 px-3 py-2 text-sm',
      lg: 'h-12 px-4 py-3 text-base'
    }

    // Variant styles
    const variantStyles: Record<NonNullable<InputVariants['variant']>, string> = {
      default: [
        'border border-slate-200 dark:border-slate-700',
        'bg-white/50 dark:bg-slate-900/50',
        'focus-visible:ring-navy-500 focus-visible:border-navy-400',
        'dark:focus-visible:ring-navy-400 dark:focus-visible:border-navy-500'
      ].join(' '),

      ghost: [
        'border-0',
        'bg-transparent',
        'focus-visible:ring-navy-500',
        'hover:bg-slate-100 dark:hover:bg-slate-800'
      ].join(' '),

      bordered: [
        'border-2 border-slate-200 dark:border-slate-700',
        'bg-white/50 dark:bg-slate-900/50',
        'focus-visible:border-navy-500 focus-visible:ring-navy-500',
        'dark:focus-visible:border-navy-400'
      ].join(' '),

      filled: [
        'border-0',
        'bg-slate-100 dark:bg-slate-800',
        'focus-visible:ring-navy-500',
        'focus-visible:bg-white dark:focus-visible:bg-slate-900'
      ].join(' '),

      premium: [
        'border-2 border-gold-400/30 dark:border-gold-500/30',
        'bg-gradient-to-r from-gold-50/50 to-amber-50/50 dark:from-navy-900/30 dark:to-slate-900/30',
        'focus-visible:ring-gold-500 focus-visible:border-gold-400',
        'shadow-premium-sm focus-visible:shadow-premium-md',
        'dark:focus-visible:ring-gold-400 dark:focus-visible:border-gold-500'
      ].join(' ')
    }

    // State styles
    const stateStyles: Record<NonNullable<InputVariants['state']>, string> = {
      default: '',
      error: [
        'focus-visible:ring-red-500 focus-visible:border-red-400',
        'dark:focus-visible:ring-red-400 dark:focus-visible:border-red-500',
        '[&.border-red-300]:border-red-300 [&.border-red-400]:border-red-400',
        'dark:[&.border-red-500]:border-red-500'
      ].join(' '),
      success: [
        'focus-visible:ring-emerald-500 focus-visible:border-emerald-400',
        'dark:focus-visible:ring-emerald-400 dark:focus-visible:border-emerald-500'
      ].join(' '),
      warning: [
        'focus-visible:ring-amber-500 focus-visible:border-amber-400',
        'dark:focus-visible:ring-amber-400 dark:focus-visible:border-amber-500'
      ].join(' ')
    }

    // File input styles
    const fileStyles = 'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-navy-600 dark:file:text-navy-400'

    return (
      <input
        type={type}
        className={cn(
          baseStyles,
          sizeStyles[inputSize],
          variantStyles[variant],
          stateStyles[state],
          fileStyles,
          className
        )}
        ref={ref}
        aria-invalid={state === 'error' ? true : undefined}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
