'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { BarChart, PieChart } from '@/components/ui/chart-library'
import {
  AlertTriangle,
  Shield,
  Plane,
  Building2,
  Flame,
  Users,
  Activity,
} from 'lucide-react'
import { motion } from 'framer-motion'
import type { perceptionGapData } from '@/lib/data/perception/perception-gap-data'

interface TimelineSectionProps {
  data: typeof perceptionGapData
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export function TimelineSection({ data }: TimelineSectionProps) {
  if (!data) return null

  // Casualties breakdown
  const casualtiesData = [
    { name: 'Emirati Military', value: 2, color: CHART_COLORS.navy },
    { name: 'Civilian Contractors', value: 1, color: CHART_COLORS.teal },
    { name: 'Civilian Deaths', value: 10, color: CHART_COLORS.rose },
  ]

  // Air defense statistics
  const defenseData = [
    { name: 'Ballistic Missiles', value: 537, color: CHART_COLORS.rose },
    { name: 'Drones', value: 2256, color: CHART_COLORS.orange },
    { name: 'Cruise Missiles', value: 26, color: CHART_COLORS.gold },
  ]

  // Nationalities affected
  const nationalityData = data.iranStrikes2026?.[0]?.category === 'Total killed' ? [
    { name: 'Pakistan', value: 4, color: CHART_COLORS.emerald },
    { name: 'Bangladesh', value: 2, color: CHART_COLORS.navy },
    { name: 'UAE', value: 2, color: CHART_COLORS.gold },
    { name: 'Egypt', value: 1, color: CHART_COLORS.rose },
    { name: 'India', value: 1, color: CHART_COLORS.orange },
    { name: 'Morocco', value: 1, color: CHART_COLORS.teal },
    { name: 'Nepal', value: 1, color: CHART_COLORS.purple },
    { name: 'Palestine', value: 1, color: CHART_COLORS.platinum },
  ] : []

  // Impact metrics
  const impactMetrics = [
    { label: 'Total Killed', value: '13', icon: AlertTriangle, color: 'text-rose-400' },
    { label: 'Injured', value: '224', icon: Activity, color: 'text-orange-400' },
    { label: 'Nationalities', value: '8+', icon: Users, color: 'text-cyan-400' },
    { label: 'Oil Drop', value: '500-800K bpd', icon: Flame, color: 'text-yellow-400' },
    { label: 'Economic Damage', value: '$120B+', icon: Building2, color: 'text-rose-400' },
    { label: 'EGA Recovery', value: '~1 year', icon: Shield, color: 'text-orange-400' },
  ]

  // Timeline events
  const timelineEvents = [
    { date: 'Feb 28, 2026', event: 'Iran War Begins', description: 'US-Israel war on Iran triggered' },
    { date: 'Feb 28-Apr 8', event: ' Iranian Strikes', description: '13 killed, 224 injured across multiple attacks' },
    { date: 'Mar 16, 2026', event: 'Dubai Airport Strikes', description: 'Flights suspended due to attacks' },
    { date: 'Mar 31, 2026', event: '$120B+ Damage', description: 'Collective Arab economic damage by this date' },
    { date: 'Apr 8, 2026', event: 'Ceasefire Announced', description: 'Attacks cease after 40 days' },
  ]

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      {/* 2026 Iranian Strikes Overview */}
      <GlassPanel
        title="2026 Iranian Strikes - Security/Perception Gap"
        description="Feb 28 - Apr 8, 2026: UAE vulnerability exposed"
      >
        {/* Impact Metrics */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-6">
          {impactMetrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={cardHover}
              whileHover="hover"
              className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border text-center"
            >
              <metric.icon className={`h-6 w-6 ${metric.color} mx-auto mb-2`} />
              <div className="text-xl font-bold text-platinum-100">{metric.value}</div>
              <div className="text-xs text-platinum-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Casualties Breakdown */}
          <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-rose-500" />
                Casualties Breakdown
              </CardTitle>
              <CardDescription>13 total killed</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <PieChart data={casualtiesData} height={220} showLegend={true} />
            </CardContent>
          </div>

          {/* Air Defense Statistics */}
          <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-cyan-500" />
                Air Defense Interceptions
              </CardTitle>
              <CardDescription>Total threats intercepted</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <BarChart
                data={defenseData}
                xAxisKey="name"
                bars={[{ dataKey: 'value', name: 'Interceptions', color: CHART_COLORS.rose }]}
                height={220}
                showGrid={true}
              />
            </CardContent>
          </div>
        </div>
      </GlassPanel>

      {/* Nationalities Affected */}
      <GlassPanel
        title="Civilian Casualties by Nationality"
        description="10 civilian deaths from 8 nationalities"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <PieChart data={nationalityData} height={280} showLegend={true} />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-platinum-300">Detailed Breakdown</h4>
            <ScrollArea className="h-[240px]">
              <div className="space-y-3 pr-4">
                {nationalityData.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/30 p-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-platinum-300">{item.name}</span>
                    </div>
                    <span className="text-lg font-bold text-rose-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </GlassPanel>

      {/* Infrastructure Damage */}
      <GlassPanel
        title="Infrastructure Damage"
        description="Key facilities and infrastructure impacted"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Dubai International Airport', status: 'Struck Multiple Times', icon: Plane, color: 'rose' },
            { name: 'Ruwais Refinery', status: '922K bpd Shut Down', icon: Flame, color: 'orange' },
            { name: '23 Marina Tower', status: 'Damaged', icon: Building2, color: 'gold' },
            { name: 'Burj Al Arab', status: 'Damaged', icon: Building2, color: 'gold' },
            { name: 'Jebel Ali Port', status: 'Struck', icon: Plane, color: 'orange' },
            { name: 'Emirates Global Aluminium', status: '~$1B Damage', icon: Building2, color: 'rose' },
            { name: 'Port of Fujairah', status: 'Struck', icon: Plane, color: 'orange' },
            { name: 'Habshan Gas Facilities', status: 'Struck', icon: Flame, color: 'orange' },
            { name: 'AWS/Oracle Data Centers', status: 'Hit', icon: Activity, color: 'rose' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardHover}
              whileHover="hover"
              className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <item.icon className={`h-5 w-5 text-${item.color}-400`} />
                <span className="font-medium text-platinum-100 text-sm">{item.name}</span>
              </div>
              <Badge
                variant="outline"
                className={`text-xs border-${item.color}-500/50 text-${item.color}-400`}
              >
                {item.status}
              </Badge>
            </motion.div>
          ))}
        </div>
      </GlassPanel>

      {/* Timeline */}
      <GlassPanel
        title="Crisis Timeline"
        description="Key events during the 2026 Iranian strikes"
      >
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500 via-orange-500 to-emerald-500" />
          <div className="space-y-6 pl-12">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-12 top-1 w-6 h-6 rounded-full bg-slate-800 border-2 border-rose-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                </div>
                <div className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-platinum-100">{event.event}</h4>
                    <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-400">
                      {event.date}
                    </Badge>
                  </div>
                  <p className="text-sm text-platinum-400">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GlassPanel>

      {/* Perception Gap Impact */}
      <GlassPanel
        title="Perception Impact Analysis"
        description="How the 2026 strikes shattered UAE's 'untouchable' narrative"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-platinum-300">Before vs After</h4>
            <div className="space-y-3">
              <div className="rounded-lg bg-slate-800/50 p-4 border-l-4 border-rose-500">
                <h5 className="text-xs font-semibold text-rose-400 uppercase mb-1">Before (Self-Presentation)</h5>
                <p className="text-sm text-platinum-300">
                  &quot;Secure, stable, untouchable regional hub&quot;
                </p>
              </div>
              <div className="rounded-lg bg-slate-800/50 p-4 border-l-4 border-emerald-500">
                <h5 className="text-xs font-semibold text-emerald-400 uppercase mb-1">After (Reality)</h5>
                <p className="text-sm text-platinum-300">
                  &quot;Vulnerability exposed, infrastructure damaged, perception shattered&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-platinum-300">Key Perception Shifts</h4>
            <div className="space-y-3">
              {[
                'UAE\'s image as secure/untouchable vs. vulnerability exposed',
                'Private jet costs surged to $250,000 per person during crisis',
                'Burj Al Arab, 23 Marina Tower, ports damaged',
                'Emirates Global Aluminium recovery ~1 year',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-800/30 p-3">
                  <AlertTriangle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-platinum-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
