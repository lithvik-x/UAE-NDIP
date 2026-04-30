'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { Shield, Award, BookOpen, Globe, Users, MessageSquare, Star, TrendingUp } from 'lucide-react'
import { negativeSourceCredibilityMatrix, tierDefinitions } from '@/lib/data-loader/sentiment-data'

const tierIcons = {
  0: Shield,
  1: Award,
  2: BookOpen,
  3: Globe,
  4: Users,
}

const tierColors = {
  0: 'bg-navy-900 text-platinum-100 border-platinum-400',
  1: 'bg-emerald-900/50 text-emerald-300 border-emerald-500/50',
  2: 'bg-denim-900/50 text-denim-300 border-denim-500/50',
  3: 'bg-gold-900/50 text-gold-300 border-gold-500/50',
  4: 'bg-rose-900/50 text-rose-300 border-rose-500/50',
}

const tierBgColors = {
  0: 'from-navy-800 to-navy-900',
  1: 'from-emerald-800/50 to-emerald-900/50',
  2: 'from-denim-800/50 to-denim-900/50',
  3: 'from-gold-800/50 to-gold-900/50',
  4: 'from-rose-800/50 to-rose-900/50',
}

interface SourceCredibilitySectionProps {
  className?: string
}

export function SourceCredibilitySection({ className }: SourceCredibilitySectionProps) {
  return (
    <div className={className}>
      {/* Tier Definitions */}
      <GlassPanel
        title="Source Credibility Tier System"
        description="Classification framework for 18 source types across 5 tiers"
        className="mb-6"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tierDefinitions.map((tier, idx) => {
            const Icon = tierIcons[tier.tier as keyof typeof tierIcons] || Shield
            return (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-gradient-to-b ${tierBgColors[tier.tier as keyof typeof tierBgColors]} rounded-lg p-4 border ${tierColors[tier.tier as keyof typeof tierColors].split(' ').pop()}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-bold font-rajdhani">
                    Tier {tier.tier}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-1">{tier.name}</p>
                <p className="text-xs text-slate-500">{tier.description}</p>
              </motion.div>
            )
          })}
        </div>
      </GlassPanel>

      {/* Source Matrix */}
      <GlassPanel
        title="Source Credibility Matrix"
        description={`${negativeSourceCredibilityMatrix.length} sources across 5 tiers`}
      >
        <ScrollArea className="h-[400px]">
          <div className="space-y-3">
            {negativeSourceCredibilityMatrix.map((source, idx) => {
              const Icon = tierIcons[source.tier as keyof typeof tierIcons] || Shield
              const colorClass = tierColors[source.tier as keyof typeof tierColors]
              return (
                <motion.div
                  key={source.source}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className={`glass-card border ${colorClass.split(' ').pop()} p-4`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${colorClass}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-200 font-rajdhani">
                          {source.source}
                        </h4>
                        <p className="text-xs text-slate-500">{source.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className={`${colorClass} text-xs`}>
                        Tier {source.tier}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-amber-400" />
                        <span className="text-sm font-mono text-slate-300">
                          {source.credibilityScore}/10
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-500">Credibility Score</span>
                      <span className="text-xs text-slate-400">{(source.credibilityScore / 10) * 100}%</span>
                    </div>
                    <Progress value={(source.credibilityScore / 10) * 100} className="h-1" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </ScrollArea>
      </GlassPanel>
    </div>
  )
}
