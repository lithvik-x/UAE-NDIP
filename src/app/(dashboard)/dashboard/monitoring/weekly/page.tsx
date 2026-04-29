// @ts-nocheck
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import {
  LineChart,
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Shield,
  ShieldCheck,
  Globe,
  Network,
  AlertTriangle,
  Zap,
  Database,
  BarChart3,
  CheckCircle,
  Clock,
  Users,
  Building2,
  Scale,
  Crown,
  Eye,
  Target,
  TrendingUp,
  GitBranch,
  MessageSquare,
  Newspaper,
  Bell,
  Radio,
  Search,
  Fingerprint,
  Award,
  Gem,
  Flag,
  Globe2,
  Layers,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Database as DatabaseIcon,
  LineChart as LineChartIcon,
  DollarSign,
  Users as UsersIcon,
  AlertOctagon,
  CheckSquare,
  Square,
  BookOpen,
  FileText,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
} from 'lucide-react'
import {
  weeklyDeepDiveExtendedData,
  weeklyDeepDiveData,
} from '@/lib/data-loader'

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

const slideIn = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
}

// Source tier colors
const tierColors: Record<number, string> = {
  0: 'bg-emerald-500/20 text-emerald border-emerald-500/50',
  1: 'bg-gold-500/20 text-gold border-gold-500/50',
  2: 'bg-navy-500/20 text-navy border-navy-500/50',
  3: 'bg-rose-500/20 text-rose border-rose-500/50',
  4: 'bg-slate-500/20 text-slate-400 border-slate-500/50',
}

// Relevance badge colors
const relevanceColors: Record<string, string> = {
  critical: 'bg-rose-500/20 text-rose border-rose-500/50',
  high: 'bg-gold-500/20 text-gold border-gold-500/50',
  medium: 'bg-navy-500/20 text-navy border-navy-500/50',
  low: 'bg-slate-500/20 text-slate-400 border-slate-500/50',
}

// Priority colors
const priorityColors: Record<string, string> = {
  Critical: 'border-rose-500/50 text-rose',
  High: 'border-gold-500/50 text-gold',
  Medium: 'border-emerald-500/50 text-emerald',
}

// Framework tier colors
const frameworkTierColors: Record<number, string> = {
  0: 'bg-emerald-500/20 text-emerald',
  1: 'bg-gold-500/20 text-gold',
  2: 'bg-navy-500/20 text-navy',
  3: 'bg-rose-500/20 text-rose',
}

