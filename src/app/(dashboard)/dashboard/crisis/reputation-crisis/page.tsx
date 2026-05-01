// @ts-nocheck
'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, AreaChart, RadarChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  ShieldAlert,
  TrendingDown,
  MessageSquare,
  Globe,
  AlertTriangle,
  AlertOctagon,
  Users,
  Megaphone,
  Scale,
  Flag,
  Building2,
  Gavel,
  Plane,
  Trophy,
  GraduationCap,
  Ban,
  DollarSign,
  Heart,
  Eye,
  BookOpen,
  ChevronRight,
  ExternalLink,
  Quote,
} from 'lucide-react'
import { useReputationCrisisPageData, useReputationCrisisData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function ReputationCrisisPage() {
  const { data: pageData } = useReputationCrisisPageData()
  const { data: crisisData } = useReputationCrisisData()

  const {
    metrics,
    crisisIncidents,
    sentimentImpact,
    mediaCoverage,
    pressFreedomScores,
    freedomHouseScores,
    sudanGoldData,
    iranWarStats,
    politicalPrisonerStats,
    threatVectors,
    tortureMethods,
    reputationKeyQuotes,
    reputationKPI,
  } = pageData || {
    metrics: { active: 0, sentiment: 0, mentions: '0', level: 'UNKNOWN', response: '0h', mitigation: '0%' },
    crisisIncidents: [],
    sentimentImpact: [],
    mediaCoverage: [],
    pressFreedomScores: {},
    freedomHouseScores: {},
    sudanGoldData: {},
    iranWarStats: {},
    politicalPrisonerStats: {},
    threatVectors: [],
    tortureMethods: [],
    reputationKeyQuotes: [],
    reputationKPI: {},
  }

  // Prepare chart data
  const pressFreedomChartData = [
    { name: 'Overall', score: pressFreedomScores?.overall?.score || 0, rank: pressFreedomScores?.overall?.rank || 'N/A' },
    { name: 'Political', score: pressFreedomScores?.political?.score || 0, rank: pressFreedomScores?.political?.rank || 'N/A' },
    { name: 'Economic', score: pressFreedomScores?.economic?.score || 0, rank: pressFreedomScores?.economic?.rank || 'N/A' },
    { name: 'Legislative', score: pressFreedomScores?.legislative?.score || 0, rank: pressFreedomScores?.legislative?.rank || 'N/A' },
    { name: 'Social', score: pressFreedomScores?.social?.score || 0, rank: pressFreedomScores?.social?.rank || 'N/A' },
  ]

  const freedomHouseChartData = [
    { name: 'Global Freedom', score: freedomHouseScores?.globalFreedom?.score || 0, max: 100 },
    { name: 'Political Rights', score: freedomHouseScores?.politicalRights?.score || 0, max: 40 },
    { name: 'Civil Liberties', score: freedomHouseScores?.civilLiberties?.score || 0, max: 60 },
    { name: 'Internet Freedom', score: freedomHouseScores?.internetFreedom?.score || 0, max: 100 },
  ]

  const severityData = [
    { name: 'CRITICAL', value: threatVectors?.filter((t: any) => t.severity === 'CRITICAL')?.length || 0, color: CHART_COLORS.rose },
    { name: 'HIGH', value: threatVectors?.filter((t: any) => t.severity === 'HIGH')?.length || 0, color: CHART_COLORS.orange },
    { name: 'MODERATE', value: threatVectors?.filter((t: any) => t.severity === 'MODERATE')?.length || 0, color: CHART_COLORS.gold },
  ]

  const iranWarChartData = [
    { name: 'Ballistic Missiles', value: iranWarStats?.ballisticMissiles24h || 0 },
    { name: 'Drones', value: iranWarStats?.drones24h || 0 },
    { name: 'Cruise Missiles', value: iranWarStats?.cruiseMissiles24h || 0 },
  ]

  const politicalPrisonerChartData = [
    { name: 'UAE94 Defendants', value: politicalPrisonerStats?.uae94Defendants?.value || 0 },
    { name: 'Life Sentences', value: politicalPrisonerStats?.lifeSentences?.value || 0 },
    { name: 'Held Beyond Sentence', value: politicalPrisonerStats?.heldBeyondSentence?.value || 0 },
    { name: 'New Charges', value: politicalPrisonerStats?.newCounterterrorismCharges?.value || 0 },
  ]

  const timelineChartData = crisisData?.timeline?.slice(0, 12).map((t: any) => ({
    date: t.date,
    event: t.event,
  })) || []

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-rose-500/20 to-red-600/20 text-rose-400 border-rose-500/50">
            <ShieldAlert className="w-3 h-3 mr-1" />
            REPUTATION CRISIS
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-rose-100 via-rose-200 to-red-400 bg-clip-text text-transparent">
              UAE Reputation Crisis
            </span>
          </h1>
          <p className="mt-2 text-rose-300/80">Comprehensive reputation damage assessment - Sudan, Iran War, Human Rights, Sports Bans</p>
        </div>
        <Badge variant="outline" className="border-rose-500/50 text-rose-400 bg-rose-500/10">
          <AlertOctagon className="w-4 h-4 mr-1" />
          {reputationKPI?.trend || 'WORSENING'}
        </Badge>
      </motion.div>

      {/* Top Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Active Crises" value={metrics?.active || 0} icon={<ShieldAlert className="h-6 w-6" />} gradient="rose" status="error" />
        <MetricCard title="Sentiment" value={metrics?.sentiment || 0} icon={<TrendingDown className="h-6 w-6" />} gradient="red" status="error" />
        <MetricCard title="Global Mentions" value={metrics?.mentions || '0'} icon={<Globe className="h-6 w-6" />} gradient="purple" />
        <MetricCard title="Crisis Level" value={metrics?.level || 'UNKNOWN'} icon={<AlertTriangle className="h-6 w-6" />} gradient="rose" status="error" />
        <MetricCard title="Political Prisoners" value={politicalPrisonerStats?.lifeSentences?.value ? `${politicalPrisonerStats.lifeSentences.value}+` : '0'} icon={<Gavel className="h-6 w-6" />} gradient="orange" status="warning" />
        <MetricCard title="Mitigation Rate" value={metrics?.mitigation || '0%'} icon={<Megaphone className="h-6 w-6" />} gradient="emerald" />
      </motion.div>

      {/* Key KPI Summary */}
      <motion.div variants={fadeInUp}>
        <GlassPanel title="Reputation Status Overview" description="Key indicators from MD file 4-5">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="glass-card rounded-lg p-4 bg-gradient-to-br from-rose-500/20 to-red-600/10 border border-rose-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Scale className="h-5 w-5 text-rose-400" />
                <span className="text-sm text-rose-300">RSF Press Freedom</span>
              </div>
              <p className="text-2xl font-bold text-white">{reputationKPI?.pressFreedomRank || '164/180'}</p>
              <p className="text-xs text-rose-300/70">3rd worst in Middle East</p>
            </div>
            <div className="glass-card rounded-lg p-4 bg-gradient-to-br from-orange-500/20 to-amber-600/10 border border-orange-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-5 w-5 text-orange-400" />
                <span className="text-sm text-orange-300">Human Rights Score</span>
              </div>
              <p className="text-2xl font-bold text-white">{reputationKPI?.humanRightsScore || '18/100'}</p>
              <p className="text-xs text-orange-300/70">Not Free</p>
            </div>
            <div className="glass-card rounded-lg p-4 bg-gradient-to-br from-violet-500/20 to-purple-600/10 border border-violet-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Flag className="h-5 w-5 text-violet-400" />
                <span className="text-sm text-violet-300">Active Boycotts</span>
              </div>
              <p className="text-2xl font-bold text-white">{reputationKPI?.activeBoycottCampaigns || '0'}</p>
              <p className="text-xs text-violet-300/70">TAGATU3, BoycottUAE, etc.</p>
            </div>
            <div className="glass-card rounded-lg p-4 bg-gradient-to-br from-amber-500/20 to-yellow-600/10 border border-amber-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Ban className="h-5 w-5 text-amber-400" />
                <span className="text-sm text-amber-300">Sports Bans</span>
              </div>
              <p className="text-2xl font-bold text-white">{reputationKPI?.sportsBans || '0'}</p>
              <p className="text-xs text-amber-300/70">FEI, FIFA</p>
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="incidents">Crisis Incidents</TabsTrigger>
          <TabsTrigger value="freedoms">Freedom Scores</TabsTrigger>
          <TabsTrigger value="iran-war">Iran War 2026</TabsTrigger>
          <TabsTrigger value="human-rights">Human Rights</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Distribution */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-rose-500" />
                  Sentiment Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <PieChart data={sentimentImpact || []} height={280} showLegend={true} />
              </CardContent>
            </motion.div>

            {/* Media Coverage */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-violet-500" />
                  Media Coverage by Sentiment
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <BarChart
                  data={(mediaCoverage || []).slice(0, 5).map((m: any) => ({
                    outlet: m.outlet,
                    mentions: m.mentions,
                    sentiment: m.sentiment,
                  }))}
                  xAxisKey="outlet"
                  bars={[
                    { dataKey: 'mentions', name: 'Mentions', color: CHART_COLORS.purple },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </motion.div>

            {/* Threat Vectors by Severity */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  Threat Vectors by Severity
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <PieChart data={severityData} height={280} showLegend={true} />
              </CardContent>
            </motion.div>

            {/* Sudan Gold Data */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-amber-500" />
                  Sudan Gold Smuggling
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-platinum-300">Official Exports to UAE</span>
                  <span className="text-2xl font-bold text-amber-400">${sudanGoldData?.officialExportsToUAE?.value || 0}B</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-platinum-300">Smuggled Out</span>
                  <span className="text-2xl font-bold text-rose-400">{sudanGoldData?.smuggledOut?.value || 0}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-platinum-300">UAE World Rank</span>
                  <span className="text-2xl font-bold text-violet-400">{sudanGoldData?.uaeWorldRank?.value || '#2'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-platinum-300">Imported from Sudan (2023)</span>
                  <span className="text-2xl font-bold text-emerald-400">{sudanGoldData?.importedFromSudan?.value || 0}t</span>
                </div>
              </CardContent>
            </motion.div>
          </div>

          {/* Key Quotes */}
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Key Quotes" description="Significant quotes from sources">
              <div className="grid gap-4 md:grid-cols-2">
                {(reputationKeyQuotes || []).slice(0, 4).map((q: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card rounded-lg p-4 bg-glass-surface/50 border-l-4 border-rose-500"
                  >
                    <Quote className="h-5 w-5 text-rose-400 mb-2" />
                    <p className="text-platinum-200 italic">"{q.text}"</p>
                    <p className="text-xs text-platinum-400 mt-2">— {q.source}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Incidents Tab */}
        <TabsContent value="incidents" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Crisis Incidents" description="Active and historical reputation crises from MD file">
              <ScrollArea className="h-[600px]">
                <div className="space-y-3">
                  {(crisisIncidents || []).map((incident: any, idx: number) => (
                    <motion.div
                      key={incident.id || idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-4 rounded-lg bg-gradient-to-r from-rose-500/10 to-purple-600/5 p-4 border border-rose-500/30"
                    >
                      <ShieldAlert className={`h-5 w-5 mt-0.5 shrink-0 ${incident.severity === 'CRITICAL' ? 'text-rose-500' : incident.severity === 'HIGH' ? 'text-orange-500' : 'text-amber-500'}`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-platinum-200">{incident.incident}</h4>
                          <Badge variant="outline" className={`${incident.severity === 'CRITICAL' ? 'text-rose border-rose-500/50' : incident.severity === 'HIGH' ? 'text-orange border-orange-500/50' : 'text-amber border-amber-500/50'}`}>
                            {incident.severity}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-platinum-400">
                          <span className="flex items-center gap-1"><Flag className="h-3 w-3" />{incident.category}</span>
                          <span className="flex items-center gap-1"><Globe className="h-3 w-3" />{incident.spread}</span>
                          <span>{incident.date}</span>
                          <Badge variant="outline" className={incident.sentiment < 0 ? 'text-rose border-rose-500/50' : 'text-emerald border-emerald-500/50'}>
                            {incident.sentiment > 0 ? '+' : ''}{incident.sentiment}pts
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Freedom Scores Tab */}
        <TabsContent value="freedoms" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* RSF Press Freedom */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-rose-500" />
                  RSF Press Freedom Index 2024/25
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <BarChart
                  data={pressFreedomChartData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'score', name: 'Score', color: CHART_COLORS.rose }]}
                  height={280}
                  showGrid={true}
                />
                <div className="mt-4 text-center text-sm text-platinum-400">
                  UAE Rank: <span className="text-rose-400 font-bold">164/180</span> — 3rd worst in Middle East
                </div>
              </CardContent>
            </motion.div>

            {/* Freedom House */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-orange-500" />
                  Freedom House Scores
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <RadarChart
                  data={freedomHouseChartData}
                  metrics={[
                    { dataKey: 'score', name: 'Score', color: CHART_COLORS.rose },
                  ]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </motion.div>

            {/* Freedom Score Details */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border lg:col-span-2">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Eye className="h-5 w-5 text-violet-500" />
                  Detailed Freedom Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-platinum-300">Global Freedom</span>
                      <span className="text-white font-bold">18/100</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full" style={{ width: '18%' }} />
                    </div>
                    <p className="text-xs text-rose-400">Not Free</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-platinum-300">Political Rights</span>
                      <span className="text-white font-bold">5/40</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '12.5%' }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-platinum-300">Civil Liberties</span>
                      <span className="text-white font-bold">13/60</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '21.7%' }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-platinum-300">Internet Freedom</span>
                      <span className="text-white font-bold">28/100</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full" style={{ width: '28%' }} />
                    </div>
                    <p className="text-xs text-rose-400">Not Free</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-platinum-300">Obstacles to Access</span>
                      <span className="text-white font-bold">14/25</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: '56%' }} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-platinum-300">Violations of User Rights</span>
                      <span className="text-white font-bold">5/40</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full" style={{ width: '12.5%' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          </div>
        </TabsContent>

        {/* Iran War 2026 Tab */}
        <TabsContent value="iran-war" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Attack Statistics */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Plane className="h-5 w-5 text-rose-500" />
                  Iran War 2026 - First 24 Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <BarChart
                  data={iranWarChartData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: 'Count', color: CHART_COLORS.rose }]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </motion.div>

            {/* Key Stats */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertOctagon className="h-5 w-5 text-orange-500" />
                  Impact Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0 space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
                  <span className="text-platinum-300">Interception Rate</span>
                  <span className="text-2xl font-bold text-rose-400">{iranWarStats?.interceptionRate || '>90%'}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-violet-500/10 border border-violet-500/30">
                  <span className="text-platinum-300">Influencers in Dubai</span>
                  <span className="text-2xl font-bold text-violet-400">{iranWarStats?.influencersInDubai?.toLocaleString() || '50,000'}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                  <span className="text-platinum-300">Expats in Dubai</span>
                  <span className="text-2xl font-bold text-amber-400">{iranWarStats?.expatsInDubai?.value || '90'}%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-orange-500/10 border border-orange-500/30">
                  <span className="text-platinum-300">Social Media Arrests</span>
                  <span className="text-2xl font-bold text-orange-400">{iranWarStats?.detentions || '375+'}</span>
                </div>
              </CardContent>
            </motion.div>

            {/* Content Crackdown */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border lg:col-span-2">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-violet-500" />
                  Social Media Crackdown
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-rose-500/20 to-red-600/10 border border-rose-500/30">
                    <p className="text-sm text-platinum-300 mb-1">Detentions</p>
                    <p className="text-3xl font-bold text-rose-400">375+</p>
                    <p className="text-xs text-platinum-400 mt-1">Per Abu Dhabi Police</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-600/10 border border-orange-500/30">
                    <p className="text-sm text-platinum-300 mb-1">Charged Together</p>
                    <p className="text-3xl font-bold text-orange-400">20+</p>
                    <p className="text-xs text-platinum-400 mt-1">Per Detained in Dubai</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-600/10 border border-violet-500/30">
                    <p className="text-sm text-platinum-300 mb-1">Drone Strike Survivors Arrested</p>
                    <p className="text-3xl font-bold text-violet-400">3</p>
                    <p className="text-xs text-platinum-400 mt-1">For sharing photos with family</p>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          </div>
        </TabsContent>

        {/* Human Rights Tab */}
        <TabsContent value="human-rights" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Political Prisoner Stats */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Gavel className="h-5 w-5 text-orange-500" />
                  UAE94 Mass Trial Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <BarChart
                  data={politicalPrisonerChartData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: 'Count', color: CHART_COLORS.orange }]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </motion.div>

            {/* Torture Methods */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-rose-500" />
                  16 Documented Torture Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <ScrollArea className="h-[280px]">
                  <div className="grid grid-cols-2 gap-2">
                    {(tortureMethods || []).map((method: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded bg-rose-500/10 border border-rose-500/20">
                        <span className="text-rose-400 font-bold text-xs">{idx + 1}</span>
                        <span className="text-platinum-300 text-sm">{method}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </motion.div>

            {/* Threat Vectors */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border lg:col-span-2">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-rose-500" />
                  Top 10 Reputation Threat Vectors
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-2">
                  {(threatVectors || []).map((vector: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-glass-surface/30 border border-glass-border"
                    >
                      <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${
                        vector.severity === 'CRITICAL' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/50' :
                        vector.severity === 'HIGH' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50' :
                        'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                      }`}>
                        {vector.rank}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-platinum-200">{vector.vector}</h4>
                          <Badge variant="outline" className={`text-xs ${
                            vector.severity === 'CRITICAL' ? 'text-rose border-rose-500/50' :
                            vector.severity === 'HIGH' ? 'text-orange border-orange-500/50' :
                            'text-amber border-amber-500/50'
                          }`}>
                            {vector.severity}
                          </Badge>
                        </div>
                        <p className="text-xs text-platinum-400 mt-1">{vector.evidence}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>
          </div>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Crisis Timeline" description="Historical timeline of reputation crises">
              <ScrollArea className="h-[600px]">
                <div className="relative pl-8 border-l-2 border-violet-500/30 space-y-6">
                  {(crisisData?.timeline || []).map((event: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="relative"
                    >
                      <div className="absolute -left-[37px] w-4 h-4 rounded-full bg-violet-500 border-2 border-violet-400" />
                      <div className="glass-card rounded-lg p-4 bg-glass-surface/50 border border-violet-500/20">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-violet-400">{event.date}</span>
                          <Badge variant="outline" className="text-xs border-violet-500/50 text-violet-300">
                            {event.stage}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-platinum-200 mb-1">{event.event}</h4>
                        <p className="text-sm text-platinum-400">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Source References" description="58 sources from MD file 4-5">
              <ScrollArea className="h-[600px]">
                <div className="grid gap-3">
                  {(crisisData?.sources || []).map((source: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-glass-surface/30 border border-glass-border hover:border-violet-500/50 transition-colors"
                    >
                      <Badge variant="outline" className={`shrink-0 ${
                        source.tier === 'TIER_0' || source.tier === 'TIER_1' ? 'border-emerald-500/50 text-emerald-400' :
                        source.tier === 'TIER_2' ? 'border-violet-500/50 text-violet-400' :
                        source.tier === 'TIER_3' ? 'border-amber-500/50 text-amber-400' :
                        'border-slate-500/50 text-slate-400'
                      }`}>
                        {source.tier}
                      </Badge>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-platinum-200 text-sm truncate">{source.source}</h4>
                        <p className="text-xs text-platinum-400 mt-1">
                          Credibility: {source.credibility} |{' '}
                          <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline inline-flex items-center gap-1">
                            View Source <ExternalLink className="h-3 w-3" />
                          </a>
                        </p>
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
