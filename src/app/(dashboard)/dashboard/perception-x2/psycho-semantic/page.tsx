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
  BarChart,
  AreaChart,
  PieChart,
  RadarChart,
  LineChart,
  CHART_COLORS,
} from '@/components/ui/chart-library'
import {
  AlertTriangle,
  ArrowRight,
  Brain,
  Calendar,
  Clock,
  Frown,
  Flame,
  FileText,
  Globe,
  Heart,
  Home,
  Lightbulb,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { perceptionData } from '@/lib/data-loader'

export default function PsychoSemanticEnginePage() {
  // Extract real data from data loader
  const { temporalityOfTerror, epistemologyOfPain, systemicFriction } = perceptionData.psychoSemantic
  // Emotional state distribution
  const emotionalStateData = [
    { state: 'Anxiety', intensity: 72, trend: 15, frequency: 1450 },
    { state: 'Confusion', intensity: 58, trend: -8, frequency: 980 },
    { state: 'Hope', intensity: 68, trend: 22, frequency: 1250 },
    { state: 'Fear', intensity: 45, trend: -12, frequency: 720 },
    { state: 'Trust', intensity: 82, trend: 18, frequency: 1680 },
    { state: 'Frustration', intensity: 52, trend: -5, frequency: 850 },
  ]

  // Pain point severity
  const painPointSeverityData = [
    { category: 'Insurance Claims', severity: 92, impact: 85, urgency: 'high' },
    { category: 'Wait Times', severity: 85, impact: 78, urgency: 'high' },
    { category: 'Language Barrier', severity: 68, impact: 62, urgency: 'medium' },
    { category: 'Digital Access', severity: 52, impact: 48, urgency: 'medium' },
    { category: 'Cost Confusion', severity: 72, impact: 65, urgency: 'medium' },
  ]

  // Temporal fear patterns
  const temporalFearData = [
    { period: 'Immediate', fear: 85, coping: 45, resolution: 25 },
    { period: 'Short-term', fear: 72, coping: 58, resolution: 42 },
    { period: 'Medium-term', fear: 58, coping: 68, resolution: 55 },
    { period: 'Long-term', fear: 42, coping: 75, resolution: 68 },
  ]

  // Semantic pattern evolution
  const semanticPatternData = [
    { month: 'Aug', patterns: 2350, accuracy: 87, coverage: 78 },
    { month: 'Sep', patterns: 2480, accuracy: 88, coverage: 80 },
    { month: 'Oct', patterns: 2620, accuracy: 89, coverage: 82 },
    { month: 'Nov', patterns: 2750, accuracy: 90, coverage: 84 },
    { month: 'Dec', patterns: 2780, accuracy: 91, coverage: 85 },
    { month: 'Jan', patterns: 2800, accuracy: 91, coverage: 86 },
  ]

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Badge variant="indigo" className="mb-2">PERCEPTION-X2</Badge>
          <h1 className="text-3xl font-extrabold font-rajdhani gradient-text-indigo">Psycho-Semantic Engine</h1>
          <p className="mt-2 text-slate-600">
            Temporality of terror, epistemology of pain, and systemic friction emotions
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Deep Analysis
          </Button>
          <Button className="bg-gradient-indigo hover:opacity-90 text-white gap-2">
            <Brain className="h-4 w-4" />
            Run Engine
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Emotional States Tracked"
          value="144"
          previousValue={128}
          icon={<Brain className="h-6 w-6" />}
          gradient="purple"
        />
        <MetricCard
          title="Semantic Patterns"
          value="2.8K"
          previousValue={2341}
          icon={<Sparkles className="h-6 w-6" />}
          gradient="denim"
        />
        <MetricCard
          title="Pain Points Identified"
          value="67"
          previousValue={54}
          icon={<AlertTriangle className="h-6 w-6" />}
          gradient="rose"
        />
        <MetricCard
          title="Prediction Accuracy"
          value="91.2%"
          previousValue={87.8}
          icon={<Target className="h-6 w-6" />}
          gradient="emerald"
          status="success"
        />
      </div>

      <Tabs defaultValue="temporality" className="space-y-6">
        <TabsList className="glass-panel">
          <TabsTrigger value="temporality">Temporality of Terror</TabsTrigger>
          <TabsTrigger value="epistemology">Epistemology of Pain</TabsTrigger>
          <TabsTrigger value="friction">Systemic Friction</TabsTrigger>
          <TabsTrigger value="patterns">Pattern Analysis</TabsTrigger>
        </TabsList>

        {/* Temporality of Terror */}
        <TabsContent value="temporality" className="space-y-6">
          {/* Psycho-Semantic Analytics Dashboard */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Temporal Fear Patterns</CardTitle>
                <CardDescription>Fear, coping, and resolution over time</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChart
                  data={temporalFearData}
                  xAxisKey="period"
                  areas={[
                    { dataKey: 'fear', name: 'Fear Level', color: CHART_COLORS.rose },
                    { dataKey: 'coping', name: 'Coping Mechanism', color: CHART_COLORS.denim },
                    { dataKey: 'resolution', name: 'Resolution Rate', color: CHART_COLORS.emerald },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Emotional State Distribution</CardTitle>
                <CardDescription>Intensity and frequency of emotions</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={emotionalStateData}
                  xAxisKey="state"
                  bars={[
                    { dataKey: 'intensity', name: 'Intensity', color: CHART_COLORS.purple },
                    { dataKey: 'frequency', name: 'Frequency (div/10)', color: CHART_COLORS.indigo },
                  ]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>

          <GlassPanel title="Temporality of Terror Analysis" description="Time-based emotional response patterns" badge="Advanced">
            <div className="space-y-6">
              {/* Terror Timeline */}
              <div className="grid gap-6 lg:grid-cols-4">
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-rose-600">Peak</div>
                      <div className="text-sm text-slate-600 mt-2">Crisis Anxiety</div>
                      <div className="text-xs text-slate-500 mt-1">0-24 hours after</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-amber-600">High</div>
                      <div className="text-sm text-slate-600 mt-2">Confusion Period</div>
                      <div className="text-xs text-slate-500 mt-1">1-7 days after</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-purple-600">Recovery</div>
                      <div className="text-sm text-slate-600 mt-2">Trust Building</div>
                      <div className="text-xs text-slate-500 mt-1">2-4 weeks after</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-emerald-600">New Normal</div>
                      <div className="text-sm text-slate-600 mt-2">Stabilization</div>
                      <div className="text-xs text-slate-500 mt-1">1+ month after</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Temporal Patterns */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Time-Based Emotional Patterns</CardTitle>
                  <CardDescription>How emotions evolve across crisis timeline</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {temporalPatterns.map((pattern, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-purple text-white">
                          <Clock className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{pattern.phase}</div>
                          <p className="text-sm text-slate-600">{pattern.description}</p>
                          <div className="mt-2 grid grid-cols-3 gap-4 text-xs">
                            <div>
                              <span className="text-slate-500">Dominant Emotion</span>
                              <div className="font-semibold text-slate-900">{pattern.emotion}</div>
                            </div>
                            <div>
                              <span className="text-slate-500">Duration</span>
                              <div className="font-semibold text-slate-900">{pattern.duration}</div>
                            </div>
                            <div>
                              <span className="text-slate-500">Intensity</span>
                              <div className="font-semibold text-slate-900">{pattern.intensity}%</div>
                            </div>
                          </div>
                        </div>
                        <Badge variant={pattern.status === 'active' ? 'destructive' : pattern.status === 'stable' ? 'success' : 'secondary'} className="text-xs">
                          {pattern.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Epistemology of Pain */}
        <TabsContent value="epistemology" className="space-y-6">
          <GlassPanel title="Epistemology of Pain" description="Understanding how pain and suffering shape beliefs">
            <div className="space-y-6">
              {/* Pain Categories */}
              <div className="grid gap-6 lg:grid-cols-2">
                {painCategories.map((category, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-${category.color} text-white`}>
                          {category.icon}
                        </div>
                        <div>
                          <CardTitle className="text-base">{category.name}</CardTitle>
                          <CardDescription className="text-xs">{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Prevalence</span>
                          <span className="font-semibold text-slate-900">{category.prevalence}%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Impact on Decisions</span>
                          <span className="font-semibold text-slate-900">{category.impact}%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Treatment Response</span>
                          <span className={`font-semibold ${category.response >= 70 ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {category.response}%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pain-Belief Connections */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Pain-Belief Connections</CardTitle>
                  <CardDescription>How different pain types influence healthcare beliefs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {painBeliefConnections.map((connection, index) => (
                      <div key={index} className="flex items-center gap-4 rounded-lg bg-slate-50/50 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
                          <Frown className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{connection.painType}</div>
                          <div className="text-sm text-slate-600">{connection.description}</div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-400 shrink-0" />
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                          <Brain className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{connection.belief}</div>
                          <div className="text-sm text-slate-600">{connection.influence}</div>
                        </div>
                        <Badge variant={connection.strength === 'strong' ? 'destructive' : 'secondary'} className="text-xs">
                          {connection.strength}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </GlassPanel>
        </TabsContent>

        {/* Systemic Friction */}
        <TabsContent value="friction" className="space-y-6">
          <GlassPanel title="Systemic Friction Emotions" description="Identify and address sources of systemic resistance">
            <div className="space-y-6">
              {/* Friction Sources */}
              <div className="grid gap-6 lg:grid-cols-3">
                {frictionSources.map((source, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-${source.color} text-white`}>
                          {source.icon}
                        </div>
                        <Badge variant={source.level === 'high' ? 'destructive' : source.level === 'medium' ? 'warning' : 'secondary'} className="text-xs">
                          {source.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-base mt-2">{source.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Affected</span>
                          <span className="font-semibold text-slate-900">{source.affected}%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Intensity</span>
                          <span className="font-semibold text-slate-900">{source.intensity}%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Trend</span>
                          <span className={`font-semibold ${source.trend >= 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                            {source.trend >= 0 ? <TrendingUp className="h-3 w-3 inline" /> : <TrendingDown className="h-3 w-3 inline" />}
                            {Math.abs(source.trend)}%
                          </span>
                        </div>
                      </div>
                      <Progress value={source.intensity} className="h-2 mt-3" />
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Friction Resolution */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Friction Resolution Strategies</CardTitle>
                  <CardDescription>AI-recommended approaches to reduce systemic friction</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {resolutionStrategies.map((strategy, index) => (
                      <div key={index} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50/50 p-4">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                          strategy.priority === 'high' ? 'bg-rose-500 text-white' :
                          'bg-slate-200 text-slate-600'
                        }`}>
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-slate-900">{strategy.title}</h4>
                              <p className="mt-1 text-sm text-slate-600">{strategy.description}</p>
                              <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                                <span>Expected Impact: {strategy.impact}%</span>
                                <span>•</span>
                                <span>{strategy.timeline}</span>
                              </div>
                            </div>
                            <Badge variant={strategy.priority === 'high' ? 'destructive' : 'secondary'} className="shrink-0 text-xs">
                              {strategy.priority}
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

        {/* Pattern Analysis */}
        <TabsContent value="patterns" className="space-y-6">
          <GlassPanel title="Semantic Pattern Analysis" description="Discover patterns in language and emotion">
            <div className="space-y-6">
              {/* Pattern Discovery */}
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Emerging Patterns</CardTitle>
                    <CardDescription>Newly identified semantic patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {emergingPatterns.map((pattern, index) => (
                        <div key={index} className="flex items-center gap-3 rounded-lg bg-emerald-50/50 border border-emerald-200 p-3">
                          <Sparkles className="h-5 w-5 text-emerald-500 shrink-0" />
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{pattern.name}</div>
                            <div className="text-xs text-slate-500">{pattern.frequency} mentions • {pattern.confidence}% confidence</div>
                          </div>
                          <Badge variant="success" className="text-xs">{pattern.sentiment}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Declining Patterns</CardTitle>
                    <CardDescription>Semantic patterns losing relevance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {decliningPatterns.map((pattern, index) => (
                        <div key={index} className="flex items-center gap-3 rounded-lg bg-rose-50/50 border border-rose-200 p-3">
                          <TrendingDown className="h-5 w-5 text-rose-500 shrink-0" />
                          <div className="flex-1">
                            <div className="font-semibold text-slate-900">{pattern.name}</div>
                            <div className="text-xs text-slate-500">{pattern.frequency} mentions • {pattern.decline}% decline</div>
                          </div>
                          <Badge variant="destructive" className="text-xs">{pattern.sentiment}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pattern Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Pattern Evolution Timeline</CardTitle>
                  <CardDescription>How semantic patterns have evolved over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-80">
                    <div className="space-y-4 pr-4">
                      {patternEvolution.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex h-12 w-16 shrink-0 flex-col items-center">
                            <div className="text-xs text-slate-500">{item.date}</div>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-indigo text-white text-xs font-bold">
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-1 rounded-lg bg-slate-50/50 p-3">
                            <div className="font-semibold text-slate-900">{item.pattern}</div>
                            <p className="text-sm text-slate-600">{item.pattern}</p>
                            <div className="mt-1 text-xs text-slate-500">{item.impact} on discourse</div>
                          </div>
                          <Badge variant={item.sentiment === 'positive' ? 'success' : 'destructive'} className="text-xs shrink-0">
                            {item.sentiment}
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
      </Tabs>
    </div>
  )
}

// Data
const temporalPatterns = [
  { phase: 'Immediate Crisis', description: 'Peak anxiety and information-seeking', emotion: 'Fear/Urgency', duration: '0-24 hours', intensity: 89, status: 'critical' },
  { phase: 'Confusion Period', description: 'Sorting through conflicting information', emotion: 'Confusion/Doubt', duration: '1-7 days', intensity: 67, status: 'high' },
  { phase: 'Evaluation Phase', description: 'Assessing official responses', emotion: 'Skepticism → Hope', duration: '1-2 weeks', intensity: 45, status: 'medium' },
  { phase: 'Resolution Stage', description: 'Accepting new normal', emotion: 'Acceptance/Trust', duration: '2-4 weeks', intensity: 32, status: 'low' },
  { phase: 'Stabilization', description: 'Return to baseline', emotion: 'Stability/Calm', duration: '1+ month', intensity: 18, status: 'stable' },
]

const painCategories = [
  { name: 'Physical Pain', description: 'Chronic pain conditions and suffering', prevalence: 34, impact: 78, response: 62, color: 'rose', icon: <AlertTriangle className="h-5 w-5" /> },
  { name: 'Emotional Pain', description: 'Psychological and emotional suffering', prevalence: 28, impact: 82, response: 54, color: 'purple', icon: <Heart className="h-5 w-5" /> },
  { name: 'Existential Pain', description: 'Crisis of meaning and purpose', prevalence: 18, impact: 67, response: 48, color: 'denim', icon: <Search className="h-5 w-5" /> },
  { name: 'Social Pain', description: 'Isolation and disconnection suffering', prevalence: 22, impact: 71, response: 58, color: 'amber', icon: <Users className="h-5 w-5" /> },
]

const painBeliefConnections = [
  { painType: 'Chronic Pain', description: 'Long-term physical suffering', belief: 'Healthcare System Ineffective', influence: '67% less trust in medical institutions', strength: 'strong' },
  { painType: 'Financial Pain', description: 'Insurance and cost struggles', belief: 'Healthcare is Expensive', influence: '78% believe care is unaffordable', strength: 'strong' },
  { painType: 'Emotional Pain', description: 'Mental health struggles', belief: 'Stigma Around Help-Seeking', influence: '52% delay seeking treatment', strength: 'medium' },
  { painType: 'Information Pain', description: 'Confusion about health choices', belief: 'Misinformation More Trustworthy', influence: '34% turn to unverified sources', strength: 'medium' },
]

const frictionSources = [
  { name: 'Insurance Bureaucracy', affected: 67, intensity: 78, trend: 5, level: 'high', color: 'rose', icon: <FileText className="h-5 w-5" /> },
  { name: 'Wait Times', affected: 54, intensity: 71, trend: 8, level: 'high', color: 'amber', icon: <Clock className="h-5 w-5" /> },
  { name: 'Language Barriers', affected: 34, intensity: 52, trend: -3, level: 'medium', color: 'purple', icon: <Globe className="h-5 w-5" /> },
  { name: 'Cultural Mismatches', affected: 28, intensity: 45, trend: 2, level: 'low', color: 'denim', icon: <Home className="h-5 w-5" /> },
  { name: 'Digital Literacy', affected: 41, intensity: 38, trend: -8, level: 'medium', color: 'cyan', icon: <Sparkles className="h-5 w-5" /> },
]

const resolutionStrategies = [
  { title: 'Insurance Process Simplification', description: 'Streamline claim submission and tracking', impact: 23, timeline: '3-6 months', priority: 'high' },
  { title: 'Multilingual Content Expansion', description: 'Increase Arabic-language resources', impact: 18, timeline: '2-4 months', priority: 'medium' },
  { title: 'Cultural Competency Training', description: 'Train staff on cultural sensitivity', impact: 15, timeline: '6-12 months', priority: 'medium' },
  { title: 'Digital Health Navigation', description: 'Create guided app experiences', impact: 31, timeline: '1-3 months', priority: 'high' },
]

const emergingPatterns = [
  { name: 'Preventive Health Focus', frequency: '12.4K', confidence: 87, sentiment: 'Positive' },
  { name: 'Mental Health Openness', frequency: '8.9K', confidence: 82, sentiment: 'Positive' },
  { name: 'Digital Health Adoption', frequency: '7.2K', confidence: 76, sentiment: 'Positive' },
]

const decliningPatterns = [
  { name: 'Traditional Doctor Preference', frequency: '4.1K', decline: 23, sentiment: 'Neutral' },
  { name: 'Hospital-First Thinking', frequency: '3.4K', decline: 18, sentiment: 'Negative' },
  { name: 'Passive Patient Role', frequency: '2.8K', decline: 31, sentiment: 'Negative' },
]

const patternEvolution = [
  { date: 'Jan 12', pattern: 'Peak interest in preventive health', impact: '12% increase in wellness engagement', sentiment: 'positive' },
  { date: 'Jan 8', pattern: 'Mental health stigma breaking down', impact: '8% increase in help-seeking', sentiment: 'positive' },
  { date: 'Jan 5', pattern: 'Digital app adoption surges', impact: '34% increase in Malaffi usage', sentiment: 'positive' },
  { date: 'Dec 28', pattern: 'Insurance confusion peaks', impact: '23% rise in complaints', sentiment: 'negative' },
  { date: 'Dec 20', pattern: 'Vaccine hesitancy declining', impact: '15% drop in refusal rates', sentiment: 'positive' },
]
