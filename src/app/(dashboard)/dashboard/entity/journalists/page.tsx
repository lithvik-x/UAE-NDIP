// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PieChart, BarChart, AreaChart, RadarChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  journalistsOverview,
  summaryMetrics,
  priorityCoverageAreas,
  gulfNewsOrganization,
  theNationalOrganization,
  alArabiyaOrganization,
  alJazeeraOrganization,
  alJazeeraArabicPresenters,
  alJazeeraEnglishPresenters,
  alJazeeraBureauChiefs,
  mbcGroupOrganization,
  skyNewsArabiaOrganization,
  wamOrganization,
  khaleejTimesOrganization,
  emiratiNationalJournalists,
  internationalJournalists,
  seniorAnchors,
  talkShowHosts,
  digitalContentCreators,
  femaleJournalists,
  columnists,
  awardRecipients2022,
  twitterAccounts,
  uaeRelevanceByOutlet,
  coverageCompleteness,
  sentimentByOutlet,
  mediaOrganizationsSummary,
  dubaiPressClub,
  queryPatternsExecuted,
  coverageGaps,
  enrichmentRecommendations,
  verificationStatus,
  minaAlOraibiProfile,
  ghinwaIbrahimProfile,
  keyStatistics,
  overallSentiment,
  coverageAreaAnalysis,
} from '@/lib/data/entity/journalists-data'
import {
  Newspaper,
  Users,
  Globe,
  Award,
  Twitter,
  TrendingUp,
  User,
  Star,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Building2,
  Tv,
  Radio,
  BookOpen,
  UsersRound,
  BarChart3,
  PieChart as PieChartIcon,
  Linkedin,
  MapPin,
  Globe2,
  Mail,
  Phone,
  Crown,
  Mic,
  MessageSquare,
  Edit3,
  Camera,
  Sparkles,
  Target,
  Shield,
  LineChart as LineChartIcon,
  Radar,
} from 'lucide-react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const cardHoverVariants = {
  rest: { scale: 1, opacity: 1 },
  hover: {
    scale: 1.02,
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
}

function getSentimentColor(sentiment: string): string {
  if (sentiment.includes('POSITIVE') || sentiment.includes('positive')) return 'text-emerald-500'
  if (sentiment.includes('NEGATIVE') || sentiment.includes('negative')) return 'text-red-500'
  if (sentiment.includes('MIXED') || sentiment.includes('mixed')) return 'text-amber-500'
  return 'text-platinum-500'
}

function getAlertBadgeVariant(alertLevel: string): 'success' | 'warning' | 'destructive' | 'secondary' {
  switch (alertLevel) {
    case 'GREEN': return 'success'
    case 'YELLOW': return 'warning'
    case 'RED': return 'destructive'
    default: return 'secondary'
  }
}

function formatCount(count: number | string): string {
  return count.toString()
}

