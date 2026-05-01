// @ts-nocheck
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
  Activity,
  AlertCircle,
  Brain,
  Target,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Search,
  Network,
  Database,
  GitBranch,
  BarChart3,
  ShieldCheck,
  AlertTriangle,
  Award,
  Beaker,
  BookOpen,
  Building2,
  CheckCircle,
  Clock,
  Code,
  Compass,
  Cpu,
  Crosshair,
  Eye,
  FileSearch,
  Filter,
  Flag,
  Flower2,
  GitMerge,
  Hash,
  Hexagon,
  History,
  Layers,
  Lightbulb,
  LineChart as LineChartIcon,
  Link2,
  List,
  Lock,
  Map,
  MessageSquare,
  Mic,
  Microscope,
  Milestone,
  ArrowRight,
  Package,
  PieChart as PieChartIcon,
  Radio,
  Repeat,
  Scale,
  Share2,
  ShieldAlert,
  Signal,
  Sparkles,
  Speech,
  SunMedium,
  Target as TargetIcon,
  Timer,
  ToggleLeft,
  TrackChanges,
  TreePine,
  Users,
  Video,
  Vote,
  Wallet,
  Webhook,
  XCircle,
  Zap as ZapIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  narrativeReconstructionData,
  narrativeReconstructionStatistics,
  blackbirdMetrics,
  blackbirdCaseStudies,
  narrativeIntelligencePlatforms,
  peakMetricsFramework,
  edgeTheoryProcess,
  originTracingMethods,
  narrativeLifecycleStages,
  measurementFrameworks,
  llmShiftDetectionMetrics,
  searchQueryStrategies,
  platformTracking,
  analyticalFrameworks,
  entityRegistriesNR,
  criticalFindings,
  recommendedTools,
} from '@/lib/data-loader/monitoring-data'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function NarrativeReconstructionPage() {
  // Key statistics for cards
  const keyStats = [
    { title: 'Enterprise Threat Spending (2028)', value: '$30B', icon: <Wallet className="h-6 w-6" />, gradient: 'rose', trend: 'up' as const, status: 'critical' },
    { title: 'Deepfake Incident Increase', value: '257%', icon: <Video className="h-6 w-6" />, gradient: 'gold', trend: 'up' as const, status: 'warning' },
    { title: 'Meme Mutation Rate', value: '99%', icon: <Share2 className="h-6 w-6" />, gradient: 'purple', status: 'info' },
    { title: 'Cross-Platform Accuracy', value: '67.7%', icon: <Target className="h-6 w-6" />, gradient: 'emerald', status: 'info' },
  ]

  // Market statistics chart data
  const marketStatsData = [
    { name: '2025', market: 1.8, projection: 2.1 },
    { name: '2026', market: 2.0, projection: 2.4 },
    { name: '2027', market: 2.3, projection: 2.8 },
    { name: '2028', market: 2.6, projection: 3.2 },
    { name: '2029', market: 2.9, projection: 3.6 },
    { name: '2030', market: 3.2, projection: 4.0 },
  ]

  // Case studies chart data
  const caseStudiesData = [
    { name: 'Pharma Drop', value: 15, unit: '$B' },
    { name: 'Deepfake CFO', value: 25, unit: '$M' },
    { name: 'Meme Stock', value: 483, unit: '$' },
  ]

  // Platform comparison data
  const platformComparisonData = [
    { name: 'Blackbird.AI', coverage: 95, capability: 92, uaeRelevance: 98 },
    { name: 'PeakMetrics', coverage: 88, capability: 85, uaeRelevance: 85 },
    { name: 'EdgeTheory', coverage: 82, capability: 88, uaeRelevance: 82 },
    { name: 'DigitalStakeout', coverage: 78, capability: 80, uaeRelevance: 75 },
    { name: 'Pulsar', coverage: 75, capability: 78, uaeRelevance: 72 },
  ]

  // Risk index data
  const riskIndexData = [
    { metric: 'Toxicity', value: 78 },
    { metric: 'Polarization', value: 65 },
    { metric: 'Bot Activity', value: 82 },
    { metric: 'Sexism', value: 34 },
    { metric: 'Hate Speech', value: 45 },
    { metric: 'Manipulation', value: 71 },
  ]

  // Research accuracy data
  const researchAccuracyData = [
    { name: 'LLM Narrative Classification', value: 57.35 },
    { name: 'LLM Explanation Accuracy', value: 83.78 },
    { name: 'Cross-Platform Prediction', value: 67.7 },
    { name: 'Human Confirmed Shifts', value: 54.4 },
  ]

  // Network analysis metrics
  const networkMetricsData = [
    { name: 'Betweenness', value: 45 },
    { name: 'Degree', value: 72 },
    { name: 'Clustering', value: 68 },
    { name: 'Eigenvector', value: 55 },
  ]

  // Methodology effectiveness
  const methodologyEffectiveness = [
    { method: 'First Story Detection', effectiveness: 92, limitations: 'Requires large corpus' },
    { method: 'Patient Zero Tracking', effectiveness: 65, limitations: 'Misapplication risk' },
    { method: 'Theme Tracing', effectiveness: 89, limitations: 'Wording-change resilience' },
    { method: 'Narrative Trails', effectiveness: 88, limitations: 'Computational intensity' },
    { method: 'LLM-based Shift Detection', effectiveness: 72, limitations: 'Requires human validation' },
    { method: 'Cross-Platform Prediction', effectiveness: 67.7, limitations: 'Platform API limits' },
  ]

  // Source credibility tiers
  const sourceCredibilityData = [
    { tier: 'Tier 1 - Primary', count: 6, color: CHART_COLORS.emerald },
    { tier: 'Tier 2 - Academic', count: 12, color: CHART_COLORS.navy },
    { tier: 'Tier 3 - Secondary', count: 5, color: CHART_COLORS.gold },
    { tier: 'Tier 4 - Tertiary', count: 3, color: CHART_COLORS.platinum },
  ]

  // UAE relevance distribution
  const uaeRelevanceData = [
    { name: 'Critical', value: 8, color: CHART_COLORS.rose },
    { name: 'High', value: 14, color: CHART_COLORS.gold },
    { name: 'Medium', value: 6, color: CHART_COLORS.navy },
    { name: 'Low', value: 2, color: CHART_COLORS.platinum },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">NARRATIVE INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Narrative Reconstruction</h1>
          <p className="mt-2 text-platinum-400">
            Comprehensive playbook for tracking narrative lifecycle from origin through evolution to battle analysis
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Beaker className="h-4 w-4" />
            Research Mode
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Threat Center
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {keyStats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <MetricCard
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              gradient={stat.gradient as "gold" | "emerald" | "rose" | "navy" | "purple" | "denim"}
              status={stat.status as "info" | "success" | "warning" | "critical"}
              trend={stat.trend}
            />
          </motion.div>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="methodologies">Methodologies</TabsTrigger>
          <TabsTrigger value="lifecycle">Lifecycle</TabsTrigger>
          <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="queries">Queries</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Executive Summary" description="Narrative Intelligence comprehensive research findings">
            <div className="space-y-6">
              {/* Key Statistics */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-gold" />
                      Market Growth Projection
                    </CardTitle>
                    <CardDescription>Narrative intelligence market 2025-2033 (CAGR 11.2%)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={marketStatsData}
                      areas={[
                        { dataKey: 'market', name: 'Market Size ($B)', color: CHART_COLORS.navy, fillOpacity: 0.6 },
                        { dataKey: 'projection', name: 'Projection ($B)', color: CHART_COLORS.gold, fillOpacity: 0.4 },
                      ]}
                      xAxisKey="name"
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-rose" />
                      Case Study Impact
                    </CardTitle>
                    <CardDescription>Real-world financial impact of narrative attacks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={caseStudiesData}
                      bars={[
                        { dataKey: 'value', name: 'Impact Value', color: CHART_COLORS.rose },
                      ]}
                      xAxisKey="name"
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Blackbird.AI Key Metrics */}
              <Card className="glass-card border-rose-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-rose" />
                    Blackbird.AI - Critical Statistics
                  </CardTitle>
                  <CardDescription>Primary source data on narrative threats</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {blackbirdMetrics.slice(0, 8).map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4 hover:bg-platinum-800/50 transition-colors cursor-pointer"
                      >
                        <div className="text-lg font-bold text-rose">{metric.value}</div>
                        <div className="text-xs text-platinum-400 mt-1">{metric.metric}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Case Studies */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Crosshair className="h-5 w-5 text-gold" />
                    Real-World Attack Case Studies
                  </CardTitle>
                  <CardDescription>Documented narrative attack incidents and vectors</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {blackbirdCaseStudies.map((caseStudy, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-4 p-4 rounded-lg border border-platinum-700/50 bg-platinum-800/30 hover:bg-platinum-800/50 transition-colors"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose/20">
                            <Target className="h-6 w-6 text-rose" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-platinum-200">{caseStudy.incident}</h4>
                              <Badge variant="outline" className="text-xs">{caseStudy.date}</Badge>
                            </div>
                            <p className="text-sm text-platinum-400 mt-1">{caseStudy.attackVector}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-rose">{caseStudy.impact}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Critical Findings */}
              <Card className="glass-card border-gold/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-gold" />
                    Critical Findings for UAE Stakeholders
                  </CardTitle>
                  <CardDescription>Priority-ranked narrative intelligence implications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {criticalFindings.map((finding, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center gap-4 p-3 rounded-lg border bg-platinum-800/30"
                        style={{
                          borderColor: finding.priority === 'Critical' ? 'rgba(239, 68, 68, 0.5)' :
                                       finding.priority === 'High' ? 'rgba(245, 158, 11, 0.5)' : 'rgba(100, 116, 139, 0.5)'
                        }}
                      >
                        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                          finding.priority === 'Critical' ? 'bg-rose/20 text-rose' :
                          finding.priority === 'High' ? 'bg-gold/20 text-gold' :
                          'bg-platinum/20 text-platinum'
                        }`}>
                          {finding.priority}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-platinum-200">{finding.finding}</p>
                          <p className="text-xs text-platinum-400 mt-1">Implication: {finding.implication}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Platforms Tab */}
        <TabsContent value="platforms" className="space-y-6">
          <GlassPanel title="Narrative Intelligence Platforms" description="Comparison of major platform capabilities">
            <div className="space-y-6">
              {/* Platform Comparison Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-gold" />
                    Platform Capability Comparison
                  </CardTitle>
                  <CardDescription>Coverage, capability, and UAE relevance scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadarChart
                    data={platformComparisonData}
                    metrics={[
                      { dataKey: 'coverage', name: 'Coverage', color: CHART_COLORS.navy },
                      { dataKey: 'capability', name: 'Capability', color: CHART_COLORS.gold },
                      { dataKey: 'uaeRelevance', name: 'UAE Relevance', color: CHART_COLORS.rose },
                    ]}
                    height={350}
                  />
                </CardContent>
              </Card>

              {/* Platform Details */}
              <div className="grid gap-6 lg:grid-cols-3">
                {Object.entries(narrativeIntelligencePlatforms).map(([key, platform], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="glass-card h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{platform.name}</CardTitle>
                          <Badge variant={platform.extractionStatus === 'Fetched' ? 'success' : 'warning'} className="text-xs">
                            {platform.extractionStatus}
                          </Badge>
                        </div>
                        <CardDescription>Tier {platform.tier} | {platform.uaeRelevance} Relevance</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-platinum-400">Credibility Score</span>
                            <span className="font-bold text-gold">{platform.sourceCredibility}/10</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {platform.keyFeatures.slice(0, 5).map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-platinum-400">
                              <CheckCircle className="h-3 w-3 text-emerald flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* PeakMetrics Framework */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Compass className="h-5 w-5 text-navy" />
                    PeakMetrics Detect-Decipher-Defend Framework
                  </CardTitle>
                  <CardDescription>Three-phase narrative intelligence approach</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {peakMetricsFramework.map((phase, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-navy/30 bg-navy/10 p-4 hover:bg-navy/20 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/20 text-navy font-bold">
                            {idx + 1}
                          </div>
                          <h4 className="font-bold text-platinum-200">{phase.phase}</h4>
                        </div>
                        <p className="text-sm text-platinum-400 mb-2">{phase.description}</p>
                        <div className="text-xs text-navy">{phase.metrics}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* EdgeTheory Process */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GitMerge className="h-5 w-5 text-emerald" />
                    EdgeTheory 5-Step Process
                  </CardTitle>
                  <CardDescription>Consume-Disassemble-Analyze-Synthesize-Deliver</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {edgeTheoryProcess.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="rounded-lg border border-emerald/30 bg-emerald/10 p-3 text-center min-w-[120px]">
                          <div className="text-xs text-emerald mb-1">Step {idx + 1}</div>
                          <div className="font-bold text-platinum-200">{step.step}</div>
                          <div className="text-xs text-platinum-400 mt-1">{step.description}</div>
                        </div>
                        {idx < edgeTheoryProcess.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-emerald flex-shrink-0" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Methodologies Tab */}
        <TabsContent value="methodologies" className="space-y-6">
          <GlassPanel title="Origin Tracing & Evolution Mapping" description="Academic and platform methodologies for narrative analysis">
            <div className="space-y-6">
              {/* Origin Tracing */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Map className="h-5 w-5 text-gold" />
                    Origin Tracing Methods
                  </CardTitle>
                  <CardDescription>First Story Detection, Patient Zero, Rumor Source Detection</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Network Structures */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-platinum-300">Network Structures</h4>
                      {originTracingMethods.networkStructures.map((structure, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                        >
                          <div className="flex items-center gap-2">
                            <Network className="h-4 w-4 text-navy" />
                            <span className="font-medium text-platinum-200">{structure.structure}</span>
                          </div>
                          <p className="text-xs text-platinum-400 mt-1">{structure.description}</p>
                          <p className="text-xs text-emerald mt-1">Use: {structure.useCase}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Propagation Models */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-platinum-300">Propagation Models</h4>
                      {originTracingMethods.propagationModels.map((model, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                        >
                          <div className="flex items-center gap-2">
                            <GitBranch className="h-4 w-4 text-purple" />
                            <span className="font-medium text-platinum-200">{model.model}</span>
                          </div>
                          <p className="text-xs text-platinum-400 mt-1">{model.description}</p>
                          <p className="text-xs text-purple mt-1">Characteristics: {model.characteristics}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* LLM Shift Detection */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple" />
                    LLM Narrative Shift Detection
                  </CardTitle>
                  <CardDescription>Hybrid approach using RollingLDA and Llama 3.1 8B</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      {llmShiftDetectionMetrics.pipeline.map((stage, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className="px-3 py-2 rounded-lg bg-purple/20 text-purple text-sm font-medium border border-purple/30">
                            {stage}
                          </div>
                          {idx < llmShiftDetectionMetrics.pipeline.length - 1 && (
                            <ArrowRight className="h-4 w-4 text-purple" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-4">
                      {llmShiftDetectionMetrics.keyFindings.map((finding, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3 text-center"
                        >
                          <div className="text-xl font-bold text-purple">{finding.value}</div>
                          <div className="text-xs text-platinum-400 mt-1">{finding.metric}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Research Accuracy */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-emerald" />
                    Research Accuracy Metrics
                  </CardTitle>
                  <CardDescription>LLM and methodology performance benchmarks</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={researchAccuracyData}
                    bars={[
                      { dataKey: 'value', name: 'Accuracy %', color: CHART_COLORS.emerald },
                    ]}
                    xAxisKey="name"
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Methodology Effectiveness */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Scale className="h-5 w-5 text-gold" />
                    Methodology Effectiveness
                  </CardTitle>
                  <CardDescription>Effectiveness ratings and limitations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {methodologyEffectiveness.map((method, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-platinum-200">{method.method}</span>
                          <span className="text-sm font-bold text-emerald">{method.effectiveness}%</span>
                        </div>
                        <Progress value={method.effectiveness} className="h-2" />
                        <p className="text-xs text-platinum-500">Limitations: {method.limitations}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Lifecycle Tab */}
        <TabsContent value="lifecycle" className="space-y-6">
          <GlassPanel title="Narrative Life Cycle Stages" description="From emergence to resolution/persistence">
            <div className="space-y-6">
              {/* Lifecycle Stages Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Timeline className="h-5 w-5 text-gold" />
                    Narrative Evolution Stages
                  </CardTitle>
                  <CardDescription>Six-stage narrative lifecycle with key metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-emerald to-navy" />
                    <div className="space-y-6">
                      {narrativeLifecycleStages.map((stage, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.15 }}
                          className="flex items-start gap-4 relative"
                        >
                          <div className={`flex h-12 w-12 items-center justify-center rounded-full z-10 ${
                            idx === 0 ? 'bg-gold/20 text-gold' :
                            idx === narrativeLifecycleStages.length - 1 ? 'bg-navy/20 text-navy' :
                            'bg-emerald/20 text-emerald'
                          }`}>
                            <span className="font-bold">{idx + 1}</span>
                          </div>
                          <div className="flex-1 pb-6">
                            <h4 className="font-semibold text-platinum-200">{stage.stage}</h4>
                            <p className="text-sm text-platinum-400 mt-1">{stage.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {stage.keyMetrics.map((metric, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {metric}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Platform Tracking */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Radio className="h-5 w-5 text-rose" />
                    Platform-Specific Tracking Methods
                  </CardTitle>
                  <CardDescription>Twitter/X, Reddit, TikTok tracking metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-3">
                    {/* Twitter/X */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-platinum-300 flex items-center gap-2">
                        <Hash className="h-4 w-4 text-info" />
                        Twitter/X
                      </h4>
                      {platformTracking.twitterX.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                          <div className="font-medium text-platinum-200 text-sm">{item.trackingMethod}</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.metrics.map((m, i) => (
                              <Badge key={i} variant="outline" className="text-xs text-info">{m}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Reddit */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-platinum-300 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-orange" />
                        Reddit
                      </h4>
                      {platformTracking.reddit.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                          <div className="font-medium text-platinum-200 text-sm">{item.trackingMethod}</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.metrics.map((m, i) => (
                              <Badge key={i} variant="outline" className="text-xs text-orange">{m}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* TikTok */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-platinum-300 flex items-center gap-2">
                        <Video className="h-4 w-4 text-pink" />
                        TikTok
                      </h4>
                      {platformTracking.tiktok.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                          <div className="font-medium text-platinum-200 text-sm">{item.trackingMethod}</div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {item.metrics.map((m, i) => (
                              <Badge key={i} variant="outline" className="text-xs text-pink">{m}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Frameworks Tab */}
        <TabsContent value="frameworks" className="space-y-6">
          <GlassPanel title="Analytical & Measurement Frameworks" description="Network analysis, temporal analysis, and risk measurement">
            <div className="space-y-6">
              {/* Measurement Frameworks */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald" />
                    ORS Impact Four-Part Framework
                  </CardTitle>
                  <CardDescription>Narrative change measurement methodology</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {measurementFrameworks.fourPart.map((component, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-emerald/30 bg-emerald/10 p-4 hover:bg-emerald/20 transition-colors cursor-pointer"
                      >
                        <div className="text-xs text-emerald mb-1">Component {idx + 1}</div>
                        <h4 className="font-semibold text-platinum-200">{component.component}</h4>
                        <p className="text-xs text-platinum-400 mt-2">{component.description}</p>
                        <div className="mt-3 p-2 rounded bg-emerald/20">
                          <p className="text-xs text-emerald">UAE: {component.uaeApplication}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Risk Index */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose" />
                    Blackbird.AI Risk Index Factors
                  </CardTitle>
                  <CardDescription>Threat scoring components</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {measurementFrameworks.riskIndex.map((factor, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        className="text-center"
                      >
                        <div className="relative">
                          <svg className="w-full h-20" viewBox="0 0 100 60">
                            <path
                              d="M 10 50 Q 25 30, 50 35 T 90 20"
                              fill="none"
                              stroke={idx % 2 === 0 ? CHART_COLORS.rose : CHART_COLORS.gold}
                              strokeWidth="8"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <div className="text-sm font-medium text-platinum-200 mt-2">{factor.factor}</div>
                        <div className="text-xs text-platinum-400">{factor.description}</div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Network Analysis */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Network className="h-5 w-5 text-navy" />
                      Network Analysis Metrics
                    </CardTitle>
                    <CardDescription>Centrality measurements for influence mapping</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadarChart
                      data={networkMetricsData}
                      metrics={[
                        { dataKey: 'value', name: 'Score', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Timer className="h-5 w-5 text-purple" />
                      Temporal Analysis Methods
                    </CardTitle>
                    <CardDescription>Time-bounded narrative analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analyticalFrameworks.temporalAnalysis.map((method, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                        >
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-purple" />
                            <span className="font-medium text-platinum-200">{method.method}</span>
                          </div>
                          <p className="text-xs text-platinum-400 mt-1">{method.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Entity Registries */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-gold" />
                    Entity Registries
                  </CardTitle>
                  <CardDescription>Platforms, frameworks, and academic entities</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-6">
                      {/* Platforms */}
                      <div>
                        <h4 className="text-sm font-semibold text-platinum-300 mb-2">Commercial Platforms</h4>
                        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                          {entityRegistriesNR.platforms.map((entity, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                            >
                              <div className="font-medium text-platinum-200 text-sm">{entity.entityName}</div>
                              <div className="text-xs text-platinum-400">{entity.coreFunction}</div>
                              <Badge variant={entity.uaeRelevance === 'Critical' ? 'destructive' : entity.uaeRelevance === 'High' ? 'warning' : 'outline'} className="text-xs mt-1">
                                {entity.uaeRelevance}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Frameworks */}
                      <div>
                        <h4 className="text-sm font-semibold text-platinum-300 mb-2">Frameworks</h4>
                        <div className="space-y-2">
                          {entityRegistriesNR.frameworks.map((fw, idx) => (
                            <div key={idx} className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                              <div className="flex items-center justify-between">
                                <div>
                                  <span className="font-medium text-platinum-200 text-sm">{fw.frameworkName}</span>
                                  <span className="text-xs text-platinum-400 ml-2">({fw.organization})</span>
                                </div>
                                <Badge variant="outline" className="text-xs">{fw.uaeRelevance}</Badge>
                              </div>
                              <p className="text-xs text-platinum-400 mt-1">{fw.purpose}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Tools Tab */}
        <TabsContent value="tools" className="space-y-6">
          <GlassPanel title="Recommended Tools" description="Enterprise, academic, and verification tools for narrative reconstruction">
            <div className="space-y-6">
              {/* Enterprise Platforms */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-gold" />
                    Enterprise Platforms
                  </CardTitle>
                  <CardDescription>Recommended for comprehensive narrative intelligence</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {recommendedTools.enterprise.map((tool, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-gold/30 bg-gold/10 p-4 hover:bg-gold/20 transition-colors cursor-pointer"
                      >
                        <div className="font-semibold text-platinum-200">{tool.platform}</div>
                        <p className="text-sm text-platinum-400 mt-1">{tool.useCase}</p>
                        <Badge variant={tool.uaePriority === 'Critical' ? 'destructive' : 'warning'} className="mt-2">
                          {tool.uaePriority} Priority
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Academic & Verification Tools */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Beaker className="h-5 w-5 text-purple" />
                      Academic/Research Tools
                    </CardTitle>
                    <CardDescription>Open source and academic tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recommendedTools.academic.map((tool, idx) => (
                        <div key={idx} className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-platinum-200">{tool.tool}</span>
                            <Badge variant="outline" className="text-xs">{tool.accessibility}</Badge>
                          </div>
                          <p className="text-xs text-platinum-400 mt-1">{tool.useCase}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-emerald" />
                      Verification Tools
                    </CardTitle>
                    <CardDescription>Video and manipulation detection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recommendedTools.verification.map((tool, idx) => (
                        <div key={idx} className="p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                          <div className="font-medium text-platinum-200">{tool.tool}</div>
                          <p className="text-xs text-platinum-400 mt-1">{tool.useCase}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Statistics Summary */}
              <Card className="glass-card border-gold/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-gold" />
                    Research Statistics Summary
                  </CardTitle>
                  <CardDescription>Key metrics from narrative intelligence research</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-3">
                    {/* Market Stats */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-platinum-300">Market & Industry</h4>
                      {narrativeReconstructionStatistics.marketIndustry.map((stat, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded bg-platinum-800/30">
                          <span className="text-xs text-platinum-400">{stat.statistic}</span>
                          <span className="text-sm font-bold text-gold">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Deepfake Stats */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-platinum-300">Deepfake & Manipulation</h4>
                      {narrativeReconstructionStatistics.deepfakeManipulation.map((stat, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded bg-platinum-800/30">
                          <span className="text-xs text-platinum-400">{stat.statistic}</span>
                          <span className="text-sm font-bold text-rose">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Research Accuracy */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-platinum-300">Research Accuracy</h4>
                      {narrativeReconstructionStatistics.researchAccuracy.map((stat, idx) => (
                        <div key={idx} className="p-2 rounded bg-platinum-800/30">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-platinum-400">{stat.study}</span>
                            <span className="text-sm font-bold text-emerald">{stat.value}</span>
                          </div>
                          <div className="text-xs text-platinum-500 mt-1">{stat.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Queries Tab */}
        <TabsContent value="queries" className="space-y-6">
          <GlassPanel title="Search Query Strategies" description="Query templates for narrative reconstruction">
            <div className="space-y-6">
              {/* Origin Tracing Queries */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Search className="h-5 w-5 text-gold" />
                    Origin Tracing Queries
                  </CardTitle>
                  <CardDescription>First mention and Patient Zero queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-platinum-300 mb-2">First Mention Queries</h4>
                      <div className="space-y-2">
                        {searchQueryStrategies.originTracing.map((query, idx) => (
                          <div key={idx} className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                            <code className="text-xs text-emerald">{query.queryTemplate}</code>
                            <p className="text-xs text-platinum-400 mt-1">Purpose: {query.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-platinum-300 mb-2">Patient Zero Queries</h4>
                      <div className="space-y-2">
                        {searchQueryStrategies.patientZero.map((query, idx) => (
                          <div key={idx} className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                            <code className="text-xs text-emerald">{query.queryTemplate}</code>
                            <p className="text-xs text-platinum-400 mt-1">Purpose: {query.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Evolution Mapping Queries */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GitMerge className="h-5 w-5 text-purple" />
                    Evolution Mapping Queries
                  </CardTitle>
                  <CardDescription>Timeline, framing shift, and amplification queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div>
                      <h4 className="text-sm font-semibold text-platinum-300 mb-2">Timeline Queries</h4>
                      <div className="space-y-2">
                        {searchQueryStrategies.timelineQueries.map((query, idx) => (
                          <div key={idx} className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                            <code className="text-xs text-purple">{query.queryTemplate}</code>
                            <p className="text-xs text-platinum-400 mt-1">{query.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-platinum-300 mb-2">Framing Shift</h4>
                      <div className="space-y-2">
                        {searchQueryStrategies.framingShift.map((query, idx) => (
                          <div key={idx} className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                            <code className="text-xs text-purple">{query.queryTemplate}</code>
                            <p className="text-xs text-platinum-400 mt-1">{query.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-platinum-300 mb-2">Amplification</h4>
                      <div className="space-y-2">
                        {searchQueryStrategies.amplificationPath.map((query, idx) => (
                          <div key={idx} className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                            <code className="text-xs text-purple">{query.queryTemplate}</code>
                            <p className="text-xs text-platinum-400 mt-1">{query.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Battle Analysis Queries */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Crosshair className="h-5 w-5 text-rose" />
                    Battle Analysis Queries
                  </CardTitle>
                  <CardDescription>Counter-narrative and media treatment queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-platinum-300 mb-2">Counter-Narrative</h4>
                      <div className="space-y-2">
                        {searchQueryStrategies.counterNarrative.map((query, idx) => (
                          <div key={idx} className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                            <code className="text-xs text-rose">{query.queryTemplate}</code>
                            <p className="text-xs text-platinum-400 mt-1">{query.purpose}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-platinum-300 mb-2">Mutation Queries</h4>
                      <div className="space-y-2">
                        {searchQueryStrategies.mutationQueries.map((query, idx) => (
                          <div key={idx} className="p-2 rounded-lg border border-platinum-700/50 bg-platinum-800/30">
                            <code className="text-xs text-rose">{query.queryTemplate}</code>
                            <p className="text-xs text-platinum-400 mt-1">{query.purpose}</p>
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
      </Tabs>
    </div>
  )
}

// Missing icon imports fix
function Gauge(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}

function Timeline(props: React.SVGProps<SVSVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 6h10" />
      <path d="M6 12h9" />
      <path d="M11 18h7" />
    </svg>
  )
}
