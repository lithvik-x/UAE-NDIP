'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Building2,
  Users,
  Crown,
  Heart,
  Plane,
  Landmark,
  GraduationCap,
  Globe,
  Shield,
} from 'lucide-react'
import {
  governmentEntitiesPositive,
  leadershipFigures,
  expatriateCommunities,
  tourismEntities,
} from '@/lib/data-loader'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const ENTITY_ICONS: Record<string, React.ElementType> = {
  'Governing Body': Landmark,
  'Provincial Government': Building2,
  'Military': Shield,
  'Sovereign Wealth Fund': Globe,
  'Innovation Hub': GraduationCap,
  'Academic': GraduationCap,
  'Humanitarian': Heart,
  'Security Body': Shield,
}

const TIER_COLORS = {
  0: 'slate',
  1: 'emerald',
  2: 'gold',
  3: 'denim',
  4: 'rose',
} as const

export function EntitiesSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants}>
        <Badge variant="outline" className="mb-2 border-purple-500/50 text-purple-400">
          ENTITY REGISTRY
        </Badge>
        <h2 className="text-2xl font-bold font-rajdhani text-platinum-500-100">
          Government, Leadership & Demographics
        </h2>
        <p className="text-sm text-platinum-500-400 mt-1">
          Key entities, leadership figures, expatriate communities, and tourism entities
        </p>
      </motion.div>

      {/* Government Entities */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Government Entities & Official Bodies"
          description="10 key government entities with Tier 1-2 credibility ratings"
          badge="TIER 1-2"
          className="border-emerald-500/30"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {governmentEntitiesPositive.map((entity, idx) => {
              const Icon = ENTITY_ICONS[entity.type] || Building2
              return (
                <motion.div
                  key={entity.entity}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-glass-surface border border-glass-border backdrop-blur-sm hover:border-emerald-500/40 transition-all"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-${TIER_COLORS[entity.credibility]}-500/20 shrink-0`}>
                    <Icon className={`h-5 w-5 text-${TIER_COLORS[entity.credibility]}-400`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-platinum-500-200 truncate">{entity.entity}</p>
                    <p className="text-xs text-platinum-500-500">{entity.type}</p>
                    <p className="text-xs text-platinum-500-600 mt-1 line-clamp-2">{entity.mandate}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`shrink-0 text-xs border-${TIER_COLORS[entity.credibility]}-500/50 text-${TIER_COLORS[entity.credibility]}-400`}
                  >
                    T{entity.credibility}
                  </Badge>
                </motion.div>
              )
            })}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Leadership Figures */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Key Leadership Figures"
          description="UAE leadership continuity from founding father to current president"
          badge="PRESIDENTIAL"
          className="border-orange-500/30"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipFigures.map((leader) => (
              <motion.div
                key={leader.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                    <Crown className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-platinum-500-100 truncate">{leader.name}</p>
                    <p className="text-xs text-orange-400">{leader.title}</p>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <p className="text-platinum-500-400">{leader.context}</p>
                  <p className="text-platinum-500-500">Tenure: {leader.tenure}</p>
                </div>
                <Badge
                  variant="outline"
                  className="mt-3 border-orange-500/50 text-orange-400 text-xs"
                >
                  T{leader.credibility}
                </Badge>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Expatriate Communities */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Major Expatriate Communities"
          description="9 major expatriate communities forming the backbone of UAE diversity"
          badge="DIVERSITY"
          className="border-purple-500/30"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {expatriateCommunities.map((community, idx) => (
              <motion.div
                key={community.community}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 shrink-0">
                  <Users className="h-5 w-5 text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-platinum-500-200">{community.community}</p>
                    <Badge
                      variant="outline"
                      className={`text-xs shrink-0 ${
                        community.organized === 'Yes' || community.organized === 'Yes - Indian diaspora'
                          ? 'border-emerald-500/50 text-emerald-400'
                          : community.organized === 'Growing'
                          ? 'border-gold-500/50 text-gold-400'
                          : 'border-platinum-500/50 text-platinum-500-400'
                      }`}
                    >
                      {community.organized === 'Yes' || community.organized === 'Yes - Indian diaspora'
                        ? 'Organized'
                        : community.organized === 'Growing'
                        ? 'Growing'
                        : 'Partial'}
                    </Badge>
                  </div>
                  <p className="text-xs text-platinum-500-500 mt-1">{community.population}</p>
                  <p className="text-xs text-platinum-500-600 mt-1 line-clamp-2">{community.sectors}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>

      {/* Tourism & Hospitality Entities */}
      <motion.div variants={itemVariants}>
        <GlassPanel
          title="Tourism & Hospitality Entities"
          description="Iconic luxury hotels and resorts defining UAE's global tourism brand"
          badge="LUXURY"
          className="border-gold-500/30"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {tourismEntities.map((entity) => (
              <motion.div
                key={entity.entity}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="p-4 rounded-xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/30 backdrop-blur-sm text-center hover:shadow-lg hover:shadow-gold-500/10 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 mx-auto mb-3">
                  <Plane className="h-6 w-6 text-gold-400" />
                </div>
                <p className="text-sm font-bold text-platinum-500-100">{entity.entity}</p>
                <p className="text-xs text-gold-400 mt-1">{entity.type}</p>
                <p className="text-xs text-platinum-500-500 mt-2">{entity.feature}</p>
                <Badge
                  variant="outline"
                  className="mt-2 border-gold-500/50 text-gold-400 text-xs"
                >
                  T{entity.credibility}
                </Badge>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}
