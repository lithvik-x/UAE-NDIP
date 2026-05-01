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
  Users,
  Heart,
  Globe,
  Shield,
  Plane,
  Home,
  Utensils,
} from 'lucide-react'
import { useGeopoliticalCrisisData } from '@/lib/data-loader'

export default function HumanitarianCrisesPage() {
  const { data } = useGeopoliticalCrisisData()

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
    if (alert === 'YELLOW') return 'border-amber-500/50'
    return 'border-emerald-500/50'
  }

  // Refugee data
  const refugeeData = [
    { year: '2020', refugees: 12000, aidProvided: 450 },
    { year: '2021', refugees: 18000, aidProvided: 680 },
    { year: '2022', refugees: 24000, aidProvided: 890 },
    { year: '2023', refugees: 31000, aidProvided: 1100 },
    { year: '2024', refugees: 38000, aidProvided: 1350 },
    { year: '2025', refugees: 42000, aidProvided: 1580 },
  ]

  // Aid distribution data
  const aidData = [
    { name: 'Food Aid', value: 38, color: CHART_COLORS.gold },
    { name: 'Medical', value: 27, color: CHART_COLORS.danger },
    { name: 'Shelter', value: 20, color: CHART_COLORS.navy },
    { name: 'Education', value: 9, color: CHART_COLORS.emerald },
    { name: 'Other', value: 6, color: CHART_COLORS.info },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Compassionate', value: 48, color: CHART_COLORS.emerald },
    { name: 'Concerned', value: 29, color: CHART_COLORS.gold },
    { name: 'Neutral', value: 23, color: CHART_COLORS.platinum },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">PHOENIX PROTOCOL: HUMANITARIAN</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">Humanitarian Crises</h1>
          <p className="mt-2 text-platinum-500-400">
            Refugee movements, humanitarian aid operations, and displaced populations affecting the UAE region
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Globe className="h-4 w-4" />
            UNHCR Portal
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-500-950 gap-2">
            <Heart className="h-4 w-4" />
            Aid Dashboard
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Refugees Supported"
          value="42K+"
          previousValue="38K"
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Aid Provided"
          value="$1.58B"
          previousValue="$1.35B"
          icon={<Utensils className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Humanitarian Ops"
          value="24"
          previousValue="19"
          icon={<Plane className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Active Camps"
          value="7"
          previousValue="5"
          icon={<Home className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
      </div>

      {/* Alert Banner */}
      <div className={`rounded-xl border p-4 bg-platinum-900/50 ${getAlertColor(data.alertLevel)}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {data.alertLevel === 'RED' && <AlertCircle className="h-6 w-6 text-red-400" />}
            {data.alertLevel === 'YELLOW' && <AlertTriangle className="h-6 w-6 text-amber-400" />}
            {data.alertLevel === 'GREEN' && <TrendingUp className="h-6 w-6 text-emerald-400" />}
            <div>
              <p className="font-semibold text-platinum-500-200">Humanitarian Alert Level: {data.alertLevel}</p>
              <p className="text-sm text-platinum-500-400">
                {data.affectedEntities?.length || 0} affected entities | Crisis Stage: {data.phoenixStage}
              </p>
            </div>
          </div>
          {getAlertBadge(data.alertLevel)}
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Key Findings</TabsTrigger>
          <TabsTrigger value="refugees">Refugee Data</TabsTrigger>
          <TabsTrigger value="aid">Aid Operations</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Key Findings */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical humanitarian crisis metrics and findings">
            <div className="space-y-4">
              {(data.keyFindings || []).map((finding, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between rounded-lg border p-4 bg-platinum-800/50 hover:bg-platinum-800/70 transition-colors ${finding.alert ? getAlertColor(finding.alert) : 'border-platinum-700'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      finding.tier === 0 ? 'bg-gold-700/20 text-gold-700' :
                      finding.tier === 1 ? 'bg-emerald-500/20 text-emerald-500' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {finding.tier === 0 ? <Users className="h-5 w-5" /> :
                       finding.tier === 1 ? <Heart className="h-5 w-5" /> :
                       <AlertCircle className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium text-platinum-500-200">{finding.finding}</p>
                      <p className="text-sm text-platinum-500-400">Source: {finding.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xl font-bold text-gold-700">{finding.metric}</p>
                      <p className="text-xs text-platinum-500-400">Tier {finding.tier}</p>
                    </div>
                    {finding.alert && getAlertBadge(finding.alert)}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Refugee Data */}
        <TabsContent value="refugees" className="space-y-6">
          <GlassPanel title="Refugee & Displacement Data" description="Trends in refugee populations and support">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Refugee Population Trend</CardTitle>
                    <CardDescription>Total refugees supported by year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={refugeeData}
                      xAxisKey="year"
                      areas={[
                        { dataKey: 'refugees', name: 'Refugees', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Humanitarian Sentiment</CardTitle>
                    <CardDescription>Public attitude toward refugee support</CardDescription>
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

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Country of Origin Breakdown</CardTitle>
                  <CardDescription>Primary source nations for refugees</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: 'Syria', value: 14200, color: CHART_COLORS.danger },
                      { name: 'Yemen', value: 11800, color: CHART_COLORS.gold },
                      { name: 'Afghanistan', value: 7200, color: CHART_COLORS.navy },
                      { name: 'Iraq', value: 4800, color: CHART_COLORS.info },
                      { name: 'Somalia', value: 4000, color: CHART_COLORS.emerald },
                    ]}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Refugees', color: CHART_COLORS.gold },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Aid Operations */}
        <TabsContent value="aid" className="space-y-6">
          <GlassPanel title="Aid Operations" description="Humanitarian aid distribution and effectiveness">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Aid Distribution by Category</CardTitle>
                  <CardDescription>Percentage breakdown of humanitarian aid</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={aidData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Humanitarian Response Metrics</CardTitle>
                  <CardDescription>UAE aid operation effectiveness indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {[
                        { metric: 'Response Time', value: '< 48hrs', status: 'success' },
                        { metric: 'Food Security Coverage', value: '94%', status: 'success' },
                        { metric: 'Medical Care Access', value: '89%', status: 'success' },
                        { metric: 'Children in Schools', value: '76%', status: 'success' },
                        { metric: 'Women Protection Programs', value: '82%', status: 'success' },
                        { metric: 'Shelter Standards Met', value: '91%', status: 'success' },
                        { metric: 'Water/Sanitation', value: '97%', status: 'success' },
                        { metric: 'Cash Assistance', value: '68%', status: 'success' },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-500-200">{item.metric}</span>
                            <span className="text-lg font-bold text-gold-700">{item.value}</span>
                          </div>
                          <Progress value={item.metric.includes('%') ? parseInt(item.value) : 75} className="h-3" />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Humanitarian Crisis Timeline" description="Key events in regional humanitarian crises">
            <Card className="glass-card">
              <CardContent className="pt-6">
                <ScrollArea className="h-[600px]">
                  <div className="relative border-l-2 border-gold-700/30 pl-8 space-y-8">
                    {(data.timeline || []).map((event, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[37px] h-4 w-4 rounded-full bg-gold border-2 border-navy-950" />
                        <div className="flex items-start gap-4">
                          <p className="text-sm font-bold text-gold-700 whitespace-nowrap w-24">{event.date}</p>
                          <div>
                            <p className="font-semibold text-platinum-500-200">{event.event}</p>
                            <p className="text-sm text-platinum-500-400 mt-1">{event.description}</p>
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
