// @ts-nocheck
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Progress } from '@/components/ui/progress'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  LineChart,
  BarChart,
  AreaChart,
  PieChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  CheckCircle,
  AlertTriangle,
  Shield,
  Image,
  Video,
  Brain,
  Globe,
  Map,
  Landmark,
  Cloud,
  TrendingUp,
  AlertOctagon,
  Check,
  XCircle,
  Eye,
  FileWarning,
  Scale,
  Hash,
  Search,
  ExternalLink,
  Zap,
  Camera,
  Megaphone,
  BookOpen,
} from 'lucide-react'
import {
  visualMultimediaData,
  visualMultimediaExtendedData,
} from '@/lib/data-loader'
import { motion, AnimatePresence } from 'framer-motion'

export default function VisualMultimediaPage() {
  const extended = visualMultimediaExtendedData
  const data = visualMultimediaData

  // Execution metadata
  const meta = extended.executionMetadata

  // Get tier badge variant
  const getTierBadge = (tier: number) => {
    switch (tier) {
      case 1: return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Tier {tier}</Badge>
      case 2: return <Badge className="bg-navy-500/20 text-navy-500-400 border-navy-500/50">Tier {tier}</Badge>
      case 3: return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50">Tier {tier}</Badge>
      default: return <Badge className="bg-platinum-500/20 text-platinum-500-400 border-platinum-500/50">Tier {tier}</Badge>
    }
  }

  // Get relevance badge variant
  const getRelevanceBadge = (relevance: string) => {
    switch (relevance) {
      case 'Critical': return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">CRITICAL</Badge>
      case 'HIGH': return <Badge variant="warning" className="bg-orange-500/20 text-orange-400 border-orange-500/50">HIGH</Badge>
      case 'Medium': return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/50">MEDIUM</Badge>
      default: return <Badge variant="outline">LOW</Badge>
    }
  }

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'SUCCESS': return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">SUCCESS</Badge>
      case 'BLOCKED': return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">BLOCKED</Badge>
      case 'CONN REFUSED': return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">CONN REFUSED</Badge>
      case 'PARTIAL': return <Badge variant="warning" className="bg-orange-500/20 text-orange-400 border-orange-500/50">PARTIAL</Badge>
      default: return <Badge variant="outline">{status}</Badge>
    }
  }

  // Get sentiment badge
  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/50">Positive</Badge>
      case 'negative': return <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/50">Negative</Badge>
      default: return <Badge variant="outline">Neutral</Badge>
    }
  }

  // Chart data for viral content
  const viralChartData = extended.viralContentMetrics.map(v => ({
    name: v.contentType.length > 15 ? v.contentType.substring(0, 15) + '...' : v.contentType,
    value: v.value,
    engagement: v.engagement,
  }))

  // Chart data for cloud seeding missions
  const cloudSeedingData = extended.cloudSeedingData.missionsByYear.map(c => ({
    year: c.year.toString(),
    missions: c.missions,
  }))

  // Chart data for sentiment analysis
  const sentimentChartData = extended.sentimentAnalysisByTopic.map(s => ({
    topic: s.topic.length > 12 ? s.topic.substring(0, 12) + '...' : s.topic,
    positive: s.positive,
    negative: s.negative,
    neutral: s.neutral,
  }))

  // Chart data for KPI summary by category
  const kpiCategories = extended.kpiSummaryTable.reduce((acc, kpi) => {
    if (!acc[kpi.category]) acc[kpi.category] = 0
    acc[kpi.category]++
    return acc
  }, {} as Record<string, number>)

  const kpiCategoryData = Object.entries(kpiCategories).map(([name, value]) => ({
    name,
    value,
    color: CHART_COLORS[Object.keys(CHART_COLORS)[Math.floor(Math.random() * Object.keys(CHART_COLORS).length)] as keyof typeof CHART_COLORS],
  }))

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="emerald" className="mb-2">V-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-emerald-500">Visual & Multimedia</h1>
          <p className="mt-2 text-platinum-500-400">
            AI-generated content, deepfakes, viral media, and visual misinformation intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10">
            <Search className="h-4 w-4" />
            Visual Search
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-500-950 gap-2">
            <Image className="h-4 w-4" />
            Report Fake
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total URLs"
          value={meta.totalUrls}
          icon={<Globe className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Successfully Fetched"
          value={meta.successfullyFetched}
          previousValue={meta.blockedInaccessible}
          icon={<CheckCircle className="h-6 w-6" />}
          gradient="denim"
          status="info"
        />
        <MetricCard
          title="Data Points"
          value={meta.dataPointsExtracted}
          icon={<Zap className="h-6 w-6" />}
          gradient="gold"
          status="warning"
        />
        <MetricCard
          title="Sources Rated"
          value={meta.sourcesCredibilityRated}
          icon={<Shield className="h-6 w-6" />}
          gradient="indigo"
        />
      </div>

      {/* Deepfake Critical Alert */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-red-500/50 bg-red-500/10 p-6"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
            <Brain className="h-6 w-6 text-red-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-red-500">Deepfake Threat Level: CRITICAL</h3>
            <p className="text-sm text-platinum-500-400 mt-1">
              +900% increase in deepfakes (Q1 2024) — Fake news spreads 70% faster than genuine content
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">+900%</div>
            <p className="text-xs text-platinum-500-500">Deepfake Increase</p>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="deepfakes">Deepfakes</TabsTrigger>
          <TabsTrigger value="viral">Viral Content</TabsTrigger>
          <TabsTrigger value="threats">Threats</TabsTrigger>
          <TabsTrigger value="logos">Logos & Branding</TabsTrigger>
          <TabsTrigger value="cloudseeding">Cloud Seeding</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="legal">Legal Framework</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Visual Multimedia Overview" description="Key metrics and summary data">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Source Credibility Distribution */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Source Credibility Distribution</CardTitle>
                    <CardDescription>Sources by tier level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={[
                        { name: 'Tier 1', value: extended.sourceCredibilityMatrix.filter(s => s.tier === 1).length, color: CHART_COLORS.emerald },
                        { name: 'Tier 2', value: extended.sourceCredibilityMatrix.filter(s => s.tier === 2).length, color: CHART_COLORS.denim },
                        { name: 'Tier 3', value: extended.sourceCredibilityMatrix.filter(s => s.tier === 3).length, color: CHART_COLORS.gold },
                        { name: 'Tier 4', value: extended.sourceCredibilityMatrix.filter(s => s.tier === 4).length, color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                {/* Fetch Status */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">URL Fetch Status</CardTitle>
                    <CardDescription>Success vs blocked ratio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={[
                        { name: 'Success', value: meta.successfullyFetched, color: CHART_COLORS.emerald },
                        { name: 'Blocked', value: meta.blockedInaccessible, color: CHART_COLORS.rose },
                      ]}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* KPI Summary Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Statistics Summary</CardTitle>
                  <CardDescription>Critical metrics from all sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                      {extended.kpiSummaryTable.slice(0, 15).map((kpi, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-platinum-500-200">{kpi.category}</p>
                            <p className="text-xs text-platinum-500-500">{kpi.source} | {kpi.date}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <p className="text-lg font-bold text-emerald-400">{kpi.statistic}</p>
                            </div>
                            {getRelevanceBadge(kpi.uaeRelevance)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Reverse Image Search Targets */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Reverse Image Search Targets</CardTitle>
                  <CardDescription>Landmarks at high risk of manipulation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {extended.reverseImageSearchTargets.map((target, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Camera className="h-5 w-5 text-rose-400" />
                          <h4 className="font-semibold text-platinum-500-200">{target.landmark}</h4>
                        </div>
                        {getRelevanceBadge(target.riskLevel)}
                        <p className="text-xs text-platinum-500-500 mt-2">{target.manipulationHistory}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Deepfakes Tab */}
        <TabsContent value="deepfakes" className="space-y-6">
          <GlassPanel title="Deepfake Intelligence" description="AI-generated synthetic content warnings and statistics">
            <div className="space-y-6">
              {/* Deepfake KPIs */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {extended.deepfakeKPIs.map((kpi, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-red-400">{kpi.value}</div>
                    <p className="text-sm text-platinum-500-400 mt-1">{kpi.kpi}</p>
                    <p className="text-xs text-platinum-500-500 mt-1">Source: {kpi.source}</p>
                  </motion.div>
                ))}
              </div>

              {/* Fake Content Types */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Types of Fake Content Circulating</CardTitle>
                  <CardDescription>Categories of visual misinformation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {extended.fakeContentTypes.map((type, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Video className="h-5 w-5 text-rose-400" />
                          <h4 className="font-semibold text-platinum-500-200">{type.type}</h4>
                        </div>
                        <p className="text-sm text-platinum-500-400">{type.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Verification Methods */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Verification Methods</CardTitle>
                  <CardDescription>Priority-based fact-checking techniques</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {extended.verificationMethods.map((method, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-4 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-sm">
                          {method.priority}
                        </div>
                        <p className="text-sm text-platinum-500-300">{method.method}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reporting Channels */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Reporting Channels in UAE</CardTitle>
                  <CardDescription>Official channels for reporting misinformation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {extended.reportingChannels.map((channel, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-5 w-5 text-emerald-400" />
                          <h4 className="font-semibold text-platinum-500-200">{channel.agency}</h4>
                        </div>
                        <p className="text-sm text-platinum-500-400">{channel.platform}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Viral Content Tab */}
        <TabsContent value="viral" className="space-y-6">
          <GlassPanel title="Viral Content Metrics" description="High-engagement visual content analysis">
            <div className="space-y-6">
              {/* Viral Content Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Viral Content by Engagement</CardTitle>
                  <CardDescription>Top visual content by reach</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={viralChartData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Total Views/Likes', color: CHART_COLORS.emerald },
                      { dataKey: 'engagement', name: 'Engagement', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Viral Content Table */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Viral Content Details</CardTitle>
                  <CardDescription>Individual content piece metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {extended.viralContentMetrics.map((viral, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                              <TrendingUp className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-500-200">{viral.contentType}</p>
                              <p className="text-sm text-platinum-500-400">{viral.platform} | {viral.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {getSentimentBadge(viral.sentiment)}
                            <div className="text-right">
                              <div className="text-lg font-bold text-emerald-400">{viral.metric}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Hashtag Registry */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Hashtag Registry</CardTitle>
                  <CardDescription>Tracking visual content themes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {extended.hashtagRegistry.map((tag, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.03 }}
                      >
                        <Badge
                          variant="outline"
                          className={`text-sm ${
                            tag.usageCount === 'High'
                              ? 'border-emerald-500/50 text-emerald-400'
                              : tag.usageCount === 'Medium'
                              ? 'border-amber-500/50 text-amber-400'
                              : 'border-platinum-500/50 text-platinum-500-400'
                          }`}
                        >
                          {tag.hashtag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Threats Tab */}
        <TabsContent value="threats" className="space-y-6">
          <GlassPanel title="Visual Threat Dashboard" description="Active threats and manipulation risks">
            <div className="space-y-6">
              {/* Threat KPIs */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {extended.threatDashboardKPIs.map((threat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className={`rounded-lg border p-4 ${
                      threat.uaeRelevance === 'Critical'
                        ? 'border-red-500/30 bg-red-500/10'
                        : 'border-platinum-700 bg-platinum-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      {getRelevanceBadge(threat.uaeRelevance)}
                      {getStatusBadge(threat.fetchStatus)}
                    </div>
                    <h4 className="font-semibold text-platinum-500-200 mt-2">{threat.threatType}</h4>
                    <p className="text-sm text-platinum-500-400 mt-1">{threat.keyFinding}</p>
                    <p className="text-xs text-platinum-500-500 mt-2">Source: {threat.primarySource}</p>
                  </motion.div>
                ))}
              </div>

              {/* Query Templates */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Boolean Query Templates</CardTitle>
                  <CardDescription>Monitoring queries for visual content</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-3">
                      {extended.queryTemplates.map((qt, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <p className="text-sm font-medium text-platinum-500-300">{qt.name}</p>
                          <code className="text-xs text-emerald-400 mt-1 block">{qt.query}</code>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Logos & Branding Tab */}
        <TabsContent value="logos" className="space-y-6">
          <GlassPanel title="Logo & Branding Regulations" description="Official branding guidelines and protections">
            <div className="space-y-6">
              {/* UAE 50 Year Logo */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE 50-Year Logo: &quot;7 Lines&quot;</CardTitle>
                  <CardDescription>New national branding symbol</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">10.6M</div>
                      <p className="text-sm text-platinum-500-400">Votes Cast</p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">49</div>
                      <p className="text-sm text-platinum-500-400">Emirati Designers</p>
                    </div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">7</div>
                      <p className="text-sm text-platinum-500-400">Emirates United</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-platinum-500-300 mb-2">Symbolism:</h4>
                    <div className="flex flex-wrap gap-2">
                      {extended.logoBrandingData.uae50Year.symbolism.map((s, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-platinum-700/50">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dubai Emblem Law */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Dubai Emblem Protection Law 2025</CardTitle>
                  <CardDescription>Official emblem usage regulations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4">
                      <h4 className="font-semibold text-rose-400 mb-2">Penalties</h4>
                      {extended.logoBrandingData.dubaiEmblem.penalties.map((p, idx) => (
                        <div key={idx} className="flex justify-between mt-2">
                          <span className="text-sm text-platinum-500-400">{p.type}</span>
                          <span className="text-sm font-medium text-platinum-500-200">{p.range}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                      <h4 className="font-semibold text-platinum-500-200 mb-2">Key Restrictions</h4>
                      {extended.logoBrandingData.dubaiEmblem.restrictions.map((r, idx) => (
                        <p key={idx} className="text-sm text-platinum-500-400 mt-1">• {r}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Eid Al Etihad */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Eid Al Etihad 2025 Logo Guidelines</CardTitle>
                  <CardDescription>54th Union Anniversary branding rules</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-platinum-500-300 mb-2">Symbolism:</h4>
                      <div className="flex flex-wrap gap-2">
                        {extended.logoBrandingData.eidAlEtihad.symbolism.map((s, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-emerald-500/10 border-emerald-500/50 text-emerald-400">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-platinum-500-300 mb-2">Prohibited Actions (DON&apos;Ts):</h4>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {extended.logoBrandingData.eidAlEtihad.restrictions.map((r, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-platinum-500-400">
                            <XCircle className="h-4 w-4 text-rose-400 flex-shrink-0" />
                            {r}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Cloud Seeding Tab */}
        <TabsContent value="cloudseeding" className="space-y-6">
          <GlassPanel title="UAE Cloud Seeding Program" description="Weather modification operations and statistics">
            <div className="space-y-6">
              {/* Cloud Seeding Stats */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Missions (2019)"
                  value={extended.cloudSeedingData.missionsConducted}
                  icon={<Cloud className="h-6 w-6" />}
                  gradient="denim"
                  status="info"
                />
                <MetricCard
                  title="Cost per Operation"
                  value={extended.cloudSeedingData.costPerOperation}
                  icon={<TrendingUp className="h-6 w-6" />}
                  gradient="gold"
                  status="warning"
                />
                <MetricCard
                  title="Aircraft"
                  value={extended.cloudSeedingData.aircraft.split(' ')[0]}
                  icon={<Video className="h-6 w-6" />}
                  gradient="emerald"
                  status="success"
                />
                <MetricCard
                  title="Weather Stations"
                  value={extended.cloudSeedingData.weatherStations.toString()}
                  icon={<Cloud className="h-6 w-6" />}
                  gradient="indigo"
                />
              </div>

              {/* Cloud Seeding Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Cloud Seeding Missions by Year</CardTitle>
                  <CardDescription>Annual operation counts</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={cloudSeedingData}
                    xAxisKey="year"
                    areas={[
                      { dataKey: 'missions', name: 'Missions', color: CHART_COLORS.denim },
                    ]}
                    height={250}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Effectiveness */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Effectiveness Rates</CardTitle>
                  <CardDescription>Rainfall enhancement by atmosphere condition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-emerald-400">{extended.cloudSeedingData.effectivenessClear}</div>
                      <p className="text-sm text-platinum-500-400 mt-1">Clear Atmosphere Enhancement</p>
                    </div>
                    <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-center">
                      <div className="text-3xl font-bold text-amber-500">{extended.cloudSeedingData.effectivenessHumid}</div>
                      <p className="text-sm text-platinum-500-400 mt-1">Humid Atmosphere Enhancement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technology Details */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Technology & Operations</CardTitle>
                  <CardDescription>Technical specifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                        <span className="text-sm text-platinum-500-400">Technology</span>
                        <span className="text-sm font-medium text-platinum-500-200">Hygroscopic</span>
                      </div>
                      <div className="flex justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                        <span className="text-sm text-platinum-500-400">Doppler Radars</span>
                        <span className="text-sm font-medium text-platinum-500-200">{extended.cloudSeedingData.dopplerRadars}</span>
                      </div>
                      <div className="flex justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3">
                        <span className="text-sm text-platinum-500-400">Drone Technology</span>
                        <span className="text-sm font-medium text-platinum-500-200">Since 2021</span>
                      </div>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                      <h4 className="text-sm font-medium text-platinum-500-300 mb-2">Materials Used</h4>
                      <p className="text-sm text-platinum-500-400">Potassium chloride, Sodium chloride</p>
                      <h4 className="text-sm font-medium text-platinum-500-300 mt-4 mb-2">Target Area</h4>
                      <p className="text-sm text-platinum-500-400">Eastern mountains near Oman</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sentiment Analysis by Topic" description="Emotional tone of visual content discussions">
            <div className="space-y-6">
              {/* Sentiment Chart */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                  <CardDescription>Positive, negative, and neutral by topic</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={sentimentChartData}
                    xAxisKey="topic"
                    bars={[
                      { dataKey: 'positive', name: 'Positive', color: CHART_COLORS.emerald },
                      { dataKey: 'negative', name: 'Negative', color: CHART_COLORS.rose },
                      { dataKey: 'neutral', name: 'Neutral', color: CHART_COLORS.platinum },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              {/* Sentiment Details */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Topic-Level Sentiment</CardTitle>
                  <CardDescription>Detailed breakdown by content category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {extended.sentimentAnalysisByTopic.map((sent, idx) => {
                        const total = sent.positive + sent.negative + sent.neutral
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-platinum-500-200">{sent.topic}</h4>
                              <Badge variant="outline" className="text-xs">{sent.dominantNarrative}</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="text-emerald-400">+{sent.positive}%</span>
                              <span className="text-rose-400">-{sent.negative}%</span>
                              <span className="text-platinum-500-400">{sent.neutral}%</span>
                            </div>
                            <Progress
                              value={100}
                              className="mt-2 h-2"
                            />
                            <div className="flex mt-1 h-2 rounded-full overflow-hidden">
                              <div
                                className="bg-emerald-400"
                                style={{ width: `${(sent.positive / total) * 100}%` }}
                              />
                              <div
                                className="bg-rose-400"
                                style={{ width: `${(sent.negative / total) * 100}%` }}
                              />
                              <div
                                className="bg-platinum-500"
                                style={{ width: `${(sent.neutral / total) * 100}%` }}
                              />
                            </div>
                            <p className="text-xs text-platinum-500-500 mt-2">Source: {sent.source}</p>
                          </motion.div>
                        )
                      })}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Entity Registry" description="Key organizations and individuals in visual multimedia">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Organizations & Individuals</CardTitle>
                  <CardDescription>Government agencies, media, and key figures</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-3">
                      {extended.entityRegistry.map((entity, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              entity.type === 'Government'
                                ? 'bg-emerald-500/20 text-emerald-500'
                                : entity.type === 'Media'
                                ? 'bg-blue/20 text-blue'
                                : entity.type === 'Fact-checker'
                                ? 'bg-gold-700/20 text-gold-700'
                                : entity.type === 'Military'
                                ? 'bg-rose-500/20 text-rose-500'
                                : 'bg-slate/20 text-slate'
                            }`}>
                              {entity.type === 'Government' && <Shield className="h-5 w-5" />}
                              {entity.type === 'Media' && <BookOpen className="h-5 w-5" />}
                              {entity.type === 'Fact-checker' && <CheckCircle className="h-5 w-5" />}
                              {entity.type === 'Military' && <AlertOctagon className="h-5 w-5" />}
                              {entity.type === 'Leader' && <Landmark className="h-5 w-5" />}
                              {entity.type === 'Individual' && <Megaphone className="h-5 w-5" />}
                              {entity.type === 'Business' && <TrendingUp className="h-5 w-5" />}
                            </div>
                            <div>
                              <p className="font-semibold text-platinum-500-200">{entity.entity}</p>
                              <p className="text-sm text-platinum-500-400">{entity.role}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">{entity.type}</Badge>
                            {getRelevanceBadge(entity.uaeRelevance)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Legal Framework Tab */}
        <TabsContent value="legal" className="space-y-6">
          <GlassPanel title="Legal Framework" description="Laws and regulations governing visual content">
            <div className="space-y-6">
              {/* Legal Framework */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Legislation</CardTitle>
                  <CardDescription>Regulations affecting visual multimedia</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {extended.legalFramework.map((law, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-platinum-500-200">{law.law}</h4>
                          <Scale className="h-5 w-5 text-gold-700" />
                        </div>
                        <p className="text-sm text-platinum-500-400 mb-2">{law.keyProvision}</p>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-rose-400" />
                          <span className="text-sm text-rose-400">{law.penalty}</span>
                        </div>
                        <p className="text-xs text-platinum-500-500 mt-2">Source: {law.source}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Financial Conversions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Financial Conversions</CardTitle>
                  <CardDescription>Currency values for penalties and costs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {extended.financialConversions.map((fc, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4 text-center"
                      >
                        <div className="text-xl font-bold text-emerald-400">{fc.amount}</div>
                        <p className="text-sm text-platinum-500-400">{fc.currency}</p>
                        <div className="mt-2 pt-2 border-t border-platinum-700">
                          <p className="text-xs text-platinum-500-500">USD: {fc.usdEquivalent}</p>
                          <p className="text-xs text-platinum-500-500">INR: {fc.inrEquivalent}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tier Definitions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Tier Definitions</CardTitle>
                  <CardDescription>Credibility classification system</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {extended.tierDefinitions.map((tier, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          {getTierBadge(tier.tier)}
                          <div className="flex-1">
                            <p className="text-sm text-platinum-500-300">{tier.description}</p>
                            <p className="text-xs text-platinum-500-500 mt-1">Examples: {tier.examples}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sources Tab */}
        <TabsContent value="sources" className="space-y-6">
          <GlassPanel title="Source Analysis" description="Credibility and fetch status of sources">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Source Credibility Matrix</CardTitle>
                  <CardDescription>All sources rated by tier and reliability</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-2">
                      {extended.sourceCredibilityMatrix.map((source, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-center justify-between rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-platinum-500-200">{source.name}</p>
                            <p className="text-xs text-platinum-500-500">{source.type} | Score: {source.score}/10</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getTierBadge(source.tier)}
                            {getRelevanceBadge(source.uaeRelevance)}
                            {getStatusBadge(source.fetchStatus)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* URL Content Summaries */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">URL Content Summaries</CardTitle>
                  <CardDescription>Successfully fetched content highlights</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {extended.urlContentSummaries.map((url, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.03 }}
                          className="flex items-start gap-3 rounded-lg border border-platinum-700 bg-platinum-800/50 p-3"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 flex-shrink-0">
                            <ExternalLink className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-platinum-500-200 truncate">{url.url}</p>
                            <p className="text-xs text-platinum-500-400 mt-1">{url.keyDataExtracted}</p>
                            <div className="flex items-center gap-2 mt-2">
                              {getStatusBadge(url.status)}
                              <span className="text-xs text-platinum-500-500">{url.dataPoints} data points</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>

      {/* Enrichment Metadata Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-emerald-400" />
            <span className="text-sm text-platinum-500-300">Enrichment Status: {meta.enrichmentStatus}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-platinum-500-500">
            <span>Enriched: {meta.enrichmentDate}</span>
            <span>Executed: {meta.dateExecuted}</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
