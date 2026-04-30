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
  Plane,
} from 'lucide-react'
import {
  useLanguageOverviewData,
} from '@/lib/data-loader'

export default function TagalogLanguagePage() {
  const { data } = useLanguageOverviewData()

  // Filipino/Tagalog-speaking population in UAE
  const tagalogSpeakers = 850000
  const contentVolume = 1800000
  const sentimentScore = 75
  const remittanceVolume = 450000000

  // Platform distribution for Tagalog
  const platformDistribution = [
    { platform: 'Facebook', percentage: 38, speakers: 323000, color: CHART_COLORS.blue },
    { platform: 'YouTube', percentage: 25, speakers: 212500, color: CHART_COLORS.danger },
    { platform: 'WhatsApp', percentage: 20, speakers: 170000, color: CHART_COLORS.emerald },
    { platform: 'TikTok', percentage: 10, speakers: 85000, color: CHART_COLORS.rose },
    { platform: 'Instagram', percentage: 5, speakers: 42500, color: CHART_COLORS.pink },
    { platform: 'Twitter/X', percentage: 2, speakers: 17000, color: CHART_COLORS.navy },
  ]

  // Content categories in Tagalog
  const contentCategories = [
    { category: 'Family/Life Updates', volume: 540000, sentiment: 88, trend: 'up' },
    { category: 'OFW Experiences', volume: 360000, sentiment: 82, trend: 'stable' },
    { category: 'Remittance/Finance', volume: 270000, sentiment: 72, trend: 'up' },
    { category: 'Entertainment', volume: 252000, sentiment: 78, trend: 'down' },
    { category: 'Healthcare', volume: 180000, sentiment: 68, trend: 'stable' },
    { category: 'Jobs/Work', volume: 198000, sentiment: 65, trend: 'up' },
  ]

  // Sentiment by topic
  const topicSentiment = [
    { topic: 'Family Life', sentiment: 88, volume: 320000 },
    { topic: 'OFW Community', sentiment: 85, volume: 280000 },
    { topic: 'Remittance Tips', sentiment: 78, volume: 195000 },
    { topic: 'Healthcare UAE', sentiment: 72, volume: 145000 },
    { topic: 'Job Opportunities', sentiment: 68, volume: 178000 },
    { topic: 'Filipino Events', sentiment: 82, volume: 165000 },
  ]

  // Key influencers
  const keyInfluencers = [
    { name: 'OFW Dubai Community', handle: '@ofwdubai', followers: 567000, sentiment: 88 },
    { name: 'Filipino Life UAE', handle: '@filipinolifeuae', followers: 345000, sentiment: 85 },
    { name: 'Pinoy Business Network', handle: '@pinoybizdxb', followers: 234000, sentiment: 76 },
    { name: 'Filipino Foodie UAE', handle: '@pinoyfooduae', followers: 189000, sentiment: 82 },
    { name: 'OFW Advice Philippines', handle: '@ofwadvice', followers: 156000, sentiment: 78 },
  ]

  // Monthly trend
  const monthlyTrend = [
    { month: 'Jan', volume: 135, sentiment: 72 },
    { month: 'Feb', volume: 142, sentiment: 73 },
    { month: 'Mar', volume: 148, sentiment: 74 },
    { month: 'Apr', volume: 155, sentiment: 73 },
    { month: 'May', volume: 162, sentiment: 75 },
    { month: 'Jun', volume: 168, sentiment: 76 },
    { month: 'Jul', volume: 172, sentiment: 74 },
    { month: 'Aug', volume: 178, sentiment: 77 },
    { month: 'Sep', volume: 185, sentiment: 78 },
    { month: 'Oct', volume: 192, sentiment: 76 },
    { month: 'Nov', volume: 198, sentiment: 79 },
    { month: 'Dec', volume: 205, sentiment: 80 },
  ]

  // Popular search terms
  const popularSearches = [
    { term: 'OFW jobs Dubai 2025', trend: 95 },
    { term: 'Remittance to Philippines', trend: 92 },
    { term: 'Filipino embassy Abu Dhabi', trend: 88 },
    { term: 'Pinoy restaurants Dubai', trend: 85 },
    { term: 'Healthcare UAE Filipino', trend: 82 },
    { term: 'Filipino community events', trend: 78 },
    { term: 'Dubai salary for nurses', trend: 85 },
    { term: 'Bayanihan UAE', trend: 75 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">L-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Filipino/Tagalog Media</h1>
          <p className="mt-2 text-slate-400">
            Filipino-language content monitoring and analysis in the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Search className="h-4 w-4" />
            Search
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Languages className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Filipino Speakers in UAE"
          value={(tagalogSpeakers / 1000000).toFixed(1) + 'M'}
          previousValue={0.78}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Monthly Content Volume"
          value={(contentVolume / 1000000).toFixed(1) + 'M'}
          previousValue={1.5}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentimentScore + '%'}
          previousValue={sentimentScore - 2}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Monthly Remittances"
          value='$450M'
          previousValue={420}
          icon={<Plane className="h-6 w-6" />}
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
          <GlassPanel title="Filipino Media Landscape" description="Tagalog content monitoring across UAE platforms">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Distribution</CardTitle>
                    <CardDescription>Filipino content by platform</CardDescription>
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
                        { dataKey: 'volume', name: 'Volume', color: CHART_COLORS.gold },
                        { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Popular Filipino Searches</CardTitle>
                  <CardDescription>Most common search terms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {popularSearches.map((search, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Hash className="h-4 w-4 text-gold" />
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
          <GlassPanel title="Platform-Specific Analysis" description="Filipino content breakdown by platform">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Volume by Platform</CardTitle>
                  <CardDescription>Monthly Filipino content share</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={platformDistribution}
                    xAxisKey="platform"
                    bars={[
                      { dataKey: 'percentage', name: 'Share %', color: CHART_COLORS.gold },
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
                          <p className="text-sm text-slate-400">of Filipino content</p>
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
          <GlassPanel title="Filipino Content Sentiment Analysis" description="Sentiment patterns in Filipino-language media">
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
                                topic.sentiment >= 80 ? 'text-emerald-400' :
                                topic.sentiment >= 60 ? 'text-yellow-400' :
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
                      { dataKey: 'volume', name: 'Volume', color: CHART_COLORS.gold },
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
          <GlassPanel title="Key Filipino Influencers" description="Top Filipino-language voices in UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Filipino Influencers in UAE</CardTitle>
                  <CardDescription>Most influential Filipino content creators</CardDescription>
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
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
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
