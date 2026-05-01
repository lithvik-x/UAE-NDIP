// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, Languages, AlertTriangle, MessageSquare, ArrowLeftRight, BookOpen } from 'lucide-react'
import { useCodeSwitchingData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function CodeSwitchingPage() {
  const { data } = useCodeSwitchingData()
  const { metrics, commonPatterns, languagePairs } = data || { metrics: {}, commonPatterns: [], languagePairs: [] }

  const patternData = commonPatterns?.slice(0, 6) || [
    { pattern: 'Arabic-English', frequency: 'Very High', context: 'Business/Media', impact: 'Positive' },
    { pattern: 'English-Arabic', frequency: 'High', context: 'Social Media', impact: 'Neutral' },
    { pattern: 'Hindi-English', frequency: 'High', context: 'Expat Communities', impact: 'Positive' },
    { pattern: 'Tagalog-English', frequency: 'Medium', context: 'Service Industry', impact: 'Neutral' },
    { pattern: 'Urdu-English', frequency: 'Medium', context: 'South Asian Expats', impact: 'Positive' },
    { pattern: 'Russian-English', frequency: 'Low', context: 'Newcomers', impact: 'Neutral' },
  ]

  const pairData = languagePairs || [
    { pair: 'Arabic-English', percentage: 45, speakers: '2.1M', trend: 'Stable' },
    { pair: 'Hindi-English', percentage: 28, speakers: '850K', trend: 'Growing' },
    { pair: 'Tagalog-English', percentage: 12, speakers: '400K', trend: 'Stable' },
    { pair: 'Urdu-English', percentage: 8, speakers: '280K', trend: 'Growing' },
    { pair: 'Other', percentage: 7, speakers: 'N/A', trend: 'Variable' },
  ]

  const sentimentData = [
    { name: 'Positive', value: 55, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 35, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 10, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-cyan-500/20 to-teal-600/20 text-cyan-400 border-cyan-500/50">
            <Languages className="w-3 h-3 mr-1" />
            LINGUISTICS
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Code-Switching
            </span>
          </h1>
          <p className="mt-2 text-platinum-500-400">Code-switching patterns in UAE communications — language mixing in multilingual contexts</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Bilingual Speakers" value={metrics?.bilingual || '3.5M'} icon={<Globe className="h-6 w-6" />} gradient="teal" />
        <MetricCard title="Code-Switch Rate" value={metrics?.rate || '68%'} icon={<ArrowLeftRight className="h-6 w-6" />} gradient="cyan" />
        <MetricCard title="Primary Pairs" value={metrics?.pairs || '12'} icon={<Languages className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Media Usage" value={metrics?.media || 'HIGH'} icon={<MessageSquare className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Business Context" value={metrics?.business || 'COMMON'} icon={<BookOpen className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'LOW'} icon={<AlertTriangle className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="languages">Language Pairs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Code-Switching Overview" description="Language mixing patterns in UAE multilingual communications">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><ArrowLeftRight className="h-5 w-5 text-cyan-500" />Frequency</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Languages className="h-5 w-5 text-teal-500" />Context Usage</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3 text-sm text-platinum-500-300">
                      <div className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-cyan-500" />Business meetings: 78% code-switch</div>
                      <div className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-cyan-500" />Social media: 85% code-switch</div>
                      <div className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-cyan-500" />Customer service: 92% code-switch</div>
                      <div className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-cyan-500" />Academic: 45% code-switch</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Common Code-Switching Patterns" description="Frequent language mixing patterns in UAE">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {patternData.map((p: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-cyan-500/10 to-teal-600/5 p-4 border border-cyan-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-500-100 font-rajdhani">{p.pattern}</span>
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">{p.frequency}</Badge>
                      </div>
                      <p className="text-sm text-cyan-400 mb-1">Context: {p.context}</p>
                      <p className="text-xs text-platinum-500-400">Impact: <span className={p.impact === 'Positive' ? 'text-emerald-500' : 'text-platinum-500'}>{p.impact}</span></p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="languages" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Language Pairs Distribution" description="Code-switching by language pair">
              <div className="space-y-4">
                {pairData.map((p: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-500-200">{p.pair}</span>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="border-teal-500/50 text-teal-500">{p.speakers}</Badge>
                        <Badge variant="outline" className={`border-${p.trend === 'Growing' ? 'emerald' : p.trend === 'Stable' ? 'platinum' : 'rose'}-500/50`}>{p.trend}</Badge>
                        <span className="text-lg font-bold text-platinum-500-100">{p.percentage}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${p.percentage}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-teal-500" />
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
