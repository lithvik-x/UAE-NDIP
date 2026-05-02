import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'

/**
 * LITHVIK NEXUS - Premium Slider Component
 * World-class range input with premium design system
 *
 * @module Slider
 * @description Ultra-premium slider component with dark mode support,
 *              ARIA accessibility, and smooth animations using the LITHVIK NEXUS design system.
 *              Features premium gold, platinum, and navy colors for VVVVIP-level experience.
 *              Built on top of Radix UI primitives for full accessibility.
 *
 * @example
 * ```tsx
 * <Slider defaultValue={[50]} />
 * <Slider defaultValue={[25, 75]} />
 * <Slider defaultValue={[33]} max={100} step={1} />
 * ```
 */

/**
 * Props for the Slider component
 *
 * @interface SliderProps
 * @description Extends Radix UI Slider primitive props with LITHVIK NEXUS styling.
 *
 * @property {string} [className] - Additional CSS classes to apply
 * @property {number[]} [defaultValue] - Initial value(s) of the slider
 * @property {number[]} [value] - Controlled value(s) of the slider
 * @property {number} [min=0] - Minimum value
 * @property {number} [max=100] - Maximum value
 * @property {number} [step=1] - Step increment
 * @property {boolean} [disabled=false] - Whether the slider is disabled
 * @property {string} [name] - Form field name
 * @property {boolean} [required=false] - Whether the field is required
 * @property {(value: number[]) => void} [onValueChange] - Callback when value changes
 * @property {(value: number[]) => void} [onValueCommit] - Callback when value is committed (on drag end)
 */
export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /**
   * Additional CSS classes to apply to the slider root
   */
  className?: string
}

/**
 * Premium Slider Component
 *
 * @component Slider
 * @description A fully accessible range slider component with premium styling.
 *              Supports single and multi-thumb configurations with smooth animations.
 *              Features glassmorphism effects, premium gradients, and full dark mode support.
 *
 * @param {SliderProps} props - Component props
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref
 * @returns {JSX.Element} The slider component
 *
 * @example
 * ```tsx
 * // Single value slider
 * <Slider defaultValue={[50]} />
 *
 * // Range slider with two thumbs
 * <Slider defaultValue={[25, 75]} />
 *
 * // Controlled slider with custom step
 * const [value, setValue] = React.useState([33])
 * <Slider
 *   value={value}
 *   onValueChange={setValue}
 *   max={100}
 *   step={5}
 *   className="w-full"
 * />
 *
 * // Disabled slider
 * <Slider defaultValue={[50]} disabled />
 * ```
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      'group', // For hover effects on child elements
      'focus-visible:outline-none',
      // Accessibility
      'disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    {/* Track - Background rail */}
    <SliderPrimitive.Track
      className={cn(
        'relative h-2 w-full grow overflow-hidden rounded-full',
        'transition-all duration-300 ease-out',
        // Light mode
        'bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-100',
        'border border-platinum-300',
        // Dark mode
        'dark:from-navy-900 dark:via-navy-800 dark:to-navy-900',
        'dark:border-navy-700',
        // Hover effects
        'group-hover:border-gold-400/50 dark:group-hover:border-gold-500/50',
        'group-hover:shadow-premium-sm'
      )}
    >
      {/* Range - Filled portion */}
      <SliderPrimitive.Range
        className={cn(
          'absolute h-full rounded-full',
          'transition-all duration-150 ease-out',
          // Premium gradient with gold accent
          'bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600',
          // Dark mode gradient
          'dark:from-gold-500 dark:via-gold-400 dark:to-gold-500',
          // Subtle glow effect
          'shadow-[0_0_12px_rgba(217,119,6,0.3)]',
          'dark:shadow-[0_0_16px_rgba(217,119,6,0.4)]'
        )}
      />
    </SliderPrimitive.Track>

    {/* Thumb - Draggable handle */}
    <SliderPrimitive.Thumb
      className={cn(
        'block',
        // Size
        'h-5 w-5',
        // Shape and border
        'rounded-full',
        'border-2 border-white dark:border-navy-300',
        // Background
        'bg-gradient-to-br from-gold-400 to-gold-600',
        'dark:from-gold-500 dark:to-gold-400',
        // Shadow
        'shadow-lg',
        'shadow-gold',
        'dark:shadow-gold-strong',
        // Transitions
        'transition-all duration-200 ease-out',
        // Hover effects
        'hover:scale-110',
        'hover:shadow-xl',
        'hover:shadow-gold-strong',
        'dark:hover:shadow-gold-strong',
        // Focus states
        'focus-visible:outline-none',
        'focus-visible:ring-2',
        'focus-visible:ring-gold-500',
        'focus-visible:ring-offset-2',
        'focus-visible:ring-offset-background',
        // Active states
        'active:scale-95',
        'active:shadow-md',
        // Disabled state (handled by root, but kept for clarity)
        'disabled:pointer-events-none disabled:opacity-50',
        'disabled:hover:scale-100'
      )}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

