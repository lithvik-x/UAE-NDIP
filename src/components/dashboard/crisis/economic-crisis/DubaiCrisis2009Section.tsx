'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar } from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface DubaiCrisis2009SectionProps {
  dubaiDebtCrisisTimeline: any[]
  debtStructure: any[]
  propertyMarketCollapse: any[]
  globalMarketImpact: any[]
}

export function DubaiCrisis2009Section({
  dubaiDebtCrisisTimeline,
  debtStructure,
  propertyMarketCollapse,
  globalMarketImpact,
}: DubaiCrisis2009SectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="2009 Dubai Debt Crisis Timeline" description="Key dates and events">
        <div className="space-y-4">
          {dubaiDebtCrisisTimeline?.map((item: any, idx: number) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              className="flex gap-4 p-4 rounded-lg bg-gradient-to-r from-amber-500/5 to-transparent border-l-2 border-amber-500">
              <Calendar className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
              <div>
                <div className="text-sm text-amber-400 font-semibold">{item.date}</div>
                <div className="text-platinum-200">{item.event}</div>
                <div className="text-xs text-platinum-500 mt-1">Source: {item.source}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </motion.div>
  )
}

interface DebtStructureSectionProps {
  debtStructure: any[]
}

export function DebtStructureSection({ debtStructure }: DebtStructureSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Dubai World Debt Structure" description="Debt amounts and restructuring details">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {debtStructure?.map((debt: any, idx: number) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }}
              className="glass-card rounded-lg p-4 bg-glass-surface/50 border-glass-border">
              <div className="text-2xl font-bold text-amber-400">{debt.amount}</div>
              <div className="text-sm text-platinum-300 mt-1">{debt.entity}</div>
              <div className="text-xs text-platinum-500 mt-1">{debt.notes}</div>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </motion.div>
  )
}

interface PropertyMarketSectionProps {
  propertyMarketCollapse: any[]
  globalMarketImpact: any[]
}

export function PropertyMarketSection({ propertyMarketCollapse, globalMarketImpact }: PropertyMarketSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Property Market Collapse" description="2009 housing crash impact">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-rose-400 mb-3">Price Drops</h4>
            {propertyMarketCollapse?.map((item: any, idx: number) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-platinum-300">{item.metric}</span>
                  <span className="text-rose-400 font-bold">{item.value}</span>
                </div>
                <div className="h-2 bg-platinum-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: item.value === '-40%' ? '40%' : item.value === '-60%' ? '60%' : '50%' }} transition={{ delay: idx * 0.2 + 0.5, duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-rose-500 to-orange-500" />
                </div>
                <div className="text-xs text-platinum-500 mt-1">{item.source}</div>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-platinum-300 mb-3">Global Market Impact</h4>
            {globalMarketImpact?.map((market: any, idx: number) => (
              <div key={idx} className="flex justify-between py-2 border-b border-glass-border">
                <span className="text-platinum-400">{market.market}</span>
                <span className="text-rose-400">{market.impact}</span>
              </div>
            ))}
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

interface NakheelDubaiWorldSectionProps {
  nakheelProfile: any[]
  nakheelRecoveryTimeline: any[]
  dubaiWorldCorporateStructure: any[]
}

export function NakheelDubaiWorldSection({
  nakheelProfile,
  nakheelRecoveryTimeline,
  dubaiWorldCorporateStructure,
}: NakheelDubaiWorldSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Nakheel & Dubai World" description="State-owned entities at center of crisis">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-3">Nakheel Profile</h4>
            <div className="space-y-2">
              {nakheelProfile?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-400">{item.attribute}</span>
                  <span className="text-platinum-200">{item.value}</span>
                </div>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-amber-400 mt-4 mb-3">Recovery Timeline</h4>
            <div className="space-y-2">
              {nakheelRecoveryTimeline?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-400">{item.date}</span>
                  <span className="text-emerald-400">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-3">Dubai World Corporate Structure</h4>
            <div className="space-y-3">
              {dubaiWorldCorporateStructure?.map((entity: any, idx: number) => (
                <div key={idx} className="p-3 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/30">
                  <div className="font-semibold text-platinum-100">{entity.entity}</div>
                  <div className="text-sm text-platinum-400">Debt: {entity.debt}</div>
                  <Badge variant="outline" className={`mt-2 border-${entity.status === 'Recovered' || entity.status === 'Operational' ? 'emerald' : 'gold'}-500/50 text-${entity.status === 'Recovered' || entity.status === 'Operational' ? 'emerald' : 'gold'}`}>{entity.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

export default DubaiCrisis2009Section