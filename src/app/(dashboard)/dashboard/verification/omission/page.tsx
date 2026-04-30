'use client'

import { useOmissionSilenceData, useOmissionSilenceOverviewData } from '@/lib/data-loader'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import {
  Shield,
  AlertTriangle,
  Globe,
  Lock,
  Eye,
  Users,
  FileText,
  Ban,
  Scale,
  Building2,
  UserCog,
  Network,
  AlertOctagon,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Minus,
  Link2,
  Search,
  Filter,
  Database,
  BarChart3,
  PieChart as PieChartIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
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
  transition: { duration: 0.3 },
}

// Helper functions
const getTierBadge = (tier: number) => {
  switch (tier) {
    case 1: return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Tier {tier}</Badge>
    case 2: return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">Tier {tier}</Badge>
    case 3: return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">Tier {tier}</Badge>
    default: return <Badge className="bg-slate-500/20 text-slate-400 border-slate-500/50">Tier {tier}</Badge>
  }
}

const getRelevanceBadge = (relevance: string) => {
  switch (relevance) {
    case 'CRITICAL': return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">CRITICAL</Badge>
    case 'HIGH': return <Badge variant="warning" className="bg-orange-500/20 text-orange-400 border-orange-500/50">HIGH</Badge>
    case 'MEDIUM': return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">MEDIUM</Badge>
    default: return <Badge variant="outline">LOW</Badge>
  }
}

const getStatusBadge = (status: string) => {
  if (status.includes('Not Free') || status.includes('Declining') || status.includes('Critical')) {
    return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">{status}</Badge>
  }
  if (status.includes('Free') || status.includes('Improving')) {
    return <Badge variant="success" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">{status}</Badge>
  }
  return <Badge variant="outline">{status}</Badge>
}

const getTrendIcon = (trend: string) => {
  if (trend?.includes('Declining') || trend?.includes('drop') || trend?.includes('-')) {
    return <TrendingDown className="h-4 w-4 text-red-400" />
  }
  if (trend?.includes('Improving') || trend?.includes('+')) {
    return <TrendingUp className="h-4 w-4 text-emerald-400" />
  }
  return <Minus className="h-4 w-4 text-slate-400" />
}

