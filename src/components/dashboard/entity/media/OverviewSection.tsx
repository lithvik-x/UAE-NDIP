// @ts-nocheck
/**
 * Media Organizations Overview Section
 * UAE National Digital Intelligence Platform
 */

'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { PieChart, BarChart, CHART_COLORS } from '@/components/ui/chart-library'
import {
  Crown,
  Star,
  Activity,
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

interface OverviewSectionProps {
  data: any
  typeChartData: any[]
  relevanceChartData: any[]
  sentimentChartData: any[]
  coverageChartData: any[]
  criticalImportance: any[]
}

export function OverviewSection({
  data,
  typeChartData,
  relevanceChartData,
  sentimentChartData,
  coverageChartData,
  criticalImportance,
}: OverviewSectionProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Media Type Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Media Type Distribution</CardTitle>
            <CardDescription>Breakdown of tracked organizations by type</CardDescription>
          </CardHeader>
          <CardContent>
            {typeChartData.length > 0 ? (
              <PieChart
                data={typeChartData}
                height={280}
                showLegend={true}
                donut={true}
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
            )}
          </CardContent>
        </Card>

        {/* Relevance Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">UAE Relevance Distribution</CardTitle>
            <CardDescription>Organizations by strategic importance to UAE</CardDescription>
          </CardHeader>
          <CardContent>
            {relevanceChartData.length > 0 ? (
              <PieChart
                data={relevanceChartData}
                height={280}
                showLegend={true}
                donut={true}
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Sentiment Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Editorial Stance Distribution</CardTitle>
            <CardDescription>Sentiment breakdown across all media organizations</CardDescription>
          </CardHeader>
          <CardContent>
            {sentimentChartData.length > 0 ? (
              <PieChart
                data={sentimentChartData}
                height={280}
                showLegend={true}
                donut={true}
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
            )}
          </CardContent>
        </Card>

        {/* Coverage Themes */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Coverage Themes (April 2026)</CardTitle>
            <CardDescription>Key topics being covered by regional media</CardDescription>
          </CardHeader>
          <CardContent>
            {coverageChartData.length > 0 ? (
              <BarChart
                data={coverageChartData}
                xAxisKey="theme"
                bars={[{ dataKey: 'organizations', name: 'Orgs Covering', color: CHART_COLORS.navy }]}
                height={280}
                showGrid={true}
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Critical Importance Organizations */}
      <GlassPanel title="Critical Importance Organizations" description="Organizations with highest strategic relevance to UAE">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {criticalImportance.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex items-start gap-3 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-gold text-white">
                <Crown className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-navy-900 dark:text-platinum-100">{item.organization}</p>
                <p className="text-xs text-platinum-600 dark:text-platinum-400 mt-1">{item.reason}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}
