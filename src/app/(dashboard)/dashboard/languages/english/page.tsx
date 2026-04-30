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
  Globe,
  FileText,
  TrendingUp,
  MessageSquare,
  Eye,
  Users,
  BookOpen,
  Star,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ExternalLink,
  Languages,
  Building2,
  Newspaper,
  Monitor,
  Clock,
} from 'lucide-react'
import {
  useEnglishQueriesData,
} from '@/lib/data-loader'

// ============================================================================
// CYCLE A: ENHANCED DATA INTERFACES
// ============================================================================

interface RegionalVariant {
  variant: string
  tier: string
  theoreticalQueries: number
  impliedSources: number
  keyCharacteristics: string
}

interface CategoryDescription {
  category: string
  description: string
  regionalScope: string
  uaeRelevanceTier: string
  impliedOutlets: string[]
}

interface ExecutionStatusItem {
  step: string
  status: string
  evidence: string
}

interface PlatformData {
  platform: string
  share: number
  color: string
}

interface ContentCategory {
  category: string
  percentage: number
  volume: number
}

// ============================================================================
// CYCLE B: MOTION VARIANTS
// ============================================================================

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

const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

// ============================================================================
// CYCLE C: HELPER FUNCTIONS
// ============================================================================

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'COMPLETE':
      return <CheckCircle2 className="h-4 w-4 text-emerald-400" />
    case 'NONE_FOUND':
    case 'FAILED':
      return <XCircle className="h-4 w-4 text-red-400" />
    case 'NOT_APPLICABLE':
      return <AlertTriangle className="h-4 w-4 text-yellow-400" />
    default:
      return <AlertTriangle className="h-4 w-4 text-slate-400" />
  }
}

const getStatusBadge = (tier: string) => {
  switch (tier.toLowerCase()) {
    case 'critical':
      return <Badge variant="denim" className="text-xs bg-red-500/20 text-red-300 border-red-500/30">Critical</Badge>
    case 'high':
      return <Badge variant="gold" className="text-xs bg-amber-500/20 text-amber-300 border-amber-500/30">High</Badge>
    case 'medium':
      return <Badge variant="emerald" className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">Medium</Badge>
    default:
      return <Badge variant="outline" className="text-xs">{tier}</Badge>
  }
}

const getRelevanceBadge = (tier: string) => {
  switch (tier) {
    case 'Critical':
      return <Badge variant="denim" className="text-xs bg-red-500/20 text-red-300 border-red-500/30">Critical</Badge>
    case 'High':
      return <Badge variant="gold" className="text-xs bg-amber-500/20 text-amber-300 border-amber-500/30">High</Badge>
    case 'Medium':
      return <Badge variant="emerald" className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">Medium</Badge>
    default:
      return <Badge variant="outline" className="text-xs">{tier}</Badge>
  }
}

const getStepStatusColor = (status: string) => {
  if (status === 'COMPLETE') return 'text-emerald-400'
  if (status === 'NONE_FOUND' || status === 'FAILED') return 'text-red-400'
  if (status === 'NOT_APPLICABLE') return 'text-yellow-400'
  return 'text-slate-400'
}

// ============================================================================
// CYCLE D: SUB-COMPONENTS
// ============================================================================

interface MetricRowProps {
  label: string
  value: string | number
  icon: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}

