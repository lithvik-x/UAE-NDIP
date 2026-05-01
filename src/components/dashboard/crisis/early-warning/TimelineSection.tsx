'use client'

import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { motion } from 'framer-motion'
import type { EarlyWarningData } from '@/lib/data/crisis/early-warning-data'

interface TimelineSectionProps {
  data: EarlyWarningData
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

export function TimelineSection({ data }: TimelineSectionProps) {
  const timelineData = data.timeline?.slice(0, 13) || [
    { date: '2026-04-27', event: 'Monitoring ongoing', description: 'Continuous early warning surveillance' },
    { date: '2026-04-20', event: 'Terror cell dismantled', description: '27 Iran-linked suspects arrested' },
    { date: '2026-04-15', event: 'De-escalation talks', description: 'First UAE-Iran contact since March' },
    { date: '2026-03-16', event: 'Fujairah oil fire', description: 'Major fire from direct drone strike' },
    { date: '2026-03-15', event: 'Nationwide alert', description: 'Ground stops at Dubai/Abu Dhabi airports' },
    { date: '2026-03-10', event: 'Alert system changed', description: 'NCEMA dual-tone approach' },
    { date: '2026-03-06', event: 'Dubai shelter alert', description: 'Missile threat warning' },
    { date: '2026-03-03', event: 'US travel advisory', description: 'Level 3 Reconsider Travel' },
    { date: '2026-02-15', event: 'Escalation begins', description: 'Iran war enters new phase' },
    { date: '2026-01-15', event: 'Regional tensions rise', description: 'Gulf shipping concerns' },
    { date: '2025-12-15', event: 'Pre-conflict indicators', description: 'Early warning signals detected' },
  ]

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Event Timeline" description="Key events from December 2025 - April 2026">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-platinum-700" />
          <div className="space-y-6 pl-12">
            {timelineData.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute left-[-32px] w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <div className="glass-card rounded-lg p-4 bg-glass-surface/30 border-glass-border">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-400">
                      {t.date}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-platinum-200 mb-1">{t.event}</h4>
                  <p className="text-sm text-platinum-400">{t.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
