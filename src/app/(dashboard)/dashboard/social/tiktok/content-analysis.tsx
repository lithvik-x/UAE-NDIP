/**
 * TikTok Content Analysis Section Component
 */

'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AlertTriangle, Layers, Target, Bot } from 'lucide-react'
import type { Narrative, BotAnalysis } from '@/lib/data-loader/types'

interface ContentAnalysisProps {
  queryFindings: Array<{
    query: string
    source: string
    credibility: string
    uaeRelevance: string
    keyFindings: Array<{
      metric: string
      value: string
      source: string
    }>
    sentiment: string
  }>
  keyNarratives: Narrative[]
  botActivity: BotAnalysis
}

export function ContentAnalysisSection({ queryFindings, keyNarratives, botActivity }: ContentAnalysisProps) {
  return (
    <div className="space-y-6">
      {/* Key Narratives */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card border-platinum-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Layers className="h-5 w-5 text-platinum-500" />
              Key Narratives
            </CardTitle>
            <CardDescription>Dominant themes on TikTok UAE</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {keyNarratives.slice(0, 8).map((narrative, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        narrative.sentiment === 'positive'
                          ? 'border-emerald-500/50 text-emerald-400'
                          : narrative.sentiment === 'negative'
                          ? 'border-rose-500/50 text-rose-400'
                          : 'border-platinum-500/50 text-platinum-400'
                      }`}
                    >
                      {narrative.sentiment}
                    </Badge>
                    <span className="text-xs text-platinum-500">{narrative.prevalence}%</span>
                  </div>
                  <p className="text-sm font-medium text-platinum-200">{narrative.topic}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bot Activity Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass-card border-rose-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot className="h-5 w-5 text-rose-400" />
              Bot Activity Analysis
            </CardTitle>
            <CardDescription>{botActivity.estimatedBotPercent}% estimated bots</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-platinum-300">Coordinated Activity</span>
                <Badge variant={botActivity.coordinatedInauthentic ? 'destructive' : 'success'}>
                  {botActivity.coordinatedInauthentic ? 'Detected' : 'None'}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-platinum-300">Confidence Level</span>
                <span className="text-lg font-bold text-gold-700">
                  {Math.round(botActivity.confidence * 100)}%
                </span>
              </div>
              <div className="h-2 w-full bg-platinum-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${botActivity.estimatedBotPercent}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-rose-500 to-pink-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Content Type Queries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass-card border-platinum-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-platinum-500" />
              Query Findings Summary
            </CardTitle>
            <CardDescription>24 queries executed across content types and risk categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="space-y-4">
                {queryFindings.map((finding, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-platinum-200">{finding.query}</span>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          finding.uaeRelevance === 'CRITICAL'
                            ? 'border-rose-500/50 text-rose-400'
                            : finding.uaeRelevance === 'HIGH'
                            ? 'border-gold-500/50 text-gold-700'
                            : 'border-platinum-500/50 text-platinum-400'
                        }`}
                      >
                        {finding.uaeRelevance}
                      </Badge>
                    </div>
                    <p className="text-xs text-platinum-400 mb-2">{finding.sentiment}</p>
                    <div className="space-y-1">
                      {finding.keyFindings.slice(0, 3).map((kf, kfIdx) => (
                        <div key={kfIdx} className="flex items-center gap-2 text-xs">
                          <span className="text-platinum-500">{kf.metric}:</span>
                          <span className="text-platinum-300">{kf.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