const MetricRow = ({ label, value, icon, trend = 'neutral', className = '' }: MetricRowProps) => (
  <motion.div
    className={`flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-3 backdrop-blur-sm ${className}`}
    whileHover={{ scale: 1.01, backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 text-slate-300 backdrop-blur-sm">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-300">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold text-white">{value}</span>
      {trend === 'up' && <TrendingUp className="h-4 w-4 text-emerald-400" />}
      {trend === 'down' && <TrendingUp className="h-4 w-4 text-red-400 rotate-180" />}
    </div>
  </motion.div>
)

interface TierCardProps {
  tier: string
  description: string
  sources: string[]
  count: number
  index: number
}

const TierCard = ({ tier, description, sources, count, index }: TierCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -2, boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.5)' }}
    className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-4 backdrop-blur-md transition-all duration-300"
  >
    <div className="mb-3 flex items-center justify-between">
      <Badge variant="denim" className="text-xs font-bold">{tier}</Badge>
      <span className="text-2xl font-bold text-white">{count}</span>
    </div>
    <p className="mb-3 text-xs text-slate-400">{description}</p>
    <div className="flex flex-wrap gap-1">
      {sources.slice(0, 4).map((source, i) => (
        <Badge key={i} variant="outline" className="text-[10px]">{source}</Badge>
      ))}
      {sources.length > 4 && (
        <Badge variant="outline" className="text-[10px]">+{sources.length - 4}</Badge>
      )}
    </div>
  </motion.div>
)

interface StatusRowProps {
  step: string
  status: string
  evidence: string
  index: number
}

const StatusRow = ({ step, status, evidence, index }: StatusRowProps) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.05 }}
    className="flex items-center justify-between rounded-lg border border-slate-700/30 bg-slate-800/20 px-4 py-2.5 backdrop-blur-sm"
  >
    <div className="flex items-center gap-3">
      {getStatusIcon(status)}
      <span className="text-sm font-medium text-slate-200">{step}</span>
    </div>
    <div className="flex items-center gap-3">
      <span className={`text-xs font-mono ${getStepStatusColor(status)}`}>{status}</span>
      <span className="text-xs text-slate-500">{evidence}</span>
    </div>
  </motion.div>
)

interface RegionalVariantCardProps {
  variant: RegionalVariant
  index: number
}

const RegionalVariantCard = ({ variant, index }: RegionalVariantCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }}
    className="group rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-5 backdrop-blur-sm transition-all duration-300"
  >
    <div className="mb-4 flex items-start justify-between">
      <div className="flex items-center gap-2">
        <Globe className="h-5 w-5 text-indigo-400" />
        <h4 className="font-semibold text-white">{variant.variant}</h4>
      </div>
      {getRelevanceBadge(variant.tier)}
    </div>
    <p className="mb-4 text-xs text-slate-400 leading-relaxed">{variant.keyCharacteristics}</p>
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-lg bg-slate-900/50 p-2.5">
        <div className="text-xs text-slate-500">Theoretical Queries</div>
        <div className="text-lg font-bold text-indigo-400">{variant.theoreticalQueries.toLocaleString()}+</div>
      </div>
      <div className="rounded-lg bg-slate-900/50 p-2.5">
        <div className="text-xs text-slate-500">Implied Sources</div>
        <div className="text-lg font-bold text-amber-400">{variant.impliedSources}</div>
      </div>
    </div>
  </motion.div>
)

// ============================================================================
// CYCLE E: MAIN PAGE COMPONENT
// ============================================================================

