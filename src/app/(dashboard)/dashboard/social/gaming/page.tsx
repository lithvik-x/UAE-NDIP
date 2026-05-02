// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Gamepad2, Users, TrendingUp, Trophy, Swords, Skull, AlertTriangle, Globe } from 'lucide-react'
import { useGamingIntelligenceData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function GamingPage() {
  const { data } = useGamingIntelligenceData()
  const { metrics, topGames, tournaments, communityMetrics } = data || { metrics: {}, topGames: [], tournaments: [], communityMetrics: {} }

  const gameData = topGames?.slice(0, 7) || [
    { name: 'PUBG Mobile', players: 2800000, revenue: 45000000, genre: 'Battle Royale' },
    { name: 'Fortnite', players: 1800000, revenue: 38000000, genre: 'Battle Royale' },
    { name: 'League of Legends', players: 920000, revenue: 22000000, genre: 'MOBA' },
    { name: 'Valorant', players: 780000, revenue: 19000000, genre: 'Tactical Shooter' },
    { name: 'Minecraft', players: 650000, revenue: 8500000, genre: 'Sandbox' },
    { name: 'Genshin Impact', players: 540000, revenue: 32000000, genre: 'Action RPG' },
    { name: 'FIFA/FC', players: 480000, revenue: 28000000, genre: 'Sports' },
  ]

  const tournamentData = tournaments?.slice(0, 5) || [
    { event: 'PUBG Mobile Pro League (PMPL)', prize: '$150,000', participants: 24, date: 'Mar 2026' },
    { event: 'Valorant Champions Tour', prize: '$200,000', participants: 16, date: 'Apr 2026' },
    { event: 'FIFAe World Cup', prize: '$300,000', participants: 32, date: 'May 2026' },
    { event: 'LOL Arabian League', prize: '$100,000', participants: 8, date: 'Apr 2026' },
    { event: 'DXB Gaming Championship', prize: '$75,000', participants: 48, date: 'Feb 2026' },
  ]

  const platformData = [
    { name: 'Mobile', share: 62, color: CHART_COLORS.emerald },
    { name: 'PC', share: 24, color: CHART_COLORS.info },
    { name: 'Console', share: 14, color: CHART_COLORS.purple },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-rose-500/20 to-pink-600/20 text-rose-400 border-rose-500/50">
            <Gamepad2 className="w-3 h-3 mr-1" />
            GAMING INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Gaming Platforms
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">Gaming community intelligence — top games, tournaments, esports ecosystem, and player demographics</p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Active Gamers" value={metrics?.gamers || '4.2M'} icon={<Users className="h-6 w-6" />} gradient="rose" />
        <MetricCard title="Monthly Revenue" value={metrics?.revenue || '$48M'} icon={<TrendingUp className="h-6 w-6" />} gradient="gold" />
        <MetricCard title="Esports Events" value={metrics?.events || 24} icon={<Trophy className="h-6 w-6" />} gradient="purple" />
        <MetricCard title="Pro Teams" value={metrics?.teams || 18} icon={<Swords className="h-6 w-6" />} gradient="indigo" />
        <MetricCard title="Mobile Share" value={metrics?.mobileShare || '62%'} icon={<Globe className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Risk Level" value={metrics?.risk || 'LOW'} icon={<AlertTriangle className="h-6 w-6" />} gradient="sky" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="games">Top Games</TabsTrigger>
          <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Gaming Intelligence Overview" description="UAE gaming ecosystem and market">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Gamepad2 className="h-5 w-5 text-rose-500" />Top Games by Players</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={gameData.slice(0,5)} xAxisKey="name" bars={[{ dataKey: 'players', name: 'Players (K)', color: CHART_COLORS.rose }]} height={280} showGrid={true} /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Globe className="h-5 w-5 text-emerald-500" />Platform Distribution</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={platformData} height={280} showLegend={true} /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="games" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Top Games" description="Most popular games in UAE by player base">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {gameData.map((g: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-platinum-500 w-5">{idx + 1}</span>
                        <Gamepad2 className="h-4 w-4 text-rose-400" />
                        <div>
                          <p className="font-medium text-platinum-200">{g.name}</p>
                          <p className="text-xs text-platinum-400">{g.genre}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-platinum-400">
                        <span>{(g.players/1000).toFixed(0)}K players</span>
                        <Badge variant="outline" className="border-emerald-500/50 text-emerald-500">${(g.revenue/1000000).toFixed(0)}M</Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="tournaments" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Tournaments & Esports Events" description="Major gaming competitions in UAE">
              <div className="space-y-3">
                {tournamentData.map((t: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between rounded-lg bg-gradient-to-r from-rose-500/10 to-pink-600/5 p-4 border border-rose-500/30">
                    <div className="flex items-center gap-3">
                      <Trophy className="h-5 w-5 text-rose-400" />
                      <div>
                        <p className="font-medium text-platinum-200">{t.event}</p>
                        <p className="text-xs text-platinum-400">{t.date} • {t.participants} teams</p>
                      </div>
                    </div>
                    <Badge className="border-emerald-500/50 text-emerald-500 bg-emerald-500/10">{t.prize}</Badge>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        <TabsContent value="platforms" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Platform Analysis" description="Gaming platform breakdown">
              <div className="grid gap-4 md:grid-cols-3">
                {platformData.map((p: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} whileHover={{ scale: 1.03 }}
                    className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border text-center">
                    <Gamepad2 className={`h-8 w-8 mx-auto mb-3 ${p.name === 'Mobile' ? 'text-emerald-500' : p.name === 'PC' ? 'text-sky' : 'text-violet-500'}`} />
                    <h4 className="font-bold text-2xl text-platinum-100">{p.share}%</h4>
                    <p className="text-platinum-400">{p.name}</p>
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
