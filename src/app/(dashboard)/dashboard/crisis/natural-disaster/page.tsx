// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, PieChart, AreaChart, RadarChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Cloud, AlertTriangle, Wind, Droplets, Sun, Thermometer, Umbrella, Waves, Flame, Globe, Shield, Activity, Radio, MapPin, CloudRain, ThermometerSun, WindIcon, Siren } from 'lucide-react'
import { useNaturalDisasterData } from '@/lib/data-loader'
import { motion } from 'framer-motion'
import { naturalDisasterExtendedData } from '@/lib/data-loader/crisis-data'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export default function NaturalDisasterPage() {
  const { data } = useNaturalDisasterData()
  const { metrics, timeline, keyFindings, stakeholderImpacts, responseMetrics, sources } = data || {}
  const ext = naturalDisasterExtendedData

  // Flood data for visualizations
  const floodRainfallData = [
    { location: 'Al Ain (Khatm Shakla)', mm: 254.8, date: 'Apr 2024' },
    { location: 'Jebel Yanas, RAK', mm: 244, date: 'Mar 2026' },
    { location: 'Al Manama, Ajman', mm: 234.7, date: 'Mar 2026' },
    { location: 'Al Hayer, Al Ain', mm: 234.1, date: 'Mar 2026' },
    { location: 'Dubai Airport', mm: 164, date: 'Apr 2024' },
  ]

  const floodEconomicImpact = [
    { category: 'Insured Losses', amount: 3200, color: CHART_COLORS.rose },
    { category: 'Gov Relief', amount: 545, color: CHART_COLORS.emerald },
    { category: 'Insurance Industry', amount: 2500, color: CHART_COLORS.info },
    { category: 'Property Market', amount: 2050, color: CHART_COLORS.gold },
  ]

  // Heat data
  const temperatureRecords = [
    { year: '2010', temp: 52.0, location: 'Al Yasat Island', type: 'All-Time' },
    { year: 'May 2025', temp: 51.6, location: 'Sweihan, Al Ain', type: 'May Record' },
    { year: 'May 2023', temp: 50.4, location: 'Al Shawamekh, Abu Dhabi', type: 'May Record' },
    { year: 'Aug 2025', temp: 51.8, location: 'Sweihan, Al Ain', type: 'Summer' },
    { year: 'Aug 2025', temp: 48.7, location: 'Mezaira, Al Dhafra', type: 'Summer' },
  ]

  // Sandstorm severity data
  const sandstormData = ext.historicalSandstorms.map(s => ({
    year: s.year,
    severity: s.damage === 'Severe' ? 3 : s.damage === 'Significant' ? 2 : s.damage === 'Moderate' ? 1 : 0,
    damage: s.damage,
    visibility: s.visibility,
  }))

  // Seismic data
  const seismicData = ext.seismicMonitoring.earthquakeStatsSince2023.map(s => ({
    range: s.magnitude,
    count: parseInt(s.frequency),
  }))

  // Marine incidents
  const redTideImpact = [
    { sector: 'Desalination', impact: 35, color: CHART_COLORS.info },
    { sector: 'Tourism', impact: 40, color: CHART_COLORS.rose },
    { sector: 'Fisheries', impact: 50, color: CHART_COLORS.orange },
    { sector: 'Marine Life', impact: 45, color: CHART_COLORS.emerald },
  ]

  // Cloud seeding missions
  const cloudSeedingMissions = Object.entries(ext.cloudSeedingProgram.missionsByYear).map(([year, missions]) => ({
    year,
    missions,
  }))

  // Disaster frequency for radar
  const disasterFrequency = [
    { disaster: 'Flash Floods', frequency: 1.5, max: 2 },
    { disaster: 'Sandstorms', frequency: 4, max: 5 },
    { disaster: 'Heat Waves', frequency: 5, max: 5 },
    { disaster: 'Earthquakes', frequency: 3.5, max: 5 },
    { disaster: 'Red Tide', frequency: 2, max: 2 },
    { disaster: 'Power Outages', frequency: 2, max: 3 },
  ]

  // Sea level rise scenarios
  const seaLevelData = ext.seaLevelRise.riseProjectionsBy2100.map(s => ({
    scenario: s.scenario,
    rise: parseFloat(s.rise.replace('m', '').replace('cm', '')) || 0,
    risk: s.abuDhabiImpact.includes('All') ? 3 : s.abuDhabiImpact.includes('15') ? 2 : 1,
  }))

  // Sentiment by disaster type
  const sentimentData = ext.sentimentByDisasterType.map((s, i) => ({
    name: s.disasterType,
    value: s.sentiment.includes('Negative') ? (s.sentiment.includes('Critical') ? 85 : 60) : s.sentiment.includes('Neutral') ? 40 : 30,
    color: s.sentiment.includes('Negative') ? CHART_COLORS.rose : s.sentiment.includes('Neutral') ? CHART_COLORS.gold : CHART_COLORS.emerald,
  }))

  // Fujairah attack data
  const fujairahData = [
    { metric: 'Iran Missiles/Drones', value: 1800, color: CHART_COLORS.rose },
    { metric: 'UAE Intercepted', value: 55, color: CHART_COLORS.emerald },
    { metric: 'Gulf Total Attacks', value: 2000, color: CHART_COLORS.orange },
  ]

  // Infrastructure status
  const infrastructureData = [
    { name: 'Early Warning Coverage', value: 94, status: 'good' },
    { name: 'Emergency Shelters', value: 156, status: 'good' },
    { name: 'Evacuation Routes', value: 42, status: 'good' },
    { name: 'NCM Response Time', value: 15, status: 'good', unit: 'min' },
    { name: 'Public Awareness', value: 67, status: 'moderate' },
    { name: 'Infrastructure Hardening', value: 78, status: 'good' },
    { name: 'Cloud Seeding Missions (2026)', value: 80, status: 'good' },
    { name: 'Midday Ban Compliance', value: 99, status: 'good', unit: '%' },
  ]

  return (
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2 bg-gradient-to-r from-sky-500/20 to-blue-600/20 text-cyan-400 border-cyan-500/50">
            <Cloud className="w-3 h-3 mr-1" />
            EMERGENCY MANAGEMENT
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight font-rajdhani">
            <span className="bg-gradient-to-r from-platinum-100 via-platinum-200 to-platinum-400 bg-clip-text text-transparent">
              Natural Disaster
            </span>
          </h1>
          <p className="mt-2 text-platinum-500-400">Natural disaster risk intelligence — climate events, vulnerability mapping, and emergency preparedness</p>
        </div>
      </motion.div>

      {/* Top Metrics Row */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        <MetricCard title="Risk Score" value={metrics?.riskScore || 'MEDIUM'} icon={<AlertTriangle className="h-6 w-6" />} gradient="gold" status="warning" />
        <MetricCard title="Active Threats" value={metrics?.active || 2} icon={<Wind className="h-6 w-6" />} gradient="sky" />
        <MetricCard title="At-Risk Population" value={metrics?.atRisk || '3.9M'} icon={<Umbrella className="h-6 w-6" />} gradient="rose" status="warning" />
        <MetricCard title="Response Capacity" value={metrics?.capacity || '85%'} icon={<Waves className="h-6 w-6" />} gradient="emerald" />
        <MetricCard title="Warning Systems" value={metrics?.systems || 12} icon={<Cloud className="h-6 w-6" />} gradient="blue" />
        <MetricCard title="Recent Events" value={metrics?.recent || timeline?.length || 6} icon={<AlertTriangle className="h-6 w-6" />} gradient="orange" />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel bg-glass-surface/70 backdrop-blur-xl border-glass-border p-1" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="floods">Floods</TabsTrigger>
          <TabsTrigger value="heat">Heat Waves</TabsTrigger>
          <TabsTrigger value="sandstorms">Sandstorms</TabsTrigger>
          <TabsTrigger value="seismic">Seismic</TabsTrigger>
          <TabsTrigger value="marine">Marine/Coastal</TabsTrigger>
          <TabsTrigger value="preparedness">Preparedness</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Natural Disaster Intelligence" description="Climate risk and vulnerability assessment">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-rose-500" />Risk by Disaster Type</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <PieChart data={sentimentData} height={280} showLegend={true} ariaLabel="Risk distribution by disaster type showing sentiment analysis for floods, heat waves, sandstorms, earthquakes, marine incidents, and infrastructure" />
                  </CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Activity className="h-5 w-5 text-cyan-500" />Disaster Frequency (Annual)</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0">
                    <RadarChart data={disasterFrequency} metrics={[{ dataKey: 'frequency', name: 'Events/Year', color: CHART_COLORS.info }]} height={280} ariaLabel="Annual disaster frequency comparison across flash floods, sandstorms, heat waves, earthquakes, red tide, and power outages" />
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Key Findings */}
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Key Findings" description="Critical insights from recent research">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {(keyFindings || ext.keyFindings || []).slice(0, 9).map((finding: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 rounded-lg bg-gradient-to-r from-sky-500/10 to-blue-600/5 p-4 border border-cyan-500/30"
                  >
                    <AlertTriangle className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-platinum-500-300">{finding}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Event Timeline" description="Recent natural disaster events">
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {(timeline || ext.timeline || []).map((event: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.07 }}
                      className="flex items-start gap-4 rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                    >
                      <div className="w-24 shrink-0 text-sm font-medium text-cyan-400">{event.date}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-platinum-500-200">{event.event}</h4>
                        <p className="text-xs text-platinum-500-400 mt-1">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* FLOODS TAB */}
        <TabsContent value="floods" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Flood Events & Rainfall" description="Historic flooding and rainfall patterns">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><CloudRain className="h-5 w-5 text-cyan-500" />Rainfall Records (mm)</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={floodRainfallData} xAxisKey="location" bars={[{ dataKey: 'mm', name: 'mm', color: CHART_COLORS.info }]} height={280} showGrid={true} ariaLabel="Rainfall records by location showing Al Ain, Jebel Yanas, Al Manama, Al Hayer, and Dubai Airport measurements in millimeters" /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Waves className="h-5 w-5 text-rose-500" />Economic Impact (US$ Million)</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={floodEconomicImpact} xAxisKey="category" bars={[{ dataKey: 'amount', name: 'US$ Million', color: CHART_COLORS.rose }]} height={280} showGrid={true} ariaLabel="April 2024 flood economic impact showing insured losses, government relief, insurance industry losses, and property market losses in US dollars" /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="April 2024 Flood Details" description="Most significant flood in 75 years">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50 text-center">
                  <p className="text-3xl font-bold text-cyan-400">254.8mm</p>
                  <p className="text-xs text-platinum-500-400 mt-1">Peak Rainfall (Al Ain)</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50 text-center">
                  <p className="text-3xl font-bold text-rose-400">5</p>
                  <p className="text-xs text-platinum-500-400 mt-1">UAE Deaths</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50 text-center">
                  <p className="text-3xl font-bold text-orange-400">$3.4B</p>
                  <p className="text-xs text-platinum-500-400 mt-1">Insured Losses</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50 text-center">
                  <p className="text-3xl font-bold text-emerald-400">99%</p>
                  <p className="text-xs text-platinum-500-400 mt-1">Cloud Seeding NOT Deployed</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="Cloud Seeding Program" description="NCM weather enhancement operations">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Cloud className="h-5 w-5 text-emerald-500" />Annual Missions</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={cloudSeedingMissions} xAxisKey="year" bars={[{ dataKey: 'missions', name: 'Missions', color: CHART_COLORS.emerald }]} height={280} showGrid={true} ariaLabel="NCM cloud seeding annual missions from 2014 to 2019 showing fluctuation between 184 and 247 missions per year" /></CardContent>
                </motion.div>
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Activity className="h-5 w-5 text-cyan-500" />Program Statistics</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0 space-y-4">
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Enhancement (Clear)</span>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">30-35%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Enhancement (Humid)</span>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">10-15%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Weather Stations</span>
                      <Badge className="bg-navy-500/20 text-navy-500-400 border-navy-500/50">75</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Doppler Radars</span>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">6</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Aircraft</span>
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">6 Beechcraft</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">2026 Missions (YTD)</span>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">80</Badge>
                    </div>
                  </CardContent>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="Infrastructure Response" description="$8.2B stormwater drainage transformation">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-600/10 p-6 border border-cyan-500/30">
                  <Droplets className="h-8 w-8 text-cyan-400 mb-3" />
                  <p className="text-2xl font-bold text-platinum-500-100">$8.2B</p>
                  <p className="text-sm text-platinum-500-400 mt-1">Investment Approved</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-600/10 p-6 border border-emerald-500/30">
                  <Waves className="h-8 w-8 text-emerald-400 mb-3" />
                  <p className="text-2xl font-bold text-platinum-500-100">700%</p>
                  <p className="text-sm text-platinum-500-400 mt-1">Capacity Increase</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-600/10 p-6 border border-purple-500/30">
                  <Shield className="h-8 w-8 text-purple-400 mb-3" />
                  <p className="text-2xl font-bold text-platinum-500-100">100 Years</p>
                  <p className="text-sm text-platinum-500-400 mt-1">Design Life (Deep Tunnel)</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* HEAT TAB */}
        <TabsContent value="heat" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Extreme Temperature Records" description="UAE temperature history and recent records">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><ThermometerSun className="h-5 w-5 text-orange-500" />Temperature Records (C)</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><AreaChart data={temperatureRecords} xAxisKey="year" areas={[{ dataKey: 'temp', name: 'Temperature C', color: CHART_COLORS.orange }]} height={280} showGrid={true} ariaLabel="UAE temperature records from 2010 to 2025 showing all-time high of 52.0C and recent May records of 51.6C" /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Sun className="h-5 w-5 text-rose-500" />Temperature by Location</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={temperatureRecords} xAxisKey="location" bars={[{ dataKey: 'temp', name: 'Temp C', color: CHART_COLORS.rose }]} height={280} showGrid={true} ariaLabel="Temperature records by location showing Al Yasat Island, Sweihan, Al Shawamekh, and Mezaira temperature measurements" /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="Midday Work Ban" description="Worker protection measures (June 15 - September 15)">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50 text-center">
                  <p className="text-3xl font-bold text-emerald-400">99%</p>
                  <p className="text-xs text-platinum-500-400 mt-1">2025 Compliance Rate</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50 text-center">
                  <p className="text-3xl font-bold text-cyan-400">2.5 hrs</p>
                  <p className="text-xs text-platinum-500-400 mt-1">Prohibited (12:30-3:00 PM)</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50 text-center">
                  <p className="text-3xl font-bold text-orange-400">83.6%</p>
                  <p className="text-xs text-platinum-500-400 mt-1">Outdoor Workers in Excessive Heat (ILO)</p>
                </div>
                <div className="rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50 text-center">
                  <p className="text-3xl font-bold text-rose-400">1,300+</p>
                  <p className="text-xs text-platinum-500-400 mt-1">Hajj Heat Deaths (June 2024)</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="Heat Wave Research" description="NYU Abu Dhabi findings on UAE heat mechanisms">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium text-platinum-500-200">Extreme Heat Formation Mechanism</h4>
                  <div className="flex items-start gap-3 p-3 bg-platinum-800/30 rounded-lg">
                    <WindIcon className="h-4 w-4 text-cyan-400 mt-1 shrink-0" />
                    <p className="text-sm text-platinum-500-300">North-westerly Shamal winds weaken (normally help cool the sea)</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-platinum-800/30 rounded-lg">
                    <WindIcon className="h-4 w-4 text-orange-400 mt-1 shrink-0" />
                    <p className="text-sm text-platinum-500-300">Summer Indian monsoon winds intensify</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-platinum-800/30 rounded-lg">
                    <Thermometer className="h-4 w-4 text-rose-400 mt-1 shrink-0" />
                    <p className="text-sm text-platinum-500-300">Result: Increased atmospheric moisture traps heat at sea surface</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-platinum-500-200">Prediction Capabilities</h4>
                  <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                    <span className="text-platinum-500-300">La Nina Connection</span>
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">Favors Heatwaves</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                    <span className="text-platinum-500-300">Prediction Lead Time</span>
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">2-3 Months</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                    <span className="text-platinum-500-300">Lead Researcher</span>
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">Zouhair Lachkar</Badge>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* SANDSTORMS TAB */}
        <TabsContent value="sandstorms" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Sandstorm Events History" description="Formation characteristics and historical events">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Wind className="h-5 w-5 text-amber-500" />Formation Characteristics</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0 space-y-3">
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Primary Season</span>
                      <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50">June - September</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Wind Source</span>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">Shamal (N/NW)</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Dust Origin</span>
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">Mesopotamia, Syrian Desert</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Particle Size</span>
                      <Badge className="bg-stone-500/20 text-stone-400 border-stone-500/50">0.08mm - 1mm</Badge>
                    </div>
                  </CardContent>
                </div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-rose-500" />Severity by Year</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={sandstormData} xAxisKey="year" bars={[{ dataKey: 'severity', name: 'Severity (0-3)', color: CHART_COLORS.amber }]} height={280} showGrid={true} ariaLabel="Sandstorm severity by year from 2008 to 2025 showing trend of increasing intensity with notable events in 2022 and 2023" /></CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="Historical Sandstorm Events" description="Major incidents and impacts">
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {ext.historicalSandstorms.map((event: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.07 }}
                      className="flex items-start gap-4 rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                    >
                      <div className="w-20 shrink-0 text-sm font-medium text-amber-400">{event.year}</div>
                      <div className="flex-1">
                        <p className="text-sm text-platinum-500-200">{event.impact}</p>
                        <div className="flex gap-4 mt-2">
                          <span className="text-xs text-platinum-500-400">Visibility: {event.visibility}</span>
                          <Badge variant="outline" className={`text-xs ${event.damage === 'Severe' ? 'border-rose-500/50 text-rose-400' : event.damage === 'Significant' ? 'border-orange-500/50 text-orange-400' : 'border-stone-500/50 text-stone-400'}`}>{event.damage}</Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* SEISMIC TAB */}
        <TabsContent value="seismic" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Seismic Monitoring Network" description="NCM real-time earthquake tracking">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Activity className="h-5 w-5 text-purple-500" />Earthquakes Since 2023</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><PieChart data={seismicData.map(s => ({ name: s.range, value: s.count, color: s.range.includes('4') ? CHART_COLORS.rose : s.range.includes('3') ? CHART_COLORS.orange : CHART_COLORS.info }))} height={280} showLegend={true} ariaLabel="Earthquake distribution by magnitude since 2023: 2 quakes magnitude 4.0+, 9 quakes 3.0-4.0, 5 quakes 2.0-3.0" /></CardContent>
                </motion.div>
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Globe className="h-5 w-5 text-cyan-500" />Network Capabilities</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0 space-y-3">
                    {ext.seismicMonitoring.networkCapabilities.map((cap: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-platinum-800/30 rounded-lg">
                        <Radio className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span className="text-sm text-platinum-500-300">{cap}</span>
                      </div>
                    ))}
                    <div className="mt-4 p-3 bg-platinum-800/30 rounded-lg">
                      <p className="text-xs text-platinum-500-400">Historical: 521 earthquakes (M4+) within 300km of UAE in past 10 years</p>
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="Recent Seismic Events" description="2025-2026 earthquake activity">
              <ScrollArea className="h-[250px]">
                <div className="space-y-3">
                  {ext.recentSeismicEvents.map((event: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.07 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-purple-400" />
                        <div>
                          <p className="text-sm font-medium text-platinum-500-200">{event.location}</p>
                          <p className="text-xs text-platinum-500-400">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={`${parseFloat(event.magnitude) >= 5 ? 'border-rose-500/50 text-rose-400' : parseFloat(event.magnitude) >= 4 ? 'border-orange-500/50 text-orange-400' : 'border-cyan-500/50 text-cyan-400'}`}>
                          M {event.magnitude}
                        </Badge>
                        {event.depth && <span className="text-xs text-platinum-500-400">{event.depth}</span>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* MARINE/COASTAL TAB */}
        <TabsContent value="marine" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Fujairah Oil Hub Attacks (March 2026)" description="Iran conflict impact on UAE energy infrastructure">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Flame className="h-5 w-5 text-rose-500" />Attack Scale</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={fujairahData} xAxisKey="metric" bars={[{ dataKey: 'value', name: 'Count', color: CHART_COLORS.rose }]} height={280} showGrid={true} ariaLabel="Fujairah attack scale comparison showing 1,800+ Iranian missiles and drones targeted at UAE, 55 intercepted, and 2,000+ total Gulf attacks" /></CardContent>
                </motion.div>
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Siren className="h-5 w-5 text-orange-500" />Conflict Statistics</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0 space-y-3">
                    <div className="flex justify-between items-center p-3 bg-rose-500/10 rounded-lg border border-rose-500/30">
                      <span className="text-platinum-500-300">Iran Strikes on UAE</span>
                      <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">1,800+</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-rose-500/10 rounded-lg border border-rose-500/30">
                      <span className="text-platinum-500-300">UAE Ranking</span>
                      <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">More than any other targeted nation</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                      <span className="text-platinum-500-300">UAE Intercepted (Tuesday)</span>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">10 ballistic missiles, 45 drones</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                      <span className="text-platinum-500-300">Gulf Total Attacks</span>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">2,000+</Badge>
                    </div>
                  </CardContent>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="Red Tide Events" description="Algal bloom impacts on coastal infrastructure">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Waves className="h-5 w-5 text-rose-500" />Economic Impact by Sector</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><BarChart data={redTideImpact} xAxisKey="sector" bars={[{ dataKey: 'impact', name: '% Impact', color: CHART_COLORS.rose }]} height={280} showGrid={true} ariaLabel="Red tide economic impact by sector showing desalination 35%, tourism 40%, fisheries 50%, and marine life 45% impact levels" /></CardContent>
                </motion.div>
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Droplets className="h-5 w-5 text-cyan-500" />Key Statistics</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0 space-y-3">
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Frequency</span>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">2x per year</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Desalination Impact</span>
                      <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">30-40% production decrease</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Daily Losses</span>
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">$100,000/day</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Cause</span>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Dinoflagellate proliferation</Badge>
                    </div>
                  </CardContent>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="Sea Level Rise Projections" description="UAE coastal vulnerability by 2100">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Waves className="h-5 w-5 text-cyan-500" />Rise Scenarios (meters)</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0"><AreaChart data={seaLevelData} xAxisKey="scenario" areas={[{ dataKey: 'rise', name: 'Rise (m)', color: CHART_COLORS.info }]} height={280} showGrid={true} ariaLabel="Sea level rise projections by 2100 from mild 42-98cm scenario to catastrophic 9.0m worst-case scenario affecting Abu Dhabi and Dubai" /></CardContent>
                </motion.div>
                <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
                  <CardHeader className="px-0 pt-0"><CardTitle className="text-lg flex items-center gap-2"><Globe className="h-5 w-5 text-emerald-500" />UAE Vulnerability</CardTitle></CardHeader>
                  <CardContent className="px-0 pb-0 space-y-3">
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Infrastructure within meters of sea level</span>
                      <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">90%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Population within meters</span>
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">85%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Total Coastline</span>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">1,300 km</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-platinum-800/30 rounded-lg">
                      <span className="text-platinum-500-300">Coastline at Very High Risk</span>
                      <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">13.8%</Badge>
                    </div>
                  </CardContent>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* PREPAREDNESS TAB */}
        <TabsContent value="preparedness" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Emergency Response Capacity" description="Infrastructure and warning systems">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {infrastructureData.map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
                  >
                    <span className="text-platinum-500-300 text-sm">{item.name}</span>
                    <Badge variant="outline" className={`${item.status === 'good' ? 'border-emerald-500/50 text-emerald-400' : 'border-orange-500/50 text-orange-400'}`}>
                      {item.value}{item.unit || ''}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="Government Agencies" description="Disaster response framework">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {ext.disasterResponseFramework.agencies.map((agency: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-3 rounded-lg bg-gradient-to-r from-sky-500/10 to-blue-600/5 p-4 border border-cyan-500/30"
                  >
                    <Shield className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-platinum-500-200 text-sm">{agency.agency}</p>
                      <p className="text-xs text-platinum-500-400 mt-1">{agency.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="Climate Commitments" description="UAE environmental targets and progress">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-600/10 p-6 border border-emerald-500/30 text-center">
                  <Globe className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-platinum-500-100">2050</p>
                  <p className="text-sm text-platinum-500-400 mt-1">Net Zero Target</p>
                  <p className="text-xs text-emerald-400 mt-2">First Middle Eastern carbon-neutral plan</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-600/10 p-6 border border-cyan-500/30 text-center">
                  <Activity className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-platinum-500-100">40%</p>
                  <p className="text-sm text-platinum-500-400 mt-1">Emissions Reduction by 2030</p>
                  <p className="text-xs text-cyan-400 mt-2">Third NDC (2023)</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-600/10 p-6 border border-purple-500/30 text-center">
                  <Sun className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-platinum-500-100">5,000 MW</p>
                  <p className="text-sm text-platinum-500-400 mt-1">Solar Park by 2030</p>
                  <p className="text-xs text-purple-400 mt-2">Mohammed bin Rashid Al Maktoum</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <GlassPanel title="Emergency Contacts" description="Critical emergency services">
              <div className="grid gap-4 md:grid-cols-3">
                {ext.emergencyContacts.map((contact: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-lg bg-gradient-to-br from-rose-500/20 to-red-600/10 p-6 border border-rose-500/30 text-center"
                  >
                    <p className="text-4xl font-bold text-rose-400">{contact.service}</p>
                    <p className="text-sm text-platinum-500-400 mt-2">{contact.purpose}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
