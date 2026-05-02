// @ts-nocheck
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
  TrendingUp,
  Users,
  Zap,
  MessageSquare,
  Globe,
  Shield,
  Target,
  Award,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Scale,
  MessageCircle,
  Building2,
  BookOpen,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Target as TargetIcon,
  Layers,
  ChevronRight,
  Hash,
  Ban,
  Wifi,
  WifiOff,
  UserX,
  FileX,
  Bot,
  Share2,
  EyeOff,
  Lock,
  AlertOctagon,
  Newspaper,
  Globe2,
  Search,
  ShieldAlert,
  Scale as ScaleIcon,
  FileText,
  Cctv,
  TrendingDown,
  Minus,
} from 'lucide-react'
import { useMediaBiasData } from '@/lib/data-loader/hooks'

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

const cardHover = {
  hover: { scale: 1.02, transition: { duration: 0.2 } },
}

// Helper function for sentiment colors
function getSentimentColor(sentiment: string) {
  if (sentiment === 'Negative') return 'text-rose-400'
  if (sentiment === 'Positive') return 'text-emerald-400'
  if (sentiment === 'Mixed') return 'text-amber-400'
  return 'text-platinum-400'
}

function getSentimentBg(sentiment: string) {
  if (sentiment === 'Negative') return 'bg-rose-500/20 border-rose-500/30'
  if (sentiment === 'Positive') return 'bg-emerald-500/20 border-emerald-500/30'
  if (sentiment === 'Mixed') return 'bg-amber-500/20 border-amber-500/30'
  return 'bg-platinum-500/20 border-platinum-500/30'
}

function getCredibilityColor(credibility: string) {
  if (credibility.includes('High')) return 'emerald'
  if (credibility.includes('Low')) return 'rose'
  if (credibility.includes('Medium')) return 'amber'
  return 'platinum'
}

