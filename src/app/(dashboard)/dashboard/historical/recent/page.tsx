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
} from 'lucide-react'
import {
  useRecentEraData,
  usePostPandemicExpoData,
  useModernizationVisionData,
} from '@/lib/data-loader'

export default function RecentHistoryPage() {
  const { data: recent } = useRecentEraData()
  const { data: expo } = usePostPandemicExpoData()
  const { data: modernization } = useModernizationVisionData()

  const data = recent || {
    description: 'Recent UAE history from 2010-2026 including Vision 2021, Expo 2020, and COP28',
    keyEvents: [],
    policyOutcomes: [],
  }

  // Recent milestones data
  const recentMilestonesData = [
    { year: '2010', event: 'Vision 2021 Launch', impact: 90 },
    { year: '2014', event: 'National Agenda', impact: 75 },
    { year: '2016', event: 'Happiness Ministry', impact: 68 },
    { year: '2017', event: 'UAE AI Strategy', impact: 88 },
    { year: '2020', event: 'Hope Probe Launch', impact: 95 },
    { year: '2020', event: 'Abraham Accords', impact: 98 },
    { year: '2021', event: 'Expo 2020 Dubai', impact: 92 },
    { year: '2022', event: 'MBZ Presidency', impact: 85 },
    { year: '2023', event: 'COP28 Hosted', impact: 94 },
    { year: '2024', event: 'UAE joins BRICS', impact: 82 },
    { year: '2025', event: 'Etihad Rail Launch', impact: 78 },
    { year: '2026', event: 'Plastics Ban', impact: 65 },
  ]

  // Achievement by sector
  const achievementData = [
    { sector: 'Economy', achievement: 92, color: CHART_COLORS.gold },
    { sector: 'Technology', achievement: 88, color: CHART_COLORS.emerald },
    { sector: 'Diplomacy', achievement: 95, color: CHART_COLORS.navy },
    { sector: 'Infrastructure', achievement: 85, color: CHART_COLORS.platinum },
    { sector: 'Environment', achievement: 72, color: CHART_COLORS.cyan },
  ]

  // Key events distribution
  const eventTypeData = [
    { name: 'Diplomatic', value: 30, color: CHART_COLORS.navy },
    { name: 'Economic', value: 25, color: CHART_COLORS.gold },
    { name: 'Infrastructure', value: 20, color: CHART_COLORS.platinum },
    { name: 'Technology', value: 15, color: CHART_COLORS.emerald },
    { name: 'Social', value: 10, color: CHART_COLORS.rose },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">H-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Recent History (2010-2026)</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'The modern era of transformation, achievement, and global leadership'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Calendar className="h-4 w-4" />
            Event Archive
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze Era
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Major Events"
          value="156"
          previousValue={142}
          icon={<Rocket className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Achievement Rate"
          value="89%"
          previousValue={82}
          icon={<Target className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Global Rankings"
          value="Top 15"
          previousValue={22}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Investment Volume"
          value="$600B"
          previousValue={520}
          icon={<Banknote className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Recent Era Overview" description="2010-2026 transformation and achievements">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Progress Index 2010-2026</CardTitle>
                  <CardDescription>National development trajectory</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={[
                      { year: '2010', index: 45 },
                      { year: '2012', index: 52 },
                      { year: '2014', index: 60 },
                      { year: '2016', index: 68 },
                      { year: '2018', index: 75 },
                      { year: '2020', index: 80 },
                      { year: '2022', index: 87 },
                      { year: '2024', index: 92 },
                      { year: '2026', index: 96 },
                    ]}
                    xAxisKey="year"
                    areas={[
                      { dataKey: 'index', name: 'Progress Index', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Event Categories</CardTitle>
                    <CardDescription>Distribution by event type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={eventTypeData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Achievement by Sector</CardTitle>
                    <CardDescription>Success rate by national priority</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievementData.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.sector}</span>
                            <span className="text-lg font-bold text-gold">{item.achievement}%</span>
                          </div>
                          <Progress
                            value={item.achievement}
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

        {/* Milestones Tab */}
        <TabsContent value="milestones" className="space-y-6">
          <GlassPanel title="Key Milestones" description="Major events and achievements 2010-2026">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Milestone Impact Analysis</CardTitle>
                  <CardDescription>Impact score of key milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={recentMilestonesData}
                    xAxisKey="event"
                    bars={[
                      { dataKey: 'impact', name: 'Impact', color: CHART_COLORS.gold },
                    ]}
                    height={400}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Event Details</CardTitle>
                  <CardDescription>Detailed timeline of recent milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {recentMilestonesData.slice().reverse().map((milestone, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Calendar className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{milestone.event}</p>
                              <p className="text-sm text-slate-400">{milestone.year}</p>
                            </div>
                          </div>
                          <Badge variant="gold" className="text-xs">Impact: {milestone.impact}%</Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-6">
          <GlassPanel title="National Achievements" description="Key accomplishments of the recent era">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Achievement Breakdown</CardTitle>
                  <CardDescription>Major achievements by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={achievementData}
                    xAxisKey="sector"
                    bars={[
                      { dataKey: 'achievement', name: 'Achievement %', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Space & Technology</CardTitle>
                    <CardDescription>Tech achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: 'Hope Probe', value: 'First Arab Mars mission', icon: Rocket },
                        { title: 'AI Strategy', value: 'World\'s first AI Minister', icon: Cpu },
                        { title: 'Smart Government', value: '100+ e-services', icon: Globe },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                          <item.icon className="h-5 w-5 text-emerald" />
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{item.title}</p>
                            <p className="text-sm text-slate-400">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Climate & Environment</CardTitle>
                    <CardDescription>Environmental milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: 'Net Zero 2050', value: 'First MENA commitment', icon: TreePine },
                        { title: 'COP28 Hosted', value: 'Fossil fuel language breakthrough', icon: Globe },
                        { title: 'Plastics Ban', value: 'Comprehensive ban 2026', icon: TreePine },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 rounded-lg bg-slate-800/50 p-3">
                          <item.icon className="h-5 w-5 text-cyan" />
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{item.title}</p>
                            <p className="text-sm text-slate-400">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Leadership Tab */}
        <TabsContent value="leadership" className="space-y-6">
          <GlassPanel title="Leadership & Governance" description="Key leadership milestones and transitions">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Leadership Timeline</CardTitle>
                  <CardDescription>Key leadership transitions and appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        period: '2004-2022',
                        leader: 'Sheikh Khalifa bin Zayed',
                        role: 'President of UAE',
                        event: 'Stable governance through transformation',
                      },
                      {
                        period: '2006-present',
                        leader: 'Sheikh Mohammed bin Rashid',
                        role: 'Vice President & PM',
                        event: 'Vision 2021 architect',
                      },
                      {
                        period: '2014-2022',
                        leader: 'MBZ (de facto)',
                        role: 'Crown Prince of Abu Dhabi',
                        event: 'Strategic leadership during key era',
                      },
                      {
                        period: '2022-present',
                        leader: 'Sheikh Mohamed bin Zayed',
                        role: 'President of UAE',
                        event: 'MBZ assumes presidency',
                      },
                    ].map((leader, idx) => (
                      <div key={idx} className="rounded-lg border border-navy/30 bg-slate-800/50 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-navy">{leader.period}</span>
                          <Badge variant="navy" className="text-xs">{leader.role}</Badge>
                        </div>
                        <h4 className="font-semibold text-slate-200">{leader.leader}</h4>
                        <p className="mt-1 text-sm text-slate-400">{leader.event}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">International Recognition</CardTitle>
                  <CardDescription>Global rankings and indices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { index: 'Global Competitiveness', rank: '#12', change: '+5' },
                      { index: 'Ease of Business', rank: '#16', change: '+8' },
                      { index: 'Happiness Index', rank: '#21', change: '+12' },
                      { index: 'Innovation Index', rank: '#34', change: '+15' },
                    ].map((item, idx) => (
                      <div key={idx} className="rounded-lg bg-slate-800/50 p-4 text-center">
                        <p className="text-sm text-slate-400">{item.index}</p>
                        <p className="mt-1 text-2xl font-bold text-gold">{item.rank}</p>
                        <p className="text-xs text-emerald">+{item.change} from 2010</p>
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
