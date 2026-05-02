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
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  DollarSign,
  Briefcase,
  PieChart as PieChartIcon,
  Wallet,
  Building,
  Landmark,
  Scale,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  ArrowRight,
  Target,
  Award,
  ChevronRight,
  Activity,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useTrendsDataArrayData,
  trendsOverview,
} from '@/lib/data-loader'

// Re-exported economic data constants (available from trends-data.ts)
const gdpHistoricalData = [
  { year: '2019', growth: 1.27 },
  { year: '2020', growth: -8.69 },
  { year: '2021', growth: 4.55 },
  { year: '2022', growth: 7.51 },
  { year: '2023', growth: 4.3 },
  { year: '2024', growth: 3.99 },
  { year: '2025', growth: 5.8 },
]

const tier1KPIs = [
  { id: 'gdp-growth', name: 'GDP Growth Rate', value: '5.0-5.6%', period: '2026(F)', uaeRelevance: 'Critical', changeType: 'stable' },
  { id: 'total-trade', name: 'Total Trade Value', value: '$1.637T', change: 15, changeType: 'up', uaeRelevance: 'Critical' },
  { id: 'gdp-current', name: 'GDP (Current)', value: '$967.62B', period: '2026(E)', uaeRelevance: 'Critical', changeType: 'up' },
  { id: 'fdi-inflows', name: 'FDI Inflows', value: '$45B', change: 50, changeType: 'up', uaeRelevance: 'Critical' },
  { id: 'tourism-revenue', name: 'Tourism Revenue', value: 'AED 257.3B', period: '2025', uaeRelevance: 'High', changeType: 'up' },
  { id: 'banking-assets', name: 'Banking Assets', value: 'Dh5.472T', change: 1.1, changeType: 'up', uaeRelevance: 'High' },
  { id: 'startup-funding', name: 'Startup Funding', value: '$2B', change: 32, changeType: 'up', uaeRelevance: 'High' },
  { id: 'inflation', name: 'Inflation Rate', value: '2.1%', period: '2025', uaeRelevance: 'Medium', changeType: 'stable' },
  { id: 'federal-budget', name: 'Federal Budget', value: 'AED 92.4B', change: 29, changeType: 'up', uaeRelevance: 'High' },
]

const tier2SectorKPIs = [
  { id: 'non-oil-gdp', name: 'Non-Oil GDP Growth', value: '5.5%', period: '2025', uaeRelevance: 'High' },
  { id: 'oil-sector-share', name: 'Oil Sector Share', value: '~25%', period: '2025', uaeRelevance: 'High' },
  { id: 'industrial-exports', name: 'Industrial Exports', value: 'AED 262B', change: 25, uaeRelevance: 'High' },
  { id: 'digital-services', name: 'Digital Services Trade', value: '$33B', period: '2025', uaeRelevance: 'High' },
  { id: 'trade-surplus', name: 'Trade Surplus', value: 'Dh584.1B', period: '2025', uaeRelevance: 'Critical' },
  { id: 'hotel-guests', name: 'Hotel Guests (UAE)', value: '23.3M', change: 4.9, uaeRelevance: 'High' },
  { id: 'hotel-occupancy', name: 'Hotel Occupancy (Dubai)', value: '79.2%', period: '2025', uaeRelevance: 'Medium' },
  { id: 'workforce-growth', name: 'Workforce Growth', value: '12.4%', period: '2025', uaeRelevance: 'High' },
]

const tradeData = [
  { category: 'Total Trade', value: 'Dh6.014T ($1.637T)', change: 15, period: '2025' },
  { category: 'Goods Trade', value: 'Dh4.9T', period: '2025' },
  { category: 'Services Trade', value: 'Dh1.14T', period: '2025' },
  { category: 'Non-oil Goods', value: 'Dh3.8T', change: 27, period: '2025' },
  { category: 'Digital Services', value: '$33B', period: '2025' },
]

