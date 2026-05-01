'use client'

import { motion } from 'framer-motion'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { GlassPanel } from '@/components/dashboard/glass-card'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

interface UNAgenciesRegistry {
  organization: string
  hq: string
  uaeOffice: string
  keyContact: string
}

interface DiplomaticNetworkSample {
  country: string
  city: string
  ambassador: string
  since: string
}

interface EntityRegistrySectionProps {
  internationalOrgsWithUAEPresence: UNAgenciesRegistry[]
  diplomaticNetworkSample: DiplomaticNetworkSample[]
}

export function EntityRegistrySection({
  internationalOrgsWithUAEPresence,
  diplomaticNetworkSample,
}: EntityRegistrySectionProps) {
  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel title="Entity Registry" description="International organizations with UAE presence">
        <div className="space-y-8">
          {/* International Organizations Table */}
          <div>
            <h3 className="text-sm font-semibold text-platinum-500-700 dark:text-platinum-500-300 mb-3">
              International Organizations with UAE Presence
            </h3>
            <Table variant="medium">
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                  <TableHead>Organization</TableHead>
                  <TableHead>HQ</TableHead>
                  <TableHead>UAE Office</TableHead>
                  <TableHead>Key Contact</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {internationalOrgsWithUAEPresence.map((org) => (
                  <TableRow key={org.organization} className="hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25">
                    <TableCell className="font-medium">{org.organization}</TableCell>
                    <TableCell>{org.hq}</TableCell>
                    <TableCell>{org.uaeOffice}</TableCell>
                    <TableCell className="text-xs text-platinum-500-500">{org.keyContact}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Diplomatic Network Sample Table */}
          <div>
            <h3 className="text-sm font-semibold text-platinum-500-700 dark:text-platinum-500-300 mb-3">
              UAE Diplomatic Network (Sample)
            </h3>
            <Table variant="medium">
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                  <TableHead>Country</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Ambassador</TableHead>
                  <TableHead>Since</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {diplomaticNetworkSample.map((entry) => (
                  <TableRow key={entry.country} className="hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25">
                    <TableCell className="font-medium">{entry.country}</TableCell>
                    <TableCell>{entry.city}</TableCell>
                    <TableCell>{entry.ambassador}</TableCell>
                    <TableCell>{entry.since}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

export default EntityRegistrySection