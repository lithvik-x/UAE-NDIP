'use client'

import { useState } from 'react'
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
  ArrowDown,
  ArrowUp,
  Banknote,
  BarChart3,
  Building2,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Database,
  Download,
  Eye,
  EyeOff,
  FileText,
  Filter,
  Flag,
  Folder,
  Globe,
  Hash,
  Info,
  Key,
  Layers,
  Lightbulb,
  Link2,
  List,
  Lock,
  Map,
  MapPin,
  MessageSquare,
  Network,
  Newspaper,
  Percent,
  PieChart as PieChartIcon,
  Radar,
  RefreshCw,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  Signal,
  ThumbsDown,
  ThumbsUp,
  AlertOctagon,
  TrendingDown,
  TrendingUp,
  Trophy,
  Twitter,
  Type,
  Umbrella,
  Upload,
  User,
  Users,
  Video,
  Wifi,
  XCircle,
  Zap,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useGapAnalysisData,
  gapQueryExecutions,
  gapSourceCredibilityMatrix,
  tierDefinitions,
  gapSentimentMatrix,
  gapUAERelevanceAssessment,
  uaeRegulatoryChanges2026,
  cybersecurityComplianceRequirements,
  uaeDigitalEconomyKPIs2026,
  digitalMarketingChannels,
  paymentTransformation2026,
  nonAITechTrendsME2026,
  mediaRelationsMetrics,
  mediaTierClassification,
  arabMediaSummit2026,
  dubaiPropertyMarketQ1_2026,
  gccConflictEconomicImpact,
  uaePopulation2026,
  populationByEmirates2026,
  ageDistribution2026,
  regionalStrainPoints,
  arabicAIGapMetrics,
  dictionaryGapsIdentified,
  childDigitalSafetyLaw,
  childDigitalSafetyCompliance,
  gracePeriodTimeline,
  visaFineStructure,
  april2026PolicyChanges,
  influencerPermitData,
  influencerPermitComplianceMatrix,
  uaeVisaPenaltyStructure,
  gapAnalysisOrganizations,
  gapAnalysisKeyIndividuals,
  gapAnalysisLaws,
  thematicSummary,
  gapEconomicKPIs,
  gapRegulatoryKPIs,
  gapDigitalEconomyKPIs,
  gapDemographicsKPIs,
  gapURLContentSummaries,
  gapAnalysisMetadata,
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
      staggerChildren: 0.05,
    },
  },
}

const slideIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
}

