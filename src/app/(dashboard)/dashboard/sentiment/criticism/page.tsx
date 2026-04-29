'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  ThumbsDown,
  Shield,
  Eye,
  Scale,
  Globe,
  Siren,
  Clock,
  Database,
  ShieldAlert,
  CheckCircle,
  XCircle,
  ChevronRight,
  Activity,
  Building2,
  Phone,
  Banknote,
  GraduationCap,
  Gavel,
  MessageSquare,
  DollarSign,
  Car,
  Wifi,
  Hospital,
  Home,
  Briefcase,
  AlertOctagon,
  PieChart as PieChartIcon,
} from 'lucide-react'
import {
  useCriticismComplaintData,
  criticismOverview,
  riskIndicators,
} from '@/lib/data-loader/criticism-data'

// Animation variants for framer-motion
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardHover = {
  hover: { scale: 1.02, transition: { duration: 0.2 } },
}

const listItem = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
}

// Icon mapping for risk categories
const riskIconMap: Record<string, React.ElementType> = {
  'Cost of Living': DollarSign,
  'Rent Affordability': Home,
  'Salary/Employment': Briefcase,
  'Customer Service': MessageSquare,
  'Telecom Services': Wifi,
  'Government Digital Services': Shield,
  'School Fees': GraduationCap,
}

// Severity color helpers
const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'CRITICAL': return 'bg-red-500/20 text-red-400 border-red-500/50'
    case 'HIGH': return 'bg-amber-500/20 text-amber-400 border-amber-500/50'
    case 'MEDIUM-HIGH': return 'bg-orange-500/20 text-orange-400 border-orange-500/50'
    case 'MEDIUM': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
    case 'LOW': return 'bg-green-500/20 text-green-400 border-green-500/50'
    default: return 'bg-slate-500/20 text-slate-400 border-slate-500/50'
  }
}

const getSeverityTextColor = (severity: string) => {
  switch (severity) {
    case 'CRITICAL': return 'text-red-400'
    case 'HIGH': return 'text-amber-400'
    case 'MEDIUM-HIGH': return 'text-orange-400'
    case 'MEDIUM': return 'text-yellow-400'
    case 'LOW': return 'text-green-400'
    default: return 'text-slate-400'
  }
}

const getTrendColor = (trend: string) => {
  switch (trend) {
    case 'Worsening': return 'text-red-400'
    case 'Rising': return 'text-orange-400'
    case 'Declining': return 'text-amber-400'
    case 'Static': return 'text-slate-400'
    case 'Mixed': return 'text-yellow-400'
    default: return 'text-slate-400'
  }
}

