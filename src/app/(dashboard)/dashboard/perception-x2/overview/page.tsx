'use client'

/**
 * Perception Overview Page — UAE International Perception Dashboard
 * PERCEPTION-X2 Module
 *
 * Comprehensive overview of UAE international perception across all dimensions
 * Source: 3-1-international-perception-results.md
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/ui/glass-panel'
import {
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  LineChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Trophy,
  TrendingUp,
  TrendingDown,
  Minus,
  Shield,
  Heart,
  Star,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  MinusCircle,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  ChevronRight,
  Flag,
  Scale,
  Users,
  Globe2,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Minus as MinusIcon,
} from 'lucide-react'
import { usePerceptionOverviewData } from '@/lib/data-loader/hooks'

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardHover = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: 1.02,
    opacity: 1,
    transition: { duration: 0.2 },
  },
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getSentimentIcon(sentiment: string) {
  if (sentiment === 'positive') return <CheckCircle2 className="h-4 w-4 text-emerald-400" />
  if (sentiment === 'negative') return <XCircle className="h-4 w-4 text-rose-400" />
  return <MinusCircle className="h-4 w-4 text-amber-400" />
}

function getSentimentColor(sentiment: string) {
  if (sentiment === 'positive') return 'text-emerald-400'
  if (sentiment === 'negative') return 'text-rose-400'
  return 'text-amber-400'
}

function getSentimentBg(sentiment: string) {
  if (sentiment === 'positive') return 'bg-emerald-500/20 border-emerald-500/30'
  if (sentiment === 'negative') return 'bg-rose-500/20 border-rose-500/30'
  return 'bg-amber-500/20 border-amber-500/30'
}

function getPerceptionColor(perception: string) {
  if (perception.includes('VERY HIGH') || perception === 'HIGH') return 'emerald'
  if (perception.includes('VERY LOW') || perception === 'LOW') return 'rose'
  return 'gold'
}

function getTrendIcon(trend: string) {
  if (trend === 'Rising' || trend === 'up') return <TrendingUp className="h-3 w-3" />
  if (trend === 'Deteriorating' || trend === 'down') return <TrendingDown className="h-3 w-3" />
  return <Minus className="h-3 w-3" />
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function PerceptionOverviewPage() {
  const { data, loading, error } = usePerceptionOverviewData()
  const [activeTab, setActiveTab] = useState('overview')

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gold-700 font-rajdhani text-xl">
          Loading Perception Overview data...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="border-rose-500/50 bg-rose-500/10">
          <CardContent className="p-6 text-rose-400">
            Error loading data: {error.message}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!data) return null

  const {
    executionMetadata,
    dashboardMetrics,
    keyMetrics,
    perceptionScorecard,
    keyFindings,
    regionalPerceptionSummary,
    sourcesSummary,
  } = data

  // Chart data transformations
  const sentimentChartData = [
    { name: 'Positive', value: dashboardMetrics.sentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Negative', value: dashboardMetrics.sentiment.negative, color: CHART_COLORS.rose },
    { name: 'Neutral', value: dashboardMetrics.sentiment.neutral, color: CHART_COLORS.platinum },
  ]

  const positiveCount = perceptionScorecard.filter(s => s.sentiment === 'positive').length
  const negativeCount = perceptionScorecard.filter(s => s.sentiment === 'negative').length
  const mixedCount = perceptionScorecard.filter(s => s.sentiment === 'mixed').length

  const scorecardPieData = [
    { name: 'Positive', value: positiveCount, color: CHART_COLORS.emerald },
    { name: 'Negative', value: negativeCount, color: CHART_COLORS.rose },
    { name: 'Mixed', value: mixedCount, color: CHART_COLORS.gold },
  ]

  // Regional perception chart data
  const regionalChartData = regionalPerceptionSummary.map(r => ({
    region: r.region,
    uaePositive: r.uaePositive || 0,
    partnerPositive: r.partnerPositive || 50,
    sentiment: r.sentiment,
  }))

  // Key metrics for cards
  const topMetrics = keyMetrics.map(m => ({
    title: m.title,
    value: m.value,
    subtitle: m.subtitle,
    icon: m.title.includes('Safety') ? <Shield className="h-6 w-6" /> :
          m.title.includes('Human Rights') ? <AlertTriangle className="h-6 w-6" /> :
          m.title.includes('Press') ? <Star className="h-6 w-6" /> :
          m.title.includes('Corruption') ? <Scale className="h-6 w-6" /> :
          m.title.includes('Soft Power') ? <Globe className="h-6 w-6" /> :
          <Trophy className="h-6 w-6" />,
    gradient: m.gradient as 'gold' | 'emerald' | 'rose' | 'teal' | 'fuchsia' | 'indigo' | 'denim' | 'orange',
    trend: m.trend as 'up' | 'down' | 'neutral',
  }))

  return (
    <motion.div
      className="min-h-screen space-y-8 p-6 lg:p-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* ================================================================== */}
      {/* HEADER */}
      {/* ================================================================== */}

      <motion.div variants={fadeInUp} className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <Badge variant="gold" className="mb-3 font-rajdhani text-xs tracking-widest uppercase">
            PERCEPTION-X2 | OVERVIEW
          </Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">
            UAE International Perception
          </h1>
          <p className="mt-2 text-sm text-platinum-400 max-w-2xl">
            Comprehensive analysis of how the world perceives UAE across {executionMetadata.queriesExecuted} query dimensions,
            {executionMetadata.urlsSuccessfullyFetched}+ verified sources, and {dashboardMetrics.totalRegions} global regions.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="border-gold-700/40 text-gold-700 text-xs">
            <Globe className="h-3 w-3 mr-1" />
            {executionMetadata.queriesExecuted} Queries
          </Badge>
          <Badge variant="outline" className="border-emerald-500/40 text-emerald-400 text-xs">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            {executionMetadata.urlsSuccessfullyFetched} Sources
          </Badge>
          <Badge variant="outline" className="border-platinum-500/40 text-platinum-400 text-xs">
            <Activity className="h-3 w-3 mr-1" />
            {executionMetadata.dateExecuted}
          </Badge>
        </div>
      </motion.div>

      {/* ================================================================== */}
      {/* KEY METRICS */}
      {/* ================================================================== */}

      <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {topMetrics.map((metric) => (
          <motion.div
            key={metric.title}
            variants={fadeInUp}
            whileHover={cardHover.hover}
            initial={cardHover.rest}
            animate={cardHover.hover}
          >
            <MetricCard
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              gradient={metric.gradient}
              trend={metric.trend}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* ================================================================== */}
      {/* MAIN TABS */}
      {/* ================================================================== */}

      <motion.div variants={fadeInUp}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="glass-panel flex gap-1 p-1 overflow-x-auto">
            <TabsTrigger value="overview" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Globe className="h-3 w-3 mr-1" /> Overview
            </TabsTrigger>
            <TabsTrigger value="scorecard" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Trophy className="h-3 w-3 mr-1" /> Scorecard
            </TabsTrigger>
            <TabsTrigger value="regional" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Globe2 className="h-3 w-3 mr-1" /> Regional
            </TabsTrigger>
            <TabsTrigger value="findings" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Eye className="h-3 w-3 mr-1" /> Findings
            </TabsTrigger>
          </TabsList>

          {/* ============================================================ */}
          {/* OVERVIEW TAB */}
          {/* ============================================================ */}

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Sentiment Distribution */}
              <GlassPanel title="Sentiment Distribution" description="Overall perception sentiment breakdown">
                <div className="flex items-center justify-center">
                  <PieChart
                    data={sentimentChartData}
                    height={250}
                    showLegend={true}
                    donut={true}
                  />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                    <p className="text-2xl font-bold text-emerald-400">{dashboardMetrics.sentiment.positive}%</p>
                    <p className="text-xs text-platinum-400">Positive</p>
                  </div>
                  <div className="text-center p-3 bg-rose-500/20 rounded-lg border border-rose-500/30">
                    <p className="text-2xl font-bold text-rose-400">{dashboardMetrics.sentiment.negative}%</p>
                    <p className="text-xs text-platinum-400">Negative</p>
                  </div>
                  <div className="text-center p-3 bg-platinum-800/30 rounded-lg border border-platinum-700/30">
                    <p className="text-2xl font-bold text-platinum-400">{dashboardMetrics.sentiment.neutral}%</p>
                    <p className="text-xs text-platinum-400">Neutral</p>
                  </div>
                </div>
              </GlassPanel>

              {/* Perception Scorecard Summary */}
              <GlassPanel title="Perception Scorecard Summary" description="Dimension breakdown by sentiment">
                <PieChart
                  data={scorecardPieData}
                  height={200}
                  showLegend={true}
                  donut={true}
                />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-platinum-300">
                      <ThumbsUp className="h-4 w-4 text-emerald-400" /> Positive Dimensions
                    </span>
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">{positiveCount}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-platinum-300">
                      <ThumbsDown className="h-4 w-4 text-rose-400" /> Negative Dimensions
                    </span>
                    <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/30">{negativeCount}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-platinum-300">
                      <MinusIcon className="h-4 w-4 text-amber-400" /> Mixed Dimensions
                    </span>
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">{mixedCount}</Badge>
                  </div>
                </div>
              </GlassPanel>
            </div>

            {/* Sources Summary */}
            <GlassPanel title="Source Credibility" description={`Distribution of ${sourcesSummary.total} sources by credibility and type`}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <p className="text-xs text-emerald-400 font-rajdhani font-semibold">HIGH Credibility</p>
                  <p className="mt-1 text-2xl font-bold text-platinum-100">{sourcesSummary.byCredibility.high}</p>
                  <p className="text-xs text-platinum-500">Sources</p>
                </div>
                <div className="rounded-lg border border-gold-700/20 bg-gold-700/5 p-4">
                  <p className="text-xs text-gold-700 font-rajdhani font-semibold">MEDIUM Credibility</p>
                  <p className="mt-1 text-2xl font-bold text-platinum-100">{sourcesSummary.byCredibility.medium}</p>
                  <p className="text-xs text-platinum-500">Sources</p>
                </div>
                <div className="rounded-lg border border-platinum-700/20 bg-platinum-800/20 p-4">
                  <p className="text-xs text-platinum-400 font-rajdhani font-semibold">LOW Credibility</p>
                  <p className="mt-1 text-2xl font-bold text-platinum-100">{sourcesSummary.byCredibility.low}</p>
                  <p className="text-xs text-platinum-500">Sources</p>
                </div>
                <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
                  <p className="text-xs text-cyan-400 font-rajdhani font-semibold">TOTAL Sources</p>
                  <p className="mt-1 text-2xl font-bold text-cyan-400">{sourcesSummary.total}</p>
                  <p className="text-xs text-platinum-500">Verified</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-platinum-400 font-rajdhani mb-2">Top Sources:</p>
                <div className="flex flex-wrap gap-2">
                  {sourcesSummary.topSources.slice(0, 6).map((source, i) => (
                    <Badge key={i} variant="outline" className="border-platinum-700/30 text-platinum-400 text-xs">
                      {source.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* SCORECARD TAB */}
          {/* ============================================================ */}

          <TabsContent value="scorecard" className="space-y-6">
            <GlassPanel title="Complete Perception Scorecard" description="All 25 dimensions across positive, negative, and mixed categories">
              <ScrollArea className="h-[600px]">
                <div className="space-y-3">
                  {/* Positive Dimensions */}
                  <div className="mb-4">
                    <h3 className="text-sm font-rajdhani font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4" /> Positive Dimensions
                    </h3>
                    {perceptionScorecard.filter(s => s.sentiment === 'positive').map((item, i) => (
                      <div key={item.dimension} className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 mb-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-platinum-200 font-rajdhani">{item.dimension}</p>
                              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
                                {item.perception}
                              </Badge>
                            </div>
                            <p className="text-xs text-platinum-400 mt-1">{item.score}</p>
                            <p className="text-xs text-platinum-500 mt-1">{item.details}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getTrendIcon(item.trend)}
                            <span className="text-xs text-platinum-500">{item.trend}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Negative Dimensions */}
                  <div className="mb-4">
                    <h3 className="text-sm font-rajdhani font-semibold text-rose-400 mb-2 flex items-center gap-2">
                      <ThumbsDown className="h-4 w-4" /> Negative Dimensions
                    </h3>
                    {perceptionScorecard.filter(s => s.sentiment === 'negative').map((item, i) => (
                      <div key={item.dimension} className="rounded-lg border border-rose-500/20 bg-rose-500/5 p-3 mb-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-platinum-200 font-rajdhani">{item.dimension}</p>
                              <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/30 text-xs">
                                {item.perception}
                              </Badge>
                            </div>
                            <p className="text-xs text-platinum-400 mt-1">{item.score}</p>
                            <p className="text-xs text-platinum-500 mt-1">{item.details}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getTrendIcon(item.trend)}
                            <span className="text-xs text-platinum-500">{item.trend}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mixed Dimensions */}
                  <div className="mb-4">
                    <h3 className="text-sm font-rajdhani font-semibold text-amber-400 mb-2 flex items-center gap-2">
                      <MinusIcon className="h-4 w-4" /> Mixed Dimensions
                    </h3>
                    {perceptionScorecard.filter(s => s.sentiment === 'mixed').map((item, i) => (
                      <div key={item.dimension} className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 mb-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-platinum-200 font-rajdhani">{item.dimension}</p>
                              <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 text-xs">
                                {item.perception}
                              </Badge>
                            </div>
                            <p className="text-xs text-platinum-400 mt-1">{item.score}</p>
                            <p className="text-xs text-platinum-500 mt-1">{item.details}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getTrendIcon(item.trend)}
                            <span className="text-xs text-platinum-500">{item.trend}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* REGIONAL TAB */}
          {/* ============================================================ */}

          <TabsContent value="regional" className="space-y-6">
            <GlassPanel title="Regional Perception Overview" description={`UAE perception across ${dashboardMetrics.totalRegions} global regions`}>
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {regionalPerceptionSummary.map((region, i) => (
                    <div
                      key={region.region}
                      className={`rounded-lg border p-4 ${getSentimentBg(region.sentiment)}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          {getSentimentIcon(region.sentiment)}
                          <div>
                            <p className="text-sm font-semibold text-platinum-200 font-rajdhani">{region.region}</p>
                            <p className="text-xs text-platinum-400 mt-0.5">{region.keyInsight}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {region.uaePositive && (
                            <div className="text-right">
                              <p className="text-lg font-bold text-emerald-400">{region.uaePositive}%</p>
                              <p className="text-xs text-platinum-500">UAE positive</p>
                            </div>
                          )}
                          {region.partnerPositive && (
                            <div className="text-right">
                              <p className="text-lg font-bold text-rose-400">{region.partnerPositive}%</p>
                              <p className="text-xs text-platinum-500">Partner positive</p>
                            </div>
                          )}
                          <Badge className={`border ${getSentimentBg(region.sentiment)} ${getSentimentColor(region.sentiment)} text-xs`}>
                            {region.trend}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Regional Comparison Chart */}
              <GlassPanel title="Regional Sentiment Comparison" description="Perception sentiment by region">
                <BarChart
                  data={regionalChartData.map(r => ({
                    region: r.region,
                    positive: r.sentiment === 'positive' ? 80 : r.sentiment === 'negative' ? 30 : 50,
                    negative: r.sentiment === 'negative' ? 70 : r.sentiment === 'positive' ? 20 : 30,
                  }))}
                  xAxisKey="region"
                  bars={[
                    { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                    { dataKey: 'negative', name: 'Concern', color: CHART_COLORS.rose },
                  ]}
                  height={300}
                  showGrid={true}
                />
              </GlassPanel>

              {/* Key Regional Insights */}
              <GlassPanel title="Key Regional Insights" description="Critical findings by region">
                <div className="space-y-3">
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3">
                    <div className="flex items-start gap-2">
                      <ArrowUpRight className="h-4 w-4 text-emerald-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-emerald-400 font-rajdhani font-semibold">China & Russia</p>
                        <p className="text-sm text-platinum-300 mt-0.5">Strong positive perception; strategic partnerships deepening via BRICS</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-rose-500/20 bg-rose-500/5 p-3">
                    <div className="flex items-start gap-2">
                      <ArrowDownRight className="h-4 w-4 text-rose-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-rose-400 font-rajdhani font-semibold">Arab World</p>
                        <p className="text-sm text-platinum-300 mt-0.5">Regional strain; Saudi-UAE rift documented; Sudan allegations</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                    <div className="flex items-start gap-2">
                      <MinusIcon className="h-4 w-4 text-amber-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-amber-400 font-rajdhani font-semibold">United States</p>
                        <p className="text-sm text-platinum-300 mt-0.5">Asymmetric perception; 82% UAE positive vs 14-19% American positive</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                    <div className="flex items-start gap-2">
                      <MinusIcon className="h-4 w-4 text-amber-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-amber-400 font-rajdhani font-semibold">Europe</p>
                        <p className="text-sm text-platinum-300 mt-0.5">Strategic partner but shadow activities with far-right documented</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </TabsContent>

          {/* ============================================================ */}
          {/* FINDINGS TAB */}
          {/* ============================================================ */}

          <TabsContent value="findings" className="space-y-6">
            <GlassPanel title="Key Findings" description="15 synthesized findings from 35+ sources">
              <div className="grid gap-4 lg:grid-cols-2">
                {keyFindings.map((finding, i) => (
                  <div
                    key={finding.id}
                    className={`rounded-lg border p-4 ${getSentimentBg(finding.sentiment)}`}
                  >
                    <div className="flex items-start gap-3">
                      {getSentimentIcon(finding.sentiment)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-platinum-500 font-rajdhani">#{finding.id}</span>
                          <p className="text-sm font-semibold text-platinum-200 font-rajdhani">{finding.title}</p>
                        </div>
                        <p className="text-xs text-platinum-400 leading-relaxed">{finding.finding}</p>
                        <p className="text-xs text-gold-400 mt-2 font-rajdhani">{finding.uaeRelevance}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}
