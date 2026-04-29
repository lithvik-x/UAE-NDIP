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
  ThumbsDown,
  ThumbsUp,
  Timer,
  TrendingUp,
  AlertTriangle,
  Check,
  XCircle,
  Database,
  Eye,
  EyeOff,
  Ban,
  Gavel,
  Users,
  AlertOctagon,
  Quote,
  Target,
  Activity,
  Video,
} from 'lucide-react'
import {
  factCheckVerificationData,
} from '@/lib/data-loader/verification-data'
import type { VerificationResult } from '@/lib/data-loader'

// ============================================================================
// ENHANCEMENT CYCLE A: Header & Key Metrics
// ============================================================================

export default function FactCheckDashboardPage() {
  const [selectedTab, setSelectedTab] = useState<string>('overview')

  const data = factCheckVerificationData.extendedData as any

  // Get alert color for status
  const getAlertBadge = (status: string) => {
    switch (status) {
      case 'RED':
        return <Badge variant="destructive" className="text-xs bg-red-500/20 text-red-400 border-red-500/50">RED</Badge>
      case 'YELLOW':
        return <Badge variant="warning" className="text-xs bg-yellow-500/20 text-yellow-400 border-yellow-500/50">YELLOW</Badge>
      case 'GREEN':
        return <Badge variant="success" className="text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/50">GREEN</Badge>
      default:
        return <Badge variant="outline" className="text-xs">{status}</Badge>
    }
  }

  // Format tier display
  const getTierBadge = (tier: number) => {
    switch (tier) {
      case 0:
        return <Badge variant="success" className="text-xs">Tier 0</Badge>
      case 1:
        return <Badge variant="default" className="text-xs">Tier 1</Badge>
      case 2:
        return <Badge variant="secondary" className="text-xs">Tier 2</Badge>
      default:
        return <Badge variant="outline" className="text-xs">Tier {tier}</Badge>
    }
  }

  // KPI metrics from extended data
  const criticalKPIs = data.kpis?.filter((k: any) => k.uaeRelevance === 'Critical') || []
  const enforcementActions = data.enforcementActions || []
  const miscaptionedVideos = data.miscaptionedVideos || []
  const aiContentCases = data.aiContentCases || []
  const factCheckCases = data.factCheckCases || []
  const expertQuotes = data.expertQuotes || []
  const governmentOrgs = data.governmentOrgs || []
  const legalPenalties = data.legalPenalties || []
  const deepfakeRisks = data.deepfakeRisks || []
  const factCheckOrgs = data.factCheckOrgs || []
  const sourceCredibilityMatrix = data.sourceCredibilityMatrix || []
  const sentimentAnalysis = data.sentimentAnalysis || []

  // Verdict distribution for fact-checks
  const verdictCounts = {
    verified: factCheckCases.filter((c: any) => c.verdict === 'TRUE' || c.verdict === 'VERIFIED').length,
    false: factCheckCases.filter((c: any) => c.verdict === 'FALSE' || c.verdict === 'FAKE').length,
    misleading: factCheckCases.filter((c: any) => c.verdict === 'MISLEADING').length,
    unverified: factCheckCases.filter((c: any) => c.verdict === 'UNVERIFIED' || c.verdict === 'Not Rated').length,
  }

  return (
    <div className="space-y-8 p-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
      {/* ============================================================================
      ENHANCEMENT CYCLE A: Header & Key Metrics
      ============================================================================ */}
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="emerald" className="mb-2">V-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-emerald">Fact-Check Verification Dashboard</h1>
          <p className="mt-2 text-slate-400">
            {data.kpis?.length || 0}+ KPIs tracking misinformation, AI content detection, and enforcement actions
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald/50 text-emerald hover:bg-emerald/10">
            <Search className="h-4 w-4" />
            Verify Content
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
            <Shield className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
      >
        <MetricCard
          title="Miscaptioned Videos"
          value={data.kpis?.find((k: any) => k.kpi.includes('Miscaptioned'))?.value || '15+'}
          icon={<Video className="h-6 w-6" />}
          gradient="rose"
          status="error"
        />
        <MetricCard
          title="AI Images Detected"
          value={data.kpis?.find((k: any) => k.kpi.includes('AI-Generated'))?.value || '8+'}
          icon={<Eye className="h-6 w-6" />}
          gradient="orange"
          status="warning"
        />
        <MetricCard
          title="Prison Term (Standard)"
          value={data.kpis?.find((k: any) => k.kpi.includes('Prison Term') && k.kpi.includes('Standard'))?.value || '1+ year'}
          icon={<Gavel className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Arrests (March 2026)"
          value={data.kpis?.find((k: any) => k.kpi.includes('Arrested'))?.value || '70'}
          icon={<Users className="h-6 w-6" />}
          gradient="purple"
          status="error"
        />
        <MetricCard
          title="Data Completeness"
          value="85%"
          icon={<CheckCircle className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </motion.div>

      {/* ============================================================================
      ENHANCEMENT CYCLE B: Main Dashboard Overview
      ============================================================================ */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="cases">Fact-Check Cases</TabsTrigger>
          <TabsTrigger value="ai-content">AI Content</TabsTrigger>
          <TabsTrigger value="legal">Legal Framework</TabsTrigger>
          <TabsTrigger value="enforcement">Enforcement</TabsTrigger>
          <TabsTrigger value="experts">Expert Insights</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Fact-Check Verification Overview" description="Summary of fact-checking activities and misinformation tracking">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Verdict Distribution */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">Verdict Distribution</CardTitle>
                    <CardDescription>Fact-check cases by outcome</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-emerald-500" />
                          <span className="text-sm text-slate-300">False/Fake</span>
                        </div>
                        <span className="font-bold text-red-400">{verdictCounts.false}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-yellow-500" />
                          <span className="text-sm text-slate-300">Unverified</span>
                        </div>
                        <span className="font-bold text-yellow-400">{verdictCounts.unverified}</span>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>

                {/* Government Organizations */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">Government Organizations</CardTitle>
                    <CardDescription>Key entities involved in verification</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[180px]">
                      <div className="space-y-3">
                        {governmentOrgs.slice(0, 6).map((org: any, idx: number) => (
                          <motion.div
                            key={org.acronym}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-3"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-denim/20 text-denim">
                                <Shield className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="font-medium text-slate-200">{org.acronym}</p>
                                <p className="text-xs text-slate-400">{org.org}</p>
                              </div>
                            </div>
                            <Badge variant={org.uaeRelevance === 'Critical' ? 'destructive' : 'secondary'} className="text-xs">
                              {org.uaeRelevance}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>
              </div>

              {/* Key Findings */}
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Top Miscaptioned Videos */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-400" />
                      Miscaptioned Videos
                    </CardTitle>
                    <CardDescription>Geographic misattribution cases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {miscaptionedVideos.slice(0, 6).map((video: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            className="rounded-lg border border-red-500/30 bg-red-500/10 p-4"
                            whileHover={{ scale: 1.02, x: 4 }}
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-semibold text-slate-200 text-sm">{video.claim}</p>
                                <p className="text-xs text-slate-400 mt-1">Actual: {video.actual}</p>
                              </div>
                              <Badge variant="destructive" className="text-xs">FALSE</Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>

                {/* AI Content Cases */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Eye className="h-5 w-5 text-orange-400" />
                      AI-Generated Content
                    </CardTitle>
                    <CardDescription>Deepfake and AI image cases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-3">
                        {aiContentCases.slice(0, 6).map((aiCase: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4"
                            whileHover={{ scale: 1.02, x: -4 }}
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-semibold text-slate-200 text-sm">{aiCase.content}</p>
                                <p className="text-xs text-slate-400 mt-1">Detection: {aiCase.identification}</p>
                              </div>
                              <Badge variant="warning" className="text-xs">{aiCase.status}</Badge>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </motion.div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* ============================================================================
        ENHANCEMENT CYCLE C: Fact-Check Cases Tab
        ============================================================================ */}
        <TabsContent value="cases" className="space-y-6">
          <GlassPanel title="Fact-Check Cases" description="Detailed breakdown of verified misinformation cases">
            <div className="space-y-6">
              {factCheckCases.map((factCase: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{factCase.case}</CardTitle>
                        <CardDescription>{factCase.source} - {factCase.date}</CardDescription>
                      </div>
                      <Badge
                        variant={factCase.verdict === 'FALSE' || factCase.verdict === 'FAKE' ? 'destructive' : factCase.verdict === 'TRUE' || factCase.verdict === 'VERIFIED' ? 'success' : 'warning'}
                        className={factCase.verdict === 'FALSE' || factCase.verdict === 'FAKE' ? 'bg-red-500/20 text-red-400' : factCase.verdict === 'TRUE' || factCase.verdict === 'VERIFIED' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-yellow-500/20 text-yellow-400'}
                      >
                        {factCase.verdict}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-slate-800/50 p-4">
                        <p className="text-xs text-slate-400 mb-1">CLAIM</p>
                        <p className="text-slate-200">{factCase.claim}</p>
                      </div>
                      <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4">
                        <p className="text-xs text-emerald-400 mb-1">ACTUAL FACTS</p>
                        <p className="text-slate-200">{factCase.actualFacts}</p>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* ============================================================================
        ENHANCEMENT CYCLE D: AI Content & Deepfake Risks
        ============================================================================ */}
        <TabsContent value="ai-content" className="space-y-6">
          <GlassPanel title="AI Content Detection" description="Tracking synthetic media and deepfake threats">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* AI Cases */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">AI-Generated Cases</CardTitle>
                    <CardDescription>Documented synthetic media</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {aiContentCases.map((aiCase: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-slate-200">{aiCase.content}</p>
                            <Badge variant="warning" className="text-xs">{aiCase.status}</Badge>
                          </div>
                          <p className="text-xs text-slate-400">Detection: {aiCase.identification}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>

                {/* Deepfake Risks */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">Deepfake Risk Categories</CardTitle>
                    <CardDescription>Types of synthetic media threats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {deepfakeRisks.map((risk: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4"
                        >
                          <p className="font-medium text-slate-200">{risk.risk}</p>
                          <p className="text-sm text-slate-400 mt-1">{risk.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* ============================================================================
        ENHANCEMENT CYCLE E: Legal Framework
        ============================================================================ */}
        <TabsContent value="legal" className="space-y-6">
          <GlassPanel title="Legal Framework" description="UAE cybercrime laws and penalties for misinformation">
            <div className="space-y-6">
              {/* Legal Penalties */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Legal Penalties</CardTitle>
                  <CardDescription>Article 52 - Rumors and Cybercrime</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {legalPenalties.map((penalty: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-denim-500/30 bg-denim-500/10 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-slate-200">{penalty.violation}</p>
                          <Badge variant="denim" className="text-xs">{penalty.basis}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div>
                            <p className="text-xs text-slate-400">Prison</p>
                            <p className="text-lg font-bold text-red-400">{penalty.prison}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400">Fine</p>
                            <p className="text-lg font-bold text-yellow-400">{penalty.fine}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>

              {/* Detection Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Detection Methods</CardTitle>
                  <CardDescription>Tools and techniques for identifying misinformation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {data.detectionMethods?.map((method: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4"
                      >
                        <Check className="h-5 w-5 text-emerald-400 mb-2" />
                        <p className="font-medium text-slate-200">{method.method}</p>
                        <p className="text-sm text-slate-400 mt-1">{method.application}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="enforcement" className="space-y-6">
          <GlassPanel title="Enforcement Actions" description="Arrests and penalties for misinformation violations">
            <div className="space-y-6">
              {/* Enforcement Stats */}
              <div className="grid gap-4 sm:grid-cols-2">
                {enforcementActions.map((action: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card"
                    style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{action.action}</CardTitle>
                      <CardDescription>{action.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-3xl font-extrabold text-red-400">{action.count}</p>
                          <p className="text-sm text-slate-400">{action.charge}</p>
                        </div>
                        <Badge variant="destructive" className="text-xs">ARREST</Badge>
                      </div>
                    </CardContent>
                  </motion.div>
                ))}
              </div>

              {/* Incident Restrictions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Incident Site Restrictions</CardTitle>
                  <CardDescription>Security risks from location exposure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {data.incidentRestrictions?.map((restriction: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-3 text-center"
                      >
                        <Ban className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-slate-200">{restriction.risk}</p>
                        <p className="text-xs text-slate-400 mt-1">{restriction.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* ============================================================================
        ENHANCEMENT CYCLE F: Expert Insights & Sources
        ============================================================================ */}
        <TabsContent value="experts" className="space-y-6">
          <GlassPanel title="Expert Insights" description="Quotes from industry experts on misinformation">
            <div className="space-y-6">
              {expertQuotes.map((quote: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card"
                  style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
                >
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-emerald-400 mb-4" />
                    <p className="text-lg text-slate-200 italic mb-4">"{quote.quote}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-200">{quote.expert}</p>
                        <p className="text-sm text-slate-400">{quote.org}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{quote.context}</Badge>
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Source Credibility" description="Fact-check organizations and their reliability">
            <div className="space-y-6">
              {/* Fact-Check Organizations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Fact-Check Organizations</CardTitle>
                  <CardDescription>Primary sources for verification</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {factCheckOrgs.map((org: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-slate-700/50 bg-slate-800/30 p-4"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                              <CheckCircle className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-200">{org.org}</p>
                              <p className="text-sm text-slate-400">{org.coverage}</p>
                            </div>
                          </div>
                          {getTierBadge(org.tier)}
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </motion.div>

              {/* Source Credibility Matrix */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card"
                style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>Reliability assessment of sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {sourceCredibilityMatrix.slice(0, 10).map((source: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div
                                className="h-3 w-3 rounded-full"
                                style={{
                                  backgroundColor: source.reliability === 'High' || source.reliability === 'Very High' ? '#10b981' : source.reliability === 'Medium' ? '#f59e0b' : '#f43f5e'
                                }}
                              />
                              <p className="font-medium text-slate-200">{source.source}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">{source.type}</Badge>
                              <Badge
                                variant={source.status === 'Success' ? 'success' : source.status?.includes('403') || source.status?.includes('402') || source.status?.includes('error') ? 'warning' : 'destructive'}
                                className="text-xs"
                              >
                                {source.status}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-xs text-slate-400">Reliability: {source.reliability}</p>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </motion.div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* ============================================================================
      ENHANCEMENT CYCLE F: Summary Footer
      ============================================================================ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-6"
        style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)' }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-5 w-5 text-emerald-400" />
          <h3 className="text-lg font-semibold text-slate-200">Analysis Summary</h3>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
          {factCheckVerificationData.omissionData?.impact || 'Fact-checking infrastructure analysis for UAE misinformation tracking and verification.'}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            Last Updated: {factCheckVerificationData.lastUpdated}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Sources: {factCheckVerificationData.credibility.sources}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Accuracy Score: {factCheckVerificationData.accuracyScore}%
          </Badge>
          <Badge variant="outline" className="text-xs">
            Alert Level: {factCheckVerificationData.alertLevel}
          </Badge>
        </div>
      </motion.div>
    </div>
  )
}
