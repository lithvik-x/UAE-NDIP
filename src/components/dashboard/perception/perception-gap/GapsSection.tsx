'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { BarChart } from '@/components/ui/chart-library'
import {
  AlertTriangle,
  TrendingDown,
  Users,
  Leaf,
  Newspaper,
  Scale,
  DollarSign,
  Vote,
  Globe,
  Shield,
  ChevronRight,
} from 'lucide-react'
import { motion } from 'framer-motion'
import type { perceptionGapData } from '@/lib/data/perception/perception-gap-data'

interface GapsSectionProps {
  data: typeof perceptionGapData
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

const gapIcons: Record<string, React.ReactNode> = {
  "Human Rights & Civil Liberties Gap": <AlertTriangle className="h-5 w-5" />,
  "Women's Rights Gap": <Users className="h-5 w-5" />,
  'Migrant Worker Rights Gap': <Users className="h-5 w-5" />,
  'Climate/Environmental Gap': <Leaf className="h-5 w-5" />,
  'Media/Freedom of Expression Gap': <Newspaper className="h-5 w-5" />,
  'Rule of Law/Enforcement Gap': <Scale className="h-5 w-5" />,
  'Economic Inequality Gap': <DollarSign className="h-5 w-5" />,
  'Political Freedom Gap': <Vote className="h-5 w-5" />,
  'Sovereignty/Policy Consistency Gap': <Globe className="h-5 w-5" />,
  'Security/Perception Gap (2026)': <Shield className="h-5 w-5" />,
}

const gapColors: Record<string, string> = {
  'Critical': 'rose',
  'High': 'orange',
}

const sentimentColors: Record<string, string> = {
  'Highly Negative': 'text-rose-400',
  'Negative': 'text-orange-400',
}

export function GapsSection({ data }: GapsSectionProps) {
  if (!data) return null

  // Chart data for gap severity
  const gapSeverityData = data.perceptionGaps?.map((gap) => ({
    name: gap.name.length > 20 ? gap.name.substring(0, 20) + '...' : gap.name,
    value: gap.severity === 'Critical' ? 100 : 70,
    color: gap.severity === 'Critical' ? CHART_COLORS.rose : CHART_COLORS.orange,
  })) || []

  // Chart data for trend
  const trendData = data.perceptionGaps?.map((gap) => {
    let value = 0
    if (gap.trend === 'Worsening') value = 100
    else if (gap.trend === 'Stable Negative') value = 70
    else if (gap.trend === 'Slow Improvement') value = 40
    else value = 50
    return {
      name: gap.name.length > 15 ? gap.name.substring(0, 15) + '...' : gap.name,
      value,
      color: value >= 70 ? CHART_COLORS.rose : value >= 50 ? CHART_COLORS.gold : CHART_COLORS.emerald,
    }
  }) || []

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      {/* Gap Severity Chart */}
      <GlassPanel
        title="All 10 Perception Gaps - Severity Analysis"
        description="Critical vs High severity gaps by category"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <BarChart
            data={gapSeverityData}
            xAxisKey="name"
            bars={[{ dataKey: 'value', name: 'Severity', color: CHART_COLORS.rose }]}
            height={350}
            showGrid={true}
          />
          <BarChart
            data={trendData}
            xAxisKey="name"
            bars={[{ dataKey: 'value', name: 'Trend', color: CHART_COLORS.gold }]}
            height={350}
            showGrid={true}
          />
        </div>
      </GlassPanel>

      {/* Detailed Gap Cards */}
      <GlassPanel
        title="Detailed Gap Analysis"
        description="Self-presentation vs reality for each perception gap"
      >
        <ScrollArea className="h-[600px]">
          <div className="space-y-4 pr-4">
            {data.perceptionGaps?.map((gap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      gap.severity === 'Critical' ? 'bg-rose-500/20 text-rose-400' : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {gapIcons[gap.name] || <AlertTriangle className="h-5 w-5" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-platinum-100">{gap.name}</h4>
                      <p className="text-sm text-platinum-400 mt-1">{gap.selfPresentation}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge
                      variant={gap.severity === 'Critical' ? 'destructive' : 'warning'}
                      className="text-xs"
                    >
                      {gap.severity}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`text-xs ${sentimentColors[gap.sentiment] || 'text-platinum-400'}`}
                    >
                      {gap.sentiment}
                    </Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-2">Key Findings</h5>
                  <ul className="space-y-1">
                    {gap.keyFindings.slice(0, 4).map((finding, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-platinum-300">
                        <ChevronRight className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                        {finding}
                      </li>
                    ))}
                  </ul>
                </div>

                {gap.keyQuotes && gap.keyQuotes.length > 0 && (
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <h5 className="text-xs font-semibold text-platinum-400 uppercase tracking-wide mb-2">Key Quote</h5>
                    <p className="text-sm text-platinum-300 italic">
                      {gap.keyQuotes[0].substring(0, 200)}
                      {gap.keyQuotes[0].length > 200 ? '...' : ''}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-platinum-500">
                      Trend: <span className={gap.trend.includes('Worsening') ? 'text-rose-400' : gap.trend.includes('Improvement') ? 'text-emerald-400' : 'text-platinum-300'}>{gap.trend}</span>
                    </span>
                    <span className="text-xs text-platinum-500">
                      Credibility: <span className="text-platinum-300">{gap.credibility}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>
    </motion.div>
  )
}
