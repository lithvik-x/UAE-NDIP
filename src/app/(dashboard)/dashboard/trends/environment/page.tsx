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
  Leaf,
  Sun,
  Wind,
  Droplets,
  TreePine,
  Globe,
  Factory,
  Recycle,
  TrendingUp,
  AlertTriangle,
  Shield,
  Zap,
} from 'lucide-react'

export default function EnvironmentalTrendsPage() {
  // Carbon emissions trajectory
  const emissionsData = [
    { year: '2020', emissions: 185, target: 180 },
    { year: '2021', emissions: 192, target: 175 },
    { year: '2022', emissions: 188, target: 170 },
    { year: '2023', emissions: 180, target: 165 },
    { year: '2024', emissions: 172, target: 160 },
    { year: '2025', emissions: 165, target: 155 },
    { year: '2026', emissions: 158, target: 150 },
    { year: '2027 Target', emissions: 150, target: 140 },
  ]

  // Renewable capacity growth
  const renewableCapacityData = [
    { year: '2020', solar: 2200, wind: 400, nuclear: 5600, other: 200 },
    { year: '2021', solar: 3500, wind: 600, nuclear: 5600, other: 350 },
    { year: '2022', solar: 4800, wind: 850, nuclear: 5600, other: 450 },
    { year: '2023', solar: 5800, wind: 1000, nuclear: 5600, other: 550 },
    { year: '2024', solar: 6500, wind: 1200, nuclear: 5600, other: 650 },
    { year: '2025', solar: 7200, wind: 1400, nuclear: 5600, other: 750 },
  ]

  // Sustainability initiatives
  const initiativesData = [
    { name: 'Net Zero 2050 Alliance', participants: 450, impact: 85, status: 'Active' },
    { name: 'UAE Clean Energy Program', participants: 280, impact: 92, status: 'Scaling' },
    { name: 'Green Construction Code', participants: 1800, impact: 78, status: 'Mandatory' },
    { name: 'Sustainable Transportation', participants: 520, impact: 65, status: 'Active' },
    { name: 'Marine Conservation', participants: 120, impact: 55, status: 'Growing' },
  ]

  // Water security metrics
  const waterData = [
    { source: 'Desalination', capacity: 65, color: CHART_COLORS.cyan },
    { source: 'Groundwater', capacity: 18, color: CHART_COLORS.navy },
    { source: 'Recycled Water', capacity: 12, color: CHART_COLORS.emerald },
    { source: 'Imported', capacity: 5, color: CHART_COLORS.platinum },
  ]

  // Air quality trend
  const airQualityData = [
    { month: 'Jan', aqi: 48 },
    { month: 'Feb', aqi: 45 },
    { month: 'Mar', aqi: 52 },
    { month: 'Apr', aqi: 58 },
    { month: 'May', aqi: 62 },
    { month: 'Jun', aqi: 55 },
    { month: 'Jul', aqi: 50 },
    { month: 'Aug', aqi: 48 },
    { month: 'Sep', aqi: 45 },
    { month: 'Oct', aqi: 42 },
    { month: 'Nov', aqi: 40 },
    { month: 'Dec', aqi: 38 },
  ]

  // Climate tech investments
  const climateInvestData = [
    { sector: 'Solar Energy', investment: 4200, growth: 28 },
    { sector: 'Energy Storage', investment: 2800, growth: 45 },
    { sector: 'Carbon Capture', investment: 1200, growth: 65 },
    { sector: 'Green Hydrogen', investment: 3500, growth: 52 },
    { sector: 'Sustainable Agriculture', investment: 800, growth: 22 },
  ]

  const getAQIStatus = (aqi: number) => {
    if (aqi <= 50) return { label: 'Good', color: 'emerald' }
    if (aqi <= 100) return { label: 'Moderate', color: 'yellow' }
    return { label: 'Unhealthy', color: 'rose' }
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="emerald" className="mb-2">TRENDS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-emerald">Environmental Trends</h1>
          <p className="mt-2 text-slate-400">
            Climate action, sustainability initiatives, and environmental intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald/50 text-emerald hover:bg-emerald/10">
            <Globe className="h-4 w-4" />
            Climate Dashboard
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-white gap-2">
            <Leaf className="h-4 w-4" />
            Track Sustainability
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="CO2 Reduction"
          value="15%"
          previousValue={12}
          icon={<Wind className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Renewable Capacity (GW)"
          value={14.7}
          previousValue={13.2}
          icon={<Sun className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Water Recycling %"
          value={68}
          previousValue={62}
          icon={<Droplets className="h-6 w-6" />}
          gradient="cyan"
          status="success"
        />
        <MetricCard
          title="Green Coverage %"
          value={4.8}
          previousValue={4.2}
          icon={<TreePine className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="climate">Climate Action</TabsTrigger>
          <TabsTrigger value="energy">Clean Energy</TabsTrigger>
          <TabsTrigger value="water">Water Security</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Environmental Trends Overview" description="UAE sustainability and climate action metrics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">CO2 Emissions Trajectory</CardTitle>
                  <CardDescription>Actual vs Target emissions (Million tonnes)</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={emissionsData}
                    xAxisKey="year"
                    lines={[
                      { dataKey: 'emissions', name: 'Actual', color: CHART_COLORS.rose },
                      { dataKey: 'target', name: 'Target', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Renewable Energy Mix</CardTitle>
                    <CardDescription>Installed capacity by source (MW)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={renewableCapacityData[renewableCapacityData.length - 1] ? [
                        { name: 'Solar', value: renewableCapacityData[renewableCapacityData.length - 1].solar, color: CHART_COLORS.gold },
                        { name: 'Nuclear', value: renewableCapacityData[renewableCapacityData.length - 1].nuclear, color: CHART_COLORS.navy },
                        { name: 'Wind', value: renewableCapacityData[renewableCapacityData.length - 1].wind, color: CHART_COLORS.cyan },
                        { name: 'Other', value: renewableCapacityData[renewableCapacityData.length - 1].other, color: CHART_COLORS.emerald },
                      ] : []}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Air Quality Index</CardTitle>
                    <CardDescription>12-month AQI trend</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={airQualityData}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'aqi', name: 'AQI', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sustainability Initiatives</CardTitle>
                  <CardDescription>Key environmental programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {initiativesData.map((initiative, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-emerald">
                              <Leaf className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{initiative.name}</p>
                              <p className="text-sm text-slate-400">{initiative.participants} participants</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-emerald">{initiative.impact}</div>
                              <p className="text-xs text-slate-400">Impact Score</p>
                            </div>
                            <Badge variant={initiative.status === 'Active' ? 'default' : initiative.status === 'Mandatory' ? 'destructive' : 'outline'} className="text-xs">
                              {initiative.status}
                            </Badge>
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

        {/* Climate Action Tab */}
        <TabsContent value="climate" className="space-y-6">
          <GlassPanel title="Climate Action Intelligence" description="UAE Net Zero 2050 and emissions reduction">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emissions Reduction Progress</CardTitle>
                  <CardDescription>Year-over-year trajectory</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={emissionsData}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'emissions', name: 'Emissions', color: CHART_COLORS.rose },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Net Zero Targets</CardTitle>
                    <CardDescription>Progress toward 2050 goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { target: 'Net Zero 2050', progress: 28, icon: Globe },
                        { target: '50% Clean Energy', progress: 45, icon: Sun },
                        { target: '40% Emissions Reduction', progress: 38, icon: Wind },
                        { target: 'Zero Waste Landfills', progress: 22, icon: Recycle },
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <item.icon className="h-4 w-4 text-emerald" />
                              <span className="text-sm font-medium text-slate-200">{item.target}</span>
                            </div>
                            <span className="text-sm font-bold text-emerald">{item.progress}%</span>
                          </div>
                          <Progress value={item.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Climate Tech Investment</CardTitle>
                    <CardDescription>Investment by sector ($M)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={climateInvestData}
                      xAxisKey="sector"
                      bars={[
                        { dataKey: 'investment', name: 'Investment $M', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Air Quality Metrics</CardTitle>
                  <CardDescription>Current environmental indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'Air Quality Index', value: '42 AQI', status: 'Good', icon: Wind },
                      { label: 'PM2.5 Concentration', value: '18 µg/m³', status: 'Low', icon: Shield },
                      { label: 'Ozone Level', value: '35 ppb', status: 'Normal', icon: Sun },
                      { label: 'Air Quality Trend', value: '+8%', status: 'Improving', icon: TrendingUp },
                    ].map((item, idx) => (
                      <div key={idx} className="rounded-lg bg-slate-800/50 p-4 text-center">
                        <item.icon className="mx-auto h-6 w-6 text-emerald mb-2" />
                        <p className="text-xs text-slate-400">{item.label}</p>
                        <p className="text-xl font-bold text-slate-200">{item.value}</p>
                        <Badge variant="outline" className="mt-1 text-emerald text-xs">{item.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Clean Energy Tab */}
        <TabsContent value="energy" className="space-y-6">
          <GlassPanel title="Clean Energy Trends" description="Renewable energy capacity and investment">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Renewable Capacity Growth</CardTitle>
                  <CardDescription>MW installed capacity over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={renewableCapacityData}
                    xAxisKey="year"
                    areas={[
                      { dataKey: 'solar', name: 'Solar', color: CHART_COLORS.gold },
                      { dataKey: 'wind', name: 'Wind', color: CHART_COLORS.cyan },
                      { dataKey: 'nuclear', name: 'Nuclear', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Solar Capacity Leaders</CardTitle>
                    <CardDescription>Top solar projects in UAE</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {[
                          { name: 'MBR Solar Park', capacity: '1,800 MW', status: 'Operational' },
                          { name: 'DEWA Solar Park', capacity: '1,200 MW', status: 'Expansion' },
                          { name: 'Al Dhafra Solar', capacity: '2,100 MW', status: 'Construction' },
                          { name: 'Sharjah Solar', capacity: '450 MW', status: 'Planning' },
                        ].map((project, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Sun className="h-5 w-5 text-gold" />
                              <span className="text-sm font-medium text-slate-200">{project.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-gold">{project.capacity}</span>
                              <Badge variant="outline" className="text-xs">{project.status}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Nuclear Energy</CardTitle>
                    <CardDescription>Barakah Nuclear Plant status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { unit: 'Unit 1', status: 'Operational', capacity: '1,400 MW' },
                        { unit: 'Unit 2', status: 'Operational', capacity: '1,400 MW' },
                        { unit: 'Unit 3', status: 'Testing', capacity: '1,400 MW' },
                        { unit: 'Unit 4', status: 'Construction', capacity: '1,400 MW' },
                      ].map((unit, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Factory className="h-5 w-5 text-navy" />
                            <span className="text-sm font-medium text-slate-200">{unit.unit}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-navy">{unit.capacity}</span>
                            <Badge variant={unit.status === 'Operational' ? 'default' : unit.status === 'Testing' ? 'warning' : 'outline'} className="text-xs">
                              {unit.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Energy Storage Projects</CardTitle>
                  <CardDescription>Battery storage initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-gold-700 bg-gold-900/30 p-4 text-center">
                      <Zap className="mx-auto h-8 w-8 text-gold mb-2" />
                      <div className="text-xl font-bold text-gold">850 MWh</div>
                      <p className="text-sm text-slate-400">Total Storage Capacity</p>
                    </div>
                    <div className="rounded-lg border border-navy-700 bg-navy-900/50 p-4 text-center">
                      <Shield className="mx-auto h-8 w-8 text-navy-400 mb-2" />
                      <div className="text-xl font-bold text-navy-400">99.2%</div>
                      <p className="text-sm text-slate-400">Grid Reliability</p>
                    </div>
                    <div className="rounded-lg border border-emerald-700 bg-emerald-900/30 p-4 text-center">
                      <TrendingUp className="mx-auto h-8 w-8 text-emerald mb-2" />
                      <div className="text-xl font-bold text-emerald">45%</div>
                      <p className="text-sm text-slate-400">YoY Growth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Water Security Tab */}
        <TabsContent value="water" className="space-y-6">
          <GlassPanel title="Water Security Intelligence" description="Desalination, recycling, and water management">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Water Sources Distribution</CardTitle>
                  <CardDescription>Current water supply by source</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={waterData}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Desalination Capacity</CardTitle>
                    <CardDescription>Leading desalination plants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[250px]">
                      <div className="space-y-3">
                        {[
                          { name: 'Jebel Ali Plant', capacity: '4.2 MGD', status: 'Operational' },
                          { name: 'Taweelah Plant', capacity: '3.8 MGD', status: 'Operational' },
                          { name: 'Fujairah Plant', capacity: '2.9 MGD', status: 'Expansion' },
                          { name: 'Al Zorah Plant', capacity: '1.5 MGD', status: 'Planning' },
                        ].map((plant, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                            <div className="flex items-center gap-3">
                              <Droplets className="h-5 w-5 text-cyan" />
                              <span className="text-sm font-medium text-slate-200">{plant.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-cyan">{plant.capacity}</span>
                              <Badge variant="outline" className="text-xs">{plant.status}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Water Conservation</CardTitle>
                    <CardDescription>Savings initiatives progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { program: 'Smart Irrigation', savings: '35%', participants: 45000 },
                        { program: 'Building Codes', savings: '25%', participants: 12000 },
                        { program: 'Industrial Recycling', savings: '65%', participants: 2800 },
                        { program: 'Public Awareness', savings: '15%', participants: 250000 },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.program}</span>
                            <span className="text-sm font-bold text-cyan">{item.savings} savings</span>
                          </div>
                          <Progress value={parseInt(item.savings)} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Water Metrics Dashboard</CardTitle>
                  <CardDescription>Key water security indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: 'Daily Consumption', value: '380L/capita', trend: '-12%' },
                      { label: 'Desalination Output', value: '14M m³/day', trend: '+5%' },
                      { label: 'Recycling Rate', value: '68%', trend: '+8%' },
                      { label: 'Groundwater Level', value: '85m avg', trend: '+3m' },
                    ].map((item, idx) => (
                      <div key={idx} className="rounded-lg bg-slate-800/50 p-4 text-center">
                        <Droplets className="mx-auto h-6 w-6 text-cyan mb-2" />
                        <p className="text-xs text-slate-400">{item.label}</p>
                        <p className="text-xl font-bold text-slate-200">{item.value}</p>
                        <span className="text-xs text-emerald">{item.trend} YoY</span>
                      </div>
                    ))}
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
