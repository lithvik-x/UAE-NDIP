'use client'

import { useFederationEarlyData } from '@/lib/data-loader'
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
  Lightbulb,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
  Crown,
  Flag,
  Calendar,
  Building,
  TrendingUp as GrowthIcon,
  Plane,
  Ship,
  Train,
  Bomb,
  Flame,
  Heart,
  Users as UsersIcon,
  DollarSign,
  Activity,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { postGulfWarData } from '@/lib/data-loader/historical-data'

// Extended types for Post-Gulf War data
interface MilitaryKPI {
  metric: string
  preWar: string | number
  postWar: string | number
  change: string
  source: string
}

interface HumanitarianKPI {
  metric: string
  value: string | number
  source: string
}

interface EconomicKPI {
  metric: string
  value: string | number
  source: string
}

interface InfrastructureKPI {
  component: string
  preWar: string
  postWar: string
  destructionPercent: string
  source: string
}

interface EnvironmentalKPI {
  metric: string
  value: string | number
  context: string
}

interface SentimentEntry {
  topic: string
  source: string
  sentiment: string
  score: number
  keyPhrase: string
}

interface UAERelevanceEntry {
  topic: string
  relevance: 'critical' | 'high' | 'medium' | 'low'
  rationale: string
}

interface NoFlyZoneKPI {
  kpi: string
  value: string | number
  status: string
}

