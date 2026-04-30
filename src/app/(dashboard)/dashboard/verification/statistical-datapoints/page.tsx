// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, LineChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, ShieldCheck, AlertTriangle, BarChart3, TrendingUp, Percent, Database } from 'lucide-react'
import { useStatisticalDataPointsData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function StatisticalDatapointsPage() {
  const { data } = useStatisticalDataPointsData()
  const { metrics, statistics, claims } = data || { metrics: {}, statistics: [], claims: [] }

  const statData = statistics || [
    { category: 'Economic', verified: 156, total: 162, accuracy: 96 },
    { category: 'Demographic', verified: 89, total: 92, accuracy: 97 },
    { category: 'Political', verified: 78, total: 85, accuracy: 92 },
    { category: 'Social', verified: 124, total: 135, accuracy: 92 },
    { category: 'Environmental', verified: 45, total: 52, accuracy: 87 },
    { category: 'Infrastructure', verified: 67, total: 72, accuracy: 93 },
  ]

  const claimData = claims || [
    { claim: 'GDP Growth Rate', value: '3.8%', source: 'Government', verified: true },
    { claim: 'Population Figure', value: '9.9M', source: 'Official Census', verified: true },
    { claim: 'Tourism Numbers', value: '17M', source: 'Tourism Board', verified: true },
    { claim: 'Renewable Capacity', value: '14GW', source: 'Ministry', verified: false },
    { claim: 'Trade Volume', value: '$800B', source: 'Customs', verified: true },
  ]

  const accuracyData = [
    { name: 'Verified', value: 72, color: CHART_COLORS.emerald },
    { name: 'Likely Accurate', value: 20, color: CHART_COLORS.gold },
    { name: 'Unverified', value: 8, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/50">
            <BarChart3 className="w-3 h-3 mr-1" />
            VERIFICATION
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Statistical Datapoints
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Statistical claim verification — tracking claims, data points, and numerical assertions in UAE media</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Total Claims" value={metrics?.total || '559'} icon={<Database className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Verified" value={metrics?.verified || '404'} icon={<ShieldCheck className="h-6 w-6" />} gradient="teal" />
        <MetricCard title="Accuracy" value={metrics?.accuracy || '92%'} icon={<Percent className="h-6 w-6" />} gradient="cyan" />
        <MetricCard title="Categories" value={metrics?.categories || '6'} icon={<BarChart3 className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Coverage" value={metrics?.coverage || 'BROAD'} icon={<Globe className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'LOW'} icon={<AlertTriangle className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="statistics">By Category</TabsTrigger>
          <TabsTrigger value="claims">Claims</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Statistical Verification Overview" description="Data point accuracy and coverage">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-emerald-500" />Verification Status</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={accuracyData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><TrendingUp className="h-5 w-5 text-teal-500" />Key Metrics</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3 text-sm text-platinum-300">
                      <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald" />Government data: highest accuracy</div>
                      <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald" />Economic statistics: most verified</div>
                      <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" />Environmental: needs more sources</div>
                      <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal" />Cross-validation active</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="statistics" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Statistics by Category" description="Verification accuracy by statistical domain">
              <div className="space-y-4">
                {statData.map((s: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-200">{s.category}</span>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald">{s.verified}/{s.total}</Badge>
                        <span className="text-lg font-bold text-platinum-100">{s.accuracy}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${s.accuracy}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="claims" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Notable Claims" description="Key statistical claims and their verification status">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {claimData.map((c: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-600/5 p-4 border border-emerald-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg text-platinum-100 font-rajdhani">{c.claim}</span>
                        <Badge variant="outline" className={`border-${c.verified ? 'emerald' : 'rose'}-500/50 text-${c.verified ? 'emerald' : 'rose'}`}>
                          {c.verified ? 'Verified' : 'Unverified'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-cyan-400 font-medium">{c.value}</span>
                        <span className="text-platinum-400">Source: {c.source}</span>
                      </div>
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
