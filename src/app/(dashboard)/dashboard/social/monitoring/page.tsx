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
  Monitor,
  Eye,
  Shield,
  AlertTriangle,
  Globe,
  Lock,
  Search,
  Clock,
  TrendingUp,
  Activity,
} from 'lucide-react'
import {
  useTwitterIntelligenceData,
  useTiktokIntelligenceData,
  useYoutubeIntelligenceData,
} from '@/lib/data-loader'

export default function SocialMonitoringPage() {
  const { data: twitterData } = useTwitterIntelligenceData()
  const { data: tiktokData } = useTiktokIntelligenceData()
  const { data: youtubeData } = useYoutubeIntelligenceData()

  // UAE-specific social media metrics
  const blockedSites = 160000
  const vpnDownloads = 9600000
  const activeProxies = 2340
  const torNodes = 890

  // Platform reach data
  const platformReachData = [
    { name: 'Twitter/X', reach: 4.2, sentiment: 68, posts: 1250000, color: CHART_COLORS.navy },
    { name: 'TikTok', reach: 6.8, sentiment: 72, posts: 890000, color: CHART_COLORS.rose },
    { name: 'Instagram', reach: 5.1, sentiment: 75, posts: 670000, color: CHART_COLORS.pink },
    { name: 'Facebook', reach: 3.4, sentiment: 62, posts: 450000, color: CHART_COLORS.denim },
    { name: 'YouTube', reach: 4.8, sentiment: 70, posts: 380000, color: CHART_COLORS.danger },
    { name: 'Snapchat', reach: 3.9, sentiment: 78, posts: 520000, color: CHART_COLORS.gold },
  ]

  // Monitoring coverage data
  const coverageData = [
    { name: 'Twitter/X', coverage: 94, response: 87 },
    { name: 'TikTok', coverage: 78, response: 72 },
    { name: 'Instagram', coverage: 85, response: 81 },
    { name: 'Facebook', coverage: 82, response: 76 },
    { name: 'YouTube', coverage: 88, response: 83 },
    { name: 'Snapchat', coverage: 71, response: 68 },
  ]

  // 24-hour activity heatmap
  const hourlyActivity = [
    { hour: '00:00', activity: 32 },
    { hour: '02:00', activity: 18 },
    { hour: '04:00', activity: 12 },
    { hour: '06:00', activity: 25 },
    { hour: '08:00', activity: 58 },
    { hour: '10:00', activity: 85 },
    { hour: '12:00', activity: 92 },
    { hour: '14:00', activity: 88 },
    { hour: '16:00', activity: 95 },
    { hour: '18:00', activity: 78 },
    { hour: '20:00', activity: 65 },
    { hour: '22:00', activity: 45 },
  ]

  // Alert categories
  const alertCategories = [
    { category: 'Disinformation', count: 234, severity: 78, trend: 'up' },
    { category: 'Hate Speech', count: 156, severity: 65, trend: 'stable' },
    { category: 'Violence Threats', count: 89, severity: 92, trend: 'up' },
    { category: 'Privacy Violations', count: 145, severity: 58, trend: 'down' },
    { category: 'Fraud Scams', count: 312, severity: 72, trend: 'up' },
  ]

  // Sentiment trend data
  const sentimentTrendData = [
    { month: 'Jan', positive: 62, neutral: 25, negative: 13 },
    { month: 'Feb', positive: 58, neutral: 28, negative: 14 },
    { month: 'Mar', positive: 65, neutral: 22, negative: 13 },
    { month: 'Apr', positive: 68, neutral: 21, negative: 11 },
    { month: 'May', positive: 71, neutral: 19, negative: 10 },
    { month: 'Jun', positive: 69, neutral: 20, negative: 11 },
    { month: 'Jul', positive: 72, neutral: 18, negative: 10 },
    { month: 'Aug', positive: 74, neutral: 17, negative: 9 },
    { month: 'Sep', positive: 73, neutral: 18, negative: 9 },
    { month: 'Oct', positive: 75, neutral: 17, negative: 8 },
    { month: 'Nov', positive: 74, neutral: 18, negative: 8 },
    { month: 'Dec', positive: 76, neutral: 16, negative: 8 },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-rose-400" />
      case 'down': return <TrendingUp className="h-4 w-4 text-emerald-400 rotate-180" />
      default: return <Activity className="h-4 w-4 text-platinum-400" />
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="denim" className="mb-2">S-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy">Social Media Monitoring</h1>
          <p className="mt-2 text-platinum-400">
            Real-time surveillance and analytics across all major social platforms
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Eye className="h-4 w-4" />
            Live Feed
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Monitor className="h-4 w-4" />
            Monitor
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Blocked Sites"
          value={blockedSites.toLocaleString()}
          icon={<Lock className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="VPN Downloads"
          value="9.6M"
          previousValue={8.2}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
          status="warning"
        />
        <MetricCard
          title="Active Proxies"
          value={activeProxies.toLocaleString()}
          previousValue={activeProxies - 120}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="TOR Nodes"
          value={torNodes.toLocaleString()}
          previousValue={torNodes + 45}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="indigo"
          status="warning"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Social Media Monitoring Overview" description="Comprehensive surveillance metrics">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Reach Distribution</CardTitle>
                    <CardDescription>Audience reach by platform (millions)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={platformReachData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Trend (12 months)</CardTitle>
                    <CardDescription>Aggregated sentiment across platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={sentimentTrendData}
                      xAxisKey="month"
                      lines={[
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
                  <CardTitle className="text-lg">Monitoring Coverage</CardTitle>
                  <CardDescription>Platform surveillance coverage percentage</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={coverageData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'coverage', name: 'Coverage %', color: CHART_COLORS.navy },
                      { dataKey: 'response', name: 'Response Time %', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Platforms Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <GlassPanel title="Platform-Specific Monitoring" description="Deep dive into each social platform">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Comparison</CardTitle>
                  <CardDescription>Key metrics by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {platformReachData.map((platform, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className="h-10 w-10 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: `${platform.color}20` }}
                            >
                              <Globe className="h-5 w-5" style={{ color: platform.color }} />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{platform.name}</p>
                              <p className="text-sm text-platinum-400">{platform.posts.toLocaleString()} posts tracked</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gold">{platform.reach}M</div>
                              <p className="text-xs text-platinum-400">Reach</p>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-emerald-400">{platform.sentiment}%</div>
                              <p className="text-xs text-platinum-400">Sentiment</p>
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

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-6">
          <GlassPanel title="24-Hour Activity Monitoring" description="Hourly social media activity patterns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Activity Heatmap</CardTitle>
                  <CardDescription>Social media activity by hour (UAE local time)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={hourlyActivity}
                    xAxisKey="hour"
                    bars={[
                      { dataKey: 'activity', name: 'Activity Level', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Peak Hours Analysis</CardTitle>
                    <CardDescription>Highest activity periods</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { time: '16:00 - 18:00', activity: 'Very High', posts: 245000 },
                        { time: '12:00 - 14:00', activity: 'High', posts: 198000 },
                        { time: '10:00 - 12:00', activity: 'High', posts: 175000 },
                        { time: '08:00 - 10:00', activity: 'Moderate', posts: 142000 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Clock className="h-4 w-4 text-navy" />
                            <span className="text-sm font-medium text-platinum-200">{item.time}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-emerald-400">{item.activity}</Badge>
                            <span className="text-sm font-bold text-navy">{item.posts.toLocaleString()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Low Activity Periods</CardTitle>
                    <CardDescription>Dormant monitoring windows</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { time: '02:00 - 06:00', activity: 'Very Low', posts: 12000 },
                        { time: '22:00 - 00:00', activity: 'Low', posts: 38000 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Clock className="h-4 w-4 text-platinum" />
                            <span className="text-sm font-medium text-platinum-200">{item.time}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-platinum-400">{item.activity}</Badge>
                            <span className="text-sm font-bold text-platinum">{item.posts.toLocaleString()}</span>
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

        {/* Alerts Tab */}
        <TabsContent value="alerts" className="space-y-6">
          <GlassPanel title="Real-time Alerts" description="Priority alert categories and trends">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Alert Categories</CardTitle>
                  <CardDescription>Content violation categories tracked</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {alertCategories.map((alert, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`h-10 w-10 rounded-full flex items-center justify-center ${
                                alert.severity > 80 ? 'bg-rose-500/20 text-rose-400' :
                                alert.severity > 60 ? 'bg-amber-500/20 text-amber-400' :
                                'bg-emerald-500/20 text-emerald-400'
                              }`}
                            >
                              <AlertTriangle className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{alert.category}</p>
                              <p className="text-sm text-platinum-400">{alert.count} incidents this month</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className={`text-lg font-bold ${
                                alert.severity > 80 ? 'text-rose-400' :
                                alert.severity > 60 ? 'text-amber-400' :
                                'text-emerald-400'
                              }`}>{alert.severity}%</div>
                              <p className="text-xs text-platinum-400">Severity</p>
                            </div>
                            <div className="text-center">
                              {getTrendIcon(alert.trend)}
                              <p className="text-xs text-platinum-400 mt-1">Trend</p>
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
