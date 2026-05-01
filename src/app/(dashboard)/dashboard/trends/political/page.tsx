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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Landmark,
  Vote,
  Handshake,
  Building,
  Scale,
  Flag,
  Map,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Target,
  Shield,
  Rocket,
  Globe2,
  Building2,
} from 'lucide-react'
import {
  useTrendsDataArrayData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'

// ============================================================================
// CYCLE A: Enhanced Imports & Type Definitions
// ============================================================================
type DiplomaticRelation = {
  region: string
  status: number
  color: string
  trend?: 'up' | 'down' | 'stable'
  change?: number
}

type CEPAAgreement = {
  name: string
  status: 'Active' | 'Pending' | 'Expired'
  year: number
  partner: string
  tradeValue?: string
}

type StrategicPartner = {
  name: string
  value: string
  type: 'Technology' | 'Defense' | 'Investment' | 'Sovereign Wealth' | 'Energy' | 'AI'
  country: string
  trend?: 'up' | 'down' | 'stable'
}

type RegionalTension = {
  actor: string
  status: 'Critical' | 'High' | 'Medium' | 'Low'
  trend: 'escalating' | 'stable' | 'de-escalating'
  sentiment: number
}

type BRICSMetric = {
  indicator: string
  value: string
  globalShare?: string
  year?: number
}

// ============================================================================
// CYCLE B: Animation Variants
// ============================================================================
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const scaleHover = {
  whileHover: { scale: 1.02 },
  transition: { type: 'spring', stiffness: 300, damping: 20 },
}

const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
}

const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(200, 180, 140, 0.1)',
      '0 0 40px rgba(200, 180, 140, 0.2)',
      '0 0 20px rgba(200, 180, 140, 0.1)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// ============================================================================
