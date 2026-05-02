// @ts-nocheck
'use client'

/**
 * Brand UAE - Comprehensive Brand Intelligence Dashboard
 * PERCEPTION-X2 Module
 * Source: 3-9-brand-uae-results.md
 */

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/ui/glass-panel'
import {
  BarChart,
  PieChart,
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
  Flag,
  Scale,
  Users,
  Globe2,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Minus as MinusIcon,
  Building2,
  Sparkles,
  Target,
  Award,
  Gem,
  Crown,
  Palette,
  RefreshCw,
  DollarSign,
  MapPin,
  Zap,
  BookOpen,
  Plane,
} from 'lucide-react'
import { useBrandUaeData } from '@/lib/data-loader/hooks'

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
  if (sentiment === 'Strongly Positive' || sentiment === 'Positive') return <CheckCircle2 className="h-4 w-4 text-emerald-400" />
  if (sentiment === 'Negative' || sentiment === 'Strongly Negative') return <XCircle className="h-4 w-4 text-rose-400" />
  return <MinusCircle className="h-4 w-4 text-gold-700" />
}

function getSentimentColor(sentiment: string) {
  if (sentiment === 'Strongly Positive' || sentiment === 'Positive') return 'text-emerald-400'
  if (sentiment === 'Negative' || sentiment === 'Strongly Negative') return 'text-rose-400'
  return 'text-gold-700'
}

function getSentimentBg(sentiment: string) {
  if (sentiment === 'Strongly Positive' || sentiment === 'Positive') return 'bg-emerald-500/20 border-emerald-500/30'
  if (sentiment === 'Negative' || sentiment === 'Strongly Negative') return 'bg-rose-500/20 border-rose-500/30'
  return 'bg-gold-700/20 border-gold-700/30'
}

