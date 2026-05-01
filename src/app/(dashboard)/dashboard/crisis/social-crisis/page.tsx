// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, AreaChart, RadarChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Users, AlertTriangle, TrendingDown, Shield, Heart, Home, Briefcase,
  AlertOctagon, Ban, DollarSign, Globe, UserX, Scale, Ticket, Film,
  Database, FileWarning, TrendingUp, Clock, CheckCircle, XCircle
} from 'lucide-react'
import { useSocialCrisisData } from '@/lib/data-loader/hooks'
import { motion } from 'framer-motion'
import {
  socialCrisisData,
  socialCrisisMetrics,
  laborUnrestTimeline,
  queryPatterns,
  sourceRegistry,
  laborIncidents,
  primaryGrievances,
  governmentMechanisms,
  demographicData,
  socialMediaArrests,
  alcoholPenalties,
  cybercrimePenalties,
  domesticWorkerStats,
  kafalaSystem,
  riskMatrix,
  sentimentAnalysis,
  sourceTierBreakdown,
  crisisTypes,
  affectedGroups,
  supportServices,
  socialCrisisOverview,
} from '@/lib/data/crisis/social-crisis-data'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

// Chart color palette
const chartColors = {
  rose: '#f43f5e',
  orange: '#f97316',
  gold: '#eab308',
  emerald: '#10b981',
  cyan: '#06b6d4',
  violet: '#8b5cf6',
  pink: '#ec4899',
  slate: '#64748b',
}

