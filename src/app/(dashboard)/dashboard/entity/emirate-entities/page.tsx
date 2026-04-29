'use client'

/**
 * Emirate Entities Dashboard Page
 *
 * UAE National Digital Intelligence Platform
 * Comprehensive view of Emirate-level Government Entities
 */

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel, GlassCard } from '@/components/dashboard/glass-card'
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
  Building2,
  Landmark,
  Plane,
  Home,
  Building,
  Warehouse,
  Shield,
  Zap,
  Globe,
  ChevronRight,
  Star,
  Activity,
  Users,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Banknote,
  Anchor,
  Crown,
} from 'lucide-react'
import {
  emirateEntitiesData,
  executionMetadata,
  validationData,
  synthesizedAbuDhabiEcosystem,
  synthesizedDubaiEcosystem,
  synthesizedNorthernEmirates,
  entityHierarchy,
  aumRevenueData,
  freeZoneData,
  aviationData,
  policeForceData,
  keyPatterns,
  confidenceSummary,
  type EmirateEntity,
} from '@/lib/data/entity/emirate-entities-data'

// Animation variants for staggered mount
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

// Icon mapping for entity types
const getEntityIcon = (type: EmirateEntity['type']) => {
  switch (type) {
    case 'SOVEREIGN_WEALTH':
      return <Landmark className="h-6 w-6" />
    case 'ENERGY':
      return <Zap className="h-6 w-6" />
    case 'AVIATION':
      return <Plane className="h-6 w-6" />
    case 'REAL_ESTATE':
      return <Home className="h-6 w-6" />
    case 'FINANCIAL':
      return <Banknote className="h-6 w-6" />
    case 'LOGISTICS':
      return <Anchor className="h-6 w-6" />
    case 'FREE_ZONE':
      return <Warehouse className="h-6 w-6" />
    case 'POLICE':
      return <Shield className="h-6 w-6" />
    case 'GOVERNMENT':
      return <Building2 className="h-6 w-6" />
    case 'HOLDING':
      return <Building className="h-6 w-6" />
    case 'MEDIA':
      return <Globe className="h-6 w-6" />
    case 'UTILITY':
      return <Zap className="h-6 w-6" />
    case 'CULTURE':
      return <Crown className="h-6 w-6" />
    default:
      return <Building2 className="h-6 w-6" />
  }
}

const getGradientForType = (type: EmirateEntity['type']): 'gold' | 'denim' | 'emerald' | 'cyan' | 'rose' | 'indigo' | 'purple' => {
  switch (type) {
    case 'SOVEREIGN_WEALTH':
      return 'gold'
    case 'ENERGY':
      return 'cyan'
    case 'AVIATION':
      return 'rose'
    case 'REAL_ESTATE':
      return 'emerald'
    case 'FINANCIAL':
      return 'denim'
    case 'LOGISTICS':
      return 'indigo'
    case 'FREE_ZONE':
      return 'purple'
    case 'POLICE':
      return 'rose'
    case 'GOVERNMENT':
      return 'denim'
    case 'HOLDING':
      return 'emerald'
    case 'MEDIA':
      return 'cyan'
    case 'UTILITY':
      return 'gold'
    case 'CULTURE':
      return 'rose'
    default:
      return 'denim'
  }
}

const getRelevanceBadge = (relevance: EmirateEntity['uaeRelevance']) => {
  switch (relevance) {
    case 'CRITICAL':
      return <Badge variant="destructive" className="text-xs gap-1"><AlertCircle className="h-3 w-3" /> Critical</Badge>
    case 'HIGH':
      return <Badge variant="warning" className="text-xs gap-1"><Star className="h-3 w-3" /> High</Badge>
    case 'MEDIUM':
      return <Badge variant="default" className="text-xs bg-cyan-500 text-white border-cyan-500">Medium</Badge>
    case 'LOW':
      return <Badge variant="secondary" className="text-xs">Low</Badge>
    default:
      return null
  }
}

