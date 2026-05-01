'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import {
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import type { TierFramework, EngagementCategory, InfluencerProfile } from '@/lib/data/entity/influencers-data'

interface TierAnalysisProps {
  tierFramework: TierFramework[]
  tierData: { tier: string; count: number }[]
  engagementByCategory: EngagementCategory[]
  sentimentData: { name: string; value: number; color: string }[]
  nationalityData: { name: string; value: number; color: string }[]
  allInfluencers: InfluencerProfile[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function TierAnalysis({
  tierFramework,
  tierData,
  engagementByCategory,
  sentimentData,
  nationalityData,
  allInfluencers,
}: TierAnalysisProps) {
  const emiratiCount = allInfluencers.filter(i => i.nationality === 'Emirati').length
  const expatCount = allInfluencers.filter(i => i.nationality !== 'Emirati' && i.nationality !== 'Not specified').length

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Tier Classification Framework */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Tier Classification Framework</CardTitle>
            <CardDescription>Standard definitions for influencer tiers</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50">
                  <TableHead className="text-platinum-500-700 font-semibold">Tier</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">Followers</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">Engagement</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">Value/Post</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tierFramework.map((t) => (
                  <TableRow key={t.tier} className="border-b border-platinum-100/50">
                    <TableCell><span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{t.tier}</span></TableCell>
                    <TableCell><span className="text-sm text-platinum-500-700">{t.followerRange}</span></TableCell>
                    <TableCell><span className="text-sm text-platinum-500-700">{t.typicalEngagementRate}</span></TableCell>
                    <TableCell><span className="text-sm text-emerald-600 dark:text-emerald-400">{t.commercialValue}</span></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tier Distribution */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Tier Distribution</CardTitle>
            <CardDescription>Number of influencers per tier level</CardDescription>
          </CardHeader>
          <CardContent>
            {tierData.length > 0 ? (
              <BarChart
                data={tierData}
                xAxisKey="tier"
                bars={[{ dataKey: 'count', name: 'Influencers', color: CHART_COLORS.gold }]}
                height={280}
                showGrid={true}
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500-500">No tier data available</div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Engagement by Category */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Engagement Rate by Category (Dubai)</CardTitle>
            <CardDescription>Percentage engagement by content category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {engagementByCategory.map((cat) => (
                <div key={cat.category} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-platinum-500-700 dark:text-platinum-500-300">{cat.category}</span>
                    <span className="text-platinum-500-500">{cat.engagementRate}%</span>
                  </div>
                  <Progress value={cat.engagementRate} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sentiment Distribution */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
            <CardDescription>Overall sentiment across tracked influencers</CardDescription>
          </CardHeader>
          <CardContent>
            {sentimentData.length > 0 ? (
              <PieChart
                data={sentimentData}
                height={260}
                showLegend={true}
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500-500">No sentiment data</div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Emirati vs Expat Breakdown */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Emirati vs. Expat Influencers</CardTitle>
            <CardDescription>Nationality breakdown of tracked influencers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-platinum-500-700 dark:text-platinum-500-300">Emirati</span>
                <span className="text-sm font-bold text-gold-700">{emiratiCount}</span>
              </div>
              <Progress value={(emiratiCount / allInfluencers.length) * 100} className="h-3" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-platinum-500-700 dark:text-platinum-500-300">Expat (specified)</span>
                <span className="text-sm font-bold text-indigo-600">{expatCount}</span>
              </div>
              <Progress value={(expatCount / allInfluencers.length) * 100} className="h-3" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-platinum-500-700 dark:text-platinum-500-300">Not specified</span>
                <span className="text-sm font-bold text-platinum-500-500">{allInfluencers.length - emiratiCount - expatCount}</span>
              </div>
              <Progress value={((allInfluencers.length - emiratiCount - expatCount) / allInfluencers.length) * 100} className="h-3" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Nationality Breakdown */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Nationality Breakdown</CardTitle>
            <CardDescription>Top nationalities in UAE influencer landscape</CardDescription>
          </CardHeader>
          <CardContent>
            {nationalityData.length > 0 ? (
              <PieChart
                data={nationalityData}
                height={260}
                showLegend={true}
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500-500">No nationality data</div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
