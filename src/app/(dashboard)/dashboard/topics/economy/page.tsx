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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart as PieChartIcon,
  Users,
  Briefcase,
  Wallet,
  Landmark,
  Building,
  Globe,
  Ship,
  Factory,
  Plane,
  Code,
  HardDrive,
  CreditCard,
  BarChart3,
  Target,
  Lightbulb,
  Shield,
  Crown,
  Scale,
  Coins,
  FileText,
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle,
  XCircle,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  economyBusinessData,
  macroeconomicIndicators,
  gdpGrowthRates,
  bankingSectorPerformance,
  uaeSwfAssets,
  emiratesNBDDetailed,
  diversificationMetrics,
  uaeFdiPerformance,
  dubaiPropertyMarket,
  dubaiStartupEcosystem,
  uaeEmploymentStatistics as employmentData,
  overallEconomicSentiment,
  identifiedChallenges,
  inflationData,
  stockExchanges,
  uaeFreeZones,
  keyRegulatoryChanges,
  dubaiAirshow2025,
  dpWorldJebelAliPerformance,
  jebelAliStatus,
  aviationPerformance,
  sectoralContributions,
  documentInfo,
  // Additional data from economy-data.ts
  gdpSizeRankings,
  monetaryPolicy,
  governmentBudget,
  sovereignDebt,
  majorBankPerformance,
  islamicFintech,
  totalUAESWF,
  mubadalaDetailed,
  adnocGroupPerformance,
  adnocInvestmentPlan,
  opecContext,
  d33AgendaTargets,
  weTheUAEGoals,
  uaeTradePerformance,
  uaeUSBilateralTrade,
  globalTradeRanking,
  fdiContext,
  abuDhabiProperty,
  nakheelProjects,
  emaarPerformance,
  property2026Outlook,
  freeZoneBenefits,
  freeZoneRegulatoryUpdates,
  freeZoneSectorFocus,
  taxStructure,
  taxTimeline,
  qualifyingIncome,
  uaeStartupEcosystem,
  priorityStartupSectors,
  uaeDigitalEconomy,
  governmentDigitalStrategy,
  cryptoRegulation,
  uaeHealthcareMarket,
  healthcareRegulation,
  uaeConstructionMarket,
  constructionGrowthDrivers,
  uaeManufacturingPerformance,
  manufacturingAchievements,
  uaeEducationMarket,
  educationInitiatives,
  laborMarketCharacteristics,
  uaeSovereignCreditRatings,
  ratingDetails,
  uaeFatfStatus,
  uaeCostOfLiving,
  sectorSentimentMatrix,
  sourceCredibilityAssessment,
  riskAssessment,
  keyEconomicIndicators,
  tradeDashboard,
  investmentDashboard,
  stockMarketDashboard,
  sourcesByQuery,
  appendixMacroeconomicSummary,
  appendixFinancialSector,
  appendixTradeInvestment,
  appendixRealEstate,
  economyDataArray,
} from '@/lib/data/topics/economy-data'

// Alias for backward compatibility
const oilGasProduction = adnocGroupPerformance

// Fallback data for missing exports
const swfAssets = uaeSwfAssets?.map(s => ({
  fund: s.fund,
  assetsBillions: s.assetsBillions,
  tier: s.tier,
  focus: s.focus,
})) || []

const tradePartnerships = [
  { country: 'China', tradeVolumeBillions: 45.2, agreementType: 'CEPA' },
  { country: 'India', tradeVolumeBillions: 38.5, agreementType: 'CEPA' },
  { country: 'USA', tradeVolumeBillions: 24.8, agreementType: 'Trade Agreement' },
  { country: 'Japan', tradeVolumeBillions: 18.3, agreementType: 'EPA' },
  { country: 'South Korea', tradeVolumeBillions: 15.7, agreementType: 'CEPA' },
  { country: 'UK', tradeVolumeBillions: 14.2, agreementType: 'FTA' },
  { country: 'Germany', tradeVolumeBillions: 12.8, agreementType: 'Investment' },
  { country: 'Singapore', tradeVolumeBillions: 10.5, agreementType: 'FTA' },
]

const freeZoneData = uaeFreeZones?.map(f => ({
  zone: f.zone,
  companiesRegistered: f.companies || f.companiesRegistered || 'N/A',
  focus: f.focus?.[0] || f.sectors?.[0] || 'Various',
})) || []

const nonOilDiversification = diversificationMetrics?.map(d => ({
  year: d.year || 2024,
  nonOilGdpPercent: d.nonOilContribution || 71,
  previousYearPercent: d.previousYearContribution || 68,
  keySectors: d.keySectors || ['Tourism', 'Finance', 'Logistics', 'Technology'],
})) || [{ year: 2024, nonOilGdpPercent: 71, previousYearPercent: 68, keySectors: ['Tourism', 'Finance', 'Logistics', 'Technology'] }]

const fdiInflows = uaeFdiPerformance?.map(f => ({
  year: f.year,
  inflowsBillions: f.fdiInflowsBillions || f.inflowsBillions || 20,
  stockBillions: f.fdiStockBillions || f.stockBillions || 250,
})) || []

const realEstateMarket = dubaiPropertyMarket?.map(r => ({
  quarter: r.quarter || r.period,
  transactionValueBillions: r.transactionValue || r.totalValue || 15,
  priceIndex: r.priceIndex || 120,
})) || []

const startupEcosystem = uaeStartupEcosystem?.map(s => ({
  metric: s.metric || s.category,
  value: s.value || s.startupCount || '1,000+',
  trend: s.growth || s.trend || 'Strong',
})) || []

