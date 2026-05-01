// Reddit Human Rights Section - Mass trials, Kafala, discrimination
// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertOctagon,
  UsersRound,
  Scale3D,
  AlertTriangle,
  Users,
  HeartPulse,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }

interface MassTrial {
  defendants: number
  convicted: number
  lifeSentences: number
}

interface KeyPrisoner {
  name: string
  status: string
  reason: string
}

interface KafalaIssue {
  issue: string
  details: string
}

interface WomensSafetyPost {
  title: string
  date: string
  keyFacts: string
}

interface DeportationPost {
  title: string
  date: string
  keyFacts: string
}

interface RedditHumanRightsSectionProps {
  massTrialData?: MassTrial
  keyPrisoners?: KeyPrisoner[]
  kafalaIssues?: KafalaIssue[]
  womensSafetyPosts?: WomensSafetyPost[]
  deportationPosts?: DeportationPost[]
  domesticWorkerWages?: { nationality: string; monthlySalary: string; source: string }[]
  abuseMethods?: string[]
  sexTraffickingCases?: { entity: string; details: string; origin?: string; method?: string; location?: string; term?: string; hashtag?: string }[]
}

export function RedditHumanRightsSection({
  massTrialData,
  keyPrisoners = [],
  kafalaIssues = [],
  womensSafetyPosts = [],
  deportationPosts = [],
  domesticWorkerWages = [],
  abuseMethods = [],
  sexTraffickingCases = [],
}: RedditHumanRightsSectionProps) {
  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel
          title="Human Rights & Legal Concerns"
          description="Mass trials, kafala system, discrimination, and trafficking"
        >
          <div className="space-y-6">
            {/* Mass Trials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-lg glass-card border-rose-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg text-rose-400 flex items-center gap-2">
                  <AlertOctagon className="h-5 w-5" />
                  Mass Trials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3 mb-4">
                  <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-center">
                    <p className="text-3xl font-bold text-rose-400">
                      {massTrialData?.convicted || 44}/{massTrialData?.defendants || 84}
                    </p>
                    <p className="text-sm text-platinum-400">Defendants convicted</p>
                  </div>
                  <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-center">
                    <p className="text-3xl font-bold text-rose-400">{massTrialData?.lifeSentences || 40}</p>
                    <p className="text-sm text-platinum-400">Life sentences</p>
                  </div>
                  <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/30 text-center">
                    <p className="text-3xl font-bold text-rose-400">4</p>
                    <p className="text-sm text-platinum-400">15-year sentences</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-platinum-400 font-semibold">Key Prisoners:</p>
                  {keyPrisoners.slice(0, 5).map((prisoner, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg border border-platinum-700/50 bg-platinum-800/30"
                    >
                      <div>
                        <p className="font-semibold text-platinum-200">{prisoner.name}</p>
                        <p className="text-xs text-platinum-400">{prisoner.reason}</p>
                      </div>
                      <Badge variant="destructive" className="bg-rose-500/20 text-rose-400">
                        {prisoner.status}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Kafala System */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-lg glass-card border-amber-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg text-amber-400 flex items-center gap-2">
                  <UsersRound className="h-5 w-5" />
                  Kafala System Issues
                </CardTitle>
                <p className="text-sm text-platinum-400">Human Rights Watch 2025 Report</p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {kafalaIssues.map((issue, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-2 p-2 rounded-lg border border-amber-500/20 bg-amber-500/5"
                    >
                      <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-amber-400 text-sm">{issue.issue}</p>
                        <p className="text-xs text-platinum-300">{issue.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Women's Safety */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-lg glass-card border-pink-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg text-pink-400 flex items-center gap-2">
                  <HeartPulse className="h-5 w-5" />
                  Women's Safety Incidents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {womensSafetyPosts.slice(0, 5).map((post, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-3 rounded-lg border border-pink-500/20 bg-pink-500/5"
                    >
                      <div className="flex items-start justify-between">
                        <p className="font-medium text-platinum-200 text-sm">{post.title}</p>
                        <Badge variant="outline" className="border-pink-500/30 text-pink-400 text-xs ml-2">
                          {post.date}
                        </Badge>
                      </div>
                      <p className="text-xs text-platinum-400 mt-1">{post.keyFacts}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Deportation/Arrest Issues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-lg glass-card border-orange-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg text-orange-400 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Deportation & Arrest Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {deportationPosts.slice(0, 5).map((post, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-3 rounded-lg border border-orange-500/20 bg-orange-500/5"
                    >
                      <div className="flex items-start justify-between">
                        <p className="font-medium text-platinum-200 text-sm">{post.title}</p>
                        <Badge variant="outline" className="border-orange-500/30 text-orange-400 text-xs ml-2">
                          {post.date}
                        </Badge>
                      </div>
                      <p className="text-xs text-platinum-400 mt-1">{post.keyFacts}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Sex Trafficking Cases */}
            {sexTraffickingCases.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-lg glass-card border-red-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-red-400 flex items-center gap-2">
                    <AlertOctagon className="h-5 w-5" />
                    Sex Trafficking Cases
                  </CardTitle>
                  <p className="text-sm text-platinum-400">Documented cases from BBC, news sources</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sexTraffickingCases.slice(0, 4).map((caseItem, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-4 rounded-lg border border-red-500/20 bg-red-500/5"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <p className="font-semibold text-red-400">{caseItem.entity}</p>
                          {caseItem.hashtag && (
                            <Badge variant="outline" className="border-red-500/30 text-red-400 text-xs">
                              {caseItem.hashtag}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-platinum-300">{caseItem.details}</p>
                        {caseItem.location && (
                          <p className="text-xs text-platinum-400 mt-1">Location: {caseItem.location}</p>
                        )}
                        {caseItem.method && (
                          <p className="text-xs text-platinum-400">Method: {caseItem.method}</p>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            )}

            {/* Domestic Worker Abuse */}
            {domesticWorkerWages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-lg glass-card border-amber-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-amber-400 flex items-center gap-2">
                    <UsersRound className="h-5 w-5" />
                    Domestic Worker Wages & Abuse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-3 sm:grid-cols-3">
                      {domesticWorkerWages.map((wage, idx) => (
                        <div key={idx} className="p-3 rounded-lg border border-amber-500/20 bg-amber-500/5 text-center">
                          <p className="text-lg font-bold text-amber-400">{wage.monthlySalary}</p>
                          <p className="text-sm text-platinum-300">{wage.nationality}</p>
                          <p className="text-xs text-platinum-500">Source: {wage.source}</p>
                        </div>
                      ))}
                    </div>
                    {abuseMethods.length > 0 && (
                      <div>
                        <p className="text-sm text-platinum-400 mb-2">Documented Abuse Methods:</p>
                        <div className="flex flex-wrap gap-2">
                          {abuseMethods.map((method, idx) => (
                            <Badge key={idx} variant="outline" className="border-amber-500/30 text-amber-400 text-xs">
                              {method}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </motion.div>
            )}
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}

export default RedditHumanRightsSection
