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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  TrendingUp,
  TrendingDown,
  Globe,
  Users,
  Zap,
  DollarSign,
  Briefcase,
  PieChart as PieChartIcon,
  Wallet,
  Building,
  Landmark,
  Scale,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Award,
  ChevronRight,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Minus,
  Flag,
  Shield,
  Handshake,
  ScaleIcon,
  Rocket,
  Sun,
  Leaf,
  Database,
  Cpu,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useTrendsDataArrayData,
} from '@/lib/data-loader/hooks'
import {
  geopoliticalShiftData,
  geopoliticalExtendedData,
} from '@/lib/data-loader/trends-data'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
}

// Helper function to get sentiment color
function getSentimentColor(score: number): string {
  if (score >= 0.7) return 'text-emerald-500'
  if (score >= 0.3) return 'text-emerald-400'
  if (score >= -0.2) return 'text-gold-700'
  if (score >= -0.6) return 'text-orange-500'
  return 'text-red-500'
}

function getSentimentBg(score: number): string {
  if (score >= 0.7) return 'bg-emerald-500/10 border-emerald-500/30'
  if (score >= 0.3) return 'bg-emerald-400/10 border-emerald-400/30'
  if (score >= -0.2) return 'bg-gold-500/10 border-gold-500/30'
  if (score >= -0.6) return 'bg-orange-500/10 border-orange-500/30'
  return 'bg-red-500/10 border-red-500/30'
}

function getUAEIcon(relevance: string) {
  switch (relevance) {
    case 'Critical': return <AlertTriangle className="h-4 w-4 text-red-500" />
    case 'High': return <Shield className="h-4 w-4 text-gold-700" />
    case 'Medium': return <Scale className="h-4 w-4 text-platinum-500" />
    default: return <CheckCircle className="h-4 w-4 text-platinum-400" />
  }
}

function getTrendIcon(trend: string) {
  switch (trend) {
    case 'Rising': return <TrendingUp className="h-4 w-4 text-emerald-500" />
    case 'Declining': return <TrendingDown className="h-4 w-4 text-red-500" />
    case 'Stable': return <Minus className="h-4 w-4 text-platinum-500" />
    default: return <Activity className="h-4 w-4 text-platinum-400" />
  }
}

