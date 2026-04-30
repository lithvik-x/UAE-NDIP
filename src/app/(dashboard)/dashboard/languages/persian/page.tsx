// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, MessageSquare, TrendingUp, AlertTriangle, BookOpen, ShieldAlert, Users } from 'lucide-react'
import { usePersianData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function PersianPage() {
  const { data } = usePersianData()
  const { metrics, keyPhrases, sentimentByTopic, usagePatterns } = data || { metrics: {}, keyPhrases: [], sentimentByTopic: [], usagePatterns: [] }

  const phraseData = keyPhrases?.slice(0, 6) || [
    { phrase: 'اخبار', transliteration: 'Akhbar', translation: 'News', context: 'General inquiry' },
    { phrase: 'حال شما چطوره', transliteration: 'Haal-e shoma chetore', translation: 'How are you?', context: 'Formal greeting' },
    { phrase: 'ممنون', transliteration: 'Mamnoon', translation: 'Thank you', context: 'Gratitude' },
    { phrase: 'لطفا', transliteration: 'Lotfan', translation: 'Please', context: 'Politeness' },
    { phrase: 'بله / نه', transliteration: 'Bale / Na', translation: 'Yes / No', context: 'Agreement' },
  ]

  const sentimentData = [
    { name: 'Positive', value: 25, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 35, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 40, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-red-500/20 to-rose-600/20 text-red-400 border-red-500/50">
            <Globe className="w-3 h-3 mr-1" />
            FARSILAT INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Persian (Farsi)
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Persian language intelligence — Iran-UAE diplomatic context, regional security implications</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Iranian Expats" value={metrics?.population || '450K'} icon={<Users className="h-6 w-6" />} gradient="red" />
        <MetricCard title="Diplomatic Risk" value={metrics?.risk || 'ELEVATED'} icon={<ShieldAlert className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Monitoring Level" value={metrics?.monitoring || 'HIGH'} icon={<AlertTriangle className="h-6 w-6" />} gradient="orange" status="warning" />
        <MetricCard title="Cultural Context" value={metrics?.cultural || 'SENSITIVE'} icon={<BookOpen className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Usage Context" value={metrics?.usage || 'SPECIFIC'} icon={<MessageSquare className="h-6 w-6" />} gradient="slate" />
        <MetricCard title="Sentiment" value={metrics?.sentiment || 'CAUTIOUS'} icon={<TrendingUp className="h-6 w-6" />} gradient="amber" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="phrases">Key Phrases</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Persian Language Overview" description="Iranian community intelligence and regional dynamics">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><TrendingUp className="h-5 w-5 text-rose-500" />Sentiment</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Globe className="h-5 w-5 text-red-500" />Key Context</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-platinum-300"><AlertTriangle className="h-4 w-4 text-rose" />Iran-UAE relations: complex, economic ties</div>
                      <div className="flex items-center gap-2 text-sm text-platinum-300"><AlertTriangle className="h-4 w-4 text-rose" />Sanctions monitoring active</div>
                      <div className="flex items-center gap-2 text-sm text-platinum-300"><AlertTriangle className="h-4 w-4 text-rose" />1M+ Iranians in UAE (estimates vary)</div>
                      <div className="flex items-center gap-2 text-sm text-platinum-300"><AlertTriangle className="h-4 w-4 text-rose" />Dubai: major Iran trade hub</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="phrases" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Key Persian Phrases" description="Essential phrases with transliteration">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {phraseData.map((p: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-red-500/10 to-rose-600/5 p-4 border border-red-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-100 font-rajdhani">{p.phrase}</span>
                        <Badge variant="outline" className="border-red-500/50 text-red-400">{p.transliteration}</Badge>
                      </div>
                      <p className="text-sm text-cyan-400 mb-1">{p.translation}</p>
                      <p className="text-xs text-platinum-400">Context: {p.context}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="topics" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Topic Sensitivity" description="Persian language topic risk assessment">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { topic: 'Nuclear Program', risk: 'CRITICAL', sentiment: 'Negative' },
                  { topic: 'Regional Politics', risk: 'HIGH', sentiment: 'Negative' },
                  { topic: 'Sanctions', risk: 'HIGH', sentiment: 'Concerned' },
                  { topic: 'Trade Relations', risk: 'MEDIUM', sentiment: 'Neutral' },
                  { topic: 'Cultural Exchange', risk: 'LOW', sentiment: 'Positive' },
                  { topic: 'Family/Personal', risk: 'LOW', sentiment: 'Neutral' },
                ].map((t: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="rounded-lg bg-slate-800/50 p-4 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-platinum-200">{t.topic}</span>
                      <Badge variant="outline" className={`${t.risk === 'CRITICAL' ? 'text-rose border-rose-500/50' : t.risk === 'HIGH' ? 'text-orange border-orange-500/50' : 'text-emerald border-emerald-500/50'}`}>{t.risk}</Badge>
                    </div>
                    <Badge variant="outline" className="text-xs border-platinum-500/50 text-platinum">{t.sentiment}</Badge>
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
