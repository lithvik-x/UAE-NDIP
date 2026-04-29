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
  Globe,
  Search,
  Shield,
  ThumbsDown,
  ThumbsUp,
  Timer,
  TrendingUp,
  AlertTriangle,
  Check,
  XCircle,
  Database,
} from 'lucide-react'

export default function FactCheckDashboardPage() {
  // UAE Fact-Check specific metrics
  const claimsProcessed = 8423
  const trueClaims = 5234
  const falseClaims = 1523
  const misleadingClaims = 892
  const pendingClaims = 774

  // Monthly fact-check trend
  const factCheckTrendData = [
    { month: 'Jan', checked: 1234, accuracy: 91 },
    { month: 'Feb', checked: 1345, accuracy: 92 },
    { month: 'Mar', checked: 1456, accuracy: 93 },
    { month: 'Apr', checked: 1567, accuracy: 94 },
    { month: 'May', checked: 1678, accuracy: 94.5 },
    { month: 'Jun', checked: 1143, accuracy: 94.7 },
  ]

  // Category distribution
  const categoryData = [
    { name: 'Economy', value: 28, checked: 2359, accuracy: 96 },
    { name: 'Health', value: 22, checked: 1853, accuracy: 93 },
    { name: 'Politics', value: 20, checked: 1685, accuracy: 91 },
    { name: 'Social', value: 15, checked: 1263, accuracy: 89 },
    { name: 'Security', value: 10, checked: 842, accuracy: 97 },
    { name: 'Other', value: 5, checked: 421, accuracy: 94 },
  ]

  // Recent fact-checks
  const recentFactChecks = [
    { id: 1, claim: 'UAE GDP grew 4.3% in Q1 2026', verdict: 'TRUE', sources: 5, confidence: 98 },
    { id: 2, claim: 'Dubai announces new metro line', verdict: 'FALSE', sources: 3, confidence: 95 },
    { id: 3, claim: 'UAE ranked safest travel destination', verdict: 'TRUE', sources: 4, confidence: 97 },
    { id: 4, claim: 'New retirement visa program launched', verdict: 'TRUE', sources: 6, confidence: 99 },
    { id: 5, claim: 'Free zone companies exempt from all taxes', verdict: 'MISLEADING', sources: 4, confidence: 92 },
    { id: 6, claim: 'Abu Dhabi metro construction begins', verdict: 'FALSE', sources: 2, confidence: 88 },
  ]

  // Top fact-checkers
  const topFactCheckers = [
    { name: 'Government Fact-Check Unit', checks: 2341, accuracy: 98 },
    { name: 'UAE Media Council', checks: 1876, accuracy: 95 },
    { name: 'Independent Fact-Checkers', checks: 1245, accuracy: 92 },
    { name: 'Academic Review Board', checks: 876, accuracy: 97 },
    { name: 'AI Verification System', checks: 2085, accuracy: 94 },
  ]

  // Common misinformation themes
  const misinformationThemes = [
    { theme: 'Economic Statistics', frequency: 1247, accuracy: 94 },
    { theme: 'Visa & Immigration', frequency: 982, accuracy: 78 },
    { theme: 'Government Announcements', frequency: 876, accuracy: 96 },
    { theme: 'Tourism Claims', frequency: 765, accuracy: 91 },
    { theme: 'Security Advisories', frequency: 543, accuracy: 98 },
    { theme: 'Cultural Information', frequency: 432, accuracy: 87 },
  ]

  const getVerdictBadge = (verdict: string) => {
    switch (verdict) {
      case 'TRUE': return <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">TRUE</Badge>
      case 'FALSE': return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">FALSE</Badge>
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
          <h1 className="text-3xl font-extrabold gradient-text-emerald">Fact-Check Dashboard</h1>
          <p className="mt-2 text-slate-400">
            Comprehensive fact-checking operations and misinformation tracking
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald/50 text-emerald hover:bg-emerald/10">
            <Search className="h-4 w-4" />
            New Check
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
            <CheckCircle className="h-4 w-4" />
            Quick Verify
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <MetricCard
          title="Total Claims"
          value={claimsProcessed}
          previousValue={claimsProcessed - 842}
          icon={<FileQuestion className="h-6 w-6" />}
          gradient="emerald"
          status="info"
        />
        <MetricCard
          title="Verified True"
          value={trueClaims}
          previousValue={trueClaims - 523}
          icon={<ThumbsUp className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Verified False"
          value={falseClaims}
          previousValue={falseClaims + 145}
          icon={<ThumbsDown className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
        <MetricCard
          title="Misleading"
          value={misleadingClaims}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Pending"
          value={pendingClaims}
          previousValue={pendingClaims + 45}
          icon={<Clock className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recent">Recent Checks</TabsTrigger>
          <TabsTrigger value="themes">Misinformation Themes</TabsTrigger>
          <TabsTrigger value="sources">Source Analysis</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Fact-Check Overview" description="Summary of fact-checking operations">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Verdict Distribution</CardTitle>
                    <CardDescription>Overall fact-check results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={[
                        { name: 'True', value: trueClaims, color: CHART_COLORS.emerald },
                        { name: 'False', value: falseClaims, color: CHART_COLORS.rose },
                        { name: 'Misleading', value: misleadingClaims, color: CHART_COLORS.gold },
                        { name: 'Pending', value: pendingClaims, color: CHART_COLORS.platinum },
                      ]}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Category Breakdown</CardTitle>
                    <CardDescription>Claims by topic area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={categoryData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'checked', name: 'Claims Checked', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Fact-Check Trend</CardTitle>
                  <CardDescription>Claims processed and accuracy over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={factCheckTrendData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'checked', name: 'Claims Checked', color: CHART_COLORS.emerald },
                      { dataKey: 'accuracy', name: 'Accuracy %', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Fact-Check by Category</CardTitle>
                  <CardDescription>Accuracy scores by topic area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {categoryData.map((cat, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-200">{cat.name}</span>
                          <span className="text-sm font-medium text-emerald-400">{cat.accuracy}%</span>
                        </div>
                        <Progress value={cat.accuracy} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Recent Checks Tab */}
        <TabsContent value="recent" className="space-y-6">
          <GlassPanel title="Recent Fact-Checks" description="Latest verified claims">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Latest Verifications</CardTitle>
                  <CardDescription>Recently fact-checked claims</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {recentFactChecks.map((item) => (
                        <div key={item.id} className="flex items-start justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{item.claim}</p>
                            <p className="text-sm text-slate-400 mt-1">{item.sources} sources verified</p>
                          </div>
                          <div className="flex items-center gap-4">
                            {getVerdictBadge(item.verdict)}
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

        {/* Misinformation Themes Tab */}
        <TabsContent value="themes" className="space-y-6">
          <GlassPanel title="Misinformation Themes" description="Common topics requiring verification">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Theme Analysis</CardTitle>
                  <CardDescription>Most frequently checked themes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {misinformationThemes.map((theme, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <AlertTriangle className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{theme.theme}</p>
                              <p className="text-sm text-slate-400">{theme.frequency} claims checked</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${theme.accuracy > 90 ? 'text-emerald-400' : 'text-orange-400'}`}>
                              {theme.accuracy}%
                            </div>
                            <p className="text-xs text-slate-400">Accuracy</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Theme Distribution</CardTitle>
                  <CardDescription>Volume of claims by topic</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={misinformationThemes.map(t => ({ name: t.theme.split(' ')[0], value: t.frequency }))}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Claims', color: CHART_COLORS.gold },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Source Analysis Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Fact-Checker Performance" description="Verification statistics by source">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Fact-Checkers</CardTitle>
                  <CardDescription>Most active verification sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {topFactCheckers.map((checker, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                              <Database className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{checker.name}</p>
                              <p className="text-sm text-slate-400">{checker.checks.toLocaleString()} verifications</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${checker.accuracy > 95 ? 'text-emerald-400' : 'text-gold'}`}>
                              {checker.accuracy}%
                            </div>
                            <p className="text-xs text-slate-400">Accuracy</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Processing Metrics</CardTitle>
                  <CardDescription>Fact-check turnaround performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">28 min</div>
                      <p className="text-sm text-slate-400">Avg Response</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-navy">4.2</div>
                      <p className="text-sm text-slate-400">Sources Verified</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">12</div>
                      <p className="text-sm text-slate-400">Expert Reviewers</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-platinum">24/7</div>
                      <p className="text-sm text-slate-400">Coverage</p>
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
