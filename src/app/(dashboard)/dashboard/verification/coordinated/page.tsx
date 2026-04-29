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
  CheckCircle,
  Clock,
  FileQuestion,
  Globe,
  Search,
  Shield,
  AlertTriangle,
  Users,
  Network,
  AlertOctagon,
  Target,
  Activity,
  Database,
  Lock,
  Eye,
  Crosshair,
  AlertCircle,
  TrendingUp,
  Check,
  XCircle,
  Link2,
  Link2Off,
  Fingerprint,
  Bot,
  Megaphone,
  Scale,
  Globe2,
  Flag,
  BookOpen,
  Beaker,
  Lightbulb,
  BarChart3,
  PieChart as PieChartIcon,
  Layers,
  GitCompare,
  Building2,
} from 'lucide-react'
import {
  coordinatedInauthenticData,
  coordinatedInauthenticExtendedData,
} from '@/lib/data-loader'

// ============================================================================
// COORDINATED INAUTHENTIC BEHAVIOR (CIB) DASHBOARD
// ============================================================================

export default function CoordinatedDashboardPage() {
  const [selectedTab, setSelectedTab] = useState<string>('overview')
  const data: any = coordinatedInauthenticExtendedData

  // Chart data - Takedown Summary
  const takedownChartData = (data.takedownSummary || []).map((t: any) => ({
    name: t.originCountry,
    value: t.numberOfTakedowns,
    color: t.originCountry === 'UAE' ? CHART_COLORS.gold :
           t.originCountry === 'Iran' ? CHART_COLORS.rose :
           t.originCountry === 'Egypt' ? CHART_COLORS.navy :
           t.originCountry === 'Saudi Arabia' ? CHART_COLORS.emerald : CHART_COLORS.platinum,
  }))

  // Chart data - AI Operations by Type
  const aiOpsData = (data.aiGeneratedTrends || []).map((t: any) => ({
    name: t.trend,
    value: t.detectionImpact === 'Critical' ? 3 : 2,
  }))

  // Chart data - Platform Comparison
  const platformComparisonData = (data.platformComparisons || []).map((p: any) => ({
    name: p.platform,
    policy: p.cibPolicyStrength === 'Comprehensive' ? 4 : p.cibPolicyStrength === 'Exists' ? 2 : p.cibPolicyStrength === 'Developing' ? 3 : 2,
    enforcement: p.enforcementRegularity === 'Quarterly reports' ? 4 : p.enforcementRegularity === 'Regular reports' ? 3 : p.enforcementRegularity === 'Incident-based' ? 2 : 1,
    transparency: p.transparency === 'High' ? 4 : p.transparency === 'Improving' ? 3 : p.transparency === 'Moderate' ? 2 : 1,
  }))

  // Get relevance badge
  const getRelevanceBadge = (relevance: string) => {
    switch (relevance) {
      case 'Critical':
        return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">CRITICAL</Badge>
      case 'High':
        return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">HIGH</Badge>
      case 'Medium':
        return <Badge className="text-xs bg-yellow-500/20 text-yellow-400 border-yellow-500/50">MEDIUM</Badge>
      default:
        return <Badge variant="outline" className="text-xs">LOW</Badge>
    }
  }

  // Get tier badge
  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'Tier 1':
        return <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Tier 1</Badge>
      case 'Tier 2':
        return <Badge variant="default" className="text-xs bg-blue-500/20 text-blue-400 border-blue-500/50">Tier 2</Badge>
      case 'Tier 3':
        return <Badge variant="secondary" className="text-xs bg-yellow-500/20 text-yellow-400 border-yellow-500/50">Tier 3</Badge>
      default:
        return <Badge variant="outline" className="text-xs">{tier}</Badge>
    }
  }

  // Get frequency badge
  const getFrequencyBadge = (frequency: string) => {
    switch (frequency) {
      case 'Critical':
        return <Badge variant="destructive" className="text-xs">Critical</Badge>
      case 'High':
        return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">High</Badge>
      case 'Medium':
        return <Badge className="text-xs bg-yellow-500/20 text-yellow-400 border-yellow-500/50">Medium</Badge>
      default:
        return <Badge variant="outline" className="text-xs">{frequency}</Badge>
    }
  }

  // Get threat level badge
  const getThreatBadge = (level: string) => {
    switch (level) {
      case 'Critical':
        return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">CRITICAL</Badge>
      case 'High':
        return <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">HIGH</Badge>
      case 'Medium':
        return <Badge className="text-xs bg-yellow-500/20 text-yellow-400 border-yellow-500/50">MEDIUM</Badge>
      default:
        return <Badge variant="outline" className="text-xs">{level}</Badge>
    }
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="emerald" className="mb-2">V-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-emerald">Coordinated Inauthentic Behavior</h1>
          <p className="mt-2 text-slate-400">
            Comprehensive analysis of CIB operations targeting Gulf States with focus on UAE-linked activities
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald/50 text-emerald hover:bg-emerald/10">
            <Search className="h-4 w-4" />
            Investigate
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Analyze CIB
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={pageVariants}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Total MENA Takedowns"
          value={46}
          icon={<Network className="h-6 w-6" />}
          gradient="gold"
          status="info"
        />
        <MetricCard
          title="UAE-Linked Takedowns"
          value={6}
          icon={<Flag className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="Avg Accounts Removed"
          value={214}
          icon={<Users className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Combined Ad Spend (Aug 2019)"
          value="$275K"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </motion.div>

      {/* Key Finding Alert */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-6"
      >
        <div className="flex items-start gap-4">
          <AlertCircle className="h-6 w-6 text-rose-400 mt-1" />
          <div>
            <h3 className="font-semibold text-rose-400">Key Finding</h3>
            <p className="mt-2 text-slate-300">{data.keyFinding}</p>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setSelectedTab}>
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="definitions">Definitions</TabsTrigger>
          <TabsTrigger value="tactics">Tactics & OpSec</TabsTrigger>
          <TabsTrigger value="detection">Detection</TabsTrigger>
          <TabsTrigger value="cases">Case Studies</TabsTrigger>
          <TabsTrigger value="narratives">Narratives</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="emerging">Emerging Trends</TabsTrigger>
          <TabsTrigger value="uae">UAE Assessment</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Gulf States CIB Operations Overview" description="Key performance indicators from POMEPS and Meta Newsroom data">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Takedowns by Origin Country</CardTitle>
                    <CardDescription>46 total MENA operations (2018-2021)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={takedownChartData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Critical KPIs</CardTitle>
                    <CardDescription>Key metrics by UAE relevance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {data.kpiData.filter((k: any) => k.uaeRelevance === 'Critical').map((kpi: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                          >
                            <div className="flex-1">
                              <p className="font-medium text-slate-200 text-sm">{kpi.kpi}</p>
                              <p className="text-xs text-slate-500">{kpi.source}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-emerald-400">{kpi.value}</p>
                              {getRelevanceBadge(kpi.uaeRelevance)}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Detection Branches */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">EU DisinfoLab CIB Detection Tree</CardTitle>
                  <CardDescription>Four assessment branches for identifying CIB</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {data.detectionBranches.map((branch: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="h-5 w-5 text-emerald-400" />
                          <h4 className="font-semibold text-slate-200">{branch.branch}</h4>
                        </div>
                        <p className="text-sm text-slate-400 mb-2">{branch.purpose}</p>
                        <div className="space-y-1">
                          {branch.keyIndicators.map((indicator: any, i: number) => (
                            <p key={i} className="text-xs text-slate-500 flex items-center gap-1">
                              <Check className="h-3 w-3 text-emerald-400" />
                              {indicator}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Behavioral Signatures */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Behavioral Signatures</CardTitle>
                  <CardDescription>Four key indicators for CIB detection</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {data.behavioralSignatures.map((sig: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-denim-500/20 text-denim-400 border-denim-500/50">{sig.indicatorId}</Badge>
                            <h4 className="font-semibold text-slate-200">{sig.signatureName}</h4>
                          </div>
                          <Badge variant="outline" className="text-xs">FP: {sig.falsePositiveRate}</Badge>
                        </div>
                        <p className="text-sm text-slate-400">{sig.detectionMethod}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Definitions Tab */}
        <TabsContent value="definitions" className="space-y-6">
          <GlassPanel title="CIB Definitions" description="Official definitions from leading organizations">
            <div className="space-y-6">
              {data.definitions.map((def: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-slate-200">{def.source}</h4>
                    <div className="flex gap-2">
                      {getTierBadge(def.credibility)}
                      {getRelevanceBadge(def.uaeRelevance)}
                    </div>
                  </div>
                  <blockquote className="border-l-2 border-emerald-500 pl-4 italic text-slate-300">
                    "{def.definition}"
                  </blockquote>
                </motion.div>
              ))}

              {/* CIB Characteristics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Core Characteristics</CardTitle>
                  <CardDescription>What defines CIB operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.characteristics.map((char: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Fingerprint className="h-5 w-5 text-emerald-400" />
                          <div>
                            <p className="font-semibold text-slate-200">{char.characteristic}</p>
                            <p className="text-sm text-slate-400">{char.description}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className={
                          char.detectionDifficulty === 'High' ? 'border-red-500/50 text-red-400' :
                          char.detectionDifficulty === 'Medium' ? 'border-yellow-500/50 text-yellow-400' :
                          'border-emerald-500/50 text-emerald-400'
                        }>
                          {char.detectionDifficulty} Detection
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Concept Distinctions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">CIB vs Related Concepts</CardTitle>
                  <CardDescription>How CIB differs from fake news, spam, and bots</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.conceptDistinctions.map((concept: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-slate-200">{concept.concept}</h4>
                          <Badge variant="outline" className="text-xs">Overlap: {concept.overlap}</Badge>
                        </div>
                        <p className="text-sm text-slate-400">{concept.distinctionFromCIB}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Tactics & OpSec Tab */}
        <TabsContent value="tactics" className="space-y-6">
          <GlassPanel title="Tactical Methods & Operational Security" description="How CIB operations are conducted and protected">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Primary Tactics Employed</CardTitle>
                  <CardDescription>8 tactics observed in CIB operations (PMC/ Reality Team)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {data.tactics.map((tactic: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-denim-500/20 text-denim-400 border-denim-500/50">{tactic.tacticId}</Badge>
                          {getFrequencyBadge(tactic.frequencyObserved)}
                        </div>
                        <h4 className="font-semibold text-slate-200 mb-1">{tactic.tacticName}</h4>
                        <p className="text-xs text-slate-400">{tactic.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Operational Security Measures</CardTitle>
                  <CardDescription>How CIB operations evade detection</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {data.opSecMeasures.map((opsec: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Lock className="h-5 w-5 text-rose-400" />
                          <h4 className="font-semibold text-slate-200">{opsec.measure}</h4>
                        </div>
                        <p className="text-sm text-slate-400 mb-2">{opsec.description}</p>
                        <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">
                          Detection: {opsec.detectionChallenge}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Middle East Patterns */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Middle East-Specific Patterns</CardTitle>
                  <CardDescription>Observed patterns in Gulf CIB operations (POMEPS dataset)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.middleEastPatterns.map((pattern: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Layers className="h-5 w-5 text-emerald-400" />
                          <h4 className="font-semibold text-slate-200">{pattern.pattern}</h4>
                        </div>
                        <p className="text-sm text-slate-400 mb-1">{pattern.description}</p>
                        <p className="text-xs text-slate-500 italic">{pattern.statisticalEvidence}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Detection Tab */}
        <TabsContent value="detection" className="space-y-6">
          <GlassPanel title="Detection Methodologies" description="How to identify and analyze CIB operations">
            <div className="space-y-6">
              {/* Detection Challenges */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Detection Challenges</CardTitle>
                  <CardDescription>Key obstacles in identifying CIB</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.detectionChallenges.map((challenge: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <AlertOctagon className="h-5 w-5 text-red-400 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-slate-200">{challenge.challenge}</h4>
                            <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">
                              {challenge.severity}
                            </Badge>
                          </div>
                          <div className="space-y-1">
                            {challenge.contributingFactors.map((factor: any, i: number) => (
                              <p key={i} className="text-sm text-slate-400">• {factor}</p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Warning Signs */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Warning Signs for Human Analysts</CardTitle>
                  <CardDescription>Red flags that indicate potential CIB activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {data.warningSigns.map((sign: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-5 w-5 text-yellow-400" />
                          <h4 className="font-semibold text-slate-200">{sign.warningSign}</h4>
                        </div>
                        <p className="text-sm text-slate-400 mb-2">{sign.description}</p>
                        <Badge variant="warning" className="text-xs bg-orange-500/20 text-orange-400 border-orange-500/50">
                          {sign.actionRequired}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Red Flags */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Immediate Red Flags</CardTitle>
                  <CardDescription>Quantitative thresholds for CIB indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.redFlags.map((flag: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Badge className="bg-rose-500/20 text-rose-400 border-rose-500/50">{flag.indicatorId}</Badge>
                          <div>
                            <p className="font-semibold text-slate-200">{flag.indicator}</p>
                            <p className="text-sm text-slate-400">Threshold: {flag.threshold}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">{flag.action}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Network Indicators */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Network-Level Indicators</CardTitle>
                  <CardDescription>Analysis methods for detecting CIB networks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {data.networkIndicators.map((indicator: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Network className="h-5 w-5 text-emerald-400" />
                          <h4 className="font-semibold text-slate-200">{indicator.indicator}</h4>
                        </div>
                        <p className="text-sm text-slate-400 mb-2">{indicator.description}</p>
                        <p className="text-xs text-slate-500 italic">Method: {indicator.analysisMethod}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Case Studies Tab */}
        <TabsContent value="cases" className="space-y-6">
          <GlassPanel title="Case Studies: Gulf States Operations" description="Documented CIB takedowns involving UAE, Saudi Arabia, and Egypt">
            <div className="space-y-6">
              {data.operations.map((op: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-slate-200">{op.operationName}</h3>
                      {getRelevanceBadge(op.uaeRelevance)}
                    </div>
                    <Badge variant="outline" className="text-xs">{op.date}</Badge>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-4">
                    <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{op.facebookAccounts}</div>
                      <p className="text-xs text-slate-400">FB Accounts</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{op.pages}</div>
                      <p className="text-xs text-slate-400">Pages</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{op.pageFollowers}</div>
                      <p className="text-xs text-slate-400">Page Followers</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-3 text-center">
                      <div className="text-2xl font-bold text-gold">{op.adSpend}</div>
                      <p className="text-xs text-slate-400">Ad Spend</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-slate-400 mb-2">Targeted Countries: {op.targetedCountries}</p>
                    <p className="text-sm text-slate-400 mb-2">Attribution: {op.attribution}</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-slate-300 mb-2">Methods Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {op.methodsUsed.map((method: any, i: number) => (
                          <Badge key={i} variant="outline" className="text-xs">{method}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-300 mb-2">Content Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        {op.contentTopics.map((topic: any, i: number) => (
                          <Badge key={i} className="text-xs bg-denim-500/20 text-denim-400 border-denim-500/50">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Top Pages */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Amplifier Pages (Aug 2019 Takedown)</CardTitle>
                  <CardDescription>DFRLab supplemental analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.topPages.map((page: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Megaphone className="h-5 w-5 text-emerald-400" />
                          <div>
                            <p className="font-semibold text-slate-200">{page.pageName}</p>
                            <p className="text-sm text-slate-400">{page.description}</p>
                          </div>
                        </div>
                        <Badge className="bg-gold-500/20 text-gold-400 border-gold-500/50">{page.followers}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Narratives Tab */}
        <TabsContent value="narratives" className="space-y-6">
          <GlassPanel title="Narrative Themes in Gulf CIB Operations" description="Sentiment analysis matrix by topic and source">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Narrative Sentiment Matrix</CardTitle>
                  <CardDescription>10 key narrative themes from Gulf CIB operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {data.narrativeThemes.map((narrative: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{narrative.narrativeTheme}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">{narrative.target}</Badge>
                              <Badge variant="outline" className="text-xs">{narrative.sourceType}</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge
                              className={
                                narrative.sentiment === 'Negative' ? 'bg-red-500/20 text-red-400 border-red-500/50' :
                                'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                              }
                            >
                              {narrative.sentiment}
                            </Badge>
                            {getFrequencyBadge(narrative.frequency)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* CIB Categories */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">CIB Typology (SAGE Journals 2025)</CardTitle>
                  <CardDescription>Four categories of coordinated inauthentic behavior</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {data.categories.map((cat: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 cursor-pointer"
                      >
                        <Badge className="mb-2">{cat.categoryId}</Badge>
                        <h4 className="font-semibold text-slate-200 mb-1">{cat.categoryName}</h4>
                        <p className="text-xs text-slate-400 mb-2">{cat.description}</p>
                        {getFrequencyBadge(cat.prevalence)}
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
          <GlassPanel title="Platform Enforcement & Policy" description="How major platforms handle CIB">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Comparison Matrix</CardTitle>
                  <CardDescription>CIB policy strength and enforcement by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadarChart
                    data={platformComparisonData}
                    metrics={[
                      { dataKey: 'policy', name: 'Policy Strength' },
                      { dataKey: 'enforcement', name: 'Enforcement' },
                      { dataKey: 'transparency', name: 'Transparency' },
                    ]}
                    height={350}
                  />
                </CardContent>
              </Card>

              {/* Regulatory Challenges */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Regulatory Framework Challenges</CardTitle>
                  <CardDescription>Why CIB regulation is difficult</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.regulatoryChallenges.map((challenge: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <Scale className="h-5 w-5 text-emerald-400 mt-1" />
                        <div>
                          <h4 className="font-semibold text-slate-200">{challenge.challenge}</h4>
                          <p className="text-sm text-slate-400">{challenge.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Legal Frameworks */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Legal Considerations</CardTitle>
                  <CardDescription>Applicable laws and jurisdictional issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {data.legalFrameworks.map((framework: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <h4 className="font-semibold text-slate-200 mb-1">{framework.framework}</h4>
                        <p className="text-sm text-slate-400">{framework.applicationToCIB}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Emerging Trends Tab */}
        <TabsContent value="emerging" className="space-y-6">
          <GlassPanel title="Emerging Trends & Future Outlook" description="2024-2025 CIB evolution">
            <div className="space-y-6">
              {/* AI-Generated Content */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">AI-Generated Content (2024-2025)</CardTitle>
                  <CardDescription>Meta disrupted six new covert influence operations using AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {data.aiGeneratedTrends.map((trend: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="h-5 w-5 text-purple-400" />
                          <h4 className="font-semibold text-slate-200">{trend.trend}</h4>
                        </div>
                        <p className="text-sm text-slate-400 mb-2">{trend.description}</p>
                        <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">
                          Impact: {trend.detectionImpact}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cross-Platform Coordination */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Cross-Platform Coordination</CardTitle>
                  <CardDescription>Multi-platform CIB operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.crossPlatforms.map((platform: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Globe2 className="h-5 w-5 text-emerald-400" />
                          <p className="font-medium text-slate-200">{platform.platformSpan}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs">{platform.coordinationType}</Badge>
                          <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">
                            {platform.detectionComplexity}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Q1 2025 Operations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Q1 2025 Global CIB Operations</CardTitle>
                  <CardDescription>Meta's Q1 2025 Adversarial Threat Report findings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {data.q1Operations.map((op: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-slate-200">{op.operationName}</h4>
                          <Badge variant="outline" className="text-xs">{op.source}</Badge>
                        </div>
                        <p className="text-sm text-slate-400 mb-2">{op.content}</p>
                        <p className="text-xs text-slate-500 italic mb-2">{op.details}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">Target: {op.targetedCountries}</Badge>
                          {op.facebookAccounts > 0 && <Badge variant="outline" className="text-xs">FB: {op.facebookAccounts}</Badge>}
                          {op.pages > 0 && <Badge variant="outline" className="text-xs">Pages: {op.pages}</Badge>}
                          {op.instagramAccounts > 0 && <Badge variant="outline" className="text-xs">IG: {op.instagramAccounts}</Badge>}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* UAE Assessment Tab */}
        <TabsContent value="uae" className="space-y-6">
          <GlassPanel title="UAE-Specific Risk Assessment" description="Analysis of UAE-linked CIB operations">
            <div className="space-y-6">
              {/* UAE Threat Levels */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Threat Level by Target</CardTitle>
                  <CardDescription>Regional targets of UAE-linked CIB operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.uaeThreatLevels.map((threat: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Flag className="h-5 w-5 text-gold-400" />
                          <div>
                            <p className="font-semibold text-slate-200">{threat.target}</p>
                            <p className="text-sm text-slate-400">{threat.primaryNarrative}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {getThreatBadge(threat.threatLevel)}
                          <p className="text-xs text-slate-500 mt-1">Engagement: {threat.engagementLevel}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE Operations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE CIB Operation Registry</CardTitle>
                  <CardDescription>Documented UAE-linked influence operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.uaeOperations.map((op: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-gold-500/30 bg-gold-500/10 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-200">{op.operation}</h4>
                          <Badge variant="outline" className="text-xs">{op.date}</Badge>
                        </div>
                        <div className="grid gap-2 sm:grid-cols-3">
                          <div>
                            <p className="text-xs text-slate-500">Platforms</p>
                            <p className="text-sm text-slate-300">{op.platforms}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Scale</p>
                            <p className="text-sm text-slate-300">{op.scale}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500">Target</p>
                            <p className="text-sm text-slate-300">{op.sentimentTarget}</p>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Attribution: {op.attribution}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* UAE Relevance Assessment */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE Relevance Assessment</CardTitle>
                  <CardDescription>Critical topics for UAE CIB analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.uaeRelevanceItems.map((item: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        {getRelevanceBadge(item.uaeRelevance)}
                        <div className="flex-1">
                          <p className="font-medium text-slate-200">{item.topicSource}</p>
                          <p className="text-sm text-slate-400">{item.rationale}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Marketing Firms */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Marketing Firms in Gulf CIB Operations</CardTitle>
                  <CardDescription>Outsourced influence operations (26% of MENA ops)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.marketingFirms.map((firm: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <Building2 className="h-5 w-5 text-emerald-400" />
                          <div>
                            <p className="font-semibold text-slate-200">{firm.firmName}</p>
                            <p className="text-sm text-slate-400">{firm.country} • {firm.role}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={firm.status === 'Operating' ? 'success' : firm.status === 'Discontinued' ? 'destructive' : 'outline'} className="text-xs">
                            {firm.status}
                          </Badge>
                          <p className="text-xs text-slate-500 mt-1">{firm.operationDate}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Source Citations & Conclusions" description="Research sources and key findings">
            <div className="space-y-6">
              {/* Key Conclusions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Conclusions</CardTitle>
                  <CardDescription>Main findings from CIB research</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.conclusions.map((conclusion: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <CheckCircle className="h-5 w-5 text-emerald-400 mt-1" />
                        <div className="flex-1">
                          <p className="text-slate-300">{conclusion.conclusion}</p>
                          <div className="flex items-center gap-2 mt-2">
                            {getRelevanceBadge(conclusion.uaeRelevance)}
                            <Badge variant="outline" className="text-xs">{conclusion.confidence}</Badge>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Recommendations for Analysts</CardTitle>
                  <CardDescription>Best practices for CIB investigation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {data.recommendations.map((rec: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                      >
                        <Lightbulb className="h-5 w-5 text-gold-400 mt-1" />
                        <p className="text-sm text-slate-300">{rec.recommendation}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Source Citations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Citations</CardTitle>
                  <CardDescription>Primary and secondary sources for CIB research</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {data.sourceCitations.map((source: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-medium text-slate-200 text-sm">{source.source}</p>
                              <Badge variant="outline" className="text-xs">Tier {source.tier}</Badge>
                            </div>
                            <p className="text-xs text-slate-500 truncate">{source.url}</p>
                          </div>
                          <div className="text-right">
                            {getRelevanceBadge(source.uaeRelevance)}
                            <p className="text-xs text-slate-500 mt-1">{source.lastVerified}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Statistical Summary */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Statistical Summary</CardTitle>
                  <CardDescription>Key metrics from the research dataset</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {data.statisticalSummary.map((stat: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                        <p className="text-sm text-slate-400 mt-1">{stat.metric}</p>
                        <p className="text-xs text-slate-500 mt-1">{stat.source}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Metadata */}
              <Card className="glass-card border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg">Research Metadata</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                      <p className="text-sm text-slate-400">Last Updated</p>
                      <p className="text-lg font-bold text-emerald-400">{data.lastUpdated}</p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                      <p className="text-sm text-slate-400">Research Compiled</p>
                      <p className="text-lg font-bold text-emerald-400">{data.researchCompiled}</p>
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