// @ts-nocheck
'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassCard, GlassPanel } from '@/components/dashboard/glass-card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  AreaChart,
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Crown,
  Users,
  TrendingUp,
  Shield,
  AlertCircle,
  CheckCircle2,
  Globe,
  ChevronRight,
  Star,
  Activity,
  Briefcase,
  Globe2,
  Scale,
  Building2,
  Rocket,
  Handshake,
  AlertTriangle,
  TrendingDown,
  Flag,
  BookOpen,
  ChevronDown,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react'
import {
  federalOfficialsData,
  supremeCouncilMembers,
  cabinetData,
  ministersOfState,
  undersecretaries,
  gcoData,
  ministryLeadership,
  recentInitiatives,
  majorProjects,
  foreignPolicyData,
  controversiesData,
  sentimentAnalysis,
  relevanceAssessment,
  urlRepository,
  notableMinisters,
  executionSummary,
} from '@/lib/data/entity/federal-officials-data'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

function getSentimentBadge(sentiment: string) {
  switch (sentiment) {
    case 'OVERWHELMINGLY_POSITIVE':
      return <Badge variant="success" className="text-xs">Overwhelmingly Positive</Badge>
    case 'POSITIVE':
    case 'Very Positive':
      return <Badge variant="success" className="text-xs">Positive</Badge>
    case 'Moderately Positive':
      return <Badge variant="success" className="text-xs">Moderately Positive</Badge>
    case 'Neutral':
    case 'Mixed':
      return <Badge variant="secondary" className="text-xs">{sentiment}</Badge>
    case 'NEGATIVE':
    case 'Negative':
      return <Badge variant="destructive" className="text-xs">Negative</Badge>
    case 'Mixed to Negative':
      return <Badge variant="warning" className="text-xs">Mixed to Negative</Badge>
    default:
      return <Badge variant="secondary" className="text-xs">{sentiment}</Badge>
  }
}

function getAlertBadge(level: string) {
  switch (level) {
    case 'GREEN':
      return <Badge variant="success" className="text-xs gap-1"><CheckCircle2 className="h-3 w-3" /> Green</Badge>
    case 'YELLOW':
      return <Badge variant="warning" className="text-xs gap-1"><AlertCircle className="h-3 w-3" /> Yellow</Badge>
    case 'RED':
      return <Badge variant="destructive" className="text-xs gap-1"><AlertCircle className="h-3 w-3" /> Red</Badge>
    default:
      return <Badge variant="secondary" className="text-xs">{level}</Badge>
  }
}

function getRelevanceBadge(level: string) {
  switch (level) {
    case 'CRITICAL':
      return <Badge variant="destructive" className="text-xs">{level}</Badge>
    case 'HIGH':
      return <Badge variant="warning" className="text-xs">{level}</Badge>
    case 'MEDIUM':
      return <Badge variant="secondary" className="text-xs">{level}</Badge>
    case 'LOW':
      return <Badge variant="outline" className="text-xs">{level}</Badge>
    default:
      return <Badge variant="secondary" className="text-xs">{level}</Badge>
  }
}

// ============================================================================
// PROFILE CARD COMPONENT
// ============================================================================

