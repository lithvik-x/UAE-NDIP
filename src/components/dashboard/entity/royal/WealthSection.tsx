'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/ui/glass-panel'
import { BarChart, AreaChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Trophy } from 'lucide-react'
import type { WealthMetric } from '@/lib/data/entity/royal-family-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

interface WealthSectionProps {
  wealthMetrics: WealthMetric[]
}

export function WealthSection({
  wealthMetrics,
}: WealthSectionProps) {
  // Wealth chart data
  const wealthChartData = [
    { name: 'ADIA', value: 790 },
    { name: 'Al Nahyan Assets', value: 1000 },
    { name: 'Tahnoon Portfolio', value: 1300 },
    { name: 'ADQ', value: 110 },
    { name: 'Mansour Africa', value: 110 },
    { name: 'Ghadan 21', value: 50 },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Wealth Metrics Bar */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base font-rajdhani font-semibold">Wealth & Assets ($ Billions)</CardTitle>
            <CardDescription className="text-xs">Key wealth metrics from the royal families</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={wealthChartData}
              xAxisKey="name"
              bars={[{ dataKey: 'value', name: '$ Billions', color: CHART_COLORS.gold }]}
              height={300}
              showGrid={true}
            />
          </CardContent>
        </Card>

        {/* Wealth Table */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-base font-rajdhani font-semibold">Wealth Metrics Detail</CardTitle>
            <CardDescription className="text-xs">Detailed breakdown of sovereign wealth and investments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {wealthMetrics.map((w, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-platinum-200/30 dark:border-platinum-700/30 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-navy-900 dark:text-platinum-100">{w.entity}</p>
                    <p className="text-xs text-platinum-500">Source: {w.source}</p>
                  </div>
                  <Badge variant="gold" className="text-xs font-semibold shrink-0 ml-2">{w.amount}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bloomberg Ranking */}
      <motion.div {...fadeInUp}>
        <GlassPanel
          title="Bloomberg Rich Family Ranking"
          description="World's richest royal families 2024"
          icon={<Trophy className="h-5 w-5 text-gold-600" />}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-6 rounded-lg bg-gradient-gold text-white text-center">
              <p className="text-4xl font-bold">#1</p>
              <p className="text-sm font-semibold mt-1">House of Saud</p>
              <p className="text-xs opacity-80">Saudi Arabia</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-platinum text-white text-center border-2 border-platinum-300">
              <p className="text-4xl font-bold">#2</p>
              <p className="text-sm font-semibold mt-1">House of Nahyan</p>
              <p className="text-xs opacity-80">UAE — Abu Dhabi</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-navy text-white text-center">
              <p className="text-4xl font-bold">#3</p>
              <p className="text-sm font-semibold mt-1">House of Maktoum</p>
              <p className="text-xs opacity-80">UAE — Dubai</p>
            </div>
          </div>
        </GlassPanel>
      </motion.div>

      {/* Wealth by Emirate Area Chart */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-base font-rajdhani font-semibold">Comparative Wealth Metrics ($ Billions)</CardTitle>
          <CardDescription className="text-xs">ADIA, Al Nahyan assets, Tahnoon portfolio comparison</CardDescription>
        </CardHeader>
        <CardContent>
          <AreaChart
            data={[
              { name: 'ADIA', value: 790 },
              { name: 'Al Nahyan', value: 1000 },
              { name: 'Tahnoon', value: 1300 },
              { name: 'ADQ', value: 110 },
              { name: 'Mansour Africa', value: 110 },
            ]}
            areas={[{ dataKey: 'value', name: '$ Billions', color: CHART_COLORS.gold, fillOpacity: 0.5 }]}
            height={300}
            showGrid={true}
          />
        </CardContent>
      </Card>
    </div>
  )
}
