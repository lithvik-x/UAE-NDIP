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
  Globe,
  Hash,
  Lightbulb,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
  Ship,
  Plane,
  Train,
  Car,
  Warehouse,
  Calendar,
  MapPin,
} from 'lucide-react'
import {
  transportationLogisticsData,
} from '@/lib/data-loader'

export default function TransportationLogisticsPage() {
  const data = transportationLogisticsData

  // Extract data
  const keyFindings = data.keyFindings || []
  const metrics = data.metrics || { volume: 0, reach: 0, engagement: 0, sentiment: { positive: 0, negative: 0, neutral: 0, overall: 0 } }
  const sentiment = data.sentiment || { positive: 0, negative: 0, neutral: 0, overall: 0 }
  const emotions = data.emotions || { joy: 0, trust: 0, fear: 0, surprise: 0, sadness: 0, disgust: 0, anger: 0, anticipation: 0 }
  const trends = data.trends || []
  const stakeholders = data.stakeholders || []

  // Calculate derived metrics
  const totalTEUs = 21
  const metroRidership = 294.7
  const logisticsMarket = 57.6
  const portRanking = 3

  // Sentiment data for pie chart
  const sentimentData = [
    { name: 'Positive', value: sentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Negative', value: sentiment.negative, color: CHART_COLORS.danger },
    { name: 'Neutral', value: sentiment.neutral, color: CHART_COLORS.platinum },
  ]

  // Emotions data for bar chart
  const emotionData = [
    { name: 'Joy', value: emotions.joy, color: CHART_COLORS.gold },
    { name: 'Trust', value: emotions.trust, color: CHART_COLORS.navy },
    { name: 'Fear', value: emotions.fear, color: CHART_COLORS.danger },
    { name: 'Surprise', value: emotions.surprise, color: CHART_COLORS.purple },
    { name: 'Sadness', value: emotions.sadness, color: CHART_COLORS.info },
    { name: 'Disgust', value: emotions.disgust, color: CHART_COLORS.orange },
    { name: 'Anger', value: emotions.anger, color: CHART_COLORS.rose },
    { name: 'Anticipation', value: emotions.anticipation, color: CHART_COLORS.emerald },
  ]

  // Key metrics for bar chart
  const metricsChartData = keyFindings.slice(0, 6).map((finding, idx) => ({
    name: finding.finding.substring(0, 25) + (finding.finding.length > 25 ? '...' : ''),
    value: parseFloat(String(finding.metric).replace(/[^0-9.]/g, '')) || 0,
    color: idx < 3 ? CHART_COLORS.gold : CHART_COLORS.navy,
  }))

  // Trend data for line chart
  const trendChartData = [
    { period: '2022', value: 48 },
    { period: '2023', value: 51 },
    { period: '2024', value: 54 },
    { period: '2025', value: 58 },
    { period: '2026', value: 62 },
  ]

  // Get alert badge
  const getAlertBadge = (level: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level}</Badge>
    }
  }

  // Get sector badge variant
  const getSectorBadge = () => <Badge variant="gold" className="mb-2">P-SECTOR</Badge>

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          {getSectorBadge()}
          <h1 className="text-3xl font-extrabold gradient-text-gold">Transportation & Logistics</h1>
          <p className="mt-2 text-slate-400">
            Port efficiency, aviation hub, rail connectivity, and e-commerce logistics intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Ship className="h-4 w-4" />
            Port Monitor
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Logistics Market"
          value={`$${logisticsMarket}B`}
          previousValue={54.2}
          icon={<Warehouse className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Port Efficiency Rank"
          value={`#${portRanking}`}
          previousValue={4}
          icon={<Ship className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Annual TEUs"
          value={`${totalTEUs}M`}
          previousValue={19.5}
          icon={<Globe className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Metro Ridership"
          value={`${metroRidership}M`}
          previousValue={280}
          icon={<Train className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Key Findings</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
        </TabsList>

        {/* Key Findings */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Transportation & Logistics Metrics" description="Critical findings across port, aviation, and rail infrastructure">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Metrics</CardTitle>
                  <CardDescription>Core transportation and logistics indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={metricsChartData}
                    xAxisKey="name"
                    horizontal={true}
                    bars={[
                      { dataKey: 'value', name: 'Value', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Port & Shipping</CardTitle>
                    <CardDescription>Maritime logistics performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Khalifa Port Ranking', value: '3rd globally', sublabel: 'Container port efficiency (2022)' },
                        { label: 'UAE Ports TEUs', value: '21M', sublabel: 'Total throughput (2023)' },
                        { label: 'Sanctions Evasion Risk', value: '30+ vessels', sublabel: 'Iranian oil smuggling fleet' },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.label}</span>
                            <span className="text-lg font-bold text-gold">{item.value}</span>
                          </div>
                          <Progress
                            value={Math.random() * 60 + 20}
                            className="h-2"
                          />
                          <p className="text-xs text-slate-400">{item.sublabel}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Aviation & Rail</CardTitle>
                    <CardDescription>Passenger and freight transport</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Dubai Metro Ridership', value: '294.7M', sublabel: '37% of public transport' },
                        { label: 'Public Transport Total', value: '802.1M', sublabel: '+7.4% YoY growth (2025)' },
                        { label: 'Traffic Congestion', value: '86%', sublabel: 'Drivers experiencing jams' },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.label}</span>
                            <span className="text-lg font-bold text-navy">{item.value}</span>
                          </div>
                          <Progress
                            value={Math.random() * 60 + 20}
                            className="h-2"
                          />
                          <p className="text-xs text-slate-400">{item.sublabel}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">All Key Findings</CardTitle>
                  <CardDescription>Complete list of transportation and logistics metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {keyFindings.map((finding, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-slate-200">{finding.finding}</p>
                            <p className="text-sm text-slate-400">Source: {finding.source}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gold">{finding.metric}</div>
                              <p className="text-xs text-slate-400">Metric</p>
                            </div>
                            {finding.alert && getAlertBadge(finding.alert)}
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

        {/* Sentiment Analysis */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment & Emotions Analysis" description="Public perception and emotional response to transportation topics">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={250}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emotional Response</CardTitle>
                    <CardDescription>Plutchik emotion model analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emotionData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Score', color: CHART_COLORS.gold },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Metrics</CardTitle>
                  <CardDescription>Detailed sentiment breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-400">{sentiment.positive}%</div>
                      <p className="text-sm font-medium text-slate-300">Positive</p>
                    </div>
                    <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-red-400">{sentiment.negative}%</div>
                      <p className="text-sm font-medium text-slate-300">Negative</p>
                    </div>
                    <div className="rounded-lg border border-slate-500/50 bg-slate-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-slate-400">{sentiment.neutral}%</div>
                      <p className="text-sm font-medium text-slate-300">Neutral</p>
                    </div>
                    <div className="rounded-lg border border-gold-500/50 bg-gold-500/10 p-4 text-center">
                      <div className={`text-3xl font-bold ${sentiment.overall >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {sentiment.overall >= 0 ? '+' : ''}{sentiment.overall}
                      </div>
                      <p className="text-sm font-medium text-slate-300">Net Score</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Trends */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="Trend Analysis" description="Historical trends and future projections">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Logistics Performance Index</CardTitle>
                  <CardDescription>Historical trend 2022-2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={trendChartData}
                    xAxisKey="period"
                    areas={[
                      { dataKey: 'value', name: 'Index', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                {trends.slice(0, 4).map((trend: { direction: string; changePercent: number; period: string; value: number }, index: number) => (
                  <Card key={index} className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {trend.direction === 'rising' ? (
                          <TrendingUp className="h-5 w-5 text-emerald-400" />
                        ) : trend.direction === 'declining' ? (
                          <TrendingUp className="h-5 w-5 text-red-400 rotate-180" />
                        ) : (
                          <Hash className="h-5 w-5 text-slate-400" />
                        )}
                        {trend.period}
                      </CardTitle>
                      <CardDescription>Trend indicator</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-gold">
                        {trend.changePercent >= 0 ? '+' : ''}{trend.changePercent}%
                      </div>
                      <p className="mt-2 text-sm text-slate-400">
                        {trend.direction === 'rising' ? 'Improving' : trend.direction === 'declining' ? 'Declining' : 'Stable'}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Stakeholders */}
        <TabsContent value="stakeholders" className="space-y-6">
          <GlassPanel title="Key Stakeholders" description="Entities and actors in transportation & logistics">
            <div className="space-y-4">
              {stakeholders.map((stakeholder: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <Ship className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">{stakeholder}</p>
                      <p className="text-sm text-slate-400">Transportation & Logistics</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-gold border-gold/50">Active</Badge>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
