// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassCard, GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  TrendingUp,
  Users,
  Zap,
  DollarSign,
  Shield,
  Briefcase,
  Clock,
  Scale,
  UsersRound,
  BookOpen,
  Calendar,
  Crosshair,
  Award,
  CheckCircle,
  XCircle,
  Eye,
  Heart,
  Wrench,
  Building,
  FileText,
  Beaker,
} from 'lucide-react'
import {
  laborEmploymentData,
  workforceOverview,
  workforceMetrics,
  migrantWorkerOrigins,
  kafalaLegislativeReforms,
  kafalaPersistentAbuses,
  governmentResponseRating,
  wpsOverview,
  wps2025Updates,
  wpsEffectiveness,
  wageTheftCases,
  emiratiMinimumWages,
  expatriateMinimumWage,
  traditionalGratuity,
  voluntaryAlternativeEOSB,
  iloeOverview,
  iloeEligibility,
  iloeExcludedCategories,
  iloePremiumStructure,
  iloeCompensation,
  iloePerformanceStats,
  middayBreakDetails,
  middayBreakEmployerRequirements,
  middayBreakPenalties,
  middayBreakCompliance,
  standardWorkingHours,
  overtimeRules,
  domesticWorkerLaw,
  domesticWorkerRights,
  domesticWorkerProhibitedActions,
  accommodationStandards,
  ohsEmployerObligations,
  uaeWorkplaceSafetyMarket,
  workInjuryFramework,
  laborInspectionScale,
  laborInspectionFramework,
  laborInspectionTechnology,
  laborDisputeProcess,
  laborDisputeStats,
  tradeUnionStatus,
  rightToStrike,
  strikePenalties,
  workerRepresentationMechanisms,
  nafisProgramme,
  nafisAchievements,
  emiratizationQuotas2025,
  minimumSalaryEmiratis,
  emiratiIncentives,
  emiratiChallenges,
  iloConventionsRatified,
  protocolC29,
  iloContext,
  iloConventionsNotRatified,
  nationalityBasedSegmentation,
  gigEconomyLegalStatus,
  supplyChainStatus,
  passportConfiscationLegalStatus,
  passportConfiscationReality,
  recruitmentAgencyConditions,
  recruitmentAgencyProhibitions,
  laborLawAwareness,
  uaeLaborLawInitiatives,
  nationalEmploymentStrategy,
  aiLaborMarketRecognition,
  laborMarketObservatoryFocusAreas,
  laborMarketObservatoryKeyMetrics,
  dashboardWorkforceMetrics,
  dashboardProtectionCoverage,
  dashboardEmiratizationMetrics,
  dashboardEnforcementMetrics,
  dashboardILORightsMetrics,
  dashboardWagesCompensationMetrics,
  dashboardMiddayBreakMetrics,
  sentimentByTopic,
  sourceCategories,
  uaeRelevanceWhy,
  keyTension,
  laborReportMetadata,
} from '@/lib/data/topics/labor-data'

// Animation variants for staggered mount
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Alert color helper
const getAlertColor = (topic: string) => {
  const negativeTopics = ['Wage theft', 'Modern slavery', 'Right to strike', 'Trade unions', 'Supply chain due diligence', 'Passport confiscation', 'Minimum wage (expatriates)']
  const positiveTopics = ['Workforce growth', 'Emiratization', 'Labor inspections', 'Dispute resolution', 'WPS coverage']
  if (negativeTopics.some(t => topic.toLowerCase().includes(t.toLowerCase()))) return CHART_COLORS.rose
  if (positiveTopics.some(t => topic.toLowerCase().includes(t.toLowerCase()))) return CHART_COLORS.emerald
  return CHART_COLORS.gold
}

