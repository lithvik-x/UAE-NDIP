
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
  BarChart,
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
  TrendingDown,
  Building,
  Flame,
  Crosshair,
  Flag,
  Target,
  Database,
  Map,
  Activity,
  ChevronRight,
  Sword,
  Banknote,
  Scale,
  Droplets,
  Radio,
  DollarSign,
  Cpu,
  Globe2,
  Tent,
  Heart,
  Landmark,
  ScrollText,
  Siren,
  Search,
} from 'lucide-react'
import {
  useGeopoliticalCrisisData,
} from '@/lib/data-loader'
import { motion } from 'framer-motion'

// ============================================================================
// CYCLE 1: DATA EXTRACTION FROM MD FILE 4-2
// All data below is extracted from: 4-2-geopolitical-crisis-results.md
// ============================================================================

// --- Yemen Casualties by Year (Table 5 from MD) ---
const yemenCasualtiesByYear = [
  { year: '2015', incidents: 20, deaths: 500 },
  { year: '2016', incidents: 25, deaths: 400 },
  { year: '2017', incidents: 20, deaths: 250 },
  { year: '2018', incidents: 15, deaths: 200 },
  { year: '2019', incidents: 10, deaths: 150 },
  { year: '2020', incidents: 5, deaths: 50 },
]

// --- UAE Military Operations by Country (Table 1 from MD) ---
const militaryOperations = [
  { operation: 'Yemen Coalition', country: 'Yemen', start: 2015, end: 2025, status: 'Withdrawn', casualties: '19,200+' },
  { operation: 'Libya Support', country: 'Libya', start: 2011, end: 'Ongoing', status: 'Active', casualties: 'N/A' },
  { operation: 'RSF Backing', country: 'Sudan', start: 2023, end: 'Ongoing', status: 'Denied', casualties: 'N/A' },
  { operation: 'Somalia Training', country: 'Somalia', start: 2014, end: 2018, status: 'Suspended', casualties: '4 UAE KIA' },
  { operation: 'Assab Base', country: 'Eritrea', start: 2015, end: 2021, status: 'Withdrawn', casualties: 'N/A' },
]

// --- UAE Foreign Aid Commitments (Table 2 from MD) ---
const aidCommitments = [
  { recipient: 'Yemen', amount: 8, type: 'Humanitarian', period: '2015-2025' },
  { recipient: 'Yemen Dev', amount: 7, type: 'Development', period: '2015-2025' },
  { recipient: 'Syria', amount: 28, type: 'Investment', period: '2025-2026' },
  { recipient: 'Gaza', amount: 1, type: 'Pledged', period: '2025+' },
  { recipient: 'Lebanon', amount: 0, type: 'Conditional', period: 'Various' },
]

// --- UAE Gold Import Volumes (Table 3 from MD) ---
const goldImports = [
  { year: '2022', russia: 96.4, sudan: 0 },
  { year: '2023', russia: 41, sudan: 17 },
  { year: '2024', russia: 66, sudan: 29, africa: 748, global: 1392 },
  { year: 'H1 2025', russia: 0, sudan: 0, note: '90% Sudan exports' },
]

// --- China-UAE-US Triangle Metrics (Table 4 from MD) ---
const chinaUaeUsMetrics = [
  { metric: 'China-UAE Trade', value: 82, year: 2023 },
  { metric: 'India-UAE Trade', value: 84.5, year: 2023 },
  { metric: 'Microsoft-G42 Deal', value: 1.5, year: 2024 },
  { metric: 'Nvidia Chips', value: 35, year: 2025 },
]

// --- Regional Conflict Sentiment (Section 14 from MD) ---
const regionalSentiment = [
  { country: 'Yemen', sentiment: 'Highly Negative', intensity: -9, color: CHART_COLORS.rose },
  { country: 'Libya', sentiment: 'Highly Negative', intensity: -8, color: CHART_COLORS.orange },
  { country: 'Sudan', sentiment: 'Highly Negative', intensity: -8, color: CHART_COLORS.orange },
  { country: 'Somalia', sentiment: 'Negative', intensity: -6, color: CHART_COLORS.gold },
  { country: 'Eritrea', sentiment: 'Neutral', intensity: 0, color: CHART_COLORS.platinum },
  { country: 'Syria', sentiment: 'Mixed', intensity: 2, color: CHART_COLORS.navy },
  { country: 'Gaza', sentiment: 'Mixed', intensity: 3, color: CHART_COLORS.navy },
  { country: 'Lebanon', sentiment: 'Neutral', intensity: 0, color: CHART_COLORS.platinum },
]

