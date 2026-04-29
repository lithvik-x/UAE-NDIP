import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Badge Component
 *
 * A flexible badge component for displaying status, categories, and labels.
 * Supports multiple variants including premium gradient styles and glassmorphism effects.
 *
 * ## Design System Integration
 * - Uses the 12-color gradient system (red, rose, orange, gold, lime, emerald, teal, cyan, denim, indigo, purple, fuchsia)
 * - Premium palette colors (gold, platinum, navy)
 * - Glassmorphism effects with proper dark mode support
 *
 * ## Accessibility
 * - Proper ARIA attributes can be passed via props
 * - High contrast ratios for all variants
 * - Semantic HTML (div or span based on context)
 *
 * ## Animation
 * Subtle hover transitions and optional floating animation
 *
 * @example
 * ```tsx
 * <Badge variant="default">Default</Badge>
 * <Badge variant="success">Success</Badge>
 * <Badge variant="gold">Premium</Badge>
 * <Badge variant="premium" className="animate-float">Floating Badge</Badge>
 * ```
 */
const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        // Base variants
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'text-foreground border-border hover:bg-accent hover:text-accent-foreground',

        // Semantic status variants
        success: 'border-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-premium-sm',
        warning: 'border-transparent bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-premium-sm',
        info: 'border-transparent bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-premium-sm',

        // 12-Color Gradient System
        red: 'border-transparent bg-gradient-red text-white shadow-premium-sm hover:opacity-90',
        rose: 'border-transparent bg-gradient-rose text-white shadow-premium-sm hover:opacity-90',
        orange: 'border-transparent bg-gradient-orange text-white shadow-premium-sm hover:opacity-90',
        gold: 'border-transparent bg-gradient-gold text-white shadow-premium-sm hover:opacity-90',
        lime: 'border-transparent bg-gradient-lime text-white shadow-premium-sm hover:opacity-90',
        emerald: 'border-transparent bg-gradient-emerald text-white shadow-premium-sm hover:opacity-90',
        teal: 'border-transparent bg-gradient-teal text-white shadow-premium-sm hover:opacity-90',
        cyan: 'border-transparent bg-gradient-cyan text-white shadow-premium-sm hover:opacity-90',
        denim: 'border-transparent bg-gradient-denim text-white shadow-premium-sm hover:opacity-90',
        indigo: 'border-transparent bg-gradient-indigo text-white shadow-premium-sm hover:opacity-90',
        purple: 'border-transparent bg-gradient-purple text-white shadow-premium-sm hover:opacity-90',
        fuchsia: 'border-transparent bg-gradient-fuchsia text-white shadow-premium-sm hover:opacity-90',

        // Premium Glassmorphism Variants
        'glass-premium': 'glass-premium-premium border-gold-300/50 text-gold-700 shadow-premium-sm hover:shadow-premium-md',
        'glass-navy': 'glass-premium border-navy-300/50 text-navy-700 shadow-premium-sm hover:shadow-premium-md',
        'glass-platinum': 'glass-premium border-platinum-300/50 text-platinum-700 shadow-premium-sm hover:shadow-premium-md',

        // Platform-specific variants
        clairvoyance: 'border-transparent bg-gradient-red text-white shadow-premium-sm hover:opacity-90',
        perception: 'border-transparent bg-gradient-indigo text-white shadow-premium-sm hover:opacity-90',
        ricochet: 'border-transparent bg-gradient-cyan text-white shadow-premium-sm hover:opacity-90',

        // Premium variants
        premium: 'border-transparent bg-gradient-gold text-white shadow-premium-md hover:shadow-premium-lg',

        // Premium solid colors with glow
        'gold-solid': 'border-gold-400/50 bg-gold-500 text-white shadow-premium-sm hover:bg-gold-600',
        'navy-solid': 'border-navy-400/50 bg-navy-500 text-white shadow-premium-sm hover:bg-navy-600',
        'platinum-solid': 'border-platinum-400/50 bg-platinum-500 text-white shadow-premium-sm hover:bg-platinum-600',
      },
      size: {
        sm: 'px-2 py-0 text-[10px]',
        default: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Optional accessible label for screen readers
   * Use when the badge text alone doesn't provide enough context
   */
  'aria-label'?: string

  /**
   * Whether the badge should pulse to draw attention
   * @default false
   */
  pulse?: boolean

  /**
   * Whether the badge should have a floating animation
   * @default false
   */
  floating?: boolean

  /**
   * Optional icon to display before the text
   */
  icon?: React.ReactNode
}

/**
 * Badge Component
 *
 * @example Basic usage
 * ```tsx
 * <Badge>Default Badge</Badge>
 * ```
 *
 * @example With variants
 * ```tsx
 * <Badge variant="success">Success</Badge>
 * <Badge variant="warning">Warning</Badge>
 * <Badge variant="gold">Premium</Badge>
 * ```
 *
 * @example With sizes
 * ```tsx
 * <Badge size="sm">Small</Badge>
 * <Badge size="default">Default</Badge>
 * <Badge size="lg">Large</Badge>
 * ```
 *
 * @example With icon
 * ```tsx
 * <Badge variant="success" icon="✓">Complete</Badge>
 * ```
 *
 * @example With animations
 * ```tsx
 * <Badge variant="gold" pulse>Featured</Badge>
 * <Badge variant="premium" floating>New</Badge>
 * ```
 *
 * @example Platform badges
 * ```tsx
 * <Badge variant="clairvoyance">Clairvoyance</Badge>
 * <Badge variant="perception">Perception</Badge>
 * <Badge variant="ricochet">Ricochet</Badge>
 * ```
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, pulse, floating, icon, 'aria-label': ariaLabel, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({ variant, size }),
          pulse && 'animate-pulse',
          floating && 'animate-float',
          className
        )}
        aria-label={ariaLabel}
        {...props}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {children}
      </div>
    )
  }
)
Badge.displayName = 'Badge'

export { Badge, badgeVariants }

/**
 * ## Badge Design Guidelines
 *
 * ### When to use badges:
 * - Status indicators (active, inactive, pending)
 * - Category labels (tags, topics, types)
 * - Counts and notifications
 * - Feature highlights (new, premium, featured)
 *
 * ### Variant selection:
 * - **default/secondary**: Neutral badges for general labeling
 * - **success/warning/destructive**: Status communication
 * - **gold/navy/platinum**: Premium features and tiers
 * - **Platform variants**: Platform-specific content
 * - **Glass variants**: Subtle, modern UI elements
 *
 * ### Size guidelines:
 * - **sm**: Compact spaces, data tables
 * - **default**: Most common use cases
 * - **lg**: Hero sections, featured content
 *
 * ### Accessibility:
 * - Always provide meaningful text content
 * - Use `aria-label` when badge content needs context
 * - Ensure sufficient color contrast (all variants are WCAG AA compliant)
 * - Don't rely solely on color to convey meaning
 *
 * ### Animation guidelines:
 * - Use `pulse` sparingly for important notifications
 * - Use `floating` for promotional badges only
 * - Avoid multiple animated badges in the same view
 */