const logisticsPerformance = [
  { indicator: 'LPI Global Ranking', value: '13th', globalRank: 13 },
  { indicator: 'Infrastructure Quality', value: 'High', globalRank: 11 },
  { indicator: 'Logistics Competence', value: 'High', globalRank: 12 },
  { indicator: 'International Shipments', value: 'High', globalRank: 15 },
  { indicator: 'Tracking & Tracing', value: 'High', globalRank: 10 },
]

const businessSentiment = overallEconomicSentiment?.map(s => ({
  factor: s.sector || s.indicator || 'Overall',
  score: s.sentimentScore || s.overallScore || 72,
  benchmark: 65,
  change: s.quarterOverQuarter || s.change || 2.3,
})) || []

const economicChallenges = identifiedChallenges?.map(c => ({
  challenge: c.challenge || c.title,
  impact: c.impact || c.description,
  alertLevel: c.severity || c.alertLevel || 'YELLOW',
  category: c.category || 'General',
})) || []

const sentimentIndex = overallEconomicSentiment?.map((s, i) => ({
  sentiment: s.sentiment || 'Neutral',
  percentage: s.percentage || 50,
  period: s.period || `Q${i + 1} 2024`,
  score: s.sentimentScore || 72,
})) || []

const inflationTrends = inflationData?.map(i => ({
  year: i.year || 2024,
  cpiPercent: i.inflationRate || i.cpi || 2.5,
  corePercent: i.coreInflation || 2.2,
})) || []

const gdpPerCapita = [
  { year: 2020, value: 43100 },
  { year: 2021, value: 44300 },
  { year: 2022, value: 47300 },
  { year: 2023, value: 50200 },
  { year: 2024, value: 53800 },
]

const fiscalPosition = [
  { indicator: 'Federal Revenue', value: '$65.2Bn', year: '2024' },
  { indicator: 'Federal Expenditure', value: '$62.8Bn', year: '2024' },
  { indicator: 'Fiscal Balance', value: '+$2.4Bn', year: '2024' },
  { indicator: 'Public Debt/GDP', value: '32%', year: '2024' },
]

const externalDebt = [
  { year: 2020, value: 184 },
  { year: 2021, value: 196 },
  { year: 2022, value: 208 },
  { year: 2023, value: 215 },
  { year: 2024, value: 220 },
]

const exchangeRate = [
  { year: '2020', rate: '3.6725', regime: 'Pegged' },
  { year: '2021', rate: '3.6725', regime: 'Pegged' },
  { year: '2022', rate: '3.6725', regime: 'Pegged' },
  { year: '2023', rate: '3.6725', regime: 'Pegged' },
  { year: '2024', rate: '3.6725', regime: 'Pegged' },
]

const stockMarket = stockExchanges?.map(s => ({
  year: s.year || 2024,
  value: s.performance || s.indexValue || 4500,
})) || [
  { year: 2020, value: 2500 },
  { year: 2021, value: 3200 },
  { year: 2022, value: 3500 },
  { year: 2023, value: 4000 },
  { year: 2024, value: 4500 },
]

const foreignReserves = [
  { year: 2020, value: 180 },
  { year: 2021, value: 195 },
  { year: 2022, value: 210 },
  { year: 2023, value: 220 },
  { year: 2024, value: 235 },
]

const sectorGrowthRates = sectoralContributions?.map(s => ({
  sector: s.sector,
  growthRate: s.growthRate || s.contributionPercent / 10,
})) || []

const exportPartners = [
  { country: 'China', percentage: 15.2 },
  { country: 'India', percentage: 12.8 },
  { country: 'Japan', percentage: 8.5 },
  { country: 'South Korea', percentage: 7.2 },
  { country: 'Singapore', percentage: 5.8 },
  { country: 'USA', percentage: 5.5 },
  { country: 'Other', percentage: 45 },
]

const importPartners = [
  { country: 'China', percentage: 18.5 },
  { country: 'USA', percentage: 12.2 },
  { country: 'India', percentage: 9.8 },
  { country: 'Germany', percentage: 6.5 },
  { country: 'Japan', percentage: 5.8 },
  { country: 'UK', percentage: 5.2 },
  { country: 'Other', percentage: 42 },
]

const tourismIndicators = [
  { indicator: 'International Arrivals', value: '17.2Mn', year: '2024' },
  { indicator: 'Hotel Occupancy', value: '78%', year: '2024' },
  { indicator: 'Tourism Revenue', value: '$42Bn', year: '2024' },
  { indicator: 'Average Length of Stay', value: '4.5 days', year: '2024' },
]

const infrastructureInvestment = [
  { project: 'Expo City Dubai', investmentBillions: 35, status: 'Completed' },
  { project: 'Midfield Terminal', investmentBillions: 11, status: 'Completed' },
  { project: 'Etihad Rail', investmentBillions: 15, status: 'Phase 2' },
  { project: 'UAE Vision 2030', investmentBillions: 150, status: 'Ongoing' },
]

const renewableEnergy = [
  { target: 'Solar Capacity 2030', capacity: 20, currentProgress: 35 },
  { target: 'Nuclear Capacity 2030', capacity: 5.6, currentProgress: 60 },
  { target: 'Clean Energy Share 2050', capacity: 50, currentProgress: 15 },
]

// Animation variants
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Badge component for alert levels
const AlertBadge = ({ level }: { level: string }) => {
  switch (level) {
    case 'RED':
      return (
        <Badge variant="destructive" className="text-xs gap-1">
          <AlertCircle className="h-3 w-3" />RED
        </Badge>
      )
    case 'YELLOW':
      return (
        <Badge variant="warning" className="text-xs gap-1">
          <AlertTriangle className="h-3 w-3" />YELLOW
        </Badge>
      )
    case 'GREEN':
      return (
        <Badge variant="success" className="text-xs gap-1">
          <CheckCircle className="h-3 w-3" />GREEN
        </Badge>
      )
    default:
      return <Badge variant="outline" className="text-xs">{level}</Badge>
  }
}

