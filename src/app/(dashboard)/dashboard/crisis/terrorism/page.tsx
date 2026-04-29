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
  AlertTriangle,
  Shield,
  Zap,
  Crosshair,
  Users,
  Globe,
  AlertOctagon,
  Ban,
  Eye,
} from 'lucide-react'
import {
  useTerrorismExtremismData,
} from '@/lib/data-loader'

export default function TerrorismExtremismPage() {
  const { data } = useTerrorismExtremismData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Terrorism & Extremism data...</div>
      </div>
    )
  }

  const timeline = data.timeline || []
  const keyFindings = data.keyFindings || []
  const stakeholderImpacts = data.stakeholderImpacts || []
  const responseMetrics = data.responseMetrics

  // Terrorist entities data
  const entityData = [
    { name: 'Federal List (2014)', value: 83, color: CHART_COLORS.rose },
    { name: 'Local Terrorist List', value: 714, color: CHART_COLORS.orange },
    { name: 'Searchable Entities', value: 326, color: CHART_COLORS.gold },
  ]

  // Attack types
  const attackTypeData = [
    { name: 'Ballistic Missiles', value: 1800, color: CHART_COLORS.rose },
    { name: 'Drones', value: 147, color: CHART_COLORS.orange },
    { name: 'Ground Attacks', value: 3, color: CHART_COLORS.gold },
    { name: 'Stabbings', value: 1, color: CHART_COLORS.platinum },
  ]

  // Sentiment
  const sentimentData = [
    { name: 'Fear', value: 30, color: CHART_COLORS.rose },
    { name: 'Outrage', value: 25, color: CHART_COLORS.orange },
    { name: 'Resolute', value: 30, color: CHART_COLORS.navy },
    { name: 'Alarmed', value: 15, color: CHART_COLORS.gold },
  ]

  // Timeline events chart
  const timelineChartData = [
    { date: '2014', events: 1, severity: 40 },
    { date: '2022', events: 2, severity: 65 },
    { date: '2024', events: 2, severity: 70 },
    { date: '2026-Mar', events: 3, severity: 95 },
    { date: '2026-Apr', events: 2, severity: 85 },
  ]

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy" className="mb-2">CRISIS TYPE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Terrorism & Extremism</h1>
          <p className="mt-2 text-slate-400">
            Counter-terrorism, Houthi threats, Iran-linked cells, FATF concerns
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose-500/50 text-rose hover:bg-rose-500/10">
            <Eye className="h-4 w-4" />
            Watchlist
          </Button>
          <Button className="bg-gradient-to-r from-rose-600 to-red-600 hover:opacity-90 text-white gap-2">
            <Ban className="h-4 w-4" />
            Counter-Terrorism
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Designated Organizations"
          value="83"
          icon={<AlertOctagon className="h-6 w-6" />}
          gradient="rose"
          status="critical"
        />
        <MetricCard
          title="Total Entities Listed"
          value="714"
          icon={<Crosshair className="h-6 w-6" />}
          gradient="orange"
          status="critical"
        />
        <MetricCard
          title="Casualties (2022-2026)"
          value="9"
          icon={<Users className="h-6 w-6" />}
          gradient="rose"
          status="critical"
        />
        <MetricCard
          title="Alert Level"
          value="RED"
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
          <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Terrorism & Extremism Overview" description="Counter-terrorism monitoring and threat assessment">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Attack Type Distribution</CardTitle>
                  <CardDescription>Weapons/attack methods used against UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={attackTypeData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Incidents', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Terrorist Entity Lists</CardTitle>
                    <CardDescription>Designated organizations by list type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={entityData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Public Sentiment</CardTitle>
                    <CardDescription>Sentiment distribution during threats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Attack Timeline" description="Key terrorism-related events targeting UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Activity Over Time</CardTitle>
                  <CardDescription>Significant terrorism events 2014-2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={timelineChartData}
                    xAxisKey="date"
                    areas={[
                      { dataKey: 'events', name: 'Events', color: CHART_COLORS.rose },
                      { dataKey: 'severity', name: 'Severity', color: CHART_COLORS.orange },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Event Timeline</CardTitle>
                  <CardDescription>Chronological list of incidents</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="relative border-l-2 border-rose-500/50 pl-6 space-y-6">
                      {timeline.map((event, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-rose-500 border-2 border-slate-900" />
                          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-semibold text-slate-200">{event.event}</p>
                              <Badge variant="outline" className="text-xs">{event.date}</Badge>
                            </div>
                            <p className="text-sm text-slate-400">{event.description}</p>
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

        {/* Key Findings Tab */}
        <TabsContent value="keyfindings" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical counter-terrorism intelligence">
            <div className="space-y-6">
              <Card className="glass-card border-rose-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Critical Findings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {keyFindings.map((finding, idx) => (
                      <div key={idx} className="flex items-start justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                        <p className="font-medium text-slate-200">{typeof finding === 'string' ? finding : finding.finding || finding}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Stakeholder Impacts</CardTitle>
                  <CardDescription>Affected groups and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {stakeholderImpacts.map((impact, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <div className="flex items-center gap-3">
                            <Users className="h-4 w-4 text-rose" />
                            <span className="text-sm font-medium text-slate-200">{impact.stakeholder}</span>
                          </div>
                          <Badge variant="outline" className="text-rose-300 border-rose-500/50">{impact.sentiment}</Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Response Metrics</CardTitle>
                  <CardDescription>Counter-terrorism response indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Casualties (Total)</p>
                      <p className="text-lg font-bold text-rose-400">{responseMetrics?.casualties || 0}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Affected Population</p>
                      <p className="text-lg font-bold text-slate-200">{((responseMetrics?.affectedPopulation || 0) / 1e6).toFixed(1)}M</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Stage</p>
                      <p className="text-lg font-bold text-gold">{data.phoenixStage}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Severity</p>
                      <p className="text-lg font-bold text-rose-400">{data.severity}/5</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Watchlist Tab */}
        <TabsContent value="watchlist" className="space-y-6">
          <GlassPanel title="Terrorist Watchlist" description="Designated organizations and entities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Organization Categories</CardTitle>
                  <CardDescription>By designated list</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { list: 'Federal Law No. 7 (2014)', count: 83, color: 'rose' },
                      { list: 'Local Terrorist List', count: 714, color: 'orange' },
                      { list: 'Searchable Database', count: 326, color: 'gold' },
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-200">{item.list}</span>
                          <span className="text-lg font-bold text-rose">{item.count}</span>
                        </div>
                        <Progress value={(item.count / 714) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Intelligence Sources</CardTitle>
                  <CardDescription>Source reliability ratings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-2">
                      {data.sources?.map((source, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Crosshair className="h-4 w-4 text-navy" />
                            <span className="text-sm font-medium text-slate-200">{source.source}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">{source.tier}</Badge>
                            <Badge variant="outline" className="text-xs text-emerald-400">{source.credibility}</Badge>
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
      </Tabs>
    </div>
  )
}
