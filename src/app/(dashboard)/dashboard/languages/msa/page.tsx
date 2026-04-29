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
  BookOpen,
  Globe,
  TrendingUp,
  MessageSquare,
  Eye,
  Search,
  Users,
  Star,
} from 'lucide-react'
import {
  useMSAQqueriesData,
} from '@/lib/data-loader'

export default function MSALanguagePage() {
  const { data } = useMSAQqueriesData()

  // MSA Query volume trend
  const msaVolumeTrend = [
    { month: 'Jan', volume: 42, growth: 2.1 },
    { month: 'Feb', volume: 44, growth: 4.8 },
    { month: 'Mar', volume: 45, growth: 2.3 },
    { month: 'Apr', volume: 46, growth: 2.2 },
    { month: 'May', volume: 47, growth: 2.2 },
    { month: 'Jun', volume: 46, growth: -2.1 },
    { month: 'Jul', volume: 47, growth: 2.2 },
    { month: 'Aug', volume: 48, growth: 2.1 },
    { month: 'Sep', volume: 47, growth: -2.1 },
    { month: 'Oct', volume: 48, growth: 2.1 },
    { month: 'Nov', volume: 47, growth: -2.1 },
    { month: 'Dec', volume: 47, growth: 0 },
  ]

  // Sentiment distribution
  const sentimentData = [
    { name: 'Positive', value: 82, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 10, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 8, color: CHART_COLORS.danger },
  ]

  // Source credibility distribution
  const sourceCredibility = [
    { tier: 'Tier 1 (Government)', count: 15, color: CHART_COLORS.gold },
    { tier: 'Tier 2 (Established)', count: 22, color: CHART_COLORS.navy },
    { tier: 'Tier 3 (Media)', count: 35, color: CHART_COLORS.platinum },
    { tier: 'Tier 4 (Social)', count: 28, color: CHART_COLORS.teal },
  ]

  // Top government terms
  const governmentTerms = [
    { term: 'UAE government', volume: 8200000, sentiment: 88 },
    { term: 'MBZ leadership', volume: 6100000, sentiment: 92 },
    { term: 'UAE Vision 2030', volume: 4200000, sentiment: 85 },
    { term: 'UAE foreign policy', volume: 3500000, sentiment: 82 },
    { term: 'UAE defense capabilities', volume: 3100000, sentiment: 78 },
  ]

  // Top cultural terms
  const culturalTerms = [
    { term: 'Dubai tourism', volume: 5400000, sentiment: 91 },
    { term: 'Abu Dhabi investment', volume: 4900000, sentiment: 86 },
    { term: 'COP28 UAE', volume: 3800000, sentiment: 72 },
    { term: 'Arab unity summit', volume: 2900000, sentiment: 68 },
  ]

  // Regional reach
  const regionalReach = [
    { region: 'UAE Domestic', reach: 95, color: CHART_COLORS.gold },
    { region: 'GCC Countries', reach: 87, color: CHART_COLORS.navy },
    { region: 'Arab World', reach: 82, color: CHART_COLORS.platinum },
    { region: 'Global Arabic Speakers', reach: 65, color: CHART_COLORS.teal },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">MSA</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Modern Standard Arabic</h1>
          <p className="mt-2 text-slate-400">
            Pan-Arab media queries, formal communications, and official content analysis
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Eye className="h-4 w-4" />
            Monitor MSA
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <BookOpen className="h-4 w-4" />
            Track Terms
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="MSA Query Volume"
          value={(data?.queryVolume / 1000000).toFixed(0) + 'M'}
          previousValue={45}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={data?.sentiment?.overall || 82}
          previousValue={80}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Top Sources"
          value={data?.sources?.length || 47}
          previousValue={45}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Credibility Score"
          value={data?.credibility?.score || 88}
          previousValue={85}
          icon={<Star className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="terms">Top Search Terms</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="sources">Source Intelligence</TabsTrigger>
          <TabsTrigger value="trends">Volume Trends</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="MSA Language Overview" description="Modern Standard Arabic query intelligence">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Query Volume Distribution</CardTitle>
                    <CardDescription>Monthly MSA search queries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={msaVolumeTrend}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Breakdown</CardTitle>
                    <CardDescription>Positive, neutral, and negative queries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Regional Reach</CardTitle>
                  <CardDescription>MSA content penetration by region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regionalReach.map((region, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-200">{region.region}</span>
                          <span className="text-gold">{region.reach}%</span>
                        </div>
                        <Progress value={region.reach} className="h-3" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Top Search Terms Tab */}
        <TabsContent value="terms" className="space-y-6">
          <GlassPanel title="MSA Top Search Terms" description="High-volume Modern Standard Arabic search queries">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Government & Policy Terms</CardTitle>
                  <CardDescription>Official and governance-related searches</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {governmentTerms.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Search className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{item.term}</p>
                              <p className="text-sm text-slate-400">MSA Arabic</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-slate-200">
                                {(item.volume / 1000000).toFixed(1)}M
                              </div>
                              <p className="text-xs text-slate-400">Volume</p>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${getSentimentColor(item.sentiment)}`}>
                                {item.sentiment}%
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

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Culture & Tourism Terms</CardTitle>
                  <CardDescription>Tourism and cultural content searches</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {culturalTerms.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                            <Globe className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{item.term}</p>
                            <p className="text-sm text-slate-400">MSA Arabic</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-lg font-bold text-slate-200">
                              {(item.volume / 1000000).toFixed(1)}M
                            </div>
                            <p className="text-xs text-slate-400">Volume</p>
                          </div>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${getSentimentColor(item.sentiment)}`}>
                              {item.sentiment}%
                            </div>
                            <p className="text-xs text-slate-400">Sentiment</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="MSA Sentiment Analysis" description="Deep sentiment breakdown for Modern Standard Arabic content">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Overall Sentiment</CardTitle>
                    <CardDescription>MSA content sentiment distribution</CardDescription>
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
                    <CardTitle className="text-lg">Sentiment Trend</CardTitle>
                    <CardDescription>12-month sentiment trajectory</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={[
                        { month: 'Jan', sentiment: 78 },
                        { month: 'Feb', sentiment: 80 },
                        { month: 'Mar', sentiment: 82 },
                        { month: 'Apr', sentiment: 81 },
                        { month: 'May', sentiment: 83 },
                        { month: 'Jun', sentiment: 80 },
                        { month: 'Jul', sentiment: 82 },
                        { month: 'Aug', sentiment: 84 },
                        { month: 'Sep', sentiment: 82 },
                        { month: 'Oct', sentiment: 83 },
                        { month: 'Nov', sentiment: 81 },
                        { month: 'Dec', sentiment: 82 },
                      ]}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'sentiment', name: 'Sentiment Score', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Topic Sentiment Breakdown</CardTitle>
                  <CardDescription>Sentiment by search term category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-400">+12.4</div>
                      <p className="text-sm text-slate-400 mt-1">Government Terms</p>
                      <Badge variant="success" className="mt-2">Positive</Badge>
                    </div>
                    <div className="rounded-lg border border-gold-700/50 bg-gold-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-gold-400">+8.2</div>
                      <p className="text-sm text-slate-400 mt-1">Tourism Terms</p>
                      <Badge variant="gold" className="mt-2">Positive</Badge>
                    </div>
                    <div className="rounded-lg border border-platinum-700/50 bg-platinum-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-platinum-400">+2.1</div>
                      <p className="text-sm text-slate-400 mt-1">Economy Terms</p>
                      <Badge variant="platinum" className="mt-2">Neutral</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Source Intelligence Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="MSA Source Intelligence" description="Credibility and source tracking for Arabic content">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Distribution</CardTitle>
                  <CardDescription>MSA sources by tier classification</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sourceCredibility}
                    xAxisKey="tier"
                    bars={[
                      { dataKey: 'count', name: 'Source Count', color: CHART_COLORS.navy },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Tier-1 Sources</CardTitle>
                  <CardDescription>Government and official sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {(data?.sources || []).filter(s => s.tier === 2).slice(0, 5).map((source, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-gold-700/50 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Star className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{source.name}</p>
                              <p className="text-sm text-slate-400">Tier {source.tier} Source</p>
                            </div>
                          </div>
                          <Badge variant="gold" className="text-xs">Official</Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Credibility Metrics</CardTitle>
                  <CardDescription>Source reliability indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Overall Credibility Score</span>
                      <span className="text-2xl font-bold text-gold">{data?.credibility?.score || 88}/100</span>
                    </div>
                    <Progress value={data?.credibility?.score || 88} className="h-3" />
                    <div className="grid gap-4 sm:grid-cols-3 mt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-200">{data?.credibility?.sources || 47}</div>
                        <p className="text-xs text-slate-400">Verified Sources</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">82%</div>
                        <p className="text-xs text-slate-400">Verification Rate</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-platinum">Daily</div>
                        <p className="text-xs text-slate-400">Update Frequency</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Volume Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="MSA Volume Trends" description="Query volume analysis and growth patterns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Volume Trend</CardTitle>
                  <CardDescription>MSA query volume over 12 months (millions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={msaVolumeTrend}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Month-over-Month Growth</CardTitle>
                    <CardDescription>Growth rate percentage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={msaVolumeTrend}
                      xAxisKey="month"
                      bars={[
                        { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.emerald },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Peak Usage Times</CardTitle>
                    <CardDescription>High-volume query periods</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">National Events</span>
                          <Badge variant="gold">Peak</Badge>
                        </div>
                        <p className="text-sm text-slate-300 mt-2">UAE National Day, Anniversaries</p>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Government Announcements</span>
                          <Badge variant="navy">High</Badge>
                        </div>
                        <p className="text-sm text-slate-300 mt-2">Policy updates, Initiatives</p>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Regional Summits</span>
                          <Badge variant="platinum">Moderate</Badge>
                        </div>
                        <p className="text-sm text-slate-300 mt-2">Arab League, GCC meetings</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