export default function SocialCrisisPage() {
  // Use the hook data
  const { data } = useSocialCrisisData()

  // Demographics Pie Chart Data
  const demographicsPieData = demographicData.map((d, i) => ({
    name: d.group,
    value: d.percentage,
    color: Object.values(chartColors)[i % Object.values(chartColors).length],
  }))

  // Grievances Bar Chart Data
  const grievancesBarData = primaryGrievances.map((g) => ({
    grievance: g.grievance,
    frequency: g.rank,
    weight: g.frequency === 'Highest' ? 5 : g.frequency === 'High' ? 3 : 1,
  }))

  // Risk Matrix Data
  const riskRadarData = riskMatrix.map((r) => ({
    crisisType: r.crisisType,
    frequency: r.frequency === 'High' ? 3 : r.frequency === 'Medium' ? 2 : 1,
    severity: r.severity === 'High' ? 3 : 2,
    awareness: r.publicAwareness === 'Very High' ? 4 : r.publicAwareness === 'High' ? 3 : 2,
  }))

  // Sentiment Data
  const sentimentPieData = sentimentAnalysis.map((s, i) => ({
    name: s.category,
    value: Math.abs(s.valence) * 100,
    color: i === 3 ? CHART_COLORS.purple : i === 0 ? CHART_COLORS.rose : i === 1 ? CHART_COLORS.orange : CHART_COLORS.teal,
  }))

  // Source Tier Data
  const sourceTierData = sourceTierBreakdown.map((s) => ({
    tier: s.tier.replace('TIER ', 'T'),
    count: s.count,
    color: s.tier === 'TIER 0' ? CHART_COLORS.emerald :
           s.tier === 'TIER 1' ? CHART_COLORS.teal :
           s.tier === 'TIER 2' ? CHART_COLORS.purple :
           s.tier === 'TIER 3' ? CHART_COLORS.orange : CHART_COLORS.platinum,
  }))

  // Labor Timeline Area Chart Data
  const laborTimelineAreaData = laborUnrestTimeline.map((l) => ({
    year: l.year,
    workers: l.workers,
    events: l.events * 100,
  }))

  // Crisis Types Bar Data
  const crisisTypesBarData = crisisTypes.map((c) => ({
    type: c.type,
    cases: c.cases,
    color: c.severity === 'HIGH' ? CHART_COLORS.rose : c.severity === 'MEDIUM' ? CHART_COLORS.orange : CHART_COLORS.gold,
  }))

  // Affected Groups Bar Data
  const affectedGroupsBarData = affectedGroups.map((g) => ({
    group: g.group.length > 20 ? g.group.substring(0, 20) + '...' : g.group,
    vulnerability: g.vulnerability === 'CRITICAL' ? 4 : g.vulnerability === 'HIGH' ? 3 : 2,
    risk: g.riskLevel === 'Critical' ? 4 : g.riskLevel === 'High' ? 3 : 2,
  }))

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
          <Badge className="mb-2 bg-gradient-to-r from-rose-500/20 to-pink-600/20 text-rose-400 border-rose-500/50">
            <Users className="w-3 h-3 mr-1" />
            SOCIAL STABILITY
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Social Crisis
            </span>
          </h1>
          <p className="mt-2 text-platinum-500-400">
            Social crisis intelligence — labor issues, vulnerable populations, community tensions, and support systems
          </p>
        </div>
        <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">
          <AlertTriangle className="w-3 h-3 mr-1" />
          {data?.alertLevel || 'YELLOW'}
        </Badge>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard
          title="Total Incidents"
          value={socialCrisisMetrics.totalIncidents}
          icon={<AlertOctagon className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
        <MetricCard
          title="Workers Affected"
          value={socialCrisisMetrics.totalWorkers.toLocaleString()}
          icon={<Users className="h-6 w-6" />}
          gradient="orange"
          status="error"
        />
        <MetricCard
          title="Arrests Total"
          value={socialCrisisMetrics.totalArrested.toLocaleString()}
          icon={<UserX className="h-6 w-6" />}
          gradient="red"
          status="error"
        />
        <MetricCard
          title="Expat %"
          value={`${socialCrisisMetrics.expatPercentage}%`}
          icon={<Globe className="h-6 w-6" />}
          gradient="violet"
        />
        <MetricCard
          title="Inspections"
          value={(socialCrisisMetrics.totalInspections / 1000).toFixed(0) + 'K'}
          icon={<Database className="h-6 w-6" />}
          gradient="cyan"
        />
        <MetricCard
          title="Violations Found"
          value={socialCrisisMetrics.totalViolations.toLocaleString()}
          icon={<FileWarning className="h-6 w-6" />}
          gradient="gold"
          status="warning"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="labor">Labor Unrest</TabsTrigger>
          <TabsTrigger value="community">Community Tensions</TabsTrigger>
          <TabsTrigger value="morality">Public Morality</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="penalties">Penalty Reference</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Social Crisis Overview"
              description="Key metrics and sentiment analysis"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Sentiment Pie */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-rose-500" />
                      Sentiment Analysis
                    </CardTitle>
                    <CardDescription>Combined valence: -0.63 (Negative)</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <PieChart
                      data={sentimentPieData}
                      height={280}
                      showLegend={true}
                      ariaLabel="Sentiment analysis pie chart showing negative valence across Labor, Community, and Public Morality categories"
                    />
                  </CardContent>
                </motion.div>

                {/* Crisis Types Bar */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-rose-500" />
                      Crisis Types by Severity
                    </CardTitle>
                    <CardDescription>Cases by category</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <BarChart
                      data={crisisTypesBarData}
                      xAxisKey="type"
                      bars={[{ dataKey: 'cases', name: 'Cases', color: CHART_COLORS.rose }]}
                      height={280}
                      showGrid={true}
                      ariaLabel="Bar chart showing crisis types by number of cases"
                    />
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Timeline Mini View */}
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Key Timeline Events"
              description="Major social crisis incidents"
            >
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {socialCrisisData.timeline.slice(0, 10).map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.07 }}
                      className="flex items-center gap-4 rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                    >
                      <div className="flex-shrink-0 w-20 text-sm font-medium text-cyan-400">
                        {event.date}
                      </div>
                      <div className="flex-grow">
                        <div className="font-medium text-platinum-500-200">{event.event}</div>
                        <div className="text-sm text-platinum-500-400">{event.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* LABOR UNREST TAB */}
        <TabsContent value="labor" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Labor Unrest Analysis"
              description="Worker protests, strikes, and grievances"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Labor Timeline Area */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-cyan-500" />
                      Workers Involved Over Time
                    </CardTitle>
                    <CardDescription>Major labor incidents by year</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <AreaChart
                      data={laborTimelineAreaData}
                      xAxisKey="year"
                      bars={[
                        { dataKey: 'workers', name: 'Workers', color: CHART_COLORS.teal },
                      ]}
                      height={280}
                      showGrid={true}
                      ariaLabel="Area chart showing workers involved in labor incidents over time"
                    />
                  </CardContent>
                </motion.div>

                {/* Primary Grievances */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Ban className="h-5 w-5 text-orange-500" />
                      Primary Grievances
                    </CardTitle>
                    <CardDescription>Ranked by frequency</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <BarChart
                      data={grievancesBarData}
                      xAxisKey="grievance"
                      bars={[{ dataKey: 'weight', name: 'Severity', color: CHART_COLORS.orange }]}
                      height={280}
                      showGrid={true}
                      ariaLabel="Bar chart showing primary grievances ranked by frequency"
                    />
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Kafala System Info */}
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Kafala System"
              description="Sponsorship system affecting migrant workers"
            >
              <div className="grid gap-4 md:grid-cols-3">
                {kafalaSystem.restrictions.map((restriction, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-4 w-4 text-rose-400" />
                      <h4 className="font-medium text-platinum-500-200">Restriction</h4>
                    </div>
                    <p className="text-sm text-platinum-500-400">{restriction}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-rose-500/10 rounded-lg border border-rose-500/30">
                <div className="flex items-center gap-2 text-rose-400">
                  <Globe className="h-5 w-5" />
                  <span className="font-medium">Scope: {kafalaSystem.scope}</span>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Labor Incidents List */}
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Labor Incident Timeline"
              description="Historical record of major incidents"
            >
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {laborIncidents.map((incident, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between rounded-lg bg-gradient-to-r from-orange-500/10 to-rose-600/5 p-4 border border-orange-500/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-sm font-medium text-orange-400 w-24">{incident.date}</div>
                        <div>
                          <div className="font-medium text-platinum-500-200">{incident.incident}</div>
                          <div className="text-sm text-platinum-500-400">
                            {typeof incident.workersInvolved === 'number'
                              ? `${incident.workersInvolved.toLocaleString()} workers`
                              : incident.workersInvolved} • {incident.location}
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          incident.status === 'Resolved'
                            ? 'border-emerald-500/50 text-emerald-400'
                            : incident.status === 'Pardoned'
                            ? 'border-cyan-500/50 text-cyan-400'
                            : incident.status === 'Active'
                            ? 'border-rose-500/50 text-rose-400'
                            : 'border-platinum-500/50 text-platinum-500-400'
                        }
                      >
                        {incident.status}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>

          {/* Government Response */}
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Government Response Mechanisms"
              description="WPS, inspections, and enforcement"
            >
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {governmentMechanisms.map((mech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-card rounded-xl p-4 bg-glass-surface/50 border-glass-border"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      <h4 className="font-medium text-platinum-500-200">{mech.mechanism}</h4>
                    </div>
                    <p className="text-sm text-platinum-500-400">{mech.detail}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* COMMUNITY TENSIONS TAB */}
        <TabsContent value="community" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Community Tensions"
              description="National-expat relations and gender issues"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Affected Groups Radar */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-violet-500" />
                      Vulnerable Groups Risk
                    </CardTitle>
                    <CardDescription>Vulnerability vs Risk Level</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <RadarChart
                      data={affectedGroupsBarData}
                      xAxisKey="group"
                      bars={[
                        { dataKey: 'vulnerability', name: 'Vulnerability', color: CHART_COLORS.purple },
                        { dataKey: 'risk', name: 'Risk Level', color: CHART_COLORS.rose },
                      ]}
                      height={300}
                      ariaLabel="Radar chart comparing vulnerability and risk levels for different affected groups"
                    />
                  </CardContent>
                </motion.div>

                {/* Stakeholder Impacts */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-cyan-500" />
                      Stakeholder Impacts
                    </CardTitle>
                    <CardDescription>Affected groups and sentiment</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[260px]">
                      <div className="space-y-3">
                        {socialCrisisData.stakeholderImpacts.map((impact, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-platinum-800/50 border border-platinum-700/50"
                          >
                            <div className="font-medium text-platinum-500-200 mb-1">
                              {impact.stakeholder}
                            </div>
                            <div className="text-sm text-platinum-500-400 mb-2">{impact.impact}</div>
                            <Badge
                              variant="outline"
                              className={
                                impact.sentiment === 'Negative'
                                  ? 'border-rose-500/50 text-rose-400'
                                  : 'border-cyan-500/50 text-cyan-400'
                              }
                            >
                              {impact.sentiment}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Domestic Worker Stats */}
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Domestic Worker Incidents"
              description="Runaway worker arrests in Dubai"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {domesticWorkerStats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border text-center"
                  >
                    <div className="text-4xl font-bold text-rose-400 mb-2">
                      {stat.arrested}
                    </div>
                    <div className="text-platinum-500-400">arrested in {stat.year}</div>
                    <div className="text-sm text-platinum-500-500 mt-2">{stat.note}</div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* PUBLIC MORALITY TAB */}
        <TabsContent value="morality" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Public Morality Crisis"
              description="Social media arrests and moral enforcement"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Social Media Arrests */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Film className="h-5 w-5 text-rose-500" />
                      Social Media Arrests (2026)
                    </CardTitle>
                    <CardDescription>Iran-UAE conflict related</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <BarChart
                      data={socialMediaArrests.map((a) => ({
                        incident: a.incident.length > 15 ? a.incident.substring(0, 15) + '...' : a.incident,
                        arrested: a.arrested,
                      }))}
                      xAxisKey="incident"
                      bars={[{ dataKey: 'arrested', name: 'Arrested', color: CHART_COLORS.rose }]}
                      height={280}
                      showGrid={true}
                      ariaLabel="Bar chart showing social media arrests by incident type"
                    />
                  </CardContent>
                </motion.div>

                {/* Risk Matrix */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Scale className="h-5 w-5 text-orange-500" />
                      Risk Matrix
                    </CardTitle>
                    <CardDescription>Frequency vs Severity</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <RadarChart
                      data={riskRadarData}
                      xAxisKey="crisisType"
                      bars={[
                        { dataKey: 'frequency', name: 'Frequency', color: CHART_COLORS.orange },
                        { dataKey: 'severity', name: 'Severity', color: CHART_COLORS.rose },
                        { dataKey: 'awareness', name: 'Awareness', color: CHART_COLORS.teal },
                      ]}
                      height={300}
                      ariaLabel="Radar chart showing risk matrix across different crisis types"
                    />
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Key Findings */}
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Key Findings"
              description="Critical insights from the social crisis dossier"
            >
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {socialCrisisData.keyFindings.map((finding, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-platinum-800/50 border border-platinum-700/50"
                    >
                      <AlertTriangle className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span className="text-platinum-500-300">{finding}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* DEMOGRAPHICS TAB */}
        <TabsContent value="demographics" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="UAE Population Demographics"
              description="Composition of UAE society (3.1M total)"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Demographics Pie */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-cyan-500" />
                      Population Composition
                    </CardTitle>
                    <CardDescription>85% foreign population</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <PieChart
                      data={demographicsPieData}
                      height={300}
                      showLegend={true}
                      ariaLabel="Pie chart showing UAE population demographics by nationality"
                    />
                  </CardContent>
                </motion.div>

                {/* Detailed breakdown */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-violet-500" />
                      Detailed Breakdown
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="space-y-3">
                      {demographicData.map((demo, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-platinum-500-300">{demo.group}</span>
                          <div className="flex items-center gap-2">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                              style={{ width: `${demo.percentage * 2}px` }}
                            />
                            <Badge variant="outline" className="text-platinum-500-400">
                              {demo.percentage}%
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* PENALTIES TAB */}
        <TabsContent value="penalties" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Penalty Reference"
              description="Legal consequences for various offenses"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Alcohol Penalties */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertOctagon className="h-5 w-5 text-orange-500" />
                      Alcohol/Drug Offenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {alcoholPenalties.map((penalty, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-platinum-800/50 border border-platinum-700/50"
                          >
                            <div className="font-medium text-platinum-500-200 mb-1">
                              {penalty.offense}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {penalty.fine && (
                                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">
                                  Fine: {penalty.fine}
                                </Badge>
                              )}
                              {penalty.imprisonment && (
                                <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">
                                  Prison: {penalty.imprisonment}
                                </Badge>
                              )}
                              {penalty.other && (
                                <Badge className="bg-platinum-500/20 text-platinum-500-400 border-platinum-500/50">
                                  {penalty.other}
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>

                {/* Cybercrime Penalties */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-rose-500" />
                      Cybercrime/Moral Offenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {cybercrimePenalties.map((penalty, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-platinum-800/50 border border-platinum-700/50"
                          >
                            <div className="font-medium text-platinum-500-200 mb-1">
                              {penalty.offense}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {penalty.minFine && (
                                <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">
                                  Min: {penalty.minFine}
                                </Badge>
                              )}
                              {penalty.maxFine && (
                                <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">
                                  Max: {penalty.maxFine}
                                </Badge>
                              )}
                              {penalty.imprisonment && (
                                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">
                                  {penalty.imprisonment}
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* SOURCES TAB */}
        <TabsContent value="sources" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Source Analysis"
              description="Intelligence sources by tier"
            >
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Source Tier Breakdown */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5 text-cyan-500" />
                      Sources by Tier
                    </CardTitle>
                    <CardDescription>{queryPatterns.length} queries executed</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <BarChart
                      data={sourceTierData}
                      xAxisKey="tier"
                      bars={[{ dataKey: 'count', name: 'Sources', color: CHART_COLORS.teal }]}
                      height={280}
                      showGrid={true}
                      ariaLabel="Bar chart showing source distribution by tier level"
                    />
                  </CardContent>
                </motion.div>

                {/* Query Scope */}
                <motion.div
                  variants={cardHover}
                  whileHover="hover"
                  className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Ticket className="h-5 w-5 text-violet-500" />
                      Query Patterns
                    </CardTitle>
                    <CardDescription>Scope distribution</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-2">
                        {queryPatterns.reduce((acc, q) => {
                          const existing = acc.find((a) => a.scope === q.scope)
                          if (existing) {
                            existing.count++
                          } else {
                            acc.push({ scope: q.scope, count: 1 })
                          }
                          return acc
                        }, [] as { scope: string; count: number }[]).map((scope, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2 rounded bg-platinum-800/50"
                          >
                            <span className="text-platinum-500-300">{scope.scope}</span>
                            <Badge variant="outline" className="text-cyan-400 border-cyan-500/50">
                              {scope.count} queries
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Source Registry */}
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Source Registry"
              description={`${sourceRegistry.length} sources across all tiers`}
            >
              <ScrollArea className="h-[400px]">
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {sourceRegistry.map((source, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      className="glass-card rounded-lg p-3 bg-glass-surface/50 border-glass-border"
                    >
                      <div className="font-medium text-platinum-500-200 text-sm mb-1">
                        {source.source}
                      </div>
                      <div className="text-xs text-platinum-500-400 mb-2">{source.coverage}</div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={
                            source.tier === 'TIER_0'
                              ? 'border-emerald-500/50 text-emerald-400'
                              : source.tier === 'TIER_1'
                              ? 'border-cyan-500/50 text-cyan-400'
                              : source.tier === 'TIER_2'
                              ? 'border-violet-500/50 text-violet-400'
                              : source.tier === 'TIER_3'
                              ? 'border-orange-500/50 text-orange-400'
                              : 'border-platinum-500/50 text-platinum-500-400'
                          }
                        >
                          {source.tier.replace('TIER_', 'T')}
                        </Badge>
                        <span className="text-xs text-platinum-500-500">{source.type}</span>
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
