import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Select Component
 *
 * A fully accessible select dropdown component built on Radix UI primitives.
 * Integrates with the premium design system featuring gold, platinum, and navy colors.
 *
 * @example Basic usage
 * ```tsx
 * <Select>
 *   <SelectTrigger>
 *     <SelectValue placeholder="Select an option" />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="option1">Option 1</SelectItem>
 *     <SelectItem value="option2">Option 2</SelectItem>
 *   </SelectContent>
 * </Select>
 * ```
 *
 * @example With disabled state
 * ```tsx
 * <Select disabled>
 *   <SelectTrigger>
 *     <SelectValue placeholder="Disabled" />
 *   </SelectTrigger>
 * </Select>
 * ```
 *
 * @example With groups
 * ```tsx
 * <Select>
 *   <SelectTrigger>
 *     <SelectValue placeholder="Choose" />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectGroup>
 *       <SelectLabel>Fruits</SelectLabel>
 *       <SelectItem value="apple">Apple</SelectItem>
 *       <SelectItem value="orange">Orange</SelectItem>
 *     </SelectGroup>
 *   </SelectContent>
 * </Select>
 * ```
 */
const Select = SelectPrimitive.Root

/**
 * SelectGroup Component
 *
 * Used to group related select items together with optional labels.
 * Organizes options into logical sections for better UX.
 *
 * @example
 * ```tsx
 * <SelectGroup>
 *   <SelectLabel>Category</SelectLabel>
 *   <SelectItem value="1">Item 1</SelectItem>
 *   <SelectItem value="2">Item 2</SelectItem>
 * </SelectGroup>
 * ```
 */
const SelectGroup = SelectPrimitive.Group

/**
 * SelectValue Component
 *
 * Displays the currently selected value in the SelectTrigger.
 * Acts as a placeholder when no value is selected.
 *
 * @props placeholder - Text to show when no value is selected
 *
 * @example
 * ```tsx
 * <SelectValue placeholder="Select an option" />
 * ```
 */
const SelectValue = SelectPrimitive.Value

/**
 * SelectTrigger Component
 *
 * The button that opens/closes the select dropdown.
 * Features premium styling with glassmorphism and smooth animations.
 *
 * @accessibility
 * - Has role="combobox"
 * - aria-expanded indicates open/closed state
 * - aria-controls points to the content element
 * - Fully keyboard navigable
 *
 * @example
 * ```tsx
 * <SelectTrigger className="w-full">
 *   <SelectValue placeholder="Choose..." />
 * </SelectTrigger>
 * ```
 */
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-10 w-full items-center justify-between rounded-xl',
      // Premium border with hover effects
      'border border-platinum-200 bg-white/50 px-3 py-2 text-sm',
      'hover:border-gold-300 hover:bg-white/70',
      'focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2',
      // Glassmorphism effect
      'backdrop-blur-sm shadow-premium-sm',
      // Smooth transitions
      'transition-all duration-200',
      // Disabled state
      'disabled:cursor-not-allowed disabled:opacity-50',
      // Text styling
      'ring-offset-background placeholder:text-platinum-400',
      'dark:border-navy-700 dark:bg-navy-950/50',
      'dark:hover:border-gold-600 dark:hover:bg-navy-900/70',
      'dark:text-platinum-100 dark:placeholder:text-platinum-500',
      // Line clamping for long text
      '[&>span]:line-clamp-1',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown
        className={cn(
          'h-4 w-4 transition-transform duration-200',
          'text-platinum-400',
          'dark:text-platinum-500',
          'data-[state=open]:rotate-180'
        )}
      />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

/**
 * SelectScrollUpButton Component
 *
 * Button shown at the top of scrollable select content.
 * Allows users to scroll up through options.
 *
 * @accessibility
 * - Has appropriate aria-label for screen readers
 * - Keyboard accessible
 */
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      // Premium hover effect
      'hover:bg-platinum-100 dark:hover:bg-navy-800',
      'transition-colors duration-150',
      className
    )}
    {...props}
  >
    <ChevronDown
      className={cn(
        'h-4 w-4',
        'text-platinum-500',
        'dark:text-platinum-400'
      )}
    />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

