'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * LITHVIK NEXUS - Premium Avatar Component
 * World-class avatar system with status indicators, groups, and glassmorphism
 */

// ============================================================================
// TYPES AND UTILITIES
// ============================================================================

export type AvatarSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'default'
  | 'lg'
  | 'xl'
  | '2xl'

export type AvatarShape = 'circle' | 'rounded' | 'square'

export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away' | 'dnd'

export type AvatarVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'premium'

/**
 * Get initials from a name
 */
export function getInitials(name: string, fallback = '?'): string {
  if (!name) return fallback

  const parts = name.trim().split(/\s+/)
  if (parts.length === 0) return fallback
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase()
  }

  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

/**
 * Generate a consistent color from a string
 */
export function stringToColor(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  const colors = [
    'bg-red-500',
    'bg-rose-500',
    'bg-orange-500',
    'bg-amber-500',
    'bg-gold-500',
    'bg-lime-500',
    'bg-emerald-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-denim-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-fuchsia-500',
  ]

  return colors[Math.abs(hash) % colors.length]
}

// ============================================================================
// SIZE MAPPING
// ============================================================================

const avatarSizeClasses: Record<AvatarSize, string> = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-sm',
  default: 'h-12 w-12 text-base',
  lg: 'h-14 w-14 text-lg',
  xl: 'h-16 w-16 text-xl',
  '2xl': 'h-20 w-20 text-2xl',
}

const statusSizeClasses: Record<AvatarSize, string> = {
  xs: 'h-1.5 w-1.5',
  sm: 'h-2 w-2',
  md: 'h-2.5 w-2.5',
  default: 'h-3 w-3',
  lg: 'h-3.5 w-3.5',
  xl: 'h-4 w-4',
  '2xl': 'h-5 w-5',
}

const statusPositionClasses: Record<AvatarSize, string> = {
  xs: '-bottom-0 -right-0',
  sm: '-bottom-0.5 -right-0.5',
  md: '-bottom-0.5 -right-0.5',
  default: '-bottom-1 -right-1',
  lg: '-bottom-1 -right-1',
  xl: '-bottom-1.5 -right-1.5',
  '2xl': '-bottom-2 -right-2',
}

// ============================================================================
// ROOT VARIANTS
// ============================================================================

const avatarRootVariants = cva(
  'relative flex shrink-0 overflow-hidden transition-all duration-200',
  {
    variants: {
      shape: {
        circle: 'rounded-full',
        rounded: 'rounded-2xl',
        square: 'rounded-xl',
      },
      variant: {
        default: '',
        primary: 'ring-2 ring-primary/20',
        success: 'ring-2 ring-emerald-500/20',
        warning: 'ring-2 ring-amber-500/20',
        error: 'ring-2 ring-red-500/20',
        premium: 'ring-2 ring-gold-500/30 shadow-premium-sm',
      },
      size: {
        xs: 'h-6 w-6',
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        default: 'h-12 w-12',
        lg: 'h-14 w-14',
        xl: 'h-16 w-16',
        '2xl': 'h-20 w-20',
      },
    },
    defaultVariants: {
      shape: 'circle',
      variant: 'default',
      size: 'default',
    },
  }
)

// ============================================================================
// ROOT COMPONENT
// ============================================================================

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarRootVariants> {
  /**
   * Name for generating initials and color
   */
  name?: string

  /**
   * Custom fallback text
   * @default "?"
   */
  fallback?: string

  /**
   * Whether to auto-generate initials from name
   * @default true
   */
  autoInitials?: boolean

  /**
   * Whether to auto-color based on name
   * @default false
   */
  autoColor?: boolean

  /**
   * Status indicator
   */
  status?: AvatarStatus

  /**
   * Show loading skeleton
   */
  isLoading?: boolean
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, name, fallback = '?', autoInitials = true, autoColor = false, status, isLoading, shape, variant, size, ...props }, ref) => {
  const initials = React.useMemo(() => {
    if (autoInitials && name) {
      return getInitials(name, fallback)
    }
    return fallback
  }, [name, fallback, autoInitials])

  const colorClass = React.useMemo(() => {
    if (autoColor && name) {
      return stringToColor(name)
    }
    return ''
  }, [name, autoColor])

  if (isLoading) {
    return (
      <div
        className={cn(
          avatarRootVariants({ shape, size }),
          'bg-muted animate-pulse',
          className
        )}
        ref={ref as React.Ref<HTMLDivElement>}
      />
    )
  }

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarRootVariants({ shape, variant, size }), className)}
      {...props}
    >
      {props.children}
      <AvatarFallback className={colorClass}>
        {initials}
      </AvatarFallback>
      {status && <AvatarStatusIndicator status={status} size={size || 'default'} />}
    </AvatarPrimitive.Root>
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

