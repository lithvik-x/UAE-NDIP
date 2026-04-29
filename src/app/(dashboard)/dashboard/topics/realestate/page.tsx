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
  Building2,
  Home,
  DollarSign,
  Globe,
  Users,
  Shield,
  MapPin,
  Trees,
  HardHat,
  FlameKindling,
  Building,
  Car,
  ParkingCircle,
  AlertOctagon,
  Leaf,
  Train,
} from 'lucide-react'
import {
  realEstateData,
  executiveSummary,
  realEstateMarketOverview,
  propertyPricesTransactionData,
  bubbleRiskAssessment,
  moneyLaunderingVulnerabilities,
  laborConditionsModernSlavery,
  affordableHousingCrisis,
  gentrification,
  environmentalChallenges,
  dashboardDataTables,
  sentimentAnalysis,
  reportMetadata,
} from '@/lib/data/topics/real-estate-data'

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

// Bubble risk color helper
const getBubbleRiskColor = (risk: string) => {
  if (risk === 'High') return CHART_COLORS.rose
  if (risk === 'Moderate') return CHART_COLORS.gold
  return CHART_COLORS.emerald
}

// Sentiment color helper
const getSentimentColor = (sentiment: string) => {
  if (sentiment === 'Strong negative' || sentiment === 'Critical negative') return CHART_COLORS.rose
  if (sentiment === 'Positive' || sentiment === 'Strong positive') return CHART_COLORS.emerald
  if (sentiment === 'Improving') return CHART_COLORS.gold
  return CHART_COLORS.platinum
}

