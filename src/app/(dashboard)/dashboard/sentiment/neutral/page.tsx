// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, MessageSquare, TrendingUp, AlertTriangle, ThumbsUp, Minus } from 'lucide-react'
import { useNeutralSentimentData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function NeutralSentimentPage() {
  const { data } = useNeutralSentimentData()
  const { metrics, neutralTopics, sources } = data || { metrics: {}, neutralTopics: [], sources: [] }

  const topicData = neutralTopics?.slice(0, 8) || [
    { topic: 'Economic Statistics', sentiment: 'Neutral', coverage: 82, tone: 'Objective' },
    { topic: 'Government Announcements', sentiment: 'Neutral', coverage: 75, tone: 'Formal' },
    { topic: 'Weather Reports', sentiment: 'Neutral', coverage: 95, tone: 'Factual' },
    { topic: 'Sports Results', sentiment: 'Neutral', coverage: 88, tone: 'Informative' },
    { topic: 'Traffic Updates', sentiment: 'Neutral', coverage: 90, tone: 'Informational' },
    { topic: 'Public Holidays', sentiment: 'Neutral', coverage: 85, tone: 'Official' },
    { topic: 'Visa Regulations', sentiment: 'Neutral', coverage: 70, tone: 'Technical' },
    { topic: 'Health Guidelines', sentiment: 'Neutral', coverage: 78, tone: 'Advisory' },
  ]

  const sourceData = sources || [
    { source: 'Government Websites', percentage: 45, credibility: 'High' },
    { source: 'Official News Agencies', percentage: 30, credibility: 'High' },
    { source: 'Semi-Government', percentage: 15, credibility: 'Medium' },
    { source: 'Private Media', percentage: 10, credibility: 'Medium' },
  ]

  const sentimentBreakdown = [
    { name: 'Neutral-Factual', value: 55, color: CHART_COLORS.platinum },
    { name: 'Neutral-Formal', value: 30, color: CHART_COLORS.denim },
    { name: 'Neutral-Objective', value: 15, color: CHART_COLORS.platinum },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-slate-500/20 to-gray-600/20 text-platinum-400 border-platinum-500/50">
            <Minus className="w-3 h-3 mr-1" />
            SENTIMENT
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Neutral Sentiment
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Neutral sentiment analysis — factual, objective, and balanced communications in UAE media</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Neutral Content" value={metrics?.content || '42%'} icon={<Minus className="h-6 w-6" />} gradient="slate" />
        <MetricCard title="Factual Tone" value={metrics?.factual || 'HIGH'} icon={<ThumbsUp className="h-6 w-6" />} gradient="denim" />
        <MetricCard title="Sources" value={metrics?.sources || '156'} icon={<Globe className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Coverage" value={metrics?.coverage || 'WIDE'} icon={<MessageSquare className="h-6 w-6" />} gradient="teal" />
        <MetricCard title="Objectivity" value={metrics?.objectivity || '78%'} icon={<TrendingUp className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'LOW'} icon={<AlertTriangle className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="topics">Neutral Topics</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Neutral Sentiment Overview" description="Factual and objective content distribution">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><ThumbsUp className="h-5 w-5 text-platinum-500" />Tone Distribution</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentBreakdown} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Globe className="h-5 w-5 text-platinum-500" />Context</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3 text-sm text-platinum-300">
                      <div className="flex items-center gap-2"><ThumbsUp className="h-4 w-4 text-platinum" />Government communications: predominantly neutral</div>
                      <div className="flex items-center gap-2"><ThumbsUp className="h-4 w-4 text-platinum" />Economic reporting: factual and balanced</div>
                      <div className="flex items-center gap-2"><ThumbsUp className="h-4 w-4 text-platinum" />Public service announcements: objective</div>
                      <div className="flex items-center gap-2"><ThumbsUp className="h-4 w-4 text-platinum" />Sports coverage: neutral reporting</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="topics" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Neutral Topic Analysis" description="Topics with neutral sentiment patterns">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {topicData.map((t: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-slate-500/10 to-gray-600/5 p-4 border border-platinum-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-100 font-rajdhani">{t.topic}</span>
                        <Badge variant="outline" className="border-platinum-500/50 text-platinum-400">{t.tone}</Badge>
                      </div>
                      <p className="text-sm text-platinum-400 mb-1">Sentiment: {t.sentiment}</p>
                      <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${t.coverage}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                          className="h-full rounded-full bg-gradient-to-r from-slate-500 to-gray-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="sources" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Neutral Content Sources" description="Sources of neutral sentiment content">
              <div className="space-y-4">
                {sourceData.map((s: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-200">{s.source}</span>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={`border-${s.credibility === 'High' ? 'emerald' : 'platinum'}-500/50 text-${s.credibility === 'High' ? 'emerald' : 'platinum'}`}>{s.credibility}</Badge>
                        <span className="text-lg font-bold text-platinum-100">{s.percentage}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${s.percentage}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-slate-500 to-gray-500" />
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
