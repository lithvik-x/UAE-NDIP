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
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  Zap,
  Clock,
} from 'lucide-react'
import {
  useTwitterIntelligenceData,
  useTiktokIntelligenceData,
  useInstagramIntelligenceData,
} from '@/lib/data-loader'

export default function EngagementAnalyticsPage() {
  const { data: twitterData } = useTwitterIntelligenceData()
  const { data: tiktokData } = useTiktokIntelligenceData()
  const { data: instagramData } = useInstagramIntelligenceData()

  // Overall engagement metrics
  const totalEngagements = 487500000
  const engagementRate = 4.8
  const avgSessionTime = 24.5
  const viralContent = 1247

  // Platform engagement comparison
  const platformEngagement = [
    { platform: 'TikTok', likes: 2.4, comments: 0.38, shares: 0.12, saves: 0.08, color: CHART_COLORS.rose },
    { platform: 'Instagram', likes: 1.8, comments: 0.12, shares: 0.05, saves: 0.15, color: CHART_COLORS.pink },
    { platform: 'Twitter/X', likes: 0.8, comments: 0.15, shares: 0.18, saves: 0.03, color: CHART_COLORS.navy },
    { platform: 'YouTube', likes: 0.45, comments: 0.08, shares: 0.02, saves: 0.12, color: CHART_COLORS.danger },
    { platform: 'Facebook', likes: 0.62, comments: 0.06, shares: 0.08, saves: 0.02, color: CHART_COLORS.denim },
  ]

  // Content type engagement
  const contentEngagement = [
    { type: 'Video Content', engagement: 89200000, rate: 6.8, percentage: 42 },
    { type: 'Image Posts', engagement: 56700000, rate: 4.2, percentage: 27 },
    { type: 'Stories/Reels', engagement: 43800000, rate: 5.9, percentage: 21 },
    { type: 'Text Only', engagement: 18900000, rate: 2.1, percentage: 9 },
    { type: 'Live Streams', engagement: 4500000, rate: 8.2, percentage: 2 },
  ]

  // Top performing content
  const topContent = [
    { title: 'UAE National Day Celebration', platform: 'TikTok', engagements: 1250000, type: 'Video', sentiment: 96 },
    { title: 'Dubai Mall Grand Opening', platform: 'Instagram', engagements: 890000, type: 'Image', sentiment: 94 },
    { title: 'World Government Summit', platform: 'Twitter/X', engagements: 567000, type: 'Text', sentiment: 88 },
    { title: 'AI Conference 2025', platform: 'YouTube', engagements: 445000, type: 'Video', sentiment: 92 },
    { title: 'Expo City Dubai Tour', platform: 'Instagram', engagements: 398000, type: 'Stories', sentiment: 95 },
  ]

  // Engagement trend data
  const engagementTrendData = [
    { month: 'Jan', engagements: 38.2, rate: 4.2 },
    { month: 'Feb', engagements: 35.8, rate: 4.0 },
    { month: 'Mar', engagements: 42.5, rate: 4.5 },
    { month: 'Apr', engagements: 45.2, rate: 4.8 },
    { month: 'May', engagements: 48.9, rate: 5.1 },
    { month: 'Jun', engagements: 52.3, rate: 5.4 },
    { month: 'Jul', engagements: 49.8, rate: 5.0 },
    { month: 'Aug', engagements: 55.2, rate: 5.6 },
    { month: 'Sep', engagements: 58.7, rate: 5.8 },
    { month: 'Oct', engagements: 62.4, rate: 6.1 },
    { month: 'Nov', engagements: 65.8, rate: 6.3 },
    { month: 'Dec', engagements: 68.5, rate: 6.5 },
  ]

  // Demographics engagement
  const demographicsEngagement = [
    { age: '18-24', male: 78, female: 82, other: 65 },
    { age: '25-34', male: 85, female: 79, other: 72 },
    { age: '35-44', male: 72, female: 68, other: 58 },
    { age: '45-54', male: 58, female: 52, other: 45 },
    { age: '55+', male: 42, female: 38, other: 32 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2">S-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum-500">Engagement Analytics</h1>
          <p className="mt-2 text-platinum-400">
            Audience interaction metrics and content performance analytics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum-500 hover:bg-platinum/10">
            <TrendingUp className="h-4 w-4" />
            Trends
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
          title="Total Engagements"
          value={(totalEngagements / 1000000).toFixed(1) + 'M'}
          previousValue={62.4}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Engagement Rate"
          value={engagementRate + '%'}
          previousValue={engagementRate - 0.3}
          icon={<Heart className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Avg Session Time"
          value={avgSessionTime + 'min'}
          previousValue={avgSessionTime - 2.1}
          icon={<Clock className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Viral Content"
          value={viralContent.toString()}
          previousValue={viralContent - 89}
          icon={<Zap className="h-6 w-6" />}
          gradient="rose"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="content">Content Types</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Engagement Overview" description="Aggregate engagement metrics across all platforms">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Trend (12 months)</CardTitle>
                  <CardDescription>Total engagements in millions</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={engagementTrendData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'engagements', name: 'Engagements (M)', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Engagement by Platform</CardTitle>
                    <CardDescription>Total engagements per platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={[
                        { name: 'TikTok', value: 35, color: CHART_COLORS.rose },
                        { name: 'Instagram', value: 28, color: CHART_COLORS.pink },
                        { name: 'Twitter/X', value: 18, color: CHART_COLORS.navy },
                        { name: 'YouTube', value: 12, color: CHART_COLORS.danger },
                        { name: 'Facebook', value: 7, color: CHART_COLORS.denim },
                      ]}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Performing Content</CardTitle>
                    <CardDescription>Highest engagement content this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {topContent.map((content, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-700/20 text-gold-700">
                                {index + 1}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-platinum-200">{content.title}</p>
                                <p className="text-xs text-platinum-400">{content.platform}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-emerald-400">
                                {(content.engagements / 1000).toFixed(0)}K
                              </div>
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

        {/* Platforms Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <GlassPanel title="Platform Engagement Deep Dive" description="Detailed engagement metrics by platform">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Type by Platform</CardTitle>
                  <CardDescription>Likes, comments, shares, and saves rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={platformEngagement}
                    xAxisKey="platform"
                    bars={[
                      { dataKey: 'likes', name: 'Likes %', color: CHART_COLORS.rose },
                      { dataKey: 'comments', name: 'Comments %', color: CHART_COLORS.gold },
                      { dataKey: 'shares', name: 'Shares %', color: CHART_COLORS.navy },
                      { dataKey: 'saves', name: 'Saves %', color: CHART_COLORS.emerald },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Metrics</CardTitle>
                    <CardDescription>Key engagement indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {platformEngagement.map((platform, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <div
                                className="h-8 w-8 rounded-full"
                                style={{ backgroundColor: `${platform.color}20` }}
                              />
                              <span className="text-sm font-medium text-platinum-200">{platform.platform}</span>
                            </div>
                            <div className="flex gap-4">
                              <div className="text-center">
                                <Heart className="h-4 w-4 text-rose-400 mx-auto" />
                                <p className="text-xs text-platinum-400">{(platform.likes * 100).toFixed(0)}%</p>
                              </div>
                              <div className="text-center">
                                <MessageCircle className="h-4 w-4 text-gold-400 mx-auto" />
                                <p className="text-xs text-platinum-400">{(platform.comments * 100).toFixed(0)}%</p>
                              </div>
                              <div className="text-center">
                                <Share2 className="h-4 w-4 text-navy-400 mx-auto" />
                                <p className="text-xs text-platinum-400">{(platform.shares * 100).toFixed(0)}%</p>
                              </div>
                              <div className="text-center">
                                <Bookmark className="h-4 w-4 text-emerald-400 mx-auto" />
                                <p className="text-xs text-platinum-400">{(platform.saves * 100).toFixed(0)}%</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Engagement Rate Comparison</CardTitle>
                    <CardDescription>Platform effectiveness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {platformEngagement.map((platform, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{platform.platform}</span>
                            <span className="text-sm font-bold text-emerald-400">
                              {((platform.likes + platform.comments + platform.shares + platform.saves) * 100 / 4).toFixed(1)}%
                            </span>
                          </div>
                          <Progress
                            value={(platform.likes + platform.comments + platform.shares + platform.saves) * 100 / 4}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Content Types Tab */}
        <TabsContent value="content" className="space-y-6">
          <GlassPanel title="Content Type Performance" description="Engagement metrics by content format">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Engagement Comparison</CardTitle>
                  <CardDescription>Engagement by content type</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={contentEngagement}
                    xAxisKey="type"
                    bars={[
                      { dataKey: 'engagement', name: 'Total Engagements', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Type Details</CardTitle>
                  <CardDescription>Performance breakdown by format</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {contentEngagement.map((content, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700/20 text-gold-700">
                              <Zap className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{content.type}</p>
                              <p className="text-sm text-platinum-400">{content.percentage}% of total engagement</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-platinum-200">
                                {(content.engagement / 1000000).toFixed(1)}M
                              </div>
                              <p className="text-xs text-platinum-400">Engagements</p>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-emerald-400">{content.rate}%</div>
                              <p className="text-xs text-platinum-400">Rate</p>
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

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          <GlassPanel title="Demographic Engagement Analysis" description="Engagement patterns by age and gender">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement by Age Group</CardTitle>
                  <CardDescription>Gender breakdown of engagement rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={demographicsEngagement}
                    xAxisKey="age"
                    bars={[
                      { dataKey: 'male', name: 'Male', color: CHART_COLORS.navy },
                      { dataKey: 'female', name: 'Female', color: CHART_COLORS.gold },
                      { dataKey: 'other', name: 'Other', color: CHART_COLORS.platinum },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Most Engaged Age</CardTitle>
                    <CardDescription>Peak engagement demographic</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-gold-700">25-34</div>
                    <p className="text-sm text-platinum-400 mt-2">Highest overall engagement rate</p>
                    <div className="mt-4">
                      <Badge variant="gold">78% avg engagement</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Fastest Growing</CardTitle>
                    <CardDescription>Fastest growing demographic</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-emerald-400">18-24</div>
                    <p className="text-sm text-platinum-400 mt-2">+23% YoY growth</p>
                    <div className="mt-4">
                      <Badge variant="outline" className="text-emerald-400">+23% increase</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Session Duration</CardTitle>
                    <CardDescription>Average time spent</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-navy-500">{avgSessionTime}min</div>
                    <p className="text-sm text-platinum-400 mt-2">Across all demographics</p>
                    <div className="mt-4">
                      <Badge variant="denim">Above average</Badge>
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
