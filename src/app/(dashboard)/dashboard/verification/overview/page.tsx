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
} from 'lucide-react'
import {
  useVerificationOverviewData,
} from '@/lib/data-loader'

export default function VerificationOverviewPage() {
  const { data } = useVerificationOverviewData()

  // UAE Verification metrics
  const totalVerified = 12847
  const pendingReview = 342
  const accuracy = 94.7
  const avgResponseTime = '28 min'

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
    { name: 'Other', value: 5, color: CHART_COLORS.slate },
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
          <h1 className="text-3xl font-extrabold gradient-text-emerald">Verification Overview</h1>
          <p className="mt-2 text-slate-400">
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
          gradient="navy"
          status="info"
        />
        <MetricCard
          title="Avg Response Time"
          value={avgResponseTime}
          icon={<Timer className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recent">Recent Verifications</TabsTrigger>
          <TabsTrigger value="sources">Source Analysis</TabsTrigger>
          <TabsTrigger value="accuracy">Accuracy Metrics</TabsTrigger>
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
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">45%</div>
                      <p className="text-sm text-slate-400">Source Cross-ref</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-navy">28%</div>
                      <p className="text-sm text-slate-400">Data Analysis</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">18%</div>
                      <p className="text-sm text-slate-400">Expert Review</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-platinum">9%</div>
                      <p className="text-sm text-slate-400">AI-Assisted</p>
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
                        <div key={item.id} className="flex items-start justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{item.claim}</p>
                            <p className="text-sm text-slate-400 mt-1">Source: {item.source}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              {getResultBadge(item.result)}
                              <p className="text-xs text-slate-400 mt-1">{item.time}</p>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-emerald-400">{item.confidence}%</div>
                              <p className="text-xs text-slate-400">Confidence</p>
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
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                              <Shield className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{source.source}</p>
                              <p className="text-sm text-slate-400">{source.submissions.toLocaleString()} submissions</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${source.reliability > 90 ? 'text-emerald-400' : source.reliability > 70 ? 'text-gold' : 'text-rose-400'}`}>
                              {source.reliability}%
                            </div>
                            <p className="text-xs text-slate-400">Reliability</p>
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
                        <span className="text-slate-400">Overall Accuracy</span>
                        <span className="font-medium text-emerald-400">94.7%</span>
                      </div>
                      <Progress value={94.7} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">False Positive Rate</span>
                        <span className="font-medium text-emerald-400">2.3%</span>
                      </div>
                      <Progress value={97.7} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Completeness Score</span>
                        <span className="font-medium text-emerald-400">91.2%</span>
                      </div>
                      <Progress value={91.2} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Timeliness Score</span>
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
      </Tabs>
    </div>
  )
}
