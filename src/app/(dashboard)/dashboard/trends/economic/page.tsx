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
  Globe,
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
} from 'lucide-react'
import {
  useTrendsDataArrayData,
} from '@/lib/data-loader'

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
  const gdpGrowthData = [
    { year: '2020', growth: -5.0, color: CHART_COLORS.rose },
    { year: '2021', growth: 3.8, color: CHART_COLORS.emerald },
    { year: '2022', growth: 7.9, color: CHART_COLORS.gold },
    { year: '2023', growth: 3.4, color: CHART_COLORS.navy },
    { year: '2024', growth: 3.6, color: CHART_COLORS.platinum },
    { year: '2025', growth: 4.0, color: CHART_COLORS.gold },
    { year: '2026', growth: 5.6, color: CHART_COLORS.emerald },
  ]

  // Sector contribution
  const sectorData = [
    { name: 'Oil & Gas', value: 30, color: CHART_COLORS.navy },
    { name: 'Financial Services', value: 22, color: CHART_COLORS.gold },
    { name: 'Real Estate', value: 15, color: CHART_COLORS.platinum },
    { name: 'Manufacturing', value: 12, color: CHART_COLORS.emerald },
    { name: 'Tourism', value: 10, color: CHART_COLORS.rose },
    { name: 'Technology', value: 8, color: CHART_COLORS.cyan },
    { name: 'Other', value: 3, color: CHART_COLORS.purple },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: economicData.sentiment?.positive || 78, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: economicData.sentiment?.neutral || 12, color: CHART_COLORS.platinum },
    { name: 'Negative', value: economicData.sentiment?.negative || 10, color: CHART_COLORS.rose },
  ]

  // Quarterly performance
  const quarterlyData = [
    { quarter: 'Q1 2025', gdp: 485, growth: 3.8 },
    { quarter: 'Q2 2025', gdp: 502, growth: 4.1 },
    { quarter: 'Q3 2025', gdp: 518, growth: 4.3 },
    { quarter: 'Q4 2025', gdp: 535, growth: 4.6 },
    { quarter: 'Q1 2026', gdp: 552, growth: 5.2 },
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
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">ECONOMIC TRENDS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Economic Trends</h1>
          <p className="mt-2 text-slate-400">
            GDP growth, trade performance, FDI inflows, and economic diversification metrics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Briefcase className="h-4 w-4" />
            View Reports
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze Market
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="GDP Growth (2026)"
          value="5.6%"
          previousValue={3.4}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Total Trade"
          value="$1.64T"
          previousValue={1.52}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="FDI Inflows"
          value="$45B"
          previousValue={30}
          icon={<Wallet className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="UAE Adoption"
          value={`${economicData.uaeAdoptionRate || 92}%`}
          previousValue={(economicData.uaeAdoptionRate || 92) - 4}
          icon={<Scale className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gdp">GDP Analysis</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
          <TabsTrigger value="forecast">Forecasts</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Economic Trends Overview" description="Key economic indicators and performance metrics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Quarterly GDP Performance</CardTitle>
                  <CardDescription>GDP in billions USD and growth rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={quarterlyData}
                    xAxisKey="quarter"
                    areas={[
                      { dataKey: 'gdp', name: 'GDP ($B)', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
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

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Economic Drivers</CardTitle>
                    <CardDescription>Major factors driving economic growth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {keyDrivers.slice(0, 5).map((driver, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                          <TrendingUp className="h-5 w-5 text-gold mt-0.5" />
                          <span className="text-sm text-slate-200">{driver}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* GDP Analysis Tab */}
        <TabsContent value="gdp" className="space-y-6">
          <GlassPanel title="GDP Analysis" description="Economic growth and performance indicators">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">GDP Growth Rate (%)</CardTitle>
                  <CardDescription>Year-over-year economic growth 2020-2026</CardDescription>
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

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Economic Highlights</CardTitle>
                    <CardDescription>Key economic metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'GDP per Capita', value: '$58,000+', icon: DollarSign },
                        { label: 'Unemployment Rate', value: '2.8%', icon: Users },
                        { label: 'Inflation Rate', value: '2.5%', icon: TrendingDown },
                        { label: 'Foreign Reserves', value: '$180Bn', icon: Landmark },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5 text-gold" />
                            <span className="text-sm font-medium text-slate-200">{item.label}</span>
                          </div>
                          <span className="text-lg font-bold text-gold">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Generational Adoption</CardTitle>
                    <CardDescription>Economic trend adoption by generation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { name: 'Gen Z', value: economicData.generationalBreakdown?.genZ || 72 },
                        { name: 'Millennial', value: economicData.generationalBreakdown?.millennial || 88 },
                        { name: 'Gen X', value: economicData.generationalBreakdown?.genX || 90 },
                        { name: 'Boomer', value: economicData.generationalBreakdown?.boomer || 78 },
                      ]}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Adoption %', color: CHART_COLORS.navy },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sectors Tab */}
        <TabsContent value="sectors" className="space-y-6">
          <GlassPanel title="Economic Sectors" description="Performance breakdown by economic sector">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sector Contribution to GDP</CardTitle>
                  <CardDescription>Percentage breakdown by economic sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sectorData}
                    height={350}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sectorData.map((sector, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: sector.color }}
                          />
                          <span className="font-medium text-slate-200">{sector.name}</span>
                        </div>
                        <span className="text-xl font-bold text-gold">{sector.value}%</span>
                      </div>
                      <Progress
                        value={sector.value}
                        className="h-2"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Forecasts Tab */}
        <TabsContent value="forecast" className="space-y-6">
          <GlassPanel title="Economic Forecasts" description="Predictive scenarios for UAE economic outlook">
            <div className="space-y-6">
              {economicData.forecasts?.map((forecast, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg capitalize">{forecast.scenario} Scenario</CardTitle>
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
                        <div key={iIdx} className="flex items-start gap-2 rounded-lg bg-slate-800/50 p-3">
                          <TrendingUp className="h-4 w-4 text-gold mt-0.5" />
                          <span className="text-sm text-slate-200">{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
