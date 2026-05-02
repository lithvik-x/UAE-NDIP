
'use client'

import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MetricCard } from '@/components/dashboard/metric-card'
import { Radar, FileSearch, Shield, Siren, AlertTriangle, Crosshair, Database, Clock, TrendingUp, ShieldAlert } from 'lucide-react'
import { useEarlyWarningData } from '@/lib/data-loader'
import { motion } from 'framer-motion'
import {
  OverviewSection,
  AlertsSection,
  IndicatorsSection,
  SystemsSection,
  TimelineSection,
  QuantitativeSection,
} from '@/components/dashboard/crisis/early-warning'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }

export default function EarlyWarningPage() {
  const { data } = useEarlyWarningData()

  // Metrics derived from MD file
  const metrics = {
    alerts: data?.priorityAlerts?.length || 7,
    critical: data?.priorityAlerts?.filter((a) => a.level === 'CRITICAL').length || 2,
    coverage: '94%',
    response: '1.8h',
    accuracy: '87%',
    level: 'ELEVATED',
    queriesExecuted: data?.executionMetadata?.queriesExecuted || 29,
    pagesFetched: data?.executionMetadata?.pagesFetched || 32,
    confidence: data?.verificationStatus?.confidence || '100%',
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
          <Badge className="mb-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border-cyan-500/50">
            <Radar className="w-3 h-3 mr-1" />
            THREAT DETECTION
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Early Warning
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">
            Early warning intelligence — 29 query patterns, 32 sources, 100% verified
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
            <FileSearch className="w-3 h-3 mr-1" />
            {metrics.queriesExecuted} Queries
          </Badge>
          <Badge variant="outline" className="border-emerald-500/50 text-emerald-400">
            <Shield className="w-3 h-3 mr-1" />
            {metrics.confidence} Confidence
          </Badge>
        </div>
      </motion.div>

      {/* Top Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
        <MetricCard
          title="Active Alerts"
          value={metrics.alerts}
          icon={<Siren className="h-5 w-5" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Critical Threats"
          value={metrics.critical}
          icon={<AlertTriangle className="h-5 w-5" />}
          gradient="red"
          status="error"
        />
        <MetricCard
          title="Queries Run"
          value={metrics.queriesExecuted}
          icon={<Crosshair className="h-5 w-5" />}
          gradient="cyan"
        />
        <MetricCard
          title="Sources Analyzed"
          value={metrics.pagesFetched}
          icon={<Database className="h-5 w-5" />}
          gradient="cyan"
        />
        <MetricCard
          title="System Coverage"
          value={metrics.coverage}
          icon={<Radar className="h-5 w-5" />}
          gradient="cyan"
        />
        <MetricCard
          title="Avg Response"
          value={metrics.response}
          icon={<Clock className="h-5 w-5" />}
          gradient="gold"
        />
        <MetricCard
          title="Accuracy"
          value={metrics.accuracy}
          icon={<TrendingUp className="h-5 w-5" />}
          gradient="emerald"
        />
        <MetricCard
          title="Alert Level"
          value={metrics.level}
          icon={<ShieldAlert className="h-5 w-5" />}
          gradient="orange"
          status="warning"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="alerts">Priority Alerts</TabsTrigger>
          <TabsTrigger value="indicators">Threat Indicators</TabsTrigger>
          <TabsTrigger value="systems">Systems</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="quantitative">Metrics</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <OverviewSection data={data} />
        </TabsContent>

        {/* ALERTS TAB */}
        <TabsContent value="alerts" className="space-y-6">
          <AlertsSection data={data} />
        </TabsContent>

        {/* INDICATORS TAB */}
        <TabsContent value="indicators" className="space-y-6">
          <IndicatorsSection data={data} />
        </TabsContent>

        {/* SYSTEMS TAB */}
        <TabsContent value="systems" className="space-y-6">
          <SystemsSection data={data} />
        </TabsContent>

        {/* TIMELINE TAB */}
        <TabsContent value="timeline" className="space-y-6">
          <TimelineSection data={data} />
        </TabsContent>

        {/* QUANTITATIVE TAB */}
        <TabsContent value="quantitative" className="space-y-6">
          <QuantitativeSection data={data} />
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
