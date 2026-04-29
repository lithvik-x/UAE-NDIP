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
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Zap,
  ThumbsDown,
  Heart,
  Frown,
  Shield,
  Eye,
} from 'lucide-react'
import {
  useTrendsDataArrayData,
} from '@/lib/data-loader'

export default function NegativeSentimentPage() {
  const { data: trendsData } = useTrendsDataArrayData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Negative Sentiment data...</div>
      </div>
    )
  }

  // Sort by negative sentiment (highest first)
  const sortedByNegative = [...trendsData].sort((a, b) =>
    (b.sentiment?.negative || 0) - (a.sentiment?.negative || 0)
  )

  // Top negative trends
  const topNegative = sortedByNegative.slice(0, 5)

  // Calculate metrics
  const totalNegative = trendsData.reduce((sum, t) => sum + (t.sentiment?.negative || 0), 0)
  const avgNegative = totalNegative / trendsData.length
  const highestNegative = sortedByNegative[0]?.sentiment?.negative || 0
  const totalNegativeVolume = trendsData.reduce((sum, t) => sum + ((t.sentiment?.negative || 0) / 100) * (t.sentiment?.volume || 0), 0)

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: 100 - Math.round(avgNegative) - 20, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 20, color: CHART_COLORS.platinum },
    { name: 'Negative', value: Math.round(avgNegative), color: CHART_COLORS.rose },
  ]

  // Negative drivers/concerns
  const negativeDrivers = [
    { driver: 'Regional Geopolitical Tensions', impact: 78, icon: AlertTriangle },
    { driver: 'Climate Change Concerns', impact: 65, icon: Frown },
    { driver: 'Economic Uncertainty', impact: 58, icon: TrendingUp },
    { driver: 'Privacy & AI Concerns', impact: 52, icon: AlertCircle },
    { driver: 'Cost of Living', impact: 48, icon: AlertCircle },
  ]

  // Monthly negative trend
  const monthlyNegative = [
    { month: 'Jan', negative: 24, concern: 72 },
    { month: 'Feb', negative: 22, concern: 68 },
    { month: 'Mar', negative: 20, concern: 65 },
    { month: 'Apr', negative: 23, concern: 70 },
    { month: 'May', negative: 18, concern: 62 },
    { month: 'Jun', negative: 16, concern: 58 },
    { month: 'Jul', negative: 19, concern: 64 },
    { month: 'Aug', negative: 17, concern: 60 },
    { month: 'Sep', negative: 15, concern: 55 },
    { month: 'Oct', negative: 14, concern: 52 },
    { month: 'Nov', negative: 15, concern: 54 },
    { month: 'Dec', negative: 13, concern: 48 },
  ]

  // Alert concerns
  const alertConcerns = [
    { concern: 'Geopolitical tensions in region', level: 'HIGH', trend: 'stable' },
    { concern: 'Climate impact on infrastructure', level: 'MEDIUM', trend: 'decreasing' },
    { concern: 'AI regulation uncertainty', level: 'MEDIUM', trend: 'decreasing' },
    { concern: 'Global economic volatility', level: 'LOW', trend: 'decreasing' },
    { concern: 'Social media misinformation', level: 'MEDIUM', trend: 'stable' },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="destructive" className="mb-2 bg-rose-500/20 text-rose-400 border-rose-500/50">NEGATIVE SENTIMENT</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-rose">Negative Sentiment Analysis</h1>
          <p className="mt-2 text-slate-400">
            Concern areas, risk indicators, and factors driving negative perception
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose-500/50 text-rose-400 hover:bg-rose-500/10">
            <Eye className="h-4 w-4" />
            Monitor Risks
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Mitigation Actions
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Avg Negative"
          value={`${Math.round(avgNegative)}%`}
          previousValue={Math.round(avgNegative) + 3}
          icon={<ThumbsDown className="h-6 w-6" />}
          gradient="rose"
          status="info"
        />
        <MetricCard
          title="Peak Negative"
          value={`${highestNegative}%`}
          previousValue={highestNegative + 8}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Negative Volume"
          value={totalNegativeVolume > 1000000 ? `${(totalNegativeVolume / 1000000).toFixed(1)}M` : `${(totalNegativeVolume / 1000).toFixed(0)}K`}
          previousValue={totalNegativeVolume * 1.15}
          icon={<Frown className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Decline Rate"
          value="-6%"
          previousValue={-8}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="concerns">Concerns</TabsTrigger>
          <TabsTrigger value="trends">Risk Areas</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Negative Sentiment Overview" description="Key negative sentiment metrics and trends">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Negative Sentiment Trend</CardTitle>
                  <CardDescription>Monthly negative sentiment evolution (declining)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={monthlyNegative}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'negative', name: 'Negative %', color: CHART_COLORS.rose },
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
                    <CardTitle className="text-lg">Concern Level Trend</CardTitle>
                    <CardDescription>Aggregate concern index</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={monthlyNegative}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'concern', name: 'Concern Index', color: CHART_COLORS.gold },
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

        {/* Concerns Tab */}
        <TabsContent value="concerns" className="space-y-6">
          <GlassPanel title="Negative Sentiment Drivers" description="Key factors driving negative sentiment">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Concern Impact Analysis</CardTitle>
                  <CardDescription>Major factors influencing negative sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={negativeDrivers}
                    xAxisKey="driver"
                    bars={[
                      { dataKey: 'impact', name: 'Impact %', color: CHART_COLORS.rose },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {negativeDrivers.map((driver, idx) => (
                  <Card key={idx} className="glass-card border-rose-500/30">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                          <driver.icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-slate-200">{driver.driver}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Impact Score</span>
                          <span className="text-rose-400 font-bold">{driver.impact}%</span>
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

        {/* Risk Areas Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="High Risk Categories" description="Categories with highest negative sentiment">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top 5 Negative Categories</CardTitle>
                  <CardDescription>Ranked by negative sentiment percentage</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {topNegative.map((trend, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-rose-500/30 bg-rose-500/10 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20 text-rose-400 font-bold">
                              #{idx + 1}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{trend.name}</p>
                              <p className="text-sm text-slate-400">{trend.category}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2">
                              <AlertCircle className="h-5 w-5 text-rose-400" />
                              <span className="text-2xl font-bold text-rose-400">
                                {Math.round(trend.sentiment?.negative || 0)}%
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

        {/* Alerts Tab */}
        <TabsContent value="alerts" className="space-y-6">
          <GlassPanel title="Risk Alerts" description="Current alert levels for negative sentiment concerns">
            <div className="space-y-6">
              {alertConcerns.map((alert, idx) => (
                <Card key={idx} className={`glass-card border-${alert.level === 'HIGH' ? 'rose' : alert.level === 'MEDIUM' ? 'yellow' : 'emerald'}-500/30`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          alert.level === 'HIGH' ? 'bg-rose-500/20 text-rose-400' :
                          alert.level === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-200">{alert.concern}</p>
                          <p className="text-sm text-slate-400">Trend: {alert.trend}</p>
                        </div>
                      </div>
                      <Badge variant={
                        alert.level === 'HIGH' ? 'destructive' :
                        alert.level === 'MEDIUM' ? 'warning' :
                        'success'
                      }>
                        {alert.level}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Year-over-Year Comparison</CardTitle>
                  <CardDescription>Negative sentiment trajectory</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { year: '2024', negative: 22 },
                      { year: '2025', negative: 18 },
                      { year: '2026', negative: 13 },
                    ]}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'negative', name: 'Negative %', color: CHART_COLORS.rose },
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
