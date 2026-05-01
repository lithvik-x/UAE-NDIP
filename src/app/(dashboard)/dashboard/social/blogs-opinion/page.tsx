// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { PenTool, TrendingUp, Users, Globe, Shield, AlertTriangle, ThumbsUp, MessageSquare } from 'lucide-react'
import { useBlogsIntelligenceData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function BlogsOpinionPage() {
  const { data } = useBlogsIntelligenceData()
  const { metrics, topBlogs, opinionLeaders, topicBreakdown } = data || { metrics: {}, topBlogs: [], opinionLeaders: [], topicBreakdown: [] }

  const blogData = topBlogs?.slice(0, 6).map((b: any) => ({
    name: b.name || b.blog || b.author,
    followers: b.followers || b.subscribers || 0,
    posts: b.posts || b.articles || 0,
    reach: b.reach || b.monthlyViews || 0,
  })) || [
    { name: 'Dawn of the UAE', followers: 125000, posts: 45, reach: 380000 },
    { name: 'Gulf Insider', followers: 89000, posts: 62, reach: 290000 },
    { name: 'UAE Watcher', followers: 67000, posts: 38, reach: 195000 },
    { name: 'The Dubai Connect', followers: 54000, posts: 51, reach: 168000 },
    { name: 'Abu Dhabi Diary', followers: 43000, posts: 29, reach: 132000 },
    { name: 'ExpatVoice', followers: 38000, posts: 44, reach: 115000 },
  ]

  const leaderData = opinionLeaders?.slice(0, 5) || [
    { name: 'Ahmed Al Marzouki', influence: 92, followers: 240000, topic: 'Politics' },
    { name: 'Fatima Al Rashid', influence: 87, followers: 185000, topic: 'Society' },
    { name: 'Khalid Al Maktoum', influence: 95, followers: 420000, topic: 'Business' },
    { name: 'Noor Al Hussain', influence: 81, followers: 98000, topic: 'Culture' },
    { name: 'Omar Al Ketbi', influence: 78, followers: 76000, topic: 'Law' },
  ]

  const sentimentData = [
    { name: 'Pro-Government', value: 35, color: CHART_COLORS.emerald },
    { name: 'Neutral/Analytical', value: 40, color: CHART_COLORS.platinum },
    { name: 'Critical/Opposition', value: 25, color: CHART_COLORS.rose },
  ]

  const topicData = topicBreakdown || [
    { topic: 'Politics & Governance', articles: 124, sentiment: 'mixed' },
    { topic: 'Business & Economy', articles: 98, sentiment: 'positive' },
    { topic: 'Society & Culture', articles: 76, sentiment: 'positive' },
    { topic: 'Security & Defense', articles: 45, sentiment: 'controlled' },
    { topic: 'Environment', articles: 32, sentiment: 'neutral' },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-violet-500/20 to-purple-600/20 text-violet-400 border-violet-500/50">
            <PenTool className="w-3 h-3 mr-1" />
            OPINION & ANALYSIS
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Blogs & Opinion
            </span>
          </h1>
          <p className="mt-2 text-platinum-500-400">Bloggers, opinion writers, and independent analysts covering UAE — influence, reach, and sentiment</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Active Blogs" value={metrics?.blogs || 89} icon={<PenTool className="h-6 w-6" />} gradient="violet" />
        <MetricCard title="Total Authors" value={metrics?.authors || 156} icon={<Users className="h-6 w-6" />} gradient="purple" />
        <MetricCard title="Monthly Articles" value={metrics?.articles || '620'} icon={<Globe className="h-6 w-6" />} gradient="indigo" />
        <MetricCard title="Total Reach" value={metrics?.reach ? `${(metrics.reach/1000).toFixed(0)}K` : '1.8M'} icon={<TrendingUp className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Critical Tone" value={metrics?.critical || '25%'} icon={<AlertTriangle className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Pro-Gov" value={metrics?.proGov || '35%'} icon={<Shield className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="blogs">Top Blogs</TabsTrigger>
          <TabsTrigger value="leaders">Opinion Leaders</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Blog & Opinion Intelligence" description="Independent voice analysis and influence mapping">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Shield className="h-5 w-5 text-emerald-500" />Sentiment</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><TrendingUp className="h-5 w-5 text-violet-500" />Top Blogs</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={blogData.slice(0,5)} xAxisKey="name" bars={[{ dataKey: 'reach', name: 'Reach (K)', color: CHART_COLORS.purple }]} height={280} showGrid={true} /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="blogs" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Top Blogs & Publications" description="Most influential blogs by reach">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {blogData.map((b: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                      <div className="flex items-center gap-3">
                        <PenTool className="h-4 w-4 text-violet-400" />
                        <span className="font-medium text-platinum-500-200">{b.name}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-platinum-500-400">
                        <span>{(b.followers/1000).toFixed(0)}K followers</span>
                        <span>{(b.reach/1000).toFixed(0)}K reach</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="leaders" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Opinion Leaders" description="Most influential commentators and analysts">
              <div className="space-y-3">
                {leaderData.map((l: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-600/5 p-4 border border-violet-500/30">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-platinum-500-500 w-5">#{idx + 1}</span>
                      <Users className="h-4 w-4 text-violet-400" />
                      <div>
                        <p className="font-medium text-platinum-500-200">{l.name}</p>
                        <p className="text-xs text-platinum-500-400">{l.topic} • {(l.followers/1000).toFixed(0)}K followers</p>
                      </div>
                    </div>
                    <Badge className="border-violet-500/50 text-violet-400">{l.influence}/100</Badge>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="topics" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Topic Breakdown" description="Coverage by subject area">
              <div className="space-y-4">
                {topicData.map((t: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-500-200">{t.topic}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`text-xs ${t.sentiment === 'positive' ? 'border-emerald-500/50 text-emerald-500' : t.sentiment === 'controlled' || t.sentiment === 'mixed' ? 'border-orange-500/50 text-orange-500' : 'border-platinum-500/50 text-platinum-500'}`}>{t.sentiment}</Badge>
                        <span className="text-lg font-bold text-platinum-500-100">{t.articles}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${(t.articles / 130) * 100}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />
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
