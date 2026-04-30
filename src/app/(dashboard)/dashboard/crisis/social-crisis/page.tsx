// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Users, AlertTriangle, TrendingDown, Shield, Heart, Home, Briefcase } from 'lucide-react'
import { useSocialCrisisData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function SocialCrisisPage() {
  const { data } = useSocialCrisisData()
  const { metrics, crisisTypes, affectedGroups, supportServices } = data || { metrics: {}, crisisTypes: [], affectedGroups: [], supportServices: [] }

  const typeData = crisisTypes || [
    { type: 'Labor Disputes', severity: 'HIGH', cases: 234, trend: 'increasing' },
    { type: 'Family Disputes', severity: 'MEDIUM', cases: 189, trend: 'stable' },
    { type: 'Expat Grievances', severity: 'HIGH', cases: 156, trend: 'increasing' },
    { type: 'Housing Issues', severity: 'MEDIUM', cases: 142, trend: 'increasing' },
    { type: 'Discrimination Claims', severity: 'LOW', cases: 67, trend: 'stable' },
    { type: 'Gender-based Violence', severity: 'HIGH', cases: 89, trend: 'increasing' },
  ]

  const groupData = affectedGroups || [
    { group: 'Low-income Expats', vulnerability: 'CRITICAL', count: 450000 },
    { group: 'Domestic Workers', vulnerability: 'HIGH', count: 180000 },
    { group: 'Women & Children', vulnerability: 'HIGH', count: 1200000 },
    { group: 'Elderly', vulnerability: 'MEDIUM', count: 78000 },
    { group: 'People of Determination', vulnerability: 'HIGH', count: 92000 },
  ]

  const sentimentData = [
    { name: 'Critical', value: 28, color: CHART_COLORS.rose },
    { name: 'Concerning', value: 35, color: CHART_COLORS.orange },
    { name: 'Stable', value: 25, color: CHART_COLORS.gold },
    { name: 'Improving', value: 12, color: CHART_COLORS.emerald },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-rose-500/20 to-pink-600/20 text-rose-400 border-rose-500/50">
            <Users className="w-3 h-3 mr-1" />
            SOCIAL STABILITY
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Social Crisis
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Social crisis intelligence — labor issues, vulnerable populations, community tensions, and support systems</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Active Cases" value={metrics?.cases || 877} icon={<AlertTriangle className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Vulnerable Pop." value={metrics?.vulnerable || '1.8M'} icon={<Users className="h-6 w-6" />} gradient="orange" status="error" />
        <MetricCard title="At-Risk Groups" value={metrics?.groups || 5} icon={<Shield className="h-6 w-6" />} gradient="red" status="error" />
        <MetricCard title="Support Capacity" value={metrics?.capacity || '72%'} icon={<Heart className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Response Time" value={metrics?.response || '4.2 days'} icon={<TrendingDown className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Crisis Level" value={metrics?.level || 'ELEVATED'} icon={<AlertTriangle className="h-6 w-6" />} gradient="rose" status="warning" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="types">Crisis Types</TabsTrigger>
          <TabsTrigger value="vulnerable">Vulnerable Groups</TabsTrigger>
          <TabsTrigger value="services">Support Services</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Social Crisis Overview" description="Community stability and social risk assessment">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><TrendingDown className="h-5 w-5 text-rose-500" />Crisis Level</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={sentimentData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Users className="h-5 w-5 text-rose-500" />Crisis Types</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={typeData.slice(0,5)} xAxisKey="type" bars={[{ dataKey: 'cases', name: 'Cases', color: CHART_COLORS.rose }]} height={280} showGrid={true} /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="types" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Crisis Categories" description="Social crisis types by severity and volume">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {typeData.map((t: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4 border border-slate-700/50">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className={`h-5 w-5 ${t.severity === 'HIGH' ? 'text-rose' : t.severity === 'MEDIUM' ? 'text-orange' : 'text-gold'}`} />
                        <span className="font-medium text-platinum-200">{t.type}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={`${t.severity === 'HIGH' ? 'text-rose border-rose-500/50' : t.severity === 'MEDIUM' ? 'text-orange border-orange-500/50' : 'text-gold border-gold-500/50'}`}>{t.severity}</Badge>
                        <span className="text-sm text-platinum-400">{t.cases} cases</span>
                        <Badge variant="outline" className={`text-xs ${t.trend === 'increasing' ? 'border-rose-500/50 text-rose' : 'border-platinum-500/50 text-platinum'}`}>{t.trend}</Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="vulnerable" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Vulnerable Populations" description="At-risk groups requiring support">
              <div className="space-y-3">
                {groupData.map((g: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between rounded-lg bg-gradient-to-r from-rose-500/10 to-pink-600/5 p-4 border border-rose-500/30">
                    <div className="flex items-center gap-3">
                      <Users className={`h-5 w-5 ${g.vulnerability === 'CRITICAL' ? 'text-rose' : 'text-orange'}`} />
                      <span className="font-medium text-platinum-200">{g.group}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={`${g.vulnerability === 'CRITICAL' ? 'text-rose border-rose-500/50' : 'text-orange border-orange-500/50'}`}>{g.vulnerability}</Badge>
                      <span className="text-sm text-platinum-400">{g.count?.toLocaleString?.()}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Support Services" description="Government and NGO support infrastructure">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { service: 'Tanmia (Labor)', capacity: '78%', wait: '3 days' },
                  { service: 'Community Dev. Authority', capacity: '65%', wait: '5 days' },
                  { service: 'Women & Children Foundation', capacity: '82%', wait: '2 days' },
                  { service: 'Red Crescent', capacity: '90%', wait: '1 day' },
                  { service: 'Ministry of Human Resources', capacity: '71%', wait: '4 days' },
                  { service: 'Social Services Dept.', capacity: '58%', wait: '6 days' },
                ].map((s: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-4 w-4 text-rose-400" />
                      <h4 className="font-medium text-platinum-200">{s.service}</h4>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-platinum-400">Capacity: {s.capacity}</span>
                      <span className="text-platinum-400">Wait: {s.wait}</span>
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
