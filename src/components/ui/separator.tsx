import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '@/lib/utils'

/**
 * Separator Component
 *
 * A visual separator/divider component built on Radix UI primitives.
 * Integrates with the premium design system featuring gold, platinum, and navy colors.
 *
 * @props orientation - 'horizontal' | 'vertical' - Direction of the separator (default: 'horizontal')
 * @props decorative - boolean - Whether the separator is purely decorative (default: 'true')
 *
 * @accessibility
 * - When decorative=true, the separator is hidden from screen readers (aria-hidden)
 * - When decorative=false, it has role="separator" and appropriate aria-orientation
 *
 * @example Horizontal separator
 * ```tsx
 * <Separator />
 * ```
 *
 * @example Vertical separator
 * ```tsx
 * <Separator orientation="vertical" className="h-8" />
 * ```
 *
 * @example With custom styling
 * ```tsx
 * <Separator className="bg-gradient-to-r from-gold-400 to-gold-600" />
 * ```
 *
 * @example Non-decorative (accessible to screen readers)
 * ```tsx
 * <Separator decorative={false} />
 * ```
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    {
      className,
      orientation = 'horizontal',
      decorative = true,
      ...props
    },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0',
        // Premium separator color with dark mode support
        'bg-platinum-200 dark:bg-navy-700',
        // Orientation-based sizing
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        // Optional premium gradient variant (add via className)
        'hover:bg-platinum-300 dark:hover:bg-navy-600',
        'transition-colors duration-200',
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

/**
 * SeparatorVariants type
 *
 * Available separator variants for different design contexts:
 * - 'default': Standard platinum-colored separator
 * - 'gold': Gold accent separator for highlights
 * - 'navy': Navy accent separator for depth
 * - 'gradient': Gradient separator with premium colors
 */
export type SeparatorVariant = 'default' | 'gold' | 'navy' | 'gradient'

/**
 * ThemedSeparator Component
 *
 * A themed variant of the Separator component with preset design system colors.
 *
 * @props variant - The visual variant to use
 * @props orientation - 'horizontal' | 'vertical' - Direction of the separator
 *
 * @example Gold accent separator
 * ```tsx
 * <ThemedSeparator variant="gold" />
 * ```
 *
 * @example Navy accent separator
 * ```tsx
 * <ThemedSeparator variant="navy" orientation="vertical" />
 * ```
 *
 * @example Premium gradient separator
 * ```tsx
 * <ThemedSeparator variant="gradient" className="h-0.5" />
 * ```
 */
const ThemedSeparator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    variant?: SeparatorVariant
  }
>(({ className, orientation = 'horizontal', variant = 'default', ...props }, ref) => {
  const variantStyles: Record<SeparatorVariant, string> = {
    default: 'bg-platinum-200 dark:bg-navy-700',
    gold: 'bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 dark:from-gold-600 dark:via-gold-500 dark:to-gold-600',
    navy: 'bg-gradient-to-r from-navy-400 via-navy-500 to-navy-600 dark:from-navy-600 dark:via-navy-500 dark:to-navy-400',
    gradient: 'bg-gradient-to-r from-gold-400 via-navy-500 to-platinum-400 dark:from-gold-600 dark:via-navy-400 dark:to-platinum-600',
  }

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={true}
      orientation={orientation}
      className={cn(
        'shrink-0 transition-all duration-200',
        // Orientation-based sizing with enhanced height for gradients
        orientation === 'horizontal'
          ? 'h-px w-full'
          : 'h-full w-px',
        // Variant-specific styling
        variantStyles[variant],
        // Enhanced styling for gradient variant
        variant === 'gradient' && orientation === 'horizontal' && 'h-0.5',
        variant === 'gradient' && orientation === 'vertical' && 'w-0.5',
        // Subtle glow effect for premium variants
        (variant === 'gold' || variant === 'gradient') && 'shadow-premium-sm',
        className
      )}
      {...props}
    />
  )
})
ThemedSeparator.displayName = 'ThemedSeparator'

export { Separator, ThemedSeparator }
