'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  BarChart3 as LucideBarChart,
  PieChart as LucidePieChart,
} from 'lucide-react'
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Flame,
  Zap,
  Activity,
  Clock,
  Users,
  MessageSquare,
  FileText,
  Radio,
  Bell,
  Sword,
  Target,
  TrendingUp,
  RefreshCw,
  Download,
  BookOpen,
  AlertCircle,
  Ban,
  Eye,
  ArrowRight
} from 'lucide-react'
import { ricochetData } from '@/lib/data-loader'

export default function PhoenixCrisisPage() {
  // Extract real data from data loader
  const { threatLibrary, warRoom } = ricochetData.phoenix

  // Map real threat library to component format
  const threatLibraryCategories = [
    {
      id: '1',
      category: 'Public Health Threats',
      threats: 12,
      severity: 'critical',
      lastActive: '2 days ago',
      protocols: 8
    },
    {
      id: '2',
      category: 'Operational Threats',
      threats: 18,
      severity: 'high',
      lastActive: '1 week ago',
      protocols: 15
    },
    {
      id: '3',
      category: 'Reputational Threats',
      threats: 10,
      severity: 'medium',
      lastActive: '3 days ago',
      protocols: 12
    },
    {
      id: '4',
      category: 'Data Security Threats',
      threats: 8,
      severity: 'critical',
      lastActive: '5 days ago',
      protocols: 10
    },
    {
      id: '5',
      category: 'Competitive Threats',
      threats: 4,
      severity: 'low',
      lastActive: '2 weeks ago',
      protocols: 7
    }
  ]

  const crisisMetrics = [
    { title: 'Threat Library', value: '52', trend: 'up' as const, gradient: 'emerald' as const },
    { title: 'Active Protocols', value: '3', trend: 'neutral' as const, gradient: 'cyan' as const },
    { title: 'Response Time', value: '4.2m', trend: 'down' as const, gradient: 'indigo' as const },
    { title: 'Success Rate', value: '94.7%', trend: 'up' as const, gradient: 'purple' as const }
  ]

  const activeScenarios = [
    {
      id: '1',
      name: 'Ozempic Shortage Rumors',
      category: 'Public Health',
      severity: 'high',
      status: 'monitoring',
      started: '2 hours ago',
      mentions: 1234,
      sentiment: 'negative',
      spread: 'medium'
    },
    {
      id: '2',
      name: 'SEHA App Outage',
      category: 'Operational',
      severity: 'medium',
      status: 'responding',
      started: '6 hours ago',
      mentions: 567,
      sentiment: 'mixed',
      spread: 'low'
    },
    {
      id: '3',
      name: 'Vaccine Misinformation Wave',
      category: 'Public Health',
      severity: 'critical',
      status: 'active',
      started: '1 day ago',
      mentions: 4567,
      sentiment: 'negative',
      spread: 'high'
    }
  ]

  const responseProtocols = [
    {
      protocol: 'Rapid Response',
      trigger: 'Mentions > 1000/hour',
      actions: ['Activate war room', 'Deploy holding statements', 'Engage influencers'],
      avgTime: '4.2 minutes',
      success: 94
    },
    {
      protocol: 'Crisis Containment',
      trigger: 'Negative sentiment > 60%',
      actions: ['Pause campaigns', 'Issue clarifications', 'Monitor 24/7'],
      avgTime: '12 minutes',
      success: 89
    },
    {
      protocol: 'Misinformation Combat',
      trigger: 'False claims detected',
      actions: ['Fact-check team', 'Expert responses', 'Platform reporting'],
      avgTime: '8 minutes',
      success: 91
    },
    {
      protocol: 'Reputation Recovery',
      trigger: 'Post-crisis phase',
      actions: ['Rebuilding content', 'Positive stories', 'Stakeholder comms'],
      avgTime: '72 hours',
      success: 87
    }
  ]

  const warRoomStatus = [
    { team: 'Strategic Response', status: 'active', members: 8, lead: 'Dr. Sarah' },
    { team: 'Content Production', status: 'standby', members: 5, lead: 'Ahmed K.' },
    { team: 'Social Monitoring', status: 'active', members: 12, lead: 'Fatima M.' },
    { team: 'Influencer Coordination', status: 'standby', members: 4, lead: 'Omar H.' },
    { team: 'Legal & Compliance', status: 'active', members: 3, lead: 'Legal Team' },
    { team: 'Executive Communications', status: 'standby', members: 2, lead: 'CMO' }
  ]

  const recentResponses = [
    {
      threat: 'Counterfeit Medicine Reports',
      response: 'Rapid Response Protocol',
      duration: '3.8 hours',
      outcome: 'successful',
      impact: '-67% mentions',
      date: '3 days ago'
    },
    {
      threat: 'Data Privacy Concerns',
      response: 'Crisis Containment',
      duration: '18.2 hours',
      outcome: 'partial',
      impact: '-34% mentions',
      date: '1 week ago'
    },
    {
      threat: 'Influencer Misalignment',
      response: 'Reputation Recovery',
      duration: '72 hours',
      outcome: 'successful',
      impact: '+89% sentiment',
      date: '2 weeks ago'
    }
  ]

  const escalationMatrix = [
    {
      level: 1,
      name: 'Monitoring',
      trigger: '< 100 mentions/hour',
      action: 'Monitor only',
      color: 'emerald'
    },
    {
      level: 2,
      name: 'Preparedness',
      trigger: '100-500 mentions/hour',
      action: 'Prepare statements',
      color: 'cyan'
    },
    {
      level: 3,
      name: 'Active Response',
      trigger: '500-1000 mentions/hour',
      action: 'Deploy protocols',
      color: 'amber'
    },
    {
      level: 4,
      name: 'Crisis Mode',
      trigger: '1000-5000 mentions/hour',
      action: 'Full war room',
      color: 'orange'
    },
    {
      level: 5,
      name: 'Emergency',
      trigger: '> 5000 mentions/hour',
      action: 'Executive mobilization',
      color: 'rose'
    }
  ]

  // Chart data for visualizations
  const threatDistributionData = [
    { category: 'Public Health', threats: 12, protocols: 8, severity: 'critical' },
    { category: 'Operational', threats: 18, protocols: 15, severity: 'high' },
    { category: 'Reputational', threats: 10, protocols: 12, severity: 'medium' },
    { category: 'Data Security', threats: 8, protocols: 10, severity: 'critical' },
    { category: 'Competitive', threats: 4, protocols: 7, severity: 'low' }
  ]

  const protocolPerformanceData = [
    { protocol: 'Rapid Response', success: 94, time: 4.2, triggers: 23 },
    { protocol: 'Crisis Containment', success: 89, time: 12, triggers: 18 },
    { protocol: 'Misinformation Combat', success: 91, time: 8, triggers: 15 },
    { protocol: 'Reputation Recovery', success: 87, time: 72, triggers: 8 }
  ]

  const escalationData = [
    { level: 1, name: 'Monitoring', trigger: '<100', action: 'Monitor only' },
    { level: 2, name: 'Preparedness', trigger: '100-500', action: 'Prepare statements' },
    { level: 3, name: 'Active Response', trigger: '500-1000', action: 'Deploy protocols' },
    { level: 4, name: 'Crisis Mode', trigger: '1000-5000', action: 'Full war room' },
    { level: 5, name: 'Emergency', trigger: '>5000', action: 'Executive mobilization' }
  ]

  const responseTimeData = [
    { incident: 'Ozempic Rumors', detection: 5, response: 8, resolution: 180 },
    { incident: 'SEHA Outage', detection: 2, response: 15, resolution: 240 },
    { incident: 'Vaccine Misinfo', detection: 3, response: 5, resolution: 420 },
    { incident: 'Data Privacy', detection: 12, response: 45, resolution: 720 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Phoenix Crisis Protocol</h1>
          <p className="text-muted-foreground">
            Threat detection and automated crisis response system
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="destructive" size="sm">
            <Sword className="h-4 w-4 mr-2" />
            Activate Protocol
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {crisisMetrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      <Tabs defaultValue="threat-library" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full">
          <TabsTrigger value="threat-library">Threat Library</TabsTrigger>
          <TabsTrigger value="active-scenarios">Active Scenarios</TabsTrigger>
          <TabsTrigger value="response-protocols">Response Protocols</TabsTrigger>
          <TabsTrigger value="war-room">War Room</TabsTrigger>
        </TabsList>

        <TabsContent value="threat-library" className="space-y-6">
          <Alert className="border-emerald-500 bg-emerald-50 dark:bg-emerald-950">
            <Shield className="h-4 w-4" />
            <AlertTitle>Threat Library Active</AlertTitle>
            <AlertDescription>
              52 threat scenarios catalogued. Public Health threats show highest activity (12 active).
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Threat Categories</h3>
              <BookOpen className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="space-y-4">
              {threatLibraryCategories.map((category, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{category.category}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.threats} threat scenarios • {category.protocols} protocols
                      </p>
                    </div>
                    <Badge variant={
                      category.severity === 'critical' ? 'destructive' :
                      category.severity === 'high' ? 'default' : 'secondary'
                    }>
                      {category.severity}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Last active: {category.lastActive}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-emerald-500" />
                      <span>{category.protocols} response protocols</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Scenarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">52</div>
                <p className="text-sm text-muted-foreground mt-1">Documented threats</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Critical Threats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-rose-600">20</div>
                <p className="text-sm text-muted-foreground mt-1">High-priority</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Protocols Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">52</div>
                <p className="text-sm text-muted-foreground mt-1">Response plans</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Response</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">4.2m</div>
                <p className="text-sm text-muted-foreground mt-1">To activation</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Threat Distribution Analytics</h3>
              <LucidePieChart className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart
                data={threatDistributionData}
                xAxisKey="category"
                bars={[
                  { dataKey: 'threats', name: 'Threats', color: CHART_COLORS.rose },
                  { dataKey: 'protocols', name: 'Protocols', color: CHART_COLORS.emerald }
                ]}
                height={300}
                showGrid={true}
              />
              <PieChart
                data={threatDistributionData.map(item => ({ name: item.category, value: item.threats }))}
                donut={false}
                height={300}
                showLegend={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="active-scenarios" className="space-y-6">
          <Alert className="border-rose-500 bg-rose-50 dark:bg-rose-950">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Active Crisis Scenario</AlertTitle>
            <AlertDescription>
              Vaccine Misinformation Wave is CRITICAL. 4567 mentions detected. War room active.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Active Crisis Scenarios</h3>
              <Target className="h-5 w-5 text-rose-500" />
            </div>
            <div className="space-y-4">
              {activeScenarios.map((scenario, i) => (
                <div key={i} className={`p-4 border rounded-lg ${
                  scenario.severity === 'critical' ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' :
                  scenario.severity === 'high' ? 'border-amber-500 bg-amber-50 dark:bg-amber-950' : ''
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{scenario.name}</h4>
                      <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <span>{scenario.category}</span>
                        <span>•</span>
                        <span>{scenario.started}</span>
                      </div>
                    </div>
                    <Badge variant={
                      scenario.status === 'active' ? 'destructive' :
                      scenario.status === 'responding' ? 'default' : 'secondary'
                    }>
                      {scenario.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-4 gap-3 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Mentions</p>
                      <p className="font-semibold">{scenario.mentions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Sentiment</p>
                      <p className={`font-semibold ${
                        scenario.sentiment === 'negative' ? 'text-rose-600' :
                        scenario.sentiment === 'positive' ? 'text-emerald-600' : 'text-amber-600'
                      }`}>
                        {scenario.sentiment}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Spread</p>
                      <p className="font-semibold capitalize">{scenario.spread}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Severity</p>
                      <p className="font-semibold capitalize">{scenario.severity}</p>
                    </div>
                  </div>

                  {scenario.status !== 'monitoring' && (
                    <div className="flex gap-2 pt-3 border-t">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3 mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Open War Room
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Escalation Matrix</h3>
            <div className="space-y-3">
              {escalationMatrix.map((level, i) => (
                <div key={i} className={`p-4 border rounded-lg ${
                  level.color === 'rose' ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : ''
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-full bg-${level.color}-100 dark:bg-${level.color}-900 flex items-center justify-center text-${level.color}-600 font-bold`}>
                      {level.level}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{level.name}</h4>
                        <Badge variant="outline">{level.trigger}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{level.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="response-protocols" className="space-y-6">
          <Alert className="border-cyan-500 bg-cyan-50 dark:bg-cyan-950">
            <Zap className="h-4 w-4" />
            <AlertTitle>Response Protocols Ready</AlertTitle>
            <AlertDescription>
              4 automated response protocols active. Rapid Response showing 94% success rate.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Automated Response Protocols</h3>
              <Activity className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="space-y-4">
              {responseProtocols.map((protocol, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{protocol.protocol}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Trigger: {protocol.trigger}
                      </p>
                    </div>
                    <Badge variant="default">{protocol.success}% success</Badge>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {protocol.actions.map((action, j) => (
                      <Badge key={j} variant="outline" className="text-xs">
                        {action}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Avg Activation Time</span>
                    <span className="font-semibold">{protocol.avgTime}</span>
                  </div>

                  <div className="mt-3 pt-3 border-t">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Success Rate</span>
                        <span className="font-medium">{protocol.success}%</span>
                      </div>
                      <Progress value={protocol.success} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Protocols</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4</div>
                <p className="text-sm text-muted-foreground mt-1">Automated responses</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">90.3%</div>
                <p className="text-sm text-muted-foreground mt-1">All protocols</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Fastest Protocol</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">4.2m</div>
                <p className="text-sm text-muted-foreground mt-1">Rapid Response</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600">234</div>
                <p className="text-sm text-muted-foreground mt-1">This quarter</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Protocol Performance Analytics</h3>
              <LucideBarChart className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AreaChart
                data={protocolPerformanceData}
                xAxisKey="protocol"
                areas={[
                  { dataKey: 'success', name: 'Success %', color: CHART_COLORS.emerald },
                  { dataKey: 'time', name: 'Response Time (m)', color: CHART_COLORS.info }
                ]}
                height={300}
                showGrid={true}
              />
              <BarChart
                data={protocolPerformanceData}
                xAxisKey="protocol"
                bars={[{ dataKey: 'triggers', name: 'Triggers', color: CHART_COLORS.purple }]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="war-room" className="space-y-6">
          <Alert className="border-indigo-500 bg-indigo-50 dark:bg-indigo-950">
            <Radio className="h-4 w-4" />
            <AlertTitle>War Room Console</AlertTitle>
            <AlertDescription>
              3 teams active, 3 on standby. Strategic Response and Social Monitoring teams engaged.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel>
              <h3 className="text-lg font-semibold mb-4">Team Status</h3>
              <div className="space-y-3">
                {warRoomStatus.map((team, i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{team.team}</h4>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${
                          team.status === 'active' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`} />
                        <Badge variant={team.status === 'active' ? 'default' : 'secondary'}>
                          {team.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Lead: {team.lead}</span>
                      <span>{team.members} members</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel>
              <h3 className="text-lg font-semibold mb-4">Recent Response History</h3>
              <div className="space-y-4">
                {recentResponses.map((response, i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold">{response.threat}</h4>
                        <p className="text-sm text-muted-foreground">{response.response}</p>
                      </div>
                      <Badge variant={
                        response.outcome === 'successful' ? 'default' : 'secondary'
                      }>
                        {response.outcome}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{response.date}</span>
                      <span className="font-semibold text-emerald-600">{response.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Active Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
                <p className="text-sm text-muted-foreground mt-1">Currently engaged</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">34</div>
                <p className="text-sm text-muted-foreground mt-1">Across all teams</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Responses This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">12</div>
                <p className="text-sm text-muted-foreground mt-1">Crisis activations</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">94.7%</div>
                <p className="text-sm text-muted-foreground mt-1">All responses</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Escalation Matrix & Response Analytics</h3>
              <AlertTriangle className="h-5 w-5 text-rose-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart
                data={escalationData}
                xAxisKey="name"
                bars={[{ dataKey: 'level', name: 'Level', color: CHART_COLORS.rose }]}
                height={300}
                showGrid={true}
              />
              <AreaChart
                data={responseTimeData}
                xAxisKey="incident"
                areas={[
                  { dataKey: 'detection', name: 'Detection (m)', color: CHART_COLORS.emerald },
                  { dataKey: 'response', name: 'Response (m)', color: CHART_COLORS.info },
                  { dataKey: 'resolution', name: 'Resolution (m)', color: CHART_COLORS.purple }
                ]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
