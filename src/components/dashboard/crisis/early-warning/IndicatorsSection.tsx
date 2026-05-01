'use client'

import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { BarChart } from '@/components/ui/chart-library'
import { motion } from 'framer-motion'
import type { EarlyWarningData } from '@/lib/data/crisis/early-warning-data'

interface IndicatorsSectionProps {
  data: EarlyWarningData
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

// Map synthesized indicators to threat indicators
function mapSynthesizedIndicators(data: EarlyWarningData) {
  const indicators: { indicator: string; value: string; status: string; numericValue: number }[] = []

  // Military Security indicators
  if (data.synthesizedIndicators?.militarySecurity?.indicators) {
    data.synthesizedIndicators.militarySecurity.indicators.forEach((ind) => {
      indicators.push({
        indicator: ind.name,
        value: ind.status,
        status: ind.status,
        numericValue: ind.status === 'Critical' ? 95 : ind.status === 'High' ? 80 : ind.status === 'Medium' ? 60 : 40,
      })
    })
  }

  // Economic indicators
  if (data.synthesizedIndicators?.economic?.indicators) {
    data.synthesizedIndicators.economic.indicators.forEach((ind) => {
      indicators.push({
        indicator: ind.name,
        value: ind.status,
        status: ind.status,
        numericValue: ind.status === 'Critical' ? 95 : ind.status === 'High' ? 80 : ind.status === 'Medium' ? 60 : 40,
      })
    })
  }

  // Financial indicators
  if (data.synthesizedIndicators?.financial?.indicators) {
    data.synthesizedIndicators.financial.indicators.forEach((ind) => {
      indicators.push({
        indicator: ind.name,
        value: ind.status,
        status: ind.status,
        numericValue: ind.status === 'Critical' ? 95 : ind.status === 'High' ? 80 : ind.status === 'Medium' ? 60 : 40,
      })
    })
  }

  return indicators.slice(0, 8)
}

export function IndicatorsSection({ data }: IndicatorsSectionProps) {
  const threatIndicators = mapSynthesizedIndicators(data)

  // If no mapped indicators, use default data
  const displayIndicators = threatIndicators.length > 0 ? threatIndicators : [
    { indicator: 'Missile Attacks (1,700+)', value: 'CRITICAL', status: 'CRITICAL', numericValue: 100 },
    { indicator: 'Stock Market Drop (4.7%)', value: '-4.7%', status: 'CRITICAL', numericValue: 85 },
    { indicator: 'Capital Flight Risk ($307B)', value: '$307B', status: 'CRITICAL', numericValue: 90 },
    { indicator: 'Mental Health Surge (+28%)', value: '+28%', status: 'HIGH', numericValue: 72 },
    { indicator: 'Tourism Impact (1M+)', value: '1M+', status: 'HIGH', numericValue: 68 },
    { indicator: 'Visa Cancellations', value: 'Widespread', status: 'HIGH', numericValue: 65 },
    { indicator: 'Food Inflation (112%+)', value: '+112%', status: 'MEDIUM', numericValue: 55 },
    { indicator: 'Currency Pressure', value: 'Moderate', status: 'MEDIUM', numericValue: 48 },
  ]

  // Indicator status breakdown
  const indicatorStatusData = [
    { status: 'Critical', count: displayIndicators.filter((i) => i.status === 'CRITICAL' || i.status === 'Critical').length, color: CHART_COLORS.rose },
    { status: 'High', count: displayIndicators.filter((i) => i.status === 'HIGH' || i.status === 'High').length, color: CHART_COLORS.orange },
    { status: 'Medium', count: displayIndicators.filter((i) => i.status === 'MEDIUM' || i.status === 'Medium').length, color: CHART_COLORS.gold },
    { status: 'Operational', count: displayIndicators.filter((i) => i.status === 'Operational' || i.status === 'Low').length, color: CHART_COLORS.emerald },
  ]

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Threat Indicators" description="Quantitative threat signals from 29 query patterns">
        <div className="space-y-4">
          {displayIndicators.map((i, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4 border border-platinum-700/50"
            >
              <span className="text-platinum-500-200 flex-1">{i.indicator}</span>
              <div className="flex items-center gap-3">
                <Badge
                  variant="outline"
                  className={`${
                    i.status === 'CRITICAL' || i.status === 'Critical'
                      ? 'text-rose-500 border-rose-500/50'
                      : i.status === 'HIGH' || i.status === 'High'
                      ? 'text-orange-500 border-orange-500/50'
                      : 'text-amber-500 border-amber-500/50'
                  }`}
                >
                  {i.status}
                </Badge>
                <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                  {i.value}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassPanel>

      {/* Indicator Status Breakdown */}
      <div className="mt-6">
        <GlassPanel title="Indicator Status Breakdown" description="Count by severity status">
          <BarChart
            data={indicatorStatusData.map((i) => ({
              status: i.status,
              count: i.count,
            }))}
            xAxisKey="status"
            bars={[
              { dataKey: 'count', name: 'Count', color: CHART_COLORS.teal },
            ]}
            height={250}
            showGrid={true}
          />
        </GlassPanel>
      </div>
    </motion.div>
  )
}
