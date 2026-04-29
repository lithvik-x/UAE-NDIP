// @ts-nocheck
'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlassPanel } from '@/components/ui/glass-panel'
import { MetricCard } from '@/components/dashboard/metric-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PieChart, BarChart, CHART_COLORS } from '@/components/ui/chart-library'
import { journalistsData } from '@/lib/data-loader'
import {
  User,
  Globe,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Minus,
  Users,
  MessageSquare,
  Newspaper,
} from 'lucide-react'
import type { EntityProfile } from '@/lib/data-loader/types'

function getSentimentColor(sentiment: string | undefined): string {
  switch (sentiment) {
    case 'POSITIVE':
    case 'OVERWHELMINGLY_POSITIVE':
      return 'text-emerald-500'
    case 'NEGATIVE':
    case 'OVERWHELMINGLY_NEGATIVE':
      return 'text-red-500'
    case 'MIXED':
      return 'text-amber-500'
    default:
      return 'text-platinum-500'
  }
}

function getSentimentLabel(sentiment: string | undefined): string {
  switch (sentiment) {
    case 'POSITIVE':
    case 'OVERWHELMINGLY_POSITIVE':
      return 'Positive'
    case 'NEGATIVE':
    case 'OVERWHELMINGLY_NEGATIVE':
      return 'Negative'
    case 'MIXED':
      return 'Mixed'
    case 'NEUTRAL':
      return 'Neutral'
    default:
      return 'Unknown'
  }
}

function getAlertBadgeVariant(alertLevel: string): 'success' | 'warning' | 'destructive' | 'secondary' {
  switch (alertLevel) {
    case 'GREEN':
      return 'success'
    case 'YELLOW':
      return 'warning'
    case 'RED':
      return 'destructive'
    default:
      return 'secondary'
  }
}

