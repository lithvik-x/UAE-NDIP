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
} from 'lucide-react'
import { useThreadsIntelligenceData } from '@/lib/data-loader'

// Enhancement Cycle A: Platform Overview & Launch
const platformLaunchTimeline = [
  { date: 'July 3, 2023', event: 'Pre-orders available', status: 'completed' },
  { date: 'July 6, 2023', event: 'Official launch', status: 'completed' },
  { date: '5 days', event: '100M users reached (fastest in history)', status: 'completed' },
  { date: 'July 2025', event: 'Direct Messaging launched', status: 'completed' },
  { date: 'September 2025', event: 'Profile search without Instagram', status: 'completed' },
  { date: 'October 2025', event: 'Communities feature', status: 'completed' },
]

// Enhancement Cycle B: Content Strategy Insights
const contentStrategyData = [
  { type: 'Pictures', performance: 100, description: '+37% vs links, +60% vs text' },
  { type: 'Videos', performance: 99.4, description: 'Slightly lower than pictures' },
  { type: 'Text-only', performance: 40, description: 'Significantly lower engagement' },
  { type: 'Links', performance: 63, description: 'Lower than pictures' },
]

const optimalPostingData = [
  { day: 'Wednesday', time: '7 AM', engagement: 'Highest' },
  { day: 'Tuesday-Friday', time: '7-9 AM', engagement: 'Strong' },
  { day: 'Friday', time: '8 AM', engagement: 'High' },
  { day: 'Sunday', time: 'Any', engagement: 'Lowest' },
]

// Enhancement Cycle C: UAE Competitive Position
const uaePlatformComparison = [
  { platform: 'TikTok', users: '12.5M', reach: '110%', growth: '+16.7%' },
  { platform: 'LinkedIn', users: '10.0M', reach: '87.6%', growth: '+11.1%' },
  { platform: 'Facebook', users: '9.70M', reach: '85.0%', growth: '+7.2%' },
  { platform: 'YouTube', users: '8.37M', reach: '73.3%', growth: '+1.5%' },
  { platform: 'Instagram', users: '8.05M', reach: '70.5%', growth: '+16.7%' },
  { platform: 'X (Twitter)', users: '2.85M', reach: '25.0%', growth: '-6.0%' },
  { platform: 'Threads', users: '893K', reach: '7.8%', growth: 'N/A' },
]

// Enhancement Cycle D: Influencer Ecosystem
const influencerRequirements = [
  { requirement: 'License System', details: 'Introduced in 2026', status: 'active' },
  { requirement: 'Golden Visa', details: '10-year visa for content creators', status: 'available' },
  { requirement: 'Permit Requirement', details: 'Required to legally operate in Dubai', status: 'mandatory' },
  { requirement: 'VAT on Income', details: '5% on taxable income', status: 'active' },
  { requirement: 'Market Forecast', details: '$97M by 2030', status: 'projected' },
]

// Enhancement Cycle E: Sentiment & Concerns
const sentimentDrivers = [
  { driver: 'Tourism promotion', direction: 'Positive', impact: 'Strong #visitdubai presence' },
  { driver: 'Government messaging', direction: 'Neutral', impact: 'No Threads presence' },
  { driver: 'Influencer content', direction: 'Mixed', impact: 'Golden Visa concerns' },
  { driver: 'Regional tensions', direction: 'Negative', impact: 'Forced positive messaging' },
  { driver: 'Early adoption', direction: 'Positive', impact: 'Less competition, higher reach' },
  { driver: 'Bilingual content', direction: 'Positive', impact: '+20% engagement available' },
]

// Enhancement Cycle F: API & Technical Features
const apiFeatures = [
  { category: 'Publishing', features: ['Single thread posts', 'Carousel posts', 'Media handling', 'Ghost posts (24hr)', 'Text up to 10K chars', 'GIF support', 'Spoiler tags'] },
  { category: 'Management', features: ['Delete posts', 'Reply moderation', 'Reply approvals'] },
  { category: 'Discovery', features: ['Keyword search', 'Profile search', 'Public post retrieval', 'Date range search', 'Topic tags', 'Location tagging'] },
  { category: 'Analytics', features: ['Engagement metrics', 'Insights integration', 'Real-time webhooks'] },
]

