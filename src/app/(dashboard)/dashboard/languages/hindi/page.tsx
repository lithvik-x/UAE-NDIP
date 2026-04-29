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

export default function HindiLanguagePage() {
  const { data } = useUrduHindiData()

  // Hindi-speaking population in UAE
  const hindiSpeakers = 1800000
  const contentVolume = 4500000
  const sentimentScore = 68
  const topHashtags = 1240

  // Platform distribution for Hindi
  const platformDistribution = [
    { platform: 'YouTube', percentage: 42, speakers: 756000, color: CHART_COLORS.danger },
    { platform: 'WhatsApp', percentage: 28, speakers: 504000, color: CHART_COLORS.emerald },
    { platform: 'Instagram', percentage: 15, speakers: 270000, color: CHART_COLORS.pink },
    { platform: 'Twitter/X', percentage: 8, speakers: 144000, color: CHART_COLORS.navy },
    { platform: 'Facebook', percentage: 5, speakers: 90000, color: CHART_COLORS.blue },
    { platform: 'TikTok', percentage: 2, speakers: 36000, color: CHART_COLORS.rose },
  ]

  // Content categories in Hindi
  const contentCategories = [
    { category: 'Entertainment', volume: 1850000, sentiment: 78, trend: 'up' },
    { category: 'Business/Finance', volume: 890000, sentiment: 72, trend: 'stable' },
    { category: 'News/Politics', volume: 670000, sentiment: 45, trend: 'down' },
    { category: 'Religion/Spirituality', volume: 450000, sentiment: 82, trend: 'up' },
    { category: 'Technology', volume: 320000, sentiment: 75, trend: 'up' },
    { category: 'Sports', volume: 280000, sentiment: 85, trend: 'up' },
  ]

  // Sentiment by topic
  const topicSentiment = [
    { topic: 'Indian Cricket', sentiment: 92, volume: 450000 },
    { topic: 'Bollywood', sentiment: 88, volume: 680000 },
    { topic: 'UAE Business', sentiment: 74, volume: 340000 },
    { topic: 'Politics', sentiment: 42, volume: 290000 },
    { topic: 'Religion', sentiment: 78, volume: 220000 },
    { topic: 'Technology', sentiment: 71, volume: 180000 },
  ]

  // Key influencers
  const keyInfluencers = [
    { name: 'Virat Kohli Fan UAE', handle: '@vkcfc Dubai', followers: 890000, sentiment: 94 },
    { name: 'Bollywood Updates UAE', handle: '@bollywooduae', followers: 567000, sentiment: 88 },
    { name: 'Indian Business Council', handle: '@ibcdubai', followers: 345000, sentiment: 76 },
    { name: 'Desi Events Dubai', handle: '@desieventsdxb', followers: 234000, sentiment: 82 },
    { name: 'Hindi Tech Reviews', handle: '@hinditechuae', followers: 189000, sentiment: 71 },
  ]

  // Monthly trend
  const monthlyTrend = [
    { month: 'Jan', volume: 320, sentiment: 65 },
    { month: 'Feb', volume: 345, sentiment: 66 },
    { month: 'Mar', volume: 380, sentiment: 68 },
    { month: 'Apr', volume: 395, sentiment: 67 },
    { month: 'May', volume: 420, sentiment: 70 },
    { month: 'Jun', volume: 445, sentiment: 71 },
    { month: 'Jul', volume: 460, sentiment: 69 },
    { month: 'Aug', volume: 478, sentiment: 72 },
    { month: 'Sep', volume: 495, sentiment: 73 },
    { month: 'Oct', volume: 512, sentiment: 71 },
    { month: 'Nov', volume: 530, sentiment: 74 },
    { month: 'Dec', volume: 545, sentiment: 76 },
  ]

  // Popular search terms
  const popularSearches = [
    { term: 'UAE jobs for Indians', trend: 95 },
    { term: 'Bollywood movies UAE', trend: 88 },
    { term: 'Indian embassy Dubai', trend: 82 },
    { term: 'Dubai gold rate today', trend: 79 },
    { term: 'Indian restaurants Dubai', trend: 75 },
    { term: 'IPL 2025 schedule', trend: 92 },
    { term: 'Indian festivals UAE', trend: 85 },
    { term: 'NRI investment UAE', trend: 72 },
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
          <Badge variant="denim" className="mb-2">L-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Hindi Language Media</h1>
          <p className="mt-2 text-slate-400">
            Hindi-language content monitoring and analysis in the UAE
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
          title="Hindi Speakers in UAE"
          value={(hindiSpeakers / 1000000).toFixed(1) + 'M'}
          previousValue={1.6}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Monthly Content Volume"
          value={(contentVolume / 1000000).toFixed(1) + 'M'}
          previousValue={3.8}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentimentScore + '%'}
          previousValue={sentimentScore - 3}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Active Hashtags"
          value={topHashtags.toLocaleString()}
          previousValue={topHashtags - 120}
          icon={<Hash className="h-6 w-6" />}
          gradient="indigo"
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
          <GlassPanel title="Hindi Media Landscape" description="Hindi content monitoring across UAE platforms">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Distribution</CardTitle>
                    <CardDescription>Hindi content by platform</CardDescription>
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
                  <CardTitle className="text-lg">Popular Hindi Searches</CardTitle>
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
          <GlassPanel title="Platform-Specific Analysis" description="Hindi content breakdown by platform">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Volume by Platform</CardTitle>
                  <CardDescription>Monthly Hindi content in thousands</CardDescription>
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
                          <p className="text-sm text-slate-400">of Hindi content</p>
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
          <GlassPanel title="Hindi Content Sentiment Analysis" description="Sentiment patterns in Hindi-language media">
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
                  <CardDescription>Volume and sentiment by category</CardDescription>
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
          <GlassPanel title="Key Hindi Influencers" description="Top Hindi-language voices in UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Hindi Influencers in UAE</CardTitle>
                  <CardDescription>Most influential Hindi content creators</CardDescription>
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
