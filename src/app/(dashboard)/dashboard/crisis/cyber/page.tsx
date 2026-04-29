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
  Bug,
  Lock,
  Eye,
  Server,
  Database,
  Wifi,
} from 'lucide-react'
import {
  useCyberThreatData,
} from '@/lib/data-loader'

export default function CyberThreatsPage() {
  const { data } = useCyberThreatData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Cybersecurity Threats data...</div>
      </div>
    )
  }

  const timeline = data.timeline || []
  const keyFindings = data.keyFindings || []
  const stakeholderImpacts = data.stakeholderImpacts || []
  const responseMetrics = data.responseMetrics

  // Attack volume trend
  const attackTrendData = [
    { month: 'Jul 2025', attacks: 3477, duration: 27 },
    { month: 'Aug 2025', attacks: 5200, duration: 45 },
    { month: 'Sep 2025', attacks: 7800, duration: 90 },
    { month: 'Oct 2025', attacks: 8500, duration: 120 },
    { month: 'Nov 2025', attacks: 9800, duration: 180 },
    { month: 'Dec 2025', attacks: 10303, duration: 360 },
    { month: 'Jan 2026', attacks: 15000, duration: 480 },
    { month: 'Feb 2026', attacks: 22000, duration: 600 },
  ]

  // Attack vector distribution
  const vectorData = [
    { name: 'DDoS', value: 55, color: CHART_COLORS.rose },
    { name: 'Ransomware', value: 20, color: CHART_COLORS.orange },
    { name: 'Phishing', value: 15, color: CHART_COLORS.gold },
    { name: 'APT', value: 10, color: CHART_COLORS.purple },
  ]

  // Sector impact
  const sectorData = [
    { name: 'Financial', value: 85, color: CHART_COLORS.rose },
    { name: 'Healthcare', value: 75, color: CHART_COLORS.orange },
    { name: 'Government', value: 70, color: CHART_COLORS.navy },
    { name: 'Critical Infra', value: 65, color: CHART_COLORS.gold },
  ]

  // Sentiment
  const sentimentData = [
    { name: 'Critical', value: 30, color: CHART_COLORS.rose },
    { name: 'Alarmed', value: 35, color: CHART_COLORS.orange },
    { name: 'Concerned', value: 25, color: CHART_COLORS.gold },
    { name: 'Strained', value: 10, color: CHART_COLORS.platinum },
  ]

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy" className="mb-2">CRISIS TYPE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Cybersecurity Threats</h1>
          <p className="mt-2 text-slate-400">
            State-sponsored attacks, ransomware, Bybit hack, Handala, AI-powered threats
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-purple-500/50 text-purple hover:bg-purple-500/10">
            <Lock className="h-4 w-4" />
            SOC Dashboard
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white gap-2">
            <Shield className="h-4 w-4" />
            Incident Response
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Daily Cyberattacks"
          value="500K-800K"
          icon={<Wifi className="h-6 w-6" />}
          gradient="purple"
          status="critical"
        />
        <MetricCard
          title="2026 Incidents"
          value="128"
          icon={<Bug className="h-6 w-6" />}
          gradient="rose"
          status="critical"
        />
        <MetricCard
          title="Bybit Hack Loss"
          value="$1.5B"
          icon={<Database className="h-6 w-6" />}
          gradient="orange"
          status="critical"
        />
        <MetricCard
          title="State-Sponsored"
          value="71.4%"
          icon={<Server className="h-6 w-6" />}
          gradient="purple"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Cyber Threat Overview" description="UAE cybersecurity landscape and attack trends">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Attack Volume Trend</CardTitle>
                  <CardDescription>DDoS and cyberattack incidents (H2 2025 - Q1 2026)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={attackTrendData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'attacks', name: 'Daily Attacks', color: CHART_COLORS.purple },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Attack Vectors</CardTitle>
                    <CardDescription>Distribution by attack type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={vectorData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Public/Org Sentiment</CardTitle>
                    <CardDescription>Sentiment during cyber incidents</CardDescription>
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
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Attack Timeline" description="Key cyber incidents affecting UAE">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Incident Timeline</CardTitle>
                  <CardDescription>Major cyber events and breaches</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="relative border-l-2 border-purple-500/50 pl-6 space-y-6">
                      {timeline.map((event, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-purple-500 border-2 border-slate-900" />
                          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-semibold text-slate-200">{event.event}</p>
                              <Badge variant="outline" className="text-xs">{event.date}</Badge>
                            </div>
                            <p className="text-sm text-slate-400">{event.description}</p>
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

        {/* Key Findings Tab */}
        <TabsContent value="keyfindings" className="space-y-6">
          <GlassPanel title="Key Findings" description="Critical cybersecurity intelligence">
            <div className="space-y-6">
              <Card className="glass-card border-purple-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-purple-400">
                    <AlertCircle className="h-5 w-5" />
                    Critical Findings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {keyFindings.map((finding, idx) => (
                      <div key={idx} className="flex items-start justify-between rounded-lg bg-purple-500/10 p-4 border border-purple-500/30">
                        <p className="font-medium text-slate-200">{typeof finding === 'string' ? finding : finding.finding || finding}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Response Metrics</CardTitle>
                  <CardDescription>Incident response performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Containment Time</p>
                      <p className="text-lg font-bold text-slate-200">{responseMetrics?.containmentTime || 'Hours-Days'}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Recovery Time</p>
                      <p className="text-lg font-bold text-slate-200">{responseMetrics?.recoveryTime || 'Weeks-Months'}</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Economic Loss</p>
                      <p className="text-lg font-bold text-purple-400">${((responseMetrics?.economicLoss || 0) / 1e9).toFixed(1)}B</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4">
                      <p className="text-xs text-slate-400">Stage</p>
                      <p className="text-lg font-bold text-purple">{data.phoenixStage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Intelligence Sources</CardTitle>
                  <CardDescription>Source reliability</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {data.sources?.map((source, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Lock className="h-4 w-4 text-navy" />
                            <span className="text-sm font-medium text-slate-200">{source.source}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">{source.tier}</Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sectors Tab */}
        <TabsContent value="sectors" className="space-y-6">
          <GlassPanel title="Sector Impact" description="Cyber threat severity by industry">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Impact by Sector</CardTitle>
                  <CardDescription>Threat level assessment by industry</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sectorData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Threat Level', color: CHART_COLORS.purple },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Stakeholder Impacts</CardTitle>
                  <CardDescription>Affected organizations and sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {stakeholderImpacts.map((impact, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <div className="flex items-center gap-3">
                            <Server className="h-4 w-4 text-purple" />
                            <div>
                              <p className="text-sm font-medium text-slate-200">{impact.stakeholder}</p>
                              <p className="text-xs text-slate-400">{impact.impact}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-purple-300 border-purple-500/50">{impact.sentiment}</Badge>
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
