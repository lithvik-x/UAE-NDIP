/**
 * LITHVIK NEXUS DIALOG COMPONENTS
 * @fileoverview Premium modal and alert dialog components with design system integration
 * @module components/dialog/dialog
 * @author LITHVIK NEXUS
 * @version 2.0.0
 *
 * @description
 * A comprehensive dialog system built on Radix UI primitives featuring:
 * - Multiple visual variants (default, premium, glass, metallic)
 * - Design system colors (navy, gold, platinum)
 * - Full dark mode support
 * - Accessibility features (ARIA attributes, keyboard navigation)
 * - Smooth animations
 * - Size variants (sm, md, lg, xl, full)
 * - Alert dialogs for critical confirmations
 *
 * @example
 * ```tsx
 * import {
 *   Dialog,
 *   DialogContent,
 *   DialogHeader,
 *   DialogTitle,
 *   DialogDescription,
 *   DialogTrigger,
 *   DialogFooter,
 * } from '@/components/dialog/dialog'
 *
 * <Dialog>
 *   <DialogTrigger>Open Dialog</DialogTrigger>
 *   <DialogContent variant="premium" size="lg">
 *     <DialogHeader>
 *       <DialogTitle gradient="navy">Important Update</DialogTitle>
 *       <DialogDescription>
 *         This dialog contains important information.
 *       </DialogDescription>
 *     </DialogHeader>
 *     {/* Content *\/}
 *     <DialogFooter justify="end">
 *       <Button>Confirm</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 * ```
 */

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

// ============================================================================
// BASE DIALOG COMPONENTS
// ============================================================================

/**
 * Dialog - Root dialog component
 *
 * @description
 * Controls the open/closed state of the dialog. Wraps all dialog content.
 *
 * @see {@link https://www.radix-ui.com/primitives/docs/components/dialog Radix UI Dialog}
 */
const Dialog = DialogPrimitive.Root

/**
 * DialogTrigger - Button or element that opens the dialog
 *
 * @description
 * Wrap the trigger element (button, link, etc.) with this component.
 */
const DialogTrigger = DialogPrimitive.Trigger

/**
 * DialogPortal - Container for dialog overlay and content
 *
 * @description
 * Portals dialog content to the document body. Used internally.
 */
const DialogPortal = DialogPrimitive.Portal

/**
 * DialogClose - Programmatic close button
 *
 * @description
 * Can be used to create custom close buttons or trigger close actions.
 */
const DialogClose = DialogPrimitive.Close

// ============================================================================
// DIALOG OVERLAY
// ============================================================================

/**
 * Props for DialogOverlay component
 */
interface DialogOverlayProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> {
  /** Visual style variant for the overlay */
  variant?: 'default' | 'premium' | 'glass' | 'metallic-gold' | 'metallic-platinum'
}

/**
 * DialogOverlay - Background overlay with blur effect
 *
 * @description
 * Semi-transparent backdrop that appears behind the dialog.
 * Supports multiple blur and opacity variants.
 *
 * @example
 * ```tsx
 * <DialogOverlay variant="premium" className="bg-black/80" />
 * ```
 */
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayProps
>(({ className, variant = 'default', ...props }, ref) => {
  const variantStyles = {
    default: 'bg-black/40 backdrop-blur-sm',
    premium: 'bg-black/60 backdrop-blur-md',
    glass: 'bg-black/50 backdrop-blur-md',
    'metallic-gold': 'bg-black/50 backdrop-blur-md',
    'metallic-platinum': 'bg-black/50 backdrop-blur-md',
  }

  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        variantStyles[variant as keyof typeof variantStyles] || variantStyles.default,
        className
      )}
      {...props}
    />
  )
})
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

// ============================================================================
// DIALOG CONTENT
// ============================================================================

/**
 * Props for DialogContent component
 */
interface DialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  /** Visual style variant for the dialog */
  variant?: 'default' | 'premium' | 'glass' | 'metallic-gold' | 'metallic-platinum'
  /** Size variant for the dialog */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

