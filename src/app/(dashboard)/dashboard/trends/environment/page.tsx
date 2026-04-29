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
  Leaf,
  Sun,
  Wind,
  Droplets,
  TreePine,
  Globe,
  Factory,
  Recycle,
  TrendingUp,
  AlertTriangle,
  Shield,
  Zap,
  Scale,
  FileCheck,
  Users,
  Target,
  Award,
  TrendingDown,
  ChevronRight,
} from 'lucide-react'
import {
  climateNetZeroData,
  climateEnergyData,
  climateHydrogenData,
  climateCarbonMarketData,
  climateCCUSData,
  climateMangroveData,
  climateWaterData,
  climateWasteData,
  climateLegislationData,
  climateKPIData,
  climateEntityRegistry,
  climateSentimentByTopic,
} from '@/lib/data-loader/trends-data'

// ============================================================================
// CYCLE A: Net Zero & Policy - Core Metrics
// ============================================================================
function NetZeroSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 via-emerald-950/40 to-transparent p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="emerald" className="gap-1.5">
              <Globe className="h-3 w-3" />
              FIRST IN MENA
            </Badge>
            <Badge variant="outline" className="border-emerald-500/50 text-emerald">
              {climateNetZeroData.targetYear} TARGET
            </Badge>
          </div>
          <h3 className="text-2xl font-bold text-emerald-400 mb-1">Net Zero 2050 Strategy</h3>
          <p className="text-sm text-slate-400 max-w-2xl">
            UAE first MENA nation to commit to net-zero emissions. Legally binding via UAE Net Zero 2050 Charter with five-year review process.
          </p>
        </div>
      </motion.div>

      {/* Key Investment Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Investment"
          value={climateNetZeroData.investmentUSD}
          unit="B USD"
          icon={<Leaf className="h-5 w-5" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Green Jobs Target"
          value={climateNetZeroData.greenJobsTarget}
          unit="K"
          icon={<Users className="h-5 w-5" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="CDR via Mangroves"
          value={climateNetZeroData.cdrMangroves}
          unit="MtCO2e"
          icon={<TreePine className="h-5 w-5" />}
          gradient="cyan"
          status="success"
        />
        <MetricCard
          title="CDR via DAC"
          value={climateNetZeroData.cdrDAC}
          unit="MtCO2e"
          icon={<Factory className="h-5 w-5" />}
          gradient="navy"
          status="success"
        />
      </div>

      {/* Ratings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl border border-slate-700/50 bg-[var(--glass-surface)] p-5"
      >
        <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
          <Scale className="h-4 w-4 text-amber" />
          Climate Action Tracker Ratings
        </h4>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: 'Policies & Action', rating: climateNetZeroData.ndcRatingPolicies, color: 'rose' },
            { label: 'NDC (Domestic)', rating: climateNetZeroData.ndcRatingAlmostSufficient, color: 'emerald' },
            { label: 'NDC (Fair Share)', rating: climateNetZeroData.ndcRatingFairShare, color: 'rose' },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.02 }}
              className={`rounded-lg border ${
                item.color === 'emerald'
                  ? 'border-emerald-500/30 bg-emerald-900/20'
                  : 'border-rose-500/30 bg-rose-900/20'
              } p-3`}
            >
              <p className="text-xs text-slate-400 mb-1">{item.label}</p>
              <p className={`text-lg font-bold ${item.color === 'emerald' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {item.rating}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Exclusions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl border border-amber-500/20 bg-amber-900/10 p-5"
      >
        <h4 className="text-sm font-semibold text-amber-400 mb-3 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          Concerns & Gaps
        </h4>
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="flex items-start gap-2 text-sm">
            <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <span className="text-slate-300">Excludes F-gases (9% of 2022 emissions)</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <span className="text-slate-300">Excludes international aviation & shipping</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <span className="text-slate-300">Heavy reliance on fossil gas & carbon capture</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <span className="text-slate-300">Plans to expand oil & gas production</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ============================================================================
// CYCLE B: Renewable Energy - Solar & Clean Power
// ============================================================================
function EnergySection() {
  const solarParkData = [
    { name: 'MBR Solar Park', current: 3860, target: 8000, status: 'Operational' },
    { name: 'Noor Abu Dhabi', current: 1177, target: null, status: 'Operational', homes: 90000 },
    { name: 'Al Dhafra', current: null, target: null, status: 'Construction' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-gold-500/20 bg-gradient-to-br from-gold-900/20 via-gold-950/40 to-transparent p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="relative z-10">
          <Badge variant="gold" className="mb-2">
            <Sun className="h-3 w-3 mr-1" />
            {climateEnergyData.renewableCapacity2030GW} GW BY 2030
          </Badge>
          <h3 className="text-2xl font-bold text-gold-400 mb-1">UAE Energy Strategy 2050</h3>
          <p className="text-sm text-slate-400">
            Triple renewable share, {climateEnergyData.cleanEnergyMix2030}% clean energy mix, {climateEnergyData.energyEfficiencyGain} efficiency gain
          </p>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Clean Energy Mix 2030"
          value={climateEnergyData.cleanEnergyMix2030}
          unit="%"
          icon={<Zap className="h-5 w-5" />}
          gradient="gold"
          status="info"
        />
        <MetricCard
          title="Grid Emission Factor"
          value={climateEnergyData.gridEmissionFactor}
          unit="kg CO2/kWh"
          icon={<Wind className="h-5 w-5" />}
          gradient="cyan"
          status="info"
        />
        <MetricCard
          title="Investment"
          value={150}
          unit="B AED"
          icon={<TrendingUp className="h-5 w-5" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Green Jobs 2030"
          value={climateEnergyData.greenJobs2030}
          unit="K"
          icon={<Users className="h-5 w-5" />}
          gradient="navy"
          status="info"
        />
      </div>

      {/* Solar Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl border border-slate-700/50 bg-[var(--glass-surface)] p-5"
      >
        <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
          <Sun className="h-4 w-4 text-gold" />
          Major Solar Projects
        </h4>
        <div className="space-y-3">
          {solarParkData.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="flex items-center justify-between rounded-lg border border-gold-500/20 bg-gold-900/10 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20">
                  <Sun className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-slate-200">{project.name}</p>
                  {project.homes && (
                    <p className="text-xs text-slate-400">Powers {project.homes.toLocaleString()} homes</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {project.current && (
                  <div className="text-right">
                    <p className="text-lg font-bold text-gold">{project.current.toLocaleString()}</p>
                    <p className="text-xs text-slate-400">MW current</p>
                  </div>
                )}
                {project.target && (
                  <div className="text-right border-l border-gold-500/30 pl-3">
                    <p className="text-lg font-bold text-gold-400">{project.target.toLocaleString()}</p>
                    <p className="text-xs text-slate-400">MW target</p>
                  </div>
                )}
                <Badge variant={project.status === 'Operational' ? 'default' : 'outline'} className="text-xs">
                  {project.status}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Energy Mix Chart */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Renewable Energy Mix Target (2030)</CardTitle>
          <CardDescription>{climateEnergyData.cleanEnergyGeneration2030}% clean energy generation contribution</CardDescription>
        </CardHeader>
        <CardContent>
          <PieChart
            data={[
              { name: 'Solar', value: 40, color: CHART_COLORS.gold },
              { name: 'Nuclear', value: 35, color: CHART_COLORS.navy },
              { name: 'Wind', value: 15, color: CHART_COLORS.info },
              { name: 'Other Clean', value: 10, color: CHART_COLORS.emerald },
            ]}
            height={280}
            showLegend={true}
          />
        </CardContent>
      </Card>
    </div>
  )
}

