'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { PieChart } from '@/components/ui/chart-library'
import { AlertTriangle, TrendingUp, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import type {
  SportswashingSentiment,
  SportsInvestmentSentiment,
  GovernanceReformSentiment,
} from '@/lib/data/topics/sports-data'

interface SportsSentimentSectionProps {
  sportswashingSentimentAnalysis: SportswashingSentiment[]
  sportsInvestmentSentimentAnalysis: SportsInvestmentSentiment[]
  governanceReformSentimentAnalysis: GovernanceReformSentiment[]
  emiratesSponsorshipDashboard: { teamCompetition: string; since: string; status: string }[]
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

export function SportsSentimentSection({
  sportswashingSentimentAnalysis,
  sportsInvestmentSentimentAnalysis,
  governanceReformSentimentAnalysis,
  emiratesSponsorshipDashboard,
}: SportsSentimentSectionProps) {
  const sentimentData = [
    { name: 'Positive (UAE Gov/PwC)', value: 55, color: CHART_COLORS.emerald },
    { name: 'Neutral (Sports Analysts)', value: 25, color: CHART_COLORS.platinum },
    { name: 'Critical (HRW/Sentry)', value: 20, color: CHART_COLORS.danger },
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
          title="Sports Sentiment Analysis"
          description="Public perception tracking across stakeholders"
        >
          <div className="space-y-6">
            {/* Sentiment Distribution */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Overall Sentiment Distribution</CardTitle>
                  <CardDescription>UAE sports brand perception</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={sentimentData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment by Perspective</CardTitle>
                  <CardDescription>Per-stakeholder perception</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sportsInvestmentSentimentAnalysis.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-200">
                            {item.perspective}
                          </span>
                          <span
                            className={`text-sm font-bold ${
                              item.sentiment === 'Positive'
                                ? 'text-emerald-400'
                                : item.sentiment === 'Negative'
                                  ? 'text-red-400'
                                  : 'text-yellow-400'
                            }`}
                          >
                            {item.sentiment}
                          </span>
                        </div>
                        <Progress
                          value={
                            item.sentiment === 'Positive'
                              ? 70
                              : item.sentiment === 'Negative'
                                ? 30
                                : 50
                          }
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Critical Narrative Tracking */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  Critical Narrative Tracking
                </CardTitle>
                <CardDescription>Sportswashing criticism sources</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  <div className="space-y-4">
                    {sportswashingSentimentAnalysis.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-red-900/50 bg-red-900/20 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-red-400">{item.source}</span>
                          <Badge variant="destructive">{item.sentiment}</Badge>
                        </div>
                        <p className="text-sm text-slate-300">{item.assessment}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Governance Reform Sentiment */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-gold" />
                  Governance Reform Assessment
                </CardTitle>
                <CardDescription>Federal Law 4/2023 and regulatory reforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {governanceReformSentimentAnalysis.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-200">{item.area}</span>
                        <Badge
                          variant="outline"
                          className={
                            item.sentiment === 'Positive'
                              ? 'border-emerald-500/50 text-emerald-400'
                              : item.sentiment === 'Cautious positive'
                                ? 'border-yellow-500/50 text-yellow-400'
                                : 'border-red-500/50 text-red-400'
                          }
                        >
                          {item.sentiment}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400">{item.notes}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emirates Sponsorship Portfolio */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Emirates Sponsorship Portfolio</CardTitle>
                <CardDescription>Major football partnerships</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {emiratesSponsorshipDashboard.map((sponsor, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-slate-700 bg-slate-800/50 p-3"
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-slate-200">
                          {sponsor.teamCompetition}
                        </span>
                        <Badge
                          variant="outline"
                          className="text-gold border-gold/50 ml-2"
                        >
                          Since {sponsor.since}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">{sponsor.status}</p>
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
