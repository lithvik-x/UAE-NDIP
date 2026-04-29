'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  Sparkline,
  Heatmap,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowUpRight,
  BookOpen,
  Clock,
  Eye,
  Globe,
  HeartPulse,
  Monitor,
  Newspaper,
  Radio,
  Search,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from 'lucide-react'
import { clairvoyanceData } from '@/lib/data-loader'

export default function OmniSurveillancePage() {
  // Extract real data from data loader
  const { waterfallFeed, printBroadcast, darkWeb } = clairvoyanceData.omniSurveillance

  // ============================================================================
  // HELPER FUNCTIONS FOR DATA MAPPING
  // ============================================================================

  // Helper function to derive severity from sentiment
  function getSeverityFromSentiment(sentiment: string): 'critical' | 'warning' | 'info' {
    if (sentiment === 'negative') return 'critical'
    if (sentiment === 'concerned') return 'warning'
    return 'info'
  }

  // Helper function to get icon from sentiment
  function getIconFromSentiment(sentiment: string) {
    if (sentiment === 'negative') return <AlertCircle className="h-5 w-5" />
    if (sentiment === 'concerned') return <AlertTriangle className="h-5 w-5" />
    return <TrendingUp className="h-5 w-5" />
  }

  // Helper function to derive category from platform and sentiment
  function getCategoryFromData(platform: string, sentiment: string): string {
    if (platform === 'WhatsApp' || platform === 'Forum') {
      return sentiment === 'negative' ? 'Public Concern' : 'Community Discussion'
    }
    if (platform.includes('Official')) return 'Official Communication'
    if (sentiment === 'positive') return 'Positive Sentiment'
    return 'Social Media'
  }

  // Map real waterfall feed data to component structure
  const waterfallFeedItems = waterfallFeed.map((item) => {
    const severity = getSeverityFromSentiment(item.sentiment)
    return {
      title: item.content.slice(0, 80) + (item.content.length > 80 ? '...' : ''),
      description: item.content,
      source: item.source,
      time: 'Just now',
      category: getCategoryFromData(item.platform, item.sentiment),
      severity,
      icon: getIconFromSentiment(item.sentiment),
    }
  })

  // Map real dark web data to component structure
  const darkWebSignals = darkWeb.map((item) => ({
    description: item.threat,
    level: item.severity === 'high' ? ('critical' as const) : (item.severity as 'warning' | 'critical'),
  }))

  // ============================================================================
  // CHART DATA FOR VISUALIZATIONS
  // ============================================================================

  // 24-hour source activity trend
  const sourceActivityTrend = [
    { hour: '00:00', social: 12500, news: 3200, forums: 2800, broadcast: 800 },
    { hour: '03:00', social: 8900, news: 2100, forums: 1900, broadcast: 400 },
    { hour: '06:00', social: 15600, news: 4500, forums: 3200, broadcast: 1200 },
    { hour: '09:00', social: 28400, news: 6800, forums: 5100, broadcast: 2100 },
    { hour: '12:00', social: 32100, news: 7200, forums: 5800, broadcast: 1800 },
    { hour: '15:00', social: 29800, news: 6500, forums: 5400, broadcast: 1600 },
    { hour: '18:00', social: 35200, news: 8100, forums: 6200, broadcast: 2400 },
    { hour: '21:00', social: 26700, news: 5400, forums: 4100, broadcast: 1500 },
  ]

  // Sentiment analysis over time
  const sentimentTrendData = [
    { day: 'Mon', positive: 68, neutral: 22, negative: 10 },
    { day: 'Tue', positive: 72, neutral: 20, negative: 8 },
    { day: 'Wed', positive: 65, neutral: 25, negative: 10 },
    { day: 'Thu', positive: 70, neutral: 21, negative: 9 },
    { day: 'Fri', positive: 75, neutral: 18, negative: 7 },
    { day: 'Sat', positive: 78, neutral: 16, negative: 6 },
    { day: 'Sun', positive: 82, neutral: 14, negative: 4 },
  ]

  // Platform performance metrics
  const platformPerformanceData = [
    { platform: 'Twitter/X', posts: 12450, engagement: 285000, sentiment: 76, velocity: 340 },
    { platform: 'Instagram', posts: 8900, engagement: 420000, sentiment: 82, velocity: 450 },
    { platform: 'Facebook', posts: 6700, engagement: 156000, sentiment: 68, velocity: 180 },
    { platform: 'LinkedIn', posts: 3400, engagement: 89000, sentiment: 84, velocity: 120 },
    { platform: 'TikTok', posts: 12100, engagement: 890000, sentiment: 79, velocity: 680 },
    { platform: 'Reddit', posts: 2800, engagement: 45000, sentiment: 45, velocity: 90 },
  ]

  // Source type distribution
  const sourceTypeDistributionData = [
    { name: 'Social Media', value: 28456, color: CHART_COLORS.denim },
    { name: 'News & Media', value: 12847, color: CHART_COLORS.rose },
    { name: 'Forums & Communities', value: 8234, color: CHART_COLORS.fuchsia },
    { name: 'Broadcast', value: 2364, color: CHART_COLORS.emerald },
    { name: 'Reviews', value: 500, color: CHART_COLORS.orange },
  ]

  // Severity distribution pie chart
  const severityDistributionData = [
    { name: 'Critical', value: 23, color: CHART_COLORS.rose },
    { name: 'Warning', value: 67, color: CHART_COLORS.warning },
    { name: 'Info', value: 144, color: CHART_COLORS.info },
  ]

  // Platform activity heatmap
  const platformActivityHeatmapData = [
    { x: 'Twitter/X', y: 'Morning', value: 78 },
    { x: 'Twitter/X', y: 'Afternoon', value: 92 },
    { x: 'Twitter/X', y: 'Evening', value: 85 },
    { x: 'Instagram', y: 'Morning', value: 65 },
    { x: 'Instagram', y: 'Afternoon', value: 72 },
    { x: 'Instagram', y: 'Evening', value: 95 },
    { x: 'Facebook', y: 'Morning', value: 55 },
    { x: 'Facebook', y: 'Afternoon', value: 62 },
    { x: 'Facebook', y: 'Evening', value: 78 },
    { x: 'LinkedIn', y: 'Morning', value: 88 },
    { x: 'LinkedIn', y: 'Afternoon', value: 82 },
    { x: 'LinkedIn', y: 'Evening', value: 35 },
    { x: 'TikTok', y: 'Morning', value: 45 },
    { x: 'TikTok', y: 'Afternoon', value: 68 },
    { x: 'TikTok', y: 'Evening', value: 98 },
    { x: 'Reddit', y: 'Morning', value: 42 },
    { x: 'Reddit', y: 'Afternoon', value: 58 },
    { x: 'Reddit', y: 'Evening', value: 72 },
  ]

  // Weekly data volume trend
  const weeklyVolumeData = [
    { week: 'Week 1', volume: 145000, flagged: 198 },
    { week: 'Week 2', volume: 158000, flagged: 212 },
    { week: 'Week 3', volume: 142000, flagged: 189 },
    { week: 'Week 4', volume: 172000, flagged: 234 },
  ]

  // Dark web threat level trend
  const darkWebThreatTrend = [
    { month: 'Aug', critical: 12, warning: 23 },
    { month: 'Sep', critical: 18, warning: 31 },
    { month: 'Oct', critical: 15, warning: 28 },
    { month: 'Nov', critical: 22, warning: 35 },
    { month: 'Dec', critical: 19, warning: 29 },
    { month: 'Jan', critical: 25, warning: 38 },
  ]

  // Broadcast media reach comparison
  const broadcastReachData = [
    { outlet: 'Abu Dhabi TV', reach: 450000, sentiment: 75 },
    { outlet: 'Emarat TV', reach: 380000, sentiment: 72 },
    { outlet: 'Sama Dubai', reach: 320000, sentiment: 78 },
    { outlet: 'Abu Dhabi FM', reach: 180000, sentiment: 82 },
    { outlet: 'Quran Radio', reach: 120000, sentiment: 88 },
    { outlet: 'Emarat FM', reach: 280000, sentiment: 76 },
  ]

  // Top topics trending
  const trendingTopicsData = [
    { topic: 'Insurance fines waiver', mentions: 4520, sentiment: 72, velocity: 'high' },
    { topic: 'Vaccine mandate', mentions: 3890, sentiment: 58, velocity: 'medium' },
    { topic: 'Mental health campaign', mentions: 2670, sentiment: 89, velocity: 'high' },
    { topic: 'Hospital wait times', mentions: 2340, sentiment: 35, velocity: 'medium' },
    { topic: 'Malaffi app issues', mentions: 1890, sentiment: 42, velocity: 'low' },
    { topic: 'New health guidelines', mentions: 1560, sentiment: 81, velocity: 'high' },
  ]

  // Geographic distribution
  const geographicDistributionData = [
    { region: 'Abu Dhabi City', mentions: 28450, sentiment: 76 },
    { region: 'Al Ain', mentions: 8900, sentiment: 72 },
    { region: 'Dubai', mentions: 12400, sentiment: 68 },
    { region: 'Other Emirates', mentions: 6200, sentiment: 70 },
    { region: 'Northern Emirates', mentions: 3400, sentiment: 65 },
  ]

  // Engagement by content type
  const engagementByContentType = [
    { type: 'Text', engagement: 156000, posts: 8900 },
    { type: 'Image', engagement: 285000, posts: 12400 },
    { type: 'Video', engagement: 520000, posts: 6700 },
    { type: 'Stories', engagement: 340000, posts: 18200 },
    { type: 'Live', engagement: 180000, posts: 450 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="red" className="mb-2">CLAIRVOYANCE-CX</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-red">Omni-Surveillance</h1>
          <p className="mt-2 text-slate-600">
            Monitoring 52,401+ active sources with 15-second update intervals
          </p>
        </div>
        <Button className="bg-gradient-red hover:opacity-90 text-white gap-2">
          <Zap className="h-4 w-4" />
          Refresh All Sources
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Sources"
          value="52,401"
          previousValue={51800}
          icon={<Eye className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Update Interval"
          value="15"
          unit="seconds"
          icon={<Activity className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Data Points Today"
          value="2.4"
          unit="M"
          previousValue={2.1}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Sources Flagged"
          value="234"
          previousValue={189}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
      </div>

      <Tabs defaultValue="waterfall" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="waterfall">Waterfall Feed</TabsTrigger>
          <TabsTrigger value="broadcast">Broadcast Vault</TabsTrigger>
          <TabsTrigger value="contacts">Media Contacts</TabsTrigger>
          <TabsTrigger value="darkweb">Dark Web Monitor</TabsTrigger>
          <TabsTrigger value="sources">Source Tracker</TabsTrigger>
        </TabsList>

        {/* Waterfall Feed */}
        <TabsContent value="waterfall" className="space-y-6">
          {/* Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">24-Hour Source Activity</CardTitle>
                <CardDescription>Real-time monitoring across all source types</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={sourceActivityTrend}
                  xAxisKey="hour"
                  areas={[
                    { dataKey: 'social', name: 'Social Media', color: CHART_COLORS.denim, fillOpacity: 0.7 },
                    { dataKey: 'news', name: 'News & Media', color: CHART_COLORS.rose, fillOpacity: 0.6 },
                    { dataKey: 'forums', name: 'Forums', color: CHART_COLORS.fuchsia, fillOpacity: 0.5 },
                  ]}
                  height={200}
                  stacked={false}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sentiment Analysis</CardTitle>
                <CardDescription>7-day trend</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={sentimentTrendData}
                  xAxisKey="day"
                  areas={[
                    { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.success, fillOpacity: 0.8 },
                    { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.info, fillOpacity: 0.6 },
                    { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose, fillOpacity: 0.6 },
                  ]}
                  height={200}
                  stacked={true}
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Source Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sourceTypeDistributionData}
                  donut={true}
                  height={180}
                  showLegend={false}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Alert Severity</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={severityDistributionData}
                  donut={true}
                  height={180}
                  showLegend={false}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Weekly Volume</CardTitle>
                <CardDescription>Data points processed</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <BarChart
                  data={weeklyVolumeData}
                  xAxisKey="week"
                  bars={[{ dataKey: 'volume', name: 'Volume', color: CHART_COLORS.denim }]}
                  height={180}
                  showGrid={false}
                  showLegend={false}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Trending Topics</CardTitle>
                <CardDescription>Top 3 by mentions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopicsData.slice(0, 3).map((topic, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm truncate flex-1">{topic.topic}</span>
                    <Badge variant={topic.sentiment > 70 ? 'success' : topic.sentiment > 50 ? 'info' : 'rose'} className="text-xs ml-2">
                      {topic.sentiment}%
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Live Intelligence Feed" description="Real-time updates from all monitored sources" badge="Live">
            <ScrollArea className="h-[600px]">
              <div className="space-y-3 pr-4">
                {waterfallFeedItems.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 rounded-xl p-4 transition-all duration-200 ${
                      item.severity === 'critical' ? 'bg-red-50/80 border border-red-200' :
                      item.severity === 'warning' ? 'bg-amber-50/80 border border-amber-200' :
                      item.severity === 'info' ? 'bg-blue-50/80 border border-blue-200' :
                      'bg-slate-50/80 border border-slate-200'
                    }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg shrink-0 ${
                      item.severity === 'critical' ? 'bg-red-500 text-white' :
                      item.severity === 'warning' ? 'bg-amber-500 text-white' :
                      item.severity === 'info' ? 'bg-blue-500 text-white' :
                      'bg-slate-200 text-slate-600'
                    }`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-slate-900">{item.title}</h4>
                            <Badge variant={item.severity === 'critical' ? 'destructive' : item.severity === 'warning' ? 'warning' : 'secondary'} className="text-xs">
                              {item.severity}
                            </Badge>
                          </div>
                          <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                          <div className="mt-2 flex items-center gap-4 text-xs text-slate-400">
                            <span>{item.source}</span>
                            <span>•</span>
                            <span>{item.time}</span>
                            <span>•</span>
                            <span>{item.category}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="shrink-0">
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* Broadcast Vault - COMPLETELY REDESIGNED with File 02 Data */}
        <TabsContent value="broadcast" className="space-y-6">
          <GlassPanel title="Media Ecosystem Mapping" description="Verified UAE broadcast media landscape (2024-2026)">
            <div className="space-y-8">

              {/* Radio Programs Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-purple text-white">
                    <Radio className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Radio Programs</h3>
                    <p className="text-sm text-slate-500">Strategic morning shows for behavioral reinforcement</p>
                  </div>
                  <Badge variant="purple" className="ml-auto">3 Strategic Programs</Badge>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                  {/* Emarat FM - Ahla Sabah */}
                  <Card className="glass-card border-purple-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Radio className="h-5 w-5 text-purple-500" />
                          <CardTitle className="text-lg">Emarat FM</CardTitle>
                        </div>
                        <Badge variant="purple" className="text-xs">Tier 1</Badge>
                      </div>
                      <CardDescription>95.8 FM (Abu Dhabi) • 97.1 FM (Dubai) • 94.9 FM (Al Ain)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-purple-50/50 p-3 border border-purple-200">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="h-4 w-4 text-purple-500 fill-purple-500" />
                          <span className="font-bold text-slate-900">"Ahla Sabah"</span>
                          <Badge variant="purple" className="text-xs ml-auto">Flagship</Badge>
                        </div>
                        <p className="text-sm text-slate-600">The Sweetest Morning - Comprehensive morning magazine</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Schedule</span>
                          <span className="font-semibold text-slate-900">Sun-Thu 08:00-10:00</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Primary Host</span>
                          <span className="font-semibold text-purple-600">Shams Al Saadi</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Additional Hosts</span>
                          <span className="font-semibold text-slate-700">Hani Al Hamed, Mona Khalil</span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <div className="text-xs font-semibold text-slate-700 mb-1">Strategic Value</div>
                        <p className="text-xs text-slate-600">Commuter reach; behavior change; social connection; wellness tips</p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">View Schedule</Button>
                        <Button size="sm" className="bg-gradient-purple hover:opacity-90 text-white">Contact</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Al Oula FM - Sabah Al Oula */}
                  <Card className="glass-card border-amber-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Radio className="h-5 w-5 text-amber-500" />
                          <CardTitle className="text-lg">Al Oula FM</CardTitle>
                        </div>
                        <Badge variant="warning" className="text-xs">Heritage</Badge>
                      </div>
                      <CardDescription>107.4 FM • Hamdan Bin Mohammed Heritage Center</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-amber-50/50 p-3 border border-amber-200">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                          <span className="font-bold text-slate-900">"Sabah Al Oula"</span>
                          <Badge variant="warning" className="text-xs ml-auto">National Platform</Badge>
                        </div>
                        <p className="text-sm text-slate-600">The First Morning - Daily manifesto for national identity</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Schedule</span>
                          <span className="font-semibold text-slate-900">Daily 07:00-11:00</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Primary Host</span>
                          <span className="font-semibold text-amber-600">Salem Mohammad</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Format</span>
                          <span className="font-semibold text-slate-700">Talk, Heritage, Poetry</span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <div className="text-xs font-semibold text-slate-700 mb-1">Strategic Value</div>
                        <p className="text-xs text-slate-600">Traditional Emirati families; civic duty; heritage alignment; cultural health topics</p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">View Schedule</Button>
                        <Button size="sm" className="bg-gradient-amber hover:opacity-90 text-white">Contact</Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Abu Dhabi Quran Radio */}
                  <Card className="glass-card border-emerald-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Radio className="h-5 w-5 text-emerald-500" />
                          <CardTitle className="text-lg">Abu Dhabi Quran Radio</CardTitle>
                        </div>
                        <Badge variant="success" className="text-xs">Spiritual</Badge>
                      </div>
                      <CardDescription>98.1 FM (Abu Dhabi) • English at 11:00 PM</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-emerald-50/50 p-3 border border-emerald-200">
                        <div className="flex items-center gap-2 mb-1">
                          <BookOpen className="h-4 w-4 text-emerald-500" />
                          <span className="font-bold text-slate-900">"Al Nour Al Mubeen"</span>
                        </div>
                        <p className="text-sm text-slate-600">The Clarifying Light of the Holy Quran</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Schedule</span>
                          <span className="font-semibold text-slate-900">Daily 10:00 AM</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Target</span>
                          <span className="font-semibold text-emerald-600">Retirees, Housewives</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Format</span>
                          <span className="font-semibold text-slate-700">Recitations, Fiqh</span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <div className="text-xs font-semibold text-slate-700 mb-1">Strategic Value</div>
                        <p className="text-xs text-slate-600">Spiritual health; bioethics; organ donation; fasting health; religious authority leverage</p>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">View Schedule</Button>
                        <Button size="sm" className="bg-gradient-emerald hover:opacity-90 text-white">Contact</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* TV Programs Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-denim text-white">
                    <Monitor className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">TV Programs</h3>
                    <p className="text-sm text-slate-500">Prime-time authority and specialized health segments</p>
                  </div>
                  <Badge variant="denim" className="ml-auto">5 Key Programs</Badge>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {/* Abu Dhabi TV - Olom Al Dar */}
                  <Card className="glass-card border-denim-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Monitor className="h-5 w-5 text-denim-500" />
                          <CardTitle className="text-lg">Abu Dhabi TV</CardTitle>
                        </div>
                        <Badge variant="denim" className="text-xs">Official</Badge>
                      </div>
                      <CardDescription>Abu Dhabi Media Network (ADMN)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-denim-50/50 p-3 border border-denim-200">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="h-4 w-4 text-denim-500 fill-denim-500" />
                          <span className="font-bold text-slate-900">"Olom Al Dar"</span>
                          <Badge variant="denim" className="text-xs ml-auto">Golden Hour</Badge>
                        </div>
                        <p className="text-sm text-slate-600">Science of the House - The system of record for officialdom</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Primary Bulletin</span>
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3 text-red-500" />
                            <span className="font-bold text-red-600">08:00 PM (20:00)</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Midday Bulletin</span>
                          <span className="font-semibold text-slate-900">01:00 PM (13:00)</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Late Evening</span>
                          <span className="font-semibold text-slate-900">10:00 PM (22:00)</span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <div className="text-xs font-semibold text-slate-700 mb-1">Strategic Value</div>
                        <p className="text-xs text-slate-600">Official policy announcements; Royal Decrees; major policy shifts; national emergency updates</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Abu Dhabi TV - Eishha Sah */}
                  <Card className="glass-card border-cyan-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <HeartPulse className="h-5 w-5 text-cyan-500" />
                          <CardTitle className="text-lg">Abu Dhabi TV Health</CardTitle>
                        </div>
                        <Badge variant="cyan" className="text-xs">Medical</Badge>
                      </div>
                      <CardDescription>Specialized Health Programming</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-cyan-50/50 p-3 border border-cyan-200">
                        <div className="flex items-center gap-2 mb-1">
                          <Video className="h-4 w-4 text-cyan-500" />
                          <span className="font-bold text-slate-900">"Eishha Sah"</span>
                          <Badge variant="cyan" className="text-xs ml-auto">Weekly</Badge>
                        </div>
                        <p className="text-sm text-slate-600">Live it Right - General health and well-being</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Host</span>
                          <span className="font-semibold text-cyan-600">Dr. Hassan Galadari</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Credentials</span>
                          <span className="font-semibold text-slate-700">Dermatologist, Media Personality</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Focus</span>
                          <span className="font-semibold text-slate-700">Lifestyle, Diet, Fitness</span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <div className="text-xs font-semibold text-slate-700 mb-1">Strategic Value</div>
                        <p className="text-xs text-slate-600">Medical authority on screen; medically vetted content; wellness and longevity strategies</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sama Dubai TV - Akhbar Al Emarat */}
                  <Card className="glass-card border-indigo-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Monitor className="h-5 w-5 text-indigo-500" />
                          <CardTitle className="text-lg">Sama Dubai TV</CardTitle>
                        </div>
                        <Badge variant="indigo" className="text-xs">Community</Badge>
                      </div>
                      <CardDescription>Dubai Media Incorporated (DMI)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-indigo-50/50 p-3 border border-indigo-200">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="h-4 w-4 text-indigo-500 fill-indigo-500" />
                          <span className="font-bold text-slate-900">"Akhbar Al Emarat"</span>
                          <Badge variant="indigo" className="text-xs ml-auto">Majlis Culture</Badge>
                        </div>
                        <p className="text-sm text-slate-600">Emirates News - Community-focused late-night wrap-up</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Primary Bulletin</span>
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3 text-indigo-500" />
                            <span className="font-bold text-indigo-600">11:00 PM (23:00)</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Midday Bulletin</span>
                          <span className="font-semibold text-slate-900">01:00 PM (13:00)</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Focus</span>
                          <span className="font-semibold text-slate-700">Ruler's Court, Local Gov</span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <div className="text-xs font-semibold text-slate-700 mb-1">Strategic Value</div>
                        <p className="text-xs text-slate-600">Community reach; soft reinforcement; late-night social gatherings; local government achievements</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sama Dubai - Balsam */}
                  <Card className="glass-card border-teal-200">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <HeartPulse className="h-5 w-5 text-teal-500" />
                          <CardTitle className="text-lg">Sama Dubai Health</CardTitle>
                        </div>
                        <Badge variant="teal" className="text-xs">Consultation</Badge>
                      </div>
                      <CardDescription>Specialized Health Programming</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-teal-50/50 p-3 border border-teal-200">
                        <div className="flex items-center gap-2 mb-1">
                          <HeartPulse className="h-4 w-4 text-teal-500" />
                          <span className="font-bold text-slate-900">"Balsam"</span>
                          <Badge variant="teal" className="text-xs ml-auto">Dedicated</Badge>
                        </div>
                        <p className="text-sm text-slate-600">Flagship health program with medical consultations</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Format</span>
                          <span className="font-semibold text-teal-600">Medical Advice, Consultations</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Guests</span>
                          <span className="font-semibold text-slate-700">Doctors, Specialists</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Focus</span>
                          <span className="font-semibold text-slate-700">Health Awareness</span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-slate-50 p-3">
                        <div className="text-xs font-semibold text-slate-700 mb-1">Strategic Value</div>
                        <p className="text-xs text-slate-600">Dedicated health consultation platform; specialist interviews; general health awareness</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Broadcast Analytics */}
              <GlassPanel title="Broadcast Coverage Analytics" description="Health topic mentions across all media">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-slate-900">847</div>
                    <div className="text-sm text-slate-500 mt-1">Mentions Today</div>
                    <div className="text-xs text-emerald-600 mt-1">+12.5% from yesterday</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-slate-900">234</div>
                    <div className="text-sm text-slate-500 mt-1">Unique Topics</div>
                    <div className="text-xs text-slate-400 mt-1">Tracked this week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-slate-900">12</div>
                    <div className="text-sm text-slate-500 mt-1">Health Programs</div>
                    <div className="text-xs text-indigo-600 mt-1">Currently featured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-slate-900">98.2%</div>
                    <div className="text-sm text-slate-500 mt-1">Coverage Rate</div>
                    <div className="text-xs text-emerald-600 mt-1">Above target</div>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Media Contacts Tab - NEW with Journalists from File 02 */}
        <TabsContent value="contacts" className="space-y-6">
          <GlassPanel title="Verified Media Contacts" description="Key journalists and gatekeepers for health coverage (2024-2026)">
            <div className="space-y-6">

              {/* Al Ittihad - Arabic */}
              <Card className="glass-card border-rose-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-rose text-white">
                        <Newspaper className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Al Ittihad</CardTitle>
                        <CardDescription>Arabic • The Voice of the Capital • Est. 1969</CardDescription>
                      </div>
                    </div>
                    <Badge variant="rose" className="text-sm">Official Record</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-rose-50/50 p-3 border border-rose-200">
                    <div className="text-sm font-semibold text-slate-900 mb-1">Editorial Approach</div>
                    <p className="text-sm text-slate-600">Formal, deferential, data-driven. The semi-official mouthpiece of the Abu Dhabi government.</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-700">Key Health Correspondents</div>

                    <div className="flex items-start gap-3 rounded-lg bg-slate-50/50 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-rose text-white text-sm font-bold">1</div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900">Sami Abdul Raouf</div>
                        <div className="text-sm text-slate-600">News Editor / Senior Health Reporter</div>
                        <div className="mt-1 flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">The Lead Authority</Badge>
                          <Badge variant="rose" className="text-xs">Primary Contact</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg bg-slate-50/50 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-rose text-white text-sm font-bold">2</div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900">Salam Abu Shehab</div>
                        <div className="text-sm text-slate-600">Abu Dhabi Bureau Chief / Senior Journalist</div>
                        <div className="mt-1 flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Policy Veteran</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg bg-slate-50/50 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-rose text-white text-sm font-bold">3</div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900">Hala Al Khayat</div>
                        <div className="text-sm text-slate-600">Local News Reporter</div>
                        <div className="mt-1 flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Community Link</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-3">
                    <div className="text-xs font-semibold text-slate-700 mb-1">Press Kit Strategy</div>
                    <p className="text-xs text-slate-600">Provide raw data sets, infographics, and full Arabic text of decrees. Facilitate accuracy and detail.</p>
                  </div>
                </CardContent>
              </Card>

              {/* The National - English */}
              <Card className="glass-card border-denim-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-denim text-white">
                        <Newspaper className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">The National</CardTitle>
                        <CardDescription>English • The International Voice</CardDescription>
                      </div>
                    </div>
                    <Badge variant="denim" className="text-sm">Global Positioning</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg bg-denim-50/50 p-3 border border-denim-200">
                    <div className="text-sm font-semibold text-slate-900 mb-1">Editorial Approach</div>
                    <p className="text-sm text-slate-600">World-class broadsheet competing with global titles. Focus on innovation, medical tourism, human interest stories.</p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-slate-700">Key Health Correspondents</div>

                    <div className="flex items-start gap-3 rounded-lg bg-slate-50/50 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-denim text-white text-sm font-bold">1</div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900">Shireena Al Nowais</div>
                        <div className="text-sm text-slate-600">Senior Health Reporter</div>
                        <div className="mt-1 flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Primary Contact</Badge>
                          <Badge variant="denim" className="text-xs">Most Prolific</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg bg-slate-50/50 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-denim text-white text-sm font-bold">2</div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900">Nick Webster</div>
                        <div className="text-sm text-slate-600">Health Editor / Senior Reporter</div>
                        <div className="mt-1 flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Editorial Lead</Badge>
                          <Badge variant="purple" className="text-xs">Mental Health Fellow</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg bg-slate-50/50 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-denim text-white text-sm font-bold">3</div>
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900">Ramola Talwar Badam</div>
                        <div className="text-sm text-slate-600">Senior National Reporter</div>
                        <div className="mt-1 flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">Human Interest</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-3">
                    <div className="text-xs font-semibold text-slate-700 mb-1">Press Kit Strategy</div>
                    <p className="text-xs text-slate-600">Provide exclusive interviews with doctors, access to "first-ever" medical technology, and human-interest angles.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Strategic Recommendations */}
              <GlassPanel title="Strategic Engagement Recommendations" description="Data-driven media outreach strategies">
                <div className="grid gap-4 sm:grid-cols-3">
                  <Card className="glass-card border-purple-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-purple-500" />
                        <CardTitle className="text-base">Morning Loop</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm">
                        <div className="font-semibold text-slate-900">Emarat FM (08:00-10:00)</div>
                        <p className="text-xs text-slate-600 mt-1">Pitch wellness tips and community positivity to Shams Al Saadi</p>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold text-slate-900">Al Oula FM (07:00-11:00)</div>
                        <p className="text-xs text-slate-600 mt-1">Pitch civic duty and heritage to Salem Mohammad</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-red-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-red-500" />
                        <CardTitle className="text-base">Prime-Time Authority</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm">
                        <div className="font-semibold text-slate-900">Abu Dhabi TV (08:00 PM)</div>
                        <p className="text-xs text-slate-600 mt-1">Major policy shifts embargoed for "Golden Hour" release</p>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold text-slate-900">Sama Dubai (11:00 PM)</div>
                        <p className="text-xs text-slate-600 mt-1">Soft reinforcement with community reaction angle</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-indigo-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-indigo-500" />
                        <CardTitle className="text-base">Data vs. Narrative</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm">
                        <div className="font-semibold text-slate-900">Al Ittihad (Arabic)</div>
                        <p className="text-xs text-slate-600 mt-1">Raw data sets, infographics, full Arabic decrees</p>
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold text-slate-900">The National (English)</div>
                        <p className="text-xs text-slate-600 mt-1">Exclusive interviews, first-ever tech, human stories</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Dark Web Monitor */}
        <TabsContent value="darkweb" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Search className="h-5 w-5 text-rose-500" />
                  Dark Web Threat Trend
                </CardTitle>
                <CardDescription>6-month threat level analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={darkWebThreatTrend}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'critical', name: 'Critical Threats', color: CHART_COLORS.rose, fillOpacity: 0.8 },
                    { dataKey: 'warning', name: 'Warning Level', color: CHART_COLORS.warning, fillOpacity: 0.6 },
                  ]}
                  height={200}
                  stacked={false}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Threat Categories</CardTitle>
                <CardDescription>Distribution by type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Counterfeit Medicine</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-rose-500 rounded-full" style={{ width: '65%' }} />
                      </div>
                      <span className="text-sm font-semibold">65%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Breaches</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: '20%' }} />
                      </div>
                      <span className="text-sm font-semibold">20%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Fraud Operations</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 rounded-full" style={{ width: '15%' }} />
                      </div>
                      <span className="text-sm font-semibold">15%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-200 bg-red-50/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Search className="h-6 w-6 text-red-500" />
                <div>
                  <CardTitle className="text-lg text-red-900">The Abyss</CardTitle>
                  <CardDescription className="text-red-700">Dark & Deep Web Monitoring</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert variant="error">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Threat Level Elevated</AlertTitle>
                <AlertDescription>
                  3 potential counterfeit medicine operations detected on dark web marketplaces.
                </AlertDescription>
              </Alert>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-white/80 p-4">
                  <div className="text-2xl font-bold text-red-600">7</div>
                  <div className="text-xs text-slate-500 mt-1">Active Threats</div>
                </div>
                <div className="rounded-lg bg-white/80 p-4">
                  <div className="text-2xl font-bold text-amber-600">23</div>
                  <div className="text-xs text-slate-500 mt-1">Under Surveillance</div>
                </div>
                <div className="rounded-lg bg-white/80 p-4">
                  <div className="text-2xl font-bold text-slate-600">156</div>
                  <div className="text-xs text-slate-500 mt-1">Data Points Collected</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900">Recent Dark Web Signals</h4>
                {darkWebSignals.map((signal: any, i: number) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50/50 p-3">
                    <div className="flex items-center gap-3">
                      <AlertCircle className={`h-4 w-4 ${signal.level === 'critical' ? 'text-red-500' : 'text-amber-500'}`} />
                      <span className="text-sm text-slate-700">{signal.description}</span>
                    </div>
                    <Badge variant={signal.level === 'critical' ? 'destructive' : 'warning'} className="text-xs">
                      {signal.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Source Tracker */}
        <TabsContent value="sources" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Platform Performance</CardTitle>
                <CardDescription>Engagement and sentiment by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={platformPerformanceData}
                  xAxisKey="platform"
                  bars={[
                    { dataKey: 'engagement', name: 'Engagement', color: CHART_COLORS.denim },
                  ]}
                  horizontal={true}
                  height={280}
                  showGrid={false}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Geographic Distribution</CardTitle>
                <CardDescription>Mentions by region</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={geographicDistributionData.map(d => ({ name: d.region, value: d.mentions, color: CHART_COLORS.denim }))}
                  donut={true}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Platform Activity Heatmap</CardTitle>
              <CardDescription>Engagement patterns by time of day</CardDescription>
            </CardHeader>
            <CardContent>
              <Heatmap
                data={platformActivityHeatmapData}
                xAxisLabel="Platform"
                yAxisLabel="Time"
                colorScheme="blue"
                height={300}
              />
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Source Categories" description="Distribution across all monitored channels">
              <div className="space-y-4">
                {sourceCategories.map((cat, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {cat.icon}
                        <span className="text-sm font-medium text-slate-700">{cat.category}</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900">{cat.count.toLocaleString()}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-${cat.color}`} style={{ width: `${cat.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Top Performing Sources" description="Highest activity and engagement">
              <ScrollArea className="h-80">
                <div className="space-y-3 pr-4">
                  {topSources.map((source, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-slate-50/50 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-denim text-white text-xs font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-700">{source.name}</p>
                          <p className="text-xs text-slate-400">{source.category}</p>
                        </div>
                      </div>
                      <Badge variant="success" className="text-xs">{source.activity}</Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Static data for source categories and top sources
const sourceCategories = [
  { category: 'Social Media', count: 28456, percentage: 54, color: 'denim', icon: <Globe className="h-4 w-4 text-blue-500" /> },
  { category: 'News & Media', count: 12847, percentage: 25, color: 'rose', icon: <Newspaper className="h-4 w-4 text-rose-500" /> },
  { category: 'Forums & Communities', count: 8234, percentage: 16, color: 'purple', icon: <Users className="h-4 w-4 text-purple-500" /> },
  { category: 'Broadcast', count: 2364, percentage: 5, color: 'emerald', icon: <Radio className="h-4 w-4 text-emerald-500" /> },
]

const topSources = [
  { name: 'Twitter/X @DoHSocial', category: 'Social Media', activity: 'Very High' },
  { name: 'Reddit r/abudhabi', category: 'Forum', activity: 'High' },
  { name: 'Instagram @adphc_ae', category: 'Social Media', activity: 'High' },
  { name: 'WhatsApp Family Groups', category: 'Dark Social', activity: 'Very High' },
  { name: 'The National Health', category: 'News', activity: 'Medium' },
  { name: 'ExpatWoman Forum', category: 'Forum', activity: 'High' },
]
