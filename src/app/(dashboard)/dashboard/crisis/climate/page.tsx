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
  Cloud,
  CloudRain,
  Thermometer,
  Wind,
  Sun,
  Waves,
} from 'lucide-react'
import {
  useNaturalDisasterData,
} from '@/lib/data-loader'

export default function ClimateEnvironmentalPage() {
  const { data } = useNaturalDisasterData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Climate & Environmental data...</div>
      </div>
    )
  }

  const timeline = data.timeline || []
  const keyFindings = data.keyFindings || []
  const stakeholderImpacts = data.stakeholderImpacts || []
  const responseMetrics = data.responseMetrics

  // Temperature trend
  const tempData = [
    { month: 'Jan', temp: 18, record: 28 },
    { month: 'Feb', temp: 20, record: 32 },
    { month: 'Mar', temp: 24, record: 38 },
    { month: 'Apr', temp: 28, record: 44 },
    { month: 'May', temp: 33, record: 51.6 },
    { month: 'Jun', temp: 36, record: 52 },
    { month: 'Jul', temp: 38, record: 53 },
    { month: 'Aug', temp: 38, record: 52 },
    { month: 'Sep', temp: 35, record: 48 },
    { month: 'Oct', temp: 30, record: 42 },
    { month: 'Nov', temp: 24, record: 35 },
    { month: 'Dec', temp: 20, record: 30 },
  ]

  // Rainfall events
  const rainfallData = [
    { month: 'Jan', mm: 15, color: CHART_COLORS.navy },
    { month: 'Feb', mm: 8, color: CHART_COLORS.navy },
    { month: 'Mar', mm: 244, color: CHART_COLORS.rose },
    { month: 'Apr', mm: 164, color: CHART_COLORS.rose },
    { month: 'May', mm: 0, color: CHART_COLORS.platinum },
    { month: 'Jun', mm: 0, color: CHART_COLORS.platinum },
    { month: 'Jul', mm: 0, color: CHART_COLORS.platinum },
    { month: 'Aug', mm: 2, color: CHART_COLORS.platinum },
    { month: 'Sep', mm: 0, color: CHART_COLORS.platinum },
    { month: 'Oct', mm: 5, color: CHART_COLORS.platinum },
    { month: 'Nov', mm: 12, color: CHART_COLORS.navy },
    { month: 'Dec', mm: 18, color: CHART_COLORS.navy },
  ]

  // Sentiment
  const sentimentData = [
    { name: 'Resilient', value: 40, color: CHART_COLORS.emerald },
    { name: 'Concerned', value: 30, color: CHART_COLORS.gold },
    { name: 'Negative', value: 20, color: CHART_COLORS.rose },
    { name: 'Grateful', value: 10, color: CHART_COLORS.navy },
  ]

  // Infrastructure investment
  const investmentData = [
    { name: 'Stormwater Drainage', value: 8.2, color: CHART_COLORS.navy },
    { name: 'Deep Tunnel Project', value: 15.0, color: CHART_COLORS.gold },
    { name: 'Heat Safety', value: 0.5, color: CHART_COLORS.orange },
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
          <h1 className="text-3xl font-extrabold gradient-text-navy">Climate & Environmental</h1>
          <p className="mt-2 text-slate-400">
            Extreme heat, flooding, climate change, infrastructure resilience
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald-500/50 text-emerald hover:bg-emerald-500/10">
            <Waves className="h-4 w-4" />
            Environment
          </Button>
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 text-white gap-2">
            <Shield className="h-4 w-4" />
            Resilience Plan
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Record Temperature"
          value="53C"
          icon={<Thermometer className="h-6 w-6" />}
          gradient="orange"
          status="critical"
        />
        <MetricCard
          title="Rainfall (Apr 2024)"
          value="254.8mm"
          icon={<CloudRain className="h-6 w-6" />}
          gradient="navy"
          status="critical"
        />
        <MetricCard
          title="Infrastructure Investment"
          value="$23.2B"
          icon={<Waves className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Alert Level"
          value="YELLOW"
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="gold"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
          <TabsTrigger value="resilience">Resilience</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Climate & Environmental Overview" description="UAE climate threats and environmental monitoring">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Temperature Range</CardTitle>
                  <CardDescription>Average vs record temperatures (C)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={tempData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'temp', name: 'Average', color: CHART_COLORS.gold },
                      { dataKey: 'record', name: 'Record', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Monthly Rainfall</CardTitle>
                    <CardDescription>Precipitation in mm (note March 2026 record)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={rainfallData}
                      xAxisKey="month"
                      bars={[
                        { dataKey: 'mm', name: 'Rainfall (mm)', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Public Sentiment</CardTitle>
                    <CardDescription>Sentiment on climate events</CardDescription>
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
          <GlassPanel title="Climate Event Timeline" description="Key environmental events and disasters">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Event Timeline</CardTitle>
                  <CardDescription>Major climate and environmental events</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="relative border-l-2 border-emerald-500/50 pl-6 space-y-6">
                      {timeline.map((event, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-emerald-500 border-2 border-slate-900" />
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
          <GlassPanel title="Key Findings" description="Critical climate and environmental intelligence">
            <div className="space-y-6">
              <Card className="glass-card border-emerald-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                    <AlertTriangle className="h-5 w-5" />
                    Climate Findings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {keyFindings.map((finding, idx) => (
                      <div key={idx} className="flex items-start justify-between rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                        <p className="font-medium text-slate-200">{typeof finding === 'string' ? finding : finding.finding || finding}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Stakeholder Impacts</CardTitle>
                  <CardDescription>Affected groups and sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {stakeholderImpacts.map((impact, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <div className="flex items-center gap-3">
                            <Cloud className="h-4 w-4 text-emerald" />
                            <span className="text-sm font-medium text-slate-200">{impact.stakeholder}</span>
                          </div>
                          <Badge variant="outline" className="text-emerald-300 border-emerald-500/50">{impact.sentiment}</Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Response Metrics</CardTitle>
                  <CardDescription>Crisis response performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Containment Time</p>
                      <p className="text-lg font-bold text-slate-200">{responseMetrics?.containmentTime || '3 days'}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Recovery Time</p>
                      <p className="text-lg font-bold text-slate-200">{responseMetrics?.recoveryTime || 'Ongoing'}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Casualties</p>
                      <p className="text-lg font-bold text-emerald-400">{responseMetrics?.casualties || 0}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Funding Allocated</p>
                      <p className="text-lg font-bold text-emerald-400">${((responseMetrics?.fundingAllocated || 0) / 1e9).toFixed(1)}B</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Resilience Tab */}
        <TabsContent value="resilience" className="space-y-6">
          <GlassPanel title="Infrastructure Resilience" description="Climate adaptation and investment">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Climate Investment (AED Bn)</CardTitle>
                  <CardDescription>Infrastructure and safety investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={investmentData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Investment (AED Bn)', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Climate Adaptation Measures</CardTitle>
                  <CardDescription>Key resilience initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { measure: 'Midday Work Ban', status: '99% compliance', color: 'emerald' },
                      { measure: 'Stormwater Drainage Upgrade', status: '700% capacity increase', color: 'navy' },
                      { measure: '100-Year Deep Tunnel Project', status: 'In progress', color: 'gold' },
                      { measure: 'Cloud Seeding Program', status: 'Enhanced monitoring', color: 'platinum' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-3">
                          <Wind className="h-4 w-4 text-emerald" />
                          <span className="text-sm font-medium text-slate-200">{item.measure}</span>
                        </div>
                        <Badge variant="outline" className={`text-${item.color}-300 border-${item.color}-500/50`}>{item.status}</Badge>
                      </div>
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
