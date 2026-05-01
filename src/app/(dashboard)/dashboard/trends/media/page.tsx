// @ts-nocheck
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Tv,
  Radio,
  Music,
  Gamepad2,
  Brain,
  Smartphone,
  Megaphone,
  TrendingDown,
  CheckCircle,
  XCircle,
  Info,
  ExternalLink,
  Sparkles,
  Target,
  Newspaper,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
} from 'lucide-react'
import {
  mediaIndustryTrendsData,
  mediaIndustryExtendedData,
  mediaIndustryComprehensiveData,
} from '@/lib/data-loader/trends-data'

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
  visible: { opacity: 1, y: 0 },
}

export default function MediaTrendsPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const { mediaIndustryComprehensiveData: data } = { mediaIndustryComprehensiveData }

  // Key metrics for header cards
  const keyMetrics = [
    { title: 'Global E&M Market', value: '$3.08T', previousValue: 2870.56, unit: 'B', icon: <Globe className="h-6 w-6" />, gradient: 'gold', trend: 'up' },
    { title: 'Streaming Share', value: '46.7%', previousValue: 44.8, unit: '', icon: <Tv className="h-6 w-6" />, gradient: 'denim', trend: 'up' },
    { title: 'Digital Ad Spend', value: '$854.9B', previousValue: 740.3, unit: '', icon: <Megaphone className="h-6 w-6" />, gradient: 'emerald', trend: 'up' },
    { title: 'Music Revenue', value: '$31.7B', previousValue: 29.8, unit: '', icon: <Music className="h-6 w-6" />, gradient: 'purple', trend: 'up' },
  ]

  // Sentiment data for pie chart
  const sentimentData = [
    { name: 'Positive', value: 69, color: CHART_COLORS.emerald },
    { name: 'Negative', value: 16, color: CHART_COLORS.rose },
    { name: 'Neutral', value: 15, color: CHART_COLORS.platinum },
  ]

  // Global market chart data
  const marketSizeData = [
    { year: '2024', value: 2900, projected: false },
    { year: '2025', value: 2870.56, projected: false },
    { year: '2026', value: 3080.52, projected: true },
    { year: '2027', value: 3317.12, projected: true },
    { year: '2028', value: 3572.84, projected: true },
    { year: '2029', value: 3848.93, projected: true },
    { year: '2030', value: 4146.36, projected: true },
  ]

  // Streaming vs TV data
  const streamingTVData = [
    { name: 'Streaming', value: 46.7, color: CHART_COLORS.gold },
    { name: 'Broadcast', value: 32.1, color: CHART_COLORS.denim },
    { name: 'Cable', value: 12.1, color: CHART_COLORS.platinum },
    { name: 'Other', value: 9.1, color: CHART_COLORS.navy },
  ]

  // Digital ad breakdown
  const adTypeData = [
    { name: 'Search', value: 362.3, color: CHART_COLORS.gold },
    { name: 'Video', value: 217.7, color: CHART_COLORS.emerald },
    { name: 'Banner', value: 196.5, color: CHART_COLORS.denim },
    { name: 'Influencer', value: 43.5, color: CHART_COLORS.purple },
    { name: 'Audio', value: 12.4, color: CHART_COLORS.rose },
  ]

  // Music revenue sources
  const musicRevenueData = [
    { name: 'Streaming', value: 69.6, color: CHART_COLORS.emerald },
    { name: 'Physical', value: 11.2, color: CHART_COLORS.rose },
    { name: 'Digital', value: 12.8, color: CHART_COLORS.gold },
    { name: 'Sync', value: 2.1, color: CHART_COLORS.purple },
    { name: 'Other', value: 4.3, color: CHART_COLORS.platinum },
  ]

  // Gaming trends
  const gamingTrendsData = [
    { trend: 'AI in Gameplay', impact: 95, color: CHART_COLORS.gold },
    { trend: 'Cross-Platform', impact: 88, color: CHART_COLORS.emerald },
    { trend: 'Cloud Gaming', impact: 82, color: CHART_COLORS.denim },
    { trend: 'IP Mainstream', impact: 90, color: CHART_COLORS.purple },
    { trend: 'Livestream', impact: 78, color: CHART_COLORS.rose },
  ]

  // AI adoption metrics
  const aiAdoptionData = [
    { metric: 'Creators Using GenAI', value: 86, color: CHART_COLORS.emerald },
    { metric: 'AI-Generated Content (proj.)', value: 90, color: CHART_COLORS.rose },
    { metric: 'Fraudulent AI Music Streams', value: 85, color: CHART_COLORS.orange },
    { metric: 'AI in M&E Market (2034)', value: 75, color: CHART_COLORS.gold },
  ]

  // Regional growth
  const regionalGrowthData = [
    { region: 'MENA', growth: 15.2, color: CHART_COLORS.gold },
    { region: 'Latin America', growth: 17.1, color: CHART_COLORS.emerald },
    { region: 'Asia Pacific', growth: 9.96, color: CHART_COLORS.denim },
    { region: 'Europe', growth: 5.6, color: CHART_COLORS.purple },
    { region: 'USA/Canada', growth: 3.5, color: CHART_COLORS.navy },
  ]

  // Platform comparison
  const platformData = [
    { platform: 'YouTube', share: 42, color: CHART_COLORS.rose },
    { platform: 'Spotify', share: 15, color: CHART_COLORS.emerald },
    { platform: 'Apple Podcasts', share: 7, color: CHART_COLORS.platinum },
    { platform: 'Others', share: 36, color: CHART_COLORS.navy },
  ]

  // Creator economy metrics
  const creatorMetricsData = [
    { metric: 'Creator Ad Spend 2025', value: 37, unit: 'B', color: CHART_COLORS.gold },
    { metric: 'Micro-drama Revenue', value: 7.8, unit: 'B', color: CHART_COLORS.purple },
    { metric: 'YouTube Long-form Share', value: 47, unit: '%', color: CHART_COLORS.emerald },
    { metric: 'MrBeast Revenue', value: 473, unit: 'M', color: CHART_COLORS.denim },
  ]

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
          <Badge variant="gold" className="mb-2">TRENDS INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Media Industry Trends</h1>
          <p className="mt-2 text-platinum-400">
            Comprehensive analysis of global media and entertainment trends, streaming maturation, AI disruption, creator economy evolution, and shifting consumption patterns
          </p>
          <div className="mt-2 flex items-center gap-4 text-sm text-platinum-500">
            <span>Research: {data.executionMetadata.researchDate}</span>
            <span>Enriched: {data.executionMetadata.enrichmentDate}</span>
            <span>Sources: {data.references.length}+</span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <ExternalLink className="h-4 w-4" />
            Sources
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Sparkles className="h-4 w-4" />
            Analyze
          </Button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {keyMetrics.map((metric, idx) => (
          <MetricCard
            key={idx}
            title={metric.title}
            value={metric.value}
            previousValue={metric.previousValue}
            unit={metric.unit}
            icon={metric.icon}
            gradient={metric.gradient}
            trend={metric.trend as 'up' | 'down' | 'stable'}
          />
        ))}
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="global-market">Global Market</TabsTrigger>
          <TabsTrigger value="streaming">Streaming</TabsTrigger>
          <TabsTrigger value="advertising">Advertising</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="podcast">Podcast</TabsTrigger>
          <TabsTrigger value="gaming">Gaming</TabsTrigger>
          <TabsTrigger value="ai-media">AI in Media</TabsTrigger>
          <TabsTrigger value="consumption">Consumption</TabsTrigger>
          <TabsTrigger value="creator">Creator Economy</TabsTrigger>
          <TabsTrigger value="traditional">Traditional Media</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Executive Summary" description="Key findings and market trajectory">
              <div className="space-y-6">
                {/* Sentiment and Market Overview */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Brain className="h-5 w-5 text-gold" />
                        Industry Sentiment
                      </CardTitle>
                      <CardDescription>Overall media & entertainment sentiment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <PieChart
                          data={sentimentData}
                          height={200}
                          showLegend={true}
                        />
                        <div className="space-y-2">
                          {data.sentimentAnalysis.slice(0, 5).map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-2">
                              <span className="text-sm truncate">{item.topic}</span>
                              <Badge
                                variant={item.overallSentiment === 'Positive' || item.overallSentiment === 'Very Positive' ? 'success' : item.overallSentiment === 'Negative' || item.overallSentiment === 'Very Negative' ? 'destructive' : 'outline'}
                                className="text-xs"
                              >
                                {item.overallSentiment}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-emerald" />
                        Global E&M Market Growth
                      </CardTitle>
                      <CardDescription>$3.08 trillion in 2026, 7.7% CAGR through 2035</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        areas={[
                          { dataKey: 'value', name: 'Market Size ($B)', color: CHART_COLORS.gold, fillOpacity: 0.3 },
                        ]}
                        data={marketSizeData}
                        xAxisKey="year"
                        height={200}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Key Takeaways */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Critical Takeaways</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {data.kpiSummary.slice(0, 8).map((kpi, idx) => (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          className="flex items-start gap-3 rounded-lg bg-platinum-800/50 p-3 border border-platinum-700/50"
                          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        >
                          <CheckCircle className="h-5 w-5 text-emerald mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">{kpi.kpi}</p>
                            <p className="text-lg font-bold text-gold">{kpi.currentValue}</p>
                            <p className="text-xs text-platinum-500">{kpi.trend} | Confidence: {kpi.confidence}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* UAE Relevance Heatmap */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">UAE Relevance Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {data.uaeRelevanceAssessment.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg p-3" style={{
                          backgroundColor: item.relevance === 'Critical' ? 'rgba(239, 68, 68, 0.1)' : item.relevance === 'High' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(100, 116, 139, 0.1)',
                          borderWidth: '1px',
                          borderColor: item.relevance === 'Critical' ? 'rgba(239, 68, 68, 0.3)' : item.relevance === 'High' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(100, 116, 139, 0.3)',
                        }}>
                          <span className="text-sm">{item.section}</span>
                          <Badge
                            variant={item.relevance === 'Critical' ? 'destructive' : item.relevance === 'High' ? 'success' : 'outline'}
                          >
                            {item.relevance}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Global Market Tab */}
        <TabsContent value="global-market" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Global Market Size & Growth" description="Market valuation and regional breakdown">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Market Size Trajectory</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <AreaChart
                        areas={[
                          { dataKey: 'value', name: 'Market Size ($B)', color: CHART_COLORS.gold, fillOpacity: 0.3 },
                        ]}
                        data={marketSizeData}
                        xAxisKey="year"
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Regional Growth Rates</CardTitle>
                      <CardDescription>MENA leads with 15.2% growth</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={regionalGrowthData}
                        xAxisKey="region"
                        bars={[
                          { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.gold },
                        ]}
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Regional Details */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Regional Market Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {data.section1_GlobalMarket.regionalMarketShare.map((region, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Badge variant={region.uaeRelevance === 'Critical' ? 'destructive' : region.uaeRelevance === 'High' ? 'success' : 'outline'} className="text-xs">
                              {region.uaeRelevance}
                            </Badge>
                            <span className="font-medium">{region.region}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-gold">{region.growthRate}</span>
                            <p className="text-xs text-platinum-500">{region.marketShare}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Streaming Tab */}
        <TabsContent value="streaming" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Streaming Industry Trends" description="OTT, SVOD, and streaming consumption patterns">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">TV Usage Share (Nov 2025)</CardTitle>
                      <CardDescription>Streaming surpasses traditional broadcast</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={streamingTVData}
                        height={220}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Streaming Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {data.section2_Streaming.marketValuation.slice(0, 4).map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <span className="text-sm">{metric.metric}</span>
                            <span className="text-lg font-bold text-gold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Consumption Behavior */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Streaming Consumption Behavior</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                      {data.section2_Streaming.consumptionBehavior.map((metric, idx) => (
                        <div key={idx} className="rounded-lg border border-platinum-700 p-4">
                          <p className="text-xs text-platinum-400">{metric.metric}</p>
                          <p className="mt-1 text-xl font-bold text-gold">{metric.value}</p>
                          <p className="text-xs text-platinum-500 mt-1">Source: {metric.source}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* YouTube Position */}
                <Card className="glass-card border-gold-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Tv className="h-5 w-5 text-gold" />
                      YouTube Market Position
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {data.section2_Streaming.youtubePosition.map((item, idx) => (
                        <div key={idx} className="rounded-lg bg-gold-500/10 p-4 border border-gold-500/30">
                          <p className="text-sm text-platinum-400">{item.metric}</p>
                          <p className="mt-1 text-lg font-bold text-gold">{item.value || 'Leading'}</p>
                          <Badge variant="success" className="mt-2">{item.sentiment}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Advertising Tab */}
        <TabsContent value="advertising" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Digital & Social Media Advertising" description="Ad market size, programmatic spending, and social media metrics">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Digital Ad Spending by Type ($B)</CardTitle>
                      <CardDescription>2026 global digital advertising</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={adTypeData}
                        xAxisKey="name"
                        bars={[
                          { dataKey: 'value', name: 'Spending ($B)', color: CHART_COLORS.gold },
                        ]}
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Digital Ad Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {data.section4_DigitalAds.marketSize.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div>
                              <p className="text-sm">{metric.metric}</p>
                              <p className="text-xs text-platinum-500">UAE: {metric.uaeRelevance}</p>
                            </div>
                            <span className="text-lg font-bold text-gold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* CTV Advertising */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Connected TV (CTV) Advertising</CardTitle>
                    <CardDescription>$38B US market, 14% YoY growth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      {data.section3_CTV.marketSize.map((metric, idx) => (
                        <div key={idx} className="rounded-lg border border-gold-500/30 bg-gold-500/5 p-4 text-center">
                          <p className="text-xs text-platinum-400">{metric.metric}</p>
                          <p className="mt-1 text-2xl font-bold text-gold">{metric.value}</p>
                          <p className="text-xs text-platinum-500 mt-1">Tier {metric.tier}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media Stats */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Social Media Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {data.section4_DigitalAds.socialMediaStats.slice(0, 8).map((stat, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <div>
                            <p className="text-sm">{stat.metric}</p>
                            <p className="text-xs text-platinum-500">{stat.source} | UAE: {stat.uaeRelevance}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-gold">{stat.value}</span>
                            <Badge
                              variant={stat.sentiment === 'Positive' ? 'success' : stat.sentiment === 'Negative' ? 'destructive' : 'outline'}
                              className="ml-2 text-xs"
                            >
                              {stat.sentiment}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Music Tab */}
        <TabsContent value="music" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Music Industry & Streaming" description="Global recorded music revenues and streaming platform metrics">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Music Revenue Sources</CardTitle>
                      <CardDescription>Streaming dominates at 69.6%</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={musicRevenueData}
                        height={220}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Market Performance</CardTitle>
                      <CardDescription>11th consecutive year of growth</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {data.section5_Music.marketRevenue.slice(0, 4).map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <span className="text-sm">{metric.metric}</span>
                            <span className="text-lg font-bold text-gold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Regional Performance */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Regional Music Market Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                      {data.section5_Music.regionalPerformance.map((region, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg border p-4"
                          style={{
                            borderColor: region.growth > 10 ? 'rgba(34, 197, 94, 0.5)' : 'rgba(100, 116, 139, 0.3)',
                            backgroundColor: region.growth > 10 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(100, 116, 139, 0.05)',
                          }}
                        >
                          <p className="text-sm font-medium">{region.region}</p>
                          <p className="mt-1 text-xl font-bold text-emerald">+{region.growth}%</p>
                          <p className="text-xs text-platinum-500 mt-1">Source: {region.source}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Physical Revival */}
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald">Physical Format Revival</CardTitle>
                    <CardDescription>Vinyl grows for 19th consecutive year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      {data.section5_Music.physicalRevival.map((item, idx) => (
                        <div key={idx} className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                          <p className="text-sm text-platinum-400">{item.metric}</p>
                          <p className="mt-1 text-lg font-bold text-emerald">{item.growth}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Podcast Tab */}
        <TabsContent value="podcast" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Podcast & Audio Industry" description="Market size, platform share, and advertising performance">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Podcast Platform Share</CardTitle>
                      <CardDescription>YouTube dominates at 42%</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={platformData}
                        height={220}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Market Size</CardTitle>
                      <CardDescription>$39.63B global market, 27.2% CAGR</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {data.section6_Podcast.marketSize.slice(0, 4).map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <span className="text-sm">{metric.metric}</span>
                            <span className="text-lg font-bold text-gold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Video Podcast Trends */}
                <Card className="glass-card border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple">Video Podcast Growth</CardTitle>
                    <CardDescription>53% of new US weekly listeners prefer video</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-4">
                      {data.section6_Podcast.videoTrends.map((item, idx) => (
                        <div key={idx} className="rounded-lg bg-purple-500/10 p-4 border border-purple-500/30 text-center">
                          <p className="text-xs text-platinum-400">{item.metric}</p>
                          <p className="mt-1 text-xl font-bold text-purple">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Top Ad Categories */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Podcast Ad Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {data.section6_Podcast.topAdCategories.map((category, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <span className="font-medium">{category.category}</span>
                          <Badge variant="gold">{category.share}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Gaming Tab */}
        <TabsContent value="gaming" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Gaming Industry" description="Market size, trends, and consumption data">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Gaming Market Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {data.section7_Gaming.marketSize.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div>
                              <p className="text-sm">{metric.metric}</p>
                              <p className="text-xs text-platinum-500">UAE: {metric.uaeRelevance}</p>
                            </div>
                            <span className="text-lg font-bold text-gold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Gaming Trends Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={gamingTrendsData}
                        xAxisKey="trend"
                        bars={[
                          { dataKey: 'impact', name: 'Impact Score', color: CHART_COLORS.gold },
                        ]}
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Fan vs Non-Fan Gaming */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Fan vs Non-Fan Gaming Rates</CardTitle>
                    <CardDescription>Deloitte 2026 Survey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {data.section7_Gaming.consumptionData.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <span className="text-sm">{item.metric}</span>
                          <div className="flex gap-4">
                            <Badge variant="success">Fans: {item.fans}</Badge>
                            <Badge variant="outline">Non-Fans: {item.nonFans}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* AI in Media Tab */}
        <TabsContent value="ai-media" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="AI in Media & Entertainment" description="AI adoption, content generation, and consumer attitudes">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">AI Adoption Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={aiAdoptionData}
                        xAxisKey="metric"
                        bars={[
                          { dataKey: 'value', name: 'Percentage', color: CHART_COLORS.gold },
                        ]}
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">AI Market Size</CardTitle>
                      <CardDescription>$85.36B projected by 2034</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {data.section8_AI.marketSize.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <span className="text-sm">{metric.metric}</span>
                            <span className="text-lg font-bold text-gold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Consumer Attitudes */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Consumer Attitudes Toward AI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {data.section8_AI.consumerAttitudes.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between rounded-lg p-3"
                          style={{
                            backgroundColor: item.sentiment === 'Negative' ? 'rgba(239, 68, 68, 0.1)' : item.sentiment === 'Positive' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(100, 116, 139, 0.1)',
                            borderWidth: '1px',
                            borderColor: item.sentiment === 'Negative' ? 'rgba(239, 68, 68, 0.3)' : item.sentiment === 'Positive' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(100, 116, 139, 0.3)',
                          }}
                        >
                          <span className="text-sm">{item.metric}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold">{item.value}</span>
                            <Badge variant={item.sentiment === 'Negative' ? 'destructive' : item.sentiment === 'Positive' ? 'success' : 'outline'} className="text-xs">
                              {item.sentiment}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Content Generation Concerns */}
                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-rose">AI Content Generation Concerns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {data.section8_AI.contentGeneration.map((item, idx) => (
                        <div key={idx} className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <p className="text-sm text-platinum-400">{item.metric}</p>
                          <p className="mt-1 text-xl font-bold text-rose">{item.value}</p>
                          <Badge variant="destructive" className="mt-2">{item.sentiment}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Consumption Tab */}
        <TabsContent value="consumption" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Media Consumption Behavior" description="Daily consumption, fan engagement, and generational differences">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Daily Media Consumption</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {data.section9_Consumption.dailyConsumption.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <span className="text-sm">{metric.metric}</span>
                            <span className="text-lg font-bold text-gold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Fan vs Non-Fan Engagement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {data.section9_Consumption.fanEngagement.slice(0, 4).map((item, idx) => (
                          <div key={idx} className="rounded-lg bg-platinum-800/50 p-3">
                            <p className="text-sm">{item.metric}</p>
                            <div className="mt-2 flex gap-4">
                              <Badge variant="success">Fans: {item.fans}</Badge>
                              <Badge variant="outline">Delta: {item.delta}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Gen Z Differences */}
                <Card className="glass-card border-gold-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-gold">Gen Z Media Behavior</CardTitle>
                    <CardDescription>Significant differences from other generations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {data.section9_Consumption.generationalDifferences.map((item, idx) => (
                        <div key={idx} className="rounded-lg bg-gold-500/10 p-4 border border-gold-500/30">
                          <p className="text-sm text-platinum-400">{item.metric}</p>
                          <p className="mt-1 text-xl font-bold text-gold">{item.genZ}</p>
                          <p className="text-xs text-platinum-500">vs Average: {item.vsAverage}</p>
                          <Badge variant="warning" className="mt-2">UAE: {item.uaeRelevance}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Discovery & Purchase */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Discovery & Purchase Behavior</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {data.section9_Consumption.discoveryPurchase.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <div>
                            <p className="text-sm">{item.metric}</p>
                            <p className="text-xs text-platinum-500">UAE: {item.uaeRelevance}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-emerald">{item.value}</span>
                            <Badge variant={item.sentiment === 'Positive' ? 'success' : item.sentiment === 'Negative' ? 'destructive' : 'outline'} className="ml-2 text-xs">
                              {item.sentiment}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Creator Economy Tab */}
        <TabsContent value="creator" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Creator Economy" description="Ad spend, micro-drama, and YouTube evolution">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Creator Economy Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {data.section10_Creator.marketSize.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div>
                              <p className="text-sm">{metric.metric}</p>
                              <p className="text-xs text-platinum-500">UAE: {metric.uaeRelevance}</p>
                            </div>
                            <span className="text-lg font-bold text-gold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Top Creators</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {data.section10_Creator.topCreators.map((creator, idx) => (
                          <div key={idx} className="rounded-lg bg-gold-500/10 p-4 border border-gold-500/30">
                            <p className="font-medium text-gold">{creator.creator}</p>
                            <p className="mt-1 text-lg font-bold">${creator.revenue}</p>
                            <p className="text-xs text-platinum-500 mt-1">{creator.notes}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* YouTube Evolution */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">YouTube Long-Form Evolution</CardTitle>
                    <CardDescription>22% → 47% share since 2020</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {data.section10_Creator.youtubeEvolution.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <span className="text-sm">{item.metric}</span>
                          <Badge variant="success">{item.change}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Economy Trends */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Creator Economy Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {data.section10_Creator.economyTrends.map((trend, idx) => (
                        <div key={idx} className="rounded-lg border border-platinum-700 p-4">
                          <p className="font-medium">{trend.trend}</p>
                          <p className="mt-1 text-sm text-platinum-400">{trend.impact}</p>
                          <Badge variant={trend.sentiment === 'Positive' || trend.sentiment === 'Very Positive' ? 'success' : trend.sentiment === 'Negative' ? 'destructive' : 'outline'} className="mt-2 text-xs">
                            {trend.sentiment}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Traditional Media Tab */}
        <TabsContent value="traditional" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Traditional Media Challenges" description="News industry decline and growth areas">
              <div className="space-y-6">
                {/* News Industry */}
                <Card className="glass-card border-rose-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-rose">News Industry Challenges</CardTitle>
                    <CardDescription>Historic lows in trust and confidence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {data.section12_Traditional.newsIndustry.map((metric, idx) => (
                        <div key={idx} className="rounded-lg bg-rose-500/10 p-4 border border-rose-500/30">
                          <p className="text-sm text-platinum-400">{metric.metric}</p>
                          <p className="mt-1 text-xl font-bold text-rose">{metric.value}</p>
                          <Badge variant="destructive" className="mt-2">{metric.sentiment}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Growth Areas */}
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg text-emerald">Growth Areas Despite Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-3">
                      {data.section12_Traditional.growthAreas.map((area, idx) => (
                        <div key={idx} className="rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30 text-center">
                          <p className="font-medium text-emerald">{area.area}</p>
                          <Badge variant="success" className="mt-2">{area.sentiment}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Mobile Tab */}
        <TabsContent value="mobile" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Mobile & Digital Infrastructure" description="Mobile entertainment, streaming infrastructure, and digital marketing ROI">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Mobile Entertainment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {data.section13_Mobile.entertainment.map((metric, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div>
                              <p className="text-sm">{metric.metric}</p>
                              <p className="text-xs text-platinum-500">UAE: {metric.uaeRelevance}</p>
                            </div>
                            <span className="text-lg font-bold text-gold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Digital Marketing ROI</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {data.section13_Mobile.emailDigitalMarketing.map((metric, idx) => (
                          <div key={idx} className="rounded-lg bg-emerald-500/10 p-3 border border-emerald-500/30">
                            <p className="text-sm">{metric.metric}</p>
                            <p className="mt-1 text-lg font-bold text-emerald">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Streaming Infrastructure */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Streaming Infrastructure</CardTitle>
                    <CardDescription>82% of global internet traffic is video</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                      {data.section13_Mobile.streamingInfrastructure.map((metric, idx) => (
                        <div key={idx} className="rounded-lg border border-platinum-700 p-4 text-center">
                          <p className="text-xs text-platinum-400">{metric.metric}</p>
                          <p className="mt-1 text-lg font-bold text-gold">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>

        {/* Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <GlassPanel title="Entity Registry" description="Companies, platforms, industry bodies, and geographic entities">
              <div className="space-y-6">
                {/* Platforms */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Platforms & Companies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {data.entityRegistry.platforms.map((entity, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div>
                              <p className="font-medium">{entity.entity}</p>
                              <p className="text-xs text-platinum-500">{entity.category}</p>
                            </div>
                            <Badge variant="outline">{entity.type}</Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Industry Bodies */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Industry Bodies & Organizations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[300px]">
                      <div className="space-y-2">
                        {data.entityRegistry.industryBodies.map((entity, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div>
                              <p className="font-medium">{entity.entity}</p>
                              <p className="text-xs text-platinum-500">{entity.category}</p>
                            </div>
                            <Badge variant="gold">{entity.type}</Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Geographic Entities */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Geographic Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                      {data.entityRegistry.geographic.map((entity, idx) => (
                        <div key={idx} className="rounded-lg border border-platinum-700 p-4">
                          <p className="font-medium">{entity.entity}</p>
                          <p className="text-xs text-platinum-500 mt-1">{entity.notes}</p>
                          <Badge variant="outline" className="mt-2 text-xs">{entity.region}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}