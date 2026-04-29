// @ts-nocheck
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
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Activity,
  AlertCircle,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Target,
  Award,
  Trophy,
  Medal,
  Crown,
  Flag,
  Scale,
  Plane,
  Building2,
  Users,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Database,
  BarChart3,
  Eye,
  Lightbulb,
  Radar,
  Star,
  Globe2,
  LineChart as LineChartIcon,
  TrendingDown,
  Percent,
  FlagTriangle,
  Handshake,
  Landmark,
  Wallet,
} from 'lucide-react'

// Import competitive intelligence data
import {
  executiveSummary,
  uaeRankings,
  uaeSaudiDemographics,
  uaeSaudiFiscal,
  uaeSaudiBusiness,
  uaeSaudiRankings,
  uaeSaudiTradeSovereign,
  uaeSaudiEconomics,
  saudiVision2030,
  skytrax2025Rankings,
  skytraxSpecialAwards,
  israeliTech,
  dataFreshnessLog,
  confidenceAssessment,
} from '@/lib/data-loader/monitoring-data'

// Import additional competitive intelligence data
import {
  executiveSummary as ciExecutiveSummary,
  ciSourceCredibilityMatrix as ciCredMatrix,
  ciUaeRelevanceMatrix as ciRelevanceMat,
  queryExecutionLog as ciQueryLog,
  webFetchEnrichmentMetrics as ciWebFetchMetrics,
  webFetchSuccessData as ciWebFetchSuccess,
  uaeSaudiFiscal as ciSaudiFiscal,
  uaeSaudiBusiness as ciSaudiBusiness,
  uaeSaudiRankings as ciSaudiRankings,
  uaeSaudiTradeSovereign as ciSaudiTrade,
  uaeSaudiDemographicsExtended as ciSaudiDemo,
  uaeSaudiRivalryAnalysis as ciSaudiRivalry,
  uaeBahrainComparison as ciBahrainComp,
  uaeKuwaitComparison as ciKuwaitComp,
  uaeOmanComparison as ciOmanComp,
  uaeIsraelTech as ciIsraelTechComp,
  uaeTurkeyComparison as ciTurkeyComp,
  uaeEgyptComparison as ciEgyptComp,
  dubaiLondonComparison as ciLondonComp,
  dubaiNyComparison as ciNyComp,
  dubaiHkComparison as ciHkComp,
  dubaiSwitzerlandComparison as ciSwissComp,
  dubaiMonacoComparison as ciMonacoComp,
  uaeRankingsExtended as ciRankingsExt,
  competitiveAdvantages as ciAdvantageList,
  visionProgramsComparison as ciVisionProg,
  sovereignNations as ciSovereign,
  organizations as ciOrgs,
  keyIndices as ciKeyIndices,
  dataFreshnessLog as ciFreshLog,
  confidenceAssessment as ciConfAssess,
  ciSourceBySourceAssessment,
} from '@/lib/data-loader/competitive-intelligence-data'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function CompetitiveIntelligencePage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Executive Summary metrics
  const summaryMetrics = [
    { label: 'Competitor Pairs', value: executiveSummary.competitorPairs, icon: <Globe className="h-5 w-5" />, gradient: 'gold' },
    { label: 'Competitive Dimensions', value: executiveSummary.competitiveDimensions, icon: <Radar className="h-5 w-5" />, gradient: 'emerald' },
    { label: 'Queries Executed', value: '20', icon: <Target className="h-5 w-5" />, gradient: 'navy' },
    { label: 'WebFetch Success', value: '~35%', icon: <Database className="h-5 w-5" />, gradient: 'rose' },
  ]

  // WebFetch tier data for pie chart
  const webFetchTierData = [
    { name: 'Successful', value: 12, color: CHART_COLORS.emerald },
    { name: 'Partial', value: 15, color: CHART_COLORS.gold },
    { name: 'Failed/Blocked', value: 34, color: CHART_COLORS.rose },
  ]

  // Competitor relevance chart data
  const relevanceData = [
    { name: 'Critical', value: ciRelevanceMat.filter(c => c.uaeRelevance === 'Critical').length, color: CHART_COLORS.rose },
    { name: 'High', value: ciRelevanceMat.filter(c => c.uaeRelevance === 'High').length, color: CHART_COLORS.gold },
    { name: 'Medium', value: ciRelevanceMat.filter(c => c.uaeRelevance === 'Medium').length, color: CHART_COLORS.navy },
    { name: 'Low', value: ciRelevanceMat.filter(c => c.uaeRelevance === 'Low' || c.uaeRelevance === 'Low-Medium').length, color: CHART_COLORS.platinum },
  ]

  // Rankings chart data
  const rankingsData = [
    { name: 'GFCI', value: 7, max: 10, color: CHART_COLORS.gold },
    { name: 'Entrepreneurship', value: 1, max: 10, color: CHART_COLORS.emerald },
    { name: 'Competitiveness', value: 5, max: 10, color: CHART_COLORS.navy },
    { name: 'Soft Power', value: 10, max: 15, color: CHART_COLORS.rose },
    { name: 'Innovation', value: 32, max: 50, color: CHART_COLORS.teal },
    { name: 'Safety', value: 1, max: 10, color: CHART_COLORS.lime },
  ]

  // Competitive sentiment chart
  const sentimentData = competitiveSentiment.map((s, idx) => ({
    name: s.topic.replace('UAE ', '').replace('Dubai ', '').substring(0, 15),
    score: s.score,
    color: s.score >= 0.6 ? CHART_COLORS.emerald : s.score >= 0.3 ? CHART_COLORS.gold : s.score >= -0.3 ? CHART_COLORS.navy : CHART_COLORS.rose,
  }))

  // UAE vs Saudi GDP comparison
  const gdpComparisonData = [
    { label: 'Saudi GDP', value: 1254, color: CHART_COLORS.gold },
    { label: 'UAE GDP', value: 552, color: CHART_COLORS.emerald },
  ]

  // Skytrax data
  const skytraxData = skytrax2025Rankings.slice(0, 5).map(r => ({
    name: r.airline,
    rank: r.rank,
    color: r.rank === 1 ? CHART_COLORS.gold : r.rank === 4 ? CHART_COLORS.emerald : CHART_COLORS.navy,
  }))

  // Confidence data for chart
  const confidenceData = [
    { label: 'High', count: confidenceAssessment.highConfidence.length, color: CHART_COLORS.emerald },
    { label: 'Medium', count: confidenceAssessment.mediumConfidence.length, color: CHART_COLORS.gold },
    { label: 'Low', count: confidenceAssessment.lowConfidence.length, color: CHART_COLORS.rose },
  ]

  const getStatusBadge = (status: string) => {
    if (status === 'SUCCESS' || status === 'Success' || status === 'Success (Skytrax)' || status === 'GFCI success' || status === 'MEF/Eye success, others blocked')
      return <Badge className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Success</Badge>
    if (status === 'Partial' || status.includes('Partial'))
      return <Badge className="text-xs bg-gold-500/20 text-gold-400 border-gold-500/50">Partial</Badge>
    if (status === 'Blocked' || status === 'Redirect/Blocked' || status === 'WIPO blocked' || status === 'ECONNREFUSED' || status === 'TLS Error' || status === 'Captcha' || status === 'Login wall' || status === 'Wrong site' || status === 'Redirect')
      return <Badge className="text-xs bg-red-500/20 text-red-400 border-red-500/50">Blocked</Badge>
    return <Badge className="text-xs bg-slate-500/20 text-slate-400 border-slate-500/50">{status}</Badge>
  }

  const getRelevanceBadge = (relevance: string) => {
    if (relevance === 'Critical') return <Badge className="text-xs bg-rose-500/20 text-rose-400 border-rose-500/50">Critical</Badge>
    if (relevance === 'High') return <Badge className="text-xs bg-gold-500/20 text-gold-400 border-gold-500/50">High</Badge>
    if (relevance === 'Medium') return <Badge className="text-xs bg-navy-500/20 text-navy-400 border-navy-500/50">Medium</Badge>
    return <Badge className="text-xs bg-slate-500/20 text-slate-400 border-slate-500/50">{relevance}</Badge>
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-8 p-8"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">M-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Competitive Intelligence</h1>
          <p className="mt-2 text-slate-400">
            Comprehensive UAE vs. competitor analysis across 20+ dimensions, 14 competitor pairs.
            Research: {ciExecutiveSummary.researchDate} | Enrichment: {ciExecutiveSummary.enrichmentDate}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Radar className="h-4 w-4" />
            Live Tracking
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {summaryMetrics.map((metric, idx) => (
          <motion.div key={idx} variants={fadeInUp}>
            <MetricCard
              title={metric.label}
              value={metric.value}
              icon={metric.icon}
              gradient={metric.gradient}
            />
          </motion.div>
        ))}
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
          <TabsTrigger value="saudi">UAE vs Saudi</TabsTrigger>
          <TabsTrigger value="singapore">UAE vs Singapore</TabsTrigger>
          <TabsTrigger value="qatar">UAE vs Qatar</TabsTrigger>
          <TabsTrigger value="gulf">Gulf States</TabsTrigger>
          <TabsTrigger value="finance">Finance Hubs</TabsTrigger>
          <TabsTrigger value="wealth">Wealth Mgmt</TabsTrigger>
          <TabsTrigger value="militaries">Militaries</TabsTrigger>
          <TabsTrigger value="tech">Tech</TabsTrigger>
          <TabsTrigger value="matrix">Intel Matrix</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="UAE Global Rankings Summary"
            description="Key international rankings and indices for UAE (2024-2026)"
          >
            <div className="space-y-6">
              {/* Top Rankings Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {[
                  { label: 'GFCI Ranking', value: '#7', sub: 'Dubai DIFC - Highest Ever', color: 'gold', icon: <Landmark className="h-5 w-5" /> },
                  { label: 'Entrepreneurship', value: '#1', sub: 'GEM - 5th Consecutive Year', color: 'emerald', icon: <Lightbulb className="h-5 w-5" /> },
                  { label: 'Safety Index', value: '#1', sub: 'Score 85.2 - Safest Globally', color: 'lime', icon: <Shield className="h-5 w-5" /> },
                  { label: 'Competitiveness', value: '#5', sub: 'IMD 2025 - Worldwide Top 10', color: 'navy', icon: <Trophy className="h-5 w-5" /> },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-lg border border-${item.color}/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors cursor-pointer`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`text-${item.color}`}>{item.icon}</div>
                      <span className="text-sm text-slate-400">{item.label}</span>
                    </div>
                    <div className={`text-3xl font-bold text-${item.color}`}>{item.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{item.sub}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Rankings Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-gold" />
                    Rankings Performance (Inverse Scale - Lower is Better)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rankingsData.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-1"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-300">{item.name}</span>
                          <span className="font-bold" style={{ color: item.color }}>#{item.value}</span>
                        </div>
                        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(item.value / item.max) * 100}%` }}
                            transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Two Column: WebFetch & Relevance */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5 text-rose" />
                      WebFetch Enrichment Results
                    </CardTitle>
                    <CardDescription>61 URLs attempted | 20% success, 25% partial</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart data={webFetchTierData} height={200} showLegend={true} />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe className="h-5 w-5 text-gold" />
                      Competitor Relevance Distribution
                    </CardTitle>
                    <CardDescription>14 competitors across 4 relevance tiers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart data={relevanceData} height={200} showLegend={true} />
                  </CardContent>
                </Card>
              </div>

              {/* UAE Winning Narratives */}
              <Card className="glass-card border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-emerald" />
                    UAE Winning Narratives
                  </CardTitle>
                  <CardDescription>Key competitive advantages driving UAE position</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {uaeWinningNarratives.map((narrative, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 hover:bg-emerald-500/20 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-300">{narrative}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Competitive Sentiment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-navy" />
                    Sentiment Analysis by Topic
                  </CardTitle>
                  <CardDescription>Competitive sentiment scores across 13 topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sentimentData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'score', name: 'Sentiment Score', color: CHART_COLORS.navy }]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Key Metrics Summary Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <LineChartIcon className="h-5 w-5 text-gold" />
                    Key Metrics Summary
                  </CardTitle>
                  <CardDescription>Cross-competitor comparison of key economic indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {keyMetricsSummary.map((row, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
                        >
                          <div className="flex-1">
                            <span className="text-sm font-medium text-slate-200">{row.metric}</span>
                          </div>
                          <div className="flex gap-4">
                            <div className="text-center px-2">
                              <div className="text-xs text-slate-400">UAE</div>
                              <div className="text-sm font-bold text-emerald-400">{row.uae}</div>
                            </div>
                            <div className="text-center px-2">
                              <div className="text-xs text-slate-400">Saudi</div>
                              <div className="text-sm font-bold text-gold">{row.saudiArabia}</div>
                            </div>
                            <div className="text-center px-2">
                              <div className="text-xs text-slate-400">Singapore</div>
                              <div className="text-sm font-bold text-navy">{row.singapore}</div>
                            </div>
                            <div className="text-center px-2">
                              <div className="text-xs text-slate-400">Qatar</div>
                              <div className="text-sm font-bold text-rose">{row.qatar}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Methodology Tab */}
        <TabsContent value="methodology" className="space-y-6">
          <GlassPanel
            title="Research Methodology"
            description="20 atomic queries, 61 WebFetch attempts, tiered source credibility assessment"
          >
            <div className="space-y-6">
              {/* Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-gold" />
                    Source Credibility Matrix
                  </CardTitle>
                  <CardDescription>5-tier classification for source reliability assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {ciCredMatrix.map((tier, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                            tier.tier === 'Tier 0' ? 'bg-gold/20 text-gold' :
                            tier.tier === 'Tier 1' ? 'bg-emerald/20 text-emerald' :
                            tier.tier === 'Tier 2' ? 'bg-navy/20 text-navy' :
                            tier.tier === 'Tier 3' ? 'bg-platinum/20 text-platinum' :
                            'bg-slate-600/20 text-slate-400'
                          }`}>
                            {tier.tier}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-slate-200">{tier.description}</div>
                            <div className="text-xs text-slate-400">{tier.sources}</div>
                          </div>
                          <div className="text-sm font-bold text-emerald-400">{tier.credibilityScore}</div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Query Execution Log */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-rose" />
                    Query Execution Log
                  </CardTitle>
                  <CardDescription>20 atomic queries executed across 14 competitor pairs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {ciQueryLog.map((query, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700/50 text-sm font-bold text-slate-300">
                            {query.queryNumber}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-slate-200">{query.query}</div>
                            <div className="text-xs text-slate-400 mt-1">{query.sources}</div>
                          </div>
                          <div className="shrink-0">
                            {getStatusBadge(query.webFetchStatus)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* WebFetch Enrichment Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="h-5 w-5 text-emerald" />
                    WebFetch Enrichment Metrics
                  </CardTitle>
                  <CardDescription>61 URLs attempted across 5 source tiers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-5">
                    {[
                      { tier: 'Tier 0', attempted: 7, successful: 1, color: CHART_COLORS.gold },
                      { tier: 'Tier 1', attempted: 8, successful: 3, color: CHART_COLORS.emerald },
                      { tier: 'Tier 2', attempted: 6, successful: 2, color: CHART_COLORS.navy },
                      { tier: 'Tier 3', attempted: 15, successful: 4, color: CHART_COLORS.teal },
                      { tier: 'Tier 4', attempted: 25, successful: 2, color: CHART_COLORS.rose },
                    ].map((t, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 text-center"
                      >
                        <div className="text-sm font-bold text-slate-400 mb-2">{t.tier}</div>
                        <div className="text-2xl font-bold" style={{ color: t.color }}>{t.successful}/{t.attempted}</div>
                        <div className="text-xs text-slate-400 mt-1">successful</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Successfully Extracted Data */}
              <Card className="glass-card border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald" />
                    Successfully Extracted Data Points
                  </CardTitle>
                  <CardDescription>Key data extracted via WebFetch enrichment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {ciWebFetchSuccess.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-start gap-3 p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10"
                        >
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 shrink-0 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-emerald" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-slate-200">{item.url}</span>
                              <Badge className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">{item.status}</Badge>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">{item.dataExtracted}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Data Freshness */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-navy" />
                    Data Freshness Log
                  </CardTitle>
                  <CardDescription>Last update status for each data category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {ciFreshLog.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <div>
                          <div className="text-sm font-medium text-slate-200">{item.category}</div>
                          <div className="text-xs text-slate-400">{item.source} | {item.latestUpdate}</div>
                        </div>
                        <Badge className={`text-xs ${
                          item.status === 'Fresh' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                          item.status === 'Current' ? 'bg-gold-500/20 text-gold-400 border-gold-500/50' :
                          item.status === 'Needs update' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' :
                          'bg-slate-500/20 text-slate-400 border-slate-500/50'
                        }`}>
                          {item.status}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Confidence Assessment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold" />
                    Confidence Assessment
                  </CardTitle>
                  <CardDescription>Data reliability classification across all metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-emerald-400">High Confidence (9)</h4>
                      {confidenceAssessment.highConfidence.slice(0, 5).map((item, idx) => (
                        <div key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-emerald mt-0.5 shrink-0" />
                          <span>{item.metric} ({item.confidence})</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gold-400">Medium Confidence (4)</h4>
                      {confidenceAssessment.mediumConfidence.map((item, idx) => (
                        <div key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                          <AlertCircle className="h-3 w-3 text-gold mt-0.5 shrink-0" />
                          <span>{item.metric} ({item.confidence})</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-rose-400">Low Confidence (3)</h4>
                      {confidenceAssessment.lowConfidence.map((item, idx) => (
                        <div key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                          <XCircle className="h-3 w-3 text-rose mt-0.5 shrink-0" />
                          <span>{item.metric} ({item.confidence})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* UAE vs Saudi Tab */}
        <TabsContent value="saudi" className="space-y-6">
          <GlassPanel
            title="UAE vs Saudi Arabia"
            description="Critical priority - Direct regional rival, Vision 2030 competition, shared GCC framework"
          >
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-lg border border-gold/30 bg-slate-800/30 p-4"
                >
                  <div className="text-sm text-slate-400">GDP per Capita</div>
                  <div className="text-2xl font-bold text-emerald-400">UAE 43% higher</div>
                  <div className="text-xs text-slate-400 mt-1">$50,274 vs $35,122</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-lg border border-gold/30 bg-slate-800/30 p-4"
                >
                  <div className="text-sm text-slate-400">Corporate Tax</div>
                  <div className="text-2xl font-bold text-emerald-400">UAE 55% lower</div>
                  <div className="text-xs text-slate-400 mt-1">9% vs 20%</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-lg border border-gold/30 bg-slate-800/30 p-4"
                >
                  <div className="text-sm text-slate-400">VAT Rate</div>
                  <div className="text-2xl font-bold text-emerald-400">UAE 67% lower</div>
                  <div className="text-xs text-slate-400 mt-1">5% vs 15%</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-lg border border-gold/30 bg-slate-800/30 p-4"
                >
                  <div className="text-sm text-slate-400">Sovereign Wealth</div>
                  <div className="text-2xl font-bold text-emerald-400">UAE 2x larger</div>
                  <div className="text-xs text-slate-400 mt-1">~$1.8T vs $941B PIF</div>
                </motion.div>
              </div>

              {/* GDP Comparison Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">GDP Comparison (2024)</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={gdpComparisonData}
                    xAxisKey="label"
                    bars={[{ dataKey: 'value', name: 'GDP ($B)', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Economic Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gold" />
                    Economic Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { metric: 'Nominal GDP', saudi: '$1.254T', uae: '$552B', note: 'SA 2.27x larger' },
                      { metric: 'GDP per Capita', saudi: '$35,122', uae: '$50,274', note: 'UAE 43% higher' },
                      { metric: 'GDP Growth', saudi: '2.6%', uae: '4.0%', note: 'UAE 54% higher' },
                      { metric: 'Non-Oil GDP', saudi: '76%', uae: '73%', note: 'Saudi slightly ahead' },
                      { metric: 'Current Account', saudi: '-$16.3B', uae: '+$80B', note: 'UAE surplus' },
                    ].map((row, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <span className="text-sm font-medium text-slate-200">{row.metric}</span>
                        <div className="flex gap-4">
                          <div className="text-center">
                            <div className="text-xs text-slate-400">SA</div>
                            <div className="text-sm font-bold text-gold">{row.saudi}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-slate-400">UAE</div>
                            <div className="text-sm font-bold text-emerald-400">{row.uae}</div>
                          </div>
                          <div className="text-xs text-slate-400 self-center max-w-[100px]">{row.note}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Saudi Vision 2030 */}
              <Card className="glass-card border-gold-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-gold" />
                    Saudi Vision 2030 Progress
                  </CardTitle>
                  <CardDescription>Extracted from vision2030.ai (WebFetch Verified)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    {[
                      { label: 'Non-Oil GDP', value: '76%', change: '+7.7pp since 2020' },
                      { label: 'Unemployment', value: '3.5%', change: '-0.5pp vs 2023' },
                      { label: 'PIF AUM', value: '$941.3B', change: '+$345B vs 2022' },
                      { label: 'GDP Growth', value: '2.0%', change: '+1.5pp vs 2023' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                        className="rounded-lg border border-gold/30 bg-gold/10 p-4 text-center hover:bg-gold/20 transition-colors cursor-pointer"
                      >
                        <div className="text-2xl font-bold text-gold">{item.value}</div>
                        <div className="text-xs text-slate-400 mt-1">{item.label}</div>
                        <div className="text-xs text-emerald mt-1">{item.change}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Regional Rivalry */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose" />
                    Regional Rivalry Analysis
                  </CardTitle>
                  <CardDescription>Key battlegrounds and strategic differences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <p className="text-sm text-slate-300">{ciSaudiRivalry.coreStrategicDifferences}</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {ciSaudiRivalry.keyBattlegrounds.map((bg, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-3 rounded-lg border border-rose-500/30 bg-rose-500/10"
                        >
                          <div className="font-semibold text-rose-400 text-sm mb-1">{bg.area}</div>
                          <p className="text-xs text-slate-400">{bg.description}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="p-3 rounded-lg border border-rose-500/30 bg-rose-500/5">
                      <p className="text-xs text-slate-400 italic">"{ciSaudiRivalry.keyQuote}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rankings Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-gold" />
                    Global Rankings Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { index: 'Innovation Ranking', saudi: '47th', uae: '32nd', winner: 'UAE' },
                      { index: 'Global Peace Ranking', saudi: '102nd', uae: '53rd', winner: 'UAE' },
                      { index: 'Human Development Index', saudi: '0.875', uae: '0.937', winner: 'UAE' },
                      { index: 'Human Capital Ranking', saudi: '82nd', uae: '45th', winner: 'UAE' },
                      { index: 'Corruption Perceptions', saudi: '52', uae: '68', winner: 'UAE (higher is better)' },
                    ].map((row, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <span className="text-sm font-medium text-slate-200">{row.index}</span>
                        <div className="flex gap-4 items-center">
                          <div className="text-center">
                            <div className="text-xs text-slate-400">SA</div>
                            <div className="text-sm font-bold text-gold">{row.saudi}</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-500" />
                          <div className="text-center">
                            <div className="text-xs text-slate-400">UAE</div>
                            <div className="text-sm font-bold text-emerald-400">{row.uae}</div>
                          </div>
                          <Badge className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50 ml-2">{row.winner}</Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* UAE vs Singapore Tab */}
        <TabsContent value="singapore" className="space-y-6">
          <GlassPanel
            title="UAE vs Singapore"
            description="Critical priority - Financial hub competition, wealth management, business environment benchmark"
          >
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-4 sm:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-lg border border-navy/30 bg-slate-800/30 p-4"
                >
                  <div className="text-sm text-slate-400">GFCI Ranking</div>
                  <div className="text-2xl font-bold text-navy">Dubai 7th | Singapore Top 5</div>
                  <div className="text-xs text-emerald mt-1">Dubai DIFC highest ever</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-lg border border-emerald/30 bg-slate-800/30 p-4"
                >
                  <div className="text-sm text-slate-400">Corporate Tax</div>
                  <div className="text-2xl font-bold text-emerald-400">UAE 47% lower</div>
                  <div className="text-xs text-slate-400 mt-1">9% vs 17%</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-lg border border-gold/30 bg-slate-800/30 p-4"
                >
                  <div className="text-sm text-slate-400">HNWI Inflow (2025)</div>
                  <div className="text-2xl font-bold text-gold">Dubai #1 globally</div>
                  <div className="text-xs text-slate-400 mt-1">+9,800 millionaires</div>
                </motion.div>
              </div>

              {/* Tax Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Percent className="h-5 w-5 text-emerald" />
                    Tax Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { type: 'Corporate Tax', dubai: '9%', singapore: '17%', winner: 'Dubai' },
                      { type: 'Personal Income Tax', dubai: '0%', singapore: '0-22% progressive', winner: 'Dubai' },
                      { type: 'VAT/GST', dubai: '5%', singapore: '9%', winner: 'Dubai' },
                      { type: 'Capital Gains Tax', dubai: '0%', singapore: '0%', winner: 'Tie' },
                      { type: 'Withholding Tax', dubai: '0%', singapore: '10%', winner: 'Dubai' },
                    ].map((row, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <span className="text-sm font-medium text-slate-200">{row.type}</span>
                        <div className="flex gap-4 items-center">
                          <div className="text-center">
                            <div className="text-xs text-slate-400">Dubai</div>
                            <div className="text-sm font-bold text-emerald-400">{row.dubai}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-slate-400">Singapore</div>
                            <div className="text-sm font-bold text-navy">{row.singapore}</div>
                          </div>
                          <Badge className={`text-xs ml-2 ${row.winner === 'Dubai' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : row.winner === 'Tie' ? 'bg-slate-500/20 text-slate-400 border-slate-500/50' : 'bg-navy-500/20 text-navy-400 border-navy-500/50'}`}>
                            {row.winner}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Strategic Positioning */}
              <Card className="glass-card border-navy-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-navy" />
                    Strategic Positioning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10">
                      <h4 className="font-semibold text-emerald-400 mb-3">Choose Dubai For</h4>
                      <ul className="space-y-2">
                        {['MENA/Africa markets', 'Tax efficiency', 'Trading, crypto', 'Visa flexibility', 'Speed, growth'].map((item, idx) => (
                          <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                            <ArrowRight className="h-3 w-3 text-emerald" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-navy-500/30 bg-navy-500/10">
                      <h4 className="font-semibold text-navy-400 mb-3">Choose Singapore For</h4>
                      <ul className="space-y-2">
                        {['Southeast Asia/China markets', 'Tech/VC ecosystem', 'Rule of law, IP protection', 'Path to citizenship', 'Stability, maturity'].map((item, idx) => (
                          <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                            <ArrowRight className="h-3 w-3 text-navy" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cost Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Cost of Living (Monthly USD)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { category: 'Rent (2BR)', dubai: '$2,500-3,500', singapore: '$3,500-5,500', diff: 'Singapore 40% higher' },
                      { category: 'Transport', dubai: '$400-600', singapore: '$200-400', diff: 'Dubai higher' },
                      { category: 'Total', dubai: '$4,900-7,550', singapore: '$5,450-9,150', diff: 'Singapore 15-25% higher' },
                    ].map((row, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <span className="text-sm font-medium text-slate-200">{row.category}</span>
                        <div className="flex gap-4 items-center">
                          <div className="text-center">
                            <div className="text-xs text-slate-400">Dubai</div>
                            <div className="text-sm font-bold text-emerald-400">{row.dubai}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-slate-400">Singapore</div>
                            <div className="text-sm font-bold text-navy">{row.singapore}</div>
                          </div>
                          <div className="text-xs text-slate-400 max-w-[120px]">{row.diff}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* UAE vs Qatar Tab */}
        <TabsContent value="qatar" className="space-y-6">
          <GlassPanel
            title="UAE vs Qatar (Airlines)"
            description="High priority - Aviation rivalry, business class excellence, Gulf neighbor"
          >
            <div className="space-y-6">
              {/* Skytrax Rankings */}
              <Card className="glass-card border-gold-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-gold" />
                    Skytrax World Airline Awards 2025
                  </CardTitle>
                  <CardDescription>Source: worldairlineawards.com (WebFetch Verified)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skytrax2025Rankings.map((airline, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className={`flex items-center gap-4 p-3 rounded-lg border ${
                          airline.rank === 1 ? 'border-gold-500/50 bg-gold-500/10' :
                          airline.rank === 4 ? 'border-emerald-500/50 bg-emerald-500/10' :
                          'border-slate-700/50 bg-slate-800/30'
                        }`}
                      >
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold ${
                          airline.rank === 1 ? 'bg-gold-500/20 text-gold' :
                          airline.rank === 4 ? 'bg-emerald-500/20 text-emerald' :
                          'bg-slate-700/50 text-slate-300'
                        }`}>
                          {airline.rank === 1 ? <Crown className="h-5 w-5" /> :
                           airline.rank === 4 ? <Medal className="h-5 w-5" /> :
                           airline.rank}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-200">{airline.airline}</div>
                          {airline.award && <div className="text-xs text-gold">{airline.award}</div>}
                        </div>
                        {airline.rank <= 4 && (
                          <Badge className={`${
                            airline.rank === 1 ? 'bg-gold-500/20 text-gold-400 border-gold-500/50' :
                            'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                          }`}>
                            {airline.rank === 1 ? "World's Best" : '#4'}
                          </Badge>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Special Awards */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Special Category Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {skytraxSpecialAwards.map((award, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                        className="rounded-lg border border-gold/30 bg-gold/10 p-4 text-center hover:bg-gold/20 transition-colors cursor-pointer"
                      >
                        <div className="text-lg font-bold text-gold">{award.airline}</div>
                        <div className="text-xs text-slate-400 mt-1">{award.award}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business Class Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Plane className="h-5 w-5 text-rose" />
                    Business Class Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="p-4 rounded-lg border border-gold-500/30 bg-gold-500/10">
                      <h4 className="font-semibold text-gold mb-2">Qatar Airways</h4>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div><span className="text-slate-400">Product:</span> QSuite (sliding doors, enclosed)</div>
                        <div><span className="text-slate-400">Key Award:</span> World's Best Business Class</div>
                        <div><span className="text-slate-400">Hub:</span> Doha</div>
                        <div><span className="text-slate-400">Verdict:</span> <span className="text-gold font-semibold">WINNER - Business Class</span></div>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10">
                      <h4 className="font-semibold text-emerald mb-2">Emirates</h4>
                      <div className="space-y-2 text-sm text-slate-300">
                        <div><span className="text-slate-400">Product:</span> Reliable comfort across fleet</div>
                        <div><span className="text-slate-400">Key Award:</span> First Class luxury, onboard lounge</div>
                        <div><span className="text-slate-400">Hub:</span> Dubai</div>
                        <div><span className="text-slate-400">Verdict:</span> <span className="text-emerald font-semibold">WINNER - First Class</span></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Aviation Strategy */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Aviation Strategy Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { metric: 'Hub', qatar: 'Doha', emirates: 'Dubai' },
                      { metric: 'Fleet Focus', qatar: 'Widebody efficiency', emirates: 'A380 dominance' },
                      { metric: 'Route Network', qatar: '170+ destinations', emirates: 'Global coverage' },
                      { metric: 'Growth Rate', qatar: 'Fastest', emirates: 'Largest' },
                      { metric: 'Overall Ranking', qatar: '#1 (Skytrax)', emirates: '#4 (Skytrax)' },
                    ].map((row, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <span className="text-sm font-medium text-slate-200">{row.metric}</span>
                        <div className="flex gap-4 items-center">
                          <div className="text-center">
                            <div className="text-xs text-slate-400">Qatar</div>
                            <div className="text-sm font-bold text-gold">{row.qatar}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-slate-400">Emirates</div>
                            <div className="text-sm font-bold text-emerald-400">{row.emirates}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Gulf States Tab */}
        <TabsContent value="gulf" className="space-y-6">
          <GlassPanel
            title="Gulf States Comparison"
            description="Bahrain, Kuwait, Oman - Secondary competitors with varying relevance"
          >
            <div className="space-y-6">
              {/* UAE vs Bahrain */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Flag className="h-5 w-5 text-emerald" />
                    UAE vs Bahrain
                  </CardTitle>
                  <CardDescription>Medium relevance - Financial cooperation recipient, fintech competitor</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { metric: 'GDP 2024', uae: '$552B', bahrain: '~$43B', note: 'UAE 12.8x larger' },
                      { metric: 'Debt (% GDP)', uae: '34.9%', bahrain: '133.4%', note: 'Bahrain 3.8x higher' },
                      { metric: 'Corporate Tax', uae: '9% (threshold)', bahrain: '0% (all non-oil)', note: 'Bahrain lower' },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30">
                        <span className="text-sm font-medium text-slate-200">{row.metric}</span>
                        <div className="flex gap-4 items-center">
                          <div className="text-center"><div className="text-xs text-slate-400">UAE</div><div className="text-sm font-bold text-emerald-400">{row.uae}</div></div>
                          <div className="text-center"><div className="text-xs text-slate-400">Bahrain</div><div className="text-sm font-bold text-platinum">{row.bahrain}</div></div>
                          <div className="text-xs text-slate-400 max-w-[100px]">{row.note}</div>
                        </div>
                      </div>
                    ))}
                    <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 mt-3">
                      <p className="text-sm text-slate-300">UAE provided Bahrain $5.44B currency swap (2024) - Financial cooperation recipient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UAE vs Kuwait */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Flag className="h-5 w-5 text-gold" />
                    UAE vs Kuwait
                  </CardTitle>
                  <CardDescription>Low-Medium relevance - Slower reform, less direct competition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { metric: 'GDP 2024', uae: '$552B', kuwait: '$160B', note: 'UAE 3.45x larger' },
                      { metric: 'GDP per Capita', uae: '~$49,000', kuwait: '~$31,500', note: 'UAE 56% higher' },
                      { metric: 'IMF Growth 2026', uae: '+3.1%', kuwait: '-0.6%', note: 'UAE significantly better' },
                      { metric: 'Unemployment', uae: '1.88%', kuwait: '3.7%', note: 'UAE lower' },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30">
                        <span className="text-sm font-medium text-slate-200">{row.metric}</span>
                        <div className="flex gap-4 items-center">
                          <div className="text-center"><div className="text-xs text-slate-400">UAE</div><div className="text-sm font-bold text-emerald-400">{row.uae}</div></div>
                          <div className="text-center"><div className="text-xs text-slate-400">Kuwait</div><div className="text-sm font-bold text-gold">{row.kuwait}</div></div>
                          <div className="text-xs text-emerald max-w-[120px]">{row.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE vs Oman */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Flag className="h-5 w-5 text-platinum" />
                    UAE vs Oman
                  </CardTitle>
                  <CardDescription>Low-Medium relevance - Complementary rather than competitive</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10">
                      <h4 className="font-semibold text-emerald mb-3">UAE Positioning</h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-emerald" /> Fast-moving, diverse lifestyle</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-emerald" /> World-class luxury facilities</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-emerald" /> Modern infrastructure</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-emerald" /> Extravagant offerings</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-platinum-500/30 bg-platinum-500/10">
                      <h4 className="font-semibold text-platinum-400 mb-3">Oman Positioning</h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-platinum" /> Relaxed, traditional lifestyle</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-platinum" /> Authentic Arabian experience</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-platinum" /> Natural beauty, rugged coastline</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-platinum" /> Cultural authenticity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Finance Hubs Tab */}
        <TabsContent value="finance" className="space-y-6">
          <GlassPanel
            title="Finance Hub Comparisons"
            description="Dubai vs London, New York, Hong Kong - Global financial centre competition"
          >
            <div className="space-y-6">
              {/* Dubai vs London */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-gold" />
                    Dubai vs London
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { metric: 'GFCI Ranking', dubai: '7th', london: 'Top 3', winner: 'London' },
                      { metric: 'Income Tax', dubai: '0%', london: 'Up to 45%', winner: 'Dubai' },
                      { metric: 'Business Setup', dubai: 'Faster, simpler', london: 'Longer, complex', winner: 'Dubai' },
                      { metric: 'Rental Yields', dubai: '6-8%', london: 'Lower', winner: 'Dubai' },
                      { metric: 'Dining Out Cost', dubai: '26% cheaper', london: 'Higher', winner: 'Dubai' },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30">
                        <span className="text-sm font-medium text-slate-200">{row.metric}</span>
                        <div className="flex gap-4 items-center">
                          <div className="text-center"><div className="text-xs text-slate-400">Dubai</div><div className="text-sm font-bold text-emerald-400">{row.dubai}</div></div>
                          <div className="text-center"><div className="text-xs text-slate-400">London</div><div className="text-sm font-bold text-gold">{row.london}</div></div>
                          <Badge className={`text-xs ${row.winner === 'Dubai' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'bg-gold-500/20 text-gold-400 border-gold-500/50'}`}>{row.winner}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Dubai vs New York */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-rose" />
                    Dubai vs New York
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { metric: 'Rental Yields', dubai: '5-8%', ny: '3-5%', winner: 'Dubai' },
                      { metric: 'Transaction Costs', dubai: '7%', ny: '25-30%', winner: 'Dubai' },
                      { metric: 'Personal Income Tax', dubai: '0%', ny: 'Federal+State+City', winner: 'Dubai' },
                      { metric: 'Property Tax', dubai: '0%', ny: 'Varies by borough', winner: 'Dubai' },
                      { metric: 'Capital Gains', dubai: '0%', ny: 'Federal+State', winner: 'Dubai' },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30">
                        <span className="text-sm font-medium text-slate-200">{row.metric}</span>
                        <div className="flex gap-4 items-center">
                          <div className="text-center"><div className="text-xs text-slate-400">Dubai</div><div className="text-sm font-bold text-emerald-400">{row.dubai}</div></div>
                          <div className="text-center"><div className="text-xs text-slate-400">New York</div><div className="text-sm font-bold text-rose">{row.ny}</div></div>
                          <Badge className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">{row.winner}</Badge>
                        </div>
                      </div>
                    ))}
                    <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 mt-3">
                      <p className="text-sm text-slate-300">Dubai officially surpassed New York as world&apos;s leading destination for wealthy residents (Nov 2025)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dubai vs Hong Kong */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-navy" />
                    Dubai vs Hong Kong
                  </CardTitle>
                  <CardDescription>Medium relevance - Declining competitor, China tensions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { metric: 'GFCI Ranking', dubai: '7th (rising)', hk: 'Facing challenges', winner: 'Dubai' },
                      { metric: 'Rental Yields', dubai: '5-8%', hk: '2-4%', winner: 'Dubai' },
                      { metric: 'Price Trend 2021-2024', dubai: 'Strong growth', hk: '-15% from peak', winner: 'Dubai' },
                      { metric: 'Family Office Growth', dubai: 'Growing rapidly', hk: 'Declining', winner: 'Dubai' },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30">
                        <span className="text-sm font-medium text-slate-200">{row.metric}</span>
                        <div className="flex gap-4 items-center">
                          <div className="text-center"><div className="text-xs text-slate-400">Dubai</div><div className="text-sm font-bold text-emerald-400">{row.dubai}</div></div>
                          <div className="text-center"><div className="text-xs text-slate-400">HK</div><div className="text-sm font-bold text-navy">{row.hk}</div></div>
                          <Badge className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">{row.winner}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Wealth Management Tab */}
        <TabsContent value="wealth" className="space-y-6">
          <GlassPanel
            title="Wealth Management Competition"
            description="UAE vs Switzerland, Monaco - Wealth preservation and attraction"
          >
            <div className="space-y-6">
              {/* Dubai vs Switzerland */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-gold" />
                    Dubai vs Switzerland
                  </CardTitle>
                  <CardDescription>High priority - Wealth management benchmark, privacy/safety comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { metric: 'Tradition', dubai: 'Emerging', swiss: 'Centuries of heritage', winner: 'Swiss' },
                      { metric: 'Privacy', dubai: 'Developing', swiss: 'Strong protection', winner: 'Swiss' },
                      { metric: 'Speed/Scale', dubai: 'Faster', swiss: 'Slower', winner: 'Dubai' },
                      { metric: 'Tax Efficiency', dubai: 'Better', swiss: 'Moderate', winner: 'Dubai' },
                      { metric: 'Safety Index 2025', dubai: '85.2 (#1 globally)', swiss: 'Very high', winner: 'Dubai' },
                      { metric: 'Crime Index', dubai: '15.5', swiss: '26.5', winner: 'Dubai (lower is better)' },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30">
                        <span className="text-sm font-medium text-slate-200">{row.metric}</span>
                        <div className="flex gap-4 items-center">
                          <div className="text-center"><div className="text-xs text-slate-400">Dubai</div><div className="text-sm font-bold text-emerald-400">{row.dubai}</div></div>
                          <div className="text-center"><div className="text-xs text-slate-400">Swiss</div><div className="text-sm font-bold text-gold">{row.swiss}</div></div>
                        </div>
                      </div>
                    ))}
                    <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 mt-3">
                      <p className="text-sm text-slate-300">UAE attracted 9,800 millionaires and ~$63B in wealth inflows (2025) - Largest HNWI inflow globally</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dubai vs Monaco */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Crown className="h-5 w-5 text-platinum" />
                    Dubai vs Monaco
                  </CardTitle>
                  <CardDescription>Low relevance - Ultra-luxury niche, different scale</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10">
                      <h4 className="font-semibold text-emerald mb-3">Dubai</h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-emerald" /> Glamour + business + no taxes</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-emerald" /> Golden Visa (10yr)</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-emerald" /> Larger scale, diverse</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-emerald" /> Broader market accessibility</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-platinum-500/30 bg-platinum-500/10">
                      <h4 className="font-semibold text-platinum-400 mb-3">Monaco</h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-platinum" /> Exclusivity + luxury + no income tax</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-platinum" /> European foothold</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-platinum" /> Concentrated elite</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><ArrowRight className="h-3 w-3 text-platinum" /> 60,000-member community</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Militaries Tab */}
        <TabsContent value="militaries" className="space-y-6">
          <GlassPanel
            title="Military Comparison"
            description="UAE vs Turkey, Egypt - Regional military capability assessment"
          >
            <div className="space-y-6">
              {/* UAE vs Turkey */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-rose" />
                    UAE vs Turkey
                  </CardTitle>
                  <CardDescription>High priority - Regional influence competition, soft power rivalry</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3 mb-4">
                    {[
                      { label: 'Defense Budget', uae: '$23B', turkey: '$25B' },
                      { label: 'Total Aircraft', uae: '548', turkey: '548' },
                      { label: 'Soft Power Ranking', uae: '8th-10th', turkey: 'Lower' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 text-center">
                        <div className="text-sm text-slate-400">{item.label}</div>
                        <div className="flex justify-center gap-4 mt-2">
                          <div><div className="text-xs text-slate-500">UAE</div><div className="text-sm font-bold text-emerald-400">{item.uae}</div></div>
                          <div><div className="text-xs text-slate-500">Turkey</div><div className="text-sm font-bold text-rose">{item.turkey}</div></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 rounded-lg border border-rose-500/30 bg-rose-500/10">
                    <p className="text-sm text-slate-300">Key Conflict Zones: Horn of Africa, Eastern Mediterranean, Libya, Sudan</p>
                    <p className="text-xs text-slate-400 mt-2 italic">"Turkey&apos;s soft power and development aid contrasts with the UAE&apos;s economic and security-focused projection."</p>
                  </div>
                </CardContent>
              </Card>

              {/* UAE vs Egypt */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-gold" />
                    UAE vs Egypt
                  </CardTitle>
                  <CardDescription>Medium relevance - Population leverage, regional media influence</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { metric: 'Military Budget', uae: '$24.4B', egypt: '$6B', note: 'UAE 4x larger' },
                      { metric: 'Active Personnel', uae: '150,000', egypt: '438,500', note: 'Egypt 2.9x larger' },
                      { metric: 'Tanks', uae: '354', egypt: '3,610', note: 'Egypt 10x larger' },
                      { metric: 'Total Aircraft', uae: '518', egypt: '854', note: 'Egypt 65% larger' },
                      { metric: 'Submarines', uae: '0', egypt: '8', note: 'Egypt has subs' },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30">
                        <span className="text-sm font-medium text-slate-200">{row.metric}</span>
                        <div className="flex gap-4 items-center">
                          <div className="text-center"><div className="text-xs text-slate-400">UAE</div><div className="text-sm font-bold text-emerald-400">{row.uae}</div></div>
                          <div className="text-center"><div className="text-xs text-slate-400">Egypt</div><div className="text-sm font-bold text-gold">{row.egypt}</div></div>
                          <div className="text-xs text-slate-400 max-w-[100px]">{row.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Tech Tab */}
        <TabsContent value="tech" className="space-y-6">
          <GlassPanel
            title="Tech & Innovation Competition"
            description="UAE vs Israel - Tech innovation, Abraham Accords partnerships"
          >
            <div className="space-y-6">
              {/* Israeli Tech Stats */}
              <Card className="glass-card border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-emerald" />
                    Israeli Tech Ecosystem
                  </CardTitle>
                  <CardDescription>Source: startupnationcentral.org (WebFetch Verified)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    {[
                      { label: 'Startups on Finder', value: '7,200+' },
                      { label: 'VC Funds (roadshow)', value: '7' },
                      { label: 'MNCs in Israeli R&D', value: '430+' },
                      { label: 'Grant Matching Growth', value: '500%' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-emerald/30 bg-emerald/10 p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-emerald">{item.value}</div>
                        <div className="text-xs text-slate-400 mt-1">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE vs Israel Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Comparative Positioning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10">
                      <h4 className="font-semibold text-emerald mb-3">UAE Advantages</h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-slate-300 flex items-center gap-2"><CheckCircle className="h-3 w-3 text-emerald" /> Scale, adoption speed</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><CheckCircle className="h-3 w-3 text-emerald" /> Regulatory clarity</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><CheckCircle className="h-3 w-3 text-emerald" /> Tax efficiency</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><CheckCircle className="h-3 w-3 text-emerald" /> Business environment ranking</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-navy-500/30 bg-navy-500/10">
                      <h4 className="font-semibold text-navy-400 mb-3">Israel Advantages</h4>
                      <ul className="space-y-2">
                        <li className="text-sm text-slate-300 flex items-center gap-2"><CheckCircle className="h-3 w-3 text-navy" /> Deep-tech expertise</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><CheckCircle className="h-3 w-3 text-navy" /> Cybersecurity leadership</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><CheckCircle className="h-3 w-3 text-navy" /> Innovation ecosystem maturity</li>
                        <li className="text-sm text-slate-300 flex items-center gap-2"><CheckCircle className="h-3 w-3 text-navy" /> Blockchain, AI, quantum</li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 mt-4">
                    <p className="text-sm text-slate-300">Post-Abraham Accords: Israeli companies expanding to UAE for lower taxes, fast setup, global talent access. Both leaders in water technology (desalination, recycling).</p>
                  </div>
                </CardContent>
              </Card>

              {/* Global Innovation Index */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Global Innovation Index 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-emerald-400">32nd</div>
                      <div className="text-sm text-slate-400 mt-1">UAE Ranking</div>
                    </div>
                    <div className="text-slate-500">vs</div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-navy">Higher</div>
                      <div className="text-sm text-slate-400 mt-1">Israel (deep-tech focus)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Intel Matrix Tab */}
        <TabsContent value="matrix" className="space-y-6">
          <GlassPanel
            title="Competitive Intelligence Matrix"
            description="Comprehensive cross-competitor analysis with UAE advantages and battlegrounds"
          >
            <div className="space-y-6">
              {/* Competitor Relevance Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gold" />
                    Competitor Relevance Matrix
                  </CardTitle>
                  <CardDescription>14 competitors across 4 relevance tiers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {ciRelevanceMat.map((comp, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-sm font-medium text-slate-200 w-32">{comp.competitor}</div>
                            <div className="text-xs text-slate-400 flex-1">{comp.rationale}</div>
                          </div>
                          {getRelevanceBadge(comp.uaeRelevance)}
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Competitive Intel Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-navy" />
                    Competitive Intelligence Matrix
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {competitiveIntelMatrix.map((row, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-slate-200">{row.competitor}</span>
                              {getRelevanceBadge(row.relevance)}
                            </div>
                            <span className="text-xs text-slate-500">Battleground: {row.keyBattleground}</span>
                          </div>
                          <div className="grid gap-2 sm:grid-cols-2 mt-2">
                            <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30">
                              <div className="text-xs text-emerald-400 mb-1">UAE Advantage</div>
                              <div className="text-xs text-slate-300">{row.uaeAdvantage}</div>
                            </div>
                            <div className="p-2 rounded bg-rose-500/10 border border-rose-500/30">
                              <div className="text-xs text-rose-400 mb-1">Competitor Advantage</div>
                              <div className="text-xs text-slate-300">{row.competitorAdvantage}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Contested Narratives */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose" />
                    Contested Narratives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {contestedNarratives.map((narrative, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-3 rounded-lg border border-rose-500/30 bg-rose-500/10"
                      >
                        <p className="text-sm text-slate-300">{narrative}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Competitor Vulnerabilities */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-gold" />
                    Competitor Vulnerabilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-2">
                      {competitorVulnerabilities.map((vuln, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <div>
                            <span className="text-sm font-medium text-slate-200">{vuln.competitor}</span>
                            <p className="text-xs text-slate-400 mt-1">{vuln.vulnerability}</p>
                          </div>
                          <Badge className={`text-xs ${
                            vuln.severity === 'High' || vuln.severity === 'Medium-High' ?
                            'bg-rose-500/20 text-rose-400 border-rose-500/50' :
                            'bg-gold-500/20 text-gold-400 border-gold-500/50'
                          }`}>
                            {vuln.severity}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Monitoring Query Priorities */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Radar className="h-5 w-5 text-navy" />
                    Competitor Monitoring Priorities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {competitorMonitoringQueries.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-500/20 text-sm font-bold text-navy">
                            {item.priority}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-slate-200">{item.competitor}</div>
                            <div className="text-xs text-slate-400">{item.keyMetrics}</div>
                          </div>
                          <Badge className="text-xs bg-navy-500/20 text-navy-400 border-navy-500/50">{item.frequency}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Key Indices */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-gold" />
                    Key Indices Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {ciKeyIndices.map((idx_item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <div>
                          <span className="text-sm font-medium text-slate-200">{idx_item.index}</span>
                          <span className="text-xs text-slate-400 ml-2">({idx_item.publisher})</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-emerald-400">{idx_item.uaeScoreRank}</div>
                          <div className="text-xs text-slate-400">{idx_item.notes}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sovereign Nations Registry */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-navy" />
                    Sovereign Nations Registry
                  </CardTitle>
                  <CardDescription>15 nations tracked in competitive intelligence framework</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {ciSovereign.map((nation, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          className="p-2 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400">{nation.isoCode}</span>
                            <span className="text-xs font-medium text-slate-200">{nation.entity}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            {getRelevanceBadge(nation.uaeRelevance)}
                            <span className="text-xs text-slate-500">{nation.classification}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Organizations Registry */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-gold" />
                    Organizations Registry
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {ciOrgs.map((org, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className="flex items-center justify-between p-2 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <div>
                            <span className="text-sm font-medium text-slate-200">{org.entity}</span>
                            <span className="text-xs text-slate-500 ml-2">({org.type})</span>
                          </div>
                          <Badge className={`text-xs ${
                            org.uaeConnection === 'Leader' || org.uaeConnection === 'Primary' ?
                            'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                            org.uaeConnection === 'Rival' || org.uaeConnection === 'Competitor' ?
                            'bg-rose-500/20 text-rose-400 border-rose-500/50' :
                            'bg-slate-500/20 text-slate-400 border-slate-500/50'
                          }`}>
                            {org.uaeConnection}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
