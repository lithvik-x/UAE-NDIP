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
  MapPin,
  Globe,
  TrendingUp,
  TrendingDown,
  Users,
  MessageSquare,
  Star,
  Shield,
  Building,
  Flag,
} from 'lucide-react'

export default function RegionalSentimentPage() {
  // Regional sentiment data
  const sentimentByRegionData = [
    { region: 'Abu Dhabi', sentiment: 82, volume: 12500, trend: 'up' },
    { region: 'Dubai', sentiment: 85, volume: 18200, trend: 'up' },
    { region: 'Sharjah', sentiment: 78, volume: 4200, trend: 'stable' },
    { region: 'RAK', sentiment: 74, volume: 1800, trend: 'up' },
    { region: 'Fujairah', sentiment: 72, volume: 850, trend: 'stable' },
    { region: 'Ajman', sentiment: 70, volume: 1200, trend: 'stable' },
    { region: 'Umm Al Quwain', sentiment: 68, volume: 650, trend: 'down' },
  ]

  // Sentiment trend by emirate
  const trendData = [
    { month: 'Jan', abuDhabi: 78, dubai: 80, sharjah: 74 },
    { month: 'Feb', abuDhabi: 79, dubai: 81, sharjah: 75 },
    { month: 'Mar', abuDhabi: 80, dubai: 82, sharjah: 76 },
    { month: 'Apr', abuDhabi: 79, dubai: 81, sharjah: 75 },
    { month: 'May', abuDhabi: 81, dubai: 83, sharjah: 77 },
    { month: 'Jun', abuDhabi: 82, dubai: 85, sharjah: 78 },
    { month: 'Jul', abuDhabi: 83, dubai: 86, sharjah: 79 },
    { month: 'Aug', abuDhabi: 82, dubai: 85, sharjah: 78 },
    { month: 'Sep', abuDhabi: 84, dubai: 87, sharjah: 80 },
    { month: 'Oct', abuDhabi: 85, dubai: 88, sharjah: 81 },
    { month: 'Nov', abuDhabi: 84, dubai: 87, sharjah: 80 },
    { month: 'Dec', abuDhabi: 86, dubai: 89, sharjah: 82 },
  ]

  // Key topics by region
  const regionalTopicsData = [
    { region: 'Abu Dhabi', topics: ['Nuclear Energy', 'Cultural Heritage', 'AI Investment'], sentiment: 82 },
    { region: 'Dubai', topics: ['Tourism', 'Real Estate', 'Business Hub'], sentiment: 85 },
    { region: 'Sharjah', topics: ['Arts & Culture', 'Education', 'Heritage'], sentiment: 78 },
    { region: 'RAK', topics: ['Tourism Growth', 'Free Trade', 'Manufacturing'], sentiment: 74 },
  ]

  // Emirate comparison
  const comparisonData = [
    { metric: 'GDP Contribution', abuDhabi: 55, dubai: 32, sharjah: 8, others: 5 },
    { metric: 'Population Share', abuDhabi: 33, dubai: 42, sharjah: 12, others: 13 },
    { metric: 'Tourism Receipts', abuDhabi: 35, dubai: 58, sharjah: 4, others: 3 },
    { metric: 'Infrastructure', abuDhabi: 78, dubai: 85, sharjah: 65, others: 55 },
  ]

  // Urban vs Rural sentiment
  const urbanRuralData = [
    { area: 'Urban Centers', sentiment: 82, volume: 28000, color: CHART_COLORS.gold },
    { area: 'Suburban Areas', sentiment: 76, volume: 8500, color: CHART_COLORS.navy },
    { area: 'Rural/Remote', sentiment: 68, volume: 2200, color: CHART_COLORS.emerald },
  ]

  // National initiatives by region
  const initiativesByRegionData = [
    { region: 'Abu Dhabi', initiatives: 45, participation: 78 },
    { region: 'Dubai', initiatives: 62, participation: 82 },
    { region: 'Sharjah', initiatives: 28, participation: 72 },
    { region: 'RAK', initiatives: 18, participation: 68 },
    { region: 'Northern Emirates', initiatives: 22, participation: 62 },
  ]

  // GCC comparison
  const gccComparisonData = [
    { country: 'UAE', sentiment: 82, change: '+3' },
    { country: 'Saudi Arabia', sentiment: 78, change: '+2' },
    { country: 'Qatar', sentiment: 80, change: '+1' },
    { country: 'Kuwait', sentiment: 72, change: '+2' },
    { country: 'Bahrain', sentiment: 74, change: '+1' },
    { country: 'Oman', sentiment: 76, change: '+2' },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400'
    if (score >= 70) return 'text-yellow-400'
    return 'text-rose-400'
  }

  const getSentimentBg = (score: number) => {
    if (score >= 80) return 'bg-emerald-500/20'
    if (score >= 70) return 'bg-yellow-500/20'
    return 'bg-rose-500/20'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">SENTIMENT</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Regional Sentiment</h1>
          <p className="mt-2 text-slate-400">
            Sentiment analysis by emirate, GCC comparison, and regional dynamics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <MapPin className="h-4 w-4" />
            Regional Map
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Globe className="h-4 w-4" />
            GCC Comparison
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="National Sentiment"
          value={82}
          previousValue={80}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Best Performing"
          value="Dubai"
          previousValue="Abu Dhabi"
          icon={<Star className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Regional Coverage"
          value={7}
          previousValue={7}
          icon={<MapPin className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Need Attention"
          value="UAQ"
          previousValue="Fujairah"
          icon={<TrendingDown className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="emirates">Emirates</TabsTrigger>
          <TabsTrigger value="urban">Urban/Rural</TabsTrigger>
          <TabsTrigger value="gcc">GCC Comparison</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Regional Sentiment Overview" description="UAE-wide sentiment distribution">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Emirate</CardTitle>
                  <CardDescription>12-month average sentiment scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={trendData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'abuDhabi', name: 'Abu Dhabi', color: CHART_COLORS.gold },
                      { dataKey: 'dubai', name: 'Dubai', color: CHART_COLORS.navy },
                      { dataKey: 'sharjah', name: 'Sharjah', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>By emirate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={sentimentByRegionData}
                      xAxisKey="region"
                      bars={[
                        { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Discussion Volume</CardTitle>
                    <CardDescription>By emirate (thousands)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentByRegionData.map((r, i) => ({
                        name: r.region,
                        value: r.volume,
                        color: Object.values(CHART_COLORS)[i],
                      }))}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Topics by Region</CardTitle>
                  <CardDescription>Dominant discussion topics per emirate</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      {regionalTopicsData.map((region, index) => (
                        <div key={index} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${getSentimentBg(region.sentiment)}`}>
                                <MapPin className={`h-4 w-4 ${getSentimentColor(region.sentiment)}`} />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-200">{region.region}</p>
                                <p className="text-sm text-slate-400">Sentiment: {region.sentiment}%</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {region.sentiment > 80 ? 'Strong' : region.sentiment > 70 ? 'Stable' : 'Developing'}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {region.topics.map((topic, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{topic}</Badge>
                            ))}
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

        {/* Emirates Tab */}
        <TabsContent value="emirates" className="space-y-6">
          <GlassPanel title="Emirate Analysis" description="Detailed sentiment by emirate">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emirate Comparison</CardTitle>
                  <CardDescription>Key metrics across emirates</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={comparisonData}
                    xAxisKey="metric"
                    bars={[
                      { dataKey: 'abuDhabi', name: 'Abu Dhabi', color: CHART_COLORS.gold },
                      { dataKey: 'dubai', name: 'Dubai', color: CHART_COLORS.navy },
                      { dataKey: 'sharjah', name: 'Sharjah', color: CHART_COLORS.emerald },
                      { dataKey: 'others', name: 'Others', color: CHART_COLORS.platinum },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Abu Dhabi</CardTitle>
                    <CardDescription>Capital region analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-300">Sentiment Score</span>
                        <span className="text-lg font-bold text-gold">86%</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-300">Key Topics</span>
                        <span className="text-sm text-gold">Nuclear, Culture, AI</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-300">Trend</span>
                        <Badge variant="outline" className="text-xs text-emerald">+4%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Dubai</CardTitle>
                    <CardDescription>Commercial hub analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-300">Sentiment Score</span>
                        <span className="text-lg font-bold text-navy">89%</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-300">Key Topics</span>
                        <span className="text-sm text-navy">Tourism, Business, Real Estate</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <span className="text-sm text-slate-300">Trend</span>
                        <Badge variant="outline" className="text-xs text-emerald">+5%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Initiatives by Region</CardTitle>
                  <CardDescription>National initiative participation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {initiativesByRegionData.map((region, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Building className="h-5 w-5 text-gold" />
                            <span className="text-sm font-medium text-slate-200">{region.region}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-slate-400">{region.initiatives} initiatives</span>
                            <div className="flex items-center gap-2">
                              <Progress value={region.participation} className="h-2 w-16" />
                              <span className="text-sm font-bold text-gold">{region.participation}%</span>
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

        {/* Urban/Rural Tab */}
        <TabsContent value="urban" className="space-y-6">
          <GlassPanel title="Urban vs Rural Analysis" description="Sentiment distribution by area type">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Urban vs Rural Sentiment</CardTitle>
                  <CardDescription>Comparison by area classification</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={urbanRuralData}
                    xAxisKey="area"
                    bars={[
                      { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Volume Distribution</CardTitle>
                    <CardDescription>Discussion volume by area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={urbanRuralData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Differentiators</CardTitle>
                    <CardDescription>What drives sentiment differences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { factor: 'Infrastructure Access', urban: 95, rural: 68 },
                        { factor: 'Economic Opportunity', urban: 88, rural: 62 },
                        { factor: 'Service Availability', urban: 92, rural: 58 },
                        { factor: 'Community Cohesion', urban: 72, rural: 85 },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-300">{item.factor}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex-1 flex items-center gap-2">
                              <span className="text-xs text-slate-400 w-12">Urban</span>
                              <Progress value={item.urban} className="h-2 flex-1" />
                              <span className="text-xs font-bold text-gold">{item.urban}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex-1 flex items-center gap-2">
                              <span className="text-xs text-slate-400 w-12">Rural</span>
                              <Progress value={item.rural} className="h-2 flex-1" />
                              <span className="text-xs font-bold text-emerald">{item.rural}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Regional Development Initiatives</CardTitle>
                  <CardDescription>Focus areas for sentiment improvement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <MapPin className="mx-auto h-6 w-6 text-gold mb-2" />
                      <p className="text-xs text-slate-400">Infrastructure Projects</p>
                      <p className="text-xl font-bold text-gold">24</p>
                      <span className="text-xs text-emerald">Northern Emirates</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Building className="mx-auto h-6 w-6 text-navy mb-2" />
                      <p className="text-xs text-slate-400">Service Expansion</p>
                      <p className="text-xl font-bold text-navy">18</p>
                      <span className="text-xs text-emerald">Rural Areas</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Users className="mx-auto h-6 w-6 text-emerald mb-2" />
                      <p className="text-xs text-slate-400">Job Creation</p>
                      <p className="text-xl font-bold text-emerald">15K</p>
                      <span className="text-xs text-emerald">Targeted Regions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* GCC Comparison Tab */}
        <TabsContent value="gcc" className="space-y-6">
          <GlassPanel title="GCC Comparison" description="Sentiment comparison with Gulf allies">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">GCC Sentiment Scores</CardTitle>
                  <CardDescription>Regional comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={gccComparisonData}
                    xAxisKey="country"
                    bars={[
                      { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Position</CardTitle>
                    <CardDescription>Leading indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { metric: 'Overall Sentiment', uae: 82, gcc: 76 },
                        { metric: 'Economic Confidence', uae: 85, gcc: 78 },
                        { metric: 'Tourism Perception', uae: 88, gcc: 72 },
                        { metric: 'Infrastructure', uae: 90, gcc: 80 },
                        { metric: 'Business Friendly', uae: 86, gcc: 74 },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-300">{item.metric}</span>
                            <span className="text-xs text-emerald">+{item.uae - item.gcc}</span>
                          </div>
                          <div className="relative">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-400 w-10">UAE</span>
                              <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-gold rounded-full" style={{ width: `${item.uae}%` }} />
                              </div>
                              <span className="text-xs font-bold text-gold w-8">{item.uae}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-slate-400 w-10">GCC</span>
                              <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-platinum rounded-full" style={{ width: `${item.gcc}%` }} />
                              </div>
                              <span className="text-xs font-bold text-platinum w-8">{item.gcc}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Regional Trends</CardTitle>
                    <CardDescription>Monthly changes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={[
                        { month: 'Jul', uae: 80, saudi: 76, qatar: 78 },
                        { month: 'Aug', uae: 81, saudi: 77, qatar: 79 },
                        { month: 'Sep', uae: 82, saudi: 77, qatar: 79 },
                        { month: 'Oct', uae: 83, saudi: 78, qatar: 80 },
                        { month: 'Nov', uae: 82, saudi: 78, qatar: 80 },
                        { month: 'Dec', uae: 84, saudi: 78, qatar: 80 },
                      ]}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'uae', name: 'UAE', color: CHART_COLORS.gold },
                        { dataKey: 'saudi', name: 'Saudi', color: CHART_COLORS.navy },
                        { dataKey: 'qatar', name: 'Qatar', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Gulf Relations Index</CardTitle>
                  <CardDescription>Cross-border sentiment indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Flag className="mx-auto h-6 w-6 text-gold mb-2" />
                      <p className="text-xs text-slate-400">UAE Rank</p>
                      <p className="text-xl font-bold text-gold">#1</p>
                      <span className="text-xs text-emerald">GCC</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <TrendingUp className="mx-auto h-6 w-6 text-emerald mb-2" />
                      <p className="text-xs text-slate-400">Momentum</p>
                      <p className="text-xl font-bold text-emerald">+3</p>
                      <span className="text-xs text-emerald">Points</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Shield className="mx-auto h-6 w-6 text-navy mb-2" />
                      <p className="text-xs text-slate-400">Stability</p>
                      <p className="text-xl font-bold text-navy">92%</p>
                      <span className="text-xs text-emerald">Index</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Star className="mx-auto h-6 w-6 text-platinum mb-2" />
                      <p className="text-xs text-slate-400">Global Rank</p>
                      <p className="text-xl font-bold text-platinum">Top 5</p>
                      <span className="text-xs text-emerald">Worldwide</span>
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
