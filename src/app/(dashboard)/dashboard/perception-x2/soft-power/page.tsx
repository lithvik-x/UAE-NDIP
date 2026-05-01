// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
  }))

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
          <Badge variant="default" className="mb-2 bg-gradient-to-r from-gold to-yellow-600 text-navy-500-950">
            <Sparkles className="h-4 w-4 mr-1" />
            SOFT POWER
          </Badge>
          <h1 className="text-4xl font-extrabold font-rajdhani gradient-text-gold-700">UAE Soft Power & Public Diplomacy</h1>
          <p className="mt-2 text-platinum-500-400 font-rajdhani">
            {executionMetadata.classification} | Source: {executionMetadata.outputFile}
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500-500">
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
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-500-950 gap-2">
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
                <p className="text-platinum-500-200 font-rajdhani text-lg">{executiveSummary.keyDifferentiator}</p>
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
                <p className="text-platinum-500-200 text-sm">{executiveSummary.strategy}</p>
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
                <p className="text-platinum-500-200 text-sm">{executiveSummary.foundingPrinciples}</p>
              </CardContent>
            </Card>
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
          <TabsTrigger value="humanitarian">Humanitarian</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="digital">Digital</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
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
                        <p className="text-xs text-platinum-500-500">Positive</p>
                      </div>
                      <div className="text-center p-2 bg-rose-500/20 rounded-lg">
                        <p className="text-lg font-bold text-rose-500">25%</p>
                        <p className="text-xs text-platinum-500-500">Negative</p>
                      </div>
                      <div className="text-center p-2 bg-platinum/20 rounded-lg">
                        <p className="text-lg font-bold text-platinum-500">30%</p>
                        <p className="text-xs text-platinum-500-500">Neutral</p>
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
                        <p className="text-sm text-platinum-500-200 mt-1">{pillar.pillar}</p>
                        <p className="text-xs text-platinum-500-500 mt-1">{pillar.keyInstruments}</p>
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
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {globalRankings.historicalProgression.slice(-3).map((item, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg text-center">
                        <p className="text-2xl font-bold text-gold-700">{item.year}</p>
                        <p className="text-sm text-platinum-500-400 mt-1">{item.uaeRank}</p>
                        <p className="text-xs text-platinum-500-500 mt-1">{item.notableEvent}</p>
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
                    {coreMetricsDashboard.slice(0, 8).map((metric, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700 text-center">
                        <p className="text-2xl font-bold text-gold-700">{metric.value}</p>
                        <p className="text-sm text-platinum-500-400 mt-1">{metric.metric}</p>
                        <p className="text-xs text-platinum-500-500">Rank: {metric.rank}</p>
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
                        <span className="text-platinum-500-400">Launched</span>
                        <span className="text-gold-700 font-semibold">{softPowerStrategy.institutionalFramework.softPowerCouncil.launched}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-500-400">Venue</span>
                        <span className="text-platinum-500-200">{softPowerStrategy.institutionalFramework.softPowerCouncil.venue}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-gold-700/10 rounded-lg border border-gold-700/30">
                      <p className="text-sm text-platinum-500-300 italic">"{softPowerStrategy.institutionalFramework.softPowerCouncil.objective}"</p>
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
                          <p className="text-sm text-platinum-500-200">{obj}</p>
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
                          <p className="text-platinum-500-200 text-sm">{item.event}</p>
                          {item.official !== '-' && (
                            <p className="text-platinum-500-500 text-xs">{item.official}</p>
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
                  <p className="text-platinum-500-200 italic text-lg">"{softPowerStrategy.foundationalPrinciples}"</p>
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
                        <p className="text-xs text-platinum-500-400 mt-1">{museum.location}</p>
                        <div className="mt-2 space-y-1">
                          <p className="text-xs text-platinum-500-500">
                            <span className="text-platinum-500-400">Opened:</span> {museum.opened}
                          </p>
                          {museum.partnership !== '-' && (
                            <p className="text-xs text-platinum-500-500">
                              <span className="text-platinum-500-400">Partner:</span> {museum.partnership}
                            </p>
                          )}
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
                    {culturalDiplomacy.culturalPrograms.slice(0, 6).map((program, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs border-gold-700/30 text-gold-700">
                            {program.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-platinum-500-200 mt-2">{program.program}</p>
                        <p className="text-xs text-platinum-500-500 mt-1">{program.scope}</p>
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
                      <p className="text-sm text-platinum-500-400">Countries</p>
                    </div>
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald-500">{culturalDiplomacy.expo2020Impact.totalVisits}</p>
                      <p className="text-sm text-platinum-500-400">Total Visits</p>
                    </div>
                    <div className="p-4 bg-platinum/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum-500">$20.6B</p>
                      <p className="text-sm text-platinum-500-400">Brand Value Contribution</p>
                    </div>
                    <div className="p-4 bg-navy/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-navy-500">2/3</p>
                      <p className="text-sm text-platinum-500-400">of Top 10 Improvement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Research Finding */}
              <Card className="glass-card border-l-4 border-l-gold">
                <CardContent className="pt-6">
                  <p className="text-platinum-500-300 italic text-sm">"{culturalDiplomacy.researchFinding}"</p>
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
                    <div className="p-4 bg-rose-500/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-rose-500">3rd</p>
                      <p className="text-sm text-platinum-500-400">Largest Donor (GNI)</p>
                    </div>
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-gold-700">Top 5</p>
                      <p className="text-sm text-platinum-500-400">State Donors (USD)</p>
                    </div>
                    <div className="p-4 bg-emerald-500/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-emerald-500">18%</p>
                      <p className="text-sm text-platinum-500-400">Aid as % of GNI</p>
                    </div>
                    <div className="p-4 bg-platinum/20 rounded-lg text-center">
                      <p className="text-3xl font-bold text-platinum-500">6x</p>
                      <p className="text-sm text-platinum-500-400">Top Donor Relative to GNP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Aid Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gold-700" />
                    Regional Aid Distribution
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
                          <span className="text-platinum-500-200">{region.region}</span>
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
                    Crisis-Specific Aid
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
                        <p className="text-xs text-platinum-500-500 mt-1">{crisis.period}</p>
                        <p className="text-xs text-platinum-500-400 mt-2">{crisis.notes}</p>
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
                      <p className="text-xs text-platinum-500-400">Global Vaccine Donor</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-gold-700">200M</p>
                      <p className="text-xs text-platinum-500-400">Annual Production Target</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum-500">6B+</p>
                      <p className="text-xs text-platinum-500-400">Hope Consortium Capacity</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <CheckCircle className="h-8 w-8 text-emerald-500 mx-auto" />
                      <p className="text-xs text-platinum-500-400 mt-1">First in Region (Sinopharm/G42)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Institutional Framework */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-platinum-500" />
                    Institutional Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {humanitarianHealthDiplomacy.institutionalFramework.map((org, idx) => (
                      <div key={idx} className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-platinum-500-200 font-semibold text-sm">{org.organization}</p>
                        <p className="text-xs text-gold-700 mt-1">{org.role}</p>
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
                    Major Sports Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {sportsDiplomacy.majorEvents.map((event, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <h4 className="font-bold text-gold-700 text-sm">{event.event}</h4>
                        <p className="text-xs text-platinum-500-400 mt-1">{event.location}</p>
                        <p className="text-xs text-platinum-500-500 mt-2">{event.note || 'Sports Event'}</p>
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
                    Jiu-Jitsu Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-gold-700/20 rounded-lg text-center">
                      <p className="text-2xl font-bold text-gold-700">2008</p>
                      <p className="text-xs text-platinum-500-400">Designated National Sport</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum-500">~200,000</p>
                      <p className="text-xs text-platinum-500-400">Emiratis Practicing</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum-500">130+</p>
                      <p className="text-xs text-platinum-500-400">Jiu-Jitsu Schools</p>
                    </div>
                    <div className="p-4 bg-platinum-800/50 rounded-lg text-center">
                      <p className="text-2xl font-bold text-platinum-500">76,000+</p>
                      <p className="text-xs text-platinum-500-400">Students Enrolled (by 2016)</p>
                    </div>
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
                            <p className="text-platinum-500-200 font-semibold">{inv.entity}</p>
                            <p className="text-xs text-platinum-500-500 mt-1">{inv.year}</p>
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
                    <p className="text-sm text-platinum-500-400">European Clubs Training in Dubai:</p>
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

              {/* Sportswashing Analysis */}
              <Card className="glass-card border-l-4 border-l-platinum">
                <CardContent className="pt-6">
                  <p className="text-platinum-500-300 italic text-sm">"{sportsDiplomacy.sportswashingAnalysis}"</p>
                  <p className="text-gold-700 text-sm mt-3 font-semibold">— Dr. Seth Perkin</p>
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
                    <Rocket className="h-5 w-5 text-navy-500" />
                    AI Strategy Initiatives
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {digitalTechnologyDiplomacy.aiStrategy.map((initiative, idx) => (
                      <div key={idx} className="p-4 bg-navy/20 rounded-lg border border-navy/30">
                        <p className="text-navy-500 font-semibold text-sm">{initiative.initiative}</p>
                        <p className="text-xs text-platinum-500-400 mt-1">{initiative.launch}</p>
                        <p className="text-xs text-platinum-500-500 mt-2">{initiative.goal}</p>
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
                          <p className="text-platinum-500-200 font-semibold">{platform.platform}</p>
                          <Badge
                            variant="outline"
                            className={platform.ministryUse === 'Primary' ? 'border-gold-700/30 text-gold-700' : 'border-platinum/30 text-platinum-500'}
                          >
                            {platform.ministryUse}
                          </Badge>
                        </div>
                        <p className="text-xs text-platinum-500-500 mt-2">{platform.strategicPurpose}</p>
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
                        <p className="text-sm text-platinum-500-200">{goal}</p>
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
                        <p className="text-xs text-platinum-500-400 mt-1">{challenge.issues}</p>
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
                        <p className="text-sm text-platinum-500-200">{rec}</p>
                      </div>
                    ))}
                  </div>
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
                        <p className="text-xs text-platinum-500-400 mt-2">{challenge.description.replace(/"/g, '')}</p>
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
                        <p className="text-platinum-500-200 font-semibold text-sm">{challenge.challenge}</p>
                        <p className="text-xs text-platinum-500-400 mt-1">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Geopolitical Strategy */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-platinum-500" />
                    Geopolitical Strategy Evolution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[geopoliticalStrategy.phase1SoftPowerFoundation, geopoliticalStrategy.phase2AssertiveShift, geopoliticalStrategy.phase3Recalibration, geopoliticalStrategy.phase4ContinuedHardPower].map((phase, idx) => (
                      <div key={idx} className="p-4 bg-platinum-800/50 rounded-lg border border-platinum-700">
                        <h4 className="text-gold-700 font-semibold text-sm">
                          {idx === 0 && 'Phase 1: Soft Power Foundation'}
                          {idx === 1 && 'Phase 2: Assertive Shift (Post-2011)'}
                          {idx === 2 && 'Phase 3: Recalibration (2021-2023)'}
                          {idx === 3 && 'Phase 4: Continued Hard Power (2023-Present)'}
                        </h4>
                        <div className="mt-2 space-y-1">
                          {phase.elements?.map((el, i) => (
                            <p key={i} className="text-xs text-platinum-500-400">
                              <span className="text-platinum-500-300">{el.element}:</span> {el.detail}
                            </p>
                          )) ||
                          phase.actions?.map((action, i) => (
                            <p key={i} className="text-xs text-platinum-500-400">
                              <span className="text-platinum-500-300">{action.action}:</span> {action.detail}
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
                    Military Capabilities - "Little Sparta"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-xs text-platinum-500-400">Nickname</p>
                        <p className="text-platinum-500-200 font-semibold">"{geopoliticalStrategy.militaryCapabilities.nickname}"</p>
                        <p className="text-xs text-platinum-500-500">from US Defense Secretary James Mattis</p>
                      </div>
                      <div className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-xs text-platinum-500-400">Army Quality</p>
                        <p className="text-platinum-500-200 text-sm">{geopoliticalStrategy.militaryCapabilities.armyQuality}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                        <p className="text-xs text-rose-400">EDI Group Ranking</p>
                        <p className="text-platinum-500-200 font-semibold">22nd among global arms firms</p>
                      </div>
                      <div className="p-3 bg-platinum-800/50 rounded-lg">
                        <p className="text-xs text-platinum-500-400">Capabilities</p>
                        <p className="text-platinum-500-200 text-sm">Fifth-gen fighter jets, drones, air defense</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Quote */}
              <Card className="glass-card border-l-4 border-l-gold">
                <CardContent className="pt-6">
                  <p className="text-platinum-500-300 italic text-lg">"{geopoliticalStrategy.keyQuote}"</p>
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
                  <div className="space-y-4">
                    {sentimentAnalysis.byTopic.slice(0, 6).map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-platinum-800/50 rounded-lg">
                        <span className="text-platinum-500-200 text-sm">{item.topic}</span>
                        <Badge
                          variant="outline"
                          className={
                            item.sentiment === 'Positive' ? 'border-emerald-500/30 text-emerald-500' :
                            item.sentiment === 'Negative' ? 'border-rose-500/30 text-rose-500' :
                            'border-platinum/30 text-platinum-500'
                          }
                        >
                          {item.sentiment}
                        </Badge>
                      </div>
                    ))}
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-platinum-800/50 rounded-lg">
              <p className="text-gold-700 font-semibold text-sm mb-2">Government & Official</p>
              <div className="space-y-1">
                {sourceRegistry.governmentOfficial.slice(0, 3).map((src, idx) => (
                  <p key={idx} className="text-xs text-platinum-500-400">{src.source}</p>
                ))}
              </div>
            </div>
            <div className="p-4 bg-platinum-800/50 rounded-lg">
              <p className="text-platinum-500 font-semibold text-sm mb-2">Academic Research</p>
              <div className="space-y-1">
                {sourceRegistry.academicResearch.slice(0, 3).map((src, idx) => (
                  <p key={idx} className="text-xs text-platinum-500-400">{src.type}</p>
                ))}
              </div>
            </div>
            <div className="p-4 bg-platinum-800/50 rounded-lg">
              <p className="text-emerald-500 font-semibold text-sm mb-2">Media</p>
              <div className="space-y-1">
                {sourceRegistry.media.slice(0, 3).map((src, idx) => (
                  <p key={idx} className="text-xs text-platinum-500-400">{src.source}</p>
                ))}
              </div>
            </div>
            <div className="p-4 bg-platinum-800/50 rounded-lg">
              <p className="text-navy-500 font-semibold text-sm mb-2">International Orgs</p>
              <div className="space-y-1">
                {sourceRegistry.internationalOrganizations.slice(0, 3).map((src, idx) => (
                  <p key={idx} className="text-xs text-platinum-500-400">{src.source}</p>
                ))}
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}
