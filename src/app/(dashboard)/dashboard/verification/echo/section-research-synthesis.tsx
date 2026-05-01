'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  consensusMatrix,
  methodQuality,
  researchGaps,
  quantitativeMetrics,
  qualitativeFindings,
} from '@/lib/data-loader/echo-chamber-data'
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Lightbulb,
  Target,
  BookOpen,
} from 'lucide-react'

export function SectionResearchSynthesis() {
  return (
    <div className="space-y-6">
      {/* Consensus Matrix */}
      <GlassPanel
        title="Consensus Matrix"
        description="Research consensus levels across key findings"
        badge="H.1"
      >
        <ScrollArea className="h-[350px]">
          <div className="space-y-3">
            {consensusMatrix.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-platinum-200">{item.finding}</p>
                  <Badge className={
                    item.consensusLevel === 'HIGH' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                    item.consensusLevel.includes('MODERATE') ? 'bg-amber-500/20 text-amber-400 border-amber-500/50' :
                    'bg-rose-500/20 text-rose-400 border-rose-500/50'
                  }>
                    {item.consensusLevel}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="text-platinum-500">Supporting: {item.supportingSources}</span>
                  {item.challengingSources && (
                    <span className="text-platinum-500">Challenging: {item.challengingSources}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Methodological Quality Assessment */}
      <GlassPanel
        title="Methodological Quality Assessment"
        description="Research methods ranked by quality score"
        badge="H.2"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {methodQuality.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-indigo-400" />
                  <h4 className="font-semibold text-platinum-200">{method.method}</h4>
                </div>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                  {method.qualityScore}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-xs text-platinum-400 mb-1">
                <span>Studies: {method.studies}</span>
              </div>
              <p className="text-xs text-platinum-500">Limitation: {method.keyLimitation}</p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>

      {/* Key Research Gaps */}
      <GlassPanel
        title="Key Research Gaps"
        description="Areas requiring further investigation"
        badge="H.3"
      >
        <div className="space-y-3">
          {researchGaps.map((gap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="flex items-start gap-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-4"
            >
              <Lightbulb className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-sm text-platinum-300">{gap}</p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>

      {/* Quantitative Metrics Registry */}
      <GlassPanel
        title="Quantitative Metrics Registry"
        description="All extracted numeric data points (ID: Q001-Q041)"
        badge="G.1"
      >
        <ScrollArea className="h-[400px]">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {quantitativeMetrics.map((metric, idx) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.01 }}
                className="rounded border border-platinum-700/50 bg-platinum-800/30 p-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-platinum-500">{metric.id}</span>
                  <span className="text-xs text-platinum-500">{metric.year}</span>
                </div>
                <p className="text-xs text-platinum-300 mb-1 truncate">{metric.metric}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-400">{metric.value}</span>
                  <span className="text-xs text-platinum-500">{metric.unit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Qualitative Findings Registry */}
      <GlassPanel
        title="Qualitative Findings Registry"
        description="Key qualitative insights from research (ID: F001-F014)"
        badge="G.2"
      >
        <ScrollArea className="h-[350px]">
          <div className="space-y-3">
            {qualitativeFindings.map((finding, idx) => (
              <motion.div
                key={finding.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.03 }}
                className="flex items-start gap-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-indigo-400">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-platinum-200 mb-1">{finding.finding}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">{finding.category}</Badge>
                    <Badge variant="outline" className="text-xs">{finding.source}</Badge>
                    <Badge className={
                      finding.consensus === 'High' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 text-xs' :
                      'bg-amber-500/20 text-amber-400 border-amber-500/50 text-xs'
                    }>
                      Consensus: {finding.consensus}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>
    </div>
  )
}
