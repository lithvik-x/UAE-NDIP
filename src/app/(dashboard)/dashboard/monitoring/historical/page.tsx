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
  AreaChart,
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Archive,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Database,
  FileText,
  Flag,
  Globe,
  History,
  Layers,
  Link2,
  MapPin,
  Newspaper,
  Radio,
  Scale,
  Search,
  Shield,
  Signal,
  TrendingUp,
  Users,
  XCircle,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  historicalEnrichmentMetadata,
  historicalKPIs,
  preModernNewspaperArchives,
  gulfNewsTimeline,
  academicDatabases,
  nlaData,
  nlaDigitalArchiveTopics,
  nlaAerialPhotography,
  oralHistoryPrograms,
  encyclopediaOfUAEHistory,
  historicalImageCollections,
  earlyInternetData,
  socialMediaEraData,
  dataReportal2024,
  platformReachDataReportal,
  platformYoYGrowth,
  globalMediaInsight2024,
  mostUsedPlatformsGMI,
  favoritePlatforms,
  timeSpentOnApps,
  socialMediaDemographics,
  reasonsForSocialMedia,
  monitoringRecentEraData,
  organizationsRegistry,
  mediaPersonRegistry,
  mediaEventRegistry,
  tierDefinitions,
  sourceRatingsTable,
  kpiSet1HistoricalArchiveCoverage,
  kpiSet2MediaEvolution,
  kpiSet3HistoricalEventsImpact,
  kpiSet4SourceReliabilityMatrix,
  uaeRelevanceAssessmentSummary,
  dataGaps,
  failedUrls,
  keySourceDomains,
  topicSentimentAnalysis,
} from '@/lib/data-loader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function HistoricalBaselinePage() {
  // Enrichment stats
  const enrichmentStats = [
    { label: 'URLs Analyzed', value: historicalEnrichmentMetadata.totalUrlsAnalyzed, icon: <Link2 className="h-5 w-5" />, color: 'gold' },
    { label: 'Successfully Fetched', value: historicalEnrichmentMetadata.urlsSuccessfullyFetched, icon: <CheckCircle className="h-5 w-5" />, color: 'emerald' },
    { label: 'Failed/Blocked', value: historicalEnrichmentMetadata.urlsFailedBlocked, icon: <XCircle className="h-5 w-5" />, color: 'rose' },
    { label: 'Data Points', value: historicalEnrichmentMetadata.dataPointsExtracted, icon: <Database className="h-5 w-5" />, color: 'indigo' },
  ]

  // Query distribution by era
  const queryDistribution = [
    { era: 'Pre-2000', queries: 100000, color: CHART_COLORS.gold },
    { era: '2000-2010', queries: 500000, color: CHART_COLORS.navy },
    { era: '2010-2020', queries: 2000000, color: CHART_COLORS.emerald },
    { era: '2020-2026', queries: 5000000, color: CHART_COLORS.rose },
  ]

  // Sentiment distribution data
  const sentimentDistribution = [
    { name: 'Critical Relevance', value: 32, color: CHART_COLORS.rose },
    { name: 'High Relevance', value: 38, color: CHART_COLORS.gold },
    { name: 'Medium Relevance', value: 12, color: CHART_COLORS.navy },
    { name: 'Low Relevance', value: 5, color: CHART_COLORS.platinum },
  ]

  // Source tier distribution
  const tierDistribution = [
    { tier: 'Tier 0 (Gov)', count: 8, color: CHART_COLORS.gold },
    { tier: 'Tier 1 (Intl)', count: 5, color: CHART_COLORS.emerald },
    { tier: 'Tier 2 (Media)', count: 35, color: CHART_COLORS.navy },
    { tier: 'Tier 3 (Aggregated)', count: 22, color: CHART_COLORS.rose },
    { tier: 'Tier 4 (UGC)', count: 2, color: CHART_COLORS.platinum },
  ]

  // Coverage scores by era
  const coverageData = kpiSet1HistoricalArchiveCoverage.slice(0, 4).map(item => ({
    era: item.era,
    coverage: parseInt(item.coverageScore),
  }))

  // NLA subject distribution
  const nlaTopicsData = nlaDigitalArchiveTopics.slice(0, 6).map(item => ({
    topic: item.topic,
    items: item.items,
  }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">HISTORICAL BASELINE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">Historical Baseline Research</h1>
          <p className="mt-2 text-platinum-500-400">
            Comprehensive archival intelligence across Pre-Modern, Early Internet, Social Media, and Recent Eras
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Archive className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-500-950 gap-2">
            <History className="h-4 w-4" />
            Generate Baseline
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {enrichmentStats.map((stat, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <MetricCard
              title={stat.label}
              value={stat.value}
              icon={stat.icon}
              gradient={stat.color as 'gold' | 'emerald' | 'rose' | 'indigo'}
              status="info"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Main KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Queries Required"
          value="8M+"
          previousValue={7500000}
          icon={<Search className="h-6 w-6" />}
          gradient="gold"
          status="info"
        />
        <MetricCard
          title="Coverage Score"
          value="72.5%"
          previousValue={68}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Entity Registries"
          value={historicalEnrichmentMetadata.entityRegistryEntries}
          icon={<Building2 className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Structured Tables"
          value={historicalEnrichmentMetadata.structuredTablesAdded}
          icon={<Layers className="h-6 w-6" />}
          gradient="rose"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="premodern">Pre-Modern Era</TabsTrigger>
          <TabsTrigger value="earlyinternet">Early Internet</TabsTrigger>
          <TabsTrigger value="socialmedia">Social Media Era</TabsTrigger>
          <TabsTrigger value="recent">Recent Era</TabsTrigger>
          <TabsTrigger value="entities">Entity Registries</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="sources">Source Credibility</TabsTrigger>
          <TabsTrigger value="gaps">Data Gaps</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Historical Baseline Overview" description="Four-era comprehensive archive coverage">
            <div className="space-y-6">
              {/* Query Distribution & Coverage */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Search className="h-5 w-5 text-gold-700" />
                      Query Distribution by Era
                    </CardTitle>
                    <CardDescription>8M+ total queries across four historical periods</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={queryDistribution.map(q => ({ name: q.era, value: q.queries, color: q.color }))}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-500" />
                      Coverage Scores by Era
                    </CardTitle>
                    <CardDescription>Archive completeness assessment per period</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={coverageData}
                      xAxisKey="era"
                      bars={[{ dataKey: 'coverage', name: 'Coverage %', color: CHART_COLORS.gold }]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* UAE Relevance Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Flag className="h-5 w-5 text-rose-500" />
                    UAE Relevance Distribution
                  </CardTitle>
                  <CardDescription>Source relevance assessment across 87 sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <PieChart
                      data={sentimentDistribution}
                      height={250}
                      showLegend={true}
                    />
                    <div className="space-y-3">
                      {uaeRelevanceAssessmentSummary.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`h-3 w-3 rounded-full ${
                              item.rating === 'Critical' ? 'bg-rose' :
                              item.rating === 'High' ? 'bg-gold' :
                              item.rating === 'Medium' ? 'bg-navy' : 'bg-platinum'
                            }`} />
                            <span className="text-sm font-medium text-platinum-500-200">{item.rating}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-platinum-500-400">{item.count} sources ({item.percentage})</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Source Domains */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-navy-500" />
                    Key Source Domains
                  </CardTitle>
                  <CardDescription>Primary sources by tier classification</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {keySourceDomains.map((source, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 hover:bg-platinum-800/50 transition-colors"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-platinum-500-200">{source.domain}</p>
                            <p className="text-xs text-platinum-500-400">{source.classification}</p>
                          </div>
                          <Badge variant="outline" className={`text-xs ${
                            source.tier.includes('Tier 0') ? 'border-gold-700/50 text-gold-700' :
                            source.tier.includes('Tier 2') ? 'border-navy/50 text-navy-500' :
                            'border-rose-500/50 text-rose-500'
                          }`}>
                            {source.tier}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Pre-Modern Era Tab */}
        <TabsContent value="premodern" className="space-y-6">
          <GlassPanel title="Phase 1: Pre-Modern Era (Pre-2000)" description="Foundational archival sources establishing historical baseline">
            <div className="space-y-6">
              {/* Key Archives Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard title="NLA Documents" value="Millions" icon={<Building2 className="h-6 w-6" />} gradient="gold" />
                <MetricCard title="Aerial Photos" value="52,500+" icon={<MapPin className="h-6 w-6" />} gradient="emerald" />
                <MetricCard title="Al-Ittihad Issues" value="53" icon={<Newspaper className="h-6 w-6" />} gradient="indigo" />
                <MetricCard title="NYU Akkasah" value="33,000+" icon={<Archive className="h-6 w-6" />} gradient="rose" />
              </div>

              {/* NLA Subject Topics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-gold-700" />
                    NLA Subject Topics Distribution
                  </CardTitle>
                  <CardDescription>Collection focus areas by item count</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={nlaTopicsData}
                    xAxisKey="topic"
                    bars={[{ dataKey: 'items', name: 'Items', color: CHART_COLORS.gold }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Al-Ittihad Archives */}
              <div className="grid gap-6 lg:grid-cols-2">
                {preModernNewspaperArchives.map((archive, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Newspaper className="h-5 w-5 text-gold-700" />
                        {archive.name}
                      </CardTitle>
                      <CardDescription>{archive.collectionSize} | {archive.issuesAvailable} issues</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                            <div className="text-xs text-platinum-500-400">Language</div>
                            <div className="text-sm font-medium text-platinum-500-200">{archive.language}</div>
                          </div>
                          <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                            <div className="text-xs text-platinum-500-400">OCR Confidence</div>
                            <div className="text-sm font-medium text-emerald-500">{archive.ocrConfidence}</div>
                          </div>
                          <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                            <div className="text-xs text-platinum-500-400">Views</div>
                            <div className="text-sm font-medium text-platinum-500-200">{archive.viewStatistics.split(' ')[0]}</div>
                          </div>
                          <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                            <div className="text-xs text-platinum-500-400">Credibility</div>
                            <div className="text-sm font-medium text-gold-700">{archive.credibilityScore}</div>
                          </div>
                        </div>
                        <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                          <div className="text-xs text-platinum-500-400 mb-1">Formats</div>
                          <div className="flex flex-wrap gap-1">
                            {archive.formats.slice(0, 4).map((format, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{format}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Gulf News Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-navy-500" />
                    Gulf News Historical Timeline
                  </CardTitle>
                  <CardDescription>1978-2023 media evolution milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {gulfNewsTimeline.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-4 p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                        >
                          <div className="shrink-0 w-16 text-center">
                            <span className="text-sm font-bold text-gold-700">{item.year}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-platinum-500-200">{item.event}</p>
                            <p className="text-xs text-platinum-500-400 mt-1">{item.details}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Oral History Programs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-500" />
                    Oral History Programs
                  </CardTitle>
                  <CardDescription>Preserving history through personal narratives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-2">
                    {oralHistoryPrograms.map((program, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4 hover:bg-platinum-800/50 transition-colors cursor-pointer"
                      >
                        <h4 className="font-semibold text-platinum-500-200 mb-2">{program.name}</h4>
                        <div className="space-y-1">
                          <p className="text-xs text-platinum-500-400">
                            <span className="font-medium text-platinum-500-300">Focus:</span> {program.programFocus}
                          </p>
                          <p className="text-xs text-platinum-500-400">
                            <span className="font-medium text-platinum-500-300">Subjects:</span> {program.interviewSubjects}
                          </p>
                          <p className="text-xs text-platinum-500-400">
                            <span className="font-medium text-platinum-500-300">Output:</span> {program.outputFormats?.join(', ')}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Early Internet Tab */}
        <TabsContent value="earlyinternet" className="space-y-6">
          <GlassPanel title="Phase 2: Early Internet Era (2000-2010)" description="Web archives, forums, and early digital media sources">
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard title="Wayback Archive" value="624B+" icon={<Globe className="h-6 w-6" />} gradient="indigo" />
                <MetricCard title="Wayback Coverage" value="High" icon={<Signal className="h-6 w-6" />} gradient="emerald" />
                <MetricCard title="LexisNexis Sources" value="40,000+" icon={<Database className="h-6 w-6" />} gradient="gold" />
                <MetricCard title="Archive Rate" value="82.8%" icon={<CheckCircle className="h-6 w-6" />} gradient="rose" />
              </div>

              {/* Emirates Discussion Forum */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Radio className="h-5 w-5 text-rose-500" />
                    Emirates Discussion Forum
                  </CardTitle>
                  <CardDescription>UAE's only credible online discussion forum (2009-2017)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                        <div className="text-xs text-platinum-500-400">Founded</div>
                        <div className="text-lg font-bold text-gold-700">August 2009</div>
                      </div>
                      <div className="p-3 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                        <div className="text-xs text-platinum-500-400">Status</div>
                        <div className="text-lg font-bold text-rose-500">Shut Down</div>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
                      <p className="text-sm text-platinum-500-300 mb-2">Censorship Timeline:</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose mt-1.5" />
                          <p className="text-xs text-platinum-500-400">Nov 2009: First censorship action (atheism article)</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose mt-1.5" />
                          <p className="text-xs text-platinum-500-400">Feb 7, 2010: Complete access disruption in UAE</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose mt-1.5" />
                          <p className="text-xs text-platinum-500-400">May 2017: Account suspended globally</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Academic & Government Databases */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-emerald-500" />
                    Academic & Government Databases
                  </CardTitle>
                  <CardDescription>Tier 0-2 source networks for archival research</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* NLA Data */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg border border-gold-700/30 bg-platinum-800/30"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-platinum-500-200">National Library and Archives (NLA)</h4>
                        <Badge variant="outline" className="border-gold-700/50 text-gold-700">Tier 0</Badge>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">Established</div>
                          <div className="text-sm font-medium text-platinum-500-200">{nlaData.established}</div>
                        </div>
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">Historical Span</div>
                          <div className="text-sm font-medium text-platinum-500-200">{nlaData.historicalSpan}</div>
                        </div>
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">Credibility</div>
                          <div className="text-sm font-medium text-emerald-500">{nlaData.credibilityScore}</div>
                        </div>
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">Languages</div>
                          <div className="text-sm font-medium text-platinum-500-200">{nlaData.languages.length}</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* LexisNexis */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="p-4 rounded-lg border border-navy/30 bg-platinum-800/30"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-platinum-500-200">LexisNexis</h4>
                        <Badge variant="outline" className="border-navy/50 text-navy-500">Tier 2</Badge>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">Archive Coverage</div>
                          <div className="text-sm font-medium text-platinum-500-200">40+ years</div>
                        </div>
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">Sources</div>
                          <div className="text-sm font-medium text-platinum-500-200">40,000+</div>
                        </div>
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">Publishers</div>
                          <div className="text-sm font-medium text-platinum-500-200">4,000+</div>
                        </div>
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">Countries</div>
                          <div className="text-sm font-medium text-platinum-500-200">200</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              {/* National Media Office History */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-gold-700" />
                    UAE Media History Milestones
                  </CardTitle>
                  <CardDescription>Key developments in UAE media landscape</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {earlyInternetData.nationalMediaOfficeHistory.milestones.map((milestone, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center gap-4 p-2 rounded-lg hover:bg-platinum-800/30 transition-colors"
                        >
                          <div className="shrink-0 w-20">
                            <span className="text-sm font-bold text-gold-700">{milestone.year}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-platinum-500-300">{milestone.event}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Social Media Era Tab */}
        <TabsContent value="socialmedia" className="space-y-6">
          <GlassPanel title="Phase 3: Social Media Era (2010-2020)" description="Digital platform evolution and social media statistics">
            <div className="space-y-6">
              {/* Key Stats */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard title="Population" value="9.55M" icon={<Users className="h-6 w-6" />} gradient="gold" />
                <MetricCard title="Internet Users" value="9.46M" icon={<Globe className="h-6 w-6" />} gradient="emerald" />
                <MetricCard title="Social Media Users" value="10.73M" icon={<Signal className="h-6 w-6" />} gradient="indigo" />
                <MetricCard title="Internet Penetration" value="99%" icon={<TrendingUp className="h-6 w-6" />} gradient="rose" />
              </div>

              {/* Platform Reach */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Layers className="h-5 w-5 text-gold-700" />
                    Platform Reach (% of Population)
                  </CardTitle>
                  <CardDescription>DataReportal 2024 - UAE Digital Statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {platformReachDataReportal.map((platform, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-platinum-500-200">{platform.platform}</span>
                          <span className="text-sm text-platinum-500-400">{platform.users} ({platform.penetration})</span>
                        </div>
                        <Progress
                          value={parseFloat(platform.penetration)}
                          className="h-2"
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* YoY Growth */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    Year-over-Year Platform Growth
                  </CardTitle>
                  <CardDescription>Platform growth rates in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-5">
                    {platformYoYGrowth.map((platform, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4 text-center hover:bg-platinum-800/50 transition-colors cursor-pointer"
                      >
                        <div className="text-lg font-bold text-emerald-500">{platform.growth}</div>
                        <div className="text-xs text-platinum-500-400 mt-1">{platform.platform}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Most Used Platforms - GMI */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-navy-500" />
                    Most Used Platforms (GMI 2024)
                  </CardTitle>
                  <CardDescription>Global Media Insight social media statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {mostUsedPlatformsGMI.map((platform, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
                      >
                        <div className="text-sm font-semibold text-platinum-500-200">{platform.platform}</div>
                        <div className="text-xs text-platinum-500-400 mt-1">Penetration: {platform.penetration}</div>
                        <div className="text-xs text-emerald-500 mt-1">{platform.users}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Time Spent & Demographics */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Time Spent on Apps (Monthly Hours)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={timeSpentOnApps.map(app => ({ app: app.app, hours: parseInt(app.hours) }))}
                      xAxisKey="app"
                      bars={[{ dataKey: 'hours', name: 'Hours', color: CHART_COLORS.gold }]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Social Media Demographics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-500-300">Male</span>
                          <span className="text-sm font-bold text-platinum-500-200">{socialMediaDemographics.males}</span>
                        </div>
                        <Progress value={70.2} className="h-3" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-platinum-500-300">Female</span>
                          <span className="text-sm font-bold text-platinum-500-200">{socialMediaDemographics.females}</span>
                        </div>
                        <Progress value={29.8} className="h-3" />
                      </div>
                      <div className="mt-4 p-3 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                        <p className="text-xs text-platinum-500-400">Highest Engagement: <span className="text-emerald-500">{socialMediaDemographics.highestEngagement}</span></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Recent Era Tab */}
        <TabsContent value="recent" className="space-y-6">
          <GlassPanel title="Phase 4: Recent Era (2020-2026)" description="COVID-19, Abraham Accords, Expo 2020, and COP28">
            <div className="space-y-6">
              {/* Key Event Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                <MetricCard title="COVID Cases" value="1.07M" icon={<Shield className="h-6 w-6" />} gradient="rose" />
                <MetricCard title="COVID Deaths" value="2,349" icon={<XCircle className="h-6 w-6" />} gradient="rose" />
                <MetricCard title="Vaccine Doses" value="24.9M" icon={<CheckCircle className="h-6 w-6" />} gradient="emerald" />
                <MetricCard title="COP28 Participants" value="80,000+" icon={<Users className="h-6 w-6" />} gradient="gold" />
                <MetricCard title="Abraham Fund" value="$0" icon={<Scale className="h-6 w-6" />} gradient="indigo" />
              </div>

              {/* COVID Timeline */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-rose-500" />
                    UAE COVID-19 Timeline
                  </CardTitle>
                  <CardDescription>Key milestones from first case to vaccination success</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {monitoringRecentEraData.covid19UAE && (
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                          <div className="text-xs text-platinum-500-400">Confirmed</div>
                          <div className="text-lg font-bold text-rose-500">{monitoringRecentEraData.covid19UAE.confirmedCases}</div>
                        </div>
                        <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                          <div className="text-xs text-platinum-500-400">Recovered</div>
                          <div className="text-lg font-bold text-emerald-500">{monitoringRecentEraData.covid19UAE.recovered}</div>
                        </div>
                        <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                          <div className="text-xs text-platinum-500-400">Deaths</div>
                          <div className="text-lg font-bold text-platinum-500-200">{monitoringRecentEraData.covid19UAE.deaths}</div>
                        </div>
                        <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                          <div className="text-xs text-platinum-500-400">Fatality Rate</div>
                          <div className="text-lg font-bold text-gold-700">{monitoringRecentEraData.covid19UAE.fatalityRate}</div>
                        </div>
                      </div>
                    )}
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-2">
                        {monitoringRecentEraData.covidTimeline.map((event, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-platinum-800/30 transition-colors"
                          >
                            <div className={`h-2 w-2 rounded-full mt-1.5 ${
                              event.sentiment === 'Negative' ? 'bg-rose' :
                              event.sentiment === 'Positive' || event.sentiment === 'Critical Positive' ? 'bg-emerald' :
                              'bg-platinum-500'
                            }`} />
                            <div className="flex-1">
                              <p className="text-xs text-platinum-500-400">{event.date}</p>
                              <p className="text-sm text-platinum-500-200">{event.event}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>

              {/* COP28 */}
              <Card className="glass-card border-gold-700/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-gold-700" />
                    COP28 Dubai 2023
                  </CardTitle>
                  <CardDescription>UN Climate Change Conference - UAE Consensus outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Financial Commitments */}
                    <div className="p-3 rounded-lg bg-gold-700/10 border border-gold-700/30">
                      <h4 className="text-sm font-semibold text-gold-700 mb-2">Financial Commitments (Day 1)</h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">UAE</div>
                          <div className="text-sm font-bold text-gold-700">$100M</div>
                        </div>
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">Germany</div>
                          <div className="text-sm font-bold text-gold-700">$100M</div>
                        </div>
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">UK</div>
                          <div className="text-sm font-bold text-gold-700">$75M</div>
                        </div>
                        <div className="p-2 rounded bg-platinum-800/50">
                          <div className="text-xs text-platinum-500-400">Total Day 1</div>
                          <div className="text-sm font-bold text-emerald-500">$430M</div>
                        </div>
                      </div>
                    </div>

                    {/* UAE Consensus */}
                    <div className="p-3 rounded-lg bg-platinum-800/30 border border-platinum-700/50">
                      <h4 className="text-sm font-semibold text-platinum-500-200 mb-2">UAE Consensus Outcomes</h4>
                      <div className="grid gap-2">
                        {monitoringRecentEraData.cop28?.uaeConsensus?.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                            <div>
                              <p className="text-xs font-medium text-platinum-500-300">{item.achievement}</p>
                              <p className="text-xs text-platinum-500-400">{item.details}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Abraham Accords */}
              <Card className="glass-card border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-emerald-500" />
                    Abraham Accords (2020)
                  </CardTitle>
                  <CardDescription>Normalization agreements and economic impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                        <div className="text-xs text-platinum-500-400">Signed</div>
                        <div className="text-sm font-bold text-platinum-500-200">Sept 15, 2020</div>
                      </div>
                      <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                        <div className="text-xs text-platinum-500-400">Signatories</div>
                        <div className="text-sm font-bold text-emerald-500">UAE, Bahrain, Israel</div>
                      </div>
                      <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                        <div className="text-xs text-platinum-500-400">Defense Exports</div>
                        <div className="text-sm font-bold text-gold-700">$791M</div>
                      </div>
                      <div className="p-2 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                        <div className="text-xs text-platinum-500-400">Abraham Fund</div>
                        <div className="text-sm font-bold text-rose-500">Never funded</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entity Registries Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Entity Registries" description="Organizations, persons, and events from historical baseline research">
            <div className="space-y-6">
              {/* Tier Distribution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Tier Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={tierDistribution.map(t => ({ name: t.tier, value: t.count, color: t.color }))}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              {/* Organizations Registry */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-gold-700" />
                    Organizations Registry
                  </CardTitle>
                  <CardDescription>Key entities from historical baseline research</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[350px]">
                    <div className="space-y-2">
                      {organizationsRegistry.map((org, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 hover:bg-platinum-800/50 transition-colors"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-platinum-500-200">{org.entityName}</p>
                            <p className="text-xs text-platinum-500-400">{org.type}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={`text-xs ${
                              org.uaeRelevance === 'Critical' ? 'border-rose-500/50 text-rose-500' :
                              org.uaeRelevance === 'High' ? 'border-gold-700/50 text-gold-700' :
                              'border-platinum-500/50 text-platinum-500-400'
                            }`}>
                              {org.uaeRelevance}
                            </Badge>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Person Registry */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-500" />
                    Person Registry
                  </CardTitle>
                  <CardDescription>Key individuals in UAE historical narrative</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {mediaPersonRegistry.map((person, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 hover:bg-platinum-800/50 transition-colors"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-platinum-500-200">{person.name}</p>
                            <p className="text-xs text-platinum-500-400">{person.role} | {person.entity}</p>
                          </div>
                          <Badge variant="outline" className={`text-xs ${
                            person.uaeRelevance === 'Critical' ? 'border-rose-500/50 text-rose-500' :
                            person.uaeRelevance === 'High' ? 'border-gold-700/50 text-gold-700' :
                            'border-platinum-500/50 text-platinum-500-400'
                          }`}>
                            {person.uaeRelevance}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Event Registry */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-navy-500" />
                    Event Registry
                  </CardTitle>
                  <CardDescription>Historical milestones and key events</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {mediaEventRegistry.map((event, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 hover:bg-platinum-800/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-20 text-sm font-bold text-gold-700">{event.date}</div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-platinum-500-200">{event.event}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className={`text-xs ${
                            event.uaeRelevance === 'Critical' ? 'border-rose-500/50 text-rose-500' :
                            event.uaeRelevance === 'High' ? 'border-gold-700/50 text-gold-700' :
                            'border-platinum-500/50 text-platinum-500-400'
                          }`}>
                            {event.uaeRelevance}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis by Topic" description="Narrative polarity across key thematic areas">
            <div className="space-y-6">
              {Object.entries(topicSentimentAnalysis).map(([topic, analyses]) => (
                <Card key={topic} className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg capitalize flex items-center gap-2">
                      {topic === 'uaeMediaFreedom' && <Newspaper className="h-5 w-5 text-gold-700" />}
                      {topic === 'laborRights' && <Users className="h-5 w-5 text-rose-500" />}
                      {topic === 'politicalAgreements' && <Scale className="h-5 w-5 text-emerald-500" />}
                      {topic === 'climateEnvironment' && <Globe className="h-5 w-5 text-navy-500" />}
                      {topic.replace(/([A-Z])/g, ' $1').trim()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analyses.map((analysis, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-platinum-500-200">{analysis.source}</span>
                            <Badge variant="outline" className={`text-xs ${
                              analysis.sentiment === 'Positive' ? 'border-emerald-500/50 text-emerald-500' :
                              analysis.sentiment === 'Negative' ? 'border-rose-500/50 text-rose-500' :
                              'border-platinum-500/50 text-platinum-500-400'
                            }`}>
                              {analysis.sentiment} | {analysis.polarity}
                            </Badge>
                          </div>
                          <p className="text-xs text-platinum-500-400">{analysis.notes}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Source Credibility Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Source Credibility Matrix" description="Tiered classification for source reliability assessment">
            <div className="space-y-6">
              {/* Tier Definitions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Tier Definitions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 lg:grid-cols-5">
                    {tierDefinitions.map((tier, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className={`rounded-lg border p-3 text-center ${
                          idx === 0 ? 'border-gold-700/50 bg-gold-700/10' :
                          idx === 1 ? 'border-emerald-500/50 bg-emerald-500/10' :
                          idx === 2 ? 'border-navy/50 bg-navy/10' :
                          idx === 3 ? 'border-rose-500/50 bg-rose-500/10' :
                          'border-platinum-600/50 bg-platinum-800/30'
                        }`}
                      >
                        <div className="text-sm font-bold">{tier.tier}</div>
                        <p className="text-xs text-platinum-500-400 mt-1">{tier.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Source Ratings Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Ratings</CardTitle>
                  <CardDescription>Credibility scores by source URL</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {sourceRatingsTable.map((source, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30 hover:bg-platinum-800/50 transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-platinum-500-200 truncate">{source.sourceUrl}</p>
                            <p className="text-xs text-platinum-500-400">{source.dataQuality}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className={`text-xs ${
                              source.tier === 0 ? 'border-gold-700/50 text-gold-700' :
                              source.tier === 1 ? 'border-emerald-500/50 text-emerald-500' :
                              source.tier === 2 ? 'border-navy/50 text-navy-500' :
                              source.tier === 3 ? 'border-rose-500/50 text-rose-500' :
                              'border-platinum-500/50 text-platinum-500-400'
                            }`}>
                              Tier {source.tier}
                            </Badge>
                            <span className="text-sm font-bold text-gold-700">{source.credibilityScore}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Data Gaps Tab */}
        <TabsContent value="gaps" className="space-y-6">
          <GlassPanel title="Data Gaps & Recommendations" description="Identified limitations and suggested improvements">
            <div className="space-y-6">
              {/* Dashboard KPIs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Historical Archive Coverage KPIs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {kpiSet1HistoricalArchiveCoverage.map((kpi, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium text-platinum-500-200">{kpi.era}</p>
                          <p className="text-xs text-platinum-500-400">{kpi.primarySources}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-bold text-gold-700">{kpi.estimatedQueries}</span>
                          <span className="text-sm text-emerald-500">{kpi.coverageScore}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Data Gaps */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-rose-500" />
                    Identified Data Gaps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dataGaps.map((gap, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium text-platinum-500-200">{gap.gapArea}</p>
                          <p className="text-xs text-platinum-500-400">{gap.recommendation}</p>
                        </div>
                        <Badge variant="outline" className={`text-xs ${
                          gap.severity === 'High' ? 'border-rose-500/50 text-rose-500' :
                          gap.severity === 'Medium' ? 'border-gold-700/50 text-gold-700' :
                          'border-platinum-500/50 text-platinum-500-400'
                        }`}>
                          {gap.severity}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Failed URLs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Failed URL Access (15)</CardTitle>
                  <CardDescription>Sources that could not be accessed</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {failedUrls.map((url, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                        >
                          <div className="flex items-center gap-2">
                            <Badge variant="destructive" className="text-xs">{url.status}</Badge>
                            <span className="text-xs text-platinum-500-400">{url.url}</span>
                          </div>
                          <span className="text-xs text-emerald-500">{url.alternative}</span>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}