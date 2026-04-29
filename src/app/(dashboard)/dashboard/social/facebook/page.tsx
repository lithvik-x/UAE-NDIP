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
  Users,
  MessageSquare,
  Share2,
  ThumbsUp,
  Eye,
  Shield,
  Globe,
  TrendingUp,
  UserCheck,
  Flag,
  FileText,
} from 'lucide-react'
import {
  useFacebookIntelligenceData,
} from '@/lib/data-loader'

export default function FacebookPage() {
  const { data } = useFacebookIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Facebook intelligence data...</div>
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
    { name: 'Positive', value: 38, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 32, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 30, color: CHART_COLORS.rose },
  ]

  // User demographics breakdown
  const demographicsData = [
    { age: '18-24', value: 22, color: CHART_COLORS.gold },
    { age: '25-34', value: 35, color: CHART_COLORS.navy },
    { age: '35-44', value: 25, color: CHART_COLORS.platinum },
    { age: '45-54', value: 12, color: CHART_COLORS.emerald },
    { age: '55+', value: 6, color: CHART_COLORS.rose },
  ]

  // Engagement metrics
  const engagementData = [
    { name: 'Likes', value: metrics?.engagement?.avgLikes || 85, color: CHART_COLORS.gold },
    { name: 'Comments', value: metrics?.engagement?.avgComments || 28, color: CHART_COLORS.navy },
    { name: 'Shares', value: metrics?.engagement?.avgShares || 42, color: CHART_COLORS.platinum },
  ]

  // Monthly trend data (simulated for UAE)
  const monthlyTrendData = [
    { month: 'Jan', users: 9.2, engagement: 142 },
    { month: 'Feb', users: 9.3, engagement: 148 },
    { month: 'Mar', users: 9.4, engagement: 155 },
    { month: 'Apr', users: 9.5, engagement: 151 },
    { month: 'May', users: 9.6, engagement: 163 },
    { month: 'Jun', users: 9.6, engagement: 158 },
    { month: 'Jul', users: 9.7, engagement: 172 },
    { month: 'Aug', users: 9.7, engagement: 168 },
    { month: 'Sep', users: 9.8, engagement: 175 },
    { month: 'Oct', users: 9.8, engagement: 182 },
    { month: 'Nov', users: 9.9, engagement: 188 },
    { month: 'Dec', users: 9.9, engagement: 195 },
  ]

  // Narrative prevalence data
  const narrativeData = keyNarratives?.map((n, i) => ({
    topic: n.topic,
    prevalence: n.prevalence,
    sentiment: n.sentiment,
    color: i === 0 ? CHART_COLORS.gold : i === 1 ? CHART_COLORS.navy : CHART_COLORS.platinum,
  })) || [
    { topic: 'Expat Life', prevalence: 85, sentiment: 'Positive', color: CHART_COLORS.gold },
    { topic: 'Safety & Security', prevalence: 80, sentiment: 'Positive', color: CHART_COLORS.navy },
    { topic: 'Business Opportunity', prevalence: 72, sentiment: 'Positive', color: CHART_COLORS.platinum },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">SOCIAL INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Facebook & Meta Platforms</h1>
          <p className="mt-2 text-slate-400">
            Meta&apos;s Facebook ecosystem in UAE — engagement, censorship, and influence operations
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <FileText className="h-4 w-4" />
            View Reports
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Analyze CIB
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="UAE Users"
          value={metrics?.users ? `${(metrics.users / 1000000).toFixed(1)}M` : '9.7M'}
          previousValue={9.6}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Penetration Rate"
          value={`${metrics?.penetration || 99}%`}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Bot Activity"
          value={`${botActivity?.estimatedBotPercent || 34}%`}
          previousValue={31}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="emerald"
          status={botActivity?.coordinatedInauthentic ? 'warning' : 'success'}
        />
        <MetricCard
          title="Censorship Level"
          value={censorship?.level?.toUpperCase() || 'PARTIAL'}
          icon={<Shield className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
          <TabsTrigger value="government">Government Presence</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Facebook Intelligence Overview" description="Meta platform activity in UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">User Growth & Engagement Trend</CardTitle>
                  <CardDescription>12-month trend of UAE Facebook users</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={monthlyTrendData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'users', name: 'Users (M)', color: CHART_COLORS.gold },
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
                    <CardDescription>Overall sentiment on Facebook</CardDescription>
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
                    <CardTitle className="text-lg">Age Demographics</CardTitle>
                    <CardDescription>UAE Facebook user age breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {demographicsData.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.age}</span>
                            <span className="text-lg font-bold text-slate-200">{item.value}%</span>
                          </div>
                          <Progress value={item.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CIB Alert */}
              {botActivity?.coordinatedInauthentic && (
                <Card className="glass-card border-rose-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                      <AlertCircle className="h-5 w-5" />
                      Coordinated Inauthentic Behavior Detected
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                        <div className="flex-1">
                          <p className="font-medium text-slate-200">UAE/Egypt Influence Operation</p>
                          <p className="mt-1 text-sm text-slate-400">
                            Meta CIB (Coordinated Inauthentic Behavior) removal targeting UAE/Egypt operation
                          </p>
                        </div>
                        <Badge variant="destructive" className="text-xs ml-4">CIB</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {botActivity?.indicators?.map((indicator: string, i: number) => (
                          <Badge key={i} variant="outline" className="text-rose-400 border-rose-500/50">
                            {indicator}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <GlassPanel title="Engagement Metrics" description="Facebook engagement analysis for UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Average Engagement Rates</CardTitle>
                  <CardDescription>Per-post engagement metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={engagementData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Avg per Post', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Trending Hashtags</CardTitle>
                    <CardDescription>Most used hashtags in UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {(metrics?.engagement?.trendingHashtags || ['#UAE', '#DubaiLife', '#UAEExpat', '#UAEBusiness', '#Dubai']).map((tag: string, idx: number) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <ThumbsUp className="h-4 w-4 text-gold" />
                              <span className="text-sm font-medium text-slate-200">{tag}</span>
                            </div>
                            <Badge variant="outline" className="text-gold">#{idx + 1}</Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Content Types Performance</CardTitle>
                    <CardDescription>Engagement by content format</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { type: 'Video', engagement: 89, color: CHART_COLORS.gold },
                        { type: 'Photo', engagement: 65, color: CHART_COLORS.navy },
                        { type: 'Link', engagement: 34, color: CHART_COLORS.platinum },
                        { type: 'Text', engagement: 28, color: CHART_COLORS.emerald },
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.type}</span>
                            <span className="text-sm font-bold text-slate-200">{item.engagement}%</span>
                          </div>
                          <Progress value={item.engagement} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Key Narratives Analysis" description="Prevailing narratives on Facebook in UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Narrative Prevalence</CardTitle>
                  <CardDescription>Most prevalent topics on UAE Facebook</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={narrativeData}
                    xAxisKey="topic"
                    bars={[
                      { dataKey: 'prevalence', name: 'Prevalence %', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {keyNarratives?.map((narrative: { topic: string; narrative: string; prevalence: number; sentiment: string; sources: string[] }, idx: number) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={narrative.sentiment === 'Positive' ? 'success' : narrative.sentiment === 'Negative' ? 'destructive' : 'outline'}>
                          {narrative.sentiment}
                        </Badge>
                        <span className="text-xl font-bold text-gold">{narrative.prevalence}%</span>
                      </div>
                      <h4 className="font-semibold text-slate-200 mb-1">{narrative.topic}</h4>
                      <p className="text-sm text-slate-400 mb-2">{narrative.narrative}</p>
                      <div className="text-xs text-slate-500">
                        Sources: {narrative.sources?.join(', ') || 'Various'}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Government Presence Tab */}
        <TabsContent value="government" className="space-y-6">
          <GlassPanel title="Government Accounts" description="Official UAE government presence on Facebook">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Official Government Accounts</CardTitle>
                  <CardDescription>Verified government pages with largest followings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {governmentAccounts?.map((account: { handle: string; followers: number; type: string; verified: boolean }, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/20 text-navy">
                              <UserCheck className="h-6 w-6" />
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
                            <p className="text-lg font-bold text-gold">{(account.followers / 1000000).toFixed(1)}M</p>
                            <p className="text-xs text-slate-400">followers</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Censorship Statistics</CardTitle>
                  <CardDescription>Meta content compliance in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <Flag className="h-5 w-5 text-gold" />
                        <span className="text-sm font-medium text-slate-200">Compliance Rate</span>
                      </div>
                      <span className="text-xl font-bold text-gold">{censorship?.complianceRate || 82}%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-navy" />
                        <span className="text-sm font-medium text-slate-200">Gov Requests</span>
                      </div>
                      <span className="text-xl font-bold text-navy">{censorship?.governmentRequests?.toLocaleString() || '1,893'}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-rose" />
                        <span className="text-sm font-medium text-slate-200">Content Removed</span>
                      </div>
                      <span className="text-xl font-bold text-rose">{censorship?.contentRemoved?.toLocaleString() || '15,234'}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-400">
                    {censorship?.notes || 'Meta CIB operations detected targeting UAE/Egypt influence network'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
