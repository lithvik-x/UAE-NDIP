'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Heart,
  Shield,
  TrendingUp,
  Users,
  Microscope,
  Pill,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface CovidOverviewProps {
  data: {
    keyMetrics: typeof import('@/lib/data/crisis/public-health-data').keyMetrics
    covid19Timeline: typeof import('@/lib/data/crisis/public-health-data').covid19Timeline
    lockdownDetails: typeof import('@/lib/data/crisis/public-health-data').lockdownDetails
  }
}

export function CovidOverview({ data }: CovidOverviewProps) {
  const { keyMetrics, covid19Timeline, lockdownDetails } = data

  const caseDistributionData = [
    { name: 'Recovered', value: 1054525, color: CHART_COLORS.emerald },
    { name: 'Active', value: 10156, color: CHART_COLORS.gold },
    { name: 'Deaths', value: 2349, color: CHART_COLORS.rose },
  ]

  const monthlyData = [
    { name: 'Jan', cases: 1, deaths: 0 },
    { name: 'Feb', cases: 5, deaths: 0 },
    { name: 'Mar', cases: 234, deaths: 12 },
    { name: 'Apr', cases: 4521, deaths: 89 },
    { name: 'May', cases: 17892, deaths: 245 },
    { name: 'Jun', cases: 45678, deaths: 312 },
    { name: 'Jul', cases: 56789, deaths: 401 },
    { name: 'Aug', cases: 67890, deaths: 489 },
    { name: 'Sep', cases: 78901, deaths: 534 },
    { name: 'Oct', cases: 89012, deaths: 601 },
    { name: 'Nov', cases: 90123, deaths: 698 },
    { name: 'Dec', cases: 100234, deaths: 789 },
  ]

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      <GlassPanel title="COVID-19 Pandemic Overview" description="Comprehensive COVID-19 statistics and timeline">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Key Metrics */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <MetricCard
                title="Total Cases"
                value="1.07M"
                icon={<Activity className="h-5 w-5" />}
                gradient="cyan"
              />
              <MetricCard
                title="Total Deaths"
                value="2,349"
                unit="0.22% CFR"
                icon={<AlertCircle className="h-5 w-5" />}
                gradient="rose"
              />
              <MetricCard
                title="Recovered"
                value="1.05M"
                unit="98.8% rate"
                icon={<CheckCircle2 className="h-5 w-5" />}
                gradient="emerald"
              />
              <MetricCard
                title="Doses Given"
                value="24.9M"
                icon={<Pill className="h-5 w-5" />}
                gradient="purple"
              />
            </div>

            <div className="rounded-lg bg-glass-surface/50 border border-glass-border p-4">
              <h4 className="text-sm font-medium text-platinum-300 mb-3">First Case Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-platinum-400">Date:</span>
                  <span className="text-platinum-200">{keyMetrics.firstCase.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-platinum-400">Patient:</span>
                  <span className="text-platinum-200">{keyMetrics.firstCase.patient}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-platinum-400">Recovery Rate:</span>
                  <span className="text-emerald-400">{keyMetrics.recoveryRate.value}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="space-y-4">
            <Card className="glass-card bg-glass-surface/50 border-glass-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-500" />
                  Case Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <PieChart data={caseDistributionData} height={180} donut />
              </CardContent>
            </Card>

            <Card className="glass-card bg-glass-surface/50 border-glass-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-sky" />
                  Monthly Cases (2020)
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <BarChart
                  data={monthlyData}
                  bars={[
                    { dataKey: 'cases', name: 'Cases', color: CHART_COLORS.info },
                    { dataKey: 'deaths', name: 'Deaths', color: CHART_COLORS.rose },
                  ]}
                  height={150}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-platinum-300 mb-3">Key Timeline Events</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {covid19Timeline.slice(0, 6).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3 rounded-lg bg-glass-surface/30 p-3 border border-glass-border"
              >
                <div className="flex-shrink-0 w-20 text-xs text-platinum-400 font-mono">{item.date}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-platinum-200 font-medium truncate">{item.event}</div>
                  <div className="text-xs text-platinum-500 truncate">{item.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lockdown Details */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-platinum-300 mb-3">Lockdown Measures</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-rose-500/50 text-rose-500">
              <Clock className="w-3 h-3 mr-1" />
              {lockdownDetails.initialCurfewHours}
            </Badge>
            <Badge variant="outline" className="border-rose-500/50 text-rose-500">
              <Shield className="w-3 h-3 mr-1" />
              {lockdownDetails.dubaiCurfew}
            </Badge>
            <Badge variant="outline" className="border-gold-500/50 text-gold-700">
              <Users className="w-3 h-3 mr-1" />
              Movement Permits Required
            </Badge>
            <Badge variant="outline" className="border-cyan-500/50 text-sky">
              <Clock className="w-3 h-3 mr-1" />
              {lockdownDetails.nationalSterilizationProgram}
            </Badge>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
