// @ts-nocheck
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
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
  Palette,
  Music,
  Theater,
  Book,
  Landmark,
  Film,
  Globe,
  Star,
  Users,
  TrendingUp,
  Heart,
  Sparkles,
} from 'lucide-react'

export default function CulturalTrendsPage() {
  // Cultural engagement data
  const engagementData = [
    { month: 'Jan', visits: 2.8, events: 145 },
    { month: 'Feb', visits: 3.2, events: 162 },
    { month: 'Mar', visits: 4.1, events: 198 },
    { month: 'Apr', visits: 3.8, events: 175 },
    { month: 'May', visits: 4.5, events: 220 },
    { month: 'Jun', visits: 5.2, events: 255 },
    { month: 'Jul', visits: 5.8, events: 280 },
    { month: 'Aug', visits: 5.5, events: 265 },
    { month: 'Sep', visits: 4.8, events: 235 },
    { month: 'Oct', visits: 5.0, events: 248 },
    { month: 'Nov', visits: 5.5, events: 275 },
    { month: 'Dec', visits: 6.2, events: 310 },
  ]

  // Cultural sector investment
  const investmentData = [
    { sector: 'Museums & Heritage', value: 850, growth: 15 },
    { sector: 'Performing Arts', value: 620, growth: 22 },
    { sector: 'Literature & Publishing', value: 380, growth: 12 },
    { sector: 'Film & Media', value: 920, growth: 35 },
    { sector: 'Visual Arts', value: 450, growth: 18 },
    { sector: ' festivals & Events', value: 1100, growth: 28 },
  ]

  // Heritage sites data
  const heritageData = [
    { site: 'Al Fahidi Historical Neighbourhood', visitors: 2.1, rating: 4.8 },
    { site: 'Sheikh Zayed Mosque', visitors: 5.5, rating: 4.9 },
    { site: 'Qasr Al Watan', visitors: 1.8, rating: 4.7 },
    { site: 'Hatta Heritage Village', visitors: 0.8, rating: 4.5 },
    { site: 'Al Hisn Fort', visitors: 0.5, rating: 4.3 },
  ]

  // Cultural events
  const eventsData = [
    { name: 'Abu Dhabi Film Festival', attendance: 45000, reach: 12.5 },
    { name: 'Dubai Art Season', attendance: 180000, reach: 45.0 },
    { name: 'Sharjah International Book Fair', attendance: 320000, reach: 8.2 },
    { name: 'Dubai Shopping Festival', attendance: 1200000, reach: 85.0 },
    { name: 'National Day Celebrations', attendance: 850000, reach: 95.0 },
  ]

  // Art forms engagement
  const artFormsData = [
    { form: 'Traditional Dance', engagement: 65, growth: 8 },
    { form: 'Calligraphy', engagement: 78, growth: 15 },
    { form: 'Poetry & Literature', engagement: 72, growth: 12 },
    { form: 'Music (Traditional)', engagement: 82, growth: 10 },
    { form: 'Visual Arts', engagement: 88, growth: 22 },
    { form: 'Theater', engagement: 70, growth: 18 },
  ]

  // Cultural diversity
  const diversityData = [
    { region: 'Arab Heritage', percentage: 42, color: CHART_COLORS.gold },
    { region: 'South Asian', percentage: 28, color: CHART_COLORS.navy },
    { region: 'Persian Heritage', percentage: 12, color: CHART_COLORS.rose },
    { region: 'African Heritage', percentage: 8, color: CHART_COLORS.cyan },
    { region: 'Western Influences', percentage: 6, color: CHART_COLORS.emerald },
    { region: 'East Asian', percentage: 4, color: CHART_COLORS.purple },
  ]

  // Creative economy
  const creativeEconomyData = [
    { year: '2020', gdp: 2.8, jobs: 85 },
    { year: '2021', gdp: 3.2, jobs: 95 },
    { year: '2022', gdp: 3.8, jobs: 110 },
    { year: '2023', gdp: 4.5, jobs: 130 },
    { year: '2024', gdp: 5.2, jobs: 155 },
    { year: '2025', gdp: 6.1, jobs: 180 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">TRENDS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Cultural Trends</h1>
          <p className="mt-2 text-slate-400">
            Heritage preservation, arts, and cultural engagement intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Landmark className="h-4 w-4" />
            Heritage Sites
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Palette className="h-4 w-4" />
            Cultural Dashboard
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Cultural Visits (M)"
          value={6.2}
          previousValue={5.5}
          icon={<Landmark className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Cultural Events"
          value={310}
          previousValue={275}
          icon={<Sparkles className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Creative GDP ($B)"
          value={6.1}
          previousValue={5.2}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Arts Enrollment"
          value="185K"
          previousValue="168K"
          icon={<Book className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="heritage">Heritage</TabsTrigger>
          <TabsTrigger value="arts">Arts & Events</TabsTrigger>
          <TabsTrigger value="economy">Creative Economy</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Cultural Trends Overview" description="UAE cultural engagement and heritage metrics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Cultural Engagement</CardTitle>
                  <CardDescription>Monthly visits and events (millions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={engagementData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'visits', name: 'Visits (M)', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Cultural Investment</CardTitle>
                    <CardDescription>By cultural sector ($M)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={investmentData}
                      xAxisKey="sector"
                      bars={[
                        { dataKey: 'value', name: 'Investment $M', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Cultural Diversity</CardTitle>
                    <CardDescription>Heritage influences in UAE culture</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={diversityData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Major Cultural Events</CardTitle>
                  <CardDescription>Annual flagship events</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {eventsData.map((event, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Star className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{event.name}</p>
                              <p className="text-sm text-slate-400">{event.attendance.toLocaleString()} attendance</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gold">{event.reach}M</div>
                            <p className="text-xs text-slate-400">Media Reach</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Heritage Tab */}
        <TabsContent value="heritage" className="space-y-6">
          <GlassPanel title="Heritage Sites & Preservation" description="Historical sites and cultural preservation">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Heritage Site Visitors</CardTitle>
                  <CardDescription>Top heritage attractions (millions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={heritageData}
                    xAxisKey="site"
                    bars={[
                      { dataKey: 'visitors', name: 'Visitors (M)', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Heritage Site Ratings</CardTitle>
                    <CardDescription>Visitor satisfaction scores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {heritageData.map((site, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm text-slate-300 truncate flex-1 mr-4">{site.site}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gold">{site.rating}</span>
                            <Star className="h-4 w-4 text-gold" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Preservation Programs</CardTitle>
                    <CardDescription>Active heritage preservation initiatives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[220px]">
                      <div className="space-y-3">
                        {[
                          { program: 'Traditional Architecture', sites: 45, status: 'Active' },
                          { program: 'Intangible Heritage', initiatives: 28, status: 'Growing' },
                          { program: 'Archaeological Sites', protected: 12, status: 'Protected' },
                          { program: 'Oral History', recordings: 1500, status: 'Active' },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Landmark className="h-5 w-5 text-gold" />
                              <span className="text-sm font-medium text-slate-200">{Object.keys(item)[0]}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">{Object.values(item)[1]}</Badge>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UNESCO Sites</CardTitle>
                  <CardDescription>World heritage recognition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-gold-700 bg-gold-900/30 p-4 text-center">
                      <Landmark className="mx-auto h-8 w-8 text-gold mb-2" />
                      <div className="text-lg font-bold text-gold">3</div>
                      <p className="text-sm text-slate-400">UNESCO Sites</p>
                    </div>
                    <div className="rounded-lg border border-navy-700 bg-navy-900/50 p-4 text-center">
                      <Book className="mx-auto h-8 w-8 text-navy-400 mb-2" />
                      <div className="text-lg font-bold text-navy-400">7</div>
                      <p className="text-sm text-slate-400">Intangible Heritage</p>
                    </div>
                    <div className="rounded-lg border border-emerald-700 bg-emerald-900/30 p-4 text-center">
                      <Globe className="mx-auto h-8 w-8 text-emerald mb-2" />
                      <div className="text-lg font-bold text-emerald">12</div>
                      <p className="text-sm text-slate-400">Pending Nomination</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Arts & Events Tab */}
        <TabsContent value="arts" className="space-y-6">
          <GlassPanel title="Arts & Cultural Events" description="Creative arts and cultural programming">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Art Form Engagement</CardTitle>
                  <CardDescription>Public engagement by art form</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={artFormsData}
                    xAxisKey="form"
                    bars={[
                      { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.gold },
                      { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Cultural Venues</CardTitle>
                    <CardDescription>Major performance and exhibition spaces</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {[
                          { name: 'Louvre Abu Dhabi', capacity: 8000, type: 'Museum' },
                          { name: 'Dubai Opera', capacity: 2000, type: 'Performance' },
                          { name: 'Abu Dhabi Cultural Foundation', capacity: 3500, type: 'Multi-purpose' },
                          { name: 'Sharjah Arts Foundation', capacity: 1500, type: 'Gallery' },
                          { name: 'Dubai Mall Art Centre', capacity: 500, type: 'Gallery' },
                        ].map((venue, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Palette className="h-5 w-5 text-gold" />
                              <span className="text-sm font-medium text-slate-200">{venue.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">{venue.type}</Badge>
                              <span className="text-sm font-bold text-navy">{venue.capacity.toLocaleString()}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Annual Calendar Highlights</CardTitle>
                    <CardDescription>Key cultural dates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { month: 'January', event: 'Abu Dhabi Film Festival' },
                        { month: 'February', event: 'Dubai Art Season' },
                        { month: 'March', event: 'Al Burda Festival' },
                        { month: "April", event: "Sharjah Children's Reading" },
                        { month: 'November', event: 'Abu Dhabi Art' },
                        { month: 'December', event: 'National Day Celebrations' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm font-medium text-gold">{item.month}</span>
                          <span className="text-sm text-slate-200">{item.event}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Art Market Indicators</CardTitle>
                  <CardDescription>Gallery and auction data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-4">
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Palette className="mx-auto h-6 w-6 text-gold mb-2" />
                      <p className="text-xs text-slate-400">Active Galleries</p>
                      <p className="text-xl font-bold text-gold">245</p>
                      <span className="text-xs text-emerald">+18 YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Music className="mx-auto h-6 w-6 text-navy mb-2" />
                      <p className="text-xs text-slate-400">Art Fairs/Year</p>
                      <p className="text-xl font-bold text-navy">28</p>
                      <span className="text-xs text-emerald">+5 YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Film className="mx-auto h-6 w-6 text-emerald mb-2" />
                      <p className="text-xs text-slate-400">Film Productions</p>
                      <p className="text-xl font-bold text-emerald">850</p>
                      <span className="text-xs text-emerald">+35% YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Heart className="mx-auto h-6 w-6 text-rose mb-2" />
                      <p className="text-xs text-slate-400">Public Art Pieces</p>
                      <p className="text-xl font-bold text-rose">2,400</p>
                      <span className="text-xs text-emerald">+120 YoY</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Creative Economy Tab */}
        <TabsContent value="economy" className="space-y-6">
          <GlassPanel title="Creative Economy" description="Cultural and creative industry economic impact">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Creative Economy Growth</CardTitle>
                  <CardDescription>GDP contribution and employment</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={creativeEconomyData}
                    xAxisKey="year"
                    lines={[
                      { dataKey: 'gdp', name: 'GDP $B', color: CHART_COLORS.gold },
                      { dataKey: 'jobs', name: 'Jobs (K)', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sector Contribution</CardTitle>
                    <CardDescription>GDP by creative sector ($B)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={[
                        { name: 'Media & Film', value: 2.1, color: CHART_COLORS.gold },
                        { name: 'Arts & Design', value: 1.5, color: CHART_COLORS.navy },
                        { name: 'Publishing', value: 0.8, color: CHART_COLORS.emerald },
                        { name: 'Music', value: 0.6, color: CHART_COLORS.cyan },
                        { name: 'Heritage', value: 0.5, color: CHART_COLORS.platinum },
                        { name: 'Other', value: 0.6, color: CHART_COLORS.purple },
                      ]}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Creative Workforce</CardTitle>
                    <CardDescription>Employment by sector (thousands)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { sector: 'Design', jobs: 55 },
                        { sector: 'Media', jobs: 42 },
                        { sector: 'Arts', jobs: 28 },
                        { sector: 'Publishing', jobs: 18 },
                        { sector: 'Music', jobs: 15 },
                        { sector: 'Heritage', jobs: 12 },
                      ]}
                      xAxisKey="sector"
                      bars={[
                        { dataKey: 'jobs', name: 'Jobs (K)', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Economic Impact Metrics</CardTitle>
                  <CardDescription>Key creative economy indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <TrendingUp className="mx-auto h-6 w-6 text-gold mb-2" />
                      <p className="text-xs text-slate-400">GDP Contribution</p>
                      <p className="text-xl font-bold text-gold">6.1B</p>
                      <span className="text-xs text-emerald">+17% YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Users className="mx-auto h-6 w-6 text-navy mb-2" />
                      <p className="text-xs text-slate-400">Total Employment</p>
                      <p className="text-xl font-bold text-navy">180K</p>
                      <span className="text-xs text-emerald">+19% YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Sparkles className="mx-auto h-6 w-6 text-emerald mb-2" />
                      <p className="text-xs text-slate-400">Exports ($B)</p>
                      <p className="text-xl font-bold text-emerald">2.8</p>
                      <span className="text-xs text-emerald">+22% YoY</span>
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
