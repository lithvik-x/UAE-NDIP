'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Target } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

interface TimelineEvent {
  date: string
  event: string
  impact: string
}

interface TimelineSectionProps {
  timeline: TimelineEvent[]
  uaePositioning: string
}

export function TimelineSection({ timeline, uaePositioning }: TimelineSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Key 2026 Developments" description="Major events timeline">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-gold-500 to-rose-500" />

          <div className="space-y-6 pl-12">
            {timeline.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-12 top-1 h-6 w-6 rounded-full flex items-center justify-center ${
                  event.impact === 'Diplomatic leadership' ? 'bg-emerald-500' :
                  event.impact === 'Humanitarian logistics disruption' ? 'bg-rose-500' :
                  event.impact === 'Quick recovery' ? 'bg-emerald-500' :
                  event.impact === 'Regional security leadership' ? 'bg-gold-500' :
                  event.impact === 'Continued operations' ? 'bg-cyan-500' :
                  event.impact === 'Islamic world solidarity' ? 'bg-emerald-500' :
                  'bg-denim-500'
                }`}>
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                <Card className="glass-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="text-xs text-platinum-500 font-medium">{event.date}</p>
                        <p className="text-sm font-medium text-navy-900 dark:text-platinum-100">{event.event}</p>
                      </div>
                      <Badge
                        variant={
                          event.impact === 'Diplomatic leadership' ? 'success' :
                          event.impact === 'Humanitarian logistics disruption' ? 'destructive' :
                          event.impact === 'Quick recovery' ? 'success' :
                          event.impact === 'Regional security leadership' ? 'warning' :
                          event.impact === 'Islamic world solidarity' ? 'success' :
                          'info'
                        }
                        size="sm"
                      >
                        {event.impact}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* UAE Positioning */}
        <Card className="glass-card mt-6 bg-gradient-to-r from-denim-50/50 to-transparent dark:from-denim-900/10">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-gradient-to-br from-denim-100 to-denim-200 dark:from-denim-900/30 dark:to-denim-800/30">
                <Target className="h-6 w-6 text-denim-600 dark:text-denim-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-denim-700 dark:text-denim-300">UAE Positioning</p>
                <p className="text-lg font-bold text-navy-900 dark:text-platinum-100">
                  {uaePositioning}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </GlassPanel>
    </motion.div>
  )
}

export default TimelineSection