'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CardHeader, CardTitle } from '@/components/ui/card'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface IranWar2026SectionProps {
  iranWarCrisisOrigin: any[]
  stockMarketImpact: any[]
  exchangeClosures: any[]
  centralBankResponse: any[]
  economicSectorImpact: any[]
  expertAssessments: any[]
}

export function IranWar2026Section({
  iranWarCrisisOrigin,
  stockMarketImpact,
  exchangeClosures,
  centralBankResponse,
  economicSectorImpact,
  expertAssessments,
}: IranWar2026SectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="2026 Iran War Economic Crisis" description="Military conflict impact on UAE economy">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-rose-400 mb-3">Crisis Origin</h4>
            {iranWarCrisisOrigin?.map((item: any, idx: number) => (
              <div key={idx} className="mb-3 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30">
                <div className="text-sm text-rose-400 font-semibold">{item.event}</div>
                <div className="text-platinum-300 mt-1">{item.details}</div>
                <div className="text-xs text-platinum-500 mt-1">{item.date}</div>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-rose-400 mb-3">Stock Market Impact</h4>
            <div className="space-y-2">
              {stockMarketImpact?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between py-2 border-b border-glass-border">
                  <span className="text-platinum-400">{item.metric}</span>
                  <span className="text-rose-400 font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

interface ExchangeClosuresSectionProps {
  exchangeClosures: any[]
  centralBankResponse: any[]
}

export function ExchangeClosuresSection({ exchangeClosures, centralBankResponse }: ExchangeClosuresSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Exchange Closures & Central Bank Response" description="Market infrastructure and liquidity measures">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-3">Exchange Closures</h4>
            <div className="space-y-2">
              {exchangeClosures?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-400">{item.detail}</span>
                  <span className="text-platinum-200">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-emerald-400 mb-3">Central Bank Response</h4>
            <div className="space-y-2">
              {centralBankResponse?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between text-sm border-b border-glass-border pb-1">
                  <span className="text-platinum-400">{item.action}</span>
                  <span className="text-emerald-400 font-semibold">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

interface SectorImpactSectionProps {
  economicSectorImpact: any[]
  expertAssessments: any[]
}

export function SectorImpactSection({ economicSectorImpact, expertAssessments }: SectorImpactSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Sector Impact & Expert Assessments" description="Economic damage and market sentiment">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-rose-400 mb-3">Economic Sectors</h4>
            {economicSectorImpact?.map((sector: any, idx: number) => (
              <div key={idx} className="mb-3 p-3 rounded-lg bg-slate-800/50 border border-glass-border">
                <div className="flex justify-between">
                  <span className="text-platinum-200 font-semibold">{sector.sector}</span>
                  <span className="text-rose-400">{sector.impact}</span>
                </div>
                <div className="text-xs text-platinum-500 mt-1">{sector.value}</div>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-platinum-300 mb-3">Expert Assessments</h4>
            {expertAssessments?.map((expert: any, idx: number) => (
              <div key={idx} className="mb-3 p-4 rounded-lg bg-gradient-to-r from-slate-800/50 to-transparent border-l-2 border-amber-500">
                <div className="text-sm text-amber-400 font-semibold">{expert.source}</div>
                <div className="text-platinum-300 mt-2 text-sm italic">"{expert.quote}"</div>
              </div>
            ))}
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

export default IranWar2026Section