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
  Globe,
  MessageSquare,
  TrendingUp,
  Users,
  AlertTriangle,
  Search,
  Languages,
  Hash,
} from 'lucide-react'
import {
  useUrduHindiData,
  useLanguageOverviewData,
} from '@/lib/data-loader'

export default function UrduLanguagePage() {
  const { data } = useUrduHindiData()

  // Urdu-speaking population in UAE
  const urduSpeakers = 1200000
  const contentVolume = 3200000
  const sentimentScore = 64
  const topHashtags = 890

  // Platform distribution for Urdu
  const platformDistribution = [
    { platform: 'TikTok', percentage: 35, speakers: 420000, color: CHART_COLORS.rose },
    { platform: 'WhatsApp', percentage: 32, speakers: 384000, color: CHART_COLORS.emerald },
    { platform: 'YouTube', percentage: 18, speakers: 216000, color: CHART_COLORS.red },
    { platform: 'Twitter/X', percentage: 8, speakers: 96000, color: CHART_COLORS.navy },
    { platform: 'Instagram', percentage: 5, speakers: 60000, color: CHART_COLORS.pink },
    { platform: 'Facebook', percentage: 2, speakers: 24000, color: CHART_COLORS.blue },
  ]

  // Content categories in Urdu
  const contentCategories = [
    { category: 'Entertainment', volume: 1120000, sentiment: 82, trend: 'up' },
    { category: 'Religious Content', volume: 640000, sentiment: 88, trend: 'stable' },
    { category: 'News/Politics', volume: 580000, sentiment: 38, trend: 'down' },
    { category: 'Poetry/Literature', volume: 320000, sentiment: 76, trend: 'up' },
    { category: 'Business', volume: 280000, sentiment: 68, trend: 'stable' },
    { category: 'Sports', volume: 240000, sentiment: 78, trend: 'up' },
  ]

  // Sentiment by topic
  const topicSentiment = [
    { topic: 'Pakistan Cricket', sentiment: 85, volume: 380000 },
    { topic: 'Religious Discussions', sentiment: 88, volume: 290000 },
    { topic: 'Poetry & Literature', sentiment: 76, volume: 180000 },
    { topic: 'Political Content', sentiment: 32, volume: 240000 },
    { topic: 'UAE Life', sentiment: 72, volume: 165000 },
    { topic: 'Business Opportunities', sentiment: 68, volume: 145000 },
  ]

  // Key influencers
  const keyInfluencers = [
    { name: 'Pak Cricket UAE', handle: '@pakcricketae', followers: 678000, sentiment: 88 },
    { name: 'Urdu Poetry Dubai', handle: '@urdupoetrydxb', followers: 445000, sentiment: 82 },
    { name: 'Desi Business Network', handle: '@desibusinesae', followers: 312000, sentiment: 71 },
    { name: 'Islamic Content UAE', handle: '@islamicuae', followers: 289000, sentiment: 92 },
    { name: 'Urdu News Updates', handle: '@urdunewsdubai', followers: 234000, sentiment: 45 },
  ]

  // Monthly trend
  const monthlyTrend = [
    { month: 'Jan', volume: 245, sentiment: 62 },
    { month: 'Feb', volume: 258, sentiment: 63 },
    { month: 'Mar', volume: 275, sentiment: 65 },
    { month: 'Apr', volume: 282, sentiment: 64 },
    { month: 'May', volume: 298, sentiment: 66 },
    { month: 'Jun', volume: 312, sentiment: 67 },
    { month: 'Jul', volume: 325, sentiment: 65 },
    { month: 'Aug', volume: 338, sentiment: 68 },
    { month: 'Sep', volume: 352, sentiment: 69 },
    { month: 'Oct', volume: 368, sentiment: 67 },
    { month: 'Nov', volume: 385, sentiment: 70 },
    { month: 'Dec', volume: 398, sentiment: 71 },
  ]

  // Popular search terms
  const popularSearches = [
    { term: 'Pakistan embassy Dubai', trend: 92 },
    { term: 'Urdu news UAE', trend: 88 },
    { term: 'Islamic content Urdu', trend: 85 },
    { term: 'Pak jobs in Dubai', trend: 82 },
    { term: 'Urdu poetry events', trend: 78 },
    { term: 'Desi wedding Dubai', trend: 75 },
    { term: 'Pakistani restaurants', trend: 72 },
    { term: 'Urdu tutoring UAE', trend: 68 },
  ]

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? (
      <TrendingUp className="h-4 w-4 text-emerald-400" />
    ) : trend === 'down' ? (
      <TrendingUp className="h-4 w-4 text-rose-400 rotate-180" />
    ) : (
      <TrendingUp className="h-4 w-4 text-platinum-400" />
    )
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy" className="mb-2">L-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Urdu Language Media</h1>
          <p className="mt-2 text-slate-400">
            Urdu-language content monitoring and analysis in the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Search className="h-4 w-4" />
            Search
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Languages className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Urdu Speakers in UAE"
          value={(urduSpeakers / 1000000).toFixed(1) + 'M'}
          previousValue={1.1}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Monthly Content Volume"
          value={(contentVolume / 1000000).toFixed(1) + 'M'}
          previousValue={2.8}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentimentScore + '%'}
          previousValue={sentimentScore - 4}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="navy"
          status="info"
        />
        <MetricCard
          title="Active Hashtags"
          value={topHashtags.toLocaleString()}
          previousValue={topHashtags - 65}
          icon={<Hash className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="influencers">Influencers</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Urdu Media Landscape" description="Urdu content monitoring across UAE platforms">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Distribution</CardTitle>
                    <CardDescription>Urdu content by platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={platformDistribution}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Content Trend (12 months)</CardTitle>
                    <CardDescription>Monthly volume in thousands</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={monthlyTrend}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'volume', name: 'Volume', color: CHART_COLORS.navy },
                        { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Urdu Searches</CardTitle>
                  <CardDescription>Most common search terms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {popularSearches.map((search, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Hash className="h-4 w-4 text-navy" />
                            <span className="text-sm text-slate-200">{search.term}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Progress value={search.trend} className="h-2 w-16" />
                            <span className="text-xs font-bold text-emerald-400">{search.trend}</span>
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

        {/* Platforms Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <GlassPanel title="Platform-Specific Analysis" description="Urdu content breakdown by platform">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Volume by Platform</CardTitle>
                  <CardDescription>Monthly Urdu content share</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={platformDistribution}
                    xAxisKey="platform"
                    bars={[
                      { dataKey: 'percentage', name: 'Share %', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                {platformDistribution.map((platform, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div
                          className="h-6 w-6 rounded-full"
                          style={{ backgroundColor: `${platform.color}20` }}
                        />
                        {platform.platform}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-3xl font-bold text-slate-200">{platform.percentage}%</div>
                          <p className="text-sm text-slate-400">of Urdu content</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-emerald-400">
                            {(platform.speakers / 1000).toFixed(0)}K
                          </div>
                          <p className="text-xs text-slate-400">Estimated users</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Urdu Content Sentiment Analysis" description="Sentiment patterns in Urdu-language media">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Topic Sentiment Breakdown</CardTitle>
                  <CardDescription>Sentiment scores by content category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px]">
                    <div className="space-y-4">
                      {topicSentiment.map((topic, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{topic.topic}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-xs text-slate-400">{(topic.volume / 1000).toFixed(0)}K posts</span>
                              <span className={`text-sm font-bold ${
                                topic.sentiment >= 70 ? 'text-emerald-400' :
                                topic.sentiment >= 50 ? 'text-yellow-400' :
                                'text-rose-400'
                              }`}>{topic.sentiment}%</span>
                            </div>
                          </div>
                          <Progress value={topic.sentiment} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Categories</CardTitle>
                  <CardDescription>Volume by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={contentCategories}
                    xAxisKey="category"
                    bars={[
                      { dataKey: 'volume', name: 'Volume', color: CHART_COLORS.navy },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Influencers Tab */}
        <TabsContent value="influencers" className="space-y-6">
          <GlassPanel title="Key Urdu Influencers" description="Top Urdu-language voices in UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Urdu Influencers in UAE</CardTitle>
                  <CardDescription>Most influential Urdu content creators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {keyInfluencers.map((influencer, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                              <MessageSquare className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{influencer.name}</p>
                              <p className="text-sm text-slate-400">{influencer.handle}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-slate-200">
                                {(influencer.followers / 1000).toFixed(0)}K
                              </div>
                              <p className="text-xs text-slate-400">Followers</p>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${
                                influencer.sentiment >= 80 ? 'text-emerald-400' :
                                influencer.sentiment >= 60 ? 'text-yellow-400' :
                                'text-rose-400'
                              }`}>{influencer.sentiment}%</div>
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
      </Tabs>
    </div>
  )
}
