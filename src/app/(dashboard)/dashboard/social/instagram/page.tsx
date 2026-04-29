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
  AlertTriangle,
  Globe,
  Hash,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Heart,
  MessageSquare,
  Bookmark,
  Share2,
  User,
  Camera,
  Star,
  CheckCircle,
  Flag,
  Eye,
  Lock,
  Image,
} from 'lucide-react'
import {
  useInstagramIntelligenceData,
} from '@/lib/data-loader'

export default function InstagramVisualPlatformsPage() {
  const { data } = useInstagramIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Instagram data...</div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts } = data

  // Instagram specific metrics
  const uaeInstagramStats = [
    { label: 'Active Users', value: '7.6M', icon: Users, color: CHART_COLORS.purple },
    { label: 'Penetration', value: '78%', icon: Globe, color: CHART_COLORS.navy },
    { label: 'Bot Activity', value: '38%', icon: Shield, color: CHART_COLORS.rose },
    { label: 'Gov Requests', value: '678', icon: Flag, color: CHART_COLORS.gold },
    { label: 'Influencers', value: '122K', icon: Star, color: CHART_COLORS.purple },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: metrics.sentiment.breakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics.sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.sentiment.breakdown.negative, color: CHART_COLORS.rose },
  ]

  // Engagement data
  const engagementData = [
    { name: 'Likes', value: metrics.engagement.avgLikes, color: CHART_COLORS.rose },
    { name: 'Comments', value: metrics.engagement.avgComments, color: CHART_COLORS.cyan },
    { name: 'Saves', value: metrics.engagement.avgSaves, color: CHART_COLORS.gold },
  ]

  // Content categories
  const contentCategories = [
    { name: 'Luxury Lifestyle', value: 45, color: CHART_COLORS.purple },
    { name: 'Tourism & Travel', value: 25, color: CHART_COLORS.gold },
    { name: 'Food & Dining', value: 15, color: CHART_COLORS.orange },
    { name: 'Fashion & Beauty', value: 10, color: CHART_COLORS.rose },
    { name: 'Business', value: 5, color: CHART_COLORS.cyan },
  ]

  // Top influencers (simulated)
  const topInfluencers = [
    { handle: '@dubai', followers: '5.8M', category: 'Government', verified: true },
    { handle: '@visitabudhabi', followers: '3.2M', category: 'Tourism', verified: true },
    { handle: '@uae', followers: '2.1M', category: 'Government', verified: true },
    { handle: '@dubaifashion', followers: '1.8M', category: 'Fashion', verified: false },
    { handle: '@uaefoodie', followers: '890K', category: 'Food', verified: false },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">VISUAL PLATFORMS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Instagram & Visual Platforms</h1>
          <p className="mt-2 text-slate-400">
            Instagram analysis: 7.6M users, influencer ecosystem, visual content censorship
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Image className="h-4 w-4" />
            View Content
          </Button>
          <Button className="bg-gradient-purple hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {uaeInstagramStats.map((stat, idx) => (
          <MetricCard
            key={idx}
            title={stat.label}
            value={stat.value}
            previousValue={stat.value}
            icon={<stat.icon className="h-6 w-6" />}
            gradient="navy"
          />
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="influencers">Influencers</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="censorship">Censorship</TabsTrigger>
          <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Instagram UAE Overview" description="Platform metrics and user demographics">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">User Metrics</CardTitle>
                    <CardDescription>UAE Instagram audience breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Total Users</span>
                        <span className="text-xl font-bold text-gold">{metrics.users.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Market Penetration</span>
                        <span className="text-xl font-bold text-gold">{metrics.penetration}%</span>
                      </div>
                      <Progress value={metrics.penetration} className="h-2" />
                      <div className="mt-4">
                        <p className="text-sm text-slate-400">{metrics.demographics}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Analysis</CardTitle>
                    <CardDescription>Overall: {metrics.sentiment.overall} (Score: {metrics.sentiment.score})</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={220}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Categories</CardTitle>
                  <CardDescription>Distribution of content types</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={contentCategories}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Share %', color: CHART_COLORS.purple }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trending Hashtags</CardTitle>
                  <CardDescription>Most used hashtags in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {metrics.engagement.trendingHashtags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-purple-400 border-purple-400/50 px-3 py-1">
                        <Hash className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Influencers Tab */}
        <TabsContent value="influencers" className="space-y-6">
          <GlassPanel title="Influencer Ecosystem" description="UAE Instagram influencer landscape">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top UAE Government Accounts</CardTitle>
                  <CardDescription>Official presence on Instagram</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {governmentAccounts.map((account, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                            <Camera className="h-5 w-5 text-purple-400" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-slate-200">{account.handle}</span>
                              {account.verified && (
                                <CheckCircle className="h-4 w-4 text-blue-400" />
                              )}
                            </div>
                            <Badge variant="outline" className="text-xs mt-1">{account.type}</Badge>
                          </div>
                        </div>
                        <span className="text-lg font-bold text-gold">{account.followers.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Notable Influencers</CardTitle>
                  <CardDescription>Leading UAE Instagram accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {topInfluencers.map((influencer, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20">
                              <User className="h-5 w-5 text-purple-400" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-slate-200">{influencer.handle}</span>
                                {influencer.verified && (
                                  <CheckCircle className="h-3 w-3 text-blue-400" />
                                )}
                              </div>
                              <Badge variant="outline" className="text-xs mt-1">{influencer.category}</Badge>
                            </div>
                          </div>
                          <span className="text-sm font-bold text-gold">{influencer.followers}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Concerns</CardTitle>
                  <CardDescription>Issues flagged on UAE Instagram</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {metrics.sentiment.keyConcerns.map((concern, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                        <AlertTriangle className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm text-slate-200">{concern}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <GlassPanel title="Engagement Analysis" description="Instagram engagement metrics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Average Engagement per Post</CardTitle>
                  <CardDescription>Engagement metrics for UAE accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={engagementData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Avg per Post', color: CHART_COLORS.purple }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Engagement Rate by Category</CardTitle>
                    <CardDescription>Average engagement percentage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={contentCategories.map(c => ({
                        name: c.name,
                        value: c.value,
                        color: c.color,
                      }))}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Bot Activity Impact</CardTitle>
                    <CardDescription>{metrics.botActivity.estimatedBotPercent}% estimated fake engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Fake Followers</span>
                        <Badge variant="warning">Detected</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Coordinated Safety Posts</span>
                        <Badge variant="warning">March 2026</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Engagement Pods</span>
                        <Badge variant="warning">Active</Badge>
                      </div>
                      <Progress value={metrics.botActivity.estimatedBotPercent} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Censorship Tab */}
        <TabsContent value="censorship" className="space-y-6">
          <GlassPanel title="Content Censorship" description="Instagram content moderation in UAE">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Censorship Metrics</CardTitle>
                    <CardDescription>Content control statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Compliance Rate</span>
                        <span className="text-xl font-bold text-gold">{data.censorship.complianceRate}%</span>
                      </div>
                      <Progress value={data.censorship.complianceRate} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Government Requests</span>
                        <span className="text-xl font-bold text-rose-400">{data.censorship.governmentRequests}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Content Removed</span>
                        <span className="text-xl font-bold text-rose-400">{data.censorship.contentRemoved.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Censorship Notes</CardTitle>
                    <CardDescription>Analysis of content control</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-300">{data.censorship.notes}</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Bot Activity Analysis</CardTitle>
                  <CardDescription>{metrics.botActivity.estimatedBotPercent}% estimated bot activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Coordinated Inauthentic</span>
                      <Badge variant={metrics.botActivity.coordinatedInauthentic ? 'warning' : 'success'}>
                        {metrics.botActivity.coordinatedInauthentic ? 'Detected' : 'None'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Confidence</span>
                      <span className="text-lg font-bold text-gold">{Math.round(metrics.botActivity.confidence * 100)}%</span>
                    </div>
                    <ScrollArea className="h-[120px] mt-4">
                      <div className="space-y-2">
                        {metrics.botActivity.indicators.map((indicator, idx) => (
                          <div key={idx} className="flex items-center gap-2 rounded-lg bg-slate-800/50 p-2">
                            <Flag className="h-3 w-3 text-platinum" />
                            <span className="text-xs text-slate-300">{indicator}</span>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Key Narratives" description="Dominant narratives on UAE Instagram">
            <div className="space-y-6">
              {keyNarratives.map((narrative, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{narrative.topic}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          narrative.sentiment === 'Positive' ? 'success' :
                          narrative.sentiment === 'Negative' ? 'destructive' : 'outline'
                        }>
                          {narrative.sentiment}
                        </Badge>
                        <Badge variant="outline" className="text-gold">
                          {narrative.prevalence}% prevalence
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-300 mb-4">{narrative.narrative}</p>
                    <div className="space-y-2">
                      <p className="text-xs text-slate-400 font-medium">Sources ({narrative.sources.length}):</p>
                      <div className="flex flex-wrap gap-2">
                        {narrative.sources.map((source, sIdx) => (
                          <Badge key={sIdx} variant="outline" className="text-xs">
                            {source}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Progress value={narrative.prevalence} className="mt-4 h-2" />
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
