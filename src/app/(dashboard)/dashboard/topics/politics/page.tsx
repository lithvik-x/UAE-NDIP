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
  User,
  Building,
  Vote,
  Scale,
  Landmark,
} from 'lucide-react'
import {
  usePoliticsGovernanceData,
} from '@/lib/data-loader'

export default function PoliticsGovernancePage() {
  const { data } = usePoliticsGovernanceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Politics & Governance data...</div>
      </div>
    )
  }

  const { metrics, keyFindings, sentiment, emotions, credibility, trends, stakeholders } = data

  // Extract key metrics
  const volume = metrics?.volume || 0
  const reach = metrics?.reach || 0
  const engagement = metrics?.engagement || 0

  // Key findings formatted for display
  const keyFindingsData = keyFindings?.slice(0, 8) || []

  // Sentiment data for pie chart
  const sentimentData = sentiment ? [
    { name: 'Positive', value: sentiment.positive || 0, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentiment.neutral || 0, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentiment.negative || 0, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 35, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 45, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 20, color: CHART_COLORS.rose },
  ]

  // Trend data for line chart
  const trendChartData = trends?.slice(0, 12).map((t, i) => ({
    month: t.period || `Month ${i + 1}`,
    value: t.value || 0,
    sentiment: t.sentiment || 50,
  })) || [
    { month: 'Jan', value: 1250, sentiment: 58 },
    { month: 'Feb', value: 1380, sentiment: 62 },
    { month: 'Mar', value: 1520, sentiment: 55 },
    { month: 'Apr', value: 1490, sentiment: 61 },
    { month: 'May', value: 1620, sentiment: 67 },
    { month: 'Jun', value: 1580, sentiment: 64 },
    { month: 'Jul', value: 1710, sentiment: 70 },
    { month: 'Aug', value: 1690, sentiment: 68 },
    { month: 'Sep', value: 1820, sentiment: 72 },
    { month: 'Oct', value: 1950, sentiment: 75 },
    { month: 'Nov', value: 1880, sentiment: 71 },
    { month: 'Dec', value: 2100, sentiment: 78 },
  ]

  // Emotion data for radar chart
  const emotionData = emotions ? [
    { emotion: 'Joy', value: emotions.joy || 0 },
    { emotion: 'Trust', value: emotions.trust || 0 },
    { emotion: 'Fear', value: emotions.fear || 0 },
    { emotion: 'Surprise', value: emotions.surprise || 0 },
    { emotion: 'Sadness', value: emotions.sadness || 0 },
    { emotion: 'Disgust', value: emotions.disgust || 0 },
    { emotion: 'Anger', value: emotions.anger || 0 },
    { emotion: 'Anticipation', value: emotions.anticipation || 0 },
  ] : [
    { emotion: 'Joy', value: 25 },
    { emotion: 'Trust', value: 45 },
    { emotion: 'Fear', value: 30 },
    { emotion: 'Surprise', value: 15 },
    { emotion: 'Sadness', value: 20 },
    { emotion: 'Disgust', value: 15 },
    { emotion: 'Anger', value: 25 },
    { emotion: 'Anticipation', value: 35 },
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
          <Badge variant="platinum" className="mb-2">H-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Politics & Governance</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'Federal government structure, presidential leadership, FNC elections, human rights'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Landmark className="h-4 w-4" />
            View Policy
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Media Volume"
          value={volume.toLocaleString()}
          previousValue={volume - 150}
          icon={<Newspaper className="h-6 w-6" />}
          gradient="platinum"
          status="info"
        />
        <MetricCard
          title="Reach"
          value={reach.toLocaleString()}
          previousValue={reach - 50000}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Engagement"
          value={engagement.toLocaleString()}
          previousValue={engagement - 2000}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Credibility Score"
          value={credibility?.score || 78}
          previousValue={(credibility?.score || 78) - 2}
          icon={<Shield className="h-6 w-6" />}
          gradient="gold"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Politics & Governance Overview" description="Key metrics and trend analysis">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Volume & Sentiment Trend</CardTitle>
                  <CardDescription>Media monitoring trend over the past 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={trendChartData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'value', name: 'Volume', color: CHART_COLORS.platinum },
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
                    <CardTitle className="text-lg">Emotion Analysis</CardTitle>
                    <CardDescription>Plutchik emotion model distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadarChart
                      data={emotionData}
                      metrics={[
                        { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.platinum },
                      ]}
                      height={280}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Findings Tab */}
        <TabsContent value="keyfindings" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical intelligence findings for Politics & Governance">
            <div className="space-y-6">
              {/* Red Alerts Section */}
              {redFindings.length > 0 && (
                <Card className="glass-card border-red-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                      <AlertCircle className="h-5 w-5" />
                      Red Alert Findings
                    </CardTitle>
                    <CardDescription>Critical issues requiring immediate attention</CardDescription>
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
                    <CardDescription>Issues requiring monitoring</CardDescription>
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
                  <CardDescription>Complete list of intelligence findings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {keyFindingsData.map((finding, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum">
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

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment & Emotion Analysis" description="Deep dive into emotional and sentiment patterns">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Breakdown</CardTitle>
                    <CardDescription>Positive, neutral, and negative sentiment</CardDescription>
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

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emotion Intensity</CardTitle>
                    <CardDescription>Plutchik model emotion analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emotionData}
                      xAxisKey="emotion"
                      bars={[
                        { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.platinum },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emotion Radar</CardTitle>
                  <CardDescription>Multi-dimensional emotion analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadarChart
                    data={emotionData}
                    metrics={[
                      { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.platinum },
                    ]}
                    height={350}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Stakeholders Tab */}
        <TabsContent value="stakeholders" className="space-y-6">
          <GlassPanel title="Key Stakeholders" description="Government entities and decision makers">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Stakeholder Map</CardTitle>
                <CardDescription>Entities involved in politics and governance</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-2">
                    {(stakeholders || ['President of UAE', 'Vice President & PM', 'Federal National Council', 'Ministry of Interior', 'Ministry of Foreign Affairs', 'Supreme Council of National Security']).map((stakeholder, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum">
                            <Building className="h-5 w-5" />
                          </div>
                          <span className="font-semibold text-slate-200">{stakeholder}</span>
                        </div>
                        <Badge variant="outline" className="text-platinum">H-Sector</Badge>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
