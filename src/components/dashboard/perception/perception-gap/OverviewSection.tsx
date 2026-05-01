'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { PieChart, BarChart } from '@/components/ui/chart-library'
import { AlertTriangle, TrendingDown, Eye, Scale, ShieldAlert } from 'lucide-react'
import { motion } from 'framer-motion'
import type { perceptionGapData } from '@/lib/data/perception/perception-gap-data'

interface OverviewSectionProps {
  data: typeof perceptionGapData
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export function OverviewSection({ data }: OverviewSectionProps) {
  if (!data) return null

  // Severity distribution from gaps
  const severityData = [
    { name: 'Critical', value: data.summaryMetrics?.criticalSeverity || 7, color: CHART_COLORS.rose },
    { name: 'High', value: data.summaryMetrics?.highSeverity || 3, color: CHART_COLORS.orange },
  ]

  // Sentiment distribution
  const sentimentData = [
    { name: 'Highly Negative', value: data.summaryMetrics?.highlyNegativeSentiment || 5, color: CHART_COLORS.rose },
    { name: 'Negative', value: 5, color: CHART_COLORS.orange },
  ]

  // Trend distribution
  const trendData = [
    { name: 'Worsening', value: data.summaryMetrics?.worseningTrends || 6, color: CHART_COLORS.rose },
    { name: 'Stable Negative', value: data.summaryMetrics?.stableNegativeTrends || 4, color: CHART_COLORS.orange },
    { name: 'Slow Improvement', value: data.summaryMetrics?.slowImprovementTrends || 2, color: CHART_COLORS.emerald },
    { name: 'Mixed', value: data.summaryMetrics?.mixedTrends || 1, color: CHART_COLORS.gold },
  ]

  // Top gap categories by severity
  const topGaps = data.perceptionGaps?.slice(0, 5).map((gap) => ({
    name: gap.name.length > 25 ? gap.name.substring(0, 25) + '...' : gap.name,
    severity: gap.severity === 'Critical' ? 100 : gap.severity === 'High' ? 70 : 50,
    sentiment: gap.sentiment === 'Highly Negative' ? 100 : gap.sentiment === 'Negative' ? 70 : 50,
  })) || []

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Perception Gap Overview"
        description="Analysis of gaps between UAE self-presentation and external reality — 10 categories identified"
      >
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {/* Severity Distribution */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
          >
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-rose-500" />
                Gap Severity
              </CardTitle>
              <CardDescription>Critical vs High severity</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <PieChart data={severityData} height={200} showLegend={true} />
            </CardContent>
          </motion.div>

          {/* Sentiment Distribution */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
          >
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-rose-500" />
                Sentiment
              </CardTitle>
              <CardDescription>Source sentiment analysis</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <PieChart data={sentimentData} height={200} showLegend={true} />
            </CardContent>
          </motion.div>

          {/* Trend Distribution */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
          >
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <Eye className="h-5 w-5 text-cyan-500" />
                Trend Direction
              </CardTitle>
              <CardDescription>Current trend patterns</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <PieChart data={trendData} height={200} showLegend={true} />
            </CardContent>
          </motion.div>

          {/* Average Credibility */}
          <motion.div
            variants={cardHover}
            whileHover="hover"
            className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
          >
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <Scale className="h-5 w-5 text-emerald-500" />
                Source Credibility
              </CardTitle>
              <CardDescription>Average credibility score</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="flex items-center justify-center h-[200px]">
                <div className="text-center">
                  <div className="text-5xl font-bold text-platinum-500-100">{data.dashboardMetrics?.avgCredibility || 4.2}</div>
                  <div className="text-sm text-platinum-500-400 mt-2">out of 5</div>
                </div>
              </div>
            </CardContent>
          </motion.div>
        </div>

        {/* Top Gaps Bar Chart */}
        <div className="mt-6">
          <BarChart
            data={topGaps}
            xAxisKey="name"
            bars={[
              { dataKey: 'severity', name: 'Severity Score', color: CHART_COLORS.rose },
            ]}
            height={280}
            showGrid={true}
          />
        </div>
      </GlassPanel>
    </motion.div>
  )
}
