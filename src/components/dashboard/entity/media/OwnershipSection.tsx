// @ts-nocheck
/**
 * Media Organizations Ownership Section
 * UAE National Digital Intelligence Platform
 */

'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { PieChart } from '@/components/ui/chart-library'
import {
  Crown,
  Building2,
  Users,
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

interface OwnershipSectionProps {
  ownershipStructures: any[]
  ownershipChartData: any[]
}

export function OwnershipSection({
  ownershipStructures,
  ownershipChartData,
}: OwnershipSectionProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Ownership Type Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Ownership Model Distribution</CardTitle>
            <CardDescription>Breakdown by ownership structure</CardDescription>
          </CardHeader>
          <CardContent>
            {ownershipChartData.length > 0 ? (
              <PieChart
                data={ownershipChartData}
                height={300}
                showLegend={true}
                donut={true}
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
            )}
          </CardContent>
        </Card>

        {/* Ownership Details */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Ownership Structures</CardTitle>
            <CardDescription>Detailed breakdown by ownership category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {ownershipStructures.map((os, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant={os.category === 'STATE_OWNED' ? 'default' : os.category === 'FAMILY_OWNED' ? 'secondary' : 'outline'} className="text-xs">
                      {os.category.replace('_', ' ')}
                    </Badge>
                    <span className="text-sm text-platinum-500">{os.organizations.length} organizations</span>
                  </div>
                  <div className="pl-4 space-y-1">
                    {os.organizations.slice(0, 5).map((org, j) => (
                      <p key={j} className="text-xs text-platinum-700 dark:text-platinum-300">{org}</p>
                    ))}
                    {os.organizations.length > 5 && (
                      <p className="text-xs text-platinum-500">+{os.organizations.length - 5} more</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Beneficial Owners */}
      <GlassPanel title="Ultimate Beneficial Owners" description="Key individuals and entities with media holdings">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-gradient-gold/10 border border-gold-200/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <Crown className="h-5 w-5 text-gold-700" />
              <span className="font-semibold text-navy-900 dark:text-platinum-100">Sheikh Mansour</span>
            </div>
            <p className="text-xs text-platinum-600 dark:text-platinum-400">UAE Vice President</p>
            <p className="text-xs text-platinum-500 mt-1">The National, Sky News Arabia (via IMI)</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-gradient-navy/10 border border-navy-200/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="h-5 w-5 text-navy-600" />
              <span className="font-semibold text-navy-900 dark:text-platinum-100">Abu Dhabi Government</span>
            </div>
            <p className="text-xs text-platinum-600 dark:text-platinum-400">State Media</p>
            <p className="text-xs text-platinum-500 mt-1">Al Ittihad, WAM</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-gradient-emerald/10 border border-emerald-200/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="h-5 w-5 text-emerald-600" />
              <span className="font-semibold text-navy-900 dark:text-platinum-100">Dubai Government</span>
            </div>
            <p className="text-xs text-platinum-600 dark:text-platinum-400">State Media</p>
            <p className="text-xs text-platinum-500 mt-1">Al Bayan, Emarat Al Youm</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-gradient-gold/10 border border-gold-200/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <Crown className="h-5 w-5 text-gold-700" />
              <span className="font-semibold text-navy-900 dark:text-platinum-100">Saudi PIF</span>
            </div>
            <p className="text-xs text-platinum-600 dark:text-platinum-400">Public Investment Fund</p>
            <p className="text-xs text-platinum-500 mt-1">Al Arabiya (54%), Al Hadath</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-gradient-platinum/10 border border-platinum-200/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-platinum-600" />
              <span className="font-semibold text-navy-900 dark:text-platinum-100">Galadari Family</span>
            </div>
            <p className="text-xs text-platinum-600 dark:text-platinum-400">Family Ownership</p>
            <p className="text-xs text-platinum-500 mt-1">Khaleej Times</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg bg-gradient-platinum/10 border border-platinum-200/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-platinum-600" />
              <span className="font-semibold text-navy-900 dark:text-platinum-100">Taryam Family</span>
            </div>
            <p className="text-xs text-platinum-600 dark:text-platinum-400">Family Ownership</p>
            <p className="text-xs text-platinum-500 mt-1">Al Khaleej, Gulf Today</p>
          </motion.div>
        </div>
      </GlassPanel>
    </div>
  )
}
