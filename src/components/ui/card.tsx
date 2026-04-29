import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Card Component System
 *
 * A comprehensive card system with multiple variants, sizes, and specialized card types.
 * Fully integrated with the LITHVIK NEXUS design system featuring glassmorphism,
 * metallic effects, and platform-specific theming.
 *
 * ## Design System Integration
 * - Premium glassmorphism with multi-layer depth
 * - Metallic gold and platinum shimmer effects
 * - Platform-specific gradients (clairvoyance, perception, ricochet)
 * - Premium shadows for depth and elegance
 * - Chromatic edge effects with animated borders
 *
 * ## Accessibility
 * - Semantic HTML structure (proper heading hierarchy)
 * - ARIA attributes for interactive cards
 * - Keyboard navigation support
 * - High contrast ratios for all variants
 * - Screen reader friendly content structure
 *
 * ## Animation & Micro-interactions
 * - Smooth hover transitions (300ms)
 * - Subtle lift effect on hover
 * - Active state scale feedback
 * - Optional floating animation
 *
 * @example
 * ```tsx
 * <Card variant="glass-premium">
 *   <CardHeader>
 *     <CardTitle gradient="gold">Premium Card</CardTitle>
 *     <CardDescription>With glassmorphism effect</CardDescription>
 *   </CardHeader>
 *   <CardContent>Content goes here</CardContent>
 * </Card>
 * ```
 */

/**
 * Card variants with glassmorphism and metallic effects
 */
