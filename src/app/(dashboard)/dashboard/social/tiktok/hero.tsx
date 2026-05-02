/**
 * TikTok Hero Section Component
 */

'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Video, Zap, ExternalLink, Users, AlertOctagon, DollarSign, UserX, Bot, type LucideIcon } from 'lucide-react'

interface HeroProps {
  stats: Array<{
    value: string
    label: string
    icon: string
    color: string
  }>
  executionMetadata: {
    dateExecuted: string
    queriesExecuted: number
    pagesFetched: number
    enrichmentStatus: string
  }
}

const iconMap: Record<string, LucideIcon> = {
  Users,
  AlertOctagon,
  DollarSign,
  UserX,
  Bot,
  Video,
  Zap,
}

export function HeroSection({ stats, executionMetadata }: HeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start justify-between"
    >
      <div>
        <Badge variant="default" className="mb-2 bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30">
          <Video className="h-3 w-3 mr-1" />
          PLATFORM INTELLIGENCE
        </Badge>
        <h1 className="text-4xl font-bold font-rajdhani gradient-text-platinum-500">TikTok UAE Intelligence</h1>
        <p className="mt-2 text-platinum-400">
          {executionMetadata.queriesExecuted} queries executed, {executionMetadata.pagesFetched} pages fetched
        </p>
        <p className="text-sm text-platinum-500 mt-1">
          Last updated: {executionMetadata.dateExecuted}
        </p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" className="gap-2 border-platinum/50 text-platinum-500 hover:bg-platinum/10">
          <ExternalLink className="h-4 w-4" />
          View Content
        </Button>
        <Button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:opacity-90 text-white gap-2">
          <Zap className="h-4 w-4" />
          Analyze Trends
        </Button>
      </div>
    </motion.div>
  )
}

export function HeroMetrics({ stats }: { stats: HeroProps['stats'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6"
    >
      {stats.map((stat, idx) => {
        const IconComponent = iconMap[stat.icon] || Users
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * idx }}
            className="glass-panel border-glass p-4 rounded-lg hover:scale-105 transition-transform duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <IconComponent className="h-6 w-6 mb-2" color={stat.color} />
              <span className="text-2xl font-bold text-platinum-200">{stat.value}</span>
              <span className="text-sm text-platinum-400 mt-1">{stat.label}</span>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