export default function OmissionSilencePage() {
  const { data } = useOmissionSilenceData()
  const { data: overviewData } = useOmissionSilenceOverviewData()

  if (!data || !overviewData) {
    return <div className="p-8 text-slate-400">Loading...</div>
  }

  // Extract key metrics for dashboard
  const rsfData = data.mediaFreedomRankings.rsfWorldPressFreedom
  const fotData = data.mediaFreedomRankings.freedomOnTheNet
  const fitwData = data.mediaFreedomRankings.freedomInTheWorld
  const censorshipData = data.directCensorship
  const legalData = data.legalFramework
  const structuralData = data.structuralMediaControl
  const hrData = data.humanRightsViolations
  const regionalData = data.regionalComparative
  const cpjData = data.cpjIranWarViolations
  const queryData = data.specificQueryResults
  const sourceMatrix = data.sourceCredibilityMatrix
  const entities = data.entityRegistries
  const keyFindings = data.keyFindingsSummary
  const stats = data.statisticalDashboard
  const citations = data.sourceCitations

  // RSF Score for gauge
  const rsfScore = rsfData.years[0]?.score || 0
  const rsfMaxScore = 100
  const rsfPercentage = (rsfScore / rsfMaxScore) * 100

  // Freedom on the Net Score
  const fotScore = fotData.years[0]?.score || 0
  const fotPercentage = fotScore

  // Source fetch status
  const successfulSources = citations.filter(c => c.fetchStatus === 'Success').length
  const blockedSources = citations.filter(c => c.fetchStatus !== 'Success').length

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="emerald" className="mb-2">V-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-emerald">Omission & Silence Detection</h1>
          <p className="mt-2 text-slate-400">
            Systematic media censorship, suppression patterns, and information control analysis
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="border-red-500/50 text-red-400">
            {overviewData.alertLevel}
          </Badge>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={scaleIn}>
          <MetricCard
            title="RSF Press Freedom Rank"
            value={rsfData.years[0]?.rank || 'N/A'}
            unit="/180"
            icon={<Globe className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
        <motion.div variants={scaleIn}>
          <MetricCard
            title="Internet Freedom Score"
            value={fotScore}
            unit="/100"
            icon={<Lock className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
        <motion.div variants={scaleIn}>
          <MetricCard
            title="Social Media Arrests"
            value={stats.enforcementKPIs[0]?.value || '375+'}
            icon={<Users className="h-6 w-6" />}
            gradient="orange"
            status="error"
          />
        </motion.div>
        <motion.div variants={scaleIn}>
          <MetricCard
            title="Source Success Rate"
            value={`${Math.round((successfulSources / citations.length) * 100)}%`}
            icon={<Database className="h-6 w-6" />}
            gradient="emerald"
            status="info"
          />
        </motion.div>
      </motion.div>

      {/* Executive Summary & Report Metadata */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassPanel
          title="Report Metadata"
          description="Research execution statistics and data sources"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">
                {data.executiveSummary.reportMetadata.totalSourcesCited}
              </div>
              <p className="text-sm text-slate-400">Sources Cited</p>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">
                {data.executiveSummary.reportMetadata.atomicQueriesExecuted}
              </div>
              <p className="text-sm text-slate-400">Queries Executed</p>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">
                {data.executiveSummary.reportMetadata.pagesSuccessful}/{data.executiveSummary.reportMetadata.pagesFetched}
              </div>
              <p className="text-sm text-slate-400">Pages Fetched</p>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400">
                {successfulSources}
              </div>
              <p className="text-sm text-slate-400">Successful</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.executiveSummary.reportMetadata.organizationsMonitored.map((org: string, idx: number) => (
              <Badge key={idx} variant="outline" className="bg-slate-700/50">
                {org}
              </Badge>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      <Tabs defaultValue="rankings" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="rankings">Press Freedom Rankings</TabsTrigger>
          <TabsTrigger value="censorship">Direct Censorship</TabsTrigger>
          <TabsTrigger value="legal">Legal Framework</TabsTrigger>
          <TabsTrigger value="structural">Structural Control</TabsTrigger>
          <TabsTrigger value="hr">Human Rights</TabsTrigger>
          <TabsTrigger value="regional">Regional Analysis</TabsTrigger>
          <TabsTrigger value="cpj">CPJ Violations</TabsTrigger>
          <TabsTrigger value="queries">Query Results</TabsTrigger>
          <TabsTrigger value="entities">Entity Registry</TabsTrigger>
          <TabsTrigger value="sources">Source Matrix</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        {/* Press Freedom Rankings Tab */}
        <TabsContent value="rankings" className="space-y-6">
          {/* RSF World Press Freedom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassPanel
              title="RSF World Press Freedom Index"
              description="UAE ranking among 180 countries worldwide"
            >
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">RSF Ranking Trend</CardTitle>
                      <CardDescription>2023-2025 ranking progression</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={rsfData.years.map(y => ({
                          year: y.year?.toString() || '',
                          rank: y.rank || 0,
                          score: y.score || 0,
                        }))}
                        xAxisKey="year"
                        bars={[
                          { dataKey: 'rank', name: 'Rank (lower is worse)', color: CHART_COLORS.rose },
                        ]}
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">RSF Score Trend</CardTitle>
                      <CardDescription>Score progression (0-100, higher is better)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        data={rsfData.years.filter(y => y.score !== null).map(y => ({
                          year: y.year?.toString() || '',
                          score: y.score || 0,
                        }))}
                        xAxisKey="year"
                        areas={[
                          { dataKey: 'score', name: 'Score', color: CHART_COLORS.rose },
                        ]}
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">RSF 2025 Component Scores</CardTitle>
                    <CardDescription>Political Environment indicator breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Political Environment</span>
                          <span className="font-medium text-rose-400">{rsfData.componentScores2025.politicalEnvironment}</span>
                        </div>
                        <Progress value={rsfData.componentScores2025.politicalEnvironment} className="h-3" />
                      </div>
                      <p className="text-xs text-slate-500">
                        Note: Other component scores (Legal Framework, Economic Context, Sociocultural Context, Security) were not available
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-400">Key Finding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      {rsfData.keyFinding}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Freedom on the Net */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel
              title="Freedom on the Net 2025"
              description="Internet freedom assessment with category breakdown"
            >
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Freedom on the Net Score</CardTitle>
                      <CardDescription>28/100 - Not Free</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Score</span>
                          <span className="text-2xl font-bold text-red-400">{fotScore}/100</span>
                        </div>
                        <Progress value={fotPercentage} className="h-4" />
                        <div className="flex items-center gap-2">
                          {getTrendIcon(fotData.years[0]?.change?.toString() || '')}
                          <span className="text-sm text-slate-400">
                            {fotData.years[0]?.change} from previous year
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Category Breakdown</CardTitle>
                      <CardDescription>Assessment by restriction category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {Object.entries(fotData.categoryBreakdown2025).map(([key, val]: [string, any]) => (
                          <div key={key} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                            <div>
                              <p className="font-medium text-slate-200">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                              <p className="text-xs text-slate-400">{val.assessment}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-bold text-red-400">{val.score}/{val.max}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Additional Data Points</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-2">
                        {fotData.additionalDataPoints.map((point: string, idx: number) => (
                          <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-2">
                            <p className="text-sm text-slate-300">{point}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Freedom in the World */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassPanel
              title="Freedom in the World 2025"
              description="Political rights and civil liberties assessment"
            >
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                    <div className="text-3xl font-bold text-red-400">{fitwData.politicalRights.score}/{fitwData.politicalRights.max}</div>
                    <p className="text-sm text-slate-400 mt-1">Political Rights</p>
                    <Badge variant="destructive" className="mt-2 bg-red-500/20 text-red-400">Not Free</Badge>
                  </div>
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                    <div className="text-3xl font-bold text-red-400">{fitwData.civilLiberties.score}/{fitwData.civilLiberties.max}</div>
                    <p className="text-sm text-slate-400 mt-1">Civil Liberties</p>
                    <Badge variant="destructive" className="mt-2 bg-red-500/20 text-red-400">Not Free</Badge>
                  </div>
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                    <div className="text-3xl font-bold text-red-400">{fitwData.globalFreedomScore.score}/{fitwData.globalFreedomScore.max}</div>
                    <p className="text-sm text-slate-400 mt-1">Global Freedom Score</p>
                    <Badge variant="destructive" className="mt-2 bg-red-500/20 text-red-400">Not Free</Badge>
                  </div>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">2024 Key Developments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {fitwData.key2024Developments.map((item: string, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2 rounded-lg border border-slate-700 bg-slate-800/50 p-2"
                        >
                          <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5" />
                          <p className="text-sm text-slate-300">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Direct Censorship Tab */}
        <TabsContent value="censorship" className="space-y-6">
          {/* Iranian Strikes Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassPanel
              title="Iranian Strikes Coverage (Feb-Apr 2026)"
              description="Timeline of events and censorship enforcement"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Timeline of Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {censorshipData.iranianStrikesCoverage.timeline.map((event: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                              <Clock className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-slate-200">{event.date}</p>
                              <p className="text-sm text-slate-400 mt-1">{event.event}</p>
                              <Badge variant="outline" className="mt-2 text-xs">{event.significance}</Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Specific Discrepancies - Official vs Evidence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {censorshipData.iranianStrikesCoverage.specificDiscrepancies.map((item: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <h4 className="font-semibold text-slate-200">{item.location}</h4>
                            <Badge variant="outline" className="text-xs">{item.source}</Badge>
                          </div>
                          <div className="grid gap-2 sm:grid-cols-2">
                            <div className="rounded bg-red-500/10 p-2">
                              <p className="text-xs text-red-400">Official Claim</p>
                              <p className="text-sm text-slate-300">{item.officialClaim}</p>
                            </div>
                            <div className="rounded bg-emerald-500/10 p-2">
                              <p className="text-xs text-emerald-400">Contrasting Evidence</p>
                              <p className="text-sm text-slate-300">{item.contrastingEvidence}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Enforcement Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                        <div className="text-2xl font-bold text-red-400">
                          {censorshipData.iranianStrikesCoverage.enforcementActions.peopleArrestedForMisinformation}
                        </div>
                        <p className="text-sm text-slate-400">Arrested for Misinformation</p>
                      </div>
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                        <div className="text-2xl font-bold text-red-400">
                          {censorshipData.iranianStrikesCoverage.enforcementActions.peopleDetainedForMisleadingVideos}
                        </div>
                        <p className="text-sm text-slate-400">Detained for Misleading Videos</p>
                      </div>
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                        <div className="text-2xl font-bold text-red-400">
                          {censorshipData.iranianStrikesCoverage.enforcementActions.peopleArrestedForFilmingSharingAttackVideos}
                        </div>
                        <p className="text-sm text-slate-400">Arrested for Filming/Sharing</p>
                      </div>
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400">
                          {censorshipData.iranianStrikesCoverage.enforcementActions.minimumImprisonmentForContradictingStatements}
                        </div>
                        <p className="text-sm text-slate-400">Min. Imprisonment</p>
                      </div>
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400">
                          {censorshipData.iranianStrikesCoverage.enforcementActions.fineForSharingContradictingContent}
                        </div>
                        <p className="text-sm text-slate-400">Fine for Contradicting Content</p>
                      </div>
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 text-center">
                        <div className="text-2xl font-bold text-orange-400">
                          {censorshipData.iranianStrikesCoverage.enforcementActions.britishNationalsDetained}
                        </div>
                        <p className="text-sm text-slate-400">British Nationals Detained</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Social Media Blocking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel
              title="Social Media Account Blocking"
              description="March 2, 2026 blocking incident and influence operations"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Blocked Accounts (March 2, 2026)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {censorshipData.socialMediaBlocking.march2026Blocking.map((account: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                              <Ban className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{account.account}</p>
                              <p className="text-sm text-slate-400">{account.type} - {account.reason}</p>
                            </div>
                          </div>
                          {account.followerCount && (
                            <Badge variant="outline">{account.followerCount} followers</Badge>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Coordinated Influence Operations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {censorshipData.coordinatedInfluenceOperations.map((op: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                              <Network className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{op.platform} - {op.year}</p>
                              <p className="text-sm text-slate-400">{op.accountsRemoved} accounts for {op.purpose}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-blue-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Strategic Silence Policy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-300">
                      "{censorshipData.strategicSilencePolicy.officialArticulation}"
                    </blockquote>
                    <div className="mt-4 space-y-2">
                      {censorshipData.strategicSilencePolicy.policyInterpretation.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5" />
                          <p className="text-sm text-slate-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Legal Framework Tab */}
        <TabsContent value="legal" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassPanel
              title="Legal Framework for Suppression"
              description="Key laws used for censorship and enforcement"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Laws</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {legalData.keyLaws.map((law: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                        >
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-200">{law.law} ({law.year})</h4>
                            <p className="text-sm text-slate-400 mt-1">{law.purpose}</p>
                          </div>
                          <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                            {law.maximumPenalty}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">WJWC Key Findings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {legalData.keyWJWCFindings.map((finding: string, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            className="flex items-start gap-2 rounded-lg border border-slate-700 bg-slate-800/50 p-2"
                          >
                            <AlertOctagon className="h-4 w-4 text-red-400 mt-0.5" />
                            <p className="text-sm text-slate-300">{finding}</p>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Enforcement Statistics (Feb-March 2026)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {legalData.enforcementStatistics.map((stat: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center"
                        >
                          <div className="text-2xl font-bold text-red-400">{stat.count}</div>
                          <p className="text-sm text-slate-400 mt-1">{stat.action}</p>
                          <p className="text-xs text-slate-500 mt-1">{stat.date}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Wartime Speech Restrictions (Comparative)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {legalData.wartimeSpeechRestrictions.map((restriction: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${restriction.country === 'UAE' ? 'bg-red-500/20 text-red-400' : 'bg-slate-700 text-slate-400'}`}>
                              <Scale className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{restriction.country}</p>
                              <p className="text-sm text-slate-400">{restriction.restrictionType}</p>
                            </div>
                          </div>
                          <Badge variant={restriction.country === 'UAE' ? 'destructive' : 'outline'}>
                            {restriction.penalty}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Structural Control Tab */}
        <TabsContent value="structural" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassPanel
              title="Structural Media Control Mechanisms"
              description="Omission detection patterns and accountability gaps"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Comparative Omission: UAE vs International</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {structuralData.omissionDetectionPatterns.comparativeOmission.map((item: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <h4 className="font-semibold text-slate-200">{item.pattern}</h4>
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                              {item.gapMagnitude}
                            </Badge>
                          </div>
                          <div className="grid gap-2 sm:grid-cols-2">
                            <div className="rounded bg-blue-500/10 p-2">
                              <p className="text-xs text-blue-400">International Media</p>
                              <p className="text-sm text-slate-300">{item.internationalMedia}</p>
                            </div>
                            <div className="rounded bg-red-500/10 p-2">
                              <p className="text-xs text-red-400">UAE Media</p>
                              <p className="text-sm text-slate-300">{item.uaeMedia}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Topics with Documented Omission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {structuralData.topicsWithOmissionPatterns.map((topic: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <h4 className="font-semibold text-slate-200">{topic.topic}</h4>
                          <div className="mt-2 grid gap-2 sm:grid-cols-2">
                            <div className="flex items-start gap-2">
                              <Globe className="h-4 w-4 text-emerald-400 mt-0.5" />
                              <p className="text-xs text-slate-400">{topic.internationalCoverage}</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Ban className="h-4 w-4 text-red-400 mt-0.5" />
                              <p className="text-xs text-slate-400">{topic.uaeCoverage}</p>
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-red-400">{topic.gapDescription}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Silenced Individuals Registry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {structuralData.silencedIndividuals.map((person: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                              <UserCog className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{person.name}</p>
                              <p className="text-sm text-slate-400">{person.role} - {person.status}</p>
                            </div>
                          </div>
                          <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                            {person.sentence} ({person.year})
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Accountability Gap</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {structuralData.accountabilityGap.map((gap: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <AlertOctagon className="h-5 w-5 text-orange-400 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-slate-200">{gap.pattern}</h4>
                            <p className="text-sm text-slate-400 mt-1">{gap.description}</p>
                            <p className="text-xs text-slate-500 mt-1">Evidence: {gap.evidence}</p>
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

        {/* Human Rights Tab */}
        <TabsContent value="hr" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassPanel
              title="Systematic Human Rights Violations"
              description="Freedom of expression metrics and mass trial documentation"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Freedom of Expression Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {hrData.freedomOfExpressionMetrics.map((metric: any, idx: number) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-400">{metric.indicator}</span>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-red-400">{metric.score}/{metric.max || 'N/A'}</span>
                              <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">
                                {metric.assessment}
                              </Badge>
                            </div>
                          </div>
                          {metric.max && <Progress value={(metric.score / metric.max) * 100} className="h-2" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Mass Trial Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                        <div className="text-3xl font-bold text-red-400">{hrData.massTrialDocumentation.totalDefendants}</div>
                        <p className="text-sm text-slate-400">Total Defendants</p>
                      </div>
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                        <div className="text-3xl font-bold text-red-400">{hrData.massTrialDocumentation.convicted}</div>
                        <p className="text-sm text-slate-400">Convicted</p>
                      </div>
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                        <div className="text-3xl font-bold text-red-400">{hrData.massTrialDocumentation.lifeSentences}</div>
                        <p className="text-sm text-slate-400">Life Sentences</p>
                      </div>
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                        <div className="text-3xl font-bold text-red-400">{hrData.massTrialDocumentation.fifteenYearSentences}</div>
                        <p className="text-sm text-slate-400">15-Year Sentences</p>
                      </div>
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 text-center">
                        <div className="text-3xl font-bold text-orange-400">{hrData.massTrialDocumentation.terrorismRelatedCharges}</div>
                        <p className="text-sm text-slate-400">Terrorism Charges</p>
                      </div>
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 text-center">
                        <div className="text-3xl font-bold text-orange-400">{hrData.massTrialDocumentation.bangladeshiProtestersSeparate}</div>
                        <p className="text-sm text-slate-400">Bangladeshi Protesters</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-slate-300 mb-2">Documented Violations</h4>
                      <div className="flex flex-wrap gap-2">
                        {hrData.massTrialDocumentation.documentedViolations.map((v: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="bg-red-500/10 text-red-400 border-red-500/50">
                            {v}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">HRW Additional Findings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {hrData.hRWAdditionalFindings.map((finding: string, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            className="flex items-start gap-2 rounded-lg border border-slate-700 bg-slate-800/50 p-2"
                          >
                            <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5" />
                            <p className="text-sm text-slate-300">{finding}</p>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Surveillance Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {hrData.surveillanceInfrastructure.map((item: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Eye className="h-5 w-5 text-red-400" />
                            <span className="text-slate-200">{item.indicator}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-medium text-red-400">{item.score}/{item.max || 'N/A'}</span>
                            <p className="text-xs text-slate-400">{item.assessment}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Regional Analysis Tab */}
        <TabsContent value="regional" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassPanel
              title="Regional Comparative Analysis"
              description="Gulf media crackdown patterns and UAE-specific silence"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Gulf Media Crackdown Pattern</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={regionalData.gulfMediaCrackdown.map(c => ({
                        country: c.country,
                        rank: c.rsfRank,
                        score: c.score,
                      }))}
                      xAxisKey="country"
                      bars={[
                        { dataKey: 'rank', name: 'RSF Rank (lower is worse)', color: CHART_COLORS.rose },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                    <div className="mt-4 space-y-2">
                      {regionalData.gulfMediaCrackdown.map((country: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-slate-200">{country.country}</span>
                            {country.country === 'UAE' && (
                              <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">WORST</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-slate-400">Rank: {country.rsfRank}/180</span>
                            <span className="text-sm text-slate-400">Score: {country.score}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-400">UAE-Specific Comparative Silence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {regionalData.uaeSpecificComparativeSilence.map((item: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-red-500/30 bg-red-500/10 p-3"
                        >
                          <span className="text-slate-300">{item.metric}</span>
                          <span className="font-semibold text-red-400">{item.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* CPJ Violations Tab */}
        <TabsContent value="cpj" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassPanel
              title="CPJ Iran War Press Freedom Violations"
              description="February 28 - April 10, 2026 global journalist casualties and censorship"
            >
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
                    <div className="text-3xl font-bold text-red-400">{cpjData.journalistCasualtiesGlobal.journalistsKilled}</div>
                    <p className="text-sm text-slate-400">Journalists Killed</p>
                  </div>
                  <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 text-center">
                    <div className="text-3xl font-bold text-orange-400">{cpjData.journalistCasualtiesGlobal.journalistsKidnapped}</div>
                    <p className="text-sm text-slate-400">Kidnapped</p>
                  </div>
                  <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 text-center">
                    <div className="text-3xl font-bold text-orange-400">{cpjData.journalistCasualtiesGlobal.journalistsInjured}</div>
                    <p className="text-sm text-slate-400">Injured</p>
                  </div>
                  <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400">{cpjData.journalistCasualtiesGlobal.journalistsTargetedThreatenedHarassed}</div>
                    <p className="text-sm text-slate-400">Targeted/Threatened</p>
                  </div>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Infrastructure & Access Violations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                        <div className="text-2xl font-bold text-slate-200">{cpjData.infrastructureAccessViolations.mediaOutletsDamaged}</div>
                        <p className="text-sm text-slate-400">Media Outlets Damaged</p>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                        <div className="text-2xl font-bold text-slate-200">{cpjData.infrastructureAccessViolations.journalistsDetainedOrQuestioned}</div>
                        <p className="text-sm text-slate-400">Detained/Questioned</p>
                      </div>
                      <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                        <div className="text-2xl font-bold text-slate-200">{cpjData.infrastructureAccessViolations.journalistsObstructedWhileReporting}</div>
                        <p className="text-sm text-slate-400">Obstructed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Censorship Measures by Country</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {cpjData.censorshipMeasures.map((measure: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${measure.country === 'UAE' ? 'bg-red-500/20 text-red-400' : 'bg-slate-700 text-slate-400'}`}>
                              {measure.country === 'UAE' ? <Ban className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
                            </div>
                            <span className="font-semibold text-slate-200">{measure.country}</span>
                          </div>
                          <span className="text-sm text-slate-400 text-right max-w-[300px]">{measure.measure}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Notable Incidents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-2">
                        {cpjData.notableIncidents.map((incident: string, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            className="flex items-start gap-2 rounded-lg border border-slate-700 bg-slate-800/50 p-2"
                          >
                            <AlertTriangle className="h-4 w-4 text-orange-400 mt-0.5" />
                            <p className="text-sm text-slate-300">{incident}</p>
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

        {/* Query Results Tab */}
        <TabsContent value="queries" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassPanel
              title="Specific Query Results"
              description="Results from atomic search queries on omission patterns"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Query 1: UAE AND (not reported OR media silence)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {queryData.query1.eventsNotReported.map((event: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <h4 className="font-semibold text-slate-200">{event.event}</h4>
                          <div className="mt-2 grid gap-2 sm:grid-cols-2">
                            <div className="flex items-start gap-2">
                              <Globe className="h-4 w-4 text-emerald-400 mt-0.5" />
                              <p className="text-xs text-slate-400">International: {event.internationalCoverage}</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <Ban className="h-4 w-4 text-red-400 mt-0.5" />
                              <p className="text-xs text-slate-400">UAE: {event.uaeCoverage}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Query 2: UAE AND (censored OR suppressed OR banned)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {queryData.query2.results.map((result: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <span className="text-slate-300">{result.action}</span>
                          <div className="flex items-center gap-2">
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                              {result.count}
                            </Badge>
                            <Badge variant="outline" className="text-xs">{result.date}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Query 3: UAE AND (blackout OR news blackout)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {queryData.query3.results.map((result: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">{result.date}</Badge>
                            <Badge variant="outline" className="text-xs">{result.type}</Badge>
                          </div>
                          <p className="mt-2 text-slate-300">{result.event}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Query 4: UAE AND (official statement AND no follow-up)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {queryData.query4.results.map((result: any, idx: number) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <AlertOctagon className="h-5 w-5 text-orange-400 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-slate-200">{result.pattern}</h4>
                            <p className="text-sm text-slate-400 mt-1">{result.evidence}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Entity Registry Tab */}
        <TabsContent value="entities" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassPanel
              title="Entity Registries"
              description="Convicted human rights defenders, disappeared, and blocked accounts"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Convicted Human Rights Defenders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {entities.convictedHumanRightsDefenders.map((person: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                              <UserCog className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{person.name}</p>
                              <p className="text-sm text-slate-400">{person.nationality} - {person.status}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                              {person.sentence}
                            </Badge>
                            <p className="text-xs text-slate-500 mt-1">{person.year} - {person.charges}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-400">Forcibly Disappeared</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {entities.forciblyDisappeared.map((person: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-red-500/30 bg-red-500/10 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                              <UserCog className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{person.name}</p>
                              <p className="text-sm text-slate-400">Last seen: {person.lastSeen}</p>
                              <p className="text-sm text-slate-400">Circumstance: {person.circumstance}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Mass Trial Defendants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {Object.entries(entities.massTrialDefendants).map(([key, value]: [string, any]) => (
                        <div key={key} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                          <div className="text-2xl font-bold text-red-400">{value}</div>
                          <p className="text-sm text-slate-400 mt-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Blocked Social Media Accounts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {entities.blockedSocialMediaAccounts.map((account: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-2"
                        >
                          <div className="flex items-center gap-2">
                            <Ban className="h-4 w-4 text-red-400" />
                            <span className="text-slate-200">{account.account}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">{account.type}</Badge>
                            {account.followers !== 'N/A' && (
                              <Badge variant="outline" className="text-xs">{account.followers}</Badge>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Influence Operations (2019)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {entities.influenceOperations2019.map((op: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Network className="h-5 w-5 text-orange-400" />
                            <div>
                              <p className="font-semibold text-slate-200">{op.platform}</p>
                              <p className="text-sm text-slate-400">{op.purpose}</p>
                            </div>
                          </div>
                          <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                            {op.accounts} accounts
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Source Matrix Tab */}
        <TabsContent value="sources" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassPanel
              title="Source Credibility Matrix"
              description="Assessment of sources used in this research"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                    <span className="text-slate-200">Successful Sources</span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400">{successfulSources}</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                  <div className="flex items-center gap-4">
                    <XCircle className="h-5 w-5 text-red-400" />
                    <span className="text-slate-200">Blocked Sources</span>
                  </div>
                  <div className="text-2xl font-bold text-red-400">{blockedSources}</div>
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Source Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-2">
                        {citations.map((source: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.02 }}
                            className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-2"
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-slate-200">{source.source}</span>
                                {getTierBadge(source.tier)}
                              </div>
                              <p className="text-xs text-slate-500 mt-1 truncate">{source.url}</p>
                            </div>
                            <Badge
                              variant={source.fetchStatus === 'Success' ? 'success' : 'destructive'}
                              className={source.fetchStatus === 'Success' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'bg-red-500/20 text-red-400 border-red-500/50'}
                            >
                              {source.fetchStatus}
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

        {/* Statistics Tab */}
        <TabsContent value="stats" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlassPanel
              title="Statistical Dashboard"
              description="Key KPIs across all categories"
            >
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Press Freedom KPIs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {stats.pressFreedomKPIs.map((kpi: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <span className="text-slate-300">{kpi.kpi}</span>
                          <div className="flex items-center gap-4">
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                              {kpi.value}
                            </Badge>
                            <Badge variant="outline" className="text-xs">{kpi.trend}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Enforcement KPIs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {stats.enforcementKPIs.map((kpi: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <span className="text-slate-300">{kpi.kpi}</span>
                          <div className="flex items-center gap-4">
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                              {kpi.value}
                            </Badge>
                            <Badge variant="outline" className="text-xs">{kpi.period}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Judicial KPIs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {stats.judicialKPIs.map((kpi: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <span className="text-slate-300">{kpi.kpi}</span>
                          <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                            {kpi.value}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Conflict KPIs (Iran-UAE War)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {stats.conflictKPIs.map((kpi: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <span className="text-slate-300">{kpi.kpi}</span>
                          <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                            {kpi.value}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Digital Manipulation KPIs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {stats.digitalManipulationKPIs.map((kpi: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                          <span className="text-slate-300">{kpi.kpi}</span>
                          <div className="flex items-center gap-2">
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                              {kpi.value}
                            </Badge>
                            <Badge variant="outline" className="text-xs">{kpi.year}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}