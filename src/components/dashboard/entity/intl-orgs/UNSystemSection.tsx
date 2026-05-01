'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Globe,
  Building,
} from 'lucide-react'
import type { UNSystemData, UNAgency } from '@/lib/data/entity/international-orgs-data'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const cardHover = {
  rest: { scale: 1, opacity: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
}

interface UNSystemSectionProps {
  data: UNSystemData
}

export function UNSystemSection({ data }: UNSystemSectionProps) {
  const unAgencies = data.agencies

  const getSentimentScore = (sentiment: string) => {
    switch (sentiment) {
      case 'POSITIVE': return 100
      case 'MIXED': return 50
      case 'NEGATIVE': return 0
      default: return 50
    }
  }

  const relevanceData = unAgencies
    .map((a) => ({
      name: a.name.replace(' UAE', ''),
      relevance: a.uaeRelevance,
    }))
    .sort((a, b) => b.relevance - a.relevance)

  const radarData = unAgencies.map((a) => ({
    name: a.name.replace(' UAE', ''),
    relevance: a.uaeRelevance,
    sentiment: getSentimentScore(a.sentiment),
    activity: Math.min(a.keyActivities.length * 25, 100),
    reach: a.metrics?.countriesServed ? Math.min((a.metrics.countriesServed / 70) * 100, 100) : 50,
  }))

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case 'POSITIVE':
        return <Badge variant="success" className="text-xs">Positive</Badge>
      case 'NEGATIVE':
        return <Badge variant="destructive" className="text-xs">Negative</Badge>
      case 'MIXED':
        return <Badge variant="warning" className="text-xs">Mixed</Badge>
      default:
        return <Badge variant="outline" className="text-xs">{sentiment}</Badge>
    }
  }

  return (
    <motion.div variants={fadeInUp}>
      <GlassPanel
        title="UN System in UAE"
        description={`${data.overview.agenciesCount} agencies with UAE presence`}
        badge="UN System"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {/* UN Overview Card */}
          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Globe className="h-4 w-4 text-emerald-500" />
                UN Resident Coordinator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-navy-900 dark:text-platinum-100">
                {data.overview.residentCoordinator}
              </p>
              <p className="text-sm text-platinum-500">{data.overview.nationality}</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-platinum-500">First UN Operations</span>
                  <span className="font-medium">{data.overview.firstUNOperations}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-platinum-500">Agencies in UAE</span>
                  <span className="font-medium">{data.overview.agenciesCount}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* UN Agencies Chart */}
          <Card className="glass-card col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Building className="h-4 w-4 text-denim-500" />
                UN Agencies by UAE Relevance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={relevanceData}
                bars={[{ dataKey: 'relevance', name: 'UAE Relevance', color: CHART_COLORS.denim }]}
                xAxisKey="name"
                height={200}
                showGrid={false}
                showLegend={false}
              />
            </CardContent>
          </Card>

          {/* UN Agencies Radar Chart */}
          <Card className="glass-card col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Globe className="h-4 w-4 text-emerald-500" />
                Multi-Dimensional Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadarChart
                data={radarData}
                metrics={[
                  { dataKey: 'relevance', name: 'Relevance', color: CHART_COLORS.denim },
                  { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.emerald },
                  { dataKey: 'activity', name: 'Activity', color: CHART_COLORS.gold },
                  { dataKey: 'reach', name: 'Global Reach', color: CHART_COLORS.rose },
                ]}
                height={200}
                showLegend={true}
              />
            </CardContent>
          </Card>
        </div>

        {/* UN Agencies Table */}
        <div className="mt-6">
          <Table variant="medium">
            <TableHeader>
              <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Agency</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Full Name</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">UAE Office</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Relevance</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Sentiment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unAgencies.map((agency) => (
                <TableRow
                  key={agency.id}
                  className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors"
                >
                  <TableCell>
                    <span className="font-semibold text-navy-900 dark:text-platinum-100">{agency.name}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-platinum-600 dark:text-platinum-400">{agency.fullName}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-platinum-600 dark:text-platinum-400">{agency.uaeOffice || 'N/A'}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 w-20">
                      <Progress value={agency.uaeRelevance} className="h-1.5" />
                      <span className="text-sm font-medium">{agency.uaeRelevance}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getSentimentBadge(agency.sentiment)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </GlassPanel>
    </motion.div>
  )
}

export default UNSystemSection