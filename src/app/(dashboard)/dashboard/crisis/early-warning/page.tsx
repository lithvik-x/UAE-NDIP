// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { AlertTriangle, Radar, Bell, TrendingUp, Clock, ShieldAlert, Activity, Siren } from 'lucide-react'
import { useEarlyWarningData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function EarlyWarningPage() {
  const { data } = useEarlyWarningData()
  const { metrics, activeAlerts, threatIndicators, systemStatus } = data || { metrics: {}, activeAlerts: [], threatIndicators: [], systemStatus: {} }

  const alertData = activeAlerts?.slice(0, 6) || [
    { alert: 'Social Media Tension Spike', level: 'HIGH', timeframe: '48h', source: 'Twitter/X Monitoring' },
    { alert: 'Regional Geopolitical Shift', level: 'MEDIUM', timeframe: '72h', source: 'Intelligence Network' },
    { alert: 'Labor Dispute Escalation', level: 'HIGH', timeframe: '24h', source: 'Field Reports' },
    { alert: 'Negative Narrative Surge', level: 'MEDIUM', timeframe: 'Ongoing', source: 'Media Monitoring' },
    { alert: 'Sentiment Deterioration', level: 'LOW', timeframe: '1 week', source: 'Social Analytics' },
  ]

  const indicatorData = threatIndicators || [
    { indicator: 'Social Media Anger Keywords', value: '+34%', status: 'HIGH' },
    { indicator: 'Expat Grievance Posts', value: '+28%', status: 'HIGH' },
    { indicator: 'Critical News Coverage', value: '+18%', status: 'MEDIUM' },
    { indicator: 'Labor Dispute Reports', value: '+42%', status: 'CRITICAL' },
    { indicator: 'Negative Hashtag Velocity', value: '+56%', status: 'HIGH' },
    { indicator: 'Foreign Media Attention', value: '+12%', status: 'MEDIUM' },
  ]

  const systemData = [
    { system: 'Social Media Monitoring', coverage: 94, status: 'Operational' },
    { system: 'News Aggregation', coverage: 88, status: 'Operational' },
    { system: 'Field Intelligence', coverage: 62, status: 'Partial' },
    { system: 'Dark Web Monitoring', coverage: 45, status: 'Limited' },
    { system: 'Human Intelligence', coverage: 38, status: 'Limited' },
    { system: 'Satellite Imagery', coverage: 78, status: 'Operational' },
  ]

  const severityData = [
    { name: 'Critical', value: 2, color: CHART_COLORS.rose },
    { name: 'High', value: 4, color: CHART_COLORS.orange },
    { name: 'Medium', value: 6, color: CHART_COLORS.gold },
    { name: 'Low', value: 3, color: CHART_COLORS.emerald },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border-cyan-500/50">
            <Radar className="w-3 h-3 mr-1" />
            THREAT DETECTION
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Early Warning
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Early warning intelligence — threat indicators, active alerts, and预警 monitoring systems</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Active Alerts" value={metrics?.alerts || 8} icon={<Siren className="h-6 w-6" />} gradient="rose" status="error" />
        <MetricCard title="Critical Threats" value={metrics?.critical || 2} icon={<AlertTriangle className="h-6 w-6" />} gradient="red" status="error" />
        <MetricCard title="System Coverage" value={metrics?.coverage || '68%'} icon={<Radar className="h-6 w-6" />} gradient="cyan" />
        <MetricCard title="Avg Response" value={metrics?.response || '2.1h'} icon={<Clock className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Prediction Accuracy" value={metrics?.accuracy || '82%'} icon={<TrendingUp className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Alert Level" value={metrics?.level || 'ELEVATED'} icon={<ShieldAlert className="h-6 w-6" />} gradient="orange" status="warning" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
          <TabsTrigger value="indicators">Threat Indicators</TabsTrigger>
          <TabsTrigger value="systems">Systems</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Early Warning Overview" description="Threat detection and预警 capability assessment">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-rose-500" />Alert Severity</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={severityData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Activity className="h-5 w-5 text-cyan-500" />Top Indicators</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={indicatorData.slice(0,4)} xAxisKey="indicator" bars={[{ dataKey: 1, name: 'Level', color: CHART_COLORS.cyan }]} height={280} showGrid={true} /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Active Alerts" description="Current threat alerts and warnings">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {alertData.map((a: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="flex items-start gap-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-600/5 p-4 border border-cyan-500/30">
                      <Bell className={`h-5 w-5 mt-0.5 shrink-0 ${a.level === 'HIGH' || a.level === 'CRITICAL' ? 'text-rose' : 'text-amber'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-platinum-200">{a.alert}</h4>
                          <Badge variant="outline" className={`${a.level === 'CRITICAL' ? 'text-rose border-rose-500/50' : a.level === 'HIGH' ? 'text-orange border-orange-500/50' : 'text-amber border-amber-500/50'}`}>{a.level}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-platinum-400">
                          <span>Timeframe: {a.timeframe}</span>
                          <span>Source: {a.source}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="indicators" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Threat Indicators" description="Quantitative threat signals">
              <div className="space-y-4">
                {indicatorData.map((i: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4 border border-slate-700/50">
                    <span className="text-platinum-200">{i.indicator}</span>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={`${i.status === 'CRITICAL' ? 'text-rose border-rose-500/50' : i.status === 'HIGH' ? 'text-orange border-orange-500/50' : 'text-amber border-amber-500/50'}`}>{i.status}</Badge>
                      <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">{i.value}</Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="systems" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Detection Systems" description="Early warning system status and coverage">
              <div className="grid gap-4 md:grid-cols-2">
                {systemData.map((s: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Radar className={`h-4 w-4 ${s.status === 'Operational' ? 'text-emerald' : 'text-amber'}`} />
                        <h4 className="font-medium text-platinum-200">{s.system}</h4>
                      </div>
                      <Badge variant="outline" className={`${s.status === 'Operational' ? 'border-emerald-500/50 text-emerald' : 'border-amber-500/50 text-amber'}`}>{s.status}</Badge>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${s.coverage}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className={`h-full rounded-full ${s.coverage > 80 ? 'bg-emerald-500' : s.coverage > 60 ? 'bg-cyan-500' : 'bg-amber-500'}`} />
                    </div>
                    <p className="text-xs text-platinum-400 mt-1">{s.coverage}% coverage</p>
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
