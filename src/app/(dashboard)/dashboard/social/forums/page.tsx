// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { MessageCircle, Users, TrendingUp, Shield, AlertTriangle, Globe, ThumbsUp, Clock } from 'lucide-react'
import { useForumsIntelligenceData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function ForumsPage() {
  const { data } = useForumsIntelligenceData()
  const { metrics, topForums, trendingThreads } = data || { metrics: {}, topForums: [], trendingThreads: [] }

  const forumData = topForums?.slice(0, 6).map((f: any) => ({
    name: f.name || f.forum,
    members: f.members || f.activeUsers || 0,
    posts: f.posts || f.monthlyPosts || 0,
  })) || [
    { name: 'Reddit r/UAE', members: 85000, posts: 4200 },
    { name: 'Reddit r/Dubai', members: 62000, posts: 3800 },
    { name: 'Expat.com', members: 45000, posts: 2900 },
    { name: 'Reddit r/AbuDhabi', members: 28000, posts: 1600 },
    { name: 'TripAdvisor UAE', members: 95000, posts: 5100 },
    { name: 'Trustpilot UAE', members: 12000, posts: 890 },
  ]

  const threadData = trendingThreads?.slice(0, 5).map((t: any) => ({
    title: t.title || t.topic,
    posts: t.replies || t.engagement || 0,
    sentiment: t.sentiment || 'neutral',
  })) || [
    { title: 'UAE job market outlook 2026', posts: 342, sentiment: 'positive' },
    { title: 'Dubai rent increase complaints', posts: 287, sentiment: 'negative' },
    { title: 'Best schools in Abu Dhabi', posts: 245, sentiment: 'neutral' },
    { title: 'Crypto regulations discussion', posts: 198, sentiment: 'mixed' },
    { title: 'Gold price predictions', posts: 176, sentiment: 'neutral' },
  ]

  const sentimentData = [
    { name: 'Positive', value: 38, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 42, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 20, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 text-amber-400 border-amber-500/50">
            <MessageCircle className="w-3 h-3 mr-1" />
            COMMUNITY FORUMS
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Forum Intelligence
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Discussion forums and community platforms — trending topics, sentiment patterns, and engagement metrics</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Active Forums" value={metrics?.forums || 23} icon={<Globe className="h-6 w-6" />} gradient="amber" />
        <MetricCard title="Total Members" value={metrics?.members ? `${(metrics.members/1000).toFixed(0)}K` : '234K'} icon={<Users className="h-6 w-6" />} gradient="orange" />
        <MetricCard title="Monthly Posts" value={metrics?.posts || '18.4K'} icon={<MessageCircle className="h-6 w-6" />} gradient="rose" />
        <MetricCard title="Active Threads" value={metrics?.threads || 4521} icon={<ThumbsUp className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Avg. Response" value={metrics?.responseTime || '2.4h'} icon={<Clock className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Sentiment" value={metrics?.sentiment?.overall || 'MIXED'} icon={<TrendingUp className="h-6 w-6" />} gradient="indigo" status="warning" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="forums">Top Forums</TabsTrigger>
          <TabsTrigger value="trending">Trending Threads</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Forum Intelligence Overview" description="Community discussion patterns and sentiment">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-500" />
                      Sentiment Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <PieChart data={sentimentData} height={280} showLegend={true} />
                  </CardContent>
                </motion.div>

                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-amber-500" />
                      Forum Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <BarChart data={forumData} xAxisKey="name" bars={[{ dataKey: 'posts', name: 'Monthly Posts', color: CHART_COLORS.amber }]} height={280} showGrid={true} />
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="forums" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Top Forums" description="Most active discussion communities">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {forumData.map((f: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                      <div className="flex items-center gap-3">
                        <MessageCircle className="h-4 w-4 text-amber-400" />
                        <span className="font-medium text-platinum-200">{f.name}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-platinum-400">
                        <span>{f.members?.toLocaleString?.()} members</span>
                        <span>{f.posts?.toLocaleString?.()} posts/mo</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="trending" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Trending Threads" description="Most engaged discussions">
              <div className="space-y-3">
                {threadData.map((t: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-xs text-platinum-500 w-5">#{idx + 1}</span>
                      <MessageCircle className="h-4 w-4 text-amber-400 shrink-0" />
                      <span className="text-sm text-platinum-200">{t.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={`text-xs ${t.sentiment === 'positive' ? 'border-emerald-500/50 text-emerald-500' : t.sentiment === 'negative' ? 'border-rose-500/50 text-rose-500' : 'border-platinum-500/50 text-platinum-500'}`}>{t.sentiment}</Badge>
                      <Badge variant="outline" className="border-amber-500/50 text-amber-400">{t.posts} replies</Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
