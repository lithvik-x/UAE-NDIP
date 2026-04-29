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
  Heart,
  Activity,
  Users,
  Building,
  TrendingUp,
  Shield,
  Stethoscope,
  Plane,
  AlertCircle,
} from 'lucide-react'
import {
  useHealthcareData,
} from '@/lib/data-loader'

export default function HealthcarePage() {
  const { data } = useHealthcareData()

  // Extract metrics from data
  const healthcareIndex = data?.metrics?.healthcareIndex || 82
  const hospitalBeds = data?.metrics?.hospitalBeds || 18
  const medicalTourism = data?.metrics?.medicalTourism || 350
  const chronicDisease = data?.metrics?.chronicDisease || 23

  // Disease prevalence data
  const diseaseData = [
    { name: 'Cardiovascular', value: 28, color: CHART_COLORS.danger },
    { name: 'Diabetes', value: 24, color: CHART_COLORS.warning },
    { name: 'Respiratory', value: 15, color: CHART_COLORS.navy },
    { name: 'Cancer', value: 12, color: CHART_COLORS.rose },
    { name: 'Other', value: 21, color: CHART_COLORS.platinum },
  ]

  // Facility distribution
  const facilityData = [
    { name: 'Hospitals', value: 75, color: CHART_COLORS.navy },
    { name: 'Clinics', value: 450, color: CHART_COLORS.gold },
    { name: 'Specialty Centers', value: 120, color: CHART_COLORS.platinum },
    { name: 'Pharmacies', value: 1200, color: CHART_COLORS.emerald },
  ]

  // Medical tourism by country
  const tourismData = [
    { name: 'GCC States', value: 35, color: CHART_COLORS.gold },
    { name: 'Other MENA', value: 28, color: CHART_COLORS.navy },
    { name: 'Asia', value: 20, color: CHART_COLORS.platinum },
    { name: 'Europe', value: 12, color: CHART_COLORS.cyan },
    { name: 'Africa', value: 5, color: CHART_COLORS.emerald },
  ]

  // Monthly health metrics trend
  const healthTrendData = [
    { month: 'Jan', index: 78, tourism: 28, beds: 17.8 },
    { month: 'Feb', index: 79, tourism: 29, beds: 17.9 },
    { month: 'Mar', index: 80, tourism: 30, beds: 18.0 },
    { month: 'Apr', index: 80, tourism: 31, beds: 18.0 },
    { month: 'May', index: 81, tourism: 32, beds: 18.1 },
    { month: 'Jun', index: 81, tourism: 33, beds: 18.1 },
    { month: 'Jul', index: 82, tourism: 34, beds: 18.2 },
    { month: 'Aug', index: 82, tourism: 34, beds: 18.2 },
    { month: 'Sep', index: 83, tourism: 35, beds: 18.3 },
    { month: 'Oct', index: 83, tourism: 35, beds: 18.3 },
    { month: 'Nov', index: 84, tourism: 36, beds: 18.4 },
    { month: 'Dec', index: 84, tourism: 36, beds: 18.4 },
  ]

  // Key health indicators
  const healthIndicators = [
    { indicator: 'Life Expectancy', value: 78.5, target: 80, unit: 'years' },
    { indicator: 'Infant Mortality', value: 6.2, target: 5, unit: 'per 1000' },
    { indicator: 'Physician Density', value: 2.8, target: 3.5, unit: 'per 1000' },
    { indicator: 'Healthcare Spending', value: 4.2, target: 5.0, unit: 'GDP %' },
  ]

  const getIndicatorColor = (value: number, target: number) => {
    const ratio = value / target
    if (ratio >= 0.9) return 'text-emerald-400'
    if (ratio >= 0.7) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="navy" className="mb-2">C-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-navy">Healthcare Intelligence</h1>
          <p className="mt-2 text-slate-400">
            Healthcare infrastructure, chronic disease tracking, and medical tourism
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-navy/50 text-navy hover:bg-navy/10">
            <Stethoscope className="h-4 w-4" />
            Health Monitor
          </Button>
          <Button className="bg-gradient-navy hover:opacity-90 text-white gap-2">
            <Activity className="h-4 w-4" />
            Track Facility
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Healthcare Index"
          value={healthcareIndex}
          previousValue={healthcareIndex - 2}
          icon={<Heart className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Hospital Beds (per 1000)"
          value={hospitalBeds}
          previousValue={hospitalBeds - 0.2}
          icon={<Building className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Medical Tourism (K)"
          value={medicalTourism}
          previousValue={medicalTourism - 15}
          icon={<Plane className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Chronic Disease Rate"
          value={chronicDisease}
          previousValue={chronicDisease + 1}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="platinum"
          status="warning"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="diseases">Disease Tracking</TabsTrigger>
          <TabsTrigger value="tourism">Medical Tourism</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Healthcare Overview" description="UAE healthcare system performance">
            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Healthcare Index Trend</CardTitle>
                    <CardDescription>12-month performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={healthTrendData}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'index', name: 'Healthcare Index', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Chronic Disease Distribution</CardTitle>
                    <CardDescription>Prevalence by condition</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={diseaseData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Health Indicators</CardTitle>
                  <CardDescription>Performance vs targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {healthIndicators.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-lg border border-slate-700 bg-slate-800/50 p-4 text-center"
                      >
                        <div className={`text-2xl font-bold ${getIndicatorColor(item.value, item.target)}`}>
                          {item.value}
                        </div>
                        <p className="text-sm text-slate-400 mt-1">{item.indicator}</p>
                        <p className="text-xs text-slate-500">Target: {item.target} {item.unit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Infrastructure Tab */}
        <TabsContent value="infrastructure" className="space-y-6">
          <GlassPanel title="Healthcare Infrastructure" description="Facilities, capacity, and resources">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Healthcare Facility Distribution</CardTitle>
                  <CardDescription>By facility type</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={facilityData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Count', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Hospital Bed Capacity</CardTitle>
                    <CardDescription>Monthly trend (per 1000)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={healthTrendData}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'beds', name: 'Beds per 1000', color: CHART_COLORS.gold },
                      ]}
                      height={250}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Healthcare Workforce</CardTitle>
                    <CardDescription>Staff distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { role: 'Physicians', count: 14500, color: CHART_COLORS.navy },
                        { role: 'Nurses', count: 32000, color: CHART_COLORS.gold },
                        { role: 'Technicians', count: 8500, color: CHART_COLORS.platinum },
                        { role: 'Administrative', count: 12000, color: CHART_COLORS.teal },
                      ].map((staff, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{staff.role}</span>
                            <span className="text-sm font-bold" style={{ color: staff.color }}>
                              {staff.count.toLocaleString()}
                            </span>
                          </div>
                          <Progress
                            value={(staff.count / 32000) * 100}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Disease Tracking Tab */}
        <TabsContent value="diseases" className="space-y-6">
          <GlassPanel title="Disease Tracking Intelligence" description="Chronic disease monitoring and prevalence">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Chronic Disease Prevalence</CardTitle>
                  <CardDescription>By condition type</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={diseaseData}
                    xAxisKey="name"
                    bars={[
                      { dataKey: 'value', name: 'Prevalence %', color: CHART_COLORS.warning },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Disease Management Programs</CardTitle>
                  <CardDescription>Active monitoring initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-red-900/50 bg-red-900/20 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="h-5 w-5 text-red-400" />
                        <span className="font-semibold text-slate-200">Cardiovascular</span>
                      </div>
                      <div className="text-2xl font-bold text-red-400">28%</div>
                      <p className="text-xs text-slate-400">Prevalence Rate</p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-emerald-400">
                        <Shield className="h-3 w-3" />
                        Screening: 65% coverage
                      </div>
                    </div>
                    <div className="rounded-lg border border-yellow-900/50 bg-yellow-900/20 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="h-5 w-5 text-yellow-400" />
                        <span className="font-semibold text-slate-200">Diabetes</span>
                      </div>
                      <div className="text-2xl font-bold text-yellow-400">24%</div>
                      <p className="text-xs text-slate-400">Prevalence Rate</p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-emerald-400">
                        <Shield className="h-3 w-3" />
                        Management: 72% enrolled
                      </div>
                    </div>
                    <div className="rounded-lg border border-blue-900/50 bg-blue-900/20 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="h-5 w-5 text-blue-400" />
                        <span className="font-semibold text-slate-200">Respiratory</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-400">15%</div>
                      <p className="text-xs text-slate-400">Prevalence Rate</p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-emerald-400">
                        <Shield className="h-3 w-3" />
                        Treatment: 58% access
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Medical Tourism Tab */}
        <TabsContent value="tourism" className="space-y-6">
          <GlassPanel title="Medical Tourism Intelligence" description="Healthcare tourism revenue and patient flows">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Medical Tourism Trend</CardTitle>
                  <CardDescription>Monthly patient arrivals (thousands)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={healthTrendData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'tourism', name: 'Medical Tourists (K)', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Patient Origin Distribution</CardTitle>
                    <CardDescription>By region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={tourismData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Medical Tourism Revenue</CardTitle>
                    <CardDescription>Annual metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Total Patients</span>
                        <span className="text-xl font-bold text-emerald-400">350K+</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Revenue</span>
                        <span className="text-xl font-bold text-emerald-400">$2.1B</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Avg. Spend</span>
                        <span className="text-xl font-bold text-emerald-400">$6,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                        <span className="text-sm text-slate-300">Top Specialty</span>
                        <span className="text-xl font-bold text-emerald-400">Orthopedics</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Top Source Markets</CardTitle>
                  <CardDescription>Patient volume by country</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { country: 'Saudi Arabia', patients: 85000, growth: 12 },
                      { country: 'Kuwait', patients: 45000, growth: 8 },
                      { country: 'Qatar', patients: 32000, growth: 15 },
                      { country: 'Oman', patients: 28000, growth: 10 },
                      { country: 'Bahrain', patients: 18000, growth: 7 },
                    ].map((market, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3"
                      >
                        <div className="flex items-center gap-3">
                          <Plane className="h-4 w-4 text-emerald-400" />
                          <span className="text-sm font-medium text-slate-200">{market.country}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-bold text-slate-200">{market.patients.toLocaleString()}</span>
                          <span className="text-xs text-emerald-400">+{market.growth}%</span>
                        </div>
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
