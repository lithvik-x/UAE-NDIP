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
  Activity,
  AlertCircle,
  Eye,
  Globe,
  Radar,
  Shield,
  Signal,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import {
  useMonitoringOverviewData,
} from '@/lib/data-loader'

export default function MonitoringOverviewPage() {
  const { data } = useMonitoringOverviewData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Monitoring data...</div>
      </div>
    )
  }

  // UAE Real-time monitoring metrics
  const dailyCyberAttacks = 647283
  const threatsBlocked = 612847
  const activeThreats = 1247
  const criticalAlerts = 23

  // Threat distribution data
  const threatDistributionData = [
    { name: 'Ransomware', value: 28, color: CHART_COLORS.rose },
    { name: 'Phishing', value: 35, color: CHART_COLORS.gold },
    { name: 'DDoS', value: 18, color: CHART_COLORS.navy },
    { name: 'APT', value: 12, color: CHART_COLORS.rose },
    { name: 'Malware', value: 7, color: CHART_COLORS.platinum },
  ]

  // Attack origin data
  const attackOriginData = [
    { name: 'Eastern Europe', value: 42, color: CHART_COLORS.rose },
    { name: 'North America', value: 23, color: CHART_COLORS.navy },
    { name: 'Asia Pacific', value: 18, color: CHART_COLORS.gold },
    { name: 'Middle East', value: 10, color: CHART_COLORS.emerald },
    { name: 'Other', value: 7, color: CHART_COLORS.platinum },
  ]

  // Sector targeting data
  const sectorTargetingData = [
    { name: 'Finance', value: 32, color: CHART_COLORS.gold },
    { name: 'Government', value: 28, color: CHART_COLORS.navy },
    { name: 'Energy', value: 18, color: CHART_COLORS.rose },
    { name: 'Telecom', value: 14, color: CHART_COLORS.emerald },
    { name: 'Healthcare', value: 8, color: CHART_COLORS.platinum },
  ]

  // Hourly attack pattern
  const hourlyAttackData = [
    { hour: '00:00', attacks: 18234, severity: 23 },
    { hour: '04:00', attacks: 12847, severity: 18 },
    { hour: '08:00', attacks: 45231, severity: 45 },
    { hour: '12:00', attacks: 67892, severity: 67 },
    { hour: '16:00', attacks: 72341, severity: 72 },
    { hour: '20:00', attacks: 52341, severity: 52 },
  ]

  // Recent threats list
  const recentThreats = [
    { id: 1, type: 'APT-41', target: 'Financial Sector', severity: 'CRITICAL', time: '2 min ago', status: 'Active' },
    { id: 2, type: 'Ransomware', target: 'Government Agency', severity: 'HIGH', time: '15 min ago', status: 'Contained' },
    { id: 3, type: 'Phishing Campaign', target: 'Telecom', severity: 'MEDIUM', time: '32 min ago', status: 'Blocked' },
    { id: 4, type: 'DDoS', target: 'Energy Infrastructure', severity: 'HIGH', time: '1 hr ago', status: 'Mitigated' },
    { id: 5, type: 'Zero-Day', target: 'Financial Sector', severity: 'CRITICAL', time: '3 hr ago', status: 'Patched' },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">CRITICAL</Badge>
      case 'HIGH': return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">HIGH</Badge>
      case 'MEDIUM': return <Badge variant="outline" className="text-xs text-yellow-400 border-yellow-400/50">MEDIUM</Badge>
      default: return <Badge variant="outline" className="text-xs">LOW</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active': return <Badge variant="destructive" className="text-xs">Active</Badge>
      case 'Contained': return <Badge variant="warning" className="text-xs">Contained</Badge>
      case 'Blocked': return <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Blocked</Badge>
      case 'Mitigated': return <Badge variant="outline" className="text-xs text-blue-400 border-blue-400/50">Mitigated</Badge>
      case 'Patched': return <Badge variant="outline" className="text-xs text-platinum-400 border-platinum-400/50">Patched</Badge>
      default: return <Badge variant="outline" className="text-xs">{status}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">M-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Monitoring Overview</h1>
          <p className="mt-2 text-slate-400">
            Real-time cyber threat monitoring and intelligence across UAE digital infrastructure
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Radar className="h-4 w-4" />
            Live Feed
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Alert Center
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Daily Cyber Attacks"
          value={dailyCyberAttacks}
          previousValue={dailyCyberAttacks - 23451}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
          status="info"
          formatter={(v) => v.toLocaleString()}
        />
        <MetricCard
          title="Threats Blocked"
          value={threatsBlocked}
          previousValue={threatsBlocked - 18234}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
          status="success"
          formatter={(v) => v.toLocaleString()}
        />
        <MetricCard
          title="Active Threats"
          value={activeThreats}
          previousValue={activeThreats + 142}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="warning"
        />
        <MetricCard
          title="Critical Alerts"
          value={criticalAlerts}
          icon={<Signal className="h-6 w-6" />}
          gradient="navy"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="threats">Threat Analysis</TabsTrigger>
          <TabsTrigger value="sectors">Sector Tracking</TabsTrigger>
          <TabsTrigger value="feed">Live Feed</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Real-Time Monitoring Overview" description="24/7 surveillance of UAE digital assets">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Threat Type Distribution</CardTitle>
                    <CardDescription>Daily attack vectors by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={threatDistributionData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Attack Origins</CardTitle>
                    <CardDescription>Geographic distribution of threat sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={attackOriginData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Hourly Attack Pattern</CardTitle>
                  <CardDescription>Attack volume and severity by hour (UTC)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={hourlyAttackData}
                    xAxisKey="hour"
                    bars={[
                      { dataKey: 'attacks', name: 'Attacks', color: CHART_COLORS.gold },
                      { dataKey: 'severity', name: 'Severity Score', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Defense Coverage</CardTitle>
                  <CardDescription>Protection status across UAE digital infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Government Networks</span>
                        <span className="font-medium text-emerald-400">98.7% Protected</span>
                      </div>
                      <Progress value={98.7} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Financial Sector</span>
                        <span className="font-medium text-emerald-400">99.2% Protected</span>
                      </div>
                      <Progress value={99.2} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Critical Infrastructure</span>
                        <span className="font-medium text-emerald-400">97.8% Protected</span>
                      </div>
                      <Progress value={97.8} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Telecommunications</span>
                        <span className="font-medium text-emerald-400">98.4% Protected</span>
                      </div>
                      <Progress value={98.4} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Threat Analysis Tab */}
        <TabsContent value="threats" className="space-y-6">
          <GlassPanel title="Threat Analysis" description="In-depth analysis of active threat actors and campaigns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sector Targeting Analysis</CardTitle>
                  <CardDescription>Most targeted sectors in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sectorTargetingData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Attack Percentage', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Threat Actors</CardTitle>
                    <CardDescription>Most active threat groups targeting UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {[
                          { name: 'APT-41', country: 'China', incidents: 47, severity: 'Critical' },
                          { name: 'Lazarus Group', country: 'North Korea', incidents: 34, severity: 'High' },
                          { name: 'Fancy Bear', country: 'Russia', incidents: 28, severity: 'High' },
                          { name: 'Sandworm', country: 'Russia', incidents: 21, severity: 'Critical' },
                          { name: 'OilRig', country: 'Iran', incidents: 18, severity: 'Medium' },
                        ].map((actor, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Target className="h-4 w-4 text-rose" />
                              <div>
                                <p className="text-sm font-medium text-slate-200">{actor.name}</p>
                                <p className="text-xs text-slate-400">{actor.country}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-bold text-rose">{actor.incidents}</span>
                              <Badge variant="destructive" className="text-xs">{actor.severity}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Attack Vector Effectiveness</CardTitle>
                    <CardDescription>Success rate by attack method</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {threatDistributionData.map((threat, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{threat.name}</span>
                            <span className="text-sm font-bold text-emerald-400">
                              {Math.floor(Math.random() * 15) + 85}%
                            </span>
                          </div>
                          <Progress
                            value={Math.floor(Math.random() * 15) + 85}
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

        {/* Sector Tracking Tab */}
        <TabsContent value="sectors" className="space-y-6">
          <GlassPanel title="Sector Tracking" description="Per-sector threat monitoring and protection status">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Protected Sectors Overview</CardTitle>
                  <CardDescription>Security status across all UAE critical sectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {[
                        { sector: 'Financial Services', protection: 99.2, attacks: 12847, status: 'Protected' },
                        { sector: 'Government Entities', protection: 98.7, attacks: 8342, status: 'Protected' },
                        { sector: 'Energy & Utilities', protection: 97.8, attacks: 6234, status: 'Protected' },
                        { sector: 'Telecommunications', protection: 98.4, attacks: 7234, status: 'Protected' },
                        { sector: 'Healthcare', protection: 96.2, attacks: 4123, status: 'Guarded' },
                        { sector: 'Transportation', protection: 97.1, attacks: 3421, status: 'Protected' },
                        { sector: 'Education', protection: 94.8, attacks: 2834, status: 'Guarded' },
                        { sector: 'Manufacturing', protection: 95.6, attacks: 2134, status: 'Guarded' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                              <Shield className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{item.sector}</p>
                              <p className="text-sm text-slate-400">{item.attacks.toLocaleString()} attacks today</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-emerald-400">{item.protection}%</div>
                              <p className="text-xs text-slate-400">Protection</p>
                            </div>
                            <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">
                              {item.status}
                            </Badge>
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

        {/* Live Feed Tab */}
        <TabsContent value="feed" className="space-y-6">
          <GlassPanel title="Live Threat Feed" description="Real-time threat intelligence stream">
            <div className="space-y-6">
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Active Threats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {recentThreats.map((threat) => (
                        <div key={threat.id} className="flex items-center justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                              <Target className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{threat.type}</p>
                              <p className="text-sm text-slate-400">Target: {threat.target}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              {getSeverityBadge(threat.severity)}
                              <p className="text-xs text-slate-400 mt-1">{threat.time}</p>
                            </div>
                            <div className="text-center">
                              {getStatusBadge(threat.status)}
                              <p className="text-xs text-slate-400 mt-1">Status</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Monitoring Statistics</CardTitle>
                  <CardDescription>Real-time monitoring system performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">99.97%</div>
                      <p className="text-sm text-slate-400">Uptime</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-gold">&lt;50ms</div>
                      <p className="text-sm text-slate-400">Response Time</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-navy">2.3M</div>
                      <p className="text-sm text-slate-400">Events/sec</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-platinum">156</div>
                      <p className="text-sm text-slate-400">Sensors Active</p>
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
