// Influencer Ecosystem Section Component for Threads Intelligence
// @ts-nocheck
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { CheckCircle, XCircle, AlertTriangle, Crown, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }
const cardHover = { rest: { scale: 1 }, hover: { scale: 1.02 } }

interface InfluencerSectionProps {
  influencerStats: any[]
  regulatoryContext: any[]
  notableUAAccounts: any[]
  influencerContentIssues: any[]
  visitDubaiStats: any
  governmentAccounts: any[]
}

export function InfluencerSection({
  influencerStats,
  regulatoryContext,
  notableUAAccounts,
  influencerContentIssues,
  visitDubaiStats,
  governmentAccounts,
}: InfluencerSectionProps) {
  const governmentAccountsMock = [
    { handle: '@visit.dubai', followers: 556400, type: 'Tourism', verified: true },
    { handle: '@dubai.travelers', followers: 0, type: 'Travel', verified: false },
    { handle: '@dubaiconfidential', followers: 6400, type: 'Content', verified: false },
  ]

  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel title="Dubai Influencer Ecosystem" description="50,000 influencers, Golden Visas, $97M market">
          <div className="space-y-6">
            {/* Key Statistics */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Key Statistics</CardTitle>
                <CardDescription>Dubai influencer landscape</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-gold-700/10 p-4 border border-gold-700/30">
                    <div className="text-3xl font-bold text-gold-700">50K</div>
                    <div className="text-sm text-platinum-500-400">Influencers in Dubai</div>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                    <div className="text-3xl font-bold text-emerald-400">$97M</div>
                    <div className="text-sm text-platinum-500-400">Market forecast by 2030</div>
                  </div>
                  <div className="rounded-lg bg-info/10 p-4 border border-info/30">
                    <div className="text-3xl font-bold text-info">+20%</div>
                    <div className="text-sm text-platinum-500-400">Bilingual engagement boost</div>
                  </div>
                </div>
              </CardContent>
            </motion.div>

            {/* Regulatory Requirements */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Regulatory Requirements</CardTitle>
                <CardDescription>Licensing and compliance for influencers</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-3">
                  {regulatoryContext.map((reg: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-4"
                    >
                      <div>
                        <p className="font-medium text-platinum-500-200">{reg.regulation}</p>
                        <p className="text-sm text-platinum-500-400">{reg.details}</p>
                      </div>
                      <Badge variant={reg.penalty?.includes('imprisonment') ? 'destructive' : 'default'}>
                        {reg.penalty || 'N/A'}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Government Accounts on Threads */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Government Accounts on Threads</CardTitle>
                <CardDescription>Official UAE presence (NONE identified)</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30 mb-4">
                  <p className="text-sm text-platinum-500-300">
                    <AlertTriangle className="inline h-4 w-4 mr-2 text-rose-400" />
                    NO official UAE government Threads accounts identified. All government entities
                    use X (Twitter), Facebook, Instagram, and YouTube - but NOT Threads.
                  </p>
                </div>
                <div className="space-y-3">
                  {governmentAccountsMock?.map((account: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                      <div className="flex items-center gap-3">
                        {account.verified ? (
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <XCircle className="h-4 w-4 text-platinum-500-500" />
                        )}
                        <span className="text-sm font-medium text-platinum-500-200">{account.handle}</span>
                        <Badge variant="outline" className="text-xs">{account.type}</Badge>
                      </div>
                      {account.followers > 0 && (
                        <span className="text-sm text-gold-700">{account.followers.toLocaleString()}</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* March 2026 Incident */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">March 2026 Incident: Coordinated Messaging</CardTitle>
                <CardDescription>Influencer concerns during regional tensions</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="rounded-lg bg-amber-500/10 p-4 border border-amber-500/30">
                  <h4 className="font-semibold text-amber-400 mb-2">Critical Finding</h4>
                  <ul className="space-y-2 text-sm text-platinum-500-300">
                    {influencerContentIssues.map((issue: any, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-amber-300">{issue.issue}: </span>
                          {issue.details}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </motion.div>

            {/* Notable UAE Accounts */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Notable UAE-Based Threads Accounts</CardTitle>
                <CardDescription>Key influencers and content creators</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-3">
                  {notableUAAccounts.map((account: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-platinum-500-200">{account.handle}</p>
                        <p className="text-xs text-platinum-500-400 mt-1">{account.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={account.sentiment.includes('Positive') ? 'default' : account.sentiment.includes('Negative') ? 'destructive' : 'outline'} className="text-xs">
                          {account.sentiment}
                        </Badge>
                        {account.followers && (
                          <p className="text-xs text-gold-700 mt-1">{account.followers.toLocaleString()} followers</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Visit Dubai Account */}
            <motion.div variants={cardHover} whileHover="hover" className="glass-card rounded-xl p-6 bg-glass-surface/50 border-glass-border">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Visit Dubai Official Account</CardTitle>
                <CardDescription>Leading tourism account on Threads</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="grid gap-4 sm:grid-cols-4">
                  <div className="rounded-lg bg-gold-700/10 p-4 border border-gold-700/30 text-center">
                    <div className="text-2xl font-bold text-gold-700">556K</div>
                    <div className="text-sm text-platinum-500-400">Followers</div>
                  </div>
                  <div className="rounded-lg bg-info/10 p-4 border border-info/30 text-center">
                    <div className="text-2xl font-bold text-info">471</div>
                    <div className="text-sm text-platinum-500-400">Threads</div>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30 text-center">
                    <CheckCircle className="h-6 w-6 text-emerald-400 mx-auto" />
                    <div className="text-sm text-platinum-500-400 mt-1">Verified</div>
                  </div>
                  <div className="rounded-lg bg-platinum/10 p-4 border border-platinum/30 text-center">
                    <div className="text-2xl font-bold text-platinum-500">56M</div>
                    <div className="text-sm text-platinum-500-400">#visitdubai threads</div>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  )
}

export default InfluencerSection