export default function RealEstatePage() {
  // Key metrics from dashboard data
  const marketKPIs = dashboardDataTables.realEstateMarketKPIs
  const affordabilityKPIs = dashboardDataTables.housingAffordabilityKPIs
  const laborKPIs = dashboardDataTables.laborSocialKPIs
  const environmentalKPIs = dashboardDataTables.environmentalKPIs
  const constructionKPIs = dashboardDataTables.constructionQualityKPIs

  // Sentiment distribution data
  const sentimentData = [
    { name: 'Negative', value: 55, color: CHART_COLORS.rose },
    { name: 'Positive', value: 25, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 20, color: CHART_COLORS.platinum },
  ]

  // Emotion distribution (simplified)
  const emotionData = [
    { name: 'Fear', value: 40, color: CHART_COLORS.rose },
    { name: 'Trust', value: 25, color: CHART_COLORS.navy },
    { name: 'Joy', value: 15, color: CHART_COLORS.gold },
    { name: 'Anticipation', value: 20, color: CHART_COLORS.emerald },
  ]

  // Price trend data
  const priceTrendData = [
    { quarter: 'Q1 2024', value: 1850 },
    { quarter: 'Q2 2024', value: 1920 },
    { quarter: 'Q3 2024', value: 1980 },
    { quarter: 'Q4 2024', value: 2062 },
    { quarter: 'Q1 2025', value: 2150 },
  ]

  // Transaction type data
  const transactionData = [
    { name: 'Off-Plan', value: 68, color: CHART_COLORS.gold },
    { name: 'Ready', value: 32, color: CHART_COLORS.navy },
  ]

  // Rental yield data
  const rentalYieldData = [
    { name: 'Apartments (7%)', value: 7, color: CHART_COLORS.emerald },
    { name: 'Villas (5%)', value: 5, color: CHART_COLORS.platinum },
  ]

  // Green space comparison
  const greenSpaceData = [
    { name: 'Dubai (2-3%)', value: 2.5, color: CHART_COLORS.rose },
    { name: 'NYC (27%)', value: 27, color: CHART_COLORS.emerald },
    { name: 'Mumbai (2.5%)', value: 2.5, color: CHART_COLORS.gold },
    { name: 'Shanghai (2.8%)', value: 2.8, color: CHART_COLORS.navy },
  ]

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
          <Badge variant="default" className="mb-2">P-SECTOR: REAL ESTATE</Badge>
          <h1 className="text-4xl font-extrabold gradient-text-gold">Real Estate & Urban Development</h1>
          <p className="mt-2 text-slate-400">
            {realEstateData.description}
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {reportMetadata?.reportCompiled || '2026-04-27'}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {reportMetadata?.urlsEnriched || '30+'} sources
            </span>
            <span className="flex items-center gap-1">
              <Crosshair className="h-4 w-4" />
              {reportMetadata?.queriesExecuted || '28'} queries
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Building2 className="h-4 w-4" />
            DLD Portal
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Home className="h-4 w-4" />
            Market Data
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Transaction Volume"
          value="AED 761B"
          previousValue="AED 559B"
          icon={<DollarSign className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Total Transactions"
          value="226K"
          previousValue="166K"
          icon={<Building2 className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Off-Plan Share"
          value="68%"
          previousValue="65%"
          icon={<MapPin className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="UBS Bubble Index"
          value="0.64"
          previousValue="0.58"
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="rose"
          status="critical"
        />
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'RE-1', name: 'Market Overview' },
            { id: 'RE-2', name: 'Bubble Risk' },
            { id: 'RE-3', name: 'Money Laundering' },
            { id: 'RE-4', name: 'Labor Conditions' },
            { id: 'RE-5', name: 'Affordability' },
            { id: 'RE-6', name: 'Gentrification' },
          ].map((area) => (
            <Badge key={area.id} variant="outline" className="border-gold/30 text-gold">
              {area.id} - {area.name}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* Alert Banner */}
      <motion.div variants={itemVariants} className={`rounded-xl border p-4 bg-slate-900/50 border-yellow-500/50`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-yellow-400" />
            <div>
              <p className="font-semibold text-slate-200">Bubble Risk Assessment: MODERATE (UBS 0.64)</p>
              <p className="text-sm text-slate-400">Fitch (May 2025) predicts double-digit price declines after years of boom</p>
            </div>
          </div>
          <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="market">Market Data</TabsTrigger>
          <TabsTrigger value="bubble">Bubble Risk</TabsTrigger>
          <TabsTrigger value="concerns">Critical Concerns</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Real Estate Market Overview"
            description="Key metrics and market performance indicators"
            badge="2024"
          >
            <div className="space-y-6">
              {/* Market KPIs */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {marketKPIs.slice(0, 4).map((kpi, idx) => (
                  <div key={idx} className="p-4 bg-slate-800/50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-gold">{kpi.current}</p>
                    <p className="text-sm text-slate-400 mt-1">{kpi.kpi}</p>
                    <p className="text-xs text-emerald-400 mt-1">{kpi.change}</p>
                  </div>
                ))}
              </div>

              {/* Sentiment Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-gold" />
                    Sentiment Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <PieChart
                      data={sentimentData}
                      height={200}
                      showLegend={true}
                      donut={true}
                    />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center p-2 bg-rose/20 rounded-lg">
                        <p className="text-lg font-bold text-rose">55%</p>
                        <p className="text-xs text-slate-400">Negative</p>
                      </div>
                      <div className="text-center p-2 bg-emerald/20 rounded-lg">
                        <p className="text-lg font-bold text-emerald">25%</p>
                        <p className="text-xs text-slate-400">Positive</p>
                      </div>
                      <div className="text-center p-2 bg-platinum/20 rounded-lg">
                        <p className="text-lg font-bold text-platinum">20%</p>
                        <p className="text-xs text-slate-400">Neutral</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Developers */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold" />
                    Key Developers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {realEstateMarketOverview.keyDevelopers.map((dev, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-200">{dev.developer}</p>
                          <p className="text-sm text-slate-400">{dev.notableProjects}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">{dev.focus}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rental Yields */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald" />
                    Rental Yields
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={rentalYieldData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Yield %', color: CHART_COLORS.emerald }]}
                    height={200}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Market Data Tab */}
        <TabsContent value="market" className="space-y-6">
          <GlassPanel
            title="Property Prices & Transactions"
            description="Transaction data and price trends"
            badge="2024"
          >
            <div className="space-y-6">
              {/* Price Trends */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-gold" />
                    Price Trends (AED per sq ft)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={priceTrendData}
                    xAxisKey="quarter"
                    areas={[{ dataKey: 'value', name: 'Price/sq ft', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Transaction Mix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-navy" />
                    Off-Plan vs Ready Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <PieChart
                      data={transactionData}
                      height={200}
                      showLegend={true}
                    />
                    <div className="space-y-3">
                      <div className="p-4 bg-gold/20 rounded-lg">
                        <p className="text-3xl font-bold text-gold">68%</p>
                        <p className="text-sm text-slate-400">Off-Plan (speculative)</p>
                      </div>
                      <div className="p-4 bg-navy/20 rounded-lg">
                        <p className="text-3xl font-bold text-navy">32%</p>
                        <p className="text-sm text-slate-400">Ready Properties</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Price Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Price Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {realEstateMarketOverview.priceMetrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-200">{metric.location}</p>
                          <p className="text-sm text-slate-400">{metric.priceMetric} - {metric.date}</p>
                        </div>
                        <p className="text-xl font-bold text-gold">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Notable Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {propertyPricesTransactionData.recentTransactions.map((tx, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-200">{tx.transaction}</p>
                            <p className="text-sm text-slate-400">{tx.details}</p>
                          </div>
                          <p className="text-lg font-bold text-gold">{tx.amount}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Bubble Risk Tab */}
        <TabsContent value="bubble" className="space-y-6">
          <GlassPanel
            title="Bubble Risk Assessment"
            description="Risk indicators and warning signs"
            badge="Critical"
          >
            <div className="space-y-6">
              {/* Risk Indicators */}
              <Card className="glass-card border-yellow-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-yellow-400">
                    <AlertTriangle className="h-5 w-5" />
                    Risk Indicators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {bubbleRiskAssessment.riskIndicators.map((risk, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-slate-200">{risk.indicator}</p>
                          <Badge
                            variant={risk.riskLevel === 'High' ? 'destructive' : risk.riskLevel === 'Moderate' ? 'warning' : 'outline'}
                            className="text-xs"
                          >
                            {risk.riskLevel}
                          </Badge>
                        </div>
                        <p className="text-2xl font-bold text-gold">{risk.value}</p>
                        <p className="text-xs text-slate-500 mt-1">Source: {risk.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Bubble Index Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Bubble Index Comparison (2024)</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={bubbleRiskAssessment.bubbleIndexComparison.map((city) => ({
                      name: city.city,
                      value: city.riskCategory === 'High' ? 1 : city.riskCategory === 'Moderate' ? 0.64 : 0.3,
                      color: getBubbleRiskColor(city.riskCategory),
                    }))}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Bubble Index', color: CHART_COLORS.gold }]}
                    height={200}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* 2009 Crash Comparison */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <AlertOctagon className="h-5 w-5" />
                    2009 Crash Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {bubbleRiskAssessment.crashComparison.map((comparison, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-slate-400 mb-1">{comparison.metric}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-2 bg-rose/10 rounded">
                            <p className="text-xs text-rose-400">2009 Crash</p>
                            <p className="font-medium text-slate-200">{comparison.year2009Crash}</p>
                          </div>
                          <div className="p-2 bg-yellow-500/10 rounded">
                            <p className="text-xs text-yellow-400">Current Concern</p>
                            <p className="font-medium text-slate-200">{comparison.currentConcern}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Warning Signs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Warning Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bubbleRiskAssessment.warningSigns.map((warning, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/50 rounded-lg">
                        <h4 className="font-semibold text-gold mb-2">{warning.category}</h4>
                        <div className="space-y-1">
                          {warning.items.map((item, i) => (
                            <p key={i} className="text-sm text-slate-300">• {item}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Critical Concerns Tab */}
        <TabsContent value="concerns" className="space-y-6">
          <GlassPanel
            title="Critical Concerns"
            description="Structural issues and vulnerabilities"
            badge="Critical"
          >
            <div className="space-y-6">
              {/* Money Laundering */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <Shield className="h-5 w-5" />
                    Money Laundering Vulnerabilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-4 bg-rose/10 border border-rose/30 rounded-lg text-center">
                        <p className="text-2xl font-bold text-rose">0.002%</p>
                        <p className="text-xs text-slate-400">Suspicious transaction reports</p>
                      </div>
                      <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-center">
                        <p className="text-2xl font-bold text-yellow-400">0</p>
                        <p className="text-xs text-slate-400">Questions asked by realtors</p>
                      </div>
                      <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-platinum">FATF</p>
                        <p className="text-xs text-slate-400">Removed Feb 2024</p>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <h4 className="font-semibold text-gold mb-2">Dubai Unlocked Investigation (May 2024)</h4>
                      <p className="text-sm text-slate-400">Data leak 2020-2022 revealed {moneyLaunderingVulnerabilities.sanctionedPropertyOwners.length}+ sanctioned property owners including crime figures and corrupt officials.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Labor Conditions */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <Users className="h-5 w-5" />
                    Labor Conditions & Modern Slavery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="p-4 bg-rose/10 border border-rose/30 rounded-lg text-center">
                        <p className="text-3xl font-bold text-rose">132K</p>
                        <p className="text-xs text-slate-400">In Modern Slavery</p>
                        <p className="text-xs text-rose-400">7th highest globally</p>
                      </div>
                      <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-3xl font-bold text-platinum">90%</p>
                        <p className="text-xs text-slate-400">Non-citizen workforce</p>
                      </div>
                      <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-3xl font-bold text-platinum">13.4</p>
                        <p className="text-xs text-slate-400">Per 1,000 prevalence</p>
                      </div>
                      <div className="p-4 bg-slate-800/50 rounded-lg text-center">
                        <p className="text-3xl font-bold text-platinum">8</p>
                        <p className="text-xs text-slate-400">Per room occupancy</p>
                      </div>
                    </div>
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                      <p className="text-sm text-yellow-300">Kafala System: Work visa sponsorship ties workers to employers. Passport confiscation documented. 2016 reforms partially protected low-paid migrants.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Affordability Crisis */}
              <Card className="glass-card border-yellow-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-yellow-400">
                    <Home className="h-5 w-5" />
                    Affordable Housing Crisis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {affordabilityKPIs.filter(k => k.status !== 'Adequate').map((kpi, idx) => (
                        <div key={idx} className="p-4 bg-slate-800/50 rounded-lg text-center">
                          <p className="text-2xl font-bold text-yellow-400">{kpi.value}</p>
                          <p className="text-xs text-slate-400">{kpi.kpi}</p>
                          <Badge variant="destructive" className="text-xs mt-1">{kpi.status}</Badge>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg">
                      <p className="text-sm text-slate-400">Max affordable sale price: <span className="text-gold font-bold">AED 790,000</span> based on income ratios, yet market prices far exceed this for most workers.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gentrification */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-rose" />
                    Gentrification - Karama Case Study
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-800/50 rounded-lg">
                        <p className="text-sm text-slate-400">Pre-Transformation Rent</p>
                        <p className="text-xl font-bold text-platinum">$8,200-$10,500/year</p>
                      </div>
                      <div className="p-4 bg-gold/20 rounded-lg">
                        <p className="text-sm text-gold">Post-Transformation Rent</p>
                        <p className="text-xl font-bold text-gold">$19,000-$25,000/year</p>
                      </div>
                    </div>
                    <div className="p-4 bg-rose/10 border border-rose/30 rounded-lg">
                      <p className="text-sm text-rose-300">+42% rent increase above old building rates. Dubai ranked 2nd globally for gentrification displacement.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Environmental */}
              <Card className="glass-card border-emerald-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                    <Trees className="h-5 w-5" />
                    Environmental Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <BarChart
                      data={greenSpaceData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Green Space %', color: CHART_COLORS.emerald }]}
                      height={200}
                      showGrid={true}
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {environmentalKPIs.map((kpi, idx) => (
                        <div key={idx} className="p-3 bg-slate-800/50 rounded-lg text-center">
                          <p className="text-lg font-bold text-emerald">{kpi.value}</p>
                          <p className="text-xs text-slate-400">{kpi.kpi}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel
            title="Sentiment Analysis"
            description="Emotional breakdown of Real Estate discourse"
            badge="Mixed"
          >
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emotion Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emotionData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Score', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Positive Sentiments */}
              <Card className="glass-card border-emerald-500/50">
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-400">Positive Sentiments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2">
                    {sentimentAnalysis.positiveSentiments.map((item, idx) => (
                      <div key={idx} className="p-3 bg-emerald/10 border border-emerald/20 rounded-lg">
                        <p className="font-medium text-emerald-300">{item.topic}</p>
                        <p className="text-sm text-slate-400">{item.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Negative Sentiments */}
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="text-lg text-rose-400">Negative Sentiments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2">
                    {sentimentAnalysis.negativeSentiments.map((item, idx) => (
                      <div key={idx} className="p-3 bg-rose/10 border border-rose/20 rounded-lg">
                        <p className="font-medium text-rose-300">{item.topic}</p>
                        <p className="text-sm text-slate-400">{item.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment by Stakeholder */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Stakeholder</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sentimentAnalysis.sentimentByStakeholder.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <p className="font-medium text-slate-200">{item.stakeholder}</p>
                        <Badge
                          variant={
                            item.overallSentiment.includes('Negative') ? 'destructive' :
                            item.overallSentiment.includes('Positive') ? 'default' : 'outline'
                          }
                          className="text-xs"
                        >
                          {item.overallSentiment}
                        </Badge>
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

// Import missing icons
import { Calendar, BookOpen, Crosshair } from 'lucide-react'
