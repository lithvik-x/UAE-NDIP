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
  Leaf,
  Wheat,
  Droplets,
  Globe,
  Shield,
  Sprout,
  Fish,
  AlertOctagon,
} from 'lucide-react'
import { useFoodSecurityData } from '@/lib/data-loader'

export default function FoodSecurityPage() {
  const { data } = useFoodSecurityData()
  const { keyFindings, metrics, sentiment, emotions, trends, stakeholders, uaeRelevance, alertLevel } = data

  // Sentiment breakdown
  const sentimentData = [
    { name: 'Positive', value: sentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Negative', value: sentiment.negative, color: CHART_COLORS.danger },
    { name: 'Neutral', value: sentiment.neutral, color: CHART_COLORS.navy },
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

  // Import dependency
  const importData = [
    { name: 'Imported', value: 87, color: CHART_COLORS.danger },
    { name: 'Local Production', value: 13, color: CHART_COLORS.emerald },
  ]

  // Food sources
  const foodSourceData = [
    { name: 'Vegetables', import_pct: 78, local: 22, color: CHART_COLORS.danger },
    { name: 'Fruits', import_pct: 85, local: 15, color: CHART_COLORS.danger },
    { name: 'Meat', import_pct: 90, local: 10, color: CHART_COLORS.rose },
    { name: 'Dairy', import_pct: 65, local: 35, color: CHART_COLORS.gold },
    { name: 'Dates', import_pct: 5, local: 95, color: CHART_COLORS.emerald },
    { name: 'Seafood', import_pct: 40, local: 60, color: CHART_COLORS.cyan },
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
          <Badge variant="navy" className="mb-2">C-SECTOR: FOOD SECURITY</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Food Security</h1>
          <p className="mt-2 text-slate-400">
            {data.description}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy-500/50 text-navy hover:bg-navy/10">
            <Leaf className="h-4 w-4" />
            MOCCAE Portal
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Shield className="h-4 w-4" />
            Food Reserve Data
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="GFSI Ranking"
          value="23rd"
          previousValue="25th"
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Import Dependency"
          value="85-90%"
          previousValue="88-92%"
          icon={<AlertOctagon className="h-6 w-6" />}
          gradient="gold"
          status="warning"
        />
        <MetricCard
          title="Strategic Reserve"
          value="6 months"
          previousValue="5 months"
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment.overall}
          previousValue={sentiment.overall - 2}
          icon={<Leaf className="h-6 w-6" />}
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
          <TabsTrigger value="supply">Supply Chain</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
        </TabsList>

        {/* Key Findings */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical metrics and findings for Food Security">
            <div className="space-y-4">
              {keyFindings.map((finding, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between rounded-lg border p-4 bg-slate-800/50 hover:bg-slate-800/70 transition-colors ${finding.alert ? getAlertColor(finding.alert) : 'border-slate-700'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      finding.tier === 0 ? 'bg-emerald/20 text-emerald' :
                      finding.tier === 1 ? 'bg-navy/20 text-navy' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {finding.tier === 0 ? <Sprout className="h-5 w-5" /> :
                       finding.tier === 1 ? <Wheat className="h-5 w-5" /> :
                       <AlertCircle className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium text-slate-200">{finding.finding}</p>
                      <p className="text-sm text-slate-400">Source: {finding.source}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xl font-bold text-navy">{finding.metric}</p>
                      <p className="text-xs text-slate-400">Tier {finding.tier}</p>
                    </div>
                    {finding.alert && getAlertBadge(finding.alert)}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Supply Chain Tab */}
        <TabsContent value="supply" className="space-y-6">
          <GlassPanel title="Food Supply Chain" description="Import dependency and local production analysis">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Import vs Local Production</CardTitle>
                    <CardDescription>Overall food supply dependency</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={importData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Food Source by Category</CardTitle>
                    <CardDescription>Import dependency breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={foodSourceData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'import_pct', name: 'Imported %', color: CHART_COLORS.danger },
                        { dataKey: 'local', name: 'Local %', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Food Security Initiatives</CardTitle>
                  <CardDescription>Strategic programs and investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { initiative: 'Bustanica Emirates Crop One', type: 'Vertical Farming', capacity: '1.1M kg/year', status: 'Operational' },
                      { initiative: 'Pure Harvest Smart Farms', type: 'Climate-Tech', funding: '$387M Series D', status: 'Scaling' },
                      { initiative: 'ADQ Aquaculture Investment', type: 'Protein Production', capacity: '$350M+', status: 'Active' },
                      { initiative: 'Strategic Grain Reserves', type: 'Storage', coverage: '6 months', status: 'Maintained' },
                      { initiative: 'Date Industry Development', type: 'Traditional', export_countries: '97+', status: 'Leading' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                            {item.type === 'Vertical Farming' ? <Sprout className="h-5 w-5" /> :
                             item.type === 'Climate-Tech' ? <Leaf className="h-5 w-5" /> :
                             item.type === 'Protein Production' ? <Fish className="h-5 w-5" /> :
                             item.type === 'Storage' ? <Shield className="h-5 w-5" /> :
                             <Wheat className="h-5 w-5" />}
                          </div>
                          <div>
                            <p className="font-medium text-slate-200">{item.initiative}</p>
                            <p className="text-sm text-slate-400">{item.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <p className="text-sm font-bold text-navy">
                              {item.capacity || item.funding || item.coverage || item.export_countries}
                            </p>
                            <p className="text-xs text-slate-400">
                              {item.capacity ? 'Capacity' : item.funding ? 'Funding' : item.coverage ? 'Coverage' : 'Exports'}
                            </p>
                          </div>
                          <Badge variant={item.status === 'Operational' || item.status === 'Active' || item.status === 'Maintained' || item.status === 'Leading' ? 'success' : 'warning'} className="text-xs">
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Self-Sufficiency Roadmap</CardTitle>
                  <CardDescription>UAE target: 50% self-sufficiency by 2051</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { category: 'Vegetables', current: 22, target: 40, deadline: '2031' },
                      { category: 'Fruits', current: 15, target: 35, deadline: '2035' },
                      { category: 'Dairy', current: 35, target: 55, deadline: '2031' },
                      { category: 'Meat', current: 10, target: 30, deadline: '2040' },
                      { category: 'Seafood', current: 60, target: 80, deadline: '2031' },
                      { category: 'Dates', current: 95, target: 100, deadline: '2027' },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-200">{item.category}</span>
                          <div className="text-right">
                            <span className="text-sm font-bold text-navy">{item.current}%</span>
                            <span className="text-xs text-slate-400 ml-2">→ {item.target}% by {item.deadline}</span>
                          </div>
                        </div>
                        <Progress
                          value={item.current}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment & Emotion Analysis" description="Emotional breakdown of Food Security discourse">
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
                        { dataKey: 'value', name: 'Score', color: CHART_COLORS.navy },
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
                      { year: '2022', value: 50 },
                      { year: '2023', value: 53 },
                      { year: '2024', value: 54 },
                      { year: '2025', value: 55 },
                    ]}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'value', name: 'Score', color: CHART_COLORS.navy },
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
          <GlassPanel title="Key Stakeholders" description="Entities and actors in the Food Security sector">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Food Security Stakeholders</CardTitle>
                <CardDescription>Primary and secondary actors in UAE food ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {stakeholders.map((stakeholder, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                          <Wheat className="h-5 w-5" />
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
