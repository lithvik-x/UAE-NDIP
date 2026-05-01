'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { PieChart, BarChart } from '@/components/ui/chart-library'
import { Users, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import type { instagramIntelligenceData } from '@/lib/data/instagram-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

interface InstagramDemographicsSectionProps {
  data: typeof instagramIntelligenceData
}

export function InstagramDemographicsSection({ data }: InstagramDemographicsSectionProps) {
  const { genderDemographics, ageDemographics } = data

  const genderData = genderDemographics.map((g: { gender: string; percentage: number }) => ({
    name: g.gender,
    value: g.percentage,
    color: g.gender === 'Male' ? CHART_COLORS.navy : CHART_COLORS.rose,
  }))

  const ageGroupData = ageDemographics.map((a: { ageGroup: string; female: number; male: number }) => ({
    name: a.ageGroup,
    female: a.female,
    male: a.male,
  }))

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Demographics Analysis"
        description="UAE Instagram audience breakdown by gender and age"
      >
        <div className="space-y-6">
          {/* Gender Distribution */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-500" />
                  Gender Distribution
                </CardTitle>
                <CardDescription>UAE Instagram audience by gender (DataReportal, Feb 2025)</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={genderData}
                  height={280}
                  showLegend={true}
                />
                <div className="mt-4 space-y-2">
                  {genderDemographics.map((g: { gender: string; percentage: number; source: string }) => (
                    <div key={g.gender} className="flex items-center justify-between">
                      <span className="text-sm text-platinum-500/70">{g.gender}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">{g.percentage}%</span>
                        <Badge variant="outline" className="text-xs border-platinum/30 text-platinum-500/50">
                          {g.source}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Age Demographics */}
            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gold-700" />
                  Age Demographics
                </CardTitle>
                <CardDescription>Audience breakdown by age and gender (NapoleonCat)</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={ageGroupData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'female', name: 'Female %', color: CHART_COLORS.rose },
                    { dataKey: 'male', name: 'Male %', color: CHART_COLORS.navy },
                  ]}
                  height={280}
                  showGrid={true}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>

          {/* Age Group Details Table */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Detailed Age Breakdown</CardTitle>
              <CardDescription>NapoleonCat data (June 2025)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-platinum/10">
                      <th className="text-left py-3 px-4 text-sm font-medium text-platinum-500/60">Age Group</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-rose-400">Female %</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-navy-500-400">Male %</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-platinum-500/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ageDemographics.map((age: { ageGroup: string; female: number; male: number; notes?: string }) => (
                      <tr key={age.ageGroup} className="border-b border-platinum/5 hover:bg-white/5">
                        <td className="py-3 px-4 font-medium text-white">{age.ageGroup}</td>
                        <td className="py-3 px-4 text-right text-rose-300">{age.female}%</td>
                        <td className="py-3 px-4 text-right text-navy-500-300">{age.male}%</td>
                        <td className="py-3 px-4 text-right text-sm text-platinum-500/50">
                          {age.notes || ''}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Key Insights */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Key Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-lg bg-platinum-800/30">
                  <p className="text-sm font-medium text-white mb-2">Gender Gap Insight</p>
                  <p className="text-xs text-platinum-500-400">
                    The highest gender difference occurs within the 25-34 age group, where men lead by 2,400,000.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-platinum-800/30">
                  <p className="text-sm font-medium text-white mb-2">Core Demographic</p>
                  <p className="text-xs text-platinum-500-400">
                    25-34 age group is the largest segment with ~3.5 million users, making it the primary target audience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
