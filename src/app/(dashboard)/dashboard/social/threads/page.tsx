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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  Hash,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  MessageSquare,
  Share2,
  Clock,
  Flag,
  CheckCircle,
  XCircle,
  Eye,
  Lock,
  BarChart3,
  Target,
  Instagram,
  Calendar,
  ThumbsUp,
  UserPlus,
  DollarSign,
  Globe2,
  FlagOff,
  AlertOctagon,
  TrendingDown,
  Star,
  Crown,
  Building2,
  FileText,
  Search,
  Bell,
  Settings,
 Palette,
  Megaphone,
  Code,
  ShieldCheck,
  Smartphone,
  Heart,
  Reply,
  Repeat2,
  Bookmark,
  HashIcon,
  Languages,
  Ticket,
  MapPin,
  CalendarCheck,
  Image,
  Video,
  FileQuestion,
  EyeOff,
  Timer,
  ExternalLink,
  Sparkles,
  Bot,
  Wifi,
  Gauge,
  ChevronRight,
  Users2,
  Activity,
  Binary,
} from 'lucide-react'
import { useThreadsIntelligenceData } from '@/lib/data-loader'
import { threadsData } from '@/lib/data/social/threads-data'

// Section components
import { OverviewSection } from '@/components/dashboard/social/threads/overview-section'
import { UAESection } from '@/components/dashboard/social/threads/uae-section'
import { InfluencerSection } from '@/components/dashboard/social/threads/influencer-section'
import { ContentSection } from '@/components/dashboard/social/threads/content-section'
import { TechnicalSection } from '@/components/dashboard/social/threads/technical-section'
import { TrendsSection } from '@/components/dashboard/social/threads/trends-section'
import { SourcesSection } from '@/components/dashboard/social/threads/sources-section'

// ============================================================================
// DATA FROM THREADSDATA - All extracted from MD file 5-9
// ============================================================================

// Extended data from MD file
const platformOverview = threadsData.platformOverview
const uaeStatistics = threadsData.uaeStatistics
const competitivePosition = threadsData.competitiveSummary
const keyFindings = threadsData.identifiedDataGaps.map((gap, i) => ({
  finding: gap.gap,
  metric: gap.impact,
  source: gap.recommendation,
  alert: gap.impact === 'High' ? 'YELLOW' as const : 'GREEN' as const,
}))

// Threads specific metrics for MetricCards
const uaeThreadsStats = [
  { label: 'Threads Users', value: '893K', icon: Users, color: CHART_COLORS.info, trend: 'up' as const },
  { label: 'Penetration', value: '7.8%', icon: Globe, color: CHART_COLORS.gold },
  { label: 'Engagement Rate', value: '6.25%', icon: ThumbsUp, color: CHART_COLORS.emerald, trend: 'up' as const },
  { label: 'vs X (UAE)', value: '3.2x behind', icon: BarChart3, color: CHART_COLORS.rose },
  { label: 'Gov Accounts', value: '0', icon: FlagOff, color: CHART_COLORS.orange, status: 'warning' as const },
  { label: 'Influencers', value: '50K', icon: Crown, color: CHART_COLORS.gold },
]

// MAU Growth data for AreaChart
const mauGrowthData = threadsData.mauGrowth.map(item => ({
  quarter: item.quarter,
  mau: item.mau,
  label: item.label || item.growth || '',
}))

// DAU Growth data
const dauGrowthData = threadsData.dauGrowth.map(item => ({
  date: item.date,
  dau: item.dau,
  source: item.source,
}))

// Age distribution for PieChart
const ageDistributionData = threadsData.ageDistribution.map(item => ({
  name: item.ageGroup,
  value: item.percentage,
}))

// Gender distribution
const genderDistributionData = [
  { name: 'Male', value: 57.85, color: CHART_COLORS.info },
  { name: 'Female', value: 42.15, color: CHART_COLORS.rose },
]

// Geographic distribution
const geographicData = threadsData.geographicDistribution.slice(0, 6).map(item => ({
  country: item.country,
  percent: item.percentOfGlobal || 0,
  users: item.mobileUsage,
}))

// Platform overlap
const platformOverlapData = threadsData.platformOverlap.map(item => ({
  platform: item.platform,
  percent: item.percentage,
}))

// Usage habits
const usageHabitsData = threadsData.usageHabits.map(item => ({
  metric: item.metric,
  value: item.value,
}))

