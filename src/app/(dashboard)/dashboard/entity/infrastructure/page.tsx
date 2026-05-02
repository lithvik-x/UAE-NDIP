// @ts-nocheck
'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel, GlassCard } from '@/components/dashboard/glass-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  PieChart,
  BarChart,
  LineChart,
  AreaChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Plane,
  Ship,
  Building2,
  Zap,
  Landmark,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  TrendingUp,
  TrendingDown,
  Activity,
  Globe,
  Star,
  ChevronRight,
  Anchor,
  PlaneTakeoff,
  Radiation,
  Sun,
  Droplets,
  Database,
  Shield,
  Clock,
  Users,
  Briefcase,
  DollarSign,
  ArrowUpRight,
  Info,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  infrastructureData,
  dubaiInternationalAirport,
  zayedInternationalAirport,
  alMaktoumInternational,
  jebelAliPort,
  khalifaPort,
  portOfFujairah,
  barakahNuclear,
  mbrSolarPark,
  NoorAbuDhabi,
  uaeDesalination,
  burjKhalifa,
  palmJumeirah,
  worldIslands,
  museumOfFuture,
  louvreAbuDhabi,
  sheikhZayedGrandMosque,
  airportComparison,
  portComparison,
  energyInfrastructureSummary,
  desalinationCapacitySummary,
  feb2026DXBIncident,
  march2026DroneStrike,
  march2026BarakahThreat,
  march2026FujairahAttacks,
  sourceCredibility,
  uaeRelevanceAssessment,
  verificationStatus,
} from '@/lib/data/entity/infrastructure-data'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Premium animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const cardHover = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: 1.02,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

// Icon getters
const getInfrastructureIcon = (type: string) => {
  switch (type) {
    case 'airport': return <Plane className="h-5 w-5" />
    case 'port': return <Ship className="h-5 w-5" />
    case 'nuclear': return <Radiation className="h-5 w-5" />
    case 'solar': return <Sun className="h-5 w-5" />
    case 'desalination': return <Droplets className="h-5 w-5" />
    case 'landmark': return <Landmark className="h-5 w-5" />
    default: return <Building2 className="h-5 w-5" />
  }
}

const getCategoryBadge = (category: string) => {
  switch (category) {
    case 'airport': return <Badge variant="cyan" className="text-xs">Airport</Badge>
    case 'port': return <Badge variant="denim" className="text-xs">Port</Badge>
    case 'nuclear': return <Badge variant="emerald" className="text-xs">Nuclear</Badge>
    case 'solar': return <Badge variant="gold" className="text-xs">Solar</Badge>
    case 'desalination': return <Badge variant="cyan" className="text-xs">Desalination</Badge>
    case 'landmark': return <Badge variant="default" className="text-xs">Landmark</Badge>
    default: return <Badge variant="outline" className="text-xs">{category}</Badge>
  }
}

const getAlertBadge = (level: string) => {
  switch (level) {
    case 'RED': return <Badge variant="destructive" className="text-xs gap-1"><XCircle className="h-3 w-3" /> {level}</Badge>
    case 'YELLOW': return <Badge variant="warning" className="text-xs gap-1"><AlertTriangle className="h-3 w-3" /> {level}</Badge>
    case 'GREEN': return <Badge variant="success" className="text-xs gap-1"><CheckCircle2 className="h-3 w-3" /> {level}</Badge>
    default: return <Badge variant="outline" className="text-xs">{level}</Badge>
  }
}