export default function MediaBiasPage() {
  const { data, loading, error } = useMediaBiasData()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-platinum-400 font-rajdhani text-lg"
        >
          Loading Media Bias data...
        </motion.div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="border-rose-500/50 bg-rose-500/10">
          <CardContent className="p-6 text-rose-400">
            Error loading data: {error.message}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!data) return null

  const {
    executionMetadata,
    mediaOutlets,
    regulatoryFramework,
    legalFramework,
    censorshipMechanisms,
    botNetworks,
    disInfluencerEcosystem,
    iranUaeWarCaseStudy,
    suppressionCaseStudies,
    sourceComparisons,
    internationalRankings,
    keyStatistics,
    sentimentAnalysis,
    suppressedTopics,
    synthesizedFindings,
    dashboardMetrics,
  } = data

  // Key metrics for cards
  const keyMetrics = [
    {
      title: 'RSF Ranking',
      value: '164th/180',
      icon: <ScaleIcon className="h-6 w-6" />,
      gradient: 'rose' as const,
      trend: 'down' as const,
    },
    {
      title: 'Internet Freedom',
      value: '30/100',
      icon: <WifiOff className="h-6 w-6" />,
      gradient: 'rose' as const,
      trend: 'down' as const,
    },
    {
      title: 'Websites Blocked',
      value: '3,766',
      icon: <Ban className="h-6 w-6" />,
      gradient: 'fuchsia' as const,
      trend: 'neutral' as const,
    },
    {
      title: 'Bot Accounts Removed',
      value: '13,258+',
      icon: <Bot className="h-6 w-6" />,
      gradient: 'purple' as const,
      trend: 'neutral' as const,
    },
    {
      title: 'VPN Adoption',
      value: '85.5%',
      icon: <Shield className="h-6 w-6" />,
      gradient: 'orange' as const,
      trend: 'up' as const,
    },
    {
      title: '2026 Conflict Arrests',
      value: '375+',
      icon: <UserX className="h-6 w-6" />,
      gradient: 'rose' as const,
      trend: 'down' as const,
    },
  ]

  // Sentiment chart data
  const sentimentChartData = [
    { name: 'Negative', value: 65, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 20, color: CHART_COLORS.platinum },
    { name: 'Positive', value: 15, color: CHART_COLORS.emerald },
  ]

  // Source comparison data
  const alJazeeraVsGulfNews = sourceComparisons.alJazeeraVsGulfNews.map((item) => ({
    aspect: item.aspect,
    alJazeera: item.alJazeera === 'Blocked in UAE 2017-2023' ? 0 : 75,
    gulfNews: item.gulfNews === 'Available in UAE' ? 100 : 20,
  }))

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge
              variant="fuchsia"
              className="mb-2 bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/50 font-rajdhani"
            >
              <EyeOff className="w-3 h-3 mr-1" />
              MEDIA BIAS & AGENDA SETTING
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold gradient-text-fuchsia-500"
          >
            UAE Media Bias & Agenda Setting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-platinum-400"
          >
            Comprehensive analysis of media bias, censorship, propaganda, and information control in the UAE
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3"
        >
          <Button
            variant="outline"
            className="gap-2 border-fuchsia-500/50 text-fuchsia-400 hover:bg-fuchsia-500/10 font-rajdhani"
          >
            <FileText className="h-4 w-4" />
            {executionMetadata.queriesExecuted} Queries
          </Button>
          <Button className="bg-gradient-fuchsia hover:opacity-90 text-white gap-2 font-rajdhani">
            <BarChart3 className="h-4 w-4" />
            {executionMetadata.pagesFetched}+ Sources
          </Button>
        </motion.div>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        <AnimatePresence mode="wait">
          {keyMetrics.map((kpi, idx) => (
            <motion.div
              key={kpi.title}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: idx * 0.08 }}
            >
              <MetricCard
                title={kpi.title}
                value={kpi.value}
                icon={kpi.icon}
                gradient={kpi.gradient}
                trend={kpi.trend}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-navy-800/50 border border-navy-700 font-rajdhani">
          <TabsTrigger value="overview" className="font-rajdhani data-[state=active]:bg-fuchsia-500/20">
            <Eye className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="outlets" className="font-rajdhani data-[state=active]:bg-fuchsia-500/20">
            <Newspaper className="w-4 h-4 mr-2" />
            Media Outlets
          </TabsTrigger>
          <TabsTrigger value="censorship" className="font-rajdhani data-[state=active]:bg-fuchsia-500/20">
            <Ban className="w-4 h-4 mr-2" />
            Censorship
          </TabsTrigger>
          <TabsTrigger value="bots" className="font-rajdhani data-[state=active]:bg-fuchsia-500/20">
            <Bot className="w-4 h-4 mr-2" />
            Bot Networks
          </TabsTrigger>
          <TabsTrigger value="war" className="font-rajdhani data-[state=active]:bg-fuchsia-500/20">
            <AlertTriangle className="w-4 h-4 mr-2" />
            2026 War
          </TabsTrigger>
          <TabsTrigger value="cases" className="font-rajdhani data-[state=active]:bg-fuchsia-500/20">
            <FileX className="w-4 h-4 mr-2" />
            Case Studies
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Distribution */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <Activity className="w-5 h-5 text-fuchsia-400" />
                Overall Sentiment Distribution
              </h3>
              <div className="flex items-center justify-center">
                <PieChart
                  data={sentimentChartData}
                  height={250}
                  showLegend={true}
                  donut={true}
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-rose-500/20 rounded-lg border border-rose-500/30">
                  <p className="text-2xl font-bold text-rose-400">65%</p>
                  <p className="text-xs text-platinum-400">Negative</p>
                </div>
                <div className="text-center p-3 bg-platinum-800/30 rounded-lg border border-platinum-700/30">
                  <p className="text-2xl font-bold text-platinum-400">20%</p>
                  <p className="text-xs text-platinum-400">Neutral</p>
                </div>
                <div className="text-center p-3 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                  <p className="text-2xl font-bold text-emerald-400">15%</p>
                  <p className="text-xs text-platinum-400">Positive</p>
                </div>
              </div>
            </GlassPanel>

            {/* Key Suppressed Topics */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-fuchsia-400" />
                Key Suppressed Topics
              </h3>
              <div className="space-y-2">
                {suppressedTopics.slice(0, 6).map((topic, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    whileHover={{ x: 4 }}
                    className="bg-navy-800/50 border border-navy-700 rounded-lg p-3 flex items-start gap-2"
                  >
                    <XCircle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-platinum-300">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* International Rankings */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Globe className="w-5 h-5 text-fuchsia-400" />
              International Rankings & Scores
            </h3>
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-platinum-400">RSF Press Freedom</span>
                  <Badge variant="rose" className="font-rajdhani">164th/180</Badge>
                </div>
                <p className="text-xs text-rose-400">"{internationalRankings.rsfAssessment.substring(0, 80)}..."</p>
              </div>
              <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-platinum-400">Freedom House (2023)</span>
                  <Badge variant="rose" className="font-rajdhani">30/100</Badge>
                </div>
                <p className="text-xs text-rose-400">"Not Free" - Online censorship is rampant</p>
              </div>
              <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-platinum-400">MBZ Fake Followers</span>
                  <Badge variant="rose" className="font-rajdhani">Up to 91%</Badge>
                </div>
                <p className="text-xs text-rose-400">Twitter accounts sharing posts by Emirati leader</p>
              </div>
            </div>
          </GlassPanel>

          {/* Key Findings */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Target className="w-5 h-5 text-fuchsia-400" />
              Key Findings
            </h3>
            <div className="grid gap-4 lg:grid-cols-2">
              {synthesizedFindings.slice(0, 6).map((finding, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  whileHover={{ scale: 1.02 }}
                  className="bg-navy-800/50 border border-navy-700 rounded-lg p-4"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5" />
                    <span className="font-semibold text-platinum-200">{finding.finding}</span>
                  </div>
                  <p className="text-xs text-platinum-400 leading-relaxed">{finding.description}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Media Outlets Tab */}
        <TabsContent value="outlets" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* UAE State Media */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <Building2 className="w-5 h-5 text-fuchsia-400" />
                UAE State-Affiliated Media
              </h3>
              <div className="space-y-4">
                {mediaOutlets.filter(o => o.location.includes('UAE')).slice(0, 4).map((outlet, idx) => (
                  <motion.div
                    key={outlet.name}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    whileHover={{ x: 4 }}
                    className="bg-navy-800/50 border border-navy-700 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-platinum-200">{outlet.name}</span>
                          <Badge variant="rose" className="font-rajdhani text-xs">State</Badge>
                        </div>
                        <p className="text-xs text-platinum-400 mb-2">{outlet.owner}</p>
                        <div className="flex flex-wrap gap-1">
                          {outlet.keyConcerns.slice(0, 2).map((concern, i) => (
                            <Badge key={i} variant="outline" className="border-rose-500/30 text-rose-400 text-xs">
                              {concern}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Badge variant={getCredibilityColor(outlet.credibility)} className="font-rajdhani text-xs">
                        {outlet.credibility}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Regional & International Media */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-fuchsia-400" />
                Regional & Independent Media
              </h3>
              <div className="space-y-4">
                {mediaOutlets.filter(o => !o.location.includes('UAE')).slice(0, 4).map((outlet, idx) => (
                  <motion.div
                    key={outlet.name}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    whileHover={{ x: 4 }}
                    className="bg-navy-800/50 border border-navy-700 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-platinum-200">{outlet.name}</span>
                          <Badge variant="emerald" className="font-rajdhani text-xs">Independent</Badge>
                        </div>
                        <p className="text-xs text-platinum-400 mb-2">{outlet.location}</p>
                        <p className="text-xs text-platinum-500">{outlet.primarySources}</p>
                      </div>
                      <Badge variant={getCredibilityColor(outlet.credibility)} className="font-rajdhani text-xs">
                        {outlet.credibility}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Source Comparison */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Share2 className="w-5 h-5 text-fuchsia-400" />
              Source Comparison: Al Jazeera vs Gulf News
            </h3>
            <BarChart
              data={alJazeeraVsGulfNews}
              xAxisKey="aspect"
              bars={[
                { dataKey: 'alJazeera', name: 'Al Jazeera', color: '#10b981' },
                { dataKey: 'gulfNews', name: 'Gulf News', color: '#f43f5e' },
              ]}
              height={300}
              showGrid={true}
              showLegend={true}
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                <p className="text-sm font-semibold text-emerald-400 mb-1">Al Jazeera</p>
                <p className="text-xs text-platinum-400">More authentic Arab perspective, blocked in UAE 2017-2023</p>
              </div>
              <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-3">
                <p className="text-sm font-semibold text-rose-400 mb-1">Gulf News</p>
                <p className="text-xs text-platinum-400">Aligned with UAE government, relies on WAM state agency</p>
              </div>
            </div>
          </GlassPanel>

          {/* WAM Profile */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-fuchsia-400" />
              WAM - Emirates News Agency
            </h3>
            <div className="grid gap-4 lg:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-fuchsia-400 mb-2">Profile</h4>
                <ul className="space-y-1">
                  <li className="text-sm text-platinum-300 flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-fuchsia-500" />
                    Founded: November 1976
                  </li>
                  <li className="text-sm text-platinum-300 flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-fuchsia-500" />
                    Headquarters: Abu Dhabi, UAE
                  </li>
                  <li className="text-sm text-platinum-300 flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-fuchsia-500" />
                    Languages: Arabic, English, French, Portuguese, Hebrew
                  </li>
                  <li className="text-sm text-platinum-300 flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-fuchsia-500" />
                    International Offices: 6 (Cairo, Beirut, Washington, etc.)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-rose-400 mb-2">Key Concern</h4>
                <p className="text-sm text-platinum-300">
                  "The official national channel supporting the dissemination, distribution, and translation of approved official State news"
                </p>
                <p className="text-xs text-rose-400 mt-2">
                  Absorbed into National Media Authority (NMA) in 2025
                </p>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Censorship Tab */}
        <TabsContent value="censorship" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Website Blocking */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <Ban className="w-5 h-5 text-fuchsia-400" />
                Website Blocking
              </h3>
              <div className="space-y-3">
                {censorshipMechanisms.websiteBlocking.slice(0, 6).map((site, idx) => (
                  <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-platinum-300">{site.platform}</span>
                    <Badge variant="rose" className="font-rajdhani text-xs">{site.status}</Badge>
                  </div>
                ))}
              </div>
              <p className="text-xs text-rose-400 mt-4">
                TRA Blocked Websites: 3,766 (Q4 2022)
              </p>
            </GlassPanel>

            {/* VoIP Blocking */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <WifiOff className="w-5 h-5 text-fuchsia-400" />
                VoIP & Communication Blocking
              </h3>
              <div className="space-y-3">
                {censorshipMechanisms.voipBlocking.slice(0, 5).map((voip, idx) => (
                  <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-platinum-300">{voip.service}</span>
                    <Badge variant="rose" className="font-rajdhani text-xs">Blocked {voip.since}</Badge>
                  </div>
                ))}
              </div>
              <p className="text-xs text-emerald-400 mt-4">
                Permitted alternatives: C'ME, BOTIM
              </p>
            </GlassPanel>
          </div>

          {/* Legal Framework */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Lock className="w-5 h-5 text-fuchsia-400" />
              Legal Framework for Media Control
            </h3>
            <div className="space-y-4">
              {legalFramework.laws.slice(0, 4).map((law, idx) => (
                <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-platinum-200">{law.name}</p>
                      <p className="text-xs text-platinum-400 mt-1">{law.purpose || law.keyProhibitions}</p>
                    </div>
                    {law.imprisonment && (
                      <Badge variant="rose" className="font-rajdhani text-xs">
                        {law.imprisonment}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Penalties Summary */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <AlertOctagon className="w-5 h-5 text-fuchsia-400" />
              Penalties Summary
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-navy-700">
                    <th className="text-left text-xs text-platinum-400 font-rajdhani pb-2">Violation</th>
                    <th className="text-left text-xs text-platinum-400 font-rajdhani pb-2">Imprisonment</th>
                    <th className="text-left text-xs text-platinum-400 font-rajdhani pb-2">Fine</th>
                  </tr>
                </thead>
                <tbody>
                  {legalFramework.penaltiesSummary.map((penalty, idx) => (
                    <tr key={idx} className="border-b border-navy-800">
                      <td className="py-2 text-sm text-platinum-300">{penalty.violation}</td>
                      <td className="py-2 text-sm text-rose-400">{penalty.imprisonment}</td>
                      <td className="py-2 text-sm text-amber-400">{penalty.fine}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>

          {/* Journalism Suppression */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <UserX className="w-5 h-5 text-fuchsia-400" />
              Journalism Suppression Cases
            </h3>
            <div className="space-y-3">
              {censorshipMechanisms.journalismSuppressionCases.map((journalist, idx) => (
                <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-platinum-200">{journalist.case}</p>
                      <p className="text-xs text-platinum-400 mt-1">{journalist.details}</p>
                    </div>
                    <Badge variant="rose" className="font-rajdhani text-xs">{journalist.year}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Bot Networks Tab */}
        <TabsContent value="bots" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Twitter Account Removals */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <Bot className="w-5 h-5 text-fuchsia-400" />
                Twitter/X Account Removals
              </h3>
              <div className="space-y-4">
                {botNetworks.twitterRemovals.map((removal, idx) => (
                  <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-platinum-200">{removal.date}</span>
                      <Badge variant="fuchsia" className="font-rajdhani">{removal.accountsRemoved.toLocaleString()}</Badge>
                    </div>
                    <p className="text-xs text-platinum-400">{removal.purpose}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-rose-400 mt-4">
                Total: 13,258+ accounts removed for coordinated manipulation
              </p>
            </GlassPanel>

            {/* Fake Account Statistics */}
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-fuchsia-400" />
                Fake Account Statistics
              </h3>
              <div className="space-y-4">
                {botNetworks.fakeAccountStatistics.map((stat, idx) => (
                  <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-platinum-300">{stat.metric}</span>
                      <Badge variant="rose" className="font-rajdhani">{stat.value}</Badge>
                    </div>
                    <p className="text-xs text-platinum-500">Source: {stat.source}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Bot Network Operation Structure */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Cctv className="w-5 h-5 text-fuchsia-400" />
              Bot Network Operation Structure
            </h3>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                <p className="text-sm font-semibold text-fuchsia-400 mb-2">Oversight</p>
                <p className="text-xs text-platinum-400">{botNetworks.botNetworkOperationStructure.oversight}</p>
              </div>
              <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                <p className="text-sm font-semibold text-fuchsia-400 mb-2">Account Characteristics</p>
                <p className="text-xs text-platinum-400">{botNetworks.botNetworkOperationStructure.accountCharacteristics}</p>
              </div>
              <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                <p className="text-sm font-semibold text-fuchsia-400 mb-2">Techniques</p>
                <p className="text-xs text-platinum-400">{botNetworks.botNetworkOperationStructure.techniques}</p>
              </div>
              <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                <p className="text-sm font-semibold text-fuchsia-400 mb-2">Purpose</p>
                <p className="text-xs text-platinum-400">{botNetworks.botNetworkOperationStructure.purpose}</p>
              </div>
            </div>
          </GlassPanel>

          {/* Dis-Influencer Ecosystem */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Users className="w-5 h-5 text-fuchsia-400" />
              Dis-Influencer Ecosystem
            </h3>
            <div className="grid gap-4 lg:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-rose-400 mb-3">Fake News Websites (Oct-Nov 2024)</h4>
                <div className="space-y-2">
                  {disInfluencerEcosystem.fakeNewsWebsites2024.map((site, idx) => (
                    <div key={idx} className="bg-navy-800/30 rounded p-2 flex items-center justify-between">
                      <span className="text-sm text-platinum-300">{site.website}</span>
                      <Badge variant="outline" className="border-platinum-700/30 text-platinum-400 text-xs">
                        {site.registrationPeriod}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-rose-400 mb-3">Central Narratives</h4>
                <div className="space-y-2">
                  {disInfluencerEcosystem.characteristics.centralNarratives.map((narrative, idx) => (
                    <div key={idx} className="bg-navy-800/30 rounded p-2 flex items-start gap-2">
                      <ChevronRight className="w-3 h-3 text-fuchsia-500 mt-0.5" />
                      <span className="text-xs text-platinum-300">{narrative}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 bg-rose-500/10 border border-rose-500/30 rounded-lg p-3">
              <p className="text-xs text-rose-400">
                Studio Evidence: Members record videos in same studio with identical set dressing (black-and-silver globe)
              </p>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* 2026 War Tab */}
        <TabsContent value="war" className="space-y-6">
          {/* Timeline */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-fuchsia-400" />
              2026 Iran-UAE War: Timeline
            </h3>
            <ScrollArea className="h-[300px]">
              <div className="space-y-3 pr-4">
                {iranUaeWarCaseStudy.timeline.map((event, idx) => (
                  <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-3 flex items-start gap-3">
                    <div className="w-24 flex-shrink-0">
                      <Badge variant="fuchsia" className="font-rajdhani text-xs">{event.date}</Badge>
                    </div>
                    <p className="text-sm text-platinum-300">{event.incident}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>

          {/* Casualties & Defense */}
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <Users className="w-5 h-5 text-fuchsia-400" />
                Casualties
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-rose-500/20 border border-rose-500/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-rose-400">{iranUaeWarCaseStudy.casualties.totalKilled}</p>
                  <p className="text-xs text-platinum-400">Killed</p>
                </div>
                <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-amber-400">{iranUaeWarCaseStudy.casualties.totalInjured}</p>
                  <p className="text-xs text-platinum-400">Injured</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-platinum-400 mb-2">Killed by Nationality:</p>
                {iranUaeWarCaseStudy.casualties.killedByNationality.map((nat, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-navy-800/30 rounded p-2">
                    <span className="text-sm text-platinum-300">{nat.nationality}</span>
                    <Badge variant="rose" className="font-rajdhani text-xs">{nat.count}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel className="p-6">
              <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
                <Shield className="w-5 h-5 text-fuchsia-400" />
                Defense Interceptions (As of Apr 9)
              </h3>
              <div className="space-y-4">
                <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-platinum-300">Ballistic Missiles</span>
                    <Badge variant="emerald" className="font-rajdhani">537</Badge>
                  </div>
                </div>
                <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-platinum-300">Drones</span>
                    <Badge variant="emerald" className="font-rajdhani">2,256</Badge>
                  </div>
                </div>
                <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-platinum-300">Cruise Missiles</span>
                    <Badge variant="emerald" className="font-rajdhani">26</Badge>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* Official Narrative vs Reality */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Eye className="w-5 h-5 text-fuchsia-400" />
              Official Narrative vs Observed Reality (Bellingcat)
            </h3>
            <div className="space-y-4">
              {iranUaeWarCaseStudy.officialNarrativeVsReality.map((item, idx) => (
                <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                  <p className="font-semibold text-fuchsia-400 mb-2">{item.location}</p>
                  <div className="grid gap-2 lg:grid-cols-2">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded p-2">
                      <p className="text-xs text-emerald-400 font-semibold">Official Claim</p>
                      <p className="text-xs text-platinum-300 mt-1">{item.officialClaim}</p>
                    </div>
                    <div className="bg-rose-500/10 border border-rose-500/30 rounded p-2">
                      <p className="text-xs text-rose-400 font-semibold">Observed Reality</p>
                      <p className="text-xs text-platinum-300 mt-1">{item.observedReality}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Media Crackdown */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Lock className="w-5 h-5 text-fuchsia-400" />
              Media Crackdown During Conflict
            </h3>
            <div className="grid gap-4 lg:grid-cols-3">
              {iranUaeWarCaseStudy.mediaCrackdown.map((item, idx) => (
                <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                  <p className="text-2xl font-bold text-rose-400">{item.value}</p>
                  <p className="text-xs text-platinum-400 mt-1">{item.metric}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Economic Impact */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-fuchsia-400" />
              Economic Impact
            </h3>
            <div className="grid gap-3 lg:grid-cols-2">
              {iranUaeWarCaseStudy.economicImpact.map((impact, idx) => (
                <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-3 flex items-center justify-between">
                  <span className="text-sm text-platinum-300">{impact.metric}</span>
                  <Badge variant="amber" className="font-rajdhani text-xs">{impact.value}</Badge>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Case Studies Tab */}
        <TabsContent value="cases" className="space-y-6">
          {/* UAE-94 Trial */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <FileX className="w-5 h-5 text-fuchsia-400" />
              UAE-94 Trial Blackout (2012-2013)
            </h3>
            <div className="grid gap-4 lg:grid-cols-2">
              <div>
                <div className="space-y-3">
                  <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-platinum-300">Defendants</span>
                    <Badge variant="fuchsia" className="font-rajdhani">{suppressionCaseStudies.uae94TrialBlackout.defendants}</Badge>
                  </div>
                  <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-platinum-300">Convicted</span>
                    <Badge variant="rose" className="font-rajdhani">{suppressionCaseStudies.uae94TrialBlackout.convicted}</Badge>
                  </div>
                  <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-platinum-300">Sentences</span>
                    <Badge variant="rose" className="font-rajdhani">{suppressionCaseStudies.uae94TrialBlackout.sentences}</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-rose-400 mb-2">Violations</h4>
                <div className="space-y-2">
                  {suppressionCaseStudies.uae94TrialBlackout.violations.map((violation, idx) => (
                    <div key={idx} className="bg-navy-800/30 rounded p-2 flex items-start gap-2">
                      <XCircle className="w-3 h-3 text-rose-400 mt-0.5" />
                      <span className="text-xs text-platinum-300">{violation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 bg-rose-500/10 border border-rose-500/30 rounded-lg p-3">
              <p className="text-xs text-rose-400">
                UN Finding: All defendants were arbitrarily detained
              </p>
            </div>
          </GlassPanel>

          {/* Al Jazeera Blockade */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Ban className="w-5 h-5 text-fuchsia-400" />
              Al Jazeera Blockade (2017-2023)
            </h3>
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                <p className="text-sm font-semibold text-platinum-300 mb-2">Block Start</p>
                <p className="text-lg text-rose-400">{suppressionCaseStudies.alJazeeraBlockade.uaeBlockDate}</p>
              </div>
              <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                <p className="text-sm font-semibold text-platinum-300 mb-2">Duration</p>
                <p className="text-lg text-amber-400">{suppressionCaseStudies.alJazeeraBlockade.blockDuration}</p>
              </div>
              <div className="bg-navy-800/50 border border-navy-700 rounded-lg p-4">
                <p className="text-sm font-semibold text-platinum-300 mb-2">Prison for Sympathy</p>
                <p className="text-lg text-rose-400">{suppressionCaseStudies.alJazeeraBlockade.prisonForSympathy}</p>
              </div>
            </div>
            <div className="mt-4 bg-rose-500/10 border border-rose-500/30 rounded-lg p-3">
              <p className="text-xs text-rose-400">
                Countries Blocking: {suppressionCaseStudies.alJazeeraBlockade.countriesBlocking}
              </p>
              <p className="text-xs text-platinum-400 mt-1">
                Hotels ordered to block Al Jazeera channels under threat of {suppressionCaseStudies.alJazeeraBlockade.hotelFineThreat} fine
              </p>
            </div>
          </GlassPanel>

          {/* Regulatory Framework */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <Building2 className="w-5 h-5 text-fuchsia-400" />
              Regulatory Framework
            </h3>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <Badge variant="emerald" className="font-rajdhani mb-2">CURRENT</Badge>
                <p className="font-semibold text-platinum-200">{regulatoryFramework.current.name}</p>
                <p className="text-xs text-platinum-400 mt-1">Established: {regulatoryFramework.current.established}</p>
                <p className="text-xs text-platinum-500 mt-2">{regulatoryFramework.current.primaryObjective}</p>
              </div>
              <div className="bg-platinum-800/30 border border-platinum-700/30 rounded-lg p-4">
                <Badge variant="outline" className="border-platinum-500/30 text-platinum-400 font-rajdhani mb-2">DISSOLVED</Badge>
                <p className="font-semibold text-platinum-200">{regulatoryFramework.dissolved.name}</p>
                <p className="text-xs text-platinum-400 mt-1">Active: 2006-2021</p>
                <p className="text-xs text-platinum-500 mt-2">{regulatoryFramework.dissolved.coreFunction}</p>
              </div>
            </div>
          </GlassPanel>

          {/* Sentiment Analysis by Source Type */}
          <GlassPanel className="p-6">
            <h3 className="text-xl font-bold text-platinum-200 mb-4 font-rajdhani flex items-center gap-2">
              <ScaleIcon className="w-5 h-5 text-fuchsia-400" />
              Sentiment Analysis by Source Type
            </h3>
            <div className="space-y-3">
              {sentimentAnalysis.bySourceType.map((source, idx) => (
                <div key={idx} className="bg-navy-800/50 border border-navy-700 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-platinum-200">{source.sourceType}</p>
                    <p className="text-xs text-platinum-500 mt-1">Credibility: {source.credibility}</p>
                  </div>
                  <Badge
                    variant={source.overallSentiment.includes('Positive') ? 'emerald' : source.overallSentiment.includes('Negative') ? 'rose' : 'warning'}
                    className="font-rajdhani text-xs"
                  >
                    {source.overallSentiment}
                  </Badge>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Footer Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm text-platinum-500"
      >
        <p>
          Data sourced from {executionMetadata.pagesFetched}+ verified sources |
          {executionMetadata.queriesExecuted} queries executed |
          Framework v{executionMetadata.frameworkVersion}
        </p>
      </motion.div>
    </div>
  )
}
