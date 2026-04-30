// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, MessageSquare, TrendingUp, Users, AlertTriangle, BookOpen } from 'lucide-react'
import { useEgyptianArabicData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function EgyptianArabicPage() {
  const { data } = useEgyptianArabicData()
  const { metrics, keyPhrases, sentimentByTopic, usagePatterns } = data || { metrics: {}, keyPhrases: [], sentimentByTopic: [], usagePatterns: [] }

  const phraseData = keyPhrases?.slice(0, 7) || [
    { phrase: 'إيه الأخبار', translation: 'What\'s the news?', usage: 'Casual greeting', frequency: 'VERY HIGH' },
    { phrase: 'كل的小孩', translation: 'What\'s up?', usage: 'Informal', frequency: 'HIGH' },
    { phrase: 'في什么问题', translation: 'Is there a problem?', usage: 'Questioning', frequency: 'MEDIUM' },
    { phrase: '数不清', translation: 'Countless/Many', usage: 'Emphasis', frequency: 'MEDIUM' },
    { phrase: 'اه ياetet', translation: 'Oh dear', usage: 'Disappointment', frequency: 'HIGH' },
  ]

  const topicData = sentimentByTopic || [
    { topic: 'Politics', sentiment: 'Cautious', coverage: 78 },
    { topic: 'Economy', sentiment: 'Concerned', coverage: 65 },
    { topic: 'Culture', sentiment: 'Positive', coverage: 89 },
    { topic: 'Social Issues', sentiment: 'Mixed', coverage: 72 },
    { topic: 'Sports', sentiment: 'Very Positive', coverage: 95 },
  ]

  const sentimentData = [
    { name: 'Positive', value: 42, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 38, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 20, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-amber-500/20 to-yellow-600/20 text-amber-400 border-amber-500/50">
            <Globe className="w-3 h-3 mr-1" />
            ARABIC DIALECT
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Egyptian Arabic
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Egyptian Arabic dialect intelligence — key phrases, sentiment patterns, and cultural context for UAE-Egypt communications</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Egyptian Expats" value={metrics?.population || '680K'} icon={<Users className="h-6 w-6" />} gradient="amber" />
        <MetricCard title="Usage in UAE" value={metrics?.uaeUsage || 'HIGH'} icon={<MessageSquare className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Cultural Relevance" value={metrics?.cultural || 'SIGNIFICANT'} icon={<BookOpen className="h-6 w-6" />} gradient="rose" />
        <MetricCard title="Social Media" value={metrics?.social || '28%'} icon={<TrendingUp className="h-6 w-6" />} gradient="orange" />
        <MetricCard title="Business Context" value={metrics?.business || 'MEDIUM'} icon={<Globe className="h-6 w-6" />} gradient="teal" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'LOW'} icon={<AlertTriangle className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="phrases">Key Phrases</TabsTrigger>
          <TabsTrigger value="topics">Topic Sentiment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Egyptian Arabic Overview" description="Dialectal intelligence for UAE-Egypt communications">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><TrendingUp className="h-5 w-5 text-emerald-500" />Sentiment</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><BookOpen className="h-5 w-5 text-amber-500" />Top Topics</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={topicData.slice(0,4)} xAxisKey="topic" bars={[{ dataKey: 'coverage', name: 'Coverage %', color: CHART_COLORS.amber }]} height={280} showGrid={true} /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="phrases" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Key Egyptian Arabic Phrases" description="Common phrases with cultural context">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {phraseData.map((p: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-amber-500/10 to-yellow-600/5 p-4 border border-amber-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-100 font-rajdhani">{p.phrase}</span>
                        <Badge variant="outline" className="border-amber-500/50 text-amber-400">{p.frequency}</Badge>
                      </div>
                      <p className="text-sm text-cyan-400 mb-1">{p.translation}</p>
                      <p className="text-xs text-platinum-400">Usage: {p.usage}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="topics" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Topic Sentiment" description="Egyptian Arabic sentiment by topic">
              <div className="space-y-4">
                {topicData.map((t: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-200">{t.topic}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`${t.sentiment.includes('Positive') ? 'border-emerald-500/50 text-emerald' : t.sentiment.includes('Negative') || t.sentiment.includes('Concerned') ? 'border-rose-500/50 text-rose' : 'border-platinum-500/50 text-platinum'}`}>{t.sentiment}</Badge>
                        <span className="text-lg font-bold text-platinum-100">{t.coverage}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${t.coverage}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-500" />
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