/**
 * Slider Component with Label
 *
 * @component SliderWithLabel
 * @description A labeled slider component with optional value display and helper text.
 *              Provides a complete form control with proper accessibility labeling.
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Label text for the slider
 * @param {string} [props.description] - Optional helper/description text
 * @param {boolean} [props.showValue=false] - Whether to display the current value
 * @param {string} [props.valuePrefix] - Prefix for value display (e.g., "$")
 * @param {string} [props.valueSuffix] - Suffix for value display (e.g., "%")
 * @param {SliderProps} props.sliderProps - Props to pass to the Slider component
 *
 * @example
 * ```tsx
 * <SliderWithLabel
 *   label="Volume"
 *   defaultValue={[50]}
 *   showValue
 *   valueSuffix="%"
 * />
 *
 * <SliderWithLabel
 *   label="Budget Range"
 *   description="Set your budget range"
 *   defaultValue={[1000, 5000]}
 *   showValue
 *   valuePrefix="$"
 * />
 * ```
 */
export interface SliderWithLabelProps extends SliderProps {
  /**
   * Label text for the slider (required for accessibility)
   */
  label: string
  /**
   * Optional helper/description text
   */
  description?: string
  /**
   * Whether to display the current value
   */
  showValue?: boolean
  /**
   * Prefix for value display (e.g., "$")
   */
  valuePrefix?: string
  /**
   * Suffix for value display (e.g., "%")
   */
  valueSuffix?: string
  /**
   * Custom value formatter
   */
  formatValue?: (value: number) => string
}

export const SliderWithLabel = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderWithLabelProps
>(
  (
    {
      label,
      description,
      showValue = false,
      valuePrefix = '',
      valueSuffix = '',
      formatValue,
      ...sliderProps
    },
    ref
  ) => {
    // Get current value from defaultValue or value props
    const currentValue = sliderProps.value || sliderProps.defaultValue || [0]

    // Format value for display
    const displayValue = React.useMemo(() => {
      if (typeof formatValue === 'function') {
        return currentValue.map(formatValue).join(' - ')
      }
      return currentValue.map(v => `${valuePrefix}${v}${valueSuffix}`).join(' - ')
    }, [currentValue, valuePrefix, valueSuffix, formatValue])

    return (
      <div className="space-y-2">
        {/* Label row with value display */}
        <div className="flex items-center justify-between">
          <label
            className={cn(
              'text-sm font-medium',
              'text-platinum-900 dark:text-platinum-100',
              'transition-colors duration-200'
            )}
          >
            {label}
          </label>
          {showValue && (
            <span
              className={cn(
                'text-sm font-semibold',
                'text-amber-700 dark:text-gold-400',
                'font-mono',
                'tabular-nums',
                'transition-colors duration-200'
              )}
              aria-live="polite"
              aria-atomic="true"
            >
              {displayValue}
            </span>
          )}
        </div>

        {/* Slider component */}
        <Slider ref={ref} {...sliderProps} />

        {/* Optional description */}
        {description && (
          <p
            className={cn(
              'text-xs',
              'text-platinum-600 dark:text-platinum-400',
              'transition-colors duration-200'
            )}
          >
            {description}
          </p>
        )}
      </div>
    )
  }
)
SliderWithLabel.displayName = 'SliderWithLabel'

/**
 * Slider Group - Multiple related sliders
 *
 * @component SliderGroup
 * @description A container for multiple related sliders with consistent styling.
 *              Useful for settings panels with multiple range controls.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Group title
 * @param {Array<{label: string; description?: string; sliderProps: SliderProps}>} props.sliders - Array of slider configurations
 *
 * @example
 * ```tsx
 * <SliderGroup
 *   title="Audio Settings"
 *   sliders={[
 *     { label: 'Master Volume', sliderProps: { defaultValue: [75] } },
 *     { label: 'Bass', sliderProps: { defaultValue: [50] } },
 *     { label: 'Treble', sliderProps: { defaultValue: [60] } },
 *   ]}
 * />
 * ```
 */
export interface SliderGroupProps {
  /**
   * Group title
   */
  title: string
  /**
   * Array of slider configurations
   */
  sliders: Array<{
    label: string
    description?: string
    sliderProps: SliderProps
  }>
}

export function SliderGroup({ title, sliders }: SliderGroupProps) {
  return (
    <div
      className={cn(
        'space-y-6 rounded-2xl p-6',
        'glass-premium dark:glass-premium-dark',
        'transition-all duration-300'
      )}
      role="group"
      aria-label={title}
    >
      <h3
        className={cn(
          'text-lg font-semibold',
          'text-platinum-900 dark:text-platinum-100',
          'gradient-text'
        )}
      >
        {title}
      </h3>
      <div className="space-y-4">
        {sliders.map((slider, index) => (
          <SliderWithLabel
            key={`${slider.label}-${index}`}
            label={slider.label}
            description={slider.description}
            {...slider.sliderProps}
          />
        ))}
      </div>
    </div>
  )
}

export { Slider }
