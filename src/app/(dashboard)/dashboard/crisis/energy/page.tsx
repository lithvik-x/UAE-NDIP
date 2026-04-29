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
  Fuel,
  Zap,
  Flame,
  Wind,
  Sun,
  DollarSign,
  Shield,
  Power,
} from 'lucide-react'
import { useEarlyWarningData } from '@/lib/data-loader'

export default function EnergyCrisesPage() {
  const { data } = useEarlyWarningData()

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

  // Oil price volatility data
  const oilPriceData = [
    { year: '2020', price: 42, volatility: 78 },
    { year: '2021', price: 68, volatility: 45 },
    { year: '2022', price: 94, volatility: 52 },
    { year: '2023', price: 78, volatility: 38 },
    { year: '2024', price: 82, volatility: 42 },
    { year: '2025', price: 76, volatility: 35 },
  ]

  // Energy mix vulnerability data
  const energyMixData = [
    { name: 'Oil & Gas', value: 58, risk: 32, color: CHART_COLORS.gold },
    { name: 'Nuclear', value: 25, risk: 15, color: CHART_COLORS.navy },
    { name: 'Solar', value: 12, risk: 8, color: CHART_COLORS.emerald },
    { name: 'Other Renewables', value: 5, risk: 5, color: CHART_COLORS.cyan },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Confident', value: 42, color: CHART_COLORS.emerald },
    { name: 'Cautious', value: 35, color: CHART_COLORS.gold },
    { name: 'Concerned', value: 23, color: CHART_COLORS.danger },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">PHOENIX PROTOCOL: ENERGY</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Energy Crises</h1>
          <p className="mt-2 text-slate-400">
            Oil, gas, electricity disruptions, and energy security threats affecting UAE and the region
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Fuel className="h-4 w-4" />
            ADNOC Portal
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Energy Dashboard
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Oil Reserves"
          value="105B+"
          previousValue="100B"
          icon={<Fuel className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Brent Crude"
          value="$76/bbl"
          previousValue="$82/bbl"
          icon={<DollarSign className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Grid Stability"
          value="99.2%"
          previousValue="97.8%"
          icon={<Power className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Energy Security"
          value="82/100"
          previousValue="78/100"
          icon={<Shield className="h-6 w-6" />}
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
              <p className="font-semibold text-slate-200">Energy Alert Level: {data.alertLevel}</p>
              <p className="text-sm text-slate-400">
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
          <TabsTrigger value="markets">Energy Markets</TabsTrigger>
          <TabsTrigger value="security">Energy Security</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Key Findings */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical energy crisis metrics and findings">
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
                      {finding.tier === 0 ? <Flame className="h-5 w-5" /> :
                       finding.tier === 1 ? <Zap className="h-5 w-5" /> :
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

        {/* Energy Markets */}
        <TabsContent value="markets" className="space-y-6">
          <GlassPanel title="Energy Market Analysis" description="Oil, gas, and electricity market trends">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Brent Crude Price Trend</CardTitle>
                    <CardDescription>USD per barrel, annual average</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={oilPriceData}
                      xAxisKey="year"
                      areas={[
                        { dataKey: 'price', name: 'Price ($/bbl)', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Price Volatility Index</CardTitle>
                    <CardDescription>Market volatility score (0-100)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={oilPriceData}
                      xAxisKey="year"
                      bars={[
                        { dataKey: 'volatility', name: 'Volatility', color: CHART_COLORS.danger },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Energy Sector Sentiment</CardTitle>
                  <CardDescription>Stakeholder sentiment regarding energy security</CardDescription>
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

        {/* Energy Security */}
        <TabsContent value="security" className="space-y-6">
          <GlassPanel title="Energy Security Assessment" description="UAE energy infrastructure resilience">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Energy Mix by Source</CardTitle>
                  <CardDescription>Current energy generation mix (%)</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={energyMixData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Strategic Energy Reserves</CardTitle>
                  <CardDescription>UAE strategic reserve levels and capacity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {[
                        { reserve: ' Crude Oil Strategic Reserve', days: 90, capacity: 85, status: 'Adequate' },
                        { reserve: 'Natural Gas Storage', days: 45, capacity: 72, status: 'Moderate' },
                        { reserve: 'Diesel Stockpile', days: 60, capacity: 88, status: 'Adequate' },
                        { reserve: 'Jet Fuel Reserve', days: 75, capacity: 92, status: 'Adequate' },
                        { reserve: 'Nuclear Fuel', days: 540, capacity: 95, status: 'Excellent' },
                        { reserve: 'Renewable Capacity Backup', days: 30, capacity: 65, status: 'Developing' },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.reserve}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-slate-400">{item.days} days</span>
                              <Badge variant="success" className="text-xs">{item.status}</Badge>
                            </div>
                          </div>
                          <Progress value={item.capacity} className="h-3" />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Infrastructure Vulnerability</CardTitle>
                  <CardDescription>Key energy infrastructure risk factors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { infrastructure: 'Fujairah Oil Hub', risk: 'HIGH', score: 78 },
                      { infrastructure: 'ADNOC Pipeline Network', risk: 'MEDIUM', score: 45 },
                      { infrastructure: 'Barakah Nuclear Plant', risk: 'LOW', score: 18 },
                      { infrastructure: 'National Grid', risk: 'LOW', score: 22 },
                      { infrastructure: 'LNG Terminals', risk: 'MEDIUM', score: 52 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-3">
                          <Wind className="h-5 w-5 text-gold" />
                          <p className="font-medium text-slate-200">{item.infrastructure}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={item.risk === 'HIGH' ? 'destructive' : item.risk === 'MEDIUM' ? 'warning' : 'success'}
                            className="text-xs"
                          >
                            {item.risk}
                          </Badge>
                          <p className="text-lg font-bold text-gold">{item.score}</p>
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
          <GlassPanel title="Energy Crisis Timeline" description="Key energy disruption events affecting UAE">
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
