'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { PieChart, BarChart, LineChart } from '@/components/ui/chart-library'
import { Globe, TrendingUp, Users, Shield, AlertTriangle, Activity, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import type { facebookMetaData } from '@/lib/data/social/facebook-meta-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

interface FacebookMetaOverviewSectionProps {
  data: typeof facebookMetaData
}

export function FacebookMetaOverviewSection({ data }: FacebookMetaOverviewSectionProps) {
  const { metrics, botActivity, censorship } = data

  const sentimentData = [
    { name: 'Positive', value: metrics.sentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics.sentiment.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.sentiment.negative, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Facebook/Meta Intelligence Overview"
        description="Meta platform activity in UAE"
      >
        <div className="space-y-6">
          {/* Platform Metrics */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-info" />
                Platform Metrics
              </CardTitle>
              <CardDescription>UAE Facebook user statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-gold-700">{(metrics.users / 1000000).toFixed(1)}M</span>
                  <span className="text-xs text-platinum-400">Total Users</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-emerald-400">{metrics.penetration}%</span>
                  <span className="text-xs text-platinum-400">Penetration</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-info">{(metrics.dailyActive / 1000000).toFixed(1)}M</span>
                  <span className="text-xs text-platinum-400">Daily Active</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-platinum-500">{metrics.engagement.engagementRate}%</span>
                  <span className="text-xs text-platinum-400">Engagement Rate</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sentiment Distribution */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-glass">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-rose-500" />
                  Sentiment Distribution
                </CardTitle>
                <CardDescription>Overall sentiment on Facebook in UAE</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart data={sentimentData} height={280} showLegend={true} />
              </CardContent>
            </Card>

            <Card className="glass-card border-glass">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-gold-700" />
                  Bot Activity Analysis
                </CardTitle>
                <CardDescription>Coordinated inauthentic behavior indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                    <span className="text-sm text-platinum-300">Estimated Bot Percent</span>
                    <Badge variant="outline" className="text-amber-400 border-amber-400/50">
                      {botActivity.estimatedBotPercent}%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                    <span className="text-sm text-platinum-300">CIB Detected</span>
                    <Badge variant="destructive" className={botActivity.coordinatedInauthentic ? 'bg-rose-500/20 text-rose-400' : ''}>
                      {botActivity.coordinatedInauthentic ? 'YES' : 'NO'}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                    <span className="text-sm text-platinum-300">Confidence Score</span>
                    <span className="text-lg font-bold text-platinum-500">{(botActivity.confidence * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Censorship Level */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-rose-500" />
                Censorship & Compliance
              </CardTitle>
              <CardDescription>Content moderation and government requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-gold-700">{censorship?.complianceRate || 82}%</span>
                  <span className="text-xs text-platinum-400">Compliance Rate</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-rose-500">{censorship?.governmentRequests?.toLocaleString() || '1,893'}</span>
                  <span className="text-xs text-platinum-400">Gov Requests</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-amber-500">{censorship?.contentRemoved?.toLocaleString() || '15,234'}</span>
                  <span className="text-xs text-platinum-400">Content Removed</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                  <span className="text-2xl font-bold text-platinum-500">{metrics.censorshipLevel.toUpperCase()}</span>
                  <span className="text-xs text-platinum-400">Censorship Level</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Trending Topics */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-emerald-500" />
                Trending Topics
              </CardTitle>
              <CardDescription>Current trending discussions on UAE Facebook</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {(metrics.sentiment.trending ?? []).map((topic, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Badge variant="outline" className="text-platinum-500 border-platinum/50 px-3 py-1">
                      {topic}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}