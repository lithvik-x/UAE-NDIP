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
  Bot,
  Shield,
  AlertTriangle,
  Search,
  Activity,
  Network,
  Users,
  Globe,
  Eye,
  Target,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  Clock,
  Database,
  Lock,
  Smartphone,
  Cpu,
  Building2,
  UserCog,
  AlertOctagon,
  ExternalLink,
  Check,
  X,
  Minus,
  Info,
  BarChart3,
  PieChart as PieChartIcon,
} from 'lucide-react'
import {
  useBotInauthenticData,
} from '@/lib/data-loader'
import type { UAERelevanceMatrixEntry, SourceCredibilityMatrixEntry, TierLevel } from '@/lib/data-loader/types'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const cardHover = {
  whileHover: { scale: 1.02, transition: { duration: 0.2 } },
}

export default function BotDashboardPage() {
  const { data } = useBotInauthenticData()

  // Chart data for source credibility tiers
  const sourceTierData = [
    { name: 'Tier 0 (Peer-Reviewed)', value: 2, color: CHART_COLORS.emerald },
    { name: 'Tier 1 (Investigative)', value: 8, color: CHART_COLORS.teal },
    { name: 'Tier 2 (News)', value: 5, color: CHART_COLORS.gold },
    { name: 'Tier 3 (Secondary)', value: 6, color: CHART_COLORS.orange },
  ]

  // Chart data for URL fetch status
  const urlFetchData = [
    { name: 'Fully Accessible', value: 13, color: CHART_COLORS.emerald },
    { name: 'Partially Accessible', value: 8, color: CHART_COLORS.gold },
    { name: 'Blocked', value: 14, color: CHART_COLORS.rose },
  ]

  // Chart data for relevance distribution
  const relevanceData = [
    { name: 'CRITICAL', value: 6, color: CHART_COLORS.rose },
    { name: 'HIGH', value: 2, color: CHART_COLORS.orange },
    { name: 'MEDIUM', value: 3, color: CHART_COLORS.gold },
  ]

  // Get tier badge styling
  const getTierBadge = (tier: TierLevel) => {
    switch (tier) {
      case 0: return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Tier 0</Badge>
      case 1: return <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/50">Tier 1</Badge>
      case 2: return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50">Tier 2</Badge>
      case 3: return <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">Tier 3</Badge>
      default: return <Badge variant="outline">Tier {tier}</Badge>
    }
  }

  // Get relevance badge styling
  const getRelevanceBadge = (relevance: string) => {
    switch (relevance) {
      case 'CRITICAL': return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">CRITICAL</Badge>
      case 'HIGH': return <Badge variant="warning" className="bg-orange-500/20 text-orange-400 border-orange-500/50">HIGH</Badge>
      case 'MEDIUM': return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50">MEDIUM</Badge>
      default: return <Badge variant="outline">LOW</Badge>
    }
  }

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Extreme': return 'text-red-400'
      case 'High': return 'text-orange-400'
      case 'Medium': return 'text-amber-400'
      default: return 'text-platinum-400'
    }
  }

  // Get URL status badge
  const getUrlStatusBadge = (status: string) => {
    if (status.includes('SUCCESS')) return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 text-xs">SUCCESS</Badge>
    if (status.includes('PARTIAL')) return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50 text-xs">PARTIAL</Badge>
    if (status.includes('BLOCKED')) return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50 text-xs">BLOCKED</Badge>
    if (status.includes('ACCESSED')) return <Badge className="bg-navy-500/20 text-navy-400 border-navy-500/50 text-xs">ACCESSED</Badge>
    return <Badge variant="outline" className="text-xs">{status}</Badge>
  }

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="emerald" className="mb-2">V-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-emerald">Bot & Inauthentic Behavior</h1>
          <p className="mt-2 text-platinum-400">
            UAE-linked bot networks, troll farms, and coordinated inauthentic behavior analysis
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald/50 text-emerald hover:bg-emerald/10">
            <Search className="h-4 w-4" />
            Analyze
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
            <Bot className="h-4 w-4" />
            Detection Tools
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Largest Bot Network"
          value="19,514"
          unit="accounts"
          icon={<Bot className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Total URL Sources"
          value={data.fetchSummary.totalUrls}
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Critical Relevance"
          value={data.uaeRelevanceAssessmentMatrix.filter(i => i.uaeRelevance === 'CRITICAL').length}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="orange"
          status="warning"
        />
        <MetricCard
          title="Source URLs Accessible"
          value={`${Math.round((data.fetchSummary.fullyAccessible / data.fetchSummary.totalUrls) * 100)}%`}
          icon={<CheckCircle className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </motion.div>

      {/* Executive Summary KPIs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="RSF Campaign Impressions"
          value="91M+"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Troll Farm Operators"
          value="~500"
          icon={<Users className="h-6 w-6" />}
          gradient="orange"
          status="warning"
        />
        <MetricCard
          title="Accounts Removed (SMAAT)"
          value="88,000+"
          icon={<XCircle className="h-6 w-6" />}
          gradient="gold"
          status="info"
        />
        <MetricCard
          title="Detection Accuracy (AUC)"
          value="0.99"
          icon={<Target className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="rsf">RSF Campaign</TabsTrigger>
          <TabsTrigger value="cop28">COP28 Bots</TabsTrigger>
          <TabsTrigger value="stc">STC Yemen</TabsTrigger>
          <TabsTrigger value="trolls">Troll Farms</TabsTrigger>
          <TabsTrigger value="detection">Detection</TabsTrigger>
          <TabsTrigger value="engagement">Engagement Fraud</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="queries">Queries</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
            {/* Relevance Assessment Matrix */}
            <GlassPanel title="UAE Relevance Assessment Matrix" description="Topic classification by relevance level">
              <div className="space-y-4">
                <div className="grid gap-3">
                  {data.uaeRelevanceAssessmentMatrix.map((item: UAERelevanceMatrixEntry, idx: number) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                    >
                      <div className="flex-1">
                        <p className="font-medium text-platinum-200">{item.topic}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs text-platinum-500">Severity: <span className={getSeverityColor(item.severity)}>{item.severity}</span></span>
                          <span className="text-xs text-platinum-500">Confidence: <span className="text-teal-400">{item.confidence}</span></span>
                        </div>
                      </div>
                      {getRelevanceBadge(item.uaeRelevance)}
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassPanel>

            {/* Charts Row */}
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Tiers</CardTitle>
                  <CardDescription>Distribution by source tier</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart data={sourceTierData} height={220} showLegend={true} />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">URL Fetch Status</CardTitle>
                  <CardDescription>Source accessibility breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart data={urlFetchData} height={220} showLegend={true} />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Relevance Distribution</CardTitle>
                  <CardDescription>UAE relevance classification</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart data={relevanceData} height={220} showLegend={true} />
                </CardContent>
              </Card>
            </div>

            {/* Dashboard KPIs */}
            <GlassPanel title="Dashboard KPIs - Bot Network Scale" description="Key performance indicators">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.dashboardKPIs.botNetworkScale.map((kpi: { kpi: string; value: string; lastUpdated: string }, idx: number) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center"
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="text-2xl font-bold text-emerald-400">{kpi.value}</div>
                    <p className="text-sm text-platinum-400 mt-1">{kpi.kpi}</p>
                    <p className="text-xs text-platinum-500 mt-1">{kpi.lastUpdated}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Research Notes */}
            <GlassPanel title="Research Notes" description="Key findings from analysis">
              <div className="space-y-3">
                {data.researchNotes.map((note: string, idx: number) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-3 rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                  >
                    <Info className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-platinum-300">{note}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* RSF Campaign Tab */}
        <TabsContent value="rsf" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
            <GlassPanel title="19,000 UAE-Aligned Bots (RSF Campaign)" description="October 2025 Rapid Support Forces campaign analysis">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center">
                    <div className="text-2xl font-bold text-rose-400">{data.rsfBotsData.estimatedBotAccounts}</div>
                    <p className="text-sm text-platinum-400">Est. Bot Accounts</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-400">{data.rsfBotsData.totalAccountsAnalyzed}</div>
                    <p className="text-sm text-platinum-400">Accounts Analyzed</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-teal-400">{data.rsfBotsData.tweetsInDataset}</div>
                    <p className="text-sm text-platinum-400">Tweets in Dataset</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-orange-400">{data.rsfBotsData.impressionsGenerated}</div>
                    <p className="text-sm text-platinum-400">Impressions</p>
                  </div>
                  <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center">
                    <div className="text-2xl font-bold text-rose-400">{data.rsfBotsData.botPercentageActive}</div>
                    <p className="text-sm text-platinum-400">Bot Percentage</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-platinum-200">{data.rsfBotsData.tweetsViaTwitterWebApp}</div>
                    <p className="text-sm text-platinum-400">Via Twitter Web App</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-platinum-200">{data.rsfBotsData.accountsCreated5Month}</div>
                    <p className="text-sm text-platinum-400">Created in 5 Months</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-platinum-200">{data.rsfBotsData.postingBursts}</div>
                    <p className="text-sm text-platinum-400">Posts per Burst</p>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Timeline</h4>
                  <div className="flex flex-wrap gap-3">
                    {data.rsfBotsData.timeline.map((t: { date: string; event: string }, idx: number) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="flex items-center gap-2 rounded-lg border border-platinum-700 bg-platinum-800/50 px-3 py-2"
                      >
                        <Clock className="h-4 w-4 text-emerald-400" />
                        <div>
                          <p className="text-xs text-platinum-500">{t.date}</p>
                          <p className="text-sm text-platinum-200">{t.event}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Narratives */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Narratives Promoted</h4>
                  <div className="space-y-2">
                    {data.rsfBotsData.narrativesPromoted.map((n: string, idx: number) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="flex items-start gap-2 rounded-lg border border-platinum-700 bg-platinum-800/50 px-3 py-2"
                      >
                        <Check className="h-4 w-4 text-rose-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-platinum-300">{n}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Geopolitical Framing */}
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4">
                    <h4 className="text-sm font-semibold text-rose-400 mb-2">Negative Framing</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.rsfBotsData.geopoliticalFraming.negative.map((n: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="bg-rose-500/20 text-rose-400 border-rose-500/50">
                          {n}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">Positive Framing</h4>
                    <div className="flex flex-wrap gap-2">
                      {data.rsfBotsData.geopoliticalFraming.positive.map((n: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                          {n}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detection Tools */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Detection Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.rsfBotsData.detectionTools.map((tool: string, idx: number) => (
                      <Badge key={idx} className="bg-denim-500/20 text-denim-400 border-denim-500/50">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Source */}
                <div className="flex items-center gap-2 text-xs text-platinum-500">
                  <ExternalLink className="h-3 w-3" />
                  <span>Source: {data.rsfBotsData.source}</span>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* COP28 Bots Tab */}
        <TabsContent value="cop28" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
            <GlassPanel title="COP28 Greenwashing Bot Network" description="December 2023 analysis">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                  <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center">
                    <div className="text-2xl font-bold text-rose-400">{data.cop28BotsData.botsTargetingCOP28}</div>
                    <p className="text-sm text-platinum-400">Bots Targeting COP28</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-400">{data.cop28BotsData.totalNetworkAccounts}</div>
                    <p className="text-sm text-platinum-400">Total Network</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-platinum-200">{data.cop28BotsData.generalAccountsOriginalContent}</div>
                    <p className="text-sm text-platinum-400">General Accounts</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-platinum-200">{data.cop28BotsData.minionAccountsAmplification}</div>
                    <p className="text-sm text-platinum-400">Minion Accounts</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-orange-400">{data.cop28BotsData.maximumDailyQueriesBotometerLite}</div>
                    <p className="text-sm text-platinum-400">Max Daily Queries</p>
                  </div>
                </div>

                {/* Network Structure */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Network Structure</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                      <Network className="h-4 w-4 text-emerald-400 mt-0.5" />
                      <p className="text-sm text-platinum-300">{data.cop28BotsData.networkStructure.hierarchy}</p>
                    </div>
                    <div className="flex items-start gap-2 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                      <Shield className="h-4 w-4 text-orange-400 mt-0.5" />
                      <p className="text-sm text-platinum-300">{data.cop28BotsData.networkStructure.cells}</p>
                    </div>
                    <div className="flex items-start gap-2 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                      <Clock className="h-4 w-4 text-teal-400 mt-0.5" />
                      <p className="text-sm text-platinum-300">{data.cop28BotsData.networkStructure.accountRecycling}</p>
                    </div>
                  </div>
                </div>

                {/* Content Focus */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Content Focus</h4>
                  <div className="space-y-2">
                    {data.cop28BotsData.contentFocus.map((c: string, idx: number) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="flex items-start gap-2 rounded-lg border border-platinum-700 bg-platinum-800/50 px-3 py-2"
                      >
                        <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-platinum-300">{c}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Verified General Accounts */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Verified General Accounts</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.cop28BotsData.verifiedGeneralAccounts.map((acc: string, idx: number) => (
                      <Badge key={idx} className="bg-denim-500/20 text-denim-400 border-denim-500/50">
                        @{acc}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Methodology */}
                <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                  <h4 className="text-sm font-semibold text-platinum-300 mb-2">Methodology</h4>
                  <p className="text-sm text-platinum-400">Researcher: {data.cop28BotsData.methodology.researcher}</p>
                  <p className="text-sm text-platinum-400">Tools: {data.cop28BotsData.methodology.tools}</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* STC Yemen Tab */}
        <TabsContent value="stc" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
            <GlassPanel title="5,000+ UAE-Aligned STC Bot Accounts (Southern Yemen)" description="December 2025 analysis">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center">
                    <div className="text-2xl font-bold text-rose-400">{data.stcBotsData.botAccountsDetected}</div>
                    <p className="text-sm text-platinum-400">Bot Accounts Detected</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-400">{data.stcBotsData.estimatedActualBots}</div>
                    <p className="text-sm text-platinum-400">Estimated Actual Bots</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-platinum-200">{data.stcBotsData.tweetsAnalyzed}</div>
                    <p className="text-sm text-platinum-400">Tweets Analyzed</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-platinum-200">{data.stcBotsData.uniqueAccountsInDataset}</div>
                    <p className="text-sm text-platinum-400">Unique Accounts</p>
                  </div>
                </div>

                {/* Hashtag */}
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                  <p className="text-lg font-bold text-emerald-400">{data.stcBotsData.hashtagAnalyzed}</p>
                </div>

                {/* Key Finding */}
                <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4">
                  <h4 className="text-sm font-semibold text-rose-400 mb-2">Key Finding</h4>
                  <p className="text-sm text-platinum-300">{data.stcBotsData.keyFinding}</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Troll Farms Tab */}
        <TabsContent value="trolls" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
            {/* Troll Farm Operations */}
            <GlassPanel title="Arab Troll Farm Operations" description="500-person army with shift-based operations">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center">
                    <div className="text-2xl font-bold text-rose-400">{data.trollFarmData.trollArmySize}</div>
                    <p className="text-sm text-platinum-400">Troll Army Size</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-400">{data.trollFarmData.accountsPerTroll}</div>
                    <p className="text-sm text-platinum-400">Accounts per Troll</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-gold">{data.trollFarmData.monthlyPaymentSeniorTroll}</div>
                    <p className="text-sm text-platinum-400">Senior Troll Pay</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-platinum-200">{data.trollFarmData.monthlyPaymentEntryLevel}</div>
                    <p className="text-sm text-platinum-400">Entry-Level Pay</p>
                  </div>
                </div>

                {/* Operational Structure */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Operational Structure</h4>
                  <div className="space-y-2">
                    {data.trollFarmData.operationalStructure.map((s: string, idx: number) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="flex items-start gap-2 rounded-lg border border-platinum-700 bg-platinum-800/50 px-3 py-2"
                      >
                        <Minus className="h-4 w-4 text-orange-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-platinum-300">{s}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Diavolo Network */}
            <GlassPanel title="Saudi Troll Farm (Diavolo Network)" description="Up to 3,700 automated/semi-automated accounts">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center">
                    <div className="text-2xl font-bold text-rose-400">{data.diavoloNetworkData.automatedSemiAutomatedAccounts}</div>
                    <p className="text-sm text-platinum-400">Accounts</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-400">{data.diavoloNetworkData.tweetsPerDay}</div>
                    <p className="text-sm text-platinum-400">Tweets/Day</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-platinum-200">{data.diavoloNetworkData.accountsSuspended2016}</div>
                    <p className="text-sm text-platinum-400">Suspended 2016</p>
                  </div>
                  <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                    <div className="text-2xl font-bold text-platinum-200">{data.diavoloNetworkData.monthlyAccountCreationAvg}</div>
                    <p className="text-sm text-platinum-400">Monthly Creation Avg</p>
                  </div>
                </div>

                {/* Hashtag Distribution */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Hashtag Distribution</h4>
                  <div className="space-y-2">
                    {data.diavoloNetworkData.hashtagDistribution.map((h: { hashtag: string; percentage: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 px-3 py-2">
                        <Badge variant="outline">{h.hashtag}</Badge>
                        <span className="text-sm font-bold text-rose-400">{h.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Network Details */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Network Details</h4>
                  <div className="space-y-2">
                    {data.diavoloNetworkData.networkDetails.map((n: string, idx: number) => (
                      <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="flex items-start gap-2 rounded-lg border border-platinum-700 bg-platinum-800/50 px-3 py-2"
                      >
                        <Info className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-platinum-300">{n}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Global Troll Farm Landscape */}
            <GlassPanel title="Global Troll Farm Landscape" description="30 governments worldwide operate troll armies">
              <div className="space-y-3">
                {data.globalTrollFarmData.globalTrollFarmOperations.map((op: { country: string; operation: string; details: string }, idx: number) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                    whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-emerald-400" />
                      <div>
                        <p className="font-semibold text-platinum-200">{op.country}</p>
                        <p className="text-sm text-platinum-400">{op.operation}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">{op.details}</Badge>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Detection Tab */}
        <TabsContent value="detection" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
            {/* Botometer Specs */}
            <GlassPanel title="Botometer Technical Specifications" description="Bot detection tool capabilities">
              <div className="space-y-6">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                    <h4 className="text-lg font-bold text-emerald-400 mb-2">Botometer-V4</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-platinum-400">Daily Queries:</span><span className="text-platinum-200">{data.botometerSpecs.features[0].dailyQueries}</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Data Required:</span><span className="text-platinum-200">{data.botometerSpecs.features[0].dataRequired}</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Speed:</span><span className="text-platinum-200">{data.botometerSpecs.features[0].speed}</span></div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-denim-500/30 bg-denim-500/10 p-4">
                    <h4 className="text-lg font-bold text-denim-400 mb-2">BotometerLite</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-platinum-400">Daily Queries:</span><span className="text-platinum-200">{data.botometerSpecs.features[1].dailyQueries}</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Data Required:</span><span className="text-platinum-200">{data.botometerSpecs.features[1].dataRequired}</span></div>
                      <div className="flex justify-between"><span className="text-platinum-400">Speed:</span><span className="text-platinum-200">{data.botometerSpecs.features[1].speed}</span></div>
                    </div>
                  </div>
                </div>

                {/* Accuracy Metrics */}
                <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Accuracy Metrics</h4>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-400">{data.botometerSpecs.accuracyMetrics.crossValidationAUC}</div>
                      <p className="text-xs text-platinum-400">Cross-Validation AUC</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">{data.botometerSpecs.totalFeatures}</div>
                      <p className="text-xs text-platinum-400">Total Features</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-platinum-200">0-5</div>
                      <p className="text-xs text-platinum-400">Display Scale</p>
                    </div>
                  </div>
                </div>

                {/* Features Analyzed */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Features Analyzed</h4>
                  <div className="flex flex-wrap gap-2">
                    {data.botometerSpecs.featuresAnalyzed.map((f: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="bg-platinum-700/50">{f}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Detection Indicators */}
            <GlassPanel title="Bot Detection Indicators" description="Visual, behavioral, network, and content indicators">
              <div className="space-y-6">
                {/* Visual/Profile */}
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">Visual/Profile Indicators</h4>
                  <div className="space-y-2">
                    {data.botDetectionIndicators.visualProfile.map((ind: { indicator: string; description: string; detectionWeight: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 px-3 py-2">
                        <div>
                          <p className="text-sm text-platinum-200">{ind.indicator}</p>
                          <p className="text-xs text-platinum-500">{ind.description}</p>
                        </div>
                        <Badge variant="outline" className={ind.detectionWeight === 'High' ? 'border-rose-500/50 text-rose-400' : 'border-platinum-600 text-platinum-400'}>{ind.detectionWeight}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Behavioral */}
                <div>
                  <h4 className="text-sm font-semibold text-orange-400 mb-3">Behavioral Indicators</h4>
                  <div className="space-y-2">
                    {data.botDetectionIndicators.behavioral.map((ind: { indicator: string; statistic: string; source: string }, idx: number) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 px-3 py-2">
                        <div>
                          <p className="text-sm text-platinum-200">{ind.indicator}</p>
                          <p className="text-xs text-platinum-500">Source: {ind.source}</p>
                        </div>
                        <span className="text-sm font-medium text-teal-400">{ind.statistic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Engagement Fraud Tab */}
        <TabsContent value="engagement" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
            <GlassPanel title="Engagement Fraud KPIs" description="Fake followers and engagement metrics">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.dashboardKPIs.engagementFraud.map((kpi: { kpi: string; value: string; source: string }, idx: number) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center"
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="text-2xl font-bold text-rose-400">{kpi.value}</div>
                    <p className="text-sm text-platinum-400 mt-1">{kpi.kpi}</p>
                    <p className="text-xs text-platinum-500 mt-1">Source: {kpi.source}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Impact KPIs" description="Measured impact of bot and inauthentic operations">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.dashboardKPIs.impact.map((kpi: { kpi: string; value: string; context: string }, idx: number) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center"
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="text-2xl font-bold text-emerald-400">{kpi.value}</div>
                    <p className="text-sm text-platinum-400 mt-1">{kpi.kpi}</p>
                    <p className="text-xs text-platinum-500 mt-1">{kpi.context}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Detection Confidence KPIs" description="Bot detection accuracy and limitations">
              <div className="grid gap-4 sm:grid-cols-3">
                {data.dashboardKPIs.detectionConfidence.map((kpi: { kpi: string; value: string; source: string }, idx: number) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center"
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="text-2xl font-bold text-teal-400">{kpi.value}</div>
                    <p className="text-sm text-platinum-400 mt-1">{kpi.kpi}</p>
                    <p className="text-xs text-platinum-500 mt-1">Source: {kpi.source}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
            {/* Companies */}
            <GlassPanel title="Entity Registry - Companies/Organizations" description="Organizations involved in bot operations">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {data.entityRegistryCompanies.map((entity: { entity: string; type: string; country?: string; role: string }, idx: number) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center gap-3">
                        <Building2 className="h-5 w-5 text-emerald-400" />
                        <div>
                          <p className="font-semibold text-platinum-200">{entity.entity}</p>
                          <p className="text-sm text-platinum-400">{entity.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs">{entity.type}</Badge>
                        {entity.country && <p className="text-xs text-platinum-500 mt-1">{entity.country}</p>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Targets */}
            <GlassPanel title="Entity Registry - Targets" description="Individuals targeted by UAE operations">
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {data.entityRegistryTargets.map((entity: { entity: string; type: string; country?: string; role: string }, idx: number) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="flex items-center justify-between rounded-lg border border-rose-500/30 bg-rose-500/10 p-4"
                      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                    >
                      <div className="flex items-center gap-3">
                        <UserCog className="h-5 w-5 text-rose-400" />
                        <div>
                          <p className="font-semibold text-platinum-200">{entity.entity}</p>
                          <p className="text-sm text-platinum-400">{entity.role}</p>
                        </div>
                      </div>
                      <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">{entity.type}</Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Researchers */}
            <GlassPanel title="Entity Registry - Researchers/Experts" description="Experts documenting bot operations">
              <div className="space-y-3">
                {data.entityRegistryResearchers.map((entity: { entity: string; type: string; country?: string; role: string }, idx: number) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                    whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center gap-3">
                      <Search className="h-5 w-5 text-teal-400" />
                      <div>
                        <p className="font-semibold text-platinum-200">{entity.entity}</p>
                        <p className="text-sm text-platinum-400">{entity.role}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">{entity.type}</Badge>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
            <GlassPanel title="Source Credibility Matrix" description="All sources by tier and credibility">
              <ScrollArea className="h-[500px]">
                <div className="space-y-3">
                  {data.sourceCredibilityMatrix.map((source: SourceCredibilityMatrixEntry, idx: number) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                    >
                      <div className="flex-1">
                        <p className="font-medium text-platinum-200 text-sm">{source.source}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-platinum-500">Score: {source.credibilityScore}/10</span>
                          <span className="text-xs text-platinum-500">{source.trustLevel}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getUrlStatusBadge(source.urlStatus)}
                        {getTierBadge(source.tier)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* URL Fetch Status */}
            <GlassPanel title="URL Fetch Status Log" description="Research source accessibility breakdown">
              <div className="grid gap-4 lg:grid-cols-3 mb-6">
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                  <div className="text-3xl font-bold text-emerald-400">{data.fetchSummary.fullyAccessible}</div>
                  <p className="text-sm text-platinum-400">Fully Accessible</p>
                  <p className="text-xs text-platinum-500">{data.fetchSummary.fullyAccessiblePercent}</p>
                </div>
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-center">
                  <div className="text-3xl font-bold text-amber-400">{data.fetchSummary.partiallyAccessible}</div>
                  <p className="text-sm text-platinum-400">Partially Accessible</p>
                  <p className="text-xs text-platinum-500">{data.fetchSummary.partiallyAccessiblePercent}</p>
                </div>
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                  <div className="text-3xl font-bold text-red-400">{data.fetchSummary.blocked}</div>
                  <p className="text-sm text-platinum-400">Blocked</p>
                  <p className="text-xs text-platinum-500">{data.fetchSummary.blockedPercent}</p>
                </div>
              </div>

              <ScrollArea className="h-[300px]">
                <div className="space-y-2">
                  {data.urlFetchStatusLog.map((url: { url: string; status: string; dataExtracted?: string; contentQuality: string }, idx: number) => (
                    <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 px-3 py-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-platinum-300 truncate">{url.url}</p>
                        {url.dataExtracted && <p className="text-xs text-platinum-500">Extracted: {url.dataExtracted}</p>}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {getUrlStatusBadge(url.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Queries Tab */}
        <TabsContent value="queries" className="space-y-6">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
            <GlassPanel title="Atomic Queries Executed" description="21 comprehensive search queries executed">
              <ScrollArea className="h-[500px]">
                <div className="space-y-3">
                  {data.atomicQueriesExecuted.map((q: { number: number; query: string; status: string; keyFindings: string }, idx: number) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="flex items-start gap-3 rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald/20 text-emerald shrink-0">
                        {q.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-platinum-200 text-sm">{q.query}</p>
                        <p className="text-xs text-platinum-500 mt-1">Findings: {q.keyFindings}</p>
                      </div>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 text-xs shrink-0">{q.status}</Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Sentiment Analysis */}
            <GlassPanel title="Sentiment Analysis by Topic" description="Overall sentiment assessment">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {data.sentimentAnalysisByTopic.map((item: { topic: string; overallSentiment: string; dominantNarrative: string; sourceDiversity: string }, idx: number) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-platinum-200">{item.topic}</h4>
                        <Badge
                          className={
                            item.overallSentiment.includes('NEGATIVE') ? 'bg-red-500/20 text-red-400 border-red-500/50' :
                            item.overallSentiment.includes('POSITIVE') ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                            'bg-amber-500/20 text-amber-400 border-amber-500/50'
                          }
                        >
                          {item.overallSentiment}
                        </Badge>
                      </div>
                      <p className="text-sm text-platinum-400 mb-1">{item.dominantNarrative}</p>
                      <p className="text-xs text-platinum-500">Sources: {item.sourceDiversity}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* Summary Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-6"
        style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-5 w-5 text-emerald-400" />
          <h3 className="text-lg font-semibold text-platinum-200">Analysis Summary</h3>
        </div>
        <p className="text-sm text-platinum-400 leading-relaxed">
          {data.executiveSummary.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            Last Updated: {data.executiveSummary.enrichmentDate}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Total URLs: {data.fetchSummary.totalUrls}
          </Badge>
          <Badge variant="outline" className="text-xs">
            SSOT: {data.executiveSummary.ssotStatus.split(' -- ')[0]}
          </Badge>
        </div>
      </motion.div>
    </div>
  )
}
