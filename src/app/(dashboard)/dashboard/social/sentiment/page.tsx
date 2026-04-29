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
  TrendingUp,
  Users,
  Zap,
  ThumbsUp,
  ThumbsDown,
  Minus,
  TrendingDown,
  Eye,
  Brain,
  PieChart as PieChartIcon,
  BarChart3,
  Activity,
  Clock,
} from 'lucide-react'
import {
  useTwitterIntelligenceData,
  useTiktokIntelligenceData,
  useInstagramIntelligenceData,
  useLinkedinIntelligenceData,
  useYoutubeIntelligenceData,
  useFacebookIntelligenceData,
} from '@/lib/data-loader'

export default function SentimentAnalysisDashboardPage() {
  const { data: twitter } = useTwitterIntelligenceData()
  const { data: tiktok } = useTiktokIntelligenceData()
  const { data: instagram } = useInstagramIntelligenceData()
  const { data: linkedin } = useLinkedinIntelligenceData()
  const { data: youtube } = useYoutubeIntelligenceData()
  const { data: facebook } = useFacebookIntelligenceData()

  if (!twitter || !tiktok || !instagram || !linkedin || !youtube || !facebook) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Sentiment data...</div>
      </div>
    )
  }

  // Aggregate sentiment data
  const platforms = [
    { name: 'Twitter/X', data: twitter, color: CHART_COLORS.platinum },
    { name: 'TikTok', data: tiktok, color: CHART_COLORS.rose },
    { name: 'Instagram', data: instagram, color: CHART_COLORS.purple },
    { name: 'LinkedIn', data: linkedin, color: CHART_COLORS.info },
    { name: 'YouTube', data: youtube, color: CHART_COLORS.rose },
    { name: 'Facebook', data: facebook, color: CHART_COLORS.indigo },
  ]

  // Calculate aggregate sentiment
  const aggregateSentiment = {
    positive: Math.round(
      platforms.reduce((sum, p) => sum + p.data.metrics.sentiment.breakdown.positive, 0) / platforms.length
    ),
    neutral: Math.round(
      platforms.reduce((sum, p) => sum + p.data.metrics.sentiment.breakdown.neutral, 0) / platforms.length
    ),
    negative: Math.round(
      platforms.reduce((sum, p) => sum + p.data.metrics.sentiment.breakdown.negative, 0) / platforms.length
    ),
  }

  // Overall sentiment score
  const overallScore = Math.round(
    platforms.reduce((sum, p) => sum + p.data.metrics.sentiment.score, 0) / platforms.length
  )

  // Sentiment data for pie chart
  const sentimentOverview = [
    { name: 'Positive', value: aggregateSentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: aggregateSentiment.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: aggregateSentiment.negative, color: CHART_COLORS.rose },
  ]

  // Platform sentiment comparison
  const platformSentiment = platforms.map(p => ({
    name: p.name,
    positive: p.data.metrics.sentiment.breakdown.positive,
    neutral: p.data.metrics.sentiment.breakdown.neutral,
    negative: p.data.metrics.sentiment.breakdown.negative,
    score: p.data.metrics.sentiment.score,
    color: p.color,
  }))

  // Monthly sentiment trend (simulated)
  const monthlyTrend = [
    { month: 'Jan', positive: 42, neutral: 35, negative: 23, score: 52 },
    { month: 'Feb', positive: 44, neutral: 34, negative: 22, score: 54 },
    { month: 'Mar', positive: 43, neutral: 33, negative: 24, score: 53 },
    { month: 'Apr', positive: 45, neutral: 32, negative: 23, score: 55 },
    { month: 'May', positive: 47, neutral: 31, negative: 22, score: 58 },
    { month: 'Jun', positive: 46, neutral: 32, negative: 22, score: 57 },
    { month: 'Jul', positive: 48, neutral: 30, negative: 22, score: 59 },
    { month: 'Aug', positive: 50, neutral: 29, negative: 21, score: 62 },
    { month: 'Sep', positive: 49, neutral: 30, negative: 21, score: 61 },
    { month: 'Oct', positive: 51, neutral: 29, negative: 20, score: 63 },
    { month: 'Nov', positive: 50, neutral: 28, negative: 22, score: 62 },
    { month: 'Dec', positive: 52, neutral: 28, negative: 20, score: 65 },
  ]

  // Emotion analysis (Plutchik model)
  const emotionData = [
    { emotion: 'Joy', value: 35 },
    { emotion: 'Trust', value: 62 },
    { emotion: 'Fear', value: 28 },
    { emotion: 'Surprise', value: 22 },
    { emotion: 'Sadness', value: 18 },
    { emotion: 'Disgust', value: 15 },
    { emotion: 'Anger', value: 24 },
    { emotion: 'Anticipation', value: 45 },
  ]

  // Key findings
  const keyFindings = [
    {
      type: 'positive',
      finding: 'Tourism content generates overwhelmingly positive sentiment',
      source: 'Instagram, TikTok, YouTube',
      metric: '+18% engagement',
    },
    {
      type: 'negative',
      finding: 'Reddit shows highest negative sentiment (53%)',
      source: 'r/dubai, r/uae',
      metric: '53% negative',
    },
    {
      type: 'warning',
      finding: 'Coordinated inauthentic behavior detected on Twitter/X',
      source: 'Bot analysis',
      metric: '91% bots',
    },
    {
      type: 'positive',
      finding: 'LinkedIn shows strongest professional sentiment',
      source: 'LinkedIn UAE',
      metric: '64% positive',
    },
  ]

  // Sentiment summary stats
  const sentimentStats = [
    { label: 'Overall Score', value: overallScore, icon: Brain, trend: '+8%' },
    { label: 'Avg Positive', value: `${aggregateSentiment.positive}%`, icon: ThumbsUp, trend: '+5%' },
    { label: 'Avg Negative', value: `${aggregateSentiment.negative}%`, icon: ThumbsDown, trend: '-3%' },
    { label: 'Avg Neutral', value: `${aggregateSentiment.neutral}%`, icon: Minus, trend: '-2%' },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2">SENTIMENT INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Sentiment Analysis Dashboard</h1>
          <p className="mt-2 text-slate-400">
            Cross-platform sentiment analysis: overall {overallScore > 50 ? 'positive' : 'mixed'} outlook
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Brain className="h-4 w-4" />
            Deep Analysis
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sentimentStats.map((stat, idx) => (
          <MetricCard
            key={idx}
            title={stat.label}
            value={stat.value}
            previousValue={stat.value}
            icon={<stat.icon className="h-6 w-6" />}
            gradient="denim"
          />
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platform Comparison</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="emotions">Emotion Analysis</TabsTrigger>
          <TabsTrigger value="findings">Key Findings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Sentiment Overview" description="Cross-platform sentiment aggregation">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Overall Sentiment Distribution</CardTitle>
                    <CardDescription>Aggregated across all platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentOverview}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment by Platform</CardTitle>
                    <CardDescription>Score breakdown per platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {platformSentiment.map((platform, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{platform.name}</span>
                            <span className="text-sm font-bold" style={{ color: platform.color }}>
                              {platform.score}
                            </span>
                          </div>
                          <div className="flex h-2 overflow-hidden rounded-full bg-slate-700">
                            <div
                              className="bg-emerald-500"
                              style={{ width: `${platform.positive}%` }}
                            />
                            <div
                              className="bg-platinum-500"
                              style={{ width: `${platform.neutral}%` }}
                            />
                            <div
                              className="bg-rose-500"
                              style={{ width: `${platform.negative}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Sentiment Trend</CardTitle>
                  <CardDescription>Overall sentiment score over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={monthlyTrend}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                      { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.platinum },
                      { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Platform Comparison Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <GlassPanel title="Platform Sentiment Comparison" description="Detailed breakdown by platform">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Score Comparison</CardTitle>
                  <CardDescription>Overall sentiment score (0-100) by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={platformSentiment.map(p => ({
                      name: p.name,
                      value: p.score,
                      color: p.color,
                    }))}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Sentiment Score', color: CHART_COLORS.navy }]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Positive Sentiment</CardTitle>
                    <CardDescription>Highest positive % by platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={platformSentiment.map(p => ({
                        name: p.name,
                        value: p.positive,
                        color: p.color,
                      }))}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Positive %', color: CHART_COLORS.emerald }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Negative Sentiment</CardTitle>
                    <CardDescription>Lowest negative % by platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={platformSentiment.map(p => ({
                        name: p.name,
                        value: p.negative,
                        color: p.color,
                      }))}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Negative %', color: CHART_COLORS.rose }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Sentiment Breakdown</CardTitle>
                  <CardDescription>Detailed sentiment percentages</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      {platformSentiment.map((platform, idx) => (
                        <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: platform.color }}
                              />
                              <span className="font-semibold text-slate-200">{platform.name}</span>
                            </div>
                            <Badge variant="outline" className="text-gold">Score: {platform.score}</Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-emerald-400">{platform.positive}%</p>
                              <p className="text-xs text-slate-400">Positive</p>
                            </div>
                            <div className="text-center">
                              <p className="text-2xl font-bold text-platinum-400">{platform.neutral}%</p>
                              <p className="text-xs text-slate-400">Neutral</p>
                            </div>
                            <div className="text-center">
                              <p className="text-2xl font-bold text-rose-400">{platform.negative}%</p>
                              <p className="text-xs text-slate-400">Negative</p>
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

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="Sentiment Trends" description="Historical sentiment analysis and predictions">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Overall Sentiment Score Trend</CardTitle>
                  <CardDescription>Monthly sentiment score (0-100)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={monthlyTrend}
                    xAxisKey="month"
                    areas={[{ dataKey: 'score', name: 'Sentiment Score', color: CHART_COLORS.navy }]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Positive Trend</CardTitle>
                    <CardDescription>Positive sentiment over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={monthlyTrend}
                      xAxisKey="month"
                      areas={[{ dataKey: 'positive', name: 'Positive %', color: CHART_COLORS.emerald }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Negative Trend</CardTitle>
                    <CardDescription>Negative sentiment over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={monthlyTrend}
                      xAxisKey="month"
                      areas={[{ dataKey: 'negative', name: 'Negative %', color: CHART_COLORS.rose }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trending Topics by Sentiment</CardTitle>
                  <CardDescription>Most discussed topics with sentiment labels</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        { topic: '#dubailife', sentiment: 'Positive', platform: 'Twitter' },
                        { topic: '#uaenews', sentiment: 'Neutral', platform: 'Twitter' },
                        { topic: '#gitex', sentiment: 'Positive', platform: 'Twitter' },
                        { topic: '#UAE', sentiment: 'Positive', platform: 'TikTok' },
                        { topic: '#AbuDhabi', sentiment: 'Positive', platform: 'Instagram' },
                        { topic: '#Jobs', sentiment: 'Positive', platform: 'LinkedIn' },
                        { topic: 'r/dubai', sentiment: 'Negative', platform: 'Reddit' },
                        { topic: 'r/uae', sentiment: 'Negative', platform: 'Reddit' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div>
                            <span className="font-mono text-sm font-medium text-gold">{item.topic}</span>
                            <p className="text-xs text-slate-400">{item.platform}</p>
                          </div>
                          <Badge
                            variant={
                              item.sentiment === 'Positive' ? 'success' :
                              item.sentiment === 'Negative' ? 'destructive' : 'outline'
                            }
                            className="text-xs"
                          >
                            {item.sentiment}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Emotion Analysis Tab */}
        <TabsContent value="emotions" className="space-y-6">
          <GlassPanel title="Emotion Analysis" description="Plutchik emotion model analysis across platforms">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emotion Distribution</CardTitle>
                    <CardDescription>Plutchik emotion model intensity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emotionData}
                      xAxisKey="emotion"
                      bars={[{ dataKey: 'value', name: 'Intensity', color: CHART_COLORS.navy }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emotion Radar</CardTitle>
                    <CardDescription>Multi-dimensional emotion analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadarChart
                      data={emotionData}
                      metrics={[
                        { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emotion Breakdown</CardTitle>
                  <CardDescription>Detailed emotion analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {emotionData.map((emotion, idx) => (
                      <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-200">{emotion.emotion}</span>
                          <Activity className="h-4 w-4 text-platinum" />
                        </div>
                        <p className="text-2xl font-bold text-gold">{emotion.value}</p>
                        <Progress value={emotion.value} className="mt-2 h-1" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Dominant Emotions by Platform</CardTitle>
                  <CardDescription>Primary emotions detected per platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {[
                        { platform: 'Twitter/X', primary: 'Trust', secondary: 'Anticipation', driver: 'Government narratives' },
                        { platform: 'TikTok', primary: 'Joy', secondary: 'Anticipation', driver: 'Lifestyle content' },
                        { platform: 'Instagram', primary: 'Joy', secondary: 'Trust', driver: 'Luxury content' },
                        { platform: 'LinkedIn', primary: 'Trust', secondary: 'Anticipation', driver: 'Career opportunities' },
                        { platform: 'Reddit', primary: 'Fear', secondary: 'Anger', driver: 'Expat concerns' },
                        { platform: 'YouTube', primary: 'Joy', secondary: 'Trust', driver: 'Educational content' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <div>
                            <span className="font-medium text-slate-200">{item.platform}</span>
                            <p className="text-xs text-slate-400">Driver: {item.driver}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-emerald-400">{item.primary}</Badge>
                            <Badge variant="outline" className="text-gold">{item.secondary}</Badge>
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

        {/* Key Findings Tab */}
        <TabsContent value="findings" className="space-y-6">
          <GlassPanel title="Key Sentiment Findings" description="Critical insights from sentiment analysis">
            <div className="space-y-6">
              {/* Summary Alerts */}
              <div className="grid gap-4 sm:grid-cols-3">
                <Card className="glass-card border-emerald-500/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <ThumbsUp className="h-8 w-8 text-emerald-400" />
                      <div>
                        <p className="text-2xl font-bold text-emerald-400">{aggregateSentiment.positive}%</p>
                        <p className="text-sm text-slate-400">Average Positive</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card border-platinum-500/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Minus className="h-8 w-8 text-platinum-400" />
                      <div>
                        <p className="text-2xl font-bold text-platinum-400">{aggregateSentiment.neutral}%</p>
                        <p className="text-sm text-slate-400">Average Neutral</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card border-rose-500/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <ThumbsDown className="h-8 w-8 text-rose-400" />
                      <div>
                        <p className="text-2xl font-bold text-rose-400">{aggregateSentiment.negative}%</p>
                        <p className="text-sm text-slate-400">Average Negative</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Findings List */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Intelligence Findings</CardTitle>
                  <CardDescription>Critical sentiment insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      {keyFindings.map((finding, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start justify-between rounded-lg border p-4 ${
                            finding.type === 'positive'
                              ? 'border-emerald-500/50 bg-emerald-500/10'
                              : finding.type === 'negative'
                              ? 'border-rose-500/50 bg-rose-500/10'
                              : 'border-yellow-500/50 bg-yellow-500/10'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {finding.type === 'positive' && <ThumbsUp className="h-5 w-5 text-emerald-400" />}
                            {finding.type === 'negative' && <ThumbsDown className="h-5 w-5 text-rose-400" />}
                            {finding.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-400" />}
                            <div>
                              <p className="font-medium text-slate-200">{finding.finding}</p>
                              <p className="text-sm text-slate-400">Source: {finding.source}</p>
                            </div>
                          </div>
                          <Badge
                            variant={
                              finding.type === 'positive' ? 'success' :
                              finding.type === 'negative' ? 'destructive' : 'warning'
                            }
                            className="text-xs"
                          >
                            {finding.metric}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Top Positive/Negative */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                      <TrendingUp className="h-5 w-5" />
                      Most Positive Platforms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {platformSentiment
                        .sort((a, b) => b.positive - a.positive)
                        .slice(0, 3)
                        .map((platform, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-3">
                            <span className="text-sm font-medium text-slate-200">{platform.name}</span>
                            <Badge variant="success">{platform.positive}% positive</Badge>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                      <TrendingDown className="h-5 w-5" />
                      Most Negative Platforms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {platformSentiment
                        .sort((a, b) => b.negative - a.negative)
                        .slice(0, 3)
                        .map((platform, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-rose-500/10 p-3">
                            <span className="text-sm font-medium text-slate-200">{platform.name}</span>
                            <Badge variant="destructive">{platform.negative}% negative</Badge>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
