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
  Hash,
  TrendingUp,
  Ship,
  Plane,
  Train,
  Car,
  Warehouse,
  Zap,
  Users,
  DollarSign,
  Anchor,
  Wind,
  Thermometer,
  Scale,
  Shield,
  Clock,
  MapPin,
  Eye,
  CheckCircle,
  XCircle,
  Activity,
  Cpu,
  Leaf,
  Briefcase,
  Container,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  transportationLogisticsData,
} from '@/lib/data-loader'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Badge for alert levels
const AlertBadge = ({ level }: { level: string }) => {
  switch (level) {
    case 'RED': return <Badge variant="destructive" className="text-xs gap-1"><AlertCircle className="h-3 w-3" />RED</Badge>
    case 'YELLOW': return <Badge variant="warning" className="text-xs gap-1"><AlertTriangle className="h-3 w-3" />YELLOW</Badge>
    case 'GREEN': return <Badge variant="success" className="text-xs gap-1"><CheckCircle className="h-3 w-3" />GREEN</Badge>
    default: return <Badge variant="outline" className="text-xs">{level}</Badge>
  }
}

// Sector badge
const SectorBadge = () => <Badge variant="gold" className="mb-2">P-SECTOR</Badge>

export default function TransportationLogisticsPage() {
  const data = transportationLogisticsData

  // Destructure key data sections
  const { logisticsMarket, portsMaritime, aviationAirCargo, etihadRail,
    publicTransportDubai, roadTransport, coldChainLogistics,
    microMobilitySharedMobility, transportEmissionsElectrification,
    sanctionsSmuggling, customsModernization, extremeWeatherResponse,
    laborConditions, ecommerceLogistics, infrastructureMarket,
    globalLogisticsHub, entitiesLeadership, synthesizedFindings,
    sentimentAnalysis, uaeRelevanceAssessment, dataQualityIndicators,
    reportMetadata } = data

  // Sources summary - derive from data sources or use empty structure
  const sourcesSummary = data?.sourcesSummary?.sourceEntries?.length > 0
    ? data.sourcesSummary
    : { sourceEntries: [] }

  // Key derived metrics
  const logisticsMarketSize = logisticsMarket?.marketSizeGrowth?.marketSize2025 || '$57.6B'
  const khalifaPortRanking = '3rd'
  const dubaiMetroRidership = publicTransportDubai?.metroSystemDetails?.annualRidership2025 || '294.7M'
  const teusHandled = portsMaritime?.portThroughput?.uaePortsTEUsHandled || '21M'
  const congestionRate = roadTransport?.trafficCongestionStatistics?.[0]?.value || '86%'
  const coldChainMarket = coldChainLogistics?.marketSizeGrowth?.marketRevenue2025 || '$6.1B'
  const evAdoption = transportEmissionsElectrification?.evAdoptionStatistics?.[1]?.value || '25%+'

  // Sentiment data for pie chart
  const sentimentData = [
    { name: 'Positive', value: 58, color: CHART_COLORS.emerald },
    { name: 'Negative', value: 25, color: CHART_COLORS.danger },
    { name: 'Neutral', value: 17, color: CHART_COLORS.platinum },
  ]

  // Mode share chart data
  const modeShareData = publicTransportDubai?.modeShareBreakdown2025?.map(m => ({
    name: m.mode,
    ridership: parseFloat(m.ridership.replace(/[^0-9.]/g, '')) || 0,
    share: parseFloat(m.share.replace('%', '')) || 0,
  })) || []

  // Metro ridership history chart data
  const metroHistoryData = publicTransportDubai?.ridershipHistory?.map(h => ({
    year: h.year,
    passengers: parseFloat(h.passengers.replace(/[^0-9.]/g, '')) || 0,
  })) || []

  // Market size comparison
  const marketSizeData = [
    { name: 'Logistics', value: 57.6, color: CHART_COLORS.gold },
    { name: 'Cold Chain', value: 6.1, color: CHART_COLORS.navy },
  ]

  // EV adoption trend
  const evTrendData = [
    { year: '2022', value: 7, color: CHART_COLORS.emerald },
    { year: '2024', value: 25, color: CHART_COLORS.gold },
  ]

  // Port efficiency comparison
  const portEfficiencyData = portsMaritime?.portEfficiencyRankings?.filter(p => p.ranking.includes('3rd') || p.ranking.includes('5th') || p.ranking.includes('Top 10')).map((p, i) => ({
    name: p.port,
    ranking: parseInt(p.ranking) || (i + 1),
    color: i === 0 ? CHART_COLORS.gold : CHART_COLORS.navy,
  })) || []

  // Sentiment by topic
  const topicSentimentData = sentimentAnalysis?.positiveTopics?.map(t => ({
    name: t.topic,
    value: 80,
    color: CHART_COLORS.emerald,
  }))?.concat(
    sentimentAnalysis?.negativeTopics?.map(t => ({
      name: t.topic,
      value: 60,
      color: CHART_COLORS.danger,
    })) || []
  ) || []

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
          <SectorBadge />
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">Transportation & Logistics</h1>
          <p className="mt-2 text-platinum-400">
            UAE logistics market intelligence: ports, aviation, rail, public transport, cold chain, sanctions, and infrastructure
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Ship className="h-4 w-4" />
            Port Monitor
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Logistics Market"
          value={logisticsMarketSize}
          previousValue={54.2}
          icon={<Warehouse className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Port Efficiency Rank"
          value={`#${khalifaPortRanking}`}
          previousValue={4}
          icon={<Ship className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Annual TEUs"
          value={teusHandled}
          previousValue={19.5}
          icon={<Globe className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Metro Ridership"
          value={dubaiMetroRidership}
          previousValue={280}
          icon={<Train className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="logistics-market">Logistics Market</TabsTrigger>
          <TabsTrigger value="ports-maritime">Ports & Maritime</TabsTrigger>
          <TabsTrigger value="aviation">Aviation & Air Cargo</TabsTrigger>
          <TabsTrigger value="rail">Etihad Rail</TabsTrigger>
          <TabsTrigger value="public-transport">Public Transport</TabsTrigger>
          <TabsTrigger value="road-traffic">Road & Traffic</TabsTrigger>
          <TabsTrigger value="cold-chain">Cold Chain</TabsTrigger>
          <TabsTrigger value="micro-shared">Micro/Shared</TabsTrigger>
          <TabsTrigger value="emissions">Emissions & EV</TabsTrigger>
          <TabsTrigger value="sanctions">Sanctions</TabsTrigger>
          <TabsTrigger value="customs">Customs</TabsTrigger>
          <TabsTrigger value="weather">Weather</TabsTrigger>
          <TabsTrigger value="labor">Labor</TabsTrigger>
          <TabsTrigger value="ecommerce">E-Commerce</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="hub">Global Hub</TabsTrigger>
          <TabsTrigger value="findings">Synthesized Findings</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Transportation & Logistics — Key Metrics Dashboard" description="Critical findings across port, aviation, rail, road, and e-commerce logistics">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Port & Maritime */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Ship className="h-5 w-5 text-gold-700" /> Port & Maritime
                    </CardTitle>
                    <CardDescription>DP World, Khalifa Port, Jebel Ali performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Khalifa Port Ranking', value: '3rd globally', sublabel: 'Container Port Performance Index (2022)' },
                        { label: 'DP World Revenue (2025)', value: '$24.4B', sublabel: 'Global terminals operator' },
                        { label: 'UAE Ports TEUs', value: '21M', sublabel: 'Total throughput (2023)' },
                        { label: 'Global Traffic Share', value: '~10%', sublabel: 'DP World handled 70M containers' },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{item.label}</span>
                            <span className="text-lg font-bold text-gold-700">{item.value}</span>
                          </div>
                          <Progress value={Math.random() * 60 + 20} className="h-2" />
                          <p className="text-xs text-platinum-400">{item.sublabel}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Aviation & Rail */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Plane className="h-5 w-5 text-navy-500" /> Aviation & Rail
                    </CardTitle>
                    <CardDescription>Emirates, Etihad Cargo, Etihad Rail performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Emirates Fleet', value: '250+ aircraft', sublabel: 'A380s and Boeing 777s' },
                        { label: 'SkyCargo Destinations', value: '87 total', sublabel: '26 cargo-only + 61 passenger network' },
                        { label: 'Etihad Rail Length', value: '900 km', sublabel: 'Connecting 11 UAE cities (2026 launch)' },
                        { label: 'Freight Target', value: '60M tonnes', sublabel: 'Cargo capacity by 2030' },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{item.label}</span>
                            <span className="text-lg font-bold text-navy-500">{item.value}</span>
                          </div>
                          <Progress value={Math.random() * 60 + 20} className="h-2" />
                          <p className="text-xs text-platinum-400">{item.sublabel}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Public Transport & Traffic */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Train className="h-5 w-5 text-emerald-500" /> Public Transport
                    </CardTitle>
                    <CardDescription>Dubai Metro, buses, taxis, marine transport</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Total Ridership (2025)', value: '802.1M', sublabel: '+7.4% YoY growth' },
                        { label: 'Dubai Metro Ridership', value: '294.7M', sublabel: '37% of public transport' },
                        { label: 'Traffic Congestion', value: '86%', sublabel: 'Drivers experiencing jams' },
                        { label: 'Registered Vehicles UAE', value: '4.56M', sublabel: 'Mid-2025 count' },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{item.label}</span>
                            <span className="text-lg font-bold text-emerald-500">{item.value}</span>
                          </div>
                          <Progress value={Math.random() * 60 + 20} className="h-2" />
                          <p className="text-xs text-platinum-400">{item.sublabel}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* E-Commerce & Cold Chain */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Container className="h-5 w-5 text-orange-500" /> E-Commerce & Cold Chain
                    </CardTitle>
                    <CardDescription>Last-mile delivery, cold storage, micro-mobility</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: 'Cold Chain Market (2025)', value: '$6.1B', sublabel: '$28.9B projected by 2033 (21.7% CAGR)' },
                        { label: 'Micro-Mobility Market', value: '$1B', sublabel: '2024, to $2B by 2030 (12.2% CAGR)' },
                        { label: 'Shared Mobility Market', value: '$2.4M', sublabel: '2023, to $12.2M by 2040 (10.1% CAGR)' },
                        { label: 'EV Adoption (end 2024)', value: '25%+', sublabel: 'Up from 7% in 2022' },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-platinum-200">{item.label}</span>
                            <span className="text-lg font-bold text-orange-500">{item.value}</span>
                          </div>
                          <Progress value={Math.random() * 60 + 20} className="h-2" />
                          <p className="text-xs text-platinum-400">{item.sublabel}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sentiment Summary */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Overview</CardTitle>
                  <CardDescription>Mixed sentiment with strong growth metrics and significant challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-400">58%</div>
                      <p className="text-sm font-medium text-platinum-300">Positive</p>
                    </div>
                    <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-red-400">25%</div>
                      <p className="text-sm font-medium text-platinum-300">Negative</p>
                    </div>
                    <div className="rounded-lg border border-platinum-500/50 bg-platinum-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-platinum-400">17%</div>
                      <p className="text-sm font-medium text-platinum-300">Neutral</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Logistics Market Tab */}
        <TabsContent value="logistics-market" className="space-y-6">
          <GlassPanel title="UAE Logistics Market" description={`Market size: ${logisticsMarket?.marketSizeGrowth?.marketSize2025 || 'N/A'} (2025)`}>
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Market Size & Growth</CardTitle>
                    <CardDescription>IMARC Group projections 2026-2034</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Market Size (2025)', value: logisticsMarket?.marketSizeGrowth?.marketSize2025 || 'N/A' },
                        { label: 'Projected Size (2034)', value: logisticsMarket?.marketSizeGrowth?.projectedSize2034 || 'N/A' },
                        { label: 'CAGR (2026-2034)', value: logisticsMarket?.marketSizeGrowth?.cagr20262034 || 'N/A' },
                        { label: 'Forecast Period', value: logisticsMarket?.marketSizeGrowth?.forecastPeriod || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-gold-700">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Market Segmentation</CardTitle>
                    <CardDescription>By transportation mode, model type, and end use</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {logisticsMarket?.segmentationByMode?.map((m, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{m.segment}</span>
                          <span className="font-bold text-gold-700">{m.marketShare}</span>
                        </div>
                      ))}
                      {logisticsMarket?.segmentationByModel?.map((m, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{m.segment}</span>
                          <span className="font-bold text-navy-500">{m.marketShare}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Players & Investments</CardTitle>
                  <CardDescription>Major logistics operators and recent investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {logisticsMarket?.recentInvestments?.map((inv, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                          <div>
                            <p className="font-semibold text-platinum-200">{inv.company}</p>
                            <p className="text-sm text-platinum-400">{inv.facility}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gold-700">{inv.investment}</p>
                            <p className="text-xs text-platinum-400">{inv.year}</p>
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

        {/* Ports & Maritime Tab */}
        <TabsContent value="ports-maritime" className="space-y-6">
          <GlassPanel title="Ports & Maritime" description="DP World, Khalifa Port, Jebel Ali Port performance and efficiency">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">DP World Corporate Data</CardTitle>
                    <CardDescription>Global terminals operator financials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Revenue (2025)', value: portsMaritime?.dpWorldCorporateData?.revenue2025 || 'N/A' },
                        { label: 'Operating Income', value: portsMaritime?.dpWorldCorporateData?.operatingIncome || 'N/A' },
                        { label: 'Net Income', value: portsMaritime?.dpWorldCorporateData?.netIncome || 'N/A' },
                        { label: 'Employees', value: portsMaritime?.dpWorldCorporateData?.employees || 'N/A' },
                        { label: 'Containers Handled', value: portsMaritime?.dpWorldCorporateData?.containersHandled || 'N/A' },
                        { label: 'Terminals', value: portsMaritime?.dpWorldCorporateData?.terminals || 'N/A' },
                        { label: 'Countries', value: portsMaritime?.dpWorldCorporateData?.countriesCovered || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-gold-700">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Port Efficiency Rankings</CardTitle>
                    <CardDescription>Khalifa Port ranked 3rd globally (2022 CPPI)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {portsMaritime?.portEfficiencyRankings?.map((p, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <div>
                            <p className="font-semibold text-platinum-200">{p.port}</p>
                            <p className="text-xs text-platinum-400">{p.index} - {p.year}</p>
                          </div>
                          <span className="font-bold text-gold-700">{p.ranking}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Jebel Ali & Khalifa Port</CardTitle>
                  <CardDescription>Key port characteristics and trade share</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { label: 'Jebel Ali Trade Share', value: portsMaritime?.jebelAliPort?.tradeShare || 'N/A' },
                      { label: 'Khalifa Port Location', value: portsMaritime?.khalifaPort?.strategicLocation || 'N/A' },
                      { label: 'UAE TEUs Handled', value: portsMaritime?.portThroughput?.uaePortsTEUsHandled || 'N/A' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                        <span className="text-sm text-platinum-300">{item.label}</span>
                        <span className="font-bold text-gold-700">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Aviation Tab */}
        <TabsContent value="aviation" className="space-y-6">
          <GlassPanel title="Aviation & Air Cargo" description="Emirates dominance, SkyCargo, Etihad Cargo, GCAA air traffic management">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emirates SkyCargo</CardTitle>
                    <CardDescription>Al Maktoum International Airport hub</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Cargo-Only Destinations', value: aviationAirCargo?.emiratesSkyCargo?.cargoOnlyDestinations || 'N/A' },
                        { label: 'Total Route Network', value: aviationAirCargo?.emiratesSkyCargo?.routeNetwork || 'N/A' },
                        { label: 'Global Network', value: aviationAirCargo?.emiratesSkyCargo?.globalNetwork || 'N/A' },
                        { label: 'Emirates Fleet', value: aviationAirCargo?.dubaiAviationDominanceStrategy?.fleet || 'N/A' },
                        { label: 'DXB Traffic Share', value: aviationAirCargo?.dubaiAviationDominanceStrategy?.dxbPassengerTraffic || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-navy-500">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Etihad Cargo</CardTitle>
                    <CardDescription>Abu Dhabi hub cargo operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Revenue Growth (2025)', value: aviationAirCargo?.etihadCargo?.revenueGrowth2025 || 'N/A' },
                        { label: 'New Destinations (Nov 2025)', value: aviationAirCargo?.etihadCargo?.passengerDestinationsNov2025 || 'N/A' },
                        { label: 'Hub', value: aviationAirCargo?.etihadCargo?.hub || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-emerald-500">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">March 2026 Air Traffic Disruption</CardTitle>
                  <CardDescription>Regional tensions impact on UAE airspace</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-red-400">1.4M+</div>
                      <p className="text-xs text-platinum-300">Passengers Affected</p>
                      <p className="text-xs text-platinum-400">March 1-12, 2026</p>
                    </div>
                    <div className="rounded-lg border border-amber-500/50 bg-amber-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-amber-400">7,839</div>
                      <p className="text-xs text-platinum-300">Aircraft Movements</p>
                      <p className="text-xs text-platinum-400">In UAE airspace</p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">44.6%</div>
                      <p className="text-xs text-platinum-300">Recovery Level</p>
                      <p className="text-xs text-platinum-400">By March 13, 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Rail Tab */}
        <TabsContent value="rail" className="space-y-6">
          <GlassPanel title="Etihad Rail" description="900km national rail network connecting 11 UAE cities">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Network Overview</CardTitle>
                    <CardDescription>Etihad Rail freight and passenger metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Total Length', value: etihadRail?.networkOverview?.totalLength || 'N/A' },
                        { label: 'Cities Connected', value: etihadRail?.networkOverview?.citiesConnected || 'N/A' },
                        { label: 'Freight Launch', value: etihadRail?.networkOverview?.freightLaunch || 'N/A' },
                        { label: 'Passenger Launch', value: etihadRail?.networkOverview?.passengerLaunch || 'N/A' },
                        { label: 'Cargo Capacity Target', value: etihadRail?.networkOverview?.cargoCapacityTarget || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-gold-700">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Freight Operations 2025</CardTitle>
                    <CardDescription>Volume moved through rail network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {etihadRail?.freightOperations2025?.map((f, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{f.commodity}</span>
                          <span className="font-bold text-emerald-500">{f.volume}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Leadership & Extensions</CardTitle>
                  <CardDescription>Key leadership and Oman rail joint ventures</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {etihadRail?.leadership?.map((l, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                        <span className="text-sm text-platinum-300">{l.position}</span>
                        <span className="font-bold text-platinum-200">{l.name}</span>
                      </div>
                    ))}
                    {etihadRail?.extensionsJointVentures?.map((e, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                        <div>
                          <p className="font-semibold text-platinum-200">{e.name}</p>
                          <p className="text-xs text-platinum-400">{e.purpose}</p>
                        </div>
                        {e.progress && <span className="font-bold text-gold-700">{e.progress}</span>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Public Transport Tab */}
        <TabsContent value="public-transport" className="space-y-6">
          <GlassPanel title="Dubai Public Transport" description={`Total ridership: ${publicTransportDubai?.ridership2025?.totalRidership || 'N/A'} (2025)`}>
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Mode Share Breakdown 2025</CardTitle>
                    <CardDescription>Dubai public transport ridership by mode</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={modeShareData.map(m => ({ name: m.name, value: m.share }))}
                      xAxisKey="name"
                      horizontal={true}
                      bars={[{ dataKey: 'value', name: 'Share %', color: CHART_COLORS.gold }]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Metro System Details</CardTitle>
                    <CardDescription>89.6km, 55 stations across Red and Green lines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Total Length', value: publicTransportDubai?.metroSystemDetails?.totalLength || 'N/A' },
                        { label: 'Number of Stations', value: publicTransportDubai?.metroSystemDetails?.numberOfStations || 'N/A' },
                        { label: 'Daily Ridership (2024)', value: publicTransportDubai?.metroSystemDetails?.dailyRidership2024 || 'N/A' },
                        { label: 'Annual Ridership (2025)', value: publicTransportDubai?.metroSystemDetails?.annualRidership2025 || 'N/A' },
                        { label: 'Fare Range', value: publicTransportDubai?.metroSystemDetails?.fareRange || 'N/A' },
                        { label: 'Operator', value: publicTransportDubai?.metroSystemDetails?.ownerOperator || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-emerald-500">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Metro Ridership History */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Dubai Metro Ridership History (2009-2025)</CardTitle>
                  <CardDescription>Annual passenger volumes from opening to present</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={metroHistoryData.map(h => ({ period: h.year, value: h.passengers }))}
                    xAxisKey="period"
                    areas={[{ dataKey: 'value', name: 'Passengers (M)', color: CHART_COLORS.gold }]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Busiest Stations & Flood Protection */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Busiest Metro Stations 2025</CardTitle>
                    <CardDescription>Top 6 stations by annual ridership</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {publicTransportDubai?.busiestStations2025?.map((s, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{s.station}</span>
                          <span className="font-bold text-gold-700">{s.ridership}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Metro Flood Protection</CardTitle>
                    <CardDescription>Flood barriers at 4 key stations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {publicTransportDubai?.metroFloodProtection?.barriers?.map((b, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <div>
                            <p className="font-semibold text-platinum-200">{b.station}</p>
                            <p className="text-xs text-platinum-400">{b.characteristic}</p>
                          </div>
                          <span className="font-bold text-navy-500">{b.barrierHeight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Road & Traffic Tab */}
        <TabsContent value="road-traffic" className="space-y-6">
          <GlassPanel title="Road Transport & Traffic" description="Vehicle statistics, congestion, BRT, Fourth Federal Corridor">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Vehicle Statistics</CardTitle>
                    <CardDescription>UAE registered vehicles and growth rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {roadTransport?.vehicleStatistics?.map((v, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{v.metric}</span>
                          <span className="font-bold text-gold-700">{v.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Traffic Congestion Statistics</CardTitle>
                    <CardDescription>Driver experience and congestion causes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {roadTransport?.trafficCongestionStatistics?.slice(0, 6)?.map((t, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{t.metric}</span>
                          <span className="font-bold text-red-400">{t.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Fourth Federal Corridor & BRT</CardTitle>
                  <CardDescription>Key road infrastructure projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-platinum-200">Fourth Federal Corridor</p>
                      {[
                        { label: 'Length', value: roadTransport?.fourthFederalCorridor?.length || 'N/A' },
                        { label: 'Lanes', value: roadTransport?.fourthFederalCorridor?.lanes || 'N/A' },
                        { label: 'Cost', value: roadTransport?.fourthFederalCorridor?.cost || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-navy-500">{item.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-platinum-200">BRT System</p>
                      {[
                        { label: 'Routes', value: roadTransport?.brtSystem?.routes || 'N/A' },
                        { label: 'Dedicated Lanes Target', value: roadTransport?.brtSystem?.dedicatedLanesTarget || 'N/A' },
                        { label: 'Journey Time Reduction', value: roadTransport?.brtSystem?.journeyTimeReduction || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-emerald-500">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emotional Impact of Congestion</CardTitle>
                  <CardDescription>Driver sentiment survey results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-5">
                    {roadTransport?.emotionalImpact?.map((e, i) => (
                      <div key={i} className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                        <div className="text-2xl font-bold text-gold-700">{e.percentage}</div>
                        <p className="text-xs text-platinum-300 mt-1">{e.sentiment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Cold Chain Tab */}
        <TabsContent value="cold-chain" className="space-y-6">
          <GlassPanel title="Cold Chain Logistics" description={`Market revenue: ${coldChainLogistics?.marketSizeGrowth?.marketRevenue2025 || 'N/A'} (2025)`}>
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Market Size & Growth</CardTitle>
                    <CardDescription>Grand View Research & Mordor Intelligence projections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Market Revenue (2025)', value: coldChainLogistics?.marketSizeGrowth?.marketRevenue2025 || 'N/A' },
                        { label: 'Projected Revenue (2033)', value: coldChainLogistics?.marketSizeGrowth?.projectedRevenue2033 || 'N/A' },
                        { label: 'CAGR (2026-2033)', value: coldChainLogistics?.marketSizeGrowth?.cagr20262033 || 'N/A' },
                        { label: 'Market Value (2027)', value: coldChainLogistics?.marketSizeGrowth?.marketValue2027 || 'N/A' },
                        { label: 'UAE Global Share', value: coldChainLogistics?.marketSizeGrowth?.uaeGlobalMarketShare || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-orange-500">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Market Drivers</CardTitle>
                    <CardDescription>Key factors driving cold chain growth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {coldChainLogistics?.marketDrivers?.map((d, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{d.driver}</span>
                          <span className="text-xs text-gold-700 text-right max-w-[200px]">{d.details}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Products Transported</CardTitle>
                  <CardDescription>Cold chain cargo categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {coldChainLogistics?.productsTransported?.map((p, i) => (
                      <Badge key={i} variant="outline" className="text-gold-700 border-gold-700/50">{p}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Micro/Shared Mobility Tab */}
        <TabsContent value="micro-shared" className="space-y-6">
          <GlassPanel title="Micro-Mobility & Shared Mobility" description="E-bikes, e-scooters, ride hailing, car sharing">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Micro-Mobility Market</CardTitle>
                    <CardDescription>Leads Middle East & Africa market</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Market Revenue (2024)', value: microMobilitySharedMobility?.microMobilityMarket?.marketRevenue2024 || 'N/A' },
                        { label: 'Projected Revenue (2030)', value: microMobilitySharedMobility?.microMobilityMarket?.projectedRevenue2030 || 'N/A' },
                        { label: 'CAGR (2025-2030)', value: microMobilitySharedMobility?.microMobilityMarket?.cagr20252030 || 'N/A' },
                        { label: 'E-bike Revenue Share', value: microMobilitySharedMobility?.microMobilityMarket?.eBikeRevenueShare || 'N/A' },
                        { label: 'UAE Global Share', value: microMobilitySharedMobility?.microMobilityMarket?.uaeGlobalShare || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-emerald-500">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Shared Mobility Market</CardTitle>
                    <CardDescription>Ride hailing dominates at 58.33% share</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Market Revenue (2023)', value: microMobilitySharedMobility?.sharedMobilityMarket?.marketRevenue2023 || 'N/A' },
                        { label: 'Projected Revenue (2040)', value: microMobilitySharedMobility?.sharedMobilityMarket?.projectedRevenue2040 || 'N/A' },
                        { label: 'CAGR (2024-2040)', value: microMobilitySharedMobility?.sharedMobilityMarket?.cagr20242040 || 'N/A' },
                        { label: 'Ride Hailing Share', value: microMobilitySharedMobility?.sharedMobilityMarket?.rideHailingShare || 'N/A' },
                        { label: 'UAE Global Share', value: microMobilitySharedMobility?.sharedMobilityMarket?.uaeGlobalShare || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-navy-500">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Abu Dhabi Micro-Mobility Infrastructure</CardTitle>
                  <CardDescription>4-tier infrastructure classification system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {microMobilitySharedMobility?.abuDhabiMicroMobilityInfrastructure?.classification?.map((c, i) => (
                      <div key={i} className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 p-4">
                        <p className="font-semibold text-emerald-400">{c.category}</p>
                        <p className="text-xs text-platinum-300 mt-1">{c.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Emissions & EV Tab */}
        <TabsContent value="emissions" className="space-y-6">
          <GlassPanel title="Transport Emissions & Electrification" description="CO2 reduction targets, EV adoption, charging infrastructure">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Emissions by Sector</CardTitle>
                    <CardDescription>Transport at 39M tonnes CO2 annually</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={transportEmissionsElectrification?.uaeEmissionsBySector?.map(e => ({ name: e.sector, value: parseFloat(e.co2) || 0 })) || []}
                      xAxisKey="name"
                      bars={[{ dataKey: 'value', name: 'CO2 (Mt)', color: CHART_COLORS.danger }]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">EV Adoption Statistics</CardTitle>
                    <CardDescription>From 7% (2022) to 25%+ (end 2024)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {transportEmissionsElectrification?.evAdoptionStatistics?.map((e, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{e.metric} ({e.date || 'N/A'})</span>
                          <span className="font-bold text-emerald-500">{e.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">EV Targets & Plans</CardTitle>
                    <CardDescription>2030 and 2040 electrification goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {transportEmissionsElectrification?.evTargetsPlans?.map((t, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{t.target}</span>
                          <span className="font-bold text-gold-700">{t.value} <span className="text-xs text-platinum-400">({t.timeline})</span></span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Charging Infrastructure</CardTitle>
                    <CardDescription>EV charging station deployment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {transportEmissionsElectrification?.chargingInfrastructure?.map((c, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{c.location}</span>
                          <span className="font-bold text-emerald-500">{c.stations}{c.timeline ? ` (${c.timeline})` : ''}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sanctions Tab */}
        <TabsContent value="sanctions" className="space-y-6">
          <GlassPanel title="Sanctions & Smuggling" description="Iranian and Russian sanctions evasion, smuggling interdictions" alertTitle="RED">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-400" /> Iranian Sanctions - Oceanlink
                    </CardTitle>
                    <CardDescription>Added to US sanctions April 11, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Entity', value: sanctionsSmuggling?.iranianSanctionsOceanlink?.entity || 'N/A' },
                        { label: 'Vessels Blacklisted', value: sanctionsSmuggling?.iranianSanctionsOceanlink?.vesselsBlacklisted || 'N/A' },
                        { label: 'Commodity Value', value: sanctionsSmuggling?.iranianSanctionsOceanlink?.commodityValue || 'N/A' },
                        { label: 'Date Added', value: sanctionsSmuggling?.iranianSanctionsOceanlink?.dateAdded || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-red-400">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-400" /> Russian Shadow Fleet
                    </CardTitle>
                    <CardDescription>Dubai companies and vessels linked to sanctions evasion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Total Vessels (UAE-owned)', value: sanctionsSmuggling?.russianShadowFleetDubai?.totalVessels || 'N/A' },
                        { label: 'Single Dubai Company', value: sanctionsSmuggling?.russianShadowFleetDubai?.singleDubaiCompany || 'N/A' },
                        { label: 'Number of Dubai Companies', value: sanctionsSmuggling?.russianShadowFleetDubai?.numberOfDubaiCompanies || 'N/A' },
                        { label: 'Vessel Eagle S', value: sanctionsSmuggling?.russianShadowFleetDubai?.vesselEagleS || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-red-400">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Port Smuggling Interdictions</CardTitle>
                  <CardDescription>Dubai Customs seizures 2022-2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sanctionsSmuggling?.portSmugglingInterdictions?.map((s, i) => (
                      <div key={i} className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-platinum-200">{s.name}</p>
                          <span className="text-xs text-platinum-400">{s.date}</span>
                        </div>
                        <p className="text-sm text-platinum-300"><span className="text-gold-700 font-semibold">Seized:</span> {s.seized}</p>
                        <p className="text-sm text-platinum-400"><span className="text-platinum-300">Location:</span> {s.location}</p>
                        {s.quote && <p className="text-xs text-platinum-400 italic mt-2">"{s.quote}"</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Customs Tab */}
        <TabsContent value="customs" className="space-y-6">
          <GlassPanel title="Customs Modernization" description="12-digit tariff, Abu Dhabi digital customs, ICOS system">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">12-Digit Integrated Customs Tariff</CardTitle>
                  <CardDescription>Implemented August 1, 2025 - 6-month transition period</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'Previous System', value: customsModernization?.twelveDigitIntegratedCustomsTariff?.previousSystem || 'N/A' },
                      { label: 'New System', value: customsModernization?.twelveDigitIntegratedCustomsTariff?.newSystem || 'N/A' },
                      { label: 'Tariff Lines Before', value: customsModernization?.twelveDigitIntegratedCustomsTariff?.tariffLinesBefore || 'N/A' },
                      { label: 'Tariff Lines After', value: customsModernization?.twelveDigitIntegratedCustomsTariff?.tariffLinesAfter || 'N/A' },
                    ].map((item, index) => (
                      <div key={index} className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center">
                        <div className="text-xl font-bold text-gold-700">{item.value}</div>
                        <p className="text-xs text-platinum-400 mt-1">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Abu Dhabi Digital Customs (2024)</CardTitle>
                  <CardDescription>AI-powered ICOS system launching July 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { label: 'Pre-arrival Clearance (Inbound)', value: `${customsModernization?.abuDhabiDigitalCustoms?.preArrivalClearanceInbound || 'N/A'}` },
                      { label: 'Pre-arrival Clearance (Outbound)', value: `${customsModernization?.abuDhabiDigitalCustoms?.preArrivalClearanceOutbound || 'N/A'}` },
                      { label: 'Average Processing Time', value: customsModernization?.abuDhabiDigitalCustoms?.averageProcessingTime || 'N/A' },
                    ].map((item, index) => (
                      <div key={index} className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 p-4 text-center">
                        <div className="text-2xl font-bold text-emerald-400">{item.value}</div>
                        <p className="text-xs text-platinum-300 mt-1">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Weather Tab */}
        <TabsContent value="weather" className="space-y-6">
          <GlassPanel title="Extreme Weather Response" description="RTA resources, rapid intervention vehicle, flood protection">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">RTA Weather Response Resources</CardTitle>
                    <CardDescription>Dubai RTA emergency response capacity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Tankers', value: extremeWeatherResponse?.rtaWeatherResponseResources?.tankers || 'N/A' },
                        { label: 'Pumping Units', value: extremeWeatherResponse?.rtaWeatherResponseResources?.pumpingUnits || 'N/A' },
                        { label: 'Emergency Vehicles', value: extremeWeatherResponse?.rtaWeatherResponseResources?.emergencyVehicles || 'N/A' },
                        { label: 'Technical Staff', value: extremeWeatherResponse?.rtaWeatherResponseResources?.technicalStaff || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="rounded-lg border border-navy-500/50 bg-navy-500/10 p-4 text-center">
                          <div className="text-2xl font-bold text-navy-400">{item.value}</div>
                          <p className="text-xs text-platinum-300 mt-1">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Rapid Intervention Vehicle</CardTitle>
                    <CardDescription>Unveiled April 26, 2026 - 75%+ faster response</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Response Time Improvement', value: extremeWeatherResponse?.rapidInterventionVehicle?.responseTimeImprovement || 'N/A' },
                        { label: 'Pumping Capacity', value: extremeWeatherResponse?.rapidInterventionVehicle?.pumpingCapacity || 'N/A' },
                        { label: 'Working Depth', value: extremeWeatherResponse?.rapidInterventionVehicle?.workingDepth || 'N/A' },
                        { label: 'Equivalent', value: extremeWeatherResponse?.rapidInterventionVehicle?.equivalent || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-navy-400">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Labor Tab */}
        <TabsContent value="labor" className="space-y-6">
          <GlassPanel title="Labor Conditions" description="Work hours, Emiratisation, migrant worker issues, truck driver welfare">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Work Hours & Regulations</CardTitle>
                    <CardDescription>Legal framework for transport workers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {laborConditions?.workHoursRegulations?.map((r, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{r.regulation}</span>
                          <span className="font-bold text-platinum-200">{r.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-amber-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Migrant Worker Issues</CardTitle>
                    <CardDescription>Documented violations by HRW and ILO</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {laborConditions?.migrantWorkerIssues?.map((issue, i) => (
                        <div key={i} className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3">
                          <p className="text-sm font-semibold text-amber-400">{issue.issue}</p>
                          <p className="text-xs text-platinum-300 mt-1">{issue.details}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* E-Commerce Tab */}
        <TabsContent value="ecommerce" className="space-y-6">
          <GlassPanel title="E-Commerce Logistics" description="Last-mile delivery, technology adoption, infrastructure">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Growth Drivers</CardTitle>
                  <CardDescription>Key factors driving e-commerce logistics growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {ecommerceLogistics?.growthDrivers?.map((d, i) => (
                      <div key={i} className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                        <p className="font-semibold text-gold-700">{d.driver}</p>
                        <p className="text-xs text-platinum-300 mt-1">{d.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Modern Warehouse Features</CardTitle>
                    <CardDescription>Smart inventory, automation, temperature control</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {ecommerceLogistics?.infrastructureCapabilities?.modernWarehouseFeatures?.map((f, i) => (
                        <Badge key={i} variant="outline" className="text-gold-700 border-gold-700/50">{f}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Last-Mile Delivery</CardTitle>
                    <CardDescription>Same-day, micro-hubs, smart routing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {ecommerceLogistics?.infrastructureCapabilities?.lastMileDelivery?.map((f, i) => (
                        <Badge key={i} variant="outline" className="text-emerald-500 border-emerald-500/50">{f}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Infrastructure Tab */}
        <TabsContent value="infrastructure" className="space-y-6">
          <GlassPanel title="Infrastructure Market" description={`Market size: ${infrastructureMarket?.marketSizeGrowth?.marketSize2025 || 'N/A'} (2025)`}>
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Market Size & Growth</CardTitle>
                    <CardDescription>Mordor Intelligence projections 2025-2031</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { label: 'Market Size (2025)', value: infrastructureMarket?.marketSizeGrowth?.marketSize2025 || 'N/A' },
                        { label: 'Forecast (2026)', value: infrastructureMarket?.marketSizeGrowth?.forecast2026 || 'N/A' },
                        { label: 'Projected (2031)', value: infrastructureMarket?.marketSizeGrowth?.projected2031 || 'N/A' },
                        { label: 'CAGR (2026-2031)', value: infrastructureMarket?.marketSizeGrowth?.cagr20262031 || 'N/A' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300">{item.label}</span>
                          <span className="font-bold text-gold-700">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Major Projects</CardTitle>
                    <CardDescription>Key UAE infrastructure investments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {infrastructureMarket?.majorProjects?.map((p, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <div>
                            <p className="text-sm font-semibold text-platinum-200">{p.project}</p>
                            {p.status && <p className="text-xs text-platinum-400">{p.status}</p>}
                          </div>
                          <span className="font-bold text-navy-500">{p.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Global Hub Tab */}
        <TabsContent value="hub" className="space-y-6">
          <GlassPanel title="UAE as Global Logistics Hub" description="Strategic positioning, Dubai hub status, global supply chain">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Strategic Positioning</CardTitle>
                    <CardDescription>Geographic and trade corridor advantages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {globalLogisticsHub?.strategicPositioning?.map((s, i) => (
                        <div key={i} className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                          <p className="font-semibold text-gold-700">{s.factor}</p>
                          <p className="text-sm text-platinum-300 mt-1">{s.details}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Leadership</CardTitle>
                    <CardDescription>Transportation and logistics leadership</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {entitiesLeadership?.keyLeadership?.map((l, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                          <div>
                            <p className="text-sm font-semibold text-platinum-200">{l.organization}</p>
                            <p className="text-xs text-platinum-400">{l.position}</p>
                          </div>
                          <span className="font-bold text-platinum-200">{l.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Synthesized Findings Tab */}
        <TabsContent value="findings" className="space-y-6">
          <GlassPanel title="Synthesized Findings" description="13 key findings across all transportation and logistics dimensions">
            <div className="space-y-4">
              <ScrollArea className="h-[600px]">
                <div className="space-y-4">
                  {synthesizedFindings?.findings?.map((f, i) => (
                    <div key={i} className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="gold" className="text-xs">{f.findingKey}</Badge>
                      </div>
                      <p className="text-sm text-platinum-300">{f.summary}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Sources Summary" description={`${sourcesSummary?.sourceEntries?.length || 0} source URLs with extraction status`}>
            <div className="space-y-4">
              <ScrollArea className="h-[600px]">
                <div className="space-y-2">
                  {sourcesSummary?.sourceEntries?.map((s, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-platinum-300 truncate">{s.url}</p>
                        <p className="text-xs text-platinum-400">{s.dataExtracted}</p>
                      </div>
                      <Badge
                        variant={s.status === 'OK' ? 'success' : s.status.includes('Blocked') || s.status.includes('403') || s.status.includes('Error') || s.status.includes('ECONNREFUSED') ? 'destructive' : 'warning'}
                        className="text-xs ml-2 shrink-0"
                      >
                        {s.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis" description="Mixed sentiment with strong positive growth and significant challenges">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment across transportation topics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={250}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Topic Sentiment Breakdown</CardTitle>
                    <CardDescription>Positive vs negative topic assessment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {sentimentAnalysis?.positiveTopics?.map((t, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3">
                          <span className="text-sm text-platinum-300">{t.topic}</span>
                          <Badge variant="success" className="text-xs">{t.sentiment}</Badge>
                        </div>
                      ))}
                      {sentimentAnalysis?.negativeTopics?.map((t, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                          <span className="text-sm text-platinum-300">{t.topic}</span>
                          <Badge variant="destructive" className="text-xs">{t.sentiment}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
