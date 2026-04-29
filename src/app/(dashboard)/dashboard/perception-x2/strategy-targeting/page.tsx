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
  AlertCircle,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Brain,
  Building,
  Eye,
  Flag,
  Ghost,
  Globe,
  Heart,
  Lightbulb,
  MapPin,
  MessageSquare,
  Monitor,
  Newspaper,
  Radio,
  Search,
  Smartphone,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  User,
  UserCheck,
  UserPlus,
  UserX,
  Users,
  Video,
  Zap,
} from 'lucide-react'
import { perceptionData } from '@/lib/data-loader'

export default function StrategyTargetingPage() {
  // Extract real data from data loader
  const { personas, painPoints, voids } = perceptionData.strategyTargeting
  // Persona distribution data
  const personaDistributionData = [
    { name: 'Anxious Expat Mom', size: 28, engagement: 85, painPoints: 12 },
    { name: 'Biohacking Techie', size: 15, engagement: 72, painPoints: 8 },
    { name: 'Traditionalist Elder', size: 22, engagement: 58, painPoints: 15 },
    { name: 'Western Expat', size: 18, engagement: 68, painPoints: 6 },
    { name: 'Blue-Collar Worker', size: 17, engagement: 45, painPoints: 6 },
  ]

  // Pain point analysis
  const painPointData = [
    { category: 'Insurance Claims', severity: 92, frequency: 145, sentiment: 35 },
    { category: 'Wait Times', severity: 85, frequency: 220, sentiment: 42 },
    { category: 'Language Barrier', severity: 78, frequency: 95, sentiment: 55 },
    { category: 'Digital Access', severity: 65, frequency: 78, sentiment: 62 },
    { category: 'Cost Confusion', severity: 72, frequency: 125, sentiment: 48 },
  ]

  // Content void analysis
  const voidAnalysisData = [
    { topic: 'Mental Health Resources', demand: 95, supply: 25, priority: 'critical' },
    { topic: 'Insurance Guides', demand: 88, supply: 40, priority: 'high' },
    { topic: 'Preventive Care', demand: 75, supply: 55, priority: 'medium' },
    { topic: 'Chronic Disease Mgmt', demand: 70, supply: 60, priority: 'medium' },
    { topic: 'Pediatric Nutrition', demand: 65, supply: 50, priority: 'low' },
  ]

  // Targeting accuracy trends
  const targetingAccuracyData = [
    { month: 'Aug', accuracy: 82, reach: 68, conversion: 12 },
    { month: 'Sep', accuracy: 85, reach: 72, conversion: 15 },
    { month: 'Oct', accuracy: 88, reach: 78, conversion: 18 },
    { month: 'Nov', accuracy: 90, reach: 82, conversion: 21 },
    { month: 'Dec', accuracy: 91, reach: 85, conversion: 24 },
    { month: 'Jan', accuracy: 93, reach: 88, conversion: 27 },
  ]

  // Channel effectiveness by persona
  const channelEffectivenessData = [
    { channel: 'Instagram', expatMom: 85, techie: 72, elder: 25 },
    { channel: 'WhatsApp', expatMom: 78, techie: 65, elder: 45 },
    { channel: 'Facebook', expatMom: 65, techie: 45, elder: 68 },
    { channel: 'Twitter/X', expatMom: 35, techie: 85, elder: 15 },
    { channel: 'LinkedIn', expatMom: 25, techie: 68, elder: 12 },
  ]

  // Shadow narrative prevalence
  const shadowNarrativeData = [
    { narrative: 'Data Privacy Concerns', belief: 45, reach: 125000, risk: 'high' },
    { narrative: 'Big Pharma Conspiracy', belief: 32, reach: 85000, risk: 'medium' },
    { narrative: 'Hidden Costs', belief: 38, reach: 95000, risk: 'medium' },
    { narrative: 'Preferential Treatment', belief: 22, reach: 45000, risk: 'low' },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold gradient-text-indigo">Strategy & Targeting</h1>
          <p className="mt-2 text-slate-600">
            Persona lab, pain point matrix, and void scanner for precision targeting
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Explore Segments
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <UserPlus className="h-4 w-4" />
            Create Persona
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Personas"
          value="12"
          previousValue={9}
          icon={<User className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="Pain Points Identified"
          value="47"
          previousValue={38}
          icon={<AlertCircle className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Content Voids Found"
          value="23"
          previousValue={18}
          icon={<Ghost className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Targeting Accuracy"
          value="91.3%"
          previousValue={87.2}
          icon={<Target className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </div>

      <Tabs defaultValue="personas" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="personas">Persona Lab</TabsTrigger>
          <TabsTrigger value="pain-points">Pain Point Matrix</TabsTrigger>
          <TabsTrigger value="voids">Void Scanner</TabsTrigger>
          <TabsTrigger value="targeting">Targeting Strategy</TabsTrigger>
          <TabsTrigger value="shadow-narratives">Shadow Narratives</TabsTrigger>
        </TabsList>

        {/* Persona Lab */}
        <TabsContent value="personas" className="space-y-6">
          {/* Persona Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Persona Population Distribution</CardTitle>
                <CardDescription>Percentage breakdown by persona type</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: 'Anxious Expat Mom', value: 28, color: CHART_COLORS.purple },
                    { name: 'Biohacking Techie', value: 15, color: CHART_COLORS.indigo },
                    { name: 'Traditionalist Elder', value: 22, color: CHART_COLORS.denim },
                    { name: 'Western Expat', value: 18, color: CHART_COLORS.emerald },
                    { name: 'Blue-Collar Worker', value: 17, color: CHART_COLORS.orange },
                  ]}
                  donut={true}
                  height={250}
                  showLegend={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Persona Engagement & Pain Points</CardTitle>
                <CardDescription>Engagement rate vs. pain point count</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={personaDistributionData}
                  xAxisKey="name"
                  bars={[
                    { dataKey: 'engagement', name: 'Engagement %', color: CHART_COLORS.indigo },
                    { dataKey: 'painPoints', name: 'Pain Points', color: CHART_COLORS.rose },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Persona Laboratory" description="Detailed audience profiles and behavioral analysis" badge="AI-Generated">
            <div className="space-y-6">
              {/* Persona Overview */}
              <div className="grid gap-6 lg:grid-cols-4">
                {personaOverview.map((persona, index) => (
                  <Card key={index} className="glass-card group hover:shadow-glass-lg transition-all">
                    <CardContent className="pt-6">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-${persona.color} text-white text-2xl font-bold mx-auto mb-4`}>
                        {persona.initials}
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-slate-900">{persona.name}</div>
                        <div className="text-xs text-slate-500 mt-1">{persona.subtitle}</div>
                        <div className="mt-3 text-2xl font-bold text-slate-900">{persona.size}%</div>
                        <div className="text-xs text-slate-500">Population</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Detailed Personas */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Detailed Persona Profiles</CardTitle>
                      <CardDescription>Complete behavioral and psychographic analysis</CardDescription>
                    </div>
                    <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
                      <UserPlus className="h-4 w-4" />
                      Add Persona
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px]">
                    <div className="space-y-4 pr-4">
                      {detailedPersonas.map((persona, index) => (
                        <Card key={index} className="glass-card">
                          <CardHeader className="pb-3">
                            <div className="flex items-start gap-4">
                              <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-${persona.color} text-white text-xl font-bold shrink-0`}>
                                {persona.initials}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <CardTitle className="text-lg">{persona.name}</CardTitle>
                                  <Badge variant={persona.color as any} className="text-xs">{persona.segment}</Badge>
                                </div>
                                <CardDescription className="mt-1">{persona.tagline}</CardDescription>
                              </div>
                              <Badge variant="outline" className="text-xs">{persona.population}% of population</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {/* Demographics */}
                            <div>
                              <div className="text-sm font-semibold text-slate-700 mb-2">Demographics</div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <div className="rounded-lg bg-slate-50 p-2">
                                  <div className="text-xs text-slate-500">Age</div>
                                  <div className="text-sm font-semibold text-slate-900">{persona.age}</div>
                                </div>
                                <div className="rounded-lg bg-slate-50 p-2">
                                  <div className="text-xs text-slate-500">Location</div>
                                  <div className="text-sm font-semibold text-slate-900">{persona.location}</div>
                                </div>
                                <div className="rounded-lg bg-slate-50 p-2">
                                  <div className="text-xs text-slate-500">Income</div>
                                  <div className="text-sm font-semibold text-slate-900">{persona.income}</div>
                                </div>
                                <div className="rounded-lg bg-slate-50 p-2">
                                  <div className="text-xs text-slate-500">Education</div>
                                  <div className="text-sm font-semibold text-slate-900">{persona.education}</div>
                                </div>
                              </div>
                            </div>

                            {/* Behaviors */}
                            <div>
                              <div className="text-sm font-semibold text-slate-700 mb-2">Behaviors & Habits</div>
                              <div className="flex flex-wrap gap-2">
                                {persona.behaviors.map((behavior, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">{behavior}</Badge>
                                ))}
                              </div>
                            </div>

                            {/* Pain Points */}
                            <div>
                              <div className="text-sm font-semibold text-slate-700 mb-2">Primary Pain Points</div>
                              <div className="space-y-2">
                                {persona.painPoints.map((point, i) => (
                                  <div key={i} className="flex items-start gap-2 rounded-lg bg-rose-50/50 p-2">
                                    <AlertCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-700">{point}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Media Consumption */}
                            <div>
                              <div className="text-sm font-semibold text-slate-700 mb-2">Media Consumption</div>
                              <div className="flex flex-wrap gap-2">
                                {persona.media.map((medium, i) => (
                                  <Badge key={i} variant="denim" className="text-xs gap-1">
                                    {medium.icon}
                                    {medium.name}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-2">
                              <Button variant="outline" size="sm" className="gap-1">
                                <Eye className="h-3 w-3" />
                                Full Profile
                              </Button>
                              <Button size="sm" className="bg-gradient-indigo hover:opacity-90 text-white gap-1">
                                <Target className="h-3 w-3" />
                                Target
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Pain Point Matrix */}
        <TabsContent value="pain-points" className="space-y-6">
          {/* Pain Point Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pain Point Severity & Frequency</CardTitle>
                <CardDescription>Impact vs. occurrence rate</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={painPointData}
                  xAxisKey="category"
                  bars={[
                    { dataKey: 'severity', name: 'Severity Score', color: CHART_COLORS.rose },
                    { dataKey: 'frequency', name: 'Frequency', color: CHART_COLORS.orange },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pain Point Sentiment Analysis</CardTitle>
                <CardDescription>Negative sentiment by category</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={painPointData}
                  xAxisKey="category"
                  areas={[
                    { dataKey: 'sentiment', name: 'Sentiment Score', color: CHART_COLORS.rose },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Pain Point Matrix" description="Systematic identification and prioritization of audience challenges">
            <div className="space-y-6">
              {/* Pain Point Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-rose-600">47</div>
                    <div className="text-sm text-slate-600 mt-1">Active Pain Points</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-amber-600">12</div>
                    <div className="text-sm text-slate-600 mt-1">High Priority</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-emerald-600">34</div>
                    <div className="text-sm text-slate-600 mt-1">Addressed</div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-extrabold text-indigo-600">89%</div>
                    <div className="text-sm text-slate-600 mt-1">Resolution Rate</div>
                  </CardContent>
                </Card>
              </div>

              {/* Pain Point Categories */}
              <div className="grid gap-6 lg:grid-cols-2">
                {painPointCategories.map((category, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-${category.color} text-white`}>
                            {category.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{category.name}</CardTitle>
                            <CardDescription>{category.count} pain points</CardDescription>
                          </div>
                        </div>
                        <Badge variant={category.severity === 'high' ? 'destructive' : category.severity === 'medium' ? 'warning' : 'success'} className="text-xs">
                          {category.severity} severity
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.painPoints.slice(0, 4).map((point, i) => (
                          <div key={i} className="flex items-start justify-between rounded-lg bg-slate-50/50 p-3">
                            <div className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                              <div>
                                <div className="text-sm font-medium text-slate-900">{point.title}</div>
                                <div className="text-xs text-slate-500">{point.affected} affected</div>
                              </div>
                            </div>
                            <Badge variant={point.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                              {point.priority}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pain Point Trend Analysis */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Emerging Pain Points</CardTitle>
                  <CardDescription>Newly identified or growing concerns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {emergingPainPoints.map((point, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg bg-amber-50/50 border border-amber-200 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-white">
                          <TrendingUp className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-slate-900">{point.title}</h4>
                              <p className="mt-1 text-sm text-slate-600">{point.description}</p>
                              <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                                <span>Affected: {point.affected}</span>
                                <span>•</span>
                                <span>Growth: +{point.growth}%</span>
                              </div>
                            </div>
                            <Badge variant="warning" className="text-xs">Emerging</Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1 shrink-0">
                          <Eye className="h-3 w-3" />
                          Analyze
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Void Scanner */}
        <TabsContent value="voids" className="space-y-6">
          <GlassPanel title="Content Void Scanner" description="Identify high-demand topics with low content competition" badge="Opportunity">
            <div className="space-y-6">
              {/* Void Metrics */}
              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-cyan-600">23</div>
                      <div className="text-sm text-slate-600 mt-2">Active Voids</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-emerald-600">8.7/10</div>
                      <div className="text-sm text-slate-600 mt-2">Avg. Demand Score</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-purple-600">76%</div>
                      <div className="text-sm text-slate-600 mt-2">Avg. Content Gap</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Content Voids */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Identified Content Voids</CardTitle>
                      <CardDescription>High-opportunity areas for content creation</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Sort by Demand</Button>
                      <Button variant="outline" size="sm">Sort by Gap</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contentVoids.map((voidItem, index) => (
                      <div key={index} className="flex items-start gap-4 rounded-lg border-2 bg-slate-50/50 p-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-cyan text-white">
                          <Lightbulb className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-slate-900">{voidItem.title}</h4>
                                <Badge variant={voidItem.priority === 'high' ? 'destructive' : voidItem.priority === 'medium' ? 'warning' : 'cyan'} className="text-xs">
                                  {voidItem.priority} priority
                                </Badge>
                              </div>
                              <p className="mt-1 text-sm text-slate-600">{voidItem.description}</p>
                              <div className="mt-3 grid grid-cols-4 gap-4">
                                <div>
                                  <div className="text-xs text-slate-500">Demand Score</div>
                                  <div className="flex items-center gap-1">
                                    <ArrowUp className="h-3 w-3 text-emerald-500" />
                                    <span className="text-sm font-bold text-slate-900">{voidItem.demandScore}/10</span>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-xs text-slate-500">Content Gap</div>
                                  <div className="flex items-center gap-1">
                                    <ArrowDown className="h-3 w-3 text-rose-500" />
                                    <span className="text-sm font-bold text-slate-900">{voidItem.contentGap}%</span>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-xs text-slate-500">Competition</div>
                                  <span className="text-sm font-bold text-slate-900">{voidItem.competition}</span>
                                </div>
                                <div>
                                  <div className="text-xs text-slate-500">Opportunity</div>
                                  <span className="text-sm font-bold text-cyan-600">{voidItem.opportunity}</span>
                                </div>
                              </div>
                            </div>
                            <Button className="bg-gradient-cyan hover:opacity-90 text-white gap-1 shrink-0">
                              <Sparkles className="h-3 w-3" />
                              Create Content
                            </Button>
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

        {/* Targeting Strategy */}
        <TabsContent value="targeting" className="space-y-6">
          {/* Targeting Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Targeting Accuracy Trends</CardTitle>
                <CardDescription>6-month performance improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={targetingAccuracyData}
                  xAxisKey="month"
                  lines={[
                    { dataKey: 'accuracy', name: 'Accuracy %', color: CHART_COLORS.indigo },
                    { dataKey: 'reach', name: 'Reach %', color: CHART_COLORS.emerald },
                    { dataKey: 'conversion', name: 'Conversion %', color: CHART_COLORS.purple },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Channel Effectiveness by Persona</CardTitle>
                <CardDescription>Platform performance across key personas</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={channelEffectivenessData}
                  xAxisKey="channel"
                  bars={[
                    { dataKey: 'expatMom', name: 'Expat Mom', color: CHART_COLORS.purple },
                    { dataKey: 'techie', name: 'Techie', color: CHART_COLORS.indigo },
                    { dataKey: 'elder', name: 'Elder', color: CHART_COLORS.denim },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Precision Targeting Strategy" description="Data-driven audience segmentation and campaign targeting">
            <div className="space-y-6">
              {/* Active Campaigns */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Active Targeting Campaigns</CardTitle>
                      <CardDescription>Persona-based campaigns currently running</CardDescription>
                    </div>
                    <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
                      <Target className="h-4 w-4" />
                      New Campaign
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {targetingCampaigns.map((campaign, index) => (
                      <Card key={index} className="glass-card">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-${campaign.color} text-white`}>
                              {campaign.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-semibold text-slate-900">{campaign.name}</h4>
                                    <Badge variant="success" className="text-xs">Active</Badge>
                                  </div>
                                  <p className="mt-1 text-sm text-slate-600">{campaign.description}</p>
                                  <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                                    <span>Target: {campaign.target}</span>
                                    <span>•</span>
                                    <span>Reach: {campaign.reach}</span>
                                    <span>•</span>
                                    <span>Platforms: {campaign.platforms}</span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-slate-900">{campaign.performance}%</div>
                                  <div className="text-xs text-slate-500">Performance</div>
                                </div>
                              </div>
                              <div className="mt-3 space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-slate-600">Campaign Progress</span>
                                  <span className="font-semibold text-slate-900">{campaign.progress}%</span>
                                </div>
                                <Progress value={campaign.progress} className="h-2" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Targeting Recommendations */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">AI Targeting Recommendations</CardTitle>
                  <CardDescription>Optimization suggestions for improved targeting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-4 rounded-lg bg-indigo-50/50 border border-indigo-200 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-slate-900">{rec.title}</h4>
                              <p className="mt-1 text-sm text-slate-600">{rec.description}</p>
                              <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                                <span>Expected Impact: +{rec.impact}%</span>
                                <span>•</span>
                                <span>{rec.effort} effort</span>
                              </div>
                            </div>
                            <Badge variant={rec.priority === 'high' ? 'destructive' : 'warning'} className="shrink-0 text-xs">
                              {rec.priority}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="gap-1 shrink-0">
                          Implement
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Shadow Narratives Tab */}
        <TabsContent value="shadow-narratives" className="space-y-6">
          <GlassPanel title="Abu Dhabi Shadow Narratives Intelligence" description="50 subversive conversations circulating in private networks" badge="Counter-Intelligence">
            <div className="space-y-6">
              {/* Executive Summary */}
              <Card className="glass-card border-purple-200 bg-purple-50/30">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                      <Ghost className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-purple-900">The Dual-State Reality of Abu Dhabi 2025</CardTitle>
                      <CardDescription className="text-purple-700/80 mt-2">
                        Intelligence analysis reveals a subterranean layer of social anxiety, digital paranoia, and economic fragility beneath the hyper-modern surface. These 50 Shadow Narratives represent perceived truths that drive behavior—where trust in the state remains absolute, but trust in the implications of its efficiency is fraying.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Data Privacy & Surveillance Narratives */}
              <Card className="glass-card border-rose-200 bg-rose-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Domain: Data Privacy & State Surveillance</CardTitle>
                      <CardDescription>Narratives 1-10 • The "Glass House" Effect</CardDescription>
                    </div>
                    <Badge variant="rose" className="text-xs">High Virality</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {dataPrivacyNarratives.map((narrative, index) => (
                        <Card key={index} className="border-l-4 border-l-rose-400 bg-rose-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="rose" className="text-xs">#{narrative.id}</Badge>
                              <h4 className="font-bold text-slate-900">{narrative.name}</h4>
                              <Badge variant={narrative.virality === 'Very High' ? 'destructive' : narrative.virality === 'High' ? 'warning' : 'secondary'} className="text-xs ml-auto">
                                {narrative.virality} Virality
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-700 italic">&quot;{narrative.belief}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <div className="text-xs text-slate-500">
                              <span className="font-semibold">Source:</span> {narrative.source} • <span className="font-semibold">Trigger:</span> {narrative.trigger}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Healthcare & Big Pharma Narratives */}
              <Card className="glass-card border-orange-200 bg-orange-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Domain: Healthcare & Big Pharma</CardTitle>
                      <CardDescription>Narratives 11-20 • Medical Distrust</CardDescription>
                    </div>
                    <Badge variant="orange" className="text-xs">Very High Virality</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {healthcareNarratives.map((narrative, index) => (
                        <Card key={index} className="border-l-4 border-l-orange-400 bg-orange-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="orange" className="text-xs">#{narrative.id}</Badge>
                              <h4 className="font-bold text-slate-900">{narrative.name}</h4>
                              <Badge variant={narrative.virality === 'Very High' ? 'destructive' : narrative.virality === 'High' ? 'warning' : 'secondary'} className="text-xs ml-auto">
                                {narrative.virality} Virality
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-700 italic">&quot;{narrative.belief}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <div className="text-xs text-slate-500">
                              <span className="font-semibold">Source:</span> {narrative.source} • <span className="font-semibold">Trigger:</span> {narrative.trigger}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Economic Anxiety Narratives */}
              <Card className="glass-card border-amber-200 bg-amber-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Domain: Economic Anxiety & Real Estate</CardTitle>
                      <CardDescription>Narratives 21-30 • Survival Narratives</CardDescription>
                    </div>
                    <Badge variant="warning" className="text-xs">High Virality</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {economicNarratives.map((narrative, index) => (
                        <Card key={index} className="border-l-4 border-l-amber-400 bg-amber-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="warning" className="text-xs">#{narrative.id}</Badge>
                              <h4 className="font-bold text-slate-900">{narrative.name}</h4>
                              <Badge variant={narrative.virality === 'Very High' ? 'destructive' : narrative.virality === 'High' ? 'warning' : 'secondary'} className="text-xs ml-auto">
                                {narrative.virality} Virality
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-700 italic">&quot;{narrative.belief}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <div className="text-xs text-slate-500">
                              <span className="font-semibold">Source:</span> {narrative.source} • <span className="font-semibold">Trigger:</span> {narrative.trigger}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Social Cultural Narratives */}
              <Card className="glass-card border-cyan-200 bg-cyan-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Domain: Social, Cultural & Infrastructure</CardTitle>
                      <CardDescription>Narratives 31-40 • Friction Narratives</CardDescription>
                    </div>
                    <Badge variant="cyan" className="text-xs">Very High Virality</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {socialCulturalNarratives.map((narrative, index) => (
                        <Card key={index} className="border-l-4 border-l-cyan-400 bg-cyan-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="cyan" className="text-xs">#{narrative.id}</Badge>
                              <h4 className="font-bold text-slate-900">{narrative.name}</h4>
                              <Badge variant={narrative.virality === 'Very High' ? 'destructive' : narrative.virality === 'High' ? 'warning' : 'secondary'} className="text-xs ml-auto">
                                {narrative.virality} Virality
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-700 italic">&quot;{narrative.belief}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <div className="text-xs text-slate-500">
                              <span className="font-semibold">Source:</span> {narrative.source} • <span className="font-semibold">Trigger:</span> {narrative.trigger}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Deep State Narratives */}
              <Card className="glass-card border-indigo-200 bg-indigo-50/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Domain: Deep State & Globalism</CardTitle>
                      <CardDescription>Narratives 41-50 • Grand Theories</CardDescription>
                    </div>
                    <Badge variant="indigo" className="text-xs">Medium Virality</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {deepStateNarratives.map((narrative, index) => (
                        <Card key={index} className="border-l-4 border-l-indigo-400 bg-indigo-50/20">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="indigo" className="text-xs">#{narrative.id}</Badge>
                              <h4 className="font-bold text-slate-900">{narrative.name}</h4>
                              <Badge variant={narrative.virality === 'Very High' ? 'destructive' : narrative.virality === 'High' ? 'warning' : 'secondary'} className="text-xs ml-auto">
                                {narrative.virality} Virality
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-700 italic">&quot;{narrative.belief}&quot;</p>
                          </CardHeader>
                          <CardContent>
                            <div className="text-xs text-slate-500">
                              <span className="font-semibold">Source:</span> {narrative.source} • <span className="font-semibold">Trigger:</span> {narrative.trigger}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* Strategic Synthesis */}
              <Card className="glass-card border-purple-200 bg-purple-50/20">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-purple-900">Strategic Synthesis</CardTitle>
                      <CardDescription className="text-purple-700/80 mt-2">
                        The analysis of 50 Shadow Narratives reveals that <strong>Anxiety is the primary driver of behavior in Abu Dhabi 2025</strong>. These narratives are indicators of systemic stress—opportunities to provide certainty in an uncertain world. For the counter-intelligence analyst, these narratives reveal fracture points between the promise of the smart city and the fear of surveillance.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Data
const personaOverview = [
  { name: 'Anxious Expat Mom', initials: 'AEM', subtitle: 'Family Health Concerns', size: 18, color: 'rose' },
  { name: 'Biohacking Techie', initials: 'BT', subtitle: 'Quantified Self', size: 12, color: 'purple' },
  { name: 'Traditionalist Elder', initials: 'TE', subtitle: 'Cultural Healthcare', size: 15, color: 'denim' },
  { name: 'Wellness Millennial', initials: 'WM', subtitle: 'Preventive Health', size: 22, color: 'emerald' },
]

const detailedPersonas = [
  {
    name: 'The Anxious Expat Mom',
    initials: 'AEM',
    tagline: 'Worried mother seeking reliable healthcare information for her family',
    segment: 'Primary Caregiver',
    population: 18,
    color: 'rose',
    age: '32-45',
    location: 'Abu Dhabi, Dubai',
    income: 'AED 25K-50K',
    education: "Bachelor's+",
    behaviors: ['Active on WhatsApp groups', 'Follows mom blogs', 'Uses Instagram for tips', 'Attends community events'],
    painPoints: [
      'Confusion about insurance coverage',
      'Difficulty finding pediatric specialists',
      'Language barriers in medical settings',
      'Concerns about vaccine safety',
    ],
    media: [
      { name: 'WhatsApp', icon: <MessageSquare className="h-3 w-3" /> },
      { name: 'Instagram', icon: <Heart className="h-3 w-3" /> },
      { name: 'Facebook', icon: <Users className="h-3 w-3" /> },
      { name: 'ExpatWoman Forum', icon: <Globe className="h-3 w-3" /> },
    ],
  },
  {
    name: 'The Biohacking Techie',
    initials: 'BT',
    tagline: 'Tech-savvy health optimizer using data to maximize wellness',
    segment: 'Early Adopter',
    population: 12,
    color: 'purple',
    age: '25-40',
    location: 'Urban Centers',
    income: 'AED 30K-70K',
    education: "Master's+",
    behaviors: ['Tracks health metrics', 'Uses wearables', 'Follows tech influencers', 'Experiments with supplements'],
    painPoints: [
      'Lack of personalized health data',
      'Limited biohacking resources in Arabic',
      'Difficulty finding functional medicine practitioners',
      'Insurance won\'t cover preventive treatments',
    ],
    media: [
      { name: 'Twitter/X', icon: <MessageSquare className="h-3 w-3" /> },
      { name: 'YouTube', icon: <Video className="h-3 w-3" /> },
      { name: 'Reddit', icon: <MessageSquare className="h-3 w-3" /> },
      { name: 'LinkedIn', icon: <Building className="h-3 w-3" /> },
    ],
  },
  {
    name: 'The Traditionalist Elder',
    initials: 'TE',
    tagline: 'Respectful of cultural traditions and prefers established healthcare methods',
    segment: 'Conservative User',
    population: 15,
    color: 'denim',
    age: '55+',
    location: 'All Emirates',
    income: 'AED 15K-40K',
    education: 'High School - Some College',
    behaviors: ['Trusts authority figures', 'Values family doctor relationships', 'Uses TV/radio for news', 'Prefers phone calls'],
    painPoints: [
      'Difficulty using digital health apps',
      'Preference for Arabic-language content',
      'Want more time with doctors',
      'Confused by health insurance terms',
    ],
    media: [
      { name: 'TV', icon: <Monitor className="h-3 w-3" /> },
      { name: 'Radio', icon: <Radio className="h-3 w-3" /> },
      { name: 'Newspaper', icon: <Newspaper className="h-3 w-3" /> },
      { name: 'WhatsApp', icon: <MessageSquare className="h-3 w-3" /> },
    ],
  },
]

const painPointCategories = [
  {
    name: 'Access & Navigation',
    count: 14,
    severity: 'high',
    color: 'rose',
    icon: <MapPin className="h-5 w-5" />,
    painPoints: [
      { title: 'Long wait times for appointments', affected: '67%', priority: 'high' },
      { title: 'Difficulty finding specialists', affected: '54%', priority: 'high' },
      { title: 'Confusing appointment systems', affected: '48%', priority: 'medium' },
      { title: 'Limited facility information', affected: '41%', priority: 'medium' },
    ],
  },
  {
    name: 'Insurance & Cost',
    count: 12,
    severity: 'high',
    color: 'amber',
    icon: <AlertCircle className="h-5 w-5" />,
    painPoints: [
      { title: 'Claim rejections confusing', affected: '52%', priority: 'high' },
      { title: 'Unclear coverage details', affected: '61%', priority: 'high' },
      { title: 'High out-of-pocket costs', affected: '38%', priority: 'medium' },
      { title: 'Pre-approval delays', affected: '34%', priority: 'medium' },
    ],
  },
  {
    name: 'Information Quality',
    count: 10,
    severity: 'medium',
    color: 'purple',
    icon: <Search className="h-5 w-5" />,
    painPoints: [
      { title: 'Conflicting health advice online', affected: '72%', priority: 'high' },
      { title: 'Misinformation spreading', affected: '58%', priority: 'medium' },
      { title: 'Lack of Arabic resources', affected: '45%', priority: 'medium' },
      { title: 'Outdated health information', affected: '39%', priority: 'low' },
    ],
  },
  {
    name: 'Digital Experience',
    count: 11,
    severity: 'medium',
    color: 'denim',
    icon: <Smartphone className="h-5 w-5" />,
    painPoints: [
      { title: 'Apps difficult to use', affected: '42%', priority: 'medium' },
      { title: 'Technical glitches', affected: '35%', priority: 'medium' },
      { title: 'Poor customer support', affected: '28%', priority: 'low' },
      { title: 'Limited features', affected: '31%', priority: 'low' },
    ],
  },
]

const emergingPainPoints = [
  {
    title: 'Post-COVID Long-term Symptoms',
    description: 'Growing number of patients reporting ongoing health issues after COVID-19 recovery with limited guidance',
    affected: '23%',
    growth: 156,
  },
  {
    title: 'Mental Health Access for Children',
    description: 'Parents struggling to find pediatric mental health resources and long wait times for specialists',
    affected: '18%',
    growth: 124,
  },
  {
    title: 'Fertility Treatment Coverage',
    description: 'Confusion and frustration around insurance coverage for IVF and fertility treatments',
    affected: '12%',
    growth: 89,
  },
]

const contentVoids = [
  {
    title: 'Men\'s Mental Health in Arabic',
    description: 'Severe lack of Arabic-language content addressing male mental health stigma and resources',
    priority: 'high',
    demandScore: 9.2,
    contentGap: 94,
    competition: 'Low',
    opportunity: 'Immediate',
  },
  {
    title: 'Biohacking for Beginners',
    description: 'Growing interest but minimal content explaining biohacking concepts for UAE audience',
    priority: 'high',
    demandScore: 8.7,
    contentGap: 87,
    competition: 'Low',
    opportunity: 'High',
  },
  {
    title: 'Neurodivergent Adult Resources',
    description: 'Scarce content for ADHD, autism, and neurodiversity in adult population',
    priority: 'high',
    demandScore: 8.4,
    contentGap: 81,
    competition: 'Very Low',
    opportunity: 'Emerging',
  },
  {
    title: 'Elderly Digital Health Guides',
    description: 'Aging population needs guidance on health apps and telehealth in simple Arabic',
    priority: 'medium',
    demandScore: 7.8,
    contentGap: 76,
    competition: 'Low',
    opportunity: 'Growing',
  },
  {
    title: 'Chronic Pain Alternative Therapies',
    description: 'Gap in content about non-pharmacological pain management options',
    priority: 'medium',
    demandScore: 7.2,
    contentGap: 68,
    competition: 'Medium',
    opportunity: 'Steady',
  },
]

const targetingCampaigns = [
  {
    name: 'Mental Health for Moms',
    description: 'Targeting anxious expat mothers with mental health resources and support',
    target: 'Anxious Expat Mom',
    reach: '450K',
    platforms: 6,
    performance: 87,
    progress: 72,
    color: 'rose',
    icon: <Heart className="h-6 w-6" />,
  },
  {
    name: 'Biohacking Education Series',
    description: 'Educational content for tech-savvy health optimizers',
    target: 'Biohacking Techie',
    reach: '280K',
    platforms: 4,
    performance: 82,
    progress: 45,
    color: 'purple',
    icon: <Brain className="h-6 w-6" />,
  },
  {
    name: 'Digital Health for Seniors',
    description: 'Simple guides for elderly population on using health apps',
    target: 'Traditionalist Elder',
    reach: '320K',
    platforms: 3,
    performance: 78,
    progress: 38,
    color: 'denim',
    icon: <Users className="h-6 w-6" />,
  },
]

const recommendations = [
  {
    title: 'Expand Arabic Mental Health Content',
    description: 'Create comprehensive Arabic-language mental health resources targeting mothers and families',
    impact: 23,
    effort: 'High',
    priority: 'high',
  },
  {
    title: 'Develop Biohacking Content Series',
    description: 'Launch educational series on preventive health and wellness optimization',
    impact: 18,
    effort: 'Medium',
    priority: 'medium',
  },
  {
    title: 'Create Elderly-Friendly Video Tutorials',
    description: 'Simple, step-by-step video guides for health apps in Arabic with large text',
    impact: 15,
    effort: 'Medium',
    priority: 'medium',
  },
]

// File 10: ABU DHABI SHADOW NARRATIVES - Data Arrays (50 Narratives)

type Virality = 'Very High' | 'High' | 'Medium' | 'Low'

const dataPrivacyNarratives: Array<{
  id: number
  name: string
  belief: string
  virality: Virality
  source: string
  trigger: string
}> = [
  {
    id: 1,
    name: 'Malaffi is the Insurance Denier',
    belief: 'Malaffi was engineered to provide insurance companies with perfect medical records to deny claims based on pre-existing conditions',
    virality: 'High',
    source: 'Reddit/WhatsApp',
    trigger: 'Claim denials'
  },
  {
    id: 2,
    name: 'Sahatna Listens',
    belief: 'The Sahatna app uses microphone permissions to listen for keywords (depressed, illegal) to flag users for monitoring',
    virality: 'Medium',
    source: 'Tech Forums',
    trigger: 'App permissions mistrust'
  },
  {
    id: 3,
    name: 'The DNA Clone Bank',
    belief: 'The Emirati Genome Program is harvesting biological data for cloning or bioweapon defense, not healthcare',
    virality: 'Low',
    source: 'Private Majlis',
    trigger: 'Lack of genetic literacy'
  },
  {
    id: 4,
    name: 'The Paternity Trap',
    belief: 'Widespread genetic testing will reveal non-paternity events, leading to criminal prosecution for adultery',
    virality: 'Medium',
    source: 'Legal Gossip/WhatsApp',
    trigger: 'Strict lineage laws'
  },
  {
    id: 5,
    name: 'Digital Face-Mapping in Malls',
    belief: 'Interactive mall kiosks and security cameras are building a facial recognition database to track debt absconders',
    virality: 'High',
    source: 'Expat Forums',
    trigger: 'Camera prevalence'
  },
  {
    id: 6,
    name: 'The VPN Honey Pot',
    belief: 'The government allows certain free VPNs to operate specifically to track traffic of those trying to hide',
    virality: 'High',
    source: 'Tech Blogs',
    trigger: 'Internet censorship'
  },
  {
    id: 7,
    name: 'WhatsApp AI Monitoring',
    belief: 'Advanced AI scans all WhatsApp voice notes for keywords related to dissent or debt',
    virality: 'Very High',
    source: 'Laborers/Taxi Drivers',
    trigger: 'Arrests for social media posts'
  },
  {
    id: 8,
    name: 'The Credit Score Blacklist',
    belief: 'A secret social credit score influences visa renewals based on traffic fines, debts, and online behavior',
    virality: 'Medium',
    source: 'PROs',
    trigger: 'Integrated services'
  },
  {
    id: 9,
    name: 'Smart Meters are Spies',
    belief: 'Smart utility meters monitor occupancy levels to catch people overcrowding apartments',
    virality: 'Medium',
    source: 'Shared housing residents',
    trigger: 'Housing raids'
  },
  {
    id: 10,
    name: 'The Delete Button is a Lie',
    belief: 'Once data enters UAE government cloud, it is permanently archived even if a delete request is processed',
    virality: 'High',
    source: 'IT Professionals',
    trigger: 'Data permanence nature'
  },
]

const healthcareNarratives: Array<{
  id: number
  name: string
  belief: string
  virality: Virality
  source: string
  trigger: string
}> = [
  {
    id: 11,
    name: 'Doctors Get Kickbacks for Ozempic',
    belief: 'The Ozempic shortage is artificial and doctors are incentivized to reserve stock for wealthy cosmetic users',
    virality: 'Very High',
    source: 'Instagram Comments',
    trigger: 'Drug shortages'
  },
  {
    id: 12,
    name: 'Fake Ozempic Kills',
    belief: 'Fake pens sold online contain insulin or poison, leading to comas or death',
    virality: 'High',
    source: 'News/TikTok',
    trigger: 'Global alerts'
  },
  {
    id: 13,
    name: 'Western Doctors are Rejects',
    belief: 'Many Western doctors in private hospitals failed or were struck off in their home countries',
    virality: 'Medium',
    source: 'ExpatWoman Forums',
    trigger: 'Medical errors'
  },
  {
    id: 14,
    name: 'The Good Insurance is Only for Locals',
    belief: 'Thiqa covers luxury treatments while Daman Basic covers almost nothing, enforcing medical apartheid',
    virality: 'Very High',
    source: 'Workplace cafeterias',
    trigger: 'Coverage disparity'
  },
  {
    id: 15,
    name: 'Generic Drugs are Chalk',
    belief: 'Locally manufactured generic drugs are chemically inferior compared to European brands',
    virality: 'High',
    source: 'Pharmacy counters',
    trigger: 'Brand loyalty'
  },
  {
    id: 16,
    name: 'Mental Health Diagnosis = Job Loss',
    belief: 'Seeing a psychiatrist and using insurance will lead to immediate termination and visa cancellation',
    virality: 'Very High',
    source: 'HR Departments (off-record)',
    trigger: 'Stigma'
  },
  {
    id: 17,
    name: 'The Cancer Screening Trap',
    belief: 'Mandatory cancer screening gathers data to identify and weed out expensive patients from insurance pools',
    virality: 'Medium',
    source: 'Insurance forums',
    trigger: 'Mandatory screening news'
  },
  {
    id: 18,
    name: 'Water Causes Hair Loss',
    belief: 'Desalinated water is the sole cause of hair loss among expats',
    virality: 'Very High',
    source: 'Beauty Salons',
    trigger: 'Physical changes'
  },
  {
    id: 19,
    name: 'Biohacking is a Scam for the Rich',
    belief: 'Expensive IV drips and cryotherapy are placebo treatments designed to separate fools from money',
    virality: 'Medium',
    source: 'Skeptics',
    trigger: 'High costs'
  },
  {
    id: 20,
    name: 'Hospitals Inflate Bills',
    belief: 'Private hospitals order unnecessary MRIs and tests solely to bill insurance, driving up premiums',
    virality: 'High',
    source: 'Reddit',
    trigger: 'Premium hikes'
  },
]

const economicNarratives: Array<{
  id: number
  name: string
  belief: string
  virality: Virality
  source: string
  trigger: string
}> = [
  {
    id: 21,
    name: 'The Bubble Pops in 2026',
    belief: 'The current real estate market is overheated and will crash hard next year',
    virality: 'High',
    source: 'Investment Blogs',
    trigger: 'Price hikes'
  },
  {
    id: 22,
    name: 'Golden Visa Revocation',
    belief: 'Golden Visas can be cancelled retroactively if property values drop below the AED 2M threshold',
    virality: 'Medium',
    source: 'Real Estate Agents',
    trigger: 'Insecurity'
  },
  {
    id: 23,
    name: 'Income Tax is Coming',
    belief: 'The 2026 regulatory reset is a Trojan horse for introducing 5-10% personal income tax',
    virality: 'Very High',
    source: 'Corporate Tax Consultants',
    trigger: 'Global tax trends'
  },
  {
    id: 24,
    name: 'The Hidden School Fees',
    belief: 'Schools keep base tuition artificially low but collude with suppliers to gouge parents on mandatory extras',
    virality: 'Very High',
    source: 'Parent Groups',
    trigger: 'Education costs'
  },
  {
    id: 25,
    name: 'Rent Controls are Fake',
    belief: 'Landlords have wasta to bypass the 5% rent cap increase limit',
    virality: 'High',
    source: 'Tenant Forums',
    trigger: 'Rent hikes'
  },
  {
    id: 26,
    name: 'Fake Job Offers',
    belief: '50% of job listings are fake data-harvesting schemes or scams designed to steal identity',
    virality: 'High',
    source: 'LinkedIn',
    trigger: 'Ghosting by recruiters'
  },
  {
    id: 27,
    name: 'Cryptocurrency Crackdown',
    belief: 'Banks will freeze accounts associated with any crypto transaction without warning',
    virality: 'Medium',
    source: 'Crypto Telegram',
    trigger: 'Banking regulations'
  },
  {
    id: 28,
    name: 'The Bachelor Tax',
    belief: 'Secret extra fees or utility hikes target single men living in family zones',
    virality: 'Medium',
    source: 'Labor Camps',
    trigger: 'Segregation'
  },
  {
    id: 29,
    name: 'Freelancer Visa Trap',
    belief: 'Freelance visas identify and tax individuals who lack corporate protection',
    virality: 'Medium',
    source: 'Freelancers',
    trigger: 'Tax laws'
  },
  {
    id: 30,
    name: 'Emiratization is Ghost Employment',
    belief: 'Companies hire locals only on paper to meet quotas without them actually working',
    virality: 'High',
    source: 'Private Sector Offices',
    trigger: 'Quota systems'
  },
]

const socialCulturalNarratives: Array<{
  id: number
  name: string
  belief: string
  virality: Virality
  source: string
  trigger: string
}> = [
  {
    id: 31,
    name: 'The Hidden Traffic Cameras',
    belief: 'Cameras are hidden in trees and streetlights to generate revenue, not ensure safety',
    virality: 'Very High',
    source: 'Taxi Drivers',
    trigger: 'Ninja cameras'
  },
  {
    id: 32,
    name: 'The 20km Buffer Trap',
    belief: 'Removing the speed buffer was designed to catch long-term residents out of habit',
    virality: 'High',
    source: 'Driving Schools',
    trigger: 'Fines'
  },
  {
    id: 33,
    name: 'The Haunted Highway',
    belief: 'Jinn possess cars on the Abu Dhabi-Dubai highway or in Al Madam, causing accidents',
    virality: 'High',
    source: 'Folklore/YouTube',
    trigger: 'Desert isolation'
  },
  {
    id: 34,
    name: 'Wasta Determines Fines',
    belief: 'If you have the right license plate or family name, traffic fines disappear from the system',
    virality: 'High',
    source: 'Coffee Shop Talk',
    trigger: 'Perceived inequality'
  },
  {
    id: 35,
    name: 'The Club is Rigged',
    belief: 'The Club membership is manipulated by a clique and impossible to enter without bribery',
    virality: 'Medium',
    source: 'Rejected Applicants',
    trigger: 'Exclusivity'
  },
  {
    id: 36,
    name: 'Rain Seeding Conspiracy',
    belief: 'Every storm is caused by cloud seeding gone wrong, leading to intentional floods',
    virality: 'Very High',
    source: 'Twitter/X',
    trigger: 'Weather modification program'
  },
  {
    id: 37,
    name: 'Filipinos Run the Health System',
    belief: 'Without Filipino nurses, the entire healthcare system would collapse overnight',
    virality: 'Medium',
    source: 'Hospital Corridors',
    trigger: 'Demographics'
  },
  {
    id: 38,
    name: 'The Secret Alcohol Ban',
    belief: 'Alcohol licenses will be revoked or made stricter during religious holidays',
    virality: 'Low',
    source: 'Hotel Bars',
    trigger: 'Conservative shifts'
  },
  {
    id: 39,
    name: 'Westerners Get Paid Double',
    belief: 'A Western passport automatically doubles the salary for the exact same role',
    virality: 'Very High',
    source: 'Asian Expat Forums',
    trigger: 'Wage gaps'
  },
  {
    id: 40,
    name: 'The Bad Air Quality',
    belief: 'Air quality apps are censored to hide true pollution levels to protect tourism',
    virality: 'Medium',
    source: 'Eco-conscious Expats',
    trigger: 'Respiratory issues'
  },
]

const deepStateNarratives: Array<{
  id: number
  name: string
  belief: string
  virality: Virality
  source: string
  trigger: string
}> = [
  {
    id: 41,
    name: 'Abu Dhabi is the New Geneva',
    belief: 'World elites are moving to AD to escape World War 3, driving up prices',
    virality: 'Medium',
    source: 'Geopolitical Forums',
    trigger: 'Global instability'
  },
  {
    id: 42,
    name: 'The 15-Minute City Control',
    belief: 'New urban planning is designed to lock people into zones and restrict movement',
    virality: 'Low',
    source: 'Global Conspiracy Import',
    trigger: 'Urban planning'
  },
  {
    id: 43,
    name: 'CBDCs will Replace Cash',
    belief: 'The UAE will ban cash entirely to track every transaction via Central Bank Digital Currency',
    virality: 'High',
    source: 'Crypto Groups',
    trigger: 'Digital dirham news'
  },
  {
    id: 44,
    name: 'The Real Population is Double',
    belief: 'Census numbers hide true number of low-income workers to improve per-capita stats',
    virality: 'Low',
    source: 'Urban Explorers',
    trigger: 'Crowded labor areas'
  },
  {
    id: 45,
    name: 'Food Security Panic',
    belief: 'The UAE has only 3 days of food if ports close due to regional conflict',
    virality: 'Medium',
    source: 'Preppers',
    trigger: 'Import dependence'
  },
  {
    id: 46,
    name: 'The AI Replacement',
    belief: 'The government plans to replace 50% of expat white-collar jobs with AI by 2030',
    virality: 'Medium',
    source: 'Tech Conferences',
    trigger: 'AI adoption speed'
  },
  {
    id: 47,
    name: 'Social Media Permit is a Trap',
    belief: 'Getting the influencer permit flags you for tax audits and content censorship',
    virality: 'High',
    source: 'Influencers',
    trigger: 'New laws'
  },
  {
    id: 48,
    name: 'The Good Vaccines were Withheld',
    belief: 'Old COVID rumors recycling into new health scares about available treatments',
    virality: 'Low',
    source: 'Anti-vax Groups',
    trigger: 'Health mandates'
  },
  {
    id: 49,
    name: 'Real Estate Agents are Hoarding Units',
    belief: 'The housing shortage is fake and created by agents holding keys to drive up prices',
    virality: 'High',
    source: 'Angry Tenants',
    trigger: 'Rental market'
  },
  {
    id: 50,
    name: 'The Exit Tax',
    belief: 'A final tax will be levied on expats leaving the country permanently to capture savings',
    virality: 'Medium',
    source: 'Financial Advisors (scare tactic)',
    trigger: 'EOSB changes'
  },
]
