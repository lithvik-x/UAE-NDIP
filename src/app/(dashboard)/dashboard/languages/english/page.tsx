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
  Globe,
  FileText,
  TrendingUp,
  MessageSquare,
  Eye,
  Users,
  BookOpen,
  Star,
} from 'lucide-react'
import {
  useEnglishQueriesData,
} from '@/lib/data-loader'

export default function EnglishLanguagePage() {
  const { data } = useEnglishQueriesData()

  // English is the dominant business language in UAE
  // English query volume - estimated from UAE internet penetration
  const englishVolume = 35000000 // Estimated 45% of 78M total queries

  // English Query volume trend
  const volumeTrend = [
    { month: 'Jan', volume: 32, growth: 2.5 },
    { month: 'Feb', volume: 33, growth: 3.1 },
    { month: 'Mar', volume: 34, growth: 3.0 },
    { month: 'Apr', volume: 34, growth: 0 },
    { month: 'May', volume: 35, growth: 2.9 },
    { month: 'Jun', volume: 34, growth: -2.9 },
    { month: 'Jul', volume: 35, growth: 2.9 },
    { month: 'Aug', volume: 35, growth: 0 },
    { month: 'Sep', volume: 36, growth: 2.9 },
    { month: 'Oct', volume: 36, growth: 0 },
    { month: 'Nov', volume: 35, growth: -2.8 },
    { month: 'Dec', volume: 35, growth: 0 },
  ]

  // Sentiment distribution - English content tends to be neutral to positive
  const sentimentData = [
    { name: 'Positive', value: 65, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 25, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 10, color: CHART_COLORS.danger },
  ]

  // Business & Finance terms
  const businessTerms = [
    { term: 'UAE economy 2025', volume: 5200000, sentiment: 78, category: 'Economy' },
    { term: 'Dubai stock market', volume: 3800000, sentiment: 72, category: 'Finance' },
    { term: 'Abu Dhabi investment', volume: 4100000, sentiment: 82, category: 'Finance' },
    { term: 'UAE business setup', volume: 3500000, sentiment: 75, category: 'Business' },
  ]

  // Tourism & Lifestyle terms
  const tourismTerms = [
    { term: 'Dubai tourism guide', volume: 5400000, sentiment: 88, category: 'Tourism' },
    { term: 'Dubai hotels booking', volume: 4200000, sentiment: 85, category: 'Tourism' },
    { term: 'UAE visa online', volume: 3800000, sentiment: 70, category: 'Services' },
    { term: 'Dubai restaurants', volume: 3200000, sentiment: 86, category: 'Lifestyle' },
  ]

  // Technology & Innovation terms
  const techTerms = [
    { term: 'Dubai AI strategy 2030', volume: 2800000, sentiment: 82, category: 'Tech' },
    { term: 'UAE 5G network', volume: 2400000, sentiment: 78, category: 'Tech' },
    { term: 'Smart Dubai services', volume: 2200000, sentiment: 80, category: 'Tech' },
    { term: 'UAE startup ecosystem', volume: 2000000, sentiment: 76, category: 'Business' },
  ]

  // Platform distribution for English content
  const platformData = [
    { platform: 'Google Search', share: 42, color: CHART_COLORS.navy },
    { platform: 'Social Media', share: 28, color: CHART_COLORS.cyan },
    { platform: 'News Sites', share: 18, color: CHART_COLORS.gold },
    { platform: 'Forums/Blogs', share: 12, color: CHART_COLORS.platinum },
  ]

  // Content categories
  const contentCategories = [
    { category: 'Business & Finance', percentage: 32, volume: 11.2 },
    { category: 'Tourism & Travel', percentage: 28, volume: 9.8 },
    { category: 'Technology', percentage: 18, volume: 6.3 },
    { category: 'Lifestyle & Entertainment', percentage: 14, volume: 4.9 },
    { category: 'Government & Legal', percentage: 8, volume: 2.8 },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Economy': return <Badge variant="navy" className="text-xs">{category}</Badge>
      case 'Finance': return <Badge variant="gold" className="text-xs">{category}</Badge>
      case 'Business': return <Badge variant="platinum" className="text-xs">{category}</Badge>
      case 'Tourism': return <Badge variant="emerald" className="text-xs">{category}</Badge>
      case 'Services': return <Badge variant="cyan" className="text-xs">{category}</Badge>
      case 'Tech': return <Badge variant="indigo" className="text-xs">{category}</Badge>
      default: return <Badge variant="outline" className="text-xs">{category}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy" className="mb-2">ENGLISH</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">English Language Media</h1>
          <p className="mt-2 text-slate-400">
            Business communications, expat communities, and international content in English
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Eye className="h-4 w-4" />
            Monitor English
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <FileText className="h-4 w-4" />
            Track Media
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="English Query Volume"
          value={(englishVolume / 1000000).toFixed(0) + 'M'}
          previousValue={34}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Expat Population"
          value="8.5M"
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Business Content %"
          value="32%"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value="75"
          previousValue={73}
          icon={<Star className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="business">Business Terms</TabsTrigger>
          <TabsTrigger value="tourism">Tourism & Lifestyle</TabsTrigger>
          <TabsTrigger value="tech">Technology</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="English Language Overview" description="English content intelligence in UAE digital space">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Query Volume Trend</CardTitle>
                    <CardDescription>Monthly English searches (millions)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={volumeTrend}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>English content sentiment breakdown</CardDescription>
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
                  <CardTitle className="text-lg">Content Categories</CardTitle>
                  <CardDescription>Distribution by topic area</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={contentCategories}
                    xAxisKey="category"
                    bars={[
                      { dataKey: 'percentage', name: 'Share %', color: CHART_COLORS.navy },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Business Terms Tab */}
        <TabsContent value="business" className="space-y-6">
          <GlassPanel title="Business & Finance Terms" description="English searches related to economy and business">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Business Searches</CardTitle>
                  <CardDescription>Finance and economy related queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {businessTerms.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                              <TrendingUp className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{item.term}</p>
                              {getCategoryBadge(item.category)}
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
                  <CardTitle className="text-lg">Business Sentiment Trend</CardTitle>
                  <CardDescription>12-month business content sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={[
                      { month: 'Jan', sentiment: 72 },
                      { month: 'Feb', sentiment: 74 },
                      { month: 'Mar', sentiment: 75 },
                      { month: 'Apr', sentiment: 73 },
                      { month: 'May', sentiment: 76 },
                      { month: 'Jun', sentiment: 74 },
                      { month: 'Jul', sentiment: 75 },
                      { month: 'Aug', sentiment: 76 },
                      { month: 'Sep', sentiment: 75 },
                      { month: 'Oct', sentiment: 77 },
                      { month: 'Nov', sentiment: 75 },
                      { month: 'Dec', sentiment: 75 },
                    ]}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.navy },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Tourism & Lifestyle Tab */}
        <TabsContent value="tourism" className="space-y-6">
          <GlassPanel title="Tourism & Lifestyle" description="English searches for travel, dining, and entertainment">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Tourism Searches</CardTitle>
                  <CardDescription>Travel and lifestyle related queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tourismTerms.map((item, index) => (
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
                            {getCategoryBadge(item.category)}
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

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Tourism Growth Trend</CardTitle>
                  <CardDescription>Monthly tourism search volume</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={volumeTrend.map(v => ({ month: v.month, tourism: Math.round(v.volume * 0.35) }))}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'tourism', name: 'Tourism Volume (M)', color: CHART_COLORS.emerald },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Technology Tab */}
        <TabsContent value="tech" className="space-y-6">
          <GlassPanel title="Technology & Innovation" description="English searches for tech and digital services">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Technology Searches</CardTitle>
                  <CardDescription>Innovation and tech related queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {techTerms.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo/20 text-indigo">
                            <BookOpen className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{item.term}</p>
                            {getCategoryBadge(item.category)}
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

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Tech Content Sentiment</CardTitle>
                  <CardDescription>Technology topic sentiment scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {techTerms.map((item, index) => (
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

        {/* Platforms Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <GlassPanel title="Platform Distribution" description="Where English content is consumed">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Share</CardTitle>
                  <CardDescription>English content consumption by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={platformData}
                    height={350}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top English-Language Media</CardTitle>
                  <CardDescription>Most accessed English news and content sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {[
                        { name: 'Khaleej Times', type: 'News', reach: 92, sentiment: 76 },
                        { name: 'The National', type: 'News', reach: 88, sentiment: 78 },
                        { name: 'Arabian Business', type: 'Business', reach: 82, sentiment: 74 },
                        { name: 'Dubai Chronicle', type: 'News', reach: 75, sentiment: 72 },
                        { name: 'UAE Government Portal', type: 'Official', reach: 95, sentiment: 85 },
                      ].map((source, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                              <FileText className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{source.name}</p>
                              <Badge variant="outline" className="text-xs mt-1">{source.type}</Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-slate-200">{source.reach}%</div>
                              <p className="text-xs text-slate-400">Reach</p>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${getSentimentColor(source.sentiment)}`}>
                                {source.sentiment}%
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
      </Tabs>
    </div>
  )
}
