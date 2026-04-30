'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  Brain,
  Calendar,
  CheckCircle2,
  Download,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
  Globe,
  Scale,
  Leaf,
  Shield,
  DollarSign,
  Target,
  Flag,
  Building,
  Eye,
  FileText,
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle,
} from 'lucide-react'
import {
  narrativeTrackingData,
  keyFindings,
  overallSentimentDistribution,
  sentimentDistributionByNarrative,
  summaryStatistics,
  allNarratives,
  safeHavenNarrative,
  tolerantNationNarrative,
  humanRightsViolatorNarrative,
  climateLeaderNarrative,
  economicPowerhouseNarrative,
  foreignPolicyAggressorNarrative,
  keyTensions,
  dataTables,
  sourceCredibilityMatrix,
  uaeProfile,
} from '@/lib/data/perception/narrative-tracking-data'

export default function NarrativeTrackingPage() {
  const [selectedNarrative, setSelectedNarrative] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [sentimentFilter, setSentimentFilter] = useState<'all' | 'pro' | 'counter' | 'contested'>('all')

  // Filter narratives based on sentiment
  const filteredNarratives = keyFindings.filter(n => {
    if (sentimentFilter === 'all') return true
    if (sentimentFilter === 'pro') return n.dominantFraming === 'PRO-NARRATIVE'
    if (sentimentFilter === 'counter') return n.dominantFraming === 'COUNTER-NARRATIVE'
    if (sentimentFilter === 'contested') return n.dominantFraming === 'CONTESTED'
    return true
  })

  // Calculate sentiment chart data
  const sentimentChartData = [
    { name: 'Positive', value: overallSentimentDistribution.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: overallSentimentDistribution.neutralContextual, color: CHART_COLORS.platinum },
    { name: 'Negative', value: overallSentimentDistribution.negative, color: CHART_COLORS.rose },
  ]

  // Calculate narrative sentiment breakdown for radar/bar chart
  const narrativeSentimentData = sentimentDistributionByNarrative.map(n => ({
    narrative: n.narrative.replace(' ', '\n'),
    positive: n.positive,
    neutral: n.neutral,
    negative: n.negative,
  }))

  // Pro vs Counter sources chart data
  const sourcesChartData = keyFindings.map(n => ({
    narrative: n.narrative.split(' ')[0],
    pro: n.proSources,
    counter: n.counterSources,
  }))

  // Critical narratives count
  const criticalCount = keyFindings.filter(n => n.uaeRelevance === 'Critical').length
  const highCount = keyFindings.filter(n => n.uaeRelevance === 'High').length
  const mediumCount = keyFindings.filter(n => n.uaeRelevance === 'Medium').length

  // Get relevance badge variant
  const getRelevanceBadge = (relevance: string) => {
    switch (relevance) {
      case 'Critical':
        return <Badge variant="destructive" className="text-xs">CRITICAL</Badge>
      case 'High':
        return <Badge variant="warning" className="text-xs">HIGH</Badge>
      case 'Medium':
        return <Badge variant="secondary" className="text-xs">MEDIUM</Badge>
      default:
        return <Badge variant="secondary" className="text-xs">{relevance}</Badge>
    }
  }

  // Get framing badge variant
  const getFramingBadge = (framing: string) => {
    switch (framing) {
      case 'PRO-NARRATIVE':
        return <Badge variant="success" className="text-xs">{framing}</Badge>
      case 'COUNTER-NARRATIVE':
        return <Badge variant="destructive" className="text-xs">{framing}</Badge>
      case 'CONTESTED':
        return <Badge variant="warning" className="text-xs">{framing}</Badge>
      default:
        return <Badge variant="secondary" className="text-xs">{framing}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Narrative Tracking</h1>
          <p className="mt-2 text-slate-600">
            Comprehensive UAE narrative intelligence - 12 narratives tracked across 45 queries
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <BarChart3 className="h-4 w-4" />
            Full Analysis
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Queries"
          value={summaryStatistics.totalQueriesExecuted}
          icon={<Search className="h-6 w-6" />}
          gradient="indigo"
          status="neutral"
        />
        <MetricCard
          title="Pages Analyzed"
          value={summaryStatistics.totalPagesFetched}
          icon={<FileText className="h-6 w-6" />}
          gradient="purple"
          status="neutral"
        />
        <MetricCard
          title="Narratives"
          value={summaryStatistics.totalNarrativesCovered}
          icon={<Target className="h-6 w-6" />}
          gradient="emerald"
          status="neutral"
        />
        <MetricCard
          title="Sources"
          value={summaryStatistics.totalSourceUrlsAccessed}
          icon={<Globe className="h-6 w-6" />}
          gradient="cyan"
          status="neutral"
        />
      </div>

      {/* Relevance Distribution */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-rose-600">{criticalCount}</div>
              <div className="text-sm text-slate-600 mt-2">Critical Narratives</div>
              <Progress value={(criticalCount / 12) * 100} className="h-2 mt-3" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-amber-600">{highCount}</div>
              <div className="text-sm text-slate-600 mt-2">High Priority</div>
              <Progress value={(highCount / 12) * 100} className="h-2 mt-3" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-slate-600">{mediumCount}</div>
              <div className="text-sm text-slate-600 mt-2">Medium Priority</div>
              <Progress value={(mediumCount / 12) * 100} className="h-2 mt-3" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="glass-panel">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="narratives">Narratives</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="tensions">Key Tensions</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Overall Sentiment */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Overall Sentiment Distribution</CardTitle>
                <CardDescription>Aggregate sentiment across all narratives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <PieChart
                    data={sentimentChartData}
                    donut
                    height={200}
                    showLegend
                  />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="font-semibold text-emerald-600">{overallSentimentDistribution.positive}%</div>
                    <div className="text-slate-500">Positive</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-600">{overallSentimentDistribution.neutralContextual}%</div>
                    <div className="text-slate-500">Neutral</div>
                  </div>
                  <div>
                    <div className="font-semibold text-rose-600">{overallSentimentDistribution.negative}%</div>
                    <div className="text-slate-500">Negative</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UAE Profile */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">UAE Profile</CardTitle>
                <CardDescription>Core demographic and economic data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <div className="text-slate-500">Official Name</div>
                    <div className="font-semibold">{uaeProfile.officialName}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-500">Capital</div>
                    <div className="font-semibold">{uaeProfile.capital}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-500">Population</div>
                    <div className="font-semibold">{uaeProfile.population}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-500">GDP (2025)</div>
                    <div className="font-semibold">{uaeProfile.gdpNominal2025}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-500">GDP per Capita</div>
                    <div className="font-semibold">{uaeProfile.gdpPerCapitaNominal}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-500">GDP Growth</div>
                    <div className="font-semibold">{uaeProfile.gdpGrowth2024}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-500">System</div>
                    <div className="font-semibold text-xs">{uaeProfile.system}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-slate-500">Nationalities</div>
                    <div className="font-semibold">{uaeProfile.nationalitiesPresent}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Narrative Framing Summary */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Narrative Framing Summary</CardTitle>
              <CardDescription>Dominant framing by narrative</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {keyFindings.map((finding, index) => (
                  <motion.div
                    key={finding.narrative}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between rounded-lg bg-slate-50/50 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{finding.narrative}</div>
                        <div className="text-xs text-slate-500">
                          Pro: {finding.proSources} | Counter: {finding.counterSources}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getRelevanceBadge(finding.uaeRelevance)}
                      {getFramingBadge(finding.dominantFraming)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sentiment by Narrative */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Sentiment Breakdown by Narrative</CardTitle>
              <CardDescription>Positive / Neutral / Negative distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={narrativeSentimentData}
                xAxisKey="narrative"
                bars={[
                  { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                  { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.platinum },
                  { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                ]}
                height={300}
                showGrid
                horizontal
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          {/* Filter */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600">Filter:</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant={sentimentFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSentimentFilter('all')}
              >
                All
              </Button>
              <Button
                variant={sentimentFilter === 'pro' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSentimentFilter('pro')}
              >
                Pro-Narrative
              </Button>
              <Button
                variant={sentimentFilter === 'contested' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSentimentFilter('contested')}
              >
                Contested
              </Button>
              <Button
                variant={sentimentFilter === 'counter' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSentimentFilter('counter')}
              >
                Counter-Narrative
              </Button>
            </div>
          </div>

          {/* Narrative Cards */}
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {filteredNarratives.map((finding, index) => {
              const narrativeData = allNarratives.find(n => n.name === finding.narrative)
              const sentiment = finding.dominantFraming === 'PRO-NARRATIVE' ? 'emerald' :
                finding.dominantFraming === 'COUNTER-NARRATIVE' ? 'rose' : 'amber'

              return (
                <motion.div
                  key={finding.narrative}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="glass-card hover:shadow-glass-lg transition-all cursor-pointer group"
                    onClick={() => setSelectedNarrative(finding.narrative)}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${
                            sentiment === 'emerald' ? 'from-emerald-500 to-green-600' :
                            sentiment === 'rose' ? 'from-rose-500 to-red-600' :
                            'from-amber-500 to-orange-600'
                          } text-white`}>
                            {finding.narrative === 'Human Rights Violator' ? <Shield className="h-4 w-4" /> :
                             finding.narrative === 'Climate Leader' ? <Leaf className="h-4 w-4" /> :
                             finding.narrative === 'Economic Powerhouse' ? <DollarSign className="h-4 w-4" /> :
                             finding.narrative === 'Foreign Policy Aggressor' ? <Flag className="h-4 w-4" /> :
                             finding.narrative === 'Success Story' ? <TrendingUp className="h-4 w-4" /> :
                             finding.narrative === 'Safe Haven' ? <Shield className="h-4 w-4" /> :
                             finding.narrative === 'Tolerant Nation' ? <Scale className="h-4 w-4" /> :
                             finding.narrative === 'Innovation Hub' ? <Zap className="h-4 w-4" /> :
                             finding.narrative === 'Sports Power' ? <Target className="h-4 w-4" /> :
                             finding.narrative === 'Lavish Lifestyle' ? <Building className="h-4 w-4" /> :
                             <Globe className="h-4 w-4" />}
                          </div>
                          <CardTitle className="text-base">{finding.narrative}</CardTitle>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          {getFramingBadge(finding.dominantFraming)}
                          {getRelevanceBadge(finding.uaeRelevance)}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Pro Sources</span>
                            <span className="font-semibold text-emerald-600">{finding.proSources}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Counter Sources</span>
                            <span className="font-semibold text-rose-600">{finding.counterSources}</span>
                          </div>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden flex">
                          <div
                            className="h-full bg-emerald-500"
                            style={{ width: `${(finding.proSources / (finding.proSources + finding.counterSources)) * 100}%` }}
                          />
                          <div
                            className="h-full bg-rose-500"
                            style={{ width: `${(finding.counterSources / (finding.proSources + finding.counterSources)) * 100}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Pro vs Counter Sources */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Pro vs Counter Sources</CardTitle>
                <CardDescription>Source count by narrative</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={sourcesChartData}
                  xAxisKey="narrative"
                  bars={[
                    { dataKey: 'pro', name: 'Pro-Narrative', color: CHART_COLORS.emerald },
                    { dataKey: 'counter', name: 'Counter-Narrative', color: CHART_COLORS.rose },
                  ]}
                  height={300}
                  showGrid
                />
              </CardContent>
            </Card>

            {/* Sentiment Radar */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Narrative Sentiment Radar</CardTitle>
                <CardDescription>Positive sentiment percentage by narrative</CardDescription>
              </CardHeader>
              <CardContent>
                <RadarChart
                  data={sentimentDistributionByNarrative.map(n => ({
                    narrative: n.narrative.split(' ')[0],
                    positive: n.positive,
                    negative: n.negative,
                  }))}
                  metrics={[
                    { dataKey: 'positive', name: 'Positive %', color: CHART_COLORS.emerald },
                    { dataKey: 'negative', name: 'Negative %', color: CHART_COLORS.rose },
                  ]}
                  height={300}
                />
              </CardContent>
            </Card>
          </div>

          {/* Detailed Sentiment Table */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Detailed Sentiment Analysis</CardTitle>
              <CardDescription>Breakdown by narrative</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sentimentDistributionByNarrative.map((narrative, index) => (
                  <motion.div
                    key={narrative.narrative}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-900">{narrative.narrative}</span>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-emerald-600">{narrative.positive}%</span>
                        <span className="text-slate-400">{narrative.neutral}%</span>
                        <span className="text-rose-600">{narrative.negative}%</span>
                      </div>
                    </div>
                    <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden flex">
                      <div
                        className="h-full bg-emerald-500"
                        style={{ width: `${narrative.positive}%` }}
                      />
                      <div
                        className="h-full bg-slate-400"
                        style={{ width: `${narrative.neutral}%` }}
                      />
                      <div
                        className="h-full bg-rose-500"
                        style={{ width: `${narrative.negative}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Tier 1 Sources */}
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Tier 1: Government / Official</CardTitle>
                    <CardDescription>High credibility sources</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sourceCredibilityMatrix.tier1.map((source, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg bg-emerald-50/50 p-3">
                      <div>
                        <div className="font-medium text-slate-900">{source.source}</div>
                        <div className="text-xs text-slate-500">{source.type}</div>
                      </div>
                      <Badge variant="success" className="text-xs">{source.credibility}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tier 2 Sources */}
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Tier 2: NGOs / Think Tanks</CardTitle>
                    <CardDescription>Medium-High credibility sources</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sourceCredibilityMatrix.tier2.map((source, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg bg-blue-50/50 p-3">
                      <div>
                        <div className="font-medium text-slate-900">{source.source}</div>
                        <div className="text-xs text-slate-500">{source.type}</div>
                      </div>
                      <Badge variant="default" className="text-xs">{source.credibility}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Tier 3 Sources */}
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white">
                    <Info className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Tier 3: Academic / Media</CardTitle>
                    <CardDescription>Medium credibility sources</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sourceCredibilityMatrix.tier3.map((source, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg bg-amber-50/50 p-3">
                      <div>
                        <div className="font-medium text-slate-900">{source.source}</div>
                        <div className="text-xs text-slate-500">{source.type}</div>
                      </div>
                      <Badge variant="warning" className="text-xs">{source.credibility}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tier 4 Sources */}
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-500 to-gray-600 text-white">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Tier 4: News Media</CardTitle>
                    <CardDescription>Medium credibility sources</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sourceCredibilityMatrix.tier4.map((source, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg bg-slate-50/50 p-3">
                      <div className="font-medium text-slate-900">{source.source}</div>
                      <Badge variant="secondary" className="text-xs">{source.credibility}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Key Tensions Tab */}
        <TabsContent value="tensions" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Critical Contradictions</CardTitle>
              <CardDescription>Key narrative tensions requiring monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {keyTensions.map((tension, index) => (
                  <motion.div
                    key={tension.contradiction}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-lg border-2 border-rose-200 bg-rose-50/30 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white">
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{tension.contradiction}</h4>
                        <div className="mt-2 space-y-1">
                          {tension.details.map((detail, i) => (
                            <div key={i} className="text-sm text-slate-600">
                              • {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Tables */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Data Repository</CardTitle>
              <CardDescription>Supporting data tables</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="economic">
                <TabsList>
                  <TabsTrigger value="economic">Economic Indicators</TabsTrigger>
                  <TabsTrigger value="rights">Human Rights</TabsTrigger>
                  <TabsTrigger value="rankings">Global Rankings</TabsTrigger>
                  <TabsTrigger value="climate">COP28 Stats</TabsTrigger>
                </TabsList>

                <TabsContent value="economic" className="mt-4">
                  <div className="rounded-lg border bg-white">
                    <div className="grid grid-cols-5 gap-4 p-4 bg-slate-50 font-semibold text-sm">
                      <div>Indicator</div>
                      <div>2022</div>
                      <div>2023</div>
                      <div>2024</div>
                      <div>2025 (est.)</div>
                    </div>
                    {dataTables.uaeEconomicIndicators.map((row, i) => (
                      <div key={i} className="grid grid-cols-5 gap-4 p-4 border-t text-sm">
                        <div className="font-medium">{row.indicator}</div>
                        <div>{row[2022]}</div>
                        <div>{row[2023]}</div>
                        <div>{row[2024]}</div>
                        <div>{row['2025 (est.)']}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="rights" className="mt-4">
                  <div className="rounded-lg border bg-white">
                    <div className="grid grid-cols-5 gap-4 p-4 bg-slate-50 font-semibold text-sm">
                      <div>Index</div>
                      <div>Score</div>
                      <div>Max</div>
                      <div>Rating</div>
                      <div>Year</div>
                    </div>
                    {dataTables.humanRightsScores.map((row, i) => (
                      <div key={i} className="grid grid-cols-5 gap-4 p-4 border-t text-sm">
                        <div className="font-medium">{row.index}</div>
                        <div className="text-rose-600 font-semibold">{row.score}</div>
                        <div>{row.max}</div>
                        <div><Badge variant="destructive" className="text-xs">{row.rating}</Badge></div>
                        <div>{row.year}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="rankings" className="mt-4">
                  <div className="rounded-lg border bg-white">
                    <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 font-semibold text-sm">
                      <div>Index</div>
                      <div>Rank</div>
                      <div>Year</div>
                    </div>
                    {dataTables.globalRankings.map((row, i) => (
                      <div key={i} className="grid grid-cols-3 gap-4 p-4 border-t text-sm">
                        <div className="font-medium">{row.index}</div>
                        <div className="text-emerald-600 font-semibold">{row.rank}</div>
                        <div>{row.year}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="climate" className="mt-4">
                  <div className="rounded-lg border bg-white">
                    <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 font-semibold text-sm">
                      <div>Metric</div>
                      <div>Value</div>
                    </div>
                    {dataTables.cop28Statistics.map((row, i) => (
                      <div key={i} className="grid grid-cols-2 gap-4 p-4 border-t text-sm">
                        <div className="font-medium">{row.metric}</div>
                        <div className="text-emerald-600 font-semibold">{row.value}</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Modern Slavery Data */}
          <Card className="glass-card border-rose-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-red-600 text-white">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg text-rose-900">Modern Slavery Data</CardTitle>
                  <CardDescription className="text-rose-700/80">Critical counter-narrative evidence</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 lg:grid-cols-3">
                {dataTables.modernSlaveryData.map((item, index) => (
                  <div key={index} className="rounded-lg bg-rose-50 p-4 text-center">
                    <div className="text-3xl font-extrabold text-rose-600">{item.value}</div>
                    <div className="text-sm text-slate-600 mt-1">{item.metric}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Execution Metadata Footer */}
      <Card className="glass-card">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-4">
              <span>Executed: {narrativeTrackingData.executionMetadata.dateExecuted}</span>
              <span>•</span>
              <span>v{narrativeTrackingData.executionMetadata.frameworkVersion}</span>
              <span>•</span>
              <span>{narrativeTrackingData.executionMetadata.enrichmentStatus}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>100% Source Coverage</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
