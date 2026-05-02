// @ts-nocheck
'use client'

/**
 * Narrative Tracking Dashboard Page
 * UAE NDIP — Perception-X2 Module
 *
 * Comprehensive tracking of 12 core UAE narratives with pro/counter evidence,
 * sentiment analysis, data tables, source credibility, and key tensions.
 * Source: 3-4-narrative-tracking-results.md
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassCard, GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Shield,
  Scale,
  MessageSquare,
  BarChart3,
  Activity,
  AlertCircle,
  BookOpen,
  Flag,
  Database,
  Target,
  Eye,
  Lightbulb,
  Users,
  FileText,
  ChevronRight,
  Layers,
  Link2,
} from 'lucide-react'
import { useNarrativeTrackingData } from '@/lib/data-loader/hooks'

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
  rest: { scale: 1, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
  hover: {
    scale: 1.02,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 },
  },
}

// Framing badge variant helper
function getFramingVariant(framing: string) {
  if (framing === 'PRO-NARRATIVE') return 'success'
  if (framing === 'COUNTER-NARRATIVE') return 'destructive'
  return 'warning'
}

// Relevance badge variant helper
function getRelevanceVariant(relevance: string) {
  if (relevance === 'Critical') return 'destructive'
  if (relevance === 'High') return 'warning'
  return 'secondary'
}

// Chart color palette (no raw blue/green/slate)
const CHART_PALETTE = {
  positive: CHART_COLORS.emerald,
  negative: CHART_COLORS.rose,
  neutral: CHART_COLORS.platinum,
  gold: CHART_COLORS.gold,
  indigo: CHART_COLORS.indigo,
  purple: CHART_COLORS.purple,
  cyan: CHART_COLORS.cyan,
  teal: CHART_COLORS.teal,
  red: CHART_COLORS.red,
  orange: CHART_COLORS.orange,
}

export default function NarrativeTrackingPage() {
  const { data } = useNarrativeTrackingData()
  const [selectedNarrative, setSelectedNarrative] = useState<string | null>(null)

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-platinum-500 font-rajdhani">Loading narrative tracking data...</div>
      </div>
    )
  }

  const {
    executionMetadata,
    keyFindings,
    overallSentimentDistribution,
    uaeProfile,
    leadershipProfile,
    successStoryNarrative,
    safeHavenNarrative,
    tolerantNationNarrative,
    innovationHubNarrative,
    sportsPowerNarrative,
    humanRightsViolatorNarrative,
    regionalMediatorNarrative,
    climateLeaderNarrative,
    economicPowerhouseNarrative,
    lavishLifestyleNarrative,
    foreignPolicyAggressorNarrative,
    landOfOpportunityNarrative,
    allNarratives,
    dataTables,
    sourceCredibilityMatrix,
    sentimentDistributionByNarrative,
    keyTensions,
    monitoringRecommendations,
    summaryStatistics,
  } = data

  // Key metrics cards
  const keyMetrics = [
    {
      title: 'Total Narratives',
      value: '12',
      icon: <MessageSquare className="h-6 w-6" />,
      gradient: 'gold' as const,
      status: 'info' as const,
    },
    {
      title: 'Queries Executed',
      value: String(executionMetadata.queriesExecuted),
      icon: <Database className="h-6 w-6" />,
      gradient: 'navy' as const,
      status: 'info' as const,
    },
    {
      title: 'Pages Fetched',
      value: String(executionMetadata.pagesFetched),
      icon: <FileText className="h-6 w-6" />,
      gradient: 'emerald' as const,
      status: 'info' as const,
    },
    {
      title: 'Critical Tensions',
      value: String(keyTensions.length),
      icon: <AlertTriangle className="h-6 w-6" />,
      gradient: 'rose' as const,
      status: 'warning' as const,
    },
  ]

  // Framing distribution
  const proCount = keyFindings.filter(f => f.dominantFraming === 'PRO-NARRATIVE').length
  const contestedCount = keyFindings.filter(f => f.dominantFraming === 'CONTESTED').length
  const counterCount = keyFindings.filter(f => f.dominantFraming === 'COUNTER-NARRATIVE').length

  const framingData = [
    { name: 'Pro-Narrative', value: proCount, color: CHART_PALETTE.emerald },
    { name: 'Contested', value: contestedCount, color: CHART_PALETTE.gold },
    { name: 'Counter-Narrative', value: counterCount, color: CHART_PALETTE.rose },
  ]

  // Relevance distribution
  const criticalCount = keyFindings.filter(f => f.uaeRelevance === 'Critical').length
  const highCount = keyFindings.filter(f => f.uaeRelevance === 'High').length
  const mediumCount = keyFindings.filter(f => f.uaeRelevance === 'Medium').length

  const relevanceData = [
    { name: 'Critical', value: criticalCount, color: CHART_PALETTE.rose },
    { name: 'High', value: highCount, color: CHART_PALETTE.gold },
    { name: 'Medium', value: mediumCount, color: CHART_PALETTE.emerald },
  ]

  // Sentiment pie data
  const sentimentPieData = [
    { name: 'Positive', value: overallSentimentDistribution.positive, color: CHART_PALETTE.emerald },
    { name: 'Neutral', value: overallSentimentDistribution.neutralContextual, color: CHART_PALETTE.platinum },
    { name: 'Negative', value: overallSentimentDistribution.negative, color: CHART_PALETTE.rose },
  ]

  // Source analysis bar data
  const sourceAnalysisData = keyFindings.map(f => ({
    name: f.narrative.length > 18 ? f.narrative.substring(0, 18) + '...' : f.narrative,
    pro: f.proSources,
    counter: f.counterSources,
  }))

  // Narrative detail renderers
  const narrativeMap: Record<string, any> = {
    'success-story': successStoryNarrative,
    'safe-haven': safeHavenNarrative,
    'tolerant-nation': tolerantNationNarrative,
    'innovation-hub': innovationHubNarrative,
    'sports-power': sportsPowerNarrative,
    'human-rights-violator': humanRightsViolatorNarrative,
    'regional-mediator': regionalMediatorNarrative,
    'climate-leader': climateLeaderNarrative,
    'economic-powerhouse': economicPowerhouseNarrative,
    'lavish-lifestyle': lavishLifestyleNarrative,
    'foreign-policy-aggressor': foreignPolicyAggressorNarrative,
    'land-of-opportunity': landOfOpportunityNarrative,
  }

  const selectedData = selectedNarrative ? narrativeMap[selectedNarrative] : null

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">NARRATIVE TRACKING</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">
            UAE Narrative Intelligence
          </h1>
          <p className="mt-2 text-platinum-400 font-rajdhani">
            Single Source of Truth for 12 core UAE narratives — tracking pro vs counter evidence, sentiment, and key tensions
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <BookOpen className="h-4 w-4" />
            Research Mode
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Threat Center
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {keyMetrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <MetricCard
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              gradient={metric.gradient}
              status={metric.status}
            />
          </motion.div>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="narratives">12 Narratives</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="tables">Data Tables</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="tensions">Key Tensions</TabsTrigger>
        </TabsList>

        {/* ========== OVERVIEW TAB ========== */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Overall Sentiment */}
            <GlassPanel title="Overall Sentiment Distribution" description="Global coverage sentiment breakdown">
              <div className="flex items-center justify-center">
                <PieChart
                  data={sentimentPieData}
                  height={220}
                  innerRadius={55}
                  outerRadius={90}
                />
              </div>
              <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="text-sm text-platinum-400 font-rajdhani">Positive {overallSentimentDistribution.positive}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-platinum-400" />
                  <span className="text-sm text-platinum-400 font-rajdhani">Neutral {overallSentimentDistribution.neutralContextual}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="text-sm text-platinum-400 font-rajdhani">Negative {overallSentimentDistribution.negative}%</span>
                </div>
              </div>
            </GlassPanel>

            {/* Framing Distribution */}
            <GlassPanel title="Narrative Framing Distribution" description="Pro-narrative vs contested vs counter">
              <div className="flex items-center justify-center">
                <PieChart
                  data={framingData}
                  height={220}
                  innerRadius={55}
                  outerRadius={90}
                />
              </div>
              <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="text-sm text-platinum-400 font-rajdhani">Pro: {proCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gold-500" />
                  <span className="text-sm text-platinum-400 font-rajdhani">Contested: {contestedCount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="text-sm text-platinum-400 font-rajdhani">Counter: {counterCount}</span>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* Source Analysis */}
          <GlassPanel title="Pro vs Counter Sources by Narrative" description="Source count comparison across all 12 narratives">
            <BarChart
              data={sourceAnalysisData}
              height={300}
              showGrid={true}
              bars={[
                { dataKey: 'pro', name: 'Pro Sources', color: CHART_COLORS.emerald },
                { dataKey: 'counter', name: 'Counter Sources', color: CHART_COLORS.rose },
              ]}
            />
          </GlassPanel>

          {/* UAE Profile */}
          <GlassPanel title="UAE Profile - Core Data" description="Basic facts and statistics">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-1">
                <p className="text-xs text-platinum-500 font-rajdhani">Official Name</p>
                <p className="text-sm font-semibold font-rajdhani text-platinum-900">{uaeProfile.officialName}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500 font-rajdhani">Population</p>
                <p className="text-sm font-semibold font-rajdhani text-platinum-900">{uaeProfile.population}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500 font-rajdhani">GDP (Nominal 2025)</p>
                <p className="text-sm font-semibold font-rajdhani text-platinum-900">{uaeProfile.gdpNominal2025}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500 font-rajdhani">System</p>
                <p className="text-sm font-semibold font-rajdhani text-platinum-900">Federal monarchy</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500 font-rajdhani">President</p>
                <p className="text-sm font-semibold font-rajdhani text-platinum-900">Mohamed bin Zayed Al Nahyan</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500 font-rajdhani">GDP per Capita</p>
                <p className="text-sm font-semibold font-rajdhani text-platinum-900">{uaeProfile.gdpPerCapitaNominal}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500 font-rajdhani">Literacy Rate</p>
                <p className="text-sm font-semibold font-rajdhani text-platinum-900">{uaeProfile.literacyRate}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500 font-rajdhani">Nationalities</p>
                <p className="text-sm font-semibold font-rajdhani text-platinum-900">{uaeProfile.nationalitiesPresent}</p>
              </div>
            </div>
          </GlassPanel>

          {/* Summary Statistics */}
          <GlassPanel title="Summary Statistics" description="Research execution metrics">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-emerald-600">{summaryStatistics.totalQueriesExecuted}</p>
                <p className="text-xs text-platinum-500 font-rajdhani">Queries Executed</p>
              </div>
              <div className="text-center p-4 bg-gold-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-gold-600">{summaryStatistics.totalPagesFetched}</p>
                <p className="text-xs text-platinum-500 font-rajdhani">Pages Fetched</p>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-indigo-600">{summaryStatistics.totalNarrativesCovered}</p>
                <p className="text-xs text-platinum-500 font-rajdhani">Narratives Covered</p>
              </div>
              <div className="text-center p-4 bg-rose-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-rose-600">{summaryStatistics.totalSourceUrlsAccessed}</p>
                <p className="text-xs text-platinum-500 font-rajdhani">Source URLs</p>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* ========== NARRATIVES TAB ========== */}
        <TabsContent value="narratives" className="space-y-6">
          {/* Narrative Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {keyFindings.map((finding, idx) => (
              <motion.div
                key={idx}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                <GlassCard
                  hover
                  className="h-full cursor-pointer"
                  onClick={() => setSelectedNarrative(selectedNarrative === allNarratives[idx].id ? null : allNarratives[idx].id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Badge
                      variant={getFramingVariant(finding.dominantFraming)}
                      className="font-rajdhani text-xs"
                    >
                      {finding.dominantFraming}
                    </Badge>
                    <Badge
                      variant={getRelevanceVariant(finding.uaeRelevance)}
                      className="font-rajdhani text-xs"
                    >
                      {finding.uaeRelevance}
                    </Badge>
                  </div>
                  <h3 className="font-rajdhani font-semibold text-lg text-platinum-900 mb-2">
                    {finding.narrative}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                      <span className="text-platinum-600 font-rajdhani">{finding.proSources} Pro</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4 text-rose-500" />
                      <span className="text-platinum-600 font-rajdhani">{finding.counterSources} Counter</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Selected Narrative Detail */}
          {selectedData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <GlassPanel
                title={keyFindings.find(f => narrativeMap[Object.keys(narrativeMap).find(k => narrativeMap[k] === selectedData)]?.narrative === f.narrative)?.narrative || 'Narrative Detail'}
                description={selectedData.description}
              >
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Pro-Narrative Evidence */}
                  <div className="space-y-3">
                    <h4 className="font-rajdhani font-semibold text-emerald-700 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Pro-Narrative Evidence
                    </h4>
                    {renderProEvidence(selectedData)}
                  </div>
                  {/* Counter-Narrative Evidence */}
                  <div className="space-y-3">
                    <h4 className="font-rajdhani font-semibold text-rose-700 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Counter-Narrative Evidence
                    </h4>
                    {renderCounterEvidence(selectedData)}
                  </div>
                </div>
                {/* Sentiment and Relevance Footer */}
                <div className="mt-6 pt-4 border-t border-platinum-200 grid gap-4 md:grid-cols-3">
                  <div className="text-center">
                    <p className="text-xs text-platinum-500 font-rajdhani">Sentiment</p>
                    <p className="text-sm font-semibold font-rajdhani text-platinum-900">{selectedData.sentiment?.overall || 'N/A'}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-platinum-500 font-rajdhani">UAE Relevance</p>
                    <p className="text-sm font-semibold font-rajdhani text-platinum-900">{selectedData.uaeRelevance || 'N/A'}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-platinum-500 font-rajdhani">Key Tension</p>
                    <p className="text-sm font-semibold font-rajdhani text-platinum-900 truncate" title={selectedData.sentiment?.keyTension}>
                      {selectedData.sentiment?.keyTension ? selectedData.sentiment.keyTension.substring(0, 40) + '...' : 'N/A'}
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          )}

          {/* Narrative Cards Summary */}
          <div className="grid gap-6">
            {allNarratives.map((narrative, idx) => (
              <GlassCard key={idx} hover>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={getFramingVariant(keyFindings[idx].dominantFraming)} className="font-rajdhani text-xs">
                        {keyFindings[idx].dominantFraming}
                      </Badge>
                      <Badge variant={getRelevanceVariant(keyFindings[idx].uaeRelevance)} className="font-rajdhani text-xs">
                        {keyFindings[idx].uaeRelevance}
                      </Badge>
                    </div>
                    <h3 className="font-rajdhani font-semibold text-lg text-platinum-900 mb-1">{narrative.name}</h3>
                    <p className="text-sm text-platinum-600 font-rajdhani line-clamp-2">
                      {narrativeMap[narrative.id]?.description || 'No description available'}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 ml-4">
                    <div className="text-center">
                      <div className="flex items-center gap-1 justify-end">
                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                        <span className="text-lg font-bold font-rajdhani text-emerald-600">{keyFindings[idx].proSources}</span>
                      </div>
                      <p className="text-xs text-platinum-500 font-rajdhani">Pro</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 justify-end">
                        <AlertTriangle className="h-4 w-4 text-rose-500" />
                        <span className="text-lg font-bold font-rajdhani text-rose-600">{keyFindings[idx].counterSources}</span>
                      </div>
                      <p className="text-xs text-platinum-500 font-rajdhani">Counter</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>

        {/* ========== SENTIMENT TAB ========== */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Distribution by Narrative" description="Positive, neutral, and negative coverage percentages">
            <BarChart
              data={sentimentDistributionByNarrative.map(s => ({
                name: s.narrative.length > 16 ? s.narrative.substring(0, 16) + '...' : s.narrative,
                positive: s.positive,
                neutral: s.neutral,
                negative: s.negative,
              }))}
              height={400}
              showGrid={true}
              horizontal={true}
              stacked={true}
              bars={[
                { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.platinum },
                { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
              ]}
            />
          </GlassPanel>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Narrative Dominance */}
            <GlassPanel title="Narrative Source Dominance" description="Pro vs counter sources per narrative">
              <BarChart
                data={sourceAnalysisData}
                height={300}
                showGrid={true}
                bars={[
                  { dataKey: 'pro', name: 'Pro Sources', color: CHART_COLORS.emerald },
                  { dataKey: 'counter', name: 'Counter Sources', color: CHART_COLORS.rose },
                ]}
              />
            </GlassPanel>

            {/* Framing + Relevance */}
            <GlassPanel title="Framing & Relevance Distribution" description="Overall narrative health assessment">
              <div className="flex items-center justify-center">
                <PieChart
                  data={framingData}
                  height={220}
                  innerRadius={55}
                  outerRadius={90}
                />
              </div>
              <div className="mt-4 space-y-3">
                {framingData.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-platinum-600 font-rajdhani">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold font-rajdhani text-platinum-900">{item.value} narratives</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-platinum-200">
                <p className="text-xs text-platinum-500 font-rajdhani mb-3">UAE Relevance Distribution</p>
                {relevanceData.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm text-platinum-600 font-rajdhani">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold font-rajdhani text-platinum-900">{item.value} narratives</span>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* ========== DATA TABLES TAB ========== */}
        <TabsContent value="tables" className="space-y-6">
          <Tabs defaultValue="economic" className="space-y-4">
            <TabsList className="glass-panel" scrollable>
              <TabsTrigger value="economic">Economic Indicators</TabsTrigger>
              <TabsTrigger value="rights">Human Rights</TabsTrigger>
              <TabsTrigger value="rankings">Global Rankings</TabsTrigger>
              <TabsTrigger value="cop28">COP28 Stats</TabsTrigger>
              <TabsTrigger value="slavery">Modern Slavery</TabsTrigger>
            </TabsList>

            <TabsContent value="economic">
              <GlassPanel title="UAE Economic Indicators" description="GDP, growth, per capita, and labor market data">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-rajdhani">
                    <thead>
                      <tr className="border-b border-platinum-200">
                        <th className="text-left py-3 px-4 text-platinum-500 font-medium">Indicator</th>
                        <th className="text-center py-3 px-4 text-platinum-500 font-medium">2022</th>
                        <th className="text-center py-3 px-4 text-platinum-500 font-medium">2023</th>
                        <th className="text-center py-3 px-4 text-platinum-500 font-medium">2024</th>
                        <th className="text-center py-3 px-4 text-platinum-500 font-medium">2025 (est.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTables.uaeEconomicIndicators.map((row, idx) => (
                        <tr key={idx} className="border-b border-platinum-100 hover:bg-platinum-50">
                          <td className="py-3 px-4 text-platinum-700 font-medium">{row.indicator}</td>
                          <td className="py-3 px-4 text-center text-platinum-600">{row[2022]}</td>
                          <td className="py-3 px-4 text-center text-platinum-600">{row[2023]}</td>
                          <td className="py-3 px-4 text-center text-platinum-600">{row[2024]}</td>
                          <td className="py-3 px-4 text-center text-platinum-600">{row['2025 (est.)']}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassPanel>
            </TabsContent>

            <TabsContent value="rights">
              <GlassPanel title="Human Rights Scores" description="Freedom House and civil liberties ratings">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-rajdhani">
                    <thead>
                      <tr className="border-b border-platinum-200">
                        <th className="text-left py-3 px-4 text-platinum-500 font-medium">Index</th>
                        <th className="text-center py-3 px-4 text-platinum-500 font-medium">Score</th>
                        <th className="text-center py-3 px-4 text-platinum-500 font-medium">Max</th>
                        <th className="text-center py-3 px-4 text-platinum-500 font-medium">Rating</th>
                        <th className="text-center py-3 px-4 text-platinum-500 font-medium">Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTables.humanRightsScores.map((row, idx) => (
                        <tr key={idx} className="border-b border-platinum-100 hover:bg-platinum-50">
                          <td className="py-3 px-4 text-platinum-700 font-medium">{row.index}</td>
                          <td className="py-3 px-4 text-center">
                            <Badge variant={row.score < 30 ? 'destructive' : row.score < 60 ? 'warning' : 'secondary'} className="font-rajdhani">
                              {row.score}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-center text-platinum-600">{row.max}</td>
                          <td className="py-3 px-4 text-center text-platinum-600">{row.rating}</td>
                          <td className="py-3 px-4 text-center text-platinum-600">{row.year}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassPanel>
            </TabsContent>

            <TabsContent value="rankings">
              <div className="grid gap-6 lg:grid-cols-2">
                <GlassPanel title="Global Rankings" description="UAE position in international indices">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm font-rajdhani">
                      <thead>
                        <tr className="border-b border-platinum-200">
                          <th className="text-left py-3 px-4 text-platinum-500 font-medium">Index</th>
                          <th className="text-center py-3 px-4 text-platinum-500 font-medium">Rank</th>
                          <th className="text-center py-3 px-4 text-platinum-500 font-medium">Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataTables.globalRankings.map((row, idx) => (
                          <tr key={idx} className="border-b border-platinum-100 hover:bg-platinum-50">
                            <td className="py-3 px-4 text-platinum-700 font-medium">{row.index}</td>
                            <td className="py-3 px-4 text-center">
                              <Badge variant="success" className="font-rajdhani">{row.rank}</Badge>
                            </td>
                            <td className="py-3 px-4 text-center text-platinum-600">{row.year}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </GlassPanel>
                <GlassPanel title="Regional Rankings" description="UAE position in Middle East">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm font-rajdhani">
                      <thead>
                        <tr className="border-b border-platinum-200">
                          <th className="text-left py-3 px-4 text-platinum-500 font-medium">Index</th>
                          <th className="text-center py-3 px-4 text-platinum-500 font-medium">Rank</th>
                          <th className="text-center py-3 px-4 text-platinum-500 font-medium">Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataTables.regionalRankings.map((row, idx) => (
                          <tr key={idx} className="border-b border-platinum-100 hover:bg-platinum-50">
                            <td className="py-3 px-4 text-platinum-700 font-medium">{row.index}</td>
                            <td className="py-3 px-4 text-center">
                              <Badge variant="success" className="font-rajdhani">{row.rank}</Badge>
                            </td>
                            <td className="py-3 px-4 text-center text-platinum-600">{row.year}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </GlassPanel>
              </div>
            </TabsContent>

            <TabsContent value="cop28">
              <GlassPanel title="COP28 Statistics" description="UAE Climate Conference metrics">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-rajdhani">
                    <thead>
                      <tr className="border-b border-platinum-200">
                        <th className="text-left py-3 px-4 text-platinum-500 font-medium">Metric</th>
                        <th className="text-center py-3 px-4 text-platinum-500 font-medium">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTables.cop28Statistics.map((row, idx) => (
                        <tr key={idx} className="border-b border-platinum-100 hover:bg-platinum-50">
                          <td className="py-3 px-4 text-platinum-700 font-medium">{row.metric}</td>
                          <td className="py-3 px-4 text-center">
                            <Badge variant="warning" className="font-rajdhani">{row.value}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassPanel>
            </TabsContent>

            <TabsContent value="slavery">
              <GlassPanel title="Modern Slavery Data" description="Walk Free Foundation estimates for UAE">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-rajdhani">
                    <thead>
                      <tr className="border-b border-platinum-200">
                        <th className="text-left py-3 px-4 text-platinum-500 font-medium">Metric</th>
                        <th className="text-center py-3 px-4 text-platinum-500 font-medium">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataTables.modernSlaveryData.map((row, idx) => (
                        <tr key={idx} className="border-b border-platinum-100 hover:bg-platinum-50">
                          <td className="py-3 px-4 text-platinum-700 font-medium">{row.metric}</td>
                          <td className="py-3 px-4 text-center">
                            <Badge variant="destructive" className="font-rajdhani">{row.value}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassPanel>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* ========== SOURCES TAB ========== */}
        <TabsContent value="sources" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Tier 1 */}
            <GlassPanel title="Tier 1: Government & Official" description="High credibility sources">
              <div className="space-y-3">
                {sourceCredibilityMatrix.tier1.map((source, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <div>
                      <span className="font-rajdhani font-medium text-platinum-900">{source.source}</span>
                      <span className="text-xs text-platinum-500 ml-2 font-rajdhani">({source.type})</span>
                    </div>
                    <Badge variant="success" className="font-rajdhani">{source.credibility}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Tier 2 */}
            <GlassPanel title="Tier 2: NGOs & Think Tanks" description="Human rights and policy organizations">
              <div className="space-y-3">
                {sourceCredibilityMatrix.tier2.slice(0, 7).map((source, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gold-50 rounded-lg">
                    <div>
                      <span className="font-rajdhani font-medium text-platinum-900">{source.source}</span>
                      <span className="text-xs text-platinum-500 ml-2 font-rajdhani">({source.type})</span>
                    </div>
                    <Badge variant="warning" className="font-rajdhani">{source.credibility}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Tier 3 */}
            <GlassPanel title="Tier 3: Academic & Social" description="Variable credibility sources">
              <div className="space-y-3">
                {sourceCredibilityMatrix.tier3.map((source, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-platinum-50 rounded-lg">
                    <div>
                      <span className="font-rajdhani font-medium text-platinum-900">{source.source}</span>
                      <span className="text-xs text-platinum-500 ml-2 font-rajdhani">({source.type})</span>
                    </div>
                    <Badge variant="secondary" className="font-rajdhani">{source.credibility}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Tier 4 */}
            <GlassPanel title="Tier 4: News Media" description="Media outlets and journalism">
              <div className="space-y-3">
                {sourceCredibilityMatrix.tier4.map((source, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-platinum-50 rounded-lg">
                    <span className="font-rajdhani font-medium text-platinum-900">{source.source}</span>
                    <Badge variant="outline" className="font-rajdhani">{source.credibility}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Source Stats */}
          <GlassPanel title="Source Distribution" description="Summary of sources analyzed">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-emerald-600">{summaryStatistics.governmentOfficialSources}</p>
                <p className="text-xs text-platinum-500 font-rajdhani">Government/Official</p>
              </div>
              <div className="text-center p-4 bg-gold-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-gold-600">{summaryStatistics.ngoHumanRightsSources}</p>
                <p className="text-xs text-platinum-500 font-rajdhani">NGO/Human Rights</p>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-indigo-600">{summaryStatistics.mediaSources}</p>
                <p className="text-xs text-platinum-500 font-rajdhani">Media</p>
              </div>
              <div className="text-center p-4 bg-platinum-50 rounded-lg">
                <p className="text-2xl font-bold font-rajdhani text-platinum-600">{summaryStatistics.academicThinkTankSources}</p>
                <p className="text-xs text-platinum-500 font-rajdhani">Academic/Think Tank</p>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* ========== TENSIONS TAB ========== */}
        <TabsContent value="tensions" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {keyTensions.map((tension, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard hover className="h-full">
                  <div className="flex items-start justify-between mb-3">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    <Badge variant="destructive" className="font-rajdhani text-xs">Critical</Badge>
                  </div>
                  <h3 className="font-rajdhani font-semibold text-lg text-platinum-900 mb-3">
                    {tension.contradiction}
                  </h3>
                  <div className="space-y-2">
                    {tension.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                        <span className="text-platinum-600 font-rajdhani">{detail}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Monitoring Recommendations */}
          <GlassPanel title="Monitoring Recommendations" description="High-priority areas for ongoing tracking">
            <div className="space-y-4">
              {monitoringRecommendations.map((rec, idx) => (
                <div key={idx} className="p-4 bg-platinum-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={rec.priority === 'High' ? 'destructive' : 'warning'} className="font-rajdhani text-xs">
                      {rec.priority}
                    </Badge>
                    <h4 className="font-rajdhani font-semibold text-platinum-900">{rec.topic}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {rec.items.map((item, iIdx) => (
                      <span key={iIdx} className="text-xs text-platinum-600 bg-platinum-100 px-2 py-1 rounded font-rajdhani">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-platinum-500">
        <span className="font-rajdhani">Data Source: 3-4-narrative-tracking-results.md</span>
        <span className="font-rajdhani">Executed: {executionMetadata.dateExecuted} | Framework: {executionMetadata.frameworkVersion}</span>
      </div>
    </div>
  )
}

// ============================================================================
// HELPER RENDERERS
// ============================================================================

function renderProEvidence(data: any) {
  if (!data.proNarrative) return <p className="text-sm text-platinum-500 font-rajdhani">No pro-narrative data available.</p>

  const pro = data.proNarrative

  return (
    <div className="space-y-2 max-h-80 overflow-y-auto">
      {/* Economic transformation */}
      {pro.economicTransformation?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Economic Data</p>
          {pro.economicTransformation.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.metric || item.achievement || item.initiative || item.commitment || item.sport || item.facility || item.platform || item.element || item.conflict || item.metric || item.threat || item.issue || item.contradiction || 'Item'}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.value || item.details || item.target || item.year || item.tender || item.score || item.status || item.evidence || item.event || String(item.quantity || item.netWorth || item.jobCount || '')}</span>
            </div>
          ))}
        </div>
      )}

      {/* Milestones */}
      {pro.milestones?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Milestones</p>
          {pro.milestones.slice(0, 4).map((m: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-emerald-50 rounded mb-1">
              <CheckCircle className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-platinum-600 font-rajdhani">{m}</span>
            </div>
          ))}
        </div>
      )}

      {/* Human development */}
      {pro.humanDevelopment?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Human Development</p>
          {pro.humanDevelopment.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.metric}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.value} {item.improvement ? `(${item.improvement})` : ''}</span>
            </div>
          ))}
        </div>
      )}

      {/* Space achievements */}
      {pro.spaceProgram?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Space Program</p>
          {pro.spaceProgram.slice(0, 3).map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.achievement || item.details}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.year || item.details}</span>
            </div>
          ))}
        </div>
      )}

      {/* Stability metrics */}
      {pro.stabilityMetrics?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Stability Metrics</p>
          {pro.stabilityMetrics.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.metric}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tolerance initiatives */}
      {pro.toleranceInitiatives?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Tolerance Initiatives</p>
          {pro.toleranceInitiatives.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.initiative}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.year}</span>
            </div>
          ))}
        </div>
      )}

      {/* Religious infrastructure */}
      {pro.religiousInfrastructure?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Religious Infrastructure</p>
          {pro.religiousInfrastructure.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.facility}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{String(item.quantity)}</span>
            </div>
          ))}
        </div>
      )}

      {/* Innovation rankings */}
      {pro.innovationRankings?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Innovation Rankings</p>
          {pro.innovationRankings.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.index}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.uaeRank}</span>
            </div>
          ))}
        </div>
      )}

      {/* Sports infrastructure */}
      {pro.sportsInfrastructure?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Sports Infrastructure</p>
          {pro.sportsInfrastructure.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.sport || item.sport}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.details}</span>
            </div>
          ))}
        </div>
      )}

      {/* Abu Dhabi Grand Prix */}
      {pro.abuDhabiGrandPrix?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Abu Dhabi Grand Prix</p>
          {pro.abuDhabiGrandPrix.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.metric}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* COP28 */}
      {pro.cop28Hosting?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">COP28 Hosting</p>
          {pro.cop28Hosting.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.metric}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* COP28 achievements */}
      {pro.cop28Achievements?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">COP28 Achievements</p>
          {pro.cop28Achievements.map((item: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-emerald-50 rounded mb-1">
              <CheckCircle className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-platinum-600 font-rajdhani">{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* Economic indicators */}
      {pro.economicIndicators?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Economic Indicators</p>
          {pro.economicIndicators.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.metric}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Trade data */}
      {pro.tradeData?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Trade Data</p>
          {pro.tradeData.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.metric}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Luxury infrastructure */}
      {pro.luxuryInfrastructure?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Luxury Infrastructure</p>
          {pro.luxuryInfrastructure.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.facility}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.rating}</span>
            </div>
          ))}
        </div>
      )}

      {/* Job market */}
      {pro.jobMarketData?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Job Market</p>
          {pro.jobMarketData.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.platform}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.jobCount}</span>
            </div>
          ))}
        </div>
      )}

      {/* Mediation achievements */}
      {pro.mediationAchievements?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Mediation Achievements</p>
          {pro.mediationAchievements.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between text-xs p-2 bg-emerald-50 rounded mb-1">
              <span className="text-platinum-600 font-rajdhani">{item.achievement}</span>
              <span className="font-semibold text-emerald-700 font-rajdhani">{item.year}</span>
            </div>
          ))}
        </div>
      )}

      {/* Claims */}
      {pro.claims?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Government Claims</p>
          {pro.claims.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-emerald-50 rounded mb-1">
              <CheckCircle className="h-3 w-3 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-600 font-rajdhani">{item.claim || item.commitment}</span>
                {item.details && <span className="text-platinum-500 font-rajdhani block">{item.details}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function renderCounterEvidence(data: any) {
  if (!data.counterNarrative) return <p className="text-sm text-platinum-500 font-rajdhani">No counter-narrative data available.</p>

  const counter = data.counterNarrative

  return (
    <div className="space-y-2 max-h-80 overflow-y-auto">
      {/* Issues list */}
      {counter.issues?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Key Issues</p>
          {counter.issues.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.issue || item.violation || item.threat || item.element || item.conflict || item.date || item.issue || item.controversy || item.contradiction || item.metric || 'Issue'}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.evidence || item.details || item.scale || item.value || ''}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mass trials */}
      {counter.massTrials?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Mass Trials</p>
          {counter.massTrials.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.trial}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.details} — {item.sentences}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Political prisoners */}
      {counter.politicalPrisoners?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Political Prisoners</p>
          {counter.politicalPrisoners.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.prisoner} ({item.nationality})</span>
                <span className="text-platinum-500 font-rajdhani block">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Torture documentation */}
      {counter.tortureDocumentation?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Torture Documentation</p>
          {counter.tortureDocumentation.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.method}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.details}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Freedom of speech restrictions */}
      {counter.freedomOfSpeechRestrictions?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Free Speech Restrictions</p>
          {counter.freedomOfSpeechRestrictions.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.restriction}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.details}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Worker rights violations */}
      {counter.workerRightsViolations?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Worker Rights Violations</p>
          {counter.workerRightsViolations.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.issue}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.details} ({item.scale})</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Regional tensions */}
      {counter.regionalTensions?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Regional Tensions (March-April 2026)</p>
          {counter.regionalTensions.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.threat}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.details} — {item.source}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Discrimination patterns */}
      {counter.discriminationPatterns?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Discrimination Patterns</p>
          {counter.discriminationPatterns.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.issue || item.violation}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.evidence || item.details}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Religious freedom restrictions */}
      {counter.religiousFreedomRestrictions?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Religious Freedom Restrictions</p>
          {counter.religiousFreedomRestrictions.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.violation}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.details} — {item.source}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Greenwashing evidence */}
      {counter.greenwashingEvidence?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Greenwashing Evidence</p>
          {counter.greenwashingEvidence.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.issue}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.evidence}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* COP28 controversies */}
      {counter.cop28Controversies?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">COP28 Controversies</p>
          {counter.cop28Controversies.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.controversy}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.details}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Infrastructure of intervention */}
      {counter.infrastructureOfIntervention?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Infrastructure of Intervention</p>
          {counter.infrastructureOfIntervention.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.element}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.details}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Regional conflict involvement */}
      {counter.regionalConflictInvolvement?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Regional Conflict Involvement</p>
          {counter.regionalConflictInvolvement.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.conflict}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.uaeRole} — {item.evidence}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Yemen involvement */}
      {counter.yemenInvolvement?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Yemen Involvement</p>
          {counter.yemenInvolvement.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.date}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.event}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sportswashing */}
      {counter.sportswashingExamples?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Sportswashing Examples</p>
          {counter.sportswashingExamples.map((item: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <span className="text-platinum-600 font-rajdhani">{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* Military profile */}
      {counter.militaryProfile?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Military Profile</p>
          {counter.militaryProfile.map((item: any, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-platinum-700 font-rajdhani font-medium">{item.element}</span>
                <span className="text-platinum-500 font-rajdhani block">{item.details}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Enforced disappearances */}
      {counter.enforcedDisappearances?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs text-platinum-500 font-rajdhani mb-1">Enforced Disappearances</p>
          {counter.enforcedDisappearances.map((item: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2 text-xs p-2 bg-rose-50 rounded mb-1">
              <AlertTriangle className="h-3 w-3 text-rose-500 mt-0.5 flex-shrink-0" />
              <span className="text-platinum-600 font-rajdhani">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
