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
  Globe,
  Handshake,
  Shield,
  TrendingUp,
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Building,
  Plane,
  Flag,
} from 'lucide-react'
import {
  useInternationalRelationsData,
} from '@/lib/data-loader'

export default function InternationalRelationsPage() {
  const { data } = useInternationalRelationsData()

  // Extract metrics from data
  const totalBilateralAgreements = data?.metrics?.bilateralAgreements || 147
  const activeDiplomaticMissions = data?.metrics?.activeDiplomaticMissions || 93
  const strategicPartnerships = data?.metrics?.strategicPartnerships || 24
  const regionalInfluenceScore = data?.metrics?.regionalInfluenceScore || 87

  // Calculate trend values
  const agreementsTrend = data?.trends?.agreements || [45, 52, 58, 67, 72, 78, 85, 92, 103, 115, 128, 147]
  const influenceTrend = data?.trends?.influence || [72, 74, 76, 78, 80, 82, 83, 84, 85, 86, 86, 87]

  // Regional breakdown data
  const regionalData = [
    { name: 'GCC States', value: 35, color: CHART_COLORS.gold },
    { name: 'MENA Region', value: 42, color: CHART_COLORS.navy },
    { name: 'Global South', value: 38, color: CHART_COLORS.platinum },
    { name: 'Western Allies', value: 28, color: CHART_COLORS.cyan },
    { name: 'Asian Partners', value: 24, color: CHART_COLORS.emerald },
  ]

  // Partnership type data
  const partnershipData = [
    { name: 'Strategic', value: 24, color: CHART_COLORS.gold },
    { name: 'Comprehensive', value: 38, color: CHART_COLORS.navy },
    { name: 'Cooperative', value: 52, color: CHART_COLORS.platinum },
    { name: 'Basic', value: 33, color: CHART_COLORS.teal },
  ]

  // Agreement trends data
  const agreementTrendData = [
    { month: 'Jan', agreements: 128, influence: 85 },
    { month: 'Feb', agreements: 131, influence: 85 },
    { month: 'Mar', agreements: 135, influence: 86 },
    { month: 'Apr', agreements: 138, influence: 86 },
    { month: 'May', agreements: 140, influence: 86 },
    { month: 'Jun', agreements: 142, influence: 87 },
    { month: 'Jul', agreements: 144, influence: 87 },
    { month: 'Aug', agreements: 145, influence: 87 },
    { month: 'Sep', agreements: 146, influence: 87 },
    { month: 'Oct', agreements: 147, influence: 87 },
    { month: 'Nov', agreements: 147, influence: 87 },
    { month: 'Dec', agreements: 147, influence: 87 },
  ]

  // Key relationships data
  const keyRelationships = [
    { country: 'Saudi Arabia', type: 'Strategic', status: 'Active', alignment: 92, tension: 8 },
    { country: 'United States', type: 'Comprehensive', status: 'Active', alignment: 78, tension: 22 },
    { country: 'China', type: 'Comprehensive', status: 'Active', alignment: 85, tension: 15 },
    { country: 'United Kingdom', type: 'Strategic', status: 'Active', alignment: 88, tension: 12 },
    { country: 'India', type: 'Cooperative', status: 'Active', alignment: 82, tension: 18 },
    { country: 'France', type: 'Strategic', status: 'Active', alignment: 80, tension: 20 },
    { country: 'Russia', type: 'Cooperative', status: 'Active', alignment: 65, tension: 35 },
    { country: 'Israel', type: 'Cooperative', status: 'Quiet', alignment: 72, tension: 28 },
  ]

  // US-China balance data
  const balanceData = [
    { name: 'US Alignment', value: 78, color: CHART_COLORS.navy },
    { name: 'China Alignment', value: 85, color: CHART_COLORS.danger },
    { name: 'Neutral Position', value: 37, color: CHART_COLORS.platinum },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle className="h-4 w-4 text-emerald-400" />
      case 'Quiet': return <AlertTriangle className="h-4 w-4 text-yellow-400" />
      case 'Strained': return <XCircle className="h-4 w-4 text-red-400" />
      default: return <AlertCircle className="h-4 w-4 text-slate-400" />
    }
  }

  const getAlignmentColor = (value: number) => {
    if (value >= 80) return 'text-emerald-400'
    if (value >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">H-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">International Relations</h1>
          <p className="mt-2 text-slate-400">
            Diplomatic ties, regional partnerships, and global positioning intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Globe className="h-4 w-4" />
            Diplomatic Map
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Handshake className="h-4 w-4" />
            New Agreement
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Bilateral Agreements"
          value={totalBilateralAgreements}
          previousValue={totalBilateralAgreements - 12}
          icon={<Handshake className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Diplomatic Missions"
          value={activeDiplomaticMissions}
          previousValue={activeDiplomaticMissions - 2}
          icon={<Building className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Strategic Partnerships"
          value={strategicPartnerships}
          previousValue={strategicPartnerships - 1}
          icon={<Flag className="h-6 w-6" />}
          gradient="platinum"
        />
        <MetricCard
          title="Regional Influence"
          value={regionalInfluenceScore}
          previousValue={regionalInfluenceScore - 2}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="relationships">Key Relationships</TabsTrigger>
          <TabsTrigger value="balance">US-China Balance</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="International Relations Overview" description="Comprehensive view of UAE diplomatic standing">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Regional Partnership Distribution</CardTitle>
                    <CardDescription>Bilateral agreements by region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={regionalData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Agreements', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Partnership Type Breakdown</CardTitle>
                    <CardDescription>Classification of partnership levels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={partnershipData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Partnership Strength Metrics</CardTitle>
                  <CardDescription>Top strategic relationships by alignment score</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {keyRelationships.slice(0, 5).map((rel, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Flag className="h-4 w-4 text-platinum" />
                            <span className="text-sm font-medium text-slate-200">{rel.country}</span>
                            <Badge variant="outline" className="text-xs">{rel.type}</Badge>
                          </div>
                          <span className={`text-lg font-bold ${getAlignmentColor(rel.alignment)}`}>
                            {rel.alignment}%
                          </span>
                        </div>
                        <Progress
                          value={rel.alignment}
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

        {/* Key Relationships Tab */}
        <TabsContent value="relationships" className="space-y-6">
          <GlassPanel title="Key Diplomatic Relationships" description="Status and alignment of major partnerships">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Major Relationship Matrix</CardTitle>
                <CardDescription>Alignment and tension analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-3">
                    {keyRelationships.map((rel, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum">
                            <Flag className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{rel.country}</p>
                            <p className="text-sm text-slate-400">{rel.type} Partnership</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="flex items-center gap-1">
                              {getStatusIcon(rel.status)}
                              <span className="text-sm font-medium text-slate-300">{rel.status}</span>
                            </div>
                            <p className="text-xs text-slate-400">Status</p>
                          </div>
                          <div className="text-center">
                            <div className={`text-lg font-bold ${getAlignmentColor(rel.alignment)}`}>
                              {rel.alignment}%
                            </div>
                            <p className="text-xs text-slate-400">Alignment</p>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-red-400">
                              {rel.tension}%
                            </div>
                            <p className="text-xs text-slate-400">Tension</p>
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

        {/* US-China Balance Tab */}
        <TabsContent value="balance" className="space-y-6">
          <GlassPanel title="US-China Strategic Balance" description="UAE positioning between superpowers">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Power Alignment Scores</CardTitle>
                    <CardDescription>UAE alignment with major powers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={balanceData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Score', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Strategic Positioning</CardTitle>
                    <CardDescription>Multi-alignment strategy indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center p-6 rounded-lg bg-navy-900/50 border border-navy-700">
                        <p className="text-sm text-slate-400 mb-2">US-UAE Strategic Framework</p>
                        <p className="text-3xl font-bold text-navy-400">78%</p>
                        <p className="text-xs text-slate-400 mt-1">Defense & Economic Cooperation</p>
                      </div>
                      <div className="text-center p-6 rounded-lg bg-red-900/50 border border-red-700">
                        <p className="text-sm text-slate-400 mb-2">China-UAE Comprehensive</p>
                        <p className="text-3xl font-bold text-red-400">85%</p>
                        <p className="text-xs text-slate-400 mt-1">Belt & Road + Technology</p>
                      </div>
                      <div className="text-center p-6 rounded-lg bg-slate-800/50 border border-slate-600">
                        <p className="text-sm text-slate-400 mb-2">Strategic Autonomy</p>
                        <p className="text-3xl font-bold text-platinum">72%</p>
                        <p className="text-xs text-slate-400 mt-1">Independent Policy Capacity</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Saudi Rivalry Context</CardTitle>
                  <CardDescription>Gulf regional competition analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-gold-700 bg-gold-900/30 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">Cooperative</div>
                      <p className="text-sm text-slate-400 mt-1">OPEC+ Coordination</p>
                    </div>
                    <div className="rounded-lg border border-gold-700 bg-gold-900/30 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">Moderate</div>
                      <p className="text-sm text-slate-400 mt-1">Regional Influence</p>
                    </div>
                    <div className="rounded-lg border border-gold-700 bg-gold-900/30 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">Managed</div>
                      <p className="text-sm text-slate-400 mt-1">Competition Level</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="International Relations Trends" description="Historical trajectory and projections">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Agreement & Influence Trends</CardTitle>
                  <CardDescription>12-month rolling trajectory</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={agreementTrendData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'agreements', name: 'Bilateral Agreements', color: CHART_COLORS.gold },
                      { dataKey: 'influence', name: 'Influence Score', color: CHART_COLORS.navy },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Agreement Growth Rate</CardTitle>
                    <CardDescription>Monthly new agreements signed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={agreementTrendData.map((d, i) => ({ month: d.month, new: i === 0 ? 12 : Math.floor(Math.random() * 8) + 3 }))}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'new', name: 'New Agreements', color: CHART_COLORS.platinum },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Strategic Partnership Growth</CardTitle>
                    <CardDescription>Cumulative strategic partnerships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={agreementTrendData.map((d, i) => ({ month: d.month, total: 20 + i * 0.3 }))}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'total', name: 'Total Partnerships', color: CHART_COLORS.emerald },
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
