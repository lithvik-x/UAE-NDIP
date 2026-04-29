'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import {
  Shield,
  ShieldCheck,
  Award,
  TrendingUp,
} from 'lucide-react'

interface SafetySectionProps {
  safetyStatistics: Array<{
    metric: string
    value: string
    previous: string
    change: string
    source: string
    tier: number
    uaeRelevance: string
  }>
  safestCitiesRanking: Array<{
    rank: number
    city: string
    country: string
    score: string
    uaeRelevance: string
  }>
  uaeVsGlobalSafety: Array<{
    comparison: string
    uaeAdvantage: string
    source: string
  }>
}

export function SafetySection({ safetyStatistics, safestCitiesRanking, uaeVsGlobalSafety }: SafetySectionProps) {
  return (
    <GlassPanel
      title="Safety & Security Excellence"
      description="UAE's global leadership in safety perceptions and metrics"
      icon={<Shield className="h-5 w-5 text-emerald-400" />}
    >
      <div className="space-y-6">
        {/* Key Safety Metrics */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {safetyStatistics.slice(0, 4).map((stat, idx) => (
            <Card key={idx} className="glass-card border-emerald-500/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400 truncate">{stat.metric}</span>
                  <Badge variant="emerald" className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-3xl font-bold text-emerald-400">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1">Source: {stat.source}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* UAE vs Global Comparison */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">UAE vs Global Safety Benchmarks</CardTitle>
            <CardDescription>How Abu Dhabi compares to major global cities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {uaeVsGlobalSafety.map((comparison, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">{comparison.comparison}</span>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">{comparison.uaeAdvantage}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top 10 Safest Cities */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Global Safest Cities Ranking</CardTitle>
            <CardDescription>UAE dominates with 5 of top 10 cities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {safestCitiesRanking.slice(0, 6).map((city, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    city.country === 'UAE'
                      ? 'bg-emerald-500/10 border border-emerald-500/30'
                      : 'bg-slate-800/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm ${
                        city.rank <= 3
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-700/50 text-slate-300'
                      }`}
                    >
                      #{city.rank}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">{city.city}</p>
                      <p className="text-xs text-slate-400">{city.country}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-200">{city.score}</p>
                    {city.country === 'UAE' && (
                      <Badge variant="emerald" className="text-xs mt-1">
                        UAE
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Score Progress */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Safety Index Scores</CardTitle>
            <CardDescription>Percentage of residents feeling safe walking at night</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {safetyStatistics.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">{stat.metric}</span>
                    <span className="font-bold text-emerald-400">{stat.value}</span>
                  </div>
                  <Progress
                    value={parseFloat(stat.value)}
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}