export default function GapAnalysisPage() {
  const { data } = useGapAnalysisData()
  const [activeTab, setActiveTab] = useState('overview')

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Gap Analysis data...</div>
      </div>
    )
  }

  // Key metrics for header
  const totalQueries = gapQueryExecutions.length
  const criticalRelevance = gapUAERelevanceAssessment.filter(g => g.relevanceLevel === 'Critical').length
  const successfulFetches = gapURLContentSummaries.filter(u => u.status === 'Success').length
  const highPriorityTopics = gapSentimentMatrix.filter(s => s.intensity === 'High' || s.intensity === 'Critical').length

  // Relevance level colors
  const getRelevanceColor = (level: string) => {
    switch (level) {
      case 'Critical': return 'text-rose-400'
      case 'High': return 'text-gold-400'
      case 'Medium': return 'text-emerald-400'
      default: return 'text-platinum-400'
    }
  }

  const getRelevanceBadge = (level: string) => {
    switch (level) {
      case 'Critical': return <Badge variant="destructive" className="bg-rose-500/20 text-rose-400 border-rose-500/50">{level}</Badge>
      case 'High': return <Badge variant="warning" className="bg-gold-500/20 text-gold-400 border-gold-500/50">{level}</Badge>
      case 'Medium': return <Badge variant="success" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">{level}</Badge>
      default: return <Badge variant="outline">{level}</Badge>
    }
  }

  // Calculate pie chart data for sentiment
  const sentimentPieData = gapSentimentMatrix.map((item, idx) => ({
    name: item.topic,
    value: item.intensity === 'Critical' ? 40 : item.intensity === 'High' ? 30 : 15,
    color: idx % 2 === 0 ? CHART_COLORS.rose : CHART_COLORS.gold,
  }))

  // Calculate pie chart data for relevance
  const relevancePieData = [
    { name: 'Critical', value: gapUAERelevanceAssessment.filter(g => g.relevanceLevel === 'Critical').length, color: CHART_COLORS.rose },
    { name: 'High', value: gapUAERelevanceAssessment.filter(g => g.relevanceLevel === 'High').length, color: CHART_COLORS.gold },
    { name: 'Medium', value: gapUAERelevanceAssessment.filter(g => g.relevanceLevel === 'Medium').length, color: CHART_COLORS.emerald },
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
          <Badge variant="gold" className="mb-2">M-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Gap Analysis Dashboard</h1>
          <p className="mt-2 text-platinum-400">
            Comprehensive coverage gap analysis across UAE media, regulatory, and digital landscape (12-8)
          </p>
          <div className="flex items-center gap-4 mt-3 text-sm text-platinum-500">
            <span>Generated: {gapAnalysisMetadata.generatedDate}</span>
            <span>|</span>
            <span>Enriched: {gapAnalysisMetadata.enrichedDate}</span>
            <span>|</span>
            <span>URLs: {gapAnalysisMetadata.totalUrlsProcessed} processed</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Filter className="h-4 w-4" />
            Filter Analysis
          </Button>
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
            title="Total Queries Executed"
            value={totalQueries}
            icon={<Search className="h-6 w-6" />}
            gradient="gold"
            status="info"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Critical Relevance Topics"
            value={criticalRelevance}
            icon={<AlertCircle className="h-6 w-6" />}
            gradient="rose"
            status="warning"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Successful URL Fetches"
            value={successfulFetches}
            previousValue={gapAnalysisMetadata.totalUrlsProcessed}
            icon={<Link2 className="h-6 w-6" />}
            gradient="emerald"
            status="success"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="High Priority Topics"
            value={highPriorityTopics}
            icon={<Signal className="h-6 w-6" />}
            gradient="indigo"
            status="info"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="queries">Queries</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="digital">Digital</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            {/* Thematic Summary */}
            <GlassPanel
              title="Thematic Summary"
              description="Key findings across all 10 gap analysis categories"
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {thematicSummary.slice(0, 8).map((theme, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4 hover:bg-platinum-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {getRelevanceBadge(theme.uaeRelevance)}
                      <span className={`text-xs ${getRelevanceColor(theme.uaeRelevance)}`}>
                        {theme.sentiment}
                      </span>
                    </div>
                    <h4 className="font-semibold text-platinum-200 mb-1">{theme.theme}</h4>
                    <p className="text-xs text-platinum-400 line-clamp-2">{theme.finding}</p>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Sentiment and Relevance Distribution */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ThumbsDown className="h-5 w-5 text-rose" />
                    Sentiment Distribution
                  </CardTitle>
                  <CardDescription>Overall sentiment by topic category</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentPieData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-gold" />
                    UAE Relevance Assessment
                  </CardTitle>
                  <CardDescription>Coverage gap priority levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={relevancePieData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Key Economic Indicators */}
            <Card className="glass-card border-gold/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-gold" />
                  Dashboard-Ready KPIs
                </CardTitle>
                <CardDescription>Key performance indicators from MD source data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {gapEconomicKPIs.slice(0, 4).map((kpi, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3 text-center hover:bg-platinum-800/50 transition-colors cursor-pointer"
                    >
                      <div className="text-lg font-bold text-gold">{kpi.currentValue}</div>
                      <div className="text-xs text-platinum-400 mt-1">{kpi.kpi}</div>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        {kpi.trend === 'Declining' ? (
                          <TrendingDown className="h-3 w-3 text-rose" />
                        ) : kpi.trend === 'Growing' ? (
                          <TrendingUp className="h-3 w-3 text-emerald" />
                        ) : null}
                        <span className="text-xs text-platinum-500">{kpi.trend}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Source Credibility Matrix */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald" />
                  Source Credibility Matrix
                </CardTitle>
                <CardDescription>Top sources by UAE relevance</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[250px]">
                  <div className="space-y-2">
                    {gapSourceCredibilityMatrix.slice(0, 10).map((source, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium text-platinum-200 truncate">{source.sourceUrl}</p>
                          <p className="text-xs text-platinum-500">{source.type}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getRelevanceBadge(source.uaeRelevance)}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Queries Tab */}
        <TabsContent value="queries" className="space-y-6">
          <GlassPanel
            title="Query Execution Summary"
            description="10 queries executed for gap analysis coverage"
          >
            <div className="space-y-4">
              {gapQueryExecutions.map((query, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  className="flex items-center justify-between p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30 hover:bg-platinum-800/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold font-bold">
                      {query.number}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-platinum-200">{query.query}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {query.status === 'Success' ? (
                          <CheckCircle className="h-4 w-4 text-emerald" />
                        ) : (
                          <XCircle className="h-4 w-4 text-rose" />
                        )}
                        <span className="text-xs text-platinum-500">{query.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {getRelevanceBadge(query.uaeRelevance)}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ThumbsDown className="h-5 w-5 text-rose" />
                  Sentiment Analysis Matrix
                </CardTitle>
                <CardDescription>Topic-level sentiment indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-3">
                    {gapSentimentMatrix.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-platinum-200">{item.topic}</h4>
                          <Badge
                            variant="outline"
                            className={`${
                              item.intensity === 'Critical' ? 'border-rose/50 text-rose' :
                              item.intensity === 'High' ? 'border-gold/50 text-gold' :
                              'border-platinum-500/50 text-platinum-400'
                            }`}
                          >
                            {item.intensity}
                          </Badge>
                        </div>
                        <p className="text-sm text-platinum-400 mb-2">{item.keyIndicators}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-platinum-500">Sentiment:</span>
                          <span className={`text-xs font-medium ${
                            item.overallSentiment.includes('Negative') ? 'text-rose' :
                            item.overallSentiment.includes('Positive') ? 'text-emerald' :
                            'text-platinum-400'
                          }`}>
                            {item.overallSentiment}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-gold" />
                  UAE Relevance Assessment
                </CardTitle>
                <CardDescription>Priority ranking by relevance level</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-3">
                    {gapUAERelevanceAssessment.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-platinum-200">{item.category}</h4>
                          {getRelevanceBadge(item.relevanceLevel)}
                        </div>
                        <p className="text-sm text-platinum-400">{item.rationale}</p>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Compliance Tab */}
        <TabsContent value="compliance" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Regulatory Changes 2026 */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-rose" />
                  UAE Regulatory Changes 2026
                </CardTitle>
                <CardDescription>Key regulatory updates and penalties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {uaeRegulatoryChanges2026.map((reg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-platinum-200 text-sm">{reg.regulation}</h4>
                        <span className="text-xs text-gold">{reg.effectiveDate}</span>
                      </div>
                      <p className="text-xs text-platinum-400 mb-1">{reg.keyChange}</p>
                      <p className="text-xs text-rose-400">{reg.penaltyImpact}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cybersecurity Compliance */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lock className="h-5 w-5 text-navy" />
                  Cybersecurity Compliance Requirements
                </CardTitle>
                <CardDescription>Frameworks and deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {cybersecurityComplianceRequirements.map((req, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-platinum-200 text-sm">{req.framework}</h4>
                        <span className="text-xs text-navy">{req.authority}</span>
                      </div>
                      <p className="text-xs text-platinum-400 mb-1">{req.keyRequirement}</p>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-platinum-500" />
                        <span className="text-xs text-platinum-500">{req.deadline}</span>
                        <span className="text-xs text-rose-400 ml-2">{req.penalty}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Influencer Permit Data */}
          <Card className="glass-card border-gold/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5 text-gold" />
                Influencer Permit Requirements
              </CardTitle>
              <CardDescription>Advertiser permit compliance matrix</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {influencerPermitData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 text-center"
                  >
                    <div className="text-lg font-bold text-gold">{item.value}</div>
                    <div className="text-xs text-platinum-400 mt-1">{item.attribute}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-platinum-300 mb-2">Compliance Matrix</h4>
                <div className="space-y-2">
                  {influencerPermitComplianceMatrix.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded bg-platinum-800/30">
                      <span className="text-sm text-platinum-300">{item.activity}</span>
                      <div className="flex items-center gap-2">
                        {item.permitRequired === 'Yes' ? (
                          <CheckCircle className="h-4 w-4 text-emerald" />
                        ) : (
                          <XCircle className="h-4 w-4 text-rose" />
                        )}
                        <Badge variant="outline" className="text-xs">{item.penalty}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Child Digital Safety Law */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Umbrella className="h-5 w-5 text-emerald" />
                Child Digital Safety Law
              </CardTitle>
              <CardDescription>Federal Decree-Law No. 26/2025 effective January 1, 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {childDigitalSafetyLaw.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-3 rounded-lg border border-emerald/30 bg-emerald/10 text-center"
                  >
                    <div className="text-lg font-bold text-emerald">{item.value}</div>
                    <div className="text-xs text-platinum-400 mt-1">{item.attribute}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-platinum-300 mb-2">Compliance Requirements</h4>
                <div className="space-y-2">
                  {childDigitalSafetyCompliance.map((req, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded bg-platinum-800/30">
                      <span className="text-sm text-platinum-300">{req.requirement}</span>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-platinum-500" />
                        <span className="text-xs text-platinum-500">{req.deadline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Population by Emirates */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold" />
                  Population by Emirates 2026
                </CardTitle>
                <CardDescription>UAE population distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {populationByEmirates2026.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-gold" />
                        <span className="text-sm font-medium text-platinum-200">{item.emirate}</span>
                      </div>
                      <span className="text-sm font-bold text-gold">{item.population}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Age Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-emerald" />
                  Age Distribution 2026
                </CardTitle>
                <CardDescription>Population breakdown by age group</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ageDistribution2026.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-platinum-300">{item.ageGroup}</span>
                        <span className="text-sm font-bold text-emerald">{item.percentage}</span>
                      </div>
                      <Progress
                        value={parseFloat(item.percentage)}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* UAE Population Overview */}
          <Card className="glass-card border-gold/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-gold" />
                UAE Population Overview
              </CardTitle>
              <CardDescription>Total population: 11.57 million</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {uaePopulation2026.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 text-center hover:bg-platinum-800/50 cursor-pointer"
                  >
                    <div className="text-lg font-bold text-gold">{item.value}</div>
                    <div className="text-xs text-platinum-400 mt-1">{item.metric}</div>
                    {item.share && (
                      <div className="text-xs text-emerald mt-1">{item.share}</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Regional Strain Points */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertOctagon className="h-5 w-5 text-rose" />
                Regional Strain Points
              </CardTitle>
              <CardDescription>UAE regional relationships and tensions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {regionalStrainPoints.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-lg border border-rose/30 bg-rose/10"
                  >
                    <h4 className="font-semibold text-rose mb-1">{item.strainPoint}</h4>
                    <p className="text-sm text-platinum-400 mb-2">{item.issue}</p>
                    <p className="text-xs text-platinum-500">{item.impact}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Digital Tab */}
        <TabsContent value="digital" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Digital Economy KPIs */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="h-5 w-5 text-gold" />
                  UAE Digital Economy KPIs 2026
                </CardTitle>
                <CardDescription>Digital transformation metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {uaeDigitalEconomyKPIs2026.map((kpi, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <span className="text-sm font-medium text-platinum-200">{kpi.metric}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-gold">{kpi.value}</span>
                        {kpi.yearOverYear && (
                          <Badge variant="outline" className="text-xs">
                            {kpi.yearOverYear}
                          </Badge>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Digital Marketing Channels */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-emerald" />
                  Digital Marketing Channels
                </CardTitle>
                <CardDescription>Platform performance and priority</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {digitalMarketingChannels.map((channel, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          channel.priority === 'Critical' ? 'bg-rose/20 text-rose' :
                          channel.priority === 'High' ? 'bg-gold/20 text-gold' :
                          'bg-emerald/20 text-emerald'
                        }`}>
                          <Signal className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-platinum-200">{channel.channel}</p>
                          <p className="text-xs text-platinum-500">{channel.trend}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-platinum-400">{channel.engagementRate}</span>
                        {getRelevanceBadge(channel.priority)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Transformation */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Banknote className="h-5 w-5 text-gold" />
                Payment Transformation 2026
              </CardTitle>
              <CardDescription>Six key changes coming to UAE payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {paymentTransformation2026.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30 hover:bg-platinum-800/50 cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-platinum-200">{item.change}</h4>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          item.status === 'Active' ? 'border-emerald/50 text-emerald' :
                          item.status === 'Pilot' ? 'border-gold/50 text-gold' :
                          'border-platinum-500/50 text-platinum-400'
                        }`}
                      >
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-platinum-400 mb-2">{item.description}</p>
                    <span className={`text-xs font-medium ${
                      item.impact === 'Critical' ? 'text-rose' :
                      item.impact === 'High' ? 'text-gold' :
                      'text-platinum-400'
                    }`}>
                      Impact: {item.impact}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Arabic AI Gap */}
          <Card className="glass-card border-emerald/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Type className="h-5 w-5 text-emerald" />
                Arabic AI Development Metrics
              </CardTitle>
              <CardDescription>MBZUAI research and Google $1M funding</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {arabicAIGapMetrics.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-3 rounded-lg border border-emerald/30 bg-emerald/10 text-center"
                  >
                    <div className="text-lg font-bold text-emerald">{item.value}</div>
                    <div className="text-xs text-platinum-400 mt-1">{item.attribute}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Media Tab */}
        <TabsContent value="media" className="space-y-6">
          {/* Media Relations */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Newspaper className="h-5 w-5 text-gold" />
                Media Relations Strategy
              </CardTitle>
              <CardDescription>Journalist engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {mediaRelationsMetrics.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 text-center hover:bg-platinum-800/50 cursor-pointer"
                  >
                    <div className="text-xl font-bold text-gold">{item.value}</div>
                    <div className="text-xs text-platinum-400 mt-1">{item.metric}</div>
                    <div className="text-xs text-platinum-500 mt-1">{item.implication}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tier Classification */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Layers className="h-5 w-5 text-navy" />
                Media Tier Classification
              </CardTitle>
              <CardDescription>UAE media outlets by tier</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mediaTierClassification.map((tier, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-navy border-navy">{tier.tier}</Badge>
                    </div>
                    <div className="space-y-1">
                      {tier.international && tier.international !== '—' && (
                        <p className="text-xs text-platinum-400">
                          <span className="text-platinum-500">Intl:</span> {tier.international}
                        </p>
                      )}
                      {tier.regional && tier.regional !== '—' && (
                        <p className="text-xs text-platinum-400">
                          <span className="text-platinum-500">Regional:</span> {tier.regional}
                        </p>
                      )}
                      {tier.local && tier.local !== '—' && (
                        <p className="text-xs text-platinum-400">
                          <span className="text-platinum-500">Local:</span> {tier.local}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Arab Media Summit 2026 */}
          <Card className="glass-card border-gold/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Trophy className="h-5 w-5 text-gold" />
                Arab Media Summit 2026
              </CardTitle>
              <CardDescription>March 31 - April 2, 2026 | Dubai World Trade Centre</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {arabMediaSummit2026.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-3 rounded-lg border border-gold/30 bg-gold/10 text-center"
                  >
                    <div className="text-sm font-bold text-gold">{item.value}</div>
                    <div className="text-xs text-platinum-400 mt-1">{item.attribute}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dubai Property Market */}
          <Card className="glass-card border-rose/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building2 className="h-5 w-5 text-rose" />
                Dubai Property Market Q1 2026
              </CardTitle>
              <CardDescription>Early signs of weakness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dubaiPropertyMarketQ1_2026.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-rose/30 bg-rose/10">
                    <span className="text-sm text-platinum-300">{item.metric}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-rose">{item.change}</span>
                      <span className="text-xs text-platinum-500">{item.source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          {/* Organizations */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building2 className="h-5 w-5 text-gold" />
                Entity Registry - Organizations
              </CardTitle>
              <CardDescription>Key organizations by UAE relevance</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-2">
                  {gapAnalysisOrganizations.map((org, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-platinum-200">{org.entity}</p>
                        <p className="text-xs text-platinum-500">{org.type} - {org.role}</p>
                      </div>
                      {getRelevanceBadge(org.uaeRelevance)}
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Key Individuals */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5 text-emerald" />
                Key Individuals
              </CardTitle>
              <CardDescription>Notable figures mentioned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {gapAnalysisKeyIndividuals.map((person, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-lg border border-emerald/30 bg-emerald/10"
                  >
                    <h4 className="font-semibold text-platinum-200">{person.name}</h4>
                    <p className="text-xs text-emerald">{person.role}, {person.organization}</p>
                    <p className="text-xs text-platinum-400 mt-1">{person.context}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Laws and Regulations */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Scale className="h-5 w-5 text-navy" />
                Laws and Regulations
              </CardTitle>
              <CardDescription>Key legal instruments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {gapAnalysisLaws.map((law, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-platinum-200 text-sm">{law.law}</h4>
                      <span className="text-xs text-platinum-500">{law.date}</span>
                    </div>
                    <p className="text-xs text-platinum-400">{law.keyProvision}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
