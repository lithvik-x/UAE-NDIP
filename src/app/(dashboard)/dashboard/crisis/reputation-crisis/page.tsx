// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { ShieldAlert, TrendingDown, MessageSquare, Globe, AlertTriangle, Eye, Users, Megaphone } from 'lucide-react'
import { useReputationCrisisData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function ReputationCrisisPage() {
  const { data } = useReputationCrisisData()
  const { metrics, crisisIncidents, sentimentImpact, mediaCoverage } = data || { metrics: {}, crisisIncidents: [], sentimentImpact: [], mediaCoverage: [] }

  const incidentData = crisisIncidents?.slice(0, 6) || [
    { incident: 'Human Rights Report Release', severity: 'CRITICAL', spread: 'Global', date: 'Mar 2026', sentiment: -34 },
    { incident: 'Labor Camp Conditions Exposé', severity: 'HIGH', spread: 'International', date: 'Feb 2026', sentiment: -28 },
    { incident: 'Environmental Incident', severity: 'HIGH', spread: 'Regional', date: 'Jan 2026', sentiment: -18 },
    { incident: 'Foreign Worker Deaths', severity: 'CRITICAL', spread: 'Global', date: 'Dec 2025', sentiment: -45 },
    { incident: 'Sportswashing Allegations', severity: 'MEDIUM', spread: 'Western Media', date: 'Nov 2025', sentiment: -15 },
  ]

  const coverageData = mediaCoverage?.slice(0, 5) || [
    { outlet: 'Western Media (UK/US)', mentions: 1250, sentiment: -42 },
    { outlet: 'Regional Media', mentions: 340, sentiment: -8 },
    { outlet: 'Social Media', mentions: 8900, sentiment: -22 },
    { outlet: 'Human Rights Org', mentions: 456, sentiment: -67 },
    { outlet: 'Government Channels', mentions: 234, sentiment: +15 },
  ]

  const sentimentData = [
    { name: 'Critical Negative', value: 18, color: CHART_COLORS.rose },
    { name: 'Negative', value: 32, color: CHART_COLORS.orange },
    { name: 'Neutral', value: 35, color: CHART_COLORS.platinum },
    { name: 'Positive', value: 15, color: CHART_COLORS.emerald },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-violet-500/20 to-purple-600/20 text-violet-400 border-violet-500/50">
            <ShieldAlert className="w-3 h-3 mr-1" />
            NARRATIVE RISK
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Reputation Crisis
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Reputation risk intelligence — negative narratives, media crises, and sentiment damage assessment</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Active Crises" value={metrics?.active || 2} icon={<ShieldAlert className="h-6 w-6" />} gradient="rose" status="error" />
        <MetricCard title="Sentiment Score" value={metrics?.sentiment || '-18'} icon={<TrendingDown className="h-6 w-6" />} gradient="red" status="error" />
        <MetricCard title="Global Mentions" value={metrics?.mentions || '11.2K'} icon={<Globe className="h-6 w-6" />} gradient="violet" />
        <MetricCard title="Crisis Level" value={metrics?.level || 'HIGH'} icon={<AlertTriangle className="h-6 w-6" />} gradient="rose" status="error" />
        <MetricCard title="Response Time" value={metrics?.response || '2.4h'} icon={<MessageSquare className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Mitigation Rate" value={metrics?.mitigation || '67%'} icon={<Megaphone className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
          <TabsTrigger value="coverage">Media Coverage</TabsTrigger>
          <TabsTrigger value="mitigation">Mitigation</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Reputation Crisis Overview" description="Narrative risk and sentiment damage assessment">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><TrendingDown className="h-5 w-5 text-rose-500" />Sentiment Impact</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Globe className="h-5 w-5 text-violet-500" />Media Mentions</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={coverageData.slice(0,4)} xAxisKey="outlet" bars={[{ dataKey: 'mentions', name: 'Mentions', color: CHART_COLORS.violet }]} height={280} showGrid={true} /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="incidents" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Crisis Incidents" description="Active and recent reputation crises">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {incidentData.map((i: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="flex items-start gap-4 rounded-lg bg-gradient-to-r from-rose-500/10 to-purple-600/5 p-4 border border-rose-500/30">
                      <ShieldAlert className={`h-5 w-5 mt-0.5 shrink-0 ${i.severity === 'CRITICAL' ? 'text-rose' : 'text-orange'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-platinum-200">{i.incident}</h4>
                          <Badge variant="outline" className={`${i.severity === 'CRITICAL' ? 'text-rose border-rose-500/50' : 'text-orange border-orange-500/50'}`}>{i.severity}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-platinum-400">
                          <span>{i.spread}</span>
                          <span>{i.date}</span>
                          <Badge variant="outline" className={i.sentiment < 0 ? 'text-rose border-rose-500/50' : 'text-emerald border-emerald-500/50'}>{i.sentiment > 0 ? '+' : ''}{i.sentiment}pts</Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="coverage" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Media Coverage" description="Coverage by source and sentiment">
              <div className="space-y-4">
                {coverageData.map((c: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-200">{c.outlet}</span>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="border-violet-500/50 text-violet-400">{c.mentions.toLocaleString()}</Badge>
                        <Badge variant="outline" className={c.sentiment < 0 ? 'text-rose border-rose-500/50' : 'text-emerald border-emerald-500/50'}>{c.sentiment > 0 ? '+' : ''}{c.sentiment}</Badge>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min((c.mentions / 10000) * 100, 100)}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className={`h-full rounded-full ${c.sentiment < -30 ? 'bg-rose-500' : c.sentiment < -10 ? 'bg-orange-500' : 'bg-emerald-500'}`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="mitigation" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Mitigation Efforts" description="Reputation management and response">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { strategy: 'Official Statements', effectiveness: 72, speed: 'Fast' },
                  { strategy: 'Positive Narrative Push', effectiveness: 68, speed: 'Medium' },
                  { strategy: 'Influencer Engagement', effectiveness: 55, speed: 'Slow' },
                  { strategy: 'Media Relationships', effectiveness: 78, speed: 'Medium' },
                  { strategy: 'Social Media Campaign', effectiveness: 62, speed: 'Fast' },
                  { strategy: 'International PR', effectiveness: 45, speed: 'Very Slow' },
                ].map((m: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-platinum-200">{m.strategy}</h4>
                      <Badge variant="outline" className="border-emerald-500/50 text-emerald">{m.effectiveness}%</Badge>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${m.effectiveness}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
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
