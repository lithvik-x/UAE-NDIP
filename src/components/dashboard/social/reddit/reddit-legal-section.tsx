// Reddit Legal Section - Labour law, alcohol laws, divorce, visa issues
// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Scale,
  Scale3D,
  Briefcase,
  Plane,
  Car,
  Heart,
  Globe,
} from 'lucide-react'

const fadeInUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }
const staggerContainer = { animate: { transition: { staggerChildren: 0.08 } } }

interface LabourLawProvision {
  provision: string
  detail: string
}

interface GratuityTier {
  yearsOfService: string
  calculation: string
}

interface SectorImpact {
  name: string
  impact: string
  status?: string
}

interface AlcoholLaw {
  violation: string
  penalty: string
  details?: string
}

interface DivorceFact {
  fact: string
  details: string
}

interface VisaIssue {
  issue: string
  details: string
}

interface DrivingTestIssue {
  issue: string
  details: string
}

interface OrganTransplantLaw {
  fact: string
  details: string
}

interface RedditLegalSectionProps {
  labourLawProvisions?: LabourLawProvision[]
  gratuityTiers?: GratuityTier[]
  sectorsAffected?: SectorImpact[]
  sectorsNormal?: SectorImpact[]
  drinkDrivingLaws?: AlcoholLaw[]
  publicIntoxicationLaws?: AlcoholLaw[]
  alcoholLaws?: AlcoholLaw[]
  divorceFacts?: DivorceFact[]
  visaIssues?: VisaIssue[]
  drivingTestIssues?: DrivingTestIssue[]
  organTransplantLaws?: OrganTransplantLaw[]
}

