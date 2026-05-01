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
  Target,
  MessageSquare,
  Languages,
  AlertOctagon,
} from 'lucide-react'
import {
  useTrendsDataArrayData,
  useSarcasmData,
  useNeutralSentimentData,
} from '@/lib/data-loader'

export default function SentimentOverviewPage() {
  const { data: trendsData } = useTrendsDataArrayData()
  const sarcasmData = useSarcasmData()
  const neutralData = useNeutralSentimentData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-500-400">Loading Sentiment data...</div>
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
    { emotion: 'Sadness', value: 28, color: CHART_COLORS.info },
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
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">Sentiment Overview</h1>
          <p className="mt-2 text-platinum-500-400">
            Cross-sector sentiment analysis, emotion tracking, and public perception metrics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Brain className="h-4 w-4" />
            Deep Analysis
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-500-950 gap-2">
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
          gradient="denim"
        />
      </div>

      {/* Sarcasm Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Irony Themes"
          value={sarcasmData.ironyThemes.length}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="orange"
          status="warning"
        />
        <MetricCard
          title="English Patterns"
          value={sarcasmData.englishPatterns.length}
          icon={<Languages className="h-6 w-6" />}
          gradient="fuchsia"
        />
        <MetricCard
          title="Arabic Patterns"
          value={sarcasmData.arabicPatterns.length}
          icon={<Languages className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Critical KPIs"
          value={sarcasmData.criticalKPIs.filter(k => k.status === 'CRITICAL').length}
          icon={<AlertOctagon className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="emotions">Emotions</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
          <TabsTrigger value="breakdown">Category Breakdown</TabsTrigger>
          <TabsTrigger value="factual">Factual Data</TabsTrigger>
          <TabsTrigger value="sarcasm">Sarcasm/Irony</TabsTrigger>
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
                              <span className="text-sm font-medium text-platinum-500-200">{emotion.emotion}</span>
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
                              <span className="text-sm font-medium text-platinum-500-200">{emotion.emotion}</span>
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
                    <p className="text-sm text-platinum-500-400 mt-1">YoY improvement in positive sentiment</p>
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
                    <p className="text-sm text-platinum-500-400 mt-1">YoY decrease in negative sentiment</p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-platinum-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-platinum-500-400 flex items-center gap-2">
                      <Meh className="h-5 w-5" />
                      Neutral Trend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-platinum-500-400">-8%</p>
                    <p className="text-sm text-platinum-500-400 mt-1">YoY shift away from neutral stance</p>
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
                        <span className="font-medium text-platinum-500-200 text-sm">{trend.name}</span>
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

        {/* Factual Data Tab */}
        <TabsContent value="factual" className="space-y-6">
          <GlassPanel title="Neutral Factual Data" description="Objective data coverage across UAE sectors (MD 9-3)">
            <div className="space-y-6">
              {/* Data Quality Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Total Data Points"
                  value={neutralData.overview.totalDataPoints}
                  icon={<Activity className="h-6 w-6" />}
                  gradient="denim"
                  status="success"
                />
                <MetricCard
                  title="Categories Covered"
                  value={neutralData.overview.totalCategories}
                  icon={<Target className="h-6 w-6" />}
                  gradient="gold"
                />
                <MetricCard
                  title="Source Reliability"
                  value={neutralData.metrics[0].value}
                  icon={<AlertCircle className="h-6 w-6" />}
                  gradient="emerald"
                />
                <MetricCard
                  title="Coverage Score"
                  value="85%"
                  icon={<TrendingUp className="h-6 w-6" />}
                  gradient="fuchsia"
                />
              </div>

              {/* Category Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Data Distribution by Category</CardTitle>
                  <CardDescription>Coverage and data points across sectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={neutralData.sentimentDistribution}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              {/* Population KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Population Statistics</CardTitle>
                  <CardDescription>Key demographic indicators (47 data points, 95% coverage)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {neutralData.populationKPIs.slice(0, 12).map((kpi, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-glass-surface/50 border border-glass-border">
                        <p className="text-xs text-platinum-500-400 truncate">{kpi.indicator}</p>
                        <p className="text-lg font-bold text-platinum-500-100">{kpi.value}</p>
                        <p className="text-xs text-platinum-500-500">{kpi.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Economic KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Economic Indicators</CardTitle>
                  <CardDescription>GDP, trade, and financial metrics (35 data points, 90% coverage)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {neutralData.economicKPIs.slice(0, 12).map((kpi, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-glass-surface/50 border border-glass-border">
                        <p className="text-xs text-platinum-500-400 truncate">{kpi.indicator}</p>
                        <p className="text-lg font-bold text-platinum-500-100">{kpi.value}</p>
                        <p className="text-xs text-platinum-500-500">{kpi.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Climate Policy KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Climate & Sustainability</CardTitle>
                  <CardDescription>Environmental targets and current status (25 data points, 80% coverage)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {neutralData.climatePolicyKPIs.slice(0, 12).map((kpi, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-glass-surface/50 border border-glass-border">
                        <p className="text-xs text-platinum-500-400 truncate">{kpi.indicator}</p>
                        <p className="text-lg font-bold text-emerald-400">{kpi.value}</p>
                        <p className="text-xs text-platinum-500-500">{kpi.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rankings KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Global Rankings</CardTitle>
                  <CardDescription>UAE position in international indices (18 data points, 85% coverage)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={neutralData.rankingKPIs.slice(0, 8).map(r => ({
                      indicator: r.indicator,
                      rank: parseInt(String(r.value)),
                    }))}
                    xAxisKey="indicator"
                    bars={[
                      { dataKey: 'rank', name: 'Rank', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Future Roadmap */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Future Roadmap Targets</CardTitle>
                  <CardDescription>National 2030-2050 strategic targets (15 data points, 70% coverage)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {neutralData.futureRoadmapKPIs.slice(0, 8).map((kpi, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-glass-surface/50 border border-glass-border">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-platinum-500-200">{kpi.indicator}</p>
                          {kpi.currentValue && (
                            <p className="text-xs text-platinum-500-400">Current: {kpi.currentValue}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gold-700">{kpi.target}</p>
                          <p className="text-xs text-platinum-500-500">by {kpi.targetYear}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sources Consulted */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sources Consulted</CardTitle>
                  <CardDescription>Government, international, and think tank sources (Tier 1-2)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {neutralData.sourcesConsulted.slice(0, 12).map((source, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-glass-surface/50 border border-glass-border">
                        <Badge variant={source.tier === 1 ? 'default' : 'secondary'} className="shrink-0">
                          T{source.tier}
                        </Badge>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-platinum-500-200 truncate">{source.source}</p>
                          <p className="text-xs text-platinum-500-500">{source.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sarcasm/Irony Tab */}
        <TabsContent value="sarcasm" className="space-y-6">
          <GlassPanel title="Irony Detection Analysis" description="Cross-cutting sarcasm and irony patterns in UAE discourse">
            <div className="space-y-6">
              {/* Irony Intensity by Theme */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Irony Intensity by Theme</CardTitle>
                  <CardDescription>Severity scores for major irony markers</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sarcasmData.ironyIntensityData.map(d => ({ theme: d.theme, score: d.score, color: d.color }))}
                    xAxisKey="theme"
                    bars={[
                      { dataKey: 'score', name: 'Irony Score', color: CHART_COLORS.rose },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Sentiment Distribution with Irony */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment including ironic sentiment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sarcasmData.sentimentDistributionData}
                      height={300}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Topic Sentiment</CardTitle>
                    <CardDescription>Sentiment breakdown by topic with irony overlay</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={sarcasmData.sentimentByTopic.slice(0, 6).map(t => ({
                        topic: t.topic,
                        positive: t.positivePercent,
                        negative: t.negativePercent,
                        ironic: t.ironicPercent,
                      }))}
                      xAxisKey="topic"
                      bars={[
                        { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                        { dataKey: 'ironic', name: 'Ironic', color: CHART_COLORS.orange },
                        { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* English Sarcasm Patterns */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">English Sarcasm Patterns</CardTitle>
                  <CardDescription>Common ironic phrases and their intensity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sarcasmData.englishPatterns.map((pattern, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-glass-surface/50 border border-glass-border">
                        <div className="flex-1">
                          <p className="font-mono text-sm text-platinum-500-200">{pattern.pattern}</p>
                          <p className="text-xs text-platinum-500-400 mt-1">{pattern.context}</p>
                        </div>
                        <Badge
                          variant={pattern.ironyIntensity.includes('Very High') ? 'destructive' : pattern.ironyIntensity.includes('High') ? 'warning' : 'secondary'}
                          className="ml-4"
                        >
                          {pattern.ironyIntensity}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arabic Sarcasm Patterns */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Arabic Sarcasm Patterns</CardTitle>
                  <CardDescription>Arabic phrases with ironic usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sarcasmData.arabicPatterns.map((pattern, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-glass-surface/50 border border-glass-border">
                        <div className="flex-1">
                          <p className="font-mono text-lg text-platinum-500-200 text-right" dir="rtl">{pattern.arabicPattern}</p>
                          <p className="text-sm text-platinum-500-300 mt-1">{pattern.translation}</p>
                          <p className="text-xs text-platinum-500-400">{pattern.context}</p>
                        </div>
                        <Badge
                          variant={pattern.ironyIntensity.includes('Very High') ? 'destructive' : pattern.ironyIntensity.includes('Medium-High') ? 'warning' : 'secondary'}
                          className="ml-4"
                        >
                          {pattern.ironyIntensity}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Documented Contradictions */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose-400" />
                    Documented Contradictions
                  </CardTitle>
                  <CardDescription>Official claims vs documented realities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sarcasmData.documentedContradictions.map((c, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/20">
                        <div className="flex items-start gap-3">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-rose-300">"{c.officialClaim}"</p>
                            <p className="text-sm text-platinum-500-400 mt-1">{c.reality}</p>
                            <p className="text-xs text-platinum-500-500 mt-1">Source: {c.source}</p>
                          </div>
                          <Badge variant="destructive" className="shrink-0">
                            {c.ironyMarker}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Critical KPIs */}
              <Card className="glass-card border-amber-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-amber-400" />
                    Critical KPIs for Monitoring
                  </CardTitle>
                  <CardDescription>Key metrics requiring ongoing attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {sarcasmData.criticalKPIs.map((kpi, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-glass-surface/50 border border-glass-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-platinum-500-200">{kpi.kpi}</span>
                          <Badge
                            variant={kpi.status === 'CRITICAL' ? 'destructive' : kpi.status === 'AT RISK' ? 'warning' : 'secondary'}
                          >
                            {kpi.status}
                          </Badge>
                        </div>
                        <p className="text-xl font-bold text-platinum-500-100">{kpi.currentValue}</p>
                        <p className="text-xs text-platinum-500-400 mt-1">Threshold: {kpi.threshold}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Quotations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Quotations</CardTitle>
                  <CardDescription>Significant statements from credible sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sarcasmData.keyQuotations.slice(0, 6).map((q, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-glass-surface/50 border border-glass-border">
                        <p className="text-sm text-platinum-500-200 italic">"{q.quote}"</p>
                        <p className="text-xs text-platinum-500-400 mt-2">— {q.source}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
