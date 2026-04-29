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
  Shield,
  TrendingUp,
  Users,
  Zap,
  Ghost,
  Eye,
  Map,
  Sparkles,
  Camera,
} from 'lucide-react'
import {
  useSnapchatIntelligenceData,
} from '@/lib/data-loader'

export default function SnapchatPage() {
  const { data } = useSnapchatIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Snapchat intelligence data...</div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts } = data
  const { users, penetration, sentiment, engagement, botActivity, censorship } = metrics

  // Sentiment data for pie chart
  const sentimentData = sentiment?.breakdown ? [
    { name: 'Positive', value: sentiment.breakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentiment.breakdown.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 48, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 32, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 20, color: CHART_COLORS.rose },
  ]

  // Engagement metrics for bar chart
  const engagementData = [
    { metric: 'Avg Views', value: engagement?.avgViews || 12000 },
    { metric: 'Time Spent (min)', value: engagement?.avgTimeSpent || 18 },
    { metric: 'Avg Snaps', value: engagement?.avgSnaps || 25 },
  ]

  // Key narratives formatted
  const narrativesData = keyNarratives?.slice(0, 6) || []

  // Bot activity data
  const botData = [
    { name: 'Bot Activity', value: botActivity?.estimatedBotPercent || 5, color: CHART_COLORS.rose },
    { name: 'Authentic', value: 100 - (botActivity?.estimatedBotPercent || 5), color: CHART_COLORS.emerald },
  ]

  // Censorship data
  const censorshipData = [
    { name: 'Compliant', value: censorship?.complianceRate || 75, color: CHART_COLORS.emerald },
    { name: 'Removed', value: (censorship?.contentRemoved || 567) / 100, color: CHART_COLORS.rose },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">SOCIAL MEDIA</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Snapchat & Ephemeral Content</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'Ephemeral content, AR filters, Discover content, and youth engagement on Snapchat'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Ghost className="h-4 w-4" />
            View Discover
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
          title="UAE Users"
          value={users?.toLocaleString() || '3,200,000'}
          previousValue={(users || 3200000) - 150000}
          icon={<Users className="h-6 w-6" />}
          gradient="platinum"
          status="info"
        />
        <MetricCard
          title="Market Penetration"
          value={`${penetration || 33}%`}
          previousValue={(penetration || 33) - 2}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment?.score || 58}
          previousValue={(sentiment?.score || 58) - 3}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Dark Social Score"
          value={data.darkSocialScore || 25}
          previousValue={(data.darkSocialScore || 25) + 5}
          icon={<Eye className="h-6 w-6" />}
          gradient="gold"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="government">Government</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Snapchat Platform Overview" description="Ephemeral content analytics and engagement patterns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                  <CardDescription>User sentiment breakdown on Snapchat UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Bot Activity Analysis</CardTitle>
                    <CardDescription>Estimated bot presence on platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={botData}
                      height={250}
                      showLegend={true}
                    />
                    <div className="mt-4 text-center">
                      <span className="text-2xl font-bold text-rose-400">{botActivity?.estimatedBotPercent || 5}%</span>
                      <p className="text-sm text-slate-400">Estimated Bot Activity</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Censorship & Compliance</CardTitle>
                    <CardDescription>Government content moderation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">Compliance Rate</span>
                          <span className="font-bold text-emerald-400">{censorship?.complianceRate || 75}%</span>
                        </div>
                        <Progress value={censorship?.complianceRate || 75} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">Content Removed</span>
                          <span className="font-bold text-rose-400">{censorship?.contentRemoved || 567}</span>
                        </div>
                        <Progress value={(censorship?.contentRemoved || 567) / 10} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">Government Requests</span>
                          <span className="font-bold text-platinum-400">{censorship?.governmentRequests || 234}</span>
                        </div>
                        <Progress value={(censorship?.governmentRequests || 234) / 10} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trending Content</CardTitle>
                  <CardDescription>What UAE Snapchat users are engaging with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(metrics?.sentiment?.trending || ['AR filters', 'Discover content', 'Map stories']).map((item, idx) => (
                      <Badge key={idx} variant="outline" className="border-platinum/50 text-platinum">
                        <Sparkles className="h-3 w-3 mr-1" />
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Key Narratives on Snapchat" description="Dominant narratives and content themes">
            <div className="grid gap-6 lg:grid-cols-2">
              {narrativesData.map((narrative, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{narrative.topic}</CardTitle>
                      <Badge variant={narrative.sentiment === 'Positive' ? 'default' : narrative.sentiment === 'Negative' ? 'destructive' : 'secondary'}
                        className={narrative.sentiment === 'Positive' ? 'bg-emerald-500/20 text-emerald-400' : ''}>
                        {narrative.sentiment}
                      </Badge>
                    </div>
                    <CardDescription>Prevalence: {narrative.prevalence}%</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{narrative.narrative}</p>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Sources:</p>
                      <div className="flex flex-wrap gap-1">
                        {narrative.sources.map((source, sIdx) => (
                          <Badge key={sIdx} variant="outline" className="text-xs border-slate-600">
                            {source}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <Progress value={narrative.prevalence} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <GlassPanel title="Engagement Analytics" description="User engagement patterns on Snapchat UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Metrics</CardTitle>
                  <CardDescription>Average engagement per content piece</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={engagementData}
                    xAxisKey="metric"
                    bars={[
                      { dataKey: 'value', name: 'Value', color: CHART_COLORS.platinum },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-slate-400">Average Views</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-platinum-400">
                      {engagement?.avgViews?.toLocaleString() || '12,000'}
                    </div>
                    <p className="text-sm text-slate-400 mt-1">per snap</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-slate-400">Time Spent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-emerald-400">
                      {engagement?.avgTimeSpent || 18}
                      <span className="text-lg ml-1">min</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-1">daily average</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-slate-400">Avg Snaps Sent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gold-400">
                      {engagement?.avgSnaps || 25}
                    </div>
                    <p className="text-sm text-slate-400 mt-1">per user daily</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Concerns</CardTitle>
                  <CardDescription>User concerns identified in engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(metrics?.sentiment?.keyConcerns || ['Privacy concerns', 'Location tracking', 'Content moderation']).map((concern, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <AlertTriangle className="h-4 w-4 text-yellow-400" />
                        <span className="text-slate-200">{concern}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Government Tab */}
        <TabsContent value="government" className="space-y-6">
          <GlassPanel title="Government Presence on Snapchat" description="Official government accounts and their reach">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Verified Government Accounts</CardTitle>
                <CardDescription>Official UAE government accounts on Snapchat</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-2">
                    {(governmentAccounts || []).map((account, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum">
                            <Camera className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{account.handle}</p>
                            <p className="text-sm text-slate-400">{account.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-emerald-400 border-emerald-500/50">
                            {account.followers?.toLocaleString()} followers
                          </Badge>
                          {account.verified && (
                            <Badge variant="outline" className="ml-2 border-platinum/50 text-platinum">
                              <Shield className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
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
