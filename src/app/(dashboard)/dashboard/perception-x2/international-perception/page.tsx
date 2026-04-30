'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel, GlassCard, StatusCard } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  Gauge,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Shield,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Minus,
  Users,
  DollarSign,
  Heart,
  Eye,
  Lock,
  Vote,
  Scale,
  Leaf,
  Plane,
  Cpu,
  Award,
  Globe2,
  Banknote,
  Home,
  Flag,
  UsersRound,
  Crosshair,
} from 'lucide-react'

import {
  internationalPerceptionData,
  perceptionScorecard,
  regionalPerception,
  dimensionPerception,
  keyFindings,
} from '@/lib/data/perception/international-perception-data'

const { executionMetadata, washingtonInstituteSurvey } = internationalPerceptionData

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

function PerceptionBadge({ perception }: { perception: string }) {
  const configs: Record<string, { variant: 'success' | 'warning' | 'destructive' | 'default'; icon: React.ReactNode }> = {
    'VERY HIGH': { variant: 'success', icon: <TrendingUp className="h-3 w-3" /> },
    HIGH: { variant: 'success', icon: <TrendingUp className="h-3 w-3" /> },
    MIXED: { variant: 'warning', icon: <Minus className="h-3 w-3" /> },
    LOW: { variant: 'destructive', icon: <TrendingDown className="h-3 w-3" /> },
    'VERY LOW': { variant: 'destructive', icon: <TrendingDown className="h-3 w-3" /> },
  }
  const config = configs[perception] || { variant: 'default', icon: <Minus className="h-3 w-3" /> }
  return (
    <Badge variant={config.variant} className="gap-1">
      {config.icon}
      {perception}
    </Badge>
  )
}