export default function GeopoliticalTrendsPage() {
  const { data: trendsData } = useTrendsDataArrayData()

  const geoData = geopoliticalExtendedData

  // Source credibility data for chart
  const sourceCredibilityData = geoData.sourceCredibilityMatrix.map(s => ({
    name: s.source.split(' ')[0],
    credibility: s.credibility,
    tier: s.tier,
    relevance: s.uaeRelevance,
  }))

  // Multipolar statistics for chart
  const multipolarStatsData = geoData.multipolarStatistics.map(s => ({
    metric: s.metric,
    value: typeof s.value === 'string' ? parseFloat(s.value.replace(/[^0-9.]/g, '')) || 0 : s.value,
    year: s.year,
  }))

  // BRICS expansion data
  const bricsExpansionData = geoData.bricsExpansion.map(b => ({
    country: b.country,
    status: b.status,
    color: b.status === 'Full Member' ? CHART_COLORS.emerald :
           b.status === 'Undecided' ? CHART_COLORS.gold :
           b.status.includes('Withdrawn') ? CHART_COLORS.rose : CHART_COLORS.platinum,
  }))

  // Currency distribution data
  const currencyData = geoData.currencyDistribution.map(c => ({
    name: c.currency,
    value: parseFloat(c.share.replace(/[^0-9.]/g, '')),
    color: c.currency === 'US Dollar' ? CHART_COLORS.denim :
           c.currency === 'Euro' ? CHART_COLORS.indigo : CHART_COLORS.rose,
  }))

  // Topic sentiment data
  const sentimentChartData = geoData.topicSentiment.map(t => ({
    topic: t.topic.split(' ')[0] + (t.topic.split(' ')[1] || ''),
    sentiment: t.meanSentiment,
    fullTopic: t.topic,
  }))

  // Regional power data
  const regionalPowerData = geoData.entityRegistry.countries
    .filter(c => c.entity !== 'United Arab Emirates')
    .map(c => ({
      name: c.entity,
      sentiment: c.sentiment === 'Positive' ? 0.8 :
                c.sentiment === 'Very Positive' ? 1 :
                c.sentiment === 'Negative' ? -0.6 :
                c.sentiment === 'Neutral' ? 0 : 0.2,
    }))

  // Entity relationships for pie
  const entityRelationshipData = geoData.entityRegistry.countries.map(c => ({
    name: c.entity,
    value: c.uaeRelationship === 'Strongly Positive' ? 4 :
           c.uaeRelationship === 'Positive' ? 3 :
           c.uaeRelationship === 'Core alliance' ? 3 :
           c.uaeRelationship === 'Negative (confrontation)' ? 1 :
           c.uaeRelationship === 'Negative (war context)' ? 1 :
           c.uaeRelationship === 'Worsening' ? 1 :
           c.uaeRelationship === 'Neutral' ? 2 : 2,
    sentiment: c.sentiment,
  }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge variant="gold" className="mb-2">GEOPOLITICAL SHIFT</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold gradient-text-gold"
          >
            Geopolitical Shift
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-slate-400"
          >
            BRICS membership, multipolar transitions, regional realignment, US disengagement, India relations, and climate geopolitics
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Globe className="h-4 w-4" />
            View Reports
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Analyze Position
          </Button>
        </motion.div>
      </motion.div>

      {/* Enrichment Metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GlassPanel title="Research Enrichment Status" description="Data completeness from 20 sources processed">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-4 rounded-xl"
            >
              <p className="text-xs text-platinum-500">Sources Processed</p>
              <p className="mt-1 text-2xl font-bold text-gold">{geoData.executionMetadata.totalSourcesProcessed}</p>
              <p className="text-xs text-platinum-600">Total</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-4 rounded-xl"
            >
              <p className="text-xs text-platinum-500">Successfully Fetched</p>
              <p className="mt-1 text-2xl font-bold text-emerald-500">{geoData.executionMetadata.sourcesSuccessfullyFetched}</p>
              <p className="text-xs text-platinum-600">70% success rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-4 rounded-xl"
            >
              <p className="text-xs text-platinum-500">Critical UAE Relevance</p>
              <p className="mt-1 text-2xl font-bold text-red-600">{geoData.executionMetadata.uaeRelevanceCritical}</p>
              <p className="text-xs text-platinum-600">Sources</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel p-4 rounded-xl"
            >
              <p className="text-xs text-platinum-500">Failed (403/Access)</p>
              <p className="mt-1 text-2xl font-bold text-orange-600">{geoData.executionMetadata.sourcesFailed}</p>
              <p className="text-xs text-platinum-600">Blocked</p>
            </motion.div>
          </div>
        </GlassPanel>
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
            title="BRICS Trade Share"
            value="40%"
            previousValue={35}
            icon={<Globe className="h-6 w-6" />}
            gradient="denim"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="USD Reserve Share"
            value="57%"
            previousValue={62}
            icon={<DollarSign className="h-6 w-6" />}
            gradient="indigo"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="CEPA Agreements"
            value="32"
            previousValue={0}
            icon={<Handshake className="h-6 w-6" />}
            gradient="emerald"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="UAE-India Sentiment"
            value="0.9"
            previousValue={0.6}
            icon={<ScaleIcon className="h-6 w-6" />}
            gradient="gold"
            status="success"
          />
        </motion.div>
      </motion.div>

      {/* Main Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="multipolar">Multipolar Shift</TabsTrigger>
          <TabsTrigger value="brics">BRICS & De-Dollarization</TabsTrigger>
          <TabsTrigger value="regional">Regional Dynamics</TabsTrigger>
          <TabsTrigger value="india">India Relations</TabsTrigger>
          <TabsTrigger value="climate">Climate Geopolitics</TabsTrigger>
          <TabsTrigger value="entities">Entity Registry</TabsTrigger>
          <TabsTrigger value="kpis">KPIs</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="Topic Sentiment Analysis" description="Mean sentiment scores across geopolitical topics">
              <div className="space-y-4">
                {geoData.topicSentiment.map((topic, idx) => (
                  <motion.div
                    key={topic.topic}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.01 }}
                    className={`p-4 rounded-xl border ${getSentimentBg(topic.meanSentiment)}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getTrendIcon(topic.trend)}
                        <span className="text-sm font-medium text-slate-200">{topic.topic}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-lg font-bold ${getSentimentColor(topic.meanSentiment)}`}>
                          {topic.meanSentiment > 0 ? '+' : ''}{topic.meanSentiment.toFixed(1)}
                        </span>
                        <Badge variant="outline" className="text-xs">{topic.trend}</Badge>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-platinum-500">Key drivers: {topic.keyDrivers}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Source Credibility Distribution</CardTitle>
                    <CardDescription>By tier level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { tier: 'Tier 0-1', count: 3, color: CHART_COLORS.emerald },
                        { tier: 'Tier 2', count: 8, color: CHART_COLORS.denim },
                        { tier: 'Tier 3', count: 8, color: CHART_COLORS.gold },
                        { tier: 'Tier 4', count: 1, color: CHART_COLORS.rose },
                      ]}
                      xAxisKey="tier"
                      bars={[{ dataKey: 'count', name: 'Sources', color: CHART_COLORS.gold }]}
                      height={250}
                      showGrid={false}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Relevance Distribution</CardTitle>
                    <CardDescription>Across all sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={[
                        { name: 'Critical', value: geoData.executionMetadata.uaeRelevanceCritical, color: CHART_COLORS.rose },
                        { name: 'High', value: geoData.executionMetadata.uaeRelevanceHigh, color: CHART_COLORS.gold },
                        { name: 'Medium', value: geoData.executionMetadata.uaeRelevanceMedium, color: CHART_COLORS.denim },
                      ]}
                      height={250}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Findings Summary</CardTitle>
                  <CardDescription>Core geopolitical insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="glass-panel p-4 rounded-xl border border-emerald-500/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="h-5 w-5 text-emerald-500" />
                        <span className="text-sm font-medium text-slate-200">Multipolar Transition</span>
                      </div>
                      <p className="text-2xl font-bold text-gold">40%</p>
                      <p className="text-xs text-platinum-500">BRICS global trade share</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 }}
                      whileHover={{ scale: 1.03 }}
                      className="glass-panel p-4 rounded-xl border border-gold-500/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-gold-700" />
                        <span className="text-sm font-medium text-slate-200">BRICS Membership</span>
                      </div>
                      <p className="text-2xl font-bold text-gold">Jan 2024</p>
                      <p className="text-xs text-platinum-500">Full member status</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.03 }}
                      className="glass-panel p-4 rounded-xl border border-red-500/30"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <span className="text-sm font-medium text-slate-200">Saudi-UAE Tensions</span>
                      </div>
                      <p className="text-2xl font-bold text-red-600">Critical</p>
                      <p className="text-xs text-platinum-500">December 2025 confrontation</p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Multipolar Shift Tab */}
        <TabsContent value="multipolar" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="Multipolar Statistics" description="Global power shift metrics from Munich Security Report">
              <div className="space-y-4">
                {geoData.multipolarStatistics.map((stat, idx) => (
                  <motion.div
                    key={stat.metric}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-medium text-slate-200">{stat.metric}</span>
                      <p className="text-xs text-platinum-500">Year: {stat.year}</p>
                    </div>
                    <span className="text-xl font-bold text-gold">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Currency Distribution</CardTitle>
                    <CardDescription>Global reserve currency shares</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={currencyData}
                      donut={true}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Great Power Perceptions</CardTitle>
                    <CardDescription>Munich Security Index findings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {geoData.greatPowerPerceptions.map((perception, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-slate-200 flex-1">{perception.finding}</span>
                          <Badge variant="outline" className="ml-2">{perception.percentage}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">BRICS Expansion 2024</CardTitle>
                  <CardDescription>New member status</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={bricsExpansionData}
                    xAxisKey="country"
                    bars={[{ dataKey: 'status', name: 'Status', color: CHART_COLORS.gold }]}
                    height={300}
                    showGrid={false}
                  />
                </CardContent>
              </Card>
            </motion.div>

            <GlassPanel title="Multipolar Sentiment Analysis" description="Research sentiment by dimension">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {geoData.multipolarSentiment.map((sentiment, idx) => (
                  <motion.div
                    key={sentiment.dimension}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl border ${getSentimentBg(sentiment.score)}`}
                  >
                    <p className="text-xs text-platinum-500 mb-1">{sentiment.dimension}</p>
                    <p className="text-xl font-bold text-gold">
                      {sentiment.score > 0 ? '+' : ''}{sentiment.score.toFixed(1)}
                    </p>
                    <p className="text-xs text-platinum-600 mt-1">{sentiment.interpretation}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* BRICS & De-Dollarization Tab */}
        <TabsContent value="brics" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="BRICS Membership Timeline" description="Expansion and partner country status">
              <div className="space-y-4">
                {geoData.bricsMembershipTimeline.map((event, idx) => (
                  <motion.div
                    key={event.event}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20">
                      <span className="text-xs font-bold text-gold">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200">{event.event}</span>
                        <Badge variant="outline" className="text-xs">{event.date}</Badge>
                      </div>
                      <p className="mt-1 text-xs text-platinum-500">{event.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">De-Dollarization Mechanisms</CardTitle>
                    <CardDescription>BRICS payment initiatives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {geoData.dedollarizationMechanisms.map((mech, idx) => (
                        <div key={idx} className="rounded-lg bg-slate-800/50 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Database className="h-4 w-4 text-gold-500" />
                            <span className="text-sm font-medium text-slate-200">{mech.mechanism}</span>
                          </div>
                          <p className="text-xs text-platinum-500">{mech.details}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Local Currency Settlements</CardTitle>
                    <CardDescription>Bilateral settlement progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {geoData.localCurrencySettlements.map((settlement, idx) => (
                        <div key={idx} className="rounded-lg bg-slate-800/50 p-4">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-slate-200">{settlement.countryPair}</span>
                            {settlement.date && <Badge variant="outline" className="text-xs">{settlement.date}</Badge>}
                          </div>
                          <p className="text-xs text-platinum-500">{settlement.details}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <GlassPanel title="Country Positions on De-Dollarization" description="Member state stances">
              <div className="space-y-4">
                {geoData.countryPositions.map((country, idx) => (
                  <motion.div
                    key={country.country}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="rounded-lg bg-slate-800/50 p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-sm font-medium text-slate-200">{country.country}</span>
                        <p className="mt-1 text-xs text-gold-500">{country.position}</p>
                      </div>
                    </div>
                    {country.quote && (
                      <p className="mt-2 text-xs italic text-platinum-500 border-l-2 border-gold/30 pl-3">
                        {country.quote}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">BRICS De-Dollarization KPIs</CardTitle>
                <CardDescription>Progress indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {geoData.bricsDedollarizationKPIs.map((kpi, idx) => (
                    <div key={kpi.kpi} className="glass-panel p-4 rounded-xl">
                      <p className="text-xs text-platinum-500">{kpi.kpi}</p>
                      <p className="mt-1 text-xl font-bold text-gold">{kpi.value}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge
                          variant={kpi.viability === 'Limited' ? 'warning' : kpi.viability === 'Not viable' ? 'destructive' : 'success'}
                          className="text-xs"
                        >
                          {kpi.viability || kpi.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Regional Dynamics Tab */}
        <TabsContent value="regional" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="Saudi-UAE Confrontation (December 2025)" description="Regional realignment events">
              <div className="space-y-4">
                {geoData.saudUAEConfrontation.map((event, idx) => (
                  <motion.div
                    key={event.event}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-4 rounded-lg bg-red-500/10 border border-red-500/30 p-4"
                  >
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-slate-200">{event.event}</span>
                      <p className="mt-1 text-xs text-platinum-500">{event.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Regional Power Portfolios" description="Dominant power modes by actor">
              <div className="space-y-4">
                {geoData.regionalPowerPortfolios.map((portfolio, idx) => (
                  <motion.div
                    key={portfolio.actor}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gold" />
                      <span className="text-sm font-medium text-slate-200">{portfolio.actor}</span>
                    </div>
                    <span className="text-xs text-platinum-500 text-right">{portfolio.dominantPowerMode}</span>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Regional Stability KPIs</CardTitle>
                    <CardDescription>Current status indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {geoData.regionalStabilityKPIs.map((kpi, idx) => (
                        <div key={kpi.kpi} className="rounded-lg bg-slate-800/50 p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-200">{kpi.kpi}</span>
                            <Badge
                              variant={
                                kpi.trend === 'Deteriorating' ? 'destructive' :
                                kpi.trend === 'Declining' ? 'warning' :
                                kpi.trend === 'Growing' ? 'success' : 'secondary'
                              }
                              className="text-xs"
                            >
                              {kpi.value}
                            </Badge>
                          </div>
                          <p className="text-xs text-platinum-500">{kpi.implication}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Entity Sentiment Map</CardTitle>
                    <CardDescription>UAE relationship sentiment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadarChart
                      data={regionalPowerData.slice(0, 6)}
                      metrics={[
                        { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.gold },
                      ]}
                      height={300}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </TabsContent>

        {/* India Relations Tab */}
        <TabsContent value="india" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="India-UAE Strategic Partnership" description="Comprehensive bilateral agreements">
              <div className="space-y-4">
                {geoData.indiaUAEAgreements.map((agreement, idx) => (
                  <motion.div
                    key={agreement.agreement}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4"
                  >
                    <div>
                      <span className="text-sm font-medium text-slate-200">{agreement.agreement}</span>
                      <div className="flex gap-4 mt-2">
                        <Badge variant="outline" className="text-xs">UAE: {agreement.uaeParty}</Badge>
                        <Badge variant="outline" className="text-xs">India: {agreement.indiaParty}</Badge>
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Regional Frameworks</CardTitle>
                    <CardDescription>I2U2, IMEC, Pax Silica</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {geoData.regionalFrameworks.map((framework, idx) => (
                        <div key={framework.framework} className="rounded-lg bg-slate-800/50 p-4">
                          <div className="flex items-start justify-between mb-2">
                            <span className="text-sm font-medium text-slate-200">{framework.framework}</span>
                          </div>
                          <p className="text-xs text-platinum-500 mb-2">Members: {framework.members}</p>
                          <Badge variant="success" className="text-xs">{framework.uaeIndiaRole}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Strategic Investments</CardTitle>
                    <CardDescription>Major UAE commitments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {geoData.strategicInvestments.slice(0, 6).map((investment, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div>
                            <span className="text-sm text-slate-200">{investment.partner}</span>
                            <p className="text-xs text-platinum-500">{investment.sector}</p>
                          </div>
                          <span className="text-sm font-bold text-gold">{investment.amount}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </TabsContent>

        {/* Climate Geopolitics Tab */}
        <TabsContent value="climate" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="UAE Energy Strategy 2050" description="Clean energy and climate commitments">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {geoData.uaeEnergyStrategy.map((target, idx) => (
                  <motion.div
                    key={target.target}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="glass-panel p-4 rounded-xl border border-emerald-500/30"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="h-5 w-5 text-emerald-500" />
                      <span className="text-sm font-medium text-slate-200">{target.target}</span>
                    </div>
                    <p className="text-xl font-bold text-gold">{target.value}</p>
                    {target.timeline && <p className="text-xs text-platinum-500 mt-1">Timeline: {target.timeline}</p>}
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Diversification Progress</CardTitle>
                    <CardDescription>2000 vs 2023 comparison</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {geoData.diversificationProgress.map((progress, idx) => (
                        <div key={progress.metric} className="rounded-lg bg-slate-800/50 p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-200">{progress.metric}</span>
                            {progress.change && (
                              <Badge variant="success" className="text-xs">{progress.change}</Badge>
                            )}
                          </div>
                          <div className="flex gap-4 text-xs text-platinum-500">
                            {progress.value2000 && <span>2000: {progress.value2000}</span>}
                            {progress.value2023 && <span>2023: {progress.value2023}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Renewable Energy Infrastructure</CardTitle>
                    <CardDescription>Current capacity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {geoData.renewableEnergy.map((facility, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4">
                          <div>
                            <span className="text-sm font-medium text-slate-200">{facility.facility}</span>
                            <p className="text-xs text-platinum-500">{facility.status}</p>
                          </div>
                          <span className="text-lg font-bold text-emerald-500">{facility.capacity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <GlassPanel title="Climate Commitments" description="Net-zero targets and achievements">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {geoData.climateCommitments.map((commitment, idx) => (
                  <motion.div
                    key={commitment.commitment}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-panel p-4 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sun className="h-4 w-4 text-gold-700" />
                      <span className="text-xs text-platinum-500">{commitment.commitment}</span>
                    </div>
                    {commitment.targetYear && (
                      <p className="text-lg font-bold text-gold">{commitment.targetYear}</p>
                    )}
                    {commitment.revised && (
                      <p className="text-xs text-emerald-500 mt-1">Revised: {commitment.revised}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Entity Registry Tab */}
        <TabsContent value="entities" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="Country Registry" description="UAE bilateral relationships">
              <div className="space-y-3">
                {geoData.entityRegistry.countries.map((country, idx) => (
                  <motion.div
                    key={country.entity}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3 hover:bg-slate-800/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Flag className="h-4 w-4 text-platinum-500" />
                      <div>
                        <span className="text-sm font-medium text-slate-200">{country.entity}</span>
                        <p className="text-xs text-platinum-500">{country.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={
                          country.uaeRelationship.includes('Positive') || country.uaeRelationship === 'Core alliance' ? 'success' :
                          country.uaeRelationship.includes('Negative') || country.uaeRelationship.includes('Worsening') ? 'destructive' :
                          'secondary'
                        }
                        className="text-xs"
                      >
                        {country.uaeRelationship}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Organization Registry" description="International bodies and frameworks">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {geoData.entityRegistry.organizations.map((org, idx) => (
                  <motion.div
                    key={org.organization}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="glass-panel p-4 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="h-4 w-4 text-gold-700" />
                      <span className="text-sm font-medium text-slate-200">{org.organization}</span>
                    </div>
                    <p className="text-xs text-platinum-500 mb-2">{org.uaeStatus}</p>
                    <Badge
                      variant={org.relevance === 'Critical' ? 'destructive' : org.relevance === 'High' ? 'warning' : 'secondary'}
                      className="text-xs"
                    >
                      {org.relevance}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Key Individuals" description="Leadership contacts">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {geoData.entityRegistry.keyIndividuals.map((person, idx) => (
                  <motion.div
                    key={person.individual}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="glass-panel p-4 rounded-xl text-center"
                  >
                    <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3">
                      <Users className="h-5 w-5 text-gold" />
                    </div>
                    <p className="text-sm font-medium text-slate-200">{person.individual}</p>
                    <p className="text-xs text-platinum-500 mt-1">{person.role}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* KPIs Tab */}
        <TabsContent value="kpis" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel title="UAE Geopolitical Position KPIs" description="Dashboard-ready metrics">
              <div className="space-y-3">
                {geoData.geopoliticalKPIs.map((kpi, idx) => (
                  <motion.div
                    key={kpi.kpi}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4"
                  >
                    <div>
                      <span className="text-sm font-medium text-slate-200">{kpi.kpi}</span>
                      {kpi.target && <p className="text-xs text-platinum-500">Target: {kpi.target}</p>}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-gold">{kpi.value}</span>
                      <Badge
                        variant={kpi.status === 'On Track' ? 'success' : kpi.status === 'Off Track' ? 'destructive' : 'warning'}
                        className="text-xs"
                      >
                        {kpi.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Transformation Metrics</CardTitle>
                    <CardDescription>Economic growth indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {geoData.economicGrowth.map((growth, idx) => (
                        <div key={growth.metric} className="rounded-lg bg-slate-800/50 p-4">
                          <span className="text-sm font-medium text-slate-200">{growth.metric}</span>
                          <div className="flex gap-4 mt-2">
                            {growth.value1975 && (
                              <div>
                                <p className="text-xs text-platinum-500">1975</p>
                                <p className="text-lg font-bold text-platinum-400">{growth.value1975}</p>
                              </div>
                            )}
                            {growth.value2023 && (
                              <div>
                                <p className="text-xs text-platinum-500">2023</p>
                                <p className="text-lg font-bold text-gold">{growth.value2023}</p>
                              </div>
                            )}
                            {growth.value2025 && (
                              <div>
                                <p className="text-xs text-platinum-500">2025</p>
                                <p className="text-lg font-bold text-emerald-500">{growth.value2025}</p>
                              </div>
                            )}
                            {growth.target2031 && (
                              <div>
                                <p className="text-xs text-platinum-500">Target 2031</p>
                                <p className="text-lg font-bold text-gold">{growth.target2031}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Strategic Investments</CardTitle>
                    <CardDescription>Major partnerships and commitments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={geoData.strategicInvestments.slice(0, 8).map(inv => ({
                        partner: inv.partner.split(' ')[0],
                        amount: parseFloat(inv.amount.replace(/[^0-9.]/g, '')) || 0,
                      }))}
                      xAxisKey="partner"
                      bars={[{ dataKey: 'amount', name: '$ Billions', color: CHART_COLORS.gold }]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <GlassPanel title="Defense & Technology" description="Strategic capabilities">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {geoData.defenseIndustry.map((def, idx) => (
                  <motion.div
                    key={def.metric}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="glass-panel p-4 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-gold-700" />
                      <span className="text-xs text-platinum-500">{def.metric}</span>
                    </div>
                    <p className="text-xl font-bold text-gold">{def.value}</p>
                  </motion.div>
                ))}
                {geoData.technologyAI.slice(0, 4).map((tech, idx) => (
                  <motion.div
                    key={tech.metric}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (idx + 4) * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="glass-panel p-4 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="h-4 w-4 text-indigo-500" />
                      <span className="text-xs text-platinum-500">{tech.metric}</span>
                    </div>
                    <p className="text-xl font-bold text-gold">{tech.value}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
