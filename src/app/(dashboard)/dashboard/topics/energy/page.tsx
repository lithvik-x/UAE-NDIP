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
  TrendingUp,
  Zap,
  Fuel,
  Sun,
  Leaf,
  Globe,
  Activity,
  Shield,
} from 'lucide-react'
import { useEnergySustainabilityData } from '@/lib/data-loader'

export default function EnergySustainabilityPage() {
  const { data } = useEnergySustainabilityData()
  const { keyFindings, metrics, sentiment, emotions, trends, stakeholders, uaeRelevance, alertLevel } = data

  // Sentiment breakdown
  const sentimentData = [
    { name: 'Positive', value: sentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Negative', value: sentiment.negative, color: CHART_COLORS.danger },
    { name: 'Neutral', value: sentiment.neutral, color: CHART_COLORS.gold },
  ]

  // Emotion distribution
  const emotionData = [
    { name: 'Joy', value: emotions.joy, color: CHART_COLORS.gold },
    { name: 'Trust', value: emotions.trust, color: CHART_COLORS.navy },
    { name: 'Fear', value: emotions.fear, color: CHART_COLORS.danger },
    { name: 'Surprise', value: emotions.surprise, color: CHART_COLORS.purple },
    { name: 'Sadness', value: emotions.sadness, color: CHART_COLORS.cyan },
    { name: 'Disgust', value: emotions.disgust, color: CHART_COLORS.orange },
    { name: 'Anger', value: emotions.anger, color: CHART_COLORS.rose },
    { name: 'Anticipation', value: emotions.anticipation, color: CHART_COLORS.emerald },
  ]

  // Energy mix data
  const energyMixData = [
    { name: 'Oil & Gas', value: 55, color: CHART_COLORS.gold },
    { name: 'Nuclear', value: 25, color: CHART_COLORS.navy },
    { name: 'Solar', value: 12, color: CHART_COLORS.gold },
    { name: 'Other Renewables', value: 8, color: CHART_COLORS.emerald },
  ]

  // Production trend data
  const productionTrendData = [
    { year: '2020', oil: 3.2, renewables: 3.1 },
    { year: '2021', oil: 3.4, renewables: 4.2 },
    { year: '2022', oil: 3.6, renewables: 5.5 },
    { year: '2023', oil: 3.8, renewables: 6.1 },
    { year: '2024', oil: 4.1, renewables: 7.2 },
    { year: '2025', oil: 4.3, renewables: 7.9 },
    { year: '2027 Target', oil: 5.0, renewables: 23.0 },
  ]

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

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">P-SECTOR: ENERGY & SUSTAINABILITY</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Energy & Sustainability</h1>
          <p className="mt-2 text-slate-400">
            {data.description}
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
          value="105-111B"
          previousValue="100-105B"
          icon={<Fuel className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="ADNOC Target"
          value="5M bpd"
          previousValue="4.3M bpd"
          icon={<Activity className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Renewable Capacity"
          value="7.9 GW"
          previousValue="6.5 GW"
          icon={<Sun className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment.overall}
          previousValue={sentiment.overall - 2}
          icon={<Leaf className="h-6 w-6" />}
          gradient="platinum"
          status={sentiment.overall > 0 ? 'success' : 'error'}
        />
      </div>

      {/* Alert Banner */}
      <div className={`rounded-xl border p-4 bg-slate-900/50 ${getAlertColor(alertLevel)}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {alertLevel === 'RED' && <AlertCircle className="h-6 w-6 text-red-400" />}
            {alertLevel === 'YELLOW' && <AlertTriangle className="h-6 w-6 text-yellow-400" />}
            {alertLevel === 'GREEN' && <TrendingUp className="h-6 w-6 text-emerald-400" />}
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
          <TabsTrigger value="overview">Key Findings</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
        </TabsList>

        {/* Key Findings */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical metrics and findings for Energy & Sustainability">
            <div className="space-y-4">
              {keyFindings.map((finding, index) => (
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
                      {finding.tier === 0 ? <Zap className="h-5 w-5" /> :
                       finding.tier === 1 ? <Sun className="h-5 w-5" /> :
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

        {/* Production Tab */}
        <TabsContent value="production" className="space-y-6">
          <GlassPanel title="Energy Production" description="Oil, gas, and renewable capacity analysis">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Energy Mix 2025</CardTitle>
                    <CardDescription>Share of total generation capacity</CardDescription>
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
                    <CardTitle className="text-lg">Production Trends</CardTitle>
                    <CardDescription>Oil production vs renewables (million bpd / GW)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={productionTrendData}
                      xAxisKey="year"
                      lines={[
                        { dataKey: 'oil', name: 'Oil (M bpd)', color: CHART_COLORS.gold },
                        { dataKey: 'renewables', name: 'Renewables (GW)', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Strategic Energy Targets</CardTitle>
                  <CardDescription>UAE 2031 energy diversification roadmap</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { target: 'ADNOC Production', current: '4.3M bpd', goal: '5M bpd by 2027', progress: 86, color: CHART_COLORS.gold },
                      { target: 'Renewable Capacity', current: '7.9 GW', goal: '23 GW by 2031', progress: 34, color: CHART_COLORS.emerald },
                      { target: 'Nuclear Share', current: '25%', goal: '30%+ by 2031', progress: 83, color: CHART_COLORS.navy },
                      { target: 'Hydrogen Production', current: 'Pilot', goal: '1.4 MTPA by 2031', progress: 15, color: CHART_COLORS.cyan },
                      { target: 'Non-Oil GDP', current: '75.5%', goal: '85% by 2031', progress: 89, color: CHART_COLORS.platinum },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-200">{item.target}</span>
                          <div className="text-right">
                            <span className="text-sm font-bold text-slate-200">{item.current}</span>
                            <span className="text-xs text-slate-400 ml-2">→ {item.goal}</span>
                          </div>
                        </div>
                        <Progress
                          value={item.progress}
                          className="h-3"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">ADNOC Valuation Metrics</CardTitle>
                  <CardDescription>Company performance and market position</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {[
                        { metric: 'Production Target', value: '5M bpd by 2027', status: 'On Track' },
                        { metric: 'Market Valuation', value: '$100B+', status: 'Growing' },
                        { metric: 'OPEC+ Quota Compliance', value: '100%', status: 'Compliant' },
                        { metric: 'Downstream Investment', value: '$23B program', status: 'Active' },
                        { metric: 'Carbon Intensity Target', value: '25% reduction by 2030', status: 'In Progress' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <p className="font-medium text-slate-200">{item.metric}</p>
                          <div className="flex items-center gap-3">
                            <p className="text-lg font-bold text-gold">{item.value}</p>
                            <Badge variant={item.status === 'On Track' ? 'success' : item.status === 'Compliant' ? 'success' : item.status === 'Growing' ? 'default' : 'warning'} className="text-xs">
                              {item.status}
                            </Badge>
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

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment & Emotion Analysis" description="Emotional breakdown of Energy & Sustainability discourse">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Positive, negative, and neutral ratio</CardDescription>
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
                    <CardTitle className="text-lg">Emotion Breakdown</CardTitle>
                    <CardDescription>Plutchik emotion model distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={emotionData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Score', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Trends</CardTitle>
                  <CardDescription>Year-over-year sentiment comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={[
                      { year: '2021', value: 48 },
                      { year: '2022', value: 52 },
                      { year: '2023', value: 55 },
                      { year: '2024', value: 53 },
                      { year: '2025', value: 55 },
                    ]}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'value', name: 'Score', color: CHART_COLORS.gold },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Stakeholders Tab */}
        <TabsContent value="stakeholders" className="space-y-6">
          <GlassPanel title="Key Stakeholders" description="Entities and actors in the Energy & Sustainability sector">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Energy & Sustainability Stakeholders</CardTitle>
                <CardDescription>Primary and secondary actors in UAE energy ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {stakeholders.map((stakeholder, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                          <Fuel className="h-5 w-5" />
                        </div>
                        <p className="flex-1 font-medium text-slate-200">{stakeholder}</p>
                        <Badge variant="outline" className="text-xs">Tier 1</Badge>
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
