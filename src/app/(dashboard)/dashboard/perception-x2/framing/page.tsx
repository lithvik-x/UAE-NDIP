// @ts-nocheck
'use client'

/**
 * Framing Analysis Dashboard Page
 * UAE NDIP — Perception-X2 Module
 *
 * Comprehensive analysis of how UAE is framed across Western vs Regional vs Gulf media.
 * Source: 3-5-framing-analysis-results.md
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Target,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  MinusCircle,
  TrendingUp,
  TrendingDown,
  Minus,
  Eye,
  Scale,
  MessageSquare,
  Layers,
  Zap,
  Award,
  Users,
  Building2,
  BookOpen,
  BarChart3,
  Activity,
  Flag,
  ChevronRight,
  Hash,
  Link2,
  Search,
  FileText,
  Database,
} from 'lucide-react'
import { useFramingAnalysisData } from '@/lib/data-loader/hooks'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
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

// Helper functions
function getSentimentIcon(sentiment: string) {
  if (sentiment === 'positive' || sentiment === 'Pro-UAE' || sentiment === 'Pro-UAE/Government aligned' || sentiment === 'Pro-UAE, Anti-Western Media Bias' || sentiment === 'Positive/Institutional UAE' || sentiment === 'Pro-UAE/Analytical' || sentiment === 'Pro-UAE/Defensive' || sentiment === 'Pro-UAE/Institutional' || sentiment === 'Analytical/Pro-UAE with acknowledgment of challenges' || sentiment === 'Neutral/Positive for UAE resilience') {
    return <CheckCircle className="h-4 w-4 text-emerald-400" />
  }
  if (sentiment === 'negative' || sentiment === 'Analytical/Critical') {
    return <XCircle className="h-4 w-4 text-rose-400" />
  }
  return <MinusCircle className="h-4 w-4 text-amber-400" />
}

function getSentimentColor(sentiment: string) {
  if (sentiment === 'positive' || sentiment === 'Pro-UAE' || sentiment === 'Pro-UAE/Government aligned' || sentiment === 'Pro-UAE, Anti-Western Media Bias' || sentiment === 'Positive/Institutional UAE' || sentiment === 'Pro-UAE/Analytical' || sentiment === 'Pro-UAE/Defensive' || sentiment === 'Pro-UAE/Institutional' || sentiment === 'Analytical/Pro-UAE with acknowledgment of challenges' || sentiment === 'Neutral/Positive for UAE resilience') {
    return 'text-emerald-400'
  }
  if (sentiment === 'negative' || sentiment === 'Analytical/Critical') {
    return 'text-rose-400'
  }
  return 'text-amber-400'
}

function getSentimentBg(sentiment: string) {
  if (sentiment === 'positive' || sentiment === 'Pro-UAE' || sentiment === 'Pro-UAE/Government aligned' || sentiment === 'Pro-UAE, Anti-Western Media Bias' || sentiment === 'Positive/Institutional UAE' || sentiment === 'Pro-UAE/Analytical' || sentiment === 'Pro-UAE/Defensive' || sentiment === 'Pro-UAE/Institutional' || sentiment === 'Analytical/Pro-UAE with acknowledgment of challenges' || sentiment === 'Neutral/Positive for UAE resilience') {
    return 'bg-emerald-500/20 border-emerald-500/30'
  }
  if (sentiment === 'negative' || sentiment === 'Analytical/Critical') {
    return 'bg-rose-500/20 border-rose-500/30'
  }
  return 'bg-amber-500/20 border-amber-500/30'
}

function getTierColor(tier: string) {
  if (tier.includes('TIER 0') || tier.includes('Government')) return 'text-rose-400'
  if (tier.includes('TIER 1') || tier.includes('Mainstream')) return 'text-emerald-400'
  if (tier.includes('TIER 2') || tier.includes('Think Tank')) return 'text-cyan-400'
  if (tier.includes('TIER 3') || tier.includes('Secondary')) return 'text-gold-400'
  if (tier.includes('TIER 5') || tier.includes('Academic')) return 'text-indigo-400'
  return 'text-platinum-400'
}

export default function FramingAnalysisPage() {
  const { data, loading, error } = useFramingAnalysisData()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedSource, setSelectedSource] = useState<number | null>(null)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gold-700 font-rajdhani text-xl">
          Loading Framing Analysis data...
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
    focusAreas,
    keyQueryPatterns,
    sourcesData,
    synthesizedFindings,
    dataTables,
    framingTypology,
    sentimentByTier,
    sourceTierDistribution,
    blockedContent,
    keyEntities,
    kpiSummary,
    framingScorecard,
    urlsIndex,
  } = data

  // Chart data transformations
  const framingScorecardChartData = framingScorecard.map(f => ({
    name: f.framingType,
    western: f.westernScore,
    gulf: f.gulfScore,
    gap: Math.abs(f.gap),
  }))

  const tierDistributionData = sourceTierDistribution.map(t => ({
    name: t.tier,
    value: t.sources.split(',').length,
    color: t.tier.includes('0') ? CHART_COLORS.rose :
           t.tier.includes('1') ? CHART_COLORS.emerald :
           t.tier.includes('2') ? CHART_COLORS.cyan :
           t.tier.includes('3') ? CHART_COLORS.gold :
           t.tier.includes('5') ? CHART_COLORS.indigo :
           CHART_COLORS.platinum,
  }))

  // Key metrics for cards
  const keyMetrics = [
    { title: 'GDP (2025)', value: '$569.1B', icon: <BarChart3 className="h-6 w-6" />, gradient: 'gold' as const, trend: 'up' as const },
    { title: 'Non-oil GDP', value: '77.3%', icon: <TrendingUp className="h-6 w-6" />, gradient: 'emerald' as const, trend: 'up' as const },
    { title: 'Media Impressions', value: '158.9M', icon: <Globe className="h-6 w-6" />, gradient: 'cyan' as const, trend: 'up' as const },
    { title: 'Positive Sentiment', value: '85%', icon: <CheckCircle className="h-6 w-6" />, gradient: 'emerald' as const, trend: 'up' as const },
    { title: 'Soft Power Index', value: 'Top 10', icon: <Award className="h-6 w-6" />, gradient: 'gold' as const, trend: 'up' as const },
    { title: 'Humanitarian Rank', value: '3rd', icon: <Shield className="h-6 w-6" />, gradient: 'rose' as const, trend: 'up' as const },
  ]

  return (
    <motion.div
      className="min-h-screen space-y-8 p-6 lg:p-8"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* HEADER */}
      <motion.div variants={fadeInUp} className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <Badge variant="gold" className="mb-3 font-rajdhani text-xs tracking-widest uppercase">
            PERCEPTION-X2 | FRAMING ANALYSIS
          </Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">
            UAE Media Framing Analysis
          </h1>
          <p className="mt-2 text-sm text-platinum-400 max-w-2xl">
            Comprehensive analysis of how UAE is framed across Western vs Regional vs Gulf media sources.
            {executionMetadata.queriesExecuted} query dimensions, {urlsIndex.length} sources analyzed.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="border-gold-700/40 text-gold-700 text-xs">
            <Search className="h-3 w-3 mr-1" />
            {executionMetadata.queriesExecuted} Queries
          </Badge>
          <Badge variant="outline" className="border-emerald-500/40 text-emerald-400 text-xs">
            <FileText className="h-3 w-3 mr-1" />
            {sourcesData.length} Sources
          </Badge>
          <Badge variant="outline" className="border-platinum-500/40 text-platinum-400 text-xs">
            <Activity className="h-3 w-3 mr-1" />
            {executionMetadata.dateExecuted}
          </Badge>
        </div>
      </motion.div>

      {/* KEY METRICS */}
      <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {keyMetrics.map((metric) => (
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

      {/* MAIN TABS */}
      <motion.div variants={fadeInUp}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="glass-panel flex gap-1 p-1 overflow-x-auto">
            <TabsTrigger value="overview" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Eye className="h-3 w-3 mr-1" /> Overview
            </TabsTrigger>
            <TabsTrigger value="framing" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Layers className="h-3 w-3 mr-1" /> Framing
            </TabsTrigger>
            <TabsTrigger value="sources" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <FileText className="h-3 w-3 mr-1" /> Sources
            </TabsTrigger>
            <TabsTrigger value="scorecard" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <BarChart3 className="h-3 w-3 mr-1" /> Scorecard
            </TabsTrigger>
            <TabsTrigger value="entities" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Building2 className="h-3 w-3 mr-1" /> Entities
            </TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Focus Areas */}
              <GlassPanel title="Focus Areas" description="Key framing dimensions analyzed">
                <div className="space-y-2">
                  {focusAreas.map((area, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-platinum-800/20 border border-platinum-700/20">
                      <Hash className="h-4 w-4 text-gold-400 mt-0.5" />
                      <span className="text-sm text-platinum-300">{area}</span>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              {/* Framing Scorecard Summary */}
              <GlassPanel title="Framing Scorecard" description="Western vs Gulf perception gap">
                <BarChart
                  data={framingScorecardChartData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'western', name: 'Western', color: CHART_COLORS.rose },
                    { dataKey: 'gulf', name: 'Gulf', color: CHART_COLORS.emerald },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </GlassPanel>
            </div>

            {/* Key Query Patterns */}
            <GlassPanel title="Query Patterns Executed" description={`${keyQueryPatterns.length} search queries across 18 dimensions`}>
              <ScrollArea className="h-[300px]">
                <div className="grid gap-2">
                  {keyQueryPatterns.map((query, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-platinum-800/20 border border-platinum-700/20">
                      <span className="text-xs text-gold-400 font-rajdhani w-6">{i + 1}</span>
                      <code className="text-xs text-platinum-300 flex-1">{query}</code>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Source Tier Distribution */}
            <GlassPanel title="Source Tier Distribution" description="18 sources across 6 credibility tiers">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sourceTierDistribution.map((tier) => (
                  <div
                    key={tier.tier}
                    className={`rounded-lg border p-4 ${getSentimentBg(tier.description.includes('Government') ? 'negative' : tier.description.includes('Mainstream') ? 'positive' : 'neutral')}`}
                  >
                    <p className={`text-sm font-rajdhani font-semibold ${getTierColor(tier.tier)}`}>{tier.tier}</p>
                    <p className="text-xs text-platinum-400 mt-1">{tier.description}</p>
                    <p className="text-xs text-platinum-500 mt-2">{tier.sources}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* FRAMING TAB */}
          <TabsContent value="framing" className="space-y-6">
            {/* Framing Divergence */}
            <GlassPanel title="Framing Divergence: Western vs Gulf Perspectives" description="How the same topics are framed differently">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-lg border border-rose-500/20 bg-rose-500/5 p-4">
                  <h3 className="text-sm font-rajdhani font-semibold text-rose-400 mb-3 flex items-center gap-2">
                    <XCircle className="h-4 w-4" /> Western Media Framing
                  </h3>
                  <div className="space-y-2">
                    {synthesizedFindings.framingDivergence.western.map((f, i) => (
                      <div key={i} className="border-b border-rose-500/10 pb-2">
                        <p className="text-sm font-semibold text-platinum-200">{f.frame}</p>
                        <p className="text-xs text-platinum-400">{f.description}</p>
                        <p className="text-xs text-rose-400/70 mt-1">{f.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <h3 className="text-sm font-rajdhani font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" /> Gulf/Regional Framing
                  </h3>
                  <div className="space-y-2">
                    {synthesizedFindings.framingDivergence.gulf.map((f, i) => (
                      <div key={i} className="border-b border-emerald-500/10 pb-2">
                        <p className="text-sm font-semibold text-platinum-200">{f.frame}</p>
                        <p className="text-xs text-platinum-400">{f.description}</p>
                        <p className="text-xs text-emerald-400/70 mt-1">{f.example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Power Framing Evolution */}
            <GlassPanel title="Power Framing Evolution" description="How UAE's power status is framed">
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                  <h3 className="text-sm font-rajdhani font-semibold text-amber-400 mb-2">Traditional Frame</h3>
                  <p className="text-xs text-platinum-300">{synthesizedFindings.powerFramingEvolution.traditional}</p>
                </div>
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <h3 className="text-sm font-rajdhani font-semibold text-emerald-400 mb-2">Emerging Frame</h3>
                  <p className="text-xs text-platinum-300">{synthesizedFindings.powerFramingEvolution.emerging}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-platinum-400 font-rajdhani mb-2">Economic Growth Trajectory:</p>
                <div className="grid gap-2 sm:grid-cols-4">
                  {synthesizedFindings.powerFramingEvolution.economicGrowthData.map((d, i) => (
                    <div key={i} className="rounded-lg border border-platinum-700/20 bg-platinum-800/20 p-3 text-center">
                      <p className="text-lg font-bold text-gold-400">{d.gdp}</p>
                      <p className="text-xs text-platinum-500">{d.year}</p>
                      <p className="text-xs text-emerald-400">{d.change}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>

            {/* Crisis Framing Response */}
            <GlassPanel title="Crisis Framing Response" description="UAE counter-narratives to Western crisis coverage">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-rajdhani font-semibold text-rose-400 mb-3">Western Media Crisis Narrative</h3>
                  <div className="space-y-2">
                    {synthesizedFindings.crisisFramingResponse.westernMedia.map((n, i) => (
                      <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-rose-500/5 border border-rose-500/20">
                        <AlertTriangle className="h-4 w-4 text-rose-400 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-platinum-200">{n.narrativeElement}</p>
                          <p className="text-xs text-platinum-400">{n.example}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-rajdhani font-semibold text-emerald-400 mb-3">UAE Counter-Narrative</h3>
                  <div className="space-y-2">
                    {synthesizedFindings.crisisFramingResponse.uaeCounter.map((n, i) => (
                      <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                        <Shield className="h-4 w-4 text-emerald-400 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-platinum-200">{n.narrativeElement}</p>
                          <p className="text-xs text-platinum-400">{n.evidence}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Role Framing */}
            <GlassPanel title="Role Framing Categories" description="How UAE is positioned in different narratives">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {framingTypology.roleFraming.map((r, i) => (
                  <div key={i} className="rounded-lg border border-platinum-700/20 bg-platinum-800/20 p-3">
                    <p className="text-sm font-rajdhani font-semibold text-gold-400">{r.role}</p>
                    <p className="text-xs text-platinum-400 mt-1">{r.evidence}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Power Framing Spectrum */}
            <GlassPanel title="Power Framing Spectrum" description="UAE positioned across power categories">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {framingTypology.powerFraming.map((p, i) => (
                  <div key={i} className="rounded-lg border border-platinum-700/20 bg-platinum-800/20 p-3">
                    <p className="text-sm font-rajdhani font-semibold text-cyan-400">{p.level}</p>
                    <p className="text-xs text-platinum-400 mt-1">{p.indicators}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* SOURCES TAB */}
          <TabsContent value="sources" className="space-y-6">
            <GlassPanel title="Enriched Source Analysis" description={`${sourcesData.length} sources analyzed with key findings`}>
              <ScrollArea className="h-[800px]">
                <div className="space-y-4">
                  {sourcesData.map((source) => (
                    <div
                      key={source.id}
                      className={`rounded-lg border p-4 ${getSentimentBg(source.sentiment)}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {getSentimentIcon(source.sentiment)}
                            <p className="text-sm font-semibold text-platinum-200 font-rajdhani">{source.name}</p>
                            <Badge className={`${getTierColor(source.tier)} bg-transparent border text-xs`}>
                              {source.tier}
                            </Badge>
                          </div>
                          <p className="text-xs text-platinum-400 mb-2">{source.title || 'Title not available'}</p>
                          {source.date && (
                            <p className="text-xs text-platinum-500">Date: {source.date}</p>
                          )}
                          {source.keyFacts && source.keyFacts.length > 0 && (
                            <div className="mt-2 space-y-1">
                              {source.keyFacts.slice(0, 3).map((fact, i) => (
                                <p key={i} className="text-xs text-platinum-400 flex items-start gap-1">
                                  <ChevronRight className="h-3 w-3 text-gold-400 mt-0.5 flex-shrink-0" />
                                  {fact}
                                </p>
                              ))}
                            </div>
                          )}
                          {source.expectedConcepts && source.expectedConcepts.length > 0 && (
                            <div className="mt-2">
                              <p className="text-xs text-amber-400">Expected concepts (blocked):</p>
                              {source.expectedConcepts.map((c, i) => (
                                <p key={i} className="text-xs text-platinum-500">• {c}</p>
                              ))}
                            </div>
                          )}
                          {source.keyQuotes && source.keyQuotes.length > 0 && (
                            <div className="mt-2 border-t border-platinum-700/20 pt-2">
                              <p className="text-xs text-gold-400 mb-1">Key quote:</p>
                              <p className="text-xs text-platinum-300 italic">{source.keyQuotes[0]}</p>
                            </div>
                          )}
                          {source.status && (
                            <Badge variant="outline" className="mt-2 border-rose-500/50 text-rose-400 text-xs">
                              {source.status}
                            </Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <p className={`text-xs font-rajdhani font-semibold ${getSentimentColor(source.sentiment)}`}>
                            {source.relevance} Relevance
                          </p>
                          <p className="text-xs text-platinum-500 mt-1">{source.sentiment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Blocked Content */}
            <GlassPanel title="Blocked/Unavailable Content" description="Sources that could not be retrieved">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {blockedContent.map((b, i) => (
                  <div key={i} className="rounded-lg border border-rose-500/20 bg-rose-500/5 p-3">
                    <p className="text-sm font-rajdhani font-semibold text-rose-400">{b.source}</p>
                    <p className="text-xs text-platinum-500 mt-1">{b.issue}</p>
                    <p className="text-xs text-platinum-400 mt-1">{b.impact}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* SCORECARD TAB */}
          <TabsContent value="scorecard" className="space-y-6">
            {/* Framing Scorecard Full */}
            <GlassPanel title="Framing Scorecard" description="Quantitative comparison of Western vs Gulf perception">
              <BarChart
                data={framingScorecardChartData}
                xAxisKey="name"
                bars={[
                  { dataKey: 'western', name: 'Western Score', color: CHART_COLORS.rose },
                  { dataKey: 'gulf', name: 'Gulf Score', color: CHART_COLORS.emerald },
                ]}
                height={350}
                showGrid={true}
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {framingScorecard.map((f, i) => (
                  <div key={i} className="rounded-lg border border-platinum-700/20 bg-platinum-800/20 p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-rajdhani font-semibold text-platinum-200">{f.framingType}</p>
                      <Badge className={f.gap > 4 ? 'bg-rose-500/20 text-rose-400 border-rose-500/30' : 'bg-amber-500/20 text-amber-400 border-amber-500/30'}>
                        Gap: {f.gap}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex-1">
                        <p className="text-xs text-rose-400">Western: {f.westernScore}/10</p>
                        <Progress value={f.westernScore * 10} className="h-1 mt-1 bg-platinum-800" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-emerald-400">Gulf: {f.gulfScore}/10</p>
                        <Progress value={f.gulfScore * 10} className="h-1 mt-1 bg-platinum-800" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Sentiment by Source Tier */}
            <GlassPanel title="Sentiment by Source Tier" description="How different source types frame UAE">
              <div className="space-y-3">
                {sentimentByTier.map((t, i) => (
                  <div key={i} className="rounded-lg border border-platinum-700/20 bg-platinum-800/20 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className={`text-sm font-rajdhani font-semibold ${getTierColor(t.tier)}`}>{t.tier}</p>
                      {getSentimentIcon(t.averageSentiment)}
                    </div>
                    <p className="text-sm text-platinum-300">{t.averageSentiment}</p>
                    <p className="text-xs text-platinum-500 mt-1">Sources: {t.primarySources}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* KPI Summary */}
            <GlassPanel title="Key Performance Indicators" description="Dashboard-ready metrics from the analysis">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {kpiSummary.map((kpi, i) => (
                  <div key={i} className="rounded-lg border border-gold-700/20 bg-gold-700/5 p-4">
                    <p className="text-lg font-bold text-gold-400">{kpi.value}</p>
                    <p className="text-sm font-rajdhani font-semibold text-platinum-200">{kpi.kpi}</p>
                    <p className="text-xs text-platinum-500 mt-1">{kpi.trend}</p>
                    <p className="text-xs text-platinum-600">Source: {kpi.source}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Engagement Metrics */}
            <GlassPanel title="Engagement Metrics" description="Dubai media crisis response performance">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {dataTables.engagementMetrics.slice(0, 8).map((m, i) => (
                  <div key={i} className="rounded-lg border border-cyan-700/20 bg-cyan-700/5 p-4 text-center">
                    <p className="text-2xl font-bold text-cyan-400">{m.value}</p>
                    <p className="text-xs text-platinum-400 mt-1">{m.metric}</p>
                    <p className="text-xs text-platinum-500">{m.context}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ENTITIES TAB */}
          <TabsContent value="entities" className="space-y-6">
            {/* Government/Institutional Entities */}
            <GlassPanel title="Government & Institutional Entities" description="Key entities involved in framing">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {keyEntities.governmentInstitutional.map((e, i) => (
                  <div key={i} className="rounded-lg border border-emerald-700/20 bg-emerald-700/5 p-3">
                    <p className="text-sm font-rajdhani font-semibold text-emerald-400">{e.entity}</p>
                    <p className="text-xs text-platinum-500 mt-1">{e.type}</p>
                    <p className="text-xs text-platinum-400 mt-1">{e.role}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Media Organizations */}
            <GlassPanel title="Media Organizations" description="News outlets and their tiers">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {keyEntities.mediaOrganizations.map((m, i) => (
                  <div key={i} className="rounded-lg border border-platinum-700/20 bg-platinum-800/20 p-3">
                    <p className="text-sm font-rajdhani font-semibold text-platinum-200">{m.entity}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={`${getTierColor(m.tier)} bg-transparent border text-xs`}>{m.tier}</Badge>
                      <span className="text-xs text-platinum-500">{m.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Think Tanks & Academic */}
            <GlassPanel title="Think Tanks & Academic Institutions" description="Research institutions providing analysis">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {keyEntities.thinkTanksAcademic.map((t, i) => (
                  <div key={i} className="rounded-lg border border-indigo-700/20 bg-indigo-700/5 p-3">
                    <p className="text-sm font-rajdhani font-semibold text-indigo-400">{t.entity}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={`${getTierColor(t.tier)} bg-transparent border text-xs`}>{t.tier}</Badge>
                      <span className="text-xs text-platinum-500">{t.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Data Tables */}
            <GlassPanel title="Supporting Data Tables" description="Demographics and statistics">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-rajdhani font-semibold text-gold-400 mb-3">Demographics</h4>
                  <div className="space-y-2">
                    {dataTables.demographics.map((d, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-platinum-800/20 border border-platinum-700/20">
                        <span className="text-xs text-platinum-300">{d.group}</span>
                        <span className="text-xs text-gold-400 font-semibold">{d.estimate}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-rajdhani font-semibold text-gold-400 mb-3">Economic Statistics</h4>
                  <div className="space-y-2">
                    {dataTables.economicStatistics.slice(0, 8).map((e, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-platinum-800/20 border border-platinum-700/20">
                        <span className="text-xs text-platinum-300">{e.metric}</span>
                        <span className="text-xs text-emerald-400 font-semibold">{e.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}
