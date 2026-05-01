import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  intensity?: 'low' | 'medium' | 'high' | 'premium'
  hover?: boolean
  gradient?: 'red' | 'rose' | 'orange' | 'gold' | 'lime' | 'emerald' | 'teal' | 'cyan' | 'denim' | 'indigo' | 'purple' | 'fuchsia'
}

const intensityClasses = {
  low: 'glass-subtle',
  medium: 'glass-medium',
  high: 'glass-strong',
  premium: 'glass-premium-premium',
}

export function GlassCard({ children, className, intensity = 'medium', hover = false, gradient }: GlassCardProps) {
  return (
    <Card
      className={cn(
        'relative transition-all duration-300',
        intensityClasses[intensity],
        hover && 'hover:shadow-premium-lg hover:-translate-y-0.5',
        className
      )}
    >
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  )
}

interface GlassPanelProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
  badge?: string
  action?: React.ReactNode
}

export function GlassPanel({ children, className, title, description, badge, action }: GlassPanelProps) {
  return (
    <div className={cn('glass-premium rounded-2xl p-6 border border-white/20 shadow-premium-md', className)}>
      {(title || description || badge || action) && (
        <div className="mb-4 flex items-start justify-between">
          <div className="flex-1">
            {title && <h3 className="font-rajdhani text-lg font-semibold text-platinum-500-900">{title}</h3>}
            {description && <p className="mt-1 text-sm text-platinum-500-600">{description}</p>}
            {badge && (
              <Badge variant="outline" className="mt-2 border-gold-300/50 text-gold-700">
                {badge}
              </Badge>
            )}
          </div>
          {action && <div className="ml-4">{action}</div>}
        </div>
      )}
      {children}
    </div>
  )
}

interface StatusCardProps {
  status: 'success' | 'warning' | 'error' | 'info' | 'neutral'
  title: string
  value?: string | number
  description?: string
  icon?: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}

const statusConfig = {
  success: { bg: 'bg-emerald-50/90', border: 'border-emerald-200/50', text: 'text-emerald-700', icon: 'bg-gradient-emerald text-white' },
  warning: { bg: 'bg-gold-50/90', border: 'border-gold-200/50', text: 'text-gold-700', icon: 'bg-gradient-gold text-white' },
  error: { bg: 'bg-red-50/90', border: 'border-red-200/50', text: 'text-red-700', icon: 'bg-gradient-red text-white' },
  info: { bg: 'bg-indigo-50/90', border: 'border-indigo-200/50', text: 'text-indigo-700', icon: 'bg-gradient-indigo text-white' },
  neutral: { bg: 'bg-platinum-50/90', border: 'border-platinum-200/50', text: 'text-platinum-500-700', icon: 'bg-gradient-platinum text-white' },
}

export function StatusCard({ status, title, value, description, icon, trend, className }: StatusCardProps) {
  const config = statusConfig[status]

  return (
    <div className={cn('glass-premium rounded-2xl p-6 border-2 shadow-premium-sm', config.bg, config.border, className)}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className={cn('flex h-10 w-10 items-center justify-center rounded-lg shadow-premium-sm', config.icon)}>
            {icon}
          </div>
        )}
        <div className="flex-1">
          <p className={cn('text-sm font-medium', config.text)}>{title}</p>
          {value !== undefined && <p className="mt-1 font-rajdhani text-2xl font-bold text-platinum-500-900">{value}</p>}
          {description && <p className="mt-1 text-sm text-platinum-500-600">{description}</p>}
        </div>
        {trend && (
          <Badge
            variant={trend === 'up' ? 'success' : trend === 'down' ? 'red' : 'outline'}
            className="shrink-0"
          >
            {trend === 'up' && '↑'}
            {trend === 'down' && '↓'}
            {trend === 'neutral' && '→'}
          </Badge>
        )}
      </div>
    </div>
  )
}
