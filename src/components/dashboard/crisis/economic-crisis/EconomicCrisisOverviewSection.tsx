'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AlertTriangle, DollarSign } from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

interface EconomicCrisisOverviewSectionProps {
  majorUAEEconomicCrisesTimeline: any[]
  directUAECrises: any[]
  uaeSpecificMetrics: any[]
  financialImpactSummary: any[]
}

export function EconomicCrisisOverviewSection({
  majorUAEEconomicCrisesTimeline,
  directUAECrises,
  uaeSpecificMetrics,
  financialImpactSummary,
}: EconomicCrisisOverviewSectionProps) {
  const crisisSeverityData = [
    { name: '2009 Dubai', value: 75, color: CHART_COLORS.gold },
    { name: '2018 Abraaj', value: 45, color: CHART_COLORS.rose },
    { name: '2020 NMC', value: 95, color: CHART_COLORS.rose },
    { name: '2024 Gold', value: 50, color: CHART_COLORS.gold },
    { name: '2026 Iran', value: 98, color: CHART_COLORS.rose },
  ]

  const financialImpactChartData = financialImpactSummary?.map((item, idx) => ({
    name: item.category.replace('$', '').split(' ')[0],
    value: parseFloat(item.amount.replace(/[^0-9.]/g, '')),
    fullAmount: item.amount,
    color: Object.values(CHART_COLORS)[idx % Object.keys(CHART_COLORS).length] as string
  })) || []

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Crisis Frequency & Severity" description="Major economic crises affecting UAE">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
            <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-amber-500" />Crisis Severity Index</CardTitle></CardHeader>
            <BarChart data={crisisSeverityData} bars={[{ dataKey: 'value', name: 'Severity', color: CHART_COLORS.rose }]} height={280} showLegend={false} />
          </motion.div>
          <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
            <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><DollarSign className="h-5 w-5 text-orange-500" />Financial Impact Summary</CardTitle></CardHeader>
            <PieChart data={financialImpactChartData} height={280} showLegend={true} />
          </motion.div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

interface KeyCrisesSectionProps {
  majorUAEEconomicCrisesTimeline: any[]
}

export function KeyCrisesSection({ majorUAEEconomicCrisesTimeline }: KeyCrisesSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Key Economic Crises" description="Major economic crises in UAE history">
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {majorUAEEconomicCrisesTimeline?.map((crisis: any, idx: number) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                className="rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-600/5 p-4 border border-amber-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl text-platinum-500-100 font-rajdhani">{crisis.year} - {crisis.crisis}</span>
                  <Badge variant="outline" className={`border-${crisis.severity === 'Extreme' ? 'rose' : crisis.severity === 'High' ? 'amber' : 'gold'}-500/50 text-${crisis.severity === 'Extreme' ? 'rose' : crisis.severity === 'High' ? 'amber' : 'gold'}`}>{crisis.severity}</Badge>
                </div>
                <div className="text-sm text-platinum-500-400 mb-1"><strong>Key Metric:</strong> {crisis.keyMetric}</div>
                <div className="text-sm text-platinum-500-400"><strong>Resolution:</strong> {crisis.resolution}</div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>
    </motion.div>
  )
}

interface UAERelevanceSectionProps {
  directUAECrises: any[]
  uaeSpecificMetrics: any[]
}

export function UAERelevanceSection({ directUAECrises, uaeSpecificMetrics }: UAERelevanceSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="UAE Relevance Assessment" description="Direct vs regional economic crises">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-3">Direct UAE Crises (Primary)</h4>
            <div className="space-y-2">
              {directUAECrises?.map((item: any, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <span className="text-amber-500 font-bold">{item.number}.</span>
                  <span className="text-platinum-500-200">{item.crisis}</span>
                  <span className="text-platinum-500-500">- {item.description}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-platinum-500-400 mb-3">UAE Specific Metrics</h4>
            <div className="space-y-2">
              {uaeSpecificMetrics?.slice(0, 6).map((metric: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-500-400">{metric.metric}</span>
                  <span className="text-orange-400 font-semibold">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

export default EconomicCrisisOverviewSection