function formatFollowers(count: number | undefined): string {
  if (!count) return 'N/A'
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K`
  return count.toString()
}

export default function JournalistsPage() {
  const entities = journalistsData

  const totalCount = entities.length
  const avgRelevance = Math.round(
    entities.reduce((acc, e) => acc + (e.uaeRelevance?.score || 0), 0) / entities.length
  )
  const avgCredibility = Math.round(
    entities.reduce((acc, e) => acc + (e.credibility?.reliabilityScore || 0), 0) / entities.length
  )

  // Sentiment breakdown
  const sentimentCounts = entities.reduce(
    (acc, e) => {
      const s = e.sentiment || 'NEUTRAL'
      if (s.includes('POSITIVE')) acc.positive++
      else if (s.includes('NEGATIVE')) acc.negative++
      else acc.neutral++
      return acc
    },
    { positive: 0, negative: 0, neutral: 0 }
  )

  // Alert breakdown
  const alertCounts = entities.reduce(
    (acc, e) => {
      acc[e.alertLevel] = (acc[e.alertLevel] || 0) + 1
      return acc
    },
    {} as Record<string, number>
  )

  // Organization distribution
  const orgCounts = entities.reduce((acc, e) => {
    const org = e.organization || 'Independent'
    acc[org] = (acc[org] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  const topOrg = Object.entries(orgCounts).sort((a, b) => b[1] - a[1])[0]

  // Beat distribution
  const beatCounts = entities.reduce((acc, e) => {
    const beat = e.beat || 'General'
    acc[beat] = (acc[beat] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const sentimentData = [
    { name: 'Positive', value: sentimentCounts.positive, color: '#10b981' },
    { name: 'Neutral', value: sentimentCounts.neutral, color: '#6b7280' },
    { name: 'Negative', value: sentimentCounts.negative, color: '#ef4444' },
  ]

  const relevanceData = entities
    .sort((a, b) => (b.uaeRelevance?.score || 0) - (a.uaeRelevance?.score || 0))
    .slice(0, 10)
    .map((e) => ({
      name: e.name.length > 20 ? e.name.substring(0, 20) + '...' : e.name,
      relevance: e.uaeRelevance?.score || 0,
    }))

  const orgData = Object.entries(orgCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, count]) => ({ name, count }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy-solid" className="mb-2">ENTITY INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Journalists</h1>
          <p className="mt-2 text-platinum-600 dark:text-platinum-400">
            Intelligence on journalists operating in the UAE and Gulf region.
            Track coverage, credibility, sentiment, and organizational affiliations.
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="gap-2">
            <User className="h-4 w-4" />
            {totalCount} Journalists
          </Badge>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Journalists"
          value={totalCount}
          icon={<User className="h-6 w-6" />}
          description="Tracked media professionals"
        />
        <MetricCard
          title="Average Relevance"
          value={avgRelevance}
          icon={<TrendingUp className="h-6 w-6" />}
          description="UAE relevance score"
        />
        <MetricCard
          title="Top Organization"
          value={topOrg ? (topOrg[0].length > 15 ? topOrg[0].substring(0, 15) + '...' : topOrg[0]) : 'N/A'}
          icon={<Newspaper className="h-6 w-6" />}
          description={topOrg ? `${topOrg[1]} journalists` : 'No data'}
        />
        <MetricCard
          title="Avg Credibility"
          value={avgCredibility}
          icon={<CheckCircle2 className="h-6 w-6" />}
          description="Reliability score"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassPanel title="Sentiment Breakdown" description="Overall sentiment distribution across journalists">
          <div className="flex items-center justify-center py-4">
            <PieChart
              data={sentimentData}
              height={280}
              showLegend={true}
            />
          </div>
        </GlassPanel>

        <GlassPanel title="Relevance Distribution" description="Top 10 journalists by UAE relevance">
          <div className="h-64">
            <BarChart
              data={relevanceData}
              xAxisKey="name"
              bars={[{dataKey: 'relevance', name: 'Relevance', color: CHART_COLORS.blue}]}
              height={300}
              showGrid={true}
            />
          </div>
        </GlassPanel>
      </div>

      {/* Organization & Beat Distribution */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassPanel title="Organization Distribution" description="Journalists by media outlet">
          <div className="space-y-3">
            {orgData.map((org) => (
              <div key={org.name} className="flex items-center justify-between">
                <span className="text-sm text-platinum-700 dark:text-platinum-300">{org.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 rounded-full bg-platinum-200 dark:bg-platinum-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-navy-400 to-navy-600"
                      style={{ width: `${(org.count / totalCount) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-platinum-600 dark:text-platinum-400 w-8">{org.count}</span>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel title="Alert Status Overview" description="Current alert levels across all journalists">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <span className="text-sm text-platinum-600 dark:text-platinum-400">GREEN</span>
              <Badge variant="success" size="lg">{alertCounts['GREEN'] || 0}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="h-5 w-5 text-amber-500" />
              <span className="text-sm text-platinum-600 dark:text-platinum-400">YELLOW</span>
              <Badge variant="warning" size="lg">{alertCounts['YELLOW'] || 0}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span className="text-sm text-platinum-600 dark:text-platinum-400">RED</span>
              <Badge variant="destructive" size="lg">{alertCounts['RED'] || 0}</Badge>
            </div>
          </div>
        </GlassPanel>
      </div>

      {/* Entity Table */}
      <GlassPanel title="Journalist Directory" description="Detailed profiles of all tracked journalists">
        <Table variant="premium" size="md">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Organization</TableHead>
              <TableHead>Beat</TableHead>
              <TableHead>Emirate</TableHead>
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
                  <div>
                    <p className="font-medium text-platinum-900 dark:text-platinum-100">{entity.name}</p>
                    {entity.nameAr && (
                      <p className="text-xs text-platinum-500 dark:text-platinum-400">{entity.nameAr}</p>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" size="sm">{entity.organization || 'Independent'}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-platinum-700 dark:text-platinum-300">{entity.beat || 'General'}</span>
                </TableCell>
                <TableCell>
                  <span className="text-platinum-700 dark:text-platinum-300">{entity.emirate || 'N/A'}</span>
                </TableCell>
                <TableCell>
                  <Badge variant={entity.tier === 0 ? 'gold' : entity.tier === 1 ? 'navy-solid' : 'outline'} size="sm">
                    Tier {entity.tier}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 rounded-full bg-platinum-200 dark:bg-platinum-700 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-navy-400 to-navy-600"
                        style={{ width: `${entity.uaeRelevance?.score || 0}%` }}
                      />
                    </div>
                    <span className="text-sm text-platinum-700 dark:text-platinum-300">
                      {entity.uaeRelevance?.score || 0}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`text-sm font-medium ${getSentimentColor(entity.sentiment)}`}>
                    {getSentimentLabel(entity.sentiment)}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant={getAlertBadgeVariant(entity.alertLevel)} size="sm">
                    {entity.alertLevel}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </GlassPanel>

      {/* Key Findings */}
      <GlassPanel title="Key Findings" description="Critical insights from journalist analysis">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {entities.slice(0, 6).map((entity) => (
            <Card key={entity.id} className="glass-subtle">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-rajdhani">{entity.name}</CardTitle>
                <CardDescription className="text-xs">{entity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {entity.keyFindings?.slice(0, 2).map((finding, fidx) => (
                    <div key={fidx} className="flex items-start gap-2 text-sm">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-navy-500 flex-shrink-0" />
                      <span className="text-platinum-700 dark:text-platinum-300">{finding}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-4 text-xs text-platinum-500">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {formatFollowers(entity.followerCount)} followers
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    {entity.metrics?.mentions || 0} mentions
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </GlassPanel>
    </div>
  )
}
