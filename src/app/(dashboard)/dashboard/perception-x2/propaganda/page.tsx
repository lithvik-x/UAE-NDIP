// @ts-nocheck
'use client'

/**
 * Propaganda & Disinformation Dashboard Page
 * MD 3-7 (3-7-propaganda-disinformation-results.md)
 *
 * Comprehensive visualization of UAE's propaganda and disinformation landscape,
 * covering both UAE as actor and target, bot/troll infrastructure, deepfake threats.
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassCard, GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Target,
  Shield,
  Scale,
  Bot,
  Users,
  Wifi,
  FileText,
  Clock,
  Flag,
  AlertOctagon,
  Eye,
  Activity,
  Database,
  Network,
  ChevronRight,
  Info,
  Warning,
  Mail,
  Globe2,
} from 'lucide-react'
import { usePropagandaDisinformationData } from '@/lib/data-loader/hooks'
import {
  propagandaDisinformationData,
  executionMetadata,
  focusAreas,
  queryPatterns,
  uaeAsActorFindings,
  uaeAsTargetFindings,
  infrastructureData,
  deepfakeThreatData,
  qatarCrisisData,
  foreignDisinfoData,
  healthMisinfoData,
  organizations,
  keyIndividuals,
  statisticsSummary,
  timelineData,
  dashboardKPIs,
  threatMatrix,
  geographicHeatMap,
  sentimentAnalysis,
  verificationStatus,
  countSummary,
  sourceCredibilityMatrix,
  keySources,
  dashboardMetrics,
} from '@/lib/data/perception/propaganda-disinformation-data'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

// Helper functions
function getSeverityColor(severity: string) {
  switch (severity) {
    case 'CRITICAL': return 'rose'
    case 'HIGH': return 'orange'
    case 'MEDIUM': return 'gold'
    case 'LOW': return 'emerald'
    default: return 'platinum'
  }
}

function getRoleBadgeColor(role: string) {
  switch (role) {
    case 'ACTOR': return 'bg-rose-500/20 text-rose-400 border-rose-500/30'
    case 'TARGET': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    case 'COMPROMISED': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    default: return 'bg-platinum-500/20 text-platinum-400 border-platinum-500/30'
  }
}

function getTrendIcon(trend: string) {
  if (trend === 'Increasing' || trend === 'Rising') return <TrendingUp className="h-3 w-3" />
  return <Activity className="h-3 w-3" />
}

export default function PropagandaDisinformationPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Key metrics for MetricCards
  const keyMetrics = [
    {
      title: 'Operations',
      value: dashboardKPIs[0]?.value || '10+',
      icon: <Globe className="h-6 w-6" />,
      gradient: 'rose' as const,
      trend: 'up' as const,
    },
    {
      title: 'Countries Affected',
      value: dashboardKPIs[1]?.value || '18+',
      icon: <Globe2 className="h-6 w-6" />,
      gradient: 'orange' as const,
      trend: 'neutral' as const,
    },
    {
      title: 'Bot Accounts',
      value: '100K+',
      icon: <Bot className="h-6 w-6" />,
      gradient: 'purple' as const,
      trend: 'up' as const,
    },
    {
      title: 'AI Arrests (2026)',
      value: '35',
      icon: <AlertTriangle className="h-6 w-6" />,
      gradient: 'gold' as const,
      trend: 'up' as const,
    },
  ]

  // Actor vs Target chart data
  const actorTargetData = [
    { name: 'As Actor', value: 5, color: CHART_COLORS.rose },
    { name: 'As Target', value: 4, color: CHART_COLORS.orange },
    { name: 'Both', value: 1, color: CHART_COLORS.purple },
  ]

  // Threat matrix chart data
  const threatChartData = threatMatrix.map(t => ({
    category: t.category.split(' ')[0],
    severity: t.severity === 'CRITICAL' ? 3 : t.severity === 'HIGH' ? 2 : 1,
    role: t.uaeRole,
  }))

  // Operations timeline chart data
  const operationsByYear = timelineData.reduce((acc, item) => {
    const existing = acc.find(a => a.year === item.year)
    if (existing) {
      existing.operations += item.events.length
    } else {
      acc.push({ year: item.year, operations: item.events.length })
    }
    return acc
  }, [] as { year: number; operations: number }[])

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge
              variant="rose"
              className="mb-2 bg-rose-500/20 text-rose-400 border-rose-500/50 font-rajdhani"
            >
              <Shield className="w-3 h-3 mr-1" />
              PROPAGANDA & DISINFORMATION
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold font-rajdhani gradient-text-rose-500"
          >
            UAE Propaganda & Disinformation Analysis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-platinum-400"
          >
            Comprehensive analysis of UAE as both actor and target of disinformation,
            covering {executionMetadata.queriesExecuted} query dimensions and {countSummary.operationsDetailed}+ documented operations.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3"
        >
          <Badge variant="outline" className="border-rose-500/40 text-rose-400">
            <Clock className="h-3 w-3 mr-1" />
            {executionMetadata.dateExecuted}
          </Badge>
          <Badge variant="outline" className="border-emerald-500/40 text-emerald-400">
            <CheckCircle className="h-3 w-3 mr-1" />
            SSOT Verified
          </Badge>
        </motion.div>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {keyMetrics.map((metric, idx) => (
          <motion.div
            key={metric.title}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: idx * 0.08 }}
          >
            <MetricCard
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              gradient={metric.gradient}
              trend={metric.trend}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Main Tabs */}
      <motion.div variants={fadeInUp}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="glass-panel flex gap-1 p-1 overflow-x-auto">
            <TabsTrigger value="overview" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-rose-500/20">
              <Shield className="h-3 w-3 mr-1" /> Overview
            </TabsTrigger>
            <TabsTrigger value="actor" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-rose-500/20">
              <Target className="h-3 w-3 mr-1" /> As Actor
            </TabsTrigger>
            <TabsTrigger value="target" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-orange-500/20">
              <AlertTriangle className="h-3 w-3 mr-1" /> As Target
            </TabsTrigger>
            <TabsTrigger value="infrastructure" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-purple-500/20">
              <Bot className="h-3 w-3 mr-1" /> Infrastructure
            </TabsTrigger>
            <TabsTrigger value="timeline" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-500/20">
              <Clock className="h-3 w-3 mr-1" /> Timeline
            </TabsTrigger>
            <TabsTrigger value="entities" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-emerald-500/20">
              <Network className="h-3 w-3 mr-1" /> Entities
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Threat Matrix */}
              <GlassPanel title="Threat Matrix" description="UAE threat landscape by category">
                <div className="space-y-3">
                  {threatMatrix.map((threat, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/30 bg-platinum-800/20">
                      <div className="flex items-center gap-3">
                        <Badge className={getRoleBadgeColor(threat.uaeRole)}>{threat.uaeRole}</Badge>
                        <span className="text-sm text-platinum-300">{threat.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={threat.severity === 'CRITICAL' ? 'destructive' : threat.severity === 'HIGH' ? 'warning' : 'secondary'}>
                          {threat.severity}
                        </Badge>
                        <Badge variant="outline" className="text-platinum-400">{threat.activityLevel}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* Geographic Heat Map */}
              <GlassPanel title="Geographic Distribution" description="UAE role by region">
                <div className="space-y-3">
                  {geographicHeatMap.map((region, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-platinum-700/30 bg-platinum-800/20">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-semibold text-platinum-200">{region.region}</p>
                          <p className="text-xs text-platinum-400 mt-0.5">{region.primaryThreat}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={region.uaeAsActor === 'YES' ? 'bg-rose-500/20 text-rose-400' : 'bg-platinum-500/20 text-platinum-400'}>
                            Actor: {region.uaeAsActor}
                          </Badge>
                          <Badge className={region.uaeAsTarget === 'YES' ? 'bg-orange-500/20 text-orange-400' : 'bg-platinum-500/20 text-platinum-400'}>
                            Target: {region.uaeAsTarget}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* Operations by Year */}
              <GlassPanel title="Operations Timeline" description="Documented operations by year">
                <BarChart
                  data={operationsByYear}
                  xAxisKey="year"
                  bars={[{ dataKey: 'operations', name: 'Operations', color: CHART_COLORS.rose }]}
                  height={200}
                  showGrid={true}
                />
              </GlassPanel>

              {/* Focus Areas */}
              <GlassPanel title="Priority Focus Areas" description="Research priorities by tier">
                <div className="space-y-2">
                  {focusAreas.filter(f => f.priority === 'P1').map((area, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 rounded bg-rose-500/10 border border-rose-500/20">
                      <Badge variant="destructive" className="bg-rose-500/20 text-rose-400">{area.priority}</Badge>
                      <span className="text-sm text-platinum-200">{area.area}</span>
                    </div>
                  ))}
                  {focusAreas.filter(f => f.priority === 'P2').map((area, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 rounded bg-orange-500/10 border border-orange-500/20">
                      <Badge variant="warning" className="bg-orange-500/20 text-orange-400">{area.priority}</Badge>
                      <span className="text-sm text-platinum-200">{area.area}</span>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </div>

            {/* Sentiment Analysis */}
            <GlassPanel title="Sentiment Analysis" description="Narrative sentiment toward UAE">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {sentimentAnalysis.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-lg border bg-platinum-800/20 border-platinum-700/30">
                    <p className="text-sm font-semibold text-platinum-200">{item.narrative}</p>
                    <Badge
                      variant={
                        item.sentiment.includes('POSITIVE') ? 'default' :
                        item.sentiment.includes('NEGATIVE') ? 'destructive' : 'secondary'
                      }
                      className="mt-2"
                    >
                      {item.sentiment}
                    </Badge>
                    <p className="text-xs text-platinum-500 mt-2">Source: {item.sourceType}</p>
                    <p className="text-xs text-platinum-500">Verification: {item.verification}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* As Actor Tab */}
          <TabsContent value="actor" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* ALP Services */}
              <GlassPanel title="ALP Services Campaign" description="Swiss firm contracted by UAE for anti-Muslim disinformation">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                      <p className="text-xs text-rose-400">Cost</p>
                      <p className="text-xl font-bold text-platinum-100">€5.7M</p>
                    </div>
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                      <p className="text-xs text-rose-400">Period</p>
                      <p className="text-lg font-bold text-platinum-100">2017-2020</p>
                    </div>
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                      <p className="text-xs text-rose-400">Countries</p>
                      <p className="text-xl font-bold text-platinum-100">18</p>
                    </div>
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                      <p className="text-xs text-rose-400">Targets</p>
                      <p className="text-sm font-bold text-platinum-100">Muslims, Mosques, Journalists</p>
                    </div>
                  </div>
                  <p className="text-xs text-platinum-400">Source: European Parliament (July 31, 2023)</p>
                </div>
              </GlassPanel>

              {/* Meta Removals */}
              <GlassPanel title="Meta Account Removals" description="Facebook/Instagram coordinated inauthentic behavior (2019)">
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 rounded bg-rose-500/10 border border-rose-500/20 text-center">
                      <p className="text-2xl font-bold text-rose-400">259</p>
                      <p className="text-xs text-platinum-400">Accounts</p>
                    </div>
                    <div className="p-2 rounded bg-rose-500/10 border border-rose-500/20 text-center">
                      <p className="text-2xl font-bold text-rose-400">102</p>
                      <p className="text-xs text-platinum-400">Pages</p>
                    </div>
                    <div className="p-2 rounded bg-rose-500/10 border border-rose-500/20 text-center">
                      <p className="text-2xl font-bold text-rose-400">13.7M</p>
                      <p className="text-xs text-platinum-400">Followers</p>
                    </div>
                  </div>
                  <div className="p-3 rounded bg-platinum-800/20 border border-platinum-700/30">
                    <p className="text-xs text-platinum-400 mb-1">Firms Linked</p>
                    <div className="flex gap-2">
                      <Badge variant="destructive">Newave (UAE)</Badge>
                      <Badge variant="destructive">New Waves (Egypt)</Badge>
                    </div>
                  </div>
                  <p className="text-xs text-platinum-500">Ad spend: ~$167,000</p>
                </div>
              </GlassPanel>

              {/* Twitter Bots */}
              <GlassPanel title="Twitter Bot Network" description="MBZ tweet engagement analysis">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded bg-purple-500/10 border border-purple-500/20">
                      <p className="text-xs text-purple-400">Bot Engagement</p>
                      <p className="text-2xl font-bold text-purple-400">91%</p>
                    </div>
                    <div className="p-3 rounded bg-purple-500/10 border border-purple-500/20">
                      <p className="text-xs text-purple-400">Bot Accounts</p>
                      <p className="text-2xl font-bold text-purple-400">11,000+</p>
                    </div>
                  </div>
                  <div className="p-3 rounded bg-platinum-800/20 border border-platinum-700/30">
                    <p className="text-xs text-platinum-400 mb-1">Anomaly</p>
                    <p className="text-sm text-platinum-300">50% of accounts created in just 25 days</p>
                    <p className="text-xs text-platinum-500 mt-1">41% engaged with MBZ tweet created in June 2020</p>
                  </div>
                  <p className="text-xs text-platinum-500">Source: Marc Owen Jones, Hamad bin Khalifa University</p>
                </div>
              </GlassPanel>

              {/* Eritrea Trolling */}
              <GlassPanel title="Eritrea Trolling Operation" description="UAE-Saudi Eritrea cooperation">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded bg-purple-500/10 border border-purple-500/20">
                      <p className="text-xs text-purple-400">UAE Trolls</p>
                      <p className="text-2xl font-bold text-purple-400">200+</p>
                    </div>
                    <div className="p-3 rounded bg-purple-500/10 border border-purple-500/20">
                      <p className="text-xs text-purple-400">Cooperation Start</p>
                      <p className="text-lg font-bold text-purple-400">Feb 2018</p>
                    </div>
                  </div>
                  <div className="p-3 rounded bg-platinum-800/20 border border-platinum-700/30">
                    <p className="text-xs text-platinum-400 mb-1">Key Personnel</p>
                    <p className="text-sm text-platinum-300">Hamad Al Mazrouei (UAE Intelligence)</p>
                    <p className="text-sm text-platinum-300">Turki Al-Sheik (Saudi Arabia)</p>
                  </div>
                  <Badge variant="destructive" className="bg-rose-500/20">Objective: "Encircle Qatar"</Badge>
                </div>
              </GlassPanel>
            </div>

            {/* Pseudo-Media Outlets */}
            <GlassPanel title="Pseudo-Media Outlets" description="Identified fake news ecosystem">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {uaeAsActorFindings.pseudoMediaOutlets.map((outlet, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-rose-500/20 bg-rose-500/5">
                    <p className="text-sm font-semibold text-rose-400">{outlet.name}</p>
                    <p className="text-xs text-platinum-400 mt-1">{outlet.type}</p>
                    <p className="text-xs text-platinum-500 mt-1">{outlet.purpose}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Primary Narratives */}
            <GlassPanel title="Primary Narratives Promoted" description="Key themes in UAE influence operations">
              <div className="space-y-3">
                {uaeAsActorFindings.primaryNarratives.map((narrative, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-platinum-700/30 bg-platinum-800/20">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge variant="destructive" className="bg-rose-500/20 text-rose-400 mb-2">{narrative.theme}</Badge>
                        <p className="text-sm text-platinum-300">{narrative.description}</p>
                      </div>
                      <Badge variant="outline" className="text-platinum-400">{narrative.target}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* As Target Tab */}
          <TabsContent value="target" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Campaigns Against UAE */}
              <GlassPanel title="Coordinated Campaigns Against UAE" description="Documented disinformation campaigns targeting UAE">
                <div className="space-y-3">
                  {uaeAsTargetFindings.campaignsAgainstUAE.map((campaign, idx) => (
                    <div key={idx} className="p-4 rounded-lg border border-orange-500/20 bg-orange-500/5">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-semibold text-orange-400">{campaign.campaign}</p>
                        <Badge variant="outline" className="text-platinum-400">{campaign.date}</Badge>
                      </div>
                      <p className="text-xs text-platinum-400">{campaign.platform}</p>
                      {campaign.claim && (
                        <p className="text-xs text-platinum-300 mt-2 p-2 rounded bg-platinum-800/30">Claim: {campaign.claim}</p>
                      )}
                      {campaign.reality && (
                        <p className="text-xs text-emerald-400 mt-1">Fact: {campaign.reality}</p>
                      )}
                      {campaign.attribution && (
                        <Badge variant="secondary" className="mt-2 bg-orange-500/20 text-orange-400">Attribution: {campaign.attribution}</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* UAE Response Metrics */}
              <GlassPanel title="UAE Response Metrics" description="Enforcement actions against disinformation">
                <div className="space-y-3">
                  {uaeAsTargetFindings.uaeResponseMetrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
                      <span className="text-sm text-platinum-300">{metric.type}</span>
                      <div className="text-right">
                        <p className="text-lg font-bold text-emerald-400">{metric.count}</p>
                        <p className="text-xs text-platinum-500">{metric.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* Iranian Attacks */}
              <GlassPanel title="Iranian Attacks & Misinformation" description="April 2026 attack wave and response">
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded bg-orange-500/10 border border-orange-500/20">
                      <p className="text-xs text-orange-400">Drones</p>
                      <p className="text-2xl font-bold text-orange-400">{uaeAsTargetFindings.iranianAttacks.drones}</p>
                    </div>
                    <div className="p-3 rounded bg-orange-500/10 border border-orange-500/20">
                      <p className="text-xs text-orange-400">Ballistic Missiles</p>
                      <p className="text-2xl font-bold text-orange-400">{uaeAsTargetFindings.iranianAttacks.ballisticMissiles}</p>
                    </div>
                  </div>
                  <div className="p-3 rounded bg-platinum-800/20 border border-platinum-700/30">
                    <p className="text-xs text-platinum-400 mb-1">False Claim</p>
                    <p className="text-sm text-platinum-300">Oracle data centre struck by IRGC</p>
                    <p className="text-xs text-emerald-400 mt-1">Dubai Media Office denied</p>
                  </div>
                  <Badge variant="destructive" className="bg-rose-500/20">45 arrested for spreading misinformation</Badge>
                </div>
              </GlassPanel>

              {/* Russian Disinformation */}
              <GlassPanel title="Russian Disinformation in UAE" description="UAE complicity in Russian disinformation">
                <div className="space-y-3">
                  <div className="p-3 rounded bg-purple-500/10 border border-purple-500/20">
                    <p className="text-xs text-purple-400 mb-1">Complicity</p>
                    <p className="text-sm text-platinum-300">Trolls with Saudi/Emirati flags spread Russian disinformation</p>
                  </div>
                  <div className="p-3 rounded bg-purple-500/10 border border-purple-500/20">
                    <p className="text-xs text-purple-400 mb-1">Position</p>
                    <p className="text-sm text-platinum-300">UAE called for negotiations rather than condemning Russia</p>
                  </div>
                  <div className="p-3 rounded bg-platinum-800/20 border border-platinum-700/30">
                    <p className="text-xs text-platinum-400 mb-1">Conduits</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Nabd (Arabic news aggregator)</Badge>
                      <Badge>ASDA'A BCW (Dubai PR)</Badge>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </TabsContent>

          {/* Infrastructure Tab */}
          <TabsContent value="infrastructure" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Scale Metrics */}
              <GlassPanel title="Infrastructure Scale" description="Documented bot/troll infrastructure">
                <div className="space-y-3">
                  {infrastructureData.scaleMetrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-purple-500/20 bg-purple-500/5">
                      <span className="text-sm text-platinum-300">{metric.metric}</span>
                      <div className="text-right">
                        <p className="text-lg font-bold text-purple-400">{metric.count}</p>
                        <p className="text-xs text-platinum-500">{metric.source}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* Multi-Layer Method */}
              <GlassPanel title="Multi-Layer Method" description="Five-layer manipulation infrastructure">
                <div className="space-y-2">
                  {infrastructureData.multiLayerMethod.map((layer, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-platinum-700/30 bg-platinum-800/20">
                      <div className="flex items-center gap-3 mb-1">
                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">Layer {layer.layer}</Badge>
                        <span className="text-sm font-semibold text-platinum-200">{layer.component}</span>
                      </div>
                      <p className="text-xs text-platinum-400">{layer.characteristics}</p>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* Deepfake Stats */}
              <GlassPanel title="Deepfake/AI Content" description="UAE context statistics">
                <div className="grid grid-cols-2 gap-3">
                  {deepfakeThreatData.uaeContextStats.map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-cyan-500/20 bg-cyan-500/5">
                      <p className="text-xs text-cyan-400">{stat.metric}</p>
                      <p className="text-xl font-bold text-cyan-400">{stat.value}</p>
                      <p className="text-xs text-platinum-500">{stat.date}</p>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* Detection Tests */}
              <GlassPanel title="Deepfake Detection Tests" description="Three tests to spot deepfakes">
                <div className="space-y-3">
                  {deepfakeThreatData.detectionTests.map((test, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-cyan-500/20 bg-cyan-500/5">
                      <p className="text-sm font-semibold text-cyan-400">{test.test}</p>
                      <p className="text-xs text-platinum-300 mt-1">{test.method}</p>
                      <p className="text-xs text-platinum-500 mt-1">Indicator: {test.indicator}</p>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <GlassPanel title="Operations Timeline" description="Key events by year">
              <ScrollArea className="h-[500px]">
                <div className="space-y-4">
                  {timelineData.map((yearData, idx) => (
                    <div key={idx} className="relative pl-8 border-l-2 border-rose-500/30">
                      <div className="absolute -left-3 top-0 w-5 h-5 rounded-full bg-rose-500/50 border-2 border-rose-500" />
                      <p className="text-lg font-bold text-rose-400">{yearData.year}</p>
                      <div className="space-y-2 mt-2">
                        {yearData.events.map((event, eventIdx) => (
                          <div key={eventIdx} className="p-2 rounded bg-platinum-800/20 border border-platinum-700/30">
                            <p className="text-sm text-platinum-300">{event}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </TabsContent>

          {/* Entities Tab */}
          <TabsContent value="entities" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Organizations */}
              <GlassPanel title="Key Organizations" description="Entities involved in disinformation">
                <ScrollArea className="h-[400px]">
                  <div className="space-y-2">
                    {organizations.map((org, idx) => (
                      <div key={idx} className="p-3 rounded-lg border border-platinum-700/30 bg-platinum-800/20">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-semibold text-platinum-200">{org.name}</p>
                            <p className="text-xs text-platinum-500">{org.type} | {org.country}</p>
                          </div>
                          <Badge
                            variant={
                              org.credibility === 'CONFIRMED THREAT' ? 'destructive' :
                              org.credibility === 'SUSPECTED' ? 'warning' : 'secondary'
                            }
                          >
                            {org.credibility}
                          </Badge>
                        </div>
                        <p className="text-xs text-platinum-400 mt-1">{org.role}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </GlassPanel>

              {/* Key Individuals */}
              <GlassPanel title="Key Individuals" description="Personnel involved in operations">
                <ScrollArea className="h-[400px]">
                  <div className="space-y-2">
                    {keyIndividuals.map((person, idx) => (
                      <div key={idx} className="p-3 rounded-lg border border-platinum-700/30 bg-platinum-800/20">
                        <p className="text-sm font-semibold text-platinum-200">{person.name}</p>
                        <p className="text-xs text-platinum-500">{person.role} | {person.affiliation}</p>
                        <p className="text-xs text-rose-400 mt-1">{person.relevance}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </GlassPanel>
            </div>

            {/* Statistics Summary */}
            <GlassPanel title="Statistical Summary" description="Operations by type">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {statisticsSummary.operationsByType.map((op, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-platinum-700/30 bg-platinum-800/20">
                    <p className="text-sm font-semibold text-platinum-200">{op.type}</p>
                    <p className="text-2xl font-bold text-rose-400 mt-1">{op.count}</p>
                    <p className="text-xs text-platinum-500 mt-1">{op.countries}</p>
                    <p className="text-xs text-platinum-600 mt-1">{op.dateRange}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Financial Data */}
            <GlassPanel title="Financial Data" description="Exposed payments and contracts">
              <div className="space-y-3">
                {statisticsSummary.financialData.map((fin, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-rose-500/20 bg-rose-500/5">
                    <div>
                      <p className="text-sm text-platinum-300">{fin.payment}</p>
                      <p className="text-xs text-platinum-500">{fin.period}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-rose-400">{fin.amount}</p>
                      <p className="text-xs text-platinum-500">Via {fin.confirmedBy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
