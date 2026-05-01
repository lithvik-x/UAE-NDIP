'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { AlertTriangle, AlertCircle, TrendingDown, Info } from 'lucide-react'
import { uaeRelevanceAssessment } from '@/lib/data-loader/sentiment-data'

interface UAERelevanceSectionProps {
  className?: string
}

const severityConfig = {
  CRITICAL: { color: 'bg-rose-500/20 text-rose-400 border-rose-500/50', icon: AlertTriangle, gradient: 'from-rose-800/50 to-rose-900/50' },
  HIGH: { color: 'bg-amber-500/20 text-amber-400 border-amber-500/50', icon: AlertCircle, gradient: 'from-amber-800/50 to-amber-900/50' },
  MEDIUM: { color: 'bg-amber-500/20 text-amber-400 border-amber-500/50', icon: TrendingDown, gradient: 'from-yellow-800/50 to-yellow-900/50' },
  LOW: { color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50', icon: Info, gradient: 'from-emerald-800/50 to-emerald-900/50' },
}

export function UAERelevanceSection({ className }: UAERelevanceSectionProps) {
  const criticalCount = uaeRelevanceAssessment.filter(r => r.uaeRelevance === 'CRITICAL').length
  const highCount = uaeRelevanceAssessment.filter(r => r.uaeRelevance === 'HIGH').length
  const mediumCount = uaeRelevanceAssessment.filter(r => r.uaeRelevance === 'MEDIUM').length
  const lowCount = uaeRelevanceAssessment.filter(r => r.uaeRelevance === 'LOW').length

  return (
    <div className={className}>
      {/* Summary Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card border border-rose-500/50 p-4 text-center"
        >
          <AlertTriangle className="h-6 w-6 mx-auto mb-2 text-rose-400" />
          <p className="text-2xl font-bold text-rose-400 font-rajdhani">
            {criticalCount}
          </p>
          <p className="text-xs text-platinum-500">Critical</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card border border-amber-500/50 p-4 text-center"
        >
          <AlertCircle className="h-6 w-6 mx-auto mb-2 text-amber-400" />
          <p className="text-2xl font-bold text-amber-400 font-rajdhani">
            {highCount}
          </p>
          <p className="text-xs text-platinum-500">High</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card border border-amber-500/50 p-4 text-center"
        >
          <TrendingDown className="h-6 w-6 mx-auto mb-2 text-amber-400" />
          <p className="text-2xl font-bold text-amber-400 font-rajdhani">
            {mediumCount}
          </p>
          <p className="text-xs text-platinum-500">Medium</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card border border-emerald-500/50 p-4 text-center"
        >
          <Info className="h-6 w-6 mx-auto mb-2 text-emerald-400" />
          <p className="text-2xl font-bold text-emerald-400 font-rajdhani">
            {lowCount}
          </p>
          <p className="text-xs text-platinum-500">Low</p>
        </motion.div>
      </div>

      {/* Relevance Assessment */}
      <GlassPanel
        title="UAE Relevance Assessment"
        description="16 categories ranked by relevance and severity"
      >
        <div className="space-y-3">
          {uaeRelevanceAssessment.map((item, idx) => {
            const config = severityConfig[item.uaeRelevance]
            const Icon = config.icon
            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`glass-card border ${config.color.split(' ').pop()} p-4`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    <h4 className="font-semibold text-platinum-200 font-rajdhani">
                      {item.category}
                    </h4>
                  </div>
                  <Badge className={config.color}>
                    {item.uaeRelevance}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-platinum-500">Severity Score</span>
                  <span className="text-sm font-mono text-platinum-300">
                    {item.severityScore}/10
                  </span>
                </div>
                <Progress value={(item.severityScore / 10) * 100} className="h-1 mt-1" />
              </motion.div>
            )
          })}
        </div>
      </GlassPanel>
    </div>
  )
}
