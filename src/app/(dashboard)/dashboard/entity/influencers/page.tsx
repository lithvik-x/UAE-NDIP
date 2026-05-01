// @ts-nocheck
'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
  Users,
  TrendingUp,
  Shield,
  AlertCircle,
  Globe,
  ChevronRight,
  Star,
  Activity,
  Heart,
  Scale,
  AlertTriangle,
  UserCheck,
  CheckCircle2,
  DollarSign,
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  keyMetrics,
  top10Influencers,
  tierFramework,
  engagementByCategory,
  fazzaProfile,
  abuDhabiGovernmentAccounts,
  beautyLifestyleMegaInfluencers,
  fashionMegaInfluencers,
  comedyEntertainmentMegaInfluencers,
  foodMegaInfluencers,
  techMegaInfluencers,
  luxuryLifestyleMegaInfluencers,
  dubaiMacroInfluencers,
  abuDhabiMacroInfluencers,
  techMacroInfluencers,
  emiratiFashionMicroInfluencers,
  foodMicroInfluencers,
  beautyCosmeticsInfluencers,
  travelTourismInfluencers,
  financialInfluencers,
  youtubeTopUaeCreators,
  kidsContentYoutube,
  emiratiFashionCreators,
  emiratiBodybuildingFitness,
  emiratiFinancialInfluencer,
  influencerAgencies,
  agencyComparison,
  industryStatistics,
  uaeMediaLaw,
  eligibilityRequirements,
  regulatoryFines,
  regulatoryTimeline,
  complianceRequirements,
  uaeSocialMediaStats,
  influencerFollowingMetrics,
  influencerMarketData2021,
  engagementRankingsDubai,
  currentlyImprisonedDissidents,
  exiledDissidents,
  princessLatifaCase,
  humanRightsConcerns,
  keyTrendsInsights,
  dataTablesIndex,
  richestUaeInfluencers,
  allInfluencers,
} from '@/lib/data/entity/influencers-data'
import type { InfluencerProfile } from '@/lib/data/entity/influencers-data'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function InfluencersPage() {
  // ---- Summary metrics ----
  const totalInfluencerCount = allInfluencers.length
  const totalUaeUsers = 9.84
  const avgEngagement = Math.round(
    engagementByCategory.reduce((acc, c) => acc + c.engagementRate, 0) / engagementByCategory.length
  )
  const licensedAgencies = influencerAgencies.filter(a => a.credibility === 'High').length

  // ---- Tier distribution ----
  const tierCounts = allInfluencers.reduce((acc, inf) => {
    const t = inf.tier
    acc[t] = (acc[t] || 0) + 1
    return acc
  }, {} as Record<number, number>)

  const tierData = Object.entries(tierCounts).map(([tier, count]) => ({
    tier: `Tier ${tier}`,
    count: count as number,
  }))

  // ---- Sentiment distribution ----
  const sentimentCounts = allInfluencers.reduce((acc, inf) => {
    const s = inf.sentiment || 'NEUTRAL'
    acc[s] = (acc[s] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const sentimentData = [
    { name: 'Positive', value: sentimentCounts['POSITIVE'] || 0, color: '#22c55e' },
    { name: 'Overwhelmingly Positive', value: sentimentCounts['OVERWHELMINGLY_POSITIVE'] || 0, color: '#10b981' },
    { name: 'Neutral', value: sentimentCounts['NEUTRAL'] || 0, color: '#94a3b8' },
    { name: 'Compliant', value: sentimentCounts['COMPLIANT'] || 0, color: '#6366f1' },
  ].filter(d => d.value > 0)

  // ---- Nationality breakdown ----
  const nationalityCounts = allInfluencers.reduce((acc, inf) => {
    const nat = inf.nationality || 'Not specified'
    acc[nat] = (acc[nat] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const nationalityData = Object.entries(nationalityCounts)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .slice(0, 8)
    .map(([name, value]) => ({
      name,
      value: value as number,
      color: name === 'Emirati' ? '#d97706' : name === 'Lebanese' ? '#6366f1' : name === 'Iraqi-American' ? '#22c55e' : '#64748b',
    }))

  // ---- Category distribution ----
  const categoryCounts = allInfluencers.reduce((acc, inf) => {
    const cat = inf.category[0] || 'Other'
    acc[cat] = (acc[cat] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const categoryData = Object.entries(categoryCounts)
    .sort(([, a], [, b]) => (b as number) - (a as number))
    .slice(0, 8)
    .map(([name, value]) => ({
      name,
      value: value as number,
    }))

  // ---- Emirati vs Expat ----
  const emiratiCount = allInfluencers.filter(i => i.nationality === 'Emirati').length
  const expatCount = allInfluencers.filter(i => i.nationality !== 'Emirati' && i.nationality !== 'Not specified').length

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
      case 'COMPLIANT':
        return <Badge variant="default" className="text-xs bg-indigo-500 text-white">Compliant</Badge>
      case 'CENSORED':
        return <Badge variant="destructive" className="text-xs">Censored</Badge>
      default:
        return <Badge variant="secondary" className="text-xs">{sentiment}</Badge>
    }
  }

  const getRelevanceBadge = (relevance: string) => {
    switch (relevance) {
      case 'Critical': return <Badge variant="destructive" className="text-xs">Critical</Badge>
      case 'High': return <Badge variant="warning" className="text-xs">High</Badge>
      case 'Medium-High': return <Badge variant="default" className="text-xs bg-cyan-500 text-white">Medium-High</Badge>
      case 'Medium': return <Badge variant="secondary" className="text-xs">Medium</Badge>
      case 'Low/Suppressed': return <Badge variant="destructive" className="text-xs">Low/Suppressed</Badge>
      default: return <Badge variant="secondary" className="text-xs">{relevance}</Badge>
    }
  }

  const getTierBadge = (tier: number) => {
    const colors = [
      'bg-gradient-gold text-white',
      'bg-gradient-platinum text-white',
      'bg-gradient-denim text-white',
      'bg-platinum-400 text-white',
      'bg-platinum-300 text-platinum-500-700',
    ]
    return (
      <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${colors[tier] || 'bg-platinum-300 text-platinum-500-700'}`}>
        {tier}
      </div>
    )
  }

  const getFollowerDisplay = (inf: InfluencerProfile) => {
    const followers = inf.followers
    if (typeof followers === 'number') {
      if (followers >= 1000000) return `${(followers / 1000000).toFixed(1)}M`
      if (followers >= 1000) return `${(followers / 1000).toFixed(0)}K`
      return followers.toString()
    }
    return followers || 'N/A'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        className="flex items-start justify-between"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.4 }}
      >
        <div>
          <Badge variant="denim" className="mb-2">INFLUENCER REGISTRY</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-navy-500">Influencer Intelligence</h1>
          <p className="mt-2 text-platinum-500-600 dark:text-platinum-500-400">
            UAE influencer landscape — {totalInfluencerCount} entities tracked across {dataTablesIndex.length} categories
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/30 text-navy-500 hover:bg-navy/10">
            <Globe className="h-4 w-4" />
            Export List
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-platinum-500-100 gap-2">
            <Star className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>
      </motion.div>

      {/* Summary Metrics */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <MetricCard
          title="Tracked Influencers"
          value={totalInfluencerCount}
          icon={<Users className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="UAE Social Media Users"
          value={`${totalUaeUsers}M`}
          icon={<Globe className="h-6 w-6" />}
          gradient="cyan"
        />
        <MetricCard
          title="Avg Engagement Rate"
          value={avgEngagement}
          unit="%"
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Licensed Agencies"
          value={licensedAgencies}
          icon={<Shield className="h-6 w-6" />}
          gradient="purple"
        />
      </motion.div>

      <Tabs defaultValue="registry" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="registry">Influencer Registry</TabsTrigger>
          <TabsTrigger value="tiers">Tier Analysis</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="agencies">Agencies</TabsTrigger>
          <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
          <TabsTrigger value="dissidents">Adversarial Voices</TabsTrigger>
          <TabsTrigger value="trends">Key Trends</TabsTrigger>
        </TabsList>

        {/* ── REGISTRY TAB ── */}
        <TabsContent value="registry" className="space-y-6">
          {/* Top 10 Influencers */}
          <GlassPanel
            title="Top 10 UAE Influencers by Follower Count"
            description="Ranked by total reach across platforms"
            badge="2026 Estimates"
          >
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">#</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Name</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Handle</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Platform</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Followers</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Category</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Nationality</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Est. Earnings/Post</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {top10Influencers.map((inf) => (
                  <TableRow key={inf.rank} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                    <TableCell><span className="font-bold text-gold-700">{inf.rank}</span></TableCell>
                    <TableCell><span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</span></TableCell>
                    <TableCell><span className="text-sm text-platinum-500-600 dark:text-platinum-500-400 font-mono">{inf.handle}</span></TableCell>
                    <TableCell><span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{inf.platform}</span></TableCell>
                    <TableCell><span className="text-sm font-bold text-navy-500-900 dark:text-platinum-500-100">{inf.followers}</span></TableCell>
                    <TableCell><Badge variant="outline" className="text-xs">{inf.category}</Badge></TableCell>
                    <TableCell><span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{inf.nationality}</span></TableCell>
                    <TableCell><span className="text-sm text-emerald-600 dark:text-emerald-400">{inf.estimatedEarningsPost || '—'}</span></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GlassPanel>

          {/* Richest UAE Influencers */}
          <GlassPanel
            title="Richest UAE Influencers (2026 Estimates)"
            description="Estimated earnings per sponsored post"
            badge="Commercial Data"
          >
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Rank</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Name</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Followers</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Est. Earnings/Post</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Category</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {richestUaeInfluencers.map((inf) => (
                  <TableRow key={inf.rank} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                    <TableCell><span className="font-bold text-gold-700">{inf.rank}</span></TableCell>
                    <TableCell><span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</span></TableCell>
                    <TableCell><span className="text-sm font-bold text-navy-500-900 dark:text-platinum-500-100">{inf.followers}</span></TableCell>
                    <TableCell><span className="text-sm text-emerald-600 dark:text-emerald-400">{inf.estimatedEarningsPost}</span></TableCell>
                    <TableCell><Badge variant="outline" className="text-xs">{inf.category}</Badge></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GlassPanel>

          {/* Full Registry Table */}
          <GlassPanel
            title="Full Influencer Registry"
            description={`${allInfluencers.length} entities across all tiers and categories`}
            badge="Complete Dataset"
          >
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Name</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Platform</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Followers</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Category</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Tier</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">UAE Relevance</TableHead>
                  <TableHead className="text-platinum-500-700 dark:text-platinum-500-300 font-semibold">Sentiment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allInfluencers.slice(0, 60).map((inf) => (
                  <TableRow key={inf.id} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</span>
                        {inf.handle && <span className="text-xs text-platinum-500-500 dark:text-platinum-500-400 font-mono">{inf.handle}</span>}
                      </div>
                    </TableCell>
                    <TableCell><span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{(inf.platform || []).join(', ')}</span></TableCell>
                    <TableCell><span className="text-sm font-bold text-navy-500-900 dark:text-platinum-500-100">{getFollowerDisplay(inf)}</span></TableCell>
                    <TableCell><Badge variant="outline" className="text-xs">{(inf.category || []).join(', ')}</Badge></TableCell>
                    <TableCell><div className="flex items-center gap-2">{getTierBadge(inf.tier)}</div></TableCell>
                    <TableCell>{getRelevanceBadge(inf.uaeRelevance)}</TableCell>
                    <TableCell>{getSentimentBadge(inf.sentiment)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GlassPanel>
        </TabsContent>

        {/* ── TIER ANALYSIS TAB ── */}
        <TabsContent value="tiers" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Tier Classification Framework */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Tier Classification Framework</CardTitle>
                <CardDescription>Standard definitions for influencer tiers</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-platinum-200/50">
                      <TableHead className="text-platinum-500-700 font-semibold">Tier</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Followers</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Engagement</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Value/Post</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tierFramework.map((t) => (
                      <TableRow key={t.tier} className="border-b border-platinum-100/50">
                        <TableCell><span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{t.tier}</span></TableCell>
                        <TableCell><span className="text-sm text-platinum-500-700">{t.followerRange}</span></TableCell>
                        <TableCell><span className="text-sm text-platinum-500-700">{t.typicalEngagementRate}</span></TableCell>
                        <TableCell><span className="text-sm text-emerald-600 dark:text-emerald-400">{t.commercialValue}</span></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Tier Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Tier Distribution</CardTitle>
                <CardDescription>Number of influencers per tier level</CardDescription>
              </CardHeader>
              <CardContent>
                {tierData.length > 0 ? (
                  <BarChart
                    data={tierData}
                    xAxisKey="tier"
                    bars={[{ dataKey: 'count', name: 'Influencers', color: CHART_COLORS.gold }]}
                    height={280}
                    showGrid={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500-500">No tier data available</div>
                )}
              </CardContent>
            </Card>

            {/* Engagement by Category */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Engagement Rate by Category (Dubai)</CardTitle>
                <CardDescription>Percentage engagement by content category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {engagementByCategory.map((cat) => (
                    <div key={cat.category} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-platinum-500-700 dark:text-platinum-500-300">{cat.category}</span>
                        <span className="text-platinum-500-500">{cat.engagementRate}%</span>
                      </div>
                      <Progress value={cat.engagementRate} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sentiment Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                <CardDescription>Overall sentiment across tracked influencers</CardDescription>
              </CardHeader>
              <CardContent>
                {sentimentData.length > 0 ? (
                  <PieChart
                    data={sentimentData}
                    height={260}
                    showLegend={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500-500">No sentiment data</div>
                )}
              </CardContent>
            </Card>

            {/* Emirati vs Expat Breakdown */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Emirati vs. Expat Influencers</CardTitle>
                <CardDescription>Nationality breakdown of tracked influencers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-platinum-500-700 dark:text-platinum-500-300">Emirati</span>
                    <span className="text-sm font-bold text-gold-700">{emiratiCount}</span>
                  </div>
                  <Progress value={(emiratiCount / allInfluencers.length) * 100} className="h-3" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-platinum-500-700 dark:text-platinum-500-300">Expat (specified)</span>
                    <span className="text-sm font-bold text-indigo-600">{expatCount}</span>
                  </div>
                  <Progress value={(expatCount / allInfluencers.length) * 100} className="h-3" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-platinum-500-700 dark:text-platinum-500-300">Not specified</span>
                    <span className="text-sm font-bold text-platinum-500-500">{allInfluencers.length - emiratiCount - expatCount}</span>
                  </div>
                  <Progress value={((allInfluencers.length - emiratiCount - expatCount) / allInfluencers.length) * 100} className="h-3" />
                </div>
              </CardContent>
            </Card>

            {/* Nationality Breakdown */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Nationality Breakdown</CardTitle>
                <CardDescription>Top nationalities in UAE influencer landscape</CardDescription>
              </CardHeader>
              <CardContent>
                {nationalityData.length > 0 ? (
                  <PieChart
                    data={nationalityData}
                    height={260}
                    showLegend={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500-500">No nationality data</div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ── CATEGORIES TAB ── */}
        <TabsContent value="categories" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Beauty & Cosmetics */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Beauty &amp; Cosmetics Influencers</CardTitle>
                <CardDescription>{beautyCosmeticsInfluencers.length} influencers tracked</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-platinum-200/50">
                      <TableHead className="text-platinum-500-700 font-semibold">Name</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Platform</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Followers</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">UAE Relevance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {beautyCosmeticsInfluencers.slice(0, 8).map((inf) => (
                      <TableRow key={inf.id} className="border-b border-platinum-100/50">
                        <TableCell className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</TableCell>
                        <TableCell className="text-sm text-platinum-500-600">{(inf.platform || []).join(', ')}</TableCell>
                        <TableCell className="font-bold text-navy-500-900 dark:text-platinum-500-100">{getFollowerDisplay(inf)}</TableCell>
                        <TableCell>{getRelevanceBadge(inf.uaeRelevance)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Food & Dining */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Food &amp; Dining Influencers</CardTitle>
                <CardDescription>Restaurant reviewers, food critics, culinary creators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {foodMegaInfluencers.map((inf) => (
                    <div key={inf.id} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                      <div>
                        <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</p>
                        <p className="text-xs text-platinum-500-500">{inf.platform.join(', ')} | {inf.contentFocus?.join(', ')}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gold-700">{getFollowerDisplay(inf)}</p>
                        <p className="text-xs text-emerald-600">+ {inf.notableClients?.join(', ')}</p>
                      </div>
                    </div>
                  ))}
                  {foodMicroInfluencers.map((inf) => (
                    <div key={inf.id} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                      <div>
                        <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</p>
                        <p className="text-xs text-platinum-500-500">{inf.notes?.join(' | ')}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">Micro</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Travel & Tourism */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Travel &amp; Tourism Influencers</CardTitle>
                <CardDescription>{travelTourismInfluencers.length} influencers tracked</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {travelTourismInfluencers.slice(0, 6).map((inf) => (
                    <div key={inf.id} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                      <div>
                        <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</p>
                        <p className="text-xs text-platinum-500-500">{inf.notes?.join(' | ')}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs">{(inf.platform || []).join(', ')}</Badge>
                        {inf.followersExact && <p className="text-xs font-bold text-gold-700 mt-1">{getFollowerDisplay(inf)}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Financial Influencers */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Financial Influencers</CardTitle>
                <CardDescription>Licensed financial content creators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {financialInfluencers.map((inf) => (
                    <div key={inf.id} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                      <div>
                        <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</p>
                        <p className="text-xs text-platinum-500-500">{inf.handle} | {inf.notes?.join(' | ')}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gold-700">{getFollowerDisplay(inf)}</p>
                        <Badge variant="success" className="text-xs mt-1">Licensed</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* YouTube Top Creators */}
            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Top UAE YouTube Creators</CardTitle>
                <CardDescription>{youtubeTopUaeCreators.length} creators tracked</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-platinum-200/50">
                      <TableHead className="text-platinum-500-700 font-semibold">Name</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Platform</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Category</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Notes</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">UAE Relevance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {youtubeTopUaeCreators.map((inf) => (
                      <TableRow key={inf.id} className="border-b border-platinum-100/50">
                        <TableCell className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{inf.name}</TableCell>
                        <TableCell className="text-sm text-platinum-500-600">{(inf.platform || []).join(', ')}</TableCell>
                        <TableCell><Badge variant="outline" className="text-xs">{(inf.category || []).join(', ')}</Badge></TableCell>
                        <TableCell className="text-sm text-platinum-500-500">{inf.notes?.join(', ')}</TableCell>
                        <TableCell>{getRelevanceBadge(inf.uaeRelevance)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Category Distribution Chart */}
            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Category Distribution</CardTitle>
                <CardDescription>Breakdown of tracked influencers by primary content category</CardDescription>
              </CardHeader>
              <CardContent>
                {categoryData.length > 0 ? (
                  <BarChart
                    data={categoryData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'value', name: 'Count', color: CHART_COLORS.indigo }]}
                    height={300}
                    showGrid={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500-500">No category data</div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ── AGENCIES TAB ── */}
        <TabsContent value="agencies" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Agency Overview */}
            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Influencer Marketing Agencies</CardTitle>
                <CardDescription>{influencerAgencies.length} agencies tracked | 300+ agencies operating in UAE</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-platinum-200/50">
                      <TableHead className="text-platinum-500-700 font-semibold">Agency</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Location</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Network Size</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Brands Served</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Credibility</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Specialization</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {influencerAgencies.map((agency) => (
                      <TableRow key={agency.id} className="border-b border-platinum-100/50">
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{agency.name}</span>
                            {agency.handle && <span className="text-xs text-platinum-500-500 font-mono">{agency.handle}</span>}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-platinum-500-700">{agency.location}</TableCell>
                        <TableCell className="text-sm font-bold text-navy-500-900 dark:text-platinum-500-100">{agency.influencersInNetwork || '—'}</TableCell>
                        <TableCell className="text-sm text-platinum-500-700">{agency.brandsServed || '—'}</TableCell>
                        <TableCell>
                          <Badge
                            variant={agency.credibility === 'High' ? 'success' : agency.credibility === 'Medium' ? 'secondary' : 'default'}
                            className="text-xs"
                          >
                            {agency.credibility}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-platinum-500-700">{agency.specialization || agency.methodology || '—'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Agency Comparison */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Agency Comparison</CardTitle>
                <CardDescription>Key metrics comparison across top agencies</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-platinum-200/50">
                      <TableHead className="text-platinum-500-700 font-semibold">Agency</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Experience</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Network</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Specialization</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {agencyComparison.map((a) => (
                      <TableRow key={a.agency} className="border-b border-platinum-100/50">
                        <TableCell className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{a.agency}</TableCell>
                        <TableCell className="text-sm text-platinum-500-700">{a.yearsExperience}</TableCell>
                        <TableCell className="text-sm font-bold text-navy-500-900 dark:text-platinum-500-100">{a.networkSize}</TableCell>
                        <TableCell className="text-sm text-platinum-500-700">{a.specialization}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Industry Statistics */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Industry Statistics</CardTitle>
                <CardDescription>Market size and capacity data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {industryStatistics.map((stat) => (
                    <div key={stat.metric} className="flex items-center justify-between p-3 glass-subtle rounded-lg">
                      <span className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{stat.metric}</span>
                      <span className="text-sm font-bold text-gold-700">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ── REGULATORY TAB ── */}
        <TabsContent value="regulatory" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* UAE Media Law Overview */}
            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <Badge variant="denim" className="w-fit mb-2">Federal Law No. 55 of 2023</Badge>
                <CardTitle className="text-lg">UAE Media Law — Regulatory Framework</CardTitle>
                <CardDescription>Effective 2025 | Enforced by UAE Media Council</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="p-4 glass-subtle rounded-xl">
                    <p className="text-xs text-platinum-500-500 mb-1">Law Number</p>
                    <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{uaeMediaLaw.lawNumber}</p>
                  </div>
                  <div className="p-4 glass-subtle rounded-xl">
                    <p className="text-xs text-platinum-500-500 mb-1">Effective Date</p>
                    <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{uaeMediaLaw.effectiveDate}</p>
                  </div>
                  <div className="p-4 glass-subtle rounded-xl">
                    <p className="text-xs text-platinum-500-500 mb-1">Permit Deadline</p>
                    <p className="font-semibold text-amber-600 dark:text-amber-400">{uaeMediaLaw.advertiserPermitDeadline}</p>
                  </div>
                  <div className="p-4 glass-subtle rounded-xl">
                    <p className="text-xs text-platinum-500-500 mb-1">Permit Cost</p>
                    <p className="font-semibold text-emerald-600 dark:text-emerald-400">{uaeMediaLaw.permitCost}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Eligibility Requirements */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Eligibility Requirements</CardTitle>
                <CardDescription>Who can obtain a content creator licence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eligibilityRequirements.map((req) => (
                    <div key={req.requirement} className="flex items-start gap-3 p-3 glass-subtle rounded-lg">
                      <UserCheck className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{req.requirement}</p>
                        <p className="text-sm text-platinum-500-600 dark:text-platinum-500-400">{req.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Compliance Requirements */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Compliance Requirements</CardTitle>
                <CardDescription>Mandatory obligations for licensed creators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceRequirements.map((req) => (
                    <div key={req.requirement} className="flex items-start gap-3 p-3 glass-subtle rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{req.requirement}</p>
                        <Badge
                          variant={req.status === 'Mandatory' || req.status === 'Enforced' || req.status === 'Required' ? 'destructive' : 'secondary'}
                          className="text-xs mt-1"
                        >
                          {req.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fine Structure */}
            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">UAE Media Law — Fine Structure</CardTitle>
                <CardDescription>Penalties for violations under Federal Law No. 55 of 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-platinum-200/50">
                      <TableHead className="text-platinum-500-700 font-semibold">Violation</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Fine (AED)</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Category</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {regulatoryFines.map((fine) => (
                      <TableRow key={fine.violation} className="border-b border-platinum-100/50">
                        <TableCell className="text-sm text-platinum-500-700 dark:text-platinum-500-300">{fine.violation}</TableCell>
                        <TableCell>
                          <Badge
                            variant={fine.category === 'Critical' ? 'destructive' : 'default'}
                            className={`text-xs font-bold ${
                              fine.category === 'Critical' ? 'bg-red-500 text-white' :
                              fine.category === 'Serious' ? 'bg-amber-500 text-white' :
                              fine.category === 'Moderate' ? 'bg-navy-500 text-white' :
                              'bg-platinum-500 text-white'
                            }`}
                          >
                            {fine.fineAED}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-xs">{fine.category}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Regulatory Timeline */}
            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Regulatory Timeline</CardTitle>
                <CardDescription>Key dates in UAE influencer regulation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regulatoryTimeline.map((event, i) => (
                    <div key={event.date} className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                          <span className="text-sm font-bold text-white">{i + 1}</span>
                        </div>
                        {i < regulatoryTimeline.length - 1 && (
                          <div className="w-0.5 h-8 bg-platinum-300 dark:bg-platinum-700" />
                        )}
                      </div>
                      <div className="flex-1 p-3 glass-subtle rounded-lg">
                        <p className="text-xs text-platinum-500-500">{event.date}</p>
                        <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{event.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ── ADVERSARIAL VOICES TAB ── */}
        <TabsContent value="dissidents" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Currently Imprisoned */}
            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <Badge variant="destructive" className="w-fit mb-2">Severely Restricted</Badge>
                <CardTitle className="text-lg">Currently Imprisoned Dissidents</CardTitle>
                <CardDescription>Individuals jailed for political expression in UAE</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-platinum-200/50">
                      <TableHead className="text-platinum-500-700 font-semibold">Name</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Status</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Sentence</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Charges/Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentlyImprisonedDissidents.map((d) => (
                      <TableRow key={d.id} className="border-b border-platinum-100/50">
                        <TableCell className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{d.name}</TableCell>
                        <TableCell>
                          <Badge variant="destructive" className="text-xs">
                            {d.status === 'Died' ? 'Deceased' : d.status}
                          </Badge>
                          {d.deathDate && <p className="text-xs text-platinum-500-500 mt-1">Died: {d.deathDate}</p>}
                        </TableCell>
                        <TableCell className="text-sm text-platinum-500-700">{d.sentence || '—'}</TableCell>
                        <TableCell className="text-sm text-platinum-500-600">{d.notes?.join(' | ')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Exiled Dissidents */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Exiled Dissidents</CardTitle>
                <CardDescription>Individuals forced into exile for political expression</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exiledDissidents.map((d) => (
                    <div key={d.id} className="p-4 border border-red-200/30 dark:border-red-800/30 rounded-xl bg-red-50/30 dark:bg-red-950/20">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{d.name}</p>
                          <p className="text-sm text-platinum-500-500">{d.location || d.status}</p>
                        </div>
                        <Badge variant="destructive" className="text-xs shrink-0">Exiled</Badge>
                      </div>
                      <p className="text-sm text-platinum-500-600 dark:text-platinum-500-400 mt-2">{d.notes?.join(' | ')}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* UAE Five */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">UAE Five (2011)</CardTitle>
                <CardDescription>Initial crackdown on online activists</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-platinum-200/50">
                      <TableHead className="text-platinum-500-700 font-semibold">Name</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Background</TableHead>
                      <TableHead className="text-platinum-500-700 font-semibold">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: 'Nasser bin Ghaith', background: 'Economist, lecturer at Paris-Sorbonne Abu Dhabi', status: 'Initially sentenced 2-3 years, pardoned Nov 2011' },
                      { name: 'Ahmed Mansoor', background: 'Engineer, blogger, human rights activist', status: 'Pardoned Nov 2011, later re-imprisoned' },
                      { name: 'Fahad Salim Dalk', background: 'Online activist', status: 'Initially sentenced, pardoned Nov 2011' },
                      { name: 'Hassan Ali al-Khamis', background: 'Online activist', status: 'Initially sentenced, pardoned Nov 2011' },
                      { name: 'Ahmed Abdul Khaleq', background: 'Bedoon online activist', status: 'Initially sentenced, pardoned Nov 2011' },
                    ].map((m) => (
                      <TableRow key={m.name} className="border-b border-platinum-100/50">
                        <TableCell className="font-semibold text-navy-500-900 dark:text-platinum-500-100">{m.name}</TableCell>
                        <TableCell className="text-sm text-platinum-500-600">{m.background}</TableCell>
                        <TableCell className="text-sm text-platinum-500-500">{m.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Princess Latifa Case */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Princess Latifa Case</CardTitle>
                <CardDescription>Daughter of Dubai ruler — house arrest</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {princessLatifaCase.map((item) => (
                    <div key={item.field} className="flex items-start gap-3">
                      <span className="text-sm font-semibold text-platinum-500-700 dark:text-platinum-500-300 w-32 shrink-0">{item.field}</span>
                      <span className="text-sm text-platinum-500-600 dark:text-platinum-500-400">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Human Rights Concerns */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Human Rights Concerns</CardTitle>
                <CardDescription>Documented violations and restrictions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {humanRightsConcerns.map((h) => (
                    <div key={h.concern} className="flex items-start gap-3 p-3 border border-red-200/20 dark:border-red-800/20 rounded-lg bg-red-50/20 dark:bg-red-950/10">
                      <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-navy-500-900 dark:text-platinum-500-100">{h.concern}</p>
                        <p className="text-xs text-platinum-500-600 dark:text-platinum-500-400">{h.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* UAE94 Mass Trial */}
            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">UAE94 Mass Trial (2012)</CardTitle>
                <CardDescription>Mass trial of activists petitioning for democratic reform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { field: 'Defendants', value: 94 },
                    { field: 'Academics/lawyers/students arrested', value: 133 },
                    { field: 'Purpose', value: 'Petitioning for democratic reform' },
                    { field: 'Sentenced to heavy prison terms', value: 69 },
                  ].map((item) => (
                    <div key={item.field} className="p-4 glass-subtle rounded-xl text-center">
                      <p className="text-2xl font-extrabold text-navy-500-900 dark:text-platinum-500-100">
                        {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
                      </p>
                      <p className="text-xs text-platinum-500-500 mt-1">{item.field}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ── KEY TRENDS TAB ── */}
        <TabsContent value="trends" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {keyTrendsInsights.map((trend, i) => (
              <Card key={trend.trend} className="glass-card">
                <CardHeader className="pb-3">
                  <Badge variant="outline" className="w-fit mb-2 text-xs">{i + 1}</Badge>
                  <CardTitle className="text-base">{trend.trend}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-platinum-500-500 uppercase tracking-wide">Observation</p>
                    <p className="text-sm text-platinum-500-700 dark:text-platinum-500-300 mt-1">{trend.observation}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-platinum-500-500 uppercase tracking-wide">Implication</p>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">{trend.implication}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* UAE Social Media Statistics */}
          <Card className="glass-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">UAE Social Media Statistics</CardTitle>
              <CardDescription>Population-level social media metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {uaeSocialMediaStats.map((stat) => (
                  <div key={stat.metric} className="p-4 glass-subtle rounded-xl">
                    <p className="text-xs text-platinum-500-500 mb-1">{stat.metric}</p>
                    <p className="text-2xl font-extrabold text-navy-500-900 dark:text-platinum-500-100">{stat.value}</p>
                    <Badge variant="success" className="text-xs mt-2">Confidence: {stat.confidence}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Influencer Following Behavior */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Influencer Following Behavior</CardTitle>
              <CardDescription>How UAE residents engage with influencer content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {influencerFollowingMetrics.map((m) => (
                  <div key={m.metric} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-platinum-500-700 dark:text-platinum-500-300">{m.metric}</span>
                      <span className="text-platinum-500-500 text-xs">{m.source}</span>
                    </div>
                    <Progress value={parseFloat(m.value)} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Engagement Rankings Dubai */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Engagement Rate Rankings — Dubai</CardTitle>
              <CardDescription>Content categories ranked by engagement rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {engagementRankingsDubai.map((r) => (
                  <div key={r.category} className="flex items-center gap-3">
                    <span className="text-sm font-bold text-platinum-500-400 w-4">{r.rank}</span>
                    <span className="text-sm font-medium text-platinum-500-700 dark:text-platinum-500-300 flex-1">{r.category}</span>
                    <div className="w-32">
                      <Progress value={r.engagementRate} className="h-2" />
                    </div>
                    <span className="text-sm font-bold text-emerald-600 w-12 text-right">{r.engagementRate}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Tables Index */}
          <Card className="glass-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Data Tables Index</CardTitle>
              <CardDescription>33 comprehensive data tables covering all influencer categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {dataTablesIndex.map((t) => (
                  <div key={t.tableNumber} className="flex items-center gap-3 p-3 glass-subtle rounded-lg">
                    <span className="text-xs font-bold text-gold-700 bg-gold-50 dark:bg-gold-950/30 px-2 py-1 rounded">#{t.tableNumber}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-navy-500-900 dark:text-platinum-500-100 truncate">{t.title}</p>
                      <p className="text-xs text-platinum-500-500">{t.rows} rows</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
