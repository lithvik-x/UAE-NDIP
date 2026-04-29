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
  User,
  Users,
  TrendingUp,
  MessageSquare,
  Eye,
  Heart,
  Share2,
  Star,
  Shield,
  AlertCircle,
  CheckCircle,
  Globe,
} from 'lucide-react'

export default function InfluencerSentimentPage() {
  // Influencer sentiment trends
  const sentimentTrendData = [
    { month: 'Jan', macro: 72, micro: 68, celebrity: 75 },
    { month: 'Feb', macro: 73, micro: 70, celebrity: 76 },
    { month: 'Mar', macro: 74, micro: 71, celebrity: 77 },
    { month: 'Apr', macro: 73, micro: 72, celebrity: 75 },
    { month: 'May', macro: 75, micro: 73, celebrity: 78 },
    { month: 'Jun', macro: 76, micro: 74, celebrity: 79 },
    { month: 'Jul', macro: 77, micro: 75, celebrity: 80 },
    { month: 'Aug', macro: 76, micro: 74, celebrity: 79 },
    { month: 'Sep', macro: 78, micro: 76, celebrity: 81 },
    { month: 'Oct', macro: 79, micro: 77, celebrity: 82 },
    { month: 'Nov', macro: 78, micro: 76, celebrity: 81 },
    { month: 'Dec', macro: 80, micro: 78, celebrity: 83 },
  ]

  // Top influencers
  const topInfluencersData = [
    { name: 'Mohammed Alabbar', handle: '@Alabbar', followers: 12.5, sentiment: 88, category: 'Business', reach: 'Macro' },
    { name: 'Khalid Aljaber', handle: '@KAljaber', followers: 8.2, sentiment: 85, category: 'Tech', reach: 'Macro' },
    { name: 'Dhabiya AlMheiri', handle: '@Dhabiya', followers: 4.5, sentiment: 82, category: 'Lifestyle', reach: 'Mid' },
    { name: 'Ahmed Alkhaja', handle: '@AhmedAK', followers: 2.8, sentiment: 79, category: 'Food', reach: 'Micro' },
    { name: 'Fatima Alhashimi', handle: '@FatimaUAE', followers: 1.9, sentiment: 86, category: 'Fashion', reach: 'Micro' },
  ]

  // Sentiment by category
  const categorySentimentData = [
    { category: 'Business', sentiment: 82, influencers: 45, color: CHART_COLORS.gold },
    { category: 'Technology', sentiment: 85, influencers: 38, color: CHART_COLORS.navy },
    { category: 'Lifestyle', sentiment: 78, influencers: 62, color: CHART_COLORS.emerald },
    { category: 'Fashion', sentiment: 80, influencers: 35, color: CHART_COLORS.rose },
    { category: 'Food', sentiment: 76, influencers: 48, color: CHART_COLORS.info },
    { category: 'Sports', sentiment: 84, influencers: 28, color: CHART_COLORS.purple },
  ]

  // Influencer tiers
  const tierData = [
    { tier: 'Celebrity (1M+)', count: 15, avgSentiment: 83, totalFollowers: 45 },
    { tier: 'Macro (100K-1M)', count: 85, avgSentiment: 80, totalFollowers: 125 },
    { tier: 'Mid (10K-100K)', count: 320, avgSentiment: 77, totalFollowers: 85 },
    { tier: 'Micro (1K-10K)', count: 1200, avgSentiment: 75, totalFollowers: 45 },
    { tier: 'Nano (<1K)', count: 4500, avgSentiment: 72, totalFollowers: 15 },
  ]

  // Platform distribution
  const platformData = [
    { platform: 'Instagram', influencers: 1850, sentiment: 80, avgEngagement: 4.2 },
    { platform: 'Twitter/X', influencers: 1240, sentiment: 76, avgEngagement: 2.8 },
    { platform: 'TikTok', influencers: 980, sentiment: 82, avgEngagement: 8.5 },
    { platform: 'LinkedIn', influencers: 420, sentiment: 85, avgEngagement: 3.2 },
    { platform: 'YouTube', influencers: 280, sentiment: 83, avgEngagement: 5.5 },
    { platform: 'Snapchat', influencers: 650, sentiment: 78, avgEngagement: 6.2 },
  ]

  // Sentiment drivers
  const sentimentDriversData = [
    { driver: 'Authentic Content', impact: 45, correlation: 0.85 },
    { driver: 'Government Alignment', impact: 35, correlation: 0.78 },
    { driver: 'Expertise Display', impact: 25, correlation: 0.72 },
    { driver: 'Community Engagement', impact: 20, correlation: 0.68 },
    { driver: 'Consistency', impact: 15, correlation: 0.65 },
  ]

  // Risk indicators
  const riskIndicatorsData = [
    { indicator: 'Controversial Statements', risk: 12, trend: 'down' },
    { indicator: 'Misinformation Sharing', risk: 8, trend: 'down' },
    { indicator: 'Negative Sentiment Spikes', risk: 15, trend: 'stable' },
    { indicator: 'Engagement Manipulation', risk: 6, trend: 'down' },
    { indicator: 'Brand Alignment Issues', risk: 10, trend: 'stable' },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400'
    if (score >= 70) return 'text-yellow-400'
    return 'text-rose-400'
  }

  const getSentimentBg = (score: number) => {
    if (score >= 80) return 'bg-emerald-500/20'
    if (score >= 70) return 'bg-yellow-500/20'
    return 'bg-rose-500/20'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">SENTIMENT</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Influencer Sentiment</h1>
          <p className="mt-2 text-slate-400">
            Key opinion leaders, influencer analytics, and sentiment tracking
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <User className="h-4 w-4" />
            Influencer List
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Users className="h-4 w-4" />
            Track Influencers
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Influencers"
          value={5240}
          previousValue={4980}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Avg Sentiment"
          value={78}
          previousValue={76}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Total Reach (M)"
          value={315}
          previousValue={298}
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="High Risk Influencers"
          value={8}
          previousValue={12}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="influencers">Top Influencers</TabsTrigger>
          <TabsTrigger value="analysis">Category Analysis</TabsTrigger>
          <TabsTrigger value="risk">Risk Indicators</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Influencer Sentiment Overview" description="Aggregate sentiment and reach metrics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Trend by Tier</CardTitle>
                  <CardDescription>12-month trajectory by influencer category</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={sentimentTrendData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'macro', name: 'Macro', color: CHART_COLORS.gold },
                      { dataKey: 'micro', name: 'Micro', color: CHART_COLORS.navy },
                      { dataKey: 'celebrity', name: 'Celebrity', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Influencer Tier Distribution</CardTitle>
                    <CardDescription>By tier and total followers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={tierData.map((t, i) => ({
                        name: t.tier.split(' ')[0],
                        value: t.count,
                        color: Object.values(CHART_COLORS)[i],
                      }))}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Distribution</CardTitle>
                    <CardDescription>Sentiment by platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={platformData}
                      xAxisKey="platform"
                      bars={[
                        { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.gold },
                        { dataKey: 'avgEngagement', name: 'Engagement %', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Performing Categories</CardTitle>
                  <CardDescription>By sentiment and influencer count</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {categorySentimentData.map((cat, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${getSentimentBg(cat.sentiment)}`}>
                              <Star className={`h-5 w-5 ${getSentimentColor(cat.sentiment)}`} />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{cat.category}</p>
                              <p className="text-sm text-slate-400">{cat.influencers} influencers</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${getSentimentColor(cat.sentiment)}`}>
                              {cat.sentiment}%
                            </div>
                            <p className="text-xs text-slate-400">Sentiment</p>
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

        {/* Top Influencers Tab */}
        <TabsContent value="influencers" className="space-y-6">
          <GlassPanel title="Top Influencers" description="Key opinion leaders and their sentiment scores">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Leading UAE Influencers</CardTitle>
                  <CardDescription>By follower count and sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {topInfluencersData.map((influencer, index) => (
                        <div key={index} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold">
                                <User className="h-6 w-6" />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-200">{influencer.name}</p>
                                <p className="text-sm text-slate-400">{influencer.handle}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge variant="outline" className="text-xs">{influencer.category}</Badge>
                                  <Badge variant="outline" className="text-xs">{influencer.reach}</Badge>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gold">{influencer.followers}M</div>
                              <p className="text-xs text-slate-400">Followers</p>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-sm text-slate-400">Sentiment Score</span>
                            <div className="flex items-center gap-2">
                              <Progress value={influencer.sentiment} className="h-2 w-24" />
                              <span className={`text-sm font-bold ${getSentimentColor(influencer.sentiment)}`}>
                                {influencer.sentiment}%
                              </span>
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
                    <CardTitle className="text-lg">Rising Stars</CardTitle>
                    <CardDescription>Influencers with highest growth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: 'Sara AlMahmoud', handle: '@SaraUAE', growth: 45, sentiment: 82 },
                        { name: 'Omar Hassan', handle: '@OmarTech', growth: 38, sentiment: 85 },
                        { name: 'Layla AlSheikh', handle: '@LaylaStyle', growth: 35, sentiment: 79 },
                        { name: 'Khalid Nasser', handle: '@KNFinance', growth: 32, sentiment: 80 },
                      ].map((influencer, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="h-5 w-5 text-emerald" />
                            <div>
                              <p className="text-sm font-medium text-slate-200">{influencer.name}</p>
                              <p className="text-xs text-slate-400">{influencer.handle}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs text-emerald">+{influencer.growth}%</Badge>
                            <span className={`text-sm font-bold ${getSentimentColor(influencer.sentiment)}`}>{influencer.sentiment}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Government-Aligned</CardTitle>
                    <CardDescription>Official partners and ambassadors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: 'UAE Government Media', ambassadors: 25, sentiment: 92 },
                        { name: 'Tourism Campaign Voices', ambassadors: 18, sentiment: 88 },
                        { name: 'National Initiative Partners', ambassadors: 42, sentiment: 85 },
                        { name: 'Cultural Embassy Voices', ambassadors: 12, sentiment: 86 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-gold" />
                            <span className="text-sm font-medium text-slate-200">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs">{item.ambassadors}</Badge>
                            <span className={`text-sm font-bold ${getSentimentColor(item.sentiment)}`}>{item.sentiment}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Category Analysis Tab */}
        <TabsContent value="analysis" className="space-y-6">
          <GlassPanel title="Category Analysis" description="Sentiment breakdown by influencer category">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Category</CardTitle>
                  <CardDescription>Performance across verticals</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={categorySentimentData}
                    xAxisKey="category"
                    bars={[
                      { dataKey: 'sentiment', name: 'Sentiment %', color: CHART_COLORS.gold },
                      { dataKey: 'influencers', name: 'Count', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Drivers</CardTitle>
                    <CardDescription>What influences sentiment scores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={sentimentDriversData}
                      xAxisKey="driver"
                      bars={[
                        { dataKey: 'impact', name: 'Impact %', color: CHART_COLORS.gold },
                        { dataKey: 'correlation', name: 'Correlation', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Category Trends</CardTitle>
                    <CardDescription>Monthly sentiment by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={[
                        { month: 'Jan', business: 78, tech: 80, lifestyle: 74 },
                        { month: 'Feb', business: 79, tech: 81, lifestyle: 75 },
                        { month: 'Mar', business: 80, tech: 83, lifestyle: 76 },
                        { month: 'Apr', business: 79, tech: 82, lifestyle: 75 },
                        { month: 'May', business: 81, tech: 84, lifestyle: 77 },
                        { month: 'Jun', business: 82, tech: 85, lifestyle: 78 },
                      ]}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'business', name: 'Business', color: CHART_COLORS.gold },
                        { dataKey: 'tech', name: 'Tech', color: CHART_COLORS.navy },
                        { dataKey: 'lifestyle', name: 'Lifestyle', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Category Metrics</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <MessageSquare className="mx-auto h-6 w-6 text-gold mb-2" />
                      <p className="text-xs text-slate-400">Avg Posts/Week</p>
                      <p className="text-xl font-bold text-gold">4.2</p>
                      <span className="text-xs text-emerald">+0.3 YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Heart className="mx-auto h-6 w-6 text-rose mb-2" />
                      <p className="text-xs text-slate-400">Avg Engagement</p>
                      <p className="text-xl font-bold text-rose">5.8%</p>
                      <span className="text-xs text-emerald">+0.8% YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Share2 className="mx-auto h-6 w-6 text-navy mb-2" />
                      <p className="text-xs text-slate-400">Avg Shares</p>
                      <p className="text-xl font-bold text-navy">1.2K</p>
                      <span className="text-xs text-emerald">+15% YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Eye className="mx-auto h-6 w-6 text-emerald mb-2" />
                      <p className="text-xs text-slate-400">Avg Reach</p>
                      <p className="text-xl font-bold text-emerald">125K</p>
                      <span className="text-xs text-emerald">+22% YoY</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Risk Indicators Tab */}
        <TabsContent value="risk" className="space-y-6">
          <GlassPanel title="Risk Indicators" description="Influencer risk monitoring and mitigation">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Risk Indicators</CardTitle>
                  <CardDescription>Monitoring metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={riskIndicatorsData}
                    xAxisKey="indicator"
                    bars={[
                      { dataKey: 'risk', name: 'Risk Score', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">High Risk Influencers</CardTitle>
                    <CardDescription>Requiring monitoring or intervention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {[
                          { name: 'Anonymous Account A', risk: 85, reason: 'Misinformation' },
                          { name: 'Controversial Voice B', risk: 78, reason: 'Negative Sentiment' },
                          { name: 'Engagement Farmer C', risk: 65, reason: 'Manipulation' },
                        ].map((influencer, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg bg-rose-500/10 p-3 border border-rose-500/30">
                            <div className="flex items-center gap-3">
                              <AlertCircle className="h-5 w-5 text-rose" />
                              <div>
                                <p className="text-sm font-medium text-slate-200">{influencer.name}</p>
                                <p className="text-xs text-slate-400">{influencer.reason}</p>
                              </div>
                            </div>
                            <Badge variant="destructive" className="text-xs">{influencer.risk}%</Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Recovery</CardTitle>
                    <CardDescription>Post-crisis sentiment restoration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'Crisis A - Resolved', recovery: 92, time: '2 weeks' },
                        { name: 'Crisis B - Resolved', recovery: 85, time: '1 month' },
                        { name: 'Crisis C - Monitoring', recovery: 72, time: 'Ongoing' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-emerald" />
                            <span className="text-sm font-medium text-slate-200">{item.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-slate-400">{item.time}</span>
                            <Badge variant="outline" className="text-xs text-emerald">{item.recovery}%</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Risk Mitigation Actions</CardTitle>
                  <CardDescription>Active countermeasures</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Shield className="mx-auto h-6 w-6 text-emerald mb-2" />
                      <p className="text-xs text-slate-400">Active Monitoring</p>
                      <p className="text-xl font-bold text-emerald">245</p>
                      <span className="text-xs text-emerald">Influencers</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <CheckCircle className="mx-auto h-6 w-6 text-gold mb-2" />
                      <p className="text-xs text-slate-400">Pre-approved Content</p>
                      <p className="text-xl font-bold text-gold">1,250</p>
                      <span className="text-xs text-emerald">Posts</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <AlertCircle className="mx-auto h-6 w-6 text-rose mb-2" />
                      <p className="text-xs text-slate-400">Escalations</p>
                      <p className="text-xl font-bold text-rose">12</p>
                      <span className="text-xs text-emerald">This Month</span>
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
