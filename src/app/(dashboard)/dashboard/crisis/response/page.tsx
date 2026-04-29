// @ts-nocheck
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/ui/metric-card'
import { GlassPanel } from '@/components/ui/glass-panel'
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
  Activity,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Heart,
  RefreshCcw,
  Building,
  Siren,
  HandHeart,
} from 'lucide-react'
import { useCrisisOverviewData } from '@/lib/data-loader'

export default function CrisisResponseRecoveryPage() {
  const { data } = useCrisisOverviewData()

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

  // Recovery metrics data
  const recoveryData = [
    { month: 'Jan', resolved: 12, active: 18, recovered: 8 },
    { month: 'Feb', resolved: 15, active: 16, recovered: 11 },
    { month: 'Mar', resolved: 18, active: 14, recovered: 14 },
    { month: 'Apr', resolved: 22, active: 11, recovered: 17 },
    { month: 'May', resolved: 25, active: 8, recovered: 20 },
    { month: 'Jun', resolved: 28, active: 5, recovered: 24 },
  ]

  // Response time data
  const responseTimeData = [
    { phase: 'Detection', avg: 2.4, target: 4.0, color: CHART_COLORS.emerald },
    { phase: 'Assessment', avg: 4.2, target: 6.0, color: CHART_COLORS.gold },
    { phase: 'Containment', avg: 8.6, target: 12.0, color: CHART_COLORS.navy },
    { phase: 'Resolution', avg: 18.3, target: 24.0, color: CHART_COLORS.cyan },
    { phase: 'Recovery', avg: 32.5, target: 48.0, color: CHART_COLORS.purple },
  ]

  // Phoenix stage distribution
  const stageData = [
    { name: 'Detection', value: 8, color: CHART_COLORS.danger },
    { name: 'Assessment', value: 12, color: CHART_COLORS.gold },
    { name: 'Containment', value: 24, color: CHART_COLORS.navy },
    { name: 'Resolution', value: 35, color: CHART_COLORS.cyan },
    { name: 'Recovery', value: 21, color: CHART_COLORS.emerald },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Confident', value: 44, color: CHART_COLORS.emerald },
    { name: 'Vigilant', value: 31, color: CHART_COLORS.gold },
    { name: 'Concerned', value: 25, color: CHART_COLORS.danger },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">PHOENIX PROTOCOL: RESPONSE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Crisis Response & Recovery</h1>
          <p className="mt-2 text-slate-400">
            UAE crisis response capabilities, recovery indicators, and Phoenix Protocol effectiveness
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Shield className="h-4 w-4" />
            NCRS Portal
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <RefreshCcw className="h-4 w-4" />
            Recovery Dashboard
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Crises"
          value={data.activeCrises || 8}
          previousValue={10}
          icon={<Siren className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Avg Response Time"
          value="4.2hrs"
          previousValue="6.8hrs"
          icon={<Clock className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Resolution Rate"
          value="94.2%"
          previousValue="89.7%"
          icon={<CheckCircle className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Recovery Index"
          value="78/100"
          previousValue="71/100"
          icon={<HandHeart className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </div>

      {/* Alert Banner */}
      <div className={`rounded-xl border p-4 bg-slate-900/50 ${getAlertColor(data.alertSummary?.RED?.length ? 'RED' : data.alertSummary?.YELLOW?.length ? 'YELLOW' : 'GREEN')}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {data.alertSummary?.RED?.length > 0 && <AlertCircle className="h-6 w-6 text-red-400" />}
            {data.alertSummary?.RED?.length === 0 && data.alertSummary?.YELLOW?.length > 0 && <AlertTriangle className="h-6 w-6 text-yellow-400" />}
            {data.alertSummary?.RED?.length === 0 && data.alertSummary?.YELLOW?.length === 0 && <TrendingUp className="h-6 w-6 text-emerald-400" />}
            <div>
              <p className="font-semibold text-slate-200">Crisis Alert Summary</p>
              <p className="text-sm text-slate-400">
                {data.alertSummary?.RED?.length || 0} RED | {data.alertSummary?.YELLOW?.length || 0} YELLOW | {data.alertSummary?.GREEN?.length || 0} GREEN
              </p>
            </div>
          </div>
          {data.alertSummary?.RED?.length > 0 && getAlertBadge('RED')}
          {data.alertSummary?.RED?.length === 0 && data.alertSummary?.YELLOW?.length > 0 && getAlertBadge('YELLOW')}
          {data.alertSummary?.RED?.length === 0 && data.alertSummary?.YELLOW?.length === 0 && getAlertBadge('GREEN')}
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Crisis Overview</TabsTrigger>
          <TabsTrigger value="response">Response Metrics</TabsTrigger>
          <TabsTrigger value="recovery">Recovery Indicators</TabsTrigger>
          <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
        </TabsList>

        {/* Crisis Overview */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Active Crisis Distribution" description="Current crisis status by type and severity">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Crises by Type</CardTitle>
                    <CardDescription>Distribution of active crises</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { name: 'Natural', count: 2, color: CHART_COLORS.emerald },
                        { name: 'Economic', count: 3, color: CHART_COLORS.gold },
                        { name: 'Geopolitical', count: 2, color: CHART_COLORS.danger },
                        { name: 'Health', count: 1, color: CHART_COLORS.cyan },
                        { name: 'Cyber', count: 1, color: CHART_COLORS.navy },
                      ]}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'count', name: 'Count', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Phoenix Protocol Stages</CardTitle>
                    <CardDescription>Crises by current stage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={stageData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Sentiment</CardTitle>
                  <CardDescription>Overall public sentiment toward crisis management</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Response Metrics */}
        <TabsContent value="response" className="space-y-6">
          <GlassPanel title="Crisis Response Metrics" description="UAE crisis response time and effectiveness">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Response Time by Phase</CardTitle>
                  <CardDescription>Average hours vs target (lower is better)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={responseTimeData}
                    xAxisKey="phase"
                    bars={[
                      { dataKey: 'avg', name: 'Actual (hrs)', color: CHART_COLORS.gold },
                      { dataKey: 'target', name: 'Target (hrs)', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Critical Response KPIs</CardTitle>
                  <CardDescription>Key performance indicators for crisis response</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {[
                        { kpi: 'First Response Time', value: '2.4 hrs', target: '4.0 hrs', status: 'success' },
                        { kpi: 'Crisis Declaration Speed', value: '1.8 hrs', target: '3.0 hrs', status: 'success' },
                        { kpi: 'Stakeholder Mobilization', value: '4.2 hrs', target: '6.0 hrs', status: 'success' },
                        { kpi: 'Resource Deployment', value: '8.6 hrs', target: '12.0 hrs', status: 'success' },
                        { kpi: 'Containment Achievement', value: '18.3 hrs', target: '24.0 hrs', status: 'success' },
                        { kpi: 'Public Communication', value: '1.2 hrs', target: '2.0 hrs', status: 'success' },
                        { kpi: 'Media Response Time', value: '0.8 hrs', target: '1.5 hrs', status: 'success' },
                        { kpi: 'Inter-Agency Coordination', value: '3.5 hrs', target: '5.0 hrs', status: 'success' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <p className="font-medium text-slate-200">{item.kpi}</p>
                          <div className="flex items-center gap-3">
                            <p className="text-lg font-bold text-gold">{item.value}</p>
                            <p className="text-xs text-slate-400">/ {item.target}</p>
                            <Badge variant="success" className="text-xs">On Target</Badge>
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

        {/* Recovery Indicators */}
        <TabsContent value="recovery" className="space-y-6">
          <GlassPanel title="Recovery Indicators" description="Crisis recovery progress and effectiveness">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Recovery Trend</CardTitle>
                  <CardDescription>Monthly active vs resolved crises</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={recoveryData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'active', name: 'Active', color: CHART_COLORS.danger },
                      { dataKey: 'resolved', name: 'Resolved', color: CHART_COLORS.emerald },
                      { dataKey: 'recovered', name: 'Recovered', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Recovery Metrics by Sector</CardTitle>
                  <CardDescription>Recovery progress across key sectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {[
                        { sector: 'Infrastructure', progress: 94, days: 28, status: 'On Track' },
                        { sector: 'Economy', progress: 87, days: 45, status: 'On Track' },
                        { sector: 'Tourism', progress: 72, days: 60, status: 'Delayed' },
                        { sector: 'Trade & Logistics', progress: 91, days: 32, status: 'On Track' },
                        { sector: 'Healthcare', progress: 98, days: 18, status: 'Complete' },
                        { sector: 'Education', progress: 85, days: 40, status: 'On Track' },
                        { sector: 'Real Estate', progress: 68, days: 75, status: 'Delayed' },
                        { sector: 'Financial Services', progress: 92, days: 25, status: 'On Track' },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.sector}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-slate-400">{item.days} days</span>
                              <Badge
                                variant={item.status === 'Complete' ? 'success' : item.status === 'Delayed' ? 'warning' : 'default'}
                                className="text-xs"
                              >
                                {item.status}
                              </Badge>
                            </div>
                          </div>
                          <Progress value={item.progress} className="h-3" />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Capabilities */}
        <TabsContent value="capabilities" className="space-y-6">
          <GlassPanel title="Crisis Response Capabilities" description="UAE crisis response infrastructure and readiness">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Response Infrastructure</CardTitle>
                  <CardDescription>Crisis response capabilities and capacity</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {[
                        { capability: 'National Crisis Center', capacity: '24/7', status: 'Operational', readiness: 98 },
                        { capability: 'Emergency Response Teams', capacity: '12 units', status: 'Deployed', readiness: 95 },
                        { capability: 'Medical Strike Teams', capacity: '48 teams', status: 'Standby', readiness: 99 },
                        { capability: 'Search & Rescue', capacity: '6 units', status: 'Operational', readiness: 97 },
                        { capability: 'Evacuation Capacity', capacity: '50,000', status: 'Available', readiness: 92 },
                        { capability: 'Shelter Facilities', capacity: '120 sites', status: 'Ready', readiness: 94 },
                        { capability: 'Communication Systems', capacity: 'Redundant', status: 'Active', readiness: 99 },
                        { capability: 'Logistics Support', capacity: '24/7', status: 'Operational', readiness: 96 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <div className="flex items-center gap-3">
                            <Activity className="h-5 w-5 text-gold" />
                            <div>
                              <p className="font-medium text-slate-200">{item.capability}</p>
                              <p className="text-xs text-slate-400">{item.capacity}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="success" className="text-xs">{item.status}</Badge>
                            <p className="text-lg font-bold text-gold">{item.readiness}%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Phoenix Protocol Effectiveness</CardTitle>
                  <CardDescription>Cross-crisis performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-3">
                    {[
                      { metric: 'Containment Success Rate', value: '97.2%', icon: <Shield className="h-6 w-6" /> },
                      { metric: 'Stakeholder Satisfaction', value: '94.8%', icon: <Users className="h-6 w-6" /> },
                      { metric: 'Media Handling Score', value: '91.3%', icon: <Activity className="h-6 w-6" /> },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center justify-center rounded-xl bg-slate-800/50 p-6 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold mb-3">
                          {item.icon}
                        </div>
                        <p className="text-sm text-slate-400 mb-1">{item.metric}</p>
                        <p className="text-2xl font-bold text-gold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
