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
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
  RadarChart,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Shield,
  Zap,
  Crosshair,
  Users,
  Globe,
  AlertOctagon,
  Ban,
  Eye,
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  Database,
  FileText,
  Scale,
  Building,
  Heart,
} from 'lucide-react'
import {
  useTerrorismExtremismData,
} from '@/lib/data-loader'
import { AnimatePresence, motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
}

const pulseGlow = {
  initial: { boxShadow: '0 0 0 0 rgba(239, 68, 68, 0.4)' },
  animate: {
    boxShadow: '0 0 20px 5px rgba(239, 68, 68, 0.2)',
    transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' },
  },
}

export default function TerrorismExtremismPage() {
  const { data } = useTerrorismExtremismData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Terrorism & Extremism data...</div>
      </div>
    )
  }

  const timeline = data.timeline || []
  const keyFindings = data.keyFindings || []
  const stakeholderImpacts = data.stakeholderImpacts || []
  const responseMetrics = data.responseMetrics

  // Terrorist entities data
  const entityData = [
    { name: 'Federal List (2014)', value: 83, color: CHART_COLORS.rose },
    { name: 'Local Terrorist List', value: 714, color: CHART_COLORS.orange },
    { name: 'Searchable Entities', value: 326, color: CHART_COLORS.gold },
  ]

  // Attack types
  const attackTypeData = [
    { name: 'Ballistic Missiles', value: 1800, color: CHART_COLORS.rose },
    { name: 'Drones', value: 147, color: CHART_COLORS.orange },
    { name: 'Ground Attacks', value: 3, color: CHART_COLORS.gold },
    { name: 'Stabbings', value: 1, color: CHART_COLORS.platinum },
  ]

  // Sentiment
  const sentimentData = [
    { name: 'Fear', value: 30, color: CHART_COLORS.rose },
    { name: 'Outrage', value: 25, color: CHART_COLORS.orange },
    { name: 'Resolute', value: 30, color: CHART_COLORS.navy },
    { name: 'Alarmed', value: 15, color: CHART_COLORS.gold },
  ]

  // Timeline events chart
  const timelineChartData = [
    { date: '1973', events: 2, severity: 35 },
    { date: '1983', events: 1, severity: 45 },
    { date: '1999', events: 1, severity: 30 },
    { date: '2014', events: 1, severity: 40 },
    { date: '2022', events: 1, severity: 65 },
    { date: '2024', events: 1, severity: 55 },
    { date: '2026-Mar', events: 2, severity: 90 },
    { date: '2026-Apr', events: 2, severity: 95 },
  ]

  // Threat actors radar data
  const threatActorsData = [
    { actor: 'Iran/Hezbollah', threat: 95, capability: 90, intent: 95 },
    { actor: 'Houthis', threat: 75, capability: 70, intent: 85 },
    { actor: 'Al-Qaeda', threat: 60, capability: 55, intent: 70 },
    { actor: 'ISIS', threat: 50, capability: 45, intent: 60 },
    { actor: 'Lone Wolf', threat: 40, capability: 30, intent: 65 },
    { actor: 'Iranian Strikes 2026', threat: 98, capability: 95, intent: 90 },
  ]

  // Intelligence tier distribution
  const tierDistribution = [
    { tier: 'TIER_0 - Government', count: 8, color: CHART_COLORS.rose },
    { tier: 'TIER_1 - Media', count: 12, color: CHART_COLORS.orange },
    { tier: 'TIER_2 - Research', count: 15, color: CHART_COLORS.gold },
    { tier: 'TIER_3 - Secondary', count: 5, color: CHART_COLORS.platinum },
    { tier: 'TIER_5 - Academic', count: 2, color: CHART_COLORS.navy },
  ]

  // Legal framework funnel
  const legalFrameworkFunnel = [
    { stage: 'Federal Law No. 7 (2014)', count: 83, description: 'Designated organizations' },
    { stage: 'Local Terrorist List', count: 714, description: 'Total entities' },
    { stage: 'EOCN Daily Updates', count: 326, description: 'Searchable entities' },
  ]

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      <AnimatePresence mode="wait">
        {/* Header */}
        <motion.div
          key="header"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="flex items-start justify-between"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="denim" className="mb-2">CRISIS TYPE</Badge>
            </motion.div>
            <motion.h1
              className="text-3xl font-extrabold gradient-text-navy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Terrorism & Extremism
            </motion.h1>
            <motion.p
              className="mt-2 text-platinum-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Counter-terrorism, Houthi threats, Iran-linked cells, FATF concerns
            </motion.p>
          </div>
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="outline"
              className="gap-2 border-rose-500/50 text-rose hover:bg-rose-500/10 transition-all duration-300 hover:scale-105"
            >
              <Eye className="h-4 w-4" />
              Watchlist
            </Button>
            <Button className="bg-gradient-to-r from-rose-600 to-red-600 hover:opacity-90 text-white gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rose-500/25">
              <Ban className="h-4 w-4" />
              Counter-Terrorism
            </Button>
          </motion.div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          key="metrics"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
            <MetricCard
              title="Designated Organizations"
              value="83"
              previousValue="714 total entities"
              icon={<AlertOctagon className="h-6 w-6" />}
              gradient="rose"
              status="error"
              onClick={() => {}}
            />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
            <MetricCard
              title="Total Entities Listed"
              value="714"
              previousValue="326 searchable"
              icon={<Crosshair className="h-6 w-6" />}
              gradient="orange"
              status="error"
              onClick={() => {}}
            />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
            <MetricCard
              title="Casualties (2022-2026)"
              value="9"
              previousValue="3 killed (2022 Houthi)"
              icon={<Users className="h-6 w-6" />}
              gradient="rose"
              status="error"
              onClick={() => {}}
            />
          </motion.div>
          <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
            <MetricCard
              title="Alert Level"
              value="RED"
              previousValue="Active threat"
              icon={<AlertCircle className="h-6 w-6" />}
              gradient="rose"
              onClick={() => {}}
            />
          </motion.div>
        </motion.div>

        {/* Secondary Metrics */}
        <motion.div
          key="secondary-metrics"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={scaleIn} transition={{ delay: 0.1 }}>
            <Card className="glass-card hover:border-rose-500/30 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <p className="text-xs text-platinum-400">9/11 Hijackers thru UAE</p>
                <p className="text-2xl font-bold text-rose">17/19</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={scaleIn} transition={{ delay: 0.15 }}>
            <Card className="glass-card hover:border-orange-500/30 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <p className="text-xs text-platinum-400">FATF Grey List</p>
                <p className="text-2xl font-bold text-orange">2019-24</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={scaleIn} transition={{ delay: 0.2 }}>
            <Card className="glass-card hover:border-gold-500/30 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <p className="text-xs text-platinum-400">Iran Strikes 2026</p>
                <p className="text-2xl font-bold text-gold">3,000+</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={scaleIn} transition={{ delay: 0.25 }}>
            <Card className="glass-card hover:border-emerald-500/30 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <p className="text-xs text-platinum-400">Iran-linked Arrests</p>
                <p className="text-2xl font-bold text-emerald">27+</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={scaleIn} transition={{ delay: 0.3 }}>
            <Card className="glass-card hover:border-navy-500/30 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <p className="text-xs text-platinum-400">Houthi Attack 2022</p>
                <p className="text-2xl font-bold text-navy">3 Killed</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={scaleIn} transition={{ delay: 0.35 }}>
            <Card className="glass-card hover:border-rose-500/30 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <p className="text-xs text-platinum-400">Death Sentences</p>
                <p className="text-2xl font-bold text-rose">3+1 Life</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <Tabs defaultValue="overview" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <TabsList className="glass-panel" scrollable>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
              <TabsTrigger value="threatanalysis">Threat Analysis</TabsTrigger>
              <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <GlassPanel title="Terrorism & Extremism Overview" description="Counter-terrorism monitoring and threat assessment">
                <div className="space-y-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Attack Type Distribution */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="glass-card transition-all duration-300 hover:border-rose-500/50">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Target className="h-5 w-5 text-rose" />
                            Attack Type Distribution
                          </CardTitle>
                          <CardDescription>Weapons/attack methods used against UAE</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <BarChart
                            data={attackTypeData}
                            xAxisKey="name"
                            bars={[
                              { dataKey: 'value', name: 'Incidents', color: CHART_COLORS.rose },
                            ]}
                            height={300}
                            showGrid={true}
                          />
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Terrorist Entity Lists */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="glass-card transition-all duration-300 hover:border-orange-500/50">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Database className="h-5 w-5 text-orange" />
                            Terrorist Entity Lists
                          </CardTitle>
                          <CardDescription>Designated organizations by list type</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <PieChart
                            data={entityData}
                            height={280}
                            showLegend={true}
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Public Sentiment */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="glass-card transition-all duration-300 hover:border-gold-500/50">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Heart className="h-5 w-5 text-gold" />
                            Public Sentiment
                          </CardTitle>
                          <CardDescription>Sentiment distribution during threats</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <PieChart
                            data={sentimentData}
                            height={280}
                            showLegend={true}
                          />
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Activity Timeline */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="glass-card transition-all duration-300 hover:border-navy-500/50">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Activity className="h-5 w-5 text-navy" />
                            Activity Over Time
                          </CardTitle>
                          <CardDescription>Significant terrorism events 1973-2026</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <AreaChart
                            data={timelineChartData}
                            xAxisKey="date"
                            areas={[
                              { dataKey: 'events', name: 'Events', color: CHART_COLORS.rose },
                              { dataKey: 'severity', name: 'Severity', color: CHART_COLORS.orange },
                            ]}
                            height={280}
                            showGrid={true}
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-6">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <GlassPanel title="Attack Timeline" description="Key terrorism-related events targeting UAE">
                <div className="space-y-6">
                  {/* Timeline Chart */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Activity Over Time</CardTitle>
                        <CardDescription>Significant terrorism events 1973-2026</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <AreaChart
                          data={timelineChartData}
                          xAxisKey="date"
                          areas={[
                            { dataKey: 'events', name: 'Events', color: CHART_COLORS.rose },
                            { dataKey: 'severity', name: 'Severity', color: CHART_COLORS.orange },
                          ]}
                          height={300}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Event Timeline */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <FileText className="h-5 w-5 text-rose" />
                          Event Timeline
                        </CardTitle>
                        <CardDescription>Chronological list of incidents</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-[400px]">
                          <div className="relative border-l-2 border-rose-500/50 pl-6 space-y-6">
                            {timeline.map((event, idx) => (
                              <motion.div
                                key={idx}
                                className="relative"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                              >
                                <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-rose-500 border-2 border-platinum-900 animate-pulse" />
                                <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:border-rose-500/50 transition-all duration-300">
                                  <div className="flex items-center justify-between mb-1">
                                    <p className="font-semibold text-platinum-200">{event.event}</p>
                                    <Badge variant="outline" className="text-xs">{event.date}</Badge>
                                  </div>
                                  <p className="text-sm text-platinum-400">{event.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Key Findings Tab */}
          <TabsContent value="keyfindings" className="space-y-6">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <GlassPanel title="Key Findings" description="Critical counter-terrorism intelligence">
                <div className="space-y-6">
                  {/* Critical Findings */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="glass-card border-rose-500/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                          <AlertCircle className="h-5 w-5" />
                          Critical Findings
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {keyFindings.map((finding, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30 hover:bg-rose-500/20 transition-all duration-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ scale: 1.01 }}
                            >
                              <p className="font-medium text-platinum-200">{typeof finding === 'string' ? finding : finding.finding || finding}</p>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Stakeholder Impacts */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Users className="h-5 w-5 text-orange" />
                          Stakeholder Impacts
                        </CardTitle>
                        <CardDescription>Affected groups and their status</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-[250px]">
                          <div className="space-y-3">
                            {stakeholderImpacts.map((impact, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="flex items-center gap-3">
                                  <Users className="h-4 w-4 text-rose" />
                                  <span className="text-sm font-medium text-platinum-200">{impact.stakeholder}</span>
                                </div>
                                <Badge variant="outline" className="text-rose-300 border-rose-500/50">{impact.sentiment}</Badge>
                              </motion.div>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Response Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Shield className="h-5 w-5 text-emerald" />
                          Response Metrics
                        </CardTitle>
                        <CardDescription>Counter-terrorism response indicators</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <motion.div
                            className="rounded-lg bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            <p className="text-xs text-platinum-400">Casualties (Total)</p>
                            <p className="text-lg font-bold text-rose-400">{responseMetrics?.casualties || 0}</p>
                          </motion.div>
                          <motion.div
                            className="rounded-lg bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            <p className="text-xs text-platinum-400">Affected Population</p>
                            <p className="text-lg font-bold text-platinum-200">{((responseMetrics?.affectedPopulation || 0) / 1e6).toFixed(1)}M</p>
                          </motion.div>
                          <motion.div
                            className="rounded-lg bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            <p className="text-xs text-platinum-400">Stage</p>
                            <p className="text-lg font-bold text-gold">{data.phoenixStage}</p>
                          </motion.div>
                          <motion.div
                            className="rounded-lg bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            <p className="text-xs text-platinum-400">Severity</p>
                            <p className="text-lg font-bold text-rose-400">{data.severity}/5</p>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Threat Analysis Tab */}
          <TabsContent value="threatanalysis" className="space-y-6">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <GlassPanel title="Threat Actor Analysis" description="Assessment of terrorist organizations and threat levels">
                <div className="space-y-6">
                  {/* Threat Actors Radar */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Target className="h-5 w-5 text-rose" />
                          Threat Actors Assessment
                        </CardTitle>
                        <CardDescription>Comparative threat, capability, and intent analysis</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <RadarChart
                          data={threatActorsData}
                          dataKeys={['threat', 'capability', 'intent']}
                          height={350}
                          showLegend={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Intelligence Sources */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Database className="h-5 w-5 text-orange" />
                          Intelligence Sources
                        </CardTitle>
                        <CardDescription>Source reliability and tier distribution</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-6 lg:grid-cols-2">
                          <div>
                            <h4 className="text-sm font-medium text-platinum-300 mb-4">Source Tier Distribution</h4>
                            <PieChart
                              data={tierDistribution}
                              height={250}
                              showLegend={true}
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-platinum-300 mb-4">Intelligence Quality</h4>
                            <ScrollArea className="h-[250px]">
                              <div className="space-y-2">
                                {data.sources?.slice(0, 10).map((source, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 hover:bg-platinum-800/70 transition-all duration-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                  >
                                    <div className="flex items-center gap-3">
                                      <Crosshair className="h-4 w-4 text-navy" />
                                      <span className="text-sm font-medium text-platinum-200">{source.source}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Badge variant="outline" className="text-xs">{source.tier}</Badge>
                                      <Badge variant="outline" className="text-xs text-emerald-400">{source.credibility}</Badge>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </ScrollArea>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Legal Framework Funnel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Scale className="h-5 w-5 text-gold" />
                          Counter-Terrorism Legal Framework
                        </CardTitle>
                        <CardDescription>Designation hierarchy and enforcement structure</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={legalFrameworkFunnel.map((item: any) => ({
                            name: item.stage.split(' ')[0] + ' ' + item.stage.split(' ')[1],
                            value: item.count,
                            color: CHART_COLORS.navy,
                          }))}
                          xAxisKey="name"
                          bars={[{ dataKey: 'value', name: 'Count', color: CHART_COLORS.navy }]}
                          height={300}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Watchlist Tab */}
          <TabsContent value="watchlist" className="space-y-6">
            <motion.div
              variants={slideInRight}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <GlassPanel title="Terrorist Watchlist" description="Designated organizations and entities">
                <div className="space-y-6">
                  {/* Organization Categories */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Building className="h-5 w-5 text-rose" />
                          Organization Categories
                        </CardTitle>
                        <CardDescription>By designated list</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { list: 'Federal Law No. 7 (2014)', count: 83, color: 'rose' },
                            { list: 'Local Terrorist List', count: 714, color: 'orange' },
                            { list: 'Searchable Database', count: 326, color: 'gold' },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="space-y-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-platinum-200">{item.list}</span>
                                <span className="text-lg font-bold text-rose">{item.count}</span>
                              </div>
                              <Progress value={(item.count / 714) * 100} className="h-2" />
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Intelligence Sources */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Globe className="h-5 w-5 text-orange" />
                          Intelligence Sources
                        </CardTitle>
                        <CardDescription>Source reliability ratings</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-[250px]">
                          <div className="space-y-2">
                            {data.sources?.map((source, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 hover:bg-platinum-800/70 transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <div className="flex items-center gap-3">
                                  <Crosshair className="h-4 w-4 text-navy" />
                                  <span className="text-sm font-medium text-platinum-200">{source.source}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="text-xs">{source.tier}</Badge>
                                  <Badge variant="outline" className="text-xs text-emerald-400">{source.credibility}</Badge>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Quick Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card className="glass-card border-gold-500/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2 text-gold-400">
                          <TrendingUp className="h-5 w-5" />
                          Key Statistics
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="rounded-lg bg-platinum-800/50 p-3">
                            <p className="text-xs text-platinum-400">17 of 19</p>
                            <p className="text-sm font-bold text-platinum-200">9/11 hijackers transited UAE</p>
                          </div>
                          <div className="rounded-lg bg-platinum-800/50 p-3">
                            <p className="text-xs text-platinum-400">2019-2024</p>
                            <p className="text-sm font-bold text-platinum-200">FATF Grey List Period</p>
                          </div>
                          <div className="rounded-lg bg-platinum-800/50 p-3">
                            <p className="text-xs text-platinum-400">3,000+</p>
                            <p className="text-sm font-bold text-platinum-200">Iranian missiles/drones (2026)</p>
                          </div>
                          <div className="rounded-lg bg-platinum-800/50 p-3">
                            <p className="text-xs text-platinum-400">"Little Sparta"</p>
                            <p className="text-sm font-bold text-platinum-200">US nickname for UAE forces</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </Tabs>
      </AnimatePresence>
    </div>
  )
}
