// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Shield,
  TrendingUp,
  TrendingDown,
  Users,
  Heart,
  AlertTriangle,
  Eye,
  CheckCircle,
  XCircle,
  MinusCircle,
  Star,
  DollarSign,
  Scale,
  Smile,
  Frown,
  Meh,
  Award,
  Flag,
  MapPin,
  BookOpen,
  AlertCircle,
  Cpu,
  Building,
  Plane,
  UsersRound,
} from 'lucide-react'
import {
  nationalImageData,
  executionMetadata,
  perceptionScorecard,
  keyFindings,
  regionalPerception,
  dimensionPerception,
  softPowerRankings,
  washingtonInstituteSurvey,
  economicData,
  sourceRegistry,
  nationalImageOverview,
  dashboardMetrics,
} from '@/lib/data/perception/image-data'

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
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardHover = {
  rest: { scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: { scale: 1.02, boxShadow: '0 8px 30px rgba(212,175,55,0.15)', transition: { duration: 0.3 } },
}

// Trend helpers
const trendUp = { trend: 'up' as const }
const trendDown = { trend: 'down' as const }
const trendNeutral = { trend: 'neutral' as const }

// Color helpers
const positiveColor = CHART_COLORS.emerald
const negativeColor = CHART_COLORS.rose
const neutralColor = CHART_COLORS.platinum
const goldColor = CHART_COLORS.gold
const cyanColor = CHART_COLORS.teal

export default function NationalImagePage() {
  const exec = executionMetadata
  const dm = dashboardMetrics
  const ov = nationalImageOverview
  const sp = softPowerRankings

  // Sentiment distribution for pie chart
  const sentimentPieData = [
    { name: 'Positive', value: dm.sentiment.positive, color: positiveColor },
    { name: 'Negative', value: dm.sentiment.negative, color: negativeColor },
    { name: 'Neutral', value: dm.sentiment.neutral, color: neutralColor },
  ]

  // Regional perception bar data
  const regionalBarData = [
    { name: 'China', positive: 63, color: CHART_COLORS.rose },
    { name: 'Russia', positive: 73, color: CHART_COLORS.gold },
    { name: 'US (UAE cit.)', positive: 82, color: cyanColor },
    { name: 'Arab World', positive: 27, color: CHART_COLORS.orange },
  ]

  // Dimension radar data
  const radarData = [
    { dimension: 'Safety', score: 95, color: positiveColor },
    { dimension: 'Economy', score: 88, color: positiveColor },
    { dimension: 'Soft Power', score: 72, color: positiveColor },
    { dimension: 'Tourism', score: 90, color: positiveColor },
    { dimension: 'Happiness', score: 78, color: positiveColor },
    { dimension: 'AI/Tech', score: 82, color: positiveColor },
    { dimension: 'Human Rights', score: 18, color: negativeColor },
    { dimension: 'Democracy', score: 15, color: negativeColor },
    { dimension: 'LGBTQ', score: 10, color: negativeColor },
    { dimension: 'Press Free', score: 12, color: negativeColor },
    { dimension: 'Censorship', score: 22, color: negativeColor },
    { dimension: 'Environment', score: 28, color: negativeColor },
  ]

  // Scorecard breakdown
  const positiveCount = perceptionScorecard.filter(s => s.perception === 'VERY HIGH' || s.perception === 'HIGH').length
  const negativeCount = perceptionScorecard.filter(s => s.perception === 'VERY LOW' || s.perception === 'LOW').length
  const mixedCount = perceptionScorecard.filter(s => s.perception === 'MIXED').length

  const scorecardPieData = [
    { name: 'Positive Dimensions', value: positiveCount, color: positiveColor },
    { name: 'Negative Dimensions', value: negativeCount, color: negativeColor },
    { name: 'Mixed Dimensions', value: mixedCount, color: neutralColor },
  ]

  // Top soft power pillars
  const topPillars = sp.pillarRankings.slice(0, 4)

  // US asymmetric perception
  const usAsymData = [
    { name: 'UAE Citizens → US', value: 82, color: positiveColor },
    { name: 'Americans → UAE', value: 17, color: negativeColor },
  ]

  // Freedom scores
  const freedomScores = [
    { name: 'Human Rights', score: 18, max: 100, color: negativeColor },
    { name: 'Civil Liberties', score: 13, max: 60, color: negativeColor },
    { name: 'Internet Freedom', score: 28, max: 100, color: negativeColor },
  ]

  return (
    <div className="space-y-8 p-8 min-h-screen">
      {/* Header */}
      <motion.div
        initial="hidden" animate="visible" variants={fadeInUp}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2 font-rajdhani text-xs tracking-widest uppercase">UAE National Image</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">UAE National Image</h1>
          <p className="mt-2 text-platinum-500-400 text-sm max-w-2xl">
            Comprehensive international perception analysis — how the world perceives UAE across{' '}
            <span className="text-gold-400 font-semibold">24 query dimensions</span>,{' '}
            <span className="text-gold-400 font-semibold">{exec.urlsSuccessfullyFetched}+ sources</span>, and{' '}
            <span className="text-gold-400 font-semibold">15 global regions</span>.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge variant="outline" className="border-gold-300/50 text-gold-400 font-rajdhani">
            <Flag className="w-3 h-3 mr-1" /> {exec.dateExecuted}
          </Badge>
          <Badge variant="outline" className="border-cyan-300/50 text-cyan-400 font-rajdhani">
            <Globe className="w-3 h-3 mr-1" /> Soft Power #{sp.globalRank}
          </Badge>
        </div>
      </motion.div>

      {/* Top Metric Cards */}
      <motion.div
        variants={staggerContainer} initial="hidden" animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Soft Power Rank"
            value={`#${sp.globalRank}`}
            unit="globally"
            gradient="gold"
            icon={<Award className="w-5 h-5" />}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Safety Ranking"
            value="1st"
            unit="safest country"
            previousValue={2}
            trend="up"
            gradient="emerald"
            icon={<Shield className="w-5 h-5" />}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Queries Executed"
            value={exec.queriesExecuted}
            unit="queries"
            gradient="cyan"
            icon={<Cpu className="w-5 h-5" />}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Sources Fetched"
            value={exec.urlsSuccessfullyFetched}
            unit="pages"
            gradient="purple"
            icon={<BookOpen className="w-5 h-5" />}
          />
        </motion.div>
      </motion.div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-glass-medium border border-white/10">
          <TabsTrigger value="overview" className="font-rajdhani text-sm data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400">Overview</TabsTrigger>
          <TabsTrigger value="regional" className="font-rajdhani text-sm data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400">Regional Perception</TabsTrigger>
          <TabsTrigger value="dimensions" className="font-rajdhani text-sm data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400">Dimension Analysis</TabsTrigger>
          <TabsTrigger value="scorecard" className="font-rajdhani text-sm data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400">Perception Scorecard</TabsTrigger>
          <TabsTrigger value="findings" className="font-rajdhani text-sm data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400">Key Findings</TabsTrigger>
        </TabsList>

        {/* ========== OVERVIEW TAB ========== */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Narrative Panel */}
            <GlassPanel title="National Narrative" description="Core story of UAE's international positioning" className="lg:col-span-2" badge="Strategic Narrative">
              <p className="font-rajdhani text-platinum-500-300 leading-relaxed text-sm">
                {ov.narrative}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-platinum-500-500 uppercase tracking-wider mb-1">Key Strengths</p>
                  <ul className="space-y-1">
                    {ov.strengths.slice(0, 3).map((s, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-emerald-300">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-platinum-500-500 uppercase tracking-wider mb-1">Key Challenges</p>
                  <ul className="space-y-1">
                    {ov.challenges.slice(0, 3).map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-rose-300">
                        <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassPanel>

            {/* Sentiment Pie */}
            <motion.div variants={itemVariants}>
              <GlassPanel title="Overall Sentiment" description="Perception polarity across dimensions" badge="Dashboard">
                <PieChart
                  data={sentimentPieData}
                  height={220}
                  showLabel
                  innerRadius={60}
                />
              </GlassPanel>
            </motion.div>

          </motion.div>

          {/* Soft Power Pillars */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Global Soft Power — UAE Ranks #10 (4th Consecutive Year)" badge="Brand Finance 2026" className="mb-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {topPillars.map((p, i) => (
                  <motion.div key={p.pillar} variants={itemVariants} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-2xl font-extrabold font-rajdhani text-gold-400">#{p.rank}</p>
                    <p className="text-xs text-platinum-500-400 mt-1 font-rajdhani">{p.pillar}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* US Asymmetric Perception */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GlassPanel title="US Perception Asymmetry" description="82% of UAE citizens view US positively; only 14-19% of Americans view UAE the same way">
                <div className="space-y-4 mt-2">
                  {usAsymData.map(d => (
                    <div key={d.name}>
                      <div className="flex justify-between text-xs font-rajdhani mb-1">
                        <span className="text-platinum-500-300">{d.name}</span>
                        <span className="text-gold-400 font-semibold">{d.value}%</span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${d.value}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: d.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>

              <GlassPanel title="Washington Institute Survey — UAE Citizens" description="N=1,000 adult UAE citizens; margin of error ~3%">
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[
                    { label: 'View US Positively', value: 82, color: positiveColor },
                    { label: 'Trust China', value: 62, color: CHART_COLORS.gold },
                    { label: 'View Russia Positively', value: 73, color: CHART_COLORS.gold },
                  ].map(d => (
                    <div key={d.label} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-xl font-extrabold font-rajdhani" style={{ color: d.color }}>{d.value}%</p>
                      <p className="text-xs text-platinum-500-400 mt-1 font-rajdhani">{d.label}</p>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </motion.div>

          {/* Economic Core */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Economic Foundations" description="GDP, HDI, Corruption Perceptions, and trade metrics" badge="Core Metrics">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                {[
                  { label: 'GDP 2024', value: economicData.gdp[2024], icon: DollarSign, color: CHART_COLORS.emerald },
                  { label: 'HDI Rank', value: `#${economicData.hdi.rank}`, icon: Award, color: CHART_COLORS.gold },
                  { label: 'CPI Rank', value: `#${economicData.corruptionPerceptions.rank}`, icon: Shield, color: CHART_COLORS.teal },
                  { label: 'Happiness', value: `#21`, icon: Smile, color: CHART_COLORS.purple },
                ].map(d => (
                  <motion.div key={d.label} variants={itemVariants} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${d.color}20` }}>
                      <d.icon className="w-4 h-4" style={{ color: d.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-platinum-500-500 font-rajdhani">{d.label}</p>
                      <p className="text-sm font-bold font-rajdhani text-platinum-500-100">{d.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ========== REGIONAL PERCEPTION TAB ========== */}
        <TabsContent value="regional" className="space-y-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Regional Perception Chart */}
            <GlassPanel title="Regional Favorability — UAE Positive Views" badge="Survey Data">
              <BarChart
                data={regionalBarData.map(d => ({ name: d.name, value: d.value }))}
                height={280}
                showValue
                layout="vertical"
              />
            </GlassPanel>

            {/* US Details */}
            <GlassPanel title="United States — Asymmetric Partnership" badge="Critical">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-xs text-platinum-500-500 font-rajdhani">UAE Citizens → US</p>
                    <p className="text-2xl font-extrabold font-rajdhani text-emerald-400">82%</p>
                    <p className="text-xs text-platinum-500-400">positive</p>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                    <p className="text-xs text-platinum-500-500 font-rajdhani">Americans → UAE</p>
                    <p className="text-2xl font-extrabold font-rajdhani text-rose-400">14-19%</p>
                    <p className="text-xs text-platinum-500-400">positive</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {[
                    { icon: Building, text: '3 US military bases in UAE (Al Dhafra, Al Minhad, Fujairah)' },
                    { icon: DollarSign, text: '$23B F-35 & MQ-9B deal (January 2021)' },
                    { icon: Shield, text: 'Major Defence Partner designation (September 2024)' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-platinum-500-300">
                      <item.icon className="w-3.5 h-3.5 mt-0.5 text-gold-400 shrink-0" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>

            {/* China */}
            <GlassPanel title="China — Strategic Neutrality" badge="High Relevance">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Trade', value: '$100B/yr' },
                    { label: 'Positive View', value: '63%' },
                    { label: 'Would Stay Neutral', value: '63%' },
                  ].map(d => (
                    <div key={d.label} className="text-center p-2 rounded-lg bg-white/5">
                      <p className="text-sm font-bold font-rajdhani text-gold-400">{d.value}</p>
                      <p className="text-xs text-platinum-500-500 font-rajdhani">{d.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {['4.3M Indians', '800K Iranians', '400K+ Chinese'].map(d => (
                    <Badge key={d} variant="outline" className="border-cyan-300/30 text-cyan-400 text-xs font-rajdhani">{d}</Badge>
                  ))}
                </div>
              </div>
            </GlassPanel>

            {/* Russia */}
            <GlassPanel title="Russia — Strategic Partnership" badge="High Relevance">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20">
                    <p className="text-xs text-platinum-500-500 font-rajdhani">Trade (2024)</p>
                    <p className="text-xl font-extrabold font-rajdhani text-gold-400">$11.5B</p>
                    <p className="text-xs text-platinum-500-400">vs $4B pre-2021</p>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <p className="text-xs text-platinum-500-500 font-rajdhani">BRICS Member</p>
                    <p className="text-xl font-extrabold font-rajdhani text-purple-400">Since Jan 2024</p>
                    <p className="text-xs text-platinum-500-400">Full member</p>
                  </div>
                </div>
                {[
                  'August 2025: MBZ met Putin at Kremlin',
                  'Mediated Russia-Ukraine prisoner exchange',
                  '$710M Russian anti-tank weapons (2019)',
                ].map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-platinum-500-300">
                    <Flag className="w-3.5 h-3.5 mt-0.5 text-gold-400 shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
            </GlassPanel>

          </motion.div>

          {/* Arab World */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Arab World — Regionally Strained" badge="High Relevance" className="mb-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 space-y-3">
                  <div className="flex items-start gap-2 text-xs text-platinum-500-300">
                    <AlertTriangle className="w-4 h-4 mt-0.5 text-rose-400 shrink-0" />
                    <span>Saudi-UAE rupture documented (ECFR, January 2026) — competition across Yemen, Sudan, AI/technology sectors</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                      <p className="text-xs text-platinum-500-500 font-rajdhani">Abraham Accords Positive</p>
                      <p className="text-2xl font-extrabold font-rajdhani text-rose-400">27%</p>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                      <p className="text-xs text-platinum-500-500 font-rajdhani">Oppose Israel Recognition</p>
                      <p className="text-2xl font-extrabold font-rajdhani text-rose-400">87%</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-platinum-500-500 uppercase tracking-wider font-rajdhani">Arab Opinion Index 2025</p>
                  {[
                    { threat: 'Israel as Greatest Threat', value: '28% nationally' },
                    { threat: 'US as Greatest Threat', value: '10% nationally' },
                    { threat: 'Palestinian Cause Collective', value: '80%' },
                  ].map(d => (
                    <div key={d.threat} className="flex justify-between text-xs p-2 rounded-lg bg-white/5">
                      <span className="text-platinum-500-400 font-rajdhani">{d.threat}</span>
                      <span className="text-gold-400 font-semibold font-rajdhani">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Africa & Latin America */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title="Africa — $100B+ Investment Push" badge="High Relevance">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-xs text-platinum-500-500 font-rajdhani">UAE Investment</p>
                    <p className="text-xl font-extrabold font-rajdhani text-emerald-400">$97-110B</p>
                    <p className="text-xs text-platinum-500-400">2022-2023</p>
                  </div>
                  <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20">
                    <p className="text-xs text-platinum-500-500 font-rajdhani">Sub-Saharan Embassies</p>
                    <p className="text-xl font-extrabold font-rajdhani text-gold-400">19</p>
                    <p className="text-xs text-platinum-500-400">UAE embassies</p>
                  </div>
                </div>
                <p className="text-xs text-platinum-500-400 italic font-rajdhani">TNI characterizes as "sub-imperial power" — investing in ports, airports, infrastructure to extract resources</p>
              </div>
            </GlassPanel>

            <GlassPanel title="Latin America — Growing BRICS Overlap" badge="Medium Relevance">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Total Trade', value: '$9B' },
                    { label: 'BRICS Member', value: 'Since 2024' },
                    { label: 'DP World Brazil', value: '$500M' },
                  ].map(d => (
                    <div key={d.label} className="text-center p-2 rounded-lg bg-white/5">
                      <p className="text-sm font-bold font-rajdhani text-gold-400">{d.value}</p>
                      <p className="text-xs text-platinum-500-500 font-rajdhani">{d.label}</p>
                    </div>
                  ))}
                </div>
                <Badge variant="outline" className="border-cyan-300/30 text-cyan-400 text-xs font-rajdhani">CEPAs: Chile, Costa Rica, Colombia (2024)</Badge>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ========== DIMENSION ANALYSIS TAB ========== */}
        <TabsContent value="dimensions" className="space-y-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Safety */}
            <GlassPanel title="Safety Perception" badge="VERY HIGH" className="border-emerald-500/20">
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Numbeo Rank 2026', value: '#1', sub: 'Safest country', color: CHART_COLORS.emerald },
                    { label: 'Numbeo Score', value: '86.0', sub: '/100', color: CHART_COLORS.emerald },
                    { label: 'Tourism Safety', value: '94.8', sub: '/100', color: CHART_COLORS.teal },
                  ].map(d => (
                    <div key={d.label} className="text-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <p className="text-xl font-extrabold font-rajdhani" style={{ color: d.color }}>{d.value}</p>
                      <p className="text-xs text-platinum-500-400 font-rajdhani">{d.sub}</p>
                      <p className="text-xs text-platinum-500-500 font-rajdhani mt-0.5">{d.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-platinum-500-400 font-rajdhani">90%+ of Abu Dhabi residents report feeling safe in surveys since 2015. OSAC: LOW threat for crime.</p>
              </div>
            </GlassPanel>

            {/* Human Rights */}
            <GlassPanel title="Human Rights" badge="VERY LOW" className="border-rose-500/20">
              <div className="space-y-3">
                {freedomScores.map(d => (
                  <div key={d.name}>
                    <div className="flex justify-between text-xs font-rajdhani mb-1">
                      <span className="text-platinum-500-300">{d.name}</span>
                      <span className="text-rose-400 font-semibold">{d.score}/{d.max}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-rose-500" style={{ width: `${(d.score / d.max) * 100}%` }} />
                    </div>
                  </div>
                ))}
                <div className="pt-2 border-t border-white/10 space-y-1">
                  {['84 defendants mass trial (Dec 2023–Jul 2024)', 'Ahmed Mansoor: 15-year sentence, isolated since 2017', 'Freedom House: 18/100 — "Not Free"'].map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-rose-300">
                      <XCircle className="w-3 h-3 mt-0.5 shrink-0" />{d}
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>

            {/* Democracy */}
            <GlassPanel title="Democracy & Political System" badge="VERY LOW" className="border-rose-500/20">
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                  <p className="text-xs text-platinum-500-500 font-rajdhani">BTI Political Transformation Score</p>
                  <p className="text-2xl font-extrabold font-rajdhani text-rose-400">4.0 / 10</p>
                  <p className="text-xs text-platinum-500-400 font-rajdhani">Rank 85/137 globally</p>
                </div>
                <div className="space-y-1.5">
                  {[
                    'Federal absolute monarchy — no elections at executive level',
                    'Political parties prohibited',
                    '"No progress is expected on either front" — BTI 2026',
                    'Press Freedom: 160th of 180 countries',
                  ].map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-platinum-500-300">
                      <Scale className="w-3.5 h-3.5 mt-0.5 text-rose-400 shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>

            {/* Sportswashing */}
            <GlassPanel title="Sportswashing — Active Strategy" badge="Documented" className="border-orange-500/20">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['Manchester City', 'NBA Abu Dhabi', 'UFC Hub', 'Emirates/Arsenal', 'UAE Team Emirates'].map(d => (
                    <Badge key={d} variant="outline" className="border-gold-300/30 text-gold-400 text-xs font-rajdhani">{d}</Badge>
                  ))}
                </div>
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <p className="text-xs text-platinum-500-500 font-rajdhani mb-1">HRW Quote</p>
                  <p className="text-xs text-orange-300 italic font-rajdhani">"While NBA entertains spectators in Abu Dhabi, people will be dying in Sudan, where UAE credibly accused of providing support to abusive parties"</p>
                </div>
              </div>
            </GlassPanel>

            {/* Media Censorship */}
            <GlassPanel title="Media Censorship" badge="VERY LOW" className="border-rose-500/20">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
                    <p className="text-2xl font-extrabold font-rajdhani text-rose-400">883</p>
                    <p className="text-xs text-platinum-500-400 font-rajdhani">Sites blocked</p>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
                    <p className="text-2xl font-extrabold font-rajdhani text-rose-400">28/100</p>
                    <p className="text-xs text-platinum-500-400 font-rajdhani">Internet Freedom</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-platinum-500-500 font-rajdhani uppercase tracking-wider">Blocked VoIP Services</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['WhatsApp', 'Facebook', 'Viber', 'FaceTime', 'Discord', 'Skype'].map(d => (
                      <Badge key={d} variant="destructive" className="text-xs font-rajdhani bg-rose-500/20 text-rose-300 border-rose-500/30">{d}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Technology / AI */}
            <GlassPanel title="Technology & AI Hub" badge="HIGH" className="border-cyan-500/20">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'AI Target 2031', value: '$91B', color: CHART_COLORS.teal },
                    { label: 'MGX Target', value: '$100B', color: CHART_COLORS.gold },
                    { label: 'Microsoft-G42', value: '$1.5B', color: CHART_COLORS.emerald },
                    { label: 'Stargate Project', value: '$500B', color: CHART_COLORS.purple },
                  ].map(d => (
                    <div key={d.label} className="p-2 rounded-lg bg-white/5 border border-white/10 text-center">
                      <p className="text-base font-extrabold font-rajdhani" style={{ color: d.color }}>{d.value}</p>
                      <p className="text-xs text-platinum-500-500 font-rajdhani">{d.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-platinum-500-400 font-rajdhani">UAE aims for 20% of non-oil GDP from AI by 2031. Microsoft deal signals US technology alignment.</p>
              </div>
            </GlassPanel>

          </motion.div>

          {/* Tourism & Environment */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title="Tourism — Major Economic Driver" badge="HIGH">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'GDP Contribution', value: '11.7%', color: CHART_COLORS.gold },
                    { label: 'Dubai Brand Rank', value: '#5 globally', color: CHART_COLORS.emerald },
                    { label: 'Jobs Created', value: '809,000+', color: CHART_COLORS.teal },
                    { label: 'Intl Visitors', value: 'AED 175B+', color: CHART_COLORS.purple },
                  ].map(d => (
                    <div key={d.label} className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-sm font-bold font-rajdhani" style={{ color: d.color }}>{d.value}</p>
                      <p className="text-xs text-platinum-500-500 font-rajdhani">{d.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>

            <GlassPanel title="Environment — Greenwashing Concerns" badge="Growing Scrutiny" className="border-orange-500/20">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'COP28 Host (Sultan Al Jaber = ADNOC CEO)', icon: AlertTriangle },
                    { label: 'ADNOC expanding to 5M bbl/day by 2030', icon: AlertCircle },
                    { label: '50% clean energy target by 2050', icon: CheckCircle },
                  ].map((d, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-orange-300">
                      <d.icon className="w-3 h-3 shrink-0" />
                      {d.label}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-platinum-500-400 font-rajdhani italic">"Accusations fundamentally miss the mark" — Gulf IF. But ADNOC expanding production significantly.</p>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ========== SCORECARD TAB ========== */}
        <TabsContent value="scorecard" className="space-y-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Radar Chart */}
            <GlassPanel title="Perception Radar — All Dimensions" badge="Multi-Source" className="lg:col-span-2">
              <RadarChart
                data={radarData.map(d => ({ name: d.dimension, value: d.score, color: d.color }))}
                height={360}
              />
            </GlassPanel>

            {/* Pie */}
            <GlassPanel title="Scorecard Breakdown" badge="Perception Scorecard">
              <PieChart
                data={scorecardPieData}
                height={240}
                showLabel
                innerRadius={60}
              />
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-rajdhani">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: positiveColor }} />
                  <span className="text-emerald-300">Positive Dimensions ({positiveCount})</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-rajdhani">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: negativeColor }} />
                  <span className="text-rose-300">Negative Dimensions ({negativeCount})</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-rajdhani">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: neutralColor }} />
                  <span className="text-platinum-500-300">Mixed Dimensions ({mixedCount})</span>
                </div>
              </div>
            </GlassPanel>

          </motion.div>

          {/* Full Scorecard Table */}
          <motion.div variants={itemVariants}>
            <GlassPanel title="Full Perception Scorecard — All 27 Dimensions" badge="Comprehensive">
              <div className="space-y-2">
                {perceptionScorecard.map((row, i) => {
                  const isPositive = row.perception === 'VERY HIGH' || row.perception === 'HIGH'
                  const isNegative = row.perception === 'VERY LOW' || row.perception === 'LOW'
                  const bgClass = isPositive ? 'bg-emerald-500/5 border-emerald-500/10' : isNegative ? 'bg-rose-500/5 border-rose-500/10' : 'bg-platinum-500/5 border-platinum-500/10'
                  const textClass = isPositive ? 'text-emerald-300' : isNegative ? 'text-rose-300' : 'text-platinum-500-300'
                  return (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${bgClass}`}>
                      <div className="flex items-center gap-3">
                        {isPositive ? <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /> : isNegative ? <XCircle className="w-4 h-4 text-rose-400 shrink-0" /> : <MinusCircle className="w-4 h-4 text-platinum-500-400 shrink-0" />}
                        <div>
                          <p className="text-sm font-rajdhani font-semibold text-platinum-500-100">{row.dimension}</p>
                          <p className="text-xs text-platinum-500-500 font-rajdhani">{row.details}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <Badge variant="outline" className={`font-rajdhani text-xs border-current ${textClass}`}>{row.perception}</Badge>
                        <p className="text-xs text-platinum-500-500 font-rajdhani mt-1">{row.score}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ========== KEY FINDINGS TAB ========== */}
        <TabsContent value="findings" className="space-y-6">
          <motion.div
            variants={staggerContainer} initial="hidden" animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {keyFindings.map((finding, i) => (
              <motion.div key={finding.id} variants={itemVariants}>
                <GlassPanel
                  title={finding.title}
                  className="h-full"
                  badge={`Finding #${finding.id}`}
                  hover
                >
                  <p className="text-sm text-platinum-500-300 font-rajdhani leading-relaxed">{finding.finding}</p>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <Badge variant="outline" className="border-cyan-300/30 text-cyan-400 text-xs font-rajdhani">
                      <MapPin className="w-3 h-3 mr-1" />{finding.uaeRelevance}
                    </Badge>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </motion.div>

          {/* Strategic Recommendations */}
          <motion.div variants={itemVariants}>
            <GlassPanel title="Strategic Recommendations" badge="Strategic Guidance">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-platinum-500-500 uppercase tracking-wider font-rajdhani mb-2">Opportunities</p>
                  <ul className="space-y-2">
                    {ov.strategic.filter((_, i) => i < 2).map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-emerald-300 font-rajdhani">
                        <TrendingUp className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-platinum-500-500 uppercase tracking-wider font-rajdhani mb-2">Risk Mitigation</p>
                  <ul className="space-y-2">
                    {ov.strategic.filter((_, i) => i >= 2).map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-rose-300 font-rajdhani">
                        <TrendingDown className="w-4 h-4 mt-0.5 shrink-0 text-rose-400" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Source Registry */}
          <motion.div variants={itemVariants}>
            <GlassPanel title="Source Registry" description={`${sourceRegistry.length} sources across all query dimensions`} badge="Verification">
              <ScrollArea className="h-64">
                <div className="space-y-2">
                  {sourceRegistry.map(s => (
                    <div key={s.id} className="flex items-start justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-start gap-2">
                        <Badge
                          variant="outline"
                          className={`text-xs font-rajdhani shrink-0 ${
                            s.credibility === 'HIGH' ? 'border-emerald-300/30 text-emerald-400' :
                            s.credibility === 'MEDIUM' ? 'border-gold-300/30 text-gold-400' :
                            'border-rose-300/30 text-rose-400'
                          }`}
                        >
                          {s.credibility}
                        </Badge>
                        <p className="text-xs text-platinum-500-300 font-rajdhani">{s.source}</p>
                      </div>
                      <span className="text-xs text-platinum-500-500 font-rajdhani shrink-0 ml-2">{s.date || '—'}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
