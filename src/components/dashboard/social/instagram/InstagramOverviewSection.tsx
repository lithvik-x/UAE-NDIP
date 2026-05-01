'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { AreaChart, PieChart } from '@/components/ui/chart-library'
import { Users, TrendingUp, Globe, Hash, Heart, MessageSquare, Bookmark, Share2, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import type { instagramIntelligenceData } from '@/lib/data/instagram-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

interface InstagramOverviewSectionProps {
  data: typeof instagramIntelligenceData
}

export function InstagramOverviewSection({ data }: InstagramOverviewSectionProps) {
  const { metrics, userGrowth, governmentAccounts, contentTrends } = data

  const userGrowthChartData = userGrowth.map((u: { month: string; users: number; percentOfPopulation?: number; source: string }) => ({
    name: u.month,
    users: u.users / 1000000,
  }))

  const sentimentData = [
    { name: 'Positive', value: metrics.sentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics.sentiment.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.sentiment.negative, color: CHART_COLORS.rose },
  ]

  const trendingTopics = metrics.sentiment.trending || []

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Instagram Overview"
        description="UAE Instagram platform metrics and user statistics"
      >
        <div className="space-y-6">
          {/* User Growth Chart */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple" />
                User Growth Trajectory
              </CardTitle>
              <CardDescription>Instagram users in UAE (millions)</CardDescription>
            </CardHeader>
            <CardContent>
              <AreaChart
                data={userGrowthChartData}
                xAxisKey="name"
                areas={[{ dataKey: 'users', name: 'Users (M)', color: CHART_COLORS.purple }]}
                height={280}
                showGrid={true}
              />
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="glass-card border-purple-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple" />
                  Active Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white">{(metrics.users / 1000000).toFixed(2)}M</p>
                <p className="text-xs text-slate-400 mt-1">August 2025</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Globe className="h-4 w-4 text-navy" />
                  Penetration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white">{metrics.penetration}%</p>
                <p className="text-xs text-slate-400 mt-1">Of population</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Heart className="h-4 w-4 text-rose" />
                  Engagement Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white">{metrics.engagement.engagementRate}%</p>
                <p className="text-xs text-slate-400 mt-1">Avg per post</p>
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-gold" />
                  Sentiment Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white">{metrics.sentiment.score}</p>
                <p className="text-xs text-slate-400 mt-1">{metrics.sentiment.overall}</p>
              </CardContent>
            </Card>
          </div>

          {/* Sentiment and Trending */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple" />
                  Sentiment Analysis
                </CardTitle>
                <CardDescription>Overall platform sentiment breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sentimentData}
                  height={220}
                  showLegend={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Hash className="h-5 w-5 text-gold" />
                  Trending Topics
                </CardTitle>
                <CardDescription>Most discussed content categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic: string, idx: number) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-purple-500/30 text-purple-300 px-3 py-1"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-platinum/70">Key Concerns:</p>
                  {(metrics.sentiment.keyConcerns || []).slice(0, 3).map((concern: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-rose-400">•</span>
                      <span>{concern}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Government Accounts */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-navy" />
                Government Accounts
              </CardTitle>
              <CardDescription>Official UAE presence on Instagram</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {(governmentAccounts || []).map((account: { platform?: string; handle: string; url?: string; followers?: number; verified: boolean }, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                        <Globe className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{account.handle}</p>
                        <p className="text-xs text-slate-400">{account.platform}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gold">{(account.followers || 0).toLocaleString()}</p>
                      {account.verified && (
                        <Badge variant="outline" className="text-xs border-emerald-500/30 text-emerald-400">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
