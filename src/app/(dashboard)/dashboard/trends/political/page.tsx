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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Landmark,
  Vote,
  Handshake,
  Building,
  Scale,
  Flag,
  Map,
} from 'lucide-react'
import {
  useTrendsDataArrayData,
} from '@/lib/data-loader'

export default function PoliticalTrendsPage() {
  const { data: trendsData } = useTrendsDataArrayData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Political Trends data...</div>
      </div>
    )
  }

  // Filter geopolitical trend data
  const geopoliticalTrend = trendsData.find(t => t.category === 'geopolitical')

  // Use provided data or fallback
  const politicalData = geopoliticalTrend || {
    id: 'trend-geopolitical',
    category: 'geopolitical',
    name: 'Geopolitical Shift',
    description: 'The UAE is actively navigating a multipolar world order with BRICS membership, strategic hedging between US and China, and emerging as a middle power through effective diplomatic and economic strategies.',
    adoptionRate: 72,
    uaeAdoptionRate: 88,
    generationalBreakdown: {
      genZ: 65,
      millennial: 78,
      genX: 82,
      boomer: 75,
    },
    sentiment: {
      positive: 58,
      negative: 24,
      neutral: 18,
      overall: 0.52,
      volume: 45000,
    },
    forecasts: [
      {
        scenario: 'optimistic',
        probability: 0.72,
        timeline: '2026-2028',
        indicators: ['BRICS trade 40% of global trade', 'UAE FDI $45B (2nd globally)', 'CEPA target $1T trade by 2031'],
      },
      {
        scenario: 'baseline',
        probability: 0.60,
        timeline: '2027-2030',
        indicators: ['De-dollarization 57% USD reserves', 'Multi-aligned foreign policy success', 'UAE investment framework $1.4T in US'],
      },
      {
        scenario: 'pessimistic',
        probability: 0.28,
        timeline: '2028-2032',
        indicators: ['BRICS unity challenges', 'US-China tensions affecting trade', 'Regional instability impacts'],
      },
    ],
    keyDrivers: [
      'UAE BRICS membership since January 2024',
      'Belfer Center: UAE GDP $456B (1975: $20B)',
      'CEPA agreements concluded: 32 since September 2021',
      'Defense: EDGE Group 37th globally',
      'Microsoft $15.2B technology investment',
    ],
    credibility: {
      tier: 2,
      score: 88,
      sources: 20,
      lastVerified: '2026-04-27',
    },
    uaeRelevance: {
      score: 96,
      level: 'critical',
      justification: 'UAE BRICS membership and multipolar positioning directly impact economic strategy',
    },
    alertLevel: 'YELLOW',
    sources: [
      { name: 'Munich Security Conference', tier: 2, date: '2026-04-27' },
      { name: 'Belfer Center', tier: 2, date: '2026-04-27' },
    ],
    lastUpdated: '2026-04-27',
  }

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: politicalData.sentiment?.positive || 58, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: politicalData.sentiment?.neutral || 18, color: CHART_COLORS.platinum },
    { name: 'Negative', value: politicalData.sentiment?.negative || 24, color: CHART_COLORS.rose },
  ]

  // Diplomatic relations
  const diplomaticData = [
    { region: 'GCC States', status: 95, color: CHART_COLORS.gold },
    { region: 'European Union', status: 85, color: CHART_COLORS.navy },
    { region: 'BRICS Nations', status: 78, color: CHART_COLORS.platinum },
    { region: 'United States', status: 82, color: CHART_COLORS.emerald },
    { region: 'China', status: 75, color: CHART_COLORS.rose },
    { region: 'India', status: 88, color: CHART_COLORS.cyan },
  ]

  // Trade agreements
  const tradeAgreements = [
    { name: 'CEPA with India', status: 'Active', year: 2022 },
    { name: 'CEPA with Israel', status: 'Active', year: 2022 },
    { name: 'CEPA with Turkey', status: 'Active', year: 2023 },
    { name: 'CEPA with Kenya', status: 'Active', year: 2023 },
    { name: 'CEPA with Singapore', status: 'Active', year: 2024 },
    { name: 'CEPA with Ukraine', status: 'Pending', year: 2025 },
  ]

  // Key partnerships
  const partnershipsData = [
    { name: 'Microsoft G42', value: '$15B+', type: 'Technology' },
    { name: 'EDGE Group', value: '$4.7B', type: 'Defense' },
    { name: 'Mubadala', value: '$50B+', type: 'Investment' },
    { name: 'ADIA', value: '$800B+', type: 'Sovereign Wealth' },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">POLITICAL TRENDS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Political Trends</h1>
          <p className="mt-2 text-slate-400">
            Geopolitical positioning, diplomatic relations, BRICS membership, and international partnerships
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Map className="h-4 w-4" />
            View Relations
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze Policy
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Diplomatic Relations"
          value="165+"
          previousValue={160}
          icon={<Handshake className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
        <MetricCard
          title="CEPA Agreements"
          value="32"
          previousValue={28}
          icon={<Vote className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="UAE Adoption"
          value={`${politicalData.uaeAdoptionRate || 88}%`}
          previousValue={(politicalData.uaeAdoptionRate || 88) - 3}
          icon={<Scale className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Alert Level"
          value={politicalData.alertLevel || 'YELLOW'}
          previousValue="GREEN"
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient={politicalData.alertLevel === 'GREEN' ? 'emerald' : 'gold'}
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="diplomacy">Diplomacy</TabsTrigger>
          <TabsTrigger value="trade">Trade Relations</TabsTrigger>
          <TabsTrigger value="forecast">Forecasts</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Geopolitical Overview" description="Key political indicators and diplomatic posture">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                  <CardDescription>Public sentiment towards UAE geopolitical positioning</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Partnerships</CardTitle>
                    <CardDescription>Major strategic partnerships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {partnershipsData.map((partner, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Building className="h-5 w-5 text-platinum" />
                            <div>
                              <span className="text-sm font-medium text-slate-200">{partner.name}</span>
                              <p className="text-xs text-slate-400">{partner.type}</p>
                            </div>
                          </div>
                          <span className="text-lg font-bold text-platinum">{partner.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Generational Adoption</CardTitle>
                    <CardDescription>Political awareness by generation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { name: 'Gen Z', value: politicalData.generationalBreakdown?.genZ || 65 },
                        { name: 'Millennial', value: politicalData.generationalBreakdown?.millennial || 78 },
                        { name: 'Gen X', value: politicalData.generationalBreakdown?.genX || 82 },
                        { name: 'Boomer', value: politicalData.generationalBreakdown?.boomer || 75 },
                      ]}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Awareness %', color: CHART_COLORS.platinum },
                      ]}
                      height={220}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Diplomacy Tab */}
        <TabsContent value="diplomacy" className="space-y-6">
          <GlassPanel title="Diplomatic Relations" description="Bilateral and multilateral diplomatic posture">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Relation Status by Region</CardTitle>
                  <CardDescription>Current diplomatic relation strength</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={diplomaticData}
                    xAxisKey="region"
                    bars={[
                      { dataKey: 'status', name: 'Relation %', color: CHART_COLORS.platinum },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">BRICS Membership</CardTitle>
                    <CardDescription>Since January 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        'Trade 40% of global trade via BRICS+',
                        'New Development Bank investments',
                        'De-dollarization initiatives',
                        'Strategic hedging framework',
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 rounded-lg bg-slate-800/50 p-3">
                          <Flag className="h-4 w-4 text-platinum mt-0.5" />
                          <span className="text-sm text-slate-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Defense Capabilities</CardTitle>
                    <CardDescription>Military and security posture</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'EDGE Group Ranking', value: '37th globally', icon: Scale },
                        { label: 'Arms Sales (SIPRI)', value: '$4.7B', icon: Flag },
                        { label: 'Defense Budget', value: '$22.7B', icon: Building },
                        { label: 'Personnel', value: '65,000+', icon: Users },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5 text-platinum" />
                            <span className="text-sm font-medium text-slate-200">{item.label}</span>
                          </div>
                          <span className="text-lg font-bold text-platinum">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Trade Tab */}
        <TabsContent value="trade" className="space-y-6">
          <GlassPanel title="Trade Relations" description="CEPA agreements and trade partnerships">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Active CEPA Agreements</CardTitle>
                  <CardDescription>Comprehensive Economic Partnership Agreements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {tradeAgreements.map((agreement, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum">
                              <Handshake className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{agreement.name}</p>
                              <p className="text-sm text-slate-400">Signed: {agreement.year}</p>
                            </div>
                          </div>
                          <Badge
                            variant={agreement.status === 'Active' ? 'success' : 'warning'}
                          >
                            {agreement.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Trade Metrics</CardTitle>
                    <CardDescription>Key trade indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Total Trade', value: '$1.637T', sublabel: '9th globally' },
                        { label: 'Non-Oil Trade', value: '$600B+', sublabel: '+12% YoY' },
                        { label: 'Export Growth', value: '+18%', sublabel: 'YoY' },
                        { label: 'Import Growth', value: '+8%', sublabel: 'YoY' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div>
                            <span className="text-sm font-medium text-slate-200">{item.label}</span>
                            <p className="text-xs text-slate-400">{item.sublabel}</p>
                          </div>
                          <span className="text-xl font-bold text-platinum">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Investment Flows</CardTitle>
                    <CardDescription>Foreign direct investment metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'FDI Inflows', value: '$45B', change: '+50% YoY' },
                        { label: 'FDI Outflows', value: '$35B', change: '+25% YoY' },
                        { label: 'Stock', value: '$250B', change: 'Cumulative' },
                        { label: 'Global Ranking', value: '2nd', change: 'FDI attractive' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div>
                            <span className="text-sm font-medium text-slate-200">{item.label}</span>
                            <p className="text-xs text-emerald-400">{item.change}</p>
                          </div>
                          <span className="text-xl font-bold text-platinum">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Forecasts Tab */}
        <TabsContent value="forecast" className="space-y-6">
          <GlassPanel title="Geopolitical Forecasts" description="Predictive scenarios for UAE geopolitical positioning">
            <div className="space-y-6">
              {politicalData.forecasts?.map((forecast, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg capitalize">{forecast.scenario} Scenario</CardTitle>
                      <Badge
                        variant={forecast.scenario === 'optimistic' ? 'success' : forecast.scenario === 'baseline' ? 'default' : 'destructive'}
                      >
                        {Math.round(forecast.probability * 100)}% probability
                      </Badge>
                    </div>
                    <CardDescription>Timeline: {forecast.timeline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {forecast.indicators?.map((indicator, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2 rounded-lg bg-slate-800/50 p-3">
                          <TrendingUp className="h-4 w-4 text-platinum mt-0.5" />
                          <span className="text-sm text-slate-200">{indicator}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
