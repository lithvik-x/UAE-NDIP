'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Globe,
  Landmark,
  Shield,
  Cpu,
  Radio,
  Banknote,
  Plane,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  greatPowerCompetitionArray,
  chinaBaseTimeline,
  g42Data,
  russiaSanctionsEvasion,
  usTroopWithdrawal,
  bricsMembership,
  iranNuclearData,
} from '@/lib/data/crisis/geopolitical-crisis-data'

interface GreatPowerSectionProps {
  className?: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Landmark,
  Shield,
  Cpu,
  Radio,
}

export function GreatPowerSection({ className }: GreatPowerSectionProps) {
  return (
    <div className={className}>
      <GlassPanel
        title="Great Power Competition"
        description="UAE positioning between US, China, Russia, and emerging powers"
      >
        <div className="space-y-6">
          {/* Great Power Positioning Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {greatPowerCompetitionArray.map((power, idx) => {
              const IconComponent = iconMap[power.icon] || Globe
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-5 w-5 text-navy-400" />
                        <CardTitle className="text-sm">{power.domain}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-xs text-platinum-400 mb-1">{power.position}</p>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          power.sentiment === 'Positive'
                            ? 'text-emerald-400 border-emerald-400/50'
                            : power.sentiment === 'Negative'
                            ? 'text-rose-400 border-rose-400/50'
                            : power.sentiment === 'Mixed'
                            ? 'text-amber-400 border-amber-400/50'
                            : 'text-navy-400 border-navy-400/50'
                        }`}
                      >
                        {power.sentiment}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* China Base Timeline */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="h-5 w-5 text-rose-400" />
                China Military Base Suspicion Timeline
              </CardTitle>
              <CardDescription>Intelligence flagged activity at Khalifa Port (2020-2025)</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-3">
                  {chinaBaseTimeline.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 rounded bg-platinum-800/50 p-3"
                    >
                      <Badge variant="outline" className="text-xs shrink-0">{item.date}</Badge>
                      <p className="text-sm text-platinum-200">{item.event}</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* G42 & AI Data */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Cpu className="h-5 w-5 text-cyan-400" />
                G42 & AI Geopolitics
              </CardTitle>
              <CardDescription>Microsoft partnership and semiconductor export controls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: 'Founded', value: g42Data.founded },
                  { label: 'Chair', value: g42Data.chair },
                  { label: 'Microsoft Deal', value: g42Data.microsoftDeal },
                  { label: 'Nvidia Chips', value: g42Data.chips },
                  { label: 'AI GDP Target', value: g42Data.aiTarget },
                  { label: 'US Classification', value: g42Data.usClassification },
                  { label: 'Divestment', value: g42Data.divestment },
                ].map((item, idx) => (
                  <div key={idx} className="rounded bg-platinum-800/50 p-3 border border-platinum-700/50">
                    <p className="text-xs text-platinum-400">{item.label}</p>
                    <p className="text-sm font-medium text-platinum-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Russia Sanctions Evasion */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Banknote className="h-5 w-5 text-amber-400" />
                Russia Sanctions Evasion via UAE
              </CardTitle>
              <CardDescription>Gold trade and financial flows (2022-2024)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: 'Exchange', value: russiaSanctionsEvasion.exchange },
                  { label: 'Russian Gold 2022', value: russiaSanctionsEvasion.russianGold2022 },
                  { label: 'Russian Gold 2024', value: russiaSanctionsEvasion.russianGold2024 },
                ].map((item, idx) => (
                  <div key={idx} className="rounded bg-amber-500/10 p-3 border border-amber-500/30">
                    <p className="text-xs text-platinum-400">{item.label}</p>
                    <p className="text-sm font-bold text-amber-300">{item.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* US Troop Withdrawal */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-rose-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-rose-400">
                <Plane className="h-5 w-5" />
                US Troop Withdrawal from UAE
              </CardTitle>
              <CardDescription>Base evacuation amid Iran tensions (2026)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {usTroopWithdrawal.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded bg-rose-500/10 p-3 border border-rose-500/20">
                    <Badge variant="outline" className="text-xs shrink-0">{item.date}</Badge>
                    <p className="text-sm text-platinum-200">{item.event}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* BRICS Membership */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Landmark className="h-5 w-5 text-emerald-400" />
                BRICS Membership & De-dollarization
              </CardTitle>
              <CardDescription>UAE joined August 2023, trade partnerships</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {bricsMembership.map((item, idx) => (
                  <div key={idx} className="rounded bg-platinum-800/50 p-3 border border-platinum-700/50">
                    <p className="text-xs text-platinum-400">{item.label}</p>
                    <p className="text-sm font-medium text-platinum-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Iran Nuclear */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Radio className="h-5 w-5 text-orange-400" />
                Iran Nuclear Concerns
              </CardTitle>
              <CardDescription>UAE position on enrichment and regional security</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {iranNuclearData.map((item, idx) => (
                  <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-3">
                    <span className="text-platinum-400 text-sm">{item.label}</span>
                    <span className="text-platinum-200 text-sm font-medium">{item.value}</span>
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
