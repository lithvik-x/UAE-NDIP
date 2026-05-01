// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, MessageSquare, TrendingUp, Users, Shield, AlertTriangle, BookOpen } from 'lucide-react'
import { useChineseData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function ChinesePage() {
  const { data } = useChineseData()
  const { metrics, keyPhrases, sentimentByTopic } = data || { metrics: {}, keyPhrases: [], sentimentByTopic: [] }

  const phraseData = keyPhrases?.slice(0, 6) || [
    { phrase: '你好', pinyin: 'Nǐ hǎo', translation: 'Hello', context: 'General greeting' },
    { phrase: '谢谢', pinyin: 'Xièxiè', translation: 'Thank you', context: 'Gratitude' },
    { phrase: '是 / 不是', pinyin: 'Shì / Bù shì', translation: 'Yes / No', context: 'Agreement' },
    { phrase: '请问', pinyin: 'Qǐng wèn', translation: 'Excuse me / May I ask', context: 'Politeness' },
    { phrase: '多少钱', pinyin: 'Duōshǎo qián', translation: 'How much?', context: 'Shopping/Business' },
  ]

  const sentimentData = [
    { name: 'Positive', value: 72, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 22, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 6, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-red-500/20 to-orange-600/20 text-red-400 border-red-500/50">
            <Globe className="w-3 h-3 mr-1" />
            ASIAN INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Chinese Language
            </span>
          </h1>
          <p className="mt-2 text-platinum-500-400">Chinese language intelligence — UAE-China strategic partnership, trade, and BRI implications</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Chinese Expats" value={metrics?.population || '95K'} icon={<Users className="h-6 w-6" />} gradient="red" />
        <MetricCard title="Belt & Road" value={metrics?.bri || 'ACTIVE'} icon={<TrendingUp className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Trade Relations" value={metrics?.trade || 'STRONG'} icon={<Globe className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Tech Partnership" value={metrics?.tech || 'SIGNIFICANT'} icon={<Shield className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Tourism" value={metrics?.tourism || 'HIGH'} icon={<BookOpen className="h-6 w-6" />} gradient="orange" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'LOW'} icon={<AlertTriangle className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="phrases">Key Phrases</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Chinese Language Overview" description="UAE-China strategic partnership intelligence">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><TrendingUp className="h-5 w-5 text-emerald-500" />Sentiment</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Globe className="h-5 w-5 text-red-500" />Strategic Context</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3 text-sm text-platinum-500-300">
                      <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald-500" />$85B+ annual trade volume</div>
                      <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald-500" />BRI: key infrastructure partner</div>
                      <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald-500" />Huawei, Alibaba significant presence</div>
                      <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald-500" />600K+ Chinese tourists annually</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="phrases" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Key Chinese Phrases" description="Essential phrases with pinyin transliteration">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {phraseData.map((p: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-red-500/10 to-orange-600/5 p-4 border border-red-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-500-100 font-rajdhani">{p.phrase}</span>
                        <Badge variant="outline" className="border-red-500/50 text-red-400">{p.pinyin}</Badge>
                      </div>
                      <p className="text-sm text-cyan-400 mb-1">{p.translation}</p>
                      <p className="text-xs text-platinum-500-400">Context: {p.context}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="topics" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Topic Sentiment" description="Chinese language sentiment by topic">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { topic: 'Belt & Road Initiative', sentiment: 'Very Positive', coverage: 95 },
                  { topic: 'Trade & Investment', sentiment: 'Very Positive', coverage: 92 },
                  { topic: 'Technology Cooperation', sentiment: 'Positive', coverage: 85 },
                  { topic: 'Tourism', sentiment: 'Very Positive', coverage: 98 },
                  { topic: 'Cultural Exchange', sentiment: 'Positive', coverage: 78 },
                  { topic: 'Geopolitics', sentiment: 'Neutral', coverage: 45 },
                ].map((t: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-platinum-500-200">{t.topic}</span>
                      <Badge variant="outline" className="border-emerald-500/50 text-emerald-500">{t.sentiment}</Badge>
                    </div>
                    <div className="h-2 bg-platinum-700 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${t.coverage}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
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
