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
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  CheckCircle,
  Clock,
  FileQuestion,
  Shield,
  AlertTriangle,
  Search,
  ThumbsDown,
  ThumbsUp,
  Timer,
  TrendingUp,
  Check,
  XCircle,
  Eye,
  Server,
  Users,
  Globe,
  Activity,
  Database,
  Lock,
  Smartphone,
  Building2,
  UserCog,
  Network,
  AlertOctagon,
  Newspaper,
  Camera,
  Wifi,
  WifiOff,
  Bug,
  Scale,
  UserCheck,
  FileText,
  TrendingDown,
  Flag,
  Target,
  Award,
  AlertCircle,
  BookOpen,
  Filter,
  BarChart3,
  PieChart as PieChartIcon,
  LayoutDashboard,
  Cpu,
  Link,
  DollarSign,
  UsersRound,
  ShieldAlert,
  EyeOff,
  Megaphone,
  Ban,
} from 'lucide-react'
import {
  mediaAboutMediaData,
} from '@/lib/data-loader'
import { useState } from 'react'

// ============================================================================
// Media About Media Dashboard
// ============================================================================

export default function MediaVerificationPage() {
  const [selectedTab, setSelectedTab] = useState('overview')

  const { extendedData } = mediaAboutMediaData
  const data = extendedData as any

  // Get critical KPIs
  const criticalKPIs = data.kpis.filter((k: any) => k.uaeRelevance === 'Critical')
  const highKPIs = data.kpis.filter((k: any) => k.uaeRelevance === 'High')

  // Chart data for trust metrics
  const trustChartData = data.audienceTrustMetrics.map((m: any) => ({
    name: m.source.split(' ')[0],
    value: parseInt(m.trustLevel.replace('%', '')),
  }))

  // Coverage bias chart data
  const biasChartData = data.coverageBiasPerceptions.map((b: any) => ({
    name: b.metric.split(' ').slice(0, 3).join(' '),
    value: parseInt(b.value.replace('%', '')) || 0,
    sentiment: b.sentiment,
  }))

  // Sentiment chart data
  const sentimentChartData = data.sentimentAnalysis.map((s: any) => ({
    topic: s.topic,
    score: s.score > 0 ? s.score : 0,
    negative: s.score < 0 ? Math.abs(s.score) : 0,
  }))

  // Tier badge helper
  const getTierBadge = (tier: number) => {
    switch (tier) {
      case 1: return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Tier {tier}</Badge>
      case 2: return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">Tier {tier}</Badge>
      case 3: return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">Tier {tier}</Badge>
      default: return <Badge className="bg-slate-500/20 text-slate-400 border-slate-500/50">Tier {tier}</Badge>
    }
  }

  // Relevance badge helper
  const getRelevanceBadge = (relevance: string) => {
    switch (relevance) {
      case 'Critical': return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">CRITICAL</Badge>
      case 'HIGH': return <Badge variant="warning" className="bg-orange-500/20 text-orange-400 border-orange-500/50">HIGH</Badge>
      case 'Medium': return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">MEDIUM</Badge>
      default: return <Badge variant="outline">LOW</Badge>
    }
  }

  // Alert badge helper
  const getAlertBadge = (alert: string) => {
    switch (alert) {
      case 'RED': return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">GREEN</Badge>
      default: return <Badge variant="outline">{alert}</Badge>
    }
  }

  // Status badge for services
  const getStatusBadge = (status: string) => {
    return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">{status}</Badge>
  }

  // Sentiment score badge
  const getSentimentBadge = (score: number, sentiment: string) => {
    if (score > 0.5) return <Badge variant="success" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">{sentiment}</Badge>
    if (score < -0.5) return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">{sentiment}</Badge>
    return <Badge variant="warning" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">{sentiment}</Badge>
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="emerald" className="mb-2">V-SECTOR 11-1</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-emerald">Media About Media</h1>
          <p className="mt-2 text-slate-400">
            UAE press freedom, censorship, and media control intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald/50 text-emerald hover:bg-emerald/10">
            <Search className="h-4 w-4" />
            Research
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
            <FileText className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </motion.div>

      {/* Claim & Verdict */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card border-red-500/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-400" />
              Claim Under Investigation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 italic mb-4">"{mediaAboutMediaData.claim}"</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="destructive" className="text-lg px-4 py-1 bg-red-500/20 text-red-400 border-red-500/50">
                  {mediaAboutMediaData.verdict.toUpperCase()}
                </Badge>
                <span className="text-slate-400">Accuracy Score: {mediaAboutMediaData.accuracyScore}/100</span>
              </div>
              <div className="flex-1" />
              <div className="text-right">
                <div className="text-2xl font-bold text-red-400">{mediaAboutMediaData.uaeRelevance.score}%</div>
                <p className="text-xs text-slate-500">UAE Relevance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Critical KPIs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="World Press Freedom"
          value="164"
          unit="/180"
          icon={<Globe className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Internet Freedom"
          value="30"
          unit="/100"
          icon={<WifiOff className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Emirati Media Trust"
          value="77%"
          icon={<Users className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Fake Twitter (Pro-MBZ)"
          value="91%"
          icon={<Network className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
      </motion.div>

      {/* Additional KPIs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Surveillance Cameras"
          value="300,000+"
          icon={<Camera className="h-6 w-6" />}
          gradient="denim"
          status="error"
        />
        <MetricCard
          title="Max Media Fine"
          value="AED 2M"
          icon={<DollarSign className="h-6 w-6" />}
          gradient="gold"
          status="warning"
        />
        <MetricCard
          title="Al-Roeya Jobs Lost"
          value="60-90"
          icon={<UsersRound className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="AI News Trust"
          value="62%"
          icon={<Cpu className="h-6 w-6" />}
          gradient="cyan"
          status="info"
        />
      </motion.div>

      {/* Main Content Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ownership">Ownership</TabsTrigger>
          <TabsTrigger value="restrictions">Restrictions</TabsTrigger>
          <TabsTrigger value="surveillance">Surveillance</TabsTrigger>
          <TabsTrigger value="legal">Legal</TabsTrigger>
          <TabsTrigger value="trust">Trust Metrics</TabsTrigger>
          <TabsTrigger value="blocked">Blocked Content</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="enrichment">Enrichment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Executive Summary */}
          <GlassPanel title="Executive Summary" description="Research coverage and data extraction summary">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Research Scope</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Data Points Extracted</span>
                        <span className="font-bold text-emerald-400">{data.dataPointsExtracted}+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Structured Tables</span>
                        <span className="font-bold text-emerald-400">{data.structuredTablesCreated}+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Sentiment Analyses</span>
                        <span className="font-bold text-emerald-400">{data.sentimentAnalysesCompleted}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Sources Assessed</span>
                        <span className="font-bold text-emerald-400">{data.sourceCredibilityAssessed}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">URL Fetch Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">URLs Analyzed</span>
                        <span className="font-bold text-slate-200">{data.urlsAnalyzed}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Successfully Fetched</span>
                        <span className="font-bold text-emerald-400">{data.urlsSuccessfullyFetched}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Blocked/Failed</span>
                        <span className="font-bold text-red-400">{data.urlsBlockedFailed}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Success Rate</span>
                        <span className="font-bold text-emerald-400">
                          {Math.round((data.urlsSuccessfullyFetched / data.urlsAnalyzed) * 100)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Summary Data Points */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Data Points</CardTitle>
                  <CardDescription>Verified metrics extracted from source documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {data.summaryDataPoints.map((point: any, idx: any) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.02 }}
                          className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <Badge variant="outline" className="text-xs">{point.category}</Badge>
                            <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                              {point.extractionStatus}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-300 font-medium">{point.metric}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-lg font-bold text-emerald-400">{point.value}</span>
                            <span className="text-xs text-slate-500">{point.source}</span>
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

        {/* Ownership Tab */}
        <TabsContent value="ownership" className="space-y-6">
          {/* Al-Roeya Incident */}
          <Card className="glass-card border-rose-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertOctagon className="h-5 w-5 text-rose-400" />
                Al-Roeya Incident (September 2022)
              </CardTitle>
              <CardDescription>Censorship incident after economic impact story</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center"
                >
                  <div className="text-2xl font-bold text-rose-400">{data.alRoeyaIncident.employeesLostJobs}</div>
                  <p className="text-sm text-slate-400">Jobs Lost</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center"
                >
                  <div className="text-lg font-bold text-slate-200">{data.alRoeyaIncident.incidentDate}</div>
                  <p className="text-sm text-slate-400">Incident Date</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center"
                >
                  <div className="text-lg font-bold text-slate-200">IMI</div>
                  <p className="text-sm text-slate-400">Publisher</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center"
                >
                  <div className="text-sm font-bold text-slate-200">Sheikh Mansour</div>
                  <p className="text-sm text-slate-400">Owner (Manchester City)</p>
                </motion.div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                  <p className="text-xs text-slate-500 mb-1">Trigger Article Topic</p>
                  <p className="text-sm text-slate-300">{data.alRoeyaIncident.articleTopic}</p>
                </div>
                <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3">
                  <p className="text-xs text-rose-400 mb-1">Official Reason Given</p>
                  <p className="text-sm text-slate-300">{data.alRoeyaIncident.officialReason}</p>
                </div>
                <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3">
                  <p className="text-xs text-rose-400 mb-1">Alleged Actual Reason</p>
                  <p className="text-sm text-slate-300">{data.alRoeyaIncident.actualReasonAlleged}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Media Outlet Ownership */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Media Outlet Ownership</CardTitle>
              <CardDescription>State connections and editorial alignment</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {data.mediaOutletOwnership.map((outlet: any, idx: any) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                          <Newspaper className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-200">{outlet.outlet}</p>
                          <p className="text-sm text-slate-400">{outlet.owner}</p>
                          <p className="text-sm text-slate-500 mt-1">{outlet.editorialAlignment}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 text-xs">
                          {outlet.ownershipType}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {outlet.politicalLeaning}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Regulatory Bodies */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Regulatory Bodies</CardTitle>
              <CardDescription>Media regulation and oversight entities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {data.regulatoryBodies.map((body: any, idx: any) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">{body.level}</Badge>
                    </div>
                    <p className="font-semibold text-slate-200 text-sm">{body.body}</p>
                    <p className="text-xs text-slate-400 mt-1">{body.function}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Restrictions Tab */}
        <TabsContent value="restrictions" className="space-y-6">
          {/* Self-Censorship Drivers */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Self-Censorship Drivers</CardTitle>
              <CardDescription>Factors driving self-censorship in UAE media</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-3">
                  {data.selfCensorshipDrivers.map((driver: any, idx: any) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                    >
                      <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-300">{driver}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Journalist Restrictions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Journalist Restrictions</CardTitle>
              <CardDescription>Types of restrictions on journalism in UAE</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {data.journalistRestrictions.map((restriction: any, idx: any) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                          <AlertOctagon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-200">{restriction.restrictionType}</p>
                          <p className="text-sm text-slate-400">{restriction.description}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">{restriction.frequency}</Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Legal Framework */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Legal Framework</CardTitle>
              <CardDescription>Laws restricting press freedom in UAE</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {data.legalFramework.map((law: any, idx: any) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">{law.article}</Badge>
                        <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">{law.penalty}</Badge>
                      </div>
                      <p className="text-sm text-slate-300">{law.prohibition}</p>
                      <p className="text-xs text-slate-500 mt-1">{law.law}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Surveillance Tab */}
        <TabsContent value="surveillance" className="space-y-6">
          {/* Surveillance Infrastructure */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Surveillance Infrastructure</CardTitle>
              <CardDescription>AI surveillance systems and camera networks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                {data.surveillanceInfrastructure.map((sys: any, idx: any) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Eye className="h-5 w-5 text-rose-400" />
                      <h4 className="font-semibold text-slate-200">{sys.system}</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Location</span>
                        <span className="text-slate-200">{sys.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Scale</span>
                        <span className="text-emerald-400 font-medium">{sys.scale}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">{sys.capability}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Spyware Programs */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Spyware & Surveillance Programs</CardTitle>
              <CardDescription>Targeted surveillance operations documented by HRW</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-3">
                  {data.spywarePrograms.map((program: any, idx: any) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                          <Bug className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-200">{program.program}</p>
                          <p className="text-sm text-slate-400">Operator: {program.operator}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">Target: {program.target}</Badge>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Blocked Services */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Blocked Services</CardTitle>
              <CardDescription>Communication services blocked in UAE</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {data.blockedServices.map((service: any, idx: any) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                  >
                    <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                      {service.service}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Legal Tab */}
        <TabsContent value="legal" className="space-y-6">
          {/* Content Standards */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Federal Decree Law No. 55/2023</CardTitle>
              <CardDescription>20 mandatory content standards for media</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {data.contentStandards.map((standard: any, idx: any) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                  >
                    <div className="text-xs text-slate-500 mb-1">Standard {standard.standardNumber}</div>
                    <p className="text-sm text-slate-300">{standard.requirement}</p>
                    <Badge variant="outline" className="text-xs mt-2">{standard.scope}</Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Penalty Structure */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Penalty Structure</CardTitle>
              <CardDescription>Fines for media violations under Federal Decree Law No. 55/2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                {data.penaltyStructure.map((penalty: any, idx: any) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-rose-400">{penalty.fine}</div>
                    <p className="text-sm text-slate-400 mt-1">{penalty.offense}</p>
                    <p className="text-xs text-slate-500 mt-2">{penalty.additionalPenalties}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trust Metrics Tab */}
        <TabsContent value="trust" className="space-y-6">
          {/* Audience Trust Metrics */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Audience Trust Metrics</CardTitle>
              <CardDescription>Media credibility and trust levels among Emiratis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.audienceTrustMetrics.map((metric: any, idx: any) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                  >
                    <div className="text-2xl font-bold text-emerald-400">{metric.trustLevel}</div>
                    <p className="text-sm text-slate-300 mt-1">{metric.source}</p>
                    <p className="text-xs text-slate-500 mt-1">Trend: {metric.trend}</p>
                    <p className="text-xs text-slate-600 mt-1">Sample: {metric.sample}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Coverage Bias Perceptions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Coverage Bias Perceptions</CardTitle>
              <CardDescription>Trust in media coverage by demographic</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[250px]">
                <div className="space-y-3">
                  {data.coverageBiasPerceptions.map((bias: any, idx: any) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                    >
                      <div className="flex-1">
                        <p className="text-sm text-slate-300">{bias.metric}</p>
                        <p className="text-xs text-slate-500">{bias.sample}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-emerald-400">{bias.value}</span>
                        <Badge variant="outline" className="text-xs">{bias.sentiment}</Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Crisis Coverage Metrics */}
          <Card className="glass-card border-emerald-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Crisis Coverage Metrics (April 2026)</CardTitle>
              <CardDescription>Dubai Media Crisis Response Performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center">
                  <div className="text-xl font-bold text-emerald-400">{data.crisisCoverageMetrics.potentialImpressions}</div>
                  <p className="text-xs text-slate-400">Impressions</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center">
                  <div className="text-xl font-bold text-emerald-400">{data.crisisCoverageMetrics.digitalReach}</div>
                  <p className="text-xs text-slate-400">Digital Reach</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center">
                  <div className="text-xl font-bold text-emerald-400">{data.crisisCoverageMetrics.websiteVisits}</div>
                  <p className="text-xs text-slate-400">Website Visits</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center">
                  <div className="text-xl font-bold text-emerald-400">{data.crisisCoverageMetrics.engagements}</div>
                  <p className="text-xs text-slate-400">Engagements</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center">
                  <div className="text-xl font-bold text-emerald-400">{data.crisisCoverageMetrics.positiveMediaSentiment}</div>
                  <p className="text-xs text-slate-400">Positive Media</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-center">
                  <div className="text-xl font-bold text-emerald-400">{data.crisisCoverageMetrics.positivePublicSentiment}</div>
                  <p className="text-xs text-slate-400">Positive Public</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Blocked Content Tab */}
        <TabsContent value="blocked" className="space-y-6">
          {/* Blocked Services - Large Display */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Blocked Services</CardTitle>
              <CardDescription>Communication and content services blocked in UAE</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {data.blockedServices.map((service: any, idx: any) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    className="flex items-center justify-between rounded-lg border border-red-500/30 bg-red-500/10 p-3"
                  >
                    <span className="text-sm text-slate-300">{service.service}</span>
                    <Ban className="h-4 w-4 text-red-400" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          {/* Source Credibility Matrix */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
              <CardDescription>Source reliability and data quality assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[350px]">
                <div className="space-y-2">
                  {data.sourceCredibilityMatrix.map((source: any, idx: any) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-slate-200 text-sm">{source.source}</p>
                        <p className="text-xs text-slate-500">Reliability: {source.reliability} | Type: {source.dataType}</p>
                      </div>
                      {getTierBadge(source.tier)}
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Sentiment Analysis */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Sentiment Analysis by Topic</CardTitle>
              <CardDescription>Source sentiment on press freedom and media topics</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[350px]">
                <div className="space-y-3">
                  {data.sentimentAnalysis.map((item: any, idx: any) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-200">{item.topic}</h4>
                        {getSentimentBadge(item.score, item.sentiment)}
                      </div>
                      <p className="text-xs text-slate-400">Source: {item.source} | Score: {item.score > 0 ? '+' : ''}{item.score}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* UAE Relevance Assessment */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">UAE Relevance Assessment</CardTitle>
              <CardDescription>Topic classification by relevance tier</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.uaeRelevanceAssessment.map((tier: any, idx: any) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        variant={tier.tier === 'Critical Relevance' ? 'destructive' : tier.tier === 'High Relevance' ? 'warning' : 'outline'}
                        className={tier.tier === 'Critical Relevance' ? 'bg-red-500/20 text-red-400 border-red-500/50' : tier.tier === 'High Relevance' ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' : ''}
                      >
                        {tier.tier}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tier.items.map((item: any, i: any) => (
                        <Badge key={i} variant="outline" className="text-xs bg-slate-700/50">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* URL Content Summaries */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Source URL Summaries</CardTitle>
              <CardDescription>Primary sources analyzed and their key content</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {data.urlContentSummaries.map((url: any, idx: any) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-slate-200 text-sm">{url.title}</p>
                        <Badge variant="outline" className="text-xs">{url.credibility}</Badge>
                      </div>
                      <p className="text-xs text-slate-400 mb-1">{url.content}</p>
                      <p className="text-xs text-slate-600 truncate">{url.url}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Enrichment Tab */}
        <TabsContent value="enrichment" className="space-y-6">
          {/* Enrichment Metadata */}
          <Card className="glass-card border-emerald-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Enrichment Metadata</CardTitle>
              <CardDescription>Data extraction statistics for 11-1 Media About Media</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">{data.urlsAnalyzed}</div>
                  <p className="text-sm text-slate-400">URLs Analyzed</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">{data.urlsSuccessfullyFetched}</div>
                  <p className="text-sm text-slate-400">Successfully Fetched</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">{data.dataPointsExtracted}</div>
                  <p className="text-sm text-slate-400">Data Points</p>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">{data.structuredTablesCreated}</div>
                  <p className="text-sm text-slate-400">Structured Tables</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center">
                Enrichment Date: {data.enrichmentDate}
              </p>
            </CardContent>
          </Card>

          {/* Search Queries Executed */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Data Completeness</CardTitle>
              <CardDescription>Extraction coverage metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Statistics</span>
                    <span className="font-medium text-emerald-400">90%</span>
                  </div>
                  <Progress value={90} className="h-3" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Entity Names</span>
                    <span className="font-medium text-emerald-400">87%</span>
                  </div>
                  <Progress value={87} className="h-3" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Quotes</span>
                    <span className="font-medium text-emerald-400">83%</span>
                  </div>
                  <Progress value={83} className="h-3" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Legal Articles</span>
                    <span className="font-medium text-emerald-400">80%</span>
                  </div>
                  <Progress value={80} className="h-3" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Regulatory Bodies</span>
                    <span className="font-medium text-emerald-400">100%</span>
                  </div>
                  <Progress value={100} className="h-3" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Media Outlets</span>
                    <span className="font-medium text-emerald-400">80%</span>
                  </div>
                  <Progress value={80} className="h-3" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
