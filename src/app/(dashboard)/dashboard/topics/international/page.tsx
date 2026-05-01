// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Landmark,
  Users,
  Zap,
  AlertTriangle,
  AlertCircle,
  Shield,
  TrendingUp,
  TrendingDown,
  Building,
  FileText,
  Clock,
  CheckCircle,
  MapPin,
  Plane,
  Scale,
  Banknote,
  Cpu,
  Crosshair,
  Activity,
  Minus,
} from 'lucide-react'
import {
  internationalRelationsData,
  bilateralSummaries,
  multilateralSummaries,
  sentimentAnalysis,
  relevanceAssessment,
  keyPersons,
  keyOrganizations,
  disputedTerritories,
  militaryAssets,
  timelineEvents,
  economicStats,
  energyStats,
  aiTechStats,
  militaryStats,
  diplomaticStats,
  keyDataPoints,
  futureIndicators,
  riskFactors,
  opportunityFactors,
  cop28Outcomes,
  geographicAssets,
  conflicts,
  sourceTierDistribution,
  verificationStatus,
} from '@/lib/data/topics/international-relations-data'

// Animation variants for staggered mount
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const getSentimentColor = (sentiment: string) => {
  if (sentiment.includes('Positive')) return CHART_COLORS.emerald
  if (sentiment.includes('Negative')) return CHART_COLORS.rose
  return CHART_COLORS.platinum
}

const getTrendIcon = (trend: string) => {
  if (trend.includes('Improving') || trend.includes('Rising') || trend.includes('Increasing'))
    return <TrendingUp className="h-4 w-4 text-emerald-500" />
  if (trend.includes('Declining') || trend.includes('Deteriorating') || trend.includes('Decreasing'))
    return <TrendingDown className="h-4 w-4 text-red-500" />
  return <Minus className="h-4 w-4 text-platinum-400" />
}

