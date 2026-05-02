'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface AbraajSectionProps {
  abraajProfile: any[]
  abraajFinancialCollapse: any[]
  abraajRegulatoryFines: any[]
  abraajLegalProceedings: any[]
}

export function AbraajSection({
  abraajProfile,
  abraajFinancialCollapse,
  abraajRegulatoryFines,
  abraajLegalProceedings,
}: AbraajSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Abraaj Group Collapse" description="Dubai-based private equity firm fraud">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-3">Company Profile</h4>
            <div className="space-y-2">
              {abraajProfile?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-400">{item.attribute}</span>
                  <span className="text-platinum-200 text-right max-w-[150px]">{item.value}</span>
                </div>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-rose-400 mt-4 mb-3">Financial Collapse</h4>
            <div className="space-y-2">
              {abraajFinancialCollapse?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-400">{item.metric}</span>
                  <span className="text-rose-400 font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-rose-400 mb-3">Regulatory Fines</h4>
            <div className="space-y-2">
              {abraajRegulatoryFines?.map((fine: any, idx: number) => (
                <div key={idx} className="p-3 rounded-lg bg-platinum-800/50 border border-rose-500/30">
                  <div className="flex justify-between">
                    <span className="text-platinum-200">{fine.person}</span>
                    <span className="text-rose-400 font-bold">{fine.fine}</span>
                  </div>
                  <div className="text-xs text-platinum-500 mt-1">{fine.date}</div>
                </div>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-platinum-300 mt-4 mb-3">Legal Proceedings</h4>
            <div className="space-y-2">
              {abraajLegalProceedings?.slice(0, 4).map((proc: any, idx: number) => (
                <div key={idx} className="text-sm border-l-2 border-amber-500 pl-3">
                  <span className="text-amber-400">{proc.date}:</span>
                  <span className="text-platinum-300 ml-2">{proc.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

interface NMCSectionProps {
  nmcProfile: any[]
  nmcFraud: any[]
  nmcTimeline: any[]
  nmcLegalCases: any[]
}

export function NMCSection({
  nmcProfile,
  nmcFraud,
  nmcTimeline,
  nmcLegalCases,
}: NMCSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="NMC Health Fraud" description="UAE's largest healthcare fraud - $5.4 billion">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-rose-400 mb-3">Company Profile</h4>
            <div className="space-y-2">
              {nmcProfile?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-400">{item.attribute}</span>
                  <span className="text-platinum-200">{item.value}</span>
                </div>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-rose-400 mt-4 mb-3">Fraud Details</h4>
            <div className="space-y-2">
              {nmcFraud?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-400">{item.metric}</span>
                  <span className="text-rose-400 font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-platinum-300 mb-3">Timeline</h4>
            <div className="space-y-2">
              {nmcTimeline?.map((item: any, idx: number) => (
                <div key={idx} className="text-sm border-l-2 border-rose-500 pl-3">
                  <span className="text-rose-400">{item.date}:</span>
                  <span className="text-platinum-300 ml-2">{item.event}</span>
                </div>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-platinum-300 mt-4 mb-3">Legal Cases</h4>
            <div className="space-y-2">
              {nmcLegalCases?.map((legal: any, idx: number) => (
                <div key={idx} className="p-2 rounded bg-platinum-800/50 border border-glass-border">
                  <div className="text-sm text-platinum-200">{legal.party}</div>
                  <div className="text-xs text-platinum-400">{legal.claim}</div>
                  <Badge variant="outline" className="mt-1 border-amber-500/50 text-amber-500">{legal.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

interface OtherFraudsSectionProps {
  gulfFirstDetails: any[]
  gulfFirstFraudPhases: any[]
  moneyLaunderingCase: any[]
  goldRefinerySuspension: any[]
}

export function OtherFraudsSection({
  gulfFirstDetails,
  gulfFirstFraudPhases,
  moneyLaunderingCase,
  goldRefinerySuspension,
}: OtherFraudsSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Other Frauds & Scandals" description="Gulf First, Dubai Land Transfer, Money Laundering, Gold Refineries">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-orange-400 mb-3">Gulf First Forex Scam</h4>
            <div className="space-y-2">
              {gulfFirstDetails?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-400">{item.attribute}</span>
                  <span className="text-platinum-200">{item.value}</span>
                </div>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-amber-400 mt-4 mb-3">Modus Operandi</h4>
            {gulfFirstFraudPhases?.map((phase: any, idx: number) => (
              <div key={idx} className="text-sm mb-1">
                <span className="text-amber-500">{phase.phase}:</span>
                <span className="text-platinum-300 ml-2">{phase.method}</span>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-rose-400 mb-3">Money Laundering (Abu Sabah Case)</h4>
            <div className="space-y-2">
              {moneyLaunderingCase?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-400">{item.attribute}</span>
                  <span className="text-rose-400">{item.value}</span>
                </div>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-amber-400 mt-4 mb-3">Gold Refineries Suspension</h4>
            <div className="space-y-2">
              {goldRefinerySuspension?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-400">{item.attribute}</span>
                  <span className="text-amber-400">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

export default AbraajSection