// --- UAE Relevance Scores (Section 15 from MD) ---
const relevanceScores = [
  { topic: 'Yemen War/Withdrawal', score: 10, impact: 'Strategic shift' },
  { topic: 'Sudan RSF/Gold', score: 10, impact: 'International pressure' },
  { topic: 'Libya Arms', score: 9, impact: 'UN sanctions issue' },
  { topic: 'G42/AI Chips', score: 9, impact: 'US-China tension' },
  { topic: 'China Base Suspicion', score: 9, impact: 'US relationship risk' },
  { topic: 'Somalia Relations', score: 8, impact: 'Regional influence loss' },
  { topic: 'Syria Reconstruction', score: 8, impact: 'Post-Assad opportunity' },
  { topic: 'Gaza Reconstruction', score: 8, impact: 'Regional influence' },
]

// --- Source Tier Distribution ---
const sourceTierDistribution = [
  { name: 'Government/Intergov', value: 5, color: CHART_COLORS.navy },
  { name: 'Think Tanks', value: 10, color: CHART_COLORS.denim },
  { name: 'NGOs', value: 5, color: CHART_COLORS.teal },
  { name: 'News/Media', value: 10, color: CHART_COLORS.platinum },
]

// --- Great Power Positioning ---
const greatPowerPositioning = [
  { domain: 'US-China', position: 'Multi-alignment', sentiment: 'Strategic', icon: Globe2 },
  { domain: 'BRICS', position: 'Member since Aug 2023', sentiment: 'Positive', icon: Landmark },
  { domain: 'Russia', position: 'Sanctions pathway', sentiment: 'Negative', icon: Shield },
  { domain: 'AI/G42', position: 'Tech hub target', sentiment: 'Mixed', icon: Cpu },
  { domain: 'Nuclear', position: 'Concerned about Iran', sentiment: 'Tense', icon: Radio },
]

// ============================================================================
// CYCLE 2: HELPER FUNCTIONS
// ============================================================================

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
    case 'ongoing': case 'active': return 'text-rose-400'
    case 'denied': return 'text-orange-400'
    case 'suspended': case 'severed': return 'text-orange-400'
    default: return 'text-platinum-400'
  }
}

const getIntensityBar = (intensity: number) => {
  const absIntensity = Math.abs(intensity)
  const color = intensity < 0 ? 'bg-rose-500' : intensity > 0 ? 'bg-emerald-500' : 'bg-platinum-500'
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-2 bg-platinum-700 rounded-full overflow-hidden">
        <div className={color} style={{ width: `${(absIntensity / 10) * 100}%` }} />
      </div>
      <span className="text-xs text-platinum-400">{intensity > 0 ? '+' : ''}{intensity}</span>
    </div>
  )
}

const getRelevanceColor = (score: number) => {
  if (score >= 9) return 'text-rose-400'
  if (score >= 7) return 'text-orange-400'
  if (score >= 5) return 'text-gold-400'
  return 'text-platinum-400'
}

