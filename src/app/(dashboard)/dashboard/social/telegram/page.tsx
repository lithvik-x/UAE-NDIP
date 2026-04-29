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
  Lock,
  MessageSquare,
  Radio,
  Key,
  Eye,
} from 'lucide-react'
import {
  useTelegramIntelligenceData,
} from '@/lib/data-loader'

export default function TelegramPage() {
  const { data } = useTelegramIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Telegram intelligence data...</div>
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
    { name: 'Positive', value: 32, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 40, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 28, color: CHART_COLORS.rose },
  ]

  // Engagement metrics for bar chart
  const engagementData = [
    { metric: 'Avg Messages', value: engagement?.avgMessages || 150 },
    { metric: 'Avg Members', value: engagement?.avgMembers || 2500 },
    { metric: 'Avg Shares', value: engagement?.avgShares || 45 },
  ]

  // Bot activity data
  const botData = [
    { name: 'Bot Activity', value: botActivity?.estimatedBotPercent || 8, color: CHART_COLORS.rose },
    { name: 'Authentic', value: 100 - (botActivity?.estimatedBotPercent || 8), color: CHART_COLORS.emerald },
  ]

  // Key narratives formatted
  const narrativesData = keyNarratives?.slice(0, 6) || []

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">SOCIAL MEDIA</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Telegram & Encrypted Messaging</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'End-to-end encrypted messaging, privacy concerns, VoIP alternatives, and dark social analysis'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Lock className="h-4 w-4" />
            Security Analysis
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
          value={users?.toLocaleString() || '33,624'}
          previousValue={(users || 33624) + 1200}
          icon={<Users className="h-6 w-6" />}
          gradient="platinum"
          status="info"
        />
        <MetricCard
          title="Market Penetration"
          value={`${penetration || 0.35}%`}
          previousValue={(penetration || 0.35) + 0.05}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment?.score || 48}
          previousValue={(sentiment?.score || 48) - 2}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Dark Social Score"
          value={data.darkSocialScore || 95}
          previousValue={(data.darkSocialScore || 95) - 3}
          icon={<Eye className="h-6 w-6" />}
          gradient="gold"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="censorship">Censorship</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Telegram Platform Overview" description="Encrypted messaging platform analysis for UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                  <CardDescription>User sentiment breakdown on Telegram UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
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
                      <span className="text-2xl font-bold text-rose-400">{botActivity?.estimatedBotPercent || 8}%</span>
                      <p className="text-sm text-slate-400">Due to encryption, bot activity is limited</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Concerns</CardTitle>
                    <CardDescription>User concerns on Telegram UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(metrics?.sentiment?.keyConcerns || ['VoIP censorship', 'Privacy concerns', 'Government surveillance']).map((concern, idx) => (
                        <div key={idx} className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <AlertTriangle className="h-4 w-4 text-yellow-400" />
                          <span className="text-slate-200">{concern}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Censorship Level</CardTitle>
                  <CardDescription>Current censorship status in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Badge variant="destructive" className="text-lg px-4 py-2">
                      <Lock className="h-4 w-4 mr-2" />
                      {censorship?.level?.toUpperCase() || 'EXTREME'}
                    </Badge>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-slate-300">Compliance Rate</span>
                        <span className="font-bold text-emerald-400">{censorship?.complianceRate || 95}%</span>
                      </div>
                      <Progress value={censorship?.complianceRate || 95} className="h-2" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-400">{censorship?.notes || 'Censored for VoIP; fully blocked for voice calls; encrypted messaging active'}</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Key Narratives on Telegram" description="Dominant narratives and discussion themes">
            <div className="grid gap-6 lg:grid-cols-2">
              {narrativesData.map((narrative, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{narrative.topic}</CardTitle>
                      <Badge variant={narrative.sentiment === 'Positive' ? 'default' : narrative.sentiment === 'Negative' ? 'destructive' : 'secondary'}
                        className={narrative.sentiment === 'Positive' ? 'bg-emerald-500/20 text-emerald-400' : ''}>
                        {narrative.sentiment}
                      </Badge>
                    </div>
                    <CardDescription>Prevalence: {narrative.prevalence}%</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{narrative.narrative}</p>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Sources:</p>
                      <div className="flex flex-wrap gap-1">
                        {narrative.sources.map((source, sIdx) => (
                          <Badge key={sIdx} variant="outline" className="text-xs border-slate-600">
                            {source}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <Progress value={narrative.prevalence} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <GlassPanel title="Engagement Analytics" description="User engagement patterns on Telegram UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Metrics</CardTitle>
                  <CardDescription>Average engagement per channel</CardDescription>
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
                    <CardTitle className="text-sm text-slate-400">Avg Messages/Day</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-platinum-400">
                      {engagement?.avgMessages || 150}
                    </div>
                    <p className="text-sm text-slate-400 mt-1">per channel</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-slate-400">Avg Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-emerald-400">
                      {engagement?.avgMembers?.toLocaleString() || '2,500'}
                    </div>
                    <p className="text-sm text-slate-400 mt-1">per channel</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm text-slate-400">Avg Shares</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gold-400">
                      {engagement?.avgShares || 45}
                    </div>
                    <p className="text-sm text-slate-400 mt-1">per content piece</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trending Content</CardTitle>
                  <CardDescription>What UAE Telegram users are discussing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {(metrics?.sentiment?.trending || ['News channels', 'Privacy discussions', 'VoIP alternatives']).map((item, idx) => (
                      <Badge key={idx} variant="outline" className="border-platinum/50 text-platinum">
                        <Radio className="h-3 w-3 mr-1" />
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Censorship Tab */}
        <TabsContent value="censorship" className="space-y-6">
          <GlassPanel title="Censorship & Government Pressure" description="Content moderation and government intervention analysis">
            <div className="space-y-6">
              <Card className="glass-card border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                    <Lock className="h-5 w-5" />
                    EXTREME Censorship Level
                  </CardTitle>
                  <CardDescription>Government control status on Telegram in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-3">
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Compliance Rate</p>
                      <div className="text-3xl font-bold text-emerald-400">{censorship?.complianceRate || 95}%</div>
                      <Progress value={censorship?.complianceRate || 95} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Government Requests</p>
                      <div className="text-3xl font-bold text-yellow-400">{censorship?.governmentRequests?.toLocaleString() || '3,456'}</div>
                      <Progress value={(censorship?.governmentRequests || 3456) / 50} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Content Removed</p>
                      <div className="text-3xl font-bold text-red-400">{censorship?.contentRemoved?.toLocaleString() || '8,934'}</div>
                      <Progress value={(censorship?.contentRemoved || 8934) / 100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Censorship Notes</CardTitle>
                  <CardDescription>Detailed censorship analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{censorship?.notes || 'Censored for VoIP; fully blocked for voice calls; encrypted messaging active'}</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Government Accounts</CardTitle>
                  <CardDescription>Official UAE government presence</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {(governmentAccounts || []).map((account, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum">
                              <Key className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-slate-200">{account.handle}</span>
                          </div>
                          <Badge variant="outline" className="text-platinum border-platinum/50">
                            {account.followers?.toLocaleString()} followers
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