const tourismData = [
  { metric: 'UAE Tourism Revenue', value: 'AED 257.3B', period: '2025' },
  { metric: 'Dubai Visitors', value: '19.59M', change: 5, period: '2025' },
  { metric: 'Abu Dhabi Visitors', value: '26.6M', period: '2025' },
  { metric: 'Hotel Guests (Jan-Sep)', value: '23.3M', change: 4.9, period: '2025' },
  { metric: 'Hotel Occupancy (Dubai)', value: '79.2%', period: '2025' },
  { metric: 'Hotel Revenues', value: 'AED 49.21B', change: 10, period: '2025' },
]

const bankingData = [
  { metric: 'Banking Assets', value: 'Dh5.472T', change: 1.1, period: 'Feb 2026' },
  { metric: 'Credit Growth', value: '', change: 17.9, period: '2025' },
  { metric: 'Deposits Growth', value: '', change: 16.2, period: '2025' },
  { metric: 'Insurance Premiums', value: 'Dh75.2B', change: 15.5, period: '2025' },
]

const startupData = [
  { metric: 'Total Raised', value: '$2B', change: 32, deals: 218, period: '2025' },
  { metric: 'Total Startups', value: '52,700+', period: '2025' },
  { metric: 'Unicorns', value: '12', period: '2025' },
  { metric: 'Global Ranking', value: '21st', period: '2025' },
  { metric: 'Q1 2025 Tech Funding', value: '$872M', change: 194, period: 'Q1 2025' },
]

const laborMarketData = [
  { metric: 'Workforce Growth', value: '12.4%', change: '+1.5pp', period: '2025' },
  { metric: 'Skilled Labor Increase', value: '49.92%', period: '2025' },
  { metric: 'Establishment Growth', value: '7.8%', period: '2025' },
  { metric: 'Employee Optimism', value: '76%', change: 'MENA: 36%', period: '2026' },
]

const inflationData = [
  { period: 'Dubai Dec 2025', rate: 3.0, source: 'FocusEconomics' },
  { period: 'Dubai Nov 2025', rate: 2.7, source: 'FocusEconomics' },
  { period: 'UAE avg 2026', rate: 2.5, source: 'IMF' },
  { period: 'UAE 2025', rate: 2.1, source: 'FRED' },
]

const inflationComponents = [
  { component: 'Food and beverages', rate: 1.2, impact: 'Low' },
  { component: 'Transport', rate: 3.6, impact: 'Medium' },
  { component: 'Housing and utilities', rate: 5.1, impact: 'High' },
]

const fdiData = [
  { year: 2024, inflows: '$45.6B', growth: 48.7, rank: 2 },
  { year: 2023, inflows: '$30.7B', growth: 35 },
  { year: 2022, inflows: '$22.7B' },
]

const fdi2025 = { inflows: '$45B', growth: 50, greenfield: '$33.16B', rank: '10th globally' }

const prioritySectors = [
  { id: 1, sector: 'FinTech', priority: 'High', uaeRelevance: 'Critical' },
  { id: 2, sector: 'E-Commerce', priority: 'High', uaeRelevance: 'High' },
  { id: 3, sector: 'Healthcare', priority: 'High', uaeRelevance: 'High' },
  { id: 4, sector: 'Education', priority: 'High', uaeRelevance: 'High' },
  { id: 5, sector: 'Tourism', priority: 'High', uaeRelevance: 'High' },
  { id: 6, sector: 'Space', priority: 'High', uaeRelevance: 'High' },
  { id: 7, sector: 'Logistics', priority: 'High', uaeRelevance: 'High' },
  { id: 8, sector: 'ICT', priority: 'Critical', uaeRelevance: 'Critical' },
  { id: 9, sector: 'Manufacturing', priority: 'High', uaeRelevance: 'High' },
  { id: 10, sector: 'Renewable Energy', priority: 'Critical', uaeRelevance: 'Critical' },
  { id: 11, sector: 'Smart Cities', priority: 'High', uaeRelevance: 'High' },
]

