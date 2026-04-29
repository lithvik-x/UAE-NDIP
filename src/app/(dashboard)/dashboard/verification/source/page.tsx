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
import type { TierLevel, AlertLevel } from '@/lib/data-loader/types'
import { statisticalKPIs } from '@/lib/data-loader/verification-data'
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  Award,
  BarChart3,
  Building2,
  Car,
  CreditCard,
  Cpu,
  DollarSign,
  Droplets,
  Globe,
  Heart,
  Leaf,
  Palmtree,
  Shield,
  TrendingUp,
  Users,
  UserCheck,
  Verified,
  Wallet,
  Zap,
} from 'lucide-react'

// ============================================================================
// CYCLE A: HEADER + KEY METRICS DASHBOARD
// ============================================================================

const alertColors: Record<string, string> = {
  GREEN: 'text-emerald-400',
  YELLOW: 'text-yellow-400',
  RED: 'text-red-400',
}

const alertBg: Record<string, string> = {
  GREEN: 'bg-emerald-500/20 border-emerald-500/50',
  YELLOW: 'bg-yellow-500/20 border-yellow-500/50',
  RED: 'bg-red-500/20 border-red-500/50',
}

const alertDot: Record<string, string> = {
  GREEN: 'bg-emerald-400',
  YELLOW: 'bg-yellow-400',
  RED: 'bg-red-400',
}