export default function InternationalRelationsPage() {
  const data = internationalRelationsData

  // Sentiment data for pie chart
  const sentimentData = sentimentAnalysis.map((s) => ({
    name: s.relationship.replace('UAE-', ''),
    value: s.sentiment.includes('Positive') ? 40 : s.sentiment.includes('Negative') ? 35 : 25,
    color: getSentimentColor(s.sentiment),
  }))

  // Relevance data for bar chart
  const relevanceData = relevanceAssessment.map((r) => ({
    name: r.region.length > 20 ? r.region.substring(0, 20) + '...' : r.region,
    priority: r.priority,
    relevance: r.relevanceLevel === 'CRITICAL' ? 100 : r.relevanceLevel === 'HIGH' ? 70 : 40,
  }))

  // Timeline chart data (events per decade)
  const decadeEvents = {
    '1970s': timelineEvents.filter(e => e.year.startsWith('197')).length,
    '2010s': timelineEvents.filter(e => e.year.startsWith('201')).length,
    '2020s': timelineEvents.filter(e => e.year.startsWith('202')).length,
  }

  // Key stats for cards
  const keyMetrics = [
    {
      title: 'UAE-US Trade',
      value: '$34.4B',
      previousValue: 31.2,
      unit: '',
      icon: <Banknote className="h-6 w-6" />,
      gradient: 'navy' as const,
    },
    {
      title: 'AI Investment Target',
      value: '$100B',
      previousValue: 80,
      unit: 'MGX',
      icon: <Cpu className="h-6 w-6" />,
      gradient: 'cyan' as const,
    },
    {
      title: 'F-35 Deal Value',
      value: '$23B',
      previousValue: 23,
      unit: '',
      icon: <Crosshair className="h-6 w-6" />,
      gradient: 'gold' as const,
    },
    {
      title: 'COP28 Mobilized',
      value: '$85B+',
      previousValue: 0,
      unit: '',
      icon: <Globe className="h-6 w-6" />,
      gradient: 'emerald' as const,
    },
    {
      title: 'Intelligence Sources',
      value: '40+',
      previousValue: 0,
      unit: '',
      icon: <FileText className="h-6 w-6" />,
      gradient: 'platinum' as const,
    },
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
        <div>
          <Badge variant="default" className="mb-2">I-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-platinum">International Relations & Diplomacy</h1>
          <p className="mt-2 text-platinum-400">
            {data.executionMetadata.enrichmentStatus} | {data.executionMetadata.queriesExecuted} queries executed across {data.executionMetadata.pagesFetched} sources
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <FileText className="h-4 w-4" />
            Sources ({data.sources.length})
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
      >
        {keyMetrics.map((metric, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <MetricCard
              title={metric.title}
              value={metric.value}
              previousValue={metric.previousValue}
              unit={metric.unit}
              icon={metric.icon}
              gradient={metric.gradient}
            />
          </motion.div>
        ))}
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="bilateral">Bilateral Relations</TabsTrigger>
          <TabsTrigger value="multilateral">Multilateral</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="entities">Entities & Assets</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
          <TabsTrigger value="outlook">Future Outlook</TabsTrigger>
          <TabsTrigger value="quality">Research Quality</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel
            title="International Relations Overview"
            description="Comprehensive diplomatic intelligence across bilateral and multilateral relationships"
          >
            <div className="space-y-6">
              {/* Focus Areas */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Focus Areas</CardTitle>
                  <CardDescription>Priority intelligence areas for international relations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {data.focusAreas.map((area, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-navy text-white">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-platinum-200">{area.name}</h4>
                            <Badge variant="outline" className="text-xs">{area.priority}</Badge>
                          </div>
                          <p className="mt-1 text-sm text-platinum-400">{area.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment Distribution */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Relationship Sentiment Overview</CardTitle>
                    <CardDescription>Sentiment across all tracked relationships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Regional Relevance Priority</CardTitle>
                    <CardDescription>UAE relevance assessment by region and topic</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={relevanceData.slice(0, 8)}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'relevance', name: 'Relevance Score', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Key Alerts */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <AlertCircle className="h-5 w-5" />
                    Critical Intelligence Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sentimentAnalysis
                      .filter(s => s.sentiment.includes('Negative') && s.trend.includes('Deteriorating'))
                      .map((alert, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-platinum-200">{alert.relationship}</p>
                            <p className="mt-1 text-sm text-platinum-400">Key driver: {alert.keyDriver}</p>
                          </div>
                          <Badge variant="destructive" className="text-xs">CRITICAL</Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Conflict Involvement */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Active Conflict Involvement</CardTitle>
                  <CardDescription>UAE engagement in regional conflicts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {conflicts.map((conflict, idx) => (
                      <div key={idx} className="flex items-start gap-4 rounded-lg bg-platinum-800/50 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-rose text-white">
                          <Crosshair className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-platinum-200">{conflict.name}</h4>
                            <Badge variant="outline" className="text-xs">{conflict.currentStatus}</Badge>
                          </div>
                          <p className="mt-1 text-sm text-platinum-400">Involvement: {conflict.involvement}</p>
                          <p className="mt-1 text-sm text-platinum-400">UAE Role: {conflict.uaeRole}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Bilateral Relations Tab */}
        <TabsContent value="bilateral" className="space-y-6">
          <GlassPanel
            title="Bilateral Relations"
            description="Detailed analysis of UAE diplomatic relationships with individual nations"
          >
            <div className="space-y-6">
              {bilateralSummaries.map((relation, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{relation.relationship}</CardTitle>
                        <CardDescription className="mt-1">{relation.country}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={
                            relation.sentiment.includes('Positive')
                              ? 'border-emerald-500/50 text-emerald-400'
                              : relation.sentiment.includes('Negative')
                              ? 'border-rose-500/50 text-rose-400'
                              : 'border-platinum-500/50 text-platinum-400'
                          }
                        >
                          {relation.sentiment}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {relation.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 rounded-lg bg-platinum-800/30 p-3">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          <p className="text-sm text-platinum-300">{point}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Multilateral Tab */}
        <TabsContent value="multilateral" className="space-y-6">
          <GlassPanel
            title="Multilateral Relations"
            description="UAE engagement with international organizations and blocs"
          >
            <div className="space-y-6">
              {multilateralSummaries.map((org, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{org.organization}</CardTitle>
                      <Badge variant="outline" className="text-xs">{org.relationship}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-platinum-300">{org.summary}</p>
                  </CardContent>
                </Card>
              ))}

              {/* COP28 Special Section */}
              <Card className="glass-card border-gold-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-gold-400">
                    <Globe className="h-5 w-5" />
                    COP28 UAE Presidency - Detailed Outcomes
                  </CardTitle>
                  <CardDescription>
                    Hosted November 30 - December 12, 2023 at Expo City Dubai
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* COP28 Key Stats */}
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="rounded-lg bg-gold-500/10 p-4 text-center border border-gold-500/30">
                        <p className="text-2xl font-bold text-gold-400">{cop28Outcomes.totalMobilized}</p>
                        <p className="text-sm text-platinum-400">Total Mobilized</p>
                      </div>
                      <div className="rounded-lg bg-gold-500/10 p-4 text-center border border-gold-500/30">
                        <p className="text-2xl font-bold text-gold-400">{cop28Outcomes.participants.toLocaleString()}</p>
                        <p className="text-sm text-platinum-400">Participants</p>
                      </div>
                      <div className="rounded-lg bg-gold-500/10 p-4 text-center border border-gold-500/30">
                        <p className="text-2xl font-bold text-gold-400">{cop28Outcomes.fourPillars.length}</p>
                        <p className="text-sm text-platinum-400">Key Pillars</p>
                      </div>
                      <div className="rounded-lg bg-gold-500/10 p-4 text-center border border-gold-500/30">
                        <p className="text-2xl font-bold text-gold-400">{cop28Outcomes.keyDeclarations.length}</p>
                        <p className="text-sm text-platinum-400">Major Declarations</p>
                      </div>
                    </div>

                    {/* COP28 Leadership */}
                    <div className="rounded-lg bg-platinum-800/50 p-4">
                      <h4 className="font-semibold text-platinum-200 mb-3">Leadership</h4>
                      <div className="grid gap-3 md:grid-cols-3">
                        <div className="flex items-center gap-2">
                          <Scale className="h-4 w-4 text-gold" />
                          <span className="text-sm text-platinum-300">President: {cop28Outcomes.president}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gold" />
                          <span className="text-sm text-platinum-300">Youth Champion: {cop28Outcomes.youthChampion}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-gold" />
                          <span className="text-sm text-platinum-300">High-Level Champion: {cop28Outcomes.highLevelChampion}</span>
                        </div>
                      </div>
                    </div>

                    {/* COP28 Financial Commitments */}
                    <div>
                      <h4 className="font-semibold text-platinum-200 mb-3">Financial Commitments</h4>
                      <div className="grid gap-2 md:grid-cols-2">
                        {cop28Outcomes.financialCommitments.map((commit, cIdx) => (
                          <div key={cIdx} className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                            <span className="text-sm text-platinum-300">{commit.fund}</span>
                            <Badge variant="gold" className="text-xs">{commit.amount}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* COP28 Declarations */}
                    <div>
                      <h4 className="font-semibold text-platinum-200 mb-3">Key Declarations & Pledges</h4>
                      <div className="space-y-2">
                        {cop28Outcomes.keyDeclarations.map((decl, dIdx) => (
                          <div key={dIdx} className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                            <span className="text-sm text-platinum-300">{decl.name}</span>
                            <div className="flex gap-2">
                              <Badge variant="outline" className="text-xs">{decl.countries || decl.heads} {decl.companies ? 'companies' : 'countries'}</Badge>
                              {decl.goal && <Badge variant="gold" className="text-xs">{decl.goal}</Badge>}
                              {decl.funding && <Badge variant="gold" className="text-xs">{decl.funding}</Badge>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel
            title="Sentiment Analysis by Relationship"
            description="Detailed sentiment tracking across all diplomatic relationships"
          >
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Breakdown</CardTitle>
                  <CardDescription>Overall sentiment and trend direction for each relationship</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sentimentAnalysis.map((s, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-40 shrink-0">
                          <span className="text-sm font-medium text-platinum-200">{s.relationship}</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-2 w-full rounded-full bg-platinum-700">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                width: s.sentiment.includes('Positive') ? '60%' : s.sentiment.includes('Negative') ? '40%' : '50%',
                                backgroundColor: getSentimentColor(s.sentiment),
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 w-48 shrink-0">
                          {getTrendIcon(s.trend)}
                          <span className="text-xs text-platinum-400">{s.trend}</span>
                          <Badge
                            variant="outline"
                            className={`text-xs ml-auto ${
                              s.sentiment.includes('Positive')
                                ? 'border-emerald-500/50 text-emerald-400'
                                : s.sentiment.includes('Negative')
                                ? 'border-rose-500/50 text-rose-400'
                                : 'border-platinum-500/50 text-platinum-400'
                            }`}
                          >
                            {s.sentiment.split('/')[0]}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Proportional sentiment across relationships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentData}
                      height={300}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Relevance Assessment</CardTitle>
                    <CardDescription>Priority by region and topic</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={relevanceData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'relevance', name: 'Relevance', color: CHART_COLORS.navy },
                      ]}
                      height={300}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <GlassPanel
            title="Timeline of Key Events"
            description="Historical and recent diplomatic events from 1971 to 2026"
          >
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Events by Decade</CardTitle>
                  <CardDescription>Distribution of major diplomatic events</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: '1970s', events: decadeEvents['1970s'], color: CHART_COLORS.gold },
                      { name: '2010s', events: decadeEvents['2010s'], color: CHART_COLORS.navy },
                      { name: '2020s', events: decadeEvents['2020s'], color: CHART_COLORS.emerald },
                    ]}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'events', name: 'Events', color: CHART_COLORS.platinum },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <ScrollArea className="h-[500px]">
                <div className="space-y-3 pr-4">
                  {timelineEvents.map((event, idx) => (
                    <div key={idx} className="flex items-start gap-4 rounded-lg bg-platinum-800/30 p-4 hover:bg-platinum-800/50 transition-colors">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-navy text-white">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-gold">{event.year}</span>
                          {event.date && <span className="text-xs text-platinum-500">{event.date}</span>}
                        </div>
                        <p className="mt-1 text-sm text-platinum-200">{event.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entities & Assets Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel
            title="Entities & Strategic Assets"
            description="Key persons, organizations, territories, and military assets"
          >
            <div className="space-y-6">
              {/* Key Persons */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Persons</CardTitle>
                  <CardDescription>Individuals central to UAE international relations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {keyPersons.map((person, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-platinum text-navy-950">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-platinum-200 text-sm">{person.name}</p>
                          <p className="text-xs text-gold">{person.role}</p>
                          <p className="text-xs text-platinum-400 mt-1">{person.relationToUAE}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Organizations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Organizations</CardTitle>
                  <CardDescription>International bodies and UAE membership status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {keyOrganizations.map((org, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3">
                        <Building className="h-5 w-5 shrink-0 text-navy" />
                        <div>
                          <p className="font-medium text-platinum-200 text-sm">{org.name}</p>
                          <p className="text-xs text-platinum-400">{org.type}</p>
                          <Badge variant="outline" className="text-xs mt-1">{org.uaeRole}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Disputed Territories */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                    <MapPin className="h-5 w-5" />
                    Disputed Territories
                  </CardTitle>
                  <CardDescription>Iranian-occupied UAE territories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {disputedTerritories.map((territory, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                        <div>
                          <p className="font-semibold text-platinum-200">{territory.territory}</p>
                          <p className="text-sm text-platinum-400">Occupied by {territory.occupiedBy} since {territory.since}</p>
                        </div>
                        <Badge variant="destructive" className="text-xs">{territory.uaePosition}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Military Assets */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Military Assets</CardTitle>
                  <CardDescription>Defense acquisitions and status</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={militaryAssets.map((m) => ({
                      name: m.asset.split(' ')[0],
                      value: m.status.includes('$23B') ? 23 : m.status.includes('18') ? 18 : m.status.includes('80') ? 80 : 10,
                    }))}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Quantity/Value', color: CHART_COLORS.navy },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                  <div className="mt-4 space-y-2">
                    {militaryAssets.map((asset, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                        <div className="flex items-center gap-3">
                          <Crosshair className="h-4 w-4 text-platinum" />
                          <span className="text-sm text-platinum-200">{asset.asset}</span>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-xs">{asset.origin}</Badge>
                          <span className="text-xs text-platinum-400 ml-2">{asset.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Geographic Strategic Assets */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Geographic Strategic Assets</CardTitle>
                  <CardDescription>UAE military and economic footprint abroad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {geographicAssets.map((asset, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-emerald text-white">
                          <Plane className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-platinum-200">{asset.location}</p>
                          <p className="text-sm text-platinum-400">{asset.country} - {asset.type}</p>
                          <p className="text-xs text-emerald-400 mt-1">Purpose: {asset.purpose}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Statistics Tab */}
        <TabsContent value="statistics" className="space-y-6">
          <GlassPanel
            title="Statistics Dashboard"
            description="Comprehensive data across all international relations metrics"
          >
            <div className="space-y-6">
              {/* Economic Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Banknote className="h-5 w-5 text-gold" />
                    Economic Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {economicStats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                        <span className="text-sm text-platinum-300">{stat.metric}</span>
                        <Badge variant="gold" className="text-xs">{stat.value}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Energy Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="h-5 w-5 text-emerald" />
                    Energy Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                    {energyStats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                        <span className="text-sm text-platinum-300">{stat.metric}</span>
                        <Badge variant="emerald" className="text-xs">{stat.value}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI/Tech Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-cyan" />
                    AI & Technology Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {aiTechStats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                        <span className="text-sm text-platinum-300">{stat.metric}</span>
                        <Badge variant="cyan" className="text-xs">{stat.value}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Military Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Crosshair className="h-5 w-5 text-rose" />
                    Military & Defense Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                    {militaryStats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                        <span className="text-sm text-platinum-300">{stat.metric}</span>
                        <Badge variant="outline" className="text-xs">{stat.value}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Diplomatic Statistics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Landmark className="h-5 w-5 text-navy" />
                    Diplomatic Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {diplomaticStats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                        <span className="text-sm text-platinum-300">{stat.metric}</span>
                        <Badge variant="denim" className="text-xs">{stat.value}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Data Points */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Data Points Extracted</CardTitle>
                  <CardDescription>Critical intelligence data points with sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {keyDataPoints.map((dp, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/30 p-3">
                          <div>
                            <span className="text-xs text-gold">{dp.category}</span>
                            <p className="text-sm text-platinum-200">{dp.dataPoint}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="text-xs">{dp.value}</Badge>
                            <p className="text-xs text-platinum-500 mt-1">{dp.source}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Future Outlook Tab */}
        <TabsContent value="outlook" className="space-y-6">
          <GlassPanel
            title="Future Outlook & Strategic Indicators"
            description="Risk factors, opportunity factors, and indicators to watch"
          >
            <div className="space-y-6">
              {/* Indicators to Watch */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-cyan" />
                    Key Indicators to Watch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {futureIndicators.map((indicator, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4">
                        <div>
                          <p className="font-medium text-platinum-200">{indicator.indicator}</p>
                          <p className="text-sm text-platinum-400">Current: {indicator.current}</p>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant="outline"
                            className={
                              indicator.current === 'HIGH' || indicator.current === 'TENSE'
                                ? 'border-rose-500/50 text-rose-400'
                                : indicator.current === 'FROZEN' || indicator.current === 'DIVIDED' || indicator.current === 'STALLED'
                                ? 'border-amber-500/50 text-amber-400'
                                : 'border-emerald-500/50 text-emerald-400'
                            }
                          >
                            {indicator.current}
                          </Badge>
                          <p className="text-xs text-platinum-500 mt-1">Watch: {indicator.watchFor}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Risk Factors */}
                <Card className="glass-card border-rose-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                      <AlertTriangle className="h-5 w-5" />
                      Risk Factors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {riskFactors.map((risk, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg bg-rose-500/10 p-3 border border-rose-500/20">
                          <AlertTriangle className="h-4 w-4 shrink-0 text-rose-400 mt-0.5" />
                          <div>
                            <p className="font-medium text-platinum-200 text-sm">{risk.factor}</p>
                            <p className="text-xs text-platinum-400 mt-1">{risk.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Opportunity Factors */}
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                      <TrendingUp className="h-5 w-5" />
                      Opportunity Factors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {opportunityFactors.map((opp, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg bg-emerald-500/10 p-3 border border-emerald-500/20">
                          <TrendingUp className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                          <div>
                            <p className="font-medium text-platinum-200 text-sm">{opp.factor}</p>
                            <p className="text-xs text-platinum-400 mt-1">{opp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Research Summary */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Research Execution Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-platinum">{data.executionMetadata.queriesExecuted}</p>
                      <p className="text-sm text-platinum-400">Queries Executed</p>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-platinum">{data.executionMetadata.pagesFetched}</p>
                      <p className="text-sm text-platinum-400">Pages Fetched</p>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-platinum">{data.sources.length}</p>
                      <p className="text-sm text-platinum-400">Sources Analyzed</p>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-platinum">{data.metrics.totalDataPoints}</p>
                      <p className="text-sm text-platinum-400">Data Points Extracted</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-gold-500/10 p-3 border border-gold-500/30">
                    <span className="text-sm text-platinum-300">Enrichment Status</span>
                    <Badge variant="gold">{data.executionMetadata.enrichmentStatus}</Badge>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                    <span className="text-sm text-platinum-300">Last Updated</span>
                    <span className="text-sm text-platinum-400">{data.lastUpdated}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Research Quality Tab */}
        <TabsContent value="quality" className="space-y-6">
          <GlassPanel
            title="Research Quality & Verification"
            description="Source validation, tier distribution, and verification status for this intelligence report"
          >
            <div className="space-y-6">
              {/* Verification Status */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald" />
                    Verification Status
                  </CardTitle>
                  <CardDescription>Quality checks passed for all research data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {verificationStatus.verificationDetails.map((v, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                        <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-platinum-200">{v.label}</p>
                          <p className="text-sm text-platinum-400 mt-1">{v.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-platinum-800/50 p-3">
                    <span className="text-sm text-platinum-300">Temporal Coverage:</span>
                    <Badge variant="emerald">{verificationStatus.temporalCoverage}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Source Tier Distribution */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Landmark className="h-5 w-5 text-navy" />
                      Source Tier Distribution
                    </CardTitle>
                    <CardDescription>Breakdown of sources by credibility tier</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sourceTierDistribution.map((t, idx) => ({
                        name: t.tier,
                        value: t.sources,
                        color: idx === 0 ? CHART_COLORS.gold : idx === 1 ? CHART_COLORS.navy : idx === 2 ? CHART_COLORS.emerald : idx === 3 ? CHART_COLORS.teal : CHART_COLORS.platinum,
                      }))}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Tier Definitions</CardTitle>
                    <CardDescription>Source credibility classification</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {sourceTierDistribution.map((tier, idx) => (
                        <div key={idx} className="flex items-start gap-3 rounded-lg bg-platinum-800/30 p-3">
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-bold text-xs ${
                            idx === 0 ? 'bg-gold-500/20 text-gold-400' :
                            idx === 1 ? 'bg-navy-500/20 text-navy-400' :
                            idx === 2 ? 'bg-emerald-500/20 text-emerald-400' :
                            idx === 3 ? 'bg-cyan-500/20 text-cyan-400' :
                            'bg-platinum-500/20 text-platinum-400'
                          }`}>
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-platinum-200">{tier.tier}</p>
                              <Badge variant="outline" className="text-xs">{tier.sources} sources</Badge>
                            </div>
                            <p className="text-xs text-platinum-400 mt-1">{tier.description}</p>
                            <p className="text-xs text-platinum-500 mt-1 italic">{tier.examples}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Research Summary */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-gold" />
                    Research Execution Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-platinum">{data.executionMetadata.queriesExecuted}</p>
                      <p className="text-sm text-platinum-400">Queries Executed</p>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-platinum">{data.executionMetadata.pagesFetched}</p>
                      <p className="text-sm text-platinum-400">Pages Fetched</p>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-platinum">{data.sources.length}</p>
                      <p className="text-sm text-platinum-400">Sources Analyzed</p>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <p className="text-2xl font-bold text-gold">{data.metrics.totalDataPoints}</p>
                      <p className="text-sm text-platinum-400">Data Points Extracted</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-gold-500/10 p-3 border border-gold-500/30">
                    <span className="text-sm text-platinum-300">Enrichment Status</span>
                    <Badge variant="gold">{data.executionMetadata.enrichmentStatus}</Badge>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-platinum-800/30 p-3">
                    <span className="text-sm text-platinum-300">Last Updated</span>
                    <span className="text-sm text-platinum-400">{data.lastUpdated}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