/**
 * DialogContent - Main dialog container
 *
 * @description
 * The primary dialog container with support for multiple visual variants,
 * sizes, and animations. Includes a close button by default.
 *
 * @example
 * ```tsx
 * <DialogContent variant="premium" size="lg" className="p-8">
 *   {/* Dialog content goes here *\/}
 * </DialogContent>
 * ```
 */
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, variant = 'premium', size = 'md', ...props }, ref) => {
  const variantStyles = {
    default: 'bg-white/95 dark:bg-navy-900/95 border-platinum-200 dark:border-platinum-700',
    premium: 'glass-premium-premium border-white/20 dark:border-white/10',
    glass: 'glass-strong border-white/20 dark:border-white/10',
    'metallic-gold': 'card-metallic-gold border-gold-200/50 dark:border-gold-700/50',
    'metallic-platinum': 'card-metallic-platinum border-platinum-200/50 dark:border-platinum-700/50',
  }

  const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-[95vw]',
  }

  return (
    <DialogPortal>
      <DialogOverlay variant={variant} />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-premium-2xl duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-3xl',
          variantStyles[variant as keyof typeof variantStyles] || variantStyles.premium,
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className="absolute right-4 top-4 rounded-xl opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-white/20 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-platinum-100 dark:data-[state=open]:bg-platinum-800 data-[state=open]:text-platinum-500-500 dark:data-[state=open]:text-platinum-500-400 h-10 w-10 flex items-center justify-center"
          aria-label="Close dialog"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

// ============================================================================
// DIALOG HEADER
// ============================================================================

/**
 * Props for DialogHeader component
 */
interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Center align header content */
  centered?: boolean
  /** Optional icon to display next to title */
  icon?: React.ReactNode
}

/**
 * DialogHeader - Dialog header section
 *
 * @description
 * Container for dialog title, description, and optional icon.
 * Supports centered alignment and icon display.
 *
 * @example
 * ```tsx
 * <DialogHeader centered icon={<Icon />}>
 *   <DialogTitle>Header Title</DialogTitle>
 *   <DialogDescription>Header description</DialogDescription>
 * </DialogHeader>
 * ```
 */
const DialogHeader = React.forwardRef<
  HTMLDivElement,
  DialogHeaderProps
>(({ className, centered, icon, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col space-y-2',
      centered && 'items-center text-center',
      icon && 'sm:flex-row sm:items-center sm:gap-4',
      !centered && !icon && 'text-left sm:text-left',
      className
    )}
    {...props}
  >
    {icon && <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-500/10 dark:bg-navy-400/10 text-navy-500-600 dark:text-navy-500-400">{icon}</div>}
    {children}
  </div>
))
DialogHeader.displayName = 'DialogHeader'

// ============================================================================
// DIALOG FOOTER
// ============================================================================

/**
 * Props for DialogFooter component
 */
interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alignment of footer actions */
  justify?: 'start' | 'center' | 'end' | 'between'
}

/**
 * DialogFooter - Dialog footer section for actions
 *
 * @description
 * Container for dialog action buttons. Supports multiple alignment options.
 * Automatically adds border separator at the top.
 *
 * @example
 * ```tsx
 * <DialogFooter justify="end">
 *   <Button variant="outline">Cancel</Button>
 *   <Button>Confirm</Button>
 * </DialogFooter>
 * ```
 */
const DialogFooter = React.forwardRef<
  HTMLDivElement,
  DialogFooterProps
>(({ className, justify, ...props }, ref) => {
  const justifyStyles = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  }

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:gap-3 gap-2 pt-4 border-t border-white/10 dark:border-white/5 mt-4',
        justify && justifyStyles[justify],
        className
      )}
      {...props}
    />
  )
})
DialogFooter.displayName = 'DialogFooter'

// ============================================================================
// DIALOG TITLE
// ============================================================================

/**
 * Props for DialogTitle component
 */
interface DialogTitleProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {
  /** Gradient text variant */
  gradient?: 'clairvoyance' | 'perception' | 'ricochet' | 'gold' | 'navy' | 'platinum'
}

/**
 * DialogTitle - Dialog title with optional gradient
 *
 * @description
 * Main heading for the dialog. Supports gradient text variants
 * that match the platform branding.
 *
 * @example
 * ```tsx
 * <DialogTitle gradient="navy">Welcome to NEXUS</DialogTitle>
 * ```
 */
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, gradient, ...props }, ref) => {
  const gradientClasses = {
    clairvoyance: 'gradient-text-clairvoyance',
    perception: 'gradient-text-perception',
    ricochet: 'gradient-text-ricochet',
    gold: 'gradient-text-gold-700',
    navy: 'gradient-text',
    platinum: 'gradient-text-platinum-500',
  }

  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(
        'text-2xl font-bold leading-none tracking-tight text-platinum-500-900 dark:text-platinum-500-50',
        gradient && gradientClasses[gradient],
        className
      )}
      {...props}
    />
  )
})
DialogTitle.displayName = DialogPrimitive.Title.displayName

// ============================================================================
// DIALOG DESCRIPTION
// ============================================================================

/**
 * DialogDescription - Supporting text for dialog content
 *
 * @description
 * Secondary text that provides additional context or instructions.
 * Automatically styled for optimal readability.
 *
 * @example
 * ```tsx
 * <DialogDescription>
 *   This action cannot be undone. Please confirm to proceed.
 * </DialogDescription>
 * ```
 */
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-platinum-500-600 dark:text-platinum-500-400 leading-relaxed', className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

