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
  Globe,
  Shield,
  Zap,
  Plane,
  Users,
  TrendingUp,
  TrendingDown,
  Building,
  Flame,
  Crosshair,
  Flag,
  Target,
  Database,
  Map,
  Activity,
  Eye,
  GitBranch,
  ChevronRight,
} from 'lucide-react'
import {
  useGeopoliticalCrisisData,
} from '@/lib/data-loader'
import { AnimatePresence, motion } from 'framer-motion'

// Cycle A: Core Data and Constants
const REGIONAL_CONFLICTS = ['Yemen', 'Libya', 'Sudan', 'Somalia', 'Eritrea', 'Syria', 'Gaza', 'Lebanon'] as const
const GREAT_POWER_TOPICS = ['US-China', 'BRICS', 'China Base', 'Russia Sanctions', 'US Troops', 'Iran Nuclear', 'G42/AI'] as const

export default function GeopoliticalCrisisPage() {
  const { data } = useGeopoliticalCrisisData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Geopolitical Crisis data...</div>
      </div>
    )
  }

  const timeline = data.timeline || []
  const keyFindings = data.keyFindings || []
  const stakeholderImpacts = data.stakeholderImpacts || []
  const responseMetrics = data.responseMetrics

  // Cycle B: Sentiment Distribution
  const sentimentData = [
    { name: 'Fear/Anxious', value: 35, color: CHART_COLORS.rose },
    { name: 'Negative', value: 30, color: CHART_COLORS.orange },
    { name: 'Resolute', value: 25, color: CHART_COLORS.navy },
    { name: 'Neutral', value: 10, color: CHART_COLORS.platinum },
  ]

  // Iran missiles fired breakdown
  const missileData = [
    { name: 'Missiles', value: 420, color: CHART_COLORS.rose },
    { name: 'Drones', value: 1150, color: CHART_COLORS.orange },
    { name: 'Intercepted', value: 1480, color: CHART_COLORS.emerald },
  ]

  // Economic impact data
  const economicImpactData = [
    { name: 'Stock Market Losses', value: 120, color: CHART_COLORS.rose },
    { name: 'Business Losses', value: 200, color: CHART_COLORS.orange },
    { name: 'Oil Hub Damage', value: 45, color: CHART_COLORS.gold },
    { name: 'Tourism Impact', value: 80, color: CHART_COLORS.platinum },
  ]

  // Timeline events chart data
  const timelineChartData = [
    { date: 'Feb 28', events: 1, severity: 95 },
    { date: 'Mar 1', events: 3, severity: 98 },
    { date: 'Mar 2', events: 2, severity: 90 },
    { date: 'Mar 14', events: 1, severity: 75 },
    { date: 'Mar 16', events: 2, severity: 88 },
    { date: 'Apr 15', events: 1, severity: 55 },
    { date: 'Apr 20', events: 2, severity: 60 },
  ]

  // Cycle C: Regional Conflict Data
  const regionalConflictData = [
    { country: 'Yemen', status: 'Withdrawn', sentiment: 'Highly Negative', intensity: -9 },
    { country: 'Libya', status: 'Ongoing', sentiment: 'Highly Negative', intensity: -8 },
    { country: 'Sudan', status: 'Active', sentiment: 'Highly Negative', intensity: -8 },
    { country: 'Somalia', status: 'Severed', sentiment: 'Negative', intensity: -6 },
    { country: 'Eritrea', status: 'Withdrawn', sentiment: 'Neutral', intensity: 0 },
    { country: 'Syria', status: 'Active', sentiment: 'Mixed', intensity: 2 },
    { country: 'Gaza', status: 'Active', sentiment: 'Mixed', intensity: 3 },
    { country: 'Lebanon', status: 'Limited', sentiment: 'Neutral', intensity: 0 },
  ]

  // Great Power Competition Data
  const greatPowerData = [
    { topic: 'US-China', position: 'Multi-alignment', sentiment: 'Strategic' },
    { topic: 'BRICS', position: 'Member', sentiment: 'Positive' },
    { topic: 'Russia', position: 'Sanctions Pathway', sentiment: 'Negative' },
    { topic: 'G42/AI', position: 'Tech Hub', sentiment: 'Mixed' },
  ]

  // Aid Investment Data
  const aidInvestmentData = [
    { recipient: 'Yemen', amount: 8, type: 'Aid' },
    { recipient: 'Yemen Dev', amount: 7, type: 'Development' },
    { recipient: 'Syria', amount: 28, type: 'Investment' },
    { recipient: 'Gaza', amount: 1, type: 'Pledged' },
  ]

  // Gold Trade Data
  const goldTradeData = [
    { year: '2022', russia: 96.4 },
    { year: '2023', sudan: 17, russia: 41 },
    { year: '2024', sudan: 29, russia: 66 },
  ]

  // Cycle D: Helper Functions
  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'withdrawn': return 'text-emerald-400'
      case 'ongoing': return 'text-rose-400'
      case 'active': return 'text-orange-400'
      case 'severed': return 'text-rose-400'
      default: return 'text-platinum-400'
    }
  }

  const getIntensityBar = (intensity: number) => {
    const absIntensity = Math.abs(intensity)
    const color = intensity < 0 ? 'bg-rose-500' : 'bg-emerald-500'
    return (
      <div className="flex items-center gap-2">
        <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
          <div className={color} style={{ width: `${(absIntensity / 10) * 100}%` }} />
        </div>
        <span className="text-xs text-slate-400">{intensity > 0 ? '+' : ''}{intensity}</span>
      </div>
    )
  }

  return (
    <div className="space-y-8 p-8">
      {/* Cycle E: Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="denim" className="mb-2">CRISIS TYPE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Geopolitical Crises</h1>
          <p className="mt-2 text-slate-400">
            Iran-UAE tensions, Yemen conflict, Gulf security, regional alignment
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose-500/50 text-rose hover:bg-rose-500/10">
            <Globe className="h-4 w-4" />
            Regional Intel
          </Button>
          <Button className="bg-gradient-to-r from-rose-600 to-orange-600 hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Escalate
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <MetricCard
            title="Missiles & Drones Fired"
            value="1,700+"
            icon={<Flame className="h-6 w-6" />}
            gradient="rose"
            status="critical"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <MetricCard
            title="Casualties"
            value="6"
            icon={<Users className="h-6 w-6" />}
            gradient="rose"
            status="critical"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <MetricCard
            title="Economic Loss"
            value="$200B"
            icon={<TrendingDown className="h-6 w-6" />}
            gradient="orange"
            status="critical"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <MetricCard
            title="Alert Level"
            value="RED"
            icon={<AlertCircle className="h-6 w-6" />}
            gradient="rose"
          />
        </motion.div>
      </div>

      {/* Cycle F: Enhanced Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="regional">Regional</TabsTrigger>
          <TabsTrigger value="greatpower">Great Power</TabsTrigger>
          <TabsTrigger value="impact">Impact</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Geopolitical Crisis Overview" description="Iran-UAE conflict and regional tensions">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Attack Volume Timeline</CardTitle>
                  <CardDescription>Daily crisis events during Iran-UAE conflict</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={timelineChartData}
                    xAxisKey="date"
                    areas={[
                      { dataKey: 'events', name: 'Events', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Public sentiment during crisis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Attack Breakdown</CardTitle>
                    <CardDescription>Iranian weapons fired at UAE (defense ministry)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={missileData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Count', color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Economic Impact</CardTitle>
                  <CardDescription>Financial damage from conflict</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={economicImpactData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'USD Bn', color: CHART_COLORS.orange },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Crisis Timeline" description="Key events in the UAE-Iran geopolitical crisis">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Event Timeline</CardTitle>
                  <CardDescription>Chronological crisis events</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="relative border-l-2 border-rose-500/50 pl-6 space-y-6">
                      <AnimatePresence>
                        {timeline.map((event, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ delay: idx * 0.05 }}
                            className="relative"
                          >
                            <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-rose-500 border-2 border-slate-900" />
                            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors">
                              <div className="flex items-center justify-between mb-1">
                                <p className="font-semibold text-slate-200">{event.event}</p>
                                <Badge variant="outline" className="text-xs">{event.date}</Badge>
                              </div>
                              <p className="text-sm text-slate-400">{event.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Regional Conflicts Tab */}
        <TabsContent value="regional" className="space-y-6">
          <GlassPanel title="Regional Conflict Analysis" description="UAE involvement across Middle East conflicts">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Map className="h-5 w-5 text-rose-400" />
                    Regional Conflict Status
                  </CardTitle>
                  <CardDescription>UAE involvement by country/region</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {regionalConflictData.map((conflict, idx) => (
                        <motion.div
                          key={conflict.country}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.01, x: 4 }}
                          className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4 border border-slate-700/50 hover:border-rose-500/30 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Flag className={`h-4 w-4 ${getStatusColor(conflict.status)}`} />
                            <span className="font-medium text-slate-200">{conflict.country}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline" className={`text-xs ${getStatusColor(conflict.status)}`}>
                              {conflict.status}
                            </Badge>
                            {getIntensityBar(conflict.intensity)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="h-5 w-5 text-orange-400" />
                    Aid & Investment Distribution
                  </CardTitle>
                  <CardDescription>UAE foreign aid by recipient (USD billions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={aidInvestmentData}
                    xAxisKey="recipient"
                    bars={[
                      { dataKey: 'amount', name: 'USD Bn', color: CHART_COLORS.orange },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-gold-400" />
                    Key Findings - Regional Conflicts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {keyFindings.slice(0, 8).map((finding, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="flex items-start justify-between rounded-lg bg-rose-500/10 p-3 border border-rose-500/30"
                      >
                        <p className="text-sm text-slate-200">{typeof finding === 'string' ? finding : finding}</p>
                        <ChevronRight className="h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Great Power Tab */}
        <TabsContent value="greatpower" className="space-y-6">
          <GlassPanel title="Great Power Competition" description="UAE positioning in US-China-Russia dynamics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GitBranch className="h-5 w-5 text-navy-400" />
                    Strategic Positioning
                  </CardTitle>
                  <CardDescription>UAE multi-alignment strategy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {greatPowerData.map((item, idx) => (
                      <motion.div
                        key={item.topic}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:border-navy-500/50 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-slate-200">{item.topic}</span>
                          <Badge variant="outline" className="text-xs text-navy-300 border-navy-500/50">
                            {item.position}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-400">{item.sentiment}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-gold-400" />
                    Gold Trade Volume
                  </CardTitle>
                  <CardDescription>UAE gold imports by source (tonnes)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={goldTradeData}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'sudan', name: 'Sudan', color: CHART_COLORS.gold },
                      { dataKey: 'russia', name: 'Russia', color: CHART_COLORS.platinum },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-rose-400" />
                    Intelligence Sources
                  </CardTitle>
                  <CardDescription>Credibility-rated information sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {data.sources?.map((source, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <Crosshair className="h-4 w-4 text-navy" />
                            <span className="text-sm font-medium text-slate-200">{source.source}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">{source.tier}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-400" />
                    Additional Key Findings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {keyFindings.slice(8).map((finding, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="flex items-start justify-between rounded-lg bg-orange-500/10 p-3 border border-orange-500/30"
                      >
                        <p className="text-sm text-slate-200">{typeof finding === 'string' ? finding : finding}</p>
                        <ChevronRight className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Impact Tab */}
        <TabsContent value="impact" className="space-y-6">
          <GlassPanel title="Stakeholder Impact" description="Affected parties and their status">
            <div className="space-y-6">
              {stakeholderImpacts.map((impact, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="glass-card">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{impact.stakeholder}</CardTitle>
                        <Badge variant="outline" className="text-rose-300 border-rose-500/50">{impact.sentiment}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{impact.impact}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Response Metrics</CardTitle>
                  <CardDescription>Crisis response performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="rounded-lg bg-slate-800/50 p-4"
                    >
                      <p className="text-xs text-slate-400">Containment Time</p>
                      <p className="text-lg font-bold text-slate-200">{responseMetrics?.containmentTime || 'Ongoing'}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="rounded-lg bg-slate-800/50 p-4"
                    >
                      <p className="text-xs text-slate-400">Recovery Time</p>
                      <p className="text-lg font-bold text-slate-200">{responseMetrics?.recoveryTime || 'Unknown'}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="rounded-lg bg-slate-800/50 p-4"
                    >
                      <p className="text-xs text-slate-400">Casualties</p>
                      <p className="text-lg font-bold text-rose-400">{responseMetrics?.casualties || 0}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="rounded-lg bg-slate-800/50 p-4"
                    >
                      <p className="text-xs text-slate-400">Economic Loss</p>
                      <p className="text-lg font-bold text-rose-400">${((responseMetrics?.economicLoss || 0) / 1e9).toFixed(0)}B</p>
                    </motion.div>
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
