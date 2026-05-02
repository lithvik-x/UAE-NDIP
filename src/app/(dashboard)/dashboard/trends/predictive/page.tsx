// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { AreaChart, BarChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Globe, TrendingUp, AlertTriangle, Radar, Target, Brain, LineChart } from 'lucide-react'
import { usePredictiveData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function PredictiveTrendsPage() {
  const { data } = usePredictiveData()
  const { metrics, forecasts, signals } = data || { metrics: {}, forecasts: [], signals: [] }

  const forecastData = forecasts || [
    { period: 'Q2 2026', sentiment: 72, topics: 45, velocity: 68 },
    { period: 'Q3 2026', sentiment: 75, topics: 48, velocity: 72 },
    { period: 'Q4 2026', sentiment: 78, topics: 52, velocity: 75 },
    { period: 'Q1 2027', sentiment: 80, topics: 55, velocity: 78 },
    { period: 'Q2 2027', sentiment: 82, topics: 58, velocity: 80 },
  ]

  const signalData = signals || [
    { signal: 'Economic Reform Announcements', impact: 'HIGH', timeframe: '3-6 months', confidence: 85 },
    { signal: 'Regional Diplomatic Shifts', impact: 'MEDIUM', timeframe: '6-12 months', confidence: 72 },
    { signal: 'Technology Investment Wave', impact: 'HIGH', timeframe: '3-6 months', confidence: 88 },
    { signal: 'Tourism Season Pattern', impact: 'MEDIUM', timeframe: '1-3 months', confidence: 90 },
    { signal: 'Policy Changes', impact: 'HIGH', timeframe: '3-6 months', confidence: 78 },
    { signal: 'Social Media Trends', impact: 'MEDIUM', timeframe: '1-3 months', confidence: 65 },
  ]

  const areaData = [
    { month: 'Jan', value: 65, secondary: 58 },
    { month: 'Feb', value: 68, secondary: 62 },
    { month: 'Mar', value: 72, secondary: 65 },
    { month: 'Apr', value: 75, secondary: 70 },
    { month: 'May', value: 78, secondary: 72 },
    { month: 'Jun', value: 80, secondary: 75 },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-violet-500/20 to-purple-600/20 text-violet-400 border-violet-500/50">
            <Brain className="w-3 h-3 mr-1" />
            PREDICTIVE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Predictive Trends
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Predictive intelligence — forecasting sentiment shifts, emerging topics, and trend trajectories</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Forecast Accuracy" value={metrics?.accuracy || '82%'} icon={<Target className="h-6 w-6" />} gradient="violet" />
        <MetricCard title="Prediction Window" value={metrics?.window || '6 MO'} icon={<Radar className="h-6 w-6" />} gradient="purple" />
        <MetricCard title="Active Signals" value={metrics?.signals || '24'} icon={<TrendingUp className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Confidence" value={metrics?.confidence || '78%'} icon={<Brain className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Trend Velocity" value={metrics?.velocity || 'MEDIUM'} icon={<LineChart className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'LOW'} icon={<AlertTriangle className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="forecasts">Forecasts</TabsTrigger>
          <TabsTrigger value="signals">Signals</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Predictive Overview" description="Trend forecasting and future sentiment projections">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><LineChart className="h-5 w-5 text-violet-500" />Trend Projection</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <AreaChart data={areaData} xAxisKey="month" areas={[{ dataKey: 'value', name: 'Sentiment', color: CHART_COLORS.purple }, { dataKey: 'secondary', name: 'Topics', color: CHART_COLORS.teal }]} height={280} showGrid={true} />
                  </CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Brain className="h-5 w-5 text-purple-500" />Methodology</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3 text-sm text-platinum-300">
                      <div className="flex items-center gap-2"><Target className="h-4 w-4 text-violet-500" />ML-based sentiment analysis</div>
                      <div className="flex items-center gap-2"><Target className="h-4 w-4 text-violet-500" />Historical pattern matching</div>
                      <div className="flex items-center gap-2"><Target className="h-4 w-4 text-violet-500" />Real-time signal integration</div>
                      <div className="flex items-center gap-2"><Target className="h-4 w-4 text-violet-500" />Cross-source validation</div>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="forecasts" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Sentiment Forecasts" description="Projected sentiment metrics by quarter">
              <div className="space-y-4">
                {forecastData.map((f: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-200">{f.period}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-platinum-400">Sentiment: <span className="text-violet-500">{f.sentiment}%</span></span>
                        <span className="text-xs text-platinum-400">Topics: <span className="text-cyan-500">{f.topics}</span></span>
                        <span className="text-xs text-platinum-400">Velocity: <span className="text-emerald-500">{f.velocity}%</span></span>
                      </div>
                    </div>
                    <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${f.sentiment}%` }} transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="signals" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Early Signals" description="Emerging indicators for trend prediction">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {signalData.map((s: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="rounded-lg bg-gradient-to-r from-violet-500/10 to-purple-600/5 p-4 border border-violet-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg text-platinum-100 font-rajdhani">{s.signal}</span>
                        <Badge variant="outline" className={`border-${s.impact === 'HIGH' ? 'rose' : 'platinum'}-500/50 text-${s.impact === 'HIGH' ? 'rose' : 'platinum'}`}>{s.impact}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-platinum-400">
                        <span>Timeframe: {s.timeframe}</span>
                        <span>Confidence: {s.confidence}%</span>
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
