'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  LineChart,
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Calendar,
  Globe,
  TrendingUp,
  Users,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Activity,
  Flag,
  Landmark,
  Shield,
  DollarSign,
  Microscope,
  Handshake,
  Heart,
  ChevronRight,
  Star,
  AlertTriangle,
  Utensils,
  Palette,
  Award,
  Sunrise,
} from 'lucide-react'
import {
  allEventEntities,
  eventDashboardMetrics,
  cop28Data,
  expo2020Data,
  dubaiDebtCrisisData,
  uaeYemenData,
  qatarCrisisData,
  abrahamAccordsData,
  covidUaeData,
  uaeNationalDayData,
  abuDhabiGPData,
  dubaiWorldCupData,
  gitexData,
  dubaiAirshowData,
  adipecData,
  gulfoodData,
  artDubaiData,
  commemorationDayData,
  federationData,
  gulfWarData,
  oneTimeEventsSummary,
  criticalPriorityEvents,
  highPriorityEvents,
  mediumPriorityEvents,
  executionMetadata,
  keyQueryPatterns,
  unexecutedQueries,
  sourceCredibilityMatrix,
} from '@/lib/data/entity/event-entities-data'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Relevance badge color mapping
const getRelevanceBadgeVariant = (relevance: string): 'gold' | 'denim' | 'outline' => {
  if (relevance === 'CRITICAL') return 'gold'
  if (relevance === 'HIGH') return 'denim'
  return 'outline'
}

// Sentiment badge mapping
const getSentimentBadge = (sentiment: string) => {
  switch (sentiment) {
    case 'POSITIVE':
    case 'OVERWHELMINGLY_POSITIVE':
      return <Badge variant="success" className="text-xs">Positive</Badge>
    case 'NEGATIVE':
      return <Badge variant="destructive" className="text-xs">Negative</Badge>
    case 'MIXED':
      return <Badge variant="warning" className="text-xs">Mixed</Badge>
    case 'NEUTRAL':
      return <Badge variant="outline" className="text-xs">Neutral</Badge>
    default:
      return <Badge variant="outline" className="text-xs">{sentiment}</Badge>
  }
}

