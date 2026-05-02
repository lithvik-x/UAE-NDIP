/**
 * TikTok Engagement Section Component
 */

'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Hash, TrendingUp, Heart, MessageSquare, Share2 } from 'lucide-react'

interface EngagementProps {
  hashtagPerformance: Array<{
    hashtag: string
    posts: string
    sentiment: 'positive' | 'negative' | 'neutral'
    trend: number
  }>
  platformStatus: {
    status: string
    uaeInfluencers: number
    topInfluencer: {
      handle: string
      followers: string
      avgViews: string
      engagement: string
    }
  }
}

export function EngagementSection({ hashtagPerformance, platformStatus }: EngagementProps) {
  return (
    <div className="space-y-6">
      {/* Platform Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card border-rose-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-rose-400" />
              Platform Status
            </CardTitle>
            <CardDescription>Current TikTok status in UAE</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="outline" className="text-emerald-400 border-emerald-500/30">
                {platformStatus.status}
              </Badge>
              <span className="text-sm text-platinum-400">
                {platformStatus.uaeInfluencers.toLocaleString()} UAE-based influencers
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-4">
              <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                <span className="text-lg font-bold text-gold-700">{platformStatus.topInfluencer.handle}</span>
                <span className="text-xs text-platinum-400">Top Influencer</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                <span className="text-lg font-bold text-platinum-200">{platformStatus.topInfluencer.followers}</span>
                <span className="text-xs text-platinum-400">Followers</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                <span className="text-lg font-bold text-platinum-200">{platformStatus.topInfluencer.avgViews}</span>
                <span className="text-xs text-platinum-400">Avg Views</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                <span className="text-lg font-bold text-emerald-400">{platformStatus.topInfluencer.engagement}</span>
                <span className="text-xs text-platinum-400">Engagement</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Trending Hashtags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass-card border-gold-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Hash className="h-5 w-5 text-gold-700" />
              Trending Hashtags
            </CardTitle>
            <CardDescription>Most used hashtags in UAE TikTok content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {hashtagPerformance.map((tag, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-full border ${
                    tag.sentiment === 'positive'
                      ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                      : tag.sentiment === 'negative'
                      ? 'bg-rose-500/20 border-rose-500/30 text-rose-400'
                      : 'bg-platinum-500/20 border-platinum-500/30 text-platinum-400'
                  }`}
                >
                  <Hash className="h-3 w-3 inline mr-1" />
                  {tag.hashtag}
                  <span className="ml-2 text-xs opacity-70">({tag.posts})</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
