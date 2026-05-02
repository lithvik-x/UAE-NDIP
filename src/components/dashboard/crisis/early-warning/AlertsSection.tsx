'use client'

import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { Bell } from 'lucide-react'
import { motion } from 'framer-motion'
import type { EarlyWarningData } from '@/lib/data/crisis/early-warning-data'

interface AlertsSectionProps {
  data: EarlyWarningData
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

export function AlertsSection({ data }: AlertsSectionProps) {
  // Alert severity distribution
  const severityData = [
    { name: 'Critical', value: data.priorityAlerts?.filter((a) => a.level === 'CRITICAL').length || 2, color: CHART_COLORS.rose },
    { name: 'High', value: data.priorityAlerts?.filter((a) => a.level === 'HIGH').length || 2, color: CHART_COLORS.orange },
    { name: 'Medium', value: data.priorityAlerts?.filter((a) => a.level === 'MEDIUM').length || 2, color: CHART_COLORS.gold },
    { name: 'Low', value: data.priorityAlerts?.filter((a) => a.level === 'LOW').length || 1, color: CHART_COLORS.emerald },
  ]

  const activeAlerts = (data.priorityAlerts || []).map((a) => ({
    alert: a.alert,
    level: a.level,
    timeframe: a.status === 'ONGOING_THREAT' ? 'Ongoing' : a.status === 'MONITORING' ? '24h' : '72h',
    source: 'Intelligence Network',
  }))

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Priority Alerts" description="7-tier threat prioritization from MD 4-10">
        <ScrollArea className="h-[500px]">
          <div className="space-y-3">
            {activeAlerts.map((a, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.07 }}
                className="flex items-start gap-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-600/5 p-4 border border-cyan-500/30"
              >
                <Bell
                  className={`h-5 w-5 mt-0.5 shrink-0 ${
                    a.level === 'CRITICAL' || a.level === 'HIGH'
                      ? 'text-rose-500'
                      : 'text-amber-500'
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-platinum-200">{a.alert}</h4>
                    <Badge
                      variant="outline"
                      className={`${
                        a.level === 'CRITICAL'
                          ? 'text-rose-500 border-rose-500/50'
                          : a.level === 'HIGH'
                          ? 'text-orange-500 border-orange-500/50'
                          : 'text-amber-500 border-amber-500/50'
                      }`}
                    >
                      {a.level}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-platinum-400">
                    <span>Timeframe: {a.timeframe}</span>
                    <span>Source: {a.source}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Alert Distribution Chart */}
      <div className="mt-6">
        <GlassPanel title="Alert Level Distribution" description="Critical to low severity breakdown">
          <div className="grid gap-4 md:grid-cols-4">
            {severityData.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border text-center"
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: s.color }}
                >
                  {s.value}
                </div>
                <div className="text-sm text-platinum-400">{s.name}</div>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </motion.div>
  )
}
