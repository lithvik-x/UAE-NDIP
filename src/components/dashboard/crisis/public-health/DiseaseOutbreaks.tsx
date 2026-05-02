'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  AlertTriangle,
  Bug,
  Droplets,
  Eye,
  FlaskConical,
  Leaf,
  Microscope,
  Monitor,
  Thermometer,
  Users,
  AlertCircle,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface DiseaseOutbreaksProps {
  data: {
    MersCov: typeof import('@/lib/data/crisis/public-health-data').MersCov
    mpoxData: typeof import('@/lib/data/crisis/public-health-data').mpoxData
    dengueOutbreak: typeof import('@/lib/data/crisis/public-health-data').dengueOutbreak
    vectorControl: typeof import('@/lib/data/crisis/public-health-data').vectorControl
    foodPoisoningStats: typeof import('@/lib/data/crisis/public-health-data').foodPoisoningStats
  }
}

export function DiseaseOutbreaks({ data }: DiseaseOutbreaksProps) {
  const { MersCov, mpoxData, dengueOutbreak, vectorControl, foodPoisoningStats } = data

  const diseaseComparisonData = [
    { name: 'MERS-CoV', cases: 94, color: CHART_COLORS.rose },
    { name: 'Mpox', cases: 11, color: CHART_COLORS.gold },
    { name: 'Dengue', cases: 500, color: CHART_COLORS.orange },
    { name: 'Salmonella', cases: 200, color: CHART_COLORS.rose },
  ]

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      <GlassPanel title="Disease Outbreaks & Surveillance" description="MERS-CoV, Mpox, Dengue, and Food Safety monitoring">
        {/* Disease Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* MERS-CoV */}
          <Card className="glass-card bg-glass-surface/50 border-glass-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Microscope className="h-4 w-4 text-rose-500" />
                MERS-CoV
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-2 rounded-lg bg-rose-500/10 border border-rose-500/30">
                  <div className="text-xl font-bold text-rose-500">{MersCov.uaeTotalCases}</div>
                  <div className="text-xs text-platinum-400">UAE Cases</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-rose-500/10 border border-rose-500/30">
                  <div className="text-xl font-bold text-rose-500">{MersCov.uaeDeaths}</div>
                  <div className="text-xs text-platinum-400">Deaths</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-rose-500/10 border border-rose-500/30">
                  <div className="text-xl font-bold text-rose-500">{MersCov.caseFatalityRate}</div>
                  <div className="text-xs text-platinum-400">CFR</div>
                </div>
              </div>
              <div className="text-sm text-platinum-300">
                <span className="text-platinum-400">Most Recent Case:</span> {MersCov.mostRecentCase.patient}, {MersCov.mostRecentCase.location}
              </div>
              <div className="text-xs text-platinum-500">
                {MersCov.mostRecentCase.date} | {MersCov.mostRecentCase.positiveTest}
              </div>
            </CardContent>
          </Card>

          {/* Mpox */}
          <Card className="glass-card bg-glass-surface/50 border-glass-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-gold-700" />
                Mpox (Monkeypox)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 rounded-lg bg-gold-500/10 border border-gold-500/30">
                  <div className="text-xl font-bold text-gold-700">{mpoxData['2022Outbreak'].cases}</div>
                  <div className="text-xs text-platinum-400">2022 Cases</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-gold-500/10 border border-gold-500/30">
                  <div className="text-xl font-bold text-gold-700">Feb 2025</div>
                  <div className="text-xs text-platinum-400">Clade Ib</div>
                </div>
              </div>
              <div className="text-sm text-platinum-300">
                <span className="text-platinum-400">First Clade Ib Case:</span> {mpoxData.feb2025.detail}
              </div>
              <Badge variant="outline" className="border-gold-500/50 text-gold-700">
                <AlertTriangle className="w-3 h-3 mr-1" />
                WHO Monitor
              </Badge>
            </CardContent>
          </Card>

          {/* Dengue */}
          <Card className="glass-card bg-glass-surface/50 border-glass-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Bug className="h-4 w-4 text-orange-500" />
                Dengue Outbreak (Apr 2024)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-platinum-300">
                <span className="text-platinum-400">Trigger:</span> {dengueOutbreak.trigger}
              </div>
              <div className="text-sm text-platinum-300">
                <span className="text-platinum-400">Vector:</span> {dengueOutbreak.vector}
              </div>
              <div className="text-sm text-platinum-300">
                <span className="text-platinum-400">Vulnerable:</span> {dengueOutbreak.vulnerablePopulation}
              </div>
              <div className="text-xs text-orange-400 italic">
                "{dengueOutbreak.researcherQuote}"
              </div>
            </CardContent>
          </Card>

          {/* Food Poisoning */}
          <Card className="glass-card bg-glass-surface/50 border-glass-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-rose-500" />
                Food Poisoning (H1 2025)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 rounded-lg bg-rose-500/10 border border-rose-500/30">
                  <div className="text-xl font-bold text-rose-500">{foodPoisoningStats.totalCasesH12025}+</div>
                  <div className="text-xs text-platinum-400">Total Cases</div>
                </div>
                <div className="text-center p-2 rounded-lg bg-rose-500/10 border border-rose-500/30">
                  <div className="text-xl font-bold text-rose-500">{foodPoisoningStats.confirmedSalmonella}+</div>
                  <div className="text-xs text-platinum-400">Salmonella</div>
                </div>
              </div>
              <div className="text-sm text-platinum-300">
                <span className="text-platinum-400">Cause:</span> {foodPoisoningStats.contributingFactors}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disease Comparison Chart */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-platinum-300 mb-3">Disease Cases Comparison</h4>
          <BarChart
            data={diseaseComparisonData}
            bars={[{ dataKey: 'cases', name: 'Cases', color: CHART_COLORS.info }]}
            height={200}
          />
        </div>

        {/* Vector Control */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-platinum-300 mb-3">Dubai Vector Control (2026)</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Droplets className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-medium text-emerald-500">Predatory Fish</span>
              </div>
              <div className="text-lg font-bold text-platinum-100">{vectorControl.predatoryFishDeployment}</div>
            </div>
            <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/30 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Thermometer className="h-4 w-4 text-sky" />
                <span className="text-sm font-medium text-sky">Bacterial Tablets</span>
              </div>
              <div className="text-lg font-bold text-platinum-100">Used</div>
            </div>
            <div className="rounded-lg bg-purple-500/10 border border-purple-500/30 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Leaf className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium text-purple-500">Growth Regulators</span>
              </div>
              <div className="text-lg font-bold text-platinum-100">Active</div>
            </div>
            <div className="rounded-lg bg-gold-500/10 border border-gold-500/30 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="h-4 w-4 text-gold-700" />
                <span className="text-sm font-medium text-gold-700">Smart Traps</span>
              </div>
              <div className="text-lg font-bold text-platinum-100">Deployed</div>
            </div>
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Monitor className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-medium text-emerald-500">Risk Level</span>
              </div>
              <div className="text-lg font-bold text-emerald-500">{vectorControl.currentRiskAssessment}</div>
            </div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