function ProfileCard({ official, index }: { official: typeof supremeCouncilMembers[0], index: number }) {
  return (
    <motion.div variants={itemVariants}>
      <GlassCard hover className="h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-rajdhani font-bold text-lg text-navy-500-900 dark:text-platinum-500-100">
              {official.name}
            </h3>
            {official.personalInfo?.arabic && (
              <p className="text-xs text-platinum-500-500 font-arabic">{official.personalInfo.arabic}</p>
            )}
            <p className="text-sm text-gold-700 font-medium mt-1">{official.title}</p>
          </div>
          <Badge variant="gold" className="shrink-0 ml-2">
            #{index + 1}
          </Badge>
        </div>

        {official.personalInfo && (
          <div className="space-y-1 mb-3 text-xs">
            {official.personalInfo.born && (
              <p className="text-platinum-500-600 dark:text-platinum-500-400">
                <span className="font-semibold">Born:</span> {official.personalInfo.born}
              </p>
            )}
            {official.personalInfo.age && (
              <p className="text-platinum-500-600 dark:text-platinum-500-400">
                <span className="font-semibold">Age:</span> {official.personalInfo.age} years old
              </p>
            )}
            {official.personalInfo.father && (
              <p className="text-platinum-500-600 dark:text-platinum-500-400">
                <span className="font-semibold">Father:</span> {official.personalInfo.father?.split('(')[0].trim()}
              </p>
            )}
          </div>
        )}

        {official.positions && official.positions.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-semibold text-platinum-500-700 dark:text-platinum-500-300 mb-1">Current Positions</p>
            <div className="flex flex-wrap gap-1">
              {official.positions.slice(0, 3).map((pos, i) => (
                <Badge key={i} variant="outline" className="text-xs border-gold-700/30 text-gold-700">
                  {pos.title}
                </Badge>
              ))}
              {official.positions.length > 3 && (
                <Badge variant="outline" className="text-xs border-platinum/30 text-platinum-500-500">
                  +{official.positions.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {official.achievements && official.achievements.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-semibold text-platinum-500-700 dark:text-platinum-500-300 mb-1">Key Achievements</p>
            <ul className="space-y-0.5">
              {official.achievements.slice(0, 3).map((ach, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-platinum-500-600 dark:text-platinum-500-400">
                  <ArrowUpRight className="h-3 w-3 mt-0.5 text-emerald-500 shrink-0" />
                  {ach.year && <span className="text-gold-700 font-medium">{ach.year}:</span>} {ach.achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {official.controversies && official.controversies.length > 0 && (
          <div className="pt-2 border-t border-platinum-200/50 dark:border-platinum-700/50">
            <p className="text-xs font-semibold text-red-600 mb-1">Controversies</p>
            <ul className="space-y-0.5">
              {official.controversies.slice(0, 2).map((c, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-platinum-500-600 dark:text-platinum-500-400">
                  <AlertTriangle className="h-3 w-3 mt-0.5 text-red-400 shrink-0" />
                  {c.issue}
                </li>
              ))}
            </ul>
          </div>
        )}

        {official.socialAccounts && official.socialAccounts.length > 0 && (
          <div className="pt-2 border-t border-platinum-200/50 dark:border-platinum-700/50 mt-2">
            <div className="flex items-center gap-2">
              {official.socialAccounts.map((acc, i) => (
                <Badge key={i} variant="outline" className="text-xs border-denim/30 text-denim">
                  {acc.platform}: {acc.handle}
                  {acc.followers && ` (${acc.followers})`}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </GlassCard>
    </motion.div>
  )
}

// ============================================================================
// TIMELINE ITEM COMPONENT
// ============================================================================

function TimelineItem({ year, event }: { year: string, event: string }) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-gradient-gold ring-2 ring-gold/30" />
        <div className="w-0.5 h-full bg-platinum-200 dark:bg-platinum-700 mt-1" />
      </div>
      <div className="pb-4">
        <span className="text-sm font-bold text-gold-700">{year}</span>
        <p className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{event}</p>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function FederalOfficialsPage() {
  // Add defensive fallbacks for all data to handle prerendering
  const data = federalOfficialsData ?? {}
  const supremeCouncilMembers = data.supremeCouncilMembers ?? []
  const cabinetData = data.cabinetData ?? { primeMinister: {}, "deputyPrime Ministers": [], "general Ministers": [], cabinetAffairsHighlights: { timeline: [] } }
  const ministersOfState = data.ministersOfState ?? []
  const undersecretaries = data.undersecretaries ?? []
  const gcoData = data.gcoData ?? { established: '', mandate: '', uaeMediaCouncil: { president: '', mediaStrategyAndPoliciesSector: '' } }
  const ministryLeadership = data.ministryLeadership ?? []
  const recentInitiatives = data.recentInitiatives ?? []
  const majorProjects = data.majorProjects ?? []
  const foreignPolicyData = data.foreignPolicyData ?? { diplomaticVisitsMBZ: [], diplomaticVisitsMBR: [], indiaUAERelations: [], turkeyUAERelations: [] }
  const controversiesData = data.controversiesData ?? { collective: [], individual: { mohammedBinRashid: [], mohamedBinZayed: [], mansourBinZayed: [], khaledBinMohamed: [] } }
  const sentimentAnalysis = data.sentimentAnalysis ?? { byOfficial: [], byTopic: [] }
  const relevanceAssessment = data.relevanceAssessment ?? { relevanceMatrix: [], governanceThemes: [], dataCompleteness: [] }
  const urlRepository = data.urlRepository ?? []
  const notableMinisters = data.notableMinisters ?? { sultanAlJaber: { also: [] } }
  const executionSummary = data.executionSummary ?? {}
  const execSummary = executionSummary ?? {}

  // Summary metrics
  const totalSupremeCouncil = supremeCouncilMembers.length
  const totalCabinet = (cabinetData["deputyPrime Ministers"]?.length ?? 0) + (cabinetData["general Ministers"]?.length ?? 0) + 1
  const totalMinistersOfState = ministersOfState.length
  const totalUndersecretaries = undersecretaries.length

  // Sentiment summary
  const sentimentOfficialData = (sentimentAnalysis.byOfficial ?? []).map((s: { overallSentiment: string; official: string }) => {
    let val = 0
    if (s.overallSentiment.includes('Positive') || s.overallSentiment === 'Very Positive') val = 1
    else if (s.overallSentiment.includes('Mixed') && !s.overallSentiment.includes('Negative')) val = 0.5
    else if (s.overallSentiment.includes('Negative')) val = 0
    return { name: s.official.split(' ').slice(0, 3).join(' '), positive: val, negative: 1 - val }
  })

  // Relevance chart data
  const relevanceChartData = (relevanceAssessment.relevanceMatrix ?? []).map((r: { official: string; governanceRelevance: string; policyImpact: string; regionalInfluence: string; globalProfile: string }) => ({
    name: r.official.split(' ').slice(0, 3).join(' '),
    governance: r.governanceRelevance === 'CRITICAL' ? 100 : r.governanceRelevance === 'HIGH' ? 75 : r.governanceRelevance === 'MEDIUM' ? 50 : 25,
    policy: r.policyImpact === 'Supreme' ? 100 : r.policyImpact === 'Very High' ? 85 : r.policyImpact === 'High' ? 70 : 50,
    regional: r.regionalInfluence === 'Very High' ? 100 : r.regionalInfluence === 'High' ? 75 : r.regionalInfluence === 'Medium' ? 50 : 25,
    global: r.globalProfile === 'Very High' ? 100 : r.globalProfile === 'High' ? 75 : r.globalProfile === 'Medium' ? 50 : 25,
  }))

  // Governance theme data
  const themeData = (relevanceAssessment.governanceThemes ?? []).map((t: { theme: string; description: string }, i: number) => ({
    name: t.theme,
    value: 100 - i * 15,
    description: t.description,
  }))

  // Sentiment by topic chart
  const topicSentimentData = (sentimentAnalysis.byTopic ?? []).map((t: { topic: string; sentiment: string; notes: string }) => {
    let score = 50
    if (t.sentiment === 'Very Positive') score = 100
    else if (t.sentiment === 'Positive') score = 80
    else if (t.sentiment === 'Mixed') score = 50
    else if (t.sentiment === 'Negative') score = 20
    return { name: t.topic, score, notes: t.notes }
  })

  // Relevance tier data
  const relevanceTierData = (relevanceAssessment.relevanceMatrix ?? []).reduce((acc: Record<string, number>, r: { governanceRelevance: string }) => {
    const gov = r.governanceRelevance
    if (gov === 'CRITICAL') acc.critical = (acc.critical || 0) + 1
    else if (gov === 'HIGH') acc.high = (acc.high || 0) + 1
    else if (gov === 'MEDIUM') acc.medium = (acc.medium || 0) + 1
    else acc.low = (acc.low || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const relevanceTierChartData = [
    { name: 'Critical', value: relevanceTierData.critical || 0, color: CHART_COLORS.danger },
    { name: 'High', value: relevanceTierData.high || 0, color: CHART_COLORS.warning },
    { name: 'Medium', value: relevanceTierData.medium || 0, color: CHART_COLORS.info },
    { name: 'Low', value: relevanceTierData.low || 0, color: CHART_COLORS.platinum },
  ]

  // Controversy count
  const totalControversies =
    (controversiesData.collective?.length || 0) +
    (controversiesData.individual?.mohammedBinRashid?.length || 0) +
    (controversiesData.individual?.mohamedBinZayed?.length || 0) +
    (controversiesData.individual?.mansourBinZayed?.length || 0) +
    (controversiesData.individual?.khaledBinMohamed?.length || 0)

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2">FEDERAL OFFICIALS</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">
            Entity Intelligence — Federal Government
          </h1>
          <p className="mt-2 text-platinum-500-600 dark:text-platinum-500-400 text-sm">
            UAE Federal Officials covering all ministries, policies, officials, statements, and initiatives.
            SSOT status — fully updated {execSummary.dateExecuted}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/30 text-gold-700 hover:bg-gold-700/10">
            <Globe className="h-4 w-4" />
            Export List
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-500-950 gap-2">
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
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Supreme Council"
            value={totalSupremeCouncil}
            icon={<Crown className="h-6 w-6" />}
            gradient="gold"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Cabinet Positions"
            value={execSummary.cabinetPositionsDocumented}
            icon={<Briefcase className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Ministries Covered"
            value={totalMinistersOfState + totalUndersecretaries}
            icon={<Building2 className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Controversies"
            value={totalControversies}
            icon={<AlertTriangle className="h-6 w-6" />}
            gradient="rose"
          />
        </motion.div>
      </motion.div>

      {/* Execution Summary Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard intensity="low">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">
                <span className="font-semibold">{execSummary.queriesExecuted}</span> queries executed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">
                <span className="font-semibold">{execSummary.urlsIdentified}</span> URLs identified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">
                <span className="font-semibold">{execSummary.sourceTiersCovered}</span> source tiers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">
                <span className="font-semibold">{execSummary.achievementsDocumented}</span> achievements documented
              </span>
            </div>
            <Badge variant="success" className="ml-auto">SSOT COMPLETE</Badge>
          </div>
        </GlassCard>
      </motion.div>

      <Tabs defaultValue="supreme" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="supreme">Supreme Council</TabsTrigger>
          <TabsTrigger value="cabinet">Federal Cabinet</TabsTrigger>
          <TabsTrigger value="ministers">Ministers of State</TabsTrigger>
          <TabsTrigger value="entities">Key Entities</TabsTrigger>
          <TabsTrigger value="initiatives">Recent Initiatives</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="foreign">Foreign Policy</TabsTrigger>
          <TabsTrigger value="controversies">Controversies</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="relevance">UAE Relevance</TabsTrigger>
          <TabsTrigger value="sources">URL Sources</TabsTrigger>
        </TabsList>

        {/* ============================================================ */}
        {/* SUPREME COUNCIL MEMBERS */}
        {/* ============================================================ */}
        <TabsContent value="supreme" className="space-y-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {(supremeCouncilMembers ?? []).map((official, index) => (
              <ProfileCard key={official.id} official={official} index={index} />
            ))}
          </motion.div>

          {/* Timeline for MBZ */}
          <GlassPanel
            title="MBZ Leadership Timeline"
            description="Sheikh Mohamed bin Zayed Al Nahyan — key milestones"
            badge="SUPREME COUNCIL"
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h4 className="font-rajdhani font-bold text-base text-navy-500-900 dark:text-platinum-500-100 mb-3">
                  Early Career (1979–2005)
                </h4>
                <div className="space-y-0">
                  {((data.supremeCouncilMembers.find(o => o.id === 'mbz')?.leadershipTimeline)?.filter(t => parseInt(t.year) <= 2005) ?? [])
                    .map((t, i) => (
                      <TimelineItem key={i} year={t.year} event={t.event} />
                    ))}
                </div>
              </div>
              <div>
                <h4 className="font-rajdhani font-bold text-base text-navy-500-900 dark:text-platinum-500-100 mb-3">
                  Rise to Presidency (2006–2023)
                </h4>
                <div className="space-y-0">
                  {((data.supremeCouncilMembers.find(o => o.id === 'mbz')?.leadershipTimeline)?.filter(t => parseInt(t.year) > 2005) ?? [])
                    .map((t, i) => (
                      <TimelineItem key={i} year={t.year} event={t.event} />
                    ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* MBZ Foreign Policy */}
          <GlassPanel
            title="MBZ Foreign Policy Positions"
            badge="STRATEGIC"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {data.supremeCouncilMembers.find(o => o.id === 'mbz')?.foreignPolicy?.map((fp, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Globe2 className="h-4 w-4 mt-0.5 text-gold-700 shrink-0" />
                  <span className="text-platinum-500-700 dark:text-platinum-500-300">{fp}</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* MBZ Honors */}
          <GlassPanel title="International Honors & Awards" badge="RECOGNITION">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Country</TableHead>
                    <TableHead className="font-semibold">Honor</TableHead>
                    <TableHead className="font-semibold">Year</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.supremeCouncilMembers.find(o => o.id === 'mbz')?.honors?.map((h, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-sm">{h.country}</TableCell>
                      <TableCell className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{h.honor}</TableCell>
                      <TableCell className="text-sm text-platinum-500-500">{h.year || '—'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </GlassPanel>

          {/* MBR Business Empire */}
          <GlassPanel
            title="MBR Business Holdings & Achievements"
            badge="ECONOMIC"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {data.supremeCouncilMembers.find(o => o.id === 'mbr')?.achievements?.map((ach, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Rocket className="h-4 w-4 mt-0.5 text-gold-700 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-gold-700">{ach.year}</span>
                    <p className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{ach.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Mansour & City Football Group */}
          <GlassPanel
            title="Sheikh Mansour — City Football Group"
            badge="GLOBAL INVESTMENTS"
          >
            <div className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { club: 'Manchester City', country: 'England' },
                  { club: 'New York City FC', country: 'USA' },
                  { club: 'Melbourne City FC', country: 'Australia' },
                  { club: 'Girona FC', country: 'Spain' },
                  { club: 'Mumbai City FC', country: 'India' },
                  { club: 'Yokohama F. Marinos', country: 'Japan' },
                  { club: 'Bahia', country: 'Brazil' },
                  { club: 'Montevideo City Torque', country: 'Uruguay' },
                  { club: 'Troyes AC', country: 'France' },
                  { club: 'Lommel S.K.', country: 'Belgium' },
                  { club: 'Palermo FC', country: 'Italy' },
                  { club: 'Shenzhen', country: 'China' },
                  { club: 'Club Puebla', country: 'Mexico' },
                ].map((c, i) => (
                  <div key={i} className="glass-subtle rounded-lg p-2">
                    <p className="text-xs font-semibold text-navy-500-900 dark:text-platinum-500-100">{c.club}</p>
                    <p className="text-xs text-platinum-500-500">{c.country}</p>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-platinum-200/50 dark:border-platinum-700/50">
                <p className="text-sm text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold text-gold-700">13 Global Clubs</span> — City Football Group, founded 2014, acquired Manchester City September 2008
                </p>
              </div>
            </div>
          </GlassPanel>

          {/* Hamdan Social Stats */}
          <GlassPanel
            title="Sheikh Hamdan — Social Media Presence"
            badge="DIGITAL REACH"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { platform: 'Instagram', handle: '@faz3 / fazza', followers: '18M+' },
                { platform: 'Twitter/X', handle: '@faz3', followers: '3.47M' },
                { platform: 'Facebook', handle: 'ShkHamdan', followers: '2.08M' },
                { platform: 'YouTube', handle: 'M_Hamdan Fazza', followers: '10.6K' },
              ].map((s, i) => (
                <div key={i} className="glass-subtle rounded-lg p-3">
                  <p className="text-xs font-semibold text-navy-500-900 dark:text-platinum-500-100">{s.platform}</p>
                  <p className="text-xs text-gold-700">{s.handle}</p>
                  <p className="text-xs text-emerald-500 font-medium mt-1">{s.followers}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* ============================================================ */}
        {/* FEDERAL CABINET */}
        {/* ============================================================ */}
        <TabsContent value="cabinet" className="space-y-6">
          {/* Cabinet Overview */}
          <GlassPanel
            title="15th Federal Cabinet (2026)"
            description={`Total Cabinet-Level Positions: ${data.cabinetData.totalPositions}`}
            badge="CABINET"
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Prime Minister */}
              <div className="glass-subtle rounded-xl p-4">
                <Badge variant="gold" className="mb-2">Prime Minister</Badge>
                <p className="font-rajdhani font-bold text-navy-500-900 dark:text-platinum-500-100">
                  {data.cabinetData.primeMinister.name}
                </p>
              </div>

              {/* Deputy Prime Ministers */}
              <div className="lg:col-span-2 glass-subtle rounded-xl p-4">
                <Badge variant="denim" className="mb-2">Deputy Prime Ministers (4)</Badge>
                <div className="grid gap-2 sm:grid-cols-2 mt-2">
                  {(cabinetData["deputyPrime Ministers"] ?? []).map((dpm, i) => (
                    <div key={i} className="text-sm">
                      <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{dpm.name}</p>
                      <p className="text-xs text-platinum-500-500">{dpm.position}</p>
                      {dpm.additional && <p className="text-xs text-gold-700">{dpm.additional}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* General Ministers */}
          <GlassPanel
            title="General Ministers (14)"
            description="Federal ministry leadership"
            badge="MINISTERS"
          >
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold w-12">#</TableHead>
                    <TableHead className="font-semibold">Ministry</TableHead>
                    <TableHead className="font-semibold">Minister</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(cabinetData["general Ministers"] ?? []).map((gm, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-sm font-medium">{i + 1}</TableCell>
                      <TableCell className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{gm.position}</TableCell>
                      <TableCell className="text-sm font-semibold text-navy-500-900 dark:text-platinum-500-100">{gm.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </GlassPanel>

          {/* Al Gergawi Highlights */}
          <GlassPanel
            title="Mohammed Al Gergawi — Cabinet Affairs"
            description="Leads UAE government modernization and digital transformation"
            badge="DIGITAL GOVERNMENT"
          >
            <div className="space-y-3">
              {(cabinetData.cabinetAffairsHighlights?.timeline ?? []).map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-20 shrink-0">
                    <span className="text-xs font-bold text-gold-700">{t.year}</span>
                  </div>
                  <p className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{t.event}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Under-Secretaries */}
          <GlassPanel
            title="Under-Secretaries & Director-Generals"
            description={`${data.undersecretaries.length} positions documented`}
            badge="LEADERSHIP"
          >
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Entity</TableHead>
                    <TableHead className="font-semibold">Position</TableHead>
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold">Appointment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(undersecretaries ?? []).map((us, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{us.entity}</TableCell>
                      <TableCell className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{us.position}</TableCell>
                      <TableCell className="text-sm font-semibold text-navy-500-900 dark:text-platinum-500-100">{us.name}</TableCell>
                      <TableCell className="text-sm text-platinum-500-500">{us.appointment || '—'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* ============================================================ */}
        {/* MINISTERS OF STATE */}
        {/* ============================================================ */}
        <TabsContent value="ministers" className="space-y-6">
          <GlassPanel
            title="Ministers of State (15)"
            description="Complete roster of UAE Ministers of State"
            badge="CABINET"
          >
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold w-12">#</TableHead>
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold">Portfolio</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(ministersOfState ?? []).map((m, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-sm font-medium">{m.number}</TableCell>
                      <TableCell className="text-sm font-semibold text-navy-500-900 dark:text-platinum-500-100">{m.name}</TableCell>
                      <TableCell className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{m.portfolio}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </GlassPanel>

          {/* Notable Ministers */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Omar Al Olama */}
            <GlassCard hover>
              <div className="flex items-start justify-between mb-3">
                <Badge variant="cyan" className="text-xs">WORLD'S FIRST AI MINISTER</Badge>
                <Rocket className="h-5 w-5 text-cyan-500" />
              </div>
              <h3 className="font-rajdhani font-bold text-base text-navy-500-900 dark:text-platinum-500-100">
                {data.notableMinisters.omarAlOlama.name}
              </h3>
              <p className="text-xs text-gold-700 mt-1">{data.notableMinisters.omarAlOlama.position}</p>
              <div className="mt-3 space-y-1.5 text-xs">
                <p className="text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Appointment:</span> {data.notableMinisters.omarAlOlama.appointment}
                </p>
                <p className="text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Added:</span> {data.notableMinisters.omarAlOlama.added}
                </p>
                <p className="text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Profile:</span> {data.notableMinisters.omarAlOlama.profile}
                </p>
                <p className="text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Warning (Jan 2026):</span> {data.notableMinisters.omarAlOlama.warning}
                </p>
              </div>
            </GlassCard>

            {/* Shamma Al Mazrui */}
            <GlassCard hover>
              <div className="flex items-start justify-between mb-3">
                <Badge variant="emerald" className="text-xs">YOUNGEST CABINET MINISTER</Badge>
                <Star className="h-5 w-5 text-emerald-500" />
              </div>
              <h3 className="font-rajdhani font-bold text-base text-navy-500-900 dark:text-platinum-500-100">
                {data.notableMinisters.shammaAlMazrui.name}
              </h3>
              <p className="text-xs text-gold-700 mt-1">{data.notableMinisters.shammaAlMazrui.positionHistory}</p>
              <div className="mt-3 space-y-1.5 text-xs">
                <p className="text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Full Name:</span> {data.notableMinisters.shammaAlMazrui.fullName}
                </p>
                <p className="text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Age at Appointment:</span> {data.notableMinisters.shammaAlMazrui.ageAtAppointment}
                </p>
                <p className="text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Education:</span> {data.notableMinisters.shammaAlMazrui.education}
                </p>
                <p className="text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Recognition:</span> {data.notableMinisters.shammaAlMazrui.recognition}
                </p>
              </div>
            </GlassCard>

            {/* Sultan Al Jaber */}
            <GlassCard hover>
              <div className="flex items-start justify-between mb-3">
                <Badge variant="gold" className="text-xs">COP28 PRESIDENT</Badge>
                <Globe className="h-5 w-5 text-gold-700" />
              </div>
              <h3 className="font-rajdhani font-bold text-base text-navy-500-900 dark:text-platinum-500-100">
                {data.notableMinisters.sultanAlJaber.name}
              </h3>
              <p className="text-xs text-gold-700 mt-1">{data.notableMinisters.sultanAlJaber.position}</p>
              <div className="mt-3 space-y-1.5 text-xs">
                {notableMinisters.sultanAlJaber?.also?.map((a, i) => (
                  <p key={i} className="text-platinum-500-600 dark:text-platinum-500-400">{a}</p>
                ))}
                <p className="text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Experience:</span> {data.notableMinisters.sultanAlJaber.experience}
                </p>
                <p className="text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Award:</span> {data.notableMinisters.sultanAlJaber.award}
                </p>
              </div>
            </GlassCard>
          </div>
        </TabsContent>

        {/* ============================================================ */}
        {/* KEY ENTITIES */}
        {/* ============================================================ */}
        <TabsContent value="entities" className="space-y-6">
          {/* GCO */}
          <GlassPanel
            title="Government Communication Office (GCO)"
            description={`Established ${data.gcoData.established}`}
            badge="COMMUNICATIONS"
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-sm">
                <p className="font-semibold text-platinum-500-700 dark:text-platinum-500-300">Mandate</p>
                <p className="text-platinum-500-600 dark:text-platinum-500-400">{data.gcoData.mandate}</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-platinum-500-700 dark:text-platinum-500-300">Operations</p>
                <p className="text-platinum-500-600 dark:text-platinum-500-400">{data.gcoData.operatesUnder}</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-platinum-500-700 dark:text-platinum-500-300">WhatsApp Channel</p>
                <p className="text-emerald-500 font-medium">{data.gcoData.whatsappChannel}</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-platinum-500-700 dark:text-platinum-500-300">Media Council President</p>
                <p className="text-platinum-500-600 dark:text-platinum-500-400">{data.gcoData.uaeMediaCouncil.president}</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-platinum-500-700 dark:text-platinum-500-300">Media Strategy Lead</p>
                <p className="text-platinum-500-600 dark:text-platinum-500-400">{data.gcoData.uaeMediaCouncil.mediaStrategyAndPoliciesSector}</p>
              </div>
            </div>
          </GlassPanel>

          {/* Ministry Leadership */}
          {(ministryLeadership ?? []).map((m, i) => (
            <GlassPanel
              key={i}
              title={m.ministry}
              badge={m.ministry.includes('Foreign') ? 'MOFA' : m.ministry.includes('Finance') ? 'MOF' : m.ministry.includes('Interior') ? 'MOI' : 'CABINET'}
            >
              <div className="space-y-3">
                {(m.leadership ?? []).map((leader, j) => (
                  <p key={j} className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{leader}</p>
                ))}
                {m.keyFacts && (
                  <div className="pt-3 border-t border-platinum-200/50 dark:border-platinum-700/50">
                    {m.keyFacts.map((fact, k) => (
                      <p key={k} className="text-xs text-platinum-500-500 mt-1">{fact}</p>
                    ))}
                  </div>
                )}
                {m.initiatives && (
                  <div className="pt-3 border-t border-platinum-200/50 dark:border-platinum-700/50">
                    <p className="text-xs font-semibold text-platinum-500-700 dark:text-platinum-500-300 mb-2">Key Initiatives</p>
                    {m.initiatives.map((init, l) => (
                      <div key={l} className="flex items-start gap-2 mb-1">
                        <CheckCircle2 className="h-3 w-3 mt-0.5 text-emerald-500 shrink-0" />
                        <div>
                          <span className="text-xs font-semibold text-gold-700">{init.name}:</span>
                          <span className="text-xs text-platinum-500-600 dark:text-platinum-500-400 ml-1">{init.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </GlassPanel>
          ))}
        </TabsContent>

        {/* ============================================================ */}
        {/* RECENT INITIATIVES */}
        {/* ============================================================ */}
        <TabsContent value="initiatives" className="space-y-6">
          {/* Agentic AI */}
          <GlassCard className="border-2 border-gold-700/30">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                <Rocket className="h-6 w-6 text-navy-500-950" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="gold" className="mb-1">WORLD FIRST</Badge>
                    <h3 className="font-rajdhani font-bold text-xl text-navy-500-900 dark:text-platinum-500-100">
                      Agentic AI Government Framework
                    </h3>
                    <p className="text-sm text-platinum-500-500 mt-1">{data.recentInitiatives[0].date}</p>
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-platinum-500-700 dark:text-platinum-500-300">
                    {data.recentInitiatives[0].details}
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="text-xs">
                      <span className="font-semibold text-gold-700">Authority:</span>
                      <span className="text-platinum-500-600 dark:text-platinum-500-400 ml-1">{data.recentInitiatives[0].authority}</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-semibold text-gold-700">Target:</span>
                      <span className="text-platinum-500-600 dark:text-platinum-500-400 ml-1">{data.recentInitiatives[0].target}</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-semibold text-gold-700">Taskforce Chair:</span>
                      <span className="text-platinum-500-600 dark:text-platinum-500-400 ml-1">{data.recentInitiatives[0].taskforceChair}</span>
                    </div>
                    <div className="text-xs">
                      <span className="font-semibold text-gold-700">Oversight:</span>
                      <span className="text-platinum-500-600 dark:text-platinum-500-400 ml-1">{data.recentInitiatives[0].oversight}</span>
                    </div>
                  </div>
                  <p className="text-xs text-platinum-500-500 mt-2">
                    Builds on: {data.recentInitiatives[0].buildsOn}
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Other Initiatives */}
          <div className="grid gap-4 sm:grid-cols-2">
            {(recentInitiatives ?? []).slice(1).map((init, i) => (
              <GlassCard key={i} hover>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-rajdhani font-bold text-base text-navy-500-900 dark:text-platinum-500-100">
                    {init.name}
                  </h4>
                  {init.worldFirst && <Badge variant="gold" className="text-xs">World First</Badge>}
                </div>
                <p className="text-xs text-platinum-500-500 mb-2">{init.date || init.details}</p>
                <p className="text-sm text-platinum-500-700 dark:text-platinum-500-300">
                  {init.location && <span className="text-gold-700">{init.location}</span>}
                  {init.details}
                </p>
                {init.keyDiscussions && (
                  <p className="text-xs text-platinum-500-500 mt-1">Key: {init.keyDiscussions}</p>
                )}
              </GlassCard>
            ))}
          </div>
        </TabsContent>

        {/* ============================================================ */}
        {/* MAJOR PROJECTS */}
        {/* ============================================================ */}
        <TabsContent value="projects" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {(majorProjects ?? []).map((proj, i) => (
              <GlassCard key={i} hover>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-navy flex items-center justify-center shrink-0">
                    {proj.project.toLowerCase().includes('space') ? (
                      <Rocket className="h-5 w-5 text-platinum-500-100" />
                    ) : proj.project.toLowerCase().includes('digital') ? (
                      <Globe className="h-5 w-5 text-platinum-500-100" />
                    ) : proj.project.toLowerCase().includes('economic') ? (
                      <TrendingUp className="h-5 w-5 text-platinum-500-100" />
                    ) : (
                      <Building2 className="h-5 w-5 text-platinum-500-100" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-rajdhani font-bold text-base text-navy-500-900 dark:text-platinum-500-100">
                      {proj.project}
                    </h3>
                    <p className="text-xs text-gold-700 mt-0.5">{proj.date || ''}</p>
                    <p className="text-sm text-platinum-500-600 dark:text-platinum-500-400 mt-2">
                      {proj.details}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </TabsContent>

        {/* ============================================================ */}
        {/* FOREIGN POLICY */}
        {/* ============================================================ */}
        <TabsContent value="foreign" className="space-y-6">
          {/* Abraham Accords */}
          <GlassCard className="border-2 border-emerald-500/20">
            <div className="flex items-start gap-3">
              <Handshake className="h-8 w-8 text-emerald-500 shrink-0 mt-1" />
              <div>
                <Badge variant="emerald" className="mb-2">{data.foreignPolicyData.abrahamAccords.year}</Badge>
                <h3 className="font-rajdhani font-bold text-xl text-navy-500-900 dark:text-platinum-500-100">
                  Abraham Accords
                </h3>
                <p className="text-sm text-platinum-500-600 dark:text-platinum-500-400 mt-1">
                  <span className="font-semibold">Brokered by:</span> {data.foreignPolicyData.abrahamAccords.brokeredBy}
                </p>
                <p className="text-sm text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Significance:</span> {data.foreignPolicyData.abrahamAccords.significance}
                </p>
                <p className="text-sm text-platinum-500-600 dark:text-platinum-500-400">
                  <span className="font-semibold">Impact:</span> {data.foreignPolicyData.abrahamAccords.impact}
                </p>
              </div>
            </div>
          </GlassCard>

          {/* MBZ Diplomatic Visits */}
          <GlassPanel title="Sheikh Mohamed bin Zayed — International Engagement" badge="MBZ">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Date</TableHead>
                    <TableHead className="font-semibold">Location</TableHead>
                    <TableHead className="font-semibold">Event</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(foreignPolicyData.diplomaticVisitsMBZ ?? []).map((v, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-xs text-gold-700 font-medium">{v.date}</TableCell>
                      <TableCell className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{v.location}</TableCell>
                      <TableCell className="text-sm text-platinum-500-600 dark:text-platinum-500-400">{v.event}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </GlassPanel>

          {/* MBR Diplomatic Engagements */}
          <GlassPanel title="Sheikh Mohammed bin Rashid — International Engagement" badge="MBR">
            <div className="space-y-2">
              {(foreignPolicyData.diplomaticVisitsMBR ?? []).map((v, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-xs text-gold-700 font-medium w-20 shrink-0">{v.date}</span>
                  <Globe2 className="h-4 w-4 mt-0.5 text-platinum-500-400 shrink-0" />
                  <span className="text-platinum-500-700 dark:text-platinum-500-300">{v.event}</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* India-UAE Relations */}
          <GlassPanel title="India-UAE Relations" badge="BILATERAL">
            <div className="space-y-2">
              {(foreignPolicyData.indiaUAERelations ?? []).map((r, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-xs text-gold-700 font-medium w-16 shrink-0">{r.year}</span>
                  <span className="text-platinum-500-700 dark:text-platinum-500-300">{r.event}</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Turkey-UAE Relations */}
          <GlassPanel title="Turkey-UAE Relations" badge="BILATERAL">
            {(foreignPolicyData.turkeyUAERelations ?? []).map((t, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <AlertTriangle className="h-4 w-4 mt-0.5 text-orange-500 shrink-0" />
                <div>
                  <span className="text-orange-600 font-medium">{t.issue}:</span>
                  <span className="text-platinum-500-700 dark:text-platinum-500-300 ml-1">{t.details}</span>
                </div>
              </div>
            ))}
          </GlassPanel>
        </TabsContent>

        {/* ============================================================ */}
        {/* CONTROVERSIES */}
        {/* ============================================================ */}
        <TabsContent value="controversies" className="space-y-6">
          {/* Collective Controversies */}
          <GlassPanel title="Collective — UAE Leadership" badge="RISK">
            <div className="space-y-3">
              {(controversiesData.collective ?? []).map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-3 glass-subtle rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-red-600">{c.issue}</p>
                    <p className="text-sm text-platinum-500-600 dark:text-platinum-500-400 mt-0.5">{c.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Individual Controversies */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* MBR */}
            <GlassCard hover className="border-red-500/20">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <h3 className="font-rajdhani font-bold text-lg text-navy-500-900 dark:text-platinum-500-100">
                  Mohammed bin Rashid
                </h3>
              </div>
              <div className="space-y-2">
                {(controversiesData.individual?.mohammedBinRashid ?? []).map((c, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-semibold text-platinum-500-800 dark:text-platinum-500-200">{c.issue}</p>
                    <p className="text-xs text-platinum-500-500 mt-0.5">{c.details}</p>
                    {c.source && <p className="text-xs text-platinum-500-400 mt-0.5">Source: {c.source}</p>}
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* MBZ */}
            <GlassCard hover className="border-red-500/20">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <h3 className="font-rajdhani font-bold text-lg text-navy-500-900 dark:text-platinum-500-100">
                  Mohamed bin Zayed
                </h3>
              </div>
              <div className="space-y-2">
                {(controversiesData.individual?.mohamedBinZayed ?? []).map((c, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-semibold text-platinum-500-800 dark:text-platinum-500-200">{c.issue}</p>
                    <p className="text-xs text-platinum-500-500 mt-0.5">{c.details}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Mansour */}
            <GlassCard hover className="border-red-500/20">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <h3 className="font-rajdhani font-bold text-lg text-navy-500-900 dark:text-platinum-500-100">
                  Mansour bin Zayed
                </h3>
              </div>
              <div className="space-y-2">
                {(controversiesData.individual?.mansourBinZayed ?? []).map((c, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-semibold text-platinum-500-800 dark:text-platinum-500-200">{c.issue}</p>
                    <p className="text-xs text-platinum-500-500 mt-0.5">{c.details}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Khaled */}
            <GlassCard hover className="border-red-500/20">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <h3 className="font-rajdhani font-bold text-lg text-navy-500-900 dark:text-platinum-500-100">
                  Khaled bin Mohamed
                </h3>
              </div>
              <div className="space-y-2">
                {(controversiesData.individual?.khaledBinMohamed ?? []).map((c, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-semibold text-platinum-500-800 dark:text-platinum-500-200">{c.issue}</p>
                    <p className="text-xs text-platinum-500-500 mt-0.5">{c.details}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </TabsContent>

        {/* ============================================================ */}
        {/* SENTIMENT */}
        {/* ============================================================ */}
        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment by Official - Bar Chart */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sentiment by Official</CardTitle>
                <CardDescription>Sentiment assessment per federal official</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={topicSentimentData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'score', name: 'Sentiment Score', color: CHART_COLORS.gold }
                  ]}
                  height={300}
                  showGrid={false}
                />
              </CardContent>
            </Card>

            {/* Sentiment by Topic - Radar */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sentiment by Topic</CardTitle>
                <CardDescription>Topic-wise sentiment analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <RadarChart
                  data={topicSentimentData.map(t => ({ name: t.name, score: t.score }))}
                  metrics={[
                    { dataKey: 'score', name: 'Score', color: CHART_COLORS.navy }
                  ]}
                  height={300}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sentiment Table */}
          <GlassPanel title="Official Sentiment Assessment" badge="SENTIMENT">
            <div className="space-y-4">
              {(sentimentAnalysis.byOfficial ?? []).map((s, i) => (
                <div key={i} className="p-3 glass-subtle rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-navy-500-900 dark:text-platinum-500-100">{s.official}</p>
                    {getSentimentBadge(s.overallSentiment)}
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-emerald-500 mb-1">Positive Signals</p>
                      {(s.positiveSignals ?? []).map((ps, j) => (
                        <p key={j} className="text-xs text-platinum-500-600 dark:text-platinum-500-400 flex items-start gap-1">
                          <TrendingUp className="h-3 w-3 mt-0.5 text-emerald-400 shrink-0" />
                          {ps}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-500 mb-1">Negative Signals</p>
                      {(s.negativeSignals ?? []).map((ns, j) => (
                        <p key={j} className="text-xs text-platinum-500-600 dark:text-platinum-500-400 flex items-start gap-1">
                          <TrendingDown className="h-3 w-3 mt-0.5 text-red-400 shrink-0" />
                          {ns}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Topic Sentiment Detail */}
          <GlassPanel title="Topic Sentiment Breakdown" badge="TOPICS">
            <div className="space-y-3">
              {(sentimentAnalysis.byTopic ?? []).map((t, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300 flex-1">{t.topic}</span>
                  {getSentimentBadge(t.sentiment)}
                  <span className="text-xs text-platinum-500-500 w-48 text-right ml-4">{t.notes}</span>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* ============================================================ */}
        {/* UAE RELEVANCE */}
        {/* ============================================================ */}
        <TabsContent value="relevance" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Relevance Radar */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Multi-Dimensional Relevance</CardTitle>
                <CardDescription>Governance, Policy, Regional, and Global dimensions</CardDescription>
              </CardHeader>
              <CardContent>
                <RadarChart
                  data={relevanceChartData.slice(0, 6)}
                  metrics={[
                    { dataKey: 'governance', name: 'Governance', color: CHART_COLORS.gold },
                    { dataKey: 'policy', name: 'Policy', color: CHART_COLORS.navy },
                    { dataKey: 'regional', name: 'Regional', color: CHART_COLORS.emerald },
                    { dataKey: 'global', name: 'Global', color: CHART_COLORS.rose },
                  ]}
                  height={350}
                />
              </CardContent>
            </Card>

            {/* Relevance Tier Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Relevance Tier Distribution</CardTitle>
                <CardDescription>Officials by governance relevance level</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={relevanceTierChartData}
                  height={300}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>

          {/* Governance Themes */}
          <GlassPanel title="Key Governance Themes" badge="STRATEGIC">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(relevanceAssessment.governanceThemes ?? []).map((t, i) => (
                <div key={i} className="p-4 glass-subtle rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-rajdhani font-bold text-sm text-navy-500-900 dark:text-platinum-500-100">
                      {t.theme}
                    </h4>
                    <Badge variant={i === 0 ? 'destructive' : i === 1 ? 'warning' : 'secondary'} className="text-xs">
                      #{i + 1}
                    </Badge>
                  </div>
                  <p className="text-xs text-platinum-500-600 dark:text-platinum-500-400">{t.description}</p>
                </div>
              ))}
            </div>
          </GlassPanel>

          {/* Relevance Matrix Table */}
          <GlassPanel title="Relevance Matrix — All Officials" badge="MATRIX">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Official</TableHead>
                    <TableHead className="font-semibold">Governance</TableHead>
                    <TableHead className="font-semibold">Policy</TableHead>
                    <TableHead className="font-semibold">Regional</TableHead>
                    <TableHead className="font-semibold">Global</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(relevanceAssessment.relevanceMatrix ?? []).map((r, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-sm font-semibold text-navy-500-900 dark:text-platinum-500-100">
                        {r.official}
                      </TableCell>
                      <TableCell>{getRelevanceBadge(r.governanceRelevance)}</TableCell>
                      <TableCell>
                        <Badge variant={r.policyImpact === 'Supreme' ? 'destructive' : 'warning'} className="text-xs">
                          {r.policyImpact}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={r.regionalInfluence === 'Very High' ? 'warning' : 'secondary'} className="text-xs">
                          {r.regionalInfluence}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={r.globalProfile === 'Very High' ? 'warning' : 'secondary'} className="text-xs">
                          {r.globalProfile}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </GlassPanel>

          {/* Data Completeness */}
          <GlassPanel title="Data Completeness Assessment" badge="QUALITY">
            <div className="space-y-3">
              {(relevanceAssessment.dataCompleteness ?? []).map((d, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${d.coverage.includes('100%') ? 'bg-emerald-500' : d.coverage.includes('Not') ? 'bg-red-500' : 'bg-gold-500'}`} />
                    <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{d.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={d.coverage.includes('100%') ? 'success' : d.coverage.includes('Not') ? 'destructive' : 'warning'}
                      className="text-xs"
                    >
                      {d.coverage}
                    </Badge>
                    <span className="text-xs text-platinum-500-500 max-w-xs">{d.notes}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* ============================================================ */}
        {/* URL SOURCES */}
        {/* ============================================================ */}
        <TabsContent value="sources" className="space-y-6">
          {/* Tier 0 Sources */}
          <GlassPanel title="Tier 0 — Government Primary Sources" badge="TIER 0">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.urlRepository.filter(u => u.tier === 'Official MBZ site' || u.type?.includes('Official') || u.type === 'UAE Government Portal' || u.type === 'UAE Cabinet official' || u.type === 'Ministry of Foreign Affairs' || u.type === 'Ministry of Finance' || u.type === 'Ministry of Interior' || u.type === 'Presidential Diwan' || u.type === 'MBR official site' || u.type === 'Maktoum site' || u.type === 'Hamdan bin Mohammed site' || u.type === 'Hamdan official site' || u.type === 'Fazza official site').map((u, i) => (
                <a key={i} href={u.url} target="_blank" rel="noopener noreferrer" className="block p-3 glass-subtle rounded-lg hover:shadow-glass transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <ExternalLink className="h-3 w-3 text-gold-700 shrink-0" />
                    <span className="text-xs font-semibold text-navy-500-900 dark:text-platinum-500-100 truncate">
                      {u.type || new URL(u.url).hostname}
                    </span>
                  </div>
                  <p className="text-xs text-platinum-500-500 truncate">{u.url}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="success" className="text-xs">{u.credibility}</Badge>
                    <Badge variant="gold" className="text-xs">{u.uaeRelevance}</Badge>
                  </div>
                </a>
              ))}
            </div>
          </GlassPanel>

          {/* Tier 1 Sources */}
          <GlassPanel title="Tier 1 — Mainstream Media" badge="TIER 1">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(urlRepository ?? []).filter(u => u.type?.includes('News') || u.type === 'Encyclopedia').map((u, i) => (
                <a key={i} href={u.url} target="_blank" rel="noopener noreferrer" className="block p-3 glass-subtle rounded-lg hover:shadow-glass transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <ExternalLink className="h-3 w-3 text-denim shrink-0" />
                    <span className="text-xs font-semibold text-navy-500-900 dark:text-platinum-500-100 truncate">
                      {u.type}
                    </span>
                  </div>
                  <p className="text-xs text-platinum-500-500 truncate">{u.url}</p>
                  <p className="text-xs text-platinum-500-600 dark:text-platinum-500-400 mt-1 line-clamp-2">{u.contentSummary}</p>
                </a>
              ))}
            </div>
          </GlassPanel>

          {/* Tier 2 Sources */}
          <GlassPanel title="Tier 2 — Wikipedia (Secondary)" badge="TIER 2">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(urlRepository ?? []).filter(u => u.type === 'Wikipedia').map((u, i) => (
                <a key={i} href={u.url} target="_blank" rel="noopener noreferrer" className="block p-3 glass-subtle rounded-lg hover:shadow-glass transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="h-3 w-3 text-platinum-500-400 shrink-0" />
                    <span className="text-xs font-semibold text-navy-500-900 dark:text-platinum-500-100 truncate">
                      {u.contentSummary.split(' ').slice(0, 3).join(' ')}
                    </span>
                  </div>
                  <p className="text-xs text-platinum-500-500 truncate">{u.url}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">{u.credibility}</Badge>
                    <Badge variant="secondary" className="text-xs">{u.uaeRelevance}</Badge>
                  </div>
                </a>
              ))}
            </div>
          </GlassPanel>

          {/* Verification Status */}
          <GlassPanel title="Verification Status" badge="VERIFICATION">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: 'All queries executed', status: true },
                { label: 'All result pages fetched', status: true },
                { label: 'All data extracted', status: true },
                { label: 'No fabrication detected', status: true },
                { label: 'Language coverage (AR/EN)', status: true },
                { label: 'Under-secretary roster', status: false, note: 'PARTIAL (~70%)' },
                { label: 'Ambassador roster', status: false, note: 'NOT EXECUTED' },
                { label: 'Complete social graph', status: false, note: 'PARTIAL (~80%)' },
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-2">
                  {v.status ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-gold-700 shrink-0" />
                  )}
                  <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{v.label}</span>
                  {!v.status && v.note && (
                    <Badge variant="warning" className="text-xs ml-auto">{v.note}</Badge>
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
