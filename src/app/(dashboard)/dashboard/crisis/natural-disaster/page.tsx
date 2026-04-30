// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Cloud, AlertTriangle, Wind, Droplets, Sun, Thermometer, Umbrella, Waves } from 'lucide-react'
import { useNaturalDisasterData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function NaturalDisasterPage() {
  const { data } = useNaturalDisasterData()
  const { metrics, historicalEvents, riskZones, preparedness } = data || { metrics: {}, historicalEvents: [], riskZones: [], preparedness: {} }

  const eventData = historicalEvents?.slice(0, 8) || [
    { event: 'UAE Flooding 2024', type: 'Flood', severity: 'MAJOR', date: 'Apr 2024', impact: 'Widespread damage, 4 deaths' },
    { event: 'Sandstorm Alpha', type: 'Sandstorm', severity: 'MODERATE', date: 'Mar 2024', impact: 'Reduced visibility, travel disruptions' },
    { event: 'Heat Wave Delta', type: 'Extreme Heat', severity: 'HIGH', date: 'Jul 2023', impact: 'Record 51°C, 3 heat-related deaths' },
    { event: 'Cyclone Biparjoy', type: 'Cyclone', severity: 'MODERATE', date: 'Jun 2023', impact: 'Coastal flooding, infrastructure damage' },
    { event: 'Sandstorm Beta', type: 'Sandstorm', severity: 'LOW', date: 'Feb 2023', impact: 'Moderate visibility reduction' },
    { event: 'UAE Flooding 2022', type: 'Flood', severity: 'MAJOR', date: 'Jan 2022', impact: 'Major infrastructure damage' },
  ]

  const riskData = riskZones || [
    { zone: 'Coastal (Dubai/Abu Dhabi)', risk: 'Flooding/Cyclone', vulnerability: 'HIGH', population: '2.1M' },
    { zone: 'Al Ain Region', risk: 'Flash Flood', vulnerability: 'MEDIUM', population: '720K' },
    { zone: 'Western Region', risk: 'Sandstorm', vulnerability: 'LOW', population: '45K' },
    { zone: 'Mountainous (Fujairah)', risk: 'Landslide/Flood', vulnerability: 'HIGH', population: '180K' },
    { zone: 'Northern Emirates', risk: 'Extreme Heat', vulnerability: 'MEDIUM', population: '890K' },
  ]

  const sentimentData = [
    { name: 'Well Prepared', value: 35, color: CHART_COLORS.emerald },
    { name: 'Moderate Risk', value: 42, color: CHART_COLORS.gold },
    { name: 'High Concern', value: 23, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-sky-500/20 to-blue-600/20 text-sky-400 border-sky-500/50">
            <Cloud className="w-3 h-3 mr-1" />
            EMERGENCY MANAGEMENT
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Natural Disaster
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Natural disaster risk intelligence — climate events, vulnerability mapping, and emergency preparedness</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Risk Score" value={metrics?.riskScore || 'MEDIUM'} icon={<AlertTriangle className="h-6 w-6" />} gradient="gold" status="warning" />
        <MetricCard title="Active Threats" value={metrics?.active || 2} icon={<Wind className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="At-Risk Population" value={metrics?.atRisk || '3.9M'} icon={<Umbrella className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Response Capacity" value={metrics?.capacity || '85%'} icon={<Waves className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Warning Systems" value={metrics?.systems || 12} icon={<Cloud className="h-6 w-6" />} gradient="blue" />
        <MetricCard title="Recent Events" value={metrics?.recent || 6} icon={<AlertTriangle className="h-6 w-6" />} gradient="orange" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Historical Events</TabsTrigger>
          <TabsTrigger value="risk">Risk Zones</TabsTrigger>
          <TabsTrigger value="preparedness">Preparedness</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Natural Disaster Intelligence" description="Climate risk and vulnerability assessment">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-rose-500" />Risk Sentiment</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Waves className="h-5 w-5 text-sky-500" />Event Frequency</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={eventData.slice(0,5)} xAxisKey="event" bars={[{ dataKey: 'severity' === 'MAJOR' ? 3 : 'severity' === 'HIGH' ? 2 : 1, name: 'Severity', color: CHART_COLORS.sky }]} height={280} showGrid={true} /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Historical Events" description="Recent natural disaster events in UAE">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {eventData.map((e: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4 border border-slate-700/50">
                      <AlertTriangle className={`h-5 w-5 mt-0.5 shrink-0 ${e.severity === 'MAJOR' ? 'text-rose' : e.severity === 'HIGH' ? 'text-orange' : 'text-gold'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-platinum-200">{e.event}</h4>
                          <Badge variant="outline" className={`${e.severity === 'MAJOR' ? 'text-rose border-rose-500/50' : e.severity === 'HIGH' ? 'text-orange border-orange-500/50' : 'text-gold border-gold-500/50'}`}>{e.severity}</Badge>
                        </div>
                        <p className="text-xs text-platinum-400 mb-1">{e.type} • {e.date}</p>
                        <p className="text-sm text-platinum-300">{e.impact}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="risk" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Risk Zones" description="Geographic vulnerability assessment">
              <div className="space-y-3">
                {riskData.map((r: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between rounded-lg bg-gradient-to-r from-sky-500/10 to-blue-600/5 p-4 border border-sky-500/30">
                    <div className="flex items-center gap-3">
                      <Waves className={`h-5 w-5 ${r.vulnerability === 'HIGH' ? 'text-rose' : r.vulnerability === 'MEDIUM' ? 'text-orange' : 'text-emerald'}`} />
                      <div>
                        <p className="font-medium text-platinum-200">{r.zone}</p>
                        <p className="text-xs text-platinum-400">{r.risk}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={`${r.vulnerability === 'HIGH' ? 'text-rose border-rose-500/50' : r.vulnerability === 'MEDIUM' ? 'text-orange border-orange-500/50' : 'text-emerald border-emerald-500/50'}`}>{r.vulnerability}</Badge>
                      <span className="text-sm text-platinum-400">{r.population}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="preparedness" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Emergency Preparedness" description="Response capacity and warning infrastructure">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { metric: 'Early Warning Coverage', value: '94%', status: 'good' },
                  { metric: 'Emergency Shelters', value: '156', status: 'good' },
                  { metric: 'Evacuation Routes', value: '42 mapped', status: 'good' },
                  { metric: 'NCM Response Time', value: '<15 min', status: 'good' },
                  { metric: 'Public Awareness', value: '67%', status: 'moderate' },
                  { metric: 'Infrastructure Hardening', value: '78%', status: 'good' },
                ].map((p: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4 border border-slate-700/50">
                    <span className="text-platinum-300">{p.metric}</span>
                    <Badge variant="outline" className={`${p.status === 'good' ? 'border-emerald-500/50 text-emerald' : 'border-orange-500/50 text-orange'}`}>{p.value}</Badge>
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