/**
 * SelectScrollDownButton Component
 *
 * Button shown at the bottom of scrollable select content.
 * Allows users to scroll down through options.
 *
 * @accessibility
 * - Has appropriate aria-label for screen readers
 * - Keyboard accessible
 */
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      // Premium hover effect
      'hover:bg-platinum-100 dark:hover:bg-navy-800',
      'transition-colors duration-150',
      className
    )}
    {...props}
  >
    <ChevronDown
      className={cn(
        'h-4 w-4',
        'text-platinum-500',
        'dark:text-platinum-400'
      )}
    />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

/**
 * SelectContent Component
 *
 * The dropdown content that appears when the select is opened.
 * Features premium glassmorphism design with smooth animations.
 *
 * @props position - 'popper' | 'item-aligned' - Positioning strategy (default: 'popper')
 *
 * @accessibility
 * - Has role="listbox"
 * - aria-orientation="vertical"
 * - Properly manages focus for keyboard navigation
 *
 * @example
 * ```tsx
 * <SelectContent position="popper">
 *   <SelectItem value="1">Option 1</SelectItem>
 * </SelectContent>
 * ```
 */
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl',
        // Premium border and background
        'border border-platinum-200 bg-white/95',
        'shadow-premium-lg',
        // Glassmorphism effect
        'backdrop-blur-md',
        // Premium animations
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        // Dark mode
        'dark:border-navy-700 dark:bg-navy-900/95',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

/**
 * SelectLabel Component
 *
 * Optional label for grouping select items.
 * Provides visual hierarchy and context for grouped options.
 *
 * @example
 * ```tsx
 * <SelectLabel>Categories</SelectLabel>
 * <SelectItem value="1">Option 1</SelectItem>
 * ```
 */
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      'py-1.5 pl-8 pr-2 text-sm font-semibold',
      // Premium text color
      'text-navy-700 dark:text-navy-300',
      'uppercase tracking-wide text-xs',
      className
    )}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

/**
 * SelectItem Component
 *
 * Individual selectable option in the dropdown.
 * Features premium styling with hover effects and selected state indicators.
 *
 * @props value - Unique value for this option
 * @props disabled - Whether this option can be selected
 *
 * @accessibility
 * - Has role="option"
 * - aria-selected indicates selection state
 * - Properly announces selection to screen readers
 *
 * @example
 * ```tsx
 * <SelectItem value="option1" disabled={false}>
 *   Option 1
 * </SelectItem>
 * ```
 */
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-pointer select-none items-center rounded-lg',
      'py-2 pl-8 pr-2 text-sm outline-none',
      // Premium hover and focus states
      'transition-all duration-150',
      'hover:bg-platinum-100 hover:text-navy-900',
      'focus:bg-navy-100 focus:text-navy-900',
      'data-[state=checked]:bg-gold-100 data-[state=checked]:text-gold-900',
      'dark:hover:bg-navy-800 dark:hover:text-platinum-100',
      'dark:focus:bg-navy-700 dark:focus:text-platinum-100',
      'dark:data-[state=checked]:bg-gold-900/30 dark:data-[state=checked]:text-gold-300',
      // Disabled state
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span
      className={cn(
        'absolute left-2 flex h-3.5 w-3.5 items-center justify-center'
      )}
    >
      <SelectPrimitive.ItemIndicator>
        <Check
          className={cn(
            'h-4 w-4',
            'text-gold-600',
            'dark:text-gold-400'
          )}
        />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

/**
 * SelectSeparator Component
 *
 * Visual separator between groups of select items.
 * Provides visual hierarchy and organization.
 *
 * @example
 * ```tsx
 * <SelectItem value="1">Item 1</SelectItem>
 * <SelectSeparator />
 * <SelectItem value="2">Item 2</SelectItem>
 * ```
 */
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(
      '-mx-1 my-1 h-px',
      // Premium separator color
      'bg-platinum-200',
      'dark:bg-navy-700',
      className
    )}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
