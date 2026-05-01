'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Scale, Shield, Clock, AlertTriangle } from 'lucide-react'
interface RegulatoryOverviewProps {
  uaeMediaLaw: {
    lawNumber: string
    effectiveDate: string
    enforcingBody: string
    advertiserPermitDeadline: string
    permitCost: string
  }
  eligibilityRequirements: { requirement: string; details: string }[]
  regulatoryFines: { violation: string; fineAED: string; category: string }[]
  regulatoryTimeline: { date: string; event: string }[]
  complianceRequirements: { requirement: string; status: string }[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const getFineCategoryBadge = (category: string) => {
  switch (category) {
    case 'Critical':
      return <Badge variant="destructive" className="text-xs">Critical</Badge>
    case 'Serious':
      return <Badge variant="destructive" className="text-xs bg-orange-500">Serious</Badge>
    case 'Moderate':
      return <Badge variant="warning" className="text-xs">Moderate</Badge>
    case 'Minor':
      return <Badge variant="secondary" className="text-xs">Minor</Badge>
    default:
      return <Badge variant="outline" className="text-xs">{category}</Badge>
  }
}

export function RegulatoryOverview({
  uaeMediaLaw,
  eligibilityRequirements,
  regulatoryFines,
  regulatoryTimeline,
  complianceRequirements,
}: RegulatoryOverviewProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Media Law Overview */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Scale className="h-5 w-5 text-gold-700" />
              UAE Media Law
            </CardTitle>
            <CardDescription>Federal Law No. 55 of 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 glass-subtle rounded-lg">
                  <p className="text-xs text-platinum-500-500 dark:text-platinum-500-400">Enforcing Body</p>
                  <p className="text-sm font-semibold text-navy-500-900 dark:text-platinum-500-100">{uaeMediaLaw.enforcingBody}</p>
                </div>
                <div className="p-3 glass-subtle rounded-lg">
                  <p className="text-xs text-platinum-500-500 dark:text-platinum-500-400">Effective Date</p>
                  <p className="text-sm font-semibold text-navy-500-900 dark:text-platinum-500-100">{uaeMediaLaw.effectiveDate}</p>
                </div>
                <div className="p-3 glass-subtle rounded-lg">
                  <p className="text-xs text-platinum-500-500 dark:text-platinum-500-400">Permit Deadline</p>
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{uaeMediaLaw.advertiserPermitDeadline}</p>
                </div>
                <div className="p-3 glass-subtle rounded-lg">
                  <p className="text-xs text-platinum-500-500 dark:text-platinum-500-400">Permit Cost</p>
                  <p className="text-sm font-semibold text-navy-500-900 dark:text-platinum-500-100">{uaeMediaLaw.permitCost}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Eligibility Requirements */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-cyan-500" />
              Eligibility Requirements
            </CardTitle>
            <CardDescription>Requirements for influencer licensing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {eligibilityRequirements.map((req, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                  <div>
                    <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{req.requirement}</p>
                    <p className="text-xs text-platinum-500-500">{req.details}</p>
                  </div>
                  <Badge variant="success" className="text-xs">Required</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Regulatory Timeline */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-indigo-500" />
              Regulatory Timeline
            </CardTitle>
            <CardDescription>Key dates in UAE media regulation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {regulatoryTimeline.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-gold mt-1.5" />
                    {idx < regulatoryTimeline.length - 1 && (
                      <div className="w-0.5 h-8 bg-platinum-300 dark:bg-platinum-600" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-xs text-platinum-500-500">{item.date}</p>
                    <p className="text-sm font-medium text-navy-500-900 dark:text-platinum-500-100">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Compliance Requirements */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Compliance Requirements</CardTitle>
            <CardDescription>Mandatory standards for influencers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {complianceRequirements.map((req, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                  <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{req.requirement}</span>
                  <Badge
                    variant={req.status === 'Mandatory' || req.status === 'Enforced' ? 'success' : 'secondary'}
                    className="text-xs"
                  >
                    {req.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Regulatory Fines */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }} className="lg:col-span-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Regulatory Fines
            </CardTitle>
            <CardDescription>Penalties for violations under Federal Law No. 55</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50">
                  <TableHead className="text-platinum-500-700 font-semibold">Violation</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">Fine (AED)</TableHead>
                  <TableHead className="text-platinum-500-700 font-semibold">Category</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {regulatoryFines.map((fine, idx) => (
                  <TableRow key={idx} className="border-b border-platinum-100/50">
                    <TableCell className="text-sm text-platinum-500-700">{fine.violation}</TableCell>
                    <TableCell className="text-sm font-bold text-navy-500-900 dark:text-platinum-500-100">{fine.fineAED}</TableCell>
                    <TableCell>{getFineCategoryBadge(fine.category)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
