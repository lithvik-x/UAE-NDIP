// @ts-nocheck
/**
 * Media Organizations Table Section
 * UAE National Digital Intelligence Platform
 */

'use client'

import { GlassPanel } from '@/components/dashboard/glass-card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Newspaper,
  Tv,
  Radio,
  Globe,
  Building,
  MapPin,
  Building2,
} from 'lucide-react'

// Helper function to get sentiment badge
const getSentimentBadge = (sentiment: string) => {
  switch (sentiment) {
    case 'PRO_GOVERNMENT':
      return <Badge variant="success" className="text-xs">Pro-Government</Badge>
    case 'PRO_SAUDI':
      return <Badge variant="default" className="text-xs bg-gold-500 text-white">Pro-Saudi</Badge>
    case 'PRO_QATAR':
      return <Badge variant="warning" className="text-xs">Pro-Qatar</Badge>
    case 'CRITICAL':
      return <Badge variant="destructive" className="text-xs">Critical</Badge>
    case 'NEUTRAL':
      return <Badge variant="secondary" className="text-xs">Neutral</Badge>
    default:
      return <Badge variant="outline" className="text-xs">{sentiment}</Badge>
  }
}

// Helper function to get relevance badge
const getRelevanceBadge = (relevance: string) => {
  switch (relevance) {
    case 'CRITICAL':
      return <Badge variant="destructive" className="text-xs gap-1"><Building2 className="h-3 w-3" /> Critical</Badge>
    case 'HIGH':
      return <Badge variant="default" className="text-xs bg-navy-500 text-white gap-1"><Globe className="h-3 w-3" /> High</Badge>
    case 'MEDIUM':
      return <Badge variant="secondary" className="text-xs gap-1"><MapPin className="h-3 w-3" /> Medium</Badge>
    default:
      return <Badge variant="outline" className="text-xs">{relevance}</Badge>
  }
}

// Helper function to get type icon
const getTypeIcon = (type: string) => {
  switch (type) {
    case 'PRINT':
      return <Newspaper className="h-4 w-4" />
    case 'BROADCAST_TV':
      return <Tv className="h-4 w-4" />
    case 'BROADCAST_RADIO':
      return <Radio className="h-4 w-4" />
    case 'NEWS_AGENCY':
      return <Building className="h-4 w-4" />
    case 'INTERNATIONAL':
      return <Globe className="h-4 w-4" />
    case 'REGIONAL':
      return <MapPin className="h-4 w-4" />
    case 'DIGITAL_NATIVE':
      return <Star className="h-4 w-4" />
    default:
      return <Building2 className="h-4 w-4" />
  }
}

interface OrganizationTableSectionProps {
  organizations: any[]
}

export function OrganizationTableSection({ organizations }: OrganizationTableSectionProps) {
  return (
    <GlassPanel title="Media Organizations Registry" description="Complete list of tracked media organizations">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
            <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Name</TableHead>
            <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Type</TableHead>
            <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Language</TableHead>
            <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">HQ</TableHead>
            <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Sentiment</TableHead>
            <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Relevance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {organizations.map((org) => (
            <TableRow key={org.id} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{org.name}</span>
                  {org.nameAr && (
                    <span className="text-xs text-platinum-500-500 dark:text-platinum-500-400 font-arabic">{org.nameAr}</span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getTypeIcon(org.type)}
                  <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{org.type.replace('_', ' ')}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{org.language}</span>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{org.headquarters}</span>
                  <span className="text-xs text-platinum-500-500">{org.country}</span>
                </div>
              </TableCell>
              <TableCell>
                {getSentimentBadge(org.sentiment)}
              </TableCell>
              <TableCell>
                {getRelevanceBadge(org.uaeRelevance)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </GlassPanel>
  )
}
