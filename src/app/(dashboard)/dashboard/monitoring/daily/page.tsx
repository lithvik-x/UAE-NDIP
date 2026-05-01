'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MetricCard } from '@/components/dashboard/metric-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Zap,
  Shield,
  AlertCircle,
  Clock,
  Radio,
  CheckCircle,
  XCircle,
  AlertOctagon,
  Crown,
  Building2,
  Users,
  Newspaper,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  AlertTriangle,
  Trophy,
  Search,
  Network,
  Database,
  GitBranch,
  Globe2,
  Flag,
  Target,
  TrendingUp,
  Eye,
  Activity,
  Layers,
  Award,
  Gem,
  DollarSign,
  UsersIcon,
  Bell,
  Database as DatabaseIcon,
} from 'lucide-react'
import {
  wamData,
  uaeGovernmentMediaEcosystem,
  mediaFreeZones,
  keyMediaEvents,
  officialMediaSources,
  md12LeadershipFigures,
  anomalyDetectionMethodologies,
  crisisDetectionCategories,
  crisisCommunicationTools,
  crisisResponseTiers,
  socialMediaPlatforms,
  enterprisePlatforms,
  openSourceTools,
  newsApis,
  monitoringCadence,
  keyMetricsCategories,
  alertTierSystem,
  md12GovernmentEntities,
  technologyPlatforms,
  crisisToolsRegistry,
  sentimentAnalysisMatrix,
  md12RelevanceAssessment,
  md12CredibilityMatrix,
  quantitativeMetrics,
  qualitativeInsights,
  sourcesIndex,
  dashboardKpiTables,
  dailyMonitoringPhases,
  geopoliticalRiskFramework,
} from '@/lib/data-loader'

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
}

