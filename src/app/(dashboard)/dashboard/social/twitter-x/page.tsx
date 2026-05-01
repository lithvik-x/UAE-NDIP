'use client'

import { useState } from 'react'
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
import { ChartPie } from 'lucide-react'
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
  Repeat2,
  Heart,
  BarChart3,
  Bot,
  Flag,
  CheckCircle,
  Eye,
  Lock,
  Unlock,
  TrendingDown,
  AtSign,
  Bell,
  Link2,
  BookOpen,
  Search,
  Database,
  ShieldAlert,
  Activity,
  Clock,
  UserX,
  Server,
  Target,
  AlertOctagon,
  Scale,
  EyeOff,
  Ban,
  Network,
  MapPin,
} from 'lucide-react'
import {
  useTwitterIntelligenceData,
} from '@/lib/data-loader'

// A. Enhancement Cycle A: Core Data Extraction
export default function TwitterXAnalysisPage() {
  const { data } = useTwitterIntelligenceData()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedNarrative, setSelectedNarrative] = useState<number | null>(null)

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-platinum-500-400 flex items-center gap-3"
        >
          <Activity className="h-6 w-6 animate-pulse" />
          <span className="font-rajdhani text-lg">Loading Twitter/X intelligence...</span>
        </motion.div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts, censorship, keyFindings, sources, timeline, humanRightsCases, surveillance, internetStats, botActivity } = data
  const influenceOperations = metrics.influenceOperations

  // A. Enhancement Cycle A: Key Metrics from MD File
  const uaeTwitterStats = [
    { label: 'Internet Users', value: '9.38M', icon: Users, color: CHART_COLORS.info, gradient: 'cyan' as const },
    { label: 'Penetration', value: '99%', icon: Globe, color: CHART_COLORS.emerald, gradient: 'emerald' as const },
    { label: 'Bot Activity', value: '91%', icon: Bot, color: CHART_COLORS.rose, gradient: 'rose' as const },
    { label: '5G Coverage', value: '94%', icon: Zap, color: CHART_COLORS.gold, gradient: 'gold' as const },
    { label: 'Censorship', value: 'Extreme', icon: ShieldAlert, color: CHART_COLORS.rose, gradient: 'rose' as const, status: 'error' as const },
  ]

  // A. Enhancement Cycle B: Sentiment & Engagement Data
  const sentimentData = [
    { name: 'Critical', value: metrics.sentiment.breakdown.negative, color: CHART_COLORS.rose },
    { name: 'Neutral', value: metrics.sentiment.breakdown.neutral, color: CHART_COLORS.platinum },
    { name: 'Positive', value: metrics.sentiment.breakdown.positive, color: CHART_COLORS.emerald },
  ]

  const engagementData = [
    { name: 'Avg Likes', value: metrics.engagement.avgLikes, color: CHART_COLORS.rose },
    { name: 'Avg Retweets', value: metrics.engagement.avgRetweets, color: CHART_COLORS.info },
    { name: 'Avg Replies', value: metrics.engagement.avgReplies, color: CHART_COLORS.gold },
  ]

  // A. Enhancement Cycle C: Bot Network Chart Data
  const botNetworkData = influenceOperations?.map((op: { operation: string; year: number | string; accounts: number | string; target: string }) => ({
    name: op.operation,
    accounts: typeof op.accounts === 'number' ? op.accounts : parseInt(String(op.accounts)) || 0,
    color: op.operation.includes('2019') ? CHART_COLORS.rose :
           op.operation.includes('COP28') ? CHART_COLORS.gold :
           op.operation.includes('Africa') ? CHART_COLORS.info :
           CHART_COLORS.platinum,
  })) || []

  // A. Enhancement Cycle D: Timeline Chart Data
  const timelineData = timeline?.map((t: { year: number | string; event: string }) => ({
    year: String(t.year),
    event: t.event,
    impact: t.event.includes('suspended') || t.event.includes('arrested') || t.event.includes('blocking') ? 3 :
           t.event.includes('2020') || t.event.includes('2021') ? 2 : 1,
  })) || []

  // A. Enhancement Cycle E: Source Credibility Data
  const sourceCredibilityData = sources?.slice(0, 8).map((s: { name: string; tier: number; credibility: string; sentiment: string; uaeRelevance: string; type: string }) => ({
    name: s.name,
    tier: s.tier,
    color: s.tier === 1 ? CHART_COLORS.emerald : s.tier === 2 ? CHART_COLORS.gold : CHART_COLORS.rose,
  })) || []

  // A. Enhancement Cycle F: Human Rights Cases Data
  const humanRightsData = humanRightsCases?.map((hc: Record<string, unknown>) => ({
    name: hc.name as string,
    sentence: 'sentence' in hc ? hc.sentence as string : 'N/A',
    year: 'arrest' in hc ? hc.arrest : 'date' in hc && hc.date ? new Date(hc.date as string).getFullYear() : 'N/A',
    reason: 'context' in hc ? hc.context as string : 'charges' in hc ? (hc.charges as string[])[0] : 'N/A',
  })) || []

  // B. Enhancement Cycle B: Surveillance Programs Data
  const surveillanceData = surveillance?.programs?.map((p: { name: string; year: number | string; target: string; likelyRequestor?: string; method?: string }) => ({
    name: p.name,
    year: typeof p.year === 'number' ? p.year : parseInt(String(p.year)) || 0,
    target: p.target,
  })) || []

  // B. Enhancement Cycle C: Government Accounts Data
  const govAccountTypes = (governmentAccounts as any)?.reduce?.((acc: Record<string, unknown[]>, account: Record<string, unknown>) => {
    const type = (account.type as string) || 'Other'
    if (!acc[type]) acc[type] = []
    acc[type].push(account)
    return acc
  }, {} as Record<string, unknown[]>) || {}

  // B. Enhancement Cycle D: Key Findings Alert Distribution
  const alertDistribution = keyFindings?.reduce((acc: Record<string, number>, kf: { alert?: string }) => {
    const alert = kf.alert || 'YELLOW'
    if (!acc[alert]) acc[alert] = 0
    acc[alert]++
    return acc
  }, {} as Record<string, number>) || {}

  // C. Enhancement: Dis-Influencer Network Data (from twitterIntelligence)
  const disInfluencerData = (data as any).disInfluencerNetwork
  const disInfluencerWebsites = disInfluencerData?.websites || []
  const disInfluencerTalkingPoints = disInfluencerData?.keyTalkingPoints || []
  const disInfluencerConferences = disInfluencerData?.conferenceAppearances || []

  // C. Enhancement: Qatar Blockade 2017 Data
  const qatarBlockadeData = (data as any).qatarBlockade2017
  const qatarBlockadeTimeline = qatarBlockadeData?.timeline || []

  // C. Enhancement: COP28 Campaign Data
  const cop28Data = (data as any).cop28Campaign
  const cop28NetworkStructure = cop28Data?.networkStructure || []
  const sultanAlJaber = cop28Data?.sultanAlJaberProfile

  // C. Enhancement: Alp Services Campaign
  const alpServicesData = (data as any).alpServicesCampaign

  // C. Enhancement: September 2019 Takedown Details
  const takedownData = (data as any).september2019Takedown
  const fakeAccountChars = (data as any).fakeAccountCharacteristics || []
  const paidInfluencerArmy = (data as any).paidInfluencerArmy

  // C. Enhancement: Africa Propaganda Data
  const africaData = (data as any).africaPropaganda

  // C. Enhancement: Leadership Activity
  const leadershipData = (data as any).leadershipActivity
  const mohamedBinZayed = leadershipData?.mohamedBinZayed
  const sheikhMohammed = leadershipData?.sheikhMohammed

  // C. Enhancement: Agentic AI
  const agenticAIData = (data as any).agenticAI

  // C. Enhancement: Dubai Police Monitoring
  const monitoringData = (data as any).dubaiPoliceMonitoring

  // C. Enhancement: Freedom House 2023
  const freedomHouseData = (data as any).freedomHouse2023

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* B. Enhancement Cycle E: Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-rose-500/20 to-transparent border-rose-500/50 text-rose-400">
            <Bot className="h-3 w-3 mr-1" />
            PLATFORM INTELLIGENCE
          </Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum-500">Twitter/X Analysis</h1>
          <p className="mt-2 text-platinum-500-400 font-rajdhani">
            UAE Twitter/X intelligence: 91% bot activity, coordinated inauthentic behavior, extreme censorship
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum-500 hover:bg-platinum/10 font-rajdhani">
            <MessageSquare className="h-4 w-4" />
            View Feed
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-500-950 gap-2 font-rajdhani">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* A. Enhancement Cycle A: Key Metrics Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
      >
        {uaeTwitterStats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <MetricCard
              title={stat.label}
              value={stat.value}
              icon={<stat.icon className="h-6 w-6" />}
              gradient={stat.gradient}
              status={stat.status}
              className="border-glass border"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* B. Enhancement Cycle B: Critical Alerts Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-panel border-rose-500/30 bg-rose-500/5 p-4 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <AlertOctagon className="h-6 w-6 text-rose-400" />
          <div>
            <h3 className="text-rose-400 font-bold font-rajdhani">Critical Findings</h3>
            <p className="text-sm text-platinum-500-400">
              {keyFindings?.filter((kf: { alert?: string }) => kf.alert === 'RED').length || 0} RED alerts, {keyFindings?.filter((kf: { alert?: string }) => kf.alert === 'YELLOW').length || 0} YELLOW warnings
            </p>
          </div>
          <div className="ml-auto flex gap-2">
            <Badge variant="destructive" className="bg-rose-500/20 text-rose-400 border-rose-500/50">
              {alertDistribution['RED'] || 0} Critical
            </Badge>
            <Badge variant="outline" className="border-amber-500/50 text-amber-400">
              {alertDistribution['YELLOW'] || 0} Warning
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* A. Enhancement Cycle C: Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="glass-panel border-glass" scrollable>
          <TabsTrigger value="overview" className="data-[state=active]:bg-platinum/20">Overview</TabsTrigger>
          <TabsTrigger value="influence" className="data-[state=active]:bg-platinum/20">Influence Ops</TabsTrigger>
          <TabsTrigger value="campaigns" className="data-[state=active]:bg-platinum/20">Campaigns</TabsTrigger>
          <TabsTrigger value="disinfluencer" className="data-[state=active]:bg-platinum/20">Dis-Influencer</TabsTrigger>
          <TabsTrigger value="censorship" className="data-[state=active]:bg-platinum/20">Censorship</TabsTrigger>
          <TabsTrigger value="surveillance" className="data-[state=active]:bg-platinum/20">Surveillance</TabsTrigger>
          <TabsTrigger value="human-rights" className="data-[state=active]:bg-platinum/20">Human Rights</TabsTrigger>
          <TabsTrigger value="timeline" className="data-[state=active]:bg-platinum/20">Timeline</TabsTrigger>
          <TabsTrigger value="sources" className="data-[state=active]:bg-platinum/20">Sources</TabsTrigger>
        </TabsList>

        {/* B. Enhancement Cycle D: Overview Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Twitter/X UAE Overview" description="Platform metrics and sentiment analysis">
                <div className="space-y-6">
                  {/* B. Enhancement Cycle E: Internet Stats */}
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5 text-info" />
                        Internet Statistics
                      </CardTitle>
                      <CardDescription>UAE Twitter/X audience breakdown</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {internetStats && (
                          <>
                            <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                              <span className="text-2xl font-bold text-gold-700">{internetStats.internetUsers}</span>
                              <span className="text-xs text-platinum-500-400">Internet Users</span>
                            </div>
                            <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                              <span className="text-2xl font-bold text-emerald-400">{internetStats.internetPenetration}</span>
                              <span className="text-xs text-platinum-500-400">Penetration</span>
                            </div>
                            <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                              <span className="text-2xl font-bold text-info">{internetStats.fiveGCoverage}</span>
                              <span className="text-xs text-platinum-500-400">5G Coverage</span>
                            </div>
                            <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                              <span className="text-2xl font-bold text-platinum-500">{internetStats.twitterUsersHistorical}</span>
                              <span className="text-xs text-platinum-500-400">Historical Users</span>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* B. Enhancement Cycle F: Sentiment Analysis Grid */}
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="glass-card border-glass">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-rose-500" />
                          Sentiment Analysis
                        </CardTitle>
                        <CardDescription>Overall: {metrics.sentiment.overall} (Score: {metrics.sentiment.score})</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PieChart
                          data={sentimentData}
                          height={220}
                          showLegend={true}
                        />
                      </CardContent>
                    </Card>

                    <Card className="glass-card border-glass">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Activity className="h-5 w-5 text-gold-700" />
                          Sentiment Breakdown
                        </CardTitle>
                        <CardDescription>Detailed sentiment percentages</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {sentimentData.map((item, idx) => (
                            <div key={idx} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                                  <span className="text-sm font-medium text-platinum-500-200">{item.name}</span>
                                </div>
                                <span className="text-lg font-bold text-platinum-500-200">{item.value}%</span>
                              </div>
                              <Progress value={item.value} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* A. Enhancement Cycle A: Trending Hashtags */}
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Hash className="h-5 w-5 text-info" />
                        Trending Hashtags
                      </CardTitle>
                      <CardDescription>Most used hashtags in UAE Twitter/X</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {metrics.engagement.trendingHashtags.map((tag: string, idx: number) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Badge variant="outline" className="text-platinum-500 border-platinum/50 px-3 py-1">
                              <Hash className="h-3 w-3 mr-1" />
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* B. Enhancement Cycle C: Engagement Metrics */}
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-emerald-500" />
                        Average Engagement per Post
                      </CardTitle>
                      <CardDescription>Engagement metrics for UAE accounts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={engagementData}
                        xAxisKey="name"
                        bars={[{ dataKey: 'value', name: 'Avg per Post', color: CHART_COLORS.platinum }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* C. Enhancement Cycle D: Influence Operations Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="influence" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Influence Operations" description="Bot networks and coordinated inauthentic behavior">
                <div className="space-y-6">
                  {/* C. Enhancement Cycle E: Bot Activity Critical Alert */}
                  <Card className="glass-card border-rose-500/50 bg-rose-500/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                        <AlertCircle className="h-5 w-5" />
                        Critical: 91% Bot Activity
                      </CardTitle>
                      <CardDescription>Highest bot percentage of all monitored platforms</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-500-300">Estimated Bot Percentage</span>
                          <span className="text-2xl font-bold text-rose-400">{botActivity.estimatedBotPercent}%</span>
                        </div>
                        <Progress value={botActivity.estimatedBotPercent} className="h-3" />
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-sm text-platinum-500-300">Coordinated Inauthentic Behavior</span>
                          <Badge variant="destructive">Detected</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-500-300">Confidence Level</span>
                          <span className="text-lg font-bold text-gold-700">{Math.round(botActivity.confidence * 100)}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* C. Enhancement Cycle F: Bot Networks Chart */}
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Bot className="h-5 w-5 text-platinum-500" />
                        Bot Network Operations
                      </CardTitle>
                      <CardDescription>Major coordinated influence operations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={botNetworkData}
                        xAxisKey="name"
                        bars={[{ dataKey: 'accounts', name: 'Accounts', color: CHART_COLORS.rose }]}
                        height={280}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  {/* A. Enhancement Cycle B: CIB Indicators */}
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Target className="h-5 w-5 text-gold-700" />
                        Coordinated Inauthentic Behavior Indicators
                      </CardTitle>
                      <CardDescription>Detected patterns of automated/coordinated activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-3">
                          {botActivity.indicators.map((indicator: string, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-3 rounded-lg bg-platinum-800/50 p-4"
                            >
                              <Bot className="h-5 w-5 text-platinum-500" />
                              <span className="text-sm text-platinum-500-200">{indicator}</span>
                              <Badge variant="destructive" className="ml-auto">Active</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* B. Enhancement Cycle A: Bot vs Real Pie */}
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <ChartPie className="h-5 w-5 text-info" />
                        Bot vs Real Activity
                      </CardTitle>
                      <CardDescription>Estimated distribution of authentic vs bot activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={[
                          { name: 'Bot Activity', value: botActivity.estimatedBotPercent, color: CHART_COLORS.rose },
                          { name: 'Real Users', value: 100 - botActivity.estimatedBotPercent, color: CHART_COLORS.emerald },
                        ]}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* C. Enhancement: Campaigns Tab - COP28, Africa, September 2019 Takedown */}
        <AnimatePresence mode="wait">
          <TabsContent value="campaigns" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Information Campaigns" description="Coordinated influence operations and propaganda campaigns">
                <div className="space-y-6">
                  {/* C. Enhancement: September 2019 Takedown Details */}
                  {takedownData && (
                    <Card className="glass-card border-rose-500/30 bg-rose-500/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                          <AlertOctagon className="h-5 w-5" />
                          September 2019 Twitter Takedown
                        </CardTitle>
                        <CardDescription>UAE-operated network targeting Qatar, Yemen, Iran</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 lg:grid-cols-3 mb-4">
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-rose-400">{takedownData.totalAccountsSuspended?.toLocaleString()}</span>
                            <span className="text-xs text-platinum-500-400">Accounts Suspended</span>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-rose-400">{takedownData.accountsTargetingQatar?.toLocaleString()}</span>
                            <span className="text-xs text-platinum-500-400">Targeting Qatar</span>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-gold-700">{takedownData.facebookAccountsRemoved}</span>
                            <span className="text-xs text-platinum-500-400">Facebook Accounts</span>
                          </div>
                        </div>
                        {takedownData.operationDetails && (
                          <div className="space-y-3 mt-4">
                            <div className="p-3 rounded-lg bg-platinum-800/50">
                              <span className="font-bold text-gold-700">Managing Company:</span>
                              <p className="text-sm text-platinum-500-300">{takedownData.operationDetails.managingCompany?.name} - {takedownData.operationDetails.managingCompany?.description}</p>
                            </div>
                            {takedownData.operationDetails.saudAlQahtani && (
                              <div className="p-3 rounded-lg bg-platinum-800/50">
                                <span className="font-bold text-rose-400">Saud al-Qahtani:</span>
                                <p className="text-sm text-platinum-500-300">{takedownData.operationDetails.saudAlQahtani.role}</p>
                                <p className="text-xs text-platinum-500-400 mt-1">{takedownData.operationDetails.saudAlQahtani.suspectedRole}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* C. Enhancement: COP28 Greenwashing Campaign */}
                  {cop28Data && (
                    <Card className="glass-card border-gold-700/30 bg-gold-700/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg text-gold-700">
                          <TrendingUp className="h-5 w-5" />
                          COP28 Greenwashing Campaign (Dec 2023)
                        </CardTitle>
                        <CardDescription>1,900+ bot accounts promoting UAE environmental image</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 lg:grid-cols-4 mb-4">
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-gold-700">~{cop28Data.botAccounts?.toLocaleString()}</span>
                            <span className="text-xs text-platinum-500-400">Bot Accounts</span>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-gold-700">{cop28Data.generalAccounts}</span>
                            <span className="text-xs text-platinum-500-400">General Accounts</span>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-gold-700">{cop28Data.minionAccounts}+</span>
                            <span className="text-xs text-platinum-500-400">Minion Accounts</span>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-info">{cop28Data.totalNetworkAccounts?.toLocaleString()}</span>
                            <span className="text-xs text-platinum-500-400">Total Network</span>
                          </div>
                        </div>

                        {cop28NetworkStructure.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-bold text-platinum-500-300 mb-2">Network Structure</h4>
                            <div className="grid gap-2 lg:grid-cols-3">
                              {cop28NetworkStructure.map((item: any, idx: number) => (
                                <div key={idx} className="p-3 rounded-lg bg-platinum-800/50">
                                  <span className="font-bold text-gold-700">{item.role}</span>
                                  <p className="text-xs text-platinum-500-400 mt-1">{item.function}</p>
                                  <p className="text-xs text-platinum-500-500 mt-1">Ex: {item.examples}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {sultanAlJaber && (
                          <div className="p-3 rounded-lg bg-platinum-800/50">
                            <h4 className="font-bold text-gold-700 mb-2">Sultan Al Jaber Profile</h4>
                            <div className="grid gap-2 lg:grid-cols-2 text-sm">
                              <div><span className="text-platinum-500-400">Full Name:</span> <span className="text-platinum-500-200">{sultanAlJaber.fullName}</span></div>
                              <div><span className="text-platinum-500-400">COP28 Role:</span> <span className="text-platinum-500-200">{sultanAlJaber.cop28Role}</span></div>
                              <div><span className="text-platinum-500-400">Primary Role:</span> <span className="text-platinum-500-200">{sultanAlJaber.primaryRole}</span></div>
                              <div><span className="text-platinum-500-400">Historical:</span> <span className="text-platinum-500-200">{sultanAlJaber.historical}</span></div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* C. Enhancement: Africa Propaganda Network */}
                  {africaData && (
                    <Card className="glass-card border-info/30 bg-info/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg text-info">
                          <Globe className="h-5 w-5" />
                          Africa Propaganda Network (BBC Oct 2025)
                        </CardTitle>
                        <CardDescription>100+ fake accounts targeting Somali women influencers</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 lg:grid-cols-2 mb-4">
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-info">{africaData.fakeAccountsIdentified}+</span>
                            <span className="text-xs text-platinum-500-400">Fake Accounts</span>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-info">{africaData.platforms?.join(', ')}</span>
                            <span className="text-xs text-platinum-500-400">Platforms</span>
                          </div>
                        </div>
                        {africaData.campaignObjectives?.map((obj: any, idx: number) => (
                          <div key={idx} className="flex items-center gap-3 p-2 rounded bg-platinum-800/30 mb-2">
                            <Badge variant="outline" className="border-info/50 text-info">{obj.type}</Badge>
                            <span className="text-sm text-platinum-500-300">{obj.description}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {/* C. Enhancement: Alp Services Campaign */}
                  {alpServicesData && (
                    <Card className="glass-card border-rose-500/30">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                          <AlertTriangle className="h-5 w-5" />
                          Alp Services Disinformation Campaign
                        </CardTitle>
                        <CardDescription>Swiss firm hired by UAE for smear campaigns</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 lg:grid-cols-2 text-sm">
                          <div><span className="text-platinum-500-400">Company:</span> <span className="text-platinum-500-200">{alpServicesData.company}</span></div>
                          <div><span className="text-platinum-500-400">Client:</span> <span className="text-platinum-500-200">{alpServicesData.client}</span></div>
                          <div><span className="text-platinum-500-400">Year Hired:</span> <span className="text-platinum-500-200">{alpServicesData.yearHired}</span></div>
                          <div><span className="text-platinum-500-400">Countries Targeted:</span> <span className="text-platinum-500-200">{alpServicesData.targets?.countries}</span></div>
                          <div className="col-span-2"><span className="text-platinum-500-400">Method:</span> <span className="text-platinum-500-200">{alpServicesData.targets?.method}</span></div>
                        </div>
                        <p className="text-sm text-platinum-500-300 mt-3 italic">"{alpServicesData.consequences}"</p>
                      </CardContent>
                    </Card>
                  )}

                  {/* C. Enhancement: Fake Account Characteristics & Paid Influencers */}
                  <div className="grid gap-6 lg:grid-cols-2">
                    {fakeAccountChars.length > 0 && (
                      <Card className="glass-card border-glass">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Bot className="h-5 w-5 text-rose-500" />
                            Fake Account Characteristics
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ScrollArea className="h-[150px]">
                            <div className="space-y-2">
                              {fakeAccountChars.map((item: any, idx: number) => (
                                <div key={idx} className="p-2 rounded bg-platinum-800/50">
                                  <span className="font-bold text-gold-700 text-sm">{item.characteristic}:</span>
                                  <span className="text-platinum-500-300 text-sm ml-2">{item.description}</span>
                                </div>
                              ))}
                            </div>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                    )}

                    {paidInfluencerArmy && (
                      <Card className="glass-card border-glass">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Users className="h-5 w-5 text-gold-700" />
                            Paid Influencer Army
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="p-2 rounded bg-platinum-800/50">
                              <span className="font-bold text-gold-700 text-sm">Platform:</span>
                              <span className="text-platinum-500-300 text-sm ml-2">{paidInfluencerArmy.platform}</span>
                            </div>
                            <div className="p-2 rounded bg-platinum-800/50">
                              <span className="font-bold text-gold-700 text-sm">Tactics:</span>
                              <span className="text-platinum-500-300 text-sm ml-2">{paidInfluencerArmy.tactics}</span>
                            </div>
                            <div className="p-2 rounded bg-platinum-800/50">
                              <span className="font-bold text-gold-700 text-sm">Motivation:</span>
                              <span className="text-platinum-500-300 text-sm ml-2">{paidInfluencerArmy.motivation?.join(', ')}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* C. Enhancement: Dis-Influencer Network Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="disinfluencer" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Emirati Dis-Influencer Network" description="Pseudo-news operations and influence infrastructure">
                <div className="space-y-6">
                  {/* Dis-Influencer Overview */}
                  {disInfluencerData && (
                    <Card className="glass-card border-rose-500/30 bg-rose-500/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                          <Network className="h-5 w-5" />
                          Network Overview
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 lg:grid-cols-4">
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-rose-400">{disInfluencerData.xAccountsCreated}</span>
                            <span className="text-xs text-platinum-500-400">X Accounts</span>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-gold-700">{disInfluencerData.pseudoNewsWebsites}</span>
                            <span className="text-xs text-platinum-500-400">Pseudo-News Sites</span>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-info">{disInfluencerData.earlierSites}</span>
                            <span className="text-xs text-platinum-500-400">Earlier Sites</span>
                          </div>
                          <div className="flex flex-col items-center p-3 rounded-lg bg-platinum-800/50">
                            <span className="text-2xl font-bold text-emerald-500">{disInfluencerData.booksPublished}</span>
                            <span className="text-xs text-platinum-500-400">Books Published</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Pseudo-News Websites */}
                  {disInfluencerWebsites.length > 0 && (
                    <Card className="glass-card border-glass">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Globe className="h-5 w-5 text-gold-700" />
                          Pseudo-News Websites
                        </CardTitle>
                        <CardDescription>Fake news sites registered Oct-Nov 2024</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-3 lg:grid-cols-2">
                          {disInfluencerWebsites.map((site: any, idx: number) => (
                            <div key={idx} className="p-3 rounded-lg bg-platinum-800/50">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-bold text-gold-700">{site.name}</span>
                                <Badge variant="outline" className="border-platinum/50 text-platinum-500 text-xs">
                                  {site.registration}
                                </Badge>
                              </div>
                              {site.notes && <p className="text-xs text-platinum-500-400">{site.notes}</p>}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Key Talking Points */}
                  {disInfluencerTalkingPoints.length > 0 && (
                    <Card className="glass-card border-glass">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <MessageSquare className="h-5 w-5 text-rose-500" />
                          Key Narratives & Talking Points
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-[200px]">
                          <div className="space-y-2">
                            {disInfluencerTalkingPoints.map((point: any, idx: number) => (
                              <div key={idx} className="p-3 rounded-lg bg-platinum-800/50">
                                <span className="font-bold text-rose-400">{point.narrative}:</span>
                                <span className="text-platinum-500-300 ml-2">{point.description}</span>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  )}

                  {/* Conference Appearances */}
                  {disInfluencerConferences.length > 0 && (
                    <Card className="glass-card border-glass">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-info" />
                          Conference Appearances
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {disInfluencerConferences.map((conf: any, idx: number) => (
                            <div key={idx} className="flex items-center justify-between p-2 rounded bg-platinum-800/50">
                              <span className="text-platinum-500-200">{conf.venue}</span>
                              <Badge variant="outline" className="border-info/50 text-info">{conf.location}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Key Figure */}
                  {disInfluencerData?.keyFigure && (
                    <Card className="glass-card border-rose-500/30">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                          <UserX className="h-5 w-5" />
                          Key Figure
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-2 lg:grid-cols-3 text-sm">
                          <div><span className="text-platinum-500-400">Name:</span> <span className="text-platinum-500-200 font-bold">{disInfluencerData.keyFigure.name}</span></div>
                          <div><span className="text-platinum-500-400">Nationality:</span> <span className="text-platinum-500-200">{disInfluencerData.keyFigure.nationality}</span></div>
                          <div><span className="text-platinum-500-400">Role:</span> <span className="text-platinum-500-200">{disInfluencerData.keyFigure.role}</span></div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* D. Enhancement Cycle E: Censorship Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="censorship" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Censorship & Content Control" description="Twitter/X content moderation in UAE">
                <div className="space-y-6">
                  {/* D. Enhancement Cycle F: Censorship Metrics Grid */}
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="glass-card border-rose-500/30">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <ShieldAlert className="h-5 w-5 text-rose-400" />
                          Censorship Level
                        </CardTitle>
                        <CardDescription>Extreme censorship detected</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-500-300">Compliance Rate</span>
                            <span className="text-xl font-bold text-gold-700">{censorship.complianceRate}%</span>
                          </div>
                          <Progress value={censorship.complianceRate} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="glass-card border-glass">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Flag className="h-5 w-5 text-rose-500" />
                          Government Requests
                        </CardTitle>
                        <CardDescription>Content removal requests from UAE government</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-500-300">Government Requests</span>
                            <span className="text-xl font-bold text-rose-400">{censorship.governmentRequests}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-500-300">Content Removed</span>
                            <span className="text-xl font-bold text-rose-400">{censorship.contentRemoved.toLocaleString()}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* E. Enhancement Cycle A: March 2026 Blocking */}
                  {censorship.march2026Blocking && (
                    <Card className="glass-card border-rose-500/30 bg-rose-500/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                          <Ban className="h-5 w-5" />
                          March 2026 Account Blocking
                        </CardTitle>
                        <CardDescription>Attorney General official order</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-platinum-500-300 italic">"{censorship.legalFramework.quote.split('—')[0]}"</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {(censorship.march2026Blocking.additionalPenalties || []).map((penalty: string, idx: number) => (
                              <Badge key={idx} variant="outline" className="border-rose-500/50 text-rose-400">
                                {penalty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* E. Enhancement Cycle B: Legal Framework */}
                  {censorship.legalFramework && (
                    <Card className="glass-card border-glass">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Scale className="h-5 w-5 text-gold-700" />
                          Legal Framework
                        </CardTitle>
                        <CardDescription>Social media restrictions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {censorship.legalFramework.restrictions.map((restriction: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-3 rounded-lg bg-platinum-800/50 p-3">
                              <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0" />
                              <span className="text-sm text-platinum-500-200">{restriction}</span>
                            </div>
                          ))}
                          <blockquote className="mt-4 p-4 border-l-4 border-rose-500 bg-platinum-800/30">
                            <p className="text-sm text-platinum-500-400 italic">{censorship.legalFramework.quote}</p>
                          </blockquote>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* E. Enhancement Cycle C: Twitter Compliance History */}
                  {censorship.twitterCompliance && (
                    <Card className="glass-card border-glass">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Server className="h-5 w-5 text-info" />
                          Twitter Compliance History
                        </CardTitle>
                        <CardDescription>Historical compliance with UAE removal requests</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {censorship.twitterCompliance.map((item: { year: string | number; requests: number; complianceRate: number }, idx: number) => (
                            <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50">
                              <div>
                                <span className="text-sm font-medium text-platinum-500-200">{item.year}</span>
                                <span className="text-xs text-platinum-500-400 ml-2">{item.requests} requests</span>
                              </div>
                              <span className="text-lg font-bold text-emerald-400">{item.complianceRate}%</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* E. Enhancement Cycle D: Historical Suspensions */}
                  {censorship.historicalSuspensions && (
                    <Card className="glass-card border-glass">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <UserX className="h-5 w-5 text-rose-500" />
                          Historical Account Suspensions
                        </CardTitle>
                        <CardDescription>Previous Twitter enforcement actions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-[200px]">
                          <div className="space-y-3">
                            {censorship.historicalSuspensions.map((suspension: { date: string; accounts: string; reason: string }, idx: number) => (
                              <div key={idx} className="p-3 rounded-lg bg-platinum-800/50">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm font-medium text-rose-400">{suspension.date}</span>
                                </div>
                                <p className="text-xs text-platinum-500-400 mb-1">{suspension.accounts}</p>
                                <p className="text-sm text-platinum-500-300">{suspension.reason}</p>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* F. Enhancement Cycle F: Surveillance Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="surveillance" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Surveillance & Monitoring" description="Digital surveillance operations targeting UAE users">
                <div className="space-y-6">
                  {/* A. Enhancement Cycle D: Monitoring Quote */}
                  <Card className="glass-card border-info/30 bg-info/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg text-info">
                        <Eye className="h-5 w-5" />
                        Dubai Police 24/7 Monitoring
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="border-l-4 border-info p-4 bg-platinum-800/30">
                        <p className="text-sm text-platinum-500-300 italic">"{surveillance?.dubaiPoliceMonitoring?.monitoringQuote?.split(' — ')[0]}"</p>
                        <p className="text-xs text-platinum-500-400 mt-2">— {surveillance?.dubaiPoliceMonitoring?.monitoringQuote?.split(' — ')[1]}</p>
                      </blockquote>
                    </CardContent>
                  </Card>

                  {/* A. Enhancement Cycle E: Surveillance Programs */}
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Server className="h-5 w-5 text-rose-500" />
                        Surveillance Programs
                      </CardTitle>
                      <CardDescription>Documented spyware and monitoring operations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {surveillanceData.map((program: { name: string; year: string | number; target: string }, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-4 rounded-lg bg-platinum-800/50 border border-rose-500/20"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-rose-400" />
                                <span className="font-bold text-platinum-500-200">{program.name}</span>
                              </div>
                              <Badge variant="outline" className="border-rose-500/50 text-rose-400">
                                {program.year}
                              </Badge>
                            </div>
                            <p className="text-sm text-platinum-500-400 mb-1">Target: {program.target}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* B. Enhancement Cycle F: Key Concerns */}
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <AlertTriangle className="h-5 w-5 text-amber-400" />
                        Key Surveillance Concerns
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {['Pegasus targeting journalists from FT, Economist, WSJ', 'QuaDream exploiting Android vulnerabilities', 'ToTok discovered as surveillance tool', 'COP28 targeting HRDs'].map((concern, idx) => (
                          <div key={idx} className="flex items-center gap-3 rounded-lg bg-platinum-800/50 p-3">
                            <EyeOff className="h-4 w-4 text-amber-400" />
                            <span className="text-sm text-platinum-500-200">{concern}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Human Rights Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="human-rights" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Human Rights Cases" description="Documented cases of censorship and repression">
                <div className="space-y-6">
                  {humanRightsCases?.map((caseItem: Record<string, unknown>, idx: number) => (
                    <Card
                      key={idx}
                      className="glass-card border-rose-500/30 bg-rose-500/5"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg text-rose-400 flex items-center gap-2">
                            <UserX className="h-5 w-5" />
                            {(caseItem as { name: string }).name}
                          </CardTitle>
                          {'sentence' in caseItem && (
                            <Badge variant="destructive" className="bg-rose-500/20 text-rose-400">
                              {(caseItem as { sentence?: string }).sentence}
                            </Badge>
                          )}
                        </div>
                        {'title' in caseItem && (
                          <CardDescription>{(caseItem as { title?: string }).title}</CardDescription>
                        )}
                        {'profession' in caseItem && (
                          <CardDescription>{(caseItem as { profession?: string }).profession}</CardDescription>
                        )}
                        {'organization' in caseItem && (
                          <CardDescription>{(caseItem as { organization?: string }).organization}</CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        {'context' in caseItem && (
                          <p className="text-sm text-platinum-500-300 mb-2">{(caseItem as { context?: string }).context}</p>
                        )}
                        {'charges' in caseItem && Array.isArray((caseItem as { charges?: string[] }).charges) && (
                          <div className="mb-2">
                            <span className="text-xs text-platinum-500-400">Charges: </span>
                            <span className="text-xs text-platinum-500-300">{((caseItem as { charges: string[] }).charges).join(', ')}</span>
                          </div>
                        )}
                        {'violations' in caseItem && Array.isArray((caseItem as { violations?: string[] }).violations) && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {((caseItem as { violations: string[] }).violations).map((v, i) => (
                              <Badge key={i} variant="outline" className="border-rose-500/50 text-rose-400 text-xs">
                                {v}
                              </Badge>
                            ))}
                          </div>
                        )}
                        {'quote' in caseItem && (caseItem as { quote?: string }).quote && (
                          <blockquote className="mt-4 p-3 border-l-4 border-rose-500 bg-platinum-800/30">
                            <p className="text-xs text-platinum-500-400 italic">"{(caseItem as { quote: string }).quote}"</p>
                          </blockquote>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Timeline Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="timeline" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Key Events Timeline" description="Historical timeline of Twitter/X operations in UAE">
                <Card className="glass-card border-glass">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {timeline?.map((event: { year: string | number; event: string }, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-4"
                        >
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full ${
                              event.event.includes('suspended') || event.event.includes('arrested') || event.event.includes('blocking') ? 'bg-rose-500' :
                              event.event.includes('2020') || event.event.includes('2021') ? 'bg-amber-500' : 'bg-platinum'
                            }`} />
                            {idx < (timeline?.length || 0) - 1 && (
                              <div className="w-0.5 h-8 bg-platinum-700" />
                            )}
                          </div>
                          <div className="flex-1 pb-4">
                            <span className="text-sm font-bold text-gold-700">{event.year}</span>
                            <p className="text-sm text-platinum-500-300">{event.event}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </GlassPanel>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Sources Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="sources" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassPanel title="Source Credibility Matrix" description="Analysis of source reliability and sentiment">
                <div className="space-y-6">
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Database className="h-5 w-5 text-info" />
                        Source Distribution by Tier
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={sourceCredibilityData.map((s: { name: string; tier: number; color: string }) => ({
                          name: s.name,
                          value: s.tier === 1 ? 70 : s.tier === 2 ? 25 : 5,
                          color: s.color,
                        }))}
                        height={280}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-gold-700" />
                        Sources
                      </CardTitle>
                      <CardDescription>Primary research sources</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px]">
                        <div className="space-y-3">
                          {sources?.map((source: { tier: number; name: string; credibility: string; sentiment: string; uaeRelevance: string; type: string }, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/50"
                            >
                              <div className="flex items-center gap-3">
                                <Badge variant="outline" className={
                                  source.tier === 1 ? 'border-emerald-500/50 text-emerald-400' :
                                  source.tier === 2 ? 'border-amber-500/50 text-amber-400' :
                                  'border-rose-500/50 text-rose-400'
                                }>
                                  T{source.tier}
                                </Badge>
                                <span className="text-sm text-platinum-500-200">{source.name}</span>
                              </div>
                              <span className="text-xs text-platinum-500-400">{source.type}</span>
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
        </AnimatePresence>
      </Tabs>
    </div>
  )
}