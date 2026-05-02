// @ts-nocheck
'use client'

/**
 * Competitive Benchmarking Page — UAE Perception Dashboard
 * PERCEPTION-X2 Module
 *
 * Comprehensive competitive benchmarking of UAE vs. regional and global peers
 * Source: 3-3-competitive-benchmarking-results.md
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
  Plane,
  Building,
  Briefcase,
  Target,
  MapPin,
  Calendar,
  BookOpen,
  Crosshair,
  Crown,
  Gem,
  Sparkles,
  Rocket,
  Globe3,
  Handshake,
  Mic2,
  Radar,
  Scale as ScaleIcon,
  Sword,
  Anchor,
  Building2,
  Landmark,
  DollarSign,
  Percent,
  TrendingUp as TrendingUpIcon,
} from 'lucide-react'
import { useCompetitiveBenchmarkingData } from '@/lib/data-loader/hooks'

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
  if (sentiment === 'Mixed') return <MinusCircle className="h-4 w-4 text-amber-400" />
  return <MinusCircle className="h-4 w-4 text-platinum-400" />
}

function getSentimentColor(sentiment: string) {
  if (sentiment === 'Strongly Positive' || sentiment === 'Positive') return 'text-emerald-400'
  if (sentiment === 'Negative' || sentiment === 'Strongly Negative') return 'text-rose-400'
  if (sentiment === 'Mixed') return 'text-amber-400'
  return 'text-platinum-400'
}

function getSentimentBg(sentiment: string) {
  if (sentiment === 'Strongly Positive' || sentiment === 'Positive') return 'bg-emerald-500/20 border-emerald-500/30'
  if (sentiment === 'Negative' || sentiment === 'Strongly Negative') return 'bg-rose-500/20 border-rose-500/30'
  if (sentiment === 'Mixed') return 'bg-amber-500/20 border-amber-500/30'
  return 'bg-platinum-500/20 border-platinum-500/30'
}

function getTrendIcon(trend: string) {
  if (trend === 'Rising' || trend === 'Up' || trend === 'up') return <TrendingUp className="h-3 w-3" />
  if (trend === 'Deteriorating' || trend === 'Down' || trend === 'down') return <TrendingDown className="h-3 w-3" />
  return <Minus className="h-3 w-3" />
}

function getCompetitorColor(index: number) {
  const colors = [
    CHART_COLORS.gold,
    CHART_COLORS.emerald,
    CHART_COLORS.rose,
    CHART_COLORS.denim,
    CHART_COLORS.indigo,
    CHART_COLORS.purple,
    CHART_COLORS.fuchsia,
    CHART_COLORS.orange,
    CHART_COLORS.cyan,
    CHART_COLORS.teal,
    CHART_COLORS.lime,
  ]
  return colors[index % colors.length]
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function CompetitiveBenchmarkingPage() {
  const { data, loading, error } = useCompetitiveBenchmarkingData()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedCompetitor, setSelectedCompetitor] = useState('saudi')

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gold-700 font-rajdhani text-xl">
          Loading Competitive Benchmarking data...
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
    executiveSummary,
    uaeGlobalRankings,
    uaeIndicatorPerformance,
    uaeVsSaudi,
    uaeVsQatar,
    uaeVsOman,
    uaeVsBahrain,
    uaeVsKuwait,
    uaeVsIsrael,
    uaeVsTurkey,
    uaeVsEgypt,
    uaeVsSingapore,
    uaeVsSwitzerland,
    uaeVsHongKong,
    uaeVsMonaco,
    aviationRivalry,
    dubaiVsLondon,
    dubaiVsNewYork,
    aviationSector,
    wealthManagementSector,
    gccEconomicOverview,
    tourismSector,
    competitorIntelligenceCards,
    urlSourceRegistry,
    uaeRankingsOverTime,
    gccComparisonMatrix,
    middleEastMilitaryRankings,
    uaeCompetitiveAdvantages,
    uaeCompetitiveVulnerabilities,
    worldRankingsSummary,
    sentimentAnalysisByDimension,
    dataProvenance,
    sourceTierDistribution,
  } = data

  // Extract key metrics for cards
  const topRankings = uaeGlobalRankings.slice(0, 6).map((r, i) => ({
    title: r.index,
    value: r.ranking,
    subtitle: r.source,
    icon: r.index.includes('IMD') ? <Trophy className="h-6 w-6" /> :
          r.index.includes('GEM') ? <Rocket className="h-6 w-6" /> :
          r.index.includes('GFCI') ? <Building className="h-6 w-6" /> :
          r.index.includes('Happiness') ? <Heart className="h-6 w-6" /> :
          r.index.includes('Soft Power') ? <Globe className="h-6 w-6" /> :
          <Star className="h-6 w-6" />,
    gradient: ['gold', 'emerald', 'teal', 'indigo', 'fuchsia', 'denim'][i] as 'gold' | 'emerald' | 'teal' | 'indigo' | 'fuchsia' | 'denim',
    trend: r.trend?.includes('Up') ? 'up' as const : r.trend?.includes('Down') ? 'down' as const : 'neutral' as const,
  }))

  // Sentiment chart data
  const sentimentCounts = {
    positive: sentimentAnalysisByDimension.filter(s => s.uaeSentiment.includes('Positive')).length,
    negative: sentimentAnalysisByDimension.filter(s => s.uaeSentiment.includes('Negative')).length,
    mixed: sentimentAnalysisByDimension.filter(s => s.uaeSentiment.includes('Mixed') || s.uaeSentiment.includes('Confident')).length,
  }

  const sentimentChartData = [
    { name: 'Positive', value: sentimentCounts.positive, color: CHART_COLORS.emerald },
    { name: 'Negative', value: sentimentCounts.negative, color: CHART_COLORS.rose },
    { name: 'Mixed/Confident', value: sentimentCounts.mixed, color: CHART_COLORS.gold },
  ]

  // GCC comparison chart data
  const gccChartData = gccEconomicOverview.map(c => ({
    country: c.country,
    gdp: parseFloat(c.gdpNominal?.replace(/[^0-9.]/g, '') || '0'),
    color: getCompetitorColor(gccEconomicOverview.indexOf(c)),
  }))

  // Military rankings chart data
  const militaryChartData = middleEastMilitaryRankings.map(m => ({
    country: m.country,
    rank: parseFloat(m.powerIndex) || 0,
    color: m.country === 'UAE' ? CHART_COLORS.gold : CHART_COLORS.platinum,
  }))

  // Competitive advantages data
  const advantagesChartData = uaeCompetitiveAdvantages.slice(0, 6).map(a => ({
    domain: a.advantageDomain,
    value: 100,
    color: CHART_COLORS.emerald,
  }))

  // Competitor comparison data
  const competitors = [
    { id: 'saudi', name: 'Saudi Arabia', data: uaeVsSaudi },
    { id: 'qatar', name: 'Qatar', data: uaeVsQatar },
    { id: 'oman', name: 'Oman', data: uaeVsOman },
    { id: 'israel', name: 'Israel', data: uaeVsIsrael },
    { id: 'turkey', name: 'Turkey', data: uaeVsTurkey },
    { id: 'egypt', name: 'Egypt', data: uaeVsEgypt },
    { id: 'singapore', name: 'Singapore', data: uaeVsSingapore },
    { id: 'switzerland', name: 'Switzerland', data: uaeVsSwitzerland },
  ]

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
            PERCEPTION-X2 | COMPETITIVE BENCHMARKING
          </Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">
            UAE Competitive Benchmarking
          </h1>
          <p className="mt-2 text-sm text-platinum-400 max-w-2xl">
            {executiveSummary.uaePositioning}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="border-gold-700/40 text-gold-700 text-xs">
            <Trophy className="h-3 w-3 mr-1" />
            {executiveSummary.headlineFinding.split(' ')[0]} {executiveSummary.headlineFinding.split(' ')[1]} {executiveSummary.headlineFinding.split(' ')[2]}
          </Badge>
          <Badge variant="outline" className="border-emerald-500/40 text-emerald-400 text-xs">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            {urlSourceRegistry.length}+ Sources
          </Badge>
          <Badge variant="outline" className="border-platinum-500/40 text-platinum-400 text-xs">
            <Activity className="h-3 w-3 mr-1" />
            {executiveSummary.lastUpdated}
          </Badge>
        </div>
      </motion.div>

      {/* ================================================================== */}
      {/* KEY METRICS */}
      {/* ================================================================== */}

      <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {topRankings.map((metric) => (
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
            <TabsTrigger value="rankings" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Trophy className="h-3 w-3 mr-1" /> Rankings
            </TabsTrigger>
            <TabsTrigger value="competitors" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Users className="h-3 w-3 mr-1" /> Competitors
            </TabsTrigger>
            <TabsTrigger value="military" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Sword className="h-3 w-3 mr-1" /> Military
            </TabsTrigger>
            <TabsTrigger value="sectors" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Briefcase className="h-3 w-3 mr-1" /> Sectors
            </TabsTrigger>
            <TabsTrigger value="advantages" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <TrendingUpIcon className="h-3 w-3 mr-1" /> Advantages
            </TabsTrigger>
            <TabsTrigger value="sentiment" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <ThumbsUp className="h-3 w-3 mr-1" /> Sentiment
            </TabsTrigger>
            <TabsTrigger value="sources" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <BookOpen className="h-3 w-3 mr-1" /> Sources
            </TabsTrigger>
          </TabsList>

          {/* ============================================================ */}
          {/* OVERVIEW TAB */}
          {/* ============================================================ */}

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Executive Summary */}
              <GlassPanel title="Executive Summary" description="UAE positioning and headline findings">
                <div className="space-y-4">
                  <div className="p-4 bg-gold-700/10 border border-gold-700/30 rounded-lg">
                    <p className="text-platinum-200 font-rajdhani text-lg">{executiveSummary.headlineFinding}</p>
                  </div>
                  <p className="text-sm text-platinum-400">{executiveSummary.uaePositioning}</p>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="text-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                      <p className="text-2xl font-bold text-emerald-400">5X</p>
                      <p className="text-xs text-platinum-400">Global Top 10 Rankings</p>
                    </div>
                    <div className="text-center p-3 bg-gold-700/10 rounded-lg border border-gold-700/30">
                      <p className="text-2xl font-bold text-gold-700">77%+</p>
                      <p className="text-xs text-platinum-400">Non-oil GDP</p>
                    </div>
                  </div>
                </div>
              </GlassPanel>

              {/* Sentiment Distribution */}
              <GlassPanel title="Competitive Sentiment Analysis" description="UAE sentiment across all benchmarking dimensions">
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
                    <p className="text-2xl font-bold text-emerald-400">{sentimentCounts.positive}</p>
                    <p className="text-xs text-platinum-400">Positive</p>
                  </div>
                  <div className="text-center p-3 bg-rose-500/20 rounded-lg border border-rose-500/30">
                    <p className="text-2xl font-bold text-rose-400">{sentimentCounts.negative}</p>
                    <p className="text-xs text-platinum-400">Negative</p>
                  </div>
                  <div className="text-center p-3 bg-gold-700/10 rounded-lg border border-gold-700/30">
                    <p className="text-2xl font-bold text-gold-700">{sentimentCounts.mixed}</p>
                    <p className="text-xs text-platinum-400">Mixed</p>
                  </div>
                </div>
              </GlassPanel>
            </div>

            {/* GCC Economic Overview */}
            <GlassPanel title="GCC Economic Overview" description="Comparative economic metrics across GCC states">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-platinum-700">
                      <th className="text-left p-2 text-platinum-400 font-rajdhani">Country</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">GDP ($B)</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">GDP/Capita</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">Debt/GDP</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">S&P Rating</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">IMF 2026</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gccEconomicOverview.map((country, i) => (
                      <tr key={country.country} className={`border-b border-platinum-800 ${country.country === 'UAE' ? 'bg-gold-700/10' : ''}`}>
                        <td className="p-2 text-platinum-200 font-rajdhani font-semibold">
                          {country.country === 'UAE' && <span className="text-gold-700 mr-1">●</span>}
                          {country.country}
                        </td>
                        <td className="text-right p-2 text-platinum-300">{country.gdpNominal || '-'}</td>
                        <td className="text-right p-2 text-platinum-300">{country.gdpPerCapita || '-'}</td>
                        <td className="text-right p-2 text-platinum-300">{country.debtToGdp || '-'}</td>
                        <td className="text-right p-2">
                          <Badge className={country.spRating === 'AA' ? 'bg-emerald-500/20 text-emerald-400' : country.spRating === 'BBB-' ? 'bg-amber-500/20 text-amber-400' : 'bg-rose-500/20 text-rose-400'}>
                            {country.spRating || '-'}
                          </Badge>
                        </td>
                        <td className="text-right p-2">
                          <span className={country.imf2026Growth?.includes('-') ? 'text-rose-400' : 'text-emerald-400'}>
                            {country.imf2026Growth || '-'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* RANKINGS TAB */}
          {/* ============================================================ */}

          <TabsContent value="rankings" className="space-y-6">
            {/* UAE Global Rankings */}
            <GlassPanel title="UAE Global Rankings Index Card" description="UAE positions across major global indices">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {uaeGlobalRankings.map((ranking, i) => (
                  <div key={ranking.index} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-platinum-500 font-rajdhani">{ranking.source}</p>
                        <p className="text-lg font-bold text-gold-700 mt-1">{ranking.ranking}</p>
                        <p className="text-sm text-platinum-300 mt-1">{ranking.index}</p>
                      </div>
                      {ranking.score && (
                        <Badge variant="outline" className="border-platinum-600 text-platinum-400">
                          {ranking.score}
                        </Badge>
                      )}
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      {getTrendIcon(ranking.trend || '')}
                      <span className="text-xs text-platinum-500">{ranking.trend}</span>
                      <span className="text-xs text-platinum-600 ml-auto">{ranking.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* IMD Performance Breakdown */}
            <GlassPanel title="UAE Indicator Performance — IMD 2025" description="Detailed IMD World Competitiveness indicators">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {uaeIndicatorPerformance.map((indicator, i) => (
                  <div key={indicator.indicator} className="p-3 bg-platinum-800/50 rounded-lg border border-platinum-700">
                    <div className="flex items-start justify-between">
                      <p className="text-sm text-platinum-300">{indicator.indicator}</p>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
                        {indicator.uaeRank}
                      </Badge>
                    </div>
                    {indicator.notes && (
                      <p className="text-xs text-platinum-500 mt-2">{indicator.notes}</p>
                    )}
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* World Rankings Summary */}
            <GlassPanel title="World Rankings Summary — UAE vs Peer Nations" description="Cross-index comparison">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-platinum-700">
                      <th className="text-left p-2 text-platinum-400 font-rajdhani">Index</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">UAE</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">Saudi</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">Qatar</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">Turkey</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">Israel</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">Singapore</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">Switzerland</th>
                    </tr>
                  </thead>
                  <tbody>
                    {worldRankingsSummary.map((row, i) => (
                      <tr key={row.index} className="border-b border-platinum-800">
                        <td className="p-2 text-platinum-300 font-rajdhani">{row.index}</td>
                        <td className="text-right p-2">
                          <span className={row.uae && row.uae !== '-' ? 'text-gold-700 font-bold' : 'text-platinum-500'}>
                            {row.uae || '-'}
                          </span>
                        </td>
                        <td className="text-right p-2 text-platinum-400">{row.saudi || '-'}</td>
                        <td className="text-right p-2 text-platinum-400">{row.qatar || '-'}</td>
                        <td className="text-right p-2 text-platinum-400">{row.turkey || '-'}</td>
                        <td className="text-right p-2 text-platinum-400">{row.israel || '-'}</td>
                        <td className="text-right p-2 text-platinum-400">{row.singapore || '-'}</td>
                        <td className="text-right p-2 text-platinum-400">{row.switzerland || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* COMPETITORS TAB */}
          {/* ============================================================ */}

          <TabsContent value="competitors" className="space-y-6">
            {/* Competitor selector */}
            <GlassPanel title="Competitor Comparisons" description="Detailed pairwise comparisons between UAE and peer nations">
              <div className="flex flex-wrap gap-2 mb-6">
                {competitors.map(comp => (
                  <Badge
                    key={comp.id}
                    variant={selectedCompetitor === comp.id ? 'default' : 'outline'}
                    className={selectedCompetitor === comp.id ? 'bg-gold-700 text-navy-950' : 'border-platinum-600 text-platinum-400 cursor-pointer'}
                    onClick={() => setSelectedCompetitor(comp.id)}
                  >
                    {comp.name}
                  </Badge>
                ))}
              </div>

              {/* Saudi Arabia */}
              {selectedCompetitor === 'saudi' && (
                <div className="space-y-4">
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                      <h4 className="text-gold-700 font-rajdhani font-semibold mb-3">Economic Overview</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span className="text-platinum-400">Nominal GDP</span><span className="text-platinum-200">UAE $540-601B vs KSA $1.1-1.3T</span></div>
                        <div className="flex justify-between"><span className="text-platinum-400">GDP per capita</span><span className="text-emerald-400">UAE $67-79K vs KSA $47-50K</span></div>
                        <div className="flex justify-between"><span className="text-platinum-400">Non-oil GDP</span><span className="text-emerald-400">UAE 77%+ vs KSA 56%</span></div>
                        <div className="flex justify-between"><span className="text-platinum-400">Corporate Tax</span><span className="text-emerald-400">UAE 9% vs KSA 20%</span></div>
                        <div className="flex justify-between"><span className="text-platinum-400">Expat Share</span><span className="text-emerald-400">UAE 88-94% vs KSA 38%</span></div>
                      </div>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                      <h4 className="text-gold-700 font-rajdhani font-semibold mb-3">Key Insight</h4>
                      <p className="text-platinum-300">{uaeVsSaudi.keyInsight}</p>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between"><span className="text-platinum-400">Religious Tolerance</span><span className="text-emerald-400">UAE leads (churches, temples, synagogue)</span></div>
                        <div className="flex justify-between"><span className="text-platinum-400">Naval Fleet</span><span className="text-emerald-400">UAE 84 ships vs KSA 32</span></div>
                        <div className="flex justify-between"><span className="text-platinum-400">Construction (2025)</span><span className="text-emerald-400">UAE $31B vs KSA $20.6B</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Qatar */}
              {selectedCompetitor === 'qatar' && (
                <div className="space-y-4">
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                      <h4 className="text-gold-700 font-rajdhani font-semibold mb-3">Economic Overview</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span className="text-platinum-400">GDP (nominal)</span><span className="text-emerald-400">UAE $552B vs Qatar $219B</span></div>
                        <div className="flex justify-between"><span className="text-platinum-400">GDP per capita</span><span className="text-rose-400">UAE $50K vs Qatar $77K</span></div>
                        <div className="flex justify-between"><span className="text-platinum-400">Literacy rate</span><span className="text-emerald-400">UAE 98.8% vs Qatar 93.5%</span></div>
                        <div className="flex justify-between"><span className="text-platinum-400">Bachelor's degree</span><span className="text-emerald-400">UAE 52.7% vs Qatar 30.4%</span></div>
                        <div className="flex justify-between"><span className="text-platinum-400">Education spending</span><span className="text-emerald-400">UAE 14.76% vs Qatar 8.94%</span></div>
                      </div>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                      <h4 className="text-gold-700 font-rajdhani font-semibold mb-3">Aviation Rivalry</h4>
                      <div className="space-y-2">
                        {aviationRivalry.slice(0, 5).map((item, i) => (
                          <div key={i} className="flex justify-between">
                            <span className="text-platinum-400 text-xs">{item.metric}</span>
                            <span className="text-platinum-300 text-xs">{item.emirates || '-'} vs {item.qatarAirways || '-'}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Singapore */}
              {selectedCompetitor === 'singapore' && (
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                    <h4 className="text-gold-700 font-rajdhani font-semibold mb-3">Cost & Tax Comparison</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between"><span className="text-platinum-400">Cost of living</span><span className="text-emerald-400">UAE baseline vs Singapore 38% higher</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Personal income tax</span><span className="text-emerald-400">UAE 0% vs Singapore 0-24%</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Safety score</span><span className="text-emerald-400">UAE 84/100 vs Singapore 77/100</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Visa process</span><span className="text-emerald-400">UAE easier vs Singapore complex</span></div>
                    </div>
                  </div>
                  <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                    <h4 className="text-gold-700 font-rajdhani font-semibold mb-3">Where Singapore Leads</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between"><span className="text-platinum-400">Internet speed</span><span className="text-rose-400">Singapore 250 Mbps vs UAE 100 Mbps</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Healthcare</span><span className="text-rose-400">Singapore better infrastructure</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Geopolitical stability</span><span className="text-rose-400">Singapore "island of stability"</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Walkability</span><span className="text-rose-400">Singapore higher</span></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Switzerland */}
              {selectedCompetitor === 'switzerland' && (
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                    <h4 className="text-gold-700 font-rajdhani font-semibold mb-3">Tax Efficiency</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between"><span className="text-platinum-400">Personal income tax</span><span className="text-emerald-400">UAE 0% vs Switzerland ~40%</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Corporate tax</span><span className="text-emerald-400">UAE 9% vs Switzerland 12-21%</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Capital gains tax</span><span className="text-emerald-400">UAE 0% vs Switzerland generally exempt</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Wealth/inheritance tax</span><span className="text-emerald-400">UAE None vs Switzerland Yes</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Crypto tax</span><span className="text-emerald-400">UAE 0% vs Switzerland varies</span></div>
                    </div>
                  </div>
                  <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                    <h4 className="text-gold-700 font-rajdhani font-semibold mb-3">Positioning</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between"><span className="text-platinum-400">UAE positioning</span><span className="text-platinum-300">Europe-Asia capital flow hub</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Switzerland</span><span className="text-platinum-300">Time-tested wealth preservation</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Foreign ownership</span><span className="text-emerald-400">UAE 100% vs Switzerland strict limits</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Property tax</span><span className="text-emerald-400">UAE None vs Switzerland Yes</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Banking discretion</span><span className="text-rose-400">Switzerland very high</span></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Default for other competitors */}
              {!['saudi', 'qatar', 'singapore', 'switzerland'].includes(selectedCompetitor) && (
                <div className="p-6 bg-platinum-800/50 rounded-lg border border-platinum-700 text-center">
                  <p className="text-platinum-400">Select a competitor to view detailed comparison</p>
                </div>
              )}
            </GlassPanel>

            {/* Dubai Comparisons */}
            <GlassPanel title="City Hubs: Dubai Comparisons" description="Dubai vs London and New York">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                  <h4 className="text-gold-700 font-rajdhani font-semibold mb-3 flex items-center gap-2">
                    <Building className="h-4 w-4" /> Dubai vs London (Financial Hub)
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-platinum-400">GFCI Ranking (Mar 2026)</span><span className="text-gold-700">Dubai #7 vs London #2</span></div>
                    <div className="flex justify-between"><span className="text-platinum-400">Companies registered (2023)</span><span className="text-emerald-400">Dubai 1,924 new (28% increase)</span></div>
                    <div className="flex justify-between"><span className="text-platinum-400">Active companies</span><span className="text-emerald-400">Dubai 8,844-9,000+</span></div>
                    <div className="flex justify-between"><span className="text-platinum-400">DIFC Expansion</span><span className="text-emerald-400">Dh100B ($27B) plan</span></div>
                    <div className="flex justify-between"><span className="text-platinum-400">2033 Goal</span><span className="text-emerald-400">42,000 companies, 125,000 professionals</span></div>
                  </div>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                  <h4 className="text-gold-700 font-rajdhani font-semibold mb-3 flex items-center gap-2">
                    <Building className="h-4 w-4" /> Dubai vs New York
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-platinum-400">Rent (1BR city centre)</span><span className="text-emerald-400">Dubai $2,500-3,000 vs NYC $3,500-5,000</span></div>
                    <div className="flex justify-between"><span className="text-platinum-400">Personal income tax</span><span className="text-emerald-400">Dubai 0% vs NYC Federal+State+City</span></div>
                    <div className="flex justify-between"><span className="text-platinum-400">Property tax</span><span className="text-emerald-400">Dubai None vs NYC varies</span></div>
                    <div className="flex justify-between"><span className="text-platinum-400">Rental yields</span><span className="text-emerald-400">Dubai 5-8% vs NYC lower</span></div>
                    <div className="flex justify-between"><span className="text-platinum-400">Best for wealthy (2025)</span><span className="text-gold-700">Dubai #1</span></div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* MILITARY TAB */}
          {/* ============================================================ */}

          <TabsContent value="military" className="space-y-6">
            {/* Middle East Military Rankings */}
            <GlassPanel title="Middle East Military Rankings (GFP 2026)" description="Power Index comparison across Middle East nations">
              <div className="space-y-3">
                {middleEastMilitaryRankings.map((item, i) => (
                  <div
                    key={item.country}
                    className={`p-3 rounded-lg border ${item.country === 'UAE' ? 'bg-gold-700/10 border-gold-700/30' : 'bg-platinum-800/50 border-platinum-700'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-lg font-bold font-rajdhani ${item.country === 'UAE' ? 'text-gold-700' : 'text-platinum-400'}`}>
                          #{item.meRank}
                        </span>
                        <span className={`font-semibold ${item.country === 'UAE' ? 'text-platinum-100' : 'text-platinum-300'}`}>
                          {item.country}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-platinum-400 text-sm">
                          Power Index: <span className={item.country === 'UAE' ? 'text-gold-700' : 'text-platinum-300'}>{item.powerIndex}</span>
                        </span>
                        {item.globalRank && (
                          <Badge variant="outline" className="border-platinum-600 text-platinum-400">
                            Global #{item.globalRank}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="mt-2">
                      <Progress
                        value={100 - (parseFloat(item.powerIndex) * 50)}
                        className="h-2"
                        indicatorClassName={item.country === 'UAE' ? 'bg-gold-700' : 'bg-platinum-600'}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-platinum-500 mt-4">Note: Lower Power Index = stronger military. Source: GlobalFirePower.com 2026</p>
            </GlassPanel>

            {/* UAE Military Details */}
            <GlassPanel title="UAE Military Capabilities" description="UAE defense metrics vs regional competitors">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700 text-center">
                  <p className="text-3xl font-bold text-gold-700">$23.5B</p>
                  <p className="text-xs text-platinum-400 mt-1">Defense Budget (Rank 24)</p>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700 text-center">
                  <p className="text-3xl font-bold text-gold-700">65K</p>
                  <p className="text-xs text-platinum-400 mt-1">Active Troops</p>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700 text-center">
                  <p className="text-3xl font-bold text-gold-700">130K</p>
                  <p className="text-xs text-platinum-400 mt-1">Reserve Troops</p>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700 text-center">
                  <p className="text-3xl font-bold text-gold-700">84</p>
                  <p className="text-xs text-platinum-400 mt-1">Naval Ships (2.6x Saudi)</p>
                </div>
              </div>
            </GlassPanel>

            {/* UAE vs Saudi Military Comparison */}
            <GlassPanel title="UAE vs Saudi Arabia — Military Comparison" description="GFP 2026 data">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="text-emerald-400 font-rajdhani font-semibold">UAE Advantages</h4>
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <p className="text-sm text-platinum-200">Naval Fleet: <span className="text-emerald-400 font-bold">UAE 84 vs KSA 32</span> (2.6x larger)</p>
                  </div>
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <p className="text-sm text-platinum-200">Reserve Forces: <span className="text-emerald-400 font-bold">UAE 130K vs KSA 0</span></p>
                  </div>
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <p className="text-sm text-platinum-200">Regional Rank: <span className="text-emerald-400 font-bold">7th vs 5th</span> (tighter than raw numbers suggest)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-rose-400 font-rajdhani font-semibold">Saudi Advantages</h4>
                  <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                    <p className="text-sm text-platinum-200">Power Index: <span className="text-rose-400 font-bold">0.4473 vs UAE 1.0188</span> (lower = stronger)</p>
                  </div>
                  <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                    <p className="text-sm text-platinum-200">Defense Budget: <span className="text-rose-400 font-bold">$64B vs UAE $23.5B</span> (2.7x larger)</p>
                  </div>
                  <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                    <p className="text-sm text-platinum-200">Active Troops: <span className="text-rose-400 font-bold">247K vs UAE 65K</span> (3.8x larger)</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* SECTORS TAB */}
          {/* ============================================================ */}

          <TabsContent value="sectors" className="space-y-6">
            {/* Aviation Sector */}
            <GlassPanel title="Aviation Sector: Emirates vs Qatar Airways vs Etihad" description="2025-2026 airline comparison">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-platinum-700">
                      <th className="text-left p-2 text-platinum-400 font-rajdhani">Metric</th>
                      <th className="text-center p-2 text-emerald-400 font-rajdhani">Emirates</th>
                      <th className="text-center p-2 text-gold-700 font-rajdhani">Qatar Airways</th>
                      <th className="text-center p-2 text-platinum-400 font-rajdhani">Etihad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aviationSector.map((item, i) => (
                      <tr key={i} className="border-b border-platinum-800">
                        <td className="p-2 text-platinum-300">{item.metric}</td>
                        <td className="text-center p-2 text-platinum-300">{item.emirates || '-'}</td>
                        <td className="text-center p-2">
                          <span className={item.qatarAirways?.includes('#1') ? 'text-gold-700 font-bold' : 'text-platinum-300'}>
                            {item.qatarAirways || '-'}
                          </span>
                        </td>
                        <td className="text-center p-2 text-platinum-400">{item.etihad || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassPanel>

            {/* Wealth Management */}
            <GlassPanel title="Wealth Management: UAE vs Switzerland vs Monaco vs Singapore" description="Tax and regulatory comparison">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-platinum-700">
                      <th className="text-left p-2 text-platinum-400 font-rajdhani">Feature</th>
                      <th className="text-center p-2 text-gold-700 font-rajdhani">UAE</th>
                      <th className="text-center p-2 text-platinum-400 font-rajdhani">Switzerland</th>
                      <th className="text-center p-2 text-platinum-400 font-rajdhani">Monaco</th>
                      <th className="text-center p-2 text-platinum-400 font-rajdhani">Singapore</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wealthManagementSector.map((item, i) => (
                      <tr key={i} className="border-b border-platinum-800">
                        <td className="p-2 text-platinum-300">{item.feature}</td>
                        <td className="text-center p-2">
                          <span className={item.uae === '0%' || item.uae === 'None' || item.uae === '100%' ? 'text-emerald-400 font-bold' : 'text-platinum-300'}>
                            {item.uae}
                          </span>
                        </td>
                        <td className="text-center p-2 text-platinum-400">{item.switzerland}</td>
                        <td className="text-center p-2 text-platinum-400">{item.monaco}</td>
                        <td className="text-center p-2 text-platinum-400">{item.singapore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassPanel>

            {/* Tourism Sector */}
            <GlassPanel title="Tourism Sector Performance (2025-2026)" description="UAE tourism records and milestones">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 bg-gold-700/10 rounded-lg border border-gold-700/30 text-center">
                  <p className="text-3xl font-bold text-gold-700">19.59M</p>
                  <p className="text-xs text-platinum-400 mt-1">Dubai Visitors (2025)</p>
                  <p className="text-xs text-emerald-400">+5% vs 2024</p>
                </div>
                <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
                  <p className="text-3xl font-bold text-emerald-400">26.6M</p>
                  <p className="text-xs text-platinum-400 mt-1">Abu Dhabi Visitors</p>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700 text-center">
                  <p className="text-3xl font-bold text-gold-700">$1T</p>
                  <p className="text-xs text-platinum-400 mt-1">Non-oil Trade</p>
                  <p className="text-xs text-emerald-400">First time milestone</p>
                </div>
                <div className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700 text-center">
                  <p className="text-3xl font-bold text-platinum-300">77%+</p>
                  <p className="text-xs text-platinum-400 mt-1">Non-oil GDP</p>
                  <p className="text-xs text-platinum-500">Q1 2025</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {tourismSector.slice(0, 6).map((item, i) => (
                  <div key={i} className="p-3 bg-platinum-800/50 rounded-lg border border-platinum-700">
                    <p className="text-sm text-platinum-200">{item.metric}</p>
                    <p className="text-gold-700 font-semibold mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* ADVANTAGES TAB */}
          {/* ============================================================ */}

          <TabsContent value="advantages" className="space-y-6">
            {/* Competitive Advantages */}
            <GlassPanel title="UAE Competitive Advantages" description="Key areas where UAE leads competitors">
              <div className="space-y-3">
                {uaeCompetitiveAdvantages.map((adv, i) => (
                  <div key={adv.advantageDomain} className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-platinum-200 font-rajdhani">{adv.advantageDomain}</p>
                        <p className="text-xs text-emerald-400 mt-1">{adv.uaeStrength}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-platinum-400">vs {adv.closestRival}</p>
                        <p className="text-xs text-gold-700 font-semibold">{adv.uaeAdvantageMargin}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Competitive Vulnerabilities */}
            <GlassPanel title="UAE Competitive Vulnerabilities" description="Areas where UAE faces challenges vs competitors">
              <div className="space-y-3">
                {uaeCompetitiveVulnerabilities.map((vuln, i) => (
                  <div key={vuln.vulnerability} className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-platinum-200 font-rajdhani">{vuln.vulnerability}</p>
                        <p className="text-xs text-rose-400 mt-1">UAE: {vuln.uaeMetric}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-platinum-400">vs {vuln.dominantRival || 'Others'}</p>
                        <p className="text-xs text-rose-400 font-semibold">{vuln.rivalAdvantage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Intelligence Cards */}
            <GlassPanel title="Competitor Intelligence Cards" description="Strengths, weaknesses, and UAE edge">
              <div className="grid gap-4 lg:grid-cols-2">
                {Object.entries(competitorIntelligenceCards).slice(0, 4).map(([key, card]) => (
                  <div key={key} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                    <h4 className="text-gold-700 font-rajdhani font-semibold mb-3 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-emerald-400 font-rajdhani">Strengths</p>
                        <p className="text-xs text-platinum-300 mt-1">{card.strengths}</p>
                      </div>
                      <div>
                        <p className="text-xs text-rose-400 font-rajdhani">Weaknesses</p>
                        <p className="text-xs text-platinum-300 mt-1">{card.weaknesses}</p>
                      </div>
                      {card.uaeCompetitiveEdge && (
                        <div>
                          <p className="text-xs text-gold-700 font-rajdhani">UAE Edge</p>
                          <p className="text-xs text-platinum-300 mt-1">{card.uaeCompetitiveEdge}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* SENTIMENT TAB */}
          {/* ============================================================ */}

          <TabsContent value="sentiment" className="space-y-6">
            {/* Sentiment Analysis by Dimension */}
            <GlassPanel title="Sentiment Analysis by Dimension" description="UAE perception across all competitive dimensions">
              <div className="grid gap-3 lg:grid-cols-2">
                {sentimentAnalysisByDimension.map((item, i) => (
                  <div
                    key={item.dimension}
                    className={`p-4 rounded-lg border ${getSentimentBg(item.uaeSentiment)}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2">
                        {getSentimentIcon(item.uaeSentiment)}
                        <div>
                          <p className="text-sm font-semibold text-platinum-200 font-rajdhani">{item.dimension}</p>
                          <p className="text-xs text-platinum-400 mt-1">{item.note}</p>
                        </div>
                      </div>
                      <Badge className={`${getSentimentBg(item.uaeSentiment)} ${getSentimentColor(item.uaeSentiment)} text-xs`}>
                        {item.uaeSentiment}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Data Provenance */}
            <GlassPanel title="Data Provenance & Quality" description="Source verification and temporal coverage">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dataProvenance.map((item, i) => (
                  <div key={i} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                    <p className="text-sm text-platinum-200 font-rajdhani">{item.dataCategory}</p>
                    <p className="text-xs text-platinum-500 mt-2">{item.oldestSource}</p>
                    <p className="text-xs text-platinum-500">to {item.newestSource}</p>
                    <p className="text-xs text-gold-700 mt-2">Spread: {item.temporalSpread}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Source Tier Distribution */}
            <GlassPanel title="Source Tier Distribution" description="Credibility assessment of sources used">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {sourceTierDistribution.map((tier, i) => (
                  <div key={i} className={`p-4 rounded-lg border ${
                    tier.tier === 'TIER 0' ? 'bg-emerald-500/10 border-emerald-500/20' :
                    tier.tier === 'TIER 1' ? 'bg-gold-700/10 border-gold-700/30' :
                    'bg-platinum-800/50 border-platinum-700'
                  }`}>
                    <p className={`text-lg font-bold ${
                      tier.tier === 'TIER 0' ? 'text-emerald-400' :
                      tier.tier === 'TIER 1' ? 'text-gold-700' :
                      'text-platinum-400'
                    }`}>{tier.tier}</p>
                    <p className="text-xs text-platinum-500 mt-1">{tier.definition}</p>
                    <p className="text-xs text-platinum-400 mt-2">Count: {tier.count}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* SOURCES TAB */}
          {/* ============================================================ */}

          <TabsContent value="sources" className="space-y-6">
            {/* URL Source Registry */}
            <GlassPanel title="URL Source Registry" description={`${urlSourceRegistry.length}+ verified sources cross-referenced`}>
              <ScrollArea className="h-[500px]">
                <div className="space-y-2">
                  {urlSourceRegistry.slice(0, 50).map((source, i) => (
                    <div key={i} className="p-3 bg-platinum-800/50 rounded-lg border border-platinum-700 flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-sm text-platinum-200 font-rajdhani">{source.source}</p>
                        <p className="text-xs text-platinum-500 mt-1 truncate">{source.url}</p>
                      </div>
                      <Badge className={
                        source.tier === 'TIER 0' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                        source.tier === 'TIER 1' ? 'bg-gold-700/20 text-gold-700 border-gold-700/30' :
                        source.tier === 'Academic' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
                        'bg-platinum-700/30 text-platinum-400 border-platinum-600'
                      }>
                        {source.tier}
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Rankings Over Time */}
            <GlassPanel title="UAE Rankings Over Time" description="Historical progression across key indices">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-platinum-700">
                      <th className="text-left p-2 text-platinum-400 font-rajdhani">Index</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">2022</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">2023</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">2024</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">2025</th>
                      <th className="text-right p-2 text-platinum-400 font-rajdhani">2026</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uaeRankingsOverTime.map((row, i) => (
                      <tr key={row.index} className="border-b border-platinum-800">
                        <td className="p-2 text-platinum-300 font-rajdhani">{row.index}</td>
                        <td className="text-right p-2 text-platinum-500">{row[2022] || '-'}</td>
                        <td className="text-right p-2 text-platinum-500">{row[2023] || '-'}</td>
                        <td className="text-right p-2 text-platinum-500">{row[2024] || '-'}</td>
                        <td className="text-right p-2">
                          <span className={row[2025] ? 'text-gold-700 font-semibold' : 'text-platinum-500'}>
                            {row[2025] || '-'}
                          </span>
                        </td>
                        <td className="text-right p-2">
                          <span className={row[2026] ? 'text-emerald-400 font-semibold' : 'text-platinum-500'}>
                            {row[2026] || '-'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassPanel>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}
