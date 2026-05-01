'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, LineChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  ThumbsUp,
  MessageSquare,
  Newspaper,
  Linkedin,
  Instagram,
  Plane,
  GraduationCap,
} from 'lucide-react'
import {
  topicSentimentMatrix,
  sourceSentimentAnalysis,
} from '@/lib/data-loader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const SOURCE_ICONS: Record<string, React.ElementType> = {
  'Government Portals (u.ae, WAM)': Newspaper,
  'Official Tourism (Visit Abu Dhabi)': Plane,
  'News Outlets (Gulf News, Khaleej Times)': Newspaper,
  'LinkedIn/Professional': Linkedin,
  'Social Media (Instagram/Facebook)': Instagram,
  'Travel Platforms (Tripadvisor, Condé Nast)': Plane,
  'Research/Academic': GraduationCap,
}

const SENTIMENT_COLORS: Record<string, string> = {
  'Overwhelmingly Positive': CHART_COLORS.emerald,
  'Extremely Positive': CHART_COLORS.emerald,
  'Strongly Positive': CHART_COLORS.gold,
  'Positive': CHART_COLORS.denim,
}

export function SentimentMatrixSection() {
  const topTopics = topicSentimentMatrix.slice(0, 6)
  const lowerTopics = topicSentimentMatrix.slice(6)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants}>
        <Badge variant="outline" className="mb-2 border-gold-500/50 text-gold-400">
          SENTIMENT ANALYSIS
        </Badge>
        <h2 className="text-2xl font-bold font-rajdhani text-platinum-500-100">
          Topic & Source Sentiment Matrices
        </h2>
        <p className="text-sm text-platinum-500-400 mt-1">
          Comprehensive sentiment scores across 13 topic categories and 7 source types
        </p>
      </motion.div>

      {/* Topic Sentiment Overview */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Topic-Level Sentiment Matrix"
          description="13 topic categories analyzed across positive sentiment queries"
          badge="COMPREHENSIVE"
        >
          <div className="space-y-6">
            {/* Top 6 Topics Chart */}
            <Card className="glass-card border-gold-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gold-400">Top Sentiment Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={topTopics.map((t) => ({
                    topic: t.topic.split('/')[0],
                    score: Math.round(t.score * 100),
                    fill: SENTIMENT_COLORS[t.type] || CHART_COLORS.gold,
                  }))}
                  bars={[{ dataKey: 'score', name: 'Sentiment Score', color: CHART_COLORS.gold }]}
                  xAxisKey="topic"
                  height={220}
                  showGrid={false}
                />
              </CardContent>
            </Card>

            {/* Topic Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topicSentimentMatrix.map((topic, idx) => (
                <motion.div
                  key={topic.topic}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-glass-surface border border-glass-border backdrop-blur-sm hover:border-gold-500/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-medium text-platinum-500-200">{topic.topic}</span>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        topic.confidence === 'Very High'
                          ? 'border-emerald-500/50 text-emerald-400'
                          : topic.confidence === 'High'
                          ? 'border-gold-500/50 text-gold-400'
                          : 'border-deni-500/50 text-deni-400'
                      }`}
                    >
                      {topic.confidence}
                    </Badge>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex-1 mr-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-platinum-500-500">Score</span>
                        <span className="text-gold-400 font-bold">{(topic.score * 100).toFixed(0)}%</span>
                      </div>
                      <Progress
                        value={topic.score * 100}
                        className="h-2"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-platinum-500-500 mt-2 italic">&quot;{topic.narrative}&quot;</p>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Source Sentiment Analysis */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Source-Level Sentiment Analysis"
          description="7 source categories with sentiment consistency metrics"
          badge="VERIFIED"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-gold-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gold-400">Source Sentiment Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sourceSentimentAnalysis.map((s) => ({
                    name: s.source.split(' ')[0],
                    value: Math.round(s.averageSentiment * 100),
                    color:
                      s.averageSentiment >= 0.9
                        ? CHART_COLORS.emerald
                        : s.averageSentiment >= 0.85
                        ? CHART_COLORS.gold
                        : s.averageSentiment >= 0.8
                        ? CHART_COLORS.denim
                        : CHART_COLORS.platinum,
                  }))}
                  height={240}
                  showLegend={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card border-gold-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gold-400">Source Consistency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {sourceSentimentAnalysis.map((source) => {
                  const Icon = SOURCE_ICONS[source.source] || ThumbsUp
                  return (
                    <div
                      key={source.source}
                      className="flex items-center gap-3 p-3 rounded-lg bg-glass-surface border border-glass-border"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          source.averageSentiment >= 0.9
                            ? 'bg-emerald-500/20'
                            : source.averageSentiment >= 0.85
                            ? 'bg-gold-500/20'
                            : source.averageSentiment >= 0.8
                            ? 'bg-deni-500/20'
                            : 'bg-platinum-500/20'
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            source.averageSentiment >= 0.9
                              ? 'text-emerald-400'
                              : source.averageSentiment >= 0.85
                              ? 'text-gold-400'
                              : source.averageSentiment >= 0.8
                              ? 'text-deni-400'
                              : 'text-platinum-500-400'
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-platinum-500-200">{source.source.split('(')[0].trim()}</span>
                          <span
                            className={`text-sm font-bold ${
                              source.averageSentiment >= 0.9
                                ? 'text-emerald-400'
                                : source.averageSentiment >= 0.85
                                ? 'text-gold-400'
                                : source.averageSentiment >= 0.8
                                ? 'text-deni-400'
                                : 'text-platinum-500-400'
                            }`}
                          >
                            {(source.averageSentiment * 100).toFixed(0)}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-platinum-500-500">{source.consistency}</span>
                          <span className="text-xs text-platinum-500-500">{source.keyTheme}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Narrative Theme Validation */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Narrative Theme Validation"
          description="Cross-referenced themes with verified data points and source consistency"
          badge="VALIDATED"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { theme: 'Safety', dataPoints: 5, consistency: 'Very High', color: CHART_COLORS.emerald },
              { theme: 'Diversity', dataPoints: 8, consistency: 'High', color: CHART_COLORS.purple },
              { theme: 'Leadership', dataPoints: 6, consistency: 'Very High', color: CHART_COLORS.orange },
              { theme: 'Hospitality', dataPoints: 4, consistency: 'High', color: CHART_COLORS.gold },
              { theme: 'Humanitarian', dataPoints: 4, consistency: 'Very High', color: CHART_COLORS.rose },
              { theme: 'Achievement', dataPoints: 3, consistency: 'High', color: CHART_COLORS.denim },
              { theme: 'Beauty', dataPoints: 4, consistency: 'Medium-High', color: CHART_COLORS.teal },
              { theme: 'Luxury', dataPoints: 5, consistency: 'High', color: CHART_COLORS.fuchsia },
              { theme: 'Innovation', dataPoints: 5, consistency: 'Very High', color: CHART_COLORS.gold },
              { theme: 'Transformation', dataPoints: 4, consistency: 'High', color: CHART_COLORS.indigo },
            ].map((item) => (
              <motion.div
                key={item.theme}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-glass-surface border border-glass-border backdrop-blur-sm hover:border-opacity-60 transition-all"
                style={{ borderColor: `${item.color}40` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-platinum-500-200">{item.theme}</span>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-platinum-500-500">Data Points</span>
                    <span className="text-platinum-500-300 font-medium">{item.dataPoints}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-platinum-500-500">Consistency</span>
                    <span
                      className="font-medium"
                      style={{ color: item.color }}
                    >
                      {item.consistency}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}
