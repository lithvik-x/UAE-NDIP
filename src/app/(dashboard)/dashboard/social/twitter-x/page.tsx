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
  Hash,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  MessageSquare,
  Repeat2,
  Heart,
  BarChart3,
  Bot,
  Flag,
  CheckCircle,
  Eye,
  Lock,
  Unlock,
  TrendingDown,
  AtSign,
  Bell,
} from 'lucide-react'
import {
  useTwitterIntelligenceData,
} from '@/lib/data-loader'

export default function TwitterXAnalysisPage() {
  const { data } = useTwitterIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Twitter/X data...</div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts } = data

  // Twitter specific metrics
  const uaeTwitterStats = [
    { label: 'Active Users', value: '9.38M', icon: Users, color: CHART_COLORS.platinum },
    { label: 'Penetration', value: '99%', icon: Globe, color: CHART_COLORS.navy },
    { label: 'Bot Activity', value: '91%', icon: Bot, color: CHART_COLORS.rose },
    { label: 'Gov Requests', value: '1,247', icon: Flag, color: CHART_COLORS.gold },
    { label: 'Content Removed', value: '8,934', icon: Lock, color: CHART_COLORS.rose },
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
    { name: 'Retweets', value: metrics.engagement.avgRetweets, color: CHART_COLORS.cyan },
    { name: 'Replies', value: metrics.engagement.avgReplies, color: CHART_COLORS.gold },
  ]

  // Monthly activity trend (simulated)
  const monthlyTrend = [
    { month: 'Jan', tweets: 2.1, engagement: 68 },
    { month: 'Feb', tweets: 2.3, engagement: 72 },
    { month: 'Mar', tweets: 2.8, engagement: 75 },
    { month: 'Apr', tweets: 3.2, engagement: 78 },
    { month: 'May', tweets: 2.9, engagement: 71 },
    { month: 'Jun', tweets: 3.1, engagement: 74 },
    { month: 'Jul', tweets: 2.7, engagement: 69 },
    { month: 'Aug', tweets: 3.4, engagement: 82 },
    { month: 'Sep', tweets: 3.8, engagement: 85 },
    { month: 'Oct', tweets: 4.1, engagement: 88 },
    { month: 'Nov', tweets: 3.9, engagement: 84 },
    { month: 'Dec', tweets: 4.2, engagement: 91 },
  ]

  // CIB indicators
  const cibIndicators = [
    'Automated posting patterns',
    'Coordinated sharing of MBZ content',
    'Fake account networks',
    'Amplified government narratives',
    'Coordinated hashtag campaigns',
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">PLATFORM ANALYSIS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Twitter/X Analysis</h1>
          <p className="mt-2 text-slate-400">
            Twitter/X intelligence: 91% bot activity, coordinated inauthentic behavior, censorship patterns
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <MessageSquare className="h-4 w-4" />
            View Feed
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {uaeTwitterStats.map((stat, idx) => (
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
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="censorship">Censorship</TabsTrigger>
          <TabsTrigger value="bot-activity">Bot Activity</TabsTrigger>
          <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Twitter/X UAE Overview" description="Platform metrics and sentiment analysis">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">User Metrics</CardTitle>
                  <CardDescription>UAE Twitter/X audience breakdown</CardDescription>
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

              <div className="grid gap-6 lg:grid-cols-2">
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

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Breakdown</CardTitle>
                    <CardDescription>Detailed sentiment percentages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sentimentData.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                              <span className="text-sm font-medium text-slate-200">{item.name}</span>
                            </div>
                            <span className="text-lg font-bold text-slate-200">{item.value}%</span>
                          </div>
                          <Progress value={item.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trending Hashtags</CardTitle>
                  <CardDescription>Most used hashtags in UAE Twitter/X</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {metrics.engagement.trendingHashtags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-platinum border-platinum/50 px-3 py-1">
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

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <GlassPanel title="Engagement Analysis" description="Twitter/X engagement metrics and trends">
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
                    bars={[{ dataKey: 'value', name: 'Avg per Post', color: CHART_COLORS.platinum }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Activity Trend</CardTitle>
                  <CardDescription>Tweet volume and engagement over time (millions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={monthlyTrend}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'tweets', name: 'Tweets (M)', color: CHART_COLORS.platinum },
                      { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Government Accounts</CardTitle>
                    <CardDescription>Official UAE government presence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {governmentAccounts.map((account, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                            <div>
                              <span className="text-sm font-medium text-slate-200">{account.handle}</span>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">{account.type}</Badge>
                                {account.verified && (
                                  <Badge variant="success" className="text-xs">Verified</Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-gold">{account.followers.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Concerns</CardTitle>
                    <CardDescription>Issues flagged by UAE Twitter users</CardDescription>
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
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Censorship Tab */}
        <TabsContent value="censorship" className="space-y-6">
          <GlassPanel title="Censorship & Content Control" description="Twitter/X content moderation in UAE">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Censorship Level</CardTitle>
                    <CardDescription>{data.censorship.level === 'significant' ? 'Significant' : data.censorship.level} censorship detected</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Compliance Rate</span>
                        <span className="text-xl font-bold text-gold">{data.censorship.complianceRate}%</span>
                      </div>
                      <Progress value={data.censorship.complianceRate} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Government Requests</CardTitle>
                    <CardDescription>Content removal requests from UAE government</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
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
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Censorship Notes</CardTitle>
                  <CardDescription>Analysis of content control patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">{data.censorship.notes}</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Removal Trends</CardTitle>
                  <CardDescription>Monthly content removal statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={monthlyTrend.map((m, i) => ({
                      month: m.month,
                      removed: Math.round(700 + Math.random() * 300 + i * 50),
                    }))}
                    xAxisKey="month"
                    bars={[{ dataKey: 'removed', name: 'Content Removed', color: CHART_COLORS.rose }]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Bot Activity Tab */}
        <TabsContent value="bot-activity" className="space-y-6">
          <GlassPanel title="Bot Activity & Inauthentic Behavior" description="91% bot activity - highest of all platforms">
            <div className="space-y-6">
              <Card className="glass-card border-rose-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Critical: 91% Bot Activity
                  </CardTitle>
                  <CardDescription>Highest bot percentage of all monitored platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Estimated Bot Percentage</span>
                      <span className="text-2xl font-bold text-rose-400">{metrics.botActivity.estimatedBotPercent}%</span>
                    </div>
                    <Progress value={metrics.botActivity.estimatedBotPercent} className="h-3" />
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-slate-300">Coordinated Inauthentic Behavior</span>
                      <Badge variant="destructive">Detected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Confidence Level</span>
                      <span className="text-lg font-bold text-gold">{Math.round(metrics.botActivity.confidence * 100)}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Coordinated Inauthentic Behavior Indicators</CardTitle>
                  <CardDescription>Detected patterns of automated/coordinated activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {cibIndicators.map((indicator, idx) => (
                        <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-4">
                          <Bot className="h-5 w-5 text-platinum" />
                          <span className="text-sm text-slate-200">{indicator}</span>
                          <Badge variant="destructive" className="ml-auto">Active</Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Bot vs Real Activity</CardTitle>
                  <CardDescription>Estimated distribution of authentic vs bot activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={[
                      { name: 'Bot Activity', value: metrics.botActivity.estimatedBotPercent, color: CHART_COLORS.rose },
                      { name: 'Real Users', value: 100 - metrics.botActivity.estimatedBotPercent, color: CHART_COLORS.emerald },
                    ]}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Key Narratives" description="Dominant narratives on UAE Twitter/X">
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
