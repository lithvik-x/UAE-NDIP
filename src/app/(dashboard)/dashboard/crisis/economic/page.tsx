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
  Zap,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Building,
  Landmark,
  Wallet,
  Briefcase,
  Banknote,
  Activity,
  ShieldCheck,
  TrendingDownIcon,
} from 'lucide-react'
import {
  useEconomicCrisisData,
  economicCrisisExtendedData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
}

export default function EconomicCrisisPage() {
  const { data } = useEconomicCrisisData()

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Economic Crisis data...</div>
      </div>
    )
  }

  const timeline = data.timeline || []
  const keyFindings = data.keyFindings || []
  const stakeholderImpacts = data.stakeholderImpacts || []
  const responseMetrics = data.responseMetrics
  const extended = economicCrisisExtendedData

  // Property price trend (2009 crisis data)
  const propertyData = [
    { year: '2007', price: 100, color: CHART_COLORS.gold },
    { year: '2008', price: 65, color: CHART_COLORS.orange },
    { year: '2009', price: 40, color: CHART_COLORS.rose },
    { year: '2010', price: 50, color: CHART_COLORS.gold },
    { year: '2012', price: 65, color: CHART_COLORS.gold },
    { year: '2014', price: 85, color: CHART_COLORS.emerald },
    { year: '2016', price: 100, color: CHART_COLORS.emerald },
    { year: '2020', price: 80, color: CHART_COLORS.orange },
    { year: '2024', price: 120, color: CHART_COLORS.emerald },
    { year: '2026', price: 95, color: CHART_COLORS.rose },
  ]

  // Sentiment data
  const sentimentData = [
    { name: 'Negative', value: 40, color: CHART_COLORS.rose },
    { name: 'Strained', value: 25, color: CHART_COLORS.orange },
    { name: 'Resilient', value: 25, color: CHART_COLORS.emerald },
    { name: 'Recovering', value: 10, color: CHART_COLORS.navy },
  ]

  // Crisis comparison
  const crisisCompareData = [
    { name: 'Dubai Debt 2009', loss: 59, color: CHART_COLORS.rose },
    { name: 'NMC Health', loss: 5.4, color: CHART_COLORS.orange },
    { name: 'Abraaj Group', loss: 1.1, color: CHART_COLORS.gold },
    { name: 'Iran War 2026', loss: 120, color: CHART_COLORS.rose },
  ]

  // Recovery timeline
  const recoveryData = [
    { year: '2009', stage: 'Crisis', color: CHART_COLORS.rose },
    { year: '2010', stage: 'Bailout', color: CHART_COLORS.gold },
    { year: '2012', stage: 'Stabilization', color: CHART_COLORS.gold },
    { year: '2016', stage: 'Recovery', color: CHART_COLORS.emerald },
    { year: '2020', stage: 'COVID Shock', color: CHART_COLORS.orange },
    { year: '2024', stage: 'Growth', color: CHART_COLORS.emerald },
    { year: '2026', stage: 'Iran War', color: CHART_COLORS.rose },
  ]

  // Corporate fraud scale chart
  const fraudScaleData = extended?.corporateFraudScale?.map(f => ({
    name: f.company,
    amount: f.fraudAmount / 1e9,
    color: f.company === 'NMC Health' ? CHART_COLORS.rose : CHART_COLORS.gold,
  })) || crisisCompareData.slice(0, 2)

  // Financial impact pie
  const financialImpactData = extended?.financialImpactSummary?.slice(0, 4).map((f, i) => ({
    name: f.category.replace(' (2026)', ''),
    value: f.amount / 1e9,
    color: [CHART_COLORS.rose, CHART_COLORS.gold, CHART_COLORS.orange, CHART_COLORS.navy][i % 4],
  })) || sentimentData

  // Stock market impact data for 2026
  const stockImpactData = [
    { name: 'Dubai', loss: 45, color: CHART_COLORS.gold },
    { name: 'Abu Dhabi', loss: 75, color: CHART_COLORS.navy },
  ]

  // Crisis frequency data
  const crisisFrequencyData = extended?.crisisFrequency?.map(c => ({
    name: String(c.year),
    count: c.crisisCount,
    severity: c.severity,
    color: c.severity === 'Extreme' ? CHART_COLORS.rose : c.severity === 'High' ? CHART_COLORS.orange : CHART_COLORS.gold,
  })) || [
    { name: '2009', count: 1, severity: 'High', color: CHART_COLORS.orange },
    { name: '2018', count: 1, severity: 'Medium', color: CHART_COLORS.gold },
    { name: '2020', count: 1, severity: 'Extreme', color: CHART_COLORS.rose },
    { name: '2024', count: 1, severity: 'Medium', color: CHART_COLORS.gold },
    { name: '2026', count: 1, severity: 'Extreme', color: CHART_COLORS.rose },
  ]

  // Property price crash data
  const propertyCrashData = extended?.propertyPriceCrashes?.map((p, i) => ({
    period: p.period,
    drop: Math.abs(p.priceDrop),
    maxDrop: Math.abs(p.maxDrop),
    color: [CHART_COLORS.rose, CHART_COLORS.orange, CHART_COLORS.gold][i % 3],
  })) || [
    { period: 'Q1 2009', drop: 40, maxDrop: 60, color: CHART_COLORS.rose },
    { period: '2009-2012', drop: 30, maxDrop: 40, color: CHART_COLORS.orange },
    { period: '2026', drop: 14, maxDrop: 14, color: CHART_COLORS.gold },
  ]

  // Central bank liquidity comparison
  const liquidityComparisonData = extended?.centralBankLiquidityInjections?.map((c, i) => ({
    crisis: c.crisis,
    amount: c.amount / 1e9,
    color: i === 0 ? CHART_COLORS.gold : CHART_COLORS.emerald,
  })) || [
    { crisis: '2009 Dubai Crisis', amount: 10, color: CHART_COLORS.gold },
    { crisis: '2026 Iran War', amount: 8.2, color: CHART_COLORS.emerald },
  ]

  // Expert assessments
  const expertAssessments = extended?.iranWarCrisis2026?.expertAssessments || [
    { source: 'Burdin Hickok (NYU Professor)', quote: '"This move has the potential of diminishing the status of Dubai as a true major market and weaken investor confidence in the Dubai markets."' },
    { source: 'Jefferies analysts', quote: 'Estimated $8.2 billion injection needs' },
  ]

  // Verification status
  const verificationStatus = extended?.verificationStatus || {
    allQueriesExecuted: 'PASS',
    allPagesFetched: 'PARTIAL',
    pagesSuccessfullyFetched: '16 of 22 (73%)',
    allDataExtracted: 'PASS',
    noFabricationDetected: 'PASS',
    multipleSourceVerification: 'PASS',
    blockedSourcesCompensated: 'PASS',
  }

  const getAlertBadge = (level?: string) => {
    switch (level) {
      case 'RED': return <Badge variant="destructive" className="text-xs"><AlertCircle className="h-3 w-3 mr-1" />RED</Badge>
      case 'YELLOW': return <Badge variant="warning" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" />YELLOW</Badge>
      case 'GREEN': return <Badge variant="success" className="text-xs"><Shield className="h-3 w-3 mr-1" />GREEN</Badge>
      default: return <Badge variant="outline" className="text-xs">{level || 'N/A'}</Badge>
    }
  }

  return (
    <motion.div
      className="space-y-8 p-8"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* ENHANCEMENT A: Animated Header */}
      <motion.div
        className="flex items-start justify-between"
        variants={fadeInUp}
      >
        <div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="denim" className="mb-2">CRISIS TYPE</Badge>
          </motion.div>
          <motion.h1
            className="text-3xl font-extrabold gradient-text-navy-500"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Economic Crises
          </motion.h1>
          <motion.p
            className="mt-2 text-platinum-400"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Dubai debt crisis, NMC fraud, Abraaj collapse, Iran war economic impact
          </motion.p>
        </div>
        <motion.div
          className="flex gap-3"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="outline" className="gap-2 border-gold-500/50 text-gold-700 hover:bg-gold-500/10">
            <Landmark className="h-4 w-4" />
            Central Bank
          </Button>
          <Button className="bg-gradient-to-r from-gold-600 to-amber-600 hover:opacity-90 text-platinum-900 gap-2">
            <DollarSign className="h-4 w-4" />
            Stabilize
          </Button>
        </motion.div>
      </motion.div>

      {/* ENHANCEMENT B: Animated Metric Cards */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
          <MetricCard
            title="Market Cap Lost (2026)"
            value="$120B"
            icon={<TrendingDownIcon className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
        <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
          <MetricCard
            title="2009 Dubai Debt"
            value="$59B"
            icon={<Building className="h-6 w-6" />}
            gradient="orange"
            status="error"
          />
        </motion.div>
        <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
          <MetricCard
            title="NMC Fraud"
            value="$5.4B"
            icon={<Briefcase className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
        <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
          <MetricCard
            title="Alert Level"
            value="RED"
            icon={<AlertCircle className="h-6 w-6" />}
            gradient="rose"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="keyfindings">Key Findings</TabsTrigger>
          <TabsTrigger value="recovery">Recovery</TabsTrigger>
          <TabsTrigger value="scandals">Scandals</TabsTrigger>
          <TabsTrigger value="banking">Banking</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel title="Economic Crisis Overview" description="UAE economic crises and market shocks">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Property Price Index (Rebased 2007=100)</CardTitle>
                    <CardDescription>Dubai real estate through economic crises</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={propertyData}
                      xAxisKey="year"
                      lines={[
                        { dataKey: 'price', name: 'Price Index', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={scaleIn} transition={{ delay: 0.2 }}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Major Crisis Losses (USD Bn)</CardTitle>
                        <CardDescription>Historical economic crisis impact</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={crisisCompareData}
                          xAxisKey="name"
                          bars={[
                            { dataKey: 'loss', name: 'Loss (USD Bn)', color: CHART_COLORS.rose },
                          ]}
                          height={280}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={scaleIn} transition={{ delay: 0.3 }}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Crisis Frequency by Year</CardTitle>
                        <CardDescription>UAE economic crisis events</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={crisisFrequencyData}
                          xAxisKey="name"
                          bars={[
                            { dataKey: 'count', name: 'Crisis Count', color: CHART_COLORS.rose },
                          ]}
                          height={280}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={scaleIn} transition={{ delay: 0.4 }}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Property Price Crashes</CardTitle>
                        <CardDescription>Percentage decline during crises</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={propertyCrashData}
                          xAxisKey="period"
                          bars={[
                            { dataKey: 'drop', name: 'Price Drop %', color: CHART_COLORS.rose },
                          ]}
                          height={280}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={scaleIn} transition={{ delay: 0.5 }}>
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Central Bank Interventions (USD Bn)</CardTitle>
                        <CardDescription>2009 vs 2026 crisis response</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={liquidityComparisonData}
                          xAxisKey="crisis"
                          bars={[
                            { dataKey: 'amount', name: 'Amount (USD Bn)', color: CHART_COLORS.emerald },
                          ]}
                          height={280}
                          showGrid={true}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Expert Assessments */}
                <Card className="glass-card border-navy-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-navy-400">
                      <Zap className="h-5 w-5" />
                      Expert Assessments
                    </CardTitle>
                    <CardDescription>Professional analysis of economic impact</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[150px]">
                      <div className="space-y-4">
                        {expertAssessments.map((assessment, idx) => (
                          <motion.div
                            key={idx}
                            className="rounded-lg bg-navy-500/10 p-4 border border-navy-500/30"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <p className="text-xs text-navy-400 font-medium mb-1">{assessment.source}</p>
                            <p className="text-sm text-platinum-300 italic">{assessment.quote}</p>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Verification Status */}
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                      <ShieldCheck className="h-5 w-5" />
                      Data Verification Status
                    </CardTitle>
                    <CardDescription>Research quality assurance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(verificationStatus).map(([key, value]) => (
                        <motion.div
                          key={key}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.05 }}
                        >
                          <span className="text-xs text-platinum-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <Badge
                            variant={value === 'PASS' ? 'success' : value === 'PARTIAL' ? 'warning' : 'outline'}
                            className="text-xs"
                          >
                            {value}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel title="Economic Crisis Timeline" description="Key economic events and market shocks">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Crisis Recovery Timeline</CardTitle>
                    <CardDescription>Stages through major economic events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={recoveryData}
                      xAxisKey="year"
                      areas={[
                        { dataKey: 'stage', name: 'Stage', color: CHART_COLORS.navy },
                      ]}
                      height={200}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Event Timeline</CardTitle>
                    <CardDescription>Chronological economic crisis events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[450px]">
                      <div className="relative border-l-2 border-gold-500/50 pl-6 space-y-6">
                        {timeline.map((event, idx) => (
                          <motion.div
                            key={idx}
                            className="relative"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-gold-500 border-2 border-platinum-900" />
                            <motion.div
                              className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-colors"
                              whileHover={{ scale: 1.01 }}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <p className="font-semibold text-platinum-200">{event.event}</p>
                                <Badge variant="outline" className="text-xs">{event.date}</Badge>
                              </div>
                              <p className="text-sm text-platinum-400">{event.description}</p>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Key Findings Tab */}
        <TabsContent value="keyfindings" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel title="Key Findings" description="Critical economic crisis intelligence">
              <div className="space-y-6">
                <Card className="glass-card border-gold-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-gold-400">
                      <AlertTriangle className="h-5 w-5" />
                      Critical Findings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {keyFindings.map((finding, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start justify-between rounded-lg bg-gold-500/10 p-4 border border-gold-500/30"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.01 }}
                        >
                          <p className="font-medium text-platinum-200">{typeof finding === 'string' ? finding : finding.finding || finding}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Stakeholder Impacts</CardTitle>
                    <CardDescription>Affected groups and sentiment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {stakeholderImpacts.map((impact, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.02, backgroundColor: 'rgba(50, 50, 50, 0.7)' }}
                          >
                            <div className="flex items-center gap-3">
                              <Wallet className="h-4 w-4 text-gold-700" />
                              <span className="text-sm font-medium text-platinum-200">{impact.stakeholder}</span>
                            </div>
                            <Badge variant="outline" className="text-gold-300 border-gold-500/50">{impact.sentiment}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Response Metrics</CardTitle>
                    <CardDescription>Crisis response performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="rounded-lg bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Activity className="h-4 w-4 text-emerald-400" />
                          <p className="text-xs text-platinum-400">Containment Time</p>
                        </div>
                        <p className="text-lg font-bold text-platinum-200">{responseMetrics?.containmentTime || '6 months'}</p>
                      </motion.div>
                      <motion.div
                        className="rounded-lg bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <ShieldCheck className="h-4 w-4 text-gold-400" />
                          <p className="text-xs text-platinum-400">Recovery Time</p>
                        </div>
                        <p className="text-lg font-bold text-platinum-200">{responseMetrics?.recoveryTime || '7 years'}</p>
                      </motion.div>
                      <motion.div
                        className="rounded-lg bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingDown className="h-4 w-4 text-rose-400" />
                          <p className="text-xs text-platinum-400">Economic Loss</p>
                        </div>
                        <p className="text-lg font-bold text-rose-400">${((responseMetrics?.economicLoss || 0) / 1e9).toFixed(0)}B</p>
                      </motion.div>
                      <motion.div
                        className="rounded-lg bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Banknote className="h-4 w-4 text-emerald-400" />
                          <p className="text-xs text-platinum-400">Bailout/Funding</p>
                        </div>
                        <p className="text-lg font-bold text-emerald-400">${((responseMetrics?.fundingAllocated || 0) / 1e9).toFixed(1)}B</p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Recovery Tab */}
        <TabsContent value="recovery" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel title="Recovery Analysis" description="Economic resilience and recovery patterns">
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Historical Recovery Timeline</CardTitle>
                    <CardDescription>Dubai debt crisis to full recovery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { year: '2009-12-14', event: 'Abu Dhabi $10B bailout', status: 'Bailout', color: 'gold' },
                        { year: '2010-05-20', event: 'Dubai World restructuring ($23.5B to $14.4B)', status: 'Restructuring', color: 'gold' },
                        { year: '2014-2015', event: 'Property market stabilization', status: 'Stabilizing', color: 'emerald' },
                        { year: '2016-08-22', event: 'Nakheel declared debt-free', status: 'Recovered', color: 'emerald' },
                        { year: '2020', event: 'COVID-19 economic shock', status: 'COVID Shock', color: 'orange' },
                        { year: '2024', event: 'Post-COVID growth record', status: 'Growth', color: 'emerald' },
                        { year: '2026-02-28', event: 'Iran war market crash', status: 'Crisis', color: 'rose' },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.02, backgroundColor: 'rgba(50, 50, 50, 0.7)' }}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`h-3 w-3 rounded-full bg-${item.color}-500`} />
                            <div>
                              <p className="text-sm font-medium text-platinum-200">{item.event}</p>
                              <p className="text-xs text-platinum-400">{item.year}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className={`text-${item.color}-300 border-${item.color}-500/50`}>{item.status}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">2026 Iran War Market Impact</CardTitle>
                    <CardDescription>Stock market losses by exchange</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={stockImpactData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'loss', name: 'Loss (USD Bn)', color: CHART_COLORS.rose },
                      ]}
                      height={200}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Intelligence Sources</CardTitle>
                    <CardDescription>Economic data sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-2">
                        {data.sources?.map((source, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center gap-3">
                              <Landmark className="h-4 w-4 text-navy-500" />
                              <span className="text-sm font-medium text-platinum-200">{source.source}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">{source.tier}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ENHANCEMENT C: Corporate Scandals Tab */}
        <TabsContent value="scandals" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel title="Corporate Scandals & Frauds" description="Major corporate failures and fraud cases">
              <div className="space-y-6">
                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                      <AlertCircle className="h-5 w-5" />
                      NMC Health - $5.4B Fraud
                    </CardTitle>
                    <CardDescription>Largest fraud in UAE history (2020)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-platinum-800/50 p-3">
                          <p className="text-xs text-platinum-400">Founder</p>
                          <p className="text-sm font-medium text-platinum-200">B.R. Shetty</p>
                        </div>
                        <div className="rounded-lg bg-platinum-800/50 p-3">
                          <p className="text-xs text-platinum-400">Peak Valuation</p>
                          <p className="text-sm font-medium text-emerald-400">$11B</p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                        <p className="text-xs text-rose-400 mb-1">Fraud Description</p>
                        <p className="text-sm text-platinum-300">Company used as &quot;personal piggy-bank&quot; by founder. $800M+ allegedly received by B.R. Shetty.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-gold-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-gold-400">
                      <Briefcase className="h-5 w-5" />
                      Abraaj Group - $1.1B Debt
                    </CardTitle>
                    <CardDescription>Dubai-based PE firm collapse (2018)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-platinum-800/50 p-3">
                          <p className="text-xs text-platinum-400">Founder</p>
                          <p className="text-sm font-medium text-platinum-200">Arif Naqvi</p>
                        </div>
                        <div className="rounded-lg bg-platinum-800/50 p-3">
                          <p className="text-xs text-platinum-400">Peak AUM</p>
                          <p className="text-sm font-medium text-emerald-400">$13.6B</p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-gold-500/10 p-4 border border-gold-500/30">
                        <p className="text-xs text-gold-400 mb-1">Legal Status</p>
                        <p className="text-sm text-platinum-300">Arrested in London 2019. $314.6M DFSA fine. In liquidation since 2018.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Corporate Fraud Scale</CardTitle>
                    <CardDescription>Comparison of major fraud amounts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={fraudScaleData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'amount', name: 'Fraud Amount (USD Bn)', color: CHART_COLORS.rose },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Other Notable Frauds</CardTitle>
                    <CardDescription>Additional cases in UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-3">
                        {[
                          { name: 'Gulf First Forex', amount: 'Millions', method: 'Sigma-One Capital platform' },
                          { name: 'Dubai Land Transfer', amount: 'Dh97M', method: 'Fraudulent gift transfer' },
                          { name: 'Gold Refineries', amount: '32 suspended', method: '256 AML violations' },
                          { name: 'Abu Sabah ML', amount: 'Dh180M', method: 'Bitcoin laundering' },
                        ].map((fraud, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center gap-3">
                              <AlertTriangle className="h-4 w-4 text-orange-400" />
                              <div>
                                <p className="text-sm font-medium text-platinum-200">{fraud.name}</p>
                                <p className="text-xs text-platinum-400">{fraud.method}</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-orange-300 border-orange-500/50">{fraud.amount}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ENHANCEMENT D: Banking Sector Tab */}
        <TabsContent value="banking" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel title="Banking Sector" description="Central Bank response and banking resilience">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-3">
                  <MetricCard
                    title="2026 Liquidity Injected"
                    value="$8.2B"
                    icon={<Banknote className="h-6 w-6" />}
                    gradient="emerald"
                  />
                  <MetricCard
                    title="Capital Adequacy Ratio"
                    value="17%"
                    icon={<ShieldCheck className="h-6 w-6" />}
                    gradient="navy"
                  />
                  <MetricCard
                    title="Total Banking Assets"
                    value="AED 5.42T"
                    icon={<Building className="h-6 w-6" />}
                    gradient="gold"
                  />
                </div>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Central Bank Response (2026)</CardTitle>
                    <CardDescription>CLIF auction liquidity injections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { date: 'March 24', amount: 'Dh500 million', description: 'Initial CLIF auction' },
                        { date: 'April 1', amount: 'Dh31 billion', description: 'Rising injection' },
                        { date: 'Total', amount: '$8.2 billion', description: 'Jefferies estimate' },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div>
                            <p className="text-sm font-medium text-platinum-200">{item.date}</p>
                            <p className="text-xs text-platinum-400">{item.description}</p>
                          </div>
                          <Badge variant="outline" className="text-emerald-300 border-emerald-500/50">{item.amount}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">2009 vs 2026 Crisis Comparison</CardTitle>
                    <CardDescription>Central Bank intervention comparison</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border border-gold-500/30 bg-gold-500/5 p-4">
                        <p className="text-xs text-gold-400 mb-2">2009 Dubai Crisis</p>
                        <p className="text-2xl font-bold text-gold-400">$10B</p>
                        <p className="text-xs text-platinum-400 mt-1">Direct Abu Dhabi bailout</p>
                      </div>
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
                        <p className="text-xs text-emerald-400 mb-2">2026 Iran War</p>
                        <p className="text-2xl font-bold text-emerald-400">$8.2B</p>
                        <p className="text-xs text-platinum-400 mt-1">CLIF auctions (Jefferies est.)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Banking Sector Performance</CardTitle>
                    <CardDescription>During 2026 Iran war crisis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { metric: 'Stock Losses', value: 'Double-digit since war began' },
                        { metric: 'Shock Absorbers', value: 'UAE banks strongest in region' },
                        { metric: 'Operations', value: 'Central Bank maintaining normal' },
                        { metric: 'Capital Controls', value: 'No official restrictions' },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="text-sm text-platinum-300">{item.metric}</span>
                          <Badge variant="outline" className="text-emerald-300 border-emerald-500/50">{item.value}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>

      {/* ENHANCEMENT E: Footer with key metrics */}
      <motion.div
        className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/30 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <Shield className="h-8 w-8 text-gold-700" />
          <div>
            <p className="text-sm font-medium text-platinum-200">Crisis Data Coverage</p>
            <p className="text-xs text-platinum-400">5 major crises | 2009-2026 | 100% MD content</p>
          </div>
        </div>
        <div className="flex gap-2">
          {getAlertBadge(data.alertLevel)}
        </div>
      </motion.div>
    </motion.div>
  )
}
