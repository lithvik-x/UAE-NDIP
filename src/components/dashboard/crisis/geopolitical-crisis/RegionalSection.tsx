'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  MilitaryOperation,
} from '@/lib/data/crisis/geopolitical-crisis-data'
import {
  Sword,
  Tent,
  Map,
  Building,
  Heart,
  Flag,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  militaryOperations,
  somalia,
  eritrea,
  syria,
  iraqKurdistan,
  gaza,
} from '@/lib/data/crisis/geopolitical-crisis-data'

interface RegionalSectionProps {
  className?: string
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'withdrawn': return 'text-emerald-400'
    case 'ongoing':
    case 'active': return 'text-rose-400'
    case 'denied': return 'text-amber-400'
    case 'suspended':
    case 'severed': return 'text-orange-400'
    default: return 'text-platinum-500-400'
  }
}

export function RegionalSection({ className }: RegionalSectionProps) {
  return (
    <div className={className}>
      <GlassPanel
        title="Regional Conflict Analysis"
        description="UAE involvement across Middle East conflicts"
      >
        <div className="space-y-6">
          {/* Military Operations Table */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Sword className="h-5 w-5 text-rose-400" />
                UAE Military Operations by Country
              </CardTitle>
              <CardDescription>Operations timeline and status (Table 1 from MD)</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-2">
                  {militaryOperations.map((op: MilitaryOperation, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50"
                    >
                      <div className="flex items-center gap-3">
                        <Flag className={`h-4 w-4 ${getStatusColor(op.status)}`} />
                        <div>
                          <p className="font-medium text-platinum-500-200">{op.operation}</p>
                          <p className="text-xs text-platinum-500-400">{op.country} | {op.start}-{op.end}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={`text-xs ${getStatusColor(op.status)}`}>{op.status}</Badge>
                        <span className="text-xs text-platinum-500-400">{op.casualties}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Somalia & Eritrea */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Tent className="h-5 w-5 text-amber-400" />
                  Somalia - Relations Severed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { label: 'Training Start', value: '2012 (Puntland)' },
                    { label: 'Attack (Feb 2024)', value: '3 UAE soldiers KIA' },
                    { label: 'Relations Severed', value: 'January 2026' },
                    { label: 'Cancelled', value: 'All defense/port agreements' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                      <span className="text-platinum-500-400 text-sm">{item.label}</span>
                      <span className="text-platinum-500-200 text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Map className="h-5 w-5 text-platinum-500-400" />
                  Eritrea - Assab Base Withdrawn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {eritrea.map((item, idx) => (
                    <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                      <span className="text-platinum-500-400 text-sm">{item.label}</span>
                      <span className="text-platinum-500-200 text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Syria & Gaza */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Building className="h-5 w-5 text-navy-500-400" />
                  Syria - Reconstruction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { label: 'Assad Visit', value: 'March 2022' },
                    { label: 'Arab League', value: 'Reinstated May 2023' },
                    { label: 'Total Investment', value: '$28B+' },
                    { label: 'Damascus Metro', value: '$2B (National Invest)' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                      <span className="text-platinum-500-400 text-sm">{item.label}</span>
                      <span className="text-platinum-500-200 text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-rose-400" />
                  Gaza - Reconstruction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { label: 'Ceasefire', value: 'Jan 19, 2025' },
                    { label: 'Armistice Ended', value: 'Feb 18, 2025' },
                    { label: 'UAE Pledge', value: '$1B+' },
                    { label: 'Stabilization Force', value: 'Refused (Nov 2025)' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between rounded bg-platinum-800/50 p-2">
                      <span className="text-platinum-500-400 text-sm">{item.label}</span>
                      <span className="text-platinum-500-200 text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Iraq/Kurdistan */}
          <Card className="glass-card rounded-xl bg-glass-surface/50 border-glass-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building className="h-5 w-5 text-cyan-400" />
                Iraq & Kurdistan - Investments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {iraqKurdistan.map((item, idx) => (
                  <div key={idx} className="rounded bg-platinum-800/50 p-3 border border-platinum-700/50">
                    <p className="text-xs text-platinum-500-400">{item.label}</p>
                    <p className="text-sm font-medium text-platinum-500-200">{item.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </GlassPanel>
    </div>
  )
}
