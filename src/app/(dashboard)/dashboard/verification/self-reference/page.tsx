// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, ShieldCheck, AlertTriangle, Search, FileText, Link2 } from 'lucide-react'
import { useSelfReferenceData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function SelfReferencePage() {
  const { data } = useSelfReferenceData()
  const { metrics, patterns, sources } = data || { metrics: {}, patterns: [], sources: [] }

  const patternData = patterns || [
    { pattern: 'Official Statements', frequency: 'Very High', accuracy: 98, context: 'Government' },
    { pattern: 'Press Releases', frequency: 'High', accuracy: 95, context: 'Media' },
    { pattern: 'Social Media Posts', frequency: 'High', accuracy: 72, context: 'Public' },
    { pattern: 'News Articles', frequency: 'Medium', accuracy: 85, context: 'Media' },
    { pattern: 'Blog Posts', frequency: 'Medium', accuracy: 68, context: 'Opinion' },
    { pattern: 'Forum Comments', frequency: 'Low', accuracy: 55, context: 'Public' },
  ]

  const sourceData = sources || [
    { source: 'Government Websites', selfRefs: 1250, accuracy: 98 },
    { source: 'Official News', selfRefs: 890, accuracy: 94 },
    { source: 'Press Agencies', selfRefs: 650, accuracy: 91 },
    { source: 'Semi-Government', selfRefs: 420, accuracy: 85 },
    { source: 'Private Media', selfRefs: 280, accuracy: 72 },
  ]

  const sentimentData = [
    { name: 'High Accuracy', value: 65, color: CHART_COLORS.emerald },
    { name: 'Medium Accuracy', value: 25, color: CHART_COLORS.gold },
    { name: 'Low Accuracy', value: 10, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-cyan-500/20 to-sky-600/20 text-cyan-400 border-cyan-500/50">
            <ShieldCheck className="w-3 h-3 mr-1" />
            VERIFICATION
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Self-Reference Analysis
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Self-reference verification — tracking how UAE sources cite and reference themselves</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Self-References" value={metrics?.total || '3,490'} icon={<Link2 className="h-6 w-6" />} gradient="cyan" />
        <MetricCard title="Verification Rate" value={metrics?.verification || '94%'} icon={<ShieldCheck className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Accuracy" value={metrics?.accuracy || '89%'} icon={<FileText className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Patterns" value={metrics?.patterns || '156'} icon={<Search className="h-6 w-6" />} gradient="violet" />
        <MetricCard title="Cross-Reference" value={metrics?.crossRef || '78%'} icon={<Globe className="h-6 w-6" />} gradient="teal" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'LOW'} icon={<AlertTriangle className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="patterns">Patterns</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Self-Reference Overview" description="Internal citation and self-reference patterns">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-emerald-500" />Accuracy Distribution</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Link2 className="h-5 w-5 text-cyan-500" />Key Findings</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3 text-sm text-platinum-300">
                      <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-500" />Government sources: highest accuracy</div>
                      <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-500" />Press releases: very reliable</div>
                      <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-cyan-500" />Cross-referencing common</div>
                      <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-rose-500" />Social media: verification needed</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Self-Reference Patterns" description="Common patterns of self-citation">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {patternData.map((p: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-cyan-500/10 to-sky-600/5 p-4 border border-cyan-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-100 font-rajdhani">{p.pattern}</span>
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">{p.frequency}</Badge>
                      </div>
                      <p className="text-sm text-platinum-400 mb-1">Context: {p.context}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-platinum-400">Accuracy:</span>
                        <div className="h-2 bg-platinum-800 rounded-full overflow-hidden flex-1">
                          <motion.div initial={{ width: 0 }} animate={{ width: `${p.accuracy}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                            className={`h-full rounded-full ${p.accuracy >= 90 ? 'bg-emerald-500' : p.accuracy >= 75 ? 'bg-gold' : 'bg-rose-500'}`} />
                        </div>
                        <span className="text-xs text-platinum-100">{p.accuracy}%</span>
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
            <GlassPanel title="Source Analysis" description="Self-reference metrics by source type">
              <div className="space-y-4">
                {sourceData.map((s: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-200">{s.source}</span>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-500">{s.selfRefs}</Badge>
                        <span className="text-lg font-bold text-platinum-100">{s.accuracy}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${s.accuracy}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-500" />
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