// ============================================================================
// IMAGE COMPONENT
// ============================================================================

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

// ============================================================================
// FALLBACK COMPONENT
// ============================================================================

const avatarFallbackVariants = cva(
  'flex h-full w-full items-center justify-center font-medium text-muted-foreground',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-sm',
        default: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
      },
      variant: {
        default: 'bg-muted',
        primary: 'bg-primary text-primary-foreground',
        success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
        warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
        error: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
        premium: 'bg-gradient-to-br from-gold-100 to-gold-200 text-gold-800 dark:from-gold-900/30 dark:to-gold-800/30 dark:text-gold-200',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  }
)

export interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
    VariantProps<typeof avatarFallbackVariants> {}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, size, variant, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(avatarFallbackVariants({ size, variant }), className)}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

// ============================================================================
// STATUS INDICATOR COMPONENT
// ============================================================================

const statusColorClasses: Record<AvatarStatus, string> = {
  online: 'bg-emerald-500 border-2 border-background',
  offline: 'bg-platinum-400 border-2 border-background',
  busy: 'bg-red-500 border-2 border-background',
  away: 'bg-amber-500 border-2 border-background',
  dnd: 'bg-red-700 border-2 border-background',
}

interface AvatarStatusIndicatorProps {
  status: AvatarStatus
  size: AvatarSize
}

const AvatarStatusIndicator = ({ status, size }: AvatarStatusIndicatorProps) => {
  return (
    <span
      className={cn(
        'absolute rounded-full',
        statusSizeClasses[size],
        statusPositionClasses[size],
        statusColorClasses[status]
      )}
      aria-label={`Status: ${status}`}
    />
  )
}

// ============================================================================
// AVATAR GROUP COMPONENT
// ============================================================================

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum avatars to show before showing "+N" counter
   * @default 4
   */
  max?: number

  /**
   * Size of avatars in the group
   */
  size?: AvatarSize

  /**
   * Shape of avatars in the group
   */
  shape?: AvatarShape

  /**
   * Spacing between avatars
   * @default "md"
   */
  spacing?: 'sm' | 'md' | 'lg'

  /**
   * Avatar components to display
   */
  children: React.ReactNode
}

const avatarGroupSpacingClasses: Record<NonNullable<AvatarGroupProps['spacing']>, string> = {
  sm: '-space-x-2',
  md: '-space-x-3',
  lg: '-space-x-4',
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max = 4, size = 'default', shape = 'circle', spacing = 'md', className, children, ...props }, ref) => {
    const avatars = React.Children.toArray(children).filter(Boolean)
    const visibleAvatars = avatars.slice(0, max)
    const remainingCount = Math.max(0, avatars.length - max)

    return (
      <div
        ref={ref}
        className={cn('flex items-center', avatarGroupSpacingClasses[spacing], className)}
        {...props}
      >
        {avatars.slice(0, max)}
        {remainingCount > 0 && (
          <Avatar
            size={size}
            shape={shape}
            className="bg-muted flex items-center justify-center font-medium text-xs"
          >
            <AvatarFallback>+{remainingCount}</AvatarFallback>
          </Avatar>
        )}
      </div>
    )
  }
)
AvatarGroup.displayName = 'AvatarGroup'

// ============================================================================
// PRESET AVATARS
// ============================================================================

/**
 * User avatar with preset styling
 */
const AvatarUser = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  Omit<AvatarProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Avatar ref={ref} variant="primary" className={className} {...props} />
))
AvatarUser.displayName = 'AvatarUser'

/**
 * System/bot avatar
 */
const AvatarBot = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  Omit<AvatarProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Avatar ref={ref} variant="default" className={className} {...props}>
    <AvatarFallback variant="warning" size={props.size}>
      🤖
    </AvatarFallback>
  </Avatar>
))
AvatarBot.displayName = 'AvatarBot'

/**
 * Premium/VIP avatar
 */
const AvatarVIP = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  Omit<AvatarProps, 'variant'>
>(({ className, ...props }, ref) => (
  <Avatar ref={ref} variant="premium" className={cn('shadow-premium-sm', className)} {...props} />
))
AvatarVIP.displayName = 'AvatarVIP'

// ============================================================================
// EXPORTS
// ============================================================================

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarUser,
  AvatarBot,
  AvatarVIP,
  avatarRootVariants,
  avatarFallbackVariants,
}
