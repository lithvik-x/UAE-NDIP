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
  AlertTriangle,
  AlertCircle,
  Shield,
  Activity,
  Zap,
  Clock,
  TrendingUp,
  Users,
  MessageSquare,
  CheckCircle,
  XCircle,
} from 'lucide-react'
import {
  usePhoenixData,
  useCrisisOverviewData,
} from '@/lib/data-loader'

export default function PhoenixProjectPage() {
  const { data } = usePhoenixData()

  // Phoenix Protocol metrics
  const activeCrises = 12
  const resolvedCrises = 156
  const avgResponseTime = 4.2
  const successRate = 94.5

  // Crisis category distribution
  const crisisCategories = [
    { category: 'Geopolitical', count: 45, percentage: 29, color: CHART_COLORS.rose },
    { category: 'Social Unrest', count: 38, percentage: 24, color: CHART_COLORS.orange },
    { category: 'Economic', count: 32, percentage: 21, color: CHART_COLORS.yellow },
    { category: 'Public Health', count: 18, percentage: 12, color: CHART_COLORS.emerald },
    { category: 'Cyber Threats', count: 12, percentage: 8, color: CHART_COLORS.navy },
    { category: 'Natural Disasters', count: 8, percentage: 5, color: CHART_COLORS.platinum },
  ]

  // Active crisis list
  const activeCrisisList = [
    { id: 'CRX-2025-001', name: 'Regional Trade Tensions', severity: 'HIGH', status: 'MONITORING', sentiment: 42 },
    { id: 'CRX-2025-002', name: 'Labor Market Fluctuations', severity: 'MEDIUM', status: 'RESPONDING', sentiment: 58 },
    { id: 'CRX-2025-003', name: 'Social Media Disinformation', severity: 'HIGH', status: 'CONTAINING', sentiment: 35 },
    { id: 'CRX-2025-004', name: 'Currency Exchange Pressure', severity: 'MEDIUM', status: 'MONITORING', sentiment: 62 },
    { id: 'CRX-2025-005', name: 'Tourism Sector Concerns', severity: 'LOW', status: 'RESOLVED', sentiment: 78 },
  ]

  // Response timeline
  const responseTimeline = [
    { phase: 'Detection', avgTime: '0.5h', color: CHART_COLORS.emerald },
    { phase: 'Assessment', avgTime: '1.2h', color: CHART_COLORS.gold },
    { phase: 'Escalation', avgTime: '0.8h', color: CHART_COLORS.orange },
    { phase: 'Response', avgTime: '1.5h', color: CHART_COLORS.navy },
    { phase: 'Resolution', avgTime: '2.2h', color: CHART_COLORS.platinum },
  ]

  // Phoenix team readiness
  const teamReadiness = [
    { team: 'Rapid Response', readiness: 98, members: 45 },
    { team: 'Intelligence', readiness: 95, members: 32 },
    { team: 'Communications', readiness: 92, members: 28 },
    { team: 'Medical', readiness: 100, members: 60 },
    { team: 'Cyber Defense', readiness: 96, members: 24 },
    { team: 'Logistics', readiness: 89, members: 38 },
  ]

  // Historical resolution data
  const resolutionTrendData = [
    { month: 'Jan', resolved: 12, avgTime: 5.2 },
    { month: 'Feb', resolved: 15, avgTime: 4.8 },
    { month: 'Mar', resolved: 18, avgTime: 4.5 },
    { month: 'Apr', resolved: 14, avgTime: 4.2 },
    { month: 'May', resolved: 22, avgTime: 3.8 },
    { month: 'Jun', resolved: 19, avgTime: 3.5 },
    { month: 'Jul', resolved: 16, avgTime: 3.2 },
    { month: 'Aug', resolved: 21, avgTime: 3.0 },
    { month: 'Sep', resolved: 24, avgTime: 2.8 },
    { month: 'Oct', resolved: 28, avgTime: 2.5 },
    { month: 'Nov', resolved: 25, avgTime: 2.3 },
    { month: 'Dec', resolved: 30, avgTime: 2.1 },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'HIGH': return <Badge variant="destructive" className="text-xs">{severity}</Badge>
      case 'MEDIUM': return <Badge variant="warning" className="text-xs">{severity}</Badge>
      case 'LOW': return <Badge variant="outline" className="text-xs text-emerald-400">{severity}</Badge>
      default: return <Badge variant="outline" className="text-xs">{severity}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'MONITORING': return <Badge variant="outline" className="text-xs text-blue-400">{status}</Badge>
      case 'RESPONDING': return <Badge variant="outline" className="text-xs text-yellow-400">{status}</Badge>
      case 'CONTAINING': return <Badge variant="outline" className="text-xs text-orange-400">{status}</Badge>
      case 'RESOLVED': return <Badge variant="outline" className="text-xs text-emerald-400">{status}</Badge>
      default: return <Badge variant="outline" className="text-xs">{status}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="rose" className="mb-2">C-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-rose">Phoenix Project</h1>
          <p className="mt-2 text-slate-400">
            Crisis management protocol and rapid response operations
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose/50 text-rose hover:bg-rose/10">
            <Activity className="h-4 w-4" />
            Status
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Activate Protocol
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Crises"
          value={activeCrises.toString()}
          previousValue={activeCrises + 3}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="danger"
        />
        <MetricCard
          title="Resolved Crises"
          value={resolvedCrises.toString()}
          previousValue={resolvedCrises - 12}
          icon={<CheckCircle className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Avg Response Time"
          value={avgResponseTime + 'h'}
          previousValue={avgResponseTime + 0.8}
          icon={<Clock className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Success Rate"
          value={successRate + '%'}
          previousValue={successRate - 1.2}
          icon={<Shield className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="active">Active Crises</TabsTrigger>
          <TabsTrigger value="response">Response</TabsTrigger>
          <TabsTrigger value="readiness">Readiness</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Phoenix Protocol Overview" description="Crisis management and response operations">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Crisis Categories</CardTitle>
                    <CardDescription>Distribution by type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={crisisCategories}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Resolution Trend</CardTitle>
                    <CardDescription>Monthly crisis resolution rate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={resolutionTrendData}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'resolved', name: 'Resolved', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Phoenix Protocol Statistics</CardTitle>
                  <CardDescription>Overall crisis management performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-emerald-400">{successRate}%</div>
                      <p className="text-sm text-slate-400 mt-1">Success Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gold">{avgResponseTime}h</div>
                      <p className="text-sm text-slate-400 mt-1">Avg Response</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-navy">{resolvedCrises}</div>
                      <p className="text-sm text-slate-400 mt-1">Total Resolved</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-rose">{activeCrises}</div>
                      <p className="text-sm text-slate-400 mt-1">Active</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Active Crises Tab */}
        <TabsContent value="active" className="space-y-6">
          <GlassPanel title="Active Crisis Monitoring" description="Currently ongoing crisis situations">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Active Crisis List</CardTitle>
                  <CardDescription>Current crisis operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {activeCrisisList.map((crisis, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                              crisis.severity === 'HIGH' ? 'bg-rose-500/20 text-rose-400' :
                              crisis.severity === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-emerald-500/20 text-emerald-400'
                            }`}>
                              <AlertTriangle className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{crisis.name}</p>
                              <p className="text-sm text-slate-400">{crisis.id}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {getStatusBadge(crisis.status)}
                            {getSeverityBadge(crisis.severity)}
                            <div className="text-center">
                              <div className={`text-lg font-bold ${
                                crisis.sentiment >= 60 ? 'text-emerald-400' :
                                crisis.sentiment >= 40 ? 'text-yellow-400' :
                                'text-rose-400'
                              }`}>{crisis.sentiment}%</div>
                              <p className="text-xs text-slate-400">Sentiment</p>
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

        {/* Response Tab */}
        <TabsContent value="response" className="space-y-6">
          <GlassPanel title="Response Timeline" description="Phoenix protocol response efficiency">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Response Phase Timeline</CardTitle>
                  <CardDescription>Average time per response phase (hours)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={responseTimeline}
                    xAxisKey="phase"
                    bars={[
                      { dataKey: 'avgTime', name: 'Avg Time (h)', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Response Efficiency</CardTitle>
                    <CardDescription>Protocol performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">First Response Time</span>
                          <span className="font-medium text-emerald-400">12 min</span>
                        </div>
                        <Progress value={96} className="h-3" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Containment Rate</span>
                          <span className="font-medium text-emerald-400">94%</span>
                        </div>
                        <Progress value={94} className="h-3" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Stakeholder Notification</span>
                          <span className="font-medium text-gold">8 min</span>
                        </div>
                        <Progress value={92} className="h-3" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Media Monitoring</span>
                          <span className="font-medium text-navy">Continuous</span>
                        </div>
                        <Progress value={100} className="h-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Escalation Matrix</CardTitle>
                    <CardDescription>Crisis escalation protocols</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { level: 'Level 1', name: 'Local', time: '15 min', color: 'emerald' },
                        { level: 'Level 2', name: 'Regional', time: '30 min', color: 'yellow' },
                        { level: 'Level 3', name: 'National', time: '1 hr', color: 'orange' },
                        { level: 'Level 4', name: 'International', time: '2 hr', color: 'rose' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className={`text-${item.color}-400`}>{item.level}</Badge>
                            <span className="text-sm font-medium text-slate-200">{item.name}</span>
                          </div>
                          <span className="text-sm text-slate-400">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Readiness Tab */}
        <TabsContent value="readiness" className="space-y-6">
          <GlassPanel title="Team Readiness" description="Phoenix response team preparedness">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Team Readiness Levels</CardTitle>
                  <CardDescription>Current readiness by team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamReadiness.map((team, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-slate-200">{team.team}</span>
                            <Badge variant="outline" className="text-xs">{team.members} members</Badge>
                          </div>
                          <span className={`text-sm font-bold ${
                            team.readiness >= 95 ? 'text-emerald-400' :
                            team.readiness >= 85 ? 'text-yellow-400' :
                            'text-rose-400'
                          }`}>{team.readiness}%</span>
                        </div>
                        <Progress value={team.readiness} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Overall Readiness</CardTitle>
                  <CardDescription>Aggregate Phoenix protocol readiness</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl font-bold text-emerald-400">96%</div>
                      <p className="text-lg text-slate-400 mt-2">Overall Readiness Score</p>
                      <Badge variant="outline" className="mt-4 text-emerald-400 border-emerald-400">
                        Protocol Ready
                      </Badge>
                    </div>
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
