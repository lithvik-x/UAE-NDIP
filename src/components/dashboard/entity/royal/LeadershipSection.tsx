'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { GlassPanel } from '@/components/ui/glass-panel'
import { BarChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Crown,
  Calendar,
  Trophy,
  Star,
  Scale,
} from 'lucide-react'
import type { RoyalFamilyMember } from '@/lib/data/entity/royal-family-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

interface LeadershipSectionProps {
  royalFamilyData: RoyalFamilyMember[]
  keyLeadershipAppointments: { person: string; position: string; date: string }[]
  majorInitiatives: { leader: string; initiative: string; amount: string }[]
  sourceCredibility: { sourceType: string; count: number; credibility: string }[]
  emirateOverviews: { emirate: string; dynasty: string; currentRuler: string; age: number; since: string; crownPrince: string; crownPrinceAge: number; crownPrinceSince: string; sentiment: string; keyAchievements: string[] }[]
}

export function LeadershipSection({
  royalFamilyData,
  keyLeadershipAppointments,
  majorInitiatives,
  sourceCredibility,
  emirateOverviews,
}: LeadershipSectionProps) {
  // Average relevance by emirate
  const avgRelevanceByEmirate = emirateOverviews.map(e => {
    const members = royalFamilyData.filter(m => m.emirate === e.emirate)
    const avg = members.length > 0
      ? Math.round(members.reduce((sum, m) => sum + m.uaeRelevance, 0) / members.length)
      : 0
    return {
      name: e.emirate,
      avgRelevance: avg,
      color: CHART_COLORS.gold,
    }
  })

  // Tier distribution
  const tierCounts = [0, 1, 2, 3, 4].map(tier => ({
    tier: `Tier ${tier}`,
    count: royalFamilyData.filter(m => m.tier === tier).length,
  }))

  return (
    <div className="space-y-6">
      {/* Key Appointments */}
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Key Leadership Appointments"
          description="Recent appointments across UAE federal and emirate levels (2022-2024)"
          icon={<Calendar className="h-5 w-5 text-navy-600" />}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                  <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Person</th>
                  <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Position</th>
                  <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {keyLeadershipAppointments.map((appt, i) => (
                  <tr key={i} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                    <td className="py-2 px-3 font-semibold text-navy-900 dark:text-platinum-100">{appt.person}</td>
                    <td className="py-2 px-3 text-xs text-platinum-600 dark:text-platinum-400">{appt.position}</td>
                    <td className="py-2 px-3 text-xs text-platinum-500">{appt.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Major Initiatives */}
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Major Initiatives & Projects"
          description="Key projects and programs led by royal family members"
          icon={<Trophy className="h-5 w-5 text-gold-600" />}
        >
          <div className="grid gap-3">
            {majorInitiatives.map((init, i) => (
              <div key={i} className="flex items-center justify-between py-2 px-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/20 border border-platinum-200/30 dark:border-platinum-700/30">
                <div>
                  <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">{init.leader}</p>
                  <p className="text-xs text-platinum-600 dark:text-platinum-400">{init.initiative}</p>
                </div>
                <Badge variant="outline" className="text-xs shrink-0 ml-2">{init.amount}</Badge>
              </div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Relevance Score Radar */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base font-rajdhani font-semibold">Emirate Relevance Comparison</CardTitle>
            <CardDescription className="text-xs">Average relevance score by emirate</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={avgRelevanceByEmirate}
              xAxisKey="name"
              bars={[{ dataKey: 'avgRelevance', name: 'Avg Relevance', color: CHART_COLORS.navy }]}
              height={280}
              showGrid={true}
            />
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base font-rajdhani font-semibold">Tier Distribution</CardTitle>
            <CardDescription className="text-xs">Member count by tier level (0-4)</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={tierCounts}
              xAxisKey="tier"
              bars={[{ dataKey: 'count', name: 'Members', color: CHART_COLORS.gold }]}
              height={280}
              showGrid={true}
            />
          </CardContent>
        </Card>
      </div>

      {/* Top Relevance Scores */}
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Top Relevance Scores — All Emirates"
          description="Royal members with highest UAE relevance (9-10)"
          icon={<Star className="h-5 w-5 text-gold-600" />}
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {royalFamilyData
              .filter(m => m.uaeRelevance >= 9)
              .sort((a, b) => b.uaeRelevance - a.uaeRelevance)
              .map((member) => (
                <div key={member.id} className="flex items-center gap-3 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/20 border border-platinum-200/30 dark:border-platinum-700/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-white shrink-0">
                    <Crown className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100 truncate">{member.name}</p>
                    <p className="text-xs text-platinum-500 truncate">{member.role}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-sm font-bold text-gold">{member.uaeRelevance}/10</span>
                      <div className="w-12">
                        <div className="h-1 bg-platinum-200 dark:bg-platinum-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-gold-500 to-gold-600 rounded-full"
                            style={{ width: `${member.uaeRelevance * 10}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Source Credibility */}
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Source Credibility Assessment"
          description="Reliability assessment of research sources"
          icon={<Scale className="h-5 w-5 text-navy-600" />}
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sourceCredibility.map((src, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/20 border border-platinum-200/30 dark:border-platinum-700/30">
                <div>
                  <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">{src.sourceType}</p>
                  <p className="text-xs text-platinum-500">{src.count}+ sources</p>
                </div>
                <Badge
                  variant={src.credibility === 'Very High' ? 'success' : src.credibility === 'High' ? 'default' : 'warning'}
                  className="text-xs"
                >
                  {src.credibility}
                </Badge>
              </div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>
    </div>
  )
}
