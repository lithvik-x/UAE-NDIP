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
  Hash,
  Lightbulb,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
  Crown,
  Newspaper,
  Building,
  DollarSign,
  PieChart as PieChartIcon,
  TrendingDown,
  Briefcase,
  Wallet,
  Landmark,
} from 'lucide-react'
import {
  useEconomyBusinessData,
} from '@/lib/data-loader'

export default function EconomyBusinessPage() {
  const { data } = useEconomyBusinessData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Economy & Business data...</div>
      </div>
    )
  }

  const { metrics, keyFindings, sentiment, emotions, credibility, trends, stakeholders } = data

  // Extract key metrics
  const volume = metrics?.volume || 0
  const reach = metrics?.reach || 0
  const engagement = metrics?.engagement || 0

  // Key findings formatted for display
  const keyFindingsData = keyFindings?.slice(0, 10) || []

  // Sentiment data for pie chart
  const sentimentData = sentiment ? [
    { name: 'Positive', value: sentiment.positive || 0, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentiment.neutral || 0, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentiment.negative || 0, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 52, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 33, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 15, color: CHART_COLORS.rose },
  ]

  // GDP trend data for area chart
  const gdpTrendData = [
    { year: '2018', gdp: 421, growth: 1.1 },
    { year: '2019', gdp: 446, growth: 1.4 },
    { year: '2020', gdp: 415, growth: -5.0 },
    { year: '2021', gdp: 499, growth: 3.8 },
    { year: '2022', gdp: 503, growth: 7.9 },
    { year: '2023', gdp: 504, growth: 3.4 },
    { year: '2024', gdp: 512, growth: 4.0 },
    { year: '2025', gdp: 524, growth: 4.5 },
  ]

  // Sector breakdown for bar chart
  const sectorData = [
    { name: 'Oil & Gas', value: 30, color: CHART_COLORS.navy },
    { name: 'Financial Services', value: 22, color: CHART_COLORS.gold },
    { name: 'Real Estate', value: 15, color: CHART_COLORS.platinum },
    { name: 'Manufacturing', value: 12, color: CHART_COLORS.emerald },
    { name: 'Tourism', value: 10, color: CHART_COLORS.rose },
    { name: 'Logistics', value: 8, color: CHART_COLORS.cyan },
    { name: 'Technology', value: 3, color: CHART_COLORS.purple },
  ]

  // Trend data for line chart
  const trendChartData = trends?.slice(0, 12).map((t, i) => ({
    month: t.period || `Month ${i + 1}`,
    value: t.value || 0,
    sentiment: t.sentiment || 50,
  })) || [
    { month: 'Jan', value: 2150, sentiment: 65 },
    { month: 'Feb', value: 2280, sentiment: 68 },
    { month: 'Mar', value: 2350, sentiment: 70 },
    { month: 'Apr', value: 2290, sentiment: 67 },
    { month: 'May', value: 2420, sentiment: 72 },
    { month: 'Jun', value: 2510, sentiment: 75 },
    { month: 'Jul', value: 2480, sentiment: 73 },
    { month: 'Aug', value: 2590, sentiment: 76 },
    { month: 'Sep', value: 2680, sentiment: 78 },
    { month: 'Oct', value: 2750, sentiment: 80 },
    { month: 'Nov', value: 2820, sentiment: 82 },
    { month: 'Dec', value: 2900, sentiment: 85 },
  ]

  // SWF allocation data
  const swfData = [
    { name: 'Mubadala', value: 33, color: CHART_COLORS.gold },
    { name: 'ADIA', value: 28, color: CHART_COLORS.navy },
    { name: 'Abu Dhabi Holding', value: 18, color: CHART_COLORS.platinum },
    { name: 'RAKIA', value: 12, color: CHART_COLORS.emerald },
    { name: 'Other SWFs', value: 9, color: CHART_COLORS.cyan },
  ]

  // Key findings by alert level
  const redFindings = keyFindingsData.filter(f => f.alert === 'RED')
  const yellowFindings = keyFindingsData.filter(f => f.alert === 'YELLOW')

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  const getTierBadge = (tier?: number) => {
    const colors: Record<number, string> = {
      0: 'bg-red-500/20 text-red-400 border-red-500/50',
      1: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      2: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      3: 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50',
      4: 'bg-slate-500/20 text-slate-400 border-slate-500/50',
    }
    return (
      <Badge variant="outline" className={`text-xs border ${colors[tier || 0]}`}>
        Tier {tier}
      </Badge>
    )
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">P-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Economy & Business</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'GDP, banking, SWFs, diversification, trade, investment, tourism'}
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
          title="GDP (USD Bn)"
          value={credibility?.score ? (524).toFixed(0) : '524'}
          previousValue={512}
          icon={<DollarSign className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="GDP Growth %"
          value="4.5%"
          previousValue={3.4}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="SWF Assets (USD Bn)"
          value="1.5T"
          previousValue={1.4}
          icon={<Wallet className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Non-Oil Sector %"
          value="71%"
          previousValue={68}
          icon={<PieChartIcon className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gdp">GDP Analysis</TabsTrigger>
          <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Economy & Business Overview" description="Key economic indicators and trends">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Media Volume Trend</CardTitle>
                  <CardDescription>Economic news monitoring over the past 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={trendChartData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'value', name: 'Volume', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sector Contribution to GDP</CardTitle>
                    <CardDescription>Economic diversification breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sectorData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall economic sentiment</CardDescription>
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
                  <CardTitle className="text-lg">GDP Trend (USD Billions)</CardTitle>
                  <CardDescription>UAE GDP performance 2018-2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={gdpTrendData}
                    xAxisKey="year"
                    lines={[
                      { dataKey: 'gdp', name: 'GDP', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">GDP Growth Rate (%)</CardTitle>
                  <CardDescription>Year-over-year economic growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={gdpTrendData}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.emerald },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sovereign Wealth Funds</CardTitle>
                    <CardDescription>SWF asset distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={swfData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

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
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Findings Tab */}
        <TabsContent value="keyfindings" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical economic intelligence findings">
            <div className="space-y-6">
              {/* Red Alerts Section */}
              {redFindings.length > 0 && (
                <Card className="glass-card border-red-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                      <AlertCircle className="h-5 w-5" />
                      Red Alert Findings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {redFindings.map((finding, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-red-500/10 p-4 border border-red-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{finding.finding}</p>
                            <p className="mt-1 text-sm text-slate-400">Source: {finding.source}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="destructive" className="text-xs">{finding.metric}</Badge>
                            {finding.tier !== undefined && <div className="mt-1">{getTierBadge(finding.tier)}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Yellow Alerts Section */}
              {yellowFindings.length > 0 && (
                <Card className="glass-card border-yellow-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
                      <AlertTriangle className="h-5 w-5" />
                      Yellow Alert Findings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {yellowFindings.map((finding, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{finding.finding}</p>
                            <p className="mt-1 text-sm text-slate-400">Source: {finding.source}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="warning" className="text-xs">{finding.metric}</Badge>
                            {finding.tier !== undefined && <div className="mt-1">{getTierBadge(finding.tier)}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* All Findings Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">All Key Findings</CardTitle>
                  <CardDescription>Complete list of economic intelligence findings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {keyFindingsData.map((finding, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Lightbulb className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{finding.finding}</p>
                              <p className="text-sm text-slate-400">Source: {finding.source}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <Badge variant="outline" className="mb-1">{finding.metric}</Badge>
                              <p className="text-xs text-slate-400">Metric</p>
                            </div>
                            <div className="text-center">
                              {getTierBadge(finding.tier)}
                              <p className="mt-1 text-xs text-slate-400">Tier</p>
                            </div>
                            <div className="text-center">
                              {getAlertBadge(finding.alert)}
                              <p className="mt-1 text-xs text-slate-400">Alert</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sectors Tab */}
        <TabsContent value="sectors" className="space-y-6">
          <GlassPanel title="Economic Sectors" description="Performance breakdown by sector">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sector Contribution to GDP</CardTitle>
                  <CardDescription>Percentage breakdown by economic sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sectorData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                    showGrid={true}
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
      </Tabs>
    </div>
  )
}
