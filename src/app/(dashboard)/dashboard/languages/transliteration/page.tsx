// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, Languages, AlertTriangle, BookOpen, MessageSquare, ArrowLeftRight } from 'lucide-react'
import { useTransliterationData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function TransliterationPage() {
  const { data } = useTransliterationData()
  const { metrics, commonTerms, errorPatterns } = data || { metrics: {}, commonTerms: [], errorPatterns: [] }

  const termData = commonTerms?.slice(0, 8) || [
    { arabic: 'الإمارات', transliteration: 'Al-Imarat', translation: 'The Emirates (UAE)', context: 'Formal name' },
    { arabic: 'دبي', transliteration: 'Dubai', translation: 'Dubai', context: 'City name' },
    { arabic: 'أبوظبي', transliteration: 'Abu Dhabi', translation: 'Abu Dhabi', context: 'City name' },
    { arabic: 'حمد', transliteration: 'Hamad', translation: 'Blessed/Praise', context: 'Common name prefix' },
    { arabic: 'خليفة', transliteration: 'Khalifa', translation: 'Succession/Inheritor', context: 'Royal title' },
    { arabic: 'بن', transliteration: 'Bin', translation: 'Son of', context: 'Patronymic' },
    { arabic: 'آل', transliteration: 'Al-', translation: 'The (family)', context: 'Definite article' },
  ]

  const errorData = errorPatterns || [
    { error: 'Imara vs Emirate', impact: 'HIGH', frequency: 'Common' },
    { error: 'Abu Dhabi spelling', impact: 'MEDIUM', frequency: 'Moderate' },
    { error: 'Al Ain transliteration', impact: 'LOW', frequency: 'Occasional' },
    { error: 'Mohammed variations', impact: 'HIGH', frequency: 'Very common' },
    { error: 'Thani vs Second', impact: 'MEDIUM', frequency: 'Occasional' },
  ]

  const sentimentData = [
    { name: 'Accurate', value: 65, color: CHART_COLORS.emerald },
    { name: 'Acceptable', value: 25, color: CHART_COLORS.gold },
    { name: 'Problematic', value: 10, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-violet-500/20 to-purple-600/20 text-violet-400 border-violet-500/50">
            <Languages className="w-3 h-3 mr-1" />
            LINGUISTICS
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Transliteration
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Arabic transliteration intelligence — standardization, error patterns, and naming conventions</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Standardization" value={metrics?.standard || '65%'} icon={<BookOpen className="h-6 w-6" />} gradient="violet" />
        <MetricCard title="Error Rate" value={metrics?.errorRate || '12%'} icon={<AlertTriangle className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Key Terms" value={metrics?.terms || 156} icon={<Globe className="h-6 w-6" />} gradient="purple" />
        <MetricCard title="Context Issues" value={metrics?.context || 34} icon={<MessageSquare className="h-6 w-6" />} gradient="amber" />
        <MetricCard title="Official Standards" value={metrics?.official || 'ADEC'} icon={<BookOpen className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'LOW'} icon={<AlertTriangle className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="terms">Key Terms</TabsTrigger>
          <TabsTrigger value="errors">Error Patterns</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Transliteration Overview" description="Arabic to Latin script standardization">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><BookOpen className="h-5 w-5 text-emerald-500" />Accuracy</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><ArrowLeftRight className="h-5 w-5 text-violet-500" />Standards</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3 text-sm text-platinum-300">
                      <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-emerald" />ADEC: Official UAE standard</div>
                      <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-emerald" />BGN/PCGN: US/UK standard</div>
                      <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-emerald" />ISO 233: International standard</div>
                      <div className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-amber" />Mixed usage creates confusion</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="terms" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Key Transliteration Terms" description="Standard Arabic terms and accepted transliterations">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {termData.map((t: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-600/5 p-4 border border-violet-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-100 font-rajdhani">{t.arabic}</span>
                        <Badge variant="outline" className="border-violet-500/50 text-violet-400">{t.transliteration}</Badge>
                      </div>
                      <p className="text-sm text-cyan-400 mb-1">{t.translation}</p>
                      <p className="text-xs text-platinum-400">Context: {t.context}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="errors" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Error Patterns" description="Common transliteration errors and their impact">
              <div className="space-y-3">
                {errorData.map((e: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className={`h-5 w-5 ${e.impact === 'HIGH' ? 'text-rose' : 'text-amber'}`} />
                      <span className="text-platinum-200">{e.error}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={`${e.impact === 'HIGH' ? 'text-rose border-rose-500/50' : 'text-amber border-amber-500/50'}`}>{e.impact}</Badge>
                      <Badge variant="outline" className="border-platinum-500/50 text-platinum">{e.frequency}</Badge>
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
