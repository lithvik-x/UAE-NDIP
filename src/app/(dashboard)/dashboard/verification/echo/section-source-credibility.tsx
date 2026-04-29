'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  sourceCredibilityMatrix,
  tierDistribution,
  evidenceQuality,
  sourceSummaries,
  sourceTierData,
} from '@/lib/data-loader/echo-chamber-data'
import {
  PieChart,
  BarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  ExternalLink,
  Award,
  BookOpen,
  Globe,
  TrendingUp,
} from 'lucide-react'

export function SectionSourceCredibility() {
  return (
    <div className="space-y-6">
      {/* Source Tier Distribution Chart */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Source Tier Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart
              data={tierDistribution.map(t => ({
                name: t.tier,
                value: t.count,
                color: t.tier.includes('1') ? CHART_COLORS.emerald : t.tier.includes('2') ? CHART_COLORS.denim : CHART_COLORS.gold,
              }))}
              height={250}
              showLegend={true}
            />
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Source Distribution by Tier</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={sourceTierData}
              xAxisKey="name"
              bars={[{ dataKey: 'studies', name: 'Studies', color: CHART_COLORS.denim }]}
              height={250}
              showGrid={true}
            />
          </CardContent>
        </Card>
      </div>

      {/* Tier Distribution Summary Table */}
      <GlassPanel
        title="Tier Distribution Summary"
        description="Source classification by research quality"
        badge="E.2"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tierDistribution.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className={`rounded-lg border p-4 text-center ${
                tier.tier.includes('1') ? 'border-emerald-500/30 bg-emerald-500/10' :
                tier.tier.includes('2') ? 'border-blue-500/30 bg-blue-500/10' :
                tier.tier.includes('3') ? 'border-yellow-500/30 bg-yellow-500/10' :
                'border-slate-500/30 bg-slate-500/10'
              }`}
            >
              <div className={`text-2xl font-bold ${
                tier.tier.includes('1') ? 'text-emerald-400' :
                tier.tier.includes('2') ? 'text-blue-400' :
                tier.tier.includes('3') ? 'text-yellow-400' :
                'text-slate-400'
              }`}>{tier.count}</div>
              <div className="text-sm text-slate-400">{tier.tier}</div>
              <div className="text-xs text-slate-500 mt-1">{tier.percentage}</div>
            </motion.div>
          ))}
        </div>
      </GlassPanel>

      {/* Evidence Quality Assessment */}
      <GlassPanel
        title="Evidence Quality Assessment"
        description="Methodological rigor and source quality evaluation"
        badge="E.3"
      >
        <div className="space-y-3">
          {evidenceQuality.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
            >
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-emerald-400" />
                <span className="font-medium text-slate-200">{item.qualityDimension}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-emerald-400">{item.score}</span>
                <Badge variant="outline" className="text-xs">{item.leadingSource}</Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassPanel>

      {/* Full Source Credibility Matrix */}
      <GlassPanel
        title="Source Credibility Matrix"
        description="Complete classification of all sources by tier"
        badge="E.1"
      >
        <ScrollArea className="h-[400px]">
          <div className="space-y-2">
            {sourceCredibilityMatrix.map((source, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.02 }}
                className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Badge className={
                    source.tier === 'TIER 1' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shrink-0' :
                    source.tier === 'TIER 2' ? 'bg-blue-500/20 text-blue-400 border-blue-500/50 shrink-0' :
                    'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 shrink-0'
                  }>
                    {source.tier}
                  </Badge>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-slate-200 truncate">{source.source}</p>
                    <p className="text-xs text-slate-500 truncate">{source.url}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 max-w-[200px] text-right ml-4">{source.rationale}</p>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Source Content Summaries */}
      <GlassPanel
        title="Primary Source Summaries"
        description="Key data extracted from top sources"
        badge="F.1"
      >
        <div className="space-y-4">
          {sourceSummaries.map((source, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-indigo-400" />
                  <div>
                    <h4 className="font-semibold text-slate-200">{source.sourceName}</h4>
                    <p className="text-xs text-slate-500">{source.url}</p>
                  </div>
                </div>
                <Badge className={
                  source.tier === 'TIER 1' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                  'bg-blue-500/20 text-blue-400 border-blue-500/50'
                }>
                  {source.tier}
                </Badge>
              </div>
              <div className="space-y-1 mb-3">
                {source.keyData.map((data, i) => (
                  <p key={i} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    {data}
                  </p>
                ))}
              </div>
              {source.criticalInsight && (
                <div className="mt-3 rounded bg-amber-500/10 border border-amber-500/30 p-2">
                  <p className="text-xs text-amber-300">
                    <span className="font-semibold">Key Insight:</span> {source.criticalInsight}
                  </p>
                </div>
              )}
              <p className="text-xs text-slate-500 mt-2">Fetched: {source.dateFetched}</p>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}
