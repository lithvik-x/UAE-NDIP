// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  Cloud,
  CloudRain,
  Thermometer,
  Wind,
  Sun,
  Waves,
  Flame,
  Activity,
  Droplets,
  MapPin,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Info,
  ExternalLink,
  CheckCircle2,
  Timer,
  Target,
} from 'lucide-react'
import {
  useNaturalDisasterData,
  naturalDisasterExtendedData,
} from '@/lib/data-loader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const cardHoverVariants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: 1.01,
    opacity: 1,
    transition: { duration: 0.2 },
  },
}

export default function ClimateEnvironmentalPage() {
  const { data } = useNaturalDisasterData()
  const [selectedTab, setSelectedTab] = useState('overview')
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({})

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-platinum-400 flex items-center gap-3"
        >
          <div className="h-8 w-8 border-2 border-platinum-500 border-t-transparent rounded-full animate-spin" />
          Loading Climate & Environmental data...
        </motion.div>
      </div>
    )
  }

  const extended = naturalDisasterExtendedData

  // Chart data from extended data
  const tempRecordsData = [
    { year: '2010', temp: 52.0, name: 'UAE All-Time High (Al Yasat Island)' },
    { year: 'May 2025', temp: 51.6, name: 'May Record (Sweihan, Al Ain)' },
    { year: 'May 2025', temp: 50.4, name: 'May (Al Shawamekh, Abu Dhabi)' },
    { year: 'Aug 2025', temp: 51.8, name: 'Highest since 2021 (Sweihan)' },
    { year: 'Aug 2025', temp: 48.7, name: 'Mezaira, Al Dhafra' },
  ]

  const rainfall2024Data = [
    { location: 'Al Ain\n(Khatm Shakla)', mm: 254.8, color: CHART_COLORS.rose },
    { location: 'Dubai\nAirport', mm: 164, color: CHART_COLORS.gold },
    { location: 'Jebel Yanas\n(Mar 2026)', mm: 244, color: CHART_COLORS.navy },
    { location: 'Al Manama\n(Mar 2026)', mm: 234.7, color: CHART_COLORS.emerald },
    { location: 'Al Hayer\n(Mar 2026)', mm: 234.1, color: CHART_COLORS.cyan },
  ]

  const economicImpactData = [
    { category: 'Insured Losses', value: 3.15, color: CHART_COLORS.rose },
    { category: 'Gov Relief', value: 0.54, color: CHART_COLORS.navy },
    { category: 'Insurance Industry', value: 2.5, color: CHART_COLORS.gold },
    { category: 'Property Market', value: 2.05, color: CHART_COLORS.platinum },
  ]

  const disasterFrequencyData = [
    { type: 'Flash Floods', frequency: 75, color: CHART_COLORS.cyan },
    { type: 'Heat Waves', frequency: 95, color: CHART_COLORS.rose },
    { type: 'Sandstorms', frequency: 65, color: CHART_COLORS.orange },
    { type: 'Earthquakes', frequency: 25, color: CHART_COLORS.navy },
    { type: 'Red Tide', frequency: 40, color: CHART_COLORS.emerald },
    { type: 'Power Outages', frequency: 30, color: CHART_COLORS.platinum },
  ]

  const sentimentData = [
    { name: 'Resilient', value: 35, color: CHART_COLORS.emerald },
    { name: 'Concerned', value: 30, color: CHART_COLORS.gold },
    { name: 'Negative', value: 25, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 10, color: CHART_COLORS.navy },
  ]

  const cloudSeedingData = [
    { year: '2014', missions: 187, color: CHART_COLORS.navy },
    { year: '2017', missions: 214, color: CHART_COLORS.gold },
    { year: '2018', missions: 184, color: CHART_COLORS.cyan },
    { year: '2019', missions: 247, color: CHART_COLORS.emerald },
  ]

  const seaLevelRiseData = [
    { scenario: 'Mild\n42-98cm', value: 60, color: CHART_COLORS.emerald },
    { scenario: 'Moderate\n0.5m', value: 30, color: CHART_COLORS.gold },
    { scenario: 'Severe\n1.5m', value: 15, color: CHART_COLORS.orange },
    { scenario: 'Extreme\n2.0m', value: 8, color: CHART_COLORS.rose },
    { scenario: 'Catastrophic\n3.0m', value: 4, color: CHART_COLORS.rose },
  ]

  const timeline = data.timeline || []
  const keyFindings = data.keyFindings || []

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <motion.div
      className="space-y-8 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-start justify-between">
        <div>
          <Badge variant="denim" className="mb-2">CRISIS TYPE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Climate & Environmental</h1>
          <p className="mt-2 text-slate-400">
            Extreme heat, flooding, climate change, infrastructure resilience
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald-500/50 text-emerald hover:bg-emerald-500/10">
            <Waves className="h-4 w-4" />
            Environment
          </Button>
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 text-white gap-2">
            <Shield className="h-4 w-4" />
            Resilience Plan
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div variants={cardHoverVariants} whileHover="hover">
          <MetricCard
            title="Record Temperature"
            value="52.0C"
            previousValue="51.6C"
            icon={<Thermometer className="h-6 w-6" />}
            gradient="orange"
            status="critical"
          />
        </motion.div>
        <motion.div variants={cardHoverVariants} whileHover="hover">
          <MetricCard
            title="Max Rainfall (Apr 2024)"
            value="254.8mm"
            previousValue="164mm"
            icon={<CloudRain className="h-6 w-6" />}
            gradient="denim"
            status="critical"
          />
        </motion.div>
        <motion.div variants={cardHoverVariants} whileHover="hover">
          <MetricCard
            title="Infrastructure Investment"
            value="$23.2B"
            previousValue="$8.2B"
            icon={<Waves className="h-6 w-6" />}
            gradient="emerald"
            status="success"
          />
        </motion.div>
        <motion.div variants={cardHoverVariants} whileHover="hover">
          <MetricCard
            title="Alert Level"
            value="YELLOW"
            icon={<AlertTriangle className="h-6 w-6" />}
            gradient="gold"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setSelectedTab}>
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview" className="gap-2">
            <Target className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="floods" className="gap-2">
            <CloudRain className="h-4 w-4" />
            Floods
          </TabsTrigger>
          <TabsTrigger value="heat" className="gap-2">
            <Thermometer className="h-4 w-4" />
            Heat
          </TabsTrigger>
          <TabsTrigger value="marine" className="gap-2">
            <Waves className="h-4 w-4" />
            Marine
          </TabsTrigger>
          <TabsTrigger value="seismic" className="gap-2">
            <Activity className="h-4 w-4" />
            Seismic
          </TabsTrigger>
          <TabsTrigger value="resilience" className="gap-2">
            <Shield className="h-4 w-4" />
            Resilience
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="overview" className="space-y-6" key="overview">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <GlassPanel title="Climate & Environmental Overview" description="UAE climate threats and environmental monitoring">
                  <div className="space-y-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                      <motion.div variants={cardHoverVariants} whileHover="hover">
                        <Card className="glass-card">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Thermometer className="h-5 w-5 text-rose-400" />
                              Temperature Records
                            </CardTitle>
                            <CardDescription>All-time and recent extreme temperatures</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <BarChart
                              data={tempRecordsData}
                              xAxisKey="year"
                              bars={[
                                { dataKey: 'temp', name: 'Temperature (C)', color: CHART_COLORS.rose },
                              ]}
                              height={280}
                              showGrid={true}
                            />
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div variants={cardHoverVariants} whileHover="hover">
                        <Card className="glass-card">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <CloudRain className="h-5 w-5 text-cyan-400" />
                              Rainfall Records
                            </CardTitle>
                            <CardDescription>Maximum rainfall by location (mm)</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <BarChart
                              data={rainfall2024Data}
                              xAxisKey="location"
                              bars={[
                                { dataKey: 'mm', name: 'Rainfall (mm)', color: CHART_COLORS.cyan },
                              ]}
                              height={280}
                              showGrid={true}
                            />
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                      <motion.div variants={cardHoverVariants} whileHover="hover">
                        <Card className="glass-card">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <DollarSign className="h-5 w-5 text-emerald-400" />
                              Economic Impact
                            </CardTitle>
                            <CardDescription>April 2024 Flood Losses (US$ Billions)</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <PieChart
                              data={economicImpactData}
                              height={220}
                              showLegend={true}
                            />
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div variants={cardHoverVariants} whileHover="hover">
                        <Card className="glass-card">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5 text-gold-400" />
                              Disaster Frequency
                            </CardTitle>
                            <CardDescription>Annual occurrence severity</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <BarChart
                              data={disasterFrequencyData}
                              xAxisKey="type"
                              bars={[
                                { dataKey: 'frequency', name: 'Severity Score', color: CHART_COLORS.gold },
                              ]}
                              height={220}
                              showGrid={true}
                            />
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div variants={cardHoverVariants} whileHover="hover">
                        <Card className="glass-card">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Users className="h-5 w-5 text-navy-400" />
                              Public Sentiment
                            </CardTitle>
                            <CardDescription>Sentiment on climate events</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <PieChart
                              data={sentimentData}
                              height={220}
                              showLegend={true}
                            />
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>

              {/* Timeline */}
              <motion.div variants={itemVariants}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-emerald-400" />
                      Event Timeline
                    </CardTitle>
                    <CardDescription>Key climate and environmental events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="relative border-l-2 border-emerald-500/50 pl-6 space-y-4">
                        {timeline.map((event, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative"
                          >
                            <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-emerald-500 border-2 border-slate-900" />
                            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors">
                              <div className="flex items-center justify-between mb-1">
                                <p className="font-semibold text-slate-200">{event.event}</p>
                                <Badge variant="outline" className="text-xs">{event.date}</Badge>
                              </div>
                              <p className="text-sm text-slate-400">{event.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Floods Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="floods" className="space-y-6" key="floods">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-cyan-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-cyan-400">
                      <CloudRain className="h-5 w-5" />
                      April 2024 Historic Flood
                    </CardTitle>
                    <CardDescription>Most significant flood in 75 years</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-400">Event Duration</span>
                        <Badge variant="outline" className="text-cyan-300 border-cyan-500/50">3 days</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-400">Peak Rainfall</span>
                        <Badge variant="outline" className="text-rose-300 border-rose-500/50">254.8mm</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-400">UAE Deaths</span>
                        <Badge variant="destructive">5</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-400">Regional Deaths</span>
                        <Badge variant="destructive">23</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-400">Flights Cancelled</span>
                        <Badge variant="outline" className="text-gold-300 border-gold-500/50">1,244</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                      <Waves className="h-5 w-5" />
                      Cloud Seeding Program
                    </CardTitle>
                    <CardDescription>Enhancement operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={cloudSeedingData}
                      xAxisKey="year"
                      bars={[
                        { dataKey: 'missions', name: 'Missions', color: CHART_COLORS.emerald },
                      ]}
                      height={200}
                      showGrid={true}
                    />
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="p-2 rounded bg-slate-800/50 text-center">
                        <p className="text-xs text-slate-400">Clear Atmosphere</p>
                        <p className="text-lg font-bold text-emerald-400">30-35%</p>
                      </div>
                      <div className="p-2 rounded bg-slate-800/50 text-center">
                        <p className="text-xs text-slate-400">Humid Conditions</p>
                        <p className="text-lg font-bold text-cyan-400">10-15%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-400" />
                      Rainfall Totals - March 2026
                    </CardTitle>
                    <CardDescription>Heaviest UAE rains in 80+ years</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={rainfall2024Data}
                      xAxisKey="location"
                      areas={[
                        { dataKey: 'mm', name: 'Rainfall (mm)', color: CHART_COLORS.cyan },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Info className="h-5 w-5 text-emerald-400" />
                        Detailed Flood Analysis
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCard('flood-analysis')}
                        className="text-emerald-400 hover:text-emerald-300"
                      >
                        {expandedCards['flood-analysis'] ? 'Collapse' : 'Expand'}
                      </Button>
                    </div>
                  </CardHeader>
                  {expandedCards['flood-analysis'] && (
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                          <h4 className="font-semibold text-rose-400 mb-2 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            Climate Change Link
                          </h4>
                          <p className="text-sm text-slate-300">
                            Climate change "reduced the temperature gradient between the equator and the North Pole,"
                            slowing the subtropical jet stream. This caused stronger trough formation, making the
                            April 2024 event 10-40% more intense due to 1.2C of warming.
                          </p>
                        </div>
                        <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                          <h4 className="font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Cloud Seeding Clarification
                          </h4>
                          <p className="text-sm text-slate-300">
                            NCM explicitly stated: "did not conduct any seeding operations during this event."
                            Experts universally concluded cloud seeding was neither deployed nor responsible.
                          </p>
                        </div>
                        <div className="rounded-lg border border-slate-700 bg-slate-800/30 p-4">
                          <h4 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                            <Droplets className="h-4 w-4" />
                            Infrastructure Response
                          </h4>
                          <div className="grid grid-cols-2 gap-4 mt-2">
                            <div>
                              <p className="text-xs text-slate-400">Stormwater Plan</p>
                              <p className="text-lg font-bold text-emerald-400">$8.2B</p>
                              <p className="text-xs text-slate-500">700% capacity increase</p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-400">Deep Tunnel</p>
                              <p className="text-lg font-bold text-gold-400">100-year</p>
                              <p className="text-xs text-slate-500">Design life</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Heat Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="heat" className="space-y-6" key="heat">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-3">
                <MetricCard
                  title="UAE All-Time High"
                  value="52.0C"
                  unit="Al Yasat Island, 2010"
                  icon={<Thermometer className="h-6 w-6" />}
                  gradient="rose"
                  status="critical"
                />
                <MetricCard
                  title="May 2025 Record"
                  value="51.6C"
                  unit="Sweihan, Al Ain"
                  icon={<Sun className="h-6 w-6" />}
                  gradient="orange"
                  status="critical"
                />
                <MetricCard
                  title="Work Ban Compliance"
                  value="99%"
                  unit="Midday Break 2025"
                  icon={<Shield className="h-6 w-6" />}
                  gradient="emerald"
                  status="success"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-rose-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                      <Thermometer className="h-5 w-5" />
                      Temperature Records Timeline
                    </CardTitle>
                    <CardDescription>Extreme temperature events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={tempRecordsData}
                      xAxisKey="year"
                      areas={[
                        { dataKey: 'temp', name: 'Temperature (C)', color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                      <Shield className="h-5 w-5" />
                      Midday Work Ban
                    </CardTitle>
                    <CardDescription>Worker protection measures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-400">Effective Period</span>
                        <Badge variant="outline" className="text-emerald-300 border-emerald-500/50">
                          June 15 - Sept 15
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-400">Prohibited Hours</span>
                        <Badge variant="outline" className="text-gold-300 border-gold-500/50">
                          12:30 PM - 3:00 PM
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-400">2025 Compliance</span>
                        <Badge variant="success">99%</Badge>
                      </div>
                      <div className="mt-4">
                        <p className="text-xs text-slate-400 mb-2">Employer Requirements</p>
                        <ul className="space-y-1 text-sm text-slate-300">
                          <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-400" />Suspend outdoor work</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-400" />Provide shaded rest areas</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-400" />Ensure drinking water</li>
                          <li className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-emerald-400" />Adequate hydration stations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="glass-card border-rose-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                      <Flame className="h-5 w-5" />
                      Heat-Related Mortality & Research
                    </CardTitle>
                    <CardDescription>NYU Abu Dhabi research findings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-rose-500/30 bg-slate-800/30 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">Outdoor Workers Excessive Heat</span>
                          <span className="text-xl font-bold text-rose-400">83.6%</span>
                        </div>
                        <p className="text-xs text-slate-500">ILO 2024</p>
                      </div>
                      <div className="rounded-lg border border-rose-500/30 bg-slate-800/30 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">Hajj Pilgrims Heat Deaths</span>
                          <span className="text-xl font-bold text-rose-400">1,300+</span>
                        </div>
                        <p className="text-xs text-slate-500">June 2024</p>
                      </div>
                      <div className="rounded-lg border border-rose-500/30 bg-slate-800/30 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">Worker Exposure</span>
                          <span className="text-xl font-bold text-gold-400">14 hrs</span>
                        </div>
                        <p className="text-xs text-slate-500">Up to 14 hours in 45C+</p>
                      </div>
                      <div className="rounded-lg border border-emerald-500/30 bg-slate-800/30 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">Prediction Lead Time</span>
                          <span className="text-xl font-bold text-emerald-400">2-3 months</span>
                        </div>
                        <p className="text-xs text-slate-500">Weeks to months advance</p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                      <h4 className="font-semibold text-emerald-400 mb-2">NYU Abu Dhabi Research</h4>
                      <p className="text-sm text-slate-300">
                        Extreme heat events occur when two wind systems change simultaneously:
                        (1) North-westerly Shamal winds weaken, and (2) Summer Indian monsoon winds intensify.
                        La Nina events favor these heatwaves. Lead researcher: Zouhair Lachkar, Senior Scientist.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Marine Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="marine" className="space-y-6" key="marine">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card className="glass-card border-rose-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                      <Flame className="h-5 w-5" />
                      Fujairah Oil Hub Attacks - March 2026
                    </CardTitle>
                    <CardDescription>Iran conflict escalation impacts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="rounded-lg border border-rose-500/30 bg-slate-800/30 p-4 text-center">
                          <p className="text-xs text-slate-400">Iran Attacks</p>
                          <p className="text-2xl font-bold text-rose-400">1,800+</p>
                          <p className="text-xs text-slate-500">Missiles/drones at UAE</p>
                        </div>
                        <div className="rounded-lg border border-rose-500/30 bg-slate-800/30 p-4 text-center">
                          <p className="text-xs text-slate-400">Civilian Deaths</p>
                          <p className="text-2xl font-bold text-rose-400">3</p>
                          <p className="text-xs text-slate-500">UAE casualties</p>
                        </div>
                        <div className="rounded-lg border border-gold-500/30 bg-slate-800/30 p-4 text-center">
                          <p className="text-xs text-slate-400">Intercepted (Tuesday)</p>
                          <p className="text-2xl font-bold text-gold-400">55</p>
                          <p className="text-xs text-slate-500">10 missiles, 45 drones</p>
                        </div>
                        <div className="rounded-lg border border-emerald-500/30 bg-slate-800/30 p-4 text-center">
                          <p className="text-xs text-slate-400">Gulf States Total</p>
                          <p className="text-2xl font-bold text-emerald-400">2,000+</p>
                          <p className="text-xs text-slate-500">Combined attacks</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm text-slate-400">Attack Timeline</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleCard('fujairah-timeline')}
                            className="text-emerald-400 hover:text-emerald-300"
                          >
                            {expandedCards['fujairah-timeline'] ? 'Collapse' : 'Expand'}
                          </Button>
                        </div>
                        {expandedCards['fujairah-timeline'] && (
                          <div className="space-y-2 p-4 rounded-lg bg-slate-800/30">
                            {extended.fujairahOilHubAttacks.timeline.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-2 rounded bg-slate-800/30">
                                <div className="h-2 w-2 rounded-full bg-rose-400" />
                                <span className="text-xs text-rose-400 font-mono">{item.date}</span>
                                <span className="text-sm text-slate-300">{item.event}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                      <Waves className="h-5 w-5" />
                      Red Tide Events
                    </CardTitle>
                    <CardDescription>Algal bloom impacts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                          <p className="text-xs text-slate-400">Frequency</p>
                          <p className="text-lg font-bold text-emerald-400">2x/year</p>
                        </div>
                        <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                          <p className="text-xs text-slate-400">Daily Losses</p>
                          <p className="text-lg font-bold text-rose-400">$100K</p>
                        </div>
                        <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                          <p className="text-xs text-slate-400">Desalination Impact</p>
                          <p className="text-lg font-bold text-rose-400">30-40%</p>
                        </div>
                        <div className="rounded-lg bg-slate-800/50 p-3 text-center">
                          <p className="text-xs text-slate-400">Cause</p>
                          <p className="text-sm font-bold text-cyan-400">Dinoflagellates</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-2">Key Historical Events</p>
                        <div className="space-y-2">
                          {extended.redTideEvents.historicalEvents.slice(0, 4).map((event, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-800/30">
                              <span className="text-sm text-slate-300">{event.date}</span>
                              <span className="text-xs text-emerald-400">{event.impact}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-navy-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-navy-400">
                      <MapPin className="h-5 w-5" />
                      Sea Level Rise Projections
                    </CardTitle>
                    <CardDescription>UAE vulnerability by 2100</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={seaLevelRiseData}
                      height={220}
                      showLegend={true}
                    />
                    <div className="mt-4 p-3 rounded bg-slate-800/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Infrastructure at Risk</span>
                        <span className="text-lg font-bold text-rose-400">90%</span>
                      </div>
                      <p className="text-xs text-slate-500">Within meters of sea level</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="glass-card border-orange-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-orange-400">
                      <MapPin className="h-5 w-5" />
                      Coastal Erosion
                    </CardTitle>
                    <CardDescription>Palm Islands and beach erosion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-orange-500/30 bg-slate-800/30 p-4">
                        <h4 className="font-semibold text-orange-400 mb-2">Dubai Palm Islands</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Construction Cost</span>
                            <span className="text-orange-300">$12 billion</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Wave Barrier</span>
                            <span className="text-orange-300">Only 2m</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Elevation</span>
                            <span className="text-orange-300">13 ft above sea level</span>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-rose-500/30 bg-slate-800/30 p-4">
                        <h4 className="font-semibold text-rose-400 mb-2">Beach Erosion</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Madinat Jumeirah</span>
                            <span className="text-rose-300">5-10m/year</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">
                          Mangrove protection in Abu Dhabi acts as natural coastal defense.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Seismic Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="seismic" className="space-y-6" key="seismic">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-3">
                <MetricCard
                  title="Seismic Network"
                  value="Real-time"
                  unit="Broadband monitoring"
                  icon={<Activity className="h-6 w-6" />}
                  gradient="navy"
                />
                <MetricCard
                  title="Recent Events (2023+)"
                  value="16"
                  unit="Quakes 2.0+ magnitude"
                  icon={<Zap className="h-6 w-6" />}
                  gradient="gold"
                />
                <MetricCard
                  title="Historical (10yr)"
                  value="521"
                  unit="Quakes 4.0+ within 300km"
                  icon={<MapPin className="h-6 w-6" />}
                  gradient="platinum"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-navy-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-navy-400">
                      <Activity className="h-5 w-5" />
                      Recent Seismic Events
                    </CardTitle>
                    <CardDescription>2025-2026 recorded activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {extended.recentSeismicEvents.map((event, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className={`h-3 w-3 rounded-full ${event.magnitude >= 4 ? 'bg-rose-400' : 'bg-emerald-400'}`} />
                            <div>
                              <p className="text-sm font-medium text-slate-200">{event.location}</p>
                              <p className="text-xs text-slate-500">{event.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-slate-200">{event.magnitude}</p>
                            <p className="text-xs text-slate-500">Magnitude</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-cyan-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-cyan-400">
                      <BarChart className="h-5 w-5" />
                      Earthquake Statistics (Since 2023)
                    </CardTitle>
                    <CardDescription>Frequency by magnitude</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { range: '4.0+', count: 2, color: CHART_COLORS.rose },
                        { range: '3.0-4.0', count: 9, color: CHART_COLORS.gold },
                        { range: '2.0-3.0', count: 5, color: CHART_COLORS.cyan },
                      ]}
                      xAxisKey="range"
                      bars={[
                        { dataKey: 'count', name: 'Quakes', color: CHART_COLORS.cyan },
                      ]}
                      height={220}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Info className="h-5 w-5 text-navy-400" />
                      NCM Seismic Network
                    </CardTitle>
                    <CardDescription>Monitoring capabilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                        <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                        <p className="font-semibold text-slate-200">Broadband Network</p>
                        <p className="text-xs text-slate-400">Advanced seismic sensors</p>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                        <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                        <p className="font-semibold text-slate-200">Real-time Monitoring</p>
                        <p className="text-xs text-slate-400">24/7 surveillance</p>
                      </div>
                      <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                        <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                        <p className="font-semibold text-slate-200">Public Portal</p>
                        <p className="text-xs text-slate-400">earthquakes.ncm.gov.ae</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </AnimatePresence>

        {/* Resilience Tab */}
        <AnimatePresence mode="wait">
          <TabsContent value="resilience" className="space-y-6" key="resilience">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                      <Waves className="h-5 w-5" />
                      Infrastructure Investments
                    </CardTitle>
                    <CardDescription>Climate adaptation spending</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { name: 'Stormwater\nDrainage', value: 8.2, color: CHART_COLORS.navy },
                        { name: 'Deep Tunnel', value: 15.0, color: CHART_COLORS.gold },
                        { name: 'Heat Safety', value: 0.5, color: CHART_COLORS.orange },
                      ]}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'AED Billion', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card border-gold-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-gold-400">
                      <Shield className="h-5 w-5" />
                      Climate Adaptation Measures
                    </CardTitle>
                    <CardDescription>Key resilience initiatives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { measure: 'Midday Work Ban', status: '99% compliance', color: 'emerald', icon: CheckCircle2 },
                        { measure: 'Stormwater Upgrade', status: '700% capacity', color: 'navy', icon: TrendingUp },
                        { measure: '100-Year Deep Tunnel', status: 'In progress', color: 'gold', icon: Timer },
                        { measure: 'Cloud Seeding', status: 'Enhanced monitoring', color: 'cyan', icon: Cloud },
                        { measure: 'Mangrove Protection', status: 'Active program', color: 'emerald', icon: Shield },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className={`h-5 w-5 text-${item.color}-400`} />
                            <span className="text-sm font-medium text-slate-200">{item.measure}</span>
                          </div>
                          <Badge variant="outline" className={`text-${item.color}-300 border-${item.color}-500/50`}>
                            {item.status}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Info className="h-5 w-5 text-emerald-400" />
                      UAE Climate Commitments
                    </CardTitle>
                    <CardDescription>Environmental goals and progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4 text-center">
                        <p className="text-xs text-slate-400 mb-1">Net Zero Target</p>
                        <p className="text-2xl font-bold text-emerald-400">2050</p>
                        <p className="text-xs text-slate-500">First in Middle East</p>
                      </div>
                      <div className="rounded-lg bg-gold-500/10 border border-gold-500/30 p-4 text-center">
                        <p className="text-xs text-slate-400 mb-1">Emissions Reduction</p>
                        <p className="text-2xl font-bold text-gold-400">40%</p>
                        <p className="text-xs text-slate-500">By 2030 (Third NDC)</p>
                      </div>
                      <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/30 p-4 text-center">
                        <p className="text-xs text-slate-400 mb-1">Solar Park Capacity</p>
                        <p className="text-2xl font-bold text-cyan-400">5,000 MW</p>
                        <p className="text-xs text-slate-500">MBR Solar Park by 2030</p>
                      </div>
                      <div className="rounded-lg bg-navy-500/10 border border-navy-500/30 p-4 text-center">
                        <p className="text-xs text-slate-400 mb-1">Renewable Growth</p>
                        <p className="text-2xl font-bold text-navy-400">70%</p>
                        <p className="text-xs text-slate-500">2022-2023 increase</p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 rounded-lg bg-slate-800/50">
                      <p className="text-sm text-slate-400 mb-2">Environmental Threats</p>
                      <div className="flex flex-wrap gap-2">
                        {['Water Stress', 'Groundwater Depletion', 'Desertification', 'Coral Reefs', 'Salt Marshes'].map((threat, idx) => (
                          <Badge key={idx} variant="outline" className="text-rose-300 border-rose-500/50">
                            {threat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="glass-card border-navy-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2 text-navy-400">
                      <Activity className="h-5 w-5" />
                      Emergency Contacts
                    </CardTitle>
                    <CardDescription>Critical UAE emergency services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        { service: 999, purpose: 'Police/Emergency', color: 'emerald' },
                        { service: 997, purpose: 'Civil Defence (Fire)', color: 'rose' },
                        { service: 998, purpose: 'Ambulance', color: 'gold' },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          className={`rounded-lg border border-${item.color}-500/30 bg-slate-800/30 p-4 text-center cursor-pointer hover:bg-slate-800/50 transition-colors`}
                        >
                          <p className={`text-3xl font-bold text-${item.color}-400`}>{item.service}</p>
                          <p className="text-sm text-slate-300 mt-1">{item.purpose}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-slate-400 mb-2">Government Resources</p>
                      <div className="space-y-2">
                        {extended.governmentResources.map((resource, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-800/30">
                            <span className="text-sm text-slate-300">{resource.resource}</span>
                            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                              <ExternalLink className="h-3 w-3" />
                              Visit
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  )
}