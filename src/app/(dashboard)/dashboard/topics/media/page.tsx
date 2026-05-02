// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
  Star,
  TrendingUp,
  Users,
  Zap,
  Crown,
  Newspaper,
  User,
  Building,
  BookOpen,
  Music,
  Palette,
  Landmark,
  UsersRound,
  Heart,
  Calendar,
  Lock,
  Unlock,
  DollarSign,
  Scale,
  Globe2,
  Signal,
  Wifi,
  Smartphone,
  Tv,
  Radio,
  FileText,
  Camera,
  Ban,
  CheckCircle,
  XCircle,
  Info,
  ExternalLink,
  Download,
  Upload,
  ShieldAlert,
  Eye,
  Filter,
  Server,
  Key,
  CreditCard,
  UsersIcon,
  Briefcase,
  GraduationCap,
  Mic,
  Monitor,
  Gamepad2,
  ChevronRight,
  Clock,
} from 'lucide-react'

import {
  // Import from new comprehensive media-data.ts
  executionMetadata,
  tableOfContents,
  executiveSummary,
  keyMetricsAtGlance,
  primaryLegislation,
  cabinetDecisions2025,
  nmaInfo,
  contentStandards,
  mediaFreeZones,
  foreignOwnership,
  pressFreedomIndex,
  rsfAssessment2025,
  freedomHouseAssessment,
  mediaMilestones,
  majorMediaOutlets,
  umbrellaGroups,
  broadcastNetworks,
  governmentStatementMedia,
  influencerDeadline,
  twoLicenseSystem,
  influencerEligibilityRequirements,
  influencerApplicationProcess,
  influencerProcessingTime,
  contentCreatorObligations,
  new2026Restrictions,
  influencerExemptions,
  violationCategories,
  repeatOffenses,
  enforcementMechanisms,
  detentionCases2026,
  totalDetentionCases2026,
  vpnLegalStatus,
  vpnDownloadsTrend,
  gulfVpnComparison2025,
  globalVpnContext,
  voipServicesBlocked,
  voipBlockedReason,
  legalVoipAlternatives,
  otherBlockedCategories,
  websiteBlockingStats,
  internetInfrastructure,
  redSeaCableCuts,
  advertisingMarketSize,
  digitalAdvertisingMetrics,
  advertisingSegments2022,
  dominantSocialPlatforms,
  majorStreamingEntertainment,
  mediaEntertainmentSegments,
  mediaMarketTrends,
  telegraphAcquisition,
  otherMediaInvestments,
  journalistCases,
  detentionLegalFramework,
  humanRightsConcerns,
  contentManipulationHistory,
  alJazeeraBlockingTimeline,
  alJazeeraJustification,
  alJazeeraBlocksImplemented,
  rsfResponseAlJazeera,
  otherBlockedMediaList,
  gpsDisruptionEvents,
  gpsAffectedAreas,
  gpsPhenomenaObserved,
  gpsTechnicalMethods,
  gpsExpertQuote,
  gigWorkerImpact,
  gpsExpertWarnings,
  streamingRegulationIssues,
  streamingPlatforms,
  streamingRegulatoryApproach,
  childDigitalSafetyLaw,
  gamingAgeRatingSystem,
  digitalServicesCovered,
  trainingInstitutions,
  aiLiteracyStudy,
  dubaiAiInitiative,
  journalistSalaries,
  salaryRangeFactors,
  mediaDiversityUaeContext,
  unescoPerspective,
  mediaDiversityRealityVsNarrative,
  keyDataSummaryTable,
  regulatoryTimeline,
  penaltyStructureSummary,
  vpnDownloadTrend,
  urlSources,
  overallSentiment,
  sentimentByDimension,
  positiveSentimentElements,
  keyNarrativesAnalysis,
  relevanceScores,
  dashboardRecommendations,
  dataGapsIdentified,
  keyDefinitions,
  enrichmentMetadata,
} from '@/lib/data/topics/media-data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function MediaCommunicationsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Extract key metrics for cards
  const pressFreedom = keyMetricsAtGlance.find(m => m.metric.includes('Press Freedom'))
  const internetFreedom = keyMetricsAtGlance.find(m => m.metric.includes('Internet Freedom'))
  const adMarket = keyMetricsAtGlance.find(m => m.metric.includes('Advertising Market'))
  const websitesBlocked = keyMetricsAtGlance.find(m => m.metric.includes('Websites Blocked'))

  // VPN Chart data
  const vpnChartData = vpnDownloadsTrend.map(v => ({
    year: v.year.toString(),
    uae: v.uaeDownloads,
    global: v.globalDownloads,
  }))

  // Sentiment data for pie chart
  const sentimentData = [
    { name: 'Negative', value: 50, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 20, color: CHART_COLORS.platinum },
    { name: 'Positive', value: 30, color: CHART_COLORS.emerald },
  ]

  // Press freedom trend data
  const pressFreedomChartData = pressFreedomIndex.filter(p => p.score > 0).map(p => ({
    year: p.year.toString(),
    score: p.score,
    rank: p.rank,
  }))

  // Penalty severity data
  const penaltyChartData = [
    { name: 'Religious', value: 1000000, color: CHART_COLORS.rose },
    { name: 'UAE Symbol', value: 500000, color: CHART_COLORS.orange },
    { name: 'Foreign Rel.', value: 250000, color: CHART_COLORS.gold },
    { name: 'Inciting', value: 150000, color: CHART_COLORS.denim },
    { name: 'License', value: 40000, color: CHART_COLORS.platinum },
  ]

  // Violation count by severity
  const violationBySeverity = [
    { severity: 'Fourth Degree', count: 2, color: CHART_COLORS.rose },
    { severity: 'Third Degree', count: 3, color: CHART_COLORS.orange },
    { severity: 'Second Degree', count: 4, color: CHART_COLORS.gold },
    { severity: 'First Degree', count: 5, color: CHART_COLORS.platinum },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2">M-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">Media & Communications</h1>
          <p className="mt-2 text-platinum-400">
            Comprehensive analysis of UAE media environment including regulation, press freedom,
            influencer licensing, internet restrictions, and media market dynamics
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500">
            <span>Queries: 26</span>
            <span>Pages: 18</span>
            <span>Sources: 45+ URLs</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Newspaper className="h-4 w-4" />
            Media Outlets
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Press Freedom Index"
          value="26.91"
          unit="/100"
          previousValue={30.62}
          icon={<Shield className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Internet Freedom"
          value="28"
          unit="/100"
          previousValue={27}
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
          status="error"
        />
        <MetricCard
          title="Ad Market Size"
          value="$3.6B"
          previousValue={3.4}
          icon={<DollarSign className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Websites Blocked"
          value="160K+"
          previousValue={150}
          icon={<Ban className="h-6 w-6" />}
          gradient="orange"
          status="warning"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="regulation">Regulation</TabsTrigger>
          <TabsTrigger value="pressfreedom">Press Freedom</TabsTrigger>
          <TabsTrigger value="influencers">Influencers</TabsTrigger>
          <TabsTrigger value="violations">Violations</TabsTrigger>
          <TabsTrigger value="internet">Internet</TabsTrigger>
          <TabsTrigger value="market">Market</TabsTrigger>
          <TabsTrigger value="journalists">Journalists</TabsTrigger>
          <TabsTrigger value="gps">GPS</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Media & Communications Overview" description="Key metrics and executive summary">
              <div className="space-y-6">
                {/* Key Metrics Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {keyMetricsAtGlance.slice(0, 6).map((metric, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                    >
                      <p className="text-sm text-platinum-400">{metric.metric}</p>
                      <p className="mt-1 text-xl font-bold text-platinum-500">{metric.value}</p>
                      {metric.trend && (
                        <p className="mt-1 text-xs text-platinum-500">{metric.trend}</p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Sentiment Distribution */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Overall Sentiment</CardTitle>
                    <CardDescription>Media environment sentiment analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <PieChart
                        data={sentimentData}
                        height={250}
                        showLegend={true}
                      />
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="destructive" className="gap-1">
                            <AlertCircle className="h-3 w-3" /> Negative
                          </Badge>
                          <span className="text-2xl font-bold text-rose-500">50%</span>
                        </div>
                        <p className="text-sm text-platinum-400">
                          Press freedom restrictions, internet controls, severe penalties
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="gap-1">
                            <Info className="h-3 w-3" /> Neutral
                          </Badge>
                          <span className="text-2xl font-bold text-platinum-500">20%</span>
                        </div>
                        <p className="text-sm text-platinum-400">
                          Foreign investment openness, some regulatory aspects
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="success" className="gap-1">
                            <CheckCircle className="h-3 w-3" /> Positive
                          </Badge>
                          <span className="text-2xl font-bold text-emerald-500">30%</span>
                        </div>
                        <p className="text-sm text-platinum-400">
                          Digital infrastructure, market growth, training programs
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Findings */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Critical Findings</CardTitle>
                    <CardDescription>High-priority intelligence findings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                        <AlertCircle className="h-5 w-5 text-rose-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-platinum-200">Press Freedom at Critical Low</p>
                          <p className="mt-1 text-sm text-platinum-400">164th of 180 countries, declining 5+ years</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg bg-orange-500/10 p-4 border border-orange-500/30">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-platinum-200">Influencer License Deadline Imminent</p>
                          <p className="mt-1 text-sm text-platinum-400">January 31, 2026 - mandatory licensing enforcement</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg bg-gold-500/10 p-4 border border-gold-500/30">
                        <Lock className="h-5 w-5 text-gold-700 mt-0.5" />
                        <div>
                          <p className="font-medium text-platinum-200">VPN Restrictions Intensifying</p>
                          <p className="mt-1 text-sm text-platinum-400">9.6M downloads, 85.5% adoption rate</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                        <ShieldAlert className="h-5 w-5 text-rose-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-platinum-200">21 Detention Cases (2026)</p>
                          <p className="mt-1 text-sm text-platinum-400">Iran conflict-related charges under cybercrime laws</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Regulation Tab */}
        <TabsContent value="regulation" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="UAE Media Regulatory Framework" description="Primary legislation and regulatory bodies">
              <div className="space-y-6">
                {/* Primary Legislation */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Primary Legislation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {primaryLegislation.map((leg, idx) => (
                        <div key={idx} className="rounded-lg border border-platinum-700 p-4">
                          <h4 className="font-semibold text-platinum-500">{leg.name}</h4>
                          <p className="mt-1 text-sm text-platinum-400">Effective: {leg.effectiveDate}</p>
                          {leg.significance && (
                            <p className="mt-2 text-sm">{leg.significance}</p>
                          )}
                          {leg.penalties && (
                            <p className="mt-2 text-sm text-rose-500">Penalties: {leg.penalties}</p>
                          )}
                          {leg.mediaActivities && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {leg.mediaActivities.map((activity, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{activity}</Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Cabinet Decisions 2025 */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Cabinet Decisions 2025</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {cabinetDecisions2025.map((decision, idx) => (
                        <div key={idx} className="rounded-lg border border-gold-500/30 bg-gold-500/5 p-4">
                          <div className="flex items-center gap-2">
                            <Badge variant="gold">{decision.number}</Badge>
                            {decision.effectiveDate && (
                              <span className="text-xs text-platinum-500">{decision.effectiveDate}</span>
                            )}
                          </div>
                          <p className="mt-2 font-medium">{decision.name}</p>
                          <p className="mt-1 text-sm text-platinum-400">{decision.details}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* NMA Info */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Building className="h-5 w-5 text-gold-700" />
                      National Media Authority (NMA)
                    </CardTitle>
                    <CardDescription>Established December 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-platinum-300">Consolidated from:</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {nmaInfo.consolidatedFrom.map((item, i) => (
                            <Badge key={i} variant="outline">{item}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-platinum-300">Core Competencies:</p>
                        <div className="mt-2 space-y-2">
                          {nmaInfo.coreCompetencies.map((comp, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <ChevronRight className="h-4 w-4 text-gold-700 mt-0.5" />
                              <span className="text-platinum-400">{comp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Content Standards */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Media Content Standards (Required Compliance)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {contentStandards.map((standard, idx) => (
                        <div key={idx} className="flex items-start gap-2 rounded-lg bg-platinum-800/50 p-3">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <span className="text-sm">{standard.requirement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Media Free Zones */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Media-Free Zones</CardTitle>
                    <CardDescription>Four operational zones with 100% foreign ownership</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      {mediaFreeZones.map((zone, idx) => (
                        <div key={idx} className="rounded-lg border border-platinum-700 p-4">
                          <h4 className="font-semibold text-gold-700">{zone.emirate}</h4>
                          <div className="mt-2 space-y-1">
                            {zone.benefits.map((benefit, i) => (
                              <p key={i} className="text-xs text-platinum-400">{benefit}</p>
                            ))}
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

        {/* Press Freedom Tab */}
        <TabsContent value="pressfreedom" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Press Freedom & Censorship" description="RSF Index and Freedom House assessments">
              <div className="space-y-6">
                {/* Press Freedom Index Chart */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">RSF World Press Freedom Index Trend</CardTitle>
                    <CardDescription>2021-2025 Press Freedom Score</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={pressFreedomChartData}
                      xAxisKey="year"
                      bars={[
                        { dataKey: 'score', name: 'Score', color: CHART_COLORS.rose },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                {/* Current Rankings */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card border-rose-500/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-rose-500">RSF 2025 Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-platinum-400">Score</span>
                          <span className="text-2xl font-bold text-rose-500">26.91/100</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-platinum-400">Rank</span>
                          <span className="text-2xl font-bold text-rose-500">164th of 180</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-platinum-400">Trend</span>
                          <Badge variant="destructive">Down 12.1%</Badge>
                        </div>
                        <p className="mt-4 text-sm text-platinum-400">{rsfAssessment2025.text}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-orange-500/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-orange-500">Freedom House Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-platinum-400">Internet Freedom</span>
                          <span className="text-2xl font-bold text-orange-500">28/100</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-platinum-400">Classification</span>
                          <Badge variant="warning">"Not Free"</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-platinum-400">Previous Year</span>
                          <span className="text-lg">27/100</span>
                        </div>
                        <p className="mt-4 text-sm text-platinum-400">{freedomHouseAssessment.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Media Milestones */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Media Milestones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {mediaMilestones.map((event, idx) => (
                          <div key={idx} className="flex items-center gap-4 rounded-lg border border-platinum-700 p-3">
                            <Badge variant="gold" className="w-16 justify-center">{event.year}</Badge>
                            <span className="text-sm">{event.event}</span>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Major Media Outlets */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Major Media Outlets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gold-700 mb-2">Government-owned</p>
                        <div className="flex flex-wrap gap-2">
                          {majorMediaOutlets.filter(o => o.ownership === 'Government-owned').map((outlet, i) => (
                            <Badge key={i} variant="gold">{outlet.name}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-platinum-500 mb-2">Privately owned (with government ties)</p>
                        <div className="flex flex-wrap gap-2">
                          {majorMediaOutlets.filter(o => o.ownership.includes('Privately')).map((outlet, i) => (
                            <Badge key={i} variant="outline">{outlet.name}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-platinum-400 mb-2">Umbrella Groups</p>
                        <div className="flex flex-wrap gap-2">
                          {umbrellaGroups.map((group, i) => (
                            <Badge key={i} variant="secondary">{group}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Government Statement */}
                <Card className="glass-card border-gold-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Government Statement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="border-l-4 border-gold pl-4 italic text-platinum-300">
                      "{governmentStatementMedia.quote}"
                    </blockquote>
                    <p className="mt-2 text-sm text-platinum-500">— {governmentStatementMedia.speaker}</p>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Influencers Tab */}
        <TabsContent value="influencers" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Influencer & Social Media Licensing" description="Mandatory licensing requirements and regulations">
              <div className="space-y-6">
                {/* Deadline Alert */}
                <Card className="glass-card border-gold-500/50 bg-gold-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-platinum-400">License Deadline</p>
                        <p className="mt-1 text-3xl font-bold text-gold-700">{influencerDeadline.deadline}</p>
                      </div>
                      <Badge variant="gold" className="text-lg px-4 py-2">MANDATORY</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Two License System */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Two-License System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {twoLicenseSystem.map((license, idx) => (
                        <div key={idx} className="rounded-lg border border-platinum-700 p-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-platinum-500">{license.license}</h4>
                            <Badge variant="gold">{license.cost}</Badge>
                          </div>
                          <p className="mt-2 text-sm text-platinum-400">{license.purpose || license.covers}</p>
                          {license.visitorPermit && (
                            <p className="mt-1 text-sm text-platinum-500">Visitor permit: {license.visitorPermit}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Eligibility Requirements */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Eligibility Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {influencerEligibilityRequirements.map((req, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span className="text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Processing Time */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Application Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {influencerApplicationProcess.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy-950 text-sm font-bold">
                            {idx + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                      <div className="mt-4 flex items-center gap-2 rounded-lg bg-platinum-800/50 p-3">
                        <Clock className="h-4 w-4 text-gold-700" />
                        <span className="text-sm">Processing time: {influencerProcessingTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Content Creator Obligations */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Content Creator Obligations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {contentCreatorObligations.map((obligation, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-gold-700 mt-0.5" />
                          <span className="text-sm">{obligation}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* 2026 Restrictions */}
                <Card className="glass-card border-rose-500/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-rose-500">New 2026 Restrictions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {new2026Restrictions.map((restriction, idx) => (
                        <div key={idx} className="flex items-center gap-2 rounded-lg bg-rose-500/10 p-3">
                          <XCircle className="h-4 w-4 text-rose-500" />
                          <span className="text-sm">{restriction}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Exemptions */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Exemptions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {influencerExemptions.map((exemption, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span className="text-sm">{exemption}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Violations Tab */}
        <TabsContent value="violations" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Content Violations & Penalties" description="Cabinet Decision No. 42 of 2025 penalty structure">
              <div className="space-y-6">
                {/* Penalty Chart */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Maximum Fines by Violation Category (AED)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={penaltyChartData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Max Fine (AED)', color: CHART_COLORS.rose },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                {/* Violations by Severity */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Violations by Severity Level</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {violationBySeverity.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{item.severity}</span>
                            <Badge style={{ backgroundColor: item.color, color: 'white' }}>{item.count} violations</Badge>
                          </div>
                          <Progress value={(item.count / 5) * 100} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Violations Table */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Detailed Penalty Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-2">
                        {violationCategories.map((violation, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 p-3">
                            <div className="flex-1">
                              <p className="text-sm font-medium">{violation.violationType}</p>
                              <p className="text-xs text-platinum-500">{violation.severity}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-bold text-rose-500">
                                {violation.maxFine.toLocaleString()} AED
                              </p>
                              <p className="text-xs text-platinum-500">
                                Min: {violation.minFine.toLocaleString()} AED
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Repeat Offenses */}
                <Card className="glass-card border-rose-500/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-rose-500">Repeat Offenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-bold">Penalties double for each recurrence</p>
                  </CardContent>
                </Card>

                {/* Enforcement Mechanisms */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Enforcement Mechanisms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {enforcementMechanisms.map((mech, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-4">
                          <h4 className="font-semibold text-gold-700">{mech.mechanism}</h4>
                          <p className="mt-1 text-sm text-platinum-400">{mech.details}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* 2026 Detention Cases */}
                <Card className="glass-card border-rose-500/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-rose-500">2026 Detention Cases (Iran Conflict)</CardTitle>
                    <CardDescription>{totalDetentionCases2026} people facing charges</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {detentionCases2026.map((caseItem, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-rose-500/10 p-3 border border-rose-500/30">
                          <div>
                            <p className="font-medium">{caseItem.case}</p>
                            <p className="mt-1 text-sm text-platinum-400">{caseItem.details}</p>
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

        {/* Internet Tab */}
        <TabsContent value="internet" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="VPN & Internet Restrictions" description="Internet freedom, VPN usage, and blocked services">
              <div className="space-y-6">
                {/* VPN Downloads Chart */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">VPN Downloads Trend (UAE vs Global)</CardTitle>
                    <CardDescription>2021-2025 VPN adoption</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={vpnChartData}
                      lines={[
                        { dataKey: 'uae', name: 'UAE (millions)', color: CHART_COLORS.gold },
                        { dataKey: 'global', name: 'Global (millions)', color: CHART_COLORS.platinum },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                {/* Gulf Comparison */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Gulf VPN Comparison 2025</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {gulfVpnComparison2025.map((country, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4">
                          <span className="font-medium">{country.country}</span>
                          <div className="flex gap-4">
                            <div className="text-right">
                              <p className="text-sm text-platinum-400">Downloads</p>
                              <p className="font-bold">{country.downloads}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-platinum-400">Adoption</p>
                              <p className="font-bold text-gold-700">{country.adoption}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* VPN Legal Status */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">VPN Legal Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500" />
                          <span className="font-medium text-emerald-500">Legal When</span>
                        </div>
                        <p className="mt-2 text-sm">{vpnLegalStatus.legalWhen}</p>
                      </div>
                      <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-rose-500" />
                          <span className="font-medium text-rose-500">Illegal When</span>
                        </div>
                        <p className="mt-2 text-sm">{vpnLegalStatus.illegalWhen}</p>
                        <p className="mt-2 text-sm text-rose-500 font-medium">
                          Fine: {vpnLegalStatus.penalties.fine}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* VoIP Blocked */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">VoIP Services Blocked</CardTitle>
                    <CardDescription>{voipBlockedReason}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                      {voipServicesBlocked.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2 rounded-lg bg-rose-500/10 p-3">
                          <XCircle className="h-4 w-4 text-rose-500" />
                          <span className="text-sm">{service.service}</span>
                          <Badge variant="destructive" className="ml-auto text-xs">{service.status}</Badge>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-platinum-300">Legal Alternatives:</p>
                      <div className="mt-2 flex gap-2">
                        {legalVoipAlternatives.map((alt, idx) => (
                          <Badge key={idx} variant="success">{alt}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Other Blocked Categories */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Other Blocked Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {otherBlockedCategories.map((category, idx) => (
                        <Badge key={idx} variant="outline" className="text-rose-500">{category}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Website Blocking */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Website Blocking Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                        <p className="text-3xl font-bold text-rose-500">160,000+</p>
                        <p className="text-sm text-platinum-400">Total Blocked</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                        <p className="text-3xl font-bold text-gold-700">883</p>
                        <p className="text-sm text-platinum-400">Q1 2022</p>
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                        <p className="text-sm font-medium">TDRA</p>
                        <p className="text-sm text-platinum-400">Managed by</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Internet Infrastructure */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Internet Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {internetInfrastructure.map((infra, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-4">
                          <p className="text-sm text-platinum-400">{infra.metric}</p>
                          <p className="mt-1 text-lg font-bold text-gold-700">{infra.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Red Sea Cable Cuts */}
                <Card className="glass-card border-orange-500/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-500">Red Sea Cable Cuts (September 2025)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>{redSeaCableCuts.details}</p>
                      <p className="text-sm text-platinum-400">Impact: {redSeaCableCuts.impact}</p>
                      <p className="text-sm text-platinum-400">Repair duration: {redSeaCableCuts.repairDuration}</p>
                      <p className="text-xs text-platinum-500">{redSeaCableCuts.context}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Market Tab */}
        <TabsContent value="market" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Media Market & Advertising" description="Advertising market size, digital ad spend, and market trends">
              <div className="space-y-6">
                {/* Market Metrics */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                    <p className="text-3xl font-bold text-gold-700">$3.6B</p>
                    <p className="text-sm text-platinum-400">Ad Market 2025</p>
                  </div>
                  <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                    <p className="text-3xl font-bold text-emerald-500">$18.5B</p>
                    <p className="text-sm text-platinum-400">Digital Market 2030</p>
                  </div>
                  <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                    <p className="text-3xl font-bold text-platinum-500">68%</p>
                    <p className="text-sm text-platinum-400">Digital Ad Share</p>
                  </div>
                  <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                    <p className="text-3xl font-bold text-diamond">12.2%</p>
                    <p className="text-sm text-platinum-400">Digital CAGR</p>
                  </div>
                </div>

                {/* Digital Advertising Metrics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Digital Advertising Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {digitalAdvertisingMetrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <div>
                            <p className="font-medium">{metric.metric}</p>
                            <p className="text-xs text-platinum-500">Source: {metric.source}</p>
                          </div>
                          <p className="text-lg font-bold text-gold-700">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Ad Segments */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Advertising Segments (2022)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={advertisingSegments2022.map((seg, idx) => ({
                        name: seg.segment,
                        value: parseFloat(seg.revenue.replace(/[$M]/g, '')),
                        color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
                      }))}
                      height={300}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                {/* Dominant Platforms */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Dominant Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {dominantSocialPlatforms.map((platform, idx) => (
                        <Badge key={idx} variant="gold">{platform}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Major Streaming */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Major Streaming/Entertainment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {majorStreamingEntertainment.map((platform, idx) => (
                        <div key={idx} className="flex items-center gap-2 rounded-lg bg-platinum-800/50 p-3">
                          <Tv className="h-5 w-5 text-gold-700" />
                          <span className="text-sm">{platform}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Media & Entertainment Segments */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Media & Entertainment Segments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {mediaEntertainmentSegments.map((segment, idx) => (
                        <Badge key={idx} variant="outline">{segment}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Market Trends */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Market Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {mediaMarketTrends.map((trend, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-emerald-500" />
                          <span className="text-sm">{trend}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Foreign Investment - Telegraph */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Foreign Media Investment - The Telegraph</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="gold">2023</Badge>
                        <span className="text-sm">{telegraphAcquisition.year2023}</span>
                      </div>
                      {telegraphAcquisition.year2025Details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Badge variant="outline">2025</Badge>
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                      <div className="mt-4 space-y-2">
                        {telegraphAcquisition.keyEntities.map((entity, idx) => (
                          <div key={idx} className="rounded-lg bg-platinum-800/50 p-3">
                            <p className="text-sm font-medium text-gold-700">{entity.name}</p>
                            <p className="text-xs text-platinum-400">{entity.role}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Journalists Tab */}
        <TabsContent value="journalists" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Journalist Cases & Detentions" description="Documented cases and legal framework">
              <div className="space-y-6">
                {/* Documented Cases */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Documented Cases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {journalistCases.map((journalist, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg border border-platinum-700 p-4">
                          <div>
                            <p className="font-medium">{journalist.individual}</p>
                            <p className="mt-1 text-sm text-platinum-400">{journalist.details}</p>
                          </div>
                          <Badge variant={journalist.status === 'Detained' ? 'destructive' : 'warning'}>
                            {journalist.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Legal Framework */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Legal Framework for Detentions</CardTitle>
                    <CardDescription>{detentionLegalFramework.law}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {detentionLegalFramework.provisions.map((provision, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-rose-500 mt-0.5" />
                          <span className="text-sm">{provision}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Human Rights Concerns */}
                <Card className="glass-card border-rose-500/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-rose-500">Human Rights Concerns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {humanRightsConcerns.map((concern, idx) => (
                        <div key={idx} className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <p className="font-medium text-rose-500">{concern.organization}</p>
                          <div className="mt-2 space-y-1">
                            {concern.details.map((detail, i) => (
                              <p key={i} className="text-sm text-platinum-400">{detail}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Content Manipulation */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Content Manipulation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {contentManipulationHistory.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 rounded-lg bg-platinum-800/50 p-3">
                          <Badge variant="gold">{item.year}</Badge>
                          <span className="text-sm">{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Journalist Salaries */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Journalist Salaries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {journalistSalaries.map((salary, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <div>
                            <p className="font-medium">{salary.source}</p>
                            <p className="text-xs text-platinum-500">{salary.details}</p>
                          </div>
                          <p className="text-lg font-bold text-gold-700">{salary.averageSalary}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Salary Factors */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Salary Range Factors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {salaryRangeFactors.map((factor, idx) => (
                        <Badge key={idx} variant="outline">{factor}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* GPS Tab */}
        <TabsContent value="gps" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="GPS Jamming & Satellite Issues" description="GPS disruption during Iran conflict 2026">
              <div className="space-y-6">
                {/* GPS Disruption Events */}
                <Card className="glass-card border-orange-500/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-500">GPS Disruption During Iran War (2026)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {gpsDisruptionEvents.map((event, idx) => (
                        <div key={idx} className="rounded-lg bg-orange-500/10 p-4 border border-orange-500/30">
                          <div className="flex items-center justify-between">
                            <Badge variant="warning">{event.date}</Badge>
                            <span className="text-2xl font-bold text-orange-500">{event.shipsAffected}</span>
                          </div>
                          {event.increase && (
                            <p className="mt-2 text-sm text-orange-500">+{event.increase}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Affected Areas */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Affected Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {gpsAffectedAreas.map((area, idx) => (
                        <Badge key={idx} variant="gold">{area}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Phenomena Observed */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Phenomena Observed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {gpsPhenomenaObserved.map((phenomenon, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          <span className="text-sm">{phenomenon}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Technical Methods */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Technical Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {gpsTechnicalMethods.map((method, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-4">
                          <h4 className="font-semibold text-gold-700">{method.method}</h4>
                          <p className="mt-1 text-sm text-platinum-400">{method.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Expert Quote */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Expert Warning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="border-l-4 border-gold pl-4 italic text-platinum-300">
                      "{gpsExpertQuote.quote}"
                    </blockquote>
                    <p className="mt-2 text-sm text-platinum-500">— {gpsExpertQuote.speaker}</p>
                  </CardContent>
                </Card>

                {/* Gig Worker Impact */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Impact on Gig Workers</CardTitle>
                    <CardDescription>Delivery drivers affected by GPS disruptions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {gigWorkerImpact.affectedCompanies.map((company, idx) => (
                          <Badge key={idx} variant="outline">{company}</Badge>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {gigWorkerImpact.issues.map((issue, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5" />
                            <span className="text-sm">{issue}</span>
                          </div>
                        ))}
                      </div>
                      <blockquote className="border-l-4 border-platinum pl-4 italic text-platinum-400">
                        "{gigWorkerImpact.quote}"
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>

                {/* Expert Warnings */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Expert Warnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {gpsExpertWarnings.map((warning, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-4">
                          <p className="text-sm font-medium text-gold-700">{warning.speaker}</p>
                          <p className="mt-1 text-sm text-platinum-400">"{warning.quote}"</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Training Tab */}
        <TabsContent value="training" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Media Training & Education" description="Key institutions and programs">
              <div className="space-y-6">
                {/* Training Institutions */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Training Institutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trainingInstitutions.map((institution, idx) => (
                        <div key={idx} className="rounded-lg border border-platinum-700 p-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gold-700">{institution.name}</h4>
                            {institution.location && (
                              <Badge variant="outline">{institution.location}</Badge>
                            )}
                          </div>
                          {institution.launched && (
                            <p className="mt-1 text-sm text-platinum-500">Launched: {institution.launched}</p>
                          )}
                          {institution.founder && (
                            <p className="mt-1 text-sm text-platinum-400">Founder: {institution.founder}</p>
                          )}
                          {institution.mission && (
                            <p className="mt-2 text-sm">{institution.mission}</p>
                          )}
                          {institution.programs && (
                            <div className="mt-2">
                              <p className="text-xs font-medium text-platinum-400">Programs:</p>
                              <p className="text-sm">{institution.programs}</p>
                            </div>
                          )}
                          {institution.courses && (
                            <div className="mt-2">
                              <p className="text-xs font-medium text-platinum-400">Courses:</p>
                              <p className="text-sm">{institution.courses}</p>
                            </div>
                          )}
                          {institution.contact && (
                            <p className="mt-2 text-xs text-platinum-500">{institution.contact}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* AI Literacy Study */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">AI Literacy in Media Education</CardTitle>
                    <CardDescription>Study: UAE vs Pakistan (536 mass communication students)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {aiLiteracyStudy.findings.map((finding, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Lightbulb className="h-4 w-4 text-gold-700 mt-0.5" />
                          <span className="text-sm">{finding}</span>
                        </div>
                      ))}
                      <p className="mt-4 text-sm font-medium">Recommendation: {aiLiteracyStudy.recommendations}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Dubai AI Initiative */}
                <Card className="glass-card border-gold-500/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Dubai AI Initiative</CardTitle>
                    <CardDescription>{dubaiAiInitiative.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium">Program:</p>
                        <p className="text-sm text-platinum-400">{dubaiAiInitiative.program}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Focus Areas:</p>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {dubaiAiInitiative.focusAreas.map((area, idx) => (
                            <Badge key={idx} variant="gold">{area}</Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm font-medium text-emerald-500">Benefit: {dubaiAiInitiative.benefit}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Streaming Regulation */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">OTT/Streaming Regulation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {streamingRegulationIssues.map((item, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-4">
                          <p className="font-medium">{item.issue}</p>
                          <p className="mt-1 text-sm text-platinum-400">{item.details}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Gaming & Digital Safety */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Gaming & Digital Safety</CardTitle>
                    <CardDescription>Child Digital Safety Law (2025-2026)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {childDigitalSafetyLaw.keyProvisions.map((provision, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                            <span className="text-sm">{provision}</span>
                          </div>
                        ))}
                      </div>
                      <div className="rounded-lg bg-platinum-800/50 p-4">
                        <p className="text-sm font-medium">Video Game Age Rating</p>
                        <div className="mt-2 grid gap-2 md:grid-cols-2">
                          <p className="text-sm">Administering: {gamingAgeRatingSystem.administeringBody}</p>
                          <p className="text-sm">Fee: {gamingAgeRatingSystem.fee}</p>
                          <p className="text-sm">Processing: {gamingAgeRatingSystem.processingDays}</p>
                          <p className="text-sm">Type: {gamingAgeRatingSystem.requirement}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Sentiment Analysis" description="Comprehensive sentiment assessment of UAE media environment">
              <div className="space-y-6">
                {/* Overall Sentiment */}
                <Card className="glass-card border-rose-500/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Overall Sentiment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-rose-500">{overallSentiment}</p>
                  </CardContent>
                </Card>

                {/* Sentiment Dimensions */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment by Dimension</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sentimentByDimension.map((dim, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-4">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{dim.dimension}</span>
                            <Badge
                              variant={
                                dim.sentiment.includes('Highly Negative') || dim.sentiment === 'Negative'
                                  ? 'destructive'
                                  : dim.sentiment === 'Positive'
                                  ? 'success'
                                  : 'outline'
                              }
                            >
                              {dim.sentiment}
                            </Badge>
                          </div>
                          <p className="mt-2 text-sm text-platinum-400">{dim.evidence}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Positive Elements */}
                <Card className="glass-card border-emerald-500/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald-500">Positive Elements (Official Narrative)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {positiveSentimentElements.map((element, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <div>
                            <span className="font-medium text-emerald-500">{element.dimension}:</span>
                            <span className="text-sm text-platinum-400 ml-1">{element.evidence}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Key Narratives */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Narratives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {keyNarrativesAnalysis.map((narrative, idx) => (
                        <div key={idx} className="rounded-lg border border-platinum-700 p-4">
                          <h4 className="font-semibold text-gold-700">{narrative.narrative}</h4>
                          <div className="mt-2 space-y-1">
                            {narrative.statements.map((statement, i) => (
                              <p key={i} className="text-sm text-platinum-400">• {statement}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Relevance Scores */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Relevance Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {relevanceScores.map((rel, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <span className="text-sm">{rel.topic}</span>
                          <Badge
                            variant={
                              rel.score === 'CRITICAL'
                                ? 'destructive'
                                : rel.score === 'HIGH'
                                ? 'warning'
                                : 'outline'
                            }
                          >
                            {rel.score}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Dashboard Recommendations */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Dashboard Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {dashboardRecommendations.map((rec, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-4">
                          <p className="font-medium text-gold-700">{rec.category}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {rec.metrics.map((metric, i) => (
                              <Badge key={i} variant="outline">{metric}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Data Gaps */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Data Gaps Identified</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {dataGapsIdentified.map((gap, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 p-3">
                          <div>
                            <p className="text-sm font-medium">{gap.gap}</p>
                            <p className="text-xs text-platinum-500">Source: {gap.sourceNeeded}</p>
                          </div>
                          <Badge
                            variant={
                              gap.priority === 'High'
                                ? 'destructive'
                                : gap.priority === 'Medium'
                                ? 'warning'
                                : 'outline'
                            }
                          >
                            {gap.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Enrichment Metadata */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Enrichment Metadata</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-gold-700">{enrichmentMetadata.dataPointsExtracted}+</p>
                        <p className="text-sm text-platinum-400">Data Points</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-gold-700">{enrichmentMetadata.tablesCreated}</p>
                        <p className="text-sm text-platinum-400">Tables Created</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-gold-700">{enrichmentMetadata.entitiesDocumented}</p>
                        <p className="text-sm text-platinum-400">Entities</p>
                      </div>
                    </div>
                    <p className="mt-4 text-center text-sm text-platinum-500">
                      Report generated: {enrichmentMetadata.reportGenerated} | Confidence: {enrichmentMetadata.confidenceLevel}
                    </p>
                  </CardContent>
                </Card>

                {/* Key Definitions */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Appendix: Key Definitions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {keyDefinitions.map((def, idx) => (
                        <div key={idx} className="rounded-lg bg-platinum-800/50 p-3">
                          <p className="font-medium text-gold-700">{def.term}</p>
                          <p className="text-sm text-platinum-400">{def.definition}</p>
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
