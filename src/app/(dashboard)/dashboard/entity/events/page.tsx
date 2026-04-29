// @ts-nocheck
'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import { ScrollArea } from '@/components/ui/scroll-area'
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
  BarChart,
} from '@/components/ui/chart-library'
import {
  Calendar,
  Globe,
  TrendingUp,
  Users,
  AlertCircle,
  CheckCircle,
  XCircle,
  Activity,
} from 'lucide-react'
import { eventEntitiesData } from '@/lib/data-loader'
import type { EntityProfile } from '@/lib/data-loader/types'

export default function EventsPage() {
  const entities = eventEntitiesData

  // Summary metrics
  const totalCount = entities.length
  const avgTier = entities.length > 0
    ? (entities.reduce((sum, e) => sum + e.tier, 0) / entities.length).toFixed(1)
    : '0.0'
  const avgRelevance = entities.length > 0
    ? Math.round(entities.reduce((sum, e) => sum + e.uaeRelevance.score, 0) / entities.length)
    : 0

  // Sentiment distribution
  const sentimentCounts = {
    positive: entities.filter(e => e.sentiment?.overall > 0).length,
    negative: entities.filter(e => e.sentiment?.overall < 0).length,
    neutral: entities.filter(e => !e.sentiment || e.sentiment?.overall === 0).length,
  }
  const sentimentData = [
    { name: 'Positive', value: sentimentCounts.positive, color: '#22c55e' },
    { name: 'Negative', value: sentimentCounts.negative, color: '#ef4444' },
    { name: 'Neutral', value: sentimentCounts.neutral, color: '#64748b' },
  ]

  // Alert level distribution
  const alertCounts = {
    RED: entities.filter(e => e.alertLevel === 'RED').length,
    YELLOW: entities.filter(e => e.alertLevel === 'YELLOW').length,
    GREEN: entities.filter(e => e.alertLevel === 'GREEN').length,
  }
  const alertData = [
    { name: 'RED', value: alertCounts.RED, color: '#ef4444' },
    { name: 'YELLOW', value: alertCounts.YELLOW, color: '#f59e0b' },
    { name: 'GREEN', value: alertCounts.GREEN, color: '#22c55e' },
  ]

  // Tier distribution
  const tierDistribution = [
    { tier: 'Tier 0', count: entities.filter(e => e.tier === 0).length },
    { tier: 'Tier 1', count: entities.filter(e => e.tier === 1).length },
    { tier: 'Tier 2', count: entities.filter(e => e.tier === 2).length },
    { tier: 'Tier 3', count: entities.filter(e => e.tier === 3).length },
    { tier: 'Tier 4', count: entities.filter(e => e.tier === 4).length },
  ]

  // Key findings
  const keyFindings = entities
    .flatMap(e => e.keyFindings || [])
    .slice(0, 5)

  const getAlertIcon = (level: string) => {
    switch (level) {
      case 'RED': return <XCircle className="h-4 w-4 text-red-500" />
      case 'YELLOW': return <AlertCircle className="h-4 w-4 text-amber-500" />
      default: return <CheckCircle className="h-4 w-4 text-emerald-500" />
    }
  }

  const getSentimentBadge = (score: number) => {
    if (score > 0) return <Badge variant="success" size="sm">Positive</Badge>
    if (score < 0) return <Badge variant="destructive" size="sm">Negative</Badge>
    return <Badge variant="outline" size="sm">Neutral</Badge>
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Badge variant="purple" className="text-sm font-bold tracking-wider">
            EVENTS
          </Badge>
        </div>
        <div>
          <h1 className="font-rajdhani text-3xl font-bold text-platinum-900 dark:text-platinum-100">
            Event Intelligence
          </h1>
          <p className="mt-1 text-platinum-600 dark:text-platinum-400">
            Tracking significant events with UAE engagement and media presence
          </p>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Events"
          value={totalCount}
          icon={<Calendar className="h-5 w-5" />}
          trend="up"
        />
        <MetricCard
          title="Average Tier"
          value={avgTier}
          icon={<Activity className="h-5 w-5" />}
          trend="stable"
        />
        <MetricCard
          title="Average Relevance"
          value={`${avgRelevance}%`}
          icon={<TrendingUp className="h-5 w-5" />}
          trend="up"
        />
        <MetricCard
          title="Total Attendees"
          value={entities.reduce((sum, e) => sum + (e.followerCount || 0), 0).toLocaleString()}
          icon={<Users className="h-5 w-5" />}
          trend="up"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="glass-premium">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-platinum-600 dark:text-platinum-400">
              Sentiment Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart
              data={sentimentData}
              donut
              height={200}
              showLegend
              showTooltip
            />
          </CardContent>
        </Card>

        <Card className="glass-premium">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-platinum-600 dark:text-platinum-400">
              Alert Levels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart
              data={alertData}
              donut
              height={200}
              showLegend
              showTooltip
            />
          </CardContent>
        </Card>

        <Card className="glass-premium">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-platinum-600 dark:text-platinum-400">
              Tier Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={tierDistribution}
              bars={[{ dataKey: 'count', name: 'Events', color: '#a855f7' }]}
              xAxisKey="tier"
              height={200}
              showLegend={false}
              showTooltip
            />
          </CardContent>
        </Card>
      </div>

      {/* Entity Table */}
      <GlassPanel title="Event Directory" description={`${totalCount} events tracked`}>
        <ScrollArea className="h-[400px]">
          <Table variant="medium">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Relevance</TableHead>
                <TableHead>Sentiment</TableHead>
                <TableHead>Alert</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {entities.map((entity) => (
                <TableRow key={entity.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                        <Calendar className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <p className="font-medium text-platinum-900 dark:text-platinum-100">
                          {entity.name}
                        </p>
                        {entity.nameAr && (
                          <p className="text-xs text-platinum-500">{entity.nameAr}</p>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" size="sm">
                      {entity.sector || entity.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-platinum-700 dark:text-platinum-300">
                      {entity.emirate || 'UAE'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        entity.tier === 0 ? 'gold' :
                        entity.tier === 1 ? 'purple' :
                        entity.tier === 2 ? 'info' :
                        'outline'
                      }
                      size="sm"
                    >
                      T{entity.tier}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-platinum-200 dark:bg-platinum-700">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"
                          style={{ width: `${entity.uaeRelevance.score}%` }}
                        />
                      </div>
                      <span className="text-sm text-platinum-600 dark:text-platinum-400">
                        {entity.uaeRelevance.score}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getSentimentBadge(entity.sentiment?.overall || 0)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {getAlertIcon(entity.alertLevel)}
                      <span className={`text-xs font-medium ${
                        entity.alertLevel === 'RED' ? 'text-red-500' :
                        entity.alertLevel === 'YELLOW' ? 'text-amber-500' :
                        'text-emerald-500'
                      }`}>
                        {entity.alertLevel}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </GlassPanel>

      {/* Key Findings */}
      {keyFindings.length > 0 && (
        <GlassPanel title="Key Findings" description="Critical event intelligence">
          <div className="space-y-3">
            {keyFindings.map((finding, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg bg-white/40 dark:bg-white/5 p-3"
              >
                <div className="mt-0.5">
                  <Globe className="h-4 w-4 text-purple-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-platinum-900 dark:text-platinum-100">
                    {finding.finding}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge variant="outline" size="sm">
                      T{finding.tier}
                    </Badge>
                    <span className="text-xs text-platinum-500">
                      Source: {finding.source}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      )}
    </div>
  )
}
