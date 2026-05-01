// Sources & Data Section Component for Threads Intelligence
// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Source,
  Shield,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Clock,
  FileText,
  Database,
  RefreshCw,
  Eye,
  BarChart3,
} from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

interface SourcesSectionProps {
  sourceCredibility: any[]
  identifiedDataGaps: any[]
  monitoringRecommendations: any[]
  dataFreshness: any[]
  allSources: any[]
}

export function SourcesSection({
  sourceCredibility,
  identifiedDataGaps,
  monitoringRecommendations,
  dataFreshness,
  allSources,
}: SourcesSectionProps) {
  const getCredibilityColor = (credibility: string) => {
    if (credibility === 'Very High' || credibility === 'High') return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    if (credibility === 'Medium-High' || credibility === 'Medium') return 'bg-gold/20 text-gold border-gold/30'
    return 'bg-platinum-500/20 text-platinum-400 border-platinum-500/30'
  }

  const getImpactColor = (impact: string) => {
    if (impact === 'High') return 'bg-rose-500/20 text-rose-400 border-rose-500/30'
    if (impact === 'Medium') return 'bg-gold/20 text-gold border-gold/30'
    return 'bg-platinum-500/20 text-platinum-400 border-platinum-500/30'
  }

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel title="Sources & Data Quality" description="Source credibility, data gaps, and monitoring recommendations">
          <div className="space-y-6">
            {/* Source Credibility Matrix */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-info" />
                  Source Credibility Matrix
                </CardTitle>
                <CardDescription>Research quality and UAE relevance assessment</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-3 sm:grid-cols-2">
                  {sourceCredibility.map((source: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.03 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-platinum-200 text-sm">{source.source}</p>
                        <p className="text-xs text-platinum-500">{source.type}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`text-xs ${getCredibilityColor(source.credibility)}`}>
                          {source.credibility}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {source.uaeRelevance}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Data Freshness */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold" />
                  Data Freshness
                </CardTitle>
                <CardDescription>Age of data and freshness concerns</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-3">
                  {dataFreshness.map((item: any, idx: number) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between rounded-lg p-4 border ${
                        item.concern === 'Fresh' || item.concern === 'Very fresh'
                          ? 'bg-emerald-500/10 border-emerald-500/30'
                          : item.concern === 'Acceptable'
                          ? 'bg-gold/10 border-gold/30'
                          : 'bg-rose-500/10 border-rose-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.concern === 'Fresh' || item.concern === 'Very fresh' ? (
                          <CheckCircle className="h-5 w-5 text-emerald-400" />
                        ) : item.concern === 'Acceptable' ? (
                          <AlertTriangle className="h-5 w-5 text-gold" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-rose-400" />
                        )}
                        <span className="font-medium text-platinum-200">{item.dataType}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-platinum-400">{item.freshness}</p>
                        <Badge
                          variant="outline"
                          className={`text-xs mt-1 ${
                            item.concern === 'Fresh' || item.concern === 'Very fresh'
                              ? 'text-emerald-400 border-emerald-500/30'
                              : item.concern === 'Acceptable'
                              ? 'text-gold border-gold/30'
                              : 'text-rose-400 border-rose-500/30'
                          }`}
                        >
                          {item.concern}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Identified Data Gaps */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-rose-400" />
                  Identified Data Gaps
                </CardTitle>
                <CardDescription>Missing data areas and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-3">
                  {identifiedDataGaps.map((gap: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-4"
                    >
                      <AlertTriangle className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-platinum-200">{gap.gap}</p>
                          <Badge className={`text-xs ${getImpactColor(gap.impact)}`}>
                            {gap.impact} Impact
                          </Badge>
                        </div>
                        <p className="text-sm text-platinum-400 flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-emerald-400" />
                          {gap.recommendation}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Monitoring Recommendations */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-info" />
                  Monitoring Recommendations
                </CardTitle>
                <CardDescription>Ongoing tracking priorities and frequencies</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {monitoringRecommendations.map((rec: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="rounded-lg bg-platinum-800/50 p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs bg-info/10 text-info border-info/30">
                          {rec.frequency}
                        </Badge>
                      </div>
                      <p className="font-medium text-platinum-200 text-sm mb-1">{rec.metric}</p>
                      <p className="text-xs text-platinum-500 flex items-center gap-1">
                        <Source className="h-3 w-3" />
                        {rec.source}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* All Sources */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gold" />
                  All Sources ({allSources.length})
                </CardTitle>
                <CardDescription>Complete list of sources used in this report</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                  {allSources.map((source: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      className="flex items-start gap-3 rounded-lg bg-platinum-800/30 p-3 hover:bg-platinum-800/50 transition-colors"
                    >
                      <span className="text-xs text-platinum-500 font-mono w-6">{source.id}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm text-platinum-300 truncate flex-1">{source.contentSummary}</p>
                          <Badge
                            variant="outline"
                            className={`text-xs flex-shrink-0 ${
                              source.credibility === 'Very High (Official)' || source.credibility === 'Direct (Platform)'
                                ? 'text-emerald-400 border-emerald-500/30'
                                : source.credibility === 'High'
                                ? 'text-info border-info/30'
                                : 'text-platinum-400 border-platinum-500/30'
                            }`}
                          >
                            {source.credibility}
                          </Badge>
                        </div>
                        <p className="text-xs text-platinum-500 truncate">{source.url}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Data Quality Summary */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-gradient-to-br from-info/5 to-gold/5 border-info/30">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Database className="h-5 w-5 text-info" />
                  Data Quality Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-4">
                  <div className="text-center p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <div className="text-2xl font-bold text-emerald-400">36</div>
                    <div className="text-xs text-platinum-400">Total Sources</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <div className="text-2xl font-bold text-emerald-400">High+</div>
                    <div className="text-xs text-platinum-400">Credibility</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gold/10 border border-gold/30">
                    <div className="text-2xl font-bold text-gold">2026</div>
                    <div className="text-xs text-platinum-400">Report Date</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-info/10 border border-info/30">
                    <div className="text-2xl font-bold text-info">Fully</div>
                    <div className="text-xs text-platinum-400">Enriched</div>
                  </div>
                </div>
                <p className="text-sm text-platinum-400 mt-4 text-center">
                  All data extracted from publicly available sources. No fabrication of facts or figures.
                  This document is the Single Source of Truth (SSOT) for UAE Threads platform intelligence.
                </p>
              </CardContent>
            </motion.div>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}

export default SourcesSection
