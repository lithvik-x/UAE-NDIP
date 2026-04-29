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
  GitBranch,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Flame,
  TrendingUp,
  BarChart3,
  Activity,
  Settings,
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  RefreshCw,
  Download,
  Target,
  Users,
  MessageSquare,
  Calendar,
  Bell,
  Eye,
  Sparkles
} from 'lucide-react'
import { ricochetData } from '@/lib/data-loader'

export default function AutomatedLogicPage() {
  // Extract real data from data loader
  const { triggers, windows } = ricochetData.automatedLogic
  const logicMetrics = [
    { title: 'Active Gates', value: '24', trend: 'up' as const, gradient: 'emerald' as const },
    { title: 'Triggers Today', value: '156', trend: 'up' as const, gradient: 'cyan' as const },
    { title: 'Automation Rate', value: '94.2%', trend: 'up' as const, gradient: 'indigo' as const },
    { title: 'Avg Response', value: '2.3s', trend: 'down' as const, gradient: 'purple' as const }
  ]

  const crisisTrigger = {
    name: 'Crisis Trigger Gate',
    status: 'active',
    triggers: 23,
    lastTriggered: '2 hours ago',
    conditions: [
      { condition: 'Mentions spike > 500%', value: true },
      { condition: 'Negative sentiment > 70%', value: true },
      { condition: 'Verified false information', value: false },
      { condition: 'Multiple platform coordination', value: true }
    ],
    actions: [
      'Activate war room',
      'Pause all scheduled content',
      'Send executive alert',
      'Enable crisis mode dashboard'
    ],
    effectiveness: 97
  }

  const anxietyWindow = {
    name: 'Anxiety Window Gate',
    status: 'active',
    triggers: 45,
    lastTriggered: '45 mins ago',
    conditions: [
      { condition: 'Anxiety keywords > threshold', value: true },
      { condition: 'Health concern mentions rising', value: true },
      { condition: 'Question volume > normal', value: false },
      { condition: 'Engagement with fear content', value: true }
    ],
    actions: [
      'Deploy calming content',
      'Increase expert presence',
      'Activate FAQ responses',
      'Boost positive narratives'
    ],
    effectiveness: 89
  }

  const brokenFunnel = {
    name: 'Broken Funnel Gate',
    status: 'active',
    triggers: 34,
    lastTriggered: '1 day ago',
    conditions: [
      { condition: 'Conversion drop > 30%', value: true },
      { condition: 'Booking abandonment spike', value: true },
      { condition: 'App crash reports > normal', value: false },
      { condition: 'Page load failure > 5%', value: false }
    ],
    actions: [
      'Alert technical team',
      'Deploy maintenance message',
      'Pause marketing spend',
      'Activate backup systems'
    ],
    effectiveness: 94
  }

  const viralRocket = {
    name: 'Viral Rocket Gate',
    status: 'active',
    triggers: 67,
    lastTriggered: '3 hours ago',
    conditions: [
      { condition: 'Engagement > 10x average', value: true },
      { condition: 'Share velocity accelerating', value: true },
      { condition: 'Cross-platform amplification', value: true },
      { condition: 'Influencer pickup detected', value: false }
    ],
    actions: [
      'Boost paid amplification',
      'Deploy sequel content',
      'Activate influencer network',
      'Extend content lifecycle'
    ],
    effectiveness: 91
  }

  const additionalGates = [
    {
      name: 'Content Freshness Gate',
      description: 'Auto-archive content older than 30 days',
      status: 'active',
      triggers: 12,
      lastTriggered: '6 hours ago'
    },
    {
      name: 'Sentiment Shift Gate',
      description: 'Detect sudden sentiment changes',
      status: 'active',
      triggers: 28,
      lastTriggered: '4 hours ago'
    },
    {
      name: 'Competitor Activity Gate',
      description: 'Monitor competitor campaign launches',
      status: 'standby',
      triggers: 8,
      lastTriggered: '2 days ago'
    },
    {
      name: 'Trend Alert Gate',
      description: 'Identify emerging healthcare trends',
      status: 'active',
      triggers: 45,
      lastTriggered: '1 hour ago'
    }
  ]

  const gateHistory = [
    {
      gate: 'Viral Rocket Gate',
      triggered: '3 hours ago',
      condition: 'Engagement spike detected',
      action: 'Boosted paid amplification',
      result: 'successful',
      impact: '+234% reach'
    },
    {
      gate: 'Crisis Trigger Gate',
      triggered: '2 hours ago',
      condition: 'Mentions spike > 500%',
      action: 'Activated war room',
      result: 'successful',
      impact: 'Crisis contained'
    },
    {
      gate: 'Anxiety Window Gate',
      triggered: '45 mins ago',
      condition: 'Anxiety keywords rising',
      action: 'Deployed calming content',
      result: 'partial',
      impact: '+18% positive sentiment'
    },
    {
      gate: 'Trend Alert Gate',
      triggered: '1 hour ago',
      condition: 'New wellness trend detected',
      action: 'Created trend response content',
      result: 'successful',
      impact: '+67K engagements'
    }
  ]

  const performanceData = [
    { metric: 'Total Triggers', value: 234, change: '+12%', positive: true },
    { metric: 'Successful Actions', value: 212, change: '+8%', positive: true },
    { metric: 'False Positives', value: 18, change: '-23%', positive: true },
    { metric: 'Avg Response Time', value: '2.3s', change: '-0.4s', positive: true },
    { metric: 'Automation Success', value: '94.2%', change: '+5.1%', positive: true },
    { metric: 'Human Interventions', value: 22, change: '-15%', positive: true }
  ]

  // Chart data for visualizations
  const gateTriggerTrendData = [
    { month: 'Jan', crisis: 15, anxiety: 28, broken: 12, viral: 45 },
    { month: 'Feb', crisis: 18, anxiety: 32, broken: 14, viral: 52 },
    { month: 'Mar', crisis: 21, anxiety: 38, broken: 18, viral: 58 },
    { month: 'Apr', crisis: 19, anxiety: 35, broken: 16, viral: 62 },
    { month: 'May', crisis: 23, anxiety: 42, broken: 20, viral: 67 },
    { month: 'Jun', crisis: 25, anxiety: 45, broken: 22, viral: 71 }
  ]

  const gateEffectivenessData = [
    { gate: 'Crisis Trigger', effectiveness: 97, triggers: 23, accuracy: 95 },
    { gate: 'Anxiety Window', effectiveness: 89, triggers: 45, accuracy: 87 },
    { gate: 'Broken Funnel', effectiveness: 94, triggers: 34, accuracy: 92 },
    { gate: 'Viral Rocket', effectiveness: 91, triggers: 67, accuracy: 88 }
  ]

  const responseTimeTrendData = [
    { period: 'Week 1', avg: 3.2, fastest: 0.9, slowest: 8.5 },
    { period: 'Week 2', avg: 2.9, fastest: 0.8, slowest: 7.2 },
    { period: 'Week 3', avg: 2.6, fastest: 0.7, slowest: 6.8 },
    { period: 'Week 4', avg: 2.3, fastest: 0.8, slowest: 5.9 }
  ]

  const automationRateData = [
    { gate: 'Crisis Trigger', automated: 97, manual: 3 },
    { gate: 'Anxiety Window', automated: 89, manual: 11 },
    { gate: 'Broken Funnel', automated: 94, manual: 6 },
    { gate: 'Viral Rocket', automated: 91, manual: 9 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Automated Logic Gates</h1>
          <p className="text-muted-foreground">
            Intelligent automation triggers and response workflows
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configure Gates
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {logicMetrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      <Tabs defaultValue="main-gates" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full">
          <TabsTrigger value="main-gates">Main Gates</TabsTrigger>
          <TabsTrigger value="additional">Additional</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="main-gates" className="space-y-6">
          <Alert className="border-emerald-500 bg-emerald-50 dark:bg-emerald-950">
            <Zap className="h-4 w-4" />
            <AlertTitle>All Gates Operational</AlertTitle>
            <AlertDescription>
              4 primary logic gates active. 156 triggers executed today with 94.2% automation success rate.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <GlassPanel>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-rose-100 dark:bg-rose-900 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{crisisTrigger.name}</h3>
                    <p className="text-sm text-muted-foreground">Crisis detection & response</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <Badge variant="default">Active</Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Total Triggers</p>
                  <p className="font-semibold">{crisisTrigger.triggers}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Last Triggered</p>
                  <p className="font-semibold">{crisisTrigger.lastTriggered}</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <p className="text-sm font-medium">Trigger Conditions</p>
                {crisisTrigger.conditions.map((cond, i) => (
                  <div key={i} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">{cond.condition}</span>
                    {cond.value ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border-2 border-muted" />
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-sm font-medium">Automated Actions</p>
                {crisisTrigger.actions.map((action, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Sparkles className="h-3 w-3 text-cyan-500" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Effectiveness</span>
                  <span className="font-medium">{crisisTrigger.effectiveness}%</span>
                </div>
                <Progress value={crisisTrigger.effectiveness} className="h-2" />
              </div>
            </GlassPanel>

            <GlassPanel>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                    <Flame className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{viralRocket.name}</h3>
                    <p className="text-sm text-muted-foreground">Viral content amplification</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <Badge variant="default">Active</Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Total Triggers</p>
                  <p className="font-semibold">{viralRocket.triggers}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Last Triggered</p>
                  <p className="font-semibold">{viralRocket.lastTriggered}</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <p className="text-sm font-medium">Trigger Conditions</p>
                {viralRocket.conditions.map((cond, i) => (
                  <div key={i} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm">{cond.condition}</span>
                    {cond.value ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border-2 border-muted" />
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-sm font-medium">Automated Actions</p>
                {viralRocket.actions.map((action, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Sparkles className="h-3 w-3 text-cyan-500" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Effectiveness</span>
                  <span className="font-medium">{viralRocket.effectiveness}%</span>
                </div>
                <Progress value={viralRocket.effectiveness} className="h-2" />
              </div>
            </GlassPanel>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassPanel>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{anxietyWindow.name}</h3>
                      <p className="text-xs text-muted-foreground">Anxiety response</p>
                    </div>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="text-sm space-y-1">
                  <p>Triggers: <strong>{anxietyWindow.triggers}</strong></p>
                  <p>Last: <strong>{anxietyWindow.lastTriggered}</strong></p>
                  <p>Effectiveness: <strong className="text-emerald-600">{anxietyWindow.effectiveness}%</strong></p>
                </div>
              </GlassPanel>

              <GlassPanel>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{brokenFunnel.name}</h3>
                      <p className="text-xs text-muted-foreground">Conversion recovery</p>
                    </div>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="text-sm space-y-1">
                  <p>Triggers: <strong>{brokenFunnel.triggers}</strong></p>
                  <p>Last: <strong>{brokenFunnel.lastTriggered}</strong></p>
                  <p>Effectiveness: <strong className="text-emerald-600">{brokenFunnel.effectiveness}%</strong></p>
                </div>
              </GlassPanel>
            </div>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Gate Performance Analytics</h3>
              <LucideBarChart className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart
                data={gateEffectivenessData}
                xAxisKey="gate"
                bars={[
                  { dataKey: 'effectiveness', name: 'Effectiveness %', color: CHART_COLORS.emerald },
                  { dataKey: 'accuracy', name: 'Accuracy %', color: CHART_COLORS.info }
                ]}
                height={300}
                showGrid={true}
              />
              <PieChart
                data={gateEffectivenessData.map(item => ({ name: item.gate, value: item.triggers }))}
                donut={false}
                height={300}
                showLegend={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="additional" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Additional Logic Gates</h3>
              <GitBranch className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalGates.map((gate, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{gate.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{gate.description}</p>
                    </div>
                    <Badge variant={gate.status === 'active' ? 'default' : 'secondary'}>
                      {gate.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Triggers</p>
                      <p className="font-semibold">{gate.triggers}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Triggered</p>
                      <p className="font-semibold">{gate.lastTriggered}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Gates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
                <p className="text-sm text-muted-foreground mt-1">All configured</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Active Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">21</div>
                <p className="text-sm text-muted-foreground mt-1">Operational</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Triggers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">234</div>
                <p className="text-sm text-muted-foreground mt-1">Today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Most Active Gate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-purple-600">Viral Rocket</div>
                <p className="text-sm text-muted-foreground mt-1">67 triggers</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Gate Trigger History</h3>
              <Clock className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="space-y-4">
              {gateHistory.map((event, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{event.gate}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{event.triggered}</p>
                    </div>
                    <Badge variant={
                      event.result === 'successful' ? 'default' : 'secondary'
                    }>
                      {event.result}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Condition</p>
                      <p className="font-medium">{event.condition}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Action</p>
                      <p className="font-medium">{event.action}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm pt-3 border-t">
                    <span className="text-muted-foreground">Impact</span>
                    <span className="font-semibold text-emerald-600">{event.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Trigger Trend Analysis</h3>
              <Clock className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AreaChart
                data={gateTriggerTrendData}
                xAxisKey="month"
                areas={[
                  { dataKey: 'crisis', name: 'Crisis', color: CHART_COLORS.rose },
                  { dataKey: 'anxiety', name: 'Anxiety', color: CHART_COLORS.warning },
                  { dataKey: 'broken', name: 'Broken Funnel', color: CHART_COLORS.orange },
                  { dataKey: 'viral', name: 'Viral Rocket', color: CHART_COLORS.emerald }
                ]}
                height={300}
                showGrid={true}
              />
              <AreaChart
                data={responseTimeTrendData}
                xAxisKey="period"
                areas={[
                  { dataKey: 'avg', name: 'Avg (s)', color: CHART_COLORS.info },
                  { dataKey: 'fastest', name: 'Fastest (s)', color: CHART_COLORS.emerald },
                  { dataKey: 'slowest', name: 'Slowest (s)', color: CHART_COLORS.rose }
                ]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Gate Performance Metrics</h3>
              <BarChart3 className="h-5 w-5 text-purple-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {performanceData.map((metric, i) => (
                <Card key={i}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">{metric.metric}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className={`flex items-center gap-1 text-sm ${
                        metric.positive ? 'text-emerald-600' : 'text-rose-600'
                      }`}>
                        {metric.positive ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingUp className="h-3 w-3 rotate-180" />
                        )}
                        <span>{metric.change}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  Successful Automations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-emerald-600">212</div>
                <Progress value={94} className="h-2 mt-3" />
                <p className="text-sm text-muted-foreground mt-2">94.2% success rate</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Activity className="h-5 w-5 text-amber-500" />
                  Human Interventions Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-amber-600">22</div>
                <Progress value={9} className="h-2 mt-3" />
                <p className="text-sm text-muted-foreground mt-2">9.4% of total triggers</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Fastest Response</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">0.8s</div>
                <p className="text-sm text-muted-foreground mt-1">Trend Alert Gate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Most Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">97%</div>
                <p className="text-sm text-muted-foreground mt-1">Crisis Trigger Gate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Most Active</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">67</div>
                <p className="text-sm text-muted-foreground mt-1">Viral Rocket Gate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">False Positives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-rose-600">18</div>
                <p className="text-sm text-muted-foreground mt-1">7.7% of triggers</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Automation Rate Analysis</h3>
              <LucideBarChart className="h-5 w-5 text-purple-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart
                data={automationRateData}
                xAxisKey="gate"
                bars={[
                  { dataKey: 'automated', name: 'Automated %', color: CHART_COLORS.emerald },
                  { dataKey: 'manual', name: 'Manual %', color: CHART_COLORS.rose }
                ]}
                height={300}
                showGrid={true}
              />
              <AreaChart
                data={gateEffectivenessData}
                xAxisKey="gate"
                areas={[
                  { dataKey: 'effectiveness', name: 'Effectiveness %', color: CHART_COLORS.emerald },
                  { dataKey: 'triggers', name: 'Triggers', color: CHART_COLORS.info }
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