// CYCLE C: Data Processing with 100% MD Content
// ============================================================================
export default function PoliticalTrendsPage() {
  const { data: trendsData } = useTrendsDataArrayData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-platinum-500-400"
        >
          Loading Political Trends data...
        </motion.div>
      </div>
    )
  }

  // Filter geopolitical trend data
  const geopoliticalTrend = trendsData.find(t => t.category === 'geopolitical')

  // ENRICHED DATA from MD 10-4-geopolitical-shift-results.md (100% coverage)
  const politicalData = geopoliticalTrend || {
    id: 'trend-geopolitical',
    category: 'geopolitical',
    name: 'Geopolitical Shift',
    description: 'The UAE is actively navigating a multipolar world order with BRICS membership, strategic hedging between US and China, and emerging as a middle power through effective diplomatic and economic strategies.',
    adoptionRate: 72,
    uaeAdoptionRate: 88,
    generationalBreakdown: {
      genZ: 65,
      millennial: 78,
      genX: 82,
      boomer: 75,
    },
    sentiment: {
      positive: 58,
      negative: 24,
      neutral: 18,
      overall: 0.52,
      volume: 45000,
    },
    forecasts: [
      {
        scenario: 'optimistic',
        probability: 0.72,
        timeline: '2026-2028',
        indicators: ['BRICS trade 40% of global trade', 'UAE FDI $45B (2nd globally)', 'CEPA target $1T trade by 2031'],
      },
      {
        scenario: 'baseline',
        probability: 0.60,
        timeline: '2027-2030',
        indicators: ['De-dollarization 57% USD reserves', 'Multi-aligned foreign policy success', 'UAE investment framework $1.4T in US'],
      },
      {
        scenario: 'pessimistic',
        probability: 0.28,
        timeline: '2028-2032',
        indicators: ['BRICS unity challenges', 'US-China tensions affecting trade', 'Regional instability impacts'],
      },
    ],
    keyDrivers: [
      'UAE BRICS membership since January 2024',
      'Belfer Center: UAE GDP $456B (1975: $20B)',
      'CEPA agreements concluded: 32 since September 2021',
      'Defense: EDGE Group 37th globally',
      'Microsoft $15.2B technology investment',
    ],
    credibility: {
      tier: 2,
      score: 88,
      sources: 20,
      lastVerified: '2026-04-27',
    },
    uaeRelevance: {
      score: 96,
      level: 'critical',
      justification: 'UAE BRICS membership and multipolar positioning directly impact economic strategy',
    },
    alertLevel: 'YELLOW',
    sources: [
      { name: 'Munich Security Conference', tier: 2, date: '2026-04-27' },
      { name: 'Belfer Center', tier: 2, date: '2026-04-27' },
    ],
    lastUpdated: '2026-04-27',
  }

  // Sentiment data
  const sentimentData = [
    { name: 'Positive', value: politicalData.sentiment?.positive || 58, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: politicalData.sentiment?.neutral || 18, color: CHART_COLORS.platinum },
    { name: 'Negative', value: politicalData.sentiment?.negative || 24, color: CHART_COLORS.rose },
  ]

  // ENRICHED Diplomatic relations (from MD Source Credibility Matrix & Entity Registry)
  const diplomaticData: DiplomaticRelation[] = [
    { region: 'GCC States', status: 95, color: CHART_COLORS.gold, trend: 'stable', change: 0 },
    { region: 'European Union', status: 85, color: CHART_COLORS.navy, trend: 'stable', change: 2 },
    { region: 'BRICS Nations', status: 78, color: CHART_COLORS.platinum, trend: 'up', change: 5 },
    { region: 'United States', status: 82, color: CHART_COLORS.emerald, trend: 'down', change: -3 },
    { region: 'China', status: 75, color: CHART_COLORS.rose, trend: 'up', change: 8 },
    { region: 'India', status: 88, color: CHART_COLORS.info, trend: 'up', change: 12 },
  ]

  // ENRICHED CEPA Agreements (from MD: 32 agreements, specific ones listed)
  const tradeAgreements: CEPAAgreement[] = [
    { name: 'CEPA with India', status: 'Active', year: 2022, partner: 'India', tradeValue: '$60B+' },
    { name: 'CEPA with Israel', status: 'Active', year: 2022, partner: 'Israel' },
    { name: 'CEPA with Turkey', status: 'Active', year: 2023, partner: 'Turkey' },
    { name: 'CEPA with Kenya', status: 'Active', year: 2023, partner: 'Kenya' },
    { name: 'CEPA with Singapore', status: 'Active', year: 2024, partner: 'Singapore' },
    { name: 'CEPA with Ukraine', status: 'Pending', year: 2025, partner: 'Ukraine' },
    { name: 'CEPA with Canada', status: 'Active', year: 2024, partner: 'Canada' },
    { name: 'CEPA with South Korea', status: 'Active', year: 2023, partner: 'South Korea' },
    { name: 'CEPA with Colombia', status: 'Active', year: 2024, partner: 'Colombia' },
    { name: 'CEPA with Chile', status: 'Active', year: 2023, partner: 'Chile' },
    { name: 'CEPA with Ecuador', status: 'Active', year: 2024, partner: 'Ecuador' },
    { name: 'CEPA with New Zealand', status: 'Active', year: 2024, partner: 'New Zealand' },
  ]

  // ENRICHED Key partnerships (from MD: Belfer Center data)
  const partnershipsData: StrategicPartner[] = [
    { name: 'Microsoft G42', value: '$15B+', type: 'Technology', country: 'US/UAE', trend: 'up' },
    { name: 'EDGE Group', value: '$4.7B', type: 'Defense', country: 'UAE', trend: 'stable' },
    { name: 'Mubadala', value: '$50B+', type: 'Investment', country: 'UAE', trend: 'up' },
    { name: 'ADIA', value: '$800B+', type: 'Sovereign Wealth', country: 'UAE', trend: 'up' },
    { name: 'Masdar', value: '$100B', type: 'Energy', country: 'UAE/US', trend: 'up' },
    { name: 'G42 Partnership', value: '$1.5B', type: 'AI', country: 'Microsoft/UAE', trend: 'up' },
  ]

  // ENRICHED BRICS Metrics (from MD: Munich Security Conference data)
  const bricsMetrics: BRICSMetric[] = [
    { indicator: 'Global Trade Share', value: '40%', year: 2024 },
    { indicator: 'Oil Production Share', value: '40%', year: 2024 },
    { indicator: 'Oil Export Share', value: '40%', year: 2024 },
    { indicator: 'GDP (PPP) vs G7', value: 'Surpassed', year: 2018 },
    { indicator: 'USD in Global Reserves', value: '57%', year: 2024 },
    { indicator: 'Euro in Global Reserves', value: '20%', year: 2024 },
    { indicator: 'CNY in Global Reserves', value: '2%+', year: 2024 },
  ]

  // ENRICHED Regional Tensions (from MD: MEF Inter-Arab Rivalry data)
  const regionalTensions: RegionalTension[] = [
    { actor: 'Saudi Arabia', status: 'Critical', trend: 'escalating', sentiment: -0.8 },
    { actor: 'Iran', status: 'High', trend: 'stable', sentiment: -0.5 },
    { actor: 'Qatar', status: 'Medium', trend: 'stable', sentiment: -0.3 },
    { actor: 'Turkey', status: 'Medium', trend: 'stable', sentiment: -0.2 },
    { actor: 'Pakistan', status: 'High', trend: 'escalating', sentiment: -0.6 },
  ]

  // ENRICHED Economic KPIs (from MD: Belfer Center)
  const economicKPIs = [
    { label: 'GDP (2025)', value: '$569.1B', change: '+2,845% since 1975', trend: 'up' },
    { label: 'Non-oil GDP Share', value: '77.3%', change: 'Q1 2025', trend: 'up' },
    { label: 'Africa Investment', value: '$110B', change: '26,910 companies', trend: 'up' },
    { label: 'Logistics Sector', value: 'AED 129B', change: 'Target AED 200B', trend: 'up' },
    { label: 'Defense Exports', value: '$4.7B', change: 'EDGE Rank 37th', trend: 'stable' },
    { label: 'AI Firms Rank', value: '9th', change: 'per million globally', trend: 'up' },
  ]

  // ENRICHED Climate & Energy (from MD: Frontiers/Carnegie)
  const climateMetrics = [
    { label: 'Renewable Capacity', value: '6,126 MW', target: '14.2 GW by 2030', status: 'off-track' },
    { label: 'Nuclear (Barakah)', value: '4,251 MW', target: '25% electricity', status: 'on-track' },
    { label: 'Solar Cost Position', value: 'World Lowest', target: 'Maintain', status: 'on-track' },
    { label: 'Net-Zero Target', value: '2050', target: 'First MENA country', status: 'on-track' },
    { label: 'ADNOC Net-Zero', value: '2045', target: 'Accelerated 5 years', status: 'ahead' },
  ]

  // ENRICHED India Relations (from MD: Jerusalem Post/MEF Observer)
  const indiaRelations = [
    { metric: 'Defense Partnership', status: 'Major Partner', since: 'Sep 2024' },
    { metric: 'Food Security Corridor', value: '$7B', partner: 'UAE-India' },
    { metric: 'I2U2 Membership', status: 'Active', note: 'Pax Silica declaration' },
    { metric: 'IMEC Participation', status: 'Key Partner', note: 'India-Middle East-Europe' },
    { metric: 'Space Cooperation', status: 'Active', partner: 'IN-SPACe' },
  ]

  // ============================================================================
  // CYCLE D: Render Helper Components
  // ============================================================================
  const TrendBadge = ({ trend }: { trend?: 'up' | 'down' | 'stable' }) => {
    if (!trend) return null
    return trend === 'up' ? (
      <ArrowUpRight className="h-3 w-3 text-emerald-400" />
    ) : trend === 'down' ? (
      <ArrowDownRight className="h-3 w-3 text-rose-400" />
    ) : (
      <Activity className="h-3 w-3 text-platinum-500-400" />
    )
  }

  const StatusIndicator = ({ status }: { status: string }) => {
    const colors: Record<string, string> = {
      Critical: 'text-rose-400 bg-rose-400/20',
      High: 'text-orange-400 bg-orange-400/20',
      Medium: 'text-amber-400 bg-amber-400/20',
      Low: 'text-emerald-400 bg-emerald-400/20',
      Active: 'text-emerald-400 bg-emerald-400/20',
      Pending: 'text-amber-400 bg-amber-400/20',
      Expired: 'text-rose-400 bg-rose-400/20',
    }
    return (
      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[status] || 'text-platinum-500-400 bg-platinum-400/20'}`}>
        {status}
      </span>
    )
  }

  // ============================================================================
  // CYCLE E: Main Render with Glassmorphism & Framer Motion
  // ============================================================================
  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge variant="default" className="mb-2 glass-panel border-glass-border">
              <Globe2 className="h-3 w-3 mr-1" />
              POLITICAL TRENDS
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold gradient-text-platinum-500"
          >
            Geopolitical Shift
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-platinum-500-400"
          >
            BRICS membership, multipolar positioning, diplomatic relations, and international partnerships
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <Button
            variant="outline"
            className="gap-2 glass-panel border-glass-border text-platinum-500 hover:bg-platinum/10"
          >
            <Map className="h-4 w-4" />
            View Relations
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-500-950 gap-2 glass-panel">
            <Zap className="h-4 w-4" />
            Analyze Policy
          </Button>
        </motion.div>
      </motion.div>

      {/* Key Metrics Grid */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <AnimatePresence mode="wait">
          <motion.div variants={fadeInUp} {...scaleHover}>
            <MetricCard
              title="Diplomatic Relations"
              value="165+"
              previousValue={160}
              icon={<Handshake className="h-6 w-6" />}
              gradient="indigo"
              status="success"
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div variants={fadeInUp} {...scaleHover}>
            <MetricCard
              title="CEPA Agreements"
              value="32"
              previousValue={28}
              icon={<Vote className="h-6 w-6" />}
              gradient="gold"
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div variants={fadeInUp} {...scaleHover}>
            <MetricCard
              title="UAE Adoption"
              value={`${politicalData.uaeAdoptionRate || 88}%`}
              previousValue={(politicalData.uaeAdoptionRate || 88) - 3}
              icon={<Scale className="h-6 w-6" />}
              gradient="denim"
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div variants={fadeInUp} {...scaleHover}>
            <MetricCard
              title="Alert Level"
              value={politicalData.alertLevel || 'YELLOW'}
              previousValue="GREEN"
              icon={<AlertTriangle className="h-6 w-6" />}
              gradient={politicalData.alertLevel === 'GREEN' ? 'emerald' : 'gold'}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* BRICS Status Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel border-glass-border p-4 rounded-xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              animate={glowPulse.animate}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-brics-gold/20 border border-brics-gold/40"
            >
              <Flag className="h-6 w-6 text-brics-gold" />
            </motion.div>
            <div>
              <h3 className="font-bold text-lg text-platinum-500">BRICS Membership</h3>
              <p className="text-sm text-platinum-500-400">Since January 2024 | Full Member</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-brics-gold">40%</p>
              <p className="text-xs text-platinum-500-400">Global Trade</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-brics-gold">40%</p>
              <p className="text-xs text-platinum-500-400">Oil Production</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-brics-gold">57%</p>
              <p className="text-xs text-platinum-500-400">USD Reserves</p>
            </div>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel border-glass-border" scrollable>
          <TabsTrigger value="overview" className="data-[state=active]:bg-platinum/20">
            <Target className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="diplomacy" className="data-[state=active]:bg-platinum/20">
            <Globe className="h-4 w-4 mr-2" />
            Diplomacy
          </TabsTrigger>
          <TabsTrigger value="trade" className="data-[state=active]:bg-platinum/20">
            <Landmark className="h-4 w-4 mr-2" />
            Trade Relations
          </TabsTrigger>
          <TabsTrigger value="brics" className="data-[state=active]:bg-platinum/20">
            <Rocket className="h-4 w-4 mr-2" />
            BRICS
          </TabsTrigger>
          <TabsTrigger value="forecast" className="data-[state=active]:bg-platinum/20">
            <Activity className="h-4 w-4 mr-2" />
            Forecasts
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="Geopolitical Overview"
              description="Key political indicators and diplomatic posture"
            >
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Sentiment Distribution */}
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card border-glass-border">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-platinum-500" />
                          Sentiment Distribution
                        </CardTitle>
                        <CardDescription>Public sentiment towards UAE geopolitical positioning</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PieChart
                          data={sentimentData}
                          height={280}
                          showLegend={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Key Partnerships */}
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card border-glass-border">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Building className="h-5 w-5 text-platinum-500" />
                          Strategic Partnerships
                        </CardTitle>
                        <CardDescription>Major strategic partnerships (Enriched from MD)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {partnershipsData.map((partner, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 4, backgroundColor: 'rgba(200, 180, 140, 0.1)' }}
                              className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum-500">
                                  <Building className="h-5 w-5" />
                                </div>
                                <div>
                                  <span className="text-sm font-medium text-platinum-500-200">{partner.name}</span>
                                  <p className="text-xs text-platinum-500-400">{partner.type} | {partner.country}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-platinum-500">{partner.value}</span>
                                <TrendBadge trend={partner.trend} />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Generational Adoption & Regional Tensions */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card border-glass-border">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Users className="h-5 w-5 text-platinum-500" />
                          Generational Adoption
                        </CardTitle>
                        <CardDescription>Political awareness by generation</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={[
                            { name: 'Gen Z', value: politicalData.generationalBreakdown?.genZ || 65 },
                            { name: 'Millennial', value: politicalData.generationalBreakdown?.millennial || 78 },
                            { name: 'Gen X', value: politicalData.generationalBreakdown?.genX || 82 },
                            { name: 'Boomer', value: politicalData.generationalBreakdown?.boomer || 75 },
                          ]}
                          xAxisKey="name"
                          bars={[
                            { dataKey: 'value', name: 'Awareness %', color: CHART_COLORS.platinum },
                          ]}
                          height={220}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Regional Tensions */}
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card border-glass-border">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Shield className="h-5 w-5 text-rose-400" />
                          Regional Tensions
                        </CardTitle>
                        <CardDescription>Key regional relationships status (Enriched from MD)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {regionalTensions.map((tension, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 4 }}
                              className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                            >
                              <div className="flex items-center gap-3">
                                <div className={`h-2 w-2 rounded-full ${
                                  tension.status === 'Critical' ? 'bg-rose-400' :
                                  tension.status === 'High' ? 'bg-orange-400' :
                                  tension.status === 'Medium' ? 'bg-amber-400' : 'bg-emerald-400'
                                }`} />
                                <span className="text-sm font-medium text-platinum-500-200">{tension.actor}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <StatusIndicator status={tension.status} />
                                <span className={`text-xs ${
                                  tension.trend === 'escalating' ? 'text-rose-400' :
                                  tension.trend === 'de-escalating' ? 'text-emerald-400' : 'text-platinum-500-400'
                                }`}>
                                  {tension.trend}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Diplomacy Tab */}
        <TabsContent value="diplomacy" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="Diplomatic Relations"
              description="Bilateral and multilateral diplomatic posture"
            >
              <div className="space-y-6">
                {/* Relation Status by Region */}
                <motion.div variants={fadeInUp}>
                  <Card className="glass-card border-glass-border">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5 text-platinum-500" />
                        Relation Status by Region
                      </CardTitle>
                      <CardDescription>Current diplomatic relation strength with trends</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={diplomaticData.map(d => ({
                          name: d.region,
                          value: d.status,
                          color: d.color,
                        }))}
                        xAxisKey="name"
                        bars={[
                          { dataKey: 'value', name: 'Relation %', color: CHART_COLORS.platinum },
                        ]}
                        height={300}
                        showGrid={true}
                      />
                      <div className="mt-4 flex flex-wrap gap-4">
                        {diplomaticData.map((d, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 rounded-lg bg-platinum-800/30 px-3 py-2"
                          >
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: d.color }} />
                            <span className="text-sm text-platinum-500-300">{d.region}</span>
                            <TrendBadge trend={d.trend} />
                            <span className="text-xs text-platinum-500-400">({d.change > 0 ? '+' : ''}{d.change}%)</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* India Relations & Defense */}
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* India-UAE Relations */}
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card border-glass-border">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-info" />
                          India-UAE Strategic Partnership
                        </CardTitle>
                        <CardDescription>Major defense partner since Sep 2024 (Enriched from MD)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {indiaRelations.map((rel, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 4, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                              className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                            >
                              <div>
                                <span className="text-sm font-medium text-platinum-500-200">{rel.metric || rel.partner}</span>
                                <p className="text-xs text-platinum-500-400">{rel.note || rel.since || rel.value}</p>
                              </div>
                              <StatusIndicator status={rel.status} />
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Defense Capabilities */}
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card border-glass-border">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Shield className="h-5 w-5 text-platinum-500" />
                          Defense Capabilities
                        </CardTitle>
                        <CardDescription>Military and security posture</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { label: 'EDGE Group Ranking', value: '37th globally', icon: Scale },
                            { label: 'Arms Sales (SIPRI)', value: '$4.7B', icon: Flag },
                            { label: 'Defense Budget', value: '$22.7B', icon: Building },
                            { label: 'Personnel', value: '65,000+', icon: Users },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 4 }}
                              className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                            >
                              <div className="flex items-center gap-3">
                                <item.icon className="h-5 w-5 text-platinum-500" />
                                <span className="text-sm font-medium text-platinum-500-200">{item.label}</span>
                              </div>
                              <span className="text-lg font-bold text-platinum-500">{item.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Trade Tab */}
        <TabsContent value="trade" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="Trade Relations"
              description="CEPA agreements and trade partnerships"
            >
              <div className="space-y-6">
                {/* Active CEPA Agreements */}
                <motion.div variants={fadeInUp}>
                  <Card className="glass-card border-glass-border">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Vote className="h-5 w-5 text-gold-700" />
                        Active CEPA Agreements
                      </CardTitle>
                      <CardDescription>32 Comprehensive Economic Partnership Agreements (Enriched from MD)</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[350px]">
                        <div className="space-y-2">
                          {tradeAgreements.map((agreement, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 4, backgroundColor: 'rgba(200, 180, 140, 0.1)' }}
                              className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/50 p-4"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700/20 text-gold-700">
                                  <Handshake className="h-5 w-5" />
                                </div>
                                <div>
                                  <p className="font-semibold text-platinum-500-200">{agreement.name}</p>
                                  <p className="text-sm text-platinum-500-400">
                                    Signed: {agreement.year} | Partner: {agreement.partner}
                                    {agreement.tradeValue && ` | Trade: ${agreement.tradeValue}`}
                                  </p>
                                </div>
                              </div>
                              <StatusIndicator status={agreement.status} />
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Economic KPIs & Climate Metrics */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card border-glass-border">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-emerald-400" />
                          Economic KPIs
                        </CardTitle>
                        <CardDescription>Key economic indicators (Enriched from MD Belfer Center)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {economicKPIs.map((kpi, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 4 }}
                              className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                            >
                              <div>
                                <span className="text-sm font-medium text-platinum-500-200">{kpi.label}</span>
                                <p className="text-xs text-platinum-500-400">{kpi.change}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-platinum-500">{kpi.value}</span>
                                <TrendBadge trend={kpi.trend} />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card border-glass-border">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Activity className="h-5 w-5 text-info" />
                          Climate & Energy Metrics
                        </CardTitle>
                        <CardDescription>Renewable targets and net-zero progress (Enriched from MD)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {climateMetrics.map((metric, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 4 }}
                              className="space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-platinum-500-200">{metric.label}</span>
                                <span className="text-lg font-bold text-platinum-500">{metric.value}</span>
                              </div>
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-platinum-500-400">Target: {metric.target}</span>
                                <StatusIndicator
                                  status={metric.status === 'on-track' ? 'Low' : metric.status === 'ahead' ? 'Active' : 'High'}
                                />
                              </div>
                              <Progress
                                value={metric.status === 'on-track' ? 70 : metric.status === 'ahead' ? 85 : 40}
                                className="h-1"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* BRICS Tab */}
        <TabsContent value="brics" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="BRICS & Multipolar Transition"
              description="BRICS membership metrics and de-dollarization indicators (Enriched from MD)"
            >
              <div className="space-y-6">
                {/* BRICS Metrics Grid */}
                <motion.div variants={fadeInUp}>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {bricsMetrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="glass-panel border-brics-gold/30 p-4 rounded-xl text-center"
                      >
                        <p className="text-3xl font-bold text-brics-gold">{metric.value}</p>
                        <p className="text-sm text-platinum-500-300 mt-1">{metric.indicator}</p>
                        {metric.year && (
                          <p className="text-xs text-platinum-500-500 mt-1">{metric.year}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* BRICS Details */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card border-glass-border">
                      <CardHeader>
                        <CardTitle className="text-lg">BRICS Membership Details</CardTitle>
                        <CardDescription>Since January 2024 (Enriched from MD)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            { country: 'Egypt', status: 'Full Member', since: 'Jan 2024' },
                            { country: 'Ethiopia', status: 'Full Member', since: 'Jan 2024' },
                            { country: 'Iran', status: 'Full Member', since: 'Jan 2024' },
                            { country: 'UAE', status: 'Full Member', since: 'Jan 2024' },
                            { country: 'Saudi Arabia', status: 'Undecided', since: '-' },
                            { country: 'Brazil', status: 'Founding', since: '2009' },
                            { country: 'Russia', status: 'Founding', since: '2009' },
                            { country: 'India', status: 'Founding', since: '2009' },
                          ].map((member, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ x: 4 }}
                              className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                            >
                              <div className="flex items-center gap-2">
                                <Flag className="h-4 w-4 text-platinum-500" />
                                <span className="text-sm font-medium text-platinum-500-200">{member.country}</span>
                              </div>
                              <div className="text-right">
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  member.status === 'Full Member' ? 'bg-brics-gold/20 text-brics-gold' :
                                  member.status === 'Founding' ? 'bg-platinum/20 text-platinum-500' :
                                  'bg-platinum-700/50 text-platinum-500-400'
                                }`}>
                                  {member.status}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="glass-card border-glass-border">
                      <CardHeader>
                        <CardTitle className="text-lg">De-Dollarization Progress</CardTitle>
                        <CardDescription>Currency distribution in global reserves (Enriched from MD)</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { currency: 'US Dollar', share: 57, color: CHART_COLORS.emerald },
                            { currency: 'Euro', share: 20, color: CHART_COLORS.navy },
                            { currency: 'Chinese Renminbi', share: 2, color: CHART_COLORS.rose },
                            { currency: 'Other', share: 21, color: CHART_COLORS.platinum },
                          ].map((item, idx) => (
                            <div key={idx} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-platinum-500-300">{item.currency}</span>
                                <span className="text-lg font-bold text-platinum-500">{item.share}%</span>
                              </div>
                              <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${item.share}%` }}
                                  transition={{ duration: 1, delay: idx * 0.1 }}
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: item.color }}
                                />
                              </div>
                            </div>
                          ))}
                          <div className="mt-4 p-3 rounded-lg bg-rose-400/10 border border-rose-400/20">
                            <p className="text-xs text-rose-300">
                              Note: BRICS Pay launched but common currency rejected by India. Local currency trade: Russia-China 99.1%
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Forecasts Tab */}
        <TabsContent value="forecast" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <GlassPanel
              title="Geopolitical Forecasts"
              description="Predictive scenarios for UAE geopolitical positioning"
            >
              <div className="space-y-6">
                {politicalData.forecasts?.map((forecast, idx) => (
                  <motion.div key={idx} variants={fadeInUp}>
                    <Card className="glass-card border-glass-border">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg capitalize flex items-center gap-2">
                            {forecast.scenario === 'optimistic' && <ArrowUpRight className="h-5 w-5 text-emerald-400" />}
                            {forecast.scenario === 'baseline' && <Activity className="h-5 w-5 text-platinum-500" />}
                            {forecast.scenario === 'pessimistic' && <ArrowDownRight className="h-5 w-5 text-rose-400" />}
                            {forecast.scenario} Scenario
                          </CardTitle>
                          <Badge
                            variant={forecast.scenario === 'optimistic' ? 'success' : forecast.scenario === 'baseline' ? 'default' : 'destructive'}
                          >
                            {Math.round(forecast.probability * 100)}% probability
                          </Badge>
                        </div>
                        <CardDescription>Timeline: {forecast.timeline}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {forecast.indicators?.map((indicator, iIdx) => (
                            <motion.div
                              key={iIdx}
                              whileHover={{ x: 4, backgroundColor: 'rgba(200, 180, 140, 0.1)' }}
                              className="flex items-start gap-2 rounded-lg bg-platinum-800/50 p-3"
                            >
                              <TrendingUp className="h-4 w-4 text-platinum-500 mt-0.5" />
                              <span className="text-sm text-platinum-500-200">{indicator}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}