import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

/**
 * LITHVIK NEXUS - Premium Switch Component
 * World-class toggle switch with premium design system
 *
 * @module Switch
 * @description Ultra-premium switch component with dark mode support,
 *              ARIA accessibility, and smooth animations using the LITHVIK NEXUS design system.
 *              Features premium gold, platinum, and navy colors for VVVVIP-level experience.
 *              Built on top of Radix UI primitives for full accessibility.
 *
 * @example
 * ```tsx
 * <Switch defaultChecked />
 * <Switch checked={checked} onCheckedChange={setChecked} />
 * <Switch disabled />
 * ```
 */

/**
 * Props for the Switch component
 *
 * @interface SwitchProps
 * @description Extends Radix UI Switch primitive props with LITHVIK NEXUS styling.
 *
 * @property {string} [className] - Additional CSS classes to apply
 * @property {boolean} [checked] - Controlled checked state
 * @property {boolean} [defaultChecked] - Default checked state (uncontrolled)
 * @property {boolean} [disabled=false] - Whether the switch is disabled
 * @property {boolean} [required=false] - Whether the field is required
 * @property {string} [name] - Form field name
 * @property {string} [value] - Form field value
 * @property {(checked: boolean) => void} [onCheckedChange] - Callback when checked state changes
 */
export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  /**
   * Additional CSS classes to apply to the switch root
   */
  className?: string
}

/**
 * Premium Switch Component
 *
 * @component Switch
 * @description A fully accessible toggle switch component with premium styling.
 *              Features smooth animations, premium gradients, and full dark mode support.
 *              Perfect for settings panels, preferences, and binary toggles.
 *
 * @param {SwitchProps} props - Component props
 * @param {React.Ref<HTMLButtonElement>} ref - Forwarded ref
 * @returns {JSX.Element} The switch component
 *
 * @example
 * ```tsx
 * // Uncontrolled switch with default checked
 * <Switch defaultChecked />
 *
 * // Controlled switch
 * const [checked, setChecked] = React.useState(false)
 * <Switch
 *   checked={checked}
 *   onCheckedChange={setChecked}
 * />
 *
 * // Disabled switch
 * <Switch disabled />
 *
 * // With custom styling
 * <Switch className="scale-125" />
 * ```
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      // Base styles
      'peer inline-flex shrink-0 cursor-pointer items-center rounded-full',
      // Size (standard switch size)
      'h-5 w-9',
      // Border and shadow
      'border-2 border-transparent',
      'shadow-sm',
      // Transitions
      'transition-all duration-200 ease-out',
      // Focus states
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-gold-500',
      'focus-visible:ring-offset-2',
      'focus-visible:ring-offset-background',
      // Disabled state
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
      // Unchecked state - platinum background
      'data-[state=unchecked]:bg-gradient-to-r',
      'data-[state=unchecked]:from-platinum-100',
      'data-[state=unchecked]:via-platinum-200',
      'data-[state=unchecked]:to-platinum-100',
      'data-[state=unchecked]:border-platinum-300',
      // Checked state - premium gold gradient
      'data-[state=checked]:bg-gradient-to-r',
      'data-[state=checked]:from-gold-400',
      'data-[state=checked]:via-gold-500',
      'data-[state=checked]:to-gold-600',
      // Dark mode unchecked state
      'dark:data-[state=unchecked]:from-navy-900',
      'dark:data-[state=unchecked]:via-navy-800',
      'dark:data-[state=unchecked]:to-navy-900',
      'dark:data-[state=unchecked]:border-navy-700',
      // Dark mode checked state
      'dark:data-[state=checked]:from-gold-500',
      'dark:data-[state=checked]:via-gold-400',
      'dark:data-[state=checked]:to-gold-500',
      // Hover effects
      'hover:shadow-md',
      'data-[state=checked]:hover:shadow-gold',
      'data-[state=unchecked]:hover:shadow-premium-sm',
      // Active/pressed state
      'active:scale-95',
      className
    )}
    {...props}
  >
    {/* Thumb - The circular toggle */}
    <SwitchPrimitive.Thumb
      className={cn(
        // Base styles
        'pointer-events-none block rounded-full shadow-lg',
        // Size
        'h-4 w-4',
        // Background - white/light in light mode
        'bg-white',
        // Dark mode thumb background
        'dark:bg-navy-100',
        // Border for contrast
        'border-2',
        'border-platinum-200',
        'dark:border-navy-300',
        // Transitions
        'transition-all duration-200 ease-out',
        // Position transform - moves thumb when checked
        'data-[state=checked]:translate-x-4',
        'data-[state=unchecked]:translate-x-0',
        // Glow effect in checked state
        'data-[state=checked]:shadow-[0_0_8px_rgba(217,119,6,0.4)]',
        'dark:data-[state=checked]:shadow-[0_0_12px_rgba(217,119,6,0.5)]',
        // Hover scale effect
        'hover:scale-105',
        'active:scale-95'
      )}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

