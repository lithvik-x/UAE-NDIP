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
  Package,
  Ship,
  Truck,
  Factory,
  Warehouse,
  Globe,
  ShoppingCart,
  AlertOctagon,
} from 'lucide-react'
import { useEconomicCrisisData } from '@/lib/data-loader'

export default function SupplyChainDisruptionsPage() {
  const { data } = useEconomicCrisisData()

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

  // Supply chain resilience data
  const resilienceData = [
    { month: 'Jan', score: 72, delays: 12 },
    { month: 'Feb', score: 68, delays: 18 },
    { month: 'Mar', score: 65, delays: 24 },
    { month: 'Apr', score: 58, delays: 31 },
    { month: 'May', score: 62, delays: 26 },
    { month: 'Jun', score: 70, delays: 19 },
    { month: 'Jul', score: 75, delays: 14 },
    { month: 'Aug', score: 78, delays: 11 },
    { month: 'Sep', score: 74, delays: 15 },
    { month: 'Oct', score: 76, delays: 13 },
    { month: 'Nov', score: 79, delays: 10 },
    { month: 'Dec', score: 82, delays: 8 },
  ]

  // Disruption sources data
  const disruptionData = [
    { name: 'Shipping Routes', value: 34, color: CHART_COLORS.gold },
    { name: 'Manufacturing', value: 28, color: CHART_COLORS.danger },
    { name: 'Raw Materials', value: 18, color: CHART_COLORS.navy },
    { name: 'Logistics', value: 12, color: CHART_COLORS.info },
    { name: 'Regulatory', value: 8, color: CHART_COLORS.emerald },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Resilient', value: 38, color: CHART_COLORS.emerald },
    { name: 'Concerned', value: 35, color: CHART_COLORS.gold },
    { name: 'Neutral', value: 27, color: CHART_COLORS.platinum },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">PHOENIX PROTOCOL: SUPPLY CHAIN</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">Supply Chain Disruptions</h1>
          <p className="mt-2 text-platinum-400">
            Global supply chain vulnerabilities, shipping disruptions, and logistics resilience for UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Ship className="h-4 w-4" />
            Logistics Portal
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Package className="h-4 w-4" />
            Supply Dashboard
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Resilience Score"
          value="82/100"
          previousValue="76/100"
          icon={<Warehouse className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Active Disruptions"
          value="3"
          previousValue="7"
          icon={<AlertOctagon className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Avg Delay Days"
          value="8"
          previousValue="13"
          icon={<Truck className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Diversified Suppliers"
          value="94%"
          previousValue="87%"
          icon={<Globe className="h-6 w-6" />}
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
              <p className="font-semibold text-platinum-200">Supply Chain Alert Level: {data.alertLevel}</p>
              <p className="text-sm text-platinum-400">
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
          <TabsTrigger value="resilience">Resilience Metrics</TabsTrigger>
          <TabsTrigger value="disruptions">Disruption Analysis</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Key Findings */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical supply chain disruption metrics and findings">
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
                      {finding.tier === 0 ? <Package className="h-5 w-5" /> :
                       finding.tier === 1 ? <Truck className="h-5 w-5" /> :
                       <AlertCircle className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium text-platinum-200">{finding.finding}</p>
                      <p className="text-sm text-platinum-400">Source: {finding.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xl font-bold text-gold-700">{finding.metric}</p>
                      <p className="text-xs text-platinum-400">Tier {finding.tier}</p>
                    </div>
                    {finding.alert && getAlertBadge(finding.alert)}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Resilience Metrics */}
        <TabsContent value="resilience" className="space-y-6">
          <GlassPanel title="Supply Chain Resilience" description="UAE supply chain stability and recovery metrics">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Resilience Score Trend</CardTitle>
                    <CardDescription>Monthly supply chain resilience (0-100)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={resilienceData}
                      xAxisKey="month"
                      bars={[
                        { dataKey: 'score', name: 'Resilience Score', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Supply Chain Sentiment</CardTitle>
                    <CardDescription>Business perception of supply chain stability</CardDescription>
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
                  <CardTitle className="text-lg">Key Supply Chain Indicators</CardTitle>
                  <CardDescription>Current status of critical supply chain factors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {[
                        { indicator: 'Port Operations', status: 'Normal', uptime: 98 },
                        { indicator: 'Air Freight Capacity', status: 'Near Normal', uptime: 89 },
                        { indicator: 'Cross-Border Trade', status: 'Normal', uptime: 95 },
                        { indicator: 'Warehouse Capacity', status: 'Normal', uptime: 92 },
                        { indicator: 'Last-Mile Delivery', status: 'Normal', uptime: 96 },
                        { indicator: 'Cold Chain Integrity', status: 'Normal', uptime: 99 },
                        { indicator: 'Customs Clearance', status: 'Normal', uptime: 94 },
                        { indicator: 'Fuel Supply', status: 'Normal', uptime: 97 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4">
                          <div className="flex items-center gap-3">
                            <Factory className="h-5 w-5 text-gold-700" />
                            <p className="font-medium text-platinum-200">{item.indicator}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="success" className="text-xs">{item.status}</Badge>
                            <p className="text-lg font-bold text-gold-700">{item.uptime}%</p>
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

        {/* Disruption Analysis */}
        <TabsContent value="disruptions" className="space-y-6">
          <GlassPanel title="Disruption Analysis" description="Sources and impact of supply chain disruptions">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Disruption Sources</CardTitle>
                  <CardDescription>Primary causes of supply chain disruptions</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={disruptionData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Delay Days Trend</CardTitle>
                  <CardDescription>Average delay days per month</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={resilienceData}
                    xAxisKey="month"
                    bars={[
                      { dataKey: 'delays', name: 'Delay Days', color: CHART_COLORS.danger },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Critical Import Dependencies</CardTitle>
                  <CardDescription>Sectors with highest import reliance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      {[
                        { sector: 'Electronics', reliance: 89, diversification: 72 },
                        { sector: 'Food & Agriculture', reliance: 76, diversification: 85 },
                        { sector: 'Machinery', reliance: 68, diversification: 78 },
                        { sector: 'Pharmaceuticals', reliance: 82, diversification: 65 },
                        { sector: 'Automotive', reliance: 74, diversification: 80 },
                        { sector: 'Textiles', reliance: 91, diversification: 88 },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{item.sector}</span>
                            <span className="text-sm text-platinum-400">Reliance: {item.reliance}% | Diversified: {item.diversification}%</span>
                          </div>
                          <div className="flex gap-2">
                            <Progress value={item.reliance} className="h-2 flex-1" />
                            <Progress value={item.diversification} className="h-2 flex-1" />
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

        {/* Timeline */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Supply Chain Crisis Timeline" description="Key disruption events affecting UAE supply chains">
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
                            <p className="font-semibold text-platinum-200">{event.event}</p>
                            <p className="text-sm text-platinum-400 mt-1">{event.description}</p>
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
