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
  Video,
  Heart,
  MessageSquare,
  Share2,
  Clock,
  Flag,
  CheckCircle,
  XCircle,
  Eye,
  Lock,
} from 'lucide-react'
import {
  useTiktokIntelligenceData,
} from '@/lib/data-loader'

export default function TikTokLandscapePage() {
  const { data } = useTiktokIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading TikTok data...</div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts } = data

  // TikTok specific metrics
  const uaeTikTokStats = [
    { label: 'Registered Influencers', value: '122K', icon: Users, color: CHART_COLORS.rose },
    { label: 'Compliance Rate', value: '78%', icon: CheckCircle, color: CHART_COLORS.gold },
    { label: 'Content Removed', value: '1M+', icon: XCircle, color: CHART_COLORS.rose },
    { label: 'Gov Requests', value: '456', icon: Flag, color: CHART_COLORS.navy },
    { label: 'Bot Activity', value: '23%', icon: Shield, color: CHART_COLORS.platinum },
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
    { name: 'Shares', value: metrics.engagement.avgShares, color: CHART_COLORS.cyan },
    { name: 'Comments', value: metrics.engagement.avgComments, color: CHART_COLORS.gold },
  ]

  // Influencer licensing timeline
  const licensingTimeline = [
    { date: 'Jan 31, 2026', event: 'Influencer Licensing Deadline', status: 'upcoming', description: 'All commercial influencers must obtain government license' },
    { date: 'Q4 2025', event: 'Registration Portal Opens', status: 'completed', description: 'TAMM portal begins accepting influencer applications' },
    { date: 'Q3 2025', event: 'Guidelines Released', status: 'completed', description: 'NCMC releases detailed influencer code of conduct' },
    { date: 'Jan 2025', event: 'Announcement', status: 'completed', description: 'UAE announces mandatory influencer licensing framework' },
  ]

  // Censorship categories
  const censorshipCategories = [
    { category: 'Political Content', compliance: 95, color: CHART_COLORS.rose },
    { category: 'Religious Content', compliance: 92, color: CHART_COLORS.orange },
    { category: 'Cultural Sensitivity', compliance: 88, color: CHART_COLORS.gold },
    { category: 'Adult Content', compliance: 99, color: CHART_COLORS.emerald },
    { category: 'Copyright', compliance: 75, color: CHART_COLORS.cyan },
    { category: 'Misinformation', compliance: 82, color: CHART_COLORS.indigo },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">PLATFORM ANALYSIS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">TikTok Landscape</h1>
          <p className="mt-2 text-slate-400">
            UAE's strict content laws, influencer licensing requirements, and censorship patterns
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Video className="h-4 w-4" />
            View Content
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Analyze Trends
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {uaeTikTokStats.map((stat, idx) => (
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
          <TabsTrigger value="influencers">Influencer Ecosystem</TabsTrigger>
          <TabsTrigger value="censorship">Censorship</TabsTrigger>
          <TabsTrigger value="licensing">Licensing Deadline</TabsTrigger>
          <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="TikTok UAE Overview" description="Platform metrics and user engagement">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">User Demographics</CardTitle>
                    <CardDescription>UAE TikTok audience breakdown</CardDescription>
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
                    <CardDescription>Overall sentiment: {metrics.sentiment.overall}</CardDescription>
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
                  <CardTitle className="text-lg">Engagement Metrics</CardTitle>
                  <CardDescription>Average engagement per post</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={engagementData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Avg per Post', color: CHART_COLORS.rose }]}
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
                      <Badge key={idx} variant="outline" className="text-gold border-gold/50 px-3 py-1">
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

        {/* Influencer Ecosystem Tab */}
        <TabsContent value="influencers" className="space-y-6">
          <GlassPanel title="Influencer Ecosystem" description="UAE TikTok influencer landscape and key concerns">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Concerns</CardTitle>
                    <CardDescription>Issues flagged by UAE TikTok users</CardDescription>
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

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Government Accounts</CardTitle>
                    <CardDescription>Official UAE government presence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {governmentAccounts.map((account, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                            <span className="text-sm font-medium text-slate-200">{account.handle}</span>
                            <Badge variant="outline" className="text-xs">{account.type}</Badge>
                          </div>
                          <span className="text-sm text-gold">{account.followers.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Influencer Categories</CardTitle>
                  <CardDescription>Top content categories by volume</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: 'Lifestyle', value: 35, color: CHART_COLORS.rose },
                      { name: 'Tourism', value: 28, color: CHART_COLORS.gold },
                      { name: 'Food & Dining', value: 18, color: CHART_COLORS.orange },
                      { name: 'Fashion', value: 12, color: CHART_COLORS.purple },
                      { name: 'Tech', value: 7, color: CHART_COLORS.cyan },
                    ]}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Share %', color: CHART_COLORS.rose }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Censorship Tab */}
        <TabsContent value="censorship" className="space-y-6">
          <GlassPanel title="Content Censorship & Compliance" description="UAE TikTok content moderation analysis">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Censorship by Category</CardTitle>
                  <CardDescription>Compliance rates for different content types</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={censorshipCategories}
                    xAxisKey="category"
                    bars={[{ dataKey: 'compliance', name: 'Compliance %', color: CHART_COLORS.rose }]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Bot Activity Analysis</CardTitle>
                    <CardDescription>{metrics.botActivity.estimatedBotPercent}% estimated bots</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Coordinated Activity</span>
                        <Badge variant={metrics.botActivity.coordinatedInauthentic ? 'warning' : 'success'}>
                          {metrics.botActivity.coordinatedInauthentic ? 'Detected' : 'None'}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Confidence Level</span>
                        <span className="text-lg font-bold text-gold">{Math.round(metrics.botActivity.confidence * 100)}%</span>
                      </div>
                      <Progress value={metrics.botActivity.estimatedBotPercent} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Bot Indicators</CardTitle>
                    <CardDescription>Detected automated behavior patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[150px]">
                      <div className="space-y-2">
                        {metrics.botActivity.indicators.map((indicator, idx) => (
                          <div key={idx} className="flex items-center gap-2 rounded-lg bg-slate-800/50 p-2">
                            <Flag className="h-3 w-3 text-platinum" />
                            <span className="text-xs text-slate-300">{indicator}</span>
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

        {/* Licensing Tab */}
        <TabsContent value="licensing" className="space-y-6">
          <GlassPanel title="Influencer Licensing Deadline" description="UAE mandatory influencer licensing - January 31, 2026">
            <div className="space-y-6">
              <Card className="glass-card border-gold/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-gold">
                    <Clock className="h-5 w-5" />
                    Critical Deadline: January 31, 2026
                  </CardTitle>
                  <CardDescription>All commercial influencers must be licensed by this date</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gold/10 p-4 border border-gold/30">
                      <h4 className="font-semibold text-gold mb-2">Key Requirements</h4>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                          Commercial influencers must register with NCMC
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                          Content must follow UAE cultural guidelines
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                          Sponsored posts must be clearly disclosed
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                          Age verification required (18+)
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Timeline</CardTitle>
                  <CardDescription>Key milestones in the licensing process</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {licensingTimeline.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            item.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gold/20 text-gold'
                          }`}>
                            {item.status === 'completed' ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                          </div>
                          {idx < licensingTimeline.length - 1 && (
                            <div className="h-8 w-0.5 bg-slate-700" />
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gold">{item.date}</span>
                            <Badge variant={item.status === 'completed' ? 'success' : 'warning'} className="text-xs">
                              {item.status}
                            </Badge>
                          </div>
                          <p className="font-medium text-slate-200">{item.event}</p>
                          <p className="text-sm text-slate-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Penalties for Non-Compliance</CardTitle>
                  <CardDescription>Enforcement actions for unlicensed influencers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { penalty: 'Content Removal', description: 'All posts removed until licensing' },
                      { penalty: 'Account Suspension', description: 'Temporary or permanent ban' },
                      { penalty: 'Fine', description: 'Up to AED 500,000 for violations' },
                      { penalty: 'Legal Action', description: 'Potential criminal charges for repeat offenders' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-4">
                        <XCircle className="h-5 w-5 text-red-400" />
                        <div>
                          <p className="font-medium text-slate-200">{item.penalty}</p>
                          <p className="text-sm text-slate-400">{item.description}</p>
                        </div>
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
          <GlassPanel title="Key Narratives" description="Dominant narratives on UAE TikTok">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {keyNarratives.map((narrative, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{narrative.topic}</CardTitle>
                        <Badge variant={
                          narrative.sentiment === 'Positive' ? 'success' :
                          narrative.sentiment === 'Negative' ? 'destructive' : 'outline'
                        }>
                          {narrative.sentiment}
                        </Badge>
                      </div>
                      <CardDescription>Prevalence: {narrative.prevalence}%</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-300 mb-4">{narrative.narrative}</p>
                      <div className="space-y-2">
                        <p className="text-xs text-slate-400 font-medium">Sources:</p>
                        {narrative.sources.map((source, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-platinum" />
                            <span className="text-xs text-slate-400">{source}</span>
                          </div>
                        ))}
                      </div>
                      <Progress value={narrative.prevalence} className="mt-4 h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
