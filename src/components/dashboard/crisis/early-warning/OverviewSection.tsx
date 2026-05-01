'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { PieChart, RadarChart, BarChart } from '@/components/ui/chart-library'
import { AlertTriangle, Activity, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import type { EarlyWarningData } from '@/lib/data/crisis/early-warning-data'

interface OverviewSectionProps {
  data: EarlyWarningData
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export function OverviewSection({ data }: OverviewSectionProps) {
  // Alert severity distribution
  const severityData = [
    { name: 'Critical', value: data.priorityAlerts?.filter((a) => a.level === 'CRITICAL').length || 2, color: CHART_COLORS.rose },
    { name: 'High', value: data.priorityAlerts?.filter((a) => a.level === 'HIGH').length || 2, color: CHART_COLORS.orange },
    { name: 'Medium', value: data.priorityAlerts?.filter((a) => a.level === 'MEDIUM').length || 2, color: CHART_COLORS.gold },
    { name: 'Low', value: data.priorityAlerts?.filter((a) => a.level === 'LOW').length || 1, color: CHART_COLORS.emerald },
  ]

  // Category radar data
  const categoryRadarData = [
    { category: 'Military/Security', value: 95 },
    { category: 'Diplomatic', value: 88 },
    { category: 'Economic', value: 92 },
    { category: 'Financial', value: 85 },
    { category: 'Social', value: 78 },
    { category: 'Humanitarian', value: 65 },
  ]

  // Source tier distribution
  const sourceTierData = [
    { name: 'Tier 0 (Gov)', value: 5, color: CHART_COLORS.teal },
    { name: 'Tier 1 (Media)', value: 7, color: CHART_COLORS.denim },
    { name: 'Tier 2 (Regional)', value: 4, color: CHART_COLORS.indigo },
    { name: 'Tier 3 (Social)', value: 4, color: CHART_COLORS.purple },
  ]

  // Top threat indicators from key findings
  const threatIndicators = data.keyFindings?.slice(0, 6).map((f, idx) => ({
    name: f.substring(0, 30) + (f.length > 30 ? '...' : ''),
    value: 100 - idx * 5,
  })) || [
    { name: 'Missile Attacks', value: 95 },
    { name: 'Stock Market Drop', value: 85 },
    { name: 'Capital Flight Risk', value: 90 },
    { name: 'Mental Health Surge', value: 72 },
    { name: 'Tourism Impact', value: 68 },
    { name: 'Food Inflation', value: 55 },
  ]

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Early Warning Overview"
        description="Threat detection and capability assessment — April 2026"
      >
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {/* Alert Severity Pie */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
          >
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-rose-500" />
                Alert Severity
              </CardTitle>
              <CardDescription>By priority level</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <PieChart data={severityData} height={220} showLegend={true} />
            </CardContent>
          </motion.div>

          {/* Category Radar */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
          >
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-cyan-500" />
                Threat Categories
              </CardTitle>
              <CardDescription>6-dimensional analysis</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <RadarChart data={categoryRadarData} metrics={[{ dataKey: 'value', name: 'Threat Level' }]} height={220} />
            </CardContent>
          </motion.div>

          {/* Source Tiers */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
          >
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-500" />
                Source Tiers
              </CardTitle>
              <CardDescription>Information source quality</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <PieChart data={sourceTierData} height={220} showLegend={true} />
            </CardContent>
          </motion.div>
        </div>

        {/* Top Indicators Bar */}
        <div className="mt-6">
          <BarChart
            data={threatIndicators}
            xAxisKey="name"
            bars={[
              { dataKey: 'value', name: 'Threat Level', color: CHART_COLORS.rose },
            ]}
            height={280}
            showGrid={true}
          />
        </div>
      </GlassPanel>
    </motion.div>
  )
}
