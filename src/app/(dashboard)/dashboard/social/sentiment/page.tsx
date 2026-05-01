// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
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
  Globe,
  Globe2,
  Hash,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  ThumbsUp,
  ThumbsDown,
  Minus,
  TrendingDown,
  Eye,
  Brain,
  PieChart as PieChartIcon,
  BarChart3,
  Activity,
  Clock,
  MessageSquare,
  Camera,
  Video,
  Link,
  MessageCircle,
  Share2,
  Heart,
  User,
  Smile,
  Flame,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react'
import {
  useTwitterIntelligenceData,
  useTiktokIntelligenceData,
  useInstagramIntelligenceData,
  useLinkedinIntelligenceData,
  useYoutubeIntelligenceData,
  useFacebookIntelligenceData,
  useSocialSentimentData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardHover = {
  whileHover: { scale: 1.02 },
}

export default function SentimentAnalysisDashboardPage() {
  const { data: socialSentiment } = useSocialSentimentData()
  const { data: twitter } = useTwitterIntelligenceData()
  const { data: tiktok } = useTiktokIntelligenceData()
  const { data: instagram } = useInstagramIntelligenceData()
  const { data: linkedin } = useLinkedinIntelligenceData()
  const { data: youtube } = useYoutubeIntelligenceData()
  const { data: facebook } = useFacebookIntelligenceData()

  // Use social sentiment data as primary source
  const sentimentData = socialSentiment || {
    metrics: { overallScore: 62, totalMentions: 15420000, positivePercentage: 48, neutralPercentage: 32, negativePercentage: 20 },
    platforms: [],
    hashtags: [],
    emotions: [],
    findings: [],
    monthlyTrend: [],
  }

  // Platform data from social sentiment or fallbacks
  const platforms = [
    { name: 'Twitter/X', data: twitter, color: CHART_COLORS.platinum, icon: Twitter },
    { name: 'TikTok', data: tiktok, color: CHART_COLORS.rose, icon: Heart },
    { name: 'Instagram', data: instagram, color: CHART_COLORS.purple, icon: Instagram },
    { name: 'LinkedIn', data: linkedin, color: CHART_COLORS.info, icon: Linkedin },
    { name: 'YouTube', data: youtube, color: CHART_COLORS.orange, icon: Youtube },
    { name: 'Facebook', data: facebook, color: CHART_COLORS.indigo, icon: Globe },
  ].filter(p => p.data)

  // Calculate aggregate sentiment from platforms
  const aggregateSentiment = platforms.length > 0 ? {
    positive: Math.round(platforms.reduce((sum, p) => sum + (p.data?.metrics?.sentiment?.breakdown?.positive || 50), 0) / platforms.length),
    neutral: Math.round(platforms.reduce((sum, p) => sum + (p.data?.metrics?.sentiment?.breakdown?.neutral || 30), 0) / platforms.length),
    negative: Math.round(platforms.reduce((sum, p) => sum + (p.data?.metrics?.sentiment?.breakdown?.negative || 20), 0) / platforms.length),
  } : {
    positive: sentimentData.metrics?.positivePercentage || 48,
    neutral: sentimentData.metrics?.neutralPercentage || 32,
    negative: sentimentData.metrics?.negativePercentage || 20,
  }

  // Overall sentiment score
  const overallScore = sentimentData.metrics?.overallScore || 62

  // Sentiment data for pie chart
  const sentimentOverview = [
    { name: 'Positive', value: aggregateSentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: aggregateSentiment.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: aggregateSentiment.negative, color: CHART_COLORS.rose },
  ]

  // Platform sentiment comparison from social sentiment data
  const platformSentiment = sentimentData.platforms?.length > 0
    ? sentimentData.platforms.map(p => ({
        name: p.platform,
        positive: p.positive,
        neutral: p.neutral,
        negative: p.negative,
        score: p.score,
        color: CHART_COLORS.navy,
      }))
    : platforms.map(p => ({
        name: p.name,
        positive: p.data?.metrics?.sentiment?.breakdown?.positive || 50,
        neutral: p.data?.metrics?.sentiment?.breakdown?.neutral || 30,
        negative: p.data?.metrics?.sentiment?.breakdown?.negative || 20,
        score: p.data?.metrics?.sentiment?.score || 60,
        color: p.color,
      }))

  // Monthly sentiment trend
  const monthlyTrend = sentimentData.monthlyTrend?.length > 0
    ? sentimentData.monthlyTrend
    : [
        { month: 'Jan', positive: 42, neutral: 35, negative: 23, score: 52 },
        { month: 'Feb', positive: 44, neutral: 34, negative: 22, score: 54 },
        { month: 'Mar', positive: 43, neutral: 33, negative: 24, score: 53 },
        { month: 'Apr', positive: 45, neutral: 32, negative: 23, score: 55 },
        { month: 'May', positive: 47, neutral: 31, negative: 22, score: 58 },
        { month: 'Jun', positive: 46, neutral: 32, negative: 22, score: 57 },
        { month: 'Jul', positive: 48, neutral: 30, negative: 22, score: 59 },
        { month: 'Aug', positive: 50, neutral: 29, negative: 21, score: 62 },
        { month: 'Sep', positive: 49, neutral: 30, negative: 21, score: 61 },
        { month: 'Oct', positive: 51, neutral: 29, negative: 20, score: 63 },
        { month: 'Nov', positive: 50, neutral: 28, negative: 22, score: 62 },
        { month: 'Dec', positive: 52, neutral: 28, negative: 20, score: 65 },
      ]

  // Emotion analysis (Plutchik model)
  const emotionData = sentimentData.emotions?.length > 0
    ? sentimentData.emotions.map(e => ({ emotion: e.emotion, value: e.value }))
    : [
        { emotion: 'Joy', value: 35 },
        { emotion: 'Trust', value: 62 },
        { emotion: 'Fear', value: 28 },
        { emotion: 'Surprise', value: 22 },
        { emotion: 'Sadness', value: 18 },
        { emotion: 'Disgust', value: 15 },
        { emotion: 'Anger', value: 24 },
        { emotion: 'Anticipation', value: 45 },
      ]

  // Hashtag sentiment data
  const hashtagData = sentimentData.hashtags || []

  // Key findings
  const keyFindings = sentimentData.findings?.length > 0
    ? sentimentData.findings
    : [
        { type: 'positive', finding: 'Tourism content generates overwhelmingly positive sentiment', source: 'Instagram, TikTok, YouTube', metric: '+18% engagement' },
        { type: 'negative', finding: 'Reddit shows highest negative sentiment (53%)', source: 'r/dubai, r/uae', metric: '53% negative' },
        { type: 'warning', finding: 'Coordinated inauthentic behavior detected on Twitter/X', source: 'Bot analysis', metric: '91% bots' },
        { type: 'positive', finding: 'LinkedIn shows strongest professional sentiment', source: 'LinkedIn UAE', metric: '64% positive' },
      ]

  // Top hashtags by sentiment
  const topHashtags = hashtagData.length > 0
    ? hashtagData.slice(0, 8)
    : [
        { hashtag: '#dubailife', sentiment: 'positive', volume: 2450000, trend: 'stable', platform: 'All' },
        { hashtag: '#uaenews', sentiment: 'neutral', volume: 1890000, trend: 'rising', platform: 'Twitter' },
        { hashtag: '#gitex', sentiment: 'positive', volume: 1340000, trend: 'rising', platform: 'All' },
        { hashtag: '#UAE', sentiment: 'positive', volume: 3200000, trend: 'stable', platform: 'TikTok' },
        { hashtag: '#AbuDhabi', sentiment: 'positive', volume: 2100000, trend: 'stable', platform: 'Instagram' },
        { hashtag: '#Jobs', sentiment: 'positive', volume: 980000, trend: 'declining', platform: 'LinkedIn' },
      ]

  // Sentiment summary stats
  const sentimentStats = [
    { label: 'Overall Score', value: overallScore, icon: Brain, trend: '+8%', color: CHART_COLORS.navy },
    { label: 'Avg Positive', value: `${aggregateSentiment.positive}%`, icon: ThumbsUp, trend: '+5%', color: CHART_COLORS.emerald },
    { label: 'Avg Negative', value: `${aggregateSentiment.negative}%`, icon: ThumbsDown, trend: '-3%', color: CHART_COLORS.rose },
    { label: 'Avg Neutral', value: `${aggregateSentiment.neutral}%`, icon: Minus, trend: '-2%', color: CHART_COLORS.platinum },
  ]

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8 p-8 font-rajdhani"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <TrendingUp className="mr-1 h-3 w-3" />
            SENTIMENT INTELLIGENCE
          </Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum">
            Social Media Sentiment Analysis
          </h1>
          <p className="mt-2 text-platinum-400 font-rajdhani">
            Cross-platform sentiment analysis: overall {overallScore > 50 ? 'positive' : 'mixed'} outlook
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10 font-rajdhani">
            <Brain className="h-4 w-4" />
            Deep Analysis
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 text-white gap-2 font-rajdhani">
            <Zap className="h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sentimentStats.map((stat, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.02 }}>
            <MetricCard
              title={stat.label}
              value={stat.value}
              previousValue={stat.value}
              icon={<stat.icon className="h-6 w-6" style={{ color: stat.color }} />}
              gradient="denim"
            />
          </motion.div>
        ))}
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview" className="font-rajdhani">
            <PieChartIcon className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="platforms" className="font-rajdhani">
            <Globe2 className="mr-2 h-4 w-4" />
            Platform Comparison
          </TabsTrigger>
          <TabsTrigger value="hashtags" className="font-rajdhani">
            <Hash className="mr-2 h-4 w-4" />
            Hashtag Sentiment
          </TabsTrigger>
          <TabsTrigger value="emotions" className="font-rajdhani">
            <Smile className="mr-2 h-4 w-4" />
            Emotion Analysis
          </TabsTrigger>
          <TabsTrigger value="trends" className="font-rajdhani">
            <TrendingUp className="mr-2 h-4 w-4" />
            Trends
          </TabsTrigger>
          <TabsTrigger value="findings" className="font-rajdhani">
            <Lightbulb className="mr-2 h-4 w-4" />
            Key Findings
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Sentiment Overview" description="Cross-platform sentiment aggregation">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <PieChartIcon className="h-5 w-5 text-navy-400" />
                        Overall Sentiment Distribution
                      </CardTitle>
                      <CardDescription className="font-rajdhani">Aggregated across all platforms</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={sentimentOverview}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </motion.div>

                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-cyan-400" />
                        Sentiment by Platform
                      </CardTitle>
                      <CardDescription className="font-rajdhani">Score breakdown per platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {platformSentiment.map((platform, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-platinum-200 font-rajdhani">{platform.name}</span>
                              <span className="text-sm font-bold font-rajdhani" style={{ color: platform.color }}>
                                {platform.score}
                              </span>
                            </div>
                            <div className="flex h-2 overflow-hidden rounded-full bg-platinum-700">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${platform.positive}%` }}
                                transition={{ delay: idx * 0.05 + 0.2, duration: 0.5 }}
                                className="bg-emerald-500"
                              />
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${platform.neutral}%` }}
                                transition={{ delay: idx * 0.05 + 0.3, duration: 0.5 }}
                                className="bg-platinum"
                              />
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${platform.negative}%` }}
                                transition={{ delay: idx * 0.05 + 0.4, duration: 0.5 }}
                                className="bg-rose-500"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-400" />
                      Monthly Sentiment Trend
                    </CardTitle>
                    <CardDescription className="font-rajdhani">Overall sentiment score over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={monthlyTrend}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                        { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.platinum },
                        { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Platform Comparison Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Platform Sentiment Comparison" description="Detailed breakdown by platform">
              <div className="space-y-6">
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-gold" />
                      Sentiment Score Comparison
                    </CardTitle>
                    <CardDescription className="font-rajdhani">Overall sentiment score (0-100) by platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={platformSentiment.map(p => ({
                        name: p.name,
                        value: p.score,
                        color: p.color,
                      }))}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Sentiment Score', color: CHART_COLORS.navy }]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <ThumbsUp className="h-5 w-5 text-emerald-400" />
                        Positive Sentiment
                      </CardTitle>
                      <CardDescription className="font-rajdhani">Highest positive % by platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={platformSentiment.map(p => ({
                          name: p.name,
                          value: p.positive,
                          color: p.color,
                        }))}
                        xAxisKey="name"
                        bars={[{ dataKey: 'value', name: 'Positive %', color: CHART_COLORS.emerald }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </motion.div>

                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <ThumbsDown className="h-5 w-5 text-rose-400" />
                        Negative Sentiment
                      </CardTitle>
                      <CardDescription className="font-rajdhani">Lowest negative % by platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={platformSentiment.map(p => ({
                          name: p.name,
                          value: p.negative,
                          color: p.color,
                        }))}
                        xAxisKey="name"
                        bars={[{ dataKey: 'value', name: 'Negative %', color: CHART_COLORS.rose }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                      <Activity className="h-5 w-5 text-navy-400" />
                      Platform Sentiment Breakdown
                    </CardTitle>
                    <CardDescription className="font-rajdhani">Detailed sentiment percentages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-4">
                        {platformSentiment.map((platform, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 backdrop-blur-sm"
                          >
                            <div className="mb-3 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className="h-3 w-3 rounded-full"
                                  style={{ backgroundColor: platform.color }}
                                />
                                <span className="font-semibold text-platinum-200 font-rajdhani">{platform.name}</span>
                              </div>
                              <Badge variant="outline" className="text-gold font-rajdhani">Score: {platform.score}</Badge>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="text-center">
                                <p className="text-2xl font-bold text-emerald-400 font-rajdhani">{platform.positive}%</p>
                                <p className="text-xs text-platinum-400 font-rajdhani">Positive</p>
                              </div>
                              <div className="text-center">
                                <p className="text-2xl font-bold text-platinum font-rajdhani">{platform.neutral}%</p>
                                <p className="text-xs text-platinum-400 font-rajdhani">Neutral</p>
                              </div>
                              <div className="text-center">
                                <p className="text-2xl font-bold text-rose-400 font-rajdhani">{platform.negative}%</p>
                                <p className="text-xs text-platinum-400 font-rajdhani">Negative</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Hashtag Sentiment Tab */}
        <TabsContent value="hashtags" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Hashtag Sentiment Analysis" description="Trending hashtags with sentiment labels">
              <div className="space-y-6">
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                      <Hash className="h-5 w-5 text-cyan-400" />
                      Top Hashtags by Sentiment
                    </CardTitle>
                    <CardDescription className="font-rajdhani">Most discussed topics with sentiment labels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {topHashtags.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-sm font-medium text-gold font-rajdhani">{item.hashtag}</span>
                            <Badge
                              variant={
                                item.sentiment === 'positive' ? 'default' :
                                item.sentiment === 'negative' ? 'destructive' : 'outline'
                              }
                              className={`text-xs font-rajdhani ${
                                item.sentiment === 'positive' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                                item.sentiment === 'negative' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' : ''
                              }`}
                            >
                              {item.sentiment}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-xs text-platinum-400">
                            <span className="font-rajdhani">{item.platform}</span>
                            <span className="font-rajdhani">{(item.volume / 1000000).toFixed(1)}M</span>
                          </div>
                          <div className="mt-2 flex items-center gap-1">
                            {item.trend === 'rising' && <TrendingUp className="h-3 w-3 text-emerald-400" />}
                            {item.trend === 'declining' && <TrendingDown className="h-3 w-3 text-rose-400" />}
                            {item.trend === 'stable' && <Minus className="h-3 w-3 text-platinum-400" />}
                            <span className="text-xs text-platinum-400 font-rajdhani capitalize">{item.trend}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>

                <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                      <Hash className="h-5 w-5 text-purple-400" />
                      Sentiment Distribution by Hashtag
                    </CardTitle>
                    <CardDescription className="font-rajdhani">Volume-weighted sentiment analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={topHashtags.slice(0, 6).map(h => ({
                        name: h.hashtag.replace('#', ''),
                        volume: h.volume / 1000000,
                        sentiment: h.sentiment === 'positive' ? 1 : h.sentiment === 'negative' ? -1 : 0,
                      }))}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.info },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Emotion Analysis Tab */}
        <TabsContent value="emotions" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Emotion Analysis" description="Plutchik emotion model analysis across platforms">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-emerald-400" />
                        Emotion Distribution
                      </CardTitle>
                      <CardDescription className="font-rajdhani">Plutchik emotion model intensity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={emotionData}
                        xAxisKey="emotion"
                        bars={[{ dataKey: 'value', name: 'Intensity', color: CHART_COLORS.navy }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </motion.div>

                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <RadarChart className="h-5 w-5 text-purple-400" />
                        Emotion Radar
                      </CardTitle>
                      <CardDescription className="font-rajdhani">Multi-dimensional emotion analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RadarChart
                        data={emotionData}
                        metrics={[
                          { dataKey: 'value', name: 'Intensity', color: CHART_COLORS.navy },
                        ]}
                        height={280}
                      />
                    </CardContent>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                      <Activity className="h-5 w-5 text-cyan-400" />
                      Emotion Breakdown
                    </CardTitle>
                    <CardDescription className="font-rajdhani">Detailed emotion analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {emotionData.map((emotion, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 backdrop-blur-sm"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-platinum-200 font-rajdhani">{emotion.emotion}</span>
                            <Activity className="h-4 w-4 text-platinum" />
                          </div>
                          <p className="text-2xl font-bold text-gold font-rajdhani">{emotion.value}</p>
                          <Progress value={emotion.value} className="mt-2 h-1" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Sentiment Trends" description="Historical sentiment analysis and predictions">
              <div className="space-y-6">
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-400" />
                      Overall Sentiment Score Trend
                    </CardTitle>
                    <CardDescription className="font-rajdhani">Monthly sentiment score (0-100)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={monthlyTrend}
                      xAxisKey="month"
                      areas={[{ dataKey: 'score', name: 'Sentiment Score', color: CHART_COLORS.navy }]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <ThumbsUp className="h-5 w-5 text-emerald-400" />
                        Positive Trend
                      </CardTitle>
                      <CardDescription className="font-rajdhani">Positive sentiment over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={monthlyTrend}
                        xAxisKey="month"
                        areas={[{ dataKey: 'positive', name: 'Positive %', color: CHART_COLORS.emerald }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </motion.div>

                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <ThumbsDown className="h-5 w-5 text-rose-400" />
                        Negative Trend
                      </CardTitle>
                      <CardDescription className="font-rajdhani">Negative sentiment over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={monthlyTrend}
                        xAxisKey="month"
                        areas={[{ dataKey: 'negative', name: 'Negative %', color: CHART_COLORS.rose }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Key Findings Tab */}
        <TabsContent value="findings" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Key Sentiment Findings" description="Critical insights from sentiment analysis">
              <div className="space-y-6">
                {/* Summary Alerts */}
                <div className="grid gap-4 sm:grid-cols-3">
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-emerald-500/50 bg-emerald-500/10 p-4">
                    <CardContent className="flex items-center gap-3 p-0">
                      <ThumbsUp className="h-8 w-8 text-emerald-400" />
                      <div>
                        <p className="text-2xl font-bold text-emerald-400 font-rajdhani">{aggregateSentiment.positive}%</p>
                        <p className="text-sm text-platinum-400 font-rajdhani">Average Positive</p>
                      </div>
                    </CardContent>
                  </motion.div>
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-platinum/50 bg-platinum/10 p-4">
                    <CardContent className="flex items-center gap-3 p-0">
                      <Minus className="h-8 w-8 text-platinum" />
                      <div>
                        <p className="text-2xl font-bold text-platinum font-rajdhani">{aggregateSentiment.neutral}%</p>
                        <p className="text-sm text-platinum-400 font-rajdhani">Average Neutral</p>
                      </div>
                    </CardContent>
                  </motion.div>
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-rose-500/50 bg-rose-500/10 p-4">
                    <CardContent className="flex items-center gap-3 p-0">
                      <ThumbsDown className="h-8 w-8 text-rose-400" />
                      <div>
                        <p className="text-2xl font-bold text-rose-400 font-rajdhani">{aggregateSentiment.negative}%</p>
                        <p className="text-sm text-platinum-400 font-rajdhani">Average Negative</p>
                      </div>
                    </CardContent>
                  </motion.div>
                </div>

                {/* Key Findings List */}
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-gold" />
                      Sentiment Intelligence Findings
                    </CardTitle>
                    <CardDescription className="font-rajdhani">Critical sentiment insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-4">
                        {keyFindings.map((finding, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`flex items-start justify-between rounded-lg border p-4 ${
                              finding.type === 'positive'
                                ? 'border-emerald-500/50 bg-emerald-500/10'
                                : finding.type === 'negative'
                                ? 'border-rose-500/50 bg-rose-500/10'
                                : 'border-amber-500/50 bg-amber-500/10'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              {finding.type === 'positive' && <ThumbsUp className="h-5 w-5 text-emerald-400" />}
                              {finding.type === 'negative' && <ThumbsDown className="h-5 w-5 text-rose-400" />}
                              {finding.type === 'warning' && <AlertTriangle className="h-5 w-5 text-amber-400" />}
                              <div>
                                <p className="font-medium text-platinum-200 font-rajdhani">{finding.finding}</p>
                                <p className="text-sm text-platinum-400 font-rajdhani">Source: {finding.source}</p>
                              </div>
                            </div>
                            <Badge
                              variant={
                                finding.type === 'positive' ? 'default' :
                                finding.type === 'negative' ? 'destructive' : 'warning'
                              }
                              className={`font-rajdhani ${
                                finding.type === 'positive' ? 'bg-emerald-500/20 text-emerald-400' :
                                finding.type === 'negative' ? 'bg-rose-500/20 text-rose-400' :
                                'bg-amber-500/20 text-amber-400'
                              }`}
                            >
                              {finding.metric}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>

                {/* Top Positive/Negative */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-6 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg text-emerald-400 font-rajdhani">
                        <TrendingUp className="h-5 w-5" />
                        Most Positive Platforms
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {platformSentiment
                          .sort((a, b) => b.positive - a.positive)
                          .slice(0, 3)
                          .map((platform, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-3"
                            >
                              <span className="text-sm font-medium text-platinum-200 font-rajdhani">{platform.name}</span>
                              <Badge variant="default" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 font-rajdhani">
                                {platform.positive}% positive
                              </Badge>
                            </motion.div>
                          ))}
                      </div>
                    </CardContent>
                  </motion.div>

                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="glass-card rounded-lg border border-rose-500/30 bg-rose-500/5 p-6 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg text-rose-400 font-rajdhani">
                        <TrendingDown className="h-5 w-5" />
                        Most Negative Platforms
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {platformSentiment
                          .sort((a, b) => b.negative - a.negative)
                          .slice(0, 3)
                          .map((platform, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center justify-between rounded-lg bg-rose-500/10 p-3"
                            >
                              <span className="text-sm font-medium text-platinum-200 font-rajdhani">{platform.name}</span>
                              <Badge variant="destructive" className="bg-rose-500/20 text-rose-400 border-rose-500/50 font-rajdhani">
                                {platform.negative}% negative
                              </Badge>
                            </motion.div>
                          ))}
                      </div>
                    </CardContent>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
