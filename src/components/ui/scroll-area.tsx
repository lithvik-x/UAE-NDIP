import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cn } from '@/lib/utils'

/**
 * ScrollArea Component
 *
 * A customizable scrollable area component built on Radix UI primitives.
 * Features smooth scrolling, custom scrollbar styling, and premium design system integration.
 *
 * @example
 * ```tsx
 * <ScrollArea className="h-400 w-400">
 *   <YourContent />
 * </ScrollArea>
 * ```
 *
 * @example With custom scrollbar
 * ```tsx
 * <ScrollArea>
 *   <Content />
 *   <ScrollBar orientation="horizontal" />
 * </ScrollArea>
 * ```
 */
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(
      'relative overflow-hidden',
      // Premium design system integration
      'rounded-xl',
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      className="h-full w-full rounded-[inherit]"
      // Smooth scrolling behavior
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

/**
 * ScrollBar Component
 *
 * A customizable scrollbar that integrates with the ScrollArea component.
 * Features premium styling with gold, platinum, and navy colors from the design system.
 *
 * @props orientation - 'vertical' | 'horizontal' - Direction of the scrollbar (default: 'vertical')
 *
 * @example
 * ```tsx
 * <ScrollBar orientation="vertical" />
 * <ScrollBar orientation="horizontal" />
 * ```
 */
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors duration-200',
      // Premium hover animation
      'hover:opacity-80',
      // Orientation-based positioning
      orientation === 'vertical' &&
        'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' &&
        'h-2.5 flex-col border-t border-t-transparent p-[1px]',
      // Dark mode support
      'dark:border-white/5',
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cn(
        'relative flex-1 rounded-full transition-all duration-200',
        // Premium design system colors
        'bg-gradient-to-b from-platinum-300 to-platinum-400',
        'hover:from-gold-400 hover:to-gold-500',
        'dark:from-navy-400 dark:to-navy-500',
        'dark:hover:from-gold-500 dark:hover:to-gold-600',
        // Subtle hover scale
        'hover:scale-110',
        // Shadow for depth
        'shadow-premium-sm'
      )}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
