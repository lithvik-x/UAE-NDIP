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
  Brain,
  Home,
  Wedding,
  Stethoscope,
  Coins,
  Wallet,
  HeartPulse,
  UsersIcon,
} from 'lucide-react'
import {
  domesticPerceptionData,
  executionMetadata,
  emiratiSentiment,
  expatSentiment,
  officialRankings,
  top10KeyTakeaways,
  emiratiYouthSurveyData,
  governmentConfidenceData,
  emiratisationData,
  wagesData,
  costOfLivingData,
  marriageDivorceData,
  healthcareData,
  expatMentalHealthData,
  expatFinancialData,
  sentimentAnalysis,
  nationalIdentityStrategy,
  summaryStatistics,
  dashboardMetrics,
} from '@/lib/data/perception/domestic-perception-data'

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

export default function DomesticPerceptionPage() {
  const exec = executionMetadata
  const dm = dashboardMetrics
  const es = emiratiSentiment
  const ex = expatSentiment

  // Sentiment distribution for pie chart
  const sentimentPieData = [
    { name: 'Emirati Positive', value: 85, color: positiveColor },
    { name: 'Expat Positive', value: 35, color: CHART_COLORS.gold },
    { name: 'Negative', value: 30, color: negativeColor },
    { name: 'Neutral', value: 20, color: neutralColor },
  ]

  // Youth optimism data for bar chart
  const youthOptimismData = [
    { metric: 'Best days ahead', value: 91, color: positiveColor },
    { metric: 'Confident goals', value: 91, color: positiveColor },
    { metric: 'Plan to return', value: 90, color: positiveColor },
    { metric: 'Satisfied education', value: 87, color: positiveColor },
    { metric: 'Tech positive', value: 81, color: positiveColor },
    { metric: 'Good mental health', value: 75, color: CHART_COLORS.teal },
  ]

  // Government confidence data
  const govConfidenceData = [
    { metric: 'Economic stability', value: 100, color: positiveColor },
    { metric: 'Address unemployment', value: 98, color: positiveColor },
    { metric: 'Manage cost of living', value: 98, color: positiveColor },
    { metric: 'Address corruption', value: 97, color: positiveColor },
    { metric: 'Climate policies', value: 97, color: positiveColor },
  ]

  // Cost breakdown for expats
  const costBreakdownData = [
    { label: 'Housing', value: 50, color: CHART_COLORS.rose },
    { label: 'Transport', value: 12, color: CHART_COLORS.gold },
    { label: 'Food', value: 15, color: CHART_COLORS.emerald },
    { label: 'Other', value: 23, color: CHART_COLORS.platinum },
  ]

  // Mental health stats
  const mentalHealthData = [
    { label: 'Depression undiagnosed', value: 74, color: CHART_COLORS.rose },
    { label: 'Mental health disorder', value: 57, color: CHART_COLORS.orange },
    { label: 'Expats in UAE', value: 88, color: CHART_COLORS.cyan },
  ]

  // Happiness rankings
  const happinessRankingsData = [
    { country: 'UAE', rank: 21, color: positiveColor },
    { country: 'Saudi', rank: 22, color: CHART_COLORS.gold },
    { country: 'Kuwait', rank: 40, color: CHART_COLORS.platinum },
    { country: 'Bahrain', rank: 55, color: CHART_COLORS.platinum },
  ]

  return (
    <div className="space-y-8 p-8 min-h-screen">
      {/* Header */}
      <motion.div
        initial="hidden" animate="visible" variants={fadeInUp}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2 font-rajdhani text-xs tracking-widest uppercase">Domestic Perception</Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">UAE Domestic Perception</h1>
          <p className="mt-2 text-platinum-400 text-sm max-w-2xl">
            Comprehensive analysis of how UAE residents — nationals and expats — perceive their lives,
            government, and future. Covers <span className="text-gold-400 font-semibold">{exec.queriesExecuted} query dimensions</span>,{' '}
            <span className="text-gold-400 font-semibold">{exec.pagesFetched}+ sources</span>.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge variant="outline" className="border-gold-300/50 text-gold-400 font-rajdhani">
            <Flag className="w-3 h-3 mr-1" /> {exec.dateExecuted}
          </Badge>
          <Badge variant="outline" className="border-emerald-300/50 text-emerald-400 font-rajdhani">
            <Star className="w-3 h-3 mr-1" /> Happiness #{officialRankings[1]?.value}
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
            title="Government Trust"
            value="#1"
            unit="globally"
            gradient="gold"
            icon={<Shield className="w-5 h-5" />}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Happiness Rank"
            value="#21"
            unit="world happiness"
            previousValue={24}
            trend="up"
            gradient="emerald"
            icon={<Smile className="w-5 h-5" />}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Youth Optimism"
            value="91%"
            unit="believe best days ahead"
            gradient="cyan"
            icon={<TrendingUp className="w-5 h-5" />}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Sources Fetched"
            value={exec.pagesFetched}
            unit="pages analyzed"
            gradient="purple"
            icon={<BookOpen className="w-5 h-5" />}
          />
        </motion.div>
      </motion.div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-glass-medium border border-white/10">
          <TabsTrigger value="overview" className="font-rajdhani text-sm data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400">Overview</TabsTrigger>
          <TabsTrigger value="emirati" className="font-rajdhani text-sm data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400">Emirati Sentiment</TabsTrigger>
          <TabsTrigger value="expat" className="font-rajdhani text-sm data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400">Expat Sentiment</TabsTrigger>
          <TabsTrigger value="financial" className="font-rajdhani text-sm data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400">Financial</TabsTrigger>
          <TabsTrigger value="mental" className="font-rajdhani text-sm data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400">Mental Health</TabsTrigger>
          <TabsTrigger value="takeaways" className="font-rajdhani text-sm data-[state=active]:bg-gold-500/20 data-[state=active]:text-gold-400">Key Takeaways</TabsTrigger>
        </TabsList>

        {/* ========== OVERVIEW TAB ========== */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Sentiment Summary */}
            <GlassPanel title="Resident Sentiment Overview" description="Emirati vs Expat perception" badge="Dashboard">
              <PieChart
                data={sentimentPieData}
                height={220}
                innerRadius={60}
              />
            </GlassPanel>

            {/* Official Rankings */}
            <GlassPanel title="UAE Official Rankings" badge="2026 Data">
              <div className="space-y-3">
                {officialRankings.slice(0, 4).map((r, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <p className="text-xs text-platinum-500 font-rajdhani uppercase tracking-wider">{r.metric}</p>
                      <p className="text-sm font-bold font-rajdhani text-platinum-100">{r.value}</p>
                    </div>
                    <Badge variant="outline" className="border-emerald-300/30 text-emerald-400 font-rajdhani text-xs">
                      {r.rank}
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* National Identity Strategy */}
            <GlassPanel title="National Identity Strategy" description="Announced Nov 2025" badge="Strategic">
              <div className="space-y-2">
                <p className="text-xs text-platinum-400 font-rajdhani">Three Pillars:</p>
                {nationalIdentityStrategy.threePillars.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-platinum-300">
                    <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-gold-400" />
                    {p}
                  </div>
                ))}
                <div className="pt-2 mt-2 border-t border-white/10">
                  <p className="text-xs text-platinum-500 font-rajdhani uppercase tracking-wider mb-1">Core Values</p>
                  <div className="flex flex-wrap gap-1">
                    {nationalIdentityStrategy.fiveCoreValues.slice(0, 3).map((v, i) => (
                      <Badge key={i} variant="outline" className="border-cyan-300/30 text-cyan-400 text-xs font-rajdhani">{v}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>

          </motion.div>

          {/* Regional Happiness Rankings */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="World Happiness Rankings — Arab World" badge="World Happiness Report 2026">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { country: 'UAE', rank: 21, score: '6.821', color: CHART_COLORS.gold },
                  { country: 'Saudi Arabia', rank: 22, color: CHART_COLORS.platinum },
                  { country: 'Kuwait', rank: 40, color: CHART_COLORS.platinum },
                  { country: 'Bahrain', rank: 55, color: CHART_COLORS.platinum },
                  { country: 'Oman', rank: 58, color: CHART_COLORS.platinum },
                  { country: 'Egypt', rank: 139, color: CHART_COLORS.rose },
                  { country: 'Jordan', rank: 119, color: CHART_COLORS.orange },
                  { country: 'Lebanon', rank: 141, color: CHART_COLORS.rose },
                ].map((d, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-2xl font-extrabold font-rajdhani" style={{ color: d.color }}>#{d.rank}</p>
                    <p className="text-xs text-platinum-400 font-rajdhani mt-1">{d.country}</p>
                    {d.score && <p className="text-xs text-platinum-500 font-rajdhani">{d.score}</p>}
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Emirati vs Expat Summary */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassPanel title="Emirati Sentiment" badge="Strongly Positive" className="border-emerald-500/20">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <p className="text-2xl font-extrabold font-rajdhani text-emerald-400">91%</p>
                    <p className="text-xs text-platinum-400 font-rajdhani">Youth optimistic</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <p className="text-2xl font-extrabold font-rajdhani text-emerald-400">80/100</p>
                    <p className="text-xs text-platinum-400 font-rajdhani">Trust score</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {es.concerns && [
                    { label: 'Housing affordability', value: `${es.concerns.housingAffordability}` },
                    { label: 'High dowries obstacle', value: `${es.concerns.highDowries}%` },
                    { label: 'Considering public sector', value: `${es.concerns.consideringPublicSectorMove}%` },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-xs p-2 rounded-lg bg-white/5">
                      <span className="text-platinum-400 font-rajdhani">{item.label}</span>
                      <span className="text-gold-400 font-semibold font-rajdhani">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>

            <GlassPanel title="Expat Sentiment" badge="Mixed to Negative" className="border-rose-500/20">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
                    <p className="text-2xl font-extrabold font-rajdhani text-rose-400">50%</p>
                    <p className="text-xs text-platinum-400 font-rajdhani">Income on housing</p>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
                    <p className="text-2xl font-extrabold font-rajdhani text-rose-400">74%</p>
                    <p className="text-xs text-platinum-400 font-rajdhani">Depression undiagnosed</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {ex.negativeFactors && ex.negativeFactors.slice(0, 3).map((factor, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-rose-300">
                      <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" />
                      {factor.substring(0, 60)}...
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ========== EMIRATI SENTIMENT TAB ========== */}
        <TabsContent value="emirati" className="space-y-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Youth Optimism */}
            <GlassPanel title="MBZ Majlis Youth Survey — Key Metrics" badge="2,974 Emirati Students">
              <BarChart
                data={youthOptimismData.map(d => ({ name: d.metric, value: d.value }))}
                xAxisKey="name"
                bars={[{ dataKey: 'value', name: 'Percent', color: CHART_COLORS.emerald }]}
                height={280}
                showGrid={true}
              />
            </GlassPanel>

            {/* Government Confidence */}
            <GlassPanel title="Government Confidence — Asda'a BCW Survey" badge="3,600 Arab Youth">
              <BarChart
                data={govConfidenceData.map(d => ({ name: d.metric, value: d.value }))}
                xAxisKey="name"
                bars={[{ dataKey: 'value', name: 'Percent', color: CHART_COLORS.gold }]}
                height={280}
                showGrid={true}
              />
            </GlassPanel>

          </motion.div>

          {/* Emirati Youth Survey Full Data */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Emirati Youth Survey — Full Data" badge="MBZ Majlis for Future Generations">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {emiratiYouthSurveyData.map((d, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-2xl font-extrabold font-rajdhani text-gold-400">{d.value}%</p>
                    <p className="text-xs text-platinum-400 font-rajdhani mt-1">{d.metric}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Housing Project */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Dh5.4 Billion Housing Project for Newly-Wed Emiratis" badge="Government Initiative">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <p className="text-xs text-platinum-500 font-rajdhani">Project Size</p>
                      <p className="text-xl font-extrabold font-rajdhani text-emerald-400">Dh5.4B</p>
                      <p className="text-xs text-platinum-400">3,000 houses</p>
                    </div>
                    <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20">
                      <p className="text-xs text-platinum-500 font-rajdhani">First Year Weddings</p>
                      <p className="text-xl font-extrabold font-rajdhani text-gold-400">344</p>
                      <p className="text-xs text-platinum-400">28.3% of Emirati weddings</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {es.housing?.programBenefits?.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-platinum-300">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-emerald-400" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-platinum-500 uppercase tracking-wider font-rajdhani">Program Benefits</p>
                  {[
                    '10-day paid marriage leave',
                    'Remote Friday work for mothers',
                    'Housing loan Dh3,333/month',
                    'Free wedding halls',
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-platinum-300">
                      <Home className="w-3 h-3 mt-0.5 shrink-0 text-gold-400" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Marriage & Divorce */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Marriage & Divorce Statistics" badge="6,600 Emiratis Surveyed">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p className="text-xs text-platinum-500 uppercase tracking-wider font-rajdhani">Marriage Obstacles</p>
                  {marriageDivorceData.slice(0, 4).map((d, i) => (
                    <div key={i} className="flex justify-between p-2 rounded-lg bg-white/5">
                      <span className="text-xs text-platinum-400 font-rajdhani">{d.metric}</span>
                      <span className="text-xs text-gold-400 font-semibold font-rajdhani">{d.value}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-platinum-500 uppercase tracking-wider font-rajdhani">Divorce Rates</p>
                  {[
                    { label: 'Emirati-Emirati', rate: '25%' },
                    { label: 'Emirati Men-Expat Women', rate: '37%' },
                    { label: 'Emirati Women-Non-Emirati Men', rate: '27%' },
                    { label: 'Overall Divorce Rate', rate: '27%' },
                  ].map((d, i) => (
                    <div key={i} className="flex justify-between p-2 rounded-lg bg-rose-500/5 border border-rose-500/10">
                      <span className="text-xs text-platinum-400 font-rajdhani">{d.label}</span>
                      <span className="text-xs text-rose-400 font-semibold font-rajdhani">{d.rate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Healthcare Efficiency */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Healthcare Efficiency — Emirates Health Services" badge="Government Metrics">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Wait Time Reduction', value: '60%', color: CHART_COLORS.emerald },
                  { label: 'Procedures Eliminated', value: '220', color: CHART_COLORS.gold },
                  { label: 'Workflow Steps Saved', value: '9M', color: CHART_COLORS.teal },
                  { label: 'Minutes Saved', value: '80M', color: CHART_COLORS.cyan },
                ].map((d, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xl font-extrabold font-rajdhani" style={{ color: d.color }}>{d.value}</p>
                    <p className="text-xs text-platinum-500 font-rajdhani mt-1">{d.label}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Leadership Quotes */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Business Leaders on UAE Leadership" badge="Regional Support">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {es.leadershipSupport?.map((leader, i) => (
                  <div key={i} className="p-3 rounded-xl bg-gold-500/5 border border-gold-500/10">
                    <p className="text-xs text-gold-300 italic font-rajdhani">"{leader.quote}"</p>
                    <p className="text-xs text-platinum-500 font-rajdhani mt-2">— {leader.name}, {leader.org}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ========== EXPAT SENTIMENT TAB ========== */}
        <TabsContent value="expat" className="space-y-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Positive Factors */}
            <GlassPanel title="Expat Positive Factors" badge="UAE Advantages" className="border-emerald-500/20">
              <div className="space-y-2">
                {ex.positiveFactors?.map((factor, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-emerald-300">
                    <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-emerald-400" />
                    {factor}
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Negative Factors */}
            <GlassPanel title="Expat Negative Factors" badge="Challenges" className="border-rose-500/20">
              <div className="space-y-2">
                {ex.negativeFactors?.slice(0, 7).map((factor, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-rose-300">
                    <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0 text-rose-400" />
                    {factor}
                  </div>
                ))}
              </div>
            </GlassPanel>

          </motion.div>

          {/* Why Expats Leave */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Top 10 Reasons Expats Leave UAE" badge="Expat Departure">
              <div className="space-y-2">
                {ex.whyExpatsLeave?.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold font-rajdhani text-rose-400">{item.rank}</span>
                    </div>
                    <p className="text-xs text-platinum-300 font-rajdhani flex-1">{item.reason}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Expat Statistics */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Expat Community Statistics" badge="Community Data">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Expats in UAE', value: '88%', color: CHART_COLORS.cyan },
                  { label: 'Expats Meetup Dubai', value: '35,000', color: CHART_COLORS.gold },
                  { label: 'Expats Meetup Abu Dhabi', value: '10,000', color: CHART_COLORS.teal },
                  { label: 'Social Isolation Risk', value: '~15 cigs', color: CHART_COLORS.rose },
                ].map((d, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xl font-extrabold font-rajdhani" style={{ color: d.color }}>{d.value}</p>
                    <p className="text-xs text-platinum-500 font-rajdhani mt-1">{d.label}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ========== FINANCIAL TAB ========== */}
        <TabsContent value="financial" className="space-y-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Cost Breakdown */}
            <GlassPanel title="Expat Cost Breakdown — Dubai Household" badge="Financial Data">
              <PieChart
                data={costBreakdownData}
                height={220}
                innerRadius={60}
              />
              <p className="text-xs text-platinum-500 font-rajdhani mt-2 text-center">
                Average Dubai household spends ~50% of income on housing
              </p>
            </GlassPanel>

            {/* Savings Targets */}
            <GlassPanel title="Recommended Savings Targets by Salary" badge="Financial Planning">
              <div className="space-y-2">
                {ex.costOfLiving && Object.entries(ex.costOfLiving).length > 0 && (
                  <>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-white/5 text-center">
                        <p className="text-lg font-bold font-rajdhani text-gold-400">Dh{ex.costOfLiving.singlePersonMinimum?.toLocaleString()}</p>
                        <p className="text-xs text-platinum-500 font-rajdhani">Single minimum/month</p>
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 text-center">
                        <p className="text-lg font-bold font-rajdhani text-gold-400">Dh{ex.costOfLiving.familyOfFourExcludingRent?.toLocaleString()}</p>
                        <p className="text-xs text-platinum-500 font-rajdhani">Family of 4 (excl rent)</p>
                      </div>
                    </div>
                  </>
                )}
                {ex.savingsTargets?.slice(0, 4).map((s, i) => (
                  <div key={i} className="flex justify-between p-2 rounded-lg bg-white/5">
                    <span className="text-xs text-platinum-400 font-rajdhani">Dh{s.salaryRange}</span>
                    <span className="text-xs text-emerald-400 font-rajdhani">Save: {s.target.toLocaleString()}/mo</span>
                  </div>
                ))}
              </div>
            </GlassPanel>

          </motion.div>

          {/* Wages Data */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Wages & Salary Data" badge="MoHRE 2026">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {wagesData.slice(0, 8).map((d, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-platinum-500 font-rajdhani uppercase tracking-wider">{d.metric}</p>
                    <p className="text-sm font-bold font-rajdhani text-gold-400 mt-1">{d.value}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Emiratisation Stats */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Emiratisation Progress" badge="Private Sector">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {emiratisationData.slice(0, 6).map((d, i) => (
                  <div key={i} className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-xs text-platinum-500 font-rajdhani uppercase tracking-wider">{d.metric}</p>
                    <p className="text-lg font-bold font-rajdhani text-emerald-400 mt-1">{d.value}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Rent Costs */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Rent Costs by Property Type" badge="Dubai Market">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { type: 'Shared Room', cost: 'Dh700/mo' },
                  { type: 'Studio (Metro)', cost: 'Dh35-70k/yr' },
                  { type: 'Average Studio', cost: 'Dh4,000/mo' },
                  { type: '1BR Dubai', cost: 'Dh6,250-10k/mo' },
                  { type: '2BR Dubai', cost: 'Dh10,000/mo' },
                  { type: '2BR Ajman', cost: 'Dh2,000/mo' },
                ].map((d, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-sm font-bold font-rajdhani text-cyan-400">{d.cost}</p>
                    <p className="text-xs text-platinum-500 font-rajdhani mt-1">{d.type}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ========== MENTAL HEALTH TAB ========== */}
        <TabsContent value="mental" className="space-y-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Mental Health Stats */}
            <GlassPanel title="Mental Health Crisis" badge="Critical Concern" className="border-rose-500/20">
              <BarChart
                data={mentalHealthData.map(d => ({ name: d.label, value: d.value }))}
                xAxisKey="name"
                bars={[{ dataKey: 'value', name: 'Percent', color: CHART_COLORS.rose }]}
                height={240}
                showGrid={true}
              />
            </GlassPanel>

            {/* Health Consequences */}
            <GlassPanel title="Health Consequences of Isolation" badge="Medical Research">
              <div className="space-y-2">
                {[
                  'Stress, anxiety and depression',
                  'Muscle pain, headaches, tension',
                  'Gastric problems',
                  'Elevated blood pressure',
                  'Weakened immune system',
                  'Insomnia and low energy',
                  'Social anxiety disorder',
                  'Comfort eating',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-rose-300">
                    <AlertCircle className="w-3 h-3 mt-0.5 shrink-0 text-rose-400" />
                    {item}
                  </div>
                ))}
              </div>
            </GlassPanel>

          </motion.div>

          {/* Contributing Factors */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Contributing Factors to Mental Health Challenges" badge="Expert Analysis">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                  <p className="text-xs text-rose-400 font-rajdhani uppercase tracking-wider mb-2">Work</p>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-300">Long working hours (10-12 hrs)</p>
                    <p className="text-xs text-platinum-300">Job insecurity</p>
                    <p className="text-xs text-platinum-300">Financial pressure</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <p className="text-xs text-orange-400 font-rajdhani uppercase tracking-wider mb-2">Social</p>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-300">Separation from family</p>
                    <p className="text-xs text-platinum-300">Transient population</p>
                    <p className="text-xs text-platinum-300">Difficult to make friends</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20">
                  <p className="text-xs text-gold-400 font-rajdhani uppercase tracking-wider mb-2">External</p>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-300">Summer heat (40C+)</p>
                    <p className="text-xs text-platinum-300">Regional tensions</p>
                    <p className="text-xs text-platinum-300">No citizenship path</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Expat Mental Health Data */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Expat Mental Health Data" badge="Research Findings">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {expatMentalHealthData.map((d, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xl font-extrabold font-rajdhani text-rose-400">{d.value}</p>
                    <p className="text-xs text-platinum-500 font-rajdhani mt-1">{d.metric}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Expert Quotes */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassPanel title="Expert Analysis on Expat Isolation" badge="Medical Professionals">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/10">
                  <p className="text-xs text-rose-300 italic font-rajdhani">"While the Dubai expat life is seen as an envy for many, loneliness or a feeling of being disconnected is a common feeling for a lot of people who move to the UAE."</p>
                  <p className="text-xs text-platinum-500 font-rajdhani mt-2">— Dr. Mohammad Yousef, Specialist Psychiatrist</p>
                </div>
                <div className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/10">
                  <p className="text-xs text-rose-300 italic font-rajdhani">"In the UAE, it can be exacerbated for some expats as they are additionally disconnected from traditional support networks."</p>
                  <p className="text-xs text-platinum-500 font-rajdhani mt-2">— Dr. Justin Thomas, Zayed University</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ========== KEY TAKEAWAYS TAB ========== */}
        <TabsContent value="takeaways" className="space-y-6">
          <motion.div
            variants={staggerContainer} initial="hidden" animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {top10KeyTakeaways.map((takeaway, i) => (
              <motion.div key={i} variants={itemVariants}>
                <GlassPanel
                  title={takeaway.title}
                  className="h-full"
                  badge={`#${takeaway.rank}`}
                >
                  <p className="text-sm text-platinum-300 font-rajdhani leading-relaxed">{takeaway.detail}</p>
                </GlassPanel>
              </motion.div>
            ))}
          </motion.div>

          {/* Source Registry */}
          <motion.div variants={itemVariants}>
            <GlassPanel title="Source Quality Matrix" badge="Data Verification">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { type: 'Official Government', qty: 12, reliability: 'Very High' },
                  { type: 'Academic/Research', qty: 4, reliability: 'Very High' },
                  { type: 'Major News Media', qty: 18, reliability: 'High' },
                  { type: 'Expert Interviews', qty: 8, reliability: 'High' },
                  { type: 'Personal Accounts', qty: 6, reliability: 'Medium' },
                  { type: 'Social Media', qty: 4, reliability: 'Low-Medium' },
                ].map((d, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs text-platinum-400 font-rajdhani">{d.type}</p>
                      <Badge
                        variant="outline"
                        className={`text-xs font-rajdhani ${
                          d.reliability === 'Very High' ? 'border-emerald-300/30 text-emerald-400' :
                          d.reliability === 'High' ? 'border-gold-300/30 text-gold-400' :
                          'border-rose-300/30 text-rose-400'
                        }`}
                      >
                        {d.reliability}
                      </Badge>
                    </div>
                    <p className="text-lg font-bold font-rajdhani text-platinum-100">{d.qty} sources</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Notes */}
          <motion.div variants={itemVariants}>
            <GlassPanel title="Research Notes & Limitations" badge="Methodology">
              <div className="space-y-2">
                {[
                  'Reddit.com returned 403 for several pages — expat forum sentiment data may be incomplete',
                  'Some academic PDF sources were referenced but not all could be fetched',
                  'Iranian visa revocation (March-April 2026) represents significant recent development',
                  'Regional tensions (US-Israel-Iran) creating new anxiety among expats',
                  '2026 Edelman Trust Barometer and World Happiness Report are most current official data',
                ].map((note, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-platinum-400">
                    <AlertCircle className="w-3 h-3 mt-0.5 shrink-0 text-gold-400" />
                    {note}
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
