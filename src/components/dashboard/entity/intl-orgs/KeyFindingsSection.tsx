'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Globe,
  HeartHandshake,
  TrendingUp,
  AlertCircle,
  Shield,
  Award,
  LucideIcon,
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const cardHover = {
  rest: { scale: 1, opacity: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
}

interface Finding {
  title: string
  description: string
  icon: LucideIcon
  color: 'emerald' | 'gold' | 'denim' | 'rose' | 'cyan' | 'purple'
}

interface KeyFindingsSectionProps {
  findings: Finding[]
}

export function KeyFindingsSection({ findings }: KeyFindingsSectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Key Findings" description="Critical intelligence from the analysis">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {findings.map((finding, idx) => (
            <motion.div
              key={idx}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
            >
              <Card className="glass-card h-full">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      finding.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30' :
                      finding.color === 'gold' ? 'bg-gold-100 dark:bg-gold-900/30' :
                      finding.color === 'denim' ? 'bg-denim-100 dark:bg-denim-900/30' :
                      finding.color === 'rose' ? 'bg-rose-100 dark:bg-rose-900/30' :
                      finding.color === 'cyan' ? 'bg-cyan-100 dark:bg-cyan-900/30' :
                      'bg-purple-100 dark:bg-purple-900/30'
                    }`}>
                      <finding.icon className={`h-5 w-5 ${
                        finding.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                        finding.color === 'gold' ? 'text-gold-700 dark:text-gold-400' :
                        finding.color === 'denim' ? 'text-denim-600 dark:text-denim-400' :
                        finding.color === 'rose' ? 'text-rose-600 dark:text-rose-400' :
                        finding.color === 'cyan' ? 'text-cyan-600 dark:text-cyan-400' :
                        'text-purple-600 dark:text-purple-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-navy-900 dark:text-platinum-100">{finding.title}</p>
                      <p className="text-xs text-platinum-500 mt-1">{finding.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </motion.div>
  )
}

export default KeyFindingsSection