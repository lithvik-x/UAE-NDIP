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
  Home,
  Flag,
  TrendingUp,
  Users,
  Heart,
  Calendar,
  Eye,
  Star,
} from 'lucide-react'
import {
  useEmiratiArabicData,
} from '@/lib/data-loader'

export default function EmiratiArabicPage() {
  const { data } = useEmiratiArabicData()

  // Emirati dialect query volume trend
  const volumeTrend = [
    { month: 'Jan', volume: 7.2, growth: 1.4 },
    { month: 'Feb', volume: 7.5, growth: 4.2 },
    { month: 'Mar', volume: 7.8, growth: 4.0 },
    { month: 'Apr', volume: 8.0, growth: 2.6 },
    { month: 'May', volume: 8.2, growth: 2.5 },
    { month: 'Jun', volume: 8.0, growth: -2.4 },
    { month: 'Jul', volume: 8.1, growth: 1.3 },
    { month: 'Aug', volume: 8.2, growth: 1.2 },
    { month: 'Sep', volume: 8.3, growth: 1.2 },
    { month: 'Oct', volume: 8.4, growth: 1.2 },
    { month: 'Nov', volume: 8.2, growth: -2.4 },
    { month: 'Dec', volume: 8.2, growth: 0 },
  ]

  // Sentiment distribution
  const sentimentData = [
    { name: 'Positive', value: 78, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 15, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 7, color: CHART_COLORS.danger },
  ]

  // Heritage and culture terms
  const heritageTerms = [
    { term: 'UAE National Day celebrations', volume: 2100000, sentiment: 95, category: 'Heritage' },
    { term: 'Emirati heritage Al Ain', volume: 1400000, sentiment: 92, category: 'Heritage' },
    { term: 'Ras Al Khaimah nature reserves', volume: 820000, sentiment: 88, category: 'Nature' },
    { term: 'Emirati cuisine traditional', volume: 780000, sentiment: 90, category: 'Food' },
  ]

  // Local events terms
  const localEventsTerms = [
    { term: 'DubaiMall events', volume: 1800000, sentiment: 85, category: 'Events' },
    { term: 'Abu Dhabi Ramadan timings', volume: 1600000, sentiment: 75, category: 'Religious' },
    { term: 'Dubai restaurants iftar', volume: 1300000, sentiment: 88, category: 'Food' },
    { term: 'Sharjah cultural events', volume: 1100000, sentiment: 86, category: 'Culture' },
  ]

  // Practical terms
  const practicalTerms = [
    { term: 'UAE golden visa application', volume: 1200000, sentiment: 72, category: 'Services' },
    { term: 'UAE labour law 2025', volume: 890000, sentiment: 55, category: 'Legal' },
    { term: 'Ajman tourism attractions', volume: 950000, sentiment: 82, category: 'Tourism' },
  ]

  // Emirates distribution
  const emiratesData = [
    { name: 'Dubai', share: 35, color: CHART_COLORS.gold },
    { name: 'Abu Dhabi', share: 30, color: CHART_COLORS.navy },
    { name: 'Sharjah', share: 15, color: CHART_COLORS.platinum },
    { name: 'Ajman', share: 8, color: CHART_COLORS.teal },
    { name: 'Ras Al Khaimah', share: 7, color: CHART_COLORS.emerald },
    { name: 'Fujairah', share: 3, color: CHART_COLORS.cyan },
    { name: 'Umm Al Quwain', share: 2, color: CHART_COLORS.indigo },
  ]

  // Dialect features
  const dialectFeatures = [
    { feature: 'Emirati Vocabulary', usage: 85, trend: 'stable' },
    { feature: 'Traditional Expressions', usage: 72, trend: 'rising' },
    { feature: 'Gulf Arabic Influences', usage: 65, trend: 'stable' },
    { feature: 'MSA Borrowings', usage: 45, trend: 'declining' },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Heritage': return <Badge variant="gold" className="text-xs">{category}</Badge>
      case 'Events': return <Badge variant="navy" className="text-xs">{category}</Badge>
      case 'Culture': return <Badge variant="platinum" className="text-xs">{category}</Badge>
      case 'Food': return <Badge variant="emerald" className="text-xs">{category}</Badge>
      default: return <Badge variant="outline" className="text-xs">{category}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">EMIRATI DIALECT</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Emirati Arabic</h1>
          <p className="mt-2 text-slate-400">
            UAE local dialect intelligence, heritage content, and regional language patterns
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Eye className="h-4 w-4" />
            Monitor Dialect
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Heart className="h-4 w-4" />
            Track Heritage
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Dialectal Queries"
          value={(data?.queryVolume / 1000000).toFixed(1) + 'M'}
          previousValue={7.8}
          icon={<Home className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="UAE Speakers"
          value={(data?.uaeSpeakerPopulation / 1000000).toFixed(1) + 'M'}
          icon={<Users className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={data?.sentiment?.overall || 78}
          previousValue={76}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Credibility Score"
          value={data?.credibility?.score || 85}
          previousValue={83}
          icon={<Star className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="heritage">Heritage Terms</TabsTrigger>
          <TabsTrigger value="local">Local Events</TabsTrigger>
          <TabsTrigger value="geography">By Emirates</TabsTrigger>
          <TabsTrigger value="features">Dialect Features</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Emirati Arabic Overview" description="Local dialect query intelligence">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Query Volume Trend</CardTitle>
                    <CardDescription>Monthly Emirati dialect searches (millions)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={volumeTrend}
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
                    <CardDescription>Emirati content sentiment</CardDescription>
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
                  <CardTitle className="text-lg">Top Search Categories</CardTitle>
                  <CardDescription>Most searched Emirati dialect topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border border-gold-700/50 bg-gold-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-gold">2.1M</div>
                      <p className="text-sm text-slate-400 mt-1">National Day</p>
                    </div>
                    <div className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-navy">1.8M</div>
                      <p className="text-sm text-slate-400 mt-1">Dubai Events</p>
                    </div>
                    <div className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-400">1.6M</div>
                      <p className="text-sm text-slate-400 mt-1">Ramadan</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700/50 bg-platinum-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-platinum">1.4M</div>
                      <p className="text-sm text-slate-400 mt-1">Heritage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Heritage Terms Tab */}
        <TabsContent value="heritage" className="space-y-6">
          <GlassPanel title="Emirati Heritage Terms" description="Culture, tradition, and national identity content">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Heritage & Culture Searches</CardTitle>
                  <CardDescription>Traditional Emirati content</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {heritageTerms.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-gold-700/50 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Flag className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{item.term}</p>
                              {getCategoryBadge(item.category)}
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-slate-200">
                                {(item.volume / 1000000).toFixed(2)}M
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
                  <CardTitle className="text-lg">Heritage Sentiment by Topic</CardTitle>
                  <CardDescription>How Emiratis feel about heritage topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {heritageTerms.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-200">{item.term}</span>
                          <span className={`font-bold ${getSentimentColor(item.sentiment)}`}>{item.sentiment}%</span>
                        </div>
                        <Progress value={item.sentiment} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Local Events Tab */}
        <TabsContent value="local" className="space-y-6">
          <GlassPanel title="Local Events & Services" description="Community events, services, and practical information">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Events & Activities</CardTitle>
                  <CardDescription>Local event-related searches</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {localEventsTerms.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{item.term}</p>
                            {getCategoryBadge(item.category)}
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-lg font-bold text-slate-200">
                              {(item.volume / 1000000).toFixed(2)}M
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

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Practical Services</CardTitle>
                  <CardDescription>Government and utility services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {practicalTerms.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                            <Home className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{item.term}</p>
                            {getCategoryBadge(item.category)}
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-lg font-bold text-slate-200">
                              {(item.volume / 1000000).toFixed(2)}M
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

        {/* By Emirates Tab */}
        <TabsContent value="geography" className="space-y-6">
          <GlassPanel title="Emirati Dialect by Emirates" description="Regional distribution of dialect usage">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Share of Dialect Queries by Emirates</CardTitle>
                  <CardDescription>Regional breakdown of Emirati Arabic searches</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={emiratesData}
                    height={350}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Regional Sentiment</CardTitle>
                  <CardDescription>Dialect sentiment by emirate</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={emiratesData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'share', name: 'Share %', color: CHART_COLORS.gold },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emirate-Specific Terms</CardTitle>
                  <CardDescription>Unique search patterns by region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-gold-700/50 bg-gold-900/20 p-4">
                      <Badge variant="gold" className="mb-2">Dubai</Badge>
                      <p className="text-sm text-slate-300">DubaiMall, Burj Khalifa, Dubai Marina, Palm Jumeirah</p>
                    </div>
                    <div className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4">
                      <Badge variant="navy" className="mb-2">Abu Dhabi</Badge>
                      <p className="text-sm text-slate-300">Yas Island, Louvre Abu Dhabi, Corniche, Saadiyat</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700/50 bg-platinum-900/20 p-4">
                      <Badge variant="platinum" className="mb-2">Sharjah</Badge>
                      <p className="text-sm text-slate-300">Sharjah Art Museum, Blue Souk, Khor Fakkan</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Dialect Features Tab */}
        <TabsContent value="features" className="space-y-6">
          <GlassPanel title="Emirati Dialect Features" description="Linguistic characteristics and usage patterns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Dialect Feature Usage</CardTitle>
                  <CardDescription>Prevalence of dialect characteristics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dialectFeatures.map((feature, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-200">{feature.feature}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gold">{feature.usage}%</span>
                            {feature.trend === 'rising' && (
                              <TrendingUp className="h-4 w-4 text-emerald-400" />
                            )}
                            {feature.trend === 'declining' && (
                              <TrendingUp className="h-4 w-4 text-red-400 rotate-180" />
                            )}
                          </div>
                        </div>
                        <Progress value={feature.usage} className="h-3" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Unique Emirati Expressions</CardTitle>
                  <CardDescription>Distinctive dialect vocabulary</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-3">
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <p className="font-mono text-gold">"Ya raiti"</p>
                        <p className="text-sm text-slate-400 mt-1">My dear / dear friend</p>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <p className="font-mono text-gold">"Khalas"</p>
                        <p className="text-sm text-slate-400 mt-1">Done / finished / enough</p>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <p className="font-mono text-gold">"Yimkin"</p>
                        <p className="text-sm text-slate-400 mt-1">Maybe / perhaps</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <p className="font-mono text-gold">"Ahal"</p>
                        <p className="text-sm text-slate-400 mt-1">Family / relatives</p>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <p className="font-mono text-gold">"Wahan"</p>
                        <p className="text-sm text-slate-400 mt-1">Go / leave (dialect)</p>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <p className="font-mono text-gold">"Shu haalak"</p>
                        <p className="text-sm text-slate-400 mt-1">How are you? (Emirati)</p>
                      </div>
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
