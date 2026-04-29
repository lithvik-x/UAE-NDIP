'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  CheckCircle2,
  ChevronDown,
  Circle,
  Download,
  Eye,
  Flag,
  Globe,
  Globe2,
  Layers,
  Lightbulb,
  Lock,
  MapPin,
  MessageSquare,
  Minus,
  Quote,
  RefreshCw,
  Scale,
  Search,
  Shield,
  ShieldAlert,
  Target,
  ThumbsDown,
  ThumbsUp,
  TrendingUp,
  Type,
  Umbrella,
  Users,
  Zap,
} from 'lucide-react'
import {
  framingAnalysisData,
  executionMetadata,
  focusAreas,
  sourcesData,
  synthesizedFindings,
  dataTables,
  framingTypology,
  sentimentByTier,
  sourceTierDistribution,
  kpiSummary,
  framingScorecard,
  summaryStatistics,
  keyEntities,
} from '@/lib/data/perception/framing-analysis-data'

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

// Source card component
function SourceCard({
  source,
  isExpanded,
  onToggle,
}: {
  source: typeof sourcesData[0]
  isExpanded: boolean
  onToggle: () => void
}) {
  const getStatusColor = (status: string) => {
    if (status === 'Fetched' || status === 'fetched') return 'bg-emerald-500'
    if (status?.includes('Blocked') || status === '403 Blocked') return 'bg-rose-500'
    if (status === 'CONNREFUSED') return 'bg-amber-500'
    return 'bg-slate-500'
  }

  const getTierColor = (tier: string) => {
    if (tier?.includes('TIER 0')) return 'text-rose-600 bg-rose-500/10'
    if (tier?.includes('TIER 1')) return 'text-emerald-600 bg-emerald-500/10'
    if (tier?.includes('TIER 2')) return 'text-blue-600 bg-blue-500/10'
    if (tier?.includes('TIER 3')) return 'text-amber-600 bg-amber-500/10'
    if (tier?.includes('TIER 5')) return 'text-purple-600 bg-purple-500/10'
    return 'text-slate-600 bg-slate-500/10'
  }

  const getSentimentColor = (sentiment: string) => {
    if (sentiment?.toLowerCase().includes('pro-uae') || sentiment?.toLowerCase().includes('positive')) return 'text-emerald-600 bg-emerald-500/10'
    if (sentiment?.toLowerCase().includes('negative') || sentiment?.toLowerCase().includes('critical')) return 'text-rose-600 bg-rose-500/10'
    if (sentiment?.toLowerCase().includes('neutral') || sentiment?.toLowerCase().includes('analytical')) return 'text-blue-600 bg-blue-500/10'
    return 'text-slate-600 bg-slate-500/10'
  }

  return (
    <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
      <Card
        className="glass-card cursor-pointer hover:shadow-glass-lg transition-all duration-300 border-2 hover:border-indigo-200"
        onClick={onToggle}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant="outline" className={getTierColor(source.tier)}>
                  {source.tier || 'TIER 3'}
                </Badge>
                <Badge variant="outline" className={getSentimentColor(source.sentiment)}>
                  {source.sentiment || 'Neutral'}
                </Badge>
                <Badge variant="outline" className={`${getStatusColor(source.status || 'Fetched')} text-white border-0`}>
                  {source.status || 'Fetched'}
                </Badge>
              </div>
              <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {source.name}
              </CardTitle>
              <CardDescription className="mt-1 text-xs text-slate-500 line-clamp-1">
                {source.title || source.url}
              </CardDescription>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-full bg-slate-100"
            >
              <ChevronDown className="h-5 w-5 text-slate-600" />
            </motion.div>
          </div>
        </CardHeader>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="pt-0 space-y-4">
                {source.title && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-1">Title</h4>
                    <p className="text-sm text-slate-600">{source.title}</p>
                  </div>
                )}

                {source.date && (
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Date: {source.date}</Badge>
                    {source.author && <Badge variant="outline" className="text-xs">By: {source.author}</Badge>}
                  </div>
                )}

                {'keyFacts' in source && source.keyFacts && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Key Facts
                    </h4>
                    <ul className="space-y-1">
                      {source.keyFacts.map((fact: string, idx: number) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                          <Circle className="h-2 w-2 text-indigo-400 mt-1.5 shrink-0" />
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {'statistics' in source && source.statistics && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Statistics</h4>
                    <div className="grid gap-2">
                      {source.statistics.map((stat: { metric: string; value: string }, idx: number) => (
                        <div key={idx} className="flex justify-between bg-slate-50 rounded p-2 text-sm">
                          <span className="text-slate-600">{stat.metric}</span>
                          <span className="font-semibold text-indigo-600">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {'keyQuotes' in source && source.keyQuotes && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <Quote className="h-4 w-4 text-amber-500" /> Key Quotes
                    </h4>
                    <div className="space-y-2">
                      {source.keyQuotes.map((quote: string | { text: string; attribution?: string }, idx: number) => (
                        <blockquote key={idx} className="text-sm text-slate-600 italic border-l-2 border-amber-300 pl-3">
                          {typeof quote === 'string' ? quote : quote.text}
                        </blockquote>
                      ))}
                    </div>
                  </div>
                )}

                {'engagementMetrics' in source && source.engagementMetrics && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Engagement Metrics</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {source.engagementMetrics.map((metric: { metric: string; value: string }, idx: number) => (
                        <div key={idx} className="bg-slate-50 rounded p-2 text-center">
                          <div className="text-lg font-bold text-emerald-600">{metric.value}</div>
                          <div className="text-xs text-slate-500">{metric.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {source.credibility && (
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span className="text-xs text-slate-600">Credibility: {source.credibility}</span>
                  </div>
                )}
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

// Framing Pattern Component
function FramingPatternCard({
  pattern,
  type,
}: {
  pattern: { frame: string; description: string; example: string }
  type: 'western' | 'gulf'
}) {
  return (
    <div className={`p-4 rounded-lg border ${
      type === 'western'
        ? 'bg-rose-50/50 border-rose-200'
        : 'bg-emerald-50/50 border-emerald-200'
    }`}>
      <div className="flex items-center gap-2 mb-2">
        {type === 'western' ? (
          <Globe className="h-4 w-4 text-rose-500" />
        ) : (
          <Globe2 className="h-4 w-4 text-emerald-500" />
        )}
        <h4 className={`font-semibold ${type === 'western' ? 'text-rose-700' : 'text-emerald-700'}`}>
          {pattern.frame}
        </h4>
      </div>
      <p className="text-sm text-slate-600 mb-2">{pattern.description}</p>
      <p className="text-xs italic text-slate-500">"{pattern.example}"</p>
    </div>
  )
}

export default function FramingAnalysisPage() {
  const [expandedSource, setExpandedSource] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

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
          <h1 className="text-3xl font-extrabold gradient-text-indigo">Framing Analysis</h1>
          <p className="mt-2 text-slate-600">
            Comprehensive tracking of UAE media framing across Western vs Regional vs Gulf sources
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <BarChart3 className="h-4 w-4" />
            Full Analysis
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-indigo text-white">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Queries Executed</p>
                <p className="text-2xl font-bold text-slate-900">{executionMetadata.queriesExecuted}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-emerald text-white">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Sources Analyzed</p>
                <p className="text-2xl font-bold text-slate-900">{summaryStatistics.totalSourcesAnalyzed}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-amber text-white">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Focus Areas</p>
                <p className="text-2xl font-bold text-slate-900">{focusAreas.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-rose text-white">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Pages Fetched</p>
                <p className="text-2xl font-bold text-slate-900">{executionMetadata.pagesFetched}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="framing">Framing Patterns</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="scorecard">Framing Scorecard</TabsTrigger>
          <TabsTrigger value="entities">Key Entities</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* KPI Summary */}
            <GlassPanel title="KPI Summary" description="Key performance indicators from research">
              <div className="grid gap-3">
                {kpiSummary.slice(0, 6).map((kpi, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                    <span className="text-sm font-medium text-slate-700">{kpi.kpi}</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-indigo-600">{kpi.value}</span>
                      <p className="text-xs text-slate-500">{kpi.trend}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Framing Gap Overview */}
            <GlassPanel title="Framing Gap Analysis" description="Western vs Gulf perspective divergence">
              <div className="h-64">
                <BarChart
                  data={framingScorecard}
                  xAxisKey="framingType"
                  bars={[
                    { dataKey: 'westernScore', name: 'Western', color: CHART_COLORS.rose },
                    { dataKey: 'gulfScore', name: 'Gulf', color: CHART_COLORS.emerald },
                  ]}
                  height={220}
                  showGrid={true}
                />
              </div>
            </GlassPanel>
          </div>

          {/* Focus Areas */}
          <GlassPanel title="Focus Areas" description="Research areas covered in framing analysis">
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area, idx) => (
                <Badge key={idx} variant="outline" className="bg-indigo-50/50 text-indigo-700 border-indigo-200">
                  {area}
                </Badge>
              ))}
            </div>
          </GlassPanel>

          {/* Economic Growth Trajectory */}
          <GlassPanel title="Economic Growth Trajectory" description="UAE transformation data">
            <div className="h-64">
              <LineChart
                data={synthesizedFindings.powerFramingEvolution.economicGrowthData}
                lines={[{ dataKey: 'gdp', name: 'GDP ($B)', color: CHART_COLORS.indigo }]}
                xAxisKey="year"
                height={220}
                showGrid={true}
              />
            </div>
          </GlassPanel>

          {/* Source Tier Distribution */}
          <GlassPanel title="Source Tier Distribution" description="Classification of sources by type">
            <div className="grid gap-4 md:grid-cols-3">
              {sourceTierDistribution.map((tier, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">{tier.tier}</Badge>
                    <span className="text-sm font-semibold text-slate-700">{tier.description}</span>
                  </div>
                  <p className="text-xs text-slate-500">{tier.sources}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Framing Patterns Tab */}
        <TabsContent value="framing" className="space-y-6">
          <GlassPanel title="Western Media Framing Patterns" description="How Western sources frame the UAE" badge="Western Perspective">
            <div className="grid gap-4 md:grid-cols-2">
              {synthesizedFindings.framingDivergence.western.map((pattern, idx) => (
                <FramingPatternCard key={idx} pattern={pattern} type="western" />
              ))}
            </div>
          </GlassPanel>

          <GlassPanel title="Gulf/Regional Framing Patterns" description="How Gulf sources frame the UAE" badge="Gulf Perspective">
            <div className="grid gap-4 md:grid-cols-2">
              {synthesizedFindings.framingDivergence.gulf.map((pattern, idx) => (
                <FramingPatternCard key={idx} pattern={pattern} type="gulf" />
              ))}
            </div>
          </GlassPanel>

          {/* Role Framing */}
          <GlassPanel title="Role Framing Categories" description="How UAE is framed in different roles">
            <div className="grid gap-4 md:grid-cols-5">
              {framingTypology.roleFraming.map((role, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50/50 text-center">
                  <div className="text-2xl mb-2">
                    {role.role === 'Hero' && '🦸'}
                    {role.role === 'Villain' && '😈'}
                    {role.role === 'Victim' && '😢'}
                    {role.role === 'Bystander' && '👀'}
                    {role.role === 'Aggressor' && '⚔️'}
                  </div>
                  <h4 className="font-semibold text-slate-700">{role.role}</h4>
                  <p className="text-xs text-slate-500 mt-1">{role.evidence}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Power Framing */}
          <GlassPanel title="Power Framing Spectrum" description="UAE characterized by size and influence">
            <div className="h-64">
              <RadarChart
                data={framingTypology.powerFraming.map((p) => ({
                  name: p.level,
                  value: p.level === 'Small state' ? 2 : p.level === 'Middle power' ? 5 : p.level === 'Regional power' ? 7 : 9,
                }))}
                metrics={[{ dataKey: 'value', name: 'Power Level', color: CHART_COLORS.indigo }]}
                height={250}
              />
            </div>
          </GlassPanel>

          {/* Crisis Framing Response */}
          <GlassPanel title="Crisis Framing Response" description="Western media vs UAE counter-narrative during March 2026">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-rose-50/50 p-4">
                <h4 className="font-semibold text-rose-700 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" /> Western Media Crisis Narrative
                </h4>
                <div className="space-y-2">
                  {synthesizedFindings.crisisFramingResponse.westernMedia.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <Circle className="h-2 w-2 text-rose-500 mt-1.5 shrink-0" />
                      <div>
                        <span className="font-medium text-rose-700">{item.narrativeElement}: </span>
                        <span className="text-slate-600">{item.example}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-emerald-50/50 p-4">
                <h4 className="font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> UAE Counter-Narrative
                </h4>
                <div className="space-y-2">
                  {synthesizedFindings.crisisFramingResponse.uaeCounter.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-3 w-3 text-emerald-500 mt-1 shrink-0" />
                      <div>
                        <span className="font-medium text-emerald-700">{item.narrativeElement}: </span>
                        <span className="text-slate-600">{item.evidence}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-4"
          >
            {sourcesData.map((source) => (
              <SourceCard
                key={source.id}
                source={source}
                isExpanded={expandedSource === source.name}
                onToggle={() =>
                  setExpandedSource(expandedSource === source.name ? null : source.name)
                }
              />
            ))}
          </motion.div>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment by Source Tier" description="Average sentiment classification by tier">
            <div className="h-72">
              <PieChart
                data={sentimentByTier.map((t) => ({
                  name: t.tier.split(' ')[0] + ' ' + t.tier.split(' ')[1],
                  value: t.averageSentiment.includes('Pro-UAE') ? 75 : t.averageSentiment.includes('Neutral') ? 50 : 60,
                }))}
                height={280}
              />
            </div>
          </GlassPanel>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Engagement Metrics */}
            <GlassPanel title="Crisis Response Engagement" description="Dubai media performance during March 2026">
              <div className="grid grid-cols-2 gap-3">
                {dataTables.engagementMetrics.slice(0, 6).map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50/50 text-center">
                    <div className="text-xl font-bold text-indigo-600">{metric.value}</div>
                    <div className="text-xs text-slate-500">{metric.metric}</div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Soft Power Metrics */}
            <GlassPanel title="Soft Power Metrics" description="UAE global influence indicators">
              <div className="grid grid-cols-2 gap-3">
                {dataTables.softPowerMetrics.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-emerald-50/50 text-center">
                    <div className="text-xl font-bold text-emerald-600">{metric.value}</div>
                    <div className="text-xs text-slate-500">{metric.metric}</div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Sentiment Analysis Segment */}
          <GlassPanel title="Sentiment by Segment" description="Positive sentiment percentage by category">
            <div className="h-64">
              <BarChart
                data={dataTables.sentimentAnalysis}
                xAxisKey="segment"
                bars={[{ dataKey: 'positiveSentiment', name: 'Positive %', color: CHART_COLORS.emerald }]}
                height={220}
                showGrid={true}
              />
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Framing Scorecard Tab */}
        <TabsContent value="scorecard" className="space-y-6">
          <GlassPanel title="Framing Scorecard" description="Quantitative comparison of framing perspectives">
            <div className="h-80">
              <RadarChart
                data={framingScorecard.map((s) => ({
                  name: s.framingType,
                  western: s.westernScore,
                  gulf: s.gulfScore,
                }))}
                metrics={[
                  { dataKey: 'western', name: 'Western Score', color: CHART_COLORS.rose },
                  { dataKey: 'gulf', name: 'Gulf Score', color: CHART_COLORS.emerald },
                ]}
                height={300}
              />
            </div>
          </GlassPanel>

          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Gap Analysis" description="Perspective divergence by category">
              <div className="space-y-3">
                {framingScorecard.map((score, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="text-sm font-medium text-slate-700 w-32">{score.framingType}</span>
                    <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-400 to-emerald-400 rounded-full"
                        style={{ width: `${((score.westernScore + score.gulfScore) / 20) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-rose-600 w-12">{score.westernScore}</span>
                    <span className="text-sm font-semibold text-emerald-600 w-12">{score.gulfScore}</span>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Alliance/Geopolitical Framing" description="UAE positioning and Western concerns">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-2">UAE Position</h4>
                  <div className="space-y-2">
                    {synthesizedFindings.allianceGeopolitical.uaePosition.map((pos, idx) => (
                      <div key={idx} className="p-2 rounded bg-emerald-50/50">
                        <span className="text-xs font-semibold text-emerald-600">{pos.principle}: </span>
                        <span className="text-sm text-slate-600 italic">{pos.quote}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-700 mb-2">Western Concerns</h4>
                  <div className="space-y-2">
                    {synthesizedFindings.allianceGeopolitical.westernConcerns.map((concern, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <AlertTriangle className="h-3 w-3 text-rose-500" />
                        <span className="font-medium text-rose-700">{concern.concern}: </span>
                        <span className="text-slate-600">{concern.source}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* Media Control */}
          <GlassPanel title="Media Control & Misinformation" description="UAE approach to information management">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-indigo-700 mb-3">UAE Approach</h4>
                <div className="space-y-2">
                  {synthesizedFindings.mediaControlMisinformation.uaeApproach.map((tool, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-3 w-3 text-indigo-500 mt-1 shrink-0" />
                      <div>
                        <span className="font-medium text-indigo-700">{tool.tool}: </span>
                        <span className="text-slate-600">{tool.implementation}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-amber-700 mb-3">Characterization of Critics</h4>
                <div className="flex flex-wrap gap-2">
                  {synthesizedFindings.mediaControlMisinformation.characterizationOfCritics.map((label, idx) => (
                    <Badge key={idx} variant="outline" className="bg-amber-50/50 text-amber-700">
                      {label.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Government & Institutional Entities" description="Key actors in UAE framing ecosystem">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {keyEntities.governmentInstitutional.map((entity, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-indigo-500" />
                    <h4 className="font-semibold text-slate-700 text-sm">{entity.entity}</h4>
                  </div>
                  <p className="text-xs text-slate-500">{entity.type}</p>
                  <p className="text-xs text-indigo-600 mt-1">{entity.role}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          <div className="grid gap-6 lg:grid-cols-2">
            <GlassPanel title="Media Organizations" description="Sources by tier">
              <div className="space-y-4">
                {(['TIER 1', 'TIER 3'] as const).map((tier) => (
                  <div key={tier}>
                    <h4 className="font-semibold text-slate-700 mb-2">{tier}</h4>
                    <div className="flex flex-wrap gap-2">
                      {keyEntities.mediaOrganizations
                        .filter((m) => m.tier === tier)
                        .map((media, idx) => (
                          <Badge key={idx} variant="outline" className="bg-slate-50">
                            {media.entity}
                          </Badge>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Think Tanks & Academic" description="Research sources by tier">
              <div className="space-y-4">
                {[...new Set(keyEntities.thinkTanksAcademic.map((t) => t.tier))].map((tier) => (
                  <div key={tier}>
                    <h4 className="font-semibold text-slate-700 mb-2">{tier}</h4>
                    <div className="flex flex-wrap gap-2">
                      {keyEntities.thinkTanksAcademic
                        .filter((t) => t.tier === tier)
                        .map((thinkTank, idx) => (
                          <Badge key={idx} variant="outline" className="bg-slate-50">
                            {thinkTank.entity}
                          </Badge>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>

          {/* Demographics */}
          <GlassPanel title="UAE Demographics" description="Population data from research">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {dataTables.demographics.map((demo, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50/50 text-center">
                  <div className="text-lg font-bold text-indigo-600">{demo.estimate}</div>
                  <div className="text-xs text-slate-500">{demo.group}</div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
