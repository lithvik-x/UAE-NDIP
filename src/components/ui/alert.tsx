'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { X, AlertCircle, CheckCircle2, Info, AlertTriangle, Rocket } from 'lucide-react'
import { Button } from './button'

/**
 * LITHVIK NEXUS - Premium Alert Component
 * World-class alert system with dismissible functionality, animations, and glassmorphism
 */

// ============================================================================
// TYPES AND INTERFACES
// ============================================================================

interface AlertContextValue {
  dismissible: boolean
  onClose?: () => void
}

const AlertContext = React.createContext<AlertContextValue>({
  dismissible: false,
})

// ============================================================================
// VARIANTS
// ============================================================================

const alertVariants = cva(
  'relative w-full rounded-xl border p-4 transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-border shadow-sm',
        info: 'border-blue-200/50 bg-blue-50/80 text-blue-800 dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-200 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400',
        success: 'border-emerald-200/50 bg-emerald-50/80 text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/50 dark:text-emerald-200 [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-400',
        warning: 'border-amber-200/50 bg-amber-50/80 text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/50 dark:text-amber-200 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400',
        error: 'border-red-200/50 bg-red-50/80 text-red-800 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-200 [&>svg]:text-red-600 dark:[&>svg]:text-red-400',
        premium: 'glass-premium border-gold-200/50 text-navy-700 dark:text-gold-200 [&>svg]:text-gold-600 dark:[&>svg]:text-gold-400',
      },
      size: {
        sm: 'p-3 [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg~*]:pl-6 [&>svg]:left-3 [&>svg]:top-3',
        default: 'p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg]:w-4 [&>svg]:h-4',
        lg: 'p-5 [&>svg]:w-5 [&>svg]:h-5 [&>svg~*]:pl-8 [&>svg]:left-5 [&>svg]:top-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

// ============================================================================
// ICONS COMPONENT
// ============================================================================

const AlertIcons = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
  premium: Rocket,
}

interface AlertIconProps {
  variant: VariantProps<typeof alertVariants>['variant']
  className?: string
}

const AlertIcon = ({ variant, className }: AlertIconProps) => {
  const Icon = AlertIcons[variant || 'default']
  return <Icon className={cn('shrink-0', className)} />
}

// ============================================================================
// MAIN ALERT COMPONENT
// ============================================================================

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /**
   * Whether the alert can be dismissed by the user
   * @default false
   */
  dismissible?: boolean

  /**
   * Callback when the alert is dismissed
   */
  onDismiss?: () => void

  /**
   * Whether to show the default icon based on variant
   * @default true
   */
  showIcon?: boolean

  /**
   * Custom icon to display
   */
  icon?: React.ReactNode

  /**
   * Whether the alert has animation on mount
   * @default true
   */
  animated?: boolean
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      size,
      dismissible = false,
      onDismiss,
      showIcon = true,
      icon,
      animated = true,
      children,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true)
    const [isExiting, setIsExiting] = React.useState(false)

    const handleClose = React.useCallback(() => {
      setIsExiting(true)
      setTimeout(() => {
        setVisible(false)
        onDismiss?.()
      }, 300) // Match animation duration
    }, [onDismiss])

    const contextValue = React.useMemo(
      () => ({
        dismissible,
        onClose: handleClose,
      }),
      [dismissible, handleClose]
    )

    if (!visible) {
      return null
    }

    return (
      <AlertContext.Provider value={contextValue}>
        <div
          ref={ref}
          role="alert"
          aria-live={variant === 'error' || variant === 'warning' ? 'assertive' : 'polite'}
          className={cn(
            alertVariants({ variant, size }),
            animated && 'animate-in fade-in slide-in-from-top-2 duration-300',
            isExiting && 'animate-out fade-out slide-out-to-top-2 duration-300',
            dismissible && 'pr-12',
            className
          )}
          {...props}
        >
          {showIcon && (
            <AlertIcon
              variant={variant}
              className={cn(
                size === 'sm' && 'w-3.5 h-3.5 left-3 top-3',
                size === 'default' && 'w-4 h-4 left-4 top-4',
                size === 'lg' && 'w-5 h-5 left-5 top-5',
                icon ? 'hidden' : 'absolute'
              )}
            />
          )}
          {icon && (
            <span
              className={cn(
                'absolute shrink-0',
                size === 'sm' && 'w-3.5 h-3.5 left-3 top-3',
                size === 'default' && 'w-4 h-4 left-4 top-4',
                size === 'lg' && 'w-5 h-5 left-5 top-5'
              )}
            >
              {icon}
            </span>
          )}
          {children}
          {dismissible && (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={handleClose}
              className={cn(
                'absolute right-2 top-2 shrink-0 opacity-70 transition-opacity hover:opacity-100',
                'focus-visible:opacity-100',
                size === 'sm' && 'h-6 w-6',
                size === 'default' && 'h-7 w-7',
                size === 'lg' && 'h-8 w-8'
              )}
              aria-label="Close alert"
            >
              <X className={cn(size === 'sm' ? 'h-3 w-3' : 'h-3.5 w-3.5')} />
            </Button>
          )}
        </div>
      </AlertContext.Provider>
    )
  }
)
Alert.displayName = 'Alert'

