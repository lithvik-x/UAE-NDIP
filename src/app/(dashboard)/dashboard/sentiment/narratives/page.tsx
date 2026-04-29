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
  MessageSquare,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Clock,
  Target,
  Users,
  Globe,
  Shield,
  Lightbulb,
  AlertTriangle,
  Flame,
  Eye,
  Scale,
  DollarSign,
} from 'lucide-react'

// Controversy data imports
import {
  controversyTopicsData,
  controversySentimentSummary,
  controversySourceCredibilityMatrix,
  controversyHumanRightsKPIs,
  controversyMilitaryKPIs,
  controversyFinancialKPIs,
  controversyClimateKPIs,
  useControversyData,
} from '@/lib/data-loader'

export default function NarrativeAnalysisPage() {
  // Hook for controversy data
  const controversyData = useControversyData()

  // Sentiment trend data
  const sentimentTrendData = [
    { month: 'Jan', positive: 58, negative: 18, neutral: 24 },
    { month: 'Feb', positive: 60, negative: 17, neutral: 23 },
    { month: 'Mar', positive: 62, negative: 16, neutral: 22 },
    { month: 'Apr', positive: 61, negative: 18, neutral: 21 },
    { month: 'May', positive: 64, negative: 15, neutral: 21 },
    { month: 'Jun', positive: 66, negative: 14, neutral: 20 },
    { month: 'Jul', positive: 68, negative: 13, neutral: 19 },
    { month: 'Aug', positive: 67, negative: 14, neutral: 19 },
    { month: 'Sep', positive: 70, negative: 12, neutral: 18 },
    { month: 'Oct', positive: 72, negative: 11, neutral: 17 },
    { month: 'Nov', positive: 71, negative: 12, neutral: 17 },
    { month: 'Dec', positive: 73, negative: 10, neutral: 17 },
  ]

  // Dominant narratives
  const narrativesData = [
    { narrative: 'UAE Economic Diversification', sentiment: 82, volume: 12500, trend: 'up', impact: 'high' },
    { narrative: 'Technology & AI Leadership', sentiment: 88, volume: 9800, trend: 'up', impact: 'high' },
    { narrative: 'Tourism & Hospitality', sentiment: 76, volume: 8500, trend: 'stable', impact: 'medium' },
    { narrative: 'Cultural Preservation', sentiment: 74, volume: 6200, trend: 'stable', impact: 'medium' },
    { narrative: 'Sustainability Initiatives', sentiment: 79, volume: 5800, trend: 'up', impact: 'high' },
    { narrative: 'Infrastructure Development', sentiment: 81, volume: 5400, trend: 'up', impact: 'medium' },
  ]

  // Narrative themes by platform
  const platformNarrativesData = [
    { platform: 'Twitter/X', dominant: 'Economy', engagement: 85, sentiment: 78 },
    { platform: 'LinkedIn', dominant: 'Business', engagement: 72, sentiment: 82 },
    { platform: 'Instagram', dominant: 'Tourism', engagement: 92, sentiment: 85 },
    { platform: 'TikTok', dominant: 'Lifestyle', engagement: 95, sentiment: 80 },
    { platform: 'Facebook', dominant: 'Community', engagement: 65, sentiment: 75 },
    { platform: 'News', dominant: 'Politics', engagement: 55, sentiment: 72 },
  ]

  // Key themes
  const themesData = [
    { theme: 'Economic Growth', narratives: 45, sentiment: 82 },
    { theme: 'Innovation & Tech', narratives: 38, sentiment: 88 },
    { theme: 'Tourism & Culture', narratives: 32, sentiment: 79 },
    { theme: 'Social Development', narratives: 28, sentiment: 76 },
    { theme: 'Environmental', narratives: 22, sentiment: 74 },
    { theme: 'International Relations', narratives: 25, sentiment: 71 },
  ]

  // Misinformation tracking
  const misinformationData = [
    { topic: 'Economic Policy', prevalence: 15, sentimentImpact: -8, status: 'monitored' },
    { topic: 'Social Issues', prevalence: 22, sentimentImpact: -12, status: 'addressed' },
    { topic: 'Environmental Claims', prevalence: 12, sentimentImpact: -5, status: 'monitored' },
    { topic: 'Cultural Topics', prevalence: 8, sentimentImpact: -3, status: 'stable' },
  ]

  // Narrative velocity
  const velocityData = [
    { week: 'W1', velocity: 45, virality: 62 },
    { week: 'W2', velocity: 52, virality: 68 },
    { week: 'W3', velocity: 48, virality: 65 },
    { week: 'W4', velocity: 55, virality: 72 },
    { week: 'W5', velocity: 58, virality: 75 },
    { week: 'W6', velocity: 62, virality: 78 },
    { week: 'W7', velocity: 68, virality: 82 },
    { week: 'W8', velocity: 72, virality: 85 },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-rose-400'
  }

  const getSentimentBg = (score: number) => {
    if (score >= 70) return 'bg-emerald-500/20'
    if (score >= 50) return 'bg-yellow-500/20'
    return 'bg-rose-500/20'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">SENTIMENT</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Narrative Analysis</h1>
          <p className="mt-2 text-slate-400">
            Dominant narratives, theme tracking, and sentiment intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <MessageSquare className="h-4 w-4" />
            Full Report
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Target className="h-4 w-4" />
            Track Narratives
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Overall Sentiment"
          value={73}
          previousValue={71}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Active Narratives"
          value={186}
          previousValue={172}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Narrative Reach (M)"
          value={45.2}
          previousValue={42.8}
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Misinfo Detected"
          value={42}
          previousValue={48}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="narratives">Dominant Narratives</TabsTrigger>
          <TabsTrigger value="themes">Theme Analysis</TabsTrigger>
          <TabsTrigger value="misinformation">Misinformation</TabsTrigger>
          <TabsTrigger value="controversy">Controversy</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Narrative Analysis Overview" description="Sentiment trends and narrative distribution">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Trend</CardTitle>
                  <CardDescription>12-month sentiment trajectory</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={sentimentTrendData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'positive', name: 'Positive %', color: CHART_COLORS.emerald },
                      { dataKey: 'neutral', name: 'Neutral %', color: CHART_COLORS.platinum },
                      { dataKey: 'negative', name: 'Negative %', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Narrative Velocity</CardTitle>
                    <CardDescription>Spread speed and virality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={velocityData}
                      xAxisKey="week"
                      areas={[
                        { dataKey: 'velocity', name: 'Velocity', color: CHART_COLORS.gold },
                        { dataKey: 'virality', name: 'Virality', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Narrative Themes</CardTitle>
                    <CardDescription>By volume and sentiment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={themesData}
                      xAxisKey="theme"
                      bars={[
                        { dataKey: 'narratives', name: 'Narratives', color: CHART_COLORS.gold },
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
                  <CardTitle className="text-lg">Platform Performance</CardTitle>
                  <CardDescription>Narrative engagement by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {platformNarrativesData.map((platform, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Globe className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{platform.platform}</p>
                              <p className="text-sm text-slate-400">Dominant: {platform.dominant}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gold">{platform.engagement}%</div>
                              <p className="text-xs text-slate-400">Engagement</p>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${getSentimentColor(platform.sentiment)}`}>
                                {platform.sentiment}%
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
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Dominant Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Dominant Narratives" description="Key narratives shaping public perception">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Narratives by Volume</CardTitle>
                  <CardDescription>Most discussed topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {narrativesData.map((narrative, index) => (
                        <div key={index} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${getSentimentBg(narrative.sentiment)}`}>
                                <MessageSquare className={`h-4 w-4 ${getSentimentColor(narrative.sentiment)}`} />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-200">{narrative.narrative}</p>
                                <p className="text-sm text-slate-400">{narrative.volume.toLocaleString()} mentions</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {narrative.trend === 'up' ? (
                                  <TrendingUp className="h-3 w-3 mr-1 text-emerald" />
                                ) : (
                                  <Clock className="h-3 w-3 mr-1 text-slate-400" />
                                )}
                                {narrative.trend}
                              </Badge>
                              <Badge variant={narrative.impact === 'high' ? 'default' : 'outline'} className="text-xs">
                                {narrative.impact} impact
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-400">Sentiment Score</span>
                            <div className="flex items-center gap-2">
                              <Progress value={narrative.sentiment} className="h-2 w-24" />
                              <span className={`text-sm font-bold ${getSentimentColor(narrative.sentiment)}`}>
                                {narrative.sentiment}%
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emerging Narratives</CardTitle>
                    <CardDescription>Newly detected topics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { narrative: 'UAE Space Program', growth: 45, sentiment: 88 },
                        { narrative: 'AI Regulation Framework', growth: 38, sentiment: 75 },
                        { narrative: 'Green Hydrogen Initiative', growth: 32, sentiment: 82 },
                        { narrative: 'Cultural Diplomacy', growth: 28, sentiment: 79 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Lightbulb className="h-5 w-5 text-gold" />
                            <span className="text-sm font-medium text-slate-200">{item.narrative}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs text-emerald">+{item.growth}%</Badge>
                            <span className={`text-sm font-bold ${getSentimentColor(item.sentiment)}`}>{item.sentiment}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Declining Narratives</CardTitle>
                    <CardDescription>Topics losing traction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { narrative: 'Oil Dependency', decline: -15, sentiment: 52 },
                        { narrative: 'Labor Concerns', decline: -12, sentiment: 45 },
                        { narrative: 'Housing Costs', decline: -8, sentiment: 48 },
                        { narrative: 'Traffic Issues', decline: -5, sentiment: 55 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <TrendingDown className="h-5 w-5 text-rose" />
                            <span className="text-sm font-medium text-slate-200">{item.narrative}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs text-rose">{item.decline}%</Badge>
                            <span className={`text-sm font-bold ${getSentimentColor(item.sentiment)}`}>{item.sentiment}%</span>
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

        {/* Theme Analysis Tab */}
        <TabsContent value="themes" className="space-y-6">
          <GlassPanel title="Theme Analysis" description="Cross-cutting thematic trends">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Narrative Themes</CardTitle>
                  <CardDescription>Volume and sentiment by theme</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={themesData}
                    xAxisKey="theme"
                    bars={[
                      { dataKey: 'narratives', name: 'Narratives', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Theme Sentiment Scores</CardTitle>
                    <CardDescription>By thematic area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={themesData.map((t, i) => ({
                        name: t.theme,
                        value: t.sentiment,
                        color: Object.values(CHART_COLORS)[i % 8],
                      }))}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Theme Evolution</CardTitle>
                    <CardDescription>Monthly theme shifts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={[
                        { month: 'Jan', economy: 75, tech: 80, tourism: 70 },
                        { month: 'Feb', economy: 77, tech: 82, tourism: 72 },
                        { month: 'Mar', economy: 78, tech: 85, tourism: 74 },
                        { month: 'Apr', economy: 76, tech: 84, tourism: 73 },
                        { month: 'May', economy: 80, tech: 86, tourism: 76 },
                        { month: 'Jun', economy: 82, tech: 88, tourism: 79 },
                      ]}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'economy', name: 'Economy', color: CHART_COLORS.gold },
                        { dataKey: 'tech', name: 'Tech', color: CHART_COLORS.navy },
                        { dataKey: 'tourism', name: 'Tourism', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Cross-Theme Analysis</CardTitle>
                  <CardDescription>Narratives spanning multiple themes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Target className="mx-auto h-6 w-6 text-gold mb-2" />
                      <p className="text-xs text-slate-400">Overlapping Themes</p>
                      <p className="text-xl font-bold text-gold">42</p>
                      <span className="text-xs text-emerald">+8 this month</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <MessageSquare className="mx-auto h-6 w-6 text-navy mb-2" />
                      <p className="text-xs text-slate-400">Hybrid Narratives</p>
                      <p className="text-xl font-bold text-navy">18</p>
                      <span className="text-xs text-emerald">+3 this month</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Users className="mx-auto h-6 w-6 text-emerald mb-2" />
                      <p className="text-xs text-slate-400">Audience Segments</p>
                      <p className="text-xl font-bold text-emerald">24</p>
                      <span className="text-xs text-emerald">Stable</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Misinformation Tab */}
        <TabsContent value="misinformation" className="space-y-6">
          <GlassPanel title="Misinformation Tracking" description="False narrative detection and response">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Misinformation by Topic</CardTitle>
                  <CardDescription>Prevalence and sentiment impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={misinformationData}
                    xAxisKey="topic"
                    bars={[
                      { dataKey: 'prevalence', name: 'Prevalence %', color: CHART_COLORS.rose },
                      { dataKey: 'sentimentImpact', name: 'Sentiment Impact', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Detection Status</CardTitle>
                    <CardDescription>Misinformation tracking status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { status: 'Addressed', count: 28, color: 'emerald' },
                        { status: 'Monitored', count: 12, color: 'yellow' },
                        { status: 'Under Investigation', count: 5, color: 'rose' },
                        { status: 'Resolved', count: 22, color: 'navy' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`h-3 w-3 rounded-full bg-${item.color}-500`} />
                            <span className="text-sm text-slate-300">{item.status}</span>
                          </div>
                          <span className="text-lg font-bold text-slate-200">{item.count}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Response Effectiveness</CardTitle>
                    <CardDescription>Counter-narrative impact</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { metric: 'Avg Response Time', value: '4.2 hours', change: '-35%' },
                        { metric: 'Reach Restoration', value: '78%', change: '+12%' },
                        { metric: 'Sentiment Recovery', value: '85%', change: '+8%' },
                        { metric: 'Engagement Lift', value: '+22%', change: '+5%' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm font-medium text-slate-200">{item.metric}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-gold">{item.value}</span>
                            <Badge variant="outline" className="text-xs text-emerald">{item.change}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Counter-Narrative Campaigns</CardTitle>
                  <CardDescription>Active response initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {[
                        { topic: 'Economic Policy Clarification', status: 'Active', reach: 2.5 },
                        { topic: 'Social Media Guidelines', status: 'Active', reach: 4.2 },
                        { topic: 'Environmental Claims Response', status: 'Planned', reach: 1.8 },
                        { topic: 'Cultural Context Education', status: 'Active', reach: 3.1 },
                      ].map((campaign, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-gold" />
                            <span className="text-sm font-medium text-slate-200">{campaign.topic}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-slate-400">{campaign.reach}M reach</span>
                            <Badge variant={campaign.status === 'Active' ? 'default' : 'outline'} className="text-xs">
                              {campaign.status}
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

        {/* Controversy Tab */}
        <TabsContent value="controversy" className="space-y-6">
          <GlassPanel title="Controversy & Debate Analysis" description="Controversial topics and debate angles">
            <div className="space-y-6">
              {/* Controversy Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Total Controversies"
                  value={controversyData.overview.totalTopics}
                  icon={<AlertTriangle className="h-6 w-6" />}
                  gradient="gold"
                  status="warning"
                />
                <MetricCard
                  title="Avg Sentiment"
                  value={(controversyData.overview.averageSentiment * 100).toFixed(0)}
                  unit="%"
                  icon={<Scale className="h-6 w-6" />}
                  gradient="rose"
                  status="critical"
                />
                <MetricCard
                  title="Critical Issues"
                  value={controversyData.overview.criticalCount}
                  icon={<Flame className="h--6 w-6" />}
                  gradient="rose"
                  status="critical"
                />
                <MetricCard
                  title="Red Alerts"
                  value={controversyData.overview.redAlerts}
                  icon={<AlertCircle className="h-6 w-6" />}
                  gradient="rose"
                  status="critical"
                />
              </div>

              {/* Controversy Topics Grid */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Controversy Topics</CardTitle>
                  <CardDescription>11 controversial topics ranked by sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {controversyData.topics.map((topic, index) => (
                        <div key={index} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                topic.alertLevel === 'RED' ? 'bg-rose-500/20' :
                                topic.alertLevel === 'ORANGE' ? 'bg-orange-500/20' :
                                topic.alertLevel === 'YELLOW' ? 'bg-yellow-500/20' :
                                'bg-emerald-500/20'
                              }`}>
                                {topic.alertLevel === 'RED' ? <Flame className="h-4 w-4 text-rose" /> :
                                 topic.alertLevel === 'ORANGE' ? <AlertTriangle className="h-4 w-4 text-orange" /> :
                                 topic.alertLevel === 'YELLOW' ? <Eye className="h-4 w-4 text-yellow" /> :
                                 <CheckCircle className="h-4 w-4 text-emerald" />}
                              </div>
                              <div>
                                <p className="font-semibold text-slate-200">{topic.title}</p>
                                <p className="text-sm text-slate-400">{topic.sentiment.volume.toLocaleString()} mentions</p>
                              </div>
                            </div>
                            <Badge variant={topic.alertLevel === 'RED' ? 'destructive' : 'outline'} className="text-xs">
                              {topic.alertLevel}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-300 mb-3 line-clamp-2">{topic.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-400">Sentiment Score</span>
                            <div className="flex items-center gap-2">
                              <Progress
                                value={(topic.sentimentScore + 1) * 50}
                                className="h-2 w-24"
                              />
                              <span className={`text-sm font-bold ${
                                topic.sentimentScore >= 0 ? 'text-emerald' : 'text-rose'
                              }`}>
                                {topic.sentimentScore >= 0 ? '+' : ''}{(topic.sentimentScore * 100).toFixed(0)}%
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {topic.keyDrivers.slice(0, 3).map((driver, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs text-slate-400">
                                {driver}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Alert Level Distribution */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Alert Level Distribution</CardTitle>
                    <CardDescription>Controversy severity breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={[
                        { name: 'Red', value: controversyData.overview.redAlerts, color: CHART_COLORS.rose },
                        { name: 'Orange', value: controversyData.overview.orangeAlerts, color: '#f97316' },
                        { name: 'Yellow', value: controversyData.overview.yellowAlerts, color: CHART_COLORS.gold },
                        { name: 'Green', value: controversyData.overview.greenAlerts, color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Severity Distribution</CardTitle>
                    <CardDescription>Controversy count by severity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { name: 'Critical', value: controversyData.overview.criticalCount, color: CHART_COLORS.rose },
                        { name: 'High', value: controversyData.overview.highCount, color: '#f97316' },
                        { name: 'Medium', value: controversyData.overview.mediumCount, color: CHART_COLORS.gold },
                        { name: 'Low', value: controversyData.overview.lowCount, color: CHART_COLORS.emerald },
                      ]}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Count', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* KPI Sections */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Human Rights KPIs</CardTitle>
                    <CardDescription>Critical human rights metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {controversyData.humanRightsKPIs.map((kpi, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Shield className="h-4 w-4 text-rose" />
                            <span className="text-sm font-medium text-slate-200">{kpi.kpi}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gold">{kpi.currentValue}</span>
                            <Badge variant={kpi.status === 'CRITICAL' ? 'destructive' : 'outline'} className="text-xs">
                              {kpi.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Climate KPIs</CardTitle>
                    <CardDescription>Climate leadership metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {controversyData.climateKPIs.map((kpi, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Flame className="h-4 w-4 text-orange" />
                            <span className="text-sm font-medium text-slate-200">{kpi.kpi}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gold">{kpi.currentValue}</span>
                            <Badge variant={kpi.status === 'CRITICAL' ? 'destructive' : 'outline'} className="text-xs">
                              {kpi.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Most Controversial Topic Details</CardTitle>
                  <CardDescription>Surveillance - {surveillanceData?.description?.slice(0, 100)}...</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-lg bg-rose-500/10 p-4 text-center border border-rose-500/20">
                        <AlertTriangle className="mx-auto h-6 w-6 text-rose mb-2" />
                        <p className="text-xs text-slate-400">Sentiment Score</p>
                        <p className="text-xl font-bold text-rose">-90%</p>
                      </div>
                      <div className="rounded-lg bg-rose-500/10 p-4 text-center border border-rose-500/20">
                        <Eye className="mx-auto h-6 w-6 text-rose mb-2" />
                        <p className="text-xs text-slate-400">Alert Level</p>
                        <p className="text-xl font-bold text-rose">RED</p>
                      </div>
                      <div className="rounded-lg bg-rose-500/10 p-4 text-center border border-rose-500/20">
                        <Globe className="mx-auto h-6 w-6 text-rose mb-2" />
                        <p className="text-xs text-slate-400">UAE Relevance</p>
                        <p className="text-xl font-bold text-rose">96/100</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-300">Key Debate Angles</h4>
                      {surveillanceData?.debateAngles?.map((angle, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/30 p-3">
                          <span className="text-sm text-slate-300">{angle.angle}</span>
                          <Badge variant="outline" className="text-xs">
                            {angle.evidenceStrength}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
