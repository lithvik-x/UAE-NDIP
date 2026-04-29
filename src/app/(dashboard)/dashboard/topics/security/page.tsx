'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel, GlassCard } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import { motion } from 'framer-motion'
import {
  AlertCircle,
  AlertTriangle,
  Shield,
  Zap,
  Users,
  Plane,
  Lock,
  Bug,
  Radar,
  Crosshair,
  AlertOctagon,
  Globe,
  Activity,
  TrendingUp,
  TrendingDown,
  Landmark,
  Truck,
  ScrollText,
  Eye,
  Siren,
  UserCheck,
  Fingerprint,
  Scale,
  Heart,
  Flag,
  Target,
  Radio,
  Ship,
  Mountain,
  Flame,
  Cpu,
  Building,
  BookOpen,
  Lightbulb,
} from 'lucide-react'
import {
  securityDefenseData as data,
  defenseSpendingChartData,
  edgeRevenueChartData,
  navyFleetChartData,
  militaryPersonnelData,
  queryPatterns,
  summaryStatistics,
  barakahUnits,
  cyberAttackStats,
  tortureMethods,
  mercenaryOperations,
  secretPrisonLocations,
  humanRightsCases,
  armsDealsData,
  missileDefenseData,
  navalOperations,
  recentDevelopments2026,
  sentimentAnalysis,
  defenseEntities,
  designatedOrganizations,
  oyoonCapabilities,
  ctTreaties,
  ctFramework,
  ctPenalties,
  presidentialGuardData,
  militaryAgreements,
  militaryExercises,
  armyOrganization,
  airForceAircraft,
  equipmentSuppliers,
  keyEquipment,
  yemenIncidents,
  crimeStatsData,
  safetyRankingData,
  nationalServiceData,
  emergencyNumbers,
  expressionRestrictions,
  domesticWorkerData,
  kafalaReforms,
  detentionFacilities,
  nsoOperations,
  franceUaeDefense,
  iranUaeTensions,
  relevanceAssessment,
  enforcementActions,
  securityEventsTimeline,
  fatfStatusData,
  interpolExtraditions,
  edgeGroupMetrics,
  edgeGroupAcquisitions,
  edgeGroupProducts,
} from '@/lib/data/topics/security-defense-data'

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const getAlertBadge = (level?: string) => {
  switch (level) {
    case 'RED':
      return (
        <Badge variant="destructive" className="text-xs gap-1">
          <AlertCircle className="h-3 w-3" />
          RED
        </Badge>
      )
    case 'YELLOW':
      return (
        <Badge variant="warning" className="text-xs gap-1">
          <AlertTriangle className="h-3 w-3" />
          YELLOW
        </Badge>
      )
    case 'GREEN':
      return (
        <Badge variant="success" className="text-xs gap-1">
          <Shield className="h-3 w-3" />
          GREEN
        </Badge>
      )
    default:
      return (
        <Badge variant="outline" className="text-xs">
          {level || 'N/A'}
        </Badge>
      )
  }
}

const getTierBadge = (tier?: number) => {
  const colors: Record<number, string> = {
    0: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
    1: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
    2: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    3: 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50',
  }
  return (
    <Badge variant="outline" className={`text-xs border ${colors[tier || 0]}`}>
      Tier {tier}
    </Badge>
  )
}

