'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { GlassPanel } from '@/components/dashboard/glass-card'
import type { TopInfluencer } from '@/lib/data/entity/influencers-data'

interface TopInfluencersTableProps {
  top10: TopInfluencer[]
  richestUae: { rank: number; name: string; followers: string; estimatedEarningsPost: string; category: string }[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function TopInfluencersTable({ top10, richestUae }: TopInfluencersTableProps) {
  return (
    <>
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
      >
        <GlassPanel
          title="Top 10 UAE Influencers by Follower Count"
          description="Ranked by total reach across platforms"
          badge="2026 Estimates"
        >
          <Table>
            <TableHeader>
              <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">#</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Name</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Handle</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Platform</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Followers</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Category</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Nationality</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Est. Earnings/Post</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {top10.map((inf) => (
                <TableRow key={inf.rank} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                  <TableCell><span className="font-bold text-gold">{inf.rank}</span></TableCell>
                  <TableCell><span className="font-semibold text-navy-900 dark:text-platinum-100">{inf.name}</span></TableCell>
                  <TableCell><span className="text-sm text-platinum-600 dark:text-platinum-400 font-mono">{inf.handle}</span></TableCell>
                  <TableCell><span className="text-sm text-platinum-700 dark:text-platinum-300">{inf.platform}</span></TableCell>
                  <TableCell><span className="text-sm font-bold text-navy-900 dark:text-platinum-100">{inf.followers}</span></TableCell>
                  <TableCell><Badge variant="outline" className="text-xs">{inf.category}</Badge></TableCell>
                  <TableCell><span className="text-sm text-platinum-700 dark:text-platinum-300">{inf.nationality}</span></TableCell>
                  <TableCell><span className="text-sm text-emerald-600 dark:text-emerald-400">{inf.estimatedEarningsPost || '—'}</span></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GlassPanel>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <GlassPanel
          title="Richest UAE Influencers (2026 Estimates)"
          description="Estimated earnings per sponsored post"
          badge="Commercial Data"
        >
          <Table>
            <TableHeader>
              <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Rank</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Name</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Followers</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Est. Earnings/Post</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {richestUae.map((inf) => (
                <TableRow key={inf.rank} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                  <TableCell><span className="font-bold text-gold">{inf.rank}</span></TableCell>
                  <TableCell><span className="font-semibold text-navy-900 dark:text-platinum-100">{inf.name}</span></TableCell>
                  <TableCell><span className="text-sm font-bold text-navy-900 dark:text-platinum-100">{inf.followers}</span></TableCell>
                  <TableCell><span className="text-sm text-emerald-600 dark:text-emerald-400">{inf.estimatedEarningsPost}</span></TableCell>
                  <TableCell><Badge variant="outline" className="text-xs">{inf.category}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GlassPanel>
      </motion.div>
    </>
  )
}
