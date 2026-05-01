'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Globe,
  Zap,
  Clock,
  Award,
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

interface ExecutionMetadata {
  dateExecuted: string
  dateEnriched: string
  frameworkVersion: string
  queriesExecuted: number
  pagesFetched: number
  source: string
}

interface SourcesSectionProps {
  metadata: ExecutionMetadata
}

export function SourcesSection({ metadata }: SourcesSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Sources Index" description="Data sources for this report">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <Globe className="h-8 w-8 mx-auto text-emerald-500 mb-2" />
              <p className="text-lg font-bold">{metadata.pagesFetched}</p>
              <p className="text-xs text-platinum-500-500">Pages Fetched</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <Zap className="h-8 w-8 mx-auto text-gold-700 mb-2" />
              <p className="text-lg font-bold">{metadata.queriesExecuted}</p>
              <p className="text-xs text-platinum-500-500">Queries Executed</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto text-denim-500 mb-2" />
              <p className="text-lg font-bold">{metadata.dateEnriched}</p>
              <p className="text-xs text-platinum-500-500">Date Enriched</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 mx-auto text-cyan-500 mb-2" />
              <p className="text-lg font-bold">{metadata.frameworkVersion}</p>
              <p className="text-xs text-platinum-500-500">Framework Version</p>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

export default SourcesSection