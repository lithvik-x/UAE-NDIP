'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Progress } from '@/components/ui/progress'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { BarChart, PieChart } from '@/components/ui/chart-library'
import { TrendingUp, DollarSign, Activity, Users, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import type { instagramIntelligenceData } from '@/lib/data/instagram-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

interface InstagramMarketSectionProps {
  data: typeof instagramIntelligenceData
}

export function InstagramMarketSection({ data }: InstagramMarketSectionProps) {
  const { marketSize, sectorBreakdown, contentCreatorEconomy, marketingAgencies } = data

  const marketProjectionData = marketSize
    .filter((m: { market: string; currentValue: string; projectedValue: string; year: string; cagr: string; source: string }) => m.currentValue.includes('$') || m.currentValue.includes('AED'))
    .slice(0, 6)
    .map((m: { market: string; currentValue: string; projectedValue: string }) => ({
      market: m.market.split(' ')[0].substring(0, 15),
      current: parseFloat(m.currentValue.replace(/[^0-9.]/g, '')) || 0,
      projected: parseFloat(m.projectedValue.replace(/[^0-9.]/g, '')) || 0,
    }))

  const sectorData = sectorBreakdown.map((s: { sector: string; marketShare: string }, idx: number) => ({
    name: s.sector.split(' ')[0],
    value: parseInt(s.marketShare),
    color: [CHART_COLORS.purple, CHART_COLORS.gold, CHART_COLORS.info][idx % 3],
  }))

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Market Analysis"
        description="UAE influencer marketing market size, projections, and growth rates"
      >
        <div className="space-y-6">
          {/* Market Projections Chart */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple" />
                Market Projections
              </CardTitle>
              <CardDescription>UAE Influencer marketing market growth (USD millions)</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={marketProjectionData}
                xAxisKey="market"
                bars={[
                  { dataKey: 'current', name: 'Current ($M)', color: CHART_COLORS.purple },
                  { dataKey: 'projected', name: 'Projected ($M)', color: CHART_COLORS.gold },
                ]}
                height={280}
                showGrid={true}
              />
            </CardContent>
          </Card>

          {/* CAGR Comparison */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-emerald" />
                Growth Rates (CAGR)
              </CardTitle>
              <CardDescription>Compound annual growth rates by segment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketSize.filter((m: { market: string; currentValue: string; projectedValue: string; year: string; cagr: string; source: string }) => m.cagr && m.cagr !== '-').map((market: { market: string; currentValue: string; projectedValue: string; year: string; cagr: string }, idx: number) => (
                  <div key={idx} className="p-4 rounded-lg bg-platinum-800/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">{market.market}</span>
                      <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                        {market.cagr} CAGR
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-platinum/50 mb-2">
                      <span>{market.currentValue} → {market.projectedValue}</span>
                      <span>{market.year}</span>
                    </div>
                    <Progress
                      value={parseFloat(market.cagr.replace(/[^0-9.]/g, '')) * 5}
                      className="h-1"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sector Breakdown */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg">Sector Breakdown</CardTitle>
                <CardDescription>GCC Influencer market by sector</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sectorData}
                  height={220}
                  showLegend={true}
                />
                <div className="mt-4 space-y-2">
                  {sectorBreakdown.map((sector: { sector: string; marketShare: string }, idx: number) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-platinum/70">{sector.sector}</span>
                      <span className="text-sm font-medium text-white">{sector.marketShare}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Content Creator Economy */}
            <Card className="glass-card border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-gold" />
                  Content Creator Economy
                </CardTitle>
                <CardDescription>GCC influencer statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentCreatorEconomy.map((item: { metric: string; value: string; source: string }, idx: number) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/30">
                      <span className="text-sm text-platinum-200">{item.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gold">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Marketing Agencies */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Top Marketing Agencies</CardTitle>
              <CardDescription>Dubai social media agencies (2025-2026)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {marketingAgencies.map((agency: { agency: string; website: string; specialty: string }, idx: number) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-platinum-800/30">
                    <div>
                      <h4 className="text-sm font-medium text-white">{agency.agency}</h4>
                      <p className="text-xs text-platinum-400">{agency.specialty}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-platinum/50" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Market Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="glass-card border-purple-500/30">
              <CardContent className="pt-4">
                <DollarSign className="h-8 w-8 text-gold mb-2" />
                <p className="text-2xl font-bold text-white">$173M</p>
                <p className="text-xs text-platinum-400">UAE Influencer Market (2025)</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-purple-500/30">
              <CardContent className="pt-4">
                <TrendingUp className="h-8 w-8 text-emerald mb-2" />
                <p className="text-2xl font-bold text-white">11%</p>
                <p className="text-xs text-platinum-400">CAGR through 2034</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-purple-500/30">
              <CardContent className="pt-4">
                <Users className="h-8 w-8 text-purple mb-2" />
                <p className="text-2xl font-bold text-white">263K</p>
                <p className="text-xs text-platinum-400">GCC Total Influencers</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-purple-500/30">
              <CardContent className="pt-4">
                <Activity className="h-8 w-8 text-rose mb-2" />
                <p className="text-2xl font-bold text-white">43.7%</p>
                <p className="text-xs text-platinum-400">Virtual Influencer CAGR</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
