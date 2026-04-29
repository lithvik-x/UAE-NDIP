// @ts-nocheck
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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  TrendingUp,
  Users,
  Zap,
  Globe,
  Building,
  Landmark,
  Leaf,
  GraduationCap,
  Award,
  Database,
  FileText,
  Target,
  Scale,
  BarChart3,
  PieChart as PieChartIcon,
  MapPin,
  Flag,
  CheckCircle,
  ExternalLink,
  Factory,
  Plane,
  Cpu,
  Sun,
  Droplets,
  Wind,
  Atom,
} from 'lucide-react'
import {
  useNeutralData,
} from '@/lib/data-loader/sentiment-data'

// Animation variants
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

export default function NeutralSentimentPage() {
  const data = useNeutralData()
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null)

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Neutral/Factual data...</div>
      </div>
    )
  }

  // Calculate summary metrics
  const totalDataPoints = data.overview.totalDataPoints
  const criticalRelevanceCount = data.uaeRelevanceAssessment.filter(r => r.relevance === 'Critical').length
  const tier0Sources = data.sourceCredibilityMatrix.filter(s => s.tier === 0).length

  // Chart data preparation
  const populationEmirateChart = data.populationByEmirate.map(e => ({
    name: e.emirate,
    value: e.population,
    percent: e.percentOfTotal,
  }))

  const ageDistributionChart = data.ageDistribution.map(a => ({
    name: a.ageGroup,
    value: a.population,
    percent: a.percentOfTotal,
  }))

  const gdpGrowthChart = [
    { year: '2022', growth: 9.3 },
    { year: '2023', growth: 3.6 },
    { year: '2024', growth: 4.0 },
    { year: 'Q1-2024', growth: 3.3 },
    { year: 'Q2-2025', growth: 3.8 },
    { year: 'Q3-2025', growth: 7.7 },
  ]

  const budgetAllocationChart = data.budgetAllocations.map(b => ({
    name: b.sector,
    value: b.percentOfBudget,
  }))

  const dataCompletenessChart = data.dataCompleteness.map(d => ({
    name: d.category,
    completeness: parseInt(d.completeness),
    dataPoints: d.dataPoints,
  }))

  const rankingChart = data.globalRankings.slice(0, 6).map(r => ({
    name: r.index.length > 20 ? r.index.substring(0, 20) + '...' : r.index,
    ranking: parseInt(r.ranking),
  }))

  const sourceTierDistribution = [
    { name: 'Tier 0 (Official)', value: data.sourceCredibilityMatrix.filter(s => s.tier === 0).length, color: CHART_COLORS.emerald },
    { name: 'Tier 1 (Gov Secondary)', value: data.sourceCredibilityMatrix.filter(s => s.tier === 1).length, color: CHART_COLORS.teal },
    { name: 'Tier 2 (Trusted)', value: data.sourceCredibilityMatrix.filter(s => s.tier === 2).length, color: CHART_COLORS.denim },
    { name: 'Tier 3 (Media)', value: data.sourceCredibilityMatrix.filter(s => s.tier === 3).length, color: CHART_COLORS.indigo },
  ]

  const expatriateNationalityChart = data.expatriateNationalities.slice(0, 6).map(n => ({
    name: n.nationality,
    value: n.population,
    percent: n.percentOfTotal,
  }))

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
            <Badge variant="outline" className="mb-2 bg-denim-500/20 text-denim-400 border-denim-500/50">
              <FileText className="w-3 h-3 mr-1" />
              NEUTRAL / FACTUAL
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold gradient-text-denim"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Neutral/Factual Analysis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-slate-400"
          >
            {totalDataPoints}+ data points across {data.overview.totalCategories} categories from {data.overview.totalSources} sources
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <Button variant="outline" className="gap-2 border-denim-500/50 text-denim-400 hover:bg-denim-500/10">
            <Database className="h-4 w-4" />
            View Sources
          </Button>
          <Button className="bg-gradient-denim hover:opacity-90 text-navy-950 gap-2">
            <BarChart3 className="h-4 w-4" />
            Export Data
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
            title="Data Points"
            value={`${totalDataPoints}+`}
            icon={<Database className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Categories"
            value={data.overview.totalCategories.toString()}
            icon={<FileText className="h-6 w-6" />}
            gradient="teal"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Critical Topics"
            value={criticalRelevanceCount.toString()}
            icon={<Target className="h-6 w-6" />}
            gradient="indigo"
            status="warning"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Tier-0 Sources"
            value={tier0Sources.toString()}
            icon={<CheckCircle className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="population">Population</TabsTrigger>
          <TabsTrigger value="economics">Economics</TabsTrigger>
          <TabsTrigger value="government">Government</TabsTrigger>
          <TabsTrigger value="statements">Statements</TabsTrigger>
          <TabsTrigger value="climate">Climate</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Data Overview" description="Summary of neutral/factual data extracted">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.Card
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-denim-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <FileText className="w-4 h-4 inline mr-2" />
                      Data Completeness
                    </CardTitle>
                    <CardDescription>Completeness by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={dataCompletenessChart}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'completeness', name: 'Completeness %', color: CHART_COLORS.denim },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.Card>

                <motion.Card
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-teal-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <Scale className="w-4 h-4 inline mr-2" />
                      Source Tier Distribution
                    </CardTitle>
                    <CardDescription>Credibility tier breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sourceTierDistribution}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </motion.Card>
              </div>

              {/* Relevance Assessment */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-indigo-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Target className="w-4 h-4 inline mr-2" />
                    UAE Relevance Assessment
                  </CardTitle>
                  <CardDescription>Priority topics by relevance level</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {data.uaeRelevanceAssessment.map((item, idx) => (
                      <motion.div
                        key={item.topic}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`glass-card border p-3 ${
                          item.relevance === 'Critical' ? 'border-emerald-500/50' :
                          item.relevance === 'High' ? 'border-teal-500/50' :
                          'border-indigo-500/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={
                            item.relevance === 'Critical' ? 'bg-emerald-500/20 text-emerald-400' :
                            item.relevance === 'High' ? 'bg-teal-500/20 text-teal-400' :
                            'bg-indigo-500/20 text-indigo-400'
                          }>
                            {item.relevance}
                          </Badge>
                          <span className="text-xs text-slate-500">{item.priority}</span>
                        </div>
                        <p className="text-sm text-slate-200">{item.topic}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Population Tab */}
        <TabsContent value="population" className="space-y-6">
          <GlassPanel title="Population Statistics" description="UAE demographic data 2024-2026">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.Card
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-denim-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <Users className="w-4 h-4 inline mr-2" />
                      Population by Emirate (2026)
                    </CardTitle>
                    <CardDescription>Distribution across emirates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={populationEmirateChart}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </motion.Card>

                <motion.Card
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-teal-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <Globe className="w-4 h-4 inline mr-2" />
                      Expatriate Nationalities
                    </CardTitle>
                    <CardDescription>Top 6 expatriate populations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={expatriateNationalityChart}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Population', color: CHART_COLORS.teal },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.Card>
              </div>

              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-indigo-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <TrendingUp className="w-4 h-4 inline mr-2" />
                    Population Growth Trend (Historical)
                  </CardTitle>
                  <CardDescription>Historical population data 1980-2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={data.populationGrowthHistorical.map((p, i) => ({
                      year: p.year,
                      population: parseFloat(p.population.replace(/[^\d.]/g, '')),
                      growthRate: p.growthRate === '—' ? 0 : parseFloat(p.growthRate.replace(/[^\d.]/g, '')),
                    }))}
                    xAxisKey="year"
                    areas={[
                      { dataKey: 'population', name: 'Population (millions)', color: CHART_COLORS.denim },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </motion.Card>

              {/* Age Distribution */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-purple-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Users className="w-4 h-4 inline mr-2" />
                    Age Distribution (2026)
                  </CardTitle>
                  <CardDescription>Population by age group</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={ageDistributionChart}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'percent', name: '% of Total', color: CHART_COLORS.purple },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </motion.Card>

              {/* Key Indicators */}
              <GlassPanel title="Key Demographic Indicators" description="Core demographic metrics">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {data.keyDemographicIndicators.map((indicator, idx) => (
                    <motion.div
                      key={indicator.indicator}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-slate-500/30 p-4 text-center"
                    >
                      <p className="text-xs text-slate-500 mb-1">{indicator.indicator}</p>
                      <p className="text-xl font-bold text-denim-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {indicator.value}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">{indicator.source}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>

              {/* Urban/Rural/Religion */}
              <GlassPanel title="Urban/Rural & Religion Distribution" description="Demographic breakdown">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {data.urbanRuralReligion.map((item, idx) => (
                    <motion.div
                      key={item.category}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-slate-500/30 p-4"
                    >
                      <p className="text-sm text-slate-400 mb-1">{item.category}</p>
                      <p className="text-lg font-bold text-slate-200" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {item.value}
                      </p>
                      <p className="text-sm text-denim-400">{item.percent}%</p>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Economics Tab */}
        <TabsContent value="economics" className="space-y-6">
          <GlassPanel title="Economic Statistics" description="GDP, trade, and economic indicators">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.Card
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-emerald-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <TrendingUp className="w-4 h-4 inline mr-2" />
                      GDP Growth Trend
                    </CardTitle>
                    <CardDescription>Abu Dhabi GDP performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={gdpGrowthChart}
                      xAxisKey="year"
                      lines={[
                        { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.Card>

                <motion.Card
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-teal-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <Building className="w-4 h-4 inline mr-2" />
                      Abu Dhabi GDP Performance
                    </CardTitle>
                    <CardDescription>Quarterly GDP data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {data.abuDhabiGDPPerformance.map((item, idx) => (
                          <motion.div
                            key={item.period}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card border-teal-500/30 p-3"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-slate-200">{item.period}</span>
                              <Badge variant="outline" className="text-teal-400 border-teal-500/50">
                                {item.growth}
                              </Badge>
                            </div>
                            {item.gdpValue && (
                              <p className="text-xs text-slate-400">{item.gdpValue}</p>
                            )}
                            {item.nonOilGrowth && (
                              <p className="text-xs text-emerald-400">Non-oil: {item.nonOilGrowth}</p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.Card>
              </div>

              {/* GDP KPIs */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-denim-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Zap className="w-4 h-4 inline mr-2" />
                    Key GDP Metrics
                  </CardTitle>
                  <CardDescription>Economic performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {data.gdpKPIs.map((kpi, idx) => (
                      <motion.div
                        key={kpi.kpi}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-card border-denim-500/30 p-4"
                      >
                        <p className="text-xs text-slate-500 mb-1">{kpi.kpi}</p>
                        <p className="text-xl font-bold text-denim-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                          {kpi.value}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-500">{kpi.year}</span>
                          {kpi.yoyChange && (
                            <Badge variant="outline" className="text-xs">
                              {kpi.yoyChange}
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.Card>

              {/* FDI & Trade */}
              <GlassPanel title="FDI & Trade Metrics" description="Foreign investment and trade data">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {data.fdiTradeMetrics.map((metric, idx) => (
                    <motion.div
                      key={metric.metric}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-emerald-500/30 p-4"
                    >
                      <p className="text-xs text-slate-500 mb-1">{metric.metric}</p>
                      <p className="text-lg font-bold text-emerald-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {metric.value}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">{metric.source}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>

              {/* Inflation & Employment */}
              <GlassPanel title="Inflation & Employment" description="Labor market and price statistics">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {data.inflationEmployment.map((metric, idx) => (
                    <motion.div
                      key={metric.metric}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-teal-500/30 p-4"
                    >
                      <p className="text-xs text-slate-500 mb-1">{metric.metric}</p>
                      <p className="text-lg font-bold text-teal-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {metric.value}
                      </p>
                      <p className="text-xs text-slate-600 mt-1">{metric.year}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Government Tab */}
        <TabsContent value="government" className="space-y-6">
          <GlassPanel title="Government Budget & Finance" description="Federal budget 2025 allocations">
            <div className="space-y-6">
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-denim-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Landmark className="w-4 h-4 inline mr-2" />
                    Budget Allocation
                  </CardTitle>
                  <CardDescription>2025 Federal Budget distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={budgetAllocationChart}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </motion.Card>

              {/* Budget KPIs */}
              <GlassPanel title="Federal Budget 2025" description="Key budget metrics">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {data.federalBudget2025.map((kpi, idx) => (
                    <motion.div
                      key={kpi.kpi}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-denim-500/30 p-4"
                    >
                      <p className="text-xs text-slate-500 mb-1">{kpi.kpi}</p>
                      <p className="text-lg font-bold text-denim-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {kpi.value}
                      </p>
                      {kpi.yoyChange && (
                        <Badge variant="outline" className="text-xs mt-1">
                          {kpi.yoyChange}
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>

              {/* Budget Allocation Table */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-teal-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <BarChart3 className="w-4 h-4 inline mr-2" />
                    Budget Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.budgetAllocations.map((allocation, idx) => (
                      <motion.div
                        key={allocation.sector}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between p-3 glass-card border-slate-500/30"
                      >
                        <span className="text-sm text-slate-200">{allocation.sector}</span>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-denim-400">
                            {allocation.percentOfBudget}%
                          </Badge>
                          <span className="text-sm text-slate-400">{allocation.aedBillion}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.Card>

              {/* Official Entities */}
              <GlassPanel title="Government Entities" description="Key government organizations">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {data.governmentEntities.map((entity, idx) => (
                    <motion.div
                      key={entity.entity}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-slate-500/30 p-3"
                    >
                      <p className="text-sm font-medium text-slate-200">{entity.entity}</p>
                      <p className="text-xs text-denim-400 mt-1">{entity.acronym}</p>
                      <p className="text-xs text-slate-500 mt-1">{entity.role}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Statements Tab */}
        <TabsContent value="statements" className="space-y-6">
          <GlassPanel title="Official Announcements & Statements" description="Key official communications">
            <div className="space-y-6">
              {/* UAE-New Zealand Joint Statement */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-emerald-500/30"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="outline" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-2">
                        January 2025
                      </Badge>
                      <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        UAE-New Zealand Joint Statement
                      </CardTitle>
                      <CardDescription>{data.uaeNewZealandJointStatement.source}</CardDescription>
                    </div>
                    <a href={data.uaeNewZealandJointStatement.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 text-slate-400 hover:text-emerald-400" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 mb-2">Agreements Signed</p>
                      <div className="flex flex-wrap gap-2">
                        {data.uaeNewZealandJointStatement.agreements.map((ag, idx) => (
                          <Badge key={idx} variant="outline" className="text-emerald-400 border-emerald-500/50">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {ag.agreement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-2">Key Commitments</p>
                      <div className="space-y-2">
                        {data.uaeNewZealandJointStatement.commitments.map((c, idx) => (
                          <div key={idx} className="glass-card border-emerald-500/20 p-2">
                            <p className="text-sm text-slate-200">{c.commitment}</p>
                            {c.amount && <p className="text-xs text-emerald-400">{c.amount}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </motion.Card>

              {/* Iran-Israel Ceasefire */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-teal-500/30"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="outline" className="bg-teal-500/20 text-teal-400 border-teal-500/50 mb-2">
                        June 2025
                      </Badge>
                      <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {data.uaeIranIsraelCeasefire.title}
                      </CardTitle>
                      <CardDescription>{data.uaeIranIsraelCeasefire.source}</CardDescription>
                    </div>
                    <a href={data.uaeIranIsraelCeasefire.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 text-slate-400 hover:text-teal-400" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="border-l-4 border-teal-500 pl-4 italic text-slate-300">
                    {data.uaeIranIsraelCeasefire.fullText}
                  </blockquote>
                </CardContent>
              </motion.Card>

              {/* US Investment Commitment */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-indigo-500/30"
              >
                <CardHeader>
                  <Badge variant="outline" className="bg-indigo-500/20 text-indigo-400 border-indigo-500/50 mb-2">
                    March 2025
                  </Badge>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {data.uaeUSInvestmentCommitment.title}
                  </CardTitle>
                  <CardDescription>{data.uaeUSInvestmentCommitment.sources.join(', ')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="glass-card border-indigo-500/30 p-4">
                      <p className="text-xs text-slate-500 mb-2">Framework</p>
                      <div className="grid gap-2 sm:grid-cols-3">
                        <div>
                          <p className="text-xs text-slate-400">Duration</p>
                          <p className="text-sm text-indigo-400">{data.uaeUSInvestmentCommitment.framework.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">Total Commitment</p>
                          <p className="text-sm text-indigo-400 font-bold">{data.uaeUSInvestmentCommitment.framework.totalCommitment}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-400">Sectors</p>
                          <p className="text-sm text-indigo-400">{data.uaeUSInvestmentCommitment.framework.targetSectors}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-2">Specific Deals</p>
                      <div className="space-y-2">
                        {data.uaeUSInvestmentCommitment.deals.map((deal, idx) => (
                          <div key={idx} className="glass-card border-indigo-500/20 p-3">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-slate-200">{deal.entity}</p>
                              {deal.value && (
                                <Badge variant="outline" className="text-indigo-400">
                                  {deal.value}
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 mt-1">{deal.project}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </motion.Card>

              {/* Humanitarian Statement */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-purple-500/30"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/50 mb-2">
                        September 2025
                      </Badge>
                      <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {data.uaeHumanitarianStatement.title}
                      </CardTitle>
                      <CardDescription>{data.uaeHumanitarianStatement.source}</CardDescription>
                    </div>
                    <a href={data.uaeHumanitarianStatement.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 text-slate-400 hover:text-purple-400" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="border-l-4 border-purple-500 pl-4 italic text-slate-300">
                    {data.uaeHumanitarianStatement.fullText}
                  </blockquote>
                </CardContent>
              </motion.Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Climate Tab */}
        <TabsContent value="climate" className="space-y-6">
          <GlassPanel title="Climate & Environment Statistics" description="UAE Climate Law and emissions targets">
            <div className="space-y-6">
              {/* Climate Law Overview */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-emerald-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Leaf className="w-4 h-4 inline mr-2" />
                    UAE Climate Law (Federal Decree-Law No. 11 of 2024)
                  </CardTitle>
                  <CardDescription>First country in MENA to enforce corporate climate accountability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {data.uaeClimateLawOverview.map((item, idx) => (
                      <div key={idx} className="glass-card border-emerald-500/30 p-3">
                        <p className="text-xs text-slate-500 mb-1">{item.field}</p>
                        <p className="text-sm text-emerald-400 font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </motion.Card>

              {/* Core Obligations */}
              <GlassPanel title="Four Core Obligations" description="Requirements for large emitters">
                <div className="grid gap-4 sm:grid-cols-2">
                  {data.coreObligations.map((obligation, idx) => (
                    <motion.div
                      key={obligation.number}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-card border-emerald-500/30 p-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                          {obligation.number}
                        </div>
                        <span className="font-medium text-slate-200">{obligation.obligation}</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-1">{obligation.requirement}</p>
                      <p className="text-xs text-emerald-400">{obligation.technicalStandard}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>

              {/* Penalties */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-rose-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Leaf className="w-4 h-4 inline mr-2" />
                    Penalties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.penalties.map((penalty, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 glass-card border-rose-500/20">
                        <span className="text-sm text-slate-300">{penalty.violation}</span>
                        <Badge variant="destructive">{penalty.fine}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </motion.Card>

              {/* Emissions Targets */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-teal-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Wind className="w-4 h-4 inline mr-2" />
                    Emissions Targets
                  </CardTitle>
                  <CardDescription>UAE climate commitments</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={data.emissionTargets.map(t => ({
                      name: t.target,
                      value: parseInt(t.value),
                      timeline: t.timeline,
                    }))}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Target %', color: CHART_COLORS.teal },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </motion.Card>

              {/* Scope of Application */}
              <GlassPanel title="Scope of Application" description="Entities covered by the Climate Law">
                <div className="flex flex-wrap gap-2">
                  {data.scopeOfApplication.map((entity, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Badge variant="outline" className="text-emerald-400 border-emerald-500/50">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {entity}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Education Tab */}
        <TabsContent value="education" className="space-y-6">
          <GlassPanel title="Education Statistics" description="Ministry of Education 2024-2025 Academic Year">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.Card
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-purple-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <GraduationCap className="w-4 h-4 inline mr-2" />
                      School Infrastructure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {data.educationKPIs.slice(0, 3).map((kpi, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 glass-card border-purple-500/20">
                          <span className="text-sm text-slate-300">{kpi.kpi}</span>
                          <span className="text-lg font-bold text-purple-400">{kpi.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </motion.Card>

                <motion.Card
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-indigo-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <FileText className="w-4 h-4 inline mr-2" />
                      Educational Materials
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {data.educationKPIs.slice(3).map((kpi, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 glass-card border-indigo-500/20">
                          <span className="text-sm text-slate-300">{kpi.kpi}</span>
                          <span className="text-lg font-bold text-indigo-400">{kpi.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </motion.Card>
              </div>

              {/* Assessment Structure */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-denim-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <BarChart3 className="w-4 h-4 inline mr-2" />
                    Assessment Structure (Cycles 2 & 3)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.assessmentStructure.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 glass-card border-slate-500/30">
                        <span className="text-sm text-slate-300">{item.component}</span>
                        <Badge variant="outline" className="text-denim-400">
                          {item.weight}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </motion.Card>

              {/* Key Officials */}
              <GlassPanel title="Key Officials" description="Ministry of Education leadership">
                <div className="grid gap-4 sm:grid-cols-2">
                  {data.educationOfficials.map((official, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-card border-purple-500/30 p-4"
                    >
                      <p className="text-xs text-slate-500 mb-1">{official.position}</p>
                      <p className="text-lg font-medium text-purple-400">{official.name}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Rankings Tab */}
        <TabsContent value="rankings" className="space-y-6">
          <GlassPanel title="Index Rankings & Development Indicators" description="UAE global rankings">
            <div className="space-y-6">
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-denim-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Award className="w-4 h-4 inline mr-2" />
                    Global Rankings
                  </CardTitle>
                  <CardDescription>UAE position in international indices</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={rankingChart}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'ranking', name: 'Global Rank', color: CHART_COLORS.denim },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </motion.Card>

              {/* All Rankings Table */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-teal-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Globe className="w-4 h-4 inline mr-2" />
                    All Index Rankings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {data.globalRankings.map((rank, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between p-3 glass-card border-slate-500/30"
                        >
                          <div className="flex-1">
                            <p className="text-sm text-slate-200">{rank.index}</p>
                            <p className="text-xs text-slate-500">{rank.year} {rank.totalCountries && `(${rank.totalCountries} countries)`}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="text-teal-400">
                              #{rank.ranking}
                            </Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </motion.Card>

              {/* BTI Governance Scores */}
              <GlassPanel title="BTI Governance Scores" description="Bertelsmann Transformation Index">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {data.btiGovernanceScores.map((score, idx) => (
                    <motion.div
                      key={score.indicator}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-card border-teal-500/30 p-4 text-center"
                    >
                      <p className="text-xs text-slate-500 mb-1">{score.indicator}</p>
                      <p className="text-2xl font-bold text-teal-400">{score.score}</p>
                      <p className="text-xs text-slate-500 mt-1">Rank: {score.rank}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>

              {/* Social Indicators */}
              <GlassPanel title="Social Indicators" description="Development metrics">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {data.socialIndicators.map((indicator, idx) => (
                    <motion.div
                      key={indicator.indicator}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-slate-500/30 p-3"
                    >
                      <p className="text-xs text-slate-500 mb-1">{indicator.indicator}</p>
                      <div className="flex items-baseline gap-2">
                        {indicator.male && (
                          <span className="text-sm text-denim-400">M: {indicator.male}</span>
                        )}
                        {indicator.female && (
                          <span className="text-sm text-purple-400">F: {indicator.female}</span>
                        )}
                        {!indicator.male && (
                          <span className="text-lg font-bold text-slate-200">{indicator.overall}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>

              {/* Gender Development */}
              <GlassPanel title="Gender Development" description="Gender equality metrics">
                <div className="grid gap-4 sm:grid-cols-3">
                  {data.genderDevelopment.map((item, idx) => (
                    <motion.div
                      key={item.index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-card border-purple-500/30 p-4"
                    >
                      <p className="text-xs text-slate-500 mb-1">{item.index}</p>
                      <p className="text-lg font-bold text-purple-400">{item.value}</p>
                      {item.rank && <p className="text-xs text-slate-500 mt-1">Rank: {item.rank}</p>}
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Roadmap Tab */}
        <TabsContent value="roadmap" className="space-y-6">
          <GlassPanel title="UAE Future Roadmap" description="Short, medium, and long-term initiatives">
            <div className="space-y-6">
              {/* Short Term */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-emerald-500/30"
              >
                <CardHeader>
                  <Badge variant="outline" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 mb-2 w-fit">
                    2025-2030
                  </Badge>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Target className="w-4 h-4 inline mr-2" />
                    Short-Term Initiatives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {data.shortTermInitiatives.map((initiative, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card border-emerald-500/20 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-200">{initiative.initiative}</span>
                          <Badge variant="outline" className="text-emerald-400">{initiative.timeline}</Badge>
                        </div>
                        <p className="text-lg font-bold text-emerald-400">{initiative.target}</p>
                        {initiative.keyDetails && (
                          <p className="text-xs text-slate-400 mt-1">{initiative.keyDetails}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.Card>

              {/* Medium Term */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-teal-500/30"
              >
                <CardHeader>
                  <Badge variant="outline" className="bg-teal-500/20 text-teal-400 border-teal-500/50 mb-2 w-fit">
                    2030-2050
                  </Badge>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Zap className="w-4 h-4 inline mr-2" />
                    Medium-Term Initiatives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {data.mediumTermInitiatives.map((initiative, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-card border-teal-500/20 p-3"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-slate-300">{initiative.initiative}</span>
                        </div>
                        <p className="text-base font-bold text-teal-400">{initiative.target}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{initiative.timeline}</Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.Card>

              {/* Long Term */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-indigo-500/30"
              >
                <CardHeader>
                  <Badge variant="outline" className="bg-indigo-500/20 text-indigo-400 border-indigo-500/50 mb-2 w-fit">
                    2050+
                  </Badge>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Atom className="w-4 h-4 inline mr-2" />
                    Long-Term Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {data.longTermInitiatives.map((initiative, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card border-indigo-500/20 p-4"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                            <Atom className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-200">{initiative.initiative}</p>
                            <Badge variant="outline" className="text-xs mt-1">{initiative.timeline}</Badge>
                          </div>
                        </div>
                        <p className="text-lg font-bold text-indigo-400">{initiative.target}</p>
                        {initiative.keyDetails && (
                          <p className="text-xs text-slate-400 mt-1">{initiative.keyDetails}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Source Credibility Matrix" description="18 sources across 4 tiers">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.Card
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-emerald-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <PieChartIcon className="w-4 h-4 inline mr-2" />
                      Sources by Tier
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sourceTierDistribution}
                      height={250}
                      showLegend={true}
                    />
                  </CardContent>
                </motion.Card>

                <motion.Card
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-teal-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      <Scale className="w-4 h-4 inline mr-2" />
                      Tier Definitions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {data.tierDefinitions.map((tier, idx) => (
                        <div key={idx} className="glass-card border-slate-500/30 p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">
                              Tier {tier.tier}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-300">{tier.description}</p>
                          <p className="text-xs text-slate-500 mt-1">{tier.examples}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </motion.Card>
              </div>

              {/* All Sources */}
              <motion.Card
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-denim-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    <Database className="w-4 h-4 inline mr-2" />
                    All Sources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-2">
                      {data.sourceCredibilityMatrix.map((source, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className={`flex items-center justify-between p-3 glass-card border ${
                            source.tier === 0 ? 'border-emerald-500/50' :
                            source.tier === 1 ? 'border-teal-500/50' :
                            source.tier === 2 ? 'border-denim-500/50' :
                            'border-indigo-500/50'
                          }`}
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-slate-200">{source.source}</p>
                              <Badge variant="outline" className={`text-xs ${
                                source.tier === 0 ? 'text-emerald-400' :
                                source.tier === 1 ? 'text-teal-400' :
                                source.tier === 2 ? 'text-denim-400' :
                                'text-indigo-400'
                              }`}>
                                Tier {source.tier}
                              </Badge>
                            </div>
                            <p className="text-xs text-slate-500">{source.url}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="text-xs">
                              {source.dataPoints} data points
                            </Badge>
                            <p className="text-xs text-slate-500 mt-1">{source.status}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </motion.Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
