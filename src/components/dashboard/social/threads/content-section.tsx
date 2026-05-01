// Content Strategy Section Component for Threads Intelligence
// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { BarChart, CHART_COLORS } from '@/components/ui/chart-library'
import { Calendar, Image } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

interface ContentSectionProps {
  contentPerformance: any[]
  optimalPostingTimes: any[]
  engagementDrivers: any[]
  uaeContentStrategy: any[]
  usageHabits: any[]
}

export function ContentSection({
  contentPerformance,
  optimalPostingTimes,
  engagementDrivers,
  uaeContentStrategy,
  usageHabits,
}: ContentSectionProps) {
  const contentPerformanceData = contentPerformance.map((item: any) => ({
    type: item.contentType,
    performance: item.contentType === 'Pictures' ? 100 : item.contentType === 'Videos' ? 99.4 : item.contentType === 'Text-only posts' ? 40 : 63,
    description: item.advantage,
  }))

  const engagementData = [
    { name: 'Likes', value: 65, color: CHART_COLORS.rose },
    { name: 'Replies', value: 18, color: CHART_COLORS.info },
    { name: 'Reposts', value: 12, color: CHART_COLORS.gold },
  ]

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel title="Content Strategy Insights" description="Optimal posting times and content formats">
          <div className="space-y-6">
            {/* Content Format Performance */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Content Format Performance</CardTitle>
                <CardDescription>Pictures outperform all other formats</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <BarChart
                  data={contentPerformanceData}
                  xAxisKey="type"
                  bars={[{ dataKey: 'performance', name: 'Performance %', color: CHART_COLORS.rose }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </motion.div>

            {/* Optimal Posting Times */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Optimal Posting Times</CardTitle>
                <CardDescription>Best times and days for engagement</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-3">
                  {optimalPostingTimes.map((item: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-gold-700" />
                        <span className="font-medium text-platinum-500-200">{item.day}</span>
                        <span className="text-sm text-platinum-500-400">at {item.time}</span>
                      </div>
                      <Badge variant={item.engagement === 'Highest' ? 'default' : 'outline'}>
                        {item.engagement}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Engagement Drivers */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Engagement Drivers</CardTitle>
                <CardDescription>What drives engagement on Threads</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {engagementDrivers.map((item: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-lg bg-platinum-800/50 p-4 cursor-pointer"
                    >
                      <p className="font-medium text-platinum-500-200">{item.strategy}</p>
                      <p className="text-sm text-emerald-400">{item.impact}</p>
                      <p className="text-xs text-platinum-500-500 mt-1">Source: {item.source}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* UAE-Specific Strategy */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">UAE-Specific Strategy</CardTitle>
                <CardDescription>Content recommendations for UAE market</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  {uaeContentStrategy.map((item: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-lg bg-platinum-800/50 p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-platinum-500-200">{item.strategy}</p>
                          <p className="text-sm text-platinum-500-400 mt-1">{item.details}</p>
                        </div>
                        <Badge variant="default" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                          {item.expectedImpact}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Engagement Metrics */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Engagement Metrics</CardTitle>
                <CardDescription>Average engagement per post in UAE</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <BarChart
                  data={engagementData}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: 'Avg per Post', color: CHART_COLORS.info }]}
                  height={280}
                  showGrid={true}
                />
              </CardContent>
            </motion.div>

            {/* Usage Habits */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Usage Habits (Global)</CardTitle>
                <CardDescription>How users engage with Threads</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-3 sm:grid-cols-2">
                  {usageHabits.map((habit: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                      <span className="text-sm text-platinum-500-300">{habit.metric}</span>
                      <span className="text-sm font-bold text-gold-700">{habit.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </motion.div>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}

export default ContentSection
