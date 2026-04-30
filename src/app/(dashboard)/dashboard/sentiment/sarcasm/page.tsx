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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Users,
  Zap,
  Brain,
  Heart,
  Smile,
  Frown,
  Meh,
  Angry,
  Feather,
  Clock,
  Scale,
  Globe,
  UsersRound,
  Factory,
  Ban,
  Siren,
  Clock as ClockIcon,
  Database,
  ShieldAlert,
  CheckCircle,
  XCircle,
  ChevronRight,
  Activity,
  Target,
  Eye,
  Shield,
  Quote,
  Flag,
  Landmark,
  AlertOctagon,
  Leaf,
  Droplet,
  Building,
  Wallet,
  Lock,
  MessageCircle,
  Languages,
  BarChart3,
  TrendingDownIcon,
  Layers,
  ChevronDown,
} from 'lucide-react'
import { useSarcasmData } from '@/lib/data-loader/sentiment-data'

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

const cardHover = {
  hover: { scale: 1.02, transition: { duration: 0.2 } },
}

const listItem = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
}

export default function SarcasmIronyPage() {
  const data = useSarcasmData()
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Sarcasm & Irony Detection data...</div>
      </div>
    )
  }

  const { overview, sourceCredibilityMatrix, politicalPrisoners, governmentInitiatives, documentedContradictions, internationalRankings, keyStatistics, adnocEnergyData, climateEnergyTargets, yemenCrisisData, sentimentByTopic, sentimentBySourceType, englishPatterns, arabicPatterns, ironyThemes, criticalKPIs, keyQuotations, sentimentDistributionData, ironyIntensityData } = data

  // Severity helpers
  const getSeverityColor = (status: string) => {
    switch (status) {
      case 'CRITICAL': return 'text-red-400 bg-red-500/20'
      case 'HIGH': return 'text-amber-400 bg-amber-500/20'
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-500/20'
      case 'LOW': return 'text-green-400 bg-green-500/20'
      case 'AT RISK': return 'text-orange-400 bg-orange-500/20'
      case 'TRACKING': return 'text-blue-400 bg-blue-500/20'
      default: return 'text-slate-400 bg-slate-500/20'
    }
  }

  const getSeverityBorder = (status: string) => {
    switch (status) {
      case 'CRITICAL': return 'border-red-500/50'
      case 'HIGH': return 'border-amber-500/50'
      case 'AT RISK': return 'border-orange-500/50'
      case 'TRACKING': return 'border-blue-500/50'
      default: return 'border-slate-500/50'
    }
  }

  const getIronyColor = (score: string) => {
    if (score.includes('9.5') || score.includes('9.0')) return 'text-red-400'
    if (score.includes('7.5')) return 'text-orange-400'
    if (score.includes('5.5')) return 'text-yellow-400'
    return 'text-slate-400'
  }

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
            <Badge variant="warning" className="mb-2 bg-orange-500/20 text-orange-400 border-orange-500/50">
              <MessageCircle className="w-3 h-3 mr-1" />
              SARCASM & IRONY DETECTION
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold gradient-text-gold font-rajdhani"
          >
            Sarcasm & Irony Detection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-slate-400"
          >
            {overview.totalSources} sources across 5 tiers • {overview.dataPointsExtracted}+ data points • {overview.structuredTables} structured tables
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3"
        >
          <Button variant="outline" className="gap-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
            <Target className="h-4 w-4" />
            Detect Patterns
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Analyze Irony
          </Button>
        </motion.div>
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
            title="Total Sources"
            value={overview.totalSources.toString()}
            icon={<Database className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Critical Sources"
            value={overview.criticalSources.toString()}
            icon={<AlertTriangle className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Avg Ironic Usage"
            value={overview.averageIronicUsage}
            icon={<MessageCircle className="h-6 w-6" />}
            gradient="orange"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Highest Irony Score"
            value="9.5/10"
            icon={<AlertOctagon className="h-6 w-6" />}
            gradient="rose"
            status="error"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="contradictions">Contradictions</TabsTrigger>
          <TabsTrigger value="patterns">Sarcasm Patterns</TabsTrigger>
          <TabsTrigger value="themes">Irony Themes</TabsTrigger>
          <TabsTrigger value="data">Data Tables</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Irony Analysis Overview" description="Sentiment distribution and key irony indicators">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentDistributionData}
                      height={300}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Irony Intensity by Theme</CardTitle>
                    <CardDescription>Severity scores for cross-cutting irony markers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={ironyIntensityData}
                      xAxisKey="theme"
                      bars={[
                        { dataKey: 'score', name: 'Irony Score', color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Critical KPIs for Monitoring</CardTitle>
                  <CardDescription>Key metrics requiring ongoing tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {criticalKPIs.map((kpi, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`flex items-center justify-between p-4 rounded-lg border ${getSeverityBorder(kpi.status)} bg-slate-900/50`}
                      >
                        <div className="flex items-center gap-3">
                          <Badge className={getSeverityColor(kpi.status)}>{kpi.status}</Badge>
                          <span className="text-slate-200 font-medium">{kpi.kpi}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-slate-400 text-sm">{kpi.threshold}</span>
                          <span className="text-white font-bold">{kpi.currentValue}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>Top sources by tier and relevance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sourceCredibilityMatrix.slice(0, 10).map((source, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Badge variant={source.tier === 0 ? 'default' : source.tier === 1 ? 'success' : source.tier === 2 ? 'warning' : 'secondary'}>
                            Tier {source.tier}
                          </Badge>
                          <span className="text-slate-200 font-medium">{source.source}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={getSeverityColor(source.uaeRelevance)}>{source.uaeRelevance}</Badge>
                          <span className="text-slate-400 text-sm">{source.credibilityScore}/100</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Contradictions Tab */}
        <TabsContent value="contradictions" className="space-y-6">
          <GlassPanel title="Documented Contradictions" description="Official claims vs documented realities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Claim vs Reality Matrix</CardTitle>
                  <CardDescription>Irony markers across UAE messaging</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documentedContradictions.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-4 rounded-lg border border-slate-700/50 bg-gradient-to-r from-slate-900/50 to-slate-800/30"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="text-emerald-400 border-emerald-500/50 bg-emerald-500/10">
                            {item.officialClaim}
                          </Badge>
                          <Badge className={getSeverityColor(item.ironyMarker.includes('Very') ? 'CRITICAL' : item.ironyMarker.includes('High') ? 'HIGH' : 'MEDIUM')}>
                            {item.ironyMarker}
                          </Badge>
                        </div>
                        <p className="text-slate-400 text-sm mb-2">Reality: {item.reality}</p>
                        <p className="text-slate-500 text-xs">Source: {item.source}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">International Rankings</CardTitle>
                    <CardDescription>UAE global standing indices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {internationalRankings.map((rank, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-700/50">
                          <span className="text-slate-200 font-medium">{rank.index}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-slate-400 text-sm">{rank.uaeScore} {rank.globalRank !== '-' ? `@ ${rank.globalRank}` : ''}</span>
                            <Badge className={rank.assessment === 'Not Free' || rank.assessment === 'Very Poor' ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-400'}>
                              {rank.assessment}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Statistics</CardTitle>
                    <CardDescription>Demographic and economic metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {keyStatistics.slice(0, 8).map((stat, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-700/50">
                          <span className="text-slate-200 font-medium">{stat.metric}</span>
                          <span className="text-orange-400 font-bold">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Political Prisoners</CardTitle>
                  <CardDescription>Documented cases of detention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {politicalPrisoners.slice(0, 12).map((prisoner, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-3 rounded-lg border border-slate-700/50 bg-slate-900/50 hover:border-red-500/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Lock className="h-4 w-4 text-red-400" />
                          <span className="text-slate-200 font-bold text-sm">{prisoner.name}</span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-slate-400 text-xs">{prisoner.charges}</p>
                          <p className="text-slate-500 text-xs">{prisoner.status} • {prisoner.sentence}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Patterns Tab */}
        <TabsContent value="patterns" className="space-y-6">
          <GlassPanel title="Sarcasm & Irony Patterns" description="English and Arabic linguistic patterns">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">English Sarcasm Patterns</CardTitle>
                  <CardDescription>Frequently ironic English phrases</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={englishPatterns.map(p => ({
                      pattern: p.pattern,
                      intensity: parseInt(p.ironyIntensity.match(/\d+/)?.[0] || '0'),
                      context: p.context,
                    }))}
                    xAxisKey="pattern"
                    bars={[
                      { dataKey: 'intensity', name: 'Irony %', color: CHART_COLORS.orange },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                  <div className="mt-4 space-y-2">
                    {englishPatterns.map((pattern, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-700/50"
                      >
                        <span className="text-slate-200 font-mono">{pattern.pattern}</span>
                        <div className="flex items-center gap-2">
                          <Badge className={getSeverityColor(pattern.ironyIntensity.includes('Very') ? 'CRITICAL' : pattern.ironyIntensity.includes('High') ? 'HIGH' : 'MEDIUM')}>
                            {pattern.ironyIntensity}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Arabic Sarcasm Patterns</CardTitle>
                  <CardDescription>Arabic linguistic irony markers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {arabicPatterns.map((pattern, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-4 rounded-lg border border-slate-700/50 bg-slate-900/50"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-xl font-bold text-orange-400 mb-1" dir="rtl">{pattern.arabicPattern}</p>
                            <p className="text-slate-400 text-sm">{pattern.translation}</p>
                          </div>
                          <Badge className={getSeverityColor(pattern.ironyIntensity.includes('Very') ? 'CRITICAL' : pattern.ironyIntensity.includes('High') ? 'HIGH' : pattern.ironyIntensity.includes('Medium') ? 'MEDIUM' : 'LOW')}>
                            {pattern.ironyIntensity}
                          </Badge>
                        </div>
                        <p className="text-slate-500 text-sm mb-2">Context: {pattern.context}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-emerald-400 border-emerald-500/50">{pattern.sentiment}</Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Topic</CardTitle>
                  <CardDescription>Positive, negative, and ironic sentiment distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sentimentByTopic.map((topic, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-slate-200 font-medium">{topic.topic}</span>
                          <Badge className={getSeverityColor(topic.ironicPercent > 50 ? 'CRITICAL' : topic.ironicPercent > 30 ? 'HIGH' : 'MEDIUM')}>
                            {topic.ironicPercent}% Ironic
                          </Badge>
                        </div>
                        <div className="flex gap-1 h-2">
                          <div className="bg-emerald-500 rounded-l-full" style={{ width: `${topic.positivePercent}%` }} />
                          <div className="bg-slate-500" style={{ width: `${topic.neutralPercent}%` }} />
                          <div className="bg-red-500" style={{ width: `${topic.negativePercent}%` }} />
                          <div className="bg-orange-500 rounded-r-full" style={{ width: `${topic.ironicPercent}%` }} />
                        </div>
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>+{topic.positivePercent}%</span>
                          <span>{topic.neutralPercent}%</span>
                          <span>-{topic.negativePercent}%</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Themes Tab */}
        <TabsContent value="themes" className="space-y-6">
          <GlassPanel title="Cross-Cutting Irony Themes" description="Major irony patterns across UAE discourse">
            <div className="space-y-6">
              {ironyThemes.map((theme, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="glass-card border-red-500/30">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <Badge variant="destructive" className="mb-2 bg-red-500/20 text-red-400 border-red-500/50">
                            <AlertOctagon className="w-3 h-3 mr-1" />
                            {theme.ironyScore}
                          </Badge>
                          <CardTitle className="text-xl text-slate-100">{theme.theme}</CardTitle>
                          <CardDescription className="mt-2">{theme.pattern}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="text-slate-300 font-medium text-sm">Evidence:</h4>
                        <div className="space-y-2">
                          {theme.evidence.map((e, eidx) => (
                            <div key={eidx} className="flex items-start gap-2 text-slate-400 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                              <span>{e}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {theme.keySources.map((source, sidx) => (
                            <Badge key={sidx} variant="outline" className="border-slate-600 text-slate-400">
                              {source}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Data Tables Tab */}
        <TabsContent value="data" className="space-y-6">
          <GlassPanel title="Comprehensive Data Tables" description="All structured data from the research">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">ADNOC & Energy Data</CardTitle>
                  <CardDescription>Oil and gas production metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {adnocEnergyData.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-700/50">
                        <span className="text-slate-300 font-medium">{item.parameter}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-emerald-400 font-bold">{item.value}</span>
                          <span className="text-slate-500 text-sm">{item.timeframe}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Climate & Energy Targets</CardTitle>
                  <CardDescription>Renewable energy and emissions targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {climateEnergyTargets.map((target, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-700/50">
                        <span className="text-slate-300 font-medium">{target.targetMetric}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-teal-400 font-bold">{target.value}</span>
                          <Badge variant="outline" className="border-teal-500/50 text-teal-400">
                            {target.targetYear}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Yemen Humanitarian Crisis</CardTitle>
                  <CardDescription>Documented humanitarian impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {yemenCrisisData.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-red-950/20 border border-red-500/30">
                        <span className="text-slate-300 font-medium">{item.metric}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-red-400 font-bold">{item.value}</span>
                          <span className="text-slate-500 text-sm">{item.source}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Source Type</CardTitle>
                  <CardDescription>Average sentiment scores across source categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sentimentBySourceType.map(s => ({
                      type: s.sourceType,
                      sentiment: s.averageSentiment,
                    }))}
                    xAxisKey="type"
                    bars={[
                      { dataKey: 'sentiment', name: 'Sentiment Score', color: CHART_COLORS.denim },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Government Initiatives</CardTitle>
                  <CardDescription>Official programs and their irony scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {governmentInitiatives.map((init, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-700/50">
                        <div>
                          <span className="text-slate-200 font-medium">{init.initiative}</span>
                          <p className="text-slate-500 text-xs">{init.year} • {init.ministryBody}</p>
                        </div>
                        <Badge className={init.ironyScore.includes('Very') ? 'bg-red-500/20 text-red-400' : init.ironyScore.includes('High') ? 'bg-orange-500/20 text-orange-400' : 'bg-slate-500/20 text-slate-400'}>
                          {init.ironyScore}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Quotations</CardTitle>
                  <CardDescription>Critical source citations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {keyQuotations.map((quotation, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-4 rounded-lg border border-slate-700/50 bg-slate-900/50"
                      >
                        <div className="flex items-start gap-3">
                          <Quote className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-slate-300 italic mb-2">"{quotation.quote}"</p>
                            <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                              {quotation.source}
                            </Badge>
                          </div>
                        </div>
                      </motion.div>
                    ))}
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
