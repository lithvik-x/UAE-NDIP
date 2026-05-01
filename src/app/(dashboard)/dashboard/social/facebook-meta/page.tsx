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
  Users,
  MessageSquare,
  Share2,
  ThumbsUp,
  Shield,
  Globe,
  TrendingUp,
  Flag,
  FileText,
  ShoppingCart,
  Briefcase,
  Home,
  Heart,
  Dumbbell,
  ExternalLink,
  Activity,
  DollarSign,
  Building,
  Phone,
  Mail,
  PawPrint,
  Utensils,
  Paintbrush,
  Church,
  TrendingDown,
  Search,
  Eye,
  UserCheck,
  Target,
  Radar,
} from 'lucide-react'
import { useFacebookIntelligenceData } from '@/lib/data-loader'
import { motion } from 'framer-motion'

import {
  expatDemographics,
  majorExpatGroups,
  dubaiExpatGroups,
  jobGroups,
  housingGroups,
  businessGroups,
  womenGroups,
  religiousGroups,
  religiousHarmonyNote,
  fitnessGroups,
  federalGovernmentPages,
  policeFacebookPages,
  mediaFacebookPages,
  khaleejTimesDetails,
  gulfNewsDetails,
  scamStatistics,
  recentScamAlerts,
  abuDhabiPoliceContact,
  organizedTourismScam,
  aiPoweredScamsStats,
  commonScamTypes,
  preventionTips,
  commonScamsInUAE,
  priceTrackingPlatform,
  facebookUserStatistics,
  datareportalStats,
  napoleonCatStats,
  ageDemographics,
  statcounterStats,
  cibOperations,
  commonTactics,
  traRegulations,
  trendingContent,
  priorityIntelligenceAreas,
  culturalEvents,
  keyPersons,
  keyOrganizations,
  sources,
  keyQueryPatterns,
  platformStatsSummary,
  governmentPriorityStats,
  expatCommunityKeyStats,
  executionMetadata,
  dataEnrichmentMetadata,
  scamAlertGroups,
  abuDhabiCommunityGroups,
  sharjahCommunityGroups,
  queryTemplates,
  sentimentByTopic,
  metaTransparencyReport,
} from '@/lib/data/social/facebook-data'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function FacebookMetaPage() {
  const { data } = useFacebookIntelligenceData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Facebook/Meta intelligence data...</div>
      </div>
    )
  }

  const { metrics, botActivity, censorship, keyNarratives, governmentAccounts } = data

  // Chart data
  const sentimentData = [
    { name: 'Positive', value: metrics?.sentiment?.positive || 38, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics?.sentiment?.neutral || 32, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics?.sentiment?.negative || 30, color: CHART_COLORS.rose },
  ]

  const marketShareData = [
    { name: 'Facebook', value: statcounterStats.facebookMarketShare, color: CHART_COLORS.navy },
    { name: 'Twitter (X)', value: statcounterStats.twitterXMarketShare, color: CHART_COLORS.platinum },
    { name: 'YouTube', value: statcounterStats.youtubeMarketShare, color: CHART_COLORS.rose },
    { name: 'Instagram', value: statcounterStats.instagramMarketShare, color: CHART_COLORS.gold },
    { name: 'Pinterest', value: statcounterStats.pinterestMarketShare, color: CHART_COLORS.emerald },
    { name: 'Reddit', value: statcounterStats.redditMarketShare, color: CHART_COLORS.denim },
  ]

  const genderDistribution = [
    { name: 'Female', value: napoleonCatStats.womenPercent, color: CHART_COLORS.rose },
    { name: 'Male', value: napoleonCatStats.menPercent, color: CHART_COLORS.navy },
  ]

  const ageDemographicsData = ageDemographics.map((item) => ({
    age: item.ageGroup,
    female: item.femalePercent,
    male: item.malePercent,
  }))

  const expatDemographicsData = expatDemographics.breakdown.map((item) => ({
    nationality: item.nationality,
    percent: item.percent,
  }))

  const narrativeData = keyNarratives?.map((n, i) => ({
    topic: n.topic,
    prevalence: n.prevalence,
    sentiment: n.sentiment,
    color: i === 0 ? CHART_COLORS.gold : i === 1 ? CHART_COLORS.navy : i === 2 ? CHART_COLORS.platinum : CHART_COLORS.emerald,
  })) || []

  const scamStatsData = [
    { label: 'Meta Removed Ads', value: scamStatistics.metaRemovedAds2025, icon: Shield, color: CHART_COLORS.rose },
    { label: 'Scam Accounts', value: scamStatistics.metaRemovedAccounts2025, icon: AlertTriangle, color: CHART_COLORS.gold },
    { label: 'Residents Targeted', value: scamStatistics.residentsExperiencingScams, icon: Users, color: CHART_COLORS.navy },
    { label: 'Avg Loss', value: scamStatistics.averageLoss, icon: DollarSign, color: CHART_COLORS.rose },
  ]

  const cibDataUAE = {
    accountsRemoved: cibOperations[0].accountsRemoved,
    pagesRemoved: cibOperations[0].pagesRemoved,
    groupsRemoved: cibOperations[0].groupsRemoved,
    pageFollowers: cibOperations[0].pageFollowers,
    advertisingSpend: cibOperations[0].advertisingSpend,
    attribution: cibOperations[0].attribution,
  }

  const cibDataKSA = {
    accountsRemoved: cibOperations[1].accountsRemoved,
    pagesRemoved: cibOperations[1].pagesRemoved,
    groupsRemoved: cibOperations[1].groupsRemoved,
    pageFollowers: cibOperations[1].pageFollowers,
    advertisingSpend: cibOperations[1].advertisingSpend,
    attribution: cibOperations[1].attribution,
  }

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 text-indigo-400 border-indigo-500/50">
            <Target className="w-3 h-3 mr-1" />
            PLATFORM INTELLIGENCE
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Facebook / Meta Intelligence
            </span>
          </h1>
          <p className="mt-2 text-platinum-400">
            Comprehensive Meta ecosystem analysis for UAE — users, groups, scams, and influence operations
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10">
            <FileText className="h-4 w-4" />
            Reports
          </Button>
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white gap-2">
            <Radar className="h-4 w-4" />
            Monitor CIB
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard
          title="UAE Facebook Users"
          value={`${(napoleonCatStats.totalUsers / 1000000).toFixed(1)}M`}
          icon={<Users className="h-6 w-6" />}
          gradient="indigo"
          status="success"
          className="glass-panel"
        />
        <MetricCard
          title="Market Share"
          value={`${statcounterStats.facebookMarketShare}%`}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
          className="glass-panel"
        />
        <MetricCard
          title="Bot Activity"
          value={`${botActivity?.estimatedBotPercent || 34}%`}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="gold"
          status={botActivity?.coordinatedInauthentic ? 'warning' : 'success'}
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
        <MetricCard
          title="Censorship Level"
          value="PARTIAL"
          icon={<Shield className="h-6 w-6" />}
          gradient="rose"
          className="glass-panel"
        />
        <MetricCard
          title="Scam Victims/Year"
          value="40,000+"
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="warning"
          className="glass-panel"
        />
      </motion.div>

      {/* CIB Alert Banner */}
      {botActivity?.coordinatedInauthentic && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-lg border border-rose-500/50 bg-rose-500/10 p-4 glass-panel"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-rose-500" />
            <div className="flex-1">
              <h3 className="font-semibold text-rose-400">Coordinated Inauthentic Behavior (CIB) Detected</h3>
              <p className="text-sm text-platinum-400">
                UAE/Egypt operation linked to Newave (UAE) and New Waves (Egypt) marketing firms — {cibDataUAE.accountsRemoved} accounts, {cibDataUAE.pagesRemoved} pages removed
              </p>
            </div>
            <Badge variant="destructive" className="text-xs">CIB ACTIVE</Badge>
          </div>
        </motion.div>
      )}

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="scams">Scam Center</TabsTrigger>
          <TabsTrigger value="government">Government</TabsTrigger>
          <TabsTrigger value="groups">Expat Groups</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="narratives">Narratives</TabsTrigger>
          <TabsTrigger value="regulations">Regulations</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Facebook Intelligence Overview" description="Meta platform activity in UAE">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Market Share */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-indigo-400" />
                        UAE Social Media Market Share
                      </CardTitle>
                      <CardDescription>Platform distribution (March 2026)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart data={marketShareData} height={280} showLegend={true} />
                    </CardContent>
                  </Card>

                  {/* Sentiment Distribution */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Heart className="h-5 w-5 text-rose-400" />
                        Sentiment Distribution
                      </CardTitle>
                      <CardDescription>Overall sentiment on Facebook in UAE</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart data={sentimentData} height={280} showLegend={true} />
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Gender Distribution */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Gender Distribution (NapoleonCat Dec 2025)</CardTitle>
                      <CardDescription>{napoleonCatStats.totalUsers.toLocaleString()} total users</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart data={genderDistribution} height={280} showLegend={true} />
                    </CardContent>
                  </Card>

                  {/* Age Demographics */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Age Demographics by Gender</CardTitle>
                      <CardDescription>UAE Facebook user age breakdown</CardDescription>
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
                                <span className="text-xs text-indigo-400">M: {item.male}%</span>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              <Progress value={item.female} className="h-2 flex-1 bg-rose-500/20" />
                              <Progress value={item.male} className="h-2 flex-1 bg-indigo-500/20" />
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
                    <CardDescription>Data from multiple industry sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={facebookUserStatistics.map((stat) => ({
                        source: stat.source.replace('Social Media Stats', '').replace('Digital ', '').replace('Reportal', 'DR').replace('NapoleonCat', 'NapCat').replace('World Population Review', 'WPR'),
                        users: parseFloat(stat.users.replace(/[^0-9.]/g, '')),
                        female: stat.femalePercent,
                        male: stat.malePercent,
                      }))}
                      xAxisKey="source"
                      bars={[
                        { dataKey: 'users', name: 'Users (millions)', color: CHART_COLORS.indigo },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                {/* Trending Content */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Trending Content in UAE Facebook (2025-2026)</CardTitle>
                    <CardDescription>Popular content categories</CardDescription>
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
                            {item.sentiment === 'Positive' ? '+' : item.sentiment === 'Negative' ? '!' : '•'}
                          </span>
                          <p className="text-sm font-medium text-platinum-200">{item.contentCategory}</p>
                          <p className="text-xs text-platinum-400 mt-1">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CIB Details */}
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
                          <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30">
                            <p className="text-xs text-platinum-400">Accounts Removed</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataUAE.accountsRemoved}</p>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30">
                            <p className="text-xs text-platinum-400">Pages Removed</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataUAE.pagesRemoved}</p>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30">
                            <p className="text-xs text-platinum-400">Page Followers</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataUAE.pageFollowers}</p>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30">
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
                          <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30">
                            <p className="text-xs text-platinum-400">Accounts Removed</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataKSA.accountsRemoved}</p>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30">
                            <p className="text-xs text-platinum-400">Pages Removed</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataKSA.pagesRemoved}</p>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30">
                            <p className="text-xs text-platinum-400">Page Followers</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataKSA.pageFollowers}</p>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} className="rounded-lg bg-platinum-800/50 p-3 border border-rose-500/30">
                            <p className="text-xs text-platinum-400">Ad Spend</p>
                            <p className="text-xl font-bold text-rose-400">{cibDataKSA.advertisingSpend}</p>
                          </motion.div>
                        </div>
                        <p className="text-sm text-platinum-400">
                          Attribution: <span className="text-rose-400">{cibDataKSA.attribution}</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="UAE Demographics on Facebook" description="User demographics and population statistics">
              <div className="space-y-6">
                {/* Expat Demographics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Expat Demographics in UAE</CardTitle>
                    <CardDescription>Nationality breakdown of UAE expat population</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
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
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-6xl font-bold text-indigo-400">{expatDemographics.expatsAsPercentOfPopulation}%</p>
                          <p className="text-platinum-400 mt-2">Expat Population</p>
                          <p className="text-xs text-platinum-500 mt-1">Source: Remitly 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Platform Statistics Summary */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Statistics Summary</CardTitle>
                    <CardDescription>Facebook in UAE context</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                      <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                        <p className="text-2xl font-bold text-indigo-400">{platformStatsSummary.totalActiveSocialMediaUsers}</p>
                        <p className="text-xs text-platinum-400">Active Social Users</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                        <p className="text-2xl font-bold text-emerald-400">{platformStatsSummary.internetPenetration}</p>
                        <p className="text-xs text-platinum-400">Internet Penetration</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                        <p className="text-2xl font-bold text-gold">{platformStatsSummary.facebookUsersNapoleonCat / 1000000}M</p>
                        <p className="text-xs text-platinum-400">Facebook Users</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                        <p className="text-2xl font-bold text-rose-400">{platformStatsSummary.facebookMarketShare}%</p>
                        <p className="text-xs text-platinum-400">Market Share</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                        <p className="text-2xl font-bold text-platinum-400">{platformStatsSummary.yoyGrowth}</p>
                        <p className="text-xs text-platinum-400">YoY Growth</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Persons */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Persons</CardTitle>
                    <CardDescription>Notable individuals in UAE Facebook ecosystem</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {keyPersons.map((person, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-platinum-800/50 p-4"
                        >
                          <p className="font-semibold text-platinum-200">{person.name}</p>
                          <p className="text-sm text-indigo-400 mt-1">{person.role}</p>
                          <p className="text-xs text-platinum-500 mt-1">Source: {person.source}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Scam Center Tab */}
        <TabsContent value="scams" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Scam Alert Center" description="Facebook marketplace and platform scam intelligence">
              <div className="space-y-6">
                {/* Scam Statistics Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

                {/* Scam Impact Statistics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Scam Impact Statistics (GASA/Trend Micro 2024)</CardTitle>
                    <CardDescription>Annual scam targeting and financial impact</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-xs text-platinum-400">Yearly Victims</p>
                        <p className="text-xl font-bold text-rose">{scamStatistics.yearlyResidentsLosingToScams}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-xs text-platinum-400">Monthly Targeting</p>
                        <p className="text-xl font-bold text-rose">{scamStatistics.monthlyScamAttemptRate}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-xs text-platinum-400">Victims Losing Money</p>
                        <p className="text-xl font-bold text-rose">{scamStatistics.victimsLosingMoney}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-xs text-platinum-400">Average Loss</p>
                        <p className="text-xl font-bold text-rose">{scamStatistics.averageLoss}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-xs text-platinum-400">Recovery Rate</p>
                        <p className="text-xl font-bold text-emerald">{scamStatistics.recoveryRate}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-xs text-platinum-400">Trust Reduction</p>
                        <p className="text-xl font-bold text-rose">{scamStatistics.trustReductionDueToScams}</p>
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
                        <Phone className="h-5 w-5 text-gold" />
                        <div>
                          <p className="text-xs text-platinum-400">Hotline</p>
                          <p className="text-lg font-bold text-platinum-200">{abuDhabiPoliceContact.hotline}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageSquare className="h-5 w-5 text-gold" />
                        <div>
                          <p className="text-xs text-platinum-400">Text</p>
                          <p className="text-lg font-bold text-platinum-200">{abuDhabiPoliceContact.text}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gold" />
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
                            <AlertTriangle className={`h-4 w-4 ${scam.severity === 'High' ? 'text-rose-500' : 'text-gold'}`} />
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
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          {tip}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Scam Alerts */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Scam Alerts (2025-2026)</CardTitle>
                    <CardDescription>Verified scam warnings from authorities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {recentScamAlerts.map((alert, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3"
                          >
                            <div className="flex items-center gap-3">
                              <AlertTriangle className="h-4 w-4 text-rose-400" />
                              <div>
                                <p className="text-sm font-medium text-platinum-200">{alert.alertType}</p>
                                <p className="text-xs text-platinum-400">{alert.date}</p>
                              </div>
                            </div>
                            <Badge variant={alert.credibility === 'Very High' ? 'default' : 'outline'} className="text-xs">
                              {alert.credibility}
                            </Badge>
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

        {/* Government Tab */}
        <TabsContent value="government" className="space-y-6">
          <motion.div variants={fadeInUp}>
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
                            <Shield className="h-6 w-6 text-gold" />
                            <div>
                              <p className="font-semibold text-platinum-200">{page.entity}</p>
                              <p className="text-xs text-platinum-400">{page.url}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-gold">{(page.likes / 1000000).toFixed(2)}M</p>
                            <p className="text-xs text-platinum-400">likes</p>
                            {page.talkingAbout && (
                              <p className="text-xs text-indigo-400">{page.talkingAbout.toLocaleString()} talking</p>
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
                              <Building className="h-5 w-5 text-indigo" />
                              <span className="text-sm text-platinum-200">{page.entity}</span>
                            </div>
                            <span className="text-sm font-medium text-gold">
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
                      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4">
                        <div className="flex items-center gap-3">
                          <Flag className="h-5 w-5 text-gold" />
                          <span className="text-sm font-medium text-platinum-200">Compliance Rate</span>
                        </div>
                        <span className="text-xl font-bold text-gold">{censorship?.complianceRate || 82}%</span>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-indigo" />
                          <span className="text-sm font-medium text-platinum-200">Gov Requests</span>
                        </div>
                        <span className="text-xl font-bold text-indigo">{censorship?.governmentRequests?.toLocaleString() || '1,893'}</span>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4">
                        <div className="flex items-center gap-3">
                          <AlertCircle className="h-5 w-5 text-rose" />
                          <span className="text-sm font-medium text-platinum-200">Content Removed</span>
                        </div>
                        <span className="text-xl font-bold text-rose">{censorship?.contentRemoved?.toLocaleString() || '15,234'}</span>
                      </motion.div>
                    </div>
                    <p className="mt-4 text-sm text-platinum-400">
                      {censorship?.notes || 'Meta CIB operations detected targeting UAE/Egypt influence network'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Expat Groups Tab */}
        <TabsContent value="groups" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Expat Community Groups" description="Major Facebook groups for UAE expats">
              <div className="space-y-6">
                {/* Top Groups with Members */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {majorExpatGroups.slice(0, 4).map((group, idx) => (
                    <motion.Card
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-card"
                    >
                      <CardContent className="p-4 text-center">
                        <Users className={`h-8 w-8 mx-auto mb-2 ${idx === 0 ? 'text-gold' : idx === 1 ? 'text-indigo-400' : idx === 2 ? 'text-emerald-400' : 'text-rose-400'}`} />
                        <h4 className="font-semibold text-platinum-200 mb-1 truncate">{group.name}</h4>
                        <p className="text-2xl font-bold text-gold">{group.members}</p>
                        <p className="text-xs text-platinum-400">members</p>
                      </CardContent>
                    </motion.Card>
                  ))}
                </div>

                {/* Group Categories */}
                <div className="grid gap-6 lg:grid-cols-3">
                  {/* Job Groups */}
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-sm">
                        <Briefcase className="h-4 w-4 text-gold" />
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
                        <Home className="h-4 w-4 text-indigo" />
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
                        <ShoppingCart className="h-4 w-4 text-emerald" />
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
                      <Heart className="h-4 w-4 text-rose" />
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

                {/* Religious & Fitness */}
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Religious Groups */}
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-sm">
                        <Church className="h-4 w-4 text-indigo" />
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
                        <Dumbbell className="h-4 w-4 text-gold" />
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

                {/* Abu Dhabi & Sharjah Communities */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Abu Dhabi Community Groups</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-2">
                          {abuDhabiCommunityGroups.map((group, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded bg-platinum-800/30 p-2">
                              <div>
                                <p className="text-sm text-platinum-300">{group.name}</p>
                                <p className="text-xs text-platinum-500">{group.members !== 'N/A' ? `${group.members} members` : group.purpose}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Sharjah Community Groups</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-2">
                          {sharjahCommunityGroups.map((group, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded bg-platinum-800/30 p-2">
                              <div>
                                <p className="text-sm text-platinum-300">{group.name}</p>
                                <p className="text-xs text-platinum-500">{group.focus}</p>
                              </div>
                              {group.likes !== 'N/A' && (
                                <Badge variant="outline" className="text-xs">{group.likes} likes</Badge>
                              )}
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Media Tab */}
        <TabsContent value="media" className="space-y-6">
          <motion.div variants={fadeInUp}>
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
                          <Badge variant="outline" className="text-gold border-gold">Very High Credibility</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                            <p className="text-2xl font-bold text-gold">{(media.likes / 1000000).toFixed(2)}M</p>
                            <p className="text-xs text-platinum-400">Total Likes</p>
                          </div>
                          <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                            <p className="text-2xl font-bold text-indigo">{media.talkingAbout.toLocaleString()}</p>
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
                        <p className="text-xs text-platinum-400">Daily Growth</p>
                        <p className="text-lg font-bold text-emerald">{gulfNewsDetails.historicalDailyGrowth}</p>
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
                        <p className="text-lg font-bold text-gold">{khaleejTimesDetails.anniversary}</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3">
                        <p className="text-xs text-platinum-400">Credibility</p>
                        <p className="text-lg font-bold text-emerald">Very High</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Key Narratives Analysis" description="Prevailing narratives on Facebook in UAE">
              <div className="space-y-6">
                {/* Narrative Prevalence Chart */}
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
                        { dataKey: 'prevalence', name: 'Prevalence %', color: CHART_COLORS.indigo },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                {/* Narrative Cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {keyNarratives?.map((narrative, idx) => (
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
                            variant={narrative.sentiment === 'positive' ? 'default' : narrative.sentiment === 'negative' ? 'destructive' : 'outline'}
                            className="text-xs"
                          >
                            {narrative.sentiment}
                          </Badge>
                          <span className="text-xl font-bold text-gold">{narrative.prevalence}%</span>
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
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 font-bold">
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

                {/* Sentiment by Topic */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment by Topic</CardTitle>
                    <CardDescription>Overall sentiment analysis by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {sentimentByTopic.map((topic, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                            <span className="text-sm text-platinum-200">{topic.topic}</span>
                            <Badge
                              variant={topic.overallSentiment === 'Positive' ? 'default' : topic.overallSentiment === 'Negative' ? 'destructive' : 'outline'}
                              className="text-xs"
                            >
                              {topic.overallSentiment}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Regulations Tab */}
        <TabsContent value="regulations" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="UAE Social Media Regulations" description="TRA regulatory framework for Facebook">
              <div className="space-y-6">
                {/* Governing Authority */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Governing Authority</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8 text-gold" />
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
                <Card className="glass-card border-gold/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-gold">Influencer Regulations (2026)</CardTitle>
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
                        <p className="text-2xl font-bold text-emerald">{priceTrackingPlatform.itemsTracked}</p>
                        <p className="text-xs text-platinum-400">Items Tracked</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-2xl font-bold text-emerald">{priceTrackingPlatform.retailOutlets}</p>
                        <p className="text-xs text-platinum-400">Retail Outlets</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-lg font-bold text-emerald">Daily</p>
                        <p className="text-xs text-platinum-400">Update Frequency</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                        <p className="text-sm font-bold text-emerald">{priceTrackingPlatform.initiativeBy}</p>
                        <p className="text-xs text-platinum-400">Initiative By</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Meta Transparency Report */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Meta Transparency Report</CardTitle>
                    <CardDescription>Government data requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-indigo" />
                        <span className="text-sm text-platinum-300">{metaTransparencyReport.policy}</span>
                      </div>
                      <p className="text-sm text-platinum-400">{metaTransparencyReport.reviewProcess}</p>
                      <p className="text-sm text-platinum-400">{metaTransparencyReport.possibleOutcomes}</p>
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
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Footer Metadata */}
      <motion.div variants={fadeInUp} className="text-center text-platinum-500 text-sm">
        <p>Report Generated: April 2026 | Data Enrichment Date: {dataEnrichmentMetadata.enrichmentDate}</p>
        <p className="mt-1">SSOT Version: {executionMetadata.ssotVersion} | Queries Executed: {executionMetadata.queriesExecuted}</p>
      </motion.div>
    </motion.div>
  )
}
