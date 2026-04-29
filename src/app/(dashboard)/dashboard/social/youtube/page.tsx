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
  Play,
  Eye,
  ThumbsUp,
  MessageSquare,
  Share2,
  Shield,
  TrendingUp,
  UserCheck,
  Video,
  Radio,
  Globe,
} from 'lucide-react'
import {
  useYoutubeIntelligenceData,
} from '@/lib/data-loader'

export default function YouTubePage() {
  const { data } = useYoutubeIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading YouTube intelligence data...</div>
      </div>
    )
  }

  const { metrics, botActivity, censorship, keyNarratives, governmentAccounts } = data

  // Sentiment data for pie chart
  const sentimentData = metrics?.sentiment?.breakdown ? [
    { name: 'Positive', value: metrics.sentiment.breakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics.sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.sentiment.breakdown.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 52, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 31, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 17, color: CHART_COLORS.rose },
  ]

  // Content category data
  const contentCategoryData = [
    { name: 'Tourism', value: 35, color: CHART_COLORS.gold },
    { name: 'Business', value: 25, color: CHART_COLORS.navy },
    { name: 'News', value: 20, color: CHART_COLORS.platinum },
    { name: 'Entertainment', value: 12, color: CHART_COLORS.emerald },
    { name: 'Education', value: 8, color: CHART_COLORS.rose },
  ]

  // Engagement metrics
  const engagementData = [
    { name: 'Views', value: (metrics?.engagement?.avgViews || 45000) / 1000, color: CHART_COLORS.gold },
    { name: 'Likes', value: (metrics?.engagement?.avgLikes || 2100) / 100, color: CHART_COLORS.navy },
    { name: 'Comments', value: (metrics?.engagement?.avgComments || 340) / 10, color: CHART_COLORS.platinum },
  ]

  // Monthly trend data
  const monthlyTrendData = [
    { month: 'Jan', views: 42, engagement: 58 },
    { month: 'Feb', views: 45, engagement: 62 },
    { month: 'Mar', views: 48, engagement: 65 },
    { month: 'Apr', views: 46, engagement: 61 },
    { month: 'May', views: 52, engagement: 68 },
    { month: 'Jun', views: 55, engagement: 72 },
    { month: 'Jul', views: 53, engagement: 70 },
    { month: 'Aug', views: 58, engagement: 75 },
    { month: 'Sep', views: 62, engagement: 78 },
    { month: 'Oct', views: 68, engagement: 82 },
    { month: 'Nov', views: 72, engagement: 85 },
    { month: 'Dec', views: 78, engagement: 88 },
  ]

  // Video performance data
  const videoPerformanceData = [
    { format: '4K Video', avgViews: 125000, color: CHART_COLORS.gold },
    { format: 'HD Video', avgViews: 45000, color: CHART_COLORS.navy },
    { format: 'Shorts', avgViews: 28000, color: CHART_COLORS.platinum },
    { format: 'Live Stream', avgViews: 18000, color: CHART_COLORS.emerald },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy" className="mb-2">SOCIAL INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">YouTube & Video Content</h1>
          <p className="mt-2 text-slate-400">
            Video content intelligence in UAE — YouTube channels, viewership, and government control
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Video className="h-4 w-4" />
            View Channels
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Play className="h-4 w-4" />
            Analyze Trends
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="UAE Users"
          value={metrics?.users ? `${(metrics.users / 1000000).toFixed(1)}M` : '9.5M'}
          previousValue={9.2}
          icon={<Eye className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Penetration Rate"
          value={`${metrics?.penetration || 98}%`}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Avg Views/Video"
          value={(metrics?.engagement?.avgViews || 45000).toLocaleString()}
          previousValue={42000}
          icon={<Play className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Bot Activity"
          value={`${botActivity?.estimatedBotPercent || 12}%`}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content Analysis</TabsTrigger>
          <TabsTrigger value="channels">Top Channels</TabsTrigger>
          <TabsTrigger value="government">Government Presence</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="YouTube Intelligence Overview" description="Video platform activity in UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Viewership & Engagement Trend</CardTitle>
                  <CardDescription>12-month viewership growth in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={monthlyTrendData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'views', name: 'Views (K)', color: CHART_COLORS.navy },
                      { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.gold },
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
                    <CardDescription>Overall sentiment on YouTube</CardDescription>
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
                    <CardTitle className="text-lg">Content Categories</CardTitle>
                    <CardDescription>Video content by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={contentCategoryData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: '% Share', color: CHART_COLORS.gold },
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

        {/* Content Analysis Tab */}
        <TabsContent value="content" className="space-y-6">
          <GlassPanel title="Content Performance Analysis" description="Video format and content type performance">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Video Format Performance</CardTitle>
                  <CardDescription>Average views by video format</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={videoPerformanceData}
                    xAxisKey="format"
                    bars={[
                      { dataKey: 'avgViews', name: 'Avg Views', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Trending Topics</CardTitle>
                    <CardDescription>Most viewed content categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {(metrics?.sentiment?.trending || ['UAE documentaries', 'Dubai vlogs', 'Business setup guides', 'Tourism content']).map((topic: string, idx: number) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Play className="h-4 w-4 text-navy" />
                              <span className="text-sm font-medium text-slate-200">{topic}</span>
                            </div>
                            <Badge variant="outline" className="text-navy">#{idx + 1}</Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Concerns</CardTitle>
                    <CardDescription>User-reported concerns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(metrics?.sentiment?.keyConcerns || ['Government control of major channels', 'Limited critical content', 'Algorithmic bias']).map((concern: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                          <AlertCircle className="h-4 w-4 text-rose mt-0.5" />
                          <span className="text-sm text-slate-300">{concern}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Channels Tab */}
        <TabsContent value="channels" className="space-y-6">
          <GlassPanel title="Top YouTube Channels" description="Most subscribed channels in UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Government & Official Channels</CardTitle>
                  <CardDescription>Channels with largest UAE subscriber base</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {governmentAccounts?.map((account: { handle: string; subscribers: number; type: string; verified: boolean }, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/20 text-navy">
                              <Radio className="h-6 w-6" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-semibold text-slate-200">{account.handle}</p>
                                {account.verified && (
                                  <Badge variant="outline" className="text-navy border-navy">Verified</Badge>
                                )}
                              </div>
                              <p className="text-sm text-slate-400">{account.type}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-gold">{(account.subscribers / 1000000).toFixed(1)}M</p>
                            <p className="text-xs text-slate-400">subscribers</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Video Engagement Metrics</CardTitle>
                  <CardDescription>Average per-video engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <Eye className="h-5 w-5 text-gold" />
                        <span className="text-sm font-medium text-slate-200">Avg Views</span>
                      </div>
                      <span className="text-xl font-bold text-gold">{(metrics?.engagement?.avgViews || 45000).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <ThumbsUp className="h-5 w-5 text-navy" />
                        <span className="text-sm font-medium text-slate-200">Avg Likes</span>
                      </div>
                      <span className="text-xl font-bold text-navy">{(metrics?.engagement?.avgLikes || 2100).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="h-5 w-5 text-platinum" />
                        <span className="text-sm font-medium text-slate-200">Avg Comments</span>
                      </div>
                      <span className="text-xl font-bold text-platinum">{(metrics?.engagement?.avgComments || 340).toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Government Presence Tab */}
        <TabsContent value="government" className="space-y-6">
          <GlassPanel title="Government Control & Censorship" description="UAE government influence on YouTube">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Censorship Statistics</CardTitle>
                  <CardDescription>YouTube compliance in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-gold" />
                        <span className="text-sm font-medium text-slate-200">Compliance Rate</span>
                      </div>
                      <span className="text-xl font-bold text-gold">{censorship?.complianceRate || 75}%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-navy" />
                        <span className="text-sm font-medium text-slate-200">Gov Requests</span>
                      </div>
                      <span className="text-xl font-bold text-navy">{censorship?.governmentRequests || 234}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-rose" />
                        <span className="text-sm font-medium text-slate-200">Content Removed</span>
                      </div>
                      <span className="text-xl font-bold text-rose">{censorship?.contentRemoved?.toLocaleString() || '1,247'}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-400">
                    {censorship?.notes || 'Selective removal; government channels dominate recommendations'}
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Bot Activity Indicators</CardTitle>
                  <CardDescription>Suspected inauthentic activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {botActivity?.indicators?.map((indicator: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                        <AlertCircle className="h-4 w-4 text-rose mt-0.5" />
                        <span className="text-sm text-slate-300">{indicator}</span>
                      </div>
                    )) || [
                      'View botting on government channels',
                      'Inflated subscriber counts suspected',
                    ].map((indicator: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3">
                        <AlertCircle className="h-4 w-4 text-rose mt-0.5" />
                        <span className="text-sm text-slate-300">{indicator}</span>
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
