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
  TrendingUp,
  TrendingDown,
  DollarSign,
  Building,
  Landmark,
  Wallet,
  Briefcase,
} from 'lucide-react'
import {
  useEconomicCrisisData,
} from '@/lib/data-loader'

export default function EconomicCrisisPage() {
  const { data } = useEconomicCrisisData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Economic Crisis data...</div>
      </div>
    )
  }

  const timeline = data.timeline || []
  const keyFindings = data.keyFindings || []
  const stakeholderImpacts = data.stakeholderImpacts || []
  const responseMetrics = data.responseMetrics

  // Property price trend (2009 crisis)
  const propertyData = [
    { year: '2007', price: 100, color: CHART_COLORS.gold },
    { year: '2008', price: 80, color: CHART_COLORS.gold },
    { year: '2009', price: 40, color: CHART_COLORS.rose },
    { year: '2010', price: 50, color: CHART_COLORS.gold },
    { year: '2012', price: 70, color: CHART_COLORS.emerald },
    { year: '2014', price: 90, color: CHART_COLORS.emerald },
    { year: '2016', price: 100, color: CHART_COLORS.emerald },
    { year: '2020', price: 85, color: CHART_COLORS.orange },
    { year: '2024', price: 120, color: CHART_COLORS.emerald },
    { year: '2026', price: 90, color: CHART_COLORS.rose },
  ]

  // Sentiment
  const sentimentData = [
    { name: 'Negative', value: 40, color: CHART_COLORS.rose },
    { name: 'Strained', value: 25, color: CHART_COLORS.orange },
    { name: 'Resilient', value: 25, color: CHART_COLORS.emerald },
    { name: 'Recovering', value: 10, color: CHART_COLORS.navy },
  ]

  // Crisis comparison
  const crisisCompareData = [
    { name: 'Dubai Debt 2009', loss: 59, color: CHART_COLORS.rose },
    { name: 'NMC Health', loss: 5.4, color: CHART_COLORS.orange },
    { name: 'Abraaj Group', loss: 1.1, color: CHART_COLORS.gold },
    { name: 'Iran War 2026', loss: 120, color: CHART_COLORS.rose },
  ]

  // Recovery timeline
  const recoveryData = [
    { year: '2009', stage: 'Crisis', color: CHART_COLORS.rose },
    { year: '2010', stage: 'Bailout', color: CHART_COLORS.orange },
    { year: '2012', stage: 'Stabilization', color: CHART_COLORS.gold },
    { year: '2016', stage: 'Recovery', color: CHART_COLORS.emerald },
    { year: '2020', stage: 'COVID Shock', color: CHART_COLORS.orange },
    { year: '2024', stage: 'Growth', color: CHART_COLORS.emerald },
    { year: '2026', stage: 'Iran War', color: CHART_COLORS.rose },
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
          <h1 className="text-3xl font-extrabold gradient-text-navy">Economic Crises</h1>
          <p className="mt-2 text-slate-400">
            Dubai debt crisis, NMC fraud, Abraaj collapse, Iran war economic impact
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-500/50 text-gold hover:bg-gold-500/10">
            <Landmark className="h-4 w-4" />
            Central Bank
          </Button>
          <Button className="bg-gradient-to-r from-gold-600 to-yellow-600 hover:opacity-90 text-slate-900 gap-2">
            <DollarSign className="h-4 w-4" />
            Stabilize
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Market Cap Lost (2026)"
          value="$120B"
          icon={<TrendingDown className="h-6 w-6" />}
          gradient="rose"
          status="critical"
        />
        <MetricCard
          title="2009 Dubai Debt"
          value="$59B"
          icon={<Building className="h-6 w-6" />}
          gradient="orange"
          status="critical"
        />
        <MetricCard
          title="NMC Fraud"
          value="$5.4B"
          icon={<Briefcase className="h-6 w-6" />}
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
          <TabsTrigger value="recovery">Recovery</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Economic Crisis Overview" description="UAE economic crises and market shocks">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Property Price Index (Rebased 2007=100)</CardTitle>
                  <CardDescription>Dubai real estate through economic crises</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={propertyData}
                    xAxisKey="year"
                    lines={[
                      { dataKey: 'price', name: 'Price Index', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Major Crisis Losses (USD Bn)</CardTitle>
                    <CardDescription>Historical economic crisis impact</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={crisisCompareData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'loss', name: 'Loss (USD Bn)', color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Public/Investor Sentiment</CardTitle>
                    <CardDescription>Sentiment during economic crises</CardDescription>
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
          <GlassPanel title="Economic Crisis Timeline" description="Key economic events and market shocks">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Recovery Timeline</CardTitle>
                  <CardDescription>Stages through major economic events</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={recoveryData}
                    xAxisKey="year"
                    areas={[
                      { dataKey: 'stage', name: 'Stage', color: CHART_COLORS.navy },
                    ]}
                    height={200}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Event Timeline</CardTitle>
                  <CardDescription>Chronological economic crisis events</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[450px]">
                    <div className="relative border-l-2 border-gold-500/50 pl-6 space-y-6">
                      {timeline.map((event, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-gold-500 border-2 border-slate-900" />
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
          <GlassPanel title="Key Findings" description="Critical economic crisis intelligence">
            <div className="space-y-6">
              <Card className="glass-card border-gold-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-gold-400">
                    <AlertTriangle className="h-5 w-5" />
                    Critical Findings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {keyFindings.map((finding, idx) => (
                      <div key={idx} className="flex items-start justify-between rounded-lg bg-gold-500/10 p-4 border border-gold-500/30">
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
                            <Wallet className="h-4 w-4 text-gold" />
                            <span className="text-sm font-medium text-slate-200">{impact.stakeholder}</span>
                          </div>
                          <Badge variant="outline" className="text-gold-300 border-gold-500/50">{impact.sentiment}</Badge>
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
                      <p className="text-lg font-bold text-slate-200">{responseMetrics?.containmentTime || '6 months'}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Recovery Time</p>
                      <p className="text-lg font-bold text-slate-200">{responseMetrics?.recoveryTime || '7 years'}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Economic Loss</p>
                      <p className="text-lg font-bold text-rose-400">${((responseMetrics?.economicLoss || 0) / 1e9).toFixed(0)}B</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Bailout/Funding</p>
                      <p className="text-lg font-bold text-emerald-400">${((responseMetrics?.fundingAllocated || 0) / 1e9).toFixed(1)}B</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Recovery Tab */}
        <TabsContent value="recovery" className="space-y-6">
          <GlassPanel title="Recovery Analysis" description="Economic resilience and recovery patterns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Historical Recovery Timeline</CardTitle>
                  <CardDescription>Dubai debt crisis to full recovery</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { year: '2009-12-14', event: 'Abu Dhabi $10B bailout', status: 'Bailout', color: 'orange' },
                      { year: '2010-05-20', event: 'Dubai World restructuring ($23.5B to $14.4B)', status: 'Restructuring', color: 'gold' },
                      { year: '2014-2015', event: 'Property market stabilization', status: 'Stabilizing', color: 'emerald' },
                      { year: '2016-08', event: 'Nakheel declared debt-free', status: 'Recovered', color: 'emerald' },
                      { year: '2020', event: 'COVID-19 economic shock', status: 'COVID Shock', color: 'orange' },
                      { year: '2024', event: 'Post-COVID growth record', status: 'Growth', color: 'emerald' },
                      { year: '2026-02-28', event: 'Iran war market crash', status: 'Crisis', color: 'rose' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-4">
                          <div className={`h-3 w-3 rounded-full bg-${item.color}-500`} />
                          <div>
                            <p className="text-sm font-medium text-slate-200">{item.event}</p>
                            <p className="text-xs text-slate-400">{item.year}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className={`text-${item.color}-300 border-${item.color}-500/50`}>{item.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Intelligence Sources</CardTitle>
                  <CardDescription>Economic data sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {data.sources?.map((source, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Landmark className="h-4 w-4 text-navy" />
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
      </Tabs>
    </div>
  )
}
