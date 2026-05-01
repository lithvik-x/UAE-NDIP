import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Label component variants for different visual styles
 */
const labelVariants = cva(
  [
    'text-sm font-medium leading-none',
    'transition-colors duration-200',
    'peer-disabled:cursor-not-allowed peer-disabled:opacity-50'
  ],
  {
    variants: {
      variant: {
        default: [
          'text-slate-700 dark:text-slate-300',
          'peer-focus-visible:text-navy-500-600 dark:peer-focus-visible:text-navy-500-400'
        ],
        premium: [
          'text-navy-500-700 dark:text-navy-500-300',
          'peer-focus-visible:text-gold-600 dark:peer-focus-visible:text-gold-400',
          'font-semibold'
        ],
        ghost: [
          'text-slate-600 dark:text-slate-400',
          'peer-focus-visible:text-slate-800 dark:peer-focus-visible:text-slate-200'
        ],
        success: 'text-emerald-700 dark:text-emerald-300',
        warning: 'text-amber-700 dark:text-amber-300',
        error: 'text-red-700 dark:text-red-300'
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      weight: 'medium'
    }
  }
)

/**
 * Extended props for the Label component
 * @extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
 * @extends VariantProps<typeof labelVariants>
 */
export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

/**
 * Label Component - Premium form label with comprehensive styling
 *
 * @description
 * A fully-featured label component built on Radix UI with support for:
 * - Multiple variants (default, premium, ghost, success, warning, error)
 * - Size options (sm, md, lg)
 * - Weight options (normal, medium, semibold, bold)
 * - Dark mode support
 * - Full accessibility (ARIA attributes, htmlFor)
 * - Smooth color transitions on peer focus
 * - Design system colors (gold, platinum, navy)
 * - Peer state integration for connected form elements
 *
 * @example
 * ```tsx
 * <Label htmlFor="email">Email</Label>
 * <Label variant="premium" htmlFor="name">Full Name</Label>
 * <Label variant="error" size="lg" htmlFor="password">Password</Label>
 * ```
 *
 * @remarks
 * The label automatically responds to the focus state of its peer element
 * (typically an input or select) using the peer-focus variant.
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, variant, size, weight, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ variant, size, weight }), className)}
    {...props}
  />
))

Label.displayName = LabelPrimitive.Root.displayName

export { Label }
