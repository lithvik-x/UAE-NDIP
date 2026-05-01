'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { AgencyProfile } from '@/lib/data/entity/influencers-data'

interface AgencyOverviewProps {
  influencerAgencies: AgencyProfile[]
  agencyComparison: { agency: string; yearsExperience: string; networkSize: string; notableClients: string; specialization: string }[]
  industryStatistics: { metric: string; value: string; source: string }[]
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function AgencyOverview({
  influencerAgencies,
  agencyComparison,
  industryStatistics,
}: AgencyOverviewProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Agency Overview */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }} className="lg:col-span-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Influencer Marketing Agencies</CardTitle>
            <CardDescription>{influencerAgencies.length} agencies tracked | 300+ agencies operating in UAE</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50">
                  <TableHead className="text-platinum-700 font-semibold">Agency</TableHead>
                  <TableHead className="text-platinum-700 font-semibold">Location</TableHead>
                  <TableHead className="text-platinum-700 font-semibold">Network Size</TableHead>
                  <TableHead className="text-platinum-700 font-semibold">Brands Served</TableHead>
                  <TableHead className="text-platinum-700 font-semibold">Credibility</TableHead>
                  <TableHead className="text-platinum-700 font-semibold">Specialization</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {influencerAgencies.map((agency) => (
                  <TableRow key={agency.id} className="border-b border-platinum-100/50">
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-semibold text-navy-900 dark:text-platinum-100">{agency.name}</span>
                        {agency.handle && <span className="text-xs text-platinum-500 font-mono">{agency.handle}</span>}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-platinum-700">{agency.location}</TableCell>
                    <TableCell className="text-sm font-bold text-navy-900 dark:text-platinum-100">{agency.influencersInNetwork || '—'}</TableCell>
                    <TableCell className="text-sm text-platinum-700">{agency.brandsServed || '—'}</TableCell>
                    <TableCell>
                      <Badge
                        variant={agency.credibility === 'High' ? 'success' : agency.credibility === 'Medium' ? 'secondary' : 'default'}
                        className="text-xs"
                      >
                        {agency.credibility}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-platinum-700">{agency.specialization || agency.methodology || '—'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Agency Comparison */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Agency Comparison</CardTitle>
            <CardDescription>Key metrics comparison across top agencies</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50">
                  <TableHead className="text-platinum-700 font-semibold">Agency</TableHead>
                  <TableHead className="text-platinum-700 font-semibold">Experience</TableHead>
                  <TableHead className="text-platinum-700 font-semibold">Network</TableHead>
                  <TableHead className="text-platinum-700 font-semibold">Specialization</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agencyComparison.map((a) => (
                  <TableRow key={a.agency} className="border-b border-platinum-100/50">
                    <TableCell className="font-semibold text-navy-900 dark:text-platinum-100">{a.agency}</TableCell>
                    <TableCell className="text-sm text-platinum-700">{a.yearsExperience}</TableCell>
                    <TableCell className="text-sm font-bold text-navy-900 dark:text-platinum-100">{a.networkSize}</TableCell>
                    <TableCell className="text-sm text-platinum-700">{a.specialization}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Industry Statistics */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.5 }}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Industry Statistics</CardTitle>
            <CardDescription>Market size and capacity data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {industryStatistics.map((stat) => (
                <div key={stat.metric} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                  <span className="text-sm text-platinum-700 dark:text-platinum-300">{stat.metric}</span>
                  <span className="text-sm font-bold text-gold-700">{stat.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
