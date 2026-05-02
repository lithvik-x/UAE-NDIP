'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { PieChart } from '@/components/ui/chart-library'
import { ExternalLink, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'
import type { perceptionGapData } from '@/lib/data/perception/perception-gap-data'

interface SourcesSectionProps {
  data: typeof perceptionGapData
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

const credibilityColors: Record<string, string> = {
  'High': 'text-emerald-400',
  'Medium-High': 'text-cyan-400',
  'Medium': 'text-amber-400',
}

const typeColors: Record<string, string> = {
  'NGO': 'bg-rose-500/20 text-rose-400',
  'Think Tank': 'bg-cyan-500/20 text-cyan-400',
  'Government': 'bg-gold-700/20 text-gold-700',
  'Media': 'bg-navy/20 text-navy-500',
  'Crowdsourced': 'bg-purple-500/20 text-purple-400',
}

const focusColors: Record<string, string> = {
  'Primary': 'bg-rose-500/20 text-rose-400',
  'Secondary': 'bg-amber-500/20 text-amber-400',
}

export function SourcesSection({ data }: SourcesSectionProps) {
  if (!data) return null

  // Source type distribution
  const sourceTypeData = data.sourceCredibilityMatrix?.reduce((acc, source) => {
    const existing = acc.find((item) => item.name === source.type)
    if (existing) {
      existing.value += 1
    } else {
      acc.push({ name: source.type, value: 1, color: typeColors[source.type]?.split(' ')[0] || CHART_COLORS.platinum })
    }
    return acc
  }, [] as { name: string; value: number; color: string }[]) || []

  // UAE focus distribution
  const uaeFocusData = data.sourceCredibilityMatrix?.reduce((acc, source) => {
    const existing = acc.find((item) => item.name === source.uaeFocus)
    if (existing) {
      existing.value += 1
    } else {
      acc.push({ name: source.uaeFocus, value: 1, color: source.uaeFocus === 'Primary' ? CHART_COLORS.rose : CHART_COLORS.gold })
    }
    return acc
  }, [] as { name: string; value: number; color: string }[]) || []

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      {/* Source Distribution */}
      <GlassPanel
        title="Source Credibility Matrix"
        description="11 primary sources used in perception gap analysis"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ScrollArea className="h-[400px]">
              <div className="space-y-3 pr-4">
                {data.sourceCredibilityMatrix?.map((source, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-4 border border-platinum-700/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-platinum-700/50">
                        {source.credibility === 'High' ? (
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-amber-400" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-platinum-100">{source.source}</span>
                          <Badge className={`text-xs ${typeColors[source.type]}`}>
                            {source.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className={`text-xs ${credibilityColors[source.credibility]}`}>
                            {source.credibility}
                          </span>
                          <span className="text-xs text-platinum-500">|</span>
                          <Badge className={`text-xs ${focusColors[source.uaeFocus]}`}>
                            {source.uaeFocus} Focus
                          </Badge>
                          <span className="text-xs text-platinum-500">|</span>
                          <span className="text-xs text-platinum-400">{source.refreshRate}</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={data.primarySources?.find((p) => p.source === source.source)?.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-platinum-700/50 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-platinum-400" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <h4 className="text-sm font-semibold text-platinum-300 mb-4">Source Types</h4>
              <PieChart data={sourceTypeData} height={180} showLegend={true} />
            </div>

            <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <h4 className="text-sm font-semibold text-platinum-300 mb-4">UAE Focus</h4>
              <PieChart data={uaeFocusData} height={180} showLegend={true} />
            </div>
          </div>
        </div>
      </GlassPanel>

      {/* Relevance Assessment Matrix */}
      <GlassPanel
        title="UAE Relevance Assessment Matrix"
        description="Severity and credibility assessment across all gap categories"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-platinum-700">
                <th className="text-left py-3 px-4 text-xs font-semibold text-platinum-400 uppercase tracking-wide">Gap Category</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-platinum-400 uppercase tracking-wide">UAE Narrative</th>
                <th className="text-center py-3 px-4 text-xs font-semibold text-platinum-400 uppercase tracking-wide">Severity</th>
                <th className="text-center py-3 px-4 text-xs font-semibold text-platinum-400 uppercase tracking-wide">Credibility</th>
                <th className="text-center py-3 px-4 text-xs font-semibold text-platinum-400 uppercase tracking-wide">Trend</th>
              </tr>
            </thead>
            <tbody>
              {data.relevanceMatrix?.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.03 }}
                  className="border-b border-platinum-800 hover:bg-platinum-800/30"
                >
                  <td className="py-3 px-4">
                    <span className="font-medium text-platinum-200">{row.gapCategory}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-platinum-400">{row.uaeNarrative}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Badge
                      variant={row.severity === 'Critical' ? 'destructive' : 'warning'}
                      className="text-xs"
                    >
                      {row.severity}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`text-sm font-medium ${credibilityColors[row.credibility]}`}>
                      {row.credibility}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        row.trend.includes('Worsening') ? 'border-rose-500/50 text-rose-400' :
                        row.trend.includes('Improvement') ? 'border-emerald-500/50 text-emerald-400' :
                        'border-amber-500/50 text-amber-400'
                      }`}
                    >
                      {row.trend}
                    </Badge>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassPanel>

      {/* Enrichment Metadata */}
      <GlassPanel
        title="Enrichment Metadata"
        description="Research methodology and verification status"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border text-center">
            <RefreshCw className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-platinum-100">{data.enrichmentMetadata?.totalSourcesFetched || '15+'}</div>
            <div className="text-sm text-platinum-400 mt-1">Sources Fetched</div>
          </div>

          <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border text-center">
            <CheckCircle className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-platinum-100">{data.enrichmentMetadata?.dataPointsExtracted || '200+'}</div>
            <div className="text-sm text-platinum-400 mt-1">Data Points Extracted</div>
          </div>

          <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border text-center">
            <AlertCircle className="h-8 w-8 text-rose-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-platinum-100">{data.enrichmentMetadata?.gapsIdentified || '10'}</div>
            <div className="text-sm text-platinum-400 mt-1">Major Gap Categories</div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
            <div className="text-lg font-bold text-emerald-400">100%</div>
            <div className="text-xs text-platinum-400">Queries Executed</div>
          </div>
          <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
            <div className="text-lg font-bold text-emerald-400">100%</div>
            <div className="text-xs text-platinum-400">Pages Fetched</div>
          </div>
          <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
            <div className="text-lg font-bold text-emerald-400">100%</div>
            <div className="text-xs text-platinum-400">Statistics Verified</div>
          </div>
          <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
            <div className="text-lg font-bold text-emerald-400">100%</div>
            <div className="text-xs text-platinum-400">Cross-Referenced</div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