export default function ThreadsLandscapePage() {
  const { data } = useThreadsIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Threads data...</div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts } = data

  // Extended data from MD file
  const platformOverview = (data as any).platformOverview
  const uaeStatistics = (data as any).uaeStatistics
  const competitivePosition = (data as any).competitivePosition
  const keyFindings = (data as any).keyFindings || []
  const sources = (data as any).sources || []

  // Threads specific metrics
  const uaeThreadsStats = [
    { label: 'Threads Users', value: '893K', icon: Users, color: CHART_COLORS.info, trend: 'up' as const },
    { label: 'Penetration', value: '7.8%', icon: Globe, color: CHART_COLORS.gold },
    { label: 'Engagement Rate', value: '6.25%', icon: ThumbsUp, color: CHART_COLORS.emerald, trend: 'up' as const },
    { label: 'vs X (UAE)', value: '3.2x behind', icon: BarChart3, color: CHART_COLORS.rose },
    { label: 'Gov Accounts', value: '0', icon: FlagOff, color: CHART_COLORS.orange, status: 'warning' as const },
    { label: 'Bot Activity', value: '18%', icon: Shield, color: CHART_COLORS.platinum },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: metrics.sentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics.sentiment.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.sentiment.negative, color: CHART_COLORS.rose },
  ]

  // Engagement data
  const engagementData = [
    { name: 'Likes', value: metrics.engagement.avgLikes, color: CHART_COLORS.rose },
    { name: 'Replies', value: metrics.engagement.avgReplies, color: CHART_COLORS.info },
    { name: 'Reposts', value: metrics.engagement.avgReposts, color: CHART_COLORS.gold },
  ]

  // Hashtag data
  const hashtagData = [
    { name: '#visitdubai', threads: 56000000, recent: 361000, color: CHART_COLORS.gold },
    { name: '#UAE', threads: 6900000, recent: 28000, color: CHART_COLORS.emerald },
  ]

  // Global growth data
  const growthData = [
    { quarter: 'Q3 2023', mau: 100, label: 'Launch' },
    { quarter: 'Q4 2023', mau: 130 },
    { quarter: 'Q1 2024', mau: 150 },
    { quarter: 'Q3 2024', mau: 200 },
    { quarter: 'Q4 2024', mau: 275 },
    { quarter: 'Q1 2025', mau: 305 },
    { quarter: 'Q2 2025', mau: 350 },
    { quarter: 'Q3 2025', mau: 400, label: 'Current' },
  ]

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
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum">Threads Landscape</h1>
          <p className="mt-2 text-slate-400">
            Meta's text-based platform: 893K UAE users, NO official government accounts, highest engagement rate (6.25%)
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
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
          <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
          <TabsTrigger value="technical">API & Features</TabsTrigger>
        </TabsList>

        {/* Overview Tab - Enhancement Cycle A */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Threads Platform Overview" description="Global platform metrics and launch trajectory">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Fundamentals</CardTitle>
                    <CardDescription>Launched July 6, 2023 by Meta</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Global MAU</span>
                        <span className="text-xl font-bold text-gold">400M</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Global DAU</span>
                        <span className="text-xl font-bold text-gold">141.5M</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Time to 100M users</span>
                        <span className="text-lg font-bold text-emerald-400">2 days (fastest)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Character Limit</span>
                        <span className="text-lg font-bold text-info">500 (10K long-form)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">Engagement Rate</span>
                        <span className="text-lg font-bold text-rose-400">6.25% (vs X 3.6%)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">User Demographics (Global)</CardTitle>
                    <CardDescription>Gender and age distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-300">Gender Split</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <div className="text-xs text-slate-400 mb-1">Male: 57.85%</div>
                            <Progress value={57.85} className="h-2" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-slate-400 mb-1">Female: 42.15%</div>
                            <Progress value={42.15} className="h-2" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-slate-400 mb-2">Age Distribution</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex justify-between"><span className="text-slate-300">18-24:</span><span className="text-gold">20.36%</span></div>
                          <div className="flex justify-between"><span className="text-slate-300">25-34:</span><span className="text-gold">28.75%</span></div>
                          <div className="flex justify-between"><span className="text-slate-300">35-44:</span><span className="text-gold">19.15%</span></div>
                          <div className="flex justify-between"><span className="text-slate-300">45+:</span><span className="text-gold">25.68%</span></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Global Growth Trajectory</CardTitle>
                  <CardDescription>Monthly Active Users (Millions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={growthData}
                    xAxisKey="quarter"
                    areas={[{ dataKey: 'mau', name: 'MAU (M)', color: CHART_COLORS.info }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Launch Timeline</CardTitle>
                  <CardDescription>Key platform milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {platformLaunchTimeline.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex flex-col items-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          {idx < platformLaunchTimeline.length - 1 && (
                            <div className="h-6 w-0.5 bg-slate-700" />
                          )}
                        </div>
                        <div className="flex-1 pb-2">
                          <span className="text-xs text-gold">{item.date}</span>
                          <p className="font-medium text-slate-200">{item.event}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trending Hashtags (UAE)</CardTitle>
                  <CardDescription>Activity on Threads platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hashtagData.map((tag, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Hash className="h-5 w-5 text-gold" />
                          <span className="font-medium text-slate-200">{tag.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gold">{(tag.threads / 1000000).toFixed(1)}M total</div>
                          <div className="text-xs text-slate-400">{(tag.recent / 1000).toFixed(0)}K recent</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* UAE Position Tab - Enhancement Cycle B */}
        <TabsContent value="uae" className="space-y-6">
          <GlassPanel title="UAE Competitive Position" description="Threads vs other platforms in UAE market">
            <div className="space-y-6">
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
                    <p className="text-sm text-slate-300">
                      NO official UAE government Threads accounts identified. The Digital Government Indicators framework
                      does NOT yet include Threads as a required platform. X (Twitter) remains the primary platform
                      for UAE government communications (2.85M users, declining 6%).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Social Media Comparison</CardTitle>
                  <CardDescription>Platform user base and growth rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={uaePlatformComparison}
                    xAxisKey="platform"
                    bars={[{ dataKey: 'users', name: 'Users (M)', color: CHART_COLORS.info }]}
                    height={320}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Threads vs X Competitive Analysis</CardTitle>
                  <CardDescription>Engagement and market position</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <div className="text-sm text-slate-400 mb-2">Daily Mobile Users</div>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-emerald-400">141.5M</span>
                        <span className="text-sm text-slate-400">Threads</span>
                      </div>
                      <div className="flex items-end gap-2 mt-1">
                        <span className="text-2xl font-bold text-slate-400">125M</span>
                        <span className="text-sm text-slate-400">X</span>
                      </div>
                      <div className="mt-2 text-xs text-emerald-400">Threads +13.2% advantage</div>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <div className="text-sm text-slate-400 mb-2">Engagement Rate</div>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-emerald-400">6.25%</span>
                        <span className="text-sm text-slate-400">Threads</span>
                      </div>
                      <div className="flex items-end gap-2 mt-1">
                        <span className="text-2xl font-bold text-slate-400">3.6%</span>
                        <span className="text-sm text-slate-400">X</span>
                      </div>
                      <div className="mt-2 text-xs text-emerald-400">Threads +73.6% higher</div>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <div className="text-sm text-slate-400 mb-2">UAE Users</div>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-rose-400">893K</span>
                        <span className="text-sm text-slate-400">Threads (7.8%)</span>
                      </div>
                      <div className="flex items-end gap-2 mt-1">
                        <span className="text-2xl font-bold text-emerald-400">2.85M</span>
                        <span className="text-sm text-slate-400">X (25%)</span>
                      </div>
                      <div className="mt-2 text-xs text-rose-400">X still dominant in UAE</div>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <div className="text-sm text-slate-400 mb-2">UAE Growth Trend</div>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-slate-400">-6%</span>
                        <span className="text-sm text-slate-400">X annual decline</span>
                      </div>
                      <div className="mt-4 text-xs text-gold">Opportunity: X users may migrate to Threads</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Analysis</CardTitle>
                  <CardDescription>Overall sentiment: {metrics.sentiment.overall}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <PieChart
                      data={sentimentData}
                      height={220}
                      showLegend={true}
                    />
                    <div className="space-y-3">
                      {metrics.sentiment.keyConcerns?.map((concern, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3"
                        >
                          <AlertTriangle className="h-4 w-4 text-yellow-400" />
                          <span className="text-sm text-slate-200">{concern}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Influencer Ecosystem Tab - Enhancement Cycle C */}
        <TabsContent value="influencers" className="space-y-6">
          <GlassPanel title="Dubai Influencer Ecosystem" description="50,000 influencers, Golden Visas, $97M market">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Statistics</CardTitle>
                  <CardDescription>Dubai influencer landscape</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-gold/10 p-4 border border-gold/30">
                      <div className="text-3xl font-bold text-gold">50K</div>
                      <div className="text-sm text-slate-400">Influencers in Dubai</div>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                      <div className="text-3xl font-bold text-emerald-400">$97M</div>
                      <div className="text-sm text-slate-400">Market forecast by 2030</div>
                    </div>
                    <div className="rounded-lg bg-info/10 p-4 border border-info/30">
                      <div className="text-3xl font-bold text-info">+20%</div>
                      <div className="text-sm text-slate-400">Bilingual engagement boost</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Regulatory Requirements</CardTitle>
                  <CardDescription>Licensing and compliance for influencers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {influencerRequirements.map((req, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                      >
                        <div>
                          <p className="font-medium text-slate-200">{req.requirement}</p>
                          <p className="text-sm text-slate-400">{req.details}</p>
                        </div>
                        <Badge variant={req.status === 'active' ? 'default' : req.status === 'available' ? 'success' : 'warning'}>
                          {req.status}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Government Accounts on Threads</CardTitle>
                  <CardDescription>Official UAE presence (NONE identified)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30 mb-4">
                    <p className="text-sm text-slate-300">
                      <AlertOctagon className="inline h-4 w-4 mr-2 text-rose-400" />
                      NO official UAE government Threads accounts identified. All government entities
                      use X (Twitter), Facebook, Instagram, and YouTube - but NOT Threads.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {governmentAccounts?.map((account, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                        <div className="flex items-center gap-3">
                          {account.verified ? (
                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                          ) : (
                            <XCircle className="h-4 w-4 text-slate-500" />
                          )}
                          <span className="text-sm font-medium text-slate-200">{account.handle}</span>
                          <Badge variant="outline" className="text-xs">{account.type}</Badge>
                        </div>
                        {(account.followers ?? 0) > 0 && (
                          <span className="text-sm text-gold">{account.followers?.toLocaleString()}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">March 2026 Incident: Coordinated Messaging</CardTitle>
                  <CardDescription>Influencer concerns during regional tensions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30">
                    <h4 className="font-semibold text-yellow-400 mb-2">Critical Finding</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-400" />
                        Multiple influencers posted identical messages insisting city is safe during regional tensions
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-400" />
                        Reports of "strict directive targeting social media influencers operating in Dubai"
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-400" />
                        Golden Visa holders "part of Dubai's marketing arm" posting aspirational content
                      </li>
                      <li className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-400" />
                        Concerns about influencer "propaganda" and authenticity
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Content Strategy Tab - Enhancement Cycle D */}
        <TabsContent value="content" className="space-y-6">
          <GlassPanel title="Content Strategy Insights" description="Optimal posting times and content formats">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Content Format Performance</CardTitle>
                  <CardDescription>Pictures outperform all other formats</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={contentStrategyData}
                    xAxisKey="type"
                    bars={[{ dataKey: 'performance', name: 'Performance %', color: CHART_COLORS.rose }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

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
                        className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-gold" />
                          <span className="font-medium text-slate-200">{item.day}</span>
                          <span className="text-sm text-slate-400">at {item.time}</span>
                        </div>
                        <Badge variant={item.engagement === 'Highest' ? 'default' : 'outline'}>
                          {item.engagement}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Drivers</CardTitle>
                  <CardDescription>What drives engagement on Threads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { strategy: 'Reply to comments', impact: '+42% engagement', source: 'Social Media Today' },
                      { strategy: 'Short posts (<150 chars)', impact: 'High performance', source: 'Labeeb.ae' },
                      { strategy: 'Questions', impact: 'Drive engagement', source: 'Labeeb.ae' },
                      { strategy: 'Behind-the-scenes', impact: 'Effective', source: 'Buffer' },
                      { strategy: 'Bilingual (Arabic + English)', impact: '+20% higher', source: 'Labeeb.ae' },
                      { strategy: 'Authenticity over virality', impact: 'Platform values', source: 'Buffer' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg bg-slate-800/50 p-4 cursor-pointer"
                      >
                        <p className="font-medium text-slate-200">{item.strategy}</p>
                        <p className="text-sm text-emerald-400">{item.impact}</p>
                        <p className="text-xs text-slate-500 mt-1">Source: {item.source}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE-Specific Strategy</CardTitle>
                  <CardDescription>Content recommendations for UAE market</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                      <h4 className="font-semibold text-emerald-400 mb-2">Bilingual Content</h4>
                      <p className="text-sm text-slate-300">
                        Mix Arabic and English naturally in posts for +20% higher engagement in UAE
                      </p>
                    </div>
                    <div className="rounded-lg bg-gold/10 p-4 border border-gold/30">
                      <h4 className="font-semibold text-gold mb-2">Tourism Focus</h4>
                      <p className="text-sm text-slate-300">
                        #visitdubai has 56M threads (8x more than #UAE) - tourism content dominates
                      </p>
                    </div>
                    <div className="rounded-lg bg-info/10 p-4 border border-info/30">
                      <h4 className="font-semibold text-info mb-2">Cross-Platform</h4>
                      <p className="text-sm text-slate-300">
                        Pair Threads with Instagram for full funnel approach
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Narratives Tab - Enhancement Cycle E */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Key Narratives" description="Dominant narratives on UAE Threads">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
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
                            narrative.sentiment === 'positive' ? 'success' :
                            narrative.sentiment === 'negative' ? 'destructive' : 'outline'
                          }>
                            {narrative.sentiment}
                          </Badge>
                        </div>
                        <CardDescription>Prevalence: {narrative.prevalence}%</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-300 mb-4">{narrative.narrative}</p>
                        <div className="space-y-2">
                          <p className="text-xs text-slate-400 font-medium">Sources:</p>
                          {(narrative.sources || (narrative.source ? [narrative.source] : [])).map((source, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-platinum" />
                              <span className="text-xs text-slate-400">{source}</span>
                            </div>
                          ))}
                        </div>
                        <Progress value={typeof narrative.prevalence === 'number' ? narrative.prevalence : 50} className="mt-4 h-2" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* API & Features Tab - Enhancement Cycle F */}
        <TabsContent value="technical" className="space-y-6">
          <GlassPanel title="API & Technical Features" description="Threads API capabilities 2025-2026">
            <div className="space-y-6">
              {apiFeatures.map((category, idx) => (
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
                            className="rounded-lg bg-slate-800/50 px-3 py-2"
                          >
                            <span className="text-sm text-slate-200">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">API Availability Timeline</CardTitle>
                  <CardDescription>Feature rollout history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { date: 'June 2024', feature: 'Initial API launch', status: 'completed' },
                      { date: 'July 2025', feature: 'Enhanced API - location, polls, search', status: 'completed' },
                      { date: 'September 2025', feature: 'Profile search without Instagram', status: 'completed' },
                      { date: 'May 2025', feature: 'Standalone accounts (no Instagram)', status: 'completed' },
                      { date: 'December 2025', feature: 'Link limit (5+ links will fail)', status: 'active' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            item.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gold/20 text-gold'
                          }`}>
                            {item.status === 'completed' ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                          </div>
                        </div>
                        <div className="flex-1">
                          <span className="text-xs text-gold">{item.date}</span>
                          <p className="font-medium text-slate-200">{item.feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Findings</CardTitle>
                  <CardDescription>Critical insights from the MD file</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {keyFindings.map((finding: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 rounded-lg bg-slate-800/50 p-3"
                      >
                        {finding.alert === 'YELLOW' ? (
                          <AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5" />
                        ) : finding.alert === 'RED' ? (
                          <AlertOctagon className="h-4 w-4 text-rose-400 mt-0.5" />
                        ) : (
                          <Lightbulb className="h-4 w-4 text-gold mt-0.5" />
                        )}
                        <div>
                          <p className="text-sm text-slate-200">{finding.finding}</p>
                          <p className="text-xs text-slate-400">
                            {typeof finding.metric === 'number' ? finding.metric.toLocaleString() : finding.metric} | Source: {finding.source}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sources</CardTitle>
                  <CardDescription>Data credibility and references</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {sources.map((source: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/30 p-2">
                          <div className="flex items-center gap-2">
                            <Badge variant={source.tier === 1 ? 'default' : 'outline'} className="text-xs">
                              Tier {source.tier}
                            </Badge>
                            <span className="text-sm text-slate-300">{source.name}</span>
                          </div>
                          <span className="text-xs text-slate-500">{source.date}</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}