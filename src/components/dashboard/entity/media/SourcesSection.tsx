// @ts-nocheck
/**
 * Media Organizations Sources Section
 * UAE National Digital Intelligence Platform
 */

'use client'

import { GlassPanel } from '@/components/dashboard/glass-card'
import { Globe } from 'lucide-react'

interface SourcesSectionProps {
  sourceUrls: any[]
  criticalImportance: any[]
  highImportance: any[]
  mediumImportance: any[]
}

export function SourcesSection({
  sourceUrls,
  criticalImportance,
  highImportance,
  mediumImportance,
}: SourcesSectionProps) {
  return (
    <div className="space-y-6">
      <GlassPanel title="Research Sources" description={`${sourceUrls.length} web sources used for data collection`}>
        <div className="grid gap-3 sm:grid-cols-2">
          {sourceUrls.map((source, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25">
              <Globe className="h-4 w-4 text-navy-600 mt-0.5" />
              <div>
                <p className="font-medium text-navy-900 dark:text-platinum-100 text-sm">{source.source}</p>
                <p className="text-xs text-platinum-500 mt-1 break-all">{source.url}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>

      {/* Relevance Assessments */}
      <div className="grid gap-6 lg:grid-cols-3">
        <GlassPanel title="Critical Importance" description={`${criticalImportance.length} organizations`}>
          <div className="space-y-2">
            {criticalImportance.map((item, i) => (
              <p key={i} className="text-sm text-platinum-700 dark:text-platinum-300">• {item.organization}</p>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel title="High Importance" description={`${highImportance.length} organizations`}>
          <div className="space-y-2">
            {highImportance.map((item, i) => (
              <p key={i} className="text-sm text-platinum-700 dark:text-platinum-300">• {item.organization}</p>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel title="Medium Importance" description={`${mediumImportance.length} organizations`}>
          <div className="space-y-2">
            {mediumImportance.map((item, i) => (
              <p key={i} className="text-sm text-platinum-700 dark:text-platinum-300">• {item.organization}</p>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}
