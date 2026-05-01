'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Award,
  Globe,
  Heart,
  Pill,
  Rocket,
  Shield,
  Star,
  Target,
  Trophy,
  Zap,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface VaccinationSectionProps {
  data: {
    vaccinesAvailable: typeof import('@/lib/data/crisis/public-health-data').vaccinesAvailable
    sinopharmDetails: typeof import('@/lib/data/crisis/public-health-data').sinopharmDetails
    vaccinationStats: typeof import('@/lib/data/crisis/public-health-data').vaccinationStats
    vaccinationRankings: typeof import('@/lib/data/crisis/public-health-data').vaccinationRankings
  }
}

export function VaccinationSection({ data }: VaccinationSectionProps) {
  const { vaccinesAvailable, sinopharmDetails, vaccinationStats, vaccinationRankings } = data

  const vaccinationCoverageData = [
    { name: 'At Least One Dose', value: 82.82, color: CHART_COLORS.emerald },
    { name: 'Fully Vaccinated', value: 73.21, color: CHART_COLORS.info },
    { name: 'Not Vaccinated', value: 17.18, color: CHART_COLORS.platinum },
  ]

  const globalRankings = vaccinationRankings.map((r, i) => ({
    ...r,
    rank: i + 1,
  }))

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      <GlassPanel title="Vaccination Campaign" description="World's second-fastest COVID-19 vaccination campaign">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Key Metrics */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <MetricCard
                title="Total Doses"
                value="17.45M"
                unit="(Aug 2021)"
                icon={<Pill className="h-5 w-5" />}
                gradient="emerald"
              />
              <MetricCard
                title="One Dose"
                value="82.82%"
                icon={<Zap className="h-5 w-5" />}
                gradient="cyan"
              />
              <MetricCard
                title="Fully Vaccinated"
                value="73.21%"
                icon={<Shield className="h-5 w-5" />}
                gradient="purple"
              />
              <MetricCard
                title="Locations"
                value="120+"
                unit="Across UAE"
                icon={<Globe className="h-5 w-5" />}
                gradient="gold"
              />
            </div>

            <Card className="glass-card bg-glass-surface/50 border-glass-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Heart className="h-4 w-4 text-emerald-500" />
                  Sinopharm Vaccine Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-platinum-500-400">Announced Efficacy:</span>
                  <span className="text-emerald-400 font-medium">{sinopharmDetails.announcedEfficacy}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-platinum-500-400">Development Partner:</span>
                  <span className="text-platinum-500-200">{sinopharmDetails.developmentPartner}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-platinum-500-400">Local Production:</span>
                  <span className="text-cyan-400">{sinopharmDetails.localProduction}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-platinum-500-400">Capacity Target:</span>
                  <span className="text-platinum-500-200">{sinopharmDetails.productionCapacityTarget}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-platinum-500-400">Current Production:</span>
                  <span className="text-platinum-500-200">{sinopharmDetails.currentProduction}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="space-y-4">
            <Card className="glass-card bg-glass-surface/50 border-glass-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Target className="h-4 w-4 text-sky" />
                  Vaccination Coverage (Aug 2021)
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <PieChart data={vaccinationCoverageData} height={200} donut />
              </CardContent>
            </Card>

            <Card className="glass-card bg-glass-surface/50 border-glass-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-gold-700" />
                  Global Rankings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {globalRankings.slice(0, 5).map((ranking, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 rounded-lg bg-glass-surface/30 p-2"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-gold-700">{ranking.rank}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-platinum-500-200 font-medium truncate">{ranking.ranking}</div>
                        <div className="text-xs text-platinum-500-500 truncate">{ranking.achievement}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Available Vaccines */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-platinum-500-300 mb-3">Available Vaccines in UAE</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {vaccinesAvailable.map((vaccine, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-lg bg-gradient-to-r from-sky-500/10 to-purple-600/5 p-4 border border-cyan-500/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Pill className="h-4 w-4 text-sky" />
                  <span className="text-sm font-medium text-platinum-500-100">{vaccine.name}</span>
                </div>
                <div className="text-xs text-platinum-500-400">{vaccine.type}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/50">
            <Rocket className="w-3 h-3 mr-1" />
            First Arab COVID Vaccine
          </Badge>
          <Badge className="bg-gold-500/20 text-gold-700 border-gold-500/50">
            <Star className="w-3 h-3 mr-1" />
            Free for All
          </Badge>
          <Badge className="bg-cyan-500/20 text-sky border-cyan-500/50">
            <Award className="w-3 h-3 mr-1" />
            2nd Fastest Globally
          </Badge>
          <Badge className="bg-purple-500/20 text-purple-500 border-purple-500/50">
            <Zap className="w-3 h-3 mr-1" />
            6.06 Doses/100 People
          </Badge>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