export default function WeeklyDeepDivePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const data = weeklyDeepDiveExtendedData
  const metadata = weeklyDeepDiveData

  // Calculate stats
  const totalSources = data.sourceCredibilityMatrix.length
  const criticalSources = data.sourceCredibilityMatrix.filter(s => s.uaeRelevance === 'critical').length
  const tier0Sources = data.sourceCredibilityMatrix.filter(s => s.tier === 0).length

  // AMEC Framework stages data for chart
  const amecStages = [
    { stage: 'Inputs', metrics: ['Budget', 'Staff', 'Time'], color: CHART_COLORS.gold },
    { stage: 'Activities', metrics: ['Monitoring', 'Analysis', 'Reporting'], color: CHART_COLORS.emerald },
    { stage: 'Outputs', metrics: ['Reports', 'Briefings', 'Dashboards'], color: CHART_COLORS.navy },
    { stage: 'Out-takes', metrics: ['Reach', 'Engagement', 'Comprehension'], color: CHART_COLORS.rose },
    { stage: 'Outcomes', metrics: ['Attitude Shifts', 'Behavioral Changes'], color: CHART_COLORS.purple },
    { stage: 'Impact', metrics: ['Reputation', 'Relationships'], color: CHART_COLORS.fuchsia },
  ]

  // Stakeholder data for chart
  const stakeholderData = data.stakeholderEcosystem.map((s, idx) => ({
    name: s.acronym,
    value: s.credibility,
    color: [CHART_COLORS.gold, CHART_COLORS.emerald, CHART_COLORS.navy, CHART_COLORS.rose][idx % 4],
  }))

  return (
    <div className="min-h-screen space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2">M-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Weekly Deep-Dive Analysis</h1>
          <p className="mt-2 text-slate-400 font-rajdhani">
            5-phase methodology with NMA stakeholder mapping, GMO frameworks, and AMEC evaluation
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Database className="h-4 w-4" />
            Export Data
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Zap className="h-4 w-4" />
            Run Analysis
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
      >
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Sources Analyzed"
            value={totalSources}
            icon={<Database className="h-6 w-6" />}
            gradient="gold"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Data Points"
            value={data.executionMetadata.dataPointsExtracted}
            icon={<BarChart3 className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Frameworks"
            value={data.executionMetadata.frameworksDocumented}
            icon={<Network className="h-6 w-6" />}
            gradient="navy"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Critical Sources"
            value={criticalSources}
            icon={<Shield className="h-6 w-6" />}
            gradient="rose"
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <MetricCard
            title="Tier 0 Sources"
            value={tier0Sources}
            icon={<ShieldCheck className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
      </motion.div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sources">Source Matrix</TabsTrigger>
          <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
          <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
          <TabsTrigger value="checklist">Execution</TabsTrigger>
          <TabsTrigger value="metrics">KPIs</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            {/* Execution Summary */}
            <GlassPanel
              title="Research Execution Summary"
              description={data.executionMetadata.enrichmentStatus}
            >
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileText className="h-5 w-5 text-gold" />
                      File Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between p-2 rounded bg-slate-800/30">
                        <span className="text-slate-400">File Analyzed</span>
                        <span className="font-medium text-slate-200">{data.executionMetadata.fileAnalyzed}</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-slate-800/30">
                        <span className="text-slate-400">File Type</span>
                        <span className="font-medium text-slate-200">{data.executionMetadata.fileType}</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-slate-800/30">
                        <span className="text-slate-400">Research Type</span>
                        <span className="font-medium text-slate-200">{data.executionMetadata.researchType}</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-slate-800/30">
                        <span className="text-slate-400">Source</span>
                        <span className="font-medium text-slate-200">{data.executionMetadata.source}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald" />
                      Enrichment Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between p-2 rounded bg-slate-800/30">
                        <span className="text-slate-400">Enrichment Date</span>
                        <span className="font-medium text-slate-200">{data.executionMetadata.enrichmentDate}</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-slate-800/30">
                        <span className="text-slate-400">URLs Fetched</span>
                        <span className="font-medium text-emerald">{data.executionMetadata.urlsFetched}</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-slate-800/30">
                        <span className="text-slate-400">Successfully Extracted</span>
                        <span className="font-medium text-emerald">{data.executionMetadata.urlsSuccessfullyExtracted}</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-slate-800/30">
                        <span className="text-slate-400">PDF Binary Not Decoded</span>
                        <span className="font-medium text-rose">{data.executionMetadata.pdfBinaryNotDecoded}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>

            {/* Quick Stats */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Network className="h-5 w-5 text-navy" />
                    AMEC Framework
                  </CardTitle>
                  <CardDescription>6-stage integrated evaluation model</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {amecStages.map((stage, idx) => (
                      <motion.div
                        key={stage.stage}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 rounded-lg border px-3 py-2 cursor-pointer transition-colors hover:bg-slate-800/50"
                        style={{ borderColor: `${stage.color}50` }}
                      >
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: stage.color }}
                        />
                        <span className="text-sm font-medium text-slate-200">{stage.stage}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Crown className="h-5 w-5 text-gold" />
                    NMA Establishment
                  </CardTitle>
                  <CardDescription>National Media Authority formed Dec 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded bg-gold/10 border border-gold/30">
                      <Calendar className="h-5 w-5 text-gold" />
                      <div>
                        <p className="text-xs text-slate-400">Established</p>
                        <p className="font-bold text-gold">{data.nmaEstablishment.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded bg-slate-800/30">
                      <MapPin className="h-5 w-5 text-emerald" />
                      <div>
                        <p className="text-xs text-slate-400">Location</p>
                        <p className="font-medium text-slate-200">{data.nmaEstablishment.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Global Benchmarks */}
            <Card className="glass-card border-gold/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-gold" />
                  Global Benchmarks
                </CardTitle>
                <CardDescription>Industry standards from research platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 text-center"
                  >
                    <div className="text-2xl font-bold text-navy">{data.globalBenchmarks.socialMediaUsers.split(' ')[0]}</div>
                    <p className="text-xs text-slate-400 mt-1">Social Media Users</p>
                    <p className="text-xs text-slate-500">PMC Research</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 text-center"
                  >
                    <div className="text-2xl font-bold text-rose">53%</div>
                    <p className="text-xs text-slate-400 mt-1">Expect Response in 1 Hour</p>
                    <p className="text-xs text-slate-500">Consumer expectation</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 text-center"
                  >
                    <div className="text-2xl font-bold text-emerald">30min</div>
                    <p className="text-xs text-slate-400 mt-1">AI Detection Advantage</p>
                    <p className="text-xs text-slate-500">Faster than traditional</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* FIBEP Events */}
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-emerald" />
                  FIBEP Events 2026
                </CardTitle>
                <CardDescription>World Media Intelligence Federation calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.fibepEvents2026.map((event, idx) => (
                    <motion.div
                      key={event.event}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                          <Calendar className="h-5 w-5 text-emerald" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-200">{event.event}</p>
                          <p className="text-xs text-slate-400">{event.location}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-emerald-500/50 text-emerald">
                        {event.date.split(',')[0]}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Source Matrix Tab */}
        <TabsContent value="sources" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel
              title="Source Credibility Matrix"
              description={`${totalSources} sources across Tier 0-4 with UAE relevance classification`}
            >
              <ScrollArea className="h-[500px]">
                <div className="space-y-2">
                  {data.sourceCredibilityMatrix.map((source, idx) => (
                    <motion.div
                      key={source.source}
                      variants={slideIn}
                      whileHover={{ scale: 1.01, x: 4 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <Badge
                          variant="outline"
                          className={`min-w-[70px] justify-center ${tierColors[source.tier]}`}
                        >
                          Tier {source.tier}
                        </Badge>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-slate-200 truncate">{source.source}</p>
                          <p className="text-xs text-slate-500 truncate">{source.url || source.dataQuality}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className={`${relevanceColors[source.uaeRelevance]}`}
                        >
                          {source.uaeRelevance}
                        </Badge>
                        <div className="text-right min-w-[50px]">
                          <span className="text-lg font-bold text-emerald">{source.credibility}</span>
                          <span className="text-xs text-slate-500">/10</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Tier Distribution */}
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-gold" />
                  Source Tier Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[0, 1, 2, 3, 4].map((tier) => {
                    const count = data.sourceCredibilityMatrix.filter(s => s.tier === tier).length
                    const percentage = (count / totalSources) * 100
                    return (
                      <div key={tier} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className={tierColors[tier]}>
                            Tier {tier}
                          </Badge>
                          <span className="text-sm font-medium text-slate-300">{count} sources</span>
                        </div>
                        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ delay: tier * 0.1, duration: 0.5 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: tier === 0 ? '#10b981' : tier === 1 ? '#f59e0b' : tier === 2 ? '#3b82f6' : tier === 3 ? '#f43f5e' : '#64748b' }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Stakeholders Tab */}
        <TabsContent value="stakeholders" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel
              title="UAE Stakeholder Ecosystem"
              description="Federal and local media authorities with Tier 0 credibility"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {data.stakeholderEcosystem.map((stakeholder, idx) => (
                  <motion.div
                    key={stakeholder.acronym}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                        <span className="text-lg font-bold text-gold">{stakeholder.acronym}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-200">{stakeholder.name}</p>
                        <p className="text-xs text-slate-400">{stakeholder.jurisdiction} | {stakeholder.type}</p>
                      </div>
                    </div>

                    {/* Contact Info for GDMO */}
                    {stakeholder.contactInfo && (
                      <div className="mb-3 p-2 rounded bg-slate-800/50 space-y-1">
                        {stakeholder.contactInfo.address && (
                          <p className="text-xs text-slate-400 flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            {stakeholder.contactInfo.address}
                          </p>
                        )}
                        {stakeholder.contactInfo.phone && (
                          <p className="text-xs text-slate-400 flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            {stakeholder.contactInfo.phone}
                          </p>
                        )}
                        {stakeholder.contactInfo.email && (
                          <p className="text-xs text-slate-400 flex items-center gap-2">
                            <Mail className="h-3 w-3" />
                            {stakeholder.contactInfo.email}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Mandates */}
                    <div className="space-y-1">
                      {stakeholder.mandates.slice(0, 3).map((mandate, i) => (
                        <p key={i} className="text-xs text-slate-400 flex items-start gap-2">
                          <div className="h-1 w-1 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                          <span className="line-clamp-2">{mandate}</span>
                        </p>
                      ))}
                      {stakeholder.mandates.length > 3 && (
                        <p className="text-xs text-gold">+{stakeholder.mandates.length - 3} more mandates</p>
                      )}
                    </div>

                    {/* Digital Presence */}
                    {stakeholder.digitalPresence && (
                      <div className="mt-3 pt-3 border-t border-slate-700/50">
                        <p className="text-xs text-slate-500 mb-2">Digital Presence:</p>
                        <div className="flex flex-wrap gap-1">
                          {stakeholder.digitalPresence.map((platform, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-slate-600 text-slate-300">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Stakeholder Credibility Chart */}
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald" />
                  Stakeholder Credibility Scores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={stakeholderData}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Frameworks Tab */}
        <TabsContent value="frameworks" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel
              title="Media Monitoring Frameworks"
              description={`${data.mediaMonitoringFrameworks.length}+ frameworks including AMEC, Meltwater, Pulsar, Blackbird.AI`}
            >
              <ScrollArea className="h-[400px]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {data.mediaMonitoringFrameworks.map((framework, idx) => (
                    <motion.div
                      key={framework.name}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={frameworkTierColors[framework.tier]}>
                          Tier {framework.tier}
                        </Badge>
                        <span className="text-sm font-bold text-emerald">{framework.credibility}/10</span>
                      </div>
                      <p className="font-medium text-slate-200 mb-1">{framework.name}</p>
                      <p className="text-xs text-slate-400 mb-2">{framework.organization}</p>
                      {framework.stages && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {framework.stages.map((stage, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-300">
                              {stage}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-xs text-slate-500 line-clamp-2">{framework.description}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </GlassPanel>

            {/* Key Laws & Regulations */}
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Scale className="h-5 w-5 text-navy" />
                  Key Laws & Regulations
                </CardTitle>
                <CardDescription>Federal media regulation framework with {data.iamContentCategories} IAM content categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.keyLawsRegulations.map((law, idx) => (
                    <motion.div
                      key={law.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm font-medium text-slate-200">{law.name}</p>
                          <p className="text-xs text-slate-500">{law.decreeNumber}</p>
                        </div>
                        {law.restrictedCategories && (
                          <Badge variant="outline" className="border-rose-500/50 text-rose">
                            {law.restrictedCategories} categories
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">{law.purpose}</p>
                      {law.keyProvisions && (
                        <div className="mt-2 space-y-1">
                          {law.keyProvisions.slice(0, 2).map((prov, i) => (
                            <p key={i} className="text-xs text-slate-500 flex items-center gap-2">
                              <div className="h-1 w-1 rounded-full bg-navy" />
                              {prov}
                            </p>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Methodology Tab */}
        <TabsContent value="methodology" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel
              title="5-Phase Weekly Analysis Process"
              description="22 total hours structured analysis + preparation"
            >
              <div className="space-y-4">
                {data.weeklyDeepDivePhases.map((phase, idx) => (
                  <motion.div
                    key={phase.phase}
                    variants={slideIn}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
                      <span className="text-xl font-bold text-gold">{phase.phase}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-slate-200">{phase.focus}</span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${priorityColors[phase.priority]}`}
                        >
                          {phase.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {phase.timeHours} hours
                        </span>
                        <span>|</span>
                        <span>{phase.steps.length} steps</span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {phase.steps.slice(0, 3).map((step, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-400">
                            {step}
                          </span>
                        ))}
                        {phase.steps.length > 3 && (
                          <span className="text-xs px-2 py-0.5 rounded bg-gold/20 text-gold">
                            +{phase.steps.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gold">{phase.timeHours}h</div>
                      <div className="text-xs text-slate-500">Duration</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>

            {/* Network Centrality */}
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-navy" />
                  Network Centrality Metrics
                </CardTitle>
                <CardDescription>Graph analysis for influencer identification and network mapping</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {data.networkCentralityMetrics.map((metric, idx) => (
                    <motion.div
                      key={metric.metric}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                    >
                      <p className="text-sm font-medium text-slate-200">{metric.metric}</p>
                      <p className="text-xs text-slate-400 mt-1">{metric.description}</p>
                      <p className="text-xs text-navy mt-1 font-medium">Use: {metric.useCase}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Execution Checklist Tab */}
        <TabsContent value="checklist" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <GlassPanel
              title="Weekly Deep-Dive Execution Checklist"
              description="Step-by-step guide for analysts"
            >
              <div className="space-y-6">
                {data.weeklyDeepDivePhases.map((phase) => (
                  <div key={phase.phase} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold font-bold">
                        {phase.phase}
                      </div>
                      <h4 className="font-semibold text-slate-200">{phase.focus}</h4>
                      <Badge variant="outline" className={priorityColors[phase.priority]}>
                        {phase.priority}
                      </Badge>
                    </div>
                    <div className="ml-4 space-y-2 border-l-2 border-slate-700 pl-4">
                      {phase.steps.map((step, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <div className="h-6 w-6 rounded border border-slate-600 flex items-center justify-center">
                            <Square className="h-4 w-4 text-slate-500" />
                          </div>
                          <span className="text-sm text-slate-300">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* KPIs Tab */}
        <TabsContent value="metrics" className="space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            {/* Influencer Metrics */}
            <Card className="glass-card border-gold/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-gold" />
                  Influencer Marketing 2026 Metrics
                </CardTitle>
                <CardDescription>Key benchmarks from Modash survey (March 2026)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {data.influencerMetrics.map((metric, idx) => (
                    <motion.div
                      key={metric.metric}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-4 text-center hover:bg-slate-800/50 transition-colors cursor-pointer"
                    >
                      <div className="text-2xl font-bold text-gold">{metric.value}</div>
                      <div className="text-xs text-slate-400 mt-1 line-clamp-2">{metric.metric}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Crisis Response KPIs */}
            <Card className="glass-card border-rose-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-rose" />
                  Crisis Response KPIs
                </CardTitle>
                <CardDescription>Industry benchmarks: 53% expect response within 1 hour</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.crisisResponseKPIs.map((kpi, idx) => (
                    <motion.div
                      key={kpi.phase}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-slate-700/50 bg-slate-800/30"
                    >
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="border-rose-500/50 text-rose">
                          {kpi.phase}
                        </Badge>
                        <span className="text-sm text-slate-300">{kpi.kpi}</span>
                      </div>
                      <span className="text-sm font-bold text-emerald">{kpi.target}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <p className="text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">AI Detection Advantage:</span> 30 minutes faster than traditional methods
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Readiness */}
            <Card className="glass-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald" />
                  Implementation Readiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                  <p className="text-lg font-semibold text-emerald">{data.executionMetadata.implementationReadiness}</p>
                  <p className="text-sm text-slate-400 mt-1">Ready for analyst workflow integration</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between p-2 rounded bg-slate-800/30">
                    <span className="text-slate-400">Entity Registries</span>
                    <span className="font-medium text-slate-200">{data.executionMetadata.entityRegistries}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-800/30">
                    <span className="text-slate-400">Structured Data Tables</span>
                    <span className="font-medium text-slate-200">{data.executionMetadata.structuredDataTables}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-slate-800/30">
                    <span className="text-slate-400">Source Citations</span>
                    <span className="font-medium text-slate-200">{data.executionMetadata.sourceCitations}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}