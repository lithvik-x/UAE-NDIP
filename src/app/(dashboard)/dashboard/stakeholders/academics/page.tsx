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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Building,
  Landmark,
  FileText,
  CheckCircle,
  GraduationCap,
  BookOpen,
} from 'lucide-react'
import {
  useAcademicsData,
} from '@/lib/data-loader'
import type { StakeholderIntelligence } from '@/lib/data-loader'

export default function AcademicsPage() {
  const { data } = useAcademicsData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Academic Institutions data...</div>
      </div>
    )
  }

  const entity = data as StakeholderIntelligence
  const { metrics, keyFindings, uaeRelevance, alertLevel } = entity

  // Sentiment distribution
  const sentimentData = [
    { name: 'Positive', value: metrics.sentiment?.positive || 0, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: metrics.sentiment?.neutral || 0, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.sentiment?.negative || 0, color: CHART_COLORS.rose },
  ]

  // Key findings by alert level
  const redFindings = keyFindings?.filter(f => f.alert === 'RED') || []
  const yellowFindings = keyFindings?.filter(f => f.alert === 'YELLOW') || []

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  const getTierBadge = (tier?: number) => {
    const colors: Record<number, string> = {
      0: 'bg-red-500/20 text-red-400 border-red-500/50',
      1: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      2: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      3: 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50',
      4: 'bg-slate-500/20 text-slate-400 border-slate-500/50',
    }
    return (
      <Badge variant="outline" className={`text-xs border ${colors[tier || 0]}`}>
        Tier {tier}
      </Badge>
    )
  }

  const getAlertColor = (alert?: string) => {
    if (alert === 'RED') return 'border-red-500/50'
    if (alert === 'YELLOW') return 'border-yellow-500/50'
    return 'border-emerald-500/50'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2">CIVIL SOCIETY</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum">Academic Institutions</h1>
          <p className="mt-2 text-slate-400">
            {entity.mandate}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <GraduationCap className="h-4 w-4" />
            University Directory
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Digital Reach"
          value={metrics.digitalReach?.toLocaleString() || 'N/A'}
          icon={<Globe className="h-6 w-6" />}
          gradient="indigo"
          status="info"
        />
        <MetricCard
          title="Engagement"
          value={metrics.engagement?.toFixed(1) || 'N/A'}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Credibility Score"
          value={metrics.credibility?.score || 'N/A'}
          previousValue={(metrics.credibility?.score || 86) - 2}
          icon={<Shield className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="UAE Relevance"
          value={`${uaeRelevance.score}/100`}
          icon={<Users className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      {/* Alert Banner */}
      <div className={`rounded-xl border p-4 bg-slate-900/50 ${getAlertColor(alertLevel)}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {alertLevel === 'RED' && <AlertCircle className="h-6 w-6 text-red-400" />}
            {alertLevel === 'YELLOW' && <AlertTriangle className="h-6 w-6 text-yellow-400" />}
            {alertLevel === 'GREEN' && <CheckCircle className="h-6 w-6 text-emerald-400" />}
            <div>
              <p className="font-semibold text-slate-200">Intelligence Alert Level: {alertLevel}</p>
              <p className="text-sm text-slate-400">UAE Relevance: {uaeRelevance.score}/100 — {uaeRelevance.justification}</p>
            </div>
          </div>
          {getAlertBadge(alertLevel)}
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Academic Institutions Overview" description="Key metrics and engagement data for academic institutions">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Credibility Assessment</CardTitle>
                  <CardDescription>Source reliability and verification status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30 text-center">
                      <div className="text-3xl font-bold text-yellow-400">
                        {metrics.credibility?.tier || 1}
                      </div>
                      <div className="text-sm text-slate-400">Credibility Tier</div>
                    </div>
                    <div className="rounded-lg bg-blue-500/10 p-4 border border-blue-500/30 text-center">
                      <div className="text-3xl font-bold text-blue-400">
                        {metrics.credibility?.sources || 0}
                      </div>
                      <div className="text-sm text-slate-400">Verified Sources</div>
                    </div>
                    <div className="rounded-lg bg-platinum-500/10 p-4 border border-platinum-500/30 text-center">
                      <div className="text-3xl font-bold text-platinum-400">
                        {metrics.credibility?.lastVerified || 'N/A'}
                      </div>
                      <div className="text-sm text-slate-400">Last Verified</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment toward academic institutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Digital Presence</CardTitle>
                    <CardDescription>Online platforms and engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-3">
                        {entity.digitalPresence?.map((account, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Globe className="h-4 w-4 text-platinum-400" />
                              <span className="text-sm text-slate-200">{account.platform}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-400">{account.handle}</span>
                              {account.verified && (
                                <Badge variant="success" className="text-xs">Verified</Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Findings Tab */}
        <TabsContent value="keyfindings" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical intelligence findings for academic institutions">
            <div className="space-y-6">
              {/* Red Alerts Section */}
              {redFindings.length > 0 && (
                <Card className="glass-card border-red-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                      <AlertCircle className="h-5 w-5" />
                      Red Alert Findings
                    </CardTitle>
                    <CardDescription>Critical issues requiring immediate attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {redFindings.map((finding, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-red-500/10 p-4 border border-red-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{finding.finding}</p>
                            <p className="mt-1 text-sm text-slate-400">Source: {finding.source}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="destructive" className="text-xs">{finding.metric}</Badge>
                            {finding.tier !== undefined && <div className="mt-1">{getTierBadge(finding.tier)}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Yellow Alerts Section */}
              {yellowFindings.length > 0 && (
                <Card className="glass-card border-yellow-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
                      <AlertTriangle className="h-5 w-5" />
                      Yellow Alert Findings
                    </CardTitle>
                    <CardDescription>Issues requiring monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {yellowFindings.map((finding, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{finding.finding}</p>
                            <p className="mt-1 text-sm text-slate-400">Source: {finding.source}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="warning" className="text-xs">{finding.metric}</Badge>
                            {finding.tier !== undefined && <div className="mt-1">{getTierBadge(finding.tier)}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* All Findings Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">All Key Findings</CardTitle>
                  <CardDescription>Complete list of intelligence findings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {keyFindings?.map((finding, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum">
                              <Lightbulb className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{finding.finding}</p>
                              <p className="text-sm text-slate-400">Source: {finding.source}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <Badge variant="outline" className="mb-1">{finding.metric}</Badge>
                              <p className="text-xs text-slate-400">Metric</p>
                            </div>
                            <div className="text-center">
                              {getTierBadge(finding.tier)}
                              <p className="mt-1 text-xs text-slate-400">Tier</p>
                            </div>
                            <div className="text-center">
                              {getAlertBadge(finding.alert)}
                              <p className="mt-1 text-xs text-slate-400">Alert</p>
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

        {/* Programs Tab */}
        <TabsContent value="programs" className="space-y-6">
          <GlassPanel title="Programs & Initiatives" description="Active programs and initiatives by academic institutions">
            <div className="space-y-4">
              {metrics.programs?.map((program, idx) => (
                <Card key={idx} className="glass-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between rounded-lg bg-slate-800/50 p-4 border border-slate-700">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-platinum-400" />
                          <span className="font-medium text-slate-200">{program.name}</span>
                        </div>
                        <p className="mt-2 text-sm text-slate-400">{program.description}</p>
                        {program.budget && (
                          <p className="mt-2 text-sm text-platinum-400 font-medium">
                            Budget: AED {program.budget.toLocaleString()}
                          </p>
                        )}
                      </div>
                      <Badge
                        variant={program.status === 'active' ? 'success' : program.status === 'completed' ? 'default' : 'warning'}
                        className="text-xs"
                      >
                        {program.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment & Emotion Analysis" description="Detailed sentiment breakdown for academic institutions">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Breakdown</CardTitle>
                  <CardDescription>Positive, neutral, and negative sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sentimentData.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className="h-3 w-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-sm font-medium text-slate-200">{item.name}</span>
                          </div>
                          <span className="text-lg font-bold text-slate-200">{item.value}%</span>
                        </div>
                        <Progress
                          value={item.value}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Volume</CardTitle>
                  <CardDescription>Total volume: {metrics.sentiment?.volume || 0}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-platinum-400">
                      {metrics.sentiment?.overall || 50}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">Overall Sentiment Score</div>
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
