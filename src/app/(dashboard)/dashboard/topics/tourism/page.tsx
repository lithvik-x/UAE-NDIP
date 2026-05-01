// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassCard, GlassPanel } from '@/components/dashboard/glass-card'
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
  Hotel,
  Users,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Plane,
  Building,
  MapPin,
  Briefcase,
  Star,
  Crown,
  Shield,
  Calendar,
  Crosshair,
  Anchor,
  Home,
  Camera,
  UserCheck,
  UsersRound,
  Activity,
  Palmtree,
  Heart,
  Ship,
  Instagram,
  Castle,
  Waves,
  PlaneLanding,
  AlertOctagon,
} from 'lucide-react'
import {
  tourismHospitalityData,
  visitorStatistics,
  hotelAccommodation,
  businessTourism,
  tourismRevenueGdp,
  tourismEmployment,
  sourceMarkets,
  perceptionReputation,
  laborHumanRights,
  overtourismInfrastructure,
  halalTourism,
  medicalTourism,
  cruiseTourism,
  shortTermRentals,
  influencerMarketing,
  heritageDarkTourism,
  adventureSafety,
  tourismSeasonality,
  crisisResilience,
  dashboardSummaryTables,
  reportMetadata,
} from '@/lib/data/topics/tourism-data'

// Animation variants for staggered mount
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
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Alert color helper
const getAlertColor = (alert?: string) => {
  if (alert === 'RED') return 'border-red-500/50'
  if (alert === 'YELLOW') return 'border-amber-500/50'
  return 'border-emerald-500/50'
}

