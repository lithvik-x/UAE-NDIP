/**
 * TikTok Demographics Section Component
 */

'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain } from 'lucide-react'
import { PieChart } from '@/components/ui/chart-library'

interface DemographicsProps {
  sentimentDistribution: Array<{
    name: string
    value: number
    color: string
  }>
  sentimentAnalysis: Array<{
    category: string
    sentiment: string
    dominantNarrative: string
  }>
}

export function DemographicsSection({ sentimentDistribution, sentimentAnalysis }: DemographicsProps) {
  return (
    <div className="space-y-6">
      {/* Sentiment Distribution */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card border-rose-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Brain className="h-5 w-5 text-rose-400" />
              Sentiment Distribution
            </CardTitle>
            <CardDescription>Overall sentiment breakdown of UAE TikTok content</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart
              data={sentimentDistribution}
              height={220}
              showLegend={true}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Sentiment Analysis by Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass-card border-platinum-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Brain className="h-5 w-5 text-platinum-500" />
              Sentiment Analysis by Category
            </CardTitle>
            <CardDescription>Detailed sentiment breakdown by content type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sentimentAnalysis.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-platinum-200">{item.category}</span>
                    <span className={`text-sm font-bold ${
                      item.sentiment.includes('POSITIVE') ? 'text-emerald-400' :
                      item.sentiment.includes('NEGATIVE') ? 'text-rose-400' :
                      item.sentiment.includes('MIXED') ? 'text-gold-700' :
                      'text-platinum-400'
                    }`}>
                      {item.sentiment}
                    </span>
                  </div>
                  <p className="text-sm text-platinum-400">{item.dominantNarrative}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
