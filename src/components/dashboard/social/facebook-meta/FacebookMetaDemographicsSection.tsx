'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { PieChart, BarChart } from '@/components/ui/chart-library'
import { Progress } from '@/components/ui/progress'
import { Users, Globe, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  napoleonCatStats,
  ageDemographics,
  statcounterStats,
  facebookUserStatistics,
  expatDemographics,
} from '@/lib/data/social/facebook-meta-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export function FacebookMetaDemographicsSection() {
  const genderDistribution = [
    { name: 'Female', value: napoleonCatStats.womenPercent, color: CHART_COLORS.rose },
    { name: 'Male', value: napoleonCatStats.menPercent, color: CHART_COLORS.navy },
  ]

  const marketShareData = [
    { name: 'Facebook', value: statcounterStats.facebookMarketShare, color: CHART_COLORS.navy },
    { name: 'Twitter (X)', value: statcounterStats.twitterXMarketShare, color: CHART_COLORS.platinum },
    { name: 'YouTube', value: statcounterStats.youtubeMarketShare, color: CHART_COLORS.rose },
    { name: 'Instagram', value: statcounterStats.instagramMarketShare, color: CHART_COLORS.gold },
    { name: 'Pinterest', value: statcounterStats.pinterestMarketShare, color: CHART_COLORS.emerald },
    { name: 'Reddit', value: statcounterStats.redditMarketShare, color: CHART_COLORS.denim },
  ]

  const ageDemographicsData = ageDemographics.map((item) => ({
    age: item.ageGroup,
    female: item.femalePercent,
    male: item.malePercent,
  }))

  const expatDemographicsData = expatDemographics.breakdown.map((item) => ({
    nationality: item.nationality,
    percent: item.percent,
  }))

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="UAE Facebook Demographics"
        description="User demographics and audience breakdown"
      >
        <div className="space-y-6">
          {/* Gender Distribution */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-rose-500" />
                Gender Distribution (NapoleonCat Dec 2025)
              </CardTitle>
              <CardDescription>{napoleonCatStats.totalUsers.toLocaleString()} total users</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart data={genderDistribution} height={280} showLegend={true} />
            </CardContent>
          </Card>

          {/* Market Share */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-info" />
                UAE Social Media Market Share
              </CardTitle>
              <CardDescription>Platform distribution (March 2026)</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart data={marketShareData} height={280} showLegend={true} />
            </CardContent>
          </Card>

          {/* Age Demographics */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg">Age Demographics by Gender</CardTitle>
              <CardDescription>UAE Facebook user age breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ageDemographicsData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-500-200">{item.age}</span>
                      <div className="flex gap-4">
                        <span className="text-xs text-rose-400">F: {item.female}%</span>
                        <span className="text-xs text-indigo-400">M: {item.male}%</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Progress value={item.female} className="h-2 flex-1 bg-rose-500/20" />
                      <Progress value={item.male} className="h-2 flex-1 bg-indigo-500/20" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Expat Demographics */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg">Expat Population Breakdown</CardTitle>
              <CardDescription>UAE is 88% expat population</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {expatDemographicsData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="rounded-lg bg-platinum-800/50 p-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-platinum-500-200">{item.nationality}</span>
                      <Badge variant="outline" className="text-gold-700 border-gold-700/50">
                        {item.percent}%
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Statistics Comparison */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg">Facebook User Statistics Comparison</CardTitle>
              <CardDescription>Data from multiple industry sources</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={facebookUserStatistics.map((stat) => ({
                  source: stat.source.replace('Social Media Stats', '').replace('Digital ', '').replace('Reportal', 'DR').replace('NapoleonCat', 'NapCat').replace('World Population Review', 'WPR'),
                  users: parseFloat(stat.users.replace(/[^0-9.]/g, '')),
                  female: stat.femalePercent,
                  male: stat.malePercent,
                }))}
                xAxisKey="source"
                bars={[
                  { dataKey: 'users', name: 'Users (millions)', color: CHART_COLORS.indigo },
                ]}
                height={300}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}