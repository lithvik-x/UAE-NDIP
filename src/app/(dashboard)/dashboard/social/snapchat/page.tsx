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
  AlertTriangle,
  Globe,
  Hash,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Ghost,
  Eye,
  Map,
  Sparkles,
  Camera,
  ShoppingCart,
  Heart,
  Clock,
  Smartphone,
  ChevronRight,
  Globe2,
  UserCheck,
  Activity,
  DollarSign,
  BarChart3,
  Target,
  Award,
  CheckCircle2,
  Info,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapchatIntelligenceData } from '@/lib/data-loader'

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
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
}

export default function SnapchatPage() {
  const { data } = useSnapchatIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-platinum-400 flex items-center gap-3"
        >
          <div className="animate-spin h-8 w-8 border-2 border-platinum border-t-transparent rounded-full" />
          Loading Snapchat intelligence data...
        </motion.div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts, platformOverview, transparencyReportH1_2025, topInfluencers, arCampaigns, advertisingPricing, advertisingPerformance, shoppingBehavior, governmentEngagement, mediaPartners, uaeTopics, platformComparison, middleEastBreakdown, demographicReach, privacySafety } = data
  const { users, penetration, sentiment, engagement, botActivity, censorship } = metrics

  // Sentiment data for pie chart
  const sentimentData = sentiment?.breakdown ? [
    { name: 'Positive', value: sentiment.breakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentiment.breakdown.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 48, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 32, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 20, color: CHART_COLORS.rose },
  ]

  // Engagement metrics for bar chart
  const engagementData = [
    { metric: 'Avg Views', value: engagement?.avgViews || 12000, color: CHART_COLORS.platinum },
    { metric: 'Time Spent (min)', value: engagement?.avgTimeSpent || 30, color: CHART_COLORS.emerald },
    { metric: 'Daily Opens', value: 30, color: CHART_COLORS.gold },
  ]

  // Platform comparison data
  const platformComparisonData = platformComparison ? [
    { platform: 'Facebook', users: platformComparison.facebook, color: CHART_COLORS.denim },
    { platform: 'LinkedIn', users: platformComparison.linkedin, color: CHART_COLORS.platinum },
    { platform: 'YouTube', users: platformComparison.youtube, color: CHART_COLORS.rose },
    { platform: 'Instagram', users: platformComparison.instagram, color: CHART_COLORS.purple },
    { platform: 'Snapchat', users: platformComparison.snapchat, color: CHART_COLORS.gold },
    { platform: 'X', users: platformComparison.x, color: CHART_COLORS.platinum },
  ] : []

  // Middle East breakdown data
  const meBreakdownData = middleEastBreakdown ? [
    { country: 'Saudi Arabia', users: middleEastBreakdown.uae?.istizada || 13400000, color: CHART_COLORS.emerald },
    { country: 'UAE', users: middleEastBreakdown.uae?.istizada || 1950000, color: CHART_COLORS.gold },
    { country: 'Egypt', users: middleEastBreakdown.egypt?.istizada || 2650000, color: CHART_COLORS.platinum },
    { country: 'Turkey', users: middleEastBreakdown.turkey?.istizada || 8500000, color: CHART_COLORS.denim },
  ] : []

  // Bot activity data
  const botData = [
    { name: 'Bot Activity', value: botActivity?.estimatedBotPercent || 5, color: CHART_COLORS.rose },
    { name: 'Authentic', value: 100 - (botActivity?.estimatedBotPercent || 5), color: CHART_COLORS.emerald },
  ]

  // AR Campaign data
  const arData = arCampaigns?.arRamadanMall2025 ? [
    { metric: 'Users Reached (M)', value: arCampaigns.arRamadanMall2025.usersReached / 1000000 },
    { metric: 'Impressions (M)', value: arCampaigns.arRamadanMall2025.impressions / 1000000 },
    { metric: 'Avg Session (sec)', value: arCampaigns.arRamadanMall2025.avgSessionTime },
    { metric: 'Social Shares (K)', value: arCampaigns.arRamadanMall2025.socialShares / 1000 },
  ] : []

  // Shopping behavior data
  const shoppingData = shoppingBehavior ? [
    { metric: 'Love to Shop', value: shoppingBehavior.loveToShop, color: CHART_COLORS.emerald },
    { metric: 'Primary Hobby', value: shoppingBehavior.shoppingAsPrimaryHobby, color: CHART_COLORS.gold },
    { metric: 'Discover via Ads', value: shoppingBehavior.discoverViaSocialAds, color: CHART_COLORS.platinum },
    { metric: 'Share Brands', value: shoppingBehavior.shareBrandsWithFriends, color: CHART_COLORS.denim },
  ] : []

  // Key narratives formatted
  const narrativesData = keyNarratives?.slice(0, 6) || []

  // Government events data
  const govEvents = governmentEngagement?.events || []

  // Top influencers data
  const topInf = topInfluencers?.slice(0, 10) || []

  // Media partners
  const partners = mediaPartners?.partners || []

  // Transparency enforcement data
  const enforcementData = transparencyReportH1_2025?.enforcementByCategory?.slice(0, 6) || []

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
          <Badge variant="default" className="mb-2 bg-gradient-platinum text-navy-950">
            <Ghost className="h-3 w-3 mr-1" />
            SOCIAL MEDIA
          </Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-platinum-500 tracking-tight">
            Snapchat & Ephemeral Content
          </h1>
          <p className="mt-2 text-platinum-400 text-lg">
            {data.description || 'Ephemeral content, AR filters, Discover content, and youth engagement on Snapchat'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="gap-2 border-platinum/50 text-platinum-500 hover:bg-platinum/10 backdrop-blur-sm"
          >
            <Ghost className="h-4 w-4" />
            View Discover
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2 shadow-lg shadow-platinum/20">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="UAE Users"
          value={users?.toLocaleString() || '5,090,000'}
          previousValue={(users || 5090000) - 515000}
          unit="users"
          icon={<Users className="h-6 w-6" />}
          gradient="indigo"
          status="info"
        />
        <MetricCard
          title="Market Penetration"
          value={`${penetration || 45.4}%`}
          previousValue={(penetration || 45.4) - 2}
          unit="population"
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment?.score || 58}
          previousValue={(sentiment?.score || 58) - 3}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Dark Social Score"
          value={data.darkSocialScore || 25}
          previousValue={(data.darkSocialScore || 25) + 5}
          icon={<Eye className="h-6 w-6" />}
          gradient="gold"
        />
      </motion.div>

      {/* Additional Key Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Daily App Opens"
          value="30+"
          icon={<Smartphone className="h-6 w-6" />}
          gradient="indigo"
          status="info"
        />
        <MetricCard
          title="Time Spent"
          value={`${engagement?.avgTimeSpent || 30}`}
          unit="min/day"
          icon={<Clock className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Gen Z Adoption"
          value={`${demographicReach?.uaeAdoptionRate || 51.8}%`}
          icon={<UserCheck className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="YoY Growth"
          value="+11.3%"
          previousValue={10.5}
          icon={<Activity className="h-6 w-6" />}
          gradient="denim"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="government">Government</TabsTrigger>
          <TabsTrigger value="influencers">Influencers</TabsTrigger>
          <TabsTrigger value="ar">AR & Tech</TabsTrigger>
          <TabsTrigger value="advertising">Advertising</TabsTrigger>
          <TabsTrigger value="transparency">Transparency</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel
              title="Snapchat Platform Overview"
              description="Ephemeral content analytics and engagement patterns in UAE"
            >
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Sentiment Distribution */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Heart className="h-5 w-5 text-rose-400" />
                        Sentiment Distribution
                      </CardTitle>
                      <CardDescription>User sentiment breakdown on Snapchat UAE</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={sentimentData}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  {/* Bot Activity Analysis */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-emerald-400" />
                        Bot Activity Analysis
                      </CardTitle>
                      <CardDescription>Estimated bot presence on platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={botData}
                        height={250}
                        showLegend={true}
                      />
                      <div className="mt-4 text-center">
                        <span className="text-2xl font-bold text-rose-400">{botActivity?.estimatedBotPercent || 5}%</span>
                        <p className="text-sm text-platinum-400">Estimated Bot Activity</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Platform Comparison */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-platinum-400" />
                      Platform Comparison (UAE Users in Millions)
                    </CardTitle>
                    <CardDescription>Snapchat vs other social platforms in UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={platformComparisonData}
                      xAxisKey="platform"
                      bars={[
                        { dataKey: 'users', name: 'Users (M)', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                {/* Trending Content */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-amber-400" />
                      Trending Content
                    </CardTitle>
                    <CardDescription>What UAE Snapchat users are engaging with</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {(metrics?.sentiment?.trending || ['AR filters', 'Discover content', 'Map stories', '#uae', '#inabudhabi']).map((item, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="border-platinum/50 text-platinum-500 bg-platinum/5 backdrop-blur-sm"
                        >
                          <Sparkles className="h-3 w-3 mr-1" />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Key Concerns */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-400" />
                      Key Concerns
                    </CardTitle>
                    <CardDescription>User concerns identified in engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(metrics?.sentiment?.keyConcerns || ['Privacy concerns', 'Location tracking', 'Content moderation']).map((concern, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 backdrop-blur-sm p-3"
                        >
                          <AlertTriangle className="h-4 w-4 text-amber-400" />
                          <span className="text-platinum-200">{concern}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Key Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Key Narratives on Snapchat" description="Dominant narratives and content themes">
              <div className="grid gap-6 lg:grid-cols-2">
                {narrativesData.map((narrative, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="glass-card hover:border-platinum/30 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{narrative.topic}</CardTitle>
                          <Badge
                            variant={narrative.sentiment === 'positive' ? 'default' : narrative.sentiment === 'negative' ? 'destructive' : 'secondary'}
                            className={narrative.sentiment === 'positive' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : ''}
                          >
                            {narrative.sentiment}
                          </Badge>
                        </div>
                        <CardDescription>Prevalence: {narrative.prevalence}%</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-platinum-300 mb-4">{narrative.narrative}</p>
                        <div className="space-y-2">
                          <p className="text-sm text-platinum-400">Sources:</p>
                          <div className="flex flex-wrap gap-1">
                            {narrative.source?.split(',').map((s, sIdx) => (
                              <Badge key={sIdx} variant="outline" className="text-xs border-platinum-600 text-platinum-300">
                                {s.trim()}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4">
                          <Progress value={narrative.prevalence} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Engagement Analytics" description="User engagement patterns on Snapchat UAE">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-platinum-400" />
                      Engagement Metrics
                    </CardTitle>
                    <CardDescription>Average engagement per content piece</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={engagementData}
                      xAxisKey="metric"
                      bars={[
                        { dataKey: 'value', name: 'Value', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-3">
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-platinum-400 flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Average Views
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-platinum-400">
                        {engagement?.avgViews?.toLocaleString() || '12,000'}
                      </div>
                      <p className="text-sm text-platinum-400 mt-1">per snap</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-platinum-400 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Time Spent
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-emerald-400">
                        {engagement?.avgTimeSpent || 30}
                        <span className="text-lg ml-1">min</span>
                      </div>
                      <p className="text-sm text-platinum-400 mt-1">daily average</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-platinum-400 flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        Daily Opens
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-amber-400">
                        30+
                      </div>
                      <p className="text-sm text-platinum-400 mt-1">times per day</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Shopping Behavior */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5 text-emerald-400" />
                      Shopping Behavior (% of Snapchatters)
                    </CardTitle>
                    <CardDescription>Snapchat vs Non-Snapchatters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={shoppingData}
                      xAxisKey="metric"
                      bars={[
                        { dataKey: 'value', name: 'Value %', color: CHART_COLORS.emerald },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                {/* Middle East Breakdown */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe2 className="h-5 w-5 text-navy-400" />
                      Middle East User Breakdown
                    </CardTitle>
                    <CardDescription>Snapchat users across MENA region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={meBreakdownData}
                      xAxisKey="country"
                      bars={[
                        { dataKey: 'users', name: 'Users', color: CHART_COLORS.denim },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Government Tab */}
        <TabsContent value="government" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Government Presence on Snapchat" description="Official government accounts and their reach">
              {/* Government Events Timeline */}
              <Card className="glass-card mb-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    Government Engagement Timeline
                  </CardTitle>
                  <CardDescription>Key government partnerships and initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {govEvents.map((event, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4 p-3 rounded-lg border border-platinum-700/30 bg-platinum-800/20"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/10 text-platinum-500">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-platinum-200">{event.event}</p>
                          <p className="text-sm text-platinum-400">{event.details}</p>
                          <Badge variant="outline" className="mt-2 border-platinum/30 text-platinum-500 text-xs">
                            {event.date}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Verified Government Accounts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-platinum-400" />
                    Verified Government Accounts
                  </CardTitle>
                  <CardDescription>Official UAE government accounts on Snapchat</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {(governmentAccounts || []).map((account, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700/30 bg-platinum-800/20 p-4 hover:bg-platinum-800/40 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/10 text-platinum-500">
                              <Camera className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{account.handle}</p>
                              <p className="text-sm text-platinum-400">{account.type || account.platform}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            {account.followers > 0 && (
                              <Badge variant="outline" className="text-emerald-400 border-emerald-500/30">
                                {account.followers?.toLocaleString()} followers
                              </Badge>
                            )}
                            {account.verified && (
                              <Badge variant="outline" className="ml-2 border-platinum/30 text-platinum-500">
                                <Shield className="h-3 w-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Influencers Tab */}
        <TabsContent value="influencers" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Top Influencers on Snapchat" description="Leading content creators by follower count">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-amber-400" />
                    Top 10 Influencers
                  </CardTitle>
                  <CardDescription>Ranked by followers (in millions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-3">
                      {topInf.map((influencer, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700/30 bg-platinum-800/20 p-4 hover:bg-platinum-800/40 transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                              idx < 3 ? 'bg-amber-500/20 text-amber-400' : 'bg-platinum/10 text-platinum-500'
                            }`}>
                              {idx + 1}
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{influencer.name}</p>
                              <p className="text-sm text-platinum-400">{influencer.profession}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-platinum-400">
                              {(influencer.followers / 1000000).toFixed(1)}M
                            </p>
                            <p className="text-xs text-platinum-400">
                              {(influencer.storyViews / 1000000000).toFixed(1)}B views
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Media Partners */}
              <Card className="glass-card mt-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-navy-400" />
                    Media Partners ({mediaPartners?.partnerCount || 20})
                  </CardTitle>
                  <CardDescription>Content partners on Snapchat Discover</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {partners.map((partner, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-platinum/30 text-platinum-500 bg-platinum/5"
                      >
                        {partner}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* AR & Tech Tab */}
        <TabsContent value="ar" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="AR & Technology" description="Augmented reality experiences and tech innovations">
              <div className="space-y-6">
                {/* AR Ramadan Mall */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-amber-400" />
                      AR Ramadan Mall 2025
                    </CardTitle>
                    <CardDescription>Immersive AR shopping experience</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-4">
                      <div className="text-center p-4 rounded-lg bg-platinum-800/30">
                        <p className="text-3xl font-bold text-amber-400">
                          {((arCampaigns?.arRamadanMall2025?.usersReached || 16800000) / 1000000).toFixed(1)}M
                        </p>
                        <p className="text-sm text-platinum-400">Users Reached</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-platinum-800/30">
                        <p className="text-3xl font-bold text-platinum-400">
                          {((arCampaigns?.arRamadanMall2025?.impressions || 250000000) / 1000000).toFixed(0)}M
                        </p>
                        <p className="text-sm text-platinum-400">Impressions</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-platinum-800/30">
                        <p className="text-3xl font-bold text-emerald-400">
                          {arCampaigns?.arRamadanMall2025?.avgSessionTime || 26}+
                        </p>
                        <p className="text-sm text-platinum-400">Avg Session (sec)</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-platinum-800/30">
                        <p className="text-3xl font-bold text-navy-400">
                          +{arCampaigns?.arRamadanMall2025?.yoyIncrease || 30.25}%
                        </p>
                        <p className="text-sm text-platinum-400">YoY Increase</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AR Stats */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Global AR Engagement</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-300">Daily AR Users</span>
                        <span className="font-bold text-platinum-400">350M+</span>
                      </div>
                      <Progress value={87.5} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-300">MENA AR Daily</span>
                        <span className="font-bold text-emerald-400">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-300">GCC AR Engagement</span>
                        <span className="font-bold text-amber-400">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Lens Studio Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-300">AR Creators</span>
                        <span className="font-bold text-platinum-400">400,000+</span>
                      </div>
                      <Progress value={80} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-300">Lenses Created</span>
                        <span className="font-bold text-emerald-400">4M+</span>
                      </div>
                      <Progress value={90} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-300">AI Lens Boost</span>
                        <span className="font-bold text-amber-400">25-45%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </CardContent>
                  </Card>
                </div>

                {/* Participating Brands */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">AR Ramadan Mall 2025 Brands</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {(arCampaigns?.arRamadanMall2025?.participatingBrands || ['Givenchy', 'NiceOne', 'Al Majed Oud', 'Faces', 'Max Fashion', 'Tecno', 'Adfaz', 'Almarai', 'Keeta']).map((brand, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="border-platinum/30 text-platinum-500 bg-platinum/5"
                        >
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Advertising Tab */}
        <TabsContent value="advertising" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Advertising & Commerce" description="Ad formats, pricing, and performance metrics">
              <div className="space-y-6">
                {/* Pricing */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-emerald-400" />
                      Advertising Pricing
                    </CardTitle>
                    <CardDescription>Cost structures for Snapchat ads</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 lg:grid-cols-3">
                      <div className="p-4 rounded-lg bg-platinum-800/30 border border-platinum-700/30">
                        <p className="text-sm text-platinum-400">Sponsored Lens (Sun-Wed)</p>
                        <p className="text-2xl font-bold text-platinum-400">$450,000<span className="text-sm text-platinum-400">/day</span></p>
                      </div>
                      <div className="p-4 rounded-lg bg-platinum-800/30 border border-platinum-700/30">
                        <p className="text-sm text-platinum-400">Sponsored Lens (Thu-Sat)</p>
                        <p className="text-2xl font-bold text-amber-400">$500,000<span className="text-sm text-platinum-400">/day</span></p>
                      </div>
                      <div className="p-4 rounded-lg bg-platinum-800/30 border border-platinum-700/30">
                        <p className="text-sm text-platinum-400">Sponsored Lens (Holidays)</p>
                        <p className="text-2xl font-bold text-rose-400">$700,000+<span className="text-sm text-platinum-400">/day</span></p>
                      </div>
                      <div className="p-4 rounded-lg bg-platinum-800/30 border border-platinum-700/30">
                        <p className="text-sm text-platinum-400">Discover Ads</p>
                        <p className="text-2xl font-bold text-emerald-400">$50,000+<span className="text-sm text-platinum-400">/day</span></p>
                      </div>
                      <div className="p-4 rounded-lg bg-platinum-800/30 border border-platinum-700/30">
                        <p className="text-sm text-platinum-400">Snap Ads CPM</p>
                        <p className="text-2xl font-bold text-platinum-400">$1.88</p>
                      </div>
                      <div className="p-4 rounded-lg bg-platinum-800/30 border border-platinum-700/30">
                        <p className="text-sm text-platinum-400">Geo Filters</p>
                        <p className="text-2xl font-bold text-navy-400">$5-$1,000+</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Performance */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-400" />
                      Advertising Performance
                    </CardTitle>
                    <CardDescription>Key performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-3">
                      <div className="text-center p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <p className="text-4xl font-bold text-emerald-400">+{advertisingPerformance?.roiVsChannelAverage || 14}%</p>
                        <p className="text-sm text-platinum-400 mt-1">ROI vs Channel Avg</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-platinum/10 border border-platinum/20">
                        <p className="text-4xl font-bold text-platinum-400">5x</p>
                        <p className="text-sm text-platinum-400 mt-1">More Active Attention</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-amber-500/10 border border-gold-500/20">
                        <p className="text-4xl font-bold text-amber-400">25%</p>
                        <p className="text-sm text-platinum-400 mt-1">GCC Digital Sales Share</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Campaign Results */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Campaign Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/30">
                      <span className="text-platinum-300">Fashion AR Lens Sales Increase</span>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">+{advertisingPerformance?.fashionARLensSalesIncrease || 20}%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/30">
                      <span className="text-platinum-300">Snapfrequnt Engagement Rate</span>
                      <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">{advertisingPerformance?.snapfrequntEngagementRate || 40}%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/30">
                      <span className="text-platinum-300">Giving Movement ROAS Increase</span>
                      <Badge className="bg-navy-500/20 text-navy-400 border-navy-500/30">+{advertisingPerformance?.givingMovementROASIncrease || 15}%</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Transparency Tab */}
        <TabsContent value="transparency" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Transparency Report H1 2025" description="Content moderation and enforcement data">
              <div className="space-y-6">
                {/* Overview Stats */}
                <div className="grid gap-6 lg:grid-cols-4">
                  <Card className="glass-card">
                    <CardContent className="pt-6 text-center">
                      <p className="text-4xl font-bold text-platinum-400">
                        {(transparencyReportH1_2025?.totalEnforcements || 49857).toLocaleString()}
                      </p>
                      <p className="text-sm text-platinum-400 mt-1">Total Enforcements</p>
                    </CardContent>
                  </Card>
                  <Card className="glass-card">
                    <CardContent className="pt-6 text-center">
                      <p className="text-4xl font-bold text-emerald-400">
                        {(transparencyReportH1_2025?.totalUniqueAccounts || 30829).toLocaleString()}
                      </p>
                      <p className="text-sm text-platinum-400 mt-1">Unique Accounts</p>
                    </CardContent>
                  </Card>
                  <Card className="glass-card">
                    <CardContent className="pt-6 text-center">
                      <p className="text-4xl font-bold text-amber-400">
                        {(transparencyReportH1_2025?.proactiveDetectionEnforcements || 15907).toLocaleString()}
                      </p>
                      <p className="text-sm text-platinum-400 mt-1">Proactive Detection</p>
                    </CardContent>
                  </Card>
                  <Card className="glass-card">
                    <CardContent className="pt-6 text-center">
                      <p className="text-4xl font-bold text-rose-400">
                        {(transparencyReportH1_2025?.cseaAccountsDisabled || 1661).toLocaleString()}
                      </p>
                      <p className="text-sm text-platinum-400 mt-1">CSEA Accounts Disabled</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Enforcement by Category */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-platinum-400" />
                      Enforcement by Category
                    </CardTitle>
                    <CardDescription>Breakdown of content policy enforcements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-3">
                        {enforcementData.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/30 bg-platinum-800/20"
                          >
                            <div className="flex-1">
                              <p className="font-semibold text-platinum-200">{item.category}</p>
                              <p className="text-sm text-platinum-400">{item.enforcements.toLocaleString()} enforcements</p>
                            </div>
                            <div className="text-right">
                              <Badge variant="outline" className="border-platinum/30 text-platinum-500">
                                {item.uniqueAccounts.toLocaleString()} accounts
                              </Badge>
                              <p className="text-xs text-platinum-400 mt-1">{item.medianTurnaround}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Privacy & Safety */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-rose-400" />
                      Privacy & Safety Incidents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {(privacySafety || [
                        { incident: 'Snap Map Bug', date: 'November 1, 2018', details: 'TRA warning - location exposure to all users worldwide' },
                        { incident: 'Family Center Launch', date: 'September 14, 2022', details: 'Parental controls with UAE Ministry of Possibilities' },
                        { incident: 'Here For You Portal', date: 'October 11, 2021', details: 'Mental health resources with UAE Digital Wellbeing Council' },
                        { incident: 'Privacy Court Case', date: 'January 9, 2026', details: 'Dh25,000 compensation for unauthorized photos' },
                        { incident: 'Children Pact', date: 'February 19, 2025', details: 'Leading member of UAE Digital Wellbeing Pact' },
                      ]).map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 p-3 rounded-lg border border-platinum-700/30 bg-platinum-800/20"
                        >
                          <AlertCircle className="h-5 w-5 text-rose-400 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-semibold text-platinum-200">{item.incident}</p>
                            <p className="text-sm text-platinum-400">{item.details}</p>
                            <Badge variant="outline" className="mt-2 border-rose-500/30 text-rose-400 text-xs">
                              {item.date}
                            </Badge>
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
      </Tabs>

      {/* Sources Footer */}
      <motion.div variants={fadeInUp} className="text-center text-platinum-500 text-sm">
        <p>Data sourced from {data.sources?.length || 35} references including DataReportal, Snap Inc, and government transparency reports</p>
        <p className="mt-1">Last updated: {data.lastUpdated || '2026-04-27'}</p>
      </motion.div>
    </motion.div>
  )
}