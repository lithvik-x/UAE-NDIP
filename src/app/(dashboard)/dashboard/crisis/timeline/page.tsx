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
  Clock,
  TrendingUp,
  Calendar,
  Activity,
  Zap,
  CheckCircle,
} from 'lucide-react'
import {
  useCrisisOverviewData,
} from '@/lib/data-loader'

export default function CrisisTimelinePage() {
  const { data } = useCrisisOverviewData()

  // Timeline metrics
  const totalCrises = 168
  const avgDuration = 18.5
  const peakIncidents = 45
  const currentActive = 12

  // Crisis timeline events
  const crisisTimeline = [
    { id: 1, date: '2025-12-28', crisis: 'Regional Trade Restrictions', type: 'Economic', severity: 'HIGH', duration: '3 days', status: 'Resolved' },
    { id: 2, date: '2025-12-24', crisis: 'Social Media Disinformation', type: 'Social', severity: 'HIGH', duration: '5 days', status: 'Resolved' },
    { id: 3, date: '2025-12-20', crisis: 'Currency Market Volatility', type: 'Economic', severity: 'MEDIUM', duration: '2 days', status: 'Resolved' },
    { id: 4, date: '2025-12-15', crisis: 'Labor Protest Concerns', type: 'Social', severity: 'MEDIUM', duration: '4 days', status: 'Monitoring' },
    { id: 5, date: '2025-12-10', crisis: 'Cyber Attack Attempt', type: 'Cyber', severity: 'HIGH', duration: '1 day', status: 'Resolved' },
    { id: 6, date: '2025-12-05', crisis: 'Healthcare Supply Chain', type: 'Public Health', severity: 'LOW', duration: '6 days', status: 'Resolved' },
    { id: 7, date: '2025-11-28', crisis: 'Tourism Advisory Impact', type: 'Economic', severity: 'MEDIUM', duration: '3 days', status: 'Resolved' },
    { id: 8, date: '2025-11-22', crisis: 'Weather Emergency Response', type: 'Natural', severity: 'MEDIUM', duration: '2 days', status: 'Resolved' },
  ]

  // Monthly crisis frequency
  const monthlyFrequency = [
    { month: 'Jan', crises: 12, economic: 4, social: 5, other: 3 },
    { month: 'Feb', crises: 15, economic: 6, social: 4, other: 5 },
    { month: 'Mar', crises: 18, economic: 7, social: 6, other: 5 },
    { month: 'Apr', crises: 14, economic: 5, social: 5, other: 4 },
    { month: 'May', crises: 16, economic: 6, social: 5, other: 5 },
    { month: 'Jun', crises: 19, economic: 8, social: 6, other: 5 },
    { month: 'Jul', crises: 22, economic: 9, social: 7, other: 6 },
    { month: 'Aug', crises: 20, economic: 8, social: 6, other: 6 },
    { month: 'Sep', crises: 18, economic: 7, social: 6, other: 5 },
    { month: 'Oct', crises: 15, economic: 5, social: 5, other: 5 },
    { month: 'Nov', crises: 12, economic: 4, social: 4, other: 4 },
    { month: 'Dec', crises: 8, economic: 3, social: 3, other: 2 },
  ]

  // Duration trend
  const durationTrend = [
    { month: 'Jan', avgDuration: 24.5 },
    { month: 'Feb', avgDuration: 22.3 },
    { month: 'Mar', avgDuration: 20.1 },
    { month: 'Apr', avgDuration: 21.8 },
    { month: 'May', avgDuration: 19.2 },
    { month: 'Jun', avgDuration: 17.5 },
    { month: 'Jul', avgDuration: 15.8 },
    { month: 'Aug', avgDuration: 14.2 },
    { month: 'Sep', avgDuration: 12.5 },
    { month: 'Oct', avgDuration: 11.2 },
    { month: 'Nov', avgDuration: 9.8 },
    { month: 'Dec', avgDuration: 8.5 },
  ]

  // Crisis by type
  const crisisByType = [
    { type: 'Economic', count: 52, color: CHART_COLORS.yellow },
    { type: 'Social', count: 48, color: CHART_COLORS.rose },
    { type: 'Geopolitical', count: 32, color: CHART_COLORS.orange },
    { type: 'Public Health', count: 18, color: CHART_COLORS.emerald },
    { type: 'Cyber', count: 12, color: CHART_COLORS.navy },
    { type: 'Natural', count: 6, color: CHART_COLORS.platinum },
  ]

  // Severity distribution
  const severityDistribution = [
    { severity: 'Critical', count: 8, color: CHART_COLORS.rose },
    { severity: 'High', count: 35, color: CHART_COLORS.orange },
    { severity: 'Medium', count: 78, color: CHART_COLORS.yellow },
    { severity: 'Low', count: 47, color: CHART_COLORS.emerald },
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
      case 'Resolved': return <Badge variant="outline" className="text-xs text-emerald-400">{status}</Badge>
      case 'Monitoring': return <Badge variant="outline" className="text-xs text-blue-400">{status}</Badge>
      case 'Active': return <Badge variant="destructive" className="text-xs">{status}</Badge>
      default: return <Badge variant="outline" className="text-xs">{status}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="rose" className="mb-2">C-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-rose">Crisis Timeline Dashboard</h1>
          <p className="mt-2 text-slate-400">
            Historical crisis tracking and temporal analysis
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose/50 text-rose hover:bg-rose/10">
            <Calendar className="h-4 w-4" />
            Date Range
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-white gap-2">
            <Activity className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Crises"
          value={totalCrises.toString()}
          previousValue={totalCrises + 15}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="rose"
          status="info"
        />
        <MetricCard
          title="Avg Duration"
          value={avgDuration + ' days'}
          previousValue={avgDuration + 3.2}
          icon={<Clock className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Peak Incidents"
          value={peakIncidents.toString()}
          previousValue={peakIncidents + 8}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="navy"
          status="warning"
        />
        <MetricCard
          title="Currently Active"
          value={currentActive.toString()}
          previousValue={currentActive + 2}
          icon={<Zap className="h-6 w-6" />}
          gradient="emerald"
          status="warning"
        />
      </div>

      <Tabs defaultValue="timeline" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="frequency">Frequency</TabsTrigger>
          <TabsTrigger value="duration">Duration</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Crisis Timeline" description="Historical crisis events and responses">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Recent Crises</CardTitle>
                  <CardDescription>Crisis events over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="relative">
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-700" />
                      <div className="space-y-6">
                        {crisisTimeline.map((event, index) => (
                          <div key={index} className="relative pl-14">
                            <div className={`absolute left-4 w-5 h-5 rounded-full border-2 ${
                              event.status === 'Resolved' ? 'bg-emerald-500 border-emerald-500' :
                              event.status === 'Monitoring' ? 'bg-blue-500 border-blue-500' :
                              'bg-rose-500 border-rose-500'
                            }`} />
                            <div className="flex items-start justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                              <div>
                                <p className="font-semibold text-slate-200">{event.crisis}</p>
                                <p className="text-sm text-slate-400 mt-1">{event.date}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Badge variant="outline" className="text-xs">{event.type}</Badge>
                                  <span className="text-xs text-slate-500">Duration: {event.duration}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                {getSeverityBadge(event.severity)}
                                {getStatusBadge(event.status)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Frequency Tab */}
        <TabsContent value="frequency" className="space-y-6">
          <GlassPanel title="Crisis Frequency Analysis" description="Monthly crisis occurrence patterns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Crisis Frequency</CardTitle>
                  <CardDescription>Number of crises by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={monthlyFrequency}
                    xAxisKey="month"
                    bars={[
                      { dataKey: 'crises', name: 'Total Crises', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Crisis by Type</CardTitle>
                    <CardDescription>Distribution of crisis types</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={crisisByType}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Severity Distribution</CardTitle>
                    <CardDescription>Crisis severity breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={severityDistribution}
                      xAxisKey="severity"
                      bars={[
                        { dataKey: 'count', name: 'Count', color: CHART_COLORS.navy },
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

        {/* Duration Tab */}
        <TabsContent value="duration" className="space-y-6">
          <GlassPanel title="Crisis Duration Analysis" description="Time to resolution trends">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Average Duration Trend</CardTitle>
                  <CardDescription>Crisis duration over time (days)</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={durationTrend}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'avgDuration', name: 'Avg Duration', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Duration by Crisis Type</CardTitle>
                  <CardDescription>Average resolution time by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: 'Economic', duration: 15.2 },
                      { type: 'Social', duration: 12.8 },
                      { type: 'Geopolitical', duration: 22.5 },
                      { type: 'Public Health', duration: 18.4 },
                      { type: 'Cyber', duration: 3.2 },
                      { type: 'Natural', duration: 8.6 },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-200">{item.type}</span>
                          <span className="text-sm font-bold text-gold">{item.duration} days</span>
                        </div>
                        <Progress value={(item.duration / 25) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Analysis Tab */}
        <TabsContent value="analysis" className="space-y-6">
          <GlassPanel title="Crisis Analysis" description="Deep dive into crisis patterns">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 rounded-lg bg-emerald-500/10 p-3 border border-emerald-500/30">
                        <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-200">Response Time Improved</p>
                          <p className="text-sm text-slate-400">42% faster resolution vs last year</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg bg-navy-500/10 p-3 border border-navy-500/30">
                        <TrendingUp className="h-5 w-5 text-navy mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-200">Peak Season: Jul-Sep</p>
                          <p className="text-sm text-slate-400">Summer months show 35% higher incidents</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 rounded-lg bg-gold-500/10 p-3 border border-gold-500/30">
                        <AlertTriangle className="h-5 w-5 text-gold mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-200">Economic Crises Most Frequent</p>
                          <p className="text-sm text-slate-400">31% of all recorded crises</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Crisis Pattern Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Recurring Crises</span>
                          <span className="font-medium text-slate-200">23%</span>
                        </div>
                        <Progress value={23} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Clustered Events</span>
                          <span className="font-medium text-slate-200">45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Isolated Incidents</span>
                          <span className="font-medium text-slate-200">32%</span>
                        </div>
                        <Progress value={32} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Successful Prevention</span>
                          <span className="font-medium text-emerald-400">67%</span>
                        </div>
                        <Progress value={67} className="h-2" />
                      </div>
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
