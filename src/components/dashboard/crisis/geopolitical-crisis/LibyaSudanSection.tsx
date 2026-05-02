'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Plane,
  Sword,
  Banknote,
  Users,
  Scale,
  Building,
  AlertTriangle,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  libyaConflict,
  sudanConflict,
} from '@/lib/data/crisis/geopolitical-crisis-data'

interface LibyaSudanSectionProps {
  className?: string
}

export function LibyaSudanSection({ className }: LibyaSudanSectionProps) {
  const { haftarArms, embargoViolations, oilDeals } = libyaConflict
  const { rsfDagalo, hemedtiDubaiProperties, weaponsToRSF, goldTrade } = sudanConflict

  return (
    <div className={className}>
      <GlassPanel
        title="Libya & Sudan Analysis"
        description="UAE involvement in Libya arms shipments and Sudan gold trade"
      >
        <div className="space-y-6">
          {/* Libya Key Metrics */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              <MetricCard title="Flights to Haftar" value="150+" icon={<Plane className="h-5 w-5" />} gradient="orange" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
              <MetricCard title="Weapons Shipments" value="100+" icon={<Sword className="h-5 w-5" />} gradient="rose" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <MetricCard title="Sudan Gold 2024" value="29 tonnes" icon={<Banknote className="h-5 w-5" />} gradient="gold" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
              <MetricCard title="RSF Displaced" value="12M" icon={<Users className="h-5 w-5" />} gradient="rose" status="error" />
            </motion.div>
          </div>

          {/* Libya & Sudan Cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Plane className="h-5 w-5 text-orange-400" />
                  Libya - Arms to Haftar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { label: 'Flights (Jan-Apr 2020)', value: haftarArms.flights },
                    { label: 'Weapons Shipments', value: haftarArms.shipments },
                    { label: 'UN Finding', value: 'Repeated non-compliance' },
                    { label: 'Oil Deal (Jan 2026)', value: oilDeals.value },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                      <span className="text-platinum-400 text-sm">{item.label}</span>
                      <span className="text-platinum-200 text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Banknote className="h-5 w-5 text-amber-400" />
                  Sudan - Gold & Weapons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { label: 'Sudan Gold 2024', value: `${goldTrade.imports.find((g) => g.year === 2024)?.fromSudan ?? 0} tonnes` },
                    { label: 'RSF Dead', value: rsfDagalo.warDead },
                    { label: 'Displaced', value: rsfDagalo.displaced },
                    { label: 'GB50A Bombs', value: 'Documented March 2025' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                      <span className="text-platinum-400 text-sm">{item.label}</span>
                      <span className="text-platinum-200 text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* UN Findings */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-rose-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                <Scale className="h-5 w-5" />
                UN Arms Embargo Violations - Libya
              </CardTitle>
              <CardDescription>UN Panel of Experts findings on UAE violations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {embargoViolations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded bg-rose-500/10 p-3 border border-rose-500/20">
                    <Badge variant="outline" className="text-xs shrink-0">{item.date}</Badge>
                    <p className="text-sm text-platinum-200">{item.violation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* RSF Property Portfolio */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building className="h-5 w-5 text-orange-400" />
                Hemedti Dubai Property Portfolio
              </CardTitle>
              <CardDescription>RSF leader's documented Dubai assets (The Sentry, Treasury)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {hemedtiDubaiProperties.map((item, idx) => (
                  <div key={idx} className="rounded bg-amber-500/10 p-3 border border-amber-500/30">
                    <p className="text-xs text-platinum-400">{item.date}</p>
                    <p className="text-sm font-bold text-orange-300">{item.value || item.property}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* China Weapons to RSF */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-rose-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                <Sword className="h-5 w-5" />
                Chinese Weapons Documented in RSF Hands
              </CardTitle>
              <CardDescription>Amnesty International findings (March 2025)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: 'GB50A Guided Bombs', value: `${weaponsToRSF.gb50ABombs.weapon} - ${weaponsToRSF.gb50ABombs.found}` },
                  { label: '155mm AH-4 Howitzers', value: `Seized by SAF in Khartoum (${weaponsToRSF.ah4Howitzers.date})` },
                  { label: 'GB50A Manufacturer', value: weaponsToRSF.gb50ABombs.manufacturer },
                  { label: 'AH-4 Origin', value: 'UAE imported from China (2019 per SIPRI)' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-3">
                    <span className="text-platinum-400 text-sm">{item.label}</span>
                    <span className="text-platinum-200 text-sm font-medium text-right max-w-[60%]">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </div>
  )
}