// ============================================================================
// CYCLE 3: MAIN PAGE COMPONENT
// ============================================================================

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
  const stakeholderImpacts = data.stakeholderImpact || []
  const responseMetrics = data.responseMetrics

  // Radar chart data for sentiment by conflict
  const sentimentRadarData = regionalSentiment.map(r => ({
    country: r.country,
    intensity: Math.abs(r.intensity),
    sentiment: r.intensity > 0 ? 1 : r.intensity < 0 ? -1 : 0,
  }))

  // Aid pie chart data
  const aidPieData = [
    { name: 'Yemen Humanitarian', value: 8, color: CHART_COLORS.rose },
    { name: 'Yemen Development', value: 7, color: CHART_COLORS.orange },
    { name: 'Syria Reconstruction', value: 28, color: CHART_COLORS.navy },
    { name: 'Gaza Reconstruction', value: 1, color: CHART_COLORS.teal },
  ]

  // Gold trade area data
  const goldAreaData = [
    { year: '2022', russia: 96.4, sudan: 0 },
    { year: '2023', russia: 41, sudan: 17 },
    { year: '2024', russia: 66, sudan: 29 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* CYCLES 1-3: ANIMATED HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="denim" className="mb-2">GEOPOLITICAL</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy-500">Geopolitical Crises</h1>
          <p className="mt-2 text-platinum-400">
            UAE involvement in regional conflicts, great power competition, and diplomatic dynamics (1971-2026)
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-rose-500/50 text-rose-500 hover:bg-rose-500/10">
            <Globe className="h-4 w-4" />
            Regional Intel
          </Button>
          <Button className="bg-gradient-to-r from-rose-600 to-orange-600 hover:opacity-90 text-white gap-2">
            <Zap className="h-4 w-4" />
            Escalate
          </Button>
        </div>
      </motion.div>

      {/* KEY METRICS - 6 from MD data */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
          <MetricCard title="Queries Executed" value="36" icon={<Search className="h-5 w-5" />} gradient="navy" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}>
          <MetricCard title="Data Points" value="500+" icon={<Database className="h-5 w-5" />} gradient="navy" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <MetricCard title="Source Domains" value="30+" icon={<Globe className="h-5 w-5" />} gradient="denim" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }}>
          <MetricCard title="Conflict Zones" value="10+" icon={<Map className="h-5 w-5" />} gradient="cyan" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
          <MetricCard title="Total Aid Committed" value="$98B" icon={<Heart className="h-5 w-5" />} gradient="emerald" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35 }}>
          <MetricCard title="Alert Level" value="RED" icon={<Siren className="h-5 w-5" />} gradient="rose" status="error" />
        </motion.div>
      </div>

      {/* CYCLES 3-4: ENHANCED TABS */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="yemen">Yemen</TabsTrigger>
          <TabsTrigger value="regional">Regional</TabsTrigger>
          <TabsTrigger value="greatpower">Great Power</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Geopolitical Crisis Overview" description="UAE regional conflict involvement summary (MD 4-2)">
            <div className="space-y-6">
              {/* Sentiment Radar + Aid Distribution */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Activity className="h-5 w-5 text-rose-400" />
                      Conflict Sentiment Intensity
                    </CardTitle>
                    <CardDescription>Sentiment by region (-10 to +10 scale)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={regionalSentiment}
                      xAxisKey="country"
                      bars={[{ dataKey: 'intensity', name: 'Intensity', color: CHART_COLORS.rose }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Heart className="h-5 w-5 text-rose-400" />
                      UAE Aid Distribution ($ Billions)
                    </CardTitle>
                    <CardDescription>Foreign aid by recipient (2015-2026)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart data={aidPieData} height={280} showLegend={true} />
                  </CardContent>
                </Card>
              </div>

              {/* Gold Trade Volume */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Banknote className="h-5 w-5 text-gold-400" />
                    UAE Gold Import Volumes (Tonnes)
                  </CardTitle>
                  <CardDescription>Russia & Sudan gold imports via UAE (2022-2024)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={goldAreaData}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'russia', name: 'Russia', color: CHART_COLORS.platinum },
                      { dataKey: 'sudan', name: 'Sudan', color: CHART_COLORS.gold },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Relevance Scores */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-orange-400" />
                    UAE Relevance Assessment (Critical Issues)
                  </CardTitle>
                  <CardDescription>Strategic importance scores by topic (1-10)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={relevanceScores}
                    xAxisKey="topic"
                    bars={[{ dataKey: 'score', name: 'Score', color: CHART_COLORS.orange }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Source Tier Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Crosshair className="h-5 w-5 text-navy-400" />
                    Source Credibility Distribution
                  </CardTitle>
                  <CardDescription>Research sources by tier (30+ domains)</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart data={sourceTierDistribution} height={250} showLegend={true} />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* YEMEN TAB */}
        <TabsContent value="yemen" className="space-y-6">
          <GlassPanel title="Yemen Conflict Analysis" description="UAE military involvement, casualties, and withdrawal (2015-2026)">
            <div className="space-y-6">
              {/* Yemen Key Metrics */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  <MetricCard title="Civilian Casualties" value="19,200+" icon={<Users className="h-5 w-5" />} gradient="rose" status="error" />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
                  <MetricCard title="Coalition Airstrikes" value="25,000+" icon={<Flame className="h-5 w-5" />} gradient="rose" status="error" />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  <MetricCard title="Displaced Persons" value="4.5M+" icon={<Users className="h-5 w-5" />} gradient="orange" />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
                  <MetricCard title="Humanitarian Aid" value="$8B" icon={<Heart className="h-5 w-5" />} gradient="emerald" />
                </motion.div>
              </div>

              {/* Casualties by Year */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-rose-400" />
                    Yemen Civilian Casualties by Year
                  </CardTitle>
                  <CardDescription>Documented incidents and deaths (2015-2020)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={yemenCasualtiesByYear}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'incidents', name: 'Incidents', color: CHART_COLORS.rose },
                      { dataKey: 'deaths', name: 'Deaths', color: CHART_COLORS.orange },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Yemen Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ScrollText className="h-5 w-5 text-navy-400" />
                    UAE-Yemen Relations Timeline (1971-2026)
                  </CardTitle>
                  <CardDescription>Key diplomatic and military events</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="relative border-l-2 border-rose-500/50 pl-6 space-y-4">
                      {[
                        { date: '1971', event: 'Relations Established', detail: 'UAE independence year' },
                        { date: 'Nov 21, 1972', event: 'First Official Visit', detail: 'Zayed bin Sultan Al Nahyan to Yemen' },
                        { date: 'Dec 21, 1986', event: 'Ma\'rib Dam Inauguration', detail: 'UAE-financed project' },
                        { date: 'Mar 2015', event: 'Coalition Intervention', detail: 'UAE joins Saudi-led campaign' },
                        { date: 'Apr 30, 2018', event: 'Socotra Seizure', detail: 'UAE military operation' },
                        { date: 'Jun 2019', event: 'Combat Operations End', detail: 'Major combat withdrawal announced' },
                        { date: 'Dec 30, 2025', event: 'Final Withdrawal', detail: 'Complete military pullout' },
                        { date: 'Jan 9, 2026', event: 'STC Dissolution', detail: 'After leader fled to UAE' },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="relative"
                        >
                          <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-rose-500 border-2 border-platinum-900" />
                          <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3 hover:bg-platinum-800/70 transition-colors">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-semibold text-platinum-200">{item.event}</p>
                              <Badge variant="outline" className="text-xs">{item.date}</Badge>
                            </div>
                            <p className="text-sm text-platinum-400">{item.detail}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* STC & Socotra */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Flag className="h-5 w-5 text-orange-400" />
                      Southern Transitional Council (STC)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Formation', value: 'May 11, 2017 with UAE backing' },
                        { label: 'Leader', value: 'Aidarus al-Zoubaidi' },
                        { label: 'Offensive', value: 'December 2025' },
                        { label: 'Dissolution', value: 'January 9, 2026' },
                        { label: 'UAE Role', value: 'Primary backer throughout conflict' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                          <span className="text-platinum-400 text-sm">{item.label}</span>
                          <span className="text-platinum-200 text-sm font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Map className="h-5 w-5 text-cyan-400" />
                      UAE Military Positions in Yemen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-2">
                        {[
                          { location: 'Socotra Island', facility: 'Military base', detail: 'Intelligence collection' },
                          { location: 'Mayun Island', facility: 'Air base', detail: '5 sq miles, contested' },
                          { location: 'Mukalla', facility: 'Military presence', detail: 'Port and airport' },
                          { location: 'Riyan Airport', facility: 'Presence', detail: '' },
                          { location: 'Al-Dhabba Port', facility: 'Presence', detail: '' },
                          { location: 'Abd al-Kuri', facility: 'Airbase', detail: '2.41km runway' },
                          { location: 'Samhah', facility: 'Airstrip', detail: 'Completed April 2025' },
                        ].map((loc, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded bg-platinum-800/50 p-2">
                            <div className="flex items-center gap-2">
                              <Map className="h-3 w-3 text-cyan-400" />
                              <span className="text-platinum-200 text-sm">{loc.location}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">{loc.facility}</Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Secret Prisons */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <AlertTriangle className="h-5 w-5" />
                    UAE Secret Prisons in Yemen
                  </CardTitle>
                  <CardDescription>Documented human rights violations (AP, BBC, HRW)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'First Documented', value: 'June 2017' },
                      { label: 'Sites Documented', value: '18+' },
                      { label: 'Key Location', value: 'Balhaf' },
                      { label: 'UN Requested', value: 'Intervention (2020)' },
                    ].map((item, idx) => (
                      <div key={idx} className="rounded bg-rose-500/10 p-3 border border-rose-500/30">
                        <p className="text-xs text-platinum-400">{item.label}</p>
                        <p className="text-lg font-bold text-rose-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* REGIONAL TAB */}
        <TabsContent value="regional" className="space-y-6">
          <GlassPanel title="Regional Conflict Analysis" description="UAE involvement across Middle East conflicts">
            <div className="space-y-6">
              {/* Military Operations Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sword className="h-5 w-5 text-rose-400" />
                    UAE Military Operations by Country
                  </CardTitle>
                  <CardDescription>Operations timeline and status (Table 1 from MD)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {militaryOperations.map((op, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50"
                        >
                          <div className="flex items-center gap-3">
                            <Flag className={`h-4 w-4 ${getStatusColor(op.status)}`} />
                            <div>
                              <p className="font-medium text-platinum-200">{op.operation}</p>
                              <p className="text-xs text-platinum-400">{op.country} | {op.start}-{op.end}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className={`text-xs ${getStatusColor(op.status)}`}>{op.status}</Badge>
                            <span className="text-xs text-platinum-400">{op.casualties}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Libya - Sudan */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Plane className="h-5 w-5 text-orange-400" />
                      Libya - Arms to Haftar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Flights (Jan-Apr 2020)', value: '150+' },
                        { label: 'Weapons Shipments', value: '100+' },
                        { label: 'UN Finding', value: 'Repeated non-compliance' },
                        { label: 'Oil Deal (Jan 2026)', value: '$20B+ (TotalEnergies)' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                          <span className="text-platinum-400 text-sm">{item.label}</span>
                          <span className="text-platinum-200 text-sm font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Banknote className="h-5 w-5 text-gold-400" />
                      Sudan - Gold & Weapons
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Sudan Gold 2024', value: '29 tonnes' },
                        { label: 'RSF Dead', value: '100,000+' },
                        { label: 'Displaced', value: '12 million' },
                        { label: 'GB50A Bombs', value: 'Documented March 2025' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                          <span className="text-platinum-400 text-sm">{item.label}</span>
                          <span className="text-platinum-200 text-sm font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Somalia & Eritrea */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Tent className="h-5 w-5 text-gold-400" />
                      Somalia - Relations Severed
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Training Start', value: '2012 (Puntland)' },
                        { label: 'Attack (Feb 2024)', value: '3 UAE soldiers KIA' },
                        { label: 'Relations Severed', value: 'January 2026' },
                        { label: 'Cancelled', value: 'All defense/port agreements' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                          <span className="text-platinum-400 text-sm">{item.label}</span>
                          <span className="text-platinum-200 text-sm font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Map className="h-5 w-5 text-platinum-400" />
                      Eritrea - Assab Base Withdrawn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Base Established', value: '2015' },
                        { label: 'Operations', value: '2015-2021' },
                        { label: 'Purpose', value: 'Yemen war logistics hub' },
                        { label: 'Status', value: 'Withdrawn' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                          <span className="text-platinum-400 text-sm">{item.label}</span>
                          <span className="text-platinum-200 text-sm font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Syria & Gaza */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Building className="h-5 w-5 text-navy-400" />
                      Syria - Reconstruction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Assad Visit', value: 'March 2022' },
                        { label: 'Arab League', value: 'Reinstated May 2023' },
                        { label: 'Total Investment', value: '$28B+' },
                        { label: 'Damascus Metro', value: '$2B (National Invest)' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                          <span className="text-platinum-400 text-sm">{item.label}</span>
                          <span className="text-platinum-200 text-sm font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Heart className="h-5 w-5 text-rose-400" />
                      Gaza - Reconstruction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Ceasefire', value: 'Jan 19, 2025' },
                        { label: 'Armistice Ended', value: 'Feb 18, 2025' },
                        { label: 'UAE Pledge', value: '$1B+' },
                        { label: 'Stabilization Force', value: 'Refused (Nov 2025)' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                          <span className="text-platinum-400 text-sm">{item.label}</span>
                          <span className="text-platinum-200 text-sm font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* GERD */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-cyan-400" />
                    Grand Ethiopian Renaissance Dam (GERD)
                  </CardTitle>
                  <CardDescription>5.15 GW capacity, $5B+ cost, opened September 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {[
                      { label: 'Height', value: '145 m' },
                      { label: 'Capacity', value: '5.15 GW' },
                      { label: 'Reservoir', value: '74B m³' },
                      { label: 'Cost', value: '$5B+' },
                      { label: 'Opened', value: 'Sep 2025' },
                    ].map((item, idx) => (
                      <div key={idx} className="rounded bg-cyan-500/10 p-3 border border-cyan-500/30 text-center">
                        <p className="text-xs text-platinum-400">{item.label}</p>
                        <p className="text-lg font-bold text-cyan-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* GREAT POWER TAB */}
        <TabsContent value="greatpower" className="space-y-6">
          <GlassPanel title="Great Power Competition" description="UAE positioning in US-China-Russia dynamics">
            <div className="space-y-6">
              {/* Great Power Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {greatPowerPositioning.map((gp, idx) => (
                  <motion.div
                    key={gp.domain}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:border-navy-500/50 transition-colors"
                  >
                    <gp.icon className="h-6 w-6 text-navy-400 mb-2" />
                    <p className="font-semibold text-platinum-200">{gp.domain}</p>
                    <p className="text-xs text-platinum-400 mt-1">{gp.position}</p>
                    <Badge variant="outline" className={`text-xs mt-2 ${gp.sentiment === 'Negative' ? 'border-rose-500/50 text-rose-400' : gp.sentiment === 'Positive' ? 'border-emerald-500/50 text-emerald-400' : 'border-navy-500/50 text-navy-300'}`}>
                      {gp.sentiment}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* China-UAE Trade */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-rose-400" />
                    China-UAE-US Triangle Metrics
                  </CardTitle>
                  <CardDescription>Trade volumes and strategic investments (Table 4 from MD)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={chinaUaeUsMetrics}
                    xAxisKey="metric"
                    bars={[{ dataKey: 'value', name: 'Value ($ Billions or Units)', color: CHART_COLORS.navy }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* China Base Suspicion Timeline */}
              <Card className="glass-card border-orange-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-orange-400">
                    <AlertTriangle className="h-5 w-5" />
                    China Military Base Suspicion - Khalifa Port
                  </CardTitle>
                  <CardDescription>Timeline of reports and US intelligence warnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {[
                        { date: '2020', event: 'Intelligence flagged suspicious activity at Khalifa Port' },
                        { date: '2021', event: 'WSJ report: China building military port near Abu Dhabi' },
                        { date: 'Nov 2021', event: 'Construction abandoned after US intelligence warning' },
                        { date: 'Apr 2023', event: 'Construction resumed at suspected site' },
                        { date: '2025', event: 'US intelligence: Chinese military hosted at UAE facility' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded bg-orange-500/10 p-3 border border-orange-500/20">
                          <Badge variant="outline" className="text-xs shrink-0">{item.date}</Badge>
                          <p className="text-sm text-platinum-200">{item.event}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* G42 & AI */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-cyan-400" />
                    G42 / Semiconductor & AI Strategy
                  </CardTitle>
                  <CardDescription>UAE tech positioning in US-China competition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'Founded', value: '2018' },
                      { label: 'Chair', value: 'Sheikh Tahnoun bin Zayed' },
                      { label: 'Microsoft Deal', value: '$1.5B (Apr 2024)' },
                      { label: 'Nvidia Chips', value: '35,000 approved' },
                      { label: 'AI GDP Target', value: '$91B by 2031' },
                      { label: 'Non-oil GDP Target', value: '20% by 2031' },
                      { label: 'US Classification', value: 'D:4 Control List' },
                      { label: 'Divestment', value: 'ByteDance, xFusion (2023)' },
                    ].map((item, idx) => (
                      <div key={idx} className="rounded bg-cyan-500/10 p-3 border border-cyan-500/30">
                        <p className="text-xs text-platinum-400">{item.label}</p>
                        <p className="text-sm font-bold text-cyan-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* BRICS & De-dollarization */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-emerald-400" />
                    BRICS & De-dollarization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { label: 'Membership Invitation', value: 'August 24, 2023 (Johannesburg Summit)' },
                      { label: 'BRICS Representation', value: '46% world population, 1/3+ global GDP' },
                      { label: 'UAE Goal', value: 'Double GDP to $800B+ by 2030' },
                      { label: 'UAE-India Trade', value: '$84.5B (2022-23)' },
                      { label: 'De-dollarization', value: 'UAE-India oil trade in local currencies (Nov 2023)' },
                      { label: 'XRP Trade', value: 'UAE-India oil using XRP (May 2025, reported)' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between rounded bg-emerald-500/10 p-2 border border-emerald-500/20">
                        <span className="text-platinum-400 text-sm">{item.label}</span>
                        <span className="text-emerald-300 text-sm font-medium text-right max-w-[50%]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Russia Sanctions Evasion */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <Scale className="h-5 w-5" />
                    Russia Sanctions Evasion via UAE
                  </CardTitle>
                  <CardDescription>Gold trade as sanctions pathway (2022-2024)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'Lanta/Vitabank Exchange', value: '$725M+ gold' },
                      { label: 'Russian Gold 2022', value: '96.4 tonnes' },
                      { label: 'Russian Gold 2024', value: '66 tonnes ($5.4B)' },
                      { label: 'FATF Grey List', value: '2022-2024 (removed)' },
                    ].map((item, idx) => (
                      <div key={idx} className="rounded bg-rose-500/10 p-3 border border-rose-500/30">
                        <p className="text-xs text-platinum-400">{item.label}</p>
                        <p className="text-sm font-bold text-rose-300">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* US Troop Withdrawal */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Plane className="h-5 w-5 text-orange-400" />
                    US Troop Withdrawal (2026)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { date: 'January 2026', event: 'US began withdrawal - some personnel from key bases' },
                      { date: 'March 2026', event: 'Videos circulating - American troops repositioning' },
                      { date: 'March 2026', event: 'Forces departing Dubai bases' },
                      { date: 'Context', event: 'Iran air strikes forced evacuation of several bases' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded bg-platinum-800/50 p-2">
                        <Badge variant="outline" className="text-xs shrink-0">{item.date}</Badge>
                        <p className="text-sm text-platinum-200">{item.event}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* SENTIMENT TAB */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment & Relevance Analysis" description="Country/topic sentiment breakdown from MD Section 14 & 15">
            <div className="space-y-6">
              {/* Full Sentiment Breakdown */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-rose-400" />
                    Sentiment by Country/Topic
                  </CardTitle>
                  <CardDescription>Intensity scale: -10 (Highly Negative) to +10 (Highly Positive)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px]">
                    <div className="space-y-3">
                      {regionalSentiment.map((item, idx) => (
                        <motion.div
                          key={item.country}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="font-medium text-platinum-200">{item.country}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <Badge variant="outline" className={`text-xs ${item.intensity < 0 ? 'text-rose-400 border-rose-500/50' : item.intensity > 0 ? 'text-emerald-400 border-emerald-500/50' : 'text-platinum-400 border-platinum-500/50'}`}>
                              {item.sentiment}
                            </Badge>
                            {getIntensityBar(item.intensity)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Full Relevance Scores */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-orange-400" />
                    UAE Relevance Assessment - Full Scores
                  </CardTitle>
                  <CardDescription>Strategic importance scores (Section 15 from MD)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {relevanceScores.map((item, idx) => (
                        <motion.div
                          key={item.topic}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                        >
                          <span className="font-medium text-platinum-200">{item.topic}</span>
                          <div className="flex items-center gap-3">
                            <span className={`text-lg font-bold ${getRelevanceColor(item.score)}`}>{item.score}/10</span>
                            <Progress value={item.score * 10} className="w-20" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Key Findings from MD */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ScrollText className="h-5 w-5 text-navy-400" />
                    Key Research Findings
                  </CardTitle>
                  <CardDescription>Top findings from 36 query patterns executed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {keyFindings.slice(0, 12).map((finding, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="flex items-start justify-between rounded-lg bg-navy-500/10 p-3 border border-navy-500/30"
                      >
                        <p className="text-sm text-platinum-200">{typeof finding === 'string' ? finding : (finding as any).finding || finding}</p>
                        <ChevronRight className="h-4 w-4 text-navy-400 flex-shrink-0 mt-0.5" />
                      </motion.div>
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
