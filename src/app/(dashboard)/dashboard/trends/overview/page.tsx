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
  RadarChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import { motion } from 'framer-motion'
import {
  AlertCircle,
  AlertTriangle,
  Globe,
  Hash,
  Lightbulb,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
  Crown,
  Newspaper,
  Brain,
  ChartLine,
  Target,
  Sparkles,
  Compass,
  AlertOctagon,
  TrendingDown,
  Milestone,
  Tv2,
  Megaphone,
  Music,
  Gamepad2,
  Bot,
} from 'lucide-react'
import {
  useTrendsOverviewData,
  useTrendsDataArrayData,
  mediaIndustryExtendedData,
} from '@/lib/data-loader'
import {
  regulatoryTrendsData,
  kpiDashboard,
  timelineEvents,
  fineAmounts,
  keyLegislation,
  regulatoryBodies,
  regulatoryTrendsSummary,
  regulatorySentimentAnalysis,
} from '@/lib/data-loader/trends-data'

export default function TrendsOverviewPage() {
  const { data: overviewData } = useTrendsOverviewData()
  const { data: trendsData } = useTrendsDataArrayData()

  if (!trendsData || trendsData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-platinum-400">Loading Trends data...</div>
      </div>
    )
  }

  // Aggregate metrics from all trends
  const totalAdoption = trendsData.reduce((sum, t) => sum + (t.uaeAdoptionRate || 0), 0) / trendsData.length
  const avgSentiment = trendsData.reduce((sum, t) => sum + (t.sentiment?.positive || 0), 0) / trendsData.length
  const totalVolume = trendsData.reduce((sum, t) => sum + (t.sentiment?.volume || 0), 0)

  // Trend categories for overview
  const trendCategories = trendsData.map(t => ({
    name: t.name,
    adoption: t.uaeAdoptionRate || 0,
    sentiment: t.sentiment?.positive || 0,
    category: t.category,
    alert: t.alertLevel,
  }))

  // Sentiment distribution across trends
  const sentimentDistribution = [
    { name: 'Positive', value: Math.round(avgSentiment), color: CHART_COLORS.emerald },
    { name: 'Neutral', value: Math.round(100 - avgSentiment - 15), color: CHART_COLORS.platinum },
    { name: 'Concern', value: 15, color: CHART_COLORS.rose },
  ]

  // Adoption rate by category
  const adoptionByCategory = trendsData.map(t => ({
    name: t.name.split(' ')[0],
    value: t.uaeAdoptionRate || 0,
    color: t.uaeAdoptionRate > 85 ? CHART_COLORS.gold : t.uaeAdoptionRate > 75 ? CHART_COLORS.navy : CHART_COLORS.platinum,
  }))

  // Generation breakdown for AI trends as example
  const aiTrend = trendsData.find(t => t.category === 'ai-technology')
  const generationalData = aiTrend ? [
    { name: 'Gen Z', value: aiTrend.generationalBreakdown?.genZ || 0, color: CHART_COLORS.gold },
    { name: 'Millennial', value: aiTrend.generationalBreakdown?.millennial || 0, color: CHART_COLORS.navy },
    { name: 'Gen X', value: aiTrend.generationalBreakdown?.genX || 0, color: CHART_COLORS.platinum },
    { name: 'Boomer', value: aiTrend.generationalBreakdown?.boomer || 0, color: CHART_COLORS.emerald },
  ] : []

  // Alert summary
  const greenAlerts = trendsData.filter(t => t.alertLevel === 'GREEN').length
  const yellowAlerts = trendsData.filter(t => t.alertLevel === 'YELLOW').length
  const redAlerts = trendsData.filter(t => t.alertLevel === 'RED').length

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">TRENDS INTELLIGENCE</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold">Trends Overview</h1>
          <p className="mt-2 text-slate-400">
            Cross-sector trend analysis, adoption metrics, and predictive foresight for the UAE
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Target className="h-4 w-4" />
            View Forecasts
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Sparkles className="h-4 w-4" />
            Analyze Trends
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Avg Adoption Rate"
          value={`${Math.round(totalAdoption)}%`}
          previousValue={Math.round(totalAdoption) - 3}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Active Trends"
          value={trendsData.length.toString()}
          previousValue={trendsData.length - 1}
          icon={<ChartLine className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Avg Sentiment"
          value={`${Math.round(avgSentiment)}%`}
          previousValue={Math.round(avgSentiment) - 2}
          icon={<Brain className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Media Volume"
          value={totalVolume > 1000000 ? `${(totalVolume / 1000000).toFixed(1)}M` : `${(totalVolume / 1000).toFixed(0)}K`}
          previousValue={totalVolume * 0.92}
          icon={<Newspaper className="h-6 w-6" />}
          gradient="indigo"
        />
      </div>

      {/* Predictive Foresight Highlight Panel */}
      {(() => {
        const foresightTrend = trendsData.find(t => t.category === 'predictive-foresight')
        if (!foresightTrend) return null
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel
              title="Predictive Foresight Insights"
              description={`${foresightTrend.uaeRelevance.level.toUpperCase()} relevance | ${foresightTrend.credibility.score}% credibility | Alert: ${foresightTrend.alertLevel}`}
            >
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card border-gold/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Compass className="h-4 w-4 text-gold" />
                      Vision Alignment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400">UAE Relevance</span>
                        <Badge variant="gold">{foresightTrend.uaeRelevance.score}/100</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400">Adoption Rate</span>
                        <span className="text-sm font-medium text-gold">{foresightTrend.uaeAdoptionRate}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400">Credibility</span>
                        <span className="text-sm font-medium text-emerald-400">{foresightTrend.credibility.score}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-yellow-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <AlertOctagon className="h-4 w-4 text-yellow-400" />
                      Crisis Indicators
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-slate-300">Oil: 2.37M bpd (-35%)</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span className="text-slate-300">GDP: 3.1% - 5.6% range</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span className="text-slate-300">Property: -7% annually</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                      Growth Targets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-gold">•</span>
                        <span className="text-slate-300">AI: $3.47B to $46.33B (43.9% CAGR)</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-gold">•</span>
                        <span className="text-slate-300">Jobs: +1.03M by 2030</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-gold">•</span>
                        <span className="text-slate-300">GDP: AED 3T target by 2031</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {foresightTrend.keyFindings && foresightTrend.keyFindings.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-slate-200 mb-3">Key Findings</h4>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {foresightTrend.keyFindings.slice(0, 4).map((finding, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-slate-200 truncate">{finding.finding}</p>
                          <p className="text-xs text-slate-400 mt-1 truncate">{finding.metric}</p>
                        </div>
                        <Badge
                          variant={finding.alert === 'RED' ? 'destructive' : finding.alert === 'YELLOW' ? 'warning' : 'secondary'}
                          className="text-xs shrink-0"
                        >
                          T{finding.tier}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </GlassPanel>
          </motion.div>
        )
      })()}

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="adoption">Adoption Analysis</TabsTrigger>
          <TabsTrigger value="alerts">Alert Status</TabsTrigger>
          <TabsTrigger value="forecast">Forecasts</TabsTrigger>
          <TabsTrigger value="predictive">Predictive</TabsTrigger>
          <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
          <TabsTrigger value="media">Media Industry</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Trends Overview" description="Key trend indicators and sentiment analysis">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Trend Adoption Rates</CardTitle>
                  <CardDescription>UAE adoption rate across all tracked trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={adoptionByCategory}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Adoption %', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
                    <CardDescription>Overall sentiment across trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={sentimentDistribution}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Alert Status Summary</CardTitle>
                    <CardDescription>Current alert levels across all trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                        <div className="flex items-center gap-3">
                          <Shield className="h-6 w-6 text-emerald-400" />
                          <span className="font-medium text-slate-200">Green Alerts</span>
                        </div>
                        <span className="text-2xl font-bold text-emerald-400">{greenAlerts}</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30">
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="h-6 w-6 text-yellow-400" />
                          <span className="font-medium text-slate-200">Yellow Alerts</span>
                        </div>
                        <span className="text-2xl font-bold text-yellow-400">{yellowAlerts}</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-red-500/10 p-4 border border-red-500/30">
                        <div className="flex items-center gap-3">
                          <AlertCircle className="h-6 w-6 text-red-400" />
                          <span className="font-medium text-slate-200">Red Alerts</span>
                        </div>
                        <span className="text-2xl font-bold text-red-400">{redAlerts}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Adoption Analysis Tab */}
        <TabsContent value="adoption" className="space-y-6">
          <GlassPanel title="Adoption Analysis" description="Detailed adoption metrics by trend category">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Generational Adoption Breakdown</CardTitle>
                  <CardDescription>AI Technology adoption by generation</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={generationalData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Adoption %', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {trendsData.map((trend, idx) => (
                  <Card key={idx} className="glass-card">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-slate-200 text-sm">{trend.name}</span>
                        <Badge
                          variant={trend.alertLevel === 'GREEN' ? 'success' : trend.alertLevel === 'YELLOW' ? 'warning' : 'destructive'}
                          className="text-xs"
                        >
                          {trend.alertLevel}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>UAE Adoption</span>
                          <span>{trend.uaeAdoptionRate}%</span>
                        </div>
                        <Progress value={trend.uaeAdoptionRate} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Alerts Tab */}
        <TabsContent value="alerts" className="space-y-6">
          <GlassPanel title="Alert Status" description="Current alert levels and critical findings">
            <div className="space-y-6">
              {trendsData.filter(t => t.alertLevel === 'RED').length > 0 && (
                <Card className="glass-card border-red-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-red-400">
                      <AlertCircle className="h-5 w-5" />
                      Red Alert Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {trendsData.filter(t => t.alertLevel === 'RED').map((trend, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-red-500/10 p-4 border border-red-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{trend.name}</p>
                            <p className="mt-1 text-sm text-slate-400">{trend.description?.slice(0, 150)}...</p>
                          </div>
                          <Badge variant="destructive" className="ml-4">RED</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {trendsData.filter(t => t.alertLevel === 'YELLOW').length > 0 && (
                <Card className="glass-card border-yellow-500/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-yellow-400">
                      <AlertTriangle className="h-5 w-5" />
                      Yellow Alert Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {trendsData.filter(t => t.alertLevel === 'YELLOW').map((trend, idx) => (
                        <div key={idx} className="flex items-start justify-between rounded-lg bg-yellow-500/10 p-4 border border-yellow-500/30">
                          <div className="flex-1">
                            <p className="font-medium text-slate-200">{trend.name}</p>
                            <p className="mt-1 text-sm text-slate-400">UAE Adoption: {trend.uaeAdoptionRate}%</p>
                          </div>
                          <Badge variant="warning" className="ml-4">YELLOW</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="glass-card border-emerald-500/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-emerald-400">
                    <Shield className="h-5 w-5" />
                    Green Status Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {trendsData.filter(t => t.alertLevel === 'GREEN').map((trend, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-4 border border-emerald-500/30">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="h-5 w-5 text-emerald-400" />
                            <span className="font-medium text-slate-200">{trend.name}</span>
                          </div>
                          <span className="text-sm text-emerald-400">{trend.uaeAdoptionRate}% adoption</span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Forecasts Tab */}
        <TabsContent value="forecast" className="space-y-6">
          <GlassPanel title="Trend Forecasts" description="Predictive scenarios and key indicators">
            <div className="space-y-6">
              {trendsData.slice(0, 5).map((trend, idx) => (
                <Card key={idx} className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{trend.name}</CardTitle>
                    <CardDescription>{trend.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trend.forecasts?.slice(0, 3).map((forecast, fIdx) => (
                        <div key={fIdx} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge
                              variant={forecast.scenario === 'optimistic' ? 'success' : forecast.scenario === 'baseline' ? 'default' : 'destructive'}
                              className="capitalize"
                            >
                              {forecast.scenario}
                            </Badge>
                            <span className="text-sm text-slate-400">
                              Probability: {Math.round(forecast.probability * 100)}%
                            </span>
                          </div>
                          <p className="text-sm text-slate-300 mb-2">Timeline: {forecast.timeline}</p>
                          <div className="space-y-1">
                            {forecast.indicators?.slice(0, 3).map((indicator, iIdx) => (
                              <p key={iIdx} className="text-xs text-slate-400 flex items-start gap-2">
                                <span className="text-gold">•</span>
                                {indicator}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Predictive Tab */}
        <TabsContent value="predictive" className="space-y-6">
          <GlassPanel title="Predictive Foresight" description="Strategic foresight, crisis indicators, and vision framework alignment">
            <div className="space-y-6">
              {/* Vision Frameworks */}
              <Card className="glass-card border-gold/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Compass className="h-5 w-5 text-gold" />
                    Vision Frameworks
                  </CardTitle>
                  <CardDescription>Official state policy and funding commitments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { name: 'We The UAE 2031', target: 'GDP AED 3T by 2031', progress: '50%' },
                      { name: 'Dubai D33', target: 'AED 25.6T trade by 2033', progress: '65%' },
                      { name: 'Net Zero 2050', target: 'Net-zero emissions', progress: '35%' },
                      { name: 'National AI Strategy', target: '$46.33B AI market by 2030', progress: '25%' },
                      { name: 'Clean Energy 2050', target: '50% clean energy', progress: '40%' },
                      { name: 'Centennial Plan 2071', target: 'Mars settlement 2117', progress: '15%' },
                    ].map((vision, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50"
                      >
                        <p className="text-sm font-medium text-slate-200">{vision.name}</p>
                        <p className="text-xs text-slate-400 mt-1">{vision.target}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Progress value={parseInt(vision.progress)} className="h-1 flex-1" />
                          <span className="text-xs text-gold">{vision.progress}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Scenario Analysis */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card border-emerald-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2 text-emerald-400">
                      <TrendingUp className="h-4 w-4" />
                      Optimistic Scenario
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-slate-400">Probability</span>
                        <Badge variant="success" className="text-xs">78%</Badge>
                      </div>
                      <div className="space-y-1 mt-3">
                        {['GDP growth 5.6%', 'AI market $46.33B by 2030', 'Workforce +12.1%', 'FDI $45B'].map((item, i) => (
                          <p key={i} className="text-xs text-slate-300 flex items-center gap-2">
                            <span className="text-emerald-400">✓</span>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-platinum-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2 text-platinum-400">
                      <ChartLine className="h-4 w-4" />
                      Baseline Scenario
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-slate-400">Probability</span>
                        <Badge variant="secondary" className="text-xs">65%</Badge>
                      </div>
                      <div className="space-y-1 mt-3">
                        {['AI $46-91B by 2030/31', 'Digital economy 20%', 'Population 13.6M', 'Clean energy 14 GW'].map((item, i) => (
                          <p key={i} className="text-xs text-slate-300 flex items-center gap-2">
                            <span className="text-platinum-400">•</span>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-red-500/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2 text-red-400">
                      <TrendingDown className="h-4 w-4" />
                      Pessimistic Scenario
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-slate-400">Probability</span>
                        <Badge variant="destructive" className="text-xs">35%</Badge>
                      </div>
                      <div className="space-y-1 mt-3">
                        {['Oil 2.37M bpd (-35%)', 'Property -7% annually', 'GDP 3.1% (IMF)', 'Safe haven at risk'].map((item, i) => (
                          <p key={i} className="text-xs text-slate-300 flex items-center gap-2">
                            <span className="text-red-400">!</span>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Crisis Monitoring */}
              <Card className="glass-card border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertOctagon className="h-5 w-5 text-red-400" />
                    Active Crisis Indicators
                  </CardTitle>
                  <CardDescription>April 2026 Iran war impact monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { metric: 'Oil Production', value: '2.37M bpd', change: '-35%', severity: 'critical' },
                      { metric: 'Central Bank Injection', value: '$8B', change: 'Deployed', severity: 'warning' },
                      { metric: 'Safe Haven Risk', value: '70%', change: 'Risk premia', severity: 'warning' },
                      { metric: 'Export Capacity', value: '6.8M bpd', change: 'Alt routes', severity: 'stable' },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-3 rounded-lg border ${
                          item.severity === 'critical' ? 'bg-red-500/10 border-red-500/30' :
                          item.severity === 'warning' ? 'bg-yellow-500/10 border-yellow-500/30' :
                          'bg-emerald-500/10 border-emerald-500/30'
                        }`}
                      >
                        <p className="text-xs text-slate-400">{item.metric}</p>
                        <p className={`text-lg font-bold ${
                          item.severity === 'critical' ? 'text-red-400' :
                          item.severity === 'warning' ? 'text-yellow-400' :
                          'text-emerald-400'
                        }`}>{item.value}</p>
                        <p className="text-xs text-slate-400">{item.change}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Drivers */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Milestone className="h-5 w-5 text-gold" />
                    Key Growth Drivers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {(() => {
                      const foresightTrend = trendsData.find(t => t.category === 'predictive-foresight')
                      return foresightTrend?.keyDrivers?.slice(0, 6).map((driver, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-2 p-2 rounded bg-slate-800/30"
                        >
                          <span className="text-gold shrink-0">•</span>
                          <span className="text-xs text-slate-300">{driver}</span>
                        </motion.div>
                      ))
                    })()}
                  </div>
                </CardContent>
              </Card>

              {/* Sources */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-400" />
                    Source Credibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { tier: 'T0', sources: ['UAE Government', 'Central Bank', 'Masdar'], color: 'emerald' },
                      { tier: 'T1', sources: ['World Bank', 'IMF', 'The National'], color: 'blue' },
                      { tier: 'T2', sources: ['GVR', 'LinkedIn', 'TechSci'], color: 'platinum' },
                      { tier: 'T3', sources: ['Horse & Houses', 'Chainex'], color: 'yellow' },
                    ].map((group, idx) => (
                      <div key={idx} className="p-3 rounded bg-slate-800/30">
                        <Badge variant={group.color === 'emerald' ? 'success' : group.color === 'blue' ? 'default' : 'secondary'} className="mb-2">
                          Tier {group.tier}
                        </Badge>
                        <div className="space-y-1">
                          {group.sources.map((source, i) => (
                            <p key={i} className="text-xs text-slate-400">{source}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Regulatory Tab */}
        <TabsContent value="regulatory" className="space-y-6">
          <GlassPanel
            title="Regulatory Trends Dashboard"
            description={`UAE Regulatory Environment 2025-2026 | Alert: ${regulatoryTrendsData.alertLevel} | Credibility: ${regulatoryTrendsData.credibility.score}% | Sources: ${regulatoryTrendsData.credibility.sources}`}
          >
            <div className="space-y-6">
              {/* KPI Dashboard */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-gold" />
                    KPI Dashboard
                  </CardTitle>
                  <CardDescription>Key regulatory metrics from MD file 10-7</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {kpiDashboard.slice(0, 8).map((kpi, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50"
                      >
                        <p className="text-xs text-slate-400 truncate">{kpi.kpi}</p>
                        <p className={`text-lg font-bold ${
                          kpi.trend.includes('+') ? 'text-emerald-400' :
                          kpi.trend.includes('New') || kpi.trend.includes('Increased') ? 'text-gold' :
                          'text-slate-200'
                        }`}>{kpi.currentValue}</p>
                        <p className="text-xs text-slate-500 truncate">{kpi.trend}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Legislation */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Milestone className="h-5 w-5 text-emerald-400" />
                    Key Legislation
                  </CardTitle>
                  <CardDescription>Major UAE regulatory laws and effective dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {keyLegislation.slice(0, 8).map((law, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30"
                      >
                        <Badge
                          variant={law.status === 'Active' ? 'success' : law.status === 'Upcoming' ? 'warning' : 'secondary'}
                          className="shrink-0 mt-0.5"
                        >
                          {law.status}
                        </Badge>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-slate-200 truncate">{law.lawName}</p>
                          <p className="text-xs text-slate-400">{law.number}</p>
                          <p className="text-xs text-slate-500 mt-1">Effective: {law.effectiveDate}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Fine Structure Matrix */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-rose-400" />
                    Fine Structure Matrix
                  </CardTitle>
                  <CardDescription>Regulatory fine ranges across UAE jurisdictions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {fineAmounts.slice(0, 6).map((fine, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-700/30"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-200 truncate">{fine.regulation}</p>
                          <p className="text-xs text-slate-400">{fine.notes}</p>
                        </div>
                        <div className="text-right shrink-0 ml-4">
                          <p className="text-sm font-bold text-rose-400">
                            {fine.currency} {fine.maxFine.toLocaleString()}
                          </p>
                          <p className="text-xs text-slate-500">max fine</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-gold" />
                    Compliance Timeline
                  </CardTitle>
                  <CardDescription>Key regulatory deadlines and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {timelineEvents.slice(0, 10).map((event, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/30"
                      >
                        <div className={`w-2 h-2 rounded-full shrink-0 ${
                          event.status === 'Passed' ? 'bg-emerald-400' :
                          event.status === 'Upcoming' ? 'bg-gold' :
                          'bg-yellow-400'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-slate-200 truncate">{event.event}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs text-slate-400">{event.date}</p>
                          <Badge
                            variant={event.status === 'Passed' ? 'success' : event.status === 'Upcoming' ? 'warning' : 'secondary'}
                            className="text-xs mt-1"
                          >
                            {event.status}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Regulatory Bodies */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-400" />
                    Regulatory Bodies
                  </CardTitle>
                  <CardDescription>Key UAE regulatory authorities and jurisdictions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {regulatoryBodies.slice(0, 9).map((body, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.03 }}
                        className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/30"
                      >
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="shrink-0 text-xs">
                            {body.jurisdiction}
                          </Badge>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-slate-200 truncate">{body.entity}</p>
                            <p className="text-xs text-slate-400 mt-1 line-clamp-2">{body.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sentiment by Topic */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-400" />
                    Sentiment Analysis by Topic
                  </CardTitle>
                  <CardDescription>Source sentiment across regulatory themes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regulatorySentimentAnalysis.map((topic, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium text-slate-200">{topic.topic}</h4>
                          <Badge
                            variant={
                              topic.overallSentiment.includes('POSITIVE') ? 'success' :
                              topic.overallSentiment.includes('NEUTRAL') ? 'secondary' :
                              'warning'
                            }
                            className="text-xs"
                          >
                            {topic.overallSentiment}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-400 mb-2">{topic.analysis}</p>
                        <div className="flex flex-wrap gap-1">
                          {topic.sources.slice(0, 3).map((source, sIdx) => (
                            <Badge key={sIdx} variant="outline" className="text-xs">
                              {source.source}: {source.sentiment}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Source Credibility */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5 text-emerald-400" />
                    Source Credibility Matrix
                  </CardTitle>
                  <CardDescription>Data source tier rankings (Tier 0-4)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { tier: 'T0', name: 'Official', sources: ['UAE Government'], color: 'emerald' },
                      { tier: 'T1', name: 'BigLaw/Big4', sources: ['Chambers', 'Baker McKenzie', 'KPMG', 'EY'], color: 'blue' },
                      { tier: 'T2', name: 'Regional', sources: ['BSA Law', 'CMS Law', 'Meydan FZ'], color: 'platinum' },
                      { tier: 'T3', name: 'Industry', sources: ['Cookie Script', 'Zevero', 'GulfBridge'], color: 'yellow' },
                    ].map((group, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/30"
                      >
                        <Badge
                          variant={group.color === 'emerald' ? 'success' : group.color === 'blue' ? 'default' : 'secondary'}
                          className="mb-2"
                        >
                          {group.tier} - {group.name}
                        </Badge>
                        <div className="space-y-1">
                          {group.sources.map((source, i) => (
                            <p key={i} className="text-xs text-slate-400">{source}</p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Regulatory Trends Summary */}
              <Card className="glass-card border-gold/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-gold" />
                    Key Regulatory Trends Summary
                  </CardTitle>
                  <CardDescription>Five major regulatory trends from MD file 10-7</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regulatoryTrendsSummary.map((trend, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="p-4 rounded-lg bg-slate-800/30 border border-gold/20"
                      >
                        <h4 className="text-sm font-bold text-gold mb-2">{trend.trendName}</h4>
                        <div className="space-y-1">
                          {trend.keyPoints.slice(0, 4).map((point, pIdx) => (
                            <p key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-gold shrink-0">•</span>
                              <span>{point}</span>
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Media Industry Tab */}
        <TabsContent value="media" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Media Industry Key Metrics */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Global E&M Market"
                value={`$${mediaIndustryExtendedData.globalEMarket.size2026.toFixed(0)}B`}
                icon={<Globe className="h-6 w-6" />}
                gradient="gold"
                status="success"
              />
              <MetricCard
                title="Streaming Share"
                value={`${mediaIndustryExtendedData.streaming.streamingShareOfTVUsage}%`}
                icon={<Tv2 className="h-6 w-6" />}
                gradient="denim"
                status="success"
              />
              <MetricCard
                title="Digital Ad Spend"
                value={`$${mediaIndustryExtendedData.digitalAds.globalDigitalAdSpending.toFixed(0)}B`}
                icon={<Megaphone className="h-6 w-6" />}
                gradient="emerald"
              />
              <MetricCard
                title="Music Revenue"
                value={`$${mediaIndustryExtendedData.music.globalRecordedMusicRevenue}B`}
                icon={<Music className="h-6 w-6" />}
                gradient="indigo"
              />
            </div>

            {/* Media Market Overview */}
            <GlassPanel title="Media Industry Overview" description="Global entertainment and media market metrics from MD file 10-8">
              <div className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Market Size Chart */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="h-5 w-5 text-gold" />
                        Media Market Size ($B)
                      </CardTitle>
                      <CardDescription>2026 market valuation by sector</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BarChart
                        data={[
                          { name: 'Streaming', value: mediaIndustryExtendedData.streaming.globalVideoStreamingMarket, color: CHART_COLORS.gold },
                          { name: 'Digital Ads', value: mediaIndustryExtendedData.digitalAds.globalDigitalAdSpending, color: CHART_COLORS.navy },
                          { name: 'Gaming', value: mediaIndustryExtendedData.gaming.globalGamingMarket, color: CHART_COLORS.emerald },
                        ]}
                        xAxisKey="name"
                        bars={[
                          { dataKey: 'value', name: 'Value', color: CHART_COLORS.gold },
                        ]}
                        height={250}
                        showGrid={true}
                      />
                    </CardContent>
                  </Card>

                  {/* Ad Spend Breakdown */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Megaphone className="h-5 w-5 text-navy" />
                        Digital Ad Spend Breakdown
                      </CardTitle>
                      <CardDescription>2026 advertising spend by type</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <PieChart
                        data={[
                          { name: 'Search', value: mediaIndustryExtendedData.digitalAds.searchAdvertising, color: CHART_COLORS.gold },
                          { name: 'Video', value: mediaIndustryExtendedData.digitalAds.videoAdvertising, color: CHART_COLORS.navy },
                          { name: 'Social', value: mediaIndustryExtendedData.digitalAds.socialMediaAdSpending, color: CHART_COLORS.emerald },
                        ]}
                        height={250}
                        showLegend={true}
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Growth Metrics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald" />
                      Growth Indicators (% YoY)
                    </CardTitle>
                    <CardDescription>Year-over-year growth rates across media sectors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { name: 'E&M Market', value: mediaIndustryExtendedData.globalEMarket.cagr, color: CHART_COLORS.gold },
                        { name: 'Streaming TV', value: mediaIndustryExtendedData.streaming.streamingShareOfTVUsage, color: CHART_COLORS.navy },
                        { name: 'CTV Ads', value: mediaIndustryExtendedData.streaming.USCTVAdSpendingGrowth, color: CHART_COLORS.emerald },
                        { name: 'Music Rev', value: mediaIndustryExtendedData.music.revenueGrowth, color: CHART_COLORS.rose },
                        { name: 'MENA Music', value: mediaIndustryExtendedData.music.menaGrowth, color: CHART_COLORS.platinum },
                      ]}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Growth %', color: CHART_COLORS.emerald },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>

            {/* Streaming & CTV */}
            <GlassPanel title="Streaming & Connected TV" description="OTT streaming trends and CTV advertising growth">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-4"
                  >
                    <Tv2 className="h-8 w-8 text-gold mb-2" />
                    <p className="text-2xl font-bold text-gold">${mediaIndustryExtendedData.streaming.globalVideoStreamingMarket}B</p>
                    <p className="text-sm text-slate-400">Video Streaming Market</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-navy/30 bg-gradient-to-br from-navy/10 to-transparent p-4"
                  >
                    <Tv2 className="h-8 w-8 text-navy mb-2" />
                    <p className="text-2xl font-bold text-navy">${mediaIndustryExtendedData.streaming.USCTVAdSpending}B</p>
                    <p className="text-sm text-slate-400">US CTV Ad Spending</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-emerald/30 bg-gradient-to-br from-emerald/10 to-transparent p-4"
                  >
                    <TrendingUp className="h-8 w-8 text-emerald mb-2" />
                    <p className="text-2xl font-bold text-emerald">+{mediaIndustryExtendedData.streaming.USCTVAdSpendingGrowth}%</p>
                    <p className="text-sm text-slate-400">CTV Growth YoY</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-platinum/30 bg-gradient-to-br from-platinum/10 to-transparent p-4"
                  >
                    <Users className="h-8 w-8 text-platinum mb-2" />
                    <p className="text-2xl font-bold text-platinum">{mediaIndustryExtendedData.streaming.globalSVODSubscriptions}B</p>
                    <p className="text-sm text-slate-400">SVOD Subscriptions</p>
                  </motion.div>
                </div>
              </div>
            </GlassPanel>

            {/* Gaming & AI */}
            <GlassPanel title="Gaming & AI in Media" description="Gaming industry metrics and AI disruption in content creation">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Gaming Metrics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Gamepad2 className="h-5 w-5 text-emerald" />
                      Gaming Industry
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Global Gaming Market</span>
                        <span className="text-xl font-bold text-emerald">${mediaIndustryExtendedData.gaming.globalGamingMarket}B+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">In-Game Advertising</span>
                        <span className="text-xl font-bold text-emerald">${mediaIndustryExtendedData.gaming.inGameAdvertising}B</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Gaming Employment</span>
                        <span className="text-xl font-bold text-emerald">{mediaIndustryExtendedData.gaming.gamingEmployment}M+ roles</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Metrics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Bot className="h-5 w-5 text-rose" />
                      AI in Media
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">AI in M&E Market (2034)</span>
                        <span className="text-xl font-bold text-rose">${mediaIndustryExtendedData.ai.aiInMediaMarket}B</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Creators Using GenAI</span>
                        <span className="text-xl font-bold text-rose">{mediaIndustryExtendedData.ai.creatorsUsingGenAI}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">AI Content Projection</span>
                        <span className="text-xl font-bold text-rose">{mediaIndustryExtendedData.ai.aiGeneratedOnlineContentProjection}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </GlassPanel>

            {/* Key Takeaways */}
            <GlassPanel title="Key Industry Takeaways" description="Critical insights from media industry trends">
              <div className="space-y-3">
                {mediaIndustryExtendedData.keyTakeaways.slice(0, 8).map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`rounded-lg p-4 border ${
                      item.sentiment === 'Very Positive' ? 'bg-emerald-500/10 border-emerald-500/30' :
                      item.sentiment === 'Positive' ? 'bg-gold/10 border-gold/30' :
                      item.sentiment === 'Mixed' ? 'bg-yellow-500/10 border-yellow-500/30' :
                      'bg-red-500/10 border-red-500/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs font-bold">
                          {item.priority}
                        </span>
                        <p className="text-sm text-slate-200">{item.takeaway}</p>
                      </div>
                      <Badge
                        variant={item.uaeRelevance === 'Critical' ? 'destructive' : 'outline'}
                        className="shrink-0"
                      >
                        {item.uaeRelevance}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
