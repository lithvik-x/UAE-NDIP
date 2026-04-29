'use client'

/**
 * Media Organizations Page - UAE National Digital Intelligence Platform
 * Comprehensive dashboard for UAE-based, international, and regional media organizations
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassCard, GlassPanel } from '@/components/dashboard/glass-card'
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
  LineChart,
  AreaChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Newspaper,
  Tv,
  Radio,
  Globe,
  Building,
  TrendingUp,
  Users,
  AlertCircle,
  CheckCircle2,
  Crown,
  Star,
  Building2,
  MapPin,
  Calendar,
  Award,
  Ban,
  Shield,
  DollarSign,
  Activity,
} from 'lucide-react'
import {
  mediaOrganizationsData,
  printMedia,
  broadcastTV,
  newsAgencies,
  internationalMedia,
  regionalMedia,
  digitalNativeMedia,
  radioStations,
  ownershipStructures,
  sentimentMatrix,
  mediaBans,
  controversies,
  newspapersByLaunch,
  circulationData,
  tvChannelsByHQ,
  mediaStatistics,
  coverageThemes,
  newspaperLeadership,
  broadcastLeadership,
  sourceUrls,
  criticalImportance,
  highImportance,
  mediumImportance,
  dashboardMetrics,
} from '@/lib/data/entity/media-organizations-data'

// Animation variants for staggered mount
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

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
      return <Badge variant="destructive" className="text-xs gap-1"><Crown className="h-3 w-3" /> Critical</Badge>
    case 'HIGH':
      return <Badge variant="default" className="text-xs bg-navy-500 text-white gap-1"><Star className="h-3 w-3" /> High</Badge>
    case 'MEDIUM':
      return <Badge variant="secondary" className="text-xs gap-1"><Activity className="h-3 w-3" /> Medium</Badge>
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

export default function MediaOrganizationsPage() {
  const data = mediaOrganizationsData

  // Calculate summary metrics
  const totalOrgs = dashboardMetrics.totalOrganizations
  const printCount = printMedia.length
  const broadcastCount = broadcastTV.length
  const digitalCount = digitalNativeMedia.length

  // Sentiment distribution
  const sentimentCounts = data.allMediaOrganizations.reduce((acc, org) => {
    acc[org.sentiment] = (acc[org.sentiment] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const sentimentChartData = [
    { name: 'Pro-Government', value: sentimentCounts['PRO_GOVERNMENT'] || 0, color: CHART_COLORS.emerald },
    { name: 'Pro-Saudi', value: sentimentCounts['PRO_SAUDI'] || 0, color: CHART_COLORS.gold },
    { name: 'Pro-Qatar', value: sentimentCounts['PRO_QATAR'] || 0, color: CHART_COLORS.purple },
    { name: 'Critical', value: sentimentCounts['CRITICAL'] || 0, color: CHART_COLORS.rose },
    { name: 'Neutral', value: sentimentCounts['NEUTRAL'] || 0, color: CHART_COLORS.platinum },
  ].filter(d => d.value > 0)

  // Media type distribution
  const typeCounts = data.allMediaOrganizations.reduce((acc, org) => {
    acc[org.type] = (acc[org.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const typeChartData = [
    { name: 'Print', value: typeCounts['PRINT'] || 0, color: CHART_COLORS.navy },
    { name: 'Broadcast TV', value: typeCounts['BROADCAST_TV'] || 0, color: CHART_COLORS.gold },
    { name: 'Radio', value: typeCounts['BROADCAST_RADIO'] || 0, color: CHART_COLORS.info },
    { name: 'News Agency', value: typeCounts['NEWS_AGENCY'] || 0, color: CHART_COLORS.emerald },
    { name: 'International', value: typeCounts['INTERNATIONAL'] || 0, color: CHART_COLORS.denim },
    { name: 'Regional', value: typeCounts['REGIONAL'] || 0, color: CHART_COLORS.rose },
    { name: 'Digital Native', value: typeCounts['DIGITAL_NATIVE'] || 0, color: CHART_COLORS.purple },
  ].filter(d => d.value > 0)

  // Relevance distribution
  const relevanceCounts = data.allMediaOrganizations.reduce((acc, org) => {
    acc[org.uaeRelevance] = (acc[org.uaeRelevance] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const relevanceChartData = [
    { name: 'Critical', value: relevanceCounts['CRITICAL'] || 0, color: CHART_COLORS.rose },
    { name: 'High', value: relevanceCounts['HIGH'] || 0, color: CHART_COLORS.gold },
    { name: 'Medium', value: relevanceCounts['MEDIUM'] || 0, color: CHART_COLORS.denim },
  ].filter(d => d.value > 0)

  // Ownership distribution
  const ownershipChartData = ownershipStructures.map((os, i) => ({
    name: os.category.replace('_', ' '),
    value: os.organizations.length,
    color: Object.values(CHART_COLORS)[i % Object.values(CHART_COLORS).length],
  }))

  // Circulation chart data
  const circulationChartData = circulationData.map(c => ({
    name: c.newspaper.length > 12 ? c.newspaper.substring(0, 12) + '...' : c.newspaper,
    circulation: c.circulation,
    year: c.year
  }))

  // Coverage themes data
  const coverageChartData = coverageThemes.map(ct => ({
    theme: ct.theme.length > 20 ? ct.theme.substring(0, 20) + '...' : ct.theme,
    organizations: ct.organizations.length
  }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="denim" className="mb-2">MEDIA ORGANIZATIONS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Entity Intelligence</h1>
          <p className="mt-2 text-platinum-600 dark:text-platinum-400">
            UAE-based, international, and regional media organizations — {totalOrgs} entities tracked
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/30 text-navy hover:bg-navy/10">
            <Globe className="h-4 w-4" />
            Export List
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-platinum-100 gap-2">
            <Star className="h-4 w-4" />
            Refresh Data
          </Button>
        </div>
      </motion.div>

      {/* Summary Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Total Organizations"
          value={totalOrgs}
          icon={<Building2 className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Print Media"
          value={printCount}
          icon={<Newspaper className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Broadcast TV"
          value={broadcastCount}
          icon={<Tv className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Digital Native"
          value={digitalCount}
          icon={<Star className="h-6 w-6" />}
          gradient="purple"
        />
      </motion.div>

      {/* Secondary Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Queries Executed"
          value={dashboardMetrics.queriesExecuted}
          icon={<Activity className="h-6 w-6" />}
          gradient="cyan"
        />
        <MetricCard
          title="Pages Fetched"
          value={dashboardMetrics.pagesFetched}
          icon={<Globe className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Wikipedia Sources"
          value={dashboardMetrics.dataSourcesWikipedia}
          icon={<Award className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="News Sources"
          value={dashboardMetrics.dataSourcesNewsSites}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="orange"
        />
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="table">Organization Table</TabsTrigger>
          <TabsTrigger value="ownership">Ownership</TabsTrigger>
          <TabsTrigger value="circulation">Circulation & Reach</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="bans">Bans & Controversies</TabsTrigger>
          <TabsTrigger value="personnel">Key Personnel</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Media Type Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Media Type Distribution</CardTitle>
                <CardDescription>Breakdown of tracked organizations by type</CardDescription>
              </CardHeader>
              <CardContent>
                {typeChartData.length > 0 ? (
                  <PieChart
                    data={typeChartData}
                    height={280}
                    showLegend={true}
                    donut={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
                )}
              </CardContent>
            </Card>

            {/* Relevance Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">UAE Relevance Distribution</CardTitle>
                <CardDescription>Organizations by strategic importance to UAE</CardDescription>
              </CardHeader>
              <CardContent>
                {relevanceChartData.length > 0 ? (
                  <PieChart
                    data={relevanceChartData}
                    height={280}
                    showLegend={true}
                    donut={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Editorial Stance Distribution</CardTitle>
                <CardDescription>Sentiment breakdown across all media organizations</CardDescription>
              </CardHeader>
              <CardContent>
                {sentimentChartData.length > 0 ? (
                  <PieChart
                    data={sentimentChartData}
                    height={280}
                    showLegend={true}
                    donut={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
                )}
              </CardContent>
            </Card>

            {/* Coverage Themes */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Coverage Themes (April 2026)</CardTitle>
                <CardDescription>Key topics being covered by regional media</CardDescription>
              </CardHeader>
              <CardContent>
                {coverageChartData.length > 0 ? (
                  <BarChart
                    data={coverageChartData}
                    xAxisKey="theme"
                    bars={[{ dataKey: 'organizations', name: 'Orgs Covering', color: CHART_COLORS.navy }]}
                    height={280}
                    showGrid={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Critical Importance Organizations */}
          <GlassPanel title="Critical Importance Organizations" description="Organizations with highest strategic relevance to UAE">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {criticalImportance.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-gold text-white">
                    <Crown className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 dark:text-platinum-100">{item.organization}</p>
                    <p className="text-xs text-platinum-600 dark:text-platinum-400 mt-1">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Organization Table Tab */}
        <TabsContent value="table" className="space-y-6">
          <GlassPanel title="Media Organizations Registry" description="Complete list of tracked media organizations">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Name</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Type</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Language</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">HQ</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Sentiment</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Relevance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.allMediaOrganizations.map((org) => (
                  <TableRow key={org.id} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-semibold text-navy-900 dark:text-platinum-100">{org.name}</span>
                        {org.nameAr && (
                          <span className="text-xs text-platinum-500 dark:text-platinum-400 font-arabic">{org.nameAr}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTypeIcon(org.type)}
                        <span className="text-sm text-platinum-700 dark:text-platinum-300">{org.type.replace('_', ' ')}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-platinum-700 dark:text-platinum-300">{org.language}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm text-platinum-700 dark:text-platinum-300">{org.headquarters}</span>
                        <span className="text-xs text-platinum-500">{org.country}</span>
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
        </TabsContent>

        {/* Ownership Tab */}
        <TabsContent value="ownership" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Ownership Type Distribution */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Ownership Model Distribution</CardTitle>
                <CardDescription>Breakdown by ownership structure</CardDescription>
              </CardHeader>
              <CardContent>
                {ownershipChartData.length > 0 ? (
                  <PieChart
                    data={ownershipChartData}
                    height={300}
                    showLegend={true}
                    donut={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
                )}
              </CardContent>
            </Card>

            {/* Ownership Details */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Ownership Structures</CardTitle>
                <CardDescription>Detailed breakdown by ownership category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {ownershipStructures.map((os, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant={os.category === 'STATE_OWNED' ? 'default' : os.category === 'FAMILY_OWNED' ? 'secondary' : 'outline'} className="text-xs">
                          {os.category.replace('_', ' ')}
                        </Badge>
                        <span className="text-sm text-platinum-500">{os.organizations.length} organizations</span>
                      </div>
                      <div className="pl-4 space-y-1">
                        {os.organizations.slice(0, 5).map((org, j) => (
                          <p key={j} className="text-xs text-platinum-700 dark:text-platinum-300">{org}</p>
                        ))}
                        {os.organizations.length > 5 && (
                          <p className="text-xs text-platinum-500">+{os.organizations.length - 5} more</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Beneficial Owners */}
          <GlassPanel title="Ultimate Beneficial Owners" description="Key individuals and entities with media holdings">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 rounded-lg bg-gradient-gold/10 border border-gold-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="h-5 w-5 text-gold-600" />
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">Sheikh Mansour</span>
                </div>
                <p className="text-xs text-platinum-600 dark:text-platinum-400">UAE Vice President</p>
                <p className="text-xs text-platinum-500 mt-1">The National, Sky News Arabia (via IMI)</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-navy/10 border border-navy-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-navy-600" />
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">Abu Dhabi Government</span>
                </div>
                <p className="text-xs text-platinum-600 dark:text-platinum-400">State Media</p>
                <p className="text-xs text-platinum-500 mt-1">Al Ittihad, WAM</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-emerald/10 border border-emerald-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-emerald-600" />
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">Dubai Government</span>
                </div>
                <p className="text-xs text-platinum-600 dark:text-platinum-400">State Media</p>
                <p className="text-xs text-platinum-500 mt-1">Al Bayan, Emarat Al Youm</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-gold/10 border border-gold-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="h-5 w-5 text-gold-600" />
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">Saudi PIF</span>
                </div>
                <p className="text-xs text-platinum-600 dark:text-platinum-400">Public Investment Fund</p>
                <p className="text-xs text-platinum-500 mt-1">Al Arabiya (54%), Al Hadath</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-platinum/10 border border-platinum-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-platinum-600" />
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">Galadari Family</span>
                </div>
                <p className="text-xs text-platinum-600 dark:text-platinum-400">Family Ownership</p>
                <p className="text-xs text-platinum-500 mt-1">Khaleej Times</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-platinum/10 border border-platinum-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-platinum-600" />
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">Taryam Family</span>
                </div>
                <p className="text-xs text-platinum-600 dark:text-platinum-400">Family Ownership</p>
                <p className="text-xs text-platinum-500 mt-1">Al Khaleej, Gulf Today</p>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Circulation & Reach Tab */}
        <TabsContent value="circulation" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Circulation Data */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Circulation Data (Latest Available)</CardTitle>
                <CardDescription>Historical circulation figures for UAE newspapers</CardDescription>
              </CardHeader>
              <CardContent>
                {circulationChartData.length > 0 ? (
                  <BarChart
                    data={circulationChartData}
                    xAxisKey="name"
                    bars={[{ dataKey: 'circulation', name: 'Circulation', color: CHART_COLORS.gold }]}
                    height={300}
                    showGrid={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
                )}
              </CardContent>
            </Card>

            {/* Digital Reach */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Digital Reach Comparison</CardTitle>
                <CardDescription>Monthly digital audience metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-navy/5 border border-navy-200/30">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-navy text-white">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900 dark:text-platinum-100">Khaleej Times</p>
                        <p className="text-xs text-platinum-500">Highest digital reach</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-navy-900 dark:text-platinum-100">37.2M</p>
                      <p className="text-xs text-platinum-500">monthly consumers</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-platinum-700 dark:text-platinum-300">Website Users (monthly)</span>
                      <span className="font-semibold text-navy-900 dark:text-platinum-100">6.5M</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-platinum-700 dark:text-platinum-300">Instagram Followers</span>
                      <span className="font-semibold text-navy-900 dark:text-platinum-100">3.2M</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-platinum-700 dark:text-platinum-300">Facebook Users</span>
                      <span className="font-semibold text-navy-900 dark:text-platinum-100">21.7M</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-platinum-700 dark:text-platinum-300">X (Twitter) Followers</span>
                      <span className="font-semibold text-navy-900 dark:text-platinum-100">1M+</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* TV Channels by HQ */}
          <GlassPanel title="TV Channels by Headquarters" description="Broadcast television presence by location">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Channel</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">HQ Location</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Owner</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Launch Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tvChannelsByHQ.map((channel, i) => (
                  <TableRow key={i} className="border-b border-platinum-100/50 dark:border-platinum-800/50">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Tv className="h-4 w-4 text-navy-600" />
                        <span className="font-semibold text-navy-900 dark:text-platinum-100">{channel.channel}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-platinum-700 dark:text-platinum-300">{channel.hqLocation}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-platinum-700 dark:text-platinum-300">{channel.owner}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-platinum-500">{channel.launchDate || '—'}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GlassPanel>

          {/* Comprehensive Statistics */}
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Al Jazeera Scale</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-platinum-600">Employees</span>
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">3,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-platinum-600">Global Audience</span>
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">430M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-platinum-600">Bureaus</span>
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">70</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-platinum-600">Countries</span>
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">150+</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Sky News Arabia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-platinum-600">Households</span>
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">50M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-platinum-600">Radio Frequency</span>
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">90.3 FM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Financial Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-platinum-600">Al Jazeera Funding</span>
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">$137M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-platinum-600">Al Jazeera English</span>
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">$1B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-platinum-600">Emarat Al Youm Fine</span>
                  <span className="font-semibold text-navy-900 dark:text-platinum-100">$5,445</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Sentiment Matrix */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Sentiment Matrix</CardTitle>
                <CardDescription>Editorial stance by organization</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-platinum-200/50">
                      <TableHead className="text-platinum-700 font-semibold">Organization</TableHead>
                      <TableHead className="text-platinum-700 font-semibold">Sentiment</TableHead>
                      <TableHead className="text-platinum-700 font-semibold">UAE Position</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sentimentMatrix.slice(0, 12).map((entry, i) => (
                      <TableRow key={i} className="border-b border-platinum-100/50">
                        <TableCell className="font-medium text-navy-900 dark:text-platinum-100">{entry.organization}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              entry.sentiment === 'Positive' ? 'success' :
                              entry.sentiment === 'Negative' ? 'destructive' :
                              entry.sentiment === 'Mixed' ? 'warning' : 'secondary'
                            }
                            className="text-xs"
                          >
                            {entry.sentiment}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-platinum-600">{entry.uaePosition}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Sentiment Pie Chart */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-rajdhani font-semibold">Sentiment Distribution</CardTitle>
                <CardDescription>Overall sentiment breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                {sentimentChartData.length > 0 ? (
                  <PieChart
                    data={sentimentChartData}
                    height={300}
                    showLegend={true}
                    donut={true}
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 text-platinum-500">No data available</div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Bans & Controversies Tab */}
        <TabsContent value="bans" className="space-y-6">
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
                    <AlertCircle className="h-4 w-4 text-gold-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-navy-900 dark:text-platinum-100">{c.organization}</p>
                      <p className="text-xs text-platinum-600 dark:text-platinum-400 mt-1">{c.year}: {c.incident}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </TabsContent>

        {/* Key Personnel Tab */}
        <TabsContent value="personnel" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Newspaper Leadership */}
            <GlassPanel title="Newspaper Leadership" description="Key editorial positions">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-platinum-200/50">
                    <TableHead className="text-platinum-700 font-semibold">Newspaper</TableHead>
                    <TableHead className="text-platinum-700 font-semibold">Position</TableHead>
                    <TableHead className="text-platinum-700 font-semibold">Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {newspaperLeadership.map((leader, i) => (
                    <TableRow key={i} className="border-b border-platinum-100/50">
                      <TableCell className="font-medium text-navy-900 dark:text-platinum-100">{leader.newspaper}</TableCell>
                      <TableCell className="text-sm text-platinum-600">{leader.position}</TableCell>
                      <TableCell className="text-sm text-platinum-700 dark:text-platinum-300">{leader.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>

            {/* Broadcast Leadership */}
            <GlassPanel title="Broadcast Leadership" description="TV channel executives">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-platinum-200/50">
                    <TableHead className="text-platinum-700 font-semibold">Channel</TableHead>
                    <TableHead className="text-platinum-700 font-semibold">Position</TableHead>
                    <TableHead className="text-platinum-700 font-semibold">Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {broadcastLeadership.map((leader, i) => (
                    <TableRow key={i} className="border-b border-platinum-100/50">
                      <TableCell className="font-medium text-navy-900 dark:text-platinum-100">{leader.channel}</TableCell>
                      <TableCell className="text-sm text-platinum-600">{leader.position}</TableCell>
                      <TableCell className="text-sm text-platinum-700 dark:text-platinum-300">{leader.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </GlassPanel>
          </div>

          {/* WAM International Offices */}
          <GlassPanel title="WAM International Offices" description="Emirates News Agency global presence">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {['Cairo', 'Beirut', 'Washington D.C.', 'Sana\'a', 'Brussels', 'Islamabad'].map((office, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-platinum-50/50 dark:bg-platinum-800/25">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-emerald text-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-navy-900 dark:text-platinum-100">{office}</span>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Research Sources" description="17 web sources used for data collection">
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
            <GlassPanel title="Critical Importance" description="9 organizations">
              <div className="space-y-2">
                {criticalImportance.map((item, i) => (
                  <p key={i} className="text-sm text-platinum-700 dark:text-platinum-300">• {item.organization}</p>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="High Importance" description="5 organizations">
              <div className="space-y-2">
                {highImportance.map((item, i) => (
                  <p key={i} className="text-sm text-platinum-700 dark:text-platinum-300">• {item.organization}</p>
                ))}
              </div>
            </GlassPanel>

            <GlassPanel title="Medium Importance" description="3 organizations">
              <div className="space-y-2">
                {mediumImportance.map((item, i) => (
                  <p key={i} className="text-sm text-platinum-700 dark:text-platinum-300">• {item.organization}</p>
                ))}
              </div>
            </GlassPanel>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
