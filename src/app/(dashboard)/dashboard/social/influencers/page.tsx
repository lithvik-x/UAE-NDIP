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
  Shield,
  Users,
  Star,
  TrendingUp,
  Eye,
  MessageSquare,
  Award,
  UserCheck,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
} from 'lucide-react'
import {
  useInstagramIntelligenceData,
  useTwitterIntelligenceData,
  useTiktokIntelligenceData,
} from '@/lib/data-loader'

export default function InfluencersPage() {
  const instagramData = useInstagramIntelligenceData()
  const twitterData = useTwitterIntelligenceData()
  const tiktokData = useTiktokIntelligenceData()

  const isLoading = !instagramData.data && !twitterData.data && !tiktokData.data

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading influencer intelligence data...</div>
      </div>
    )
  }

  // UAE Influencer Registry Data
  const influencerRegistry = [
    {
      name: 'Kylie Jenner',
      handle: '@kyliejenner',
      platform: 'Instagram',
      followers: 400000000,
      category: 'Beauty/Lifestyle',
      uaeResonance: 78,
      sentiment: 'Positive',
      verified: true,
      tier: 1,
    },
    {
      name: 'Huda Kattan',
      handle: '@hudabeauty',
      platform: 'Instagram',
      followers: 55000000,
      category: 'Beauty',
      uaeResonance: 95,
      sentiment: 'Positive',
      verified: true,
      tier: 1,
    },
    {
      name: 'Mohamed Hamaki',
      handle: '@hamaki',
      platform: 'Instagram',
      followers: 12000000,
      category: 'Music/Entertainment',
      uaeResonance: 88,
      sentiment: 'Positive',
      verified: true,
      tier: 2,
    },
    {
      name: 'Balqees Fathi',
      handle: '@balqees',
      platform: 'Instagram',
      followers: 8500000,
      category: 'Music',
      uaeResonance: 85,
      sentiment: 'Positive',
      verified: true,
      tier: 2,
    },
    {
      name: 'Ahmed Alireza',
      handle: '@ahmedalireza',
      platform: 'Twitter',
      followers: 4200000,
      category: 'Business/Tech',
      uaeResonance: 82,
      sentiment: 'Neutral',
      verified: true,
      tier: 2,
    },
    {
      name: 'Mona Kattan',
      handle: '@monakattan',
      platform: 'Instagram',
      followers: 5100000,
      category: 'Beauty/Entrepreneur',
      uaeResonance: 91,
      sentiment: 'Positive',
      verified: true,
      tier: 2,
    },
    {
      name: 'Joumaa',
      handle: '@joumaa',
      platform: 'Instagram',
      followers: 3200000,
      category: 'Comedy/Entertainment',
      uaeResonance: 86,
      sentiment: 'Positive',
      verified: true,
      tier: 3,
    },
    {
      name: 'Drizzy',
      handle: '@drizzytv',
      platform: 'Instagram',
      followers: 1800000,
      category: 'Gaming/Entertainment',
      uaeResonance: 72,
      sentiment: 'Neutral',
      verified: true,
      tier: 3,
    },
  ]

  // Influencer metrics by platform
  const platformMetrics = [
    { platform: 'Instagram', influencers: 122014, avgFollowers: 125000, engagement: 3.2, color: CHART_COLORS.rose },
    { platform: 'TikTok', influencers: 45000, avgFollowers: 85000, engagement: 5.8, color: CHART_COLORS.navy },
    { platform: 'Twitter', influencers: 12000, avgFollowers: 45000, engagement: 1.2, color: CHART_COLORS.gold },
    { platform: 'YouTube', influencers: 8000, avgFollowers: 250000, engagement: 4.5, color: CHART_COLORS.platinum },
  ]

  // Category distribution
  const categoryData = [
    { category: 'Lifestyle/Fashion', percentage: 28, color: CHART_COLORS.gold },
    { category: 'Beauty', percentage: 22, color: CHART_COLORS.rose },
    { category: 'Entertainment', percentage: 18, color: CHART_COLORS.navy },
    { category: 'Business/Tech', percentage: 12, color: CHART_COLORS.platinum },
    { category: 'Food/Dining', percentage: 10, color: CHART_COLORS.emerald },
    { category: 'Travel/Tourism', percentage: 10, color: CHART_COLORS.info },
  ]

  // Tier distribution
  const tierData = [
    { tier: 'Mega (1M+)', count: 45, color: CHART_COLORS.gold },
    { tier: 'Macro (100K-1M)', count: 380, color: CHART_COLORS.navy },
    { tier: 'Mid (10K-100K)', count: 2500, color: CHART_COLORS.platinum },
    { tier: 'Micro (<10K)', count: 119089, color: CHART_COLORS.emerald },
  ]

  // Engagement metrics
  const engagementData = [
    { metric: 'Avg Likes', value: instagramData.data?.metrics?.engagement?.avgLikes || 420, color: CHART_COLORS.rose },
    { metric: 'Avg Comments', value: instagramData.data?.metrics?.engagement?.avgComments || 35, color: CHART_COLORS.navy },
    { metric: 'Avg Saves', value: instagramData.data?.metrics?.engagement?.avgSaves || 28, color: CHART_COLORS.gold },
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="h-4 w-4" />
      case 'twitter':
        return <Twitter className="h-4 w-4" />
      case 'youtube':
        return <Youtube className="h-4 w-4" />
      default:
        return <Users className="h-4 w-4" />
    }
  }

  const getTierBadge = (tier: number) => {
    switch (tier) {
      case 1:
        return <Badge className="bg-gold/20 text-gold border-gold">Tier 1</Badge>
      case 2:
        return <Badge className="bg-navy/20 text-navy border-navy">Tier 2</Badge>
      case 3:
        return <Badge className="bg-platinum/20 text-platinum border-platinum">Tier 3</Badge>
      default:
        return <Badge variant="outline">Unverified</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">INFLUENCER INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Influencer Registry & Metrics</h1>
          <p className="mt-2 text-slate-400">
            UAE influencer landscape — registry, engagement metrics, and tier classification
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Users className="h-4 w-4" />
            View Registry
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Star className="h-4 w-4" />
            Analyze Impact
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Influencers"
          value="122,014"
          previousValue={118500}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Avg Engagement"
          value="3.2%"
          previousValue={2.9}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Fake Followers"
          value="38%"
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="CIB Operations"
          value="12"
          previousValue={8}
          icon={<Shield className="h-6 w-6" />}
          gradient="indigo"
          status="warning"
        />
      </div>

      <Tabs defaultValue="registry" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="registry">Influencer Registry</TabsTrigger>
          <TabsTrigger value="platforms">Platform Analysis</TabsTrigger>
          <TabsTrigger value="engagement">Engagement Metrics</TabsTrigger>
          <TabsTrigger value="tiers">Tier Classification</TabsTrigger>
        </TabsList>

        {/* Registry Tab */}
        <TabsContent value="registry" className="space-y-6">
          <GlassPanel title="UAE Influencer Registry" description="Verified influencers active in UAE market">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Influencers by UAE Resonance</CardTitle>
                  <CardDescription>Ranked by engagement and UAE audience alignment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-3">
                      {influencerRegistry.map((influencer, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold text-sm font-bold">
                              #{idx + 1}
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 text-slate-300">
                                {getPlatformIcon(influencer.platform)}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="font-semibold text-slate-200">{influencer.name}</p>
                                  {influencer.verified && (
                                    <UserCheck className="h-4 w-4 text-gold" />
                                  )}
                                </div>
                                <p className="text-sm text-slate-400">{influencer.handle}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <p className="text-sm text-slate-400">Followers</p>
                              <p className="font-bold text-slate-200">
                                {(influencer.followers / 1000000).toFixed(1)}M
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-slate-400">UAE Score</p>
                              <p className="font-bold text-gold">{influencer.uaeResonance}</p>
                            </div>
                            <div className="text-center">
                              {getTierBadge(influencer.tier)}
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

        {/* Platform Analysis Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <GlassPanel title="Platform Influencer Analysis" description="Influencer distribution across platforms">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Influencer Count by Platform</CardTitle>
                  <CardDescription>Active influencers per platform in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={platformMetrics}
                    xAxisKey="platform"
                    bars={[
                      { dataKey: 'influencers', name: 'Influencers', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Category Distribution</CardTitle>
                    <CardDescription>Influencer categories in UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={categoryData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Metrics</CardTitle>
                    <CardDescription>Average followers and engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {platformMetrics.map((platform, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div
                                  className="h-3 w-3 rounded-full"
                                  style={{ backgroundColor: platform.color }}
                                />
                                <span className="text-sm font-medium text-slate-200">{platform.platform}</span>
                              </div>
                              <span className="text-sm text-slate-400">{platform.influencers.toLocaleString()} influencers</span>
                            </div>
                            <div className="flex gap-4">
                              <div className="flex-1">
                                <p className="text-xs text-slate-500">Avg Followers</p>
                                <p className="font-semibold text-slate-200">{(platform.avgFollowers / 1000).toFixed(0)}K</p>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs text-slate-500">Engagement</p>
                                <p className="font-semibold text-slate-200">{platform.engagement}%</p>
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

        {/* Engagement Metrics Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <GlassPanel title="Engagement Analysis" description="Influencer engagement metrics across platforms">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Instagram Engagement Metrics</CardTitle>
                  <CardDescription>Average engagement per post on Instagram</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={engagementData}
                    xAxisKey="metric"
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
                    <CardTitle className="text-lg">Top Hashtags Used</CardTitle>
                    <CardDescription>Most common hashtags by UAE influencers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {['#UAE', '#Dubai', '#AbuDhabi', '#UAEInfluencer', '#DubaiLife', '#UAEBeauty', '#DubaiInfluencer', '#UAEFashion'].map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-gold border-gold/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Engagement Rate by Category</CardTitle>
                    <CardDescription>Average engagement percentage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { category: 'Beauty', rate: 4.8 },
                        { category: 'Fashion', rate: 3.9 },
                        { category: 'Food', rate: 3.5 },
                        { category: 'Travel', rate: 3.2 },
                        { category: 'Tech', rate: 2.8 },
                        { category: 'Business', rate: 2.1 },
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.category}</span>
                            <span className="text-sm font-bold text-slate-200">{item.rate}%</span>
                          </div>
                          <Progress value={item.rate * 20} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Tiers Tab */}
        <TabsContent value="tiers" className="space-y-6">
          <GlassPanel title="Influencer Tier Classification" description="Classification based on follower count and engagement">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Tier Distribution</CardTitle>
                  <CardDescription>Influencer count by tier level</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={tierData}
                    xAxisKey="tier"
                    bars={[
                      { dataKey: 'count', name: 'Count', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {tierData.map((tier, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="outline"
                          style={{ borderColor: tier.color, color: tier.color }}
                        >
                          {tier.tier}
                        </Badge>
                      </div>
                      <p className="text-3xl font-bold text-slate-200">{tier.count.toLocaleString()}</p>
                      <p className="text-sm text-slate-400">
                        {((tier.count / 122014) * 100).toFixed(1)}% of total
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Tier Classification Criteria</CardTitle>
                  <CardDescription>UAE NDIP influencer classification standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        tier: 'Tier 1 - Mega Influencers',
                        criteria: '1M+ followers, verified, high UAE engagement',
                        examples: 'Huda Kattan, Mohamed Hamaki',
                        color: 'gold',
                      },
                      {
                        tier: 'Tier 2 - Macro Influencers',
                        criteria: '100K-1M followers, consistent UAE content',
                        examples: 'Mona Kattan, Ahmed Alireza',
                        color: 'navy',
                      },
                      {
                        tier: 'Tier 3 - Mid-Tier Influencers',
                        criteria: '10K-100K followers, engaged UAE audience',
                        examples: 'Joumaa, Local content creators',
                        color: 'platinum',
                      },
                      {
                        tier: 'Tier 4 - Micro Influencers',
                        criteria: '<10K followers, niche UAE communities',
                        examples: 'Local businesses, community leaders',
                        color: 'emerald',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4">
                        <Award className={`h-5 w-5 text-${item.color} mt-0.5`} />
                        <div className="flex-1">
                          <p className="font-semibold text-slate-200">{item.tier}</p>
                          <p className="text-sm text-slate-400">{item.criteria}</p>
                          <p className="text-xs text-slate-500 mt-1">Examples: {item.examples}</p>
                        </div>
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