export default function TourismHospitalityPage() {
  // Key metrics from dashboard data
  const kpis = dashboardSummaryTables.keyPerformanceIndicators
  const sentiment = dashboardSummaryTables.sentimentAnalysis

  // Sentiment distribution data
  const sentimentData = [
    { name: 'Positive', value: 65, color: CHART_COLORS.emerald },
    { name: 'Negative', value: 20, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 15, color: CHART_COLORS.gold },
  ]

  // Dubai visitor trends chart data
  const visitorTrendsData = visitorStatistics.dubaiVisitors.map(v => ({
    year: v.year.toString(),
    visitors: v.visitorsMillions,
    color: CHART_COLORS.gold,
  }))

  // Hotel occupancy data
  const occupancyData = [
    { name: 'Dubai 2025', value: 80.7, color: CHART_COLORS.gold },
    { name: 'Dubai 2024', value: 78.2, color: CHART_COLORS.platinum },
    { name: 'Abu Dhabi 2025', value: 81, color: CHART_COLORS.navy },
  ]

  // Source markets data
  const sourceMarketsData = sourceMarkets.dubaiSourceMarkets2024.map(s => ({
    name: s.region.split(' ')[0],
    value: s.percentOfVisitors,
    color: Object.values(CHART_COLORS)[sourceMarkets.dubaiSourceMarkets2024.indexOf(s) % Object.values(CHART_COLORS).length],
  }))

  // Top source countries
  const topCountriesData = sourceMarkets.dubaiTopSourceCountries2023.slice(0, 5).map(c => ({
    name: c.country,
    value: parseFloat(c.visitors.replace(/[^0-9.]/g, '')),
    color: CHART_COLORS.gold,
  }))

  // Medical tourism market share
  const medicalMarketShare = [
    { name: 'Dubai', value: 45, color: CHART_COLORS.gold },
    { name: 'Abu Dhabi', value: 30, color: CHART_COLORS.navy },
    { name: 'Sharjah', value: 12, color: CHART_COLORS.platinum },
    { name: 'RAK', value: 8, color: CHART_COLORS.emerald },
  ]

  // Influencer earnings data
  const influencerEarningsData = influencerMarketing.influencerEarnings.map(tier => ({
    name: tier.tier,
    value: parseInt(tier.earningsPerPost.replace(/[^0-9]/g, '')),
    color: tier.tier === 'Mega' ? CHART_COLORS.gold : CHART_COLORS.platinum,
  }))

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
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30">P-SECTOR</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold">Tourism & Hospitality</h1>
          <p className="mt-2 text-platinum-400">
            {tourismHospitalityData.description}
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {reportMetadata.reportCompleted}
            </span>
            <span className="flex items-center gap-1">
              <Crosshair className="h-4 w-4" />
              {reportMetadata.totalDataPoints} data points
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {reportMetadata.sourceUrlsValidated} sources
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10">
            <Hotel className="h-4 w-4" />
            Hotels
          </Button>
          <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:opacity-90 text-navy-950 gap-2">
            <TrendingUp className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Dubai Visitors"
          value="19.59M"
          previousValue={18.72}
          icon={<Plane className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Abu Dhabi Visitors"
          value="26.6M"
          previousValue={24.2}
          icon={<Users className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Hotel Occupancy"
          value="80.7%"
          previousValue={78.2}
          icon={<Hotel className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Tourism Employment"
          value="925K"
          previousValue={898.6}
          icon={<Briefcase className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'TH-1', name: 'Visitor Stats' },
            { id: 'TH-2', name: 'Hotels' },
            { id: 'TH-3', name: 'MICE' },
            { id: 'TH-4', name: 'Source Markets' },
            { id: 'TH-5', name: 'Overtourism' },
            { id: 'TH-6', name: 'Medical Tourism' },
          ].map((area) => (
            <Badge key={area.id} variant="outline" className="border-amber-500/30 text-amber-400">
              {area.id} - {area.name}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="visitors">Visitors</TabsTrigger>
          <TabsTrigger value="hotels">Hotels</TabsTrigger>
          <TabsTrigger value="mice">MICE</TabsTrigger>
          <TabsTrigger value="markets">Source Markets</TabsTrigger>
          <TabsTrigger value="overtourism">Overtourism</TabsTrigger>
          <TabsTrigger value="medical">Medical Tourism</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Tourism & Hospitality Overview"
            description="Key metrics and performance indicators"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Visitor Trends */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Plane className="h-5 w-5 text-amber-400" />
                      Dubai Visitor Trends (Millions)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <BarChart
                      data={visitorTrendsData}
                      xAxisKey="year"
                      bars={[{ dataKey: 'visitors', name: 'Visitors (M)', color: CHART_COLORS.gold }]}
                      height={200}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                {/* Sentiment Distribution */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-platinum" />
                      Sentiment Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={200}
                      showLegend={true}
                      donut={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-400" />
                    Key Performance Indicators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {kpis.map((kpi, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-amber-400">{kpi.value}</p>
                        <p className="text-sm text-platinum-400 mt-1">{kpi.kpi}</p>
                        <p className="text-xs text-emerald-400 mt-1">{kpi.trend}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment Analysis */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose" />
                    Sentiment Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {sentiment.map((item, idx) => (
                      <div key={idx} className={`p-3 rounded-lg border ${
                        item.sentiment === 'Positive' ? 'bg-emerald-500/10 border-emerald-500/30' :
                        item.sentiment === 'Negative' ? 'bg-rose-500/10 border-rose-500/30' :
                        'bg-amber-500/10 border-amber-500/30'
                      }`}>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-platinum-200">{item.topic}</span>
                          <Badge variant={item.sentiment === 'Positive' ? 'success' : item.sentiment === 'Negative' ? 'destructive' : 'warning'} className="text-xs">
                            {item.sentiment}
                          </Badge>
                        </div>
                        <p className="text-xs text-platinum-400 mt-1">{item.notes}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Visitors Tab */}
        <TabsContent value="visitors" className="space-y-6">
          <GlassPanel
            title="Visitor Statistics"
            description="Dubai and Abu Dhabi visitor numbers"
            badge="Core"
          >
            <div className="space-y-6">
              {/* Dubai Visitors */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Plane className="h-5 w-5 text-amber-400" />
                    Dubai Visitor Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {visitorStatistics.dubaiVisitors.map((year, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-16 text-center font-bold text-amber-400">{year.year}</div>
                          <div className="w-32 font-medium text-platinum-200">{year.visitorsMillions}M</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`text-sm ${year.growthRate.includes('+') ? 'text-emerald-400' : 'text-platinum-500'}`}>
                            {year.growthRate}
                          </span>
                          <span className="text-xs text-platinum-500 max-w-xs">{year.notes}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Abu Dhabi Visitors */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-navy" />
                    Abu Dhabi Visitors (2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(visitorStatistics.abuDhabiVisitors).map(([key, value]) => (
                      <div key={key} className="p-4 bg-navy/20 rounded-lg text-center">
                        <p className="text-2xl font-bold text-navy">{value}</p>
                        <p className="text-sm text-platinum-400 mt-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE Global Rankings */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-platinum" />
                    UAE Global Rankings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {visitorStatistics.uaeGlobalRankings.map((rank, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-300">{rank.index}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-amber-400">{rank.ranking}</span>
                          <span className="text-xs text-platinum-500">{rank.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Hotels Tab */}
        <TabsContent value="hotels" className="space-y-6">
          <GlassPanel
            title="Hotel & Accommodation"
            description="Hotel performance across UAE"
            badge="Key Sector"
          >
            <div className="space-y-6">
              {/* Dubai Hotels */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Hotel className="h-5 w-5 text-amber-400" />
                    Dubai Hotels (2024)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">832</p>
                      <p className="text-sm text-platinum-400">Hotels</p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">154K</p>
                      <p className="text-sm text-platinum-400">Rooms</p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">AED 538</p>
                      <p className="text-sm text-platinum-400">Avg Nightly Rate</p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">80.7%</p>
                      <p className="text-sm text-platinum-400">Occupancy</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-platinum-800/50 rounded-lg">
                    <p className="text-sm text-platinum-400">RevPAR: <span className="text-amber-400 font-bold">AED 467</span> (+11% YoY)</p>
                  </div>
                </CardContent>
              </Card>

              {/* Abu Dhabi Hotels */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-navy" />
                    Abu Dhabi Hotels (2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-navy/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-navy">81%</p>
                      <p className="text-sm text-platinum-400">Occupancy</p>
                    </div>
                    <div className="p-4 bg-navy/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-navy">Dh9.1B</p>
                      <p className="text-sm text-platinum-400">Hotel Revenues</p>
                    </div>
                    <div className="p-4 bg-navy/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-navy">+19.5%</p>
                      <p className="text-sm text-platinum-400">YoY Growth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UAE Hotel Sector */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-emerald" />
                    UAE Hotel Sector Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald">1,252</p>
                      <p className="text-xs text-platinum-400">Total Hotels</p>
                    </div>
                    <div className="p-3 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald">217K</p>
                      <p className="text-xs text-platinum-400">Total Rooms</p>
                    </div>
                    <div className="p-3 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald">AED 44.8B</p>
                      <p className="text-xs text-platinum-400">2024 Revenue</p>
                    </div>
                    <div className="p-3 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald">71%</p>
                      <p className="text-xs text-platinum-400">2022 Occupancy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Major Abu Dhabi Attractions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Castle className="h-5 w-5 text-amber-400" />
                    Major Abu Dhabi Attractions (2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {hotelAccommodation.majorAbuDhabiAttractions.map((attr, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                          <span className="text-platinum-200 font-medium">{attr.attraction}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-amber-400 font-bold">{attr.visitors}</span>
                            {attr.notes && <span className="text-xs text-emerald-400">{attr.notes}</span>}
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

        {/* MICE Tab */}
        <TabsContent value="mice" className="space-y-6">
          <GlassPanel
            title="Business Tourism (MICE)"
            description="Major events and conferences"
            badge="Economic Driver"
          >
            <div className="space-y-6">
              {/* GITEX */}
              <Card className="glass-card border-amber-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-amber-400">
                    <Crosshair className="h-5 w-5" />
                    GITEX GLOBAL 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">6,800+</p>
                      <p className="text-sm text-platinum-400">Exhibitors</p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">2,000</p>
                      <p className="text-sm text-platinum-400">Startups</p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">1,200</p>
                      <p className="text-sm text-platinum-400">Investors</p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">45th</p>
                      <p className="text-sm text-platinum-400">Edition</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-amber-500/10 rounded-lg">
                    <p className="text-sm text-platinum-300">Economic Output (2024): <span className="text-amber-400 font-bold">AED 22.35 billion ($6 billion)</span></p>
                    <p className="text-xs text-platinum-500 mt-1">Venue: Dubai World Trade Centre</p>
                  </div>
                </CardContent>
              </Card>

              {/* ADIPEC */}
              <Card className="glass-card border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                    <Activity className="h-5 w-5" />
                    ADIPEC 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald-400">205K+</p>
                      <p className="text-xs text-platinum-400">Attendees</p>
                    </div>
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald-400">2,250+</p>
                      <p className="text-xs text-platinum-400">Companies</p>
                    </div>
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald-400">1,800+</p>
                      <p className="text-xs text-platinum-400">Speakers</p>
                    </div>
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald-400">$46B</p>
                      <p className="text-xs text-platinum-400">Cross-Sector Deals</p>
                    </div>
                    <div className="p-3 bg-emerald-500/10 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald-400">30</p>
                      <p className="text-xs text-platinum-400">Country Pavilions</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-platinum-800/50 rounded-lg">
                    <p className="text-sm text-platinum-300">Dates: <span className="text-emerald-400">November 3-6, 2025</span></p>
                    <p className="text-sm text-platinum-300">Location: <span className="text-emerald-400">ADNEC, Abu Dhabi</span></p>
                  </div>
                </CardContent>
              </Card>

              {/* ATM */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PlaneLanding className="h-5 w-5 text-platinum" />
                    Arab Travel Market (ATM) 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-platinum/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">55,000+</p>
                      <p className="text-sm text-platinum-400">Delegates</p>
                    </div>
                    <div className="p-4 bg-platinum/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum">2,800+</p>
                      <p className="text-sm text-platinum-400">Exhibitors</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Source Markets Tab */}
        <TabsContent value="markets" className="space-y-6">
          <GlassPanel
            title="Source Markets"
            description="Visitor origins and demographics"
            badge="Key Data"
          >
            <div className="space-y-6">
              {/* Dubai Source Markets */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-amber-400" />
                    Dubai Source Markets (2024)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sourceMarketsData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: '% of Visitors', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Top Source Countries */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-platinum" />
                    Dubai Top Source Countries (2023)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-2">
                      {sourceMarkets.dubaiTopSourceCountries2023.map((country, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 flex items-center justify-center bg-amber-500/20 rounded-full text-amber-400 font-bold text-sm">
                              {country.rank}
                            </span>
                            <span className="text-platinum-200 font-medium">{country.country}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-amber-400 font-bold">{country.visitors}</span>
                            <span className="text-xs text-platinum-500">{country.percentOfTotal}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Abu Dhabi Source Markets */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-navy" />
                    Abu Dhabi Source Markets (2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sourceMarkets.abuDhabiSourceMarkets2025.map((market, idx) => (
                      <div key={idx} className="p-3 bg-navy/20 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-platinum-200 font-medium">{market.country}</span>
                          {market.growth && (
                            <Badge variant="success" className="text-xs">{market.growth}</Badge>
                          )}
                        </div>
                        <p className="text-sm text-platinum-400 mt-1">{market.hotelGuests}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Overtourism Tab */}
        <TabsContent value="overtourism" className="space-y-6">
          <GlassPanel
            title="Overtourism & Infrastructure"
            description="Growth pressures and capacity concerns"
            badge="Warning"
          >
            <div className="space-y-6">
              {/* Overtourism Statistics */}
              <Card className="glass-card border-amber-500/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-amber-400">
                    <AlertTriangle className="h-5 w-5" />
                    Overtourism Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">19M</p>
                      <p className="text-sm text-platinum-400">Dubai Visitors 2024</p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">25M</p>
                      <p className="text-sm text-platinum-400">Forecast 2040</p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">7:1</p>
                      <p className="text-sm text-platinum-400">Visitor-to-Resident (2034)</p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">+20%</p>
                      <p className="text-sm text-platinum-400">Housing Costs 2024</p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">45hrs</p>
                      <p className="text-sm text-platinum-400">Traffic Lost (2025)</p>
                    </div>
                    <div className="p-4 bg-amber-500/10 rounded-lg text-center">
                      <p className="text-3xl font-bold text-amber-400">29mph</p>
                      <p className="text-sm text-platinum-400">Peak Speed (2025)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Expert Warnings */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertOctagon className="h-5 w-5 text-rose" />
                    Expert Warnings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {overtourismInfrastructure.expertWarnings.map((warning, idx) => (
                        <div key={idx} className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg">
                          <p className="text-sm font-semibold text-rose-400">{warning.expert}</p>
                          <p className="text-sm text-platinum-300 mt-2 italic">{warning.quote}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Infrastructure Investment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-emerald" />
                    Infrastructure Investment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {overtourismInfrastructure.infrastructureInvestment.map((project, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-300">{project.project}</span>
                        <span className="text-emerald-400 font-bold">{project.investment}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Medical Tourism Tab */}
        <TabsContent value="medical" className="space-y-6">
          <GlassPanel
            title="Medical Tourism"
            description="Healthcare tourism market and infrastructure"
            badge="Growth Sector"
          >
            <div className="space-y-6">
              {/* Market Size */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose" />
                    UAE Medical Tourism Market
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-rose-500/10 rounded-lg text-center">
                      <p className="text-2xl font-bold text-rose-400">$334.94M</p>
                      <p className="text-sm text-platinum-400">Market Size 2024</p>
                    </div>
                    <div className="p-4 bg-rose-500/10 rounded-lg text-center">
                      <p className="text-2xl font-bold text-rose-400">$975.02M</p>
                      <p className="text-sm text-platinum-400">Market Size 2032</p>
                    </div>
                    <div className="p-4 bg-rose-500/10 rounded-lg text-center">
                      <p className="text-2xl font-bold text-rose-400">14.29%</p>
                      <p className="text-sm text-platinum-400">CAGR</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Regional Market Share */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Palmtree className="h-5 w-5 text-emerald" />
                    Regional Market Share
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={medicalMarketShare}
                    height={200}
                    showLegend={true}
                    donut={true}
                  />
                </CardContent>
              </Card>

              {/* Healthcare Infrastructure */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-platinum" />
                    Healthcare Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {medicalTourism.healthcareInfrastructure.map((item, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-xs text-platinum-500">{item.metric}</p>
                        <p className="text-lg font-bold text-platinum">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Companies */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-amber-400" />
                    Key Medical Tourism Companies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[150px]">
                    <div className="space-y-2">
                      {medicalTourism.keyMedicalTourismCompanies.map((company, idx) => (
                        <div key={idx} className="p-2 bg-platinum-800/50 rounded-lg">
                          <p className="text-sm text-platinum-300">{company.company}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
