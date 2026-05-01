'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { BarChart, PieChart } from '@/components/ui/chart-library'
import {
  AlertTriangle,
  Users,
  Leaf,
  Newspaper,
  Scale,
  DollarSign,
  Vote,
  Globe,
  Shield,
} from 'lucide-react'
import { motion } from 'framer-motion'
import type { perceptionGapData } from '@/lib/data/perception/perception-gap-data'

interface MetricsSectionProps {
  data: typeof perceptionGapData
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

export function MetricsSection({ data }: MetricsSectionProps) {
  if (!data) return null

  // Freedom scores chart data
  const freedomScoresData = data.freedomScores?.map((score) => ({
    name: score.index.length > 20 ? score.index.substring(0, 20) + '...' : score.index,
    value: score.score,
    max: score.max,
    color: score.score < 40 ? CHART_COLORS.rose : score.score < 60 ? CHART_COLORS.gold : CHART_COLORS.emerald,
  })) || []

  // Human rights stats chart
  const humanRightsData = [
    { name: 'Modern Slavery', value: 132, color: CHART_COLORS.rose },
    { name: 'CCTV Cameras', value: 300, color: CHART_COLORS.orange },
    { name: 'Dissidents (UAE94)', value: 69, color: CHART_COLORS.rose },
    { name: 'UN Visits Ignored', value: 9, color: CHART_COLORS.gold },
    { name: 'Torture Methods', value: 16, color: CHART_COLORS.orange },
  ]

  // Migrant worker data
  const migrantWorkerData = [
    { name: 'Total Workers', value: 8.7, color: CHART_COLORS.navy },
    { name: '% of Population', value: 88, color: CHART_COLORS.teal },
  ]

  // Political liberties radar-like data
  const politicalLibertiesData = data.politicalCivilLiberties?.map((item) => ({
    name: item.category,
    value: Math.round((item.score / item.max) * 100),
    color: item.score < 4 ? CHART_COLORS.rose : item.score < 8 ? CHART_COLORS.gold : CHART_COLORS.emerald,
  })) || []

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      {/* Freedom Scores */}
      <GlassPanel
        title="Freedom Scores"
        description="UAE scores across international freedom indices"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <BarChart
            data={freedomScoresData}
            xAxisKey="name"
            bars={[{ dataKey: 'value', name: 'Score', color: CHART_COLORS.rose }]}
            height={300}
            showGrid={true}
          />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-platinum-300">Score Breakdown</h4>
            <div className="space-y-3">
              {data.freedomScores?.map((score, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-platinum-400">{score.index}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${
                      score.score < 40 ? 'text-rose-400' : score.score < 60 ? 'text-yellow-400' : 'text-emerald-400'
                    }`}>
                      {score.score}/{score.max}
                    </span>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        score.status === 'Not Free' ? 'border-rose-500/50 text-rose-400' :
                        score.status === '160/180' ? 'border-rose-500/50 text-rose-400' :
                        'border-yellow-500/50 text-yellow-400'
                      }`}
                    >
                      {score.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>

      {/* Human Rights Statistics */}
      <GlassPanel
        title="Human Rights Statistics"
        description="Key human rights metrics and violations"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <BarChart
            data={humanRightsData}
            xAxisKey="name"
            bars={[{ dataKey: 'value', name: 'Count', color: CHART_COLORS.rose }]}
            height={280}
            showGrid={true}
          />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-platinum-300">Key Statistics</h4>
            <ScrollArea className="h-[240px]">
              <div className="space-y-3 pr-4">
                {data.humanRightsStats?.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/30 p-3">
                    <span className="text-sm text-platinum-300">{stat.metric}</span>
                    <div className="text-right">
                      <span className="text-lg font-bold text-rose-400">{stat.value}</span>
                      <span className="text-xs text-platinum-500 ml-2">{stat.source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </GlassPanel>

      {/* Migrant Worker Stats */}
      <GlassPanel
        title="Migrant Worker Statistics"
        description="8.7 million migrant workers - 88% of population"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <PieChart
            data={migrantWorkerData}
            height={280}
            showLegend={true}
          />

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-platinum-300">Worker Nationalities</h4>
            <div className="space-y-3">
              {[
                { nationality: 'Indian', count: '3.5M', color: 'bg-orange-500' },
                { nationality: 'Bangladeshi', count: '1+M', color: 'bg-emerald-500' },
                { nationality: 'Pakistani', count: '950K', color: 'bg-navy' },
                { nationality: 'Egyptian', count: '710K', color: 'bg-gold' },
                { nationality: 'Filipino', count: '470K', color: 'bg-cyan-500' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-sm text-platinum-300 flex-1">{item.nationality}</span>
                  <span className="text-sm font-bold text-platinum-100">{item.count}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center rounded-lg bg-slate-800/50 p-3">
                  <div className="text-2xl font-bold text-rose-400">132,000</div>
                  <div className="text-xs text-platinum-400">In Modern Slavery</div>
                </div>
                <div className="text-center rounded-lg bg-slate-800/50 p-3">
                  <div className="text-2xl font-bold text-yellow-400">0/100</div>
                  <div className="text-xs text-platinum-400">Supply Chain Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassPanel>

      {/* Political & Civil Liberties */}
      <GlassPanel
        title="Political & Civil Liberties Scores"
        description="Freedom House 2024 assessment breakdown"
      >
        <BarChart
          data={politicalLibertiesData}
          xAxisKey="name"
          bars={[{ dataKey: 'value', name: 'Score %', color: CHART_COLORS.rose }]}
          height={350}
          showGrid={true}
        />
      </GlassPanel>

      {/* Women Rights Indicators */}
      <GlassPanel
        title="Women's Rights Indicators"
        description="Key metrics for women's rights and equality"
      >
        <ScrollArea className="h-[300px]">
          <div className="space-y-3 pr-4">
            {data.womenRightsIndicators?.map((indicator, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/30 p-4">
                <span className="text-sm text-platinum-300">{indicator.metric}</span>
                <Badge
                  variant={indicator.value === 'Yes' ? 'destructive' : indicator.value === 'No' ? 'outline' : 'default'}
                  className={`text-xs ${
                    indicator.value === 'Yes' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' :
                    indicator.value === 'No' ? 'border-yellow-500/50 text-yellow-400' :
                    'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                  }`}
                >
                  {indicator.value}
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>
    </motion.div>
  )
}
