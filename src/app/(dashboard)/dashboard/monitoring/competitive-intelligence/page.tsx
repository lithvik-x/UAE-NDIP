// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, LineChart, AreaChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, TrendingUp, AlertTriangle, Shield, Target, Radar, LineChart as LineChartIcon } from 'lucide-react'
import { useCompetitiveIntelData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function CompetitiveIntelligencePage() {
  const { data } = useCompetitiveIntelData()
  const { metrics, competitors, trends } = data || { metrics: {}, competitors: [], trends: [] }

  const competitorData = competitors?.slice(0, 6) || [
    { name: 'Regional Rivals', strength: 78, threat: 'HIGH', trend: 'Growing' },
    { name: 'Global Competitors', strength: 65, threat: 'MEDIUM', trend: 'Stable' },
    { name: 'Local Players', strength: 82, threat: 'LOW', trend: 'Stable' },
    { name: 'Emerging Markets', strength: 45, threat: 'MEDIUM', trend: 'Growing' },
    { name: 'Tech Giants', strength: 88, threat: 'HIGH', trend: 'Growing' },
    { name: 'Financial Hubs', strength: 75, threat: 'MEDIUM', trend: 'Stable' },
  ]

  const trendData = [
    { month: 'Jan', uae: 72, competitor: 68 },
    { month: 'Feb', uae: 74, competitor: 69 },
    { month: 'Mar', uae: 76, competitor: 71 },
    { month: 'Apr', uae: 78, competitor: 72 },
    { month: 'May', uae: 80, competitor: 74 },
    { month: 'Jun', uae: 82, competitor: 75 },
  ]

  const comparisonData = [
    { metric: 'Economic Diversification', uae: 85, rivals: 72 },
    { metric: 'Business Environment', uae: 90, rivals: 78 },
    { metric: 'Infrastructure', uae: 95, rivals: 82 },
    { metric: 'Talent Acquisition', uae: 78, rivals: 75 },
    { metric: 'Innovation Hub', uae: 82, rivals: 80 },
    { metric: 'Global Connectivity', uae: 88, rivals: 85 },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-gold-500/20 to-amber-600/20 text-gold-400 border-gold-500/50">
            <Radar className="w-3 h-3 mr-1" />
            INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Competitive Intelligence
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Competitive landscape analysis — UAE positioning vs. regional and global competitors</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Competitive Index" value={metrics?.index || '82/100'} icon={<Target className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Rank vs Rivals" value={metrics?.rank || '#1'} icon={<TrendingUp className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Threats Identified" value={metrics?.threats || '12'} icon={<AlertTriangle className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Advantages" value={metrics?.advantages || '18'} icon={<Shield className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Market Share" value={metrics?.share || '34%'} icon={<Globe className="h-6 w-6" />} gradient="teal" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'LOW'} icon={<AlertTriangle className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="competitors">Competitors</TabsTrigger>
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Competitive Position" description="UAE competitive landscape analysis">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><LineChartIcon className="h-5 w-5 text-gold-500" />Position Trend</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <AreaChart data={trendData} xAxisKey="month" areas={[{ dataKey: 'uae', name: 'UAE', color: CHART_COLORS.gold }, { dataKey: 'competitor', name: 'Rivals', color: CHART_COLORS.platinum }]} height={280} showGrid={true} />
                  </CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Radar className="h-5 w-5 text-emerald-500" />Key Advantages</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3 text-sm text-platinum-300">
                      <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald" />Strategic location: unmatched</div>
                      <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald" />Business-friendly policies</div>
                      <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald" />World-class infrastructure</div>
                      <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-gold" />Tax-free environment</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Competitor Analysis" description="Key competitors and threat assessment">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {competitorData.map((c: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-gold-500/10 to-amber-600/5 p-4 border border-gold-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl text-platinum-100 font-rajdhani">{c.name}</span>
                        <Badge variant="outline" className={`border-${c.threat === 'HIGH' ? 'rose' : 'platinum'}-500/50 text-${c.threat === 'HIGH' ? 'rose' : 'platinum'}`}>{c.threat}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-platinum-400">
                        <span>Strength: {c.strength}%</span>
                        <Badge variant="outline" className={`border-${c.trend === 'Growing' ? 'emerald' : 'platinum'}-500/50 text-${c.trend === 'Growing' ? 'emerald' : 'platinum'}`}>{c.trend}</Badge>
                      </div>
                      <div className="h-2 bg-platinum-800 rounded-full overflow-hidden mt-2">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${c.strength}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                          className="h-full rounded-full bg-gradient-to-r from-gold-500 to-amber-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Competitive Comparison" description="UAE vs. competitors across key metrics">
              <div className="space-y-4">
                {comparisonData.map((c: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-200">{c.metric}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gold">{c.uae}</span>
                        <span className="text-xs text-platinum-400">vs {c.rivals}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 h-3">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${c.uae}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-gold-500 to-amber-500" />
                      <motion.div initial={{ width: 0 }} animate={{ width: `${c.rivals}%` }} transition={{ delay: idx * 0.1 + 0.4, duration: 0.5 }}
                        className="h-full rounded-full bg-platinum-700" />
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
