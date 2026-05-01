'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { PieChart, BarChart } from '@/components/ui/chart-library'
import { Trophy, DollarSign, TrendingUp, Globe, AlertTriangle, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import type { SportsIntelligenceData } from '@/lib/data/topics/sports-data'

interface SportsOverviewSectionProps {
  data: Pick<
    SportsIntelligenceData,
    | 'investmentOverview'
    | 'dashboardInvestmentSummary'
    | 'sportswashingVectors'
    | 'focusAreas'
    | 'summaryStatistics'
    | 'executionMetadata'
  >
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

export function SportsOverviewSection({ data }: SportsOverviewSectionProps) {
  const investmentData = [
    { name: 'Infrastructure', value: 40, color: CHART_COLORS.navy },
    { name: 'Sponsorships', value: 25, color: CHART_COLORS.gold },
    { name: 'Broadcasting', value: 15, color: CHART_COLORS.platinum },
    { name: 'Events', value: 12, color: CHART_COLORS.emerald },
    { name: 'Other', value: 8, color: CHART_COLORS.teal },
  ]

  const attendanceData = [
    { name: 'F1 Abu Dhabi', value: 190, color: CHART_COLORS.gold },
    { name: 'UAE Pro League', value: 85, color: CHART_COLORS.navy },
    { name: 'NBA Preseason', value: 45, color: CHART_COLORS.platinum },
    { name: 'Dubai Marathon', value: 35, color: CHART_COLORS.rose },
    { name: 'Other Events', value: 60, color: CHART_COLORS.info },
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
          title="Sports Intelligence Overview"
          description="UAE sports investment and brand positioning"
        >
          <div className="space-y-6">
            {/* Investment Distribution + Attendance */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Investment Distribution</CardTitle>
                  <CardDescription>By category ($10B+ total decade investment)</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={investmentData}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Event Attendance (Thousands)</CardTitle>
                  <CardDescription>Major sports events annual attendance</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={attendanceData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Attendance (K)', color: CHART_COLORS.gold }]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Investment Summary Metrics */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Investment Summary</CardTitle>
                <CardDescription>Key financial metrics from OutQore</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {data.dashboardInvestmentSummary.slice(0, 4).map((item, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3 text-center"
                    >
                      <div className="text-lg font-bold text-gold-700">{item.valueUSD}</div>
                      <p className="text-xs text-platinum-500-400 mt-1">{item.category}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sportswashing Risk Assessment */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sportswashing Risk Assessment</CardTitle>
                <CardDescription>Multi-dimensional analysis of criticism levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {data.sportswashingVectors.map((vector, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-platinum-500-200">{vector.vector}</p>
                        <p className="text-xs text-platinum-500-400">{vector.details}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className={`ml-2 ${
                          vector.criticismLevel === 'Critical'
                            ? 'border-red-500/50 text-red-400'
                            : vector.criticismLevel === 'High'
                              ? 'border-amber-500/50 text-amber-400'
                              : 'border-navy-500/50 text-navy-500-400'
                        }`}
                      >
                        {vector.criticismLevel}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Summary Statistics */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Research Summary</CardTitle>
                <CardDescription>
                  {data.executionMetadata.ssotClassification}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex items-center gap-3 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700/20">
                      <Globe className="h-5 w-5 text-gold-700" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gold-700">
                        {data.executionMetadata.queriesExecuted}
                      </p>
                      <p className="text-xs text-platinum-500-400">Queries Executed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                      <Target className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-emerald-400">
                        {data.summaryStatistics.find((s) => s.metric === 'URLs successfully fetched')?.count || '28+'}
                      </p>
                      <p className="text-xs text-platinum-500-400">URLs Fetched</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/40">
                      <TrendingUp className="h-5 w-5 text-navy-500-400" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-navy-500-400">
                        {data.summaryStatistics.find((s) => s.metric === 'Data tables')?.count || '35+'}
                      </p>
                      <p className="text-xs text-platinum-500-400">Data Tables</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20">
                      <DollarSign className="h-5 w-5 text-platinum-500-400" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-platinum-500-400">
                        {data.summaryStatistics.find((s) => s.metric === 'Organizations referenced')?.count || '50+'}
                      </p>
                      <p className="text-xs text-platinum-500-400">Orgs Referenced</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}