export default function CriticismComplaintPage() {
  const { data } = useCriticismComplaintData()
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Criticism & Complaint data...</div>
      </div>
    )
  }

  // Extract metrics
  const criticalCount = riskIndicators.filter(r => r.score === 'CRITICAL').length
  const highCount = riskIndicators.filter(r => r.score === 'HIGH').length
  const worseningCount = riskIndicators.filter(r => r.trend === 'Worsening').length

  // Prepare chart data from sentiment distribution
  const sentimentChartData = data.sentimentDistributionMatrix.map(s => ({
    name: s.topic,
    negative: s.negative,
    neutral: s.neutral,
    positive: s.positive,
  }))

  // Prepare platform sentiment chart data
  const platformChartData = data.platformSentiment.map(p => ({
    name: p.platform,
    score: Math.abs(p.sentimentScore),
    sentiment: p.sentimentScore,
  }))

  // Prepare trend analysis chart data
  const trendChartData = data.trendAnalysis.map(t => ({
    category: t.category,
    '2024': t.trend2024 === 'CRITICAL' ? 4 : t.trend2024 === 'HIGH' ? 3 : t.trend2024 === 'MEDIUM' ? 2 : 1,
    '2025': t.trend2025 === 'CRITICAL' ? 4 : t.trend2025 === 'HIGH' ? 3 : t.trend2025 === 'MEDIUM' ? 2 : 1,
    '2026': t.trend2026 === 'CRITICAL' ? 4 : t.trend2026 === 'HIGH' ? 3 : t.trend2026 === 'MEDIUM' ? 2 : 1,
  }))

  // Relevance issue chart data
  const relevanceChartData = data.issueClassifications.map(i => ({
    name: i.issueCategory,
    relevance: i.relevance === 'CRITICAL' ? 4 : i.relevance === 'HIGH' ? 3 : i.relevance === 'MEDIUM-HIGH' ? 2.5 : i.relevance === 'MEDIUM' ? 2 : 1,
    population: parseFloat(i.populationAffected.replace(/[^0-9.]/g, '')) || 0,
  }))

  return (
    <div className="space-y-8 p-8">
      {/* Enhanced Header */}
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
            <Badge variant="destructive" className="mb-2 bg-rose-500/20 text-rose-400 border-rose-500/50">
              <Siren className="w-3 h-3 mr-1" />
              CRITICISM & COMPLAINTS
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold gradient-text-rose"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Criticism & Complaint Analysis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-slate-400"
          >
            {criticismOverview.dataPointsExtracted}+ statistics, {criticismOverview.entitiesCataloged}+ entities, {criticismOverview.legalProvisionsCited}+ legal provisions
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <Button variant="outline" className="gap-2 border-rose-500/50 text-rose-400 hover:bg-rose-500/10">
            <Eye className="h-4 w-4" />
            Monitor Risks
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-navy-950 gap-2">
            <ShieldAlert className="h-4 w-4" />
            Mitigation Actions
          </Button>
        </motion.div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Critical Risk Categories"
            value={criticalCount.toString()}
            icon={<AlertTriangle className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="High Severity Categories"
            value={highCount.toString()}
            icon={<AlertCircle className="h-6 w-6" />}
            gradient="gold"
            status="warning"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Worsening Trends"
            value={worseningCount.toString()}
            icon={<TrendingDown className="h-6 w-6" />}
            gradient="orange"
            status="error"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Quantitative KPIs"
            value={data.quantitativeDataRegistry.length.toString()}
            icon={<Database className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Risk Overview</TabsTrigger>
          <TabsTrigger value="metrics">KPI Metrics</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="entities">Entity Registry</TabsTrigger>
          <TabsTrigger value="legal">Legal Framework</TabsTrigger>
          <TabsTrigger value="findings">Key Findings</TabsTrigger>
          <TabsTrigger value="trends">Trends & Analysis</TabsTrigger>
        </TabsList>

        {/* Risk Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Risk Indicators at a Glance" description="Key complaint and criticism categories with severity and trend">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <AnimatePresence>
                  {riskIndicators.map((risk, idx) => {
                    const IconComponent = riskIconMap[risk.riskCategory] || AlertCircle
                    return (
                      <motion.div
                        key={risk.riskCategory}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                        className={`glass-card border ${getSeverityColor(risk.score)} p-4 cursor-pointer`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <Badge className={getSeverityColor(risk.score)}>
                            {risk.score}
                          </Badge>
                          <IconComponent className="h-5 w-5 text-slate-400" />
                        </div>
                        <h4 className="font-semibold text-slate-200 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                          {risk.riskCategory}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-500">Trend:</span>
                          <span className={`text-xs font-semibold ${getTrendColor(risk.trend)}`}>
                            {risk.trend}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </GlassPanel>

          {/* Economic Stress Composite */}
          <GlassPanel title="Economic Stress Composite Index" description="Cross-category economic stress assessment">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <Scale className="w-4 h-4 inline mr-2" />
                      Stress Component Breakdown
                    </CardTitle>
                    <CardDescription>Weighted contribution to composite score</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={data.economicStressCompositeIndex.map(s => ({
                        indicator: s.indicator,
                        score: parseFloat(s.score.split('/')[0]),
                        weight: parseFloat(s.weight),
                      }))}
                      xAxisKey="indicator"
                      bars={[
                        { dataKey: 'score', name: 'Score /10', color: CHART_COLORS.rose },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card border-amber-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <Activity className="w-4 h-4 inline mr-2" />
                      Composite Stress Score
                    </CardTitle>
                    <CardDescription>Overall economic stress assessment</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center">
                    <div className="text-6xl font-extrabold text-rose-400 mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {data.economicStressCompositeTotal.composite}
                    </div>
                    <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50 text-sm px-4 py-2">
                      {data.economicStressCompositeTotal.interpretation}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>

          {/* Geopolitical Context */}
          <GlassPanel title="Geopolitical Context (2026)" description="Regional factors impacting complaint volumes">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.geopoliticalContext.map((ctx, idx) => (
                <motion.div
                  key={ctx.factor}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`glass-card border p-4 ${ctx.relevance === 'CRITICAL' ? 'border-red-500/50' : ctx.relevance === 'HIGH' ? 'border-amber-500/50' : 'border-orange-500/50'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getSeverityColor(ctx.relevance)}>
                      {ctx.relevance}
                    </Badge>
                    <Globe className="h-4 w-4 text-slate-400" />
                  </div>
                  <h4 className="font-semibold text-slate-200 text-sm mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {ctx.factor}
                  </h4>
                  <p className="text-xs text-slate-400">{ctx.impact}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* KPI Metrics Tab */}
        <TabsContent value="metrics" className="space-y-6">
          {/* Complaint Volume Metrics */}
          <GlassPanel title="Complaint Volume Metrics" description="Official complaint statistics from government sources">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.complaintVolumeMetrics.map((metric, idx) => (
                  <motion.div
                    key={`${metric.metric}-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="glass-card border-slate-500/30 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getSeverityColor(metric.uaeRelevance)}>
                        {metric.uaeRelevance}
                      </Badge>
                      <span className="text-xs text-slate-500">{metric.yearPeriod}</span>
                    </div>
                    <p className="text-sm text-slate-300 mb-1">{metric.metric}</p>
                    <p className="text-xl font-bold text-platinum-100" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {metric.value}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Source: {metric.source}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassPanel>

          {/* Economic Stress Indicators */}
          <GlassPanel title="Economic Stress Indicators" description="Key economic metrics affecting residents">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.economicStressIndicators.map((metric, idx) => (
                  <motion.div
                    key={`${metric.metric}-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="glass-card border-amber-500/30 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getSeverityColor(metric.uaeRelevance)}>
                        {metric.uaeRelevance}
                      </Badge>
                      <DollarSign className="h-4 w-4 text-amber-400" />
                    </div>
                    <p className="text-sm text-slate-300 mb-1">{metric.metric}</p>
                    <p className="text-xl font-bold text-amber-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {metric.value}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{metric.period} • {metric.source}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassPanel>

          {/* Service Quality Metrics */}
          <GlassPanel title="Service Quality Metrics" description="Customer service and infrastructure performance">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.serviceQualityMetrics.map((metric, idx) => {
                  const iconMap: Record<string, React.ElementType> = {
                    '83 million': MessageSquare,
                    '10 million': Clock,
                    '75%': Wifi,
                    '62.78%': Wifi,
                    '78.98%': Wifi,
                    '35 hours': Car,
                    '4 out of 5': Car,
                    '10%': Car,
                  }
                  const IconComponent = iconMap[metric.value] || Activity
                  return (
                    <motion.div
                      key={`${metric.metric}-${idx}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.03 }}
                      className="glass-card border-orange-500/30 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">{metric.metric}</p>
                          <p className="text-lg font-bold text-orange-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                            {metric.value}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </GlassPanel>

          {/* Telecom Metrics */}
          <GlassPanel title="Telecom Sector Metrics" description="Telecommunications complaint and satisfaction data">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.telecomMetrics.map((metric, idx) => (
                  <motion.div
                    key={`${metric.metric}-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="glass-card border-cyan-500/30 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Wifi className="h-4 w-4 text-cyan-400" />
                      <Badge className={getSeverityColor(metric.uaeRelevance)}>
                        {metric.uaeRelevance}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-300 mb-1">{metric.metric}</p>
                    <p className="text-xl font-bold text-cyan-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {metric.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassPanel>

          {/* School Fee Metrics */}
          <GlassPanel title="School Fee Detailed Breakdown" description="Education cost analysis">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.schoolFeeMetrics.map((metric, idx) => (
                  <motion.div
                    key={`${metric.schoolLevel}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    className="glass-card border-indigo-500/30 p-4"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="h-5 w-5 text-indigo-400" />
                      <span className="text-xs text-slate-500">{metric.notes}</span>
                    </div>
                    <p className="text-sm text-slate-300 mb-1">{metric.schoolLevel}</p>
                    <p className="text-lg font-bold text-indigo-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {metric.annualCostUSD}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassPanel>

          {/* Legal Penalties */}
          <GlassPanel title="Legal Penalty Summary" description="Legal consequences for violations">
            <div className="space-y-4">
              {data.legalPenalties.map((penalty, idx) => (
                <motion.div
                  key={`${penalty.violationType}-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-card border-red-500/30 p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 text-red-400">
                      <Gavel className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-slate-200">{penalty.violationType}</h4>
                        <Badge variant="destructive" className="text-xs">
                          {penalty.governingLaw}
                        </Badge>
                      </div>
                      <p className="text-sm text-red-400">{penalty.penalty}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          {/* Sentiment Distribution Matrix */}
          <GlassPanel title="Sentiment Distribution Matrix" description="Sentiment breakdown by complaint category">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <ThumbsDown className="w-4 h-4 inline mr-2" />
                      Negative Sentiment by Category
                    </CardTitle>
                    <CardDescription>Percentage of negative sentiment per topic</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={sentimentChartData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'negative', name: 'Negative %', color: CHART_COLORS.rose },
                      ]}
                      height={350}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card border-slate-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <PieChartIcon className="w-4 h-4 inline mr-2" />
                      Sentiment Composition
                    </CardTitle>
                    <CardDescription>Overall sentiment distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={[
                        { name: 'Negative', value: 65, color: CHART_COLORS.rose },
                        { name: 'Neutral', value: 20, color: CHART_COLORS.platinum },
                        { name: 'Positive', value: 15, color: CHART_COLORS.emerald },
                      ]}
                      height={300}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>

          {/* Platform Sentiment */}
          <GlassPanel title="Sentiment by Platform" description="Complaint sentiment scores across platforms">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-cyan-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <Activity className="w-4 h-4 inline mr-2" />
                      Platform Sentiment Scores
                    </CardTitle>
                    <CardDescription>Sentiment scores from -100 to +100</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={platformChartData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'score', name: '|Sentiment|', color: CHART_COLORS.info },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card border-amber-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <Scale className="w-4 h-4 inline mr-2" />
                      Sentiment by Credibility Tier
                    </CardTitle>
                    <CardDescription>Average sentiment by source tier</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { tier: 'Tier 0 (Official)', sentiment: 20 },
                        { tier: 'Tier 1 (Media)', sentiment: -35 },
                        { tier: 'Tier 2 (Social)', sentiment: -72 },
                        { tier: 'Tier 3 (Professional)', sentiment: -45 },
                        { tier: 'Tier 4 (Unverified)', sentiment: -60 },
                      ]}
                      xAxisKey="tier"
                      bars={[
                        { dataKey: 'sentiment', name: 'Sentiment Score', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>

          {/* Trend Analysis */}
          <GlassPanel title="Trend Analysis (2024-2026)" description="Complaint category severity progression">
            <div className="space-y-6">
              <Card className="glass-card border-slate-500/30">
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <TrendingUp className="w-4 h-4 inline mr-2" />
                    Category Severity Progression
                  </CardTitle>
                  <CardDescription>1=Low, 2=Medium, 3=High, 4=Critical</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={trendChartData}
                    xAxisKey="category"
                    areas={[
                      { dataKey: '2024', name: '2024', color: CHART_COLORS.platinum },
                      { dataKey: '2025', name: '2025', color: CHART_COLORS.gold },
                      { dataKey: '2026', name: '2026', color: CHART_COLORS.rose },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entity Registry Tab */}
        <TabsContent value="entities" className="space-y-6">
          {/* Government Entities */}
          <GlassPanel title="Government Entities" description="Official complaint channels and their tier">
            <ScrollArea className="h-[400px]">
              <div className="space-y-3">
                {data.governmentEntities.map((entity, idx) => (
                  <motion.div
                    key={`${entity.entity}-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="glass-card border-slate-500/30 p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-denim-500/20 text-denim-400">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-slate-200">{entity.entity}</h4>
                          <Badge variant="outline" className="text-xs">
                            Tier {entity.tier}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                          <Badge variant="secondary" className="text-xs">
                            {entity.category}
                          </Badge>
                          <span>Role: {entity.role}</span>
                        </div>
                        <p className="text-xs text-cyan-400 mt-2">
                          <Phone className="w-3 h-3 inline mr-1" />
                          {entity.complaintChannel}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>

          {/* Telecom, Banking, Schools */}
          <div className="grid gap-6 lg:grid-cols-3">
            <GlassPanel title="Telecom Entities" description="Telecom operators and complaint volumes">
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {data.telecomEntities.map((entity, idx) => (
                    <motion.div
                      key={`${entity.entity}-${idx}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-cyan-500/30 p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-200">{entity.entity}</h4>
                        <Wifi className="h-4 w-4 text-cyan-400" />
                      </div>
                      <p className="text-xs text-slate-400">{entity.type}</p>
                      <p className="text-xs text-slate-500">Market: {entity.marketPosition}</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        Complaint Volume: {entity.complaintVolume}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            <GlassPanel title="Banking/Financial Entities" description="Financial institutions and notable issues">
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {data.bankingEntities.map((entity, idx) => (
                    <motion.div
                      key={`${entity.entity}-${idx}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-amber-500/30 p-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Banknote className="h-5 w-5 text-amber-400" />
                        <h4 className="font-semibold text-slate-200">{entity.entity}</h4>
                      </div>
                      <p className="text-xs text-slate-400">{entity.type}</p>
                      <p className="text-xs text-red-400 mt-2">{entity.notableIssue}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            <GlassPanel title="School Operators" description="Education providers and fee ranges">
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {data.schoolOperators.map((entity, idx) => (
                    <motion.div
                      key={`${entity.entity}-${idx}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-indigo-500/30 p-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="h-5 w-5 text-indigo-400" />
                        <h4 className="font-semibold text-slate-200">{entity.entity}</h4>
                      </div>
                      <p className="text-xs text-slate-400">{entity.type}</p>
                      <p className="text-xs text-indigo-400 mt-2">{entity.feeRange}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* Legal Framework Tab */}
        <TabsContent value="legal" className="space-y-6">
          {/* Employment Law */}
          <GlassPanel title="Employment Law (Federal Decree Law No. 33 of 2021)" description="Legal protections for employees">
            <div className="space-y-4">
              {data.employmentLawProvisions.map((provision, idx) => (
                <motion.div
                  key={`${provision.article}-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-card border-denim-500/30 p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-denim-500/20 text-denim-400">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="text-xs">
                          {provision.article}
                        </Badge>
                        {provision.penalty && (
                          <Badge variant="destructive" className="text-xs">
                            {provision.penalty}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-300">{provision.provision}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Consumer Protection */}
          <GlassPanel title="Consumer Protection (Federal Decree Law No. 5 of 2023)" description="Consumer rights and penalties">
            <div className="space-y-4">
              {data.consumerProtectionViolations.map((violation, idx) => (
                <motion.div
                  key={`${violation.violation}-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-card border-rose-500/30 p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500/20 text-rose-400">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-300 mb-1">{violation.violation}</p>
                      <Badge variant="destructive" className="text-xs">
                        {violation.penalty}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Landlord-Tenant Law */}
          <GlassPanel title="Landlord-Tenant Law (Law No. 26 of 2007)" description="Tenancy regulations and rights">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.landlordTenantProvisions.map((provision, idx) => (
                  <motion.div
                    key={`${provision.article}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    className="glass-card border-emerald-500/30 p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Home className="h-4 w-4 text-emerald-400" />
                      <Badge variant="outline" className="text-xs">
                        {provision.article}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-300">{provision.provision}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassPanel>

          {/* Complaint Mechanism Effectiveness */}
          <GlassPanel title="Complaint Mechanism Effectiveness" description="Assessment of official complaint channels">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.complaintMechanisms.map((mechanism, idx) => (
                  <motion.div
                    key={`${mechanism.mechanism}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-card border-slate-500/30 p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-slate-200 text-sm">{mechanism.mechanism}</h4>
                      <Badge className={
                        mechanism.effectiveness === 'HIGH' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                        mechanism.effectiveness === 'MEDIUM' ? 'bg-amber-500/20 text-amber-400 border-amber-500/50' :
                        'bg-red-500/20 text-red-400 border-red-500/50'
                      }>
                        {mechanism.effectiveness}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Accessibility:</span>
                        <span className="text-slate-300">{mechanism.accessibility}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Response Time:</span>
                        <span className="text-slate-300">{mechanism.responseTime}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Findings Tab */}
        <TabsContent value="findings" className="space-y-6">
          <GlassPanel title="Key Findings by Category" description="Critical complaint categories and their characteristics">
            <div className="space-y-6">
              {data.keyFindingsByCategory.map((finding, idx) => (
                <motion.div
                  key={finding.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`glass-card border p-6 ${finding.uaeRelevance === 'CRITICAL' ? 'border-red-500/50' : 'border-amber-500/50'}`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.05 + 0.2 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${finding.uaeRelevance === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}
                    >
                      <AlertTriangle className="h-6 w-6" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg text-slate-200" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                          {finding.category}
                        </h4>
                        <Badge className={getSeverityColor(finding.uaeRelevance)}>
                          {finding.uaeRelevance}
                        </Badge>
                      </div>
                      <div className="space-y-2 mb-3">
                        {finding.coverageThemes.map((theme, i) => (
                          <p key={i} className="text-sm text-slate-400 flex items-start gap-2">
                            <XCircle className="w-3 h-3 text-red-400 mt-1 flex-shrink-0" />
                            {theme}
                          </p>
                        ))}
                      </div>
                      {finding.keyStatistics.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-700">
                          {finding.keyStatistics.map((stat, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {stat.metric}: <span className="text-cyan-400 ml-1">{stat.value}</span>
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Cross-Category Observations */}
          <GlassPanel title="Cross-Category Observations" description="Key patterns across complaint categories">
            <div className="space-y-3">
              {data.crossCategoryObservations.map((observation, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className="glass-card border-slate-500/30 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-slate-300">{observation}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* Relevance Issue Classification Chart */}
          <GlassPanel title="UAE Relevance by Issue Category" description="Population impact and severity">
            <div className="space-y-6">
              <Card className="glass-card border-slate-500/30">
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Users className="w-4 h-4 inline mr-2" />
                    Issue Relevance vs Population Impact
                  </CardTitle>
                  <CardDescription>Categorized by UAE relevance level</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={relevanceChartData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'relevance', name: 'Relevance (1-4)', color: CHART_COLORS.rose },
                    ]}
                    height={400}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Trends & Analysis Tab */}
        <TabsContent value="trends" className="space-y-6">
          {/* Quantitative Data Registry */}
          <GlassPanel title="Quantitative Data Registry" description="All extracted statistics (ID-indexed)">
            <ScrollArea className="h-[500px]">
              <div className="space-y-2">
                {data.quantitativeDataRegistry.map((stat, idx) => (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.01 }}
                    className="glass-card border-slate-500/30 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs font-mono">
                          {stat.id}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {stat.category}
                        </Badge>
                        <span className="text-sm text-slate-300">{stat.metric}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-cyan-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                          {stat.value}
                        </span>
                        <span className="text-xs text-slate-500">{stat.unit}</span>
                        <Badge variant="outline" className="text-xs">
                          {stat.source} • {stat.year}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>

          {/* Atomic Queries */}
          <GlassPanel title="Research Queries Executed" description="Micro-queries used to extract complaint data">
            <ScrollArea className="h-[400px]">
              <div className="space-y-3">
                {data.atomicQueries.map((query, idx) => (
                  <motion.div
                    key={`${query.queryCategory}-${idx}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.02 }}
                    className="glass-card border-cyan-500/30 p-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {query.queryCategory}
                      </Badge>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 text-xs">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {query.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-400 font-mono break-all">{query.query}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>

          {/* Source Reliability */}
          <GlassPanel title="Source Reliability Assessment" description="Credibility scoring by source tier">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.sourceReliability.slice(0, 12).map((source, idx) => (
                  <motion.div
                    key={`${source.source}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    className="glass-card border-slate-500/30 p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-200 text-sm">{source.source}</h4>
                      <Badge variant="outline" className="text-xs">
                        Tier {source.tier}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Reliability:</span>
                        <span className={source.reliability === '100%' ? 'text-emerald-400' : 'text-slate-300'}>
                          {source.reliability}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Freshness:</span>
                        <span className="text-slate-300">{source.freshness}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Coverage:</span>
                        <span className="text-slate-300">{source.coverage}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
