'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { Shield } from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface BankingSectorSectionProps {
  centralBankResilience: any[]
  bankingSectorPerformance: any[]
  bankRunPrevention: any[]
}

export function BankingSectorSection({
  centralBankResilience,
  bankingSectorPerformance,
  bankRunPrevention,
}: BankingSectorSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Banking Sector Performance"
        description="Central Bank resilience and sector stability"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-emerald-400 mb-3">
              Central Bank Resilience Package (2026)
            </h4>
            <div className="space-y-2">
              {centralBankResilience?.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex justify-between text-sm border-b border-glass-border pb-1"
                >
                  <span className="text-platinum-500-400">{item.measure}</span>
                  <span className="text-emerald-400 font-semibold">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-platinum-500-300 mb-3">
              Banking Sector Performance
            </h4>
            <div className="space-y-2">
              {bankingSectorPerformance?.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex justify-between text-sm border-b border-glass-border pb-1"
                >
                  <span className="text-platinum-500-400">{item.metric}</span>
                  <span className="text-platinum-500-200">{item.value}</span>
                </div>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-amber-400 mt-4 mb-3">
              Bank Run Prevention
            </h4>
            {bankRunPrevention?.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-sm mb-1">
                <Shield className="h-4 w-4 text-emerald-500" />
                <span className="text-platinum-500-300">{item.observation}</span>
                <span className="text-platinum-500-500 text-xs">
                  ({item.source})
                </span>
              </div>
            ))}
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

interface SovereignDebtSectionProps {
  dubaiPublicDebt: any[]
  bankruptcyLaw2024: any[]
  fatfStatusHistory: any[]
}

export function SovereignDebtSection({
  dubaiPublicDebt,
  bankruptcyLaw2024,
  fatfStatusHistory,
}: SovereignDebtSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Sovereign Debt and Regulatory Framework"
        description="Public debt and legal structure"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-3">
              Dubai Public Debt (2026)
            </h4>
            <div className="space-y-2">
              {dubaiPublicDebt?.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex justify-between text-sm border-b border-glass-border pb-1"
                >
                  <span className="text-platinum-500-400">{item.metric}</span>
                  <span className="text-amber-400 font-semibold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-emerald-400 mb-3">
              2024 Bankruptcy Law
            </h4>
            <div className="space-y-2">
              {bankruptcyLaw2024?.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex justify-between text-sm border-b border-glass-border pb-1"
                >
                  <span className="text-platinum-500-400">{item.attribute}</span>
                  <span className="text-platinum-500-200 text-right max-w-[180px]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-platinum-500-300 mt-4 mb-3">
              FATF Status
            </h4>
            {fatfStatusHistory?.map((item: any, idx: number) => (
              <div key={idx} className="flex justify-between text-sm">
                <span className="text-platinum-500-400">{item.date}</span>
                <Badge
                  variant="outline"
                  className={`border-${
                    item.status === 'Removed from grey list' ? 'emerald' : 'gold'
                  }-500/50 text-${
                    item.status === 'Removed from grey list' ? 'emerald' : 'gold'
                  }`}
                >
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

export default BankingSectorSection