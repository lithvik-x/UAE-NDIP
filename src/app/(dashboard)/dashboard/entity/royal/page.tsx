'use client'

/**
 * UAE Royal Family Intelligence Dashboard
 * Comprehensive dashboard for all 7 Emirates ruling families
 */

import * as React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { GlassCard, GlassPanel } from '@/components/ui/glass-panel'
import {
  LineChart,
  BarChart,
  PieChart,
  AreaChart,
  RadarChart,
  Gauge,
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
  Star,
  Activity,
  Heart,
  Building2,
  DollarSign,
  Award,
  UsersRound,
  ChevronRight,
  BookOpen,
  Trophy,
  Scale,
  Globe2,
  MapPin,
  Calendar,
  Medal,
} from 'lucide-react'
import {
  royalFamilyData,
  dashboardSummary,
  currentRulers,
  crownPrinces,
  wealthMetrics,
  emirateOverviews,
  familyMemberCounts,
  keyLeadershipAppointments,
  majorInitiatives,
  type RoyalFamilyMember,
} from '@/lib/data/entity/royal-family-data'

// ============================================================================
// CONSTANTS & HELPERS
// ============================================================================

const SENTIMENT_COLORS: Record<string, string> = {
  OVERWHELMINGLY_POSITIVE: '#10b981',
  POSITIVE: '#22c55e',
  NEUTRAL: '#94a3b8',
  NEGATIVE: '#ef4444',
  MIXED: '#f59e0b',
}

