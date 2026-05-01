// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, Search, AlertTriangle, Shield, Users, Building2, FileText, Link2 } from 'lucide-react'
import { useEntityInvestigationData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function EntityInvestigationPage() {
  const { data } = useEntityInvestigationData()
  const { metrics, entities, connections } = data || { metrics: {}, entities: [], connections: [] }

  const entityData = entities?.slice(0, 8) || [
    { name: 'Corporate Entities', count: 1250, risk: 'Medium', type: 'Business' },
    { name: 'Individuals', count: 3400, risk: 'Variable', type: 'Personnel' },
    { name: 'Organizations', count: 580, risk: 'Medium', type: 'NGO/Govt' },
    { name: 'Media Outlets', count: 145, risk: 'Low', type: 'Press' },
    { name: 'Financial Institutions', count: 89, risk: 'High', type: 'Banking' },
    { name: 'Real Estate', count: 420, risk: 'Medium', type: 'Property' },
    { name: 'Investment Funds', count: 234, risk: 'High', type: 'Finance' },
    { name: 'Consultancies', count: 167, risk: 'Medium', type: 'Services' },
  ]

  const connectionData = connections || [
    { entity: 'Corporate Network A', connections: 45, risk: 'HIGH' },
    { entity: 'Individual Group B', connections: 32, risk: 'MEDIUM' },
    { entity: 'Organization C', connections: 28, risk: 'LOW' },
    { entity: 'Financial Group D', connections: 56, risk: 'CRITICAL' },
    { entity: 'Media Network E', connections: 19, risk: 'LOW' },
  ]

  const riskData = [
    { name: 'Low Risk', value: 35, color: CHART_COLORS.emerald },
    { name: 'Medium Risk', value: 40, color: CHART_COLORS.gold },
    { name: 'High Risk', value: 18, color: CHART_COLORS.rose },
    { name: 'Critical', value: 7, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-violet-500/20 to-purple-600/20 text-violet-400 border-violet-500/50">
            <Search className="w-3 h-3 mr-1" />
            MONITORING
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Entity Investigation
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Entity investigation intelligence — tracking organizations, individuals, and their interconnections</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Entities Tracked" value={metrics?.total || '5,885'} icon={<Building2 className="h-6 w-6" />} gradient="violet" />
        <MetricCard title="Active Investigations" value={metrics?.investigations || '24'} icon={<Search className="h-6 w-6" />} gradient="purple" />
        <MetricCard title="Connections" value={metrics?.connections || '1,240'} icon={<Link2 className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Risk Flagged" value={metrics?.riskFlagged || '18%'} icon={<AlertTriangle className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Coverage" value={metrics?.coverage || 'BROAD'} icon={<Globe className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'MEDIUM'} icon={<Shield className="h-6 w-6" />} gradient="gold" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Entity Investigation Overview" description="Risk distribution across monitored entities">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Shield className="h-5 w-5 text-rose-500" />Risk Distribution</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={riskData} height={280} showLegend={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Search className="h-5 w-5 text-violet-500" />Investigation Focus</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3 text-sm text-platinum-300">
                      <div className="flex items-center gap-2"><Link2 className="h-4 w-4 text-rose" />Financial networks: priority</div>
                      <div className="flex items-center gap-2"><Link2 className="h-4 w-4 text-rose" />Ownership structures: under review</div>
                      <div className="flex items-center gap-2"><Link2 className="h-4 w-4 text-gold" />Corporate connections: monitored</div>
                      <div className="flex items-center gap-2"><Link2 className="h-4 w-4 text-emerald" />Media entities: standard tracking</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="entities" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Entity Database" description="Monitored entities by category">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {entityData.map((e: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-600/5 p-4 border border-violet-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-100 font-rajdhani">{e.name}</span>
                        <Badge variant="outline" className={`border-${e.risk === 'High' || e.risk === 'CRITICAL' ? 'rose' : e.risk === 'Medium' || e.risk === 'MEDIUM' ? 'gold' : 'emerald'}-500/50 text-${e.risk === 'High' || e.risk === 'CRITICAL' ? 'rose' : e.risk === 'Medium' || e.risk === 'MEDIUM' ? 'gold' : 'emerald'}`}>{e.risk}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-platinum-400">
                        <span>Count: {e.count}</span>
                        <span>Type: {e.type}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="connections" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Entity Connections" description="Network connections and link analysis">
              <div className="space-y-4">
                {connectionData.map((c: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-200">{c.entity}</span>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="border-violet-500/50 text-violet">{c.connections} links</Badge>
                        <Badge variant="outline" className={`border-${c.risk === 'CRITICAL' || c.risk === 'HIGH' ? 'rose' : 'platinum'}-500/50 text-${c.risk === 'CRITICAL' || c.risk === 'HIGH' ? 'rose' : 'platinum'}`}>{c.risk}</Badge>
                      </div>
                    </div>
                    <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${(c.connections / 60) * 100}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />
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
