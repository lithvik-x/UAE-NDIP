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
import {
  Trophy,
  Star,
  Users,
  TrendingUp,
  Globe,
  DollarSign,
  Flag,
  Target,
  Award,
} from 'lucide-react'
import {
  useSportsIntelligenceData,
} from '@/lib/data-loader'

export default function SportsIntelligencePage() {
  const { data } = useSportsIntelligenceData()

  // Extract metrics from data
  const sportswashingIndex = data?.metrics?.sportswashingIndex || 68
  const majorEvents = data?.metrics?.majorEvents || 24
  const f1GrandPrix = data?.metrics?.f1GrandPrix || 1
  const manchesterCity = data?.metrics?.manchesterCity || 1

  // Sentiment distribution
  const sentimentData = [
    { name: 'Positive', value: 55, color: CHART_COLORS.emerald },
    { name: 'Neutral', value: 30, color: CHART_COLORS.platinum },
    { name: 'Critical', value: 15, color: CHART_COLORS.danger },
  ]

  // Sports investment by type
  const investmentData = [
    { name: 'Football (MCI)', value: 38, color: CHART_COLORS.navy },
    { name: 'F1/GCC Events', value: 25, color: CHART_COLORS.gold },
    { name: 'Tennis', value: 12, color: CHART_COLORS.platinum },
    { name: 'Golf', value: 10, color: CHART_COLORS.emerald },
    { name: 'Other', value: 15, color: CHART_COLORS.teal },
  ]

  // Event attendance data
  const attendanceData = [
    { name: 'F1 Abu Dhabi GP', value: 170, color: CHART_COLORS.gold },
    { name: 'Dubai Marathon', value: 35, color: CHART_COLORS.navy },
    { name: 'Doha Athletics', value: 45, color: CHART_COLORS.platinum },
    { name: 'Saudi F1 GP', value: 150, color: CHART_COLORS.rose },
    { name: 'Regional Events', value: 85, color: CHART_COLORS.cyan },
  ]

  // Monthly brand sentiment
  const brandTrendData = [
    { month: 'Jan', sentiment: 62, reach: 85 },
    { month: 'Feb', sentiment: 63, reach: 88 },
    { month: 'Mar', sentiment: 64, reach: 90 },
    { month: 'Apr', sentiment: 65, reach: 92 },
    { month: 'May', sentiment: 66, reach: 95 },
    { month: 'Jun', sentiment: 67, reach: 98 },
    { month: 'Jul', sentiment: 68, reach: 100 },
    { month: 'Aug', sentiment: 68, reach: 102 },
    { month: 'Sep', sentiment: 69, reach: 105 },
    { month: 'Oct', sentiment: 69, reach: 108 },
    { month: 'Nov', sentiment: 70, reach: 110 },
    { month: 'Dec', sentiment: 70, reach: 112 },
  ]

  // Key sports entities
  const keyEntities = [
    { name: 'Manchester City FC', type: 'Football', ownership: '100%', sentiment: 78, brandValue: 1.5 },
    { name: 'Abu Dhabi F1 GP', type: 'Motorsport', ownership: 'Government', sentiment: 85, brandValue: 0.8 },
    { name: 'UAE Team Emirates', type: 'Cycling', ownership: 'Government', sentiment: 72, brandValue: 0.3 },
    { name: 'Davis Cup', type: 'Tennis', ownership: 'ITF/UAE', sentiment: 68, brandValue: 0.2 },
    { name: 'Dubai World Cup', type: 'Horse Racing', ownership: 'Government', sentiment: 82, brandValue: 0.6 },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 70) return 'text-emerald-400'
    if (score >= 50) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="platinum" className="mb-2">S-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-platinum">Sports Intelligence</h1>
          <p className="mt-2 text-slate-400">
            Sportswashing analysis, F1 monitoring, and sports diplomacy tracking
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-platinum/50 text-platinum hover:bg-platinum/10">
            <Target className="h-4 w-4" />
            Sports Monitor
          </Button>
          <Button className="bg-gradient-platinum hover:opacity-90 text-navy-950 gap-2">
            <Trophy className="h-4 w-4" />
            Track Event
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Sportswashing Index"
          value={sportswashingIndex}
          previousValue={sportswashingIndex + 3}
          icon={<Target className="h-6 w-6" />}
          gradient="platinum"
          status="warning"
        />
        <MetricCard
          title="Major Events (Annual)"
          value={majorEvents}
          previousValue={majorEvents - 2}
          icon={<Trophy className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="F1 Grand Prix Events"
          value={f1GrandPrix}
          previousValue={f1GrandPrix}
          icon={<Globe className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="MCFC Ownership %"
          value={manchesterCity}
          previousValue={manchesterCity}
          icon={<Flag className="h-6 w-6" />}
          gradient="emerald"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="entities">Key Entities</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
          <TabsTrigger value="trends">Brand Trends</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Sports Intelligence Overview" description="UAE sports investment and brand positioning">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sports Investment Distribution</CardTitle>
                    <CardDescription>By sport type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={investmentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Event Attendance (Thousands)</CardTitle>
                    <CardDescription>Major sports events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={attendanceData}
                      xAxisKey="name"
                      bars={[
                        { dataKey: 'value', name: 'Attendance (K)', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sportswashing Risk Assessment</CardTitle>
                  <CardDescription>Multi-dimensional analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">International Perception Score</span>
                        <span className="font-medium text-platinum">{sportswashingIndex}</span>
                      </div>
                      <Progress value={sportswashingIndex} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Media Coverage Volume</span>
                        <span className="font-medium text-gold">78</span>
                      </div>
                      <Progress value={78} className="h-3" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">Criticism Level (inverted)</span>
                        <span className="font-medium text-emerald-400">55</span>
                      </div>
                      <Progress value={55} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Key Entities Tab */}
        <TabsContent value="entities" className="space-y-6">
          <GlassPanel title="Sports Entity Intelligence" description="Ownership, valuation, and sentiment tracking">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Sports Entities</CardTitle>
                  <CardDescription>Major UAE sports investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {keyEntities.map((entity, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4 hover:bg-slate-800/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-platinum/20 text-platinum">
                              <Trophy className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{entity.name}</p>
                              <p className="text-sm text-slate-400">{entity.type} · {entity.ownership}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gold">${entity.brandValue}B</div>
                              <p className="text-xs text-slate-400">Brand Value</p>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${getSentimentColor(entity.sentiment)}`}>
                                {entity.sentiment}%
                              </div>
                              <p className="text-xs text-slate-400">Sentiment</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Manchester City Performance</CardTitle>
                    <CardDescription>On-field metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Premier League Titles</span>
                        <span className="text-xl font-bold text-gold">6</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Champions League</span>
                        <span className="text-xl font-bold text-gold">1</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Market Value</span>
                        <span className="text-xl font-bold text-gold">$2.5B</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Global Fans</span>
                        <span className="text-xl font-bold text-gold">15M</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">F1 Abu Dhabi GP Metrics</CardTitle>
                    <CardDescription>Event performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Annual Viewership</span>
                        <span className="text-xl font-bold text-gold">85M</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Economic Impact</span>
                        <span className="text-xl font-bold text-gold">$400M</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Hotel Occupancy</span>
                        <span className="text-xl font-bold text-gold">95%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Global Rank</span>
                        <span className="text-xl font-bold text-gold">#3</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Sentiment Analysis Tab */}
        <TabsContent value="sentiment" className="space-y-6">
          <GlassPanel title="Sports Sentiment Analysis" description="Public perception tracking">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Overall Sentiment Distribution</CardTitle>
                    <CardDescription>UAE sports brand perception</CardDescription>
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
                    <CardTitle className="text-lg">Sentiment by Sport</CardTitle>
                    <CardDescription>Per-sport perception scores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {investmentData.slice(0, 4).map((sport, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{sport.name}</span>
                            <span className="text-sm font-bold text-emerald-400">
                              {Math.floor(Math.random() * 20) + 60}%
                            </span>
                          </div>
                          <Progress
                            value={Math.floor(Math.random() * 20) + 60}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Critical Narrative Tracking</CardTitle>
                  <CardDescription>Sportswashing criticism sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-red-900/50 bg-red-900/20 p-4 text-center">
                      <div className="text-2xl font-bold text-red-400">15%</div>
                      <p className="text-sm text-slate-400 mt-1">Western Media</p>
                    </div>
                    <div className="rounded-lg border border-yellow-900/50 bg-yellow-900/20 p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-400">8%</div>
                      <p className="text-sm text-slate-400 mt-1">Human Rights Groups</p>
                    </div>
                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center">
                      <div className="text-2xl font-bold text-platinum">5%</div>
                      <p className="text-sm text-slate-400 mt-1">Academic Analysis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Brand Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <GlassPanel title="Sports Brand Trends" description="UAE sports brand performance over time">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Brand Sentiment & Reach</CardTitle>
                  <CardDescription>12-month trend analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={brandTrendData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'sentiment', name: 'Sentiment Score', color: CHART_COLORS.gold },
                      { dataKey: 'reach', name: 'Media Reach (Index)', color: CHART_COLORS.navy },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sentiment Trend</CardTitle>
                    <CardDescription>Monthly brand sentiment score</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={brandTrendData}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.platinum },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Media Reach Trend</CardTitle>
                    <CardDescription>Monthly media reach index</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={brandTrendData}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'reach', name: 'Reach', color: CHART_COLORS.emerald },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