// Top accounts
const topAccountsData = threadsData.topAccounts.map(item => ({
  account: item.account,
  followers: item.followers,
  rank: item.rank,
}))

// Content performance
const contentPerformanceData = threadsData.contentPerformance.map(item => ({
  type: item.contentType,
  performance: item.contentType === 'Pictures' ? 100 : item.contentType === 'Videos' ? 99.4 : item.contentType === 'Text-only posts' ? 40 : 63,
  description: item.advantage,
}))

// Optimal posting times
const optimalPostingData = threadsData.optimalPostingTimes.map(item => ({
  day: item.day,
  time: item.time,
  engagement: item.engagement,
}))

// Engagement drivers
const engagementDriversData = threadsData.engagementDrivers.map(item => ({
  strategy: item.strategy,
  impact: item.impact,
  source: item.source,
}))

// UAE Content strategy
const uaeContentStrategyData = threadsData.uaeContentStrategy.map(item => ({
  strategy: item.strategy,
  details: item.details,
  expectedImpact: item.expectedImpact,
}))

// Sentiment by context
const sentimentByContextData = threadsData.sentimentByContext.map(item => ({
  context: item.context,
  sentiment: item.sentiment,
  notes: item.notes,
}))

// Hashtag data
const hashtagData = threadsData.hashtagStats.map(tag => ({
  name: tag.hashtag,
  total: tag.totalThreads,
  recent: tag.recentThreads,
}))

// UAE Platform comparison
const uaePlatformComparison = threadsData.uaePlatformBreakdown.map(p => ({
  platform: p.platform,
  users: p.users,
  reach: `${p.reachPercent}%`,
  growth: p.yoyChange,
}))

// Influencer stats
const influencerStatsData = threadsData.influencerStats.map(stat => ({
  metric: stat.metric,
  value: stat.value,
  source: stat.source,
}))

// Regulatory context
const regulatoryData = threadsData.regulatoryContext.map(reg => ({
  regulation: reg.regulation,
  details: reg.details,
  penalty: reg.penalty || 'N/A',
}))

// Notable UAE accounts
const notableAccountsData = threadsData.notableUAAccounts.map(acc => ({
  handle: acc.handle,
  followers: acc.followers,
  threads: acc.threads,
  description: acc.description,
  sentiment: acc.sentiment,
}))

// Content issues
const contentIssuesData = threadsData.influencerContentIssues.map(issue => ({
  issue: issue.issue,
  details: issue.details,
}))

// API Features
const apiFeaturesData = threadsData.apiCapabilities.map(cat => ({
  category: cat.category,
  features: cat.features,
}))

// API Timeline
const apiTimelineData = threadsData.apiTimeline.map(item => ({
  date: item.date,
  feature: item.feature,
  details: item.details,
  status: item.status,
}))

// Trends 2026
const trends2026Data = threadsData.uaeSocialMediaTrends.map(trend => ({
  trend: trend.trend,
  description: trend.description,
  impact: trend.impact,
}))

// Content format trends
const contentFormatTrendsData = threadsData.contentFormatTrends.map(item => ({
  format: item.format,
  trend: item.trend,
  recommendation: item.recommendation,
}))

// Revenue stats
const revenueStatsData = threadsData.revenueStats.map(stat => ({
  metric: stat.metric,
  value: typeof stat.value === 'number' ? stat.value : parseFloat(String(stat.value).replace(/[^0-9.]/g, '')),
  display: stat.value,
}))

// Engagement decline
const engagementDeclineData = threadsData.engagementDecline.map(item => ({
  platform: item.platform,
  change: item.change,
}))

// Platform features (grouped by category)
const platformFeaturesByCategory = threadsData.platformFeatures.reduce((acc, feature) => {
  if (!acc[feature.category]) acc[feature.category] = []
  acc[feature.category].push(feature)
  return acc
}, {} as Record<string, typeof threadsData.platformFeatures>)

// Privacy data
const privacyData = threadsData.privacyData.map(p => ({
  type: p.dataType,
  collected: p.collected,
  details: p.details || '',
}))

// Launch records
const launchRecordsData = threadsData.launchRecords.map(record => ({
  milestone: record.milestone,
  achievement: record.achievement,
  timeframe: record.timeframe,
  significance: record.significance || '',
}))

