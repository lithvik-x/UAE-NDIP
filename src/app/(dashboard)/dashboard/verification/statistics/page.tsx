// @ts-nocheck
'use client'

import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Users,
  TrendingUp,
  DollarSign,
  Plane,
  Shield,
  Briefcase,
  Heart,
  Leaf,
  Landmark,
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import {
  statisticalKPIs,
  statisticalDatapointsData,
} from '@/lib/data-loader'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

export default function VerificationStatisticsPage() {
  // Extract data from the structured KPIs
  const {
    populationKPIs,
    economicKPIs,
    tradeKPIs,
    tourismKPIs,
    safetyKPIs,
    laborKPIs,
    healthKPIs,
    environmentKPIs,
    financeKPIs,
  } = statisticalKPIs

  // Extract from verification result
  const { keyFindings, alertLevel, credibility, sources } = statisticalDatapointsData

  // Alert status counts
  const alertCounts = {
    GREEN: [...populationKPIs, ...economicKPIs, ...tradeKPIs, ...tourismKPIs, ...safetyKPIs, ...laborKPIs, ...healthKPIs, ...environmentKPIs, ...financeKPIs].filter(k => k.alert === 'GREEN').length,
    YELLOW: [...populationKPIs, ...economicKPIs, ...tradeKPIs, ...tourismKPIs, ...safetyKPIs, ...laborKPIs, ...healthKPIs, ...environmentKPIs, ...financeKPIs].filter(k => k.alert === 'YELLOW').length,
    RED: [...populationKPIs, ...economicKPIs, ...tradeKPIs, ...tourismKPIs, ...safetyKPIs, ...laborKPIs, ...healthKPIs, ...environmentKPIs, ...financeKPIs].filter(k => k.alert === 'RED').length,
  }

  // Category distribution for pie chart
  const categoryDistribution = [
    { name: 'Population', value: populationKPIs.length, color: CHART_COLORS.cyan },
    { name: 'Economic', value: economicKPIs.length, color: CHART_COLORS.emerald },
    { name: 'Trade', value: tradeKPIs.length, color: CHART_COLORS.gold },
    { name: 'Tourism', value: tourismKPIs.length, color: CHART_COLORS.orange },
    { name: 'Safety', value: safetyKPIs.length, color: CHART_COLORS.rose },
    { name: 'Labor', value: laborKPIs.length, color: CHART_COLORS.purple },
    { name: 'Health', value: healthKPIs.length, color: CHART_COLORS.red },
    { name: 'Environment', value: environmentKPIs.length, color: CHART_COLORS.lime },
    { name: 'Finance', value: financeKPIs.length, color: CHART_COLORS.navy },
  ]

  // Tier distribution for bar chart
  const tierDistribution = [
    { tier: 'Tier 0 (WHO/IMF/UN)', count: [...populationKPIs, ...economicKPIs, ...tradeKPIs, ...tourismKPIs, ...safetyKPIs, ...laborKPIs, ...healthKPIs, ...environmentKPIs, ...financeKPIs].filter(k => k.tier === 0).length },
    { tier: 'Tier 1 (Govt)', count: [...populationKPIs, ...economicKPIs, ...tradeKPIs, ...tourismKPIs, ...safetyKPIs, ...laborKPIs, ...healthKPIs, ...environmentKPIs, ...financeKPIs].filter(k => k.tier === 1).length },
    { tier: 'Tier 2 (Media)', count: [...populationKPIs, ...economicKPIs, ...tradeKPIs, ...tourismKPIs, ...safetyKPIs, ...laborKPIs, ...healthKPIs, ...environmentKPIs, ...financeKPIs].filter(k => k.tier === 2).length },
    { tier: 'Tier 3 (Wiki)', count: [...populationKPIs, ...economicKPIs, ...tradeKPIs, ...tourismKPIs, ...safetyKPIs, ...laborKPIs, ...healthKPIs, ...environmentKPIs, ...financeKPIs].filter(k => k.tier === 3).length },
  ]

  // Get gradient based on alert status
  const getGradient = (alert: string) => {
    switch (alert) {
      case 'GREEN': return 'emerald'
      case 'YELLOW': return 'gold'
      case 'RED': return 'rose'
      default: return 'cyan'
    }
  }

  // Get icon for each category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'population': return Users
      case 'economic': return TrendingUp
      case 'trade': return DollarSign
      case 'tourism': return Plane
      case 'safety': return Shield
      case 'labor': return Briefcase
      case 'health': return Heart
      case 'environment': return Leaf
      case 'finance': return Landmark
      default: return CheckCircle
    }
  }

  // Get tier badge styling
  const getTierBadge = (tier: number) => {
    switch (tier) {
      case 0: return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50 text-xs">T0</Badge>
      case 1: return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 text-xs">T1</Badge>
      case 2: return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50 text-xs">T2</Badge>
      case 3: return <Badge className="bg-slate-500/20 text-slate-400 border-slate-500/50 text-xs">T3</Badge>
      default: return <Badge className="bg-slate-500/20 text-slate-400 border-slate-500/50 text-xs">T{tier}</Badge>
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="font-rajdhani text-4xl font-bold tracking-tight" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Statistical Datapoints
          </h1>
          <p className="text-muted-foreground mt-1 font-rajdhani text-lg">
            Official UAE Statistics — Verification & Confidence Analysis
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge
            variant={alertLevel === 'GREEN' ? 'success' : alertLevel === 'RED' ? 'destructive' : 'warning'}
            className={`px-4 py-2 font-rajdhani text-sm font-semibold ${
              alertLevel === 'GREEN' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
              alertLevel === 'YELLOW' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' :
              'bg-red-500/20 text-red-400 border-red-500/50'
            }`}
          >
            {alertLevel === 'GREEN' ? <CheckCircle className="mr-1 h-4 w-4" /> : <AlertTriangle className="mr-1 h-4 w-4" />}
            ALERT: {alertLevel}
          </Badge>
          <Badge className="bg-glass-surface border-glass-border px-4 py-2 font-rajdhani text-sm font-semibold">
            Confidence: {credibility.score}%
          </Badge>
        </div>
      </motion.div>

      {/* Overview Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-4 md:grid-cols-4"
      >
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Total KPIs Tracked"
            value={populationKPIs.length + economicKPIs.length + tradeKPIs.length + tourismKPIs.length + safetyKPIs.length + laborKPIs.length + healthKPIs.length + environmentKPIs.length + financeKPIs.length}
            icon={CheckCircle}
            gradient="cyan"
            className="hover:scale-105 transition-transform duration-200"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Verified GREEN"
            value={alertCounts.GREEN}
            icon={ArrowUpRight}
            gradient="emerald"
            className="hover:scale-105 transition-transform duration-200"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Caution YELLOW"
            value={alertCounts.YELLOW}
            icon={AlertTriangle}
            gradient="gold"
            className="hover:scale-105 transition-transform duration-200"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Alert RED"
            value={alertCounts.RED}
            icon={ArrowDownRight}
            gradient="rose"
            className="hover:scale-105 transition-transform duration-200"
          />
        </motion.div>
      </motion.div>

      {/* Charts Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {/* Category Distribution */}
        <GlassPanel title="KPI Category Distribution" icon={PieChart} intensity="medium" className="hover:border-glass-border/50 transition-colors">
          <div className="h-[280px]">
            <PieChart
              data={categoryDistribution}
              index="name"
              category="value"
              colors={['cyan', 'emerald', 'gold', 'orange', 'rose', 'purple', 'red', 'lime', 'navy']}
              valueFormatter={(v) => `${v} KPIs`}
              showAnimation={true}
            />
          </div>
        </GlassPanel>

        {/* Source Tier Distribution */}
        <GlassPanel title="Source Reliability by Tier" icon={BarChart} intensity="medium" className="hover:border-glass-border/50 transition-colors">
          <div className="h-[280px]">
            <BarChart
              data={tierDistribution}
              index="tier"
              category="count"
              colors={['emerald']}
              valueFormatter={(v) => `${v} sources`}
              showAnimation={true}
            />
          </div>
        </GlassPanel>
      </motion.div>

      {/* Key Findings Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassPanel title="Key Statistical Findings" icon={CheckCircle} intensity="medium">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {keyFindings.map((finding, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="rounded-lg border border-glass-border bg-glass-surface p-4 backdrop-blur-sm transition-all hover:border-emerald-500/30"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="font-rajdhani text-sm font-semibold text-foreground">{finding.finding}</p>
                    <p className="mt-1 font-rajdhani text-2xl font-bold" style={{ color: finding.alert === 'GREEN' ? '#10b981' : finding.alert === 'YELLOW' ? '#f59e0b' : '#ef4444' }}>
                      {finding.metric}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge className={`text-xs ${
                        finding.alert === 'GREEN' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                        finding.alert === 'YELLOW' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' :
                        'bg-red-500/20 text-red-400 border-red-500/50'
                      }`}>
                        {finding.alert}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{finding.source}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* KPI Sections by Category */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        {/* Population KPIs */}
        <KpiSection
          title="Population Statistics"
          icon={Users}
          kpis={populationKPIs}
          getGradient={getGradient}
          getTierBadge={getTierBadge}
        />

        {/* Economic KPIs */}
        <KpiSection
          title="Economic Performance"
          icon={TrendingUp}
          kpis={economicKPIs}
          getGradient={getGradient}
          getTierBadge={getTierBadge}
        />

        {/* Trade KPIs */}
        <KpiSection
          title="Trade & Commerce"
          icon={DollarSign}
          kpis={tradeKPIs}
          getGradient={getGradient}
          getTierBadge={getTierBadge}
        />

        {/* Tourism KPIs */}
        <KpiSection
          title="Tourism Industry"
          icon={Plane}
          kpis={tourismKPIs}
          getGradient={getGradient}
          getTierBadge={getTierBadge}
        />

        {/* Safety KPIs */}
        <KpiSection
          title="Safety & Security"
          icon={Shield}
          kpis={safetyKPIs}
          getGradient={getGradient}
          getTierBadge={getTierBadge}
        />

        {/* Labor KPIs */}
        <KpiSection
          title="Labor Market"
          icon={Briefcase}
          kpis={laborKPIs}
          getGradient={getGradient}
          getTierBadge={getTierBadge}
        />

        {/* Health KPIs */}
        <KpiSection
          title="Healthcare & Wellness"
          icon={Heart}
          kpis={healthKPIs}
          getGradient={getGradient}
          getTierBadge={getTierBadge}
        />

        {/* Environment KPIs */}
        <KpiSection
          title="Environment & Climate"
          icon={Leaf}
          kpis={environmentKPIs}
          getGradient={getGradient}
          getTierBadge={getTierBadge}
        />

        {/* Finance KPIs */}
        <KpiSection
          title="Government Finance"
          icon={Landmark}
          kpis={financeKPIs}
          getGradient={getGradient}
          getTierBadge={getTierBadge}
        />
      </motion.div>

      {/* Source Credibility Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GlassPanel title="Source Credibility Matrix" icon={CheckCircle} intensity="medium">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="px-4 py-3 text-left font-rajdhani text-sm font-semibold text-muted-foreground">Source</th>
                  <th className="px-4 py-3 text-center font-rajdhani text-sm font-semibold text-muted-foreground">Tier</th>
                  <th className="px-4 py-3 text-center font-rajdhani text-sm font-semibold text-muted-foreground">Reliability</th>
                </tr>
              </thead>
              <tbody>
                {sources.map((source, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="border-b border-glass-border/50 hover:bg-glass-surface/50 transition-colors"
                  >
                    <td className="px-4 py-3 font-rajdhani text-sm">{source.name}</td>
                    <td className="px-4 py-3 text-center">{getTierBadge(source.tier)}</td>
                    <td className="px-4 py-3 text-center">
                      <Badge className={`text-xs ${
                        source.reliability === 'high' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
                        source.reliability === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' :
                        'bg-red-500/20 text-red-400 border-red-500/50'
                      }`}>
                        {source.reliability}
                      </Badge>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Data Quality Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-6 backdrop-blur-sm"
      >
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-yellow-400" />
          <div>
            <h3 className="font-rajdhani text-lg font-bold text-yellow-400">Data Quality Notes</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Multiple Tier-1 official UAE government statistical databases returned 403 errors or were inaccessible (SCAD, FCSC, Central Bank PDFs)</li>
              <li>World Bank data accessible only through intermediary aggregators (Trading Economics) — primary source blocked</li>
              <li>IMF 2026 projections returned 403 from imf.org directly</li>
              <li>Gini coefficient (2018): 26.0 — significant income inequality masked by aggregate GDP per capita figures</li>
              <li>Male:Female ratio: 175:100 — extreme gender imbalance in expat-dominated population</li>
              <li>88.5% expat population creates unique demographic distortion in official statistics</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Last Updated */}
      <div className="flex justify-center">
        <p className="font-rajdhani text-sm text-muted-foreground">
          Last Verified: {credibility.lastVerified} | Data Coverage: Official UAE Statistics
        </p>
      </div>
    </div>
  )
}

// KPI Section Component
function KpiSection({
  title,
  icon: Icon,
  kpis,
  getGradient,
  getTierBadge,
}: {
  title: string
  icon: React.ElementType
  kpis: Array<{
    kpi: string
    value: string | number
    previousValue?: string | number
    change?: string
    source: string
    tier: number
    alert: string
  }>
  getGradient: (alert: string) => string
  getTierBadge: (tier: number) => React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="rounded-xl border border-glass-border bg-glass-surface/30 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/30"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20">
          <Icon className="h-5 w-5 text-emerald-400" />
        </div>
        <h2 className="font-rajdhani text-xl font-bold">{title}</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.03 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="group relative rounded-lg border border-glass-border/50 bg-glass-surface/50 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/30"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="font-rajdhani text-sm font-medium text-muted-foreground">{item.kpi}</p>
              {getTierBadge(item.tier)}
            </div>
            <p className="mt-2 font-rajdhani text-2xl font-bold">
              {item.value}
            </p>
            {item.change && (
              <p className={`mt-1 font-rajdhani text-xs ${
                item.change.startsWith('+') ? 'text-emerald-400' : item.change.startsWith('-') ? 'text-red-400' : 'text-muted-foreground'
              }`}>
                {item.change}
              </p>
            )}
            <p className="mt-2 text-xs text-muted-foreground">{item.source}</p>
            <div className={`absolute right-2 top-2 h-2 w-2 rounded-full ${
              item.alert === 'GREEN' ? 'bg-emerald-400' :
              item.alert === 'YELLOW' ? 'bg-yellow-400' :
              'bg-red-400'
            }`} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