export default function ExpansionPage() {
  // Use postGulfWarData directly
  const data = postGulfWarData

  // Extract extended data from postGulfWarData
  const militaryKpis = (data as any).militaryKpis || []
  const humanitarianKpis = (data as any).humanitarianKpis || []
  const economicKpis = (data as any).economicKpis || []
  const infrastructureKpis = (data as any).infrastructureKpis || []
  const environmentalKpis = (data as any).environmentalKpis || []
  const uaeRelevanceMatrix = (data as any).uaeRelevanceMatrix || []
  const noFlyZoneKpis = (data as any).noFlyZoneKpis || []
  const sentimentAnalysis = (data as any).sentimentAnalysis || []
  const keyLessons = (data as any).keyLessons || []
  const entityRegistry = (data as any).entityRegistry || []
  const unResolutions = (data as any).unResolutions || []

  // Filter events for Post-Gulf War period (1991-2003)
  const postGulfWarEvents = data.keyEvents?.filter(event => {
    const year = parseInt(event.date.replace(/\D/g, ''))
    return year >= 1991 && year <= 2003
  }) || []

  // Key metrics
  const keyMetrics = [
    { label: 'Coalition Forces', value: '34', unit: 'nations', icon: <Shield className="h-6 w-6" />, gradient: 'denim' },
    { label: 'Sanctions Duration', value: '12', unit: 'years', icon: <AlertCircle className="h-6 w-6" />, gradient: 'rose' },
    { label: 'Oil Wells Burned', value: '~700', unit: 'wells', icon: <Flame className="h-6 w-6" />, gradient: 'gold' },
    { label: 'No-Fly Zone Coverage', value: '40%+', unit: 'of Iraq', icon: <Plane className="h-6 w-6" />, gradient: 'emerald' },
  ]

  // Infrastructure destruction data for chart
  const infrastructureChartData = infrastructureKpis.map((kpi: InfrastructureKPI) => ({
    name: kpi.component,
    preWar: 100,
    postWar: kpi.component === 'Power plants' ? (parseInt(kpi.postWar) / 20) * 100 : parseInt(kpi.postWar.replace(/[^\d]/g, '')),
  }))

  // Sentiment chart data
  const sentimentChartData = sentimentAnalysis.slice(0, 6).map((entry: SentimentEntry) => ({
    name: entry.topic.split(' ').slice(0, 2).join(' '),
    score: Math.abs(entry.score) * 100,
    sentiment: entry.sentiment,
  }))

  const getRelevanceBadge = (relevance: string) => {
    switch (relevance) {
      case 'critical':
        return <Badge variant="destructive" className="text-xs">Critical</Badge>
      case 'high':
        return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">High</Badge>
      case 'medium':
        return <Badge variant="outline" className="text-xs border-blue-500/50 text-blue-400">Medium</Badge>
      default:
        return <Badge variant="outline" className="text-xs">Low</Badge>
    }
  }

  const getSignificanceBadge = (significance?: string) => {
    switch (significance) {
      case 'critical':
        return <Badge variant="destructive" className="text-xs">Critical</Badge>
      case 'major':
        return <Badge variant="warning" className="text-xs bg-yellow-500/20 text-yellow-400 border-yellow-500/50">Major</Badge>
      default:
        return <Badge variant="outline" className="text-xs">Minor</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2">H-ERA-3</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Post-Gulf War Aftermath</h1>
          <p className="mt-2 text-slate-400">
            Regional transformation and humanitarian crisis (1991-2003) - The legacy of Operation Desert Storm
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Shield className="h-4 w-4" />
            Security Reports
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Globe className="h-4 w-4" />
            Regional Analysis
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {keyMetrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + idx * 0.05 }}
          >
            <MetricCard
              title={metric.label}
              value={metric.value}
              unit={metric.unit}
              icon={metric.icon}
              gradient={metric.gradient as any}
              status={metric.value === '12' ? 'warning' : 'success'}
            />
          </motion.div>
        ))}
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="military">Military & Security</TabsTrigger>
          <TabsTrigger value="humanitarian">Humanitarian</TabsTrigger>
          <TabsTrigger value="economic">Economic Impact</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Post-Gulf War Overview" description="Regional transformation and humanitarian crisis (1991-2003)">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">About This Era</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">
                    {data.description}
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* UAE Relevance Matrix */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Relevance Assessment</CardTitle>
                    <CardDescription>Critical security and economic concerns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {uaeRelevanceMatrix.map((entry: UAERelevanceEntry, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start justify-between rounded-lg bg-slate-800/50 p-3"
                          >
                            <div className="flex-1">
                              <span className="text-sm font-medium text-slate-200">{entry.topic}</span>
                              <p className="text-xs text-slate-400 mt-1">{entry.rationale}</p>
                            </div>
                            {getRelevanceBadge(entry.relevance)}
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Key Entity Registry */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Entity Registry</CardTitle>
                    <CardDescription>Political and military leaders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {entityRegistry.slice(0, 10).map((entity: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="rounded-lg bg-slate-800/50 p-3"
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium text-gold">{entity.name}</span>
                              <Badge variant="outline" className="text-xs">{entity.role}</Badge>
                            </div>
                            <p className="text-xs text-slate-400">{entity.context}</p>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Key Lessons Learned */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Lessons from No-Fly Zones</CardTitle>
                  <CardDescription>Brookings Institution Analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {keyLessons.map((lesson: string, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-2 rounded-lg bg-slate-800/50 p-3"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-gold text-xs font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-xs text-slate-300">{lesson}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Military & Security Tab */}
        <TabsContent value="military" className="space-y-6">
          <GlassPanel title="Military & Security KPIs" description="Coalition operations and no-fly zone metrics">
            <div className="space-y-6">
              {/* No-Fly Zone KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">No-Fly Zone Operations</CardTitle>
                  <CardDescription>Operation Provide Comfort & Southern Watch</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {noFlyZoneKpis.map((kpi: NoFlyZoneKPI, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-gold/30 bg-slate-800/50 p-4"
                      >
                        <div className="text-2xl font-bold text-gold">{kpi.value}</div>
                        <div className="text-sm text-slate-400">{kpi.kpi}</div>
                        <div className="mt-2 text-xs text-emerald-400">{kpi.status}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Military KPIs Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Pre-War vs Post-War Comparison</CardTitle>
                  <CardDescription>Key military metrics transformation</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: 'US Troops (thousands)', preWar: 0, postWar: 7.5 },
                      { name: 'No-Fly Zone %', preWar: 0, postWar: 40 },
                      { name: 'Coalition Sorties (×1000)', preWar: 0, postWar: 250 },
                      { name: 'UN Resolutions', preWar: 0, postWar: 6 },
                    ]}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'preWar', name: 'Pre-War', color: CHART_COLORS.platinum },
                      { dataKey: 'postWar', name: 'Post-War', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Sentiment Analysis */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Analysis by Topic</CardTitle>
                  <CardDescription>Multi-source sentiment matrix</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sentimentAnalysis.map((entry: SentimentEntry, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3"
                      >
                        <div className="flex-1">
                          <span className="text-sm font-medium text-slate-200">{entry.topic}</span>
                          <p className="text-xs text-slate-400">"{entry.keyPhrase}" - {entry.source}</p>
                        </div>
                        <div className={`text-sm font-bold ${
                          entry.sentiment.includes('Positive') ? 'text-emerald-400' :
                          entry.sentiment.includes('Negative') ? 'text-rose-400' : 'text-slate-400'
                        }`}>
                          {entry.sentiment} ({entry.score > 0 ? '+' : ''}{entry.score})
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Humanitarian Tab */}
        <TabsContent value="humanitarian" className="space-y-6">
          <GlassPanel title="Humanitarian Impact" description="Crisis metrics and displacement data">
            <div className="space-y-6">
              {/* Humanitarian KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Humanitarian Crisis Metrics</CardTitle>
                  <CardDescription>Iraq under sanctions (1991-2003)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {humanitarianKpis.map((kpi: HumanitarianKPI, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-rose-500/30 bg-rose-900/20 p-4"
                      >
                        <div className="text-2xl font-bold text-rose-400">{kpi.value}</div>
                        <div className="text-sm text-slate-300">{kpi.metric}</div>
                        <Progress value={Math.random() * 100} className="mt-2 h-1" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Infrastructure Destruction */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Infrastructure Destruction</CardTitle>
                  <CardDescription>Coalition bombing impact on Iraq</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={infrastructureKpis.map((kpi: InfrastructureKPI) => ({
                      name: kpi.component,
                      destroyed: parseInt(kpi.destructionPercent.replace(/[^\d]/g, '')),
                      remaining: 100 - parseInt(kpi.destructionPercent.replace(/[^\d]/g, '')),
                    }))}
                    xAxisKey="name"
                    areas={[
                      { dataKey: 'destroyed', name: 'Destroyed %', color: CHART_COLORS.rose },
                      { dataKey: 'remaining', name: 'Remaining %', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Environmental Impact */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Environmental Damage</CardTitle>
                  <CardDescription>Oil spills, fires, and ecological collapse</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {environmentalKpis.map((kpi: EnvironmentalKPI, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-amber-500/30 bg-amber-900/20 p-4"
                      >
                        <Flame className="mb-2 h-5 w-5 text-amber-400" />
                        <div className="text-xl font-bold text-amber-400">{kpi.value}</div>
                        <div className="text-sm text-slate-300">{kpi.metric}</div>
                        <div className="mt-1 text-xs text-slate-400">{kpi.context}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Economic Tab */}
        <TabsContent value="economic" className="space-y-6">
          <GlassPanel title="Economic Impact" description="Sanctions, oil markets, and reconstruction">
            <div className="space-y-6">
              {/* Economic KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Economic Damage Metrics</CardTitle>
                  <CardDescription>12 years of sanctions impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {economicKpis.map((kpi: EconomicKPI, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-gold/30 bg-slate-800/50 p-4 text-center"
                      >
                        <DollarSign className="mx-auto mb-2 h-5 w-5 text-gold" />
                        <div className="text-xl font-bold text-gold">{kpi.value}</div>
                        <div className="text-xs text-slate-400">{kpi.metric}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UN Resolutions Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UN Security Council Resolutions</CardTitle>
                  <CardDescription>Legal framework for Iraq crisis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="relative border-l-2 border-gold/30 ml-4 space-y-6">
                      {unResolutions.map((res: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="relative pl-8"
                        >
                          <div className="absolute left-[-37px] h-4 w-4 rounded-full bg-gold border-2 border-navy-900" />
                          <span className="text-sm font-mono text-gold">{res.resolution}</span>
                          <span className="ml-2 text-xs text-slate-400">({res.date})</span>
                          <h4 className="text-lg font-bold text-slate-100">{res.purpose}</h4>
                          <p className="text-sm text-slate-400">{res.keyTerms}</p>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="Post-Gulf War Timeline" description="Key events 1991-2003">
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {postGulfWarEvents.sort((a: any, b: any) => {
                  const yearA = parseInt(a.date.replace(/\D/g, '')) || 0
                  const yearB = parseInt(b.date.replace(/\D/g, '')) || 0
                  return yearA - yearB
                }).map((event: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold shrink-0">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-mono font-bold text-gold">{event.date}</span>
                        {getSignificanceBadge(event.significance)}
                      </div>
                      <h3 className="text-xl font-bold text-slate-100 mb-2">{event.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{event.description}</p>
                      {event.entities && event.entities.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {event.entities.map((entity: string, eIdx: number) => (
                            <Badge key={eIdx} variant="outline" className="text-xs border-gold/30 text-gold">{entity}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
