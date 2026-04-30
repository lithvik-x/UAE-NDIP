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
import { Newspaper, Globe, TrendingUp, Shield, AlertTriangle, CheckCircle, Eye, ExternalLink } from 'lucide-react'
import { useNewsWebsitesIntelligenceData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1, opacity: 1 }, hover: { scale: 1.02, opacity: 0.9 } }

export default function NewsWebsitesPage() {
  const { data } = useNewsWebsitesIntelligenceData()

  if (!data) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading news websites intelligence data...</div>
      </motion.div>
    )
  }

  const { metrics, topSources, coverageByTopic } = data

  const sourceData = topSources?.slice(0, 7).map((s: any) => ({
    name: s.name || s.source,
    visits: s.visits || s.monthlyVisitors || 0,
    bias: s.bias || s.leaning || 'neutral',
  })) || [
    { name: 'Khaleej Times', visits: 8500000, bias: 'neutral' },
    { name: 'The National', visits: 6200000, bias: 'neutral' },
    { name: 'Arab News', visits: 4800000, bias: 'pro-gov' },
    { name: 'Gulf News', visits: 5100000, bias: 'neutral' },
    { name: 'Al Jazeera', visits: 7200000, bias: 'critical' },
    { name: 'BBC Arabic', visits: 3900000, bias: 'neutral' },
    { name: 'Reuters', visits: 4400000, bias: 'neutral' },
  ]

  const topicCoverage = coverageByTopic || [
    { topic: 'Politics & Governance', coverage: 92, sentiment: 'mixed' },
    { topic: 'Economy & Business', coverage: 88, sentiment: 'positive' },
    { topic: 'Security & Defense', coverage: 76, sentiment: 'controlled' },
    { topic: 'Culture & Society', coverage: 65, sentiment: 'positive' },
    { topic: 'Environment', coverage: 42, sentiment: 'mixed' },
  ]

  const sentimentData = [
    { name: 'Pro-Government', value: 45, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 38, color: CHART_COLORS.platinum },
    { name: 'Critical', value: 17, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/50">
            <Newspaper className="w-3 h-3 mr-1" />
            MEDIA INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              News Websites
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">
            News outlet coverage analysis — source credibility, topic coverage, and media landscape mapping
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10 bg-glass-surface/50">
            <Shield className="h-4 w-4" />
            Source Credibility
          </Button>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-white gap-2 shadow-lg shadow-emerald-500/25">
            <Eye className="h-4 w-4" />
            Monitor Coverage
          </Button>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Tracked Sources" value={metrics?.sources || 47} icon={<Newspaper className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Monthly Visits" value={metrics?.monthlyVisits ? `${(metrics.monthlyVisits/1000000).toFixed(1)}M` : '48.2M'} icon={<Globe className="h-6 w-6" />} gradient="teal" />
        <MetricCard title="Avg. Credibility" value={metrics?.credibility || '72%'} icon={<Shield className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Pro-Gov Coverage" value={metrics?.proGov || '45%'} icon={<CheckCircle className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Critical Tone" value={metrics?.critical || '17%'} icon={<AlertTriangle className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Articles/Month" value={metrics?.articles || '12.4K'} icon={<TrendingUp className="h-6 w-6" />} gradient="indigo" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sources">Top Sources</TabsTrigger>
          <TabsTrigger value="coverage">Topic Coverage</TabsTrigger>
          <TabsTrigger value="credibility">Credibility Matrix</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="News Intelligence Overview" description="UAE media landscape and news coverage patterns">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-emerald-500" />
                        Coverage Sentiment
                      </CardTitle>
                      <CardDescription>Media tone breakdown</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <PieChart data={sentimentData} height={280} showLegend={true} />
                    </CardContent>
                  </motion.div>

                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5 text-emerald-500" />
                        Top Sources by Traffic
                      </CardTitle>
                      <CardDescription>Most visited news outlets</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <BarChart data={sourceData.slice(0, 5)} xAxisKey="name" bars={[{ dataKey: 'visits', name: 'Monthly Visits (M)', color: CHART_COLORS.emerald }]} height={280} showGrid={true} />
                    </CardContent>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="sources" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Top News Sources" description="Most influential news websites covering UAE">
              <ScrollArea className="h-[450px]">
                <div className="space-y-3">
                  {sourceData.map((s: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.06 }}
                      className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4 border border-slate-700/50">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-platinum-500 w-6">{idx + 1}</span>
                        <Newspaper className="h-4 w-4 text-emerald-400" />
                        <div>
                          <p className="text-sm font-medium text-platinum-200">{s.name}</p>
                          <p className="text-xs text-platinum-400">{(s.visits / 1000000).toFixed(1)}M monthly visits</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={`${s.bias === 'pro-gov' ? 'border-emerald-500/50 text-emerald' : s.bias === 'critical' ? 'border-rose-500/50 text-rose' : 'border-platinum-500/50 text-platinum'}`}>
                        {s.bias}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="coverage" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Topic Coverage" description="Coverage depth by topic area">
              <div className="space-y-4">
                {topicCoverage.map((t: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-200">{t.topic}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`text-xs ${t.sentiment === 'positive' ? 'border-emerald-500/50 text-emerald' : t.sentiment === 'negative' || t.sentiment === 'controlled' ? 'border-rose-500/50 text-rose' : 'border-platinum-500/50 text-platinum'}`}>{t.sentiment}</Badge>
                        <span className="text-lg font-bold text-platinum-100">{t.coverage}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${t.coverage}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="credibility" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Credibility Matrix" description="Source reliability assessment">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { source: 'Khaleej Times', credibility: 85, reliability: 'HIGH', factCheck: 78 },
                  { source: 'The National', credibility: 88, reliability: 'HIGH', factCheck: 82 },
                  { source: 'Arab News', credibility: 75, reliability: 'MEDIUM', factCheck: 71 },
                  { source: 'Al Jazeera', credibility: 68, reliability: 'MIXED', factCheck: 65 },
                  { source: 'Gulf News', credibility: 72, reliability: 'MEDIUM', factCheck: 69 },
                  { source: 'Reuters', credibility: 91, reliability: 'HIGH', factCheck: 89 },
                ].map((s, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4 border border-slate-700/50">
                    <Shield className={`h-5 w-5 mt-0.5 shrink-0 ${s.reliability === 'HIGH' ? 'text-emerald' : s.reliability === 'MIXED' ? 'text-orange' : 'text-rose'}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-platinum-200">{s.source}</h4>
                        <Badge variant="outline" className={`text-xs ${s.reliability === 'HIGH' ? 'border-emerald-500/50 text-emerald' : 'border-orange-500/50 text-orange'}`}>{s.reliability}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-platinum-400">
                        <span>Credibility: {s.credibility}%</span>
                        <span>Fact-check: {s.factCheck}%</span>
                      </div>
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
