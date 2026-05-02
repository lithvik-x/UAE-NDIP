// @ts-nocheck
'use client'

/**
 * Global Standing Page — UAE Competitive Benchmarking
 * PERCEPTION-X2 Module
 *
 * Premium dashboard showcasing UAE competitive positioning vs. regional and global peers
 * across economic, military, social, infrastructure, innovation, and soft-power dimensions.
 *
 * @author UAE Dossier Intelligence Platform
 * @version 1.0.0
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
  // Lucide icons
  Globe,
  Trophy,
  TrendingUp,
  TrendingDown,
  Minus,
  Shield,
  Building2,
  Plane,
  Users,
  Anchor,
  Landmark,
  Cpu,
  Heart,
  Sunrise,
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
  Banknote,
  Briefcase,
  GraduationCap,
  Stethoscope,
} from 'lucide-react'
import { useGlobalStandingData } from '@/lib/data-loader/hooks'

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
  if (sentiment.includes('Strongly Positive') || sentiment.includes('Positive'))
    return <CheckCircle2 className="h-4 w-4 text-emerald-400" />
  if (sentiment.includes('Negative'))
    return <XCircle className="h-4 w-4 text-rose-400" />
  return <MinusCircle className="h-4 w-4 text-amber-400" />
}

function getSentimentColor(sentiment: string) {
  if (sentiment.includes('Strongly Positive') || sentiment.includes('Positive'))
    return 'text-emerald-400'
  if (sentiment.includes('Negative')) return 'text-rose-400'
  return 'text-amber-400'
}

function getSentimentBg(sentiment: string) {
  if (sentiment.includes('Strongly Positive') || sentiment.includes('Positive'))
    return 'bg-emerald-500/20 border-emerald-500/30'
  if (sentiment.includes('Negative')) return 'bg-rose-500/20 border-rose-500/30'
  return 'bg-amber-500/20 border-amber-500/30'
}

function getRankBadgeColor(rank: string) {
  const num = parseInt(rank)
  if (isNaN(num)) return 'bg-gold-700/20 text-gold-700 border-gold-700/30'
  if (num <= 5) return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
  if (num <= 10) return 'bg-gold-700/20 text-gold-700 border-gold-700/30'
  if (num <= 20) return 'bg-amber-500/20 text-amber-400 border-amber-500/30'
  return 'bg-rose-500/20 text-rose-400 border-rose-500/30'
}

function parseRank(rank: string): number {
  const match = rank.match(/#?(\d+)/)
  return match ? parseInt(match[1]) : 999
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function GlobalStandingPage() {
  const { data, loading, error } = useGlobalStandingData()
  const [activeTab, setActiveTab] = useState('overview')

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gold-700 font-rajdhani text-xl">
          Loading Global Standing data...
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
    globalStandingSummary,
    uaeGlobalRankings,
    uaeIndicatorPerformance,
    uaeVsSaudiEconomic,
    uaeVsSaudiDemographics,
    uaeVsSaudiMilitary,
    uaeVsQatar,
    aviationRivalry,
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
    dubaiVsLondon,
    dubaiVsNewYork,
    aviationSector,
    wealthManagementSector,
    gccEconomicOverview,
    tourismSector,
    competitorIntelligenceCards,
    uaeRankingsOverTime,
    middleEastMilitaryRankings,
    uaeCompetitiveAdvantages,
    uaeCompetitiveVulnerabilities,
    sentimentAnalysisByDimension,
    sourceTierDistribution,
  } = data

  // -------------------------------------------------------------------------
  // CHART DATA TRANSFORMATIONS
  // -------------------------------------------------------------------------

  // UAE Rankings over time for AreaChart
  const rankingsTimeData = uaeRankingsOverTime
    .filter((r) => r[2022] || r[2023] || r[2024] || r[2025] || r[2026])
    .map((r) => ({
      index: r.index.replace('IMD World ', '').replace('GEM ', '').replace('GFCI ', 'GFCI ').replace('World ', ''),
      '2022': r[2022] ? parseRank(r[2022] as string) : null,
      '2023': r[2023] ? parseRank(r[2023] as string) : null,
      '2024': r[2024] ? parseRank(r[2024] as string) : null,
      '2025': r[2025] ? parseRank(r[2025] as string) : null,
      '2026': r[2026] ? parseRank(r[2026] as string) : null,
    }))

  // GCC GDP comparison for BarChart
  const gccGdpData = gccEconomicOverview.map((row) => ({
    country: row.metric === 'GDP ($B)' ? (row as unknown as { country: string; uae: string }).country || 'UAE' : (row as unknown as Record<string, string>)[Object.keys(row).find(k => k !== 'metric') || ''] || '',
    uae: row.uae,
    saudi: row.saudiArabia,
    qatar: row.qatar,
    oman: row.oman,
    bahrain: row.bahrain,
    kuwait: row.kuwait,
  })).filter(r => r.country)

  const gccGdpChartData = gccEconomicOverview.map((row) => {
    const label = row.metric.replace(' ($B)', '').replace(' ($)', '').replace(' (M)', '')
    return {
      country: label,
      UAE: row.uae ? parseFloat((row.uae as string).replace(/[^0-9.]/g, '')) : 0,
      Saudi: row.saudiArabia ? parseFloat((row.saudiArabia as string).replace(/[^0-9.]/g, '')) : 0,
      Qatar: row.qatar ? parseFloat((row.qatar as string).replace(/[^0-9.]/g, '')) : 0,
      Oman: row.oman ? parseFloat((row.oman as string).replace(/[^0-9.]/g, '')) : 0,
      Bahrain: row.bahrain ? parseFloat((row.bahrain as string).replace(/[^0-9.]/g, '')) : 0,
      Kuwait: row.kuwait ? parseFloat((row.kuwait as string).replace(/[^0-9.]/g, '')) : 0,
    }
  })

  // Middle East Military RadarChart data
  const militaryRadarData = middleEastMilitaryRankings.map((r) => ({
    country: r.country,
    powerIndex: parseFloat(r.powerIndex) || 0,
    rank: 145 - (r.globalRank || 54),
  }))

  // GCC Debt comparison PieChart
  const gccDebtData = gccEconomicOverview
    .filter((r) => r.metric === 'Debt/GDP')
    .flatMap((r) => [
      { name: 'UAE', value: r.uae === '~2% (lowest)' ? 2 : parseFloat((r.uae as string)?.replace(/[^0-9.]/g, '') || '0') || 2 },
      { name: 'Saudi', value: parseFloat((r.saudiArabia as string)?.replace(/[^0-9.]/g, '') || '0') || 30 },
      { name: 'Qatar', value: parseFloat((r.qatar as string)?.replace(/[^0-9.]/g, '') || '0') || 41 },
      { name: 'Oman', value: parseFloat((r.oman as string)?.replace(/[^0-9.]/g, '') || '0') || 36 },
      { name: 'Bahrain', value: parseFloat((r.bahrain as string)?.replace(/[^0-9.]/g, '') || '0') || 133 },
    ])

  // UAE vs Competitor - Radar comparison (normalized scores)
  const radarData = [
    { subject: 'Competitiveness', uae: 95, saudi: 72, qatar: 74 },
    { subject: 'Entrepreneurship', uae: 100, saudi: 55, qatar: 60 },
    { subject: 'Soft Power', uae: 82, saudi: 65, qatar: 70 },
    { subject: 'Financial Hub', uae: 88, saudi: 55, qatar: 65 },
    { subject: 'Tax Efficiency', uae: 100, saudi: 45, qatar: 50 },
    { subject: 'Expat Friendly', uae: 98, saudi: 45, qatar: 55 },
    { subject: 'Tourism', uae: 95, saudi: 60, qatar: 70 },
    { subject: 'Diversification', uae: 90, saudi: 55, qatar: 50 },
  ]

  // Tourism metrics PieChart
  const tourismPieData = tourismSector.slice(0, 5).map((t, i) => ({
    name: t.metric && t.metric.length > 20 ? t.metric.substring(0, 20) + '...' : (t.metric || 'N/A'),
    value: parseFloat((t.value as string).replace(/[^0-9.]/g, '')) || Math.random() * 100,
  }))

  // -------------------------------------------------------------------------
  // KEY METRICS
  // -------------------------------------------------------------------------

  const topMetrics = [
    {
      title: 'IMD Competitiveness',
      value: '#5',
      subtitle: 'Globally',
      icon: <Trophy className="h-6 w-6" />,
      gradient: 'gold',
      trend: 'up',
      detail: 'Up 2 spots from 2024',
    },
    {
      title: 'GEM Entrepreneurship',
      value: '#1',
      subtitle: '5th Consecutive Year',
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: 'emerald',
      trend: 'up',
      detail: 'Global leader',
    },
    {
      title: 'GFCI Dubai',
      value: '#7',
      subtitle: 'Financial Centre',
      icon: <Landmark className="h-6 w-6" />,
      gradient: 'denim',
      trend: 'up',
      detail: 'Up 4 places',
    },
    {
      title: 'Soft Power',
      value: '#10',
      subtitle: 'Brand Finance 2026',
      icon: <Globe className="h-6 w-6" />,
      gradient: 'indigo',
      trend: 'stable',
      detail: '4th consecutive year',
    },
    {
      title: 'Digital Competitiveness',
      value: '#9',
      subtitle: 'IMD 2025',
      icon: <Cpu className="h-6 w-6" />,
      gradient: 'teal',
      trend: 'up',
      detail: '1st in Arab world',
    },
    {
      title: 'World Happiness',
      value: '#21',
      subtitle: 'Globally, #1 Arab',
      icon: <Heart className="h-6 w-6" />,
      gradient: 'fuchsia',
      trend: 'stable',
      detail: 'UN SDSN 2026',
    },
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
            PERCEPTION-X2 | GLOBAL STANDING
          </Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">
            UAE Global Standing
          </h1>
          <p className="mt-2 text-sm text-platinum-400 max-w-2xl">
            {globalStandingSummary.headlineFinding}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="border-gold-700/40 text-gold-700 text-xs">
            <Globe className="h-3 w-3 mr-1" />
            {globalStandingSummary.dataPoints} Data Points
          </Badge>
          <Badge variant="outline" className="border-emerald-500/40 text-emerald-400 text-xs">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            {globalStandingSummary.sourcesVerified} Sources
          </Badge>
          <Badge variant="outline" className="border-platinum-500/40 text-platinum-400 text-xs">
            <Activity className="h-3 w-3 mr-1" />
            Updated {globalStandingSummary.lastUpdated}
          </Badge>
        </div>
      </motion.div>

      {/* ================================================================== */}
      {/* KEY METRICS */}
      {/* ================================================================== */}

      <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {topMetrics.map((metric, i) => (
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
              gradient={metric.gradient as 'gold' | 'emerald' | 'denim' | 'indigo' | 'teal' | 'fuchsia'}
              trend={metric.trend as 'up' | 'down' | 'neutral'}
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
              <Trophy className="h-3 w-3 mr-1" /> Overview
            </TabsTrigger>
            <TabsTrigger value="rankings" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Globe className="h-3 w-3 mr-1" /> Rankings
            </TabsTrigger>
            <TabsTrigger value="competitors" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Users className="h-3 w-3 mr-1" /> Competitors
            </TabsTrigger>
            <TabsTrigger value="sectors" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Building2 className="h-3 w-3 mr-1" /> Sectors
            </TabsTrigger>
            <TabsTrigger value="military" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Shield className="h-3 w-3 mr-1" /> Military
            </TabsTrigger>
            <TabsTrigger value="sentiment" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Heart className="h-3 w-3 mr-1" /> Sentiment
            </TabsTrigger>
          </TabsList>

          {/* ============================================================ */}
          {/* OVERVIEW TAB */}
          {/* ============================================================ */}

          <TabsContent value="overview" className="space-y-6">
            <GlassPanel
              title="UAE Global Rankings Index"
              description="Key international index rankings as of 2025-2026"
            >
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {uaeGlobalRankings.map((rank, i) => (
                  <motion.div
                    key={rank.index}
                    variants={fadeInUp}
                    className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3 hover:border-gold-700/40 transition-colors"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-platinum-400 truncate font-rajdhani">{rank.index}</p>
                        <p className="mt-1 text-xl font-extrabold font-rajdhani text-gold-700">{rank.ranking}</p>
                        <p className="text-xs text-platinum-500 mt-0.5">{rank.source} · {rank.year}</p>
                      </div>
                      <Badge className={`shrink-0 text-xs border ${getRankBadgeColor(rank.ranking)}`}>
                        {rank.trend}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Rankings Over Time */}
              <GlassPanel title="Rankings Trajectory" description="UAE position evolution across key indices">
                <BarChart
                  data={rankingsTimeData}
                  xAxisKey="index"
                  bars={[
                    { dataKey: '2023', name: '2023', color: CHART_COLORS.navy },
                    { dataKey: '2025', name: '2025', color: CHART_COLORS.gold },
                    { dataKey: '2026', name: '2026', color: CHART_COLORS.emerald },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </GlassPanel>

              {/* GCC Debt Comparison */}
              <GlassPanel title="GCC Debt-to-GDP Comparison" description="Sovereign debt as percentage of GDP">
                <PieChart
                  data={[
                    { name: 'UAE', value: 2, color: CHART_COLORS.emerald },
                    { name: 'Saudi', value: 30, color: CHART_COLORS.navy },
                    { name: 'Qatar', value: 41, color: CHART_COLORS.gold },
                    { name: 'Oman', value: 36, color: CHART_COLORS.orange },
                    { name: 'Bahrain', value: 133, color: CHART_COLORS.rose },
                  ]}
                  height={280}
                  showLegend={true}
                />
              </GlassPanel>
            </div>

            {/* UAE Competitive Advantages */}
            <GlassPanel title="UAE Competitive Advantages" description="Where the UAE leads globally">
              <div className="grid gap-3 sm:grid-cols-2">
                {uaeCompetitiveAdvantages.map((adv, i) => (
                  <div
                    key={adv.advantageDomain}
                    className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3"
                  >
                    <div className="flex items-start gap-2">
                      <ArrowUpRight className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-emerald-400 font-rajdhani font-semibold">{adv.advantageDomain}</p>
                        <p className="text-sm font-bold text-platinum-200 mt-0.5">{adv.uaeStrength}</p>
                        <p className="text-xs text-platinum-500 mt-0.5">vs {adv.closestRival}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* UAE Vulnerabilities */}
            <GlassPanel title="UAE Competitive Vulnerabilities" description="Areas requiring strategic attention">
              <div className="grid gap-3 sm:grid-cols-2">
                {uaeCompetitiveVulnerabilities.map((vuln, i) => (
                  <div
                    key={vuln.vulnerability}
                    className="rounded-lg border border-rose-500/20 bg-rose-500/5 p-3"
                  >
                    <div className="flex items-start gap-2">
                      <ArrowDownRight className="h-4 w-4 text-rose-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-rose-400 font-rajdhani font-semibold">{vuln.vulnerability}</p>
                        <p className="text-sm font-bold text-platinum-200 mt-0.5">{vuln.uaeMetric}</p>
                        <p className="text-xs text-platinum-500 mt-0.5">
                          {vuln.dominantRival ? `vs ${vuln.dominantRival}: ${vuln.rivalAdvantage}` : vuln.rivalAdvantage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* RANKINGS TAB */}
          {/* ============================================================ */}

          <TabsContent value="rankings" className="space-y-6">
            <GlassPanel title="UAE Indicator Performance" description="IMD 2025 detailed breakdown">
              <BarChart
                data={uaeIndicatorPerformance.map((ind) => ({
                  indicator: ind.indicator.length > 25 ? ind.indicator.substring(0, 25) + '...' : ind.indicator,
                  rank: parseRank(ind.uaeRank),
                  full: ind.indicator,
                }))}
                xAxisKey="indicator"
                bars={[{ dataKey: 'rank', name: 'UAE Rank', color: CHART_COLORS.gold }]}
                height={300}
                showGrid={true}
              />
              <ScrollArea className="mt-4 h-[200px]">
                <div className="space-y-2">
                  {uaeIndicatorPerformance.map((ind, i) => (
                    <div key={ind.indicator} className="flex items-center justify-between rounded bg-platinum-800/30 px-3 py-2">
                      <span className="text-sm text-platinum-300 font-rajdhani">{ind.indicator}</span>
                      <div className="flex items-center gap-2">
                        <Badge className={`border text-xs ${getRankBadgeColor(ind.uaeRank)}`}>{ind.uaeRank}</Badge>
                        {ind.notes && <span className="text-xs text-platinum-500 hidden sm:inline">{ind.notes}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Radar comparison */}
              <GlassPanel title="UAE vs GCC — Multi-Dimensional Comparison" description="Normalized scores (100=best)">
                <RadarChart
                  data={radarData}
                  metrics={[
                    { dataKey: 'uae', name: 'UAE', color: CHART_COLORS.gold },
                    { dataKey: 'saudi', name: 'Saudi Arabia', color: CHART_COLORS.navy },
                    { dataKey: 'qatar', name: 'Qatar', color: CHART_COLORS.emerald },
                  ]}
                  height={300}
                />
              </GlassPanel>

              {/* Soft Power & Happiness */}
              <GlassPanel title="Quality of Life Metrics" description="UAE vs Global Peers">
                <BarChart
                  data={[
                    { metric: 'Happiness (UN)', uae: 21, switzerland: 1, singapore: 20 },
                    { metric: 'HDI', uae: 0.937, switzerland: 0.962, singapore: 0.939 },
                    { metric: 'Corruption Index', uae: 68, switzerland: 84, singapore: 83 },
                    { metric: 'Prosperity Index', uae: 13, switzerland: 5, singapore: 1 },
                  ]}
                  xAxisKey="metric"
                  bars={[
                    { dataKey: 'uae', name: 'UAE', color: CHART_COLORS.gold },
                    { dataKey: 'switzerland', name: 'Switzerland', color: CHART_COLORS.navy },
                    { dataKey: 'singapore', name: 'Singapore', color: CHART_COLORS.emerald },
                  ]}
                  height={300}
                  showGrid={true}
                />
              </GlassPanel>
            </div>
          </TabsContent>

          {/* ============================================================ */}
          {/* COMPETITORS TAB */}
          {/* ============================================================ */}

          <TabsContent value="competitors" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* UAE vs Saudi */}
              <GlassPanel title="UAE vs Saudi Arabia — Economic" description="Key economic indicators comparison">
                <ScrollArea className="h-[320px]">
                  <div className="space-y-2">
                    {uaeVsSaudiEconomic.slice(0, 10).map((row, i) => (
                      <div key={row.metric} className="grid grid-cols-3 gap-2 rounded bg-platinum-800/20 px-3 py-2 text-xs">
                        <span className="text-platinum-400 font-rajdhani truncate">{row.metric}</span>
                        <span className="text-emerald-400 font-rajdhani font-bold text-right truncate">{row.uae}</span>
                        <span className="text-rose-400 font-rajdhani text-right truncate">{row.saudi}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="mt-3 flex items-center justify-center gap-4 text-xs">
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400" /> UAE</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-rose-400" /> Saudi Arabia</span>
                </div>
              </GlassPanel>

              {/* UAE vs Qatar */}
              <GlassPanel title="UAE vs Qatar — Key Metrics" description="Comparison across GDP, trade, demographics">
                <ScrollArea className="h-[320px]">
                  <div className="space-y-2">
                    {uaeVsQatar.slice(0, 10).map((row, i) => (
                      <div key={row.metric} className="grid grid-cols-3 gap-2 rounded bg-platinum-800/20 px-3 py-2 text-xs">
                        <span className="text-platinum-400 font-rajdhani truncate">{row.metric}</span>
                        <span className="text-emerald-400 font-rajdhani font-bold text-right truncate">{row.uae}</span>
                        <span className="text-platinum-300 font-rajdhani text-right truncate">{row.qatar}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="mt-3 flex items-center justify-center gap-4 text-xs">
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400" /> UAE</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-platinum-400" /> Qatar</span>
                </div>
              </GlassPanel>
            </div>

            {/* UAE vs Singapore */}
            <GlassPanel title="UAE vs Singapore — Cost & Lifestyle" description="Comparing Gulf hub to Asian hub">
              <ScrollArea className="h-[250px]">
                <div className="space-y-2">
                  {uaeVsSingapore.map((row, i) => (
                    <div key={row.metric} className="grid grid-cols-3 gap-2 rounded bg-platinum-800/20 px-3 py-2 text-xs">
                      <span className="text-platinum-400 font-rajdhani truncate">{row.metric}</span>
                      <span className="text-gold-700 font-rajdhani font-bold text-right truncate">{row.uae}</span>
                      <span className="text-platinum-300 font-rajdhani text-right truncate">{row.singapore}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* UAE vs Switzerland */}
            <GlassPanel title="UAE vs Switzerland — Tax & Finance" description="Wealth management hub comparison">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {uaeVsSwitzerland.map((row, i) => (
                  <div key={row.metric} className="rounded-lg border border-platinum-700/30 bg-platinum-800/20 p-3">
                    <p className="text-xs text-platinum-400 font-rajdhani">{row.metric}</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gold-700 font-rajdhani">UAE</span>
                        <span className="text-sm font-bold text-gold-700">{row.uae}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-platinum-400 font-rajdhani">Switzerland</span>
                        <span className="text-sm font-bold text-platinum-300">{row.switzerland}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Competitor Intelligence Cards */}
            <GlassPanel title="Competitor Intelligence Cards" description="SWOT-style profiles of key rivals">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(competitorIntelligenceCards).map(([key, card]) => (
                  <Card key={key} className="glass-card border-platinum-700/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-rajdhani font-bold text-gold-700 capitalize">
                        {key === 'saudiArabia' ? 'Saudi Arabia' : key.charAt(0).toUpperCase() + key.slice(1)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-xs text-emerald-400 font-rajdhani font-semibold mb-1">Strengths</p>
                        <p className="text-xs text-platinum-400 leading-relaxed">{card.strengths.substring(0, 100)}...</p>
                      </div>
                      <div>
                        <p className="text-xs text-rose-400 font-rajdhani font-semibold mb-1">Weaknesses</p>
                        <p className="text-xs text-platinum-400 leading-relaxed">{card.weaknesses.substring(0, 80)}...</p>
                      </div>
                      <div>
                        <p className="text-xs text-gold-700 font-rajdhani font-semibold mb-1">UAE Edge</p>
                        <p className="text-xs text-platinum-400 leading-relaxed">{card.uaeCompetitiveEdge.substring(0, 80)}...</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* SECTORS TAB */}
          {/* ============================================================ */}

          <TabsContent value="sectors" className="space-y-6">
            {/* Dubai vs London */}
            <GlassPanel title="Dubai vs London — Financial Hub" description="GFCI ranking comparison and DIFC growth">
              <div className="grid gap-4 lg:grid-cols-2">
                <BarChart
                  data={[
                    { year: '2023', dubai: 22, london: 2 },
                    { year: '2025', dubai: 11, london: 2 },
                    { year: '2026', dubai: 7, london: 2 },
                  ]}
                  xAxisKey="year"
                  bars={[
                    { dataKey: 'dubai', name: 'Dubai', color: CHART_COLORS.gold },
                    { dataKey: 'london', name: 'London', color: CHART_COLORS.navy },
                  ]}
                  height={250}
                  showGrid={true}
                />
                <ScrollArea className="h-[250px]">
                  <div className="space-y-2">
                    {dubaiVsLondon.map((row, i) => (
                      <div key={row.metric} className="grid grid-cols-3 gap-2 rounded bg-platinum-800/20 px-3 py-2 text-xs">
                        <span className="text-platinum-400 font-rajdhani truncate">{row.metric}</span>
                        <span className="text-gold-700 font-rajdhani font-bold text-right truncate">{row.dubai}</span>
                        <span className="text-platinum-300 font-rajdhani text-right truncate">{row.london}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </GlassPanel>

            {/* Dubai vs New York */}
            <GlassPanel title="Dubai vs New York — Cost of Living" description="Expat lifestyle comparison">
              <BarChart
                data={[
                  { category: 'Rent (1BR)', dubai: 2750, newYork: 4250 },
                  { category: 'Utilities', dubai: 200, newYork: 185 },
                  { category: 'Dining', dubai: 22, newYork: 28 },
                ]}
                xAxisKey="category"
                bars={[
                  { dataKey: 'dubai', name: 'Dubai ($)', color: CHART_COLORS.gold },
                  { dataKey: 'newYork', name: 'New York ($)', color: CHART_COLORS.navy },
                ]}
                height={250}
                showGrid={true}
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Income Tax', dubai: '0%', ny: 'Federal + State + City', icon: <Banknote className="h-4 w-4 text-gold-700" /> },
                  { label: 'Property Tax', dubai: 'None', ny: 'Varies by borough', icon: <Building2 className="h-4 w-4 text-emerald-500" /> },
                  { label: 'Rental Yields', dubai: '5–8%', ny: 'Lower net yields', icon: <TrendingUp className="h-4 w-4 text-platinum-500" /> },
                ].map((item, i) => (
                  <div key={item.label} className="rounded-lg border border-platinum-700/30 bg-platinum-800/20 p-3 text-center">
                    {item.icon}
                    <p className="mt-1 text-xs text-platinum-400 font-rajdhani">{item.label}</p>
                    <p className="mt-1 text-sm font-bold text-gold-700 font-rajdhani">{item.dubai}</p>
                    <p className="text-xs text-platinum-500">{item.ny}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Aviation Sector */}
            <GlassPanel title="Aviation — Emirates vs Qatar Airways vs Etihad" description="SKYTRAX 2025 rankings and awards">
              <BarChart
                data={aviationSector.map((a) => ({
                  metric: (a.metric as string).length > 20 ? (a.metric as string).substring(0, 20) : (a.metric as string),
                  Emirates: a.emirates ? parseRank(a.emirates as string) : null,
                  Qatar: a.qatarAirways ? parseRank(a.qatarAirways as string) : null,
                  Etihad: a.etihad ? parseRank(a.etihad as string) : null,
                }))}
                xAxisKey="metric"
                bars={[
                  { dataKey: 'Emirates', name: 'Emirates', color: CHART_COLORS.gold },
                  { dataKey: 'Qatar', name: 'Qatar Airways', color: CHART_COLORS.emerald },
                  { dataKey: 'Etihad', name: 'Etihad', color: CHART_COLORS.denim },
                ]}
                height={280}
                showGrid={true}
              />
            </GlassPanel>

            {/* Wealth Management */}
            <GlassPanel title="Wealth Management Hub Comparison" description="Tax efficiency and regulatory comparison">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-platinum-700/50">
                      <th className="text-left py-2 px-3 text-platinum-400 font-rajdhani">Feature</th>
                      <th className="text-center py-2 px-3 text-gold-700 font-rajdhani">UAE</th>
                      <th className="text-center py-2 px-3 text-platinum-300 font-rajdhani">Switzerland</th>
                      <th className="text-center py-2 px-3 text-platinum-300 font-rajdhani">Monaco</th>
                      <th className="text-center py-2 px-3 text-platinum-300 font-rajdhani">Singapore</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wealthManagementSector.map((row, i) => (
                      <tr key={row.feature} className="border-b border-platinum-800/30">
                        <td className="py-2 px-3 text-platinum-400 font-rajdhani">{row.feature}</td>
                        <td className="py-2 px-3 text-center text-emerald-400 font-bold font-rajdhani">{row.uae}</td>
                        <td className="py-2 px-3 text-center text-platinum-300 font-rajdhani">{row.switzerland}</td>
                        <td className="py-2 px-3 text-center text-platinum-300 font-rajdhani">{row.monaco}</td>
                        <td className="py-2 px-3 text-center text-platinum-300 font-rajdhani">{row.singapore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassPanel>

            {/* Tourism Sector */}
            <GlassPanel title="Tourism & Trade — UAE 2025-2026" description="Record-breaking tourism and trade milestones">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {tourismSector.map((t, i) => (
                  <div key={t.metric} className="rounded-lg border border-gold-700/20 bg-gold-700/5 p-3">
                    <p className="text-xs text-gold-700 font-rajdhani font-semibold">{t.metric}</p>
                    <p className="mt-1 text-lg font-extrabold text-platinum-100 font-rajdhani">{(t.value as string).split('(')[0]}</p>
                    {((t.value as string).includes('(')) && (
                      <p className="text-xs text-platinum-400">{(t.value as string).match(/\(.*\)/)?.[0]}</p>
                    )}
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ============================================================ */}
          {/* MILITARY TAB */}
          {/* ============================================================ */}

          <TabsContent value="military" className="space-y-6">
            {/* ME Military Rankings */}
            <GlassPanel title="Middle East Military Rankings — GFP 2026" description="Power Index (lower = stronger)">
              <BarChart
                data={middleEastMilitaryRankings.map((r) => ({
                  country: r.country,
                  rank: r.meRank,
                  powerIndex: parseFloat(r.powerIndex) || 0,
                }))}
                xAxisKey="country"
                bars={[
                  { dataKey: 'rank', name: 'ME Rank', color: CHART_COLORS.gold },
                ]}
                height={300}
                showGrid={true}
              />
              <ScrollArea className="mt-4 h-[200px]">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-platinum-700/50">
                      <th className="text-left py-2 px-2 text-platinum-400 font-rajdhani">ME Rank</th>
                      <th className="text-left py-2 px-2 text-platinum-400 font-rajdhani">Country</th>
                      <th className="text-right py-2 px-2 text-platinum-400 font-rajdhani">Power Index</th>
                      <th className="text-right py-2 px-2 text-platinum-400 font-rajdhani">Global Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {middleEastMilitaryRankings.map((r, i) => (
                      <tr key={r.country} className={`border-b border-platinum-800/30 ${r.country === 'UAE' ? 'bg-gold-700/10' : ''}`}>
                        <td className={`py-2 px-2 font-rajdhani font-bold ${r.country === 'UAE' ? 'text-gold-700' : 'text-platinum-400'}`}>{r.meRank}</td>
                        <td className={`py-2 px-2 font-rajdhani font-semibold ${r.country === 'UAE' ? 'text-gold-700' : 'text-platinum-300'}`}>{r.country}</td>
                        <td className={`py-2 px-2 text-right font-rajdhani ${r.country === 'UAE' ? 'text-gold-700' : 'text-platinum-400'}`}>{r.powerIndex}</td>
                        <td className={`py-2 px-2 text-right font-rajdhani ${r.country === 'UAE' ? 'text-gold-700' : 'text-platinum-400'}`}>{r.globalRank || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollArea>
            </GlassPanel>

            {/* UAE vs Saudi Military */}
            <GlassPanel title="UAE vs Saudi Arabia — Military Comparison" description="GFP 2026 force composition">
              <BarChart
                data={uaeVsSaudiMilitary.map((m) => ({
                  metric: m.metric.length > 20 ? m.metric.substring(0, 20) + '...' : m.metric,
                  UAE: parseFloat((m.uae as string)?.replace(/[^0-9.]/g, '')) || 0,
                  Saudi: parseFloat((m.saudi as string)?.replace(/[^0-9.]/g, '')) || 0,
                }))}
                xAxisKey="metric"
                bars={[
                  { dataKey: 'UAE', name: 'UAE', color: CHART_COLORS.gold },
                  { dataKey: 'Saudi', name: 'Saudi Arabia', color: CHART_COLORS.navy },
                ]}
                height={320}
                showGrid={true}
              />
            </GlassPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* UAE vs Turkey */}
              <GlassPanel title="UAE vs Turkey — Regional Rivals" description="Military and geopolitical comparison">
                <ScrollArea className="h-[280px]">
                  <div className="space-y-2">
                    {uaeVsTurkey.map((row, i) => (
                      <div key={row.metric} className="grid grid-cols-2 gap-2 rounded bg-platinum-800/20 px-3 py-2 text-xs">
                        <span className="text-platinum-400 font-rajdhani">{row.metric}</span>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-gold-700 font-rajdhani font-bold text-right">{row.uae}</span>
                          <span className="text-platinum-400 font-rajdhani text-right">{row.turkey}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </GlassPanel>

              {/* UAE vs Egypt */}
              <GlassPanel title="UAE vs Egypt — Personnel Comparison" description="Military human resource disparity">
                <ScrollArea className="h-[280px]">
                  <div className="space-y-2">
                    {uaeVsEgypt.map((row, i) => (
                      <div key={row.metric} className="grid grid-cols-2 gap-2 rounded bg-platinum-800/20 px-3 py-2 text-xs">
                        <span className="text-platinum-400 font-rajdhani">{row.metric}</span>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-gold-700 font-rajdhani font-bold text-right">{row.uae}</span>
                          <span className="text-rose-400 font-rajdhani text-right">{row.egypt}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </GlassPanel>
            </div>
          </TabsContent>

          {/* ============================================================ */}
          {/* SENTIMENT TAB */}
          {/* ============================================================ */}

          <TabsContent value="sentiment" className="space-y-6">
            <GlassPanel title="UAE Sentiment by Dimension" description="Perception analysis across competitive dimensions">
              <div className="space-y-3">
                {sentimentAnalysisByDimension.map((dim, i) => (
                  <div
                    key={dim.dimension}
                    className={`rounded-lg border p-4 ${getSentimentBg(dim.uaeSentiment)}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {getSentimentIcon(dim.uaeSentiment)}
                        <div>
                          <p className="text-sm font-semibold text-platinum-200 font-rajdhani">{dim.dimension}</p>
                          <p className="text-xs text-platinum-400 mt-0.5">{dim.note}</p>
                        </div>
                      </div>
                      <Badge className={`shrink-0 border ${getSentimentBg(dim.uaeSentiment)} ${getSentimentColor(dim.uaeSentiment)} text-xs font-rajdhani`}>
                        {dim.uaeSentiment}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Source Tier Distribution */}
            <GlassPanel title="Source Credibility Distribution" description="Tier-based classification of 45+ sources">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sourceTierDistribution.map((tier, i) => (
                  <div key={tier.tier} className="rounded-lg border border-platinum-700/30 bg-platinum-800/20 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={`text-xs font-rajdhani ${
                          tier.tier === 'TIER 0' ? 'border-emerald-500/50 text-emerald-400' :
                          tier.tier === 'TIER 1' ? 'border-gold-700/50 text-gold-700' :
                          tier.tier === 'Academic' ? 'border-indigo-500/50 text-indigo-400' :
                          'border-platinum-500/50 text-platinum-400'
                        }`}
                      >
                        {tier.tier}
                      </Badge>
                      <span className="text-xl font-extrabold text-platinum-200 font-rajdhani">{tier.count}</span>
                    </div>
                    <p className="text-xs text-platinum-400 font-rajdhani">{tier.definition}</p>
                    <p className="text-xs text-platinum-500 mt-1 leading-relaxed">{tier.examples}</p>
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
