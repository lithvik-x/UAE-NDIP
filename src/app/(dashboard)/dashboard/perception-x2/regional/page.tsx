// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
  fadeInUp,
  staggerContainer,
  cardHover,
} from '@/lib/animations/variants'
import {
  Globe,
  MapPin,
  TrendingUp,
  TrendingDown,
  Users,
  Building,
  Flag,
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Minus,
  Eye,
  Heart,
  DollarSign,
  Rocket,
  Award,
  ExternalLink,
  ChevronRight,
} from 'lucide-react'

// Import regional perception data
import {
  regionalPerception,
  dimensionPerception,
  perceptionScorecard,
  keyFindings,
  washingtonInstituteSurvey,
  regionalSummary,
  tradePartnershipData,
  dashboardMetrics,
} from '@/lib/data/perception/regional-data'

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function RegionalPerceptionPage() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  // Calculate sentiment distribution
  const positiveCount = perceptionScorecard.filter(p => p.category === 'positive').length
  const negativeCount = perceptionScorecard.filter(p => p.category === 'negative').length
  const mixedCount = perceptionScorecard.filter(p => p.category === 'mixed').length

  // Get sentiment color
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'VERY HIGH':
      case 'HIGH':
      case 'POSITIVE':
        return 'text-emerald-400'
      case 'VERY LOW':
      case 'LOW':
      case 'NEGATIVE':
        return 'text-rose-400'
      default:
        return 'text-amber-400'
    }
  }

  const getSentimentBg = (sentiment: string) => {
    switch (sentiment) {
      case 'VERY HIGH':
      case 'HIGH':
      case 'POSITIVE':
        return 'bg-emerald-500/20'
      case 'VERY LOW':
      case 'LOW':
      case 'NEGATIVE':
        return 'bg-rose-500/20'
      default:
        return 'bg-amber-500/20'
    }
  }

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'VERY HIGH':
      case 'HIGH':
      case 'POSITIVE':
        return <CheckCircle className="h-4 w-4 text-emerald-400" />
      case 'VERY LOW':
      case 'LOW':
      case 'NEGATIVE':
        return <XCircle className="h-4 w-4 text-rose-400" />
      default:
        return <Minus className="h-4 w-4 text-amber-400" />
    }
  }

  // Perception scorecard chart data
  const scorecardByCategory = [
    { category: 'Positive', count: positiveCount, color: CHART_COLORS.emerald },
    { category: 'Mixed', count: mixedCount, color: CHART_COLORS.gold },
    { category: 'Negative', count: negativeCount, color: CHART_COLORS.rose },
  ]

  // Regional sentiment data for pie chart
  const regionalSentimentData = regionalSummary.map((r, i) => ({
    name: r.region,
    value: r.sentiment === 'POSITIVE' ? 3 : r.sentiment === 'NEGATIVE' ? 1 : 2,
    color: r.sentiment === 'POSITIVE' ? CHART_COLORS.emerald : r.sentiment === 'NEGATIVE' ? CHART_COLORS.rose : CHART_COLORS.gold,
  }))

  // Trade partnership chart data
  const tradeChartData = tradePartnershipData.map(t => ({
    country: t.country,
    volume: t.tradeVolume,
    trend: t.trend,
  }))

  // US asymmetric perception data
  const usPerceptionData = [
    { label: 'UAE Citizens View US', value: 82, color: CHART_COLORS.navy },
    { label: 'US Citizens View UAE', value: 14, color: CHART_COLORS.rose },
  ]

  // Dimension perception radar data
  const radarData = [
    { dimension: 'Safety', value: 95 },
    { dimension: 'Economy', value: 88 },
    { dimension: 'Tourism', value: 90 },
    { dimension: 'Human Rights', value: 18 },
    { dimension: 'Press Freedom', value: 15 },
    { dimension: 'Military', value: 72 },
  ]

  return (
    <motion.div
      className="space-y-8 p-8"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div variants={fadeInUp} className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">PERCEPTION</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">
            Regional Perception
          </h1>
          <p className="mt-2 text-platinum-400">
            UAE's international perception across global regions and bilateral relationships
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Globe className="h-4 w-4" />
            Global View
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <MapPin className="h-4 w-4" />
            Regional Analysis
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div variants={fadeInUp} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Global Soft Power"
          value="#10"
          subtitle="World's Top 10"
          icon={<Award className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Safety Score"
          value="86"
          previousValue={84}
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Happiness Rank"
          value="#21"
          subtitle="Highest in Arab World"
          icon={<Heart className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Trade Volume"
          value="$100B"
          subtitle="With China (Top Partner)"
          icon={<DollarSign className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="regions">Regional Analysis</TabsTrigger>
          <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
          <TabsTrigger value="bilateral">Bilateral Relations</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Perception Scorecard" description="UAE perception across key dimensions">
              <div className="space-y-6">
                {/* Sentiment Distribution */}
                <div className="grid gap-6 lg:grid-cols-3">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani">Sentiment Distribution</CardTitle>
                      <CardDescription>By perception category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={scorecardByCategory.map((c, i) => ({
                          name: c.category,
                          value: c.count,
                          color: c.color,
                        }))}
                        height={220}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani">Regional Sentiment</CardTitle>
                      <CardDescription>By global region</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={regionalSummary.map(r => ({
                          region: r.region,
                          score: r.sentiment === 'POSITIVE' ? 80 : r.sentiment === 'NEGATIVE' ? 30 : 55,
                        }))}
                        xAxisKey="region"
                        bars={[
                          { dataKey: 'score', name: 'Sentiment', color: CHART_COLORS.gold },
                        ]}
                        height={220}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani">Trade Partnerships</CardTitle>
                      <CardDescription>Top trading partners by volume</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={tradeChartData}
                        xAxisKey="country"
                        bars={[
                          { dataKey: 'volume', name: 'Volume Index', color: CHART_COLORS.navy },
                        ]}
                        height={220}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Key Findings */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani">Key Findings</CardTitle>
                    <CardDescription>Synthesized insights from regional perception research</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-4">
                        {keyFindings.map((finding, index) => (
                          <motion.div
                            key={finding.id}
                            variants={cardHover}
                            className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 hover:bg-platinum-800/70 transition-colors"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20">
                                  <span className="text-sm font-bold text-gold">{finding.id}</span>
                                </div>
                                <div>
                                  <p className="font-semibold text-platinum-200 font-rajdhani">{finding.finding}</p>
                                  <p className="text-sm text-platinum-400">{finding.uaeRelevance}</p>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-platinum-300 ml-11">{finding.summary}</p>
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

        {/* Regional Analysis Tab */}
        <TabsContent value="regions" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Regional Perception Analysis" description="Detailed breakdown by global region">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* United States */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <Flag className="h-5 w-5 text-navy" />
                        United States
                      </CardTitle>
                      <CardDescription>Asymmetric perception analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-platinum-800/50 p-4">
                          <p className="text-sm text-platinum-400 mb-3">Asymmetric Perception</p>
                          <BarChart
                            data={usPerceptionData}
                            xAxisKey="label"
                            bars={[
                              { dataKey: 'value', name: 'Positive %', color: CHART_COLORS.gold },
                            ]}
                            height={180}
                            showGrid={true}
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <span className="text-sm text-platinum-300">UAE Citizens View US</span>
                            <Badge variant="outline" className="text-emerald">82% Positive</Badge>
                          </div>
                          <div className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <span className="text-sm text-platinum-300">US Citizens View UAE</span>
                            <Badge variant="outline" className="text-rose">14% Positive</Badge>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-platinum-300 mb-2">Key Concerns</p>
                          <div className="space-y-1">
                            {regionalPerception.unitedStates.concerns.slice(0, 3).map((concern, i) => (
                              <p key={i} className="text-xs text-platinum-400 flex items-start gap-2">
                                <AlertTriangle className="h-3 w-3 text-rose-400 mt-0.5 shrink-0" />
                                {concern}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Europe */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <Building className="h-5 w-5 text-navy" />
                        Europe
                      </CardTitle>
                      <CardDescription>Strategic partnership with complications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg bg-platinum-800/50 p-4">
                          <p className="text-sm font-semibold text-gold mb-2">Strategic Partnership</p>
                          <div className="space-y-2 text-sm">
                            <p className="text-platinum-300">Status: <span className="text-emerald">Active</span></p>
                            <p className="text-platinum-300">Priorities: <span className="text-gold">Digitalisation, AI</span></p>
                            <p className="text-platinum-300">Framework: <span className="text-gold">EU-UAE SPA (Dec 2025)</span></p>
                          </div>
                        </div>
                        <div className="rounded-lg bg-rose-500/10 border border-rose-500/30 p-4">
                          <p className="text-sm font-semibold text-rose-400 mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            Shadow Side
                          </p>
                          <p className="text-xs text-platinum-300 mb-2">
                            {regionalPerception.europe.shadowSide.quote}
                          </p>
                          <p className="text-xs text-platinum-400 italic">
                            — {regionalPerception.europe.shadowSide.quoteAuthor}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-platinum-300">Documented Meetings</p>
                          {regionalPerception.europe.shadowSide.farRightCoordination.documentedMeetings.map((meeting, i) => (
                            <div key={i} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-2">
                              <span className="text-xs text-platinum-300">{meeting.person}</span>
                              <Badge variant="outline" className="text-xs">{meeting.date}</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* China */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-rose-500" />
                        China
                      </CardTitle>
                      <CardDescription>Strategic neutrality with strong trade</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                            <p className="text-2xl font-bold text-gold">$100B</p>
                            <p className="text-xs text-platinum-400">Annual Trade</p>
                          </div>
                          <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                            <p className="text-2xl font-bold text-emerald">+25%</p>
                            <p className="text-xs text-platinum-400">YoY Growth</p>
                          </div>
                        </div>
                        <div className="rounded-lg bg-platinum-800/50 p-4">
                          <p className="text-sm font-semibold text-gold mb-2">UAE Public Opinion (2023)</p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-platinum-300">Positive view of China</span>
                              <span className="text-sm font-bold text-emerald">63%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-platinum-300">Trust reliable partner</span>
                              <span className="text-sm font-bold text-emerald">62%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-platinum-300">Development model positive</span>
                              <span className="text-sm font-bold text-emerald">74%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Russia */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <Scale className="h-5 w-5 text-rose-500" />
                        Russia
                      </CardTitle>
                      <CardDescription>Strategic partnership deepening</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                            <p className="text-2xl font-bold text-gold">$11.5B</p>
                            <p className="text-xs text-platinum-400">Trade (2024)</p>
                          </div>
                          <div className="rounded-lg bg-platinum-800/50 p-3 text-center">
                            <p className="text-2xl font-bold text-emerald">3x</p>
                            <p className="text-xs text-platinum-400">Growth since 2021</p>
                          </div>
                        </div>
                        <div className="rounded-lg bg-platinum-800/50 p-4">
                          <p className="text-sm font-semibold text-gold mb-2">Diplomatic Milestones</p>
                          <div className="space-y-2">
                            {regionalPerception.russia.diplomaticMilestones.slice(-3).map((milestone, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs shrink-0">{milestone.year}</Badge>
                                <span className="text-xs text-platinum-300">{milestone.event}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald border-emerald-500/30">
                          BRICS Member since January 2024
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Arab World */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                      <Globe className="h-5 w-5 text-gold" />
                      Arab World
                    </CardTitle>
                    <CardDescription>Regional dynamics and Saudi-UAE relations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-4">
                        <p className="text-sm font-semibold text-amber-400 mb-1">Overall Assessment</p>
                        <p className="text-sm text-platinum-300 italic">"{regionalPerception.arabWorld.overallAssessment}"</p>
                        <p className="text-xs text-platinum-400 mt-1">— ISPI, January 2026</p>
                      </div>

                      <div className="rounded-lg bg-rose-500/10 border border-rose-500/30 p-4">
                        <p className="text-sm font-semibold text-rose-400 mb-2">Saudi-UAE Rift</p>
                        <p className="text-xs text-platinum-300 mb-3">"{regionalPerception.arabWorld.saudUaeRift.expertQuote}"</p>
                        <div className="space-y-1">
                          {regionalPerception.arabWorld.saudUaeRift.causes.map((cause, i) => (
                            <p key={i} className="text-xs text-platinum-400 flex items-start gap-2">
                              <ChevronRight className="h-3 w-3 text-rose-400 mt-0.5 shrink-0" />
                              {cause}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg bg-platinum-800/50 p-4">
                        <p className="text-sm font-semibold text-gold mb-3">Arab Opinion Index 2025</p>
                        <p className="text-xs text-platinum-400 mb-3">Sample: {regionalPerception.arabWorld.arabOpinionIndex2025.sample}</p>
                        <div className="space-y-2">
                          {regionalPerception.arabWorld.arabOpinionIndex2025.keyMetrics.map((metric, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <span className="text-xs text-platinum-300">{metric.metric}</span>
                              <Badge variant="outline" className="text-xs">{metric.value}%</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Dimensions Tab */}
        <TabsContent value="dimensions" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Perception Dimensions" description="UAE perception across key thematic areas">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Safety */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <Shield className="h-5 w-5 text-emerald" />
                        Safety & Security
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg bg-emerald-500/20 p-4">
                          <div>
                            <p className="text-3xl font-bold text-emerald">{dimensionPerception.safety.score}</p>
                            <p className="text-sm text-platinum-400">Global Rank</p>
                          </div>
                          <Badge variant="outline" className="text-emerald border-emerald-500">World #1</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-300">Perception Score</span>
                            <span className="text-sm font-bold text-emerald">{dimensionPerception.safety.perceptionScore}/100</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-300">Residents Feeling Safe</span>
                            <span className="text-sm font-bold text-emerald">{dimensionPerception.safety.residentsFeelingSafe}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-300">OSAC Assessment</span>
                            <Badge variant="outline" className="text-xs">{dimensionPerception.safety.osacAssessment}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Human Rights */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-rose" />
                        Human Rights
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg bg-rose-500/20 p-4">
                          <div>
                            <p className="text-3xl font-bold text-rose">{dimensionPerception.humanRights.freedomHouseScore}</p>
                            <p className="text-sm text-platinum-400">Freedom House Score</p>
                          </div>
                          <Badge variant="outline" className="text-rose border-rose-500">"Not Free"</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-300">Political Rights</span>
                            <span className="text-sm font-bold text-rose">{dimensionPerception.humanRights.politicalRights}/40</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-300">Civil Liberties</span>
                            <span className="text-sm font-bold text-rose">{dimensionPerception.humanRights.civilLiberties}/60</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-300">Internet Freedom</span>
                            <span className="text-sm font-bold text-rose">{dimensionPerception.humanRights.internetFreedom}/100</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Soft Power */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <Award className="h-5 w-5 text-gold" />
                        Soft Power
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg bg-gold/20 p-4">
                          <div>
                            <p className="text-3xl font-bold text-gold">#{dimensionPerception.softPower.globalRank}</p>
                            <p className="text-sm text-platinum-400">Global Soft Power Rank</p>
                          </div>
                          <Badge variant="outline" className="text-gold border-gold-500">Rising</Badge>
                        </div>
                        <div className="space-y-2">
                          {dimensionPerception.softPower.rankings.map((rank, i) => (
                            <div key={i} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-2">
                              <span className="text-sm text-platinum-300">{rank.category}</span>
                              <Badge variant="outline" className="text-xs text-gold">{rank.rank}</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Happiness */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-rajdhani flex items-center gap-2">
                        <Heart className="h-5 w-5 text-emerald" />
                        Happiness
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg bg-emerald-500/20 p-4">
                          <div>
                            <p className="text-3xl font-bold text-emerald">#{dimensionPerception.happiness.worldRank}</p>
                            <p className="text-sm text-platinum-400">World Happiness Rank</p>
                          </div>
                          <Badge variant="outline" className="text-emerald border-emerald-500">Highest in Arab World</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-300">Score</span>
                            <span className="text-sm font-bold text-emerald">{dimensionPerception.happiness.score}/10</span>
                          </div>
                          {dimensionPerception.happiness.factors.map((factor, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <span className="text-sm text-platinum-300">{factor.factor}</span>
                              <span className="text-sm font-bold text-gold">{factor.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Full Scorecard */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani">Complete Perception Scorecard</CardTitle>
                    <CardDescription>All dimensions ranked by sentiment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[400px]">
                      <div className="space-y-2">
                        {perceptionScorecard.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 hover:bg-platinum-800/70 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              {getSentimentIcon(item.perception)}
                              <span className="text-sm font-medium text-platinum-200">{item.dimension}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className={`text-sm font-bold ${getSentimentColor(item.perception)}`}>
                                {item.perception}
                              </span>
                              <Badge variant="outline" className="text-xs">{item.score}</Badge>
                            </div>
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

        {/* Bilateral Relations Tab */}
        <TabsContent value="bilateral" className="space-y-6">
          <motion.div variants={fadeInUp}>
            <GlassPanel title="Bilateral Relations" description="US, China, Russia, and regional dynamics">
              <div className="space-y-6">
                {/* Washington Institute Survey */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani">Washington Institute Survey</CardTitle>
                    <CardDescription>UAE public opinion on key bilateral relationships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* UAE Views of US */}
                      <div className="rounded-lg bg-platinum-800/50 p-4">
                        <p className="text-sm font-semibold text-gold mb-3">UAE Views of United States</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-300">Friend</span>
                            <div className="flex items-center gap-2">
                              <div className="w-32 h-2 bg-platinum-700 rounded-full overflow-hidden">
                                <div className="h-full bg-navy rounded-full" style={{ width: '17%' }} />
                              </div>
                              <span className="text-sm font-bold text-navy">17%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-300">Security Partner</span>
                            <div className="flex items-center gap-2">
                              <div className="w-32 h-2 bg-platinum-700 rounded-full overflow-hidden">
                                <div className="h-full bg-navy rounded-full" style={{ width: '30%' }} />
                              </div>
                              <span className="text-sm font-bold text-navy">30%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-300">Economic Partner</span>
                            <div className="flex items-center gap-2">
                              <div className="w-32 h-2 bg-platinum-700 rounded-full overflow-hidden">
                                <div className="h-full bg-navy rounded-full" style={{ width: '35%' }} />
                              </div>
                              <span className="text-sm font-bold text-navy">35%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* China Perception */}
                      <div className="rounded-lg bg-platinum-800/50 p-4">
                        <p className="text-sm font-semibold text-rose-400 mb-3">China Perception</p>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-emerald">62%</p>
                            <p className="text-xs text-platinum-400">Economic Partner</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-emerald">18%</p>
                            <p className="text-xs text-platinum-400">Friend</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-emerald">10%</p>
                            <p className="text-xs text-platinum-400">Security Partner</p>
                          </div>
                        </div>
                      </div>

                      {/* Russia Perception */}
                      <div className="rounded-lg bg-platinum-800/50 p-4">
                        <p className="text-sm font-semibold text-gold mb-3">Russia Perception</p>
                        <div className="grid grid-cols-4 gap-3">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gold">42%</p>
                            <p className="text-xs text-platinum-400">Economic Partner</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gold">32%</p>
                            <p className="text-xs text-platinum-400">Security Partner</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gold">21%</p>
                            <p className="text-xs text-platinum-400">Friend</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-emerald">77%</p>
                            <p className="text-xs text-platinum-400">Support Russian Victory</p>
                          </div>
                        </div>
                      </div>

                      {/* Iran Perception */}
                      <div className="rounded-lg bg-platinum-800/50 p-4">
                        <p className="text-sm font-semibold text-rose-400 mb-3">Iran Perception</p>
                        <div className="grid grid-cols-4 gap-3">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-rose">55%</p>
                            <p className="text-xs text-platinum-400">Enemy</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-yellow">30%</p>
                            <p className="text-xs text-platinum-400">Competitor</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-emerald">15%</p>
                            <p className="text-xs text-platinum-400">Friend/Partner</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-emerald">34%</p>
                            <p className="text-xs text-platinum-400">Friend (Shia Emiratis)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Israel-Palestine */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani">Israel-Palestine Context</CardTitle>
                    <CardDescription>UAE public opinion on regional dynamics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {washingtonInstituteSurvey.israelPalestine.map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <span className="text-sm text-platinum-300 flex-1">{item.statement}</span>
                          <Badge variant="outline" className="ml-4 shrink-0">{item.percentage}%</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
