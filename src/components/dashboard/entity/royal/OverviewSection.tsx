'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { GlassCard, GlassPanel } from '@/components/ui/glass-panel'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Crown,
  Medal,
  Activity,
  MapPin,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'
import type {
  RoyalFamilyMember,
  RulerData,
  CrownPrinceData,
  EmirateOverview,
} from '@/lib/data/entity/royal-family-data'

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

interface OverviewSectionProps {
  royalFamilyData: RoyalFamilyMember[]
  dashboardSummary: {
    rulingFamilies: number
    totalRulingFamilyMembers: number
    bloombergRichFamilyRank: string
    bloombergRichFamilyRankYear: string
    lastUpdated: string
    queriesExecuted: number
    pagesFetched: number
  }
  currentRulers: RulerData[]
  crownPrinces: CrownPrinceData[]
  emirateOverviews: EmirateOverview[]
  familyMemberCounts: { emirate: string; count: number }[]
  wealthMetrics: { entity: string; amount: string; source: string }[]
}

export function OverviewSection({
  royalFamilyData,
  dashboardSummary,
  currentRulers,
  crownPrinces,
  emirateOverviews,
  familyMemberCounts,
}: OverviewSectionProps) {
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

  return (
    <div className="space-y-6">
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
    </div>
  )
}
