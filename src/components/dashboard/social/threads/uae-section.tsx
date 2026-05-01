// UAE Position Section Component for Threads Intelligence
// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { AlertOctagon, AlertTriangle, Globe, FlagOff } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

interface UAESectionProps {
  uaePopulation: any
  uaePlatformBreakdown: any[]
  sentimentByContext: any[]
  revenueStats: any[]
  threadsVsX: any[]
}

export function UAESection({
  uaePopulation,
  uaePlatformBreakdown,
  sentimentByContext,
  revenueStats,
  threadsVsX,
}: UAESectionProps) {
  const sentimentData = [
    { name: 'Positive', value: 35, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 40, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 25, color: CHART_COLORS.rose },
  ]

  const uaePlatformData = uaePlatformBreakdown.map(p => ({
    platform: p.platform,
    reach: `${p.reachPercent}%`,
    reachNum: p.reachPercent,
    growth: p.yoyChange,
  }))

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel title="UAE Competitive Position" description="Threads vs other platforms in UAE market">
          <div className="space-y-6">
            {/* Critical Finding */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-rose-500/30">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                  <AlertOctagon className="h-5 w-5" />
                  Critical Finding: No Government Threads Accounts
                </CardTitle>
                <CardDescription>UAE government entities NOT required to have Threads presence</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                  <p className="text-sm text-slate-300">
                    NO official UAE government Threads accounts identified. The Digital Government Indicators framework
                    does NOT yet include Threads as a required platform. X (Twitter) remains the primary platform
                    for UAE government communications (2.85M users, declining 6%).
                  </p>
                </div>
              </CardContent>
            </motion.div>

            {/* UAE Population Overview */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">UAE Population & Connectivity</CardTitle>
                <CardDescription>11.4M population, 99% internet penetration</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg bg-info/10 p-4 border border-info/30">
                    <div className="text-2xl font-bold text-info">11.4M</div>
                    <div className="text-sm text-slate-400">Total Population</div>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                    <div className="text-2xl font-bold text-emerald-400">99%</div>
                    <div className="text-sm text-slate-400">Internet Penetration</div>
                  </div>
                  <div className="rounded-lg bg-gold/10 p-4 border border-gold/30">
                    <div className="text-2xl font-bold text-gold">614 Mbps</div>
                    <div className="text-sm text-slate-400">Median Mobile Speed</div>
                  </div>
                  <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                    <div className="text-2xl font-bold text-rose-400">31.6 yrs</div>
                    <div className="text-sm text-slate-400">Median Age</div>
                  </div>
                </div>
              </CardContent>
            </motion.div>

            {/* UAE Social Media Comparison */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">UAE Social Media Platform Breakdown</CardTitle>
                <CardDescription>Platform user base and growth rates - Threads at 7.8% penetration</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <BarChart
                  data={uaePlatformData}
                  xAxisKey="platform"
                  bars={[{ dataKey: 'reachNum', name: 'Reach %', color: CHART_COLORS.info }]}
                  height={320}
                  showGrid={true}
                />
              </CardContent>
            </motion.div>

            {/* Threads vs X Competitive Analysis */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Threads vs X Competitive Analysis</CardTitle>
                <CardDescription>Engagement and market position</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg bg-slate-800/50 p-4">
                    <div className="text-sm text-slate-400 mb-2">Daily Mobile Users</div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-emerald-400">141.5M</span>
                      <span className="text-sm text-slate-400">Threads</span>
                    </div>
                    <div className="flex items-end gap-2 mt-1">
                      <span className="text-2xl font-bold text-slate-400">125M</span>
                      <span className="text-sm text-slate-400">X</span>
                    </div>
                    <div className="mt-2 text-xs text-emerald-400">Threads +13.2% advantage</div>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-4">
                    <div className="text-sm text-slate-400 mb-2">Engagement Rate</div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-emerald-400">6.25%</span>
                      <span className="text-sm text-slate-400">Threads</span>
                    </div>
                    <div className="flex items-end gap-2 mt-1">
                      <span className="text-2xl font-bold text-slate-400">3.6%</span>
                      <span className="text-sm text-slate-400">X</span>
                    </div>
                    <div className="mt-2 text-xs text-emerald-400">Threads +73.6% higher</div>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-4">
                    <div className="text-sm text-slate-400 mb-2">UAE Users</div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-rose-400">893K</span>
                      <span className="text-sm text-slate-400">Threads (7.8%)</span>
                    </div>
                    <div className="flex items-end gap-2 mt-1">
                      <span className="text-2xl font-bold text-emerald-400">2.85M</span>
                      <span className="text-sm text-slate-400">X (25%)</span>
                    </div>
                    <div className="mt-2 text-xs text-rose-400">X still dominant in UAE</div>
                  </div>
                </div>
              </CardContent>
            </motion.div>

            {/* Sentiment Analysis */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Sentiment Analysis (UAE Context)</CardTitle>
                <CardDescription>Overall sentiment breakdown by context</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-6 lg:grid-cols-2">
                  <PieChart
                    data={sentimentData}
                    height={200}
                    showLegend={true}
                  />
                  <div className="space-y-3">
                    {sentimentByContext.slice(0, 5).map((item: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3"
                      >
                        <div className={`flex h-2 w-2 rounded-full ${
                          item.sentiment.includes('Positive') ? 'bg-emerald-400' :
                          item.sentiment.includes('Negative') ? 'bg-rose-400' :
                          'bg-platinum-400'
                        }`} />
                        <span className="text-sm text-slate-200 flex-1">{item.context}</span>
                        <Badge variant={item.sentiment.includes('Positive') ? 'default' : item.sentiment.includes('Negative') ? 'destructive' : 'outline'} className="text-xs">
                          {item.sentiment}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </motion.div>

            {/* Revenue & Ad Stats */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Revenue & Ad Statistics</CardTitle>
                <CardDescription>Platform monetization metrics</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg bg-gold/10 p-4 border border-gold/30">
                    <div className="text-sm text-slate-400 mb-1">CPM</div>
                    <div className="text-xl font-bold text-gold">$5-$10</div>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                    <div className="text-sm text-slate-400 mb-1">2025 Revenue</div>
                    <div className="text-xl font-bold text-emerald-400">$8B</div>
                  </div>
                  <div className="rounded-lg bg-info/10 p-4 border border-info/30">
                    <div className="text-sm text-slate-400 mb-1">2026 Revenue</div>
                    <div className="text-xl font-bold text-info">$11.3B</div>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}

export default UAESection