export default function LaborEmploymentPage() {
  // Sentiment data for pie chart
  const sentimentData = [
    { name: 'Positive', value: 52, color: CHART_COLORS.emerald },
    { name: 'Negative', value: 32, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 16, color: CHART_COLORS.platinum },
  ]

  // Sentiment by topic chart data
  const sentimentChartData = sentimentByTopic.slice(0, 8).map(item => ({
    name: item.topic.length > 20 ? item.topic.substring(0, 20) + '...' : item.topic,
    value: item.sentiment === 'Positive' ? 75 : item.sentiment === 'Negative' ? 25 : 50,
    color: getAlertColor(item.topic),
  }))

  // Migrant worker origins chart
  const migrantOriginsChart = migrantWorkerOrigins.map((item, idx) => ({
    name: item.country,
    value: parseFloat(item.estimatedWorkers.replace(/[^0-9.]/g, '')) || 0,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Emiratization achievements chart
  const emiratizationChart = nafisAchievements.map((item, idx) => ({
    name: item.metric.split(' ').slice(0, 2).join(' '),
    value: parseFloat(String(item.growth || '').replace(/[^0-9.]/g, '').replace('+', '')) || 0,
    color: CHART_COLORS.gold,
  }))

  // ILO conventions chart
  const iloRatified = iloConventionsRatified.filter(c => !c.convention.startsWith('P029')).length
  const iloNotRatified = iloConventionsNotRatified.length

  return (
    <motion.div
      className="space-y-8 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2">S-SECTOR</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-platinum-500">Labor & Employment</h1>
          <p className="mt-2 text-platinum-500-400">
            {laborEmploymentData.description}
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {laborReportMetadata.enrichedDate}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              500+ facts
            </span>
            <span className="flex items-center gap-1">
              <Crosshair className="h-4 w-4" />
              34 sources
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum-500 hover:bg-platinum/10">
            <Briefcase className="h-4 w-4" />
            Workforce
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-500-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Population"
          value="9.89M"
          previousValue={9.2}
          icon={<Users className="h-6 w-6" />}
          gradient="indigo"
          status="info"
        />
        <MetricCard
          title="Migrant Workers"
          value="8.7M"
          previousValue={8.0}
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
          status="warning"
        />
        <MetricCard
          title="Modern Slavery"
          value="132K"
          previousValue={140}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="indigo"
          status="error"
        />
        <MetricCard
          title="Wage Protection"
          value="99%+"
          previousValue={95}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'LAB-1', name: 'Kafala Reform' },
            { id: 'LAB-2', name: 'Wage Protection' },
            { id: 'LAB-3', name: 'Emiratization' },
            { id: 'LAB-4', name: 'Modern Slavery' },
            { id: 'LAB-5', name: 'ILO Compliance' },
            { id: 'LAB-6', name: 'Worker Rights' },
          ].map((area) => (
            <Badge key={area.id} variant="outline" className="border-platinum/30 text-platinum-500">
              {area.id} - {area.name}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="workforce">Workforce</TabsTrigger>
          <TabsTrigger value="kafala">Kafala System</TabsTrigger>
          <TabsTrigger value="wages">Wages & Protection</TabsTrigger>
          <TabsTrigger value="emiratization">Emiratization</TabsTrigger>
          <TabsTrigger value="workerrights">Worker Rights</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Labor & Employment Overview"
            description="Key metrics across workforce, protections, and labor rights"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Sentiment Distribution */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-platinum-500" />
                      Sentiment Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={200}
                      showLegend={true}
                      donut={true}
                    />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="text-center p-2 bg-emerald-500/20 rounded-lg">
                        <p className="text-lg font-bold text-emerald-500">52%</p>
                        <p className="text-xs text-platinum-500-500">Positive</p>
                      </div>
                      <div className="text-center p-2 bg-rose-500/20 rounded-lg">
                        <p className="text-lg font-bold text-rose-500">32%</p>
                        <p className="text-xs text-platinum-500-500">Negative</p>
                      </div>
                      <div className="text-center p-2 bg-platinum/20 rounded-lg">
                        <p className="text-lg font-bold text-platinum-500">16%</p>
                        <p className="text-xs text-platinum-500-500">Neutral</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Workforce Metrics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-gold-700" />
                      Workforce Composition
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: 'Migrant Workers', value: '8.7M (88%)', sublabel: 'Of total population' },
                      { label: 'Foreign Workers', value: '92.4%', sublabel: 'Of total workforce' },
                      { label: 'Youth (18-35)', value: '54.9%', sublabel: 'Of workforce' },
                      { label: 'Women in Leadership', value: '17.4%', sublabel: 'In workforce' },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-platinum-500-200">{item.label}</span>
                          <span className="text-lg font-bold text-platinum-500">{item.value}</span>
                        </div>
                        <Progress value={Math.random() * 60 + 20} className="h-2" />
                        <p className="text-xs text-platinum-500-400">{item.sublabel}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Sentiment by Topic */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-platinum-500" />
                    Sentiment by Topic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sentimentChartData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Score', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                    horizontal={true}
                  />
                </CardContent>
              </Card>

              {/* UAE Relevance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-emerald-500" />
                    Why This Matters for UAE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {uaeRelevanceWhy.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 bg-platinum-800/50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-platinum-500-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Tension */}
              <Card className="glass-card border-gold-700/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-gold-700">
                    <AlertTriangle className="h-5 w-5" />
                    Key Tension: Reform vs Enforcement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                      <h4 className="font-bold text-emerald-500 mb-2">Reform Momentum</h4>
                      <p className="text-sm text-platinum-500-300">{keyTension.reform}</p>
                    </div>
                    <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                      <h4 className="font-bold text-rose-500 mb-2">Enforcement Gap</h4>
                      <p className="text-sm text-platinum-500-300">{keyTension.enforcement}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Workforce Tab */}
        <TabsContent value="workforce" className="space-y-6">
          <GlassPanel
            title="Workforce Overview & Demographics"
            description="Population composition, migrant worker origins, and labor force statistics"
            badge="Core"
          >
            <div className="space-y-6">
              {/* Key Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-gold-700" />
                    Key Workforce Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {workforceMetrics.slice(0, 8).map((metric, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-gold-700">{metric.figure}</p>
                        <p className="text-sm text-platinum-500-400 mt-1">{metric.metric}</p>
                        <p className="text-xs text-platinum-500-500">{metric.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Migrant Worker Origins */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-platinum-500" />
                    Migrant Worker Origins
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={migrantOriginsChart}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Workers (millions)', color: CHART_COLORS.navy }]}
                    height={250}
                    showGrid={true}
                    horizontal={true}
                  />
                </CardContent>
              </Card>

              {/* ILO Context */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-emerald-500" />
                    ILO Context
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-platinum-800/50 rounded-lg">
                      <p className="text-sm text-platinum-500-400">Member Since</p>
                      <p className="text-2xl font-bold text-platinum-500">{iloContext.memberSince}</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg">
                      <p className="text-sm text-platinum-500-400">Migrant Workers</p>
                      <p className="text-2xl font-bold text-platinum-500">{iloContext.migrantWorkers}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-platinum-500-400">Collaboration Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {iloContext.collaborationAreas.split(', ').map((area, idx) => (
                        <Badge key={idx} variant="outline" className="text-platinum-500 border-platinum/30">{area}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Kafala Tab */}
        <TabsContent value="kafala" className="space-y-6">
          <GlassPanel
            title="Kafala System — Legislation vs Reality"
            description="Work permit system, reforms, and documented abuses"
            badge="Critical"
          >
            <div className="space-y-6">
              {/* Legislative Reforms */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-emerald-500" />
                    Legislative Reforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {kafalaLegislativeReforms.map((reform, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-platinum-500">{reform.reform}</span>
                          <Badge variant="outline" className="text-emerald-500 border-emerald-500/50">{reform.year}</Badge>
                        </div>
                        <p className="text-sm text-platinum-500-400">{reform.keyProvision}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Persistent Abuses */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <AlertTriangle className="h-5 w-5" />
                    Persistent Abuses (Documented)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {kafalaPersistentAbuses.map((abuse, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/5 border border-rose-500/20 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-rose-300">{abuse.issue}</span>
                          <Badge variant="destructive" className="text-xs">{abuse.source}</Badge>
                        </div>
                        <p className="text-sm text-platinum-500-300">{abuse.evidence}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Government Response Rating */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-platinum-500" />
                    Government Response Rating (Walk Free)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {governmentResponseRating.map((rating, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-platinum-500">{rating.score}</p>
                        <p className="text-xs text-platinum-500-400 mt-1">{rating.category}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Vulnerable Groups */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <UsersRound className="h-5 w-5 text-gold-700" />
                    Vulnerable Groups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Domestic workers (excluded from labor law)',
                      'Agricultural/farm workers',
                      'Shepherds, camel herders',
                      'Construction and manual laborers',
                    ].map((group, idx) => (
                      <Badge key={idx} variant="outline" className="text-platinum-500 border-gold-700/30">{group}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Wages Tab */}
        <TabsContent value="wages" className="space-y-6">
          <GlassPanel
            title="Wages & Worker Protections"
            description="Wage Protection System, minimum wage, gratuity, and benefits"
            badge="Core"
          >
            <div className="space-y-6">
              {/* WPS Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-500" />
                    Wage Protection System (WPS)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald-500">99%+</p>
                      <p className="text-sm text-platinum-500-400">Coverage</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum-500">{wpsOverview.monthlyTransfers}</p>
                      <p className="text-sm text-platinum-500-400">Monthly Transfers</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum-500">2009</p>
                      <p className="text-sm text-platinum-500-400">Launched</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-platinum-500-400 mb-2">2025 WPS Updates:</p>
                    <div className="grid gap-2 md:grid-cols-2">
                      {wps2025Updates.map((update, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 bg-platinum-800/50 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                          <span className="text-sm text-platinum-500-300">{update.item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Minimum Wages */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gold-700" />
                    Minimum Wages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                      <h4 className="font-bold text-emerald-500 mb-2">Emiratis (Private Sector)</h4>
                      <div className="space-y-2">
                        {emiratiMinimumWages.map((wage, idx) => (
                          <div key={idx} className="flex justify-between p-2 bg-platinum-800/50 rounded">
                            <span className="text-sm text-platinum-500-400">{wage.effectiveDate}</span>
                            <span className="font-bold text-platinum-500">{wage.minimumMonthlySalary}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                      <h4 className="font-bold text-rose-500 mb-2">Expatriates</h4>
                      <div className="space-y-2">
                        <div className="p-2 bg-platinum-800/50 rounded">
                          <p className="text-sm text-rose-400">Status</p>
                          <p className="font-bold text-platinum-500">{expatriateMinimumWage.status}</p>
                        </div>
                        <div className="p-2 bg-platinum-800/50 rounded">
                          <p className="text-sm text-rose-400">Lowest Observed</p>
                          <p className="font-bold text-platinum-500">{expatriateMinimumWage.lowestObserved}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* End of Service Gratuity */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-platinum-500" />
                    End-of-Service Gratuity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-gold-700 mb-2">Traditional (Fixed-Term Contracts)</h4>
                      <div className="space-y-2">
                        {traditionalGratuity.calculations.map((calc, idx) => (
                          <div key={idx} className="flex justify-between p-2 bg-platinum-800/50 rounded-lg">
                            <span className="text-sm text-platinum-500-300">{calc.servicePeriod}</span>
                            <span className="text-sm font-medium text-platinum-500">{calc.calculation}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-platinum-500-500 mt-2">Payment deadline: {traditionalGratuity.paymentDeadline}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-emerald-500 mb-2">Alternative EOSB Scheme (Since Oct 2023)</h4>
                      <div className="space-y-2">
                        {voluntaryAlternativeEOSB.employerContributionRates.map((rate, idx) => (
                          <div key={idx} className="flex justify-between p-2 bg-platinum-800/50 rounded-lg">
                            <span className="text-sm text-platinum-500-300">{rate.category}</span>
                            <span className="text-sm font-medium text-emerald-500">{rate.rate}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-platinum-500-500 mt-2">Approved providers: {voluntaryAlternativeEOSB.approvedProviders.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Unemployment Insurance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-emerald-500" />
                    Unemployment Insurance (ILOE)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald-500">90%</p>
                      <p className="text-sm text-platinum-500-400">Registration Rate</p>
                    </div>
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold-700">AED 350M</p>
                      <p className="text-sm text-platinum-500-400">Compensation Paid</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum-500">60%</p>
                      <p className="text-sm text-platinum-500-400">Payout Rate</p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {iloePremiumStructure.map((premium, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-sm text-platinum-500-400">Category {premium.category}</p>
                        <p className="text-lg font-bold text-platinum-500">{premium.basicMonthlySalary}</p>
                        <p className="text-sm text-emerald-500">Max premium: {premium.monthlyPremium}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Midday Break */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gold-700" />
                    Midday Break Enforcement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-platinum-800/50 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-platinum-500-400">Period</span>
                        <span className="font-bold text-platinum-500">{middayBreakDetails.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-platinum-500-400">Hours</span>
                        <span className="font-bold text-platinum-500">{middayBreakDetails.hours}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald-500">99%+</p>
                      <p className="text-sm text-platinum-500-400">Compliance Rate</p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-2 md:grid-cols-2">
                    <div className="p-2 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-sm text-rose-400">Penalty per worker</p>
                      <p className="font-bold text-platinum-500">{middayBreakPenalties.perWorkerViolation}</p>
                    </div>
                    <div className="p-2 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-sm text-rose-400">Maximum penalty</p>
                      <p className="font-bold text-platinum-500">{middayBreakPenalties.maximumMultipleViolations}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Emiratization Tab */}
        <TabsContent value="emiratization" className="space-y-6">
          <GlassPanel
            title="Emiratization Policy"
            description="Nafis programme, quotas, achievements, and challenges"
            badge="Key Policy"
          >
            <div className="space-y-6">
              {/* Nafis Programme */}
              <Card className="glass-card border-gold-700/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-gold-700">
                    <Award className="h-5 w-5" />
                    Nafis Programme
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold-700">2021</p>
                      <p className="text-sm text-platinum-500-400">Launched</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum-500">AED 24B</p>
                      <p className="text-sm text-platinum-500-400">Budget</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum-500">75K</p>
                      <p className="text-sm text-platinum-500-400">Original Target</p>
                    </div>
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald-500">92%</p>
                      <p className="text-sm text-platinum-500-400">Target Achieved</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    Nafis Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {nafisAchievements.map((achievement, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg">
                        <p className="text-sm text-platinum-500-400">{achievement.metric}</p>
                        <p className="text-2xl font-bold text-gold-700">{achievement.figure}</p>
                        {achievement.growth && (
                          <p className="text-sm text-emerald-500 mt-1">{achievement.growth}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quotas */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-platinum-500" />
                    2025 Emiratization Quotas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {emiratizationQuotas2025.map((quota, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg flex items-center justify-between">
                        <div>
                          <p className="font-medium text-platinum-500">{quota.companySize}</p>
                          <p className="text-sm text-emerald-500">{quota.requirement}</p>
                        </div>
                        <Badge variant="outline" className="text-rose-500 border-rose-500/50">{quota.fine}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Minimum Salary */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gold-700" />
                    Minimum Salary for Emiratis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-gold-700/20 rounded-lg text-center mb-4">
                    <p className="text-4xl font-bold text-gold-700">{minimumSalaryEmiratis.amount}</p>
                  </div>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="p-3 bg-platinum-800/50 rounded-lg">
                      <p className="text-sm text-platinum-500-400">Existing employees</p>
                      <p className="text-sm text-platinum-500-300">Must be adjusted by {minimumSalaryEmiratis.existingEmployees}</p>
                    </div>
                    <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                      <p className="text-sm text-rose-400">Non-compliance</p>
                      <p className="text-sm text-platinum-500-300">{minimumSalaryEmiratis.nonCompliance}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Incentives */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    Emirati Incentives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {emiratiIncentives.map((incentive, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-platinum-800/50 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span className="text-sm text-platinum-500-300">{incentive}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Challenges */}
              <Card className="glass-card border-amber-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-amber-400">
                    <AlertTriangle className="h-5 w-5" />
                    Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {emiratiChallenges.map((challenge, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2 bg-amber-500/5 border border-amber-500/20 rounded-lg">
                        <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-platinum-500-300">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Worker Rights Tab */}
        <TabsContent value="workerrights" className="space-y-6">
          <GlassPanel
            title="Worker Rights & ILO Compliance"
            description="ILO conventions, domestic workers, occupational health, and labor inspections"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              {/* ILO Conventions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Beaker className="h-5 w-5 text-emerald-500" />
                    ILO Conventions Ratified
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald-500">{iloConventionsRatified.length}</p>
                      <p className="text-xs text-platinum-500-400">Total Ratified</p>
                    </div>
                    <div className="p-3 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum-500">6</p>
                      <p className="text-xs text-platinum-500-400">Core Conventions</p>
                    </div>
                    <div className="p-3 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-rose-500">3</p>
                      <p className="text-xs text-platinum-500-400">Not Ratified</p>
                    </div>
                    <div className="p-3 bg-gold-700/20 rounded-lg text-center col-span-2">
                      <p className="text-2xl font-bold text-gold-700">Jan 2026</p>
                      <p className="text-xs text-platinum-500-400">Protocol C29 Ratified</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {iloConventionsRatified.slice(0, 6).map((conv, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-platinum-800/50 rounded-lg">
                        <span className="text-sm font-medium text-platinum-500">{conv.convention}</span>
                        <span className="text-xs text-platinum-500-500">{conv.name}</span>
                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/50 text-xs">{conv.ratificationYear}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Not Ratified */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <XCircle className="h-5 w-5" />
                    Conventions NOT Ratified
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {iloConventionsNotRatified.map((conv, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/5 border border-rose-500/20 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-rose-300">{conv.convention}: {conv.name}</span>
                        </div>
                        <p className="text-sm text-platinum-500-400 mt-1">Reason: {conv.reason}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Domestic Workers */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-gold-700" />
                    Domestic Workers (Federal Decree-Law No. 9/2022)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-emerald-500 mb-2">Rights</h4>
                      <div className="space-y-1">
                        {domesticWorkerRights.map((right, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-1.5 bg-platinum-800/50 rounded">
                            <CheckCircle className="h-3 w-3 text-emerald-500 shrink-0" />
                            <span className="text-xs text-platinum-500-300">{right.right}: {right.provision}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-rose-500 mb-2">Prohibited</h4>
                      <div className="space-y-1">
                        {domesticWorkerProhibitedActions.map((proh, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-1.5 bg-rose-500/5 border border-rose-500/20 rounded">
                            <XCircle className="h-3 w-3 text-rose-500 shrink-0" />
                            <span className="text-xs text-platinum-500-300">{proh.prohibition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-platinum-500-400 mt-4">
                    {domesticWorkerLaw.coveredOccupations}
                  </p>
                </CardContent>
              </Card>

              {/* OHS */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-platinum-500" />
                    Occupational Health & Safety (12 Employer Obligations)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2">
                    {ohsEmployerObligations.map((obligation, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-platinum-800/50 rounded-lg">
                        <span className="text-xs font-bold text-gold-700 w-6">{obligation.number}</span>
                        <span className="text-xs text-platinum-500-300">{obligation.obligation}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Labor Inspections */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-emerald-500" />
                    Labor Inspections 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {laborInspectionScale.slice(0, 4).map((metric, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-platinum-500">{metric.figure}</p>
                        <p className="text-xs text-platinum-500-400">{metric.metric}</p>
                        {metric.changeVs2024 && metric.changeVs2024 !== '—' && (
                          <Badge variant="outline" className="text-emerald-500 border-emerald-500/50 text-xs mt-1">{metric.changeVs2024}</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-2 md:grid-cols-2">
                    {laborInspectionFramework.map((item, idx) => (
                      <div key={idx} className="p-2 bg-platinum-800/50 rounded-lg">
                        <p className="text-sm font-medium text-platinum-500">{item.item}</p>
                        <p className="text-xs text-platinum-500-500">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trade Unions */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <XCircle className="h-5 w-5" />
                    Trade Unions & Right to Strike
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                      <h4 className="font-bold text-rose-500 mb-2">Trade Unions</h4>
                      <p className="text-sm text-platinum-500-300">{tradeUnionStatus.status}</p>
                      <p className="text-sm text-platinum-500-500 mt-1">{tradeUnionStatus.professionalAssociations}</p>
                    </div>
                    <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                      <h4 className="font-bold text-rose-500 mb-2">Right to Strike</h4>
                      <p className="text-sm text-platinum-500-300">{rightToStrike.status}</p>
                      <p className="text-xs text-platinum-500-500 mt-1">{rightToStrike.legalBasis}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-rose-300 mb-2">Penalties:</p>
                    <div className="flex flex-wrap gap-2">
                      {strikePenalties.map((penalty, idx) => (
                        <Badge key={idx} variant="outline" className="text-rose-500 border-rose-500/50">{penalty}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nationality Segmentation */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-platinum-500" />
                    Labor Market Segmentation by Nationality
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {nationalityBasedSegmentation.map((seg, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="font-medium text-gold-700">{seg.nationalityGroup}</p>
                        <p className="text-sm text-platinum-500-400">{seg.typicalSectors}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
