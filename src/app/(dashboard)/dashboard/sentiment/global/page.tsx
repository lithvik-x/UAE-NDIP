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
  Globe,
  TrendingUp,
  TrendingDown,
  Flag,
  MessageSquare,
  Star,
  Shield,
  Users,
  Building,
  Plane,
} from 'lucide-react'

export default function GlobalPerceptionPage() {
  // Global sentiment trend
  const globalTrendData = [
    { month: 'Jan', global: 68, middleEast: 72, europe: 65, asia: 70 },
    { month: 'Feb', global: 69, middleEast: 73, europe: 66, asia: 71 },
    { month: 'Mar', global: 70, middleEast: 74, europe: 67, asia: 72 },
    { month: 'Apr', global: 69, middleEast: 73, europe: 66, asia: 71 },
    { month: 'May', global: 71, middleEast: 75, europe: 68, asia: 73 },
    { month: 'Jun', global: 72, middleEast: 76, europe: 69, asia: 74 },
    { month: 'Jul', global: 73, middleEast: 77, europe: 70, asia: 75 },
    { month: 'Aug', global: 72, middleEast: 76, europe: 69, asia: 74 },
    { month: 'Sep', global: 74, middleEast: 78, europe: 71, Asia: 76 },
    { month: 'Oct', global: 75, middleEast: 79, europe: 72, asia: 77 },
    { month: 'Nov', global: 74, middleEast: 78, europe: 71, asia: 76 },
    { month: 'Dec', global: 76, middleEast: 80, europe: 73, asia: 78 },
  ]

  // Country perception data
  const countryPerceptionData = [
    { country: 'United States', sentiment: 72, volume: 8500, trend: 'up' },
    { country: 'United Kingdom', sentiment: 78, volume: 5200, trend: 'up' },
    { country: 'Germany', sentiment: 74, volume: 3800, trend: 'stable' },
    { country: 'France', sentiment: 75, volume: 3400, trend: 'up' },
    { country: 'India', sentiment: 82, volume: 9200, trend: 'up' },
    { country: 'China', sentiment: 68, volume: 4500, trend: 'down' },
    { country: 'Japan', sentiment: 76, volume: 2800, trend: 'stable' },
    { country: 'Russia', sentiment: 45, volume: 2200, trend: 'down' },
  ]

  // Perception drivers
  const perceptionDriversData = [
    { driver: 'Economic Partnership', impact: 35, sentimentLift: 15 },
    { driver: 'Tourism Promotion', impact: 25, sentimentLift: 12 },
    { driver: 'Cultural Exchange', impact: 18, sentimentLift: 8 },
    { driver: 'Political Alignment', impact: 15, sentimentLift: 10 },
    { driver: 'Media Coverage', impact: 12, sentimentLift: -5 },
  ]

  // Regional perception
  const regionalPerceptionData = [
    { region: 'North America', sentiment: 74, volume: 12500, color: CHART_COLORS.gold },
    { region: 'Europe', sentiment: 76, volume: 18200, color: CHART_COLORS.navy },
    { region: 'Asia Pacific', sentiment: 78, volume: 22000, color: CHART_COLORS.emerald },
    { region: 'Middle East', sentiment: 82, volume: 8500, color: CHART_COLORS.rose },
    { region: 'Africa', sentiment: 72, volume: 4500, color: CHART_COLORS.info },
    { region: 'Latin America', sentiment: 68, volume: 2200, color: CHART_COLORS.purple },
  ]

  // Media tone by outlet type
  const mediaToneData = [
    { type: 'International News', sentiment: 72, volume: 15000 },
    { type: 'Social Media', sentiment: 78, volume: 85000 },
    { type: 'Travel Platforms', sentiment: 88, volume: 12000 },
    { type: 'Business Media', sentiment: 80, volume: 8500 },
    { type: 'Government Sources', sentiment: 92, volume: 3500 },
  ]

  // International events impact
  const eventsImpactData = [
    { event: 'COP28 Summit', impact: '+15', sentiment: 85, duration: '3 months' },
    { event: 'World Expo Recap', impact: '+12', sentiment: 82, duration: '6 months' },
    { event: 'National Day Coverage', impact: '+18', sentiment: 88, duration: '2 months' },
    { event: 'Economic Forum', impact: '+8', sentiment: 78, duration: '1 month' },
  ]

  // Key narratives internationally
  const internationalNarrativesData = [
    { narrative: 'UAE as Business Hub', sentiment: 85, reach: 45, regions: 28 },
    { narrative: 'Tourism Destination', sentiment: 82, reach: 52, regions: 35 },
    { narrative: 'Innovation Leader', sentiment: 80, reach: 38, regions: 22 },
    { narrative: 'Cultural Bridge', sentiment: 76, reach: 25, regions: 18 },
    { narrative: 'Stability & Safety', sentiment: 88, reach: 42, regions: 32 },
  ]

  const getSentimentColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400'
    if (score >= 70) return 'text-amber-400'
    return 'text-rose-400'
  }

  const getSentimentBg = (score: number) => {
    if (score >= 80) return 'bg-emerald-500/20'
    if (score >= 70) return 'bg-amber-500/20'
    return 'bg-rose-500/20'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">SENTIMENT</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-gold-700">Global Perception</h1>
          <p className="mt-2 text-platinum-400">
            International sentiment analysis, country perception, and global narrative tracking
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold-700/50 text-gold-700 hover:bg-gold-700/10">
            <Globe className="h-4 w-4" />
            World Map View
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Flag className="h-4 w-4" />
            International Reports
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Global Sentiment"
          value={76}
          previousValue={74}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="International Reach (M)"
          value={68.5}
          previousValue={65.2}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Countries Tracking"
          value={145}
          previousValue={138}
          icon={<Flag className="h-6 w-6" />}
          gradient="denim"
          status="success"
        />
        <MetricCard
          title="Positive Coverage %"
          value={68}
          previousValue={65}
          icon={<Star className="h-6 w-6" />}
          gradient="indigo"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="countries">By Country</TabsTrigger>
          <TabsTrigger value="media">Media Analysis</TabsTrigger>
          <TabsTrigger value="impact">Event Impact</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Global Perception Overview" description="International sentiment distribution">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Global Sentiment Trend</CardTitle>
                  <CardDescription>12-month international sentiment trajectory</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={globalTrendData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'global', name: 'Global', color: CHART_COLORS.gold },
                      { dataKey: 'middleEast', name: 'Middle East', color: CHART_COLORS.emerald },
                      { dataKey: 'europe', name: 'Europe', color: CHART_COLORS.navy },
                      { dataKey: 'asia', name: 'Asia', color: CHART_COLORS.info },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Regional Perception</CardTitle>
                    <CardDescription>Sentiment by global region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={regionalPerceptionData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Perception Drivers</CardTitle>
                    <CardDescription>What shapes international sentiment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={perceptionDriversData}
                      xAxisKey="driver"
                      bars={[
                        { dataKey: 'impact', name: 'Impact %', color: CHART_COLORS.gold },
                        { dataKey: 'sentimentLift', name: 'Sentiment Lift', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key International Narratives</CardTitle>
                  <CardDescription>Narratives shaping global perception</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      {internationalNarrativesData.map((narrative, index) => (
                        <div key={index} className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${getSentimentBg(narrative.sentiment)}`}>
                                <Globe className={`h-4 w-4 ${getSentimentColor(narrative.sentiment)}`} />
                              </div>
                              <div>
                                <p className="font-semibold text-platinum-200">{narrative.narrative}</p>
                                <p className="text-sm text-platinum-400">{narrative.reach}M reach in {narrative.regions} regions</p>
                              </div>
                            </div>
                            <div className="text-center">
                              <div className={`text-lg font-bold ${getSentimentColor(narrative.sentiment)}`}>
                                {narrative.sentiment}%
                              </div>
                              <p className="text-xs text-platinum-400">Sentiment</p>
                            </div>
                          </div>
                          <Progress value={narrative.sentiment} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* By Country Tab */}
        <TabsContent value="countries" className="space-y-6">
          <GlassPanel title="Country Perception" description="Sentiment analysis by country">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Country Perceptions</CardTitle>
                  <CardDescription>By volume and sentiment</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={countryPerceptionData}
                    xAxisKey="country"
                    bars={[
                      { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Partner Sentiment</CardTitle>
                    <CardDescription>Major trading partners</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {countryPerceptionData.slice(0, 4).map((country, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Flag className="h-5 w-5 text-gold-700" />
                              <span className="text-sm font-medium text-platinum-200">{country.country}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-platinum-400">{(country.volume / 1000).toFixed(1)}K</span>
                              <Badge variant="outline" className="text-xs text-emerald-500">
                                {country.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : country.trend === 'down' ? <TrendingDown className="h-3 w-3" /> : null}
                                {country.trend}
                              </Badge>
                              <span className={`text-sm font-bold ${getSentimentColor(country.sentiment)}`}>{country.sentiment}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emerging Markets</CardTitle>
                    <CardDescription>Growth opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {[
                          { country: 'India', sentiment: 82, growth: '+15%' },
                          { country: 'Indonesia', sentiment: 78, growth: '+12%' },
                          { country: 'Brazil', sentiment: 74, growth: '+8%' },
                          { country: 'South Africa', sentiment: 72, growth: '+10%' },
                        ].map((market, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Building className="h-5 w-5 text-emerald-500" />
                              <span className="text-sm font-medium text-platinum-200">{market.country}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge variant="outline" className="text-xs text-emerald-500">{market.growth}</Badge>
                              <span className={`text-sm font-bold ${getSentimentColor(market.sentiment)}`}>{market.sentiment}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Country-Level Metrics</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <MessageSquare className="mx-auto h-6 w-6 text-gold-700 mb-2" />
                      <p className="text-xs text-platinum-400">Avg Mentions/Day</p>
                      <p className="text-xl font-bold text-gold-700">45K</p>
                      <span className="text-xs text-emerald-500">+12% YoY</span>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <Star className="mx-auto h-6 w-6 text-navy-500 mb-2" />
                      <p className="text-xs text-platinum-400">Avg Sentiment</p>
                      <p className="text-xl font-bold text-navy-500">74%</p>
                      <span className="text-xs text-emerald-500">+4% YoY</span>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <Shield className="mx-auto h-6 w-6 text-emerald-500 mb-2" />
                      <p className="text-xs text-platinum-400">Positive Narrative</p>
                      <p className="text-xl font-bold text-emerald-500">68%</p>
                      <span className="text-xs text-emerald-500">+5% YoY</span>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <Plane className="mx-auto h-6 w-6 text-platinum-500 mb-2" />
                      <p className="text-xs text-platinum-400">Travel Interest</p>
                      <p className="text-xl font-bold text-platinum-500">+35%</p>
                      <span className="text-xs text-emerald-500">YoY</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Media Analysis Tab */}
        <TabsContent value="media" className="space-y-6">
          <GlassPanel title="Media Analysis" description="International media tone and coverage">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Media Tone by Source Type</CardTitle>
                  <CardDescription>Sentiment by outlet category</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={mediaToneData}
                    xAxisKey="type"
                    bars={[
                      { dataKey: 'sentiment', name: 'Sentiment', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Coverage Volume</CardTitle>
                    <CardDescription>By media type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={mediaToneData.map((m, i) => ({
                        name: m.type,
                        value: m.volume,
                        color: Object.values(CHART_COLORS)[i],
                      }))}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Global Outlets</CardTitle>
                    <CardDescription>Most cited international sources</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[280px]">
                      <div className="space-y-3">
                        {[
                          { outlet: 'Reuters', mentions: 4500, sentiment: 75 },
                          { outlet: 'BBC', mentions: 3200, sentiment: 78 },
                          { outlet: 'Al Jazeera', mentions: 2800, sentiment: 82 },
                          { outlet: 'Bloomberg', mentions: 2500, sentiment: 80 },
                          { outlet: 'Forbes', mentions: 1800, sentiment: 76 },
                        ].map((outlet, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <MessageSquare className="h-5 w-5 text-gold-700" />
                              <span className="text-sm font-medium text-platinum-200">{outlet.outlet}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-platinum-400">{outlet.mentions.toLocaleString()}</span>
                              <span className={`text-sm font-bold ${getSentimentColor(outlet.sentiment)}`}>{outlet.sentiment}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Media Sentiment Trend</CardTitle>
                  <CardDescription>Monthly average by source type</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={[
                      { month: 'Jul', news: 68, social: 72, business: 75 },
                      { month: 'Aug', news: 69, social: 73, business: 76 },
                      { month: 'Sep', news: 70, social: 74, business: 78 },
                      { month: 'Oct', news: 71, social: 75, business: 79 },
                      { month: 'Nov', news: 72, social: 76, business: 80 },
                      { month: 'Dec', news: 72, social: 78, business: 82 },
                    ]}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'news', name: 'News Media', color: CHART_COLORS.gold },
                      { dataKey: 'social', name: 'Social Media', color: CHART_COLORS.navy },
                      { dataKey: 'business', name: 'Business Media', color: CHART_COLORS.emerald },
                    ]}
                    height={280}
                    showGrid={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Event Impact Tab */}
        <TabsContent value="impact" className="space-y-6">
          <GlassPanel title="Event Impact Analysis" description="Impact of international events on perception">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Major Events Impact</CardTitle>
                  <CardDescription>Sentiment lift from key events</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      {eventsImpactData.map((event, index) => (
                        <div key={index} className="rounded-lg border border-platinum-700 bg-platinum-800/50 p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-700/20 text-gold-700">
                                <Star className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="font-semibold text-platinum-200">{event.event}</p>
                                <p className="text-sm text-platinum-400">Duration: {event.duration}</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-xs text-emerald-500">+{event.impact}</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-platinum-400">Sentiment Score</span>
                            <div className="flex items-center gap-2">
                              <Progress value={event.sentiment} className="h-2 w-24" />
                              <span className={`text-sm font-bold ${getSentimentColor(event.sentiment)}`}>{event.sentiment}%</span>
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
                    <CardTitle className="text-lg">Diplomatic Impact</CardTitle>
                    <CardDescription>International relations events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { event: 'Abraham Accords', impact: '+22', regions: 12 },
                        { event: 'Gulf Summit', impact: '+15', regions: 6 },
                        { event: 'UN Climate Pact', impact: '+18', regions: 28 },
                        { event: 'World Economic Forum', impact: '+12', regions: 35 },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-gold-700" />
                            <span className="text-sm font-medium text-platinum-200">{item.event}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs">{item.regions} regions</Badge>
                            <Badge variant="outline" className="text-xs text-emerald-500">{item.impact}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Cultural Impact</CardTitle>
                    <CardDescription>Soft power events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { event: 'Louvre Abu Dhabi', impact: '+15', reach: 'Global' },
                        { event: 'Dubai Expo Legacy', impact: '+20', reach: 'Global' },
                        { event: 'Abu Dhabi Film Festival', impact: '+8', reach: 'Regional' },
                        { event: 'National Day', impact: '+25', reach: 'Global' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-platinum-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Globe className="h-5 w-5 text-navy-500" />
                            <span className="text-sm font-medium text-platinum-200">{item.event}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs">{item.reach}</Badge>
                            <Badge variant="outline" className="text-xs text-emerald-500">{item.impact}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Perception Campaign Effectiveness</CardTitle>
                  <CardDescription>International promotion ROI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <TrendingUp className="mx-auto h-6 w-6 text-gold-700 mb-2" />
                      <p className="text-xs text-platinum-400">Avg Sentiment Lift</p>
                      <p className="text-xl font-bold text-gold-700">+14%</p>
                      <span className="text-xs text-emerald-500">Per Campaign</span>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <Users className="mx-auto h-6 w-6 text-navy-500 mb-2" />
                      <p className="text-xs text-platinum-400">Reach Expansion</p>
                      <p className="text-xl font-bold text-navy-500">+28%</p>
                      <span className="text-xs text-emerald-500">YoY</span>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <Star className="mx-auto h-6 w-6 text-emerald-500 mb-2" />
                      <p className="text-xs text-platinum-400">Brand Score</p>
                      <p className="text-xl font-bold text-emerald-500">78</p>
                      <span className="text-xs text-emerald-500">Global</span>
                    </div>
                    <div className="rounded-lg bg-platinum-800/50 p-4 text-center">
                      <MessageSquare className="mx-auto h-6 w-6 text-platinum-500 mb-2" />
                      <p className="text-xs text-platinum-400">Narrative Reach</p>
                      <p className="text-xl font-bold text-platinum-500">185M</p>
                      <span className="text-xs text-emerald-500">Impressions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}
