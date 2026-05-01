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
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Zap,
  ThumbsDown,
  Heart,
  Frown,
  Shield,
  Eye,
  Scale,
  Globe,
  UsersRound,
  Factory,
  Ban,
  Siren,
  Clock,
  Database,
  ShieldAlert,
  CheckCircle,
  XCircle,
  ChevronRight,
  Activity,
  BarChart3,
  FileSearch,
  CheckSquare,
  AlertOctagon,
} from 'lucide-react'
import {
  useNegativeSentimentData,
  useFearUncertaintyData,
} from '@/lib/data-loader/sentiment-data'
import {
  SourceCredibilitySection,
  UAERelevanceSection,
  CategoryDetailSection,
  EntitiesSection,
  DataQualitySection,
} from './components'

// Animation variants for framer-motion
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

const cardHover = {
  hover: { scale: 1.02, transition: { duration: 0.2 } },
}

const listItem = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
}

export default function NegativeSentimentPage() {
  const data = useNegativeSentimentData()
  const fearData = useFearUncertaintyData()
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [selectedFearTopic, setSelectedFearTopic] = useState<number | null>(null)

  if (!data || !fearData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Negative Sentiment data...</div>
      </div>
    )
  }

  // Extract metrics
  const criticalCount = data.relevanceAssessment.filter(r => r.uaeRelevance === 'CRITICAL').length
  const highCount = data.relevanceAssessment.filter(r => r.uaeRelevance === 'HIGH').length

  // Severity status colors
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-500/20'
      case 'HIGH': return 'text-amber-400 bg-amber-500/20'
      case 'MEDIUM': return 'text-amber-400 bg-amber-500/20'
      case 'LOW': return 'text-emerald-400 bg-emerald-500/20'
      default: return 'text-platinum-400 bg-platinum-500/20'
    }
  }

  const getSeverityBorder = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'border-red-500/50'
      case 'HIGH': return 'border-amber-500/50'
      case 'MEDIUM': return 'border-amber-500/50'
      case 'LOW': return 'border-emerald-500/50'
      default: return 'border-platinum-500/50'
    }
  }

  const severityToNumber = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 10
      case 'HIGH': return 7.5
      case 'MEDIUM': return 5
      case 'LOW': return 2.5
      default: return 0
    }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Enhanced Header */}
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
            <Badge variant="destructive" className="mb-2 bg-rose-500/20 text-rose-400 border-rose-500/50">
              <Siren className="w-3 h-3 mr-1" />
              NEGATIVE SENTIMENT
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold gradient-text-rose font-rajdhani"
          >
            Negative Sentiment Analysis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-platinum-400"
          >
            {data.overview.totalCategories} distinct negative sentiment categories • {data.overview.totalSourcesConsulted}+ authoritative sources • {data.overview.temporalCoverage}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <Button variant="outline" className="gap-2 border-rose-500/50 text-rose-400 hover:bg-rose-500/10">
            <Eye className="h-4 w-4" />
            Monitor Risks
          </Button>
          <Button className="bg-gradient-rose hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Mitigation Actions
          </Button>
        </motion.div>
      </motion.div>

      {/* Enhanced Key Metrics - Cycle A: Critical Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Critical Categories"
            value={criticalCount.toString()}
            icon={<AlertTriangle className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="High Severity"
            value={highCount.toString()}
            icon={<AlertCircle className="h-6 w-6" />}
            gradient="gold"
            status="warning"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Sources Consulted"
            value={`${data.overview.totalSourcesConsulted}+`}
            icon={<Database className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Fear Topics"
            value={fearData.overview.queryCategories.toString()}
            icon={<Siren className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="credibility">Credibility</TabsTrigger>
          <TabsTrigger value="relevance">Relevance</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="themes">Narratives</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
          <TabsTrigger value="quality">Data Quality</TabsTrigger>
          <TabsTrigger value="fear">Fear & Uncertainty</TabsTrigger>
        </TabsList>

        {/* Enhanced Overview Tab - Cycle B: Glassmorphism Charts */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Negative Sentiment Overview" description="Key negative sentiment metrics and severity distribution">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-rose-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani">
                      <Scale className="w-4 h-4 inline mr-2" />
                      Severity Distribution
                    </CardTitle>
                    <CardDescription>Categories by severity level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={data.severityDistribution}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </motion.div>

                <motion.div
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-amber-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani">
                      <Activity className="w-4 h-4 inline mr-2" />
                      Sentiment Trend
                    </CardTitle>
                    <CardDescription>Negative sentiment intensity over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={data.sentimentTrend}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'negative', name: 'Negative %', color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.div>
              </div>

              {/* Category Severity Bar Chart */}
              <motion.div
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-platinum-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-rajdhani">
                    <TrendingUp className="w-4 h-4 inline mr-2" />
                    Category Severity Scores
                  </CardTitle>
                  <CardDescription>Top negative sentiment categories ranked by severity</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={data.categorySeverity.slice(0, 8)}
                    xAxisKey="category"
                    bars={[
                      { dataKey: 'severity', name: 'Severity Score', color: CHART_COLORS.rose },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Categories Tab - Cycle C: Detailed Categories */}
        <TabsContent value="categories" className="space-y-6">
          <GlassPanel title="Negative Sentiment Categories" description="16 distinct categories of negative sentiment toward UAE">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                  {data.categories.map((category, idx) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                      onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                      className={`glass-card border ${getSeverityBorder(category.severity)} p-4 cursor-pointer`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={getSeverityColor(category.severity)}>
                          {category.severity}
                        </Badge>
                        <span className="text-xs text-platinum-500">#{category.id}</span>
                      </div>
                      <h4 className="font-semibold text-platinum-200 mb-2 font-rajdhani">
                        {category.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-platinum-400 mb-3">
                        <Badge variant="outline" className="text-xs">
                          Tier {category.tier}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {category.sentimentIntensity}
                        </Badge>
                      </div>
                      <Progress
                        value={(severityToNumber(category.severity) / 10) * 100}
                        className="h-1"
                      />
                      <AnimatePresence>
                        {selectedCategory === category.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-3 pt-3 border-t border-platinum-700"
                          >
                            <p className="text-xs text-platinum-400 mb-2">
                              Primary Concerns:
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {category.primaryConcerns.map((concern, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {concern}
                                </Badge>
                              ))}
                            </div>
                            {category.keyQuotes.length > 0 && (
                              <blockquote className="mt-3 text-xs text-platinum-500 italic border-l-2 border-platinum-600 pl-2">
                                {category.keyQuotes[0].substring(0, 100)}...
                              </blockquote>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Themes Tab - Cycle D: Narrative Themes */}
        <TabsContent value="themes" className="space-y-6">
          <GlassPanel title="Key Narrative Themes" description="Core negative narratives identified in sentiment analysis">
            <div className="space-y-6">
              {data.themes.map((theme, idx) => (
                <motion.div
                  key={theme.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card border-rose-500/30 p-6"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20 text-rose-400"
                    >
                      <ThumbsDown className="h-6 w-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-platinum-200 mb-2 font-rajdhani">
                        {theme.name}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {theme.coreElements.map((element, i) => (
                          <Badge key={i} variant="outline" className="text-amber-400 border-amber-400/50">
                            {element}
                          </Badge>
                        ))}
                      </div>
                      {theme.dataPoints.length > 0 && (
                        <div className="bg-navy-900/50 rounded-lg p-3 mt-3">
                          <p className="text-xs text-platinum-500 mb-2">Key Data Points:</p>
                          <ul className="space-y-1">
                            {theme.dataPoints.map((dp, i) => (
                              <li key={i} className="text-sm text-platinum-300 flex items-center gap-2">
                                <XCircle className="w-3 h-3 text-red-400" />
                                {dp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-xs text-platinum-500">Sources:</span>
                        {theme.sources.map((source, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {source}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entities Tab - Cycle E: Human Rights Defenders & Government Entities */}
        <TabsContent value="entities" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Human Rights Defenders" description="Political prisoners and human rights defenders documented">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {data.humanRightsDefenders.map((defender, idx) => (
                    <motion.div
                      key={defender.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-rose-500/30 p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-platinum-200">{defender.name}</h4>
                        <Badge variant="destructive" className="text-xs">
                          {defender.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-platinum-400 mb-1">
                        <span className="text-platinum-500">Charges:</span> {defender.charges}
                      </p>
                      <p className="text-xs text-platinum-500">
                        Source: {defender.source}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            <GlassPanel title="Government & Corporate Entities" description="Entities implicated in negative sentiment">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {data.governmentEntities.map((entity, idx) => (
                    <motion.div
                      key={entity.entity}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass-card border-amber-500/30 p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-platinum-200">{entity.entity}</h4>
                        <Badge variant="outline" className="text-xs">
                          {entity.role}
                        </Badge>
                      </div>
                      <p className="text-sm text-platinum-400">
                        {entity.allegation}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>
          </div>

          {/* Arrest Cases */}
          <GlassPanel title="Documented Arrest Cases" description="Cases of arrests for online criticism">
            <ScrollArea className="h-[300px]">
              <div className="space-y-3">
                {data.arrestCases.map((arrest, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-card border-red-500/30 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                        <Ban className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-platinum-200">{arrest.person}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {arrest.nationality}
                          </Badge>
                        </div>
                        <p className="text-sm text-platinum-400 mb-1">
                          <span className="text-platinum-500">Reason:</span> {arrest.reason}
                        </p>
                        <p className="text-sm text-red-400">
                          <span className="text-platinum-500">Consequence:</span> {arrest.consequence}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </GlassPanel>

          {/* Military Interventions */}
          <GlassPanel title="Military Interventions" description="Documented UAE military interventions abroad">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.militaryInterventions.map((intervention, idx) => (
                <motion.div
                  key={intervention.operation}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card border-amber-500/30 p-4 text-center"
                >
                  <Globe className="h-8 w-8 mx-auto mb-2 text-amber-400" />
                  <h4 className="font-bold text-platinum-200 mb-1 font-rajdhani">
                    {intervention.operation}
                  </h4>
                  <p className="text-sm text-platinum-400 mb-2">{intervention.location}</p>
                  <p className="text-xs text-platinum-500">{intervention.details}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Statistics Tab - Cycle F: Comprehensive Statistics */}
        <TabsContent value="statistics" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Human Rights Statistics */}
            <GlassPanel title="Human Rights Statistics" description="Key human rights violation metrics">
              <div className="space-y-4">
                {Object.entries(data.statistics.humanRights).map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between p-3 glass-card border-red-500/20"
                  >
                    <span className="text-sm text-platinum-300">{key}</span>
                    <Badge variant="destructive" className="font-mono">
                      {value}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Labor Statistics */}
            <GlassPanel title="Labor Exploitation Statistics" description="Key labor and migration metrics">
              <div className="space-y-4">
                {Object.entries(data.statistics.labor).map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between p-3 glass-card border-amber-500/20"
                  >
                    <span className="text-sm text-platinum-300">{key}</span>
                    <Badge variant="outline" className="font-mono text-amber-400">
                      {value}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Environment Statistics */}
            <GlassPanel title="Environmental Statistics" description="Air pollution and environmental metrics">
              <div className="space-y-4">
                {Object.entries(data.statistics.environment).map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between p-3 glass-card border-emerald-500/20"
                  >
                    <span className="text-sm text-platinum-300">{key}</span>
                    <Badge variant="secondary" className="font-mono">
                      {value}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Corruption Statistics */}
            <GlassPanel title="Corruption Statistics" description="Corruption perception index data">
              <div className="space-y-4">
                {Object.entries(data.statistics.corruption).map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center justify-between p-3 glass-card border-amber-500/20"
                  >
                    <span className="text-sm text-platinum-300">{key}</span>
                    <Badge variant="outline" className="font-mono text-amber-400">
                      {value}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Demographics */}
          <GlassPanel title="Demographics" description="Population and migration statistics">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(data.statistics.demographics).map(([key, value], idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="glass-card border-platinum-500/30 p-4 text-center"
                >
                  <UsersRound className="h-6 w-6 mx-auto mb-2 text-platinum-400" />
                  <p className="text-sm text-platinum-400 mb-1">{key}</p>
                  <p className="text-lg font-bold text-platinum-200 font-rajdhani">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Source Credibility Tab */}
        <TabsContent value="credibility" className="space-y-6">
          <SourceCredibilitySection />
        </TabsContent>

        {/* UAE Relevance Tab */}
        <TabsContent value="relevance" className="space-y-6">
          <UAERelevanceSection />
        </TabsContent>

        {/* Category Detail Tab */}
        <TabsContent value="categories" className="space-y-6">
          <CategoryDetailSection />
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <EntitiesSection />
        </TabsContent>

        {/* Data Quality Tab */}
        <TabsContent value="quality" className="space-y-6">
          <DataQualitySection />
        </TabsContent>

        {/* Fear & Uncertainty Tab - Cycle A-F: Fear Content */}
        <TabsContent value="fear" className="space-y-6">
          {/* Fear Overview */}
          <GlassPanel title="Fear & Uncertainty Overview" description={`${fearData.overview.queryCategories} distinct fear topics from ${fearData.overview.totalSourcesConsulted} authoritative sources`}>
            <div className="space-y-6">
              {/* Fear Metrics */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <motion.div variants={fadeInUp}>
                  <MetricCard
                    title="Critical Fears"
                    value={fearData.aggregateSummary.filter(f => f.severity === 'CRITICAL').length.toString()}
                    icon={<AlertTriangle className="h-6 w-6" />}
                    gradient="rose"
                    status="error"
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <MetricCard
                    title="Fear Topics"
                    value={fearData.overview.queryCategories.toString()}
                    icon={<Siren className="h-6 w-6" />}
                    gradient="gold"
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <MetricCard
                    title="Sources"
                    value={fearData.overview.totalSourcesConsulted.toString()}
                    icon={<Database className="h-6 w-6" />}
                    gradient="denim"
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <MetricCard
                    title="Highest Fear"
                    value="Expat Exodus"
                    icon={<Users className="h-6 w-6" />}
                    gradient="rose"
                    status="error"
                  />
                </motion.div>
              </div>

              {/* Fear Charts */}
              <div className="grid gap-6 lg:grid-cols-2">
                <motion.div
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-red-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani">
                      <TrendingUp className="w-4 h-4 inline mr-2" />
                      Fear by Category
                    </CardTitle>
                    <CardDescription>Intensity of fear across different topics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={fearData.byCategory}
                      xAxisKey="category"
                      bars={[
                        { dataKey: 'fear', name: 'Fear Index', color: CHART_COLORS.rose },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.div>

                <motion.div
                  variants={cardHover}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="glass-card border-amber-500/30"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-rajdhani">
                      <Activity className="w-4 h-4 inline mr-2" />
                      Fear Trend
                    </CardTitle>
                    <CardDescription>Fear and uncertainty intensity over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={fearData.trendData}
                      xAxisKey="month"
                      lines={[
                        { dataKey: 'fear', name: 'Fear Index', color: CHART_COLORS.rose },
                        { dataKey: 'uncertainty', name: 'Uncertainty', color: CHART_COLORS.gold },
                        { dataKey: 'economicRisk', name: 'Economic Risk', color: CHART_COLORS.warning },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </motion.div>
              </div>

              {/* Sentiment Distribution */}
              <motion.div
                variants={cardHover}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="glass-card border-platinum-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-rajdhani">
                    <Scale className="w-4 h-4 inline mr-2" />
                    Sentiment Distribution
                  </CardTitle>
                  <CardDescription>Fear sentiment across topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={fearData.sentimentDistribution}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </motion.div>
            </div>
          </GlassPanel>

          {/* Fear Topics Grid */}
          <GlassPanel title="Fear & Uncertainty Topics" description="9 distinct fear and uncertainty categories">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                  {fearData.topics.map((topic, idx) => (
                    <motion.div
                      key={topic.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                      onClick={() => setSelectedFearTopic(selectedFearTopic === topic.id ? null : topic.id)}
                      className={`glass-card border ${topic.severity === 'CRITICAL' ? 'border-red-500/50' : topic.severity === 'HIGH' ? 'border-amber-500/50' : 'border-amber-500/50'} p-4 cursor-pointer`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={topic.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : topic.severity === 'HIGH' ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-500/20 text-amber-400'}>
                          {topic.severity}
                        </Badge>
                        <span className="text-xs text-platinum-500">#{topic.id}</span>
                      </div>
                      <h4 className="font-semibold text-platinum-200 mb-2 font-rajdhani">
                        {topic.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-platinum-400 mb-3">
                        <Badge variant="outline" className="text-xs">
                          Sentiment: {topic.aggregateSentiment > 0 ? '+' : ''}{topic.aggregateSentiment}
                        </Badge>
                      </div>
                      <Progress
                        value={Math.abs(topic.aggregateSentiment) * 100}
                        className="h-1"
                      />
                      <AnimatePresence>
                        {selectedFearTopic === topic.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-3 pt-3 border-t border-platinum-700"
                          >
                            <p className="text-xs text-platinum-500 mb-2">
                              Primary Fears:
                            </p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {topic.primaryFears.map((fear, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {fear}
                                </Badge>
                              ))}
                            </div>
                            <p className="text-xs text-platinum-500 mb-2">Key KPIs:</p>
                            <div className="space-y-1">
                              {topic.kpis.slice(0, 3).map((kpi, i) => (
                                <div key={i} className="flex justify-between text-xs">
                                  <span className="text-platinum-400">{kpi.kpi}:</span>
                                  <span className="text-rose-400 font-semibold">{kpi.value}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </GlassPanel>

          {/* Fear Aggregate Summary */}
          <GlassPanel title="Fear Aggregate Summary" description="Key fear and uncertainty aggregates">
            <div className="space-y-4">
              {fearData.aggregateSummary.map((aggregate, idx) => (
                <motion.div
                  key={aggregate.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`glass-card border ${aggregate.severity === 'CRITICAL' ? 'border-red-500/50' : 'border-amber-500/50'} p-6`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${aggregate.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}
                    >
                      <AlertTriangle className="h-6 w-6" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg text-platinum-200 font-rajdhani">
                          {aggregate.category}
                        </h4>
                        <Badge className={aggregate.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}>
                          {aggregate.severity}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-platinum-500">Sentiment:</span>
                        <Badge variant="outline" className={aggregate.aggregateSentiment < 0 ? 'text-red-400 border-red-500/50' : 'text-emerald-400 border-emerald-500/50'}>
                          {aggregate.aggregateSentiment > 0 ? '+' : ''}{aggregate.aggregateSentiment}
                        </Badge>
                      </div>
                      <div className="bg-navy-900/50 rounded-lg p-3">
                        <p className="text-xs text-platinum-500 mb-2">Evidence:</p>
                        <ul className="space-y-1">
                          {aggregate.evidence.map((ev, i) => (
                            <li key={i} className="text-sm text-platinum-300 flex items-center gap-2">
                              <XCircle className="w-3 h-3 text-red-400 flex-shrink-0" />
                              {ev}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
