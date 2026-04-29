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
  Cpu,
  Rocket,
  Lightbulb,
  Building,
  TrendingUp,
  Globe,
  Star,
  Users,
  DollarSign,
  Shield,
} from 'lucide-react'
import {
  useTechnologyInnovationData,
} from '@/lib/data-loader'

export default function TechnologyInnovationPage() {
  const { data } = useTechnologyInnovationData()

  // Extract metrics from data
  const aiReadinessScore = data?.metrics?.aiReadinessScore || 87
  const g42Investment = data?.metrics?.g42Investment || 15.2
  const startupEcosystemValue = data?.metrics?.startupEcosystemValue || 8.5
  const spaceProgramBudget = data?.metrics?.spaceProgramBudget || 2.8

  // AI adoption by sector
  const aiAdoptionData = [
    { name: 'Healthcare', value: 85, color: CHART_COLORS.gold },
    { name: 'Finance', value: 92, color: CHART_COLORS.navy },
    { name: 'Government', value: 78, color: CHART_COLORS.platinum },
    { name: 'Energy', value: 65, color: CHART_COLORS.emerald },
    { name: 'Transportation', value: 72, color: CHART_COLORS.cyan },
  ]

  // Tech hub comparison
  const hubComparisonData = [
    { name: 'Dubai', value: 88, color: CHART_COLORS.gold },
    { name: 'Abu Dhabi', value: 82, color: CHART_COLORS.navy },
    { name: 'Sharjah', value: 45, color: CHART_COLORS.platinum },
    { name: 'RAK', value: 38, color: CHART_COLORS.teal },
    { name: 'Fujairah', value: 22, color: CHART_COLORS.rose },
  ]

  // Investment by category
  const investmentData = [
    { name: 'AI & ML', value: 35, color: CHART_COLORS.gold },
    { name: 'Space Tech', value: 22, color: CHART_COLORS.navy },
    { name: 'FinTech', value: 18, color: CHART_COLORS.platinum },
    { name: 'Biotech', value: 15, color: CHART_COLORS.emerald },
    { name: 'Clean Energy', value: 10, color: CHART_COLORS.cyan },
  ]

  // Innovation metrics
  const innovationMetrics = [
    { name: 'Patents Filed', value: 1247, change: 23, color: CHART_COLORS.gold },
    { name: 'R&D Expenditure ($B)', value: 4.2, change: 18, color: CHART_COLORS.navy },
    { name: 'Tech Startups', value: 2840, change: 31, color: CHART_COLORS.platinum },
    { name: ' unicorns', value: 12, change: 4, color: CHART_COLORS.emerald },
  ]

  // Monthly AI readiness trend
  const aiTrendData = [
    { month: 'Jan', score: 78, investment: 1.2 },
    { month: 'Feb', score: 79, investment: 1.3 },
    { month: 'Mar', score: 80, investment: 1.4 },
    { month: 'Apr', score: 81, investment: 1.5 },
    { month: 'May', score: 82, investment: 1.6 },
    { month: 'Jun', score: 83, investment: 1.7 },
    { month: 'Jul', score: 84, investment: 1.8 },
    { month: 'Aug', score: 84, investment: 1.9 },
    { month: 'Sep', score: 85, investment: 2.0 },
    { month: 'Oct', score: 86, investment: 2.1 },
    { month: 'Nov', score: 86, investment: 2.2 },
    { month: 'Dec', score: 87, investment: 2.3 },
  ]

  // Key tech entities
  const keyEntities = [
    { name: 'G42 Cloud', type: 'AI/Cloud', valuation: 10.2, sentiment: 88 },
    { name: 'Bayanat AI', type: 'Geospatial AI', valuation: 2.8, sentiment: 82 },
    { name: 'Space42', type: 'Space Tech', valuation: 4.5, sentiment: 85 },
    { name: 'Alef Education', type: 'EdTech', valuation: 1.8, sentiment: 76 },
    { name: 'Careem', type: 'Mobility', valuation: 3.5, sentiment: 79 },
  ]

  const getMetricColor = (change: number) => {
    return change > 0 ? 'text-emerald-400' : 'text-red-400'
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400'
    if (score >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">P-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Technology & Innovation</h1>
          <p className="mt-2 text-slate-400">
            AI ecosystem, G42, space program, and startup intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Cpu className="h-4 w-4" />
            AI Dashboard
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Lightbulb className="h-4 w-4" />
            Track Startup
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="AI Readiness Score"
          value={aiReadinessScore}
          previousValue={aiReadinessScore - 3}
          icon={<Cpu className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="G42 Investment ($B)"
          value={g42Investment}
          previousValue={g42Investment - 0.8}
          icon={<Building className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Startup Ecosystem ($B)"
          value={startupEcosystemValue}
          previousValue={startupEcosystemValue - 0.5}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Space Budget ($B)"
          value={spaceProgramBudget}
          previousValue={spaceProgramBudget - 0.2}
          icon={<Rocket className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ai">AI Ecosystem</TabsTrigger>
          <TabsTrigger value="startups">Startup Network</TabsTrigger>
          <TabsTrigger value="trends">Innovation Trends</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Technology & Innovation Overview" description="UAE tech landscape and innovation metrics">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Tech Hub Comparison</CardTitle>
                    <CardDescription>Innovation index by emirate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={hubComparisonData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Index Score', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Investment by Category</CardTitle>
                    <CardDescription>Tech investment distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={investmentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Innovation Metrics</CardTitle>
                  <CardDescription>Year-over-year performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {innovationMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center"
                      >
                        <div className="text-2xl font-bold" style={{ color: metric.color }}>
                          {metric.value}
                        </div>
                        <p className="text-sm text-slate-400 mt-1">{metric.name}</p>
                        <div className={`text-sm font-medium ${getMetricColor(metric.change)}`}>
                          +{metric.change}% YoY
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* AI Ecosystem Tab */}
        <TabsContent value="ai" className="space-y-6">
          <GlassPanel title="AI Ecosystem Intelligence" description="Artificial intelligence adoption and capabilities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">AI Adoption by Sector</CardTitle>
                  <CardDescription>Implementation scores by industry</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={aiAdoptionData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Adoption %', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">AI Readiness Trajectory</CardTitle>
                    <CardDescription>12-month score progression</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={aiTrendData}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'score', name: 'AI Readiness', color: CHART_COLORS.gold },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">AI Investment Trend</CardTitle>
                    <CardDescription>Monthly investment in billions USD</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={aiTrendData}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'investment', name: 'Investment $B', color: CHART_COLORS.navy },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">G42 Ecosystem</CardTitle>
                  <CardDescription>Core G42 subsidiaries and focus areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-gold-700 bg-gold-900/30 p-4 text-center">
                      <Cpu className="h-8 w-8 mx-auto text-gold mb-2" />
                      <div className="text-xl font-bold text-gold">G42 Cloud</div>
                      <p className="text-sm text-slate-400">AI Infrastructure</p>
                    </div>
                    <div className="rounded-lg border border-navy-700 bg-navy-900/50 p-4 text-center">
                      <Globe className="h-8 w-8 mx-auto text-navy-400 mb-2" />
                      <div className="text-xl font-bold text-navy-400">Bayanat AI</div>
                      <p className="text-sm text-slate-400">Geospatial Intelligence</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-900/30 p-4 text-center">
                      <Rocket className="h-8 w-8 mx-auto text-platinum mb-2" />
                      <div className="text-xl font-bold text-platinum">Space42</div>
                      <p className="text-sm text-slate-400">Satellite & Space</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Startup Network Tab */}
        <TabsContent value="startups" className="space-y-6">
          <GlassPanel title="Startup Ecosystem Intelligence" description="Key startups and unicorn tracking">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Tech Entities</CardTitle>
                  <CardDescription>Major UAE tech companies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {keyEntities.map((entity, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Building className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{entity.name}</p>
                              <p className="text-sm text-slate-400">{entity.type}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gold">${entity.valuation}B</div>
                              <p className="text-xs text-slate-400">Valuation</p>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${getScoreColor(entity.sentiment)}`}>
                                {entity.sentiment}%
                              </div>
                              <p className="text-xs text-slate-400">Sentiment</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Startup Funding Stages</CardTitle>
                    <CardDescription>Distribution by funding stage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={[
                        { name: 'Seed', value: 45, color: CHART_COLORS.gold },
                        { name: 'Series A', value: 28, color: CHART_COLORS.navy },
                        { name: 'Series B', value: 15, color: CHART_COLORS.platinum },
                        { name: 'Series C+', value: 12, color: CHART_COLORS.emerald },
                      ]}
                      height={250}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Unicorn Tracker</CardTitle>
                    <CardDescription>UAE-based unicorn companies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {['Careem', 'Swvl', 'Alef Education', 'Memorise', 'Farabi'].map((name, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-gold" />
                            <span className="text-sm font-medium text-slate-200">{name}</span>
                          </div>
                          <Badge variant="gold" className="text-xs">Unicorn</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Innovation Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="Innovation & R&D Trends" description="Technology investment and output metrics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">AI Readiness vs Investment</CardTitle>
                  <CardDescription>12-month correlation analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={aiTrendData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'score', name: 'AI Readiness Score', color: CHART_COLORS.gold },
                      { dataKey: 'investment', name: 'Investment $B', color: CHART_COLORS.navy },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Patent Filing Trend</CardTitle>
                    <CardDescription>Monthly patent applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={aiTrendData.map((d, i) => ({ month: d.month, patents: 85 + i * 10 }))}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'patents', name: 'Patents', color: CHART_COLORS.platinum },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">R&D Expenditure Trend</CardTitle>
                    <CardDescription>Quarterly R&D spending in $B</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={[
                        { quarter: 'Q1', rd: 0.9 },
                        { quarter: 'Q2', rd: 1.0 },
                        { quarter: 'Q3', rd: 1.1 },
                        { quarter: 'Q4', rd: 1.2 },
                      ]}
                      xAxisKey="quarter"
                      areas={[
                        { dataKey: 'rd', name: 'R&D $B', color: CHART_COLORS.emerald },
                      ]}
                      height={250}
                      showGrid={true}
                    />
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
