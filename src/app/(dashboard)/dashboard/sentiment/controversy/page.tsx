'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  Brain,
  Heart,
  Shield,
  Eye,
  Scale,
  Globe,
  Siren,
  Clock,
  Database,
  ShieldAlert,
  CheckCircle,
  XCircle,
  ChevronRight,
  Activity,
  Flame,
  Vote,
  DollarSign,
  Eye as EyeIcon,
  Map,
  Leaf,
  Scale as ScaleIcon,
  Building,
  UsersRound,
  Target,
  Award,
  AlertOctagon,
} from 'lucide-react'
import {
  controversySourceCredibilityMatrix,
  controversyTopicsData,
  controversySentimentSummary,
  controversyHumanRightsKPIs,
  controversyMilitaryKPIs,
  controversyFinancialKPIs,
  controversyClimateKPIs,
} from '@/lib/data-loader/sentiment-data'

// Motion-enabled Card component
const MotionCard = motion(Card)

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardHover = {
  hover: { scale: 1.02, transition: { duration: 0.2 } },
}

const listItem = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
}

export default function ControversyDebatePage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Source credibility tier colors
  const getTierColor = (tier: number) => {
    switch (tier) {
      case 0: return 'text-emerald-400 bg-emerald-500/20'
      case 1: return 'text-navy-500-400 bg-navy-500/20'
      case 2: return 'text-amber-400 bg-amber-500/20'
      case 3: return 'text-orange-400 bg-orange-500/20'
      case 4: return 'text-red-400 bg-red-500/20'
      default: return 'text-platinum-500-400 bg-platinum-500/20'
    }
  }

  const getTierBorder = (tier: number) => {
    switch (tier) {
      case 0: return 'border-emerald-500/50'
      case 1: return 'border-navy-500/50'
      case 2: return 'border-amber-500/50'
      case 3: return 'border-orange-500/50'
      case 4: return 'border-red-500/50'
      default: return 'border-platinum-500/50'
    }
  }

  // Sentiment score colors
  const getSentimentColor = (score: number) => {
    if (score >= 0.5) return 'text-emerald-400 bg-emerald-500/20'
    if (score >= 0.2) return 'text-lime-400 bg-lime-500/20'
    if (score >= -0.2) return 'text-amber-400 bg-amber-500/20'
    if (score >= -0.5) return 'text-orange-400 bg-orange-500/20'
    return 'text-red-400 bg-red-500/20'
  }

  // Relevance level colors
  const getRelevanceColor = (level: string) => {
    switch (level) {
      case 'critical': return 'text-red-400 bg-red-500/20'
      case 'high': return 'text-amber-400 bg-amber-500/20'
      case 'medium': return 'text-amber-400 bg-amber-500/20'
      case 'low': return 'text-emerald-400 bg-emerald-500/20'
      default: return 'text-platinum-500-400 bg-platinum-500/20'
    }
  }

  // Alert level colors
  const getAlertColor = (level: string) => {
    switch (level) {
      case 'RED': return 'text-red-400 bg-red-500/20 border-red-500/50'
      case 'ORANGE': return 'text-orange-400 bg-orange-500/20 border-orange-500/50'
      case 'YELLOW': return 'text-amber-400 bg-amber-500/20 border-amber-500/50'
      case 'GREEN': return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/50'
      default: return 'text-platinum-500-400 bg-platinum-500/20 border-platinum-500/50'
    }
  }

  // Chart data for sentiment summary
  const sentimentChartData = controversyTopicsData.map(topic => ({
    name: topic.title.length > 15 ? topic.title.substring(0, 15) + '...' : topic.title,
    score: topic.sentimentScore,
    positive: topic.sentiment.positive,
    negative: topic.sentiment.negative,
    volume: topic.metrics.volume,
  }))

  // Calculate sentiment distribution from topics
  const totalSentimentVolume = controversyTopicsData.reduce((acc, t) => acc + t.sentiment.positive + t.sentiment.negative + t.sentiment.neutral, 0)
  const positivePercent = totalSentimentVolume > 0 ? controversyTopicsData.reduce((acc, t) => acc + t.sentiment.positive, 0) / totalSentimentVolume * 100 : 0
  const neutralPercent = totalSentimentVolume > 0 ? controversyTopicsData.reduce((acc, t) => acc + t.sentiment.neutral, 0) / totalSentimentVolume * 100 : 0
  const negativePercent = totalSentimentVolume > 0 ? controversyTopicsData.reduce((acc, t) => acc + t.sentiment.negative, 0) / totalSentimentVolume * 100 : 0

  const sentimentDistributionData = [
    { name: 'Positive', value: positivePercent, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: neutralPercent, color: CHART_COLORS.platinum },
    { name: 'Negative', value: negativePercent, color: CHART_COLORS.rose },
  ]

  // Filter topics by category
  const filteredTopics = selectedCategory === 'all'
    ? controversyTopicsData
    : controversyTopicsData.filter(t => {
        if (selectedCategory === 'critical') return t.uaeRelevance.level === 'CRITICAL'
        if (selectedCategory === 'high') return t.uaeRelevance.level === 'HIGH'
        if (selectedCategory === 'positive') return t.sentimentScore > 0
        if (selectedCategory === 'negative') return t.sentimentScore < 0
        return true
      })

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge variant="outline" className="mb-2 border-amber-500/50 text-amber-400">
              <Scale className="w-3 h-3 mr-1" />
              CONTROVERSY & DEBATE
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700"
          >
            Controversy & Debate Analysis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-platinum-500-400"
          >
            {controversyTopicsData.length} controversy topics • {controversySourceCredibilityMatrix.length} sources • Sentiment scale {-1.0} to {1.0}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <Button variant="outline" className="gap-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10">
            <Brain className="h-4 w-4" />
            Deep Analysis
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-500-950 gap-2">
            <Target className="h-4 w-4" />
            Generate Report
          </Button>
        </motion.div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Total Topics"
            value={controversyTopicsData.length.toString()}
            icon={<Scale className="h-6 w-6" />}
            gradient="gold"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Critical Issues"
            value={controversyTopicsData.filter(t => t.uaeRelevance.level === 'CRITICAL').length.toString()}
            icon={<AlertTriangle className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Avg Sentiment"
            value={controversySentimentSummary.averageSentiment.toFixed(2)}
            icon={<Activity className="h-6 w-6" />}
            gradient="orange"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Data Sources"
            value={controversySourceCredibilityMatrix.length.toString()}
            icon={<Database className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="kpis">KPIs</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Distribution Pie */}
            <MotionCard
              variants={cardHover}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="glass-card border-amber-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">
                  <Scale className="w-4 h-4 inline mr-2" />
                  Sentiment Distribution
                </CardTitle>
                <CardDescription>Overall sentiment across all controversy topics</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sentimentDistributionData}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </MotionCard>

            {/* Sentiment by Topic Bar Chart */}
            <MotionCard
              variants={cardHover}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="glass-card border-amber-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  Sentiment by Topic
                </CardTitle>
                <CardDescription>Sentiment scores across controversy topics</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={sentimentChartData.slice(0, 8)}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'score', name: 'Sentiment Score', color: CHART_COLORS.gold },
                  ]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </MotionCard>
          </div>

          {/* Critical Topics */}
          <MotionCard
            variants={cardHover}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="glass-card border-red-500/30"
          >
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani">
                <AlertTriangle className="w-4 h-4 inline mr-2 text-red-400" />
                Critical Priority Topics
              </CardTitle>
              <CardDescription>High-impact controversy areas requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {controversyTopicsData
                  .filter(t => t.uaeRelevance.level === 'CRITICAL')
                  .map((topic, idx) => (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 cursor-pointer"
                      onClick={() => setSelectedTopic(topic.id)}
                    >
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-platinum-500-200 text-sm">{topic.title}</h4>
                        <Badge className={getAlertColor(topic.alertLevel)} variant="outline">
                          {topic.alertLevel}
                        </Badge>
                      </div>
                      <p className="mt-2 text-xs text-platinum-500-400 line-clamp-2">{topic.description.substring(0, 100)}...</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs text-red-400">Score: {topic.sentimentScore.toFixed(2)}</span>
                        <span className="text-xs text-platinum-500-500">Vol: {(topic.metrics.volume / 1000).toFixed(0)}K</span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </CardContent>
          </MotionCard>
        </TabsContent>

        {/* Topics Tab */}
        <TabsContent value="topics" className="space-y-6">
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {[
              { key: 'all', label: 'All Topics' },
              { key: 'critical', label: 'Critical', color: 'rose' },
              { key: 'high', label: 'High Priority', color: 'amber' },
              { key: 'positive', label: 'Positive Sentiment', color: 'emerald' },
              { key: 'negative', label: 'Negative Sentiment', color: 'red' },
            ].map(filter => (
              <Button
                key={filter.key}
                variant={selectedCategory === filter.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(filter.key)}
                className={selectedCategory === filter.key
                  ? filter.color === 'rose' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50'
                  : filter.color === 'amber' ? 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                  : filter.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                  : filter.color === 'red' ? 'bg-red-500/20 text-red-400 border-red-500/50'
                  : 'bg-gold-500/20 text-gold-400 border-gold-500/50'
                  : ''
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Topics Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredTopics.map((topic, idx) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.01 }}
                className="glass-card border-amber-500/20 hover:border-amber-500/40 transition-all"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-rajdhani">
                        {topic.title}
                      </CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge className={getRelevanceColor(topic.uaeRelevance.level)} variant="outline">
                          {topic.uaeRelevance.level}
                        </Badge>
                        <Badge className={getAlertColor(topic.alertLevel)} variant="outline">
                          {topic.alertLevel}
                        </Badge>
                      </div>
                    </div>
                    <div className={`text-2xl font-bold ${topic.sentimentScore >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {topic.sentimentScore >= 0 ? '+' : ''}{topic.sentimentScore.toFixed(2)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-platinum-500-400 line-clamp-2">{topic.description}</p>

                  {/* Sentiment breakdown */}
                  <div className="mt-4 space-y-2">
                    <div className="flex gap-1">
                      <div
                        className="h-2 flex-1 rounded-l-full bg-emerald-500"
                        style={{ width: `${topic.sentiment.positive}%` }}
                      />
                      <div
                        className="h-2 flex-1 bg-platinum-500"
                        style={{ width: `${topic.sentiment.neutral}%` }}
                      />
                      <div
                        className="h-2 flex-1 rounded-r-full bg-red-500"
                        style={{ width: `${topic.sentiment.negative}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-platinum-500-500">
                      <span>Pos: {topic.sentiment.positive}%</span>
                      <span>Neu: {topic.sentiment.neutral}%</span>
                      <span>Neg: {topic.sentiment.negative}%</span>
                    </div>
                  </div>

                  {/* Key Drivers */}
                  <div className="mt-4">
                    <h5 className="text-xs font-semibold text-platinum-500-300 mb-2">Key Drivers</h5>
                    <div className="flex flex-wrap gap-1">
                      {topic.keyDrivers.slice(0, 3).map((driver, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-platinum-500/20 text-platinum-500-300">
                          {driver}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded bg-platinum-500/10">
                      <div className="text-lg font-bold text-platinum-500-200">{(topic.metrics.volume / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-platinum-500-500">Volume</div>
                    </div>
                    <div className="p-2 rounded bg-platinum-500/10">
                      <div className="text-lg font-bold text-platinum-500-200">{(topic.metrics.reach / 1000000).toFixed(1)}M</div>
                      <div className="text-xs text-platinum-500-500">Reach</div>
                    </div>
                    <div className="p-2 rounded bg-platinum-500/10">
                      <div className="text-lg font-bold text-platinum-500-200">{topic.metrics.credibility}%</div>
                      <div className="text-xs text-platinum-500-500">Credibility</div>
                    </div>
                  </div>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Score Trend */}
            <MotionCard
              variants={cardHover}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="glass-card border-amber-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">
                  <Activity className="w-4 h-4 inline mr-2" />
                  Sentiment Score Distribution
                </CardTitle>
                <CardDescription>Scores ranging from -1.0 (extremely negative) to +1.0 (extremely positive)</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={controversyTopicsData.map(t => ({
                    name: t.title.length > 12 ? t.title.substring(0, 12) + '...' : t.title,
                    score: t.sentimentScore,
                  }))}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'score', name: 'Sentiment', color: CHART_COLORS.gold },
                  ]}
                  height={350}
                  showGrid={true}
                />
              </CardContent>
            </MotionCard>

            {/* Positive vs Negative Breakdown */}
            <MotionCard
              variants={cardHover}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="glass-card border-amber-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  Positive vs Negative Breakdown
                </CardTitle>
                <CardDescription>Detailed sentiment breakdown by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={controversyTopicsData.map(t => ({
                    name: t.title.length > 12 ? t.title.substring(0, 12) + '...' : t.title,
                    positive: t.sentiment.positive,
                    negative: t.sentiment.negative,
                  }))}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'positive', name: 'Positive %', color: CHART_COLORS.emerald },
                    { dataKey: 'negative', name: 'Negative %', color: CHART_COLORS.rose },
                  ]}
                  height={350}
                  showGrid={true}
                />
              </CardContent>
            </MotionCard>
          </div>

          {/* Sentiment Summary Stats */}
          <div className="grid gap-6 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card border-emerald-500/30 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">{positivePercent.toFixed(1)}%</div>
                  <div className="text-sm text-platinum-500-400">Positive Sentiment</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card border-red-500/30 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400">{negativePercent.toFixed(1)}%</div>
                  <div className="text-sm text-platinum-500-400">Negative Sentiment</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card border-platinum-500/30 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-platinum-500/20 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-platinum-500-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-platinum-500-400">{neutralPercent.toFixed(1)}%</div>
                  <div className="text-sm text-platinum-500-400">Neutral Sentiment</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card border-amber-500/30 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Scale className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400">{controversySentimentSummary.averageSentiment.toFixed(2)}</div>
                  <div className="text-sm text-platinum-500-400">Average Score</div>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <MotionCard
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card border-amber-500/30"
          >
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani">
                <Database className="w-4 h-4 inline mr-2" />
                Source Credibility Matrix
              </CardTitle>
              <CardDescription>{controversySourceCredibilityMatrix.length} sources across 5 credibility tiers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {controversySourceCredibilityMatrix.map((source, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.02 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-platinum-500/5 hover:bg-platinum-500/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Badge className={getTierColor(source.tier)} variant="outline">
                        Tier {source.tier}
                      </Badge>
                      <div>
                        <div className="font-medium text-platinum-500-200">{source.source}</div>
                        <div className="text-xs text-platinum-500-500">{source.url}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className={getRelevanceColor(source.uaeRelevance)} variant="outline">
                        {source.uaeRelevance}
                      </Badge>
                      <div className="text-sm text-platinum-500-400">
                        Score: {source.credibilityScore}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </MotionCard>
        </TabsContent>

        {/* KPIs Tab */}
        <TabsContent value="kpis" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Human Rights KPIs */}
            <MotionCard
              variants={cardHover}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="glass-card border-red-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">
                  <ShieldAlert className="w-4 h-4 inline mr-2 text-red-400" />
                  Human Rights KPIs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {controversyHumanRightsKPIs.map((kpi, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-platinum-500-300">{kpi.kpi}</span>
                      <Badge variant="outline" className="text-red-400 border-red-500/50">
                        {kpi.currentValue}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </MotionCard>

            {/* Military KPIs */}
            <MotionCard
              variants={cardHover}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="glass-card border-orange-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">
                  <Shield className="w-4 h-4 inline mr-2 text-orange-400" />
                  Military KPIs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {controversyMilitaryKPIs.map((kpi, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-platinum-500-300">{kpi.kpi}</span>
                      <Badge variant="outline" className="text-orange-400 border-orange-500/50">
                        {kpi.currentValue}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </MotionCard>

            {/* Financial KPIs */}
            <MotionCard
              variants={cardHover}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="glass-card border-emerald-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">
                  <DollarSign className="w-4 h-4 inline mr-2 text-emerald-400" />
                  Financial KPIs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {controversyFinancialKPIs.map((kpi, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-platinum-500-300">{kpi.kpi}</span>
                      <Badge variant="outline" className="text-emerald-400 border-emerald-500/50">
                        {kpi.currentValue}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </MotionCard>

            {/* Climate KPIs */}
            <MotionCard
              variants={cardHover}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="glass-card border-teal-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani">
                  <Leaf className="w-4 h-4 inline mr-2 text-teal-400" />
                  Climate KPIs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {controversyClimateKPIs.map((kpi, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-platinum-500-300">{kpi.kpi}</span>
                      <Badge variant="outline" className="text-teal-400 border-teal-500/50">
                        {kpi.currentValue}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </MotionCard>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
