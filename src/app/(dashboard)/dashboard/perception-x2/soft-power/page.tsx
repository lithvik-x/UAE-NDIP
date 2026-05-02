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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  TrendingUp,
  Award,
  Heart,
  GraduationCap,
  Building,
  Users,
  Zap,
  Star,
  Shield,
  Trophy,
  Monitor,
  Newspaper,
  Flag,
  Droplet,
  Plane,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Calendar,
  BookOpen,
  Crosshair,
  Crown,
  Gem,
  Sparkles,
  Rocket,
  Globe2,
  Handshake,
  Mic2,
  Radar,
  Vote,
  Briefcase,
  Cpu,
  Wifi,
  MessageSquare,
  Landmark,
  Compass,
  Scale,
  Database,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Equal,
} from 'lucide-react'
import {
  softPowerData,
  executionMetadata,
  executiveSummary,
  coreMetricsDashboard,
  globalRankings,
  softPowerStrategy,
  culturalDiplomacy,
  educationDiplomacy,
  humanitarianHealthDiplomacy,
  sportsDiplomacy,
  digitalTechnologyDiplomacy,
  mediaDiplomacy,
  nationPlaceBranding,
  toleranceMigration,
  geopoliticalStrategy,
  challengesLimitations,
  statisticalAppendix,
  sourceRegistry,
  sentimentAnalysis,
  uaeRelevanceAssessment,
  dataQualityNotes,
  dashboardMetrics,
} from '@/lib/data/perception'

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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardHover = {
  rest: { scale: 1, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
  hover: {
    scale: 1.02,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 },
  },
}

function getTrendIcon(trend: string) {
  if (trend === 'up' || trend === 'Rising' || trend === 'Improved') return <ArrowUpRight className="h-3 w-3 text-emerald-400" />
  if (trend === 'down' || trend === 'Deteriorating') return <ArrowDownRight className="h-3 w-3 text-rose-400" />
  return <Equal className="h-3 w-3 text-gold-700" />
}

function getSentimentBadge(sentiment: string) {
  if (sentiment === 'Positive' || sentiment === 'Strongly Positive') return 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
  if (sentiment === 'Negative' || sentiment === 'Mixed to Positive') return 'border-rose-500/30 text-rose-400 bg-rose-500/10'
  if (sentiment === 'Balanced') return 'border-gold-700/30 text-gold-700 bg-gold-700/10'
  return 'border-platinum/30 text-platinum-400 bg-platinum/10'
}

