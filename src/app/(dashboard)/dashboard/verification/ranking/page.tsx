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
  CheckCircle,
  Clock,
  FileQuestion,
  Globe,
  Search,
  Shield,
  ThumbsDown,
  ThumbsUp,
  Timer,
  TrendingUp,
  AlertTriangle,
  Check,
  XCircle,
  Database,
  Trophy,
  TrendingDown,
  Award,
  Target,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  ExternalLink,
  Info,
  ChevronRight,
} from 'lucide-react'
import {
  allRankingIndices,
  indicesBySentiment,
  indicesByCategory,
  rankingSummary,
  gccComparisonData,
  sourceCredibilityMatrix,
  sentimentAnalysisSummary,
  comparativeRankingData,
  type RankingIndex,
} from '@/lib/data-loader/verification-data'

// ============================================================================
// RANKING PAGE: Comparative Ranking Results Dashboard
// MD File: 11-3-comparative-ranking-results.md
// ============================================================================

export default function RankingDashboardPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedSentiment, setSelectedSentiment] = useState<string>('all')

  // Filter indices based on selection
  const filteredIndices = allRankingIndices.filter((index) => {
    const categoryMatch = selectedCategory === 'all' || index.category === selectedCategory
    const sentimentMatch = selectedSentiment === 'all' || index.sentiment === selectedSentiment
    return categoryMatch && sentimentMatch
  })

  // Get sentiment badge styling
  const getSentimentBadge = (sentiment: RankingIndex['sentiment']) => {
    switch (sentiment) {
      case 'highly-positive':
        return <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">{sentiment}</Badge>
      case 'positive':
        return <Badge variant="success" className="text-xs bg-teal-500/20 text-teal-400 border-teal-500/50">{sentiment}</Badge>
      case 'negative':
        return <Badge variant="destructive" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">{sentiment}</Badge>
      case 'highly-negative':
        return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">{sentiment}</Badge>
      case 'mixed':
        return <Badge variant="warning" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">{sentiment}</Badge>
      case 'neutral':
        return <Badge variant="outline" className="text-xs">{sentiment}</Badge>
      default:
        return <Badge variant="outline" className="text-xs">Unknown</Badge>
    }
  }

  // Format rank display
  const formatRank = (index: RankingIndex) => {
    if (index.rank === 0) return index.score.toString()
    return `${index.rank}${index.totalCountries > 0 ? `/${index.totalCountries}` : ''}`
  }

  // Chart data for sentiment distribution
  const sentimentChartData = [
    { name: 'Highly Positive', value: indicesBySentiment['highly-positive']?.length || 0, color: CHART_COLORS.emerald },
    { name: 'Positive', value: indicesBySentiment['positive']?.length || 0, color: CHART_COLORS.teal },
    { name: 'Neutral', value: indicesBySentiment['neutral']?.length || 0, color: CHART_COLORS.gold },
    { name: 'Mixed', value: indicesBySentiment['mixed']?.length || 0, color: CHART_COLORS.orange },
    { name: 'Negative', value: indicesBySentiment['negative']?.length || 0, color: CHART_COLORS.rose },
    { name: 'Highly Negative', value: indicesBySentiment['highly-negative']?.length || 0, color: CHART_COLORS.danger },
  ]

  // Chart data for category distribution
  const categoryChartData = Object.entries(indicesByCategory).map(([category, indices]) => ({
    name: category.charAt(0).toUpperCase() + category.slice(1),
    value: indices.length,
    color: category === 'economic' ? CHART_COLORS.navy :
           category === 'freedom' ? CHART_COLORS.rose :
           category === 'governance' ? CHART_COLORS.denim :
           category === 'social' ? CHART_COLORS.purple :
           category === 'security' ? CHART_COLORS.emerald :
           category === 'development' ? CHART_COLORS.info :
           CHART_COLORS.gold,
  }))

  // Radar chart data for category comparison
  const radarChartData = [
    {
      category: 'Economic',
      positive: indicesByCategory['economic']?.filter(i => i.sentiment.includes('positive')).length || 0,
      negative: indicesByCategory['economic']?.filter(i => i.sentiment.includes('negative')).length || 0,
      neutral: indicesByCategory['economic']?.filter(i => !i.sentiment.includes('positive') && !i.sentiment.includes('negative')).length || 0,
    },
    {
      category: 'Freedom',
      positive: indicesByCategory['freedom']?.filter(i => i.sentiment.includes('positive')).length || 0,
      negative: indicesByCategory['freedom']?.filter(i => i.sentiment.includes('negative')).length || 0,
      neutral: indicesByCategory['freedom']?.filter(i => !i.sentiment.includes('positive') && !i.sentiment.includes('negative')).length || 0,
    },
    {
      category: 'Governance',
      positive: indicesByCategory['governance']?.filter(i => i.sentiment.includes('positive')).length || 0,
      negative: indicesByCategory['governance']?.filter(i => i.sentiment.includes('negative')).length || 0,
      neutral: indicesByCategory['governance']?.filter(i => !i.sentiment.includes('positive') && !i.sentiment.includes('negative')).length || 0,
    },
    {
      category: 'Social',
      positive: indicesByCategory['social']?.filter(i => i.sentiment.includes('positive')).length || 0,
      negative: indicesByCategory['social']?.filter(i => i.sentiment.includes('negative')).length || 0,
      neutral: indicesByCategory['social']?.filter(i => !i.sentiment.includes('positive') && !i.sentiment.includes('negative')).length || 0,
    },
    {
      category: 'Security',
      positive: indicesByCategory['security']?.filter(i => i.sentiment.includes('positive')).length || 0,
      negative: indicesByCategory['security']?.filter(i => i.sentiment.includes('negative')).length || 0,
      neutral: indicesByCategory['security']?.filter(i => !i.sentiment.includes('positive') && !i.sentiment.includes('negative')).length || 0,
    },
    {
      category: 'Development',
      positive: indicesByCategory['development']?.filter(i => i.sentiment.includes('positive')).length || 0,
      negative: indicesByCategory['development']?.filter(i => i.sentiment.includes('negative')).length || 0,
      neutral: indicesByCategory['development']?.filter(i => !i.sentiment.includes('positive') && !i.sentiment.includes('negative')).length || 0,
    },
  ]

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="space-y-8 p-8 font-rajdhani"
    >
      {/* ============================================================================
      HEADER & KEY METRICS
      ============================================================================ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="emerald" className="mb-2">V-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-emerald-500">Comparative Ranking Dashboard</h1>
          <p className="mt-2 text-platinum-500-400">
            UAE global index rankings across 19+ international indices | Research Date: 2026-04-27
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10">
            <Search className="h-4 w-4" />
            Filter
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-500-950 gap-2">
            <Trophy className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
      >
        <MetricCard
          title="Total Indices"
          value={rankingSummary.totalIndices}
          icon={<BarChart3 className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Positive Rankings"
          value={rankingSummary.positiveIndices}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Negative Rankings"
          value={rankingSummary.negativeIndices}
          icon={<TrendingDown className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Best Rank"
          value={`#${rankingSummary.topRank}`}
          icon={<Trophy className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Worst Rank"
          value={`#${rankingSummary.worstRank}`}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="orange"
          status="warning"
        />
      </motion.div>

      {/* ============================================================================
      MAIN TABS
      ============================================================================ */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="indices">All Indices</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="category">By Category</TabsTrigger>
          <TabsTrigger value="gcc">GCC Comparison</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="summary">Master Summary</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Index Performance Overview" description="Summary of UAE rankings across all tracked indices">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Sentiment Distribution Pie */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Indices by sentiment classification</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentChartData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </motion.div>

                {/* Category Distribution Bar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">Category Distribution</CardTitle>
                    <CardDescription>Indices by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={categoryChartData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Count', color: CHART_COLORS.denim }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.div>
              </div>

              {/* Top Performers & Worst Performers */}
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Top Performers */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-emerald-400" />
                      Top Performers
                    </CardTitle>
                    <CardDescription>Highest ranked indices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="space-y-3"
                      >
                        {allRankingIndices
                          .filter(i => i.rank > 0 && (i.sentiment === 'highly-positive' || i.sentiment === 'positive'))
                          .sort((a, b) => a.rank - b.rank)
                          .slice(0, 8)
                          .map((index, idx) => (
                            <motion.div
                              key={index.id}
                              variants={itemVariants}
                              className="flex items-center justify-between rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4"
                              whileHover={{ scale: 1.02, x: 4 }}
                            >
                              <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                                  <Award className="h-5 w-5" />
                                </div>
                                <div>
                                  <p className="font-semibold text-platinum-500-200">{index.shortName}</p>
                                  <p className="text-sm text-platinum-500-400">{index.name}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-emerald-400">#{index.rank}</div>
                                <p className="text-xs text-platinum-500-400">{index.publisher}</p>
                              </div>
                            </motion.div>
                          ))}
                      </motion.div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>

                {/* Areas of Concern */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                      Areas of Concern
                    </CardTitle>
                    <CardDescription>Indices requiring attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="space-y-3"
                      >
                        {allRankingIndices
                          .filter(i => i.sentiment === 'highly-negative' || i.sentiment === 'negative')
                          .sort((a, b) => b.rank - a.rank)
                          .map((index, idx) => (
                            <motion.div
                              key={index.id}
                              variants={itemVariants}
                              className="flex items-center justify-between rounded-lg border border-red-500/30 bg-red-500/10 p-4"
                              whileHover={{ scale: 1.02, x: -4 }}
                            >
                              <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20 text-rose-500">
                                  <AlertTriangle className="h-5 w-5" />
                                </div>
                                <div>
                                  <p className="font-semibold text-platinum-500-200">{index.shortName}</p>
                                  <p className="text-sm text-platinum-500-400">{index.name}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-red-400">
                                  {index.rank > 0 ? `#${index.rank}` : index.score}
                                </div>
                                <p className="text-xs text-platinum-500-400">{index.publisher}</p>
                              </div>
                            </motion.div>
                          ))}
                      </motion.div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* All Indices Tab */}
        <TabsContent value="indices" className="space-y-6">
          <GlassPanel title="All Global Indices" description="Complete ranking data from 19+ international indices">
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <div className="flex gap-2">
                  <span className="text-sm text-platinum-500-400 self-center">Category:</span>
                  {['all', 'economic', 'freedom', 'governance', 'social', 'security', 'development'].map((cat) => (
                    <Button
                      key={cat}
                      size="sm"
                      variant={selectedCategory === cat ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(cat)}
                      className={selectedCategory === cat ? 'bg-emerald-500' : ''}
                    >
                      {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <span className="text-sm text-platinum-500-400 self-center">Sentiment:</span>
                  {['all', 'positive', 'negative', 'neutral', 'mixed'].map((sent) => (
                    <Button
                      key={sent}
                      size="sm"
                      variant={selectedSentiment === sent ? 'default' : 'outline'}
                      onClick={() => setSelectedSentiment(sent)}
                      className={selectedSentiment === sent ? 'bg-emerald-500' : ''}
                    >
                      {sent === 'all' ? 'All' : sent.charAt(0).toUpperCase() + sent.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Indices Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {filteredIndices.map((index, idx) => (
                    <motion.div
                      key={index.id}
                      layout
                      variants={itemVariants}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: idx * 0.03 }}
                      className="glass-card overflow-hidden"
                      style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                      whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-base">{index.shortName}</CardTitle>
                            <CardDescription className="text-xs">{index.publisher}</CardDescription>
                          </div>
                          {getSentimentBadge(index.sentiment)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-end justify-between">
                            <div>
                              <p className="text-3xl font-extrabold text-platinum-500-100">
                                {formatRank(index)}
                              </p>
                              <p className="text-xs text-platinum-500-400">
                                {index.totalCountries > 0 ? `of ${index.totalCountries}` : 'Score'}
                              </p>
                            </div>
                            {typeof index.score === 'number' && index.maxScore && Number(index.maxScore) > 0 && (
                              <div className="text-right">
                                <p className={`text-2xl font-bold ${index.sentiment.includes('positive') ? 'text-emerald-600' : index.sentiment.includes('negative') ? 'text-rose-600' : 'text-gold-700'}`}>
                                  {index.score}
                                </p>
                                <p className="text-xs text-platinum-500-400">/ {index.maxScore}</p>
                              </div>
                            )}
                          </div>
                          <Progress
                            value={index.rank > 0 ? ((index.totalCountries - index.rank) / index.totalCountries) * 100 : 50}
                            className="h-2"
                            style={{
                              '--progress-color': index.sentiment.includes('positive') ? '#10b981' : index.sentiment.includes('negative') ? '#f43f5e' : '#f59e0b'
                            } as React.CSSProperties}
                          />
                          {index.keyMetrics && Object.keys(index.keyMetrics).length > 0 && (
                            <div className="pt-2 border-t border-platinum-700/50">
                              <p className="text-xs text-platinum-500-500 mb-1">Key Metrics:</p>
                              <div className="flex flex-wrap gap-1">
                                {Object.entries(index.keyMetrics).slice(0, 3).map(([key, val]) => (
                                  <Badge key={key} variant="outline" className="text-xs">
                                    {key}: {val}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                          {index.sourceUrl && (
                            <a
                              href={index.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Source
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis" description="Detailed breakdown by sentiment classification">
            <div className="space-y-6">
              {/* Radar Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Category Performance Radar</CardTitle>
                  <CardDescription>Positive vs Negative indices by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadarChart
                    data={radarChartData}
                    metrics={[
                      { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                      { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                      { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                  />
                </CardContent>
              </motion.div>

              {/* Sentiment Summary Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Summary</CardTitle>
                  <CardDescription>Overall assessment by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="space-y-4"
                    >
                      {sentimentAnalysisSummary.map((item, idx) => (
                        <motion.div
                          key={item.category}
                          variants={itemVariants}
                          className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-platinum-500-200">{item.category}</h4>
                            <Badge
                              variant={item.overallSentiment.includes('Positive') ? 'success' : item.overallSentiment.includes('Negative') ? 'destructive' : 'warning'}
                              className={item.overallSentiment.includes('Positive') ? 'bg-emerald-500/20 text-emerald-400' : ''}
                            >
                              {item.overallSentiment}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.indices.map((idx_name) => (
                              <Badge key={idx_name} variant="outline" className="text-xs">
                                {idx_name}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </ScrollArea>
                </CardContent>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Category Tab */}
        <TabsContent value="category" className="space-y-6">
          <GlassPanel title="Category Breakdown" description="Detailed view by index category">
            <div className="space-y-6">
              {rankingSummary.categories.map((category, idx) => {
                const categoryIndices = indicesByCategory[category] || []
                if (categoryIndices.length === 0) return null
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card"
                    style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg capitalize flex items-center gap-2">
                        <Activity className="h-5 w-5" />
                        {category}
                      </CardTitle>
                      <CardDescription>{categoryIndices.length} indices tracked</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="space-y-3"
                      >
                        {categoryIndices.map((index) => (
                          <motion.div
                            key={index.id}
                            variants={itemVariants}
                            className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
                            whileHover={{ x: 4 }}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="h-3 w-3 rounded-full"
                                style={{
                                  backgroundColor: index.sentiment.includes('positive') ? '#10b981' : index.sentiment.includes('negative') ? '#f43f5e' : '#f59e0b'
                                }}
                              />
                              <div>
                                <p className="font-medium text-platinum-500-200">{index.name}</p>
                                <p className="text-xs text-platinum-500-400">{index.publisher}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-platinum-500-100">
                                {formatRank(index)}
                              </p>
                              <p className="text-xs text-platinum-500-400">
                                {index.year}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </motion.div>
                )
              })}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* GCC Comparison Tab */}
        <TabsContent value="gcc" className="space-y-6">
          <GlassPanel title="GCC Comparison" description="UAE rankings compared to GCC peers">
            <div className="space-y-6">
              {/* GCC Stats */}
              <div className="grid gap-4 sm:grid-cols-3">
                <MetricCard
                  title="Combined Area"
                  value={gccComparisonData.totalArea}
                  icon={<Globe className="h-6 w-6" />}
                  gradient="denim"
                />
                <MetricCard
                  title="Combined GDP"
                  value={gccComparisonData.combinedGDP}
                  icon={<TrendingUp className="h-6 w-6" />}
                  gradient="emerald"
                />
                <MetricCard
                  title="Combined Population"
                  value={gccComparisonData.combinedPopulation}
                  icon={<Database className="h-6 w-6" />}
                  gradient="purple"
                />
              </div>

              {/* GCC Rankings Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">GCC Rankings Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-platinum-700/50">
                          <th className="pb-2 text-left text-sm font-medium text-platinum-500-400">Index</th>
                          <th className="pb-2 text-center text-sm font-medium text-emerald-400">UAE</th>
                          <th className="pb-2 text-center text-sm font-medium text-platinum-500-400">Qatar</th>
                          <th className="pb-2 text-center text-sm font-medium text-platinum-500-400">Saudi</th>
                          <th className="pb-2 text-center text-sm font-medium text-platinum-500-400">Kuwait</th>
                          <th className="pb-2 text-center text-sm font-medium text-platinum-500-400">Oman</th>
                          <th className="pb-2 text-center text-sm font-medium text-platinum-500-400">Bahrain</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gccComparisonData.rankings.map((row, idx) => (
                          <motion.tr
                            key={row.index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="border-b border-platinum-700/30"
                          >
                            <td className="py-3 text-sm font-medium text-platinum-500-200">{row.index}</td>
                            <td className="py-3 text-center text-sm font-bold text-emerald-400">{row.uae}</td>
                            <td className="py-3 text-center text-sm text-platinum-500-300">{row.qatar}</td>
                            <td className="py-3 text-center text-sm text-platinum-500-300">{row.saudi}</td>
                            <td className="py-3 text-center text-sm text-platinum-500-300">{row.kuwait}</td>
                            <td className="py-3 text-center text-sm text-platinum-500-300">{row.oman}</td>
                            <td className="py-3 text-center text-sm text-platinum-500-300">{row.bahrain}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </motion.div>

              {/* GDP Per Capita Comparison */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">GDP Per Capita Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <p className="text-sm text-platinum-500-400">Qatar</p>
                      <p className="text-3xl font-bold text-emerald-400">{gccComparisonData.gdpPerCapita.qatar}</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4 text-center">
                      <p className="text-sm text-platinum-500-400">UAE</p>
                      <p className="text-3xl font-bold text-platinum-500-200">{gccComparisonData.gdpPerCapita.uae}</p>
                    </div>
                  </div>
                </CardContent>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Source Credibility" description="Data sources ranked by credibility tier">
            <div className="space-y-6">
              {/* Source Credibility Matrix */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Source Tier Classification</CardTitle>
                  <CardDescription>International organization credibility ratings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="space-y-4"
                    >
                      {sourceCredibilityMatrix.map((tier, idx) => (
                        <motion.div
                          key={tier.tier}
                          variants={itemVariants}
                          className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={tier.tier === 0 ? 'success' : tier.tier === 1 ? 'default' : 'secondary'}>
                              Tier {tier.tier}
                            </Badge>
                            <span className="text-sm text-platinum-500-400">{tier.description}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {tier.sources.map((source) => (
                              <Badge key={source} variant="outline" className="text-xs">
                                {source}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </ScrollArea>
                </CardContent>
              </motion.div>

              {/* Key Findings from Original Verification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Verification Key Findings</CardTitle>
                  <CardDescription>From comparative ranking analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="space-y-3"
                  >
                    {comparativeRankingData.keyFindings?.slice(0, 10).map((finding: any, idx: number) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="h-2 w-2 rounded-full"
                            style={{
                              backgroundColor: finding.alert === 'GREEN' ? '#10b981' : finding.alert === 'RED' ? '#f43f5e' : '#f59e0b'
                            }}
                          />
                          <div>
                            <p className="font-medium text-platinum-500-200">{finding.finding}</p>
                            <p className="text-xs text-platinum-500-400">{finding.source}</p>
                          </div>
                        </div>
                        <Badge
                          variant={finding.alert === 'GREEN' ? 'success' : finding.alert === 'RED' ? 'destructive' : 'warning'}
                          className={finding.alert === 'GREEN' ? 'bg-emerald-500/20 text-emerald-400' : finding.alert === 'RED' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}
                        >
                          {finding.metric}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Master Summary Tab */}
        <TabsContent value="summary" className="space-y-6">
          <GlassPanel title="Master Summary Table" description="Complete UAE global rankings overview">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardContent className="p-0">
                  <ScrollArea className="h-[600px]">
                    <table className="w-full">
                      <thead className="sticky top-0 bg-platinum-900/95 backdrop-blur">
                        <tr className="border-b border-platinum-700/50">
                          <th className="p-3 text-left text-sm font-medium text-platinum-500-400">Index</th>
                          <th className="p-3 text-center text-sm font-medium text-platinum-500-400">Rank</th>
                          <th className="p-3 text-center text-sm font-medium text-platinum-500-400">Score</th>
                          <th className="p-3 text-center text-sm font-medium text-platinum-500-400">Denominator</th>
                          <th className="p-3 text-center text-sm font-medium text-platinum-500-400">Year</th>
                          <th className="p-3 text-center text-sm font-medium text-platinum-500-400">Sentiment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allRankingIndices.map((index, idx) => (
                          <motion.tr
                            key={index.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.02 }}
                            className="border-b border-platinum-700/30 hover:bg-platinum-800/50"
                          >
                            <td className="p-3">
                              <div className="flex items-center gap-2">
                                <div
                                  className="h-2 w-2 rounded-full"
                                  style={{
                                    backgroundColor: index.sentiment.includes('positive') ? '#10b981' : index.sentiment.includes('negative') ? '#f43f5e' : '#f59e0b'
                                  }}
                                />
                                <div>
                                  <p className="font-medium text-platinum-500-200 text-sm">{index.name}</p>
                                  <p className="text-xs text-platinum-500-500">{index.publisher}</p>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 text-center">
                              <span className={`font-bold ${index.rank <= 10 ? 'text-emerald-400' : index.rank >= 100 ? 'text-red-400' : 'text-platinum-500-200'}`}>
                                {index.rank > 0 ? `#${index.rank}` : '-'}
                              </span>
                            </td>
                            <td className="p-3 text-center text-platinum-500-200">
                              {typeof index.score === 'number' ? index.score : index.score}
                            </td>
                            <td className="p-3 text-center text-platinum-500-400 text-sm">
                              {index.totalCountries > 0 ? index.totalCountries : index.maxScore || '-'}
                            </td>
                            <td className="p-3 text-center text-platinum-500-400 text-sm">
                              {index.year}
                            </td>
                            <td className="p-3 text-center">
                              {getSentimentBadge(index.sentiment)}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </ScrollArea>
                </CardContent>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* ============================================================================
      SUMMARY FOOTER
      ============================================================================ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-6"
        style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-5 w-5 text-emerald-400" />
          <h3 className="text-lg font-semibold text-platinum-500-200">Analysis Summary</h3>
        </div>
        <p className="text-sm text-platinum-500-400 leading-relaxed">
          UAE demonstrates strong performance in economic/commercial indices (World Competitiveness #5, GEM #1, Soft Power #10)
          while facing significant challenges in freedom indices (Press Freedom #160, Freedom House #18/100). The data reveals
          a complex picture where UAE leads in development metrics but trails in freedom and democracy indices.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            Last Updated: 2026-04-28
          </Badge>
          <Badge variant="outline" className="text-xs">
            Sources: 30+
          </Badge>
          <Badge variant="outline" className="text-xs">
            Total Indices: {rankingSummary.totalIndices}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Positive: {rankingSummary.positiveIndices} | Negative: {rankingSummary.negativeIndices}
          </Badge>
        </div>
      </motion.div>
    </motion.div>
  )
}