function TrendBadge({ trend }: { trend: string }) {
  const configs: Record<string, { variant: 'success' | 'warning' | 'destructive' | 'default'; label: string }> = {
    'Rising': { variant: 'success', label: 'Rising' },
    Stable: { variant: 'default', label: 'Stable' },
    'Rising scrutiny': { variant: 'warning', label: 'Rising' },
    Improving: { variant: 'success', label: 'Improving' },
    'Slow progress': { variant: 'warning', label: 'Slow' },
    None: { variant: 'destructive', label: 'None' },
    'None expected': { variant: 'destructive', label: 'None' },
    'Stable/Deteriorating': { variant: 'warning', label: 'Mixed' },
    Deteriorating: { variant: 'destructive', label: 'Deteriorating' },
  }
  const config = configs[trend] || { variant: 'default', label: trend }
  return (
    <Badge variant={config.variant} className="text-xs">
      {config.label}
    </Badge>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function InternationalPerceptionPage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Radar chart data - Perception dimensions
  const radarData = [
    { name: 'Safety', score: 95, max: 100 },
    { name: 'Economy', score: 88, max: 100 },
    { name: 'Tourism', score: 92, max: 100 },
    { name: 'Soft Power', score: 82, max: 100 },
    { name: 'Happiness', score: 78, max: 100 },
    { name: 'Tech/AI', score: 85, max: 100 },
    { name: 'Military', score: 65, max: 100 },
    { name: 'Human Rights', score: 18, max: 100 },
    { name: 'Democracy', score: 15, max: 100 },
    { name: 'Press Free', score: 12, max: 100 },
    { name: 'LGBTQ', score: 5, max: 100 },
    { name: 'Environment', score: 35, max: 100 },
  ]

  // Regional perception data
  const regionalPerceptionData = [
    { region: 'USA', positive: 14, neutral: 25, negative: 61, label: 'US View of UAE' },
    { region: 'UAE Citizens', positive: 82, neutral: 10, negative: 8, label: 'UAE View of US' },
    { region: 'China', positive: 63, neutral: 22, negative: 15, label: 'China' },
    { region: 'Arab World', positive: 45, neutral: 20, negative: 35, label: 'Arab World' },
    { region: 'Europe', positive: 52, neutral: 23, negative: 25, label: 'Europe' },
    { region: 'Africa', positive: 58, neutral: 25, negative: 17, label: 'Africa' },
  ]

  // Regional favorability
  const regionalFavorability = [
    { region: 'United States', favorability: 14, color: CHART_COLORS.danger },
    { region: 'Europe', favorability: 52, color: CHART_COLORS.warning },
    { region: 'China', favorability: 63, color: CHART_COLORS.success },
    { region: 'Russia', favorability: 55, color: CHART_COLORS.emerald },
    { region: 'Arab World', favorability: 45, color: CHART_COLORS.warning },
    { region: 'Africa', favorability: 58, color: CHART_COLORS.success },
    { region: 'Latin America', favorability: 62, color: CHART_COLORS.success },
    { region: 'India', favorability: 68, color: CHART_COLORS.success },
  ]

  // Sentiment distribution for scorecard
  const positiveCount = perceptionScorecard.filter(s => s.category === 'positive').length
  const negativeCount = perceptionScorecard.filter(s => s.category === 'negative').length
  const mixedCount = perceptionScorecard.filter(s => s.category === 'mixed').length

  const sentimentDistribution = [
    { name: 'Positive', value: positiveCount, color: CHART_COLORS.success },
    { name: 'Mixed', value: mixedCount, color: CHART_COLORS.warning },
    { name: 'Negative', value: negativeCount, color: CHART_COLORS.danger },
  ]

  // US perception asymmetric
  const usAsymmetricData = [
    { category: 'UAE Citizens\nView US', positive: 82, negative: 18 },
    { category: 'US Citizens\nView UAE', positive: 14, negative: 86 },
  ]

  // China perception dimensions
  const chinaPerceptionData = [
    { dimension: 'Economic Partner', value: 62 },
    { dimension: 'Trust Reliable', value: 62 },
    { dimension: 'Development Model', value: 74 },
    { dimension: 'Security Role', value: 51 },
    { dimension: 'Cultural Ties', value: 32 },
  ]

  // Russia trade growth
  const russiaTradeData = [
    { year: 'Pre-2021', value: 4 },
    { year: '2024', value: 11.5 },
  ]

  // Safety metrics
  const safetyMetrics = [
    { metric: 'Numbeo Safety Score 2026', value: 86, max: 100, rank: '#1 globally' },
    { metric: 'Tourism Safety Score', value: 94.8, max: 100, rank: '' },
    { metric: 'Residents Feeling Safe', value: 90, max: 100, rank: '90%+' },
  ]

  // Freedom scores
  const freedomScores = [
    { index: 'Freedom House', score: 18, max: 100, label: 'Not Free' },
    { index: 'Freedom on the Net', score: 28, max: 100, label: 'Not Free' },
    { index: 'Press Freedom (RSF)', score: 16, max: 100, label: '160th/180' },
    { index: 'Democracy (BTI)', score: 25, max: 100, label: 'Autocracy' },
  ]

  // Sportswashing investments
  const sportswashingData = [
    { entity: 'Manchester City', type: 'Football', value: 100 },
    { entity: 'Emirates Airlines', type: 'Sponsorship', value: 85 },
    { entity: 'NBA Games', type: 'Events', value: 75 },
    { entity: 'UFC Hub', type: 'MMA', value: 70 },
    { entity: 'F1 Grand Prix', type: 'Events', value: 80 },
  ]

  // Soft power rankings
  const softPowerData = [
    { category: 'Overall Rank', value: 10, max: 100, suffix: '/global' },
    { category: 'Generosity', value: 2, max: 100, suffix: '/global' },
    { category: 'Future Growth', value: 3, max: 100, suffix: '/global' },
  ]

  // Economic indicators
  const economicIndicators = [
    { indicator: 'GDP', value: 514.1, unit: '$B', rank: '#4 ME' },
    { indicator: 'CPI Score', value: 69, unit: '/100', rank: '#21 global' },
    { indicator: 'Happiness Rank', value: 21, unit: '/global', rank: '#1 Arab' },
    { indicator: 'AI Target 2031', value: 91, unit: '$B', rank: '' },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">International Perception</h1>
          <p className="mt-2 text-slate-600">
            Comprehensive research on UAE global image, reputation indices, and sentiment analysis
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="gap-2">
            <Globe className="h-4 w-4" />
            {executionMetadata.queriesExecuted} Queries
          </Badge>
          <Badge variant="outline" className="gap-2">
            <Eye className="h-4 w-4" />
            {executionMetadata.urlsSuccessfullyFetched} Sources
          </Badge>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Soft Power Rank"
            value="#10"
            unit="Global"
            icon={<Globe className="h-6 w-6" />}
            gradient="indigo"
            trend="up"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Safety Ranking"
            value="#1"
            unit="World (86/100)"
            icon={<Shield className="h-6 w-6" />}
            gradient="emerald"
            trend="up"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Freedom House"
            value="18"
            unit="/100 - Not Free"
            icon={<Lock className="h-6 w-6" />}
            gradient="rose"
            trend="down"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="US View of UAE"
            value="14%"
            unit="Asymmetric perception"
            icon={<Flag className="h-6 w-6" />}
            gradient="gold"
            trend="neutral"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="glass-panel flex-wrap">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="regional">Regional Analysis</TabsTrigger>
          <TabsTrigger value="dimensions">Dimension Breakdown</TabsTrigger>
          <TabsTrigger value="rights">Rights & Freedoms</TabsTrigger>
          <TabsTrigger value="economy">Economy & Tech</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Perception Radar */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Perception Dimensions</CardTitle>
                <CardDescription>Multi-dimensional view of UAE global perception</CardDescription>
              </CardHeader>
              <CardContent>
                <RadarChart
                  data={radarData}
                  metrics={[
                    { dataKey: 'score', name: 'Score', color: CHART_COLORS.indigo },
                  ]}
                  height={320}
                  showLegend={false}
                />
              </CardContent>
            </Card>

            {/* Sentiment Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                <CardDescription>Positive vs Negative perception dimensions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <PieChart
                    data={sentimentDistribution}
                    donut={true}
                    height={220}
                    showLegend={true}
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{positiveCount}</div>
                      <div className="text-xs text-slate-500">Positive</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600">{mixedCount}</div>
                      <div className="text-xs text-slate-500">Mixed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{negativeCount}</div>
                      <div className="text-xs text-slate-500">Negative</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Perception Scorecard */}
          <GlassPanel title="Perception Scorecard" description="Complete assessment of UAE international perception across all dimensions">
            <ScrollArea className="h-[500px]">
              <div className="space-y-3 pr-4">
                {perceptionScorecard.map((item, index) => (
                  <motion.div
                    key={item.dimension}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className={`glass-card ${
                      item.category === 'positive' ? 'border-l-4 border-l-emerald-500' :
                      item.category === 'negative' ? 'border-l-4 border-l-red-500' :
                      'border-l-4 border-l-amber-500'
                    }`}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{item.dimension}</div>
                            <div className="text-sm text-slate-500 mt-1">{item.score}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <PerceptionBadge perception={item.perception} />
                            <TrendBadge trend={item.trend} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* REGIONAL ANALYSIS TAB */}
        <TabsContent value="regional" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Regional Favorability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Regional Favorability</CardTitle>
                <CardDescription>% positive view of UAE by region</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={regionalFavorability}
                  bars={[
                    { dataKey: 'favorability', name: 'Favorability %', color: CHART_COLORS.indigo },
                  ]}
                  xAxisKey="region"
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* US Asymmetric Perception */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">US-UAE Asymmetric Perception</CardTitle>
                <CardDescription>Dramatic perception gap between populations</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={usAsymmetricData}
                  bars={[
                    { dataKey: 'positive', name: 'Positive %', color: CHART_COLORS.success },
                    { dataKey: 'negative', name: 'Negative %', color: CHART_COLORS.danger },
                  ]}
                  xAxisKey="category"
                  stacked={true}
                  height={300}
                  showGrid={true}
                />
                <div className="mt-4 p-4 bg-amber-50/50 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <strong>Key Insight:</strong> 82% of UAE citizens view the US positively, while only 14% of Americans view UAE favorably. This 68-point gap represents a fundamental asymmetry in the bilateral relationship.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* China Perception */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">China-UAE Relations</CardTitle>
              <CardDescription>UAE public opinion of China (2023 survey)</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={chinaPerceptionData}
                bars={[
                  { dataKey: 'value', name: '% Agree', color: CHART_COLORS.rose },
                ]}
                xAxisKey="dimension"
                height={280}
                showGrid={true}
              />
              <div className="grid gap-4 mt-6 md:grid-cols-3">
                <div className="text-center p-4 bg-slate-50/50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">$100B</div>
                  <div className="text-sm text-slate-500">Annual trade</div>
                </div>
                <div className="text-center p-4 bg-slate-50/50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">25%</div>
                  <div className="text-sm text-slate-500">Annual growth</div>
                </div>
                <div className="text-center p-4 bg-slate-50/50 rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">BRICS</div>
                  <div className="text-sm text-slate-500">Member since 2024</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Russia Relations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Russia-UAE Strategic Partnership</CardTitle>
              <CardDescription>Trade growth and diplomatic milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3">Trade Evolution</h4>
                  <BarChart
                    data={russiaTradeData}
                    bars={[
                      { dataKey: 'value', name: '$B Trade', color: CHART_COLORS.emerald },
                    ]}
                    xAxisKey="year"
                    height={200}
                    showGrid={true}
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Key Facts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-emerald-50/50 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-emerald-600" />
                      <div>
                        <div className="font-semibold text-slate-900">Trade: $4B → $11.5B</div>
                        <div className="text-sm text-slate-500">Nearly tripled since 2021</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg">
                      <Crosshair className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-semibold text-slate-900">BRICS Member</div>
                        <div className="text-sm text-slate-500">Joined January 2024</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50/50 rounded-lg">
                      <Users className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-semibold text-slate-900">Prisoner Exchange</div>
                        <div className="text-sm text-slate-500">Mediated early 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DIMENSIONS TAB */}
        <TabsContent value="dimensions" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Safety - Positive */}
            <Card className="border-l-4 border-l-emerald-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  Safety
                </CardTitle>
                <CardDescription>World-leading safety perception</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Gauge
                  value={86}
                  max={100}
                  label="Numbeo Score"
                  color={CHART_COLORS.emerald}
                  height={180}
                />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Global Rank</span>
                    <span className="font-semibold">#1 (2026)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Tourism Safety</span>
                    <span className="font-semibold">94.8/100</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Feel Safe</span>
                    <span className="font-semibold">90%+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soft Power */}
            <Card className="border-l-4 border-l-indigo-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-indigo-600" />
                  Soft Power
                </CardTitle>
                <CardDescription>Global influence ranking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Gauge
                  value={10}
                  max={50}
                  label="Global Rank"
                  color={CHART_COLORS.indigo}
                  height={180}
                />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Overall Rank</span>
                    <span className="font-semibold">#10 globally</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Generosity</span>
                    <span className="font-semibold">#2 globally</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Future Growth</span>
                    <span className="font-semibold">#3 globally</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Happiness */}
            <Card className="border-l-4 border-l-gold-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-amber-500" />
                  Happiness
                </CardTitle>
                <CardDescription>World Happiness Report 2026</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Gauge
                  value={68}
                  max={100}
                  label="Score /10"
                  color={CHART_COLORS.gold}
                  height={180}
                />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Global Rank</span>
                    <span className="font-semibold">#21</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Regional</span>
                    <span className="font-semibold">#1 Arab</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Score</span>
                    <span className="font-semibold">6.821/10</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sportswashing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Crosshair className="h-5 w-5 text-rose-600" />
                Sportswashing Investments
              </CardTitle>
              <CardDescription>Documented sports investments and partnerships</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={sportswashingData}
                bars={[
                  { dataKey: 'value', name: 'Investment Level', color: CHART_COLORS.rose },
                ]}
                xAxisKey="entity"
                height={280}
                showGrid={true}
              />
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-rose-50/50 rounded-lg border border-rose-200">
                  <h4 className="font-semibold text-rose-900 mb-2">HRW Statement</h4>
                  <p className="text-sm text-rose-800 italic">
                    "While NBA entertains spectators in Abu Dhabi, people will be dying in Sudan, where UAE credibly accused of providing support to abusive parties"
                  </p>
                </div>
                <div className="p-4 bg-slate-50/50 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Key Quote</h4>
                  <p className="text-sm text-slate-700 italic">
                    "What countries like Qatar and the UAE are actually buying, of course, is immunity — and that is priceless." — Detained in Dubai
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tourism */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Plane className="h-5 w-5 text-cyan-600" />
                Tourism & Safety
              </CardTitle>
              <CardDescription>Tourism as a core brand pillar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-4">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-cyan-600">11.7%</div>
                  <div className="text-sm text-slate-600 mt-1">of GDP</div>
                  <div className="text-xs text-slate-500">Tourism contribution</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-cyan-600">809K+</div>
                  <div className="text-sm text-slate-600 mt-1">Jobs</div>
                  <div className="text-xs text-slate-500">1 in 9 UAE jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-cyan-600">94.8</div>
                  <div className="text-sm text-slate-600 mt-1">/100</div>
                  <div className="text-xs text-slate-500">Safety score</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-cyan-600">#1</div>
                  <div className="text-sm text-slate-600 mt-1">Globally</div>
                  <div className="text-xs text-slate-500">Dubai reputation</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* RIGHTS & FREEDOMS TAB */}
        <TabsContent value="rights" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Freedom House Scores */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lock className="h-5 w-5 text-red-600" />
                  Freedom Scores
                </CardTitle>
                <CardDescription>International freedom indices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {freedomScores.map((item) => (
                  <div key={item.index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">{item.index}</span>
                      <span className="font-semibold">{item.score}/{item.max} - {item.label}</span>
                    </div>
                    <Progress
                      value={(item.score / item.max) * 100}
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Human Rights Cases */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg">Documented Human Rights Issues</CardTitle>
                <CardDescription>Mass trials and political prisoners</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[280px]">
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50/50 rounded-lg border border-red-200">
                      <div className="font-semibold text-slate-900">Mass Trials</div>
                      <div className="text-sm text-slate-600 mt-1">84 defendants (Dec 2023-Jul 2024)</div>
                      <div className="text-sm text-slate-600">43 sentenced to life, 10 got 10-15 years</div>
                    </div>
                    <div className="p-3 bg-red-50/50 rounded-lg border border-red-200">
                      <div className="font-semibold text-slate-900">Ahmed Mansoor</div>
                      <div className="text-sm text-slate-600 mt-1">Emirati activist</div>
                      <div className="text-sm text-slate-600">Imprisoned in isolation since March 2017</div>
                    </div>
                    <div className="p-3 bg-red-50/50 rounded-lg border border-red-200">
                      <div className="font-semibold text-slate-900">Nasser bin Ghaith</div>
                      <div className="text-sm text-slate-600 mt-1">Academic</div>
                      <div className="text-sm text-slate-600">Life sentence for social media posts</div>
                    </div>
                    <div className="p-3 bg-red-50/50 rounded-lg border border-red-200">
                      <div className="font-semibold text-slate-900">LGBTQ Status</div>
                      <div className="text-sm text-slate-600 mt-1">Death penalty for homosexuality</div>
                      <div className="text-sm text-slate-600">No protections; no organizations allowed</div>
                    </div>
                    <div className="p-3 bg-red-50/50 rounded-lg border border-red-200">
                      <div className="font-semibold text-slate-900">Women's Rights</div>
                      <div className="text-sm text-slate-600 mt-1">Male guardianship remains</div>
                      <div className="text-sm text-slate-600">Marital rape not criminalized</div>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Media Censorship */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Eye className="h-5 w-5 text-slate-600" />
                Media Censorship
              </CardTitle>
              <CardDescription>Freedom on the Net 2022 - Score: 28/100 "Not Free"</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-3">
                  <h4 className="font-semibold">Blocked VoIP Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {['WhatsApp', 'Facebook Video', 'Viber', 'FaceTime', 'Discord', 'Skype'].map((item) => (
                      <Badge key={item} variant="outline">{item}</Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Blocked Content</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Al Jazeera</Badge>
                    <Badge variant="outline">Middle East Eye</Badge>
                    <Badge variant="outline">LGBT+ Sites (51)</Badge>
                    <Badge variant="outline">HR Organizations</Badge>
                  </div>
                </div>
                <div className="text-center p-4 bg-slate-50/50 rounded-lg">
                  <div className="text-3xl font-bold text-slate-900">883</div>
                  <div className="text-sm text-slate-600">Websites blocked</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50/50 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2">Social Media Manipulation</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="text-sm">
                    <span className="font-semibold">Sep 2019:</span> Twitter removed 4,200+ pro-UAE political spam accounts
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">Apr 2020:</span> Twitter removed ~9,000 pro-UAE coronavirus propaganda accounts
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Democracy Score */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Vote className="h-5 w-5 text-slate-600" />
                Democracy & Political System
              </CardTitle>
              <CardDescription>BTI 2026 Assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-4">
                <div className="text-center p-4 bg-slate-50/50 rounded-lg">
                  <div className="text-3xl font-bold text-slate-900">4.0</div>
                  <div className="text-sm text-slate-600">/ 10</div>
                  <div className="text-xs text-slate-500">Political Transformation</div>
                </div>
                <div className="text-center p-4 bg-slate-50/50 rounded-lg">
                  <div className="text-3xl font-bold text-slate-900">8.0</div>
                  <div className="text-sm text-slate-600">/ 10</div>
                  <div className="text-xs text-slate-500">Economic Transformation</div>
                </div>
                <div className="text-center p-4 bg-slate-50/50 rounded-lg">
                  <div className="text-3xl font-bold text-slate-900">#85</div>
                  <div className="text-sm text-slate-600">/ 137</div>
                  <div className="text-xs text-slate-500">Political Rank</div>
                </div>
                <div className="text-center p-4 bg-slate-50/50 rounded-lg">
                  <div className="text-3xl font-bold text-slate-900">Autocracy</div>
                  <div className="text-sm text-slate-600">Federal Absolute Monarchy</div>
                  <div className="text-xs text-slate-500">No political parties</div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-slate-50/50 rounded-lg border border-slate-200">
                <p className="text-sm text-slate-700 italic">
                  "No progress is expected on either front over the coming years" — BTI 2026
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ECONOMY & TECH TAB */}
        <TabsContent value="economy" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-4">
            {/* GDP */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <DollarSign className="h-8 w-8 mx-auto text-emerald-600 mb-2" />
                  <div className="text-3xl font-extrabold text-slate-900">$514B</div>
                  <div className="text-sm text-slate-600 mt-1">GDP 2024</div>
                  <div className="text-xs text-emerald-600 mt-1">+4% growth</div>
                </div>
              </CardContent>
            </Card>

            {/* CPI */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Scale className="h-8 w-8 mx-auto text-indigo-600 mb-2" />
                  <div className="text-3xl font-extrabold text-slate-900">69/100</div>
                  <div className="text-sm text-slate-600 mt-1">Corruption Index</div>
                  <div className="text-xs text-indigo-600 mt-1">#21 globally, #1 MENA</div>
                </div>
              </CardContent>
            </Card>

            {/* AI Target */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Cpu className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                  <div className="text-3xl font-extrabold text-slate-900">$91B</div>
                  <div className="text-sm text-slate-600 mt-1">AI Target 2031</div>
                  <div className="text-xs text-purple-600 mt-1">20% non-oil GDP</div>
                </div>
              </CardContent>
            </Card>

            {/* Defense */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto text-slate-600 mb-2" />
                  <div className="text-3xl font-extrabold text-slate-900">$23.5B</div>
                  <div className="text-sm text-slate-600 mt-1">Defense Budget</div>
                  <div className="text-xs text-slate-600 mt-1">#54 Global Firepower</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Investments */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Cpu className="h-5 w-5 text-purple-600" />
                AI & Technology Investments
              </CardTitle>
              <CardDescription>Major investment vehicles and partnerships</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 bg-purple-50/50 rounded-lg border border-purple-200">
                  <div className="font-semibold text-purple-900">MGX</div>
                  <div className="text-2xl font-bold text-purple-700">$100B</div>
                  <div className="text-xs text-purple-600">AI investment vehicle</div>
                </div>
                <div className="p-4 bg-indigo-50/50 rounded-lg border border-indigo-200">
                  <div className="font-semibold text-indigo-900">Stargate Project</div>
                  <div className="text-2xl font-bold text-indigo-700">$500B</div>
                  <div className="text-xs text-indigo-600">MGX as equity funder</div>
                </div>
                <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-900">Microsoft-G42</div>
                  <div className="text-2xl font-bold text-blue-700">$1.5B</div>
                  <div className="text-xs text-blue-600">Investment deal</div>
                </div>
                <div className="p-4 bg-cyan-50/50 rounded-lg border border-cyan-200">
                  <div className="font-semibold text-cyan-900">Khazna Data Centers</div>
                  <div className="text-2xl font-bold text-cyan-700">850 MW</div>
                  <div className="text-xs text-cyan-600">Projected 2029 capacity</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Environmental */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Leaf className="h-5 w-5 text-emerald-600" />
                Environmental Record
              </CardTitle>
              <CardDescription>COP28 and sustainability controversies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-semibold">UAE Climate Targets</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Clean energy by 2050</span>
                      <span className="font-semibold">50%</span>
                    </div>
                    <Progress value={50} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Carbon reduction by 2050</span>
                      <span className="font-semibold">70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                </div>
                <div className="p-4 bg-amber-50/50 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-2">Greenwashing Concerns</h4>
                  <ul className="text-sm text-amber-800 space-y-1">
                    <li>• COP28 president also ADNOC CEO</li>
                    <li>• ADNOC expansion: 3M → 5M bbl/day by 2030</li>
                    <li>• Leaked: hydrocarbon deal plans during COP28</li>
                    <li>• Fossil fuel expansion contradicts green claims</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