const cardVariants = cva(
  // Base styles - glassmorphism foundation
  'rounded-2xl transition-all duration-300 border',
  {
    variants: {
      variant: {
        // === GLASSMORPHISM VARIANTS ===

        // Premium Glass - Multi-layer depth glass effect with gold accents
        'glass-premium': 'glass-premium border-white/20 shadow-premium-md hover:shadow-premium-lg hover:-translate-y-1',

        // Glass Subtle - Light glass effect for subtle backgrounds
        'glass-subtle': 'glass-subtle border-white/10 shadow-premium-sm hover:shadow-premium-md',

        // Glass Medium - Balanced glass effect
        'glass-medium': 'glass-medium border-white/15 shadow-premium-sm hover:shadow-premium-md',

        // Glass Strong - Heavy glass effect for high contrast
        'glass-strong': 'glass-strong border-white/20 shadow-premium-md hover:shadow-premium-lg',

        // === METALLIC VARIANTS ===

        // Metallic Gold - Gold shimmer effect with premium feel
        'metallic-gold': 'card-metallic-gold border-gold-200/50 shadow-premium-md hover:shadow-premium-xl hover:-translate-y-1',

        // Metallic Platinum - Platinum shimmer effect
        'metallic-platinum': 'card-metallic-platinum border-platinum-200/50 shadow-premium-md hover:shadow-premium-xl hover:-translate-y-1',

        // Chromatic Edge - Rainbow border glow with animation
        'chromatic': 'glass-premium glass-chromatic border-white/20 shadow-premium-lg hover:shadow-premium-2xl hover:-translate-y-1',

        // === PLATFORM-SPECIFIC VARIANTS ===

        // Platform Clairvoyance - Red gradient theme
        'clairvoyance': 'bg-gradient-to-br from-red-50/90 to-rose-50/70 border-red-200/50 shadow-premium-md hover:shadow-premium-lg hover:-translate-y-1 dark:from-red-950/30 dark:to-rose-950/20',

        // Platform Perception - Indigo/purple gradient theme
        'perception': 'bg-gradient-to-br from-indigo-50/90 to-purple-50/70 border-indigo-200/50 shadow-premium-md hover:shadow-premium-lg hover:-translate-y-1 dark:from-indigo-950/30 dark:to-purple-950/20',

        // Platform Ricochet - Cyan/blue gradient theme
        'ricochet': 'bg-gradient-to-br from-cyan-50/90 to-blue-50/70 border-cyan-200/50 shadow-premium-md hover:shadow-premium-lg hover:-translate-y-1 dark:from-cyan-950/30 dark:to-blue-950/20',

        // === PREMIUM COLOR VARIANTS ===

        // Premium Navy - Executive navy theme with glow
        'navy': 'bg-gradient-to-br from-navy-50 to-indigo-50 border-navy-200/50 shadow-premium-md hover:shadow-premium-lg hover:glow-navy hover:-translate-y-1 dark:from-navy-950/30 dark:to-indigo-950/20',

        // Premium Gold - Royal gold theme with glow
        'gold': 'bg-gradient-to-br from-gold-50 to-amber-50 border-gold-200/50 shadow-premium-md hover:shadow-premium-lg hover:glow-gold hover:-translate-y-1 dark:from-gold-950/30 dark:to-amber-950/20',

        // Premium Platinum - Platinum theme
        'platinum': 'bg-gradient-to-br from-platinum-50 to-slate-50 border-platinum-200/50 shadow-premium-md hover:shadow-premium-lg hover:-translate-y-1 dark:from-platinum-950/30 dark:to-slate-950/20',

        // === STANDARD VARIANTS ===

        // Elevated - White card with strong shadow
        'elevated': 'bg-white border-platinum-200/50 shadow-premium-lg hover:shadow-premium-xl hover:-translate-y-1 dark:bg-platinum-900/50 dark:border-platinum-700/50',

        // Flat - Minimal style
        'flat': 'bg-white/80 border-platinum-100/50 shadow-premium-sm dark:bg-platinum-900/30 dark:border-platinum-800/50',

        // Outline - Border only
        'outline': 'bg-transparent border-platinum-300/50 hover:bg-platinum-50/50 dark:border-platinum-700/50 dark:hover:bg-platinum-800/30',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      interactive: {
        true: 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'glass-premium',
      size: 'md',
      interactive: false,
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /**
   * Whether the card is interactive (clickable)
   * Adds hover and active states with scale animations
   * @default false
   */
  interactive?: boolean

  /**
   * Optional accessible label for screen readers
   * Use when the card content alone doesn't provide enough context
   */
  'aria-label'?: string

  /**
   * Whether the card should have a floating animation
   * @default false
   */
  floating?: boolean
}

/**
 * Card Component
 *
 * The main Card container component. Use it with CardHeader, CardContent, and CardFooter
 * for a complete card structure.
 *
 * @example Basic card
 * ```tsx
 * <Card>
 *   <CardContent>Basic card content</CardContent>
 * </Card>
 * ```
 *
 * @example Glassmorphism card
 * ```tsx
 * <Card variant="glass-premium">
 *   <CardHeader>
 *     <CardTitle>Gradient Title</CardTitle>
 *   </CardHeader>
 *   <CardContent>Premium glass effect</CardContent>
 * </Card>
 * ```
 *
 * @example Interactive card
 * ```tsx
 * <Card variant="gold" interactive onClick={() => handleClick()}>
 *   <CardContent>Clickable card</CardContent>
 * </Card>
 * ```
 *
 * @example Platform card
 * ```tsx
 * <Card variant="clairvoyance">
 *   <CardHeader>
 *     <CardTitle gradient="clairvoyance">Clairvoyance</CardTitle>
 *   </CardHeader>
 *   <CardContent>Platform-specific theming</CardContent>
 * </Card>
 * ```
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, interactive, 'aria-label': ariaLabel, floating, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ variant, size, interactive }),
        floating && 'animate-float-premium',
        className
      )}
      aria-label={ariaLabel}
      {...props}
    />
  )
)
Card.displayName = 'Card'

/**
 * CardHeader Component
 *
 * Container for the card's header section (title and description).
 * Supports centered alignment for hero-style cards.
 *
 * @example
 * ```tsx
 * <CardHeader centered>
 *   <CardTitle>Centered Title</CardTitle>
 *   <CardDescription>With description</CardDescription>
 * </CardHeader>
 * ```
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Whether to center the header content
     * @default false
     */
    centered?: boolean
  }
>(({ className, centered = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col space-y-1.5',
      centered && 'items-center text-center',
      className
    )}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

/**
 * CardTitle Component
 *
 * The main title heading for the card.
 * Supports gradient text effects using the premium color palette.
 *
 * @example
 * ```tsx
 * <CardTitle>Default Title</CardTitle>
 * <CardTitle gradient="gold">Gold Gradient</CardTitle>
 * <CardTitle gradient="navy">Navy Gradient</CardTitle>
 * <CardTitle gradient="clairvoyance">Platform Gradient</CardTitle>
 * ```
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    /**
     * Gradient style to apply to the title
     * Uses the premium gradient system
     */
    gradient?: 'clairvoyance' | 'perception' | 'ricochet' | 'gold' | 'navy' | 'platinum'
  }
>(({ className, gradient, ...props }, ref) => {
  const gradientClasses = {
    clairvoyance: 'gradient-text-clairvoyance',
    perception: 'gradient-text-perception',
    ricochet: 'gradient-text-ricochet',
    gold: 'gradient-text-gold',
    navy: 'gradient-text',
    platinum: 'gradient-text-platinum',
  }

  return (
    <h3
      ref={ref}
      className={cn(
        'text-2xl font-bold leading-none tracking-tight',
        gradient && gradientClasses[gradient],
        className
      )}
      {...props}
    />
  )
})
CardTitle.displayName = 'CardTitle'

/**
 * CardDescription Component
 *
 * Secondary text for the card, typically displayed below the title.
 * Uses the platinum color scale for subtle, elegant text.
 *
 * @example
 * ```tsx
 * <CardDescription>
 *   This is the card description text that provides additional context.
 * </CardDescription>
 * ```
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-platinum-500 leading-relaxed', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

/**
 * CardContent Component
 *
 * Main content area of the card.
 * Automatically removes top padding to work seamlessly with CardHeader.
 *
 * @example
 * ```tsx
 * <CardContent>
 *   <p>Your main content goes here.</p>
 * </CardContent>
 * ```
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

/**
 * CardFooter Component
 *
 * Footer section of the card, typically used for actions or metadata.
 * Supports flexbox justification for various layouts.
 *
 * @example
 * ```tsx
 * <CardFooter justify="between">
 *   <Button variant="ghost">Cancel</Button>
 *   <Button variant="premium">Confirm</Button>
 * </CardFooter>
 * ```
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Flexbox justification for the footer content
     * @default 'start'
     */
    justify?: 'start' | 'center' | 'end' | 'between'
  }
>(({ className, justify = 'start', ...props }, ref) => {
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  }

  return (
    <div
      ref={ref}
      className={cn('flex items-center pt-4', justifyClasses[justify], className)}
      {...props}
    />
  )
})
CardFooter.displayName = 'CardFooter'

/**
 * MetricCard Component
 *
 * Specialized card variant for displaying dashboard metrics with optional trend indicators.
 * Perfect for KPIs, statistics, and performance indicators.
 *
 * @example
 * ```tsx
 * <MetricCard
 *   trend="up"
 *   trendValue="+12%"
 *   icon="📈"
 *   color="emerald"
 * >
 *   <CardTitle>Total Revenue</CardTitle>
 *   <CardDescription>Monthly performance</CardDescription>
 * </MetricCard>
 * ```
 */
const MetricCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Trend direction for the metric
     */
    trend?: 'up' | 'down' | 'neutral'
    /**
     * Trend value to display (e.g., "+12%", "-5%")
     */
    trendValue?: string
    /**
     * Icon to display in the metric card
     */
    icon?: React.ReactNode
    /**
     * Color theme for the metric
     * @default 'navy'
     */
    color?: 'red' | 'indigo' | 'cyan' | 'gold' | 'emerald' | 'navy'
  }
