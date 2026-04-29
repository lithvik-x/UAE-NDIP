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
  Globe,
  Clock,
  Zap,
  Target,
  Settings,
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  RefreshCw,
  Download,
  Calendar,
  MapPin,
  TrendingUp,
  Activity,
  Radio,
  Bell,
  Eye,
  Gauge,
  Timer,
  AlertCircle,
  CheckCircle2,
  XCircle,
  BarChart3,
  Users,
  MessageSquare,
  Share2
} from 'lucide-react'
import { ricochetData } from '@/lib/data-loader'

export default function GlobalKineticPage() {
  // Extract real data from data loader
  const { velocityRail, chronobiology, overrides } = ricochetData.kineticShell
  // Map real velocity rail stages to component structure
  const velocityRailStages = velocityRail.map((stage, index) => ({
    stage: stage.stage,
    duration: `${stage.duration}h`,
    status: index < 3 ? 'complete' : index === 3 ? 'active' : 'pending' as const,
    optimization: stage.optimization
  }))

  const velocityRailData = {
    status: 'operational',
    deployments: velocityRail.length,
    avgTime: `${velocityRail.reduce((sum, s) => sum + s.duration, 0).toFixed(1)}h`,
    efficiency: 94.7,
    stages: velocityRailStages
  }

  // Map real chronobiology data to component structure
  const chronobiologyData = chronobiology.map(slot => ({
    period: slot.time,
    engagement: slot.effectiveness,
    optimal: slot.effectiveness >= 85 ? 1 : 0,
    audience: `${slot.audience.length} segments`
  }))

  // Map real overrides to component structure
  const tacticalOverrides = overrides.map(override => ({
    name: override.type,
    status: 'standby',
    description: override.action,
    trigger: override.condition,
    lastUsed: 'Never'
  }))

  // Calculate real kinetic metrics from data
  const totalDuration = velocityRail.reduce((sum, s) => sum + s.duration, 0)
  const maxEffectiveness = Math.max(...chronobiology.map(c => c.effectiveness))
  const kineticMetrics = [
    { title: 'Velocity Rail', value: `${totalDuration}h`, trend: 'down' as const, gradient: 'emerald' as const },
    { title: 'Active Stages', value: `${velocityRail.length}`, trend: 'up' as const, gradient: 'cyan' as const },
    { title: 'Chronobiology Score', value: `${maxEffectiveness}%`, trend: 'up' as const, gradient: 'indigo' as const },
    { title: 'Override Readiness', value: '98%', trend: 'up' as const, gradient: 'purple' as const }
  ]

  const regionalStatus = [
    {
      region: 'Abu Dhabi',
      status: 'operational',
      deployments: 23,
      audience: '2.4M',
      timezone: 'GMT+4',
      peakTime: '18:00-20:00'
    },
    {
      region: 'Dubai',
      status: 'operational',
      deployments: 18,
      audience: '3.6M',
      timezone: 'GMT+4',
      peakTime: '19:00-21:00'
    },
    {
      region: 'Sharjah',
      status: 'operational',
      deployments: 12,
      audience: '1.8M',
      timezone: 'GMT+4',
      peakTime: '18:00-20:00'
    },
    {
      region: 'Global English',
      status: 'operational',
      deployments: 34,
      audience: '8.9M',
      timezone: 'Various',
      peakTime: 'Variable'
    },
    {
      region: 'Global Arabic',
      status: 'operational',
      deployments: 28,
      audience: '12.3M',
      timezone: 'Various',
      peakTime: 'Variable'
    },
    {
      region: 'South Asia',
      status: 'limited',
      deployments: 8,
      audience: '4.5M',
      timezone: 'GMT+5-6',
      peakTime: '20:00-22:00'
    }
  ]

  const globalMetrics = [
    { metric: 'Total Reach', value: '33.5M', change: '+1.2M', positive: true },
    { metric: 'Active Deployments', value: '123', change: '+12', positive: true },
    { metric: 'Avg Engagement', value: '8.7%', change: '+0.4%', positive: true },
    { metric: 'Platform Coverage', value: '15', change: '0', positive: true },
    { metric: 'Content Types', value: '8', change: '+1', positive: true },
    { metric: 'Languages', value: '5', change: '0', positive: true }
  ]

  const recentActivity = [
    { action: 'Velocity deployment', item: 'Summer Health Campaign', time: '2 mins ago', region: 'Global' },
    { action: 'Override triggered', item: 'Crisis Mode', time: '2 hours ago', region: 'Abu Dhabi' },
    { action: 'Region activated', item: 'South Asia', time: '1 day ago', region: 'South Asia' },
    { action: 'Schedule updated', item: 'Chronobiology optimization', time: '2 days ago', region: 'Global' }
  ]

  // Chart data for visualizations
  const velocityTrendData = [
    { month: 'Jan', deployments: 28, avgTime: 5.8, efficiency: 89.2 },
    { month: 'Feb', deployments: 34, avgTime: 5.2, efficiency: 91.5 },
    { month: 'Mar', deployments: 39, avgTime: 4.8, efficiency: 92.8 },
    { month: 'Apr', deployments: 42, avgTime: 4.5, efficiency: 93.7 },
    { month: 'May', deployments: 45, avgTime: 4.3, efficiency: 94.2 },
    { month: 'Jun', deployments: 47, avgTime: 4.2, efficiency: 94.7 }
  ]

  const regionalPerformanceData = [
    { region: 'Abu Dhabi', deployments: 23, audience: 2.4, efficiency: 95 },
    { region: 'Dubai', deployments: 18, audience: 3.6, efficiency: 94 },
    { region: 'Sharjah', deployments: 12, audience: 1.8, efficiency: 96 },
    { region: 'Global English', deployments: 34, audience: 8.9, efficiency: 93 },
    { region: 'Global Arabic', deployments: 28, audience: 12.3, efficiency: 95 },
    { region: 'South Asia', deployments: 8, audience: 4.5, efficiency: 89 }
  ]

  const chronobiologyEngagementData = [
    { period: 'Early Morning', engagement: 78, audience: 2.3, optimal: 0 },
    { period: 'Mid-Morning', engagement: 82, audience: 3.4, optimal: 1 },
    { period: 'Lunch', engagement: 71, audience: 2.8, optimal: 0 },
    { period: 'Afternoon', engagement: 65, audience: 2.1, optimal: 0 },
    { period: 'Evening', engagement: 89, audience: 4.5, optimal: 1 },
    { period: 'Night', engagement: 72, audience: 1.9, optimal: 0 }
  ]

  const platformCoverageData = [
    { platform: 'LinkedIn', coverage: 95, deployments: 234 },
    { platform: 'Instagram', coverage: 92, deployments: 189 },
    { platform: 'X/Twitter', coverage: 88, deployments: 156 },
    { platform: 'Facebook', coverage: 85, deployments: 145 },
    { platform: 'TikTok', coverage: 78, deployments: 98 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Global Kinetic Shell</h1>
          <p className="text-muted-foreground">
            Worldwide operational control and tactical overrides
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button size="sm" variant="destructive">
            <Radio className="h-4 w-4 mr-2" />
            Emergency Override
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kineticMetrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      <Tabs defaultValue="velocity-rail" className="space-y-6">
        <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full">
          <TabsTrigger value="velocity-rail">Velocity Rail</TabsTrigger>
          <TabsTrigger value="chronobiology">Chronobiology</TabsTrigger>
          <TabsTrigger value="overrides">Overrides</TabsTrigger>
          <TabsTrigger value="regions">Regions</TabsTrigger>
        </TabsList>

        <TabsContent value="velocity-rail" className="space-y-6">
          <Alert className="border-emerald-500 bg-emerald-50 dark:bg-emerald-950">
            <Zap className="h-4 w-4" />
            <AlertTitle>Velocity Rail Operational</AlertTitle>
            <AlertDescription>
              {velocityRailData.deployments} stages in pipeline. Average deployment time: {velocityRailData.avgTime}. {velocityRailData.efficiency}% efficiency maintained.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Velocity Rail Pipeline</h3>
              <Gauge className="h-5 w-5 text-emerald-500" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold">Operational</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Active Deployments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{velocityRailData.deployments}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Avg Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{velocityRailData.avgTime}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-600">{velocityRailData.efficiency}%</div>
                </CardContent>
              </Card>
            </div>

            <h4 className="font-semibold mb-4">Deployment Pipeline Stages</h4>
            <div className="space-y-4">
              {velocityRailData.stages.map((stage, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    stage.status === 'complete' ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-600' :
                    stage.status === 'active' ? 'bg-cyan-100 dark:bg-cyan-900 text-cyan-600' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {stage.status === 'complete' ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : stage.status === 'active' ? (
                      <Activity className="h-5 w-5 animate-pulse" />
                    ) : (
                      <Timer className="h-5 w-5" />
                    )}
                  </div>
                  <div className="flex-1 p-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h5 className="font-semibold">{stage.stage}</h5>
                        <p className="text-sm text-muted-foreground">{stage.duration}</p>
                      </div>
                      <Badge variant={
                        stage.status === 'complete' ? 'default' :
                        stage.status === 'active' ? 'secondary' : 'outline'
                      }>
                        {stage.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Velocity Rail Performance Analytics</h3>
              <Gauge className="h-5 w-5 text-emerald-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AreaChart
                data={velocityTrendData}
                xAxisKey="month"
                areas={[
                  { dataKey: 'deployments', name: 'Deployments', color: CHART_COLORS.emerald },
                  { dataKey: 'efficiency', name: 'Efficiency %', color: CHART_COLORS.info }
                ]}
                height={300}
                showGrid={true}
              />
              <LineChart
                data={velocityTrendData}
                xAxisKey="month"
                lines={[{ dataKey: 'avgTime', name: 'Avg Time (m)', color: CHART_COLORS.purple }]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="chronobiology" className="space-y-6">
          <Alert className="border-purple-500 bg-purple-50 dark:bg-purple-950">
            <Clock className="h-4 w-4" />
            <AlertTitle>Chronobiology Optimization Active</AlertTitle>
            <AlertDescription>
              Content scheduling optimized for audience biological rhythms. 87% engagement alignment achieved.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Time Period Performance</h3>
              <Clock className="h-5 w-5 text-purple-500" />
            </div>
            <div className="space-y-4">
              {chronobiologyData.map((period, i) => (
                <div key={i} className={`p-4 border rounded-lg ${period.optimal === 1 ? 'bg-purple-50 dark:bg-purple-950 border-purple-500' : ''}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{period.period}</h4>
                        {period.optimal === 1 && (
                          <Badge variant="default">Optimal</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{period.audience} audience</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{period.engagement}%</p>
                      <p className="text-xs text-muted-foreground">Engagement</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Engagement Score</span>
                      <span className="font-medium">{period.engagement}%</span>
                    </div>
                    <Progress value={period.engagement} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Best Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-purple-600">Evening (17-20)</div>
                <p className="text-sm text-muted-foreground mt-1">89% engagement</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Largest Audience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-cyan-600">Evening (17-20)</div>
                <p className="text-sm text-muted-foreground mt-1">4.5M audience</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Avg Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">87%</div>
                <p className="text-sm text-muted-foreground mt-1">Optimization score</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Daily Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-600">17M</div>
                <p className="text-sm text-muted-foreground mt-1">Unique users</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Chronobiology Engagement Analytics</h3>
              <Clock className="h-5 w-5 text-purple-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart
                data={chronobiologyEngagementData}
                xAxisKey="period"
                bars={[
                  { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.purple },
                  { dataKey: 'audience', name: 'Audience (M)', color: CHART_COLORS.info }
                ]}
                height={300}
                showGrid={true}
              />
              <PieChart
                data={chronobiologyEngagementData.map(item => ({ name: item.period, value: item.engagement }))}
                donut={false}
                height={300}
                showLegend={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="overrides" className="space-y-6">
          <Alert className="border-rose-500 bg-rose-50 dark:bg-rose-950">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Tactical Override Systems</AlertTitle>
            <AlertDescription>
              4 override systems available. Emergency Override requires manual activation. Crisis Mode automated.
            </AlertDescription>
          </Alert>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Tactical Override Controls</h3>
              <Settings className="h-5 w-5 text-rose-500" />
            </div>
            <div className="space-y-4">
              {tacticalOverrides.map((override, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{override.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{override.description}</p>
                    </div>
                    <Badge variant={
                      override.status === 'standby' ? 'secondary' : 'outline'
                    }>
                      {override.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Trigger</p>
                      <p className="font-medium">{override.trigger}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Used</p>
                      <p className="font-medium">{override.lastUsed}</p>
                    </div>
                  </div>

                  {override.status !== 'unavailable' && (
                    <div className="flex gap-2 mt-3 pt-3 border-t">
                      {override.name === 'Emergency Override' ? (
                        <Button size="sm" variant="destructive" className="w-full">
                          <Radio className="h-3 w-3 mr-1" />
                          Activate Emergency
                        </Button>
                      ) : (
                        <>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Play className="h-3 w-3 mr-1" />
                            Test
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Settings className="h-3 w-3 mr-1" />
                            Configure
                          </Button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="regions" className="space-y-6">
          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Regional Operations</h3>
              <Globe className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {regionalStatus.map((region, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{region.region}</h4>
                        <div className={`h-2 w-2 rounded-full ${
                          region.status === 'operational' ? 'bg-emerald-500' :
                          region.status === 'limited' ? 'bg-amber-500' : 'bg-rose-500'
                        }`} />
                      </div>
                      <p className="text-xs text-muted-foreground">{region.timezone}</p>
                    </div>
                    <Badge variant={
                      region.status === 'operational' ? 'default' : 'secondary'
                    }>
                      {region.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                    <div>
                      <p className="text-muted-foreground">Deployments</p>
                      <p className="font-semibold">{region.deployments}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Audience</p>
                      <p className="font-semibold">{region.audience}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm pt-3 border-t">
                    <span className="text-muted-foreground">Peak Time</span>
                    <span className="font-medium">{region.peakTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Regional Performance Analytics</h3>
              <Globe className="h-5 w-5 text-cyan-500" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BarChart
                data={regionalPerformanceData}
                xAxisKey="region"
                bars={[
                  { dataKey: 'deployments', name: 'Deployments', color: CHART_COLORS.emerald },
                  { dataKey: 'efficiency', name: 'Efficiency %', color: CHART_COLORS.info }
                ]}
                height={300}
                showGrid={true}
              />
              <PieChart
                data={regionalPerformanceData.map(item => ({ name: item.region, value: item.audience }))}
                donut={false}
                height={300}
                showLegend={true}
              />
            </div>
          </GlassPanel>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Platform Coverage Analysis</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RadarChart
                data={platformCoverageData}
                metrics={[{ dataKey: 'coverage', name: 'Coverage %', color: CHART_COLORS.emerald }]}
                height={300}
                showGrid={true}
              />
              <BarChart
                data={platformCoverageData}
                xAxisKey="platform"
                bars={[{ dataKey: 'deployments', name: 'Deployments', color: CHART_COLORS.info }]}
                height={300}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Regions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">6</div>
                <p className="text-sm text-muted-foreground mt-1">Active operations</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Combined Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-600">33.5M</div>
                <p className="text-sm text-muted-foreground mt-1">Global audience</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emerald-600">5</div>
                <p className="text-sm text-muted-foreground mt-1">Supported</p>
              </CardContent>
            </Card>
          </div>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Global Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {globalMetrics.map((metric, i) => (
                <Card key={i}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">{metric.metric}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end justify-between">
                      <div className="text-xl font-bold">{metric.value}</div>
                      <div className={`flex items-center gap-1 text-sm ${
                        metric.positive ? 'text-emerald-600' : 'text-rose-600'
                      }`}>
                        <TrendingUp className={`h-3 w-3 ${!metric.positive && 'rotate-180'}`} />
                        <span>{metric.change}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel>
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <strong>{activity.action}</strong>: {activity.item}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.region}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
