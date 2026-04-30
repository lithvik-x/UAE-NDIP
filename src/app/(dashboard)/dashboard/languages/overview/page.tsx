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
    { name: 'Levantine', percentage: 10, color: CHART_COLORS.info },
    { name: 'Egyptian', percentage: 7, color: CHART_COLORS.indigo },
    { name: 'Maghrebi', percentage: 3, color: CHART_COLORS.rose },
  ]

  const asianLanguages = [
    { name: 'Hindi/Urdu', percentage: 55, speakers: 825000, color: CHART_COLORS.orange },
    { name: 'Malay/Indonesian', percentage: 20, speakers: 300000, color: CHART_COLORS.emerald },
    { name: 'Tagalog', percentage: 15, speakers: 225000, color: CHART_COLORS.info },
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
    { name: 'Levantine', value: 28400000, color: CHART_COLORS.info },
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
    { name: 'Taglish', prevalence: 15, color: CHART_COLORS.info },
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
          <Badge variant="default" className="mb-2">MULTI-LINGUAL INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum">Languages Overview</h1>
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
          gradient="denim"
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
          gradient="indigo"
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
          <TabsTrigger value="egyptian">Egyptian Arabic</TabsTrigger>
          <TabsTrigger value="russian">Russian</TabsTrigger>
          <TabsTrigger value="chinese">Chinese/Mandarin</TabsTrigger>
          <TabsTrigger value="transliteration">Transliteration</TabsTrigger>
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
              {/* Key Metrics Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Non-Arab English Pref"
                  value="99.7%"
                  icon={<Globe className="h-5 w-5" />}
                  gradient="denim"
                  status="success"
                />
                <MetricCard
                  title="UAE Nationals Arabic"
                  value="80.3%"
                  icon={<Languages className="h-5 w-5" />}
                  gradient="gold"
                  status="success"
                />
                <MetricCard
                  title="AI Translation Use"
                  value="84%"
                  icon={<TrendingUp className="h-5 w-5" />}
                  gradient="emerald"
                  status="success"
                />
                <MetricCard
                  title="Hinglish Speakers"
                  value="350M"
                  icon={<Users className="h-5 w-5" />}
                  gradient="orange"
                  status="success"
                />
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">ATM Language Preferences (Frontiers 2024)</CardTitle>
                    <CardDescription>Dubai ATM interface study, n=566</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Non-Arabs English Preference</span>
                          <span className="font-medium text-navy">99.7%</span>
                        </div>
                        <Progress value={99.7} className="h-3" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">UAE Nationals Arabic Preference</span>
                          <span className="font-medium text-gold">80.3%</span>
                        </div>
                        <Progress value={80.3} className="h-3" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Arab Expats Arabic Preference</span>
                          <span className="font-medium text-emerald">50.8%</span>
                        </div>
                        <Progress value={50.8} className="h-3" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Arabs Outside Dubai Arabic</span>
                          <span className="font-medium text-platinum">72.2%</span>
                        </div>
                        <Progress value={72.2} className="h-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Code-Switching Metrics</CardTitle>
                    <CardDescription>Multi-lingual usage statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Overall Code-Switching Rate</span>
                          <span className="font-medium text-platinum">68%</span>
                        </div>
                        <Progress value={68} className="h-3" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Arabizi Usage (Gulf)</span>
                          <span className="font-medium text-gold">42%</span>
                        </div>
                        <Progress value={42} className="h-3" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Business English-Arabic</span>
                          <span className="font-medium text-navy">35%</span>
                        </div>
                        <Progress value={35} className="h-3" />
                      </div>
                      <div className="space-y-2">
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

              {/* Arabizi Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Badge variant="gold" className="text-xs">Arabizi</Badge>
                    Gulf Romanized Arabic
                  </CardTitle>
                  <CardDescription>Number-letter system: 3=ع, 7=ح, 8=ق, 9=ص, 5=خ</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg border border-gold/30 bg-gold/10 p-3">
                        <p className="text-xs text-gold font-medium mb-1">9aba7 el 5air!</p>
                        <p className="text-xs text-slate-400">صباح الخير = Good morning</p>
                      </div>
                      <div className="rounded-lg border border-gold/30 bg-gold/10 p-3">
                        <p className="text-xs text-gold font-medium mb-1">ta7ki 3arabi?</p>
                        <p className="text-xs text-slate-400">تحكي عربي = Do you speak Arabic?</p>
                      </div>
                      <div className="rounded-lg border border-gold/30 bg-gold/10 p-3">
                        <p className="text-xs text-gold font-medium mb-1">shokran</p>
                        <p className="text-xs text-slate-400">شكراً = Thank you</p>
                      </div>
                      <div className="rounded-lg border border-gold/30 bg-gold/10 p-3">
                        <p className="text-xs text-gold font-medium mb-1">yalla</p>
                        <p className="text-xs text-slate-400">يلا = Let's go!</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 rounded-lg border border-slate-700 bg-slate-800/50">
                      <p className="text-xs text-slate-400 mb-2">Controversy Assessment:</p>
                      <div className="flex gap-4">
                        <Badge variant="emerald" className="text-xs">Modernity +0.8</Badge>
                        <span className="text-xs text-slate-500">Practical, globalized, necessary blend</span>
                        <Badge variant="destructive" className="text-xs ml-auto">Colonialism -0.9</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hinglish Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Badge variant="orange" className="text-xs">Hinglish</Badge>
                    4M Indians in UAE
                  </CardTitle>
                  <CardDescription>$25.5B remittances (2025) | 40,000+ entrepreneurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-3">
                        <p className="text-xs text-orange-400 font-medium mb-1">"UAE mein job mila?"</p>
                        <p className="text-xs text-slate-400">Did you get a job in UAE?</p>
                      </div>
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-3">
                        <p className="text-xs text-orange-400 font-medium mb-1">"Bhai, yaar"</p>
                        <p className="text-xs text-slate-400">Brother, friend (Hindi-Urdu)</p>
                      </div>
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-3">
                        <p className="text-xs text-orange-400 font-medium mb-1">"timepass"</p>
                        <p className="text-xs text-slate-400">Passing time (Hindi-English)</p>
                      </div>
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-3">
                        <p className="text-xs text-orange-400 font-medium mb-1">"I'll prepone"</p>
                        <p className="text-xs text-slate-400">Opposite of postpone (Hinglish)</p>
                      </div>
                    </div>
                    <div className="grid gap-4 mt-4 lg:grid-cols-3">
                      <div className="text-center p-2 rounded-lg bg-slate-800/50">
                        <div className="text-lg font-bold text-orange-400">4M</div>
                        <p className="text-xs text-slate-400">Indian population (35.25%)</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-slate-800/50">
                        <div className="text-lg font-bold text-orange-400">$25.5B</div>
                        <p className="text-xs text-slate-400">Remittances 2025</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-slate-800/50">
                        <div className="text-lg font-bold text-orange-400">52%</div>
                        <p className="text-xs text-slate-400">YouTube Romanized Hindi</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Taglish Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Badge variant="info" className="text-xs">Taglish</Badge>
                    679,819 Filipinos in UAE
                  </CardTitle>
                  <CardDescription>21.3% of Dubai population | Code-switching since 1973</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg border border-info/30 bg-info/10 p-3">
                        <p className="text-xs text-info font-medium mb-1">"Dubai gusto"</p>
                        <p className="text-xs text-slate-400">Filipino expression adapted</p>
                      </div>
                      <div className="rounded-lg border border-info/30 bg-info/10 p-3">
                        <p className="text-xs text-info font-medium mb-1">"Nagse-sweat ako"</p>
                        <p className="text-xs text-slate-400">English roots in Tagalog</p>
                      </div>
                      <div className="rounded-lg border border-info/30 bg-info/10 p-3">
                        <p className="text-xs text-info font-medium mb-1">OFW Communications</p>
                        <p className="text-xs text-slate-400">Overseas Filipino Workers</p>
                      </div>
                      <div className="rounded-lg border border-info/30 bg-info/10 p-3">
                        <p className="text-xs text-info font-medium mb-1">450K in Dubai</p>
                        <p className="text-xs text-slate-400">21.3% of Dubai population</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arabic-English Code-Switching */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Arabic-English Code-Switching Patterns</CardTitle>
                  <CardDescription>Emirati youth: "mixing feels automatic" - Gulf News Youth 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <Badge variant="gold" className="mb-2">Hybrid Phrases</Badge>
                        <p className="text-sm text-slate-300 font-mono">"yalla let's go"</p>
                        <p className="text-sm text-slate-300 font-mono">"I'm so ta3ban today"</p>
                        <p className="text-xs text-slate-500 mt-2">Arabic with English structure</p>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <Badge variant="denim" className="mb-2">Number Phonemes</Badge>
                        <p className="text-sm text-slate-300 font-mono">"3mar" for Omar</p>
                        <p className="text-sm text-slate-300 font-mono">7=ح, 3=ع, 8=ق</p>
                        <p className="text-xs text-slate-500 mt-2">Romanized Arabic numerals</p>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <Badge variant="emerald" className="mb-2">"Arabeezy"</Badge>
                        <p className="text-sm text-slate-300 font-mono">"taken the Arab youth by storm"</p>
                        <p className="text-xs text-slate-500 mt-2">Gulf Arabizi variant</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10">
                      <p className="text-xs text-emerald-400 font-medium mb-2">Driving Factors:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">English business lingua franca</Badge>
                        <Badge variant="secondary" className="text-xs">200+ nationalities</Badge>
                        <Badge variant="secondary" className="text-xs">Private school English instruction</Badge>
                        <Badge variant="secondary" className="text-xs">80%+ private sector English jobs</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UAE Language Policy */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Language Policy & Preservation</CardTitle>
                  <CardDescription>UAE Declaration of Arabic Language 2021 - 10 Principles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                      <div className="text-center p-2 rounded-lg bg-gold/10 border border-gold/30">
                        <div className="text-lg font-bold text-gold">1</div>
                        <p className="text-xs text-slate-400">Identity</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gold/10 border border-gold/30">
                        <div className="text-lg font-bold text-gold">2</div>
                        <p className="text-xs text-slate-400">Teaching & Learning</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gold/10 border border-gold/30">
                        <div className="text-lg font-bold text-gold">3</div>
                        <p className="text-xs text-slate-400">Arabic Content</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gold/10 border border-gold/30">
                        <div className="text-lg font-bold text-gold">4</div>
                        <p className="text-xs text-slate-400">Language Technology</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gold/10 border border-gold/30">
                        <div className="text-lg font-bold text-gold">5</div>
                        <p className="text-xs text-slate-400">Related Industries</p>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                      <div className="text-center p-2 rounded-lg bg-gold/10 border border-gold/30">
                        <div className="text-lg font-bold text-gold">6</div>
                        <p className="text-xs text-slate-400">Translation</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gold/10 border border-gold/30">
                        <div className="text-lg font-bold text-gold">7</div>
                        <p className="text-xs text-slate-400">Arabic & Science</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gold/10 border border-gold/30">
                        <div className="text-lg font-bold text-gold">8</div>
                        <p className="text-xs text-slate-400">Global Language</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gold/10 border border-gold/30">
                        <div className="text-lg font-bold text-gold">9</div>
                        <p className="text-xs text-slate-400">National Policies</p>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-gold/10 border border-gold/30">
                        <div className="text-lg font-bold text-gold">10</div>
                        <p className="text-xs text-slate-400">Future of Arabic</p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-4 lg:grid-cols-3">
                      <div className="p-3 rounded-lg bg-navy/20 border border-navy/30">
                        <p className="text-xs text-navy font-medium">2025 Ministry Policy</p>
                        <p className="text-xs text-slate-400 mt-1">Arabic tests mandatory from grade 1 in government schools</p>
                      </div>
                      <div className="p-3 rounded-lg bg-navy/20 border border-navy/30">
                        <p className="text-xs text-navy font-medium">Private Schools</p>
                        <p className="text-xs text-slate-400 mt-1">Min 40 min/day → 300 min/week by 2027-2028</p>
                      </div>
                      <div className="p-3 rounded-lg bg-navy/20 border border-navy/30">
                        <p className="text-xs text-navy font-medium">Scale</p>
                        <p className="text-xs text-slate-400 mt-1">9 new schools, 25,000+ pupils, 800 teachers</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Entities */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Researchers & Organizations</CardTitle>
                  <CardDescription>Academic and policy institutions driving code-switching research</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gold font-medium mb-2">Academic Researchers (Tier 2-3)</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">Safaa Shehadi & Shuly Wintner (WANLP 2022)</Badge>
                        <Badge variant="outline" className="text-xs">Dr. Wafa' Hazaymeh (Positive impact)</Badge>
                        <Badge variant="outline" className="text-xs">Al-Issa & Sulieman (Frontiers 2024)</Badge>
                        <Badge variant="outline" className="text-xs">Fatiha Hanani (AUS 2009)</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-emerald font-medium mb-2">Government & Policy (Tier 0-1)</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">Sarah Al Amiri (Minister Education)</Badge>
                        <Badge variant="outline" className="text-xs">ICP Government</Badge>
                        <Badge variant="outline" className="text-xs">MBRF</Badge>
                        <Badge variant="outline" className="text-xs">Media Office UAE</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-orange font-medium mb-2">Campaigns</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="destructive" className="text-xs">"Write Arabic"</Badge>
                        <Badge variant="destructive" className="text-xs">"Enough Franco"</Badge>
                        <Badge variant="emerald" className="text-xs">"Write it Right"</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Egyptian Arabic Tab */}
        <TabsContent value="egyptian" className="space-y-6">
          <GlassPanel title="Egyptian Arabic Intelligence" description="Egyptian media, workers, trade, and cultural exchange with UAE">
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Egyptians in UAE"
                  value="400K+"
                  icon={<Users className="h-5 w-5" />}
                  gradient="indigo"
                  status="success"
                />
                <MetricCard
                  title="Egypt-UAE Trade"
                  value="$4.8B"
                  previousValue={2.7}
                  unit="H1 2025"
                  icon={<TrendingUp className="h-5 w-5" />}
                  gradient="emerald"
                  status="success"
                />
                <MetricCard
                  title="Trade Growth"
                  value="+77.7%"
                  icon={<TrendingUp className="h-5 w-5" />}
                  gradient="gold"
                  status="success"
                />
                <MetricCard
                  title="UAE Investment"
                  value="$2.2B"
                  previousValue={2.1}
                  icon={<Globe className="h-5 w-5" />}
                  gradient="denim"
                  status="success"
                />
              </div>

              {/* Trade & Demographics Grid */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Egypt-UAE Trade Dashboard (H1 2025)</CardTitle>
                    <CardDescription>Bilateral trade performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Total Trade</span>
                        <span className="font-bold text-emerald-400">$4.8B (+77.7%)</span>
                      </div>
                      <Progress value={100} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Egyptian Exports to UAE</span>
                        <span className="font-bold text-emerald-400">$3.8B (+153.3%)</span>
                      </div>
                      <Progress value={79} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Egyptian Imports from UAE</span>
                        <span className="font-bold text-amber-400">$1.0B (-16.6%)</span>
                      </div>
                      <Progress value={21} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Egyptian Community in UAE</CardTitle>
                    <CardDescription>Population and community metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Egyptian Residents</span>
                        <span className="font-bold text-indigo-400">400,000+</span>
                      </div>
                      <Progress value={80} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Monthly Visitors</span>
                        <span className="font-bold text-indigo-400">~5,000</span>
                      </div>
                      <Progress value={10} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Facebook Community</span>
                        <span className="font-bold text-indigo-400">150,000+ members</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Egyptian Export Categories */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Egyptian Export Categories to UAE (H1 2025)</CardTitle>
                  <CardDescription>Pareto analysis of export commodities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Pearls, precious stones, jewellery</span>
                      <span className="font-bold text-emerald-400">$3.2B (84.2%)</span>
                    </div>
                    <Progress value={84} className="h-3" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Electrical machinery/equipment</span>
                      <span className="font-bold text-slate-300">$151M (88.2%)</span>
                    </div>
                    <Progress value={4} className="h-3" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Vegetables and fruit</span>
                      <span className="font-bold text-slate-300">$111M (91.1%)</span>
                    </div>
                    <Progress value={3} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment Analysis by Topic */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Analysis by Topic</CardTitle>
                  <CardDescription>Egyptian vs UAE sentiment on key issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                        <div className="text-xs text-red-400 font-medium mb-2">GERD</div>
                        <div className="text-xs text-slate-400">Egyptian: Hostile</div>
                        <div className="text-xs text-slate-400">Tension: High</div>
                      </div>
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                        <div className="text-xs text-red-400 font-medium mb-2">Media Influence</div>
                        <div className="text-xs text-slate-400">Egyptian: Accusatory</div>
                        <div className="text-xs text-slate-400">Tension: High</div>
                      </div>
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                        <div className="text-xs text-amber-400 font-medium mb-2">Worker Conditions</div>
                        <div className="text-xs text-slate-400">Egyptian: Negative</div>
                        <div className="text-xs text-slate-400">Tension: Medium</div>
                      </div>
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                        <div className="text-xs text-emerald-400 font-medium mb-2">Trade Relations</div>
                        <div className="text-xs text-slate-400">Both: Positive</div>
                        <div className="text-xs text-slate-400">Tension: Low</div>
                      </div>
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                        <div className="text-xs text-emerald-400 font-medium mb-2">Cultural Exchange</div>
                        <div className="text-xs text-slate-400">Both: Positive</div>
                        <div className="text-xs text-slate-400">Tension: Low</div>
                      </div>
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                        <div className="text-xs text-red-400 font-medium mb-2">Regional Politics</div>
                        <div className="text-xs text-slate-400">Both: Divergent</div>
                        <div className="text-xs text-slate-400">Tension: High</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Historical Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Egypt-UAE Historical Timeline</CardTitle>
                  <CardDescription>Key events in bilateral relations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-indigo-400 w-20">1971</div>
                        <div className="text-xs text-slate-300">UAE independence; relations established</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-indigo-400 w-20">2011</div>
                        <div className="text-xs text-slate-300">Egyptian revolution; many Egyptians relocated to UAE</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-amber-400 w-20">2013</div>
                        <div className="text-xs text-slate-300">UAE supported Morsi overthrow; $4B aid; Tamarud movement funding</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-amber-400 w-20">2015</div>
                        <div className="text-xs text-slate-300">Al Ghad Al Arabi launched with $45M UAE funding</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-amber-400 w-20">2016</div>
                        <div className="text-xs text-slate-300">Al-Hayat acquisition - 55% by Mansour bin Zayed</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-amber-400 w-20">2017</div>
                        <div className="text-xs text-slate-300">DMC-Fujairah cooperation - military intelligence media link</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-red-400 w-20">2018</div>
                        <div className="text-xs text-slate-300">UAE denies Egyptian media reports; TeN Channel acquisition ($73M)</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-indigo-400 w-20">2019</div>
                        <div className="text-xs text-slate-300">Egyptian Journalists Syndicate training center - UAE institutional presence</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-red-400 w-20">Mar 2026</div>
                        <div className="text-xs text-slate-300">Morocco-Egypt incident; UAE media response</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-red-400 w-20">Apr 2026</div>
                        <div className="text-xs text-slate-300">Egyptian media blames UAE for GERD</div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Media Investments */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Media Investments in Egypt</CardTitle>
                  <CardDescription>Funding and acquisitions overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                        <div className="text-xs text-amber-400 font-medium mb-1">UAE Aid (2013)</div>
                        <div className="text-lg font-bold text-slate-200">$4B</div>
                      </div>
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                        <div className="text-xs text-amber-400 font-medium mb-1">Dubai Aid (Post-MB)</div>
                        <div className="text-lg font-bold text-slate-200">$8B</div>
                      </div>
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                        <div className="text-xs text-amber-400 font-medium mb-1">Al Ghad Al Arabi</div>
                        <div className="text-lg font-bold text-slate-200">$45M</div>
                      </div>
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                        <div className="text-xs text-amber-400 font-medium mb-1">TeN Channel</div>
                        <div className="text-lg font-bold text-slate-200">$73M</div>
                      </div>
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                        <div className="text-xs text-amber-400 font-medium mb-1">Al-Hayat</div>
                        <div className="text-lg font-bold text-slate-200">55%</div>
                      </div>
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                        <div className="text-xs text-amber-400 font-medium mb-1">Tamarud Funding</div>
                        <div className="text-lg font-bold text-slate-200">Verified</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Figures */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key UAE Figures</CardTitle>
                    <CardDescription>Figures involved in Egypt relations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Sheikh Tahnoun bin Zayed</span>
                        <Badge variant="denim" className="text-xs">Al Ghad Al Arabi Owner</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Mohammed Dahlan</span>
                        <Badge variant="denim" className="text-xs">UAE Advisor, TeN Channel</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Mansour bin Zayed</span>
                        <Badge variant="denim" className="text-xs">Al-Hayat (55%)</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Shaikh Abdullah Bin Zayed</span>
                        <Badge variant="denim" className="text-xs">Foreign Minister</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Egyptian Media Figures</CardTitle>
                    <CardDescription>Egyptian figures in media landscape</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Tamer Mansour</span>
                        <Badge variant="gold" className="text-xs">Ambassador to UAE</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Karam Gebril</span>
                        <Badge variant="gold" className="text-xs">Media Regulation Head</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Abdel Latif El Mnawe</span>
                        <Badge variant="gold" className="text-xs">Al Ghad Channel Head</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Wael Abdel Fattah</span>
                        <Badge variant="gold" className="text-xs">Independent Writer</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* UAE Relevance Assessment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Relevance Assessment</CardTitle>
                  <CardDescription>Topic relevance categorization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-red-400 font-medium mb-2">Critical Relevance</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="destructive" className="text-xs">Diplomatic incidents</Badge>
                        <Badge variant="destructive" className="text-xs">Media acquisition</Badge>
                        <Badge variant="destructive" className="text-xs">Trade surge</Badge>
                        <Badge variant="destructive" className="text-xs">GERD tensions</Badge>
                        <Badge variant="destructive" className="text-xs">Worker exploitation</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-amber-400 font-medium mb-2">High Relevance</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">400K+ expats</Badge>
                        <Badge variant="default" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">Morocco incident</Badge>
                        <Badge variant="default" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">$4B+ historical aid</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-emerald-400 font-medium mb-2">Medium Relevance</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Ramadan TV series</Badge>
                        <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Egyptian movies</Badge>
                        <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">FIFA Arab Cup</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Russian Tab */}
        <TabsContent value="russian" className="space-y-6">
          <GlassPanel title="Russian Intelligence" description="Russian community, trade relations, sanctions evasion, and tourism in UAE">
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Russian Population"
                  value="60-500K"
                  icon={<Users className="h-5 w-5" />}
                  gradient="denim"
                  status="success"
                />
                <MetricCard
                  title="Trade Volume 2024"
                  value="$9-11.5B"
                  icon={<TrendingUp className="h-5 w-5" />}
                  gradient="emerald"
                  status="success"
                />
                <MetricCard
                  title="Russian Visitors 2023"
                  value="2.024M"
                  icon={<Globe className="h-5 w-5" />}
                  gradient="gold"
                  status="success"
                />
                <MetricCard
                  title="Captives Exchanged"
                  value="6,305"
                  icon={<CheckCircle className="h-5 w-5" />}
                  gradient="indigo"
                  status="success"
                />
              </div>

              {/* Trade & Sanctions Grid */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Russia-UAE Trade Dashboard</CardTitle>
                    <CardDescription>Bilateral trade performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Trade 2024</span>
                        <span className="font-bold text-emerald-400">$9-11.5B</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Trade Growth 2022</span>
                        <span className="font-bold text-emerald-400">+68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Russian Capital in UAE</span>
                        <span className="font-bold text-emerald-400">$30B+</span>
                      </div>
                      <Progress value={100} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Russian Companies</span>
                        <span className="font-bold text-amber-400">4,000</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sanctions Evasion Metrics</CardTitle>
                    <CardDescription>Gold and oil trade indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Gold from Russia 2022</span>
                        <span className="font-bold text-red-400">96.4 tonnes</span>
                      </div>
                      <Progress value={100} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Gold from Russia 2021</span>
                        <span className="font-bold text-slate-300">1.3 tonnes</span>
                      </div>
                      <Progress value={1.3} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Russian Oil to Fujairah (Dec 2022)</span>
                        <span className="font-bold text-red-400">141K bbl/day</span>
                      </div>
                      <Progress value={60} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Oil to Fujairah (Apr 2022)</span>
                        <span className="font-bold text-slate-300">0 bbl/day</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Real Estate Investment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Russian Real Estate Investment in Dubai</CardTitle>
                  <CardDescription>Property purchases after 2022 invasion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-4">
                    <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-amber-400">$6.3B</div>
                      <div className="text-xs text-slate-400 mt-1">Total Post-2022</div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">6,600</div>
                      <div className="text-xs text-slate-400 mt-1">Properties Owned</div>
                    </div>
                    <div className="rounded-lg border border-info-500/30 bg-info-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-info-400">$1.1M</div>
                      <div className="text-xs text-slate-400 mt-1">Average Purchase</div>
                    </div>
                    <div className="rounded-lg border border-platinum-500/30 bg-platinum-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-platinum-400">#3</div>
                      <div className="text-xs text-slate-400 mt-1">Current Buyer Rank</div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Price Increase Since 2020</span>
                      <span className="font-bold text-amber-400">124%</span>
                    </div>
                    <Progress value={100} className="h-3" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Existing Property Increase</span>
                      <span className="font-bold text-emerald-400">940%</span>
                    </div>
                    <Progress value={94} className="h-3" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="gold" className="text-xs">Palm Jumeirah</Badge>
                    <Badge variant="gold" className="text-xs">Emirates Hills</Badge>
                    <Badge variant="gold" className="text-xs">Bluewaters Island</Badge>
                    <Badge variant="gold" className="text-xs">Downtown Dubai</Badge>
                    <Badge variant="gold" className="text-xs">Dubai Marina</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Notable Sanctioned Oligarchs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Notable Sanctioned Oligarchs with UAE Ties</CardTitle>
                  <CardDescription>Sanctioned Russians with UAE assets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-slate-200">Roman Abramovich</div>
                          <div className="text-xs text-slate-400">UK, EU, US (partial) sanctions</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-amber-400">$156M</div>
                          <div className="text-xs text-slate-400">Superyacht</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-slate-200">Andrei Skoch</div>
                          <div className="text-xs text-slate-400">US, UK, EU sanctions</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-amber-400">Madame Gu</div>
                          <div className="text-xs text-slate-400">Yacht at Port Rashid</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-slate-200">38 Putin-connected Russians</div>
                          <div className="text-xs text-slate-400">Property records</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-platinum-400">$314M</div>
                          <div className="text-xs text-slate-400">Total properties</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UAE Mediation Role */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Mediation: Russia-Ukraine</CardTitle>
                  <CardDescription>Prisoner exchange and diplomatic efforts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-4">
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-400">6,305</div>
                      <div className="text-xs text-slate-400 mt-1">Total Captives Exchanged</div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-400">350</div>
                      <div className="text-xs text-slate-400 mt-1">Latest Exchange (Apr 2026)</div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-400">21</div>
                      <div className="text-xs text-slate-400 mt-1">Mediation Efforts</div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-400">2</div>
                      <div className="text-xs text-slate-400 mt-1">Trilateral Talks in Abu Dhabi</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment Analysis */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Analysis by Topic</CardTitle>
                  <CardDescription>Russian coverage sentiment across key areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                      <div className="text-xs text-emerald-400 font-medium mb-2">Trade Relations</div>
                      <div className="text-2xl font-bold text-emerald-400">85</div>
                      <div className="text-xs text-slate-400">Strongly Positive</div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                      <div className="text-xs text-emerald-400 font-medium mb-2">UAE Mediation</div>
                      <div className="text-2xl font-bold text-emerald-400">88</div>
                      <div className="text-xs text-slate-400">Very Positive</div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                      <div className="text-xs text-emerald-400 font-medium mb-2">Russian Community</div>
                      <div className="text-2xl font-bold text-emerald-400">63</div>
                      <div className="text-xs text-slate-400">Positive</div>
                    </div>
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                      <div className="text-xs text-red-400 font-medium mb-2">Sanctions Evasion</div>
                      <div className="text-2xl font-bold text-red-400">28</div>
                      <div className="text-xs text-slate-400">Negative</div>
                    </div>
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                      <div className="text-xs text-red-400 font-medium mb-2">Real Estate</div>
                      <div className="text-2xl font-bold text-red-400">35</div>
                      <div className="text-xs text-slate-400">Shifting Negative</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* US Response Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">US Response Actions</CardTitle>
                  <CardDescription>Sanctions enforcement timeline</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-red-400 w-24">Jan 2023</div>
                        <div className="text-xs text-slate-300">Brian Nelson (Treasury) led US delegation to UAE</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-red-400 w-24">Mar 2023</div>
                        <div className="text-xs text-slate-300">UAE cancelled license for Russia's MTS Bank</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-red-400 w-24">Sep 2023</div>
                        <div className="text-xs text-slate-300">US, UK, EU officials visited UAE over dual-use exports</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-red-400 w-24">Jun 2024</div>
                        <div className="text-xs text-slate-300">Red Coast Metals Trading sanctioned</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-red-400 w-24">Dec 2024</div>
                        <div className="text-xs text-slate-300">US sanctions on UAE entities jumped significantly</div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Why Russians Choose Dubai */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Why Russians Choose Dubai</CardTitle>
                  <CardDescription>Key attraction factors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3">
                      <div className="text-sm font-medium text-emerald-400">No Visa Required</div>
                      <div className="text-xs text-slate-400 mt-1">For Russian citizens</div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3">
                      <div className="text-sm font-medium text-emerald-400">0% Income Tax</div>
                      <div className="text-xs text-slate-400 mt-1">Personal income</div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3">
                      <div className="text-sm font-medium text-emerald-400">Direct Flights</div>
                      <div className="text-xs text-slate-400 mt-1">~$120 round-trip (Feb 2023)</div>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3">
                      <div className="text-sm font-medium text-emerald-400">Russian-Speaking</div>
                      <div className="text-xs text-slate-400 mt-1">Widely usable language</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visitor Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Russian Visitor Statistics</CardTitle>
                  <CardDescription>Tourism flow to UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">2022 Visitors</span>
                      <span className="font-bold text-emerald-400">1M+ (+60% YoY)</span>
                    </div>
                    <Progress value={60} className="h-3" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">2023 Visitors</span>
                      <span className="font-bold text-emerald-400">2.024M (13% of tourists)</span>
                    </div>
                    <Progress value={80} className="h-3" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">Share of Dubai Tourists</span>
                      <span className="font-bold text-amber-400">Largest nationality</span>
                    </div>
                    <Progress value={85} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              {/* Diplomatic Events Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Diplomatic Events Timeline</CardTitle>
                  <CardDescription>Key bilateral engagements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-indigo-400 w-24">Dec 2023</div>
                        <div className="text-xs text-slate-300">Putin visited Abu Dhabi</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-indigo-400 w-24">Jan 2024</div>
                        <div className="text-xs text-slate-300">UAE joined BRICS</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-indigo-400 w-24">Oct 2024</div>
                        <div className="text-xs text-slate-300">Putin met MBZ in Moscow</div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-xs font-bold text-indigo-400 w-24">Jan 2026</div>
                        <div className="text-xs text-slate-300">Putin hosted UAE President at Kremlin</div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* UAE Relevance Assessment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Relevance Assessment</CardTitle>
                  <CardDescription>Topic categorization by importance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-red-400 font-medium mb-2">Critical Relevance</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="destructive" className="text-xs">Sanctions Evasion</Badge>
                        <Badge variant="destructive" className="text-xs">US-UAE Relations</Badge>
                        <Badge variant="destructive" className="text-xs">Oligarch Presence</Badge>
                        <Badge variant="destructive" className="text-xs">Property Market Impact</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-amber-400 font-medium mb-2">High Relevance</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">Trade Relations</Badge>
                        <Badge variant="default" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">Tourist Flow</Badge>
                        <Badge variant="default" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">Mediation Role</Badge>
                        <Badge variant="default" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">Community</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-emerald-400 font-medium mb-2">Medium Relevance</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Language Growth</Badge>
                        <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Diplomatic Meetings</Badge>
                        <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Regional Impact</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Chinese/Mandarin Tab */}
        <TabsContent value="chinese" className="space-y-6">
          <GlassPanel title="Chinese/Mandarin Intelligence" description="China-UAE relations, trade, tourism, and cultural exchange">
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Bilateral Trade 2025"
                  value="$111.5B"
                  previousValue={100}
                  unit="+24.5%"
                  icon={<TrendingUp className="h-5 w-5" />}
                  gradient="gold"
                  status="success"
                />
                <MetricCard
                  title="Chinese Visitors"
                  value="860K"
                  previousValue={824}
                  unit="2025"
                  icon={<Users className="h-5 w-5" />}
                  gradient="danger"
                  status="success"
                />
                <MetricCard
                  title="Chinese Companies"
                  value="15,000+"
                  icon={<Globe className="h-5 w-5" />}
                  gradient="emerald"
                  status="success"
                />
                <MetricCard
                  title="RMB Payments"
                  value="77.8%"
                  unit="of Middle East"
                  icon={<TrendingUp className="h-5 w-5" />}
                  gradient="denim"
                  status="success"
                />
              </div>

              {/* Trade & Investment Grid */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">China-UAE Trade Dashboard</CardTitle>
                    <CardDescription>Bilateral trade performance (USD billions)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">2025 Bilateral Trade</span>
                        <span className="font-bold text-emerald-400">$111.5B (+24.5%)</span>
                      </div>
                      <Progress value={100} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">2024 Bilateral Trade</span>
                        <span className="font-bold text-emerald-400">$100B (+7.2%)</span>
                      </div>
                      <Progress value={90} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Chinese Exports to UAE</span>
                        <span className="font-bold text-slate-300">$65.6B</span>
                      </div>
                      <Progress value={59} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">UAE Exports to China</span>
                        <span className="font-bold text-slate-300">$36.2B</span>
                      </div>
                      <Progress value={32} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Energy Cooperation</CardTitle>
                    <CardDescription>ADNOC and Chinese energy agreements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">LNG Contract Value</span>
                        <span className="font-bold text-gold">$4.5-5.5B</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">CNOOC Abu Dhabi Stake</span>
                        <span className="font-bold text-slate-300">4% ($1.8B, 40 yrs)</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">ENN LNG Agreement</span>
                        <span className="font-bold text-slate-300">1M tons/year, 15 yrs</span>
                      </div>
                      <Progress value={70} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Energy Cooperation</span>
                        <span className="font-bold text-emerald-400">40 years</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Iran-UAE Conflict Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Iran-UAE Conflict 2026 (Critical)</CardTitle>
                  <CardDescription>Missile and drone attacks on UAE territory</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                        <div className="text-2xl font-bold text-red-400">270+</div>
                        <div className="text-xs text-slate-400">Missiles Launched</div>
                      </div>
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                        <div className="text-2xl font-bold text-red-400">1,500+</div>
                        <div className="text-xs text-slate-400">Drones Launched</div>
                      </div>
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-center">
                        <div className="text-2xl font-bold text-amber-400">537</div>
                        <div className="text-xs text-slate-400">Ballistic Intercepted</div>
                      </div>
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-center">
                        <div className="text-2xl font-bold text-amber-400">13</div>
                        <div className="text-xs text-slate-400">Fatalities</div>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3 mt-4">
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <div className="text-xs text-red-400 font-medium mb-1">Casualties</div>
                        <div className="text-sm text-slate-300">13 dead, 224 injured</div>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <div className="text-xs text-amber-400 font-medium mb-1">Flights Cancelled</div>
                        <div className="text-sm text-slate-300">2,300+ in 24 hours</div>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                        <div className="text-xs text-emerald-400 font-medium mb-1">Defense Hits</div>
                        <div className="text-sm text-slate-300">8 Patriot 3, 2 THAAD</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tourism & Real Estate */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Chinese Tourism to UAE</CardTitle>
                    <CardDescription>Visitor statistics and visa policy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">2025 Chinese Visitors</span>
                        <span className="font-bold text-emerald-400">860,000</span>
                      </div>
                      <Progress value={86} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">2024 Chinese Visitors</span>
                        <span className="font-bold text-emerald-400">824,000 (+31%)</span>
                      </div>
                      <Progress value={82} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Visa-Free Duration</span>
                        <span className="font-bold text-gold">90 days / 180 days</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Chinese Real Estate Buyers</span>
                        <span className="font-bold text-danger">14% of foreigners</span>
                      </div>
                      <Progress value={14} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Chinese Tech Presence</CardTitle>
                    <CardDescription>Major Chinese companies in UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Huawei</span>
                        <Badge variant="denim" className="text-xs">1,000+ employees</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">ByteDance/TikTok</span>
                        <Badge variant="denim" className="text-xs">MENA HQ since 2018</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Alibaba</span>
                        <Badge variant="denim" className="text-xs">2 data centers</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">WeRide</span>
                        <Badge variant="emerald" className="text-xs">Robotaxi Abu Dhabi</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Baidu Apollo Go</span>
                        <Badge variant="emerald" className="text-xs">Dubai Internet City</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Keeta (Meituan)</span>
                        <Badge variant="gold" className="text-xs">5 drone routes</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* RMB Internationalization */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">RMB Internationalization</CardTitle>
                  <CardDescription>Chinese yuan (RMB) in UAE-China financial transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border border-gold-500/30 bg-gold-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">77.8%</div>
                      <div className="text-xs text-slate-400">UAE-China Share of Middle East RMB</div>
                    </div>
                    <div className="rounded-lg border border-gold-500/30 bg-gold-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">53%</div>
                      <div className="text-xs text-slate-400">Annual RMB Growth (2020-2024)</div>
                    </div>
                    <div className="rounded-lg border border-gold-500/30 bg-gold-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">#2</div>
                      <div className="text-xs text-slate-400">Global Rank in Trade Finance</div>
                    </div>
                    <div className="rounded-lg border border-gold-500/30 bg-gold-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">#3</div>
                      <div className="text-xs text-slate-400">Global Rank in Payments</div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">FAB RMB Clearing Bank</span>
                      <Badge variant="gold">First Gulf regional</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">ABC Dubai RMB Clearing</span>
                      <Badge variant="gold">First in UAE</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Chinese Banks DIFC Assets</span>
                      <Badge variant="gold">30%+ of total</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment Analysis by Topic */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Analysis by Topic</CardTitle>
                  <CardDescription>Chinese media sentiment on key issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                        <div className="text-xs text-emerald-400 font-medium mb-2">China-UAE Trade</div>
                        <div className="text-xs text-slate-400">Sentiment: Positive</div>
                        <div className="text-xs text-slate-400">Narrative: Record $100B+</div>
                      </div>
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                        <div className="text-xs text-emerald-400 font-medium mb-2">Belt and Road</div>
                        <div className="text-xs text-slate-400">Sentiment: Positive</div>
                        <div className="text-xs text-slate-400">Narrative: Key node, founding member</div>
                      </div>
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                        <div className="text-xs text-emerald-400 font-medium mb-2">Chinese Tourism</div>
                        <div className="text-xs text-slate-400">Sentiment: Positive</div>
                        <div className="text-xs text-slate-400">Narrative: 860K visitors, visa-free</div>
                      </div>
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                        <div className="text-xs text-red-400 font-medium mb-2">Iran-UAE Conflict</div>
                        <div className="text-xs text-slate-400">Sentiment: Negative/Crisis</div>
                        <div className="text-xs text-slate-400">Narrative: Under attack, air defense</div>
                      </div>
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                        <div className="text-xs text-red-400 font-medium mb-2">Security Advisories</div>
                        <div className="text-xs text-slate-400">Sentiment: Negative/Warning</div>
                        <div className="text-xs text-slate-400">Narrative: Reduce outdoor activities</div>
                      </div>
                      <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                        <div className="text-xs text-amber-400 font-medium mb-2">Real Estate</div>
                        <div className="text-xs text-slate-400">Sentiment: Cautious/Opportunistic</div>
                        <div className="text-xs text-slate-400">Narrative: Buy the dip, 14% share</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Diplomatic Relations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Diplomatic Relations</CardTitle>
                  <CardDescription>Key diplomatic events and officials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">New Ambassador</span>
                      <Badge variant="denim">Zeng Jixin (since March 2026)</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Former Ambassador</span>
                      <Badge variant="platinum">Zhang Yiming</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Crown Prince Visit</span>
                      <Badge variant="gold">April 12-14, 2026 to China</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">CEPA Agreements</span>
                      <Badge variant="emerald">28 agreements</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">BRI Founding Member</span>
                      <Badge variant="emerald">Yes (2013)</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Comprehensive Partnership</span>
                      <Badge variant="emerald">Established 2018</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UAE Relevance Assessment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Relevance Assessment</CardTitle>
                  <CardDescription>Topic categorization by relevance level</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-red-400 font-medium mb-2">Critical Relevance</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="destructive" className="text-xs">Iran-UAE Conflict</Badge>
                        <Badge variant="destructive" className="text-xs">Bilateral Trade</Badge>
                        <Badge variant="destructive" className="text-xs">Defense Systems</Badge>
                        <Badge variant="destructive" className="text-xs">Real Estate</Badge>
                        <Badge variant="destructive" className="text-xs">Energy LNG</Badge>
                        <Badge variant="destructive" className="text-xs">RMB/Finance</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-amber-400 font-medium mb-2">High Relevance</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">Chinese Tourism</Badge>
                        <Badge variant="default" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">Technology</Badge>
                        <Badge variant="default" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">Diplomatic</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-emerald-400 font-medium mb-2">Medium Relevance</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Agriculture</Badge>
                        <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Healthcare</Badge>
                        <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Media</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Transliteration Tab */}
        <TabsContent value="transliteration" className="space-y-6">
          <GlassPanel title="Arabic-to-Roman Transliteration Intelligence" description="Name variants, script variations, and romanization standards for UAE entities">
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Queries Executed"
                  value="25+"
                  icon={<Languages className="h-5 w-5" />}
                  gradient="gold"
                  status="success"
                />
                <MetricCard
                  title="Entity Variants"
                  value="15"
                  icon={<Globe className="h-5 w-5" />}
                  gradient="emerald"
                  status="success"
                />
                <MetricCard
                  title="Scripts Covered"
                  value="4"
                  icon={<BookOpen className="h-5 w-5" />}
                  gradient="denim"
                  status="success"
                />
                <MetricCard
                  title="Standards"
                  value="4"
                  icon={<CheckCircle className="h-5 w-5" />}
                  gradient="indigo"
                  status="success"
                />
              </div>

              {/* Person Name Transliterations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Personal Name Transliterations</CardTitle>
                  <CardDescription>Arabic to Roman character mapping patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-gold/30 bg-gold/10 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="gold" className="font-mono">محمد</Badge>
                        <span className="text-xs text-slate-400">Arabic</span>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
                        {['Mohammed', 'Muhammad', 'Mohamed', 'Mohamad', 'Muhamed', 'Muhamad'].map((variant) => (
                          <div key={variant} className="rounded bg-slate-800/50 px-2 py-1 text-center text-sm text-platinum">{variant}</div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border border-platinum/30 bg-platinum/10 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="platinum" className="font-mono">الشيخ</Badge>
                        <span className="text-xs text-slate-400">Honorific</span>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-4">
                        {['Sheikh', 'Shaikh', 'Sheik', 'Shaykh'].map((variant) => (
                          <div key={variant} className="rounded bg-slate-800/50 px-2 py-1 text-center text-sm text-platinum">{variant}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Place Name Transliterations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Place Name Transliterations</CardTitle>
                  <CardDescription>Geographic name variants across romanization systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <Badge variant="gold" className="mr-2">Dubai</Badge>
                          <span className="text-xs text-slate-400">دبى</span>
                        </div>
                        <Badge variant="denim">BGN: Dubayy</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Dubai', 'Dubayy', 'Dubaï'].map((v) => (
                          <span key={v} className="rounded bg-navy/20 px-2 py-1 text-xs text-navy">{v}</span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <Badge variant="gold" className="mr-2">Abu Dhabi</Badge>
                          <span className="text-xs text-slate-400">أبو ظبي</span>
                        </div>
                        <Badge variant="denim">BGN: Abū Z̧aby</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Abu Dhabi', 'Abu Zabi', 'Abou Dabi', 'Abu Zahbi'].map((v) => (
                          <span key={v} className="rounded bg-navy/20 px-2 py-1 text-xs text-navy">{v}</span>
                        ))}
                      </div>
                      <div className="mt-2 text-xs text-slate-500">Letter ظ (Ẓā') variations: Dh, Z, Ẓ</div>
                    </div>
                    <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <Badge variant="gold" className="mr-2">Sharjah</Badge>
                          <span className="text-xs text-slate-400">الشارقة</span>
                        </div>
                        <Badge variant="denim">BGN: Ash Shāriqah</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Sharjah', 'Ash Shariqah', 'Sharqah'].map((v) => (
                          <span key={v} className="rounded bg-navy/20 px-2 py-1 text-xs text-navy">{v}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dynasty Name Transliterations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Dynasty Name Transliterations</CardTitle>
                  <CardDescription>Ruling family name variants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-3">
                    <div className="rounded-lg border border-emerald/30 bg-emerald/10 p-4">
                      <div className="text-xs text-emerald-400 font-medium mb-2">Al Maktoum - Dubai</div>
                      <div className="flex flex-wrap gap-2">
                        {['Al Maktoum', 'Al Maktum', 'Al-Maktoum'].map((v) => (
                          <Badge key={v} variant="emerald" className="text-xs">{v}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border border-emerald/30 bg-emerald/10 p-4">
                      <div className="text-xs text-emerald-400 font-medium mb-2">Al Nahyan - Abu Dhabi</div>
                      <div className="flex flex-wrap gap-2">
                        {['Al Nahyan', 'Al Nahiyan'].map((v) => (
                          <Badge key={v} variant="emerald" className="text-xs">{v}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border border-emerald/30 bg-emerald/10 p-4">
                      <div className="text-xs text-emerald-400 font-medium mb-2">Al Qasimi - Sharjah/RAK</div>
                      <div className="flex flex-wrap gap-2">
                        {['Al Qasimi', 'Al Qassimi'].map((v) => (
                          <Badge key={v} variant="emerald" className="text-xs">{v}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Romanization Standards */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Romanization Standards</CardTitle>
                  <CardDescription>BGN/PCGN, UN, ISO, and ALA-LC systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { standard: 'BGN/PCGN', year: 1956, authority: 'US/UK Boards', usage: 'Most common for UAE geographic names' },
                      { standard: 'UN Romanization', year: 1972, authority: 'United Nations', usage: 'International documents' },
                      { standard: 'ISO 233-2', year: 1997, authority: 'ISO', usage: 'Library cataloging' },
                      { standard: 'ALA-LC', year: 0, authority: 'American Library Association', usage: 'Academic/library use' },
                    ].map((sys) => (
                      <div key={sys.standard} className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/50 p-3">
                        <div className="flex items-center gap-3">
                          <div className="font-medium text-platinum">{sys.standard}</div>
                          <div className="text-xs text-slate-400">{sys.year || 'Variable'}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-slate-300">{sys.authority}</div>
                          <div className="text-xs text-slate-500">{sys.usage}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Non-Latin Script Transliterations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Non-Latin Script Transliterations</CardTitle>
                  <CardDescription>UAE entities in Chinese, Russian, and Hindi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                      <div className="text-xs text-red-400 font-medium mb-2">Russian (Cyrillic)</div>
                      <div className="space-y-1 text-sm">
                        <div><span className="text-slate-400">UAE:</span> <span className="font-mono text-platinum">Объединённые Арабские Эмираты (Ob"yedinënnyye Arabskiye Emitaty)</span></div>
                        <div><span className="text-slate-400">Abu Dhabi:</span> <span className="font-mono text-platinum">Абу-Даби</span></div>
                        <div><span className="text-slate-400">Dubai:</span> <span className="font-mono text-platinum">Дубай</span></div>
                        <div><span className="text-slate-400">Abbreviation:</span> <span className="font-mono text-platinum">ОАЭ</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                      <div className="text-xs text-amber-400 font-medium mb-2">Chinese (Simplified/Traditional + Pinyin)</div>
                      <div className="space-y-1 text-sm">
                        <div><span className="text-slate-400">UAE:</span> <span className="font-mono text-platinum">阿拉伯联合酋长国 / Ālābó Liánhé Qiúzhǎngguó</span></div>
                        <div><span className="text-slate-400">Short form:</span> <span className="font-mono text-platinum">阿联酋 (Ā lián qiú)</span></div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
                      <div className="text-xs text-orange-400 font-medium mb-2">Hindi (Devanagari)</div>
                      <div className="space-y-1 text-sm">
                        <div><span className="text-slate-400">UAE:</span> <span className="font-mono text-platinum">संयुक्त अरब अमीरात (Saṃyukt Arab Amīrāt)</span></div>
                        <div><span className="text-slate-400">Abbreviation:</span> <span className="font-mono text-platinum">यूएई</span></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Entity Variant Count */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Entity Name Variant Coverage</CardTitle>
                  <CardDescription>Documented variants per entity type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { entity: 'Person (Mohamed bin Zayed)', count: 6, confidence: 'High' },
                      { entity: 'Person (Mohammed bin Rashid)', count: 6, confidence: 'High' },
                      { entity: 'Person (Honorific Sheikh)', count: 4, confidence: 'High' },
                      { entity: 'Place (Abu Dhabi)', count: 4, confidence: 'High' },
                      { entity: 'Place (Dubai)', count: 3, confidence: 'High' },
                      { entity: 'Place (Sharjah)', count: 3, confidence: 'High' },
                      { entity: 'Dynasty (Al Qasimi)', count: 4, confidence: 'High' },
                      { entity: 'Dynasty (Al Maktoum)', count: 3, confidence: 'High' },
                      { entity: 'Dynasty (Al Nahyan)', count: 2, confidence: 'High' },
                    ].map((item) => (
                      <div key={item.entity} className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">{item.entity}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gold">{item.count}</span>
                          <Badge variant={item.confidence === 'High' ? 'success' : 'warning'} className="text-xs">{item.confidence}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>Information source reliability tiers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { tier: 0, type: 'Official Government', examples: 'u.ae, UAE Embassy, Ministry of Foreign Affairs', reliability: 'Highest' },
                      { tier: 1, type: 'Encyclopedic', examples: 'Wikipedia, Britannica', reliability: 'High' },
                      { tier: 2, type: 'News/Media', examples: 'Getty Images, Instagram', reliability: 'Medium-High' },
                      { tier: 3, type: 'Academic', examples: 'PCGN PDFs, research papers', reliability: 'High' },
                      { tier: 4, type: 'User-Generated', examples: 'Quora, travel sites', reliability: 'Low-Medium' },
                    ].map((source) => (
                      <div key={source.tier} className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/50 p-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${source.tier === 0 ? 'bg-gradient-gold text-navy-950' : source.tier === 1 ? 'bg-gradient-denim text-white' : 'bg-gradient-platinum text-navy-950'}`}>
                            T{source.tier}
                          </div>
                          <div>
                            <div className="font-medium text-platinum">{source.type}</div>
                            <div className="text-xs text-slate-500">{source.examples}</div>
                          </div>
                        </div>
                        <Badge variant={source.reliability === 'Highest' ? 'success' : source.reliability === 'High' ? 'default' : 'warning'}>{source.reliability}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment by Topic */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Topic</CardTitle>
                  <CardDescription>Aggregated sentiment scores from transliteration research</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { topic: 'Sheikh Mohamed bin Zayed', score: 0.9, label: 'Very Positive' },
                      { topic: 'Mohammed bin Rashid Al Maktoum', score: 0.9, label: 'Very Positive' },
                      { topic: 'Dubai development/growth', score: 0.85, label: 'Very Positive' },
                      { topic: 'Al Nahyan family wealth', score: 0.7, label: 'Positive' },
                      { topic: 'Al Qasimi dynasty history', score: 0.6, label: 'Positive' },
                      { topic: 'UAE romanization standards', score: 0.5, label: 'Neutral Positive' },
                    ].map((item) => (
                      <div key={item.topic} className={`rounded-lg border p-4 ${item.score >= 0.8 ? 'border-emerald-500/30 bg-emerald-500/10' : item.score >= 0.6 ? 'border-amber-500/30 bg-amber-500/10' : 'border-slate-700/50 bg-slate-800/50'}`}>
                        <div className="text-xs text-slate-400 mb-1">{item.topic}</div>
                        <div className={`text-2xl font-bold ${item.score >= 0.8 ? 'text-emerald-400' : item.score >= 0.6 ? 'text-amber-400' : 'text-platinum'}`}>
                          {(item.score * 100).toFixed(0)}
                        </div>
                        <div className="text-xs text-slate-500">{item.label}</div>
                      </div>
                    ))}
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