const mediumTermOutlook = [
  { year: 2026, growth: 3.14, confidence: 'Medium' },
  { year: 2027, growth: 5.27, confidence: 'High' },
  { year: 2028, growth: 4.63, confidence: 'High' },
  { year: 2029, growth: 4.37, confidence: 'High' },
  { year: 2030, growth: 4.03, confidence: 'Medium' },
]

const keyGrowthDrivers = [
  'Non-oil sector expansion',
  'Infrastructure investment',
  'Tourism momentum',
  'Tech ecosystem growth',
  'Strategic FDI attraction',
]

const upsideRisks = [
  { risk: 'Strong fiscal buffers', probability: 'High', impact: 'Positive' },
  { risk: 'Diversified growth drivers', probability: 'High', impact: 'Positive' },
  { risk: 'Large sovereign wealth', probability: 'High', impact: 'Positive' },
]

const downsideRisks = [
  { risk: 'Geopolitical tensions', probability: 'Medium', impact: 'Negative' },
  { risk: 'Oil price volatility', probability: 'Medium', impact: 'Negative' },
  { risk: 'Tax reform 2027', probability: 'High', impact: 'Neutral' },
]

const creditRating = {
  sAndPRating: 'AA/A-1+',
  agency: 'S&P Global',
  outlook: 'Stable',
  governmentNetAssets: '~184% of GDP',
}

const federalBudget2026 = {
  totalRevenue: 'AED 92.4B',
  change: '+29% YoY',
}

const infrastructureProjects = [
  { sector: 'Energy', project: 'Multi-billion dirham projects', value: 'Billions' },
  { sector: 'Transport', project: 'DIFC expansion', value: '$27B' },
  { sector: 'Aviation', project: 'Al Maktoum Airport expansion' },
  { sector: 'Rail', project: 'Etihad Rail Network' },
  { sector: 'Urban', project: 'Dubai Creek Tower' },
  { sector: 'Metro', project: 'Dubai Metro Blue Line' },
]

const sectorPerformance = [
  { sector: 'Oil & Gas', value: '~25%', period: '2025', sentiment: 'stable' },
  { sector: 'Financial Services', value: 'High', period: '2025', sentiment: 'positive' },
  { sector: 'Manufacturing', value: 'Growing', period: '2025', sentiment: 'positive' },
  { sector: 'Tourism', value: 'Record', period: '2025', sentiment: 'positive' },
  { sector: 'Technology', value: 'Rapid', period: '2025', sentiment: 'positive' },
]

const gdpForecasts = [
  { source: 'UAE Central Bank', tier: 0, 2025: 5.6, 2026: 5.6, 2027: 4.4 },
  { source: 'World Bank', tier: 1, 2025: 5.4, 2026: 5.0, 2027: 5.1 },
  { source: 'IMF', tier: 1, 2025: 5.8, 2026: 3.14, 2027: 5.27 },
  { source: 'China Briefing', tier: 3, 2025: 5.4, 2026: 5.0 },
  { source: 'Statista', tier: 2, 2025: 5.8, 2026: 3.14, 2027: 5.27 },
]

const internationalComparisons = [
  { country: 'UAE', growth: 5.0 },
  { country: 'China', growth: 4.6 },
  { country: 'United States', growth: 2.3 },
  { country: 'Euro Area', growth: 1.1 },
  { country: 'GCC Average', growth: 4.8 },
]

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

