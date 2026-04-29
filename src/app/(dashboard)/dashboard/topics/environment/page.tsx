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
  Leaf,
  Wind,
  Droplets,
  Sun,
  TreePine,
  Factory,
  Recycle,
  Thermometer,
  CloudRain,
} from 'lucide-react'
import {
  useEnvironmentInfrastructureData,
} from '@/lib/data-loader'

export default function EnvironmentInfrastructurePage() {
  const { data } = useEnvironmentInfrastructureData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Environment & Infrastructure data...</div>
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
    { name: 'Positive', value: 48, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 35, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 17, color: CHART_COLORS.rose },
  ]

  // CO2 emissions trend
  const emissionsData = [
    { year: '2018', emissions: 195, color: CHART_COLORS.rose },
    { year: '2019', emissions: 198, color: CHART_COLORS.rose },
    { year: '2020', emissions: 185, color: CHART_COLORS.rose },
    { year: '2021', emissions: 192, color: CHART_COLORS.rose },
    { year: '2022', emissions: 188, color: CHART_COLORS.rose },
    { year: '2023', emissions: 180, color: CHART_COLORS.rose },
    { year: '2024', emissions: 172, color: CHART_COLORS.rose },
    { year: '2025', emissions: 165, color: CHART_COLORS.emerald },
  ]

  // Renewable energy data
  const renewableData = [
    { source: 'Solar', capacity: 6500, color: CHART_COLORS.gold },
    { source: 'Nuclear', capacity: 5600, color: CHART_COLORS.navy },
    { source: 'Wind', capacity: 1200, color: CHART_COLORS.cyan },
    { source: 'Waste-to-Energy', capacity: 400, color: CHART_COLORS.emerald },
  ]

  // Infrastructure projects
  const infrastructureData = [
    { name: 'Transportation', value: 35, color: CHART_COLORS.navy },
    { name: 'Energy Grid', value: 25, color: CHART_COLORS.gold },
    { name: 'Water Management', value: 18, color: CHART_COLORS.cyan },
    { name: 'Digital Infrastructure', value: 15, color: CHART_COLORS.platinum },
    { name: 'Renewable Energy', value: 7, color: CHART_COLORS.emerald },
  ]

  // Trend data for line chart
  const trendChartData = trends?.slice(0, 12).map((t, i) => ({
    month: t.period || `Month ${i + 1}`,
    value: t.value || 0,
    sentiment: t.sentiment || 50,
  })) || [
    { month: 'Jan', value: 620, sentiment: 55 },
    { month: 'Feb', value: 680, sentiment: 58 },
    { month: 'Mar', value: 750, sentiment: 62 },
    { month: 'Apr', value: 820, sentiment: 65 },
    { month: 'May', value: 890, sentiment: 68 },
    { month: 'Jun', value: 950, sentiment: 70 },
    { month: 'Jul', value: 1020, sentiment: 72 },
    { month: 'Aug', value: 980, sentiment: 69 },
    { month: 'Sep', value: 1050, sentiment: 73 },
    { month: 'Oct', value: 1120, sentiment: 76 },
    { month: 'Nov', value: 1180, sentiment: 78 },
    { month: 'Dec', value: 1250, sentiment: 80 },
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
          <Badge variant="navy" className="mb-2">C-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Environment & Infrastructure</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'Climate action, renewables, sustainability, urban development, utilities'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Leaf className="h-4 w-4" />
            Sustainability
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
          title="Renewable Capacity (MW)"
          value="13.7K"
          previousValue={11500}
          icon={<Sun className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="CO2 Reduction"
          value="15%"
          previousValue={10}
          icon={<Wind className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Water Desalination"
          value="14M"
          previousValue={13}
          icon={<Droplets className="h-6 w-6" />}
          gradient="cyan"
        />
        <MetricCard
          title="Green Buildings"
          value="45K"
          previousValue={38000}
          icon={<TreePine className="h-6 w-6" />}
          gradient="gold"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="climate">Climate</TabsTrigger>
          <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Environment & Infrastructure Overview" description="Sustainability metrics and environmental monitoring">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Environmental Media Coverage</CardTitle>
                  <CardDescription>Coverage trend over 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={trendChartData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'value', name: 'Coverage', color: CHART_COLORS.emerald },
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
                    <CardDescription>Public sentiment on environmental issues</CardDescription>
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
                    <CardTitle className="text-lg">CO2 Emissions Trend</CardTitle>
                    <CardDescription>Million tonnes 2018-2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={emissionsData}
                      xAxisKey="year"
                      lines={[
                        { dataKey: 'emissions', name: 'Emissions', color: CHART_COLORS.navy },
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

        {/* Climate Tab */}
        <TabsContent value="climate" className="space-y-6">
          <GlassPanel title="Climate Action & Renewables" description="UAE Net Zero 2050 and sustainability initiatives">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">CO2 Emissions Trajectory</CardTitle>
                  <CardDescription>Year-over-year emissions reduction</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={emissionsData}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'emissions', name: 'Million Tonnes', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Renewable Energy Mix</CardTitle>
                    <CardDescription>Installed capacity by source (MW)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={renewableData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Net Zero Targets</CardTitle>
                    <CardDescription>Progress toward 2050 goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { target: 'Net Zero 2050', progress: 25, icon: Globe },
                        { target: '50% Clean Energy', progress: 42, icon: Sun },
                        { target: '30% Emissions Reduction', progress: 50, icon: Leaf },
                        { target: 'Zero Waste landfills', progress: 18, icon: Recycle },
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <item.icon className="h-4 w-4 text-emerald" />
                              <span className="text-sm font-medium text-slate-200">{item.target}</span>
                            </div>
                            <span className="text-sm font-bold text-emerald">{item.progress}%</span>
                          </div>
                          <Progress value={item.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Climate Metrics</CardTitle>
                  <CardDescription>Current environmental indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'Air Quality Index', value: '42 AQI', status: 'Good', icon: Wind },
                      { label: 'Renewable Share', value: '27%', status: 'Growing', icon: Sun },
                      { label: 'Desalination Output', value: '14M m³/day', status: 'Stable', icon: Droplets },
                      { label: 'Forest Cover', value: '4.5%', status: 'Expanding', icon: TreePine },
                    ].map((item, idx) => (
                      <div key={idx} className="rounded-lg bg-slate-800/50 p-4 text-center">
                        <item.icon className="mx-auto h-6 w-6 text-emerald mb-2" />
                        <p className="text-xs text-slate-400">{item.label}</p>
                        <p className="text-xl font-bold text-slate-200">{item.value}</p>
                        <Badge variant="outline" className="mt-1 text-emerald text-xs">{item.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Findings Tab */}
        <TabsContent value="keyfindings" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical environmental and infrastructure findings">
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
                  <CardDescription>Complete list of environmental intelligence findings</CardDescription>
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

        {/* Infrastructure Tab */}
        <TabsContent value="infrastructure" className="space-y-6">
          <GlassPanel title="Infrastructure Development" description="Major projects and utility systems">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Infrastructure Investment</CardTitle>
                  <CardDescription>Distribution by sector (USD Billions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={infrastructureData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Investment %', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Major Projects</CardTitle>
                    <CardDescription>Flagship infrastructure initiatives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-2">
                        {[
                          { name: 'MBR Solar Park', status: 'Phase 4', progress: 75, icon: Sun },
                          { name: 'Barakah Nuclear Plant', status: 'Operating', progress: 100, icon: Factory },
                          { name: 'Etihad Rail', status: 'Phase 2', progress: 60, icon: Globe },
                          { name: 'Mohammed bin Rashid City', status: 'Ongoing', progress: 45, icon: Building },
                          { name: 'Abu Dhabi Metro', status: 'Planning', progress: 15, icon: Globe },
                          { name: 'DEWA Solar Park', status: 'Expansion', progress: 80, icon: Sun },
                        ].map((project, idx) => (
                          <div key={idx} className="rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <project.icon className="h-4 w-4 text-navy" />
                                <span className="text-sm font-medium text-slate-200">{project.name}</span>
                              </div>
                              <Badge variant="outline" className="text-xs">{project.status}</Badge>
                            </div>
                            <Progress value={project.progress} className="h-1" />
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Utility Metrics</CardTitle>
                    <CardDescription>Key infrastructure indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Electricity Generation', value: '75 GW', change: '+8%', icon: Zap },
                        { label: 'Water Desalination', value: '14 M m³', change: '+5%', icon: Droplets },
                        { label: 'Road Network', value: '4,000 km', change: '+120 km', icon: Globe },
                        { label: 'Airport Capacity', value: '120M pax', change: '+15%', icon: Factory },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5 text-navy" />
                            <span className="text-sm font-medium text-slate-200">{item.label}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-navy">{item.value}</span>
                            <span className="ml-2 text-xs text-emerald">{item.change}</span>
                          </div>
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