const getSentimentBadge = (sentiment: EmirateEntity['sentiment']) => {
  switch (sentiment) {
    case 'VERY_POSITIVE':
      return <Badge variant="success" className="text-xs">Very Positive</Badge>
    case 'POSITIVE':
      return <Badge variant="success" className="text-xs">Positive</Badge>
    case 'NEUTRAL':
      return <Badge variant="secondary" className="text-xs">Neutral</Badge>
    case 'MIXED':
      return <Badge variant="warning" className="text-xs">Mixed</Badge>
    case 'NEGATIVE':
      return <Badge variant="destructive" className="text-xs">Negative</Badge>
    default:
      return null
  }
}

export default function EmirateEntitiesPage() {
  const data = emirateEntitiesData

  // Summary metrics
  const totalEntities = data.length
  const criticalCount = data.filter(e => e.uaeRelevance === 'CRITICAL').length
  const highCount = data.filter(e => e.uaeRelevance === 'HIGH').length
  const positiveCount = data.filter(e => e.sentiment === 'POSITIVE' || e.sentiment === 'VERY_POSITIVE').length
  const highConfidenceCount = data.filter(e => e.confidence === 'HIGH').length

  // Sentiment distribution
  const sentimentCounts = useMemo(() => {
    return data.reduce((acc, e) => {
      acc[e.sentiment] = (acc[e.sentiment] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }, [data])

  const sentimentData = [
    { name: 'Very Positive', value: sentimentCounts['VERY_POSITIVE'] || 0, color: '#10b981' },
    { name: 'Positive', value: sentimentCounts['POSITIVE'] || 0, color: '#22c55e' },
    { name: 'Neutral', value: sentimentCounts['NEUTRAL'] || 0, color: '#94a3b8' },
    { name: 'Mixed', value: sentimentCounts['MIXED'] || 0, color: '#f59e0b' },
  ].filter(d => d.value > 0)

  // Relevance distribution
  const relevanceCounts = useMemo(() => {
    return data.reduce((acc, e) => {
      acc[e.uaeRelevance] = (acc[e.uaeRelevance] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }, [data])

  const relevanceData = [
    { name: 'Critical', value: relevanceCounts['CRITICAL'] || 0, color: '#ef4444' },
    { name: 'High', value: relevanceCounts['HIGH'] || 0, color: '#f59e0b' },
    { name: 'Medium', value: relevanceCounts['MEDIUM'] || 0, color: '#3b82f6' },
    { name: 'Low', value: relevanceCounts['LOW'] || 0, color: '#94a3b8' },
  ].filter(d => d.value > 0)

  // Entity type distribution
  const typeCounts = useMemo(() => {
    return data.reduce((acc, e) => {
      acc[e.type] = (acc[e.type] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }, [data])

  const colorArray = Object.values(CHART_COLORS)
  const typeData = Object.entries(typeCounts).map(([type, count], idx) => ({
    name: type.replace(/_/g, ' '),
    value: count,
    color: colorArray[idx % colorArray.length] as string,
  }))

  // Emirate distribution
  const emirateCounts = useMemo(() => {
    return data.reduce((acc, e) => {
      acc[e.emirate] = (acc[e.emirate] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }, [data])

  const emirateData = [
    { name: 'Abu Dhabi', value: emirateCounts['Abu Dhabi'] || 0, color: '#d4af37' },
    { name: 'Dubai', value: emirateCounts['Dubai'] || 0, color: '#1e3a5f' },
    { name: 'Northern Emirates', value: (emirateCounts['Sharjah'] || 0) + (emirateCounts['Ajman'] || 0) + (emirateCounts['RAK'] || 0) + (emirateCounts['UAQ'] || 0) + (emirateCounts['Fujairah'] || 0), color: '#6b7280' },
  ].filter(d => d.value > 0)

  // AUM/Revenue chart data
  const aumRevenueChartData = aumRevenueData.slice(0, 6).map(item => ({
    name: item.entity,
    aum: parseFloat(item.value.replace(/[^0-9.]/g, '')) || 0,
    value: item.value,
  }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-start justify-between"
      >
        <div>
          <Badge variant="default" className="mb-2">EMIRATE ENTITIES</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Entity Intelligence</h1>
          <p className="mt-2 text-platinum-600 dark:text-platinum-400">
            Government entities across all 7 Emirates — {totalEntities} entities tracked with {executionMetadata.queriesExecuted} queries executed
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
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Total Entities"
            value={totalEntities}
            icon={<Building2 className="h-6 w-6" />}
            gradient="denim"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Critical Relevance"
            value={criticalCount}
            icon={<AlertCircle className="h-6 w-6" />}
            gradient="rose"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="Positive Sentiment"
            value={Math.round((positiveCount / totalEntities) * 100)}
            unit="%"
            icon={<TrendingUp className="h-6 w-6" />}
            gradient="emerald"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <MetricCard
            title="High Confidence Data"
            value={Math.round((highConfidenceCount / totalEntities) * 100)}
            unit="%"
            icon={<CheckCircle2 className="h-6 w-6" />}
            gradient="cyan"
          />
        </motion.div>
      </motion.div>

      <Tabs defaultValue="table" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="table">Entity Table</TabsTrigger>
          <TabsTrigger value="emirates">By Emirate</TabsTrigger>
          <TabsTrigger value="types">By Type</TabsTrigger>
          <TabsTrigger value="aum">AUM/Revenue</TabsTrigger>
          <TabsTrigger value="freezones">Free Zones</TabsTrigger>
          <TabsTrigger value="aviation">Aviation</TabsTrigger>
          <TabsTrigger value="police">Police Forces</TabsTrigger>
          <TabsTrigger value="hierarchy">Hierarchy</TabsTrigger>
          <TabsTrigger value="validation">Validation</TabsTrigger>
          <TabsTrigger value="patterns">Key Patterns</TabsTrigger>
        </TabsList>

        {/* Entity Table */}
        <TabsContent value="table" className="space-y-6">
          <GlassPanel title="Emirate Entities Registry" description="Complete list of government entities across all seven emirates">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-platinum-200/50 dark:border-platinum-700/50">
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Entity</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Type</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Emirate</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Relevance</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Sentiment</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Confidence</TableHead>
                  <TableHead className="text-platinum-700 dark:text-platinum-300 font-semibold">Key Metric</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((entity) => (
                  <TableRow key={entity.id} className="border-b border-platinum-100/50 dark:border-platinum-800/50 hover:bg-platinum-50/50 dark:hover:bg-platinum-800/25 transition-colors">
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-semibold text-navy-900 dark:text-platinum-100">{entity.name.split(' - ')[0]}</span>
                        {entity.ceo && (
                          <span className="text-xs text-platinum-500 dark:text-platinum-400">CEO: {entity.ceo}</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-platinum-700 dark:text-platinum-300">{entity.type.replace(/_/g, ' ')}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-platinum-700 dark:text-platinum-300">{entity.emirate}</span>
                    </TableCell>
                    <TableCell>
                      {getRelevanceBadge(entity.uaeRelevance)}
                    </TableCell>
                    <TableCell>
                      {getSentimentBadge(entity.sentiment)}
                    </TableCell>
                    <TableCell>
                      <Badge variant={entity.confidence === 'HIGH' ? 'success' : 'warning'} className="text-xs">
                        {entity.confidence}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-navy-900 dark:text-platinum-100 font-medium">
                        {entity.metrics[0]?.value}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GlassPanel>
        </TabsContent>

        {/* By Emirate */}
        <TabsContent value="emirates" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Entities by Emirate</CardTitle>
                <CardDescription>Distribution of government entities across emirates</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={emirateData}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Abu Dhabi Ecosystem</CardTitle>
                <CardDescription>Key entity types in Abu Dhabi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {synthesizedAbuDhabiEcosystem.map((item) => (
                    <div key={item.entityType} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-platinum-700 dark:text-platinum-300">{item.entityType}</span>
                        <span className="text-platinum-500">{item.scale}</span>
                      </div>
                      <p className="text-xs text-platinum-600 dark:text-platinum-400">{item.keyExamples}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Dubai Ecosystem</CardTitle>
                <CardDescription>Key entity types in Dubai</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {synthesizedDubaiEcosystem.map((item) => (
                    <div key={item.entityType} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-platinum-700 dark:text-platinum-300">{item.entityType}</span>
                        <span className="text-platinum-500">{item.scale}</span>
                      </div>
                      <p className="text-xs text-platinum-600 dark:text-platinum-400">{item.keyExamples}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Northern Emirates</CardTitle>
                <CardDescription>Government entities in smaller emirates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {synthesizedNorthernEmirates.map((item) => (
                    <div key={item.emirate} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-platinum-700 dark:text-platinum-300">{item.emirate}</span>
                        <Badge variant="outline" className="text-xs">{item.entityType}</Badge>
                      </div>
                      <p className="text-xs text-platinum-600 dark:text-platinum-400">{item.keyExamples}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* By Type */}
        <TabsContent value="types" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Entity Type Distribution</CardTitle>
                <CardDescription>Breakdown by entity type</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={Object.entries(typeCounts).map(([type, count]) => ({
                    name: type.replace(/_/g, ' '),
                    count,
                  }))}
                  xAxisKey="name"
                  bars={[{ dataKey: 'count', name: 'Entities', color: CHART_COLORS.navy }]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Relevance Distribution</CardTitle>
                <CardDescription>Entities by UAE relevance level</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={relevanceData}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Sentiment Analysis</CardTitle>
                <CardDescription>Overall sentiment across all entities</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={sentimentData}
                  height={280}
                  showLegend={true}
                />
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Data Confidence</CardTitle>
                <CardDescription>High vs Medium confidence entities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {confidenceSummary.map((item) => (
                    <div key={item.level} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant={item.level === 'HIGH' ? 'success' : 'warning'}>{item.level}</Badge>
                        <span className="text-platinum-500 text-xs">{item.criteria}</span>
                      </div>
                      <p className="text-xs text-platinum-600 dark:text-platinum-400">{item.entities.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* AUM/Revenue */}
        <TabsContent value="aum" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Government Entities by AUM/Revenue</CardTitle>
                <CardDescription>Major sovereign entities ranked by financial metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Entity</TableHead>
                      <TableHead>Emirate</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Metric</TableHead>
                      <TableHead>Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {aumRevenueData.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.entity}</TableCell>
                        <TableCell>{item.emirate}</TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.metric}</TableCell>
                        <TableCell className="text-navy-900 dark:text-platinum-100 font-semibold">{item.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Top Entities by Financial Scale</CardTitle>
                <CardDescription>Visual comparison of AUM, revenue, and assets</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={aumRevenueData.slice(0, 6).map(item => ({
                    name: item.entity,
                    value: parseFloat(item.value.replace(/[^0-9.]/g, '')) || 0,
                  }))}
                  xAxisKey="name"
                  bars={[{ dataKey: 'value', name: 'Value ($ Billions)', color: CHART_COLORS.gold }]}
                  height={350}
                  showGrid={true}
                  horizontal={true}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Free Zones */}
        <TabsContent value="freezones" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Free Zones by Company Count</CardTitle>
                <CardDescription>UAE free zones ranked by registered companies</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Free Zone</TableHead>
                      <TableHead>Emirate</TableHead>
                      <TableHead>Companies</TableHead>
                      <TableHead>FDI Contribution</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {freeZoneData.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.freeZone}</TableCell>
                        <TableCell>{item.emirate}</TableCell>
                        <TableCell>{item.companies}</TableCell>
                        <TableCell className="text-platinum-600">{item.fdiContribution}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Free Zone Companies Comparison</CardTitle>
                <CardDescription>Visual comparison of registered companies</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={freeZoneData.filter(f => f.companies !== '-').map(item => ({
                    name: item.freeZone,
                    companies: parseInt(item.companies.replace(/[^0-9]/g, '')) || 0,
                  }))}
                  xAxisKey="name"
                  bars={[{ dataKey: 'companies', name: 'Companies', color: CHART_COLORS.emerald }]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Aviation */}
        <TabsContent value="aviation" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">UAE Aviation Entities</CardTitle>
                <CardDescription>Emirates and Etihad comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Airline</TableHead>
                      <TableHead>Emirate</TableHead>
                      <TableHead>Fleet</TableHead>
                      <TableHead>Destinations</TableHead>
                      <TableHead>Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {aviationData.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.airline}</TableCell>
                        <TableCell>{item.emirate}</TableCell>
                        <TableCell>{item.fleet}</TableCell>
                        <TableCell>{item.destinations}</TableCell>
                        <TableCell className="text-navy-900 dark:text-platinum-100 font-semibold">{item.revenue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Fleet Size Comparison</CardTitle>
                <CardDescription>Emirates vs Etihad aircraft count</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={aviationData.map(item => ({
                    name: item.airline,
                    fleet: parseInt(item.fleet.split(' ')[0]) || 0,
                  }))}
                  xAxisKey="name"
                  bars={[{ dataKey: 'fleet', name: 'Aircraft', color: CHART_COLORS.info }]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Police Forces */}
        <TabsContent value="police" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">UAE Police Forces</CardTitle>
                <CardDescription>Coverage and staff comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Force</TableHead>
                      <TableHead>Emirate</TableHead>
                      <TableHead>Staff</TableHead>
                      <TableHead>Jurisdiction</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {policeForceData.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.force}</TableCell>
                        <TableCell>{item.emirate}</TableCell>
                        <TableCell>{item.staff}</TableCell>
                        <TableCell>{item.jurisdiction}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Staff Distribution</CardTitle>
                <CardDescription>Police force staff sizes</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={policeForceData.map(item => ({
                    name: item.force.split(' ')[0],
                    staff: parseInt(item.staff.replace(/[^0-9]/g, '')) || 0,
                  }))}
                  xAxisKey="name"
                  bars={[{ dataKey: 'staff', name: 'Staff', color: CHART_COLORS.rose }]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Hierarchy */}
        <TabsContent value="hierarchy" className="space-y-6">
          <GlassPanel title="UAE Entity Hierarchy" description="Structural overview of government entities">
            <div className="space-y-6">
              {Object.entries(entityHierarchy).map(([federal, emirates]) => (
                <div key={federal}>
                  <h4 className="font-rajdhani font-bold text-lg text-navy-900 dark:text-platinum-100 mb-3">{federal}</h4>
                  <div className="space-y-4 pl-4">
                    {emirates.map((entry) => (
                      <div key={entry.name} className="space-y-2">
                        <h5 className="font-semibold text-platinum-700 dark:text-platinum-300">{entry.name}</h5>
                        <div className="flex flex-wrap gap-2 pl-4">
                          {entry.entities.map((entity) => (
                            <Badge key={entity} variant="outline" className="text-xs">
                              {entity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Validation */}
        <TabsContent value="validation" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Data Validation Summary</CardTitle>
              <CardDescription>Source verification status for all entities</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Entity</TableHead>
                    <TableHead>Official Source</TableHead>
                    <TableHead>Wikipedia</TableHead>
                    <TableHead>WebFetch</TableHead>
                    <TableHead>Confidence</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {validationData.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{item.entity}</TableCell>
                      <TableCell className="text-xs">{item.officialSource}</TableCell>
                      <TableCell>
                        <Badge variant="success" className="text-xs">{item.wikipedia}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={item.webFetchStatus === 'Confirmed' ? 'success' : 'warning'} className="text-xs">
                          {item.webFetchStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={item.dataConfidence === 'HIGH' ? 'success' : 'warning'} className="text-xs">
                          {item.dataConfidence}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Key Patterns */}
        <TabsContent value="patterns" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {keyPatterns.map((pattern, i) => (
              <Card key={i} className="glass-card">
                <CardHeader>
                  <CardTitle className="text-base">Pattern {i + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-platinum-700 dark:text-platinum-300">{pattern}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <GlassPanel title="Execution Summary" description="Research metadata">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-1">
                <p className="text-xs text-platinum-500">Date Executed</p>
                <p className="font-medium text-navy-900 dark:text-platinum-100">{executionMetadata.dateExecuted}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500">Framework Version</p>
                <p className="font-medium text-navy-900 dark:text-platinum-100">{executionMetadata.frameworkVersion}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500">Queries Executed</p>
                <p className="font-medium text-navy-900 dark:text-platinum-100">{executionMetadata.queriesExecuted}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500">Pages Fetched</p>
                <p className="font-medium text-navy-900 dark:text-platinum-100">{executionMetadata.pagesFetched}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500">Total Entities</p>
                <p className="font-medium text-navy-900 dark:text-platinum-100">{executionMetadata.totalEntitiesCovered}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500">Emirates Covered</p>
                <p className="font-medium text-navy-900 dark:text-platinum-100">{executionMetadata.emiratesCovered.length}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-platinum-500">Enrichment Status</p>
                <p className="font-medium text-navy-900 dark:text-platinum-100">{executionMetadata.enrichmentStatus}</p>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
