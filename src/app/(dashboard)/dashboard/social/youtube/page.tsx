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
  AlertCircle,
  Play,
  Eye,
  ThumbsUp,
  MessageSquare,
  Share2,
  Shield,
  TrendingUp,
  UserCheck,
  Video,
  Radio,
  Globe,
  TrendingDown,
  Users,
  Activity,
  AlertTriangle,
  Building2,
  Building,
  Waves,
} from 'lucide-react'
import {
  useYoutubeIntelligenceData,
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
  whileHover: { scale: 1.02 },
  transition: { duration: 0.2 },
}

const glowHover = {
  whileHover: {
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
    borderColor: 'rgba(59, 130, 246, 0.5)',
  },
}

export default function YouTubePage() {
  const { data } = useYoutubeIntelligenceData()

  if (!data) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-[400px]"
      >
        <div className="text-platinum-400">Loading YouTube intelligence data...</div>
      </motion.div>
    )
  }

  const { metrics, botActivity, censorship, keyNarratives, governmentAccounts } = data

  // Sentiment data for pie chart
  const sentimentData = metrics?.sentiment?.breakdown ? [
    { name: 'Positive', value: metrics.sentiment.breakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics.sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.sentiment.breakdown.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 28, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 25, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 47, color: CHART_COLORS.rose },
  ]

  // Content category data
  const contentCategoryData = [
    { name: 'News', value: 35, color: CHART_COLORS.navy },
    { name: 'Entertainment', value: 25, color: CHART_COLORS.gold },
    { name: 'Travel', value: 20, color: CHART_COLORS.emerald },
    { name: 'Lifestyle', value: 12, color: CHART_COLORS.platinum },
    { name: 'Documentary', value: 8, color: CHART_COLORS.rose },
  ]

  // Engagement metrics
  const engagementData = [
    { name: 'Views', value: (metrics?.engagement?.avgViews || 45000) / 1000, color: CHART_COLORS.gold },
    { name: 'Likes', value: (metrics?.engagement?.avgLikes || 2100) / 100, color: CHART_COLORS.navy },
    { name: 'Comments', value: (metrics?.engagement?.avgComments || 340) / 10, color: CHART_COLORS.platinum },
  ]

  // Monthly trend data
  const monthlyTrendData = [
    { month: 'Jan', views: 42, engagement: 58 },
    { month: 'Feb', views: 45, engagement: 62 },
    { month: 'Mar', views: 48, engagement: 65 },
    { month: 'Apr', views: 46, engagement: 61 },
    { month: 'May', views: 52, engagement: 68 },
    { month: 'Jun', views: 55, engagement: 72 },
    { month: 'Jul', views: 53, engagement: 70 },
    { month: 'Aug', views: 58, engagement: 75 },
    { month: 'Sep', views: 62, engagement: 78 },
    { month: 'Oct', views: 68, engagement: 82 },
    { month: 'Nov', views: 72, engagement: 85 },
    { month: 'Dec', views: 78, engagement: 88 },
  ]

  // Video performance data
  const videoPerformanceData = [
    { format: '4K Video', avgViews: 125000, color: CHART_COLORS.gold },
    { format: 'HD Video', avgViews: 45000, color: CHART_COLORS.navy },
    { format: 'Shorts', avgViews: 28000, color: CHART_COLORS.platinum },
    { format: 'Live Stream', avgViews: 18000, color: CHART_COLORS.emerald },
  ]

  // Crisis data for special section
  const crisisData = [
    { metric: 'Attacks', value: '2,819+', icon: AlertTriangle, color: 'text-rose' },
    { metric: 'Market Loss', value: '$240B', icon: TrendingDown, color: 'text-rose' },
    { metric: 'Exodus', value: 'Thousands', icon: Users, color: 'text-gold' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 p-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="denim" className="mb-2">SOCIAL INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy">YouTube & Video Content</h1>
          <p className="mt-2 text-platinum-400">
            Video platform intelligence in UAE - channels, viewership, and government control
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="gap-2 border-navy/50 text-navy hover:bg-navy/10 glass-panel"
          >
            <Video className="h-4 w-4" />
            View Channels
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Play className="h-4 w-4" />
            Analyze Trends
          </Button>
        </div>
      </motion.div>

      {/* Crisis Alert Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-lg border border-rose/50 bg-rose/10 p-4 glass-panel"
      >
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="h-5 w-5 text-rose" />
          <span className="font-semibold text-rose">April 2026 Crisis Alert</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {crisisData.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 rounded-lg bg-platinum-900/50 p-3"
            >
              <item.icon className={`h-5 w-5 ${item.color}`} />
              <div>
                <p className="text-sm text-platinum-400">{item.metric}</p>
                <p className={`font-bold ${item.color}`}>{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeInUp} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
          <MetricCard
            title="UAE Users"
            value={metrics?.users ? `${(metrics.users / 1000000).toFixed(1)}M` : '9.5M'}
            previousValue={9.2}
            icon={<Eye className="h-6 w-6" />}
            gradient="denim"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
          <MetricCard
            title="Penetration Rate"
            value={`${metrics?.penetration || 98}%`}
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="gold"
          />
        </motion.div>
        <motion.div variants={fadeInUp} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
          <MetricCard
            title="Avg Views/Video"
            value={(metrics?.engagement?.avgViews || 45000).toLocaleString()}
            previousValue={42000}
            icon={<Play className="h-6 w-6" />}
            gradient="emerald"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
          <MetricCard
            title="Bot Activity"
            value={`${botActivity?.estimatedBotPercent || 12}%`}
            icon={<AlertCircle className="h-6 w-6" />}
            gradient="indigo"
            status={botActivity?.estimatedBotPercent > 15 ? 'danger' : 'warning'}
          />
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        <Tabs defaultValue="overview" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <TabsList className="glass-panel" scrollable>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="content">Content Analysis</TabsTrigger>
              <TabsTrigger value="channels">Top Channels</TabsTrigger>
              <TabsTrigger value="government">Government Presence</TabsTrigger>
              <TabsTrigger value="crisis">Crisis Coverage</TabsTrigger>
              <TabsTrigger value="investigative">Investigative</TabsTrigger>
              <TabsTrigger value="humanrights">Human Rights</TabsTrigger>
              <TabsTrigger value="propaganda">Propaganda</TabsTrigger>
              <TabsTrigger value="economics">Economics</TabsTrigger>
              <TabsTrigger value="news">News Sources</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="YouTube Intelligence Overview" description="Video platform activity in UAE">
                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Viewership & Engagement Trend</CardTitle>
                      <CardDescription>12-month viewership growth in UAE</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={monthlyTrendData}
                        xAxisKey="month"
                        areas={[
                          { dataKey: 'views', name: 'Views (K)', color: CHART_COLORS.navy },
                          { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.gold },
                        ]}
                        height={300}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                      <Card className="glass-card">
                        <CardHeader>
                          <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                          <CardDescription>Overall sentiment on YouTube</CardDescription>
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

                    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                      <Card className="glass-card">
                        <CardHeader>
                          <CardTitle className="text-lg">Content Categories</CardTitle>
                          <CardDescription>Video content by category</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <BarChart
                            data={contentCategoryData}
                            xAxisKey="name"
                            bars={[
                              { dataKey: 'value', name: '% Share', color: CHART_COLORS.gold },
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

          {/* Content Analysis Tab */}
          <TabsContent value="content" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Content Performance Analysis" description="Video format and content type performance">
                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Video Format Performance</CardTitle>
                      <CardDescription>Average views by video format</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={videoPerformanceData}
                        xAxisKey="format"
                        bars={[
                          { dataKey: 'avgViews', name: 'Avg Views', color: CHART_COLORS.navy },
                        ]}
                        height={300}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Card className="glass-card">
                        <CardHeader>
                          <CardTitle className="text-lg">Trending Topics</CardTitle>
                          <CardDescription>Most viewed content categories</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ScrollArea className="h-[250px]">
                            <div className="space-y-2">
                              {(metrics?.sentiment?.trending || ['Iran conflict coverage', 'Exit narratives', 'UAE documentary', 'Dubai vlogs', 'Missile attack footage']).map((topic: string, idx: number) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 hover:bg-platinum-800/70 cursor-pointer"
                                >
                                  <div className="flex items-center gap-3">
                                    <Play className="h-4 w-4 text-navy" />
                                    <span className="text-sm font-medium text-platinum-200">{topic}</span>
                                  </div>
                                  <Badge variant="outline" className="text-navy">#{idx + 1}</Badge>
                                </motion.div>
                              ))}
                            </div>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <Card className="glass-card">
                        <CardHeader>
                          <CardTitle className="text-lg">Key Concerns</CardTitle>
                          <CardDescription>User-reported concerns</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {(metrics?.sentiment?.keyConcerns || ['Government control of major channels', 'Censorship of critical content', 'Bot activity on government videos']).map((concern: string, idx: number) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3"
                              >
                                <AlertCircle className="h-4 w-4 text-rose mt-0.5" />
                                <span className="text-sm text-platinum-300">{concern}</span>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Channels Tab */}
          <TabsContent value="channels" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Top YouTube Channels" description="Most subscribed channels in UAE">
                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Government & Official Channels</CardTitle>
                      <CardDescription>Channels with largest UAE subscriber base</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px]">
                        <div className="space-y-3">
                          {governmentAccounts?.map((account: { handle: string; followers?: number; platform: string; verified: boolean }, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ scale: 1.02, x: 5 }}
                              className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70 cursor-pointer glass-panel"
                            >
                              <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/20 text-navy">
                                  <Radio className="h-6 w-6" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <p className="font-semibold text-platinum-200">{account.handle}</p>
                                    {account.verified && (
                                      <Badge variant="outline" className="text-navy border-navy">Verified</Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-platinum-400">{account.platform}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-bold text-gold">{account.followers ? `${(account.followers / 1000000).toFixed(1)}M` : 'N/A'}</p>
                                <p className="text-xs text-platinum-400">subscribers</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Video Engagement Metrics</CardTitle>
                      <CardDescription>Average per-video engagement</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 glass-panel"
                        >
                          <div className="flex items-center gap-3">
                            <Eye className="h-5 w-5 text-gold" />
                            <span className="text-sm font-medium text-platinum-200">Avg Views</span>
                          </div>
                          <span className="text-xl font-bold text-gold">{(metrics?.engagement?.avgViews || 45000).toLocaleString()}</span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 glass-panel"
                        >
                          <div className="flex items-center gap-3">
                            <ThumbsUp className="h-5 w-5 text-navy" />
                            <span className="text-sm font-medium text-platinum-200">Avg Likes</span>
                          </div>
                          <span className="text-xl font-bold text-navy">{(metrics?.engagement?.avgLikes || 2100).toLocaleString()}</span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 glass-panel"
                        >
                          <div className="flex items-center gap-3">
                            <MessageSquare className="h-5 w-5 text-platinum" />
                            <span className="text-sm font-medium text-platinum-200">Avg Comments</span>
                          </div>
                          <span className="text-xl font-bold text-platinum">{(metrics?.engagement?.avgComments || 340).toLocaleString()}</span>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Government Presence Tab */}
          <TabsContent value="government" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Government Control & Censorship" description="UAE government influence on YouTube">
                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Censorship Statistics</CardTitle>
                      <CardDescription>YouTube compliance in UAE</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 glass-panel"
                        >
                          <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-gold" />
                            <span className="text-sm font-medium text-platinum-200">Compliance Rate</span>
                          </div>
                          <span className="text-xl font-bold text-gold">{censorship?.complianceRate || 75}%</span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 glass-panel"
                        >
                          <div className="flex items-center gap-3">
                            <Globe className="h-5 w-5 text-navy" />
                            <span className="text-sm font-medium text-platinum-200">Gov Requests</span>
                          </div>
                          <span className="text-xl font-bold text-navy">{censorship?.governmentRequests || 234}</span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 glass-panel"
                        >
                          <div className="flex items-center gap-3">
                            <AlertCircle className="h-5 w-5 text-rose" />
                            <span className="text-sm font-medium text-platinum-200">Content Removed</span>
                          </div>
                          <span className="text-xl font-bold text-rose">{censorship?.contentRemoved?.toLocaleString() || '1,247'}</span>
                        </motion.div>
                      </div>
                      <p className="mt-4 text-sm text-platinum-400">
                        {censorship?.notes || 'Selective removal; government channels dominate recommendations'}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Bot Activity Indicators</CardTitle>
                      <CardDescription>Suspected inauthentic activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {botActivity?.indicators?.map((indicator: string, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3"
                          >
                            <AlertCircle className="h-4 w-4 text-rose mt-0.5" />
                            <span className="text-sm text-platinum-300">{indicator}</span>
                          </motion.div>
                        )) || [
                          'View botting on government channels',
                          'Inflated subscriber counts suspected',
                          'Coordinated commenting during crisis events',
                        ].map((indicator: string, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3"
                          >
                            <AlertCircle className="h-4 w-4 text-rose mt-0.5" />
                            <span className="text-sm text-platinum-300">{indicator}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Narratives</CardTitle>
                      <CardDescription>Dominant themes on platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-3">
                          {keyNarratives?.slice(0, 6).map((narrative: { topic: string; narrative: string; sentiment: string }, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="rounded-lg bg-platinum-800/50 p-4"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <Badge
                                  variant="outline"
                                  className={
                                    narrative.sentiment === 'positive' ? 'text-emerald border-emerald' :
                                    narrative.sentiment === 'negative' ? 'text-rose border-rose' :
                                    'text-platinum border-platinum'
                                  }
                                >
                                  {narrative.topic}
                                </Badge>
                              </div>
                              <p className="text-sm text-platinum-300">{narrative.narrative}</p>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Crisis Coverage Tab */}
          <TabsContent value="crisis" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="April 2026 Crisis Coverage" description="Current Iran-UAE conflict impact on YouTube">
                <div className="space-y-6">
                  <Card className="glass-card border-rose/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-rose" />
                        Crisis Statistics
                      </CardTitle>
                      <CardDescription>April 2026 Iran-UAE conflict impact</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-rose/10 border border-rose/30 p-4 text-center"
                        >
                          <p className="text-3xl font-bold text-rose">2,819+</p>
                          <p className="text-sm text-platinum-400">Missile/Drone Attacks</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-rose/10 border border-rose/30 p-4 text-center"
                        >
                          <p className="text-3xl font-bold text-rose">$240B</p>
                          <p className="text-sm text-platinum-400">Stock Market Losses</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-gold/10 border border-gold/30 p-4 text-center"
                        >
                          <p className="text-3xl font-bold text-gold">5x</p>
                          <p className="text-sm text-platinum-400">vs Israel Attacks</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-gold/10 border border-gold/30 p-4 text-center"
                        >
                          <p className="text-3xl font-bold text-gold">1st</p>
                          <p className="text-sm text-platinum-400">Iron Dome Overseas</p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Crisis Response</CardTitle>
                        <CardDescription>Government and social media actions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            '21 people charged for missile footage on social media',
                            '100+ accounts blocked for inciting violence',
                            '1,000+ Google employees evacuated',
                            'Remote learning continues across UAE schools',
                            'Travel advisories: Do Not Travel issued',
                          ].map((item: string, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3"
                            >
                              <Activity className="h-4 w-4 text-rose mt-0.5" />
                              <span className="text-sm text-platinum-300">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Propaganda Indicators</CardTitle>
                        <CardDescription>Coordinated influence operations</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            '7 fake X accounts created December 2024',
                            '5 fake news websites created Oct-Nov 2024',
                            '8+ AI-generated books published July-Sept 2025',
                            'Same studio with black-and-silver globe set dressing',
                            '"Muslim Brotherhood" most frequent topic',
                          ].map((item: string, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3"
                            >
                              <AlertCircle className="h-4 w-4 text-gold mt-0.5" />
                              <span className="text-sm text-platinum-300">{item}</span>
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

          {/* Investigative Reports Tab */}
          <TabsContent value="investigative" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Documented Investigative Reports" description="Key investigations into UAE activities">
                <div className="space-y-6">
                  {/* Abu Dhabi Secrets */}
                  <Card className="glass-card border-rose/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-rose" />
                        Abu Dhabi Secrets Investigation
                      </CardTitle>
                      <CardDescription>UAE influence strategy in Europe via Swiss company Alp Services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-4">
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-rose">78,000</p>
                          <p className="text-xs text-platinum-400">Documents</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-rose">€5.7M</p>
                          <p className="text-xs text-platinum-400">Payments</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-gold">18</p>
                          <p className="text-xs text-platinum-400">Countries</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-gold">3</p>
                          <p className="text-xs text-platinum-400">Prosecutors</p>
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-platinum-300">Key Individuals:</p>
                        <div className="flex flex-wrap gap-2">
                          {['Mario Brero (Alp Services)', 'Roland Jacquard (300K+10%)', 'Sheikh Matar (Spy Supervisor)', 'Ali Saeed al-Neyadi'].map((item, idx) => (
                            <Badge key={idx} variant="outline" className="text-rose border-rose">{item}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Equidem Expo 2020 */}
                  <Card className="glass-card border-gold/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-gold" />
                        Equidem Expo 2020 Report
                      </CardTitle>
                      <CardDescription>Labor exploitation at Dubai Expo 2020</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5 mb-4">
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-rose">83%</p>
                          <p className="text-xs text-platinum-400">Forced Labor</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-gold">57%</p>
                          <p className="text-xs text-platinum-400">Illegal Fees</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-gold">$1,006</p>
                          <p className="text-xs text-platinum-400">Avg Fee</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-rose">0</p>
                          <p className="text-xs text-platinum-400">Complaints</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-rose">2/3</p>
                          <p className="text-xs text-platinum-400">Unpaid Wages</p>
                        </motion.div>
                      </div>
                      <p className="text-sm text-platinum-400">69 interviews conducted September-December 2021 across 11 nationalities</p>
                    </CardContent>
                  </Card>

                  {/* Abu Dhabi Data Leak */}
                  <Card className="glass-card border-navy/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5 text-navy" />
                        Abu Dhabi Finance Week Data Leak
                      </CardTitle>
                      <CardDescription>February 2026 - 700+ passports exposed</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-sm text-platinum-300">Exposed Individuals:</p>
                        <div className="flex flex-wrap gap-2">
                          {['David Cameron (Former UK PM)', 'Anthony Scaramucci (White House Comms)', 'UBS/Blackstone/Barclays/Morgan Stanley Execs', 'Tether Crypto Executives'].map((item, idx) => (
                            <Badge key={idx} variant="outline" className="text-navy border-navy">{item}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Human Rights Tab */}
          <TabsContent value="humanrights" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Human Rights Documentation" description="Documented human rights cases and violations">
                <div className="space-y-6">
                  <Card className="glass-card border-rose/30">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Cases</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-3">
                          {[
                            { name: 'Matthew Hedges', details: 'British PhD researcher; 7 months solitary confinement; drugged; falsely confessed to spying for M16; sentenced to life; released after UK diplomatic intervention' },
                            { name: 'Ahmed Mansoor', details: 'Leading human rights defender; 10-year sentence for "insulting UAE leaders" online; held in isolation 4+ years' },
                            { name: 'Nasser bin-Ghaith', details: 'Prominent academic; sentenced to 10 years; held incommunicado 10+ months' },
                            { name: 'Mohammed al-Roken', details: 'Human rights lawyer; 10-year sentence' },
                            { name: 'Ryan Cornelius', details: 'British businessman; held 18+ years; solitary confinement' },
                            { name: 'Billy Hood', details: 'British football coach; sentenced 10 years over CBD oil left in car' },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="rounded-lg bg-platinum-800/50 p-4"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <AlertCircle className="h-4 w-4 text-rose" />
                                <span className="font-semibold text-platinum-200">{item.name}</span>
                              </div>
                              <p className="text-sm text-platinum-400">{item.details}</p>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Structural Issues</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-platinum-300">Kafala System</p>
                          <p className="text-xs text-platinum-400">Workers bound to employers; wage theft, excessive hours, recruitment fee debt documented</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-platinum-300">Women's Rights</p>
                          <p className="text-xs text-platinum-400">Domestic violence law allows beating "if no physical marks remain"; male guardian permission required</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-platinum-300">LGBTQ Rights</p>
                          <p className="text-xs text-platinum-400">Illegal; minimum 6-month prison term</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-platinum-300">Secret Prisons</p>
                          <p className="text-xs text-platinum-400">16 torture methods documented; 100+ Emirati activists jailed post-Arab Spring</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Propaganda Tab */}
          <TabsContent value="propaganda" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Documented Propaganda Channels" description="Government-aligned and dis-influencer networks">
                <div className="space-y-6">
                  <Card className="glass-card border-gold/30">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5 text-gold" />
                        Dis-Influencer Network
                      </CardTitle>
                      <CardDescription>Fake news ecosystem exposed by Marc Owen Jones</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-4">
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-gold">7+</p>
                          <p className="text-xs text-platinum-400">X Accounts</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-gold">5</p>
                          <p className="text-xs text-platinum-400">Fake News Sites</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-gold">8+</p>
                          <p className="text-xs text-platinum-400">AI Books</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 text-center">
                          <p className="text-2xl font-bold text-gold">1</p>
                          <p className="text-xs text-platinum-400">Studio Set</p>
                        </motion.div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-platinum-300">Fake News Websites:</p>
                        <div className="flex flex-wrap gap-2">
                          {['The Washington Eye', 'Daily Euro Times', 'Brieflex', 'AfricaLix', 'InfoFlix'].map((site, idx) => (
                            <Badge key={idx} variant="outline" className="text-gold border-gold">{site}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Narratives</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { topic: 'Primary Narrative', content: '"Muslim Brotherhood" as explanation for conflicts, terrorism, environmental issues' },
                          { topic: 'Conference Attendance', content: 'Council on Foreign Relations (NYC), Cambridge, UC San Diego, London ARC' },
                          { topic: 'Studio Evidence', content: 'Same studio with black-and-silver globe set dressing' },
                          { topic: 'AI Signs', content: 'Formulaic structures, excessive em dashes, no bibliographies' },
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3"
                          >
                            <AlertCircle className="h-4 w-4 text-gold mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-platinum-200">{item.topic}</p>
                              <p className="text-xs text-platinum-400">{item.content}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Economics Tab */}
          <TabsContent value="economics" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Economic Data" description="UAE and Dubai key economic indicators">
                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">UAE Key Indicators</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-4 text-center">
                          <p className="text-2xl font-bold text-emerald">$1.006T</p>
                          <p className="text-xs text-platinum-400">GDP (PPP 2026)</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-4 text-center">
                          <p className="text-2xl font-bold text-emerald">$87,774</p>
                          <p className="text-xs text-platinum-400">GDP/Capita (PPP)</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-4 text-center">
                          <p className="text-2xl font-bold text-gold">0.940</p>
                          <p className="text-xs text-platinum-400">HDI (15th)</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-4 text-center">
                          <p className="text-2xl font-bold text-navy">11.5M</p>
                          <p className="text-xs text-platinum-400">Population 2025</p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Dubai Economic Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-4 text-center">
                          <p className="text-2xl font-bold text-gold">$156.3B</p>
                          <p className="text-xs text-platinum-400">GDP Nominal 2024</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-4 text-center">
                          <p className="text-2xl font-bold text-emerald">92M+</p>
                          <p className="text-xs text-platinum-400">Airport Passengers</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-4 text-center">
                          <p className="text-2xl font-bold text-navy">92%</p>
                          <p className="text-xs text-platinum-400">Expat Share</p>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-rose/30">
                    <CardHeader>
                      <CardTitle className="text-lg">Trade Partners</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {[
                          { rank: 1, partner: 'China', value: '$47.7B' },
                          { rank: 2, partner: 'India', value: '$29.7B' },
                          { rank: 3, partner: 'USA', value: '$22.62B' },
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                          >
                            <div className="flex items-center gap-3">
                              <Badge variant="outline" className="text-gold border-gold">#{item.rank}</Badge>
                              <span className="text-sm font-medium text-platinum-200">{item.partner}</span>
                            </div>
                            <span className="text-lg font-bold text-emerald">{item.value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* News Sources Tab */}
          <TabsContent value="news" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="UAE News Sources" description="Major news organizations covering UAE">
                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani">Major News Organizations</CardTitle>
                      <CardDescription>Trusted news outlets covering UAE events</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                          { outlet: 'The National', lang: 'English', focus: 'UAE news, government', url: 'thenationalnews.com', tier: 1 },
                          { outlet: 'Emirates 24|7', lang: 'English', focus: 'Business, lifestyle', url: 'emirates247.com', tier: 1 },
                          { outlet: 'Gulf News', lang: 'English', focus: 'Regional news', url: 'gulfnews.com', tier: 1 },
                          { outlet: 'Khaleej Times', lang: 'English', focus: 'Dubai news', url: 'khaleejtimes.com', tier: 1 },
                          { outlet: 'Al Jazeera UAE', lang: 'Arabic/English', focus: 'Regional', url: 'aljazeera.net', tier: 1 },
                          { outlet: 'Emarat Al Youm', lang: 'Arabic', focus: 'UAE news', url: 'emaratalyoum.com', tier: 1 },
                        ].map((source, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03, y: -2 }}
                            className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 glass-panel"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-semibold text-platinum-200">{source.outlet}</p>
                              <Badge variant="outline" className="text-navy border-navy text-xs">Tier {source.tier}</Badge>
                            </div>
                            <p className="text-xs text-platinum-400 mb-1">{source.lang} | {source.focus}</p>
                            <p className="text-xs text-platinum">{source.url}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani">Al Jazeera Headlines (April 2026)</CardTitle>
                      <CardDescription>Critical Iran war and Gulf coverage</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-2">
                          {[
                            { date: 'April 24', headline: 'Pakistan Central Bank repaid final $1bn of $3.45bn UAE deposit; reserves at $20.6B' },
                            { date: 'April 24', headline: 'Iran\'s war fallout shifted from energy to real estate sectors' },
                            { date: 'April 23', headline: 'Gulf banks reported profits in Q1 despite war; Qatar National Bank profits +2%' },
                            { date: 'April 21', headline: 'Gulf aluminum production declined 6% due to supply disruptions; ~15,963 tons/day' },
                            { date: 'April 20', headline: 'UAE announced dismantling of "Iran-linked terrorist organization"' },
                            { date: 'April 16', headline: 'UAE summoned Iraq\'s acting ambassador over attacks on GCC from Iraqi territory' },
                            { date: 'April 16', headline: 'UAE and Iran discussed de-escalation pathways' },
                            { date: 'April 13', headline: 'Gulf central banks launched support packages (liquidity injection, reserve requirement reductions, loan deferrals)' },
                            { date: 'April 7', headline: 'Iranian attacks targeted Saudi Arabia, Bahrain, Kuwait, UAE, Qatar' },
                            { date: 'April 5', headline: 'UAE intercepted Iranian attacks targeting Borouge petrochemicals plant; material damage, no casualties' },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3"
                            >
                              <Badge variant="outline" className="text-gold border-gold shrink-0 text-xs mt-0.5">{item.date}</Badge>
                              <p className="text-sm text-platinum-300">{item.headline}</p>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani">Source Credibility Tiers</CardTitle>
                      <CardDescription>Information source reliability assessment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { tier: 'Tier 0', sources: 'UAE Government Portal (u.ae), Gov social media', reliability: 'Official but potentially biased', colorClass: 'text-emerald border-emerald' },
                          { tier: 'Tier 1', sources: 'The National, Khaleej Times, Gulf News, Al Jazeera, Reuters', reliability: 'High credibility', colorClass: 'text-navy border-navy' },
                          { tier: 'Tier 2', sources: 'CSIS, Amnesty International, Wikipedia', reliability: 'Academic/media credibility', colorClass: 'text-gold border-gold' },
                          { tier: 'Tier 3', sources: 'Individual news aggregators', reliability: 'Variable', colorClass: 'text-platinum border-platinum' },
                          { tier: 'Tier 4', sources: 'YouTube (gov channels, influencers, documentary makers)', reliability: 'Variable', colorClass: 'text-rose border-rose' },
                          { tier: 'Tier 5', sources: 'Academic sources (Matthew Hedges case)', reliability: 'High for specific cases', colorClass: 'text-indigo border-indigo' },
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-4 rounded-lg bg-platinum-800/50 p-3"
                          >
                            <Badge variant="outline" className={`${item.colorClass} shrink-0`}>{item.tier}</Badge>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-platinum-200">{item.sources}</p>
                              <p className="text-xs text-platinum-400">{item.reliability}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          {/* Infrastructure Tab */}
          <TabsContent value="infrastructure" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassPanel title="Infrastructure & Environmental Failures" description="Documented infrastructure issues and environmental concerns">
                <div className="space-y-6">
                  {/* April 2024 Rainstorm */}
                  <Card className="glass-card border-rose/30">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-rose" />
                        April 2024 Rainstorm Crisis
                      </CardTitle>
                      <CardDescription>Historic flooding event - 254mm rainfall in one day</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-rose/10 border border-rose/30 p-4 text-center">
                          <p className="text-3xl font-bold text-rose">254mm</p>
                          <p className="text-sm text-platinum-400">Rainfall (highest since 1949)</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-rose/10 border border-rose/30 p-4 text-center">
                          <p className="text-3xl font-bold text-rose">2 Years</p>
                          <p className="text-sm text-platinum-400">Worth of rain in one day</p>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-rose/10 border border-rose/30 p-4 text-center">
                          <p className="text-3xl font-bold text-rose">23+</p>
                          <p className="text-sm text-platinum-400">Total deaths (UAE+Oman)</p>
                        </motion.div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {[
                          { metric: 'Dubai Airport', value: 'Closed during crisis' },
                          { metric: 'Cause', value: 'Strong, slow-moving low-pressure system' },
                          { metric: 'Cloud Seeding', value: 'UAE did not conduct on April 16, 2024' },
                          { metric: 'Climate Link', value: 'Heavy rainfall events more common with rising temps' },
                          { metric: 'NASA Warning', value: '"Primary cause of deaths in deserts is not thirst but drowning"' },
                          { metric: 'Historical', value: 'October 1925: 8,000 Gulf citizens died in single day storm' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 rounded-lg bg-platinum-800/50 p-3">
                            <AlertCircle className="h-4 w-4 text-gold shrink-0" />
                            <div>
                              <p className="text-xs text-platinum-400">{item.metric}</p>
                              <p className="text-sm text-platinum-200">{item.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Property Market Issues */}
                  <Card className="glass-card border-gold/30">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani">Property Market Issues</CardTitle>
                      <CardDescription>Documented property and urban development concerns</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-4">
                        {[
                          { icon: Building2, issue: 'Burj Khalifa', detail: 'Mostly empty luxury apartments owned by overseas investors' },
                          { icon: Building, issue: 'Ghost Towns', detail: 'Neighborhoods with towering flats but few residents' },
                          { icon: TrendingUp, issue: 'Cost of Living', detail: 'Rose from 90th to 31st most expensive city globally' },
                          { icon: Users, issue: 'Middle-Class Exodus', detail: 'Thousands leaving due to costs' },
                          { icon: Waves, issue: 'Palm Jumeirah', detail: 'Construction disrupted marine ecosystems' },
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03, y: -2 }}
                            className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 glass-panel"
                          >
                            <item.icon className="h-5 w-5 text-gold mb-2" />
                            <p className="font-semibold text-platinum-200 text-sm">{item.issue}</p>
                            <p className="text-xs text-platinum-400 mt-1">{item.detail}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sentiment Trend Chart */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani">April 2026 Crisis Sentiment Impact</CardTitle>
                      <CardDescription>How current crisis affects YouTube narrative tone</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={[
                          { factor: 'Iran War', impact: 95, color: CHART_COLORS.rose },
                          { factor: 'Iron Dome', impact: 88, color: CHART_COLORS.rose },
                          { factor: 'Stock Loss', impact: 92, color: CHART_COLORS.rose },
                          { factor: 'Expat Exodus', impact: 85, color: CHART_COLORS.rose },
                          { factor: 'Travel Advisory', impact: 80, color: CHART_COLORS.rose },
                          { factor: 'Propaganda', impact: 45, color: CHART_COLORS.emerald },
                          { factor: 'Gov Messaging', impact: 55, color: CHART_COLORS.gold },
                        ]}
                        xAxisKey="factor"
                        bars={[{ dataKey: 'impact', name: 'Negative Impact %', color: CHART_COLORS.rose }]}
                        height={280}
                        showGrid={true}
                      />
                      <p className="text-xs text-platinum-400 mt-2 text-center">Rose = Negative sentiment pressure | Emerald = Positive counter-narrative</p>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </Tabs>
      </AnimatePresence>
    </motion.div>
  )
}
