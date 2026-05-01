// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, MessageSquare, TrendingUp, AlertTriangle, Sparkles, Heart, Sunrise } from 'lucide-react'
import { useHopeSentimentData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function HopeSentimentPage() {
  const { data } = useHopeSentimentData()
  const { metrics, hopeTopics, expressions } = data || { metrics: {}, hopeTopics: [], expressions: [] }

  const topicData = hopeTopics?.slice(0, 8) || [
    { topic: 'Vision 2030 Progress', sentiment: 'Hopeful', coverage: 88, trend: 'Up' },
    { topic: 'Economic Diversification', sentiment: 'Hopeful', coverage: 82, trend: 'Up' },
    { topic: 'Youth Empowerment', sentiment: 'Very Hopeful', coverage: 85, trend: 'Stable' },
    { topic: 'Sustainability Initiatives', sentiment: 'Hopeful', coverage: 78, trend: 'Up' },
    { topic: 'Innovation Hub Growth', sentiment: 'Very Hopeful', coverage: 90, trend: 'Up' },
    { topic: 'Global Expo Results', sentiment: 'Hopeful', coverage: 75, trend: 'Stable' },
    { topic: 'Tourism Recovery', sentiment: 'Very Hopeful', coverage: 92, trend: 'Up' },
    { topic: 'Education Reform', sentiment: 'Hopeful', coverage: 80, trend: 'Stable' },
  ]

  const expressionData = expressions || [
    { expression: 'المستقبل المشرق', transliteration: 'Bright Future', context: 'Optimism', frequency: 'Very High' },
    { expression: 'خطوة إيجابية', transliteration: 'Positive Step', context: 'Progress', frequency: 'High' },
    { expression: 'نجاحات متوالية', transliteration: 'Consecutive Successes', context: 'Achievement', frequency: 'High' },
    { expression: 'إيجابي', transliteration: 'Positive', context: 'General', frequency: 'Very High' },
    { expression: 'متفائل', transliteration: 'Optimistic', context: 'Outlook', frequency: 'High' },
  ]

  const sentimentData = [
    { name: 'Very Hopeful', value: 35, color: CHART_COLORS.emerald },
    { name: 'Hopeful', value: 45, color: CHART_COLORS.teal },
    { name: 'Cautiously Optimistic', value: 20, color: CHART_COLORS.teal },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/50">
            <Sparkles className="w-3 h-3 mr-1" />
            SENTIMENT
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Hope Sentiment
            </span>
          </h1>
          <p className="mt-2 text-platinum-500-400">Optimistic and aspirational sentiment — UAE's vision for the future and positive outlook communications</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Hope Index" value={metrics?.hopeIndex || '78%'} icon={<Sparkles className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Optimism" value={metrics?.optimism || 'HIGH'} icon={<Heart className="h-6 w-6" />} gradient="rose" />
        <MetricCard title="Vision Alignment" value={metrics?.vision || 'STRONG'} icon={<Sunrise className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Youth Sentiment" value={metrics?.youth || 'VERY HIGH'} icon={<TrendingUp className="h-6 w-6" />} gradient="teal" />
        <MetricCard title="Future Focus" value={metrics?.future || '85%'} icon={<Globe className="h-6 w-6" />} gradient="cyan" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'LOW'} icon={<AlertTriangle className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="topics">Hope Topics</TabsTrigger>
          <TabsTrigger value="expressions">Expressions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Hope Sentiment Overview" description="Optimistic communications and aspirational content">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Heart className="h-5 w-5 text-emerald-500" />Optimism Level</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Sparkles className="h-5 w-5 text-teal-500" />Key Drivers</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3 text-sm text-platinum-500-300">
                      <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-emerald-500" />Vision 2030 milestones achieved</div>
                      <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-emerald-500" />Economic diversification success</div>
                      <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-emerald-500" />Global leadership positioning</div>
                      <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-emerald-500" />Youth empowerment programs</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="topics" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Hope Topics Analysis" description="Topics driving optimistic sentiment">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {topicData.map((t: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-600/5 p-4 border border-emerald-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-500-100 font-rajdhani">{t.topic}</span>
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-500">{t.sentiment}</Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-platinum-500-400">Trend:</span>
                        <Badge variant="outline" className={`border-${t.trend === 'Up' ? 'emerald' : 'platinum'}-500/50 text-${t.trend === 'Up' ? 'emerald' : 'platinum'}`}>{t.trend}</Badge>
                      </div>
                      <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${t.coverage}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="expressions" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Hope Expressions" description="Arabic expressions conveying optimism and hope">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {expressionData.map((e: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                      className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-500-100 font-rajdhani">{e.expression}</span>
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-500">{e.frequency}</Badge>
                      </div>
                      <p className="text-sm text-cyan-400 mb-1">{e.transliteration}</p>
                      <p className="text-xs text-platinum-500-400">Context: {e.context}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
