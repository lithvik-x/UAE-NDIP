'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Shield, Award, Calendar, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'
import type {
  BettingTimelineDashboard,
  OlympicMedalDashboard,
  CamelRacingTimeline,
  YouthDevelopmentProgram,
  HumanRightsViolation,
  RightsHolder,
} from '@/lib/data/topics/sports-data'

interface SportsGovernanceSectionProps {
  federalLawObjectives: { objective: string; description: string }[]
  bettingTimeline: BettingTimelineDashboard[]
  camelRacingTimeline: CamelRacingTimeline[]
  olympicMedals: OlympicMedalDashboard[]
  youthDevelopmentPrograms: YouthDevelopmentProgram[]
  humanRightsViolations: HumanRightsViolation[]
  rightsHolders: RightsHolder[]
  womensSportsParticipation: {
    cycling: string[]
    football: string[]
    motorsport: string[]
    equestrian: string[]
  }
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

export function SportsGovernanceSection({
  federalLawObjectives,
  bettingTimeline,
  camelRacingTimeline,
  olympicMedals,
  youthDevelopmentPrograms,
  humanRightsViolations,
  rightsHolders,
  womensSportsParticipation,
}: SportsGovernanceSectionProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-6"
    >
      {/* Federal Law 4/2023 */}
      <motion.div variants={fadeInUp}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-gold" />
              Federal Law No. 4/2023
            </CardTitle>
            <CardDescription>Regulation of Sports objectives</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {federalLawObjectives.map((obj, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-gold" />
                    <span className="font-semibold text-slate-200">{obj.objective}</span>
                  </div>
                  <p className="text-sm text-slate-400">{obj.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sports Betting Timeline */}
      <motion.div variants={fadeInUp}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gold" />
              Sports Betting Legalization Timeline
            </CardTitle>
            <CardDescription>GCGRA establishment and milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {bettingTimeline.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold text-xs font-bold">
                      {event.year.charAt(0)}
                    </div>
                    {index < bettingTimeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-slate-700 mt-1" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-xs text-gold font-medium">{event.year}</p>
                    <p className="text-sm text-slate-300">{event.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Camel Racing Timeline */}
      <motion.div variants={fadeInUp}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Camel Racing Timeline</CardTitle>
            <CardDescription>Robot jockey adoption history</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              <div className="space-y-2">
                {camelRacingTimeline.slice(0, 7).map((event, index) => (
                  <div key={index} className="flex gap-4 p-2 rounded bg-slate-800/30">
                    <span className="text-xs font-mono text-gold w-24">{event.year}</span>
                    <span className="text-sm text-slate-300">{event.event}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </motion.div>

      {/* Olympic Performance */}
      <motion.div variants={fadeInUp}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="h-5 w-5 text-gold" />
              Olympic Performance
            </CardTitle>
            <CardDescription>Historical medals — only 2 total (both bronze)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {olympicMedals.map((medal, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-500">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-200">
                      {medal.medal} — {medal.event}
                    </p>
                    <p className="text-sm text-slate-400">
                      {medal.athlete} | {medal.year} {medal.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Women & Youth Sports */}
      <motion.div variants={fadeInUp}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Women & Youth Sports</CardTitle>
            <CardDescription>Participation and development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-emerald-900/50 bg-emerald-900/20 p-4">
                <h4 className="font-semibold text-emerald-400 mb-2">Women&apos;s Cycling</h4>
                <p className="text-sm text-slate-300">
                  UAE Tour Women — only women&apos;s World Tour race in Middle East
                </p>
                <p className="text-sm text-slate-400 mt-2">
                  {womensSportsParticipation.cycling.join(' | ')}
                </p>
              </div>
              <div className="rounded-lg border border-platinum-900/50 bg-platinum-900/20 p-4">
                <h4 className="font-semibold text-platinum-400 mb-2">Youth Development</h4>
                <p className="text-sm text-slate-300">
                  {youthDevelopmentPrograms.length}+ programs including scholarships and academies
                </p>
                <div className="mt-2 space-y-1">
                  {youthDevelopmentPrograms.slice(0, 3).map((p, i) => (
                    <p key={i} className="text-xs text-slate-400">
                      {p.program}: {p.details}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Human Rights Context */}
      <motion.div variants={fadeInUp}>
        <Card className="glass-card border-red-900/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              Human Rights Context
            </CardTitle>
            <CardDescription>Concerns cited by HRW and international organizations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {humanRightsViolations.map((violation, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-red-900/30 bg-red-900/10 p-3"
                >
                  <p className="font-semibold text-red-400 text-sm">{violation.issue}</p>
                  <p className="text-xs text-slate-400 mt-1">{violation.details}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Media Rights Holders */}
      <motion.div variants={fadeInUp}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Media Rights Holders</CardTitle>
            <CardDescription>Sports broadcasting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {rightsHolders.map((holder, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50"
                >
                  <span className="font-semibold text-slate-200">{holder.holder}</span>
                  <span className="text-sm text-slate-400">{holder.rights}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