// Sentiment characteristics
const sentimentCharacteristicsData = threadsData.sentimentCharacteristics.map(item => ({
  characteristic: item.characteristic,
  description: item.description,
}))

// Source credibility
const sourceCredibilityData = threadsData.sourceCredibility.map(src => ({
  source: src.source,
  type: src.type,
  credibility: src.credibility,
  uaeRelevance: src.uaeRelevance,
}))

// Monitoring recommendations
const monitoringRecsData = threadsData.monitoringRecommendations.map(rec => ({
  metric: rec.metric,
  frequency: rec.frequency,
  source: rec.source,
}))

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function ThreadsLandscapePage() {
  const { data } = useThreadsIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-500-400">Loading Threads data...</div>
      </div>
    )
  }

  // Sentiment data for pie chart (from threadsData)
  const sentimentData = [
    { name: 'Positive', value: 35, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 40, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 25, color: CHART_COLORS.rose },
  ]

  // Engagement data (from threadsData)
  const engagementData = [
    { name: 'Likes', value: 65, color: CHART_COLORS.rose },
    { name: 'Replies', value: 18, color: CHART_COLORS.info },
    { name: 'Reposts', value: 12, color: CHART_COLORS.gold },
  ]

  // Government accounts from threadsData
  const governmentAccounts = [
    { handle: '@visit.dubai', followers: 556400, type: 'Tourism', verified: true },
    { handle: '@dubai.travelers', followers: 0, type: 'Travel', verified: false },
    { handle: '@dubaiconfidential', followers: 6400, type: 'Content', verified: false },
  ]

  // Key narratives from threadsData
  const keyNarratives = threadsData.sentimentByContext.slice(0, 6).map((item, idx) => ({
    topic: item.context,
    narrative: item.notes,
    sentiment: item.sentiment.toLowerCase().includes('positive') ? 'positive' : item.sentiment.toLowerCase().includes('negative') ? 'negative' : 'neutral',
    prevalence: item.sentiment.includes('Strongly') ? 85 : item.sentiment.includes('Mixed') ? 55 : 65,
    sources: ['DataReportal', 'Buffer', 'Labeeb.ae'],
  }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="default" className="mb-2">PLATFORM ANALYSIS</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum-500">Threads Intelligence</h1>
          <p className="mt-2 text-platinum-500-400">
            Meta's text-based platform: 893K UAE users, NO official government accounts, highest engagement rate (6.25%)
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum-500 hover:bg-platinum/10">
            <Instagram className="h-4 w-4" />
            View Profile
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Analyze Trends
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6"
      >
        {uaeThreadsStats.map((stat, idx) => (
          <MetricCard
            key={idx}
            title={stat.label}
            value={stat.value}
            icon={<stat.icon className="h-5 w-5" />}
            gradient={stat.color === CHART_COLORS.rose ? 'rose' : stat.color === CHART_COLORS.emerald ? 'emerald' : 'denim'}
            status={stat.status}
            trend={stat.trend}
          />
        ))}
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="uae">UAE Position</TabsTrigger>
          <TabsTrigger value="influencers">Influencer Ecosystem</TabsTrigger>
          <TabsTrigger value="content">Content Strategy</TabsTrigger>
          <TabsTrigger value="technical">API & Features</TabsTrigger>
          <TabsTrigger value="trends">2026 Trends</TabsTrigger>
          <TabsTrigger value="sources">Sources & Data</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <OverviewSection
            platformOverview={threadsData.platformOverview}
            mauGrowth={threadsData.mauGrowth}
            launchRecords={threadsData.launchRecords}
            ageDistribution={threadsData.ageDistribution}
            genderDistribution={threadsData.genderDistribution}
            geographicDistribution={threadsData.geographicDistribution}
            platformOverlap={threadsData.platformOverlap}
            topAccounts={threadsData.topAccounts}
            usageHabits={threadsData.usageHabits}
            platformFeatures={threadsData.platformFeatures}
            hashtagStats={threadsData.hashtagStats}
            privacyData={threadsData.privacyData}
          />

        </TabsContent>

        {/* UAE Position Tab */}
        <TabsContent value="uae" className="space-y-6">
          <GlassPanel title="UAE Competitive Position" description="Threads vs other platforms in UAE market">
            <div className="space-y-6">
              {/* Critical Finding */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertOctagon className="h-5 w-5" />
                    Critical Finding: No Government Threads Accounts
                  </CardTitle>
                  <CardDescription>UAE government entities NOT required to have Threads presence</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                    <p className="text-sm text-platinum-500-300">
                      NO official UAE government Threads accounts identified. The Digital Government Indicators framework
                      does NOT yet include Threads as a required platform. X (Twitter) remains the primary platform
                      for UAE government communications (2.85M users, declining 6%).
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* UAE Population Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Population & Connectivity</CardTitle>
                  <CardDescription>11.4M population, 99% internet penetration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg bg-info/10 p-4 border border-info/30">
                      <div className="text-2xl font-bold text-info">11.4M</div>
                      <div className="text-sm text-platinum-500-400">Total Population</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                      <div className="text-2xl font-bold text-emerald-400">99%</div>
                      <div className="text-sm text-platinum-500-400">Internet Penetration</div>
                    </div>
                    <div className="rounded-lg bg-gold-700/10 p-4 border border-gold-700/30">
                      <div className="text-2xl font-bold text-gold-700">614 Mbps</div>
                      <div className="text-sm text-platinum-500-400">Median Mobile Speed</div>
                    </div>
                    <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                      <div className="text-2xl font-bold text-rose-400">31.6 yrs</div>
                      <div className="text-sm text-platinum-500-400">Median Age</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UAE Social Media Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Social Media Platform Breakdown</CardTitle>
                  <CardDescription>Platform user base and growth rates - Threads at 7.8% penetration</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={uaePlatformComparison}
                    xAxisKey="platform"
                    bars={[{ dataKey: 'reach', name: 'Reach %', color: CHART_COLORS.info }]}
                    height={320}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Threads vs X Competitive Analysis */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Threads vs X Competitive Analysis</CardTitle>
                  <CardDescription>Engagement and market position</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg bg-platinum-800/50 p-4">
                      <div className="text-sm text-platinum-500-400 mb-2">Daily Mobile Users</div>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-emerald-400">141.5M</span>
                        <span className="text-sm text-platinum-500-400">Threads</span>
                      </div>
                      <div className="flex items-end gap-2 mt-1">
                        <span className="text-2xl font-bold text-platinum-500-400">125M</span>
                        <span className="text-sm text-platinum-500-400">X</span>
                      </div>
                      <div className="mt-2 text-xs text-emerald-400">Threads +13.2% advantage</div>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4">
                      <div className="text-sm text-platinum-500-400 mb-2">Engagement Rate</div>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-emerald-400">6.25%</span>
                        <span className="text-sm text-platinum-500-400">Threads</span>
                      </div>
                      <div className="flex items-end gap-2 mt-1">
                        <span className="text-2xl font-bold text-platinum-500-400">3.6%</span>
                        <span className="text-sm text-platinum-500-400">X</span>
                      </div>
                      <div className="mt-2 text-xs text-emerald-400">Threads +73.6% higher</div>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4">
                      <div className="text-sm text-platinum-500-400 mb-2">UAE Users</div>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-rose-400">893K</span>
                        <span className="text-sm text-platinum-500-400">Threads (7.8%)</span>
                      </div>
                      <div className="flex items-end gap-2 mt-1">
                        <span className="text-2xl font-bold text-emerald-400">2.85M</span>
                        <span className="text-sm text-platinum-500-400">X (25%)</span>
                      </div>
                      <div className="mt-2 text-xs text-rose-400">X still dominant in UAE</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment Analysis */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Analysis (UAE Context)</CardTitle>
                  <CardDescription>Overall sentiment breakdown by context</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <PieChart
                      data={sentimentData}
                      height={200}
                      showLegend={true}
                    />
                    <div className="space-y-3">
                      {sentimentByContextData.slice(0, 5).map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 rounded-lg bg-platinum-800/50 p-3"
                        >
                          <div className={`flex h-2 w-2 rounded-full ${
                            item.sentiment.includes('Positive') ? 'bg-emerald-400' :
                            item.sentiment.includes('Negative') ? 'bg-rose-400' :
                            'bg-platinum-400'
                          }`} />
                          <span className="text-sm text-platinum-500-200 flex-1">{item.context}</span>
                          <Badge variant={item.sentiment.includes('Positive') ? 'default' : item.sentiment.includes('Negative') ? 'destructive' : 'outline'} className="text-xs">
                            {item.sentiment}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Revenue & Ad Stats */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Revenue & Ad Statistics</CardTitle>
                  <CardDescription>Platform monetization metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg bg-gold-700/10 p-4 border border-gold-700/30">
                      <div className="text-sm text-platinum-500-400 mb-1">CPM</div>
                      <div className="text-xl font-bold text-gold-700">$5-$10</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                      <div className="text-sm text-platinum-500-400 mb-1">2025 Revenue</div>
                      <div className="text-xl font-bold text-emerald-400">$8B</div>
                    </div>
                    <div className="rounded-lg bg-info/10 p-4 border border-info/30">
                      <div className="text-sm text-platinum-500-400 mb-1">2026 Revenue</div>
                      <div className="text-xl font-bold text-info">$11.3B</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Influencer Ecosystem Tab */}
        <TabsContent value="influencers" className="space-y-6">
          <GlassPanel title="Dubai Influencer Ecosystem" description="50,000 influencers, Golden Visas, $97M market">
            <div className="space-y-6">
              {/* Key Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Statistics</CardTitle>
                  <CardDescription>Dubai influencer landscape</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-gold-700/10 p-4 border border-gold-700/30">
                      <div className="text-3xl font-bold text-gold-700">50K</div>
                      <div className="text-sm text-platinum-500-400">Influencers in Dubai</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                      <div className="text-3xl font-bold text-emerald-400">$97M</div>
                      <div className="text-sm text-platinum-500-400">Market forecast by 2030</div>
                    </div>
                    <div className="rounded-lg bg-info/10 p-4 border border-info/30">
                      <div className="text-3xl font-bold text-info">+20%</div>
                      <div className="text-sm text-platinum-500-400">Bilingual engagement boost</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Regulatory Requirements */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Regulatory Requirements</CardTitle>
                  <CardDescription>Licensing and compliance for influencers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {regulatoryData.map((reg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                      >
                        <div>
                          <p className="font-medium text-platinum-500-200">{reg.regulation}</p>
                          <p className="text-sm text-platinum-500-400">{reg.details}</p>
                        </div>
                        <Badge variant={reg.penalty.includes('imprisonment') ? 'destructive' : 'default'}>
                          {reg.penalty}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Government Accounts on Threads */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Government Accounts on Threads</CardTitle>
                  <CardDescription>Official UAE presence (NONE identified)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30 mb-4">
                    <p className="text-sm text-platinum-500-300">
                      <AlertOctagon className="inline h-4 w-4 mr-2 text-rose-400" />
                      NO official UAE government Threads accounts identified. All government entities
                      use X (Twitter), Facebook, Instagram, and YouTube - but NOT Threads.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {governmentAccounts?.map((account, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                        <div className="flex items-center gap-3">
                          {account.verified ? (
                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                          ) : (
                            <XCircle className="h-4 w-4 text-platinum-500-500" />
                          )}
                          <span className="text-sm font-medium text-platinum-500-200">{account.handle}</span>
                          <Badge variant="outline" className="text-xs">{account.type}</Badge>
                        </div>
                        {account.followers > 0 && (
                          <span className="text-sm text-gold-700">{account.followers.toLocaleString()}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* March 2026 Incident */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">March 2026 Incident: Coordinated Messaging</CardTitle>
                  <CardDescription>Influencer concerns during regional tensions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-amber-500/10 p-4 border border-amber-500/30">
                    <h4 className="font-semibold text-amber-400 mb-2">Critical Finding</h4>
                    <ul className="space-y-2 text-sm text-platinum-500-300">
                      {contentIssuesData.map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-amber-300">{issue.issue}: </span>
                            {issue.details}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Notable UAE Accounts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Notable UAE-Based Threads Accounts</CardTitle>
                  <CardDescription>Key influencers and content creators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notableAccountsData.map((account, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-platinum-500-200">{account.handle}</p>
                          <p className="text-xs text-platinum-500-400 mt-1">{account.description}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={account.sentiment.includes('Positive') ? 'default' : account.sentiment.includes('Negative') ? 'destructive' : 'outline'} className="text-xs">
                            {account.sentiment}
                          </Badge>
                          {account.followers && (
                            <p className="text-xs text-gold-700 mt-1">{account.followers.toLocaleString()} followers</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Visit Dubai Account */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Visit Dubai Official Account</CardTitle>
                  <CardDescription>Leading tourism account on Threads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg bg-gold-700/10 p-4 border border-gold-700/30 text-center">
                      <div className="text-2xl font-bold text-gold-700">556K</div>
                      <div className="text-sm text-platinum-500-400">Followers</div>
                    </div>
                    <div className="rounded-lg bg-info/10 p-4 border border-info/30 text-center">
                      <div className="text-2xl font-bold text-info">471</div>
                      <div className="text-sm text-platinum-500-400">Threads</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30 text-center">
                      <CheckCircle className="h-6 w-6 text-emerald-400 mx-auto" />
                      <div className="text-sm text-platinum-500-400 mt-1">Verified</div>
                    </div>
                    <div className="rounded-lg bg-platinum/10 p-4 border border-platinum/30 text-center">
                      <div className="text-2xl font-bold text-platinum-500">56M</div>
                      <div className="text-sm text-platinum-500-400">#visitdubai threads</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Content Strategy Tab */}
        <TabsContent value="content" className="space-y-6">
          <GlassPanel title="Content Strategy Insights" description="Optimal posting times and content formats">
            <div className="space-y-6">
              {/* Content Format Performance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Format Performance</CardTitle>
                  <CardDescription>Pictures outperform all other formats</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={contentPerformanceData}
                    xAxisKey="type"
                    bars={[{ dataKey: 'performance', name: 'Performance %', color: CHART_COLORS.rose }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Optimal Posting Times */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Optimal Posting Times</CardTitle>
                  <CardDescription>Best times and days for engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {optimalPostingData.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-gold-700" />
                          <span className="font-medium text-platinum-500-200">{item.day}</span>
                          <span className="text-sm text-platinum-500-400">at {item.time}</span>
                        </div>
                        <Badge variant={item.engagement === 'Highest' ? 'default' : 'outline'}>
                          {item.engagement}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Engagement Drivers */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Drivers</CardTitle>
                  <CardDescription>What drives engagement on Threads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {engagementDriversData.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg bg-platinum-800/50 p-4 cursor-pointer"
                      >
                        <p className="font-medium text-platinum-500-200">{item.strategy}</p>
                        <p className="text-sm text-emerald-400">{item.impact}</p>
                        <p className="text-xs text-platinum-500-500 mt-1">Source: {item.source}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE-Specific Strategy */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE-Specific Strategy</CardTitle>
                  <CardDescription>Content recommendations for UAE market</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {uaeContentStrategyData.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-platinum-500-200">{item.strategy}</p>
                            <p className="text-sm text-platinum-500-400 mt-1">{item.details}</p>
                          </div>
                          <Badge variant="default" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                            {item.expectedImpact}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Engagement Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Metrics</CardTitle>
                  <CardDescription>Average engagement per post in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={engagementData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Avg per Post', color: CHART_COLORS.info }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Usage Habits */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Usage Habits (Global)</CardTitle>
                  <CardDescription>How users engage with Threads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {usageHabitsData.map((habit, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                        <span className="text-sm text-platinum-500-300">{habit.metric}</span>
                        <span className="text-sm font-bold text-gold-700">{habit.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* API & Features Tab */}
        <TabsContent value="technical" className="space-y-6">
          <GlassPanel title="API & Technical Features" description="Threads API capabilities 2025-2026">
            <div className="space-y-6">
              {/* API Features by Category */}
              {apiFeaturesData.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                      <CardDescription>{category.features.length} features available</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.features.map((feature, fIdx) => (
                          <motion.div
                            key={fIdx}
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg bg-platinum-800/50 px-3 py-2"
                          >
                            <span className="text-sm text-platinum-500-200">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* API Availability Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">API Availability Timeline</CardTitle>
                  <CardDescription>Feature rollout history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {apiTimelineData.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            item.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gold-700/20 text-gold-700'
                          }`}>
                            {item.status === 'completed' ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                          </div>
                        </div>
                        <div className="flex-1">
                          <span className="text-xs text-gold-700">{item.date}</span>
                          <p className="font-medium text-platinum-500-200">{item.feature}</p>
                          <p className="text-xs text-platinum-500-500">{item.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Privacy & Data Collection */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Privacy & Data Collection</CardTitle>
                  <CardDescription>Data types collected by Threads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {privacyData.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-lg bg-platinum-800/50 p-3">
                        {item.collected ? (
                          <AlertCircle className="h-4 w-4 text-rose-400" />
                        ) : (
                          <ShieldCheck className="h-4 w-4 text-emerald-400" />
                        )}
                        <div className="flex-1">
                          <span className="text-sm text-platinum-500-200">{item.type}</span>
                          {item.details && <p className="text-xs text-platinum-500-500">{item.details}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* 2026 Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="2026 Emerging Trends" description="UAE social media and Threads trends">
            <div className="space-y-6">
              {/* UAE Social Media Trends */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Social Media Trends 2026</CardTitle>
                  <CardDescription>Key trends shaping the social media landscape</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {trends2026Data.map((trend, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg bg-platinum-800/50 p-4 cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-platinum-500-200">{trend.trend}</span>
                          <Badge variant={trend.impact === 'High' ? 'default' : 'outline'} className={trend.impact === 'High' ? 'bg-gold-700/20 text-gold-700' : ''}>
                            {trend.impact}
                          </Badge>
                        </div>
                        <p className="text-sm text-platinum-500-400">{trend.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Content Format Trends */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Format Trends</CardTitle>
                  <CardDescription>Recommendations by format type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {contentFormatTrendsData.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Image className="h-5 w-5 text-gold-700" />
                          <span className="font-medium text-platinum-500-200">{item.format}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-emerald-400">{item.trend}</div>
                          <div className="text-xs text-platinum-500-500">{item.recommendation}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Engagement Decline Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Engagement Decline (2024-2025)</CardTitle>
                  <CardDescription>Year-over-year engagement changes</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={engagementDeclineData.map(d => ({
                      platform: d.platform,
                      decline: parseInt(d.change.replace(/[^0-9-]/g, '')) * -1,
                    }))}
                    xAxisKey="platform"
                    bars={[{ dataKey: 'decline', name: 'Decline %', color: CHART_COLORS.rose }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources & Data Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Sources & Data Quality" description="Credibility assessment and references">
            <div className="space-y-6">
              {/* Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>Data source reliability assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {sourceCredibilityData.map((source, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                          <div className="flex items-center gap-3">
                            <Badge variant={source.credibility === 'High' || source.credibility === 'Very High' ? 'default' : 'outline'} className="text-xs">
                              {source.credibility}
                            </Badge>
                            <div>
                              <span className="text-sm text-platinum-500-200">{source.source}</span>
                              <p className="text-xs text-platinum-500-500">{source.type} - {source.uaeRelevance}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Monitoring Recommendations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Monitoring Recommendations</CardTitle>
                  <CardDescription>Data refresh frequencies and sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {monitoringRecsData.map((rec, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                        <span className="text-sm text-platinum-500-200">{rec.metric}</span>
                        <div className="flex items-center gap-4">
                          <Badge variant="outline" className="text-xs">{rec.frequency}</Badge>
                          <span className="text-xs text-platinum-500-500">{rec.source}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Data Gaps */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Identified Data Gaps</CardTitle>
                  <CardDescription>Areas requiring additional research</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {keyFindings.map((finding: any, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3"
                      >
                        {finding.alert === 'YELLOW' ? (
                          <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5" />
                        ) : finding.alert === 'RED' ? (
                          <AlertOctagon className="h-4 w-4 text-rose-400 mt-0.5" />
                        ) : (
                          <Lightbulb className="h-4 w-4 text-gold-700 mt-0.5" />
                        )}
                        <div>
                          <p className="text-sm text-platinum-500-200">{finding.finding}</p>
                          <p className="text-xs text-platinum-500-400">
                            Impact: {typeof finding.metric === 'number' ? finding.metric : finding.metric} | Recommendation: {finding.source}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Narratives */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Narratives</CardTitle>
                  <CardDescription>Dominant narratives on UAE Threads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {keyNarratives.map((narrative, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Card className="glass-card">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{narrative.topic}</CardTitle>
                              <Badge variant={
                                narrative.sentiment === 'positive' ? 'default' :
                                narrative.sentiment === 'negative' ? 'destructive' : 'outline'
                              }>
                                {narrative.sentiment}
                              </Badge>
                            </div>
                            <CardDescription>Prevalence: {narrative.prevalence}%</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-platinum-500-300 mb-4">{narrative.narrative}</p>
                            <Progress value={narrative.prevalence} className="h-2" />
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
