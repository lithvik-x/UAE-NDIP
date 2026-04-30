'use client'

import { useCrisisResponseDeepData } from '@/lib/data-loader/hooks'
import {
  uaeCrisisInfrastructure,
  crisisManagementLessons,
  realTimeMonitoringSystems,
  aiMediaMonitoring,
  osintTools,
  darkWebTools,
  darkWebStats,
  narrativeAttacks,
  narrativeStats,
  crossPlatformTracking,
  sentimentAnalysisCrisis,
  socialMediaTrendVelocity,
  factCheckVerification,
  governmentEmergencyResponse,
  postCrisisAssessment,
  influencerCrisisResponse,
  internationalCrisisMonitoring,
  misinformationTracking,
  crisisCommunicationBestPractices,
  mediaFramingAnalysis,
  disasterMisinformationDetection,
  crisisManagementGovernance,
  crisisQueryPhases,
  crisisPerformanceMetrics,
  toolsRecommended,
  sourceCitations,
  crisisLevels,
  crisisEntityRegistry,
  crisisStatistics,
  narrativeAttackStatistics,
  influencerImpactStatistics,
  emergencyManagementStatistics,
  factCheckingStatistics,
  digitalStatistics,
} from '@/lib/data-loader'

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
  Shield,
  Zap,
  Globe,
  Activity,
  Radio,
  Target,
  TrendingUp,
  Users,
  Database,
  Eye,
  RadioTower,
  MessageSquare,
  Network,
  BarChart3,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  ShieldAlert,
  Info,
} from 'lucide-react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function CrisisResponsePage() {
  const { data } = useCrisisResponseDeepData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Crisis Response data...</div>
      </div>
    )
  }

  // Chart data
  const crisisLevelData = crisisLevels.map((level, i) => ({
    name: `Level ${level.level}`,
    value: level.level,
    color: level.color === 'GREEN' ? CHART_COLORS.success :
           level.color === 'YELLOW' ? CHART_COLORS.warning :
           level.color === 'ORANGE' ? CHART_COLORS.orange :
           level.color === 'RED' ? CHART_COLORS.danger : CHART_COLORS.platinum,
  }))

  const lessonsChartData = crisisManagementLessons.slice(0, 5).map((lesson, i) => ({
    name: `Lesson ${lesson.id}`,
    value: 6 - lesson.id,
    color: CHART_COLORS.primary,
  }))

  const narrativeAttackStatsData = [
    { name: 'Annual Cost', value: 78, color: CHART_COLORS.danger, unit: '$B' },
    { name: 'Public Co. Losses', value: 39, color: CHART_COLORS.orange, unit: '$B' },
    { name: 'Bot Activity', value: 25, color: CHART_COLORS.warning, unit: '%' },
    { name: 'False News Spread', value: 6, color: CHART_COLORS.danger, unit: 'x' },
  ]

  const influencerStatsData = [
    { name: 'Trust Influencers', value: 69, color: CHART_COLORS.success },
    { name: 'Trust Earned Media', value: 92, color: CHART_COLORS.primary },
    { name: 'Purchase Influence', value: 63, color: CHART_COLORS.info },
    { name: 'Social Research', value: 41, color: CHART_COLORS.purple },
  ]

  const emergencyStatsData = governmentEmergencyResponse.deloitteNema2025.slice(0, 6).map((stat, i) => ({
    name: stat.category,
    value: stat.percentage || 0,
    color: i % 2 === 0 ? CHART_COLORS.danger : CHART_COLORS.warning,
  }))

  return (
    <motion.div
      className="space-y-8 p-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={item} className="flex items-start justify-between">
        <div>
          <Badge variant="denim" className="mb-2">DEEP RESEARCH</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy">Crisis Response Intelligence</h1>
          <p className="mt-2 text-slate-400">
            UAE National Digital Intelligence Platform — Comprehensive crisis response framework
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Radio className="h-4 w-4" />
            Live Monitor
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Crisis Mode
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={item} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Crisis Query Volume"
          value="100K"
          unit="/hour"
          trend="up"
          icon={<Database className="h-6 w-6" />}
          gradient="denim"
          status="error"
        />
        <MetricCard
          title="Crisis Detection Rate"
          value="28%"
          trend="down"
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Narrative Attacks"
          value="8"
          trend="up"
          icon={<Target className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Fact-Check Coverage"
          value="443"
          trend="down"
          icon={<CheckCircle className="h-6 w-6" />}
          gradient="emerald"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="lessons">Lessons 2025</TabsTrigger>
          <TabsTrigger value="intelligence">Threat Intel</TabsTrigger>
          <TabsTrigger value="metrics">Performance</TabsTrigger>
          <TabsTrigger value="narratives">Narratives</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Crisis Response Framework" description="4-phase crisis response protocol with 100,000 queries/hour during active crisis">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Crisis Levels</CardTitle>
                    <CardDescription>5-tier classification system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart data={crisisLevelData} height={250} showLegend={true} />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Query Volume by Phase</CardTitle>
                    <CardDescription>Crisis response query distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={crisisQueryPhases.map(p => ({ name: `Phase ${p.phase}`, value: p.queryCount, color: CHART_COLORS.primary }))}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Queries', color: CHART_COLORS.primary }]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Performance Metrics</CardTitle>
                  <CardDescription>Speed, volume, sentiment, and quality metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm text-slate-400">Speed Metrics</span>
                      </div>
                      {crisisPerformanceMetrics.speed.map((metric, i) => (
                        <div key={i} className="text-xs text-slate-300 py-1">{metric}</div>
                      ))}
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="h-4 w-4 text-primary" />
                        <span className="text-sm text-slate-400">Volume Metrics</span>
                      </div>
                      {crisisPerformanceMetrics.volume.map((metric, i) => (
                        <div key={i} className="text-xs text-slate-300 py-1">{metric}</div>
                      ))}
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="text-sm text-slate-400">Sentiment Metrics</span>
                      </div>
                      {crisisPerformanceMetrics.sentiment.map((metric, i) => (
                        <div key={i} className="text-xs text-slate-300 py-1">{metric}</div>
                      ))}
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-slate-400">Quality Metrics</span>
                      </div>
                      {crisisPerformanceMetrics.quality.map((metric, i) => (
                        <div key={i} className="text-xs text-slate-300 py-1">{metric}</div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Infrastructure Tab */}
        <TabsContent value="infrastructure" className="space-y-6">
          <GlassPanel title="UAE Crisis Response Infrastructure" description="Official UAE government crisis management entities">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">WCEMS 2025</CardTitle>
                    <CardDescription>World Crisis & Emergency Management Summit</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Location:</span>
                        <span className="text-slate-200">Abu Dhabi (ADNEC)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Organizer:</span>
                        <span className="text-slate-200">NCEMA</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Inaugurated By:</span>
                        <span className="text-slate-200">Nahyan bin Mubarak</span>
                      </div>
                      <div className="pt-2 border-t border-slate-700">
                        <p className="text-xs text-slate-400 mb-2">Key Focus Areas:</p>
                        <div className="flex flex-wrap gap-1">
                          {uaeCrisisInfrastructure.wcems2025.keyFocus.map((focus, i) => (
                            <Badge key={i} variant="outline" className="text-xs">{focus}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-success/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-success">ADCMC</CardTitle>
                    <CardDescription>Abu Dhabi Emergency, Crisis and Disaster Management Committee</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Date:</span>
                        <span className="text-slate-200">{uaeCrisisInfrastructure.adcmc.date}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Head:</span>
                        <span className="text-slate-200">Major Gen. Ahmed Saif bin Zaitoon</span>
                      </div>
                      <div className="pt-2 border-t border-slate-700">
                        <p className="text-xs text-slate-400 mb-2">Readiness Focus:</p>
                        <div className="flex flex-wrap gap-1">
                          {uaeCrisisInfrastructure.adcmc.readinessFocus.map((focus, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-success/50 text-success">{focus}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-info/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-info">Barakah 2025</CardTitle>
                    <CardDescription>Nuclear Emergency Exercise</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-slate-300">{uaeCrisisInfrastructure.barakah2025.purpose}</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Source:</span>
                        <span className="text-slate-200">{uaeCrisisInfrastructure.barakah2025.source}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">ADCMC Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-slate-300">
                    "{uaeCrisisInfrastructure.adcmc.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Lessons Tab */}
        <TabsContent value="lessons" className="space-y-6">
          <GlassPanel title="Crisis Management Lessons from 2025" description="7 key lessons from recent crisis events">
            <div className="space-y-4">
              {crisisManagementLessons.map((lesson, idx) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{lesson.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">#{lesson.id}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-400 mb-3">{lesson.description}</p>
                      <div className="space-y-1">
                        {lesson.keyPoints.map((point, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="text-slate-300">{point}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Threat Intelligence Tab */}
        <TabsContent value="intelligence" className="space-y-6">
          <GlassPanel title="Threat Intelligence" description="Real-time monitoring, narrative attacks, and misinformation tracking">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Narrative Attack Statistics</CardTitle>
                    <CardDescription>Impact metrics from 2025 attacks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={narrativeAttackStatsData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'Value', color: CHART_COLORS.danger }]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Influencer Impact Statistics</CardTitle>
                    <CardDescription>Trust and engagement metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={influencerStatsData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: '%', color: CHART_COLORS.success }]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Early Warning Signs</CardTitle>
                  <CardDescription>Key indicators for crisis detection</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {realTimeMonitoringSystems.earlyWarningSigns.map((sign, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                        <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{sign}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Misinformation Statistics</CardTitle>
                  <CardDescription>Deepfake and disinformation trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-danger/50 bg-danger/10 p-4 text-center">
                      <p className="text-2xl font-bold text-danger">{darkWebStats.usernamePasswordPairsCirculating}</p>
                      <p className="text-xs text-slate-400">Credentials on Criminal Markets</p>
                    </div>
                    <div className="rounded-lg border border-warning/50 bg-warning/10 p-4 text-center">
                      <p className="text-2xl font-bold text-warning">{darkWebStats.webAttacksStolenCredentials}</p>
                      <p className="text-xs text-slate-400">Web Attacks Use Stolen Credentials</p>
                    </div>
                    <div className="rounded-lg border border-danger/50 bg-danger/10 p-4 text-center">
                      <p className="text-2xl font-bold text-danger">{darkWebStats.phishingEmailsInfostealers2024}</p>
                      <p className="text-xs text-slate-400">Phishing Emails with Infostealers (2024)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Metrics Tab */}
        <TabsContent value="metrics" className="space-y-6">
          <GlassPanel title="Performance Metrics" description="Crisis response effectiveness indicators">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Crisis Statistics</CardTitle>
                    <CardDescription>Global crisis response benchmarks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Crises Going Global &lt;1hr</span>
                        <span className="text-lg font-bold text-danger">{crisisStatistics.socialMediaCrisesGlobalOneHour}%</span>
                      </div>
                      <Progress value={crisisStatistics.socialMediaCrisesGlobalOneHour} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Orgs with Crisis Plan</span>
                        <span className="text-lg font-bold text-warning">{crisisStatistics.organizationsWithFormalCrisisPlan}%</span>
                      </div>
                      <Progress value={crisisStatistics.organizationsWithFormalCrisisPlan} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">Consumers Avoiding Brand</span>
                        <span className="text-lg font-bold text-danger">{crisisStatistics.consumersAvoidingBrand}%</span>
                      </div>
                      <Progress value={crisisStatistics.consumersAvoidingBrand} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emergency Management Readiness</CardTitle>
                    <CardDescription>Deloitte-NEMA 2025 Study</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emergencyStatsData}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: '%', color: CHART_COLORS.warning }]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Fact-Checking Landscape 2025</CardTitle>
                  <CardDescription>Global verification ecosystem</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-primary">{factCheckingStatistics.globalFactCheckProjects}</p>
                      <p className="text-xs text-slate-400">Active Projects</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-success">{factCheckingStatistics.countriesWithFactCheckers}</p>
                      <p className="text-xs text-slate-400">Countries</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-info">{factCheckingStatistics.languagesCovered}+</p>
                      <p className="text-xs text-slate-400">Languages</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-warning">{factCheckingStatistics.metaPartnershipShare}</p>
                      <p className="text-xs text-slate-400">Meta Partnership</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Narrative Attack Cases" description="Major coordinated narrative attacks in 2025">
            <div className="space-y-4">
              {narrativeAttacks.map((attack, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="glass-card border-danger/30">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base text-danger">{attack.name}</CardTitle>
                        {attack.metrics.anomalyRate && (
                          <Badge variant="destructive" className="text-xs">
                            {attack.metrics.anomalyRate}% anomaly
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-400 mb-3">{attack.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {attack.coordinationPatterns.map((pattern, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-warning/50 text-warning">
                            {pattern}
                          </Badge>
                        ))}
                      </div>
                      {attack.metrics.engagementVolume && (
                        <p className="text-xs text-slate-500 mt-2">Volume: {attack.metrics.engagementVolume}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Tools Tab */}
        <TabsContent value="tools" className="space-y-6">
          <GlassPanel title="Tools & Technologies" description="Recommended crisis response and monitoring tools">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">OSINT Tools</CardTitle>
                    <CardDescription>Open source intelligence platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {osintTools.map((tool, i) => (
                          <div key={i} className="rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-slate-200">{tool.name}</span>
                            </div>
                            <p className="text-xs text-slate-400">{tool.capabilities}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Dark Web Monitoring</CardTitle>
                    <CardDescription>Credential and threat monitoring tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {darkWebTools.map((tool, i) => (
                          <div key={i} className="rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-slate-200">{tool.tool}</span>
                            </div>
                            <p className="text-xs text-slate-400">{tool.bestFor}</p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Cross-Platform Tracking Methods</CardTitle>
                  <CardDescription>{crossPlatformTracking.xpStmModel}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {crossPlatformTracking.trackingMethods.map((method, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-xs text-primary font-bold">{i + 1}</span>
                        </div>
                        <p className="text-sm text-slate-300">{method}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Source Citations" description="Credibility-tiered source references from MD 12-3">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>Tier-based source classification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sourceCitations.slice(0, 12).map((source, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/30 p-3">
                        <div className="flex items-center gap-3">
                          <Badge variant={source.tier <= 1 ? "success" : source.tier <= 2 ? "warning" : "outline"} className="text-xs">
                            T{source.tier}
                          </Badge>
                          <span className="text-sm text-slate-200">{source.source}</span>
                        </div>
                        <Badge variant={source.uaeRelevance === 'Critical' ? "destructive" : source.uaeRelevance === 'High' ? "warning" : "outline"} className="text-xs">
                          {source.uaeRelevance}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Tier Definitions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-success/50 bg-success/10 p-4">
                      <Badge variant="success" className="mb-2">T0-T1</Badge>
                      <p className="text-sm text-slate-300">Official UAE and primary international sources</p>
                    </div>
                    <div className="rounded-lg border border-warning/50 bg-warning/10 p-4">
                      <Badge variant="warning" className="mb-2">T2</Badge>
                      <p className="text-sm text-slate-300">Peer-reviewed and industry authority sources</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                      <Badge variant="outline" className="mb-2">T3-T4</Badge>
                      <p className="text-sm text-slate-300">Industry blogs and general web content</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
