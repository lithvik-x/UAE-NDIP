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
  Broadcast,
  Eye,
  FileText,
  Globe,
  MessageSquare,
  Newspaper,
  Radio,
  Shield,
  TrendingUp,
  Tv,
  Video,
} from 'lucide-react'
import {
  useMediaCommunicationsData,
} from '@/lib/data-loader'

export default function MediaMonitoringPage() {
  const { data } = useMediaCommunicationsData()

  // UAE Media monitoring metrics
  const monitoredOutlets = 847
  const suspiciousContent = 234
  const verifiedNews = 1547
  const fakeNews = 89

  // Content sentiment data
  const sentimentData = [
    { name: 'Positive', value: 45, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 38, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 17, color: CHART_COLORS.rose },
  ]

  // Platform distribution data
  const platformData = [
    { name: 'News Websites', value: 35, color: CHART_COLORS.navy },
    { name: 'TV Broadcast', value: 22, color: CHART_COLORS.gold },
    { name: 'Print Media', value: 15, color: CHART_COLORS.platinum },
    { name: 'Radio', value: 12, color: CHART_COLORS.emerald },
    { name: 'Wire Services', value: 16, color: CHART_COLORS.rose },
  ]

  // Content type data
  const contentTypeData = [
    { name: 'Politics', value: 28, color: CHART_COLORS.gold },
    { name: 'Economy', value: 24, color: CHART_COLORS.navy },
    { name: 'Society', value: 18, color: CHART_COLORS.platinum },
    { name: 'Security', value: 15, color: CHART_COLORS.rose },
    { name: 'Culture', value: 10, color: CHART_COLORS.emerald },
    { name: 'Sports', value: 5, color: CHART_COLORS.cyan },
  ]

  // Daily coverage trend
  const coverageTrendData = [
    { day: 'Mon', articles: 2340, reach: 4.2 },
    { day: 'Tue', articles: 2190, reach: 3.8 },
    { day: 'Wed', articles: 2560, reach: 4.5 },
    { day: 'Thu', articles: 2870, reach: 5.1 },
    { day: 'Fri', articles: 3120, reach: 5.8 },
    { day: 'Sat', articles: 3450, reach: 6.2 },
    { day: 'Sun', articles: 2980, reach: 5.4 },
  ]

  // Recent flagged content
  const flaggedContent = [
    { id: 1, headline: 'UAE Economic Policy Undermined by Foreign Media', source: 'Al Jazeera', type: 'Misinformation', severity: 'HIGH', time: '15 min ago' },
    { id: 2, headline: 'Dubai Real Estate Bubble Claims Rejected by Experts', source: 'Bloomberg', type: 'Analysis', severity: 'MEDIUM', time: '1 hr ago' },
    { id: 3, headline: 'UAE Human Rights Record Questioned', source: 'BBC Arabic', type: 'Coverage', severity: 'HIGH', time: '2 hr ago' },
    { id: 4, headline: 'Regional Stability Achieved Through UAE Efforts', source: 'Khaleej Times', type: 'Verified', severity: 'LOW', time: '3 hr ago' },
    { id: 5, headline: 'Gulf Security Forum Outcomes', source: 'Reuters', type: 'Verified', severity: 'LOW', time: '4 hr ago' },
  ]

  // Top media outlets
  const topOutlets = [
    { name: 'Khaleej Times', coverage: 2450, sentiment: 78, reach: 12.4 },
    { name: 'The National', coverage: 2120, sentiment: 82, reach: 9.8 },
    { name: 'Arabian Business', coverage: 1870, sentiment: 74, reach: 7.2 },
    { name: 'Gulf News', coverage: 2340, sentiment: 76, reach: 11.3 },
    { name: 'Dubai Media Inc', coverage: 1650, sentiment: 85, reach: 8.7 },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'HIGH': return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">HIGH</Badge>
      case 'MEDIUM': return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">MEDIUM</Badge>
      default: return <Badge variant="outline" className="text-xs text-platinum-400 border-platinum-400/50">LOW</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy" className="mb-2">M-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Media Monitoring</h1>
          <p className="mt-2 text-slate-400">
            Real-time tracking of news outlets, broadcast media, and print publications
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Newspaper className="h-4 w-4" />
            Media Feed
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Shield className="h-4 w-4" />
            Content Guard
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Monitored Outlets"
          value={monitoredOutlets}
          previousValue={monitoredOutlets + 12}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
          status="info"
        />
        <MetricCard
          title="Suspicious Content"
          value={suspiciousContent}
          previousValue={suspiciousContent + 23}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
        <MetricCard
          title="Verified News"
          value={verifiedNews}
          previousValue={verifiedNews - 87}
          icon={<FileText className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Fake News Detected"
          value={fakeNews}
          previousValue={fakeNews + 12}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="gold"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="outlets">Media Outlets</TabsTrigger>
          <TabsTrigger value="content">Content Analysis</TabsTrigger>
          <TabsTrigger value="flagged">Flagged Content</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Media Monitoring Overview" description="Coverage analysis across all UAE media channels">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Distribution</CardTitle>
                    <CardDescription>Media presence by platform type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={platformData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall media sentiment toward UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Daily Coverage Trend</CardTitle>
                  <CardDescription>Articles published and audience reach (millions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={coverageTrendData}
                    xAxisKey="day"
                    bars={[
                      { dataKey: 'articles', name: 'Articles', color: CHART_COLORS.navy },
                      { dataKey: 'reach', name: 'Reach (M)', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Type Analysis</CardTitle>
                  <CardDescription>Breakdown by topic category</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={contentTypeData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.platinum },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Media Outlets Tab */}
        <TabsContent value="outlets" className="space-y-6">
          <GlassPanel title="Media Outlet Intelligence" description="Performance and sentiment tracking by outlet">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Performing Outlets</CardTitle>
                  <CardDescription>Ranked by coverage volume and sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px]">
                    <div className="space-y-3">
                      {topOutlets.map((outlet, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                              <Newspaper className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{outlet.name}</p>
                              <p className="text-sm text-slate-400">{outlet.coverage.toLocaleString()} articles</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-slate-200">{outlet.reach}M</div>
                              <p className="text-xs text-slate-400">Reach</p>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-emerald-400">{outlet.sentiment}%</div>
                              <p className="text-xs text-slate-400">Sentiment</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Broadcast Monitoring</CardTitle>
                    <CardDescription>TV and radio channel tracking</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { channel: 'Al Arabiya', mentions: 1247, sentiment: 82 },
                        { channel: 'Al Jazeera', mentions: 2341, sentiment: 45 },
                        { channel: 'Sky News Arabia', mentions: 987, sentiment: 76 },
                        { channel: 'BBC Arabic', mentions: 654, sentiment: 58 },
                        { channel: 'France 24 Arabic', mentions: 432, sentiment: 67 },
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.channel}</span>
                            <span className="text-sm font-medium text-slate-400">{item.mentions} mentions</span>
                          </div>
                          <Progress value={item.sentiment} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">International Coverage</CardTitle>
                    <CardDescription>Top international outlets covering UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-2">
                        {[
                          { outlet: 'Reuters', articles: 567, sentiment: 74 },
                          { outlet: 'Bloomberg', articles: 432, sentiment: 71 },
                          { outlet: 'AP', articles: 398, sentiment: 78 },
                          { outlet: 'BBC World', articles: 287, sentiment: 65 },
                          { outlet: 'NYT', articles: 198, sentiment: 62 },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <span className="text-sm font-medium text-slate-200">{item.outlet}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-slate-400">{item.articles} articles</span>
                              <Badge variant={item.sentiment > 70 ? "success" : "warning"} className="text-xs">
                                {item.sentiment}%
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Content Analysis Tab */}
        <TabsContent value="content" className="space-y-6">
          <GlassPanel title="Content Analysis" description="Deep analysis of media narratives and themes">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Narrative Theme Analysis</CardTitle>
                  <CardDescription>Most prevalent themes in UAE-related coverage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {contentTypeData.map((theme, idx) => (
                      <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                        <div className="text-2xl font-bold text-gold">{theme.value}%</div>
                        <p className="text-sm text-slate-400 mt-1">{theme.name}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Coverage Quality Metrics</CardTitle>
                  <CardDescription>Accuracy and bias indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Factually Accurate</span>
                        <span className="font-medium text-emerald-400">78%</span>
                      </div>
                      <Progress value={78} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Balanced Reporting</span>
                        <span className="font-medium text-emerald-400">65%</span>
                      </div>
                      <Progress value={65} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Source Diversity</span>
                        <span className="font-medium text-emerald-400">72%</span>
                      </div>
                      <Progress value={72} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Pro-UAE Framing</span>
                        <span className="font-medium text-gold">54%</span>
                      </div>
                      <Progress value={54} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Flagged Content Tab */}
        <TabsContent value="flagged" className="space-y-6">
          <GlassPanel title="Flagged Content" description="Suspicious and verified content requiring attention">
            <div className="space-y-6">
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Recent Flagged Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {flaggedContent.map((item) => (
                        <div key={item.id} className="flex items-start justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{item.headline}</p>
                            <p className="text-sm text-slate-400 mt-1">Source: {item.source} · {item.type}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            {getSeverityBadge(item.severity)}
                            <span className="text-xs text-slate-400">{item.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Verification Stats</CardTitle>
                  <CardDescription>Fact-checking and verification metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">1,547</div>
                      <p className="text-sm text-slate-400">Verified True</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-rose-400">89</div>
                      <p className="text-sm text-slate-400">Verified False</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-orange-400">234</div>
                      <p className="text-sm text-slate-400">Under Review</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">45 min</div>
                      <p className="text-sm text-slate-400">Avg Response</p>
                    </div>
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
