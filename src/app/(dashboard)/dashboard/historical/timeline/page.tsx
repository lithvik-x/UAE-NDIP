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
} from '@/lib/data-loader'

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
    { era: 'Arab Spring', events: 2, color: CHART_COLORS.cyan },
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
          <Badge variant="platinum" className="mb-2">H-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Historical Timeline</h1>
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
          gradient="platinum"
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
          gradient="navy"
        />
      </div>

      <Tabs defaultValue="timeline" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="eras">Era Breakdown</TabsTrigger>
          <TabsTrigger value="significance">Significance</TabsTrigger>
          <TabsTrigger value="explore">Era Explorer</TabsTrigger>
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
      </Tabs>
    </div>
  )
}
