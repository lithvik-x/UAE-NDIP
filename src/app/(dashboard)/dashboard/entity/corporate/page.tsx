// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel, GlassCard } from '@/components/dashboard/glass-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  BarChart,
  PieChart,
  LineChart,
  RadarChart,
  AreaChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Building2,
  TrendingUp,
  Users,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  Globe,
  Star,
  ChevronRight,
  Plane,
  Landmark,
  Briefcase,
  ShoppingBag,
  Tv,
  Home,
  Factory,
  Laptop,
  Building,
  Activity,
} from 'lucide-react'
import {
  corporateEntitiesData,
  adnocData,
  mubadalaData,
  dpWorldData,
  emiratesData,
  etihadData,
  fabData,
  emiratesNbdData,
  adcbData,
  dibData,
  etisalatData,
  duData,
  emaarData,
  luluData,
  jumeirahData,
  alHabtoorData,
  microsoftUaeData,
  awsUaeData,
  hsbcUaeData,
  mcKinseyData,
  carrefourData,
  marriottData,
  soeSummary,
  sectorPerformance,
  controversiesSummary,
  majorAcquisitions,
  financialPerformanceTable,
  fleetComparison,
  nationalCriticality,
  sentimentAnalysis,
} from '@/lib/data/entity/corporate-entities-data'

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
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const cardHover = {
  rest: { scale: 1, boxShadow: '0 0 0 0 transparent' },
  hover: {
    scale: 1.02,
    boxShadow: '0 8px 30px -12px rgba(0,0,0,0.15)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

// Get sector icon
const getSectorIcon = (sector: string) => {
  switch (sector.toLowerCase()) {
    case 'oil & gas': return <Factory className="h-4 w-4" />
    case 'aviation': return <Plane className="h-4 w-4" />
    case 'banking': return <Landmark className="h-4 w-4" />
    case 'logistics': return <Globe className="h-4 w-4" />
    case 'real estate': return <Home className="h-4 w-4" />
    case 'retail': return <ShoppingBag className="h-4 w-4" />
    case 'telecom': return <Tv className="h-4 w-4" />
    case 'hospitality': return <Building className="h-4 w-4" />
    case 'sovereign wealth': return <Briefcase className="h-4 w-4" />
    case 'consulting': return <Laptop className="h-4 w-4" />
    default: return <Activity className="h-4 w-4" />
  }
}

// Get sentiment badge
const getSentimentBadge = (sentiment: string) => {
  switch (sentiment) {
    case 'HIGHLY_POSITIVE':
      return <Badge variant="success" className="text-xs">Highly Positive</Badge>
    case 'POSITIVE':
      return <Badge variant="success" className="text-xs">Positive</Badge>
    case 'NEUTRAL':
      return <Badge variant="secondary" className="text-xs">Neutral</Badge>
    case 'MIXED':
      return <Badge variant="warning" className="text-xs">Mixed</Badge>
    case 'NEGATIVE':
      return <Badge variant="destructive" className="text-xs">Negative</Badge>
    default:
      return <Badge variant="secondary" className="text-xs">{sentiment}</Badge>
  }
}

// Get criticality badge
const getCriticalityBadge = (criticality: string) => {
  switch (criticality) {
    case 'CRITICAL':
      return <Badge variant="destructive" className="text-xs gap-1"><AlertTriangle className="h-3 w-3" /> Critical</Badge>
    case 'HIGH':
      return <Badge variant="warning" className="text-xs gap-1"><AlertTriangle className="h-3 w-3" /> High</Badge>
    case 'MEDIUM':
      return <Badge variant="default" className="text-xs">Medium</Badge>
    case 'LOW':
      return <Badge variant="secondary" className="text-xs">Low</Badge>
    default:
      return <Badge variant="secondary" className="text-xs">{criticality}</Badge>
  }
}

export default function CorporateEntitiesPage() {
  const data = corporateEntitiesData
  const overview = data.overview
  const metrics = data.summaryMetrics

  // Calculate aggregated metrics
  const totalRevenue = financialPerformanceTable.reduce((acc, e) => {
    if (e.revenue) {
      const val = parseFloat(e.revenue.replace(/[$,B]/g, ''))
      return acc + (isNaN(val) ? 0 : val)
    }
    return acc
  }, 0)

  const totalAssets = [
    { value: '$330B', entity: 'FAB' },
    { value: '$295.7B', entity: 'Emirates NBD' },
    { value: '$148B', entity: 'ADCB' },
    { value: '$94B', entity: 'DIB' },
  ].reduce((acc, e) => {
    const val = parseFloat(e.value.replace(/[$,B]/g, ''))
    return acc + (isNaN(val) ? 0 : val)
  }, 0)

  // Sentiment distribution for pie chart
  const sentimentCounts = sentimentAnalysis.reduce((acc, e) => {
    acc[e.sentiment] = (acc[e.sentiment] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const sentimentChartData = [
    { name: 'Highly Positive', value: sentimentCounts['HIGHLY_POSITIVE'] || 0, color: CHART_COLORS.emerald },
    { name: 'Positive', value: sentimentCounts['POSITIVE'] || 0, color: CHART_COLORS.success },
    { name: 'Neutral', value: sentimentCounts['NEUTRAL'] || 0, color: CHART_COLORS.platinum },
    { name: 'Mixed', value: sentimentCounts['MIXED'] || 0, color: CHART_COLORS.warning },
  ].filter(d => d.value > 0)

  // SOE chart data
  const soeChartData = soeSummary.map((soe) => ({
    name: soe.company,
    value: parseFloat(soe.value.replace(/[$,B]/g, '').replace('T', '000')),
    type: soe.type,
  }))

  // Criticality distribution
  const criticalityCounts = nationalCriticality.reduce((acc, e) => {
    acc[e.criticality] = (acc[e.criticality] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const criticalityChartData = [
    { name: 'Critical', value: criticalityCounts['CRITICAL'] || 0, color: CHART_COLORS.rose },
    { name: 'High', value: criticalityCounts['HIGH'] || 0, color: CHART_COLORS.warning },
    { name: 'Medium', value: criticalityCounts['MEDIUM'] || 0, color: CHART_COLORS.denim },
    { name: 'Low', value: criticalityCounts['LOW'] || 0, color: CHART_COLORS.platinum },
  ]

  // Financial performance chart data
  const financialChartData = financialPerformanceTable.map((fp) => ({
    name: fp.entity,
    revenue: fp.revenue ? parseFloat(fp.revenue.replace(/[$,B]/g, '')) : 0,
    profit: fp.profit ? parseFloat(fp.profit.replace(/[$,B]/g, '')) : 0,
  }))

  // Sector performance chart
  const sectorChartData = sectorPerformance.map((sp) => ({
    name: sp.sector,
    driver: sp.keyGrowthDriver,
  }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2">CORPORATE ENTITIES</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy-500">Entity Intelligence</h1>
          <p className="mt-2 text-platinum-500-600 dark:text-platinum-500-400">
            Major UAE corporations — SOEs, banks, airlines, telcos, real estate & retail — {overview.totalEntities} entities tracked
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/30 text-navy-500 hover:bg-navy/10">
            <Globe className="h-4 w-4" />
            Export List
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-platinum-500-100 gap-2">
            <Star className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>
      </motion.div>

      {/* Summary Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Entities Tracked"
          value={overview.totalEntities}
          icon={<Building2 className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Total Revenue"
          value={`$${totalRevenue.toFixed(0)}B`}
          icon={<DollarSign className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Total Assets"
          value={`$${totalAssets.toFixed(0)}B`}
          icon={<Landmark className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Data Sources"
          value={overview.totalSources}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="purple"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="state-owned">State-Owned Enterprises</TabsTrigger>
          <TabsTrigger value="airlines">Airlines</TabsTrigger>
          <TabsTrigger value="banking">Banking & Finance</TabsTrigger>
          <TabsTrigger value="telecom">Telecommunications</TabsTrigger>
          <TabsTrigger value="realestate">Real Estate & Retail</TabsTrigger>
          <TabsTrigger value="international">Intl. Corps in UAE</TabsTrigger>
          <TabsTrigger value="financial">Financial Performance</TabsTrigger>
          <TabsTrigger value="controversies">Controversies</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sentiment Analysis</CardTitle>
                <CardDescription>Overall sentiment across tracked entities</CardDescription>
              </CardHeader>
              <CardContent>
                {sentimentChartData.length > 0 ? (
                  <PieChart
                    data={sentimentChartData}
                    height={250}
                    showLegend={true}
                    donut={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500-500">No sentiment data available</div>
                )}
              </CardContent>
            </Card>

            {/* National Criticality */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">National Criticality Rating</CardTitle>
                <CardDescription>Entity importance to UAE national interests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nationalCriticality.map((entity, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getSectorIcon(entity.entity)}
                        <span className="text-sm font-medium text-platinum-500-700 dark:text-platinum-500-300">{entity.entity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-platinum-500-500">{entity.rationale}</span>
                        {getCriticalityBadge(entity.criticality)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sector Performance */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sector Performance</CardTitle>
                <CardDescription>Top performers by sector</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sectorPerformance.map((sector, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getSectorIcon(sector.sector)}
                          <span className="text-sm font-semibold text-platinum-500-700 dark:text-platinum-500-300">{sector.sector}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">{sector.topPerformer}</Badge>
                      </div>
                      <p className="text-xs text-platinum-500-500 pl-6">{sector.keyGrowthDriver}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Investment Climate */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Investment Climate</CardTitle>
                <CardDescription>UAE economic indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.investmentClimateIndicators.map((indicator, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-platinum-500-700 dark:text-platinum-500-300">{indicator.indicator}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="success" className="text-xs">{indicator.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Sector Performance Radar Chart */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani">Sector Performance Radar</CardTitle>
              <CardDescription>Comparative analysis across UAE corporate sectors</CardDescription>
            </CardHeader>
            <CardContent>
              <RadarChart
                data={[
                  { name: 'Oil & Gas', value: 95 },
                  { name: 'Aviation', value: 88 },
                  { name: 'Banking', value: 92 },
                  { name: 'Logistics', value: 78 },
                  { name: 'Telecom', value: 85 },
                  { name: 'Real Estate', value: 75 },
                ]}
                metrics={[
                  { dataKey: 'value', name: 'Performance Score', color: CHART_COLORS.navy },
                ]}
                height={280}
                showLegend={false}
              />
            </CardContent>
          </Card>

        {/* State-Owned Enterprises Tab */}
        <TabsContent value="state-owned" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* ADNOC */}
            <GlassPanel
              title="ADNOC"
              description="Abu Dhabi National Oil Company"
              badge="CRITICAL"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Oil Production</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">4M bpd</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Proven Reserves</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">105B barrels</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Employees</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">207,356</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Subsidiaries</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">16</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Key 2024-2025 Transactions</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-platinum-500-600 dark:text-platinum-500-400">Covestro Acquisition</span>
                      <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">$16.3B</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-platinum-500-600 dark:text-platinum-500-400">OCI/Fertiglobe</span>
                      <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">$3.62B</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Decarbonization Commitment</p>
                  <div className="space-y-1 text-xs">
                    <p>Net Zero: 2045 | Carbon Intensity -25% by 2030</p>
                    <p>Carbon Capture: 10M tonnes/year by 2030</p>
                    <p className="font-semibold">Total Commitment: $23B</p>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Mubadala */}
            <GlassPanel
              title="Mubadala Investment"
              description="Sovereign Wealth Fund"
              badge="HIGH"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">AUM (2025)</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">$385B</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">+17% YoY</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">5-Year Returns</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">&gt;10%</p>
                    <p className="text-xs text-platinum-500-500">Annualized</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Notable Investments</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-platinum-500-600 dark:text-platinum-500-400">GlobalFoundries</span>
                      <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">$22.4B+</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-platinum-500-600 dark:text-platinum-500-400">Fortress (2023)</span>
                      <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">$3B</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-platinum-500-600 dark:text-platinum-500-400">Telegram</span>
                      <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">$225M</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Global Offices</p>
                  <div className="flex flex-wrap gap-1">
                    {['Abu Dhabi', 'London', 'Rio', 'New York', 'San Francisco', 'Beijing'].map((city) => (
                      <Badge key={city} variant="outline" className="text-xs">{city}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* ADIA */}
            <GlassPanel
              title="ADIA"
              description="Abu Dhabi Investment Authority"
              badge="HIGH"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Assets Under Management</p>
                    <p className="text-2xl font-bold text-navy-500-900 dark:text-platinum-500-100">$1.057T</p>
                    <p className="text-xs text-platinum-500-500">Estimated</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Founded</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">1976</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Investment Strategy</p>
                  <div className="flex flex-wrap gap-1">
                    {['Equities', 'Fixed Income', 'Infrastructure', 'Real Estate', 'Private Equity', 'Hedge Funds'].map((asset) => (
                      <Badge key={asset} variant="outline" className="text-xs">{asset}</Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Notable Investments</p>
                  <div className="space-y-1 text-xs">
                    <p>Citigroup: $7B (2008 crisis)</p>
                    <p>DigitalBridge: 40% stake (2024)</p>
                    <p>Fisher Investments: $3B (2024-25)</p>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* DP World */}
            <GlassPanel
              title="DP World"
              description="Emirati Multinational Logistics"
              badge="HIGH"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Revenue (2025)</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">$24.4B</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">+22% YoY</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Throughput</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">93.4M TEU</p>
                    <p className="text-xs text-platinum-500-500">+5.8%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Net Profit</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">$1.96B</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">+32.2%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Terminals</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">82</p>
                    <p className="text-xs text-platinum-500-500">40+ countries</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">2026 Strategic Focus</p>
                  <div className="flex flex-wrap gap-1">
                    {['Jebel Ali', 'Drydocks World', 'London Gateway', 'Ndayane', 'Jeddah'].map((focus) => (
                      <Badge key={focus} variant="outline" className="text-xs">{focus}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* SOE Comparison Chart */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">SOE Comparison</CardTitle>
              <CardDescription>Key metrics across major state-owned enterprises</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={[
                  { name: 'ADNOC', assets: 1000, revenue: 0 },
                  { name: 'Mubadala', assets: 385, revenue: 0 },
                  { name: 'ADIA', assets: 1057, revenue: 0 },
                  { name: 'DP World', assets: 0, revenue: 24.4 },
                  { name: 'FAB', assets: 330, revenue: 0 },
                  { name: 'Emirates NBD', assets: 295.7, revenue: 0 },
                ]}
                xAxisKey="name"
                bars={[
                  { dataKey: 'assets', name: 'Assets ($B)', color: CHART_COLORS.navy },
                  { dataKey: 'revenue', name: 'Revenue ($B)', color: CHART_COLORS.gold },
                ]}
                height={300}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Airlines Tab */}
        <TabsContent value="airlines" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Emirates */}
            <GlassPanel
              title="Emirates Airline"
              description="Flagship carrier of Dubai"
              badge="CRITICAL"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Profit (2024-25)</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$5.8B</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">+20% YoY</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Revenue</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$34.9B</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">+6%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Passengers</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">53.7M</p>
                    <p className="text-xs text-platinum-500-500">+3%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Profit Margin</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">14.9%</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Fleet (March 2026)</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">A380:</span>
                      <span className="font-semibold">116</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">Boeing 777:</span>
                      <span className="font-semibold">133</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">Cargo:</span>
                      <span className="font-semibold">13</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">Order Book:</span>
                      <span className="font-semibold">314</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Network</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">Destinations:</span>
                      <span className="font-semibold">148 cities</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">Countries:</span>
                      <span className="font-semibold">80</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">Weekly Flights:</span>
                      <span className="font-semibold">3,600+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">Seat Factor:</span>
                      <span className="font-semibold">78.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Etihad */}
            <GlassPanel
              title="Etihad Airways"
              description="Abu Dhabi flag carrier"
              badge="HIGH"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Profit (2025)</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$698M</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">+47% YoY</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Revenue</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$8.4B</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">+21%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Passengers</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">22.4M</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">+21%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Load Factor</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">88.3%</p>
                    <p className="text-xs text-platinum-500-500">+2pp</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Turnaround Story</p>
                  <div className="space-y-1 text-xs">
                    <p className="text-platinum-500-600 dark:text-platinum-500-400">2016-2021: $7B+ cumulative losses</p>
                    <p className="text-emerald-600 dark:text-emerald-400">2022: Return to profit ($25M)</p>
                    <p className="text-emerald-600 dark:text-emerald-400">2025: Record profit ($698M)</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">New 2025 Routes</p>
                  <div className="flex flex-wrap gap-1">
                    {['Atlanta', 'Prague', 'Warsaw', 'Addis Ababa', 'Phnom Penh', 'Hanoi', 'Hong Kong'].map((route) => (
                      <Badge key={route} variant="outline" className="text-xs">{route}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* Fleet Comparison */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Airline Fleet Comparison</CardTitle>
              <CardDescription>Emirates vs Etihad fleet and network metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Airline</TableHead>
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Fleet Size</TableHead>
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Aircraft Types</TableHead>
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Order Book</TableHead>
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Destinations</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fleetComparison.map((airline, idx) => (
                    <TableRow key={idx} className="border-b border-platinum-100/50 dark:border-platinum-800/50">
                      <TableCell className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{airline.airline}</TableCell>
                      <TableCell className="text-platinum-500-700 dark:text-platinum-500-300">{airline.fleetSize}</TableCell>
                      <TableCell className="text-platinum-500-700 dark:text-platinum-500-300">{airline.aircraftTypes}</TableCell>
                      <TableCell className="text-platinum-500-700 dark:text-platinum-500-300">{airline.orderBook}</TableCell>
                      <TableCell className="text-platinum-500-700 dark:text-platinum-500-300">{airline.destinations}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Emirates Financial Performance Area Chart */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani">Emirates Group Financial Trends</CardTitle>
              <CardDescription>Revenue and profit trajectory 2024-2025 (AED)</CardDescription>
            </CardHeader>
            <CardContent>
              <AreaChart
                data={[
                  { name: 'Q1 24', revenue: 32, profit: 4.5 },
                  { name: 'Q2 24', revenue: 35, profit: 5.1 },
                  { name: 'Q3 24', revenue: 38, profit: 5.8 },
                  { name: 'Q4 24', revenue: 40, profit: 6.2 },
                  { name: 'Q1 25', revenue: 42, profit: 7.0 },
                ]}
                xAxisKey="name"
                areas={[
                  { dataKey: 'revenue', name: 'Revenue (AED B)', color: CHART_COLORS.navy, fillOpacity: 0.3 },
                  { dataKey: 'profit', name: 'Profit (AED B)', color: CHART_COLORS.gold, fillOpacity: 0.3 },
                ]}
                height={280}
                showGrid={true}
              />
            </CardContent>
          </Card>

        {/* Banking Tab */}
        <TabsContent value="banking" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* FAB */}
            <GlassPanel
              title="First Abu Dhabi Bank (FAB)"
              description="Largest UAE financial institution"
              badge="CRITICAL"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Total Assets</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$330B</p>
                    <p className="text-xs text-platinum-500-500">AED 1.21T</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Net Profit (2024)</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$4.66B</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">+4% YoY</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">UAE Market Share</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">27%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Return on Equity</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">16.8%</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Revenue by Business Line (2024)</p>
                  <div className="space-y-2">
                    {[
                      { name: 'Investment Banking', value: 'AED 10.9B', change: '+19%' },
                      { name: 'Global Markets', value: 'AED 7.4B', change: '+18%' },
                      { name: 'Corporate & Commercial', value: 'AED 7.2B', change: '+5%' },
                      { name: 'Consumer Banking', value: 'AED 4.5B', change: '+18%' },
                    ].map((line) => (
                      <div key={line.name} className="flex justify-between text-xs">
                        <span className="text-platinum-500-600 dark:text-platinum-500-400">{line.name}</span>
                        <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{line.value}</span>
                        <span className="text-emerald-600 dark:text-emerald-400">{line.change}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Credit Ratings</p>
                  <div className="flex gap-2">
                    {[
                      { agency: "Moody's", rating: 'Aa3' },
                      { agency: 'Fitch', rating: 'AA-' },
                      { agency: 'S&P', rating: 'AA-' },
                    ].map((cr) => (
                      <Badge key={cr.agency} variant="outline" className="text-xs">{cr.agency}: {cr.rating}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Emirates NBD */}
            <GlassPanel
              title="Emirates NBD"
              description="Largest Middle East banking group"
              badge="HIGH"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Assets (June 2025)</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$295.7B</p>
                    <p className="text-xs text-platinum-500-500">AED 1.086T</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">FY 2025 Profit</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$8.1B</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">Record</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Customers</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">9M+</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Countries</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">13</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Operational Scale</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">Branches:</span>
                      <span className="font-semibold">826</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">ATMs:</span>
                      <span className="font-semibold">4,555</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">Employees:</span>
                      <span className="font-semibold">30,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600">Digital:</span>
                      <span className="font-semibold">97%</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* ADCB */}
            <GlassPanel
              title="Abu Dhabi Commercial Bank"
              description="Third-largest UAE bank"
              badge="HIGH"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Total Assets</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$148B</p>
                    <p className="text-xs text-platinum-500-500">AED 148B</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Q1 2026 Profit</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$1.03B</p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">+30% YoY</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">2019 Merger</p>
                  <p className="text-xs text-platinum-500-600 dark:text-platinum-500-400">Union National Bank + Al Hilal Bank → ADCB Group</p>
                </div>
              </div>
            </GlassPanel>

            {/* DIB */}
            <GlassPanel
              title="Dubai Islamic Bank"
              description="World's first full-service Islamic bank"
              badge="HIGH"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Total Assets</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$94B</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Revenue (2024)</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$6.3B</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Branches</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">90+</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Customers</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">1.7M</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* Telecom Tab */}
        <TabsContent value="telecom" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Etisalat UAE / e& */}
            <GlassPanel
              title="e& (formerly Etisalat UAE)"
              description="UAE's largest telecom operator"
              badge="CRITICAL"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Operating Since</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">1976</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Countries</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">38</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Key Brands</p>
                  <div className="space-y-2 text-xs">
                    {[
                      { brand: 'e& UAE', focus: 'Domestic operations' },
                      { brand: 'e& international', focus: 'International operations' },
                      { brand: 'e& enterprise', focus: 'Enterprise solutions' },
                      { brand: 'e& life', focus: 'Apps and products' },
                      { brand: 'e& capital', focus: 'Investment arm' },
                    ].map((b) => (
                      <div key={b.brand} className="flex justify-between">
                        <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{b.brand}</span>
                        <span className="text-platinum-500-500">{b.focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* du UAE */}
            <GlassPanel
              title="du UAE"
              description="Emirates Integrated Telecommunications"
              badge="HIGH"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Revenue (2025)</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$4.3B</p>
                    <p className="text-xs text-platinum-500-500">AED 15.9B</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Net Income</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$678M</p>
                    <p className="text-xs text-platinum-500-500">AED 2.49B</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Mobile Subscribers</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">8M</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Broadband</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">559K</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">5G Leadership</p>
                  <div className="space-y-1 text-xs">
                    <p>Launched 5G June 2019 (first in UAE)</p>
                    <p>First MENA mmWave 5G deployment (2020)</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* Real Estate & Retail Tab */}
        <TabsContent value="realestate" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Emaar */}
            <GlassPanel
              title="Emaar Properties"
              description="Dubai's iconic developer"
              badge="HIGH"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Revenue</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$8.5B</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Valuation</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$16.8B</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Net Asset Value</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">$37.6B</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Employees</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">6,600</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Major Projects</p>
                  <div className="space-y-1 text-xs">
                    <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">Burj Khalifa</p>
                    <p className="text-platinum-500-500">World's tallest building (828m, 160 floors)</p>
                    <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">The Dubai Mall</p>
                    <p className="text-platinum-500-500">World's largest shopping mall (80M+ visitors in 2014)</p>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* LuLu Group */}
            <GlassPanel
              title="LuLu Group International"
              description="Indian-Emirati retail conglomerate"
              badge="MEDIUM"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Employees</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">65,000+</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">GCC Outlets</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">259</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">GCC Presence</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <p className="font-bold text-navy-500-900 dark:text-platinum-500-100">175</p>
                      <p className="text-platinum-500-500">UAE</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-navy-500-900 dark:text-platinum-500-100">34</p>
                      <p className="text-platinum-500-500">Saudi</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-navy-500-900 dark:text-platinum-500-100">35</p>
                      <p className="text-platinum-500-500">Oman</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-navy-500-900 dark:text-platinum-500-100">22</p>
                      <p className="text-platinum-500-500">Qatar</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-navy-500-900 dark:text-platinum-500-100">11</p>
                      <p className="text-platinum-500-500">Bahrain</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-navy-500-900 dark:text-platinum-500-100">6</p>
                      <p className="text-platinum-500-500">Kuwait</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Jumeirah */}
            <GlassPanel
              title="Jumeirah Group"
              description="Dubai's luxury hospitality brand"
              badge="MEDIUM"
            >
              <div className="space-y-4">
                <p className="text-xs text-platinum-500-500 mb-2">Key Properties</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">Burj Al Arab</span>
                    <span className="text-platinum-500-500">Iconic sail-shaped hotel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">Jumeirah Beach Hotel</span>
                    <span className="text-platinum-500-500">598 rooms, 20 restaurants</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">Madinat Jumeirah</span>
                    <span className="text-platinum-500-500">Resort complex</span>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Al Habtoor */}
            <GlassPanel
              title="Al Habtoor Group"
              description="Diversified UAE conglomerate"
              badge="MEDIUM"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Founded</p>
                    <p className="text-xl font-bold text-navy-500-900 dark:text-platinum-500-100">1970</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Business Segments</p>
                  <div className="flex flex-wrap gap-1">
                    {['Hotel', 'Automotive', 'Real Estate', 'Education', 'Construction', 'Publishing'].map((seg) => (
                      <Badge key={seg} variant="outline" className="text-xs">{seg}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* International Corps Tab */}
        <TabsContent value="international" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Microsoft UAE */}
            <GlassPanel
              title="Microsoft UAE"
              description="Major tech investor in UAE"
              badge="HIGH"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs text-platinum-500-500">Total Investment Plan (through 2029)</p>
                  <p className="text-2xl font-bold text-navy-500-900 dark:text-platinum-500-100">$15.2B</p>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Investment Breakdown</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600 dark:text-platinum-500-400">Already invested (2023-2025)</span>
                      <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">$7.3B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500-600 dark:text-platinum-500-400">Earmarked (2026-2029)</span>
                      <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">$7.9B</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Strategic Focus</p>
                  <div className="space-y-1 text-xs">
                    <p>AI and cloud computing projects</p>
                    <p>Secured US export licenses for AI chips</p>
                    <p>Partnership with Alef Education</p>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* AWS UAE */}
            <GlassPanel
              title="Amazon AWS UAE"
              description="Cloud infrastructure in UAE"
              badge="MEDIUM"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Region</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">me-central-1</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Launch Date</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">Aug 2022</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Data Centers</p>
                    <p className="text-lg font-bold text-navy-500-900 dark:text-platinum-500-100">2</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <Badge variant="destructive" className="text-xs mb-2">March 2026 Incident</Badge>
                  <p className="text-xs text-platinum-500-600 dark:text-platinum-500-400">
                    Drone strikes damaged three AWS facilities in UAE and Bahrain amid US-Iran tensions, causing AWS outage.
                  </p>
                </div>
              </div>
            </GlassPanel>

            {/* HSBC UAE */}
            <GlassPanel
              title="HSBC UAE"
              description="Largest international bank in Middle East"
              badge="MEDIUM"
            >
              <div className="space-y-4">
                <p className="text-xs text-platinum-500-500 mb-2">Status</p>
                <p className="text-sm text-navy-500-900 dark:text-platinum-500-100">Largest represented international bank in Middle East</p>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Services</p>
                  <div className="flex flex-wrap gap-1">
                    {['Personal Banking', 'Wealth Management', 'Commercial Banking', 'Investment Banking', 'Trade Finance'].map((svc) => (
                      <Badge key={svc} variant="outline" className="text-xs">{svc}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* McKinsey Middle East */}
            <GlassPanel
              title="McKinsey Middle East"
              description="Global consulting firm"
              badge="LOW"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Senior Partner</p>
                    <p className="text-sm font-bold text-navy-500-900 dark:text-platinum-500-100">Hasan Muzaffar</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500-500">Glassdoor</p>
                    <p className="text-sm font-bold text-navy-500-900 dark:text-platinum-500-100">3.9/5</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500-500 mb-2">Office Focus</p>
                  <div className="space-y-1 text-xs">
                    <p><span className="font-semibold">Dubai:</span> Banking, infrastructure, retail, tourism</p>
                    <p><span className="font-semibold">Abu Dhabi:</span> Sustainable/inclusive growth</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* Financial Performance Tab */}
        <TabsContent value="financial" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Financial Performance 2024-2025</CardTitle>
              <CardDescription>Revenue and profit comparison across entities</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={financialChartData}
                xAxisKey="name"
                bars={[
                  { dataKey: 'revenue', name: 'Revenue ($B)', color: CHART_COLORS.navy },
                  { dataKey: 'profit', name: 'Profit ($B)', color: CHART_COLORS.gold },
                ]}
                height={350}
                showGrid={true}
              />
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Major Acquisitions</CardTitle>
              <CardDescription>UAE companies' international acquisitions</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Acquirer</TableHead>
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Target</TableHead>
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Value</TableHead>
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {majorAcquisitions.map((acq, idx) => (
                    <TableRow key={idx} className="border-b border-platinum-100/50 dark:border-platinum-800/50">
                      <TableCell className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{acq.acquirer}</TableCell>
                      <TableCell className="text-platinum-500-700 dark:text-platinum-500-300">{acq.target}</TableCell>
                      <TableCell className="text-platinum-500-700 dark:text-platinum-500-300">{acq.value}</TableCell>
                      <TableCell className="text-platinum-500-700 dark:text-platinum-500-300">{acq.year}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Controversies Tab */}
        <TabsContent value="controversies" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {controversiesSummary.map((controv, idx) => (
              <GlassPanel
                key={idx}
                title={controv.company}
                description={controv.controversy}
                badge="WARNING"
              >
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-platinum-500-500">Impact</p>
                    <p className="text-sm font-medium text-navy-500-900 dark:text-platinum-500-100">{controv.impact}</p>
                  </div>
                </div>
              </GlassPanel>
            ))}
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Leadership Changes</CardTitle>
              <CardDescription>Recent leadership transitions in UAE entities</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Company</TableHead>
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Change</TableHead>
                    <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.leadershipChanges.map((change, idx) => (
                    <TableRow key={idx} className="border-b border-platinum-100/50 dark:border-platinum-800/50">
                      <TableCell className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{change.company}</TableCell>
                      <TableCell className="text-platinum-500-700 dark:text-platinum-500-300">{change.change}</TableCell>
                      <TableCell className="text-platinum-500-700 dark:text-platinum-500-300">{change.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
