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
import { useRussianData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function RussianPage() {
  const { data } = useRussianData()
  const { metrics, keyPhrases, sentimentByTopic } = data || { metrics: {}, keyPhrases: [], sentimentByTopic: [] }

  const phraseData = keyPhrases?.slice(0, 6) || [
    { phrase: 'Как дела?', transliteration: 'Kak dela?', translation: 'How are you?', context: 'Casual greeting' },
    { phrase: 'Спасибо', transliteration: 'Spasibo', translation: 'Thank you', context: 'Gratitude' },
    { phrase: 'Да / Нет', transliteration: 'Da / Nyet', translation: 'Yes / No', context: 'Agreement' },
    { phrase: 'Пожалуйста', transliteration: 'Pozhaluysta', translation: 'Please / You\'re welcome', context: 'Politeness' },
    { phrase: 'Извините', transliteration: 'Izvinite', translation: 'Excuse me / Sorry', context: 'Apology' },
  ]

  const topicData = sentimentByTopic || [
    { topic: 'Business', sentiment: 'Positive', coverage: 82 },
    { topic: 'Tourism', sentiment: 'Positive', coverage: 91 },
    { topic: 'Real Estate', sentiment: 'Positive', coverage: 88 },
    { topic: 'Politics', sentiment: 'Cautious', coverage: 45 },
    { topic: 'Sanctions', sentiment: 'Negative', coverage: 38 },
  ]

  const sentimentData = [
    { name: 'Positive', value: 58, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 28, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 14, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 text-navy-400 border-navy-500/50">
            <Globe className="w-3 h-3 mr-1" />
            SLAVIC INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Russian Language
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Russian language intelligence — Russian expat community, sanctions context, and UAE-Russia relations</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Russian Expats" value={metrics?.population || '180K'} icon={<Users className="h-6 w-6" />} gradient="blue" />
        <MetricCard title="Sanctions Risk" value={metrics?.sanctionsRisk || 'HIGH'} icon={<Shield className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Business Context" value={metrics?.business || 'SIGNIFICANT'} icon={<TrendingUp className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Tourism Share" value={metrics?.tourism || '12%'} icon={<Globe className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Real Estate" value={metrics?.property || '8%'} icon={<BookOpen className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'MEDIUM'} icon={<AlertTriangle className="h-6 w-6" />} gradient="orange" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="phrases">Key Phrases</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Russian Language Overview" description="Russian-speaking community intelligence in UAE">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><TrendingUp className="h-5 w-5 text-emerald-500" />Sentiment</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><BookOpen className="h-5 w-5 text-navy-500" />Context Notes</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3 text-sm text-platinum-300">
                      <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald-500" />Post-2022 migration wave: significant increase</div>
                      <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald-500" />Dubai: primary destination for Russians</div>
                      <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-rose-500" />Sanctions evasion concerns elevated</div>
                      <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald-500" />Real estate: significant buyer segment</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="phrases" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Key Russian Phrases" description="Essential phrases for UAE context">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {phraseData.map((p: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-600/5 p-4 border border-navy-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-100 font-rajdhani">{p.phrase}</span>
                        <Badge variant="outline" className="border-navy-500/50 text-navy-400">{p.transliteration}</Badge>
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
            <GlassPanel title="Topic Sentiment" description="Russian language sentiment by topic">
              <div className="space-y-4">
                {topicData.map((t: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-200">{t.topic}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`${t.sentiment === 'Positive' ? 'border-emerald-500/50 text-emerald-500' : t.sentiment === 'Negative' ? 'border-rose-500/50 text-rose-500' : 'border-platinum-500/50 text-platinum-500'}`}>{t.sentiment}</Badge>
                        <span className="text-lg font-bold text-platinum-100">{t.coverage}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${t.coverage}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
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
