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
  Newspaper,
  Wifi,
  Users,
  Shield,
  AlertCircle,
  CheckCircle,
  Eye,
  MessageSquare,
  Share2,
  TrendingUp,
} from 'lucide-react'
import {
  useMediaCommunicationsData,
} from '@/lib/data-loader'

export default function MediaCommunicationsPage() {
  const { data } = useMediaCommunicationsData()

  // Extract metrics from data
  const pressFreedomScore = data?.metrics?.pressFreedomScore || 25
  const censorshipLevel = data?.metrics?.censorshipLevel || 73
  const trackedInfluencers = data?.metrics?.trackedInfluencers || 847
  const mediaOutlets = data?.metrics?.mediaOutlets || 156

  // Sentiment distribution data
  const sentimentData = [
    { name: 'Positive', value: 45, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 35, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 20, color: CHART_COLORS.danger },
  ]

  // Platform distribution data
  const platformData = [
    { name: 'Twitter/X', value: 38, color: CHART_COLORS.navy },
    { name: 'Instagram', value: 27, color: CHART_COLORS.rose },
    { name: 'TikTok', value: 18, color: CHART_COLORS.cyan },
    { name: 'LinkedIn', value: 10, color: CHART_COLORS.indigo },
    { name: 'Facebook', value: 7, color: CHART_COLORS.blue },
  ]

  // Influencer tier data
  const influencerTierData = [
    { name: 'Mega (1M+)', value: 23, color: CHART_COLORS.gold },
    { name: 'Macro (100K-1M)', value: 87, color: CHART_COLORS.navy },
    { name: 'Mid (10K-100K)', value: 312, color: CHART_COLORS.platinum },
    { name: 'Micro (<10K)', value: 425, color: CHART_COLORS.teal },
  ]

  // Content themes data
  const contentThemesData = [
    { name: 'Government Initiatives', value: 28, color: CHART_COLORS.gold },
    { name: 'Economy/Business', value: 22, color: CHART_COLORS.navy },
    { name: 'Tourism/Culture', value: 18, color: CHART_COLORS.platinum },
    { name: 'Sports', value: 15, color: CHART_COLORS.emerald },
    { name: 'Technology', value: 10, color: CHART_COLORS.cyan },
    { name: 'Social Issues', value: 7, color: CHART_COLORS.rose },
  ]

  // Monthly reach trend
  const reachTrendData = [
    { month: 'Jan', reach: 2.4, engagement: 180 },
    { month: 'Feb', reach: 2.6, engagement: 195 },
    { month: 'Mar', reach: 2.8, engagement: 210 },
    { month: 'Apr', reach: 3.0, engagement: 225 },
    { month: 'May', reach: 3.2, engagement: 240 },
    { month: 'Jun', reach: 3.4, engagement: 255 },
    { month: 'Jul', reach: 3.1, engagement: 235 },
    { month: 'Aug', reach: 3.3, engagement: 248 },
    { month: 'Sep', reach: 3.5, engagement: 262 },
    { month: 'Oct', reach: 3.7, engagement: 278 },
    { month: 'Nov', reach: 3.8, engagement: 285 },
    { month: 'Dec', reach: 3.9, engagement: 292 },
  ]

  // Key influencers
  const keyInfluencers = [
    { name: 'Ahmed Alnaqbi', handle: '@ahmeduae', followers: 2.3, tier: 'Mega', sentiment: 78, category: 'Business' },
    { name: 'Fatima Almarri', handle: '@fatima_media', followers: 1.8, tier: 'Mega', sentiment: 82, category: 'Lifestyle' },
    { name: 'Khalid bin Rashid', handle: '@kbr_dxb', followers: 890, tier: 'Macro', sentiment: 85, category: 'Tech' },
    { name: 'Mariam Alkaabi', handle: '@mariamae', followers: 650, tier: 'Macro', sentiment: 71, category: 'Fashion' },
    { name: 'Omar Alhammadi', handle: '@omardxb', followers: 420, tier: 'Mid', sentiment: 79, category: 'Sports' },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'Mega': return <Badge variant="gold" className="text-xs">{tier}</Badge>
      case 'Macro': return <Badge variant="navy" className="text-xs">{tier}</Badge>
      case 'Mid': return <Badge variant="platinum" className="text-xs">{tier}</Badge>
      default: return <Badge variant="outline" className="text-xs">{tier}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">S-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Media & Communications</h1>
          <p className="mt-2 text-slate-400">
            Press freedom tracking, censorship monitoring, and influencer intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Eye className="h-4 w-4" />
            Media Monitor
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <MessageSquare className="h-4 w-4" />
            Track Influencer
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Press Freedom Index"
          value={pressFreedomScore}
          previousValue={pressFreedomScore - 3}
          icon={<Newspaper className="h-6 w-6" />}
          gradient="platinum"
          status="warning"
        />
        <MetricCard
          title="Censorship Level"
          value={censorshipLevel}
          previousValue={censorshipLevel + 2}
          icon={<Shield className="h-6 w-6" />}
          gradient="navy"
          status="warning"
        />
        <MetricCard
          title="Tracked Influencers"
          value={trackedInfluencers}
          previousValue={trackedInfluencers - 23}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Media Outlets"
          value={mediaOutlets}
          previousValue={mediaOutlets - 4}
          icon={<Wifi className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="influencers">Influencer Network</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="trends">Reach Trends</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Media & Communications Overview" description="Landscape of UAE media environment">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Distribution</CardTitle>
                    <CardDescription>Social media presence by platform</CardDescription>
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
                    <CardTitle className="text-lg">Content Theme Distribution</CardTitle>
                    <CardDescription>Prevalence of content categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={contentThemesData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Media Freedom Metrics</CardTitle>
                  <CardDescription>Press freedom and censorship indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Press Freedom Score (0-100, lower is better)</span>
                        <span className="font-medium text-platinum">{pressFreedomScore}</span>
                      </div>
                      <Progress value={pressFreedomScore} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Censorship Level (0-100)</span>
                        <span className="font-medium text-navy">{censorshipLevel}%</span>
                      </div>
                      <Progress value={censorshipLevel} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Internet Freedom Score</span>
                        <span className="font-medium text-yellow-400">58</span>
                      </div>
                      <Progress value={58} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Influencer Network Tab */}
        <TabsContent value="influencers" className="space-y-6">
          <GlassPanel title="Influencer Intelligence Network" description="Top influencers and their sentiment positioning">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Influencer Tier Distribution</CardTitle>
                  <CardDescription>Classification by follower count</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={influencerTierData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Count', color: CHART_COLORS.platinum },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Influencers</CardTitle>
                  <CardDescription>Top tracked personalities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {keyInfluencers.map((inf, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum">
                              <Users className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{inf.name}</p>
                              <p className="text-sm text-slate-400">{inf.handle} · {inf.category}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-slate-200">{inf.followers}K</div>
                              <p className="text-xs text-slate-400">Followers</p>
                            </div>
                            <div className="text-center">
                              {getTierBadge(inf.tier)}
                              <p className="text-xs text-slate-400 mt-1">Tier</p>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${getSentimentColor(inf.sentiment)}`}>
                                {inf.sentiment}%
                              </div>
                              <p className="text-xs text-slate-400">Sentiment</p>
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
          <GlassPanel title="Media Sentiment Analysis" description="Aggregated sentiment across all media channels">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Overall Sentiment Distribution</CardTitle>
                    <CardDescription>Positive, neutral, and negative coverage</CardDescription>
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
                    <CardTitle className="text-lg">Sentiment by Platform</CardTitle>
                    <CardDescription>Platform-specific sentiment scores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {platformData.slice(0, 4).map((plat, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{plat.name}</span>
                            <span className="text-sm font-bold text-emerald-400">
                              {Math.floor(Math.random() * 30) + 60}%
                            </span>
                          </div>
                          <Progress
                            value={Math.floor(Math.random() * 30) + 60}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Narrative Theme Sentiment</CardTitle>
                  <CardDescription>Sentiment scores by topic category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {contentThemesData.slice(0, 6).map((theme, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-emerald-400">
                          {Math.floor(Math.random() * 30) + 60}%
                        </div>
                        <p className="text-sm text-slate-400 mt-1">{theme.name}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Reach Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="Media Reach & Engagement Trends" description="12-month trajectory of media impact">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Audience Reach & Engagement</CardTitle>
                  <CardDescription>Monthly combined reach (millions) and engagement (millions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={reachTrendData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'reach', name: 'Reach (M)', color: CHART_COLORS.gold },
                      { dataKey: 'engagement', name: 'Engagement (M)', color: CHART_COLORS.navy },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Reach Growth Trend</CardTitle>
                    <CardDescription>Monthly audience reach in millions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={reachTrendData}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'reach', name: 'Reach', color: CHART_COLORS.platinum },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Engagement Growth Trend</CardTitle>
                    <CardDescription>Monthly engagement in millions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={reachTrendData}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'engagement', name: 'Engagement', color: CHART_COLORS.emerald },
                      ]}
                      height={250}
                      showGrid={true}
                    />
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
