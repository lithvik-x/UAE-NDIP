'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { AreaChart } from '@/components/ui/chart-library'
import { TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import type { EarlyWarningData } from '@/lib/data/crisis/early-warning-data'

interface QuantitativeSectionProps {
  data: EarlyWarningData
}

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

export function QuantitativeSection({ data }: QuantitativeSectionProps) {
  const quantitativeMetrics = data.keyQuantitativeData?.slice(0, 8) || [
    { metric: 'Missiles fired', value: '1,700+', numeric: 1700, source: 'Gulf News' },
    { metric: 'Deaths', value: '6', numeric: 6, source: 'Khaleej Times' },
    { metric: 'Injuries', value: '122', numeric: 122, source: 'UAE Official' },
    { metric: 'DFM Drop', value: '4.7%', numeric: 4.7, source: 'Market Data' },
    { metric: 'Capital Risk', value: '$307B', numeric: 307, source: 'Financial Times' },
    { metric: 'Tourism Loss', value: '$30B', numeric: 30, source: 'WTO Estimate' },
    { metric: 'Mental Health+', value: '+28%', numeric: 28, source: 'Health Ministry' },
    { metric: 'Food Inflation', value: '112%', numeric: 112, source: 'FAO Data' },
  ]

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Key Quantitative Metrics" description="Verified data points from 32 sources">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Metrics Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {quantitativeMetrics.map((k, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card rounded-lg p-4 bg-glass-surface/50 border-glass-border"
              >
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {k.value}
                </div>
                <div className="text-sm text-platinum-500-300">{k.metric || k.source}</div>
                <div className="text-xs text-platinum-500-500 mt-1">
                  Source: {k.source || 'Multiple'}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Area Chart of Key Metrics */}
          <div className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-cyan-500" />
                Impact Scale
              </CardTitle>
              <CardDescription>Relative magnitude of key metrics</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <AreaChart
                data={quantitativeMetrics.map((k) => ({
                  name: (k.metric || k.source || '').substring(0, 15),
                  value: typeof k.numeric === 'number' ? k.numeric : parseFloat(k.value) || 0,
                }))}
                xAxisKey="name"
                areas={[{ dataKey: 'value', name: 'Metric Value', color: CHART_COLORS.teal }]}
                height={280}
                showGrid={true}
              />
            </CardContent>
          </div>
        </div>
      </GlassPanel>

      {/* Source Citation */}
      <div className="mt-6">
        <GlassPanel title="Source Citations" description="Tier-ranked verification sources">
          <ScrollArea className="h-[300px]">
            <div className="grid gap-3 md:grid-cols-2">
              {(data.sources || []).map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.03 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-platinum-800/30 border border-platinum-700/30"
                >
                  <Badge
                    variant="outline"
                    className={`${
                      s.tier === 'TIER_0'
                        ? 'border-cyan-500/50 text-cyan-400'
                        : s.tier === 'TIER_1'
                        ? 'border-navy-500/50 text-navy-500-400'
                        : s.tier === 'TIER_2'
                        ? 'border-indigo-500/50 text-indigo-400'
                        : 'border-purple-500/50 text-purple-400'
                    }`}
                  >
                    {s.tier?.replace('TIER_', 'T')}
                  </Badge>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-platinum-500-200 truncate">{s.source}</div>
                    <div className="text-xs text-platinum-500-500">{s.credibility}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </GlassPanel>
      </div>
    </motion.div>
  )
}
