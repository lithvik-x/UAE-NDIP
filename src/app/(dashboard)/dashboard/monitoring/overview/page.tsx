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
  Activity,
  AlertCircle,
  Eye,
  Globe,
  Radar,
  Shield,
  Signal,
  Target,
  TrendingUp,
  Zap,
  Search,
  Network,
  Fingerprint,
  Database,
  GitBranch,
  BarChart3,
  ShieldCheck,
  AlertTriangle,
  Award,
  Crown,
  Gem,
  TrendingDown,
  DollarSign,
  Plane,
  Building2,
  Users,
  Globe2,
  Scale,
  Flag,
  LineChart as LineChartIcon,
  Trophy,
  Medal,
  Target as TargetIcon,
  Percent,
  MessageSquare,
  Newspaper,
  Users as UsersIcon,
  Bell,
  Clock,
  Layers,
  Radio,
  CheckCircle,
  XCircle,
  AlertOctagon,
  Star,
  Tool,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  useMonitoringOverviewData,
  entityInvestigationPhaseMetrics,
  entityInvestigationKPIs,
  entityInvestigationTools,
  networkCentralityAlgorithms,
  influenceScoringModel,
  sentimentScoreRanges,
  amlRiskAssessment,
  weeklyDeepDiveExtendedData,
  weeklyDeepDiveData,
} from '@/lib/data-loader'
import {
  uaeRankings,
  uaeSaudiDemographics,
  uaeSaudiEconomics,
  uaeSingaporeComparison,
  uaeQatarAirlines,
  skytrax2025Rankings,
  skytraxSpecialAwards,
  saudiVision2030,
  israeliTech,
  competitiveIntelMatrix,
  uaeWinningNarratives,
  contestedNarratives,
  competitorVulnerabilities,
  competitiveSentiment,
  keyMetricsSummary,
  competitorMonitoringQueries,
  uaeRelevanceMatrix,
  competitiveIntelligenceData,
  // MD 12-1 Daily Monitoring Data
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
  gapAnalysisFullData,
  // MD 12-7 Narrative Reconstruction Data
  narrativeReconstructionData,
  blackbirdMetrics,
  blackbirdCaseStudies,
  narrativeIntelligencePlatforms,
  peakMetricsFramework,
  edgeTheoryProcess,
  originTracingMethods,
  narrativeLifecycleStages,
  measurementFrameworks,
  llmShiftDetectionMetrics,
  searchQueryStrategies,
  // MD 12-3 Crisis Response Data
  crisisLevelClassification,
  crisisPhases,
  crisisManagementLessons,
  osintTools,
  narrativeAttackCases,
  crisisQueryPhases,
  crisisMetrics,
  crisisEntityRegistry,
  crisisSentimentByTopic,
  deepFakeStats,
  disinformationStats,
  influencerStats,
  emergencyManagementStats,
  factCheckingStats,
  digitalStats,
  toolsRecommended,
  sourceCitations,
  crisisStatistics,
  narrativeAttackStatistics,
  influencerImpactStatistics,
  emergencyManagementStatistics,
  factCheckingStatistics,
  digitalStatistics,
  // MD 12-4 Historical Baseline Data
  enrichmentMetadata,
  historicalBaselineKPIs,
  preModernArchives,
  earlyInternetArchives,
  socialMediaEraArchives,
  recentEraArchives,
  nlaSubjectTopics,
  gulfNewsTimeline,
  organizationRegistry,
  personRegistry,
  eventRegistry,
  tierDefinitions,
  sourceRatingsTable,
  sentimentAnalysisByTopic,
  kpiSet1HistoricalArchiveCoverage,
  kpiSet2MediaEvolution,
  kpiSet3HistoricalEventsImpact,
  kpiSet4SourceReliabilityMatrix,
  uaeRelevanceAssessmentSummary,
  urlContentSummaries,
  dataGapsAndRecommendations,
  failedURLAccess,
} from '@/lib/data-loader/monitoring-data'

