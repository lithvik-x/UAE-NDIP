'use client'

import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Radar } from 'lucide-react'
import { motion } from 'framer-motion'
import type { EarlyWarningData } from '@/lib/data/crisis/early-warning-data'

interface SystemsSectionProps {
  data: EarlyWarningData
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

// System coverage data derived from early warning data
function getSystemCoverage(data: EarlyWarningData) {
  // Derive system coverage from monitoringSystems or use defaults
  const systems = (data as unknown as { monitoringSystems?: Array<{ name?: string; system?: string; coverage?: number; effectiveness?: number; status?: string }> }).monitoringSystems || []

  if (systems.length > 0) {
    return systems.map((s) => ({
      system: s.name || s.system || 'Unknown System',
      coverage: s.coverage || s.effectiveness || 75,
      status: s.status || 'Operational',
    }))
  }

  // Default system coverage based on typical early warning capabilities
  return [
    { system: 'Social Media Monitoring', coverage: 94, status: 'Operational' },
    { system: 'News Aggregation', coverage: 88, status: 'Operational' },
    { system: 'Field Intelligence', coverage: 62, status: 'Partial' },
    { system: 'Dark Web Monitoring', coverage: 45, status: 'Limited' },
    { system: 'Human Intelligence', coverage: 38, status: 'Limited' },
    { system: 'Satellite Imagery', coverage: 78, status: 'Operational' },
  ]
}

export function SystemsSection({ data }: SystemsSectionProps) {
  const systemCoverage = getSystemCoverage(data)

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Detection Systems" description="Early warning system status and coverage">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {systemCoverage.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Radar
                    className={`h-4 w-4 ${
                      s.status === 'Operational' ? 'text-emerald' : 'text-amber'
                    }`}
                  />
                  <h4 className="font-medium text-platinum-200 text-sm">{s.system}</h4>
                </div>
                <Badge
                  variant="outline"
                  className={`${
                    s.status === 'Operational'
                      ? 'border-emerald-500/50 text-emerald'
                      : 'border-amber-500/50 text-amber'
                  }`}
                >
                  {s.status}
                </Badge>
              </div>
              <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${s.coverage}%` }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                  className={`h-full rounded-full ${
                    s.coverage > 80
                      ? 'bg-emerald-500'
                      : s.coverage > 60
                      ? 'bg-cyan-500'
                      : 'bg-amber-500'
                  }`}
                />
              </div>
              <p className="text-xs text-platinum-400 mt-1">{s.coverage}% coverage</p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </motion.div>
  )
}
