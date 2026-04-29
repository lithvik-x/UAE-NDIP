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
  Building2,
  DollarSign,
  Landmark,
  Globe2,
  Scale,
  Users2,
  AlertOctagon,
  Handshake,
  Wind,
  Leaf,
} from 'lucide-react'
import {
  useRecentEraData,
  usePostPandemicExpoData,
  useModernizationVisionData,
  useArabSpringData,
} from '@/lib/data-loader'

import { AnimatePresence, motion } from 'framer-motion'

export default function RecentHistoryPage() {
  const { data: recent } = useRecentEraData()
  const { data: expo } = usePostPandemicExpoData()
  const { data: modernization } = useModernizationVisionData()
  const { data: arabSpring } = useArabSpringData()

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
    { sector: 'Environment', achievement: 72, color: CHART_COLORS.info },
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
          gradient="denim"
        />
        <MetricCard
          title="Investment Volume"
          value="$600B"
          previousValue={520}
          icon={<Banknote className="h-6 w-6" />}
          gradient="indigo"
        />
      </div>

      {/* Arab Spring Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Arab Spring Deaths"
          value="61,000"
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Regimes Overthrown"
          value="7"
          icon={<Shield className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Civil Wars Resulted"
          value="4"
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="amber"
          status="warning"
        />
        <MetricCard
          title="UAE Police to Bahrain"
          value="500"
          icon={<Users className="h-6 w-6" />}
          gradient="emerald"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
          <TabsTrigger value="arab-spring">Arab Spring</TabsTrigger>
          <TabsTrigger value="expo">Post-Pandemic/Expo</TabsTrigger>
          <TabsTrigger value="recent-era">Recent Era 2023-2026</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
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
                          <Badge variant="denim" className="text-xs">{leader.role}</Badge>
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

        {/* Arab Spring Tab */}
        <TabsContent value="arab-spring" className="space-y-6">
          <GlassPanel title="Arab Spring (2010-2026)" description="Regional upheaval and UAE response">
            <div className="space-y-6">
              {/* Country Outcomes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Country Outcomes</CardTitle>
                  <CardDescription>Results by country across the Arab Spring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {[
                      { country: 'Tunisia', outcome: 'SUCCESS', deaths: 338, color: 'emerald' },
                      { country: 'Egypt', outcome: 'FAILED', deaths: 846, color: 'rose' },
                      { country: 'Libya', outcome: 'CIVIL WAR', deaths: '9,400-20,000', color: 'rose' },
                      { country: 'Syria', outcome: 'CIVIL WAR', deaths: '656,493+', color: 'rose' },
                      { country: 'Yemen', outcome: 'CIVIL WAR', deaths: '2,000+', color: 'rose' },
                      { country: 'Bahrain', outcome: 'SUPPRESSED', deaths: 120, color: 'amber' },
                      { country: 'Sudan', outcome: 'REFORMED', deaths: '200+', color: 'emerald' },
                      { country: 'Algeria', outcome: 'REFORMED', deaths: 8, color: 'emerald' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-slate-200">{item.country}</span>
                          <Badge
                            variant={item.color === 'emerald' ? 'emerald' : item.color === 'rose' ? 'rose' : 'amber'}
                            className="text-xs"
                          >
                            {item.outcome}
                          </Badge>
                        </div>
                        <p className="text-2xl font-bold text-gold">{item.deaths}</p>
                        <p className="text-xs text-slate-400">deaths</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Timeline Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Arab Spring Timeline</CardTitle>
                  <CardDescription>Key events 2010-2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { year: '2010', events: 1, label: 'Bouazizi' },
                      { year: '2011', events: 15, label: 'Regional' },
                      { year: '2012', events: 5, label: 'Elections' },
                      { year: '2013', events: 8, label: 'Coups' },
                      { year: '2014-2018', events: 4, label: 'Civil Wars' },
                      { year: '2019', events: 4, label: '2nd Wave' },
                      { year: '2024', events: 1, label: 'Assad Falls' },
                    ]}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'events', name: 'Key Events', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* UAE Role */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Regional Role</CardTitle>
                  <CardDescription>UAE involvement in Arab Spring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Bahrain Intervention',
                        description: '500 UAE police officers deployed as part of GCC force',
                        impact: 'CRITICAL',
                        icon: Shield,
                      },
                      {
                        title: 'GCC Development Aid',
                        description: '$10 billion in loans to Oman and Bahrain',
                        impact: 'HIGH',
                        icon: Banknote,
                      },
                      {
                        title: 'Regional Stability',
                        description: 'UAE maintained stability; positioned as business hub',
                        impact: 'HIGH',
                        icon: Globe,
                      },
                      {
                        title: 'Social Media Control',
                        description: 'Increased monitoring post-Arab Spring',
                        impact: 'MEDIUM',
                        icon: Cpu,
                      },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-slate-200">{item.title}</h4>
                            <Badge
                              variant={item.impact === 'CRITICAL' ? 'rose' : item.impact === 'HIGH' ? 'denim' : 'amber'}
                              className="text-xs"
                            >
                              {item.impact}
                            </Badge>
                          </div>
                          <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Impact */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Social Media Catalyst</CardTitle>
                  <CardDescription>Digital mobilization during Arab Spring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gold">Egypt Twitter Growth</h4>
                      <AreaChart
                        data={[
                          { period: 'Pre-Mubarak', tweets: 2300 },
                          { period: 'Peak', tweets: 230000 },
                        ]}
                        xAxisKey="period"
                        areas={[
                          { dataKey: 'tweets', name: 'Tweets/Day', color: CHART_COLORS.emerald },
                        ]}
                        height={200}
                        showGrid={true}
                      />
                      <p className="text-center text-sm text-slate-400">100x increase in 30 days</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gold">Platform Usage</h4>
                      <div className="space-y-2">
                        {[
                          { platform: 'Facebook', usage: 90, country: 'Egypt & Tunisia' },
                          { platform: 'YouTube Views', usage: '5.5M', country: '23 videos' },
                          { platform: 'Twitter', usage: '3M+', country: 'tweets analyzed' },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <div>
                              <p className="font-medium text-slate-200">{item.platform}</p>
                              <p className="text-xs text-slate-400">{item.country}</p>
                            </div>
                            <span className="text-lg font-bold text-emerald">{item.usage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Human Cost */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Human Cost by Country</CardTitle>
                  <CardDescription>Deaths and displacement across the region</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={[
                      { name: 'Syria', value: 656493, color: CHART_COLORS.rose },
                      { name: 'Libya', value: 15000, color: CHART_COLORS.gold },
                      { name: 'Yemen', value: 2000, color: CHART_COLORS.orange },
                      { name: 'Egypt', value: 846, color: CHART_COLORS.gold },
                      { name: 'Others', value: 866, color: CHART_COLORS.platinum },
                    ]}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Post-Pandemic/Expo Tab - NEW ENHANCEMENT */}
        <TabsContent value="expo" className="space-y-6">
          <GlassPanel title="Post-Pandemic & Expo Era (2020-2023)" description="Comprehensive analysis from MD file 8-7">
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Expo 2020 Visits"
                  value="24.1M"
                  icon={<Building2 className="h-6 w-6" />}
                  gradient="gold"
                  status="success"
                />
                <MetricCard
                  title="COVID Recovery Rate"
                  value="~89%"
                  icon={<Shield className="h-6 w-6" />}
                  gradient="emerald"
                />
                <MetricCard
                  title="GDP Growth 2023"
                  value="3.6-4.3%"
                  icon={<TrendingUp className="h-6 w-6" />}
                  gradient="indigo"
                />
                <MetricCard
                  title="Non-Oil Growth"
                  value="9.9%"
                  icon={<DollarSign className="h-6 w-6" />}
                  gradient="denim"
                />
              </div>

              {/* Expo 2020 Dubai Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-gold" />
                    Expo 2020 Dubai KPIs
                  </CardTitle>
                  <CardDescription>Event performance metrics (Oct 2021 - Mar 2022)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { metric: 'Total Visits', value: '24.1 million', source: 'BIE' },
                      { metric: 'Duration', value: '182 days', source: 'BIE' },
                      { metric: 'Site Area', value: '438 hectares', source: 'Wikipedia' },
                      { metric: 'Participating Countries', value: '193', source: 'Wikipedia' },
                      { metric: 'Economic Impact (GVA)', value: 'Dh154.9B ($42.2B)', source: 'EY Report' },
                      { metric: 'International Visitors', value: '30.3%', source: 'BIE' },
                      { metric: 'School Visits', value: '1,000,000+', source: 'BIE' },
                      { metric: 'People of Determination', value: '107,000', source: 'BIE' },
                      { metric: 'Expo Live Impact', value: '5.8 million+', source: 'Official' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-gold/20 bg-slate-800/50 p-4"
                      >
                        <p className="text-sm text-slate-400">{item.metric}</p>
                        <p className="text-xl font-bold text-gold">{item.value}</p>
                        <p className="text-xs text-slate-500 mt-1">Source: {item.source}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* COVID Recovery Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald" />
                    COVID-19 Recovery Initiatives
                  </CardTitle>
                  <CardDescription>Federal economic support packages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { metric: 'Federal Initiatives', value: '33', target: 'Various', timeline: 'Approved Aug 2020' },
                      { metric: 'EDD Financial Support', value: 'AED 30B', target: '13,500 SMEs, 25,000 jobs', timeline: '2021-2025' },
                      { metric: 'Startup Investment Fund', value: 'AED 1B', target: 'Startups', timeline: 'Launch 2022' },
                      { metric: 'Operation 300bn', value: '+AED 167B', target: 'Industrial GDP', timeline: 'By 2031' },
                      { metric: 'Creative Economy Target', value: '5%', target: 'GDP contribution', timeline: 'By 2025' },
                      { metric: 'Recovery Rate', value: '~89%', target: 'COVID recovery', timeline: '2022' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-emerald/20 bg-slate-800/50 p-3"
                      >
                        <div>
                          <p className="font-medium text-slate-200">{item.metric}</p>
                          <p className="text-sm text-slate-400">Target: {item.target}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-emerald">{item.value}</p>
                          <p className="text-xs text-slate-500">{item.timeline}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Leadership Transition Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Landmark className="h-5 w-5 text-navy" />
                    Leadership Succession Timeline
                  </CardTitle>
                  <CardDescription>Key transitions 2022-2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { date: 'May 13, 2022', event: 'Sheikh Khalifa Death', detail: 'Age 73, 40 days mourning observed', significance: 'critical' },
                      { date: 'May 14, 2022', event: 'MBZ Elected President', detail: 'Federal Supreme Council election', significance: 'critical' },
                      { date: 'March 29, 2023', event: 'Sheikh Khaled Crown Prince', detail: 'MBZ\'s eldest son, age 41', significance: 'major' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4 rounded-lg border border-navy/30 bg-slate-800/50 p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/20 text-navy">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-slate-200">{item.event}</h4>
                            <Badge variant={item.significance === 'critical' ? 'gold' : 'denim'} className="text-xs">
                              {item.significance}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-400 mt-1">{item.date}</p>
                          <p className="text-sm text-slate-300 mt-1">{item.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* COP28 Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-cyan" />
                    COP28 Outcomes & Commitments
                  </CardTitle>
                  <CardDescription>UAE climate leadership (Nov-Dec 2023)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { metric: 'Fossil Fuel Language', value: '"Transitioning away"', target: 'Historic first' },
                      { metric: 'Renewables Target', value: '3x by 2030', target: 'Global Stocktake' },
                      { metric: 'Methane Commitment', value: 'Near-zero', target: 'Oil & gas sector' },
                      { metric: 'Emissions Reduction', value: '19% by 2030', target: 'UAE pledge' },
                      { metric: 'Mangrove Planting', value: '100 million', target: 'Environmental' },
                      { metric: 'Clean Energy Target', value: '30% by 2030', target: 'UAE commitment' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-cyan/20 bg-slate-800/50 p-4"
                      >
                        <p className="text-sm text-slate-400">{item.metric}</p>
                        <p className="text-lg font-bold text-cyan">{item.value}</p>
                        <p className="text-xs text-slate-500 mt-1">Target: {item.target}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border border-rose/30 bg-rose/10 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertOctagon className="h-4 w-4 text-rose" />
                      <span className="text-sm font-medium text-rose">Controversy Note</span>
                    </div>
                    <p className="text-sm text-slate-300">
                      Dr. Sultan Al Jaber "No Science" comment (Dec 3, 2023): &quot;There is no science out there... that says phase-out of fossil fuels is going to achieve 1.5°C.&quot; Over 130 US/EU lawmakers demanded removal.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Sanctions Evasion Section */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber" />
                    UAE-Russia Sanctions Evasion Dynamics
                  </CardTitle>
                  <CardDescription>Trade and sanctions data 2022-2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { metric: 'UAE-Russia Trade (2022)', value: '$9B (+68%)', source: 'Soufan Center' },
                      { metric: 'Russian Gold Import', value: '96.4 tons', source: '2022' },
                      { metric: 'Russian Oil Purchase', value: '$17B (39M tons)', source: 'Jan-Apr 2023' },
                      { metric: 'Russian Companies in UAE', value: '3,000', source: '2022' },
                      { metric: 'Sanctioned Property Owners', value: '38 individuals', source: 'Dubai property' },
                      { metric: 'Property Value', value: '$314M+', source: 'Putin-connected' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-amber/20 bg-slate-800/50 p-4"
                      >
                        <p className="text-sm text-slate-400">{item.metric}</p>
                        <p className="text-lg font-bold text-amber">{item.value}</p>
                        <p className="text-xs text-slate-500 mt-1">Source: {item.source}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border border-amber/30 bg-amber/10 p-4">
                    <p className="text-sm text-slate-300">
                      <span className="font-medium text-amber">FATF Grey List:</span> UAE added March 2022 for money laundering concerns. UAE designated &quot;country of focus&quot; for sanctions evasion by US.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 2023 Economic Performance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-gold" />
                    UAE 2023 Economic Performance
                  </CardTitle>
                  <CardDescription>GDP and sector growth metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { metric: 'GDP Growth', value: '3.6-4.3%', previous: '7.5% (2022)', change: '-3.2pp' },
                      { metric: 'Non-Oil Growth', value: '9.9%', previous: '6.2% national', change: 'Leading' },
                      { metric: 'Oil & Gas Growth', value: '-3.1%', previous: 'N/A', change: 'Declining' },
                      { metric: 'Financial Services', value: '+14.3%', previous: 'N/A', change: 'Strong' },
                      { metric: 'Transport & Logistics', value: '+11.5%', previous: 'N/A', change: 'Strong' },
                      { metric: 'Abu Dhabi GDP', value: 'AED 1.14T', previous: '10-year high', change: '+3.1%' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-gold/20 bg-slate-800/50 p-4"
                      >
                        <p className="text-sm text-slate-400">{item.metric}</p>
                        <p className="text-lg font-bold text-gold">{item.value}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-slate-500">Prev: {item.previous}</p>
                          <Badge variant={item.change === 'Declining' || item.change === '-3.2pp' ? 'destructive' : 'success'} className="text-xs">
                            {item.change}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border border-gold/30 bg-gold/10 p-4">
                    <p className="text-sm text-slate-300">
                      <span className="font-medium text-gold">Abu Dhabi GDP:</span> AED 1.14 trillion (10-year high) with 3.1% real GDP growth. Non-oil sector contributed &gt;53% of GDP.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Recent Era Tab - ENHANCED WITH MD 8-8 CONTENT */}
        <TabsContent value="recent-era" className="space-y-6">
          <GlassPanel title="Recent Era (2023-2026)" description="Comprehensive analysis from MD file 8-8">
            <div className="space-y-6">
              {/* Key Metrics for Recent Era */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                <MetricCard
                  title="BRICS Membership"
                  value="Jan 2024"
                  icon={<Globe className="h-6 w-6" />}
                  gradient="gold"
                  status="success"
                />
                <MetricCard
                  title="FATF Delisting"
                  value="Feb 2024"
                  icon={<Shield className="h-6 w-6" />}
                  gradient="emerald"
                />
                <MetricCard
                  title="Stock Market Cap"
                  value="$1T"
                  icon={<TrendingUp className="h-6 w-6" />}
                  gradient="indigo"
                />
                <MetricCard
                  title="US Defense Partner"
                  value="Sep 2024"
                  icon={<AlertCircle className="h-6 w-6" />}
                  gradient="navy"
                />
              </motion.div>

              {/* UAE 2024 Overview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gold" />
                    UAE 2024 Overview
                  </CardTitle>
                  <CardDescription>Major events and achievements from 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { metric: 'BRICS Membership', value: 'January 1, 2024', target: 'Strategic partnership', status: 'achieved' },
                      { metric: 'FATF Gray List', value: 'Removed Feb 23', target: 'Compliance', status: 'achieved' },
                      { metric: 'US Defense Partner', value: 'September 23', target: 'Strategic alliance', status: 'achieved' },
                      { metric: 'Stock Market Cap', value: '$1 trillion', target: 'First time milestone', status: 'achieved' },
                      { metric: 'CEPA Signings', value: '2 (Australia, Cambodia)', target: 'Trade diversification', status: 'achieved' },
                      { metric: 'Foreign Aid Total', value: '$98B since 1971', target: 'Humanitarian', status: 'ongoing' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-gold/20 bg-slate-800/50 p-4"
                      >
                        <p className="text-sm text-slate-400">{item.metric}</p>
                        <p className="text-lg font-bold text-gold">{item.value}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-slate-500">Target: {item.target}</p>
                          <Badge variant={item.status === 'achieved' ? 'emerald' : 'amber'} className="text-xs">
                            {item.status}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE 2025 Policies */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-emerald" />
                    UAE 2025 Major Policy Changes
                  </CardTitle>
                  <CardDescription>March 2025 policy reform package</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { metric: 'Federal Budget', value: 'AED 71.5B', context: 'Balanced', icon: Banknote },
                      { metric: 'Tourism Revenue', value: '$70B', context: 'Record level', icon: Globe },
                      { metric: 'Driving Age', value: '17 years', context: 'Reduced from 18', icon: Plane },
                      { metric: 'Salik Peak Toll', value: 'AED 6', context: '9AM-5PM', icon: Plane },
                      { metric: 'Super 98 Fuel', value: 'AED 2.73/L', context: 'Market-based', icon: Banknote },
                      { metric: 'Satellite Launch', value: 'Etihad-SAT', context: 'With South Korea', icon: Rocket },
                      { metric: 'CT Deadline', value: 'March 31', context: 'AED 1M+ earners', icon: DollarSign },
                      { metric: 'DEWA Billing', value: 'Cubic metres', context: 'From imperial gallons', icon: Globe },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -4 }}
                        className="rounded-lg border border-emerald/20 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <item.icon className="h-4 w-4 text-emerald" />
                          <p className="text-sm text-slate-400">{item.metric}</p>
                        </div>
                        <p className="text-xl font-bold text-emerald">{item.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{item.context}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE 2026 Changes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-cyan" />
                    UAE 2026 Major Changes
                  </CardTitle>
                  <CardDescription>Key policy and infrastructure updates for 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { metric: 'Etihad Rail', value: '11 cities', detail: '57 min Abu Dhabi-Dubai', target: '36.5M ridership by 2030' },
                      { metric: 'Air Taxis', value: '300+ km/h', detail: '200km range, 4+1 passengers', target: 'Dubai operations' },
                      { metric: 'SMS OTP Phase-out', value: 'Jan 6, 2026', detail: 'App-based required', target: 'Security upgrade' },
                      { metric: 'Single-use Plastics', value: 'Banned', detail: 'Jan 1, 2026', target: 'Environmental' },
                      { metric: 'Age of Maturity', value: '18 years', detail: 'Lowered from 21', target: 'Legal reform' },
                      { metric: 'Year of Family', value: '2026', detail: 'Presidential declaration', target: 'Active' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ x: 4 }}
                        className="rounded-lg border border-cyan/20 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-slate-200">{item.metric}</p>
                          <Badge variant="cyan" className="text-xs">{item.value}</Badge>
                        </div>
                        <p className="text-sm text-slate-400">{item.detail}</p>
                        <p className="text-xs text-cyan mt-1">Target: {item.target}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE Flood 2024 */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose" />
                    UAE Flood April 2024
                  </CardTitle>
                  <CardDescription>Heaviest rainfall in 75 years - crisis response</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {[
                      { metric: 'Deaths', value: '5', context: 'Multiple nationalities' },
                      { metric: 'Rainfall Record', value: '254.8mm', context: '24 hours at Al Ain' },
                      { metric: 'Insurance Losses', value: '$2.9-3.4B', context: 'Major event' },
                      { metric: 'Flights Cancelled', value: '1,244', context: '2-day period' },
                      { metric: 'Government Aid', value: '$544.6M', context: 'AED 2B recovery' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg border border-rose/20 bg-slate-800/50 p-3 text-center"
                      >
                        <p className="text-sm text-slate-400">{item.metric}</p>
                        <p className="text-xl font-bold text-rose">{item.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{item.context}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border border-rose/30 bg-rose/10 p-4">
                    <p className="text-sm text-slate-300">
                      <span className="font-medium text-rose">Scientific Analysis:</span> Lead author Basit Khan (NYU Abu Dhabi) identified cause as "Unusually warm Arabian Sea waters + Sudan low pressure + ITCZ". Warmer seas increased atmospheric moisture, intensified convective storms.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* COP28 Outcomes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-cyan" />
                    COP28 Outcomes (Nov-Dec 2023)
                  </CardTitle>
                  <CardDescription>Historic climate agreements and UAE leadership</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { metric: 'Fossil Fuel Language', value: 'Historic first', target: 'COP agreement' },
                      { metric: 'Loss/Damage Fund', value: '$661M pledged', target: 'Operational' },
                      { metric: 'Renewable Target', value: '3x by 2030', target: 'Global goal' },
                      { metric: 'Green Climate Fund', value: '$12.8B', target: 'Record pledges' },
                      { metric: 'Coal Phase-down', value: 'Agreed', target: 'COP agreement' },
                      { metric: 'Adaptation Framework', value: 'Agreed', target: 'Global Goal' },
                      { metric: 'ALTÉRRA', value: 'Climate fund', target: 'World largest' },
                      { metric: 'Lobbyist Attendance', value: '2,456', target: 'Controversy' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -4 }}
                        className="rounded-lg border border-cyan/20 bg-slate-800/50 p-4"
                      >
                        <p className="text-sm text-slate-400">{item.metric}</p>
                        <p className="text-lg font-bold text-cyan">{item.value}</p>
                        <p className="text-xs text-slate-500 mt-1">Target: {item.target}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* BRICS Membership */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-gold" />
                    UAE BRICS Membership
                  </CardTitle>
                  <CardDescription>Strategic diversification and emerging markets alignment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { metric: 'Membership Date', value: 'January 1, 2024', context: 'Official' },
                      { metric: 'GDP per Capita', value: '$81,676', context: 'Highest in bloc' },
                      { metric: 'HDI', value: '0.940', context: 'Highest in bloc' },
                      { metric: 'China Trade', value: '$64B (2022)', context: 'Largest partner' },
                      { metric: 'India Trade', value: '$84.5B (2022)', context: 'Largest partner' },
                      { metric: 'NDB Membership', value: 'October 2021', context: 'Pre-dates BRICS' },
                      { metric: 'US Response', value: 'Not a rival', context: 'White House view' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ x: 4 }}
                        className="rounded-lg border border-gold/20 bg-slate-800/50 p-3"
                      >
                        <p className="text-sm text-slate-400">{item.metric}</p>
                        <p className="text-lg font-bold text-gold">{item.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{item.context}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Corporate Tax */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-emerald" />
                    UAE Corporate Tax
                  </CardTitle>
                  <CardDescription>Tax rates and compliance requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { metric: 'Standard Rate', value: '9%', context: 'Lowest in GCC' },
                      { metric: 'Zero Rate Threshold', value: 'AED 375,000', context: 'Annual taxable income' },
                      { metric: 'Small Business Relief', value: 'AED 3M revenue', context: 'Qualifying threshold' },
                      { metric: 'DMTT Rate', value: '15%', context: 'For large MNEs' },
                      { metric: 'Registration Penalty', value: 'AED 10,000', context: 'Late registration' },
                      { metric: 'Lookback', value: 'Up to 15 years', context: 'From Jan 1, 2026' },
                      { metric: 'Filing Deadline', value: '9 months', context: 'Post financial year' },
                      { metric: 'Record Keeping', value: '7 years', context: 'Required' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg border border-emerald/20 bg-slate-800/50 p-3"
                      >
                        <p className="text-sm text-slate-400">{item.metric}</p>
                        <p className="text-lg font-bold text-emerald">{item.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{item.context}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 2026 Crises */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-rose" />
                    Operation Epic Fury - March 2026
                  </CardTitle>
                  <CardDescription>Regional tensions and UAE defense response</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {[
                      { metric: 'Ballistic Missiles', value: '250+', context: 'Intercepted 90%+' },
                      { metric: 'Drones', value: '1,400+', context: 'Threats faced' },
                      { metric: 'Cruise Missiles', value: '8', context: 'Threats faced' },
                      { metric: 'Nationalities', value: '200+', context: 'Diverse population' },
                      { metric: 'Trump-UAE Deal', value: '$500M', context: 'February 2026' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="rounded-lg border border-rose/20 bg-slate-800/50 p-3 text-center"
                      >
                        <p className="text-sm text-slate-400">{item.metric}</p>
                        <p className="text-xl font-bold text-rose">{item.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{item.context}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-rose/30 bg-rose/10 p-3">
                      <p className="text-sm font-medium text-rose mb-2">Defense Systems</p>
                      <div className="flex flex-wrap gap-2">
                        {['THAAD (US)', 'Patriot (US)', 'Cheongung II (Korea)', 'Barak-8 (Israel)'].map((sys, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{sys}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border border-emerald/30 bg-emerald/10 p-3">
                      <p className="text-sm font-medium text-emerald mb-2">Resilience Indicators</p>
                      <div className="flex flex-wrap gap-2">
                        {['Multi-layered air defense', '200+ nationalities united', 'Services maintained', 'Economy projected stable'].map((ind, i) => (
                          <Badge key={i} variant="outline" className="text-xs text-emerald border-emerald">{ind}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* We the UAE 2031 */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-gold" />
                    We the UAE 2031 Vision
                  </CardTitle>
                  <CardDescription>National strategic targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { kpi: 'GDP', baseline: 'AED 1.49T', target: 'AED 3T', growth: '+101%' },
                      { kpi: 'Tourism', baseline: '—', target: 'AED 450B', growth: 'New' },
                      { kpi: 'Foreign Trade', baseline: '—', target: 'AED 4T', growth: 'New' },
                      { kpi: 'HDI Rank', baseline: '—', target: 'Top 10', growth: 'Global' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -4 }}
                        className="rounded-lg border border-gold/20 bg-slate-800/50 p-4"
                      >
                        <p className="text-sm text-slate-400">{item.kpi}</p>
                        <div className="flex items-end gap-2 mt-1">
                          <p className="text-lg font-bold text-gold">{item.target}</p>
                          <Badge variant="emerald" className="text-xs">{item.growth}</Badge>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Baseline: {item.baseline}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border border-gold/30 bg-gold/10 p-4">
                    <p className="text-sm text-slate-300">
                      <span className="font-medium text-gold">Four Pillars:</span> Forward Society | Forward Economy | Forward Diplomacy | Forward Ecosystem
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment Summary */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-navy" />
                    Sentiment Analysis Summary
                  </CardTitle>
                  <CardDescription>Topic-level sentiment from Recent Era</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { topic: 'UAE 2024 General', sentiment: 'Positive', volatility: 'Low', tone: 'Celebratory, achievement-focused' },
                      { topic: 'UAE 2025 Policy Changes', sentiment: 'Neutral-Positive', volatility: 'Low', tone: 'Reform-oriented' },
                      { topic: 'UAE 2026 Changes', sentiment: 'Neutral', volatility: 'Medium', tone: 'Practical, adaptative' },
                      { topic: 'UAE Flood April 2024', sentiment: 'Negative', volatility: 'High', tone: 'Crisis coverage, then recovery' },
                      { topic: 'COP28 Outcomes', sentiment: 'Mixed', volatility: 'High', tone: 'Historic yet criticized' },
                      { topic: 'UAE BRICS Membership', sentiment: 'Positive', volatility: 'Low', tone: 'Diplomatic achievement' },
                      { topic: 'UAE Gaza Response', sentiment: 'Diplomatic', volatility: 'High', tone: 'Measured, humanitarian' },
                      { topic: 'We the UAE 2031', sentiment: 'Very Positive', volatility: 'Low', tone: 'Visionary, aspirational' },
                      { topic: 'UAE 2026 Crises', sentiment: 'Negative', volatility: 'Very High', tone: 'Threat-focused' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                      >
                        <div className="w-40">
                          <p className="font-medium text-slate-200 text-sm">{item.topic}</p>
                        </div>
                        <div className="flex-1">
                          <Badge
                            variant={
                              item.sentiment === 'Positive' || item.sentiment === 'Very Positive' ? 'emerald' :
                              item.sentiment === 'Negative' ? 'rose' : 'amber'
                            }
                            className="text-xs"
                          >
                            {item.sentiment}
                          </Badge>
                        </div>
                        <div className="w-20 text-center">
                          <p className="text-xs text-slate-400">Volatility</p>
                          <p className="text-sm font-medium text-slate-300">{item.volatility}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-slate-400">Tone</p>
                          <p className="text-sm text-slate-300">{item.tone}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Analysis Tab - NEW ENHANCEMENT */}
        <TabsContent value="analysis" className="space-y-6">
          <GlassPanel title="Sentiment & Controversy Analysis" description="Topic-level sentiment from MD file 8-7">
            <div className="space-y-6">
              {/* Sentiment Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-gold" />
                    Sentiment Analysis Matrix
                  </CardTitle>
                  <CardDescription>Topic-level sentiment scores (-5 to +5)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { topic: 'Expo 2020', sentiment: '+4.2', narrative: 'Historic achievement, economic success', color: CHART_COLORS.emerald },
                      { topic: 'Post-COVID Recovery', sentiment: '+3.8', narrative: 'Resilient, well-managed', color: CHART_COLORS.gold },
                      { topic: 'MBZ Succession', sentiment: '+1.5', narrative: 'Effective leadership, concerns', color: CHART_COLORS.navy },
                      { topic: 'COP28 Presidency', sentiment: '-2.8', narrative: 'Controversy, industry ties', color: CHART_COLORS.rose },
                      { topic: 'Sanctions Evasion', sentiment: '-3.5', narrative: 'Complicity, US tensions', color: CHART_COLORS.rose },
                      { topic: '2023 Economy', sentiment: '+4.5', narrative: 'Record growth, diversification', color: CHART_COLORS.emerald },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="w-32">
                          <p className="font-medium text-slate-200">{item.topic}</p>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                width: `${(parseFloat(item.sentiment) + 5) * 10}%`,
                                backgroundColor: item.color,
                                minWidth: '10%',
                              }}
                            />
                            <span
                              className="text-lg font-bold"
                              style={{ color: item.color }}
                            >
                              {item.sentiment}
                            </span>
                          </div>
                        </div>
                        <div className="w-64">
                          <p className="text-sm text-slate-400">{item.narrative}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Controversy Scores */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertOctagon className="h-5 w-5 text-rose" />
                    Topic Controversy Scores
                  </CardTitle>
                  <CardDescription>Controversy intensity ratings (0-10)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { topic: 'Sultan Al Jaber COP28', score: 9, issues: 'Dual role, "no science" comment, PR campaign' },
                      { topic: 'UAE-Russia Sanctions', score: 8, issues: 'Evasion methods, gold/oil trade, US tensions' },
                      { topic: 'MBZ Succession Centralization', score: 6, issues: 'Bani Fatima control, Dubai authority dilution' },
                      { topic: 'Expo 2020 Criticisms', score: 3, issues: 'Human rights, worker conditions' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-rose/20 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-200">{item.topic}</h4>
                          <Badge
                            variant="destructive"
                            className="text-xs"
                          >
                            {item.score}/10
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-400">{item.issues}</p>
                        <div className="mt-2 h-2 w-full rounded-full bg-slate-700">
                          <div
                            className="h-2 rounded-full bg-rose"
                            style={{ width: `${item.score * 10}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Source Credibility Summary */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-navy" />
                    Source Credibility Matrix
                  </CardTitle>
                  <CardDescription>Research data quality assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { tier: 'Tier 1 - Very High', sources: 'BIE, UAE Gov, SCAD, MBZ Official', count: 6, color: 'emerald' },
                      { tier: 'Tier 2 - High', sources: 'World Bank, IMF, UNFCCC', count: 4, color: 'cyan' },
                      { tier: 'Tier 3 - Medium-High', sources: 'BBC, Reuters, Al Jazeera', count: 5, color: 'gold' },
                      { tier: 'Tier 4 - Medium', sources: 'Soufan Center, EIU, Washington Institute', count: 4, color: 'amber' },
                      { tier: 'Tier 5 - Variable', sources: 'Middle East Eye, The Intercept', count: 2, color: 'rose' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                      >
                        <Badge
                          variant="outline"
                          className={`text-${item.color} border-${item.color}`}
                        >
                          {item.count}
                        </Badge>
                        <div className="flex-1">
                          <p className="font-medium text-slate-200">{item.tier}</p>
                          <p className="text-sm text-slate-400">{item.sources}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border border-navy/30 bg-navy/10 p-4">
                    <p className="text-sm text-slate-300">
                      <span className="font-medium text-navy">Total Sources:</span> 45+ documented | <span className="font-medium text-navy">Total Data Points:</span> 250+
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Key Entity Registry */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users2 className="h-5 w-5 text-gold" />
                    Entity Registry Summary
                  </CardTitle>
                  <CardDescription>Key entities from MD file 8-7</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {[
                        { category: 'Royal Family', entities: ['Sheikh Khalifa bin Zayed (deceased May 2022)', 'Sheikh Mohamed bin Zayed Al Nahyan (MBZ)', 'Sheikh Khaled bin Mohamed bin Zayed (Crown Prince)', 'Sheikh Tahnoon bin Zayed (ADIA head, $800B+)'] },
                        { category: 'Government Entities', entities: ['Ministry of Presidential Affairs', 'Federal Supreme Council', 'Statistics Centre Abu Dhabi (SCAD)', 'National COVID-19 Crisis Recovery Committee'] },
                        { category: 'Corporate/State', entities: ['Abu Dhabi National Oil Company (Adnoc)', 'Masdar', 'Abu Dhabi Investment Authority (ADIA)', 'Mubadala Investment Company'] },
                        { category: 'Events', entities: ['Expo 2020 Dubai (Oct 2021-Mar 2022)', 'Sheikh Khalifa Death (May 13, 2022)', 'MBZ Presidential Succession (May 14, 2022)', 'COP28 (Nov-Dec 2023)'] },
                        { category: 'Sanctioned Individuals', entities: ['Roman Abramovich - Palm Jumeirah property', 'Vladimir Potanin - Sanctioned', 'Andrei Skoch - Dubai superyacht', 'Alexander Abramov - Sanctioned'] },
                      ].map((section, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="rounded-lg border border-slate-700 bg-slate-800/30 p-3"
                        >
                          <h4 className="font-semibold text-gold mb-2">{section.category}</h4>
                          <ul className="space-y-1">
                            {section.entities.map((entity, i) => (
                              <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                                <span className="text-gold">-</span>
                                {entity}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
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