export default function DailyMonitoringPage() {
  // Executive Summary Metrics
  const summaryMetrics = [
    { title: 'Daily Queries', value: '300,000', icon: <Zap className="h-6 w-6" />, gradient: 'gold' as const },
    { title: 'Data Sources', value: '18', icon: <Globe className="h-6 w-6" />, gradient: 'emerald' as const },
    { title: 'Languages', value: wamData.languagesSupported, icon: <Globe2 className="h-6 w-6" />, gradient: 'indigo' as const },
    { title: 'Crisis Categories', value: crisisDetectionCategories.length, icon: <AlertOctagon className="h-6 w-6" />, gradient: 'rose' as const },
  ]

  // WAM Stats for display
  const wamStats = [
    { label: 'Languages', value: wamData.languagesSupported },
    { label: 'Countries', value: '100+' },
    { label: 'Established', value: wamData.established },
    { label: 'Tier', value: 'Tier 0' },
  ]

  // 1B Followers Summit stats
  const rawSummitStats = keyMediaEvents[1]?.statistics
  const summitStats = typeof rawSummitStats === 'object' && rawSummitStats !== null
    ? rawSummitStats as {
        totalParticipants: number
        contentCreators: string
        combinedFollowers: string
        mediaCompanies: number
        ceoAttendees: number
        speakers: number
        totalEvents: string
        panelDiscussions: number
      }
    : {
        totalParticipants: 7000,
        contentCreators: '3,000+',
        combinedFollowers: '1.6 billion+',
        mediaCompanies: 200,
        ceoAttendees: 100,
        speakers: 190,
        totalEvents: '100+',
        panelDiscussions: 25,
      }

  // LinkedIn metrics
  const linkedInMetrics = [
    { label: 'Hiring MoM (Mar 2026)', value: '-3.0%' },
    { label: 'Hiring YoY (Mar 2026)', value: '-6.8%' },
    { label: 'vs Pre-Pandemic', value: '-23%' },
    { label: 'Women Leadership', value: '30.6%' },
    { label: 'Green Talent Demand', value: '+5.9%/yr' },
    { label: '2030 Supply Gap', value: '18.7%' },
  ]

  // NewsAPI stats
  const newsApiStats = [
    { label: 'Total Sources', value: '150,000+' },
    { label: 'Languages', value: '14' },
    { label: 'Countries', value: '55' },
    { label: 'Developers', value: '500,000+' },
  ]

  // Crisis Detection KPIs
  const crisisKPIs = dashboardKpiTables.crisisDetection

  // Social Media KPIs
  const socialMediaKPIs = dashboardKpiTables.socialMediaMonitoring

  // Geopolitical Risk Steps
  const riskSteps = geopoliticalRiskFramework.steps

  // Monitoring Resources
  const monitoringResources = geopoliticalRiskFramework.monitoringResources

  // Source Status Summary
  const sourceStatusCounts = {
    full: sourcesIndex.filter(s => s.status === 'Full').length,
    partial: sourcesIndex.filter(s => s.status.includes('Partial')).length,
    blocked: sourcesIndex.filter(s => s.status === 'Blocked').length,
    notFetched: sourcesIndex.filter(s => s.status === 'Not fetched').length,
  }

  return (
    <div className="min-h-screen space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2">MD 12-1</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">
            Daily Monitoring
          </h1>
          <p className="mt-2 text-platinum-400 font-rajdhani">
            Comprehensive UAE media intelligence - 4-hour monitoring cycle with tiered source classification
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="border-emerald/50 text-emerald">
            <CheckCircle className="h-3 w-3 mr-1" />
            18/30 Sources Enriched
          </Badge>
          <Badge variant="outline" className="border-gold/50 text-gold">
            <Clock className="h-3 w-3 mr-1" />
            Updated: 2026-04-28
          </Badge>
        </div>
      </motion.div>

      {/* Executive Summary Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {summaryMetrics.map((metric, idx) => (
          <motion.div key={idx} variants={fadeInUp}>
            <MetricCard
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              gradient={metric.gradient}
            />
          </motion.div>
        ))}
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="phases">4-Hour Cycle</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="crisis">Crisis Detection</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="technology">Technology Stack</TabsTrigger>
          <TabsTrigger value="kpis">KPIs</TabsTrigger>
          <TabsTrigger value="data">Data Summary</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* 4-Hour Monitoring Cycle */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" />
                4-Hour Monitoring Cycle
              </CardTitle>
              <CardDescription>Phased approach for comprehensive UAE media coverage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(dailyMonitoringPhases).map(([key, phase], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4 hover:bg-platinum-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`text-sm font-bold px-2 py-1 rounded ${
                        idx === 0 ? 'bg-gold/20 text-gold' :
                        idx === 1 ? 'bg-emerald/20 text-emerald' :
                        idx === 2 ? 'bg-navy/20 text-navy' : 'bg-rose/20 text-rose'
                      }`}>
                        {phase.duration}
                      </div>
                    </div>
                    <h4 className="font-semibold text-platinum-200 mb-2">{phase.name}</h4>
                    <div className="space-y-1">
                      {phase.activities.map((activity, i) => (
                        <p key={i} className="text-xs text-platinum-400 flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-emerald" />
                          {activity}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* WAM & Leadership */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Newspaper className="h-5 w-5 text-gold" />
                  WAM - Emirates News Agency
                </CardTitle>
                <CardDescription>Official state news service of UAE (Est. 1976)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {wamStats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-3 rounded-lg bg-platinum-800/50 border border-platinum-700/50 text-center"
                      >
                        <div className="text-2xl font-bold text-gold">{stat.value}</div>
                        <div className="text-xs text-platinum-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-3 rounded-lg bg-gold/10 border border-gold/30">
                    <p className="text-sm text-platinum-300">{wamData.officialName}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-emerald" />
                  UAE Leadership Figures
                </CardTitle>
                <CardDescription>Key leadership positions monitored</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[180px]">
                  <div className="space-y-2">
                    {md12LeadershipFigures.map((leader, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between p-2 rounded-lg bg-platinum-800/30 hover:bg-platinum-800/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Crown className="h-4 w-4 text-gold" />
                          <span className="text-xs text-platinum-400">{leader.position}</span>
                        </div>
                        <span className="text-xs font-medium text-platinum-200">{leader.figure.split(' ').slice(0, 4).join(' ')}</span>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* 1 Billion Followers Summit */}
          <Card className="border-gold/30 bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-gold" />
                1 Billion Followers Summit
              </CardTitle>
              <CardDescription>UAE-hosted major media event with 1.6B+ combined followers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-4 lg:grid-cols-8">
                {[
                  { label: 'Participants', value: summitStats.totalParticipants?.toLocaleString() },
                  { label: 'Content Creators', value: summitStats.contentCreators },
                  { label: 'Combined Followers', value: summitStats.combinedFollowers },
                  { label: 'Media Companies', value: summitStats.mediaCompanies },
                  { label: 'CEO Attendees', value: summitStats.ceoAttendees },
                  { label: 'Speakers', value: summitStats.speakers },
                  { label: 'Panel Discussions', value: summitStats.panelDiscussions },
                  { label: 'Total Events', value: summitStats.totalEvents },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg border border-gold/30 bg-platinum-800/30 p-3 text-center hover:bg-platinum-800/50 transition-colors cursor-pointer"
                  >
                    <div className="text-lg font-bold text-gold">{stat.value}</div>
                    <div className="text-xs text-platinum-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Crisis Response Tiers */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertOctagon className="h-5 w-5 text-rose" />
                Crisis Response Tiers
              </CardTitle>
              <CardDescription>Alert level classification and response protocols</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                {crisisResponseTiers.map((tier, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-lg border p-4 ${
                      tier.tier === 'RED' ? 'border-rose/50 bg-rose/10' :
                      tier.tier === 'YELLOW' ? 'border-gold/50 bg-gold/10' :
                      'border-emerald/50 bg-emerald/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {tier.tier === 'RED' && <XCircle className="h-5 w-5 text-rose" />}
                      {tier.tier === 'YELLOW' && <AlertCircle className="h-5 w-5 text-gold" />}
                      {tier.tier === 'GREEN' && <CheckCircle className="h-5 w-5 text-emerald" />}
                      <span className={`font-bold ${
                        tier.tier === 'RED' ? 'text-rose' :
                        tier.tier === 'YELLOW' ? 'text-gold' : 'text-emerald'
                      }`}>{tier.tier}</span>
                    </div>
                    <div className="text-sm font-medium text-platinum-200 mb-1">{tier.responseTime}</div>
                    <p className="text-xs text-platinum-400">{tier.criteria}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Source Credibility Matrix */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-navy" />
                Source Credibility Matrix
              </CardTitle>
              <CardDescription>Tiered classification for source reliability assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[250px]">
                <div className="space-y-3">
                  {md12CredibilityMatrix.map((tier, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-center gap-4 p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                        tier.tier === 'Tier 0' ? 'bg-gold/20 text-gold' :
                        tier.tier === 'Tier 1' ? 'bg-emerald/20 text-emerald' :
                        tier.tier === 'Tier 2' ? 'bg-navy/20 text-navy' :
                        tier.tier === 'Tier 3' ? 'bg-platinum/20 text-platinum' :
                        'bg-platinum-600/20 text-platinum-400'
                      }`}>
                        {tier.tier}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-platinum-200">{tier.classification}</div>
                        <div className="text-xs text-platinum-400">{tier.sources}</div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded ${
                        tier.reliability === 'Very High' ? 'bg-emerald/20 text-emerald' :
                        tier.reliability === 'High' ? 'bg-emerald/10 text-emerald' :
                        'bg-platinum/10 text-platinum'
                      }`}>
                        {tier.reliability}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 4-Hour Cycle Tab */}
        <TabsContent value="phases" className="space-y-6">
          {/* Phase 1: High-Priority Scanning */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold font-bold">1</div>
                Phase 1: High-Priority Scanning (30 min)
              </CardTitle>
              <CardDescription>Government/official sources, Tier 0 crisis detection, leadership mentions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* TIER 0 Sources */}
              <div>
                <h4 className="text-sm font-semibold text-platinum-300 mb-3 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-gold" />
                  TIER 0 Sources (Government/Official)
                </h4>
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="p-4 rounded-lg border border-gold/30 bg-gold/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Newspaper className="h-4 w-4 text-gold" />
                      <span className="font-medium text-platinum-200">WAM (Emirates News Agency)</span>
                      <Badge variant="gold" className="text-xs">Tier 0</Badge>
                    </div>
                    <div className="text-xs text-platinum-400 space-y-1">
                      <p>Operating since 1976 (50+ years)</p>
                      <p>19 languages, 100+ countries worldwide</p>
                      <p>Official state news service of UAE</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="h-4 w-4 text-emerald" />
                      <span className="font-medium text-platinum-200">UAE Government Media Ecosystem</span>
                    </div>
                    <ScrollArea className="h-[60px]">
                      <div className="text-xs text-platinum-400 space-y-1">
                        {uaeGovernmentMediaEcosystem.entities.slice(0, 5).map((e, i) => (
                          <p key={i}>• {e.entity}</p>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </div>

              {/* Media Free Zones */}
              <div>
                <h4 className="text-sm font-semibold text-platinum-300 mb-3 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-navy" />
                  UAE Media Free Zones (100% Foreign Ownership)
                </h4>
                <div className="grid gap-2 sm:grid-cols-4">
                  {mediaFreeZones.map((zone, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.03 }}
                      className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30 text-center"
                    >
                      <div className="text-sm font-medium text-platinum-200">{zone.freeZone}</div>
                      <div className="text-xs text-platinum-500">{zone.location}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Royal Mentions */}
              <div>
                <h4 className="text-sm font-semibold text-platinum-300 mb-3 flex items-center gap-2">
                  <Crown className="h-4 w-4 text-emerald" />
                  Royal/Leadership Mention Queries
                </h4>
                <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
                  {md12LeadershipFigures.slice(0, 5).map((leader, idx) => (
                    <div key={idx} className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                      <div className="text-xs text-platinum-400">{leader.position}</div>
                      <div className="text-xs font-medium text-platinum-200 truncate">{leader.figure.split(' ').slice(-2).join(' ')}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sentiment Anomaly Detection */}
              <div>
                <h4 className="text-sm font-semibold text-platinum-300 mb-3 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-rose" />
                  Sentiment Anomaly Detection Methodologies
                </h4>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                  {anomalyDetectionMethodologies.map((method, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <div className="text-xs font-medium text-platinum-200">{method.methodology}</div>
                      <div className="text-xs text-platinum-500 truncate">{method.description.split(' ').slice(0, 4).join(' ')}...</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase 2: Social Media Scanning */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald/20 text-emerald font-bold">2</div>
                Phase 2: Social Media Scanning (60 min)
              </CardTitle>
              <CardDescription>Multi-platform monitoring for real-time sentiment and crisis early warning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {socialMediaPlatforms.map((platform, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4 hover:bg-platinum-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 rounded-full bg-rose/20 flex items-center justify-center">
                        <Radio className="h-4 w-4 text-rose" />
                      </div>
                      <h4 className="font-semibold text-platinum-200">{platform.platform}</h4>
                    </div>
                    <div className="space-y-1">
                      {platform.capabilities?.slice(0, 3).map((cap, i) => (
                        <p key={i} className="text-xs text-platinum-400 flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-emerald" />
                          {cap}
                        </p>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-platinum-700/50">
                      <span className="text-xs text-platinum-500">UAE Use Case: </span>
                      <span className="text-xs text-emerald">{platform.uaeUseCase}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Phase 3: News & Web Scanning */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/20 text-navy font-bold">3</div>
                Phase 3: News & Web Scanning (60 min)
              </CardTitle>
              <CardDescription>Google News queries, regional media, international coverage, fact-check sites</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* News APIs */}
              <div>
                <h4 className="text-sm font-semibold text-platinum-300 mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-navy" />
                  News APIs
                </h4>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {newsApis.map((api, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <div className="text-sm font-medium text-platinum-200 mb-1">{api.api}</div>
                      <div className="text-xs text-platinum-400">Sources: {api.sources}</div>
                      <div className="text-xs text-emerald mt-1">Free: {api.freeTier}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Official Media Sources */}
              <div>
                <h4 className="text-sm font-semibold text-platinum-300 mb-3 flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-gold" />
                  Key Official UAE Media Sources
                </h4>
                <div className="grid gap-2 sm:grid-cols-4">
                  {officialMediaSources.map((source, idx) => (
                    <div key={idx} className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                      <div className="text-sm font-medium text-platinum-200">{source.outlet}</div>
                      <div className="text-xs text-platinum-500">{source.language}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Language Tiers */}
              <div>
                <h4 className="text-sm font-semibold text-platinum-300 mb-3 flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-emerald" />
                  Language Tiers
                </h4>
                <div className="grid gap-2 sm:grid-cols-3">
                  {[
                    { tier: 'L1', language: 'English', priority: 'Primary international' },
                    { tier: 'L2', language: 'Arabic', priority: 'Regional primary' },
                    { tier: 'L3', language: 'Urdu, Hindi, Farsi, Chinese', priority: 'Secondary' },
                  ].map((lt, idx) => (
                    <div key={idx} className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 flex items-center gap-3">
                      <div className={`px-2 py-1 rounded text-sm font-bold ${
                        idx === 0 ? 'bg-gold/20 text-gold' :
                        idx === 1 ? 'bg-emerald/20 text-emerald' : 'bg-navy/20 text-navy'
                      }`}>{lt.tier}</div>
                      <div>
                        <div className="text-sm font-medium text-platinum-200">{lt.language}</div>
                        <div className="text-xs text-platinum-400">{lt.priority}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase 4: Analysis & Flagging */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose/20 text-rose font-bold">4</div>
                Phase 4: Analysis & Flagging (30 min)
              </CardTitle>
              <CardDescription>Sentiment analysis, entity extraction, crisis indicators, anomaly detection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: 'Sentiment Analysis', items: ['Multi-language sentiment analysis', 'Aspect-based sentiment', 'Real-time translation', 'Emotion detection'] },
                  { title: 'Entity Extraction (NER)', items: ['BERT-based models (DeBERTa)', 'AraBERT for Arabic', 'CAMeL for dialect handling', 'Precision/Recall/F1 evaluation'] },
                  { title: 'Crisis Indicator Assessment', items: ['RED: Immediate response', 'YELLOW: Within 1 hour', 'GREEN: Daily summary', 'Anomaly detection'] },
                ].map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <h4 className="font-semibold text-platinum-200 mb-3">{section.title}</h4>
                    <div className="space-y-2">
                      {section.items.map((item, i) => (
                        <p key={i} className="text-xs text-platinum-400 flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-emerald" />
                          {item}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          {/* Source Status Summary */}
          <div className="grid gap-4 sm:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-lg border border-emerald/50 bg-emerald/10 text-center"
            >
              <div className="text-2xl font-bold text-emerald">{sourceStatusCounts.full}</div>
              <div className="text-sm text-platinum-400">Full Fetch</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              className="p-4 rounded-lg border border-gold/50 bg-gold/10 text-center"
            >
              <div className="text-2xl font-bold text-gold">{sourceStatusCounts.partial}</div>
              <div className="text-sm text-platinum-400">Partial</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-lg border border-rose/50 bg-rose/10 text-center"
            >
              <div className="text-2xl font-bold text-rose">{sourceStatusCounts.blocked}</div>
              <div className="text-sm text-platinum-400">Blocked</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="p-4 rounded-lg border border-platinum-500/50 bg-platinum-500/10 text-center"
            >
              <div className="text-2xl font-bold text-platinum-400">{sourceStatusCounts.notFetched}</div>
              <div className="text-sm text-platinum-400">Not Fetched</div>
            </motion.div>
          </div>

          {/* Sources Index Table */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DatabaseIcon className="h-5 w-5 text-navy" />
                Sources Index with Fetch Status
              </CardTitle>
              <CardDescription>30 URLs identified | 18 successfully enriched | 60% completeness</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-2">
                  {sourcesIndex.map((source, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-platinum-300 truncate">{source.url}</p>
                      </div>
                      <div className="flex items-center gap-3 ml-4">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            source.status === 'Full' ? 'border-emerald/50 text-emerald' :
                            source.status.includes('Partial') ? 'border-gold/50 text-gold' :
                            source.status === 'Blocked' ? 'border-rose/50 text-rose' :
                            'border-platinum-500/50 text-platinum-400'
                          }`}
                        >
                          {source.status}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            source.credibility === 'Tier 0' ? 'border-gold/50 text-gold' :
                            source.credibility === 'Tier 1' ? 'border-emerald/50 text-emerald' :
                            'border-navy/50 text-navy'
                          }`}
                        >
                          {source.credibility}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Entity Registry */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-gold" />
                Entity Registry - UAE Media Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Government Entities */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Government Entities</h4>
                  <div className="space-y-2">
                    {md12GovernmentEntities.slice(0, 5).map((entity, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-platinum-800/30 border border-platinum-700/50">
                        <span className="text-xs text-platinum-200">{entity.entity}</span>
                        <Badge variant="gold" className="text-xs">{entity.credibility}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Technology Platforms */}
                <div>
                  <h4 className="text-sm font-semibold text-platinum-300 mb-3">Technology Platforms</h4>
                  <div className="space-y-2">
                    {technologyPlatforms.slice(0, 5).map((platform, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-platinum-800/30 border border-platinum-700/50">
                        <span className="text-xs text-platinum-200">{platform.platform}</span>
                        <Badge variant="outline" className="text-xs border-emerald/50 text-emerald">{platform.credibility}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Crisis Detection Tab */}
        <TabsContent value="crisis" className="space-y-6">
          {/* Crisis Detection Categories */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertOctagon className="h-5 w-5 text-rose" />
                Crisis Detection Categories
              </CardTitle>
              <CardDescription>Priority classification for crisis monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3">
                {crisisDetectionCategories.map((category, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-platinum-200">{category.category}</span>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          category.priority === 'Critical' ? 'border-rose/50 text-rose' : 'border-gold/50 text-gold'
                        }`}
                      >
                        {category.priority}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {category.examples.map((ex, i) => (
                        <span key={i} className="text-xs text-platinum-400 bg-platinum-700/50 px-1.5 py-0.5 rounded">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Crisis Communication Tools */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-navy" />
                Crisis Communication Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {crisisCommunicationTools.map((tool, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <h4 className="font-medium text-platinum-200 mb-2">{tool.category}</h4>
                    <div className="space-y-1">
                      {tool.features.slice(0, 3).map((feature, i) => (
                        <p key={i} className="text-xs text-platinum-400 flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-emerald" />
                          {feature}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Crisis Detection KPIs */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-gold" />
                Crisis Detection KPIs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {crisisKPIs.map((kpi, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-platinum-200">{kpi.metric}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-2 rounded bg-platinum-700/50">
                        <div className="text-xs text-platinum-400">Baseline</div>
                        <div className="text-sm font-medium text-platinum-300">{kpi.baseline}</div>
                      </div>
                      <div className="p-2 rounded bg-gold/10 border border-gold/30">
                        <div className="text-xs text-platinum-400">Alert</div>
                        <div className="text-sm font-medium text-gold">{kpi.alertThreshold}</div>
                      </div>
                      <div className="p-2 rounded bg-rose/10 border border-rose/30">
                        <div className="text-xs text-platinum-400">Crisis</div>
                        <div className="text-sm font-medium text-rose">{kpi.crisisThreshold}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alert Tier System */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-emerald" />
                Alert Tier System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                {alertTierSystem.map((tier, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-4 rounded-lg border ${
                      tier.tier === 'RED' ? 'border-rose/50 bg-rose/10' :
                      tier.tier === 'YELLOW' ? 'border-gold/50 bg-gold/10' :
                      'border-emerald/50 bg-emerald/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {tier.tier === 'RED' && <XCircle className="h-5 w-5 text-rose" />}
                      {tier.tier === 'YELLOW' && <AlertCircle className="h-5 w-5 text-gold" />}
                      {tier.tier === 'GREEN' && <CheckCircle className="h-5 w-5 text-emerald" />}
                      <span className={`font-bold ${
                        tier.tier === 'RED' ? 'text-rose' :
                        tier.tier === 'YELLOW' ? 'text-gold' : 'text-emerald'
                      }`}>{tier.tier}</span>
                    </div>
                    <div className="text-sm text-platinum-300 mb-1">{tier.responseTime}</div>
                    <div className="text-xs text-platinum-400">{tier.examples}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Social Media Tab */}
        <TabsContent value="social" className="space-y-6">
          {/* Social Media KPIs */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Radio className="h-5 w-5 text-rose" />
                Social Media Monitoring KPIs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {socialMediaKPIs.map((kpi, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <div className="flex items-center gap-3">
                      <Radio className="h-4 w-4 text-rose" />
                      <span className="font-medium text-platinum-200">{kpi.platform}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-xs text-platinum-400">API Access</div>
                        <div className="text-xs text-emerald">{kpi.apiAccess}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-platinum-400">Data Volume</div>
                        <div className="text-xs text-gold">{kpi.dataVolume}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-platinum-400">Refresh</div>
                        <div className="text-xs text-navy">{kpi.refreshRate}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* LinkedIn Workforce Metrics */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-navy" />
                LinkedIn Workforce Metrics (2025-2026)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {linkedInMetrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 text-center"
                  >
                    <div className={`text-xl font-bold ${
                      metric.value.startsWith('-') ? 'text-rose' : 'text-emerald'
                    }`}>{metric.value}</div>
                    <div className="text-xs text-platinum-400 mt-1">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sentiment Analysis Matrix */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-emerald" />
                Sentiment Analysis Matrix
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  {sentimentAnalysisMatrix.map((row, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <span className="text-xs text-platinum-200">{row.sourceCategory}</span>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-xs border-platinum-600/50 text-platinum-400">
                          {row.typicalSentiment}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            row.volatility === 'Very High' || row.volatility === 'High' ? 'border-rose/50 text-rose' :
                            row.volatility === 'Medium' ? 'border-gold/50 text-gold' :
                            'border-emerald/50 text-emerald'
                          }`}
                        >
                          {row.volatility} Volatility
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Technology Stack Tab */}
        <TabsContent value="technology" className="space-y-6">
          {/* Enterprise Platforms */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-gold" />
                Enterprise Platforms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {enterprisePlatforms.map((platform, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30 hover:bg-platinum-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-platinum-200">{platform.platform}</span>
                      <Badge variant={platform.tier === 1 ? "gold" : "outline"} className="text-xs">
                        Tier {platform.tier}
                      </Badge>
                    </div>
                    <div className="text-xs text-platinum-400 mb-2">{platform.bestFor}</div>
                    <p className="text-xs text-platinum-500 line-clamp-2">{platform.features}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Open Source Tools */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-emerald" />
                Open Source / Building Blocks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {openSourceTools.map((tool, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 text-center"
                  >
                    <div className="font-medium text-platinum-200">{tool.tool}</div>
                    <div className="text-xs text-platinum-400">{tool.purpose}</div>
                    <Badge variant="outline" className="mt-2 text-xs">{tool.language}</Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Geopolitical Risk Framework */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-navy" />
                Geopolitical Risk Monitoring Framework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/20 text-navy font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-platinum-200 mb-1">{step.name}</h4>
                      <p className="text-sm text-platinum-400">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monitoring Resources */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-emerald" />
                Monitoring Resources Matrix
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {monitoringResources.map((resource, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          resource.credibility === 'Tier 0-1' || resource.credibility === 'Tier 1' ? 'border-emerald/50 text-emerald' :
                          resource.credibility === 'Tier 1-2' ? 'border-gold/50 text-gold' :
                          'border-platinum-500/50 text-platinum-400'
                        }`}
                      >
                        {resource.credibility}
                      </Badge>
                      <span className="font-medium text-platinum-200">{resource.category}</span>
                    </div>
                    <span className="text-xs text-platinum-400">{resource.sources}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* KPIs Tab */}
        <TabsContent value="kpis" className="space-y-6">
          {/* UAE Media Infrastructure KPIs */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald" />
                UAE Media Infrastructure KPIs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dashboardKpiTables.uaeMediaInfrastructure.map((kpi, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${
                        kpi.status === 'Complete' ? 'bg-emerald' :
                        kpi.status === 'Active' ? 'bg-gold' :
                        kpi.status === 'On track' ? 'bg-navy' : 'bg-platinum-500'
                      }`} />
                      <span className="text-sm font-medium text-platinum-200">{kpi.kpi}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-platinum-400">{kpi.currentValue}</span>
                      <Badge variant="outline" className={`text-xs ${
                        kpi.status === 'Complete' ? 'border-emerald/50 text-emerald' :
                        kpi.status === 'Active' ? 'border-gold/50 text-gold' :
                        kpi.status === 'On track' ? 'border-navy/50 text-navy' :
                        'border-platinum-500/50 text-platinum-400'
                      }`}>
                        {kpi.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics Categories */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-gold" />
                Key Metrics Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {keyMetricsCategories.map((cat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <div className="font-medium text-platinum-200 mb-1">{cat.category}</div>
                    <div className="text-xs text-platinum-400">{cat.metrics}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monitoring Cadence */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-navy" />
                Monitoring Cadence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {monitoringCadence.map((cadence, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-4 p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <Badge variant="outline" className="border-navy/50 text-navy w-[120px] justify-center">
                      {cadence.frequency}
                    </Badge>
                    <span className="text-sm text-platinum-300">{cadence.activity}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Data Summary Tab */}
        <TabsContent value="data" className="space-y-6">
          {/* Quantitative Metrics */}
          <Card className="border-gold/30 bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-gold" />
                Quantitative Metrics
              </CardTitle>
              <CardDescription>Key performance indicators from MD 12-1 source data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {quantitativeMetrics.slice(0, 16).map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3 hover:bg-platinum-800/50 transition-colors cursor-pointer"
                  >
                    <div className="text-lg font-bold text-gold">{metric.value}</div>
                    <div className="text-xs text-platinum-400">{metric.dataPoint}</div>
                    <div className="text-xs text-platinum-500 mt-1">{metric.category}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Qualitative Insights */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-emerald" />
                Qualitative Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {qualitativeInsights.map((insight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="gold" className="text-xs">{insight.category}</Badge>
                      <Badge variant="outline" className="text-xs border-platinum-600/50 text-platinum-400">{insight.source}</Badge>
                    </div>
                    <p className="text-sm text-platinum-300">{insight.insight}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* UAE Relevance Assessment */}
          <Card className="border-[var(--glass-border)] bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flag className="h-5 w-5 text-rose" />
                UAE Relevance Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[250px]">
                <div className="space-y-2">
                  {md12RelevanceAssessment.map((assessment, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-platinum-200">{assessment.source}</p>
                        <p className="text-xs text-platinum-400 mt-1">{assessment.rationale}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={`ml-4 text-xs ${
                          assessment.relevanceRating === 'Critical' ? 'border-rose/50 text-rose' :
                          assessment.relevanceRating === 'High' ? 'border-gold/50 text-gold' :
                          'border-emerald/50 text-emerald'
                        }`}
                      >
                        {assessment.relevanceRating}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* NewsAPI Stats */}
          <Card className="border-navy/30 bg-[var(--glass-surface)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-navy" />
                NewsAPI Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-4">
                {newsApiStats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded-lg border border-navy/30 bg-platinum-800/30 text-center"
                  >
                    <div className="text-2xl font-bold text-navy">{stat.value}</div>
                    <div className="text-xs text-platinum-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Missing import
function Code({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
