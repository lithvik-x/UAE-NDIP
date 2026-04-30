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
  Shield,
  Zap,
  Globe,
  Bug,
  Plane,
  Users,
  TrendingUp,
  AlertOctagon,
  Activity,
  Radio,
} from 'lucide-react'
import {
  useCrisisOverviewData,
} from '@/lib/data-loader'

export default function CrisisOverviewPage() {
  const { data } = useCrisisOverviewData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Crisis Overview data...</div>
      </div>
    )
  }

  const activeCrises = data.activeCrises || 0

  // Crisis type distribution
  const crisisTypeData = [
    { name: 'Geopolitical', value: 1, color: CHART_COLORS.rose },
    { name: 'Economic', value: 1, color: CHART_COLORS.orange },
    { name: 'Cyber', value: 1, color: CHART_COLORS.purple },
    { name: 'Terrorism', value: 1, color: CHART_COLORS.danger },
    { name: 'Natural', value: 1, color: CHART_COLORS.emerald },
    { name: 'Social', value: 1, color: CHART_COLORS.gold },
  ]

  // Alert level distribution
  const alertLevelData = [
    { name: 'RED', value: 6, color: CHART_COLORS.rose },
    { name: 'YELLOW', value: 3, color: CHART_COLORS.gold },
    { name: 'GREEN', value: 1, color: CHART_COLORS.emerald },
  ]

  // Crisis severity data
  const severityData = [
    { name: 'Critical (5)', value: 5, color: CHART_COLORS.rose },
    { name: 'High (4)', value: 3, color: CHART_COLORS.orange },
    { name: 'Medium (3)', value: 2, color: CHART_COLORS.gold },
    { name: 'Low (1-2)', value: 0, color: CHART_COLORS.emerald },
  ]

  // Crisis stage distribution
  const stageData = [
    { name: 'Detection', value: 2, color: CHART_COLORS.rose },
    { name: 'Assessment', value: 2, color: CHART_COLORS.orange },
    { name: 'Containment', value: 4, color: CHART_COLORS.gold },
    { name: 'Resolution', value: 1, color: CHART_COLORS.emerald },
    { name: 'Recovery', value: 1, color: CHART_COLORS.navy },
  ]

  // Crisis timeline trend (simulated monthly data)
  const crisisTrendData = [
    { month: 'Jan', crises: 3, severity: 72 },
    { month: 'Feb', crises: 4, severity: 78 },
    { month: 'Mar', crises: 7, severity: 95 },
    { month: 'Apr', crises: 6, severity: 88 },
  ]

  const criticalCrises = data.criticalCrises || []

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  const getSeverityColor = (severity: number) => {
    if (severity >= 5) return 'text-red-400'
    if (severity >= 4) return 'text-orange-400'
    if (severity >= 3) return 'text-yellow-400'
    return 'text-emerald-400'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="denim" className="mb-2">PHOENIX PROTOCOL</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy">Crisis Overview</h1>
          <p className="mt-2 text-slate-400">
            UAE National Digital Intelligence Platform — All Crisis Types Summary
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Radio className="h-4 w-4" />
            Live Monitor
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Crisis Mode
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Crises"
          value={String(activeCrises)}
          icon={<AlertOctagon className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Critical Severity"
          value="5"
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="RED Alerts"
          value="6"
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="orange"
          status="error"
        />
        <MetricCard
          title="Containment Stage"
          value="4"
          icon={<Shield className="h-6 w-6" />}
          gradient="gold"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="severity">Severity</TabsTrigger>
          <TabsTrigger value="critical">Critical</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Crisis Overview" description="All active and recent crisis types across the UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Distribution by Type</CardTitle>
                  <CardDescription>Active crises segmented by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={crisisTypeData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Alert Level Distribution</CardTitle>
                    <CardDescription>Current crisis alert status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={alertLevelData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Crisis Stage Distribution</CardTitle>
                    <CardDescription>Phoenix Protocol stage status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={stageData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Crises', color: CHART_COLORS.navy },
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

        {/* Severity Tab */}
        <TabsContent value="severity" className="space-y-6">
          <GlassPanel title="Crisis Severity Analysis" description="Severity ratings across all crisis types">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Count by Severity Level</CardTitle>
                  <CardDescription>Distribution of crisis severity ratings</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={severityData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Count', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Severity Matrix</CardTitle>
                  <CardDescription>All crises by type and severity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {criticalCrises.map((crisis, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20 text-rose ${getSeverityColor(crisis.severity)}`}>
                              <AlertCircle className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{crisis.name}</p>
                              <p className="text-sm text-slate-400">Stage: {crisis.phoenixStage}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`text-lg font-bold ${getSeverityColor(crisis.severity)}`}>
                              {crisis.severity}/5
                            </span>
                            {getAlertBadge(crisis.alertLevel)}
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

        {/* Critical Tab */}
        <TabsContent value="critical" className="space-y-6">
          <GlassPanel title="Critical Crises" description="All severity-5 crises requiring immediate attention">
            <div className="space-y-6">
              {criticalCrises.map((crisis, idx) => (
                <Card key={idx} className="glass-card border-rose-500/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-rose-400 flex items-center gap-2">
                        <AlertOctagon className="h-5 w-5" />
                        {crisis.name}
                      </CardTitle>
                      {getAlertBadge(crisis.alertLevel)}
                    </div>
                    <CardDescription>Severity: {crisis.severity}/5 | Stage: {crisis.phoenixStage}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                          <p className="text-xs text-slate-400">Affected Entities</p>
                          <p className="text-lg font-bold text-slate-200">{crisis.affectedEntities?.length || 0}</p>
                        </div>
                        <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                          <p className="text-xs text-slate-400">Key Findings</p>
                          <p className="text-lg font-bold text-slate-200">{crisis.keyFindings?.length || 0}</p>
                        </div>
                        <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                          <p className="text-xs text-slate-400">Sources</p>
                          <p className="text-lg font-bold text-slate-200">{crisis.sources?.length || 0}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-300 mb-2">Recommendations</p>
                        <div className="flex flex-wrap gap-2">
                          {crisis.recommendations?.slice(0, 3).map((rec, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-rose-500/50 text-rose-300">
                              {rec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Crisis Timeline" description="Recent crisis events across all types">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Activity Trend</CardTitle>
                  <CardDescription>Active crises and severity index over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={crisisTrendData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'crises', name: 'Active Crises', color: CHART_COLORS.rose },
                      { dataKey: 'severity', name: 'Severity Index', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Crisis Events</CardTitle>
                  <CardDescription>Timeline of latest crisis developments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {[
                        { date: '2026-04-29', crisis: 'Iran War Escalation', event: 'Ongoing geopolitical tensions', level: 'RED', severity: 5 },
                        { date: '2026-04-20', crisis: 'Terror Cell Dismantled', event: '27 Iran-linked suspects arrested', level: 'RED', severity: 5 },
                        { date: '2026-04-15', crisis: 'De-escalation Talks', event: 'VP Sheikh Mansour spoke with Iran parliament speaker', level: 'YELLOW', severity: 3 },
                        { date: '2026-03-21', crisis: 'Record Rainfall', event: 'Heaviest UAE rains in 80+ years', level: 'YELLOW', severity: 4 },
                        { date: '2026-02-28', crisis: 'Iran War Began', event: 'US-Israel war on Iran triggered', level: 'RED', severity: 5 },
                        { date: '2026-02-21', crisis: 'Bybit Hack', event: '$1.5B crypto theft (largest ever)', level: 'RED', severity: 5 },
                        { date: '2026-01', crisis: 'Cyber Attacks Triple', event: '500K-800K daily cyberattacks recorded', level: 'RED', severity: 5 },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy shrink-0">
                            <Activity className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-semibold text-slate-200">{item.crisis}</p>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{item.date}</Badge>
                                {getAlertBadge(item.level)}
                              </div>
                            </div>
                            <p className="mt-1 text-sm text-slate-400">{item.event}</p>
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
      </Tabs>
    </div>
  )
}
