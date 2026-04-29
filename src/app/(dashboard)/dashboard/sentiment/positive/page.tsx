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
  Users,
  Zap,
  ThumbsUp,
  Heart,
  Star,
  Award,
  Sparkles,
  CheckCircle,
  TrendingDown,
} from 'lucide-react'
import {
  useTrendsDataArrayData,
} from '@/lib/data-loader'

export default function PositiveSentimentPage() {
  const { data: trendsData } = useTrendsDataArrayData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Positive Sentiment data...</div>
      </div>
    )
  }

  // Sort by positive sentiment
  const sortedByPositive = [...trendsData].sort((a, b) =>
    (b.sentiment?.positive || 0) - (a.sentiment?.positive || 0)
  )

  // Top positive trends
  const topPositive = sortedByPositive.slice(0, 5)

  // Calculate metrics
  const totalPositive = trendsData.reduce((sum, t) => sum + (t.sentiment?.positive || 0), 0)
  const avgPositive = totalPositive / trendsData.length
  const highestPositive = sortedByPositive[0]?.sentiment?.positive || 0
  const totalPositiveVolume = trendsData.reduce((sum, t) => sum + ((t.sentiment?.positive || 0) / 100) * (t.sentiment?.volume || 0), 0)

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: Math.round(avgPositive), color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 100 - Math.round(avgPositive) - 15, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 15, color: CHART_COLORS.rose },
  ]

  // Positive drivers
  const positiveDrivers = [
    { driver: 'Economic Growth', impact: 92, icon: TrendingUp },
    { driver: 'Vision 2030 Progress', impact: 88, icon: Star },
    { driver: 'Innovation Leadership', impact: 85, icon: Sparkles },
    { driver: 'Infrastructure Development', impact: 82, icon: Award },
    { driver: 'Cultural Initiatives', impact: 78, icon: Heart },
  ]

  // Monthly positive trend
  const monthlyPositive = [
    { month: 'Jan', positive: 58, growth: 2.1 },
    { month: 'Feb', positive: 61, growth: 2.5 },
    { month: 'Mar', positive: 64, growth: 2.8 },
    { month: 'Apr', positive: 62, growth: 2.2 },
    { month: 'May', positive: 68, growth: 3.1 },
    { month: 'Jun', positive: 71, growth: 3.4 },
    { month: 'Jul', positive: 69, growth: 2.9 },
    { month: 'Aug', positive: 72, growth: 3.2 },
    { month: 'Sep', positive: 74, growth: 3.5 },
    { month: 'Oct', positive: 76, growth: 3.8 },
    { month: 'Nov', positive: 75, growth: 3.6 },
    { month: 'Dec', positive: 78, growth: 4.0 },
  ]

  // Key positive indicators
  const keyIndicators = [
    { metric: 'AI Adoption', value: '85%', change: '+12%', positive: true },
    { metric: 'GDP Growth', value: '5.6%', change: '+2.2%', positive: true },
    { metric: 'FDI Inflows', value: '$45B', change: '+50%', positive: true },
    { metric: 'Tourism Growth', value: '+22%', change: '+8%', positive: true },
    { metric: 'Startup Ecosystem', value: '$2B', change: '+32%', positive: true },
    { metric: 'Renewable Capacity', value: '19.8GW', change: '+45%', positive: true },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="emerald" className="mb-2 bg-emerald-500/20 text-emerald-400 border-emerald-500/50">POSITIVE SENTIMENT</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-emerald">Positive Sentiment Analysis</h1>
          <p className="mt-2 text-slate-400">
            Drivers of positive sentiment, growth indicators, and success metrics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10">
            <ThumbsUp className="h-4 w-4" />
            View Drivers
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze Growth
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Avg Positive"
          value={`${Math.round(avgPositive)}%`}
          previousValue={Math.round(avgPositive) - 4}
          icon={<ThumbsUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Peak Positive"
          value={`${highestPositive}%`}
          previousValue={highestPositive - 5}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Positive Volume"
          value={totalPositiveVolume > 1000000 ? `${(totalPositiveVolume / 1000000).toFixed(1)}M` : `${(totalPositiveVolume / 1000).toFixed(0)}K`}
          previousValue={totalPositiveVolume * 0.88}
          icon={<Heart className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Growth Rate"
          value="+4.0%"
          previousValue={3.5}
          icon={<Sparkles className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="drivers">Drivers</TabsTrigger>
          <TabsTrigger value="trends">Top Performers</TabsTrigger>
          <TabsTrigger value="indicators">Indicators</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Positive Sentiment Overview" description="Key positive sentiment metrics and trends">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Positive Sentiment Trend</CardTitle>
                  <CardDescription>Monthly positive sentiment evolution</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={monthlyPositive}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'positive', name: 'Positive %', color: CHART_COLORS.emerald },
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
                    <CardDescription>Overall sentiment breakdown</CardDescription>
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
                    <CardTitle className="text-lg">Positive Growth Rate</CardTitle>
                    <CardDescription>Month-over-month growth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={monthlyPositive}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Drivers Tab */}
        <TabsContent value="drivers" className="space-y-6">
          <GlassPanel title="Positive Sentiment Drivers" description="Key factors driving positive sentiment">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Driver Impact Analysis</CardTitle>
                  <CardDescription>Major factors influencing positive sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={positiveDrivers}
                    xAxisKey="driver"
                    bars={[
                      { dataKey: 'impact', name: 'Impact %', color: CHART_COLORS.emerald },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {positiveDrivers.map((driver, idx) => (
                  <Card key={idx} className="glass-card border-emerald-500/30">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <driver.icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-slate-200">{driver.driver}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Impact Score</span>
                          <span className="text-emerald-400 font-bold">{driver.impact}%</span>
                        </div>
                        <Progress value={driver.impact} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Top Performers Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="Top Performing Categories" description="Categories with highest positive sentiment">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top 5 Positive Categories</CardTitle>
                  <CardDescription>Ranked by positive sentiment percentage</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {topPositive.map((trend, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                              #{idx + 1}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{trend.name}</p>
                              <p className="text-sm text-slate-400">{trend.category}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-emerald-400" />
                              <span className="text-2xl font-bold text-emerald-400">
                                {Math.round(trend.sentiment?.positive || 0)}%
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">
                              Volume: {(trend.sentiment?.volume || 0).toLocaleString()}
                            </p>
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

        {/* Indicators Tab */}
        <TabsContent value="indicators" className="space-y-6">
          <GlassPanel title="Positive Indicators" description="Key performance indicators showing positive trends">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {keyIndicators.map((indicator, idx) => (
                  <Card key={idx} className="glass-card border-emerald-500/30">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">{indicator.metric}</span>
                        <Badge variant="success" className="text-xs">
                          {indicator.change}
                        </Badge>
                      </div>
                      <p className="text-3xl font-bold text-emerald-400">{indicator.value}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <TrendingUp className="h-4 w-4 text-emerald-400" />
                        <span className="text-xs text-emerald-400">vs last period</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Year-over-Year Comparison</CardTitle>
                  <CardDescription>Positive sentiment comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { year: '2024', positive: 62 },
                      { year: '2025', positive: 68 },
                      { year: '2026', positive: 76 },
                    ]}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'positive', name: 'Positive %', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
