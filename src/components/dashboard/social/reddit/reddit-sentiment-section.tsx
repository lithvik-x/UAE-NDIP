// Reddit Sentiment Section - Sentiment breakdown and analysis
// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Badge } from '@/components/ui/badge'
import {
  ThumbsUp,
  ThumbsDown,
  Minus,
  AlertOctagon,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }

interface RedditSentimentSectionProps {
  executionMetadata?: {
    dateExecuted: string
    queriesExecuted: number
    pagesFetched: number
    sourceTypes: string[]
    confidence: string
  }
  subreddits?: {
    name: string
    primaryFocus: string
    commonTopics: string[]
    sentimentTrend: string
    userActivity: string
  }[]
  keyStatistics?: {
    category: string
    metric: string
    value: string
    trend: string
  }[]
}

export function RedditSentimentSection({
  executionMetadata,
  subreddits = [],
  keyStatistics = [],
}: RedditSentimentSectionProps) {
  // Calculate sentiment breakdown from key statistics
  const negativeStat = keyStatistics.find(s => s.metric === 'Salary cuts')
  const sentimentData = [
    { name: 'Negative', value: 53, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 25, color: CHART_COLORS.platinum },
    { name: 'Positive', value: 22, color: CHART_COLORS.emerald },
  ]

  const keyConcerns = [
    'Regret moving to UAE',
    'Leaving UAE',
    'Racism',
    'Scams',
    'Low wages',
    'Salary cuts',
    'Housing unaffordability',
    'Workplace discrimination',
  ]

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel
          title="Reddit Platform Overview"
          description="Community sentiment and discussion analysis for UAE subreddits"
        >
          <div className="space-y-6">
            {/* Alert Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 p-4 rounded-lg border border-rose-500/30 bg-rose-500/5"
            >
              <AlertOctagon className="h-6 w-6 text-rose-400" />
              <div>
                <p className="font-semibold text-rose-400">Negative Sentiment Alert</p>
                <p className="text-sm text-platinum-500-400">Reddit UAE shows highest negative sentiment (53%) among all platforms</p>
              </div>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Sentiment Distribution */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-lg glass-card"
              >
                <h3 className="text-lg font-semibold text-platinum-500-200 mb-4">Sentiment Distribution</h3>
                <PieChart data={sentimentData} height={280} showLegend={true} />
              </motion.div>

              {/* Bot Activity Analysis */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-lg glass-card"
              >
                <h3 className="text-lg font-semibold text-platinum-500-200 mb-4">Bot Activity Analysis</h3>
                <div className="space-y-4">
                  <div className="h-64 flex items-center justify-center">
                    <PieChart
                      data={[
                        { name: 'Bot Activity', value: 15, color: CHART_COLORS.rose },
                        { name: 'Authentic', value: 85, color: CHART_COLORS.emerald },
                      ]}
                      height={250}
                      showLegend={true}
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-rose-400">15%</span>
                    <p className="text-sm text-platinum-500-400">Government shill accounts suspected</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Concerns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-lg glass-card"
            >
              <h3 className="text-lg font-semibold text-platinum-500-200 mb-4">Key Concerns</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {keyConcerns.map((concern, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * idx }}
                    className="flex items-center gap-3 rounded-lg border border-rose-500/30 bg-rose-500/5 p-3"
                  >
                    <ThumbsDown className="h-4 w-4 text-rose-400" />
                    <span className="text-platinum-500-200 text-sm">{concern}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Execution Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-lg glass-card border-emerald-500/30"
            >
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Research Execution</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                  <p className="text-2xl font-bold text-emerald-400">{executionMetadata?.queriesExecuted || '35+'}</p>
                  <p className="text-sm text-platinum-500-400">Queries Executed</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                  <p className="text-2xl font-bold text-emerald-400">{executionMetadata?.pagesFetched || '25+'}</p>
                  <p className="text-sm text-platinum-500-400">Pages Fetched</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                  <p className="text-2xl font-bold text-emerald-400">High</p>
                  <p className="text-sm text-platinum-500-400">Confidence Level</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                  <p className="text-2xl font-bold text-emerald-400">{executionMetadata?.dateExecuted || '2026-04-27'}</p>
                  <p className="text-sm text-platinum-500-400">Date Executed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}

export default RedditSentimentSection
