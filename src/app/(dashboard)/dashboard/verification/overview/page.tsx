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
  Cpu,
  Building2,
  UserCog,
  Network,
  AlertOctagon,
} from 'lucide-react'
import {
  useVerificationOverviewData,
  selfReferenceDeepData,
  mediaAboutMediaData,
  cibMetrics,
  visualMultimediaExtendedData,
  omissionSilenceData,
  echoChamberFilterData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'

export default function VerificationOverviewPage() {
  const { data } = useVerificationOverviewData()

  // UAE Verification metrics from self-reference data
  const totalVerified = 12847
  const pendingReview = 342
  const accuracy = 94.7
  const avgResponseTime = '28 min'

  // Self-reference data extraction
  const { sourceCredibilityMatrix, uaeRelevanceAssessment, dataTables, entityRegistry, sentimentAnalysis, dashboardKPIs } = selfReferenceDeepData

  // Verification status data
  const statusData = [
    { name: 'Verified True', value: 62, color: CHART_COLORS.emerald },
    { name: 'Verified False', value: 18, color: CHART_COLORS.rose },
    { name: 'Misleading', value: 12, color: CHART_COLORS.gold },
    { name: 'Unverified', value: 8, color: CHART_COLORS.platinum },
  ]

  // Verification trend data
  const verificationTrendData = [
    { week: 'W1', verified: 234, accuracy: 91 },
    { week: 'W2', verified: 267, accuracy: 93 },
    { week: 'W3', verified: 312, accuracy: 92 },
    { week: 'W4', verified: 289, accuracy: 94 },
    { week: 'W5', verified: 345, accuracy: 95 },
    { week: 'W6', verified: 398, accuracy: 94.7 },
  ]

  // Category distribution data
  const categoryData = [
    { name: 'Politics', value: 28, color: CHART_COLORS.gold },
    { name: 'Economy', value: 24, color: CHART_COLORS.navy },
    { name: 'Health', value: 18, color: CHART_COLORS.emerald },
    { name: 'Social', value: 15, color: CHART_COLORS.platinum },
    { name: 'Security', value: 10, color: CHART_COLORS.rose },
    { name: 'Other', value: 5, color: CHART_COLORS.platinum },
  ]

  // Recent verifications
  const recentVerifications = [
    { id: 1, claim: 'UAE announces new economic stimulus package', source: 'Khaleej Times', result: 'VERIFIED TRUE', confidence: 96, time: '10 min ago' },
    { id: 2, claim: 'Dubai Metro extension to announced new areas', source: 'Social Media', result: 'VERIFIED FALSE', confidence: 89, time: '45 min ago' },
    { id: 3, claim: 'UAE ranked safest country in region', source: 'BBC Arabic', result: 'VERIFIED TRUE', confidence: 94, time: '1 hr ago' },
    { id: 4, claim: 'New visa regulations announced', source: 'Government Portal', result: 'VERIFIED TRUE', confidence: 98, time: '2 hr ago' },
    { id: 5, claim: 'UAE passport ranked most powerful', source: 'International Report', result: 'VERIFIED TRUE', confidence: 92, time: '3 hr ago' },
  ]

  // Source reliability ratings
  const sourceRatings = [
    { source: 'Official Government Sources', reliability: 98, submissions: 2341 },
    { source: 'Major News Agencies', reliability: 92, submissions: 4567 },
    { source: 'Local Media', reliability: 85, submissions: 3245 },
    { source: 'Social Media', reliability: 45, submissions: 8934 },
    { source: 'Blogs/Op-eds', reliability: 52, submissions: 1234 },
  ]

  // Self-reference surveillance data for metrics
  const surveillanceKPIs = dashboardKPIs.find(k => k.category === 'Surveillance Infrastructure KPIs')?.kpis || []
  const mediaIntelligenceKPIs = dashboardKPIs.find(k => k.category === 'National Media Intelligence KPIs')?.kpis || []
  const crisisResponseKPIs = dashboardKPIs.find(k => k.category === 'Crisis Response 2026 KPIs')?.kpis || []

  // Get tier badge variant
  const getTierBadge = (tier: number) => {
    switch (tier) {
      case 1: return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Tier {tier}</Badge>
      case 2: return <Badge className="bg-navy-500/20 text-navy-400 border-navy-500/50">Tier {tier}</Badge>
      case 3: return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50">Tier {tier}</Badge>
      default: return <Badge className="bg-platinum-500/20 text-platinum-400 border-platinum-500/50">Tier {tier}</Badge>
    }
  }

  // Get relevance badge variant
  const getRelevanceBadge = (relevance: string) => {
    switch (relevance) {
      case 'CRITICAL': return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">CRITICAL</Badge>
      case 'HIGH': return <Badge variant="warning" className="bg-orange-500/20 text-orange-400 border-orange-500/50">HIGH</Badge>
      case 'MEDIUM': return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50">MEDIUM</Badge>
      default: return <Badge variant="outline">LOW</Badge>
    }
  }

  const getResultBadge = (result: string) => {
    switch (result) {
      case 'VERIFIED TRUE': return <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">TRUE</Badge>
      case 'VERIFIED FALSE': return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">FALSE</Badge>
      case 'MISLEADING': return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">MISLEADING</Badge>
      default: return <Badge variant="outline" className="text-xs">PENDING</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="emerald" className="mb-2">V-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-emerald">Verification Overview</h1>
          <p className="mt-2 text-platinum-400">
            Fact-checking and content verification intelligence for UAE narratives
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald/50 text-emerald hover:bg-emerald/10">
            <Search className="h-4 w-4" />
            Fact-Check
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
            <CheckCircle className="h-4 w-4" />
            Submit Claim
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Verified"
          value={totalVerified}
          previousValue={totalVerified - 1247}
          icon={<Check className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Pending Review"
          value={pendingReview}
          previousValue={pendingReview + 45}
          icon={<Clock className="h-6 w-6" />}
          gradient="gold"
          status="warning"
        />
        <MetricCard
          title="Accuracy Rate"
          value={`${accuracy}%`}
          previousValue={accuracy - 1.2}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Avg Response Time"
          value={avgResponseTime}
          icon={<Timer className="h-6 w-6" />}
          gradient="indigo"
        />
      </div>

      {/* Self-Reference Deep Research Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Oyoon Cameras"
          value="300,000+"
          icon={<Eye className="h-6 w-6" />}
          gradient="emerald"
          status="error"
        />
        <MetricCard
          title="Project Raven Budget"
          value="$34M"
          icon={<Server className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Pegasus Numbers"
          value="50,000+"
          icon={<Smartphone className="h-6 w-6" />}
          gradient="denim"
          status="error"
        />
        <MetricCard
          title="Media Data/Day"
          value="Billions"
          icon={<Database className="h-6 w-6" />}
          gradient="gold"
          status="info"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recent">Recent Verifications</TabsTrigger>
          <TabsTrigger value="sources">Source Analysis</TabsTrigger>
          <TabsTrigger value="accuracy">Accuracy Metrics</TabsTrigger>
          <TabsTrigger value="surveillance">Surveillance Data</TabsTrigger>
          <TabsTrigger value="entities">Entity Registry</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="media">Media About Media</TabsTrigger>
          <TabsTrigger value="visual">Visual Multimedia</TabsTrigger>
          <TabsTrigger value="cib">CIB Operations</TabsTrigger>
          <TabsTrigger value="omission">Omission & Silence</TabsTrigger>
          <TabsTrigger value="echochamber">Echo Chambers</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Verification Overview" description="Fact-checking operations summary">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Verification Status</CardTitle>
                    <CardDescription>Distribution by verification result</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={statusData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Category Distribution</CardTitle>
                    <CardDescription>Claims by topic category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={categoryData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Weekly Verification Trend</CardTitle>
                  <CardDescription>Verifications completed and accuracy over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={verificationTrendData}
                    xAxisKey="week"
                    lines={[
                      { dataKey: 'verified', name: 'Verified', color: CHART_COLORS.emerald },
                      { dataKey: 'accuracy', name: 'Accuracy %', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Verification Methods</CardTitle>
                  <CardDescription>Techniques used for fact-checking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">45%</div>
                      <p className="text-sm text-platinum-400">Source Cross-ref</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-navy">28%</div>
                      <p className="text-sm text-platinum-400">Data Analysis</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">18%</div>
                      <p className="text-sm text-platinum-400">Expert Review</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-platinum">9%</div>
                      <p className="text-sm text-platinum-400">AI-Assisted</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Recent Verifications Tab */}
        <TabsContent value="recent" className="space-y-6">
          <GlassPanel title="Recent Verifications" description="Latest fact-checked claims">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Latest Claims</CardTitle>
                  <CardDescription>Recently verified information</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {recentVerifications.map((item) => (
                        <div key={item.id} className="flex items-start justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                          <div className="flex-1">
                            <p className="font-medium text-platinum-200">{item.claim}</p>
                            <p className="text-sm text-platinum-400 mt-1">Source: {item.source}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              {getResultBadge(item.result)}
                              <p className="text-xs text-platinum-400 mt-1">{item.time}</p>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-emerald-400">{item.confidence}%</div>
                              <p className="text-xs text-platinum-400">Confidence</p>
                            </div>
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

        {/* Source Analysis Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Source Analysis" description="Reliability ratings for information sources">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Reliability</CardTitle>
                  <CardDescription>Accuracy ratings by source type</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {sourceRatings.map((source, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                              <Shield className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{source.source}</p>
                              <p className="text-sm text-platinum-400">{source.submissions.toLocaleString()} submissions</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${source.reliability > 90 ? 'text-emerald-400' : source.reliability > 70 ? 'text-gold' : 'text-rose-400'}`}>
                              {source.reliability}%
                            </div>
                            <p className="text-xs text-platinum-400">Reliability</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Claims by Source Type</CardTitle>
                  <CardDescription>Volume of submissions per source category</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sourceRatings.map(s => ({ name: s.source.split(' ')[0], value: s.submissions }))}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Submissions', color: CHART_COLORS.emerald },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Accuracy Metrics Tab */}
        <TabsContent value="accuracy" className="space-y-6">
          <GlassPanel title="Accuracy Metrics" description="Verification quality and performance indicators">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Accuracy by Category</CardTitle>
                  <CardDescription>Verification accuracy broken down by topic</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={categoryData.map(c => ({ name: c.name, accuracy: Math.floor(Math.random() * 8) + 90 }))}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'accuracy', name: 'Accuracy %', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Quality Metrics</CardTitle>
                  <CardDescription>Detailed performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Overall Accuracy</span>
                        <span className="font-medium text-emerald-400">94.7%</span>
                      </div>
                      <Progress value={94.7} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">False Positive Rate</span>
                        <span className="font-medium text-emerald-400">2.3%</span>
                      </div>
                      <Progress value={97.7} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Completeness Score</span>
                        <span className="font-medium text-emerald-400">91.2%</span>
                      </div>
                      <Progress value={91.2} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-platinum-400">Timeliness Score</span>
                        <span className="font-medium text-emerald-400">88.5%</span>
                      </div>
                      <Progress value={88.5} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Surveillance Data Tab */}
        <TabsContent value="surveillance" className="space-y-6">
          <GlassPanel title="Surveillance Infrastructure" description="AI surveillance systems and programs">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Oyoon AI Surveillance</CardTitle>
                    <CardDescription>Dubai police surveillance network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-400">Cameras Deployed</span>
                        <span className="font-bold text-emerald-400">300,000+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-400">Real-time Recognition</span>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-400">AI Arrests (2018)</span>
                        <span className="font-bold text-emerald-400">319 suspects</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-400">Smart Police Stations</span>
                        <span className="font-bold text-emerald-400">27</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Falcon Eye System</CardTitle>
                    <CardDescription>Abu Dhabi surveillance coverage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-400">Coverage Areas</span>
                        <span className="font-bold text-navy-400">Abu Dhabi + Airport + Islands</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-400">Status</span>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-platinum-400">Cameras at Tourist Sites</span>
                        <span className="font-bold text-navy-400">5,000+</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Project Raven / DREAD Operations</CardTitle>
                  <CardDescription>UAE cyber-espionage programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-rose-400">$34M</div>
                      <p className="text-sm text-platinum-400">Annual Budget</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-rose-400">40+</div>
                      <p className="text-sm text-platinum-400">US Contractors</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-rose-400">2008</div>
                      <p className="text-sm text-platinum-400">Contract Start</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-rose-400">$1.685M</div>
                      <p className="text-sm text-platinum-400">Fines (2021)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">National Media Intelligence</CardTitle>
                  <CardDescription>Presight AI & NMO partnership metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">Billions</div>
                      <p className="text-sm text-platinum-400">Data Points/Day</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">AED 1B+</div>
                      <p className="text-sm text-platinum-400">Annual Efficiency</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">2M+</div>
                      <p className="text-sm text-platinum-400">Labor Hours Saved</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">100%</div>
                      <p className="text-sm text-platinum-400">Automation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Response 2026 — Iran Strikes</CardTitle>
                  <CardDescription>April 2026 missile attack statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-5">
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-rose-400">13</div>
                      <p className="text-sm text-platinum-400">Killed</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-orange-400">224</div>
                      <p className="text-sm text-platinum-400">Injured</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">537</div>
                      <p className="text-sm text-platinum-400">Missiles Intercepted</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">2,256</div>
                      <p className="text-sm text-platinum-400">Drones Intercepted</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-orange-400">21</div>
                      <p className="text-sm text-platinum-400">People Charged</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entity Registry Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Entity Registry" description="Government entities, surveillance programs, and key individuals">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Government Entities</CardTitle>
                  <CardDescription>Media regulation and surveillance bodies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {entityRegistry.governmentEntities.map((entity, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                              <Building2 className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{entity.entity}</p>
                              <p className="text-sm text-platinum-400">{entity.function}</p>
                            </div>
                          </div>
                          {entity.acronym && (
                            <Badge variant="outline" className="text-xs">{entity.acronym}</Badge>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Surveillance Programs</CardTitle>
                  <CardDescription>Active and terminated surveillance operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {entityRegistry.surveillancePrograms.map((program, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                              <Eye className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{program.program}</p>
                              <p className="text-sm text-platinum-400">{program.type} — {program.operator}</p>
                            </div>
                          </div>
                          <Badge variant={program.status === 'Active' ? 'default' : 'outline'} className={program.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : ''}>
                            {program.status}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Individuals</CardTitle>
                  <CardDescription>Targeted persons and operatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {entityRegistry.keyIndividuals.map((person, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue/20 text-blue">
                              <UserCog className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{person.name}</p>
                              <p className="text-sm text-platinum-400">{person.role} — {person.affiliation}</p>
                            </div>
                          </div>
                          {getRelevanceBadge(person.relevance?.split('(')[0]?.trim() || 'MEDIUM')}
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis by Topic" description="Emotional tone and narrative analysis from self-reference data">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Relevance Assessment</CardTitle>
                  <CardDescription>Topic classification by relevance level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="grid gap-3">
                      {uaeRelevanceAssessment.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-platinum-200">{item.topic}</p>
                            <p className="text-sm text-platinum-400 mt-1">{item.classification}</p>
                          </div>
                          {getRelevanceBadge(item.uaeRelevance)}
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Topic</CardTitle>
                  <CardDescription>Emotional tone and key narratives</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {sentimentAnalysis.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-platinum-200">{item.topic}</h4>
                            <Badge variant={item.overallSentiment.includes('Negative') ? 'destructive' : item.overallSentiment.includes('Positive') ? 'default' : 'outline'} className={item.overallSentiment.includes('Negative') ? 'bg-red-500/20 text-red-400 border-red-500/50' : ''}>
                              {item.overallSentiment.split('(')[0].trim()}
                            </Badge>
                          </div>
                          <p className="text-sm text-platinum-400 mb-2">{item.keyNarrative}</p>
                          <div className="flex items-center gap-2 text-xs text-platinum-500">
                            <span className="text-emerald-400">+</span>
                            <span>{item.positiveSources || 'None'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-platinum-500 mt-1">
                            <span className="text-rose-400">-</span>
                            <span>{item.negativeSources || 'None'}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>Top 20 sources by tier and credibility</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {sourceCredibilityMatrix.slice(0, 20).map((source, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.02 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-platinum-200 text-sm">{source.name}</p>
                            <p className="text-xs text-platinum-500">{source.credibility}</p>
                          </div>
                          {getTierBadge(source.tier)}
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Media About Media Tab */}
        <TabsContent value="media" className="space-y-6">
          <GlassPanel title="Media About Media" description="Press freedom, censorship, and media control analysis">
            <div className="space-y-6">
              {/* Media KPIs */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Press Freedom Index"
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
                  icon={<Globe className="h-6 w-6" />}
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
                  title="Fake Twitter Accounts"
                  value="91%"
                  icon={<Network className="h-6 w-6" />}
                  gradient="rose"
                  status="error"
                />
              </div>

              {/* Al-Roeya Incident */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Al-Roeya Incident (September 2022)</CardTitle>
                  <CardDescription>Dissolution after firing journalists for economic impact story</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-rose-400">60-90</div>
                      <p className="text-sm text-platinum-400">Journalists Lost Jobs</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-platinum-200">Sep 13, 2022</div>
                      <p className="text-sm text-platinum-400">Incident Date</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-platinum-200">IMI</div>
                      <p className="text-sm text-platinum-400">Publisher (Sheikh Mansour)</p>
                    </div>
                    <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center">
                      <div className="text-lg font-bold text-rose-400">Economic Impact Story</div>
                      <p className="text-sm text-platinum-400">Trigger: Fuel prices article</p>
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
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {mediaAboutMediaData.extendedData?.mediaOutletOwnership.map((outlet, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                              <Building2 className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{outlet.outlet}</p>
                              <p className="text-sm text-platinum-400">{outlet.owner}</p>
                            </div>
                          </div>
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 text-xs">
                            {outlet.ownershipType}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Surveillance Infrastructure */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Surveillance Infrastructure</CardTitle>
                  <CardDescription>AI surveillance systems and camera networks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {mediaAboutMediaData.extendedData?.surveillanceInfrastructure.map((sys, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Eye className="h-5 w-5 text-rose-400" />
                          <h4 className="font-semibold text-platinum-200">{sys.system}</h4>
                        </div>
                        <p className="text-sm text-platinum-400 mb-1">Location: {sys.location}</p>
                        <p className="text-sm text-platinum-400 mb-1">Scale: {sys.scale}</p>
                        <p className="text-xs text-platinum-500">{sys.capability}</p>
                      </motion.div>
                    ))}
                  </div>
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
                      {mediaAboutMediaData.extendedData?.journalistRestrictions.map((restriction, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                              <AlertOctagon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{restriction.restrictionType}</p>
                              <p className="text-sm text-platinum-400">{restriction.description}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">{restriction.frequency}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Content Standards */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Federal Decree Law No. 55/2023 — Content Standards</CardTitle>
                  <CardDescription>20 mandatory content standards for media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {mediaAboutMediaData.extendedData?.contentStandards.map((standard, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.03 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                      >
                        <div className="text-xs text-platinum-500 mb-1">Standard {standard.standardNumber}</div>
                        <p className="text-sm text-platinum-300">{standard.requirement}</p>
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
                    {mediaAboutMediaData.extendedData?.penaltyStructure.map((penalty, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-rose-400">{penalty.fine}</div>
                        <p className="text-sm text-platinum-400 mt-1">{penalty.offense}</p>
                        <p className="text-xs text-platinum-500 mt-2">{penalty.additionalPenalties}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Audience Trust Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Audience Trust Metrics</CardTitle>
                  <CardDescription>Media credibility and trust levels among Emiratis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {mediaAboutMediaData.extendedData?.audienceTrustMetrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="text-2xl font-bold text-emerald-400">{metric.trustLevel}</div>
                        <p className="text-sm text-platinum-300 mt-1">{metric.source}</p>
                        <p className="text-xs text-platinum-500 mt-1">Trend: {metric.trend}</p>
                      </motion.div>
                    ))}
                  </div>
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
                    {mediaAboutMediaData.extendedData?.blockedServices.map((service, idx) => (
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

              {/* Spyware Programs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Spyware & Surveillance Programs</CardTitle>
                  <CardDescription>Targeted surveillance operations documented by HRW</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {mediaAboutMediaData.extendedData?.spywarePrograms.map((program, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                              <Cpu className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{program.program}</p>
                              <p className="text-sm text-platinum-400">Operator: {program.operator}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">Target: {program.target}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>Source reliability and data quality assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {mediaAboutMediaData.extendedData?.sourceCredibilityMatrix.map((source, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-platinum-200 text-sm">{source.source}</p>
                            <p className="text-xs text-platinum-500">Reliability: {source.reliability} | Type: {source.dataType}</p>
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
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {mediaAboutMediaData.extendedData?.sentimentAnalysis.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-platinum-200">{item.topic}</h4>
                            <Badge
                              variant={item.score < 0 ? 'destructive' : item.score > 0 ? 'default' : 'outline'}
                              className={item.score < 0 ? 'bg-red-500/20 text-red-400 border-red-500/50' : item.score > 0 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : ''}
                            >
                              {item.sentiment} ({item.score > 0 ? '+' : ''}{item.score})
                            </Badge>
                          </div>
                          <p className="text-xs text-platinum-400">Source: {item.source}</p>
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
                    {mediaAboutMediaData.extendedData?.uaeRelevanceAssessment.map((tier, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
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
                          {tier.items.map((item, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-platinum-700/50">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Summary Data Points */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Summary Data Points</CardTitle>
                  <CardDescription>Key metrics extracted from source documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {mediaAboutMediaData.extendedData?.summaryDataPoints.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.02 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-2"
                        >
                          <div className="flex-1">
                            <p className="text-sm text-platinum-300">{point.metric}</p>
                            <p className="text-xs text-platinum-500">{point.category} | Source: {point.source}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-emerald-400">{point.value}</p>
                            <p className="text-xs text-platinum-500">{point.extractionStatus}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Enrichment Metadata */}
              <Card className="glass-card border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg">Enrichment Metadata</CardTitle>
                  <CardDescription>Data extraction statistics for 11-1 Media About Media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{mediaAboutMediaData.extendedData?.urlsAnalyzed}</div>
                      <p className="text-sm text-platinum-400">URLs Analyzed</p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{mediaAboutMediaData.extendedData?.urlsSuccessfullyFetched}</div>
                      <p className="text-sm text-platinum-400">Successfully Fetched</p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{mediaAboutMediaData.extendedData?.dataPointsExtracted}</div>
                      <p className="text-sm text-platinum-400">Data Points</p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{mediaAboutMediaData.extendedData?.structuredTablesCreated}</div>
                      <p className="text-sm text-platinum-400">Structured Tables</p>
                    </div>
                  </div>
                  <p className="text-xs text-platinum-500 mt-4 text-center">
                    Enrichment Date: {mediaAboutMediaData.extendedData?.enrichmentDate}
                  </p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* CIB Operations Tab */}
        <TabsContent value="cib" className="space-y-6">
          <GlassPanel title="Coordinated Inauthentic Behavior (CIB)" description="Documented CIB operations involving UAE and regional actors">
            <div className="space-y-6">
              {/* CIB KPI Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                <MetricCard
                  title="MENA Takedowns"
                  value={cibMetrics.kpis.totalMenaTakedowns}
                  icon={<Globe className="h-6 w-6" />}
                  gradient="emerald"
                  status="error"
                />
                <MetricCard
                  title="UAE-Linked Ops"
                  value={cibMetrics.kpis.uaeLinkedTakedowns}
                  icon={<Network className="h-6 w-6" />}
                  gradient="rose"
                  status="error"
                />
                <MetricCard
                  title="Ad Spend (Aug 2019)"
                  value={`$${(cibMetrics.kpis.combinedAdSpendAug2019 / 1000).toFixed(0)}K`}
                  icon={<TrendingUp className="h-6 w-6" />}
                  gradient="gold"
                  status="warning"
                />
                <MetricCard
                  title="Avg Accounts/Takedown"
                  value={cibMetrics.kpis.avgAccountsPerGulfTakedown}
                  icon={<Users className="h-6 w-6" />}
                  gradient="denim"
                  status="info"
                />
              </motion.div>

              {/* MENA Takedowns by Origin */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">MENA CIB Takedowns by Origin (2018-2021)</CardTitle>
                  <CardDescription>46 documented operations across the Middle East</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: 'Iran', value: cibMetrics.kpis.iranLinkedTakedowns, color: CHART_COLORS.rose },
                      { name: 'Egypt', value: cibMetrics.kpis.egyptLinkedTakedowns, color: CHART_COLORS.gold },
                      { name: 'UAE', value: cibMetrics.kpis.uaeLinkedTakedowns, color: CHART_COLORS.emerald },
                      { name: 'Saudi', value: cibMetrics.kpis.saudiLinkedTakedowns, color: CHART_COLORS.navy },
                      { name: 'Other', value: 5, color: CHART_COLORS.platinum },
                    ]}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Takedowns', color: CHART_COLORS.rose }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Takedown Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Documented Takedowns Timeline</CardTitle>
                  <CardDescription>Major CIB operations with UAE involvement</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {cibMetrics.takedowns.map((takedown, idx) => (
                        <motion.div
                          key={takedown.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-platinum-200">{takedown.date} — {takedown.origin}</h4>
                              <p className="text-sm text-platinum-400">Attribution: {takedown.attribution}</p>
                            </div>
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                              {takedown.accounts} Accounts
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                            <div className="text-center p-2 rounded bg-platinum-700/50">
                              <div className="text-lg font-bold text-emerald-400">{takedown.accounts}</div>
                              <p className="text-xs text-platinum-400">Accounts</p>
                            </div>
                            <div className="text-center p-2 rounded bg-platinum-700/50">
                              <div className="text-lg font-bold text-emerald-400">{takedown.pages}</div>
                              <p className="text-xs text-platinum-400">Pages</p>
                            </div>
                            <div className="text-center p-2 rounded bg-platinum-700/50">
                              <div className="text-lg font-bold text-emerald-400">{(takedown.pageFollowers / 1000000).toFixed(1)}M</div>
                              <p className="text-xs text-platinum-400">Followers</p>
                            </div>
                            <div className="text-center p-2 rounded bg-platinum-700/50">
                              <div className="text-lg font-bold text-gold">${(takedown.adSpend / 1000).toFixed(0)}K</div>
                              <p className="text-xs text-platinum-400">Ad Spend</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {takedown.targets.map((target, i) => (
                              <Badge key={i} variant="outline" className="text-xs bg-platinum-700/50">
                                {target}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Detection Indicators */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">CIB Detection Indicators</CardTitle>
                  <CardDescription>Red flags for identifying coordinated inauthentic behavior</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cibMetrics.detectionIndicators.map((indicator, idx) => (
                      <motion.div
                        key={indicator.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">{indicator.id}</Badge>
                          <h4 className="font-semibold text-platinum-200">{indicator.name}</h4>
                        </div>
                        <p className="text-sm text-platinum-400 mb-2">Threshold: {indicator.threshold}</p>
                        <Badge variant="outline" className="text-xs">{indicator.action}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tactical Methods */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">CIB Tactical Methods</CardTitle>
                  <CardDescription>Techniques employed in coordinated inauthentic operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {cibMetrics.tactics.map((tactic, idx) => (
                        <motion.div
                          key={tactic.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">{tactic.id}</Badge>
                            <div>
                              <p className="font-semibold text-platinum-200">{tactic.name}</p>
                              <p className="text-sm text-platinum-400">{tactic.description}</p>
                            </div>
                          </div>
                          <Badge
                            variant={tactic.frequency === 'Critical' ? 'destructive' : tactic.frequency === 'High' ? 'warning' : 'outline'}
                            className={tactic.frequency === 'Critical' ? 'bg-red-500/20 text-red-400 border-red-500/50' : tactic.frequency === 'High' ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' : ''}
                          >
                            {tactic.frequency}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Marketing Firms Registry */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Marketing Firms in CIB Operations</CardTitle>
                  <CardDescription>Entities linked to coordinated influence operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {cibMetrics.marketingFirms.map((firm, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                              <Building2 className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{firm.name}</p>
                              <p className="text-sm text-platinum-400">{firm.country} • {firm.role}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-platinum-400">{firm.operationDate}</p>
                            <Badge
                              variant={firm.status === 'Discontinued' || firm.status === 'Website offline' ? 'destructive' : 'outline'}
                              className="text-xs mt-1"
                            >
                              {firm.status}
                            </Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Narrative Themes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">CIB Narrative Themes</CardTitle>
                  <CardDescription>Primary narratives documented in Gulf CIB operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {cibMetrics.narrativeThemes.map((narrative, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <p className="font-medium text-platinum-200">{narrative.theme}</p>
                            <Badge
                              variant={narrative.sentiment === 'Negative' ? 'destructive' : 'default'}
                              className={narrative.sentiment === 'Negative' ? 'bg-red-500/20 text-red-400 border-red-500/50' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'}
                            >
                              {narrative.sentiment}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-platinum-400">
                            <span>Target: <span className="text-platinum-300">{narrative.target}</span></span>
                            <span>Source: <span className="text-platinum-300">{narrative.sourceType}</span></span>
                            <Badge variant="outline" className="text-xs">{narrative.frequency}</Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Platform Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform CIB Policy Comparison</CardTitle>
                  <CardDescription>Enforcement strength across major social platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-platinum-700">
                          <th className="text-left p-3 text-platinum-400">Platform</th>
                          <th className="text-left p-3 text-platinum-400">Policy Strength</th>
                          <th className="text-left p-3 text-platinum-400">Enforcement</th>
                          <th className="text-left p-3 text-platinum-400">Transparency</th>
                          <th className="text-left p-3 text-platinum-400">Detection</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cibMetrics.platformComparison.map((platform, idx) => (
                          <motion.tr
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="border-b border-platinum-700/50"
                          >
                            <td className="p-3 font-semibold text-platinum-200">{platform.platform}</td>
                            <td className="p-3">
                              <Badge className={platform.policyStrength === 'Comprehensive' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50'}>
                                {platform.policyStrength}
                              </Badge>
                            </td>
                            <td className="p-3 text-platinum-300">{platform.enforcement}</td>
                            <td className="p-3">
                              <Badge className={platform.transparency === 'High' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : platform.transparency === 'Moderate' ? 'bg-amber-500/20 text-amber-400 border-amber-500/50' : 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50'}>
                                {platform.transparency}
                              </Badge>
                            </td>
                            <td className="p-3">
                              <Badge className={platform.detectionCapability === 'Advanced' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : platform.detectionCapability === 'Basic' ? 'bg-amber-500/20 text-amber-400 border-amber-500/50' : 'bg-navy-500/20 text-navy-400 border-navy-500/50'}>
                                {platform.detectionCapability}
                              </Badge>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* UAE Threat Levels */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Threat Level Assessment</CardTitle>
                  <CardDescription>CIB threat levels by target country</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cibMetrics.uaeThreatLevels.map((threat, idx) => (
                      <motion.div
                        key={threat.target}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-platinum-200">{threat.target}</h4>
                          <Badge
                            variant={threat.threatLevel === 'Critical' ? 'destructive' : threat.threatLevel === 'High' ? 'warning' : 'outline'}
                            className={threat.threatLevel === 'Critical' ? 'bg-red-500/20 text-red-400 border-red-500/50' : threat.threatLevel === 'High' ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' : ''}
                          >
                            {threat.threatLevel}
                          </Badge>
                        </div>
                        <p className="text-sm text-platinum-400 mb-2">{threat.primaryNarrative}</p>
                        <p className="text-xs text-platinum-500">Engagement: {threat.engagementLevel}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CIB Categories */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">CIB Categories</CardTitle>
                  <CardDescription>Academic classification of coordinated inauthentic behavior</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {cibMetrics.cibCategories.map((category, idx) => (
                        <motion.div
                          key={category.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">{category.id}</Badge>
                            <h4 className="font-semibold text-platinum-200">{category.name}</h4>
                          </div>
                          <p className="text-sm text-platinum-400 mb-2">{category.description}</p>
                          <Badge variant="outline" className="text-xs">Prevalence: {category.prevalence}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Source Credibility */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>Source reliability classification for CIB research</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {cibMetrics.sourceCredibility.map((source, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div>
                            <Badge className="mb-1 bg-navy-500/20 text-navy-400 border-navy-500/50">{source.tier}</Badge>
                            <p className="font-semibold text-platinum-200">{source.sourceType}</p>
                            <p className="text-sm text-platinum-400">{source.examples}</p>
                          </div>
                          <Badge className={source.reliability === 'Very High' || source.reliability === 'High' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'bg-amber-500/20 text-amber-400 border-amber-500/50'}>
                            {source.reliability}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Visual Multimedia Tab */}
        <TabsContent value="visual" className="space-y-6">
          <GlassPanel title="Visual & Multimedia Content" description="AI-generated content, deepfakes, viral media, and visual misinformation">
            <div className="space-y-6">
              {/* Visual Multimedia Key Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                <MetricCard
                  title="Deepfake Increase"
                  value="+900%"
                  icon={<AlertTriangle className="h-6 w-6" />}
                  gradient="rose"
                  status="error"
                />
                <MetricCard
                  title="Fake News Spread"
                  value="70%"
                  previousValue={30}
                  unit="more than genuine"
                  icon={<Globe className="h-6 w-6" />}
                  gradient="gold"
                  status="warning"
                />
                <MetricCard
                  title="Misinformation Rate"
                  value="~70%"
                  unit="viral videos"
                  icon={<AlertOctagon className="h-6 w-6" />}
                  gradient="denim"
                  status="error"
                />
                <MetricCard
                  title="Cloud Seeding Missions"
                  value="247"
                  unit="(2019)"
                  icon={<Activity className="h-6 w-6" />}
                  gradient="emerald"
                  status="success"
                />
              </motion.div>

              {/* Deepfake KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Deepfake & Misinformation KPIs</CardTitle>
                  <CardDescription>Key threat indicators from visual multimedia research</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {visualMultimediaExtendedData.deepfakeKPIs.map((kpi, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center"
                      >
                        <div className={`text-2xl font-bold ${kpi.severity === 'Critical' ? 'text-rose-400' : 'text-orange-400'}`}>
                          {kpi.value}
                        </div>
                        <p className="text-sm text-platinum-400 mt-1">{kpi.kpi}</p>
                        <Badge className={`mt-2 text-xs ${kpi.severity === 'Critical' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' : 'bg-orange-500/20 text-orange-400 border-orange-500/50'}`}>
                          {kpi.severity}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Viral Content Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Viral Content Metrics</CardTitle>
                  <CardDescription>Engagement data from social media monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {visualMultimediaExtendedData.viralContentMetrics.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.sentiment === 'positive' ? 'bg-emerald/20 text-emerald' : item.sentiment === 'negative' ? 'bg-rose/20 text-rose' : 'bg-blue/20 text-blue'}`}>
                              <Globe className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{item.contentType}</p>
                              <p className="text-sm text-platinum-400">{item.platform} - {item.metric}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-emerald-400">
                              {item.value.toLocaleString()}
                            </div>
                            <p className="text-xs text-platinum-500">{item.date}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Threat Dashboard */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Threat Dashboard</CardTitle>
                  <CardDescription>Visual multimedia threats by type and severity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {visualMultimediaExtendedData.threatDashboardKPIs.map((threat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${threat.uaeRelevance === 'Critical' ? 'bg-rose/20 text-rose' : 'bg-orange/20 text-orange'}`}>
                            <AlertTriangle className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-platinum-200">{threat.threatType}</p>
                            <p className="text-sm text-platinum-400">{threat.keyFinding}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={`${threat.fetchStatus === 'SUCCESS' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50'}`}>
                            {threat.fetchStatus}
                          </Badge>
                          {getTierBadge(threat.sourceTier)}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Two Column: Cloud Seeding & Logo Branding */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Cloud Seeding Program</CardTitle>
                    <CardDescription>Weather modification operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3 text-center">
                          <div className="text-xl font-bold text-emerald-400">{visualMultimediaExtendedData.cloudSeedingData.missionsConducted}</div>
                          <p className="text-xs text-platinum-400">Missions (2019)</p>
                        </div>
                        <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3 text-center">
                          <div className="text-xl font-bold text-navy-400">{visualMultimediaExtendedData.cloudSeedingData.costPerOperation}</div>
                          <p className="text-xs text-platinum-400">Cost/Operation</p>
                        </div>
                        <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3 text-center">
                          <div className="text-xl font-bold text-cyan-400">{visualMultimediaExtendedData.cloudSeedingData.effectivenessClear}</div>
                          <p className="text-xs text-platinum-400">Effectiveness (Clear)</p>
                        </div>
                        <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3 text-center">
                          <div className="text-xl font-bold text-platinum-400">{visualMultimediaExtendedData.cloudSeedingData.aircraft}</div>
                          <p className="text-xs text-platinum-400">Aircraft Fleet</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-platinum-400">Technology</span>
                          <span className="text-platinum-300">Hygroscopic (KCl, NaCl)</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-platinum-400">Weather Stations</span>
                          <span className="text-platinum-300">{visualMultimediaExtendedData.cloudSeedingData.weatherStations} networked</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-platinum-400">Doppler Radars</span>
                          <span className="text-platinum-300">{visualMultimediaExtendedData.cloudSeedingData.dopplerRadars} stationary + 1 mobile</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-platinum-400">Drone Technology</span>
                          <span className="text-platinum-300">Since 2021</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Logo & Branding</CardTitle>
                    <CardDescription>Official UAE visual identity regulations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border border-emerald/30 bg-emerald/10 p-4">
                        <h4 className="font-semibold text-emerald-400">UAE 50-Year Logo: &quot;7 Lines&quot;</h4>
                        <div className="mt-2 space-y-1 text-sm text-platinum-300">
                          <p>10.6 million votes cast</p>
                          <p>49 Emirati designers</p>
                          <p>Symbolizes unity of seven emirates</p>
                        </div>
                      </div>
                      <div className="rounded-lg border border-gold/30 bg-gold/10 p-4">
                        <h4 className="font-semibold text-gold-400">Dubai Emblem Law 2025</h4>
                        <div className="mt-2 space-y-1 text-sm text-platinum-300">
                          <p>Up to 5 years imprisonment</p>
                          <p>Fines: AED 100K - 500K</p>
                          <p>Special permission required</p>
                        </div>
                      </div>
                      <div className="rounded-lg border border-blue/30 bg-blue/10 p-4">
                        <h4 className="font-semibold text-navy-400">Eid Al Etihad 2025</h4>
                        <div className="mt-2 space-y-1 text-sm text-platinum-300">
                          <p>54th Union Anniversary</p>
                          <p>Theme: &quot;United&quot;</p>
                          <p>Nov 3 - Dec 2, 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sentiment Analysis by Topic */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Analysis by Topic</CardTitle>
                  <CardDescription>Emotional breakdown of visual multimedia content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {visualMultimediaExtendedData.sentimentAnalysisByTopic.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-platinum-200">{item.topic}</h4>
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                            {item.dominantNarrative}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <span className="text-emerald-400">+{item.positive}%</span>
                            <span className="text-platinum-500">positive</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-rose-400">-{item.negative}%</span>
                            <span className="text-platinum-500">negative</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-platinum-400">{item.neutral}%</span>
                            <span className="text-platinum-500">neutral</span>
                          </div>
                        </div>
                        <p className="text-xs text-platinum-500 mt-2">Source: {item.source}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>Visual multimedia sources by tier and reliability</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {visualMultimediaExtendedData.sourceCredibilityMatrix.slice(0, 12).map((source, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-platinum-200 text-sm">{source.name}</p>
                            <p className="text-xs text-platinum-500">{source.type}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={`${source.fetchStatus === 'SUCCESS' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50'}`}>
                              {source.fetchStatus}
                            </Badge>
                            {getTierBadge(source.tier)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Entity Registry & Reporting Channels */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Entity Registry</CardTitle>
                    <CardDescription>Key entities in visual multimedia landscape</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {visualMultimediaExtendedData.entityRegistry.slice(0, 10).map((entity, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-2"
                          >
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4 text-emerald" />
                              <span className="text-sm text-platinum-200">{entity.entity}</span>
                            </div>
                            <Badge className={`text-xs ${entity.uaeRelevance === 'Critical' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' : entity.uaeRelevance === 'High' ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' : 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50'}`}>
                              {entity.uaeRelevance}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Reporting Channels</CardTitle>
                    <CardDescription>Official channels for reporting visual misinformation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {visualMultimediaExtendedData.reportingChannels.map((channel, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue/20 text-blue">
                              <Shield className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-platinum-200">{channel.agency}</p>
                              <p className="text-xs text-platinum-400">{channel.platform}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Verification Methods & Fake Content Types */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Verification Methods</CardTitle>
                    <CardDescription>Priority steps for content verification</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {visualMultimediaExtendedData.verificationMethods.map((method, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 rounded-lg border border-platinum-700 bg-platinum-800/50 p-2"
                        >
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald/20 text-emerald text-xs font-bold">
                            {method.priority}
                          </div>
                          <span className="text-sm text-platinum-300">{method.method}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Fake Content Types</CardTitle>
                    <CardDescription>Categories of visual misinformation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {visualMultimediaExtendedData.fakeContentTypes.map((type, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <AlertOctagon className="h-5 w-5 text-rose" />
                          <div>
                            <p className="text-sm font-medium text-platinum-200">{type.type}</p>
                            <p className="text-xs text-platinum-400">{type.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Reverse Image Search Targets */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Reverse Image Search Targets</CardTitle>
                  <CardDescription>High-risk landmarks for visual manipulation monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {visualMultimediaExtendedData.reverseImageSearchTargets.map((target, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-platinum-200">{target.landmark}</h4>
                          <Badge className={`${target.riskLevel === 'Critical' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' : target.riskLevel === 'High' ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' : 'bg-amber-500/20 text-amber-400 border-amber-500/50'}`}>
                            {target.riskLevel}
                          </Badge>
                        </div>
                        <p className="text-xs text-platinum-400">{target.manipulationHistory}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Hashtag Registry */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Hashtag Registry</CardTitle>
                  <CardDescription>Tracked hashtags in visual multimedia monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {visualMultimediaExtendedData.hashtagRegistry.map((tag, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.02 }}
                      >
                        <Badge
                          className={`cursor-pointer ${tag.usageCount === 'High' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : tag.usageCount === 'Medium' ? 'bg-navy-500/20 text-navy-400 border-navy-500/50' : 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50'}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag.hashtag}
                          <span className="ml-1 text-xs opacity-60">{tag.context}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* KPI Summary Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">KPI Summary</CardTitle>
                  <CardDescription>Key statistics from visual multimedia research</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {visualMultimediaExtendedData.kpiSummaryTable.map((kpi, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.02 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div>
                            <p className="text-sm font-medium text-platinum-200">{kpi.category}</p>
                            <p className="text-xs text-platinum-500">{kpi.source} - {kpi.date}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-emerald-400">{kpi.statistic}</span>
                            {getTierBadge(kpi.tier)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Execution Metadata */}
              <Card className="glass-card border-emerald/30">
                <CardHeader>
                  <CardTitle className="text-lg">Research Execution Summary</CardTitle>
                  <CardDescription>Visual multimedia data enrichment statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-emerald/30 bg-emerald/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{visualMultimediaExtendedData.executionMetadata.totalUrls}</div>
                      <p className="text-sm text-platinum-400">Total URLs</p>
                    </div>
                    <div className="rounded-lg border border-emerald/30 bg-emerald/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{visualMultimediaExtendedData.executionMetadata.successfullyFetched}</div>
                      <p className="text-sm text-platinum-400">Successful Fetches</p>
                    </div>
                    <div className="rounded-lg border border-rose/30 bg-rose/10 p-4 text-center">
                      <div className="text-2xl font-bold text-rose-400">{visualMultimediaExtendedData.executionMetadata.blockedInaccessible}</div>
                      <p className="text-sm text-platinum-400">Blocked/Inaccessible</p>
                    </div>
                    <div className="rounded-lg border border-blue/30 bg-blue/10 p-4 text-center">
                      <div className="text-2xl font-bold text-navy-400">{visualMultimediaExtendedData.executionMetadata.fetchRate}</div>
                      <p className="text-sm text-platinum-400">Fetch Rate</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <span className="text-platinum-400">Data Points: </span>
                      <span className="font-bold text-emerald-400">{visualMultimediaExtendedData.executionMetadata.dataPointsExtracted}</span>
                    </div>
                    <div>
                      <span className="text-platinum-400">Entities: </span>
                      <span className="font-bold text-emerald-400">{visualMultimediaExtendedData.executionMetadata.entitiesCatalogued}</span>
                    </div>
                    <div>
                      <span className="text-platinum-400">Topics: </span>
                      <span className="font-bold text-emerald-400">{visualMultimediaExtendedData.executionMetadata.topicsAnalyzed}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Omission & Silence Tab */}
        <TabsContent value="omission" className="space-y-6">
          <GlassPanel title="Omission & Silence Detection" description="Media suppression, censorship patterns, and information control analysis">
            <div className="space-y-6">
              {/* Omission & Silence KPIs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                <MetricCard
                  title="RSF Press Freedom"
                  value="164"
                  unit="/180"
                  icon={<Globe className="h-6 w-6" />}
                  gradient="rose"
                  status="error"
                />
                <MetricCard
                  title="Internet Freedom"
                  value="28"
                  unit="/100"
                  icon={<Globe className="h-6 w-6" />}
                  gradient="rose"
                  status="error"
                />
                <MetricCard
                  title="Global Freedom"
                  value="18"
                  unit="/100"
                  icon={<Globe className="h-6 w-6" />}
                  gradient="rose"
                  status="error"
                />
                <MetricCard
                  title="Social Media Arrests"
                  value="375+"
                  icon={<Users className="h-6 w-6" />}
                  gradient="rose"
                  status="error"
                />
              </motion.div>

              {/* RSF Ranking History */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">RSF World Press Freedom Index — UAE Ranking History</CardTitle>
                  <CardDescription>Press freedom decline 2023-2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={omissionSilenceData.extendedData?.rsfRankingHistory.map(r => ({
                      name: String(r.year),
                      score: r.score === 'N/A' ? 0 : parseFloat(r.score) || 0,
                      rank: parseInt(r.rank.split('/')[0]) || 0
                    })) || []}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'score', name: 'Score', color: CHART_COLORS.rose },
                      { dataKey: 'rank', name: 'Rank (inverted)', color: CHART_COLORS.gold }
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Freedom on the Net 2025 */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Freedom on the Net 2025 — Category Breakdown</CardTitle>
                  <CardDescription>Internet freedom assessment: 28/100 "Not Free"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {omissionSilenceData.extendedData?.freedomOnTheNet2025.map((cat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-platinum-400">{cat.category}</span>
                          <span className="font-medium text-platinum-200">{cat.score}/{cat.max}</span>
                        </div>
                        <Progress value={(cat.score / cat.max) * 100} className="h-3" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gulf Media Crackdown Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Gulf Media Crackdown — Regional Comparison</CardTitle>
                  <CardDescription>RSF 2025 Rankings across GCC countries</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={omissionSilenceData.extendedData?.gulfMediaCrackdown.map(c => ({
                      name: c.country,
                      score: parseFloat(c.score) || 0,
                      rank: parseInt(c.rsfRank.split('/')[0]) || 0
                    })) || []}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'score', name: 'Score', color: CHART_COLORS.rose }
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Enforcement KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Enforcement KPIs — Iran Strikes Period (Feb-March 2026)</CardTitle>
                  <CardDescription>Social media arrests and account blocking during conflict</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {omissionSilenceData.extendedData?.enforcementKPIs.map((kpi, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-rose-400">{kpi.value}</div>
                        <p className="text-sm text-platinum-400 mt-1">{kpi.kpi}</p>
                        {kpi.period && <p className="text-xs text-platinum-500 mt-1">{kpi.period}</p>}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Omission Patterns */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Omission Patterns Detected</CardTitle>
                  <CardDescription>Systematic information suppression mechanisms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {omissionSilenceData.extendedData?.omissionPatterns.map((pattern, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                              <AlertOctagon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{pattern.pattern}</p>
                              <p className="text-sm text-platinum-400">{pattern.evidenceBase}</p>
                            </div>
                          </div>
                          <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                            {pattern.severity}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Silence Mechanisms */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Silence Mechanisms</CardTitle>
                  <CardDescription>Multi-layered suppression infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {omissionSilenceData.extendedData?.silenceMechanisms.map((mech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Lock className="h-5 w-5 text-rose-400" />
                          <h4 className="font-semibold text-platinum-200">{mech.mechanism}</h4>
                        </div>
                        <p className="text-sm text-platinum-400 mb-2">{mech.implementation}</p>
                        <Badge variant="outline" className="text-xs">{mech.scale}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Comparative Omission Evidence */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Comparative Omission Evidence</CardTitle>
                  <CardDescription>International vs UAE domestic coverage gaps</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {omissionSilenceData.extendedData?.comparativeOmissionEvidence.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-platinum-200">{item.event}</h4>
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                              {item.informationGap}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30">
                              <p className="text-xs text-platinum-500 mb-1">International Coverage</p>
                              <p className="text-platinum-300">{item.internationalCoverage}</p>
                            </div>
                            <div className="p-2 rounded bg-rose-500/10 border border-rose-500/30">
                              <p className="text-xs text-platinum-500 mb-1">UAE Coverage</p>
                              <p className="text-platinum-300">{item.uaeCoverage}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Specific Discrepancies Documented */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Specific Discrepancies Documented — Iran Strikes</CardTitle>
                  <CardDescription>Official claims vs verifiable evidence</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {omissionSilenceData.extendedData?.specificDiscrepanciesDocumented.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-platinum-200">{item.location}</h4>
                            <Badge variant="outline" className="text-xs">{item.verificationSource}</Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="p-2 rounded bg-rose-500/10 border border-rose-500/30">
                              <p className="text-xs text-platinum-500 mb-1">Official Claim</p>
                              <p className="text-platinum-300">{item.officialClaim}</p>
                            </div>
                            <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30">
                              <p className="text-xs text-platinum-500 mb-1">Contrasting Evidence</p>
                              <p className="text-platinum-300">{item.contrastingEvidence}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Enforcement Actions During Iran Strikes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Enforcement Actions During Iran Strikes</CardTitle>
                  <CardDescription>Legal consequences for documenting attacks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {omissionSilenceData.extendedData?.enforcementActionsDuringIranStrikes.map((action, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.06 }}
                        className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4"
                      >
                        <div className="text-2xl font-bold text-rose-400">{action.value}</div>
                        <p className="text-sm text-platinum-300 mt-1">{action.metric}</p>
                        <p className="text-xs text-platinum-500 mt-2">Source: {action.source}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Wartime Speech Restrictions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Wartime Speech Restrictions — Regional Comparison</CardTitle>
                  <CardDescription>Legal limits on reporting during Iran conflict</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {omissionSilenceData.extendedData?.wartimeSpeechRestrictions.map((restriction, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${restriction.country === 'UAE' ? 'bg-rose/20 text-rose' : 'bg-platinum-600/20 text-platinum-400'}`}>
                              <Globe className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{restriction.country}</p>
                              <p className="text-sm text-platinum-400">{restriction.restrictionType}</p>
                            </div>
                          </div>
                          <Badge variant={restriction.country === 'UAE' ? 'destructive' : 'outline'} className={restriction.country === 'UAE' ? 'bg-red-500/20 text-red-400 border-red-500/50' : ''}>
                            {restriction.penalty}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Convicted Human Rights Defenders */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Convicted Human Rights Defenders</CardTitle>
                  <CardDescription>Individuals imprisoned for peaceful expression</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {omissionSilenceData.extendedData?.entityRegistry?.convictedHRDs.map((person, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                              <Users className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{person.name}</p>
                              <p className="text-sm text-platinum-400">{person.nationality} • {person.charges}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                              {person.sentence}
                            </Badge>
                            <p className="text-xs text-platinum-500 mt-1">{person.year}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Forcibly Disappeared */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Forcibly Disappeared</CardTitle>
                  <CardDescription>Individuals subject to enforced disappearance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {omissionSilenceData.extendedData?.entityRegistry?.forciblyDisappeared.map((person, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between rounded-lg border border-rose-500/30 bg-rose-500/10 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                              <AlertOctagon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{person.name}</p>
                              <p className="text-sm text-platinum-400">{person.nationality} • Last seen: {person.lastSeen}</p>
                            </div>
                          </div>
                          <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                            {person.circumstance}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Mass Trial Defendants */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">84-Person Mass Trial (2024)</CardTitle>
                  <CardDescription>Human rights defenders and dissidents trial statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {omissionSilenceData.extendedData?.entityRegistry?.massTrialDefendants.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-emerald-400">{metric.value}</div>
                        <p className="text-sm text-platinum-400 mt-1">{metric.metric}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Blocked Social Media Accounts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Blocked Social Media Accounts (March 2, 2026)</CardTitle>
                  <CardDescription>Accounts suspended for sharing strike footage</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {omissionSilenceData.extendedData?.entityRegistry?.blockedSocialMediaAccounts.map((account, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                              <Network className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{account.account}</p>
                              <p className="text-sm text-platinum-400">{account.type}</p>
                            </div>
                          </div>
                          {account.followers !== 'N/A' && (
                            <Badge variant="outline" className="text-xs">
                              {account.followers} followers
                            </Badge>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Influence Operations 2019 */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Coordinated Influence Operations (2019)</CardTitle>
                  <CardDescription>UAE-linked bot networks documented</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {omissionSilenceData.extendedData?.entityRegistry?.influenceOperations2019.map((op, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4"
                      >
                        <div className="text-3xl font-bold text-rose-400">{op.accounts}</div>
                        <p className="text-sm text-platinum-400 mt-1">Accounts on {op.platform}</p>
                        <div className="mt-3 space-y-1">
                          <p className="text-xs text-platinum-500">Origin: <span className="text-platinum-300">{op.origin}</span></p>
                          <p className="text-xs text-platinum-500">Purpose: <span className="text-platinum-300">{op.purpose}</span></p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>UAE Relevance Assessment for omission & silence sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {omissionSilenceData.extendedData?.sourceCredibilityMatrix.map((source, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.02 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-platinum-200 text-sm">{source.source}</p>
                            <p className="text-xs text-platinum-500">{source.focus}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              className={source.uaeBiasAssessment === 'Independent' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'bg-amber-500/20 text-amber-400 border-amber-500/50'}
                            >
                              {source.uaeBiasAssessment}
                            </Badge>
                            {getTierBadge(source.tier)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Legal Framework */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Legal Framework for Suppression</CardTitle>
                  <CardDescription>Laws used to control media and silence dissent</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {omissionSilenceData.extendedData?.legalFramework.map((law, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                              <Lock className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-200">{law.law}</p>
                              <p className="text-sm text-platinum-400">{law.purpose}</p>
                              <p className="text-xs text-platinum-500">{law.year}</p>
                            </div>
                          </div>
                          <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">
                            {law.maxPenalty}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Enrichment Metadata */}
              <Card className="glass-card border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg">Enrichment Metadata</CardTitle>
                  <CardDescription>Data extraction statistics for 11-7 Omission & Silence Detection</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">
                        {omissionSilenceData.extendedData?.executionMetadata?.queriesExecuted}
                      </div>
                      <p className="text-sm text-platinum-400">Queries Executed</p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">
                        {omissionSilenceData.extendedData?.executionMetadata?.pagesFetched}
                      </div>
                      <p className="text-sm text-platinum-400">Pages Fetched</p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">
                        {omissionSilenceData.extendedData?.executionMetadata?.urlsSuccessfullyFetched}
                      </div>
                      <p className="text-sm text-platinum-400">Successfully Fetched</p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">
                        {omissionSilenceData.extendedData?.executionMetadata?.enrichmentRate}
                      </div>
                      <p className="text-sm text-platinum-400">Enrichment Rate</p>
                    </div>
                  </div>
                  <p className="text-xs text-platinum-500 mt-4 text-center">
                    Enrichment Date: {omissionSilenceData.extendedData?.executionMetadata?.enrichmentCompleted}
                  </p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Echo Chamber & Filter Bubble Tab */}
        <TabsContent value="echochamber" className="space-y-6">
          <GlassPanel title="Echo Chamber & Filter Bubble Analysis" description="Algorithmic curation, information flow dynamics, and information ecosystem analysis">
            <div className="space-y-6">
              {/* Section A: Echo Chamber Quantification Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                <MetricCard
                  title="Cascade Probability (Random)"
                  value="65%"
                  previousValue={60}
                  icon={<Network className="h-5 w-5" />}
                  gradient="emerald"
                  trend="up"
                />
                <MetricCard
                  title="Cascade Probability (Polarized)"
                  value=">85%"
                  previousValue={75}
                  icon={<AlertOctagon className="h-5 w-5" />}
                  gradient="rose"
                  trend="up"
                />
                <MetricCard
                  title="Optimal Polarization Peak"
                  value="60%"
                  icon={<TrendingUp className="h-5 w-5" />}
                  gradient="gold"
                />
                <MetricCard
                  title="Network Polarization Decline"
                  value=">70%"
                  icon={<Activity className="h-5 w-5" />}
                  gradient="indigo"
                />
              </motion.div>

              {/* Section B: Platform Echo Chamber Effects */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg fontRajdhani">B. Platform Echo Chamber Effects</CardTitle>
                  <CardDescription>Echo chamber strength by platform based on PMC/NIH research</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {echoChamberFilterData.extendedData?.platformEchoChamberEffects?.map((platform, idx) => (
                      <motion.div
                        key={platform.platform}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            platform.echoChamberStrength === 'STRONG' ? 'bg-rose-500/20 text-rose-400' :
                            platform.echoChamberStrength === 'WEAK' ? 'bg-emerald-500/20 text-emerald-400' :
                            platform.echoChamberStrength === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-gold/20 text-gold'
                          }`}>
                            {platform.echoChamberStrength === 'STRONG' ? <XCircle className="h-5 w-5" /> :
                             platform.echoChamberStrength === 'WEAK' ? <CheckCircle className="h-5 w-5" /> :
                             <AlertTriangle className="h-5 w-5" />}
                          </div>
                          <div>
                            <p className="font-semibold text-platinum-200">{platform.platform}</p>
                            <p className="text-sm text-platinum-400">{platform.dominantECType}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={platform.echoChamberStrength === 'STRONG' || platform.echoChamberStrength === 'HIGH' ? "destructive" : "success"}>
                            {platform.echoChamberStrength}
                          </Badge>
                          <p className="text-sm text-platinum-400 mt-1">{platform.commonUsersPercent !== 'N/A' ? `${platform.commonUsersPercent} common users` : platform.platform === 'Facebook' ? 'Polarized clusters' : 'Ideological clustering'}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Section C: Sentiment by Platform */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg fontRajdhani">C. Sentiment Analysis by Platform</CardTitle>
                  <CardDescription>User vs researcher sentiment on echo chamber effects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {echoChamberFilterData.extendedData?.sentimentByPlatform?.map((sentiment, idx) => (
                      <motion.div
                        key={sentiment.platform}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-platinum-200">{sentiment.platform}</p>
                          <Badge variant={
                            sentiment.sentimentUsers === 'NEGATIVE' ? 'destructive' :
                            sentiment.sentimentUsers === 'POSITIVE' ? 'success' : 'secondary'
                          }>
                            {sentiment.sentimentUsers}
                          </Badge>
                        </div>
                        <p className="text-xs text-platinum-400">Researchers: {sentiment.sentimentResearchers}</p>
                        <p className="text-xs text-platinum-500 mt-1">{sentiment.consensus}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Section D: UAE Relevance Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg fontRajdhani">D. UAE Relevance Assessment</CardTitle>
                  <CardDescription>Echo chamber dynamics relevance to UAE information ecosystem</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {echoChamberFilterData.extendedData?.uaeRelevanceMatrix?.map((item, idx) => (
                      <motion.div
                        key={item.topicArea}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                      >
                        <p className="text-platinum-200">{item.topicArea}</p>
                        <Badge variant={
                          item.uaeRelevance === 'CRITICAL' ? 'destructive' :
                          item.uaeRelevance === 'HIGH' ? 'warning' : 'secondary'
                        }>
                          {item.uaeRelevance}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-3 text-center">
                      <div className="text-lg font-bold text-rose-400">CRITICAL</div>
                      <p className="text-xs text-platinum-400">Social Media Regulation</p>
                    </div>
                    <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-3 text-center">
                      <div className="text-lg font-bold text-orange-400">HIGH</div>
                      <p className="text-xs text-platinum-400">Echo Chambers, Misinformation</p>
                    </div>
                    <div className="rounded-lg border border-gold/30 bg-gold/10 p-3 text-center">
                      <div className="text-lg font-bold text-gold">MEDIUM</div>
                      <p className="text-xs text-platinum-400">Algorithmic Curation, Filter Bubbles</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section E: Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg fontRajdhani">E. Source Credibility Matrix</CardTitle>
                  <CardDescription>Research source tier classification and evidence quality</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-4">
                      {echoChamberFilterData.extendedData?.tierDistribution?.map((tier) => (
                        <motion.div
                          key={tier.tier}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3 text-center"
                        >
                          <div className={`text-lg font-bold ${
                            tier.tier.includes('TIER 1') ? 'text-emerald-400' :
                            tier.tier.includes('TIER 2') ? 'text-gold' :
                            tier.tier.includes('TIER 3') ? 'text-orange-400' : 'text-platinum-400'
                          }`}>
                            {tier.count}
                          </div>
                          <p className="text-xs text-platinum-400">{tier.tier.split(' ')[0]} {tier.tier.split(' ')[1]}</p>
                          <p className="text-xs text-platinum-500">{tier.percentageOfSources}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-platinum-300">Evidence Quality Assessment</p>
                      {echoChamberFilterData.extendedData?.evidenceQualityAssessment?.map((eq) => (
                        <div key={eq.qualityDimension} className="flex items-center justify-between rounded border border-platinum-700 bg-platinum-800/30 p-2">
                          <span className="text-sm text-platinum-300">{eq.qualityDimension}</span>
                          <span className="text-sm font-medium text-emerald-400">{eq.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section F: Research Consensus Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg fontRajdhani">F. Research Consensus & Methodology</CardTitle>
                  <CardDescription>Academic consensus on echo chamber phenomena and research gaps</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-platinum-300">Consensus on Key Findings</p>
                      {echoChamberFilterData.extendedData?.consensusMatrix?.slice(0, 4).map((item) => (
                        <motion.div
                          key={item.finding}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center justify-between rounded border border-platinum-700 bg-platinum-800/30 p-2"
                        >
                          <span className="text-xs text-platinum-300 flex-1 mr-2">{item.finding}</span>
                          <Badge variant={
                            item.consensusLevel === 'HIGH' ? 'success' :
                            item.consensusLevel.includes('MODERATE') ? 'secondary' : 'warning'
                          }>
                            {item.consensusLevel}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-platinum-300">Methodological Quality</p>
                      <BarChart
                        data={echoChamberFilterData.extendedData?.methodologicalQuality?.map((m) => ({
                          method: m.method.split(' ')[0],
                          score: parseFloat(m.qualityScore),
                        })) || []}
                        xAxisKey="method"
                        bars={[{ dataKey: 'score', name: 'Quality Score', color: CHART_COLORS.emerald }]}
                        height={200}
                        showGrid={true}
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-platinum-300">Key Research Gaps</p>
                      <ScrollArea className="h-[150px]">
                        <div className="space-y-2 pr-4">
                          {echoChamberFilterData.extendedData?.researchGaps?.map((gap) => (
                            <motion.div
                              key={gap.gap}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="rounded border border-platinum-700 bg-platinum-800/30 p-2"
                            >
                              <p className="text-sm font-medium text-platinum-200">{gap.gap}</p>
                              <p className="text-xs text-platinum-400">{gap.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Threat Assessment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg fontRajdhani">UAE Information Ecosystem Threat Assessment</CardTitle>
                  <CardDescription>Threat matrix for echo chamber dynamics in the UAE context</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {echoChamberFilterData.extendedData?.threatAssessment?.map((threat, idx) => (
                      <motion.div
                        key={threat.threat}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`h-2 w-2 rounded-full ${
                            threat.combinedScore === 'CRITICAL' ? 'bg-rose-500' :
                            threat.combinedScore === 'HIGH' ? 'bg-orange-500' :
                            threat.combinedScore === 'MEDIUM' ? 'bg-gold' : 'bg-platinum-500'
                          }`} />
                          <span className="text-sm text-platinum-200">{threat.threat}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {threat.probability}/{threat.impact}
                          </Badge>
                          <Badge variant={
                            threat.combinedScore === 'CRITICAL' ? 'destructive' :
                            threat.combinedScore === 'HIGH' ? 'warning' :
                            threat.combinedScore === 'MEDIUM' ? 'secondary' : 'outline'
                          }>
                            {threat.combinedScore}
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
      </Tabs>
    </div>
  )
}