>(({ className, trend, trendValue, icon, color = 'navy', children, ...props }, ref) => {
  const colorConfig = {
    red: { bg: 'bg-red-500/10', text: 'text-red-600', border: 'border-red-200/50' },
    indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-600', border: 'border-indigo-200/50' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-600', border: 'border-cyan-200/50' },
    gold: { bg: 'bg-gold-500/10', text: 'text-gold-600', border: 'border-gold-200/50' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-200/50' },
    navy: { bg: 'bg-navy-500/10', text: 'text-navy-600', border: 'border-navy-200/50' },
  }

  const trendConfig = {
    up: { icon: '↑', class: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30' },
    down: { icon: '↓', class: 'text-red-600 bg-red-50 dark:bg-red-950/30' },
    neutral: { icon: '→', class: 'text-platinum-500 bg-platinum-50 dark:bg-platinum-950/30' },
  }

  return (
    <div
      ref={ref}
      className={cn(
        'glass-premium rounded-2xl p-6 border border-white/20 shadow-premium-md hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {icon && (
            <div className={cn('flex h-12 w-12 items-center justify-center rounded-xl mb-4', colorConfig[color].bg)}>
              <span className={cn('text-xl', colorConfig[color].text)}>{icon}</span>
            </div>
          )}
          <div className="space-y-1">{children}</div>
        </div>
        {trend && trendValue && (
          <div className={cn('flex items-center gap-1 px-2.5 py-1 rounded-lg text-sm font-semibold shrink-0', trendConfig[trend].class)}>
            <span>{trendConfig[trend].icon}</span>
            <span>{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  )
})
MetricCard.displayName = 'MetricCard'

/**
 * StatCard Component
 *
 * Compact metric display card with value, label, and optional change percentage.
 * Features a background glow effect on hover.
 *
 * @example
 * ```tsx
 * <StatCard
 *   value="1,234"
 *   label="Total Users"
 *   change={12}
 *   icon="👥"
 *   color="navy"
 * />
 * ```
 */
const StatCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    /**
     * The main metric value to display
     */
    value: string | number
    /**
     * Label for the metric
     */
    label: string
    /**
     * Percentage change (positive or negative)
     * Displays with appropriate color and indicator
     */
    change?: number
    /**
     * Icon to display above the value
     */
    icon?: React.ReactNode
    /**
     * Color theme for the card
     * @default 'navy'
     */
    color?: 'red' | 'indigo' | 'cyan' | 'gold' | 'emerald' | 'navy'
  }
>(({ className, value, label, change, icon, color = 'navy', ...props }, ref) => {
  const colorConfig = {
    red: { bg: 'from-red-500 to-rose-600', glow: 'shadow-red-500/20' },
    indigo: { bg: 'from-indigo-500 to-purple-600', glow: 'shadow-indigo-500/20' },
    cyan: { bg: 'from-cyan-400 to-blue-600', glow: 'shadow-cyan-500/20' },
    gold: { bg: 'from-gold-400 to-gold-600', glow: 'shadow-gold-500/20' },
    emerald: { bg: 'from-emerald-400 to-emerald-600', glow: 'shadow-emerald-500/20' },
    navy: { bg: 'from-navy-500 to-navy-700', glow: 'shadow-navy-500/20' },
  }

  return (
    <div
      ref={ref}
      className={cn(
        'glass-premium rounded-2xl p-5 border border-white/20 shadow-premium-md hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group',
        className
      )}
      {...props}
    >
      {/* Background glow effect */}
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500', colorConfig[color].bg)} />
      <div className={cn('absolute inset-0 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500', colorConfig[color].bg, colorConfig[color].glow)} />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm shadow-sm">
              <span className="text-lg">{icon}</span>
            </div>
          )}
          {change !== undefined && (
            <div className={cn('text-sm font-semibold', change >= 0 ? 'text-emerald-600' : 'text-red-600')}>
              {change >= 0 ? '+' : ''}{change}%
            </div>
          )}
        </div>
        <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
        <div className="text-sm text-platinum-500">{label}</div>
      </div>
    </div>
  )
})
StatCard.displayName = 'StatCard'

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  MetricCard,
  StatCard,
  cardVariants,
}

