'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MetricCard } from '@/components/dashboard/metric-card'
import { GlassPanel } from '@/components/dashboard/glass-card'
import {
  BarChart,
  AreaChart,
  PieChart,
  LineChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  Activity,
  AlertCircle,
  Brain,
  Flame,
  Heart,
  Lightbulb,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from 'lucide-react'
import { perceptionData } from '@/lib/data-loader'

export default function TheVoidFillerPage() {
  // Extract real data from data loader
  const { biohacking, mensHealth, neurodivergent } = perceptionData.voidFiller
  // Biohacking content trends
  const biohackingTrendData = [
    { month: 'Aug', demand: 72, content: 35, gap: 37 },
    { month: 'Sep', demand: 78, content: 42, gap: 36 },
    { month: 'Oct', demand: 82, content: 48, gap: 34 },
    { month: 'Nov', demand: 85, content: 55, gap: 30 },
    { month: 'Dec', demand: 88, content: 62, gap: 26 },
    { month: 'Jan', demand: 92, content: 68, gap: 24 },
  ]

  // Men's health topic distribution
  const mensHealthTopicsData = [
    { topic: 'Prostate Health', demand: 78, content: 45, engagement: 65 },
    { topic: 'Mental Health', demand: 85, content: 52, engagement: 72 },
    { topic: 'Fitness', demand: 92, content: 78, engagement: 85 },
    { topic: 'Nutrition', demand: 88, content: 65, engagement: 78 },
    { topic: 'Preventive Care', demand: 75, content: 42, engagement: 68 },
  ]

  // Neurodivergent audience segments
  const neurodivergentSegmentsData = [
    { segment: 'ADHD', size: 35, engagement: 82, content: 25 },
    { segment: 'Autism', size: 28, engagement: 78, content: 22 },
    { segment: 'Dyslexia', size: 22, engagement: 75, content: 18 },
    { segment: 'Other', size: 15, engagement: 70, content: 12 },
  ]

  // Content performance by category
  const contentPerformanceData = [
    { category: 'Biohacking', reach: 245000, engagement: 12.5, roi: 480 },
    { category: 'Mens Health', reach: 185000, engagement: 10.2, roi: 350 },
    { category: 'Neurodivergent', reach: 125000, engagement: 14.8, roi: 520 },
    { category: 'Longevity', reach: 98000, engagement: 11.5, roi: 410 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-indigo">The Void Filler</h1>
          <p className="mt-2 text-slate-600">
            Biohacking frontier, men's health, and neurodivergent strategies
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Scan for Voids
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <Plus className="h-4 w-4" />
            Create Content
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Content Voids Filled"
          value="23"
          previousValue={18}
          icon={<Lightbulb className="h-6 w-6" />}
          gradient="cyan"
        />
        <MetricCard
          title="Topics Covered"
          value="47"
          previousValue={38}
          icon={<Target className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Audience Reached"
          value="890K"
          previousValue={670000}
          icon={<Users className="h-6 w-6" />}
          gradient="emerald"
        />
        <MetricCard
          title="Engagement Rate"
          value="12.4%"
          previousValue={9.8}
          icon={<Activity className="h-6 w-6" />}
          gradient="rose"
          status="success"
        />
      </div>

      <Tabs defaultValue="biohacking" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="biohacking">Biohacking Frontier</TabsTrigger>
          <TabsTrigger value="mens-health">Men's Health</TabsTrigger>
          <TabsTrigger value="neurodivergent">Neurodivergent</TabsTrigger>
          <TabsTrigger value="content">Content Strategy</TabsTrigger>
        </TabsList>

        {/* Biohacking Frontier */}
        <TabsContent value="biohacking" className="space-y-6">
          {/* Biohacking Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Biohacking Demand vs. Content</CardTitle>
                <CardDescription>Content gap closing trend</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={biohackingTrendData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'demand', name: 'Public Demand', color: CHART_COLORS.indigo },
                    { dataKey: 'content', name: 'Content Created', color: CHART_COLORS.emerald },
                    { dataKey: 'gap', name: 'Content Gap', color: CHART_COLORS.orange },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Category Performance</CardTitle>
                <CardDescription>ROI by content category</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={contentPerformanceData}
                  xAxisKey="category"
                  bars={[
                    { dataKey: 'roi', name: 'ROI', color: CHART_COLORS.emerald },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Biohacking Content Frontier" description="Addressing the growing interest in preventive health and longevity" badge="Emerging">
            <div className="space-y-6">
              {/* Biohacking Overview */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-cyan-600">8.7/10</div>
                      <div className="text-sm text-slate-600 mt-2">Demand Score</div>
                      <div className="text-xs text-emerald-600 mt-1">High opportunity</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-slate-900">87%</div>
                      <div className="text-sm text-slate-600 mt-2">Content Gap</div>
                      <div className="text-xs text-rose-600 mt-1">Minimal competition</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-purple-600">280%</div>
                      <div className="text-sm text-slate-600 mt-2">Interest Growth</div>
                      <div className="text-xs text-emerald-600 mt-1">Last 6 months</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Biohacking Topics */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">High-Value Biohacking Topics</CardTitle>
                    <CardDescription>Topics with high demand and low supply</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {biohackingTopics.map((topic, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Flame className="h-4 w-4 text-amber-500" />
                              <span className="text-sm font-medium text-slate-700">{topic.name}</span>
                            </div>
                            <Badge variant="cyan" className="text-xs">{topic.opportunity}</Badge>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">Demand: {topic.demand}/10</span>
                            <span className="text-slate-500">Competition: {topic.competition}</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                            <div className="h-full rounded-full bg-gradient-cyan" style={{ width: `${topic.demand * 10}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Biohacking Persona</CardTitle>
                    <CardDescription>Target audience for biohacking content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-purple text-white text-2xl font-bold">
                          BT
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">The Biohacking Techie</div>
                          <div className="text-sm text-slate-600">25-40, Tech-savvy, High Income</div>
                          <div className="mt-2 flex flex-wrap gap-1">
                            <Badge variant="outline" className="text-xs">Wearable Devices</Badge>
                            <Badge variant="outline" className="text-xs">Nootropics</Badge>
                            <Badge variant="outline" className="text-xs">Quantified Self</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 pt-4 border-t border-slate-200">
                        <div className="text-xs text-slate-500">Preferred Platforms</div>
                        <div className="flex gap-2">
                          <Badge variant="denim" className="text-xs gap-1">
                            <Activity className="h-3 w-3" />
                            Reddit
                          </Badge>
                          <Badge variant="denim" className="text-xs gap-1">
                            <Video className="h-3 w-3" />
                            YouTube
                          </Badge>
                          <Badge variant="denim" className="text-xs gap-1">
                            <Search className="h-3 w-3" />
                            Twitter
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Men's Health */}
        <TabsContent value="mens-health" className="space-y-6">
          <GlassPanel title="Men's Health Initiative" description="Addressing the significant gap in men's mental and physical health content" badge="High Priority">
            <div className="space-y-6">
              {/* Men's Health Stats */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-rose-600">92%</div>
                      <div className="text-sm text-slate-600 mt-2">Content Gap</div>
                      <div className="text-xs text-rose-600 mt-1">Critical opportunity</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-slate-900">340%</div>
                      <div className="text-sm text-slate-600 mt-2">Search Increase</div>
                      <div className="text-xs text-emerald-600 mt-1">This year</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-purple-600">23%</div>
                      <div className="text-sm text-slate-600 mt-2">Current Coverage</div>
                      <div className="text-xs text-amber-600 mt-1">By DoH</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Men's Health Topics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Priority Men's Health Topics</CardTitle>
                  <CardDescription>Under-served areas with high audience demand</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {mensHealthTopics.map((topic, index) => (
                      <div key={index} className="rounded-lg bg-rose-50/50 border border-rose-200 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-900">{topic.name}</h4>
                          <Badge variant="rose" className="text-xs">{topic.priority}</Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">{topic.description}</p>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">Demand</span>
                            <span className="font-semibold text-emerald-600">{topic.demand}/10</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500">Current Content</span>
                            <span className="font-semibold text-rose-600">{topic.coverage}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Neurodivergent */}
        <TabsContent value="neurodivergent" className="space-y-6">
          <GlassPanel title="Neurodivergent Economic Strategy" description="Content strategies for ADHD, autism, and neurodiversity" badge="Growing">
            <div className="space-y-6">
              {/* Neurodivergent Stats */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-purple-600">81%</div>
                      <div className="text-sm text-slate-600 mt-2">Content Gap</div>
                      <div className="text-xs text-amber-600 mt-1">Significant opportunity</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-slate-900">156%</div>
                      <div className="text-sm text-slate-600 mt-2">Interest Growth</div>
                      <div className="text-xs text-emerald-600 mt-1">Year over year</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-slate-900">18%</div>
                      <div className="text-sm text-slate-600 mt-2">DoH Coverage</div>
                      <div className="text-xs text-slate-500 mt-1">Adult neurodiversity</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Neurodivergent Topics */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Neurodivergent Content Categories</CardTitle>
                  <CardDescription>Areas requiring dedicated content strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {neurodivergentTopics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-4 rounded-lg bg-purple-50/50 border border-purple-200 p-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-purple text-white">
                          <Brain className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{topic.name}</div>
                          <p className="mt-1 text-sm text-slate-600">{topic.description}</p>
                          <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                            <span>Demand: {topic.demand}/10</span>
                            <span>•</span>
                            <span>Audience: {topic.audience}</span>
                            <span>•</span>
                            <span>Competition: {topic.competition}</span>
                          </div>
                        </div>
                        <Badge variant="purple" className="text-xs">{topic.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Content Strategy */}
        <TabsContent value="content" className="space-y-6">
          <GlassPanel title="Void-Filling Content Strategy" description="Data-driven content creation for identified gaps">
            <div className="space-y-6">
              {/* Content Pipeline */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Active Content Projects</CardTitle>
                      <CardDescription>Filling identified content voids</CardDescription>
                    </div>
                    <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
                      <Plus className="h-4 w-4" />
                      New Project
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contentProjects.map((project, index) => (
                      <div key={index} className="flex items-start gap-4 rounded-lg bg-slate-50/50 p-4">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-${project.color} text-white`}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-slate-900">{project.name}</h4>
                              <p className="mt-1 text-sm text-slate-600">{project.description}</p>
                              <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                                <span>Target: {project.target}</span>
                                <span>•</span>
                                <span>Platform: {project.platform}</span>
                                <span>•</span>
                                <span>Status: {project.status}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-slate-900">{project.progress}%</div>
                              <div className="text-xs text-slate-500">Complete</div>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1 shrink-0">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-base">Engagement Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-extrabold text-emerald-600">12.4%</div>
                    <div className="text-sm text-slate-600 mt-2">Void-filling content</div>
                    <div className="text-xs text-emerald-600 mt-1">+23% above average</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-base">Audience Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-extrabold text-purple-600">890K</div>
                    <div className="text-sm text-slate-600 mt-2">New followers gained</div>
                    <div className="text-xs text-emerald-600 mt-1">Since launch</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-base">ROI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-extrabold text-cyan-600">5.8x</div>
                    <div className="text-sm text-slate-600 mt-2">Return on investment</div>
                    <div className="text-xs text-emerald-600 mt-1">Exceptional performance</div>
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

// Data
const biohackingTopics = [
  { name: 'Preventive Longevity', demand: 9.2, competition: 'Low', opportunity: 'Exceptional' },
  { name: 'Nootropic Supplements', demand: 8.7, competition: 'Medium', opportunity: 'High' },
  { name: 'Quantified Self', demand: 8.4, competition: 'Low', opportunity: 'High' },
  { name: 'Biohacking Devices', demand: 7.9, competition: 'Low', opportunity: 'Good' },
  { name: 'Intermittent Fasting', demand: 7.6, competition: 'Medium', opportunity: 'Good' },
  { name: 'Sleep Optimization', demand: 7.2, competition: 'Medium', opportunity: 'Fair' },
]

const mensHealthTopics = [
  {
    name: 'Men\'s Mental Health',
    description: 'Breaking stigma around male mental health issues',
    priority: 'Critical',
    demand: 9.2,
    coverage: 8,
  },
  {
    name: 'Prostate Health',
    description: 'Education and screening awareness',
    priority: 'High',
    demand: 8.4,
    coverage: 12,
  },
  {
    name: 'Testosterone Health',
    description: 'Evidence-based hormone health information',
    priority: 'Medium',
    demand: 7.8,
    coverage: 15,
  },
  {
    name: 'Cardiovascular Risk',
    description: 'Heart disease prevention for men',
    priority: 'High',
    demand: 8.1,
    coverage: 22,
  },
  {
    name: 'Male Fertility',
    description: 'Reproductive health and family planning',
    priority: 'Medium',
    demand: 7.2,
    coverage: 18,
  },
  {
    name: 'Stress Management',
    description: 'Work-life balance and coping strategies',
    priority: 'High',
    demand: 7.6,
    coverage: 25,
  },
]

const neurodivergentTopics = [
  {
    name: 'ADHD in Adults',
    description: 'Diagnosis, treatment, and workplace accommodations',
    demand: 9.0,
    audience: '450K searches/month',
    competition: 'Low',
    status: 'In Production',
  },
  {
    name: 'Autism Spectrum',
    description: 'Adult autism resources and support',
    demand: 8.5,
    audience: '320K searches/month',
    competition: 'Very Low',
    status: 'Planning',
  },
  {
    name: 'Neurodiversity at Work',
    description: 'Creating inclusive workplaces',
    demand: 7.8,
    audience: '180K searches/month',
    competition: 'Low',
    status: 'Research',
  },
  {
    name: 'Sensory Processing',
    description: 'Managing sensory sensitivities',
    demand: 7.2,
    audience: '120K searches/month',
    competition: 'Very Low',
    status: 'In Production',
  },
]

const contentProjects = [
  {
    name: 'Men\'s Mental Health Series',
    description: '12-part content series addressing male mental health stigma',
    target: 'Men 25-45',
    platform: 'Instagram, YouTube',
    status: 'In Production',
    progress: 67,
    color: 'rose',
    icon: <Heart className="h-6 w-6" />,
  },
  {
    name: 'Biohacking Weekly',
    description: 'Weekly biohacking tips and research updates',
    target: 'Tech-savvy professionals',
    platform: 'Twitter, LinkedIn',
    status: 'Active',
    progress: 34,
    color: 'cyan',
    icon: <Flame className="h-6 w-6" />,
  },
  {
    name: 'Neurodivergent Resources',
    description: 'Comprehensive guides for neurodivergent adults',
    target: 'Neurodivergent community',
    platform: 'Multi-platform',
    status: 'Planning',
    progress: 12,
    color: 'purple',
    icon: <Brain className="h-6 w-6" />,
  },
  {
    name: 'Preventive Health Guide',
    description: 'Long-form content on preventive health strategies',
    target: 'Health-conscious adults',
    platform: 'Blog, YouTube',
    status: 'Active',
    progress: 45,
    color: 'emerald',
    icon: <Target className="h-6 w-6" />,
  },
]
