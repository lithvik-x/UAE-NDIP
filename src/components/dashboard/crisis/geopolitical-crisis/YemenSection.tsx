'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  BarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertTriangle,
  Users,
  Flame,
  Heart,
  ScrollText,
  Flag,
  Map,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  yemenConflict,
} from '@/lib/data/crisis/geopolitical-crisis-data'

interface YemenSectionProps {
  className?: string
}

export function YemenSection({ className }: YemenSectionProps) {
  const {
    casualties,
    militaryPositions,
    secretPrisons,
    casualtiesByYear,
    withdrawal,
    aidFigures,
    stc,
    socotra,
  } = yemenConflict

  return (
    <div className={className}>
      <GlassPanel
        title="Yemen Conflict Analysis"
        description="UAE military involvement, casualties, and withdrawal (2015-2026)"
      >
        <div className="space-y-6">
          {/* Yemen Key Metrics */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              <MetricCard title="Civilian Casualties" value="19,200+" icon={<Users className="h-5 w-5" />} gradient="rose" status="error" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
              <MetricCard title="Coalition Airstrikes" value="25,000+" icon={<Flame className="h-5 w-5" />} gradient="rose" status="error" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <MetricCard title="Displaced Persons" value="4.5M+" icon={<Users className="h-5 w-5" />} gradient="orange" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
              <MetricCard title="Humanitarian Aid" value="$8B" icon={<Heart className="h-5 w-5" />} gradient="emerald" />
            </motion.div>
          </div>

          {/* Casualties by Year */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Flame className="h-5 w-5 text-rose-400" />
                Yemen Civilian Casualties by Year
              </CardTitle>
              <CardDescription>Documented incidents and deaths (2015-2020)</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={casualtiesByYear}
                xAxisKey="year"
                bars={[
                  { dataKey: 'incidents', name: 'Incidents', color: CHART_COLORS.rose },
                  { dataKey: 'deaths', name: 'Deaths', color: CHART_COLORS.orange },
                ]}
                height={300}
                showGrid={true}
              />
            </CardContent>
          </Card>

          {/* Yemen Timeline */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ScrollText className="h-5 w-5 text-navy-400" />
                UAE-Yemen Relations Timeline (1971-2026)
              </CardTitle>
              <CardDescription>Key diplomatic and military events</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="relative border-l-2 border-rose-500/50 pl-6 space-y-4">
                  {yemenConflict.uaeYemenRelationsTimeline.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="relative"
                    >
                      <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-rose-500 border-2 border-platinum-900" />
                      <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3 hover:bg-platinum-800/70 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-platinum-200">{item.event}</p>
                          <Badge variant="outline" className="text-xs">{item.date}</Badge>
                        </div>
                        <p className="text-sm text-platinum-400">{item.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* STC & Socotra */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Flag className="h-5 w-5 text-orange-400" />
                  Southern Transitional Council (STC)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { label: 'Formation', value: stc.formed },
                    { label: 'Leader', value: stc.leader },
                    { label: 'Offensive', value: 'December 2025' },
                    { label: 'Dissolution', value: 'January 9, 2026' },
                    { label: 'UAE Role', value: 'Primary backer throughout conflict' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                      <span className="text-platinum-400 text-sm">{item.label}</span>
                      <span className="text-platinum-200 text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Map className="h-5 w-5 text-cyan-400" />
                  UAE Military Positions in Yemen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-2">
                    {militaryPositions.map((loc, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded bg-platinum-800/50 p-2">
                        <div className="flex items-center gap-2">
                          <Map className="h-3 w-3 text-cyan-400" />
                          <span className="text-platinum-200 text-sm">{loc.location}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">{loc.facility}</Badge>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Secret Prisons */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-rose-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                <AlertTriangle className="h-5 w-5" />
                UAE Secret Prisons in Yemen
              </CardTitle>
              <CardDescription>Documented human rights violations (AP, BBC, HRW)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: 'First Documented', value: secretPrisons.firstDocumented },
                  { label: 'Sites Documented', value: secretPrisons.sitesDocumented },
                  { label: 'Key Location', value: secretPrisons.keyLocation },
                  { label: 'UN Requested', value: 'Intervention (2020)' },
                ].map((item, idx) => (
                  <div key={idx} className="rounded bg-rose-500/10 p-3 border border-rose-500/30">
                    <p className="text-xs text-platinum-400">{item.label}</p>
                    <p className="text-lg font-bold text-rose-300">{item.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </div>
  )
}