export default function StatisticalDatapointsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // ============================================================================
  // CYCLE B: POPULATION & ECONOMIC DATA
  // ============================================================================

  const populationData = statisticalKPIs.populationKPIs.map((k, i) => ({
    name: k.kpi.replace(/\s*\([^)]*\)/g, ''),
    value: typeof k.value === 'string' ? k.value : k.value,
    tier: k.tier,
    alert: k.alert,
  }))

  const economicChartData = [
    { name: 'GDP 2024', value: 537.08, full: '$537.08B' },
    { name: 'GDP 2025e', value: 569.1, full: '$569.1B' },
    { name: 'GDP/cap', value: 51.29, full: '$51,290' },
    { name: 'GDP/cap PPP', value: 82.0, full: '$82,000' },
  ]

  const gdpGrowthData = [
    { name: '2020', value: -5.0 },
    { name: '2021', value: 3.9 },
    { name: '2022', value: 7.9 },
    { name: '2023', value: 3.4 },
    { name: '2024', value: 3.5 },
    { name: '2025e', value: 5.6 },
  ]

  const expatBreakdown = [
    { name: 'Indian', value: 38, color: CHART_COLORS.orange },
    { name: 'Pakistani', value: 17, color: CHART_COLORS.emerald },
    { name: 'Bangladeshi', value: 7.4, color: CHART_COLORS.denim },
    { name: 'Filipino', value: 6.9, color: CHART_COLORS.gold },
    { name: 'Other', value: 30.7, color: CHART_COLORS.platinum },
  ]

  // ============================================================================
  // CYCLE C: TRADE & TOURISM DATA
  // ============================================================================

  const tradeChartData = [
    { name: 'Total Trade', value: 1424, full: '$1.424T' },
    { name: 'Non-Oil Trade', value: 763, full: 'AED 2.8T+' },
    { name: 'Trade Surplus', value: 134, full: 'AED 492B' },
    { name: 'UAE-US Trade', value: 39, full: '$39B' },
  ]

  const tourismChartData = [
    { name: 'Dubai Visitors', value: 19.59, unit: 'M' },
    { name: 'Hotel Occupancy', value: 80.7, unit: '%' },
    { name: 'RevPAR Growth', value: 11, unit: '%' },
    { name: 'Tourism GDP', value: 167, unit: 'B' },
  ]

  const tourismTrendData = [
    { year: '2018', visitors: 15.92 },
    { year: '2019', visitors: 16.73 },
    { year: '2020', visitors: 5.51 },
    { year: '2021', visitors: 7.28 },
    { year: '2022', visitors: 14.36 },
    { year: '2023', visitors: 17.15 },
    { year: '2024', visitors: 18.72 },
    { year: '2025', visitors: 19.59 },
  ]

  const topSourceMarkets = [
    { region: 'Western Europe', visitors: 4.1, share: 21 },
    { region: 'GCC', visitors: 2.99, share: 15 },
    { region: 'South Asia', visitors: 2.89, share: 15 },
    { region: 'CIS/Eastern Europe', visitors: 2.89, share: 15 },
    { region: 'MENA (excl. GCC)', visitors: 2.17, share: 11 },
  ]

  // ============================================================================
  // CYCLE D: SAFETY & HEALTH DATA
  // ============================================================================

  const safetyRankings = [
    { city: 'Abu Dhabi', index: 11.2, status: 'Safest globally' },
    { city: 'Ajman', index: 14.5, status: '-' },
    { city: 'Doha', index: 15.7, status: '-' },
    { city: 'Dubai', index: 16.1, status: '-' },
  ]

  const healthMetrics = [
    { metric: 'Life Expectancy', value: '82.9 yrs', compare: 'Above global avg' },
    { metric: 'Maternal Mortality', value: '9.34/100K', compare: 'Low' },
    { metric: 'Child Mortality', value: '0.5%', compare: 'Very Low' },
    { metric: 'Healthcare Spending', value: '4.7% GDP', compare: '-' },
    { metric: 'Adult Obesity', value: '71%', compare: 'High concern' },
  ]

  // ============================================================================
  // CYCLE E: ENVIRONMENT & FINANCE DATA
  // ============================================================================

  const epiScores = [
    { category: 'EPI Score', value: 51.6, rank: 53 },
    { category: 'Air Quality', value: 46.2, rank: 70 },
    { category: 'Water Mgmt', value: 89.8, rank: 3 },
    { category: 'Climate Change', value: 35.6, rank: 129 },
    { category: 'PM2.5 Exposure', value: 10.3, rank: 155 },
  ]

  const budgetAllocation = [
    { sector: 'Social Development', amount: 27.859, pct: 39, color: CHART_COLORS.emerald },
    { sector: 'Government Affairs', amount: 25.570, pct: 35.7, color: CHART_COLORS.denim },
    { sector: 'Other Expenditures', amount: 12.624, pct: 17.7, color: CHART_COLORS.platinum },
    { sector: 'Infrastructure', amount: 2.581, pct: 3.6, color: CHART_COLORS.gold },
    { sector: 'Financial Investments', amount: 2.864, pct: 4, color: CHART_COLORS.platinum },
  ]

  const surplusData = [
    { year: '2022', value: 8.9 },
    { year: '2023', value: 5.9 },
    { year: '2024', value: 5.5 },
    { year: '2025f', value: 2.9 },
    { year: '2026p', value: 2.2 },
  ]

  const getAlertBadge = (alert: string) => (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${alertBg[alert] || alertBg.YELLOW}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${alertDot[alert] || alertDot.YELLOW}`} />
      <span className={alertColors[alert] || alertColors.YELLOW}>{alert}</span>
    </span>
  )

  const kpiRow = (
    kpi: { kpi: string; value: string | number; previousValue?: string | number; change?: string; source: string; tier: TierLevel; alert: AlertLevel },
    idx: number
  ) => (
    <motion.div
      key={kpi.kpi}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: idx * 0.05, duration: 0.3 }}
      className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-3 hover:bg-slate-800/60 hover:border-slate-600/50 transition-all duration-200"
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-platinum-200 truncate">{kpi.kpi}</p>
        <p className="text-xs text-slate-500 mt-0.5">{kpi.source}</p>
      </div>
      <div className="flex items-center gap-3 ml-4 shrink-0">
        {kpi.change && (
          <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded">
            {kpi.change}
          </span>
        )}
        <span className="text-lg font-bold text-platinum-100 tabular-nums">
          {kpi.value}
        </span>
        {getAlertBadge(kpi.alert)}
      </div>
    </motion.div>
  )

  return (
    <div className="space-y-8 p-8">
      {/* ====================================================================== */}
      {/* CYCLE A: HEADER */}
      {/* ====================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="default" className="mb-2 bg-gold/20 text-gold border-gold/50">STATISTICAL DATA</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            UAE Statistical Datapoints
          </h1>
          <p className="mt-2 text-slate-400">
            Comprehensive official statistics across all sectors — 11 atomic queries, 40+ sources
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Shield className="h-4 w-4" />
            Data Quality
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Verified className="h-4 w-4" />
            Source Verification
          </Button>
        </div>
      </motion.div>

      {/* ====================================================================== */}
      {/* CYCLE A: KEY METRICS — 8 METRIC CARDS */}
      {/* ====================================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Total Population"
          value="11.57M"
          previousValue={11.34}
          icon={<Users className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="GDP 2024 (Nominal)"
          value="$537.08B"
          previousValue={504}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Foreign Trade"
          value="$1.424T"
          previousValue={0.955}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Dubai Visitors"
          value="19.59M"
          previousValue={18.72}
          icon={<Palmtree className="h-6 w-6" />}
          gradient="cyan"
          status="success"
        />
        <MetricCard
          title="Safety Index"
          value="#1 Global"
          icon={<Shield className="h-6 w-6" />}
          gradient="lime"
          status="success"
        />
        <MetricCard
          title="Federal Budget"
          value="AED 71.5B"
          previousValue={64}
          icon={<Wallet className="h-6 w-6" />}
          gradient="purple"
          status="info"
        />
        <MetricCard
          title="Life Expectancy"
          value="82.9 yrs"
          icon={<Heart className="h-6 w-6" />}
          gradient="rose"
          status="success"
        />
        <MetricCard
          title="Unemployment"
          value="2.13%"
          previousValue={2.15}
          icon={<UserCheck className="h-6 w-6" />}
          gradient="teal"
          status="success"
        />
      </motion.div>

      {/* ====================================================================== */}
      {/* CYCLE B: MAIN TABS INTERFACE */}
      {/* ====================================================================== */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="population">Population</TabsTrigger>
          <TabsTrigger value="economics">Economics</TabsTrigger>
          <TabsTrigger value="trade">Trade & Tourism</TabsTrigger>
          <TabsTrigger value="safety">Safety & Health</TabsTrigger>
          <TabsTrigger value="envfinance">Environment & Finance</TabsTrigger>
        </TabsList>

        {/* ==================================================================== */}
        {/* CYCLE A: OVERVIEW TAB */}
        {/* ==================================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* GDP Growth Chart */}
                <GlassPanel title="GDP Growth Trend" description="Real GDP growth rate 2020-2025e">
                  <AreaChart
                    data={gdpGrowthData}
                    xAxisKey="name"
                    areas={[{ dataKey: 'value', name: 'GDP Growth %', color: CHART_COLORS.emerald }]}
                    height={260}
                    showGrid
                  />
                </GlassPanel>

                {/* Expat Distribution */}
                <GlassPanel title="Expat Nationality Breakdown" description="Population by nationality (88.5% expat)">
                  <PieChart
                    data={expatBreakdown}
                    height={260}
                    showLegend
                  />
                </GlassPanel>
              </div>

              {/* Budget Allocation */}
              <GlassPanel title="Federal Budget 2025 Allocation" description="AED 71.5B total — social 39%, government affairs 35.7%">
                <div className="space-y-4">
                  {budgetAllocation.map((item, i) => (
                    <div key={item.sector} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-300">{item.sector}</span>
                        <span className="text-platinum-100 font-medium">
                          AED {item.amount}B <span className="text-slate-500">({item.pct}%)</span>
                        </span>
                      </div>
                      <Progress
                        value={item.pct}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* Quick Stats Grid */}
              <div className="grid gap-4 sm:grid-cols-4">
                {[
                  { label: 'EPI Rank', value: '53rd', icon: <Leaf className="h-5 w-5" />, color: 'bg-yellow-500/20 text-yellow-400' },
                  { label: 'Water Rank', value: '3rd', icon: <Droplets className="h-5 w-5" />, color: 'bg-emerald-500/20 text-emerald-400' },
                  { label: 'Credit Rating', value: 'AA/Aa2', icon: <Award className="h-5 w-5" />, color: 'bg-platinum-500/20 text-platinum-400' },
                  { label: 'HDI Score', value: '0.940', icon: <Zap className="h-5 w-5" />, color: 'bg-cyan-500/20 text-cyan-400' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl border border-glass-border bg-glass-surface p-4 text-center hover:shadow-glass transition-shadow duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                      {stat.icon}
                    </div>
                    <div className="text-xl font-bold text-platinum-100">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* ================================================================ */}
            {/* CYCLE B: POPULATION TAB */}
            {/* ================================================================ */}
            <TabsContent value="population" className="space-y-6">
              <GlassPanel title="Population & Demographics" description="UAE population statistics 2024-2026">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-platinum-300 uppercase tracking-wider">Key Metrics</h4>
                    {statisticalKPIs.populationKPIs.map((kpi, i) => kpiRow(kpi, i))}
                  </div>
                  <div className="space-y-4">
                    <Card className="glass-card">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Population by Emirate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={[
                            { name: 'Dubai', value: 4.471 },
                            { name: 'Abu Dhabi', value: 4.136 },
                            { name: 'Sharjah', value: 1.808 },
                            { name: 'Ajman', value: 0.505 },
                            { name: 'RAK', value: 0.345 },
                            { name: 'Fujairah', value: 0.203 },
                            { name: 'UAQ', value: 0.049 },
                          ]}
                          xAxisKey="name"
                          bars={[{ dataKey: 'value', name: 'Million', color: CHART_COLORS.denim }]}
                          height={220}
                          showGrid
                        />
                      </CardContent>
                    </Card>
                    <Card className="glass-card">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Gender Distribution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <PieChart
                          data={[
                            { name: 'Males', value: 63.6, color: CHART_COLORS.denim },
                            { name: 'Females', value: 36.4, color: CHART_COLORS.rose },
                          ]}
                          height={180}
                          showLegend
                        />
                        <p className="text-xs text-slate-400 mt-2 text-center">Ratio 175:100 — reflects male-dominated expat workforce</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </GlassPanel>
            </TabsContent>

            {/* ================================================================ */}
            {/* CYCLE C: ECONOMICS TAB */}
            {/* ================================================================ */}
            <TabsContent value="economics" className="space-y-6">
              <GlassPanel title="Economic Performance" description="GDP, growth rates, and economic indicators">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-platinum-300 uppercase tracking-wider">Economic KPIs</h4>
                    {statisticalKPIs.economicKPIs.map((kpi, i) => kpiRow(kpi, i))}
                  </div>
                  <div className="space-y-4">
                    <Card className="glass-card">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">GDP Comparison (USD Billions)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={economicChartData}
                          xAxisKey="name"
                          bars={[{ dataKey: 'value', name: '$B', color: CHART_COLORS.emerald }]}
                          height={220}
                          showGrid
                        />
                      </CardContent>
                    </Card>
                    <Card className="glass-card">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Abu Dhabi Sector Performance 9M 2025</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={[
                            { name: 'Health', value: 15.4 },
                            { name: 'Finance', value: 8.5 },
                            { name: 'Construction', value: 8.5 },
                            { name: 'Real Estate', value: 6.7 },
                            { name: 'ICT', value: 4.8 },
                            { name: 'Retail', value: 4.6 },
                          ]}
                          xAxisKey="name"
                          bars={[{ dataKey: 'value', name: 'Growth %', color: CHART_COLORS.gold }]}
                          height={200}
                          showGrid
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </GlassPanel>
            </TabsContent>

            {/* ================================================================ */}
            {/* CYCLE D: TRADE & TOURISM TAB */}
            {/* ================================================================ */}
            <TabsContent value="trade" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Trade KPIs */}
                <GlassPanel title="Trade Statistics 2024" description="Total foreign trade $1.424T — +49% YoY">
                  <div className="space-y-3 mb-4">
                    {statisticalKPIs.tradeKPIs.map((kpi, i) => kpiRow(kpi, i))}
                  </div>
                  <BarChart
                    data={tradeChartData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Value', color: CHART_COLORS.gold }]}
                    height={200}
                    showGrid
                  />
                </GlassPanel>

                {/* Tourism KPIs */}
                <GlassPanel title="Tourism Statistics 2025" description="Record year — 19.59M visitors, +5%">
                  <div className="space-y-3 mb-4">
                    {statisticalKPIs.tourismKPIs.map((kpi, i) => kpiRow(kpi, i))}
                  </div>
                  <AreaChart
                    data={tourismTrendData}
                    xAxisKey="year"
                    areas={[{ dataKey: 'visitors', name: 'Visitors (M)', color: CHART_COLORS.info }]}
                    height={200}
                    showGrid
                  />
                </GlassPanel>
              </div>

              {/* Source Markets */}
              <GlassPanel title="Dubai Top Source Markets 2025" description="Western Europe leads with 4.1M visitors (21%)">
                <div className="grid gap-4 sm:grid-cols-5">
                  {topSourceMarkets.map((market, i) => (
                    <motion.div
                      key={market.region}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-xl border border-glass-border bg-glass-surface p-4 text-center hover:shadow-glass hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="text-2xl font-bold text-platinum-100">{market.visitors}M</div>
                      <div className="text-sm text-platinum-400 mt-1">{market.region}</div>
                      <div className="text-xs text-slate-500 mt-1">{market.share}% share</div>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </TabsContent>

            {/* ================================================================ */}
            {/* CYCLE E: SAFETY & HEALTH TAB */}
            {/* ================================================================ */}
            <TabsContent value="safety" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Safety */}
                <GlassPanel title="Safety & Security" description="UAE ranked #1 globally in safety index">
                  <div className="space-y-3 mb-4">
                    {statisticalKPIs.safetyKPIs.map((kpi, i) => kpiRow(kpi, i))}
                  </div>
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">City Safety Index Rankings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={safetyRankings}
                        xAxisKey="city"
                        bars={[{ dataKey: 'index', name: 'Crime Index (lower=better)', color: CHART_COLORS.lime }]}
                        height={200}
                        showGrid
                      />
                    </CardContent>
                  </Card>
                </GlassPanel>

                {/* Health */}
                <GlassPanel title="Health Statistics" description="Life expectancy 82.9 years — above global average">
                  <div className="space-y-3 mb-4">
                    {statisticalKPIs.healthKPIs.map((kpi, i) => kpiRow(kpi, i))}
                  </div>
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Health Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={[
                          { name: 'Life Exp.', value: 82.9 },
                          { name: 'Maternal Mort.', value: 9.34 },
                          { name: 'Child Mort.', value: 0.5 },
                          { name: 'Obesity', value: 71 },
                        ]}
                        xAxisKey="name"
                        bars={[
                          { dataKey: 'value', name: 'Value', color: CHART_COLORS.rose },
                        ]}
                        height={200}
                        showGrid
                      />
                    </CardContent>
                  </Card>
                </GlassPanel>
              </div>
            </TabsContent>

            {/* ================================================================ */}
            {/* CYCLE F: ENVIRONMENT & FINANCE TAB */}
            {/* ================================================================ */}
            <TabsContent value="envfinance" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Environment */}
                <GlassPanel title="Environmental Performance Index 2024" description="Yale EPI — mixed results with water strength">
                  <div className="space-y-3 mb-4">
                    {statisticalKPIs.environmentKPIs.map((kpi, i) => kpiRow(kpi, i))}
                  </div>
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">EPI Scores by Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={epiScores}
                        xAxisKey="category"
                        bars={[
                          { dataKey: 'value', name: 'Score', color: CHART_COLORS.teal },
                          { dataKey: 'rank', name: 'Rank (inverted)', color: CHART_COLORS.rose },
                        ]}
                        height={220}
                        showGrid
                      />
                    </CardContent>
                  </Card>
                </GlassPanel>

                {/* Finance */}
                <GlassPanel title="Government Finance" description="Federal budget AED 71.5B — 7th consecutive surplus">
                  <div className="space-y-3 mb-4">
                    {statisticalKPIs.financeKPIs.map((kpi, i) => kpiRow(kpi, i))}
                  </div>
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Budget Surplus (% GDP)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={surplusData}
                        xAxisKey="year"
                        areas={[{ dataKey: 'value', name: 'Surplus %', color: CHART_COLORS.purple }]}
                        height={200}
                        showGrid
                      />
                    </CardContent>
                  </Card>
                </GlassPanel>
              </div>
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>

      {/* ==================================================================== */}
      {/* DATA QUALITY FOOTER */}
      {/* ==================================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl border border-glass-border bg-glass-surface p-4"
      >
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-slate-400">Tier 0-1 Sources: WHO, UNFPA, MoF, SCAD</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-sm text-slate-400">Tier 2: Trading Economics, Numbeo, CPX</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            <span className="text-sm text-slate-400">Tier 3: Wikipedia (estimates)</span>
          </div>
          <div className="ml-auto text-xs text-slate-500">
            Data compiled: April 2026 | 35 URLs processed | 22 successfully fetched (63%)
          </div>
        </div>
      </motion.div>
    </div>
  )
}
