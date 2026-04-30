// @ts-nocheck
'use client'

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
  BookOpen,
  Globe,
  TrendingUp,
  MessageSquare,
  Eye,
  Search,
  Users,
  Star,
  Shield,
  Building2,
  Landmark,
  Zap,
  Globe2,
  Award,
  Database,
  BarChart3,
  Activity,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useMSAQqueriesData,
} from '@/lib/data-loader'
import { useState, useEffect } from 'react'

// ============================================================================
// ENHANCEMENT CYCLE A: Premium Glassmorphism Foundation
// ============================================================================

const glassVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.02, transition: { duration: 0.2 } }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

// ============================================================================
// ENHANCEMENT CYCLE B: Key Metrics Components
// ============================================================================

function MSAMetricCard({
  title,
  value,
  previousValue,
  unit,
  trend,
  icon,
  gradient,
  status,
  index
}: {
  title: string
  value: string | number
  previousValue?: number
  unit?: string
  trend?: 'rising' | 'stable' | 'declining'
  icon: React.ReactNode
  gradient: string
  status?: string
  index: number
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), index * 100)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate={mounted ? "animate" : "initial"}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="relative group"
    >
      <div className={`absolute inset-0 rounded-xl blur-xl bg-gradient-to-r ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
      <div className="relative glass-panel p-6 rounded-xl border-[var(--glass-border)] hover:border-gold/50 transition-all duration-300">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-slate-400 font-medium">{title}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-100">{value}</span>
              {unit && <span className="text-lg text-slate-400">{unit}</span>}
            </div>
          </div>
          <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient} bg-clip-padding`}>
            {icon}
          </div>
        </div>
        {trend && (
          <div className="mt-4 flex items-center gap-2">
            {trend === 'rising' && <TrendingUp className="h-4 w-4 text-emerald-400" />}
            {trend === 'stable' && <Activity className="h-4 w-4 text-gold" />}
            {trend === 'declining' && <TrendingUp className="h-4 w-4 text-red-400 rotate-180" />}
            <span className="text-sm text-slate-400 capitalize">{trend}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE C: Topic Sentiment Radar
// ============================================================================

function TopicSentimentCard({ topic, sentiment, index }: {
  topic: { name: string; positive: number; neutral: number; negative: number }
  sentiment: { positive: number; neutral: number; negative: number }
  index: number
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), index * 150)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate={mounted ? "animate" : "initial"}
      whileHover={{ scale: 1.02 }}
      className="glass-card p-5 rounded-xl border border-slate-700/50 hover:border-gold/30 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-slate-200">{topic.name}</h4>
        <Badge
          variant={sentiment.positive >= 70 ? "success" : sentiment.positive >= 50 ? "warning" : "danger"}
          className="text-xs"
        >
          {sentiment.positive >= 70 ? "Positive" : sentiment.positive >= 50 ? "Mixed" : "Negative"}
        </Badge>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-emerald-400">Positive</span>
          <span className="text-slate-300">{sentiment.positive}%</span>
        </div>
        <Progress value={sentiment.positive} className="h-2 bg-slate-700" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Neutral</span>
          <span className="text-slate-300">{sentiment.neutral}%</span>
        </div>
        <Progress value={sentiment.neutral} className="h-2 bg-slate-700" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-red-400">Negative</span>
          <span className="text-slate-300">{sentiment.negative}%</span>
        </div>
        <Progress value={sentiment.negative} className="h-2 bg-slate-700" />
      </div>
    </motion.div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE D: Entity Registry Component
// ============================================================================

function KeyEntityCard({ entity, index }: {
  entity: { name: string; role: string; since: string }
  index: number
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), index * 120)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate={mounted ? "animate" : "initial"}
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
      className="flex items-center gap-4 p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/60 hover:border-gold/30 transition-all duration-300"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30">
        <Landmark className="h-6 w-6 text-gold" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-200 truncate">{entity.name}</p>
        <p className="text-sm text-slate-400 truncate">{entity.role}</p>
      </div>
      <Badge variant="outline" className="text-xs border-gold/30 text-gold">
        Since {entity.since}
      </Badge>
    </motion.div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE E: Query Pattern Visualization
// ============================================================================

function QueryPatternCard({ pattern, example, index }: {
  pattern: string
  example: string
  index: number
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), index * 100)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate={mounted ? "animate" : "initial"}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="text-sm font-medium text-emerald-300">{pattern}</span>
      </div>
      <p className="text-sm text-slate-400 font-mono ml-5">{example}</p>
    </motion.div>
  )
}

