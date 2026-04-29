import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Progress component indicator variants for different visual styles
 */
const indicatorVariants = cva(
  [
    'h-full w-full flex-1 transition-all duration-300 ease-out',
    'relative overflow-hidden'
  ],
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-navy-500 to-navy-600 dark:from-navy-400 dark:to-navy-500',
        premium: 'bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 dark:from-gold-500 dark:via-gold-600 dark:to-amber-600',
        success: 'bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500',
        warning: 'bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500',
        error: 'bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500',
        rainbow: 'bg-gradient-to-r from-red-500 via-yellow-500 to-emerald-500',
        platinum: 'bg-gradient-to-r from-platinum-400 via-platinum-500 to-platinum-600 dark:from-platinum-500 dark:via-platinum-600 dark:to-platinum-700'
      },
      animated: {
        true: 'animate-shimmer-premium',
        false: ''
      },
      striped: {
        true: 'bg-[length:20px_20px] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]',
        false: ''
      },
      glowing: {
        true: 'shadow-[0_0_20px_rgba(99,102,241,0.5)] dark:shadow-[0_0_20px_rgba(99,102,241,0.3)]',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      animated: false,
      striped: false,
      glowing: false
    }
  }
)

/**
 * Progress component root variants for different sizes and styles
 */
const rootVariants = cva(
  [
    'relative w-full overflow-hidden rounded-full',
    'transition-all duration-200'
  ],
  {
    variants: {
      size: {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
        xl: 'h-4'
      },
      backgroundVariant: {
        default: 'bg-primary/10 dark:bg-primary/20',
        subtle: 'bg-slate-100 dark:bg-slate-800',
        premium: 'bg-gold-100 dark:bg-navy-900/50'
      }
    },
    defaultVariants: {
      size: 'md',
      backgroundVariant: 'default'
    }
  }
)

/**
 * Extended props for the Progress component
 * @extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
 * @extends VariantProps<typeof indicatorVariants>
 * @extends VariantProps<typeof rootVariants>
 */
export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof indicatorVariants>,
    VariantProps<typeof rootVariants> {
  /**
   * Current progress value (0-100)
   */
  value?: number
  /**
   * Whether to show percentage text overlay
   */
  showLabel?: boolean
  /**
   * Custom label format function
   */
  labelFormat?: (value: number) => string
}

/**
 * Progress Component - Premium progress indicator with comprehensive styling
 *
 * @description
 * A fully-featured progress component built on Radix UI with support for:
 * - Multiple color variants (default, premium, success, warning, error, rainbow, platinum)
 * - Size options (sm, md, lg, xl)
 * - Animation options (shimmer effect, striped pattern, glowing)
 * - Background variants (default, subtle, premium)
 * - Optional percentage label overlay
 * - Dark mode support
 * - Full accessibility (ARIA attributes, role, labels)
 * - Smooth animations and transitions
 * - Design system colors (gold, platinum, navy)
 *
 * @example
 * ```tsx
 * <Progress value={75} />
 * <Progress value={50} variant="premium" size="lg" />
 * <Progress value={25} variant="error" animated striped />
 * <Progress value={90} variant="success" showLabel />
 * ```
 *
 * @remarks
 * The progress value automatically clamps between 0 and 100.
 * The component uses CSS transforms for smooth, performant animations.
 */
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      value = 0,
      variant,
      size,
      backgroundVariant,
      animated = false,
      striped = false,
      glowing = false,
      showLabel = false,
      labelFormat = (val) => `${Math.round(val)}%`,
      ...props
    },
    ref
  ) => {
    // Clamp value between 0 and 100
    const clampedValue = Math.min(100, Math.max(0, value || 0))

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(rootVariants({ size, backgroundVariant }), className)}
        {...props}
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      >
        <ProgressPrimitive.Indicator
          className={cn(
            indicatorVariants({ variant, animated, striped, glowing }),
            // Apply striped animation if striped is true
            striped && 'animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]'
          )}
          style={{ transform: `translateX(-${100 - clampedValue}%)` }}
        >
          {showLabel && (
            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white mix-blend-difference dark:text-white">
              {labelFormat(clampedValue)}
            </span>
          )}
        </ProgressPrimitive.Indicator>
      </ProgressPrimitive.Root>
    )
  }
)

Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
