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
  Camera,
  Globe,
  Heart,
  MessageCircle,
  MessageSquare,
  Share2,
  Shield,
  ThumbsUp,
  TrendingUp,
  Users,
  Video,
} from 'lucide-react'
import {
  useTwitterIntelligenceData,
  useInstagramIntelligenceData,
  useTiktokIntelligenceData,
} from '@/lib/data-loader'

export default function SocialMediaMonitoringPage() {
  // UAE Social media metrics
  const totalMentions = 2847593
  const sentiment = 72
  const influencers = 1247
  const criticalPosts = 89

  // Platform distribution data
  const platformData = [
    { name: 'Twitter/X', value: 38, color: CHART_COLORS.navy },
    { name: 'Instagram', value: 27, color: CHART_COLORS.rose },
    { name: 'TikTok', value: 18, color: CHART_COLORS.cyan },
    { name: 'LinkedIn', value: 10, color: CHART_COLORS.indigo },
    { name: 'Facebook', value: 7, color: CHART_COLORS.blue },
  ]

  // Sentiment trend data
  const sentimentTrendData = [
    { day: 'Mon', positive: 45, neutral: 38, negative: 17 },
    { day: 'Tue', positive: 48, neutral: 35, negative: 17 },
    { day: 'Wed', positive: 52, neutral: 33, negative: 15 },
    { day: 'Thu', positive: 49, neutral: 36, negative: 15 },
    { day: 'Fri', positive: 55, neutral: 32, negative: 13 },
    { day: 'Sat', positive: 58, neutral: 30, negative: 12 },
    { day: 'Sun', positive: 61, neutral: 28, negative: 11 },
  ]

  // Topic distribution data
  const topicData = [
    { name: 'Government', value: 28, color: CHART_COLORS.gold },
    { name: 'Economy', value: 24, color: CHART_COLORS.navy },
    { name: 'Tourism', value: 18, color: CHART_COLORS.platinum },
    { name: 'Culture', value: 15, color: CHART_COLORS.emerald },
    { name: 'Sports', value: 10, color: CHART_COLORS.rose },
    { name: 'Other', value: 5, color: CHART_COLORS.slate },
  ]

  // Top trending hashtags
  const trendingHashtags = [
    { hashtag: '#UAE', posts: 245678, sentiment: 78 },
    { hashtag: '#Dubai', posts: 198234, sentiment: 82 },
    { hashtag: '#UAEFuture', posts: 156789, sentiment: 85 },
    { hashtag: '#AbuDhabi', posts: 134567, sentiment: 80 },
    { hashtag: '#UAENationalDay', posts: 98765, sentiment: 92 },
    { hashtag: '#UAE_Economy', posts: 87654, sentiment: 74 },
  ]

  // Top influencers
  const topInfluencers = [
    { name: 'Ahmed Alnaqbi', handle: '@ahmeduae', followers: 2.3, platform: 'Twitter', sentiment: 78 },
    { name: 'Fatima Almarri', handle: '@fatima_media', followers: 1.8, platform: 'Instagram', sentiment: 82 },
    { name: 'Khalid bin Rashid', handle: '@kbr_dxb', followers: 890, platform: 'Twitter', sentiment: 85 },
    { name: 'Mariam Alkaabi', handle: '@mariamae', followers: 650, platform: 'TikTok', sentiment: 71 },
    { name: 'Omar Alhammadi', handle: '@omardxb', followers: 420, platform: 'LinkedIn', sentiment: 79 },
  ]

  // Critical posts requiring attention
  const criticalPostsData = [
    { id: 1, content: 'Claims about UAE economic instability spreading on Twitter', platform: 'Twitter', sentiment: 23, engagement: 12457, time: '1 hr ago' },
    { id: 2, content: 'Misinformation about Dubai real estate regulations', platform: 'TikTok', sentiment: 31, engagement: 23456, time: '2 hr ago' },
    { id: 3, content: 'Regional security concerns amplified by foreign accounts', platform: 'Twitter', sentiment: 18, engagement: 34567, time: '3 hr ago' },
    { id: 4, content: 'Positive coverage of UAE sustainability initiatives', platform: 'Instagram', sentiment: 89, engagement: 56789, time: '4 hr ago' },
  ]

  // Engagement metrics by platform
  const engagementData = [
    { name: 'Twitter/X', likes: 2.3, shares: 0.8, comments: 0.4 },
    { name: 'Instagram', likes: 4.5, shares: 0.2, comments: 0.6 },
    { name: 'TikTok', likes: 8.2, shares: 1.5, comments: 1.2 },
    { name: 'LinkedIn', likes: 1.1, shares: 0.6, comments: 0.3 },
    { name: 'Facebook', likes: 0.9, shares: 0.4, comments: 0.2 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">M-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Social Media Monitoring</h1>
          <p className="mt-2 text-slate-400">
            Real-time tracking of social platforms, influencers, and public sentiment
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Globe className="h-4 w-4" />
            Social Feed
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Sentiment Guard
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Mentions"
          value={totalMentions}
          previousValue={totalMentions - 234567}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="gold"
          status="info"
          formatter={(v) => v.toLocaleString()}
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment}
          previousValue={sentiment - 3}
          icon={<Heart className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Tracked Influencers"
          value={influencers}
          previousValue={influencers - 47}
          icon={<Users className="h-6 w-6" />}
          gradient="navy"
          status="info"
        />
        <MetricCard
          title="Critical Posts"
          value={criticalPosts}
          previousValue={criticalPosts + 12}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="influencers">Influencers</TabsTrigger>
          <TabsTrigger value="critical">Critical Content</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Social Media Overview" description="Aggregated social media intelligence across all platforms">
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
                    <CardTitle className="text-lg">Sentiment Trend</CardTitle>
                    <CardDescription>7-day sentiment trajectory</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={sentimentTrendData}
                      xAxisKey="day"
                      areas={[
                        { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                        { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.platinum },
                        { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Topic Distribution</CardTitle>
                  <CardDescription>Most discussed topics in UAE-related content</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={topicData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.gold },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trending Hashtags</CardTitle>
                  <CardDescription>Most used hashtags related to UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {trendingHashtags.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-gold">#{idx + 1}</span>
                            <span className="text-sm font-medium text-slate-200">{item.hashtag}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-slate-400">{item.posts.toLocaleString()} posts</span>
                            <Badge variant={item.sentiment > 75 ? "success" : "warning"} className="text-xs">
                              {item.sentiment}%
                            </Badge>
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
          <GlassPanel title="Platform Analysis" description="Deep dive into each social platform">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement by Platform</CardTitle>
                  <CardDescription>Average engagement metrics (millions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={engagementData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'likes', name: 'Likes', color: CHART_COLORS.rose },
                      { dataKey: 'shares', name: 'Shares', color: CHART_COLORS.navy },
                      { dataKey: 'comments', name: 'Comments', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Twitter/X Metrics</CardTitle>
                    <CardDescription>Key Twitter intelligence indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-400">Total Tweets</span>
                        <span className="text-lg font-bold text-slate-200">1.2M</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-400">Avg Sentiment</span>
                        <span className="text-lg font-bold text-emerald-400">72%</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-400">Verified Accounts</span>
                        <span className="text-lg font-bold text-gold">8,432</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-400">Bot Probability {'>'}70%</span>
                        <span className="text-lg font-bold text-rose">1,247</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">TikTok Metrics</CardTitle>
                    <CardDescription>Short-form video platform analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-400">Videos Tagged UAE</span>
                        <span className="text-lg font-bold text-slate-200">2.8M</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-400">Total Views</span>
                        <span className="text-lg font-bold text-slate-200">45B</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-400">Avg Sentiment</span>
                        <span className="text-lg font-bold text-emerald-400">78%</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-400">Potential Misinfo</span>
                        <span className="text-lg font-bold text-orange-400">342</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Influencers Tab */}
        <TabsContent value="influencers" className="space-y-6">
          <GlassPanel title="Influencer Intelligence" description="Tracking key voices and opinion makers">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Influencers</CardTitle>
                  <CardDescription>Most influential accounts tracking UAE topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px]">
                    <div className="space-y-3">
                      {topInfluencers.map((inf, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Users className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{inf.name}</p>
                              <p className="text-sm text-slate-400">{inf.handle} · {inf.platform}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-slate-200">{inf.followers}K</div>
                              <p className="text-xs text-slate-400">Followers</p>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${inf.sentiment > 75 ? 'text-emerald-400' : 'text-orange-400'}`}>
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

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Influencer Tier Distribution</CardTitle>
                  <CardDescription>Classification by follower count</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">23</div>
                      <p className="text-sm text-slate-400">Mega (1M+)</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-navy">87</div>
                      <p className="text-sm text-slate-400">Macro (100K-1M)</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-platinum">312</div>
                      <p className="text-sm text-slate-400">Mid (10K-100K)</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald">425</div>
                      <p className="text-sm text-slate-400">Micro ({'<10K'})</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Critical Content Tab */}
        <TabsContent value="critical" className="space-y-6">
          <GlassPanel title="Critical Content" description="Posts requiring immediate attention or response">
            <div className="space-y-6">
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Critical Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px]">
                    <div className="space-y-3">
                      {criticalPostsData.map((post) => (
                        <div key={post.id} className="flex items-start justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{post.content}</p>
                            <p className="text-sm text-slate-400 mt-1">Platform: {post.platform} · {post.engagement.toLocaleString()} engagements</p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <Badge variant={post.sentiment > 50 ? "success" : "destructive"} className="text-xs">
                              {post.sentiment}% Sentiment
                            </Badge>
                            <span className="text-xs text-slate-400">{post.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                  <CardDescription>Overall sentiment breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={[
                      { name: 'Positive', value: 61, color: CHART_COLORS.emerald },
                      { name: 'Neutral', value: 28, color: CHART_COLORS.platinum },
                      { name: 'Negative', value: 11, color: CHART_COLORS.rose },
                    ]}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
