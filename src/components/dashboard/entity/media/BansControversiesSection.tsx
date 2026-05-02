// @ts-nocheck
/**
 * Media Organizations Bans & Controversies Section
 * UAE National Digital Intelligence Platform
 */

'use client'

import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import {
  AlertCircle,
  Ban,
} from 'lucide-react'

interface BansControversiesSectionProps {
  mediaBans: any[]
  controversies: any[]
}

export function BansControversiesSection({
  mediaBans,
  controversies,
}: BansControversiesSectionProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Media Bans */}
      <GlassPanel
        title="Media Bans in UAE"
        description="International media blocked or banned"
        badge="Security"
      >
        <div className="space-y-4">
          {mediaBans.map((ban, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50 dark:bg-red-950/20 border border-red-200/30">
              <Ban className="h-5 w-5 text-red-500 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-navy-900 dark:text-platinum-100">{ban.media}</p>
                  <Badge variant="destructive" className="text-xs">{ban.banStart}</Badge>
                </div>
                <p className="text-xs text-platinum-600 dark:text-platinum-400 mt-1">
                  {ban.country} — {ban.reason || 'No specified reason'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>

      {/* Notable Controversies */}
      <GlassPanel
        title="Notable Controversies"
        description="Key incidents and editorial issues"
        badge="Intelligence"
      >
        <div className="space-y-3">
          {controversies.slice(0, 6).map((c, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25">
              <AlertCircle className="h-4 w-4 text-gold-700 mt-0.5" />
              <div>
                <p className="font-medium text-navy-900 dark:text-platinum-100">{c.organization}</p>
                <p className="text-xs text-platinum-600 dark:text-platinum-400 mt-1">{c.year}: {c.incident}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}
