'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { PieChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  HeartHandshake,
  Building,
  Globe,
  Activity,
  Plane,
  Briefcase,
} from 'lucide-react'
import type { HumanitarianLeadershipData } from '@/lib/data/entity/international-orgs-data'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

interface HumanitarianSectionProps {
  data: HumanitarianLeadershipData
}

export function HumanitarianSection({ data }: HumanitarianSectionProps) {
  const humanitarianAidData = data.majorCommitments
    .filter((c) => c.amount > 10)
    .map((c) => ({
      name: c.recipient.length > 12 ? c.recipient.substring(0, 12) + '...' : c.recipient,
      value: c.amount,
      fullName: c.recipient,
    }))

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Humanitarian Leadership"
        description="UAE as global humanitarian hub capabilities and commitments"
        badge="Humanitarian"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Humanitarian Metrics */}
          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-rose-500" />
                Major Humanitarian Commitments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                data={humanitarianAidData}
                donut
                height={280}
                showLegend
                showTooltip
              />
            </CardContent>
          </Card>

          {/* Infrastructure */}
          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Building className="h-4 w-4 text-emerald-500" />
                Humanitarian Infrastructure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.infrastructure.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between p-3 rounded-lg bg-white/40 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        {idx === 0 ? (
                          <Globe className="h-4 w-4 text-emerald-500" />
                        ) : idx === 1 ? (
                          <Activity className="h-4 w-4 text-cyan-500" />
                        ) : idx === 2 ? (
                          <Plane className="h-4 w-4 text-gold-700" />
                        ) : idx === 3 ? (
                          <Briefcase className="h-4 w-4 text-rose-500" />
                        ) : (
                          <Building className="h-4 w-4 text-denim-500" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-navy-900 dark:text-platinum-100">{item.capability}</p>
                        <p className="text-xs text-platinum-500 mt-1">{item.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sudan Aid Summary */}
        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          <Card className="glass-card bg-gradient-to-br from-rose-50/50 to-transparent dark:from-rose-900/10">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-extrabold text-rose-600 dark:text-rose-400">$4.24B</p>
              <p className="text-xs text-platinum-500 mt-1">Sudan Aid (2015-2025)</p>
            </CardContent>
          </Card>
          <Card className="glass-card bg-gradient-to-br from-rose-50/50 to-transparent dark:from-rose-900/10">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-extrabold text-rose-600 dark:text-rose-400">$784M</p>
              <p className="text-xs text-platinum-500 mt-1">Since 2023 Conflict</p>
            </CardContent>
          </Card>
          <Card className="glass-card bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-900/10">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">159</p>
              <p className="text-xs text-platinum-500 mt-1">Relief Flights</p>
            </CardContent>
          </Card>
          <Card className="glass-card bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-900/10">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">10,000+</p>
              <p className="text-xs text-platinum-500 mt-1">Tonnes Supplies</p>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

export default HumanitarianSection