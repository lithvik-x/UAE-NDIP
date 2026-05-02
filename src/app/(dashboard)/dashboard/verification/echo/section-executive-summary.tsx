// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import {
  echoChamberKPIs,
  echoChamberEnrichmentMetadata,
  conceptualDefinitions,
  platformComparisonData,
  echoChamberQuantMetrics,
  tierDistributionData,
  youtubeRemovalData,
  crossCuttingData,
  demographicData,
  qualitativeFindings,
  consensusMatrix,
} from '@/lib/data-loader/echo-chamber-data'
import {
  echoChamberFilterData,
} from '@/lib/data-loader'
import {
  AreaChart,
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Network,
  Users,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Activity,
  BookOpen,
  BarChart3,
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  activity: <Activity className="h-6 w-6" />,
  'trending-up': <TrendingUp className="h-6 w-6" />,
  network: <Network className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
  'check-circle': <CheckCircle className="h-6 w-6" />,
  'bar-chart': <BarChart3 className="h-6 w-6" />,
  'book-open': <BookOpen className="h-6 w-6" />,
}

const gradientMap: Record<string, string> = {
  emerald: 'emerald',
  rose: 'rose',
  gold: 'gold',
  purple: 'purple',
  indigo: 'indigo',
  teal: 'teal',
}

export function SectionExecutiveSummary() {
  return (
    <div className="space-y-6">
      {/* Key Metrics KPIs */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {echoChamberKPIs.slice(0, 4).map((kpi, idx) => (
          <motion.div
            key={kpi.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
          >
            <MetricCard
              title={kpi.title}
              value={kpi.value}
              unit={kpi.unit}
              icon={iconMap[kpi.icon]}
              gradient={gradientMap[kpi.gradient] as any}
              status={kpi.status}
            />
          </motion.div>
        ))}
      </div>

      {/* Executive Summary Content */}
      <GlassPanel
        title="Executive Summary"
        description="Echo chambers and filter bubbles — distinct but often conflated phenomena"
        badge="SSOT MASTER"
      >
        <div className="space-y-4">
          <p className="text-sm text-platinum-300 leading-relaxed">
            Echo chambers and filter bubbles represent two distinct but often conflated phenomena where algorithmic curation and human psychology combine to isolate users within self-reinforcing information environments.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {(echoChamberFilterData.keyFindings || []).slice(0, 6).map((finding: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="flex items-start gap-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
              >
                <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  finding.alert === 'RED' ? 'bg-rose-500/20 text-rose-400' :
                  finding.alert === 'GREEN' ? 'bg-emerald-500/20 text-emerald-400' :
                  'bg-amber-500/20 text-amber-400'
                }`}>
                  {idx + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-platinum-200 truncate">{finding.finding}</p>
                  <p className="text-xs text-platinum-400 mt-0.5">{finding.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GlassPanel>

      {/* Conceptual Framework */}
      <GlassPanel
        title="Conceptual Framework"
        description="Key definitions from leading researchers"
      >
        <div className="space-y-4">
          {conceptualDefinitions.map((def, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-semibold text-platinum-200">{def.term}</h4>
                <Badge variant="outline" className="text-xs">{def.source}</Badge>
              </div>
              <p className="text-sm text-platinum-400 italic">&ldquo;{def.definition}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>

      {/* Second Row KPIs */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {echoChamberKPIs.slice(4, 8).map((kpi, idx) => (
          <motion.div
            key={kpi.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.05, duration: 0.4 }}
          >
            <MetricCard
              title={kpi.title}
              value={kpi.value}
              unit={kpi.unit}
              icon={iconMap[kpi.icon]}
              gradient={gradientMap[kpi.gradient] as any}
              status={kpi.status}
            />
          </motion.div>
        ))}
      </div>

      {/* Platform Comparison Chart */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Platform Echo Chamber Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            data={platformComparisonData}
            xAxisKey="name"
            bars={[
              { dataKey: 'echoStrength', name: 'Echo Strength %', color: CHART_COLORS.rose },
              { dataKey: 'commonUsers', name: 'Common Users %', color: CHART_COLORS.emerald },
            ]}
            height={280}
            showGrid={true}
          />
        </CardContent>
      </Card>

      {/* Enrichment Metadata */}
      <Card className="glass-card border-emerald-500/30">
        <CardHeader>
          <CardTitle className="text-lg">Enrichment Metadata</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{echoChamberEnrichmentMetadata.totalUrlsProcessed}</div>
              <p className="text-sm text-platinum-400">Total URLs Processed</p>
            </div>
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{echoChamberEnrichmentMetadata.urlsSuccessfullyFetched}</div>
              <p className="text-sm text-platinum-400">Successfully Fetched</p>
            </div>
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{echoChamberEnrichmentMetadata.dataPointsExtracted}+</div>
              <p className="text-sm text-platinum-400">Data Points Extracted</p>
            </div>
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">{echoChamberEnrichmentMetadata.entitiesCatalogued}+</div>
              <p className="text-sm text-platinum-400">Entities Catalogued</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-platinum-800/50">Query: {echoChamberEnrichmentMetadata.query}</Badge>
            <Badge variant="outline" className="bg-platinum-800/50">Enrichment: {echoChamberEnrichmentMetadata.enrichmentDate}</Badge>
            <Badge variant="outline" className="bg-platinum-800/50">Type: {echoChamberEnrichmentMetadata.researchType}</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
