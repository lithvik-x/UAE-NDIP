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
  Globe,
  Shield,
  Zap,
  Plane,
  Users,
  TrendingUp,
  TrendingDown,
  Building,
  Flame,
  Crosshair,
} from 'lucide-react'
import {
  useGeopoliticalCrisisData,
} from '@/lib/data-loader'

export default function GeopoliticalCrisisPage() {
  const { data } = useGeopoliticalCrisisData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Geopolitical Crisis data...</div>
      </div>
    )
  }

  const timeline = data.timeline || []
  const keyFindings = data.keyFindings || []
  const stakeholderImpacts = data.stakeholderImpacts || []
  const responseMetrics = data.responseMetrics

  // Sentiment distribution
  const sentimentData = [
    { name: 'Fear/Anxious', value: 35, color: CHART_COLORS.rose },
    { name: 'Negative', value: 30, color: CHART_COLORS.orange },
    { name: 'Resolute', value: 25, color: CHART_COLORS.navy },
    { name: 'Neutral', value: 10, color: CHART_COLORS.platinum },
  ]

  // Iran missiles fired breakdown
  const missileData = [
    { name: 'Missiles', value: 420, color: CHART_COLORS.rose },
    { name: 'Drones', value: 1150, color: CHART_COLORS.orange },
    { name: 'Intercepted', value: 1480, color: CHART_COLORS.emerald },
  ]

  // Economic impact data
  const economicImpactData = [
    { name: 'Stock Market Losses', value: 120, color: CHART_COLORS.rose },
    { name: 'Business Losses', value: 200, color: CHART_COLORS.orange },
    { name: 'Oil Hub Damage', value: 45, color: CHART_COLORS.gold },
    { name: 'Tourism Impact', value: 80, color: CHART_COLORS.platinum },
  ]

  // Timeline events chart data
  const timelineChartData = [
    { date: 'Feb 28', events: 1, severity: 95 },
    { date: 'Mar 1', events: 3, severity: 98 },
    { date: 'Mar 2', events: 2, severity: 90 },
    { date: 'Mar 14', events: 1, severity: 75 },
    { date: 'Mar 16', events: 2, severity: 88 },
    { date: 'Apr 15', events: 1, severity: 55 },
    { date: 'Apr 20', events: 2, severity: 60 },
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
          <h1 className="text-3xl font-extrabold gradient-text-navy">Geopolitical Crises</h1>
          <p className="mt-2 text-slate-400">
            Iran-UAE tensions, Yemen conflict, Gulf security, regional alignment
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose-500/50 text-rose hover:bg-rose-500/10">
            <Globe className="h-4 w-4" />
            Regional Intel
          </Button>
          <Button className="bg-gradient-to-r from-rose-600 to-orange-600 hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Escalate
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Missiles & Drones Fired"
          value="1,700+"
          icon={<Flame className="h-6 w-6" />}
          gradient="rose"
          status="critical"
        />
        <MetricCard
          title="Casualties"
          value="6"
          previousValue={0}
          icon={<Users className="h-6 w-6" />}
          gradient="rose"
          status="critical"
        />
        <MetricCard
          title="Economic Loss"
          value="$200B"
          icon={<TrendingDown className="h-6 w-6" />}
          gradient="orange"
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
          <TabsTrigger value="impact">Impact</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Geopolitical Crisis Overview" description="Iran-UAE conflict and regional tensions">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Attack Volume Timeline</CardTitle>
                  <CardDescription>Daily crisis events during Iran-UAE conflict</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={timelineChartData}
                    xAxisKey="date"
                    areas={[
                      { dataKey: 'events', name: 'Events', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Public sentiment during crisis</CardDescription>
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
                    <CardTitle className="text-lg">Attack Breakdown</CardTitle>
                    <CardDescription>Iranian weapons fired at UAE (defense ministry)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={missileData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Count', color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Crisis Timeline" description="Key events in the UAE-Iran geopolitical crisis">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Event Timeline</CardTitle>
                  <CardDescription>Chronological crisis events</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
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
          <GlassPanel title="Key Findings" description="Critical intelligence on geopolitical crisis">
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
                        <div className="flex-1">
                          <p className="font-medium text-slate-200">{typeof finding === 'string' ? finding : finding.finding || finding}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Economic Impact</CardTitle>
                  <CardDescription>Financial damage from conflict</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={economicImpactData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'USD Bn', color: CHART_COLORS.orange },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Intelligence Sources</CardTitle>
                  <CardDescription>Credibility-rated information sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {data.sources?.map((source, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Crosshair className="h-4 w-4 text-navy" />
                            <span className="text-sm font-medium text-slate-200">{source.source}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">{source.tier}</Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Impact Tab */}
        <TabsContent value="impact" className="space-y-6">
          <GlassPanel title="Stakeholder Impact" description="Affected parties and their status">
            <div className="space-y-6">
              {stakeholderImpacts.map((impact, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{impact.stakeholder}</CardTitle>
                      <Badge variant="outline" className="text-rose-300 border-rose-500/50">{impact.sentiment}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{impact.impact}</p>
                  </CardContent>
                </Card>
              ))}

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Response Metrics</CardTitle>
                  <CardDescription>Crisis response performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Containment Time</p>
                      <p className="text-lg font-bold text-slate-200">{responseMetrics?.containmentTime || 'Ongoing'}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Recovery Time</p>
                      <p className="text-lg font-bold text-slate-200">{responseMetrics?.recoveryTime || 'Unknown'}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Casualties</p>
                      <p className="text-lg font-bold text-rose-400">{responseMetrics?.casualties || 0}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Economic Loss</p>
                      <p className="text-lg font-bold text-rose-400">${((responseMetrics?.economicLoss || 0) / 1e9).toFixed(0)}B</p>
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