// ============================================================================
// CYCLE C: Green Hydrogen & CCUS
// ============================================================================
function HydrogenCCUSSection() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  const hydrogenRoadmap = [
    { year: 2031, total: 1.4, green: 1.0, blue: 0.4 },
    { year: 2040, total: 7.5, green: null, blue: null },
    { year: 2050, total: 15.0, green: null, blue: null },
  ]

  return (
    <div className="space-y-6">
      {/* Hydrogen Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 via-cyan-950/40 to-transparent p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,145,178,0.15),transparent_50%)]" />
        <div className="relative z-10">
          <Badge variant="cyan" className="mb-2">
            <Zap className="h-3 w-3 mr-1" />
            {climateHydrogenData.production2050mtpa} MTPA BY 2050
          </Badge>
          <h3 className="text-2xl font-bold text-cyan-400 mb-1">Green Hydrogen Programme</h3>
          <p className="text-sm text-slate-400">
            Infrastructure: {climateHydrogenData.solarPVRequiredGW} GW solar PV, {climateHydrogenData.electrolyserRequiredGW} GW electrolyser
          </p>
        </div>
      </motion.div>

      {/* Hydrogen Production Roadmap */}
      <div className="grid gap-4 sm:grid-cols-3">
        {hydrogenRoadmap.map((item, idx) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(8,145,178,0.5)' }}
            onClick={() => setSelectedYear(selectedYear === item.year ? null : item.year)}
            className={`cursor-pointer rounded-xl border p-5 transition-all ${
              selectedYear === item.year
                ? 'border-cyan-500/50 bg-cyan-900/20'
                : 'border-slate-700/50 bg-[var(--glass-surface)]'
            }`}
          >
            <p className="text-sm text-slate-400 mb-1">{item.year} Target</p>
            <p className="text-3xl font-bold text-cyan-400">{item.total}</p>
            <p className="text-xs text-slate-500">mtpa</p>
            {item.green && (
              <div className="mt-3 pt-3 border-t border-cyan-500/20">
                <div className="flex justify-between text-xs">
                  <span className="text-emerald-400">Green: {item.green}</span>
                  <span className="text-blue-400">Blue: {item.blue}</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Green Steel Pilot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl border border-emerald-500/20 bg-emerald-900/10 p-5"
      >
        <h4 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center gap-2">
          <Award className="h-4 w-4" />
          First in MENA: Green Steel Pilot
        </h4>
        <p className="text-sm text-slate-300">{climateHydrogenData.greenSteelPilot}</p>
        <p className="text-xs text-slate-500 mt-1">Green steel production now fully operational</p>
      </motion.div>

      {/* CCUS Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-[var(--glass-surface)] p-6"
      >
        <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
          <Factory className="h-4 w-4 text-navy" />
          Carbon Capture, Utilization & Storage (CCUS)
        </h4>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Current Capacity"
            value={climateCCUSData.currentCapacityMtpa}
            unit="Mt/year"
            icon={<Factory className="h-5 w-5" />}
            gradient="navy"
            status="success"
          />
          <MetricCard
            title="2030 Target"
            value={climateCCUSData.target2030Mtpa}
            unit="MTPA"
            icon={<Target className="h-5 w-5" />}
            gradient="gold"
            status="info"
          />
          <MetricCard
            title="ADNOC Target"
            value={climateCCUSData.ADNOCtarget2030Mt}
            unit="Mt/year"
            icon={<Globe className="h-5 w-5" />}
            gradient="emerald"
            status="info"
          />
          <MetricCard
            title="Storage Potential"
            value={climateCCUSData.storagePotentialGt}
            unit="Gt"
            icon={<Shield className="h-5 w-5" />}
            gradient="cyan"
            status="success"
          />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-navy-500/30 bg-navy-900/20 p-3">
            <p className="text-xs text-slate-400">Al Reyadah (Abu Dhabi)</p>
            <p className="text-lg font-bold text-navy-400">{climateCCUSData.alReyadahCapacityMt} Mt/year</p>
            <p className="text-xs text-slate-500">First MENA commercial CCUS (since 2016)</p>
          </div>
          <div className="rounded-lg border border-cyan-500/30 bg-cyan-900/20 p-3">
            <p className="text-xs text-slate-400">Habshan Project</p>
            <p className="text-lg font-bold text-cyan-400">{climateCCUSData.habshanCapacityMtpa} MtPA</p>
            <p className="text-xs text-slate-500">Combined with Al Reyadah: 2.3 MTPA</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-purple-500/30 bg-purple-900/20 p-3">
          <p className="text-xs text-purple-400 font-semibold">Direct Air Capture (DAC)</p>
          <p className="text-lg font-bold text-purple-400">{climateCCUSData.dacPlannedMtpa} MTPA planned</p>
          <p className="text-xs text-slate-500">Occidental + ADNOC agreement (largest planned globally)</p>
        </div>

        <div className="mt-4 rounded-lg border border-rose-500/20 bg-rose-900/10 p-3">
          <p className="text-xs text-rose-400 font-semibold">EU CBAM Impact</p>
          <p className="text-lg font-bold text-rose-400">{climateCCUSData.euCBAMimpactPercent}% of UAE exports</p>
          <p className="text-xs text-slate-500">Steel, aluminum, fertilizers affected - decarbonization required</p>
        </div>
      </motion.div>
    </div>
  )
}

// ============================================================================
// CYCLE D: Carbon Credit Market & Mangroves
// ============================================================================
function CarbonMangroveSection() {
  return (
    <div className="space-y-6">
      {/* Carbon Market Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 via-emerald-950/40 to-transparent p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="relative z-10">
          <Badge variant="emerald" className="mb-2">
            <TrendingUp className="h-3 w-3 mr-1" />
            {climateCarbonMarketData.cagr}% CAGR
          </Badge>
          <h3 className="text-2xl font-bold text-emerald-400 mb-1">Carbon Credit Market</h3>
          <p className="text-sm text-slate-400">
            ADGM: World's first regulated carbon credit exchange (March 2022)
          </p>
        </div>
      </motion.div>

      {/* Market Growth */}
      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard
          title="2023 Market"
          value={(climateCarbonMarketData.market2023USD / 1e6).toFixed(1)}
          unit="M USD"
          icon={<TrendingUp className="h-5 w-5" />}
          gradient="emerald"
          status="neutral"
        />
        <MetricCard
          title="2024 Market"
          value={(climateCarbonMarketData.market2024USD / 1e6).toFixed(1)}
          unit="M USD"
          icon={<TrendingUp className="h-5 w-5" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="2030 Projection"
          value={(climateCarbonMarketData.market2030USD / 1e6).toFixed(1)}
          unit="M USD"
          icon={<Target className="h-5 w-5" />}
          gradient="cyan"
          status="info"
        />
      </div>

      {/* DFM Pilot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl border border-slate-700/50 bg-[var(--glass-surface)] p-5"
      >
        <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-emerald" />
          DFM COP28 Pilot Results
        </h4>
        <div className="grid gap-4 sm:grid-cols-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-emerald-400">{climateCarbonMarketData.dfmPilotTrades}</p>
            <p className="text-xs text-slate-400">Trades</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-emerald-400">{climateCarbonMarketData.dfmPilotVolume.toLocaleString()}</p>
            <p className="text-xs text-slate-400">Credits Volume</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-emerald-400">${climateCarbonMarketData.dfmPilotValueUSD.toLocaleString()}</p>
            <p className="text-xs text-slate-400">Value USD</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-emerald-400">10,209</p>
            <p className="text-xs text-slate-400">Credits Retired</p>
          </div>
        </div>
      </motion.div>

      {/* Market Segments */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Market Segments (2024)</CardTitle>
            <CardDescription>Afforestation leads nature-based solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart
              data={[
                { name: 'Afforestation', value: climateCarbonMarketData.afforestationShare, color: CHART_COLORS.emerald },
                { name: 'Soil Carbon', value: 25, color: CHART_COLORS.gold },
                { name: 'Energy Efficiency', value: 20, color: CHART_COLORS.info },
                { name: 'Other', value: 20.59, color: CHART_COLORS.platinum },
              ]}
              height={220}
              showLegend={true}
            />
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Carbon Credit Pricing</CardTitle>
            <CardDescription>High-quality credits range</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-[220px]">
              <div className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {climateCarbonMarketData.carbonCreditPriceRange}
                </p>
                <p className="text-sm text-slate-400 mt-2">per tonne</p>
                <p className="text-xs text-slate-500 mt-4">Oxford Principles for Net Zero Aligned Offsetting</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mangroves Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative overflow-hidden rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-900/20 via-teal-950/40 to-transparent p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.15),transparent_50%)]" />
        <div className="relative z-10">
          <Badge variant="cyan" className="mb-2">
            <TreePine className="h-3 w-3 mr-1" />
            {climateMangroveData.target2030Million}M BY 2030
          </Badge>
          <h3 className="text-2xl font-bold text-teal-400 mb-1">Mangrove Restoration</h3>
          <p className="text-sm text-slate-400">
            {climateMangroveData.carbonStorageVsForest}% faster carbon storage than terrestrial forests
          </p>
        </div>
      </motion.div>

      {/* Mangrove Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Carbon Storage Rate"
          value={climateMangroveData.abuDhabiRateTonnesPerHa}
          unit="t/ha/year"
          icon={<TreePine className="h-5 w-5" />}
          gradient="teal"
          status="success"
        />
        <MetricCard
          title="Total Sequestration"
          value={climateMangroveData.totalAbuDhabiSequestrationTonnes}
          unit="tonnes"
          icon={<Leaf className="h-5 w-5" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Storage Multiplier"
          value={climateMangroveData.storageMultiplierVsTropical}
          unit="x"
          icon={<TrendingUp className="h-5 w-5" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Park Coverage"
          value={climateMangroveData.mangroveNationalParkShare}
          unit="% UAE total"
          icon={<Globe className="h-5 w-5" />}
          gradient="navy"
          status="success"
        />
      </div>

      {/* Mangrove Alliance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="rounded-xl border border-teal-500/20 bg-teal-900/10 p-5"
      >
        <h4 className="text-sm font-semibold text-teal-400 mb-2 flex items-center gap-2">
          <Globe className="h-4 w-4" />
          Mangrove Alliance & Breakthrough
        </h4>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="text-lg font-bold text-teal-400">${climateMangroveData.mangroveAllianceBillion}B</p>
            <p className="text-xs text-slate-400">Mangrove Alliance by 2030</p>
          </div>
          <div>
            <p className="text-lg font-bold text-teal-400">{climateMangroveData.cdrMCO2e} MtCO2e</p>
            <p className="text-xs text-slate-400">CDR via mangroves in Net Zero strategy</p>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          UN Decade flagship initiative - 50% of world's remaining mangroves at risk of collapse by 2050
        </p>
      </motion.div>
    </div>
  )
}

// ============================================================================
// CYCLE E: Water Security & Waste Management
// ============================================================================
function WaterWasteSection() {
  return (
    <div className="space-y-6">
      {/* Water Security Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 via-cyan-950/40 to-transparent p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,145,178,0.15),transparent_50%)]" />
        <div className="relative z-10">
          <Badge variant="cyan" className="mb-2">
            <Droplets className="h-3 w-3 mr-1" />
            CRITICAL RESOURCE
          </Badge>
          <h3 className="text-2xl font-bold text-cyan-400 mb-1">Water Security</h3>
          <p className="text-sm text-slate-400">
            {climateWaterData.desalinationPercent}% of drinking water from desalination | {climateWaterData.waterStress}
          </p>
        </div>
      </motion.div>

      {/* Water Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Desalination Share"
          value={climateWaterData.desalinationPercent}
          unit="%"
          icon={<Droplets className="h-5 w-5" />}
          gradient="cyan"
          status="error"
        />
        <MetricCard
          title="Liwa Storage"
          value={(climateWaterData.liwaStorageM3 / 1e6).toFixed(0)}
          unit="M m³"
          icon={<Shield className="h-5 w-5" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Recoverable"
          value={(climateWaterData.liwaRecoverableM3 / 1e6).toFixed(0)}
          unit="M m³"
          icon={<Droplets className="h-5 w-5" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Emergency Supply"
          value={climateWaterData.emergencySupplyDays}
          unit="days"
          icon={<AlertTriangle className="h-5 w-5" />}
          gradient="gold"
          status="success"
        />
      </div>

      {/* Water Sources Chart */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Water Sources Distribution</CardTitle>
          <CardDescription>UAE water supply breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <PieChart
            data={[
              { name: 'Desalination', value: climateWaterData.desalinationPercent, color: CHART_COLORS.info },
              { name: 'Groundwater', value: 18, color: CHART_COLORS.navy },
              { name: 'Recycled', value: 12, color: CHART_COLORS.emerald },
              { name: 'Imported', value: 5, color: CHART_COLORS.platinum },
            ]}
            height={280}
            showLegend={true}
          />
        </CardContent>
      </Card>

      {/* Waste Management Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 via-emerald-950/40 to-transparent p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="relative z-10">
          <Badge variant="emerald" className="mb-2">
            <Recycle className="h-3 w-3 mr-1" />
            AED 2B INVESTMENT
          </Badge>
          <h3 className="text-2xl font-bold text-emerald-400 mb-1">Waste Management & Circular Economy</h3>
          <p className="text-sm text-slate-400">
            {climateWasteData.wasteManagementCAGR}% market CAGR | {climateWasteData.eWasteCAGR}% e-waste CAGR
          </p>
        </div>
      </motion.div>

      {/* Waste Market Growth */}
      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard
          title="Waste Mgmt 2025"
          value={(climateWasteData.wasteManagement2025USD / 1e9).toFixed(1)}
          unit="B USD"
          icon={<Recycle className="h-5 w-5" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Waste Mgmt 2033"
          value={(climateWasteData.wasteManagement2033USD / 1e9).toFixed(1)}
          unit="B USD"
          icon={<TrendingUp className="h-5 w-5" />}
          gradient="gold"
          status="info"
        />
        <MetricCard
          title="Waste-to-Energy"
          value={(climateWasteData.wasteToEnergy2025USD / 1e6).toFixed(0)}
          unit="M USD"
          icon={<Zap className="h-5 w-5" />}
          gradient="cyan"
          status="success"
        />
      </div>

      {/* Waste Projects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl border border-slate-700/50 bg-[var(--glass-surface)] p-5"
      >
        <h4 className="text-sm font-semibold text-slate-300 mb-4">Key Waste-to-Energy Projects</h4>
        <div className="space-y-3">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-900/10 p-4"
          >
            <div className="flex items-center gap-3">
              <Factory className="h-5 w-5 text-emerald" />
              <span className="font-medium text-slate-200">Warsan (Dubai)</span>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-emerald">{climateWasteData.warsanCapacityMillionTonnes}M tonnes/year</p>
              <p className="text-xs text-slate-400">{climateWasteData.warsanHomesPowered.toLocaleString()} homes powered</p>
            </div>
          </motion.div>
          <div className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-4">
            <div className="flex items-center gap-3">
              <Factory className="h-5 w-5 text-cyan" />
              <span className="font-medium text-slate-200">Abu Dhabi First Plant</span>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-cyan">900K tonnes/year</p>
              <p className="text-xs text-slate-400">80 MW capacity</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* C&D Waste Growth */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Construction & Demolition Waste</CardTitle>
          <CardDescription>Significant increase from 2016 to 2022</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart
            data={[
              { year: '2016', waste: climateWasteData.constructionDemolitionWaste2016, color: CHART_COLORS.platinum },
              { year: '2022', waste: climateWasteData.constructionDemolitionWaste2022, color: CHART_COLORS.emerald },
            ]}
            xAxisKey="year"
            bars={[{ dataKey: 'waste', name: 'Tonnes', color: CHART_COLORS.emerald }]}
            height={250}
            showGrid={true}
          />
        </CardContent>
      </Card>
    </div>
  )
}

// ============================================================================
// CYCLE F: Climate Legislation & Compliance
// ============================================================================
function LegislationSection() {
  const penaltyTiers = [
    { level: 'Minor', range: climateLegislationData.minorPenaltyAED, color: 'emerald' },
    { level: 'Moderate', range: climateLegislationData.moderatePenaltyAED, color: 'gold' },
    { level: 'Serious', range: climateLegislationData.seriousPenaltyAED, color: 'amber' },
    { level: 'Severe', range: climateLegislationData.severePenaltyAED, color: 'rose' },
  ]

  return (
    <div className="space-y-6">
      {/* Legislation Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-purple-950/40 to-transparent p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.15),transparent_50%)]" />
        <div className="relative z-10">
          <Badge variant="purple" className="mb-2">
            <FileCheck className="h-3 w-3 mr-1" />
            WORLD'S FIRST
          </Badge>
          <h3 className="text-2xl font-bold text-purple-400 mb-1">Climate Legislation</h3>
          <p className="text-sm text-slate-400">
            {climateLegislationData.climateLaw} - First globally with legally enforceable ESG/climate compliance
          </p>
        </div>
      </motion.div>

      {/* Key Dates */}
      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard
          title="Climate Law Effective"
          value="May 2025"
          icon={<FileCheck className="h-5 w-5" />}
          gradient="purple"
          status="success"
        />
        <MetricCard
          title="NRCC Effective"
          value="Dec 2024"
          icon={<Globe className="h-5 w-5" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Compliance Deadline"
          value="Jun 2025"
          icon={<AlertTriangle className="h-5 w-5" />}
          gradient="gold"
          status="warning"
        />
      </div>

      {/* NRCC Requirements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl border border-slate-700/50 bg-[var(--glass-surface)] p-5"
      >
        <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-purple" />
          National Register for Carbon Credits (NRCC)
        </h4>

        <div className="space-y-4">
          <div className="rounded-lg border border-purple-500/30 bg-purple-900/20 p-4">
            <p className="text-sm font-semibold text-purple-400 mb-2">Affected Entities</p>
            <p className="text-xs text-slate-300">
              Public and private companies (including free zones) emitting {climateLegislationData.emissionThresholdMtCO2e}+ million tonnes CO2 equivalent annually
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-300">Mandatory Actions:</p>
            {[
              'Register with MOCCAE',
              'Implement MRV system',
              'Submit annual emissions reports',
              'Purchase carbon credits via SCA-approved platforms',
            ].map((action, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <ChevronRight className="h-4 w-4 text-purple-500 flex-shrink-0" />
                <span className="text-slate-400">{action}</span>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-rose-500/30 bg-rose-900/20 p-4">
            <p className="text-sm font-semibold text-rose-400 mb-1">Penalties</p>
            <p className="text-lg font-bold text-rose-400">Up to AED {climateLegislationData.penaltyMaxAED.toLocaleString()}</p>
            <p className="text-xs text-slate-400">~$272,000 USD + potential suspension of trading rights</p>
          </div>
        </div>
      </motion.div>

      {/* Penalty Structure */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="rounded-xl border border-slate-700/50 bg-[var(--glass-surface)] p-5"
      >
        <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
          <Scale className="h-4 w-4 text-amber" />
          ESG Law 2025 - Penalty Structure
        </h4>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {penaltyTiers.map((tier) => (
            <motion.div
              key={tier.level}
              whileHover={{ scale: 1.02 }}
              className={`rounded-lg border ${
                tier.color === 'emerald' ? 'border-emerald-500/30 bg-emerald-900/20' :
                tier.color === 'gold' ? 'border-gold-500/30 bg-gold-900/20' :
                tier.color === 'amber' ? 'border-amber-500/30 bg-amber-900/20' :
                'border-rose-500/30 bg-rose-900/20'
              } p-3 text-center`}
            >
              <p className={`text-xs font-medium ${
                tier.color === 'emerald' ? 'text-emerald-400' :
                tier.color === 'gold' ? 'text-gold-400' :
                tier.color === 'amber' ? 'text-amber-400' :
                'text-rose-400'
              }`}>{tier.level}</p>
              <p className={`text-lg font-bold ${
                tier.color === 'emerald' ? 'text-emerald-300' :
                tier.color === 'gold' ? 'text-gold-300' :
                tier.color === 'amber' ? 'text-amber-300' :
                'text-rose-300'
              }`}>{tier.range}</p>
              <p className="text-xs text-slate-500">AED</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* KPI Dashboard */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">UAE Climate & Sustainability KPIs</CardTitle>
          <CardDescription>Progress toward key targets</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-3">
              {climateKPIData.map((kpi, idx) => (
                <motion.div
                  key={kpi.kpi}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${
                      kpi.status === 'Active' ? 'bg-emerald-500' :
                      kpi.status === 'In Progress' ? 'bg-gold-500' :
                      kpi.status === 'Growing' ? 'bg-cyan-500' :
                      'bg-rose-500'
                    }`} />
                    <span className="text-sm font-medium text-slate-200">{kpi.kpi}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {kpi.current && (
                      <span className="text-sm text-slate-400">{kpi.current}</span>
                    )}
                    {kpi.target && (
                      <Badge variant="outline" className="text-xs">
                        Target: {kpi.target}
                      </Badge>
                    )}
                    <Badge
                      variant={
                        kpi.status === 'Active' ? 'default' :
                        kpi.status === 'In Progress' ? 'secondary' :
                        kpi.status === 'Growing' ? 'outline' :
                        'destructive'
                      }
                      className="text-xs"
                    >
                      {kpi.status}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Entity Registry */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Key UAE Climate Stakeholders</CardTitle>
          <CardDescription>Entity registry and jurisdictions</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-2">
              {climateEntityRegistry.map((entity, idx) => (
                <motion.div
                  key={entity.entity}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.03 }}
                  className="flex items-center justify-between rounded-lg border border-slate-700/30 bg-slate-800/20 p-2"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-200">{entity.entity}</p>
                    <p className="text-xs text-slate-500">{entity.role}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {entity.jurisdiction}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Sentiment Analysis */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Sentiment Analysis by Topic</CardTitle>
          <CardDescription>Research sentiment across climate topics</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[250px]">
            <div className="space-y-2">
              {climateSentimentByTopic.map((item, idx) => (
                <motion.div
                  key={item.topic}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center justify-between rounded-lg border border-slate-700/30 bg-slate-800/20 p-2"
                >
                  <span className="text-sm text-slate-300">{item.topic}</span>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        item.sentiment === 'Positive' ? 'default' :
                        item.sentiment === 'Negative' ? 'destructive' :
                        item.sentiment === 'Concerned' ? 'destructive' :
                        'secondary'
                      }
                      className="text-xs"
                    >
                      {item.sentiment}
                    </Badge>
                    <span className="text-xs text-slate-500">{item.confidence}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function EnvironmentalTrendsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-8 p-8 font-rajdhani">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="emerald" className="mb-2">TRENDS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-emerald">Environmental Trends</h1>
          <p className="mt-2 text-slate-400">
            Climate action, sustainability initiatives, and environmental intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald/50 text-emerald hover:bg-emerald/10">
            <Globe className="h-4 w-4" />
            Climate Dashboard
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-white gap-2">
            <Leaf className="h-4 w-4" />
            Track Sustainability
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
      >
        <MetricCard
          title="Net Zero Target"
          value={2050}
          icon={<Globe className="h-5 w-5" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Investment"
          value={163}
          unit="B USD"
          icon={<TrendingUp className="h-5 w-5" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Solar Capacity"
          value={climateEnergyData.solarParkMBRCurrentMW}
          unit="MW"
          icon={<Sun className="h-5 w-5" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Carbon Market"
          value={36}
          unit="M USD"
          icon={<Leaf className="h-5 w-5" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="ESG Penalty"
          value={2}
          unit="M AED max"
          icon={<AlertTriangle className="h-5 w-5" />}
          gradient="rose"
          status="success"
        />
      </motion.div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="netzero">Net Zero</TabsTrigger>
          <TabsTrigger value="energy">Energy</TabsTrigger>
          <TabsTrigger value="hydrogen">Hydrogen & CCUS</TabsTrigger>
          <TabsTrigger value="carbon">Carbon & Mangroves</TabsTrigger>
          <TabsTrigger value="water">Water & Waste</TabsTrigger>
          <TabsTrigger value="legislation">Legislation</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="overview" className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GlassPanel title="Environmental Trends Overview" description="UAE sustainability and climate action metrics">
                <div className="space-y-6">
                  {/* Overview Grid */}
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* KPI Summary */}
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Climate Action Tracker</CardTitle>
                        <CardDescription>UAE net zero assessment</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            { label: 'Policies & Action', value: 'Insufficient', color: 'rose' },
                            { label: 'NDC (Domestic)', value: 'Almost Sufficient', color: 'emerald' },
                            { label: 'NDC (Fair Share)', value: 'Insufficient', color: 'rose' },
                          ].map((item) => (
                            <div key={item.label} className="flex items-center justify-between">
                              <span className="text-sm text-slate-400">{item.label}</span>
                              <Badge variant={item.color === 'emerald' ? 'default' : 'destructive'}>
                                {item.value}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Sentiment Summary */}
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="text-lg">Topic Sentiment</CardTitle>
                        <CardDescription>Research tone by area</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {climateSentimentByTopic.slice(0, 5).map((item) => (
                            <div key={item.topic} className="flex items-center justify-between text-sm">
                              <span className="text-slate-300">{item.topic}</span>
                              <Badge
                                variant={
                                  item.sentiment === 'Positive' ? 'default' :
                                  item.sentiment === 'Negative' || item.sentiment === 'Concerned' ? 'destructive' :
                                  'secondary'
                                }
                                className="text-xs"
                              >
                                {item.sentiment}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Entity Overview */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Stakeholders</CardTitle>
                      <CardDescription>Federal and emirate-level entities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="grid gap-2 sm:grid-cols-2">
                          {climateEntityRegistry.map((entity) => (
                            <div key={entity.entity} className="flex items-center gap-2 rounded-lg bg-slate-800/30 p-2">
                              <div className="h-2 w-2 rounded-full bg-emerald-500" />
                              <span className="text-xs text-slate-300 truncate">{entity.entity}</span>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
              </GlassPanel>
            </motion.div>
          </TabsContent>

          <TabsContent value="netzero">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <NetZeroSection />
            </motion.div>
          </TabsContent>

          <TabsContent value="energy">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EnergySection />
            </motion.div>
          </TabsContent>

          <TabsContent value="hydrogen">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HydrogenCCUSSection />
            </motion.div>
          </TabsContent>

          <TabsContent value="carbon">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CarbonMangroveSection />
            </motion.div>
          </TabsContent>

          <TabsContent value="water">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WaterWasteSection />
            </motion.div>
          </TabsContent>

          <TabsContent value="legislation">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LegislationSection />
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </div>
  )
}
