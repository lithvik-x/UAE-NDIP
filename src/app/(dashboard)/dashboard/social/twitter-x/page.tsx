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
          className="text-platinum-400 flex items-center gap-3"
        >
          <Activity className="h-6 w-6 animate-pulse" />
          <span className="font-rajdhani text-lg">Loading Twitter/X intelligence...</span>
        </motion.div>
      </div>
    )
  }

  const { metrics, keyNarratives, governmentAccounts, censorship, keyFindings, sources, timeline, humanRightsCases, surveillance, influenceOperations, internetStats } = data

  // A. Enhancement Cycle A: Key Metrics from MD File
  const uaeTwitterStats = [
    { label: 'Internet Users', value: '9.38M', icon: Users, color: CHART_COLORS.info, gradient: 'info' },
    { label: 'Penetration', value: '99%', icon: Globe, color: CHART_COLORS.emerald, gradient: 'emerald' },
    { label: 'Bot Activity', value: '91%', icon: Bot, color: CHART_COLORS.rose, gradient: 'rose' },
    { label: '5G Coverage', value: '94%', icon: Zap, color: CHART_COLORS.gold, gradient: 'gold' },
    { label: 'Censorship', value: 'Extreme', icon: ShieldAlert, color: CHART_COLORS.rose, gradient: 'rose', status: 'critical' },
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
  const botNetworkData = influenceOperations?.map(op => ({
    name: op.operation,
    accounts: typeof op.accounts === 'number' ? op.accounts : parseInt(op.accounts) || 0,
    color: op.operation.includes('2019') ? CHART_COLORS.rose :
           op.operation.includes('COP28') ? CHART_COLORS.gold :
           op.operation.includes('Africa') ? CHART_COLORS.info :
           CHART_COLORS.platinum,
  })) || []

  // A. Enhancement Cycle D: Timeline Chart Data
  const timelineData = timeline?.map(t => ({
    year: String(t.year),
    event: t.event,
    impact: t.event.includes('suspended') || t.event.includes('arrested') || t.event.includes('blocking') ? 3 :
           t.event.includes('2020') || t.event.includes('2021') ? 2 : 1,
  })) || []

  // A. Enhancement Cycle E: Source Credibility Data
  const sourceCredibilityData = sources?.slice(0, 8).map((s, i) => ({
    name: s.name,
    tier: s.tier,
    color: s.tier === 1 ? CHART_COLORS.emerald : s.tier === 2 ? CHART_COLORS.gold : CHART_COLORS.rose,
  })) || []

  // A. Enhancement Cycle F: Human Rights Cases Data
  const humanRightsData = humanRightsCases?.map(hc => ({
    name: hc.name,
    sentence: 'sentence' in hc ? hc.sentence : 'N/A',
    year: 'arrest' in hc ? hc.arrest : 'date' in hc ? new Date(hc.date).getFullYear() : 'N/A',
    reason: 'context' in hc ? hc.context : 'charges' in hc ? (hc.charges as string[])[0] : 'N/A',
  })) || []

  // B. Enhancement Cycle B: Surveillance Programs Data
  const surveillanceData = surveillance?.programs?.map(p => ({
    name: p.name,
    year: typeof p.year === 'number' ? p.year : parseInt(p.year) || 0,
    target: p.target,
  })) || []

  // B. Enhancement Cycle C: Government Accounts Data
  const govAccountTypes = governmentAccounts?.reduce((acc, account) => {
    const type = account.type || 'Other'
    if (!acc[type]) acc[type] = []
    acc[type].push(account)
    return acc
  }, {} as Record<string, typeof governmentAccounts>) || {}

  // B. Enhancement Cycle D: Key Findings Alert Distribution
  const alertDistribution = keyFindings?.reduce((acc, kf) => {
    const alert = kf.alert || 'YELLOW'
    if (!acc[alert]) acc[alert] = 0
    acc[alert]++
    return acc
  }, {} as Record<string, number>) || {}

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
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Twitter/X Analysis</h1>
          <p className="mt-2 text-slate-400 font-rajdhani">
            UAE Twitter/X intelligence: 91% bot activity, coordinated inauthentic behavior, extreme censorship
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10 font-rajdhani">
            <MessageSquare className="h-4 w-4" />
            View Feed
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2 font-rajdhani">
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
            <p className="text-sm text-slate-400">
              {keyFindings?.filter(kf => kf.alert === 'RED').length || 0} RED alerts, {keyFindings?.filter(kf => kf.alert === 'YELLOW').length || 0} YELLOW warnings
            </p>
          </div>
          <div className="ml-auto flex gap-2">
            <Badge variant="destructive" className="bg-rose-500/20 text-rose-400 border-rose-500/50">
              {alertDistribution['RED'] || 0} Critical
            </Badge>
            <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
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
                            <div className="flex flex-col items-center p-3 rounded-lg bg-slate-800/50">
                              <span className="text-2xl font-bold text-gold">{internetStats.internetUsers}</span>
                              <span className="text-xs text-slate-400">Internet Users</span>
                            </div>
                            <div className="flex flex-col items-center p-3 rounded-lg bg-slate-800/50">
                              <span className="text-2xl font-bold text-emerald-400">{internetStats.internetPenetration}</span>
                              <span className="text-xs text-slate-400">Penetration</span>
                            </div>
                            <div className="flex flex-col items-center p-3 rounded-lg bg-slate-800/50">
                              <span className="text-2xl font-bold text-info">{internetStats.fiveGCoverage}</span>
                              <span className="text-xs text-slate-400">5G Coverage</span>
                            </div>
                            <div className="flex flex-col items-center p-3 rounded-lg bg-slate-800/50">
                              <span className="text-2xl font-bold text-platinum">{internetStats.twitterUsersHistorical}</span>
                              <span className="text-xs text-slate-400">Historical Users</span>
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
                          <BarChart3 className="h-5 w-5 text-rose" />
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
                          <Activity className="h-5 w-5 text-gold" />
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
                                  <span className="text-sm font-medium text-slate-200">{item.name}</span>
                                </div>
                                <span className="text-lg font-bold text-slate-200">{item.value}%</span>
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
                        {metrics.engagement.trendingHashtags.map((tag, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Badge variant="outline" className="text-platinum border-platinum/50 px-3 py-1">
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
                        <TrendingUp className="h-5 w-5 text-emerald" />
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
                          <span className="text-sm text-slate-300">Estimated Bot Percentage</span>
                          <span className="text-2xl font-bold text-rose-400">{metrics.botActivity.estimatedBotPercent}%</span>
                        </div>
                        <Progress value={metrics.botActivity.estimatedBotPercent} className="h-3" />
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-sm text-slate-300">Coordinated Inauthentic Behavior</span>
                          <Badge variant="destructive">Detected</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300">Confidence Level</span>
                          <span className="text-lg font-bold text-gold">{Math.round(metrics.botActivity.confidence * 100)}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* C. Enhancement Cycle F: Bot Networks Chart */}
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Bot className="h-5 w-5 text-platinum" />
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
                        <Target className="h-5 w-5 text-gold" />
                        Coordinated Inauthentic Behavior Indicators
                      </CardTitle>
                      <CardDescription>Detected patterns of automated/coordinated activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-3">
                          {metrics.botActivity.indicators.map((indicator, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-4"
                            >
                              <Bot className="h-5 w-5 text-platinum" />
                              <span className="text-sm text-slate-200">{indicator}</span>
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
                        <PieChart className="h-5 w-5 text-info" />
                        Bot vs Real Activity
                      </CardTitle>
                      <CardDescription>Estimated distribution of authentic vs bot activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={[
                          { name: 'Bot Activity', value: metrics.botActivity.estimatedBotPercent, color: CHART_COLORS.rose },
                          { name: 'Real Users', value: 100 - metrics.botActivity.estimatedBotPercent, color: CHART_COLORS.emerald },
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
                            <span className="text-sm text-slate-300">Compliance Rate</span>
                            <span className="text-xl font-bold text-gold">{censorship.complianceRate}%</span>
                          </div>
                          <Progress value={censorship.complianceRate} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="glass-card border-glass">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Flag className="h-5 w-5 text-rose" />
                          Government Requests
                        </CardTitle>
                        <CardDescription>Content removal requests from UAE government</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-300">Government Requests</span>
                            <span className="text-xl font-bold text-rose-400">{censorship.governmentRequests}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-300">Content Removed</span>
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
                          <p className="text-sm text-slate-300">{censorship.notes}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {censorship.march2026Blocking.blocked.map((item, idx) => (
                              <Badge key={idx} variant="outline" className="border-rose-500/50 text-rose-400">
                                {item}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {censorship.march2026Blocking.penalties.map((penalty, idx) => (
                              <Badge key={idx} variant="destructive" className="bg-rose-500/20">
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
                          <Scale className="h-5 w-5 text-gold" />
                          Legal Framework
                        </CardTitle>
                        <CardDescription>Social media restrictions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {censorship.legalFramework.restrictions.map((restriction, idx) => (
                            <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                              <AlertTriangle className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                              <span className="text-sm text-slate-200">{restriction}</span>
                            </div>
                          ))}
                          <blockquote className="mt-4 p-4 border-l-4 border-rose-500 bg-slate-800/30">
                            <p className="text-sm text-slate-400 italic">{censorship.legalFramework.quote}</p>
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
                          {censorship.twitterCompliance.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                              <div>
                                <span className="text-sm font-medium text-slate-200">{item.year}</span>
                                <span className="text-xs text-slate-400 ml-2">{item.requests} requests</span>
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
                          <UserX className="h-5 w-5 text-rose" />
                          Historical Account Suspensions
                        </CardTitle>
                        <CardDescription>Previous Twitter enforcement actions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-[200px]">
                          <div className="space-y-3">
                            {censorship.historicalSuspensions.map((suspension, idx) => (
                              <div key={idx} className="p-3 rounded-lg bg-slate-800/50">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm font-medium text-rose-400">{suspension.date}</span>
                                </div>
                                <p className="text-xs text-slate-400 mb-1">{suspension.accounts}</p>
                                <p className="text-sm text-slate-300">{suspension.reason}</p>
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
                      <blockquote className="border-l-4 border-info p-4 bg-slate-800/30">
                        <p className="text-sm text-slate-300 italic">"{surveillance?.monitoringQuote?.split(' — ')[0]}"</p>
                        <p className="text-xs text-slate-400 mt-2">— {surveillance?.monitoringQuote?.split(' — ')[1]}</p>
                      </blockquote>
                    </CardContent>
                  </Card>

                  {/* A. Enhancement Cycle E: Surveillance Programs */}
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Server className="h-5 w-5 text-rose" />
                        Surveillance Programs
                      </CardTitle>
                      <CardDescription>Documented spyware and monitoring operations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {surveillanceData.map((program, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-4 rounded-lg bg-slate-800/50 border border-rose-500/20"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-rose-400" />
                                <span className="font-bold text-slate-200">{program.name}</span>
                              </div>
                              <Badge variant="outline" className="border-rose-500/50 text-rose-400">
                                {program.year}
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-400 mb-1">Target: {program.target}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* B. Enhancement Cycle F: Key Concerns */}
                  <Card className="glass-card border-glass">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-400" />
                        Key Surveillance Concerns
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {['Pegasus targeting journalists from FT, Economist, WSJ', 'QuaDream exploiting Android vulnerabilities', 'ToTok discovered as surveillance tool', 'COP28 targeting HRDs'].map((concern, idx) => (
                          <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                            <EyeOff className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm text-slate-200">{concern}</span>
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
                  {humanRightsCases?.map((caseItem, idx) => (
                    <motion.Card
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-card border-rose-500/30 bg-rose-500/5"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg text-rose-400 flex items-center gap-2">
                            <UserX className="h-5 w-5" />
                            {caseItem.name}
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
                          <p className="text-sm text-slate-300 mb-2">{(caseItem as { context?: string }).context}</p>
                        )}
                        {'charges' in caseItem && Array.isArray((caseItem as { charges?: string[] }).charges) && (
                          <div className="mb-2">
                            <span className="text-xs text-slate-400">Charges: </span>
                            <span className="text-xs text-slate-300">{((caseItem as { charges: string[] }).charges).join(', ')}</span>
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
                          <blockquote className="mt-4 p-3 border-l-4 border-rose-500 bg-slate-800/30">
                            <p className="text-xs text-slate-400 italic">"{(caseItem as { quote: string }).quote}"</p>
                          </blockquote>
                        )}
                      </CardContent>
                    </motion.Card>
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
                      {timeline?.map((event, idx) => (
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
                              event.event.includes('2020') || event.event.includes('2021') ? 'bg-yellow-500' : 'bg-platinum'
                            }`} />
                            {idx < (timeline?.length || 0) - 1 && (
                              <div className="w-0.5 h-8 bg-slate-700" />
                            )}
                          </div>
                          <div className="flex-1 pb-4">
                            <span className="text-sm font-bold text-gold">{event.year}</span>
                            <p className="text-sm text-slate-300">{event.event}</p>
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
                        data={sourceCredibilityData.map(s => ({
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
                        <BookOpen className="h-5 w-5 text-gold" />
                        Sources
                      </CardTitle>
                      <CardDescription>Primary research sources</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[400px]">
                        <div className="space-y-3">
                          {sources?.map((source, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50"
                            >
                              <div className="flex items-center gap-3">
                                <Badge variant="outline" className={
                                  source.tier === 1 ? 'border-emerald-500/50 text-emerald-400' :
                                  source.tier === 2 ? 'border-yellow-500/50 text-yellow-400' :
                                  'border-rose-500/50 text-rose-400'
                                }>
                                  T{source.tier}
                                </Badge>
                                <span className="text-sm text-slate-200">{source.name}</span>
                              </div>
                              <span className="text-xs text-slate-400">{source.date}</span>
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