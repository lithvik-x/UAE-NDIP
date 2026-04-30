// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { MessageSquare, AlertTriangle, Send, Clock, Ban, Megaphone, Eye, Lock } from 'lucide-react'
import { useCommunicationCrisisData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function CommunicationCrisisPage() {
  const { data } = useCommunicationCrisisData()
  const { metrics, restrictions, outageIncidents, messagingGaps } = data || { metrics: {}, restrictions: [], outageIncidents: [], messagingGaps: [] }

  const restrictionData = restrictions || [
    { platform: 'WhatsApp VoIP', status: 'BLOCKED', since: '2017', alternative: 'BOTIM/Voico' },
    { platform: 'Facetime', status: 'BLOCKED', since: '2020', alternative: 'Botim' },
    { platform: 'Skype', status: 'BLOCKED', since: '2019', alternative: 'Zoom (approved)' },
    { platform: 'Zoom', status: 'PARTIAL', since: '2021', alternative: 'Business only' },
    { platform: 'Discord', status: 'PARTIAL', since: '2023', alternative: 'Monitored' },
    { platform: 'Telegram', status: 'MONITORED', since: '2018', alternative: 'Government channels' },
  ]

  const outageData = outageIncidents || [
    { incident: 'Internet Outage Feb 2024', duration: '6 hours', impact: 'Nationwide', cause: 'Technical fault' },
    { incident: 'WhatsApp Restricted Apr 2026', duration: '3 days', impact: 'VoIP users', cause: 'Security measure' },
    { incident: 'Social Media Slowdown Mar 2026', duration: '12 hours', impact: 'Expat community', cause: 'Unknown' },
    { incident: 'VPN Blocking Surge', duration: 'Ongoing', impact: 'VPN users', cause: 'Regulatory enforcement' },
  ]

  const sentimentData = [
    { name: 'Very Negative', value: 28, color: CHART_COLORS.rose },
    { name: 'Negative', value: 35, color: CHART_COLORS.orange },
    { name: 'Neutral', value: 27, color: CHART_COLORS.platinum },
    { name: 'Positive', value: 10, color: CHART_COLORS.emerald },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 text-amber-400 border-amber-500/50">
            <MessageSquare className="w-3 h-3 mr-1" />
            INFO CONTROL
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Communication Crisis
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Communication restrictions and information control intelligence — platform blocks, outages, and messaging gaps</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Blocked Platforms" value={metrics?.blocked || 8} icon={<Ban className="h-6 w-6" />} gradient="rose" status="error" />
        <MetricCard title="Outages (YTD)" value={metrics?.outages || 4} icon={<AlertTriangle className="h-6 w-6" />} gradient="orange" status="warning" />
        <MetricCard title="Impacted Users" value={metrics?.impacted || '4.2M'} icon={<MessageSquare className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Messaging Gaps" value={metrics?.gaps || 12} icon={<Lock className="h-6 w-6" />} gradient="amber" status="warning" />
        <MetricCard title="Restriction Level" value={metrics?.level || 'HIGH'} icon={<Eye className="h-6 w-6" />} gradient="rose" status="error" />
        <MetricCard title="Alt. Adoption" value={metrics?.alt || '+34%'} icon={<Send className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="restrictions">Restrictions</TabsTrigger>
          <TabsTrigger value="outages">Outages</TabsTrigger>
          <TabsTrigger value="gaps">Messaging Gaps</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Communication Crisis Overview" description="Information control landscape and user impact">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-rose-500" />Sentiment</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Ban className="h-5 w-5 text-amber-500" />Restrictions</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={restrictionData.slice(0,4)} xAxisKey="platform" bars={[{ dataKey: 1, name: 'Status', color: CHART_COLORS.amber }]} height={280} showGrid={true} /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="restrictions" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Platform Restrictions" description="Current communication platform status">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {restrictionData.map((r: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4 border border-slate-700/50">
                      <div className="flex items-center gap-3">
                        <Ban className={`h-5 w-5 ${r.status === 'BLOCKED' ? 'text-rose' : r.status === 'PARTIAL' ? 'text-orange' : 'text-gold'}`} />
                        <div>
                          <p className="font-medium text-platinum-200">{r.platform}</p>
                          <p className="text-xs text-platinum-400">Since {r.since} • {r.alternative}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={`${r.status === 'BLOCKED' ? 'text-rose border-rose-500/50' : r.status === 'PARTIAL' ? 'text-orange border-orange-500/50' : 'text-gold border-gold-500/50'}`}>{r.status}</Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="outages" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Communication Outages" description="Recent connectivity disruptions">
              <div className="space-y-3">
                {outageData.map((o: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-600/5 p-4 border border-amber-500/30">
                    <Clock className="h-5 w-5 text-amber-400 mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-platinum-200">{o.incident}</h4>
                        <Badge variant="outline" className="border-amber-500/50 text-amber-400">{o.duration}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-platinum-400">
                        <span>Impact: {o.impact}</span>
                        <span>Cause: {o.cause}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="gaps" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Messaging Gaps" description="Information flow disruptions">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { gap: 'WhatsApp Group Monitoring', impact: 'HIGH', affected: 'Expat community' },
                  { gap: 'VPN Detection', impact: 'HIGH', affected: 'Remote workers' },
                  { gap: 'VoIP Alternatives Limited', impact: 'MEDIUM', affected: 'Business users' },
                  { gap: 'International News Access', impact: 'MEDIUM', affected: 'Media consumers' },
                  { gap: 'Social Media API Limits', impact: 'LOW', affected: 'Researchers' },
                  { gap: 'Encrypted Channel Restrictions', impact: 'MEDIUM', affected: 'Activists' },
                ].map((g: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-platinum-200 text-sm">{g.gap}</h4>
                      <Badge variant="outline" className={`${g.impact === 'HIGH' ? 'text-rose border-rose-500/50' : 'text-orange border-orange-500/50'}`}>{g.impact}</Badge>
                    </div>
                    <p className="text-xs text-platinum-400">{g.affected}</p>
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
