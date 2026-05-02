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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Smartphone,
  MessageSquare,
  Share2,
  Heart,
  Eye,
  ThumbsUp,
  Hash,
  Instagram,
  Youtube,
  Twitter,
  TrendingDown,
  DollarSign,
  Clock,
  Target,
} from 'lucide-react'
import {
  useTrendsDataArrayData,
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
      staggerChildren: 0.08,
    },
  },
}

const scaleHover = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
}

// Cycle A: Enhanced MetricCard with Rajdhani font styling
function MetricCardA({ title, value, previousValue, icon, gradient, status, onClick }: {
  title: string
  value: string | number
  previousValue?: number
  icon?: React.ReactNode
  gradient?: string
  status?: string
  onClick?: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <MetricCard
        title={title}
        value={value}
        previousValue={previousValue}
        icon={icon}
        gradient={gradient as any}
        status={status as any}
        onClick={onClick}
        className="font-rajdhani"
      />
    </motion.div>
  )
}

// Cycle B: Platform card with glassmorphism
function PlatformCardB({ name, value, users, color, trend }: {
  name: string
  value: number
  users: string
  color: string
  trend?: string
}) {
  return (
    <motion.div
      variants={scaleHover}
      whileHover="hover"
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-glass-surface/80 to-glass-border/50 rounded-xl blur-sm" />
      <Card className="relative glass-panel border-glass-border bg-glass-surface/60 backdrop-blur-md transition-all duration-300 hover:shadow-glass-lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ backgroundColor: color }}
              >
                <Hash className="h-4 w-4 text-white" />
              </motion.div>
              <span className="font-rajdhani text-lg font-bold text-platinum-200">{name}</span>
            </div>
            <Badge variant="outline" className="border-glass-border bg-glass-surface/40 text-gold-400">
              {users} users
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-rajdhani text-platinum-400">Market Share</span>
              <span className="font-rajdhani font-bold text-gold-400">{value}%</span>
            </div>
            <Progress value={value} className="h-2 glass-progress" />
            {trend && (
              <div className="flex items-center gap-1 text-xs">
                <TrendingUp className="h-3 w-3 text-emerald-400" />
                <span className="font-rajdhani text-emerald-400">{trend}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Cycle C: Sentiment ring chart component
function SentimentRingC({ data }: { data: { name: string; value: number; color: string }[] }) {
  const total = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <div className="relative flex items-center justify-center">
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="transform -rotate-90"
      >
        {data.map((item, idx) => {
          const percentage = (item.value / total) * 100
          const strokeDasharray = `${percentage * 3.14} 314`
          const offset = data.slice(0, idx).reduce((sum, d) => sum + (d.value / total) * 314, 0)

          return (
            <motion.circle
              key={item.name}
              cx="100"
              cy="100"
              r="50"
              fill="none"
              stroke={item.color}
              strokeWidth="20"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 314" }}
              animate={{ strokeDasharray: `${percentage * 3.14} 314` }}
              transition={{ duration: 1, delay: idx * 0.2 }}
            />
          )
        })}
      </motion.svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-rajdhani text-3xl font-bold text-gold-400">{total}%</span>
        <span className="font-rajdhani text-xs text-platinum-400">Total</span>
      </div>
    </div>
  )
}

// Cycle D: Content category performance
function ContentPerformanceD({ categories }: {
  categories: { name: string; value: number; color: string }[]
}) {
  return (
    <div className="space-y-3">
      {categories.map((cat, idx) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="w-24 text-right">
            <span className="font-rajdhani text-sm text-platinum-300">{cat.name}</span>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-glass-surface/30 rounded-full" />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${cat.value}%` }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="h-6 rounded-full relative"
              style={{ backgroundColor: cat.color }}
            />
          </div>
          <div className="w-12 text-right">
            <span className="font-rajdhani text-sm font-bold text-gold-400">{cat.value}%</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Cycle E: Forecast scenario card
function ForecastCardE({ scenario, probability, timeline, indicators, variant }: {
  scenario: string
  probability: number
  timeline: string
  indicators: string[]
  variant: 'success' | 'warning' | 'danger'
}) {
  const variantStyles = {
    success: 'border-emerald-500/30 bg-emerald-500/10',
    warning: 'border-gold-500/30 bg-gold-500/10',
    danger: 'border-red-500/30 bg-red-500/10',
  }

  const badgeStyles = {
    success: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    warning: 'bg-gold-500/20 text-gold-400 border-gold-500/30',
    danger: 'bg-red-500/20 text-red-400 border-red-500/30',
  }

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.01 }}
      className="relative"
    >
      <div className={`absolute inset-0 rounded-xl blur-sm ${variantStyles[variant]}`} />
      <Card className={`relative glass-panel border-glass-border bg-glass-surface/60 backdrop-blur-md ${variantStyles[variant]}`}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="font-rajdhani text-lg capitalize text-platinum-100">{scenario} Scenario</CardTitle>
            <Badge className={`font-rajdhani ${badgeStyles[variant]}`}>
              {Math.round(probability * 100)}% probability
            </Badge>
          </div>
          <CardDescription className="font-rajdhani text-platinum-400">Timeline: {timeline}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {indicators.map((indicator, iIdx) => (
              <motion.div
                key={iIdx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: iIdx * 0.05 }}
                className="flex items-start gap-2 rounded-lg bg-glass-surface/40 p-2"
              >
                <Target className="h-4 w-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="font-rajdhani text-sm text-platinum-200">{indicator}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Cycle F: Gen Z metric highlight
function GenZHighlightF({ label, value, subValue, icon: Icon }: {
  label: string
  value: string
  subValue?: string
  icon: React.ElementType
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="flex items-center gap-3 rounded-xl bg-glass-surface/40 p-3 border border-glass-border"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30">
        <Icon className="h-5 w-5 text-violet-400" />
      </div>
      <div className="flex-1">
        <p className="font-rajdhani text-xs text-platinum-400">{label}</p>
        <p className="font-rajdhani text-xl font-bold text-gold-400">{value}</p>
        {subValue && <p className="font-rajdhani text-xs text-emerald-400">{subValue}</p>}
      </div>
    </motion.div>
  )
}

export default function SocialTrendsPage() {
  const { data: trendsData } = useTrendsDataArrayData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-platinum-400 font-rajdhani"
        >
          Loading Social Trends data...
        </motion.div>
      </div>
    )
  }

  // Filter social media trend data
  const socialTrend = trendsData.find(t => t.category === 'social-media')

  // Use provided data or fallback with enriched MD content
  const socialData = socialTrend || {
    id: 'trend-social',
    category: 'social-media',
    name: 'Social Media Trends',
    description: 'Social media in 2026 has reached supermajority status with 5.24-5.66 billion users globally. The landscape is defined by AI integration, short-form video dominance, and creator economy maturation.',
    adoptionRate: 89,
    uaeAdoptionRate: 99,
    generationalBreakdown: {
      genZ: 98,
      millennial: 95,
      genX: 78,
      boomer: 52,
    },
    sentiment: {
      positive: 68,
      negative: 18,
      neutral: 14,
      overall: 0.62,
      volume: 890000,
    },
    forecasts: [
      {
        scenario: 'optimistic',
        probability: 0.80,
        timeline: '2026-2027',
        indicators: ['Social commerce GMV $6.2T', 'TikTok 2.04B MAU', 'AI-generated content 90%'],
      },
      {
        scenario: 'baseline',
        probability: 0.65,
        timeline: '2027-2028',
        indicators: ['Global users 5.66B', 'Social commerce $1.09-6.2T range', 'Creator economy $32.6B'],
      },
      {
        scenario: 'pessimistic',
        probability: 0.25,
        timeline: '2028-2030',
        indicators: ['AI content engagement penalty -12%', 'Privacy regulation tightening', 'Platform fragmentation'],
      },
    ],
    keyDrivers: [
      'TikTok engagement rate 3.70-4.6% (+49% YoY)',
      'UAE TikTok users 34.1M in KSA with +39% YoY growth',
      'Instagram 73%+ penetration in UAE',
      'Social commerce 28% growth with $1.09-6.2T market',
      '79% of creators using AI tools',
    ],
    platformMetrics: {
      tiktok: { mau: '1.2-2.04B', engagementRate: '3.70-4.6%', dailyTime: '53.8-58 min' },
      instagram: { mau: '2.0-3.0B', engagementRate: '0.48-5.4%', reachPenetration: '73%+ in UAE' },
    },
    commerceMetrics: {
      globalSocialCommerce: '$1.09-6.2T',
      liveCommerce: '$172.86B',
      genZDiscovery: '77-82%',
    },
    influencerMetrics: {
      marketSize: '$32.6B',
      avgRoi: '$5.78',
      microRoi: '$7.14',
    },
    genZMetrics: {
      dailyTime: '4.5 hours',
      instagramUsage: '91%',
      tiktokUsage: '72-86%',
      privacyConcerns: '81%',
      influencerPurchases: '56%',
    },
    credibility: {
      tier: 1,
      score: 88,
      sources: 15,
      lastVerified: '2026-04-28',
    },
    uaeRelevance: {
      score: 95,
      level: 'critical',
      justification: 'UAE has 99.5% social media penetration',
    },
    alertLevel: 'GREEN',
    sources: [
      { name: 'Digital Applied', tier: 3, date: '2026-04-28' },
      { name: 'Hootsuite Social Trends', tier: 2, date: '2026-04-28' },
    ],
    lastUpdated: '2026-04-28',
  }

  // Platform breakdown with enhanced data
  const platformData = [
    { name: 'TikTok', value: 34, users: '34.1M', color: '#FF0050', trend: '+39% YoY' },
    { name: 'Instagram', value: 28, users: '8.2M', color: CHART_COLORS.gold, trend: '73%+ UAE' },
    { name: 'Facebook', value: 18, users: '7.1M', color: CHART_COLORS.navy, trend: 'Stable' },
    { name: 'Twitter/X', value: 12, users: '5.3M', color: CHART_COLORS.platinum, trend: '-5% YoY' },
    { name: 'YouTube', value: 8, users: '9.1M', color: '#FF0000', trend: '+5.5% YoY' },
  ]

  // Sentiment data with colors
  const sentimentData = [
    { name: 'Positive', value: socialData.sentiment?.positive || 68, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: socialData.sentiment?.neutral || 14, color: CHART_COLORS.platinum },
    { name: 'Negative', value: socialData.sentiment?.negative || 18, color: CHART_COLORS.rose },
  ]

  // Engagement metrics with MD data
  const engagementData = [
    { month: 'Jan', tiktok: 3.2, instagram: 2.8, youtube: 1.9 },
    { month: 'Feb', tiktok: 3.5, instagram: 2.9, youtube: 2.0 },
    { month: 'Mar', tiktok: 3.8, instagram: 3.0, youtube: 2.1 },
    { month: 'Apr', tiktok: 4.1, instagram: 3.2, youtube: 2.2 },
    { month: 'May', tiktok: 4.4, instagram: 3.3, youtube: 2.3 },
    { month: 'Jun', tiktok: 4.6, instagram: 3.4, youtube: 2.4 },
  ]

  // Content categories with MD data
  const contentCategories = [
    { name: 'Entertainment', value: 35, color: CHART_COLORS.gold },
    { name: 'Lifestyle', value: 28, color: CHART_COLORS.navy },
    { name: 'Education', value: 18, color: CHART_COLORS.platinum },
    { name: 'News', value: 12, color: CHART_COLORS.emerald },
    { name: 'Other', value: 7, color: CHART_COLORS.rose },
  ]

  // Gen Z metrics from MD
  const genZHighlights = [
    { label: 'Daily Time', value: '4.5 hrs', subValue: '+5% YoY', icon: Clock },
    { label: 'Instagram Usage', value: '91%', subValue: 'of Gen Z', icon: Instagram },
    { label: 'TikTok Usage', value: '72-86%', subValue: '+4pp YoY', icon: Smartphone },
    { label: 'Privacy Concerns', value: '81%', subValue: '+6pp YoY', icon: AlertTriangle },
  ]

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8 p-8 font-rajdhani"
    >
      {/* Header - Cycle A */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="gold" className="mb-2 font-rajdhani">SOCIAL TRENDS</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-extrabold gradient-text-gold-700 font-rajdhani"
          >
            Social Trends
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-platinum-400 font-rajdhani"
          >
            Social media adoption, platform analytics, engagement metrics, and content trends
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-3"
        >
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10 font-rajdhani">
            <Share2 className="h-4 w-4" />
            View Analytics
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2 font-rajdhani">
            <Zap className="h-4 w-4" />
            Analyze Platform
          </Button>
        </motion.div>
      </motion.div>

      {/* Key Metrics - Cycle A with motion */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCardA
          title="UAE Adoption Rate"
          value={`${socialData.uaeAdoptionRate || 99}%`}
          previousValue={(socialData.uaeAdoptionRate || 99) - 2}
          icon={<Smartphone className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCardA
          title="Total Users (UAE)"
          value="63.8M"
          previousValue={58.2}
          icon={<Users className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCardA
          title="Avg Engagement"
          value="3.9%"
          previousValue={3.2}
          icon={<Heart className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCardA
          title="Media Volume"
          value="890K"
          previousValue={820}
          icon={<MessageSquare className="h-6 w-6" />}
          gradient="indigo"
        />
      </motion.div>

      {/* Gen Z Highlights - Cycle F */}
      <motion.div variants={fadeInUp}>
        <div className="mb-4">
          <h3 className="font-rajdhani text-lg font-semibold text-gold-400">Gen Z Key Metrics</h3>
          <p className="font-rajdhani text-sm text-platinum-400">Critical demographic insights from MD research</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {genZHighlights.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <GenZHighlightF {...item} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview" className="font-rajdhani">Overview</TabsTrigger>
          <TabsTrigger value="platforms" className="font-rajdhani">Platforms</TabsTrigger>
          <TabsTrigger value="engagement" className="font-rajdhani">Engagement</TabsTrigger>
          <TabsTrigger value="forecast" className="font-rajdhani">Forecasts</TabsTrigger>
        </TabsList>

        {/* Overview Tab - Cycles A, C, D */}
        <AnimatePresence mode="wait">
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel
                title="Social Media Trends Overview"
                description="Key social media metrics and platform performance"
              >
                <div className="space-y-6">
                  {/* Platform Distribution */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani">Platform Distribution</CardTitle>
                      <CardDescription className="font-rajdhani">Social media users by platform in UAE</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={platformData}
                        xAxisKey="name"
                        bars={[
                          { dataKey: 'value', name: 'Share %', color: CHART_COLORS.gold },
                        ]}
                        height={300}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Sentiment Distribution - Cycle C */}
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg font-rajdhani">Sentiment Distribution</CardTitle>
                        <CardDescription className="font-rajdhani">Social media sentiment analysis</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col items-center">
                        <SentimentRingC data={sentimentData} />
                        <div className="mt-4 flex gap-4">
                          {sentimentData.map((item) => (
                            <div key={item.name} className="flex items-center gap-2">
                              <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="font-rajdhani text-sm text-platinum-300">
                                {item.name}: {item.value}%
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Content Categories - Cycle D */}
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg font-rajdhani">Content Categories</CardTitle>
                        <CardDescription className="font-rajdhani">Most popular content types</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ContentPerformanceD categories={contentCategories} />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Platforms Tab - Cycle B */}
        <AnimatePresence mode="wait">
          <TabsContent value="platforms" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Platform Analysis" description="Detailed breakdown of social media platforms">
                <div className="space-y-6">
                  {/* Platform Cards - Cycle B */}
                  <motion.div
                    variants={staggerContainer}
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {platformData.map((platform, idx) => (
                      <motion.div key={platform.name} variants={fadeInUp}>
                        <PlatformCardB {...platform} />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Generational Adoption */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani">Generational Adoption</CardTitle>
                      <CardDescription className="font-rajdhani">Social media usage by generation in UAE</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={[
                          { name: 'Gen Z', value: socialData.generationalBreakdown?.genZ || 98, color: CHART_COLORS.gold },
                          { name: 'Millennial', value: socialData.generationalBreakdown?.millennial || 95, color: CHART_COLORS.navy },
                          { name: 'Gen X', value: socialData.generationalBreakdown?.genX || 78, color: CHART_COLORS.platinum },
                          { name: 'Boomer', value: socialData.generationalBreakdown?.boomer || 52, color: CHART_COLORS.emerald },
                        ]}
                        xAxisKey="name"
                        bars={[
                          { dataKey: 'value', name: 'Adoption %', color: CHART_COLORS.gold },
                        ]}
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Engagement Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="engagement" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Engagement Metrics" description="Platform engagement rates and trends">
                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani">Engagement Rate Trend (%)</CardTitle>
                      <CardDescription className="font-rajdhani">Monthly engagement rates by platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <LineChart
                        data={engagementData}
                        xAxisKey="month"
                        bars={[
                          { dataKey: 'tiktok', name: 'TikTok', color: CHART_COLORS.rose },
                          { dataKey: 'instagram', name: 'Instagram', color: CHART_COLORS.gold },
                          { dataKey: 'youtube', name: 'YouTube', color: CHART_COLORS.navy },
                        ]}
                        height={300}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Key Engagement Metrics */}
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg font-rajdhani">Key Engagement Metrics</CardTitle>
                        <CardDescription className="font-rajdhani">Performance indicators</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { label: 'Avg. Likes/Post', value: '2,450', icon: ThumbsUp, color: CHART_COLORS.gold },
                            { label: 'Avg. Comments', value: '185', icon: MessageSquare, color: CHART_COLORS.navy },
                            { label: 'Avg. Shares', value: '420', icon: Share2, color: CHART_COLORS.emerald },
                            { label: 'Video Views', value: '45.2K', icon: Eye, color: CHART_COLORS.rose },
                          ].map((item, idx) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center justify-between rounded-lg bg-glass-surface/50 p-3 border border-glass-border"
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                                  style={{ backgroundColor: item.color }}
                                >
                                  <item.icon className="h-4 w-4 text-white" />
                                </div>
                                <span className="font-rajdhani text-sm font-medium text-platinum-200">{item.label}</span>
                              </div>
                              <span className="font-rajdhani text-lg font-bold text-gold-400">{item.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Content Performance */}
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg font-rajdhani">Content Performance</CardTitle>
                        <CardDescription className="font-rajdhani">Best performing content types</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            { type: 'Short-form Video', performance: 92, icon: '🎬', color: CHART_COLORS.rose },
                            { type: 'Stories/Reels', performance: 78, icon: '📱', color: CHART_COLORS.gold },
                            { type: 'Live Streams', performance: 65, icon: '📺', color: CHART_COLORS.emerald },
                            { type: 'Carousel Posts', performance: 54, icon: '🖼️', color: CHART_COLORS.navy },
                            { type: 'Text-only', performance: 23, icon: '📝', color: CHART_COLORS.platinum },
                          ].map((item, idx) => (
                            <motion.div
                              key={item.type}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center justify-between rounded-lg bg-glass-surface/50 p-3 border border-glass-border"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl">{item.icon}</span>
                                <span className="font-rajdhani text-sm font-medium text-platinum-200">{item.type}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-20 h-2 bg-glass-surface rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.performance}%` }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    className="h-full rounded-full"
                                    style={{ backgroundColor: item.color }}
                                  />
                                </div>
                                <span className="font-rajdhani text-lg font-bold text-gold-400 w-10 text-right">
                                  {item.performance}%
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Forecasts Tab - Cycle E */}
        <AnimatePresence mode="wait">
          <TabsContent value="forecast" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Social Media Forecasts" description="Predictive scenarios for social media trends">
                <div className="space-y-6">
                  {socialData.forecasts?.map((forecast, idx) => {
                    const variant = forecast.scenario === 'optimistic' ? 'success' :
                      forecast.scenario === 'baseline' ? 'warning' : 'danger'

                    return (
                      <motion.div
                        key={forecast.scenario}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <ForecastCardE
                          scenario={forecast.scenario}
                          probability={forecast.probability}
                          timeline={forecast.timeline}
                          indicators={forecast.indicators}
                          variant={variant}
                        />
                      </motion.div>
                    )
                  })}
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  )
}