/**
 * Switch Component with Label
 *
 * @component SwitchWithLabel
 * @description A labeled switch component with optional description.
 *              Provides a complete form control with proper accessibility labeling.
 *              Perfect for settings pages with clear descriptions.
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Label text for the switch
 * @param {string} [props.description] - Optional helper/description text
 * @param {string} [props.labelPosition='right'] - Position of the label ('left' or 'right')
 * @param {SwitchProps} props.switchProps - Props to pass to the Switch component
 *
 * @example
 * ```tsx
 * <SwitchWithLabel
 *   label="Enable notifications"
 *   description="Receive push notifications for updates"
 *   defaultChecked
 * />
 *
 * <SwitchWithLabel
 *   label="Dark mode"
 *   labelPosition="left"
 * />
 * ```
 */
export interface SwitchWithLabelProps extends SwitchProps {
  /**
   * Label text for the switch (required for accessibility)
   */
  label: string
  /**
   * Optional helper/description text
   */
  description?: string
  /**
   * Position of the label relative to the switch
   * @default 'right'
   */
  labelPosition?: 'left' | 'right'
}

export const SwitchWithLabel = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchWithLabelProps
>(
  (
    {
      label,
      description,
      labelPosition = 'right',
      ...switchProps
    },
    ref
  ) => {
    // Render order based on label position
    const switchFirst = labelPosition === 'right'

    return (
      <div className="flex items-start gap-3">
        {switchFirst ? (
          <>
            <Switch ref={ref} {...switchProps} />
            <div className="flex flex-col gap-1">
              <label
                className={cn(
                  'text-sm font-medium',
                  'text-platinum-900 dark:text-platinum-100',
                  'cursor-pointer',
                  'transition-colors duration-200',
                  'peer-disabled:cursor-not-allowed peer-disabled:opacity-50'
                )}
              >
                {label}
              </label>
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
          </>
        ) : (
          <>
            <div className="flex flex-col gap-1 text-right">
              <label
                className={cn(
                  'text-sm font-medium',
                  'text-platinum-900 dark:text-platinum-100',
                  'cursor-pointer',
                  'transition-colors duration-200',
                  'peer-disabled:cursor-not-allowed peer-disabled:opacity-50'
                )}
              >
                {label}
              </label>
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
            <Switch ref={ref} {...switchProps} />
          </>
        )}
      </div>
    )
  }
)
SwitchWithLabel.displayName = 'SwitchWithLabel'

/**
 * Switch Group - Multiple related switches
 *
 * @component SwitchGroup
 * @description A container for multiple related switches with consistent styling.
 *              Useful for settings panels with multiple toggle controls.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Group title
 * @param {string} [props.description] - Optional group description
 * @param {Array<{label: string; description?: string; switchProps: SwitchProps}>} props.switches - Array of switch configurations
 *
 * @example
 * ```tsx
 * <SwitchGroup
 *   title="Notification Settings"
 *   description="Manage how you receive notifications"
 *   switches={[
 *     {
 *       label: 'Email notifications',
 *       description: 'Receive updates via email',
 *       switchProps: { defaultChecked: true }
 *     },
 *     {
 *       label: 'Push notifications',
 *       description: 'Receive push notifications',
 *       switchProps: { defaultChecked: true }
 *     },
 *     {
 *       label: 'SMS notifications',
 *       description: 'Receive SMS alerts',
 *       switchProps: { defaultChecked: false }
 *     },
 *   ]}
 * />
 * ```
 */