export default function InfrastructurePage() {
  const data = infrastructureData
  const sourcesUnableToFetch: { source: string; reason: string }[] = []

  // Summary metrics for MetricCards
  const totalAirports = 3
  const totalPorts = 3
  const totalEnergy = 4
  const totalLandmarks = 6

  // DXB Traffic data for chart
  const dxbTrafficData = dubaiInternationalAirport.trafficStatistics.map(stat => ({
    year: stat.year,
    passengers: parseInt(stat.passengers.replace(/[^\d]/g, '')) || 0,
    cargo: stat.cargoTonnes === '—' ? 0 : parseFloat(stat.cargoTonnes.replace(/[^\d.]/g, '')) || 0,
  }))

  // Airport comparison data
  const airportChartData = airportComparison.map(a => ({
    name: a.code,
    passengers: parseFloat(a.passengers.replace(/[^\d.]/g, '')) || 0,
    freight: parseFloat(a.freightCapacity.replace(/[^\d.]/g, '')) || 0,
  }))

  // Port comparison data
  const portChartData = portComparison.map(p => ({
    name: p.port.split(' ')[0],
    teuCapacity: parseFloat(p.teuCapacity.replace(/[^\d.]/g, '')) || 0,
  }))

  // Energy comparison data
  const energyChartData = energyInfrastructureSummary.map(e => ({
    name: e.facility.split(' ')[0] + ' ' + e.facility.split(' ')[1]?.charAt(0) + '.',
    capacity: parseFloat(e.capacity.replace(/[^\d.]/g, '')) || 0,
    output: parseFloat(e.output.replace(/[^\d.]/g, '')) || 0,
  }))

  // Relevance data for chart
  const relevanceData = uaeRelevanceAssessment.map(r => ({
    name: r.infrastructure.length > 10 ? r.infrastructure.substring(0, 10) + '...' : r.infrastructure,
    score: r.uaeRelevanceScore === 'Critical' ? 100 : r.uaeRelevanceScore === 'High' ? 80 : 60,
    fullName: r.infrastructure,
  }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="emerald" className="mb-2">INFRASTRUCTURE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-emerald-500">
            Infrastructure & Landmark Intelligence
          </h1>
          <p className="mt-2 text-platinum-600 dark:text-platinum-400">
            Critical infrastructure — airports, ports, energy, and landmarks — {data.executionMetadata.dataPointsExtracted}+ data points tracked
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10">
            <Globe className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-white gap-2">
            <Star className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>
      </motion.div>

      {/* Summary Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Airports"
            value={totalAirports}
            icon={<Plane className="h-6 w-6" />}
            gradient="cyan"
            trend="up"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Ports"
            value={totalPorts}
            icon={<Anchor className="h-6 w-6" />}
            gradient="denim"
            trend="neutral"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Energy Facilities"
            value={totalEnergy}
            icon={<Zap className="h-6 w-6" />}
            gradient="gold"
            trend="up"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Landmarks"
            value={totalLandmarks}
            icon={<Landmark className="h-6 w-6" />}
            gradient="emerald"
            trend="neutral"
          />
        </motion.div>
      </motion.div>

      {/* Execution Metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <GlassPanel title="Research Execution" description="Data collection metadata">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-platinum-500" />
              <span className="text-sm text-platinum-600">Date: {data.executionMetadata.dateExecuted}</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-platinum-500" />
              <span className="text-sm text-platinum-600">Queries: {data.executionMetadata.queriesExecuted}</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-platinum-500" />
              <span className="text-sm text-platinum-600">Pages: {data.executionMetadata.pagesFetched}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-platinum-500" />
              <span className="text-sm text-platinum-600">Data Points: {data.executionMetadata.dataPointsExtracted}+</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span className="text-sm text-platinum-600">Sources: {data.executionMetadata.sourcesSuccessfullyFetched}</span>
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      <Tabs defaultValue="airports" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="airports">Airports</TabsTrigger>
          <TabsTrigger value="ports">Ports</TabsTrigger>
          <TabsTrigger value="energy">Energy</TabsTrigger>
          <TabsTrigger value="landmarks">Landmarks</TabsTrigger>
          <TabsTrigger value="incidents">2026 Incidents</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* AIRPORTS TAB */}
        <TabsContent value="airports" className="space-y-6">
          {/* DXB Traffic Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassPanel title="Dubai International Airport (DXB)" description="Traffic Statistics 2003-2025" badge="WORLD'S BUSIEST">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold">Passenger Traffic (Millions)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={dxbTrafficData}
                      areas={[
                        { dataKey: 'passengers', name: 'Passengers (M)', color: CHART_COLORS.info, fillOpacity: 0.6 },
                      ]}
                      xAxisKey="year"
                      height={250}
                      showGrid
                      showLegend
                    />
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-semibold">Cargo Throughput (Million Tonnes)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={dxbTrafficData.filter(d => d.cargo > 0)}
                      bars={[
                        { dataKey: 'cargo', name: 'Cargo (M tonnes)', color: CHART_COLORS.navy },
                      ]}
                      xAxisKey="year"
                      height={250}
                      showGrid
                      showLegend
                    />
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>

          {/* DXB Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              <GlassCard hover>
                <p className="text-xs text-platinum-500 mb-1">Weekly Flights</p>
                <p className="text-xl font-bold text-navy-900 dark:text-platinum-100">8,500+</p>
              </GlassCard>
              <GlassCard hover>
                <p className="text-xs text-platinum-500 mb-1">Destinations</p>
                <p className="text-xl font-bold text-navy-900 dark:text-platinum-100">270+</p>
              </GlassCard>
              <GlassCard hover>
                <p className="text-xs text-platinum-500 mb-1">Airlines</p>
                <p className="text-xl font-bold text-navy-900 dark:text-platinum-100">100+</p>
              </GlassCard>
              <GlassCard hover>
                <p className="text-xs text-platinum-500 mb-1">Economic Impact</p>
                <p className="text-xl font-bold text-navy-900 dark:text-platinum-100">$26.7B</p>
              </GlassCard>
              <GlassCard hover>
                <p className="text-xs text-platinum-500 mb-1">Jobs Supported</p>
                <p className="text-xl font-bold text-navy-900 dark:text-platinum-100">400K</p>
              </GlassCard>
              <GlassCard hover>
                <p className="text-xs text-platinum-500 mb-1">World Rank</p>
                <p className="text-xl font-bold text-navy-900 dark:text-platinum-100">#2</p>
              </GlassCard>
            </div>
          </motion.div>

          {/* Airport Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassPanel title="Airport Comparison" description="UAE Major Airports Overview">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-platinum-200/50">
                    <TableHead className="font-semibold">Airport</TableHead>
                    <TableHead className="font-semibold">Code</TableHead>
                    <TableHead className="font-semibold">Passengers</TableHead>
                    <TableHead className="font-semibold">Freight Capacity</TableHead>
                    <TableHead className="font-semibold">Significance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {airportComparison.map((airport, i) => (
                    <TableRow key={i} className="border-b border-platinum-100/50">
                      <TableCell className="font-medium">{airport.airport}</TableCell>
                      <TableCell><Badge variant="outline">{airport.code}</Badge></TableCell>
                      <TableCell className="text-emerald-600 font-semibold">{airport.passengers}</TableCell>
                      <TableCell>{airport.freightCapacity}</TableCell>
                      <TableCell className="text-platinum-600">{airport.significance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>
          </motion.div>

          {/* DXB Runways & Terminals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <GlassPanel title="DXB Runways">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-platinum-200/50">
                      <TableHead>Designation</TableHead>
                      <TableHead>Length</TableHead>
                      <TableHead>Surface</TableHead>
                      <TableHead>Equipment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dubaiInternationalAirport.runways.map((r, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-mono font-medium">{r.designation}</TableCell>
                        <TableCell>{r.length}</TableCell>
                        <TableCell>{r.surface}</TableCell>
                        <TableCell>{r.equipment}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </GlassPanel>
              <GlassPanel title="DXB Terminals & Concourses">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-platinum-200/50">
                      <TableHead>Facility</TableHead>
                      <TableHead>Area</TableHead>
                      <TableHead>Capacity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dubaiInternationalAirport.terminals.map((t, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{t.name}</TableCell>
                        <TableCell>{t.area}</TableCell>
                        <TableCell>{t.capacity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </GlassPanel>
            </div>
          </motion.div>

          {/* AUH Key Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassPanel title="Zayed International Airport (AUH)" description="Abu Dhabi Hub - Renamed February 9, 2024">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">2024 Statistics</h4>
                  <div className="space-y-2">
                    {zayedInternationalAirport.statistics2024.map((stat, i) => (
                      <div key={i} className="flex justify-between items-center p-2 glass-subtle rounded">
                        <span className="text-sm text-platinum-600">{stat.metric}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-navy-900">{stat.value}</span>
                          <Badge variant="success" className="text-xs">+{stat.change}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Connectivity</h4>
                  <div className="space-y-2">
                    {zayedInternationalAirport.connectivity.map((c, i) => (
                      <div key={i} className="flex justify-between items-center p-2 glass-subtle rounded">
                        <span className="text-sm text-platinum-600">{c.metric}</span>
                        <span className="font-medium text-navy-900">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-cyan-50/50 dark:bg-cyan-900/20 rounded-lg">
                <p className="text-sm text-cyan-700 dark:text-cyan-300">
                  <Info className="h-4 w-4 inline mr-2" />
                  Only US border preclearance facility in Middle East (since January 2014)
                </p>
              </div>
            </GlassPanel>
          </motion.div>

          {/* DWC Expansion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlassPanel title="Al Maktoum International (DWC)" description="Future Dubai Hub - $35B Expansion Planned">
              <div className="grid gap-4 md:grid-cols-4 mb-4">
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Projected Capacity</p>
                  <p className="text-lg font-bold text-navy-900">260M</p>
                  <p className="text-xs text-platinum-500">passengers</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Freight Capacity</p>
                  <p className="text-lg font-bold text-navy-900">12M</p>
                  <p className="text-xs text-platinum-500">tonnes</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Planned Gates</p>
                  <p className="text-lg font-bold text-navy-900">400</p>
                  <p className="text-xs text-platinum-500">aircraft</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Planned Runways</p>
                  <p className="text-lg font-bold text-navy-900">5</p>
                  <p className="text-xs text-platinum-500">parallel</p>
                </GlassCard>
              </div>
              <div className="p-3 bg-gold-50/50 dark:bg-gold-900/20 rounded-lg">
                <p className="text-sm text-gold-700 dark:text-gold-300">
                  <DollarSign className="h-4 w-4 inline mr-2" />
                  128 billion AED ($34.85B USD) expansion announced April 2024
                </p>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* PORTS TAB */}
        <TabsContent value="ports" className="space-y-6">
          {/* Port Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassPanel title="Port Capacity Comparison" description="UAE Major Ports TEU Capacity">
              <div className="grid gap-6 lg:grid-cols-2">
                <BarChart
                  data={portChartData}
                  bars={[
                    { dataKey: 'teuCapacity', name: 'TEU Capacity (M)', color: CHART_COLORS.navy },
                  ]}
                  xAxisKey="name"
                  height={300}
                  showGrid
                  showLegend
                />
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm">Port Market Share - TEU Capacity</h4>
                  <PieChart
                    data={[
                      { name: 'Jebel Ali', value: 13.7, color: CHART_COLORS.navy },
                      { name: 'Khalifa', value: 7.8, color: CHART_COLORS.info },
                      { name: 'Fujairah', value: 0.72, color: CHART_COLORS.emerald },
                    ]}
                    height={280}
                    showLegend
                  />
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Jebel Ali Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassPanel title="Jebel Ali Port" description="World's 9th Busiest - Largest Man-Made Harbour" badge="CRITICAL">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Infrastructure</h4>
                  <Table>
                    <TableBody>
                      {jebelAliPort.infrastructure.map((inf, i) => (
                        <TableRow key={i}>
                          <TableCell className="text-platinum-600">{inf.facility}</TableCell>
                          <TableCell className="font-medium">{inf.specification}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Rankings & Recognition</h4>
                  <div className="space-y-2">
                    {jebelAliPort.rankings.map((r, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 glass-subtle rounded">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm">{r.ranking}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Khalifa Port */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassPanel title="Khalifa Port" description="Abu Dhabi Flagship - First Semi-Automated Port in Region">
              <div className="grid gap-6 lg:grid-cols-3">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Capacity</h4>
                  <div className="space-y-2">
                    {khalifaPort.capacity.map((c, i) => (
                      <div key={i} className="flex justify-between p-2 glass-subtle rounded">
                        <span className="text-xs text-platinum-600">{c.metric}</span>
                        <span className="text-sm font-semibold text-navy-900">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Terminals</h4>
                  <div className="space-y-2">
                    {khalifaPort.terminals.map((t, i) => (
                      <div key={i} className="p-2 glass-subtle rounded">
                        <p className="text-sm font-medium">{t.terminal}</p>
                        <p className="text-xs text-platinum-500">{t.operator} - {t.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Innovations</h4>
                  <div className="space-y-2">
                    {khalifaPort.innovations.map((inf, i) => (
                      <div key={i} className="flex items-start gap-2 p-2 bg-emerald-50/50 dark:bg-emerald-900/20 rounded">
                        <Star className="h-4 w-4 text-emerald-500 mt-0.5" />
                        <span className="text-xs">{inf.innovation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Port of Fujairah - RED Alert */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassPanel title="Port of Fujairah" description="UAE's Only Eastern Seaboard Port - RED ALERT" badge="RED ALERT">
              <div className="p-4 bg-red-50/50 dark:bg-red-900/20 border border-red-200/50 rounded-lg mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <span className="font-semibold text-red-700 dark:text-red-300">Geopolitical Alert - March 2026</span>
                </div>
                <p className="text-sm text-red-600/80 dark:text-red-400/80">
                  Multiple Iranian attacks targeting oil storage and terminal operations. Currently under active threat.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Strategic Importance</h4>
                  <div className="space-y-2">
                    {portOfFujairah.strategicImportance.map((s, i) => (
                      <div key={i} className="flex items-start gap-2 p-2 glass-subtle rounded">
                        <Anchor className="h-4 w-4 text-navy-500 mt-0.5" />
                        <span className="text-sm">{s.item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">March 2026 Incidents</h4>
                  <div className="space-y-2">
                    {portOfFujairah.incidentsMarch2026.map((inc, i) => (
                      <div key={i} className="p-2 bg-red-50/30 dark:bg-red-900/10 rounded">
                        <p className="text-xs font-semibold text-red-700">{inc.date}</p>
                        <p className="text-sm text-red-600/80">{inc.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ENERGY TAB */}
        <TabsContent value="energy" className="space-y-6">
          {/* Energy Overview Charts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassPanel title="Energy Infrastructure Overview" description="Capacity and Output Comparison">
              <div className="grid gap-6 lg:grid-cols-2">
                <BarChart
                  data={energyChartData}
                  bars={[
                    { dataKey: 'capacity', name: 'Capacity (MW)', color: CHART_COLORS.gold },
                    { dataKey: 'output', name: 'Output (GWh)', color: CHART_COLORS.emerald },
                  ]}
                  xAxisKey="name"
                  height={300}
                  showGrid
                  showLegend
                />
                <div className="space-y-4">
                  <h4 className="font-semibold text-sm">Energy Mix - Installed Capacity</h4>
                  <PieChart
                    data={[
                      { name: 'Barakah Nuclear', value: 5600, color: CHART_COLORS.emerald },
                      { name: 'MBR Solar Park', value: 1800, color: CHART_COLORS.gold },
                      { name: 'Noor Abu Dhabi', value: 1200, color: CHART_COLORS.info },
                    ]}
                    height={280}
                    showLegend
                  />
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Barakah Nuclear */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassPanel title="Barakah Nuclear Power Plant" description="First Nuclear Plant in Arab World - 25% of UAE Electricity" badge="CRITICAL">
              <div className="grid gap-6 lg:grid-cols-3 mb-4">
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Total Capacity</p>
                  <p className="text-2xl font-bold text-navy-900">5,600 MW</p>
                  <p className="text-xs text-platinum-500">4 × 1,345 MW reactors</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Annual Generation</p>
                  <p className="text-2xl font-bold text-emerald-600">40 TWh</p>
                  <p className="text-xs text-platinum-500">Largest electricity source</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Carbon Prevented</p>
                  <p className="text-2xl font-bold text-cyan-600">21-22.4M</p>
                  <p className="text-xs text-platinum-500">tonnes annually</p>
                </GlassCard>
              </div>
              <div className="p-3 bg-red-50/50 dark:bg-red-900/20 border border-red-200/50 rounded-lg mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <span className="font-semibold text-sm text-red-700 dark:text-red-300">March 2026 Threat</span>
                </div>
                <p className="text-xs text-red-600/80 dark:text-red-400/80">
                  Iran listed Barakah among potential targets following Trump's 48-hour ultimatum. IRGC issued warnings through Fars News Agency.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {barakahNuclear.constructionTimeline.map((unit, i) => (
                  <div key={i} className="p-3 glass-subtle rounded-lg">
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">{unit.unit}</p>
                    <p className="text-xs text-platinum-500 mt-1">Start: {unit.constructionStart}</p>
                    <p className="text-xs text-emerald-600 font-medium">Operational: {unit.commercialOperation}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* MBR Solar Park */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassPanel title="Mohammed bin Rashid Solar Park" description="World's Largest Single-Site Solar Park">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Project Phases</h4>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-b border-platinum-200/50">
                        <TableHead>Phase</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Capacity</TableHead>
                        <TableHead>Tech</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mbrSolarPark.phases.map((p, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{p.phase}</TableCell>
                          <TableCell>{p.year}</TableCell>
                          <TableCell className="text-emerald-600 font-semibold">{p.capacity}</TableCell>
                          <TableCell><Badge variant="outline" className="text-xs">{p.technology}</Badge></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Phase 4 Noor Energy 1 Features</h4>
                  <div className="space-y-2">
                    {mbrSolarPark.phase4Features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 p-2 bg-gold-50/50 dark:bg-gold-900/20 rounded">
                        <Sun className="h-4 w-4 text-gold-700 mt-0.5" />
                        <span className="text-sm">{f.feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="p-2 glass-subtle rounded text-center">
                      <p className="text-lg font-bold text-gold-700">77 km²</p>
                      <p className="text-xs text-platinum-500">Area</p>
                    </div>
                    <div className="p-2 glass-subtle rounded text-center">
                      <p className="text-lg font-bold text-gold-700">$7.11B</p>
                      <p className="text-xs text-platinum-500">Total Investment</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Noor Abu Dhabi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassPanel title="Noor Abu Dhabi Solar Plant" description="World's Largest Single-Site Solar Power Plant (as of 2022)">
              <div className="grid gap-4 md:grid-cols-4 mb-4">
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Capacity</p>
                  <p className="text-xl font-bold text-emerald-600">1.2 GW</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Solar Panels</p>
                  <p className="text-xl font-bold text-navy-900">3.2M+</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Annual Output</p>
                  <p className="text-xl font-bold text-cyan-600">2,000 GWh</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Homes Powered</p>
                  <p className="text-xl font-bold text-platinum-700">~90,000</p>
                </GlassCard>
              </div>
              <div className="p-3 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-lg">
                <p className="text-sm text-emerald-700 dark:text-emerald-300">
                  <Star className="h-4 w-4 inline mr-2" />
                  2016 Tariff Bid: World's most competitive at 8.888 fils/kWh
                </p>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Desalination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassPanel title="UAE Desalination Infrastructure" description="14% of World Desalinated Water - Critical Water Security">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Abu Dhabi Capacity</h4>
                  <div className="space-y-2">
                    {uaeDesalination.abuDhabiCapacity.map((c, i) => (
                      <div key={i} className="flex justify-between p-2 glass-subtle rounded">
                        <span className="text-sm text-platinum-600">{c.metric}</span>
                        <span className="text-sm font-semibold text-navy-900">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Technology Breakdown</h4>
                  <div className="space-y-3">
                    {uaeDesalination.technologyBreakdown.map((t, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-platinum-600">{t.technology}</span>
                          <span className="text-sm font-semibold text-cyan-600">{t.percentage}</span>
                        </div>
                        <Progress value={parseFloat(t.percentage)} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {uaeDesalination.majorPlants.slice(0, 3).map((plant, i) => (
                  <div key={i} className="p-3 glass-subtle rounded-lg">
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">{plant.plant}</p>
                    <p className="text-xs text-platinum-500">{plant.location}</p>
                    <p className="text-sm text-cyan-600 font-medium">{plant.dailyCapacity} m³/day</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* LANDMARKS TAB */}
        <TabsContent value="landmarks" className="space-y-6">
          {/* Burj Khalifa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassPanel title="Burj Khalifa" description="World's Tallest Building - 828m" badge="ICONIC">
              <div className="grid gap-6 lg:grid-cols-4 mb-4">
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Height</p>
                  <p className="text-2xl font-bold text-navy-900">828m</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Floors</p>
                  <p className="text-2xl font-bold text-navy-900">163</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Construction Cost</p>
                  <p className="text-2xl font-bold text-gold-700">$1.5B</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Observatory</p>
                  <p className="text-2xl font-bold text-cyan-600">555.7m</p>
                </GlassCard>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Construction Materials</h4>
                  <div className="space-y-2">
                    {burjKhalifa.constructionMaterials.map((m, i) => (
                      <div key={i} className="flex justify-between p-2 glass-subtle rounded">
                        <span className="text-sm text-platinum-600">{m.material}</span>
                        <span className="text-sm font-medium text-navy-900">{m.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">World Records</h4>
                  <div className="space-y-2">
                    {burjKhalifa.worldRecords.slice(0, 5).map((r, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-gold-50/50 dark:bg-gold-900/20 rounded">
                        <Star className="h-4 w-4 text-gold-700" />
                        <span className="text-sm font-medium">{r.record}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Palm Jumeirah */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassPanel title="Palm Jumeirah" description="Iconic Artificial Archipelago">
              <div className="grid gap-6 lg:grid-cols-3 mb-4">
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Residents (2022)</p>
                  <p className="text-2xl font-bold text-emerald-600">25,000+</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Hotels (2024)</p>
                  <p className="text-2xl font-bold text-navy-900">~30</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Monorail Length</p>
                  <p className="text-2xl font-bold text-cyan-600">5.4 km</p>
                </GlassCard>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Structure</h4>
                  <div className="space-y-2">
                    {palmJumeirah.structure.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 glass-subtle rounded">
                        <MapPin className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm font-medium">{s.section}</span>
                        <span className="text-sm text-platinum-500">- {s.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Notable Crescent Hotels</h4>
                  <div className="flex flex-wrap gap-2">
                    {palmJumeirah.crescentHotels.map((h, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{h.hotel}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Museum of the Future */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassPanel title="Museum of the Future" description="LEED Platinum Certified - Dubai Future Foundation">
              <div className="grid gap-6 lg:grid-cols-3 mb-4">
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Cost</p>
                  <p className="text-xl font-bold text-navy-900">$136M</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Floors</p>
                  <p className="text-xl font-bold text-emerald-600">7 floors</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Visitors (Year 1)</p>
                  <p className="text-xl font-bold text-cyan-600">1M+</p>
                </GlassCard>
              </div>
              <h4 className="font-semibold text-sm mb-3">Journey to 2071 Exhibits</h4>
              <div className="grid gap-3 md:grid-cols-5">
                {museumOfFuture.exhibits.map((e, i) => (
                  <div key={i} className="p-3 glass-subtle rounded-lg text-center">
                    <p className="text-xs font-semibold text-navy-900 dark:text-platinum-100">{e.floor}</p>
                    <p className="text-sm font-medium text-emerald-600 mt-1">{e.exhibit}</p>
                    <p className="text-xs text-platinum-500 mt-1">{e.focus}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Louvre Abu Dhabi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassPanel title="Louvre Abu Dhabi" description="Arab World's Most Visited Museum - Saadiyat Island">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Size & Cost</h4>
                  <div className="space-y-2">
                    {louvreAbuDhabi.size.map((s, i) => (
                      <div key={i} className="flex justify-between p-2 glass-subtle rounded">
                        <span className="text-sm text-platinum-600">{s.metric}</span>
                        <span className="text-sm font-medium text-navy-900">{s.value}</span>
                      </div>
                    ))}
                    {louvreAbuDhabi.costStructure.map((c, i) => (
                      <div key={i} className="flex justify-between p-2 glass-subtle rounded">
                        <span className="text-sm text-platinum-600">{c.component}</span>
                        <span className="text-sm font-medium text-gold-700">{c.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Notable Exhibits</h4>
                  <div className="space-y-2">
                    {louvreAbuDhabi.notableExhibits.map((e, i) => (
                      <div key={i} className="p-2 glass-subtle rounded">
                        <p className="text-sm font-medium text-navy-900 dark:text-platinum-100">{e.artwork}</p>
                        <p className="text-xs text-platinum-500">{e.artist}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Sheikh Zayed Grand Mosque */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassPanel title="Sheikh Zayed Grand Mosque" description="Abu Dhabi - 40,000+ Worshippers Capacity">
              <div className="grid gap-6 lg:grid-cols-4 mb-4">
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Cost</p>
                  <p className="text-xl font-bold text-gold-700">$545M</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Domes</p>
                  <p className="text-xl font-bold text-navy-900">82</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Minarets</p>
                  <p className="text-xl font-bold text-navy-900">4 × 104m</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Columns</p>
                  <p className="text-xl font-bold text-emerald-600">1,000+</p>
                </GlassCard>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Architecture</h4>
                  <div className="space-y-2">
                    {sheikhZayedGrandMosque.architecture.map((a, i) => (
                      <div key={i} className="flex justify-between p-2 glass-subtle rounded">
                        <span className="text-sm text-platinum-600">{a.element}</span>
                        <span className="text-sm font-medium text-navy-900 text-right">{a.specification}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Materials</h4>
                  <div className="flex flex-wrap gap-2">
                    {sheikhZayedGrandMosque.materials.map((m, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{m.material}</Badge>
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-3 mt-4">Visiting Hours</h4>
                  <div className="space-y-2">
                    {sheikhZayedGrandMosque.visitingHours.map((h, i) => (
                      <div key={i} className="flex justify-between p-2 glass-subtle rounded">
                        <span className="text-sm text-platinum-600">{h.day}</span>
                        <span className="text-sm font-medium text-navy-900">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* World Islands Dubai */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlassPanel title="World Islands Dubai" description="Artificial Archipelago Shaped Like World Map" badge="ICONIC">
              <div className="grid gap-6 lg:grid-cols-4 mb-4">
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Islands</p>
                  <p className="text-2xl font-bold text-navy-900">260-300</p>
                  <p className="text-xs text-platinum-500">individual islands</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Sand Used</p>
                  <p className="text-2xl font-bold text-cyan-600">321M</p>
                  <p className="text-xs text-platinum-500">cubic metres</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Rock Used</p>
                  <p className="text-2xl font-bold text-cyan-600">386M</p>
                  <p className="text-xs text-platinum-500">tons</p>
                </GlassCard>
                <GlassCard hover intensity="low">
                  <p className="text-xs text-platinum-500 mb-1">Cost</p>
                  <p className="text-2xl font-bold text-gold-700">$13B</p>
                  <p className="text-xs text-platinum-500">CAD (2005)</p>
                </GlassCard>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Continent Groups</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {worldIslands.continentGroups.map((c, i) => (
                      <Badge key={i} variant="cyan" className="text-xs">{c.continent}</Badge>
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-3">Sales & Financial</h4>
                  <div className="space-y-2">
                    {worldIslands.salesFinancial.map((s, i) => (
                      <div key={i} className="flex justify-between p-2 glass-subtle rounded">
                        <span className="text-sm text-platinum-600">{s.date}</span>
                        <span className="text-sm font-medium text-navy-900">{s.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3">Construction Timeline</h4>
                  <div className="space-y-2">
                    {worldIslands.constructionTimeline.map((t, i) => (
                      <div key={i} className="flex items-start gap-2 p-2 glass-subtle rounded">
                        <MapPin className="h-4 w-4 text-emerald-500 mt-0.5" />
                        <div>
                          <span className="text-xs font-semibold text-navy-900">{t.date}</span>
                          <p className="text-sm text-platinum-600">{t.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-3 mt-4">Heart of Europe</h4>
                  <div className="p-3 bg-gold-50/50 dark:bg-gold-900/20 rounded-lg">
                    <p className="text-sm font-medium text-gold-700">Germany, Netherlands, Sweden, Ukraine, Main Europe, Switzerland, Monaco</p>
                    <p className="text-xs text-platinum-500 mt-1">Features outdoor snow, euro-only currency</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* INCIDENTS TAB */}
        <TabsContent value="incidents" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassPanel title="February 28, 2026 DXB Incident" description="Regional Security Disruption" badge="RED">
              <div className="p-4 bg-red-50/50 dark:bg-red-900/20 border border-red-200/50 rounded-lg mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <span className="font-semibold text-red-700">Operations Suspended - March 2 Resumption</span>
                </div>
              </div>
              <Table>
                <TableBody>
                  {feb2026DXBIncident.map((inc, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium text-platinum-700">{inc.aspect}</TableCell>
                      <TableCell className="text-navy-900 dark:text-platinum-100">{inc.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassPanel title="March 16, 2026 Drone Strike" description="Fuel Tank Attack Near DXB" badge="RED">
              <div className="grid gap-4 md:grid-cols-2">
                {march2026DroneStrike.map((inc, i) => (
                  <div key={i} className="p-3 bg-red-50/50 dark:bg-red-900/20 rounded-lg">
                    <p className="text-sm font-semibold text-red-700 dark:text-red-300">{inc.aspect}</p>
                    <p className="text-sm text-red-600/80 dark:text-red-400/80 mt-1">{inc.details}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassPanel title="March 2026 Barakah Nuclear Threat" description="Iranian Target List" badge="CRITICAL">
              <div className="p-4 bg-red-50/50 dark:bg-red-900/20 border border-red-200/50 rounded-lg mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Radiation className="h-5 w-5 text-red-500" />
                  <span className="font-semibold text-red-700">IRGC Warning Issued Through Fars News Agency</span>
                </div>
              </div>
              <Table>
                <TableBody>
                  {march2026BarakahThreat.map((inc, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium text-platinum-700">{inc.aspect}</TableCell>
                      <TableCell className="text-navy-900 dark:text-platinum-100">{inc.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassPanel title="March 2026 Port of Fujairah Attacks" description="Oil Terminal Strikes" badge="ACTIVE THREAT">
              <div className="space-y-3">
                {march2026FujairahAttacks.map((inc, i) => (
                  <div key={i} className="p-3 bg-red-50/50 dark:bg-red-900/20 rounded-lg">
                    <p className="text-sm font-semibold text-red-700 dark:text-red-300">{inc.date}</p>
                    <p className="text-sm text-red-600/80 dark:text-red-400/80">{inc.event}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* SOURCES TAB */}
        <TabsContent value="sources" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassPanel title="Source Credibility Assessment" description="Data Quality by Source Type">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-platinum-200/50">
                    <TableHead>Source</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Credibility</TableHead>
                    <TableHead>Data Quality</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sourceCredibility.map((s, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{s.source}</TableCell>
                      <TableCell><Badge variant="outline">{s.type}</Badge></TableCell>
                      <TableCell>
                        {s.credibility === 'Very High' && <Badge variant="success" className="text-xs">{s.credibility}</Badge>}
                        {s.credibility === 'High' && <Badge variant="info" className="text-xs">{s.credibility}</Badge>}
                        {s.credibility === 'Medium' && <Badge variant="warning" className="text-xs">{s.credibility}</Badge>}
                      </TableCell>
                      <TableCell className="text-sm text-platinum-600">{s.dataQuality}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassPanel title="UAE Relevance Assessment" description="Infrastructure Criticality Ratings">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Criticality Score</h4>
                  <RadarChart
                    data={uaeRelevanceAssessment.map(r => ({
                      name: r.infrastructure,
                      score: r.uaeRelevanceScore === 'Critical' ? 100 : r.uaeRelevanceScore === 'High' ? 75 : 50,
                      fullMark: 100,
                    }))}
                    metrics={[
                      { dataKey: 'score', name: 'Criticality Score', color: CHART_COLORS.danger },
                    ]}
                    height={300}
                    showLegend={false}
                  />
                </div>
                <div className="space-y-3">
                  {uaeRelevanceAssessment.map((r, i) => (
                    <div key={i} className="p-3 glass-subtle rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-navy-900 dark:text-platinum-100">{r.infrastructure}</span>
                      </div>
                      <Badge
                        variant={r.uaeRelevanceScore === 'Critical' ? 'destructive' : r.uaeRelevanceScore === 'High' ? 'warning' : 'outline'}
                        className="text-xs"
                      >
                        {r.uaeRelevanceScore}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassPanel title="Verification Status" description="Research Completeness">
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Status</h4>
                  <div className="space-y-2">
                    {verificationStatus.slice(0, 4).map((v, i) => (
                      <div key={i} className="flex items-center gap-2">
                        {v.status === 'Yes' ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        ) : (
                          <AlertTriangle className="h-4 w-4 text-amber-700" />
                        )}
                        <span className="text-sm text-platinum-700">{v.item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-red-600">Sources Unable to Fetch</h4>
                  <div className="space-y-2">
                    {sourcesUnableToFetch.map((s, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-red-50/50 dark:bg-red-900/20 rounded">
                        <XCircle className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-platinum-700">{s.source}</span>
                        <span className="text-xs text-platinum-500">({s.reason})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