export function RedditLegalSection({
  labourLawProvisions = [],
  gratuityTiers = [],
  sectorsAffected = [],
  sectorsNormal = [],
  drinkDrivingLaws = [],
  publicIntoxicationLaws = [],
  alcoholLaws = [],
  divorceFacts = [],
  visaIssues = [],
  drivingTestIssues = [],
  organTransplantLaws = [],
}: RedditLegalSectionProps) {
  return (
    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
      <motion.div variants={fadeInUp}>
        <GlassPanel
          title="Legal Framework & Regulations"
          description="Labour law, alcohol laws, visa issues, and legal processes"
        >
          <div className="space-y-6">
            {/* Labour Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-lg glass-card border-emerald-500/30"
            >
              <CardHeader>
                <CardTitle className="text-lg text-emerald-400 flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Federal Decree-Law No. 33 of 2021 - Key Protections
                </CardTitle>
                <p className="text-sm text-platinum-400">Legal protections for employees against salary reductions</p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {labourLawProvisions.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5"
                    >
                      <p className="font-semibold text-emerald-400 text-sm">{point.provision}</p>
                      <p className="text-platinum-300 text-xs mt-1">{point.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </motion.div>

            {/* Gratuity Calculation */}
            {gratuityTiers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-lg glass-card border-teal-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-teal-400 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Gratuity Calculation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {gratuityTiers.map((tier, idx) => (
                      <div key={idx} className="p-4 rounded-lg border border-teal-500/20 bg-teal-500/5 text-center">
                        <p className="text-lg font-bold text-teal-400">{tier.yearsOfService}</p>
                        <p className="text-sm text-platinum-300 mt-1">{tier.calculation}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            )}

            {/* Sector Impact */}
            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-lg glass-card border-rose-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-rose-400">Sectors Most Affected (2026)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sectorsAffected.map((sector, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-rose-500/20 bg-rose-500/5"
                      >
                        <span className="text-platinum-200">{sector.name}</span>
                        <Badge variant="destructive" className="bg-rose-500/20 text-rose-400">
                          {sector.impact}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-lg glass-card border-emerald-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-400">Sectors Continuing Normally</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {sectorsNormal.map((sector, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5"
                      >
                        <span className="text-platinum-200">{sector.name}</span>
                        <Badge variant="default" className="bg-emerald-500/20 text-emerald-400">
                          {sector.status}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            </div>

            {/* Alcohol Laws */}
            {drinkDrivingLaws.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-lg glass-card border-purple-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-purple-400 flex items-center gap-2">
                    <Scale3D className="h-5 w-5" />
                    UAE Alcohol Laws (Federal Decree-Law No. 14 of 2024)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="p-4 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                      <p className="font-semibold text-rose-400 mb-2">Drink Driving</p>
                      <p className="text-2xl font-bold text-platinum-200">AED 20,000-100,000</p>
                      <div className="mt-2 space-y-1">
                        <p className="text-xs text-platinum-400">1st: 3-month suspension + 23 black points</p>
                        <p className="text-xs text-platinum-400">2nd: 6-month suspension + vehicle impound</p>
                        <p className="text-xs text-platinum-400">3rd: Permanent cancellation + deportation</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                      <p className="font-semibold text-amber-400 mb-2">Public Intoxication</p>
                      <p className="text-2xl font-bold text-platinum-200">AED 5,000</p>
                      <div className="mt-2 space-y-1">
                        <p className="text-xs text-platinum-400">Dubai/Abu Dhabi: Up to AED 5,000</p>
                        <p className="text-xs text-platinum-400">Severe: AED 100,000 + 6 months</p>
                        <p className="text-xs text-platinum-400">Sharjah: Zero tolerance - arrest</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-platinum-800/50 border border-platinum-700/50">
                      <p className="font-semibold text-purple-400 mb-2">Illegal Possession</p>
                      <p className="text-2xl font-bold text-platinum-200">AED 10,000+</p>
                      <div className="mt-2 space-y-1">
                        <p className="text-xs text-platinum-400">Personal: 6 months detention</p>
                        <p className="text-xs text-platinum-400">Commercial: 2 years detention</p>
                        <p className="text-xs text-platinum-400">Operating without licence: AED 500,000</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </motion.div>
            )}

            {/* Divorce Facts */}
            {divorceFacts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-lg glass-card border-pink-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-pink-400 flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Divorce Process in Dubai
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {divorceFacts.map((fact, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-3 rounded-lg border border-pink-500/20 bg-pink-500/5"
                      >
                        <p className="font-semibold text-pink-400 text-sm">{fact.fact}</p>
                        <p className="text-platinum-300 text-xs mt-1">{fact.details}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            )}

            {/* Visa Issues */}
            {visaIssues.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="p-6 rounded-lg glass-card border-navy-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-navy-400 flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Visa & Kafala Issues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {visaIssues.map((visa, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.03 }}
                        className="p-2 rounded-lg border border-navy-500/20 bg-navy-500/5"
                      >
                        <p className="font-semibold text-navy-400 text-xs">{visa.issue}</p>
                        <p className="text-platinum-300 text-xs mt-0.5">{visa.details}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            )}

            {/* RTA Driving Test Issues */}
            {drivingTestIssues.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-6 rounded-lg glass-card border-cyan-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-cyan-400 flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    RTA Driving Test Issues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {drivingTestIssues.map((issue, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-3 rounded-lg border border-cyan-500/20 bg-cyan-500/5"
                      >
                        <p className="font-semibold text-cyan-400 text-sm">{issue.issue}</p>
                        <p className="text-platinum-300 text-xs mt-1">{issue.details}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </motion.div>
            )}

            {/* Organ Transplant Law */}
            {organTransplantLaws.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="p-6 rounded-lg glass-card border-lime-500/30"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-lime-400 flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Organ Transplant Law (Federal Decree-Law No. 15 of 2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {organTransplantLaws.map((law, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-3 rounded-lg border border-lime-500/20 bg-lime-500/5"
                      >
                        <p className="font-semibold text-lime-400 text-sm">{law.fact}</p>
                        <p className="text-platinum-300 text-xs mt-1">{law.details}</p>
                      </motion.div>
                    ))}
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

export default RedditLegalSection
