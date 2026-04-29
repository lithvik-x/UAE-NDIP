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
} from 'lucide-react'
import {
  useFacebookIntelligenceData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'

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

  // Age demographics breakdown
  const ageDemographicsData = [
    { age: '18-24', female: 15.5, male: 13.1, color: CHART_COLORS.gold },
    { age: '25-34', female: 43.7, male: 8.1, color: CHART_COLORS.navy },
    { age: '35-44', female: 26.8, male: 3.1, color: CHART_COLORS.platinum },
    { age: '45-54', female: 10.0, male: 0.9, color: CHART_COLORS.emerald },
    { age: '55-64', female: 2.7, male: 0.5, color: CHART_COLORS.rose },
  ]

  // Engagement metrics
  const engagementData = [
    { name: 'Likes', value: metrics?.engagement?.likes || 85, color: CHART_COLORS.gold },
    { name: 'Comments', value: metrics?.engagement?.comments || 28, color: CHART_COLORS.navy },
    { name: 'Shares', value: metrics?.engagement?.shares || 42, color: CHART_COLORS.platinum },
  ]

  // Monthly trend data
  const monthlyTrendData = [
    { month: 'Jan', users: 9.2, engagement: 142 },
    { month: 'Feb', users: 9.3, engagement: 148 },
    { month: 'Mar', users: 9.4, engagement: 155 },
    { month: 'Apr', users: 9.5, engagement: 151 },
    { month: 'May', users: 9.6, engagement: 163 },
    { month: 'Jun', users: 9.6, engagement: 158 },
    { month: 'Jul', users: 9.7, engagement: 172 },
    { month: 'Aug', users: 9.7, engagement: 168 },
    { month: 'Sep', users: 9.8, engagement: 175 },
    { month: 'Oct', users: 9.8, engagement: 182 },
    { month: 'Nov', users: 9.9, engagement: 188 },
    { month: 'Dec', users: 9.9, engagement: 195 },
  ]

  // Narrative prevalence data
  const narrativeData = keyNarratives?.map((n, i) => ({
    topic: n.topic,
    prevalence: n.prevalence,
    sentiment: n.sentiment,
    color: i === 0 ? CHART_COLORS.gold : i === 1 ? CHART_COLORS.navy : i === 2 ? CHART_COLORS.platinum : CHART_COLORS.emerald,
  })) || [
    { topic: 'Expat Life', prevalence: 85, sentiment: 'positive', color: CHART_COLORS.gold },
    { topic: 'Safety & Security', prevalence: 80, sentiment: 'positive', color: CHART_COLORS.navy },
    { topic: 'Business Opportunity', prevalence: 72, sentiment: 'positive', color: CHART_COLORS.platinum },
  ]

  // Scam statistics data
  const scamStatsData = [
    { label: 'Meta Removed Ads', value: '159M+', icon: Shield, color: CHART_COLORS.rose },
    { label: 'Scam Accounts', value: '10.9M', icon: AlertTriangle, color: CHART_COLORS.gold },
    { label: 'Residents Targeted', value: '70%', icon: Users, color: CHART_COLORS.navy },
    { label: 'Avg Loss', value: '$2,194', icon: DollarSign, color: CHART_COLORS.rose },
  ]

  // CIB operation data
  const cibData = {
    accountsRemoved: 259,
    pagesRemoved: 102,
    groupsRemoved: 5,
    pageFollowers: '13.7M+',
    advertisingSpend: '$167,000',
    attribution: 'Newave (UAE) & New Waves (Egypt)',
  }

  // Expat groups data
  const expatGroupsData = [
    { name: 'Dubai Expat Community', members: '110,000+', icon: Users, color: CHART_COLORS.gold },
    { name: 'Dirham Stretcher', members: '108,000+', icon: DollarSign, color: CHART_COLORS.emerald },
    { name: 'Abu Dhabi Q&A', members: '93,000', icon: MessageSquare, color: CHART_COLORS.navy },
    { name: 'Best Bites Abu Dhabi', members: '56,000+', icon: Heart, color: CHART_COLORS.rose },
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
            <h1 className="text-3xl font-extrabold gradient-text-gold">Facebook & Meta Platforms</h1>
            <p className="mt-2 text-slate-400">
              Meta&apos;s Facebook ecosystem in UAE — engagement, censorship, and influence operations
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
              <FileText className="h-4 w-4" />
              View Reports
            </Button>
            <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
              <Shield className="h-4 w-4" />
              Analyze CIB
            </Button>
          </div>
        </motion.div>

        {/* Key Metrics - Cycle A: Premium Glassmorphism Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence>
            <MetricCard
              title="UAE Users"
              value={metrics?.users ? `${(metrics.users / 1000000).toFixed(1)}M` : '9.7M'}
              previousValue={9.6}
              unit="million"
              icon={<Users className="h-6 w-6" />}
              gradient="gold"
              status="success"
              className="glass-panel"
            />
            <MetricCard
              title="Market Share"
              value="76.27%"
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
          </AnimatePresence>
        </motion.div>

        {/* Cycle B: Scam Alert Banner */}
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
                <p className="text-sm text-slate-400">UAE/Egypt influence operation linked to Newave (UAE) and New Waves (Egypt)</p>
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
          </TabsList>

          {/* Overview Tab - Cycle C: Enhanced Charts */}
          <TabsContent value="overview" className="space-y-6">
            <GlassPanel title="Facebook Intelligence Overview" description="Meta platform activity in UAE">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">User Growth & Engagement Trend</CardTitle>
                    <CardDescription>12-month trend of UAE Facebook users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={monthlyTrendData}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'users', name: 'Users (M)', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

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
                              <span className="text-sm font-medium text-slate-200">{item.age}</span>
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

                {/* CIB Alert */}
                {botActivity?.coordinatedInauthentic && (
                  <Card className="glass-card border-rose-500/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                        <AlertCircle className="h-5 w-5" />
                        Coordinated Inauthentic Behavior (CIB) Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-4 mb-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-slate-800/50 p-3 border border-rose-500/30"
                        >
                          <p className="text-xs text-slate-400">Accounts Removed</p>
                          <p className="text-xl font-bold text-rose-400">{cibData.accountsRemoved}</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-slate-800/50 p-3 border border-rose-500/30"
                        >
                          <p className="text-xs text-slate-400">Pages Removed</p>
                          <p className="text-xl font-bold text-rose-400">{cibData.pagesRemoved}</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-slate-800/50 p-3 border border-rose-500/30"
                        >
                          <p className="text-xs text-slate-400">Page Followers</p>
                          <p className="text-xl font-bold text-rose-400">{cibData.pageFollowers}</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg bg-slate-800/50 p-3 border border-rose-500/30"
                        >
                          <p className="text-xs text-slate-400">Ad Spend</p>
                          <p className="text-xl font-bold text-rose-400">{cibData.advertisingSpend}</p>
                        </motion.div>
                      </div>
                      <p className="text-sm text-slate-400">
                        Attribution: <span className="text-rose-400">{cibData.attribution}</span>
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {(botActivity?.indicators || ['CIB operations detected', 'UAE/Egypt influence operation']).map((indicator: string, i: number) => (
                          <Badge key={i} variant="outline" className="text-rose-400 border-rose-500/50">
                            {indicator}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
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
                              className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 hover:bg-slate-800/70 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <ThumbsUp className="h-4 w-4 text-gold" />
                                <span className="text-sm font-medium text-slate-200">{tag}</span>
                              </div>
                              <Badge variant="outline" className="text-gold">#{idx + 1}</Badge>
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
                              <span className="text-sm font-medium text-slate-200">{item.type}</span>
                              <span className="text-sm font-bold text-slate-200">{item.engagement}%</span>
                            </div>
                            <Progress value={item.engagement} className="h-2" />
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Narratives Tab - Cycle D: Enhanced Narrative Cards */}
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
                          <span className="text-xl font-bold text-gold">{narrative.prevalence}%</span>
                        </div>
                        <h4 className="font-semibold text-slate-200 mb-1">{narrative.topic}</h4>
                        <p className="text-sm text-slate-400 mb-2 line-clamp-2">{narrative.narrative}</p>
                        <div className="text-xs text-slate-500 truncate">
                          Source: {narrative.source}
                        </div>
                      </CardContent>
                    </motion.Card>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Government Presence Tab */}
          <TabsContent value="government" className="space-y-6">
            <GlassPanel title="Government Accounts" description="Official UAE government presence on Facebook">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Official Government Accounts</CardTitle>
                    <CardDescription>Verified government pages with largest followings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-3">
                        {governmentAccounts?.map((account: { handle: string; followers: number; type: string; verified: boolean; url?: string }, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.01, x: 5 }}
                            className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-all cursor-pointer"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/20 text-navy">
                                <UserCheck className="h-6 w-6" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="font-semibold text-slate-200">{account.handle}</p>
                                  {account.verified && (
                                    <Badge variant="outline" className="text-navy border-navy text-xs">Verified</Badge>
                                  )}
                                </div>
                                <p className="text-sm text-slate-400">{account.type}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-gold">{(account.followers / 1000000).toFixed(1)}M</p>
                              <p className="text-xs text-slate-400">followers</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Censorship Statistics</CardTitle>
                    <CardDescription>Meta content compliance in UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Flag className="h-5 w-5 text-gold" />
                          <span className="text-sm font-medium text-slate-200">Compliance Rate</span>
                        </div>
                        <span className="text-xl font-bold text-gold">{censorship?.complianceRate || 82}%</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-navy" />
                          <span className="text-sm font-medium text-slate-200">Gov Requests</span>
                        </div>
                        <span className="text-xl font-bold text-navy">{censorship?.governmentRequests?.toLocaleString() || '1,893'}</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <AlertCircle className="h-5 w-5 text-rose" />
                          <span className="text-sm font-medium text-slate-200">Content Removed</span>
                        </div>
                        <span className="text-xl font-bold text-rose">{censorship?.contentRemoved?.toLocaleString() || '15,234'}</span>
                      </motion.div>
                    </div>
                    <p className="mt-4 text-sm text-slate-400">
                      {censorship?.notes || 'Meta CIB operations detected targeting UAE/Egypt influence network'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Scam Center Tab - Cycle E: Comprehensive Scam Data */}
          <TabsContent value="scams" className="space-y-6">
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
                          <span className="text-sm font-medium text-slate-400">{stat.label}</span>
                        </div>
                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      </CardContent>
                    </motion.Card>
                  ))}
                </div>

                {/* Common Scam Types */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Common Scam Types on Facebook Marketplace</CardTitle>
                    <CardDescription>Prevalent fraud patterns targeting UAE residents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        { type: 'Google Voice Scams', desc: 'Verification code fraud', severity: 'high' },
                        { type: 'Defective Items', desc: 'Products that look fine in photos', severity: 'medium' },
                        { type: 'Counterfeit Goods', desc: 'Fake designer items', severity: 'medium' },
                        { type: 'Overpayment Scams', desc: 'Fake refunds', severity: 'high' },
                        { type: 'Non-Delivery', desc: 'Advance fee fraud', severity: 'high' },
                        { type: 'Fake Giveaways', desc: 'Phishing for personal info', severity: 'high' },
                        { type: 'Insurance Scams', desc: 'Fake shipping insurance', severity: 'medium' },
                        { type: 'Bait-and-Switch', desc: 'Different item delivered', severity: 'medium' },
                      ].map((scam, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <AlertTriangle className={`h-4 w-4 ${scam.severity === 'high' ? 'text-rose-500' : 'text-gold'}`} />
                            <div>
                              <p className="text-sm font-medium text-slate-200">{scam.type}</p>
                              <p className="text-xs text-slate-400">{scam.desc}</p>
                            </div>
                          </div>
                          <Badge variant={scam.severity === 'high' ? 'destructive' : 'outline'} className="text-xs">
                            {scam.severity}
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
                      {[
                        'Buy only from local sellers',
                        'Meet in public well-lit places',
                        'Check seller profiles and ratings',
                        'Compare original vs listing prices',
                        'Keep conversations on platform',
                        'Never send 2FA codes to buyers',
                        'Use trusted payment methods',
                        'Never ship before receiving payment',
                        'Avoid deals requesting personal info',
                        'Watch for price changes',
                      ].map((tip, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center gap-2 text-sm text-slate-300"
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

          {/* Expat Groups Tab - Cycle F: Community Data */}
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
                        <h4 className="font-semibold text-slate-200 mb-1 truncate">{group.name}</h4>
                        <p className="text-2xl font-bold text-gold">{group.members}</p>
                        <p className="text-xs text-slate-400">members</p>
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
                        Job Groups
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-2">
                          {['UAE Jobs & Classifieds', 'JOBS IN UAE', 'UAE Vacancies', 'JOB VACANCIES IN UAE'].map((name, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 5 }}
                              className="flex items-center justify-between rounded bg-slate-800/30 p-2 text-sm"
                            >
                              <span className="text-slate-300 truncate">{name}</span>
                              <ExternalLink className="h-3 w-3 text-slate-500" />
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
                        <Home className="h-4 w-4 text-navy" />
                        Housing Groups
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-2">
                          {['Apartments Homes For Rent in Dubai', 'Dubai Villas, Plots and Apartments', 'Abu Dhabi Rent My Villas', 'Rentals in Dubai'].map((name, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 5 }}
                              className="flex items-center justify-between rounded bg-slate-800/30 p-2 text-sm"
                            >
                              <span className="text-slate-300 truncate">{name}</span>
                              <ExternalLink className="h-3 w-3 text-slate-500" />
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
                        Business Groups
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-2">
                          {['UAE Startups and Entrepreneurs', 'Entrepreneurs Networking Group', 'Dubai Business Networking', 'Arab Business Club'].map((name, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 5 }}
                              className="flex items-center justify-between rounded bg-slate-800/30 p-2 text-sm"
                            >
                              <span className="text-slate-300 truncate">{name}</span>
                              <ExternalLink className="h-3 w-3 text-slate-500" />
                            </motion.div>
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
                      {[
                        { nationality: 'Indian', percent: 37.96, color: CHART_COLORS.gold },
                        { nationality: 'Pakistani', percent: 16.72, color: CHART_COLORS.emerald },
                        { nationality: 'Emirati', percent: 11.5, color: CHART_COLORS.navy },
                        { nationality: 'Other Nationalities', percent: 22.72, color: CHART_COLORS.platinum },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.nationality}</span>
                            <span className="text-lg font-bold text-slate-200">{item.percent}%</span>
                          </div>
                          <Progress value={item.percent} className="h-3" />
                        </motion.div>
                      ))}
                      <p className="text-xs text-slate-500 mt-4">
                        Source: Remitly 2025 | Total expats as % of UAE population: <span className="text-gold font-semibold">88%</span>
                      </p>
                    </div>
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
