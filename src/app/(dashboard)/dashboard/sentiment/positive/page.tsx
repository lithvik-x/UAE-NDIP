// @ts-nocheck
'use client'

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
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  TrendingUp,
  Users,
  Zap,
  ThumbsUp,
  Heart,
  Star,
  Award,
  Sparkles,
  CheckCircle,
  Shield,
  Globe,
  Plane,
  TrendingDown,
  Quote,
  ArrowUpRight,
  Award as AwardIcon,
  Rocket,
} from 'lucide-react'
import {
  usePositiveSentimentData,
  positiveSentimentOverview,
  keyQuantitativeHighlights,
  safetyKPIData,
  humanitarianAidKPIData,
  innovationKPIData,
  economicKPIData,
  topicSentimentMatrix,
  expertQuotes,
  positiveDrivers,
  monthlyPositiveTrend,
  keyPositiveIndicators,
  yearlyPositiveComparison,
  positiveSourceCredibilityMatrix,
  positiveUAERelevanceAssessment,
  positiveSentimentMetrics,
  positiveSentimentDistributionData,
  positiveTopicSentimentChartData,
} from '@/lib/data-loader/positive-sentiment-data'
import {
  useHopeOptimismData,
  hopeOptimismData,
  polyHopeDataset,
  emiratesMarsMission,
  hopeImpactStudies,
  mediaMonitoringKPIs,
  optimismMarketing,
  wgsnOptimismTrends,
  hopeOptimismKeywords,
} from '@/lib/data-loader'

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

const scaleIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
}

// Icon mapping for positive drivers
const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Star,
  Sparkles,
  Award,
  Heart,
  Shield,
  Globe,
  Plane,
}

