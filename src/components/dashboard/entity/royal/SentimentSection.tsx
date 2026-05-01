'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/ui/glass-panel'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Activity } from 'lucide-react'
import type { RoyalFamilyMember } from '@/lib/data/entity/royal-family-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
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

interface SentimentSectionProps {
  royalFamilyData: RoyalFamilyMember[]
  emirateOverviews: { emirate: string; dynasty: string; currentRuler: string; age: number; since: string; crownPrince: string; crownPrinceAge: number; crownPrinceSince: string; sentiment: string; keyAchievements: string[] }[]
}

export function SentimentSection({
  royalFamilyData,
  emirateOverviews,
}: SentimentSectionProps) {
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

  const sentimentFactors: Record<string, string> = {
    'Abu Dhabi': 'Leadership stability, economic growth, regional influence',
    'Dubai': 'Visionary projects, but family human rights concerns',
    'Sharjah': 'Cultural preservation, education, heritage',
    'Ras Al Khaimah': 'Economic transformation, development',
    'Ajman': 'Modernization, stability',
    'Umm Al Quwain': 'Continuity, development',
    'Fujairah': 'Regional representation, family ties',
  }

  return (
    <div className="space-y-6">
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
                {emirateOverviews.map((row, i) => (
                  <tr key={i} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                    <td className="py-2 px-3 font-semibold text-navy-900 dark:text-platinum-100">{row.emirate}</td>
                    <td className="py-2 px-3">
                      <Badge
                        variant={row.sentiment === 'Positive' || row.sentiment === 'OVERWHELMINGLY_POSITIVE' ? 'success' : row.sentiment === 'Mixed' ? 'warning' : 'secondary'}
                        className="text-xs"
                      >
                        {row.sentiment}
                      </Badge>
                    </td>
                    <td className="py-2 px-3 text-xs text-platinum-600 dark:text-platinum-400">
                      {sentimentFactors[row.emirate] || 'N/A'}
                    </td>
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
