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
  Plane,
  Hotel,
  Users,
  DollarSign,
  Globe,
  Star,
  Briefcase,
} from 'lucide-react'
import { useTourismHospitalityData } from '@/lib/data-loader'

export default function TourismHospitalityPage() {
  const { data } = useTourismHospitalityData()
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

  // Visitor trends
  const visitorTrendData = [
    { year: '2020', dubai: 5.5, abudhabi: 10.1 },
    { year: '2021', dubai: 7.3, abudhabi: 14.2 },
    { year: '2022', dubai: 14.0, abudhabi: 18.0 },
    { year: '2023', dubai: 17.2, abudhabi: 22.0 },
    { year: '2024', dubai: 18.6, abudhabi: 24.2 },
    { year: '2025', dubai: 19.6, abudhabi: 26.6 },
  ]

  // Hotel metrics
  const hotelMetricsData = [
    { name: 'Dubai Occupancy', value: 80.7, unit: '%', color: CHART_COLORS.gold },
    { name: 'Abu Dhabi Occupancy', value: 73.2, unit: '%', color: CHART_COLORS.navy },
    { name: 'RevPAR Dubai', value: 467, unit: 'AED', color: CHART_COLORS.emerald },
    { name: 'Avg Daily Rate', value: 578, unit: 'AED', color: CHART_COLORS.platinum },
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
          <Badge variant="gold" className="mb-2">P-SECTOR: TOURISM & HOSPITALITY</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Tourism & Hospitality</h1>
          <p className="mt-2 text-slate-400">
            {data.description}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Plane className="h-4 w-4" />
            Dubai Tourism
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Globe className="h-4 w-4" />
            Tourism Stats
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Dubai Visitors"
          value="19.59M"
          previousValue="18.6M"
          icon={<Plane className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Abu Dhabi Visitors"
          value="26.6M"
          previousValue="24.2M"
          icon={<Users className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Tourism GDP"
          value="13-14%"
          previousValue="12-13%"
          icon={<DollarSign className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Sentiment Score"
          value={sentiment.overall}
          previousValue={sentiment.overall - 2}
          icon={<Star className="h-6 w-6" />}
          gradient="platinum"
          status="success"
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
          <TabsTrigger value="visitors">Visitors</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
        </TabsList>

        {/* Key Findings */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical metrics and findings for Tourism & Hospitality">
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
                      {finding.tier === 0 ? <Star className="h-5 w-5" /> :
                       finding.tier === 1 ? <Hotel className="h-5 w-5" /> :
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

        {/* Visitors Tab */}
        <TabsContent value="visitors" className="space-y-6">
          <GlassPanel title="Visitor Analytics" description="Tourism performance across UAE destinations">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Visitor Trends (Million)</CardTitle>
                    <CardDescription>Dubai vs Abu Dhabi annual visitors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={visitorTrendData}
                      xAxisKey="year"
                      bars={[
                        { dataKey: 'dubai', name: 'Dubai', color: CHART_COLORS.gold },
                        { dataKey: 'abudhabi', name: 'Abu Dhabi', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Hotel Performance</CardTitle>
                    <CardDescription>Occupancy and revenue metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={hotelMetricsData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Value', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Tourism Sector KPIs</CardTitle>
                  <CardDescription>Year-over-year performance comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={[
                      { metric: 'Visitors', y2024: 42.8, y2025: 46.2 },
                      { metric: 'Hotel Rooms', y2024: 148000, y2025: 156000 },
                      { metric: 'Employment (K)', y2024: 899, y2025: 925 },
                      { metric: 'RevPAR Growth', y2024: 8, y2025: 11 },
                    ]}
                    xAxisKey="metric"
                    areas={[
                      { dataKey: 'y2024', name: '2024', color: CHART_COLORS.navy },
                      { dataKey: 'y2025', name: '2025', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">MICE & Events</CardTitle>
                  <CardDescription>GITEX and business events performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {[
                        { event: 'GITEX 2025', attendees: '180,000+', exhibitors: '6,500+', economic_impact: '$350M+', status: 'Record' },
                        { event: 'Abu Dhabi F1 GP', attendees: '190,000+', exhibitors: 'N/A', economic_impact: '$150M+', status: 'Growing' },
                        { event: 'World Economic Forum', attendees: '3,000+', exhibitors: '200+', economic_impact: '$50M+', status: 'Annual' },
                        { event: 'Arab Health', attendees: '60,000+', exhibitors: '3,000+', economic_impact: '$80M+', status: 'Stable' },
                        { event: 'Dubai Shopping Festival', attendees: '1.2M+', exhibitors: 'N/A', economic_impact: '$500M+', status: 'Annual' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <div>
                            <p className="font-medium text-slate-200">{item.event}</p>
                            <p className="text-sm text-slate-400">{item.attendees} attendees</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm font-bold text-gold">{item.economic_impact}</p>
                              <p className="text-xs text-slate-400">Impact</p>
                            </div>
                            <Badge variant="success" className="text-xs">{item.status}</Badge>
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
          <GlassPanel title="Sentiment & Emotion Analysis" description="Emotional breakdown of Tourism & Hospitality discourse">
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
                  <LineChart
                    data={[
                      { year: '2021', positive: 58, negative: 22, neutral: 20 },
                      { year: '2022', positive: 65, negative: 20, neutral: 15 },
                      { year: '2023', positive: 68, negative: 19, neutral: 13 },
                      { year: '2024', positive: 67, negative: 18, neutral: 15 },
                      { year: '2025', positive: 72, negative: 18, neutral: 10 },
                    ]}
                    xAxisKey="year"
                    lines={[
                      { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                      { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.danger },
                      { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Stakeholders Tab */}
        <TabsContent value="stakeholders" className="space-y-6">
          <GlassPanel title="Key Stakeholders" description="Entities and actors in the Tourism & Hospitality sector">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Tourism & Hospitality Stakeholders</CardTitle>
                <CardDescription>Primary and secondary actors in UAE tourism ecosystem</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {stakeholders.map((stakeholder, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                          <Briefcase className="h-5 w-5" />
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