export default function EconomicTrendsPage() {
  const { data: trendsData } = useTrendsDataArrayData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Economic Trends data...</div>
      </div>
    )
  }

  // Filter economic trend data
  const economicTrend = trendsData.find(t => t.category === 'economic')

  // Alternative data if no specific economic trend
  const economicData = economicTrend || {
    id: 'trend-economic',
    category: 'economic',
    name: 'Economic Trends',
    description: 'The UAE economy enters 2026 with strong momentum, projected to grow at 5.6% (Central Bank) to 5% (World Bank), outpacing the GCC average of 4.8%.',
    adoptionRate: 85,
    uaeAdoptionRate: 92,
    generationalBreakdown: {
      genZ: 72,
      millennial: 88,
      genX: 90,
      boomer: 78,
    },
    sentiment: {
      positive: 78,
      negative: 10,
      neutral: 12,
      overall: 0.76,
      volume: 156000,
    },
    forecasts: [
      {
        scenario: 'optimistic',
        probability: 0.82,
        timeline: '2026',
        indicators: ['GDP growth 5.6%', 'Trade $1.637T (9th globally)', 'FDI $45B (+50% YoY)'],
      },
      {
        scenario: 'baseline',
        probability: 0.68,
        timeline: '2026-2027',
        indicators: ['GDP $967.62B', 'Tourism AED 257.3B', 'Startup ecosystem $2B (218 deals)'],
      },
      {
        scenario: 'pessimistic',
        probability: 0.25,
        timeline: '2026-2028',
        indicators: ['Regional geopolitical tensions', 'Oil production 2.37M bpd (-35%)', 'Property market -7% annually'],
      },
    ],
    keyDrivers: [
      'GDP growth 5.0-5.6% outpacing GCC average 4.8%',
      'Total trade Dh6.014 trillion ($1.637 trillion), ranking 9th globally',
      'FDI inflows $45 billion with 50% year-on-year increase',
      'Banking sector assets Dh5.472 trillion (Feb 2026), +1.1%',
      'Startup ecosystem $2B across 218 deals (+32% growth)',
    ],
    credibility: {
      tier: 0 as const,
      score: 95,
      sources: 14,
      lastVerified: '2026-04-27',
    },
    uaeRelevance: {
      score: 99,
      level: 'critical' as const,
      justification: 'Core economic indicators show strong growth trajectory',
    },
    alertLevel: 'GREEN' as const,
    sources: [
      { name: 'UAE Central Bank', tier: 0 as const, date: '2026-04-27' },
      { name: 'World Bank', tier: 1 as const, date: '2026-04-27' },
    ],
    lastUpdated: '2026-04-27',
  }

  // GDP growth data
  const gdpGrowthData = gdpHistoricalData.map(d => ({
    year: d.year.toString(),
    growth: d.growth,
    color: d.growth >= 5 ? CHART_COLORS.emerald : d.growth >= 0 ? CHART_COLORS.gold : CHART_COLORS.rose,
  }))

  // Sector contribution
  const sectorData = sectorPerformance.map((s, idx) => ({
    name: s.sector,
    value: s.sentiment === 'positive' ? 30 - idx * 3 : 15 - idx * 2,
    color: s.sentiment === 'positive' ? CHART_COLORS.emerald : s.sentiment === 'stable' ? CHART_COLORS.gold : CHART_COLORS.rose,
  }))

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: economicData.sentiment?.positive || 78, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: economicData.sentiment?.neutral || 12, color: CHART_COLORS.gold },
    { name: 'Negative', value: economicData.sentiment?.negative || 10, color: CHART_COLORS.rose },
  ]

  // Key drivers list
  const keyDrivers = economicData.keyDrivers || [
    'GDP growth 5.0-5.6% outpacing GCC average 4.8%',
    'Total trade Dh6.014 trillion ($1.637 trillion)',
    'FDI inflows $45 billion with 50% YoY increase',
    'Banking sector assets Dh5.472 trillion',
    'Startup ecosystem $2B across 218 deals',
  ]

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
            <Badge variant="gold" className="mb-2">ECONOMIC TRENDS</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold gradient-text-gold-700"
          >
            Economic Trends
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-platinum-400"
          >
            GDP growth, trade performance, FDI inflows, and economic diversification metrics
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Briefcase className="h-4 w-4" />
            View Reports
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze Market
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
            title="GDP Growth (2026)"
            value="5.6%"
            previousValue={3.4}
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="gold"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Total Trade"
            value="$1.64T"
            previousValue={1.42}
            icon={<Globe className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="FDI Inflows"
            value="$45B"
            previousValue={30}
            icon={<Wallet className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="UAE Adoption"
            value={`${economicData.uaeAdoptionRate || 92}%`}
            previousValue={(economicData.uaeAdoptionRate || 92) - 4}
            icon={<Scale className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
      </motion.div>

      {/* Enhanced KPI Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <GlassPanel title="Tier-1 Critical KPIs" description="Core economic indicators from MD file data">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tier1KPIs.slice(0, 8).map((kpi, idx) => (
              <motion.div
                key={kpi.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="glass-panel p-4 rounded-xl hover:shadow-glass-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-xs font-medium text-platinum-500 dark:text-platinum-400">{kpi.name}</p>
                    <p className="mt-1 text-xl font-bold text-navy-900 dark:text-platinum-100">{kpi.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {kpi.changeType === 'up' && (
                        <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                      )}
                      {kpi.changeType === 'down' && (
                        <ArrowDownRight className="h-3 w-3 text-red-500" />
                      )}
                      {kpi.change && (
                        <span className={`text-xs font-medium ${kpi.changeType === 'up' ? 'text-emerald-500' : kpi.changeType === 'down' ? 'text-red-500' : 'text-platinum-500'}`}>
                          {kpi.change > 0 ? '+' : ''}{kpi.change}% YoY
                        </span>
                      )}
                    </div>
                  </div>
                  <Badge variant={kpi.uaeRelevance === 'Critical' ? 'gold' : 'secondary'} className="text-[10px]">
                    {kpi.period}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gdp">GDP Analysis</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
          <TabsTrigger value="trade">Trade</TabsTrigger>
          <TabsTrigger value="finance">Banking & Finance</TabsTrigger>
          <TabsTrigger value="forecast">Forecasts</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="Economic Trends Overview" description="Key economic indicators and performance metrics">
              <div className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">GDP Growth Rate (%)</CardTitle>
                      <CardDescription>Year-over-year economic growth 2019-2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={gdpGrowthData}
                        xAxisKey="year"
                        bars={[
                          { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.gold },
                        ]}
                        height={300}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                        <CardDescription>Economic sentiment analysis</CardDescription>
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

                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Key Economic Drivers</CardTitle>
                        <CardDescription>Major factors driving economic growth</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {keyDrivers.slice(0, 5).map((driver, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3 hover:bg-platinum-800/70 transition-colors"
                            >
                              <TrendingUp className="h-5 w-5 text-gold-700 mt-0.5" />
                              <span className="text-sm text-platinum-200">{driver}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* GDP Analysis Tab */}
        <TabsContent value="gdp" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="GDP Analysis" description="Economic growth and performance indicators">
              <div className="space-y-6">
                <motion.div variants={scaleIn}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">GDP Growth Rate (%)</CardTitle>
                      <CardDescription>Year-over-year economic growth 2019-2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={gdpGrowthData}
                        xAxisKey="year"
                        bars={[
                          { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.gold },
                        ]}
                        height={300}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">GDP Forecasts by Source</CardTitle>
                        <CardDescription>2025-2027 projections from major institutions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {gdpForecasts.map((forecast, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                              <div className="flex items-center gap-2">
                                <Badge variant={forecast.tier === 0 ? 'gold' : forecast.tier === 1 ? 'default' : 'secondary'} className="text-[10px]">
                                  Tier-{forecast.tier}
                                </Badge>
                                <span className="text-sm font-medium text-platinum-200">{forecast.source}</span>
                              </div>
                              <div className="flex gap-2 text-xs">
                                <span className="text-platinum-400">{forecast[2025]}%</span>
                                <ArrowRight className="h-3 w-3 text-platinum-500" />
                                <span className="text-gold-700 font-bold">{forecast[2026]}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">International Comparisons</CardTitle>
                        <CardDescription>UAE vs major economies (World Bank)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={internationalComparisons}
                          xAxisKey="country"
                          bars={[
                            { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.navy },
                          ]}
                          height={250}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Medium-Term Outlook (IMF)</CardTitle>
                      <CardDescription>2026-2031 growth projections</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={mediumTermOutlook.map(d => ({ year: d.year.toString(), growth: d.growth, confidence: d.confidence }))}
                        xAxisKey="year"
                        areas={[
                          { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.emerald },
                        ]}
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Sectors Tab */}
        <TabsContent value="sectors" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="Economic Sectors" description="Performance breakdown by economic sector">
              <div className="space-y-6">
                <motion.div variants={scaleIn}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Sector Performance</CardTitle>
                      <CardDescription>Current status by sector</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {sectorPerformance.map((sector, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-panel p-4 rounded-xl hover:shadow-glass-lg transition-all duration-300"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div
                                className={`h-2 w-2 rounded-full ${sector.sentiment === 'positive' ? 'bg-emerald-500' : sector.sentiment === 'stable' ? 'bg-gold-500' : 'bg-red-500'}`}
                              />
                              <span className="text-sm font-medium text-platinum-200">{sector.sector}</span>
                            </div>
                            <p className="text-lg font-bold text-gold-700">{sector.value}</p>
                            <p className="text-xs text-platinum-500">{sector.period}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">16 Priority Diversification Sectors</CardTitle>
                      <CardDescription>National Investment Strategy targets</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {prioritySectors.map((sector) => (
                          <div
                            key={sector.id}
                            className={`p-3 rounded-lg border ${
                              sector.uaeRelevance === 'Critical'
                                ? 'border-gold-700/50 bg-gold-700/5'
                                : sector.uaeRelevance === 'High'
                                ? 'border-emerald-500/30 bg-emerald-500/5'
                                : 'border-platinum-500/20 bg-platinum-500/5'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <span className="text-sm font-medium text-platinum-200">{sector.sector}</span>
                              <Badge
                                variant={sector.priority === 'Critical' ? 'gold' : 'secondary'}
                                className="text-[10px]"
                              >
                                {sector.priority}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Tier-2 Sectoral KPIs</CardTitle>
                      <CardDescription>Detailed sector metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {tier2SectorKPIs.map((kpi, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-medium text-platinum-200">{kpi.name}</span>
                              <Badge variant="outline" className="text-[10px]">{kpi.period}</Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-gold-700">{kpi.value}</span>
                              {kpi.change && (
                                <span className="text-xs text-emerald-500">+{kpi.change}%</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Trade Tab */}
        <TabsContent value="trade" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="Trade & Commerce" description="External trade performance and breakdown">
              <div className="space-y-6">
                <motion.div variants={scaleIn}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Trade Data Breakdown</CardTitle>
                      <CardDescription>2025 performance by category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {tradeData.map((trade, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4">
                            <div>
                              <span className="text-sm font-medium text-platinum-200">{trade.category}</span>
                              <p className="text-xs text-platinum-500">{trade.period}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xl font-bold text-gold-700">{trade.value}</span>
                              {trade.change && (
                                <Badge variant="success" className="text-xs">+{trade.change}%</Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Tourism Performance</CardTitle>
                      <CardDescription>2025 visitor and revenue data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {tourismData.map((tourism, idx) => (
                          <div key={idx} className="glass-panel p-4 rounded-xl">
                            <p className="text-xs text-platinum-500">{tourism.metric}</p>
                            <p className="mt-1 text-xl font-bold text-gold-700">{tourism.value}</p>
                            {tourism.change && (
                              <p className="text-xs text-emerald-500">+{tourism.change}% YoY</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">FDI Inflows</CardTitle>
                      <CardDescription>Foreign direct investment trends</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {fdiData.map((fdi, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4">
                            <div>
                              <span className="text-sm font-medium text-platinum-200">{fdi.year}</span>
                              {fdi.rank && (
                                <Badge variant="gold" className="ml-2 text-[10px]">Rank #{fdi.rank}</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xl font-bold text-gold-700">{fdi.inflows}</span>
                              {fdi.growth && (
                                <Badge variant="success" className="text-xs">+{fdi.growth}%</Badge>
                              )}
                            </div>
                          </div>
                        ))}
                        <div className="mt-4 p-4 rounded-lg bg-gold-700/10 border border-gold-700/30">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gold-700">2025 FDI Performance</span>
                            <Badge variant="gold">{fdi2025.rank}</Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mt-3">
                            <div>
                              <p className="text-xs text-platinum-500">Total Inflows</p>
                              <p className="text-lg font-bold text-gold-700">{fdi2025.inflows}</p>
                            </div>
                            <div>
                              <p className="text-xs text-platinum-500">YoY Growth</p>
                              <p className="text-lg font-bold text-emerald-500">+{fdi2025.growth}%</p>
                            </div>
                            <div>
                              <p className="text-xs text-platinum-500">Greenfield</p>
                              <p className="text-lg font-bold text-gold-700">{fdi2025.greenfield}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Banking & Finance Tab */}
        <TabsContent value="finance" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="Banking & Financial Sector" description="Financial sector performance metrics">
              <div className="space-y-6">
                <motion.div variants={scaleIn}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Banking Sector Metrics</CardTitle>
                      <CardDescription>2025-2026 performance indicators</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {bankingData.map((bank, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4">
                            <span className="text-sm font-medium text-platinum-200">{bank.metric}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-gold-700">{bank.value || `${bank.change}%`}</span>
                              {bank.change && <Badge variant="success" className="text-xs">+{bank.change}%</Badge>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Startup Ecosystem</CardTitle>
                        <CardDescription>2025 funding and growth metrics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {startupData.map((startup, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                              <span className="text-sm text-platinum-200">{startup.metric}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-gold-700">{startup.value}</span>
                                {startup.change && (
                                  <Badge variant="success" className="text-xs">+{startup.change}%</Badge>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Labor Market</CardTitle>
                        <CardDescription>Workforce and employment data</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {laborMarketData.map((labor, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                              <span className="text-sm text-platinum-200">{labor.metric}</span>
                              <span className="text-lg font-bold text-gold-700">{labor.value}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Credit Rating & Fiscal Position</CardTitle>
                      <CardDescription>S&P Global assessment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="glass-panel p-4 rounded-xl text-center">
                          <p className="text-xs text-platinum-500">S&P Rating</p>
                          <p className="mt-1 text-2xl font-bold text-gold-700">{creditRating.sAndPRating}</p>
                          <Badge variant="success" className="mt-2">{creditRating.outlook}</Badge>
                        </div>
                        <div className="glass-panel p-4 rounded-xl text-center">
                          <p className="text-xs text-platinum-500">Agency</p>
                          <p className="mt-1 text-lg font-bold text-platinum-200">{creditRating.agency}</p>
                        </div>
                        <div className="glass-panel p-4 rounded-xl text-center">
                          <p className="text-xs text-platinum-500">Gov Net Assets</p>
                          <p className="mt-1 text-2xl font-bold text-emerald-500">{creditRating.governmentNetAssets}</p>
                        </div>
                        <div className="glass-panel p-4 rounded-xl text-center">
                          <p className="text-xs text-platinum-500">2026 Budget</p>
                          <p className="mt-1 text-xl font-bold text-gold-700">{federalBudget2026.totalRevenue}</p>
                          <p className="text-xs text-emerald-500">{federalBudget2026.change}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Inflation Data</CardTitle>
                      <CardDescription>Consumer price indices</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                          {inflationData.map((inf, idx) => (
                            <div key={idx} className="glass-panel p-3 rounded-xl">
                              <p className="text-xs text-platinum-500">{inf.period}</p>
                              <p className="mt-1 text-xl font-bold text-gold-700">{inf.rate}%</p>
                              <p className="text-[10px] text-platinum-600">{inf.source}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-medium text-platinum-200 mb-3">Component Breakdown (Dubai, Dec 2025)</p>
                          <div className="space-y-2">
                            {inflationComponents.map((comp, idx) => (
                              <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                                <span className="text-sm text-platinum-200">{comp.component}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-lg font-bold text-gold-700">{comp.rate}%</span>
                                  <Badge
                                    variant={
                                      comp.impact === 'High' ? 'destructive' :
                                      comp.impact === 'Medium' ? 'warning' : 'secondary'
                                    }
                                    className="text-[10px]"
                                  >
                                    {comp.impact}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Forecasts Tab */}
        <TabsContent value="forecast" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="Economic Forecasts" description="Predictive scenarios for UAE economic outlook">
              <div className="space-y-6">
                {economicData.forecasts?.map((forecast, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.01 }}
                    className="transition-transform"
                  >
                    <Card className="glass-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg capitalize flex items-center gap-2">
                            <Target className="h-5 w-5 text-gold-700" />
                            {forecast.scenario} Scenario
                          </CardTitle>
                          <Badge
                            variant={forecast.scenario === 'optimistic' ? 'success' : forecast.scenario === 'baseline' ? 'default' : 'destructive'}
                          >
                            {Math.round(forecast.probability * 100)}% probability
                          </Badge>
                        </div>
                        <CardDescription>Timeline: {forecast.timeline}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {forecast.indicators?.map((indicator, iIdx) => (
                            <motion.div
                              key={iIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: iIdx * 0.1 }}
                              className="flex items-start gap-2 rounded-lg bg-platinum-800/50 p-3 hover:bg-platinum-800/70 transition-colors"
                            >
                              <TrendingUp className="h-4 w-4 text-gold-700 mt-0.5" />
                              <span className="text-sm text-platinum-200">{indicator}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Growth Drivers</CardTitle>
                      <CardDescription>Factors supporting economic expansion</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        {keyGrowthDrivers.map((driver, idx) => (
                          <div key={idx} className="flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3">
                            <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                            <span className="text-sm text-platinum-200">{driver}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Award className="h-5 w-5 text-emerald-500" />
                          Upside Risks
                        </CardTitle>
                        <CardDescription>Positive risk factors</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {upsideRisks.map((risk, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3">
                              <span className="text-sm text-platinum-200">{risk.risk}</span>
                              <Badge variant="success" className="text-[10px]">{risk.probability}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Activity className="h-5 w-5 text-red-500" />
                          Downside Risks
                        </CardTitle>
                        <CardDescription>Risk factors that could limit growth</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {downsideRisks.map((risk, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded-lg bg-red-500/10 border border-red-500/20 p-3">
                              <span className="text-sm text-platinum-200">{risk.risk}</span>
                              <Badge variant="destructive" className="text-[10px]">{risk.probability}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Infrastructure Projects</CardTitle>
                      <CardDescription>Major 2026 infrastructure developments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {infrastructureProjects.map((project, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="glass-panel p-4 rounded-xl hover:shadow-glass-lg transition-all duration-300 cursor-pointer"
                          >
                            <Badge variant="outline" className="text-[10px] mb-2">{project.sector}</Badge>
                            <p className="text-sm font-medium text-platinum-200 mt-2">{project.project}</p>
                            {project.value !== '-' && (
                              <p className="text-xs text-gold-700 mt-1">{project.value}</p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
