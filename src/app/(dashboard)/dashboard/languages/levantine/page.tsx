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
  Languages,
  Search,
  ArrowUp,
  ArrowDown,
  Minus,
  UserCheck,
} from 'lucide-react'
import {
  useLevantineArabicData,
} from '@/lib/data-loader'

export default function LevantineArabicPage() {
  const { data } = useLevantineArabicData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Levantine Arabic intelligence data...</div>
      </div>
    )
  }

  const { topSearchTerms, sentiment, uaeSpeakerPopulation, credibility, sources, trendDirection } = data

  // Sentiment data for pie chart
  const sentimentData = sentiment ? [
    { name: 'Positive', value: sentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentiment.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentiment.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 58, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 20, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 22, color: CHART_COLORS.rose },
  ]

  // Top search terms with trend indicators
  const searchTermsData = topSearchTerms?.slice(0, 10) || []

  // Trend direction icon helper
  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'rising': return <ArrowUp className="h-4 w-4 text-emerald-400" />
      case 'declining': return <ArrowDown className="h-4 w-4 text-rose-400" />
      default: return <Minus className="h-4 w-4 text-slate-400" />
    }
  }

  // Trend direction badge helper
  const getTrendBadge = (trend?: string) => {
    switch (trend) {
      case 'rising': return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Rising</Badge>
      case 'declining': return <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">Declining</Badge>
      default: return <Badge className="bg-slate-500/20 text-slate-400 border-slate-500/50">Stable</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">MULTI-LINGUAL</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Levantine Arabic Dialect</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'Intelligence on Levantine Arabic dialect: Syria, Lebanon, Jordan, Palestine, Iraq'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Languages className="h-4 w-4" />
            View Dialect Map
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
          title="Query Volume"
          value={data.queryVolume?.toLocaleString() || '28,400,000'}
          previousValue={(data.queryVolume || 28400000) - 800000}
          icon={<Search className="h-6 w-6" />}
          gradient="platinum"
          status="info"
        />
        <MetricCard
          title="UAE Speakers"
          value={uaeSpeakerPopulation?.toLocaleString() || '1,722,000'}
          previousValue={(uaeSpeakerPopulation || 1722000) + 50000}
          icon={<Users className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment?.overall || 36}
          previousValue={(sentiment?.overall || 36) - 4}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Credibility Score"
          value={credibility?.score || 79}
          previousValue={(credibility?.score || 79) - 2}
          icon={<Shield className="h-6 w-6" />}
          gradient="gold"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="searchterms">Search Terms</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="communities">Communities</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Levantine Arabic Overview" description="Regional dialect intelligence for Levant region">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Regional Distribution</CardTitle>
                  <CardDescription>Levantine Arabic speaker distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-5">
                    <div className="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div className="text-2xl font-bold text-platinum-400">17.5M</div>
                      <p className="text-sm text-slate-400">Syria</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div className="text-2xl font-bold text-emerald-400">6.8M</div>
                      <p className="text-sm text-slate-400">Lebanon</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div className="text-2xl font-bold text-gold-400">11.3M</div>
                      <p className="text-sm text-slate-400">Jordan</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div className="text-2xl font-bold text-navy-400">5.4M</div>
                      <p className="text-sm text-slate-400">Palestine</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                      <div className="text-2xl font-bold text-slate-400">43.3M</div>
                      <p className="text-sm text-slate-400">Iraq</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment breakdown</CardDescription>
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
                    <CardTitle className="text-lg">UAE Diaspora Integration</CardTitle>
                    <CardDescription>Levantine community presence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                        <div className="flex items-center gap-3">
                          <UserCheck className="h-5 w-5 text-emerald-400" />
                          <span className="text-slate-200">Refugee Integration</span>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald-400">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-platinum-400" />
                          <span className="text-slate-200">Worker Communities</span>
                        </div>
                        <Badge className="bg-platinum-500/20 text-platinum-400">Established</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                        <div className="flex items-center gap-3">
                          <TrendingUp className="h-5 w-5 text-gold-400" />
                          <span className="text-slate-200">Economic Migration</span>
                        </div>
                        <Badge className="bg-gold-500/20 text-gold-400">Growing</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Credibility Analysis</CardTitle>
                  <CardDescription>Source credibility assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-3">
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Credibility Tier</p>
                      <Badge variant="outline" className="border-platinum/50 text-platinum">
                        Tier {credibility?.tier || 3}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Credibility Score</p>
                      <div className="text-2xl font-bold text-platinum-400">{credibility?.score || 79}%</div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-400">Sources Verified</p>
                      <div className="text-2xl font-bold text-emerald-400">{credibility?.sources || 23}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Search Terms Tab */}
        <TabsContent value="searchterms" className="space-y-6">
          <GlassPanel title="Top Search Terms" description="Most frequent Levantine Arabic search queries">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Search Volume Rankings</CardTitle>
                <CardDescription>Top 10 search terms by volume</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-2">
                    {searchTermsData.map((term, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                        <div className="flex items-center gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-platinum/20 text-platinum text-sm font-bold">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{term.term}</p>
                            <p className="text-sm text-slate-400">
                              {term.volume?.toLocaleString()} queries
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant="outline" className={`border-slate-600 ${term.sentiment === 'positive' ? 'text-emerald-400' : term.sentiment === 'negative' ? 'text-rose-400' : 'text-slate-400'}`}>
                            {term.sentiment}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {getTrendIcon(term.trend)}
                            {getTrendBadge(term.trend)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis" description="Levantine Arabic content sentiment breakdown">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Breakdown</CardTitle>
                  <CardDescription>Detailed sentiment metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-emerald-500" />
                          <span className="text-sm font-medium text-slate-200">Positive</span>
                        </div>
                        <span className="text-lg font-bold text-emerald-400">{sentiment?.positive || 58}%</span>
                      </div>
                      <Progress value={sentiment?.positive || 58} className="h-3" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-slate-500" />
                          <span className="text-sm font-medium text-slate-200">Neutral</span>
                        </div>
                        <span className="text-lg font-bold text-slate-400">{sentiment?.neutral || 20}%</span>
                      </div>
                      <Progress value={sentiment?.neutral || 20} className="h-3" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-rose-500" />
                          <span className="text-sm font-medium text-slate-200">Negative</span>
                        </div>
                        <span className="text-lg font-bold text-rose-400">{sentiment?.negative || 22}%</span>
                      </div>
                      <Progress value={sentiment?.negative || 22} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Volume Analysis</CardTitle>
                  <CardDescription>Total query volume: {sentiment?.volume?.toLocaleString() || '28,400,000'}</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: 'Positive', value: (sentiment?.volume || 28400000) * ((sentiment?.positive || 58) / 100) },
                      { name: 'Neutral', value: (sentiment?.volume || 28400000) * ((sentiment?.neutral || 20) / 100) },
                      { name: 'Negative', value: (sentiment?.volume || 28400000) * ((sentiment?.negative || 22) / 100) },
                    ]}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Volume', color: CHART_COLORS.platinum },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Communities Tab */}
        <TabsContent value="communities" className="space-y-6">
          <GlassPanel title="UAE Levantine Communities" description="Diaspora analysis and integration metrics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Community Issues</CardTitle>
                  <CardDescription>Top concerns for Levantine diaspora in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {searchTermsData.slice(0, 5).map((term, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="h-4 w-4 text-yellow-400" />
                          <span className="text-slate-200">{term.term}</span>
                        </div>
                        <Badge variant="outline" className="border-slate-600">
                          {term.volume?.toLocaleString()} queries
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Intelligence Sources</CardTitle>
                  <CardDescription>Verified sources for Levantine intelligence</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {(sources || []).map((source, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex items-center gap-4">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              source.tier === 2 ? 'bg-emerald-500/20 text-emerald-400' :
                              source.tier === 3 ? 'bg-platinum-500/20 text-platinum' :
                              'bg-slate-500/20 text-slate-400'
                            }`}>
                              <Globe className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-slate-200">{source.name}</span>
                          </div>
                          <Badge variant="outline" className={`border-slate-600 ${
                            source.tier === 2 ? 'text-emerald-400 border-emerald-500/50' :
                            source.tier === 3 ? 'text-platinum-400 border-platinum-500/50' :
                            'text-slate-400'
                          }`}>
                            Tier {source.tier || 3}
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
