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
  BookOpen,
  Music,
  Palette,
  Landmark,
  UsersRound,
  Heart,
  Calendar,
} from 'lucide-react'
import {
  useCultureSocietyData,
} from '@/lib/data-loader'

export default function CultureSocietyPage() {
  const { data } = useCultureSocietyData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Culture & Society data...</div>
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
    { name: 'Positive', value: 62, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 28, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 10, color: CHART_COLORS.rose },
  ]

  // Heritage sites data
  const heritageData = [
    { name: 'UNESCO Sites', value: 5, color: CHART_COLORS.gold },
    { name: 'National Heritage', value: 27, color: CHART_COLORS.navy },
    { name: 'Museums', value: 76, color: CHART_COLORS.platinum },
    { name: 'Cultural Centers', value: 34, color: CHART_COLORS.emerald },
  ]

  // Demographics data
  const demographicsData = [
    { age: '0-14', male: 17, female: 16, color: CHART_COLORS.platinum },
    { age: '15-24', male: 14, female: 13, color: CHART_COLORS.gold },
    { age: '25-54', male: 35, female: 30, color: CHART_COLORS.navy },
    { age: '55-64', male: 8, female: 7, color: CHART_COLORS.emerald },
    { age: '65+', male: 4, female: 3, color: CHART_COLORS.rose },
  ]

  // Tradition categories
  const traditionData = [
    { name: 'Heritage Events', value: 45, color: CHART_COLORS.gold },
    { name: 'Traditional Arts', value: 32, color: CHART_COLORS.navy },
    { name: 'Culinary Heritage', value: 28, color: CHART_COLORS.platinum },
    { name: 'Traditional Sports', value: 22, color: CHART_COLORS.emerald },
    { name: 'Architecture', value: 18, color: CHART_COLORS.rose },
  ]

  // Trend data for line chart
  const trendChartData = trends?.slice(0, 12).map((t, i) => ({
    month: t.period || `Month ${i + 1}`,
    value: t.value || 0,
    sentiment: t.sentiment || 50,
  })) || [
    { month: 'Jan', value: 780, sentiment: 68 },
    { month: 'Feb', value: 820, sentiment: 70 },
    { month: 'Mar', value: 890, sentiment: 72 },
    { month: 'Apr', value: 920, sentiment: 71 },
    { month: 'May', value: 980, sentiment: 74 },
    { month: 'Jun', value: 1050, sentiment: 76 },
    { month: 'Jul', value: 1120, sentiment: 78 },
    { month: 'Aug', value: 1080, sentiment: 75 },
    { month: 'Sep', value: 1150, sentiment: 77 },
    { month: 'Oct', value: 1220, sentiment: 80 },
    { month: 'Nov', value: 1280, sentiment: 82 },
    { month: 'Dec', value: 1350, sentiment: 85 },
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
          <Badge variant="platinum" className="mb-2">S-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Culture & Society</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'Heritage, demographics, traditions, arts, religion, social dynamics'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <BookOpen className="h-4 w-4" />
            Cultural Events
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Cultural Events"
          value="156"
          previousValue={142}
          icon={<Calendar className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
        <MetricCard
          title="Heritage Sites"
          value="142"
          previousValue={138}
          icon={<Landmark className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Active Participants"
          value="2.8M"
          previousValue={2.5}
          icon={<UsersRound className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Expat Population"
          value="88%"
          previousValue={87}
          icon={<Users className="h-6 w-6" />}
          gradient="navy"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="heritage">Heritage</TabsTrigger>
          <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Culture & Society Overview" description="Cultural engagement and heritage preservation">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Cultural Engagement Trend</CardTitle>
                  <CardDescription>Media and event coverage over 12 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={trendChartData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'value', name: 'Engagement', color: CHART_COLORS.platinum },
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
                    <CardDescription>Public sentiment towards cultural initiatives</CardDescription>
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
                    <CardTitle className="text-lg">Cultural Categories</CardTitle>
                    <CardDescription>Breakdown of cultural engagement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={traditionData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Count', color: CHART_COLORS.platinum },
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

        {/* Heritage Tab */}
        <TabsContent value="heritage" className="space-y-6">
          <GlassPanel title="Heritage & Traditions" description="Cultural heritage sites and traditional practices">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Heritage Sites & Cultural Assets</CardTitle>
                  <CardDescription>Distribution by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={heritageData}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Traditional Arts</CardTitle>
                    <CardDescription>Cultural art forms and crafts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {['Falconry', 'Al Ayyala', 'Liwa Dance', 'Henna Art', 'Pearl Diving', 'Coffee Ceremony'].map((art, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Palette className="h-5 w-5 text-platinum" />
                            <span className="text-sm font-medium text-slate-200">{art}</span>
                          </div>
                          <Badge variant="outline" className="text-platinum">S-Sector</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UNESCO World Heritage</CardTitle>
                    <CardDescription>Internationally recognized sites</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {['Al Ain Oasis', 'Hili Archaeological Site', 'Cultural Sites of Al Ain', 'Jebel Hafeet Tombs', 'Sir Bani Yas Island'].map((site, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Landmark className="h-5 w-5 text-gold" />
                            <span className="text-sm font-medium text-slate-200">{site}</span>
                          </div>
                          <Badge variant="gold" className="text-xs">UNESCO</Badge>
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
          <GlassPanel title="Key Findings" description="Critical cultural and social intelligence findings">
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
                  <CardDescription>Complete list of cultural intelligence findings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {keyFindingsData.map((finding, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum">
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

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          <GlassPanel title="Demographics & Social Structure" description="Population breakdown and social dynamics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Population Pyramid</CardTitle>
                  <CardDescription>Age and gender distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={demographicsData}
                    xAxisKey="age"
                    bars={[
                      { dataKey: 'male', name: 'Male', color: CHART_COLORS.navy },
                      { dataKey: 'female', name: 'Female', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Nationality Distribution</CardTitle>
                    <CardDescription>Emirati vs Expat breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={[
                        { name: 'Emirati', value: 12, color: CHART_COLORS.gold },
                        { name: 'Expat', value: 88, color: CHART_COLORS.platinum },
                      ]}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Social Metrics</CardTitle>
                    <CardDescription>Key social indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Population (Total)', value: '10.2M', icon: Users },
                        { label: 'Median Age', value: '32.5 years', icon: Calendar },
                        { label: 'Urban Population', value: '87%', icon: Building },
                        { label: 'Literacy Rate', value: '95.8%', icon: BookOpen },
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
      </Tabs>
    </div>
  )
}