// ============================================================================
// ALERT TITLE COMPONENT
// ============================================================================

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Whether to hide the title from screen readers (use when title is decorative)
   * @default false
   */
  srOnly?: boolean
}

const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, srOnly = false, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn(
        'mb-1 font-medium leading-none tracking-tight',
        srOnly && 'sr-only',
        className
      )}
      {...props}
    />
  )
)
AlertTitle.displayName = 'AlertTitle'

// ============================================================================
// ALERT DESCRIPTION COMPONENT
// ============================================================================

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm leading-relaxed [&_p]:leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

// ============================================================================
// ALERT ACTIONS COMPONENT
// ============================================================================

interface AlertActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Alignment of the action buttons
   * @default 'end'
   */
  align?: 'start' | 'center' | 'end'
}

const AlertActions = React.forwardRef<HTMLDivElement, AlertActionsProps>(
  ({ className, align = 'end', children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-2 mt-3',
        align === 'start' && 'justify-start',
        align === 'center' && 'justify-center',
        align === 'end' && 'justify-end',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
AlertActions.displayName = 'AlertActions'

// ============================================================================
// PRESET COMPONENTS
// ============================================================================

interface AlertPresetProps {
  title?: string
  description: string
  onDismiss?: () => void
  className?: string
}

/**
 * Success alert preset with checkmark icon
 */
const AlertSuccess = React.forwardRef<HTMLDivElement, AlertPresetProps>(
  ({ title, description, onDismiss, className }, ref) => (
    <Alert ref={ref} variant="success" dismissible onDismiss={onDismiss} className={className}>
      <AlertTitle>{title || 'Success'}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
)
AlertSuccess.displayName = 'AlertSuccess'

/**
 * Error alert preset with error icon
 */
const AlertError = React.forwardRef<HTMLDivElement, AlertPresetProps>(
  ({ title, description, onDismiss, className }, ref) => (
    <Alert ref={ref} variant="error" dismissible onDismiss={onDismiss} className={className}>
      <AlertTitle>{title || 'Error'}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
)
AlertError.displayName = 'AlertError'

/**
 * Warning alert preset with warning icon
 */
const AlertWarning = React.forwardRef<HTMLDivElement, AlertPresetProps>(
  ({ title, description, onDismiss, className }, ref) => (
    <Alert ref={ref} variant="warning" dismissible onDismiss={onDismiss} className={className}>
      <AlertTitle>{title || 'Warning'}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
)
AlertWarning.displayName = 'AlertWarning'

/**
 * Info alert preset with info icon
 */
const AlertInfo = React.forwardRef<HTMLDivElement, AlertPresetProps>(
  ({ title, description, onDismiss, className }, ref) => (
    <Alert ref={ref} variant="info" dismissible onDismiss={onDismiss} className={className}>
      <AlertTitle>{title || 'Info'}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
)
AlertInfo.displayName = 'AlertInfo'

/**
 * Premium alert preset with gold styling
 */
const AlertPremium = React.forwardRef<HTMLDivElement, AlertPresetProps>(
  ({ title, description, onDismiss, className }, ref) => (
    <Alert ref={ref} variant="premium" dismissible onDismiss={onDismiss} className={className}>
      <AlertTitle>{title || 'Premium'}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
)
AlertPremium.displayName = 'AlertPremium'

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertActions,
  AlertSuccess,
  AlertError,
  AlertWarning,
  AlertInfo,
  AlertPremium,
  alertVariants,
  type AlertContextValue,
}
