'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CHART_COLORS } from '@/components/ui/chart-library'
import { BarChart, PieChart } from '@/components/ui/chart-library'
import { AlertCircle, Bot, Target, ChartPie } from 'lucide-react'
import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'
import type { twitterXData } from '@/lib/data/social/twitter-x-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

interface TwitterXInfluenceSectionProps {
  data: typeof twitterXData
}

export function TwitterXInfluenceSection({ data }: TwitterXInfluenceSectionProps) {
  const { botActivity, metrics } = data
  const influenceOperations = metrics.influenceOperations

  const botNetworkData = influenceOperations.map((op: { operation: string; year: string | number; accounts: string | number; target: string }) => ({
    name: op.operation,
    accounts: typeof op.accounts === 'number' ? op.accounts : parseInt(op.accounts) || 0,
    color: op.operation.includes('2019') ? CHART_COLORS.rose :
           op.operation.includes('COP28') ? CHART_COLORS.gold :
           op.operation.includes('Africa') ? CHART_COLORS.info :
           CHART_COLORS.platinum,
  }))

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Influence Operations"
        description="Bot networks and coordinated inauthentic behavior"
      >
        <div className="space-y-6">
          {/* Bot Activity Critical Alert */}
          <Card className="glass-card border-rose-500/50 bg-rose-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-rose-400">
                <AlertCircle className="h-5 w-5" />
                Critical: 91% Bot Activity
              </CardTitle>
              <CardDescription>Highest bot percentage of all monitored platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-platinum-300">Estimated Bot Percentage</span>
                  <span className="text-2xl font-bold text-rose-400">{botActivity.estimatedBotPercent}%</span>
                </div>
                <Progress value={botActivity.estimatedBotPercent} className="h-3" />
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-platinum-300">Coordinated Inauthentic Behavior</span>
                  <Badge variant="destructive">Detected</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-platinum-300">Confidence Level</span>
                  <span className="text-lg font-bold text-gold">{Math.round(botActivity.confidence * 100)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bot Networks Chart */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Bot className="h-5 w-5 text-platinum" />
                Bot Network Operations
              </CardTitle>
              <CardDescription>Major coordinated influence operations</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart
                data={botNetworkData}
                xAxisKey="name"
                bars={[{ dataKey: 'accounts', name: 'Accounts', color: CHART_COLORS.rose }]}
                height={280}
                showGrid={true}
              />
            </CardContent>
          </Card>

          {/* CIB Indicators */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-gold" />
                Coordinated Inauthentic Behavior Indicators
              </CardTitle>
              <CardDescription>Detected patterns of automated/coordinated activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {botActivity.indicators.map((indicator, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 rounded-lg bg-platinum-800/50 p-4"
                  >
                    <Bot className="h-5 w-5 text-platinum" />
                    <span className="text-sm text-platinum-200">{indicator}</span>
                    <Badge variant="destructive" className="ml-auto">Active</Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bot vs Real Pie */}
          <Card className="glass-card border-glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ChartPie className="h-5 w-5 text-info" />
                Bot vs Real Activity
              </CardTitle>
              <CardDescription>Estimated distribution of authentic vs bot activity</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart
                data={[
                  { name: 'Bot Activity', value: botActivity.estimatedBotPercent, color: CHART_COLORS.rose },
                  { name: 'Real Users', value: 100 - botActivity.estimatedBotPercent, color: CHART_COLORS.emerald },
                ]}
                height={280}
                showLegend={true}
              />
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
