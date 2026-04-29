import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}

export function formatPercentage(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`
}

export function getGradientForPlatform(platform: 'clairvoyance-cx' | 'perception-x2' | 'ricochet-catalyst-x'): string {
  const gradients = {
    'clairvoyance-cx': 'bg-gradient-red',
    'perception-x2': 'bg-gradient-indigo',
    'ricochet-catalyst-x': 'bg-gradient-cyan',
  }
  return gradients[platform]
}

export function getStatusColor(status: 'success' | 'warning' | 'error' | 'info' | 'neutral'): string {
  const colors = {
    success: 'text-emerald-600 bg-emerald-50',
    warning: 'text-amber-600 bg-amber-50',
    error: 'text-red-600 bg-red-50',
    info: 'text-blue-600 bg-blue-50',
    neutral: 'text-slate-600 bg-slate-50',
  }
  return colors[status]
}

export function calculateTrend(current: number, previous: number): { value: number; direction: 'up' | 'down' | 'neutral' } {
  if (previous === 0) return { value: 0, direction: 'neutral' }
  const value = ((current - previous) / previous) * 100
  const direction = value > 0 ? 'up' : value < 0 ? 'down' : 'neutral'
  return { value, direction }
}
