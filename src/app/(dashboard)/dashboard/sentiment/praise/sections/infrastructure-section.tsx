// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import {
  Map,
  Train,
  Plane,
  Trophy,
  TrendingUp,
  Route,
} from 'lucide-react'

interface InfrastructureSectionProps {
  infrastructureRankings: Array<{
    category: string
    ranking: string
    score: string
    previousRank: string
    change: string
    source: string
    tier: number
    uaeRelevance: string
  }>
  topRoadQualityCountries: Array<{
    rank: number
    country: string
    region: string
  }>
  dubaiMetroMetrics: Array<{
    metric: string
    value: string
    previous: string
    change: string
    source: string
  }>
  topDriverlessMetroSystems: Array<{
    rank: number
    metro: string
    country: string
    length: string
    status: string
  }>
}

export function InfrastructureSection({
  infrastructureRankings,
  topRoadQualityCountries,
  dubaiMetroMetrics,
  topDriverlessMetroSystems,
}: InfrastructureSectionProps) {
  return (
    <GlassPanel
      title="Infrastructure Excellence"
      description="World-class infrastructure rankings and metro achievements"
    >
      <div className="space-y-6">
        {/* Key Rankings */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="glass-card border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent">
            <CardContent className="p-6 text-center">
              <Trophy className="h-10 w-10 text-violet-400 mx-auto mb-3" />
              <p className="text-sm text-platinum-400">Road Quality Global Rank</p>
              <p className="text-4xl font-bold text-violet-400">#4</p>
              <p className="text-xs text-emerald-400 mt-1">+3 from last year</p>
              <Badge variant="purple" className="mt-2">Top 5 Globally</Badge>
            </CardContent>
          </Card>

          <Card className="glass-card border-violet-500/30">
            <CardContent className="p-6 text-center">
              <Route className="h-10 w-10 text-violet-400 mx-auto mb-3" />
              <p className="text-sm text-platinum-400">Arab World Rank</p>
              <p className="text-4xl font-bold text-violet-400">#1</p>
              <p className="text-xs text-platinum-500 mt-1">Land Transport Score: 5.26/7</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-violet-500/30">
            <CardContent className="p-6 text-center">
              <Train className="h-10 w-10 text-violet-400 mx-auto mb-3" />
              <p className="text-sm text-platinum-400">Dubai Metro Length</p>
              <p className="text-4xl font-bold text-violet-400">101 km</p>
              <p className="text-xs text-emerald-400 mt-1">+26.4 km expansion</p>
            </CardContent>
          </Card>
        </div>

        {/* Top Road Quality Countries */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Top 5 Road Quality Rankings</CardTitle>
            <CardDescription>WEF TTDI 2024 - UAE ranked 4th globally</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {topRoadQualityCountries.map((country, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    country.country === 'UAE'
                      ? 'bg-violet-500/10 border border-violet-500/30'
                      : 'bg-platinum-800/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm ${
                        country.rank <= 3
                          ? 'bg-violet-500/20 text-violet-400'
                          : 'bg-platinum-700/50 text-platinum-300'
                      }`}
                    >
                      #{country.rank}
                    </div>
                    <div>
                      <p className="font-semibold text-platinum-200">{country.country}</p>
                      <p className="text-xs text-platinum-400">{country.region}</p>
                    </div>
                  </div>
                  {country.country === 'UAE' && (
                    <Badge variant="purple" className="text-xs">
                      UAE
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dubai Metro Stats */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Dubai Metro - World's Longest Driverless Metro</CardTitle>
            <CardDescription>Operational metrics and expansion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dubaiMetroMetrics.slice(0, 5).map((metric, idx) => (
                <div key={idx} className="bg-platinum-800/30 rounded-lg p-3">
                  <p className="text-xs text-platinum-400">{metric.metric}</p>
                  <p className="text-xl font-bold text-violet-400">{metric.value}</p>
                  {metric.change !== 'N/A' && metric.change !== 'Stable' && (
                    <p className="text-xs text-emerald-400">{metric.change}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Global Metro Rankings */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Global Driverless Metro Systems</CardTitle>
            <CardDescription>World's longest fully automated metro networks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {topDriverlessMetroSystems.map((metro, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    metro.country === 'UAE'
                      ? 'bg-violet-500/10 border border-violet-500/30'
                      : 'bg-platinum-800/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm ${
                        metro.rank <= 2
                          ? 'bg-violet-500/20 text-violet-400'
                          : 'bg-platinum-700/50 text-platinum-300'
                      }`}
                    >
                      #{metro.rank}
                    </div>
                    <div>
                      <p className="font-semibold text-platinum-200">{metro.metro}</p>
                      <p className="text-xs text-platinum-400">{metro.country}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-violet-400">{metro.length}</p>
                    <p className="text-xs text-emerald-400">{metro.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}