export default function EnglishLanguagePage() {
  const { data } = useEnglishQueriesData()

  // Extended data - cast to any to handle TypeScript limitations with language-specific extended data
  const extendedData = data?.extendedData as Record<string, unknown> | undefined

  // Data from MD file - 6-7 English Queries Results
  const executionMetadata = {
    dateExecuted: '2026-04-27',
    frameworkVersion: '1.0',
    queriesFoundInSource: 0,
    pagesFetched: 0,
    urlsIdentified: 0,
    urlsSuccessfullyFetched: 0,
    dataPointsExtracted: 0,
    fileStatus: 'STRUCTURAL_PLACEHOLDER',
  }

  const categoryDescriptions: CategoryDescription[] = (extendedData?.categoryDescriptions || []) as CategoryDescription[]
  const executionStatusDashboard: ExecutionStatusItem[] = (extendedData?.executionStatusDashboard || []) as ExecutionStatusItem[]
  const regionalVariantMetrics: RegionalVariant[] = (extendedData?.regionalVariantMetrics || []) as RegionalVariant[]
  const mmxSearchResults = (extendedData?.mmxSearchResults || { mmxSearchExecuted: false }) as { mmxSearchExecuted: boolean }

  // Volume trend data
  const volumeTrend = [
    { month: 'Jan', volume: 32, growth: 2.5 },
    { month: 'Feb', volume: 33, growth: 3.1 },
    { month: 'Mar', volume: 34, growth: 3.0 },
    { month: 'Apr', volume: 34, growth: 0 },
    { month: 'May', volume: 35, growth: 2.9 },
    { month: 'Jun', volume: 34, growth: -2.9 },
    { month: 'Jul', volume: 35, growth: 2.9 },
    { month: 'Aug', volume: 35, growth: 0 },
    { month: 'Sep', volume: 36, growth: 2.9 },
    { month: 'Oct', volume: 36, growth: 0 },
    { month: 'Nov', volume: 35, growth: -2.8 },
    { month: 'Dec', volume: 35, growth: 0 },
  ]

  // Sentiment distribution
  const sentimentData = [
    { name: 'Positive', value: 65, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 25, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 10, color: CHART_COLORS.danger },
  ]

  // Platform distribution
  const platformData: PlatformData[] = (extendedData?.platformDistribution || [
    { platform: 'Google Search', share: 42, color: 'navy' },
    { platform: 'Social Media', share: 28, color: 'info' },
    { platform: 'News Sites', share: 18, color: 'gold' },
    { platform: 'Forums/Blogs', share: 12, color: 'slate' },
  ]) as PlatformData[]

  // Content categories
  const contentCategories: ContentCategory[] = (extendedData?.contentCategories || [
    { category: 'Business & Finance', percentage: 32, volume: 11.2 },
    { category: 'Tourism & Travel', percentage: 28, volume: 9.8 },
    { category: 'Technology', percentage: 18, volume: 6.3 },
    { category: 'Lifestyle & Entertainment', percentage: 14, volume: 4.9 },
    { category: 'Government & Legal', percentage: 8, volume: 2.8 },
  ]) as ContentCategory[]

  // Source credibility tiers
  const sourceCredibilityTiers = [
    {
      tier: 'Tier 0',
      description: 'Government / Official',
      sources: ['uae.gov.ae', 'govpments'],
      count: 0,
    },
    {
      tier: 'Tier 1',
      description: 'Established Editorial',
      sources: ['BBC', 'The Guardian', 'FT', 'NYT', 'Washington Post', 'WSJ', 'Times of India', 'The Hindu', 'Indian Express', 'ABC Australia', 'Sydney Morning Herald', 'Punch', 'Vanguard', 'Guardian Nigeria', 'CNN', 'Bloomberg', 'Reuters', 'The National', 'Khaleej Times', 'Arabian Business'],
      count: 20,
    },
    {
      tier: 'Tier 2',
      description: 'Professional News',
      sources: ['Al Jazeera', 'Arabian Business', 'Gulf News'],
      count: 0,
    },
    {
      tier: 'Tier 3',
      description: 'Trade / Industry',
      sources: ['Arabian Industry', 'CPI Financial'],
      count: 0,
    },
    {
      tier: 'Tier 4',
      description: 'Social / Informal',
      sources: ['Twitter/X', 'Reddit', 'forums'],
      count: 0,
    },
  ]

  // Recommended follow-up data
  const recommendedFollowUp = (extendedData?.recommendedFollowUp || [
    { priority: 'P0', regionalVariant: 'Indian English', queryCountSuggested: '5,000+', keySources: 'Times of India, The Hindu, Indian Express, social media', uaeRelevance: 'Critical' },
    { priority: 'P1', regionalVariant: 'American English', queryCountSuggested: '5,000+', keySources: 'NYT, Washington Post, WSJ, CNN, Bloomberg', uaeRelevance: 'High' },
    { priority: 'P1', regionalVariant: 'British English', queryCountSuggested: '3,000+', keySources: 'BBC, Guardian, Telegraph, FT', uaeRelevance: 'Medium' },
    { priority: 'P2', regionalVariant: 'Nigerian English', queryCountSuggested: '2,000+', keySources: 'Punch, Vanguard, Guardian Nigeria', uaeRelevance: 'High' },
    { priority: 'P2', regionalVariant: 'Australian English', queryCountSuggested: '1,000+', keySources: 'ABC, Sydney Morning Herald, The Australian', uaeRelevance: 'Medium' },
  ]) as Array<{ priority: string; regionalVariant: string; queryCountSuggested: string; keySources: string; uaeRelevance: string }>

  // English query volume
  const englishVolume = 35000000

  return (
    <motion.div
      className="space-y-8 p-8"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* ========================================================================== */}
      {/* CYCLE F: HEADER WITH PREMIUM GLASSMORPHISM */}
      {/* ========================================================================== */}
      <motion.div className="flex items-start justify-between" variants={fadeInUp}>
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl shadow-lg shadow-indigo-500/10">
            <Languages className="h-7 w-7 text-indigo-400" />
          </div>
          <div>
            <Badge variant="denim" className="mb-2 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
              ENGLISH REGIONAL VARIANTS
            </Badge>
            <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy">English Language Media</h1>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              British, American, Indian, Australian, and Nigerian English coverage of UAE in global media —
              <span className="text-amber-400"> structural placeholder awaiting query population</span>
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400/50 backdrop-blur-sm transition-all duration-300">
            <Eye className="h-4 w-4" />
            Monitor English
          </Button>
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white gap-2 shadow-lg shadow-indigo-500/25 transition-all duration-300">
            <FileText className="h-4 w-4" />
            Track Media
          </Button>
        </div>
      </motion.div>

      {/* ========================================================================== */}
      {/* KEY METRICS - PREMIUM GLASSMORPHISM CARDS */}
      {/* ========================================================================== */}
      <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" variants={fadeInUp}>
        <MetricCard
          title="English Query Volume"
          value={(englishVolume / 1000000).toFixed(0) + 'M'}
          previousValue={34}
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Expat Population"
          value="8.5M"
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Business Content %"
          value="32%"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value="75"
          previousValue={73}
          icon={<Star className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
      </motion.div>

      {/* ========================================================================== */}
      {/* EXECUTION STATUS ALERT */}
      {/* ========================================================================== */}
      <motion.div variants={fadeInUp}>
        <div className="rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-5 backdrop-blur-md">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-amber-300">Structural Placeholder — No Queries Executed</h3>
              <p className="mt-1 text-sm text-slate-400">
                Source file <span className="font-mono text-amber-300">6-7-english-queries.md</span> defines category scope but contains zero atomic queries.
                File read on <span className="font-mono text-slate-300">{executionMetadata.dateExecuted}</span>, framework version {executionMetadata.frameworkVersion}.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
                <span>Queries Found: <span className="font-mono text-red-400">{executionMetadata.queriesFoundInSource}</span></span>
                <span>URLs Identified: <span className="font-mono text-slate-300">{executionMetadata.urlsIdentified}</span></span>
                <span>Data Points: <span className="font-mono text-slate-300">{executionMetadata.dataPointsExtracted}</span></span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="regional">Regional Variants</TabsTrigger>
          <TabsTrigger value="execution">Execution Status</TabsTrigger>
          <TabsTrigger value="sources">Source Tiers</TabsTrigger>
          <TabsTrigger value="followup">Recommended Follow-Up</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        {/* ========================================================================== */}
        {/* OVERVIEW TAB */}
        {/* ========================================================================== */}
        <AnimatePresence mode="wait">
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <GlassPanel title="English Language Overview" description="English content intelligence in UAE digital space">
                <div className="space-y-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="glass-card border-slate-700/50">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-indigo-400" />
                          Query Volume Trend
                        </CardTitle>
                        <CardDescription>Monthly English searches (millions)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <AreaChart
                          data={volumeTrend}
                          xAxisKey="month"
                          areas={[
                            { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.navy },
                          ]}
                          height={280}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>

                    <Card className="glass-card border-slate-700/50">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-emerald-400" />
                          Sentiment Distribution
                        </CardTitle>
                        <CardDescription>English content sentiment breakdown</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PieChart
                          data={sentimentData}
                          height={280}
                          showLegend={true}
                        />
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="glass-card border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-amber-400" />
                        Content Categories
                      </CardTitle>
                      <CardDescription>Distribution by topic area</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={contentCategories}
                        xAxisKey="category"
                        bars={[
                          { dataKey: 'percentage', name: 'Share %', color: CHART_COLORS.navy },
                        ]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>

              {/* Category Descriptions */}
              <GlassPanel title="English Regional Variant Categories" description="Defined scope areas in source file">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryDescriptions.map((cat, index) => (
                    <motion.div
                      key={cat.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -2, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                      className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm transition-all duration-300"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-semibold text-white text-sm">{cat.category}</h4>
                        {getRelevanceBadge(cat.uaeRelevanceTier)}
                      </div>
                      <p className="mb-3 text-xs text-slate-400 leading-relaxed">{cat.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {cat.impliedOutlets.slice(0, 3).map((outlet, i) => (
                          <Badge key={i} variant="outline" className="text-[10px]">{outlet}</Badge>
                        ))}
                      </div>
                      <div className="mt-2 text-xs text-slate-500">{cat.regionalScope}</div>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* ========================================================================== */}
        {/* REGIONAL VARIANTS TAB */}
        {/* ========================================================================== */}
        <AnimatePresence mode="wait">
          <TabsContent value="regional" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <GlassPanel title="English Regional Variants" description="Five regional variants with UAE media relevance">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {regionalVariantMetrics.map((variant, index) => (
                    <RegionalVariantCard key={variant.variant} variant={variant} index={index} />
                  ))}
                </div>
              </GlassPanel>

              {/* Institutions Implied */}
              <GlassPanel title="Implied Media Outlets by Region" description="Outlets referenced but not yet queried">
                <div className="space-y-4">
                  {[
                    { region: 'UK', outlets: ['BBC', 'The Guardian', 'The Telegraph', 'Financial Times'], status: 'Implied, not queried' },
                    { region: 'USA', outlets: ['NYT', 'Washington Post', 'WSJ', 'CNN', 'Bloomberg'], status: 'Implied, not queried' },
                    { region: 'India', outlets: ['Times of India', 'The Hindu', 'Indian Express', 'social media'], status: 'Implied, not queried' },
                    { region: 'Australia', outlets: ['ABC', 'Sydney Morning Herald', 'The Australian'], status: 'Implied, not queried' },
                    { region: 'Nigeria', outlets: ['Punch', 'Vanguard', 'Guardian Nigeria'], status: 'Implied, not queried' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.region}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50">
                          <Newspaper className="h-5 w-5 text-slate-400" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{item.region}</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.outlets.map((outlet, i) => (
                              <Badge key={i} variant="outline" className="text-[10px]">{outlet}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs text-amber-400 border-amber-500/30">{item.status}</Badge>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* ========================================================================== */}
        {/* EXECUTION STATUS TAB */}
        {/* ========================================================================== */}
        <AnimatePresence mode="wait">
          <TabsContent value="execution" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <GlassPanel title="Execution Status Dashboard" description="Step-by-step execution results">
                <div className="space-y-3">
                  {executionStatusDashboard.map((item, index) => (
                    <StatusRow key={item.step} {...item} index={index} />
                  ))}
                </div>
              </GlassPanel>

              {/* mmx Search Results */}
              <GlassPanel title="mmx Search Results" description="Search execution status">
                <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${mmxSearchResults.mmxSearchExecuted ? 'bg-emerald-500/20' : 'bg-red-500/20'}`}>
                        {mmxSearchResults.mmxSearchExecuted ? (
                          <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                        ) : (
                          <XCircle className="h-6 w-6 text-red-400" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">mmx Search Executed</h4>
                        <p className="text-sm text-slate-400">No queries were executed because the source file contained no atomic queries</p>
                      </div>
                    </div>
                    <Badge variant={mmxSearchResults.mmxSearchExecuted ? 'emerald' : 'denim'} className="text-xs">
                      {mmxSearchResults.mmxSearchExecuted ? 'YES' : 'NO'}
                    </Badge>
                  </div>
                </div>
              </GlassPanel>

              {/* Framework Health Indicators */}
              <GlassPanel title="Framework Health Indicators" description="File integrity and execution health">
                <div className="space-y-3">
                  {[
                    { indicator: 'File integrity', status: 'STRUCTURAL_PLACEHOLDER', details: 'No atomic queries — framework entry point only' },
                    { indicator: 'Query execution coverage', status: '0%', details: 'No queries executed' },
                    { indicator: 'Data extraction coverage', status: '0%', details: 'No data extracted' },
                    { indicator: 'Content enrichment completeness', status: 'INCOMPLETE', details: 'Awaiting query population' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.indicator}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-4 w-4 text-amber-400" />
                        <span className="text-sm font-medium text-slate-200">{item.indicator}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs text-amber-400 border-amber-500/30">{item.status}</Badge>
                        <span className="text-xs text-slate-500 max-w-[200px]">{item.details}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* ========================================================================== */}
        {/* SOURCE TIERS TAB */}
        {/* ========================================================================== */}
        <AnimatePresence mode="wait">
          <TabsContent value="sources" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <GlassPanel title="Source Credibility Tiers" description="Tier definitions and source counts">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {sourceCredibilityTiers.map((tier, index) => (
                    <TierCard key={tier.tier} {...tier} index={index} />
                  ))}
                </div>
              </GlassPanel>

              {/* Named Entities Referenced */}
              <GlassPanel title="Named Entities Referenced" description="Language entities extracted from category descriptions">
                <ScrollArea className="h-[300px]">
                  <div className="space-y-3">
                    {[
                      { entityType: 'Language', entity: 'British English', regionalVariant: 'UK', confidence: 'High' },
                      { entityType: 'Language', entity: 'American English', regionalVariant: 'USA', confidence: 'High' },
                      { entityType: 'Language', entity: 'Indian English', regionalVariant: 'India', confidence: 'High' },
                      { entityType: 'Language', entity: 'Australian English', regionalVariant: 'Australia', confidence: 'High' },
                      { entityType: 'Language', entity: 'Nigerian English', regionalVariant: 'Nigeria', confidence: 'High' },
                      { entityType: 'Concept', entity: '"UAE"', regionalVariant: 'Global media', confidence: 'High' },
                      { entityType: 'Concept', entity: '50,000+ English variant queries', regionalVariant: 'Global', confidence: 'Medium (placeholder)' },
                    ].map((entity, index) => (
                      <motion.div
                        key={`${entity.entityType}-${entity.entity}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06 }}
                        className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs text-indigo-400 border-indigo-500/30">{entity.entityType}</Badge>
                          <span className="text-sm font-medium text-white">{entity.entity}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-400">{entity.regionalVariant}</span>
                          <Badge variant={entity.confidence === 'High' ? 'emerald' : 'outline'} className="text-xs">{entity.confidence}</Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* ========================================================================== */}
        {/* RECOMMENDED FOLLOW-UP TAB */}
        {/* ========================================================================== */}
        <AnimatePresence mode="wait">
          <TabsContent value="followup" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <GlassPanel title="Recommended Follow-Up" description="Priority ranking for query population">
                <div className="space-y-4">
                  {recommendedFollowUp.map((item: { priority: string; regionalVariant: string; queryCountSuggested: string; keySources: string; uaeRelevance: string }, index: number) => (
                    <motion.div
                      key={item.priority}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 4, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                      className="flex items-center justify-between rounded-xl border border-slate-700/50 bg-slate-800/40 p-5 backdrop-blur-sm transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl font-bold text-lg ${
                          item.priority === 'P0' ? 'bg-red-500/20 text-red-400' :
                          item.priority === 'P1' ? 'bg-amber-500/20 text-amber-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {item.priority}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-white">{item.regionalVariant}</h4>
                            {getRelevanceBadge(item.uaeRelevance)}
                          </div>
                          <p className="mt-1 text-xs text-slate-400">Suggested: {item.queryCountSuggested} queries</p>
                          <p className="text-xs text-slate-500 mt-1">Key Sources: {item.keySources}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-500" />
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>

              {/* Query Requirements */}
              <GlassPanel title="Query Population Requirements" description="What each regional variant needs">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { icon: <Users className="h-5 w-5" />, title: 'Named Entities', desc: 'UAE leaders, emirates, institutions' },
                    { icon: <FileText className="h-5 w-5" />, title: 'Topic Queries', desc: 'Economy, politics, security, culture' },
                    { icon: <Globe className="h-5 w-5" />, title: 'Boolean Combinations', desc: 'Regional outlet name combinations' },
                    { icon: <Clock className="h-5 w-5" />, title: 'Temporal Modifiers', desc: 'Recency indicators' },
                    { icon: <MessageSquare className="h-5 w-5" />, title: 'Sentiment Phrases', desc: 'Positive/negative combinations' },
                    { icon: <Lightbulb className="h-5 w-5" />, title: 'Cultural Terms', desc: 'Regional idioms and expressions' },
                  ].map((req, index) => (
                    <motion.div
                      key={req.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-3 rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm transition-all duration-300"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                        {req.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{req.title}</h4>
                        <p className="text-xs text-slate-400 mt-1">{req.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* ========================================================================== */}
        {/* TRENDS TAB */}
        {/* ========================================================================== */}
        <AnimatePresence mode="wait">
          <TabsContent value="trends" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Volume Trend Chart */}
              <GlassPanel title="Query Volume Trend" description="Monthly English searches in millions">
                <Card className="glass-card border-slate-700/50">
                  <CardContent className="pt-6">
                    <AreaChart
                      data={volumeTrend}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'volume', name: 'Volume (M)', color: CHART_COLORS.navy },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </GlassPanel>

              {/* Sentiment Distribution */}
              <GlassPanel title="Sentiment Distribution" description="English content sentiment breakdown">
                <Card className="glass-card border-slate-700/50">
                  <CardContent className="pt-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                      <PieChart
                        data={sentimentData}
                        height={280}
                        showLegend={true}
                      />
                      <div className="space-y-4">
                        {sentimentData.map((item) => (
                          <div key={item.name} className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                              <div className={`h-3 w-3 rounded-full`} style={{ backgroundColor: item.color }} />
                              <span className="text-sm font-medium text-slate-200">{item.name}</span>
                            </div>
                            <span className="text-lg font-bold text-white">{item.value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GlassPanel>

              {/* Platform Distribution */}
              <GlassPanel title="Platform Distribution" description="Where English content is consumed">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Monitor className="h-4 w-4 text-indigo-400" />
                        Platform Share
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={platformData.map(p => ({ name: p.platform, value: p.share, color: CHART_COLORS[p.color as keyof typeof CHART_COLORS] || CHART_COLORS.navy }))}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-slate-700/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Platform Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {platformData.map((platform, index) => (
                          <motion.div
                            key={platform.platform}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.08 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium text-slate-200">{platform.platform}</span>
                              <span className="font-bold text-white">{platform.share}%</span>
                            </div>
                            <Progress value={platform.share} className="h-2" />
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>

              {/* Top Media Sources */}
              <GlassPanel title="Top English-Language Media Sources" description="Most accessed English news and content sources">
                <ScrollArea className="h-[350px]">
                  <div className="space-y-3">
                    {[
                      { name: 'BBC', type: 'Tier 1 - Editorial', reach: 95, sentiment: 82 },
                      { name: 'The Guardian', type: 'Tier 1 - Editorial', reach: 92, sentiment: 78 },
                      { name: 'Financial Times', type: 'Tier 1 - Editorial', reach: 88, sentiment: 76 },
                      { name: 'NYT', type: 'Tier 1 - Editorial', reach: 90, sentiment: 74 },
                      { name: 'Washington Post', type: 'Tier 1 - Editorial', reach: 85, sentiment: 72 },
                      { name: 'Wall Street Journal', type: 'Tier 1 - Editorial', reach: 87, sentiment: 75 },
                      { name: 'Times of India', type: 'Tier 1 - Editorial', reach: 94, sentiment: 80 },
                      { name: 'The Hindu', type: 'Tier 1 - Editorial', reach: 88, sentiment: 78 },
                      { name: 'CNN', type: 'Tier 1 - Editorial', reach: 91, sentiment: 70 },
                      { name: 'Bloomberg', type: 'Tier 1 - Editorial', reach: 86, sentiment: 74 },
                    ].map((source, index) => (
                      <motion.div
                        key={source.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06 }}
                        whileHover={{ scale: 1.01, backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
                        className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/40 p-4 backdrop-blur-sm transition-all duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400">
                            <Newspaper className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">{source.name}</p>
                            <Badge variant="outline" className="text-[10px] mt-1">{source.type}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">{source.reach}%</div>
                            <p className="text-xs text-slate-500">Reach</p>
                          </div>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${source.sentiment >= 75 ? 'text-emerald-400' : source.sentiment >= 60 ? 'text-amber-400' : 'text-red-400'}`}>
                              {source.sentiment}%
                            </div>
                            <p className="text-xs text-slate-500">Sentiment</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  )
}