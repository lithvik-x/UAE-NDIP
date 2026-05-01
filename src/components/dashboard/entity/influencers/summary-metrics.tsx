'use client'

import { motion } from 'framer-motion'
import { Users, Globe, TrendingUp, Shield } from 'lucide-react'
import { MetricCard } from '@/components/dashboard/metric-card'
import type { InfluencerProfile } from '@/lib/data/entity/influencers-data'

interface SummaryMetricsProps {
  totalInfluencerCount: number
  totalUaeUsers: number
  avgEngagement: number
  licensedAgencies: number
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export function SummaryMetrics({
  totalInfluencerCount,
  totalUaeUsers,
  avgEngagement,
  licensedAgencies,
}: SummaryMetricsProps) {
  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fadeInUp} transition={{ duration: 0.4 }}>
        <MetricCard
          title="Tracked Influencers"
          value={totalInfluencerCount}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
        />
      </motion.div>
      <motion.div variants={fadeInUp} transition={{ duration: 0.4 }}>
        <MetricCard
          title="UAE Social Media Users"
          value={`${totalUaeUsers}M`}
          icon={<Globe className="h-6 w-6" />}
          gradient="cyan"
        />
      </motion.div>
      <motion.div variants={fadeInUp} transition={{ duration: 0.4 }}>
        <MetricCard
          title="Avg Engagement Rate"
          value={avgEngagement}
          unit="%"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
      </motion.div>
      <motion.div variants={fadeInUp} transition={{ duration: 0.4 }}>
        <MetricCard
          title="Licensed Agencies"
          value={licensedAgencies}
          icon={<Shield className="h-6 w-6" />}
          gradient="purple"
        />
      </motion.div>
    </motion.div>
  )
}
