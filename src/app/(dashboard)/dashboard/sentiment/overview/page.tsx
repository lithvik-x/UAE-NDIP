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
  Users,
  Zap,
  Brain,
  Heart,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  Activity,
} from 'lucide-react'
import {
  useTrendsDataArrayData,
} from '@/lib/data-loader'

export default function SentimentOverviewPage() {
  const { data: trendsData } = useTrendsDataArrayData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Sentiment data...</div>
      </div>
    )
  }

  // Aggregate sentiment data from all trends
  const totalPositive = trendsData.reduce((sum, t) => sum + (t.sentiment?.positive || 0), 0)
  const totalNegative = trendsData.reduce((sum, t) => sum + (t.sentiment?.negative || 0), 0)
  const totalNeutral = trendsData.reduce((sum, t) => sum + (t.sentiment?.neutral || 0), 0)
  const avgPositive = totalPositive / trendsData.length
  const avgNegative = totalNegative / trendsData.length
  const avgNeutral = totalNeutral / trendsData.length
  const totalVolume = trendsData.reduce((sum, t) => sum + (t.sentiment?.volume || 0), 0)

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: Math.round(avgPositive), color: CHART_COLORS.emerald },
    { name: 'Neutral', value: Math.round(avgNeutral), color: CHART_COLORS.platinum },
    { name: 'Negative', value: Math.round(avgNegative), color: CHART_COLORS.rose },
  ]

  // Sentiment by category
  const sentimentByCategory = trendsData.map(t => ({
    name: t.name.split(' ')[0],
    positive: t.sentiment?.positive || 0,
    negative: t.sentiment?.negative || 0,
    neutral: t.sentiment?.neutral || 0,
  }))

  // Monthly sentiment trend
  const monthlySentiment = [
    { month: 'Jan', positive: 62, negative: 18, neutral: 20 },
    { month: 'Feb', positive: 65, negative: 16, neutral: 19 },
    { month: 'Mar', positive: 68, negative: 15, neutral: 17 },
    { month: 'Apr', positive: 64, negative: 17, neutral: 19 },
    { month: 'May', positive: 70, negative: 14, neutral: 16 },
    { month: 'Jun', positive: 72, negative: 13, neutral: 15 },
    { month: 'Jul', positive: 69, negative: 15, neutral: 16 },
    { month: 'Aug', positive: 71, negative: 14, neutral: 15 },
    { month: 'Sep', positive: 73, negative: 13, neutral: 14 },
    { month: 'Oct', positive: 75, negative: 12, neutral: 13 },
    { month: 'Nov', positive: 74, negative: 13, neutral: 13 },
    { month: 'Dec', positive: 76, negative: 12, neutral: 12 },
  ]

  // Plutchik emotions
  const emotionData = [
    { emotion: 'Joy', value: 72, color: CHART_COLORS.gold },
    { emotion: 'Trust', value: 68, color: CHART_COLORS.navy },
    { emotion: 'Fear', value: 32, color: CHART_COLORS.rose },
    { emotion: 'Surprise', value: 45, color: CHART_COLORS.platinum },
    { emotion: 'Sadness', value: 28, color: CHART_COLORS.cyan },
    { emotion: 'Disgust', value: 22, color: CHART_COLORS.emerald },
    { emotion: 'Anger', value: 25, color: CHART_COLORS.rose },
    { emotion: 'Anticipation', value: 65, color: CHART_COLORS.gold },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">SENTIMENT INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Sentiment Overview</h1>
          <p className="mt-2 text-slate-400">
            Cross-sector sentiment analysis, emotion tracking, and public perception metrics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Brain className="h-4 w-4" />
            Deep Analysis
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze Sentiment
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Avg Positive"
          value={`${Math.round(avgPositive)}%`}
          previousValue={Math.round(avgPositive) - 3}
          icon={<ThumbsUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Avg Negative"
          value={`${Math.round(avgNegative)}%`}
          previousValue={Math.round(avgNegative) + 2}
          icon={<ThumbsDown className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Sentiment Score"
          value={`${Math.round(avgPositive - avgNegative)}`}
          previousValue={Math.round(avgPositive - avgNegative) - 5}
          icon={<Activity className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Total Volume"
          value={totalVolume > 1000000 ? `${(totalVolume / 1000000).toFixed(1)}M` : `${(totalVolume / 1000).toFixed(0)}K`}
          previousValue={totalVolume * 0.9}
          icon={<Users className="h-6 w-6" />}
          gradient="navy"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="emotions">Emotions</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
          <TabsTrigger value="breakdown">Category Breakdown</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Sentiment Overview" description="Overall sentiment distribution and key metrics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                  <CardDescription>Aggregated sentiment across all sectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentData}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Trend</CardTitle>
                    <CardDescription>Monthly sentiment evolution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={monthlySentiment}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emotion Radar</CardTitle>
                    <CardDescription>Plutchik model emotion analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadarChart
                      data={emotionData.slice(0, 6)}
                      metrics={[
                        { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.gold },
                      ]}
                      height={250}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Emotions Tab */}
        <TabsContent value="emotions" className="space-y-6">
          <GlassPanel title="Emotion Analysis" description="Plutchik model emotion distribution">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emotion Intensity</CardTitle>
                  <CardDescription>All 8 Plutchik emotions</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={emotionData}
                    xAxisKey="emotion"
                    bars={[
                      { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Positive Emotions</CardTitle>
                    <CardDescription>Joy, Trust, Anticipation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {emotionData.filter(e => ['Joy', 'Trust', 'Anticipation'].includes(e.emotion)).map((emotion, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Smile className="h-5 w-5 text-emerald-400" />
                              <span className="text-sm font-medium text-slate-200">{emotion.emotion}</span>
                            </div>
                            <span className="text-lg font-bold text-emerald-400">{emotion.value}%</span>
                          </div>
                          <Progress value={emotion.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Negative Emotions</CardTitle>
                    <CardDescription>Fear, Sadness, Disgust, Anger</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {emotionData.filter(e => ['Fear', 'Sadness', 'Disgust', 'Anger'].includes(e.emotion)).map((emotion, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Frown className="h-5 w-5 text-rose-400" />
                              <span className="text-sm font-medium text-slate-200">{emotion.emotion}</span>
                            </div>
                            <span className="text-lg font-bold text-rose-400">{emotion.value}%</span>
                          </div>
                          <Progress value={emotion.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="Sentiment Trends" description="Historical sentiment analysis and patterns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Over Time</CardTitle>
                  <CardDescription>12-month sentiment trend analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={monthlySentiment}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                      { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.platinum },
                      { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-emerald-400 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Positive Trend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-emerald-400">+14%</p>
                    <p className="text-sm text-slate-400 mt-1">YoY improvement in positive sentiment</p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-rose-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-rose-400 flex items-center gap-2">
                      <TrendingDown className="h-5 w-5" />
                      Negative Trend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-rose-400">-6%</p>
                    <p className="text-sm text-slate-400 mt-1">YoY decrease in negative sentiment</p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-platinum-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-platinum-400 flex items-center gap-2">
                      <Meh className="h-5 w-5" />
                      Neutral Trend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-platinum-400">-8%</p>
                    <p className="text-sm text-slate-400 mt-1">YoY shift away from neutral stance</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Breakdown Tab */}
        <TabsContent value="breakdown" className="space-y-6">
          <GlassPanel title="Category Breakdown" description="Sentiment distribution by trend category">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Category</CardTitle>
                  <CardDescription>Positive sentiment rate by trend category</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sentimentByCategory}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'positive', name: 'Positive %', color: CHART_COLORS.emerald },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {trendsData.slice(0, 9).map((trend, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-slate-200 text-sm">{trend.name}</span>
                        <Badge variant={trend.sentiment?.positive && trend.sentiment.positive > 65 ? 'success' : 'warning'} className="text-xs">
                          {Math.round(trend.sentiment?.positive || 0)}%
                        </Badge>
                      </div>
                      <div className="flex gap-1">
                        <div
                          className="h-2 flex-1 rounded-l-full bg-emerald-500"
                          style={{ width: `${trend.sentiment?.positive || 0}%` }}
                        />
                        <div
                          className="h-2 flex-1 bg-platinum-500"
                          style={{ width: `${trend.sentiment?.neutral || 0}%` }}
                        />
                        <div
                          className="h-2 flex-1 rounded-r-full bg-rose-500"
                          style={{ width: `${trend.sentiment?.negative || 0}%` }}
                        />
                      </div>
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
