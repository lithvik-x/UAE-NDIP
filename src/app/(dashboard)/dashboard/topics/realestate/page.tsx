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
  TrendingDown,
  Building2,
  Home,
  DollarSign,
  Globe,
  Users,
  Shield,
  MapPin,
} from 'lucide-react'
import { useRealEstateData } from '@/lib/data-loader'

export default function RealEstatePage() {
  const { data } = useRealEstateData()
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

  // Price trends
  const priceTrendData = [
    { quarter: 'Q1 2024', centre: 1850, jvc: 1400, marina: 2200, palm: 4500 },
    { quarter: 'Q2 2024', centre: 1920, jvc: 1450, marina: 2350, palm: 4700 },
    { quarter: 'Q3 2024', centre: 1980, jvc: 1500, marina: 2480, palm: 4900 },
    { quarter: 'Q4 2024', centre: 2062, jvc: 1550, marina: 2600, palm: 5200 },
    { quarter: 'Q1 2025', centre: 2150, jvc: 1600, marina: 2750, palm: 5500 },
  ]

  // Transaction data
  const transactionData = [
    { type: 'Off-Plan', value: 68, color: CHART_COLORS.gold },
    { type: 'Ready', value: 32, color: CHART_COLORS.navy },
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
          <Badge variant="gold" className="mb-2">P-SECTOR: REAL ESTATE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Real Estate</h1>
          <p className="mt-2 text-slate-400">
            {data.description}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Building2 className="h-4 w-4" />
            DLD Portal
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Home className="h-4 w-4" />
            Market Data
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Transaction Volume"
          value="AED 761B"
          previousValue="AED 620B"
          icon={<DollarSign className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Total Transactions"
          value="226K"
          previousValue="195K"
          icon={<Building2 className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Off-Plan Share"
          value="68%"
          previousValue="62%"
          icon={<MapPin className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment.overall}
          previousValue={sentiment.overall - 5}
          icon={<Shield className="h-6 w-6" />}
          gradient="platinum"
          status={sentiment.overall > 0 ? 'success' : 'warning'}
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
          <TabsTrigger value="market">Market Data</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
        </TabsList>

        {/* Key Findings */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical metrics and findings for Real Estate">
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
                      {finding.tier === 0 ? <Home className="h-5 w-5" /> :
                       finding.tier === 1 ? <Building2 className="h-5 w-5" /> :
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

        {/* Market Data Tab */}
        <TabsContent value="market" className="space-y-6">
          <GlassPanel title="Market Analytics" description="Real estate performance and pricing trends">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Price Trends by Area</CardTitle>
                    <CardDescription>AED per sq ft (2024–2025)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={priceTrendData}
                      xAxisKey="quarter"
                      lines={[
                        { dataKey: 'centre', name: 'City Centre', color: CHART_COLORS.gold },
                        { dataKey: 'jvc', name: 'JVC', color: CHART_COLORS.platinum },
                        { dataKey: 'marina', name: 'Marina', color: CHART_COLORS.navy },
                        { dataKey: 'palm', name: 'Palm Jumeirah', color: CHART_COLORS.cyan },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Transaction Mix</CardTitle>
                    <CardDescription>Off-plan vs ready properties</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={transactionData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Affordability Analysis</CardTitle>
                  <CardDescription>Price-to-income ratios and market valuations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { metric: 'Avg Price/sq ft (Centre)', value: 'AED 2,062', benchmark: 'AED 1,800', status: 'above' },
                      { metric: 'Gross Rental Yield (Apts)', value: '7%', benchmark: '5-6%', status: 'above' },
                      { metric: 'Gross Rental Yield (Villas)', value: '5%', benchmark: '4-5%', status: 'neutral' },
                      { metric: 'UBS Bubble Index', value: '0.64', benchmark: '0.5 (fair)', status: 'elevated' },
                      { metric: 'Max Affordable Price', value: 'AED 790K', benchmark: 'Market Avg', status: 'mismatch' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <p className="font-medium text-slate-200">{item.metric}</p>
                        <div className="flex items-center gap-3">
                          <p className="text-lg font-bold text-gold">{item.value}</p>
                          <Badge variant={item.status === 'above' ? 'success' : item.status === 'elevated' ? 'warning' : item.status === 'mismatch' ? 'destructive' : 'outline'} className="text-xs">
                            {item.status === 'above' ? '↑ Above' : item.status === 'elevated' ? '⚠ Elevated' : item.status === 'mismatch' ? '↓ Mismatch' : '→ Neutral'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Developers</CardTitle>
                  <CardDescription>Major real estate players in UAE market</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {[
                        { developer: 'Emaar Properties', projects: 'Burj Khalifa, Dubai Mall, Downtown', market_share: '28%' },
                        { developer: 'Nakheel', projects: 'Palm Jumeirah, Ibn Battuta', market_share: '18%' },
                        { developer: 'Damac Properties', projects: 'DAMAC Hills, Akoya', market_share: '15%' },
                        { developer: 'Aldar Properties', projects: 'Yas Island, Al Reem Island', market_share: '14%' },
                        { developer: 'Meraas', projects: 'City Walk, Bluewaters, Port de la Mer', market_share: '10%' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <div>
                            <p className="font-medium text-slate-200">{item.developer}</p>
                            <p className="text-sm text-slate-400">{item.projects}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-gold">{item.market_share}</p>
                            <p className="text-xs text-slate-400">Market Share</p>
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
          <GlassPanel title="Sentiment & Emotion Analysis" description="Emotional breakdown of Real Estate discourse">
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
                      { year: '2021', value: 38 },
                      { year: '2022', value: 42 },
                      { year: '2023', value: 48 },
                      { year: '2024', value: 48 },
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
          <GlassPanel title="Key Stakeholders" description="Entities and actors in the Real Estate sector">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Real Estate Stakeholders</CardTitle>
                <CardDescription>Primary and secondary actors in UAE real estate ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {stakeholders.map((stakeholder, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                          <Building2 className="h-5 w-5" />
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
