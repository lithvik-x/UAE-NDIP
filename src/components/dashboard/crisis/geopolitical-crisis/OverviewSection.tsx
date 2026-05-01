'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  Globe,
  Database,
  Map,
  Heart,
  Siren,
  Search,
  Activity,
  Target,
  Crosshair,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  statisticsDashboard,
  sourceTierDistribution,
  relevanceScores,
  regionalSentiment,
  aidCommitments,
  goldImports,
} from '@/lib/data/crisis/geopolitical-crisis-data'

interface OverviewSectionProps {
  className?: string
}

export function OverviewSection({ className }: OverviewSectionProps) {
  // Aid pie chart data
  const aidPieData = [
    { name: 'Yemen Humanitarian', value: 8, color: CHART_COLORS.rose },
    { name: 'Yemen Development', value: 7, color: CHART_COLORS.orange },
    { name: 'Syria Reconstruction', value: 28, color: CHART_COLORS.navy },
    { name: 'Gaza Reconstruction', value: 1, color: CHART_COLORS.teal },
  ]

  // Gold trade data (filtered)
  const goldTradeData = goldImports
    .filter((g: { year: string }) => g.year !== 'H1 2025')
    .map((g: { year: string; russia?: number; sudan?: number | string }) => ({
      year: g.year,
      russia: g.russia ?? 0,
      sudan: typeof g.sudan === 'number' ? g.sudan : 0,
    }))

  // Relevance chart data
  const relevanceChartData = relevanceScores.map((r: { topic: string; score: number }) => ({
    topic: r.topic.length > 20 ? r.topic.substring(0, 20) + '...' : r.topic,
    score: r.score,
  }))

  return (
    <div className={className}>
      <GlassPanel
        title="Geopolitical Crisis Overview"
        description="UAE regional conflict involvement summary (MD 4-2)"
      >
        <div className="space-y-6">
          {/* Conflict Sentiment + Aid Distribution */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5 text-rose-400" />
                  Conflict Sentiment Intensity
                </CardTitle>
                <CardDescription>Sentiment by region (-10 to +10 scale)</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={regionalSentiment}
                  xAxisKey="country"
                  bars={[{ dataKey: 'intensity', name: 'Intensity', color: CHART_COLORS.rose }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-rose-400" />
                  UAE Aid Distribution ($ Billions)
                </CardTitle>
                <CardDescription>Foreign aid by recipient (2015-2026)</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart data={aidPieData} height={280} showLegend={true} />
              </CardContent>
            </Card>
          </div>

          {/* Gold Trade Volume */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Crosshair className="h-5 w-5 text-gold-400" />
                UAE Gold Import Volumes (Tonnes)
              </CardTitle>
              <CardDescription>Russia & Sudan gold imports via UAE (2022-2024)</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={goldTradeData}
                xAxisKey="year"
                bars={[
                  { dataKey: 'russia', name: 'Russia', color: CHART_COLORS.platinum },
                  { dataKey: 'sudan', name: 'Sudan', color: CHART_COLORS.gold },
                ]}
                height={280}
                showGrid={true}
              />
            </CardContent>
          </Card>

          {/* Relevance Scores */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-orange-400" />
                UAE Relevance Assessment (Critical Issues)
              </CardTitle>
              <CardDescription>Strategic importance scores by topic (1-10)</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={relevanceChartData}
                xAxisKey="topic"
                bars={[{ dataKey: 'score', name: 'Score', color: CHART_COLORS.orange }]}
                height={280}
                showGrid={true}
              />
            </CardContent>
          </Card>

          {/* Source Tier Distribution */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Crosshair className="h-5 w-5 text-navy-500-400" />
                Source Credibility Distribution
              </CardTitle>
              <CardDescription>Research sources by tier (30+ domains)</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart data={sourceTierDistribution.map(s => ({ name: s.tier, value: s.count, color: s.color }))} height={250} showLegend={true} />
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </div>
  )
}
