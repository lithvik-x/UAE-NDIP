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
  Users,
  MessageSquare,
  Share2,
  ThumbsUp,
  Eye,
  Shield,
  Globe,
  TrendingUp,
  UserCheck,
  Flag,
  FileText,
  ShoppingCart,
  Briefcase,
  Home,
  Heart,
  Cross,
  Dumbbell,
  ExternalLink,
  TrendingDown,
  Activity,
  DollarSign,
  User,
  UsersRound,
  BookOpen,
  Phone,
  Mail,
  ShoppingBag,
  Building,
  Car,
  Utensils,
  PawPrint,
  Paintbrush,
  Church,
  Sunrise,
  TrendingDown as TrendingDownIcon,
} from 'lucide-react'
import {
  useFacebookIntelligenceData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'

// Import comprehensive data from facebook-data.ts
import {
  // Expat Demographics
  expatDemographics,
  // Expat Groups
  majorExpatGroups,
  dubaiExpatGroups,
  // Job Groups
  jobGroups,
  // Housing Groups
  housingGroups,
  // Business Groups
  businessGroups,
  // Women Groups
  womenGroups,
  // Religious Groups
  religiousGroups,
  religiousHarmonyNote,
  // Fitness Groups
  fitnessGroups,
  // Government Pages
  federalGovernmentPages,
  policeFacebookPages,
  // Media Pages
  mediaFacebookPages,
  khaleejTimesDetails,
  gulfNewsDetails,
  // Scam Statistics
  scamStatistics,
  recentScamAlerts,
  abuDhabiPoliceContact,
  organizedTourismScam,
  aiPoweredScamsStats,
  commonScamTypes,
  preventionTips,
  commonScamsInUAE,
  // Price Tracking
  priceTrackingPlatform,
  // Facebook Statistics
  facebookUserStatistics,
  datareportalStats,
  napoleonCatStats,
  ageDemographics,
  statcounterStats,
  // CIB Operations
  cibOperations,
  commonTactics,
  // Regulations
  traRegulations,
  // Trending
  trendingContent,
  // Priority Areas
  priorityIntelligenceAreas,
  // Cultural Events
  culturalEvents,
  // Key Persons
  keyPersons,
  // Key Organizations
  keyOrganizations,
  // Sources
  sources,
} from '@/lib/data/social/facebook-data'

export default function FacebookPage() {
  const { data } = useFacebookIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Facebook intelligence data...</div>
      </div>
    )
  }

  const { metrics, botActivity, censorship, keyNarratives, governmentAccounts } = data

  // Enhanced sentiment data for pie chart
  const sentimentData = metrics?.sentiment?.breakdown ? [
    { name: 'Positive', value: metrics.sentiment.breakdown.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics.sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.sentiment.breakdown.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 38, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 32, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 30, color: CHART_COLORS.rose },
  ]

  // Age demographics breakdown (from comprehensive MD data)
  const ageDemographicsData = ageDemographics.map((item) => ({
    age: item.ageGroup,
    female: item.femalePercent,
    male: item.malePercent,
  }))

  // Market share data (from MD file)
  const marketShareData = [
    { name: 'Facebook', value: statcounterStats.facebookMarketShare, color: CHART_COLORS.navy },
    { name: 'Twitter (X)', value: statcounterStats.twitterXMarketShare, color: CHART_COLORS.platinum },
    { name: 'YouTube', value: statcounterStats.youtubeMarketShare, color: CHART_COLORS.rose },
    { name: 'Instagram', value: statcounterStats.instagramMarketShare, color: CHART_COLORS.gold },
    { name: 'Pinterest', value: statcounterStats.pinterestMarketShare, color: CHART_COLORS.emerald },
    { name: 'Reddit', value: statcounterStats.redditMarketShare, color: CHART_COLORS.denim },
  ]

  // Engagement metrics
  const engagementData = [
    { name: 'Likes', value: metrics?.engagement?.likes || 85, color: CHART_COLORS.gold },
    { name: 'Comments', value: metrics?.engagement?.comments || 28, color: CHART_COLORS.navy },
    { name: 'Shares', value: metrics?.engagement?.shares || 42, color: CHART_COLORS.platinum },
  ]

  // User statistics comparison
  const userStatsComparison = facebookUserStatistics.map((stat) => ({
    source: stat.source,
    users: parseFloat(stat.users.replace(/[^0-9.]/g, '')),
    female: stat.femalePercent,
    male: stat.malePercent,
  }))

  // Narrative prevalence data
  const narrativeData = keyNarratives?.map((n, i) => ({
    topic: n.topic,
    prevalence: n.prevalence,
    sentiment: n.sentiment,
    color: i === 0 ? CHART_COLORS.gold : i === 1 ? CHART_COLORS.navy : i === 2 ? CHART_COLORS.platinum : CHART_COLORS.emerald,
  })) || []

  // Scam statistics data
  const scamStatsData = [
    { label: 'Meta Removed Ads', value: scamStatistics.metaRemovedAds2025, icon: Shield, color: CHART_COLORS.rose },
    { label: 'Scam Accounts', value: scamStatistics.metaRemovedAccounts2025, icon: AlertTriangle, color: CHART_COLORS.gold },
    { label: 'Residents Targeted', value: scamStatistics.residentsExperiencingScams, icon: Users, color: CHART_COLORS.navy },
    { label: 'Avg Loss', value: scamStatistics.averageLoss, icon: DollarSign, color: CHART_COLORS.rose },
  ]

  // CIB operation data (UAE/Egypt)
  const cibDataUAE = {
    accountsRemoved: cibOperations[0].accountsRemoved,
    pagesRemoved: cibOperations[0].pagesRemoved,
    groupsRemoved: cibOperations[0].groupsRemoved,
    pageFollowers: cibOperations[0].pageFollowers,
    advertisingSpend: cibOperations[0].advertisingSpend,
    attribution: cibOperations[0].attribution,
  }

  // CIB operation data (Saudi Arabia)
  const cibDataKSA = {
    accountsRemoved: cibOperations[1].accountsRemoved,
    pagesRemoved: cibOperations[1].pagesRemoved,
    groupsRemoved: cibOperations[1].groupsRemoved,
    pageFollowers: cibOperations[1].pageFollowers,
    advertisingSpend: cibOperations[1].advertisingSpend,
    attribution: cibOperations[1].attribution,
  }

  // Expat groups data (top 4)
  const expatGroupsData = majorExpatGroups.slice(0, 4).map((group) => ({
    name: group.name,
    members: group.members,
    icon: group.name.includes('Cats') || group.name.includes('Dogs') ? PawPrint :
          group.name.includes('Bites') ? Utensils :
          group.name.includes('Interior') ? Paintbrush : Users,
    color: group.name.includes('Dubai') ? CHART_COLORS.gold :
           group.name.includes('Dirham') ? CHART_COLORS.emerald :
           group.name.includes('Abu Dhabi') ? CHART_COLORS.navy : CHART_COLORS.rose,
  }))

  // Expat demographics data
  const expatDemographicsData = expatDemographics.breakdown.map((item) => ({
    nationality: item.nationality,
    percent: item.percent,
  }))

  // Gender distribution for NapoleonCat
  const genderDistribution = [
    { name: 'Female', value: napoleonCatStats.womenPercent, color: CHART_COLORS.rose },
    { name: 'Male', value: napoleonCatStats.menPercent, color: CHART_COLORS.navy },
  ]

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      <AnimatePresence mode="wait">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-start justify-between"
        >
          <div>
            <Badge variant="gold" className="mb-2">SOCIAL INTELLIGENCE</Badge>
            <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">Facebook & Meta Platforms</h1>
            <p className="mt-2 text-platinum-400">
              Meta&apos;s Facebook ecosystem in UAE — engagement, censorship, and influence operations
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
              <FileText className="h-4 w-4" />
              View Reports
            </Button>
            <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
              <Shield className="h-4 w-4" />
              Analyze CIB
            </Button>
          </div>
        </motion.div>

        {/* Key Metrics - Premium Glassmorphism Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          <AnimatePresence>
            <MetricCard
              title="UAE Users (NapoleonCat)"
              value={`${(napoleonCatStats.totalUsers / 1000000).toFixed(1)}M`}
              previousValue={9.6}
              unit="million"
              icon={<Users className="h-6 w-6" />}
              gradient="gold"
              status="success"
              className="glass-panel"
            />
            <MetricCard
              title="Market Share"
              value={`${statcounterStats.facebookMarketShare}%`}
              previousValue={74.5}
              icon={<TrendingUp className="h-6 w-6" />}
              gradient="denim"
              status="success"
              className="glass-panel"
            />
            <MetricCard
              title="Bot Activity"
              value={`${botActivity?.estimatedBotPercent || 34}%`}
              previousValue={31}
              icon={<AlertTriangle className="h-6 w-6" />}
              gradient="emerald"
              status={botActivity?.coordinatedInauthentic ? 'warning' : 'success'}
              className="glass-panel"
            />
            <MetricCard
              title="Censorship"
              value={censorship?.level?.toUpperCase() || 'PARTIAL'}
              icon={<Shield className="h-6 w-6" />}
              gradient="indigo"
              className="glass-panel"
            />
            <MetricCard
              title="Expat Population"
              value="88%"
              icon={<Globe className="h-6 w-6" />}
              gradient="denim"
              status="success"
              className="glass-panel"
            />
          </AnimatePresence>
        </motion.div>

        {/* Scam Alert Banner */}
        {botActivity?.coordinatedInauthentic && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg border border-rose-500/50 bg-rose-500/10 p-4 glass-panel"
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-rose-500" />
              <div className="flex-1">
                <h3 className="font-semibold text-rose-400">Coordinated Inauthentic Behavior Detected</h3>
                <p className="text-sm text-platinum-400">UAE/Egypt influence operation linked to Newave (UAE) and New Waves (Egypt)</p>
              </div>
              <Badge variant="destructive" className="text-xs">CIB ACTIVE</Badge>
            </div>
          </motion.div>
        )}

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="glass-panel" scrollable>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="narratives">Key Narratives</TabsTrigger>
            <TabsTrigger value="government">Government</TabsTrigger>
            <TabsTrigger value="scams">Scam Center</TabsTrigger>
            <TabsTrigger value="groups">Expat Groups</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="regulations">Regulations</TabsTrigger>
          </TabsList>

          {/* Overview Tab - Enhanced Charts */}
          <TabsContent value="overview" className="space-y-6">
            <GlassPanel title="Facebook Intelligence Overview" description="Meta platform activity in UAE">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Market Share */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">UAE Social Media Market Share</CardTitle>
                      <CardDescription>Platform distribution (March 2026)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={marketShareData}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  {/* Gender Distribution */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Gender Distribution (UAE)</CardTitle>
                      <CardDescription>NapoleonCat December 2025: {napoleonCatStats.totalUsers.toLocaleString()} users</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={genderDistribution}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                      <CardDescription>Overall sentiment on Facebook</CardDescription>
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
                      <CardTitle className="text-lg">Age Demographics</CardTitle>
                      <CardDescription>UAE Facebook user age breakdown by gender</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {ageDemographicsData.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-platinum-200">{item.age}</span>
                              <div className="flex gap-4">
                                <span className="text-xs text-rose-400">F: {item.female}%</span>
                                <span className="text-xs text-navy-400">M: {item.male}%</span>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              <Progress value={item.female} className="h-2 flex-1" />
                              <Progress value={item.male} className="h-2 flex-1" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* User Statistics Comparison */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Facebook User Statistics Comparison</CardTitle>
                    <CardDescription>Data from multiple sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={userStatsComparison.map((stat) => ({
                        source: stat.source.replace('Social Media Stats', '').replace('Digital ', ''),
                        users: stat.users,
                        color: stat.source.includes('DataReportal') ? CHART_COLORS.gold :
                               stat.source.includes('NapoleonCat') ? CHART_COLORS.navy : CHART_COLORS.platinum,
                      }))}
                      xAxisKey="source"
                      bars={[
                        { dataKey: 'users', name: 'Users (millions)', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                {/* CIB Alert - Both Operations */}
                {botActivity?.coordinatedInauthentic && (
                  <Card className="glass-card border-rose-500/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                        <AlertCircle className="h-5 w-5" />
                        Coordinated Inauthentic Behavior (CIB) Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {/* UAE/Egypt Operation */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-rose-300 mb-3">Operation 1: UAE & Egypt (August 2019)</h4>
                        <div className="grid gap-4 sm:grid-cols-4 mb-3">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30"
                          >
                            <p className="text-xs text-platinum-400">Accounts Removed</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataUAE.accountsRemoved}</p>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30"
                          >
                            <p className="text-xs text-platinum-400">Pages Removed</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataUAE.pagesRemoved}</p>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30"
                          >
                            <p className="text-xs text-platinum-400">Page Followers</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataUAE.pageFollowers}</p>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30"
                          >
                            <p className="text-xs text-platinum-400">Ad Spend</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataUAE.advertisingSpend}</p>
                          </motion.div>
                        </div>
                        <p className="text-sm text-platinum-400">
                          Attribution: <span className="text-rose-400">{cibDataUAE.attribution}</span>
                        </p>
                      </div>

                      {/* Saudi Arabia Operation */}
                      <div>
                        <h4 className="text-sm font-semibold text-rose-300 mb-3">Operation 2: Saudi Arabia (August 2019)</h4>
                        <div className="grid gap-4 sm:grid-cols-4 mb-3">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30"
                          >
                            <p className="text-xs text-platinum-400">Accounts Removed</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataKSA.accountsRemoved}</p>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30"
                          >
                            <p className="text-xs text-platinum-400">Pages Removed</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataKSA.pagesRemoved}</p>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30"
                          >
                            <p className="text-xs text-platinum-400">Page Followers</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataKSA.pageFollowers}</p>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30"
                          >
                            <p className="text-xs text-platinum-400">Ad Spend</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataKSA.advertisingSpend}</p>
                          </motion.div>
                        </div>
                        <p className="text-sm text-platinum-400">
                          Attribution: <span className="text-rose-400">{cibDataKSA.attribution}</span>
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {(botActivity?.indicators || ['CIB operations detected', 'UAE/Egypt influence operation']).map((indicator: string, i: number) => (
                          <Badge key={i} variant="outline" className="text-rose-400 border-rose-500/50">
                            {indicator}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Trending Content */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Trending Content in UAE Facebook</CardTitle>
                    <CardDescription>Popular content categories (2025-2026)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                      {trendingContent.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-platinum-800/50 p-3 text-center"
                        >
                          <span className={`text-2xl mb-2 block ${item.sentiment === 'Positive' ? 'text-emerald-400' : item.sentiment === 'Negative' ? 'text-rose-400' : 'text-platinum-400'}`}>
                            {item.sentiment === 'Positive' ? '✓' : item.sentiment === 'Negative' ? '!' : '•'}
                          </span>
                          <p className="text-sm font-medium text-platinum-200">{item.contentCategory}</p>
                          <p className="text-xs text-platinum-400 mt-1">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Engagement Tab */}
          <TabsContent value="engagement" className="space-y-6">
            <GlassPanel title="Engagement Metrics" description="Facebook engagement analysis for UAE">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Average Engagement Rates</CardTitle>
                    <CardDescription>Per-post engagement metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={engagementData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Avg per Post', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Trending Hashtags</CardTitle>
                      <CardDescription>Most used hashtags in UAE</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[250px]">
                        <div className="space-y-2">
                          {(metrics?.engagement?.trendingHashtags || ['#UAE', '#DubaiLife', '#UAEExpat', '#UAEBusiness', '#Dubai']).map((tag: string, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 hover:bg-platinum-800/70 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <ThumbsUp className="h-4 w-4 text-gold-700" />
                                <span className="text-sm font-medium text-platinum-200">{tag}</span>
                              </div>
                              <Badge variant="outline" className="text-gold-700">#{idx + 1}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Content Types Performance</CardTitle>
                      <CardDescription>Engagement by content format</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { type: 'Video', engagement: 89, color: CHART_COLORS.gold },
                          { type: 'Photo', engagement: 65, color: CHART_COLORS.navy },
                          { type: 'Link', engagement: 34, color: CHART_COLORS.platinum },
                          { type: 'Text', engagement: 28, color: CHART_COLORS.emerald },
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-platinum-200">{item.type}</span>
                              <span className="text-sm font-bold text-platinum-200">{item.engagement}%</span>
                            </div>
                            <Progress value={item.engagement} className="h-2" />
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Cultural Events */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Cultural Events</CardTitle>
                    <CardDescription>Major events in UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {culturalEvents.map((event, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-platinum-800/50 p-3 text-center"
                        >
                          <p className="text-sm font-medium text-platinum-200">{event.event}</p>
                          <p className="text-xs text-platinum-400 mt-1">{event.description}</p>
                          <Badge variant="success" className="mt-2 text-xs">{event.sentiment}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Narratives Tab - Enhanced Narrative Cards */}
          <TabsContent value="narratives" className="space-y-6">
            <GlassPanel title="Key Narratives Analysis" description="Prevailing narratives on Facebook in UAE">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Narrative Prevalence</CardTitle>
                    <CardDescription>Most prevalent topics on UAE Facebook</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={narrativeData}
                      xAxisKey="topic"
                      bars={[
                        { dataKey: 'prevalence', name: 'Prevalence %', color: CHART_COLORS.navy },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {keyNarratives?.map((narrative: { topic: string; narrative: string; prevalence: number; sentiment: string; source: string }, idx: number) => (
                    <motion.Card
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass-card overflow-hidden"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge
                            variant={narrative.sentiment === 'positive' ? 'success' : narrative.sentiment === 'negative' ? 'destructive' : 'outline'}
                            className="text-xs"
                          >
                            {narrative.sentiment}
                          </Badge>
                          <span className="text-xl font-bold text-gold-700">{narrative.prevalence}%</span>
                        </div>
                        <h4 className="font-semibold text-platinum-200 mb-1">{narrative.topic}</h4>
                        <p className="text-sm text-platinum-400 mb-2 line-clamp-2">{narrative.narrative}</p>
                        <div className="text-xs text-platinum-500 truncate">
                          Source: {narrative.source}
                        </div>
                      </CardContent>
                    </motion.Card>
                  ))}
                </div>

                {/* Priority Intelligence Areas */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Priority Intelligence Areas</CardTitle>
                    <CardDescription>Ranked by importance for UAE monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {priorityIntelligenceAreas.map((area, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-4 rounded-lg bg-platinum-800/50 p-3"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-700/20 text-gold-700 font-bold">
                            {area.priority}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-platinum-200">{area.area}</p>
                            <p className="text-xs text-platinum-400">{area.justification}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Government Presence Tab */}
          <TabsContent value="government" className="space-y-6">
            <GlassPanel title="Government Accounts" description="Official UAE government presence on Facebook">
              <div className="space-y-6">
                {/* Police Pages */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Police Facebook Pages</CardTitle>
                    <CardDescription>Law enforcement presence with largest followings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {policeFacebookPages.filter(p => p.likes > 0).map((page, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <Shield className="h-6 w-6 text-gold-700" />
                            <div>
                              <p className="font-semibold text-platinum-200">{page.entity}</p>
                              <p className="text-xs text-platinum-400">{page.url}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-gold-700">{(page.likes / 1000000).toFixed(2)}M</p>
                            <p className="text-xs text-platinum-400">likes</p>
                            {page.talkingAbout && (
                              <p className="text-xs text-navy-400">{page.talkingAbout.toLocaleString()} talking</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Federal Government Pages */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Federal Government Pages</CardTitle>
                    <CardDescription>Ministry and official accounts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {federalGovernmentPages.map((page, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3"
                          >
                            <div className="flex items-center gap-3">
                              <Building className="h-5 w-5 text-navy-500" />
                              <span className="text-sm text-platinum-200">{page.entity}</span>
                            </div>
                            <span className="text-sm font-medium text-gold-700">
                              {page.likes > 0 ? page.likes.toLocaleString() : 'N/A'} likes
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Censorship Statistics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Censorship Statistics</CardTitle>
                    <CardDescription>Meta content compliance in UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Flag className="h-5 w-5 text-gold-700" />
                          <span className="text-sm font-medium text-platinum-200">Compliance Rate</span>
                        </div>
                        <span className="text-xl font-bold text-gold-700">{censorship?.complianceRate || 82}%</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-navy-500" />
                          <span className="text-sm font-medium text-platinum-200">Gov Requests</span>
                        </div>
                        <span className="text-xl font-bold text-navy-500">{censorship?.governmentRequests?.toLocaleString() || '1,893'}</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <AlertCircle className="h-5 w-5 text-rose-500" />
                          <span className="text-sm font-medium text-platinum-200">Content Removed</span>
                        </div>
                        <span className="text-xl font-bold text-rose-500">{censorship?.contentRemoved?.toLocaleString() || '15,234'}</span>
                      </motion.div>
                    </div>
                    <p className="mt-4 text-sm text-platinum-400">
                      {censorship?.notes || 'Meta CIB operations detected targeting UAE/Egypt influence network'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Scam Center Tab - Comprehensive Scam Data */}
          <TabsContent value="scams" className="space-y-6">
            <GlassPanel title="Scam Alert Center" description="Facebook marketplace and platform scam intelligence">
              <div className="space-y-6">
                {/* Scam Statistics Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {scamStatsData.map((stat, idx) => (
                    <motion.Card
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-card"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <stat.icon className={`h-5 w-5 ${stat.color}`} />
                          <span className="text-sm font-medium text-platinum-400">{stat.label}</span>
                        </div>
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      </CardContent>
                    </motion.Card>
                  ))}
                </div>

                {/* Additional Scam Statistics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Scam Impact Statistics</CardTitle>
                    <CardDescription>GASA/Trend Micro 2024 Report</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Yearly Victims</p>
                        <p className="text-xl font-bold text-rose-500">{scamStatistics.yearlyResidentsLosingToScams}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Monthly Targeting Rate</p>
                        <p className="text-xl font-bold text-rose-500">{scamStatistics.monthlyScamAttemptRate}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Victims Losing Money</p>
                        <p className="text-xl font-bold text-rose-500">{scamStatistics.victimsLosingMoney}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Recovery Rate</p>
                        <p className="text-xl font-bold text-emerald-500">{scamStatistics.recoveryRate}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Abu Dhabi Police Contact */}
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                      <Phone className="h-5 w-5" />
                      Abu Dhabi Police Scam Reporting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-gold-700" />
                        <div>
                          <p className="text-xs text-platinum-400">Hotline</p>
                          <p className="text-lg font-bold text-platinum-200">{abuDhabiPoliceContact.hotline}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageSquare className="h-5 w-5 text-gold-700" />
                        <div>
                          <p className="text-xs text-platinum-400">Text</p>
                          <p className="text-lg font-bold text-platinum-200">{abuDhabiPoliceContact.text}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gold-700" />
                        <div>
                          <p className="text-xs text-platinum-400">Email</p>
                          <p className="text-lg font-bold text-platinum-200">{abuDhabiPoliceContact.email}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Common Scam Types */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Common Scam Types on Facebook Marketplace</CardTitle>
                    <CardDescription>Prevalent fraud patterns targeting UAE residents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {commonScamTypes.map((scam, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <AlertTriangle className={`h-4 w-4 ${scam.severity === 'High' ? 'text-rose-500' : 'text-gold-700'}`} />
                            <div>
                              <p className="text-sm font-medium text-platinum-200">{scam.scamType}</p>
                              <p className="text-xs text-platinum-400">{scam.description}</p>
                            </div>
                          </div>
                          <Badge variant={scam.severity === 'High' ? 'destructive' : 'outline'} className="text-xs">
                            {scam.severity.toLowerCase()}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Prevention Tips */}
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                      <Shield className="h-5 w-5" />
                      Prevention Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                      {preventionTips.map((tip, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center gap-2 text-sm text-platinum-300"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {tip}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Expat Groups Tab - Community Data */}
          <TabsContent value="groups" className="space-y-6">
            <GlassPanel title="Expat Community Groups" description="Major Facebook groups for UAE expats">
              <div className="space-y-6">
                {/* Top Groups */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {expatGroupsData.map((group, idx) => (
                    <motion.Card
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-card"
                    >
                      <CardContent className="p-4 text-center">
                        <group.icon className={`h-8 w-8 mx-auto mb-2 ${group.color}`} />
                        <h4 className="font-semibold text-platinum-200 mb-1 truncate">{group.name}</h4>
                        <p className="text-2xl font-bold text-gold-700">{group.members}</p>
                        <p className="text-xs text-platinum-400">members</p>
                      </CardContent>
                    </motion.Card>
                  ))}
                </div>

                {/* All Major Groups */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">All Major Expat Groups</CardTitle>
                    <CardDescription>Groups with 10,000+ members</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {majorExpatGroups.map((group, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3"
                          >
                            <div className="flex items-center gap-3">
                              <Users className="h-4 w-4 text-gold-700" />
                              <span className="text-sm text-platinum-200">{group.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-gold-700">{group.members}</Badge>
                              <ExternalLink className="h-3 w-3 text-platinum-500" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Group Categories */}
                <div className="grid gap-6 lg:grid-cols-3">
                  {/* Job Groups */}
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-sm">
                        <Briefcase className="h-4 w-4 text-gold-700" />
                        Job Groups ({jobGroups.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-2">
                          {jobGroups.slice(0, 6).map((group, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 5 }}
                              className="flex items-center justify-between rounded bg-platinum-800/30 p-2 text-sm"
                            >
                              <span className="text-platinum-300 truncate flex-1">{group.name}</span>
                              <ExternalLink className="h-3 w-3 text-platinum-500 flex-shrink-0" />
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* Housing Groups */}
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-sm">
                        <Home className="h-4 w-4 text-navy-500" />
                        Housing Groups ({housingGroups.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-2">
                          {housingGroups.slice(0, 6).map((group, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 5 }}
                              className="flex items-center justify-between rounded bg-platinum-800/30 p-2 text-sm"
                            >
                              <span className="text-platinum-300 truncate flex-1">{group.name}</span>
                              <ExternalLink className="h-3 w-3 text-platinum-500 flex-shrink-0" />
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* Business Groups */}
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-sm">
                        <ShoppingCart className="h-4 w-4 text-emerald-500" />
                        Business Groups ({businessGroups.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-2">
                          {businessGroups.slice(0, 6).map((group, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 5 }}
                              className="flex items-center justify-between rounded bg-platinum-800/30 p-2 text-sm"
                            >
                              <span className="text-platinum-300 truncate flex-1">{group.name}</span>
                              <ExternalLink className="h-3 w-3 text-platinum-500 flex-shrink-0" />
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>

                {/* Women/Mother Groups */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <Heart className="h-4 w-4 text-rose-500" />
                      Women & Mother Groups
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {womenGroups.slice(0, 4).map((group, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="rounded-lg bg-platinum-800/50 p-3"
                        >
                          <p className="text-sm font-medium text-platinum-200 truncate">{group.name}</p>
                          <p className="text-xs text-platinum-400">{group.members} members</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Religious & Fitness Groups */}
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Religious Groups */}
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-sm">
                        <Church className="h-4 w-4 text-navy-500" />
                        Religious Groups
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {religiousGroups.map((group, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded bg-platinum-800/30 p-2">
                            <span className="text-sm text-platinum-300">{group.name}</span>
                            <Badge variant="outline" className="text-xs">{group.focus}</Badge>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-emerald-400 mt-3">{religiousHarmonyNote.text}</p>
                    </CardContent>
                  </Card>

                  {/* Fitness Groups */}
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-sm">
                        <Dumbbell className="h-4 w-4 text-gold-700" />
                        Fitness & Hobby Groups
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[150px]">
                        <div className="space-y-2">
                          {fitnessGroups.map((group, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded bg-platinum-800/30 p-2">
                              <span className="text-sm text-platinum-300">{group.name}</span>
                              <ExternalLink className="h-3 w-3 text-platinum-500" />
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>

                {/* Expat Demographics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Expat Demographics in UAE</CardTitle>
                    <CardDescription>Nationality breakdown of UAE expat population</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {expatDemographicsData.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{item.nationality}</span>
                            <span className="text-lg font-bold text-platinum-200">{item.percent}%</span>
                          </div>
                          <Progress value={item.percent} className="h-3" />
                        </motion.div>
                      ))}
                      <p className="text-xs text-platinum-500 mt-4">
                        Source: {expatDemographics.source} | Total expats as % of UAE population: <span className="text-gold-700 font-semibold">{expatDemographics.expatsAsPercentOfPopulation}%</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Media Tab */}
          <TabsContent value="media" className="space-y-6">
            <GlassPanel title="Media Presence" description="Major news organizations on Facebook">
              <div className="space-y-6">
                {/* Media Pages */}
                <div className="grid gap-4 lg:grid-cols-2">
                  {mediaFacebookPages.map((media, idx) => (
                    <motion.Card
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="glass-card"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-platinum-200">{media.outlet}</h3>
                            <p className="text-sm text-platinum-400">{media.description}</p>
                          </div>
                          <Badge variant="outline" className="text-gold-700 border-gold">Very High Credibility</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                            <p className="text-2xl font-bold text-gold-700">{(media.likes / 1000000).toFixed(2)}M</p>
                            <p className="text-xs text-platinum-400">Total Likes</p>
                          </div>
                          <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                            <p className="text-2xl font-bold text-navy-500">{media.talkingAbout.toLocaleString()}</p>
                            <p className="text-xs text-platinum-400">Talking About</p>
                          </div>
                        </div>
                      </CardContent>
                    </motion.Card>
                  ))}
                </div>

                {/* Gulf News Details */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Gulf News Platform Details</CardTitle>
                    <CardDescription>Social media operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Facebook Launch</p>
                        <p className="text-lg font-bold text-platinum-200">{gulfNewsDetails.facebookLaunchDate}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Twitter Launch</p>
                        <p className="text-lg font-bold text-platinum-200">{gulfNewsDetails.twitterLaunchDate}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Operating Model</p>
                        <p className="text-lg font-bold text-platinum-200">24/7</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Historical Daily Growth</p>
                        <p className="text-lg font-bold text-emerald-500">{gulfNewsDetails.historicalDailyGrowth}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-platinum-400 italic">"{gulfNewsDetails.quote}"</p>
                    <p className="text-xs text-platinum-500 mt-2">- {gulfNewsDetails.portalManager}, Gulf News Portal Manager</p>
                  </CardContent>
                </Card>

                {/* Khaleej Times Details */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Khaleej Times Platform Details</CardTitle>
                    <CardDescription>UAE's first English newspaper</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Location</p>
                        <p className="text-lg font-bold text-platinum-200">{khaleejTimesDetails.location}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Established</p>
                        <p className="text-lg font-bold text-platinum-200">1979</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Anniversary</p>
                        <p className="text-lg font-bold text-gold-700">{khaleejTimesDetails.anniversary}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Credibility</p>
                        <p className="text-lg font-bold text-emerald-500">{khaleejTimesDetails.credibility}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Regulations Tab */}
          <TabsContent value="regulations" className="space-y-6">
            <GlassPanel title="UAE Social Media Regulations" description="TRA regulatory framework for Facebook">
              <div className="space-y-6">
                {/* Governing Authority */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Governing Authority</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8 text-gold-700" />
                      <div>
                        <p className="text-xl font-bold text-platinum-200">{traRegulations.governingAuthority}</p>
                        <p className="text-sm text-platinum-400">Social media governance in UAE</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Penalties */}
                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-rose-400">Penalties for Violations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {traRegulations.penalties.map((penalty, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="rounded-lg bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-platinum-200">{penalty.violation}</span>
                            <Badge variant="destructive">{penalty.imprisonment}</Badge>
                          </div>
                          <p className="text-lg font-bold text-rose-400">{penalty.fine}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Criminal Offenses */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Criminal Offenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {traRegulations.criminalOffenses.map((offense, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2 text-sm"
                        >
                          <AlertCircle className="h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span className="text-platinum-300">{offense}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Influencer Regulations 2026 */}
                <Card className="glass-card border-gold-700/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-gold-700">Influencer Regulations (2026)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {traRegulations.influencerRegulations2026.map((rule, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="rounded-lg bg-platinum-800/50 p-3"
                        >
                          <p className="font-medium text-platinum-200">{rule.rule}</p>
                          <p className="text-sm text-platinum-400">{rule.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Price Tracking Platform */}
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-400">UAE Essential Goods Price Platform</CardTitle>
                    <CardDescription>Launched April 2026</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-2xl font-bold text-emerald-500">{priceTrackingPlatform.itemsTracked}</p>
                        <p className="text-xs text-platinum-400">Items Tracked</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-2xl font-bold text-emerald-500">{priceTrackingPlatform.retailOutlets}</p>
                        <p className="text-xs text-platinum-400">Retail Outlets</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-lg font-bold text-emerald-500">Daily</p>
                        <p className="text-xs text-platinum-400">Update Frequency</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-sm font-bold text-emerald-500">{priceTrackingPlatform.initiativeBy}</p>
                        <p className="text-xs text-platinum-400">Initiative By</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sources */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Data Sources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {sources.map((source, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            className="flex items-center justify-between rounded bg-platinum-800/30 p-2"
                          >
                            <span className="text-sm text-platinum-300 truncate flex-1">{source.name}</span>
                            <Badge variant="outline" className="text-xs ml-2">Tier {source.tier}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>
        </Tabs>
      </AnimatePresence>
    </div>
  )
}
