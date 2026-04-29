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
  Plane,
  Building2,
  TrendingUp,
  MessageSquare,
  Eye,
  Users,
  BookOpen,
  Star,
} from 'lucide-react'
import {
  useFrenchQueriesData,
} from '@/lib/data-loader'

export default function FrenchLanguagePage() {
  const { data } = useFrenchQueriesData()

  // French Query volume trend
  const volumeTrend = [
    { month: 'Jan', volume: 7.8, growth: 3.2 },
    { month: 'Feb', volume: 8.1, growth: 3.8 },
    { month: 'Mar', volume: 8.4, growth: 3.7 },
    { month: 'Apr', volume: 8.6, growth: 2.4 },
    { month: 'May', volume: 8.8, growth: 2.3 },
    { month: 'Jun', volume: 8.7, growth: -1.1 },
    { month: 'Jul', volume: 8.8, growth: 1.1 },
    { month: 'Aug', volume: 8.9, growth: 1.1 },
    { month: 'Sep', volume: 9.0, growth: 1.1 },
    { month: 'Oct', volume: 9.1, growth: 1.1 },
    { month: 'Nov', volume: 8.9, growth: -2.2 },
    { month: 'Dec', volume: 8.9, growth: 0 },
  ]

  // Sentiment distribution
  const sentimentData = [
    { name: 'Positive', value: 82, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 12, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 6, color: CHART_COLORS.danger },
  ]

  // Defense & Strategic terms
  const defenseTerms = [
    { term: 'Rafale fighter jets UAE deal', volume: 2100000, sentiment: 88, category: 'Defense' },
    { term: 'French base UAE Al Dhafra', volume: 1900000, sentiment: 85, category: 'Military' },
    { term: 'France UAE defense cooperation', volume: 1300000, sentiment: 82, category: 'Defense' },
  ]

  // Business & Trade terms
  const businessTerms = [
    { term: 'UAE France bilateral trade 2025', volume: 2400000, sentiment: 86, category: 'Trade' },
    { term: 'French entrepreneurs Dubai', volume: 1700000, sentiment: 84, category: 'Business' },
    { term: 'Paris Abu Dhabi alliance', volume: 1100000, sentiment: 80, category: 'Diplomacy' },
  ]

  // Culture & Education terms
  const cultureTerms = [
    { term: 'French cultural center Dubai', volume: 1400000, sentiment: 88, category: 'Culture' },
    { term: 'French schools Abu Dhabi', volume: 1500000, sentiment: 75, category: 'Education' },
    { term: 'French language UAE schools', volume: 1000000, sentiment: 72, category: 'Education' },
    { term: 'French tourism UAE statistics', volume: 1200000, sentiment: 86, category: 'Tourism' },
  ]

  // Source distribution
  const sourceData = [
    { source: 'Le Figaro', tier: 'Tier 2', sentiment: 84, credibility: 88 },
    { source: 'Les Echos', tier: 'Tier 2', sentiment: 82, credibility: 86 },
    { source: 'French Ministry', tier: 'Tier 1', sentiment: 90, credibility: 95 },
    { source: 'French Embassy', tier: 'Tier 1', sentiment: 88, credibility: 92 },
  ]

  // Community segments
  const communitySegments = [
    { segment: 'French Expatriates', percentage: 45, population: 54000 },
    { segment: 'Business Professionals', percentage: 30, population: 36000 },
    { segment: 'Students', percentage: 15, population: 18000 },
    { segment: 'Diplomatic/Government', percentage: 10, population: 12000 },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Defense': return <Badge variant="navy" className="text-xs">{category}</Badge>
      case 'Military': return <Badge variant="navy" className="text-xs">{category}</Badge>
      case 'Trade': return <Badge variant="gold" className="text-xs">{category}</Badge>
      case 'Business': return <Badge variant="emerald" className="text-xs">{category}</Badge>
      case 'Diplomacy': return <Badge variant="platinum" className="text-xs">{category}</Badge>
      case 'Culture': return <Badge variant="fuchsia" className="text-xs">{category}</Badge>
      case 'Education': return <Badge variant="indigo" className="text-xs">{category}</Badge>
      case 'Tourism': return <Badge variant="cyan" className="text-xs">{category}</Badge>
      default: return <Badge variant="outline" className="text-xs">{category}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">FRENCH</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-indigo">French Language Presence</h1>
          <p className="mt-2 text-slate-400">
            Francophone community intelligence, defense relations, and cultural exchanges
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-indigo/50 text-indigo hover:bg-indigo/10">
            <Eye className="h-4 w-4" />
            Monitor French
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <Globe className="h-4 w-4" />
            Track Relations
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="French Query Volume"
          value={(data?.queryVolume / 1000000).toFixed(1) + 'M'}
          previousValue={8.5}
          icon={<Globe className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
        <MetricCard
          title="French Speakers UAE"
          value={(data?.uaeSpeakerPopulation / 1000).toFixed(0) + 'K'}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={data?.sentiment?.overall || 82}
          previousValue={80}
          icon={<Star className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Bilateral Trade"
          value="$5.2B"
          previousValue={4.8}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="defense">Defense Relations</TabsTrigger>
          <TabsTrigger value="business">Business & Trade</TabsTrigger>
          <TabsTrigger value="culture">Culture & Education</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="French Language Overview" description="Francophone presence in UAE">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Query Volume Trend</CardTitle>
                    <CardDescription>Monthly French searches (millions)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={volumeTrend}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.indigo },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>French content sentiment</CardDescription>
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
                  <CardTitle className="text-lg">Topic Distribution</CardTitle>
                  <CardDescription>French content by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-navy">25%</div>
                      <p className="text-sm text-slate-400 mt-1">Defense</p>
                    </div>
                    <div className="rounded-lg border border-gold-700/50 bg-gold-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-gold">30%</div>
                      <p className="text-sm text-slate-400 mt-1">Trade</p>
                    </div>
                    <div className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-400">25%</div>
                      <p className="text-sm text-slate-400 mt-1">Business</p>
                    </div>
                    <div className="rounded-lg border border-fuchsia-700/50 bg-fuchsia-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-fuchsia-400">20%</div>
                      <p className="text-sm text-slate-400 mt-1">Culture</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Defense Relations Tab */}
        <TabsContent value="defense" className="space-y-6">
          <GlassPanel title="Defense & Strategic Relations" description="France-UAE military and defense cooperation">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Defense-Related Searches</CardTitle>
                  <CardDescription>Military and strategic content queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {defenseTerms.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-navy-700/50 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                            <Plane className="h-5 w-5" />
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
                  <CardTitle className="text-lg">Defense Sentiment Trend</CardTitle>
                  <CardDescription>12-month defense content sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={[
                      { month: 'Jan', sentiment: 82 },
                      { month: 'Feb', sentiment: 84 },
                      { month: 'Mar', sentiment: 85 },
                      { month: 'Apr', sentiment: 83 },
                      { month: 'May', sentiment: 86 },
                      { month: 'Jun', sentiment: 84 },
                      { month: 'Jul', sentiment: 85 },
                      { month: 'Aug', sentiment: 86 },
                      { month: 'Sep', sentiment: 85 },
                      { month: 'Oct', sentiment: 87 },
                      { month: 'Nov', sentiment: 85 },
                      { month: 'Dec', sentiment: 85 },
                    ]}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.navy },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Defense Indicators</CardTitle>
                  <CardDescription>Strategic cooperation metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-navy">Rafale</div>
                      <p className="text-sm text-slate-400 mt-1">Fighter Aircraft Deal</p>
                      <Badge variant="navy" className="mt-2">Active</Badge>
                    </div>
                    <div className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-navy">Al Dhafra</div>
                      <p className="text-sm text-slate-400 mt-1">French Military Base</p>
                      <Badge variant="navy" className="mt-2">Operational</Badge>
                    </div>
                    <div className="rounded-lg border border-navy-700/50 bg-navy-900/20 p-4 text-center">
                      <div className="text-3xl font-bold text-navy">$4.2B</div>
                      <p className="text-sm text-slate-400 mt-1">Defense Contracts</p>
                      <Badge variant="gold" className="mt-2">Rising</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Business & Trade Tab */}
        <TabsContent value="business" className="space-y-6">
          <GlassPanel title="Business & Trade Relations" description="French-UAE commercial partnerships">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Business & Trade Searches</CardTitle>
                  <CardDescription>Commercial relationship queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessTerms.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                            <Building2 className="h-5 w-5" />
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
                  <CardTitle className="text-lg">Top French Media Sources</CardTitle>
                  <CardDescription>Most accessed French-language sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {sourceData.map((source, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo/20 text-indigo">
                              <BookOpen className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{source.source}</p>
                              <Badge variant="outline" className="text-xs">{source.tier}</Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`text-sm font-bold ${getSentimentColor(source.sentiment)}`}>
                              {source.sentiment}%
                            </span>
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

        {/* Culture & Education Tab */}
        <TabsContent value="culture" className="space-y-6">
          <GlassPanel title="Culture & Education" description="French cultural institutions and educational presence">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Culture & Education Searches</CardTitle>
                  <CardDescription>French cultural and educational content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cultureTerms.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia/20 text-fuchsia">
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
                  <CardTitle className="text-lg">French Cultural Institutions</CardTitle>
                  <CardDescription>Active French cultural presence in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-fuchsia-700/50 bg-fuchsia-900/20 p-4">
                      <Badge variant="fuchsia" className="mb-2">Alliance Francaise</Badge>
                      <p className="text-sm text-slate-300">French cultural center in Dubai</p>
                      <p className="text-xs text-slate-400 mt-2">Founded 1977</p>
                    </div>
                    <div className="rounded-lg border border-fuchsia-700/50 bg-fuchsia-900/20 p-4">
                      <Badge variant="fuchsia" className="mb-2">French School Dubai</Badge>
                      <p className="text-sm text-slate-300">Lycee Francais de Dubai</p>
                      <p className="text-xs text-slate-400 mt-2">500+ students</p>
                    </div>
                    <div className="rounded-lg border border-fuchsia-700/50 bg-fuchsia-900/20 p-4">
                      <Badge variant="fuchsia" className="mb-2">Institut Francais</Badge>
                      <p className="text-sm text-slate-300">French Institute Abu Dhabi</p>
                      <p className="text-xs text-slate-400 mt-2">Cultural programs</p>
                    </div>
                    <div className="rounded-lg border border-fuchsia-700/50 bg-fuchsia-900/20 p-4">
                      <Badge variant="fuchsia" className="mb-2">French Embassy</Badge>
                      <p className="text-sm text-slate-300">Embassy in Abu Dhabi</p>
                      <p className="text-xs text-slate-400 mt-2">Diplomatic missions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community" className="space-y-6">
          <GlassPanel title="French Community" description="Francophone population segments in UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Community Segments</CardTitle>
                  <CardDescription>French-speaking population breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={communitySegments.map(s => ({
                      name: s.segment,
                      value: s.percentage,
                      color: [CHART_COLORS.navy, CHART_COLORS.gold, CHART_COLORS.indigo, CHART_COLORS.fuchsia][communitySegments.indexOf(s)]
                    }))}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Community Statistics</CardTitle>
                  <CardDescription>French-speaking population details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {communitySegments.map((segment, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-200">{segment.segment}</span>
                          <span className="text-platinum">{segment.population.toLocaleString()} people</span>
                        </div>
                        <Progress value={segment.percentage} className="h-3" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Growth Trends</CardTitle>
                  <CardDescription>Community growth indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { year: '2022', population: 105000 },
                      { year: '2023', population: 112000 },
                      { year: '2024', population: 118000 },
                      { year: '2025', population: 120000 },
                    ]}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'population', name: 'Population', color: CHART_COLORS.indigo },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
