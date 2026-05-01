// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, AreaChart, RadarChart, CHART_COLORS } from '@/components/ui/chart-library'
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
  Activity,
  Target,
  Database,
  FileText,
  Scale,
  Building,
  Heart,
  TrendingUp,
  TrendingDown,
  Clock,
  Gavel,
  BookOpen,
  Flame,
  Flag,
  Radio,
  CheckCircle,
  XCircle,
  Info,
} from 'lucide-react'
import { useTerrorismExtremismData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function TerrorismExtremismPage() {
  const { data } = useTerrorismExtremismData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400 font-rajdhani">Loading Terrorism & Extremism intelligence...</div>
      </div>
    )
  }

  const {
    metadata = {},
    entities = {},
    incidents = [],
    counterTerrorism = {},
    iranThreat = {},
    threatActors = [],
    financing = {},
    trials = [],
    rehabilitation = {},
    nineEleven = {},
    statistics = [],
    timeline = [],
    sources = [],
    sourceTiers = [],
    keyFindings = [],
    stakeholderImpacts = [],
    responseMetrics = {},
    synthesizedFindings = {},
  } = data

  // Chart data derived from MD content
  const entityListData = [
    { name: 'Federal Law No.7 (2014)', value: 83, color: CHART_COLORS.rose },
    { name: 'Local Terrorist List Total', value: 714, color: CHART_COLORS.orange },
    { name: 'Searchable Entities', value: 326, color: CHART_COLORS.gold },
  ]

  const threatActorRadar = threatActors.map((a) => ({
    actor: a.name,
    threat: a.threatLevel || 0,
    capability: a.capability || 0,
    intent: a.intent || 0,
  }))

  const tierDistribution = sourceTiers.length > 0 ? sourceTiers : [
    { tier: 'Government (TIER_0)', count: 8, color: CHART_COLORS.rose },
    { tier: 'Media (TIER_1)', count: 12, color: CHART_COLORS.orange },
    { tier: 'Research (TIER_2)', count: 9, color: CHART_COLORS.gold },
    { tier: 'Secondary (TIER_3)', count: 4, color: CHART_COLORS.platinum },
    { tier: 'Academic (TIER_5)', count: 2, color: CHART_COLORS.navy },
  ]

  const timelineChartData = timeline.length > 0 ? timeline.map((t) => ({
    date: t.date ? String(t.date).slice(0, 10) : '',
    events: 1,
    severity: t.description && t.description.includes('3 killed') ? 65 :
      t.description && (t.description.includes('Iran') || t.description.includes('3,000')) ? 95 :
      t.description && t.date && String(t.date).includes('2026') ? 90 :
      t.description && t.description.includes('112') ? 45 :
      t.description && t.description.includes('executed') ? 40 : 30,
  })) : [
    { date: '1973', events: 2, severity: 35 },
    { date: '1983', events: 1, severity: 45 },
    { date: '1999', events: 1, severity: 30 },
    { date: '2014', events: 1, severity: 40 },
    { date: '2022', events: 1, severity: 65 },
    { date: '2024', events: 1, severity: 55 },
    { date: '2026-Mar', events: 2, severity: 90 },
    { date: '2026-Apr', events: 2, severity: 95 },
  ]

  const attackTypeData = [
    { name: 'Ballistic Missiles/Drones', value: 3000, color: CHART_COLORS.rose },
    { name: 'Lone Wolf Stabbings', value: 1, color: CHART_COLORS.orange },
    { name: 'Network Cells', value: 2, color: CHART_COLORS.gold },
    { name: 'Houthi Drone Strikes', value: 1, color: CHART_COLORS.navy },
  ]

  const fatfTimeline = [
    { period: '2019', event: 'Placed on FATF grey list', severity: 'HIGH' },
    { period: 'Feb 2024', event: 'Removed from FATF grey list', severity: 'RESOLVED' },
    { period: 'Jul 2025', event: 'EU removed from High-Risk AML List', severity: 'RESOLVED' },
  ]

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8 p-8 font-rajdhani"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-rose-500/20 to-red-600/20 text-rose-400 border-rose-500/50 font-rajdhani">
            <AlertOctagon className="w-3 h-3 mr-1" />
            CRISIS INTELLIGENCE — PHOENIX PROTOCOL
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-rose-100 via-rose-200 to-red-400 bg-clip-text text-transparent">
              Terrorism & Extremism
            </span>
          </h1>
          <p className="mt-2 text-platinum-400 font-rajdhani">
            Comprehensive counter-terrorism intelligence — Iran-linked cells, Houthi threats, FATF concerns, lone wolf actors, and regional terrorism landscape
          </p>
          <div className="mt-2 flex gap-4 text-xs text-platinum-500">
            <span>Framework v{metadata.frameworkVersion || '1.0'}</span>
            <span>•</span>
            <span>Executed: {metadata.dateExecuted || '2026-04-27'}</span>
            <span>•</span>
            <span>{metadata.queriesExecuted || 25} queries</span>
            <span>•</span>
            <span>{metadata.pagesFetched || 23} pages</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="border-rose-500/50 text-rose-400 font-rajdhani">
            <Radio className="w-3 h-3 mr-1" />
            ACTIVE THREAT
          </Badge>
          <Badge variant="outline" className="border-rose-500/50 text-rose-400 font-rajdhani">
            <Shield className="w-3 h-3 mr-1" />
            SEVERITY: 5/5
          </Badge>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard
          title="Entities on Lists"
          value="714"
          previousValue="326 searchable"
          icon={<Database className="h-6 w-6" />}
          gradient="rose"
          status="error"
          onClick={() => {}}
        />
        <MetricCard
          title="Designated 2014"
          value="83"
          previousValue="Organizations"
          icon={<Flag className="h-6 w-6" />}
          gradient="orange"
          status="error"
          onClick={() => {}}
        />
        <MetricCard
          title="Iran Strikes 2026"
          value="3,000+"
          previousValue="Missiles & drones"
          icon={<Zap className="h-6 w-6" />}
          gradient="gold"
          status="error"
          onClick={() => {}}
        />
        <MetricCard
          title="Iran-linked Arrests"
          value="27"
          previousValue="April 2026 cell"
          icon={<Users className="h-6 w-6" />}
          gradient="violet"
          status="error"
          onClick={() => {}}
        />
        <MetricCard
          title="9/11 via UAE"
          value="17/19"
          previousValue="Hijackers transited"
          icon={<Target className="h-6 w-6" />}
          gradient="rose"
          status="warning"
          onClick={() => {}}
        />
        <MetricCard
          title="FATF Grey List"
          value="2019-24"
          previousValue="5 years"
          icon={<Scale className="h-6 w-6" />}
          gradient="gold"
          onClick={() => {}}
        />
      </motion.div>

      {/* Alert Banner */}
      <motion.div variants={fadeInUp}>
        <Card className="border-rose-500/50 bg-gradient-to-r from-rose-500/10 to-red-600/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <AlertTriangle className="h-6 w-6 text-rose-500" />
              </motion.div>
              <div>
                <p className="text-sm font-bold text-rose-400 font-rajdhani">
                  ACTIVE THREAT — Iran-UAE Conflict (2026)
                </p>
                <p className="text-xs text-platinum-400 font-rajdhani">
                  Iran fired 3,000+ missiles and drones at UAE over 5 weeks. UAE dismantled 2 Iran-linked terror cells. UAE conducted first direct strikes against Iran (April 2026).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="threats">Threat Actors</TabsTrigger>
          <TabsTrigger value="counter">Counter-CT Strategy</TabsTrigger>
          <TabsTrigger value="iran">Iran Threat</TabsTrigger>
          <TabsTrigger value="financing">Terrorist Financing</TabsTrigger>
          <TabsTrigger value="trials">Mass Trials</TabsTrigger>
          <TabsTrigger value="rehab">Rehabilitation</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="findings">Key Findings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Terrorism & Extremism Overview"
              description="Key statistics, incident distribution, and threat landscape"
            >
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Entity List Distribution */}
                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Database className="h-5 w-5 text-rose-500" />
                        Terrorist Entity Lists
                      </CardTitle>
                      <CardDescription>Designated organizations by list type</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <PieChart data={entityListData} height={280} showLegend={true} />
                    </CardContent>
                  </motion.div>

                  {/* Key Statistics */}
                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertOctagon className="h-5 w-5 text-orange-500" />
                        Key Statistics
                      </CardTitle>
                      <CardDescription>Critical numbers from MD 4-7</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <div className="space-y-3">
                        {(statistics || []).slice(0, 8).map((stat, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-sm text-platinum-300">{stat.label}</span>
                            <Badge variant="outline" className="border-rose-500/50 text-rose-400 font-rajdhani">
                              {stat.value}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </motion.div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Activity Timeline */}
                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Activity className="h-5 w-5 text-rose-500" />
                        Activity Over Time
                      </CardTitle>
                      <CardDescription>Threat events and severity 1973–2026</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
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
                  </motion.div>

                  {/* 9/11 Connections */}
                  <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="h-5 w-5 text-rose-500" />
                        9/11 Connections
                      </CardTitle>
                      <CardDescription>UAE transit and funding links</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <div className="space-y-4">
                        <div className="text-center p-6 rounded-lg bg-rose-500/10 border border-rose-500/30">
                          <p className="text-5xl font-extrabold text-rose-400 font-rajdhani">17/19</p>
                          <p className="text-sm text-platinum-400 mt-1 font-rajdhani">9/11 Hijackers Transited UAE</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-platinum-300">Funding source</span>
                            <Badge variant="outline" className="border-rose-500/50 text-rose-400">UAE-based investors</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-platinum-300">Hijackers via UAE</span>
                            <Badge variant="outline" className="border-rose-500/50 text-rose-400">17 of 19</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                </div>

                {/* Recent Incidents Summary */}
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Flame className="h-5 w-5 text-orange-500" />
                      Recent Incidents (2022–2026)
                    </CardTitle>
                    <CardDescription>Key attacks and disruptions</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        { label: 'Houthi Abu Dhabi Attack', date: 'Jan 2022', detail: '3 killed, 6 injured at ADNOC refinery', color: 'rose' },
                        { label: 'Zvi Kogan Murder', date: 'Nov 2024', detail: 'Chabad rabbi killed; 3 sentenced to death', color: 'rose' },
                        { label: 'Iran Network Dismantled', date: 'Mar 2026', detail: 'Money laundering + terror financing network broken up', color: 'orange' },
                        { label: 'Iran Cell Arrests', date: 'Apr 2026', detail: '27 suspects arrested; Velayat-e Faqih ideology', color: 'gold' },
                      ].map((item, idx) => (
                        <div key={idx} className={`rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/30 p-4`}>
                          <p className="text-xs text-platinum-400 font-rajdhani">{item.date}</p>
                          <p className="text-sm font-bold text-platinum-100 font-rajdhani mt-1">{item.label}</p>
                          <p className="text-xs text-platinum-400 mt-1 font-rajdhani">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Terrorism Event Timeline"
              description="Chronological record of all documented incidents from 1973 to 2026"
            >
              <div className="space-y-6">
                {/* Timeline Chart */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Activity className="h-5 w-5 text-rose-500" />
                      Activity & Severity Over Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
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
                </div>

                {/* Event List */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="h-5 w-5 text-orange-500" />
                      Event Timeline
                    </CardTitle>
                    <CardDescription>{timeline.length} documented events</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[500px]">
                      <div className="relative border-l-2 border-rose-500/50 pl-6 space-y-6">
                        {(timeline || []).map((event, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.06 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="relative"
                          >
                            <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-rose-500 border-2 border-platinum-900" />
                            <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:border-rose-500/50 transition-all duration-300">
                              <div className="flex items-center justify-between mb-1">
                                <p className="font-semibold text-platinum-100 font-rajdhani text-sm">{event.event}</p>
                                <Badge variant="outline" className="text-xs font-rajdhani border-rose-500/50 text-rose-400">
                                  {String(event.date || '').slice(0, 10)}
                                </Badge>
                              </div>
                              <p className="text-xs text-platinum-400 font-rajdhani">{event.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Threat Actors Tab */}
        <TabsContent value="threats" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Threat Actor Analysis"
              description="Assessment of terrorist organizations, threat levels, capabilities, and intent"
            >
              <div className="space-y-6">
                {/* Radar Chart */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="h-5 w-5 text-rose-500" />
                        Threat Actor Radar
                      </CardTitle>
                      <CardDescription>Threat level, capability, and intent comparison</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      {threatActorRadar.length > 0 ? (
                        <RadarChart
                          data={threatActorRadar}
                          dataKeys={['threat', 'capability', 'intent']}
                          height={350}
                          showLegend={true}
                        />
                      ) : (
                        <div className="h-[350px] flex items-center justify-center text-platinum-500">
                          No threat actor data available
                        </div>
                      )}
                    </CardContent>
                  </div>

                  {/* Threat Actor Cards */}
                  <div className="space-y-3">
                    <CardHeader className="px-0 pt-0 pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-rose-500" />
                        Actor Threat Profiles
                      </CardTitle>
                    </CardHeader>
                    {(threatActors || []).map((actor, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="glass-card rounded-lg p-4 bg-glass-surface/50 border-glass-border"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-platinum-100 font-rajdhani">{actor.name}</span>
                          <Badge
                            variant="outline"
                            className={`border-${
                              actor.threatLevel >= 90 ? 'rose' :
                              actor.threatLevel >= 70 ? 'orange' :
                              actor.threatLevel >= 50 ? 'gold' : 'platinum'
                            }-500/50 text-${
                              actor.threatLevel >= 90 ? 'rose' :
                              actor.threatLevel >= 70 ? 'orange' :
                              actor.threatLevel >= 50 ? 'gold' : 'platinum'
                            } font-rajdhani text-xs`}
                          >
                            THREAT {actor.threatLevel || 0}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs text-platinum-400 mb-2">
                          <div>Threat: <span className="text-rose-400 font-bold">{actor.threatLevel || 0}</span></div>
                          <div>Capability: <span className="text-orange-400 font-bold">{actor.capability || 0}</span></div>
                          <div>Intent: <span className="text-gold-400 font-bold">{actor.intent || 0}</span></div>
                        </div>
                        <p className="text-xs text-platinum-500 font-rajdhani">{actor.status}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Attack Types */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Flame className="h-5 w-5 text-rose-500" />
                      Attack Methods Distribution
                    </CardTitle>
                    <CardDescription>Weapon types and methods used against UAE</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <BarChart
                      data={attackTypeData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Incidents', color: CHART_COLORS.rose }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Counter-Terrorism Strategy Tab */}
        <TabsContent value="counter" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Counter-Terrorism Strategy & Institutions"
              description="Legal framework, key institutions, and international cooperation"
            >
              <div className="space-y-6">
                {/* Legal Framework */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Scale className="h-5 w-5 text-gold-500" />
                        Legal Framework
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <div className="space-y-3">
                        {[
                          { law: 'Federal Law No. 7 of 2014', desc: 'Combating Terrorism Offences — designates 83 organizations', color: 'rose' },
                          { law: 'Federal Law No. 39 of 2006', desc: 'International Judicial Cooperation in Criminal Matters', color: 'orange' },
                          { law: 'Federal Law No. 10 of 2025', desc: 'Combating Money Laundering, Terrorism Financing, and Financing of Illegal Organizations', color: 'gold' },
                          { law: 'AML/CFT/CPF Strategy (Sep 2024)', desc: 'National Strategy for Anti-Money Laundering and CFT', color: 'emerald' },
                        ].map((item, idx) => (
                          <div key={idx} className={`rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/30 p-3`}>
                            <p className="text-sm font-bold text-platinum-100 font-rajdhani">{item.law}</p>
                            <p className="text-xs text-platinum-400 mt-1 font-rajdhani">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  {/* Key Institutions */}
                  <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Building className="h-5 w-5 text-emerald-500" />
                        Key Institutions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <div className="space-y-3">
                        {[
                          { name: 'Hedayah', role: 'International Centre of Excellence for Countering Violent Extremism (Abu Dhabi)', type: 'CVE' },
                          { name: 'Sawab Centre', role: 'UAE-US partnership digital communications hub to counter extremist ideologies', type: 'CVE' },
                          { name: 'NAMLCFTC', role: 'National Anti Money Laundering and Combatting Financing of Terrorism Committee', type: 'CFT' },
                          { name: 'EOCN', role: 'Executive Office for Control & Non-proliferation — publishes Local Terrorist List (est. 2009)', type: 'LIST' },
                          { name: 'Munasaha Centres', role: '"Enlightenment and reform" centers at Al Razeen prison (criticized)', type: 'REHAB' },
                        ].map((inst, idx) => (
                          <div key={idx} className="rounded-lg bg-platinum-800/50 border border-platinum-700 p-3">
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-sm font-bold text-platinum-100 font-rajdhani">{inst.name}</p>
                              <Badge variant="outline" className="text-xs border-emerald-500/50 text-emerald-400 font-rajdhani">{inst.type}</Badge>
                            </div>
                            <p className="text-xs text-platinum-400 font-rajdhani">{inst.role}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>

                {/* International Cooperation */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-violet-500" />
                      International Cooperation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        { name: 'MENAFATF', desc: 'Middle East and North Africa Financial Action Task Force' },
                        { name: 'Global Coalition to Defeat ISIS', desc: 'UAE is active member' },
                        { name: 'Global Counterterrorism Forum', desc: 'UAE co-chair' },
                        { name: 'US Counter-terrorism', desc: 'Named "best counter-terrorism ally"' },
                        { name: 'UK Intelligence', desc: 'Ongoing intelligence sharing' },
                        { name: 'OIC Support', desc: 'Condemned Iran-linked terror plots' },
                      ].map((item, idx) => (
                        <div key={idx} className="rounded-lg bg-violet-500/10 border border-violet-500/30 p-3">
                          <p className="text-sm font-bold text-platinum-100 font-rajdhani">{item.name}</p>
                          <p className="text-xs text-platinum-400 mt-1 font-rajdhani">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Designations Controversy */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border border-orange-500/30">
                  <CardHeader className="px-0 pt-0 pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-orange-400">
                      <AlertTriangle className="h-5 w-5" />
                      Designations Controversy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3">
                      {[
                        { point: 'HRW documented due process violations (April 2025): 11 dissidents + 8 companies designated' },
                        { point: 'Designations do NOT appear on UN, EU, or UK sanctions lists' },
                        { point: 'Al Islah (local MB affiliate) designated terrorist in November 2014' },
                        { point: 'UAE cut UK scholarship funding over extremism concerns in British universities (January 2026)' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-platinum-300">
                          <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="font-rajdhani">{item.point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Iran Threat Tab */}
        <TabsContent value="iran" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Iran-UAE Threat Dimension"
              description="Iranian strikes 2026, Iran-linked domestic cells, and ballistic missile threats"
            >
              <div className="space-y-6">
                {/* Current Situation Alert */}
                <Card className="border-rose-500/50 bg-gradient-to-r from-rose-500/10 to-red-600/5">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                      <Zap className="h-5 w-5" />
                      2026 Iran-UAE Conflict
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        { label: 'Period', value: 'Feb 28 – Mar 29, 2026', color: 'rose' },
                        { label: 'Missiles & Drones', value: '3,000+ fired at UAE', color: 'rose' },
                        { label: 'Injured', value: '100+ (March 1 alone)', color: 'orange' },
                        { label: 'Killed', value: '4+ (March 1 incident)', color: 'rose' },
                      ].map((item, idx) => (
                        <div key={idx} className={`rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/30 p-3 text-center`}>
                          <p className="text-xs text-platinum-400 font-rajdhani">{item.label}</p>
                          <p className={`text-lg font-extrabold text-${item.color}-400 font-rajdhani`}>{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Iranian Strikes Timeline */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Radio className="h-5 w-5 text-rose-500" />
                      Iranian Strikes Timeline (March 2026)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3">
                      {[
                        { date: 'Feb 28, 2026', event: 'Iran begins missile/drone campaign against UAE', severity: 'CRITICAL' },
                        { date: 'Mar 1, 2026', event: 'Over 100 injured, at least 4 killed; hundreds of missiles/drones fired at Gulf cities including Dubai', severity: 'CRITICAL' },
                        { date: 'Mar 18, 2026', event: 'Multiple Iranian strikes on UAE', severity: 'HIGH' },
                        { date: 'Mar 23, 2026', event: 'UAE air defenses intercepted 7 ballistic missiles and 16 drones (Ministry of Defense)', severity: 'HIGH' },
                        { date: 'Mar 29, 2026', event: 'Iranian strike on key aluminium plant in Abu Dhabi injured multiple people', severity: 'HIGH' },
                        { date: 'Apr 2026', event: 'UAE carried out first ever direct strikes against Iran', severity: 'CRITICAL' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1 h-2 w-2 rounded-full bg-rose-500" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-bold text-platinum-100 font-rajdhani">{item.date}</p>
                              <Badge variant="outline" className={`border-${
                                item.severity === 'CRITICAL' ? 'rose' : 'orange'
                              }-500/50 text-${item.severity === 'CRITICAL' ? 'rose' : 'orange'} text-xs font-rajdhani`}>
                                {item.severity}
                              </Badge>
                            </div>
                            <p className="text-xs text-platinum-400 font-rajdhani mt-0.5">{item.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Iran-Linked Cells */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0 pb-2">
                      <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                        <AlertCircle className="h-5 w-5" />
                        Iran-Linked Cells Dismantled
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <div className="space-y-4">
                        {[
                          {
                            date: 'March 2026',
                            arrests: 'Multiple',
                            activity: 'Money laundering, terrorism financing',
                            funding: 'Iran and Hezbollah',
                            cover: 'Fake commercial/company cover',
                          },
                          {
                            date: 'April 20, 2026',
                            arrests: '27 individuals',
                            activity: 'Velayat-e Faqih doctrine; recruiting young Emiratis; collecting/transferring funds',
                            funding: 'Hezbollah and Iran coordination',
                            cover: 'Secret organisation',
                          },
                        ].map((cell, idx) => (
                          <div key={idx} className="rounded-lg bg-rose-500/10 border border-rose-500/30 p-4">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="outline" className="border-rose-500/50 text-rose-400 font-rajdhani">{cell.date}</Badge>
                              <Badge variant="outline" className="border-rose-500/50 text-rose-400 font-rajdhani">{cell.arrests} arrests</Badge>
                            </div>
                            <div className="space-y-1 text-xs text-platinum-400 font-rajdhani">
                              <p><span className="text-platinum-200">Activity:</span> {cell.activity}</p>
                              <p><span className="text-platinum-200">Funding:</span> {cell.funding}</p>
                              <p><span className="text-platinum-200">Cover:</span> {cell.cover}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  {/* Ballistic Missile Threat */}
                  <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0 pb-2">
                      <CardTitle className="text-lg flex items-center gap-2 text-orange-400">
                        <Target className="h-5 w-5" />
                        Ballistic Missile & Drone Threat
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <div className="space-y-4">
                        {[
                          { label: 'Total fired at UAE (5 weeks)', value: '3,000+', sub: 'missiles and drones' },
                          { label: 'Intercepted (Mar 23)', value: '7 + 16', sub: 'ballistic missiles and drones' },
                          { label: 'Houthi 2022 attack', value: '3 killed, 6 injured', sub: 'drones and ballistic missiles' },
                          { label: 'Weapons used in 2022', value: 'Drones, ballistic missiles, cruise missiles', sub: '' },
                        ].map((item, idx) => (
                          <div key={idx} className="rounded-lg bg-platinum-800/50 border border-platinum-700 p-3">
                            <p className="text-xs text-platinum-400 font-rajdhani">{item.label}</p>
                            <p className="text-lg font-extrabold text-orange-400 font-rajdhani">{item.value}</p>
                            {item.sub && <p className="text-xs text-platinum-500 font-rajdhani">{item.sub}</p>}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Terrorist Financing Tab */}
        <TabsContent value="financing" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Terrorist Financing"
              description="FATF grey list history, ongoing concerns, and enforcement actions"
            >
              <div className="space-y-6">
                {/* FATF Status */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Scale className="h-5 w-5 text-gold-500" />
                      FATF Grey List Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-4">
                      {[
                        { period: '2019', event: 'Placed on FATF grey list', detail: 'Concerns about AML/CFT effectiveness', color: 'rose', icon: <XCircle className="h-4 w-4" /> },
                        { period: 'Feb 23, 2024', event: 'Removed from FATF grey list', detail: 'Improvements in beneficial ownership monitoring', color: 'emerald', icon: <CheckCircle className="h-4 w-4" /> },
                        { period: 'July 2025', event: 'EU removed from High-Risk AML List', detail: 'Following FATF exit', color: 'emerald', icon: <CheckCircle className="h-4 w-4" /> },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className={`rounded-full p-2 bg-${item.color}-500/20`}>
                            <div className={`text-${item.color}-500`}>{item.icon}</div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-bold text-platinum-100 font-rajdhani">{item.period}</p>
                              <Badge variant="outline" className={`border-${item.color}-500/50 text-${item.color}-400 font-rajdhani text-xs`}>
                                {item.color === 'rose' ? 'LISTED' : 'RESOLVED'}
                              </Badge>
                            </div>
                            <p className="text-sm text-platinum-200 font-rajdhani">{item.event}</p>
                            <p className="text-xs text-platinum-500 font-rajdhani">{item.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Ongoing Concerns */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border border-rose-500/30">
                    <CardHeader className="px-0 pt-0 pb-2">
                      <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                        <AlertTriangle className="h-5 w-5" />
                        Ongoing Concerns (Despite FATF Removal)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <div className="space-y-3">
                        {[
                          'The Sentry reported evidence of UAE ongoing role in illicit arms and gold trade (February 2024)',
                          'Haqqani Network funding via front companies',
                          'Taliban funding through UAE-based channels',
                          'Lashkar-e-Taiba funding including for 26/11 Mumbai attacks via UAE banks',
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-platinum-300">
                            <XCircle className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                            <span className="font-rajdhani">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0 pb-2">
                      <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                        <CheckCircle className="h-5 w-5" />
                        Enforcement Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <div className="space-y-3">
                        {[
                          { action: 'March 2026', detail: 'UAE dismantled Hezbollah and Iran-linked network involved in money laundering and terror financing' },
                          { action: 'Federal Law No. 10 of 2025', detail: 'New comprehensive AML/CFT legislation enacted' },
                          { action: 'Hezbollah sanctions (Nov 2018)', detail: 'UAE imposed economic sanctions on 10 senior Hezbollah leaders including Hassan Nasrallah and Naim Qassem' },
                        ].map((item, idx) => (
                          <div key={idx} className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3">
                            <p className="text-xs text-emerald-400 font-bold font-rajdhani">{item.action}</p>
                            <p className="text-xs text-platinum-300 mt-1 font-rajdhani">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Mass Trials Tab */}
        <TabsContent value="trials" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Counter-Terrorism Trials & Convictions"
              description="Major mass trials, convictions, and human rights concerns"
            >
              <div className="space-y-4">
                {(trials || []).map((trial, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-platinum-100 font-rajdhani">{trial.name || trial.id}</h3>
                        <p className="text-xs text-platinum-500 font-rajdhani">{trial.date}</p>
                      </div>
                      <Badge variant="outline" className="border-rose-500/50 text-rose-400 font-rajdhani">
                        <Gavel className="w-3 h-3 mr-1" />
                        TRIAL
                      </Badge>
                    </div>
                    <p className="text-sm text-platinum-300 font-rajdhani mb-3">{trial.description || JSON.stringify(trial).slice(0, 200)}</p>
                    {trial.defendants && (
                      <div className="flex gap-4 text-xs text-platinum-400">
                        <span>Defendants: <span className="text-rose-400 font-bold">{trial.defendants}</span></span>
                        {trial.convicted && <span>Convicted: <span className="text-orange-400 font-bold">{trial.convicted}</span></span>}
                        {trial.acquitted && <span>Acquitted: <span className="text-emerald-400 font-bold">{trial.acquitted}</span></span>}
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Summary Stats */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: 'UAE 94 Case (2013)', value: '94 tried, 56 convicted, 26 acquitted' },
                    { label: '84-Person Trial (2024)', value: '84 activists charged with terrorism' },
                    { label: 'Zvi Kogan Trial (Mar 2025)', value: '3 death sentences, 1 life' },
                  ].map((item, idx) => (
                    <div key={idx} className="glass-card rounded-lg p-4 bg-glass-surface/50 border-glass-border text-center">
                      <p className="text-xs text-platinum-500 font-rajdhani">{item.label}</p>
                      <p className="text-sm font-bold text-platinum-200 mt-1 font-rajdhani">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Rehabilitation Tab */}
        <TabsContent value="rehab" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Rehabilitation & Deradicalization"
              description="Munasaha centres, international programs, and human rights concerns"
            >
              <div className="space-y-6">
                {/* Munasaha */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border border-orange-500/30">
                  <CardHeader className="px-0 pt-0 pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-orange-400">
                      <BookOpen className="h-5 w-5" />
                      Munasaha Rehabilitation Centres
                    </CardTitle>
                    <CardDescription>Located at Al Razeen prison complex — criticized for indefinite detention</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-3">
                        {[
                          { label: 'Established', value: 'August 2014' },
                          { label: 'Legal Basis', value: 'Article 66 of Counter-Terrorism Law' },
                          { label: 'Location', value: 'Al Razeen prison complex' },
                          { label: 'Mandate (2019)', value: 'Expanded to include anyone with "extremist/deviant thought"' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-platinum-400 font-rajdhani">{item.label}</span>
                            <span className="text-platinum-200 font-bold font-rajdhani">{item.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        {[
                          'Intensive religious re-education and nationalist propaganda',
                          'Coercion to renounce beliefs and pledge loyalty to regime',
                          'No evidence detainees received effective counselling',
                          'No maximum time limit on detention',
                          'Reports to prosecution every 3 months (no court hearing required)',
                          'UAE 94: 51 completed sentences by Mar 2023 but remained imprisoned',
                          'Individuals documented spending over 3 years beyond original sentences',
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-platinum-400">
                            <AlertTriangle className="h-3 w-3 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="font-rajdhani">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>

                {/* International */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                      <Globe className="h-5 w-5" />
                      International Counter-Extremism Programs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3">
                      {[
                        { name: 'Hedayah (Abu Dhabi)', role: 'International Centre of Excellence for Countering Violent Extremism — UAE-supported' },
                        { name: 'Sawab Centre', role: 'UAE-US partnership running digital communications hub to counter extremist ideologies online' },
                        { name: 'Muslim Council of Elders', role: 'UAE-supported moderate Muslim discourse platform' },
                        { name: 'World Council of Muslim Communities', role: 'UAE-supported international Muslim organization' },
                      ].map((item, idx) => (
                        <div key={idx} className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3">
                          <p className="text-sm font-bold text-platinum-100 font-rajdhani">{item.name}</p>
                          <p className="text-xs text-platinum-400 mt-1 font-rajdhani">{item.role}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* ADHRB Concerns */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border border-orange-500/30">
                  <CardHeader className="px-0 pt-0 pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-orange-400">
                      <Info className="h-5 w-5" />
                      Human Rights Concerns (ADHRB — November 2025)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-2">
                      {[
                        'Indefinite detention at Munasaha centres without effective legal recourse',
                        'Coercion to renounce beliefs and pledge loyalty to regime',
                        'UAE 94 case: individuals completing sentences remaining imprisoned',
                        '2019 expansion: anyone deemed to hold "extremist thought" can be detained indefinitely',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-platinum-300">
                          <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="font-rajdhani">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Intelligence Sources"
              description="Source tier distribution and credibility assessment"
            >
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Tier Distribution Chart */}
                  <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0 pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Database className="h-5 w-5 text-violet-500" />
                        Source Tier Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <PieChart data={tierDistribution} height={280} showLegend={true} />
                    </CardContent>
                  </div>

                  {/* Tier Breakdown */}
                  <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0 pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Info className="h-5 w-5 text-violet-500" />
                        Source Tier Breakdown
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <ScrollArea className="h-[280px]">
                        <div className="space-y-3">
                          {[
                            { tier: 'TIER_0', name: 'Government Primary', count: 8, color: 'rose', sources: 'UAE Mission to UN, EOCN, NAMLCFTC, Central Bank, MFA, MOI/State Security, WAM' },
                            { tier: 'TIER_1', name: 'Mainstream Media', count: 12, color: 'orange', sources: 'Reuters, BBC, Al Jazeera, Al Arabiya, The Guardian, The National, Khaleej Times, Gulf News, CNN, AP, AFP' },
                            { tier: 'TIER_2', name: 'Regional & Specialized', count: 15, color: 'gold', sources: 'HRW, Washington Institute, Jamestown Foundation, The Sentry, CounterExtremism, Hedayah, Atlantic Council, Brookings, Chatham House' },
                            { tier: 'TIER_3', name: 'Secondary', count: 5, color: 'platinum', sources: 'Wikipedia, Orinoco Tribune, YouTube, Reddit' },
                            { tier: 'TIER_5', name: 'Academic/Research', count: 2, color: 'navy', sources: 'US Congressional Research Service, UK Parliament Committees' },
                          ].map((item, idx) => (
                            <div key={idx} className="rounded-lg bg-platinum-800/50 border border-platinum-700 p-3">
                              <div className="flex items-center justify-between mb-1">
                                <Badge variant="outline" className={`border-${item.color}-500/50 text-${item.color}-400 font-rajdhani text-xs`}>
                                  {item.tier} ({item.count})
                                </Badge>
                              </div>
                              <p className="text-xs text-platinum-200 font-bold font-rajdhani">{item.name}</p>
                              <p className="text-xs text-platinum-500 mt-1 font-rajdhani">{item.sources}</p>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </div>
                </div>

                {/* All Sources List */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Crosshair className="h-5 w-5 text-violet-500" />
                      All Intelligence Sources ({sources?.length || 0})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {(sources || []).map((source, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-2 hover:bg-platinum-800/70 transition-all">
                            <span className="text-xs text-platinum-300 font-rajdhani">{source.source || source}</span>
                            <div className="flex gap-1">
                              <Badge variant="outline" className="text-xs border-violet-500/50 text-violet-400 font-rajdhani">
                                {source.tier || 'TIER_1'}
                              </Badge>
                              <Badge variant="outline" className="text-xs border-emerald-500/50 text-emerald-400 font-rajdhani">
                                {source.credibility || 'HIGH'}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Key Findings Tab */}
        <TabsContent value="findings" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Key Findings & Synthesized Analysis"
              description="Critical findings extracted from all 25 query patterns across 23 pages"
            >
              <div className="space-y-6">
                {/* Synthesized Findings by Category */}
                {synthesizedFindings && Object.entries(synthesizedFindings).map(([key, finding]) => (
                  <div key={key} className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                    <CardHeader className="px-0 pt-0 pb-2">
                      <CardTitle className="text-lg flex items-center gap-2 text-rose-400 font-rajdhani">
                        <AlertCircle className="h-5 w-5" />
                        {finding.title || key}
                      </CardTitle>
                      {finding.summary && <p className="text-sm text-platinum-400 font-rajdhani mt-1">{finding.summary}</p>}
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <div className="space-y-2">
                        {(finding.keyPoints || finding.details || finding.concerns || []).map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-platinum-300">
                            <div className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                            <span className="font-rajdhani">{point}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                ))}

                {/* All Key Findings */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border border-rose-500/30">
                  <CardHeader className="px-0 pt-0 pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-rose-400 font-rajdhani">
                      <AlertOctagon className="h-5 w-5" />
                      All Key Findings ({keyFindings.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {(keyFindings || []).map((finding, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className="flex items-start gap-2 rounded-lg bg-rose-500/10 border border-rose-500/20 p-3"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                          <span className="text-xs text-platinum-300 font-rajdhani">{typeof finding === 'string' ? finding : finding.finding || finding}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Stakeholder Impacts */}
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0 pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-orange-400 font-rajdhani">
                      <Users className="h-5 w-5" />
                      Stakeholder Impacts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {(stakeholderImpacts || []).map((impact, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Users className="h-4 w-4 text-rose-500" />
                              <span className="text-sm font-medium text-platinum-200 font-rajdhani">{impact.stakeholder}</span>
                            </div>
                            <div className="text-right">
                              <Badge variant="outline" className="border-orange-500/50 text-orange-400 font-rajdhani text-xs">
                                {impact.sentiment}
                              </Badge>
                              <p className="text-xs text-platinum-500 mt-0.5 font-rajdhani">{impact.impact}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
