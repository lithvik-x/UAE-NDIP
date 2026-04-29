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
  Hash,
  Lightbulb,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
  Crown,
  Newspaper,
  User,
  Building,
  Plane,
  Lock,
  Bug,
  Radar,
  Crosshair,
  AlertOctagon,
} from 'lucide-react'
import {
  useSecurityDefenseData,
} from '@/lib/data-loader'

export default function SecurityDefensePage() {
  const { data } = useSecurityDefenseData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Security & Defense data...</div>
      </div>
    )
  }

  const { metrics, keyFindings, sentiment, emotions, credibility, trends, stakeholders } = data

  // Extract key metrics
  const volume = metrics?.volume || 0
  const reach = metrics?.reach || 0
  const engagement = metrics?.engagement || 0

  // Key findings formatted for display
  const keyFindingsData = keyFindings?.slice(0, 10) || []

  // Sentiment data for pie chart
  const sentimentData = sentiment ? [
    { name: 'Positive', value: sentiment.positive || 0, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentiment.neutral || 0, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentiment.negative || 0, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 28, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 42, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 30, color: CHART_COLORS.rose },
  ]

  // Defense spending trend
  const defenseSpendingData = [
    { year: '2018', spending: 58.7, color: CHART_COLORS.navy },
    { year: '2019', spending: 61.2, color: CHART_COLORS.navy },
    { year: '2020', spending: 56.8, color: CHART_COLORS.navy },
    { year: '2021', spending: 62.1, color: CHART_COLORS.navy },
    { year: '2022', spending: 69.4, color: CHART_COLORS.navy },
    { year: '2023', spending: 73.2, color: CHART_COLORS.navy },
    { year: '2024', spending: 77.8, color: CHART_COLORS.navy },
    { year: '2025', spending: 82.1, color: CHART_COLORS.navy },
  ]

  // Military capabilities data
  const capabilitiesData = [
    { name: 'Air Force', value: 92, color: CHART_COLORS.navy },
    { name: 'Naval Forces', value: 85, color: CHART_COLORS.gold },
    { name: 'Land Forces', value: 88, color: CHART_COLORS.platinum },
    { name: 'Cyber Units', value: 78, color: CHART_COLORS.emerald },
    { name: 'Special Ops', value: 90, color: CHART_COLORS.rose },
  ]

  // Threat level data
  const threatData = [
    { name: 'Cyber Threats', value: 65, color: CHART_COLORS.rose },
    { name: 'Terrorism', value: 35, color: CHART_COLORS.gold },
    { name: 'Regional Instability', value: 55, color: CHART_COLORS.orange },
    { name: 'Border Security', value: 25, color: CHART_COLORS.emerald },
  ]

  // Trend data for line chart
  const trendChartData = trends?.slice(0, 12).map((t, i) => ({
    month: t.period || `Month ${i + 1}`,
    value: t.value || 0,
    sentiment: t.sentiment || 50,
  })) || [
    { month: 'Jan', value: 890, sentiment: 42 },
    { month: 'Feb', value: 920, sentiment: 45 },
    { month: 'Mar', value: 1050, sentiment: 48 },
    { month: 'Apr', value: 980, sentiment: 44 },
    { month: 'May', value: 1120, sentiment: 52 },
    { month: 'Jun', value: 1080, sentiment: 50 },
    { month: 'Jul', value: 1250, sentiment: 55 },
    { month: 'Aug', value: 1180, sentiment: 53 },
    { month: 'Sep', value: 1320, sentiment: 58 },
    { month: 'Oct', value: 1450, sentiment: 62 },
    { month: 'Nov', value: 1380, sentiment: 59 },
    { month: 'Dec', value: 1520, sentiment: 65 },
  ]

  // Key findings by alert level
  const redFindings = keyFindingsData.filter(f => f.alert === 'RED')
  const yellowFindings = keyFindingsData.filter(f => f.alert === 'YELLOW')

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  const getTierBadge = (tier?: number) => {
    const colors: Record<number, string> = {
      0: 'bg-red-500/20 text-red-400 border-red-500/50',
      1: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
      2: 'bg-blue-500/20 text-blue-400 border-blue-500/50',
      3: 'bg-platinum-500/20 text-platinum-400 border-platinum-500/50',
      4: 'bg-slate-500/20 text-slate-400 border-slate-500/50',
    }
    return (
      <Badge variant="outline" className={`text-xs border ${colors[tier || 0]}`}>
        Tier {tier}
      </Badge>
    )
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy" className="mb-2">B-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Security & Defense</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'Military capabilities, cyber defense, EDGE Group, counter-terrorism'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Radar className="h-4 w-4" />
            Threat Intel
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Defense Spending (USD Bn)"
          value="82.1"
          previousValue={77.8}
          icon={<Plane className="h-6 w-6" />}
          gradient="navy"
          status="info"
        />
        <MetricCard
          title="Threat Level"
          value="MODERATE"
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Cyber Incidents"
          value="127"
          previousValue={142}
          icon={<Bug className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Personnel Active"
          value="65K"
          previousValue={63}
          icon={<Users className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="military">Military</TabsTrigger>
          <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
          <TabsTrigger value="threats">Threats</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Security & Defense Overview" description="Security monitoring and defense capabilities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Security Monitoring Volume</CardTitle>
                  <CardDescription>Media and intelligence tracking over 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={trendChartData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'value', name: 'Volume', color: CHART_COLORS.navy },
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
                    <CardDescription>Overall security-related sentiment</CardDescription>
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
                    <CardTitle className="text-lg">Defense Spending Trend</CardTitle>
                    <CardDescription>Military budget 2018-2025 (USD Bn)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={defenseSpendingData}
                      xAxisKey="year"
                      lines={[
                        { dataKey: 'spending', name: 'Spending', color: CHART_COLORS.navy },
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

        {/* Military Tab */}
        <TabsContent value="military" className="space-y-6">
          <GlassPanel title="Military Capabilities" description="Defense forces and EDGE Group analysis">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Military Capability Index</CardTitle>
                  <CardDescription>Performance rating by branch</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={capabilitiesData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Capability Index', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">EDGE Group Entities</CardTitle>
                    <CardDescription>Key defense and technology companies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {['EDGE', 'NIMR', 'CARAB', 'Globalsecurity', 'EAlove', 'ADSB', 'SIATT', 'Al Tariq'].map((entity, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Crosshair className="h-4 w-4 text-navy" />
                              <span className="text-sm font-medium text-slate-200">{entity}</span>
                            </div>
                            <Badge variant="outline" className="text-navy">B-Sector</Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Force Composition</CardTitle>
                    <CardDescription>Military personnel distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { branch: 'Army', personnel: 25000, pct: 38 },
                        { branch: 'Air Force', personnel: 15000, pct: 23 },
                        { branch: 'Navy', personnel: 12000, pct: 18 },
                        { branch: 'Special Forces', personnel: 8000, pct: 12 },
                        { branch: 'Cyber Command', personnel: 5000, pct: 8 },
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.branch}</span>
                            <span className="text-sm font-medium text-navy">{item.personnel.toLocaleString()} ({item.pct}%)</span>
                          </div>
                          <Progress value={item.pct} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Findings Tab */}
        <TabsContent value="keyfindings" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical security intelligence findings">
            <div className="space-y-6">
              {/* Red Alerts Section */}
              {redFindings.length > 0 && (
                <Card className="glass-card border-red-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                      <AlertCircle className="h-5 w-5" />
                      Red Alert Findings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {redFindings.map((finding, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-red-500/10 p-4 border border-red-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{finding.finding}</p>
                            <p className="mt-1 text-sm text-slate-400">Source: {finding.source}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="destructive" className="text-xs">{finding.metric}</Badge>
                            {finding.tier !== undefined && <div className="mt-1">{getTierBadge(finding.tier)}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Yellow Alerts Section */}
              {yellowFindings.length > 0 && (
                <Card className="glass-card border-yellow-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
                      <AlertTriangle className="h-5 w-5" />
                      Yellow Alert Findings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {yellowFindings.map((finding, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{finding.finding}</p>
                            <p className="mt-1 text-sm text-slate-400">Source: {finding.source}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="warning" className="text-xs">{finding.metric}</Badge>
                            {finding.tier !== undefined && <div className="mt-1">{getTierBadge(finding.tier)}</div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* All Findings Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">All Key Findings</CardTitle>
                  <CardDescription>Complete list of security intelligence findings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {keyFindingsData.map((finding, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                              <Lightbulb className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{finding.finding}</p>
                              <p className="text-sm text-slate-400">Source: {finding.source}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <Badge variant="outline" className="mb-1">{finding.metric}</Badge>
                              <p className="text-xs text-slate-400">Metric</p>
                            </div>
                            <div className="text-center">
                              {getTierBadge(finding.tier)}
                              <p className="mt-1 text-xs text-slate-400">Tier</p>
                            </div>
                            <div className="text-center">
                              {getAlertBadge(finding.alert)}
                              <p className="mt-1 text-xs text-slate-400">Alert</p>
                            </div>
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

        {/* Threats Tab */}
        <TabsContent value="threats" className="space-y-6">
          <GlassPanel title="Threat Analysis" description="Current threat landscape assessment">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Threat Level by Category</CardTitle>
                  <CardDescription>Assessment of current security threats</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={threatData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Threat Level', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Cyber Threat Stats</CardTitle>
                    <CardDescription>Monthly cyber incident summary</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { type: 'Ransomware', incidents: 23, trend: 'up' },
                        { type: 'Phishing', incidents: 58, trend: 'down' },
                        { type: 'DDoS', incidents: 12, trend: 'stable' },
                        { type: 'APT Attacks', incidents: 5, trend: 'up' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Bug className="h-5 w-5 text-rose" />
                            <span className="text-sm font-medium text-slate-200">{item.type}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-rose">{item.incidents}</span>
                            {item.trend === 'up' && <TrendingUp className="h-4 w-4 text-red-400" />}
                            {item.trend === 'down' && <AlertTriangle className="h-4 w-4 text-emerald-400" />}
                            {item.trend === 'stable' && <Shield className="h-4 w-4 text-platinum-400" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Regional Threats</CardTitle>
                    <CardDescription>Threat assessment by region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { region: 'Gulf Region', level: 'HIGH', color: 'text-red-400' },
                        { region: 'Levant', level: 'MODERATE', color: 'text-yellow-400' },
                        { region: 'Red Sea', level: 'HIGH', color: 'text-red-400' },
                        { region: 'Mediterranean', level: 'LOW', color: 'text-emerald-400' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm font-medium text-slate-200">{item.region}</span>
                          <Badge variant="outline" className={item.color}>{item.level}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
