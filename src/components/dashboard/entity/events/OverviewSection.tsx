'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Calendar,
  Globe,
  TrendingUp,
  Users,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Activity,
  Flag,
  Landmark,
  Shield,
  DollarSign,
  Heart,
  Star,
  AlertTriangle,
  Utensils,
  Palette,
  Award,
  Sunrise,
} from 'lucide-react'
import type {
  EventEntity,
} from '@/lib/data/entity/event-entities-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const getRelevanceBadgeVariant = (relevance: string): 'gold' | 'denim' | 'outline' => {
  if (relevance === 'CRITICAL') return 'gold'
  if (relevance === 'HIGH') return 'denim'
  return 'outline'
}

const getSentimentBadge = (sentiment: string) => {
  switch (sentiment) {
    case 'POSITIVE':
    case 'OVERWHELMINGLY_POSITIVE':
      return <Badge variant="success" className="text-xs">Positive</Badge>
    case 'NEGATIVE':
      return <Badge variant="destructive" className="text-xs">Negative</Badge>
    case 'MIXED':
      return <Badge variant="warning" className="text-xs">Mixed</Badge>
    case 'NEUTRAL':
      return <Badge variant="outline" className="text-xs">Neutral</Badge>
    default:
      return <Badge variant="outline" className="text-xs">{sentiment}</Badge>
  }
}

const getCategoryIcon = (type: string) => {
  switch (type) {
    case 'Climate': return <Globe className="h-4 w-4" />
    case 'Global Event': return <Star className="h-4 w-4" />
    case 'Economic': return <DollarSign className="h-4 w-4" />
    case 'Military': return <Shield className="h-4 w-4" />
    case 'Diplomatic': return <Activity className="h-4 w-4" />
    case 'Health': return <Heart className="h-4 w-4" />
    case 'National': return <Flag className="h-4 w-4" />
    case 'Sports': return <Activity className="h-4 w-4" />
    case 'Technology': return <TrendingUp className="h-4 w-4" />
    case 'Aerospace': return <TrendingUp className="h-4 w-4" />
    case 'Energy': return <Activity className="h-4 w-4" />
    case 'Trade': return <Utensils className="h-4 w-4" />
    case 'Cultural': return <Palette className="h-4 w-4" />
    case 'Foundational': return <Landmark className="h-4 w-4" />
    default: return <Calendar className="h-4 w-4" />
  }
}

interface OverviewSectionProps {
  allEventEntities: EventEntity[]
  eventDashboardMetrics: {
    totalEventsTracked: number
    criticalPriorityCount: number
    highPriorityCount: number
    recurringCount: number
    oneTimeCount: number
    enrichedCount: number
    positiveSentimentCount: number
    mixedSentimentCount: number
    neutralSentimentCount: number
    negativeSentimentCount: number
  }
}

export function OverviewSection({
  allEventEntities,
  eventDashboardMetrics,
}: OverviewSectionProps) {
  const metrics = eventDashboardMetrics

  // Sentiment distribution for pie chart
  const sentimentDistribution = [
    { name: 'Positive', value: metrics.positiveSentimentCount, color: CHART_COLORS.success },
    { name: 'Mixed', value: metrics.mixedSentimentCount, color: CHART_COLORS.warning },
    { name: 'Neutral', value: metrics.neutralSentimentCount, color: CHART_COLORS.platinum },
    { name: 'Negative', value: metrics.negativeSentimentCount, color: CHART_COLORS.danger },
  ].filter(d => d.value > 0)

  // Relevance distribution
  const relevanceDistribution = [
    { name: 'CRITICAL', value: metrics.criticalPriorityCount, color: CHART_COLORS.gold },
    { name: 'HIGH', value: metrics.highPriorityCount, color: CHART_COLORS.denim },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Sentiment Distribution */}
        <Card className="glass-premium">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Sentiment Distribution</CardTitle>
            <p className="text-sm text-platinum-500">Overall sentiment across all tracked events</p>
          </CardHeader>
          <CardContent>
            {sentimentDistribution.length > 0 ? (
              <PieChart
                data={sentimentDistribution}
                donut
                height={280}
                showLegend
                showTooltip
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500">No sentiment data available</div>
            )}
          </CardContent>
        </Card>

        {/* Relevance Distribution */}
        <Card className="glass-premium">
          <CardHeader>
            <CardTitle className="text-lg font-rajdhani font-semibold">Relevance Distribution</CardTitle>
            <p className="text-sm text-platinum-500">Events by UAE relevance level</p>
          </CardHeader>
          <CardContent>
            {relevanceDistribution.length > 0 ? (
              <PieChart
                data={relevanceDistribution}
                donut
                height={280}
                showLegend
                showTooltip
              />
            ) : (
              <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* All Events Table */}
      <GlassPanel title="All Events Registry" description={`${metrics.totalEventsTracked} events tracked`}>
        <ScrollArea className="h-[500px]">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Event Name</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Category</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Frequency</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Relevance</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Key Metric</TableHead>
                <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Sentiment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allEventEntities.map((event) => (
                <TableRow
                  key={event.id}
                  className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors cursor-pointer"
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg`}>
                        {getCategoryIcon(event.type)}
                      </div>
                      <span className="font-semibold text-navy-900 dark:text-platinum-100">{event.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{event.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-platinum-700 dark:text-platinum-300">{event.frequency}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getRelevanceBadgeVariant(event.relevance)} className="text-xs">
                      {event.relevance}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-platinum-600 dark:text-platinum-400">{event.keyMetric || '—'}</span>
                  </TableCell>
                  <TableCell>
                    {getSentimentBadge(event.sentiment)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </GlassPanel>
    </div>
  )
}