export default function PositiveSentimentPage() {
  const positiveData = usePositiveSentimentData()
  const hopeData = useHopeOptimismData()

  if (!positiveData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-platinum-400 font-rajdhani"
        >
          Loading Positive Sentiment data...
        </motion.div>
      </div>
    )
  }

  const { overview, highlights, metrics } = positiveData

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* Header - Enhancement A */}
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
            <Badge
              variant="emerald"
              className="mb-2 bg-emerald-500/20 text-emerald-400 border-emerald-500/50 font-rajdhani"
            >
              POSITIVE SENTIMENT
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold gradient-text-emerald-500"
          >
            Positive Sentiment Analysis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-platinum-400"
          >
            Drivers of positive sentiment, growth indicators, and success metrics
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3"
        >
          <Button
            variant="outline"
            className="gap-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 font-rajdhani"
          >
            <ThumbsUp className="h-4 w-4" />
            View Drivers
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2 font-rajdhani">
            <Zap className="h-4 w-4" />
            Analyze Growth
          </Button>
        </motion.div>
      </motion.div>

      {/* Key Metrics - Enhancement B */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="wait">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.title}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: idx * 0.1 }}
            >
              <MetricCard
                title={metric.title}
                value={metric.value}
                icon={<ThumbsUp className="h-6 w-6" />}
                gradient={metric.gradient}
                status={metric.status}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Key Highlights - Enhancement C */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassPanel
          title="Key Quantitative Highlights"
          description="Critical metrics from Comprehensive SSOT"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-emerald-400" />
                <span className="text-sm text-platinum-400">Safety Index</span>
              </div>
              <p className="text-2xl font-bold text-emerald-400">{highlights.safetyIndex}</p>
              <p className="text-xs text-platinum-500">#1 Worldwide</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-4 rounded-lg border border-gold-500/30 bg-gold-500/5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-5 w-5 text-gold-400" />
                <span className="text-sm text-platinum-400">Humanitarian Aid</span>
              </div>
              <p className="text-2xl font-bold text-gold-400">{highlights.humanitarianAidFormatted}</p>
              <p className="text-xs text-platinum-500">#3 Globally</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-4 rounded-lg border border-navy-500/30 bg-navy-500/5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-navy-400" />
                <span className="text-sm text-platinum-400">Nationalities</span>
              </div>
              <p className="text-2xl font-bold text-navy-400">{highlights.nationalities}+</p>
              <p className="text-xs text-platinum-500">200+ in UAE</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-4 rounded-lg border border-purple-500/30 bg-purple-500/5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-5 w-5 text-purple-400" />
                <span className="text-sm text-platinum-400">World Rankings</span>
              </div>
              <p className="text-2xl font-bold text-purple-400">{highlights.globalAchievementCategories}+</p>
              <p className="text-xs text-platinum-500">"Best in world"</p>
            </motion.div>
          </div>
        </GlassPanel>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="drivers">Drivers</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="indicators">Indicators</TabsTrigger>
          <TabsTrigger value="quotes">Quotes</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="hope">Hope & Optimism</TabsTrigger>
        </TabsList>

        {/* Overview Tab - Enhancement D */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="Positive Sentiment Overview"
              description="Key positive sentiment metrics and trends"
            >
              <div className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Positive Sentiment Trend</CardTitle>
                      <CardDescription>Monthly positive sentiment evolution</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={monthlyPositiveTrend}
                        xAxisKey="month"
                        areas={[
                          { dataKey: 'positive', name: 'Positive %', color: CHART_COLORS.emerald },
                        ]}
                        height={300}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                        <CardDescription>Overall sentiment breakdown</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PieChart
                          data={positiveSentimentDistributionData}
                          height={280}
                          showLegend={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Year-over-Year Growth</CardTitle>
                        <CardDescription>Positive sentiment comparison</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={yearlyPositiveComparison}
                          xAxisKey="year"
                          bars={[
                            { dataKey: 'positive', name: 'Positive %', color: CHART_COLORS.emerald },
                          ]}
                          height={280}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Drivers Tab - Enhancement E */}
        <TabsContent value="drivers" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="Positive Sentiment Drivers"
              description="Key factors driving positive sentiment"
            >
              <div className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Driver Impact Analysis</CardTitle>
                      <CardDescription>Major factors influencing positive sentiment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={positiveDrivers.map((d) => ({
                          driver: d.driver,
                          impact: d.impact,
                        }))}
                        xAxisKey="driver"
                        bars={[
                          { dataKey: 'impact', name: 'Impact %', color: CHART_COLORS.emerald },
                        ]}
                        height={350}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {positiveDrivers.map((driver, idx) => {
                    const IconComponent = iconMap[driver.icon] || TrendingUp
                    return (
                      <motion.div
                        key={driver.driver}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="glass-card p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <span className="font-medium text-platinum-200">{driver.driver}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-platinum-400">Impact Score</span>
                            <span className="text-emerald-400 font-bold">{driver.impact}%</span>
                          </div>
                          <Progress value={driver.impact} className="h-2" />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="Topic Sentiment Analysis"
              description="Sentiment scores by topic category"
            >
              <div className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Topic Sentiment Scores</CardTitle>
                      <CardDescription>Ranked by sentiment intensity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={positiveTopicSentimentChartData.slice(0, 8)}
                        xAxisKey="topic"
                        bars={[
                          { dataKey: 'score', name: 'Score %', color: CHART_COLORS.emerald },
                        ]}
                        height={350}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {topicSentimentMatrix.slice(0, 6).map((topic, idx) => (
                    <motion.div
                      key={topic.topic}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.03 }}
                      className="glass-card p-4 rounded-lg border border-emerald-500/30"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-platinum-200">{topic.topic}</span>
                        <Badge
                          variant={topic.confidence === 'Very High' ? 'emerald' : 'outline'}
                          className="text-xs"
                        >
                          {topic.confidence}
                        </Badge>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-emerald-400">
                          {Math.round(topic.score * 100)}%
                        </span>
                        <span className="text-xs text-platinum-500">{topic.type}</span>
                      </div>
                      <p className="mt-2 text-xs text-platinum-400">{topic.narrative}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Indicators Tab */}
        <TabsContent value="indicators" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="Key Positive Indicators"
              description="Performance metrics showing positive trends"
            >
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {keyPositiveIndicators.map((indicator, idx) => (
                    <motion.div
                      key={indicator.metric}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.03, y: -3 }}
                      className="glass-card p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-platinum-400">{indicator.metric}</span>
                        <Badge variant="success" className="text-xs">
                          {indicator.change}
                        </Badge>
                      </div>
                      <p className="text-3xl font-bold text-emerald-400">{indicator.value}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                        <span className="text-xs text-emerald-400">vs last period</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">UAE Relevance Assessment</CardTitle>
                      <CardDescription>Critical and high relevance data points</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-3">
                          {positiveUAERelevanceAssessment.slice(0, 8).map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5"
                            >
                              <div className="flex-1">
                                <p className="text-sm font-medium text-platinum-200">{item.dataPoint}</p>
                                <p className="text-xs text-platinum-400 mt-1">{item.rationale}</p>
                              </div>
                              <Badge
                                variant={item.relevance === 'Critical' ? 'destructive' : 'secondary'}
                                className="ml-2"
                              >
                                {item.relevance}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Quotes Tab - Enhancement F */}
        <TabsContent value="quotes" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="Expert Quotes Repository"
              description="Key quotes from thought leaders and officials"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {expertQuotes.slice(0, 6).map((quote, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-lg border border-emerald-500/30 bg-emerald-500/5"
                  >
                    <Quote className="h-6 w-6 text-emerald-400 mb-3" />
                    <p className="text-sm text-platinum-300 italic mb-4">"{quote.quote}"</p>
                    <div className="border-t border-emerald-500/20 pt-3">
                      <p className="text-sm font-medium text-emerald-400">{quote.author}</p>
                      <p className="text-xs text-platinum-400">{quote.affiliation}</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {quote.topic}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="Source Credibility Matrix"
              description="Verification of source reliability"
            >
              <div className="space-y-4">
                {positiveSourceCredibilityMatrix.map((source, idx) => (
                  <motion.div
                    key={source.source}
                    variants={fadeInUp}
                    className="flex items-center justify-between p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-platinum-200">{source.source}</p>
                      <p className="text-xs text-platinum-400">{source.type}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={source.tier === 1 ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        Tier {source.tier}
                      </Badge>
                      <Badge
                        variant={source.reliability === 'Very High' ? 'success' : 'outline'}
                        className="text-xs"
                      >
                        {source.reliability}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Hope & Optimism Tab - MD 9-10 Content */}
        <TabsContent value="hope" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="Hope & Optimism Research"
              description="Hope speech detection, UAE national messaging, and optimism trends (MD 9-10)"
            >
              <div className="space-y-6">
                {/* Hope Metrics */}
                <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <motion.div variants={fadeInUp}>
                    <MetricCard
                      title="Hope Sentiment"
                      value={`${hopeOptimismData.sentiment.positive}%`}
                      previousValue={hopeOptimismData.sentiment.positive - 6}
                      icon={<ThumbsUp className="h-6 w-6" />}
                      gradient="emerald"
                      status="success"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <MetricCard
                      title="PolyHope Dataset"
                      value="30,957"
                      previousValue={25000}
                      unit="tweets"
                      icon={<Globe className="h-6 w-6" />}
                      gradient="denim"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <MetricCard
                      title="RoBERTa Accuracy"
                      value="86.5%"
                      previousValue={80}
                      icon={<Award className="h-6 w-6" />}
                      gradient="gold"
                      status="success"
                    />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <MetricCard
                      title="UAE Relevance"
                      value="96"
                      previousValue={90}
                      unit="/100"
                      icon={<Star className="h-6 w-6" />}
                      gradient="emerald"
                      status="success"
                    />
                  </motion.div>
                </motion.div>

                {/* Hope Categories Performance */}
                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Hope Speech Detection Performance</CardTitle>
                      <CardDescription>RoBERTa model accuracy by hope category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={polyHopeDataset.modelPerformance.slice(0, 2).map(m => ({
                          model: m.model.split(' ')[0],
                          binaryF1: m.binaryF1
                        }))}
                        xAxisKey="model"
                        bars={[{ dataKey: 'binaryF1', name: 'Binary F1 %', color: CHART_COLORS.emerald }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Emirates Mars Mission */}
                <motion.div variants={fadeInUp}>
                  <Card className="glass-card border-emerald-500/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-emerald-400" />
                        Emirates Mars Mission (Al-Amal)
                      </CardTitle>
                      <CardDescription>UAE's Hope Probe - National hope symbol</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                          <p className="text-xs text-platinum-400">Launch Date</p>
                          <p className="text-sm font-medium text-emerald-400">July 19, 2020</p>
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                          <p className="text-xs text-platinum-400">Mars Insertion</p>
                          <p className="text-sm font-medium text-emerald-400">Feb 9, 2021</p>
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                          <p className="text-xs text-platinum-400">Achievement</p>
                          <p className="text-sm font-medium text-emerald-400">5th to reach Mars</p>
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                          <p className="text-xs text-platinum-400">Significance</p>
                          <p className="text-sm font-medium text-emerald-400">1st Arab nation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Marketing Optimism Stats */}
                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Optimism Marketing Impact</CardTitle>
                      <CardDescription>Hope-based messaging effectiveness</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {optimismMarketing.marketingStatistics.slice(0, 5).map((stat, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                            <p className="text-2xl font-bold text-emerald-400">{stat.value}</p>
                            <p className="text-xs text-platinum-300 mt-1">{stat.metric}</p>
                            <p className="text-xs text-platinum-500">{stat.source}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* WGSN Optimism Trends */}
                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">WGSN Optimism Trends</CardTitle>
                      <CardDescription>Evolution of optimism in social media</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {wgsnOptimismTrends.map((trend, idx) => (
                          <div key={trend.year} className="flex items-center gap-4 p-3 rounded-lg bg-platinum-800/50">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                              {trend.year}
                            </div>
                            <div>
                              <p className="text-platinum-200 font-medium">{trend.trend}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Hope Keywords */}
                <motion.div variants={fadeInUp}>
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Hope-Optimism Keywords</CardTitle>
                      <CardDescription>Tracking categories for media monitoring</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {Object.entries(hopeOptimismKeywords).map(([category, keywords]) => (
                          <div key={category} className="p-3 rounded-lg bg-platinum-800/50">
                            <p className="text-emerald-400 text-sm font-medium capitalize mb-2">{category}</p>
                            <div className="flex flex-wrap gap-1">
                              {keywords.slice(0, 3).map((kw) => (
                                <Badge key={kw} variant="outline" className="text-xs border-platinum-600 text-platinum-300">
                                  {kw}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Research Metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-xs text-platinum-500"
      >
        <p>Research compiled: {overview.lastUpdated} | {overview.totalQueries} queries | {overview.successfulRetrievals}/{overview.totalUrlsFetched} URLs retrieved | {overview.retrievalRate}% success rate</p>
      </motion.div>
    </div>
  )
}