// ============================================================================
// ALERT DIALOG - For critical confirmations
// ============================================================================

/**
 * AlertDialog - Specialized dialog for critical confirmations
 *
 * @description
 * Designed for destructive actions, confirmations, and critical alerts.
 * Requires explicit user confirmation to proceed.
 *
 * @example
 * ```tsx
 * <AlertDialog>
 *   <AlertDialogTrigger>
 *     <Button variant="destructive">Delete Account</Button>
 *   </AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogHeader>
 *       <AlertDialogTitle>Are you sure?</AlertDialogTitle>
 *       <AlertDialogDescription>
 *         This action cannot be undone.
 *       </AlertDialogDescription>
 *     </AlertDialogHeader>
 *     <AlertDialogFooter>
 *       <AlertDialogCancel>Cancel</AlertDialogCancel>
 *       <AlertDialogAction variant="destructive">
 *         Delete
 *       </AlertDialogAction>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialog>
 * ```
 */
const AlertDialog = DialogPrimitive.Root

/**
 * AlertDialogTrigger - Button that opens the alert dialog
 */
const AlertDialogTrigger = DialogPrimitive.Trigger

/**
 * AlertDialogContent - Alert dialog container
 *
 * @description
 * Pre-styled for critical confirmations with premium glass effect.
 */
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay variant="premium" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-premium-2xl duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-3xl glass-premium-premium border border-white/20 dark:border-white/10',
        className
      )}
      role="alertdialog"
      aria-describedby="alert-dialog-description"
      {...props}
    />
  </DialogPortal>
))
AlertDialogContent.displayName = 'AlertDialogContent'

/**
 * AlertDialogHeader - Alert dialog header
 *
 * @description
 * Center-aligned header for alert dialogs.
 */
const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col space-y-2 text-center', className)}
    {...props}
  />
)
AlertDialogHeader.displayName = 'AlertDialogHeader'

/**
 * AlertDialogFooter - Alert dialog footer
 *
 * @description
 * Right-aligned action buttons for confirmations.
 */
const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4',
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = 'AlertDialogFooter'

/**
 * AlertDialogTitle - Alert dialog title
 *
 * @description
 * Bold heading for the alert message.
 */
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-2xl font-bold text-platinum-500-900 dark:text-platinum-500-50', className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogTitle.displayName

/**
 * AlertDialogDescription - Alert dialog description
 *
 * @description
 * Supporting text explaining the alert and its consequences.
 */
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-platinum-500-600 dark:text-platinum-500-400', className)}
    {...props}
  />
))
AlertDialogDescription.displayName = AlertDialogDescription.displayName

/**
 * Props for AlertDialogAction component
 */
interface AlertDialogActionProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close> {
  /** Button style variant */
  variant?: 'default' | 'destructive' | 'premium' | 'gold'
}

/**
 * AlertDialogAction - Confirm button for alert dialog
 *
 * @description
 * Primary action button for confirming the alert. Supports multiple
 * visual variants including destructive for dangerous actions.
 *
 * @example
 * ```tsx
 * <AlertDialogAction variant="destructive">
 *   Delete Account
 * </AlertDialogAction>
 * ```
 */
const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  AlertDialogActionProps
>(({ className, variant = 'default', ...props }, ref) => {
  const variantStyles = {
    default: 'bg-navy-600 dark:bg-navy-500 hover:bg-navy-700 dark:hover:bg-navy-600 text-white',
    destructive: 'bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 text-white',
    premium: 'bg-gradient-to-r from-navy-500 to-navy-700 dark:from-navy-600 dark:to-navy-800 text-white hover:from-navy-600 hover:to-navy-800 dark:hover:from-navy-700 dark:hover:to-navy-900 shadow-premium-md',
    gold: 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 shadow-premium-md',
  }

  return (
    <DialogPrimitive.Close
      ref={ref}
      className={cn(
        'inline-flex h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
})
AlertDialogAction.displayName = AlertDialogAction.displayName

/**
 * AlertDialogCancel - Cancel button for alert dialog
 *
 * @description
 * Secondary action button for canceling the alert.
 *
 * @example
 * ```tsx
 * <AlertDialogCancel>Cancel</AlertDialogCancel>
 * ```
 */
const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(
      'inline-flex h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white/80 dark:bg-white/10 border border-platinum-200 dark:border-platinum-700 text-platinum-500-700 dark:text-platinum-500-300 hover:bg-platinum-50 dark:hover:bg-platinum-800 hover:text-platinum-500-900 dark:hover:text-platinum-500-100',
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogCancel.displayName

// ============================================================================
// EXPORTS
// ============================================================================

export {
  // Standard Dialog
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  // Alert Dialog
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

// Export types for TypeScript consumers
export type {
  DialogOverlayProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  AlertDialogActionProps,
}
