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
  ArrowRight,
  ArrowUpRight,
  Building,
  Bot,
  Calendar,
  Clock,
  Copy,
  Edit3,
  Eye,
  FileText,
  Flag,
  Heart,
  Image,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Palette,
  Plus,
  RefreshCw,
  Save,
  Share2,
  Shield,
  Sparkles,
  TrendingUp,
  Type,
  User,
  Users,
  Video,
  Wand2,
  Zap,
} from 'lucide-react'
import { perceptionData } from '@/lib/data-loader'

export default function ProductionPage() {
  // Extract real data from data loader
  const { narrativeArchitecture, contentFactory, toneCalibrator } = perceptionData.production
  // Content production trends
  const contentProductionData = [
    { month: 'Aug', generated: 2150, aiAssisted: 1650, quality: 91 },
    { month: 'Sep', generated: 2380, aiAssisted: 1950, quality: 92 },
    { month: 'Oct', generated: 2560, aiAssisted: 2150, quality: 93 },
    { month: 'Nov', generated: 2650, aiAssisted: 2280, quality: 94 },
    { month: 'Dec', generated: 2720, aiAssisted: 2350, quality: 94 },
    { month: 'Jan', generated: 2847, aiAssisted: 2475, quality: 95 },
  ]

  // Content type distribution
  const contentTypeData = [
    { type: 'Social Media Posts', count: 1450, engagement: 85 },
    { type: 'Blog Articles', count: 325, engagement: 72 },
    { type: 'Video Scripts', count: 185, engagement: 88 },
    { type: 'Infographics', count: 420, engagement: 78 },
    { type: 'Press Releases', count: 120, engagement: 65 },
    { type: 'Email Campaigns', count: 347, engagement: 68 },
  ]

  // Narrative framework performance
  const frameworkPerformanceData = [
    { framework: 'Hero Narrative', usage: 450, performance: 92 },
    { framework: 'Victim Narrative', usage: 280, performance: 85 },
    { framework: 'Progress Narrative', usage: 520, performance: 88 },
    { framework: 'Crisis Response', usage: 185, performance: 95 },
    { framework: 'Educational', usage: 640, performance: 82 },
  ]

  // Tone calibration analysis
  const toneCalibrationData = [
    { dimension: 'Professional', current: 85, target: 90 },
    { dimension: 'Empathetic', current: 78, target: 85 },
    { dimension: 'Authoritative', current: 82, target: 88 },
    { dimension: 'Accessible', current: 75, target: 80 },
    { dimension: 'Reassuring', current: 88, target: 92 },
  ]

  // AI model performance
  const aiModelPerformanceData = [
    { model: 'GPT-4 Turbo', accuracy: 94, speed: 85, cost: 72 },
    { model: 'Claude 3.5', accuracy: 92, speed: 88, cost: 78 },
    { model: 'Gemini Pro', accuracy: 89, speed: 92, cost: 85 },
    { model: 'Llama 3', accuracy: 82, speed: 95, cost: 95 },
  ]

  // Template usage statistics
  const templateUsageData = [
    { category: 'Social Media', templates: 45, usage: 1250 },
    { category: 'Press Release', templates: 22, usage: 380 },
    { category: 'Blog Post', templates: 35, usage: 620 },
    { category: 'Email', templates: 28, usage: 480 },
    { category: 'Video Script', templates: 18, usage: 320 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Production</h1>
          <p className="mt-2 text-slate-600">
            Narrative architecture lab, AI content factory, and tone calibration
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Templates
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
          title="Content Generated"
          value="2,847"
          previousValue={2431}
          icon={<FileText className="h-6 w-6" />}
          gradient="indigo"
        />
        <MetricCard
          title="AI Adoption Rate"
          value="87%"
          previousValue={78}
          unit="AI-assisted"
          icon={<Bot className="h-6 w-6" />}
          gradient="purple"
          status="success"
        />
        <MetricCard
          title="Production Speed"
          value="4.2x"
          previousValue={3.1}
          unit="faster"
          icon={<Zap className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
        <MetricCard
          title="Quality Score"
          value="94.7%"
          previousValue={91.2}
          icon={<Sparkles className="h-6 w-6" />}
          gradient="cyan"
          status="success"
        />
      </div>

      <Tabs defaultValue="narrative" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="narrative">Narrative Architecture</TabsTrigger>
          <TabsTrigger value="factory">Content Factory</TabsTrigger>
          <TabsTrigger value="tone">Tone Calibrator</TabsTrigger>
          <TabsTrigger value="templates">Template Library</TabsTrigger>
        </TabsList>

        {/* Narrative Architecture */}
        <TabsContent value="narrative" className="space-y-6">
          {/* Narrative Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Content Production Trends</CardTitle>
                <CardDescription>6-month content generation volume</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={contentProductionData}
                  xAxisKey="month"
                  areas={[
                    { dataKey: 'generated', name: 'Total Generated', color: CHART_COLORS.indigo },
                    { dataKey: 'aiAssisted', name: 'AI-Assisted', color: CHART_COLORS.purple },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Narrative Framework Performance</CardTitle>
                <CardDescription>Usage vs. performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={frameworkPerformanceData}
                  xAxisKey="framework"
                  bars={[
                    { dataKey: 'usage', name: 'Usage Count', color: CHART_COLORS.indigo },
                    { dataKey: 'performance', name: 'Performance %', color: CHART_COLORS.emerald },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Narrative Architecture Lab" description="Design and test narrative frameworks before deployment" badge="AI-Powered">
            <div className="space-y-6">
              {/* Narrative Frameworks */}
              <div className="grid gap-6 lg:grid-cols-2">
                {narrativeFrameworks.map((framework, index) => (
                  <Card key={index} className="glass-card group hover:shadow-glass-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-${framework.color} text-white`}>
                          {framework.icon}
                        </div>
                        <Badge variant={framework.status === 'active' ? 'success' : 'secondary'} className="text-xs">
                          {framework.status}
                        </Badge>
                      </div>
                      <CardTitle className="mt-3">{framework.name}</CardTitle>
                      <CardDescription>{framework.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Usage</span>
                          <span className="font-semibold text-slate-900">{framework.usage}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Performance</span>
                          <span className="font-semibold text-emerald-600">{framework.performance}%</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1 flex-1">
                          <Edit3 className="h-3 w-3" />
                          Edit
                        </Button>
                        <Button size="sm" className="bg-gradient-indigo hover:opacity-90 text-white gap-1 flex-1">
                          <Wand2 className="h-3 w-3" />
                          Generate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Narrative Elements */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Narrative Elements Library</CardTitle>
                      <CardDescription>Building blocks for constructing narratives</CardDescription>
                    </div>
                    <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
                      <Plus className="h-4 w-4" />
                      Add Element
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {narrativeElements.map((element, index) => (
                      <div key={index} className="rounded-lg bg-slate-50/50 border border-slate-200 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {element.icon}
                          <div className="font-semibold text-slate-900">{element.category}</div>
                        </div>
                        <div className="text-sm text-slate-600 mb-3">{element.count} templates</div>
                        <div className="flex flex-wrap gap-1">
                          {element.examples.slice(0, 3).map((example, i) => (
                            <Badge key={i} variant="outline" className="text-xs">{example}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Content Factory */}
        <TabsContent value="factory" className="space-y-6">
          <GlassPanel title="AI Content Factory" description="Generate and customize content with AI assistance" badge="Live">
            <div className="space-y-6">
              {/* Content Generator */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Content Generator</CardTitle>
                  <CardDescription>Create content for any platform in seconds</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Content Type Selection */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Content Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {contentTypes.map((type, index) => (
                        <button
                          key={index}
                          className={`flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all ${
                            type.selected ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-indigo-300'
                          }`}
                        >
                          {type.icon}
                          <span className="text-sm font-medium text-slate-900">{type.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Platform Selection */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Target Platform</label>
                    <div className="flex flex-wrap gap-2">
                      {platforms.map((platform, index) => (
                        <Badge
                          key={index}
                          variant={platform.selected ? 'indigo' : 'outline'}
                          className="cursor-pointer gap-1"
                        >
                          {platform.icon}
                          {platform.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Narrative Framework */}
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Narrative Framework</label>
                    <select className="w-full rounded-lg border border-slate-300 p-2 text-sm">
                      <option>Hero Narrative - Transformation Journey</option>
                      <option>Victim Narrative - Problem-Solution</option>
                      <option>Progress Narrative - Forward Momentum</option>
                      <option>Authority Narrative - Expert Guidance</option>
                    </select>
                  </div>

                  {/* Generate Button */}
                  <Button className="w-full bg-gradient-indigo hover:opacity-90 text-white gap-2">
                    <Wand2 className="h-4 w-4" />
                    Generate Content
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Generations */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Recent Generations</CardTitle>
                      <CardDescription>AI-generated content from your team</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-96">
                    <div className="space-y-3 pr-4">
                      {recentGenerations.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 rounded-lg bg-slate-50/50 p-4">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.color}`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold text-slate-900">{item.title}</h4>
                                <p className="mt-1 text-sm text-slate-600 line-clamp-2">{item.excerpt}</p>
                                <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                                  <span>{item.platform}</span>
                                  <span>•</span>
                                  <span>{item.author}</span>
                                  <span>•</span>
                                  <span>{item.time}</span>
                                </div>
                              </div>
                              <Badge variant="success" className="text-xs">AI Generated</Badge>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-1">
                              <Copy className="h-3 w-3" />
                              Copy
                            </Button>
                            <Button variant="outline" size="sm" className="gap-1">
                              <Edit3 className="h-3 w-3" />
                              Edit
                            </Button>
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

        {/* Tone Calibrator */}
        <TabsContent value="tone" className="space-y-6">
          {/* Tone Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tone Calibration Analysis</CardTitle>
                <CardDescription>Current vs. target tone scores</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={toneCalibrationData}
                  xAxisKey="dimension"
                  bars={[
                    { dataKey: 'current', name: 'Current Score', color: CHART_COLORS.indigo },
                    { dataKey: 'target', name: 'Target Score', color: CHART_COLORS.emerald },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Content Type Distribution</CardTitle>
                <CardDescription>Production volume by content type</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={[
                    { name: 'Social Media', value: 1450, color: CHART_COLORS.indigo },
                    { name: 'Blog Articles', value: 325, color: CHART_COLORS.purple },
                    { name: 'Video Scripts', value: 185, color: CHART_COLORS.denim },
                    { name: 'Infographics', value: 420, color: CHART_COLORS.emerald },
                    { name: 'Press Releases', value: 120, color: CHART_COLORS.rose },
                    { name: 'Email Campaigns', value: 347, color: CHART_COLORS.orange },
                  ]}
                  donut={true}
                  height={250}
                  showLegend={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Tone Calibrator" description="Fine-tune content voice for different audiences">
            <div className="space-y-6">
              {/* Tone Dimensions */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Tone Sliders</CardTitle>
                    <CardDescription>Adjust content personality</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {toneSliders.map((slider, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {slider.icon}
                            <span className="text-sm font-medium text-slate-700">{slider.name}</span>
                          </div>
                          <span className="text-sm font-bold text-slate-900">{slider.value}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div className={`h-full rounded-full bg-gradient-${slider.color}`} style={{ width: `${slider.value}%` }} />
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>{slider.low}</span>
                          <span>{slider.high}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Pre-set Tone Profiles</CardTitle>
                    <CardDescription>Quick-select audience-appropriate voices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {toneProfiles.map((profile, index) => (
                        <button
                          key={index}
                          className={`w-full flex items-start gap-3 rounded-lg border-2 p-3 text-left transition-all ${
                            profile.selected ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-indigo-300'
                          }`}
                        >
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${profile.color}`}>
                            {profile.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{profile.name}</div>
                            <div className="text-sm text-slate-600">{profile.description}</div>
                            <div className="mt-1 flex flex-wrap gap-1">
                              {profile.traits.map((trait, i) => (
                                <Badge key={i} variant="outline" className="text-xs">{trait}</Badge>
                              ))}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tone Preview */}
              <Card className="glass-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Live Tone Preview</CardTitle>
                      <CardDescription>See how tone changes affect content</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <RefreshCw className="h-3 w-3" />
                        Reset
                      </Button>
                      <Button size="sm" className="bg-gradient-indigo hover:opacity-90 text-white gap-1">
                        <Save className="h-3 w-3" />
                        Save Profile
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tonePreviews.map((preview, index) => (
                      <div key={index} className="rounded-lg bg-slate-50/50 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">{preview.platform}</Badge>
                          <span className="text-xs text-slate-500">{preview.length}</span>
                        </div>
                        <p className="text-sm text-slate-700">{preview.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Template Library */}
        <TabsContent value="templates" className="space-y-6">
          <GlassPanel title="Content Template Library" description="Pre-built templates for rapid content creation">
            <div className="space-y-6">
              {/* Template Categories */}
              <div className="flex gap-2 flex-wrap">
                <Badge variant="indigo" className="cursor-pointer">All Templates</Badge>
                <Badge variant="outline" className="cursor-pointer">Social Media</Badge>
                <Badge variant="outline" className="cursor-pointer">Blog Posts</Badge>
                <Badge variant="outline" className="cursor-pointer">Video Scripts</Badge>
                <Badge variant="outline" className="cursor-pointer">Email Newsletters</Badge>
                <Badge variant="outline" className="cursor-pointer">Press Releases</Badge>
                <Badge variant="outline" className="cursor-pointer">Infographics</Badge>
              </div>

              {/* Templates Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {templates.map((template, index) => (
                  <Card key={index} className="glass-card group hover:shadow-glass-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-${template.color} text-white`}>
                          {template.icon}
                        </div>
                        <Badge variant="outline" className="text-xs">{template.category}</Badge>
                      </div>
                      <CardTitle className="mt-3">{template.name}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Usage</span>
                          <span className="font-semibold text-slate-900">{template.usage}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Avg. Performance</span>
                          <span className="font-semibold text-emerald-600">{template.performance}%</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1 flex-1">
                          <Eye className="h-3 w-3" />
                          Preview
                        </Button>
                        <Button size="sm" className="bg-gradient-indigo hover:opacity-90 text-white gap-1 flex-1">
                          <Copy className="h-3 w-3" />
                          Use
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </GlassPanel>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Data
const narrativeFrameworks = [
  {
    name: 'Hero Narrative',
    description: 'Transformation journey from challenge to triumph',
    status: 'active',
    usage: '234 uses',
    performance: 89,
    color: 'purple',
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    name: 'Victim Narrative',
    description: 'Problem-solution framework addressing pain points',
    status: 'active',
    usage: '189 uses',
    performance: 82,
    color: 'rose',
    icon: <Heart className="h-6 w-6" />,
  },
  {
    name: 'Progress Narrative',
    description: 'Forward momentum and improvement stories',
    status: 'active',
    usage: '156 uses',
    performance: 86,
    color: 'emerald',
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    name: 'Authority Narrative',
    description: 'Expert guidance and thought leadership',
    status: 'draft',
    usage: '67 uses',
    performance: 91,
    color: 'denim',
    icon: <Shield className="h-6 w-6" />,
  },
]

const narrativeElements = [
  { category: 'Hooks', count: 45, examples: ['Question Hook', 'Stat Hook', 'Story Hook'], icon: <MessageSquare className="h-4 w-4 text-purple-500" /> },
  { category: 'Calls-to-Action', count: 38, examples: ['Soft CTA', 'Urgent CTA', 'Value CTA'], icon: <Zap className="h-4 w-4 text-emerald-500" /> },
  { category: 'Transitions', count: 52, examples: ['Bridge', 'Pivot', 'Reveal'], icon: <ArrowRight className="h-4 w-4 text-blue-500" /> },
  { category: 'Closings', count: 31, examples: ['Summary', 'Question', 'Inspiration'], icon: <Flag className="h-4 w-4 text-amber-500" /> },
  { category: 'Emotional Triggers', count: 27, examples: ['Hope', 'Urgency', 'Trust'], icon: <Heart className="h-4 w-4 text-rose-500" /> },
  { category: 'Social Proof', count: 43, examples: ['Testimonials', 'Stats', 'Endorsements'], icon: <Users className="h-4 w-4 text-indigo-500" /> },
]

const contentTypes = [
  { name: 'Social Post', icon: <MessageSquare className="h-6 w-6 text-slate-600" />, selected: true },
  { name: 'Blog Article', icon: <FileText className="h-6 w-6 text-slate-600" />, selected: false },
  { name: 'Video Script', icon: <Video className="h-6 w-6 text-slate-600" />, selected: false },
  { name: 'Infographic', icon: <Image className="h-6 w-6 text-slate-600" />, selected: false },
]

const platforms = [
  { name: 'Twitter/X', icon: <MessageSquare className="h-3 w-3" />, selected: true },
  { name: 'Instagram', icon: <Heart className="h-3 w-3" />, selected: true },
  { name: 'LinkedIn', icon: <Building className="h-3 w-3" />, selected: false },
  { name: 'Facebook', icon: <Users className="h-3 w-3" />, selected: false },
  { name: 'TikTok', icon: <Video className="h-3 w-3" />, selected: false },
  { name: 'YouTube', icon: <Video className="h-3 w-3" />, selected: false },
]

const recentGenerations = [
  {
    title: 'Mental Health Awareness Post',
    excerpt: 'Your mental health matters just as much as your physical health. Take a moment today to check in with yourself...',
    platform: 'Instagram',
    author: 'Dr. Sarah Al-Mansoori',
    time: '5 min ago',
    color: 'bg-gradient-purple text-white',
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: 'Vaccine Safety Information',
    excerpt: 'FAQ: COVID-19 Vaccine Safety\n\nQ: Are the vaccines safe?\nA: Yes, all vaccines undergo rigorous testing...',
    platform: 'Twitter/X',
    author: 'Ahmed Hassan',
    time: '15 min ago',
    color: 'bg-gradient-indigo text-white',
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: 'Healthcare Access Tips',
    excerpt: '5 Ways to Access Healthcare in Abu Dhabi:\n\n1. Download the Malaffi app\n2. Know your insurance coverage...',
    platform: 'LinkedIn',
    author: 'Fatima Al-Zahra',
    time: '1 hour ago',
    color: 'bg-gradient-denim text-white',
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: 'Wellness Wednesday Post',
    excerpt: 'Happy Wellness Wednesday! 🌿 This week\'s tip: Stay hydrated! Aim for 8 glasses of water a day...',
    platform: 'Instagram Stories',
    author: 'Aisha Al-Kaabi',
    time: '2 hours ago',
    color: 'bg-gradient-emerald text-white',
    icon: <Image className="h-5 w-5" />,
  },
]

const toneSliders = [
  { name: 'Formal → Casual', value: 65, low: 'Formal', high: 'Casual', color: 'purple', icon: <Type className="h-4 w-4 text-slate-500" /> },
  { name: 'Professional → Friendly', value: 72, low: 'Professional', high: 'Friendly', color: 'emerald', icon: <Heart className="h-4 w-4 text-slate-500" /> },
  { name: 'Serious → Humorous', value: 38, low: 'Serious', high: 'Humorous', color: 'amber', icon: <Sparkles className="h-4 w-4 text-slate-500" /> },
  { name: 'Complex → Simple', value: 81, low: 'Complex', high: 'Simple', color: 'denim', icon: <FileText className="h-4 w-4 text-slate-500" /> },
  { name: 'Passive → Active', value: 67, low: 'Passive', high: 'Active', color: 'rose', icon: <Zap className="h-4 w-4 text-slate-500" /> },
]

const toneProfiles = [
  {
    name: 'Healthcare Professional',
    description: 'Authoritative yet empathetic tone for medical content',
    traits: ['Professional', 'Trustworthy', 'Clear'],
    selected: true,
    color: 'bg-purple-100 text-purple-600',
    icon: <User className="h-5 w-5" />,
  },
  {
    name: 'Community Helper',
    description: 'Warm and approachable tone for public health messaging',
    traits: ['Friendly', 'Accessible', 'Caring'],
    selected: false,
    color: 'bg-emerald-100 text-emerald-600',
    icon: <Heart className="h-5 w-5" />,
  },
  {
    name: 'Tech Innovator',
    description: 'Modern and forward-thinking tone for digital health',
    traits: ['Modern', 'Innovative', 'Dynamic'],
    selected: false,
    color: 'bg-cyan-100 text-cyan-600',
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    name: 'Cultural Bridge',
    description: 'Respectful tone honoring traditions and values',
    traits: ['Respectful', 'Cultural', 'Traditional'],
    selected: false,
    color: 'bg-amber-100 text-amber-600',
    icon: <Shield className="h-5 w-5" />,
  },
]

const tonePreviews = [
  {
    platform: 'Instagram',
    length: '18 words',
    content: 'Taking care of your mental health is just as important as your physical health. You\'re not alone – we\'re here to help. 💙',
  },
  {
    platform: 'Twitter/X',
    length: '24 words',
    content: 'Remember: mental health matters. If you\'re feeling overwhelmed, reach out. Support is available. #MentalHealthAwareness #AbuDhabi',
  },
  {
    platform: 'LinkedIn',
    length: '38 words',
    content: 'As healthcare professionals, we recognize that mental wellness is integral to overall health. Our commitment extends beyond physical care to support your complete wellbeing journey.',
  },
]

const templates = [
  {
    name: 'Social Media Post',
    description: 'Engaging posts for all major platforms',
    category: 'Social Media',
    usage: '456 uses',
    performance: 87,
    color: 'purple',
    icon: <MessageSquare className="h-6 w-6" />,
  },
  {
    name: 'Blog Article',
    description: 'Long-form educational content',
    category: 'Blog Posts',
    usage: '234 uses',
    performance: 82,
    color: 'denim',
    icon: <FileText className="h-6 w-6" />,
  },
  {
    name: 'Video Script',
    description: 'Short-form and long-form video scripts',
    category: 'Video Scripts',
    usage: '189 uses',
    performance: 91,
    color: 'rose',
    icon: <Video className="h-6 w-6" />,
  },
  {
    name: 'Email Newsletter',
    description: 'Engaging email campaign templates',
    category: 'Email Newsletters',
    usage: '167 uses',
    performance: 78,
    color: 'amber',
    icon: <Mail className="h-6 w-6" />,
  },
  {
    name: 'Press Release',
    description: 'Official announcement templates',
    category: 'Press Releases',
    usage: '89 uses',
    performance: 85,
    color: 'emerald',
    icon: <FileText className="h-6 w-6" />,
  },
  {
    name: 'Infographic',
    description: 'Visual data representation',
    category: 'Infographics',
    usage: '123 uses',
    performance: 89,
    color: 'cyan',
    icon: <Image className="h-6 w-6" />,
  },
]
