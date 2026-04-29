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
  Users,
  UserPlus,
  UserMinus,
  Globe,
  Flag,
  Building,
  TrendingUp,
  TrendingDown,
  Baby,
  GraduationCap,
  Briefcase,
  Home,
} from 'lucide-react'

export default function DemographicTrendsPage() {
  // Population growth data
  const populationData = [
    { year: '2020', total: 9.99, uaeNationals: 1.2, expats: 8.79 },
    { year: '2021', total: 10.25, uaeNationals: 1.22, expats: 9.03 },
    { year: '2022', total: 10.58, uaeNationals: 1.24, expats: 9.34 },
    { year: '2023', total: 10.87, uaeNationals: 1.26, expats: 9.61 },
    { year: '2022024', total: 11.12, uaeNationals: 1.28, expats: 9.84 },
    { year: '2025', total: 11.27, uaeNationals: 1.30, expats: 9.97 },
  ]

  // Age distribution data
  const ageDistributionData = [
    { group: '0-14', male: 18, female: 17, color: CHART_COLORS.gold },
    { group: '15-24', male: 22, female: 20, color: CHART_COLORS.navy },
    { group: '25-54', male: 48, female: 42, color: CHART_COLORS.emerald },
    { group: '55-64', male: 8, female: 9, color: CHART_COLORS.cyan },
    { group: '65+', male: 4, female: 5, color: CHART_COLORS.platinum },
  ]

  // Expat nationality distribution
  const expatOriginsData = [
    { region: 'South Asia', percentage: 58, color: CHART_COLORS.gold },
    { region: 'Arab Middle East', percentage: 15, color: CHART_COLORS.navy },
    { region: 'East Asia', percentage: 10, color: CHART_COLORS.rose },
    { region: 'Europe', percentage: 8, color: CHART_COLORS.emerald },
    { region: 'Africa', percentage: 5, color: CHART_COLORS.cyan },
    { region: 'Americas', percentage: 4, color: CHART_COLORS.platinum },
  ]

  // Urbanization data
  const urbanizationData = [
    { city: 'Dubai', population: 3.6, growth: 5.2 },
    { city: 'Abu Dhabi', population: 2.4, growth: 4.8 },
    { city: 'Sharjah', population: 1.8, growth: 3.5 },
    { city: 'Al Ain', population: 0.8, growth: 2.1 },
    { city: 'RAK', population: 0.5, growth: 6.2 },
    { city: 'Fujairah', population: 0.2, growth: 4.5 },
  ]

  // Labor force trends
  const laborForceData = [
    { year: '2020', participation: 88, unemployment: 3.2 },
    { year: '2021', participation: 89, unemployment: 2.9 },
    { year: '2022', participation: 90, unemployment: 2.5 },
    { year: '2023', participation: 91, unemployment: 2.2 },
    { year: '2024', participation: 92, unemployment: 1.9 },
    { year: '2025', participation: 92, unemployment: 1.7 },
  ]

  // Nationalization progress
  const nationalizationData = [
    { sector: 'Oil & Gas', target: 15, current: 12, color: CHART_COLORS.gold },
    { sector: 'Finance', target: 35, current: 28, color: CHART_COLORS.navy },
    { sector: 'Healthcare', target: 30, current: 25, color: CHART_COLORS.emerald },
    { sector: 'Education', target: 40, current: 35, color: CHART_COLORS.cyan },
    { sector: 'Government', target: 60, current: 55, color: CHART_COLORS.platinum },
    { sector: 'Private Sector', target: 25, current: 18, color: CHART_COLORS.purple },
  ]

  // Family formation
  const familyData = [
    { metric: 'Marriage Rate (per 1000)', value: 4.8, trend: '+2%' },
    { metric: 'Divorce Rate (per 1000)', value: 1.2, trend: '+1%' },
    { metric: 'Fertility Rate', value: 2.1, trend: '+5%' },
    { metric: 'Average Household Size', value: 4.5, trend: '-3%' },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy" className="mb-2">TRENDS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Demographic Trends</h1>
          <p className="mt-2 text-slate-400">
            Population dynamics, migration patterns, and workforce trends
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Users className="h-4 w-4" />
            Census Data
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <UserPlus className="h-4 w-4" />
            Track Population
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Population (M)"
          value={11.27}
          previousValue={11.12}
          icon={<Users className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="National Growth %"
          value={1.6}
          previousValue={1.4}
          icon={<Flag className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Expat Population (M)"
          value={9.97}
          previousValue={9.84}
          icon={<Globe className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Labor Participation %"
          value={92}
          previousValue={91}
          icon={<Briefcase className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="population">Population</TabsTrigger>
          <TabsTrigger value="migration">Migration</TabsTrigger>
          <TabsTrigger value="labor">Labor Force</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Demographic Trends Overview" description="UAE population and demographic indicators">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Population Growth Trend</CardTitle>
                  <CardDescription>Total population over time (millions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={populationData}
                    xAxisKey="year"
                    areas={[
                      { dataKey: 'total', name: 'Total', color: CHART_COLORS.gold },
                      { dataKey: 'uaeNationals', name: 'UAE Nationals', color: CHART_COLORS.navy },
                      { dataKey: 'expats', name: 'Expats', color: CHART_COLORS.platinum },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Expat Origins</CardTitle>
                    <CardDescription>Distribution by region of origin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={expatOriginsData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Age Distribution</CardTitle>
                    <CardDescription>Population by age group and gender</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={ageDistributionData}
                      xAxisKey="group"
                      bars={[
                        { dataKey: 'male', name: 'Male %', color: CHART_COLORS.gold },
                        { dataKey: 'female', name: 'Female %', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Demographic Metrics</CardTitle>
                  <CardDescription>Current demographic indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Baby className="mx-auto h-6 w-6 text-gold mb-2" />
                      <p className="text-xs text-slate-400">Fertility Rate</p>
                      <p className="text-xl font-bold text-gold">2.1</p>
                      <span className="text-xs text-emerald">+5% YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Users className="mx-auto h-6 w-6 text-navy mb-2" />
                      <p className="text-xs text-slate-400">Median Age</p>
                      <p className="text-xl font-bold text-navy">32</p>
                      <span className="text-xs text-slate-400">Years</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Home className="mx-auto h-6 w-6 text-emerald mb-2" />
                      <p className="text-xs text-slate-400">Urban Population</p>
                      <p className="text-xl font-bold text-emerald">88%</p>
                      <span className="text-xs text-emerald">+1% YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <GraduationCap className="mx-auto h-6 w-6 text-platinum mb-2" />
                      <p className="text-xs text-slate-400">Literacy Rate</p>
                      <p className="text-xl font-bold text-platinum">96%</p>
                      <span className="text-xs text-emerald">+0.5% YoY</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Population Tab */}
        <TabsContent value="population" className="space-y-6">
          <GlassPanel title="Population Dynamics" description="Detailed population analysis">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Population by Citizenship</CardTitle>
                  <CardDescription>Nationals vs Expatriates</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={populationData}
                    xAxisKey="year"
                    lines={[
                      { dataKey: 'uaeNationals', name: 'UAE Nationals', color: CHART_COLORS.navy },
                      { dataKey: 'expats', name: 'Expats', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Gender Distribution</CardTitle>
                    <CardDescription>Male to Female ratio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200">Male</span>
                        <span className="text-lg font-bold text-gold">68%</span>
                      </div>
                      <Progress value={68} className="h-4" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200">Female</span>
                        <span className="text-lg font-bold text-navy">32%</span>
                      </div>
                      <Progress value={32} className="h-4" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Age Distribution Summary</CardTitle>
                    <CardDescription>Population breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {ageDistributionData.map((group, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm text-slate-400">{group.group}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-200">{(group.male + group.female)}%</span>
                            <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{ width: `${(group.male + group.female)}%`, backgroundColor: group.color }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Family Formation Indicators</CardTitle>
                  <CardDescription>Marriage and family statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {familyData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <span className="text-sm font-medium text-slate-200">{item.metric}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-navy">{item.value}</span>
                            <Badge variant="outline" className="text-xs text-emerald">{item.trend}</Badge>
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

        {/* Migration Tab */}
        <TabsContent value="migration" className="space-y-6">
          <GlassPanel title="Migration Patterns" description="Immigration and emigration trends">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Expat Population by Origin</CardTitle>
                  <CardDescription>Regional distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={expatOriginsData}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Major Expat Communities</CardTitle>
                  <CardDescription>Top nationalities in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {[
                        { nationality: 'Indian', population: 3.8, percentage: 38, flag: 'IN' },
                        { nationality: 'Pakistani', population: 1.6, percentage: 16, flag: 'PK' },
                        { nationality: 'Bangladeshi', population: 0.7, percentage: 7, flag: 'BD' },
                        { nationality: 'Filipino', population: 0.6, percentage: 6, flag: 'PH' },
                        { nationality: 'Egyptian', population: 0.5, percentage: 5, flag: 'EG' },
                        { nationality: 'British', population: 0.4, percentage: 4, flag: 'GB' },
                        { nationality: 'American', population: 0.3, percentage: 3, flag: 'US' },
                        { nationality: 'Canadian', population: 0.15, percentage: 1.5, flag: 'CA' },
                      ].map((community, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Globe className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{community.nationality}</p>
                              <p className="text-sm text-slate-400">{community.percentage}% of total</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gold">{community.population}M</div>
                            <Badge variant="outline" className="text-xs">{community.flag}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Immigration Trends</CardTitle>
                  <CardDescription>Key migration metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <UserPlus className="mx-auto h-6 w-6 text-emerald mb-2" />
                      <p className="text-xs text-slate-400">New Visas (2024)</p>
                      <p className="text-xl font-bold text-emerald">1.2M</p>
                      <span className="text-xs text-emerald">+15% YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <UserMinus className="mx-auto h-6 w-6 text-rose mb-2" />
                      <p className="text-xs text-slate-400">Departures (2024)</p>
                      <p className="text-xl font-bold text-rose">0.8M</p>
                      <span className="text-xs text-emerald">+5% YoY</span>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <TrendingUp className="mx-auto h-6 w-6 text-gold mb-2" />
                      <p className="text-xs text-slate-400">Net Migration</p>
                      <p className="text-xl font-bold text-gold">+400K</p>
                      <span className="text-xs text-emerald">+22% YoY</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Labor Force Tab */}
        <TabsContent value="labor" className="space-y-6">
          <GlassPanel title="Labor Force Trends" description="Employment and workforce participation">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Labor Force Participation</CardTitle>
                  <CardDescription>Participation and unemployment rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={laborForceData}
                    xAxisKey="year"
                    lines={[
                      { dataKey: 'participation', name: 'Participation Rate %', color: CHART_COLORS.gold },
                      { dataKey: 'unemployment', name: 'Unemployment %', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Nationalization Progress (Nafes)</CardTitle>
                  <CardDescription>Target vs current by sector</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      {nationalizationData.map((sector, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{sector.sector}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-slate-400">Target: {sector.target}%</span>
                              <span className="text-sm font-bold text-navy">Current: {sector.current}%</span>
                            </div>
                          </div>
                          <div className="relative">
                            <Progress value={sector.current} className="h-3" />
                            <div
                              className="absolute top-0 h-3 w-1 bg-slate-500 rounded-full"
                              style={{ left: `${sector.target}%` }}
                              title="Target"
                            />
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
                    <CardTitle className="text-lg">Employment by Sector</CardTitle>
                    <CardDescription>Distribution of workforce</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={[
                        { sector: 'Services', value: 45, color: CHART_COLORS.gold },
                        { sector: 'Construction', value: 22, color: CHART_COLORS.navy },
                        { sector: 'Manufacturing', value: 12, color: CHART_COLORS.emerald },
                        { sector: 'Finance', value: 10, color: CHART_COLORS.cyan },
                        { sector: 'Government', value: 8, color: CHART_COLORS.platinum },
                        { sector: 'Other', value: 3, color: CHART_COLORS.purple },
                      ]}
                      xAxisKey="sector"
                      bars={[
                        { dataKey: 'value', name: '% of Workforce', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Workforce Metrics</CardTitle>
                    <CardDescription>Key employment indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { metric: 'Average Salary (AED)', value: '12,500', change: '+8%' },
                        { metric: 'Remote Work %', value: '18%', change: '+5%' },
                        { metric: 'Gig Workers', value: '250K', change: '+25%' },
                        { metric: 'Part-time Workers', value: '85K', change: '+12%' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <span className="text-sm font-medium text-slate-200">{item.metric}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-bold text-gold">{item.value}</span>
                            <Badge variant="outline" className="text-xs text-emerald">{item.change}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
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
