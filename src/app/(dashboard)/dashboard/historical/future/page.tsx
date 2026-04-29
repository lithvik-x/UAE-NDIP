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
  AlertCircle,
  AlertTriangle,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Globe,
  Clock,
  Calendar,
  Target,
  Rocket,
  TreePine,
  Banknote,
  Cpu,
  Plane,
  Eye,
  Sparkles,
  Milestone,
} from 'lucide-react'
import {
  useModernizationVisionData,
  useRecentEraData,
} from '@/lib/data-loader'

export default function FutureProjectionsPage() {
  const { data: modernization } = useModernizationVisionData()
  const { data: recent } = useRecentEraData()

  const data = modernization || {
    description: 'Future projections, Centennial 2071 goals, and strategic vision implementation',
    keyEvents: [],
    policyOutcomes: [],
  }

  // Vision 2071 Goals
  const vision2071Goals = [
    { goal: 'GDP per Capita', current: '$58,000', target: '$100,000+', progress: 58 },
    { goal: 'Non-Oil GDP', current: '71%', target: '90%', progress: 79 },
    { goal: 'Renewable Energy', current: '14%', target: '50%', progress: 28 },
    { goal: 'Knowledge Workforce', current: '40%', target: '70%', progress: 57 },
    { goal: 'Global Innovation Rank', current: '#34', target: '#10', progress: 34 },
    { goal: 'Happiness Index', current: '#21', target: '#10', progress: 48 },
  ]

  // Project pipeline
  const projectPipelineData = [
    { project: 'Etihad Rail', status: 'Active', completion: 85, sector: 'Transport' },
    { project: 'Abu Dhabi Metro', status: 'Planning', completion: 15, sector: 'Transport' },
    { project: 'Al Maktoum Airport', status: 'Active', completion: 45, sector: 'Infrastructure' },
    { project: 'Mohammed bin Rashid City', status: 'Active', completion: 72, sector: 'Urban' },
    { project: 'Dubai Creek Tower', status: 'Planning', completion: 10, sector: 'Urban' },
    { project: 'Barari Nuclear', status: 'Active', completion: 90, sector: 'Energy' },
    { project: 'Solar Park Phase 4', status: 'Active', completion: 65, sector: 'Energy' },
    { project: 'UAE Space Station', status: 'Planning', completion: 5, sector: 'Technology' },
  ]

  // Future sectors
  const sectorProjectionData = [
    { sector: 'Technology & AI', growth: 125, color: CHART_COLORS.emerald },
    { sector: 'Clean Energy', growth: 95, color: CHART_COLORS.cyan },
    { sector: 'Tourism', growth: 78, color: CHART_COLORS.gold },
    { sector: 'Finance', growth: 65, color: CHART_COLORS.navy },
    { sector: 'Manufacturing', growth: 55, color: CHART_COLORS.platinum },
  ]

  // Investment projections
  const investmentProjectionData = [
    { year: '2026', investment: 450 },
    { year: '2030', investment: 580 },
    { year: '2040', investment: 750 },
    { year: '2050', investment: 900 },
    { year: '2071', investment: 1200 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="emerald" className="mb-2">H-SECTOR</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-emerald">Future Projections</h1>
          <p className="mt-2 text-slate-400">
            {data.description || 'Centennial 2071 vision, strategic goals, and projected milestones'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-emerald/50 text-emerald hover:bg-emerald/10">
            <Eye className="h-4 w-4" />
            Project Scanner
          </Button>
          <Button className="bg-gradient-emerald hover:opacity-90 text-navy-950 gap-2">
            <Sparkles className="h-4 w-4" />
            Analyze Vision
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="2071 Goals Met"
          value="24%"
          previousValue={18}
          icon={<Target className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Active Projects"
          value="128"
          previousValue={105}
          icon={<Milestone className="h-6 w-6" />}
          gradient="gold"
        />
        <MetricCard
          title="Projected GDP 2071"
          value="$400B+"
          previousValue={280}
          icon={<Banknote className="h-6 w-6" />}
          gradient="navy"
        />
        <MetricCard
          title="Investment Pipeline"
          value="$1.2T"
          previousValue={950}
          icon={<Rocket className="h-6 w-6" />}
          gradient="platinum"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="vision2071">Centennial 2071</TabsTrigger>
          <TabsTrigger value="projects">Project Pipeline</TabsTrigger>
          <TabsTrigger value="projections">Growth Projections</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Future Projections Overview" description="Strategic vision and growth trajectory">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Investment Trajectory</CardTitle>
                  <CardDescription>Projected investment through 2071 (AED Billions)</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={investmentProjectionData}
                    xAxisKey="year"
                    areas={[
                      { dataKey: 'investment', name: 'Investment', color: CHART_COLORS.emerald },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sector Growth Potential</CardTitle>
                    <CardDescription>Projected growth by sector (%)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={sectorProjectionData}
                      xAxisKey="sector"
                      bars={[
                        { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Milestones Ahead</CardTitle>
                    <CardDescription>Critical targets through 2030</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { year: '2027', milestone: 'Etihad Rail Passenger Service', status: 'On Track' },
                        { year: '2030', milestone: '30% Renewable Energy', status: 'On Track' },
                        { year: '2030', milestone: '50% Knowledge Economy', status: 'At Risk' },
                        { year: '2033', milestone: 'Al Maktoum Airport Phase 1', status: 'On Track' },
                        { year: '2035', milestone: '100% Smart Government', status: 'On Track' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-4 w-4 text-emerald" />
                            <span className="font-medium text-slate-200">{item.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-400">{item.milestone}</span>
                            <Badge
                              variant={item.status === 'On Track' ? 'success' : 'warning'}
                              className="text-xs"
                            >
                              {item.status}
                            </Badge>
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

        {/* Vision 2071 Tab */}
        <TabsContent value="vision2071" className="space-y-6">
          <GlassPanel title="Centennial 2071 Goals" description="UAE 50-year strategic vision progress">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Goal Progress Dashboard</CardTitle>
                  <CardDescription>Current status vs. 2071 targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {vision2071Goals.map((goal, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-200">{goal.goal}</span>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-slate-400">Current: {goal.current}</span>
                            <span className="text-sm text-emerald">Target: {goal.target}</span>
                          </div>
                        </div>
                        <div className="relative">
                          <Progress value={goal.progress} className="h-3" />
                          <span className="absolute right-0 top-[-20px] text-xs font-bold text-emerald">{goal.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Investment Allocation</CardTitle>
                  <CardDescription>Centennial 2071 AED 600B investment plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={[
                      { name: 'Technology', value: 30, color: CHART_COLORS.emerald },
                      { name: 'Infrastructure', value: 25, color: CHART_COLORS.navy },
                      { name: 'Energy', value: 20, color: CHART_COLORS.gold },
                      { name: 'Healthcare', value: 15, color: CHART_COLORS.platinum },
                      { name: 'Education', value: 10, color: CHART_COLORS.cyan },
                    ]}
                    height={280}
                    showLegend={true}
                  />
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-6">
          <GlassPanel title="Major Project Pipeline" description="National infrastructure and development projects">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Project Status Overview</CardTitle>
                  <CardDescription>Completion percentage by project</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={projectPipelineData}
                    xAxisKey="project"
                    bars={[
                      { dataKey: 'completion', name: 'Completion %', color: CHART_COLORS.gold },
                    ]}
                    height={350}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Project Details</CardTitle>
                  <CardDescription>Status and sector breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-3">
                      {projectPipelineData.map((project, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Milestone className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{project.project}</p>
                              <p className="text-sm text-slate-400">{project.sector}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="w-32">
                              <Progress value={project.completion} className="h-2" />
                            </div>
                            <Badge
                              variant={project.status === 'Active' ? 'success' : 'warning'}
                              className="text-xs"
                            >
                              {project.status}
                            </Badge>
                            <span className="text-sm font-bold text-gold">{project.completion}%</span>
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

        {/* Projections Tab */}
        <TabsContent value="projections" className="space-y-6">
          <GlassPanel title="Growth Projections" description="Economic and social development forecasts">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">GDP Projection (USD Billions)</CardTitle>
                  <CardDescription>Economic growth trajectory</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={[
                      { year: '2026', gdp: 520 },
                      { year: '2030', gdp: 650 },
                      { year: '2040', gdp: 850 },
                      { year: '2050', gdp: 1100 },
                      { year: '2071', gdp: 1800 },
                    ]}
                    xAxisKey="year"
                    bars={[
                      { dataKey: 'gdp', name: 'GDP', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Population Projection</CardTitle>
                    <CardDescription>Demographic growth (millions)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LineChart
                      data={[
                        { year: '2026', pop: 10.2 },
                        { year: '2030', pop: 11.5 },
                        { year: '2040', pop: 13.8 },
                        { year: '2050', pop: 15.5 },
                        { year: '2071', pop: 20.0 },
                      ]}
                      xAxisKey="year"
                      lines={[
                        { dataKey: 'pop', name: 'Population', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Sector Growth Forecast</CardTitle>
                    <CardDescription>40-year growth potential by sector</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sectorProjectionData.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-200">{item.sector}</span>
                            <span className="text-lg font-bold text-emerald">+{item.growth}%</span>
                          </div>
                          <Progress
                            value={(item.growth / 125) * 100}
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
      </Tabs>
    </div>
  )
}
