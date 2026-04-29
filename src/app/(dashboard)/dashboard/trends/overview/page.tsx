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
  Brain,
  ChartLine,
  Target,
  Sparkles,
} from 'lucide-react'
import {
  useTrendsOverviewData,
  useTrendsDataArrayData,
} from '@/lib/data-loader'

export default function TrendsOverviewPage() {
  const { data: overviewData } = useTrendsOverviewData()
  const { data: trendsData } = useTrendsDataArrayData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Trends data...</div>
      </div>
    )
  }

  // Aggregate metrics from all trends
  const totalAdoption = trendsData.reduce((sum, t) => sum + (t.uaeAdoptionRate || 0), 0) / trendsData.length
  const avgSentiment = trendsData.reduce((sum, t) => sum + (t.sentiment?.positive || 0), 0) / trendsData.length
  const totalVolume = trendsData.reduce((sum, t) => sum + (t.sentiment?.volume || 0), 0)

  // Trend categories for overview
  const trendCategories = trendsData.map(t => ({
    name: t.name,
    adoption: t.uaeAdoptionRate || 0,
    sentiment: t.sentiment?.positive || 0,
    category: t.category,
    alert: t.alertLevel,
  }))

  // Sentiment distribution across trends
  const sentimentDistribution = [
    { name: 'Positive', value: Math.round(avgSentiment), color: CHART_COLORS.emerald },
    { name: 'Neutral', value: Math.round(100 - avgSentiment - 15), color: CHART_COLORS.platinum },
    { name: 'Concern', value: 15, color: CHART_COLORS.rose },
  ]

  // Adoption rate by category
  const adoptionByCategory = trendsData.map(t => ({
    name: t.name.split(' ')[0],
    value: t.uaeAdoptionRate || 0,
    color: t.uaeAdoptionRate > 85 ? CHART_COLORS.gold : t.uaeAdoptionRate > 75 ? CHART_COLORS.navy : CHART_COLORS.platinum,
  }))

  // Generation breakdown for AI trends as example
  const aiTrend = trendsData.find(t => t.category === 'ai-technology')
  const generationalData = aiTrend ? [
    { name: 'Gen Z', value: aiTrend.generationalBreakdown?.genZ || 0, color: CHART_COLORS.gold },
    { name: 'Millennial', value: aiTrend.generationalBreakdown?.millennial || 0, color: CHART_COLORS.navy },
    { name: 'Gen X', value: aiTrend.generationalBreakdown?.genX || 0, color: CHART_COLORS.platinum },
    { name: 'Boomer', value: aiTrend.generationalBreakdown?.boomer || 0, color: CHART_COLORS.emerald },
  ] : []

  // Alert summary
  const greenAlerts = trendsData.filter(t => t.alertLevel === 'GREEN').length
  const yellowAlerts = trendsData.filter(t => t.alertLevel === 'YELLOW').length
  const redAlerts = trendsData.filter(t => t.alertLevel === 'RED').length

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">TRENDS INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Trends Overview</h1>
          <p className="mt-2 text-slate-400">
            Cross-sector trend analysis, adoption metrics, and predictive foresight for the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Target className="h-4 w-4" />
            View Forecasts
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Sparkles className="h-4 w-4" />
            Analyze Trends
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Avg Adoption Rate"
          value={`${Math.round(totalAdoption)}%`}
          previousValue={Math.round(totalAdoption) - 3}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Active Trends"
          value={trendsData.length.toString()}
          previousValue={trendsData.length - 1}
          icon={<ChartLine className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Avg Sentiment"
          value={`${Math.round(avgSentiment)}%`}
          previousValue={Math.round(avgSentiment) - 2}
          icon={<Brain className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Media Volume"
          value={totalVolume > 1000000 ? `${(totalVolume / 1000000).toFixed(1)}M` : `${(totalVolume / 1000).toFixed(0)}K`}
          previousValue={totalVolume * 0.92}
          icon={<Newspaper className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="adoption">Adoption Analysis</TabsTrigger>
          <TabsTrigger value="alerts">Alert Status</TabsTrigger>
          <TabsTrigger value="forecast">Forecasts</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Trends Overview" description="Key trend indicators and sentiment analysis">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trend Adoption Rates</CardTitle>
                  <CardDescription>UAE adoption rate across all tracked trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={adoptionByCategory}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Adoption %', color: CHART_COLORS.gold },
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
                    <CardDescription>Overall sentiment across trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentDistribution}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Alert Status Summary</CardTitle>
                    <CardDescription>Current alert levels across all trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                        <div className="flex items-center gap-3">
                          <Shield className="h-6 w-6 text-emerald-400" />
                          <span className="font-medium text-slate-200">Green Alerts</span>
                        </div>
                        <span className="text-2xl font-bold text-emerald-400">{greenAlerts}</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30">
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="h-6 w-6 text-yellow-400" />
                          <span className="font-medium text-slate-200">Yellow Alerts</span>
                        </div>
                        <span className="text-2xl font-bold text-yellow-400">{yellowAlerts}</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-red-500/10 p-4 border border-red-500/30">
                        <div className="flex items-center gap-3">
                          <AlertCircle className="h-6 w-6 text-red-400" />
                          <span className="font-medium text-slate-200">Red Alerts</span>
                        </div>
                        <span className="text-2xl font-bold text-red-400">{redAlerts}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Adoption Analysis Tab */}
        <TabsContent value="adoption" className="space-y-6">
          <GlassPanel title="Adoption Analysis" description="Detailed adoption metrics by trend category">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Generational Adoption Breakdown</CardTitle>
                  <CardDescription>AI Technology adoption by generation</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={generationalData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Adoption %', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {trendsData.map((trend, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-slate-200 text-sm">{trend.name}</span>
                        <Badge
                          variant={trend.alertLevel === 'GREEN' ? 'success' : trend.alertLevel === 'YELLOW' ? 'warning' : 'destructive'}
                          className="text-xs"
                        >
                          {trend.alertLevel}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>UAE Adoption</span>
                          <span>{trend.uaeAdoptionRate}%</span>
                        </div>
                        <Progress value={trend.uaeAdoptionRate} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Alerts Tab */}
        <TabsContent value="alerts" className="space-y-6">
          <GlassPanel title="Alert Status" description="Current alert levels and critical findings">
            <div className="space-y-6">
              {trendsData.filter(t => t.alertLevel === 'RED').length > 0 && (
                <Card className="glass-card border-red-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                      <AlertCircle className="h-5 w-5" />
                      Red Alert Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {trendsData.filter(t => t.alertLevel === 'RED').map((trend, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-red-500/10 p-4 border border-red-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{trend.name}</p>
                            <p className="mt-1 text-sm text-slate-400">{trend.description?.slice(0, 150)}...</p>
                          </div>
                          <Badge variant="destructive" className="ml-4">RED</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {trendsData.filter(t => t.alertLevel === 'YELLOW').length > 0 && (
                <Card className="glass-card border-yellow-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
                      <AlertTriangle className="h-5 w-5" />
                      Yellow Alert Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {trendsData.filter(t => t.alertLevel === 'YELLOW').map((trend, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{trend.name}</p>
                            <p className="mt-1 text-sm text-slate-400">UAE Adoption: {trend.uaeAdoptionRate}%</p>
                          </div>
                          <Badge variant="warning" className="ml-4">YELLOW</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="glass-card border-emerald-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                    <Shield className="h-5 w-5" />
                    Green Status Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {trendsData.filter(t => t.alertLevel === 'GREEN').map((trend, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="h-5 w-5 text-emerald-400" />
                            <span className="font-medium text-slate-200">{trend.name}</span>
                          </div>
                          <span className="text-sm text-emerald-400">{trend.uaeAdoptionRate}% adoption</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Forecasts Tab */}
        <TabsContent value="forecast" className="space-y-6">
          <GlassPanel title="Trend Forecasts" description="Predictive scenarios and key indicators">
            <div className="space-y-6">
              {trendsData.slice(0, 5).map((trend, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{trend.name}</CardTitle>
                    <CardDescription>{trend.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trend.forecasts?.slice(0, 3).map((forecast, fIdx) => (
                        <div key={fIdx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge
                              variant={forecast.scenario === 'optimistic' ? 'success' : forecast.scenario === 'baseline' ? 'default' : 'destructive'}
                              className="capitalize"
                            >
                              {forecast.scenario}
                            </Badge>
                            <span className="text-sm text-slate-400">
                              Probability: {Math.round(forecast.probability * 100)}%
                            </span>
                          </div>
                          <p className="text-sm text-slate-300 mb-2">Timeline: {forecast.timeline}</p>
                          <div className="space-y-1">
                            {forecast.indicators?.slice(0, 3).map((indicator, iIdx) => (
                              <p key={iIdx} className="text-xs text-slate-400 flex items-start gap-2">
                                <span className="text-gold">•</span>
                                {indicator}
                              </p>
                            ))}
                          </div>
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
