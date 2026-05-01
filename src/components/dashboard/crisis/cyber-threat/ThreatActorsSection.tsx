'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { BarChart } from '@/components/ui/chart-library'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Bug, Users, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
import type { CyberThreatData } from '@/lib/data/crisis/cyber-threat-data'

interface ThreatActorsSectionProps {
  data: {
    threatActors: CyberThreatData['threatActors']
    iranUaeConflict: CyberThreatData['iranUaeConflict']
  }
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

export function ThreatActorsSection({ data }: ThreatActorsSectionProps) {
  const ransomwareGroups = data.threatActors?.ransomwareGroups || []
  const hacktivistGroups = data.threatActors?.hacktivistGroups || []
  const iranianGroups = data.iranUaeConflict?.iranianGroupsTargetingUAE || []

  const handalaData = {
    alias: 'Handala, Handala Hack Team',
    attribution: 'Iran-backed Void Manticore (assessed)',
    motivation: 'Pro-Palestinian, state proxy',
    fbiBounty: '$10 million',
    activeSince: 2022,
  }

  const handalaAttackData = [
    { entity: 'Dubai Courts', destroyed: 6, stolen: 149 },
    { entity: 'Dubai Land', destroyed: 0, stolen: 0 },
    { entity: 'Dubai RTA', destroyed: 0, stolen: 0 },
  ]

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Cyber Threat Actors" description="Active ransomware groups and hacktivist collectives">
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-rose-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bug className="h-5 w-5 text-rose" />
                  Ransomware Groups
                </CardTitle>
                <CardDescription>Active in UAE region</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={ransomwareGroups.slice(0, 10).map((g, idx) => ({
                    name: g.group,
                    attacks: g.active ? 75 + Math.random() * 25 : 0,
                    color: g.group === 'Handala' ? CHART_COLORS.rose : Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
                  }))}
                  xAxisKey="name"
                  bars={[{ dataKey: 'attacks', name: 'Activity Level', color: CHART_COLORS.rose }]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple" />
                  Hacktivist Groups
                </CardTitle>
                <CardDescription>Iran-affiliated threat actors</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <div className="space-y-3">
                    {iranianGroups.map((group, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        whileHover={{ x: 4 }}
                        className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50 hover:border-rose-500/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span className="font-medium text-platinum-200">{group.group}</span>
                        </div>
                        <span className="text-xs text-platinum-500">{group.knownActivity}</span>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange" />
                Handala - Iran-Linked Threat Actor
              </CardTitle>
              <CardDescription>$10M FBI bounty | Active since 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-5">
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                  <p className="text-xs text-platinum-400">Attribution</p>
                  <p className="text-sm font-bold text-rose">Iran-backed</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                  <p className="text-xs text-platinum-400">FBI Bounty</p>
                  <p className="text-sm font-bold text-rose">$10 Million</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                  <p className="text-xs text-platinum-400">Active Since</p>
                  <p className="text-sm font-bold text-rose">2022</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                  <p className="text-xs text-platinum-400">Motivation</p>
                  <p className="text-sm font-bold text-rose">Pro-Palestinian</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-rose-500/30">
                  <p className="text-xs text-platinum-400">April 2026</p>
                  <p className="text-sm font-bold text-rose">6PB Destroyed</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-platinum-300 mb-3">April 2026 Dubai Attack Impact</p>
                <BarChart
                  data={handalaAttackData.filter(a => a.entity !== 'Dubai RTA').map((a) => ({
                    name: a.entity.split(' ')[0],
                    destroyed: a.destroyed,
                    stolen: a.stolen,
                  }))}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'destroyed', name: 'Destroyed (PB)', color: CHART_COLORS.rose },
                    { dataKey: 'stolen', name: 'Stolen (TB)', color: CHART_COLORS.orange },
                  ]}
                  height={200}
                  showGrid={true}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}