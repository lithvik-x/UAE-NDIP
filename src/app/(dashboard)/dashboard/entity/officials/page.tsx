// @ts-nocheck
'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
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
  BarChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Crown,
  Users,
  TrendingUp,
  Shield,
  AlertCircle,
  CheckCircle2,
  Twitter,
  Linkedin,
  Globe,
  ChevronRight,
  Star,
  Activity,
} from 'lucide-react'
import { federalOfficialsData } from '@/lib/data-loader'

export default function FederalOfficialsPage() {
  const data = federalOfficialsData

  // Summary metrics
  const totalCount = data.length
  const avgTier = (data.reduce((acc, e) => acc + e.tier, 0) / data.length).toFixed(1)
  const avgRelevance = Math.round(data.reduce((acc, e) => acc + e.uaeRelevance, 0) / data.length)

  // Sentiment distribution
  const sentimentCounts = data.reduce((acc, e) => {
    acc[e.sentiment] = (acc[e.sentiment] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const sentimentData = [
    { name: 'Overwhelmingly Positive', value: sentimentCounts['OVERWHELMINGLY_POSITIVE'] || 0, color: '#10b981' },
    { name: 'Positive', value: sentimentCounts['POSITIVE'] || 0, color: '#22c55e' },
    { name: 'Neutral', value: sentimentCounts['NEUTRAL'] || 0, color: '#94a3b8' },
    { name: 'Negative', value: sentimentCounts['NEGATIVE'] || 0, color: '#ef4444' },
    { name: 'Mixed', value: sentimentCounts['MIXED'] || 0, color: '#f59e0b' },
  ].filter(d => d.value > 0)

  // Tier distribution
  const tierCounts = data.reduce((acc, e) => {
    acc[e.tier] = (acc[e.tier] || 0) + 1
    return acc
  }, {} as Record<number, number>)

  const tierData = [0, 1, 2, 3, 4].map(tier => ({
    tier: `Tier ${tier}`,
    count: tierCounts[tier] || 0,
  }))

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case 'OVERWHELMINGLY_POSITIVE':
        return <Badge variant="success" className="text-xs">Overwhelmingly Positive</Badge>
      case 'POSITIVE':
        return <Badge variant="success" className="text-xs">Positive</Badge>
      case 'NEUTRAL':
        return <Badge variant="secondary" className="text-xs">Neutral</Badge>
      case 'NEGATIVE':
        return <Badge variant="destructive" className="text-xs">Negative</Badge>
      case 'MIXED':
        return <Badge variant="warning" className="text-xs">Mixed</Badge>
      default:
        return <Badge variant="secondary" className="text-xs">{sentiment}</Badge>
    }
  }

  const getAlertBadge = (level: string) => {
    switch (level) {
      case 'GREEN':
        return <Badge variant="success" className="text-xs gap-1"><CheckCircle2 className="h-3 w-3" /> Green</Badge>
      case 'YELLOW':
        return <Badge variant="warning" className="text-xs gap-1"><AlertCircle className="h-3 w-3" /> Yellow</Badge>
      case 'RED':
        return <Badge variant="destructive" className="text-xs gap-1"><AlertCircle className="h-3 w-3" /> Red</Badge>
      case 'ORANGE':
        return <Badge variant="default" className="text-xs gap-1 bg-orange-500 text-white border-orange-500"><AlertCircle className="h-3 w-3" /> Orange</Badge>
      default:
        return <Badge variant="secondary" className="text-xs">{level}</Badge>
    }
  }

  const getTierBadge = (tier: number) => {
    const colors = [
      'bg-gradient-gold text-white',
      'bg-gradient-platinum text-white',
      'bg-gradient-denim text-white',
      'bg-slate-400 text-white',
      'bg-slate-300 text-slate-700',
    ]
    return (
      <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${colors[tier]}`}>
        {tier}
      </div>
    )
  }

  const getTwitterHandle = (entity: typeof data[0]) => {
    if (entity.socialAccounts?.twitter) {
      return (
        <a
          href={`https://twitter.com/${entity.socialAccounts.twitter.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors"
        >
          <Twitter className="h-3.5 w-3.5" />
          <span className="text-xs">{entity.socialAccounts.twitter}</span>
        </a>
      )
    }
    return <span className="text-slate-500 text-xs">—</span>
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">FEDERAL OFFICIALS</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Entity Intelligence</h1>
          <p className="mt-2 text-platinum-600 dark:text-platinum-400">
            Federal officials and government leadership — {totalCount} entities tracked
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/30 text-gold hover:bg-gold/10">
            <Globe className="h-4 w-4" />
            Export List
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Star className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Officials"
          value={totalCount}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Average Tier"
          value={avgTier}
          icon={<Crown className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Average Relevance"
          value={avgRelevance}
          unit="/100"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Positive Sentiment"
          value={Math.round(((sentimentCounts['OVERWHELMINGLY_POSITIVE'] || 0) + (sentimentCounts['POSITIVE'] || 0)) / totalCount * 100)}
          unit="%"
          icon={<Shield className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="table" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="table">Entity Table</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Distribution</TabsTrigger>
          <TabsTrigger value="tier">Tier Analysis</TabsTrigger>
          <TabsTrigger value="findings">Key Findings</TabsTrigger>
        </TabsList>

        {/* Entity Table */}
        <TabsContent value="table" className="space-y-6">
          <GlassPanel title="Federal Officials Registry" description="Complete listing of federal officials with tier, relevance, and sentiment">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Name</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Role / Title</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Emirate</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Tier</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Relevance</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Sentiment</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Alert</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Twitter</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((entity) => (
                  <TableRow key={entity.id} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-semibold text-navy-900 dark:text-platinum-100">{entity.name}</span>
                        {entity.nameAr && (
                          <span className="text-xs text-platinum-500 dark:text-platinum-400 font-arabic">{entity.nameAr}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-platinum-700 dark:text-platinum-300">{entity.role || '—'}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-platinum-700 dark:text-platinum-300">{entity.emirate || '—'}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTierBadge(entity.tier)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1 w-16">
                        <span className="text-sm font-bold text-navy-900 dark:text-platinum-100">{entity.uaeRelevance}</span>
                        <Progress value={entity.uaeRelevance} className="h-1.5" />
                      </div>
                    </TableCell>
                    <TableCell>
                      {getSentimentBadge(entity.sentiment)}
                    </TableCell>
                    <TableCell>
                      {getAlertBadge(entity.alertLevel)}
                    </TableCell>
                    <TableCell>
                      {getTwitterHandle(entity)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Distribution */}
        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sentiment Breakdown</CardTitle>
                <CardDescription>Distribution of sentiment across federal officials</CardDescription>
              </CardHeader>
              <CardContent>
                {sentimentData.length > 0 ? (
                  <PieChart
                    data={sentimentData}
                    height={280}
                    showLegend={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No sentiment data available</div>
                )}
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sentiment by Tier</CardTitle>
                <CardDescription>Sentiment distribution per tier level</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[0, 1, 2, 3, 4].map(tier => {
                    const tierEntities = data.filter(e => e.tier === tier)
                    const positiveCount = tierEntities.filter(e => e.sentiment === 'POSITIVE' || e.sentiment === 'OVERWHELMINGLY_POSITIVE').length
                    const pct = tierEntities.length > 0 ? Math.round(positiveCount / tierEntities.length * 100) : 0
                    return (
                      <div key={tier} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-platinum-700 dark:text-platinum-300">Tier {tier}</span>
                          <span className="text-platinum-500">{tierEntities.length} officials · {pct}% positive</span>
                        </div>
                        <Progress value={pct} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tier Analysis */}
        <TabsContent value="tier" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Tier Distribution</CardTitle>
                <CardDescription>Number of officials per tier level</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={tierData}
                  xAxisKey="tier"
                  bars={[{dataKey: 'count', name: 'Officials', color: CHART_COLORS.gold}]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Top Relevance Scores</CardTitle>
                <CardDescription>Officials with highest UAE relevance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[...data]
                    .sort((a, b) => b.uaeRelevance - a.uaeRelevance)
                    .slice(0, 8)
                    .map((entity, i) => (
                      <div key={entity.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-platinum-400 w-5">{i + 1}</span>
                          <span className="text-sm font-medium text-navy-900 dark:text-platinum-100">{entity.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gold">{entity.uaeRelevance}</span>
                          <Progress value={entity.uaeRelevance} className="h-1.5 w-20" />
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Key Findings */}
        <TabsContent value="findings" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.slice(0, 12).map((entity) => (
              entity.keyFindings && entity.keyFindings.length > 0 && (
                <Card key={entity.id} className="glass-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base">{entity.name}</CardTitle>
                        {entity.role && (
                          <CardDescription className="text-xs mt-1">{entity.role} · {entity.emirate}</CardDescription>
                        )}
                      </div>
                      {getTierBadge(entity.tier)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="space-y-1.5">
                      {entity.keyFindings.slice(0, 3).map((finding, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-platinum-700 dark:text-platinum-300">
                          <ChevronRight className="h-3 w-3 mt-0.5 text-gold shrink-0" />
                          {finding}
                        </li>
                      ))}
                    </ul>
                    {entity.sources && entity.sources.length > 0 && (
                      <div className="pt-2 border-t border-platinum-200/50 dark:border-platinum-700/50">
                        <p className="text-xs text-platinum-500">Sources: {entity.sources.join(', ')}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
