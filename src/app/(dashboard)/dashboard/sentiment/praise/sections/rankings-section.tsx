'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Trophy,
  Globe,
  TrendingUp,
  Award,
} from 'lucide-react'

interface RankingsSectionProps {
  globalRankings: Array<{
    rankingIndex: string
    entity: string
    position: string
    score: string
    previous: string
    change: string
    source: string
    tier: number
    year: string
  }>
  topResidenceIndexCountries: Array<{
    rank: string
    country: string
    score: string
    status: string
  }>
  rankingFactors: Array<{
    factor: string
    weight: string
    evidence: string
    sourceVerified: boolean
  }>
}

export function RankingsSection({
  globalRankings,
  topResidenceIndexCountries,
  rankingFactors,
}: RankingsSectionProps) {
  return (
    <GlassPanel
      title="Global Rankings Excellence"
      description="UAE's position among world's top destinations and nations"
    >
      <div className="space-y-6">
        {/* Key Rankings */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="glass-card border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent">
            <CardContent className="p-6 text-center">
              <Trophy className="h-10 w-10 text-amber-400 mx-auto mb-3" />
              <p className="text-sm text-platinum-500-400">Residence Program Index</p>
              <p className="text-4xl font-bold text-amber-400">#2</p>
              <p className="text-xs text-platinum-500-500">Joint 2nd with 72 pts</p>
              <Badge variant="gold" className="mt-2">Rising Star</Badge>
            </CardContent>
          </Card>

          <Card className="glass-card border-amber-500/30">
            <CardContent className="p-6 text-center">
              <Globe className="h-10 w-10 text-amber-400 mx-auto mb-3" />
              <p className="text-sm text-platinum-500-400">World's Best Countries</p>
              <p className="text-4xl font-bold text-amber-400">#17</p>
              <p className="text-xs text-emerald-400 mt-1">+5 from #22</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-amber-500/30">
            <CardContent className="p-6 text-center">
              <Award className="h-10 w-10 text-amber-400 mx-auto mb-3" />
              <p className="text-sm text-platinum-500-400">Smart City Index</p>
              <p className="text-4xl font-bold text-amber-400">#6</p>
              <p className="text-xs text-emerald-400 mt-1">1st in region, +2</p>
            </CardContent>
          </Card>
        </div>

        {/* Top Residence Index Countries */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Global Residence Program Index 2026</CardTitle>
            <CardDescription>Henley & Partners - Top residence programs worldwide</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {topResidenceIndexCountries.map((country, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    country.country === 'UAE'
                      ? 'bg-amber-500/10 border border-amber-500/30'
                      : 'bg-platinum-800/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm ${
                        country.rank.includes('1')
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-platinum-700/50 text-platinum-500-300'
                      }`}
                    >
                      {country.rank}
                    </div>
                    <div>
                      <p className="font-semibold text-platinum-500-200">{country.country}</p>
                      <p className="text-xs text-platinum-500-400">Score: {country.score}</p>
                    </div>
                  </div>
                  <Badge
                    variant={country.country === 'UAE' ? 'gold' : 'secondary'}
                    className="text-xs"
                  >
                    {country.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Ranking Factors */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Key Factors for UAE's Ranking</CardTitle>
            <CardDescription>What drives UAE's top-tier global rankings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {rankingFactors.map((factor, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-platinum-800/30 rounded-lg">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-medium text-platinum-500-200 text-sm">{factor.factor}</p>
                    <p className="text-xs text-emerald-400 mt-1">{factor.evidence}</p>
                    <p className="text-xs text-platinum-500-500">Weight: {factor.weight}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* All Global Rankings */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">All Global Rankings Achievements</CardTitle>
            <CardDescription>Complete list of UAE/Dubai international rankings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {globalRankings.map((ranking, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-platinum-800/30 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-platinum-500-200 text-sm">{ranking.rankingIndex}</p>
                    <p className="text-xs text-platinum-500-400">{ranking.entity} | {ranking.source}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-amber-400">{ranking.position}</p>
                    <p className="text-xs text-emerald-400">{ranking.change}</p>
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
