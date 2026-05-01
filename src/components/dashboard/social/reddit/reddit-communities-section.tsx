// Reddit Communities Section - UAE Subreddits Analysis
// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Hash,
  Users,
  AlertCircle,
  Shield,
  TrendingDown,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }

interface SubredditData {
  name: string
  primaryFocus: string
  commonTopics: string[]
  sentimentTrend: string
  userActivity: string
}

interface RedditCommunitiesSectionProps {
  subreddits?: SubredditData[]
  executionMetadata?: {
    dateExecuted: string
    frameworkVersion: string
    queriesExecuted: number
    pagesFetched: number
    sourceTypes: string[]
    dataIntegrity: string
    confidence: string
  }
}

export function RedditCommunitiesSection({
  subreddits = [],
  executionMetadata,
}: RedditCommunitiesSectionProps) {
  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel
          title="UAE Subreddit Analysis"
          description="Community health, activity levels, and government presence"
        >
          <div className="space-y-6">
            {/* Subreddit Cards */}
            <div className="grid gap-4 lg:grid-cols-2">
              {subreddits.map((sub, idx) => (
                <motion.div
                  key={sub.name}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-lg glass-card"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold text-platinum-500-400 flex items-center gap-2">
                        <Hash className="h-5 w-5" />
                        {sub.name}
                      </CardTitle>
                      <Badge
                        variant={sub.sentimentTrend.includes('Negative') ? 'destructive' : 'secondary'}
                        className={sub.sentimentTrend.includes('Negative') ? 'bg-rose-500/20 text-rose-400' : ''}
                      >
                        {sub.sentimentTrend.includes('Negative') ? 'Negative' : 'Mixed'}
                      </Badge>
                    </div>
                    <p className="text-sm text-platinum-500-400 mt-1">{sub.primaryFocus}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-platinum-500-400 mb-2">Common Topics:</p>
                        <div className="flex flex-wrap gap-1">
                          {sub.commonTopics.map((topic) => (
                            <Badge key={topic} variant="outline" className="border-platinum-600 text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-platinum-500-400">Trend:</span>
                        <span className={sub.sentimentTrend.includes('Increasingly negative') ? 'text-rose-400' : 'text-platinum-500-300'}>
                          {sub.sentimentTrend}
                        </span>
                      </div>
                      {sub.userActivity && (
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-platinum-500-400" />
                          <span className="text-platinum-500-400">{sub.userActivity}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </div>

            {/* Bot & Censorship Analysis */}
            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-lg glass-card"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-400" />
                    Bot Indicators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                      <span className="text-platinum-500-300">Coordinated Inauthentic Behavior</span>
                      <Badge variant="default" className="bg-emerald-500/20 text-emerald-400">
                        NOT DETECTED
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                      <span className="text-platinum-500-300">Confidence Level</span>
                      <span className="font-bold text-platinum-500-400">58%</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-platinum-500-400">Bot Indicators:</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-platinum-500-300">
                          <AlertCircle className="h-3 w-3 text-amber-400" />
                          Government shill accounts suspected
                        </div>
                        <div className="flex items-center gap-2 text-sm text-platinum-500-300">
                          <AlertCircle className="h-3 w-3 text-amber-400" />
                          Occasional coordinated upvotes
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-lg glass-card"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-400" />
                    Censorship & Moderation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                      <span className="text-platinum-500-300">Censorship Level</span>
                      <Badge variant="outline" className="border-amber-500/50 text-amber-400">
                        PARTIAL
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                      <span className="text-platinum-500-300">Compliance Rate</span>
                      <div className="text-2xl font-bold text-emerald-400">45%</div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                      <span className="text-platinum-500-300">Content Removed</span>
                      <div className="text-2xl font-bold text-rose-400">89</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-platinum-500-400">Community self-moderation; government presence limited</p>
                </CardContent>
              </motion.div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}

export default RedditCommunitiesSection
