'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  researchPositionSentiment,
  platformSentiments,
  topicSentiments,
  emotionalTones,
  sentimentScoreData,
} from '@/lib/data-loader/echo-chamber-data'
import {
  BarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  Heart,
  Lightbulb,
  Scale,
} from 'lucide-react'

export function SectionSentimentAnalysis() {
  return (
    <div className="space-y-6">
      {/* Sentiment by Research Position */}
      <GlassPanel
        title="Sentiment by Research Position"
        description="How different research perspectives view echo chamber phenomena"
        badge="C.1"
      >
        <div className="space-y-3">
          {researchPositionSentiment.map((item, idx) => {
            const score = parseFloat(item.sentimentScore.match(/-?\d+\.?\d*/)?.[0] || '0')
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-platinum-500-200">{item.position}</h4>
                  <Badge className={
                    score < -0.3 ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' :
                    score > 0.3 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                    'bg-amber-500/20 text-amber-400 border-amber-500/50'
                  }>
                    {item.sentimentScore}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs text-platinum-500-500">Sources: {item.keySources}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-platinum-500-400">Emotion:</span>
                  <Badge variant="outline" className="text-xs">{item.dominantEmotion}</Badge>
                </div>
              </motion.div>
            )
          })}
        </div>
      </GlassPanel>

      {/* Sentiment Score Chart */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Sentiment Score by Research Position</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart
            data={sentimentScoreData}
            xAxisKey="position"
            bars={[{ dataKey: 'score', name: 'Sentiment Score', color: CHART_COLORS.purple }]}
            height={280}
            showGrid={true}
          />
        </CardContent>
      </Card>

      {/* Sentiment by Platform */}
      <GlassPanel
        title="Sentiment by Platform"
        description="User vs researcher sentiment across platforms"
        badge="C.2"
      >
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {platformSentiments.map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-platinum-500-200">{platform.platform}</h4>
                  <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/50">
                    {platform.sentimentResearchers}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-platinum-500-500">Users:</span>
                    <Badge variant="outline" className={
                      platform.sentimentUsers === 'NEGATIVE' ? 'text-rose-400 border-rose-500/50' :
                      platform.sentimentUsers === 'POSITIVE' ? 'text-emerald-400 border-emerald-500/50' :
                      'text-amber-400 border-amber-500/50'
                    }>
                      {platform.sentimentUsers}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-platinum-500-500">Researchers:</span>
                    <Badge variant="outline" className={
                      platform.sentimentResearchers === 'HIGHLY CONCERNED' ? 'text-rose-400 border-rose-500/50' :
                      platform.sentimentResearchers === 'CONCERNED' ? 'text-orange-400 border-orange-500/50' :
                      platform.sentimentResearchers === 'INTEREST' ? 'text-emerald-400 border-emerald-500/50' :
                      'text-amber-400 border-amber-500/50'
                    }>
                      {platform.sentimentResearchers}
                    </Badge>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-platinum-500-400">
                  <Scale className="h-3 w-3" />
                  <span>Consensus: {platform.consensus}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Topic Sentiment Breakdown */}
      <GlassPanel
        title="Topic Sentiment Breakdown"
        description="Sentiment analysis across key research topics"
        badge="C.3"
      >
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {topicSentiments.map((topic, idx) => {
              const score = parseFloat(topic.sentiment)
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
                >
                  <div className="flex items-center gap-3">
                    {score < 0 ? (
                      <TrendingDown className="h-5 w-5 text-rose-400" />
                    ) : score > 0 ? (
                      <TrendingUp className="h-5 w-5 text-emerald-400" />
                    ) : (
                      <Minus className="h-5 w-5 text-platinum-500-400" />
                    )}
                    <span className="font-medium text-platinum-500-200">{topic.topic}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-platinum-500-400">Confidence: {topic.confidence}</span>
                    <Badge className={
                      score < 0 ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' :
                      score > 0 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                      'bg-amber-500/20 text-amber-400 border-amber-500/50'
                    }>
                      {topic.sentiment}
                    </Badge>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Emotional Tone Analysis */}
      <GlassPanel
        title="Emotional Tone Analysis"
        description="Primary and secondary emotions across themes"
        badge="C.4"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {emotionalTones.map((tone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-pink-400" />
                <h4 className="font-semibold text-platinum-500-200">{tone.theme}</h4>
              </div>
              <div className="space-y-1 text-xs">
                <p className="text-platinum-500-400">Primary: <span className="text-platinum-500-200">{tone.primaryEmotion}</span></p>
                <p className="text-platinum-500-400">Secondary: <span className="text-platinum-500-200">{tone.secondaryEmotion}</span></p>
              </div>
              <Badge className={
                tone.intensity === 'HIGH' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50 mt-2' :
                tone.intensity === 'MEDIUM-HIGH' ? 'bg-orange-500/20 text-orange-400 border-orange-500/50 mt-2' :
                'bg-amber-500/20 text-amber-400 border-amber-500/50 mt-2'
              }>
                {tone.intensity} INTENSITY
              </Badge>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}
