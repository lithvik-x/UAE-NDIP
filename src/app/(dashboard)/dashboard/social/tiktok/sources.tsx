/**
 * TikTok Sources Section Component
 */

'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Globe, Shield, ExternalLink } from 'lucide-react'
import type { SourceReference } from '@/lib/data-loader/types'

interface SourcesProps {
  sources: Array<{
    name: string
    url?: string
    tier: number
    date: string
  }>
  sourceCredibilityMatrix: Array<{
    tier: string
    sources: string[]
    credibility: string
  }>
  coverageAssessment: {
    totalQueries: number
    averageEnrichmentRate: string
    fetchSuccessRate: {
      total: {
        attempted: number
        successful: number
        blocked: number
      }
    }
  }
}

export function SourcesSection({ sources, sourceCredibilityMatrix, coverageAssessment }: SourcesProps) {
  return (
    <div className="space-y-6">
      {/* Coverage Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card border-platinum-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="h-5 w-5 text-platinum-500" />
              Research Coverage
            </CardTitle>
            <CardDescription>Query execution and source enrichment statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-4">
              <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                <span className="text-2xl font-bold text-gold-700">{coverageAssessment.totalQueries}</span>
                <span className="text-xs text-platinum-400">Total Queries</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                <span className="text-2xl font-bold text-emerald-400">{coverageAssessment.averageEnrichmentRate}</span>
                <span className="text-xs text-platinum-400">Avg Enrichment</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                <span className="text-2xl font-bold text-platinum-200">{coverageAssessment.fetchSuccessRate.total.successful}</span>
                <span className="text-xs text-platinum-400">Successful Fetches</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                <span className="text-2xl font-bold text-rose-400">{coverageAssessment.fetchSuccessRate.total.blocked}</span>
                <span className="text-xs text-platinum-400">Blocked/Restricted</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Source References */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass-card border-platinum-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="h-5 w-5 text-platinum-500" />
              Source References
            </CardTitle>
            <CardDescription>{sources.length} enriched sources from the intelligence report</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              <div className="space-y-3">
                {sources.map((source, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 hover:bg-platinum-800/70 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-platinum-200">{source.name}</p>
                      <p className="text-xs text-platinum-400 truncate">{source.url}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          source.tier === 1
                            ? 'border-emerald-500/50 text-emerald-400'
                            : source.tier === 2
                            ? 'border-navy-500/50 text-navy-400'
                            : source.tier === 3
                            ? 'border-amber-500/50 text-amber-400'
                            : 'border-platinum-500/50 text-platinum-400'
                        }`}
                      >
                        TIER {source.tier}
                      </Badge>
                      <Badge variant="outline" className="text-xs text-platinum-400">
                        {source.date}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </motion.div>

      {/* Source Credibility Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass-card border-platinum-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-platinum-500" />
              Source Credibility Matrix
            </CardTitle>
            <CardDescription>Distribution of sources by tier and credibility</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sourceCredibilityMatrix.map((tier, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg bg-platinum-800/50 p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className={`${
                        tier.tier === 'TIER 1'
                          ? 'border-emerald-500/50 text-emerald-400'
                          : tier.tier === 'TIER 2'
                          ? 'border-navy-500/50 text-navy-400'
                          : tier.tier === 'TIER 3'
                          ? 'border-amber-500/50 text-amber-400'
                          : 'border-platinum-500/50 text-platinum-400'
                      }`}
                    >
                      {tier.tier}
                    </Badge>
                    <span className="text-xs text-platinum-400">Credibility: {tier.credibility}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tier.sources.map((source, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs px-2 py-1 rounded ${
                          tier.tier === 'TIER 1'
                            ? 'bg-emerald-500/10 text-emerald-300'
                            : tier.tier === 'TIER 2'
                            ? 'bg-navy-500/10 text-navy-300'
                            : tier.tier === 'TIER 3'
                            ? 'bg-amber-500/10 text-amber-300'
                            : 'bg-platinum-700/50 text-platinum-400'
                        }`}
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