export default function SoftPowerPage() {
  // Prepare data for charts
  const softPowerScore = 59.4
  const overallRank = 10

  // Category rankings for radar chart
  const categoryRankingsData = [
    { category: 'Generosity', rank: 2, fullMark: 10 },
    { category: 'Future Economic', rank: 3, fullMark: 10 },
    { category: 'Business Ease', rank: 3, fullMark: 10 },
    { category: 'Diplomatic Influence', rank: 8, fullMark: 10 },
    { category: 'Technology', rank: 8, fullMark: 10 },
    { category: 'Int\'l Relations', rank: 9, fullMark: 10 },
    { category: 'Business & Trade', rank: 10, fullMark: 10 },
    { category: 'Space Exploration', rank: 10, fullMark: 10 },
  ]

  // Regional comparison data
  const regionalComparisonData = [
    { country: 'UAE', rank: 10, fill: CHART_COLORS.gold },
    { country: 'Saudi Arabia', rank: 17, fill: CHART_COLORS.platinum },
    { country: 'Qatar', rank: 20, fill: CHART_COLORS.navy },
    { country: 'Israel', rank: 19, fill: CHART_COLORS.rose },
    { country: 'Kuwait', rank: 40, fill: CHART_COLORS.emerald },
    { country: 'Oman', rank: 49, fill: CHART_COLORS.denim },
    { country: 'Bahrain', rank: 51, fill: CHART_COLORS.indigo },
    { country: 'Egypt', rank: 58, fill: CHART_COLORS.purple },
  ]

  // Six pillars data
  const sixPillarsData = softPowerStrategy.sixPillarsArchitecture.map((pillar, idx) => ({
    name: pillar.pillar,
    priority: parseInt(pillar.priority),
    value: 100 - idx * 12,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Foreign aid data
  const aidDistributionData = [
    { name: 'Yemen', value: 75, color: CHART_COLORS.rose },
    { name: 'Syria', value: 4, color: CHART_COLORS.orange },
    { name: 'Jordan', value: 3, color: CHART_COLORS.gold },
    { name: 'Other MENA', value: 18, color: CHART_COLORS.platinum },
  ]

  // Sentiment breakdown
  const sentimentBreakdownData = [
    { name: 'Positive', value: 45, color: CHART_COLORS.emerald },
    { name: 'Negative', value: 25, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 30, color: CHART_COLORS.platinum },
  ]

  // Historical progression data
  const historicalProgressionData = globalRankings.historicalProgression.map(item => ({
    year: item.year,
    rank: parseInt(item.uaeRank.match(/\d+/)?.[0] || '0'),
    color: CHART_COLORS.gold,
  })).sort((a, b) => parseInt(a.year) - parseInt(b.year))

  // Sports events data
  const sportsEventsData = sportsDiplomacy.majorEvents.map((event, idx) => ({
    name: event.event,
    location: event.location,
    type: event.note || 'Sports Event',
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Cultural institutions data
  const culturalInstitutionsData = culturalDiplomacy.flagshipMuseums.map((museum, idx) => ({
    name: museum.institution,
    location: museum.location,
    year: museum.opened,
    architect: museum.architect,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Brand value data
  const brandValueData = [
    { name: '2020', value: 0.96, color: CHART_COLORS.gold },
    { name: '2022', value: 1.05, color: CHART_COLORS.gold },
    { name: '2024', value: 1.14, color: CHART_COLORS.gold },
    { name: '2025', value: 1.22, color: CHART_COLORS.gold },
  ]

  // Media functions data
  const mediaFunctionsData = mediaDiplomacy.mediaFunctions.map((fn, idx) => ({
    name: fn.function,
    description: fn.description,
    color: Object.values(CHART_COLORS)[idx % Object.values(CHART_COLORS).length],
  }))

  // Dubai brand rankings chart data
  const dubaiRankingsData = [
    { index: 'Brand Finance City Index', 2023: 9, 2024: 5 },
    { index: 'Global Financial Centres', 2023: 0, 2024: 0, 2025: 12 },
    { index: '2Thinknow Innovation', 2023: 14, 2024: 0, 2025: 0 },
  ].filter(d => d[2023] > 0 || d[2024] > 0 || d[2025] > 0)

  // Migrant population data
  const migrantPopData = toleranceMigration.majorMigrantPopulations.slice(0, 6).map(m => ({
    country: m.country,
    stock: parseInt(m.migrantStock.replace(/,/g, '')) || 0,
    color: Object.values(CHART_COLORS)[toleranceMigration.majorMigrantPopulations.indexOf(m) % Object.values(CHART_COLORS).length],
  }))

  // Geopolitical phases
  const geoPhases = [
    { label: 'Phase 1: Soft Power Foundation', period: geopoliticalStrategy.phase1SoftPowerFoundation.period, data: geopoliticalStrategy.phase1SoftPowerFoundation.elements, icon: '🕊️' },
    { label: 'Phase 2: Assertive Shift', period: geopoliticalStrategy.phase2AssertiveShift.period, data: geopoliticalStrategy.phase2AssertiveShift.actions, icon: '⚔️' },
    { label: 'Phase 3: Recalibration', period: geopoliticalStrategy.phase3Recalibration.period, data: geopoliticalStrategy.phase3Recalibration.actions, icon: '🤝' },
    { label: 'Phase 4: Continued Hard Power', period: geopoliticalStrategy.phase4ContinuedHardPower.period, data: geopoliticalStrategy.phase4ContinuedHardPower.actions, icon: '🎖️' },
  ]

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
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-gold to-yellow-600 text-navy-950">
            <Sparkles className="h-4 w-4 mr-1" />
            SOFT POWER
          </Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">UAE Soft Power & Public Diplomacy</h1>
          <p className="mt-2 text-platinum-400 font-rajdhani">
            {executionMetadata.classification} | Source: {executionMetadata.outputFile}
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {executionMetadata.dateExecuted}
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {executionMetadata.queriesExecuted} queries
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {executionMetadata.pagesFetched} pages
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Star className="h-4 w-4" />
            Rankings
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Rocket className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Soft Power Index"
          value={`${softPowerScore}/100`}
          previousValue={60.4}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
          status="stable"
        />
        <MetricCard
          title="Global Ranking"
          value={`#${overallRank}`}
          previousValue={9}
          icon={<Trophy className="h-6 w-6" />}
          gradient="gold"
          status="info"
        />
        <MetricCard
          title="Brand Value"
          value="$1.22T"
          previousValue={1.14}
          icon={<Gem className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Countries Evaluated"
          value="193"
          icon={<MapPin className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
      </motion.div>

      {/* Executive Summary Highlight */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Executive Summary"
          description="Only Arab nation in global top 10 soft power rankings for four consecutive years"
          badge="KEY FINDING"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-card bg-gradient-to-br from-gold/20 to-navy/20 border-gold-700/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Crown className="h-5 w-5 text-gold-700" />
                  Key Differentiator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-platinum-200 font-rajdhani text-lg">{executiveSummary.keyDifferentiator}</p>
              </CardContent>
            </Card>
            <Card className="glass-card bg-gradient-to-br from-emerald/20 to-navy/20 border-emerald-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-emerald-500" />
                  Core Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-platinum-200 text-sm">{executiveSummary.strategy}</p>
              </CardContent>
            </Card>
            <Card className="glass-card bg-gradient-to-br from-platinum/20 to-navy/20 border-platinum/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Handshake className="h-5 w-5 text-platinum-500" />
                  Foundational Principles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-platinum-200 text-sm">{executiveSummary.foundingPrinciples}</p>
              </CardContent>
            </Card>
          </div>
          {/* Regional Approach */}
          <div className="mt-4 p-4 bg-rose-500/10 border border-rose-500/20 rounded-lg">
            <p className="text-sm text-platinum-300">
              <span className="text-rose-400 font-semibold">Regional Differentiation: </span>
              {executiveSummary.regionalApproach}
            </p>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'SP-1', name: 'Cultural Diplomacy' },
            { id: 'SP-2', name: 'Education Hub' },
            { id: 'SP-3', name: 'Humanitarian Aid' },
            { id: 'SP-4', name: 'Sports Events' },
            { id: 'SP-5', name: 'Digital Diplomacy' },
            { id: 'SP-6', name: 'Nation Branding' },
            { id: 'SP-7', name: 'Media Diplomacy' },
            { id: 'SP-8', name: 'Tolerance & Migration' },
          ].map((area) => (
            <Badge key={area.id} variant="outline" className="border-gold-700/30 text-gold-700 font-rajdhani">
              {area.id} - {area.name}
            </Badge>
          ))}
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="strategy">Strategy</TabsTrigger>
          <TabsTrigger value="cultural">Cultural</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="humanitarian">Humanitarian</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="digital">Digital</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="tolerance">Tolerance</TabsTrigger>
          <TabsTrigger value="geo">Geopolitical</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="appendix">Appendix</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="Soft Power Overview"
            description="Comprehensive metrics and strategic framework"
            badge="Comprehensive"
          >
            <div className="space-y-6">
              {/* Top Rankings */}
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Radar Chart - Category Rankings */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Radar className="h-5 w-5 text-gold-700" />
                      Category Rankings (2026)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadarChart
                      data={categoryRankingsData}
                      categories={['rank']}
                      index="category"
                      colors={[CHART_COLORS.gold]}
                      valueFormatter={(v) => `${v}/10`}
                      showLegend={false}
                      height={250}
                    />
                  </CardContent>
                </Card>

                {/* Sentiment Distribution */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-platinum-500" />
                      Sentiment Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentBreakdownData}
                      height={200}
                      showLegend={true}
                      donut={true}
                    />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="text-center p-2 bg-emerald-500/20 rounded-lg">
                        <p className="text-lg font-bold text-emerald-500">45%</p>
                        <p className="text-xs text-platinum-500">Positive</p>
                      </div>
                      <div className="text-center p-2 bg-rose-500/20 rounded-lg">
                        <p className="text-lg font-bold text-rose-500">25%</p>
                        <p className="text-xs text-platinum-500">Negative</p>
                      </div>
                      <div className="text-center p-2 bg-platinum/20 rounded-lg">
                        <p className="text-lg font-bold text-platinum-500">30%</p>
                        <p className="text-xs text-platinum-500">Neutral</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Brand Value Growth */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Gem className="h-5 w-5 text-gold-700" />
                    UAE Brand Value Growth (Trillion USD)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={brandValueData}
                    xAxisKey="name"
                    areas={[{ dataKey: 'value', name: 'Brand Value ($T)', color: CHART_COLORS.gold }]}
                    height={200}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Six Pillars */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold-700" />
                    Six Pillars of Soft Power Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sixPillarsData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Priority Score', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                    {softPowerStrategy.sixPillarsArchitecture.map((pillar, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <p className="text-xs text-gold-700 font-semibold">#{pillar.priority}</p>
                        <p className="text-sm text-platinum-200 mt-1">{pillar.pillar}</p>
                        <p className="text-xs text-platinum-500 mt-1">{pillar.keyInstruments}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Rankings Tab */}
        <TabsContent value="rankings" className="space-y-6">
          <GlassPanel
            title="Global Rankings"
            description="Brand Finance Soft Power Index 2026"
            badge="2026"
          >
            <div className="space-y-6">
              {/* Overall Performance */}
              <Card className="glass-card bg-gradient-to-br from-gold/10 to-navy/20 border-gold-700/30">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-4xl font-bold text-gold-700">10th</p>
                      <p className="text-sm text-platinum-400">Global Rank</p>
                      <p className="text-xs text-platinum-500 mt-1">4th consecutive year</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-platinum-400">59.4</p>
                      <p className="text-sm text-platinum-400">Soft Power Index</p>
                      <p className="text-xs text-rose-400 mt-1">-1.0 pts YoY</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-emerald-400">193</p>
                      <p className="text-sm text-platinum-400">Countries Evaluated</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-cyan-400">150K+</p>
                      <p className="text-sm text-platinum-400">Survey Respondents</p>
                      <p className="text-xs text-platinum-500 mt-1">100+ countries</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gold-700/10 rounded-lg text-center">
                    <p className="text-sm text-platinum-300 italic">Presented at World Economic Forum, Davos, Switzerland</p>
                  </div>
                </CardContent>
              </Card>

              {/* Regional Comparison */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gold-700" />
                    Regional Comparison - Middle East Rankings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={regionalComparisonData}
                    xAxisKey="country"
                    bars={[{ dataKey: 'rank', name: 'Global Rank', color: CHART_COLORS.gold }]}
                    height={250}
                    showGrid={true}
                  />
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {globalRankings.regionalComparison.map((item, idx) => (
                      <div key={idx} className={`p-2 rounded-lg text-center ${item.country === 'UAE' ? 'bg-gold-700/20 border border-gold-700/30' : 'bg-platinum-800/50'}`}>
                        <p className={`text-sm font-bold ${item.country === 'UAE' ? 'text-gold-700' : 'text-platinum-300'}`}>{item.country}</p>
                        <p className={`text-lg font-bold ${item.country === 'UAE' ? 'text-gold-700' : 'text-platinum-400'}`}>#{item.rank}</p>
                        <p className={`text-xs ${item.change.startsWith('+') ? 'text-emerald-400' : item.change.startsWith('-') ? 'text-rose-400' : 'text-platinum-500'}`}>{item.change}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Historical Progression */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    UAE Soft Power Ranking Evolution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={historicalProgressionData}
                    xAxisKey="year"
                    areas={[{ dataKey: 'rank', name: 'Global Rank', color: CHART_COLORS.emerald }]}
                    height={200}
                    showGrid={true}
                  />
                  <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-2">
                    {globalRankings.historicalProgression.map((item, idx) => (
                      <div key={idx} className="p-2 bg-platinum-800/50 rounded-lg text-center">
                        <p className="text-lg font-bold text-gold-700">{item.year}</p>
                        <p className="text-xs text-platinum-400 mt-1">{item.uaeRank}</p>
                        <p className="text-xs text-platinum-500 mt-1">{item.notableEvent}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Core Metrics Dashboard */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold-700" />
                    Core Metrics Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {coreMetricsDashboard.map((metric, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700 text-center">
                        <p className="text-2xl font-bold text-gold-700">{metric.value}</p>
                        <p className="text-sm text-platinum-400 mt-1">{metric.metric}</p>
                        <p className="text-xs text-platinum-500">Rank: {metric.rank} | {metric.source} {metric.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Strategy Tab */}
        <TabsContent value="strategy" className="space-y-6">
          <GlassPanel
            title="Soft Power Strategy"
            description="Institutional framework and strategic objectives"
            badge="Strategic"
          >
            <div className="space-y-6">
              {/* Soft Power Council */}
              <Card className="glass-card bg-gradient-to-br from-gold/10 to-navy/20 border-gold-700/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold-700" />
                    Soft Power Council
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="space-y-3">
                      <div className="flex justify-between p-2 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Launched</span>
                        <span className="text-gold-700 font-semibold">{softPowerStrategy.institutionalFramework.softPowerCouncil.launched}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-400">Venue</span>
                        <span className="text-platinum-200">{softPowerStrategy.institutionalFramework.softPowerCouncil.venue}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-gold-700/10 rounded-lg border border-gold-700/30">
                      <p className="text-sm text-platinum-300 italic">"{softPowerStrategy.institutionalFramework.softPowerCouncil.objective}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Four Main Objectives */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-emerald-500" />
                    Four Main Objectives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {softPowerStrategy.fourMainObjectives.map((obj, idx) => (
                      <div key={idx} className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                        <div className="flex items-start gap-3">
                          <span className="flex h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-500 text-sm font-bold items-center justify-center">
                            {idx + 1}
                          </span>
                          <p className="text-sm text-platinum-200">{obj}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Leadership Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-platinum-500" />
                    Leadership Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {softPowerStrategy.leadershipTimeline.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-gold-700 font-bold w-12">{item.year}</span>
                        <div className="flex-1">
                          <p className="text-platinum-200 text-sm">{item.event}</p>
                          {item.official !== '-' && (
                            <p className="text-platinum-500 text-xs">{item.official}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Foundational Principles */}
              <Card className="glass-card bg-gradient-to-br from-navy/20 to-gold/10 border-gold-700/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-gold-700" />
                    Foundational Principles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-platinum-200 italic text-lg">"{softPowerStrategy.foundationalPrinciples}"</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Cultural Tab */}
        <TabsContent value="cultural" className="space-y-6">
          <GlassPanel
            title="Cultural Diplomacy"
            description="Flagship museums, cultural programs, and heritage initiatives"
            badge="Cultural"
          >
            <div className="space-y-6">
              {/* Flagship Museums */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold-700" />
                    Flagship Cultural Institutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {culturalDiplomacy.flagshipMuseums.map((museum, idx) => (
                      <motion.div
                        key={idx}
                        className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700"
                        variants={cardHover}
                        initial="rest"
                        whileHover="hover"
                      >
                        <h4 className="font-bold text-gold-700 text-sm">{museum.institution}</h4>
                        <p className="text-xs text-platinum-400 mt-1">{museum.location}</p>
                        <div className="mt-2 space-y-1">
                          <p className="text-xs text-platinum-500">
                            <span className="text-platinum-400">Opened:</span> {museum.opened}
                          </p>
                          {museum.partnership !== '-' && (
                            <p className="text-xs text-platinum-500">
                              <span className="text-platinum-400">Partner:</span> {museum.partnership}
                            </p>
                          )}
                          <p className="text-xs text-platinum-500">
                            <span className="text-platinum-400">Note:</span> {museum.architect}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cultural Programs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Mic2 className="h-5 w-5 text-platinum-500" />
                    Cultural Programs & Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {culturalDiplomacy.culturalPrograms.map((program, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs border-gold-700/30 text-gold-700">
                            {program.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-platinum-200 mt-2">{program.program}</p>
                        <p className="text-xs text-platinum-500 mt-1">{program.scope}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Expo 2020 Impact */}
              <Card className="glass-card bg-gradient-to-br from-gold/10 to-emerald/10 border-gold-700/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-gold-700" />
                    Expo 2020 Dubai Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold-700">{culturalDiplomacy.expo2020Impact.participatingCountries}</p>
                      <p className="text-sm text-platinum-400">Countries</p>
                    </div>
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald-500">{culturalDiplomacy.expo2020Impact.totalVisits}</p>
                      <p className="text-sm text-platinum-400">Total Visits</p>
                    </div>
                    <div className="p-4 bg-platinum/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum-500">$20.6B</p>
                      <p className="text-sm text-platinum-400">Brand Value Contribution</p>
                    </div>
                    <div className="p-4 bg-navy/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-navy-500">2/3</p>
                      <p className="text-sm text-platinum-400">of Top 10 Improvement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Research Finding */}
              <Card className="glass-card border-l-4 border-l-gold">
                <CardContent className="pt-6">
                  <p className="text-platinum-300 italic text-sm">"{culturalDiplomacy.researchFinding}"</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Education Tab */}
        <TabsContent value="education" className="space-y-6">
          <GlassPanel
            title="Education Diplomacy"
            description="International universities, educational statistics, and academic partnerships"
            badge="Education"
          >
            <div className="space-y-6">
              {/* International University Campuses */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-gold-700" />
                    International University Campuses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {educationDiplomacy.internationalUniversityCampuses.map((uni, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <h4 className="font-bold text-gold-700 text-sm">{uni.institution}</h4>
                        <p className="text-xs text-platinum-400 mt-1">{uni.location} | Est. {uni.established}</p>
                        <p className="text-xs text-platinum-500 mt-2">{uni.students}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Educational Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-emerald-500" />
                    Educational Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {educationDiplomacy.educationalStatistics.map((stat, idx) => (
                      <div key={idx} className="p-4 bg-emerald-500/10 rounded-lg text-center border border-emerald-500/20">
                        <p className="text-2xl font-bold text-emerald-400">{stat.value}</p>
                        <p className="text-xs text-platinum-400 mt-1">{stat.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Zayed University Diplomacy Program */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-gold-700" />
                    Zayed University - Master in Diplomacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gold-700 mb-2">Key Learning Outcomes:</p>
                      <div className="space-y-2">
                        {educationDiplomacy.zayedUniversityDiplomacy.keyLearningOutcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-2 bg-platinum-800/50 rounded-lg">
                            <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5" />
                            <p className="text-xs text-platinum-300">{outcome.replace(/"/g, '')}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gold-700 mb-2">Key Competencies Developed:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {educationDiplomacy.zayedUniversityDiplomacy.keyCompetencies.map((comp, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-platinum-800/50 rounded-lg">
                            <span className="h-2 w-2 rounded-full bg-gold-700" />
                            <p className="text-xs text-platinum-300">{comp}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Research Conclusion */}
              <Card className="glass-card border-l-4 border-l-emerald">
                <CardContent className="pt-6">
                  <p className="text-platinum-300 italic text-sm">"{educationDiplomacy.researchConclusion}"</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Humanitarian Tab */}
        <TabsContent value="humanitarian" className="space-y-6">
          <GlassPanel
            title="Humanitarian & Health Diplomacy"
            description="Foreign aid rankings, crisis response, and vaccine diplomacy"
            badge="Humanitarian"
          >
            <div className="space-y-6">
              {/* Aid Rankings */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose-500" />
                    Foreign Aid Rankings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {humanitarianHealthDiplomacy.foreignAidRankings.map((rank, idx) => (
                      <div key={idx} className="p-4 bg-rose-500/10 rounded-lg text-center border border-rose-500/20">
                        <p className="text-2xl font-bold text-rose-400">{rank.value}</p>
                        <p className="text-xs text-platinum-400 mt-1">{rank.metric}</p>
                        <p className="text-xs text-platinum-500">{rank.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Aid Growth Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    Aid Growth Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {humanitarianHealthDiplomacy.aidGrowthStatistics.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-gold-700 font-bold w-12">{stat.year}</span>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">{stat.change}</Badge>
                        <span className="text-platinum-300 text-sm">{stat.primaryRecipient}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Aid Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gold-700" />
                    Regional Aid Distribution (2018)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <PieChart
                      data={aidDistributionData}
                      height={200}
                      showLegend={true}
                      donut={true}
                    />
                    <div className="space-y-3">
                      {humanitarianHealthDiplomacy.regionalAidDistribution.map((region, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                          <span className="text-platinum-200">{region.region}</span>
                          <Badge variant="outline" className="border-gold-700/30 text-gold-700">{region.percentage}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Crisis Aid */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    Crisis-Specific Aid Disbursement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {humanitarianHealthDiplomacy.crisisSpecificAid.map((crisis, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <div className="flex justify-between items-start">
                          <p className="text-rose-300 font-semibold">{crisis.crisis}</p>
                          <p className="text-gold-700 font-bold">${crisis.amount}</p>
                        </div>
                        <p className="text-xs text-platinum-500 mt-1">{crisis.period}</p>
                        <p className="text-xs text-platinum-400 mt-2">{crisis.notes}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Vaccine Diplomacy */}
              <Card className="glass-card bg-gradient-to-br from-emerald/10 to-navy/20 border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-500" />
                    Vaccine Diplomacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald-500">6th</p>
                      <p className="text-xs text-platinum-400">Global Vaccine Donor</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-gold-700">200M</p>
                      <p className="text-xs text-platinum-400">Annual Production Target</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum-500">6B+</p>
                      <p className="text-xs text-platinum-400">Hope Consortium Capacity</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto" />
                      <p className="text-xs text-platinum-400 mt-1">First in Region (Sinopharm/G42)</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
                    {humanitarianHealthDiplomacy.vaccineDiplomacy.slice(1, 7).map((v, idx) => (
                      <div key={idx} className="p-2 bg-platinum-800/50 rounded-lg text-center">
                        <p className="text-sm font-bold text-platinum-300">{v.value}</p>
                        <p className="text-xs text-platinum-500">{v.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Institutional Framework */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-platinum-500" />
                    Institutional Framework for Aid
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {humanitarianHealthDiplomacy.institutionalFramework.map((org, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-platinum-200 font-semibold text-sm">{org.organization}</p>
                        <p className="text-xs text-gold-700 mt-1">{org.role}</p>
                        {org.founded !== '-' && <p className="text-xs text-platinum-500 mt-1">Founded: {org.founded}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* International Memberships */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-cyan-500" />
                    International Memberships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {humanitarianHealthDiplomacy.internationalMemberships.map((mem, idx) => (
                      <div key={idx} className="p-4 bg-cyan-500/10 rounded-lg text-center border border-cyan-500/20">
                        <p className="text-sm font-bold text-cyan-400">{mem.organization}</p>
                        <p className="text-xs text-platinum-400 mt-1">{mem.status}</p>
                        <p className="text-xs text-platinum-500">{mem.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sports Tab */}
        <TabsContent value="sports" className="space-y-6">
          <GlassPanel
            title="Sports Diplomacy"
            description="Major events, investments, and the UAE approach"
            badge="Sports"
          >
            <div className="space-y-6">
              {/* Major Events */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-gold-700" />
                    Major Sports Events & Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {sportsDiplomacy.majorEvents.map((event, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <h4 className="font-bold text-gold-700 text-sm">{event.event}</h4>
                        <p className="text-xs text-platinum-400 mt-1">{event.location}</p>
                        <p className="text-xs text-platinum-500 mt-2">{event.note || 'Sports Event'}</p>
                        {event.investment && (
                          <p className="text-xs text-emerald-500 mt-2">Investment: {event.investment}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Jiu-Jitsu Strategy */}
              <Card className="glass-card bg-gradient-to-br from-gold/10 to-navy/20 border-gold-700/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-gold-700" />
                    Jiu-Jitsu Strategy (National Sport)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-gold-700">2008</p>
                      <p className="text-xs text-platinum-400">Designated National Sport</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum-500">~200,000</p>
                      <p className="text-xs text-platinum-400">Emiratis Practicing</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum-500">130+</p>
                      <p className="text-xs text-platinum-400">Jiu-Jitsu Schools</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum-500">76,000+</p>
                      <p className="text-xs text-platinum-400">Students Enrolled (by 2016)</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-platinum-800/50 rounded-lg">
                    <p className="text-sm text-platinum-300">
                      <span className="text-gold-700 font-semibold">Abu Dhabi Grand Slam Tour:</span> Launched 2015
                    </p>
                    <p className="text-sm text-platinum-300 mt-1">
                      <span className="text-gold-700 font-semibold">International Collaboration:</span> UAE Jiu-Jitsu Federation + Brazilian counterparts
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Football Investment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-platinum-500" />
                    Football Investment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sportsDiplomacy.footballInvestment.map((inv, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-platinum-200 font-semibold">{inv.entity}</p>
                            <p className="text-xs text-platinum-500 mt-1">{inv.owner}</p>
                            <p className="text-xs text-platinum-500">{inv.year}</p>
                          </div>
                          {inv.investment && (
                            <Badge variant="outline" className="border-gold-700/30 text-gold-700">
                              {inv.investment}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-platinum-400 font-semibold">European Clubs Training in Dubai:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {sportsDiplomacy.clubsTrainingInDubai.map((club, idx) => (
                        <Badge key={idx} variant="outline" className="border-platinum/30 text-platinum-500">
                          {club}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Women's Sports */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-fuchsia-400" />
                    Women&apos;s Sports Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {sportsDiplomacy.womensSportsPrograms.map((prog, idx) => (
                      <div key={idx} className="p-3 bg-fuchsia-500/10 rounded-lg text-center border border-fuchsia-500/20">
                        <p className="text-sm text-fuchsia-400 font-semibold">{prog}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sportswashing Analysis */}
              <Card className="glass-card border-l-4 border-l-platinum">
                <CardContent className="pt-6">
                  <p className="text-platinum-300 italic text-sm">"{sportsDiplomacy.sportswashingAnalysis}"</p>
                  <p className="text-gold-700 text-sm mt-3 font-semibold">— Dr. Seth Perkin</p>
                  <div className="mt-3 p-3 bg-gold-700/10 rounded-lg">
                    <p className="text-sm text-platinum-300">
                      <span className="text-gold-700 font-semibold">UAE Approach:</span> {sportsDiplomacy.uaeApproach}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Digital Tab */}
        <TabsContent value="digital" className="space-y-6">
          <GlassPanel
            title="Digital & Technology Diplomacy"
            description="AI strategy, digital diplomacy tools, and challenges"
            badge="Digital"
          >
            <div className="space-y-6">
              {/* AI Strategy */}
              <Card className="glass-card bg-gradient-to-br from-navy/20 to-emerald/10 border-navy/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-navy-500" />
                    AI & Technology Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {digitalTechnologyDiplomacy.aiStrategy.map((initiative, idx) => (
                      <div key={idx} className="p-4 bg-navy/20 rounded-lg border border-navy/30">
                        <p className="text-navy-500 font-semibold text-sm">{initiative.initiative}</p>
                        <p className="text-xs text-platinum-400 mt-1">Launch: {initiative.launch}</p>
                        <p className="text-xs text-platinum-500 mt-2">{initiative.goal}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Digital Diplomacy Tools */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Monitor className="h-5 w-5 text-platinum-500" />
                    Digital Diplomacy Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {digitalTechnologyDiplomacy.digitalDiplomacyTools.map((platform, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <div className="flex items-center justify-between">
                          <p className="text-platinum-200 font-semibold">{platform.platform}</p>
                          <Badge
                            variant="outline"
                            className={platform.ministryUse === 'Primary' ? 'border-gold-700/30 text-gold-700' : 'border-platinum/30 text-platinum-500'}
                          >
                            {platform.ministryUse}
                          </Badge>
                        </div>
                        <p className="text-xs text-platinum-500 mt-2">{platform.strategicPurpose}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Strategic Goals */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-emerald-500" />
                    Digital Diplomacy Strategic Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2">
                    {digitalTechnologyDiplomacy.strategicGoals.map((goal, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-emerald-500/10 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <p className="text-sm text-platinum-200">{goal}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Challenges */}
              <Card className="glass-card border-l-4 border-l-rose">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <AlertTriangle className="h-5 w-5" />
                    Digital Diplomacy Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {digitalTechnologyDiplomacy.digitalDiplomacyChallenges.map((challenge, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                        <p className="text-rose-300 font-semibold text-sm">{challenge.category}</p>
                        <p className="text-xs text-platinum-400 mt-1">{challenge.issues}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-gold-700" />
                    Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {digitalTechnologyDiplomacy.digitalDiplomacyRecommendations.map((rec, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-gold-700/10 rounded-lg">
                        <span className="flex h-6 w-6 rounded-full bg-gold-700/20 text-gold-700 text-sm font-bold items-center justify-center">
                          {idx + 1}
                        </span>
                        <p className="text-sm text-platinum-200">{rec}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Media Tab */}
        <TabsContent value="media" className="space-y-6">
          <GlassPanel
            title="Media Diplomacy"
            description="Strategic media approach and key platforms"
            badge="Media"
          >
            <div className="space-y-6">
              {/* Core Characterization */}
              <Card className="glass-card bg-gradient-to-br from-indigo/10 to-navy/20 border-indigo-500/30">
                <CardContent className="pt-6">
                  <p className="text-indigo-400 italic text-lg">"{mediaDiplomacy.coreCharacterization}"</p>
                </CardContent>
              </Card>

              {/* Strategic Approach */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Compass className="h-5 w-5 text-indigo-400" />
                    Strategic Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {mediaDiplomacy.strategicApproach.map((comp, idx) => (
                      <div key={idx} className="p-4 bg-indigo-500/10 rounded-lg text-center border border-indigo-500/20">
                        <p className="text-indigo-400 font-semibold text-sm">{comp.component}</p>
                        <p className="text-xs text-platinum-400 mt-2">{comp.application}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Media Functions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-gold-700" />
                    Media Functions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {mediaDiplomacy.mediaFunctions.map((fn, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <p className="text-gold-700 font-semibold text-sm">{fn.function}</p>
                        <p className="text-xs text-platinum-400 mt-2">{fn.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Platforms */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-platinum-500" />
                    Key Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {mediaDiplomacy.keyPlatforms.map((platform, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <p className="text-platinum-200 font-semibold text-sm">{platform.platform}</p>
                        <p className="text-xs text-gold-700 mt-1">{platform.role}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Core Quote */}
              <Card className="glass-card border-l-4 border-l-indigo">
                <CardContent className="pt-6">
                  <p className="text-platinum-300 italic text-lg">"{mediaDiplomacy.coreQuote}"</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Branding Tab */}
        <TabsContent value="branding" className="space-y-6">
          <GlassPanel
            title="Nation & Place Branding"
            description="Seven Lines nation brand, tourism strategy, and destination branding"
            badge="Branding"
          >
            <div className="space-y-6">
              {/* Seven Lines Nation Brand */}
              <Card className="glass-card bg-gradient-to-br from-gold/10 to-navy/20 border-gold-700/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Vote className="h-5 w-5 text-gold-700" />
                    Nation Brand: &quot;Seven Lines&quot;
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-xs text-platinum-400">Launch Date</p>
                      <p className="text-lg font-bold text-gold-700">{nationPlaceBranding.sevenLinesNationBrand.launchDate}</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-xs text-platinum-400">Logo Name</p>
                      <p className="text-lg font-bold text-platinum-300">{nationPlaceBranding.sevenLinesNationBrand.logoName}</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-xs text-platinum-400">Meaning</p>
                      <p className="text-lg font-bold text-platinum-300">{nationPlaceBranding.sevenLinesNationBrand.meaning}</p>
                    </div>
                    <div className="p-4 bg-emerald-500/10 rounded-lg text-center border border-emerald-500/20">
                      <p className="text-xs text-platinum-400">Global Rank</p>
                      <p className="text-lg font-bold text-emerald-400">{nationPlaceBranding.sevenLinesNationBrand.globalRank}</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-xs text-platinum-400">Design Contest</p>
                      <p className="text-lg font-bold text-platinum-300">{nationPlaceBranding.sevenLinesNationBrand.designContest}</p>
                    </div>
                    <div className="p-4 bg-indigo-500/10 rounded-lg text-center border border-indigo-500/20">
                      <p className="text-xs text-platinum-400">Above</p>
                      <p className="text-lg font-bold text-indigo-400">{nationPlaceBranding.sevenLinesNationBrand.above}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Historical Strategy */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-platinum-500" />
                    Historical Branding Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {nationPlaceBranding.historicalStrategy.map((phase, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="border-gold-700/30 text-gold-700">{phase.period}</Badge>
                          <span className="text-platinum-200 font-semibold">{phase.phase}</span>
                        </div>
                        <p className="text-sm text-platinum-400 mt-2">{phase.positioning}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Brand Philosophy */}
              <Card className="glass-card border-l-4 border-l-gold">
                <CardContent className="pt-6">
                  <p className="text-platinum-300 italic text-sm">{nationPlaceBranding.brandPhilosophy}</p>
                </CardContent>
              </Card>

              {/* Anholt Six Components */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-emerald-500" />
                    Anholt&apos;s Six Components (UAE Alignment)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {nationPlaceBranding.anholtSixComponents.map((comp, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <p className="text-emerald-400 font-semibold text-sm">{comp.component}</p>
                        <p className="text-xs text-platinum-400 mt-1">{comp.uaeApplication}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE Tourism Strategy 2031 */}
              <Card className="glass-card bg-gradient-to-br from-emerald/10 to-navy/20 border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Plane className="h-5 w-5 text-emerald-500" />
                    UAE Tourism Strategy 2031
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-emerald-400">AED {nationPlaceBranding.uaeTourismStrategy2031.tourismGdpContribution}</p>
                      <p className="text-xs text-platinum-400">Tourism GDP Contribution</p>
                    </div>
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-gold-700">AED {nationPlaceBranding.uaeTourismStrategy2031.additionalTourismInvestments}</p>
                      <p className="text-xs text-platinum-400">Additional Investments</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum-400">{nationPlaceBranding.uaeTourismStrategy2031.hotelGuestsAnnual}</p>
                      <p className="text-xs text-platinum-400">Annual Hotel Guests</p>
                    </div>
                    <div className="p-4 bg-indigo-500/10 rounded-lg text-center border border-indigo-500/20">
                      <p className="text-2xl font-bold text-indigo-400">{nationPlaceBranding.uaeTourismStrategy2031.initiatives}</p>
                      <p className="text-xs text-platinum-400">Strategic Initiatives</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gold-700">Four Strategic Directions:</p>
                    {nationPlaceBranding.uaeTourismStrategy2031.fourStrategicDirections.map((dir, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-platinum-800/50 rounded-lg">
                        <span className="h-5 w-5 rounded-full bg-gold-700/20 text-gold-700 text-xs font-bold flex items-center justify-center">{idx + 1}</span>
                        <p className="text-xs text-platinum-300">{dir}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Dubai Brand Rankings */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold-700" />
                    Dubai Brand Rankings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {nationPlaceBranding.dubaiBrandRankings.map((row, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-sm text-platinum-200 font-semibold">{row.index}</p>
                        <div className="flex gap-4 mt-2">
                          {row[2023] > 0 && <span className="text-xs text-platinum-400">2023: <span className="text-platinum-300">#{row[2023]}</span></span>}
                          {row[2024] > 0 && <span className="text-xs text-platinum-400">2024: <span className="text-gold-700 font-bold">#{row[2024]}</span></span>}
                          {row[2025] > 0 && <span className="text-xs text-platinum-400">2025: <span className="text-platinum-300">#{row[2025]}</span></span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Abu Dhabi Destination Brand */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-rose-400" />
                    Abu Dhabi Destination Brand
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-rose-500/10 rounded-lg border border-rose-500/20">
                    <p className="text-2xl font-bold text-rose-400">{nationPlaceBranding.abuDhabiDestinationBrand.campaignName}</p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div>
                        <p className="text-xs text-platinum-500">Launch</p>
                        <p className="text-sm text-platinum-300">{nationPlaceBranding.abuDhabiDestinationBrand.launch}</p>
                      </div>
                      <div>
                        <p className="text-xs text-platinum-500">Consultancy</p>
                        <p className="text-sm text-platinum-300">{nationPlaceBranding.abuDhabiDestinationBrand.consultancy}</p>
                      </div>
                      <div>
                        <p className="text-xs text-platinum-500">Positioning</p>
                        <p className="text-sm text-platinum-300">{nationPlaceBranding.abuDhabiDestinationBrand.positioning}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Tolerance Tab */}
        <TabsContent value="tolerance" className="space-y-6">
          <GlassPanel
            title="Tolerance & Migration"
            description="Demographics, tolerance policies, and migrant populations"
            badge="Tolerance"
          >
            <div className="space-y-6">
              {/* Demographics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-gold-700" />
                    UAE Demographics (2024)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {toleranceMigration.demographics.map((demo, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg text-center border border-platinum-700">
                        <p className="text-2xl font-bold text-gold-700">{demo.value}</p>
                        <p className="text-xs text-platinum-400 mt-1">{demo.metric}</p>
                        <p className="text-xs text-platinum-500">{demo.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Major Migrant Populations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-cyan-500" />
                    Major Migrant Populations (2024)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={migrantPopData}
                    xAxisKey="country"
                    bars={[{ dataKey: 'stock', name: 'Migrant Stock', color: CHART_COLORS.cyan }]}
                    height={250}
                    showGrid={true}
                  />
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {toleranceMigration.majorMigrantPopulations.map((m, idx) => (
                      <div key={idx} className="p-2 bg-platinum-800/50 rounded-lg text-center">
                        <p className="text-xs text-cyan-400 font-semibold">{m.country}</p>
                        <p className="text-xs text-platinum-500">{m.migrantStock}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tolerance Policy Initiatives */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-emerald-500" />
                    Tolerance Policy Initiatives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {toleranceMigration.tolerancePolicyInitiatives.map((init, idx) => (
                      <div key={idx} className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <div className="flex items-center gap-2">
                          <p className="text-emerald-400 font-semibold text-sm">{init.initiative}</p>
                          <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">{init.year}</Badge>
                        </div>
                        <p className="text-xs text-platinum-400 mt-2">{init.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Core Argument */}
              <Card className="glass-card border-l-4 border-l-emerald">
                <CardContent className="pt-6">
                  <p className="text-platinum-300 italic text-sm">"{toleranceMigration.coreArgument}"</p>
                </CardContent>
              </Card>

              {/* Key Statistics Supporting Tolerance */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-gold-700" />
                    Key Statistics Supporting Tolerance Narrative
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {toleranceMigration.keyStatisticsSupportingToleranceNarrative.map((stat, idx) => (
                      <div key={idx} className="p-4 bg-gold-700/10 rounded-lg text-center border border-gold-700/20">
                        <p className="text-2xl font-bold text-gold-700">{stat.value}</p>
                        <p className="text-xs text-platinum-400 mt-1">{stat.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Geopolitical Tab */}
        <TabsContent value="geo" className="space-y-6">
          <GlassPanel
            title="Geopolitical Strategy: Soft vs Hard Power"
            description="Historical evolution and military capabilities"
            badge="Geopolitical"
          >
            <div className="space-y-6">
              {/* Phase Evolution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-platinum-500" />
                    Historical Evolution of UAE Geopolitical Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {geoPhases.map((phase, idx) => (
                      <div key={idx} className={`p-4 rounded-lg border ${idx === 0 ? 'bg-emerald-500/10 border-emerald-500/20' : idx === 1 ? 'bg-rose-500/10 border-rose-500/20' : idx === 2 ? 'bg-gold-700/10 border-gold-700/20' : 'bg-rose-500/10 border-rose-500/20'}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className={`${idx === 0 ? 'border-emerald-500/30 text-emerald-400' : idx === 1 ? 'border-rose-500/30 text-rose-400' : idx === 2 ? 'border-gold-700/30 text-gold-700' : 'border-rose-500/30 text-rose-400'}`}>
                            {phase.period}
                          </Badge>
                          <h4 className={`font-semibold text-sm ${idx === 0 ? 'text-emerald-400' : idx === 1 ? 'text-rose-400' : idx === 2 ? 'text-gold-700' : 'text-rose-400'}`}>
                            {phase.label}
                          </h4>
                        </div>
                        <div className="space-y-1">
                          {(phase.data as any[]).map((item: any, i: number) => (
                            <p key={i} className="text-xs text-platinum-400">
                              <span className="text-platinum-300 font-semibold">
                                {item.element || item.action}:
                              </span>{' '}
                              {item.detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Military Capabilities */}
              <Card className="glass-card bg-gradient-to-br from-rose/10 to-navy/20 border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-rose-500" />
                    Military Capabilities - &quot;Little Sparta&quot;
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-platinum-800/50 rounded-lg">
                      <p className="text-xs text-platinum-400">Nickname</p>
                      <p className="text-platinum-200 font-semibold">"{geopoliticalStrategy.militaryCapabilities.nickname}"</p>
                      <p className="text-xs text-platinum-500">from US Defense Secretary James Mattis</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg">
                      <p className="text-xs text-platinum-400">Army Quality</p>
                      <p className="text-platinum-200 text-sm">{geopoliticalStrategy.militaryCapabilities.armyQuality}</p>
                    </div>
                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                      <p className="text-xs text-rose-400">EDGE Group Ranking</p>
                      <p className="text-platinum-200 font-semibold">22nd among global arms firms</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg">
                      <p className="text-xs text-platinum-400">Defense Exhibitions</p>
                      <p className="text-platinum-200 text-sm">{geopoliticalStrategy.militaryCapabilities.defenseExhibitions}</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg col-span-2">
                      <p className="text-xs text-platinum-400">Capabilities</p>
                      <p className="text-platinum-200 text-sm">{geopoliticalStrategy.militaryCapabilities.capabilities}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Quote */}
              <Card className="glass-card border-l-4 border-l-gold">
                <CardContent className="pt-6">
                  <p className="text-platinum-300 italic text-lg">"{geopoliticalStrategy.keyQuote}"</p>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Challenges Tab */}
        <TabsContent value="challenges" className="space-y-6">
          <GlassPanel
            title="Challenges & Limitations"
            description="External and internal challenges to UAE soft power"
            badge="Critical"
          >
            <div className="space-y-6">
              {/* External Challenges */}
              <Card className="glass-card border-l-4 border-l-rose">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                    <AlertTriangle className="h-5 w-5" />
                    External Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {challengesLimitations.externalChallenges.map((challenge, idx) => (
                      <div key={idx} className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                        <p className="text-rose-300 font-semibold text-sm">{challenge.challenge}</p>
                        <p className="text-xs text-platinum-400 mt-2">{challenge.description.replace(/"/g, '')}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Internal Challenges */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold-700" />
                    Internal Challenges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {challengesLimitations.internalChallenges.map((challenge, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <p className="text-platinum-200 font-semibold text-sm">{challenge.challenge}</p>
                        <p className="text-xs text-platinum-400 mt-1">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Authenticity Critique */}
              <Card className="glass-card border-l-4 border-l-amber-400">
                <CardContent className="pt-6">
                  <p className="text-amber-400 font-semibold text-sm mb-2">Authenticity Critique:</p>
                  <p className="text-platinum-300 italic text-sm">"{challengesLimitations.authenticityCritique}"</p>
                </CardContent>
              </Card>

              {/* Regional Context Issues */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-platinum-500" />
                    Regional Context Issues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {challengesLimitations.regionalContextIssues.map((issue, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <p className="text-platinum-200 font-semibold text-sm">{issue.issue}</p>
                        <p className="text-xs text-platinum-400 mt-1">{issue.impact}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment Analysis */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-platinum-500" />
                    Sentiment Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-gold-700/10 rounded-lg mb-4 border border-gold-700/20">
                    <p className="text-sm text-gold-700 font-semibold">Overall Sentiment: {sentimentAnalysis.overallSentiment}</p>
                  </div>
                  <div className="space-y-3">
                    {sentimentAnalysis.byDimension.map((dim, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-200 text-sm">{dim.dimension}</span>
                        <Badge className={getSentimentBadge(dim.sentiment)}>{dim.sentiment}</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gold-700 mb-2">By Topic:</p>
                    <div className="space-y-2">
                      {sentimentAnalysis.byTopic.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-platinum-800/50 rounded-lg">
                          <span className="text-platinum-300 text-sm">{item.topic}</span>
                          <Badge className={getSentimentBadge(item.sentiment)}>{item.sentiment}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Appendix Tab */}
        <TabsContent value="appendix" className="space-y-6">
          <GlassPanel
            title="Statistical Appendix"
            description="Quick reference tables and data summary"
            badge="Data"
          >
            <div className="space-y-6">
              {/* Soft Power Index Scores */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-gold-700" />
                    A. Soft Power Index Scores (2026)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {statisticalAppendix.softPowerIndexScores.map((score, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg text-center">
                        <p className="text-lg font-bold text-gold-700">{score.scoreRank}</p>
                        <p className="text-xs text-platinum-400">{score.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Category Rankings Quick Ref */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-emerald-500" />
                    B. Category Rankings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {statisticalAppendix.categoryRankingsQuickRef.map((cat, idx) => (
                      <div key={idx} className="p-2 bg-platinum-800/50 rounded-lg text-center">
                        <p className="text-lg font-bold text-emerald-400">#{cat.rank}</p>
                        <p className="text-xs text-platinum-400">{cat.category}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Foreign Aid Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-rose-500" />
                    C. Foreign Aid Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {statisticalAppendix.foreignAidMetrics.map((metric, idx) => (
                      <div key={idx} className="p-3 bg-rose-500/10 rounded-lg text-center border border-rose-500/20">
                        <p className="text-lg font-bold text-rose-400">{metric.value}</p>
                        <p className="text-xs text-platinum-400">{metric.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cultural Infrastructure */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-gold-700" />
                    D. Cultural Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {statisticalAppendix.culturalInfrastructure.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-200 text-sm">{item.institution}</span>
                        <Badge variant="outline" className="border-gold-700/30 text-gold-700">{item.visitorsCapacity}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sports Investment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-platinum-500" />
                    E. Sports Investment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {statisticalAppendix.sportsInvestment.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-200 text-sm">{item.asset}</span>
                        <Badge variant="outline" className="border-platinum/30 text-platinum-400">{item.investment}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Population Demographics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-cyan-500" />
                    F. Population Demographics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-4">
                    {statisticalAppendix.populationDemographics.map((demo, idx) => (
                      <div key={idx} className="p-3 bg-cyan-500/10 rounded-lg text-center border border-cyan-500/20">
                        <p className="text-lg font-bold text-cyan-400">{demo.value}</p>
                        <p className="text-xs text-platinum-400">{demo.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Economic Metrics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Gem className="h-5 w-5 text-gold-700" />
                    G. Economic Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-4">
                    {statisticalAppendix.economicMetrics.map((metric, idx) => (
                      <div key={idx} className="p-3 bg-gold-700/10 rounded-lg text-center border border-gold-700/20">
                        <p className="text-lg font-bold text-gold-700">{metric.value}</p>
                        <p className="text-xs text-platinum-400">{metric.metric}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE Relevance Assessment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="h-5 w-5 text-indigo-400" />
                    UAE Relevance Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-emerald-400 mb-2">Direct UAE Interests:</p>
                      <div className="space-y-1">
                        {uaeRelevanceAssessment.directUaeInterests.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-emerald-500/10 rounded-lg">
                            <CheckCircle className="h-3 w-3 text-emerald-400" />
                            <p className="text-xs text-platinum-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-rose-400 mb-2">Regional Competition:</p>
                      <div className="space-y-1">
                        {uaeRelevanceAssessment.regionalCompetition.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-rose-500/10 rounded-lg">
                            <AlertTriangle className="h-3 w-3 text-rose-400" />
                            <p className="text-xs text-platinum-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gold-700 mb-2">Challenges:</p>
                      <div className="space-y-1">
                        {uaeRelevanceAssessment.challenges.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-gold-700/10 rounded-lg">
                            <Lightbulb className="h-3 w-3 text-gold-700" />
                            <p className="text-xs text-platinum-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Quality Notes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Database className="h-5 w-5 text-platinum-500" />
                    Data Quality Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-emerald-500/10 rounded-lg text-center border border-emerald-500/20">
                      <p className="text-2xl font-bold text-emerald-400">{dataQualityNotes.queriesExecuted}</p>
                      <p className="text-xs text-platinum-400">Queries Executed</p>
                    </div>
                    <div className="p-4 bg-emerald-500/10 rounded-lg text-center border border-emerald-500/20">
                      <p className="text-2xl font-bold text-emerald-400">{dataQualityNotes.pagesFetched}</p>
                      <p className="text-xs text-platinum-400">Pages Fetched</p>
                    </div>
                    <div className="p-4 bg-gold-700/10 rounded-lg text-center border border-gold-700/20">
                      <p className="text-2xl font-bold text-gold-700">{dataQualityNotes.confidenceLevel}</p>
                      <p className="text-xs text-platinum-400">Confidence Level</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-sm font-bold text-platinum-400">{dataQualityNotes.verificationStatus}</p>
                      <p className="text-xs text-platinum-500">Verification Status</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Source Registry Footer */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Source Registry"
          description="Credibility assessment and source categorization"
          badge="Sources"
        >
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              <div className="p-4 bg-platinum-800/50 rounded-lg">
                <p className="text-gold-700 font-semibold text-sm mb-2">Government & Official</p>
                <div className="space-y-1">
                  {sourceRegistry.governmentOfficial.map((src, idx) => (
                    <p key={idx} className="text-xs text-platinum-400">{src.source}</p>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-platinum-800/50 rounded-lg">
                <p className="text-platinum-500 font-semibold text-sm mb-2">Academic Research</p>
                <div className="space-y-1">
                  {sourceRegistry.academicResearch.map((src, idx) => (
                    <p key={idx} className="text-xs text-platinum-400">{src.source}</p>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-platinum-800/50 rounded-lg">
                <p className="text-emerald-500 font-semibold text-sm mb-2">Media</p>
                <div className="space-y-1">
                  {sourceRegistry.media.map((src, idx) => (
                    <p key={idx} className="text-xs text-platinum-400">{src.source}</p>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-platinum-800/50 rounded-lg">
                <p className="text-indigo-400 font-semibold text-sm mb-2">Think Tanks</p>
                <div className="space-y-1">
                  {sourceRegistry.thinkTanksResearch.map((src, idx) => (
                    <p key={idx} className="text-xs text-platinum-400">{src.source}</p>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-platinum-800/50 rounded-lg">
                <p className="text-cyan-500 font-semibold text-sm mb-2">International Orgs</p>
                <div className="space-y-1">
                  {sourceRegistry.internationalOrganizations.map((src, idx) => (
                    <p key={idx} className="text-xs text-platinum-400">{src.source}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}
