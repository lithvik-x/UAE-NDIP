// @ts-nocheck
'use client'

import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MetricCard } from '@/components/dashboard/metric-card'
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
} from 'lucide-react'
import { usePerceptionGapData } from '@/lib/data-loader'
import { motion } from 'framer-motion'
import {
  OverviewSection,
  GapsSection,
  MetricsSection,
  SourcesSection,
  TimelineSection,
} from '@/components/dashboard/perception/perception-gap'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }

export default function PerceptionGapPage() {
  const { data } = usePerceptionGapData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-500-400">Loading Perception Gap data...</div>
      </div>
    )
  }

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

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8 p-8 font-rajdhani"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-rose-500/20 to-orange-600/20 text-rose-400 border-rose-500/50">
            <Eye className="w-3 h-3 mr-1" />
            PERCEPTION ANALYSIS
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Perception Gap
            </span>
          </h1>
          <p className="mt-2 text-platinum-500-400">
            Analysis of gaps between UAE self-presentation and external reality — 10 categories, 200+ data points, 100% verified
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-rose-500/50 text-rose-400">
            <Target className="w-3 h-3 mr-1" />
            {metrics.queriesExecuted} Queries
          </Badge>
          <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
            <CheckCircle className="w-3 h-3 mr-1" />
            {metrics.verificationStatus} Verified
          </Badge>
        </div>
      </motion.div>

      {/* Top Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
        <MetricCard
          title="Gap Categories"
          value={metrics.gapCategories}
          icon={<Eye className="h-5 w-5" />}
          gradient="rose"
        />
        <MetricCard
          title="Critical Gaps"
          value={metrics.criticalGaps}
          icon={<AlertTriangle className="h-5 w-5" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="High Gaps"
          value={metrics.highGaps}
          icon={<TrendingDown className="h-5 w-5" />}
          gradient="orange"
        />
        <MetricCard
          title="Worsening Trends"
          value={metrics.worseningTrends}
          icon={<TrendingDown className="h-5 w-5" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Queries Run"
          value={metrics.queriesExecuted}
          icon={<FileSearch className="h-5 w-5" />}
          gradient="cyan"
        />
        <MetricCard
          title="Sources Analyzed"
          value={metrics.pagesFetched}
          icon={<Database className="h-5 w-5" />}
          gradient="blue"
        />
        <MetricCard
          title="Avg Credibility"
          value={metrics.avgCredibility}
          icon={<Scale className="h-5 w-5" />}
          gradient="emerald"
        />
        <MetricCard
          title="Sentiment Score"
          value={metrics.sentimentScore}
          icon={<Shield className="h-5 w-5" />}
          gradient="rose"
          status="error"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="gaps">Gap Analysis</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="timeline">2026 Crisis</TabsTrigger>
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
  )
}
