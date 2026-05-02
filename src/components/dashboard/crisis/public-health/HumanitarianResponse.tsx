'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { BarChart, PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Activity,
  ArrowUpRight,
  DollarSign,
  Droplets,
  Globe,
  Heart,
  HeartPulse,
  Plane,
  Rocket,
  Shield,
  Star,
  Truck,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface HumanitarianResponseProps {
  data: {
    humanitarianResponse: typeof import('@/lib/data/crisis/public-health-data').humanitarianResponse
    economicImpactStimulus: typeof import('@/lib/data/crisis/public-health-data').economicImpactStimulus
    healthSystemPreparedness: typeof import('@/lib/data/crisis/public-health-data').healthSystemPreparedness
  }
}

export function HumanitarianResponse({ data }: HumanitarianResponseProps) {
  const { humanitarianResponse, economicImpactStimulus, healthSystemPreparedness } = data

  const aidDistributionData = [
    { name: 'Medical Aid', value: 60, color: CHART_COLORS.emerald },
    { name: 'Field Hospitals', value: 25, color: CHART_COLORS.info },
    { name: 'Equipment', value: 15, color: CHART_COLORS.gold },
  ]

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      <GlassPanel title="Humanitarian Response & Economic Impact" description="UAE global aid and domestic stimulus measures">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Humanitarian Aid */}
          <Card className="glass-card bg-glass-surface/50 border-glass-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Heart className="h-4 w-4 text-rose-500" />
                Global Medical Aid
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <MetricCard
                  title="Medical Aid"
                  value="2,154"
                  unit="tons shipped"
                  icon={<Droplets className="h-4 w-4" />}
                  gradient="emerald"
                />
                <MetricCard
                  title="Countries"
                  value="135"
                  icon={<Globe className="h-4 w-4" />}
                  gradient="cyan"
                />
                <MetricCard
                  title="Medical Flights"
                  value="196"
                  icon={<Plane className="h-4 w-4" />}
                  gradient="purple"
                />
                <MetricCard
                  title="Field Hospitals"
                  value="6"
                  unit="nations"
                  icon={<Activity className="h-4 w-4" />}
                  gradient="gold"
                />
              </div>

              <div className="text-center p-3 rounded-lg bg-gold-500/10 border border-gold-500/30">
                <div className="text-2xl font-bold text-gold-700">80%</div>
                <div className="text-sm text-platinum-400">of international humanitarian response</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-platinum-300">Field Hospital Nations</div>
                <div className="flex flex-wrap gap-2">
                  {humanitarianResponse.fieldHospitalNations.map((nation, idx) => (
                    <Badge key={idx} variant="outline" className="border-emerald-500/50 text-emerald-500">
                      {nation}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Economic Stimulus */}
          <Card className="glass-card bg-glass-surface/50 border-glass-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-gold-700" />
                Economic Stimulus Packages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {economicImpactStimulus.stimulusPackages.slice(0, 5).map((pkg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center justify-between rounded-lg bg-glass-surface/30 p-3 border border-glass-border"
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-platinum-200 truncate">{pkg.jurisdiction}</div>
                    <div className="text-xs text-platinum-500 truncate">{pkg.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gold-700">{pkg.amount}</div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Key Initiatives */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-platinum-300 mb-3">Major Initiatives</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {humanitarianResponse.majorInitiatives.map((initiative, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-lg bg-gradient-to-r from-emerald-500/10 to-sky-600/5 p-4 border border-emerald-500/30"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-medium text-platinum-100">{initiative.campaign}</span>
                </div>
                <div className="text-xs text-platinum-500">{initiative.date}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Health System Preparedness */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-platinum-300 mb-3">Health System Preparedness</h4>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/50">
              <Shield className="w-3 h-3 mr-1" />
              #1 Emergency Preparedness Globally
            </Badge>
            <Badge className="bg-cyan-500/20 text-sky border-cyan-500/50">
              <Rocket className="w-3 h-3 mr-1" />
              One Health Multi-sectoral Strategy
            </Badge>
            <Badge className="bg-gold-500/20 text-gold-700 border-gold-500/50">
              <HeartPulse className="w-3 h-3 mr-1" />
              Public Health Emergency Funding
            </Badge>
            {healthSystemPreparedness.enablingFactors.map((factor, idx) => (
              <Badge key={idx} variant="outline" className="border-platinum-500/50 text-platinum-500">
                {factor}
              </Badge>
            ))}
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
