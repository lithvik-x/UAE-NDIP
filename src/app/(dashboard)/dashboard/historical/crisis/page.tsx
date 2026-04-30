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
  TrendingUp,
  Users,
  Zap,
  Globe,
  Clock,
  Map,
  Target,
  ChevronRight,
  Siren,
  Wind,
  DollarSign,
  Heart,
} from 'lucide-react'
import {
  useArabSpringData,
  useRapidDevelopmentData,
  usePostGulfWarData,
  useEventHistoricalData,
} from '@/lib/data-loader'

export default function HistoricalCrisisPage() {
  const { data: arabSpring } = useArabSpringData()
  const { data: rapidDev } = useRapidDevelopmentData()
  const { data: postGulfWar } = usePostGulfWarData()
  const { data: eventHistory } = useEventHistoricalData()

  const data = eventHistory || {
    description: 'Historical crises that shaped the UAE from Buraimi dispute to Dubai debt crisis',
    keyEvents: [],
    policyOutcomes: [],
  }

  // Crisis timeline data
  const crisisTimelineData = [
    { year: '1949-1974', crisis: 'Buraimi Dispute', severity: 75, outcome: 'Resolved' },
    { year: '1971', crisis: 'Iranian Island Seizure', severity: 90, outcome: 'Ongoing' },
    { year: '1990-1991', crisis: 'Gulf War Impact', severity: 85, outcome: 'Resolved' },
    { year: '2008-2009', crisis: 'Global Financial Crisis', severity: 80, outcome: 'Resolved' },
    { year: '2009-2010', crisis: 'Dubai Debt Crisis', severity: 95, outcome: 'Resolved' },
    { year: '2011', crisis: 'Arab Spring Spillover', severity: 70, outcome: 'Prevented' },
    { year: '2020-2021', crisis: 'COVID-19 Pandemic', severity: 88, outcome: 'Recovered' },
    { year: '2024', crisis: 'UAE Flood Crisis', severity: 65, outcome: 'Recovered' },
  ]

  // Response effectiveness data
  const responseData = [
    { method: 'Economic Diversification', effectiveness: 85, color: CHART_COLORS.gold },
    { method: 'Inter-Emirate Solidarity', effectiveness: 92, color: CHART_COLORS.navy },
    { method: 'GCC Cooperation', effectiveness: 78, color: CHART_COLORS.platinum },
    { method: 'Regional Diplomacy', effectiveness: 72, color: CHART_COLORS.emerald },
    { method: 'Infrastructure Investment', effectiveness: 88, color: CHART_COLORS.info },
  ]

  // Crisis type distribution
  const crisisTypeData = [
    { name: 'Economic', value: 35, color: CHART_COLORS.gold },
    { name: 'Geopolitical', value: 28, color: CHART_COLORS.navy },
    { name: 'Security', value: 20, color: CHART_COLORS.rose },
    { name: 'Environmental', value: 12, color: CHART_COLORS.emerald },
    { name: 'Social', value: 5, color: CHART_COLORS.platinum },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">H-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Historical Crises</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'Major crises, their management, and lessons learned'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Shield className="h-4 w-4" />
            Crisis Reports
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze Response
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Crises Managed"
          value="12"
          previousValue={10}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Success Rate"
          value="92%"
          previousValue={88}
          icon={<Target className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Avg Response Time"
          value="48h"
          previousValue={72}
          icon={<Clock className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Recovery Investment"
          value="$45B"
          previousValue={38}
          icon={<DollarSign className="h-6 w-6" />}
          gradient="indigo"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Crisis Timeline</TabsTrigger>
          <TabsTrigger value="response">Response Analysis</TabsTrigger>
          <TabsTrigger value="lessons">Lessons Learned</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Crisis Management Overview" description="Historical crisis management and response patterns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Severity Over Time</CardTitle>
                  <CardDescription>Major historical crises by severity index</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={crisisTimelineData}
                    xAxisKey="crisis"
                    bars={[
                      { dataKey: 'severity', name: 'Severity', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Crisis Categories</CardTitle>
                    <CardDescription>Distribution by crisis type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={crisisTypeData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Response Effectiveness</CardTitle>
                    <CardDescription>Crisis management method effectiveness</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {responseData.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.method}</span>
                            <span className="text-lg font-bold text-gold">{item.effectiveness}%</span>
                          </div>
                          <Progress
                            value={item.effectiveness}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Historical Crisis Timeline" description="Major crises from 1949 to present">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Timeline</CardTitle>
                  <CardDescription>Severity and outcome of each major crisis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-4">
                      {crisisTimelineData.map((crisis, idx) => (
                        <div key={idx} className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold">
                            <Siren className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-slate-200">{crisis.crisis}</h4>
                              <Badge
                                variant={crisis.outcome === 'Resolved' || crisis.outcome === 'Recovered' ? 'success' : crisis.outcome === 'Prevented' ? 'warning' : 'destructive'}
                                className="text-xs"
                              >
                                {crisis.outcome}
                              </Badge>
                            </div>
                            <p className="mt-1 text-sm text-slate-400">{crisis.year}</p>
                            <div className="mt-2 flex items-center gap-2">
                              <div className="flex-1">
                                <Progress value={crisis.severity} className="h-2" />
                              </div>
                              <span className="text-xs text-slate-500">Severity: {crisis.severity}</span>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-slate-500" />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Response Analysis Tab */}
        <TabsContent value="response" className="space-y-6">
          <GlassPanel title="Crisis Response Analysis" description="Effectiveness of different response strategies">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Response Method Comparison</CardTitle>
                  <CardDescription>Effectiveness ratings by crisis type</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={responseData}
                    xAxisKey="method"
                    bars={[
                      { dataKey: 'effectiveness', name: 'Effectiveness %', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                    showGrid={true}
                    layout="vertical"
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Inter-Emirate Coordination</CardTitle>
                    <CardDescription>Response to Dubai Debt Crisis 2009</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Abu Dhabi Initial Bailout', value: '$10B', icon: DollarSign },
                        { label: 'Total Support Package', value: '$20B', icon: DollarSign },
                        { label: 'Response Time', value: '72 hours', icon: Clock },
                        { label: 'Market Stabilization', value: '2 weeks', icon: TrendingUp },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5 text-navy" />
                            <span className="text-sm font-medium text-slate-200">{item.label}</span>
                          </div>
                          <span className="text-lg font-bold text-gold">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Regional Cooperation</CardTitle>
                    <CardDescription>Bahrain GCC Intervention 2011</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'UAE Forces Deployed', value: '500 police', icon: Users },
                        { label: 'Saudi Forces', value: '1,000 troops', icon: Users },
                        { label: 'Response Time', value: '48 hours', icon: Clock },
                        { label: 'Objective Achieved', value: 'Yes', icon: Shield },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5 text-emerald" />
                            <span className="text-sm font-medium text-slate-200">{item.label}</span>
                          </div>
                          <span className="text-lg font-bold text-emerald">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Lessons Learned Tab */}
        <TabsContent value="lessons" className="space-y-6">
          <GlassPanel title="Lessons Learned" description="Key insights from historical crisis management">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Management Key Learnings</CardTitle>
                  <CardDescription>Strategic insights from UAE crisis history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: 'Economic Diversification',
                        finding: 'Diversified economy reduces vulnerability to sector-specific shocks',
                        source: 'Dubai Debt Crisis Analysis',
                        metric: 'Risk Reduction: 60%',
                        tier: 1,
                      },
                      {
                        title: 'Inter-Emirate Solidarity',
                        finding: 'Federal support mechanisms strengthen overall national resilience',
                        source: 'Abu Dhabi Bailout Assessment',
                        metric: 'Recovery Time: -40%',
                        tier: 1,
                      },
                      {
                        title: 'GCC Cooperation',
                        finding: 'Regional alliance provides critical support during crises',
                        source: 'Bahrain Intervention Review',
                        metric: 'Response Capacity: +85%',
                        tier: 2,
                      },
                      {
                        title: 'Early Warning Systems',
                        finding: 'Investment in monitoring enables proactive crisis prevention',
                        source: 'Flood Crisis After-Action',
                        metric: 'Damage Reduction: 45%',
                        tier: 2,
                      },
                    ].map((lesson, idx) => (
                      <div key={idx} className="rounded-lg border border-gold/30 bg-slate-800/50 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gold">{lesson.title}</h4>
                          <Badge variant="outline" className="text-xs border-gold/50 text-gold">Tier {lesson.tier}</Badge>
                        </div>
                        <p className="text-sm text-slate-300">{lesson.finding}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-slate-500">{lesson.source}</span>
                          <Badge variant="gold" className="text-xs">{lesson.metric}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Prevention Index</CardTitle>
                  <CardDescription>UAE crisis prevention capabilities over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={[
                      { year: '1971', index: 40 },
                      { year: '1981', index: 52 },
                      { year: '1991', index: 58 },
                      { year: '2001', index: 65 },
                      { year: '2011', index: 74 },
                      { year: '2021', index: 85 },
                      { year: '2026', index: 92 },
                    ]}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'index', name: 'Prevention Index', color: CHART_COLORS.emerald },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