export default function JournalistsPage() {
  const metrics = summaryMetrics
  const overview = journalistsOverview

  // Sentiment data for pie chart
  const sentimentData = [
    { name: 'Neutral', value: 65, color: CHART_COLORS.platinum },
    { name: 'Positive', value: 28, color: CHART_COLORS.success },
    { name: 'Mixed', value: 5, color: CHART_COLORS.warning },
    { name: 'Variable', value: 2, color: CHART_COLORS.info },
  ]

  // Coverage completeness chart data
  const coverageData = coverageCompleteness.map(c => ({
    outlet: c.outlet.length > 12 ? c.outlet.substring(0, 12) + '...' : c.outlet,
    coverage: c.coverage,
    fullName: c.outlet,
  }))

  // Relevance by outlet chart data
  const relevanceData = uaeRelevanceByOutlet.slice(0, 8).map(r => ({
    outlet: r.outlet.length > 10 ? r.outlet.substring(0, 10) + '...' : r.outlet,
    score: r.relevance === 'CRITICAL' ? 95 : r.relevance === 'HIGH' ? 80 : r.relevance === 'MEDIUM-HIGH' ? 65 : 50,
    fullName: r.outlet,
  }))

  // Organization distribution data
  const orgDistributionData = [
    { name: 'Al Jazeera', value: 158, color: CHART_COLORS.danger },
    { name: 'MBC Group', value: 5, color: CHART_COLORS.gold },
    { name: 'Al Arabiya', value: 10, color: CHART_COLORS.info },
    { name: 'Gulf News', value: 35, color: CHART_COLORS.success },
    { name: 'The National', value: 16, color: CHART_COLORS.navy },
    { name: 'International', value: 12, color: CHART_COLORS.indigo },
    { name: 'Other', value: 20, color: CHART_COLORS.secondary },
  ]

  // Outlet capability radar data
  const radarData = [
    { outlet: 'Gulf News', political: 85, business: 90, cultural: 75, regional: 88, international: 80 },
    { outlet: 'The National', political: 88, business: 82, cultural: 78, regional: 85, international: 90 },
    { outlet: 'Al Arabiya', political: 92, business: 78, cultural: 70, regional: 95, international: 85 },
    { outlet: 'Al Jazeera', political: 95, business: 75, cultural: 82, regional: 92, international: 95 },
    { outlet: 'MBC Group', political: 70, business: 85, cultural: 95, regional: 88, international: 75 },
  ]

  // Coverage area area chart data
  const coverageTrendData = [
    { year: '2022', political: 78, business: 85, cultural: 72, regional: 80 },
    { year: '2023', political: 82, business: 88, cultural: 76, regional: 83 },
    { year: '2024', political: 85, business: 90, cultural: 80, regional: 86 },
    { year: '2025', political: 88, business: 92, cultural: 84, regional: 89 },
    { year: '2026', political: 90, business: 93, cultural: 87, regional: 92 },
  ]

  // Gender distribution data
  const genderDistData = [
    { name: 'Male', value: 8, color: CHART_COLORS.info },
    { name: 'Female', value: 6, color: CHART_COLORS.rose },
  ]

  // Nationality distribution for international journalists
  const nationalityData = [
    { name: 'Lebanese', value: 8, color: CHART_COLORS.gold },
    { name: 'British', value: 5, color: CHART_COLORS.navy },
    { name: 'Egyptian', value: 2, color: CHART_COLORS.success },
    { name: 'Other', value: 7, color: CHART_COLORS.platinum },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-start justify-between"
      >
        <motion.div variants={itemVariants}>
          <Badge variant="gold" className="mb-2 text-xs font-bold tracking-wider uppercase">
            MEDIA INTELLIGENCE
          </Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy">
            UAE Journalists & Media Personalities
          </h1>
          <p className="mt-2 text-platinum-600 dark:text-platinum-400 max-w-2xl">
            Comprehensive registry of {overview.documentMetadata.totalEntities} journalists, presenters, anchors, and media personalities operating in the UAE and covering the Gulf region. Last enriched: {overview.documentMetadata.enriched}.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-3">
          <Badge variant="outline" className="gap-2 border-gold-300/50 text-gold-700 dark:text-gold-400">
            <Star className="h-4 w-4" />
            {formatCount(metrics.totalEntities)}+ Entities
          </Badge>
          <Badge variant="outline" className="gap-2 border-emerald-300/50 text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
            High Confidence
          </Badge>
        </motion.div>
      </motion.div>

      {/* Summary Metrics - Enhanced with more MetricCards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Total Entities"
            value={formatCount(metrics.totalEntities)}
            icon={<Users className="h-6 w-6" />}
            gradient="gold"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Emirati Nationals"
            value={formatCount(metrics.totalEmiratiNationals)}
            icon={<User className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Media Organizations"
            value={formatCount(metrics.totalMediaOrganizations)}
            icon={<Building2 className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Twitter Accounts"
            value={formatCount(metrics.totalTwitterAccounts)}
            icon={<Twitter className="h-6 w-6" />}
            gradient="purple"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Al Jazeera Arabic"
            value={formatCount(metrics.totalAlJazeeraArabicPresenters)}
            icon={<Tv className="h-6 w-6" />}
            gradient="danger"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Al Jazeera English"
            value={formatCount(metrics.totalAlJazeeraEnglishPresenters)}
            icon={<Globe className="h-6 w-6" />}
            gradient="info"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Bureau Chiefs"
            value={formatCount(metrics.totalAlJazeeraBureauChiefs)}
            icon={<MapPin className="h-6 w-6" />}
            gradient="rose"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Female Media Figures"
            value={formatCount(metrics.totalFemaleMediaPersonalities)}
            icon={<Sparkles className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-premium" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="outlets">By Outlet</TabsTrigger>
          <TabsTrigger value="journalists">Journalists</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="coverage">Coverage Analysis</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
          <TabsTrigger value="gaps">Gaps & Recommendations</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {/* Sentiment Distribution */}
            <motion.div variants={itemVariants}>
              <GlassPanel title="Sentiment Distribution" description="Overall sentiment across UAE media landscape">
                <div className="flex items-center justify-center py-4">
                  <PieChart
                    data={sentimentData}
                    height={280}
                    showLegend={true}
                    ariaLabel="Sentiment distribution across journalists"
                  />
                </div>
              </GlassPanel>
            </motion.div>

            {/* Coverage Completeness */}
            <motion.div variants={itemVariants}>
              <GlassPanel title="Data Completeness by Outlet" description="Coverage quality assessment per organization">
                <div className="h-64">
                  <BarChart
                    data={coverageData}
                    xAxisKey="outlet"
                    bars={[{ dataKey: 'coverage', name: 'Coverage %', color: CHART_COLORS.navy }]}
                    height={280}
                    showGrid={true}
                    ariaLabel="Coverage completeness by outlet"
                  />
                </div>
              </GlassPanel>
            </motion.div>
          </motion.div>

          {/* Coverage Trend Area Chart */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <GlassPanel title="Coverage Depth Trend" description="Media coverage intensity across focus areas 2022-2026">
              <div className="h-72">
                <AreaChart
                  data={coverageTrendData}
                  xAxisKey="year"
                  height={280}
                  showGrid={true}
                  ariaLabel="Coverage depth trend over years"
                  areas={[
                    { dataKey: 'political', name: 'Political', color: CHART_COLORS.gold, fill: 'url(#politicalGradient)' },
                    { dataKey: 'business', name: 'Business', color: CHART_COLORS.success, fill: 'url(#businessGradient)' },
                    { dataKey: 'cultural', name: 'Cultural', color: CHART_COLORS.info, fill: 'url(#culturalGradient)' },
                    { dataKey: 'regional', name: 'Regional', color: CHART_COLORS.navy, fill: 'url(#regionalGradient)' },
                  ]}
                />
              </div>
            </GlassPanel>
          </motion.div>

          {/* Priority Coverage Areas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <GlassPanel title="Priority Coverage Areas" description="Focus areas ranked by priority for UAE media intelligence">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {priorityCoverageAreas.map((area, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25"
                  >
                    <Badge
                      variant={
                        area.priority === 'CRITICAL' ? 'gold' :
                        area.priority === 'HIGH' ? 'navy-solid' :
                        area.priority === 'MEDIUM' ? 'emerald' : 'outline'
                      }
                      size="sm"
                    >
                      {area.priority}
                    </Badge>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-platinum-800 dark:text-platinum-200 truncate">
                        {area.focusArea}
                      </p>
                      <p className="text-xs text-platinum-500 dark:text-platinum-400 mt-0.5">
                        {area.coverageStatus}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Document Metadata */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <GlassPanel title="Document Metadata" description="Source and enrichment information">
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-platinum-500">File:</span>
                  <span className="font-medium text-platinum-800 dark:text-platinum-200">{overview.documentMetadata.file}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-platinum-500">Type:</span>
                  <span className="font-medium text-platinum-800 dark:text-platinum-200">People Registry</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-platinum-500">Enriched:</span>
                  <span className="font-medium text-platinum-800 dark:text-platinum-200">{overview.documentMetadata.enriched}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-platinum-500">Sources:</span>
                  <span className="font-medium text-platinum-800 dark:text-platinum-200">{overview.documentMetadata.sourceCount} queries</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-platinum-500">Pages Synthesized:</span>
                  <span className="font-medium text-platinum-800 dark:text-platinum-200">{overview.documentMetadata.pagesSynthesized}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-platinum-500">Confidence:</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">{overview.documentMetadata.confidence}</span>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* By Outlet Tab */}
        <TabsContent value="outlets" className="space-y-6">
          {/* Organization Distribution */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            <motion.div variants={itemVariants}>
              <GlassPanel title="Organization Distribution" description="Journalist count by media outlet">
                <div className="flex items-center justify-center py-4">
                  <PieChart
                    data={orgDistributionData}
                    donut={true}
                    height={300}
                    showLegend={true}
                    ariaLabel="Organization distribution"
                  />
                </div>
              </GlassPanel>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassPanel title="UAE Relevance by Outlet" description="Relevance scoring for each outlet">
                <div className="h-64">
                  <BarChart
                    data={relevanceData}
                    xAxisKey="outlet"
                    bars={[{ dataKey: 'score', name: 'Relevance Score', color: CHART_COLORS.gold }]}
                    height={300}
                    showGrid={true}
                    ariaLabel="UAE relevance by outlet"
                  />
                </div>
              </GlassPanel>
            </motion.div>
          </motion.div>

          {/* Outlet Capability Radar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <GlassPanel title="Outlet Capability Radar" description="Multi-dimensional comparison of major outlets">
              <div className="h-80 flex items-center justify-center">
                <RadarChart
                  data={radarData}
                  height={300}
                  metrics={[
                    { dataKey: 'political', name: 'Political', color: CHART_COLORS.gold },
                    { dataKey: 'business', name: 'Business', color: CHART_COLORS.success },
                    { dataKey: 'cultural', name: 'Cultural', color: CHART_COLORS.info },
                    { dataKey: 'regional', name: 'Regional', color: CHART_COLORS.navy },
                  ]}
                  ariaLabel="Outlet capability comparison"
                />
              </div>
            </GlassPanel>
          </motion.div>

          {/* Gulf News */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Gulf News"
              badge="35+ Staff"
              description={`${gulfNewsOrganization.type} | Based: ${gulfNewsOrganization.based}`}
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-platinum-500">Editor-in-Chief:</span>
                    <span className="ml-2 font-medium text-platinum-800 dark:text-platinum-200">{gulfNewsOrganization.editorInChief}</span>
                  </div>
                  <div>
                    <span className="text-platinum-500">Managing Editor:</span>
                    <span className="ml-2 font-medium text-platinum-800 dark:text-platinum-200">{gulfNewsOrganization.managingEditor}</span>
                  </div>
                </div>
                <div className="border-t border-platinum-200/50 dark:border-platinum-700/50 pt-4">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400 uppercase tracking-wider mb-2">Leadership</p>
                  <div className="grid grid-cols-1 gap-2">
                    {gulfNewsOrganization.leadership.slice(0, 6).map((leader, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-platinum-800 dark:text-platinum-200">{leader.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" size="sm">{leader.role}</Badge>
                          {leader.twitter && (
                            <a href={`https://twitter.com/${leader.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-xs">
                              {leader.twitter}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-platinum-200/50 dark:border-platinum-700/50 pt-4">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400 uppercase tracking-wider mb-2">Business & Finance Desk</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {gulfNewsOrganization.staff.filter(s => s.coverage?.toLowerCase().includes('business') || s.role.toLowerCase().includes('Business')).slice(0, 4).map((person, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span className="text-platinum-800 dark:text-platinum-200">{person.name}</span>
                        <Badge variant="outline" size="sm">{person.role}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* The National */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="The National"
              badge="15+ Staff"
              description={`${theNationalOrganization.type} | Based: ${theNationalOrganization.based}`}
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-platinum-500">Editor-in-Chief:</span>
                    <span className="ml-2 font-medium text-platinum-800 dark:text-platinum-200">{theNationalOrganization.editorInChief}</span>
                  </div>
                  <div>
                    <span className="text-platinum-500">Managing Editor:</span>
                    <span className="ml-2 font-medium text-platinum-800 dark:text-platinum-200">{theNationalOrganization.managingEditor}</span>
                  </div>
                </div>
                <div className="border-t border-platinum-200/50 dark:border-platinum-700/50 pt-4">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400 uppercase tracking-wider mb-2">Leadership</p>
                  <div className="grid grid-cols-1 gap-2">
                    {theNationalOrganization.leadership.slice(0, 6).map((leader, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-platinum-800 dark:text-platinum-200">{leader.name}</span>
                        <Badge variant="outline" size="sm">{leader.role}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Mina Al-Oraibi Profile */}
                <div className="border-t border-platinum-200/50 dark:border-platinum-700/50 pt-4">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400 uppercase tracking-wider mb-2">Featured Profile: Mina Al-Oraibi</p>
                  <Card className="glass-subtle">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-navy-900 dark:text-platinum-100">{minaAlOraibiProfile.name}</p>
                          <p className="text-sm text-platinum-500">{minaAlOraibiProfile.role}</p>
                        </div>
                        <Badge variant="gold" size="sm">Tier {minaAlOraibiProfile.tier}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                        <div><span className="text-platinum-500">Nationality:</span> <span className="text-platinum-700">{minaAlOraibiProfile.nationality}</span></div>
                        <div><span className="text-platinum-500">Relevance:</span> <span className="text-platinum-700">{minaAlOraibiProfile.uaeRelevance}/100</span></div>
                      </div>
                      <div className="mt-3 space-y-1">
                        {minaAlOraibiProfile.keyFindings.slice(0, 4).map((finding, idx) => (
                          <p key={idx} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1">
                            <ChevronRight className="h-3 w-3 mt-0.5 shrink-0" />
                            {finding}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Al Arabiya */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Al Arabiya"
              badge="361+ Employees"
              description={`${alArabiyaOrganization.type} | Based: ${alArabiyaOrganization.based} | Parent: ${alArabiyaOrganization.parent}`}
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-platinum-500">Language:</span>
                    <span className="ml-2 font-medium text-platinum-800 dark:text-platinum-200">{alArabiyaOrganization.language}</span>
                  </div>
                  <div>
                    <span className="text-platinum-500">Headquarters:</span>
                    <span className="ml-2 font-medium text-platinum-800 dark:text-platinum-200">Dubai, UAE</span>
                  </div>
                </div>
                <div className="border-t border-platinum-200/50 dark:border-platinum-700/50 pt-4">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400 uppercase tracking-wider mb-2">Named Journalists & Presenters</p>
                  <div className="grid grid-cols-1 gap-2">
                    {alArabiyaOrganization.leadership.map((leader, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <div>
                          <span className="text-platinum-800 dark:text-platinum-200">{leader.name}</span>
                          {leader.notes && <span className="text-xs text-platinum-500 ml-2">({leader.notes})</span>}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" size="sm">{leader.role}</Badge>
                          {leader.twitter && (
                            <a href={`https://twitter.com/${leader.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-xs">
                              {leader.twitter}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Al Jazeera */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Al Jazeera Media Network"
              badge="200+ Staff"
              description={`${alJazeeraOrganization.type} | Based: ${alJazeeraOrganization.based}`}
            >
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25">
                    <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">{metrics.totalAlJazeeraArabicPresenters}+</p>
                    <p className="text-xs text-platinum-500">Arabic Presenters</p>
                  </div>
                  <div className="p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25">
                    <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">{metrics.totalAlJazeeraEnglishPresenters}+</p>
                    <p className="text-xs text-platinum-500">English Presenters</p>
                  </div>
                  <div className="p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25">
                    <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">{metrics.totalAlJazeeraBureauChiefs}</p>
                    <p className="text-xs text-platinum-500">Bureau Chiefs</p>
                  </div>
                </div>
                <div className="border-t border-platinum-200/50 dark:border-platinum-700/50 pt-4">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400 uppercase tracking-wider mb-2">Arabic Presenters ({alJazeeraArabicPresenters.length})</p>
                  <div className="flex flex-wrap gap-1.5">
                    {alJazeeraArabicPresenters.map((name, idx) => (
                      <Badge key={idx} variant="outline" size="sm">{name}</Badge>
                    ))}
                  </div>
                </div>
                <div className="border-t border-platinum-200/50 dark:border-platinum-700/50 pt-4">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400 uppercase tracking-wider mb-2">English Presenters (Selected)</p>
                  <div className="flex flex-wrap gap-1.5">
                    {alJazeeraEnglishPresenters.slice(0, 30).map((name, idx) => (
                      <Badge key={idx} variant="outline" size="sm">{name}</Badge>
                    ))}
                    <Badge variant="outline" size="sm">+{alJazeeraEnglishPresenters.length - 30} more</Badge>
                  </div>
                </div>
                <div className="border-t border-platinum-200/50 dark:border-platinum-700/50 pt-4">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400 uppercase tracking-wider mb-2">Bureau Chiefs ({alJazeeraBureauChiefs.length} Global Locations)</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {alJazeeraBureauChiefs.map((chief, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span className="text-platinum-600 dark:text-platinum-400">{chief.location}:</span>
                        <span className="text-platinum-800 dark:text-platinum-200 font-medium">{chief.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Ghinwa Ibrahim Profile */}
                <div className="border-t border-platinum-200/50 dark:border-platinum-700/50 pt-4">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400 uppercase tracking-wider mb-2">Featured Profile: Ghinwa Ibrahim</p>
                  <Card className="glass-subtle">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-navy-900 dark:text-platinum-100">{ghinwaIbrahimProfile.name}</p>
                          <p className="text-sm text-platinum-500">{ghinwaIbrahimProfile.role}</p>
                        </div>
                        <Badge variant="navy-solid" size="sm">Tier {ghinwaIbrahimProfile.tier}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                        <div><span className="text-platinum-500">Nationality:</span> <span className="text-platinum-700">{ghinwaIbrahimProfile.nationality}</span></div>
                        <div><span className="text-platinum-500">Based:</span> <span className="text-platinum-700">{ghinwaIbrahimProfile.based}</span></div>
                      </div>
                      <div className="mt-3 space-y-1">
                        {ghinwaIbrahimProfile.keyFindings.slice(0, 4).map((finding, idx) => (
                          <p key={idx} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1">
                            <ChevronRight className="h-3 w-3 mt-0.5 shrink-0" />
                            {finding}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Other Organizations Summary */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel title="Other Media Organizations" description="Additional outlets with journalist presence">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* MBC Group */}
                <Card className="glass-subtle">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{mbcGroupOrganization.outlet}</CardTitle>
                    <CardDescription className="text-xs">{mbcGroupOrganization.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-platinum-500">Based:</span>
                      <span className="text-platinum-800 dark:text-platinum-200">{mbcGroupOrganization.based}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500">Employees:</span>
                      <Badge variant="gold" size="sm">{mbcGroupOrganization.employees?.toLocaleString()}+</Badge>
                    </div>
                    <div className="pt-2 border-t border-platinum-200/50">
                      <p className="text-xs text-platinum-500 mb-1">Key Staff:</p>
                      {mbcGroupOrganization.leadership.slice(0, 3).map((l, idx) => (
                        <p key={idx} className="text-xs text-platinum-700 dark:text-platinum-300">{l.name} - {l.role}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Sky News Arabia */}
                <Card className="glass-subtle">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{skyNewsArabiaOrganization.outlet}</CardTitle>
                    <CardDescription className="text-xs">{skyNewsArabiaOrganization.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-platinum-500">Based:</span>
                      <span className="text-platinum-800 dark:text-platinum-200">{skyNewsArabiaOrganization.based}</span>
                    </div>
                    <div className="pt-2 border-t border-platinum-200/50">
                      <p className="text-xs text-platinum-500 mb-1">Key Staff:</p>
                      {skyNewsArabiaOrganization.leadership.map((l, idx) => (
                        <p key={idx} className="text-xs text-platinum-700 dark:text-platinum-300">{l.name} - {l.role}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* WAM */}
                <Card className="glass-subtle">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{wamOrganization.outlet}</CardTitle>
                    <CardDescription className="text-xs">{wamOrganization.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-platinum-500">Established:</span>
                      <span className="text-platinum-800 dark:text-platinum-200">{wamOrganization.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-platinum-500">Based:</span>
                      <span className="text-platinum-800 dark:text-platinum-200">{wamOrganization.based}</span>
                    </div>
                    <div className="pt-2 border-t border-platinum-200/50">
                      <p className="text-xs text-platinum-500 mb-1">Key Staff:</p>
                      {wamOrganization.leadership.map((l, idx) => (
                        <p key={idx} className="text-xs text-platinum-700 dark:text-platinum-300">{l.name} - {l.role}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Journalists Tab */}
        <TabsContent value="journalists" className="space-y-6">
          {/* Emirati National Journalists */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Emirati National Journalists"
              badge="14 Total"
              description="Emirati journalists listed in Wikipedia | 6 Female (43%), 8 Male (57%)"
            >
              <Table variant="premium" size="md">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Relevance</TableHead>
                    <TableHead>Sentiment</TableHead>
                    <TableHead>Alert</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emiratiNationalJournalists.map((journalist) => (
                    <TableRow key={journalist.id} className="hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium text-navy-900 dark:text-platinum-100">{journalist.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={journalist.gender === 'female' ? 'rose' : 'denim'} size="sm">
                          {journalist.gender === 'female' ? 'Female' : 'Male'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 rounded-full bg-platinum-200 dark:bg-platinum-700 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600"
                              style={{ width: `${journalist.uaeRelevance}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-platinum-700">{journalist.uaeRelevance}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`text-sm font-medium ${getSentimentColor(journalist.sentiment)}`}>
                          {journalist.sentiment}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getAlertBadgeVariant(journalist.alertLevel)} size="sm">
                          {journalist.alertLevel}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>
          </motion.div>

          {/* International Journalists */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="International Journalists Covering UAE"
              badge={internationalJournalists.length.toString()}
              description="Correspondents from Reuters, AP, AFP, NYT, FT, and other international outlets"
            >
              <Table variant="premium" size="md">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Outlet</TableHead>
                    <TableHead>Based</TableHead>
                    <TableHead>Relevance</TableHead>
                    <TableHead>Sentiment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {internationalJournalists.slice(0, 10).map((journalist) => (
                    <TableRow key={journalist.id} className="hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium text-navy-900 dark:text-platinum-100">{journalist.name}</span>
                          {journalist.nationality && <span className="text-xs text-platinum-500">{journalist.nationality}</span>}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-700 dark:text-platinum-300">{journalist.role}</span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" size="sm">{journalist.outlet}</Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-600 dark:text-platinum-400">{journalist.based}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 rounded-full bg-platinum-200 dark:bg-platinum-700 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-navy-400 to-navy-600"
                              style={{ width: `${journalist.uaeRelevance}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-platinum-700">{journalist.uaeRelevance}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`text-sm font-medium ${getSentimentColor(journalist.sentiment)}`}>
                          {journalist.sentiment}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>
          </motion.div>

          {/* Senior Anchors */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Senior News Anchors & Presenters"
              badge={seniorAnchors.length.toString()}
              description="Lead anchors from Al Arabiya and other major outlets"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {seniorAnchors.map((anchor) => (
                  <Card key={anchor.id} className="glass-subtle">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-navy-900 dark:text-platinum-100">{anchor.name}</p>
                          <p className="text-xs text-platinum-500">{anchor.outlet}</p>
                        </div>
                        <Badge variant="gold" size="sm">Tier {anchor.tier}</Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <p className="text-platinum-700 dark:text-platinum-300"><span className="text-platinum-500">Role:</span> {anchor.role}</p>
                        {anchor.yearsOfExperience && (
                          <p className="text-platinum-700 dark:text-platinum-300"><span className="text-platinum-500">YOE:</span> {anchor.yearsOfExperience}+ years</p>
                        )}
                        {anchor.twitter && (
                          <a href={`https://twitter.com/${anchor.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-xs flex items-center gap-1">
                            <Twitter className="h-3 w-3" /> {anchor.twitter}
                          </a>
                        )}
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs text-platinum-500">Relevance:</span>
                        <div className="flex-1 h-1.5 rounded-full bg-platinum-200 dark:bg-platinum-700 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600" style={{ width: `${anchor.uaeRelevance}%` }} />
                        </div>
                        <span className="text-xs font-medium text-platinum-700">{anchor.uaeRelevance}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Talk Show Hosts */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Talk Show Hosts & Media Personalities"
              badge={talkShowHosts.length.toString()}
              description="Notable talk show hosts and TV personalities in the UAE/Gulf region"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {talkShowHosts.map((host) => (
                  <Card key={host.id} className="glass-subtle">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-bold text-navy-900 dark:text-platinum-100">{host.name}</p>
                        <Badge variant="emerald" size="sm">Tier {host.tier}</Badge>
                      </div>
                      <p className="text-xs text-platinum-500 mb-2">{host.role}</p>
                      <div className="space-y-1 text-xs">
                        {host.nationality && <p className="text-platinum-600"><span className="text-platinum-400">Nationality:</span> {host.nationality}</p>}
                        {host.outlet && <p className="text-platinum-600"><span className="text-platinum-400">Platform:</span> {host.outlet}</p>}
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${getSentimentColor(host.sentiment)}`}>
                          {host.sentiment}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Columnists */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Columnists & Opinion Writers"
              badge={columnists.length.toString()}
              description="Notable columnists and political analysts contributing to regional publications"
            >
              <div className="space-y-4">
                {columnists.map((writer) => (
                  <Card key={writer.id} className="glass-subtle">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-bold text-navy-900 dark:text-platinum-100">{writer.name}</p>
                          <p className="text-sm text-platinum-500">{writer.role}</p>
                        </div>
                        <Badge variant="gold" size="sm">Tier {writer.tier}</Badge>
                      </div>
                      <div className="mt-3 space-y-2">
                        {writer.keyFindings.map((finding, idx) => (
                          <p key={idx} className="text-sm text-platinum-600 dark:text-platinum-400 flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 mt-0.5 shrink-0 text-gold-700" />
                            {finding}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Demographics Tab */}
        <TabsContent value="demographics" className="space-y-6">
          {/* Gender Distribution Charts */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            <motion.div variants={itemVariants}>
              <GlassPanel title="Emirati Journalists Gender Distribution" description="Gender breakdown of Emirati national journalists">
                <div className="flex items-center justify-center py-4">
                  <PieChart
                    data={genderDistData}
                    donut={true}
                    height={280}
                    showLegend={true}
                    ariaLabel="Gender distribution of Emirati journalists"
                  />
                </div>
              </GlassPanel>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassPanel title="International Journalists Nationality" description="Nationality breakdown of international correspondents">
                <div className="flex items-center justify-center py-4">
                  <PieChart
                    data={nationalityData}
                    donut={true}
                    height={280}
                    showLegend={true}
                    ariaLabel="Nationality distribution of international journalists"
                  />
                </div>
              </GlassPanel>
            </motion.div>
          </motion.div>

          {/* Emirati Women */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Emirati Women Journalists"
              badge="6 Total"
              description="Female Emirati journalists from the national registry"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {emiratiNationalJournalists.filter(j => j.gender === 'female').map((journalist) => (
                  <Card key={journalist.id} className="glass-subtle">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <p className="font-bold text-navy-900 dark:text-platinum-100">{journalist.name}</p>
                        <Badge variant="rose" size="sm">Female</Badge>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs text-platinum-500">Relevance:</span>
                        <div className="flex-1 h-1.5 rounded-full bg-platinum-200 dark:bg-platinum-700 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-rose-400 to-rose-600" style={{ width: `${journalist.uaeRelevance}%` }} />
                        </div>
                        <span className="text-xs font-medium text-platinum-700">{journalist.uaeRelevance}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Notable Female Media Personalities */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Notable Female Media Personalities (UAE-Based)"
              badge={femaleJournalists.length.toString()}
              description="Prominent female media figures including ministers, presenters, and journalists"
            >
              <Table variant="premium" size="sm">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Affiliation</TableHead>
                    <TableHead>Relevance</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {femaleJournalists.map((person) => (
                    <TableRow key={person.id} className="hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                      <TableCell>
                        <span className="font-medium text-navy-900 dark:text-platinum-100">{person.name}</span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" size="sm">{person.role}</Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-600 dark:text-platinum-400">{person.outlet || '—'}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-1.5 rounded-full bg-platinum-200 dark:bg-platinum-700 overflow-hidden">
                            <div className="h-full rounded-full bg-gradient-to-r from-rose-400 to-rose-600" style={{ width: `${person.uaeRelevance}%` }} />
                          </div>
                          <span className="text-xs font-medium text-platinum-700">{person.uaeRelevance}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-xs text-platinum-500">{person.keyFindings[0]}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Social Media Tab */}
        <TabsContent value="social" className="space-y-6">
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Twitter/X Accounts Identified"
              badge={twitterAccounts.length.toString()}
              description="Active Twitter accounts of journalists and media professionals"
            >
              <Table variant="premium" size="sm">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Handle</TableHead>
                    <TableHead>Outlet</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {twitterAccounts.map((account, idx) => (
                    <TableRow key={idx} className="hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                      <TableCell>
                        <span className="font-medium text-navy-900 dark:text-platinum-100">{account.name}</span>
                      </TableCell>
                      <TableCell>
                        <a
                          href={`https://twitter.com/${account.handle.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-400 flex items-center gap-1"
                        >
                          <Twitter className="h-3 w-3" />
                          <span className="text-sm">{account.handle}</span>
                        </a>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" size="sm">{account.outlet}</Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-600 dark:text-platinum-400">{account.role}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>
          </motion.div>

          {/* Digital Content Creators */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Digital Content Creators"
              badge={digitalContentCreators.length.toString()}
              description="News commentators and digital creators covering UAE"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {digitalContentCreators.map((creator) => (
                  <Card key={creator.id} className="glass-subtle">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-bold text-navy-900 dark:text-platinum-100">{creator.name}</p>
                          <p className="text-sm text-platinum-500">{creator.role}</p>
                        </div>
                        <Badge variant="purple" size="sm">Tier {creator.tier}</Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        {creator.keyFindings.map((finding, idx) => (
                          <p key={idx} className="text-platinum-600 dark:text-platinum-400 flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 mt-0.5 shrink-0 text-purple-500" />
                            {finding}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Coverage Analysis Tab */}
        <TabsContent value="coverage" className="space-y-6">
          {/* UAE Relevance Assessment */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="UAE Relevance Assessment by Outlet"
              description="Scoring of media outlets based on their relevance to UAE coverage"
            >
              <div className="space-y-3">
                {uaeRelevanceByOutlet.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25">
                    <Badge
                      variant={
                        item.relevance === 'CRITICAL' ? 'gold' :
                        item.relevance === 'HIGH' ? 'navy-solid' :
                        item.relevance === 'MEDIUM-HIGH' ? 'emerald' : 'outline'
                      }
                      size="sm"
                      className="w-24 justify-center"
                    >
                      {item.relevance}
                    </Badge>
                    <div className="flex-1">
                      <p className="font-medium text-navy-900 dark:text-platinum-100">{item.outlet}</p>
                      <p className="text-xs text-platinum-500 mt-0.5">{item.justification}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Sentiment by Outlet */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Sentiment Analysis by Outlet"
              description="Overall tone and sentiment for each major media organization"
            >
              <div className="space-y-3">
                {sentimentByOutlet.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25">
                    <div className="w-32">
                      <p className="font-medium text-navy-900 dark:text-platinum-100">{item.outlet}</p>
                    </div>
                    <div className="flex-1">
                      <span className={`text-sm font-medium ${getSentimentColor(item.sentiment)}`}>
                        {item.sentiment}
                      </span>
                      <p className="text-xs text-platinum-500 mt-0.5">{item.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Dubai Press Club */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Dubai Press Club"
              description={`Founded ${dubaiPressClub.founded} | Part of ${dubaiPressClub.partOf}`}
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-platinum-500">Founder:</span>
                    <span className="ml-2 font-medium text-platinum-800 dark:text-platinum-200">{dubaiPressClub.founder}</span>
                  </div>
                  <div>
                    <span className="text-platinum-500">Flagship Event:</span>
                    <span className="ml-2 font-medium text-platinum-800 dark:text-platinum-200">{dubaiPressClub.flagshipEvent}</span>
                  </div>
                  <div>
                    <span className="text-platinum-500">Facebook:</span>
                    <span className="ml-2 font-medium text-platinum-800 dark:text-platinum-200">{dubaiPressClub.facebookLikes}</span>
                  </div>
                </div>
                <div className="border-t border-platinum-200/50 dark:border-platinum-700/50 pt-4">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400 uppercase tracking-wider mb-2">Leadership</p>
                  <div className="space-y-2">
                    {dubaiPressClub.leadership.map((leader, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25">
                        <p className="font-medium text-navy-900 dark:text-platinum-100">{leader.name}</p>
                        <p className="text-sm text-platinum-500">{leader.role}</p>
                        <p className="text-xs text-platinum-600 dark:text-platinum-400 mt-1">{leader.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Media Organizations Summary */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Media Organizations Overview"
              badge="14 Organizations"
              description="Complete list of covered media outlets and agencies"
            >
              <Table variant="premium" size="sm">
                <TableHeader>
                  <TableRow>
                    <TableHead>Organization</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Based</TableHead>
                    <TableHead>Staff</TableHead>
                    <TableHead>Language</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mediaOrganizationsSummary.map((org, idx) => (
                    <TableRow key={idx} className="hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                      <TableCell>
                        <span className="font-medium text-navy-900 dark:text-platinum-100">{org.name}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-600 dark:text-platinum-400">{org.type}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-600 dark:text-platinum-400">{org.based}</span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" size="sm">{org.staffCount || '—'}</Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-600 dark:text-platinum-400">{org.language || '—'}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Awards Tab */}
        <TabsContent value="awards" className="space-y-6">
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Arab Media Forum 2022 Awards"
              badge="14 Honored"
              description="14 journalists honored at Arab Media Forum 2022"
            >
              <Table variant="premium" size="md">
                <TableHeader>
                  <TableRow>
                    <TableHead>Award</TableHead>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {awardRecipients2022.map((award, idx) => (
                    <TableRow key={idx} className="hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                      <TableCell>
                        <Badge variant="gold" size="sm">{award.award}</Badge>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium text-navy-900 dark:text-platinum-100">{award.recipient}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-600 dark:text-platinum-400">{award.organization}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-xs text-platinum-500">{award.notes || '—'}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>
          </motion.div>

          {/* Media Leadership */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Media Association Leaders"
              description="Key figures in regional media associations"
            >
              <div className="space-y-4">
                <Card className="glass-subtle">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-bold text-navy-900 dark:text-platinum-100">Khalid bin Hamad Al-Malik</p>
                        <p className="text-sm text-platinum-500">Media Personality of the Year | Arab Media Forum 2022</p>
                      </div>
                      <Badge variant="gold" size="sm">President</Badge>
                    </div>
                    <div className="mt-3 space-y-1 text-sm">
                      <p className="text-platinum-600"><span className="text-platinum-400">Role:</span> President, Saudi Journalists Association</p>
                      <p className="text-platinum-600"><span className="text-platinum-400">Also:</span> President, Gulf Press Union</p>
                      <p className="text-platinum-600"><span className="text-platinum-400">Affiliation:</span> Saudi daily Al-Jazirah</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-subtle">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-bold text-navy-900 dark:text-platinum-100">Dr. Rasheed Al Khayoun</p>
                        <p className="text-sm text-platinum-500">Best Column Award | Arab Media Forum 2022</p>
                      </div>
                      <Badge variant="emerald" size="sm">Columnist</Badge>
                    </div>
                    <div className="mt-3 space-y-1 text-sm">
                      <p className="text-platinum-600"><span className="text-platinum-400">Role:</span> Columnist</p>
                      <p className="text-platinum-600"><span className="text-platinum-400">Affiliation:</span> UAE daily Al-Ittihad</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Gaps & Recommendations Tab */}
        <TabsContent value="gaps" className="space-y-6">
          {/* Coverage Gaps */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Coverage Gaps"
              description="Identified areas with incomplete or missing data"
            >
              <div className="space-y-3">
                {coverageGaps.map((gap, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25">
                    <Badge
                      variant={
                        gap.priority === 'HIGH' ? 'destructive' :
                        gap.priority === 'MEDIUM' ? 'warning' : 'outline'
                      }
                      size="sm"
                      className="shrink-0"
                    >
                      {gap.priority}
                    </Badge>
                    <div className="flex-1">
                      <p className="font-medium text-navy-900 dark:text-platinum-100">{gap.gap}</p>
                      <p className="text-xs text-platinum-500 mt-0.5">{gap.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Enrichment Recommendations */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Enrichment Recommendations"
              description="Suggested next steps for data enhancement"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {enrichmentRecommendations.map((rec, idx) => (
                  <Card key={idx} className="glass-subtle">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-gold text-white text-xs font-bold shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-sm text-platinum-700 dark:text-platinum-300">{rec}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Query Patterns Executed */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Query Patterns Executed"
              badge="17 Queries"
              description="Search queries used to compile this registry"
            >
              <div className="flex flex-wrap gap-2">
                {queryPatternsExecuted.map((query, idx) => (
                  <Badge key={idx} variant="outline" size="sm" className="text-xs">
                    {query}
                  </Badge>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Verification Status */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <GlassPanel
              title="Verification Status"
              description="Data quality checks and validation results"
            >
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="p-4 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/20 text-center">
                  <CheckCircle2 className="h-6 w-6 mx-auto text-emerald-500 mb-2" />
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Queries Executed</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-500">{verificationStatus.allQueriesExecuted ? 'PASS' : 'FAIL'}</p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/20 text-center">
                  <CheckCircle2 className="h-6 w-6 mx-auto text-emerald-500 mb-2" />
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Pages Fetched</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-500">{verificationStatus.allPagesFetched ? 'PASS' : 'FAIL'}</p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/20 text-center">
                  <CheckCircle2 className="h-6 w-6 mx-auto text-emerald-500 mb-2" />
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Data Extracted</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-500">{verificationStatus.allDataExtracted ? 'PASS' : 'FAIL'}</p>
                </div>
                <div className="p-4 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/20 text-center">
                  <CheckCircle2 className="h-6 w-6 mx-auto text-emerald-500 mb-2" />
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">No Fabrication</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-500">{verificationStatus.noFabricationDetected ? 'PASS' : 'FAIL'}</p>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-amber-50/50 dark:bg-amber-900/20">
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  <span className="font-medium">Cross-Reference Verification:</span> {verificationStatus.crossReferenceVerification}
                </p>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