function getTrendIcon(trend: string) {
  if (trend === 'Rising' || trend === 'up' || trend === 'Improved') return <TrendingUp className="h-3 w-3 text-emerald-400" />
  if (trend === 'Deteriorating' || trend === 'down') return <TrendingDown className="h-3 w-3 text-rose-400" />
  return <Minus className="h-3 w-3 text-gold-700" />
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function BrandUaePage() {
  const { data, loading, error } = useBrandUaeData()
  const [activeTab, setActiveTab] = useState('overview')

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gold-700 font-rajdhani text-xl">
          Loading Brand UAE data...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <GlassPanel title="Error">
          <div className="text-rose-400">Error loading data: {error.message}</div>
        </GlassPanel>
      </div>
    )
  }

  if (!data) return null

  const {
    executionMetadata,
    executiveSummary,
    summaryMetrics,
    nationBrand,
    nationBrandValue,
    nationBrandAttributes,
    coreValues,
    sevenLinesLogo,
    sevenLinesTeam,
    sevenLinesDesignTeam,
    keyArtist,
    leadershipQuote,
    governance,
    top50UaeBrands2025,
    totalTop50UaeBrandsValue,
    updated2026Figures,
    global500Rankings2026,
    keyBrandFacts,
    uaeBrandsBsiScores2025,
    adnocBrandStrengthDetails,
    globalSoftPowerIndex2026,
    softPowerPillarRankings,
    softPowerImprovements,
    historicalSoftPowerRankings,
    dubaiBrandRankings,
    top5CityBrandsGlobally2024,
    dubaiMetrics,
    otherUaeCities,
    abuDhabiBrand,
    adnocBrand,
    eAndBrand,
    emiratesBrand,
    emaarBrand,
    emiratesNbdBrand,
    aldaraBrand,
    pureHealthGroup,
    sevenLinesLogoDevelopment,
    colorSymbolism,
    brandSlogan,
    luxuryBrandsCrisis2026,
    brandConsistencyChallenges,
    rebrandingCaseStudies,
    rebrandingBestPractices,
    uaeConsumerExpectations,
    culturalConsiderations,
    brandDifferentiationStrategies,
    abuDhabiBrandIdentity,
    dubaiBrandIdentity,
    dubaiVisualStrategy,
    dubaiBrandPerception,
    overallBrandSentiment,
    sentimentByCategory,
    uaeRelevanceAssessment,
    keyUaeBrandingThemes,
    brandValueSummary,
    rankingsSummary,
    timelineOfKeyEvents,
    keyPerformanceIndicators,
    primarySources,
    governmentSources,
    mediaSources,
    industryAnalysisSources,
    expertSources,
    brandSpecificSources,
    verificationStatus,
    dashboardMetrics,
  } = data

  // Chart data transformations
  const sentimentChartData = [
    { name: 'Positive', value: dashboardMetrics.sentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Negative', value: dashboardMetrics.sentiment.negative, color: CHART_COLORS.rose },
    { name: 'Neutral', value: dashboardMetrics.sentiment.neutral, color: CHART_COLORS.gold },
  ]

  const topMetrics = summaryMetrics.map((m, i) => ({
    title: m.label,
    value: m.value,
    subtitle: m.subtext,
    icon: i === 0 ? <Building2 className="h-6 w-6" /> :
          i === 1 ? <Globe className="h-6 w-6" /> :
          i === 2 ? <TrendingUp className="h-6 w-6" /> :
          <MapPin className="h-6 w-6" />,
    gradient: ['gold', 'emerald', 'teal', 'fuchsia'][i] as 'gold' | 'emerald' | 'teal' | 'fuchsia',
    trend: 'up' as const,
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
            PERCEPTION-X2 | BRAND UAE
          </Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">
            UAE Brand Intelligence
          </h1>
          <p className="mt-2 text-sm text-platinum-400 max-w-2xl">
            Comprehensive analysis of UAE nation brand, corporate brands, and brand value across {executionMetadata.queriesExecuted} query dimensions,
            {executionMetadata.pagesFetched}+ verified sources.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="outline" className="border-gold-700/40 text-gold-700 text-xs">
            <Globe className="h-3 w-3 mr-1" />
            {executionMetadata.queriesExecuted} Queries
          </Badge>
          <Badge variant="outline" className="border-emerald-500/40 text-emerald-400 text-xs">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            {executionMetadata.pagesFetched} Sources
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

      <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
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
            <TabsTrigger value="nation-brand" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Flag className="h-3 w-3 mr-1" /> Nation Brand
            </TabsTrigger>
            <TabsTrigger value="rankings" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Trophy className="h-3 w-3 mr-1" /> Rankings
            </TabsTrigger>
            <TabsTrigger value="corporate" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Building2 className="h-3 w-3 mr-1" /> Corporate
            </TabsTrigger>
            <TabsTrigger value="sentiment" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Heart className="h-3 w-3 mr-1" /> Sentiment
            </TabsTrigger>
            <TabsTrigger value="crisis" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <AlertTriangle className="h-3 w-3 mr-1" /> Crisis
            </TabsTrigger>
            <TabsTrigger value="culture" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Sparkles className="h-3 w-3 mr-1" /> Culture
            </TabsTrigger>
          </TabsList>

          {/* ============================================================ */}
          {/* OVERVIEW TAB */}
          {/* ============================================================ */}

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Executive Summary */}
              <GlassPanel title="Executive Summary" description="Key brand highlights">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <div>
                      <p className="text-xs text-emerald-400 font-rajdhani">Nation Brand Value</p>
                      <p className="text-2xl font-bold text-platinum-100">{executiveSummary.nationBrandValue}</p>
                    </div>
                    <Trophy className="h-8 w-8 text-gold-700" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-denim-500/10 rounded-lg border border-denim-500/20">
                    <div>
                      <p className="text-xs text-denim-400 font-rajdhani">Global Soft Power</p>
                      <p className="text-2xl font-bold text-platinum-100">{executiveSummary.globalSoftPowerRank}</p>
                    </div>
                    <Globe className="h-8 w-8 text-denim-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <div>
                      <p className="text-xs text-cyan-400 font-rajdhani">Top 50 UAE Brands</p>
                      <p className="text-2xl font-bold text-platinum-100">{executiveSummary.top50UaeBrandsValue}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-fuchsia-500/10 rounded-lg border border-fuchsia-500/20">
                    <div>
                      <p className="text-xs text-fuchsia-400 font-rajdhani">Dubai City Rank</p>
                      <p className="text-2xl font-bold text-platinum-100">{executiveSummary.dubaiCityBrandRank}</p>
                    </div>
                    <MapPin className="h-8 w-8 text-fuchsia-400" />
                  </div>
                </div>
              </GlassPanel>

              {/* Sentiment Distribution */}
              <GlassPanel title="Brand Sentiment Distribution" description="Overall brand perception sentiment">
                <div className="flex items-center justify-center">
                  <PieChart
                    data={sentimentChartData}
                    height={200}
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
                  <div className="text-center p-3 bg-gold-700/20 rounded-lg border border-gold-700/30">
                    <p className="text-2xl font-bold text-gold-700">{dashboardMetrics.sentiment.neutral}%</p>
                    <p className="text-xs text-platinum-400">Neutral</p>
                  </div>
                </div>
              </GlassPanel>
            </div>

            {/* Rankings Summary */}
            <GlassPanel title="Rankings Summary" description="UAE position in global indices">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {rankingsSummary.map((r, i) => (
                  <div key={i} className="rounded-lg border border-platinum-700/20 bg-platinum-800/20 p-4">
                    <p className="text-xs text-platinum-400 font-rajdhani">{r.index}</p>
                    <p className="text-xl font-bold text-gold-700 mt-1">{r.uaeRank}</p>
                    <p className="text-xs text-platinum-500 mt-1">{r.globalPosition} | {r.year}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Timeline */}
            <GlassPanel title="Key Events Timeline" description="Brand milestones">
              <ScrollArea className="h-[200px]">
                <div className="space-y-3">
                  {timelineOfKeyEvents.map((event, i) => (
                    <div key={i} className="flex items-start gap-3 p-2">
                      <div className="w-20 text-xs text-gold-700 font-rajdhani font-semibold shrink-0">{event.date}</div>
                      <div className="flex-1 text-sm text-platinum-300">{event.event}</div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* NATION BRAND TAB */}
          {/* ============================================================ */}

          <TabsContent value="nation-brand" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Nation Brand Overview */}
              <GlassPanel title="Nation Brand Overview" description={nationBrand.overview}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gold-700/10 rounded-lg border border-gold-700/20">
                      <p className="text-xs text-gold-700 font-rajdhani">Launch Date</p>
                      <p className="text-sm font-semibold text-platinum-200">{nationBrand.launchDate}</p>
                    </div>
                    <div className="p-3 bg-gold-700/10 rounded-lg border border-gold-700/20">
                      <p className="text-xs text-gold-700 font-rajdhani">Venue</p>
                      <p className="text-sm font-semibold text-platinum-200">{nationBrand.launchVenue}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-gold-700/10 rounded-lg border border-gold-700/20">
                    <p className="text-xs text-gold-700 font-rajdhani">Global Votes</p>
                    <p className="text-sm font-semibold text-platinum-200">{nationBrand.globalVotes}</p>
                  </div>
                  <div className="p-3 bg-gold-700/10 rounded-lg border border-gold-700/20">
                    <p className="text-xs text-gold-700 font-rajdhani">Social Media Reach</p>
                    <p className="text-sm font-semibold text-platinum-200">{nationBrand.socialMediaReach}</p>
                  </div>
                </div>
              </GlassPanel>

              {/* Seven Lines Logo */}
              <GlassPanel title="Seven Lines Logo" description="UAE national brand identity">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <Sparkles className="h-6 w-6 text-emerald-400" />
                    <div>
                      <p className="text-sm font-semibold text-platinum-200">"{sevenLinesLogo.name}"</p>
                      <p className="text-xs text-platinum-400">7 خطوط</p>
                    </div>
                  </div>
                  <p className="text-xs text-platinum-400 leading-relaxed">{sevenLinesLogo.slogan}</p>
                  <div className="space-y-2">
                    {sevenLinesLogo.symbolism.map((s, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ArrowUpRight className="h-3 w-3 text-gold-700 mt-1 shrink-0" />
                        <p className="text-xs text-platinum-300">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassPanel>
            </div>

            {/* Core Values */}
            <GlassPanel title="Core Values" description="Fundamental UAE brand values">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {coreValues.map((v, i) => (
                  <div key={i} className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20 text-center">
                    <p className="text-sm font-semibold text-gold-700 font-rajdhani">{v.value}</p>
                    <p className="text-xs text-platinum-400 mt-1">{v.description}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Seven Lines Teams */}
            <GlassPanel title="Seven Lines Design Teams" description="49 Emirati artists in 7 teams">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {sevenLinesTeam.map((t, i) => (
                  <div key={i} className="p-3 bg-gold-700/10 rounded-lg border border-gold-700/20">
                    <p className="text-sm font-semibold text-gold-700 font-rajdhani">{t.team}</p>
                    <p className="text-xs text-platinum-400 mt-1">{t.value}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Nation Brand Value History */}
            <GlassPanel title="Nation Brand Value" description="Historical brand value rankings">
              <ScrollArea className="h-[200px]">
                <div className="space-y-3">
                  {nationBrandValue.map((v, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                      <div>
                        <p className="text-sm font-semibold text-platinum-200">{v.year}</p>
                        <p className="text-xs text-platinum-400">{v.source}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gold-700">{v.value}</p>
                        <p className="text-xs text-platinum-500">{v.rank}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Leadership Quote */}
            <GlassPanel title="Leadership Vision" description="Sheikh Mohammed bin Rashid Al Maktoum">
              <div className="p-4 bg-gold-700/10 rounded-lg border border-gold-700/20">
                <p className="text-sm text-platinum-300 italic leading-relaxed">"{leadershipQuote.split('"')[1]}"</p>
              </div>
            </GlassPanel>

            {/* Governance */}
            <GlassPanel title="Nation Brand Governance" description="Structure and guidelines">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                  <p className="text-xs text-platinum-400 font-rajdhani">Office</p>
                  <p className="text-sm text-platinum-200">{governance.office}</p>
                </div>
                <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                  <p className="text-xs text-platinum-400 font-rajdhani">Website</p>
                  <p className="text-sm text-gold-700">{governance.website}</p>
                </div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* RANKINGS TAB */}
          {/* ============================================================ */}

          <TabsContent value="rankings" className="space-y-6">
            {/* Top 50 UAE Brands */}
            <GlassPanel title="Top 50 UAE Brands 2025" description="Brand value rankings">
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {top50UaeBrands2025.map((brand, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold-700/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-gold-700">{brand.rank}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-platinum-200">{brand.brand}</p>
                          <p className="text-xs text-platinum-500">BSI: {brand.bsiScore}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-emerald-400">{brand.brandValue}</p>
                        <p className="text-xs text-emerald-400">{brand.yoyGrowth}</p>
                      </div>
                    </div>
                  ))}
                  <div className="p-3 bg-gold-700/10 rounded-lg border border-gold-700/20 mt-4">
                    <p className="text-sm text-platinum-200">Total Top 50 UAE Brands Value</p>
                    <p className="text-xl font-bold text-gold-700">{totalTop50UaeBrandsValue.value}</p>
                    <p className="text-xs text-platinum-400">{totalTop50UaeBrandsValue.yoyGrowth}</p>
                  </div>
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* 2026 Updated Figures */}
            <GlassPanel title="2026 Brand Value Update" description="Latest figures from 2026">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {updated2026Figures.map((brand, i) => (
                  <div key={i} className="p-4 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-sm font-semibold text-platinum-200">{brand.brand}</p>
                    <p className="text-xl font-bold text-emerald-400 mt-1">{brand.brandValue}</p>
                    <p className="text-xs text-platinum-500 mt-1">{brand.yoyGrowth || '-'}</p>
                    <p className="text-xs text-platinum-400 mt-1">{brand.notes}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Global 500 Rankings */}
            <GlassPanel title="Brand Finance Global 500 Rankings 2026" description="UAE presence in global rankings">
              <div className="space-y-3">
                {global500Rankings2026.map((brand, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <div>
                      <p className="text-sm font-semibold text-platinum-200">{brand.brand}</p>
                      <p className="text-xs text-platinum-400">{brand.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gold-700">#{brand.globalRank}</p>
                      <p className="text-xs text-emerald-400">{brand.yoyChange}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Key Brand Facts */}
            <GlassPanel title="Key Brand Achievements" description="Notable facts">
              <div className="grid gap-3 sm:grid-cols-2">
                {keyBrandFacts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <Award className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-platinum-200">{fact.brand}</p>
                      <p className="text-xs text-platinum-400 mt-1">{fact.fact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* BSI Scores */}
            <GlassPanel title="Brand Strength Index (BSI) Scores 2025" description="UAE brand strength ratings">
              <div className="space-y-3">
                {uaeBrandsBsiScores2025.map((brand, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-semibold text-platinum-200 w-24">{brand.brand}</p>
                      <Badge className="bg-gold-700/20 text-gold-700 border-gold-700/30">{brand.rating || 'NR'}</Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gold-700">{brand.bsiScore}</p>
                      <p className="text-xs text-platinum-500">{brand.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Soft Power Rankings */}
            <GlassPanel title="Global Soft Power Index 2026" description="4th consecutive year in top 10">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="p-4 bg-denim-500/10 rounded-lg border border-denim-500/20 text-center">
                  <p className="text-xs text-denim-400 font-rajdhani">GLOBAL RANK</p>
                  <p className="text-5xl font-bold text-denim-400 mt-2">{globalSoftPowerIndex2026.overallRank.split(' ')[0]}</p>
                  <p className="text-sm text-platinum-400 mt-2">{globalSoftPowerIndex2026.score}/100</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-platinum-800/20 rounded">
                    <span className="text-xs text-platinum-400">Years in Top 10</span>
                    <span className="text-sm font-semibold text-denim-400">{globalSoftPowerIndex2026.yearsInTop10}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-platinum-800/20 rounded">
                    <span className="text-xs text-platinum-400">Regional Status</span>
                    <span className="text-sm font-semibold text-emerald-400">{globalSoftPowerIndex2026.regionalStatus}</span>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Soft Power Pillar Rankings */}
            <GlassPanel title="Soft Power Pillar Rankings" description="Performance across dimensions">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {softPowerPillarRankings.map((pillar, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <span className="text-xs text-platinum-400">{pillar.pillar}</span>
                    <Badge variant="outline" className="border-denim-500/30 text-denim-400 text-xs">#{pillar.rank}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* City Brand Rankings */}
            <GlassPanel title="City Brand Rankings" description="Dubai and Abu Dhabi global positions">
              <div className="space-y-4">
                <div className="p-4 bg-fuchsia-500/10 rounded-lg border border-fuchsia-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-lg font-semibold text-fuchsia-400">Dubai</p>
                    <Badge className="bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30">5th Globally</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {dubaiMetrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <p className="text-lg font-bold text-platinum-200">{m.rank}</p>
                        <p className="text-xs text-platinum-500">{m.metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {otherUaeCities.map((city, i) => (
                    <div key={i} className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20 text-center">
                      <p className="text-sm font-semibold text-platinum-200">{city.city}</p>
                      <p className="text-lg font-bold text-gold-700">#{city.globalRank}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* CORPORATE TAB */}
          {/* ============================================================ */}

          <TabsContent value="corporate" className="space-y-6">
            {/* ADNOC */}
            <GlassPanel title="ADNOC Brand Profile" description="Abu Dhabi National Oil Company">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gold-700/10 rounded-lg border border-gold-700/20">
                  <div>
                    <p className="text-xs text-gold-700 font-rajdhani">Brand Value 2026</p>
                    <p className="text-3xl font-bold text-gold-700">{adnocBrand.brandValue2026}</p>
                  </div>
                  <Trophy className="h-10 w-10 text-gold-700" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-xs text-platinum-400">Global Rank</p>
                    <p className="text-lg font-bold text-platinum-200">#{adnocBrand.globalRank2026}</p>
                  </div>
                  <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-xs text-platinum-400">BSI Score</p>
                    <p className="text-lg font-bold text-platinum-200">{adnocBrand.bsiScore}</p>
                  </div>
                  <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-xs text-platinum-400">Rating</p>
                    <p className="text-lg font-bold text-platinum-200">{adnocBrand.rating}</p>
                  </div>
                  <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-xs text-platinum-400">UAE Rank</p>
                    <p className="text-lg font-bold text-emerald-400">{adnocBrand.uaeRank}</p>
                  </div>
                </div>
                <p className="text-xs text-platinum-400 italic">"{adnocBrand.keyQuote.split('-')[0]}"</p>
              </div>
            </GlassPanel>

            {/* e& */}
            <GlassPanel title="e& Brand Profile" description="formerly Etisalat - Fastest growing brand">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <div>
                    <p className="text-xs text-emerald-400 font-rajdhani">Brand Value 2025</p>
                    <p className="text-3xl font-bold text-emerald-400">{eAndBrand.brandValue2025}</p>
                  </div>
                  <Zap className="h-10 w-10 text-emerald-400" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-xs text-platinum-400">YoY Growth</p>
                    <p className="text-lg font-bold text-emerald-400">{eAndBrand.yoyGrowth}</p>
                  </div>
                  <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-xs text-platinum-400">Rating</p>
                    <p className="text-lg font-bold text-platinum-200">{eAndBrand.rating}</p>
                  </div>
                </div>
                <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                  <p className="text-xs text-platinum-400 mb-2">Rebranding Transformation</p>
                  <p className="text-sm text-platinum-300">{eAndBrand.rebrandingDetails.from} → {eAndBrand.rebrandingDetails.to}</p>
                  <p className="text-xs text-platinum-500 mt-1">{eAndBrand.rebrandingDetails.messaging}</p>
                </div>
              </div>
            </GlassPanel>

            {/* Emirates */}
            <GlassPanel title="Emirates Brand Profile" description="Flag carrier and global airline">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-rose-500/10 rounded-lg border border-rose-500/20">
                  <div>
                    <p className="text-xs text-rose-400 font-rajdhani">Brand Value 2025</p>
                    <p className="text-3xl font-bold text-rose-400">{emiratesBrand.brandValue2025}</p>
                  </div>
                  <Plane className="h-10 w-10 text-rose-400" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-xs text-platinum-400">BSI Score</p>
                    <p className="text-lg font-bold text-platinum-200">{emiratesBrand.bsiScore}</p>
                  </div>
                  <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-xs text-platinum-400">Global Airline Rank</p>
                    <p className="text-lg font-bold text-platinum-200">{emiratesBrand.globalAirlineRank}</p>
                  </div>
                </div>
                <div className="p-3 bg-gold-700/10 rounded-lg border border-gold-700/20">
                  <p className="text-xs text-gold-700 font-rajdhani mb-2">YouGov Recommend Score</p>
                  <p className="text-2xl font-bold text-gold-700">{emiratesBrand.yougovRecommendGlobal}</p>
                </div>
                <div className="space-y-2">
                  {emiratesBrand.awards.map((award, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-platinum-400">
                      <Award className="h-3 w-3 text-gold-700" />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>

            {/* Emaar */}
            <GlassPanel title="Emaar Brand Profile" description="Real estate development">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <div>
                    <p className="text-xs text-cyan-400 font-rajdhani">Brand Value Sep 2025</p>
                    <p className="text-3xl font-bold text-cyan-400">{emaarBrand.brandValueSep2025}</p>
                  </div>
                  <Building2 className="h-10 w-10 text-cyan-400" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-xs text-platinum-400">YoY Growth</p>
                    <p className="text-lg font-bold text-emerald-400">{emaarBrand.yoyGrowth}</p>
                  </div>
                  <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-xs text-platinum-400">Global Real Estate Rank</p>
                    <p className="text-lg font-bold text-platinum-200">{emaarBrand.globalRealEstateRank}</p>
                  </div>
                </div>
                <p className="text-xs text-platinum-500">Notable: {emaarBrand.notableProjects}</p>
              </div>
            </GlassPanel>

            {/* Emirates NBD & Others */}
            <GlassPanel title="Other Major UAE Brands" description="Emirates NBD, Aldar, PureHealth">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                  <p className="text-sm font-semibold text-platinum-200">Emirates NBD</p>
                  <p className="text-xl font-bold text-gold-700 mt-1">{emiratesNbdBrand.brandValue}</p>
                  <p className="text-xs text-emerald-400 mt-1">{emiratesNbdBrand.yoyGrowth}</p>
                  <p className="text-xs text-platinum-500 mt-1">{emiratesNbdBrand.globalBankRank}</p>
                </div>
                <div className="p-4 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                  <p className="text-sm font-semibold text-platinum-200">Aldar</p>
                  <p className="text-xl font-bold text-emerald-400 mt-1">{aldaraBrand.yoyGrowth}</p>
                  <p className="text-xs text-platinum-500 mt-1">YoY Growth</p>
                </div>
                <div className="p-4 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                  <p className="text-sm font-semibold text-platinum-200">PureHealth Total</p>
                  <p className="text-xl font-bold text-cyan-400 mt-1">{pureHealthGroup[0].value}</p>
                  <p className="text-xs text-platinum-500 mt-1">Healthcare Group</p>
                </div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* SENTIMENT TAB */}
          {/* ============================================================ */}

          <TabsContent value="sentiment" className="space-y-6">
            {/* Overall Brand Sentiment */}
            <GlassPanel title="Overall Brand Sentiment" description="Sentiment analysis by entity">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {overallBrandSentiment.map((item, i) => (
                    <div key={i} className={`rounded-lg border p-4 ${getSentimentBg(item.sentiment)}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          {getSentimentIcon(item.sentiment)}
                          <div>
                            <p className="text-sm font-semibold text-platinum-200 font-rajdhani">{item.entity}</p>
                            <p className="text-xs text-platinum-400 mt-1">{item.reason}</p>
                          </div>
                        </div>
                        <Badge className={`${getSentimentBg(item.sentiment)} ${getSentimentColor(item.sentiment)} text-xs`}>
                          {item.sentiment}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Sentiment by Category */}
            <GlassPanel title="Sentiment by Category" description="Aggregated sentiment scores">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sentimentByCategory.map((cat, i) => (
                  <div key={i} className={`rounded-lg border p-4 ${getSentimentBg(cat.sentiment)}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {getSentimentIcon(cat.sentiment)}
                      <p className="text-sm font-semibold text-platinum-200">{cat.category}</p>
                    </div>
                    <p className="text-xs text-platinum-400">{cat.notes}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* UAE Relevance Assessment */}
            <GlassPanel title="UAE Relevance Assessment" description="Entity relevance classification">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <p className="text-xs text-emerald-400 font-rajdhani mb-2">Direct UAE Entities (100%)</p>
                  <div className="space-y-1">
                    {uaeRelevanceAssessment.directUaeEntities.slice(0, 5).map((e, i) => (
                      <p key={i} className="text-xs text-platinum-300">{e}</p>
                    ))}
                    <p className="text-xs text-platinum-500">+ {uaeRelevanceAssessment.directUaeEntities.length - 5} more</p>
                  </div>
                </div>
                <div className="p-4 bg-gold-700/10 rounded-lg border border-gold-700/20">
                  <p className="text-xs text-gold-700 font-rajdhani mb-2">Indirect UAE Relevance (70-90%)</p>
                  <div className="space-y-1">
                    {uaeRelevanceAssessment.indirectUaeRelevance.map((e, i) => (
                      <p key={i} className="text-xs text-platinum-300">{e}</p>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                  <p className="text-xs text-platinum-400 font-rajdhani mb-2">Global Rankings with UAE (10-50%)</p>
                  <div className="space-y-1">
                    {uaeRelevanceAssessment.globalRankingsWithUae.map((e, i) => (
                      <p key={i} className="text-xs text-platinum-300">{e}</p>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Key Branding Themes */}
            <GlassPanel title="Key UAE Branding Themes" description="Core messaging pillars">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {keyUaeBrandingThemes.map((theme, i) => (
                  <div key={i} className="p-4 bg-gold-700/10 rounded-lg border border-gold-700/20">
                    <p className="text-sm font-semibold text-gold-700 font-rajdhani">{theme.theme}</p>
                    <p className="text-xs text-platinum-400 mt-1">{theme.description}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* CRISIS TAB */}
          {/* ============================================================ */}

          <TabsContent value="crisis" className="space-y-6">
            {/* Luxury Brands Crisis 2026 */}
            <GlassPanel title="Luxury Brands Crisis 2026" description="March-April 2026 Iran conflict impact">
              <div className="space-y-4">
                <div className="p-4 bg-rose-500/10 rounded-lg border border-rose-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="h-6 w-6 text-rose-400" />
                    <p className="text-sm font-semibold text-rose-400">Sales Drop: {luxuryBrandsCrisis2026.salesDropMallOfEmirates}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-platinum-800/20 rounded-lg">
                      <p className="text-xs text-platinum-400">Cause</p>
                      <p className="text-sm text-platinum-200">{luxuryBrandsCrisis2026.cause}</p>
                    </div>
                    <div className="p-3 bg-platinum-800/20 rounded-lg">
                      <p className="text-xs text-platinum-400">Global Revenue at Risk</p>
                      <p className="text-sm text-rose-400">{luxuryBrandsCrisis2026.globalRevenueAtRisk}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-platinum-400 font-rajdhani">Key Facts:</p>
                  {luxuryBrandsCrisis2026.keyFacts.slice(0, 4).map((fact, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-platinum-300">
                      <ArrowUpRight className="h-3 w-3 text-rose-400 mt-0.5 shrink-0" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                  <p className="text-xs text-platinum-400">Affected Brands</p>
                  <p className="text-sm text-platinum-200">{luxuryBrandsCrisis2026.affectedBrands}</p>
                </div>
              </div>
            </GlassPanel>

            {/* Brand Consistency Challenges */}
            <GlassPanel title="Brand Consistency Challenges" description="Issues identified in UAE market">
              <div className="space-y-3">
                {brandConsistencyChallenges.map((challenge, i) => (
                  <div key={i} className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <div className="flex items-start gap-2">
                      <MinusCircle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-platinum-200">{challenge.issue}</p>
                        <p className="text-xs text-platinum-500 mt-1">Source: {challenge.source}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Rebranding Case Studies */}
            <GlassPanel title="Rebranding Case Studies" description="Successful UAE rebranding examples">
              <div className="space-y-4">
                {/* Etisalat to e& */}
                <div className="p-4 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="h-4 w-4 text-emerald-400" />
                    <p className="text-sm font-semibold text-platinum-200">Etisalat → e&</p>
                  </div>
                  <p className="text-xs text-platinum-400 mb-2">{rebrandingCaseStudies.etisalatToEAnd.from} → {rebrandingCaseStudies.etisalatToEAnd.to}</p>
                  <p className="text-xs text-platinum-500">{rebrandingCaseStudies.etisalatToEAnd.messaging}</p>
                  <Badge className="mt-2 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
                    {rebrandingCaseStudies.etisalatToEAnd.result}
                  </Badge>
                </div>

                {/* Careem */}
                <div className="p-4 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="h-4 w-4 text-cyan-400" />
                    <p className="text-sm font-semibold text-platinum-200">Careem</p>
                  </div>
                  <p className="text-xs text-platinum-400 mb-2">{rebrandingCaseStudies.careem.from} → {rebrandingCaseStudies.careem.to}</p>
                  <p className="text-xs text-platinum-500">{rebrandingCaseStudies.careem.branding}</p>
                </div>

                {/* Emirates NBD */}
                <div className="p-4 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="h-4 w-4 text-denim-400" />
                    <p className="text-sm font-semibold text-platinum-200">Emirates NBD</p>
                  </div>
                  <p className="text-xs text-platinum-400 mb-2">Focus: {rebrandingCaseStudies.emiratesNbd.focus}</p>
                  <p className="text-xs text-platinum-500">{rebrandingCaseStudies.emiratesNbd.brandVoice}</p>
                </div>
              </div>
            </GlassPanel>

            {/* Rebranding Best Practices */}
            <GlassPanel title="Rebranding Best Practices" description="UAE brand transformation guidelines">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {rebrandingBestPractices.map((practice, i) => (
                  <div key={i} className="p-3 bg-gold-700/10 rounded-lg border border-gold-700/20">
                    <p className="text-xs text-gold-700 font-rajdhani">{i + 1}.</p>
                    <p className="text-xs text-platinum-300 mt-1">{practice}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* CULTURE TAB */}
          {/* ============================================================ */}

          <TabsContent value="culture" className="space-y-6">
            {/* UAE Consumer Expectations */}
            <GlassPanel title="UAE Consumer Expectations" description="What UAE consumers expect from brands">
              <div className="grid gap-3 sm:grid-cols-2">
                {uaeConsumerExpectations.map((item, i) => (
                  <div key={i} className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-platinum-400">{item.statistic}</p>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">{item.value}</Badge>
                    </div>
                    <p className="text-xs text-platinum-500 mt-1">Source: {item.source}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Cultural Considerations */}
            <GlassPanel title="Cultural Considerations" description="Factors for brand identity in UAE">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {culturalConsiderations.map((item, i) => (
                  <div key={i} className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-sm font-semibold text-gold-700">{item.factor}</p>
                    <p className="text-xs text-platinum-400 mt-1">{item.consideration}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Color Symbolism */}
            <GlassPanel title="Color Symbolism" description="Cultural meaning of brand colors">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {colorSymbolism.map((c, i) => (
                  <div key={i} className="p-4 bg-platinum-800/20 rounded-lg border border-platinum-700/20 text-center">
                    <Palette className="h-6 w-6 mx-auto mb-2 text-gold-700" />
                    <p className="text-sm font-semibold text-platinum-200">{c.color}</p>
                    <p className="text-xs text-platinum-400 mt-1">{c.meaning}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Brand Differentiation Strategies */}
            <GlassPanel title="Brand Differentiation Strategies" description="How brands stand out in UAE market">
              <div className="grid gap-3 sm:grid-cols-2">
                {brandDifferentiationStrategies.map((item, i) => (
                  <div key={i} className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <p className="text-sm font-semibold text-emerald-400">{item.strategy}</p>
                    <p className="text-xs text-platinum-400 mt-1">{item.implementation}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Abu Dhabi vs Dubai */}
            <GlassPanel title="Abu Dhabi vs Dubai Brand Identity" description="Distinct emirate positioning">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="p-4 bg-gold-700/10 rounded-lg border border-gold-700/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Crown className="h-5 w-5 text-gold-700" />
                    <p className="text-sm font-semibold text-gold-700">Abu Dhabi</p>
                  </div>
                  <div className="space-y-2 text-xs">
                    <p className="text-platinum-400">Symbol: {abuDhabiBrandIdentity.symbol}</p>
                    <p className="text-platinum-400">Positioning: {abuDhabiBrandIdentity.positioning}</p>
                    <p className="text-platinum-400">Heritage: {abuDhabiBrandIdentity.heritage}</p>
                    <p className="text-platinum-400">Elements: {abuDhabiBrandIdentity.elements}</p>
                  </div>
                </div>
                <div className="p-4 bg-fuchsia-500/10 rounded-lg border border-fuchsia-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Gem className="h-5 w-5 text-fuchsia-400" />
                    <p className="text-sm font-semibold text-fuchsia-400">Dubai</p>
                  </div>
                  <div className="space-y-2 text-xs">
                    <p className="text-platinum-400">Strategy: {dubaiBrandIdentity.strategy}</p>
                    <p className="text-platinum-400">Values: {dubaiBrandIdentity.values}</p>
                    <p className="text-platinum-400">Fusion: {dubaiBrandIdentity.fusion}</p>
                    <p className="text-platinum-400">Target: {dubaiBrandIdentity.target}</p>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Dubai Visual Strategy */}
            <GlassPanel title="Dubai Visual Strategy" description="Design elements and approach">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {dubaiVisualStrategy.map((item, i) => (
                  <div key={i} className="p-3 bg-platinum-800/20 rounded-lg border border-platinum-700/20">
                    <p className="text-xs text-fuchsia-400 font-rajdhani">{item.element}</p>
                    <p className="text-sm text-platinum-200 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Dubai Brand Perception */}
            <GlassPanel title="Dubai Brand Perception" description="How Dubai is positioned globally">
              <div className="space-y-2">
                {dubaiBrandPerception.map((perception, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 bg-platinum-800/20 rounded-lg">
                    <ArrowUpRight className="h-3 w-3 text-fuchsia-400 mt-1 shrink-0" />
                    <p className="text-xs text-platinum-300">{perception}</p>
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
