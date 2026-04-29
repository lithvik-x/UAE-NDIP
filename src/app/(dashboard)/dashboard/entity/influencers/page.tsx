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
import { influencersData } from '@/lib/data-loader'
import {
  Star,
  Globe,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Minus,
  Users,
  MessageSquare,
  Instagram,
  Twitter,
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
  if (count >= 1000000000) return `${(count / 1000000000).toFixed(1)}B`
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K`
  return count.toString()
}

function getPlatformIcon(platform: string): React.ReactNode {
  switch (platform.toLowerCase()) {
    case 'instagram':
      return <Instagram className="h-4 w-4 text-pink-500" />
    case 'twitter':
      return <Twitter className="h-4 w-4 text-blue-400" />
    default:
      return <Globe className="h-4 w-4" />
  }
}

export default function InfluencersPage() {
  const entities = influencersData

  const totalCount = entities.length
  const avgRelevance = Math.round(
    entities.reduce((acc, e) => acc + (e.uaeRelevance?.score || 0), 0) / entities.length
  )
  const avgCredibility = Math.round(
    entities.reduce((acc, e) => acc + (e.credibility?.reliabilityScore || 0), 0) / entities.length
  )

  // Total followers
  const totalFollowers = entities.reduce((acc, e) => acc + (e.followerCount || 0), 0)

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

  // Platform distribution
  const platformCounts = entities.reduce((acc, e) => {
    if (e.socialAccounts) {
      Object.keys(e.socialAccounts).forEach((platform) => {
        acc[platform] = (acc[platform] || 0) + 1
      })
    }
    return acc
  }, {} as Record<string, number>)
  const topPlatform = Object.entries(platformCounts).sort((a, b) => b[1] - a[1])[0]

  // Sector distribution
  const sectorCounts = entities.reduce((acc, e) => {
    const sector = e.sector || 'General'
    acc[sector] = (acc[sector] || 0) + 1
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

  const sectorData = Object.entries(sectorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, count]) => ({ name, count }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="premium" className="mb-2">ENTITY INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-premium">Influencers</h1>
          <p className="mt-2 text-platinum-600 dark:text-platinum-400">
            Comprehensive intelligence on influencers operating in the UAE and Gulf region.
            Track reach, engagement, sentiment, and platform presence.
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="outline" className="gap-2">
            <Star className="h-4 w-4" />
            {totalCount} Influencers
          </Badge>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Influencers"
          value={totalCount}
          icon={<Star className="h-6 w-6" />}
          description="Tracked content creators"
        />
        <MetricCard
          title="Combined Reach"
          value={formatFollowers(totalFollowers)}
          icon={<Users className="h-6 w-6" />}
          description="Total follower count"
        />
        <MetricCard
          title="Top Platform"
          value={topPlatform ? topPlatform[0].charAt(0).toUpperCase() + topPlatform[0].slice(1) : 'N/A'}
          icon={<Globe className="h-6 w-6" />}
          description={topPlatform ? `${topPlatform[1]} accounts` : 'No data'}
        />
        <MetricCard
          title="Avg Relevance"
          value={avgRelevance}
          icon={<TrendingUp className="h-6 w-6" />}
          description="UAE relevance score"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassPanel title="Sentiment Breakdown" description="Overall sentiment distribution across influencers">
          <div className="flex items-center justify-center py-4">
            <PieChart
              data={sentimentData}
              height={280}
              showLegend={true}
            />
          </div>
        </GlassPanel>

        <GlassPanel title="Relevance Distribution" description="Top 10 influencers by UAE relevance">
          <div className="h-64">
            <BarChart
              data={relevanceData}
              xAxisKey="name"
              bars={[
                { dataKey: 'relevance', name: 'Relevance', color: CHART_COLORS.gold },
              ]}
              height={250}
              showGrid={true}
            />
          </div>
        </GlassPanel>
      </div>

      {/* Sector & Alert Distribution */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GlassPanel title="Sector Distribution" description="Influencers by content category">
          <div className="space-y-3">
            {sectorData.map((sector) => (
              <div key={sector.name} className="flex items-center justify-between">
                <span className="text-sm text-platinum-700 dark:text-platinum-300">{sector.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 rounded-full bg-platinum-200 dark:bg-platinum-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600"
                      style={{ width: `${(sector.count / totalCount) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-platinum-600 dark:text-platinum-400 w-8">{sector.count}</span>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel title="Alert Status Overview" description="Current alert levels across all influencers">
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
      <GlassPanel title="Influencer Directory" description="Detailed profiles of all tracked influencers">
        <Table variant="premium" size="md">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Sector / Role</TableHead>
              <TableHead>Emirate</TableHead>
              <TableHead>Tier</TableHead>
              <TableHead>Followers</TableHead>
              <TableHead>Relevance</TableHead>
              <TableHead>Sentiment</TableHead>
              <TableHead>Alert</TableHead>
              <TableHead>Platform</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entities.map((entity) => {
              const platformHandle = entity.socialAccounts
                ? Object.entries(entity.socialAccounts)[0]
                : null

              return (
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
                    <div className="flex flex-col gap-1">
                      <Badge variant="outline" size="sm">{entity.role || 'Influencer'}</Badge>
                      {entity.sector && (
                        <span className="text-xs text-platinum-500 dark:text-platinum-400">{entity.sector}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-platinum-700 dark:text-platinum-300">{entity.emirate || 'N/A'}</span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={entity.tier === 0 ? 'gold' : entity.tier === 1 ? 'premium' : 'outline'} size="sm">
                      Tier {entity.tier}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-medium text-platinum-700 dark:text-platinum-300">
                      {formatFollowers(entity.followerCount)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 rounded-full bg-platinum-200 dark:bg-platinum-700 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-gold-400 to-gold-600"
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
                  <TableCell>
                    {platformHandle ? (
                      <div className="flex items-center gap-1">
                        {getPlatformIcon(platformHandle[0])}
                        <span className="text-xs text-platinum-600 dark:text-platinum-400">
                          @{platformHandle[1]}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs text-platinum-400">N/A</span>
                    )}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </GlassPanel>

      {/* Key Findings */}
      <GlassPanel title="Key Findings" description="Critical insights from influencer analysis">
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
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-500 flex-shrink-0" />
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
                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    {entity.credibility?.reliabilityScore || 0} credibility
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
