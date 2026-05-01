'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Scale, DollarSign, Shield, Calendar, AlertTriangle, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import type { instagramIntelligenceData } from '@/lib/data/instagram-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

interface InstagramRegulatorySectionProps {
  data: typeof instagramIntelligenceData
}

export function InstagramRegulatorySection({ data }: InstagramRegulatorySectionProps) {
  const { regulatoryFramework, licenseRequirements, penalties, taxRequirements, keyDates } = data

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="Regulatory Framework"
        description="UAE influencer licensing, permits, and compliance requirements"
      >
        <div className="space-y-6">
          {/* Regulatory Timeline */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Scale className="h-5 w-5 text-purple-500" />
                Key Legislation Timeline
              </CardTitle>
              <CardDescription>Federal Decree-Law No. 55 of 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regulatoryFramework.map((reg: { legislation: string; description: string; effectiveDate: string }, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-platinum-800/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                      <Scale className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-white">{reg.legislation}</h4>
                        <Badge variant="outline" className="text-xs border-platinum/30">
                          {reg.effectiveDate}
                        </Badge>
                      </div>
                      <p className="text-sm text-platinum-500-400 mt-1">{reg.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dual Licensing Requirement */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Dual Licensing Requirement</CardTitle>
              <CardDescription>All UAE influencers must hold BOTH licenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-purple-400" />
                    <h4 className="text-sm font-medium text-white">Commercial Trade License</h4>
                  </div>
                  <p className="text-xs text-platinum-500-300 mb-2">From free zones (Meydan, UAQ FTZ)</p>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-platinum-500/50">Cost</span>
                      <span className="text-sm font-bold text-gold-700">AED 5,000 - 15,000/year</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-platinum-500/50">Setup time</span>
                      <span className="text-sm text-emerald-400">As fast as 1 hour digitally</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-gold/10 to-amber-500/10 border border-gold-700/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-gold-700" />
                    <h4 className="text-sm font-medium text-white">E-Media Influencer Permit</h4>
                  </div>
                  <p className="text-xs text-platinum-500-300 mb-2">UAE Media Council "Advertiser Permit"</p>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-platinum-500/50">UAE Citizens/Residents</span>
                      <span className="text-sm font-bold text-emerald-400">FREE (2026-2028)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-platinum-500/50">Non-Residents</span>
                      <span className="text-sm font-bold text-gold-700">AED 500/3 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Penalties Table */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-rose-500" />
                    Penalties Overview
                  </CardTitle>
                  <CardDescription>Violations and enforcement actions</CardDescription>
                </div>
                <Badge variant="destructive">Enforcement Active</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-platinum/10">
                      <th className="text-left py-3 px-4 text-sm font-medium text-platinum-500/60">Violation</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-amber-400">First Offense</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-orange-400">Second</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-rose-400">Third</th>
                    </tr>
                  </thead>
                  <tbody>
                    {penalties.map((penalty: { violation: string; firstOffense: string; secondOffense: string; thirdOffense: string }, idx: number) => (
                      <tr key={idx} className="border-b border-platinum/5 hover:bg-white/5">
                        <td className="py-3 px-4 text-sm text-white">{penalty.violation}</td>
                        <td className="py-3 px-4 text-right text-sm text-amber-300">{penalty.firstOffense}</td>
                        <td className="py-3 px-4 text-right text-sm text-orange-300">{penalty.secondOffense}</td>
                        <td className="py-3 px-4 text-right text-sm text-rose-300">{penalty.thirdOffense}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Key Dates Timeline */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gold-700" />
                Key Dates Timeline
              </CardTitle>
              <CardDescription>Important regulatory milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-rose-500" />
                <div className="space-y-4">
                  {keyDates.map((item: { date: string; event: string }, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 pl-4">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                        <Calendar className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs border-platinum/30 text-platinum-500/70">
                            {item.date}
                          </Badge>
                        </div>
                        <p className="text-sm text-white mt-1">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tax Requirements */}
          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-lg">Corporate Tax Requirements</CardTitle>
              <CardDescription>Tax obligations for UAE influencers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-platinum/10">
                      <th className="text-left py-3 px-4 text-sm font-medium text-platinum-500/60">Requirement</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-platinum-500/60">Threshold</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gold-700">Rate</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-platinum-500/60">Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxRequirements.map((tax: { requirement: string; threshold: string; rate: string; deadline: string }, idx: number) => (
                      <tr key={idx} className="border-b border-platinum/5 hover:bg-white/5">
                        <td className="py-3 px-4 text-sm text-white">{tax.requirement}</td>
                        <td className="py-3 px-4 text-sm text-platinum-500/70">{tax.threshold}</td>
                        <td className="py-3 px-4 text-sm text-gold-700">{tax.rate}</td>
                        <td className="py-3 px-4 text-sm text-platinum-500/50">{tax.deadline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </motion.div>
  )
}
