// @ts-nocheck
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/ui/metric-card'
import { GlassPanel } from '@/components/ui/glass-panel'
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
  TrendingUp,
  Heart,
  Activity,
  Shield,
  Users,
  Syringe,
  Thermometer,
  Bed,
} from 'lucide-react'
import { usePublicHealthData } from '@/lib/data-loader'

export default function HealthCrisesPage() {
  const { data } = usePublicHealthData()

  const getAlertBadge = (level: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><TrendingUp className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level}</Badge>
    }
  }

  const getAlertColor = (alert?: string) => {
    if (alert === 'RED') return 'border-red-500/50'
    if (alert === 'YELLOW') return 'border-yellow-500/50'
    return 'border-emerald-500/50'
  }

  // Disease outbreak data
  const outbreakData = [
    { year: '2020', cases: 98000, deaths: 434 },
    { year: '2021', cases: 74000, deaths: 212 },
    { year: '2022', cases: 52000, deaths: 128 },
    { year: '2023', cases: 38000, deaths: 89 },
    { year: '2024', cases: 29000, deaths: 67 },
    { year: '2025', cases: 22000, deaths: 48 },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: 42, color: CHART_COLORS.emerald },
    { name: 'Negative', value: 31, color: CHART_COLORS.danger },
    { name: 'Neutral', value: 27, color: CHART_COLORS.gold },
  ]

  // Healthcare capacity data
  const capacityData = [
    { name: 'ICU Beds', value: 89, color: CHART_COLORS.navy },
    { name: 'Ventilators', value: 76, color: CHART_COLORS.gold },
    { name: 'Isolation Units', value: 94, color: CHART_COLORS.cyan },
    { name: 'Mobile Units', value: 68, color: CHART_COLORS.purple },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">PHOENIX PROTOCOL: PUBLIC HEALTH</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Health Crises</h1>
          <p className="mt-2 text-slate-400">
            Pandemic preparedness, disease outbreaks, and public health emergencies affecting the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Heart className="h-4 w-4" />
            DOH Portal
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Activity className="h-4 w-4" />
            Health Dashboard
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Outbreaks"
          value="3"
          previousValue="5"
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Mortality Rate"
          value="0.4%"
          previousValue="0.6%"
          icon={<Thermometer className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="ICU Capacity"
          value="89%"
          previousValue="76%"
          icon={<Bed className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Vaccination Rate"
          value="94.7%"
          previousValue="91.2%"
          icon={<Syringe className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </div>

      {/* Alert Banner */}
      <div className={`rounded-xl border p-4 bg-slate-900/50 ${getAlertColor(data.alertLevel)}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {data.alertLevel === 'RED' && <AlertCircle className="h-6 w-6 text-red-400" />}
            {data.alertLevel === 'YELLOW' && <AlertTriangle className="h-6 w-6 text-yellow-400" />}
            {data.alertLevel === 'GREEN' && <TrendingUp className="h-6 w-6 text-emerald-400" />}
            <div>
              <p className="font-semibold text-slate-200">Health Alert Level: {data.alertLevel}</p>
              <p className="text-sm text-slate-400">
                Monitoring {data.affectedEntities?.length || 0} health threats across {data.stakeholderImpact?.length || 0} sectors
              </p>
            </div>
          </div>
          {getAlertBadge(data.alertLevel)}
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Key Findings</TabsTrigger>
          <TabsTrigger value="outbreaks">Outbreak Data</TabsTrigger>
          <TabsTrigger value="capacity">Healthcare Capacity</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Key Findings */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical health crisis metrics and findings">
            <div className="space-y-4">
              {(data.keyFindings || []).map((finding, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between rounded-lg border p-4 bg-slate-800/50 hover:bg-slate-800/70 transition-colors ${finding.alert ? getAlertColor(finding.alert) : 'border-slate-700'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      finding.tier === 0 ? 'bg-gold/20 text-gold' :
                      finding.tier === 1 ? 'bg-emerald/20 text-emerald' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {finding.tier === 0 ? <Heart className="h-5 w-5" /> :
                       finding.tier === 1 ? <Shield className="h-5 w-5" /> :
                       <AlertCircle className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium text-slate-200">{finding.finding}</p>
                      <p className="text-sm text-slate-400">Source: {finding.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xl font-bold text-gold">{finding.metric}</p>
                      <p className="text-xs text-slate-400">Tier {finding.tier}</p>
                    </div>
                    {finding.alert && getAlertBadge(finding.alert)}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Outbreak Data */}
        <TabsContent value="outbreaks" className="space-y-6">
          <GlassPanel title="Disease Outbreak Trends" description="Case counts and mortality data over time">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Cases Over Time</CardTitle>
                    <CardDescription>Confirmed cases by year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={outbreakData}
                      xAxisKey="year"
                      areas={[
                        { dataKey: 'cases', name: 'Cases', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Mortality Trend</CardTitle>
                    <CardDescription>Fatalities by year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={outbreakData}
                      xAxisKey="year"
                      bars={[
                        { dataKey: 'deaths', name: 'Deaths', color: CHART_COLORS.danger },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Public Health Sentiment</CardTitle>
                  <CardDescription>Population sentiment regarding health emergencies</CardDescription>
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
          </GlassPanel>
        </TabsContent>

        {/* Healthcare Capacity */}
        <TabsContent value="capacity" className="space-y-6">
          <GlassPanel title="Healthcare System Capacity" description="UAE healthcare infrastructure readiness">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Resource Utilization</CardTitle>
                  <CardDescription>Current utilization rates across healthcare facilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {capacityData.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.name}</span>
                            <span className="text-lg font-bold text-gold">{item.value}%</span>
                          </div>
                          <Progress value={item.value} className="h-3" />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Pandemic Preparedness Metrics</CardTitle>
                  <CardDescription>UAE readiness indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { metric: 'Early Detection Systems', value: 'Operational', status: 'success' },
                      { metric: 'Contact Tracing Capacity', value: '94%', status: 'success' },
                      { metric: 'Vaccine Stockpile', value: '18M doses', status: 'success' },
                      { metric: 'Isolation Facility Capacity', value: '32,000 beds', status: 'success' },
                      { metric: 'Medical Personnel Trained', value: '48,500', status: 'success' },
                      { metric: 'Border Health Screening', value: 'Active', status: 'success' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <p className="font-medium text-slate-200">{item.metric}</p>
                        <div className="flex items-center gap-3">
                          <p className="text-lg font-bold text-gold">{item.value}</p>
                          <Badge variant="success" className="text-xs">{item.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Health Crisis Timeline" description="Key events in UAE public health history">
            <Card className="glass-card">
              <CardContent className="pt-6">
                <ScrollArea className="h-[600px]">
                  <div className="relative border-l-2 border-gold/30 pl-8 space-y-8">
                    {(data.timeline || []).map((event, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[37px] h-4 w-4 rounded-full bg-gold border-2 border-navy-950" />
                        <div className="flex items-start gap-4">
                          <p className="text-sm font-bold text-gold whitespace-nowrap w-24">{event.date}</p>
                          <div>
                            <p className="font-semibold text-slate-200">{event.event}</p>
                            <p className="text-sm text-slate-400 mt-1">{event.description}</p>
                            {event.stage && (
                              <Badge variant="outline" className="mt-2 text-xs">{event.stage}</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
