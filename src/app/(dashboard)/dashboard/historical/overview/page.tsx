// @ts-nocheck
'use client'

import { useHistoricalOverviewData } from '@/lib/data-loader'
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
  Globe,
  Lightbulb,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
  Crown,
  BookOpen,
  Landmark,
  Flag,
  Calendar,
} from 'lucide-react'
import type { HistoricalEra, HistoricalEvent, PolicyAnnouncement } from '@/lib/data-loader'

export default function HistoricalOverviewPage() {
  const { data } = useHistoricalOverviewData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-500-400">Loading Historical data...</div>
      </div>
    )
  }

  // Calculate summary metrics
  const totalEras = data.length
  const totalEvents = data.reduce((acc, era) => acc + (era.keyEvents?.length || 0), 0)
  const totalPolicies = data.reduce((acc, era) => acc + (era.policyOutcomes?.length || 0), 0)
  const avgCredibility = data.reduce((acc, era) => acc + (era.credibility?.score || 0), 0) / totalEras

  // Timeline data for chart - events per era
  const eventsPerEraData = data.map((era, idx) => ({
    name: era.era.split(' ')[0],
    events: era.keyEvents?.length || 0,
    policies: era.policyOutcomes?.length || 0,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Era duration data
  const eraDurationData = data.map((era) => {
    const start = parseInt(era.period.start.replace(/\D/g, '')) || 1971
    const end = era.period.end === 'Present' ? 2026 : parseInt(era.period.end.replace(/\D/g, '')) || 2026
    return {
      name: era.era.split(' ').slice(0, 2).join(' '),
      duration: end - start,
      start,
      end: era.period.end === 'Present' ? 2026 : end,
    }
  })

  // Key events timeline
  const allKeyEvents: (HistoricalEvent & { era: string })[] = data.flatMap((era) =>
    (era.keyEvents || []).map((event) => ({ ...event, era: era.era }))
  ).sort((a, b) => {
    const yearA = parseInt(a.date.replace(/\D/g, '')) || 0
    const yearB = parseInt(b.date.replace(/\D/g, '')) || 0
    return yearA - yearB
  }).slice(0, 20)

  // Significance distribution
  const significanceData = [
    { name: 'Critical', value: allKeyEvents.filter(e => e.significance === 'critical').length, color: CHART_COLORS.rose },
    { name: 'Major', value: allKeyEvents.filter(e => e.significance === 'major').length, color: CHART_COLORS.gold },
    { name: 'Minor', value: allKeyEvents.filter(e => e.significance === 'minor').length, color: CHART_COLORS.platinum },
  ]

  const getEraBadge = (era: HistoricalEra) => {
    const years = `${era.period.start} - ${era.period.end}`
    return (
      <Badge variant="outline" className="text-xs border-gold-700/50 text-gold-700">
        {years}
      </Badge>
    )
  }

  const getSignificanceBadge = (significance?: string) => {
    switch (significance) {
      case 'critical':
        return <Badge variant="destructive" className="text-xs">Critical</Badge>
      case 'major':
        return <Badge variant="warning" className="text-xs bg-amber-500/20 text-amber-400 border-amber-500/50">Major</Badge>
      default:
        return <Badge variant="outline" className="text-xs">Minor</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">H-CONTEXT</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">UAE Historical Overview</h1>
          <p className="mt-2 text-platinum-500-400">
            Comprehensive historical context spanning Pre-Federation through the Recent Era
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <BookOpen className="h-4 w-4" />
            View Reports
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-500-950 gap-2">
            <Calendar className="h-4 w-4" />
            Timeline View
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Historical Eras"
          value={totalEras}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Key Events"
          value={totalEvents}
          icon={<Star className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Policy Outcomes"
          value={totalPolicies}
          icon={<Landmark className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Avg. Credibility"
          value={`${avgCredibility.toFixed(0)}%`}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="timeline" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="eras">Eras Overview</TabsTrigger>
          <TabsTrigger value="events">Key Events</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
        </TabsList>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Historical Timeline" description="UAE history from Pre-Federation to Present">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Events Per Era</CardTitle>
                  <CardDescription>Distribution of key events across historical periods</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={eventsPerEraData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'events', name: 'Key Events', color: CHART_COLORS.gold },
                      { dataKey: 'policies', name: 'Policies', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Era Durations (Years)</CardTitle>
                  <CardDescription>Length of each historical period</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={eraDurationData}
                    xAxisKey="name"
                    areas={[
                      { dataKey: 'duration', name: 'Years', color: CHART_COLORS.platinum },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Event Significance Distribution</CardTitle>
                  <CardDescription>Classification of key historical events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <PieChart
                      data={significanceData}
                      height={280}
                      showLegend={true}
                    />
                    <div className="space-y-4">
                      {significanceData.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-sm font-medium text-platinum-500-200">{item.name}</span>
                            </div>
                            <span className="text-lg font-bold text-platinum-500-200">{item.value}</span>
                          </div>
                          <Progress
                            value={(item.value / allKeyEvents.length) * 100}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Eras Overview Tab */}
        <TabsContent value="eras" className="space-y-6">
          <GlassPanel title="Historical Eras" description="Overview of each UAE historical period">
            <div className="space-y-4">
              {data.map((era, idx) => (
                <Card key={idx} className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gold-700">{era.era}</h3>
                          {getEraBadge(era)}
                        </div>
                        <p className="text-sm text-platinum-500-400 line-clamp-2">{era.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-platinum-500-100">{era.keyEvents?.length || 0}</div>
                        <div className="text-xs text-platinum-500-400">Events</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-platinum-500-500">
                      <span>Credibility: {era.credibility?.score || 0}%</span>
                      <span>Sources: {era.credibility?.sources || 0}</span>
                      <span>Updated: {era.lastUpdated}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Events Tab */}
        <TabsContent value="events" className="space-y-6">
          <GlassPanel title="Key Historical Events" description="Significant events across UAE history">
            <ScrollArea className="h-[600px]">
              <div className="space-y-3">
                {allKeyEvents.map((event, idx) => (
                  <div key={idx} className="flex items-start justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700/20 text-gold-700 shrink-0">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-mono text-gold-700">{event.date}</span>
                          <span className="text-xs text-platinum-500-500">|</span>
                          <span className="text-xs text-platinum-500-400">{event.era}</span>
                        </div>
                        <p className="font-semibold text-platinum-500-200">{event.title}</p>
                        <p className="mt-1 text-sm text-platinum-500-400 line-clamp-2">{event.description}</p>
                        {event.entities && event.entities.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {event.entities.slice(0, 3).map((entity, eIdx) => (
                              <Badge key={eIdx} variant="outline" className="text-xs">{entity}</Badge>
                            ))}
                            {event.entities.length > 3 && (
                              <Badge variant="outline" className="text-xs">+{event.entities.length - 3}</Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="ml-4 shrink-0">
                      {getSignificanceBadge(event.significance)}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* Analysis Tab */}
        <TabsContent value="analysis" className="space-y-6">
          <GlassPanel title="Historical Analysis" description="Cross-era analysis and insights">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Crown className="h-5 w-5 text-gold-700" />
                      Nation Building Progress
                    </CardTitle>
                    <CardDescription>Key milestones across eras</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {data.slice(0, 5).map((era, idx) => (
                          <div key={idx} className="rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gold-700">{era.era}</span>
                              <span className="text-xs text-platinum-500-500">{era.period.start} - {era.period.end}</span>
                            </div>
                            <div className="space-y-1">
                              {era.nationBuildingMilestones?.slice(0, 3).map((milestone, mIdx) => (
                                <div key={mIdx} className="flex items-start gap-2 text-xs text-platinum-500-300">
                                  <div className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                                  <span className="line-clamp-1">{milestone}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-gold-700" />
                      Key Findings
                    </CardTitle>
                    <CardDescription>Critical historical insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {data.flatMap(era => era.keyFindings || []).slice(0, 10).map((finding, idx) => (
                          <div key={idx} className="flex items-start justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-platinum-500-200">{finding.finding}</p>
                              <p className="mt-1 text-xs text-platinum-500-400">Source: {finding.source}</p>
                            </div>
                            <Badge variant="outline" className="ml-2 text-xs shrink-0">{finding.metric}</Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Policy Evolution</CardTitle>
                  <CardDescription>Major policies and their impacts across eras</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {data.flatMap(era =>
                        (era.policyOutcomes || []).map((policy, pIdx) => (
                          <div key={pIdx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gold-700">{policy.policy}</span>
                                <Badge variant="outline" className="text-xs">{policy.year}</Badge>
                              </div>
                              <p className="mt-1 text-sm text-platinum-500-300">{policy.impact}</p>
                            </div>
                          </div>
                        ))
                      ).slice(0, 15)}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Policies Tab */}
        <TabsContent value="policies" className="space-y-6">
          <GlassPanel title="Policy Announcements" description="Major UAE policy announcements from 2010-2026">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                <MetricCard
                  title="Total Policies"
                  value={23}
                  icon={<Crown className="h-6 w-6" />}
                  gradient="gold"
                  status="success"
                />
                <MetricCard
                  title="Critical"
                  value={12}
                  icon={<AlertCircle className="h-6 w-6" />}
                  gradient="rose"
                  status="error"
                />
                <MetricCard
                  title="Major"
                  value={9}
                  icon={<TrendingUp className="h-6 w-6" />}
                  gradient="navy"
                  status="warning"
                />
                <MetricCard
                  title="Data Points"
                  value="500+"
                  icon={<Zap className="h-6 w-6" />}
                  gradient="emerald"
                  status="success"
                />
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Policy Significance Distribution</CardTitle>
                  <CardDescription>Classification by policy importance</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={[
                      { name: 'Critical', value: 12, color: CHART_COLORS.rose },
                      { name: 'Major', value: 9, color: CHART_COLORS.gold },
                      { name: 'Minor', value: 2, color: CHART_COLORS.platinum },
                    ]}
                    height={250}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Policy Relevance Matrix</CardTitle>
                  <CardDescription>UAE relevance assessment of major policies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {[
                        { policy: 'Vision 2021', relevance: 'CRITICAL', kpis: 'GDP per capita -35%, FDI 3.3% of GDP' },
                        { policy: 'National Agenda 2014', relevance: 'CRITICAL', kpis: '6 national priorities, 300+ officials' },
                        { policy: 'Golden Visa', relevance: 'CRITICAL', kpis: '10-year renewable, AED 2M threshold' },
                        { policy: 'Corporate Tax', relevance: 'CRITICAL', kpis: '9% rate, AED 375K threshold' },
                        { policy: 'Nuclear Energy', relevance: 'CRITICAL', kpis: '25% electricity, 22M tonnes avoided' },
                        { policy: 'Net Zero 2050', relevance: 'CRITICAL', kpis: 'AED 600B investment, MENA first' },
                        { policy: 'AI Strategy', relevance: 'CRITICAL', kpis: 'AED 335B economic boost' },
                        { policy: 'Energy Strategy 2050', relevance: 'CRITICAL', kpis: '42-45% efficiency, 50,000 green jobs' },
                        { policy: 'Cybercrime Laws', relevance: 'CRITICAL', kpis: 'Fines up to AED 10M, life imprisonment' },
                        { policy: 'Climate Change Law', relevance: 'CRITICAL', kpis: 'AED 50K-2M fines, Scope 1-3' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700">
                          <div className="flex-1">
                            <span className="text-sm font-medium text-gold-700">{item.policy}</span>
                            <p className="text-xs text-platinum-500-400 mt-1">{item.kpis}</p>
                          </div>
                          <Badge variant={item.relevance === 'CRITICAL' ? 'destructive' : 'outline'} className="ml-2">
                            {item.relevance}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Analysis</CardTitle>
                  <CardDescription>Public and expert sentiment by policy</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {[
                        { policy: 'Unemployment Insurance', positive: 90, negative: 5, neutral: 5 },
                        { policy: '4-Day Work Week', positive: 88, negative: 5, neutral: 7 },
                        { policy: 'Golden Visa', positive: 85, negative: 5, neutral: 10 },
                        { policy: 'Green Visa', positive: 85, negative: 5, neutral: 10 },
                        { policy: 'National Agenda', positive: 80, negative: 10, neutral: 10 },
                        { policy: 'AI Strategy', positive: 80, negative: 10, neutral: 10 },
                        { policy: 'Food Security', positive: 80, negative: 5, neutral: 15 },
                        { policy: 'Cybercrime Law 2021', positive: 5, negative: 90, neutral: 5 },
                        { policy: 'Cybercrime Law 2012', positive: 10, negative: 85, neutral: 5 },
                        { policy: 'Vision 2021', positive: 30, negative: 50, neutral: 20 },
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-500-200">{item.policy}</span>
                            <div className="flex gap-2 text-xs">
                              <span className="text-emerald-400">{item.positive}%</span>
                              <span className="text-rose-400">{item.negative}%</span>
                              <span className="text-platinum-500-400">{item.neutral}%</span>
                            </div>
                          </div>
                          <div className="flex h-2 overflow-hidden rounded-full bg-platinum-700">
                            <div className="bg-emerald-500" style={{ width: `${item.positive}%` }} />
                            <div className="bg-rose-500" style={{ width: `${item.negative}%` }} />
                            <div className="bg-platinum-500" style={{ width: `${item.neutral}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Dashboard KPIs</CardTitle>
                  <CardDescription>Key performance indicators across policy areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gold-700">Economic Diversification</h4>
                      {[
                        { kpi: 'FDI as % of GDP', value: '3.3%', status: 'Stagnant' },
                        { kpi: 'Non-oil GDP contribution', value: '-', status: 'Progressing' },
                        { kpi: 'Tourism GDP (Dubai)', value: '20%', status: 'Stable' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-platinum-500-300">{item.kpi}</span>
                          <Badge variant="outline" className="text-xs">{item.status}</Badge>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gold-700">Energy & Climate</h4>
                      {[
                        { kpi: 'Nuclear electricity share', value: '25%', status: 'Achieved' },
                        { kpi: 'Clean energy capacity', value: '14.2 GW', status: 'In Progress' },
                        { kpi: 'Carbon avoided (nuclear)', value: '22 MT/year', status: 'Achieved' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-platinum-500-300">{item.kpi}</span>
                          <Badge variant="outline" className="text-xs">{item.status}</Badge>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gold-700">Visa & Immigration</h4>
                      {[
                        { kpi: 'Golden Visa validity', value: '10 years', status: 'Active' },
                        { kpi: 'Unemployment insurance', value: '1M+', status: 'Exceeded' },
                        { kpi: 'Green Visa validity', value: '5 years', status: 'Active' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-platinum-500-300">{item.kpi}</span>
                          <Badge variant="outline" className="text-xs">{item.status}</Badge>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gold-700">Nuclear Program</h4>
                      {[
                        { kpi: 'Reactors operational', value: '4/4', status: 'Complete' },
                        { kpi: 'Total capacity', value: '5.6 GWe', status: 'Achieved' },
                        { kpi: 'Electricity share', value: '25%', status: 'Achieved' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-platinum-500-300">{item.kpi}</span>
                          <Badge variant="outline" className="text-xs">{item.status}</Badge>
                        </div>
                      ))}
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
