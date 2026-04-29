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
  Cpu,
  Rocket,
  Lightbulb,
  TrendingUp,
  Globe,
  Users,
  Building,
  Zap,
  Brain,
  Cloud,
  Shield,
  Star,
} from 'lucide-react'

export default function TechnologyTrendsPage() {
  // AI readiness trend data
  const aiReadinessData = [
    { month: 'Jan', score: 82, globalAvg: 58 },
    { month: 'Feb', score: 83, globalAvg: 59 },
    { month: 'Mar', score: 84, globalAvg: 60 },
    { month: 'Apr', score: 85, globalAvg: 61 },
    { month: 'May', score: 86, globalAvg: 62 },
    { month: 'Jun', score: 87, globalAvg: 63 },
    { month: 'Jul', score: 88, globalAvg: 64 },
    { month: 'Aug', score: 89, globalAvg: 65 },
    { month: 'Sep', score: 90, globalAvg: 66 },
    { month: 'Oct', score: 91, globalAvg: 67 },
    { month: 'Nov', score: 92, globalAvg: 68 },
    { month: 'Dec', score: 93, globalAvg: 69 },
  ]

  // Technology adoption by sector
  const adoptionData = [
    { sector: 'Financial Services', adoption: 92, growth: 15 },
    { sector: 'Government Services', adoption: 88, growth: 22 },
    { sector: 'Healthcare', adoption: 85, growth: 28 },
    { sector: 'Retail & Commerce', adoption: 82, growth: 18 },
    { sector: 'Manufacturing', adoption: 76, growth: 25 },
    { sector: 'Education', adoption: 74, growth: 32 },
  ]

  // Investment by tech category
  const investmentData = [
    { category: 'AI & Machine Learning', value: 35, color: CHART_COLORS.gold },
    { category: 'Cloud Infrastructure', value: 22, color: CHART_COLORS.navy },
    { category: 'Cybersecurity', value: 18, color: CHART_COLORS.platinum },
    { category: 'Blockchain', value: 12, color: CHART_COLORS.emerald },
    { category: 'IoT & Robotics', value: 8, color: CHART_COLORS.cyan },
    { category: 'Quantum Computing', value: 5, color: CHART_COLORS.purple },
  ]

  // Startup ecosystem data
  const startupData = [
    { stage: 'Pre-Seed', companies: 1200, value: 2.1 },
    { stage: 'Seed', companies: 850, value: 4.2 },
    { stage: 'Series A', companies: 420, value: 6.8 },
    { stage: 'Series B', companies: 180, value: 8.5 },
    { stage: 'Series C+', companies: 65, value: 12.4 },
  ]

  // Tech talent pipeline
  const talentData = [
    { role: 'AI/ML Engineers', demand: 95, supply: 42 },
    { role: 'Cloud Architects', demand: 88, supply: 55 },
    { role: 'Cybersecurity', demand: 92, supply: 48 },
    { role: 'Data Scientists', demand: 90, supply: 65 },
    { role: 'Full Stack Devs', demand: 85, supply: 72 },
    { role: 'DevOps/SRE', demand: 82, supply: 68 },
  ]

  // Key tech initiatives
  const initiatives = [
    { name: 'G42 AI Cloud Platform', status: 'Active', impact: 95 },
    { name: 'UAE National AI Strategy 2031', status: 'On Track', impact: 98 },
    { name: 'Dubai AI Training Program', status: 'Scaling', impact: 85 },
    { name: 'Smart Dubai Platform', status: 'Active', impact: 90 },
    { name: 'FinTech Hub Initiative', status: 'Growing', impact: 88 },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400'
    if (score >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="gold" className="mb-2">TRENDS</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-gold">Technology Trends</h1>
          <p className="mt-2 text-slate-400">
            AI ecosystem, digital transformation, and tech innovation intelligence
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-gold/50 text-gold hover:bg-gold/10">
            <Brain className="h-4 w-4" />
            AI Dashboard
          </Button>
          <Button className="bg-gradient-gold hover:opacity-90 text-navy-950 gap-2">
            <Cpu className="h-4 w-4" />
            Track Trends
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="AI Readiness Score"
          value={93}
          previousValue={91}
          icon={<Brain className="h-6 w-6" />}
          gradient="gold"
          status="success"
        />
        <MetricCard
          title="Tech Investment ($B)"
          value={15.2}
          previousValue={13.8}
          icon={<TrendingUp className="h-6 w-6" />}
          gradient="navy"
          status="success"
        />
        <MetricCard
          title="Active Startups"
          value={2840}
          previousValue={2650}
          icon={<Rocket className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Digital Adoption %"
          value={87}
          previousValue={82}
          icon={<Cloud className="h-6 w-6" />}
          gradient="platinum"
          status="success"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-panel" scrollable>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ai">AI Ecosystem</TabsTrigger>
          <TabsTrigger value="talent">Tech Talent</TabsTrigger>
          <TabsTrigger value="investments">Investments</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <GlassPanel title="Technology Trends Overview" description="UAE technology landscape and digital transformation metrics">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">UAE AI Readiness vs Global Average</CardTitle>
                  <CardDescription>12-month trajectory comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={aiReadinessData}
                    xAxisKey="month"
                    lines={[
                      { dataKey: 'score', name: 'UAE Score', color: CHART_COLORS.gold },
                      { dataKey: 'globalAvg', name: 'Global Average', color: CHART_COLORS.platinum },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Tech Adoption by Sector</CardTitle>
                    <CardDescription>Implementation rate across industries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={adoptionData}
                      xAxisKey="sector"
                      bars={[
                        { dataKey: 'adoption', name: 'Adoption %', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Investment Distribution</CardTitle>
                    <CardDescription>Tech investment by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PieChart
                      data={investmentData}
                      height={280}
                      showLegend={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Technology Initiatives</CardTitle>
                  <CardDescription>National strategic tech programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3">
                      {initiatives.map((initiative, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Cpu className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-200">{initiative.name}</p>
                              <p className="text-sm text-slate-400">Impact Score: {initiative.impact}</p>
                            </div>
                          </div>
                          <Badge variant={initiative.status === 'Active' ? 'default' : initiative.status === 'On Track' ? 'success' : 'outline'} className="text-xs">
                            {initiative.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* AI Ecosystem Tab */}
        <TabsContent value="ai" className="space-y-6">
          <GlassPanel title="AI Ecosystem Intelligence" description="Artificial intelligence adoption and capabilities">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">AI Readiness Progress</CardTitle>
                  <CardDescription>Monthly score improvement</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={aiReadinessData}
                    xAxisKey="month"
                    areas={[
                      { dataKey: 'score', name: 'AI Readiness', color: CHART_COLORS.gold },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">AI Adoption Leaders</CardTitle>
                    <CardDescription>Sector-by-sector implementation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={adoptionData.slice(0, 4)}
                      xAxisKey="sector"
                      bars={[
                        { dataKey: 'adoption', name: 'Adoption %', color: CHART_COLORS.navy },
                        { dataKey: 'growth', name: 'Growth %', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">AI Investment Trend</CardTitle>
                    <CardDescription>Monthly AI investment in $B</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={aiReadinessData.map((d, i) => ({ month: d.month, investment: 1.2 + i * 0.15 }))}
                      xAxisKey="month"
                      areas={[
                        { dataKey: 'investment', name: 'Investment $B', color: CHART_COLORS.emerald },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key AI Entities</CardTitle>
                  <CardDescription>Major AI companies and platforms in UAE</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-gold-700 bg-gold-900/30 p-4 text-center">
                      <Cpu className="h-8 w-8 mx-auto text-gold mb-2" />
                      <div className="text-xl font-bold text-gold">G42</div>
                      <p className="text-sm text-slate-400">AI Infrastructure</p>
                    </div>
                    <div className="rounded-lg border border-navy-700 bg-navy-900/50 p-4 text-center">
                      <Brain className="h-8 w-8 mx-auto text-navy-400 mb-2" />
                      <div className="text-xl font-bold text-navy-400">Bayanat AI</div>
                      <p className="text-sm text-slate-400">Geospatial AI</p>
                    </div>
                    <div className="rounded-lg border border-platinum-700 bg-platinum-900/30 p-4 text-center">
                      <Cpu className="h-8 w-8 mx-auto text-platinum mb-2" />
                      <div className="text-xl font-bold text-platinum">Falcon AI</div>
                      <p className="text-sm text-slate-400">Open Source LLM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Tech Talent Tab */}
        <TabsContent value="talent" className="space-y-6">
          <GlassPanel title="Tech Talent Pipeline" description="Supply and demand for technology professionals">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Talent Demand vs Supply</CardTitle>
                  <CardDescription>Skill gap analysis by role</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={talentData}
                    xAxisKey="role"
                    bars={[
                      { dataKey: 'demand', name: 'Demand %', color: CHART_COLORS.gold },
                      { dataKey: 'supply', name: 'Supply %', color: CHART_COLORS.navy },
                    ]}
                    height={300}
                    showGrid={true}
                  />
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Talent Pipeline Metrics</CardTitle>
                  <CardDescription>UAE tech workforce development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Users className="mx-auto h-6 w-6 text-gold mb-2" />
                      <p className="text-xs text-slate-400">Tech Professionals</p>
                      <p className="text-xl font-bold text-gold">125,000</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <GraduationCap className="mx-auto h-6 w-6 text-navy mb-2" />
                      <p className="text-xs text-slate-400">CS Graduates/Year</p>
                      <p className="text-xl font-bold text-navy">18,500</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Globe className="mx-auto h-6 w-6 text-emerald mb-2" />
                      <p className="text-xs text-slate-400">Remote Workers</p>
                      <p className="text-xl font-bold text-emerald">45,000</p>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                      <Star className="mx-auto h-6 w-6 text-platinum mb-2" />
                      <p className="text-xs text-slate-400">Certifications/Year</p>
                      <p className="text-xl font-bold text-platinum">32,000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Training Programs</CardTitle>
                  <CardDescription>National upskilling initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {[
                        { name: 'UAE AI Summer School', participants: 15000, rating: 4.8 },
                        { name: 'Dubai Future Accelerators', participants: 2500, rating: 4.9 },
                        { name: 'National Coding Initiative', participants: 42000, rating: 4.6 },
                        { name: 'GITEX Talent Hunt', participants: 8000, rating: 4.7 },
                      ].map((program, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold">
                              <Lightbulb className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-medium text-slate-200">{program.name}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-slate-400">{program.participants.toLocaleString()} participants</span>
                            <Badge variant="outline" className="text-xs">{program.rating} rating</Badge>
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

        {/* Investments Tab */}
        <TabsContent value="investments" className="space-y-6">
          <GlassPanel title="Tech Investment Landscape" description="Venture capital and corporate tech investment">
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Investment by Category</CardTitle>
                  <CardDescription>Distribution of tech investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={investmentData}
                    height={300}
                    showLegend={true}
                  />
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Startup Ecosystem</CardTitle>
                    <CardDescription>Companies by funding stage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      data={startupData}
                      xAxisKey="stage"
                      bars={[
                        { dataKey: 'companies', name: 'Companies', color: CHART_COLORS.gold },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Cumulative Value</CardTitle>
                    <CardDescription>Total funding by stage ($B)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AreaChart
                      data={startupData}
                      xAxisKey="stage"
                      areas={[
                        { dataKey: 'value', name: 'Value $B', color: CHART_COLORS.navy },
                      ]}
                      height={280}
                      showGrid={true}
                    />
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Notable Exits</CardTitle>
                  <CardDescription>Major tech acquisitions and IPOs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[250px]">
                    <div className="space-y-3">
                      {[
                        { company: 'Careem', exitType: 'Acquisition', value: '3.5B', acquirer: 'Uber' },
                        { company: 'Souq.com', exitType: 'Acquisition', value: '650M', acquirer: 'Amazon' },
                        { company: 'Noon.com', exitType: 'IPO', value: '1.2B', market: 'Tadawul' },
                        { company: 'Swvl', exitType: 'SPAC', value: '1.5B', market: 'Nasdaq' },
                        { company: 'Alef Education', exitType: 'IPO', value: '2.1B', market: 'ADX' },
                      ].map((exit, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-slate-800/50 p-3">
                          <div className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-gold" />
                            <div>
                              <p className="text-sm font-medium text-slate-200">{exit.company}</p>
                              <p className="text-xs text-slate-400">{exit.acquirer || exit.market}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="text-xs">{exit.exitType}</Badge>
                            <p className="text-lg font-bold text-gold mt-1">${exit.value}</p>
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
      </Tabs>
    </div>
  )
}

function GraduationCap({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
    </svg>
  )
}
