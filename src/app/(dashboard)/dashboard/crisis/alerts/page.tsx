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
  Bell,
  Clock,
  TrendingUp,
  CheckCircle,
  XCircle,
  Zap,
  Activity,
  MessageSquare,
} from 'lucide-react'
import {
  useCrisisOverviewData,
  useEarlyWarningData,
} from '@/lib/data-loader'

export default function CrisisAlertsPage() {
  const { data } = useCrisisOverviewData()
  const { data: earlyWarning } = useEarlyWarningData()

  // Alert metrics
  const activeAlerts = 24
  const criticalAlerts = 3
  const resolvedAlerts = 892
  const avgResponseTime = 8.5

  // Real-time alerts
  const realTimeAlerts = [
    { id: 'ALT-001', time: '2 min ago', alert: 'Spike in Regional Trade Concerns', severity: 'CRITICAL', source: 'Social Media', status: 'Active' },
    { id: 'ALT-002', time: '8 min ago', alert: 'Currency Market Unusual Activity', severity: 'HIGH', source: 'Financial', status: 'Investigating' },
    { id: 'ALT-003', time: '15 min ago', alert: 'Labor Market Discussion Increase', severity: 'MEDIUM', source: 'Multiple', status: 'Monitoring' },
    { id: 'ALT-004', time: '23 min ago', alert: 'Social Media Sentiment Shift', severity: 'MEDIUM', source: 'Twitter/X', status: 'Monitoring' },
    { id: 'ALT-005', time: '45 min ago', alert: 'Healthcare Supply Discussion', severity: 'LOW', source: 'News', status: 'Resolved' },
    { id: 'ALT-006', time: '1 hr ago', alert: 'Tourism Sector Concerns', severity: 'MEDIUM', source: 'Social Media', status: 'Resolved' },
    { id: 'ALT-007', time: '2 hr ago', alert: 'Cyber Activity Increase', severity: 'HIGH', source: 'Cyber', status: 'Resolved' },
    { id: 'ALT-008', time: '3 hr ago', alert: 'Political Content Surge', severity: 'MEDIUM', source: 'Multiple', status: 'Resolved' },
  ]

  // Alert distribution
  const alertDistribution = [
    { type: 'Social Media', count: 145, percentage: 38, color: CHART_COLORS.rose },
    { type: 'News', count: 98, percentage: 26, color: CHART_COLORS.navy },
    { type: 'Financial', count: 67, percentage: 18, color: CHART_COLORS.gold },
    { type: 'Cyber', count: 42, percentage: 11, color: CHART_COLORS.orange },
    { type: 'Other', count: 28, percentage: 7, color: CHART_COLORS.platinum },
  ]

  // Severity trend
  const severityTrend = [
    { hour: '00:00', critical: 0, high: 2, medium: 5, low: 8 },
    { hour: '04:00', critical: 1, high: 1, medium: 4, low: 6 },
    { hour: '08:00', critical: 0, high: 3, medium: 7, low: 12 },
    { hour: '12:00', critical: 2, high: 5, medium: 9, low: 15 },
    { hour: '16:00', critical: 1, high: 4, medium: 8, low: 14 },
    { hour: '20:00', critical: 1, high: 3, medium: 6, low: 10 },
    { hour: 'Now', critical: 3, high: 8, medium: 12, low: 18 },
  ]

  // Early warning indicators
  const warningIndicators = [
    { indicator: 'Social Sentiment Decline', status: 'WARNING', value: -15, threshold: -20 },
    { indicator: 'Media Volume Spike', status: 'ELEVATED', value: 45, threshold: 30 },
    { indicator: 'Keyword Clustering', status: 'NORMAL', value: 12, threshold: 25 },
    { indicator: 'Cross-Platform Correlation', status: 'ELEVATED', value: 68, threshold: 50 },
    { indicator: 'Influencer Activity', status: 'WARNING', value: 85, threshold: 75 },
  ]

  // Notification channels
  const notificationChannels = [
    { channel: 'SMS', delivered: 1245,成功率: 98.5 },
    { channel: 'Email', delivered: 3456,成功率: 99.2 },
    { channel: 'App Push', delivered: 5678,成功率: 97.8 },
    { channel: 'Dashboard', delivered: 8901,成功率: 100 },
    { channel: 'API', delivered: 2345,成功率: 99.8 },
  ]

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return <XCircle className="h-5 w-5 text-rose-400" />
      case 'HIGH': return <AlertTriangle className="h-5 w-5 text-orange-400" />
      case 'MEDIUM': return <AlertCircle className="h-5 w-5 text-yellow-400" />
      case 'LOW': return <Bell className="h-5 w-5 text-blue-400" />
      default: return <Activity className="h-5 w-5 text-slate-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return <Badge variant="destructive" className="text-xs">{status}</Badge>
      case 'Investigating': return <Badge variant="warning" className="text-xs">{status}</Badge>
      case 'Monitoring': return <Badge variant="outline" className="text-xs text-blue-400">{status}</Badge>
      case 'Resolved': return <Badge variant="outline" className="text-xs text-emerald-400">{status}</Badge>
      default: return <Badge variant="outline" className="text-xs">{status}</Badge>
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'WARNING': return 'text-yellow-400'
      case 'ELEVATED': return 'text-orange-400'
      case 'NORMAL': return 'text-emerald-400'
      case 'CRITICAL': return 'text-rose-400'
      default: return 'text-slate-400'
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="rose" className="mb-2">C-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-rose">Real-time Crisis Alerts</h1>
          <p className="mt-2 text-slate-400">
            Live alert monitoring and early warning system
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose/50 text-rose hover:bg-rose/10">
            <Bell className="h-4 w-4" />
            Configure
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Test Alert
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Alerts"
          value={activeAlerts.toString()}
          previousValue={activeAlerts + 5}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="danger"
        />
        <MetricCard
          title="Critical Alerts"
          value={criticalAlerts.toString()}
          previousValue={criticalAlerts + 1}
          icon={<XCircle className="h-6 w-6" />}
          gradient="rose"
          status="danger"
        />
        <MetricCard
          title="Resolved Alerts"
          value={resolvedAlerts.toString()}
          previousValue={resolvedAlerts - 45}
          icon={<CheckCircle className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Avg Response Time"
          value={avgResponseTime + 'min'}
          previousValue={avgResponseTime + 2.1}
          icon={<Clock className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
      </div>

      <Tabs defaultValue="alerts" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="alerts">Live Alerts</TabsTrigger>
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
          <TabsTrigger value="warning">Early Warning</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        {/* Live Alerts Tab */}
        <TabsContent value="alerts" className="space-y-6">
          <GlassPanel title="Live Alert Feed" description="Real-time crisis alert stream">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Alert Stream</CardTitle>
                  <CardDescription>Most recent alerts (24h)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[450px]">
                    <div className="space-y-3">
                      {realTimeAlerts.map((alert, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between rounded-lg border p-4 hover:bg-slate-800/70 ${
                            alert.severity === 'CRITICAL' ? 'border-rose-500/50 bg-rose-500/5' :
                            alert.severity === 'HIGH' ? 'border-orange-500/50 bg-orange-500/5' :
                            alert.severity === 'MEDIUM' ? 'border-yellow-500/50 bg-yellow-500/5' :
                            'border-slate-700 bg-slate-800/50'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            {getSeverityIcon(alert.severity)}
                            <div>
                              <p className="font-semibold text-slate-200">{alert.alert}</p>
                              <div className="flex items-center gap-3 mt-1">
                                <span className="text-xs text-slate-400">ID: {alert.id}</span>
                                <span className="text-xs text-slate-500">•</span>
                                <span className="text-xs text-slate-400">Source: {alert.source}</span>
                                <span className="text-xs text-slate-500">•</span>
                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {alert.time}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className={`text-xs ${
                              alert.severity === 'CRITICAL' ? 'text-rose-400' :
                              alert.severity === 'HIGH' ? 'text-orange-400' :
                              alert.severity === 'MEDIUM' ? 'text-yellow-400' :
                              'text-blue-400'
                            }`}>{alert.severity}</Badge>
                            {getStatusBadge(alert.status)}
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

        {/* Distribution Tab */}
        <TabsContent value="distribution" className="space-y-6">
          <GlassPanel title="Alert Distribution" description="Alert source and severity breakdown">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">By Source</CardTitle>
                    <CardDescription>Alert distribution by source</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={alertDistribution}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Severity Trend (24h)</CardTitle>
                    <CardDescription>Alert severity over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={severityTrend}
                      xAxisKey="hour"
                      lines={[
                        { dataKey: 'critical', name: 'Critical', color: CHART_COLORS.rose },
                        { dataKey: 'high', name: 'High', color: CHART_COLORS.orange },
                        { dataKey: 'medium', name: 'Medium', color: CHART_COLORS.yellow },
                        { dataKey: 'low', name: 'Low', color: CHART_COLORS.blue },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Alert Statistics</CardTitle>
                  <CardDescription>24-hour alert metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-rose-400">{activeAlerts}</div>
                      <p className="text-sm text-slate-400 mt-1">Active</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-400">{activeAlerts + 12}</div>
                      <p className="text-sm text-slate-400 mt-1">Last 24h</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-emerald-400">{resolvedAlerts}</div>
                      <p className="text-sm text-slate-400 mt-1">Resolved</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-400">{avgResponseTime}m</div>
                      <p className="text-sm text-slate-400 mt-1">Avg Response</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Early Warning Tab */}
        <TabsContent value="warning" className="space-y-6">
          <GlassPanel title="Early Warning Indicators" description="Predictive crisis indicators">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Warning Indicators</CardTitle>
                  <CardDescription>Current status of early warning metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px]">
                    <div className="space-y-4">
                      {warningIndicators.map((indicator, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{indicator.indicator}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-xs text-slate-400">Value: {indicator.value}</span>
                              <Badge variant="outline" className={`text-xs ${getStatusColor(indicator.status)}`}>
                                {indicator.status}
                              </Badge>
                            </div>
                          </div>
                          <Progress
                            value={(indicator.value / indicator.threshold) * 100}
                            className={`h-2 ${
                              indicator.status === 'CRITICAL' ? 'bg-rose-500' :
                              indicator.status === 'WARNING' ? 'bg-yellow-500' :
                              indicator.status === 'ELEVATED' ? 'bg-orange-500' :
                              'bg-emerald-500'
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Prediction Confidence</CardTitle>
                  <CardDescription>Model accuracy for early warnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Overall Accuracy</span>
                        <span className="font-medium text-emerald-400">87.5%</span>
                      </div>
                      <Progress value={87.5} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">False Positive Rate</span>
                        <span className="font-medium text-yellow-400">8.2%</span>
                      </div>
                      <Progress value={8.2} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Lead Time (avg)</span>
                        <span className="font-medium text-navy">4.2 hours</span>
                      </div>
                      <Progress value={42} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <GlassPanel title="Notification Channels" description="Alert delivery performance">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Channel Performance</CardTitle>
                  <CardDescription>Delivery success rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notificationChannels.map((channel, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="w-20 justify-center">{channel.channel}</Badge>
                            <span className="text-sm text-slate-400">{channel.delivered.toLocaleString()} delivered</span>
                          </div>
                          <span className={`text-sm font-bold ${
                            channel.successRate >= 99 ? 'text-emerald-400' :
                            channel.successRate >= 97 ? 'text-yellow-400' :
                            'text-rose-400'
                          }`}>{channel.successRate}%</span>
                        </div>
                        <Progress value={channel.successRate} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Notification Contacts</CardTitle>
                  <CardDescription>Active notification endpoints</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {[
                        { name: 'Crisis Command Team', type: 'SMS', status: 'Active' },
                        { name: 'Executive Office', type: 'Email', status: 'Active' },
                        { name: 'Operations Center', type: 'App Push', status: 'Active' },
                        { name: 'Regional Managers', type: 'SMS', status: 'Active' },
                        { name: 'Partner Agencies', type: 'API', status: 'Active' },
                      ].map((contact, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <MessageSquare className="h-4 w-4 text-navy" />
                            <span className="text-sm font-medium text-slate-200">{contact.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs">{contact.type}</Badge>
                            <Badge variant="outline" className="text-xs text-emerald-400">{contact.status}</Badge>
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