const EMIRATE_COLORS: Record<string, string> = {
  'Abu Dhabi': CHART_COLORS.gold,
  'Dubai': CHART_COLORS.navy,
  'Sharjah': CHART_COLORS.emerald,
  'Ras Al Khaimah': CHART_COLORS.teal,
  'Ajman': CHART_COLORS.info,
  'Umm Al Quwain': CHART_COLORS.denim,
  'Fujairah': CHART_COLORS.indigo,
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function getSentimentBadge(sentiment: RoyalFamilyMember['sentiment']) {
  switch (sentiment) {
    case 'OVERWHELMINGLY_POSITIVE':
      return <Badge variant="success" className="text-xs">Overwhelmingly Positive</Badge>
    case 'POSITIVE':
      return <Badge variant="success" className="text-xs">Positive</Badge>
    case 'NEUTRAL':
      return <Badge variant="secondary" className="text-xs">Neutral</Badge>
    case 'NEGATIVE':
      return <Badge variant="destructive" className="text-xs">Negative</Badge>
    case 'MIXED':
      return <Badge variant="warning" className="text-xs">Mixed</Badge>
    default:
      return <Badge variant="secondary" className="text-xs">{sentiment}</Badge>
  }
}

function getAlertBadge(level: RoyalFamilyMember['alertLevel']) {
  switch (level) {
    case 'GREEN':
      return <Badge variant="success" className="text-xs gap-1"><CheckCircle2 className="h-3 w-3" /> Green</Badge>
    case 'YELLOW':
      return <Badge variant="warning" className="text-xs gap-1"><AlertCircle className="h-3 w-3" /> Yellow</Badge>
    case 'RED':
      return <Badge variant="destructive" className="text-xs gap-1"><AlertCircle className="h-3 w-3" /> Red</Badge>
    case 'ORANGE':
      return <Badge className="text-xs gap-1 bg-orange-500 text-white border-orange-500"><AlertCircle className="h-3 w-3" /> Orange</Badge>
    default:
      return <Badge variant="secondary" className="text-xs">{level}</Badge>
  }
}

function MemberCard({ member }: { member: RoyalFamilyMember }) {
  return (
    <GlassCard hover className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-semibold text-navy-900 dark:text-platinum-100 text-sm truncate">{member.name}</h4>
            {member.nameAr && (
              <span className="text-xs text-platinum-500 dark:text-platinum-400 font-arabic">{member.nameAr}</span>
            )}
          </div>
          <p className="text-xs text-platinum-600 dark:text-platinum-400 mt-0.5">{member.role}</p>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <Badge variant="outline" className="text-xs">{member.dynasty}</Badge>
            <Badge variant="outline" className="text-xs">{member.emirate}</Badge>
          </div>
          {member.age && (
            <p className="text-xs text-platinum-500 mt-1">Age: {member.age}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <div className="text-lg font-bold text-navy-900 dark:text-platinum-100">{member.uaeRelevance}</div>
          <div className="w-16">
            <Progress value={member.uaeRelevance * 10} className="h-1" />
          </div>
          {getSentimentBadge(member.sentiment)}
          {getAlertBadge(member.alertLevel)}
        </div>
      </div>
      {member.achievements && member.achievements.length > 0 && (
        <div className="mt-3 pt-3 border-t border-platinum-200/30 dark:border-platinum-700/30">
          <p className="text-xs font-medium text-platinum-700 dark:text-platinum-300 mb-1">Key Achievements</p>
          <ul className="space-y-0.5">
            {member.achievements.slice(0, 2).map((a, i) => (
              <li key={i} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1">
                <ChevronRight className="h-3 w-3 mt-0.5 text-navy-500 shrink-0" />
                <span className="truncate">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {member.controversies && member.controversies.length > 0 && (
        <div className="mt-2 pt-2 border-t border-red-200/30 dark:border-red-700/30">
          <p className="text-xs font-medium text-red-700 dark:text-red-300 mb-1">Controversies</p>
          <ul className="space-y-0.5">
            {member.controversies.slice(0, 2).map((c, i) => (
              <li key={i} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1">
                <ChevronRight className="h-3 w-3 mt-0.5 text-red-500 shrink-0" />
                <span>{c.year && `${c.year}: `}{c.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {member.keyFindings && member.keyFindings.length > 0 && (
        <div className="mt-2 pt-2 border-t border-platinum-200/30 dark:border-platinum-700/30">
          <ul className="space-y-0.5">
            {member.keyFindings.slice(0, 2).map((f, i) => (
              <li key={i} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1">
                <ChevronRight className="h-3 w-3 mt-0.5 text-emerald-500 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </GlassCard>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function RoyalFamilyPage() {
  const totalMembers = royalFamilyData.length

  // Sentiment distribution
  const sentimentCounts = royalFamilyData.reduce((acc, e) => {
    acc[e.sentiment] = (acc[e.sentiment] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const sentimentData = Object.entries(sentimentCounts).map(([sentiment, count]) => ({
    name: sentiment.replace(/_/g, ' '),
    value: count,
    color: SENTIMENT_COLORS[sentiment] || '#94a3b8',
  }))

  // Family member counts by emirate for chart
  const emirateChartData = familyMemberCounts.map(f => ({
    name: f.emirate,
    count: f.count,
    color: EMIRATE_COLORS[f.emirate] || CHART_COLORS.platinum,
  }))

  // Relevance score distribution
  const relevanceChartData = [
    { range: '9-10', count: royalFamilyData.filter(m => m.uaeRelevance >= 9).length },
    { range: '7-8', count: royalFamilyData.filter(m => m.uaeRelevance >= 7 && m.uaeRelevance < 9).length },
    { range: '5-6', count: royalFamilyData.filter(m => m.uaeRelevance >= 5 && m.uaeRelevance < 7).length },
    { range: '1-4', count: royalFamilyData.filter(m => m.uaeRelevance < 5).length },
  ]

  // Wealth chart data
  const wealthChartData = [
    { name: 'ADIA', value: 790 },
    { name: 'Al Nahyan Assets', value: 1000 },
    { name: 'Tahnoon Portfolio', value: 1300 },
    { name: 'ADQ', value: 110 },
    { name: 'Mansour Africa', value: 110 },
    { name: 'Ghadan 21', value: 50 },
  ]

  // Sentiment by emirate
  const sentimentByEmirate = emirateOverviews.map(e => {
    const members = royalFamilyData.filter(m => m.emirate === e.emirate)
    const positiveCount = members.filter(m => m.sentiment === 'POSITIVE' || m.sentiment === 'OVERWHELMINGLY_POSITIVE').length
    const total = members.length || 1
    return {
      name: e.emirate,
      positivePercent: Math.round((positiveCount / total) * 100),
      color: EMIRATE_COLORS[e.emirate] || CHART_COLORS.platinum,
    }
  })

  // Filter data by emirate
  const abuDhabiMembers = royalFamilyData.filter(m => m.emirate === 'Abu Dhabi')
  const dubaiMembers = royalFamilyData.filter(m => m.emirate === 'Dubai')
  const sharjahMembers = royalFamilyData.filter(m => m.emirate === 'Sharjah')
  const rakMembers = royalFamilyData.filter(m => m.emirate === 'Ras Al Khaimah')
  const ajmanMembers = royalFamilyData.filter(m => m.emirate === 'Ajman')
  const uaqMembers = royalFamilyData.filter(m => m.emirate === 'Umm Al Quwain')
  const fujairahMembers = royalFamilyData.filter(m => m.emirate === 'Fujairah')
  const otherEmiratesMembers = [...sharjahMembers, ...rakMembers, ...ajmanMembers, ...uaqMembers, ...fujairahMembers]

  // Average relevance by emirate
  const avgRelevanceByEmirate = emirateOverviews.map(e => {
    const members = royalFamilyData.filter(m => m.emirate === e.emirate)
    const avg = members.length > 0
      ? Math.round(members.reduce((sum, m) => sum + m.uaeRelevance, 0) / members.length)
      : 0
    return {
      name: e.emirate,
      avgRelevance: avg,
      color: EMIRATE_COLORS[e.emirate] || CHART_COLORS.platinum,
    }
  })

  // Tier distribution
  const tierCounts = [0, 1, 2, 3, 4].map(tier => ({
    tier: `Tier ${tier}`,
    count: royalFamilyData.filter(m => m.tier === tier).length,
  }))

  // Alert distribution
  const alertCounts = royalFamilyData.reduce((acc, e) => {
    acc[e.alertLevel] = (acc[e.alertLevel] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const alertData = Object.entries(alertCounts).map(([level, count]) => ({
    name: level,
    value: count,
    color: level === 'GREEN' ? '#10b981' : level === 'YELLOW' ? '#f59e0b' : level === 'ORANGE' ? '#f97316' : '#ef4444',
  }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        {...fadeInUp}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="gold" className="mb-2 text-xs font-semibold tracking-wider uppercase">Royal Family</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">
            UAE Royal Family Intelligence
          </h1>
          <p className="mt-2 text-platinum-600 dark:text-platinum-400 text-sm max-w-2xl">
            Comprehensive intelligence on all 7 Emirates ruling families — {totalMembers} documented royal members across 6 ruling dynasties with wealth metrics, sentiment analysis, and relevance scoring.
          </p>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1.5 text-xs text-platinum-500">
              <Calendar className="h-3.5 w-3.5" />
              <span>Updated: {dashboardSummary.lastUpdated}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-platinum-500">
              <Globe2 className="h-3.5 w-3.5" />
              <span>{dashboardSummary.queriesExecuted} queries executed</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-platinum-500">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{dashboardSummary.pagesFetched} pages analyzed</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/30 text-navy hover:bg-navy/10">
            <Globe className="h-4 w-4" />
            Export List
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-white gap-2 shadow-gold-md">
            <Star className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>
      </motion.div>

      {/* Summary Metrics */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={fadeInUp}>
          <GlassCard hover className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-platinum-600 dark:text-platinum-400">Ruling Families</p>
                <p className="mt-2 font-rajdhani text-3xl font-bold text-navy-900 dark:text-platinum-100">{dashboardSummary.rulingFamilies}</p>
                <p className="text-xs text-platinum-500 mt-0.5">6 dynasties across 7 Emirates</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-white shadow-lg">
                <Crown className="h-6 w-6" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <GlassCard hover className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-platinum-600 dark:text-platinum-400">Documented Members</p>
                <p className="mt-2 font-rajdhani text-3xl font-bold text-navy-900 dark:text-platinum-100">{dashboardSummary.totalRulingFamilyMembers}+</p>
                <p className="text-xs text-platinum-500 mt-0.5">Historical & current rulers</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-emerald text-white shadow-lg">
                <Users className="h-6 w-6" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <GlassCard hover className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-platinum-600 dark:text-platinum-400">Bloomberg Ranking</p>
                <p className="mt-2 font-rajdhani text-3xl font-bold text-navy-900 dark:text-platinum-100">{dashboardSummary.bloombergRichFamilyRank}</p>
                <p className="text-xs text-platinum-500 mt-0.5">World&apos;s richest family {dashboardSummary.bloombergRichFamilyRankYear}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-navy text-white shadow-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <GlassCard hover className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-platinum-600 dark:text-platinum-400">Combined Wealth</p>
                <p className="mt-2 font-rajdhani text-3xl font-bold text-navy-900 dark:text-platinum-100">$1T+</p>
                <p className="text-xs text-platinum-500 mt-0.5">Total family wealth estimate</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-platinum text-white shadow-lg">
                <DollarSign className="h-6 w-6" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel flex-wrap h-auto p-1.5 gap-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Overview</TabsTrigger>
          <TabsTrigger value="abudhabi" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Abu Dhabi ({abuDhabiMembers.length})</TabsTrigger>
          <TabsTrigger value="dubai" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Dubai ({dubaiMembers.length})</TabsTrigger>
          <TabsTrigger value="other" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Other Emirates ({otherEmiratesMembers.length})</TabsTrigger>
          <TabsTrigger value="sentiment" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Sentiment</TabsTrigger>
          <TabsTrigger value="wealth" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Wealth</TabsTrigger>
          <TabsTrigger value="leadership" className="data-[state=active]:bg-gradient-gold data-[state=active]:text-white">Leadership</TabsTrigger>
        </TabsList>

        {/* ============================================================================
            OVERVIEW TAB
            ============================================================================ */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {/* Current Rulers */}
            <motion.div {...fadeInUp}>
              <GlassPanel
                title="Current Rulers — All Emirates"
                description="7 Emirates, 6 Ruling Families"
                badge="Active"
                badgeVariant="success"
                icon={<Crown className="h-5 w-5 text-gold-600" />}
              >
                <div className="space-y-3">
                  {currentRulers.map((ruler, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-platinum-200/30 dark:border-platinum-700/30 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">{ruler.emirate}</p>
                        <p className="text-xs text-platinum-500 truncate max-w-[180px]">{ruler.ruler}</p>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <Badge variant="outline" className="text-xs">{ruler.dynasty}</Badge>
                        <p className="text-xs text-platinum-500 mt-0.5">Since {ruler.since}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>

            {/* Crown Princes */}
            <motion.div {...fadeInUp}>
              <GlassPanel
                title="Crown Princes & Heirs"
                description="Next generation leadership"
                badge="Succession"
                badgeVariant="outline"
                icon={<Medal className="h-5 w-5 text-emerald-600" />}
              >
                <div className="space-y-3">
                  {crownPrinces.map((cp, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-platinum-200/30 dark:border-platinum-700/30 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">{cp.emirate}</p>
                        <p className="text-xs text-platinum-500 truncate max-w-[180px]">{cp.crownPrince}</p>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <Badge variant="outline" className="text-xs">{cp.age > 0 ? `Age ${cp.age}` : '—'}</Badge>
                        <p className="text-xs text-platinum-500 mt-0.5">{cp.since}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>

            {/* Key Metrics */}
            <motion.div {...fadeInUp}>
              <GlassPanel
                title="Dashboard Metrics"
                description="Quick reference statistics"
                icon={<Activity className="h-5 w-5 text-navy-600" />}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30">
                    <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">7</p>
                    <p className="text-xs text-platinum-500">Emirates</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30">
                    <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">6</p>
                    <p className="text-xs text-platinum-500">Ruling Families</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30">
                    <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">40+</p>
                    <p className="text-xs text-platinum-500">Historical Rulers</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30">
                    <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">$790B+</p>
                    <p className="text-xs text-platinum-500">ADIA Assets</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 col-span-2">
                    <p className="text-2xl font-bold text-gold-700 dark:text-gold-400">MBZ</p>
                    <p className="text-xs text-platinum-500">Current President — Since May 14, 2022</p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          </div>

          {/* Charts Row */}
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {/* Family Members by Emirate */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-base font-rajdhani font-semibold">Family Members by Emirate</CardTitle>
                <CardDescription className="text-xs">Documented members per ruling family</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={emirateChartData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'count', name: 'Members', color: CHART_COLORS.gold }]}
                  height={220}
                  showGrid={false}
                  showLegend={false}
                />
              </CardContent>
            </Card>

            {/* Sentiment Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-base font-rajdhani font-semibold">Sentiment Distribution</CardTitle>
                <CardDescription className="text-xs">Overall sentiment across all documented members</CardDescription>
              </CardHeader>
              <CardContent>
                {sentimentData.length > 0 ? (
                  <PieChart
                    data={sentimentData}
                    height={220}
                    showLegend={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No data</div>
                )}
              </CardContent>
            </Card>

            {/* Relevance Score Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-base font-rajdhani font-semibold">Relevance Score Distribution</CardTitle>
                <CardDescription className="text-xs">Member count by relevance tier</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={relevanceChartData}
                  xAxisKey="range"
                  bars={[{ dataKey: 'count', name: 'Members', color: CHART_COLORS.navy }]}
                  height={220}
                  showGrid={false}
                  showLegend={false}
                />
              </CardContent>
            </Card>
          </div>

          {/* Emirate Overview Table */}
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Emirate Overview — All 7 Emirates"
              description="Rulers, dynasties, and key achievements"
              icon={<MapPin className="h-5 w-5 text-emerald-600" />}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Emirate</th>
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Dynasty</th>
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Current Ruler</th>
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Age</th>
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Since</th>
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Crown Prince</th>
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Sentiment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emirateOverviews.map((e, i) => (
                      <tr key={i} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                        <td className="py-2 px-3 font-semibold text-navy-900 dark:text-platinum-100">{e.emirate}</td>
                        <td className="py-2 px-3 text-xs text-platinum-600 dark:text-platinum-400">{e.dynasty}</td>
                        <td className="py-2 px-3 text-xs text-platinum-600 dark:text-platinum-400">{e.currentRuler}</td>
                        <td className="py-2 px-3 text-xs text-platinum-600 dark:text-platinum-400">{e.age}</td>
                        <td className="py-2 px-3 text-xs text-platinum-600 dark:text-platinum-400">{e.since}</td>
                        <td className="py-2 px-3 text-xs text-platinum-600 dark:text-platinum-400">{e.crownPrince}</td>
                        <td className="py-2 px-3">{getSentimentBadge(e.sentiment as RoyalFamilyMember['sentiment'])}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ============================================================================
            ABU DHABI TAB
            ============================================================================ */}
        <TabsContent value="abudhabi" className="space-y-6">
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Abu Dhabi — Al Nahyan Family"
              description={`${abuDhabiMembers.length} documented members. Dynasty: Al Nahyan (branch of Al Falahi). Founded 1761.`}
              badge="Abu Dhabi"
              badgeVariant="gold"
              icon={<Building2 className="h-5 w-5 text-gold-600" />}
            >
              <div className="mb-4 p-4 rounded-lg bg-gold-50/50 dark:bg-gold-900/10 border border-gold-200/30 dark:border-gold-700/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-white shrink-0">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold-800 dark:text-gold-300">House of Nahyan — Ruling Dynasty of Abu Dhabi</p>
                    <p className="text-xs text-gold-700 dark:text-gold-400 mt-0.5">Founded 1761 by Dhiyab bin Isa Al Nahyan. Current Head: Sheikh Mohamed bin Zayed Al Nahyan. Total Assets: $1 trillion+. ADIA: world&apos;s 3rd largest SWF.</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {abuDhabiMembers.map((member) => (
              <motion.div key={member.id} {...fadeInUp}>
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>

          {/* Abu Dhabi Ruler Profile */}
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Sheikh Mohamed bin Zayed Al Nahyan (MBZ) — President of UAE"
              description="De facto leader since 2014. Architect of Abraham Accords. Led UAE military modernization."
              badge="President"
              badgeVariant="gold"
              icon={<Crown className="h-5 w-5 text-gold-600" />}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">10/10</p>
                  <p className="text-xs text-platinum-500">UAE Relevance</p>
                </div>
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">65</p>
                  <p className="text-xs text-platinum-500">Age</p>
                </div>
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">2022</p>
                  <p className="text-xs text-platinum-500">President Since</p>
                </div>
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Positive</p>
                  <p className="text-xs text-platinum-500">Sentiment</p>
                </div>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-platinum-800 dark:text-platinum-200 mb-2">Key Achievements</p>
                  <ul className="space-y-1">
                    {['First nuclear power plant in Arab world (Barakah)', 'Key architect of Abraham Accords (2020)', 'Established Masdar renewable energy (2006)', 'Ghadan 21 Program - AED 50 billion (2018)', 'Led UAE "Little Sparta" military buildup'].map((a, i) => (
                      <li key={i} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-500 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-platinum-800 dark:text-platinum-200 mb-2">Wealth & Investments</p>
                  <ul className="space-y-1">
                    {wealthMetrics.slice(0, 4).map((w, i) => (
                      <li key={i} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1.5">
                        <DollarSign className="h-3.5 w-3.5 mt-0.5 text-gold-500 shrink-0" />
                        <span>{w.entity}: <strong>{w.amount}</strong></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ============================================================================
            DUBAI TAB
            ============================================================================ */}
        <TabsContent value="dubai" className="space-y-6">
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Dubai — Al Maktoum Family"
              description={`${dubaiMembers.length} documented members. Dynasty: Al Maktoum (branch of Al Falasi). Founded July 9, 1833.`}
              badge="Dubai"
              badgeVariant="default"
              icon={<Building2 className="h-5 w-5 text-navy-600" />}
            >
              <div className="mb-4 p-4 rounded-lg bg-navy-50/50 dark:bg-navy-900/10 border border-navy-200/30 dark:border-navy-700/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-navy text-white shrink-0">
                    <Crown className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-800 dark:text-navy-300">House of Maktoum — Ruling Dynasty of Dubai</p>
                    <p className="text-xs text-navy-700 dark:text-navy-400 mt-0.5">Founded July 9, 1833 by Maktoum bin Butti. Current Head: Sheikh Mohammed bin Rashid Al Maktoum. Controls Godolphin stable and substantial portions of Dubai government and economy.</p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {dubaiMembers.map((member) => (
              <motion.div key={member.id} {...fadeInUp}>
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>

          {/* Dubai Ruler Profile */}
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Sheikh Mohammed bin Rashid Al Maktoum — Ruler of Dubai"
              description="Vice President, Prime Minister of UAE. Visionary behind Dubai's modern transformation."
              badge="Ruler"
              badgeVariant="default"
              icon={<Crown className="h-5 w-5 text-navy-600" />}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">10/10</p>
                  <p className="text-xs text-platinum-500">UAE Relevance</p>
                </div>
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">76</p>
                  <p className="text-xs text-platinum-500">Age</p>
                </div>
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">2006</p>
                  <p className="text-xs text-platinum-500">Ruler Since</p>
                </div>
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">Mixed</p>
                  <p className="text-xs text-platinum-500">Sentiment</p>
                </div>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-platinum-800 dark:text-platinum-200 mb-2">Major Achievements</p>
                  <ul className="space-y-1">
                    {['Founded Emirates airline (1985)', 'Emirates Mars Mission (Hope) - successful 2021', 'Burj Khalifa and Palm Islands development', 'Created Dubai Internet City and TECOM', 'Dubai World Cup - world\'s richest horserace ($27M prize)'].map((a, i) => (
                      <li key={i} className="text-xs text-platinum-600 dark:text-platinum-400 flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-emerald-500 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-platinum-800 dark:text-platinum-200 mb-2">Space Exploration</p>
                  <div className="p-3 rounded-lg bg-navy-50/50 dark:bg-navy-900/20 border border-navy-200/30 dark:border-navy-700/30">
                    <p className="text-xs text-navy-700 dark:text-navy-300 italic">
                      &ldquo;The Mars mission would send a message of optimism to millions of young Arabs&ldquo;
                    </p>
                    <p className="text-xs text-navy-600 dark:text-navy-400 mt-1">— Sheikh Mohammed bin Rashid Al Maktoum</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-platinum-600 dark:text-platinum-400">Estimated wealth: <strong>$14 billion</strong></p>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ============================================================================
            OTHER EMIRATES TAB
            ============================================================================ */}
        <TabsContent value="other" className="space-y-6">
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Other Emirates — Al Qasimi, Al Nuaimi, Al Mualla, Al Sharqi"
              description={`${otherEmiratesMembers.length} documented members across Sharjah, Ras Al Khaimah, Ajman, Umm Al Quwain, and Fujairah`}
              icon={<MapPin className="h-5 w-5 text-emerald-600" />}
            >
              <div className="grid gap-4 sm:grid-cols-5">
                {emirateOverviews.filter(e => e.emirate !== 'Abu Dhabi' && e.emirate !== 'Dubai').map((e, i) => (
                  <div key={i} className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                    <p className="text-sm font-bold text-navy-900 dark:text-platinum-100">{e.emirate}</p>
                    <Badge variant="outline" className="text-xs mt-1 block">{e.dynasty}</Badge>
                    <p className="text-xs text-platinum-500 mt-1">Age {e.age}</p>
                    <p className="text-xs text-platinum-500">Since {e.since}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {otherEmiratesMembers.map((member) => (
              <motion.div key={member.id} {...fadeInUp}>
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>

          {/* RAK Economic Profile */}
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Ras Al Khaimah — Economic Transformation"
              description="Under Sheikh Saud bin Saqr Al Qasimi: GDP per capita grew from AED 35,000 (2001) to AED 118,621 (2025)"
              badge="RAK"
              badgeVariant="teal"
              icon={<Trophy className="h-5 w-5 text-teal-600" />}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="p-3 rounded-lg bg-teal-50/50 dark:bg-teal-900/20 border border-teal-200/30 dark:border-teal-700/30 text-center">
                  <p className="text-2xl font-bold text-teal-700 dark:text-teal-300">AED 35K → 118K</p>
                  <p className="text-xs text-teal-600 dark:text-teal-400">GDP per capita growth</p>
                </div>
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">10.4%</p>
                  <p className="text-xs text-platinum-500">Gov Debt (2022)</p>
                </div>
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">A/A-1</p>
                  <p className="text-xs text-platinum-500">Credit Rating</p>
                </div>
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">8/10</p>
                  <p className="text-xs text-platinum-500">Avg Relevance</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Sharjah Cultural Profile */}
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Sharjah — Cultural & Academic Hub"
              description="Under Sheikh Sultan bin Muhammad Al Qasimi: 82+ books authored, University of Sharjah, American University of Sharjah"
              badge="Sharjah"
              badgeVariant="emerald"
              icon={<BookOpen className="h-5 w-5 text-emerald-600" />}
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-3 rounded-lg bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-200/30 dark:border-emerald-700/30">
                  <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">82+</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">Books authored by the Ruler</p>
                </div>
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">1972</p>
                  <p className="text-xs text-platinum-500">Ruler Since</p>
                </div>
                <div className="p-3 rounded-lg bg-platinum-50 dark:bg-platinum-800/30 text-center">
                  <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">86</p>
                  <p className="text-xs text-platinum-500">Age</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ============================================================================
            SENTIMENT TAB
            ============================================================================ */}
        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {/* Sentiment by Emirate */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-base font-rajdhani font-semibold">Positive Sentiment by Emirate</CardTitle>
                <CardDescription className="text-xs">Percentage of positive/overwhelmingly positive members</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={sentimentByEmirate}
                  xAxisKey="name"
                  bars={[{ dataKey: 'positivePercent', name: 'Positive %', color: CHART_COLORS.emerald }]}
                  height={260}
                  showGrid={false}
                />
              </CardContent>
            </Card>

            {/* Sentiment Pie */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-base font-rajdhani font-semibold">Sentiment Breakdown</CardTitle>
                <CardDescription className="text-xs">Distribution across all royal members</CardDescription>
              </CardHeader>
              <CardContent>
                {sentimentData.length > 0 ? (
                  <PieChart
                    data={sentimentData}
                    height={260}
                    showLegend={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No data</div>
                )}
              </CardContent>
            </Card>

            {/* Alert Level Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-base font-rajdhani font-semibold">Alert Level Distribution</CardTitle>
                <CardDescription className="text-xs">Risk indicator breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                {alertData.length > 0 ? (
                  <PieChart
                    data={alertData}
                    height={260}
                    showLegend={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No data</div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sentiment by Emirate Table */}
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Sentiment Analysis by Emirate"
              description="Overall sentiment and key factors per emirate"
              icon={<Activity className="h-5 w-5 text-emerald-600" />}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Emirate</th>
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Overall Sentiment</th>
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Key Factors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { emirate: 'Abu Dhabi', sentiment: 'Positive', factors: 'Leadership stability, economic growth, regional influence' },
                      { emirate: 'Dubai', sentiment: 'Mixed', factors: 'Visionary projects, but family human rights concerns' },
                      { emirate: 'Sharjah', sentiment: 'Positive', factors: 'Cultural preservation, education, heritage' },
                      { emirate: 'Ras Al Khaimah', sentiment: 'Positive', factors: 'Economic transformation, development' },
                      { emirate: 'Ajman', sentiment: 'Positive', factors: 'Modernization, stability' },
                      { emirate: 'Umm Al Quwain', sentiment: 'Positive', factors: 'Continuity, development' },
                      { emirate: 'Fujairah', sentiment: 'Positive', factors: 'Regional representation, family ties' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                        <td className="py-2 px-3 font-semibold text-navy-900 dark:text-platinum-100">{row.emirate}</td>
                        <td className="py-2 px-3">
                          {row.sentiment === 'Positive' && <Badge variant="success" className="text-xs">Positive</Badge>}
                          {row.sentiment === 'Mixed' && <Badge variant="warning" className="text-xs">Mixed</Badge>}
                        </td>
                        <td className="py-2 px-3 text-xs text-platinum-600 dark:text-platinum-400">{row.factors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* ============================================================================
            WEALTH TAB
            ============================================================================ */}
        <TabsContent value="wealth" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Wealth Metrics Bar */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-base font-rajdhani font-semibold">Wealth & Assets ($ Billions)</CardTitle>
                <CardDescription className="text-xs">Key wealth metrics from the royal families</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={wealthChartData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: '$ Billions', color: CHART_COLORS.gold }]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Wealth Table */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-base font-rajdhani font-semibold">Wealth Metrics Detail</CardTitle>
                <CardDescription className="text-xs">Detailed breakdown of sovereign wealth and investments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {wealthMetrics.map((w, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-platinum-200/30 dark:border-platinum-700/30 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-navy-900 dark:text-platinum-100">{w.entity}</p>
                        <p className="text-xs text-platinum-500">Source: {w.source}</p>
                      </div>
                      <Badge variant="gold" className="text-xs font-semibold shrink-0 ml-2">{w.amount}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bloomberg Ranking */}
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Bloomberg Rich Family Ranking"
              description="World's richest royal families 2024"
              icon={<Trophy className="h-5 w-5 text-gold-600" />}
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-6 rounded-lg bg-gradient-gold text-white text-center">
                  <p className="text-4xl font-bold">#1</p>
                  <p className="text-sm font-semibold mt-1">House of Saud</p>
                  <p className="text-xs opacity-80">Saudi Arabia</p>
                </div>
                <div className="p-6 rounded-lg bg-gradient-platinum text-white text-center border-2 border-platinum-300">
                  <p className="text-4xl font-bold">#2</p>
                  <p className="text-sm font-semibold mt-1">House of Nahyan</p>
                  <p className="text-xs opacity-80">UAE — Abu Dhabi</p>
                </div>
                <div className="p-6 rounded-lg bg-gradient-navy text-white text-center">
                  <p className="text-4xl font-bold">#3</p>
                  <p className="text-sm font-semibold mt-1">House of Maktoum</p>
                  <p className="text-xs opacity-80">UAE — Dubai</p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Wealth by Emirate Area Chart */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-base font-rajdhani font-semibold">Comparative Wealth Metrics ($ Billions)</CardTitle>
              <CardDescription className="text-xs">ADIA, Al Nahyan assets, Tahnoon portfolio comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <AreaChart
                data={[
                  { name: 'ADIA', value: 790 },
                  { name: 'Al Nahyan', value: 1000 },
                  { name: 'Tahnoon', value: 1300 },
                  { name: 'ADQ', value: 110 },
                  { name: 'Mansour Africa', value: 110 },
                ]}
                areas={[{ dataKey: 'value', name: '$ Billions', color: CHART_COLORS.gold, fillOpacity: 0.5 }]}
                height={300}
                showGrid={true}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* ============================================================================
            LEADERSHIP TAB
            ============================================================================ */}
        <TabsContent value="leadership" className="space-y-6">
          {/* Key Appointments */}
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Key Leadership Appointments"
              description="Recent appointments across UAE federal and emirate levels (2022-2024)"
              icon={<Calendar className="h-5 w-5 text-navy-600" />}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Person</th>
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Position</th>
                      <th className="text-left py-2 px-3 text-platinum-700 dark:text-platinum-300 font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keyLeadershipAppointments.map((appt, i) => (
                      <tr key={i} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                        <td className="py-2 px-3 font-semibold text-navy-900 dark:text-platinum-100">{appt.person}</td>
                        <td className="py-2 px-3 text-xs text-platinum-600 dark:text-platinum-400">{appt.position}</td>
                        <td className="py-2 px-3 text-xs text-platinum-500">{appt.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassPanel>
          </motion.div>

          {/* Major Initiatives */}
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Major Initiatives & Projects"
              description="Key projects and programs led by royal family members"
              icon={<Trophy className="h-5 w-5 text-gold-600" />}
            >
              <div className="grid gap-3">
                {majorInitiatives.map((init, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/20 border border-platinum-200/30 dark:border-platinum-700/30">
                    <div>
                      <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">{init.leader}</p>
                      <p className="text-xs text-platinum-600 dark:text-platinum-400">{init.initiative}</p>
                    </div>
                    <Badge variant="outline" className="text-xs shrink-0 ml-2">{init.amount}</Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Relevance Score Radar */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-base font-rajdhani font-semibold">Emirate Relevance Comparison</CardTitle>
                <CardDescription className="text-xs">Average relevance score by emirate</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={avgRelevanceByEmirate}
                  xAxisKey="name"
                  bars={[{ dataKey: 'avgRelevance', name: 'Avg Relevance', color: CHART_COLORS.navy }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-base font-rajdhani font-semibold">Tier Distribution</CardTitle>
                <CardDescription className="text-xs">Member count by tier level (0-4)</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={tierCounts}
                  xAxisKey="tier"
                  bars={[{ dataKey: 'count', name: 'Members', color: CHART_COLORS.gold }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          {/* Top Relevance Scores */}
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Top Relevance Scores — All Emirates"
              description="Royal members with highest UAE relevance (9-10)"
              icon={<Star className="h-5 w-5 text-gold-600" />}
            >
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {royalFamilyData
                  .filter(m => m.uaeRelevance >= 9)
                  .sort((a, b) => b.uaeRelevance - a.uaeRelevance)
                  .map((member) => (
                    <div key={member.id} className="flex items-center gap-3 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/20 border border-platinum-200/30 dark:border-platinum-700/30">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-white shrink-0">
                        <Crown className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100 truncate">{member.name}</p>
                        <p className="text-xs text-platinum-500 truncate">{member.role}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-sm font-bold text-gold-600">{member.uaeRelevance}/10</span>
                          <div className="w-12">
                            <Progress value={member.uaeRelevance * 10} className="h-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </GlassPanel>
          </motion.div>

          {/* Source Credibility */}
          <motion.div {...fadeInUp}>
            <GlassPanel
              title="Source Credibility Assessment"
              description="Reliability assessment of research sources"
              icon={<Scale className="h-5 w-5 text-navy-600" />}
            >
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {sourceCredibility.map((src, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/20 border border-platinum-200/30 dark:border-platinum-700/30">
                    <div>
                      <p className="text-sm font-semibold text-navy-900 dark:text-platinum-100">{src.sourceType}</p>
                      <p className="text-xs text-platinum-500">{src.count}+ sources</p>
                    </div>
                    <Badge
                      variant={src.credibility === 'Very High' ? 'success' : src.credibility === 'High' ? 'default' : 'warning'}
                      className="text-xs"
                    >
                      {src.credibility}
                    </Badge>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Source credibility data (inline since not exported from data file)
const sourceCredibility = [
  { sourceType: 'Wikipedia', count: 25, credibility: 'High' },
  { sourceType: 'Official websites', count: 5, credibility: 'Very High' },
  { sourceType: 'Britannica', count: 1, credibility: 'High' },
  { sourceType: 'Al Jazeera', count: 1, credibility: 'High' },
  { sourceType: 'Tactical/Media reports', count: 3, credibility: 'Medium-High' },
  { sourceType: 'Government media offices', count: 5, credibility: 'Very High' },
]
