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
  Hash,
  TrendingUp,
  Clock,
  Eye,
  MessageSquare,
  Star,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import {
  useTwitterIntelligenceData,
  useInstagramIntelligenceData,
} from '@/lib/data-loader'

export default function HashtagsPage() {
  const twitterData = useTwitterIntelligenceData()
  const instagramData = useInstagramIntelligenceData()

  if (!twitterData.data && !instagramData.data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-500-400">Loading hashtag intelligence data...</div>
      </div>
    )
  }

  // Trending hashtags data
  const trendingHashtags = [
    {
      rank: 1,
      hashtag: '#Dubai',
      tweets: 2450000,
      change: 15.2,
      sentiment: 78,
      category: 'Location',
      platforms: ['Twitter', 'Instagram', 'TikTok'],
    },
    {
      rank: 2,
      hashtag: '#UAE',
      tweets: 2180000,
      change: 12.8,
      sentiment: 82,
      category: 'Nation Brand',
      platforms: ['Twitter', 'Instagram', 'Facebook'],
    },
    {
      rank: 3,
      hashtag: '#COP28',
      tweets: 1850000,
      change: -8.5,
      sentiment: 65,
      category: 'Event',
      platforms: ['Twitter', 'YouTube'],
    },
    {
      rank: 4,
      hashtag: '#AbuDhabi',
      tweets: 1420000,
      change: 18.3,
      sentiment: 85,
      category: 'Location',
      platforms: ['Instagram', 'Twitter'],
    },
    {
      rank: 5,
      hashtag: '#GITEX',
      tweets: 985000,
      change: 22.1,
      sentiment: 74,
      category: 'Technology',
      platforms: ['Twitter', 'LinkedIn'],
    },
    {
      rank: 6,
      hashtag: '#DubaiLife',
      tweets: 890000,
      change: 8.7,
      sentiment: 91,
      category: 'Lifestyle',
      platforms: ['Instagram', 'TikTok'],
    },
    {
      rank: 7,
      hashtag: '#UAEBusiness',
      tweets: 765000,
      change: 5.4,
      sentiment: 79,
      category: 'Business',
      platforms: ['Twitter', 'LinkedIn'],
    },
    {
      rank: 8,
      hashtag: '#UAEInfluencer',
      tweets: 654000,
      change: -2.1,
      sentiment: 68,
      category: 'Social',
      platforms: ['Instagram', 'TikTok'],
    },
    {
      rank: 9,
      hashtag: '#VisitDubai',
      tweets: 598000,
      change: 28.5,
      sentiment: 94,
      category: 'Tourism',
      platforms: ['Instagram', 'TikTok', 'YouTube'],
    },
    {
      rank: 10,
      hashtag: '#UAETech',
      tweets: 487000,
      change: 35.2,
      sentiment: 72,
      category: 'Technology',
      platforms: ['Twitter', 'LinkedIn'],
    },
  ]

  // Hashtag category distribution
  const categoryData = [
    { category: 'Location/Place', value: 32, color: CHART_COLORS.gold },
    { category: 'Nation Brand', value: 24, color: CHART_COLORS.navy },
    { category: 'Tourism', value: 18, color: CHART_COLORS.platinum },
    { category: 'Business/Economy', value: 12, color: CHART_COLORS.emerald },
    { category: 'Technology', value: 8, color: CHART_COLORS.rose },
    { category: 'Events', value: 6, color: CHART_COLORS.info },
  ]

  // Platform hashtag usage
  const platformHashtagData = [
    { platform: 'Twitter', hashtags: 45000, avgUse: 12.5, color: CHART_COLORS.gold },
    { platform: 'Instagram', hashtags: 78000, avgUse: 8.3, color: CHART_COLORS.rose },
    { platform: 'TikTok', hashtags: 32000, avgUse: 5.2, color: CHART_COLORS.navy },
    { platform: 'Facebook', hashtags: 18000, avgUse: 3.8, color: CHART_COLORS.platinum },
  ]

  // 30-day trend data
  const monthlyTrendData = [
    { day: '1', volume: 850, trending: 72 },
    { day: '5', volume: 920, trending: 75 },
    { day: '10', volume: 880, trending: 70 },
    { day: '15', volume: 1050, trending: 78 },
    { day: '20', volume: 1120, trending: 82 },
    { day: '25', volume: 1180, trending: 85 },
    { day: '30', volume: 1250, trending: 88 },
  ]

  // Sentiment by category
  const sentimentByCategory = [
    { category: 'Tourism', positive: 89, neutral: 8, negative: 3 },
    { category: 'Business', positive: 75, neutral: 15, negative: 10 },
    { category: 'Technology', positive: 68, neutral: 20, negative: 12 },
    { category: 'Events', positive: 65, neutral: 22, negative: 13 },
    { category: 'Politics', positive: 42, neutral: 28, negative: 30 },
    { category: 'Social', positive: 58, neutral: 25, negative: 17 },
  ]

  const getTrendIcon = (change: number) => {
    if (change > 0) {
      return <ArrowUpRight className="h-4 w-4 text-emerald-500" />
    } else if (change < 0) {
      return <ArrowDownRight className="h-4 w-4 text-rose-500" />
    }
    return null
  }

  const getSentimentColor = (sentiment: number) => {
    if (sentiment >= 80) return 'text-emerald-500'
    if (sentiment >= 60) return 'text-gold-700'
    if (sentiment >= 40) return 'text-platinum-500'
    return 'text-rose-500'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="denim" className="mb-2">TREND INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy-500">Trending Hashtags & Topics</h1>
          <p className="mt-2 text-platinum-500-400">
            Real-time hashtag tracking — trending topics, sentiment analysis, and platform distribution
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy-500 hover:bg-navy/10">
            <Clock className="h-4 w-4" />
            Historical
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Hash className="h-4 w-4" />
            Track Hashtag
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Hashtags"
          value="156K"
          previousValue={148000}
          icon={<Hash className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Daily Uses"
          value="2.4M"
          previousValue={2.2}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Avg Sentiment"
          value="76%"
          icon={<Star className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Trending Now"
          value="18"
          previousValue={15}
          icon={<Eye className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
      </div>

      <Tabs defaultValue="trending" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Trending Tab */}
        <TabsContent value="trending" className="space-y-6">
          <GlassPanel title="Top Trending Hashtags" description="Most used hashtags in UAE across all platforms">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">30-Day Hashtag Volume</CardTitle>
                  <CardDescription>Total hashtag usage trend</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={monthlyTrendData}
                    xAxisKey="day"
                    areas={[
                      { dataKey: 'volume', name: 'Volume (K)', color: CHART_COLORS.navy },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top 10 Trending Hashtags</CardTitle>
                  <CardDescription>Ranked by current volume and growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-2">
                      {trendingHashtags.map((hashtag) => (
                        <div
                          key={hashtag.rank}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy-500 text-sm font-bold">
                              #{hashtag.rank}
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-500-200 text-lg">{hashtag.hashtag}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {hashtag.category}
                                </Badge>
                                {hashtag.platforms.map((platform) => (
                                  <Badge key={platform} variant="outline" className="text-xs text-platinum-500-400">
                                    {platform}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <p className="text-sm text-platinum-500-400">Tweets</p>
                              <p className="font-bold text-platinum-500-200">{(hashtag.tweets / 1000000).toFixed(2)}M</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-platinum-500-400">Change</p>
                              <div className="flex items-center gap-1 justify-center">
                                {getTrendIcon(hashtag.change)}
                                <span className={`font-bold ${hashtag.change > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                  {Math.abs(hashtag.change)}%
                                </span>
                              </div>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-platinum-500-400">Sentiment</p>
                              <p className={`font-bold ${getSentimentColor(hashtag.sentiment)}`}>
                                {hashtag.sentiment}%
                              </p>
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

        {/* Analysis Tab */}
        <TabsContent value="analysis" className="space-y-6">
          <GlassPanel title="Hashtag Analysis" description="Category and topic breakdown">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Category Distribution</CardTitle>
                  <CardDescription>Hashtag usage by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={categoryData}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Location Hashtags</CardTitle>
                    <CardDescription>Geographic tagging trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {[
                          { hashtag: '#Dubai', uses: 2450000, growth: 15.2 },
                          { hashtag: '#AbuDhabi', uses: 1420000, growth: 18.3 },
                          { hashtag: '#Sharjah', uses: 450000, growth: 5.8 },
                          { hashtag: '#Ajman', uses: 180000, growth: 3.2 },
                          { hashtag: '#RAK', uses: 165000, growth: 8.7 },
                          { hashtag: '#Fujairah', uses: 95000, growth: 2.1 },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Hash className="h-4 w-4 text-navy-500" />
                              <span className="text-sm font-medium text-platinum-500-200">{item.hashtag}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-platinum-500-400">{(item.uses / 1000000).toFixed(1)}M</span>
                              <span className={`text-sm font-medium ${item.growth > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                +{item.growth}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Nation Brand Hashtags</CardTitle>
                    <CardDescription>UAE branding campaign tags</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {[
                          { hashtag: '#UAE', uses: 2180000 },
                          { hashtag: '#UAETogether', uses: 890000 },
                          { hashtag: '#UAEFuture', uses: 654000 },
                          { hashtag: '#UAEPride', uses: 432000 },
                          { hashtag: '#UAENationBrand', uses: 298000 },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Star className="h-4 w-4 text-gold-700" />
                              <span className="text-sm font-medium text-platinum-500-200">{item.hashtag}</span>
                            </div>
                            <span className="text-sm font-medium text-gold-700">{(item.uses / 1000000).toFixed(2)}M</span>
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
          <GlassPanel title="Platform Distribution" description="Hashtag usage across social platforms">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Hashtags by Platform</CardTitle>
                  <CardDescription>Unique hashtags and average usage per platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={platformHashtagData}
                    xAxisKey="platform"
                    bars={[
                      { dataKey: 'hashtags', name: 'Unique Hashtags (K)', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Characteristics</CardTitle>
                    <CardDescription>Hashtag behavior by platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {platformHashtagData.map((platform, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-500-200">{platform.platform}</span>
                            <span className="text-sm text-platinum-500-400">Avg {platform.avgUse} tags/post</span>
                          </div>
                          <Progress value={(platform.hashtags / 78000) * 100} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Cross-Platform Hashtags</CardTitle>
                    <CardDescription>Hashtags used on multiple platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {[
                          { hashtag: '#Dubai', platforms: 5, volume: 2450000 },
                          { hashtag: '#UAE', platforms: 5, volume: 2180000 },
                          { hashtag: '#AbuDhabi', platforms: 4, volume: 1420000 },
                          { hashtag: '#DubaiLife', platforms: 4, volume: 890000 },
                          { hashtag: '#VisitDubai', platforms: 4, volume: 598000 },
                          { hashtag: '#GITEX', platforms: 3, volume: 985000 },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Hash className="h-4 w-4 text-gold-700" />
                              <span className="text-sm font-medium text-platinum-500-200">{item.hashtag}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge variant="outline" className="text-xs">{item.platforms} platforms</Badge>
                              <span className="text-sm text-platinum-500-400">{(item.volume / 1000000).toFixed(1)}M</span>
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

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis" description="Hashtag sentiment by category">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Category</CardTitle>
                  <CardDescription>Positive/Neutral/Negative breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sentimentByCategory}
                    xAxisKey="category"
                    bars={[
                      { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                      { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.platinum },
                      { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Score Legend</CardTitle>
                  <CardDescription>Classification thresholds</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="flex items-center gap-3 rounded-lg bg-emerald-500/10 p-3 border border-emerald-500/30">
                      <div className="h-4 w-4 rounded-full bg-emerald" />
                      <div>
                        <p className="font-medium text-emerald-500">High Positive</p>
                        <p className="text-sm text-platinum-500-400">80-100%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-gold-500/10 p-3 border border-gold-500/30">
                      <div className="h-4 w-4 rounded-full bg-gold" />
                      <div>
                        <p className="font-medium text-gold-700">Moderate</p>
                        <p className="text-sm text-platinum-500-400">60-79%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-platinum-500/10 p-3 border border-platinum-500/30">
                      <div className="h-4 w-4 rounded-full bg-platinum" />
                      <div>
                        <p className="font-medium text-platinum-500">Neutral</p>
                        <p className="text-sm text-platinum-500-400">40-59%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-rose-500/10 p-3 border border-rose-500/30">
                      <div className="h-4 w-4 rounded-full bg-rose" />
                      <div>
                        <p className="font-medium text-rose-500">Concern</p>
                        <p className="text-sm text-platinum-500-400">0-39%</p>
                      </div>
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
