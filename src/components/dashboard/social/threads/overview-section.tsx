// Overview Section Component for Threads Intelligence
// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, AreaChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Hash, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

interface OverviewSectionProps {
  platformOverview: any
  mauGrowth: any[]
  launchRecords: any[]
  ageDistribution: any[]
  genderDistribution: any[]
  geographicDistribution: any[]
  platformOverlap: any[]
  topAccounts: any[]
  usageHabits: any[]
  platformFeatures: any[]
  hashtagStats: any[]
  privacyData: any[]
}

export function OverviewSection({
  platformOverview,
  mauGrowth,
  launchRecords,
  ageDistribution,
  genderDistribution,
  geographicDistribution,
  platformOverlap,
  topAccounts,
  usageHabits,
  platformFeatures,
  hashtagStats,
  privacyData,
}: OverviewSectionProps) {
  const genderData = [
    { name: 'Male', value: 57.85, color: CHART_COLORS.info },
    { name: 'Female', value: 42.15, color: CHART_COLORS.rose },
  ]

  const ageData = ageDistribution.map(item => ({
    name: item.ageGroup,
    value: item.percentage,
  }))

  const geographicData = geographicDistribution.slice(0, 6).map(item => ({
    country: item.country,
    percent: item.percentOfGlobal || 0,
  }))

  const mauGrowthData = mauGrowth.map(item => ({
    quarter: item.quarter,
    mau: item.mau,
    label: item.label || item.growth || '',
  }))

  const platformFeaturesByCategory = platformFeatures.reduce((acc: any, feature: any) => {
    if (!acc[feature.category]) acc[feature.category] = []
    acc[feature.category].push(feature)
    return acc
  }, {})

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel title="Threads Platform Overview" description="Global platform metrics and launch trajectory">
          <div className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Platform Fundamentals */}
              <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-lg">Platform Fundamentals</CardTitle>
                  <CardDescription>Launched July 6, 2023 by Meta</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-platinum-300">Global MAU</span>
                      <span className="text-xl font-bold text-gold-700">400M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-platinum-300">Global DAU</span>
                      <span className="text-xl font-bold text-gold-700">141.5M</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-platinum-300">Time to 100M users</span>
                      <span className="text-lg font-bold text-emerald-400">2 days (fastest)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-platinum-300">Character Limit</span>
                      <span className="text-lg font-bold text-info">500 (10K long-form)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-platinum-300">Engagement Rate</span>
                      <span className="text-lg font-bold text-rose-400">6.25% (vs X 3.6%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-platinum-300">2025 Revenue</span>
                      <span className="text-lg font-bold text-gold-700">$8B projected</span>
                    </div>
                  </div>
                </CardContent>
              </motion.div>

              {/* User Demographics */}
              <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-lg">User Demographics (Global)</CardTitle>
                  <CardDescription>Gender and age distribution</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-platinum-300">Gender Split</span>
                      </div>
                      <PieChart data={genderData} height={160} showLegend={true} />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-platinum-400 mb-2">Age Distribution</p>
                      <BarChart
                        data={ageData}
                        xAxisKey="name"
                        bars={[{ dataKey: 'value', name: 'Percentage', color: CHART_COLORS.info }]}
                        height={180}
                        showGrid={false}
                      />
                    </div>
                  </div>
                </CardContent>
              </motion.div>
            </div>

            {/* MAU Growth Trajectory */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Global Growth Trajectory</CardTitle>
                <CardDescription>Monthly Active Users (Millions) - Q3 2023 to Q3 2025</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <AreaChart
                  data={mauGrowthData}
                  xAxisKey="quarter"
                  areas={[{ dataKey: 'mau', name: 'MAU (M)', color: CHART_COLORS.info }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </motion.div>

            {/* Launch Records */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Historic Launch Records</CardTitle>
                <CardDescription>Fastest app growth in history - 100M users in 5 days</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                  {launchRecords.slice(0, 5).map((record: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-lg bg-gradient-to-br from-gold/10 to-platinum/5 p-4 border border-gold-700/20"
                    >
                      <div className="text-2xl font-bold text-gold-700">{record.timeframe}</div>
                      <div className="text-sm text-platinum-300 mt-1">{record.achievement}</div>
                      <div className="text-xs text-platinum-500 mt-1">{record.milestone}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Platform Features Overview */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Platform Features</CardTitle>
                <CardDescription>Key capabilities by category</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {Object.entries(platformFeaturesByCategory).slice(0, 4).map(([category, features]: [string, any[]]) => (
                    <div key={category} className="rounded-lg bg-platinum-800/50 p-3">
                      <div className="text-sm font-semibold text-gold-700 mb-2">{category}</div>
                      <div className="space-y-1">
                        {features.slice(0, 3).map((f: any, idx: number) => (
                          <div key={idx} className="text-xs text-platinum-300 flex items-center gap-1">
                            <CheckCircle className="h-3 w-3 text-emerald-400" />
                            {f.feature}
                          </div>
                        ))}
                        {features.length > 3 && (
                          <div className="text-xs text-platinum-500">+{features.length - 3} more</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Trending Hashtags (UAE) */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Trending Hashtags (UAE)</CardTitle>
                <CardDescription>Activity on Threads platform</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  {hashtagStats.map((tag: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <Hash className="h-5 w-5 text-gold-700" />
                        <span className="font-medium text-platinum-200">{tag.hashtag}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gold-700">{(tag.totalThreads / 1000000).toFixed(1)}M total</div>
                        <div className="text-xs text-platinum-400">{(tag.recentThreads / 1000).toFixed(0)}K recent</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Geographic Distribution */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Geographic Distribution</CardTitle>
                <CardDescription>Top countries by Threads usage</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <BarChart
                  data={geographicData}
                  xAxisKey="country"
                  bars={[{ dataKey: 'percent', name: '% of Global', color: CHART_COLORS.gold }]}
                  height={240}
                  showGrid={true}
                />
              </CardContent>
            </motion.div>

            {/* Platform Overlap */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Platform Overlap</CardTitle>
                <CardDescription>% of Threads users also using these platforms</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-2">
                  {platformOverlap.map((item: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                      <span className="text-sm text-platinum-300">{item.platform}</span>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 bg-platinum-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percentage}%` }}
                            transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                            className="h-full bg-gradient-to-r from-gold to-amber-400"
                          />
                        </div>
                        <span className="text-sm font-bold text-gold-700">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Top Followed Accounts */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Top Followed Accounts (Global)</CardTitle>
                <CardDescription>Most followed accounts on Threads</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-3">
                  {topAccounts.map((account: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          idx === 0 ? 'bg-gold-700/20 text-gold-700' :
                          idx === 1 ? 'bg-platinum/20 text-platinum-500' :
                          idx === 2 ? 'bg-rose-500/20 text-rose-400' :
                          'bg-platinum-700/50 text-platinum-400'
                        }`}>
                          {idx + 1}
                        </div>
                        <span className="font-medium text-platinum-200">{account.account}</span>
                      </div>
                      <span className="text-lg font-bold text-gold-700">{account.followers}M</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}

export default OverviewSection