export default function SecurityDefensePage() {
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Security & Defense data...</div>
      </div>
    )
  }

  const { keyFindings } = data
  const moiDepartments: { department: string; role: string; status: string }[] = []

  // Red/Yellow alert findings
  const redFindings = keyFindings.filter((f) => f.alert === 'RED')
  const yellowFindings = keyFindings.filter((f) => f.alert === 'YELLOW')

  // Sentiment data for pie chart
  const sentimentData = [
    { name: 'Positive', value: 48, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 20, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 32, color: CHART_COLORS.rose },
  ]

  // Defense spending chart
  const defenseSpendingChart = defenseSpendingChartData.map((d) => ({
    year: d.year,
    budget: d.budget,
  }))

  // EDGE Group revenue chart
  const edgeRevenueChart = edgeRevenueChartData

  // Navy fleet chart data
  const navyFleetPieData = navyFleetChartData.map((d) => ({
    name: d.type,
    value: d.count,
    color: d.fill,
  }))

  // Sentiment radar data
  const emotionData = [
    { name: 'Fear', value: 55 },
    { name: 'Trust', value: 45 },
    { name: 'Joy', value: 35 },
    { name: 'Anticipation', value: 35 },
    { name: 'Surprise', value: 40 },
    { name: 'Anger', value: 30 },
    { name: 'Sadness', value: 25 },
    { name: 'Disgust', value: 20 },
  ]

  // Counter-terrorism sentiment data
  const ctSentimentData = [
    { name: 'Counter-terrorism', value: 65, color: CHART_COLORS.emerald },
    { name: 'Military effectiveness', value: 70, color: CHART_COLORS.gold },
    { name: 'Cybersecurity defense', value: 60, color: CHART_COLORS.info },
    { name: 'Human rights violations', value: 25, color: CHART_COLORS.rose },
    { name: 'Labor rights', value: 30, color: CHART_COLORS.orange },
  ]

  return (
    <div className="space-y-8 p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex items-start justify-between">
          <div>
            <Badge variant="default" className="mb-2 gap-1">
              <Shield className="h-3 w-3" />
              S-SECTOR
            </Badge>
            <h1 className="text-3xl font-extrabold gradient-text-platinum">Security & Defense</h1>
            <p className="mt-2 text-slate-400 max-w-2xl">
              {data.description ||
                'Armed forces, EDGE Group, nuclear program, missile defense, military operations, cyber security, regional conflicts'}
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10"
            >
              <Radar className="h-4 w-4" />
              Defense Map
            </Button>
            <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
              <Zap className="h-4 w-4" />
              Analyze
            </Button>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Defense Budget 2026"
            value="$27B"
            previousValue={24.4}
            unit="USD"
            icon={<Truck className="h-6 w-6" />}
            gradient="denim"
          />
          <MetricCard
            title="Armed Forces"
            value="65,000"
            previousValue={63000}
            icon={<Users className="h-6 w-6" />}
            gradient="gold"
          />
          <MetricCard
            title="Cyber Attacks/Day"
            value="600K"
            previousValue={500}
            icon={<Bug className="h-6 w-6" />}
            gradient="rose"
          />
          <MetricCard
            title="UAE Safety Rank"
            value="1st"
            previousValue={2}
            icon={<Shield className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>

        {/* Query Execution Summary */}
        <motion.div variants={itemVariants}>
          <GlassPanel
            title="Research Execution Summary"
            description="37 query patterns executed across Security & Defense domain"
            badge={`${summaryStatistics.queriesSuccessfullyExecuted}/${summaryStatistics.totalQueriesAttempted} Executed`}
          >
            <div className="grid gap-4 sm:grid-cols-4">
              <div className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-navy text-white">
                  <ScrollText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-platinum-100">{summaryStatistics.totalQueriesAttempted}</p>
                  <p className="text-xs text-slate-400">Total Queries</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-emerald text-white">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-platinum-100">{summaryStatistics.queriesSuccessfullyExecuted}</p>
                  <p className="text-xs text-slate-400">Successfully Executed</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold text-white">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-platinum-100">{summaryStatistics.queriesRateLimited}</p>
                  <p className="text-xs text-slate-400">Rate Limited</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-cyan text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-platinum-100">{summaryStatistics.independentSourcesCited}+</p>
                  <p className="text-xs text-slate-400">Sources Cited</p>
                </div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>

        {/* Alert Findings */}
        {(redFindings.length > 0 || yellowFindings.length > 0) && (
          <motion.div variants={itemVariants}>
            <div className="grid gap-4 lg:grid-cols-2">
              {redFindings.length > 0 && (
                <Card className="glass-card border-red-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                      <AlertOctagon className="h-5 w-5" />
                      Red Alert Findings ({redFindings.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {redFindings.map((finding, idx) => (
                        <div
                          key={idx}
                          className="flex items-start justify-between rounded-lg bg-red-500/10 p-3 border border-red-500/30"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{finding.finding}</p>
                            <p className="mt-1 text-xs text-slate-400">Source: {finding.source}</p>
                          </div>
                          <div className="text-right ml-3">
                            <Badge variant="destructive" className="text-xs">{finding.metric}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              {yellowFindings.length > 0 && (
                <Card className="glass-card border-yellow-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
                      <AlertTriangle className="h-5 w-5" />
                      Yellow Alert Findings ({yellowFindings.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {yellowFindings.map((finding, idx) => (
                        <div
                          key={idx}
                          className="flex items-start justify-between rounded-lg bg-yellow-500/10 p-3 border border-yellow-500/30"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{finding.finding}</p>
                            <p className="mt-1 text-xs text-slate-400">Source: {finding.source}</p>
                          </div>
                          <div className="text-right ml-3">
                            <Badge variant="warning" className="text-xs">{finding.metric}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </motion.div>
        )}

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="glass-panel" scrollable>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="military">Military</TabsTrigger>
            <TabsTrigger value="cybersecurity">Cybersecurity</TabsTrigger>
            <TabsTrigger value="internalsecurity">Internal Security</TabsTrigger>
            <TabsTrigger value="humancost">Human Cost</TabsTrigger>
            <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <GlassPanel
              title="Security & Defense Overview"
              description="Comprehensive view of UAE security posture and defense capabilities"
            >
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                      <CardDescription>Public sentiment across security topics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart data={sentimentData} height={260} showLegend />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Defense Spending Trend</CardTitle>
                      <CardDescription>UAE defense budget 2024-2026 ($B)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={defenseSpendingChart}
                        xAxisKey="year"
                        bars={[
                          { dataKey: 'budget', name: 'Budget ($B)', color: CHART_COLORS.navy },
                        ]}
                        height={260}
                        showGrid
                      />
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emotions Analysis (Plutchik Model)</CardTitle>
                    <CardDescription>Emotional responses to security and defense news</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emotionData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.rose },
                      ]}
                      height={260}
                      showGrid
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Counter-Terrorism Sentiment</CardTitle>
                    <CardDescription>Perception scores across CT and human rights topics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={ctSentimentData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Score', color: CHART_COLORS.gold },
                      ]}
                      height={260}
                      showGrid
                    />
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>

            {/* Key Recent Developments */}
            <GlassPanel
              title="Key Developments 2026"
              description="Critical security and defense events"
              badge="Live Intelligence"
            >
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {recentDevelopments2026.map((dev) => (
                  <div
                    key={dev.number}
                    className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-navy text-sm font-bold text-white">
                      {dev.number}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">{dev.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{dev.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Military Tab */}
          <TabsContent value="military" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* EDGE Group Overview */}
              <GlassPanel
                title="EDGE Group"
                description="Abu Dhabi defense conglomerate, founded 2019"
                badge="Defense Industry"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {edgeGroupMetrics.map((m) => (
                      <div key={m.metric} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-xs text-slate-400">{m.metric}</span>
                        <span className="text-sm font-bold text-platinum-100">{m.value}</span>
                      </div>
                    ))}
                  </div>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-sm">Revenue Growth</CardTitle>
                      <CardDescription>Orders ($B) 2019-2022</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={edgeRevenueChart}
                        xAxisKey="year"
                        bars={[
                          { dataKey: 'orders', name: 'Orders ($B)', color: CHART_COLORS.gold },
                          { dataKey: 'exports', name: 'Exports ($B)', color: CHART_COLORS.navy },
                        ]}
                        height={200}
                        showGrid
                      />
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>

              {/* UAE Navy */}
              <GlassPanel title="UAE Navy Fleet 2026" description="79 vessels across multiple classes">
                <div className="space-y-4">
                  <Card className="glass-card">
                    <CardContent className="pt-6">
                      <PieChart data={navyFleetPieData} height={240} showLegend donut />
                    </CardContent>
                  </Card>
                  <div className="grid gap-2">
                    {navalOperations.map((op) => (
                      <div key={op.operation} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <div className="flex items-center gap-2">
                          <Ship className="h-4 w-4 text-cyan-400" />
                          <span className="text-sm text-slate-200">{op.operation}</span>
                        </div>
                        <span className="text-xs text-slate-400">{op.since}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassPanel>
            </div>

            {/* Military Structure */}
            <GlassPanel title="Armed Forces Structure" description="UAE military organization and capabilities">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm">Military Personnel by Branch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={militaryPersonnelData}
                      xAxisKey="branch"
                      bars={[
                        { dataKey: 'personnel', name: 'Personnel', color: CHART_COLORS.navy },
                      ]}
                      height={260}
                      showGrid
                      horizontal
                    />
                  </CardContent>
                </Card>

                <div className="grid gap-4 lg:grid-cols-2">
                  {/* UAE Army Organization */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-sm">UAE Army Organization</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {armyOrganization.map((unit) => (
                          <div key={unit.unit} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-2">
                            <div className="flex items-center gap-2">
                              <Target className="h-4 w-4 text-gold" />
                              <span className="text-sm text-slate-200">{unit.unit}</span>
                            </div>
                            <span className="text-xs text-slate-400">{unit.count ? `${unit.count} ${unit.details}` : unit.details}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Air Force Aircraft */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-sm">UAE Air Force Aircraft</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {airForceAircraft.map((ac) => (
                          <div key={ac.aircraft} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-2">
                            <div className="flex items-center gap-2">
                              <Plane className="h-4 w-4 text-cyan-400" />
                              <span className="text-sm text-slate-200">{ac.aircraft}</span>
                            </div>
                            <span className="text-xs text-slate-400">{ac.type}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Missile Defense */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm">Missile Defense Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {missileDefenseData.map((md) => (
                        <div key={md.system + md.specification} className="flex flex-col rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Radar className="h-4 w-4 text-emerald-400" />
                            <span className="text-sm font-semibold text-platinum-100">{md.system}</span>
                          </div>
                          <span className="text-xs text-slate-400">{md.specification}: </span>
                          <span className="text-xs text-slate-200">{md.details}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Arms Deals */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm">Major Arms Deals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {armsDealsData.map((deal) => (
                        <div key={deal.deal} className="flex items-start justify-between rounded-lg bg-slate-800/50 p-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-200">{deal.deal}</p>
                            <p className="text-xs text-slate-400">{deal.details}</p>
                          </div>
                          <Badge variant={deal.status.includes('Suspended') ? 'warning' : deal.status.includes('Operational') ? 'success' : 'outline'} className="text-xs shrink-0 ml-2">
                            {deal.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Barakah Nuclear */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm">Barakah Nuclear Power Plant</CardTitle>
                    <CardDescription>5,600 MW total capacity — first in Arab World</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {barakahUnits.map((unit) => (
                        <div key={unit.unit} className="flex flex-col items-center rounded-lg bg-slate-800/50 p-3 text-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-emerald text-white font-bold mb-2">
                            {unit.unit}
                          </div>
                          <span className="text-sm font-semibold text-platinum-100">{unit.capacity}</span>
                          <span className="text-xs text-slate-400">{unit.commercialOperation}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Foreign Military Agreements */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm">Foreign Military Agreements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {militaryAgreements.map((ma) => (
                        <div key={ma.country} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                          <Flag className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-slate-200">{ma.country}</p>
                            <p className="text-xs text-slate-400">{ma.agreement}</p>
                            <p className="text-xs text-platinum-400 mt-1">{ma.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>

            {/* Military Exercises */}
            <GlassPanel title="Military Exercises" description="International partnership exercises">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {militaryExercises.map((ex) => (
                  <div key={ex.name} className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                    <Activity className="h-5 w-5 text-cyan-400 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-200">{ex.name}</p>
                      <p className="text-xs text-slate-400">{ex.partner}</p>
                      <p className="text-xs text-platinum-500">{ex.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Yemen Conflict */}
            <GlassPanel title="Yemen Conflict" description="UAE involvement in Saudi-led coalition operations since 2015">
              <div className="space-y-4">
                <div className="grid gap-2 sm:grid-cols-3">
                  {yemenIncidents.map((inc) => (
                    <div key={inc.date} className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                      <Flame className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-red-300">{inc.date}</p>
                        <p className="text-xs text-slate-200">{inc.details}</p>
                        <p className="text-xs text-slate-400 mt-1">Casualties: {inc.casualties}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Military operations timeline */}
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { theater: 'Gulf War (1990-91)', activity: 'Coalition participation', since: '1990' },
                    { theater: 'War in Afghanistan', activity: 'NATO ISAF', since: '2003' },
                    { theater: 'Saudi-led Yemen intervention', activity: 'Coalition combat support', since: '2015' },
                    { theater: 'Operations against ISIS Syria', activity: 'Anti-ISIS operations', since: '2015' },
                    { theater: 'Somalia (UNOSOM II)', activity: 'Peacekeeping', since: '1993' },
                    { theater: 'Kosovo Force', activity: 'Peacekeeping', since: 'Various' },
                  ].map((op) => (
                    <div key={op.theater} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                      <Crosshair className="h-4 w-4 text-platinum-500 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-slate-200">{op.theater}</p>
                        <p className="text-xs text-slate-400">{op.activity}</p>
                        <p className="text-xs text-platinum-500">Since {op.since}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>

            {/* Presidential Guard */}
            <GlassPanel title="Presidential Guard" description="Elite special operations unit, formed 2011">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="grid gap-2">
                  {presidentialGuardData.map((pg) => (
                    <div key={pg.element} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                      <span className="text-sm text-slate-400">{pg.element}</span>
                      <span className="text-sm font-semibold text-platinum-100">{pg.details}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg border border-gold-500/30 bg-gold-500/10 p-4">
                    <p className="text-sm font-semibold text-gold-400">Motto</p>
                    <p className="text-lg font-bold text-platinum-100 mt-1">"Allah, Watan, Ra'is"</p>
                    <p className="text-xs text-slate-400">God, Homeland, President</p>
                  </div>
                  <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4">
                    <p className="text-sm font-semibold text-cyan-400">Reputation</p>
                    <p className="text-sm text-platinum-100 mt-1">"Tip of the spear" — Premier Arab special forces unit</p>
                    <p className="text-xs text-slate-400 mt-1">Trained by US Marine Corps Training Mission UAE</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Cybersecurity Tab */}
          <TabsContent value="cybersecurity" className="space-y-6">
            <GlassPanel
              title="Cybersecurity Landscape"
              description="500,000-700,000 cyberattacks daily targeting UAE (March 2026)"
              badge="HIGH ALERT"
            >
              <div className="space-y-6">
                {/* Cyber stats */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cyberAttackStats.map((stat) => (
                    <div key={stat.metric} className="flex items-center justify-between rounded-lg border border-rose-500/30 bg-rose-500/10 p-4">
                      <span className="text-sm text-slate-300">{stat.metric}</span>
                      <span className="text-lg font-bold text-rose-300">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Critical infrastructure */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm">Critical Infrastructure Sectors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['Energy', 'Water', 'Healthcare', 'Transportation', 'Telecommunications', 'Financial services'].map((sector) => (
                        <Badge key={sector} variant="outline" className="text-xs border-cyan-500/50 text-cyan-400">
                          <Cpu className="h-3 w-3 mr-1" />
                          {sector}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Cybersecurity organizations */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm">Cybersecurity Organizations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {[
                        { name: 'aeCERT', role: 'National Computer Emergency Response Team' },
                        { name: 'Cyber Security Council', role: 'National strategy oversight' },
                        { name: 'Dubai Electronic Security Center (DESC)', role: 'Dubai-specific security' },
                        { name: 'TDRA', role: 'Telecom & digital government regulation' },
                        { name: 'Core42', role: 'AI enablement, Abu Dhabi' },
                        { name: 'EDGE Group', role: 'Advanced technology, Abu Dhabi' },
                      ].map((org) => (
                        <div key={org.name} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                          <Lock className="h-5 w-5 text-emerald-400 shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-slate-200">{org.name}</p>
                            <p className="text-xs text-slate-400">{org.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Oyoon Project */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Eye className="h-4 w-4 text-cyan-400" />
                      Oyoon Project — Smart City Surveillance
                    </CardTitle>
                    <CardDescription>AI-powered CCTV network across Dubai</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        {oyoonCapabilities.map((cap) => (
                          <div key={cap.capability} className="flex items-center gap-2 rounded-lg bg-slate-800/50 p-2">
                            <Fingerprint className="h-4 w-4 text-cyan-400 shrink-0" />
                            <span className="text-xs text-slate-200">{cap.capability}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs border-platinum-500/50">AI/ML Video Analytics</Badge>
                        <Badge variant="outline" className="text-xs border-platinum-500/50">Central Command Centers</Badge>
                        <Badge variant="outline" className="text-xs border-platinum-500/50">Smart Police Stations (exported to Serbia, Netherlands)</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* DarkMatter / NSO */}
                <div className="grid gap-4 lg:grid-cols-2">
                  <Card className="glass-card border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Bug className="h-4 w-4 text-rose-400" />
                        DarkMatter / Project Raven
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg bg-rose-500/10 p-2">
                          <span className="text-xs text-slate-400">Founded</span>
                          <span className="text-xs font-semibold text-slate-200">2014/2015, Abu Dhabi</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-rose-500/10 p-2">
                          <span className="text-xs text-slate-400">Government work</span>
                          <span className="text-xs font-semibold text-slate-200">80% of work for UAE government</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-rose-500/10 p-2">
                          <span className="text-xs text-slate-400">Status</span>
                          <Badge variant="destructive" className="text-xs">Dissolved 2021</Badge>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-rose-500/10 p-2">
                          <span className="text-xs text-slate-400">Karma Spyware</span>
                          <span className="text-xs font-semibold text-slate-200">iPhone zero-click exploit</span>
                        </div>
                        {enforcementActions.slice(0, 3).map((ea) => (
                          <div key={ea.date} className="flex items-start gap-2 rounded-lg bg-slate-800/50 p-2">
                            <span className="text-xs text-rose-400 shrink-0">{ea.date}</span>
                            <span className="text-xs text-slate-300">{ea.action}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-yellow-500/30">
                    <CardHeader>
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Bug className="h-4 w-4 text-yellow-400" />
                        NSO Group / Pegasus
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {nsoOperations.map((op) => (
                          <div key={op.product} className="flex items-center justify-between rounded-lg bg-yellow-500/10 p-2">
                            <div>
                              <span className="text-xs font-semibold text-slate-200">{op.product}</span>
                              <p className="text-xs text-slate-400">{op.usage}</p>
                            </div>
                            <Badge variant="warning" className="text-xs">{op.status}</Badge>
                          </div>
                        ))}
                        <div className="mt-2 space-y-1">
                          <p className="text-xs font-semibold text-slate-300">Documented Targets:</p>
                          {['Human rights activists', 'Journalists', 'Government rivals', 'International diplomats'].map((t) => (
                            <p key={t} className="text-xs text-slate-400 ml-2">- {t}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Internal Security Tab */}
          <TabsContent value="internalsecurity" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Ministry of Interior */}
              <GlassPanel
                title="Ministry of Interior"
                description="Federal security and police coordination, established 1971"
              >
                <div className="space-y-4">
                  <div className="grid gap-2">
                    {moiDepartments.map((dept) => (
                      <div key={dept.department} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                        <Siren className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-200">{dept.department}</p>
                          <p className="text-xs text-slate-400">{dept.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-3">
                    <Siren className="h-5 w-5 text-cyan-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400">24/7 Customer Service</p>
                      <p className="text-sm font-bold text-cyan-300">8005000</p>
                    </div>
                  </div>
                </div>
              </GlassPanel>

              {/* Counter-Terrorism */}
              <GlassPanel
                title="Counter-Terrorism Framework"
                description="83 terrorist organizations designated; death penalty provisions"
              >
                <div className="space-y-4">
                  {ctFramework.map((ct) => (
                    <div key={ct.framework} className="flex flex-col gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3">
                      <p className="text-xs font-semibold text-emerald-400">{ct.framework}</p>
                      <p className="text-xs text-slate-300">{ct.details}</p>
                    </div>
                  ))}
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-slate-300">Designated Organizations (83 total):</p>
                    <div className="flex flex-wrap gap-1">
                      {designatedOrganizations.map((org) => (
                        <Badge key={org.organization} variant="outline" className="text-xs border-red-500/50 text-red-400">
                          {org.organization}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-slate-300">UN Treaty Compliance:</p>
                    <div className="flex flex-wrap gap-1">
                      {ctTreaties.map((t) => (
                        <Badge key={t.treaty} variant="outline" className="text-xs border-emerald-500/50 text-emerald-400">
                          {t.treaty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </div>

            {/* Crime & Safety */}
            <GlassPanel title="Crime & Safety Statistics" description="UAE ranked safest country in the world 2025">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  {safetyRankingData.map((rank) => (
                    <div key={rank.index} className="flex flex-col items-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <p className="text-xs text-slate-400">{rank.index}</p>
                      <p className="text-2xl font-bold text-emerald-300 mt-1">{rank.uaeScore}</p>
                      <p className="text-xs text-slate-400 mt-1">{rank.globalRank}</p>
                    </div>
                  ))}
                </div>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm">Crime Rate Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={crimeStatsData.filter((c) => c.metric.includes('Homicide') || c.metric.includes('Crime Rate'))}
                      xAxisKey="metric"
                      bars={[
                        { dataKey: 'uaeRate', name: 'UAE Rate', color: CHART_COLORS.emerald },
                        { dataKey: 'globalAverage', name: 'Global Avg', color: CHART_COLORS.rose },
                      ]}
                      height={200}
                      showGrid
                    />
                  </CardContent>
                </Card>
                {/* FATF Status */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm">FATF Status Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {fatfStatusData.map((fs) => (
                        <div key={fs.date} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-2">
                          <span className="text-xs text-slate-400">{fs.date}</span>
                          <Badge variant={fs.status.includes('Grey') ? 'warning' : fs.status.includes('EU Black') ? 'destructive' : 'success'} className="text-xs">
                            {fs.status}
                          </Badge>
                          <span className="text-xs text-slate-300">{fs.action}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>

            {/* NCEMA & Emergency */}
            <GlassPanel title="Emergency Management" description="NCEMA and civil defense coordination">
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-3">
                  {emergencyNumbers.map((en) => (
                    <div key={en.service} className="flex items-center gap-3 rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-4">
                      <Siren className="h-6 w-6 text-cyan-400 shrink-0" />
                      <div>
                        <p className="text-xs text-slate-400">{en.service}</p>
                        <p className="text-xl font-bold text-cyan-300">{en.number}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    'Natural Disasters: Earthquakes, floods, sandstorms',
                    'Power Outages: National grid emergencies',
                    'War Emergencies: Conflict-related crises',
                    'Sabotage: Infrastructure attacks',
                    'Public Health: Pandemic response',
                  ].map((resp) => (
                    <div key={resp} className="flex items-center gap-2 rounded-lg bg-slate-800/50 p-3">
                      <Radio className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span className="text-xs text-slate-200">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>

            {/* Interpol */}
            <GlassPanel title="Interpol & Fugitive Operations" description="International fugitive arrests and extraditions">
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    {interpolExtraditions.map((ex) => (
                      <div key={ex.fugitive} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <div className="flex items-center gap-3">
                          <UserCheck className="h-5 w-5 text-platinum-500 shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-slate-200">{ex.fugitive}</p>
                            <p className="text-xs text-slate-400">{ex.origin} — {ex.crime}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs border-emerald-500/50 text-emerald-400">
                          {ex.date}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </GlassPanel>

            {/* Conscription */}
            <GlassPanel title="National Service" description="Mandatory military service requirements">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {nationalServiceData.map((ns) => (
                  <div key={ns.category} className="flex flex-col rounded-lg border border-gold-500/30 bg-gold-500/10 p-4">
                    <p className="text-xs text-slate-400">{ns.category}</p>
                    <p className="text-sm font-semibold text-platinum-100 mt-1">{ns.requirement}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Human Cost Tab */}
          <TabsContent value="humancost" className="space-y-6">
            {/* Torture */}
            <GlassPanel
              title="Human Rights Violations"
              description="Documented torture methods, enforced disappearances, and freedom of expression restrictions"
            >
              <div className="space-y-6">
                {/* Torture Methods */}
                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2 text-red-400">
                      <AlertOctagon className="h-4 w-4" />
                      Documented Torture Methods (16 types)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {tortureMethods.map((tm) => (
                        <div key={tm.method} className="flex flex-col rounded-lg border border-red-500/30 bg-red-500/10 p-2">
                          <p className="text-xs font-semibold text-red-300">{tm.method}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{tm.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Secret Prisons */}
                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2 text-red-400">
                      <Lock className="h-4 w-4" />
                      Secret Prisons in Yemen
                    </CardTitle>
                    <CardDescription>Documented by BBC, AP, Amnesty International</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {secretPrisonLocations.map((loc) => (
                        <div key={loc.location} className="flex flex-col rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                          <p className="text-xs font-semibold text-red-300">{loc.location}</p>
                          <p className="text-xs text-slate-400 mt-1">{loc.description}</p>
                          <Badge variant="destructive" className="text-xs mt-2 w-fit">{loc.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Human Rights Cases */}
                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2 text-red-400">
                      <Users className="h-4 w-4" />
                      Documented Human Rights Cases
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2 pr-4">
                        {humanRightsCases.map((hc) => (
                          <div key={hc.individual} className="flex items-start justify-between rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                            <div>
                              <p className="text-sm font-semibold text-red-300">{hc.individual}</p>
                              <p className="text-xs text-slate-400">{hc.background}</p>
                            </div>
                            <Badge variant="destructive" className="text-xs shrink-0 ml-2">
                              {hc.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Freedom of Expression */}
                <Card className="glass-card border-yellow-500/30">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2 text-yellow-400">
                      <ScrollText className="h-4 w-4" />
                      Freedom of Expression Restrictions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {expressionRestrictions.map((er) => (
                        <div key={er.law} className="flex items-start justify-between rounded-lg bg-yellow-500/10 p-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-200">{er.law}</p>
                          </div>
                          <Badge variant="warning" className="text-xs shrink-0 ml-2">{er.penalty}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Detention Facilities */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm">Detention Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {detentionFacilities.map((df) => (
                        <div key={df.facility} className="flex flex-col rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <p className="text-xs font-semibold text-slate-200">{df.facility}</p>
                          <p className="text-xs text-slate-400">{df.type}</p>
                          <p className="text-xs text-platinum-500 mt-1">{df.notes}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Kafala System */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Heart className="h-4 w-4 text-rose-400" />
                      Kafala System & Migrant Worker Rights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-300">Worker Statistics:</p>
                        {domesticWorkerData.map((dw) => (
                          <div key={dw.category} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-2">
                            <span className="text-xs text-slate-400">{dw.category}</span>
                            <span className="text-xs font-semibold text-slate-200">{dw.figure}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-300">Legal Reforms (2015-2017):</p>
                        {kafalaReforms.map((kr) => (
                          <div key={kr.reform} className="flex items-start gap-2 rounded-lg bg-slate-800/50 p-2">
                            <Scale className="h-3 w-3 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-semibold text-slate-200">{kr.reform}</p>
                              <p className="text-xs text-slate-400">{kr.provision}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mercenaries */}
                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2 text-red-400">
                      <Crosshair className="h-4 w-4" />
                      Private Military Contractors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {mercenaryOperations.map((mo) => (
                        <div key={mo.group} className="flex items-start justify-between rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                          <div>
                            <p className="text-sm font-semibold text-slate-200">{mo.group}</p>
                            <p className="text-xs text-slate-400">{mo.origin} — {mo.operations}</p>
                          </div>
                          <Badge variant="destructive" className="text-xs shrink-0 ml-2">{mo.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Key Findings Tab */}
          <TabsContent value="keyfindings" className="space-y-6">
            <GlassPanel
              title="All Key Findings"
              description={`${keyFindings.length} intelligence findings across Security & Defense`}
            >
              <ScrollArea className="h-[600px]">
                <div className="space-y-3 pr-4">
                  {keyFindings.map((finding, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum shrink-0">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-200">{finding.finding}</p>
                          <p className="mt-1 text-sm text-slate-400">Source: {finding.source}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 ml-4 shrink-0">
                        <div className="text-right">
                          <Badge variant="outline" className="text-xs">{finding.metric}</Badge>
                          <p className="mt-1 text-xs text-slate-400">Metric</p>
                        </div>
                        {finding.tier !== undefined && (
                          <div className="text-right">
                            {getTierBadge(finding.tier)}
                            <p className="mt-1 text-xs text-slate-400">Tier</p>
                          </div>
                        )}
                        <div className="text-right">
                          {getAlertBadge(finding.alert)}
                          <p className="mt-1 text-xs text-slate-400">Alert</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Defense Entities */}
            <GlassPanel title="Security & Defense Entities" description="Government ministries, law enforcement, and defense industry">
              <ScrollArea className="h-[400px]">
                <div className="space-y-6 pr-4">
                  {['Government Ministries', 'Law Enforcement', 'Military Branches', 'Intelligence/Surveillance', 'Defense Industry'].map((category) => (
                    <div key={category}>
                      <p className="text-sm font-semibold text-gold-400 mb-2">{category}</p>
                      <div className="space-y-2">
                        {defenseEntities
                          .filter((e) => e.category === category)
                          .map((entity) => (
                            <div key={entity.entity} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                              <div className="flex items-center gap-3">
                                <Building className="h-4 w-4 text-platinum-500 shrink-0" />
                                <span className="text-sm font-semibold text-slate-200">{entity.entity}</span>
                              </div>
                              <span className="text-xs text-slate-400">{entity.role}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Relevance Assessment */}
            <GlassPanel title="UAE Relevance Assessment" description="Critical, regional, and international significance">
              <div className="space-y-6">
                {relevanceAssessment.map((ra) => (
                  <div key={ra.category}>
                    <p className="text-sm font-semibold text-platinum-300 mb-3">{ra.category}</p>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {ra.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <Shield className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span className="text-xs text-slate-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Security Timeline */}
            <GlassPanel title="Security & Defense Timeline" description="Key historical events">
              <div className="relative space-y-0">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700" />
                <div className="space-y-4">
                  {securityEventsTimeline.map((event, idx) => (
                    <div key={idx} className="flex items-start gap-4 pl-10 relative">
                      <div className="absolute left-2.5 h-3 w-3 rounded-full bg-gradient-gold ring-4 ring-slate-900 shrink-0 mt-1.5" />
                      <div>
                        <p className="text-sm font-semibold text-slate-200">{event.year}</p>
                        <p className="text-xs text-slate-400">{event.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>

            {/* Sentiment Analysis */}
            <GlassPanel title="Sentiment Analysis" description="Topic-level sentiment assessment">
              <div className="space-y-2">
                {sentimentAnalysis.map((sa) => (
                  <div key={sa.topic} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-200">{sa.topic}</p>
                      <p className="text-xs text-slate-400">Source: {sa.sourceAssessment}</p>
                    </div>
                    <Badge
                      variant={sa.sentiment.includes('Positive') ? 'success' : sa.sentiment.includes('Negative') ? 'destructive' : 'outline'}
                      className="text-xs"
                    >
                      {sa.sentiment}
                    </Badge>
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