export interface SwitchGroupProps {
  /**
   * Group title
   */
  title: string
  /**
   * Optional group description
   */
  description?: string
  /**
   * Array of switch configurations
   */
  switches: Array<{
    label: string
    description?: string
    switchProps: SwitchProps
  }>
}

export function SwitchGroup({ title, description, switches }: SwitchGroupProps) {
  return (
    <div
      className={cn(
        'space-y-4 rounded-2xl p-6',
        'glass-premium dark:glass-premium-dark',
        'transition-all duration-300'
      )}
      role="group"
      aria-label={title}
    >
      {/* Group header */}
      <div className="space-y-1">
        <h3
          className={cn(
            'text-lg font-semibold',
            'text-platinum-900 dark:text-platinum-100',
            'gradient-text'
          )}
        >
          {title}
        </h3>
        {description && (
          <p
            className={cn(
              'text-sm',
              'text-platinum-600 dark:text-platinum-400',
              'transition-colors duration-200'
            )}
          >
            {description}
          </p>
        )}
      </div>

      {/* Switches list */}
      <div className="space-y-4">
        {switches.map((sw, index) => (
          <SwitchWithLabel
            key={`${sw.label}-${index}`}
            label={sw.label}
            description={sw.description}
            {...sw.switchProps}
          />
        ))}
      </div>
    </div>
  )
}

/**
 * Switch Card - Single switch in a card layout
 *
 * @component SwitchCard
 * @description A card-style component with a switch for important toggles.
 *              Features prominent styling with icon support.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string} [props.description] - Optional description
 * @param {React.ReactNode} [props.icon] - Optional icon component
 * @param {SwitchProps} props.switchProps - Props to pass to the Switch component
 *
 * @example
 * ```tsx
 * import { Bell } from 'lucide-react'
 *
 * <SwitchCard
 *   title="Enable notifications"
 *   description="Turn on notifications to stay updated"
 *   icon={<Bell className="h-5 w-5" />}
 *   defaultChecked
 * />
 * ```
 */
export interface SwitchCardProps extends SwitchProps {
  /**
   * Card title
   */
  title: string
  /**
   * Optional description
   */
  description?: string
  /**
   * Optional icon to display
   */
  icon?: React.ReactNode
}

export const SwitchCard = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchCardProps
>(
  (
    {
      title,
      description,
      icon,
      ...switchProps
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          'flex items-center justify-between gap-4',
          'rounded-xl p-4',
          'bg-white dark:bg-navy-900/50',
          'border border-platinum-200 dark:border-navy-700',
          'shadow-premium-sm',
          'hover:shadow-premium-md',
          'transition-all duration-200',
          'hover:border-gold-300 dark:hover:border-gold-600'
        )}
      >
        {/* Left side - icon and text */}
        <div className="flex items-start gap-3">
          {icon && (
            <div
              className={cn(
                'mt-0.5 flex-shrink-0',
                'text-gold-600 dark:text-gold-400'
              )}
            >
              {icon}
            </div>
          )}
          <div className="flex flex-col gap-1">
            <h4
              className={cn(
                'text-sm font-semibold',
                'text-platinum-900 dark:text-platinum-100',
                'transition-colors duration-200'
              )}
            >
              {title}
            </h4>
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
        </div>

        {/* Right side - switch */}
        <Switch ref={ref} {...switchProps} />
      </div>
    )
  }
)
SwitchCard.displayName = 'SwitchCard'

export { Switch }