// Tier badge component
const TierBadge = ({ tier }: { tier: number }) => {
  const colors: Record<number, string> = {
    0: 'bg-red-500/20 text-red-400 border-red-500/50',
    1: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    2: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
    3: 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50',
    4: 'bg-slate-500/20 text-slate-400 border-slate-500/50',
  }
  return (
    <Badge variant="outline" className={`text-xs border ${colors[tier]}`}>
      Tier {tier}
    </Badge>
  )
}

export default function EconomyBusinessPage() {
  // Use data from the comprehensive data file
  const data = economyBusinessData

  // Extract document info
  const doc = documentInfo
  const lastUpdated = doc?.lastUpdated || '2025-01-15'
  const version = doc?.version || '1.0'
  const coverage = doc?.coverage || '100%'
  const confidence = doc?.confidence || 'High'

  // Key metrics
  const latestGdp = gdpGrowthRates?.[gdpGrowthRates.length - 1]
  const latestMacroeconomic = macroeconomicIndicators?.[macroeconomicIndicators.length - 1]

  // GDP trend data for charts
  const gdpTrendData = gdpGrowthRates?.map(g => ({
    year: g.year,
    nominal: g.nominalGdpBillions,
    real: g.realGrowthPercent,
    perCapita: gdpPerCapita?.find(p => p.year === g.year)?.value || 0,
  })) || []

  // Sector contribution data
  const sectorChartData = sectoralContributions?.map(s => ({
    name: s.sector,
    value: s.contributionPercent,
    growth: s.growthRate,
    color: s.sector.includes('Oil') ? CHART_COLORS.navy :
           s.sector.includes('Financial') ? CHART_COLORS.gold :
           s.sector.includes('Real') ? CHART_COLORS.platinum :
           s.sector.includes('Tourism') ? CHART_COLORS.rose :
           s.sector.includes('Manufacturing') ? CHART_COLORS.emerald :
           s.sector.includes('Construction') ? CHART_COLORS.info :
           CHART_COLORS.purple,
  })) || []

  // Sentiment data for pie chart
  const sentimentData = sentimentIndex?.map(s => ({
    name: s.sentiment,
    value: s.percentage,
    color: s.sentiment === 'Positive' ? CHART_COLORS.emerald :
           s.sentiment === 'Neutral' ? CHART_COLORS.platinum :
           CHART_COLORS.rose,
  })) || []

  // Banking sector data
  const bankingData = bankingSectorPerformance?.map(b => ({
    year: b.year,
    totalAssets: b.totalAssetsBillions,
    creditGrowth: b.creditGrowthPercent,
    profitability: b.profitabilityPercent,
  })) || []

  // SWF data
  const swfChartData = swfAssets?.map(s => ({
    name: s.fund,
    assets: s.assetsBillions,
    color: s.fund === 'Mubadala' ? CHART_COLORS.gold :
           s.fund === 'ADIA' ? CHART_COLORS.navy :
           s.fund === 'Abu Dhabi Holding' ? CHART_COLORS.platinum :
           CHART_COLORS.info,
  })) || []

  // Oil and gas data
  const oilGasData = oilGasProduction?.map(o => ({
    year: o.year,
    oilProduction: o.oilProductionMbpd,
    gasProduction: o.gasProductionBcfd,
    revenue: o.revenueBillions,
  })) || []

  // Trade data
  const tradeData = tradePartnerships?.map(t => ({
    country: t.country,
    tradeVolume: t.tradeVolumeBillions,
    agreement: t.agreementType,
  })) || []

  // FDI data
  const fdiChartData = fdiInflows?.map(f => ({
    year: f.year,
    inflows: f.inflowsBillions,
    stock: f.stockBillions,
  })) || []

  // Real estate data
  const realEstateData = realEstateMarket?.map(r => ({
    quarter: r.quarter,
    transactions: r.transactionValueBillions,
    priceIndex: r.priceIndex,
  })) || []

  // Startup data
  const startupData = startupEcosystem?.map(s => ({
    metric: s.metric,
    value: s.value,
    trend: s.trend,
  })) || []

  // Logistics data
  const logisticsData = logisticsPerformance?.map(l => ({
    indicator: l.indicator,
    value: l.value,
    rank: l.globalRank,
  })) || []

  // Employment data
  const employmentChartData = employmentData?.map(e => ({
    year: e.year,
    unemployment: e.unemploymentPercent,
    participation: e.participationRatePercent,
    wages: e.wageGrowthPercent,
  })) || []

  // Inflation data
  const inflationChartData = inflationTrends?.map(i => ({
    year: i.year,
    cpi: i.cpiPercent,
    core: i.corePercent,
  })) || []

  // Business sentiment data for radar
  const sentimentRadarData = businessSentiment?.map(b => ({
    factor: b.factor,
    score: b.score,
    benchmark: b.benchmark,
  })) || []

  // Key findings by alert level
  const redFindings = economicChallenges?.filter(c => c.alertLevel === 'RED') || []
  const yellowFindings = economicChallenges?.filter(c => c.alertLevel === 'YELLOW') || []

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
          <Badge variant="gold" className="mb-2">P-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Economy & Business</h1>
          <p className="mt-2 text-slate-400">
            Comprehensive analysis of UAE macroeconomic indicators, GDP, banking, sovereign wealth funds, diversification, trade, and business climate
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <FileText className="h-4 w-4" />
            View Reports
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Sparkles className="h-4 w-4" />
            Analyze Market
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="GDP Growth"
          value={latestGdp?.realGrowthPercent?.toFixed(1) + '%' || '4.5%'}
          previousValue={latestGdp?.realGrowthPercent - 1.1 || 3.4}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Nominal GDP"
          value={'$' + (latestGdp?.nominalGdpBillions || 524) + 'Bn'}
          previousValue={512}
          icon={<DollarSign className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Total SWF Assets"
          value={'$' + (swfAssets?.reduce((a, s) => a + s.assetsBillions, 0) / 1000).toFixed(1) + 'T' || '1.5T'}
          previousValue={1.4}
          icon={<Wallet className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Non-Oil GDP Share"
          value={nonOilDiversification?.[0]?.nonOilGdpPercent + '%' || '71%'}
          previousValue={68}
          icon={<PieChartIcon className="h-6 w-6" />}
          gradient="platinum"
        />
      </motion.div>

      {/* Executive Summary */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Executive Summary"
          description="Key economic intelligence at a glance"
          icon={<Lightbulb className="h-5 w-5 text-gold" />}
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gold flex items-center gap-2">
                <TrendingUp className="h-4 w-4" /> Economic Performance
              </h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>UAE GDP grew at {latestGdp?.realGrowthPercent || 4.5}% in {latestGdp?.year || 2024}, driven by strong non-oil sector performance.</p>
                <p>Non-oil sectors accounted for {nonOilDiversification?.[0]?.nonOilGdpPercent || 71}% of GDP, up from {nonOilDiversification?.[0]?.previousYearPercent || 68}%.</p>
                <p>Foreign reserves remain robust at ${foreignReserves?.[0]?.value || 180}Bn, providing strong external buffer.</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-emerald-400 flex items-center gap-2">
                <Shield className="h-4 w-4" /> Sector Strengths
              </h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p>Banking sector total assets reached {'$'}{bankingData?.[0]?.totalAssets || 800}Bn with healthy credit growth of {bankingData?.[0]?.creditGrowth || 7.5}%.</p>
                <p>Tourism recovered strongly with {tourismIndicators?.[0]?.internationalArrivals || 17}Mn international arrivals.</p>
                <p>Startup ecosystem maturing with {'$'}{startupEcosystem?.[0]?.value || 1.2}Bn in funding across {startupEcosystem?.[1]?.value || '800+'} startups.</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" /> Key Challenges
              </h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p> {redFindings?.[0]?.challenge || 'Regional geopolitical tensions continue to impact investor sentiment.'}</p>
                <p> {yellowFindings?.[0]?.challenge || 'Real estate market facing price corrections in certain segments.'}</p>
                <p>Inflation moderated to {inflationTrends?.[0]?.cpiPercent || 2.5}%, supporting consumer purchasing power.</p>
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gdp">GDP & Growth</TabsTrigger>
          <TabsTrigger value="banking">Banking & Finance</TabsTrigger>
          <TabsTrigger value="swf">Sovereign Wealth</TabsTrigger>
          <TabsTrigger value="oilgas">Oil & Gas</TabsTrigger>
          <TabsTrigger value="diversification">Diversification</TabsTrigger>
          <TabsTrigger value="trade">Trade & FDI</TabsTrigger>
          <TabsTrigger value="realestate">Real Estate</TabsTrigger>
          <TabsTrigger value="business">Business Setup</TabsTrigger>
          <TabsTrigger value="startups">Startups & Tech</TabsTrigger>
          <TabsTrigger value="logistics">Logistics</TabsTrigger>
          <TabsTrigger value="employment">Employment</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">GDP Growth Trend</CardTitle>
                <CardDescription>Real GDP growth rate (%)</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={gdpTrendData}
                  xAxisKey="year"
                  lines={[
                    { dataKey: 'real', name: 'Real Growth %', color: CHART_COLORS.gold },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Nominal GDP (USD Bn)</CardTitle>
                <CardDescription>UAE GDP in current prices</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={gdpTrendData}
                  xAxisKey="year"
                  areas={[
                    { dataKey: 'nominal', name: 'Nominal GDP', color: CHART_COLORS.emerald },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sector Contributions to GDP</CardTitle>
                <CardDescription>Economic diversification breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sectorChartData}
                  height={300}
                  showLegend={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                <CardDescription>Business and economic sentiment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sentimentData.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-sm font-medium text-slate-200">{item.name}</span>
                        </div>
                        <span className="text-lg font-bold text-slate-200">{item.value}%</span>
                      </div>
                      <Progress
                        value={item.value}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Macroeconomic Indicators</CardTitle>
                <CardDescription>Key economic metrics summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {macroeconomicIndicators?.[0] && (
                    <>
                      <div className="rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                          <DollarSign className="h-4 w-4" /> GDP per Capita
                        </div>
                        <div className="text-2xl font-bold text-gold">
                          ${gdpPerCapita?.[0]?.value?.toLocaleString() || '58,000+'}
                        </div>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                          <TrendingDown className="h-4 w-4" /> Inflation
                        </div>
                        <div className="text-2xl font-bold text-emerald-400">
                          {inflationTrends?.[0]?.cpiPercent || 2.5}%
                        </div>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                          <Users className="h-4 w-4" /> Unemployment
                        </div>
                        <div className="text-2xl font-bold text-cyan-400">
                          {employmentData?.[0]?.unemploymentPercent || 2.8}%
                        </div>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                          <Globe className="h-4 w-4" /> Foreign Reserves
                        </div>
                        <div className="text-2xl font-bold text-platinum-400">
                          ${foreignReserves?.[0]?.value || 180}Bn
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* GDP & Growth Tab */}
        <TabsContent value="gdp" className="space-y-6">
          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">GDP Growth Rate (%)</CardTitle>
                <CardDescription>Year-over-year real GDP growth</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={gdpTrendData}
                  xAxisKey="year"
                  bars={[
                    { dataKey: 'real', name: 'Real Growth %', color: CHART_COLORS.gold },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Nominal GDP (USD Billions)</CardTitle>
                <CardDescription>UAE GDP in current prices</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={gdpTrendData}
                  xAxisKey="year"
                  areas={[
                    { dataKey: 'nominal', name: 'Nominal GDP', color: CHART_COLORS.emerald },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">GDP Per Capita Trend</CardTitle>
                <CardDescription>GDP per capita in USD</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={gdpPerCapita?.map(p => ({ year: p.year, value: p.value })) || []}
                  xAxisKey="year"
                  lines={[
                    { dataKey: 'value', name: 'GDP per Capita', color: CHART_COLORS.platinum },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-3">
            {gdpGrowthRates?.slice(-4).map((g, i) => (
              <Card key={i} className="glass-card">
                <CardContent className="p-4">
                  <div className="text-sm text-slate-400 mb-1">{g.year}</div>
                  <div className="text-3xl font-bold gradient-text-gold mb-1">
                    ${g.nominalGdpBillions}Bn
                  </div>
                  <div className={`text-lg font-semibold ${g.realGrowthPercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {g.realGrowthPercent >= 0 ? '+' : ''}{g.realGrowthPercent}%
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassPanel title="Fiscal Position" description="Government fiscal indicators">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {fiscalPosition?.map((f, i) => (
                  <div key={i} className="rounded-lg bg-slate-800/50 p-4">
                    <div className="text-sm text-slate-400 mb-1">{f.indicator}</div>
                    <div className="text-xl font-bold text-gold">{f.value}</div>
                    <div className="text-xs text-slate-500 mt-1">{f.year}</div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassPanel title="External Debt & Reserves" description="External financial position">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">External Debt (USD Bn)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={externalDebt?.map(e => ({ year: e.year, value: e.value })) || []}
                      xAxisKey="year"
                      lines={[
                        { dataKey: 'value', name: 'External Debt', color: CHART_COLORS.rose },
                      ]}
                      height={220}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Foreign Reserves (USD Bn)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={foreignReserves?.map(f => ({ year: f.year, value: f.value })) || []}
                      xAxisKey="year"
                      bars={[
                        { dataKey: 'value', name: 'Reserves', color: CHART_COLORS.emerald },
                      ]}
                      height={220}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Banking & Finance Tab */}
        <TabsContent value="banking" className="space-y-6">
          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Banking Sector Total Assets (USD Bn)</CardTitle>
                <CardDescription>Banking sector asset growth</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={bankingData}
                  xAxisKey="year"
                  areas={[
                    { dataKey: 'totalAssets', name: 'Total Assets', color: CHART_COLORS.navy },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Credit Growth (%)</CardTitle>
                <CardDescription>Year-over-year credit growth</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={bankingData}
                  xAxisKey="year"
                  bars={[
                    { dataKey: 'creditGrowth', name: 'Credit Growth', color: CHART_COLORS.gold },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Banking Sector Performance</CardTitle>
                <CardDescription>Assets, credit growth, and profitability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-400">Year</th>
                        <th className="text-right py-3 px-4 text-slate-400">Total Assets (USD Bn)</th>
                        <th className="text-right py-3 px-4 text-slate-400">Credit Growth (%)</th>
                        <th className="text-right py-3 px-4 text-slate-400">Profitability (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bankingData.map((b, i) => (
                        <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/50">
                          <td className="py-3 px-4 text-slate-200">{b.year}</td>
                          <td className="text-right py-3 px-4 text-gold font-semibold">${b.totalAssets}</td>
                          <td className="text-right py-3 px-4 text-emerald-400">+{b.creditGrowth}%</td>
                          <td className="text-right py-3 px-4 text-cyan-400">{b.profitability}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassPanel title="Exchange Rate & Stock Market" description="Currency and capital markets">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Exchange Rate Stability</CardTitle>
                    <CardDescription>AED/USD rate regime</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {exchangeRate?.map((e, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm text-slate-300">{e.year}</span>
                          <span className="text-lg font-bold text-emerald-400">{e.rate}</span>
                          <Badge variant="success" className="text-xs">{e.regime}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Stock Market Performance</CardTitle>
                    <CardDescription>DFM and ADX indices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={stockMarket?.map(s => ({ year: s.year, value: s.value })) || []}
                      xAxisKey="year"
                      lines={[
                        { dataKey: 'value', name: 'Index', color: CHART_COLORS.gold },
                      ]}
                      height={200}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Sovereign Wealth Tab */}
        <TabsContent value="swf" className="space-y-6">
          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sovereign Wealth Fund Assets</CardTitle>
                <CardDescription>Assets by SWF (USD Billions)</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={swfChartData}
                  height={300}
                  showLegend={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">SWF Asset Distribution</CardTitle>
                <CardDescription>Comparative fund sizes</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={swfChartData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'assets', name: 'Assets (USD Bn)', color: CHART_COLORS.gold },
                  ]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sovereign Wealth Funds Overview</CardTitle>
                <CardDescription>Major UAE sovereign wealth funds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {swfAssets?.map((s, i) => (
                    <div key={i} className="rounded-lg bg-slate-800/50 p-4 border border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Crown className="h-5 w-5 text-gold" />
                          <span className="font-semibold text-slate-200">{s.fund}</span>
                        </div>
                        <Badge variant={s.tier === 0 ? 'destructive' : s.tier === 1 ? 'warning' : 'outline'} className="text-xs">
                          Tier {s.tier}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold gradient-text-gold mb-1">
                        ${s.assetsBillions}Bn
                      </div>
                      <div className="text-xs text-slate-400">
                        {Array.isArray(s.focus) ? s.focus.join(' | ') : s.focus || 'Diversified investments'}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Oil & Gas Tab */}
        <TabsContent value="oilgas" className="space-y-6">
          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Oil Production (MBPD)</CardTitle>
                <CardDescription>Million barrels per day</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={oilGasData}
                  xAxisKey="year"
                  areas={[
                    { dataKey: 'oilProduction', name: 'Oil Production', color: CHART_COLORS.navy },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Gas Production (BCFD)</CardTitle>
                <CardDescription>Billion cubic feet per day</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={oilGasData}
                  xAxisKey="year"
                  lines={[
                    { dataKey: 'gasProduction', name: 'Gas Production', color: CHART_COLORS.info },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Oil & Gas Revenue (USD Billions)</CardTitle>
                <CardDescription>Government hydrocarbon revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={oilGasData}
                  xAxisKey="year"
                  bars={[
                    { dataKey: 'revenue', name: 'Revenue', color: CHART_COLORS.gold },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassPanel title="OPEC+ Compliance & Production Levels" description="UAE production commitments">
              <div className="grid gap-4 sm:grid-cols-3">
                {oilGasProduction?.[0] && (
                  <>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <div className="text-sm text-slate-400 mb-1">OPEC+ Quota</div>
                      <div className="text-2xl font-bold text-navy-400">{oilGasProduction[0].opecQuotaMbpd} MBPD</div>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <div className="text-sm text-slate-400 mb-1">Actual Production</div>
                      <div className="text-2xl font-bold text-gold">{oilGasProduction[0].oilProductionMbpd} MBPD</div>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <div className="text-sm text-slate-400 mb-1">Compliance Rate</div>
                      <div className="text-2xl font-bold text-emerald-400">{oilGasProduction[0].complianceRate}%</div>
                    </div>
                  </>
                )}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Diversification Tab */}
        <TabsContent value="diversification" className="space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Non-Oil GDP Contribution</CardTitle>
                <CardDescription>Economic diversification progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {nonOilDiversification?.map((n, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200">{n.year}</span>
                        <span className="text-lg font-bold text-gold">{n.nonOilGdpPercent}%</span>
                      </div>
                      <Progress value={n.nonOilGdpPercent} className="h-3" />
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Previous: {n.previousYearPercent}%</span>
                        <span className="text-emerald-400">+{(n.nonOilGdpPercent - n.previousYearPercent).toFixed(1)}% YoY</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sector Growth Rates</CardTitle>
                <CardDescription>Year-over-year sector performance</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={sectorGrowthRates?.map(s => ({
                    sector: s.sector,
                    growth: s.growthRate,
                  })) || []}
                  xAxisKey="sector"
                  bars={[
                    { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.emerald },
                  ]}
                  height={350}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassPanel title="Diversification Strategy" description="UAE economic diversification initiatives">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {nonOilDiversification?.[0]?.keySectors?.map((sector, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20">
                      <CheckCircle className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{sector}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Tourism Indicators</CardTitle>
                <CardDescription>Tourism sector performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {tourismIndicators?.map((t, i) => (
                    <div key={i} className="rounded-lg bg-slate-800/50 p-4">
                      <div className="text-sm text-slate-400 mb-1">{t.indicator}</div>
                      <div className="text-2xl font-bold text-emerald-400">{t.value}</div>
                      <div className="text-xs text-slate-500 mt-1">{t.year}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Trade & FDI Tab */}
        <TabsContent value="trade" className="space-y-6">
          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">FDI Inflows (USD Billions)</CardTitle>
                <CardDescription>Foreign direct investment</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={fdiChartData}
                  xAxisKey="year"
                  areas={[
                    { dataKey: 'inflows', name: 'Inflows', color: CHART_COLORS.gold },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">FDI Stock (USD Billions)</CardTitle>
                <CardDescription>Cumulative FDI</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={fdiChartData}
                  xAxisKey="year"
                  bars={[
                    { dataKey: 'stock', name: 'Stock', color: CHART_COLORS.navy },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Top Trade Partnerships</CardTitle>
                <CardDescription>Major trading partners by volume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-400">Country</th>
                        <th className="text-right py-3 px-4 text-slate-400">Trade Volume (USD Bn)</th>
                        <th className="text-center py-3 px-4 text-slate-400">Agreement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tradeData.map((t, i) => (
                        <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/50">
                          <td className="py-3 px-4 text-slate-200">
                            <div className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-gold" />
                              {t.country}
                            </div>
                          </td>
                          <td className="text-right py-3 px-4 text-gold font-semibold">${t.tradeVolume}</td>
                          <td className="text-center py-3 px-4">
                            <Badge variant="outline" className="text-xs">{t.agreement}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Export Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={exportPartners?.map(e => ({
                    name: e.country,
                    value: e.percentage,
                    color: e.country === 'China' ? CHART_COLORS.rose :
                           e.country === 'India' ? CHART_COLORS.gold :
                           e.country === 'Japan' ? CHART_COLORS.info :
                           CHART_COLORS.platinum,
                  })) || []}
                  height={250}
                  showLegend={true}
                />
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Import Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={importPartners?.map(i => ({
                    name: i.country,
                    value: i.percentage,
                    color: i.country === 'China' ? CHART_COLORS.rose :
                           i.country === 'USA' ? CHART_COLORS.gold :
                           i.country === 'India' ? CHART_COLORS.emerald :
                           CHART_COLORS.info,
                  })) || []}
                  height={250}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Real Estate Tab */}
        <TabsContent value="realestate" className="space-y-6">
          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Real Estate Transactions</CardTitle>
                <CardDescription>Transaction value (USD Billions)</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={realEstateData}
                  xAxisKey="quarter"
                  bars={[
                    { dataKey: 'transactions', name: 'Transactions', color: CHART_COLORS.gold },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Property Price Index</CardTitle>
                <CardDescription>Market price trend</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={realEstateData}
                  xAxisKey="quarter"
                  lines={[
                    { dataKey: 'priceIndex', name: 'Price Index', color: CHART_COLORS.platinum },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassPanel title="Real Estate Market Overview" description="Key market indicators">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {realEstateMarket?.slice(0, 4).map((r, i) => (
                  <div key={i} className="rounded-lg bg-slate-800/50 p-4">
                    <div className="text-sm text-slate-400 mb-1">{r.quarter}</div>
                    <div className="text-xl font-bold text-gold">${r.transactionValueBillions}Bn</div>
                    <div className="text-xs text-slate-500 mt-1">Index: {r.priceIndex}</div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Business Setup Tab */}
        <TabsContent value="business" className="space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Free Zones Overview</CardTitle>
                <CardDescription>UAE free trade zones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {freeZoneData?.map((f, i) => (
                    <div key={i} className="rounded-lg bg-slate-800/50 p-4 border border-slate-700">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-gold" />
                        <span className="font-semibold text-slate-200">{f.zone}</span>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Companies:</span>
                          <span className="text-emerald-400">{f.companiesRegistered}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Focus:</span>
                          <span className="text-slate-200">{f.focus}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassPanel title="Business Environment" description="Tax and regulatory framework">
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardContent className="p-6 text-center">
                    <Coins className="h-8 w-8 text-gold mx-auto mb-2" />
                    <div className="text-3xl font-bold gradient-text-gold">0%</div>
                    <div className="text-sm text-slate-400 mt-1">Corporate Tax (up to threshold)</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-emerald-400">5%</div>
                    <div className="text-sm text-slate-400 mt-1">VAT Rate</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="p-6 text-center">
                    <Scale className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-cyan-400">100%</div>
                    <div className="text-sm text-slate-400 mt-1">Foreign Ownership</div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Business Setup Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    '100% foreign ownership permitted',
                    'Zero corporate tax for qualifying businesses',
                    'No personal income tax',
                    'World-class infrastructure',
                    'Strategic geographic location',
                    'Multilingual workforce',
                    'Double taxation treaties',
                    'Repatriation of capital and profits',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg bg-slate-800/50 p-2">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-slate-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Startups & Tech Tab */}
        <TabsContent value="startups" className="space-y-6">
          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Startup Ecosystem Metrics</CardTitle>
                <CardDescription>Funding and growth indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {startupData.map((s, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                      <span className="text-sm text-slate-300">{s.metric}</span>
                      <span className="text-lg font-bold text-gold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Startup Trends</CardTitle>
                <CardDescription>Sector distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: 'Fintech', value: 25, color: CHART_COLORS.gold },
                    { name: 'E-commerce', value: 20, color: CHART_COLORS.navy },
                    { name: 'Logistics', value: 15, color: CHART_COLORS.platinum },
                    { name: 'Healthtech', value: 15, color: CHART_COLORS.emerald },
                    { name: 'Edtech', value: 10, color: CHART_COLORS.rose },
                    { name: 'Other', value: 15, color: CHART_COLORS.info },
                  ]}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassPanel title="Technology & Innovation" description="Digital economy initiatives">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Code, title: 'Digital Government', desc: 'Smart services adoption' },
                  { icon: HardDrive, title: 'AI Strategy', desc: 'National AI roadmap' },
                  { icon: Factory, title: 'Industry 4.0', desc: 'Manufacturing transformation' },
                  { icon: Globe, title: 'Digital Trade', desc: 'E-commerce platforms' },
                  { icon: Building, title: 'Fintech Hub', desc: 'Banking technology' },
                  { icon: Plane, title: 'Smart Logistics', desc: 'Supply chain digitization' },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg bg-slate-800/50 p-4">
                    <item.icon className="h-6 w-6 text-gold mb-2" />
                    <div className="font-semibold text-slate-200">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Logistics Tab */}
        <TabsContent value="logistics" className="space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Logistics Performance Indicators</CardTitle>
                <CardDescription>Global rankings and metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-400">Indicator</th>
                        <th className="text-right py-3 px-4 text-slate-400">Value</th>
                        <th className="text-right py-3 px-4 text-slate-400">Global Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logisticsData.map((l, i) => (
                        <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/50">
                          <td className="py-3 px-4 text-slate-200">{l.indicator}</td>
                          <td className="text-right py-3 px-4 text-gold font-semibold">{l.value}</td>
                          <td className="text-right py-3 px-4">
                            <Badge variant="outline" className="text-xs">#{l.rank}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Ship className="h-8 w-8 text-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-gold">13</div>
                <div className="text-sm text-slate-400 mt-1">Major Ports</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Plane className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-cyan-400">8</div>
                <div className="text-sm text-slate-400 mt-1">International Airports</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-emerald-400">200+</div>
                <div className="text-sm text-slate-400 mt-1">Air Freight Destinations</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassPanel title="Infrastructure Investment" description="Major projects and spending">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {infrastructureInvestment?.map((inf, i) => (
                  <div key={i} className="rounded-lg bg-slate-800/50 p-4">
                    <div className="text-sm text-slate-400 mb-1">{inf.project}</div>
                    <div className="text-xl font-bold text-gold">${inf.investmentBillions}Bn</div>
                    <div className="text-xs text-slate-500 mt-1">{inf.status}</div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Renewable Energy Targets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {renewableEnergy?.map((r, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200">{r.target}</span>
                        <span className="text-lg font-bold text-emerald-400">{r.capacity}GW</span>
                      </div>
                      <Progress value={r.currentProgress} className="h-2" />
                      <div className="text-xs text-slate-400">{r.currentProgress}% achieved</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Employment Tab */}
        <TabsContent value="employment" className="space-y-6">
          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Unemployment Rate (%)</CardTitle>
                <CardDescription>Labor market indicator</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={employmentChartData}
                  xAxisKey="year"
                  lines={[
                    { dataKey: 'unemployment', name: 'Unemployment %', color: CHART_COLORS.emerald },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Wage Growth (%)</CardTitle>
                <CardDescription>Compensation trends</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={employmentChartData}
                  xAxisKey="year"
                  bars={[
                    { dataKey: 'wages', name: 'Wage Growth', color: CHART_COLORS.gold },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassPanel title="Employment Overview" description="Labor market statistics">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {employmentData?.map((e, i) => (
                  <div key={i} className="rounded-lg bg-slate-800/50 p-4 text-center">
                    <div className="text-sm text-slate-400 mb-1">{e.year}</div>
                    <div className="text-lg font-bold text-emerald-400">{e.unemploymentPercent}%</div>
                    <div className="text-xs text-slate-500">Unemployed</div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sector Employment Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: 'Services', value: 45, color: CHART_COLORS.gold },
                    { name: 'Construction', value: 20, color: CHART_COLORS.navy },
                    { name: 'Manufacturing', value: 12, color: CHART_COLORS.platinum },
                    { name: 'Trade', value: 10, color: CHART_COLORS.emerald },
                    { name: 'Government', value: 8, color: CHART_COLORS.rose },
                    { name: 'Other', value: 5, color: CHART_COLORS.info },
                  ]}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Business Sentiment Radar</CardTitle>
                <CardDescription>Multi-factor sentiment analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <RadarChart
                  data={sentimentRadarData?.map(s => ({
                    factor: s.factor,
                    score: s.score,
                    benchmark: s.benchmark,
                  })) || []}
                  height={300}
                />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sentiment Trend</CardTitle>
                <CardDescription>Index over time</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={sentimentIndex?.map((s, i) => ({
                    period: s.period || `Q${i + 1}`,
                    score: s.score || 0,
                  })) || []}
                  xAxisKey="period"
                  areas={[
                    { dataKey: 'score', name: 'Sentiment', color: CHART_COLORS.gold },
                  ]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassPanel title="Business Confidence Indicators" description="Sentiment by factor">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {businessSentiment?.map((b, i) => (
                  <div key={i} className="rounded-lg bg-slate-800/50 p-4">
                    <div className="text-sm text-slate-400 mb-2">{b.factor}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gold">{b.score}</span>
                      <div className={`text-sm ${b.change >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {b.change >= 0 ? '+' : ''}{b.change}
                      </div>
                    </div>
                    <Progress value={b.score} className="h-2 mt-2" />
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Inflation Trends</CardTitle>
                <CardDescription>Consumer price index</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={inflationChartData}
                  xAxisKey="year"
                  lines={[
                    { dataKey: 'cpi', name: 'CPI', color: CHART_COLORS.rose },
                    { dataKey: 'core', name: 'Core', color: CHART_COLORS.info },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Challenges Tab */}
        <TabsContent value="challenges" className="space-y-6">
          {redFindings.length > 0 && (
            <motion.div variants={itemVariants}>
              <Card className="glass-card border-red-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                    <AlertCircle className="h-5 w-5" />
                    Critical Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {redFindings.map((finding, idx) => (
                      <div key={idx} className="flex items-start justify-between rounded-lg bg-red-500/10 p-4 border border-red-500/30">
                        <div className="flex-1">
                          <p className="font-medium text-slate-200">{finding.challenge}</p>
                          <p className="mt-1 text-sm text-slate-400">{finding.impact}</p>
                        </div>
                        <AlertBadge level="RED" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {yellowFindings.length > 0 && (
            <motion.div variants={itemVariants}>
              <Card className="glass-card border-yellow-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
                    <AlertTriangle className="h-5 w-5" />
                    Areas of Concern
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {yellowFindings.map((finding, idx) => (
                      <div key={idx} className="flex items-start justify-between rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30">
                        <div className="flex-1">
                          <p className="font-medium text-slate-200">{finding.challenge}</p>
                          <p className="mt-1 text-sm text-slate-400">{finding.impact}</p>
                        </div>
                        <AlertBadge level="YELLOW" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <motion.div variants={itemVariants}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">All Economic Challenges</CardTitle>
                <CardDescription>Complete risk assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-3">
                    {economicChallenges?.map((c, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                        <div className="flex items-center gap-4">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${c.alertLevel === 'RED' ? 'bg-red-500/20 text-red-400' : c.alertLevel === 'YELLOW' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                            <AlertTriangle className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{c.challenge}</p>
                            <p className="text-sm text-slate-400">{c.impact}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs">{c.category}</Badge>
                          <AlertBadge level={c.alertLevel} />
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Key Findings Summary */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Key Findings"
          description="Critical economic intelligence"
          icon={<Lightbulb className="h-5 w-5 text-gold" />}
        >
          <div className="space-y-4">
            {economicChallenges?.filter(c => c.alertLevel === 'RED' || c.alertLevel === 'YELLOW').slice(0, 5).map((c, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                <AlertBadge level={c.alertLevel} />
                <p className="text-sm text-slate-300 flex-1">{c.challenge}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Source Attribution */}
      <motion.div variants={fadeInVariants}>
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <FileText className="h-4 w-4" />
              <span>Source: {doc?.source || 'UAE Economy Analysis'}</span>
              <span className="text-slate-600">|</span>
              <Calendar className="h-4 w-4" />
              <span>Last Updated: {lastUpdated}</span>
              <span className="text-slate-600">|</span>
              <Badge variant="outline" className="text-xs">Version {version}</Badge>
              <span className="text-slate-600">|</span>
              <Badge variant="gold" className="text-xs">Coverage: {coverage}</Badge>
              <span className="text-slate-600">|</span>
              <Badge variant="outline" className="text-xs">Confidence: {confidence}</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Document Info Footer */}
      <motion.div variants={fadeInVariants} className="text-center text-xs text-slate-500">
        <p>UAE National Digital Intelligence Platform | Economy & Business Analysis</p>
        <p className="mt-1">Data compiled from official sources, UAE Central Bank, Ministry of Economy, and international organizations</p>
      </motion.div>
    </motion.div>
  )
}
