// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
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
  Globe,
  Hash,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Languages,
  Search,
  ArrowUp,
  ArrowDown,
  Minus,
  MapPin,
  ChevronRight,
  Activity,
  Building2,
  UsersRound,
  FileText,
  Radio,
} from 'lucide-react'
import {
  useMaghrebiArabicData,
} from '@/lib/data-loader'

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
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

export default function MaghrebiArabicPage() {
  const { data } = useMaghrebiArabicData()
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!data) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center min-h-[400px]"
      >
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-4 border-platinum/20 border-t-platinum animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe className="h-5 w-5 text-platinum animate-pulse" />
          </div>
        </div>
      </motion.div>
    )
  }

  const { topSearchTerms, sentiment, uaeSpeakerPopulation, credibility, sources, trendDirection, extendedData } = data

  // Extended data from comprehensive MD file
  const diplomaticData = extendedData?.diplomaticRelationsDashboard || []
  const workerStats = extendedData?.workerStatistics
  const moroccoEconomics = extendedData?.moroccoUAEEconomics
  const gccDemographics = extendedData?.gccDemographicOverview || []
  const dialectClassification = extendedData?.dialectClassification || []
  const uaeRegionalInfluence = extendedData?.uaeRegionalInfluence || []
  const entityRegistries = extendedData?.entityRegistries
  const sentimentMatrix = extendedData?.sentimentAnalysisMatrix || []
  const migrantWorkerSentiment = extendedData?.migrantWorkerDiscourseSentiment || []
  const uaeRelevance = extendedData?.uaeRelevanceAssessment
  const sourceCredibility = extendedData?.sourceCredibilityMatrix
  const urlSummaries = extendedData?.urlContentSummaries || []
  const dialectAnalysis = extendedData?.dialectAnalysis
  const verificationStatus = extendedData?.verificationStatus

  // Sentiment data for pie chart
  const sentimentData = sentiment ? [
    { name: 'Positive', value: sentiment.positive, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: sentiment.neutral, color: CHART_COLORS.platinum },
    { name: 'Negative', value: sentiment.negative, color: CHART_COLORS.rose },
  ] : [
    { name: 'Positive', value: 52, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 20, color: CHART_COLORS.platinum },
    { name: 'Negative', value: 28, color: CHART_COLORS.rose },
  ]

  // Top search terms with trend indicators
  const searchTermsData = topSearchTerms?.slice(0, 10) || []

  // Trend direction icon helper
  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'rising': return <ArrowUp className="h-4 w-4 text-emerald-400" />
      case 'declining': return <ArrowDown className="h-4 w-4 text-rose-400" />
      default: return <Minus className="h-4 w-4 text-slate-400" />
    }
  }

  // Trend direction badge helper
  const getTrendBadge = (trend?: string) => {
    switch (trend) {
      case 'rising': return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Rising</Badge>
      case 'declining': return <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">Declining</Badge>
      default: return <Badge className="bg-slate-500/20 text-slate-400 border-slate-500/50">Stable</Badge>
    }
  }

  // Get tension color based on score
  const getTensionColor = (score: number) => {
    if (score >= 9) return 'text-rose-500'
    if (score >= 8) return 'text-orange-500'
    if (score >= 7) return 'text-yellow-500'
    return 'text-emerald-500'
  }

  // Get relation status color
  const getRelationColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'critical': return 'bg-rose-500/20 text-rose-400 border-rose-500/50'
      case 'hostile': return 'bg-orange-500/20 text-orange-400 border-orange-500/50'
      case 'strained': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
      case 'competing': return 'bg-platinum/20 text-platinum border-platinum/50'
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/50'
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8 p-8 font-rajdhani"
      style={{ fontFamily: 'Rajdhani, sans-serif' }}
    >
      {/* Enhanced Header with motion */}
      <motion.div
        variants={fadeInUp}
        className="flex items-start justify-between"
      >
        <div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="default" className="mb-2 bg-gradient-platinum text-navy-950 font-bold">
              <Radio className="h-3 w-3 mr-1 animate-pulse" />
              MULTI-LINGUAL
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-extrabold gradient-text-platinum tracking-tight"
          >
            Maghrebi Arabic Dialect
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-slate-400 text-lg"
          >
            Intelligence on Maghrebi Arabic dialect: Morocco, Algeria, Tunisia, Libya
          </motion.p>
          {extendedData?.executionMetadata && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-3 flex items-center gap-4 text-sm text-slate-500"
            >
              <span className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                {extendedData.executionMetadata.dataPointsExtracted}+ data points
              </span>
              <span className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                {extendedData.executionMetadata.totalSourcesProcessed} sources
              </span>
              <span className="flex items-center gap-1">
                <Activity className="h-3 w-3" />
                {extendedData.executionMetadata.enrichmentDate}
              </span>
            </motion.div>
          )}
        </div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-3"
        >
          <Button
            variant="outline"
            className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10 backdrop-blur-sm transition-all hover:scale-105"
          >
            <Languages className="h-4 w-4" />
            View Dialect Map
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2 font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-platinum/20">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </motion.div>
      </motion.div>

      {/* Enhanced Key Metrics with staggered animation */}
      <motion.div
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {[
          { title: 'Query Volume', value: data.queryVolume?.toLocaleString() || '12,400,000', previousValue: (data.queryVolume || 12400000) - 300000, icon: <Search className="h-6 w-6" />, gradient: 'platinum', status: 'info' as const },
          { title: 'UAE Speakers', value: uaeSpeakerPopulation?.toLocaleString() || '150,000', previousValue: (uaeSpeakerPopulation || 150000) + 10000, icon: <Users className="h-6 w-6" />, gradient: 'denim' },
          { title: 'Sentiment Score', value: sentiment?.overall || 24, previousValue: (sentiment?.overall || 24) + 3, icon: <TrendingUp className="h-6 w-6" />, gradient: 'emerald' },
          { title: 'Credibility Score', value: credibility?.score || 76, previousValue: (credibility?.score || 76) - 1, icon: <Shield className="h-6 w-6" />, gradient: 'gold' },
        ].map((metric, idx) => (
          <motion.div
            key={metric.title}
            variants={scaleIn}
            custom={idx}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <MetricCard
              title={metric.title}
              value={metric.value}
              previousValue={metric.previousValue}
              icon={metric.icon}
              gradient={metric.gradient}
              status={'status' in metric ? metric.status : undefined}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Tabs with glassmorphism */}
      <motion.div variants={fadeInUp}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="glass-panel backdrop-blur-md p-1" scrollable>
            {[
              { value: 'overview', label: 'Overview', icon: <Globe className="h-4 w-4" /> },
              { value: 'searchterms', label: 'Search Terms', icon: <Search className="h-4 w-4" /> },
              { value: 'sentiment', label: 'Sentiment', icon: <TrendingUp className="h-4 w-4" /> },
              { value: 'regional', label: 'Regional Tensions', icon: <AlertTriangle className="h-4 w-4" /> },
              { value: 'diplomatic', label: 'Diplomatic', icon: <Building2 className="h-4 w-4" /> },
              { value: 'diaspora', label: 'Diaspora', icon: <UsersRound className="h-4 w-4" /> },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-gradient-platinum data-[state=active]:text-navy-950 gap-2 font-bold transition-all"
              >
                {tab.icon}
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <GlassPanel title="Maghrebi Arabic Overview" description="Regional dialect intelligence for North Africa">
              <div className="space-y-6">
                {/* Regional Distribution with enhanced cards */}
                <motion.div
                  variants={staggerContainer}
                  className="grid gap-4 lg:grid-cols-4"
                >
                  {diplomaticData.length > 0 ? diplomaticData.map((country, idx) => (
                    <motion.div
                      key={country.country}
                      variants={scaleIn}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-4 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-platinum/5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-platinum/5 to-transparent pointer-events-none" />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-slate-200">{country.country}</h3>
                          <Badge className={getRelationColor(country.relationStatus)}>
                            {country.relationStatus}
                          </Badge>
                        </div>
                        <div className={`text-3xl font-extrabold ${getTensionColor(country.tensionScore)}`}>
                          {country.tensionScore}/10
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Tension Score</p>
                      </div>
                    </motion.div>
                  )) : [
                    { country: 'Morocco', tensionScore: 8.5, relationStatus: 'Strained', keyDisputes: ['Polisario', 'Qatar stance'] },
                    { country: 'Algeria', tensionScore: 9.0, relationStatus: 'Critical', keyDisputes: ['MAK support', 'Port ops'] },
                    { country: 'Tunisia', tensionScore: 8.0, relationStatus: 'Hostile', keyDisputes: ['Travel ban', 'Democracy'] },
                    { country: 'Libya', tensionScore: 7.5, relationStatus: 'Competing', keyDisputes: ['Haftar vs GNA'] },
                  ].map((country, idx) => (
                    <motion.div
                      key={country.country}
                      variants={scaleIn}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-4 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-platinum/5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-platinum/5 to-transparent pointer-events-none" />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-slate-200">{country.country}</h3>
                          <Badge className={getRelationColor(country.relationStatus)}>
                            {country.relationStatus}
                          </Badge>
                        </div>
                        <div className={`text-3xl font-extrabold ${getTensionColor(country.tensionScore)}`}>
                          {country.tensionScore}/10
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Tension Score</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Sentiment and Diaspora Grid */}
                <motion.div variants={staggerContainer} className="grid gap-6 lg:grid-cols-2">
                  <motion.div variants={scaleIn} whileHover={{ scale: 1.02 }}>
                    <Card className="glass-card backdrop-blur-md border-platinum/10">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-platinum" />
                          Sentiment Distribution
                        </CardTitle>
                        <CardDescription>Overall sentiment breakdown</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PieChart data={sentimentData} height={280} showLegend={true} />
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div variants={scaleIn} whileHover={{ scale: 1.02 }}>
                    <Card className="glass-card backdrop-blur-md border-platinum/10">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <UsersRound className="h-5 w-5 text-platinum" />
                          UAE Diaspora Profile
                        </CardTitle>
                        <CardDescription>Maghrebi community presence</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { country: 'Moroccan Diaspora', population: '150,000', status: 'Significant', icon: MapPin, color: 'text-emerald-400' },
                            { country: 'Algerian Community', population: 'Various', status: 'Moderate', icon: Users, color: 'text-gold-400' },
                            { country: 'Tunisian Workers', population: 'Limited', status: 'Growing', icon: TrendingUp, color: 'text-emerald-400' },
                          ].map((item, idx) => (
                            <motion.div
                              key={item.country}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/70 transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <item.icon className={`h-5 w-5 ${item.color}`} />
                                <span className="text-slate-200">{item.country}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-sm text-slate-500">{item.population}</span>
                                <Badge className="bg-emerald-500/20 text-emerald-400">{item.status}</Badge>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>

                {/* Credibility Analysis */}
                <motion.div variants={scaleIn} whileHover={{ scale: 1.01 }}>
                  <Card className="glass-card backdrop-blur-md border-platinum/10">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="h-5 w-5 text-platinum" />
                        Credibility Analysis
                      </CardTitle>
                      <CardDescription>Source credibility assessment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 lg:grid-cols-4">
                        <div className="space-y-2">
                          <p className="text-sm text-slate-400">Credibility Tier</p>
                          <Badge variant="outline" className="border-platinum/50 text-platinum font-bold">
                            Tier {credibility?.tier || 3}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-slate-400">Credibility Score</p>
                          <div className="text-2xl font-bold text-platinum-400">{credibility?.score || 76}%</div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-slate-400">Sources Verified</p>
                          <div className="text-2xl font-bold text-emerald-400">{credibility?.sources || 32}</div>
                        </div>
                        {sourceCredibility && (
                          <div className="space-y-2">
                            <p className="text-sm text-slate-400">Avg Credibility</p>
                            <div className="text-2xl font-bold text-gold-400">{sourceCredibility.dataQualitySummary.weightedAverageCredibility}%</div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Search Terms Tab */}
          <TabsContent value="searchterms" className="space-y-6">
            <GlassPanel title="Top Search Terms" description="Most frequent Maghrebi Arabic search queries">
              <Card className="glass-card backdrop-blur-md border-platinum/10">
                <CardHeader>
                  <CardTitle className="text-lg">Search Volume Rankings</CardTitle>
                  <CardDescription>Top 10 search terms by volume</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <motion.div variants={staggerContainer} className="space-y-2">
                      {searchTermsData.map((term, idx) => (
                        <motion.div
                          key={idx}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.01, x: 4 }}
                          className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-platinum/20 to-platinum/5 text-platinum text-sm font-bold border border-platinum/20"
                            >
                              {idx + 1}
                            </motion.div>
                            <div>
                              <p className="font-semibold text-slate-200">{term.term}</p>
                              <p className="text-sm text-slate-500">{term.volume?.toLocaleString()} queries</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge
                              variant="outline"
                              className={`border-slate-600 ${
                                term.sentiment === 'positive' ? 'text-emerald-400 border-emerald-500/50' :
                                term.sentiment === 'negative' ? 'text-rose-400 border-rose-500/50' :
                                'text-slate-400'
                              }`}
                            >
                              {term.sentiment}
                            </Badge>
                            <div className="flex items-center gap-1">
                              {getTrendIcon(term.trend)}
                              {getTrendBadge(term.trend)}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </GlassPanel>
          </TabsContent>

          {/* Sentiment Tab */}
          <TabsContent value="sentiment" className="space-y-6">
            <GlassPanel title="Sentiment Analysis" description="Maghrebi Arabic content sentiment breakdown">
              <div className="space-y-6">
                {/* Sentiment Breakdown */}
                <motion.div variants={scaleIn}>
                  <Card className="glass-card backdrop-blur-md border-platinum/10">
                    <CardHeader>
                      <CardTitle className="text-lg">Sentiment Breakdown</CardTitle>
                      <CardDescription>Detailed sentiment metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { label: 'Positive', value: sentiment?.positive || 52, color: 'bg-emerald-500' },
                          { label: 'Neutral', value: sentiment?.neutral || 20, color: 'bg-slate-500' },
                          { label: 'Negative', value: sentiment?.negative || 28, color: 'bg-rose-500' },
                        ].map((item, idx) => (
                          <motion.div
                            key={item.label}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`h-3 w-3 rounded-full ${item.color}`} />
                                <span className="text-sm font-medium text-slate-200">{item.label}</span>
                              </div>
                              <span className="text-lg font-bold text-slate-200">{item.value}%</span>
                            </div>
                            <Progress value={item.value} className="h-3" />
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Volume Analysis */}
                <motion.div variants={scaleIn}>
                  <Card className="glass-card backdrop-blur-md border-platinum/10">
                    <CardHeader>
                      <CardTitle className="text-lg">Volume Analysis</CardTitle>
                      <CardDescription>Total query volume: {sentiment?.volume?.toLocaleString() || '12,400,000'}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={[
                          { name: 'Positive', value: (sentiment?.volume || 12400000) * ((sentiment?.positive || 52) / 100) },
                          { name: 'Neutral', value: (sentiment?.volume || 12400000) * ((sentiment?.neutral || 20) / 100) },
                          { name: 'Negative', value: (sentiment?.volume || 12400000) * ((sentiment?.negative || 28) / 100) },
                        ]}
                        xAxisKey="name"
                        bars={[{ dataKey: 'value', name: 'Volume', color: CHART_COLORS.platinum }]}
                        height={300}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Migrant Worker Sentiment */}
                {migrantWorkerSentiment.length > 0 && (
                  <motion.div variants={scaleIn}>
                    <Card className="glass-card backdrop-blur-md border-rose-500/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                          <AlertTriangle className="h-5 w-5" />
                          Migrant Worker Discourse Sentiment
                        </CardTitle>
                        <CardDescription>Human rights organizations perspective</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-[300px]">
                          <div className="space-y-3">
                            {migrantWorkerSentiment.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-center justify-between rounded-lg bg-rose-500/10 p-3 border border-rose-500/20"
                              >
                                <div className="flex items-center gap-3">
                                  <AlertCircle className="h-4 w-4 text-rose-400" />
                                  <div>
                                    <p className="font-semibold text-slate-200">{item.source}</p>
                                    <p className="text-xs text-slate-400">{item.framing}</p>
                                  </div>
                                </div>
                                <Badge className={item.sentimentScore <= -7 ? 'bg-rose-500/20 text-rose-400' : 'bg-yellow-500/20 text-yellow-400'}>
                                  {item.sentimentScore}/10
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Regional Tensions Tab */}
          <TabsContent value="regional" className="space-y-6">
            <GlassPanel title="Regional Tensions Analysis" description="Geopolitical issues affecting Maghrebi sentiment">
              <div className="space-y-6">
                {/* Risk Heat Map */}
                {uaeRelevance?.riskHeatMap && (
                  <motion.div variants={scaleIn}>
                    <Card className="glass-card backdrop-blur-md border-rose-500/30">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                          <AlertTriangle className="h-5 w-5" />
                          Risk Heat Map
                        </CardTitle>
                        <CardDescription>Regional risk assessment</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-bold text-rose-400 mb-2">HIGH RISK</p>
                            <div className="flex flex-wrap gap-2">
                              {uaeRelevance.riskHeatMap.highRisk.map((risk, idx) => (
                                <Badge key={idx} className="bg-rose-500/20 text-rose-400 border-rose-500/50">
                                  {risk}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-yellow-400 mb-2">MEDIUM RISK</p>
                            <div className="flex flex-wrap gap-2">
                              {uaeRelevance.riskHeatMap.mediumRisk.map((risk, idx) => (
                                <Badge key={idx} className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                                  {risk}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-400 mb-2">LOW RISK</p>
                            <div className="flex flex-wrap gap-2">
                              {uaeRelevance.riskHeatMap.lowRisk.map((risk, idx) => (
                                <Badge key={idx} className="bg-slate-500/20 text-slate-400 border-slate-500/50">
                                  {risk}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Key Regional Tensions */}
                <motion.div variants={scaleIn}>
                  <Card className="glass-card backdrop-blur-md border-rose-500/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                        <AlertTriangle className="h-5 w-5" />
                        Key Regional Tensions
                      </CardTitle>
                      <CardDescription>Issues driving negative sentiment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {searchTermsData.filter(t => t.sentiment === 'negative' || t.term.toLowerCase().includes('tension') || t.term.toLowerCase().includes('border')).map((term, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30"
                          >
                            <div className="flex items-center gap-3">
                              <AlertCircle className="h-4 w-4 text-rose-400" />
                              <span className="text-slate-200">{term.term}</span>
                            </div>
                            <Badge variant="destructive" className="text-xs">{term.volume?.toLocaleString()} queries</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Intelligence Sources */}
                <motion.div variants={scaleIn}>
                  <Card className="glass-card backdrop-blur-md border-platinum/10">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5 text-platinum" />
                        Intelligence Sources
                      </CardTitle>
                      <CardDescription>Verified sources for Maghrebi intelligence</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-2">
                          {(sources || []).map((source, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.03 }}
                              className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 hover:bg-slate-800/70 transition-all"
                            >
                              <div className="flex items-center gap-4">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                  source.tier === 1 ? 'bg-emerald-500/20 text-emerald-400' :
                                  source.tier === 2 ? 'bg-platinum-500/20 text-platinum' :
                                  'bg-slate-500/20 text-slate-400'
                                }`}>
                                  <Globe className="h-5 w-5" />
                                </div>
                                <div>
                                  <p className="font-semibold text-slate-200">{source.name}</p>
                                  <p className="text-sm text-slate-500">{source.date}</p>
                                </div>
                              </div>
                              <Badge variant="outline" className={`border-slate-600 ${
                                source.tier === 1 ? 'text-emerald-400 border-emerald-500/50' :
                                source.tier === 2 ? 'text-platinum-400 border-platinum-500/50' :
                                'text-slate-400'
                              }`}>
                                Tier {source.tier || 3}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Diplomatic Tab */}
          <TabsContent value="diplomatic" className="space-y-6">
            <GlassPanel title="Diplomatic Relations Dashboard" description="Maghrebi-UAE diplomatic intelligence">
              <div className="space-y-6">
                {/* Diplomatic Relations Table */}
                <motion.div variants={scaleIn}>
                  <Card className="glass-card backdrop-blur-md border-platinum/10">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-platinum" />
                        Country Relations
                      </CardTitle>
                      <CardDescription>Diplomatic tension scores and key disputes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-slate-700">
                              <th className="text-left py-3 px-4 text-sm font-bold text-slate-400">Country</th>
                              <th className="text-left py-3 px-4 text-sm font-bold text-slate-400">Status</th>
                              <th className="text-left py-3 px-4 text-sm font-bold text-slate-400">Tension</th>
                              <th className="text-left py-3 px-4 text-sm font-bold text-slate-400">Key Disputes</th>
                              <th className="text-left py-3 px-4 text-sm font-bold text-slate-400">Investment</th>
                            </tr>
                          </thead>
                          <tbody>
                            {diplomaticData.length > 0 ? diplomaticData.map((row, idx) => (
                              <motion.tr
                                key={row.country}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-all"
                              >
                                <td className="py-3 px-4 font-bold text-slate-200">{row.country}</td>
                                <td className="py-3 px-4">
                                  <Badge className={getRelationColor(row.relationStatus)}>
                                    {row.relationStatus}
                                  </Badge>
                                </td>
                                <td className="py-3 px-4">
                                  <span className={`font-bold ${getTensionColor(row.tensionScore)}`}>
                                    {row.tensionScore}/10
                                  </span>
                                </td>
                                <td className="py-3 px-4">
                                  <div className="flex flex-wrap gap-1">
                                    {row.keyDisputes.slice(0, 2).map((d, i) => (
                                      <span key={i} className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-400">
                                        {d}
                                      </span>
                                    ))}
                                  </div>
                                </td>
                                <td className="py-3 px-4 text-sm text-slate-400">{row.uaeInvestmentLevel}</td>
                              </motion.tr>
                            )) : (
                              <tr className="border-b border-slate-700/50">
                                <td colSpan={5} className="py-4 text-center text-slate-500">
                                  No diplomatic data available
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Morocco UAE Economics */}
                {moroccoEconomics && (
                  <motion.div variants={scaleIn}>
                    <Card className="glass-card backdrop-blur-md border-emerald-500/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                          <TrendingUp className="h-5 w-5" />
                          Morocco-UAE Economic Partnership
                        </CardTitle>
                        <CardDescription>Key economic indicators and investments</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                          <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                            <p className="text-sm text-slate-400">UAE FDI to Morocco</p>
                            <p className="text-2xl font-bold text-emerald-400">{moroccoEconomics.uaeFdiToMorocco}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                            <p className="text-sm text-slate-400">Share of Total FDI</p>
                            <p className="text-2xl font-bold text-platinum">{moroccoEconomics.uaeShareOfTotalFdi}%</p>
                          </div>
                          <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                            <p className="text-sm text-slate-400">Megadeal Value</p>
                            <p className="text-2xl font-bold text-gold-400">{moroccoEconomics.megadealValue}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                            <p className="text-sm text-slate-400">Moroccan Community</p>
                            <p className="text-2xl font-bold text-slate-200">{moroccoEconomics.moroccanCommunityInUae.toLocaleString()}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Key Dates Timeline */}
                {extendedData?.diplomaticKeyDates && extendedData.diplomaticKeyDates.length > 0 && (
                  <motion.div variants={scaleIn}>
                    <Card className="glass-card backdrop-blur-md border-platinum/10">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Activity className="h-5 w-5 text-platinum" />
                          Key Diplomatic Dates
                        </CardTitle>
                        <CardDescription>Timeline of significant events</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-platinum via-emerald-500 to-slate-700" />
                          <div className="space-y-4">
                            {extendedData.diplomaticKeyDates.map((event, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="relative pl-10"
                              >
                                <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full bg-platinum border-2 border-navy-950" />
                                <div className="flex items-center gap-4">
                                  <span className="text-sm font-bold text-platinum min-w-[80px]">{event.date}</span>
                                  <div>
                                    <p className="text-slate-200 font-medium">{event.event}</p>
                                    <p className="text-xs text-slate-500">{event.countriesInvolved}</p>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            </GlassPanel>
          </TabsContent>

          {/* Diaspora Tab */}
          <TabsContent value="diaspora" className="space-y-6">
            <GlassPanel title="Maghrebi Diaspora in UAE" description="Community presence and worker statistics">
              <div className="space-y-6">
                {/* Worker Statistics */}
                {workerStats && (
                  <motion.div variants={scaleIn}>
                    <Card className="glass-card backdrop-blur-md border-rose-500/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                          <Users className="h-5 w-5" />
                          UAE Foreign Worker Statistics
                        </CardTitle>
                        <CardDescription>Migration and labor rights metrics</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                          <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                            <p className="text-sm text-slate-400">Total Migrant Workers</p>
                            <p className="text-2xl font-bold text-rose-400">{workerStats.totalMigrantWorkers.toLocaleString()}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                            <p className="text-sm text-slate-400">Migrant % of Population</p>
                            <p className="text-2xl font-bold text-platinum">{workerStats.migrantPercentageOfPopulation}%</p>
                          </div>
                          <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                            <p className="text-sm text-slate-400">Modern Slavery Victims</p>
                            <p className="text-2xl font-bold text-rose-400">{workerStats.modernSlaveryVictims.toLocaleString()}</p>
                          </div>
                          <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                            <p className="text-sm text-slate-400">Labour Rights Index</p>
                            <p className="text-2xl font-bold text-yellow-400">{workerStats.labourRightsIndexScore}/100</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Maghrebi Workers Origin */}
                {entityRegistries?.maghrebiWorkersOrigin && (
                  <motion.div variants={scaleIn}>
                    <Card className="glass-card backdrop-blur-md border-platinum/10">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <UsersRound className="h-5 w-5 text-platinum" />
                          Maghrebi Workers Origin Countries
                        </CardTitle>
                        <CardDescription>Estimated workers in UAE by country</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {entityRegistries.maghrebiWorkersOrigin.map((worker, idx) => (
                            <motion.div
                              key={worker.country}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700/50"
                            >
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-platinum/20 to-platinum/5 flex items-center justify-center">
                                  <Users className="h-5 w-5 text-platinum" />
                                </div>
                                <div>
                                  <p className="font-bold text-slate-200">{worker.country}</p>
                                  <p className="text-sm text-slate-500">{worker.primarySectors}</p>
                                </div>
                              </div>
                              <Badge className="bg-platinum/20 text-platinum border-platinum/50">
                                {worker.estimatedWorkers}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* GCC Demographics */}
                {gccDemographics.length > 0 && (
                  <motion.div variants={scaleIn}>
                    <Card className="glass-card backdrop-blur-md border-platinum/10">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Globe className="h-5 w-5 text-platinum" />
                          GCC Demographic Overview
                        </CardTitle>
                        <CardDescription>Regional population and migration data</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {gccDemographics.map((country, idx) => (
                            <motion.div
                              key={country.country}
                              initial={{ scale: 0.95, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: idx * 0.03 }}
                              whileHover={{ scale: 1.02 }}
                              className={`p-4 rounded-lg border ${
                                country.country === 'UAE'
                                  ? 'bg-gradient-to-br from-platinum/10 to-platinum/5 border-platinum/30'
                                  : 'bg-slate-800/50 border-slate-700/50'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-slate-200">{country.country}</span>
                                {country.country === 'UAE' && (
                                  <Badge className="bg-platinum/20 text-platinum text-xs">FOCUS</Badge>
                                )}
                              </div>
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-slate-500">Population</span>
                                  <span className="text-slate-300">{country.totalPopulation.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-500">% Foreign</span>
                                  <span className="text-slate-300">{country.percentForeign}%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-500">Migrant Stock</span>
                                  <span className="text-slate-300">{country.migrantStock.toLocaleString()}</span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            </GlassPanel>
          </TabsContent>

        </Tabs>
        </motion.div>
    </motion.div>
  )
}
