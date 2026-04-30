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
  Calendar,
  Target,
  Rocket,
  TreePine,
  Banknote,
  Cpu,
  Plane,
  Flag,
  Crown,
  Landmark,
  Building,
  Scroll,
  Star,
  ChevronRight,
  MapPin,
  Eye,
  Heart,
  Scale,
  Database,
} from 'lucide-react'
import {
  useHistoricalOverviewData,
  usePreFederationData,
  useFederationEarlyData,
  usePostGulfWarData,
  useRapidDevelopmentData,
  useArabSpringData,
  useModernizationVisionData,
  usePostPandemicExpoData,
  useRecentEraData,
  eventHistoricalData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'

// Event History Data - 19 Major UAE Historical Events
const eventHistoryData = eventHistoricalData.events
const eventSummary = eventHistoricalData.summary

// Relevance color mapping
const relevanceColors: Record<string, string> = {
  'CRITICAL': CHART_COLORS.rose,
  'HIGH': CHART_COLORS.gold,
  'MEDIUM': CHART_COLORS.info,
  'LOW': CHART_COLORS.platinum,
}

// Sentiment chart data
const sentimentChartData = eventHistoryData.map(e => ({
  name: e.title.length > 15 ? e.title.substring(0, 15) + '...' : e.title,
  sentiment: Math.round((e.sentiment.reduce((acc, s) => acc + s.valence, 0) / e.sentiment.length) * 100) / 100,
  relevance: e.uaeRelevance === 'CRITICAL' ? 4 : e.uaeRelevance === 'HIGH' ? 3 : e.uaeRelevance === 'MEDIUM' ? 2 : 1,
}))

// Entity type distribution
const entityTypeDistribution = eventHistoryData.reduce((acc, event) => {
  event.entities.forEach(entity => {
    acc[entity.type] = (acc[entity.type] || 0) + 1
  })
  return acc
}, {} as Record<string, number>)

const entityTypeData = Object.entries(entityTypeDistribution).map(([type, count]) => ({
  type,
  count,
  color: type === 'Person' ? CHART_COLORS.rose :
         type === 'Place' ? CHART_COLORS.gold :
         type === 'Organization' ? CHART_COLORS.info :
         type === 'Nation' ? CHART_COLORS.emerald :
         type === 'Media' ? CHART_COLORS.platinum : CHART_COLORS.navy,
}))

// Relevance distribution
const relevanceDistribution = eventHistoryData.reduce((acc, event) => {
  acc[event.uaeRelevance] = (acc[event.uaeRelevance] || 0) + 1
  return acc
}, {} as Record<string, number>)

const relevanceData = Object.entries(relevanceDistribution).map(([level, count]) => ({
  level,
  count,
  color: relevanceColors[level] || CHART_COLORS.platinum,
}))

export default function HistoricalTimelinePage() {
  const { data: overview } = useHistoricalOverviewData()
  const { data: preFed } = usePreFederationData()
  const { data: fedEarly } = useFederationEarlyData()
  const { data: postGulfWar } = usePostGulfWarData()
  const { data: rapidDev } = useRapidDevelopmentData()
  const { data: arabSpring } = useArabSpringData()
  const { data: modernization } = useModernizationVisionData()
  const { data: postPandemic } = usePostPandemicExpoData()
  const { data: recent } = useRecentEraData()

  // Combined timeline data
  const timelineData = [
    { year: '1820', event: 'General Maritime Treaty', era: 'Pre-Federation', significance: 'critical' },
    { year: '1853', event: 'Perpetual Maritime Truce', era: 'Pre-Federation', significance: 'critical' },
    { year: '1892', event: 'Exclusive Agreement', era: 'Pre-Federation', significance: 'major' },
    { year: '1935', event: 'Oil Exploration Begins', era: 'Pre-Federation', significance: 'critical' },
    { year: '1958', event: 'First Oil Discovery', era: 'Pre-Federation', significance: 'critical' },
    { year: '1966', event: 'Sheikh Zayed Becomes Ruler', era: 'Pre-Federation', significance: 'critical' },
    { year: 'Jan 1968', event: 'British Withdrawal Announced', era: 'Pre-Federation', significance: 'critical' },
    { year: 'Dec 2, 1971', event: 'UAE Federation Formed', era: 'Federation', significance: 'critical' },
    { year: 'Dec 9, 1971', event: 'UN Membership', era: 'Federation', significance: 'critical' },
    { year: 'Nov 30, 1971', event: 'Iran Seizes Islands', era: 'Federation', significance: 'critical' },
    { year: 'Feb 1972', event: 'Ras Al Khaimah Joins', era: 'Federation', significance: 'major' },
    { year: '1974', event: 'Treaty of Jeddah', era: 'Federation', significance: 'major' },
    { year: '1981', event: 'GCC Founded', era: 'Federation', significance: 'critical' },
    { year: '1991', event: 'Gulf War Coalition', era: 'Post-Gulf War', significance: 'critical' },
    { year: '2001', event: 'Palm Jumeirah Begins', era: 'Rapid Development', significance: 'major' },
    { year: '2008', event: 'Dubai Metro Opens', era: 'Rapid Development', significance: 'major' },
    { year: '2009', event: 'Dubai Debt Crisis', era: 'Rapid Development', significance: 'critical' },
    { year: '2010', event: 'Burj Khalifa Opens', era: 'Rapid Development', significance: 'critical' },
    { year: '2010', event: 'Vision 2021 Launch', era: 'Arab Spring', significance: 'critical' },
    { year: '2011', event: 'Bahrain GCC Intervention', era: 'Arab Spring', significance: 'critical' },
    { year: '2017', event: 'UAE AI Strategy', era: 'Modernization', significance: 'critical' },
    { year: '2020', event: 'Hope Probe Launch', era: 'Modernization', significance: 'critical' },
    { year: 'Aug 2020', event: 'Abraham Accords', era: 'Modernization', significance: 'critical' },
    { year: 'Oct 2021', event: 'Expo 2020 Dubai', era: 'Post-Pandemic', significance: 'critical' },
    { year: 'May 2022', event: 'MBZ Becomes President', era: 'Post-Pandemic', significance: 'critical' },
    { year: 'Nov 2023', event: 'COP28 Hosted', era: 'Recent', significance: 'critical' },
    { year: 'Jan 2024', event: 'UAE Joins BRICS', era: 'Recent', significance: 'major' },
    { year: 'Apr 2024', event: 'UAE Flood Crisis', era: 'Recent', significance: 'major' },
  ]

  // Era distribution
  const eraDistributionData = [
    { era: 'Pre-Federation', events: 7, color: CHART_COLORS.rose },
    { era: 'Federation', events: 5, color: CHART_COLORS.gold },
    { era: 'Post-Gulf War', events: 1, color: CHART_COLORS.navy },
    { era: 'Rapid Development', events: 5, color: CHART_COLORS.platinum },
    { era: 'Arab Spring', events: 2, color: CHART_COLORS.info },
    { era: 'Modernization', events: 3, color: CHART_COLORS.emerald },
    { era: 'Post-Pandemic', events: 2, color: CHART_COLORS.rose },
    { era: 'Recent', events: 3, color: CHART_COLORS.gold },
  ]

  // Significance levels
  const significanceData = [
    { level: 'Critical', count: 22, color: CHART_COLORS.rose },
    { level: 'Major', count: 6, color: CHART_COLORS.gold },
  ]

  const getEraIcon = (era: string) => {
    switch (era) {
      case 'Pre-Federation': return <Scroll className="h-4 w-4" />
      case 'Federation': return <Flag className="h-4 w-4" />
      case 'Post-Gulf War': return <Shield className="h-4 w-4" />
      case 'Rapid Development': return <Building className="h-4 w-4" />
      case 'Arab Spring': return <Users className="h-4 w-4" />
      case 'Modernization': return <Cpu className="h-4 w-4" />
      case 'Post-Pandemic': return <Plane className="h-4 w-4" />
      case 'Recent': return <Rocket className="h-4 w-4" />
      default: return <Star className="h-4 w-4" />
    }
  }

  const getEraColor = (era: string) => {
    const eraData = eraDistributionData.find(e => e.era === era)
    return eraData?.color || CHART_COLORS.platinum
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="default" className="mb-2">H-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum">Historical Timeline</h1>
          <p className="mt-2 text-slate-400">
            Complete chronological record of UAE history from 1820 to present
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Scroll className="h-4 w-4" />
            Full Archive
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Explore Era
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Historical Events"
          value="28"
          previousValue={25}
          icon={<Calendar className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
        <MetricCard
          title="Eras Covered"
          value="8"
          previousValue={7}
          icon={<Clock className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Critical Milestones"
          value="22"
          previousValue={20}
          icon={<Star className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Data Sources"
          value="156"
          previousValue={142}
          icon={<Landmark className="h-6 w-6" />}
          gradient="denim"
        />
      </div>

      <Tabs defaultValue="timeline" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="eras">Era Breakdown</TabsTrigger>
          <TabsTrigger value="significance">Significance</TabsTrigger>
          <TabsTrigger value="explore">Era Explorer</TabsTrigger>
          <TabsTrigger value="events">Event History</TabsTrigger>
        </TabsList>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel title="UAE Historical Timeline" description="From 1820 to present - key events shaping the nation">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Events by Era</CardTitle>
                  <CardDescription>Distribution of major events across historical periods</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={eraDistributionData}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Complete Timeline</CardTitle>
                  <CardDescription>All major events in chronological order</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px]">
                    <div className="relative border-l-2 border-platinum/30 pl-8">
                      {timelineData.map((event, idx) => (
                        <div key={idx} className="relative mb-8 last:mb-0">
                          <div
                            className="absolute -left-[41px] h-6 w-6 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${getEraColor(event.era)}20`, color: getEraColor(event.era) }}
                          >
                            {getEraIcon(event.era)}
                          </div>
                          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-bold" style={{ color: getEraColor(event.era) }}>
                                {event.year}
                              </span>
                              <Badge
                                variant={event.significance === 'critical' ? 'destructive' : 'warning'}
                                className="text-xs"
                              >
                                {event.significance}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-slate-200">{event.event}</h4>
                            <div className="mt-2 flex items-center gap-2">
                              <Badge variant="outline" className="text-xs" style={{ borderColor: getEraColor(event.era) }}>
                                {event.era}
                              </Badge>
                            </div>
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

        {/* Eras Tab */}
        <TabsContent value="eras" className="space-y-6">
          <GlassPanel title="Era Breakdown" description="Detailed view of each historical era">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Events Per Era</CardTitle>
                  <CardDescription>Number of critical events in each historical period</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={eraDistributionData}
                    xAxisKey="era"
                    bars={[
                      { dataKey: 'events', name: 'Events', color: CHART_COLORS.platinum },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {eraDistributionData.map((era, idx) => (
                  <Card key={idx} className="glass-card" style={{ borderColor: `${era.color}30` }}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center gap-2" style={{ color: era.color }}>
                        {getEraIcon(era.era)}
                        {era.era}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-slate-200">{era.events}</p>
                      <p className="text-xs text-slate-400">Major events</p>
                      <Progress value={(era.events / 7) * 100} className="mt-2 h-1" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Significance Tab */}
        <TabsContent value="significance" className="space-y-6">
          <GlassPanel title="Event Significance Analysis" description="Classification of events by historical importance">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Significance Distribution</CardTitle>
                  <CardDescription>Critical vs Major event breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-8">
                    {significanceData.map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div
                          className="h-24 w-24 rounded-full flex items-center justify-center mb-2"
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          <span className="text-3xl font-bold" style={{ color: item.color }}>{item.count}</span>
                        </div>
                        <p className="font-semibold text-slate-200">{item.level}</p>
                        <p className="text-sm text-slate-400">Events</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Critical Events</CardTitle>
                  <CardDescription>Most significant historical turning points</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {timelineData
                        .filter(e => e.significance === 'critical')
                        .map((event, idx) => (
                          <div key={idx} className="flex items-center gap-4 rounded-lg border border-rose/30 bg-slate-800/50 p-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-rose">
                              <Crown className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-slate-200">{event.event}</p>
                              <p className="text-sm text-slate-400">{event.year} - {event.era}</p>
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

        {/* Era Explorer Tab */}
        <TabsContent value="explore" className="space-y-6">
          <GlassPanel title="Era Explorer" description="Deep dive into each historical period">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {eraDistributionData.map((era, idx) => (
                  <Card key={idx} className="glass-card cursor-pointer hover:border-platinum/50 transition-colors" style={{ borderColor: `${era.color}30` }}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center gap-2" style={{ color: era.color }}>
                        {getEraIcon(era.era)}
                        {era.era}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-400 mb-2">
                        {idx === 0 && 'Before 1971 - British protectorate, oil discovery'}
                        {idx === 1 && '1971-1990 - Nation building, institutions'}
                        {idx === 2 && '1991-2003 - Post-Gulf War era'}
                        {idx === 3 && '2000-2010 - Construction boom, crisis'}
                        {idx === 4 && '2010-2015 - Arab Spring period'}
                        {idx === 5 && '2015-2020 - Modernization, Abraham Accords'}
                        {idx === 6 && '2020-2023 - Pandemic, leadership transition'}
                        {idx === 7 && '2023-2026 - Recent developments'}
                      </p>
                      <Badge variant="outline" className="text-xs" style={{ borderColor: era.color }}>
                        {era.events} events
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Era Deep Dive</CardTitle>
                  <CardDescription>Key characteristics of each period</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        era: 'Pre-Federation (1820-1971)',
                        description: 'From British maritime treaties through oil discovery to federation formation',
                        keyThemes: ['British Protectorate', 'Oil Discovery', 'Nation-Building Foundation'],
                        color: CHART_COLORS.rose,
                      },
                      {
                        era: 'Federation Era (1971-1990)',
                        description: 'Establishment of federal institutions, international recognition, GCC foundation',
                        keyThemes: ['Federal Institution Building', 'International Integration', 'Border Disputes'],
                        color: CHART_COLORS.gold,
                      },
                      {
                        era: 'Modernization Era (2015-2020)',
                        description: 'Vision 2021 implementation, Hope Probe, Abraham Accords',
                        keyThemes: ['Technology Leadership', 'Diplomatic Innovation', 'Space Exploration'],
                        color: CHART_COLORS.emerald,
                      },
                    ].map((era, idx) => (
                      <div key={idx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: era.color }} />
                          <h4 className="font-semibold text-slate-200">{era.era}</h4>
                        </div>
                        <p className="text-sm text-slate-400 mb-3">{era.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {era.keyThemes.map((theme, i) => (
                            <Badge key={i} variant="outline" className="text-xs" style={{ borderColor: era.color }}>
                              {theme}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Event History Tab - MD 8-9 Enhancement Cycles A-F */}
        <TabsContent value="events" className="space-y-6">
          <GlassPanel title="Event Historical Deep Dives" description="Comprehensive analysis of 19 major UAE historical events from MD 8-9">
            <div className="space-y-6">
              {/* ENHANCEMENT A: Key Metrics */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <MetricCard
                  title="Total Events"
                  value={eventSummary.totalEvents}
                  icon={<Calendar className="h-5 w-5" />}
                  gradient="indigo"
                />
                <MetricCard
                  title="Entities"
                  value={eventSummary.entityCount}
                  icon={<Database className="h-5 w-5" />}
                  gradient="gold"
                />
                <MetricCard
                  title="Sources"
                  value={eventSummary.sourceCount}
                  icon={<Landmark className="h-5 w-5" />}
                  gradient="denim"
                />
                <MetricCard
                  title="Critical Events"
                  value={eventHistoryData.filter(e => e.uaeRelevance === 'CRITICAL').length}
                  icon={<AlertCircle className="h-5 w-5" />}
                  gradient="rose"
                  status="success"
                />
                <MetricCard
                  title="Data Points"
                  value={eventSummary.dataPointsCount}
                  icon={<TrendingUp className="h-5 w-5" />}
                  gradient="emerald"
                />
              </div>

              {/* ENHANCEMENT B: Relevance Distribution */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Eye className="h-4 w-4 text-platinum" />
                      UAE Relevance Distribution
                    </CardTitle>
                    <CardDescription>Events by strategic importance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={relevanceData}
                      height={250}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Users className="h-4 w-4 text-gold" />
                      Entity Type Distribution
                    </CardTitle>
                    <CardDescription>Breakdown of involved entities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={entityTypeData}
                      xAxisKey="type"
                      bars={[{ dataKey: 'count', name: 'Count', color: CHART_COLORS.gold }]}
                      height={250}
                      showGrid={false}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* ENHANCEMENT C: Sentiment Analysis */}
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Heart className="h-4 w-4 text-rose" />
                    Sentiment Analysis by Event
                  </CardTitle>
                  <CardDescription>Average sentiment valence across all topics per event</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sentimentChartData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.rose }]}
                    height={300}
                    showGrid={true}
                    layout="vertical"
                  />
                </CardContent>
              </Card>

              {/* ENHANCEMENT D: Events Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {eventHistoryData.map((event, idx) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="glass-card rounded-lg p-4 cursor-pointer"
                      style={{ borderColor: `${relevanceColors[event.uaeRelevance]}40` }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <Badge
                          variant="outline"
                          className="text-xs"
                          style={{ borderColor: relevanceColors[event.uaeRelevance], color: relevanceColors[event.uaeRelevance] }}
                        >
                          {event.uaeRelevance}
                        </Badge>
                        <span className="text-xs text-slate-500">
                          {event.period.start} - {event.period.end}
                        </span>
                      </div>
                      <h4 className="font-semibold text-slate-200 mb-1 text-sm">{event.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-2">{event.overview}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {event.entities.length} entities
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {event.sentiment.length} topics
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* ENHANCEMENT E: Entity Registry by Event */}
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Database className="h-4 w-4 text-info" />
                    Entity Registry
                  </CardTitle>
                  <CardDescription>Key entities involved in each event</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {eventHistoryData.slice(0, 8).map((event) => (
                        <div key={event.id} className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3">
                          <h5 className="font-semibold text-sm text-slate-200 mb-2" style={{ color: relevanceColors[event.uaeRelevance] }}>
                            {event.eventNumber}. {event.title}
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {event.entities.slice(0, 5).map((entity, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {entity.entity}
                              </Badge>
                            ))}
                            {event.entities.length > 5 && (
                              <Badge variant="outline" className="text-xs text-slate-500">
                                +{event.entities.length - 5} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* ENHANCEMENT F: Source Credibility Matrix */}
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Scale className="h-4 w-4 text-emerald" />
                    Source Credibility Matrix
                  </CardTitle>
                  <CardDescription>Top sources by tier for event verification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { tier: 'Tier 1', desc: 'Government/UN/Academic', examples: 'State Department, UNFCCC, NIH, Amnesty', color: CHART_COLORS.emerald },
                      { tier: 'Tier 2', desc: 'Established Media/Think Tanks', examples: 'Wikipedia, Britannica, Carnegie, ECFR', color: CHART_COLORS.info },
                      { tier: 'Tier 3', desc: 'News/Blog', examples: 'CNBC, Axios, Reuters, The National', color: CHART_COLORS.gold },
                    ].map((tier, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
                      >
                        <div
                          className="h-12 w-12 rounded-full flex items-center justify-center text-sm font-bold"
                          style={{ backgroundColor: `${tier.color}20`, color: tier.color }}
                        >
                          {tier.tier}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-slate-200">{tier.desc}</p>
                          <p className="text-xs text-slate-400">{tier.examples}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Event Details Cards */}
              <div className="grid gap-4 md:grid-cols-2">
                {eventHistoryData.slice(0, 4).map((event) => (
                  <Card key={event.id} className="glass-card overflow-hidden">
                    <CardHeader className="pb-2" style={{ borderBottom: `2px solid ${relevanceColors[event.uaeRelevance]}40` }}>
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge variant="outline" className="mb-2" style={{ borderColor: relevanceColors[event.uaeRelevance], color: relevanceColors[event.uaeRelevance] }}>
                            {event.uaeRelevance}
                          </Badge>
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-slate-400">{event.period.start} - {event.period.end}</p>
                          <p className="text-xs text-slate-500">Event #{event.eventNumber}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-slate-300 mb-4">{event.overview}</p>
                      <div className="mb-3">
                        <p className="text-xs font-semibold text-slate-400 mb-2">Key Facts:</p>
                        <ul className="text-xs text-slate-400 space-y-1">
                          {event.keyFacts.slice(0, 3).map((fact, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-platinum">•</span>
                              {fact}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-700/50">
                        <div className="flex -space-x-2">
                          {event.sentiment.slice(0, 3).map((s, idx) => (
                            <div
                              key={idx}
                              className="h-6 w-6 rounded-full flex items-center justify-center text-xs border border-slate-800"
                              style={{ backgroundColor: s.valence > 0 ? `${CHART_COLORS.emerald}40` : s.valence < 0 ? `${CHART_COLORS.rose}40` : `${CHART_COLORS.platinum}40` }}
                              title={`${s.topic}: ${s.valence}`}
                            >
                              {s.valence > 0 ? '+' : ''}{s.valence}
                            </div>
                          ))}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {event.source.split(',')[0]}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
