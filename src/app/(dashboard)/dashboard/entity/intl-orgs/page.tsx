// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassCard, GlassPanel } from '@/components/dashboard/glass-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  LineChart,
  BarChart,
  PieChart,
  AreaChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Building,
  TrendingUp,
  Users,
  AlertCircle,
  CheckCircle,
  XCircle,
  Activity,
  Heart,
  Shield,
  Star,
  Award,
  Handshake,
  Plane,
  Briefcase,
  Flag,
  Crown,
  Gem,
  Target,
  Clock,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Zap,
  Globe2,
  Landmark,
  Scale,
  Building2,
  TreePine,
  Wrench,
  HeartHandshake,
} from 'lucide-react'
import { internationalOrgsData, summaryMetrics } from '@/lib/data/entity/international-orgs-data'

// Animation variants
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

const cardHoverVariants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: 1.02,
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

export default function InternationalOrgsPage() {
  const data = internationalOrgsData

  // UN System summary
  const unAgencies = data.unSystem.agencies

  // Metric cards data
  const metricCards = [
    {
      title: 'UN Agencies in UAE',
      value: summaryMetrics.totalUNAgencies,
      icon: <Globe className="h-6 w-6" />,
      gradient: 'emerald' as const,
      trend: 'up' as const,
    },
    {
      title: 'UAE Embassies Abroad',
      value: summaryMetrics.totalEmbassies,
      icon: <Building2 className="h-6 w-6" />,
      gradient: 'denim' as const,
      trend: 'stable' as const,
    },
    {
      title: 'Sudan Aid (2015-2025)',
      value: summaryMetrics.totalHumanitarianAidSudan,
      icon: <HeartHandshake className="h-6 w-6" />,
      gradient: 'gold' as const,
      trend: 'up' as const,
    },
    {
      title: 'WHO Hub Countries Served',
      value: summaryMetrics.whoHubCountriesServed,
      icon: <Activity className="h-6 w-6" />,
      gradient: 'cyan' as const,
      trend: 'up' as const,
    },
  ]

  // GDP Growth Chart Data
  const gdpGrowthData = data.statistics.economicIndicators.map((item) => ({
    name: item.year,
    imf: item.gdpGrowthIMF ? parseFloat(item.gdpGrowthIMF.replace('%', '')) : null,
    worldBank: item.gdpGrowthWorldBank ? parseFloat(item.gdpGrowthWorldBank.replace('%', '')) : null,
    inflation: item.inflationIMF ? parseFloat(item.inflationIMF.replace('%', '')) : null,
  }))

  // Humanitarian Aid Data
  const humanitarianAidData = data.humanitarian.majorCommitments
    .filter((c) => c.amount > 10)
    .map((c) => ({
      name: c.recipient.length > 12 ? c.recipient.substring(0, 12) + '...' : c.recipient,
      value: c.amount,
      fullName: c.recipient,
    }))

  // OPEC Production Data
  const oilProductionData = [
    { name: 'March 2026', value: 1892, label: 'b/d (thousands)' },
  ]

  // Trade Achievement Data
  const tradeData = [
    { name: '2021', value: 949, label: '$949B' },
    { name: '2025', value: 1637, label: '$1.637T' },
  ]

  // Sentiment distribution for charts
  const sentimentCounts = {
    positive: unAgencies.filter((a) => a.sentiment === 'POSITIVE').length,
    mixed: unAgencies.filter((a) => a.sentiment === 'MIXED').length,
    negative: unAgencies.filter((a) => a.sentiment === 'NEGATIVE').length,
  }

  const sentimentData = [
    { name: 'Positive', value: sentimentCounts.positive, color: CHART_COLORS.emerald },
    { name: 'Mixed', value: sentimentCounts.mixed, color: CHART_COLORS.gold },
    { name: 'Neutral/Negative', value: sentimentCounts.negative, color: CHART_COLORS.rose },
  ].filter((d) => d.value > 0)

  // UAE Relevance data
  const relevanceData = unAgencies
    .map((a) => ({
      name: a.name.replace(' UAE', ''),
      relevance: a.uaeRelevance,
    }))
    .sort((a, b) => b.relevance - a.relevance)

  // Timeline data for 2026
  const timelineData = data.keyDevelopments2026.timeline.map((t) => ({
    date: t.date,
    event: t.event,
    impact: t.impact,
  }))

  // Key findings based on data
  const keyFindings = [
    {
      title: 'Global Humanitarian Hub',
      description: 'Dubai Humanitarian Hub hosts largest global UNHCR stockpile, serving 70+ countries with 20M+ people annually',
      icon: <Globe className="h-5 w-5" />,
      color: 'emerald',
    },
    {
      title: 'Sudan Crisis Response',
      description: 'UAE provided $4.24 billion in aid to Sudan (2015-2025), including $784 million since 2023 conflict',
      icon: <HeartHandshake className="h-5 w-5" />,
      color: 'gold',
    },
    {
      title: 'Trade Leadership',
      description: 'UAE became 9th largest global exporter in 2025 with $1.637 trillion in goods exports',
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'denim',
    },
    {
      title: 'WHO Logistics Disruption',
      description: 'WHO Dubai hub suspended March 5, 2026 due to Iran conflict, resumed March 6, 2026',
      icon: <AlertCircle className="h-5 w-5" />,
      color: 'rose',
    },
    {
      title: 'Diplomatic Leadership',
      description: 'UAE chaired Arab League emergency meetings on Israeli settlements (Feb) and Iranian attacks (March)',
      icon: <Shield className="h-5 w-5" />,
      color: 'cyan',
    },
    {
      title: 'IMO Re-election',
      description: 'UAE re-elected to IMO Council Category B for 5th consecutive term (Nov 2025)',
      icon: <Award className="h-5 w-5" />,
      color: 'purple',
    },
  ]

  // Helper functions
  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case 'POSITIVE':
        return <Badge variant="success" className="text-xs">Positive</Badge>
      case 'NEGATIVE':
        return <Badge variant="destructive" className="text-xs">Negative</Badge>
      case 'MIXED':
        return <Badge variant="warning" className="text-xs">Mixed</Badge>
      default:
        return <Badge variant="outline" className="text-xs">{sentiment}</Badge>
    }
  }

  const getRelevanceBadge = (level: string) => {
    switch (level) {
      case 'CRITICAL':
        return <Badge variant="destructive" className="text-xs">Critical</Badge>
      case 'HIGH':
        return <Badge variant="warning" className="text-xs">High</Badge>
      case 'MEDIUM':
        return <Badge variant="info" className="text-xs">Medium</Badge>
      default:
        return <Badge variant="outline" className="text-xs">{level}</Badge>
    }
  }

  const getTrendIcon = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return <ArrowUpRight className="h-4 w-4 text-emerald-500" />
      case 'down':
        return <ArrowDownRight className="h-4 w-4 text-red-500" />
      default:
        return <Minus className="h-4 w-4 text-platinum-400" />
    }
  }

  return (
    <div className="space-y-8 p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Premium Header */}
        <motion.div variants={itemVariants} className="flex items-start justify-between">
          <div>
            <Badge variant="denim" className="mb-2 text-xs font-bold tracking-wider">
              DIPLOMATIC INTELLIGENCE
            </Badge>
            <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy">
              International Organizations & Diplomatic Corps
            </h1>
            <p className="mt-2 text-platinum-600 dark:text-platinum-400 font-rajdhani font-medium">
              {data.overview.tableOfContents.length} content sections · {data.overview.executionMetadata.queriesExecuted} queries executed · Last enriched {data.overview.executionMetadata.dateEnriched}
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="gap-2 border-navy/30 text-navy hover:bg-navy/10"
            >
              <Globe className="h-4 w-4" />
              Export Report
            </Button>
            <Button className="bg-gradient-navy hover:opacity-90 text-platinum-100 gap-2">
              <Star className="h-4 w-4" />
              Refresh Data
            </Button>
          </div>
        </motion.div>

        {/* Summary Metrics */}
        <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metricCards.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={cardHoverVariants}
              initial="rest"
              whileHover="hover"
            >
              <MetricCard
                title={metric.title}
                value={metric.value}
                icon={metric.icon}
                gradient={metric.gradient}
                trend={metric.trend}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* UN System Overview */}
        <motion.div variants={itemVariants}>
          <GlassPanel
            title="UN System in UAE"
            description={`${data.unSystem.overview.agenciesCount} agencies with UAE presence`}
            badge="UN System"
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {/* UN Overview Card */}
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Globe className="h-4 w-4 text-emerald-500" />
                    UN Resident Coordinator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-navy-900 dark:text-platinum-100">
                    {data.unSystem.overview.residentCoordinator}
                  </p>
                  <p className="text-sm text-platinum-500">{data.unSystem.overview.nationality}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-platinum-500">First UN Operations</span>
                      <span className="font-medium">{data.unSystem.overview.firstUNOperations}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-platinum-500">Agencies in UAE</span>
                      <span className="font-medium">{data.unSystem.overview.agenciesCount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* UN Agencies Chart */}
              <Card className="glass-card col-span-2">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Building className="h-4 w-4 text-denim-500" />
                    UN Agencies by UAE Relevance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={relevanceData}
                    bars={[{ dataKey: 'relevance', name: 'UAE Relevance', color: CHART_COLORS.denim }]}
                    xAxisKey="name"
                    height={200}
                    showGrid={false}
                    showLegend={false}
                  />
                </CardContent>
              </Card>
            </div>

            {/* UN Agencies Table */}
            <div className="mt-6">
              <Table variant="medium">
                <TableHeader>
                  <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                    <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Agency</TableHead>
                    <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Full Name</TableHead>
                    <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">UAE Office</TableHead>
                    <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Relevance</TableHead>
                    <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Sentiment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {unAgencies.map((agency) => (
                    <TableRow
                      key={agency.id}
                      className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors"
                    >
                      <TableCell>
                        <span className="font-semibold text-navy-900 dark:text-platinum-100">{agency.name}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-600 dark:text-platinum-400">{agency.fullName}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-600 dark:text-platinum-400">{agency.uaeOffice || 'N/A'}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 w-20">
                          <Progress value={agency.uaeRelevance} className="h-1.5" />
                          <span className="text-sm font-medium">{agency.uaeRelevance}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getSentimentBadge(agency.sentiment)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </GlassPanel>
        </motion.div>

        {/* Humanitarian Leadership */}
        <motion.div variants={itemVariants}>
          <GlassPanel
            title="Humanitarian Leadership"
            description="UAE as global humanitarian hub capabilities and commitments"
            badge="Humanitarian"
          >
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Humanitarian Metrics */}
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <HeartHandshake className="h-4 w-4 text-rose-500" />
                    Major Humanitarian Commitments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={humanitarianAidData}
                    donut
                    height={280}
                    showLegend
                    showTooltip
                  />
                </CardContent>
              </Card>

              {/* Infrastructure */}
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Building className="h-4 w-4 text-emerald-500" />
                    Humanitarian Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.humanitarian.infrastructure.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start justify-between p-3 rounded-lg bg-white/40 dark:bg-white/5"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            {idx === 0 ? (
                              <Globe className="h-4 w-4 text-emerald-500" />
                            ) : idx === 1 ? (
                              <Activity className="h-4 w-4 text-cyan-500" />
                            ) : idx === 2 ? (
                              <Plane className="h-4 w-4 text-gold-700" />
                            ) : idx === 3 ? (
                              <Briefcase className="h-4 w-4 text-rose-500" />
                            ) : (
                              <Building className="h-4 w-4 text-denim-500" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-navy-900 dark:text-platinum-100">{item.capability}</p>
                            <p className="text-xs text-platinum-500 mt-1">{item.details}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sudan Aid Summary */}
            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              <Card className="glass-card bg-gradient-to-br from-rose-50/50 to-transparent dark:from-rose-900/10">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-extrabold text-rose-600 dark:text-rose-400">$4.24B</p>
                  <p className="text-xs text-platinum-500 mt-1">Sudan Aid (2015-2025)</p>
                </CardContent>
              </Card>
              <Card className="glass-card bg-gradient-to-br from-rose-50/50 to-transparent dark:from-rose-900/10">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-extrabold text-rose-600 dark:text-rose-400">$784M</p>
                  <p className="text-xs text-platinum-500 mt-1">Since 2023 Conflict</p>
                </CardContent>
              </Card>
              <Card className="glass-card bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-900/10">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">159</p>
                  <p className="text-xs text-platinum-500 mt-1">Relief Flights</p>
                </CardContent>
              </Card>
              <Card className="glass-card bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-900/10">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">10,000+</p>
                  <p className="text-xs text-platinum-500 mt-1">Tonnes Supplies</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </motion.div>

        {/* Tabs for Multiple Sections */}
        <motion.div variants={itemVariants}>
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="glass-panel" scrollable>
              <TabsTrigger value="overview">UN Overview</TabsTrigger>
              <TabsTrigger value="gcc">GCC</TabsTrigger>
              <TabsTrigger value="arableague">Arab League</TabsTrigger>
              <TabsTrigger value="oic">OIC</TabsTrigger>
              <TabsTrigger value="opec">OPEC+</TabsTrigger>
              <TabsTrigger value="imf">IMF</TabsTrigger>
              <TabsTrigger value="worldbank">World Bank</TabsTrigger>
              <TabsTrigger value="wto">WTO</TabsTrigger>
              <TabsTrigger value="imo">IMO</TabsTrigger>
              <TabsTrigger value="ioc">IOC</TabsTrigger>
              <TabsTrigger value="embassies">Embassies</TabsTrigger>
              <TabsTrigger value="timeline">2026 Timeline</TabsTrigger>
            </TabsList>

            {/* UN Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* GCC Secretary General */}
                <Card className="glass-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Gem className="h-4 w-4 text-gold-700" />
                      GCC Secretary-General
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xl font-bold text-navy-900 dark:text-platinum-100">
                          {data.gcc.secretaryGeneral.name}
                        </p>
                        <p className="text-sm text-platinum-500">{data.gcc.secretaryGeneral.nationality}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-platinum-500">Assumed Position</span>
                          <span className="font-medium">{data.gcc.secretaryGeneral.assumedPosition}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-platinum-500">序 (Order)</span>
                          <span className="font-medium">{data.gcc.secretaryGeneral.序}th Secretary-General</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-platinum-500">Member States</span>
                          <span className="font-medium">{data.gcc.memberStates.length}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* OIC Profile */}
                <Card className="glass-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Globe2 className="h-4 w-4 text-emerald-500" />
                      OIC - Organization of Islamic Cooperation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/10">
                          <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                            {data.oic.organizationProfile.memberCount}
                          </p>
                          <p className="text-xs text-platinum-500">Member States</p>
                        </div>
                        <div className="p-3 rounded-lg bg-denim-50/50 dark:bg-denim-900/10">
                          <p className="text-sm font-bold text-denim-600 dark:text-denim-400">
                            {data.oic.organizationProfile.globalRank}
                          </p>
                          <p className="text-xs text-platinum-500">Global Rank</p>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-platinum-500">Headquarters</span>
                        <span className="font-medium">{data.oic.organizationProfile.hq}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* GCC Tab */}
            <TabsContent value="gcc" className="space-y-6">
              <GlassPanel title="GCC Secretariat General" description="Gulf Cooperation Council leadership and member states">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Secretary-General Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xl font-bold text-navy-900 dark:text-platinum-100">
                            {data.gcc.secretaryGeneral.name}
                          </p>
                          <p className="text-sm text-platinum-500">{data.gcc.secretaryGeneral.nationality} · {data.gcc.secretaryGeneral.序}th Secretary-General</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-platinum-500">Position Since</span>
                            <span className="font-medium">{data.gcc.secretaryGeneral.assumedPosition}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-platinum-500">Previous Role</span>
                            <span className="font-medium">{data.gcc.secretaryGeneral.previousRole}</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-platinum-700 dark:text-platinum-300">Education</p>
                          {data.gcc.secretaryGeneral.education.map((edu, idx) => (
                            <p key={idx} className="text-xs text-platinum-500">• {edu}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Career Highlights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {data.gcc.secretaryGeneral.careerHighlights.map((career, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-gold-500" />
                            <div>
                              <p className="text-sm font-medium text-navy-900 dark:text-platinum-100">{career.role}</p>
                              <p className="text-xs text-platinum-500">{career.period}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Member States */}
                <div className="mt-6">
                  <p className="text-sm font-medium text-platinum-700 dark:text-platinum-300 mb-3">GCC Member States</p>
                  <div className="flex flex-wrap gap-2">
                    {data.gcc.memberStates.map((state) => (
                      <Badge key={state} variant="outline" className="text-xs">
                        {state}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassPanel>
            </TabsContent>

            {/* Arab League Tab */}
            <TabsContent value="arableague" className="space-y-6">
              <GlassPanel title="Arab League" description="UAE leadership in Arab League emergency sessions 2026">
                <div className="space-y-6">
                  {/* Emergency Meeting Feb 2026 */}
                  <Card className="glass-card border-l-4 border-l-gold-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gold-700" />
                        Emergency Meeting - February 11, 2026
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-platinum-500">Location</span>
                            <span className="font-medium">{data.arabLeague.emergencyMeetingFeb2026.location}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-platinum-500">Level</span>
                            <span className="font-medium">{data.arabLeague.emergencyMeetingFeb2026.level}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-platinum-500">Chair</span>
                            <span className="font-medium">{data.arabLeague.emergencyMeetingFeb2026.chair}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-platinum-500">Topic</span>
                            <Badge variant="destructive" size="sm">{data.arabLeague.emergencyMeetingFeb2026.topic}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Emergency Session March 2026 */}
                  <Card className="glass-card border-l-4 border-l-rose-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-rose-500" />
                        Emergency Session - March 8, 2026
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-platinum-500">Format</span>
                              <span className="font-medium">{data.arabLeague.emergencySessionMarch2026.format}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-platinum-500">Chair</span>
                              <span className="font-medium">{data.arabLeague.emergencySessionMarch2026.chair}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-platinum-700 dark:text-platinum-300 mb-2">Countries Targeted</p>
                            <div className="flex flex-wrap gap-1">
                              {data.arabLeague.emergencySessionMarch2026.countriesTargeted.map((country) => (
                                <Badge key={country} variant="outline" size="sm">{country}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Iranian Attacks */}
                        <div className="mt-4 p-4 rounded-lg bg-rose-50/50 dark:bg-rose-900/10">
                          <p className="text-sm font-medium text-rose-700 dark:text-rose-400 mb-2">Nature of Iranian Attacks</p>
                          <div className="space-y-1">
                            {data.arabLeague.iranianAttacks.targetType.map((type, idx) => (
                              <p key={idx} className="text-xs text-platinum-600 dark:text-platinum-400">• {type}</p>
                            ))}
                          </div>
                          <p className="text-xs text-platinum-500 mt-2">Weapons: {data.arabLeague.iranianAttacks.weapons.join(', ')}</p>
                        </div>

                        {/* UAE Position */}
                        <div className="mt-4 p-4 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/10">
                          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-2">UAE Position</p>
                          <p className="text-sm italic text-platinum-600 dark:text-platinum-300 border-l-2 border-emerald-500 pl-3">
                            {data.arabLeague.uaePosition.quote}
                          </p>
                          <div className="mt-3 space-y-1">
                            {data.arabLeague.uaePosition.keyPoints.map((point, idx) => (
                              <p key={idx} className="text-xs text-platinum-500">• {point}</p>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 p-3 rounded-lg bg-denim-50/50 dark:bg-denim-900/10">
                          <p className="text-sm font-medium text-denim-700 dark:text-denim-400">Outcome</p>
                          <p className="text-xs text-platinum-600 dark:text-platinum-300 mt-1">{data.arabLeague.uaePosition.outcome}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </TabsContent>

            {/* OIC Tab */}
            <TabsContent value="oic" className="space-y-6">
              <GlassPanel title="OIC - Organization of Islamic Cooperation" description="Islamic world solidarity with UAE">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Organization Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/10 text-center">
                            <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                              {data.oic.organizationProfile.memberCount}
                            </p>
                            <p className="text-xs text-platinum-500">Member States</p>
                          </div>
                          <div className="p-3 rounded-lg bg-denim-50/50 dark:bg-denim-900/10 text-center">
                            <p className="text-sm font-bold text-denim-600 dark:text-denim-400">
                              {data.oic.organizationProfile.globalRank}
                            </p>
                            <p className="text-xs text-platinum-500">Global Rank</p>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-platinum-500">Headquarters</span>
                          <span className="font-medium">{data.oic.organizationProfile.hq}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-l-4 border-l-emerald-500">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Shield className="h-4 w-4 text-emerald-500" />
                        Condemnation of Terrorist Plot - April 2026
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Badge variant="success" size="sm">Plot Foiled</Badge>
                        <p className="text-sm italic text-platinum-600 dark:text-platinum-300 border-l-2 border-emerald-500 pl-3">
                          {data.oic.condemnationApril2026.statement}
                        </p>
                        <div className="mt-3 space-y-1">
                          {data.oic.condemnationApril2026.actions.map((action, idx) => (
                            <p key={idx} className="text-xs text-platinum-500">• {action}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </TabsContent>

            {/* OPEC Tab */}
            <TabsContent value="opec" className="space-y-6">
              <GlassPanel title="OPEC+" description="UAE membership and March 2026 production adjustments">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">UAE OPEC Membership</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-xs text-platinum-500">Member Since</p>
                            <p className="text-lg font-bold text-navy-900 dark:text-platinum-100">{data.opec.membership.since}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-platinum-500">March 2026 Production</p>
                            <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{data.opec.production.value}</p>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-denim-50/50 dark:bg-denim-900/10">
                          <p className="text-sm font-medium text-denim-700 dark:text-denim-400 mb-1">April 2026 Adjustment</p>
                          <p className="text-xs text-platinum-600 dark:text-platinum-300">{data.opec.march2026Adjustments.aprilAdjustment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">OPEC+ Participants</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {data.opec.march2026Adjustments.participants.map((participant) => (
                          <Badge key={participant} variant="outline" size="sm">{participant}</Badge>
                        ))}
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-platinum-500">Resumed Unwinding</span>
                          <span className="font-medium text-xs">{data.opec.march2026Adjustments.resumedUnwinding}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-platinum-500">Additional Adjustments</span>
                          <span className="font-medium text-xs">{data.opec.march2026Adjustments.additionalVoluntaryAdjustments}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-platinum-500">Next Meeting</span>
                          <span className="font-medium">{data.opec.march2026Adjustments.nextMeeting}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </TabsContent>

            {/* IMF Tab */}
            <TabsContent value="imf" className="space-y-6">
              <GlassPanel title="IMF" description="Economic projections and Article IV consultation">
                <div className="space-y-6">
                  {/* GDP Growth Chart */}
                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                        GDP Growth Projections (%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <LineChart
                        data={gdpGrowthData}
                        lines={[
                          { dataKey: 'imf', name: 'IMF Forecast', color: CHART_COLORS.denim, curveType: 'monotone' },
                          { dataKey: 'worldBank', name: 'World Bank', color: CHART_COLORS.emerald, curveType: 'monotone' },
                        ]}
                        xAxisKey="name"
                        height={280}
                        showGrid
                        showLegend
                      />
                    </CardContent>
                  </Card>

                  {/* Economic Projections Table */}
                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">IMF Economic Projections</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table variant="medium">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Year</TableHead>
                            <TableHead>GDP Growth (IMF)</TableHead>
                            <TableHead>Consumer Prices</TableHead>
                            <TableHead>Notes</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {data.imf.economicProjections.map((proj) => (
                            <TableRow key={proj.year}>
                              <TableCell className="font-medium">{proj.year}</TableCell>
                              <TableCell>
                                <span className={proj.gdpGrowthIMF ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>
                                  {proj.gdpGrowthIMF || '-'}
                                </span>
                              </TableCell>
                              <TableCell>{proj.consumerPrices || '-'}</TableCell>
                              <TableCell className="text-xs text-platinum-500">{proj.notes || '-'}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  {/* Key Statements */}
                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">IMF Key Statements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {data.imf.keyStatements.map((stmt, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-white/40 dark:bg-white/5">
                            <p className="text-sm italic text-platinum-700 dark:text-platinum-300">"{stmt.quote}"</p>
                            <p className="text-xs text-platinum-500 mt-2">— {stmt.speaker}, {stmt.date}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </TabsContent>

            {/* World Bank Tab */}
            <TabsContent value="worldbank" className="space-y-6">
              <GlassPanel title="World Bank" description="UAE program and economic forecasts">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">World Bank UAE Program</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-xs text-platinum-500">UAE Membership</p>
                            <p className="text-lg font-bold">{data.worldBank.program.membership}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-platinum-500">UAE Office</p>
                            <p className="text-lg font-bold">{data.worldBank.program.uaeOfficeEstablished}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Strategic Focus Areas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        {data.worldBank.strategicFocusAreas.map((area) => (
                          <div key={area.area} className="p-2 rounded bg-white/40 dark:bg-white/5">
                            <p className="text-xs font-medium text-navy-900 dark:text-platinum-100">{area.area}</p>
                            <p className="text-xs text-platinum-500">{area.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Economic Forecasts */}
                <div className="mt-6">
                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">World Bank Growth Forecasts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table variant="medium">
                        <TableHeader>
                          <TableRow>
                            <TableHead>Year</TableHead>
                            <TableHead>UAE</TableHead>
                            <TableHead>GCC</TableHead>
                            <TableHead>MENAP</TableHead>
                            <TableHead>Global</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {data.worldBank.economicForecasts.map((forecast) => (
                            <TableRow key={forecast.year}>
                              <TableCell className="font-medium">{forecast.year}</TableCell>
                              <TableCell className="text-emerald-600 dark:text-emerald-400 font-bold">{forecast.uaeGrowth}%</TableCell>
                              <TableCell>{forecast.gccGrowth}%</TableCell>
                              <TableCell>{forecast.menapGrowth}%</TableCell>
                              <TableCell>{forecast.globalGrowth}%</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </TabsContent>

            {/* WTO Tab */}
            <TabsContent value="wto" className="space-y-6">
              <GlassPanel title="WTO" description="UAE trade achievement and membership">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card bg-gradient-to-br from-gold-50/50 to-transparent dark:from-gold-900/10">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Award className="h-4 w-4 text-gold-700" />
                        2025 Trade Achievement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-center">
                          <p className="text-4xl font-extrabold text-gold dark:text-gold-400">
                            {data.wto.tradeAchievement2025.value}
                          </p>
                          <p className="text-sm text-platinum-500 mt-1">{data.wto.tradeAchievement2025.metric}</p>
                          <Badge variant="gold" size="sm" className="mt-2">Rank #{data.wto.tradeAchievement2025.rank}</Badge>
                        </div>
                        <div className="p-3 rounded-lg bg-white/40 dark:bg-white/5">
                          <p className="text-sm font-medium text-platinum-700 dark:text-platinum-300">
                            Export Growth (2021-2025)
                          </p>
                          <p className="text-xs text-platinum-500">{data.wto.tradeAchievement2025.exportGrowth}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Membership Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-denim-50/50 dark:bg-denim-900/10">
                            <p className="text-xs text-platinum-500">WTO Member Since</p>
                            <p className="text-lg font-bold">{data.wto.membership.wtoMemberSince}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-platinum-100/50 dark:bg-platinum-800/50">
                            <p className="text-xs text-platinum-500">GATT Member Since</p>
                            <p className="text-lg font-bold">{data.wto.membership.gattMemberSince}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-platinum-700 dark:text-platinum-300 mb-2">Available Data Categories</p>
                          <div className="space-y-1">
                            {data.wto.availableDataCategories.map((cat) => (
                              <p key={cat} className="text-xs text-platinum-500">• {cat}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </TabsContent>

            {/* IMO Tab */}
            <TabsContent value="imo" className="space-y-6">
              <GlassPanel title="IMO" description="International Maritime Organization membership achievement">
                <Card className="glass-card bg-gradient-to-br from-cyan-50/50 to-transparent dark:from-cyan-900/10">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/30 dark:to-cyan-800/30 mb-4"
                      >
                        <Award className="h-12 w-12 text-cyan-600 dark:text-cyan-400" />
                      </motion.div>
                      <Badge variant="cyan" className="mb-4">5th Consecutive Term</Badge>
                      <h3 className="text-2xl font-extrabold text-navy-900 dark:text-platinum-100">
                        {data.imo.achievement.description}
                      </h3>
                      <p className="text-sm text-platinum-500 mt-2">{data.imo.achievement.date}</p>
                      <div className="mt-4 flex justify-center gap-4">
                        <div className="px-4 py-2 rounded-lg bg-white/40 dark:bg-white/5">
                          <p className="text-xs text-platinum-500">Council Category</p>
                          <p className="text-sm font-bold">{data.imo.achievement.councilCategory}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GlassPanel>
            </TabsContent>

            {/* IOC Tab */}
            <TabsContent value="ioc" className="space-y-6">
              <GlassPanel title="IOC - National Olympic Committee" description="UAE Olympic achievements and upcoming games">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Committee Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-lg font-bold text-navy-900 dark:text-platinum-100">
                            {data.ioc.committeeProfile.name}
                          </p>
                          <p className="text-sm text-platinum-500">President: {data.ioc.committeeProfile.president}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-xs text-platinum-500">Founded</p>
                            <p className="text-sm font-medium">{data.ioc.committeeProfile.founded}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-platinum-500">IOC Recognition</p>
                            <p className="text-sm font-medium">{data.ioc.committeeProfile.iocRecognition}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card bg-gradient-to-br from-gold-50/50 to-transparent dark:from-gold-900/10">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Crown className="h-4 w-4 text-gold-700" />
                        First Olympic Medal
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <Badge variant="gold" size="sm" className="mb-2">2004 Athens</Badge>
                        <p className="text-lg font-bold text-navy-900 dark:text-platinum-100">
                          {data.ioc.historicalAchievement.athlete}
                        </p>
                        <p className="text-sm text-platinum-500">{data.ioc.historicalAchievement.event}</p>
                        <p className="text-2xl font-extrabold text-gold dark:text-gold-400 mt-2">
                          {data.ioc.historicalAchievement.medal}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Games Schedule */}
                <div className="mt-6">
                  <Card className="glass-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">2026 Upcoming Games</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {data.ioc.upcomingGamesSchedule.map((game, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-white/40 dark:bg-white/5">
                            <p className="text-sm font-medium text-navy-900 dark:text-platinum-100">{game.games}</p>
                            <p className="text-xs text-platinum-500 mt-1">{game.location}</p>
                            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">{game.dates}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </TabsContent>

            {/* Embassies Tab */}
            <TabsContent value="embassies" className="space-y-6">
              <GlassPanel title="UAE Diplomatic Network" description="UAE embassies abroad and foreign embassies in UAE">
                <Tabs defaultValue="uae-abroad" className="space-y-4">
                  <TabsList className="glass-panel">
                    <TabsTrigger value="uae-abroad">UAE Embassies Abroad</TabsTrigger>
                    <TabsTrigger value="foreign-uae">Foreign Embassies in UAE</TabsTrigger>
                  </TabsList>

                  <TabsContent value="uae-abroad">
                    <div className="grid gap-4 lg:grid-cols-2">
                      {data.uaeEmbassies.embassies.map((embassy) => (
                        <Card key={embassy.country} className="glass-card">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base">{embassy.country}</CardTitle>
                              {embassy.since && (
                                <Badge variant="outline" size="sm">Since {embassy.since}</Badge>
                              )}
                            </div>
                            <CardDescription>{embassy.city}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Flag className="h-3 w-3 text-platinum-400" />
                                <span className="text-sm font-medium">{embassy.ambassador}</span>
                              </div>
                              {embassy.phone && (
                                <div className="flex items-center gap-2">
                                  <Phone className="h-3 w-3 text-platinum-400" />
                                  <span className="text-xs text-platinum-500">{embassy.phone}</span>
                                </div>
                              )}
                              {embassy.email && (
                                <div className="flex items-center gap-2">
                                  <Mail className="h-3 w-3 text-platinum-400" />
                                  <span className="text-xs text-platinum-500">{embassy.email}</span>
                                </div>
                              )}
                              {embassy.additionalInfo?.metric && (
                                <div className="mt-3 p-2 rounded bg-white/40 dark:bg-white/5">
                                  <p className="text-xs text-platinum-500">{embassy.additionalInfo.metric}</p>
                                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                                    {embassy.additionalInfo.value}
                                  </p>
                                  {embassy.additionalInfo.target && (
                                    <p className="text-xs text-platinum-500">Target: {embassy.additionalInfo.target}</p>
                                  )}
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="foreign-uae">
                    <div className="grid gap-4 lg:grid-cols-2">
                      {data.foreignEmbassies.embassies.map((embassy) => (
                        <Card key={embassy.country} className="glass-card">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">{embassy.country}</CardTitle>
                            {embassy.partnershipFramework && (
                              <CardDescription>{embassy.partnershipFramework}</CardDescription>
                            )}
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Building className="h-3 w-3 text-platinum-400" />
                                <span className="text-sm font-medium">{embassy.currentHead}</span>
                              </div>
                              {embassy.since && (
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-3 w-3 text-platinum-400" />
                                  <span className="text-xs text-platinum-500">Since {embassy.since}</span>
                                </div>
                              )}
                              {embassy.services && (
                                <div className="mt-3">
                                  <p className="text-xs font-medium text-platinum-700 dark:text-platinum-300 mb-1">Services</p>
                                  <div className="flex flex-wrap gap-1">
                                    {embassy.services.map((service) => (
                                      <Badge key={service} variant="outline" size="sm">{service}</Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </GlassPanel>
            </TabsContent>

            {/* 2026 Timeline Tab */}
            <TabsContent value="timeline" className="space-y-6">
              <GlassPanel title="Key 2026 Developments" description="Major events timeline">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-gold-500 to-rose-500" />

                  <div className="space-y-6 pl-12">
                    {timelineData.map((event, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.3 }}
                        className="relative"
                      >
                        {/* Timeline dot */}
                        <div className={`absolute -left-12 top-1 h-6 w-6 rounded-full flex items-center justify-center ${
                          event.impact === 'Diplomatic leadership' ? 'bg-emerald-500' :
                          event.impact === 'Humanitarian logistics disruption' ? 'bg-rose-500' :
                          event.impact === 'Quick recovery' ? 'bg-emerald-500' :
                          event.impact === 'Regional security leadership' ? 'bg-gold-500' :
                          event.impact === 'Continued operations' ? 'bg-cyan-500' :
                          event.impact === 'Islamic world solidarity' ? 'bg-emerald-500' :
                          'bg-denim-500'
                        }`}>
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>

                        <Card className="glass-card hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="space-y-1">
                                <p className="text-xs text-platinum-500 font-medium">{event.date}</p>
                                <p className="text-sm font-medium text-navy-900 dark:text-platinum-100">{event.event}</p>
                              </div>
                              <Badge
                                variant={
                                  event.impact === 'Diplomatic leadership' ? 'success' :
                                  event.impact === 'Humanitarian logistics disruption' ? 'destructive' :
                                  event.impact === 'Quick recovery' ? 'success' :
                                  event.impact === 'Regional security leadership' ? 'warning' :
                                  event.impact === 'Islamic world solidarity' ? 'success' :
                                  'info'
                                }
                                size="sm"
                              >
                                {event.impact}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* UAE Positioning */}
                <Card className="glass-card mt-6 bg-gradient-to-r from-denim-50/50 to-transparent dark:from-denim-900/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-gradient-to-br from-denim-100 to-denim-200 dark:from-denim-900/30 dark:to-denim-800/30">
                        <Target className="h-6 w-6 text-denim-600 dark:text-denim-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-denim-700 dark:text-denim-300">UAE Positioning</p>
                        <p className="text-lg font-bold text-navy-900 dark:text-platinum-100">
                          {data.keyDevelopments2026.uaePositioning}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </GlassPanel>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Key Findings Grid */}
        <motion.div variants={itemVariants}>
          <GlassPanel title="Key Findings" description="Critical intelligence from the analysis">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {keyFindings.map((finding, idx) => (
                <motion.div
                  key={idx}
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <Card className="glass-card h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          finding.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30' :
                          finding.color === 'gold' ? 'bg-gold-100 dark:bg-gold-900/30' :
                          finding.color === 'denim' ? 'bg-denim-100 dark:bg-denim-900/30' :
                          finding.color === 'rose' ? 'bg-rose-100 dark:bg-rose-900/30' :
                          finding.color === 'cyan' ? 'bg-cyan-100 dark:bg-cyan-900/30' :
                          'bg-purple-100 dark:bg-purple-900/30'
                        }`}>
                          <div className={
                            finding.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                            finding.color === 'gold' ? 'text-gold dark:text-gold-400' :
                            finding.color === 'denim' ? 'text-denim-600 dark:text-denim-400' :
                            finding.color === 'rose' ? 'text-rose-600 dark:text-rose-400' :
                            finding.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                            'text-purple-600 dark:text-purple-400'
                          }>
                            {finding.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-navy-900 dark:text-platinum-100">{finding.title}</p>
                          <p className="text-xs text-platinum-500 mt-1">{finding.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>

        {/* Entity Registry */}
        <motion.div variants={itemVariants}>
          <GlassPanel title="Entity Registry" description="International organizations with UAE presence">
            <Table variant="medium">
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                  <TableHead>Organization</TableHead>
                  <TableHead>HQ</TableHead>
                  <TableHead>UAE Office</TableHead>
                  <TableHead>Key Contact</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.entityRegistry.internationalOrgsWithUAEPresence.map((org) => (
                  <TableRow key={org.organization} className="hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25">
                    <TableCell className="font-medium">{org.organization}</TableCell>
                    <TableCell>{org.hq}</TableCell>
                    <TableCell>{org.uaeOffice}</TableCell>
                    <TableCell className="text-xs text-platinum-500">{org.keyContact}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GlassPanel>
        </motion.div>

        {/* Sources Index */}
        <motion.div variants={itemVariants}>
          <GlassPanel title="Sources Index" description="Data sources for this report">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="glass-card">
                <CardContent className="p-4 text-center">
                  <Globe className="h-8 w-8 mx-auto text-emerald-500 mb-2" />
                  <p className="text-lg font-bold">{data.overview.executionMetadata.pagesFetched}</p>
                  <p className="text-xs text-platinum-500">Pages Fetched</p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-4 text-center">
                  <Zap className="h-8 w-8 mx-auto text-gold-700 mb-2" />
                  <p className="text-lg font-bold">{data.overview.executionMetadata.queriesExecuted}</p>
                  <p className="text-xs text-platinum-500">Queries Executed</p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 mx-auto text-denim-500 mb-2" />
                  <p className="text-lg font-bold">{data.overview.executionMetadata.dateEnriched}</p>
                  <p className="text-xs text-platinum-500">Date Enriched</p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 mx-auto text-cyan-500 mb-2" />
                  <p className="text-lg font-bold">{data.overview.executionMetadata.frameworkVersion}</p>
                  <p className="text-xs text-platinum-500">Framework Version</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </motion.div>
      </motion.div>
    </div>
  )
}
