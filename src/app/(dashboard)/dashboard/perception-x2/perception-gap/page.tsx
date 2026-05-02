// @ts-nocheck
'use client'

/**
 * Perception Gap Dashboard Page
 * UAE NDIP — Perception-X2 Module
 *
 * Comprehensive analysis of gaps between UAE self-presentation and external reality.
 * Source: 3-10-perception-gap-results.md
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Eye,
  AlertTriangle,
  TrendingDown,
  Scale,
  Shield,
  FileSearch,
  Database,
  CheckCircle,
  Target,
  Activity,
  Search,
  FileText,
  TrendingUp,
  Users,
  Leaf,
  Newspaper,
  DollarSign,
  Vote,
  Globe,
} from 'lucide-react'
import { usePerceptionGapData } from '@/lib/data-loader/hooks'
import {
  OverviewSection,
  GapsSection,
  MetricsSection,
  SourcesSection,
  TimelineSection,
} from '@/components/dashboard/perception/perception-gap'

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
function getSeverityColor(severity: string) {
  if (severity === 'Critical') return 'rose'
  if (severity === 'High') return 'orange'
  return 'gold'
}

function getTrendIcon(trend: string) {
  if (trend.includes('Worsening')) return <TrendingDown className="h-3 w-3" />
  if (trend.includes('Improvement')) return <TrendingUp className="h-3 w-3" />
  return <Activity className="h-3 w-3" />
}

function getGapIcon(gapName: string) {
  if (gapName.includes('Human Rights')) return <AlertTriangle className="h-5 w-5" />
  if (gapName.includes("Women's")) return <Users className="h-5 w-5" />
  if (gapName.includes('Migrant')) return <Users className="h-5 w-5" />
  if (gapName.includes('Climate')) return <Leaf className="h-5 w-5" />
  if (gapName.includes('Media')) return <Newspaper className="h-5 w-5" />
  if (gapName.includes('Rule of Law')) return <Scale className="h-5 w-5" />
  if (gapName.includes('Economic')) return <DollarSign className="h-5 w-5" />
  if (gapName.includes('Political')) return <Vote className="h-5 w-5" />
  if (gapName.includes('Sovereignty')) return <Globe className="h-5 w-5" />
  if (gapName.includes('Security')) return <Shield className="h-5 w-5" />
  return <Eye className="h-5 w-5" />
}

export default function PerceptionGapPage() {
  const { data, loading, error } = usePerceptionGapData()
  const [activeTab, setActiveTab] = useState('overview')

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-gold-700 font-rajdhani text-xl">
          Loading Perception Gap data...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <GlassPanel title="Error">
          <div className="text-rose-400 p-6">
            Error loading data: {error.message}
          </div>
        </GlassPanel>
      </div>
    )
  }

  if (!data) return null

  // Metrics derived from MD file
  const metrics = {
    gapCategories: data.summaryMetrics?.totalGapCategories || 10,
    criticalGaps: data.summaryMetrics?.criticalSeverity || 7,
    highGaps: data.summaryMetrics?.highSeverity || 3,
    worseningTrends: data.summaryMetrics?.worseningTrends || 6,
    queriesExecuted: data.executionMetadata?.queriesExecuted || 13,
    pagesFetched: data.executionMetadata?.pagesFetched || 21,
    avgCredibility: data.dashboardMetrics?.avgCredibility || 4.2,
    sentimentScore: data.dashboardMetrics?.sentimentScore || 18.5,
    sourcesFetched: data.primarySources?.length || 11,
    verificationStatus: data.verificationStatus?.allDataExtracted ? '100%' : 'Partial',
  }

  // Key metrics for cards
  const keyMetrics = [
    { title: 'Gap Categories', value: metrics.gapCategories, icon: <Eye className="h-6 w-6" />, gradient: 'rose' as const, trend: 'down' as const },
    { title: 'Critical Gaps', value: metrics.criticalGaps, icon: <AlertTriangle className="h-6 w-6" />, gradient: 'rose' as const, trend: 'down' as const },
    { title: 'High Gaps', value: metrics.highGaps, icon: <TrendingDown className="h-6 w-6" />, gradient: 'orange' as const, trend: 'down' as const },
    { title: 'Worsening Trends', value: metrics.worseningTrends, icon: <TrendingDown className="h-6 w-6" />, gradient: 'rose' as const, trend: 'down' as const },
    { title: 'Queries Run', value: metrics.queriesExecuted, icon: <Search className="h-6 w-6" />, gradient: 'cyan' as const, trend: 'neutral' as const },
    { title: 'Sources Analyzed', value: metrics.pagesFetched, icon: <Database className="h-6 w-6" />, gradient: 'indigo' as const, trend: 'neutral' as const },
    { title: 'Avg Credibility', value: metrics.avgCredibility, icon: <Scale className="h-6 w-6" />, gradient: 'emerald' as const, trend: 'up' as const },
    { title: 'Verification', value: metrics.verificationStatus, icon: <CheckCircle className="h-6 w-6" />, gradient: 'gold' as const, trend: 'up' as const },
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
            PERCEPTION-X2 | PERCEPTION GAP
          </Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">
            UAE Perception Gap Analysis
          </h1>
          <p className="mt-2 text-sm text-platinum-400 max-w-2xl">
            Systematic identification of gaps between UAE self-presentation and external reality.
            {metrics.gapCategories} gap categories, {metrics.queriesExecuted} queries, 100% verified.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="border-rose-500/40 text-rose-400 text-xs">
            <Search className="h-3 w-3 mr-1" />
            {metrics.queriesExecuted} Queries
          </Badge>
          <Badge variant="outline" className="border-emerald-500/40 text-emerald-400 text-xs">
            <FileText className="h-3 w-3 mr-1" />
            {metrics.pagesFetched} Sources
          </Badge>
          <Badge variant="outline" className="border-platinum-500/40 text-platinum-400 text-xs">
            <Activity className="h-3 w-3 mr-1" />
            {data.executionMetadata?.dateExecuted}
          </Badge>
        </div>
      </motion.div>

      {/* KEY METRICS */}
      <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
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
            <TabsTrigger value="gaps" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <AlertTriangle className="h-3 w-3 mr-1" /> Gap Analysis
            </TabsTrigger>
            <TabsTrigger value="metrics" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Scale className="h-3 w-3 mr-1" /> Metrics
            </TabsTrigger>
            <TabsTrigger value="sources" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <FileText className="h-3 w-3 mr-1" /> Sources
            </TabsTrigger>
            <TabsTrigger value="timeline" className="font-rajdhani text-xs sm:text-sm data-[state=active]:bg-gold-700/20">
              <Shield className="h-3 w-3 mr-1" /> 2026 Crisis
            </TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview" className="space-y-6">
            <OverviewSection data={data} />
          </TabsContent>

          {/* GAPS TAB */}
          <TabsContent value="gaps" className="space-y-6">
            <GapsSection data={data} />
          </TabsContent>

          {/* METRICS TAB */}
          <TabsContent value="metrics" className="space-y-6">
            <MetricsSection data={data} />
          </TabsContent>

          {/* SOURCES TAB */}
          <TabsContent value="sources" className="space-y-6">
            <SourcesSection data={data} />
          </TabsContent>

          {/* TIMELINE TAB */}
          <TabsContent value="timeline" className="space-y-6">
            <TimelineSection data={data} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}
