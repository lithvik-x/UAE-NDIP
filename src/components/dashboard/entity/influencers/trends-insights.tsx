'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  BarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import { TrendingUp, Users, Globe, Zap, AlertTriangle, Building2 } from 'lucide-react'

interface TrendsInsightsProps {
  keyTrendsInsights: { trend: string; observation: string; implication: string }[]
  uaeSocialMediaStats: { metric: string; value: string; confidence: string }[]
  influencerFollowingMetrics: { metric: string; value: string; source: string }[]
  engagementRankingsDubai: { rank: number; category: string; engagementRate: number }[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function TrendsInsights({
  keyTrendsInsights,
  uaeSocialMediaStats,
  influencerFollowingMetrics,
  engagementRankingsDubai,
}: TrendsInsightsProps) {
  const engagementChartData = engagementRankingsDubai.map(item => ({
    name: item.category,
    value: item.engagementRate,
  }))

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Key Trends */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }} className="lg:col-span-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-gold" />
              Key Trends & Insights
            </CardTitle>
            <CardDescription>Analysis of UAE influencer market dynamics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {keyTrendsInsights.map((trend, idx) => (
                <div key={idx} className="p-4 glass-subtle rounded-lg">
                  <p className="font-semibold text-navy-900 dark:text-platinum-100 mb-2">{trend.trend}</p>
                  <p className="text-xs text-platinum-500 mb-1">
                    <span className="font-medium text-cyan-600 dark:text-cyan-400">Observation: </span>
                    {trend.observation}
                  </p>
                  <p className="text-xs text-platinum-500">
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">Implication: </span>
                    {trend.implication}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* UAE Social Media Stats */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="h-5 w-5 text-cyan-500" />
              UAE Social Media Stats
            </CardTitle>
            <CardDescription>Market size and penetration data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {uaeSocialMediaStats.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                  <span className="text-sm text-platinum-700 dark:text-platinum-300">{stat.metric}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gold-700">{stat.value}</span>
                    <Badge
                      variant={stat.confidence === 'High' ? 'success' : 'secondary'}
                      className="text-xs"
                    >
                      {stat.confidence}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Influencer Following Metrics */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-indigo-500" />
              Influencer Impact Metrics
            </CardTitle>
            <CardDescription>How UAE residents engage with influencers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {influencerFollowingMetrics.map((metric, idx) => (
                <div key={idx} className="p-3 glass-subtle rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-platinum-700 dark:text-platinum-300">{metric.metric}</span>
                    <span className="text-sm font-bold text-gold-700">{metric.value}</span>
                  </div>
                  <p className="text-xs text-platinum-500 text-right">Source: {metric.source}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Engagement Rankings Chart */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }} className="lg:col-span-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-emerald-500" />
              Engagement Rate by Category (Dubai)
            </CardTitle>
            <CardDescription>Percentage engagement across content categories</CardDescription>
          </CardHeader>
          <CardContent>
            {engagementChartData.length > 0 ? (
              <BarChart
                data={engagementChartData}
                xAxisKey="name"
                bars={[{ dataKey: 'value', name: 'Engagement Rate (%)', color: CHART_COLORS.emerald }]}
                height={300}
                showGrid={true}
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500">No engagement data</div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Top Engagement Categories - Progress Bars */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Top Categories by Engagement</CardTitle>
            <CardDescription>Performance metrics by content type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {engagementRankingsDubai.slice(0, 4).map((item) => (
                <div key={item.rank} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-platinum-700 dark:text-platinum-300">
                      #{item.rank} {item.category}
                    </span>
                    <span className="text-platinum-500">{item.engagementRate}%</span>
                  </div>
                  <Progress value={item.engagementRate} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Market Structure */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Building2 className="h-5 w-5 text-purple-500" />
              Market Structure
            </CardTitle>
            <CardDescription>UAE influencer market ecosystem</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 glass-subtle rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-platinum-700 dark:text-platinum-300">Total Agencies</span>
                  <span className="text-lg font-bold text-gold-700">300+</span>
                </div>
                <p className="text-xs text-platinum-500">Influencer marketing agencies in UAE</p>
              </div>
              <div className="p-4 glass-subtle rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-platinum-700 dark:text-platinum-300">Tier 1 Fee Range</span>
                  <span className="text-lg font-bold text-emerald-600">$18K-$50K+</span>
                </div>
                <p className="text-xs text-platinum-500">Per sponsored post for mega-influencers</p>
              </div>
              <div className="p-4 glass-subtle rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-platinum-700 dark:text-platinum-300">Micro Engagement</span>
                  <span className="text-lg font-bold text-cyan-600">10-20%</span>
                </div>
                <p className="text-xs text-platinum-500">vs 1-3% for mega-influencers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
