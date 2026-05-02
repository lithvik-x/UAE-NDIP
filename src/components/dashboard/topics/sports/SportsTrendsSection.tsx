'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, BarChart } from '@/components/ui/chart-library'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { TrendingUp, Trophy, Award, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import type {
  ProLeagueStandingDashboard,
  TopScorerDashboard,
  NBAPartnershipDashboard,
} from '@/lib/data/topics/sports-data'

interface SportsTrendsSectionProps {
  leagueStandings: ProLeagueStandingDashboard[]
  scorers: TopScorerDashboard[]
  nbaData: NBAPartnershipDashboard[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function SportsTrendsSection({
  leagueStandings,
  scorers,
  nbaData,
}: SportsTrendsSectionProps) {
  const brandTrendData = [
    { month: 'Jan', sentiment: 62, reach: 85 },
    { month: 'Feb', sentiment: 63, reach: 88 },
    { month: 'Mar', sentiment: 64, reach: 90 },
    { month: 'Apr', sentiment: 65, reach: 92 },
    { month: 'May', sentiment: 66, reach: 95 },
    { month: 'Jun', sentiment: 67, reach: 98 },
    { month: 'Jul', sentiment: 68, reach: 100 },
    { month: 'Aug', sentiment: 68, reach: 102 },
    { month: 'Sep', sentiment: 69, reach: 105 },
    { month: 'Oct', sentiment: 69, reach: 108 },
    { month: 'Nov', sentiment: 70, reach: 110 },
    { month: 'Dec', sentiment: 70, reach: 112 },
  ]

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-6"
    >
      <motion.div variants={fadeInUp}>
        <GlassPanel
          title="Sports Brand Trends"
          description="UAE sports brand performance over time"
        >
          <div className="space-y-6">
            {/* Brand Sentiment & Reach Chart */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Brand Sentiment & Reach</CardTitle>
                <CardDescription>12-month trend analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={brandTrendData}
                  xAxisKey="month"
                  lines={[
                    { dataKey: 'sentiment', name: 'Sentiment Score', color: CHART_COLORS.gold },
                    {
                      dataKey: 'reach',
                      name: 'Media Reach (Index)',
                      color: CHART_COLORS.navy,
                    },
                  ]}
                  height={350}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Pro League + Top Scorers */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-gold-700" />
                    UAE Pro League Standings
                  </CardTitle>
                  <CardDescription>2024-25 Season Top 5</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {leagueStandings.map((team, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-2 rounded-lg bg-platinum-800/50"
                      >
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                            index === 0
                              ? 'bg-gold text-navy-950'
                              : index < 3
                                ? 'bg-platinum/30 text-platinum-500'
                                : 'bg-platinum-600/30 text-platinum-400'
                          }`}
                        >
                          {team.pos}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-platinum-200">{team.team}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-gold-700">{team.pts}</span>
                          <span className="text-xs text-platinum-400 ml-2">pts</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold-700" />
                    Top Scorers 2024-25
                  </CardTitle>
                  <CardDescription>UAE Pro League</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {scorers.map((scorer, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-2 rounded-lg bg-platinum-800/50"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-700/20 text-gold-700 text-xs font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-platinum-200">{scorer.player}</p>
                          <p className="text-xs text-platinum-400">{scorer.club}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-gold-700">{scorer.goals}</span>
                          <span className="text-xs text-platinum-400 ml-1">goals</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* NBA UAE Partnership */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-gold-700" />
                  NBA UAE Partnership
                </CardTitle>
                <CardDescription>Key metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {nbaData.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3 text-center"
                    >
                      <div className="text-2xl font-bold text-gold-700">{item.value}</div>
                      <p className="text-sm text-platinum-400 mt-1">{item.item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}