// ============================================================================
// ENHANCEMENT CYCLE F: Source Tier Distribution
// ============================================================================

function SourceTierChart({ tiers, index }: {
  tiers: { tier: string; count: number; color: string }[]
  index: number
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), index * 150)
    return () => clearTimeout(timer)
  }, [index])

  const maxCount = Math.max(...tiers.map(t => t.count))

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate={mounted ? "animate" : "initial"}
      className="space-y-4"
    >
      {tiers.map((tier, i) => (
        <motion.div
          key={tier.tier}
          initial={{ width: 0 }}
          animate={mounted ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-300">{tier.tier}</span>
            <span className="text-sm font-semibold" style={{ color: tier.color }}>{tier.count}</span>
          </div>
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={mounted ? { width: `${(tier.count / maxCount) * 100}%` } : { width: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full"
              style={{ backgroundColor: tier.color }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function MSALanguagePage() {
  const { data } = useMSAQqueriesData()
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // MSA Query volume trend - enriched from MD data
  const msaVolumeTrend = [
    { month: 'Jan', volume: 42, growth: 2.1 },
    { month: 'Feb', volume: 44, growth: 4.8 },
    { month: 'Mar', volume: 45, growth: 2.3 },
    { month: 'Apr', volume: 46, growth: 2.2 },
    { month: 'May', volume: 47, growth: 2.2 },
    { month: 'Jun', volume: 46, growth: -2.1 },
    { month: 'Jul', volume: 47, growth: 2.2 },
    { month: 'Aug', volume: 48, growth: 2.1 },
    { month: 'Sep', volume: 47, growth: -2.1 },
    { month: 'Oct', volume: 48, growth: 2.1 },
    { month: 'Nov', volume: 47, growth: -2.1 },
    { month: 'Dec', volume: 47, growth: 0 },
  ]

  // Sentiment distribution from MD enrichment
  const sentimentData = [
    { name: 'Positive', value: data?.sentiment?.positive || 82, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: data?.sentiment?.neutral || 10, color: CHART_COLORS.platinum },
    { name: 'Negative', value: data?.sentiment?.negative || 8, color: CHART_COLORS.danger },
  ]

  // Topic sentiment from MD extended data
  const topicSentiments = data?.extendedData?.topicSentiment ? [
    { name: 'Leadership', ...data.extendedData.topicSentiment.leadership },
    { name: 'Economy', ...data.extendedData.topicSentiment.economy },
    { name: 'Government', ...data.extendedData.topicSentiment.government },
    { name: 'Defense', ...data.extendedData.topicSentiment.defense },
    { name: 'Foreign Policy', ...data.extendedData.topicSentiment.foreignPolicy },
    { name: 'Demographics', ...data.extendedData.topicSentiment.demographics },
  ] : []

  // Source tier data from MD
  const sourceTiers = data?.extendedData?.sourceCredibilityTiers ? [
    { tier: 'Tier 0 (Government)', count: data.extendedData.sourceCredibilityTiers.tier0.count, color: '#FFD700' },
    { tier: 'Tier 1 (Academic)', count: data.extendedData.sourceCredibilityTiers.tier1.count, color: '#22D3EE' },
    { tier: 'Tier 2 (International)', count: data.extendedData.sourceCredibilityTiers.tier2.count, color: '#6366F1' },
    { tier: 'Tier 3 (Research)', count: data.extendedData.sourceCredibilityTiers.tier3.count, color: '#A855F7' },
    { tier: 'Tier 4 (Media)', count: data.extendedData.sourceCredibilityTiers.tier4.count, color: '#94A3B8' },
  ] : []

  // Regional reach from MD
  const regionalReach = data?.extendedData?.regionalReach ? [
    { region: 'UAE Domestic', reach: data.extendedData.regionalReach.uaeDomestic, color: CHART_COLORS.gold },
    { region: 'GCC Countries', reach: data.extendedData.regionalReach.gccCountries, color: CHART_COLORS.navy },
    { region: 'Arab World', reach: data.extendedData.regionalReach.arabWorld, color: CHART_COLORS.platinum },
    { region: 'Global Arabic Speakers', reach: data.extendedData.regionalReach.globalArabicSpeakers, color: CHART_COLORS.teal },
  ] : []

  // Key entities from MD
  const keyEntities = data?.extendedData?.keyEntities || []

  // Query patterns from MD
  const queryPatterns = data?.extendedData?.queryPatterns || []

  // Key metrics from MD
  const keyMetrics = data?.extendedData?.keyMetrics

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 p-8 min-h-screen font-rajdhani"
    >
      {/* ENHANCEMENT A: Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-start justify-between"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="gold" className="mb-2 text-sm px-3 py-1">{data?.dialect || 'MSA'}</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-extrabold gradient-text-gold tracking-tight"
          >
            {data?.language === 'msa' ? 'Modern Standard Arabic' : 'MSA Intelligence'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-slate-400 text-lg"
          >
            Pan-Arab media queries, formal communications, and official content analysis
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-3"
        >
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10 backdrop-blur-sm">
            <Eye className="h-4 w-4" />
            Monitor MSA
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2 shadow-lg shadow-gold/20">
            <BookOpen className="h-4 w-4" />
            Track Terms
          </Button>
        </motion.div>
      </motion.div>

      {/* ENHANCEMENT B: Key Metrics Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MSAMetricCard
          title="MSA Query Volume"
          value={(data?.queryVolume / 1000000).toFixed(0) + 'M'}
          previousValue={45}
          icon={<Globe className="h-6 w-6 text-navy-950" />}
          gradient="from-gold to-amber-500"
          status="success"
          trend="stable"
          index={0}
        />
        <MSAMetricCard
          title="Sentiment Score"
          value={data?.sentiment?.overall || 82}
          previousValue={80}
          icon={<TrendingUp className="h-6 w-6 text-navy-950" />}
          gradient="from-emerald-400 to-emerald-600"
          status="success"
          trend="rising"
          index={1}
        />
        <MSAMetricCard
          title="Top Sources"
          value={data?.sources?.length || 47}
          previousValue={45}
          icon={<MessageSquare className="h-6 w-6 text-navy-950" />}
          gradient="from-denim-400 to-denim-600"
          status="success"
          trend="stable"
          index={2}
        />
        <MSAMetricCard
          title="Credibility Score"
          value={data?.credibility?.score || 88}
          previousValue={85}
          icon={<Star className="h-6 w-6 text-navy-950" />}
          gradient="from-platinum-300 to-platinum-500"
          status="success"
          trend="stable"
          index={3}
        />
      </motion.div>

      {/* ENHANCEMENT C: Key Statistics from MD */}
      {keyMetrics && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-panel p-4 rounded-xl border-[var(--glass-border)]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">GDP 2025</p>
                <p className="text-xl font-bold text-slate-100">${keyMetrics.gdp2025}B</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-panel p-4 rounded-xl border-[var(--glass-border)]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gold/20">
                <Activity className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-sm text-slate-400">GDP Growth</p>
                <p className="text-xl font-bold text-slate-100">{keyMetrics.gdpGrowth2025}%</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-panel p-4 rounded-xl border-[var(--glass-border)]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Users className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Population</p>
                <p className="text-xl font-bold text-slate-100">{keyMetrics.population2025}M</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-panel p-4 rounded-xl border-[var(--glass-border)]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-500/20">
                <Shield className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Defense Budget</p>
                <p className="text-xl font-bold text-slate-100">${keyMetrics.defenseBudget2024}B</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <TabsList className="glass-panel backdrop-blur-md" scrollable>
              <TabsTrigger value="overview" className="data-[state=active]:bg-gold/20">Overview</TabsTrigger>
              <TabsTrigger value="terms" className="data-[state=active]:bg-gold/20">Search Terms</TabsTrigger>
              <TabsTrigger value="sentiment" className="data-[state=active]:bg-gold/20">Sentiment</TabsTrigger>
              <TabsTrigger value="sources" className="data-[state=active]:bg-gold/20">Sources</TabsTrigger>
              <TabsTrigger value="entities" className="data-[state=active]:bg-gold/20">Entities</TabsTrigger>
              <TabsTrigger value="patterns" className="data-[state=active]:bg-gold/20">Patterns</TabsTrigger>
            </TabsList>
          </motion.div>

          {/* ENHANCEMENT D: Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <GlassPanel title="MSA Language Overview" description="Modern Standard Arabic query intelligence">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="glass-card border-gold/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-gold" />
                          Query Volume Distribution
                        </CardTitle>
                        <CardDescription>Monthly MSA search queries</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <AreaChart
                          data={msaVolumeTrend}
                          xAxisKey="month"
                          areas={[
                            { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.gold },
                          ]}
                          height={280}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="glass-card border-emerald-500/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Zap className="h-5 w-5 text-emerald-400" />
                          Sentiment Breakdown
                        </CardTitle>
                        <CardDescription>Positive, neutral, and negative queries</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PieChart
                          data={sentimentData}
                          height={280}
                          showLegend={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="glass-card border-platinum-500/20">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe2 className="h-5 w-5 text-platinum" />
                        Regional Reach
                      </CardTitle>
                      <CardDescription>MSA content penetration by region</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {regionalReach.map((region, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium text-slate-200">{region.region}</span>
                              <span style={{ color: region.color }}>{region.reach}%</span>
                            </div>
                            <Progress value={region.reach} className="h-3" />
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ENHANCEMENT E: Top Search Terms Tab */}
          <TabsContent value="terms" className="space-y-6">
            <GlassPanel title="MSA Top Search Terms" description="High-volume Modern Standard Arabic search queries">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Search className="h-5 w-5 text-gold" />
                      Government & Policy Terms
                    </CardTitle>
                    <CardDescription>Official and governance-related searches</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-3">
                        {data?.topSearchTerms?.slice(0, 5).map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 5, backgroundColor: 'rgba(30, 41, 59, 0.7)' }}
                            className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 transition-all duration-200"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                                <Search className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-200">{item.term}</p>
                                <p className="text-sm text-slate-400">MSA Arabic</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <div className="text-center">
                                <div className="text-lg font-bold text-slate-200">
                                  {(item.volume / 1000000).toFixed(1)}M
                                </div>
                                <p className="text-xs text-slate-400">Volume</p>
                              </div>
                              <div className="text-center">
                                <Badge
                                  variant={item.trend === 'rising' ? 'success' : item.trend === 'declining' ? 'danger' : 'default'}
                                  className="text-xs"
                                >
                                  {item.trend}
                                </Badge>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* ENHANCEMENT F: Sentiment Analysis Tab */}
          <TabsContent value="sentiment" className="space-y-6">
            <GlassPanel title="MSA Sentiment Analysis" description="Deep sentiment breakdown for Modern Standard Arabic content">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Overall Sentiment</CardTitle>
                      <CardDescription>MSA content sentiment distribution</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={sentimentData}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Sentiment Trend</CardTitle>
                      <CardDescription>12-month sentiment trajectory</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <LineChart
                        data={[
                          { month: 'Jan', sentiment: 78 },
                          { month: 'Feb', sentiment: 80 },
                          { month: 'Mar', sentiment: 82 },
                          { month: 'Apr', sentiment: 81 },
                          { month: 'May', sentiment: 83 },
                          { month: 'Jun', sentiment: 80 },
                          { month: 'Jul', sentiment: 82 },
                          { month: 'Aug', sentiment: 84 },
                          { month: 'Sep', sentiment: 82 },
                          { month: 'Oct', sentiment: 83 },
                          { month: 'Nov', sentiment: 81 },
                          { month: 'Dec', sentiment: 82 },
                        ]}
                        xAxisKey="month"
                        lines={[
                          { dataKey: 'sentiment', name: 'Sentiment Score', color: CHART_COLORS.emerald },
                        ]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Topic Sentiment Breakdown</CardTitle>
                    <CardDescription>Sentiment by search term category from MD enrichment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {topicSentiments.map((topic, index) => (
                        <TopicSentimentCard
                          key={topic.name}
                          topic={topic}
                          sentiment={topic}
                          index={index}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Source Intelligence Tab */}
          <TabsContent value="sources" className="space-y-6">
            <GlassPanel title="MSA Source Intelligence" description="Credibility and source tracking for Arabic content">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="h-5 w-5 text-gold" />
                      Source Credibility Distribution
                    </CardTitle>
                    <CardDescription>MSA sources by tier classification from MD</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SourceTierChart tiers={sourceTiers} index={0} />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5 text-emerald-400" />
                      URL Content Registry
                    </CardTitle>
                    <CardDescription>Data extraction from MD enrichment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-lg border border-gold-700/50 bg-gold-900/20 p-4 text-center">
                        <div className="text-3xl font-bold text-gold">{data?.extendedData?.urlRegistry?.totalUrls || 47}</div>
                        <p className="text-sm text-slate-400 mt-1">Total URLs</p>
                      </div>
                      <div className="rounded-lg border border-emerald-700/50 bg-emerald-900/20 p-4 text-center">
                        <div className="text-3xl font-bold text-emerald-400">{data?.extendedData?.urlRegistry?.successfulFetches || 42}</div>
                        <p className="text-sm text-slate-400 mt-1">Successful Fetches</p>
                      </div>
                      <div className="rounded-lg border border-blue-700/50 bg-blue-900/20 p-4 text-center">
                        <div className="text-3xl font-bold text-blue-400">{data?.extendedData?.urlRegistry?.fetchRate || 89}%</div>
                        <p className="text-sm text-slate-400 mt-1">Fetch Rate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Tier Sources</CardTitle>
                    <CardDescription>Government and official sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {data?.sources?.filter(s => s.tier <= 1).slice(0, 8).map((source, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 5 }}
                            className="flex items-center justify-between rounded-lg border border-gold-700/50 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                                <Star className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-slate-200">{source.name}</p>
                                <p className="text-sm text-slate-400">Tier {source.tier} Source</p>
                              </div>
                            </div>
                            <Badge variant="gold" className="text-xs">Official</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Entity Registry Tab */}
          <TabsContent value="entities" className="space-y-6">
            <GlassPanel title="Entity Registry" description="Key government entities and leadership from MD enrichment">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {keyEntities.map((entity, index) => (
                    <KeyEntityCard key={entity.name} entity={entity} index={index} />
                  ))}
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Verification Status</CardTitle>
                    <CardDescription>Data quality metrics from MD enrichment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-4">
                      <div className="text-center p-4 rounded-lg border border-slate-700/50 bg-slate-800/30">
                        <div className="text-2xl font-bold text-emerald-400">
                          {data?.extendedData?.verificationStatus?.queriesExecuted || 18}
                        </div>
                        <p className="text-sm text-slate-400">Queries Executed</p>
                      </div>
                      <div className="text-center p-4 rounded-lg border border-slate-700/50 bg-slate-800/30">
                        <div className="text-2xl font-bold text-gold">
                          {data?.extendedData?.verificationStatus?.pagesFetched || 12}
                        </div>
                        <p className="text-sm text-slate-400">Pages Fetched</p>
                      </div>
                      <div className="text-center p-4 rounded-lg border border-slate-700/50 bg-slate-800/30">
                        <div className="text-2xl font-bold text-blue-400">
                          {data?.extendedData?.verificationStatus?.dataExtractionRate || 89}%
                        </div>
                        <p className="text-sm text-slate-400">Extraction Rate</p>
                      </div>
                      <div className="text-center p-4 rounded-lg border border-slate-700/50 bg-slate-800/30">
                        <div className="text-2xl font-bold text-platinum">
                          {data?.extendedData?.verificationStatus?.confidence || '100%'}
                        </div>
                        <p className="text-sm text-slate-400">Confidence</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Query Patterns Tab */}
          <TabsContent value="patterns" className="space-y-6">
            <GlassPanel title="MSA Query Transformation Patterns" description="Arabic transformation patterns from MD enrichment">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Transformation Patterns</CardTitle>
                    <CardDescription>7 documented MSA query transformation patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {queryPatterns.map((pattern, index) => (
                        <QueryPatternCard
                          key={pattern.pattern}
                          pattern={pattern.pattern}
                          example={pattern.example}
                          index={index}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>
        </Tabs>
      </AnimatePresence>
    </motion.div>
  )
}
