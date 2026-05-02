/**
 * TikTok Legal Compliance Section Component
 */

'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Gavel, FileText, Shield, Users, AlertTriangle } from 'lucide-react'

interface LegalComplianceProps {
  mediaLawFines: Array<{
    violation: string
    fine: string
  }>
  influencerLicensing: Array<{
    category: string
    first3Years: string
    after3Years: string
  }>
  contentGovernance: {
    mediaLaw: {
      name: string
      effectiveDate: string
      enforcementBegins: string
    }
    licensing: {
      effectiveDate: string
      advertiserPermitDeadline: string
      gracePeriodEnds: string
    }
    licensingRequirements: string[]
    exemptions: string[]
  }
}

export function LegalComplianceSection({ mediaLawFines, influencerLicensing, contentGovernance }: LegalComplianceProps) {
  return (
    <div className="space-y-6">
      {/* Media Law Fines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card border-rose-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Gavel className="h-5 w-5 text-rose-400" />
              UAE Media Law Fines
            </CardTitle>
            <CardDescription>
              {contentGovernance.mediaLaw.name} - Effective {contentGovernance.mediaLaw.effectiveDate}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mediaLawFines.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3"
                >
                  <span className="text-sm text-platinum-300">{item.violation}</span>
                  <Badge variant="outline" className="text-rose-400 border-rose-500/30">
                    {item.fine}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Influencer Licensing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass-card border-gold-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-gold-700" />
              Influencer Licensing
            </CardTitle>
            <CardDescription>
              Effective {contentGovernance.licensing.effectiveDate} - Permit deadline: {contentGovernance.licensing.advertiserPermitDeadline}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {influencerLicensing.map((license, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg bg-gold-500/10 p-4 border border-gold-500/30"
                >
                  <h4 className="font-semibold text-gold-700 mb-2">{license.category}</h4>
                  <p className="text-sm text-platinum-300">First 3 years: {license.first3Years}</p>
                  <p className="text-sm text-platinum-300">After 3 years: {license.after3Years}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Licensing Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass-card border-platinum-500/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-platinum-500" />
              Licensing Requirements
            </CardTitle>
            <CardDescription>Mandatory requirements for content creators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-platinum-300 mb-2">Requirements:</h4>
                <div className="space-y-2">
                  {contentGovernance.licensingRequirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-platinum-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-platinum-300 mb-2">Exemptions:</h4>
                <div className="flex flex-wrap gap-2">
                  {contentGovernance.exemptions.map((exemption, idx) => (
                    <Badge key={idx} variant="outline" className="text-platinum-400 border-platinum-500/30">
                      {exemption}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
