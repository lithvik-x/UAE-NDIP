// @ts-nocheck
/**
 * Media Organizations Key Personnel Section
 * UAE National Digital Intelligence Platform
 */

'use client'

import { motion } from 'framer-motion'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { MapPin } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

interface PersonnelSectionProps {
  newspaperLeadership: any[]
  broadcastLeadership: any[]
  newsAgencyLeadership: any[]
  wamInternationalOffices: any[]
}

export function PersonnelSection({
  newspaperLeadership,
  broadcastLeadership,
  newsAgencyLeadership,
  wamInternationalOffices,
}: PersonnelSectionProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Newspaper Leadership */}
        <GlassPanel title="Newspaper Leadership" description="Key editorial positions">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-platinum-200/50">
                <TableHead className="text-platinum-700 font-semibold">Newspaper</TableHead>
                <TableHead className="text-platinum-700 font-semibold">Position</TableHead>
                <TableHead className="text-platinum-700 font-semibold">Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {newspaperLeadership.map((leader, i) => (
                <TableRow key={i} className="border-b border-platinum-100/50">
                  <TableCell className="font-medium text-navy-900 dark:text-platinum-100">{leader.newspaper}</TableCell>
                  <TableCell className="text-sm text-platinum-600">{leader.position}</TableCell>
                  <TableCell className="text-sm text-platinum-700 dark:text-platinum-300">{leader.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GlassPanel>

        {/* Broadcast Leadership */}
        <GlassPanel title="Broadcast Leadership" description="TV channel executives">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-platinum-200/50">
                <TableHead className="text-platinum-700 font-semibold">Channel</TableHead>
                <TableHead className="text-platinum-700 font-semibold">Position</TableHead>
                <TableHead className="text-platinum-700 font-semibold">Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {broadcastLeadership.map((leader, i) => (
                <TableRow key={i} className="border-b border-platinum-100/50">
                  <TableCell className="font-medium text-navy-900 dark:text-platinum-100">{leader.channel}</TableCell>
                  <TableCell className="text-sm text-platinum-600">{leader.position}</TableCell>
                  <TableCell className="text-sm text-platinum-700 dark:text-platinum-300">{leader.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GlassPanel>
      </div>

      {/* WAM International Offices */}
      <GlassPanel title="WAM International Offices" description="Emirates News Agency global presence">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wamInternationalOffices.map((office, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex items-center gap-3 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-emerald text-white">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-navy-900 dark:text-platinum-100">{office.office}</span>
                <p className="text-xs text-platinum-500">{office.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}
