'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { PieChart } from '@/components/ui/chart-library'
import {
  Shield,
  Building2,
  Globe,
  Users,
  Smartphone,
  Award,
} from 'lucide-react'

interface SourceCredibilityEntry {
  source: string
  tier: number
  type: string
  credibilityScore: number
}

interface SourceTierDistribution {
  tier: number
  count: number
  percentage: number
}

interface SourceCredibilitySectionProps {
  sourceCredibilityMatrix: SourceCredibilityEntry[]
  sourceTierDistribution: SourceTierDistribution[]
}

const tierLabels: Record<number, { name: string; icon: React.ElementType; description: string }> = {
  0: { name: 'Government/Official', icon: Building2, description: 'WAM, Central Bank UAE, BTI Project, World Bank' },
  1: { name: 'Major Established Media', icon: Globe, description: 'BBC, CNN' },
  2: { name: 'Regional/Industry Authority', icon: Award, description: 'Gulf News, Khaleej Times, The National' },
  3: { name: 'Specialized/NGO', icon: Shield, description: 'Freedom House, RSF, Human Rights Watch' },
  4: { name: 'Social/Personal', icon: Smartphone, description: 'Instagram, TikTok, Reddit, Facebook' },
}

const tierColors: Record<number, string> = {
  0: CHART_COLORS.navy,
  1: CHART_COLORS.denim,
  2: CHART_COLORS.info,
  3: CHART_COLORS.purple,
  4: CHART_COLORS.fuchsia,
}

export function SourceCredibilitySection({
  sourceCredibilityMatrix,
  sourceTierDistribution,
}: SourceCredibilitySectionProps) {
  const pieChartData = sourceTierDistribution.map((item) => ({
    name: `Tier ${item.tier}`,
    value: item.count,
    color: tierColors[item.tier],
  }))

  return (
    <GlassPanel
      title="Source Credibility Matrix"
      description="Tier-based source classification for emotion research data"
      icon={<Shield className="h-5 w-5 text-info" />}
    >
      <div className="space-y-6">
        {/* Tier Distribution Chart */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Tier Distribution</CardTitle>
              <CardDescription>Source distribution by credibility tier</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart
                data={pieChartData}
                height={250}
              />
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Tier Definitions</CardTitle>
              <CardDescription>Classification criteria for sources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sourceTierDistribution.map((item) => {
                  const tier = tierLabels[item.tier]
                  if (!tier) return null
                  const Icon = tier.icon

                  return (
                    <div
                      key={item.tier}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50"
                    >
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${tierColors[item.tier]}20` }}
                      >
                        <Icon className="h-4 w-4" style={{ color: tierColors[item.tier] }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-200">Tier {item.tier}: {tier.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {item.count} sources ({item.percentage}%)
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{tier.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Sources by Tier */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Key Sources by Tier</CardTitle>
            <CardDescription>Highest credibility sources in each category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[0, 1, 2, 3, 4].map((tier) => {
                const tierSources = sourceCredibilityMatrix.filter((s) => s.tier === tier)
                const tierInfo = tierLabels[tier]
                if (!tierInfo) return null

                return (
                  <div key={tier} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge
                        style={{ backgroundColor: `${tierColors[tier]}20`, color: tierColors[tier] }}
                        className="text-xs"
                      >
                        Tier {tier}
                      </Badge>
                      <span className="text-sm text-slate-400">{tierInfo.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tierSources.slice(0, 6).map((source) => (
                        <Badge key={source.source} variant="outline" className="text-xs">
                          {source.source} ({source.credibilityScore}/10)
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </GlassPanel>
  )
}
