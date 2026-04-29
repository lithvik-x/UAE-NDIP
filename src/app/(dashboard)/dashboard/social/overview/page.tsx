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
  Eye,
  MessageSquare,
  Share2,
  Heart,
  Lock,
  Unlock,
  Bot,
  Activity,
} from 'lucide-react'
import {
  useTwitterIntelligenceData,
  useTiktokIntelligenceData,
  useInstagramIntelligenceData,
  useLinkedinIntelligenceData,
  useYoutubeIntelligenceData,
  useFacebookIntelligenceData,
  useRedditIntelligenceData,
  useTelegramIntelligenceData,
} from '@/lib/data-loader'

export default function SocialMediaOverviewPage() {
  const { data: twitter } = useTwitterIntelligenceData()
  const { data: tiktok } = useTiktokIntelligenceData()
  const { data: instagram } = useInstagramIntelligenceData()
  const { data: linkedin } = useLinkedinIntelligenceData()
  const { data: youtube } = useYoutubeIntelligenceData()
  const { data: facebook } = useFacebookIntelligenceData()
  const { data: reddit } = useRedditIntelligenceData()
  const { data: telegram } = useTelegramIntelligenceData()

  if (!twitter || !tiktok || !instagram || !linkedin) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Social Media data...</div>
      </div>
    )
  }

  // Platform summary data
  const platformData = [
    {
      platform: 'Twitter/X',
      users: twitter.metrics.users,
      sentiment: twitter.metrics.sentiment.score,
      sentimentLabel: twitter.metrics.sentiment.overall,
      botPercent: twitter.metrics.botActivity.estimatedBotPercent,
      censorship: twitter.censorship.level,
      color: CHART_COLORS.platinum,
      icon: MessageSquare,
    },
    {
      platform: 'TikTok',
      users: tiktok.metrics.users,
      sentiment: tiktok.metrics.sentiment.score,
      sentimentLabel: tiktok.metrics.sentiment.overall,
      botPercent: tiktok.metrics.botActivity.estimatedBotPercent,
      censorship: tiktok.censorship.level,
      color: CHART_COLORS.rose,
      icon: Activity,
    },
    {
      platform: 'Instagram',
      users: instagram.metrics.users,
      sentiment: instagram.metrics.sentiment.score,
      sentimentLabel: instagram.metrics.sentiment.overall,
      botPercent: instagram.metrics.botActivity.estimatedBotPercent,
      censorship: instagram.censorship.level,
      color: CHART_COLORS.purple,
      icon: Heart,
    },
    {
      platform: 'LinkedIn',
      users: linkedin.metrics.users,
      sentiment: linkedin.metrics.sentiment.score,
      sentimentLabel: linkedin.metrics.sentiment.overall,
      botPercent: linkedin.metrics.botActivity.estimatedBotPercent,
      censorship: linkedin.censorship.level,
      color: CHART_COLORS.cyan,
      icon: Users,
    },
    {
      platform: 'YouTube',
      users: youtube.metrics.users,
      sentiment: youtube.metrics.sentiment.score,
      sentimentLabel: youtube.metrics.sentiment.overall,
      botPercent: youtube.metrics.botActivity.estimatedBotPercent,
      censorship: youtube.censorship.level,
      color: CHART_COLORS.rose,
      icon: Share2,
    },
    {
      platform: 'Facebook',
      users: facebook.metrics.users,
      sentiment: facebook.metrics.sentiment.score,
      sentimentLabel: facebook.metrics.sentiment.overall,
      botPercent: facebook.metrics.botActivity.estimatedBotPercent,
      censorship: facebook.censorship.level,
      color: CHART_COLORS.indigo,
      icon: Globe,
    },
  ]

  // Sentiment overview chart
  const sentimentOverview = [
    {
      name: 'Positive',
      value: Math.round(
        (twitter.metrics.sentiment.breakdown.positive +
          tiktok.metrics.sentiment.breakdown.positive +
          instagram.metrics.sentiment.breakdown.positive +
          linkedin.metrics.sentiment.breakdown.positive) /
          4
      ),
      color: CHART_COLORS.emerald,
    },
    {
      name: 'Neutral',
      value: Math.round(
        (twitter.metrics.sentiment.breakdown.neutral +
          tiktok.metrics.sentiment.breakdown.neutral +
          instagram.metrics.sentiment.breakdown.neutral +
          linkedin.metrics.sentiment.breakdown.neutral) /
          4
      ),
      color: CHART_COLORS.platinum,
    },
    {
      name: 'Negative',
      value: Math.round(
        (twitter.metrics.sentiment.breakdown.negative +
          tiktok.metrics.sentiment.breakdown.negative +
          instagram.metrics.sentiment.breakdown.negative +
          linkedin.metrics.sentiment.breakdown.negative) /
          4
      ),
      color: CHART_COLORS.rose,
    },
  ]

  // Censorship levels
  const censorshipData = [
    { platform: 'Discord', level: 'Extreme', score: 100, color: CHART_COLORS.rose },
    { platform: 'Telegram', level: 'Extreme', score: 95, color: CHART_COLORS.rose },
    { platform: 'WhatsApp', level: 'Significant', score: 92, color: CHART_COLORS.orange },
    { platform: 'Twitter/X', level: 'Significant', score: 88, color: CHART_COLORS.orange },
    { platform: 'Facebook', level: 'Partial', score: 82, color: CHART_COLORS.gold },
    { platform: 'Instagram', level: 'Partial', score: 80, color: CHART_COLORS.gold },
    { platform: 'TikTok', level: 'Partial', score: 78, color: CHART_COLORS.gold },
    { platform: 'LinkedIn', level: 'None', score: 0, color: CHART_COLORS.emerald },
  ]

  // UAE Social Media Stats
  const uaeStats = [
    { label: 'VPN Downloads', value: '9.6M', icon: Unlock },
    { label: 'Blocked Sites', value: '160K+', icon: Lock },
    { label: 'Registered Influencers', value: '122K', icon: Users },
    { label: 'Bot Activity (Avg)', value: '35%', icon: Bot },
    { label: 'Dark Social Score', value: '42', icon: Eye },
  ]

  const getCensorshipBadge = (level: string) => {
    switch (level) {
      case 'extreme':
        return <Badge variant="destructive" className="text-xs">Extreme</Badge>
      case 'significant':
        return <Badge variant="warning" className="text-xs">Significant</Badge>
      case 'partial':
        return <Badge variant="outline" className="text-xs">Partial</Badge>
      case 'none':
        return <Badge variant="success" className="text-xs">None</Badge>
      default:
        return <Badge variant="outline" className="text-xs">{level}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">SOCIAL INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Social Media Overview</h1>
          <p className="mt-2 text-slate-400">
            Comprehensive monitoring of social platforms across the UAE digital landscape
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Eye className="h-4 w-4" />
            Monitor
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {uaeStats.map((stat, idx) => (
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
          <TabsTrigger value="overview">Platform Overview</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="censorship">Censorship</TabsTrigger>
          <TabsTrigger value="bot-activity">Bot Activity</TabsTrigger>
          <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
        </TabsList>

        {/* Platform Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Platform Comparison" description="User reach and engagement across major platforms">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">User Reach by Platform</CardTitle>
                  <CardDescription>Active users across UAE social platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={platformData.map(p => ({ name: p.platform, value: p.users, color: p.color }))}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Users', color: CHART_COLORS.navy }]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Sentiment Scores</CardTitle>
                    <CardDescription>Overall sentiment by platform (0-100)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={platformData.map(p => ({ name: p.platform, value: p.sentiment, color: p.color }))}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Sentiment', color: CHART_COLORS.emerald }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Bot Activity by Platform</CardTitle>
                    <CardDescription>Estimated bot percentage per platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={platformData.map(p => ({ name: p.platform, value: p.botPercent, color: p.color }))}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Bot %', color: CHART_COLORS.rose }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Cross-Platform Sentiment" description="Aggregated sentiment analysis across all monitored platforms">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Overall Sentiment Distribution</CardTitle>
                    <CardDescription>Positive, neutral, and negative sentiment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentOverview}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform-by-Platform Sentiment</CardTitle>
                    <CardDescription>Sentiment breakdown per platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {platformData.map((platform, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{platform.platform}</span>
                            <span className="text-sm font-bold" style={{ color: platform.color }}>
                              {platform.sentimentLabel} ({platform.sentiment})
                            </span>
                          </div>
                          <Progress
                            value={platform.sentiment}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trending Topics & Hashtags</CardTitle>
                  <CardDescription>Most discussed topics across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        { tag: '#dubailife', platform: 'Twitter', mentions: '2.4M' },
                        { tag: '#uaenews', platform: 'Twitter', mentions: '1.8M' },
                        { tag: '#gitex', platform: 'Twitter', mentions: '1.2M' },
                        { tag: '#UAE', platform: 'TikTok', mentions: '890K' },
                        { tag: '#Dubai', platform: 'TikTok', mentions: '720K' },
                        { tag: '#AbuDhabi', platform: 'Instagram', mentions: '650K' },
                        { tag: '#visitdubai', platform: 'Instagram', mentions: '580K' },
                        { tag: '#UAEBusiness', platform: 'LinkedIn', mentions: '340K' },
                        { tag: '#Jobs', platform: 'LinkedIn', mentions: '290K' },
                      ].map((topic, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div>
                            <span className="font-mono text-sm font-medium text-gold">{topic.tag}</span>
                            <p className="text-xs text-slate-400">{topic.platform}</p>
                          </div>
                          <Badge variant="outline" className="text-platinum">{topic.mentions}</Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Censorship Tab */}
        <TabsContent value="censorship" className="space-y-6">
          <GlassPanel title="Censorship & Content Control" description="Content moderation levels across UAE platforms">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Censorship Intensity by Platform</CardTitle>
                  <CardDescription>Government content removal and compliance rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={censorshipData}
                    xAxisKey="platform"
                    bars={[{ dataKey: 'score', name: 'Censorship Score', color: CHART_COLORS.rose }]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Censorship Levels</CardTitle>
                    <CardDescription>Platform categorization by censorship severity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {censorshipData.map((platform, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <div
                              className="h-3 w-3 rounded-full"
                              style={{ backgroundColor: platform.color }}
                            />
                            <span className="text-sm font-medium text-slate-200">{platform.platform}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-xs text-slate-400">{platform.level}</span>
                            {getCensorshipBadge(platform.level)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Censorship Metrics</CardTitle>
                    <CardDescription>UAE government content control statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Government Requests', value: '12,456', trend: '+18%' },
                        { label: 'Content Removed', value: '1.2M', trend: '+24%' },
                        { label: 'Accounts Restricted', value: '34,567', trend: '+12%' },
                        { label: 'VPN Downloads', value: '9.6M', trend: '+8%' },
                      ].map((stat, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div>
                            <p className="text-sm font-medium text-slate-200">{stat.label}</p>
                            <p className="text-xs text-slate-400">Year to date</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-gold">{stat.value}</p>
                            <p className="text-xs text-emerald-400">{stat.trend}</p>
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

        {/* Bot Activity Tab */}
        <TabsContent value="bot-activity" className="space-y-6">
          <GlassPanel title="Bot Activity & Inauthentic Behavior" description="Analysis of automated and coordinated inauthentic activity">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Bot Percentage by Platform</CardTitle>
                    <CardDescription>Estimated automated account activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={platformData.map(p => ({
                        name: p.platform,
                        value: p.botPercent,
                        color: p.color,
                      }))}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Coordinated Inauthentic Behavior</CardTitle>
                    <CardDescription>Platforms with detected CIB operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { platform: 'Twitter/X', detected: true, confidence: '92%', indicators: '3' },
                        { platform: 'TikTok', detected: true, confidence: '78%', indicators: '2' },
                        { platform: 'Facebook', detected: true, confidence: '81%', indicators: '3' },
                        { platform: 'Instagram', detected: true, confidence: '85%', indicators: '2' },
                        { platform: 'LinkedIn', detected: false, confidence: '52%', indicators: '1' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            {item.detected ? (
                              <AlertTriangle className="h-5 w-5 text-yellow-400" />
                            ) : (
                              <Shield className="h-5 w-5 text-emerald-400" />
                            )}
                            <span className="text-sm font-medium text-slate-200">{item.platform}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant={item.detected ? 'warning' : 'success'} className="text-xs">
                              {item.detected ? 'Detected' : 'None'}
                            </Badge>
                            <span className="text-xs text-slate-400">Conf: {item.confidence}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Bot Activity Indicators</CardTitle>
                  <CardDescription>Common patterns of automated behavior detected</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {[
                        'Automated posting patterns during Iran conflict',
                        'Coordinated sharing of MBZ official content',
                        'Fake account networks amplifying government narratives',
                        'Coordinated hashtag campaigns (#UAE, #Dubai)',
                        'View botting on government YouTube channels',
                        'Engagement pods on Instagram influencers',
                        'CIB operations targeting UAE/Egypt on Facebook',
                        'Job spam profiles on LinkedIn',
                      ].map((indicator, idx) => (
                        <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                          <Bot className="h-4 w-4 text-platinum" />
                          <span className="text-sm text-slate-300">{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Key Narratives Analysis" description="Dominant narratives across UAE social media">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Narratives by Platform</CardTitle>
                  <CardDescription>Prevalence and sentiment of dominant narratives</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {[
                        { narrative: 'UAE as global leader in innovation and governance', platform: 'Twitter', prevalence: 85, sentiment: 'Positive', sources: 12 },
                        { narrative: 'Luxury lifestyle and tourism promotion', platform: 'Instagram', prevalence: 92, sentiment: 'Positive', sources: 45 },
                        { narrative: 'UAE as business and investment hub', platform: 'Twitter', prevalence: 68, sentiment: 'Positive', sources: 23 },
                        { narrative: 'Safety and security in UAE', platform: 'Facebook', prevalence: 80, sentiment: 'Positive', sources: 34 },
                        { narrative: 'Support for regional allies, opposition to Iran', platform: 'Twitter', prevalence: 72, sentiment: 'Neutral', sources: 18 },
                        { narrative: 'Golden visa and residency opportunities', platform: 'LinkedIn', prevalence: 68, sentiment: 'Positive', sources: 28 },
                        { narrative: 'Expat experiences and community', platform: 'Facebook', prevalence: 85, sentiment: 'Mixed', sources: 67 },
                        { narrative: 'Content moderation and censorship concerns', platform: 'TikTok', prevalence: 65, sentiment: 'Negative', sources: 15 },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{item.narrative}</p>
                            <div className="mt-2 flex items-center gap-4">
                              <Badge variant="outline" className="text-xs">{item.platform}</Badge>
                              <span className="text-xs text-slate-400">Sources: {item.sources}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gold">{item.prevalence}%</div>
                            <Badge
                              variant={item.sentiment === 'Positive' ? 'success' : item.sentiment === 'Negative' ? 'destructive' : 'outline'}
                              className="text-xs mt-1"
                            >
                              {item.sentiment}
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
      </Tabs>
    </div>
  )
}
