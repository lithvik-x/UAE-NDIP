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
  Users,
  TrendingUp,
  MessageSquare,
  Eye,
  Plane,
  Star,
  IndianRupee,
} from 'lucide-react'
import {
  useUrduHindiData,
  useMalayIndonesianData,
} from '@/lib/data-loader'

export default function AsianLanguagesPage() {
  const { data: urduHindiData } = useUrduHindiData()
  const { data: malayData } = useMalayIndonesianData()

  // Combined Asian languages data
  const totalAsianVolume = 83400000 // Urdu/Hindi 67.8M + Malay/Indonesian 15.6M

  // Asian languages breakdown
  const languageBreakdown = [
    { name: 'Hindi/Urdu', percentage: 55, volume: 45870000, color: CHART_COLORS.orange },
    { name: 'Malay/Indonesian', percentage: 20, volume: 16680000, color: CHART_COLORS.emerald },
    { name: 'Tagalog', percentage: 15, volume: 12510000, color: CHART_COLORS.cyan },
    { name: 'Other Asian', percentage: 10, volume: 8340000, color: CHART_COLORS.platinum },
  ]

  // Sentiment by language
  const sentimentByLanguage = [
    { name: 'Hindi', sentiment: 62, trend: 'stable' },
    { name: 'Urdu', sentiment: 58, trend: 'declining' },
    { name: 'Malay', sentiment: 78, trend: 'rising' },
    { name: 'Indonesian', sentiment: 72, trend: 'rising' },
    { name: 'Tagalog', sentiment: 68, trend: 'stable' },
  ]

  // Hindi/Urdu terms
  const southAsianTerms = [
    { term: 'India UAE trade 2025', volume: 8500000, sentiment: 72, language: 'Hindi', category: 'Trade' },
    { term: 'Pakistan UAE relations', volume: 6200000, sentiment: 42, language: 'Urdu', category: 'Relations' },
    { term: 'Indian workers UAE visa', volume: 5800000, sentiment: 65, language: 'Hindi', category: 'Labor' },
    { term: 'UAE golden visa India', volume: 5400000, sentiment: 75, language: 'Hindi', category: 'Visa' },
    { term: 'Indian festivals UAE', volume: 4500000, sentiment: 82, language: 'Hindi', category: 'Culture' },
  ]

  // Malay/Indonesian terms
  const malayTerms = [
    { term: 'Malaysia UAE CEPA trade', volume: 3200000, sentiment: 82, language: 'Malay', category: 'Trade' },
    { term: 'Indonesia UAE CEPA talks', volume: 2900000, sentiment: 78, language: 'Indonesian', category: 'Trade' },
    { term: 'Indonesian workers UAE', volume: 2600000, sentiment: 62, language: 'Indonesian', category: 'Labor' },
    { term: 'Dubai Jakarta flights', volume: 2100000, sentiment: 76, language: 'Indonesian', category: 'Tourism' },
    { term: 'Malaysian tourism UAE', volume: 1900000, sentiment: 80, language: 'Malay', category: 'Tourism' },
  ]

  // Tagalog terms (Filipino)
  const tagalogTerms = [
    { term: 'OFW UAE news 2025', volume: 1800000, sentiment: 68, category: 'Labor' },
    { term: 'Dubai Filipino community', volume: 1500000, sentiment: 72, category: 'Community' },
    { term: 'Philippines UAE embassy', volume: 1200000, sentiment: 65, category: 'Services' },
    { term: 'UAE maid visa Philippines', volume: 980000, sentiment: 58, category: 'Labor' },
  ]

  // Community size estimates
  const communitySizes = [
    { community: 'Indian', population: 3400000, percentage: 34, sentiment: 68 },
    { community: 'Pakistani', population: 1200000, percentage: 12, sentiment: 52 },
    { community: 'Filipino', population: 700000, percentage: 7, sentiment: 68 },
    { community: 'Malaysian', population: 52000, percentage: 0.5, sentiment: 78 },
    { community: 'Indonesian', population: 25000, percentage: 0.25, sentiment: 72 },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Trade': return <Badge variant="gold" className="text-xs">{category}</Badge>
      case 'Relations': return <Badge variant="navy" className="text-xs">{category}</Badge>
      case 'Labor': return <Badge variant="orange" className="text-xs">{category}</Badge>
      case 'Visa': return <Badge variant="platinum" className="text-xs">{category}</Badge>
      case 'Culture': return <Badge variant="emerald" className="text-xs">{category}</Badge>
      case 'Tourism': return <Badge variant="cyan" className="text-xs">{category}</Badge>
      case 'Community': return <Badge variant="fuchsia" className="text-xs">{category}</Badge>
      case 'Services': return <Badge variant="indigo" className="text-xs">{category}</Badge>
      default: return <Badge variant="outline" className="text-xs">{category}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="orange" className="mb-2">ASIAN LANGUAGES</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-orange">Asian Languages</h1>
          <p className="mt-2 text-slate-400">
            South Asian and Southeast Asian language communities: Hindi, Urdu, Malay, Tagalog
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-orange/50 text-orange hover:bg-orange/10">
            <Eye className="h-4 w-4" />
            Monitor Communities
          </Button>
          <Button className="bg-gradient-orange hover:opacity-90 text-navy-950 gap-2">
            <Globe className="h-4 w-4" />
            Track Languages
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Asian Query Volume"
          value={(totalAsianVolume / 1000000).toFixed(0) + 'M'}
          previousValue={78}
          icon={<Globe className="h-6 w-6" />}
          gradient="orange"
          status="success"
        />
        <MetricCard
          title="South Asian Speakers"
          value="4.6M"
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Languages Tracked"
          value="5"
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Avg Sentiment"
          value="66"
          previousValue={64}
          icon={<Star className="h-6 w-6" />}
          gradient="platinum"
          status="warning"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="southasian">South Asian</TabsTrigger>
          <TabsTrigger value="southeast">Southeast Asian</TabsTrigger>
          <TabsTrigger value="communities">Communities</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Asian Languages Overview" description="Multi-lingual intelligence from Asian communities">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Language Distribution</CardTitle>
                    <CardDescription>Asian language query share</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={languageBreakdown}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Volume by Language</CardTitle>
                    <CardDescription>Monthly query volume (millions)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={languageBreakdown}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.orange },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Community Overview</CardTitle>
                  <CardDescription>Asian expat population in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {communitySizes.map((community, index) => (
                      <div key={index} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400">
                          {(community.population / 1000).toFixed(0)}K
                        </div>
                        <p className="text-sm text-slate-400 mt-1">{community.community}</p>
                        <p className="text-xs text-slate-500">{community.percentage}% of UAE</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* South Asian Tab */}
        <TabsContent value="southasian" className="space-y-6">
          <GlassPanel title="South Asian Languages" description="Hindi and Urdu speaking communities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Hindi & Urdu Search Terms</CardTitle>
                  <CardDescription>Top queries from South Asian communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {southAsianTerms.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange/20 text-orange">
                              <IndianRupee className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{item.term}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">{item.language}</Badge>
                                {getCategoryBadge(item.category)}
                              </div>
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
                  <CardTitle className="text-lg">Hindi vs Urdu Comparison</CardTitle>
                  <CardDescription>Language-specific metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-lg border border-orange-700/50 bg-orange-900/20 p-4">
                      <Badge variant="orange" className="mb-2">Hindi</Badge>
                      <div className="space-y-2 mt-3">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Query Volume</span>
                          <span className="text-slate-200">35M+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Speakers in UAE</span>
                          <span className="text-slate-200">2.8M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Avg Sentiment</span>
                          <span className="text-emerald-400">68%</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4">
                      <Badge variant="emerald" className="mb-2">Urdu</Badge>
                      <div className="space-y-2 mt-3">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Query Volume</span>
                          <span className="text-slate-200">32M+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Speakers in UAE</span>
                          <span className="text-slate-200">1.2M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Avg Sentiment</span>
                          <span className="text-yellow-400">58%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Southeast Asian Tab */}
        <TabsContent value="southeast" className="space-y-6">
          <GlassPanel title="Southeast Asian Languages" description="Malay, Indonesian, and Tagalog communities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Malay/Indonesian Searches</CardTitle>
                  <CardDescription>ASEAN community queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {malayTerms.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                            <Plane className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{item.term}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">{item.language}</Badge>
                              {getCategoryBadge(item.category)}
                            </div>
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
                  <CardTitle className="text-lg">Tagalog (Filipino) Searches</CardTitle>
                  <CardDescription>Philippines community queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tagalogTerms.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan/20 text-cyan">
                            <Users className="h-5 w-5" />
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
                  <CardTitle className="text-lg">ASEAN Trade Relations</CardTitle>
                  <CardDescription>UAE-ASEAN economic partnerships</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { country: 'Malaysia', trade: 12.5, color: CHART_COLORS.emerald },
                      { country: 'Indonesia', trade: 8.2, color: CHART_COLORS.orange },
                      { country: 'Philippines', trade: 4.8, color: CHART_COLORS.cyan },
                      { country: 'Thailand', trade: 3.2, color: CHART_COLORS.indigo },
                      { country: 'Singapore', trade: 15.6, color: CHART_COLORS.platinum },
                    ]}
                    xAxisKey="country"
                    bars={[
                      { dataKey: 'trade', name: 'Trade ($B)', color: CHART_COLORS.gold },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Communities Tab */}
        <TabsContent value="communities" className="space-y-6">
          <GlassPanel title="Asian Communities" description="Population and sentiment by community">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Community Population</CardTitle>
                  <CardDescription>Asian expat population in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={communitySizes}
                    xAxisKey="community"
                    bars={[
                      { dataKey: 'population', name: 'Population', color: CHART_COLORS.orange },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Community Details</CardTitle>
                  <CardDescription>Population and sentiment metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {communitySizes.map((community, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-200">{community.community}</span>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-slate-400">
                              {community.population.toLocaleString()} ({community.percentage}%)
                            </span>
                            <span className={`font-bold ${getSentimentColor(community.sentiment)}`}>
                              {community.sentiment}%
                            </span>
                          </div>
                        </div>
                        <Progress value={community.sentiment} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment by Language" description="Community sentiment across Asian languages">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Language Sentiment Comparison</CardTitle>
                  <CardDescription>Sentiment scores by Asian language</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sentimentByLanguage}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'sentiment', name: 'Sentiment Score', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Trend - 12 Months</CardTitle>
                  <CardDescription>Asian community sentiment over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={[
                      { month: 'Jan', sentiment: 62 },
                      { month: 'Feb', sentiment: 64 },
                      { month: 'Mar', sentiment: 65 },
                      { month: 'Apr', sentiment: 63 },
                      { month: 'May', sentiment: 66 },
                      { month: 'Jun', sentiment: 64 },
                      { month: 'Jul', sentiment: 65 },
                      { month: 'Aug', sentiment: 67 },
                      { month: 'Sep', sentiment: 65 },
                      { month: 'Oct', sentiment: 66 },
                      { month: 'Nov', sentiment: 65 },
                      { month: 'Dec', sentiment: 66 },
                    ]}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'sentiment', name: 'Avg Sentiment', color: CHART_COLORS.orange },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Sentiment Drivers</CardTitle>
                  <CardDescription>Factors affecting community sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4">
                      <Badge variant="emerald" className="mb-2">Positive Drivers</Badge>
                      <ul className="text-sm text-slate-300 space-y-1 mt-2">
                        <li>- UAE-India CEPA implementation</li>
                        <li>- Golden visa expansion</li>
                        <li>- Tourism recovery</li>
                        <li>- Trade growth</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border border-red-700/50 bg-red-900/20 p-4">
                      <Badge variant="destructive" className="mb-2">Negative Drivers</Badge>
                      <ul className="text-sm text-slate-300 space-y-1 mt-2">
                        <li>- Labor disputes</li>
                        <li>- Pakistan-UAE tensions</li>
                        <li>- Remittance challenges</li>
                        <li>- Worker rights concerns</li>
                      </ul>
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
