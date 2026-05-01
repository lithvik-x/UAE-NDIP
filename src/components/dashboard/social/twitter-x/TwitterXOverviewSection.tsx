'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { AreaChart, BarChart, PieChart } from '@/components/ui/chart-library'
import { Globe, TrendingUp, Hash, Activity, BarChart3, Users, Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import type { twitterXData } from '@/lib/data/social/twitter-x-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

interface TwitterXOverviewSectionProps {
  data: typeof twitterXData
}

export function TwitterXOverviewSection({ data }: TwitterXOverviewSectionProps) {
  const { internetStats, metrics, governmentAccounts } = data

  const sentimentData = [
    { name: 'Critical', value: metrics.sentiment.breakdown.negative, color: CHART_COLORS.rose },
    { name: 'Neutral', value: metrics.sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Positive', value: metrics.sentiment.breakdown.positive, color: CHART_COLORS.emerald },
  ]

  const engagementData = [
    { name: 'Avg Likes', value: metrics.engagement.avgLikes, color: CHART_COLORS.rose },
    { name: 'Avg Retweets', value: metrics.engagement.avgRetweets, color: CHART_COLORS.info },
    { name: 'Avg Replies', value: metrics.engagement.avgReplies, color: CHART_COLORS.gold },
  ]

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Twitter/X UAE Overview"
        description="Platform metrics and sentiment analysis"
      >
        <div className="space-y-6">
          {/* Internet Stats */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-info" />
                Internet Statistics
              </CardTitle>
              <CardDescription>UAE Twitter/X audience breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-gold">{internetStats.internetUsers}</span>
                  <span className="text-xs text-platinum-400">Internet Users</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-emerald-400">{internetStats.internetPenetration}</span>
                  <span className="text-xs text-platinum-400">Penetration</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-info">{internetStats.fiveGCoverage}</span>
                  <span className="text-xs text-platinum-400">5G Coverage</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-platinum">{internetStats.twitterUsersHistorical}</span>
                  <span className="text-xs text-platinum-400">Historical Users</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sentiment Analysis Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-glass">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-rose" />
                  Sentiment Analysis
                </CardTitle>
                <CardDescription>Overall: {metrics.sentiment.overall} (Score: {metrics.sentiment.score})</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sentimentData}
                  height={220}
                  showLegend={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-glass">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5 text-gold" />
                  Sentiment Breakdown
                </CardTitle>
                <CardDescription>Detailed sentiment percentages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sentimentData.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-sm font-medium text-platinum-200">{item.name}</span>
                        </div>
                        <span className="text-lg font-bold text-platinum-200">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trending Hashtags */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Hash className="h-5 w-5 text-info" />
                Trending Hashtags
              </CardTitle>
              <CardDescription>Most used hashtags in UAE Twitter/X</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {metrics.engagement.trendingHashtags.map((tag, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Badge variant="outline" className="text-platinum border-platinum/50 px-3 py-1">
                      <Hash className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Engagement Metrics */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald" />
                Average Engagement per Post
              </CardTitle>
              <CardDescription>Engagement metrics for UAE accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={engagementData}
                xAxisKey="name"
                bars={[{ dataKey: 'value', name: 'Avg per Post', color: CHART_COLORS.platinum }]}
                height={280}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
