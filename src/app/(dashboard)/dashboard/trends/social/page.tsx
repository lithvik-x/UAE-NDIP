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
  TrendingUp,
  Users,
  Zap,
  Smartphone,
  MessageSquare,
  Share2,
  Heart,
  Eye,
  ThumbsUp,
  Hash,
  Instagram,
  Youtube,
  Twitter,
} from 'lucide-react'
import {
  useTrendsDataArrayData,
} from '@/lib/data-loader'

export default function SocialTrendsPage() {
  const { data: trendsData } = useTrendsDataArrayData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Social Trends data...</div>
      </div>
    )
  }

  // Filter social media trend data
  const socialTrend = trendsData.find(t => t.category === 'social-media')

  // Use provided data or fallback
  const socialData = socialTrend || {
    id: 'trend-social',
    category: 'social-media',
    name: 'Social Media Trends',
    description: 'Social media in 2026 has reached supermajority status with 5.24-5.66 billion users globally. The landscape is defined by AI integration, short-form video dominance, and creator economy maturation.',
    adoptionRate: 89,
    uaeAdoptionRate: 99,
    generationalBreakdown: {
      genZ: 98,
      millennial: 95,
      genX: 78,
      boomer: 52,
    },
    sentiment: {
      positive: 68,
      negative: 18,
      neutral: 14,
      overall: 0.62,
      volume: 890000,
    },
    forecasts: [
      {
        scenario: 'optimistic',
        probability: 0.80,
        timeline: '2026-2027',
        indicators: ['Social commerce GMV $6.2T', 'TikTok 2.04B MAU', 'AI-generated content 90%'],
      },
      {
        scenario: 'baseline',
        probability: 0.65,
        timeline: '2027-2028',
        indicators: ['Global users 5.66B', 'Social commerce $1.09-6.2T range', 'Creator economy $32.6B'],
      },
      {
        scenario: 'pessimistic',
        probability: 0.25,
        timeline: '2028-2030',
        indicators: ['AI content engagement penalty -12%', 'Privacy regulation tightening', 'Platform fragmentation'],
      },
    ],
    keyDrivers: [
      'TikTok engagement rate 3.70-4.6% (+49% YoY)',
      'UAE TikTok users 34.1M in KSA with +39% YoY growth',
      'Instagram 73%+ penetration in UAE',
      'Social commerce 28% growth with $1.09-6.2T market',
      '79% of creators using AI tools',
    ],
    credibility: {
      tier: 1,
      score: 88,
      sources: 15,
      lastVerified: '2026-04-27',
    },
    uaeRelevance: {
      score: 95,
      level: 'critical',
      justification: 'UAE has 99.5% social media penetration',
    },
    alertLevel: 'GREEN',
    sources: [
      { name: 'Digital Applied', tier: 3, date: '2026-04-27' },
      { name: 'Hootsuite Social Trends', tier: 2, date: '2026-04-27' },
    ],
    lastUpdated: '2026-04-27',
  }

  // Platform breakdown
  const platformData = [
    { name: 'TikTok', value: 34, users: '34.1M', color: CHART_COLORS.rose },
    { name: 'Instagram', value: 28, users: '8.2M', color: CHART_COLORS.gold },
    { name: 'Facebook', value: 18, users: '7.1M', color: CHART_COLORS.navy },
    { name: 'Twitter/X', value: 12, users: '5.3M', color: CHART_COLORS.platinum },
    { name: 'YouTube', value: 8, users: '9.1M', color: CHART_COLORS.rose },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: socialData.sentiment?.positive || 68, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: socialData.sentiment?.neutral || 14, color: CHART_COLORS.platinum },
    { name: 'Negative', value: socialData.sentiment?.negative || 18, color: CHART_COLORS.rose },
  ]

  // Engagement metrics
  const engagementData = [
    { month: 'Jan', tiktok: 3.2, instagram: 2.8, youtube: 1.9 },
    { month: 'Feb', tiktok: 3.5, instagram: 2.9, youtube: 2.0 },
    { month: 'Mar', tiktok: 3.8, instagram: 3.0, youtube: 2.1 },
    { month: 'Apr', tiktok: 4.1, instagram: 3.2, youtube: 2.2 },
    { month: 'May', tiktok: 4.4, instagram: 3.3, youtube: 2.3 },
    { month: 'Jun', tiktok: 4.6, instagram: 3.4, youtube: 2.4 },
  ]

  // Content categories
  const contentCategories = [
    { name: 'Entertainment', value: 35, color: CHART_COLORS.gold },
    { name: 'Lifestyle', value: 28, color: CHART_COLORS.navy },
    { name: 'Education', value: 18, color: CHART_COLORS.platinum },
    { name: 'News', value: 12, color: CHART_COLORS.emerald },
    { name: 'Other', value: 7, color: CHART_COLORS.rose },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">SOCIAL TRENDS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Social Trends</h1>
          <p className="mt-2 text-slate-400">
            Social media adoption, platform analytics, engagement metrics, and content trends
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Share2 className="h-4 w-4" />
            View Analytics
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze Platform
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="UAE Adoption Rate"
          value={`${socialData.uaeAdoptionRate || 99}%`}
          previousValue={(socialData.uaeAdoptionRate || 99) - 2}
          icon={<Smartphone className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Total Users (UAE)"
          value="63.8M"
          previousValue={58.2}
          icon={<Users className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Avg Engagement"
          value="3.9%"
          previousValue={3.2}
          icon={<Heart className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Media Volume"
          value="890K"
          previousValue={820}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="forecast">Forecasts</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Social Media Trends Overview" description="Key social media metrics and platform performance">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Distribution</CardTitle>
                  <CardDescription>Social media users by platform in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={platformData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Share %', color: CHART_COLORS.gold },
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
                    <CardDescription>Social media sentiment analysis</CardDescription>
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
                    <CardDescription>Most popular content types</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={contentCategories}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Platforms Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <GlassPanel title="Platform Analysis" description="Detailed breakdown of social media platforms">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {platformData.map((platform, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Hash className="h-5 w-5 text-gold" />
                          <span className="font-bold text-slate-200">{platform.name}</span>
                        </div>
                        <Badge variant="outline" className="text-gold">{platform.users} users</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Market Share</span>
                          <span className="text-gold font-bold">{platform.value}%</span>
                        </div>
                        <Progress value={platform.value} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Generational Adoption</CardTitle>
                  <CardDescription>Social media usage by generation in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: 'Gen Z', value: socialData.generationalBreakdown?.genZ || 98 },
                      { name: 'Millennial', value: socialData.generationalBreakdown?.millennial || 95 },
                      { name: 'Gen X', value: socialData.generationalBreakdown?.genX || 78 },
                      { name: 'Boomer', value: socialData.generationalBreakdown?.boomer || 52 },
                    ]}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Adoption %', color: CHART_COLORS.navy },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <GlassPanel title="Engagement Metrics" description="Platform engagement rates and trends">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Rate Trend (%)</CardTitle>
                  <CardDescription>Monthly engagement rates by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={engagementData}
                    xAxisKey="month"
                    bars={[
                      { dataKey: 'tiktok', name: 'TikTok', color: CHART_COLORS.rose },
                      { dataKey: 'instagram', name: 'Instagram', color: CHART_COLORS.gold },
                      { dataKey: 'youtube', name: 'YouTube', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Engagement Metrics</CardTitle>
                    <CardDescription>Performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Avg. Likes/Post', value: '2,450', icon: ThumbsUp },
                        { label: 'Avg. Comments', value: '185', icon: MessageSquare },
                        { label: 'Avg. Shares', value: '420', icon: Share2 },
                        { label: 'Video Views', value: '45.2K', icon: Eye },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5 text-gold" />
                            <span className="text-sm font-medium text-slate-200">{item.label}</span>
                          </div>
                          <span className="text-lg font-bold text-gold">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Content Performance</CardTitle>
                    <CardDescription>Best performing content types</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { type: 'Short-form Video', performance: 92, icon: '🎬' },
                        { type: 'Stories/Reels', performance: 78, icon: '📱' },
                        { type: 'Live Streams', performance: 65, icon: '📺' },
                        { type: 'Carousel Posts', performance: 54, icon: '🖼️' },
                        { type: 'Text-only', performance: 23, icon: '📝' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-sm font-medium text-slate-200">{item.type}</span>
                          </div>
                          <span className="text-lg font-bold text-gold">{item.performance}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Forecasts Tab */}
        <TabsContent value="forecast" className="space-y-6">
          <GlassPanel title="Social Media Forecasts" description="Predictive scenarios for social media trends">
            <div className="space-y-6">
              {socialData.forecasts?.map((forecast, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg capitalize">{forecast.scenario} Scenario</CardTitle>
                      <Badge
                        variant={forecast.scenario === 'optimistic' ? 'success' : forecast.scenario === 'baseline' ? 'default' : 'destructive'}
                      >
                        {Math.round(forecast.probability * 100)}% probability
                      </Badge>
                    </div>
                    <CardDescription>Timeline: {forecast.timeline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {forecast.indicators?.map((indicator, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2 rounded-lg bg-slate-800/50 p-3">
                          <TrendingUp className="h-4 w-4 text-gold mt-0.5" />
                          <span className="text-sm text-slate-200">{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
