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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Languages,
  TrendingUp,
  Users,
  MessageSquare,
  BookOpen,
  AlertCircle,
  CheckCircle,
  Eye,
} from 'lucide-react'
import {
  useLanguageOverviewData,
} from '@/lib/data-loader'

export default function LanguagesOverviewPage() {
  const { data } = useLanguageOverviewData()

  // UAE Language Demographics - Realistic breakdown
  const languageDemographics = [
    { name: 'English', percentage: 45, speakers: 4500000, color: CHART_COLORS.navy },
    { name: 'Arabic (all dialects)', percentage: 40, speakers: 4000000, color: CHART_COLORS.gold },
    { name: 'Asian Languages', percentage: 15, speakers: 1500000, color: CHART_COLORS.emerald },
  ]

  const arabicDialects = [
    { name: 'MSA (Modern Standard)', percentage: 35, color: CHART_COLORS.platinum },
    { name: 'Emirati Arabic', percentage: 20, color: CHART_COLORS.gold },
    { name: 'Gulf Arabic', percentage: 25, color: CHART_COLORS.teal },
    { name: 'Levantine', percentage: 10, color: CHART_COLORS.cyan },
    { name: 'Egyptian', percentage: 7, color: CHART_COLORS.indigo },
    { name: 'Maghrebi', percentage: 3, color: CHART_COLORS.rose },
  ]

  const asianLanguages = [
    { name: 'Hindi/Urdu', percentage: 55, speakers: 825000, color: CHART_COLORS.orange },
    { name: 'Malay/Indonesian', percentage: 20, speakers: 300000, color: CHART_COLORS.emerald },
    { name: 'Tagalog', percentage: 15, speakers: 225000, color: CHART_COLORS.cyan },
    { name: 'Other Asian', percentage: 10, speakers: 150000, color: CHART_COLORS.platinum },
  ]

  // Sentiment by language community
  const sentimentByLanguage = [
    { name: 'MSA Arabic', sentiment: 82, trend: 'stable' },
    { name: 'Emirati Arabic', sentiment: 78, trend: 'stable' },
    { name: 'English', sentiment: 75, trend: 'rising' },
    { name: 'French', sentiment: 82, trend: 'rising' },
    { name: 'Chinese', sentiment: 76, trend: 'rising' },
    { name: 'Malay/Indonesian', sentiment: 74, trend: 'rising' },
    { name: 'Urdu/Hindi', sentiment: 61, trend: 'stable' },
    { name: 'Persian', sentiment: 12, trend: 'declining' },
  ]

  // Query volume distribution
  const queryVolumeData = [
    { name: 'Urdu/Hindi', value: 67800000, color: CHART_COLORS.orange },
    { name: 'Chinese', value: 42300000, color: CHART_COLORS.danger },
    { name: 'MSA Arabic', value: 47000000, color: CHART_COLORS.gold },
    { name: 'Egyptian Arabic', value: 35600000, color: CHART_COLORS.indigo },
    { name: 'English', value: 35000000, color: CHART_COLORS.navy },
    { name: 'Levantine', value: 28400000, color: CHART_COLORS.cyan },
  ]

  // Top search terms across all languages
  const topSearchTerms = [
    { term: 'UAE government', language: 'MSA', volume: 8200000, sentiment: 'positive' },
    { term: 'India UAE trade 2025', language: 'Urdu/Hindi', volume: 8500000, sentiment: 'positive' },
    { term: 'UAE China trade 2025', language: 'Chinese', volume: 8200000, sentiment: 'positive' },
    { term: 'MBZ leadership', language: 'MSA', volume: 6100000, sentiment: 'positive' },
    { term: 'Dubai tourism', language: 'English', volume: 5400000, sentiment: 'positive' },
    { term: 'Pakistan UAE relations', language: 'Urdu', volume: 6200000, sentiment: 'negative' },
    { term: 'French entrepreneurs Dubai', language: 'French', volume: 1700000, sentiment: 'positive' },
    { term: 'Iran UAE relations', language: 'Persian', volume: 4100000, sentiment: 'negative' },
  ]

  // Code-switching patterns
  const codeSwitchingData = [
    { name: 'Arabizi (Arabic-Latin)', prevalence: 42, color: CHART_COLORS.gold },
    { name: 'Franco Arabic', prevalence: 25, color: CHART_COLORS.platinum },
    { name: 'Hinglish', prevalence: 18, color: CHART_COLORS.orange },
    { name: 'Taglish', prevalence: 15, color: CHART_COLORS.cyan },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'rising': return <TrendingUp className="h-4 w-4 text-emerald-400" />
      case 'declining': return <TrendingUp className="h-4 w-4 text-red-400 rotate-180" />
      default: return <AlertCircle className="h-4 w-4 text-slate-400" />
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">MULTI-LINGUAL INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Languages Overview</h1>
          <p className="mt-2 text-slate-400">
            UAE language demographics, sentiment by community, and cross-linguistic intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Eye className="h-4 w-4" />
            Language Monitor
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Languages className="h-4 w-4" />
            Track Dialect
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Languages"
          value={data?.totalLanguages || 15}
          icon={<Languages className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Total Query Volume"
          value={(data?.totalQueries / 1000000).toFixed(0) + 'M'}
          previousValue={210}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="UAE Speakers"
          value="10M+"
          icon={<Users className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Code-Switching Rate"
          value="68%"
          previousValue={65}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </div>

      <Tabs defaultValue="demographics" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="dialects">Arabic Dialects</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="volume">Query Volume</TabsTrigger>
          <TabsTrigger value="searches">Top Searches</TabsTrigger>
          <TabsTrigger value="codeswitch">Code-Switching</TabsTrigger>
        </TabsList>

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          <GlassPanel title="UAE Language Demographics" description="Population breakdown by primary language community">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Primary Language Distribution</CardTitle>
                    <CardDescription>UAE resident language preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={languageDemographics}
                      height={300}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Speaker Population</CardTitle>
                    <CardDescription>Estimated speakers in UAE (millions)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={languageDemographics}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'speakers', name: 'Speakers (M)', color: CHART_COLORS.navy },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Language Community Details</CardTitle>
                  <CardDescription>Breakdown by language group</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {languageDemographics.map((lang, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-200">{lang.name}</span>
                          <span className="text-platinum">{lang.percentage}% · {(lang.speakers / 1000000).toFixed(1)}M speakers</span>
                        </div>
                        <Progress value={lang.percentage} className="h-3" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Arabic Dialects Tab */}
        <TabsContent value="dialects" className="space-y-6">
          <GlassPanel title="Arabic Dialect Landscape" description="Distribution and sentiment across Arabic variants">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Arabic Dialect Distribution</CardTitle>
                    <CardDescription>Within Arabic-speaking population</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={arabicDialects}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Dialects by Region</CardTitle>
                    <CardDescription>Primary dialect usage regions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={arabicDialects}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'percentage', name: 'Percentage', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Asian Languages in UAE</CardTitle>
                  <CardDescription>South Asian and Southeast Asian language communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <PieChart
                      data={asianLanguages}
                      height={250}
                      showLegend={true}
                    />
                    <div className="space-y-4">
                      {asianLanguages.map((lang, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-slate-200">{lang.name}</span>
                            <span className="text-platinum">{lang.percentage}% · {(lang.speakers / 1000).toFixed(0)}K</span>
                          </div>
                          <Progress value={lang.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment by Language Community" description="Aggregated sentiment scores across language groups">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Language Community Sentiment</CardTitle>
                  <CardDescription>Overall sentiment scores (0-100)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {sentimentByLanguage.map((lang, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center"
                      >
                        <div className={`text-2xl font-bold ${getSentimentColor(lang.sentiment)}`}>
                          {lang.sentiment}
                        </div>
                        <p className="text-sm text-slate-400 mt-1">{lang.name}</p>
                        <div className="flex items-center justify-center gap-1 mt-2">
                          {getTrendIcon(lang.trend)}
                          <span className="text-xs text-slate-500 capitalize">{lang.trend}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Language - Radar View</CardTitle>
                  <CardDescription>Comparative sentiment analysis across communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadarChart
                    data={sentimentByLanguage.map(l => ({ subject: l.name, score: l.sentiment, fullMark: 100 }))}
                    dataKey="score"
                    height={350}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Query Volume Tab */}
        <TabsContent value="volume" className="space-y-6">
          <GlassPanel title="Query Volume Analysis" description="Search query distribution across languages">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Languages by Query Volume</CardTitle>
                  <CardDescription>Monthly search queries (millions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={queryVolumeData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Queries (M)', color: CHART_COLORS.navy },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Volume Growth Trend</CardTitle>
                    <CardDescription>12-month query trajectory</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={[
                        { month: 'Jan', volume: 185 },
                        { month: 'Feb', volume: 192 },
                        { month: 'Mar', volume: 198 },
                        { month: 'Apr', volume: 205 },
                        { month: 'May', volume: 212 },
                        { month: 'Jun', volume: 208 },
                        { month: 'Jul', volume: 215 },
                        { month: 'Aug', volume: 220 },
                        { month: 'Sep', volume: 228 },
                        { month: 'Oct', volume: 235 },
                        { month: 'Nov', volume: 242 },
                        { month: 'Dec', volume: 248 },
                      ]}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.gold },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Language Share</CardTitle>
                    <CardDescription>Percentage of total queries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={queryVolumeData}
                      height={250}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Top Searches Tab */}
        <TabsContent value="searches" className="space-y-6">
          <GlassPanel title="Top Search Terms Across Languages" description="Most searched terms by language community">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Cross-Language Search Intelligence</CardTitle>
                  <CardDescription>High-volume search terms by language</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-3">
                      {topSearchTerms.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                              <Globe className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{item.term}</p>
                              <p className="text-sm text-slate-400">{item.language}</p>
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
                              <Badge
                                variant={item.sentiment === 'positive' ? 'success' : item.sentiment === 'negative' ? 'destructive' : 'secondary'}
                                className="text-xs"
                              >
                                {item.sentiment}
                              </Badge>
                              <p className="text-xs text-slate-400 mt-1">Sentiment</p>
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

        {/* Code-Switching Tab */}
        <TabsContent value="codeswitch" className="space-y-6">
          <GlassPanel title="Code-Switching Patterns" description="Multi-lingual communication patterns in UAE">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Code-Switching Prevalence</CardTitle>
                    <CardDescription>By language combination</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={codeSwitchingData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'prevalence', name: 'Prevalence %', color: CHART_COLORS.platinum },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Code-Switching Metrics</CardTitle>
                    <CardDescription>Multi-lingual usage statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Overall Code-Switching Rate</span>
                          <span className="font-medium text-platinum">68%</span>
                        </div>
                        <Progress value={68} className="h-3" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Arabizi Usage</span>
                          <span className="font-medium text-gold">42%</span>
                        </div>
                        <Progress value={42} className="h-3" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Business English-Arabic</span>
                          <span className="font-medium text-navy">35%</span>
                        </div>
                        <Progress value={35} className="h-3" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">South Asian Hinglish</span>
                          <span className="font-medium text-orange-400">18%</span>
                        </div>
                        <Progress value={18} className="h-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Code-Switching Examples</CardTitle>
                  <CardDescription>Common hybrid language patterns in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                      <Badge variant="gold" className="mb-2">Arabizi</Badge>
                      <p className="text-sm text-slate-300 font-mono">"Ya3tik el 3afye, shu habibi?"</p>
                      <p className="text-xs text-slate-500 mt-2">Arabic written in Latin script</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                      <Badge variant="navy" className="mb-2">Franco</Badge>
                      <p className="text-sm text-slate-300 font-mono">"Mesh ma3loom ya zalam"</p>
                      <p className="text-xs text-slate-500 mt-2">Arabic-French hybrid</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                      <Badge variant="orange" className="mb-2">Hinglish</Badge>
                      <p className="text-sm text-slate-300 font-mono">"Bhai, yaar, UAE mein job mila?"</p>
                      <p className="text-xs text-slate-500 mt-2">Urdu-English hybrid</p>
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
