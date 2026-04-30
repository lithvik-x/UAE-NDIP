// @ts-nocheck
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Search, Globe, TrendingUp, Eye, Shield, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react'
import { useGoogleSerpIntelligenceData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1, opacity: 1 }, hover: { scale: 1.02, opacity: 0.9 } }

export default function GoogleSerpPage() {
  const { data } = useGoogleSerpIntelligenceData()

  if (!data) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Google SERP intelligence data...</div>
      </motion.div>
    )
  }

  const { metrics, topQueries, serpFeatures, visibilityData } = data

  const queryData = topQueries?.slice(0, 8).map((q: any) => ({
    query: q.query || q.term,
    volume: q.volume || q.searchVolume || 0,
    position: q.position || q.ranking || 1,
  })) || [
    { query: 'UAE economy outlook', volume: 45000, position: 1 },
    { query: 'Dubai business setup', volume: 32000, position: 2 },
    { query: 'UAE visa requirements', volume: 28000, position: 1 },
    { query: 'Abu Dhabi investments', volume: 21000, position: 3 },
    { query: 'UAE labor law', volume: 19000, position: 1 },
    { query: 'Dubai real estate', volume: 45000, position: 4 },
    { query: 'UAE healthcare', volume: 15000, position: 2 },
    { query: 'UAE education system', volume: 12000, position: 1 },
  ]

  const serpFeatureData = serpFeatures || [
    { feature: 'Featured Snippet', count: 23, coverage: '18%' },
    { feature: 'People Also Ask', count: 45, coverage: '34%' },
    { feature: 'Knowledge Panel', count: 12, coverage: '9%' },
    { feature: 'Image Pack', count: 34, coverage: '26%' },
    { feature: 'Video Carousel', count: 18, coverage: '14%' },
  ]

  const sentimentData = [
    { name: 'Positive Coverage', value: 48, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 37, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 15, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-sky-500/20 to-blue-600/20 text-sky-400 border-sky-500/50">
            <Search className="w-3 h-3 mr-1" />
            SEARCH INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Google SERP Analysis
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">
            Search engine result page intelligence — ranking positions, SERP features, and visibility metrics for UAE topics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10 bg-glass-surface/50">
            <Globe className="h-4 w-4" />
            Keyword Research
          </Button>
          <Button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-90 text-white gap-2 shadow-lg shadow-sky-500/25">
            <TrendingUp className="h-4 w-4" />
            Track Rankings
          </Button>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Tracked Keywords" value={metrics?.keywords || 1250} icon={<Search className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Avg. Position" value={metrics?.avgPosition || '3.2'} icon={<TrendingUp className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="SERP Features" value={metrics?.serpFeatures || 89} icon={<Eye className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Visibility Score" value={metrics?.visibility || '78%'} icon={<Globe className="h-6 w-6" />} gradient="blue" />
        <MetricCard title="Competitors" value={metrics?.competitors || 24} icon={<Shield className="h-6 w-6" />} gradient="indigo" />
        <MetricCard title="CTR" value={metrics?.ctr || '4.8%'} icon={<ExternalLink className="h-6 w-6" />} gradient="teal" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="keywords">Top Keywords</TabsTrigger>
          <TabsTrigger value="features">SERP Features</TabsTrigger>
          <TabsTrigger value="visibility">Visibility</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="SERP Intelligence Overview" description="Search visibility and ranking performance for UAE-related queries">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-emerald-500" />
                        Sentiment Distribution
                      </CardTitle>
                      <CardDescription>Coverage sentiment for tracked queries</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <PieChart data={sentimentData} height={280} showLegend={true} />
                    </CardContent>
                  </motion.div>

                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Search className="h-5 w-5 text-sky-500" />
                        Top Queries by Volume
                      </CardTitle>
                      <CardDescription>Highest-volume UAE search terms</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <BarChart data={queryData.slice(0, 5)} xAxisKey="query" bars={[{ dataKey: 'volume', name: 'Volume', color: CHART_COLORS.sky }]} height={280} showGrid={true} />
                    </CardContent>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Top Keywords" description="High-value search queries tracked for UAE intelligence">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {queryData.map((q: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.06 }}
                      className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4 border border-slate-700/50">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-platinum-500 w-6">{idx + 1}</span>
                        <Search className="h-4 w-4 text-sky-400" />
                        <span className="text-sm text-platinum-200">{q.query}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="border-sky-500/50 text-sky-400">{q.volume?.toLocaleString?.() || q.volume}/mo</Badge>
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald">#{q.position}</Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="SERP Features" description="Rich results and SERP feature coverage">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {serpFeatureData.map((f: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-xl p-5 bg-glass-surface/50 border-glass-border">
                    <div className="flex items-center justify-between mb-3">
                      <Eye className="h-5 w-5 text-sky-400" />
                      <Badge variant="outline" className="border-emerald-500/50 text-emerald">{f.coverage}</Badge>
                    </div>
                    <h4 className="font-medium text-platinum-200 mb-1">{f.feature}</h4>
                    <p className="text-2xl font-bold text-platinum-100">{f.count}</p>
                    <p className="text-xs text-platinum-400">occurrences tracked</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="visibility" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Visibility Trends" description="Search visibility over time">
              <div className="space-y-4">
                {[
                  { domain: 'government.ae', visibility: 94, trend: '+2.1%', status: 'dominant' },
                  { domain: 'dubaichamber.ae', visibility: 78, trend: '+1.4%', status: 'strong' },
                  { domain: 'investindubai.com', visibility: 65, trend: '-0.8%', status: 'moderate' },
                  { domain: 'uaeentry.gov', visibility: 58, trend: '+3.2%', status: 'growing' },
                ].map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: '100%' }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-platinum-400" />
                        <span className="text-sm font-medium text-platinum-200">{item.domain}</span>
                        <Badge variant="outline" className={`text-xs ${item.trend.startsWith('+') ? 'border-emerald-500/50 text-emerald' : 'border-rose-500/50 text-rose'}`}>{item.trend}</Badge>
                      </div>
                      <span className="text-lg font-bold text-platinum-100">{item.visibility}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${item.visibility}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className={`h-full rounded-full ${item.visibility > 80 ? 'bg-emerald-500' : item.visibility > 60 ? 'bg-sky-500' : 'bg-gold-500'}`} />
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
