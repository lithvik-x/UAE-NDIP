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
  Shield,
  TrendingUp,
  Users,
  Zap,
  MessageSquare,
  ArrowUpDown,
  AlertOctagon,
  ThumbsDown,
} from 'lucide-react'
import {
  useRedditIntelligenceData,
} from '@/lib/data-loader'

export default function RedditPage() {
  const { data } = useRedditIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Reddit intelligence data...</div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts } = data
  const { users, penetration, sentiment, engagement, botActivity, censorship } = metrics

  // Sentiment data for pie chart
  const sentimentData = sentiment?.breakdown ? [
    { name: 'Positive', value: sentiment.breakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentiment.breakdown.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 22, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 25, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 53, color: CHART_COLORS.rose },
  ]

  // Engagement metrics for bar chart
  const engagementData = [
    { metric: 'Avg Upvotes', value: engagement?.avgUpvotes || 85 },
    { metric: 'Avg Comments', value: engagement?.avgComments || 42 },
    { metric: 'Avg Awards', value: engagement?.avgAwards || 3 },
  ]

  // Bot activity data
  const botData = [
    { name: 'Bot Activity', value: botActivity?.estimatedBotPercent || 15, color: CHART_COLORS.rose },
    { name: 'Authentic', value: 100 - (botActivity?.estimatedBotPercent || 15), color: CHART_COLORS.emerald },
  ]

  // Key narratives formatted
  const narrativesData = keyNarratives?.slice(0, 6) || []

  // Red flag findings
  const redFlags = narrativesData.filter(n => n.sentiment === 'Negative').slice(0, 3)

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">SOCIAL MEDIA</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Reddit & Community Platforms</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'Discussion forums, expat communities, anonymous discourse, and sentiment trends on Reddit UAE'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <MessageSquare className="h-4 w-4" />
            View Communities
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="UAE Users"
          value={users?.toLocaleString() || '450,000'}
          previousValue={(users || 450000) - 25000}
          icon={<Users className="h-6 w-6" />}
          gradient="platinum"
          status="info"
        />
        <MetricCard
          title="Market Penetration"
          value={`${penetration || 4.6}%`}
          previousValue={(penetration || 4.6) - 0.3}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment?.score || 35}
          previousValue={(sentiment?.score || 35) + 5}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Dark Social Score"
          value={data.darkSocialScore || 35}
          previousValue={(data.darkSocialScore || 35) + 2}
          icon={<Hash className="h-6 w-6" />}
          gradient="gold"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="communities">Communities</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Reddit Platform Overview" description="Community sentiment and discussion analysis for UAE subreddits">
            <div className="space-y-6">
              {/* Alert Banner */}
              <Card className="glass-card border-rose-500/30 bg-rose-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <AlertOctagon className="h-6 w-6 text-rose-400" />
                    <div>
                      <p className="font-semibold text-rose-400">Negative Sentiment Alert</p>
                      <p className="text-sm text-slate-400">Reddit UAE shows highest negative sentiment ({sentiment?.breakdown?.negative || 53}%) among all platforms</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment breakdown</CardDescription>
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
                    <CardTitle className="text-lg">Bot Activity Analysis</CardTitle>
                    <CardDescription>Estimated bot presence on platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={botData}
                      height={250}
                      showLegend={true}
                    />
                    <div className="mt-4 text-center">
                      <span className="text-2xl font-bold text-rose-400">{botActivity?.estimatedBotPercent || 15}%</span>
                      <p className="text-sm text-slate-400">Government shill accounts suspected</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Concerns</CardTitle>
                  <CardDescription>Primary concerns expressed by Reddit UAE users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(metrics?.sentiment?.keyConcerns || ['Regret moving to UAE', 'Leaving UAE', 'Racism', 'Scams', 'Low wages']).map((concern, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-lg border border-rose-500/30 bg-rose-500/5 p-3">
                        <ThumbsDown className="h-4 w-4 text-rose-400" />
                        <span className="text-slate-200">{concern}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Key Narratives on Reddit" description="Dominant discussion themes and sentiment">
            <div className="space-y-6">
              {/* Red Flag Narratives */}
              {redFlags.length > 0 && (
                <Card className="glass-card border-rose-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                      <AlertTriangle className="h-5 w-5" />
                      Critical Negative Narratives
                    </CardTitle>
                    <CardDescription>Narratives requiring attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {redFlags.map((narrative, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{narrative.narrative}</p>
                            <p className="mt-1 text-sm text-slate-400">Topic: {narrative.topic}</p>
                          </div>
                          <Badge variant="destructive" className="text-xs ml-4">{narrative.prevalence}% prevalence</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* All Narratives */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">All Key Narratives</CardTitle>
                  <CardDescription>Complete sentiment analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {narrativesData.map((narrative, idx) => (
                        <div key={idx} className="space-y-3 rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge variant={narrative.sentiment === 'Positive' ? 'default' : narrative.sentiment === 'Negative' ? 'destructive' : 'secondary'}
                                className={narrative.sentiment === 'Positive' ? 'bg-emerald-500/20 text-emerald-400' : narrative.sentiment === 'Negative' ? 'bg-rose-500/20 text-rose-400' : ''}>
                                {narrative.sentiment}
                              </Badge>
                              <span className="font-semibold text-slate-200">{narrative.topic}</span>
                            </div>
                            <Badge variant="outline" className="border-slate-600">
                              {narrative.prevalence}% prevalence
                            </Badge>
                          </div>
                          <p className="text-slate-300">{narrative.narrative}</p>
                          <div className="flex flex-wrap gap-1">
                            {narrative.sources.map((source, sIdx) => (
                              <Badge key={sIdx} variant="outline" className="text-xs border-slate-600">
                                {source}
                              </Badge>
                            ))}
                          </div>
                          <Progress value={narrative.prevalence} className="h-1" />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <GlassPanel title="Engagement Analytics" description="User engagement patterns on Reddit UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Metrics</CardTitle>
                  <CardDescription>Average engagement per post</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={engagementData}
                    xAxisKey="metric"
                    bars={[
                      { dataKey: 'value', name: 'Value', color: CHART_COLORS.platinum },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-slate-400">Average Upvotes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-platinum-400">
                      {engagement?.avgUpvotes || 85}
                    </div>
                    <p className="text-sm text-slate-400 mt-1">per post</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-slate-400">Average Comments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-emerald-400">
                      {engagement?.avgComments || 42}
                    </div>
                    <p className="text-sm text-slate-400 mt-1">per post</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-slate-400">Average Awards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gold-400">
                      {engagement?.avgAwards || 3}
                    </div>
                    <p className="text-sm text-slate-400 mt-1">per post</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trending Subreddits</CardTitle>
                  <CardDescription>Most active UAE-related communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(metrics?.sentiment?.trending || ['r/dubai', 'r/uae', 'r/abudhabi']).map((sub, idx) => (
                      <Badge key={idx} variant="outline" className="border-platinum/50 text-platinum">
                        <Hash className="h-3 w-3 mr-1" />
                        {sub}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Communities Tab */}
        <TabsContent value="communities" className="space-y-6">
          <GlassPanel title="UAE Subreddit Analysis" description="Community health and government presence">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Bot Indicators</CardTitle>
                  <CardDescription>Coordinated inauthentic behavior detection</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg border border-slate-700 bg-slate-800/50">
                      <span className="text-slate-300">Coordinated Inauthentic Behavior</span>
                      <Badge variant={botActivity?.coordinatedInauthentic ? 'destructive' : 'default'}
                        className={botActivity?.coordinatedInauthentic ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}>
                        {botActivity?.coordinatedInauthentic ? 'DETECTED' : 'NOT DETECTED'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg border border-slate-700 bg-slate-800/50">
                      <span className="text-slate-300">Confidence Level</span>
                      <span className="font-bold text-platinum-400">{((botActivity?.confidence || 0.58) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Bot Indicators:</p>
                      <div className="space-y-1">
                        {(botActivity?.indicators || ['Government shill accounts suspected', 'Occasional coordinated upvotes']).map((indicator, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                            <AlertCircle className="h-3 w-3 text-yellow-400" />
                            {indicator}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Censorship & Moderation</CardTitle>
                  <CardDescription>Community moderation status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-3">
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Censorship Level</p>
                      <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
                        {censorship?.level?.toUpperCase() || 'PARTIAL'}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Compliance Rate</p>
                      <div className="text-2xl font-bold text-emerald-400">{censorship?.complianceRate || 45}%</div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Content Removed</p>
                      <div className="text-2xl font-bold text-rose-400">{censorship?.contentRemoved || 89}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-400">{censorship?.notes || 'Community self-moderation; government presence limited'}</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Government Presence</CardTitle>
                  <CardDescription>Official government accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {(governmentAccounts || []).map((account, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-500/20 text-slate-400">
                              <ArrowUpDown className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-slate-200">{account.handle}</span>
                          </div>
                          <Badge variant="outline" className="text-slate-400 border-slate-600">
                            {account.type}
                          </Badge>
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
