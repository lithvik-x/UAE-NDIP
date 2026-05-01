'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

interface CrisisTimelineSectionProps {
  majorUAEEconomicCrisesTimeline: any[]
  propertyPriceCrashes: any[]
  centralBankLiquidityInjections: any[]
  corporateFraudScale: any[]
  crisisSentimentByPeriod: any[]
  keyDefinitions: any[]
}

export function CrisisTimelineSection({
  majorUAEEconomicCrisesTimeline,
  propertyPriceCrashes,
  centralBankLiquidityInjections,
  corporateFraudScale,
  crisisSentimentByPeriod,
  keyDefinitions,
}: CrisisTimelineSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Complete Crisis Timeline" description="All major economic events">
        <ScrollArea className="h-[600px]">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-3">Major UAE Economic Crises</h4>
              <div className="space-y-3">
                {majorUAEEconomicCrisesTimeline?.map((crisis: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50">{crisis.year}</Badge>
                      <span className="text-xl text-platinum-500-100 font-semibold">{crisis.crisis}</span>
                    </div>
                    <div className="grid gap-2 text-sm">
                      <div><span className="text-platinum-500-400">Key Metric:</span> <span className="text-rose-400">{crisis.keyMetric}</span></div>
                      <div><span className="text-platinum-500-400">Resolution:</span> <span className="text-emerald-400">{crisis.resolution}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-rose-400 mb-3">Property Price Crashes</h4>
              <div className="space-y-3">
                {propertyPriceCrashes?.map((crash: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-lg bg-platinum-800/50 border border-glass-border">
                    <div className="flex justify-between mb-1">
                      <span className="text-platinum-500-200">{crash.period}</span>
                      <span className="text-rose-400 font-bold">{crash.priceDrop}</span>
                    </div>
                    <div className="text-xs text-platinum-500-500">{crash.event} - {crash.duration}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">Central Bank Liquidity Injections</h4>
              <div className="space-y-3">
                {centralBankLiquidityInjections?.map((inj: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex justify-between mb-1">
                      <span className="text-platinum-500-200">{inj.crisis}</span>
                      <span className="text-emerald-400 font-bold">{inj.amount}</span>
                    </div>
                    <div className="text-xs text-platinum-500-500">{inj.method} - {inj.date}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-platinum-500-300 mb-3">Corporate Fraud Scale</h4>
              <div className="space-y-3">
                {corporateFraudScale?.map((fraud: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-lg bg-platinum-800/50 border border-rose-500/30">
                    <div className="flex justify-between mb-1">
                      <span className="text-platinum-500-200">{fraud.company} ({fraud.year})</span>
                      <span className="text-rose-400 font-bold">{fraud.fraudAmount}</span>
                    </div>
                    <div className="text-xs text-platinum-500-500">Founder: {fraud.founder}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-platinum-500-300 mb-3">Sentiment Analysis</h4>
              <div className="space-y-3">
                {crisisSentimentByPeriod?.map((sent: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-lg bg-platinum-800/50 border border-glass-border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-platinum-500-200">{sent.period}</span>
                      <Badge variant="outline" className={`border-${sent.overallSentiment === 'Extremely Negative' ? 'rose' : 'gold'}-500/50 text-${sent.overallSentiment === 'Extremely Negative' ? 'rose' : 'gold'}`}>{sent.overallSentiment}</Badge>
                    </div>
                    <div className="text-xs text-platinum-500-500">{sent.keyDrivers}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-platinum-500-300 mb-3">Key Definitions</h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {keyDefinitions?.map((def: any, idx: number) => (
                  <div key={idx} className="p-2 rounded bg-platinum-800/30 border border-glass-border">
                    <span className="text-amber-400 font-semibold">{def.term}:</span>
                    <span className="text-platinum-500-300 text-sm ml-2">{def.definition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </GlassPanel>
    </motion.div>
  )
}

export default CrisisTimelineSection