// Category icon mapping
const getCategoryIcon = (type: string) => {
  switch (type) {
    case 'Climate': return <Globe className="h-4 w-4" />
    case 'Global Event': return <Star className="h-4 w-4" />
    case 'Economic': return <DollarSign className="h-4 w-4" />
    case 'Military': return <Shield className="h-4 w-4" />
    case 'Diplomatic': return <Handshake className="h-4 w-4" />
    case 'Health': return <Heart className="h-4 w-4" />
    case 'National': return <Flag className="h-4 w-4" />
    case 'Sports': return <Activity className="h-4 w-4" />
    case 'Technology': return <TrendingUp className="h-4 w-4" />
    case 'Aerospace': return <TrendingUp className="h-4 w-4" />
    case 'Energy': return <Activity className="h-4 w-4" />
    case 'Trade': return <Utensils className="h-4 w-4" />
    case 'Cultural': return <Palette className="h-4 w-4" />
    case 'Foundational': return <Landmark className="h-4 w-4" />
    default: return <Calendar className="h-4 w-4" />
  }
}

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  // Metrics for cards
  const metrics = eventDashboardMetrics

  // Sentiment distribution for pie chart
  const sentimentDistribution = [
    { name: 'Positive', value: metrics.positiveSentimentCount, color: CHART_COLORS.success },
    { name: 'Mixed', value: metrics.mixedSentimentCount, color: CHART_COLORS.warning },
    { name: 'Neutral', value: metrics.neutralSentimentCount, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.negativeSentimentCount, color: CHART_COLORS.danger },
  ].filter(d => d.value > 0)

  // Relevance distribution
  const relevanceDistribution = [
    { name: 'CRITICAL', value: metrics.criticalPriorityCount, color: CHART_COLORS.gold },
    { name: 'HIGH', value: metrics.highPriorityCount, color: CHART_COLORS.denim },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2 text-sm font-bold tracking-wider">
            EVENT INTELLIGENCE
          </Badge>
          <h1 className="font-rajdhani text-3xl font-extrabold gradient-text-gold">
            Entity Intelligence
          </h1>
          <p className="mt-2 text-platinum-600 dark:text-platinum-400">
            {metrics.totalEventsTracked} events tracked — Historical, recurring, and enriched findings with UAE engagement
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/30 text-gold hover:bg-gold/10">
            <Globe className="h-4 w-4" />
            Export List
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-white gap-2">
            <Star className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>
      </motion.div>

      {/* Summary Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Total Events"
          value={metrics.totalEventsTracked}
          icon={<Calendar className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Critical Priority"
          value={metrics.criticalPriorityCount}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Enriched Findings"
          value={metrics.enrichedCount}
          icon={<Activity className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Positive Sentiment"
          value={metrics.positiveSentimentCount}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="cyan"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="enriched">Enriched Findings</TabsTrigger>
          <TabsTrigger value="recurring">Recurring Events</TabsTrigger>
          <TabsTrigger value="historical">Historical Events</TabsTrigger>
          <TabsTrigger value="priorities">Priority Matrix</TabsTrigger>
          <TabsTrigger value="sources">Source Credibility</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Distribution */}
            <Card className="glass-premium">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Sentiment Distribution</CardTitle>
                <p className="text-sm text-platinum-500">Overall sentiment across all tracked events</p>
              </CardHeader>
              <CardContent>
                {sentimentDistribution.length > 0 ? (
                  <PieChart
                    data={sentimentDistribution}
                    donut
                    height={280}
                    showLegend
                    showTooltip
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No sentiment data available</div>
                )}
              </CardContent>
            </Card>

            {/* Relevance Distribution */}
            <Card className="glass-premium">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Relevance Distribution</CardTitle>
                <p className="text-sm text-platinum-500">Events by UAE relevance level</p>
              </CardHeader>
              <CardContent>
                {relevanceDistribution.length > 0 ? (
                  <PieChart
                    data={relevanceDistribution}
                    donut
                    height={280}
                    showLegend
                    showTooltip
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* All Events Table */}
          <GlassPanel title="All Events Registry" description={`${metrics.totalEventsTracked} events tracked`}>
            <ScrollArea className="h-[500px]">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                    <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Event Name</TableHead>
                    <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Category</TableHead>
                    <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Frequency</TableHead>
                    <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Relevance</TableHead>
                    <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Key Metric</TableHead>
                    <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Sentiment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allEventEntities.map((event) => (
                    <TableRow
                      key={event.id}
                      className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors cursor-pointer"
                      onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                    >
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg`}>
                            {getCategoryIcon(event.type)}
                          </div>
                          <span className="font-semibold text-navy-900 dark:text-platinum-100">{event.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">{event.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-700 dark:text-platinum-300">{event.frequency}</span>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getRelevanceBadgeVariant(event.relevance)} className="text-xs">
                          {event.relevance}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-platinum-600 dark:text-platinum-400">{event.keyMetric || '—'}</span>
                      </TableCell>
                      <TableCell>
                        {getSentimentBadge(event.sentiment)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* Enriched Findings Tab */}
        <TabsContent value="enriched" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* COP28 Card */}
            <Card className="glass-premium border-gold/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="gold" className="mb-2 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-lg font-rajdhani font-semibold">COP28 UAE Climate Conference</CardTitle>
                    <p className="text-sm text-platinum-500 mt-1">November 30 – December 13, 2023</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold text-white shadow-lg">
                    <Globe className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Attendance</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">85,000+</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Heads of State</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">150+</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Day 1 Fund</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">$430M</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">ALTÉRRA</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">$30B+</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Key Targets</p>
                  <div className="flex flex-wrap gap-1">
                    {cop28Data.keyTargets.map((target, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{target}</Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Controversies</p>
                  <div className="space-y-1">
                    {cop28Data.controversies.slice(0, 3).map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-platinum-700 dark:text-platinum-300">
                        <AlertTriangle className="h-3 w-3 mt-0.5 text-rose-500 shrink-0" />
                        <span>{c.issue}: {c.details.substring(0, 60)}...</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500">Sentiment: <span className="text-amber-600 font-medium">MIXED</span> — Climate pledges achieved but greenwashing concerns</p>
                </div>
              </CardContent>
            </Card>

            {/* Expo 2020 Card */}
            <Card className="glass-premium border-emerald/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="emerald" className="mb-2 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-lg font-rajdhani font-semibold">World Expo 2020 Dubai</CardTitle>
                    <p className="text-sm text-platinum-500 mt-1">October 1, 2021 – March 31, 2022</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-emerald text-white shadow-lg">
                    <Star className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Visitors</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">24.1M</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Countries</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">193</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Economic Impact</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">$42.2B</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Infrastructure Kept</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">80%+</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Thematic Pavilions</p>
                  <div className="space-y-1">
                    {expo2020Data.thematicPavilions.map((p, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-platinum-700 dark:text-platinum-300">{p.pavilion}</span>
                        <Badge variant="outline" className="text-xs ml-2">{p.designer}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Mascots</p>
                  <div className="flex flex-wrap gap-1">
                    {expo2020Data.mascots.map((m, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{m.mascot}</Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500">Sentiment: <span className="text-emerald-600 font-medium">POSITIVE</span> — Historic achievement, economic boost</p>
                </div>
              </CardContent>
            </Card>

            {/* Dubai Debt Crisis */}
            <Card className="glass-premium border-rose/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="rose" className="mb-2 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-lg font-rajdhani font-semibold">Dubai Debt Crisis</CardTitle>
                    <p className="text-sm text-platinum-500 mt-1">2009-2010</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-rose text-white shadow-lg">
                    <DollarSign className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Property Price Fall</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">40-60%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Dubai World Debt</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">~$26B</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Abu Dhabi Bailout</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">$10B</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Total Debt</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">$100B+</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Causes</p>
                  <div className="space-y-1">
                    {dubaiDebtCrisisData.causes.map((c, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-platinum-700 dark:text-platinum-300">
                        <ChevronRight className="h-3 w-3 mt-0.5 text-rose-500 shrink-0" />
                        <span>{c.cause}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500">Sentiment: <span className="text-amber-600 font-medium">MIXED</span> — Lesson learned but market panic</p>
                </div>
              </CardContent>
            </Card>

            {/* UAE Yemen */}
            <Card className="glass-premium border-rose/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="rose" className="mb-2 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-lg font-rajdhani font-semibold">UAE in Yemen War</CardTitle>
                    <p className="text-sm text-platinum-500 mt-1">2015-Present</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-rose text-white shadow-lg">
                    <Shield className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Start Date</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">March 2015</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">UAE Strategy</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">3 Phases</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Strategy Evolution</p>
                  <div className="space-y-1">
                    {uaeYemenData.strategyEvolution.map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-platinum-700 dark:text-platinum-300">
                        <Badge variant="outline" className="text-xs shrink-0">{p.phase.split(' ')[0]}</Badge>
                        <span>{p.strategy}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">STC Support</p>
                  <div className="flex items-start gap-2 text-xs text-platinum-700 dark:text-platinum-300">
                    <span>UAE: Primary backer | Saudi: Official Yemeni government</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500">Sentiment: <span className="text-amber-600 font-medium">MIXED</span> — Security necessity but humanitarian concerns</p>
                </div>
              </CardContent>
            </Card>

            {/* Qatar Crisis */}
            <Card className="glass-premium border-rose/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="rose" className="mb-2 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-lg font-rajdhani font-semibold">Qatar Diplomatic Crisis</CardTitle>
                    <p className="text-sm text-platinum-500 mt-1">2017-2021</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-rose text-white shadow-lg">
                    <Handshake className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Start Date</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">June 5, 2017</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Resolution</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">Jan 5, 2021</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Blockading Countries</p>
                  <div className="flex flex-wrap gap-1">
                    {['Saudi Arabia', 'UAE', 'Bahrain', 'Egypt'].map((c) => (
                      <Badge key={c} variant="outline" className="text-xs">{c}</Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Blockade Measures</p>
                  <div className="space-y-1">
                    {qatarCrisisData.blockadeMeasures.slice(0, 4).map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-platinum-700 dark:text-platinum-300">
                        <span className="text-rose-500">-</span>
                        <span>{m.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500">Sentiment: <span className="text-amber-600 font-medium">MIXED</span> — Strategy failed, Qatar emerged stronger</p>
                </div>
              </CardContent>
            </Card>

            {/* Abraham Accords */}
            <Card className="glass-premium border-cyan/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="cyan" className="mb-2 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-lg font-rajdhani font-semibold">Abraham Accords</CardTitle>
                    <p className="text-sm text-platinum-500 mt-1">2020</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-cyan text-white shadow-lg">
                    <Handshake className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Announced</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">Aug 13, 2020</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Effective</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">Jan 5, 2021</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Key Signatories</p>
                  <div className="space-y-1">
                    {abrahamAccordsData.keySignatories.slice(0, 3).map((s, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-platinum-700 dark:text-platinum-300">{s.person}</span>
                        <Badge variant="outline" className="text-xs">{s.role.split(' ')[0]}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Additional Countries</p>
                  <div className="flex flex-wrap gap-1">
                    {abrahamAccordsData.additionalSignatories.map((s) => (
                      <Badge key={s.country} variant="outline" className="text-xs">{s.country}</Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500">Sentiment: <span className="text-amber-600 font-medium">MIXED</span> — Strategic gains but Palestinian concerns</p>
                </div>
              </CardContent>
            </Card>

            {/* COVID-19 */}
            <Card className="glass-premium border-emerald/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="emerald" className="mb-2 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-lg font-rajdhani font-semibold">COVID-19 Pandemic UAE</CardTitle>
                    <p className="text-sm text-platinum-500 mt-1">2020-2023</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-emerald text-white shadow-lg">
                    <Heart className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Recovery Rate</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">~89%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Economic Stimulus</p>
                    <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">$79B</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Humanitarian Aid</p>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-platinum-700 dark:text-platinum-300">Vaccine Shipments</span>
                      <span className="font-semibold">1B+ doses</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-platinum-700 dark:text-platinum-300">Destinations</span>
                      <span className="font-semibold">80+ countries</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-platinum-700 dark:text-platinum-300">Medical Aid</span>
                      <span className="font-semibold">135 countries</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50 dark:border-platinum-700/50">
                  <p className="text-xs text-platinum-500">Sentiment: <span className="text-emerald-600 font-medium">POSITIVE</span> — Exemplary response, humanitarian leadership</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Recurring Events Tab */}
        <TabsContent value="recurring" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {/* UAE National Day */}
            <Card className="glass-premium border-gold/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="gold" className="mb-1 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-base font-rajdhani font-semibold">UAE National Day</CardTitle>
                    <p className="text-xs text-platinum-500">Eid Al Etihad</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold text-white">
                    <Flag className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">First Held</p>
                    <p className="text-sm font-semibold">1971</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Frequency</p>
                    <p className="text-sm font-semibold">Annual</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold">Celebration Locations</p>
                  <div className="space-y-1">
                    {uaeNationalDayData.celebrationLocations.slice(0, 3).map((l, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-platinum-600 dark:text-platinum-400">{l.location}</span>
                        <Badge variant="outline" className="text-xs ml-1">{l.activity.split(' ')[0]}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50">
                  <p className="text-xs text-platinum-500">Traditions: Fireworks, Flag colors, Heritage Villages, Al Fursan Air Show</p>
                </div>
              </CardContent>
            </Card>

            {/* Abu Dhabi GP */}
            <Card className="glass-premium border-cyan/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="cyan" className="mb-1 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-base font-rajdhani font-semibold">Abu Dhabi F1 Grand Prix</CardTitle>
                    <p className="text-xs text-platinum-500">Yas Marina Circuit</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-cyan text-white">
                    <Activity className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">First Race</p>
                    <p className="text-sm font-semibold">Nov 1, 2009</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Contract</p>
                    <p className="text-sm font-semibold">Until 2030</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold">Recent Winners</p>
                  <div className="space-y-1">
                    {abuDhabiGPData.raceWinners.slice(-3).reverse().map((r, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-platinum-600 dark:text-platinum-400">{r.year}</span>
                        <span className="font-medium">{r.driver}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50">
                  <p className="text-xs text-platinum-500">Records: Hamilton & Verstappen 5 wins each</p>
                </div>
              </CardContent>
            </Card>

            {/* Dubai World Cup */}
            <Card className="glass-premium border-emerald/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="emerald" className="mb-1 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-base font-rajdhani font-semibold">Dubai World Cup</CardTitle>
                    <p className="text-xs text-platinum-500">Horse Racing</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-emerald text-white">
                    <Award className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">First Held</p>
                    <p className="text-sm font-semibold">1996</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Purse</p>
                    <p className="text-sm font-semibold">$12M</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold">Notable Horses</p>
                  <div className="space-y-1">
                    {dubaiWorldCupData.notableHorses.map((h, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="font-medium text-platinum-700 dark:text-platinum-300">{h.horse}</span>
                        <span className="text-platinum-500 text-xs">{h.achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50">
                  <p className="text-xs text-platinum-500">Meeting Prize: $30.5M total</p>
                </div>
              </CardContent>
            </Card>

            {/* Gitex */}
            <Card className="glass-premium border-indigo/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="denim" className="mb-1 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-base font-rajdhani font-semibold">Gitex Technology Week</CardTitle>
                    <p className="text-xs text-platinum-500">Dubai World Trade Centre</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-indigo text-white">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">First Held</p>
                    <p className="text-sm font-semibold">1980s</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">2023 Edition</p>
                    <p className="text-sm font-semibold">43rd</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold">2023 Scale</p>
                  <div className="space-y-1">
                    {gitexData['2023Scale'].slice(0, 3).map((s, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-platinum-600 dark:text-platinum-400">{s.metric}</span>
                        <span className="font-medium">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50">
                  <p className="text-xs text-platinum-500">Largest tech and startup show in region</p>
                </div>
              </CardContent>
            </Card>

            {/* Dubai Airshow */}
            <Card className="glass-premium border-sky/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="cyan" className="mb-1 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-base font-rajdhani font-semibold">Dubai Airshow</CardTitle>
                    <p className="text-xs text-platinum-500">Al Maktoum International Airport</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-sky text-white">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">First Held</p>
                    <p className="text-sm font-semibold">1989</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Frequency</p>
                    <p className="text-sm font-semibold">Biennial</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold">2023 Scale</p>
                  <div className="space-y-1">
                    {dubaiAirshowData['2023Scale'].slice(0, 3).map((s, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-platinum-600 dark:text-platinum-400">{s.metric}</span>
                        <span className="font-medium">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50">
                  <p className="text-xs text-platinum-500">Emirates: 90 777X jets ($52B list)</p>
                </div>
              </CardContent>
            </Card>

            {/* ADIPEC */}
            <Card className="glass-premium border-lime/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="success" className="mb-1 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-base font-rajdhani font-semibold">ADIPEC</CardTitle>
                    <p className="text-xs text-platinum-500">Abu Dhabi</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-lime text-white">
                    <Activity className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">First Held</p>
                    <p className="text-sm font-semibold">1984</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">2026 Dates</p>
                    <p className="text-sm font-semibold">Nov 2-5</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold">2026 Scale</p>
                  <div className="space-y-1">
                    {adipecData.scale2026.slice(0, 3).map((s, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-platinum-600 dark:text-platinum-400">{s.metric}</span>
                        <span className="font-medium">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50">
                  <p className="text-xs text-platinum-500">$53B across 49,131 deals</p>
                </div>
              </CardContent>
            </Card>

            {/* Gulfood */}
            <Card className="glass-premium border-orange/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="warning" className="mb-1 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-base font-rajdhani font-semibold">Gulfood</CardTitle>
                    <p className="text-xs text-platinum-500">Dubai World Trade Centre</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-orange text-white">
                    <Utensils className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">First Held</p>
                    <p className="text-sm font-semibold">1987</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">2026 Exhibitors</p>
                    <p className="text-sm font-semibold">8,500+</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold">2026 Scale</p>
                  <div className="space-y-1">
                    {gulfoodData.scale2026.slice(0, 3).map((s, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-platinum-600 dark:text-platinum-400">{s.metric}</span>
                        <span className="font-medium">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50">
                  <p className="text-xs text-platinum-500">First time spanning two mega venues</p>
                </div>
              </CardContent>
            </Card>

            {/* Art Dubai */}
            <Card className="glass-premium border-fuchsia/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="fuchsia" className="mb-1 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-base font-rajdhani font-semibold">Art Dubai</CardTitle>
                    <p className="text-xs text-platinum-500">Madinat Jumeirah</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-fuchsia text-white">
                    <Palette className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Founded</p>
                    <p className="text-sm font-semibold">2007</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Galleries</p>
                    <p className="text-sm font-semibold">~120</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold">Sections</p>
                  <div className="flex flex-wrap gap-1">
                    {artDubaiData.sections.map((s) => (
                      <Badge key={s.section} variant="outline" className="text-xs">{s.section}</Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50">
                  <p className="text-xs text-platinum-500">Economic Impact (2023): AED 143M</p>
                </div>
              </CardContent>
            </Card>

            {/* Commemoration Day */}
            <Card className="glass-premium border-gold/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="gold" className="mb-1 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-base font-rajdhani font-semibold">Commemoration Day</CardTitle>
                    <p className="text-xs text-platinum-500">Martyrs Day</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-gold text-white">
                    <Sunrise className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">Date</p>
                    <p className="text-sm font-semibold">Nov 30</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-platinum-500">First Declared</p>
                    <p className="text-sm font-semibold">2015</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold">First Martyr</p>
                  <div className="text-xs text-platinum-600 dark:text-platinum-400">
                    Salem Suhail bin Khamis Al Dahmani — Police officer, Greater Tunb island, Nov 30, 1971
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50">
                  <p className="text-xs text-platinum-500">Wahat Al Karama memorial opened Dec 1, 2016</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Historical Events Tab */}
        <TabsContent value="historical" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* UAE Federation */}
            <Card className="glass-premium border-gold/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="gold" className="mb-1 text-xs">CRITICAL</Badge>
                    <CardTitle className="text-lg font-rajdhani font-semibold">UAE Federation Formation</CardTitle>
                    <p className="text-sm text-platinum-500">December 2, 1971</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold text-white">
                    <Landmark className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Unification Process</p>
                  <div className="space-y-1">
                    {federationData.unificationProcess.map((u, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-platinum-700 dark:text-platinum-300">
                        <span className="text-gold font-medium shrink-0">{u.date}</span>
                        <span>{u.event}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Founding Fathers</p>
                  <div className="grid grid-cols-2 gap-1">
                    {federationData.foundingFathers.map((f, i) => (
                      <div key={i} className="text-xs text-platinum-700 dark:text-platinum-300">
                        <span className="font-medium">{f.name.split(' ').slice(-1)[0]}</span>
                        <span className="text-platinum-500"> — {f.emirate}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-platinum-200/50">
                  <p className="text-xs text-platinum-500 italic">"The UAE remains the only successful federal system in the Arab world to have endured and flourished over time."</p>
                </div>
              </CardContent>
            </Card>

            {/* Gulf War */}
            <Card className="glass-premium border-rose/30">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="warning" className="mb-1 text-xs">HIGH</Badge>
                    <CardTitle className="text-lg font-rajdhani font-semibold">Gulf War</CardTitle>
                    <p className="text-sm text-platinum-500">1990-1991</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-rose text-white">
                    <Shield className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">UAE Role</p>
                  <div className="space-y-1">
                    {gulfWarData.uaeRole.map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-platinum-700 dark:text-platinum-300">
                        <span className="text-rose-600 font-medium">{r.aspect}:</span>
                        <span>{r.details}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400">Operations</p>
                  <div className="space-y-1">
                    {gulfWarData.operations.map((o, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="font-medium text-platinum-700 dark:text-platinum-300">{o.name}</span>
                        <Badge variant="outline" className="text-xs">{o.duration}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* One-Time Events Summary Table */}
            <Card className="glass-premium lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">One-Time Events Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Event</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Key Metric</TableHead>
                        <TableHead>Impact</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {oneTimeEventsSummary.map((event) => (
                        <TableRow key={event.event}>
                          <TableCell className="font-medium">{event.event}</TableCell>
                          <TableCell><Badge variant="outline" className="text-xs">{event.date}</Badge></TableCell>
                          <TableCell>{event.keyMetric}</TableCell>
                          <TableCell><Badge variant="gold" className="text-xs">{event.impact}</Badge></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Priority Matrix Tab */}
        <TabsContent value="priorities" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Critical Priority */}
            <Card className="glass-premium border-gold/30">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gradient-gold" />
                  Critical Priority Events
                </CardTitle>
                <p className="text-sm text-platinum-500">{criticalPriorityEvents.length} events</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {criticalPriorityEvents.map((e, i) => (
                    <div key={i} className="flex items-start gap-3 p-2 rounded-lg bg-white/40 dark:bg-white/5">
                      <Badge variant="gold" className="text-xs shrink-0 mt-0.5">CRITICAL</Badge>
                      <div>
                        <p className="text-sm font-medium text-navy-900 dark:text-platinum-100">{e.event}</p>
                        <p className="text-xs text-platinum-500 mt-1">{e.whyCritical}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* High Priority */}
            <Card className="glass-premium border-navy/30">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gradient-denim" />
                  High Priority Events
                </CardTitle>
                <p className="text-sm text-platinum-500">{highPriorityEvents.length} events</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {highPriorityEvents.map((e, i) => (
                    <div key={i} className="flex items-start gap-3 p-2 rounded-lg bg-white/40 dark:bg-white/5">
                      <Badge variant="denim" className="text-xs shrink-0 mt-0.5">HIGH</Badge>
                      <div>
                        <p className="text-sm font-medium text-navy-900 dark:text-platinum-100">{e.event}</p>
                        <p className="text-xs text-platinum-500 mt-1">{e.whyHigh}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Medium Priority */}
            <Card className="glass-premium border-platinum/30">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-gradient-platinum" />
                  Medium Priority Events
                </CardTitle>
                <p className="text-sm text-platinum-500">{mediumPriorityEvents.length} events</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mediumPriorityEvents.map((e, i) => (
                    <div key={i} className="flex items-start gap-3 p-2 rounded-lg bg-white/40 dark:bg-white/5">
                      <Badge variant="outline" className="text-xs shrink-0 mt-0.5">MEDIUM</Badge>
                      <div>
                        <p className="text-sm font-medium text-navy-900 dark:text-platinum-100">{e.event}</p>
                        <p className="text-xs text-platinum-500 mt-1">{e.whyMedium}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Execution Metadata */}
          <GlassPanel title="Research Execution" description="Framework execution metadata">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-xs text-platinum-500">Date Executed</p>
                <p className="text-sm font-semibold">{executionMetadata.dateExecuted}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500">Framework Version</p>
                <p className="text-sm font-semibold">{executionMetadata.frameworkVersion}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500">Queries Executed</p>
                <p className="text-sm font-semibold">{executionMetadata.queriesExecuted}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500">Pages Fetched</p>
                <p className="text-sm font-semibold">{executionMetadata.pagesFetched}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-platinum-200/50">
              <p className="text-xs font-semibold text-platinum-600 dark:text-platinum-400 mb-2">Enrichment Status</p>
              <Badge variant="success" className="text-xs gap-1">
                <CheckCircle2 className="h-3 w-3" />
                {executionMetadata.enrichmentStatus}
              </Badge>
            </div>
          </GlassPanel>

          {/* Unexecuted Queries */}
          <GlassPanel title="Unexecuted Queries" description="Queries not executed due to rate limiting">
            <ScrollArea className="h-[200px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {unexecutedQueries.map((q, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{q.event}</TableCell>
                      <TableCell>
                        <Badge variant={q.priority === 'CRITICAL' ? 'gold' : q.priority === 'HIGH' ? 'denim' : 'outline'} className="text-xs">
                          {q.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs text-platinum-500">{q.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <Card className="glass-premium">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani font-semibold">Source Credibility Matrix</CardTitle>
              <p className="text-sm text-platinum-500">All sources cross-referenced with official sources</p>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Source</TableHead>
                      <TableHead>Credibility</TableHead>
                      <TableHead>UAE Relevance</TableHead>
                      <TableHead>Content Quality</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sourceCredibilityMatrix.map((s, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-medium text-navy-900 dark:text-platinum-100">{s.source}</span>
                            <span className="text-xs text-platinum-500">{s.url}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              s.credibility.includes('HIGH') ? 'success' :
                              s.credibility.includes('MEDIUM') ? 'warning' : 'outline'
                            }
                            className="text-xs"
                          >
                            {s.credibility}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={s.uaeRelevance === 'CRITICAL' ? 'gold' : 'outline'} className="text-xs">
                            {s.uaeRelevance}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-xs text-platinum-600 dark:text-platinum-400">{s.contentQuality}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Key Query Patterns */}
          <Card className="glass-premium">
            <CardHeader>
              <CardTitle className="text-lg font-rajdhani font-semibold">Key Query Patterns Executed</CardTitle>
              <p className="text-sm text-platinum-500">{keyQueryPatterns.length} queries across 20+ topics</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {keyQueryPatterns.map((q, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {q}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
