// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Mic, Headphones, Users, TrendingUp, Globe, AlertTriangle, Radio, Clock } from 'lucide-react'
import { usePodcastIntelligenceData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function PodcastAudioPage() {
  const { data } = usePodcastIntelligenceData()
  const { metrics, topPodcasts, episodeData, demographics } = data || { metrics: {}, topPodcasts: [], episodeData: [], demographics: {} }

  const podcastData = topPodcasts?.slice(0, 7) || [
    { name: 'The UAE Podcast', subscribers: 125000, episodes: 156, avgLength: '45 min' },
    { name: 'Dubai Daily Brief', subscribers: 89000, episodes: 892, avgLength: '12 min' },
    { name: 'Gulf Affairs Weekly', subscribers: 67000, episodes: 234, avgLength: '38 min' },
    { name: 'Tech Dubai', subscribers: 54000, episodes: 98, avgLength: '52 min' },
    { name: 'Business Arabia', subscribers: 48000, episodes: 312, avgLength: '35 min' },
    { name: 'Culture Clash', subscribers: 38000, episodes: 67, avgLength: '60 min' },
    { name: 'News Wrap Arabic', subscribers: 35000, episodes: 520, avgLength: '20 min' },
  ]

  const genreData = [
    { name: 'News & Politics', share: 35, color: CHART_COLORS.navy },
    { name: 'Business', share: 24, color: CHART_COLORS.gold },
    { name: 'Technology', share: 18, color: CHART_COLORS.info },
    { name: 'Culture & Society', share: 15, color: CHART_COLORS.rose },
    { name: 'Sports', share: 8, color: CHART_COLORS.emerald },
  ]

  const sentimentData = [
    { name: 'Pro-Government', value: 42, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 38, color: CHART_COLORS.platinum },
    { name: 'Critical', value: 20, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-fuchsia-500/20 to-pink-600/20 text-fuchsia-400 border-fuchsia-500/50">
            <Mic className="w-3 h-3 mr-1" />
            AUDIO INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Podcast & Audio
            </span>
          </h1>
          <p className="mt-2 text-platinum-500-400">Podcast and audio content intelligence — top shows, listener demographics, and content analysis</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Active Shows" value={metrics?.shows || 156} icon={<Radio className="h-6 w-6" />} gradient="fuchsia" />
        <MetricCard title="Total Listeners" value={metrics?.listeners ? `${(metrics.listeners/1000).toFixed(0)}K` : '485K'} icon={<Headphones className="h-6 w-6" />} gradient="pink" />
        <MetricCard title="Monthly Episodes" value={metrics?.episodes || 890} icon={<Mic className="h-6 w-6" />} gradient="purple" />
        <MetricCard title="Avg. Listen Time" value={metrics?.avgListen || '28 min'} icon={<Clock className="h-6 w-6" />} gradient="indigo" />
        <MetricCard title="Critical Tone" value={metrics?.critical || '20%'} icon={<AlertTriangle className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Pro-Gov Shows" value={metrics?.proGov || '42%'} icon={<Globe className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="podcasts">Top Podcasts</TabsTrigger>
          <TabsTrigger value="genres">Genres</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Podcast Intelligence Overview" description="Audio content landscape and listener patterns">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><TrendingUp className="h-5 w-5 text-emerald-500" />Sentiment Distribution</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Headphones className="h-5 w-5 text-fuchsia-500" />Top Shows</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={podcastData.slice(0,5)} xAxisKey="name" bars={[{ dataKey: 'subscribers', name: 'Subscribers (K)', color: CHART_COLORS.fuchsia }]} height={280} showGrid={true} /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="podcasts" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Top Podcasts" description="Most subscribed audio shows in UAE">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {podcastData.map((p: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                      <div className="flex items-center gap-3">
                        <Mic className="h-4 w-4 text-fuchsia-400" />
                        <div>
                          <p className="font-medium text-platinum-500-200">{p.name}</p>
                          <p className="text-xs text-platinum-500-400">{p.episodes} episodes • {p.avgLength}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-fuchsia-500/50 text-fuchsia-400">{(p.subscribers/1000).toFixed(0)}K</Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="genres" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Genre Distribution" description="Podcast categories by listener share">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {genreData.map((g: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-xl p-5 bg-glass-surface/50 border-glass-border">
                    <div className="flex items-center justify-between mb-3">
                      <Radio className="h-5 w-5 text-fuchsia-400" />
                      <Badge variant="outline" className="border-fuchsia-500/50 text-fuchsia-400">{g.share}%</Badge>
                    </div>
                    <h4 className="font-medium text-platinum-500-200">{g.name}</h4>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="demographics" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Listener Demographics" description="Audience breakdown">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { segment: 'Expatriates (vs Locals)', value: '78% / 22%' },
                  { segment: 'Age 25-34 (Primary)', value: '42%' },
                  { segment: 'English (vs Arabic)', value: '65% / 35%' },
                  { segment: 'Urban (Dubai/Abu Dhabi)', value: '71%' },
                  { segment: 'Professional/Managerial', value: '55%' },
                  { segment: 'Weekly Active Listeners', value: '68%' },
                ].map((d: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                    <span className="text-platinum-500-300">{d.segment}</span>
                    <Badge variant="outline" className="border-fuchsia-500/50 text-fuchsia-400">{d.value}</Badge>
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
