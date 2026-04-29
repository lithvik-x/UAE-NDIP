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
  AlertCircle,
  Award,
  BadgeCheck,
  BarChart3,
  Globe,
  Shield,
  Star,
  ThumbsDown,
  ThumbsUp,
  TrendingUp,
  Users,
  Verified,
} from 'lucide-react'

export default function SourceCredibilityPage() {
  // UAE Source credibility metrics
  const totalSources = 8423
  const verifiedSources = 5234
  const credibilityScore = 87.3
  const activeTracking = 1247

  // Source tier distribution
  const tierData = [
    { name: 'Tier 1 - Government', value: 342, color: CHART_COLORS.gold },
    { name: 'Tier 2 - Established', value: 1234, color: CHART_COLORS.navy },
    { name: 'Tier 3 - Recognized', value: 2876, color: CHART_COLORS.platinum },
    { name: 'Tier 4 - Standard', value: 3421, color: CHART_COLORS.slate },
    { name: 'Unverified', value: 550, color: CHART_COLORS.rose },
  ]

  // Credibility trend data
  const credibilityTrendData = [
    { month: 'Jan', score: 82, verified: 4234 },
    { month: 'Feb', score: 84, verified: 4567 },
    { month: 'Mar', score: 85, verified: 4890 },
    { month: 'Apr', score: 86, verified: 5123 },
    { month: 'May', score: 87, verified: 5234 },
    { month: 'Jun', score: 87.3, verified: 5421 },
  ]

  // Top verified sources
  const topSources = [
    { name: 'UAE Government Portal', type: 'Official', credibility: 99, category: 'Government', checks: 4567 },
    { name: 'WAM (Emirates News Agency)', type: 'Wire Service', credibility: 98, category: 'News', checks: 3456 },
    { name: 'Ministry of Foreign Affairs', type: 'Official', credibility: 99, category: 'Government', checks: 2345 },
    { name: 'Khaleej Times', type: 'Newspaper', credibility: 94, category: 'News', checks: 2134 },
    { name: 'The National', type: 'Newspaper', credibility: 95, category: 'News', checks: 1876 },
    { name: 'Dubai Media Office', type: 'Official', credibility: 98, category: 'Government', checks: 1567 },
  ]

  // Source categories
  const categoryData = [
    { name: 'Government', sources: 342, reliability: 98 },
    { name: 'News Agencies', sources: 156, reliability: 95 },
    { name: 'Academic', sources: 234, reliability: 92 },
    { name: 'Corporate', sources: 567, reliability: 78 },
    { name: 'Social Media', sources: 4234, reliability: 45 },
    { name: 'Blogs/Op-eds', sources: 890, reliability: 52 },
  ]

  // Recent credibility issues
  const credibilityIssues = [
    { id: 1, source: 'Unknown News Portal', issue: 'Fabricated government statement', severity: 'HIGH', detected: '2 hr ago' },
    { id: 2, source: 'Social Media Account', issue: 'Impersonating official source', severity: 'MEDIUM', detected: '5 hr ago' },
    { id: 3, source: 'Blog Platform', issue: 'Misleading statistics', severity: 'LOW', detected: '1 day ago' },
    { id: 4, source: 'News Aggregator', issue: 'Unverified viral claims', severity: 'MEDIUM', detected: '1 day ago' },
  ]

  const getTierBadge = (tier: string) => {
    if (tier.includes('Tier 1')) return <Badge variant="gold" className="text-xs">TIER 1</Badge>
    if (tier.includes('Tier 2')) return <Badge variant="navy" className="text-xs">TIER 2</Badge>
    if (tier.includes('Tier 3')) return <Badge variant="platinum" className="text-xs">TIER 3</Badge>
    if (tier.includes('Tier 4')) return <Badge variant="outline" className="text-xs">TIER 4</Badge>
    return <Badge variant="destructive" className="text-xs">UNVERIFIED</Badge>
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'HIGH': return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">HIGH</Badge>
      case 'MEDIUM': return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">MEDIUM</Badge>
      default: return <Badge variant="outline" className="text-xs">LOW</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">V-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Source Credibility</h1>
          <p className="mt-2 text-slate-400">
            Source verification, credibility scoring, and trust metrics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Shield className="h-4 w-4" />
            Trust Center
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <BadgeCheck className="h-4 w-4" />
            Verify Source
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Sources"
          value={totalSources}
          previousValue={totalSources - 423}
          icon={<Globe className="h-6 w-6" />}
          gradient="platinum"
          status="info"
        />
        <MetricCard
          title="Verified Sources"
          value={verifiedSources}
          previousValue={verifiedSources - 234}
          icon={<Verified className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Credibility Score"
          value={`${credibilityScore}%`}
          previousValue={credibilityScore - 1.2}
          icon={<Star className="h-6 w-6" />}
          gradient="gold"
          status="info"
        />
        <MetricCard
          title="Active Tracking"
          value={activeTracking}
          previousValue={activeTracking - 89}
          icon={<BarChart3 className="h-6 w-6" />}
          gradient="navy"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sources">Verified Sources</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="issues">Credibility Issues</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Source Credibility Overview" description="Trust metrics across all information sources">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Source Tier Distribution</CardTitle>
                    <CardDescription>Classification by credibility tier</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={tierData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Credibility Trend</CardTitle>
                    <CardDescription>Monthly credibility score progression</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={credibilityTrendData}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'score', name: 'Credibility %', color: CHART_COLORS.gold },
                        { dataKey: 'verified', name: 'Verified Sources', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trust Distribution</CardTitle>
                  <CardDescription>Percentage of sources by trust level</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Highly Trusted (Tier 1-2)</span>
                        <span className="font-medium text-emerald-400">18.7%</span>
                      </div>
                      <Progress value={18.7} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Trusted (Tier 3)</span>
                        <span className="font-medium text-emerald-400">34.1%</span>
                      </div>
                      <Progress value={34.1} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Standard (Tier 4)</span>
                        <span className="font-medium text-yellow-400">40.6%</span>
                      </div>
                      <Progress value={40.6} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Unverified</span>
                        <span className="font-medium text-rose-400">6.5%</span>
                      </div>
                      <Progress value={6.5} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Verified Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Verified Sources" description="Most credible and trusted information sources">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Verified Sources</CardTitle>
                  <CardDescription>Highest credibility ratings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {topSources.map((source, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                              <Award className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{source.name}</p>
                              <p className="text-sm text-slate-400">{source.type} · {source.category}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <Badge variant="outline" className="text-xs mb-1">{source.category}</Badge>
                              <p className="text-xs text-slate-400">{source.checks.toLocaleString()} checks</p>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-emerald-400">{source.credibility}%</div>
                              <p className="text-xs text-slate-400">Credibility</p>
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

        {/* Categories Tab */}
        <TabsContent value="categories" className="space-y-6">
          <GlassPanel title="Source Categories" description="Analysis by source type">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Category Overview</CardTitle>
                  <CardDescription>Reliability by source category</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={categoryData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'sources', name: 'Sources', color: CHART_COLORS.platinum },
                      { dataKey: 'reliability', name: 'Reliability %', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Category Details</CardTitle>
                  <CardDescription>Detailed breakdown by type</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {categoryData.map((cat, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              cat.reliability > 90 ? 'bg-emerald/20 text-emerald' :
                              cat.reliability > 70 ? 'bg-gold/20 text-gold' :
                              'bg-rose/20 text-rose'
                            }`}>
                              <Globe className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{cat.name}</p>
                              <p className="text-sm text-slate-400">{cat.sources} sources tracked</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${
                              cat.reliability > 90 ? 'text-emerald-400' :
                              cat.reliability > 70 ? 'text-gold' : 'text-rose-400'
                            }`}>
                              {cat.reliability}%
                            </div>
                            <p className="text-xs text-slate-400">Reliability</p>
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

        {/* Credibility Issues Tab */}
        <TabsContent value="issues" className="space-y-6">
          <GlassPanel title="Credibility Issues" description="Sources with detected credibility problems">
            <div className="space-y-6">
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Recent Issues Detected
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {credibilityIssues.map((issue) => (
                        <div key={issue.id} className="flex items-start justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{issue.source}</p>
                            <p className="text-sm text-slate-400 mt-1">{issue.issue}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            {getSeverityBadge(issue.severity)}
                            <span className="text-xs text-slate-400">{issue.detected}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trust Metrics Summary</CardTitle>
                  <CardDescription>Overall trust indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">89%</div>
                      <p className="text-sm text-slate-400">Trust Rate</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-rose">234</div>
                      <p className="text-sm text-slate-400">Issues Found</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">89%</div>
                      <p className="text-sm text-slate-400">Resolution Rate</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-navy">4.2 hr</div>
                      <p className="text-sm text-slate-400">Avg Detection</p>
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
