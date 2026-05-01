'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Brain,
  Clock,
  Globe,
  Heart,
  Phone,
  Shield,
  Smile,
  Users,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface MentalHealthImpactProps {
  data: {
    mentalHealthImpact: typeof import('@/lib/data/crisis/public-health-data').mentalHealthImpact
    migrantWorkerHealth: typeof import('@/lib/data/crisis/public-health-data').migrantWorkerHealth
  }
}

export function MentalHealthImpact({ data }: MentalHealthImpactProps) {
  const { mentalHealthImpact, migrantWorkerHealth } = data

  const migrantMentalHealthData = migrantWorkerHealth.mentalHealthStatisticsIndianMigrantWorkers.map((stat) => ({
    name: stat.metric,
    value: parseFloat(stat.value.replace('%', '')),
  }))

  const populationImpactData = [
    { name: 'Males', value: 35, color: CHART_COLORS.info },
    { name: 'Older People', value: 25, color: CHART_COLORS.gold },
    { name: 'Unemployed', value: 20, color: CHART_COLORS.rose },
    { name: 'General Public', value: 20, color: CHART_COLORS.emerald },
  ]

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      <GlassPanel title="Mental Health Impact" description="COVID-19 psychological effects on UAE residents">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* General Population Impact */}
          <Card className="glass-card bg-glass-surface/50 border-glass-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Brain className="h-4 w-4 text-sky" />
                General Population
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                <div className="text-3xl font-bold text-sky">{mentalHealthImpact.surveyFindings[0].value}</div>
                <div className="text-sm text-platinum-400">Reported Negative Mental Health Impact</div>
                <div className="text-xs text-platinum-500 mt-1">Source: YouGov Survey (April 2022)</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-platinum-300">Most Affected Groups</div>
                {mentalHealthImpact.affectedPopulations.map((pop, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 rounded-lg bg-glass-surface/30 p-2"
                  >
                    <Users className="h-4 w-4 text-platinum-500" />
                    <div className="flex-1">
                      <div className="text-sm text-platinum-200">{pop.group}</div>
                      <div className="text-xs text-platinum-500">{pop.impact}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Migrant Worker Impact */}
          <Card className="glass-card bg-glass-surface/50 border-glass-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Users className="h-4 w-4 text-rose" />
                Migrant Workers (Indian)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <BarChart
                data={migrantMentalHealthData}
                bars={[{ dataKey: 'value', name: 'Percentage', color: CHART_COLORS.rose }]}
                height={180}
              />
              <div className="text-xs text-platinum-500 text-center">
                Source: Mental Health Study
              </div>
            </CardContent>
          </Card>
        </div>

        {/* UAE Response */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-platinum-300 mb-3">UAE Response</h4>
          <div className="grid gap-3 md:grid-cols-2">
            {mentalHealthImpact.uaeResponse.map((response, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4"
              >
                <Phone className="h-5 w-5 text-emerald flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-emerald">{response.initiative}</div>
                  <div className="text-xs text-platinum-400 mt-1">{response.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Positive Findings */}
        <div className="mt-6">
          <Badge className="bg-emerald-500/20 text-emerald border-emerald-500/50">
            <Smile className="w-3 h-3 mr-1" />
            Depression/anxiety levels lower than other countries during pandemic (MDPI Study June 2024)
          </Badge>
          <Badge className="ml-2 bg-cyan-500/20 text-sky border-cyan-500/50">
            <Clock className="w-3 h-3 mr-1" />
            Mental health relief from gradual easing of restrictions
          </Badge>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