/**
 * ## Card Design Guidelines
 *
 * ### Variant Selection:
 * - **glass-premium**: Premium features, highlighted content, modal dialogs
 * - **glass-subtle/medium/strong**: Background cards, content sections
 * - **metallic-gold/platinum**: Luxury features, pricing tiers, premium content
 * - **platform variants**: Platform-specific content, themed sections
 * - **elevated**: Dashboard cards, standalone content blocks
 * - **flat**: Minimal UI, nested content
 *
 * ### Size Guidelines:
 * - **sm**: Compact metrics, sidebar widgets
 * - **md**: Standard content cards (most common)
 * - **lg**: Featured content, hero sections
 *
 * ### Component Structure:
 * ```
 * Card
 * ├── CardHeader
 * │   ├── CardTitle (optional gradient)
 * │   └── CardDescription
 * ├── CardContent
 * └── CardFooter (optional actions)
 * ```
 *
 * ### Specialized Cards:
 * - **MetricCard**: Dashboard metrics with trend indicators
 * - **StatCard**: Compact stats with change percentage
 *
 * ### Accessibility:
 * - Use CardTitle for proper heading hierarchy
 * - Provide meaningful descriptions
 * - Use `interactive` prop for clickable cards
 * - Add `aria-label` when card content needs context
 *
 * ### Best Practices:
 * - Keep content focused and scannable
 * - Use consistent spacing within cards
 * - Limit card depth to avoid nesting
 * - Use elevation to indicate importance
 * - Reserve premium variants for special use cases
 */