export default function MonitoringOverviewPage() {
  const { data } = useMonitoringOverviewData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Monitoring data...</div>
      </div>
    )
  }

  // UAE Real-time monitoring metrics
  const dailyCyberAttacks = 647283
  const threatsBlocked = 612847
  const activeThreats = 1247
  const criticalAlerts = 23

  // Threat distribution data
  const threatDistributionData = [
    { name: 'Ransomware', value: 28, color: CHART_COLORS.rose },
    { name: 'Phishing', value: 35, color: CHART_COLORS.gold },
    { name: 'DDoS', value: 18, color: CHART_COLORS.navy },
    { name: 'APT', value: 12, color: CHART_COLORS.rose },
    { name: 'Malware', value: 7, color: CHART_COLORS.platinum },
  ]

  // Attack origin data
  const attackOriginData = [
    { name: 'Eastern Europe', value: 42, color: CHART_COLORS.rose },
    { name: 'North America', value: 23, color: CHART_COLORS.navy },
    { name: 'Asia Pacific', value: 18, color: CHART_COLORS.gold },
    { name: 'Middle East', value: 10, color: CHART_COLORS.emerald },
    { name: 'Other', value: 7, color: CHART_COLORS.platinum },
  ]

  // Sector targeting data
  const sectorTargetingData = [
    { name: 'Finance', value: 32, color: CHART_COLORS.gold },
    { name: 'Government', value: 28, color: CHART_COLORS.navy },
    { name: 'Energy', value: 18, color: CHART_COLORS.rose },
    { name: 'Telecom', value: 14, color: CHART_COLORS.emerald },
    { name: 'Healthcare', value: 8, color: CHART_COLORS.platinum },
  ]

  // Hourly attack pattern
  const hourlyAttackData = [
    { hour: '00:00', attacks: 18234, severity: 23 },
    { hour: '04:00', attacks: 12847, severity: 18 },
    { hour: '08:00', attacks: 45231, severity: 45 },
    { hour: '12:00', attacks: 67892, severity: 67 },
    { hour: '16:00', attacks: 72341, severity: 72 },
    { hour: '20:00', attacks: 52341, severity: 52 },
  ]

  // Recent threats list
  const recentThreats = [
    { id: 1, type: 'APT-41', target: 'Financial Sector', severity: 'CRITICAL', time: '2 min ago', status: 'Active' },
    { id: 2, type: 'Ransomware', target: 'Government Agency', severity: 'HIGH', time: '15 min ago', status: 'Contained' },
    { id: 3, type: 'Phishing Campaign', target: 'Telecom', severity: 'MEDIUM', time: '32 min ago', status: 'Blocked' },
    { id: 4, type: 'DDoS', target: 'Energy Infrastructure', severity: 'HIGH', time: '1 hr ago', status: 'Mitigated' },
    { id: 5, type: 'Zero-Day', target: 'Financial Sector', severity: 'CRITICAL', time: '3 hr ago', status: 'Patched' },
  ]

  // Entity Investigation Data from MD file
  const entityInvestigationMetrics = [
    { label: 'Entities Investigated', value: 23, icon: <Fingerprint className="h-5 w-5" />, color: 'gold' },
    { label: 'Hidden Connections', value: 156, icon: <Network className="h-5 w-5" />, color: 'emerald' },
    { label: 'Influence Mapped', value: 2340, icon: <GitBranch className="h-5 w-5" />, color: 'navy' },
    { label: 'Queries Per Entity', value: '50K', icon: <Search className="h-5 w-5" />, color: 'rose' },
  ]

  const entityPhaseData = [
    { phase: 'Phase 1', name: 'Entity Mapping', duration: '1 hr', queries: '10,000', output: 'Identity Map', color: CHART_COLORS.gold },
    { phase: 'Phase 2', name: 'Content Harvesting', duration: '4 hrs', queries: '30,000', output: 'Content Corpus', color: CHART_COLORS.emerald },
    { phase: 'Phase 3', name: 'Analysis', duration: '4 hrs', queries: '10,000', output: 'Intelligence Profile', color: CHART_COLORS.navy },
  ]

  const entityInvestigationToolsData = entityInvestigationTools.osint.map((tool, idx) => ({
    name: tool.name,
    useCase: tool.useCase,
    cost: tool.cost,
    color: [CHART_COLORS.gold, CHART_COLORS.rose, CHART_COLORS.emerald, CHART_COLORS.navy, CHART_COLORS.platinum, CHART_COLORS.rose][idx % 6]
  }))

  const mediaMonitoringData = entityInvestigationTools.mediaMonitoring.map((tool, idx) => ({
    name: tool.name,
    coverage: tool.coverage.split(',')[0],
    cost: tool.cost,
    color: [CHART_COLORS.gold, CHART_COLORS.rose, CHART_COLORS.emerald, CHART_COLORS.navy, CHART_COLORS.platinum][idx % 5]
  }))

  const centralityAlgorithmsData = networkCentralityAlgorithms.map((algo, idx) => ({
    name: algo.algorithm,
    complexity: algo.timeComplexity,
    useCase: algo.useCase,
    color: [CHART_COLORS.gold, CHART_COLORS.rose, CHART_COLORS.emerald, CHART_COLORS.navy][idx % 4]
  }))

  const influenceFactorsData = influenceScoringModel.factors.map(factor => ({
    name: factor.factor,
    weight: factor.weight,
    color: factor.factor === 'Reach' ? CHART_COLORS.gold :
           factor.factor === 'Engagement' ? CHART_COLORS.rose :
           factor.factor === 'Centrality' ? CHART_COLORS.emerald :
           factor.factor === 'Sentiment' ? CHART_COLORS.navy :
           factor.factor === 'Activity' ? CHART_COLORS.platinum : CHART_COLORS.gold
  }))

  const sentimentRangesData = sentimentScoreRanges.map(range => ({
    range: range.range,
    status: range.status,
    action: range.action,
    color: range.status === 'Excellent' ? CHART_COLORS.emerald :
           range.status === 'Good' ? CHART_COLORS.gold :
           range.status === 'Neutral' ? CHART_COLORS.navy :
           range.status === 'Concerning' ? CHART_COLORS.rose : CHART_COLORS.platinum
  }))

  const arabicNameVariantsData = [
    { variant: '2 Variants', percentage: 59, color: CHART_COLORS.gold },
    { variant: '3 Variants', percentage: 26, color: CHART_COLORS.rose },
    { variant: '4+ Variants', percentage: 15, color: CHART_COLORS.emerald },
  ]

  const kpiHighlightsData = [
    { label: 'Arabic Names (2+ variants)', value: '59%', source: 'Al-Kindi Study' },
    { label: 'Alias Discovery Rate', value: '20-30%', source: 'Bib.com' },
    { label: 'Social Engagement Lift', value: '306%', source: 'Dashclicks' },
    { label: 'Content Signal Weight', value: '57.3%', source: 'ArXiv Study' },
    { label: 'Platform Modules', value: '500+', source: 'OSINT Industries' },
    { label: 'Media Sources', value: '150M+', source: 'Talkwalker' },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">CRITICAL</Badge>
      case 'HIGH': return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">HIGH</Badge>
      case 'MEDIUM': return <Badge variant="outline" className="text-xs text-yellow-400 border-yellow-400/50">MEDIUM</Badge>
      default: return <Badge variant="outline" className="text-xs">LOW</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return <Badge variant="destructive" className="text-xs">Active</Badge>
      case 'Contained': return <Badge variant="warning" className="text-xs">Contained</Badge>
      case 'Blocked': return <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Blocked</Badge>
      case 'Mitigated': return <Badge variant="outline" className="text-xs text-blue-400 border-blue-400/50">Mitigated</Badge>
      case 'Patched': return <Badge variant="outline" className="text-xs text-platinum-400 border-platinum-400/50">Patched</Badge>
      default: return <Badge variant="outline" className="text-xs">{status}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">M-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Monitoring Overview</h1>
          <p className="mt-2 text-slate-400">
            Real-time cyber threat monitoring and intelligence across UAE digital infrastructure
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Radar className="h-4 w-4" />
            Live Feed
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Alert Center
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Daily Cyber Attacks"
          value={dailyCyberAttacks}
          previousValue={dailyCyberAttacks - 23451}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
          status="info"
          formatter={(v) => v.toLocaleString()}
        />
        <MetricCard
          title="Threats Blocked"
          value={threatsBlocked}
          previousValue={threatsBlocked - 18234}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
          status="success"
          formatter={(v) => v.toLocaleString()}
        />
        <MetricCard
          title="Active Threats"
          value={activeThreats}
          previousValue={activeThreats + 142}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
        <MetricCard
          title="Critical Alerts"
          value={criticalAlerts}
          icon={<Signal className="h-6 w-6" />}
          gradient="denim"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="crisis">Crisis Response</TabsTrigger>
          <TabsTrigger value="daily">Daily Monitoring</TabsTrigger>
          <TabsTrigger value="threats">Threat Analysis</TabsTrigger>
          <TabsTrigger value="sectors">Sector Tracking</TabsTrigger>
          <TabsTrigger value="feed">Live Feed</TabsTrigger>
          <TabsTrigger value="entities">Entity Investigation</TabsTrigger>
          <TabsTrigger value="deepdive">Weekly Deep Dive</TabsTrigger>
          <TabsTrigger value="competitive">Competitive</TabsTrigger>
          <TabsTrigger value="gapanalysis">Gap Analysis</TabsTrigger>
          <TabsTrigger value="baseline">Historical Baseline</TabsTrigger>
          <TabsTrigger value="narrative">Narrative Reconstruction</TabsTrigger>
        </TabsList>

        {/* Crisis Response Tab - MD 12-3 */}
        <TabsContent value="crisis" className="space-y-6">
          <GlassPanel title="Crisis Response Protocol" description="15-minute crisis cycles, 100,000 queries/hour during active crisis with narrative attack intelligence">
            <div className="space-y-6">
              {/* Crisis Level Classification */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {crisisLevelClassification.map((level, idx) => (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`rounded-lg border p-4 text-center cursor-pointer transition-all ${
                      level.color === 'GREEN' ? 'border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20' :
                      level.color === 'YELLOW' ? 'border-yellow-500/50 bg-yellow-500/10 hover:bg-yellow-500/20' :
                      level.color === 'ORANGE' ? 'border-orange-500/50 bg-orange-500/10 hover:bg-orange-500/20' :
                      level.color === 'RED' ? 'border-red-500/50 bg-red-500/10 hover:bg-red-500/20' :
                      'border-slate-500/50 bg-slate-500/10 hover:bg-slate-500/20'
                    }`}
                  >
                    <div className={`text-2xl font-bold ${
                      level.color === 'GREEN' ? 'text-emerald-400' :
                      level.color === 'YELLOW' ? 'text-yellow-400' :
                      level.color === 'ORANGE' ? 'text-orange-400' :
                      level.color === 'RED' ? 'text-red-400' :
                      'text-slate-400'
                    }`}>{level.level}</div>
                    <div className="text-xs font-semibold mt-1">{level.color}</div>
                    <div className="text-xs text-slate-400 mt-1">{level.triggerCriteria}</div>
                    <div className="text-xs text-slate-500 mt-1">{level.queryFrequency}</div>
                  </motion.div>
                ))}
              </div>

              {/* Crisis Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard title="Crisis Query Volume" value={crisisStatistics.crisisQueryVolumePerHour.toLocaleString()} unit="/hour" icon={<Zap className="h-6 w-6" />} gradient="gold" />
                <MetricCard title="Social Crises (1hr)" value={`${crisisStatistics.socialMediaCrisesGlobalOneHour}%`} icon={<Globe className="h-6 w-6" />} gradient="rose" />
                <MetricCard title="Formal Crisis Plans" value={`${crisisStatistics.organizationsWithFormalCrisisPlan}%`} icon={<Shield className="h-6 w-6" />} gradient="emerald" />
                <MetricCard title="Consumer Impact" value={`${crisisStatistics.consumersAvoidingBrand}%`} icon={<TrendingDown className="h-6 w-6" />} gradient="navy" />
              </div>

              {/* Crisis Query Phases */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Radar className="h-5 w-5 text-gold" />
                    Crisis Query Phases
                  </CardTitle>
                  <CardDescription>4-phase crisis response with ~100,000 queries per hour during active crisis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {crisisQueryPhases.map((phase, idx) => (
                      <motion.div
                        key={phase.phase}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15 }}
                        whileHover={{ scale: 1.02, borderColor: 'rgba(251, 191, 36, 0.5)' }}
                        className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-all cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className={`text-sm font-bold px-2 py-1 rounded ${
                            idx === 0 ? 'bg-gold/20 text-gold' :
                            idx === 1 ? 'bg-emerald/20 text-emerald' :
                            idx === 2 ? 'bg-navy/20 text-navy' : 'bg-rose/20 text-rose'
                          }`}>
                            Phase {phase.phase}
                          </div>
                          <div className="text-xs text-slate-400">{phase.duration}</div>
                        </div>
                        <h4 className="font-semibold text-slate-200 mb-2">{phase.name}</h4>
                        <div className="text-lg font-bold text-gold">{phase.queryCount.toLocaleString()}</div>
                        <div className="text-xs text-slate-400">queries</div>
                        <div className="mt-2 space-y-1">
                          {phase.focus.slice(0, 3).map((f, i) => (
                            <p key={i} className="text-xs text-slate-400 flex items-center gap-1">
                              <CheckCircle className="h-3 w-3 text-emerald" />
                              {f}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Crisis Phases & Lessons */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Activity className="h-5 w-5 text-rose" />
                      Disaster Reaction Phases
                    </CardTitle>
                    <CardDescription>Psychological response timeline following crisis events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {crisisPhases.map((phase, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ x: 5 }}
                            className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 hover:bg-slate-800/50 transition-all cursor-pointer"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-slate-200 text-sm">{phase.phase}</h4>
                              <Badge variant="outline" className="text-xs text-slate-400">{phase.timeline}</Badge>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {phase.reactions.slice(0, 4).map((r, i) => (
                                <span key={i} className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-300">{r}</span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-yellow" />
                      Crisis Management Lessons 2025
                    </CardTitle>
                    <CardDescription>7 key lessons from crisis management in 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {crisisManagementLessons.map((lesson) => (
                          <motion.div
                            key={lesson.id}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ x: 5 }}
                            className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 hover:bg-slate-800/50 transition-all cursor-pointer"
                          >
                            <h4 className="font-semibold text-slate-200 text-sm mb-1">{lesson.title}</h4>
                            <p className="text-xs text-slate-400 mb-2">{lesson.description}</p>
                            <div className="space-y-1">
                              {lesson.keyPoints.slice(0, 2).map((point, i) => (
                                <p key={i} className="text-xs text-slate-500 flex items-start gap-1">
                                  <CheckCircle className="h-3 w-3 text-emerald mt-0.5 flex-shrink-0" />
                                  {point}
                                </p>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* OSINT Tools & Narrative Attack Cases */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Fingerprint className="h-5 w-5 text-emerald" />
                      OSINT Tools
                    </CardTitle>
                    <CardDescription>10 key tools for threat monitoring and analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {osintTools.slice(0, 8).map((tool, idx) => (
                          <motion.div
                            key={tool.name}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ x: 5 }}
                            className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 hover:bg-slate-800/50 transition-all cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-slate-200 text-sm">{tool.name}</h4>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">{tool.capabilities}</p>
                            <p className="text-xs text-emerald-400 mt-1">{tool.coverage}</p>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="h-5 w-5 text-rose" />
                      Narrative Attack Cases
                    </CardTitle>
                    <CardDescription>Major coordinated narrative attacks tracked in 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {narrativeAttackCases.slice(0, 6).map((attack, idx) => (
                          <motion.div
                            key={attack.name}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.01 }}
                            className="rounded-lg border border-rose-500/30 bg-rose-500/5 p-3 hover:bg-rose-500/10 transition-all cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-slate-200 text-sm">{attack.name}</h4>
                              {attack.metrics.anomalyRate && (
                                <Badge variant="destructive" className="text-xs">{attack.metrics.anomalyRate}% anomaly</Badge>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 mt-1 line-clamp-2">{attack.description}</p>
                            {attack.coordinationPatterns[0] && (
                              <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                                <AlertCircle className="h-3 w-3" />
                                {attack.coordinationPatterns[0]}
                              </p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-gold" />
                    Crisis Response Statistics
                  </CardTitle>
                  <CardDescription>Key metrics from crisis monitoring and response systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 text-center hover:bg-slate-800/50 transition-all"
                    >
                      <div className="text-2xl font-bold text-rose-400">${narrativeAttackStatistics.annualCostPerceptionManipulation}B</div>
                      <div className="text-xs text-slate-400 mt-1">Annual Cost of Perception Manipulation</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 text-center hover:bg-slate-800/50 transition-all"
                    >
                      <div className="text-2xl font-bold text-rose-400">${narrativeAttackStatistics.publicCompanyLossesNarrativeAttacks}B</div>
                      <div className="text-xs text-slate-400 mt-1">Public Company Losses</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 text-center hover:bg-slate-800/50 transition-all"
                    >
                      <div className="text-2xl font-bold text-emerald-400">{narrativeAttackStatistics.deepfakeVideoGrowth}</div>
                      <div className="text-xs text-slate-400 mt-1">Deepfake Video Growth 2019-2023</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 text-center hover:bg-slate-800/50 transition-all"
                    >
                      <div className="text-2xl font-bold text-yellow-400">{narrativeAttackStatistics.botActivityTwitter}</div>
                      <div className="text-xs text-slate-400 mt-1">Twitter Bot Activity</div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment by Topic */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald" />
                    Sentiment Analysis by Topic
                  </CardTitle>
                  <CardDescription>Crisis response sentiment across key topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {crisisSentimentByTopic.slice(0, 9).map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className={`rounded-lg border p-3 text-center cursor-pointer transition-all ${
                          item.sentiment === 'Positive' || item.sentiment === 'Very Positive' ? 'border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10' :
                          item.sentiment === 'Negative' || item.sentiment === 'Very Negative' ? 'border-rose-500/30 bg-rose-500/5 hover:bg-rose-500/10' :
                          item.sentiment === 'Cautionary' ? 'border-yellow-500/30 bg-yellow-500/5 hover:bg-yellow-500/10' :
                          'border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50'
                        }`}
                      >
                        <h4 className="font-semibold text-slate-200 text-xs mb-1">{item.topic}</h4>
                        <div className={`text-xs font-medium ${
                          item.sentiment === 'Positive' || item.sentiment === 'Very Positive' ? 'text-emerald-400' :
                          item.sentiment === 'Negative' || item.sentiment === 'Very Negative' ? 'text-rose-400' :
                          item.sentiment === 'Cautionary' ? 'text-yellow-400' :
                          'text-slate-400'
                        }`}>{item.sentiment}</div>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.keyFinding}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Source Citations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="h-5 w-5 text-gold" />
                    Source Citations ({sourceCitations.length} sources)
                  </CardTitle>
                  <CardDescription>Tiered source classification for crisis response intelligence</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {sourceCitations.slice(0, 8).map((cite, idx) => (
                        <motion.div
                          key={cite.number}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ y: -3 }}
                          className={`rounded-lg border p-2 text-xs cursor-pointer transition-all ${
                            cite.tier === 0 ? 'border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20' :
                            cite.tier === 1 ? 'border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20' :
                            cite.tier === 2 ? 'border-yellow-500/50 bg-yellow-500/10 hover:bg-yellow-500/20' :
                            'border-slate-500/50 bg-slate-500/10 hover:bg-slate-500/20'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-200">T{cite.tier}</span>
                            <Badge variant="outline" className={`text-xs ${
                              cite.uaeRelevance === 'Critical' ? 'text-emerald-400 border-emerald-500/50' :
                              cite.uaeRelevance === 'High' ? 'text-yellow-400 border-yellow-500/50' :
                              'text-slate-400 border-slate-500/50'
                            }`}>{cite.uaeRelevance}</Badge>
                          </div>
                          <p className="text-slate-300 mt-1 line-clamp-1">{cite.source}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Real-Time Monitoring Overview" description="24/7 surveillance of UAE digital assets">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Threat Type Distribution</CardTitle>
                    <CardDescription>Daily attack vectors by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={threatDistributionData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Attack Origins</CardTitle>
                    <CardDescription>Geographic distribution of threat sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={attackOriginData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Hourly Attack Pattern</CardTitle>
                  <CardDescription>Attack volume and severity by hour (UTC)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={hourlyAttackData}
                    xAxisKey="hour"
                    bars={[
                      { dataKey: 'attacks', name: 'Attacks', color: CHART_COLORS.gold },
                      { dataKey: 'severity', name: 'Severity Score', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Defense Coverage</CardTitle>
                  <CardDescription>Protection status across UAE digital infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Government Networks</span>
                        <span className="font-medium text-emerald-400">98.7% Protected</span>
                      </div>
                      <Progress value={98.7} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Financial Sector</span>
                        <span className="font-medium text-emerald-400">99.2% Protected</span>
                      </div>
                      <Progress value={99.2} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Critical Infrastructure</span>
                        <span className="font-medium text-emerald-400">97.8% Protected</span>
                      </div>
                      <Progress value={97.8} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Telecommunications</span>
                        <span className="font-medium text-emerald-400">98.4% Protected</span>
                      </div>
                      <Progress value={98.4} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Daily Monitoring Tab - MD 12-1 */}
        <TabsContent value="daily" className="space-y-6">
          <GlassPanel title="Daily Monitoring Overview" description="4-hour cycle monitoring across Arabic, English, and Asian language media with tiered source classification">
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard title="Daily Queries" value="300,000" icon={<Zap className="h-6 w-6" />} gradient="gold" />
                <MetricCard title="WAM Languages" value={wamData.languagesSupported} icon={<Globe className="h-6 w-6" />} gradient="emerald" />
                <MetricCard title="Media Free Zones" value={mediaFreeZones.length} icon={<Building2 className="h-6 w-6" />} gradient="navy" />
                <MetricCard title="Crisis Categories" value={crisisDetectionCategories.length} icon={<AlertOctagon className="h-6 w-6" />} gradient="rose" />
              </div>

              {/* Monitoring Phases */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gold" />
                    4-Hour Monitoring Cycle
                  </CardTitle>
                  <CardDescription>Phased approach for comprehensive coverage</CardDescription>
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
                        className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors cursor-pointer"
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
                        <h4 className="font-semibold text-slate-200 mb-2">{phase.name}</h4>
                        <div className="space-y-1">
                          {phase.activities.map((activity, i) => (
                            <p key={i} className="text-xs text-slate-400 flex items-center gap-1">
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

              {/* WAM & Government Media */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Newspaper className="h-5 w-5 text-gold" />
                      WAM - Emirates News Agency
                    </CardTitle>
                    <CardDescription>Official state news service of UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                          <div className="text-2xl font-bold text-gold">{wamData.languagesSupported}</div>
                          <div className="text-xs text-slate-400">Languages</div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                          <div className="text-2xl font-bold text-emerald">100+</div>
                          <div className="text-xs text-slate-400">Countries</div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                          <div className="text-2xl font-bold text-navy">{wamData.established}</div>
                          <div className="text-xs text-slate-400">Established</div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                          <div className="text-2xl font-bold text-rose">Tier 0</div>
                          <div className="text-xs text-slate-400">Credibility</div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-gold/10 border border-gold/30">
                        <p className="text-sm text-slate-300">{wamData.officialName}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <UsersIcon className="h-5 w-5 text-emerald" />
                      UAE Leadership Figures
                    </CardTitle>
                    <CardDescription>Key leadership positions monitored</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[180px]">
                      <div className="space-y-2">
                        {leadershipFigures.slice(0, 7).map((leader, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center justify-between p-2 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Crown className="h-4 w-4 text-gold" />
                              <span className="text-xs text-slate-400">{leader.position}</span>
                            </div>
                            <span className="text-xs font-medium text-slate-200">{leader.figure.split(' ').slice(0, 4).join(' ')}</span>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* 1 Billion Followers Summit */}
              <Card className="glass-card border-gold/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-gold" />
                    1 Billion Followers Summit
                  </CardTitle>
                  <CardDescription>UAE-hosted major media event with 1.6B+ combined followers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4 lg:grid-cols-8">
                    {[
                      { label: 'Participants', value: '7,000' },
                      { label: 'Content Creators', value: '3,000+' },
                      { label: 'Combined Followers', value: '1.6B+' },
                      { label: 'Media Companies', value: '200' },
                      { label: 'CEO Attendees', value: '100' },
                      { label: 'Speakers', value: '190' },
                      { label: 'Panel Discussions', value: '25' },
                      { label: 'Total Events', value: '100+' },
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg border border-gold/30 bg-slate-800/30 p-3 text-center hover:bg-slate-800/50 transition-colors cursor-pointer"
                      >
                        <div className="text-lg font-bold text-gold">{stat.value}</div>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Platforms */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-rose" />
                    Social Media Monitoring
                  </CardTitle>
                  <CardDescription>Platform coverage for real-time sentiment and crisis early warning</CardDescription>
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
                        className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="h-8 w-8 rounded-full bg-rose/20 flex items-center justify-center">
                            <Radio className="h-4 w-4 text-rose" />
                          </div>
                          <h4 className="font-semibold text-slate-200">{platform.platform}</h4>
                        </div>
                        <div className="space-y-1">
                          {platform.capabilities.slice(0, 3).map((cap, i) => (
                            <p key={i} className="text-xs text-slate-400 flex items-center gap-1">
                              <CheckCircle className="h-3 w-3 text-emerald" />
                              {cap}
                            </p>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-slate-700/50">
                          <span className="text-xs text-slate-500">UAe Use Case: </span>
                          <span className="text-xs text-emerald">{platform.uaeUseCase}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Crisis Response Tiers */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
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
                        <div className="text-sm font-medium text-slate-200 mb-1">{tier.responseTime}</div>
                        <p className="text-xs text-slate-400">{tier.criteria}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-navy" />
                    Source Credibility Matrix
                  </CardTitle>
                  <CardDescription>Tiered classification for source reliability assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {sourceCredibilityMatrix.map((tier, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                            tier.tier === 'Tier 0' ? 'bg-gold/20 text-gold' :
                            tier.tier === 'Tier 1' ? 'bg-emerald/20 text-emerald' :
                            tier.tier === 'Tier 2' ? 'bg-navy/20 text-navy' :
                            tier.tier === 'Tier 3' ? 'bg-platinum/20 text-platinum' :
                            'bg-slate-600/20 text-slate-400'
                          }`}>
                            {tier.tier}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-slate-200">{tier.classification}</div>
                            <div className="text-xs text-slate-400">{tier.sources}</div>
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

              {/* Quantitative Metrics */}
              <Card className="glass-card border-gold/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-gold" />
                    Quantitative Metrics
                  </CardTitle>
                  <CardDescription>Key performance indicators from MD 12-1 source data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {quantitativeMetrics.slice(0, 12).map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.04 }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 hover:bg-slate-800/50 transition-colors cursor-pointer"
                      >
                        <div className="text-lg font-bold text-gold">{metric.value}</div>
                        <div className="text-xs text-slate-400">{metric.dataPoint}</div>
                        <div className="text-xs text-slate-500 mt-1">{metric.category}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Geopolitical Risk Framework */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-navy" />
                    Geopolitical Risk Framework
                  </CardTitle>
                  <CardDescription>Four-step monitoring process for global risk assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {geopoliticalRiskFramework.steps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/20 text-navy font-bold">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-200 mb-1">{step.name}</h4>
                          <p className="text-sm text-slate-400">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Dashboard KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald" />
                    UAE Media Infrastructure KPIs
                  </CardTitle>
                  <CardDescription>Current status of government media coverage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dashboardKpiTables.uaeMediaInfrastructure.map((kpi, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`h-2 w-2 rounded-full ${
                            kpi.status === 'Complete' ? 'bg-emerald' :
                            kpi.status === 'Active' ? 'bg-gold' :
                            kpi.status === 'On track' ? 'bg-navy' : 'bg-slate-500'
                          }`} />
                          <span className="text-sm font-medium text-slate-200">{kpi.kpi}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-slate-400">{kpi.currentValue}</span>
                          <Badge variant="outline" className={`text-xs ${
                            kpi.status === 'Complete' ? 'border-emerald/50 text-emerald' :
                            kpi.status === 'Active' ? 'border-gold/50 text-gold' :
                            kpi.status === 'On track' ? 'border-navy/50 text-navy' :
                            'border-slate-500/50 text-slate-400'
                          }`}>
                            {kpi.status}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Threat Analysis Tab */}
        <TabsContent value="threats" className="space-y-6">
          <GlassPanel title="Threat Analysis" description="In-depth analysis of active threat actors and campaigns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sector Targeting Analysis</CardTitle>
                  <CardDescription>Most targeted sectors in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sectorTargetingData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Attack Percentage', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Threat Actors</CardTitle>
                    <CardDescription>Most active threat groups targeting UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {[
                          { name: 'APT-41', country: 'China', incidents: 47, severity: 'Critical' },
                          { name: 'Lazarus Group', country: 'North Korea', incidents: 34, severity: 'High' },
                          { name: 'Fancy Bear', country: 'Russia', incidents: 28, severity: 'High' },
                          { name: 'Sandworm', country: 'Russia', incidents: 21, severity: 'Critical' },
                          { name: 'OilRig', country: 'Iran', incidents: 18, severity: 'Medium' },
                        ].map((actor, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Target className="h-4 w-4 text-rose" />
                              <div>
                                <p className="text-sm font-medium text-slate-200">{actor.name}</p>
                                <p className="text-xs text-slate-400">{actor.country}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-bold text-rose">{actor.incidents}</span>
                              <Badge variant="destructive" className="text-xs">{actor.severity}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Attack Vector Effectiveness</CardTitle>
                    <CardDescription>Success rate by attack method</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {threatDistributionData.map((threat, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{threat.name}</span>
                            <span className="text-sm font-bold text-emerald-400">
                              {Math.floor(Math.random() * 15) + 85}%
                            </span>
                          </div>
                          <Progress
                            value={Math.floor(Math.random() * 15) + 85}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sector Tracking Tab */}
        <TabsContent value="sectors" className="space-y-6">
          <GlassPanel title="Sector Tracking" description="Per-sector threat monitoring and protection status">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Protected Sectors Overview</CardTitle>
                  <CardDescription>Security status across all UAE critical sectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {[
                        { sector: 'Financial Services', protection: 99.2, attacks: 12847, status: 'Protected' },
                        { sector: 'Government Entities', protection: 98.7, attacks: 8342, status: 'Protected' },
                        { sector: 'Energy & Utilities', protection: 97.8, attacks: 6234, status: 'Protected' },
                        { sector: 'Telecommunications', protection: 98.4, attacks: 7234, status: 'Protected' },
                        { sector: 'Healthcare', protection: 96.2, attacks: 4123, status: 'Guarded' },
                        { sector: 'Transportation', protection: 97.1, attacks: 3421, status: 'Protected' },
                        { sector: 'Education', protection: 94.8, attacks: 2834, status: 'Guarded' },
                        { sector: 'Manufacturing', protection: 95.6, attacks: 2134, status: 'Guarded' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                              <Shield className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{item.sector}</p>
                              <p className="text-sm text-slate-400">{item.attacks.toLocaleString()} attacks today</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-emerald-400">{item.protection}%</div>
                              <p className="text-xs text-slate-400">Protection</p>
                            </div>
                            <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                              {item.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Live Feed Tab */}
        <TabsContent value="feed" className="space-y-6">
          <GlassPanel title="Live Threat Feed" description="Real-time threat intelligence stream">
            <div className="space-y-6">
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Active Threats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {recentThreats.map((threat) => (
                        <div key={threat.id} className="flex items-center justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                              <Target className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{threat.type}</p>
                              <p className="text-sm text-slate-400">Target: {threat.target}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              {getSeverityBadge(threat.severity)}
                              <p className="text-xs text-slate-400 mt-1">{threat.time}</p>
                            </div>
                            <div className="text-center">
                              {getStatusBadge(threat.status)}
                              <p className="text-xs text-slate-400 mt-1">Status</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Monitoring Statistics</CardTitle>
                  <CardDescription>Real-time monitoring system performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">99.97%</div>
                      <p className="text-sm text-slate-400">Uptime</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">&lt;50ms</div>
                      <p className="text-sm text-slate-400">Response Time</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-navy">2.3M</div>
                      <p className="text-sm text-slate-400">Events/sec</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-platinum">156</div>
                      <p className="text-sm text-slate-400">Sensors Active</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entity Investigation Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Entity Investigation Profiles" description="Deep-dive entity analysis using 50,000 queries per entity across 9 hours">
            <div className="space-y-6">
              {/* Entity Investigation Key Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {entityInvestigationMetrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`text-${metric.color}`}>{metric.icon}</div>
                      <span className="text-sm text-slate-400">{metric.label}</span>
                    </div>
                    <div className={`text-2xl font-bold text-${metric.color}`}>
                      {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Phase Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-gold" />
                    Three-Phase Investigation Process
                  </CardTitle>
                  <CardDescription>9-hour deep-dive with ~50,000 queries per entity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {entityPhaseData.map((phase, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15 }}
                        className="flex items-center gap-4 p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: `${phase.color}20` }}>
                          <span className="text-lg font-bold" style={{ color: phase.color }}>{idx + 1}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-slate-200">{phase.phase}: {phase.name}</span>
                            <Badge variant="outline" className="text-xs" style={{ borderColor: phase.color, color: phase.color }}>{phase.duration}</Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-sm text-slate-400">
                            <span>{phase.queries} queries</span>
                            <span>|</span>
                            <span>Output: {phase.output}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold" style={{ color: phase.color }}>{phase.queries}</div>
                          <div className="text-xs text-slate-400">queries</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* OSINT Tools */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Search className="h-5 w-5 text-rose" />
                      OSINT Investigation Tools
                    </CardTitle>
                    <CardDescription>500+ platform modules for account discovery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {entityInvestigationToolsData.map((tool, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{ x: 4 }}
                            className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: `${tool.color}20` }}>
                                <Target className="h-4 w-4" style={{ color: tool.color }} />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-slate-200">{tool.name}</p>
                                <p className="text-xs text-slate-400">{tool.useCase}</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-xs" style={{ borderColor: tool.color, color: tool.color }}>
                              {tool.cost.includes('Free') ? 'Free' : tool.cost.includes('$') ? tool.cost.split('/')[0] : 'Custom'}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Media Monitoring Platforms */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5 text-emerald" />
                      Media Monitoring Platforms
                    </CardTitle>
                    <CardDescription>150M+ sources across 30+ social networks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {mediaMonitoringData.map((platform, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{ x: 4 }}
                            className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: `${platform.color}20` }}>
                                <BarChart3 className="h-4 w-4" style={{ color: platform.color }} />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-slate-200">{platform.name}</p>
                                <p className="text-xs text-slate-400">{platform.coverage}</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-xs" style={{ borderColor: platform.color, color: platform.color }}>
                              {platform.cost.includes('Custom') ? 'Custom' : platform.cost}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Influence Scoring Model */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-gold" />
                      Multi-Factor Influence Scoring
                    </CardTitle>
                    <CardDescription>Weighted model for entity influence assessment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {influenceFactorsData.map((factor, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-300">{factor.name}</span>
                            <span className="font-bold" style={{ color: factor.color }}>{factor.weight}%</span>
                          </div>
                          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${factor.weight}%` }}
                              transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: factor.color }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <p className="text-xs text-slate-400">
                        <span className="font-semibold text-slate-300">Formula:</span> (0.25 × Reach) + (0.25 × Engagement) + (0.20 × Centrality) + (0.15 × Sentiment) + (0.10 × Activity) + (0.05 × Authority)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Network Centrality Algorithms */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Network className="h-5 w-5 text-navy" />
                      Network Centrality Algorithms
                    </CardTitle>
                    <CardDescription>Graph analysis for hidden connection detection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {centralityAlgorithmsData.map((algo, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-slate-200">{algo.name}</span>
                              <Badge variant="outline" className="text-xs" style={{ borderColor: algo.color, color: algo.color }}>{algo.complexity}</Badge>
                            </div>
                            <p className="text-xs text-slate-400">{algo.useCase}</p>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Arabic Name Variants */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Fingerprint className="h-5 w-5 text-gold" />
                      Arabic Name Transliteration
                    </CardTitle>
                    <CardDescription>59% of Arabic names require variant matching</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {arabicNameVariantsData.map((variant, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-300">{variant.variant}</span>
                            <span className="font-bold" style={{ color: variant.color }}>{variant.percentage}%</span>
                          </div>
                          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${variant.percentage}%` }}
                              transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: variant.color }}
                            />
                          </div>
                        </motion.div>
                      ))}
                      <div className="mt-4 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <p className="text-xs text-slate-400">
                          Source: Al-Kindi Publishers Study (112 names, 332 variants). DIN 31635 standard for transliteration.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sentiment Score Ranges */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Activity className="h-5 w-5 text-emerald" />
                      Entity Sentiment Ranges
                    </CardTitle>
                    <CardDescription>Sentiment classification thresholds for response protocols</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-2">
                        {sentimentRangesData.map((range, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-center justify-between p-2 rounded-lg border border-slate-700/50 bg-slate-800/30"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full" style={{ backgroundColor: `${range.color}20` }}>
                                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: range.color }} />
                              </div>
                              <div>
                                <span className="text-sm font-medium text-slate-200">{range.range}</span>
                                <span className="mx-2 text-slate-600">|</span>
                                <span className="text-sm" style={{ color: range.color }}>{range.status}</span>
                              </div>
                            </div>
                            <span className="text-xs text-slate-400">{range.action}</span>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* KPI Highlights */}
              <Card className="glass-card border-gold/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-gold" />
                    Entity Investigation KPIs
                  </CardTitle>
                  <CardDescription>Key performance indicators from MD source data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {kpiHighlightsData.map((kpi, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 text-center hover:bg-slate-800/50 transition-colors cursor-pointer"
                      >
                        <div className="text-xl font-bold text-gold">{kpi.value}</div>
                        <div className="text-xs text-slate-400 mt-1">{kpi.label}</div>
                        <div className="text-xs text-slate-500 mt-1">{kpi.source}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AML Risk Assessment */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose" />
                    AML Risk Assessment
                  </CardTitle>
                  <CardDescription>Anti-money laundering risk indicators and high-risk jurisdictions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-300">Key Risk Indicators</h4>
                      {amlRiskAssessment.keyRiskIndicators.map((kri, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-rose" />
                          {kri}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-300">High-Risk Jurisdictions</h4>
                      <div className="flex flex-wrap gap-2">
                        {amlRiskAssessment.highRiskJurisdictions.map((jurisdiction, idx) => (
                          <Badge key={idx} variant="destructive" className="text-xs bg-rose-500/20 text-rose-400 border-rose-500/50">
                            {jurisdiction}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <p className="text-xs text-slate-400">
                          <span className="font-semibold text-slate-300">SAR Thresholds:</span> Insider abuses: Any amount | Other: $25,000+
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Weekly Deep Dive Tab */}
        <TabsContent value="deepdive" className="space-y-6">
          <GlassPanel
            title="Weekly Deep Dive Analysis"
            description="5-phase weekly methodology with NMA stakeholder mapping, GMO frameworks, and AMEC evaluation"
          >
            <div className="space-y-6">
              {/* Execution Summary */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Sources Fetched"
                  value={25}
                  icon={<Database className="h-5 w-5" />}
                  gradient="gold"
                />
                <MetricCard
                  title="Data Points"
                  value={200}
                  icon={<BarChart3 className="h-5 w-5" />}
                  gradient="emerald"
                />
                <MetricCard
                  title="Frameworks"
                  value={15}
                  icon={<Network className="h-5 w-5" />}
                  gradient="navy"
                />
                <MetricCard
                  title="Entities"
                  value={3}
                  icon={<Fingerprint className="h-5 w-5" />}
                  gradient="rose"
                />
              </div>

              {/* 5-Phase Process */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-gold" />
                    5-Phase Weekly Analysis Process
                  </CardTitle>
                  <CardDescription>22 total hours structured analysis + preparation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyDeepDiveExtendedData.weeklyDeepDivePhases.map((phase, idx) => (
                      <motion.div
                        key={phase.phase}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                          <span className="text-lg font-bold text-gold">{phase.phase}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-slate-200">{phase.focus}</span>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                phase.priority === 'Critical' ? 'border-rose-500/50 text-rose' :
                                phase.priority === 'High' ? 'border-gold/50 text-gold' :
                                'border-emerald/50 text-emerald'
                              }`}
                            >
                              {phase.priority}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-1 text-sm text-slate-400">
                            <span>{phase.timeHours} hours</span>
                            <span>|</span>
                            <span>{phase.steps.length} steps</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gold">{phase.timeHours}h</div>
                          <div className="text-xs text-slate-400">Duration</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald" />
                    Source Credibility Matrix
                  </CardTitle>
                  <CardDescription>Tier 0-4 classification with 25 sources across critical/high/medium/low UAE relevance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {weeklyDeepDiveExtendedData.sourceCredibilityMatrix.slice(0, 12).map((source, idx) => (
                        <motion.div
                          key={source.source}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Badge
                              variant="outline"
                              className={`text-xs min-w-[60px] justify-center ${
                                source.tier === 0 ? 'border-emerald-500/50 text-emerald' :
                                source.tier === 1 ? 'border-gold/50 text-gold' :
                                source.tier === 2 ? 'border-navy/50 text-navy' :
                                source.tier === 3 ? 'border-rose/50 text-rose' :
                                'border-slate-500/50 text-slate-400'
                              }`}
                            >
                              Tier {source.tier}
                            </Badge>
                            <div>
                              <p className="text-sm font-medium text-slate-200">{source.source}</p>
                              <p className="text-xs text-slate-400">{source.dataQuality}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                source.uaeRelevance === 'critical' ? 'border-rose-500/50 text-rose' :
                                source.uaeRelevance === 'high' ? 'border-gold/50 text-gold' :
                                source.uaeRelevance === 'medium' ? 'border-navy/50 text-navy' :
                                'border-slate-500/50 text-slate-400'
                              }`}
                            >
                              {source.uaeRelevance}
                            </Badge>
                            <span className="text-sm font-bold text-emerald">{source.credibility}/10</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Stakeholder Ecosystem */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-gold" />
                    UAE Stakeholder Ecosystem
                  </CardTitle>
                  <CardDescription>Federal and local media authorities with Tier 0 credibility</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {weeklyDeepDiveExtendedData.stakeholderEcosystem.map((stakeholder, idx) => (
                      <motion.div
                        key={stakeholder.acronym}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                            <span className="text-sm font-bold text-gold">{stakeholder.acronym}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{stakeholder.name}</p>
                            <p className="text-xs text-slate-400">{stakeholder.jurisdiction} | {stakeholder.type}</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          {stakeholder.mandates.slice(0, 3).map((mandate, i) => (
                            <p key={i} className="text-xs text-slate-400 flex items-start gap-2">
                              <div className="h-1 w-1 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                              {mandate}
                            </p>
                          ))}
                          {stakeholder.mandates.length > 3 && (
                            <p className="text-xs text-gold">+{stakeholder.mandates.length - 3} more mandates</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Laws & Regulations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-navy" />
                    Key Laws & Regulations
                  </CardTitle>
                  <CardDescription>Federal media regulation framework with 19 IAM content categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {weeklyDeepDiveExtendedData.keyLawsRegulations.map((law, idx) => (
                      <motion.div
                        key={law.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-sm font-medium text-slate-200">{law.name}</p>
                            <p className="text-xs text-slate-500">{law.decreeNumber}</p>
                          </div>
                          {law.restrictedCategories && (
                            <Badge variant="outline" className="text-xs border-rose-500/50 text-rose">
                              {law.restrictedCategories} categories
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-slate-400">{law.purpose}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Media Monitoring Frameworks */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Network className="h-5 w-5 text-emerald" />
                    Media Monitoring Frameworks
                  </CardTitle>
                  <CardDescription>15+ frameworks including AMEC, Meltwater, Pulsar, Blackbird.AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {weeklyDeepDiveExtendedData.mediaMonitoringFrameworks.map((framework, idx) => (
                        <motion.div
                          key={framework.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.06 }}
                          whileHover={{ scale: 1.02 }}
                          className="p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                framework.tier === 1 ? 'border-gold/50 text-gold' : 'border-navy/50 text-navy'
                              }`}
                            >
                              Tier {framework.tier}
                            </Badge>
                            <span className="text-xs text-emerald">{framework.credibility}/10</span>
                          </div>
                          <p className="text-sm font-medium text-slate-200 mb-1">{framework.name}</p>
                          <p className="text-xs text-slate-400">{framework.organization}</p>
                          {framework.stages && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {framework.stages.map((stage, i) => (
                                <span key={i} className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-300">
                                  {stage}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Influencer Metrics */}
              <Card className="glass-card border-gold/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-gold" />
                    Influencer Marketing 2026 Metrics
                  </CardTitle>
                  <CardDescription>Key benchmarks from Modash survey (March 2026)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {weeklyDeepDiveExtendedData.influencerMetrics.slice(0, 8).map((metric, idx) => (
                      <motion.div
                        key={metric.metric}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 text-center hover:bg-slate-800/50 transition-colors cursor-pointer"
                      >
                        <div className="text-xl font-bold text-gold">{metric.value}</div>
                        <div className="text-xs text-slate-400 mt-1">{metric.metric}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Crisis Response KPIs */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose" />
                    Crisis Response KPIs
                  </CardTitle>
                  <CardDescription>Industry benchmarks: 53% expect response within 1 hour</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {weeklyDeepDiveExtendedData.crisisResponseKPIs.map((kpi, idx) => (
                      <motion.div
                        key={kpi.phase}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="border-rose-500/50 text-rose">
                            {kpi.phase}
                          </Badge>
                          <span className="text-sm text-slate-300">{kpi.kpi}</span>
                        </div>
                        <span className="text-sm font-bold text-emerald">{kpi.target}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <p className="text-xs text-slate-400">
                      <span className="font-semibold text-slate-300">AI Detection Advantage:</span> 30 minutes faster than traditional methods
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Network Centrality Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-navy" />
                    Network Centrality Metrics
                  </CardTitle>
                  <CardDescription>Graph analysis for influencer identification and network mapping</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {weeklyDeepDiveExtendedData.networkCentralityMetrics.map((metric, idx) => (
                      <motion.div
                        key={metric.metric}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <p className="text-sm font-medium text-slate-200">{metric.metric}</p>
                        <p className="text-xs text-slate-400 mt-1">{metric.description}</p>
                        <p className="text-xs text-navy mt-1 font-medium">Use: {metric.useCase}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FIBEP Events & NMA Establishment */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Globe2 className="h-5 w-5 text-emerald" />
                      FIBEP Events 2026
                    </CardTitle>
                    <CardDescription>World Media Intelligence events calendar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {weeklyDeepDiveExtendedData.fibepEvents2026.map((event, idx) => (
                        <motion.div
                          key={event.event}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <div>
                            <p className="text-sm font-medium text-slate-200">{event.event}</p>
                            <p className="text-xs text-slate-400">{event.location}</p>
                          </div>
                          <Badge variant="outline" className="text-xs border-emerald-500/50 text-emerald">
                            {event.date.split(',')[0]}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Crown className="h-5 w-5 text-gold" />
                      NMA Establishment
                    </CardTitle>
                    <CardDescription>National Media Authority formed December 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 rounded-lg bg-gold/10 border border-gold/30">
                        <p className="text-xs text-slate-400">Established</p>
                        <p className="text-lg font-bold text-gold">{weeklyDeepDiveExtendedData.nmaEstablishment.date}</p>
                        <p className="text-xs text-slate-400 mt-1">{weeklyDeepDiveExtendedData.nmaEstablishment.location}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-300 mb-2">Supersedes</p>
                        <div className="flex flex-wrap gap-2">
                          {weeklyDeepDiveExtendedData.nmaEstablishment.supersedes.map((item, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-slate-600 text-slate-300">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <p className="text-xs text-slate-400">WAM Established</p>
                        <p className="text-lg font-bold text-emerald">{weeklyDeepDiveExtendedData.nmaEstablishment.wamEstablished}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Global Benchmarks */}
              <Card className="glass-card border-navy/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-navy" />
                    Global Benchmarks
                  </CardTitle>
                  <CardDescription>Industry standards from research platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 text-center">
                      <div className="text-2xl font-bold text-navy">~5B</div>
                      <p className="text-xs text-slate-400 mt-1">Social Media Users</p>
                      <p className="text-xs text-slate-500 mt-1">PMC Research</p>
                    </div>
                    <div className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 text-center">
                      <div className="text-2xl font-bold text-rose">53%</div>
                      <p className="text-xs text-slate-400 mt-1">Expect Response in 1 Hour</p>
                      <p className="text-xs text-slate-500 mt-1">Consumer expectation</p>
                    </div>
                    <div className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 text-center">
                      <div className="text-2xl font-bold text-emerald">30min</div>
                      <p className="text-xs text-slate-400 mt-1">AI Detection Advantage</p>
                      <p className="text-xs text-slate-500 mt-1">Faster than traditional</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Gap Analysis Tab - MD 12-8 */}
        <TabsContent value="gapanalysis" className="space-y-6">
          <GlassPanel title="Gap Analysis Results" description="Comprehensive coverage gap analysis with 10 query areas, 20 source credibility matrix, and entity registry">
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Queries Executed"
                  value={gapAnalysisFullData.methodology.queriesExecuted}
                  icon={<Search className="h-6 w-6" />}
                  gradient="gold"
                />
                <MetricCard
                  title="URLs Successful"
                  value={gapAnalysisFullData.methodology.urlsSuccessful}
                  previousValue={gapAnalysisFullData.methodology.urlsTotal}
                  icon={<Globe className="h-6 w-6" />}
                  gradient="emerald"
                  formatter={(v) => `${v}/${gapAnalysisFullData.methodology.urlsTotal}`}
                />
                <MetricCard
                  title="Structured Tables"
                  value={gapAnalysisFullData.methodology.structuredTables}
                  icon={<Database className="h-6 w-6" />}
                  gradient="navy"
                />
                <MetricCard
                  title="Entity Entries"
                  value={gapAnalysisFullData.methodology.entityEntries}
                  icon={<Fingerprint className="h-6 w-6" />}
                  gradient="rose"
                />
              </div>

              {/* Query Areas */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-gold" />
                    Gap Analysis Query Areas
                  </CardTitle>
                  <CardDescription>10 coverage gap queries with UAE relevance assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {gapAnalysisFullData.queries.map((query, idx) => (
                        <motion.div
                          key={query.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.06 }}
                          className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20">
                            <span className="text-sm font-bold text-gold">{query.id}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{query.query}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className={`text-xs ${
                                query.uaeRelevance === 'Critical' ? 'border-rose-500/50 text-rose' :
                                query.uaeRelevance === 'High' ? 'border-gold/50 text-gold' :
                                'border-emerald/50 text-emerald'
                              }`}>
                                {query.uaeRelevance}
                              </Badge>
                              <Badge variant="outline" className="text-xs border-emerald-500/50 text-emerald">
                                {query.status}
                              </Badge>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald" />
                    Source Credibility Matrix
                  </CardTitle>
                  <CardDescription>20 sources with tier, type, and UAE relevance classification</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {gapAnalysisFullData.sourceCredibility.map((source, idx) => (
                        <motion.div
                          key={source.sourceUrl}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                        >
                          <Badge variant="outline" className={`text-xs min-w-[60px] justify-center ${
                            source.tier === 'TBD' ? 'border-slate-500/50 text-slate-400' :
                            source.tier === 'Tier 0' ? 'border-emerald-500/50 text-emerald' :
                            source.tier === 'Tier 1' ? 'border-gold/50 text-gold' :
                            source.tier === 'Tier 2' ? 'border-navy/50 text-navy' :
                            'border-rose/50 text-rose'
                          }`}>
                            {source.tier}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{source.sourceUrl}</p>
                            <p className="text-xs text-slate-400">{source.type}</p>
                          </div>
                          <Badge variant="outline" className={`text-xs ${
                            source.uaeRelevance === 'Critical' ? 'border-rose-500/50 text-rose' :
                            source.uaeRelevance === 'High' ? 'border-gold/50 text-gold' :
                            'border-emerald/50 text-emerald'
                          }`}>
                            {source.uaeRelevance}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Sentiment Analysis Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-rose" />
                    Sentiment Analysis Matrix
                  </CardTitle>
                  <CardDescription>8 topic areas with sentiment indicators and intensity levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {gapAnalysisFullData.sentimentMatrix.map((entry, idx) => (
                      <motion.div
                        key={entry.topic}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        whileHover={{ scale: 1.02 }}
                        className={`rounded-lg border p-4 ${
                          entry.intensity === 'Critical' ? 'border-rose-500/50 bg-rose/10' :
                          entry.intensity === 'High' ? 'border-gold/50 bg-gold/10' :
                          'border-slate-700/50 bg-slate-800/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-200">{entry.topic}</h4>
                          <Badge variant="outline" className={`text-xs ${
                            entry.intensity === 'Critical' ? 'border-rose-500/50 text-rose' :
                            entry.intensity === 'High' ? 'border-gold/50 text-gold' :
                            'border-emerald/50 text-emerald'
                          }`}>
                            {entry.intensity}
                          </Badge>
                        </div>
                        <p className="text-sm text-emerald mb-2">{entry.overallSentiment}</p>
                        <div className="space-y-1">
                          {entry.keyIndicators.map((ind, i) => (
                            <p key={i} className="text-xs text-slate-400 flex items-center gap-2">
                              <div className={`h-1.5 w-1.5 rounded-full ${
                                ind.intensity === 'High' ? 'bg-rose' :
                                ind.intensity === 'Medium' ? 'bg-gold' : 'bg-emerald'
                              }`} />
                              {ind.indicator}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE Relevance Assessment */}
              <Card className="glass-card border-gold/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Flag className="h-5 w-5 text-gold" />
                    UAE Relevance Assessment
                  </CardTitle>
                  <CardDescription>10 categories ranked by Critical/High/Medium/Low relevance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-2">
                      {gapAnalysisFullData.uaeRelevance.map((entry, idx) => (
                        <motion.div
                          key={entry.category}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.06 }}
                          className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <Badge variant="outline" className={`min-w-[80px] justify-center text-xs ${
                            entry.relevanceLevel === 'Critical' ? 'border-rose-500/50 text-rose' :
                            entry.relevanceLevel === 'High' ? 'border-gold/50 text-gold' :
                            entry.relevanceLevel === 'Medium' ? 'border-navy/50 text-navy' :
                            'border-slate-500/50 text-slate-400'
                          }`}>
                            {entry.relevanceLevel}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{entry.category}</p>
                            <p className="text-xs text-slate-400">{entry.rationale}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Gap Analysis Sections */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Layers className="h-5 w-5 text-navy" />
                    Gap Analysis Sections
                  </CardTitle>
                  <CardDescription>10 coverage areas with key findings and regulatory changes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {gapAnalysisFullData.sections.slice(0, 5).map((section, idx) => (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/20">
                            <span className="text-sm font-bold text-navy">{idx + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-200 mb-1">{section.title}</h4>
                            <div className="flex flex-wrap gap-2">
                              {section.keyFindings.slice(0, 2).map((finding, i) => (
                                <p key={i} className="text-xs text-slate-400 flex items-start gap-1">
                                  <div className="h-1 w-1 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                                  {finding.substring(0, 100)}...
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                        {section.regulatoryChanges && section.regulatoryChanges.length > 0 && (
                          <div className="ml-11 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                            <p className="text-xs font-semibold text-gold mb-2">Regulatory Changes</p>
                            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                              {section.regulatoryChanges.slice(0, 3).map((reg, i) => (
                                <div key={i} className="text-xs">
                                  <p className="font-medium text-slate-300">{reg.regulation}</p>
                                  <p className="text-slate-500">{reg.keyChange}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Entity Registry */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-gold" />
                    Entity Registry
                  </CardTitle>
                  <CardDescription>Organizations, key individuals, and laws/decrees</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="organizations" className="space-y-4">
                    <TabsList className="glass-panel">
                      <TabsTrigger value="organizations">Organizations ({gapAnalysisFullData.entityRegistry.organizations.length})</TabsTrigger>
                      <TabsTrigger value="individuals">Key Individuals ({gapAnalysisFullData.entityRegistry.keyIndividuals.length})</TabsTrigger>
                      <TabsTrigger value="laws">Laws & Decrees ({gapAnalysisFullData.entityRegistry.lawsDecrees.length})</TabsTrigger>
                    </TabsList>

                    <TabsContent value="organizations">
                      <ScrollArea className="h-[250px]">
                        <div className="space-y-2">
                          {gapAnalysisFullData.entityRegistry.organizations.map((org, idx) => (
                            <motion.div
                              key={org.entity}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/30 hover:bg-slate-800/50"
                            >
                              <Badge variant="outline" className={`text-xs ${
                                org.uaeRelevance === 'Critical' ? 'border-rose-500/50 text-rose' :
                                org.uaeRelevance === 'High' ? 'border-gold/50 text-gold' :
                                'border-emerald/50 text-emerald'
                              }`}>
                                {org.uaeRelevance}
                              </Badge>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-slate-200">{org.entity}</p>
                                <p className="text-xs text-slate-500">{org.role}</p>
                              </div>
                              <Badge variant="outline" className="text-xs text-slate-400">{org.type}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>

                    <TabsContent value="individuals">
                      <ScrollArea className="h-[250px]">
                        <div className="space-y-2">
                          {gapAnalysisFullData.entityRegistry.keyIndividuals.map((person, idx) => (
                            <motion.div
                              key={person.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/30 hover:bg-slate-800/50"
                            >
                              <Users className="h-4 w-4 text-gold" />
                              <div className="flex-1">
                                <p className="text-sm font-medium text-slate-200">{person.name}</p>
                                <p className="text-xs text-slate-400">{person.organization} - {person.role}</p>
                              </div>
                              <Badge variant="outline" className="text-xs text-emerald">{person.context}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>

                    <TabsContent value="laws">
                      <ScrollArea className="h-[250px]">
                        <div className="space-y-2">
                          {gapAnalysisFullData.entityRegistry.lawsDecrees.map((law, idx) => (
                            <motion.div
                              key={law.law}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/30 hover:bg-slate-800/50"
                            >
                              <Scale className="h-4 w-4 text-navy" />
                              <div className="flex-1">
                                <p className="text-sm font-medium text-slate-200">{law.law}</p>
                                <p className="text-xs text-slate-400">{law.provision}</p>
                              </div>
                              <Badge variant="outline" className="text-xs text-slate-400">{law.date}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Thematic Summary */}
              <Card className="glass-card border-gold/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Layers className="h-5 w-5 text-gold" />
                    Thematic Summary
                  </CardTitle>
                  <CardDescription>8 cross-cutting themes with UAE relevance and sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {gapAnalysisFullData.thematicSummary.map((theme, idx) => (
                      <motion.div
                        key={theme.theme}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.06 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 hover:bg-slate-800/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className={`text-xs ${
                            theme.uaeRelevance === 'Critical' ? 'border-rose-500/50 text-rose' :
                            theme.uaeRelevance === 'High' ? 'border-gold/50 text-gold' :
                            'border-emerald/50 text-emerald'
                          }`}>
                            {theme.uaeRelevance}
                          </Badge>
                          <Badge variant="outline" className={`text-xs ${
                            theme.sentiment === 'Negative' ? 'border-rose-500/50 text-rose' :
                            theme.sentiment === 'Positive' ? 'border-emerald-500/50 text-emerald' :
                            'border-navy/50 text-navy'
                          }`}>
                            {theme.sentiment}
                          </Badge>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-200 mb-1">{theme.theme}</h4>
                        <p className="text-xs text-slate-400">{theme.finding}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Dashboard KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-emerald" />
                    Dashboard KPIs
                  </CardTitle>
                  <CardDescription>Economic, regulatory, digital, and demographic indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="economic" className="space-y-4">
                    <TabsList className="glass-panel">
                      <TabsTrigger value="economic">Economic</TabsTrigger>
                      <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
                      <TabsTrigger value="digital">Digital</TabsTrigger>
                      <TabsTrigger value="demographics">Demographics</TabsTrigger>
                    </TabsList>

                    <TabsContent value="economic">
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {gapAnalysisFullData.dashboardKPIs.economic.map((kpi, idx) => (
                          <motion.div
                            key={kpi.kpi}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.06 }}
                            className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
                          >
                            <div className="text-lg font-bold text-gold">{kpi.currentValue}</div>
                            <p className="text-sm font-medium text-slate-200">{kpi.kpi}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className={`text-xs ${
                                kpi.trend === 'Declining' ? 'border-rose-500/50 text-rose' :
                                kpi.trend === 'Growing' ? 'border-emerald-500/50 text-emerald' :
                                'border-slate-500/50 text-slate-400'
                              }`}>
                                {kpi.trend}
                              </Badge>
                              <span className="text-xs text-slate-500">{kpi.source}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="regulatory">
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {gapAnalysisFullData.dashboardKPIs.regulatory.map((kpi, idx) => (
                          <motion.div
                            key={kpi.kpi}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.06 }}
                            className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
                          >
                            <div className="text-lg font-bold text-rose">{kpi.value}</div>
                            <p className="text-sm font-medium text-slate-200">{kpi.kpi}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs text-emerald">{kpi.change}</Badge>
                              <span className="text-xs text-slate-500">{kpi.source}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="digital">
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {gapAnalysisFullData.dashboardKPIs.digital.map((kpi, idx) => (
                          <motion.div
                            key={kpi.kpi}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.06 }}
                            className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
                          >
                            <div className="text-lg font-bold text-emerald">{kpi.value}</div>
                            <p className="text-sm font-medium text-slate-200">{kpi.kpi}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-slate-400">{kpi.context}</span>
                              <span className="text-xs text-slate-500">| {kpi.source}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="demographics">
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {gapAnalysisFullData.dashboardKPIs.demographics.map((kpi, idx) => (
                          <motion.div
                            key={kpi.kpi}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.06 }}
                            className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
                          >
                            <div className="text-lg font-bold text-navy">{kpi.value}</div>
                            <p className="text-sm font-medium text-slate-200">{kpi.kpi}</p>
                            <span className="text-xs text-slate-500">{kpi.source}</span>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* URL Summary */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-rose" />
                    URL Content Summary
                  </CardTitle>
                  <CardDescription>29 successful fetches with key content extracts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {gapAnalysisFullData.urlSummary.slice(0, 15).map((url, idx) => (
                        <motion.div
                          key={url.url}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className="flex items-start gap-3 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                        >
                          <Globe className="h-4 w-4 text-rose mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{url.url}</p>
                            <p className="text-xs text-emerald mt-1">{url.contentSummary}</p>
                            <p className="text-xs text-slate-400 mt-1">{url.keyExtracts}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Competitive Intelligence Tab - MD 12-6 */}
        <TabsContent value="competitive" className="space-y-6">
          <GlassPanel title="Competitive Intelligence Analysis - MD 12-6" description="Comprehensive UAE vs. competitor analysis across 14 nation-state pairs, 20+ competitive dimensions">
            <div className="space-y-6">
              {/* Cycle A: UAE Key Rankings */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Card className="glass-card border-gold/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-gold" />
                      Cycle A: UAE Global Rankings (2025-2026)
                    </CardTitle>
                    <CardDescription>Key performance indices across financial, safety, entrepreneurship, and soft power metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-gold/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                            <Building2 className="h-5 w-5 text-gold" />
                          </div>
                          <span className="text-sm text-slate-400">GFCI Ranking</span>
                        </div>
                        <div className="text-3xl font-bold text-gold">#{uaeRankings.gfci.rank}</div>
                        <div className="text-xs text-slate-400 mt-1">{uaeRankings.gfci.source} - {uaeRankings.gfci.notes}</div>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-emerald/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20">
                            <Shield className="h-5 w-5 text-emerald" />
                          </div>
                          <span className="text-sm text-slate-400">Safety Index</span>
                        </div>
                        <div className="text-3xl font-bold text-emerald">#{uaeRankings.safetyIndex.rank}</div>
                        <div className="text-xs text-slate-400 mt-1">Score: {uaeRankings.safetyIndex.score} | {uaeRankings.safetyIndex.notes}</div>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-gold/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                            <Gem className="h-5 w-5 text-gold" />
                          </div>
                          <span className="text-sm text-slate-400">Entrepreneurship</span>
                        </div>
                        <div className="text-3xl font-bold text-gold">#{uaeRankings.entrepreneurship.rank}</div>
                        <div className="text-xs text-slate-400 mt-1">{uaeRankings.entrepreneurship.source} - {uaeRankings.entrepreneurship.notes}</div>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-navy/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20">
                            <BarChart3 className="h-5 w-5 text-navy" />
                          </div>
                          <span className="text-sm text-slate-400">Competitiveness</span>
                        </div>
                        <div className="text-3xl font-bold text-navy">#{uaeRankings.competitiveness.rank}</div>
                        <div className="text-xs text-slate-400 mt-1">{uaeRankings.competitiveness.source} - {uaeRankings.competitiveness.notes}</div>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-gold/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                            <Globe2 className="h-5 w-5 text-gold" />
                          </div>
                          <span className="text-sm text-slate-400">Soft Power</span>
                        </div>
                        <div className="text-3xl font-bold text-gold">#{uaeRankings.softPower.rank}</div>
                        <div className="text-xs text-slate-400 mt-1">{uaeRankings.softPower.source} - {uaeRankings.softPower.notes}</div>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-rose/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20">
                            <TargetIcon className="h-5 w-5 text-rose" />
                          </div>
                          <span className="text-sm text-slate-400">Innovation Index</span>
                        </div>
                        <div className="text-3xl font-bold text-rose">#{uaeRankings.innovationIndex.rank}</div>
                        <div className="text-xs text-slate-400 mt-1">{uaeRankings.innovationIndex.source} ({uaeRankings.innovationIndex.notes})</div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cycle B: UAE vs Saudi Arabia */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card className="glass-card border-rose/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Scale className="h-5 w-5 text-rose" />
                      Cycle B: UAE vs Saudi Arabia Comparison
                    </CardTitle>
                    <CardDescription>Critical competitor - regional rivalry across economic, demographic, and strategic dimensions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                          <Users className="h-4 w-4" /> Demographics (georank.org)
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3">
                            <div className="text-xs text-slate-400">UAE Population</div>
                            <div className="text-lg font-bold text-gold">{uaeSaudiDemographics.uae.population.toLocaleString()}</div>
                          </div>
                          <div className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3">
                            <div className="text-xs text-slate-400">Saudi Population</div>
                            <div className="text-lg font-bold text-rose">{uaeSaudiDemographics.saudi.population.toLocaleString()}</div>
                          </div>
                          <div className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3">
                            <div className="text-xs text-slate-400">UAE GDP/capita</div>
                            <div className="text-lg font-bold text-emerald">${uaeSaudiDemographics.uae.gdpPerCapita.toLocaleString()}</div>
                          </div>
                          <div className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3">
                            <div className="text-xs text-slate-400">Saudi GDP/capita</div>
                            <div className="text-lg font-bold text-platinum">${uaeSaudiDemographics.saudi.gdpPerCapita.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="text-xs text-slate-400 p-2 rounded bg-slate-800/50">
                          <span className="text-emerald font-medium">UAE wins:</span> GDP per capita {uaeSaudiDemographics.variance.gdpPerCapita} | Population density {uaeSaudiDemographics.variance.density}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                          <DollarSign className="h-4 w-4" /> Economics
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 rounded bg-slate-800/30">
                            <span className="text-sm text-slate-400">Corporate Tax</span>
                            <div className="flex gap-2">
                              <Badge className="bg-emerald/20 text-emerald border-emerald/50">UAE 9%</Badge>
                              <Badge className="bg-rose/20 text-rose border-rose/50">SA 20%</Badge>
                            </div>
                          </div>
                          <div className="flex justify-between items-center p-2 rounded bg-slate-800/30">
                            <span className="text-sm text-slate-400">VAT Rate</span>
                            <div className="flex gap-2">
                              <Badge className="bg-emerald/20 text-emerald border-emerald/50">UAE 5%</Badge>
                              <Badge className="bg-rose/20 text-rose border-rose/50">SA 15%</Badge>
                            </div>
                          </div>
                          <div className="flex justify-between items-center p-2 rounded bg-slate-800/30">
                            <span className="text-sm text-slate-400">Non-Oil GDP</span>
                            <div className="flex gap-2">
                              <Badge className="bg-emerald/20 text-emerald border-emerald/50">UAE 73%</Badge>
                              <Badge className="bg-gold/20 text-gold border-gold/50">SA 76%</Badge>
                            </div>
                          </div>
                          <div className="flex justify-between items-center p-2 rounded bg-slate-800/30">
                            <span className="text-sm text-slate-400">Current Account</span>
                            <div className="flex gap-2">
                              <Badge className="bg-emerald/20 text-emerald border-emerald/50">UAE +$80B</Badge>
                              <Badge className="bg-rose/20 text-rose border-rose/50">SA -$16B</Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 lg:col-span-2">
                        <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                          <Flag className="h-4 w-4" /> Saudi Vision 2030 Progress (vision2030.ai)
                        </h4>
                        <div className="grid gap-3 sm:grid-cols-4">
                          <div className="rounded-lg border border-gold/30 bg-slate-800/30 p-3 text-center">
                            <div className="text-xl font-bold text-gold">{saudiVision2030.nonOilGdpShare.value}</div>
                            <div className="text-xs text-slate-400">Non-Oil GDP</div>
                            <div className="text-xs text-emerald mt-1">{saudiVision2030.nonOilGdpShare.change}</div>
                          </div>
                          <div className="rounded-lg border border-emerald/30 bg-slate-800/30 p-3 text-center">
                            <div className="text-xl font-bold text-emerald">{saudiVision2030.unemployment.value}</div>
                            <div className="text-xs text-slate-400">Unemployment</div>
                            <div className="text-xs text-emerald mt-1">{saudiVision2030.unemployment.change}</div>
                          </div>
                          <div className="rounded-lg border border-gold/30 bg-slate-800/30 p-3 text-center">
                            <div className="text-xl font-bold text-gold">{saudiVision2030.pifAum.value}</div>
                            <div className="text-xs text-slate-400">PIF AUM</div>
                            <div className="text-xs text-emerald mt-1">{saudiVision2030.pifAum.change}</div>
                          </div>
                          <div className="rounded-lg border border-navy/30 bg-slate-800/30 p-3 text-center">
                            <div className="text-xl font-bold text-navy">{saudiVision2030.creditRating.moodys}/{saudiVision2030.creditRating.fitch}</div>
                            <div className="text-xs text-slate-400">Credit Rating</div>
                            <div className="text-xs text-emerald mt-1">{saudiVision2030.creditRating.status}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cycle C: UAE vs Singapore & Airlines */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Card className="glass-card border-gold/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Plane className="h-5 w-5 text-gold" />
                      Cycle C: UAE vs Singapore & Aviation Rivals
                    </CardTitle>
                    <CardDescription>Financial hub competition and aviation excellence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                          <Building2 className="h-4 w-4" /> Dubai vs Singapore
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 rounded bg-slate-800/30">
                            <span className="text-sm text-slate-400">GFCI Ranking</span>
                            <div className="flex gap-2">
                              <Badge className="bg-gold/20 text-gold border-gold/50">Dubai {uaeSingaporeComparison.gfci.dubai}</Badge>
                              <Badge className="bg-navy/20 text-navy border-navy/50">Singapore {uaeSingaporeComparison.gfci.singapore}</Badge>
                            </div>
                          </div>
                          <div className="flex justify-between items-center p-2 rounded bg-slate-800/30">
                            <span className="text-sm text-slate-400">Corporate Tax</span>
                            <div className="flex gap-2">
                              <Badge className="bg-emerald/20 text-emerald border-emerald/50">Dubai 9%</Badge>
                              <Badge className="bg-rose/20 text-rose border-rose/50">SG 17%</Badge>
                            </div>
                          </div>
                          <div className="flex justify-between items-center p-2 rounded bg-slate-800/30">
                            <span className="text-sm text-slate-400">VAT/GST</span>
                            <div className="flex gap-2">
                              <Badge className="bg-emerald/20 text-emerald border-emerald/50">Dubai 5%</Badge>
                              <Badge className="bg-rose/20 text-rose border-rose/50">SG 9%</Badge>
                            </div>
                          </div>
                          <div className="flex justify-between items-center p-2 rounded bg-slate-800/30">
                            <span className="text-sm text-slate-400">HNWI Inflow 2025</span>
                            <Badge className="bg-gold/20 text-gold border-gold/50">Dubai +9,800 (largest globally)</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                          <Award className="h-4 w-4" /> Skytrax 2025 Top 10 Airlines
                        </h4>
                        <ScrollArea className="h-[200px]">
                          <div className="space-y-1">
                            {skytrax2025Rankings.map((airline, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className={`flex items-center justify-between p-2 rounded ${airline.rank === 1 ? 'bg-gold/20 border border-gold/30' : airline.rank === 4 ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-slate-800/30'}`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${airline.rank === 1 ? 'bg-gold text-navy' : airline.rank === 4 ? 'bg-slate-600 text-white' : 'bg-slate-700 text-slate-300'}`}>
                                    {airline.rank}
                                  </div>
                                  <span className={`text-sm ${airline.rank <= 3 ? 'text-slate-200' : 'text-slate-400'}`}>
                                    {airline.airline}
                                  </span>
                                </div>
                                {airline.award && <Badge variant="gold" className="text-xs">{airline.award}</Badge>}
                              </motion.div>
                            ))}
                          </div>
                        </ScrollArea>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {skytraxSpecialAwards.slice(0, 3).map((award, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-gold/50 text-gold">
                              {award.airline}: {award.award}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cycle D: Israeli Tech & Sentiment */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Card className="glass-card border-emerald/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Crown className="h-5 w-5 text-emerald" />
                      Cycle D: Israeli Tech & Competitive Sentiment
                    </CardTitle>
                    <CardDescription>Tech ecosystem comparison and sentiment analysis by topic</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                          <Gem className="h-4 w-4" /> Israeli Tech Ecosystem (startupnationcentral.org)
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-lg border border-emerald/30 bg-slate-800/30 p-2 text-center">
                            <div className="text-lg font-bold text-emerald">{israeliTech.startupsOnFinder}</div>
                            <div className="text-xs text-slate-400">Startups</div>
                          </div>
                          <div className="rounded-lg border border-emerald/30 bg-slate-800/30 p-2 text-center">
                            <div className="text-lg font-bold text-emerald">{israeliTech.investors}</div>
                            <div className="text-xs text-slate-400">Investors</div>
                          </div>
                          <div className="rounded-lg border border-emerald/30 bg-slate-800/30 p-2 text-center">
                            <div className="text-lg font-bold text-emerald">{israeliTech.grantMatchingGrowth}</div>
                            <div className="text-xs text-slate-400">Grant Growth</div>
                          </div>
                          <div className="rounded-lg border border-emerald/30 bg-slate-800/30 p-2 text-center">
                            <div className="text-lg font-bold text-emerald">{israeliTech.multinationalsInIsraeliRAndD}</div>
                            <div className="text-xs text-slate-400">MNCs in R&D</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {israeliTech.focusSectors.map((sector, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-emerald/50 text-emerald">{sector}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                          <Activity className="h-4 w-4" /> Sentiment by Topic
                        </h4>
                        <ScrollArea className="h-[180px]">
                          <div className="space-y-1">
                            {competitiveSentiment.slice(0, 8).map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-800/30">
                                <span className="text-xs text-slate-300">{item.topic}</span>
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${item.score >= 0.6 ? 'bg-emerald' : item.score >= 0.4 ? 'bg-gold' : item.score >= 0 ? 'bg-navy' : 'bg-rose'}`} />
                                  <span className={`text-xs font-medium ${item.score >= 0.6 ? 'text-emerald' : item.score >= 0.4 ? 'text-gold' : item.score >= 0 ? 'text-navy' : 'text-rose'}`}>
                                    {item.score > 0 ? '+' : ''}{(item.score * 100).toFixed(0)}%
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cycle E: Competitive Intel Matrix */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Card className="glass-card border-gold/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TargetIcon className="h-5 w-5 text-gold" />
                      Cycle E: Competitive Intelligence Matrix (14 Competitors)
                    </CardTitle>
                    <CardDescription>UAE advantages, competitor advantages, and key battlegrounds by relevance tier</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-2">
                        <div className="mb-4">
                          <h5 className="text-xs font-semibold text-gold uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Crown className="h-3 w-3" /> Critical Priority
                          </h5>
                          {competitiveIntelMatrix.filter(c => c.relevance === 'Critical').map((comp, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="rounded-lg border border-gold/20 bg-slate-800/30 p-3 mb-2">
                              <div className="flex items-start justify-between mb-2">
                                <span className="font-semibold text-slate-200">{comp.competitor}</span>
                                <Badge variant="gold" className="text-xs">{comp.relevance}</Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="p-2 rounded bg-emerald/10 border border-emerald/20">
                                  <span className="text-emerald font-medium">UAE:</span>
                                  <span className="text-slate-400 ml-1">{comp.uaeAdvantage}</span>
                                </div>
                                <div className="p-2 rounded bg-rose/10 border border-rose/20">
                                  <span className="text-rose font-medium">Competitor:</span>
                                  <span className="text-slate-400 ml-1">{comp.competitorAdvantage}</span>
                                </div>
                              </div>
                              <div className="mt-2 text-xs text-slate-400">
                                <span className="text-gold font-medium">Battleground:</span> {comp.keyBattleground}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mb-4">
                          <h5 className="text-xs font-semibold text-navy uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Medal className="h-3 w-3" /> High Priority
                          </h5>
                          {competitiveIntelMatrix.filter(c => c.relevance === 'High').map((comp, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.03 }} className="rounded-lg border border-navy/20 bg-slate-800/30 p-3 mb-2">
                              <div className="flex items-start justify-between mb-2">
                                <span className="font-semibold text-slate-200">{comp.competitor}</span>
                                <Badge variant="outline" className="text-xs border-navy/50 text-navy">{comp.relevance}</Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="p-2 rounded bg-emerald/10 border border-emerald/20">
                                  <span className="text-emerald font-medium">UAE:</span>
                                  <span className="text-slate-400 ml-1">{comp.uaeAdvantage}</span>
                                </div>
                                <div className="p-2 rounded bg-rose/10 border border-rose/20">
                                  <span className="text-rose font-medium">Competitor:</span>
                                  <span className="text-slate-400 ml-1">{comp.competitorAdvantage}</span>
                                </div>
                              </div>
                              <div className="mt-2 text-xs text-slate-400">
                                <span className="text-gold font-medium">Battleground:</span> {comp.keyBattleground}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div>
                          <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                            Medium / Low Priority
                          </h5>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {competitiveIntelMatrix.filter(c => c.relevance === 'Medium' || c.relevance === 'Low').map((comp, idx) => (
                              <div key={idx} className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-slate-300">{comp.competitor}</span>
                                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">{comp.relevance}</Badge>
                                </div>
                                <div className="text-xs text-slate-400 mt-1 line-clamp-1">{comp.keyBattleground}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cycle F: Winning Narratives & Vulnerabilities */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Card className="glass-card border-emerald/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald" />
                      Cycle F: UAE Winning Narratives & Competitor Vulnerabilities
                    </CardTitle>
                    <CardDescription>Strategic advantages and areas requiring monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-emerald flex items-center gap-2">
                          <Trophy className="h-4 w-4" /> UAE Winning Narratives
                        </h4>
                        <div className="space-y-2">
                          {uaeWinningNarratives.map((narrative, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} className="flex items-start gap-2 p-2 rounded bg-emerald/10 border border-emerald/20">
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald/20 text-emerald text-xs font-bold shrink-0 mt-0.5">
                                {idx + 1}
                              </div>
                              <span className="text-xs text-slate-300">{narrative}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-rose flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" /> Competitor Vulnerabilities
                        </h4>
                        <div className="space-y-2">
                          {competitorVulnerabilities.map((vuln, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} className="flex items-center justify-between p-2 rounded bg-slate-800/30 border border-slate-700/50">
                              <div>
                                <span className="text-sm font-medium text-slate-200">{vuln.competitor}</span>
                                <p className="text-xs text-slate-400 mt-0.5">{vuln.vulnerability}</p>
                              </div>
                              <Badge className={`text-xs ${vuln.severity === 'High' || vuln.severity === 'Medium-High' ? 'bg-rose/20 text-rose border-rose/50' : 'bg-gold/20 text-gold border-gold/50'}`}>
                                {vuln.severity}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* WebFetch Success Metrics */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-gold" />
                    <div>
                      <div className="text-sm font-medium text-slate-200">Research Metrics (MD 12-6)</div>
                      <div className="text-xs text-slate-400">20 queries executed | 61 WebFetch URLs | Research Date: April 27, 2026</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-emerald">12</div>
                      <div className="text-xs text-slate-400">Successful</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gold">15</div>
                      <div className="text-xs text-slate-400">Partial</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-rose">34</div>
                      <div className="text-xs text-slate-400">Failed</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Narrative Reconstruction Tab - MD 12-7 */}
        <TabsContent value="narrative" className="space-y-6">
          <GlassPanel title="Narrative Reconstruction Intelligence - MD 12-7" description="Comprehensive narrative threat analysis using Blackbird.AI, PeakMetrics, EdgeTheory frameworks. $30B enterprise threat spending, 257% deepfake increase, 99% meme mutation rate.">
            <div className="space-y-6">
              {/* Cycle A: Key Metrics & Statistics */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Card className="glass-card border-rose/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-rose" />
                      Cycle A: Critical Metrics from MD 12-7
                    </CardTitle>
                    <CardDescription>Key statistics on narrative threats, deepfakes, and market projections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-rose/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20">
                            <DollarSign className="h-5 w-5 text-rose" />
                          </div>
                          <span className="text-sm text-slate-400">Enterprise Threat Spending (2028)</span>
                        </div>
                        <div className="text-3xl font-bold text-rose">$30B</div>
                        <div className="text-xs text-slate-400 mt-1">Gartner Projection</div>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-rose/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20">
                            <AlertOctagon className="h-5 w-5 text-rose" />
                          </div>
                          <span className="text-sm text-slate-400">Deepfake Incident Increase</span>
                        </div>
                        <div className="text-3xl font-bold text-rose">257%</div>
                        <div className="text-xs text-slate-400 mt-1">2023-2024</div>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-gold/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                            <Zap className="h-5 w-5 text-gold" />
                          </div>
                          <span className="text-sm text-slate-400">Average Deepfake Loss</span>
                        </div>
                        <div className="text-3xl font-bold text-gold">$25M</div>
                        <div className="text-xs text-slate-400 mt-1">CFO Fraud Case</div>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-emerald/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20">
                            <Target className="h-5 w-5 text-emerald" />
                          </div>
                          <span className="text-sm text-slate-400">Meme Mutation Rate</span>
                        </div>
                        <div className="text-3xl font-bold text-emerald">99%</div>
                        <div className="text-xs text-slate-400 mt-1">ACM/Facebook Research</div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cycle B: Narrative Intelligence Platforms */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Radar className="h-5 w-5 text-gold" />
                      Cycle B: Narrative Intelligence Platforms
                    </CardTitle>
                    <CardDescription>Blackbird.AI, PeakMetrics, and EdgeTheory capabilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-3">
                      {/* Blackbird.AI */}
                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-gold/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                            <Shield className="h-6 w-6 text-gold" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gold">Blackbird.AI</h4>
                            <Badge variant="outline" className="text-xs border-gold/50 text-gold mt-1">Tier 1 | Critical UAE</Badge>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3">
                          {narrativeIntelligencePlatforms.blackbird.keyFeatures.slice(0, 5).map((feature, idx) => (
                            <p key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-emerald" />
                              {feature}
                            </p>
                          ))}
                        </div>
                        <div className="p-2 rounded bg-gold/10 border border-gold/30">
                          <p className="text-xs text-gold">Source: Fetched | Credibility: 9/10</p>
                        </div>
                      </motion.div>

                      {/* PeakMetrics */}
                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-navy/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/20">
                            <Activity className="h-6 w-6 text-navy" />
                          </div>
                          <div>
                            <h4 className="font-bold text-navy">PeakMetrics</h4>
                            <Badge variant="outline" className="text-xs border-navy/50 text-navy mt-1">Tier 2 | High UAE</Badge>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3">
                          {narrativeIntelligencePlatforms.peakMetrics.keyFeatures.slice(0, 4).map((feature, idx) => (
                            <p key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-emerald" />
                              {feature}
                            </p>
                          ))}
                        </div>
                        <div className="p-2 rounded bg-navy/10 border border-navy/30">
                          <p className="text-xs text-navy">Source: Blocked | Credibility: 8/10</p>
                        </div>
                      </motion.div>

                      {/* EdgeTheory */}
                      <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg border border-emerald/30 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald/20">
                            <TrendingUp className="h-6 w-6 text-emerald" />
                          </div>
                          <div>
                            <h4 className="font-bold text-emerald">EdgeTheory</h4>
                            <Badge variant="outline" className="text-xs border-emerald/50 text-emerald mt-1">Tier 1 | High UAE</Badge>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3">
                          {narrativeIntelligencePlatforms.edgeTheory.keyFeatures.slice(0, 5).map((feature, idx) => (
                            <p key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-emerald" />
                              {feature}
                            </p>
                          ))}
                        </div>
                        <div className="p-2 rounded bg-emerald/10 border border-emerald/30">
                          <p className="text-xs text-emerald">Source: Fetched | Credibility: 9/10</p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cycle C: Case Studies */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Card className="glass-card border-rose/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="h-5 w-5 text-rose" />
                      Cycle C: Narrative Attack Case Studies
                    </CardTitle>
                    <CardDescription>Real-world narrative manipulation incidents and their impact</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {blackbirdCaseStudies.map((study, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 hover:bg-slate-800/50 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20">
                                <Target className="h-5 w-5 text-rose" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-200">{study.incident}</h4>
                                <p className="text-xs text-slate-400">{study.date}</p>
                              </div>
                            </div>
                            <Badge variant="destructive" className="text-xs bg-rose/20 text-rose border-rose/50">
                              {study.attackVector.split(' ').slice(0, 3).join(' ')}
                            </Badge>
                          </div>
                          <div className="ml-13 pl-13">
                            <p className="text-sm text-emerald">{study.impact}</p>
                            <p className="text-xs text-slate-500 mt-1">Vector: {study.attackVector}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cycle D: Origin Tracing & Lifecycle */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <GitBranch className="h-5 w-5 text-gold" />
                      Cycle D: Origin Tracing & Narrative Lifecycle
                    </CardTitle>
                    <CardDescription>Methodologies for tracing narrative origins and tracking evolution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* Origin Tracing Methods */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gold flex items-center gap-2">
                          <Search className="h-4 w-4" /> Origin Tracing Methods
                        </h4>
                        {originTracingMethods.propagationModels.slice(0, 4).map((model, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-slate-200">{model.model}</span>
                              <Badge variant="outline" className="text-xs border-gold/30 text-gold">{model.characteristics}</Badge>
                            </div>
                            <p className="text-xs text-slate-400">{model.description}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Narrative Lifecycle Stages */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-emerald flex items-center gap-2">
                          <Layers className="h-4 w-4" /> Narrative Lifecycle Stages
                        </h4>
                        <div className="space-y-2">
                          {narrativeLifecycleStages.map((stage, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.08 }}
                              className="flex items-center gap-3 p-2 rounded-lg border border-slate-700/50 bg-slate-800/30"
                            >
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald/20 text-xs font-bold text-emerald">
                                {idx + 1}
                              </div>
                              <div className="flex-1">
                                <span className="text-sm font-medium text-slate-200">{stage.stage}</span>
                                <p className="text-xs text-slate-400">{stage.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cycle E: LLM Detection & Search Strategies */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Card className="glass-card border-navy/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-navy" />
                      Cycle E: LLM Shift Detection & Search Strategies
                    </CardTitle>
                    <CardDescription>AI-based narrative shift detection and query methodologies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* LLM Shift Detection */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-navy flex items-center gap-2">
                          <Activity className="h-4 w-4" /> LLM Shift Detection Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-lg border border-navy/30 bg-slate-800/30 text-center">
                            <div className="text-2xl font-bold text-navy">{llmShiftDetectionMetrics.keyFindings[0].value}</div>
                            <div className="text-xs text-slate-400">Changes Detected</div>
                          </div>
                          <div className="p-3 rounded-lg border border-navy/30 bg-slate-800/30 text-center">
                            <div className="text-2xl font-bold text-rose">{llmShiftDetectionMetrics.keyFindings[2].value}</div>
                            <div className="text-xs text-slate-400">LLM Accuracy</div>
                          </div>
                          <div className="p-3 rounded-lg border border-navy/30 bg-slate-800/30 text-center">
                            <div className="text-2xl font-bold text-emerald">{llmShiftDetectionMetrics.keyFindings[3].value}</div>
                            <div className="text-xs text-slate-400">Correct Explanations</div>
                          </div>
                          <div className="p-3 rounded-lg border border-navy/30 bg-slate-800/30 text-center">
                            <div className="text-2xl font-bold text-gold">{llmShiftDetectionMetrics.keyFindings[4].value}</div>
                            <div className="text-xs text-slate-400">Analysis Period</div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 p-2 rounded bg-navy/10 border border-navy/30">
                          Pipeline: {llmShiftDetectionMetrics.pipeline.join(' → ')}
                        </p>
                      </div>

                      {/* Search Query Strategies */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gold flex items-center gap-2">
                          <Search className="h-4 w-4" /> Search Query Strategies
                        </h4>
                        <ScrollArea className="h-[200px]">
                          <div className="space-y-2">
                            {Object.entries(searchQueryStrategies).slice(0, 4).map(([category, queries]) => (
                              <div key={category} className="p-2 rounded-lg border border-slate-700/50 bg-slate-800/30">
                                <p className="text-xs font-semibold text-gold mb-1">{category.replace(/([A-Z])/g, ' $1').trim()}</p>
                                {queries.slice(0, 2).map((q, idx) => (
                                  <p key={idx} className="text-xs text-slate-400 flex items-center gap-1">
                                    <span className="text-emerald">→</span> {q.queryTemplate.replace(/"/g, '')}
                                  </p>
                                ))}
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Cycle F: Critical Findings & Recommended Tools */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Card className="glass-card border-gold/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-gold" />
                      Cycle F: Critical Findings & Recommended Tools
                    </CardTitle>
                    <CardDescription>Priority findings and enterprise tools for narrative intelligence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* Critical Findings */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-rose flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" /> Critical Findings
                        </h4>
                        <ScrollArea className="h-[250px]">
                          <div className="space-y-2">
                            {criticalFindings.map((finding, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.08 }}
                                className="p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <Badge className={`text-xs ${
                                    finding.priority === 'Critical' ? 'bg-rose/20 text-rose border-rose/50' :
                                    finding.priority === 'High' ? 'bg-gold/20 text-gold border-gold/50' :
                                    'bg-navy/20 text-navy border-navy/50'
                                  }`}>
                                    {finding.priority}
                                  </Badge>
                                </div>
                                <p className="text-sm text-slate-200">{finding.finding}</p>
                                <p className="text-xs text-slate-400 mt-1">Implication: {finding.implication}</p>
                              </motion.div>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>

                      {/* Recommended Tools */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-emerald flex items-center gap-2">
                          <Tool className="h-4 w-4" /> Recommended Tools
                        </h4>
                        <div className="space-y-3">
                          {/* Enterprise */}
                          <div className="p-3 rounded-lg border border-emerald/30 bg-slate-800/30">
                            <p className="text-xs font-semibold text-emerald mb-2">Enterprise Platforms</p>
                            <div className="space-y-2">
                              {recommendedTools.enterprise.map((tool, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                  <span className="text-sm text-slate-300">{tool.platform}</span>
                                  <Badge className={`text-xs ${
                                    tool.uaePriority === 'Critical' ? 'bg-rose/20 text-rose border-rose/50' :
                                    'bg-gold/20 text-gold border-gold/50'
                                  }`}>
                                    {tool.uaePriority}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Academic */}
                          <div className="p-3 rounded-lg border border-navy/30 bg-slate-800/30">
                            <p className="text-xs font-semibold text-navy mb-2">Academic & Open Source</p>
                            <div className="space-y-2">
                              {recommendedTools.academic.map((tool, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                  <span className="text-sm text-slate-300">{tool.tool}</span>
                                  <Badge variant="outline" className="text-xs border-navy/50 text-navy">
                                    {tool.accessibility}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Verification */}
                          <div className="p-3 rounded-lg border border-gold/30 bg-slate-800/30">
                            <p className="text-xs font-semibold text-gold mb-2">Verification Tools</p>
                            <div className="space-y-2">
                              {recommendedTools.verification.map((tool, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                  <span className="text-sm text-slate-300">{tool.tool}</span>
                                  <span className="text-xs text-slate-500">{tool.useCase}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Narrative Reconstruction Statistics Summary */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                <Card className="glass-card border-gold/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Database className="h-5 w-5 text-gold" />
                      Market & Research Statistics
                    </CardTitle>
                    <CardDescription>Summary statistics from MD 12-7 narrative reconstruction data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {narrativeReconstructionStatistics.marketIndustry.map((stat, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.08 }}
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 text-center hover:bg-slate-800/50 transition-colors cursor-pointer"
                        >
                          <div className="text-xl font-bold text-gold">{stat.value}</div>
                          <div className="text-xs text-slate-400 mt-1">{stat.statistic}</div>
                          <div className="text-xs text-slate-500 mt-1">{stat.source} ({stat.year})</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Research Metrics Footer */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-gold" />
                    <div>
                      <div className="text-sm font-medium text-slate-200">Research Metrics (MD 12-7)</div>
                      <div className="text-xs text-slate-400">Narrative Reconstruction | Blackbird.AI | PeakMetrics | EdgeTheory | arXiv</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-emerald">{narrativeReconstructionData.statistics.narrativesAnalyzed}</div>
                      <div className="text-xs text-slate-400">Narratives</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gold">{narrativeReconstructionData.statistics.coordinatedBehaviorsDetected}</div>
                      <div className="text-xs text-slate-400">Coordinated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-navy">{narrativeReconstructionData.metadata.confidence}%</div>
                      <div className="text-xs text-slate-400">Confidence</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Historical Baseline Tab - MD 12-4 */}
        <TabsContent value="baseline" className="space-y-6">
          <GlassPanel
            title="Historical Baseline Deep Research"
            description="Multi-era archive coverage analysis with 87 URLs, 72 fetched, 450+ data points across 4 historical eras"
          >
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="URLs Processed"
                  value={enrichmentMetadata.totalUrls}
                  icon={<Globe className="h-6 w-6" />}
                  gradient="gold"
                />
                <MetricCard
                  title="Successfully Fetched"
                  value={enrichmentMetadata.successfullyFetched}
                  icon={<CheckCircle className="h-6 w-6" />}
                  gradient="emerald"
                />
                <MetricCard
                  title="Data Points"
                  value={enrichmentMetadata.totalDataPoints}
                  icon={<Database className="h-6 w-6" />}
                  gradient="navy"
                />
                <MetricCard
                  title="Historical Eras"
                  value={4}
                  icon={<Clock className="h-6 w-6" />}
                  gradient="rose"
                />
              </div>

              {/* Historical Baseline KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-gold" />
                    Historical Baseline KPIs
                  </CardTitle>
                  <CardDescription>22 KPI entries across 4 historical eras with archive coverage metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {historicalBaselineKPIs.slice(0, 18).map((kpi, idx) => (
                        <motion.div
                          key={kpi.kpi}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.04 }}
                          whileHover={{ scale: 1.03 }}
                          className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 hover:bg-slate-800/50 transition-colors cursor-pointer"
                        >
                          <div className="text-lg font-bold text-gold">{kpi.value}</div>
                          <p className="text-xs text-slate-300 font-medium">{kpi.kpi}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className={`text-xs ${
                              kpi.category === 'Archive Coverage' ? 'border-gold/50 text-gold' :
                              kpi.category === 'Media Evolution' ? 'border-emerald/50 text-emerald' :
                              kpi.category === 'Data Quality' ? 'border-navy/50 text-navy' :
                              'border-rose/50 text-rose'
                            }`}>
                              {kpi.category}
                            </Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Era-Based Archive Coverage */}
              <Card className="glass-card border-gold/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Layers className="h-5 w-5 text-gold" />
                    Historical Era Archives
                  </CardTitle>
                  <CardDescription>4 eras of UAE media history: Pre-2000, 2000-2010, 2010-2020, 2020-2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="pre2000" className="space-y-4">
                    <TabsList className="glass-panel">
                      <TabsTrigger value="pre2000">Pre-2000 ({preModernArchives.length})</TabsTrigger>
                      <TabsTrigger value="2000s">2000-2010 ({earlyInternetArchives.length})</TabsTrigger>
                      <TabsTrigger value="2010s">2010-2020 ({socialMediaEraArchives.length})</TabsTrigger>
                      <TabsTrigger value="2020s">2020-2026 ({recentEraArchives.length})</TabsTrigger>
                    </TabsList>

                    <TabsContent value="pre2000">
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-3">
                          {preModernArchives.map((source, idx) => (
                            <motion.div
                              key={source.source}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.06 }}
                              className="flex items-start gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                            >
                              <Badge variant="outline" className={`text-xs min-w-[60px] justify-center ${
                                source.tier === 0 ? 'border-emerald-500/50 text-emerald' :
                                source.tier === 1 ? 'border-gold/50 text-gold' :
                                'border-navy/50 text-navy'
                              }`}>
                                Tier {source.tier}
                              </Badge>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-slate-200">{source.source}</p>
                                <p className="text-xs text-slate-400">{source.description}</p>
                                <p className="text-xs text-slate-500 mt-1">{source.coverage}</p>
                              </div>
                              <Badge variant="outline" className={`text-xs ${
                                source.uaeRelevance === 'Critical' ? 'border-rose-500/50 text-rose' :
                                source.uaeRelevance === 'High' ? 'border-gold/50 text-gold' :
                                'border-emerald/50 text-emerald'
                              }`}>
                                {source.uaeRelevance}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>

                    <TabsContent value="2000s">
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-3">
                          {earlyInternetArchives.map((source, idx) => (
                            <motion.div
                              key={source.source}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.08 }}
                              className="flex items-start gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                            >
                              <Badge variant="outline" className={`text-xs min-w-[60px] justify-center ${
                                source.tier <= 1 ? 'border-gold/50 text-gold' :
                                'border-navy/50 text-navy'
                              }`}>
                                Tier {source.tier}
                              </Badge>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-slate-200">{source.source}</p>
                                <p className="text-xs text-slate-400">{source.description}</p>
                                <p className="text-xs text-slate-500 mt-1">{source.coverage}</p>
                              </div>
                              <Badge variant="outline" className="text-xs text-emerald">{source.era}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>

                    <TabsContent value="2010s">
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-3">
                          {socialMediaEraArchives.map((source, idx) => (
                            <motion.div
                              key={source.source}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                            >
                              <Badge variant="outline" className={`text-xs min-w-[60px] justify-center ${
                                source.tier <= 1 ? 'border-emerald/50 text-emerald' :
                                'border-rose/50 text-rose'
                              }`}>
                                Tier {source.tier}
                              </Badge>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-slate-200">{source.source}</p>
                                <p className="text-xs text-slate-400">{source.description}</p>
                                <p className="text-xs text-slate-500 mt-1">{source.platform}</p>
                              </div>
                              <Badge variant="outline" className="text-xs text-gold">{source.metrics}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>

                    <TabsContent value="2020s">
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-3">
                          {recentEraArchives.map((source, idx) => (
                            <motion.div
                              key={source.source}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.12 }}
                              className="flex items-start gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                            >
                              <Badge variant="outline" className={`text-xs min-w-[60px] justify-center ${
                                source.tier === 0 ? 'border-emerald-500/50 text-emerald' :
                                'border-gold/50 text-gold'
                              }`}>
                                Tier {source.tier}
                              </Badge>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-slate-200">{source.source}</p>
                                <p className="text-xs text-slate-400">{source.description}</p>
                                <p className="text-xs text-slate-500 mt-1">{source.period}</p>
                              </div>
                              <Badge variant="outline" className={`text-xs ${
                                source.uaeRelevance === 'Critical' ? 'border-rose-500/50 text-rose' :
                                'border-gold/50 text-gold'
                              }`}>
                                {source.uaeRelevance}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* NLA Subject Topics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Newspaper className="h-5 w-5 text-emerald" />
                    NLA Subject Topics
                  </CardTitle>
                  <CardDescription>National Library of Australia subject coverage for UAE research</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="flex flex-wrap gap-2">
                      {nlaSubjectTopics.map((topic, idx) => (
                        <motion.div
                          key={topic.subject}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg border border-slate-700/50 bg-slate-800/30 px-3 py-2 hover:bg-slate-800/50 transition-colors cursor-pointer"
                        >
                          <p className="text-sm text-slate-200">{topic.subject}</p>
                          <p className="text-xs text-slate-400">{topic.records} records</p>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Gulf News Timeline */}
              <Card className="glass-card border-gold/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gold" />
                    Gulf News Timeline
                  </CardTitle>
                  <CardDescription>Key UAE media milestones from 1970-2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {gulfNewsTimeline.slice(0, 10).map((event, idx) => (
                      <motion.div
                        key={event.year}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                          <span className="text-sm font-bold text-gold">{event.year}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-200">{event.event}</p>
                          <p className="text-xs text-slate-400">{event.description}</p>
                        </div>
                        <Badge variant="outline" className="text-xs text-emerald">{event.type}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Organization Registry */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-gold" />
                    Organization Registry
                  </CardTitle>
                  <CardDescription>Key organizations tracked in historical baseline research</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-2">
                      {organizationRegistry.map((org, idx) => (
                        <motion.div
                          key={org.entity}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/30 hover:bg-slate-800/50"
                        >
                          <Badge variant="outline" className={`text-xs ${
                            org.type === 'Government' ? 'border-gold/50 text-gold' :
                            org.type === 'Media' ? 'border-emerald/50 text-emerald' :
                            'border-navy/50 text-navy'
                          }`}>
                            {org.type}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{org.entity}</p>
                            <p className="text-xs text-slate-400">{org.role}</p>
                          </div>
                          <Badge variant="outline" className={`text-xs ${
                            org.uaeRelevance === 'Critical' ? 'border-rose-500/50 text-rose' :
                            org.uaeRelevance === 'High' ? 'border-gold/50 text-gold' :
                            'border-emerald/50 text-emerald'
                          }`}>
                            {org.uaeRelevance}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Tier Definitions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald" />
                    Source Tier Definitions
                  </CardTitle>
                  <CardDescription>5-tier credibility classification system (0-4)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {tierDefinitions.map((tier, idx) => (
                        <motion.div
                          key={tier.tier}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-start gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <Badge variant="outline" className={`text-xs min-w-[60px] justify-center ${
                            tier.tier === 'Tier 0' ? 'border-emerald-500/50 text-emerald' :
                            tier.tier === 'Tier 1' ? 'border-gold/50 text-gold' :
                            tier.tier === 'Tier 2' ? 'border-navy/50 text-navy' :
                            tier.tier === 'Tier 3' ? 'border-rose/50 text-rose' :
                            'border-slate-500/50 text-slate-400'
                          }`}>
                            {tier.tier}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{tier.classification}</p>
                            <p className="text-xs text-slate-400">{tier.description}</p>
                          </div>
                          <Badge variant="outline" className="text-xs text-emerald">{tier.reliability}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Source Ratings Table */}
              <Card className="glass-card border-gold/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-gold" />
                    Source Ratings Matrix
                  </CardTitle>
                  <CardDescription>25 sources with credibility scores and UAE relevance ratings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {sourceRatingsTable.slice(0, 20).map((source, idx) => (
                        <motion.div
                          key={source.source}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20">
                            <span className="text-sm font-bold text-gold">{source.credibility}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{source.source}</p>
                            <p className="text-xs text-slate-400">{source.type}</p>
                          </div>
                          <Badge variant="outline" className={`text-xs ${
                            source.uaeRelevance === 'Critical' ? 'border-rose-500/50 text-rose' :
                            source.uaeRelevance === 'High' ? 'border-gold/50 text-gold' :
                            source.uaeRelevance === 'Medium' ? 'border-navy/50 text-navy' :
                            'border-slate-500/50 text-slate-400'
                          }`}>
                            {source.uaeRelevance}
                          </Badge>
                          <Badge variant="outline" className="text-xs text-emerald">{source.tier}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Sentiment Analysis by Topic */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-rose" />
                    Sentiment Analysis by Topic
                  </CardTitle>
                  <CardDescription>Topic-level sentiment distribution across UAE media landscape</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {sentimentAnalysisByTopic.slice(0, 12).map((topic, idx) => (
                        <motion.div
                          key={topic.topic}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.06 }}
                          className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <Badge variant="outline" className={`text-xs min-w-[80px] justify-center ${
                            topic.dominantSentiment === 'Positive' ? 'border-emerald-500/50 text-emerald' :
                            topic.dominantSentiment === 'Negative' ? 'border-rose-500/50 text-rose' :
                            'border-navy/50 text-navy'
                          }`}>
                            {topic.dominantSentiment}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{topic.topic}</p>
                            <p className="text-xs text-slate-400">{topic.keyNarrative}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-slate-200">{topic.intensity}%</div>
                            <p className="text-xs text-slate-500">intensity</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* KPI Set 1: Historical Archive Coverage */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="h-5 w-5 text-navy" />
                    KPI Set 1: Historical Archive Coverage
                  </CardTitle>
                  <CardDescription>Archive coverage metrics across 4 eras with 15+ year coverage analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {kpiSet1HistoricalArchiveCoverage.map((kpi, idx) => (
                        <motion.div
                          key={kpi.metric}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.06 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs text-navy">{kpi.era}</Badge>
                            <span className="text-sm text-slate-200">{kpi.metric}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-lg font-bold text-gold">{kpi.coverage}</span>
                            <Badge variant="outline" className={`text-xs ${
                              kpi.dataQuality === 'High' ? 'border-emerald-500/50 text-emerald' :
                              kpi.dataQuality === 'Medium' ? 'border-gold/50 text-gold' :
                              'border-rose/50 text-rose'
                            }`}>
                              {kpi.dataQuality} Quality
                            </Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* KPI Set 2: Media Evolution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald" />
                    KPI Set 2: Media Evolution
                  </CardTitle>
                  <CardDescription>Media format transitions from print to digital to social to AI-driven</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {kpiSet2MediaEvolution.map((kpi, idx) => (
                        <motion.div
                          key={kpi.phase}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <Badge variant="outline" className="text-xs text-emerald">{kpi.phase}</Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{kpi.metric}</p>
                            <p className="text-xs text-slate-400">{kpi.platform}</p>
                          </div>
                          <span className="text-lg font-bold text-emerald">{kpi.value}</span>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* KPI Set 3: Historical Events Impact */}
              <Card className="glass-card border-rose/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose" />
                    KPI Set 3: Historical Events Impact
                  </CardTitle>
                  <CardDescription>10 historical events with sentiment impact and narrative shifts</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {kpiSet3HistoricalEventsImpact.slice(0, 8).map((event, idx) => (
                        <motion.div
                          key={event.event}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.06 }}
                          className="flex items-start gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <Badge variant="outline" className={`text-xs ${
                            event.sentimentImpact === 'Negative' ? 'border-rose-500/50 text-rose' :
                            event.sentimentImpact === 'Positive' ? 'border-emerald-500/50 text-emerald' :
                            'border-navy/50 text-navy'
                          }`}>
                            {event.sentimentImpact}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{event.event}</p>
                            <p className="text-xs text-slate-400">{event.description}</p>
                            <p className="text-xs text-slate-500 mt-1">Narrative: {event.narrativeShift}</p>
                          </div>
                          <Badge variant="outline" className="text-xs text-gold">{event.intensity}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* KPI Set 4: Source Reliability Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-gold" />
                    KPI Set 4: Source Reliability Matrix
                  </CardTitle>
                  <CardDescription>Cross-era reliability scoring with credibility tiers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {kpiSet4SourceReliabilityMatrix.slice(0, 12).map((source, idx) => (
                        <motion.div
                          key={source.sourceType}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <Badge variant="outline" className={`text-xs min-w-[60px] justify-center ${
                            source.credibilityTier === 'Tier 0' ? 'border-emerald-500/50 text-emerald' :
                            source.credibilityTier === 'Tier 1' ? 'border-gold/50 text-gold' :
                            source.credibilityTier === 'Tier 2' ? 'border-navy/50 text-navy' :
                            'border-rose/50 text-rose'
                          }`}>
                            {source.credibilityTier}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{source.sourceType}</p>
                            <p className="text-xs text-slate-400">{source.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gold">{source.reliabilityScore}</div>
                            <p className="text-xs text-slate-500">score</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* UAE Relevance Assessment Summary */}
              <Card className="glass-card border-gold/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Flag className="h-5 w-5 text-gold" />
                    UAE Relevance Assessment Summary
                  </CardTitle>
                  <CardDescription>Cross-era UAE relevance with Critical/High/Medium/Low classification</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {uaeRelevanceAssessmentSummary.map((entry, idx) => (
                        <motion.div
                          key={entry.category}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.06 }}
                          className="flex items-center gap-4 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                        >
                          <Badge variant="outline" className={`min-w-[80px] justify-center text-xs ${
                            entry.relevanceLevel === 'Critical' ? 'border-rose-500/50 text-rose' :
                            entry.relevanceLevel === 'High' ? 'border-gold/50 text-gold' :
                            entry.relevanceLevel === 'Medium' ? 'border-navy/50 text-navy' :
                            'border-slate-500/50 text-slate-400'
                          }`}>
                            {entry.relevanceLevel}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{entry.category}</p>
                            <p className="text-xs text-slate-400">{entry.rationale}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* URL Content Summaries */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-rose" />
                    URL Content Summaries
                  </CardTitle>
                  <CardDescription>Key content extracts from successfully fetched URLs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {urlContentSummaries.slice(0, 10).map((url, idx) => (
                        <motion.div
                          key={url.url}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                        >
                          <Globe className="h-4 w-4 text-rose mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-200">{url.url}</p>
                            <p className="text-xs text-emerald mt-1">{url.contentSummary}</p>
                            <p className="text-xs text-slate-400 mt-1">{url.keyExtracts}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Data Gaps and Recommendations */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-rose" />
                    Data Gaps and Recommendations
                  </CardTitle>
                  <CardDescription>Identified coverage gaps with prioritization and mitigation strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {dataGapsAndRecommendations.map((gap, idx) => (
                        <motion.div
                          key={gap.gap}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.06 }}
                          className={`rounded-lg border p-4 ${
                            gap.priority === 'Critical' ? 'border-rose-500/50 bg-rose/10' :
                            gap.priority === 'High' ? 'border-gold/50 bg-gold/10' :
                            'border-slate-700/50 bg-slate-800/30'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-slate-200">{gap.gap}</h4>
                            <Badge variant="outline" className={`text-xs ${
                              gap.priority === 'Critical' ? 'border-rose-500/50 text-rose' :
                              gap.priority === 'High' ? 'border-gold/50 text-gold' :
                              'border-emerald/50 text-emerald'
                            }`}>
                              {gap.priority}
                            </Badge>
                          </div>
                          <p className="text-xs text-slate-400 mb-2">{gap.description}</p>
                          <div className="p-2 rounded bg-slate-800/50 border border-slate-700/50">
                            <p className="text-xs font-semibold text-gold">Mitigation: {gap.mitigation}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Failed URL Access */}
              {failedURLAccess.length > 0 && (
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-rose" />
                      Failed URL Access
                    </CardTitle>
                    <CardDescription>{failedURLAccess.length} URLs that could not be fetched</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[150px]">
                      <div className="space-y-2">
                        {failedURLAccess.map((url, idx) => (
                          <motion.div
                            key={url.url}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/30"
                          >
                            <XCircle className="h-4 w-4 text-rose" />
                            <div className="flex-1">
                              <p className="text-sm text-slate-300">{url.url}</p>
                              <p className="text-xs text-slate-500">{url.reason}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              )}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
