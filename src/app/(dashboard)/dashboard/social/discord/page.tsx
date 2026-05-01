// @ts-nocheck
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  MessageSquare, Users, Shield, Globe, TrendingUp, Hash, ShieldAlert,
  ShieldCheck, AlertTriangle, Info, Lock, Eye, Zap, Server, Gamepad2
} from 'lucide-react'
import { useDiscordIntelligenceData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1, opacity: 1 }, hover: { scale: 1.02, opacity: 0.9 } }

export default function DiscordPage() {
  const { data } = useDiscordIntelligenceData()

  if (!data) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Discord intelligence data...</div>
      </motion.div>
    )
  }

  const { metrics, serverCategories, engagementMetrics } = data

  const sentimentData = [
    { name: 'Positive', value: 42, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 35, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 23, color: CHART_COLORS.rose },
  ]

  const serverData = serverCategories?.slice(0, 6).map((s: any) => ({
    name: s.category || s.name,
    members: s.members || s.activeUsers || 0,
  })) || [
    { name: 'Gaming', members: 12500 },
    { name: 'Tech', members: 8700 },
    { name: 'Music', members: 6300 },
    { name: 'Art', members: 4100 },
    { name: 'Sports', members: 5900 },
    { name: 'Education', members: 3200 },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 text-indigo-400 border-indigo-500/50">
            <Hash className="w-3 h-3 mr-1" />
            COMMUNITY PLATFORM
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Discord Communities
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">
            Gaming, tech, and interest-based community intelligence — servers, channels, and engagement patterns
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10 bg-glass-surface/50">
            <Server className="h-4 w-4" />
            Server Analysis
          </Button>
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 text-white gap-2 shadow-lg shadow-indigo-500/25">
            <Gamepad2 className="h-4 w-4" />
            Track Communities
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="UAE Servers" value={metrics?.servers || 847} icon={<Globe className="h-6 w-6" />} gradient="indigo" />
        <MetricCard title="Total Members" value={metrics?.members ? `${(metrics.members/1000).toFixed(1)}K` : '52.3K'} icon={<Users className="h-6 w-6" />} gradient="purple" />
        <MetricCard title="Active Voice" value={metrics?.voiceActive || '34%'} icon={<MessageSquare className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Gaming Share" value={metrics?.gamingShare || '28%'} icon={<Gamepad2 className="h-6 w-6" />} gradient="rose" />
        <MetricCard title="Tech Communities" value={metrics?.techCommunities || 156} icon={<Zap className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="NSFW Risk" value={metrics?.nsfwRisk || 'MODERATE'} icon={<AlertTriangle className="h-6 w-6" />} gradient="orange" status="warning" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="communities">Communities</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="risks">Risk Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Discord Intelligence Overview" description="Community platform usage and engagement in UAE">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-emerald-500" />
                        Server Distribution
                      </CardTitle>
                      <CardDescription>Top categories by member count</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <BarChart data={serverData} xAxisKey="name" bars={[{ dataKey: 'members', name: 'Members', color: CHART_COLORS.purple }]} height={280} showGrid={true} />
                    </CardContent>
                  </motion.div>

                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-gold-700" />
                        Sentiment Distribution
                      </CardTitle>
                      <CardDescription>Overall community sentiment</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <PieChart data={sentimentData} height={280} showLegend={true} />
                    </CardContent>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="communities" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Community Breakdown" description="UAE Discord servers by category and size">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {(serverData || []).map((server: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-xl p-5 bg-glass-surface/50 border-glass-border">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Hash className="h-5 w-5 text-indigo-400" />
                        <h4 className="font-medium text-platinum-200">{server.name}</h4>
                      </div>
                      <Badge variant="outline" className="border-indigo-500/50 text-indigo-400">{server.members?.toLocaleString?.() || server.members}</Badge>
                    </div>
                    <Progress value={Math.min(((server.members || 0) / 15000) * 100, 100)} className="h-2 bg-indigo-900/50" />
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Engagement Metrics" description="Activity patterns across UAE Discord communities">
              <div className="space-y-4">
                {[
                  { metric: 'Daily Active Users', value: engagementMetrics?.dau || '68%', trend: '+12%' },
                  { metric: 'Weekly Retention', value: engagementMetrics?.retention || '54%', trend: '-3%' },
                  { metric: 'Avg. Session Duration', value: engagementMetrics?.session || '47 min', trend: '+8%' },
                  { metric: 'Voice Channel Usage', value: engagementMetrics?.voice || '34%', trend: '+21%' },
                ].map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-600/5 p-4 border border-indigo-500/30">
                    <span className="text-platinum-200">{item.metric}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-platinum-100">{item.value}</span>
                      <Badge variant="outline" className="border-emerald-500/50 text-emerald">{item.trend}</Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="risks" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Risk Assessment" description="Content moderation and regulatory concerns">
              <div className="space-y-4">
                {[
                  { risk: 'NSFW Content', level: 'MODERATE', severity: 'warning', mitigation: 'Server verification levels, content filters' },
                  { risk: 'Gambling Servers', level: 'HIGH', severity: 'error', mitigation: 'Monitoring crypto/gambling promotion' },
                  { risk: 'Hate Speech', level: 'LOW', severity: 'success', mitigation: 'Active moderation teams' },
                  { risk: 'Privacy Concerns', level: 'MODERATE', severity: 'warning', mitigation: 'Data retention policies, metadata access' },
                ].map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4 border border-slate-700/50">
                    <AlertTriangle className={`h-5 w-5 mt-0.5 shrink-0 ${item.severity === 'error' ? 'text-rose' : item.severity === 'warning' ? 'text-orange' : 'text-emerald'}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-platinum-200">{item.risk}</h4>
                        <Badge variant="outline" className={`${item.severity === 'error' ? 'text-rose border-rose-500/50' : item.severity === 'warning' ? 'text-orange border-orange-500/50' : 'text-emerald border-emerald-500/50'}`}>{item.level}</Badge>
                      </div>
                      <p className="text-xs text-platinum-400">{item.mitigation}</p>
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
