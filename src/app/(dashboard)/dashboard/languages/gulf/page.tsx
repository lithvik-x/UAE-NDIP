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
  BookOpen,
  Database,
  Target,
  BarChart3,
  Globe2,
  MessageSquare,
  Network,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ChevronRight,
  Brain,
  Sparkles,
} from 'lucide-react'
import {
  useGulfArabicData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'

export default function GulfArabicPage() {
  const { data } = useGulfArabicData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Gulf Arabic intelligence data...</div>
      </div>
    )
  }

  const { topSearchTerms, sentiment, uaeSpeakerPopulation, credibility, sources, trendDirection } = data

  // Extended data from MD file 6-3
  const extendedData = data.extendedData as Record<string, unknown> | undefined
  const executionMetadata = extendedData?.executionMetadata as Record<string, unknown> | undefined
  const focusAreas = extendedData?.focusAreas as Array<{ id: string; description: string; uaeRelevance: string }> | undefined
  const sentimentMatrix = (extendedData?.sentimentAnalysis as Record<string, unknown>)?.sentimentMatrix as Array<{ topic: string; overallSentiment: string; positivePercent: number; negativePercent: number; neutralPercent: number; keyDrivers: string }> | undefined
  const speakerDemographics = (extendedData?.structuredDataTables as Record<string, unknown>)?.speakerDemographics as Array<{ subDialect: string; country: string; estSpeakers: string; documentedTerms: number; mutualIntelligibility: string }> | undefined
  const emiratiKPIs = (extendedData?.structuredDataTables as Record<string, unknown>)?.emiratiDialectKPIs as Array<{ kpi: string; value: string; source: string; date: string }> | undefined
  const alyahBenchmark = (extendedData?.structuredDataTables as Record<string, unknown>)?.alyahBenchmark as { totalSamples: number; topModel: string; topAccuracy: number } | undefined
  const gccCrisisTimeline = (extendedData?.structuredDataTables as Record<string, unknown>)?.gccCrisisTimeline as Array<{ phase: string; date: string; duration: string; keyEvent: string }> | undefined
  const keyIndividuals = (extendedData?.entityRegistries as Record<string, unknown>)?.keyIndividuals as Array<{ name: string; role: string; affiliation: string; relevanceToUAE: string }> | undefined
  const institutions = (extendedData?.entityRegistries as Record<string, unknown>)?.institutions as Array<{ institution: string; type: string; country: string; uaeRelevance: string }> | undefined
  const nlpCorpusResources = (extendedData?.structuredDataTables as Record<string, unknown>)?.nlpCorpusResources as Array<{ resource: string; type: string; sizeScope: string; source: string; date: string }> | undefined
  const verificationConfidence = extendedData?.verificationConfidence as { status: string; confidenceLevel: string; failedFetches: Array<{ url: string; statusCode: string; likelyContent: string }> } | undefined
  const urlsProcessed = extendedData?.urlsProcessed as { total: number; successful: number; failed: number } | undefined

  // Sentiment data for pie chart
  const sentimentData = sentiment ? [
    { name: 'Positive', value: sentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentiment.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentiment.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 75, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 15, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 10, color: CHART_COLORS.rose },
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

  // Motion variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // CYCLE A: Header with premium animations
  // CYCLE B: Key Metrics with glassmorphism
  // CYCLE C: Overview Tab with charts
  // CYCLE D: Search Terms Tab
  // CYCLE E: Sentiment Tab
  // CYCLE F: Sources Tab with extended data

  return (
    <motion.div
      className="space-y-8 p-8"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* CYCLE A: Header */}
      <motion.div className="flex items-start justify-between" variants={fadeInUp}>
        <div>
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-platinum/20 to-denim/20 text-platinum border-platinum/50">
            <Sparkles className="w-3 h-3 mr-1" />
            MULTI-LINGUAL
          </Badge>
          <motion.h1
            className="text-3xl font-extrabold gradient-text-platinum"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Gulf Arabic Dialect
          </motion.h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'Intelligence on Gulf Arabic dialect: Saudi Arabia, Kuwait, Bahrain, Qatar, Oman, UAE'}
          </p>
          {/* Execution Metadata from MD */}
          {executionMetadata && (
            <motion.div
              className="mt-4 flex items-center gap-4 text-xs text-slate-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {String(executionMetadata.queriesExecuted || 15)}+ queries executed
              </span>
              <span className="flex items-center gap-1">
                <Database className="w-3 h-3 text-denim-400" />
                {String(urlsProcessed?.successful || 14)}/{String(urlsProcessed?.total || 17)} URLs fetched
              </span>
              <span className="flex items-center gap-1">
                <Target className="w-3 h-3 text-gold-400" />
                {String(executionMetadata.dataPointsExtracted || 150)}+ data points
              </span>
            </motion.div>
          )}
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10 transition-all duration-300 hover:scale-105"
          >
            <Globe className="h-4 w-4" />
            View Dialect Map
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2 transition-all duration-300 hover:scale-105 hover:shadow-premium-lg">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* CYCLE B: Key Metrics */}
      <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" variants={fadeInUp}>
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <MetricCard
            title="Query Volume"
            value={data.queryVolume?.toLocaleString() || '18,500,000'}
            previousValue={(data.queryVolume || 18500000) - 500000}
            icon={<Search className="h-6 w-6" />}
            gradient="platinum"
            status="info"
          />
        </motion.div>
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <MetricCard
            title="UAE Speakers"
            value={uaeSpeakerPopulation?.toLocaleString() || '15,000,000'}
            previousValue={(uaeSpeakerPopulation || 15000000) - 200000}
            icon={<Users className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <MetricCard
            title="Sentiment Score"
            value={sentiment?.overall || 65}
            previousValue={(sentiment?.overall || 65) - 2}
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <MetricCard
            title="Credibility Score"
            value={credibility?.score || 82}
            previousValue={(credibility?.score || 82) - 3}
            icon={<Shield className="h-6 w-6" />}
            gradient="gold"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview" className="data-[state=active]:bg-platinum/20">
            <BarChart3 className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="searchterms" className="data-[state=active]:bg-platinum/20">
            <Search className="w-4 h-4 mr-2" />
            Search Terms
          </TabsTrigger>
          <TabsTrigger value="sentiment" className="data-[state=active]:bg-platinum/20">
            <MessageSquare className="w-4 h-4 mr-2" />
            Sentiment
          </TabsTrigger>
          <TabsTrigger value="dialects" className="data-[state=active]:bg-platinum/20">
            <Globe2 className="w-4 h-4 mr-2" />
            Dialects
          </TabsTrigger>
          <TabsTrigger value="nlp" className="data-[state=active]:bg-platinum/20">
            <Brain className="w-4 h-4 mr-2" />
            NLP/AI
          </TabsTrigger>
          <TabsTrigger value="sources" className="data-[state=active]:bg-platinum/20">
            <Network className="w-4 h-4 mr-2" />
            Sources
          </TabsTrigger>
        </TabsList>

        {/* CYCLE C: Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel
              title="Gulf Arabic Overview"
              description="Regional dialect intelligence for GCC countries"
              badge="PREMIUM"
            >
              <div className="space-y-6">
                {/* Speaker Demographics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-platinum-400" />
                      Regional Distribution
                    </CardTitle>
                    <CardDescription>Gulf Arabic speaker distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-6">
                      {speakerDemographics?.map((demo, idx) => (
                        <motion.div
                          key={idx}
                          className={`text-center p-4 rounded-lg border ${
                            demo.subDialect === 'TOTAL Gulf Arabic'
                              ? 'bg-platinum/10 border-platinum/50'
                              : 'bg-slate-800/50 border-slate-700'
                          } hover:border-platinum/50 transition-all duration-300`}
                          whileHover={{ y: -2, scale: 1.02 }}
                        >
                          <div className={`text-2xl font-bold ${
                            demo.subDialect === 'TOTAL Gulf Arabic'
                              ? 'text-platinum-400'
                              : idx === 0
                              ? 'text-platinum-400'
                              : idx === 1
                              ? 'text-emerald-400'
                              : idx === 2
                              ? 'text-gold-400'
                              : idx === 3
                              ? 'text-navy-400'
                              : 'text-slate-400'
                          }`}>
                            {demo.estSpeakers}
                          </div>
                          <p className="text-sm text-slate-400 mt-1">{demo.country}</p>
                          <p className="text-xs text-slate-500">{demo.subDialect}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-emerald-400" />
                        Sentiment Distribution
                      </CardTitle>
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
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-platinum-400" />
                        Trend Direction
                      </CardTitle>
                      <CardDescription>Current trend analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center justify-center h-[280px]">
                        <motion.div
                          className={`text-6xl font-bold ${
                            trendDirection === 'rising' ? 'text-emerald-400' : trendDirection === 'declining' ? 'text-rose-400' : 'text-platinum-400'
                          }`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3, type: 'spring' }}
                        >
                          {trendDirection?.toUpperCase() || 'STABLE'}
                        </motion.div>
                        <p className="mt-4 text-slate-400">
                          {trendDirection === 'rising' ? 'Query volume increasing' : trendDirection === 'declining' ? 'Query volume decreasing' : 'Query volume stable'}
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            {getTrendIcon(trendDirection)}
                            <span className="text-sm text-slate-300">Regional Interest</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Focus Areas from MD */}
                {focusAreas && focusAreas.length > 0 && (
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="h-5 w-5 text-denim-400" />
                        Research Focus Areas
                      </CardTitle>
                      <CardDescription>Priority intelligence objectives from MD file 6-3</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
                        {focusAreas.map((fa, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-platinum/50 transition-all duration-300"
                            whileHover={{ x: 4 }}
                          >
                            <Badge
                              variant="outline"
                              className={`shrink-0 ${
                                fa.uaeRelevance === 'Critical'
                                  ? 'border-rose-500/50 text-rose-400'
                                  : 'border-denim-500/50 text-denim-400'
                              }`}
                            >
                              {fa.id}
                            </Badge>
                            <p className="text-sm text-slate-300">{fa.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-gold-400" />
                      Credibility Analysis
                    </CardTitle>
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
                        <div className="text-2xl font-bold text-platinum-400">{credibility?.score || 82}%</div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-slate-400">Sources Verified</p>
                        <div className="text-2xl font-bold text-emerald-400">{credibility?.sources || 17}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* CYCLE D: Search Terms Tab */}
        <TabsContent value="searchterms" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel title="Top Search Terms" description="Most frequent Gulf Arabic search queries">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Hash className="h-5 w-5 text-platinum-400" />
                    Search Volume Rankings
                  </CardTitle>
                  <CardDescription>Top 10 search terms by volume</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-2">
                      {searchTermsData.map((term, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70 hover:border-platinum/50 transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ x: 4 }}
                        >
                          <div className="flex items-center gap-4">
                            <motion.div
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-platinum text-navy-950 text-sm font-bold"
                              whileHover={{ scale: 1.1 }}
                            >
                              {idx + 1}
                            </motion.div>
                            <div>
                              <p className="font-semibold text-slate-200">{term.term}</p>
                              <p className="text-sm text-slate-400">
                                {term.volume?.toLocaleString()} queries
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge
                              variant="outline"
                              className={`border-slate-600 ${
                                term.sentiment === 'positive'
                                  ? 'text-emerald-400'
                                  : term.sentiment === 'negative'
                                  ? 'text-rose-400'
                                  : 'text-slate-400'
                              }`}
                            >
                              {term.sentiment}
                            </Badge>
                            <div className="flex items-center gap-1">
                              {getTrendIcon(term.trend)}
                              {getTrendBadge(term.trend)}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* CYCLE E: Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel title="Sentiment Analysis" description="Gulf Arabic content sentiment breakdown">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-platinum-400" />
                      Sentiment Breakdown
                    </CardTitle>
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
                          <span className="text-lg font-bold text-emerald-400">{sentiment?.positive || 75}%</span>
                        </div>
                        <Progress value={sentiment?.positive || 75} className="h-3" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-slate-500" />
                            <span className="text-sm font-medium text-slate-200">Neutral</span>
                          </div>
                          <span className="text-lg font-bold text-slate-400">{sentiment?.neutral || 15}%</span>
                        </div>
                        <Progress value={sentiment?.neutral || 15} className="h-3" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-rose-500" />
                            <span className="text-sm font-medium text-slate-200">Negative</span>
                          </div>
                          <span className="text-lg font-bold text-rose-400">{sentiment?.negative || 10}%</span>
                        </div>
                        <Progress value={sentiment?.negative || 10} className="h-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sentiment Matrix from MD */}
                {sentimentMatrix && sentimentMatrix.length > 0 && (
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-denim-400" />
                        Topic-Level Sentiment Matrix
                      </CardTitle>
                      <CardDescription>Sentiment analysis by topic from MD file 6-3</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px]">
                        <div className="space-y-3">
                          {sentimentMatrix.map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="p-4 rounded-lg border border-slate-700 bg-slate-800/50 hover:border-platinum/50 transition-all duration-300"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-slate-200">{item.topic}</span>
                                <Badge
                                  variant="outline"
                                  className={`${
                                    item.overallSentiment === 'Positive'
                                      ? 'border-emerald-500/50 text-emerald-400'
                                      : item.overallSentiment === 'Negative'
                                      ? 'border-rose-500/50 text-rose-400'
                                      : 'border-slate-500/50 text-slate-400'
                                  }`}
                                >
                                  {item.overallSentiment}
                                </Badge>
                              </div>
                              <div className="flex gap-2 text-xs">
                                <span className="text-emerald-400">+{item.positivePercent}%</span>
                                <span className="text-slate-500">/</span>
                                <span className="text-slate-400">{item.neutralPercent}%</span>
                                <span className="text-slate-500">/</span>
                                <span className="text-rose-400">-{item.negativePercent}%</span>
                              </div>
                              <p className="mt-2 text-xs text-slate-500">{item.keyDrivers}</p>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                )}

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Volume Analysis</CardTitle>
                    <CardDescription>Total query volume: {sentiment?.volume?.toLocaleString() || '18,500,000'}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { name: 'Positive', value: (sentiment?.volume || 18500000) * ((sentiment?.positive || 75) / 100) },
                        { name: 'Neutral', value: (sentiment?.volume || 18500000) * ((sentiment?.neutral || 15) / 100) },
                        { name: 'Negative', value: (sentiment?.volume || 18500000) * ((sentiment?.negative || 10) / 100) },
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
          </motion.div>
        </TabsContent>

        {/* NEW CYCLE: Dialects Tab */}
        <TabsContent value="dialects" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel title="Emirati Dialect KPIs" description="Preservation metrics and youth engagement">
              <div className="space-y-6">
                {/* Emirati Dialect KPIs */}
                {emiratiKPIs && emiratiKPIs.length > 0 && (
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-platinum-400" />
                        Dialect Preservation KPIs
                      </CardTitle>
                      <CardDescription>Youth pride, social media connection, and preservation support metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                        {emiratiKPIs.map((kpi, idx) => (
                          <motion.div
                            key={idx}
                            className="p-4 rounded-lg border border-slate-700 bg-slate-800/50 hover:border-platinum/50 transition-all duration-300"
                            whileHover={{ y: -2 }}
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-slate-400">{kpi.kpi}</p>
                              <Badge variant="outline" className="border-platinum/50 text-platinum">
                                {kpi.value}
                              </Badge>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">
                              Source: {kpi.source} | {kpi.date}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* GCC Crisis Timeline */}
                {gccCrisisTimeline && gccCrisisTimeline.length > 0 && (
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-rose-400" />
                        GCC Crisis Timeline — Qatar Blockade
                      </CardTitle>
                      <CardDescription>43-month rift and reconciliation process</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-platinum via-denim to-slate-700" />
                        <div className="space-y-4">
                          {gccCrisisTimeline.map((event, idx) => (
                            <motion.div
                              key={idx}
                              className="relative pl-10"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <div className={`absolute left-2 top-2 w-4 h-4 rounded-full ${
                                event.phase === 'Reconciliation'
                                  ? 'bg-emerald-400 border-2 border-emerald-600'
                                  : event.phase === 'Blockade Imposed'
                                  ? 'bg-rose-400 border-2 border-rose-600'
                                  : 'bg-platinum-400 border-2 border-platinum-600'
                              }`} />
                              <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/50 hover:border-platinum/50 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-slate-200">{event.phase}</span>
                                  <Badge variant="outline" className="border-slate-600 text-slate-400">
                                    {event.date}
                                  </Badge>
                                </div>
                                <p className="text-sm text-slate-400 mt-1">{event.keyEvent}</p>
                                {event.duration !== '—' && (
                                  <p className="text-xs text-slate-500 mt-1">Duration: {event.duration}</p>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* NEW CYCLE: NLP/AI Tab */}
        <TabsContent value="nlp" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel title="NLP & AI" description="Emirati dialect benchmarks and corpus resources">
              <div className="space-y-6">
                {/* Alyah Benchmark */}
                {alyahBenchmark && (
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Brain className="h-5 w-5 text-denim-400" />
                        Alyah Emirati Dialect Benchmark
                      </CardTitle>
                      <CardDescription>TII/UA.E benchmark for Emirati dialect NLP evaluation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 lg:grid-cols-3">
                        <motion.div
                          className="text-center p-6 rounded-lg bg-gradient-platinum/10 border border-platinum/50"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="text-4xl font-bold text-platinum-400">{alyahBenchmark.totalSamples}</div>
                          <p className="text-sm text-slate-400 mt-1">Total Samples</p>
                        </motion.div>
                        <motion.div
                          className="text-center p-6 rounded-lg bg-gradient-emerald/10 border border-emerald-500/50"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="text-4xl font-bold text-emerald-400">{alyahBenchmark.topAccuracy}%</div>
                          <p className="text-sm text-slate-400 mt-1">Top Accuracy</p>
                          <p className="text-xs text-slate-500 mt-1">{alyahBenchmark.topModel}</p>
                        </motion.div>
                        <motion.div
                          className="text-center p-6 rounded-lg bg-gradient-denim/10 border border-denim-500/50"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="text-4xl font-bold text-denim-400">TII</div>
                          <p className="text-sm text-slate-400 mt-1">Best Organization</p>
                          <p className="text-xs text-slate-500 mt-1">Technology Innovation Institute</p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* NLP Corpus Resources */}
                {nlpCorpusResources && nlpCorpusResources.length > 0 && (
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Database className="h-5 w-5 text-platinum-400" />
                        NLP/Corpus Resources
                      </CardTitle>
                      <CardDescription>Gulf Arabic and Emirati dialect datasets</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px]">
                        <div className="space-y-2">
                          {nlpCorpusResources.map((resource, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center justify-between p-4 rounded-lg border border-slate-700 bg-slate-800/50 hover:border-platinum/50 transition-all duration-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ x: 4 }}
                            >
                              <div className="flex-1">
                                <p className="font-medium text-slate-200">{resource.resource}</p>
                                <p className="text-sm text-slate-400">
                                  {resource.type} | {resource.sizeScope}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-slate-500">{resource.source}</p>
                                <p className="text-xs text-slate-600">{resource.date}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                )}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* CYCLE F: Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel title="Intelligence Sources" description="Verified sources for Gulf Arabic intelligence">
              {/* Key Individuals */}
              {keyIndividuals && keyIndividuals.length > 0 && (
                <Card className="glass-card mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-platinum-400" />
                      Key Individuals
                    </CardTitle>
                    <CardDescription>Subject matter experts and researchers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {keyIndividuals.map((person, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-4 p-4 rounded-lg border border-slate-700 bg-slate-800/50 hover:border-platinum/50 transition-all duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-platinum text-navy-950">
                              {person.name.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-slate-200">{person.name}</p>
                              <p className="text-sm text-slate-400">{person.role}</p>
                              <p className="text-xs text-slate-500">{person.affiliation}</p>
                            </div>
                            <Badge variant="outline" className="border-platinum/50 text-platinum shrink-0">
                              {person.relevanceToUAE.split(';')[0]}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              )}

              {/* Institutions */}
              {institutions && institutions.length > 0 && (
                <Card className="glass-card mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-denim-400" />
                      Institutions
                    </CardTitle>
                    <CardDescription>Research institutions and media sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {institutions.map((inst, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-4 p-4 rounded-lg border border-slate-700 bg-slate-800/50 hover:border-platinum/50 transition-all duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              inst.country === 'UAE' || inst.country.includes('UAE')
                                ? 'bg-gradient-denim text-white'
                                : 'bg-slate-700 text-slate-400'
                            }`}>
                              <Globe className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-slate-200">{inst.institution}</p>
                              <p className="text-sm text-slate-400">{inst.type} | {inst.country}</p>
                            </div>
                            <Badge variant="outline" className="border-slate-600 text-slate-400 shrink-0">
                              {inst.uaeRelevance}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              )}

              {/* Source Directory */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Network className="h-5 w-5 text-platinum-400" />
                    Source Directory
                  </CardTitle>
                  <CardDescription>
                    Tiered source reliability assessment | URLs: {urlsProcessed?.successful || 14}/{urlsProcessed?.total || 17} successful
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-3">
                      {(sources || []).map((source, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70 hover:border-platinum/50 transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          whileHover={{ x: 4 }}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              source.tier === 0
                                ? 'bg-gradient-emerald text-white'
                                : source.tier === 1
                                ? 'bg-gradient-denim text-white'
                                : source.tier === 2
                                ? 'bg-gradient-platinum text-navy-950'
                                : 'bg-slate-600 text-slate-300'
                            }`}>
                              <Globe className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{source.name}</p>
                              <p className="text-sm text-slate-400">
                                {source.url ? (
                                  <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-denim-400 hover:text-denim-300"
                                  >
                                    {source.url.replace(/^https?:\/\//, '').substring(0, 30)}...
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                ) : (
                                  <span className="text-slate-500">Last updated: {source.date}</span>
                                )}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className={`${
                              source.tier === 0
                                ? 'border-emerald-500/50 text-emerald-400'
                                : source.tier === 1
                                ? 'border-denim-500/50 text-denim-400'
                                : source.tier === 2
                                ? 'border-platinum-500/50 text-platinum-400'
                                : 'border-slate-500/50 text-slate-400'
                            }`}
                          >
                            Tier {source.tier || 3}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Verification Confidence */}
              {verificationConfidence && (
                <Card className="glass-card mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle2 className={`h-5 w-5 ${verificationConfidence.status === 'VERIFIED' ? 'text-emerald-400' : 'text-rose-400'}`} />
                      Verification & Confidence
                    </CardTitle>
                    <CardDescription>Data quality assessment from enrichment process</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-3">
                      <div className="text-center p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/50">
                        <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto" />
                        <p className="text-lg font-bold text-emerald-400 mt-2">{verificationConfidence.status}</p>
                        <p className="text-sm text-slate-400">{verificationConfidence.confidenceLevel}</p>
                      </div>
                      <div className="col-span-2 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                        <p className="text-sm text-slate-400 mb-2">Failed Fetches ({verificationConfidence.failedFetches?.length || 0}):</p>
                        <div className="space-y-2">
                          {verificationConfidence.failedFetches?.map((fetch, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs">
                              <XCircle className="h-3 w-3 text-rose-400" />
                              <span className="text-slate-500">{fetch.url}</span>
                              <Badge variant="outline" className="border-rose-500/50 text-rose-400 text-xs">
                                {fetch.statusCode}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}