// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  academicInstitutions,
  platformsStudied,
  keyResearchers,
  policyEntities,
  cognitiveBiases,
  historicalEvents,
} from '@/lib/data-loader/echo-chamber-data'
import {
  Building2,
  Globe,
  Users,
  Scale,
  Brain,
  History,
} from 'lucide-react'

export function SectionEntityRegistries() {
  return (
    <div className="space-y-6">
      {/* Academic Institutions */}
      <GlassPanel
        title="Academic Institutions"
        description="Research institutions contributing to echo chamber research"
        badge="B.1"
      >
        <ScrollArea className="h-[300px]">
          <div className="space-y-3">
            {academicInstitutions.map((inst, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-platinum-200">{inst.entity}</p>
                    <p className="text-sm text-platinum-400">{inst.researchContribution}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">{inst.role}</Badge>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Platforms Studied */}
      <GlassPanel
        title="Platforms Studied"
        description="Social platforms analyzed in echo chamber research"
        badge="B.2"
      >
        <ScrollArea className="h-[350px]">
          <div className="space-y-3">
            {platformsStudied.map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 }}
                className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-platinum-200">{platform.platform}</p>
                    <p className="text-sm text-platinum-400">{platform.type} — {platform.curationMethod}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Badge className={
                    platform.bubbleRisk === 'HIGH' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' :
                    platform.bubbleRisk === 'MEDIUM' ? 'bg-amber-500/20 text-amber-400 border-amber-500/50' :
                    'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                  }>
                    {platform.bubbleRisk} Risk
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Key Researchers */}
      <GlassPanel
        title="Key Researchers"
        description="Leading academics and their contributions"
        badge="B.3"
      >
        <ScrollArea className="h-[350px]">
          <div className="space-y-3">
            {keyResearchers.map((researcher, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 }}
                className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-platinum-200">{researcher.researcher}</p>
                    <p className="text-sm text-platinum-400">{researcher.institution}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs max-w-[200px] text-center">{researcher.contribution}</Badge>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Policy/Regulatory Entities */}
      <GlassPanel
        title="Policy & Regulatory Entities"
        description="Organizations involved in platform regulation"
        badge="B.4"
      >
        <ScrollArea className="h-[250px]">
          <div className="space-y-3">
            {policyEntities.map((entity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-platinum-200">{entity.entity}</p>
                    <p className="text-sm text-platinum-400">{entity.type}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs max-w-[200px] text-right">{entity.contribution}</Badge>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </GlassPanel>

      {/* Cognitive Biases */}
      <GlassPanel
        title="Cognitive Biases Registry"
        description="Psychological factors contributing to echo chamber formation"
        badge="B.5"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cognitiveBiases.map((bias, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-4 w-4 text-purple-400" />
                <h4 className="font-semibold text-platinum-200">{bias.bias}</h4>
              </div>
              <p className="text-sm text-platinum-400 mb-2">{bias.effectOnEchoChambers}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-platinum-500">Mitigation:</span>
                <Badge className={
                  bias.mitigationDifficulty === 'High' ? 'bg-rose-500/20 text-rose-400 border-rose-500/50 text-xs' :
                  'bg-amber-500/20 text-amber-400 border-amber-500/50 text-xs'
                }>
                  {bias.mitigationDifficulty}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassPanel>

      {/* Historical Events */}
      <GlassPanel
        title="Historical Echo Chamber Case Studies"
        description="Events used as empirical examples of echo chamber dynamics"
        badge="B.6"
      >
        <div className="space-y-3">
          {historicalEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="flex items-center justify-between rounded-lg border border-platinum-700/50 bg-platinum-800/30 p-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                  <History className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-platinum-200">{event.eventPeriod}</p>
                  <p className="text-sm text-platinum-400">{event.era}</p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs max-w-[250px] text-right">{event.echoChamberType}</Badge>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}
